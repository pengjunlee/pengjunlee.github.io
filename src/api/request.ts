import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { isNotNull } from '@/assets/utils/obj'
import { getApiBaseUrl } from '@/scripts/env'

const baseUrl = getApiBaseUrl()

export class Request {
  /** axios 实例 */
  instance: AxiosInstance
  /** 基础配置，url和超时时间 */
  baseConfig: AxiosRequestConfig = {
    baseURL: baseUrl,
    timeout: 60000
  }
  /**
   * 构造方法中会设置拦截器逻辑，配置文件为可选项
   * @param config 配置文件内容，为可选项
   */
  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))
    /**
     * 请求拦截
     */
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig): any => {
        return config
      },
      (err: any) => Promise.reject(err)
    )
    /**
     * 响应拦截
     */
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const status = res.status
        debugger
        if (status !== 200) {
          Promise.reject(res)
        }

        if (res.data) {
          return res.data
        } else {
          return {"html":'<div style="color:#E3E3E3;width:100%;height:300px;display:flex;justify-content: center;align-items: center;font-size:25px;">文章不存在</div>'}
        }

      },
      (err: any) => {
        let errorMsg = err.message
        let code = err.code
        if (code === 'ERR_NETWORK') {
          errorMsg = '网络错误,请检查您的网络是否通畅'
        }
        // 字符串和变量拼接：请求失败(${err.response.status})
        ElMessage({ message: errorMsg })
        return Promise.reject(err)
      }
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<any> {
    return this.instance.request(config)
  }

  public get<T>(url: string, params?: object): Promise<R<T>> {
    return this.instance.get(url, params)
  }

  public post<T>(url: string, data?: object, config?: object): Promise<R<T>> {
    return this.instance.post(url, data, config)
  }

  public delete<T>(url: string, params?: object): Promise<R<T>> {
    return this.instance.delete(url, params)
  }

  public getFile<T>(name: string): Promise<R<T>> {
    return this.instance.get(name)
  }
}

export interface R<T = any> {
  ok: boolean
  code: number
  msg: string
  traceId: string
  data?: T
}

/**
 * 判断接口响应码是否正确
 * @param code 接口响应码
 * @returns
 */
const isSuccessRCode = (code: string | number): boolean => {
  return code === 0 || code === '0' || code === 20000 || code === '20000'
}

export const defaultRequest = new Request()

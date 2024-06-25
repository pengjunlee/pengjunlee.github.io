var ve=Object.defineProperty;var fe=(t,o,e)=>o in t?ve(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var O=(t,o,e)=>(fe(t,typeof o!="symbol"?o+"":o,e),e);import{a as G,b as _e,c as ye,d as he,e as ge,f as be}from"./element-plus-BJNhNJy6.js";import{u as we}from"./vue-router-BKcYu3e2.js";import{f as ke,ac as Se,r,d as te,_ as z,o as y,c as w,B as u,C as h,V as D,G as T,u as d,A as xe,a as n,F as S,O as J,L as P,$ as Y,n as Z,a9 as Ce,aa as Te,E as Q,K as Ee}from"./@vue-DeiGdm1c.js";import{p as ze,m as Ie,d as Le,e as Re}from"./@element-plus-D2ZrbeLh.js";/* empty css              */import{i as F,a as oe,_ as se,b as Ae}from"./index-DBNuFTtQ.js";import{a as Be}from"./axios-Cm0UX6qg.js";import"./@ctrl-D_sRHO8g.js";import"./@vueuse-BYe3nKFQ.js";import"./lodash-es-B8hPxd1J.js";import"./pinia-CkjTwEMl.js";const Ne=(t,o)=>{let e=!1;ke(()=>{e||t()}),Se(()=>{e&&o(),e=!0})},je="blossom_web_",M={set(t,o){window.localStorage.setItem(V(t),JSON.stringify(o))},get(t){let o=window.localStorage.getItem(V(t));return JSON.parse(o)},remove(t){window.localStorage.removeItem(V(t))},clear(){window.localStorage.clear()}},V=t=>je+t,$="BLOSSOM-ARTICLE-FONT-SZIE",C=r(M.get($)||.9),Oe=()=>{C.value+=.1,M.set($,C.value)},Pe=()=>{C.value-=.1,M.set($,C.value)},Ve=()=>C.value,X=()=>C.value+"rem",De=t=>{let o=t.querySelectorAll("h1, h2, h3, h4, h5, h6"),e=[];for(let c=0;c<o.length;c++){let i=o[c],a=1,l=i.innerText,f=i.id;switch(i.localName){case"h1":a=1;break;case"h2":a=2;break;case"h3":a=3;break;case"h4":a=4;break;case"h5":a=5;break;case"h6":a=6;break}let x={content:l,clazz:"toc-"+a,id:f};e.push(x)}return e},Fe=t=>{let o=document.getElementById(t);o==null||o.scrollIntoView(!0)},Me=t=>F(t.icon)&&(t.icon.startsWith("http")||t.icon.startsWith("https")),$e=t=>F(t.icon),qe=t=>{let o=[];return t.t.forEach(e=>{e.toLocaleLowerCase()==="subject"?o.unshift({content:"专题",bgColor:"#565656",icon:"bl-a-lowerrightpage-line"}):e.toLocaleLowerCase()==="toc"?o.push({content:"目录",bgColor:"#939393"}):o.push({content:e})}),o},Ue=(t,o,e,c,i)=>{if(c==="copyPreCode"){let a=document.getElementById(i);if(a){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(a.innerText);{let l=document.createElement("textarea");return l.value=a.innerText,l.style.position="absolute",l.style.opacity="0",l.style.left="-999999px",l.style.top="-999999px",document.body.appendChild(l),l.focus(),l.select(),new Promise((f,x)=>{document.execCommand("copy")?f():x(),l.remove()})}}}},We=()=>{console.log("Blossom-web ===> 环境:","production")};We();const He=()=>window.blconfig.SYS.GITHUB_URL,Ke=He();class Ge{constructor(o){O(this,"instance");O(this,"baseConfig",{baseURL:Ke,timeout:6e4});this.instance=Be.create(Object.assign(this.baseConfig,o)),this.instance.interceptors.request.use(e=>e,e=>Promise.reject(e)),this.instance.interceptors.response.use(e=>{e.status!==200&&Promise.reject(e);let i=!1;if((e.config.responseType==="blob"||e.headers["content-type"]==="application/force-download")&&(oe(e.data.code)?ee(e.data.code)||(i=!1):i=!0),ee(e.data.code)&&(i=!0),i)return e.data;{let a=e.data;return a.url=e.config.url,G({message:e.data.msg,duration:9999}),Promise.reject(e)}},e=>{let c=e.message;return e.code==="ERR_NETWORK"&&(c="网络错误,请检查您的网络是否通畅"),G({message:c}),Promise.reject(e)})}request(o){return this.instance.request(o)}get(o,e){return this.instance.get(o,e)}post(o,e,c){return this.instance.post(o,e,c)}delete(o,e){return this.instance.delete(o,e)}getFile(o){return this.instance.get(o)}}const ee=t=>t===0||t==="0"||t===2e4||t==="20000",ne=new Ge,Je=t=>ne.get("/docTree.json"),Ye=t=>ne.getFile("/doc/20151/doc.html"),Ze={class:"detail"},Qe=te({__name:"ArticleSetting",setup(t){return(o,e)=>{const c=z("bl-tag"),i=_e,a=z("bl-row");return y(),w("div",Ze,[u(a,null,{default:h(()=>[D(" 文章字体大小： "),u(c,{style:{"margin-right":"15px"}},{default:h(()=>[D(T(d(Ve)().toFixed(1)),1)]),_:1}),u(i,{size:"small",icon:d(ze),onClick:e[0]||(e[0]=l=>d(Oe)())},null,8,["icon"]),u(i,{size:"small",icon:d(Ie),onClick:e[1]||(e[1]=l=>d(Pe)())},null,8,["icon"])]),_:1})])}}}),Xe=se(Qe,[["__scopeId","data-v-75d33a22"]]),E=t=>(Ce("data-v-c42d02e0"),t=t(),Te(),t),et={class:"articles-root"},tt={class:"headmenu"},ot=E(()=>n("div",{class:"iconbl bl-model-line"},null,-1)),st=E(()=>n("div",{style:{"font-size":"0.8rem"}},"文章列表",-1)),nt=E(()=>n("div",{style:{"font-size":"0.8rem"}},"目录",-1)),at=E(()=>n("div",{class:"iconbl bl-list-ordered"},null,-1)),lt={class:"main"},it={class:"doc-name"},ct=["src"],rt={key:1,class:"icon menu-icon","aria-hidden":"true"},dt=["xlink:href"],ut={class:"article-name"},pt=["innerHTML"],mt={class:"viewer-toc"},vt={key:0,class:"doc-info"},ft=E(()=>n("div",{class:"toc-title"},"目录",-1)),_t={class:"toc-content"},yt=["onClick"],ht=te({__name:"Articles",setup(t){Ne(()=>{window.onHtmlEventDispatch=Ue,e(),window.addEventListener("resize",B),K()},()=>{e(),window.addEventListener("resize",B),K()}),xe(()=>{window.removeEventListener("resize",B)});const o=r(),e=()=>{let s=c.query.articleId;ae(()=>{Z(()=>{o.value.setCurrentKey(a.value)})}),oe(s)&&(a.value=s,U({ty:3,i:s}))},c=we(),i=r(!0),a=r(""),l=r([]),f=r({id:0,pid:0,name:"",tags:[],sort:0,starStatus:0,openStatus:0,type:3,html:`<div style="color:#E3E3E3;width:100%;height:300px;display:flex;justify-content: center;
    align-items: center;font-size:25px;">请在左侧菜单选择文章</div>`}),x=r([]),q=r([]),I=r(),ae=s=>{i.value=!0,l.value=[],q.value=[];const p=m=>{l.value=m.data,l.value.forEach(N=>{q.value.push(N.i.toString())}),s&&s()};Je().then(m=>p(m)).finally(()=>i.value=!1)},U=async s=>{s.ty==3&&(await le(s.i),window.history.replaceState("","","#/articles?articleId="+s.i),Z(()=>{I.value.scrollTo({top:0}),ie(I.value)}))},le=async s=>{const p=m=>{Ae(m.data)||(f.value=m.data)};await Ye().then(m=>p(m))},ie=async s=>{x.value=De(s)},L=r(!1),ce=()=>{L.value=!0},k=r({display:"none"}),R=r(!1),g=r({display:"none",opacity:0}),A=r(!1),b=r({display:"none",opacity:0}),W=s=>{R.value=s,s&&(k.value={display:"block"},g.value={display:"block",opacity:0},setTimeout(()=>{g.value={display:"block",opacity:1}},1)),s||(g.value={display:"block",opacity:0},setTimeout(()=>{g.value={display:"none",opacity:0}},300))},H=s=>{A.value=s,s&&(k.value={display:"block"},b.value={display:"block",opacity:0},setTimeout(()=>{b.value={display:"block",opacity:1}},1)),s||(b.value={display:"block",opacity:0},setTimeout(()=>{b.value={display:"none",opacity:0}},300))},K=()=>{let s=document.body.clientWidth;s>1100&&(g.value={display:"block",opacity:1}),s>1100&&(k.value={display:"none"},b.value={display:"block",opacity:1})},re=()=>{W(!1),H(!1),k.value={display:"none"}},B=()=>{let s=document.body.clientWidth;s<1100&&(R.value=!1,g.value={display:"none",opacity:0}),s>1100&&(k.value={display:"none"},g.value={display:"block",opacity:1}),s<1100&&(A.value=!1,b.value={display:"none",opacity:0}),s>1100&&(k.value={display:"none"},b.value={display:"block",opacity:1})};return(s,p)=>{const m=z("bl-row"),N=z("bl-tag"),de=ye,ue=he,pe=ge,me=be;return y(),w(P,null,[n("div",et,[n("div",{class:"mask",style:S(k.value),onClick:re},null,4),n("div",tt,[u(m,{onClick:p[0]||(p[0]=_=>W(!R.value))},{default:h(()=>[ot,st]),_:1}),u(m,{just:"flex-end",onClick:p[1]||(p[1]=_=>H(!A.value))},{default:h(()=>[nt,at]),_:1})]),n("div",lt,[n("div",{class:"doc-tree-container",style:S(g.value)},[u(de,{ref_key:"DocTreeRef",ref:o,class:"doc-tree",data:l.value,"highlight-current":!0,indent:14,icon:d(Le),"node-key":"i",onNodeClick:U},{default:h(({_node:_,data:v})=>[n("div",{class:"menu-item-wrapper",style:S({marginTop:v.p==="0"?"5px":"1px",marginBottom:v.p==="0"?"5px":"1px"})},[n("div",{class:Q([(v.t.includes("subject"),"doc-title")])},[n("div",it,[d(Me)(v)?(y(),w("img",{key:0,class:"menu-icon-img",src:v.icon},null,8,ct)):d($e)(v)?(y(),w("svg",rt,[n("use",{"xlink:href":"#"+v.icon},null,8,dt)])):J("",!0),n("div",{class:"name-wrapper",style:S({maxWidth:d(F)(v.icon)?"calc(100% - 25px)":"100%"})},T(v.n),5),(y(!0),w(P,null,Y(d(qe)(v),j=>(y(),Ee(N,{"bg-color":j.bgColor,icon:j.icon},{default:h(()=>[D(T(j.content),1)]),_:2},1032,["bg-color","icon"]))),256))])],2)],4)]),_:1},8,["data","icon"])],4),n("div",{class:"doc-content-container",ref_key:"PreviewRef",ref:I,style:S({fontSize:d(X)()})},[n("div",ut,T(f.value.name),1),u(ue,{font:{color:"rgba(157, 157, 157, 0.2)",fontSize:"13",textBaseline:"hanging"},content:f.value.id>0?"Graython":"",gap:[250,250]},{default:h(()=>[n("div",{class:"bl-preview",style:S({fontSize:d(X)()}),innerHTML:f.value.html},null,12,pt)]),_:1},8,["font","content"])],4),n("div",{class:"toc-container",style:S(b.value)},[n("div",mt,[f.value.id!=0?(y(),w("div",vt)):J("",!0),ft,n("div",_t,[(y(!0),w(P,null,Y(x.value,_=>(y(),w("div",{key:_.id,class:Q(["toc-item","link",_.clazz]),onClick:v=>d(Fe)(_.id)},T(_.content),11,yt))),128))])])],4),n("div",{class:"module-workbench",onClick:ce},[u(pe,{color:"#7b7b7ba9"},{default:h(()=>[u(d(Re))]),_:1})])])]),u(me,{modelValue:L.value,"onUpdate:modelValue":p[2]||(p[2]=_=>L.value=_),class:"center-drawer",direction:"btt","close-on-click-modal":!0,"with-header":!0,"destroy-on-close":!0,size:"70px"},{default:h(()=>[u(Xe)]),_:1},8,["modelValue"])],64)}}}),Rt=se(ht,[["__scopeId","data-v-c42d02e0"]]);export{Rt as default};

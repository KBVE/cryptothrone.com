const __vite__fileDeps=["_astro/signals.module.BacEoWNe.js","_astro/preact.module.xMJTyml6.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as e,_ as m,B as c,D as v}from"./preact.module.xMJTyml6.js";const _=({value:t,name:o,hydrate:a=!0})=>t?e(a?"astro-slot":"astro-static-slot",{name:o,dangerouslySetInnerHTML:{__html:t}}):null;_.shouldComponentUpdate=()=>!1;var f=_;const i=new Map;var w=t=>async(o,a,{default:s,...d},{client:g})=>{if(!t.hasAttribute("ssr"))return;for(const[n,r]of Object.entries(d))a[n]=e(f,{value:r,name:n});if(t.dataset.preactSignals){const{signal:n}=await m(()=>import("./signals.module.BacEoWNe.js"),__vite__mapDeps([0,1]));let r=JSON.parse(t.dataset.preactSignals);for(const[u,l]of Object.entries(r)){if(!i.has(l)){const p=n(a[u]);i.set(l,p)}a[u]=i.get(l)}}(g!=="only"?v:c)(e(o,a,s!=null?e(f,{value:s}):s),t),t.addEventListener("astro:unmount",()=>c(null,t),{once:!0})};export{w as default};

let u=[],g=(e,f)=>{let t=[],l={get(){return l.lc||l.listen(()=>{})(),l.value},l:f||0,lc:0,listen(s,i){return l.lc=t.push(s,i||l.l)/2,()=>{let n=t.indexOf(s);~n&&(t.splice(n,2),--l.lc||l.off())}},notify(s){let i=!u.length;for(let n=0;n<t.length;n+=2)u.push(t[n],t[n+1],l.value,s);if(i){for(let n=0;n<u.length;n+=4){let c;for(let o=n+1;!c&&(o+=4)<u.length;)u[o]<u[n+1]&&(c=u.push(u[n],u[n+1],u[n+2],u[n+3]));c||u[n](u[n+2],u[n+3])}u.length=0}},off(){},set(s){l.value!==s&&(l.value=s,l.notify())},subscribe(s,i){let n=l.listen(s,i);return s(l.value),n},value:e};return l};let L=(e,f,t,l)=>(e.events=e.events||{},e.events[t+10]||(e.events[t+10]=l(s=>{e.events[t].reduceRight((i,n)=>(n(i),i),{shared:{},...s})})),e.events[t]=e.events[t]||[],e.events[t].push(f),()=>{let s=e.events[t],i=s.indexOf(f);s.splice(i,1),s.length||(delete e.events[t],e.events[t+10](),delete e.events[t+10])}),N=1e3,h=(e,f)=>L(e,l=>{let s=f(l);s&&e.events[6].push(s)},5,l=>{let s=e.listen;e.listen=(...n)=>(!e.lc&&!e.active&&(e.active=!0,l()),s(...n));let i=e.off;return e.events[6]=[],e.off=()=>{i(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let n of e.events[6])n();e.events[6]=[]}},N)},()=>{e.listen=s,e.off=i}}),U=(e={})=>{let f=g(e);return f.setKey=function(t,l){typeof l>"u"?t in f.value&&(f.value={...f.value},delete f.value[t],f.notify(t)):f.value[t]!==l&&(f.value={...f.value,[t]:l},f.notify(t))},f},T=e=>e,E={},a={addEventListener(){},removeEventListener(){}};function M(){try{return typeof localStorage<"u"}catch{return!1}}M()&&(E=localStorage);let O={addEventListener(e,f,t){window.addEventListener("storage",f),window.addEventListener("pageshow",t)},removeEventListener(e,f,t){window.removeEventListener("storage",f),window.removeEventListener("pageshow",t)}};typeof window<"u"&&(a=O);function y(e,f=void 0,t={}){let l=t.encode||T,s=t.decode||T,i=g(f),n=i.set;i.set=d=>{typeof d>"u"?delete E[e]:E[e]=l(d),n(d)};function c(d){d.key===e?d.newValue===null?n(void 0):n(s(d.newValue)):E[e]||n(void 0)}function o(){i.set(E[e]?s(E[e]):f)}return h(i,()=>{if(o(),t.listen!==!1)return a.addEventListener(e,c,o),()=>{a.removeEventListener(e,c,o)}}),i}function R(e,f={},t={}){let l=t.encode||T,s=t.decode||T,i=U(),n=i.setKey;i.setKey=(r,v)=>{typeof v>"u"?(t.listen!==!1&&a.perKey&&a.removeEventListener(e+r,o,d),delete E[e+r]):(t.listen!==!1&&a.perKey&&!(r in i.value)&&a.addEventListener(e+r,o,d),E[e+r]=l(v)),n(r,v)};let c=i.set;i.set=function(r){for(let v in r)i.setKey(v,r[v]);for(let v in i.value)v in r||i.setKey(v)};function o(r){r.key?r.key.startsWith(e)&&(r.newValue===null?n(r.key.slice(e.length),void 0):n(r.key.slice(e.length),s(r.newValue))):c({})}function d(){let r={...f};for(let v in E)v.startsWith(e)&&(r[v.slice(e.length)]=s(E[v]));i.set(r)}return h(i,()=>{if(d(),t.listen!==!1)return a.addEventListener(e,o,d),()=>{a.removeEventListener(e,o,d);for(let r in i.value)a.removeEventListener(e+r,o,d)}}),i}export{g as a,R as b,y as p};

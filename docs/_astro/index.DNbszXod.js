let u=[],g=(e,f)=>{let t=[],i={get(){return i.lc||i.listen(()=>{})(),i.value},l:0,lc:0,listen(s,l){return i.lc=t.push(s,l||i.l)/2,()=>{let n=t.indexOf(s);~n&&(t.splice(n,2),--i.lc||i.off())}},notify(s){let l=!u.length;for(let n=0;n<t.length;n+=2)u.push(t[n],t[n+1],i.value,s);if(l){for(let n=0;n<u.length;n+=4){let c;for(let o=n+1;!c&&(o+=4)<u.length;)u[o]<u[n+1]&&(c=u.push(u[n],u[n+1],u[n+2],u[n+3]));c||u[n](u[n+2],u[n+3])}u.length=0}},off(){},set(s){i.value!==s&&(i.value=s,i.notify())},subscribe(s,l){let n=i.listen(s,l);return s(i.value),n},value:e};return i};let L=(e,f,t,i)=>(e.events=e.events||{},e.events[t+10]||(e.events[t+10]=i(s=>{e.events[t].reduceRight((l,n)=>(n(l),l),{shared:{},...s})})),e.events[t]=e.events[t]||[],e.events[t].push(f),()=>{let s=e.events[t],l=s.indexOf(f);s.splice(l,1),s.length||(delete e.events[t],e.events[t+10](),delete e.events[t+10])}),N=1e3,h=(e,f)=>L(e,i=>{let s=f(i);s&&e.events[6].push(s)},5,i=>{let s=e.listen;e.listen=(...n)=>(!e.lc&&!e.active&&(e.active=!0,i()),s(...n));let l=e.off;return e.events[6]=[],e.off=()=>{l(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let n of e.events[6])n();e.events[6]=[]}},N)},()=>{e.listen=s,e.off=l}}),U=(e={})=>{let f=g(e);return f.setKey=function(t,i){typeof i>"u"?t in f.value&&(f.value={...f.value},delete f.value[t],f.notify(t)):f.value[t]!==i&&(f.value={...f.value,[t]:i},f.notify(t))},f},T=e=>e,E={},a={addEventListener(){},removeEventListener(){}};function M(){try{return typeof localStorage<"u"}catch{return!1}}M()&&(E=localStorage);let O={addEventListener(e,f,t){window.addEventListener("storage",f),window.addEventListener("pageshow",t)},removeEventListener(e,f,t){window.removeEventListener("storage",f),window.removeEventListener("pageshow",t)}};typeof window<"u"&&(a=O);function y(e,f=void 0,t={}){let i=t.encode||T,s=t.decode||T,l=g(f),n=l.set;l.set=d=>{typeof d>"u"?delete E[e]:E[e]=i(d),n(d)};function c(d){d.key===e?d.newValue===null?n(void 0):n(s(d.newValue)):E[e]||n(void 0)}function o(){l.set(E[e]?s(E[e]):f)}return h(l,()=>{if(o(),t.listen!==!1)return a.addEventListener(e,c,o),()=>{a.removeEventListener(e,c,o)}}),l}function R(e,f={},t={}){let i=t.encode||T,s=t.decode||T,l=U(),n=l.setKey;l.setKey=(r,v)=>{typeof v>"u"?(t.listen!==!1&&a.perKey&&a.removeEventListener(e+r,o,d),delete E[e+r]):(t.listen!==!1&&a.perKey&&!(r in l.value)&&a.addEventListener(e+r,o,d),E[e+r]=i(v)),n(r,v)};let c=l.set;l.set=function(r){for(let v in r)l.setKey(v,r[v]);for(let v in l.value)v in r||l.setKey(v)};function o(r){r.key?r.key.startsWith(e)&&(r.newValue===null?n(r.key.slice(e.length),void 0):n(r.key.slice(e.length),s(r.newValue))):c({})}function d(){let r={...f};for(let v in E)v.startsWith(e)&&(r[v.slice(e.length)]=s(E[v]));l.set(r)}return h(l,()=>{if(d(),t.listen!==!1)return a.addEventListener(e,o,d),()=>{a.removeEventListener(e,o,d);for(let r in l.value)a.removeEventListener(e+r,o,d)}}),l}export{g as a,R as b,U as m,y as p};

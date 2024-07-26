import{S as pe,i as me,s as ye,e as _,a as x,t as K,v as ve,c as w,h as u,d as E,b as B,f as R,g as Z,j as m,w as C,l as v,k,n as L,o as te,p as le,q as ge,r as be,u as re,x as _e,y as we}from"./index.BUYXiDtP.js";import{e as ce}from"./each.-gASlQSi.js";import{p as X,b as ke}from"./index.DxhZiom7.js";import{t as Te}from"./index.BH1EYZ08.js";const je=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;X("atlas",{plugin:[]},{encode:JSON.stringify,decode:JSON.parse});const oe=X("musicData",{items:[]},{encode:JSON.stringify,decode:JSON.parse}),W=X("tagSettings",{},{encode:JSON.stringify,decode:JSON.parse}),Se=Te(async()=>{const o=await fetch("/api/music.json");if(!o.ok)throw new Error("Failed to fetch music data");const a=await o.json();return oe.set(a),a}),xe=[{i:"a",x:0,y:0,w:4,h:16,moved:!1,static:!0},{i:"b",x:4,y:0,w:4,h:16,moved:!1,static:!0},{i:"c",x:8,y:0,w:4,h:16,moved:!1,static:!0},{i:"d",x:4,y:16,w:4,h:4,moved:!1,static:!1},{i:"e",x:4,y:8,w:4,h:4,moved:!1,static:!1},{i:"f",x:8,y:16,w:4,h:4,moved:!1,static:!1},{i:"g",x:4,y:12,w:4,h:4,moved:!1,static:!1},{i:"h",x:8,y:12,w:4,h:4,moved:!1,static:!1},{i:"i",x:0,y:16,w:4,h:4,moved:!1,static:!1},{i:"j",x:8,y:0,w:4,h:16,moved:!1,static:!1}];X("layoutKey",xe,{encode:JSON.stringify,decode:JSON.parse});ke("kbve:");const{document:de}=je;function ue(o,a,c){const s=o.slice();return s[22]=a[c],s}function fe(o){let a,c=o[22]+"",s,f,y,T;function O(){return o[11](o[22])}return{c(){a=_("button"),s=K(c),f=x(),this.h()},l(d){a=w(d,"BUTTON",{class:!0});var h=B(a);s=R(h,c),f=E(h),h.forEach(u),this.h()},h(){m(a,"class","relative z-1 px-3 py-1 text-sm font-medium border rounded-md hover:scale-110 ease-in-out duration-500"),C(a,"opacity-100",o[4][o[22]]),C(a,"opacity-50",!o[4][o[22]])},m(d,h){k(d,a,h),v(a,s),v(a,f),y||(T=L(a,"click",O),y=!0)},p(d,h){o=d,h&16&&c!==(c=o[22]+"")&&te(s,c),h&16&&C(a,"opacity-100",o[4][o[22]]),h&16&&C(a,"opacity-50",!o[4][o[22]])},d(d){d&&u(a),y=!1,T()}}}function Ee(o){let a,c,s,f,y,T,O,d,h,P,V,j,U="Sync",M,S,J="Skip",I,g,D=o[1]?"Disable Force Play":"Enable Force Play",z,A,N,q,b,e=`<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web
    browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>`,l,n,G="Currently Playing Video ID:",Q,H,$,se,F=ce(Object.keys(o[4])),p=[];for(let t=0;t<F.length;t+=1)p[t]=fe(ue(o,F,t));return{c(){a=_("link"),c=x(),s=_("div"),f=_("button"),y=K("Play Tracks"),O=x(),d=_("button"),h=K("Play Sets"),V=x(),j=_("button"),j.textContent=U,M=x(),S=_("button"),S.textContent=J,I=x(),g=_("button"),z=K(D),A=x(),N=_("div");for(let t=0;t<p.length;t+=1)p[t].c();q=x(),b=_("video"),b.innerHTML=e,l=x(),n=_("strong"),n.textContent=G,Q=x(),H=K(o[0]),this.h()},l(t){const r=ve("svelte-1jkjurj",de.head);a=w(r,"LINK",{href:!0,rel:!0}),r.forEach(u),c=E(t),s=w(t,"DIV",{class:!0});var i=B(s);f=w(i,"BUTTON",{class:!0});var Y=B(f);y=R(Y,"Play Tracks"),Y.forEach(u),O=E(i),d=w(i,"BUTTON",{class:!0});var ae=B(d);h=R(ae,"Play Sets"),ae.forEach(u),V=E(i),j=w(i,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(j)!=="svelte-ecpas0"&&(j.textContent=U),M=E(i),S=w(i,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(S)!=="svelte-1cd9dc6"&&(S.textContent=J),I=E(i),g=w(i,"BUTTON",{class:!0});var ie=B(g);z=R(ie,D),ie.forEach(u),i.forEach(u),A=E(t),N=w(t,"DIV",{class:!0});var ne=B(N);for(let ee=0;ee<p.length;ee+=1)p[ee].l(ne);ne.forEach(u),q=E(t),b=w(t,"VIDEO",{id:!0,class:!0,preload:!0,width:!0,height:!0,"data-svelte-h":!0}),Z(b)!=="svelte-12y7kzy"&&(b.innerHTML=e),l=E(t),n=w(t,"STRONG",{"data-svelte-h":!0}),Z(n)!=="svelte-1xwgl6o"&&(n.textContent=G),Q=E(t),H=R(t,o[0]),this.h()},h(){m(a,"href","https://unpkg.com/video.js/dist/video-js.min.css"),m(a,"rel","stylesheet"),m(f,"class",T="px-3 py-1 text-sm font-medium border rounded-md hover:scale-110 ease-in-out duration-500 "+(o[2]?"opacity-100":"opacity-50")),m(d,"class",P="px-3 py-1 text-sm font-medium border rounded-md hover:scale-110 ease-in-out duration-500 "+(o[3]?"opacity-100":"opacity-50")),m(j,"class","px-4 py-2 bg-blue-500 border text-white rounded hover:scale-110 ease-in-out duration-500"),m(S,"class","px-4 py-2 bg-red-500 text-white rounded hover:scale-110 ease-in-out duration-500"),m(g,"class","px-4 py-2 bg-cyan-600 border text-white rounded hover:scale-110 ease-in-out duration-500"),C(g,"opacity-100",o[1]),C(g,"opacity-50",!o[1]),m(s,"class","space-x-2 my-4"),m(N,"class","space-x-2"),m(b,"id","video-js"),m(b,"class","video-js vjs-default-skin w-full aspect-video"),b.controls=!0,m(b,"preload","auto"),m(b,"width","640"),m(b,"height","264")},m(t,r){v(de.head,a),k(t,c,r),k(t,s,r),v(s,f),v(f,y),v(s,O),v(s,d),v(d,h),v(s,V),v(s,j),v(s,M),v(s,S),v(s,I),v(s,g),v(g,z),k(t,A,r),k(t,N,r);for(let i=0;i<p.length;i+=1)p[i]&&p[i].m(N,null);k(t,q,r),k(t,b,r),k(t,l,r),k(t,n,r),k(t,Q,r),k(t,H,r),$||(se=[L(f,"click",o[8]),L(d,"click",o[9]),L(j,"click",o[7]),L(S,"click",o[5]),L(g,"click",o[10])],$=!0)},p(t,[r]){if(r&4&&T!==(T="px-3 py-1 text-sm font-medium border rounded-md hover:scale-110 ease-in-out duration-500 "+(t[2]?"opacity-100":"opacity-50"))&&m(f,"class",T),r&8&&P!==(P="px-3 py-1 text-sm font-medium border rounded-md hover:scale-110 ease-in-out duration-500 "+(t[3]?"opacity-100":"opacity-50"))&&m(d,"class",P),r&2&&D!==(D=t[1]?"Disable Force Play":"Enable Force Play")&&te(z,D),r&2&&C(g,"opacity-100",t[1]),r&2&&C(g,"opacity-50",!t[1]),r&80){F=ce(Object.keys(t[4]));let i;for(i=0;i<F.length;i+=1){const Y=ue(t,F,i);p[i]?p[i].p(Y,r):(p[i]=fe(Y),p[i].c(),p[i].m(N,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=F.length}r&1&&te(H,t[0])},i:le,o:le,d(t){t&&(u(c),u(s),u(A),u(N),u(q),u(b),u(l),u(n),u(Q),u(H)),u(a),ge(p,t),$=!1,be(se)}}}function Oe(o){return new URLSearchParams(window.location.search).get(o)}function he(o){return/^[a-zA-Z0-9_-]{11}$/.test(o)}function Pe(o,a,c){let s,f;re(o,W,e=>c(4,s=e)),re(o,oe,e=>c(15,f=e));let y,T=!1,O=!1,d="",h=!1,P=!0,V=!1;_e(()=>{O=!0,console.log("Mounted"),j().then(()=>{O&&T&&S()})}),we(()=>{O=!1,y&&y.dispose()});async function j(){try{await new Promise((e,l)=>{const n=document.createElement("script");n.src="https://unpkg.com/video.js/dist/video.min.js",n.onload=e,n.onerror=()=>l(new Error("Failed to load Video.js")),document.head.appendChild(n)}),await new Promise((e,l)=>{const n=document.createElement("script");n.src="https://unpkg.com/videojs-youtube/dist/Youtube.min.js",n.onload=e,n.onerror=()=>l(new Error("Failed to load YouTube plugin")),document.head.appendChild(n)}),T=!0}catch(e){console.error("Error loading scripts:",e)}}async function U(){Se.then(()=>{console.log("Music data has been successfully updated.")}).catch(e=>{console.error("Error updating music data:",e)})}function M(){const e={};f.items.forEach(l=>{l.tags.forEach(n=>{n!=="music"&&(e[n]=!0)})}),W.set(e)}async function S(){if(f.items.length===0)try{await U(),console.log("Music Data Loaded:",f.items)}catch(e){console.error("Failed to fetch music data:",e);return}Object.keys(s).length===0?(console.log("Initializing tags from music data..."),M()):console.log("Tags already initialized:",s),J()}function J(){if(typeof videojs<"u"&&videojs.getTech("youtube")){const e=Oe("yt"),l=I();if(l.length===0&&(!e||!he(e)))return;const n=e&&he(e)?e:l[Math.floor(Math.random()*l.length)];y=videojs("video-js",{techOrder:["youtube"],sources:[{type:"video/youtube",src:`https://www.youtube.com/watch?v=${n}`}],youtube:{iv_load_policy:3},controls:!0,autoplay:!0,preload:"auto"}),y.on("pause",()=>{}),y.on("ended",g),c(0,d=n)}else setTimeout(J,100)}function I(){let e=[];return f.items.forEach(l=>{l.tags.some(G=>s[G]===!0)&&(P&&(e=e.concat(l.ytTracks)),V&&(e=e.concat(l.ytSets)))}),e}function g(){const e=I();if(e.length===0)return;const l=e[Math.floor(Math.random()*e.length)];y.src({type:"video/youtube",src:`https://www.youtube.com/watch?v=${l}`}),y.play(),c(0,d=l)}function D(e){const l={...s,[e]:!s[e]};W.set(l)}async function z(){oe.set({items:[]}),W.set({});try{await U(),M(),J(),console.log("Data and tags have been synchronized."),window.location.reload()}catch(e){console.error("Error during synchronization:",e)}}return[d,h,P,V,s,g,D,z,()=>c(2,P=!P),()=>c(3,V=!V),()=>c(1,h=!h),e=>D(e)]}class Me extends pe{constructor(a){super(),me(this,a,Pe,Ee,ye,{})}}export{Me as default};
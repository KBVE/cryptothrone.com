function $(){}function T(e){return e()}function C(){return Object.create(null)}function g(e){e.forEach(T)}function B(e){return typeof e=="function"}function se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let b;function ue(e,t){return e===t?!0:(b||(b=document.createElement("a")),b.href=t,e===b.href)}function O(e){return Object.keys(e).length===0}function P(e,...t){if(e==null){for(const i of t)i(void 0);return $}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function oe(e,t,n){e.$$.on_destroy.push(P(t,n))}function ae(e){return e??""}let x=!1;function q(){x=!0}function I(){x=!1}function M(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let s=0;s<t.length;s++){const f=t[s];f.claim_order!==void 0&&l.push(f)}t=l}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let l=0;l<t.length;l++){const s=t[l].claim_order,f=(r>0&&t[n[r]].claim_order<=s?r+1:M(1,r,y=>t[n[y]].claim_order,s))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const u=[],c=[];let o=t.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(t[l-1]);o>=l;o--)c.push(t[o]);o--}for(;o>=0;o--)c.push(t[o]);u.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<u.length&&c[l].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;e.insertBefore(c[l],f)}}function F(e,t){if(x){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function fe(e,t,n){x&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function _e(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function G(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function de(){return k(" ")}function he(){return k("")}function me(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function pe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function J(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ye(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:J(e,t,n)}function be(e){return e.dataset.svelteH}function $e(e){return e===""?null:+e}function U(e){return Array.from(e.childNodes)}function V(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function H(e,t,n,i,r=!1){V(e);const u=(()=>{for(let c=e.claim_info.last_index;c<e.length;c++){const o=e[c];if(t(o)){const l=n(o);return l===void 0?e.splice(c,1):e[c]=l,r||(e.claim_info.last_index=c),o}}for(let c=e.claim_info.last_index-1;c>=0;c--){const o=e[c];if(t(o)){const l=n(o);return l===void 0?e.splice(c,1):e[c]=l,r?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=c,o}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function W(e,t,n,i){return H(e,r=>r.nodeName===t,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(t))}function ge(e,t,n){return W(e,t,n,G)}function K(e,t){return H(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(t),!0)}function xe(e){return K(e," ")}function we(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ee(e,t){e.value=t??""}function ve(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function ke(e,t,n){e.classList.toggle(t,!!n)}function Q(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function Ne(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${e}_END`?(i-=1,n.push(r)):u===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}let p;function m(e){p=e}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function Ae(e){N().$$.on_mount.push(e)}function Se(e){N().$$.on_destroy.push(e)}function Ce(){const e=N();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const u=Q(t,n,{cancelable:i});return r.slice().forEach(c=>{c.call(e,u)}),!u.defaultPrevented}return!0}}const d=[],D=[];let h=[];const j=[],X=Promise.resolve();let E=!1;function Y(){E||(E=!0,X.then(L))}function v(e){h.push(e)}const w=new Set;let _=0;function L(){if(_!==0)return;const e=p;do{try{for(;_<d.length;){const t=d[_];_++,m(t),Z(t.$$)}}catch(t){throw d.length=0,_=0,t}for(m(null),d.length=0,_=0;D.length;)D.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];w.has(n)||(w.add(n),n())}h.length=0}while(d.length);for(;j.length;)j.pop()();E=!1,w.clear(),m(e)}function Z(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}function ee(e){const t=[],n=[];h.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),h=t}const te=new Set;function ne(e,t){e&&e.i&&(te.delete(e),e.i(t))}function ie(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),v(()=>{const u=e.$$.on_mount.map(T).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...u):g(u),e.$$.on_mount=[]}),r.forEach(v)}function re(e,t){const n=e.$$;n.fragment!==null&&(ee(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function le(e,t){e.$$.dirty[0]===-1&&(d.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function De(e,t,n,i,r,u,c=null,o=[-1]){const l=p;m(e);const s=e.$$={fragment:null,ctx:[],props:u,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(e,t.props||{},(a,y,...A)=>{const S=A.length?A[0]:y;return s.ctx&&r(s.ctx[a],s.ctx[a]=S)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](S),f&&le(e,a)),y}):[],s.update(),f=!0,g(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){q();const a=U(t.target);s.fragment&&s.fragment.l(a),a.forEach(R)}else s.fragment&&s.fragment.c();t.intro&&ne(e.$$.fragment),ie(e,t.target,t.anchor),I(),L()}m(l)}class je{$$=void 0;$$set=void 0;$destroy(){re(this,1),this.$destroy=$}$on(t,n){if(!B(n))return $;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!O(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);export{B as A,ue as B,$e as C,ae as D,he as E,ve as F,D as G,ye as H,pe as I,Ce as J,je as S,de as a,U as b,ge as c,xe as d,G as e,K as f,be as g,R as h,De as i,J as j,fe as k,F as l,Ee as m,me as n,we as o,$ as p,_e as q,g as r,se as s,k as t,oe as u,Ne as v,ke as w,Ae as x,Se as y,P as z};

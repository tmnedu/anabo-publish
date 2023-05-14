(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function lo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function ao(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?nf(s):ao(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ce(t))return t;if(ce(t))return t}}const Zh=/;(?![^(]*\))/g,ef=/:([^]+)/,tf=/\/\*.*?\*\//gs;function nf(t){const e={};return t.replace(tf,"").split(Zh).forEach(n=>{if(n){const s=n.split(ef);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function co(t){let e="";if(Ce(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=co(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rf=lo(sf);function tc(t){return!!t||t===""}function of(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Pi(t[s],e[s]);return n}function Pi(t,e){if(t===e)return!0;let n=dl(t),s=dl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=gs(t),s=gs(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?of(t,e):!1;if(n=ce(t),s=ce(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Pi(t[o],e[o]))return!1}}return String(t)===String(e)}function nc(t,e){return t.findIndex(n=>Pi(n,e))}const BC=t=>Ce(t)?t:t==null?"":B(t)||ce(t)&&(t.toString===rc||!U(t.toString))?JSON.stringify(t,sc,2):String(t),sc=(t,e)=>e&&e.__v_isRef?sc(t,e.value):bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Oi(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!B(e)&&!oc(e)?String(e):e,he={},Cn=[],nt=()=>{},lf=()=>!1,af=/^on[^a-z]/,Ai=t=>af.test(t),uo=t=>t.startsWith("onUpdate:"),De=Object.assign,ho=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cf=Object.prototype.hasOwnProperty,J=(t,e)=>cf.call(t,e),B=Array.isArray,bn=t=>Ls(t)==="[object Map]",Oi=t=>Ls(t)==="[object Set]",dl=t=>Ls(t)==="[object Date]",U=t=>typeof t=="function",Ce=t=>typeof t=="string",gs=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",ic=t=>ce(t)&&U(t.then)&&U(t.catch),rc=Object.prototype.toString,Ls=t=>rc.call(t),uf=t=>Ls(t).slice(8,-1),oc=t=>Ls(t)==="[object Object]",fo=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ti=lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ki=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hf=/-(\w)/g,ft=ki(t=>t.replace(hf,(e,n)=>n?n.toUpperCase():"")),ff=/\B([A-Z])/g,Wn=ki(t=>t.replace(ff,"-$1").toLowerCase()),Di=ki(t=>t.charAt(0).toUpperCase()+t.slice(1)),sr=ki(t=>t?`on${Di(t)}`:""),ms=(t,e)=>!Object.is(t,e),ni=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ai=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ir=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pl;const df=()=>pl||(pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class lc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ac(t){return new lc(t)}function pf(t,e=je){e&&e.active&&e.effects.push(t)}function cc(){return je}function _f(t){je&&je.cleanups.push(t)}const po=t=>{const e=new Set(t);return e.w=0,e.n=0,e},uc=t=>(t.w&Bt)>0,hc=t=>(t.n&Bt)>0,gf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bt},mf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];uc(i)&&!hc(i)?i.delete(t):e[n++]=i,i.w&=~Bt,i.n&=~Bt}e.length=n}},ci=new WeakMap;let rs=0,Bt=1;const Sr=30;let Xe;const nn=Symbol(""),Tr=Symbol("");class _o{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pf(this,s)}run(){if(!this.active)return this.fn();let e=Xe,n=kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xe,Xe=this,kt=!0,Bt=1<<++rs,rs<=Sr?gf(this):_l(this),this.fn()}finally{rs<=Sr&&mf(this),Bt=1<<--rs,Xe=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xe===this?this.deferStop=!0:this.active&&(_l(this),this.onStop&&this.onStop(),this.active=!1)}}function _l(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kt=!0;const fc=[];function Bn(){fc.push(kt),kt=!1}function Hn(){const t=fc.pop();kt=t===void 0?!0:t}function He(t,e,n){if(kt&&Xe){let s=ci.get(t);s||ci.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=po()),dc(i)}}function dc(t,e){let n=!1;rs<=Sr?hc(t)||(t.n|=Bt,n=!uc(t)):n=!t.has(Xe),n&&(t.add(Xe),Xe.deps.push(t))}function Et(t,e,n,s,i,r){const o=ci.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&B(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":B(t)?fo(n)&&l.push(o.get("length")):(l.push(o.get(nn)),bn(t)&&l.push(o.get(Tr)));break;case"delete":B(t)||(l.push(o.get(nn)),bn(t)&&l.push(o.get(Tr)));break;case"set":bn(t)&&l.push(o.get(nn));break}if(l.length===1)l[0]&&Rr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Rr(po(a))}}function Rr(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&gl(s);for(const s of n)s.computed||gl(s)}function gl(t,e){(t!==Xe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function vf(t,e){var n;return(n=ci.get(t))===null||n===void 0?void 0:n.get(e)}const yf=lo("__proto__,__v_isRef,__isVue"),pc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gs)),Ef=go(),Cf=go(!1,!0),bf=go(!0),ml=wf();function wf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=K(this);for(let r=0,o=this.length;r<o;r++)He(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(K)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bn();const s=K(this)[e].apply(this,n);return Hn(),s}}),t}function If(t){const e=K(this);return He(e,"has",t),e.hasOwnProperty(t)}function go(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Hf:yc:e?vc:mc).get(s))return s;const o=B(s);if(!t){if(o&&J(ml,i))return Reflect.get(ml,i,r);if(i==="hasOwnProperty")return If}const l=Reflect.get(s,i,r);return(gs(i)?pc.has(i):yf(i))||(t||He(s,"get",i),e)?l:de(l)?o&&fo(i)?l:l.value:ce(l)?t?Ec(l):Un(l):l}}const Sf=_c(),Tf=_c(!0);function _c(t=!1){return function(n,s,i,r){let o=n[s];if(Nn(o)&&de(o)&&!de(i))return!1;if(!t&&(!ui(i)&&!Nn(i)&&(o=K(o),i=K(i)),!B(n)&&de(o)&&!de(i)))return o.value=i,!0;const l=B(n)&&fo(s)?Number(s)<n.length:J(n,s),a=Reflect.set(n,s,i,r);return n===K(r)&&(l?ms(i,o)&&Et(n,"set",s,i):Et(n,"add",s,i)),a}}function Rf(t,e){const n=J(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Et(t,"delete",e,void 0),s}function Nf(t,e){const n=Reflect.has(t,e);return(!gs(e)||!pc.has(e))&&He(t,"has",e),n}function xf(t){return He(t,"iterate",B(t)?"length":nn),Reflect.ownKeys(t)}const gc={get:Ef,set:Sf,deleteProperty:Rf,has:Nf,ownKeys:xf},Pf={get:bf,set(t,e){return!0},deleteProperty(t,e){return!0}},Af=De({},gc,{get:Cf,set:Tf}),mo=t=>t,Mi=t=>Reflect.getPrototypeOf(t);function Gs(t,e,n=!1,s=!1){t=t.__v_raw;const i=K(t),r=K(e);n||(e!==r&&He(i,"get",e),He(i,"get",r));const{has:o}=Mi(i),l=s?mo:n?Eo:vs;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function zs(t,e=!1){const n=this.__v_raw,s=K(n),i=K(t);return e||(t!==i&&He(s,"has",t),He(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function qs(t,e=!1){return t=t.__v_raw,!e&&He(K(t),"iterate",nn),Reflect.get(t,"size",t)}function vl(t){t=K(t);const e=K(this);return Mi(e).has.call(e,t)||(e.add(t),Et(e,"add",t,t)),this}function yl(t,e){e=K(e);const n=K(this),{has:s,get:i}=Mi(n);let r=s.call(n,t);r||(t=K(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ms(e,o)&&Et(n,"set",t,e):Et(n,"add",t,e),this}function El(t){const e=K(this),{has:n,get:s}=Mi(e);let i=n.call(e,t);i||(t=K(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Et(e,"delete",t,void 0),r}function Cl(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Et(t,"clear",void 0,void 0),n}function Ks(t,e){return function(s,i){const r=this,o=r.__v_raw,l=K(o),a=e?mo:t?Eo:vs;return!t&&He(l,"iterate",nn),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Ys(t,e,n){return function(...s){const i=this.__v_raw,r=K(i),o=bn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?mo:e?Eo:vs;return!e&&He(r,"iterate",a?Tr:nn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Tt(t){return function(...e){return t==="delete"?!1:this}}function Of(){const t={get(r){return Gs(this,r)},get size(){return qs(this)},has:zs,add:vl,set:yl,delete:El,clear:Cl,forEach:Ks(!1,!1)},e={get(r){return Gs(this,r,!1,!0)},get size(){return qs(this)},has:zs,add:vl,set:yl,delete:El,clear:Cl,forEach:Ks(!1,!0)},n={get(r){return Gs(this,r,!0)},get size(){return qs(this,!0)},has(r){return zs.call(this,r,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Ks(!0,!1)},s={get(r){return Gs(this,r,!0,!0)},get size(){return qs(this,!0)},has(r){return zs.call(this,r,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ys(r,!1,!1),n[r]=Ys(r,!0,!1),e[r]=Ys(r,!1,!0),s[r]=Ys(r,!0,!0)}),[t,n,e,s]}const[kf,Df,Mf,Lf]=Of();function vo(t,e){const n=e?t?Lf:Mf:t?Df:kf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const Ff={get:vo(!1,!1)},Wf={get:vo(!1,!0)},Bf={get:vo(!0,!1)},mc=new WeakMap,vc=new WeakMap,yc=new WeakMap,Hf=new WeakMap;function Uf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $f(t){return t.__v_skip||!Object.isExtensible(t)?0:Uf(uf(t))}function Un(t){return Nn(t)?t:yo(t,!1,gc,Ff,mc)}function Vf(t){return yo(t,!1,Af,Wf,vc)}function Ec(t){return yo(t,!0,Pf,Bf,yc)}function yo(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=$f(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function vt(t){return Nn(t)?vt(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function ui(t){return!!(t&&t.__v_isShallow)}function Cc(t){return vt(t)||Nn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function xn(t){return ai(t,"__v_skip",!0),t}const vs=t=>ce(t)?Un(t):t,Eo=t=>ce(t)?Ec(t):t;function bc(t){kt&&Xe&&(t=K(t),dc(t.dep||(t.dep=po())))}function wc(t,e){t=K(t);const n=t.dep;n&&Rr(n)}function de(t){return!!(t&&t.__v_isRef===!0)}function ys(t){return Ic(t,!1)}function jf(t){return Ic(t,!0)}function Ic(t,e){return de(t)?t:new Gf(t,e)}class Gf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:vs(e)}get value(){return bc(this),this._value}set value(e){const n=this.__v_isShallow||ui(e)||Nn(e);e=n?e:K(e),ms(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vs(e),wc(this))}}function ut(t){return de(t)?t.value:t}const zf={get:(t,e,n)=>ut(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return de(i)&&!de(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Sc(t){return vt(t)?t:new Proxy(t,zf)}function qf(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=Tc(t,n);return e}class Kf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return vf(K(this._object),this._key)}}function Tc(t,e,n){const s=t[e];return de(s)?s:new Kf(t,e,n)}var Rc;class Yf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Rc]=!1,this._dirty=!0,this.effect=new _o(e,()=>{this._dirty||(this._dirty=!0,wc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=K(this);return bc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rc="__v_isReadonly";function Qf(t,e,n=!1){let s,i;const r=U(t);return r?(s=t,i=nt):(s=t.get,i=t.set),new Yf(s,i,r||!i,n)}function Dt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Li(r,e,n)}return i}function st(t,e,n,s){if(U(t)){const r=Dt(t,e,n,s);return r&&ic(r)&&r.catch(o=>{Li(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(st(t[r],e,n,s));return i}function Li(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Dt(a,null,10,[t,o,l]);return}}Xf(t,n,i,s)}function Xf(t,e,n,s=!0){console.error(t)}let Es=!1,Nr=!1;const xe=[];let ct=0;const wn=[];let _t=null,Yt=0;const Nc=Promise.resolve();let Co=null;function bo(t){const e=Co||Nc;return t?e.then(this?t.bind(this):t):e}function Jf(t){let e=ct+1,n=xe.length;for(;e<n;){const s=e+n>>>1;Cs(xe[s])<t?e=s+1:n=s}return e}function wo(t){(!xe.length||!xe.includes(t,Es&&t.allowRecurse?ct+1:ct))&&(t.id==null?xe.push(t):xe.splice(Jf(t.id),0,t),xc())}function xc(){!Es&&!Nr&&(Nr=!0,Co=Nc.then(Ac))}function Zf(t){const e=xe.indexOf(t);e>ct&&xe.splice(e,1)}function ed(t){B(t)?wn.push(...t):(!_t||!_t.includes(t,t.allowRecurse?Yt+1:Yt))&&wn.push(t),xc()}function bl(t,e=Es?ct+1:0){for(;e<xe.length;e++){const n=xe[e];n&&n.pre&&(xe.splice(e,1),e--,n())}}function Pc(t){if(wn.length){const e=[...new Set(wn)];if(wn.length=0,_t){_t.push(...e);return}for(_t=e,_t.sort((n,s)=>Cs(n)-Cs(s)),Yt=0;Yt<_t.length;Yt++)_t[Yt]();_t=null,Yt=0}}const Cs=t=>t.id==null?1/0:t.id,td=(t,e)=>{const n=Cs(t)-Cs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ac(t){Nr=!1,Es=!0,xe.sort(td);const e=nt;try{for(ct=0;ct<xe.length;ct++){const n=xe[ct];n&&n.active!==!1&&Dt(n,null,14)}}finally{ct=0,xe.length=0,Pc(),Es=!1,Co=null,(xe.length||wn.length)&&Ac()}}function nd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||he;f&&(i=n.map(_=>Ce(_)?_.trim():_)),h&&(i=n.map(Ir))}let l,a=s[l=sr(e)]||s[l=sr(ft(e))];!a&&r&&(a=s[l=sr(Wn(e))]),a&&st(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,st(c,t,6,i)}}function Oc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=c=>{const u=Oc(c,e,!0);u&&(l=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ce(t)&&s.set(t,null),null):(B(r)?r.forEach(a=>o[a]=null):De(o,r),ce(t)&&s.set(t,o),o)}function Fi(t,e){return!t||!Ai(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Wn(e))||J(t,e))}let ze=null,Wi=null;function hi(t){const e=ze;return ze=t,Wi=t&&t.type.__scopeId||null,e}function sd(t){Wi=t}function id(){Wi=null}function si(t,e=ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ol(-1);const r=hi(e);let o;try{o=t(...i)}finally{hi(r),s._d&&Ol(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ir(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:b}=t;let O,P;const W=hi(t);try{if(n.shapeFlag&4){const Y=i||s;O=at(u.call(Y,Y,h,r,_,f,m)),P=a}else{const Y=e;O=at(Y.length>1?Y(r,{attrs:a,slots:l,emit:c}):Y(r,null)),P=e.props?a:rd(a)}}catch(Y){as.length=0,Li(Y,t,1),O=Pe(on)}let k=O;if(P&&b!==!1){const Y=Object.keys(P),{shapeFlag:se}=k;Y.length&&se&7&&(o&&Y.some(uo)&&(P=od(P,o)),k=Pn(k,P))}return n.dirs&&(k=Pn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),O=k,hi(W),O}const rd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ai(n))&&((e||(e={}))[n]=t[n]);return e},od=(t,e)=>{const n={};for(const s in t)(!uo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ld(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?wl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Fi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?wl(s,o,c):!0:!!o;return!1}function wl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Fi(n,r))return!0}return!1}function ad({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cd=t=>t.__isSuspense;function ud(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):ed(t)}function ii(t,e){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[t]=e}}function ht(t,e,n=!1){const s=_e||ze;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s.proxy):e}}const Qs={};function os(t,e,n){return kc(t,e,n)}function kc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=he){const l=cc()===_e?.scope?_e:null;let a,c=!1,u=!1;if(de(t)?(a=()=>t.value,c=ui(t)):vt(t)?(a=()=>t,s=!0):B(t)?(u=!0,c=t.some(k=>vt(k)||ui(k)),a=()=>t.map(k=>{if(de(k))return k.value;if(vt(k))return Jt(k);if(U(k))return Dt(k,l,2)})):U(t)?e?a=()=>Dt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),st(t,l,3,[f])}:a=nt,e&&s){const k=a;a=()=>Jt(k())}let h,f=k=>{h=P.onStop=()=>{Dt(k,l,4)}},_;if(ws)if(f=nt,e?n&&st(e,l,3,[a(),u?[]:void 0,f]):a(),i==="sync"){const k=ip();_=k.__watcherHandles||(k.__watcherHandles=[])}else return nt;let m=u?new Array(t.length).fill(Qs):Qs;const b=()=>{if(P.active)if(e){const k=P.run();(s||c||(u?k.some((Y,se)=>ms(Y,m[se])):ms(k,m)))&&(h&&h(),st(e,l,3,[k,m===Qs?void 0:u&&m[0]===Qs?[]:m,f]),m=k)}else P.run()};b.allowRecurse=!!e;let O;i==="sync"?O=b:i==="post"?O=()=>Fe(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),O=()=>wo(b));const P=new _o(a,O);e?n?b():m=P.run():i==="post"?Fe(P.run.bind(P),l&&l.suspense):P.run();const W=()=>{P.stop(),l&&l.scope&&ho(l.scope.effects,P)};return _&&_.push(W),W}function hd(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?Dc(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=_e;An(this);const l=kc(i,r.bind(s),n);return o?An(o):sn(),l}function Dc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Jt(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))Jt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Jt(t[n],e);else if(Oi(t)||bn(t))t.forEach(n=>{Jt(n,e)});else if(oc(t))for(const n in t)Jt(t[n],e);return t}function Io(t){return U(t)?{setup:t,name:t.name}:t}const ri=t=>!!t.type.__asyncLoader,Mc=t=>t.type.__isKeepAlive;function fd(t,e){Lc(t,"a",e)}function dd(t,e){Lc(t,"da",e)}function Lc(t,e,n=_e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Bi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Mc(i.parent.vnode)&&pd(s,e,n,i),i=i.parent}}function pd(t,e,n,s){const i=Bi(e,t,s,!0);Wc(()=>{ho(s[e],i)},n)}function Bi(t,e,n=_e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bn(),An(n);const l=st(e,n,t,o);return sn(),Hn(),l});return s?i.unshift(r):i.push(r),r}}const bt=t=>(e,n=_e)=>(!ws||t==="sp")&&Bi(t,(...s)=>e(...s),n),_d=bt("bm"),Fc=bt("m"),gd=bt("bu"),md=bt("u"),vd=bt("bum"),Wc=bt("um"),yd=bt("sp"),Ed=bt("rtg"),Cd=bt("rtc");function bd(t,e=_e){Bi("ec",t,e)}function wd(t,e){const n=ze;if(n===null)return t;const s=$i(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=he]=e[r];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&Jt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function jt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Bn(),st(a,n,8,[t.el,l,t,e]),Hn())}}const Bc="components";function Il(t,e){return Sd(Bc,t,!0,e)||t}const Id=Symbol();function Sd(t,e,n=!0,s=!1){const i=ze||_e;if(i){const r=i.type;if(t===Bc){const l=tp(r,!1);if(l&&(l===e||l===ft(e)||l===Di(ft(e))))return r}const o=Sl(i[t]||r[t],e)||Sl(i.appContext[t],e);return!o&&s?r:o}}function Sl(t,e){return t&&(t[e]||t[ft(e)]||t[Di(ft(e))])}function HC(t,e,n,s){let i;const r=n&&n[s];if(B(t)||Ce(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const xr=t=>t?Xc(t)?$i(t)||t.proxy:xr(t.parent):null,ls=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xr(t.parent),$root:t=>xr(t.root),$emit:t=>t.emit,$options:t=>So(t),$forceUpdate:t=>t.f||(t.f=()=>wo(t.update)),$nextTick:t=>t.n||(t.n=bo.bind(t.proxy)),$watch:t=>hd.bind(t)}),rr=(t,e)=>t!==he&&!t.__isScriptSetup&&J(t,e),Td={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(rr(s,e))return o[e]=1,s[e];if(i!==he&&J(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&J(c,e))return o[e]=3,r[e];if(n!==he&&J(n,e))return o[e]=4,n[e];Pr&&(o[e]=0)}}const u=ls[e];let h,f;if(u)return e==="$attrs"&&He(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==he&&J(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,J(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return rr(i,e)?(i[e]=n,!0):s!==he&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==he&&J(t,o)||rr(e,o)||(l=r[0])&&J(l,o)||J(s,o)||J(ls,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Pr=!0;function Rd(t){const e=So(t),n=t.proxy,s=t.ctx;Pr=!1,e.beforeCreate&&Tl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:b,deactivated:O,beforeDestroy:P,beforeUnmount:W,destroyed:k,unmounted:Y,render:se,renderTracked:ve,renderTriggered:Q,errorCaptured:G,serverPrefetch:Re,expose:be,inheritAttrs:Me,components:qe,directives:St,filters:$e}=e;if(c&&Nd(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const te=o[re];U(te)&&(s[re]=te.bind(n))}if(i){const re=i.call(n,n);ce(re)&&(t.data=Un(re))}if(Pr=!0,r)for(const re in r){const te=r[re],Ke=U(te)?te.bind(n,n):U(te.get)?te.get.bind(n,n):nt,Vt=!U(te)&&U(te.set)?te.set.bind(n):nt,Ye=Ge({get:Ke,set:Vt});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Le=>Ye.value=Le})}if(l)for(const re in l)Hc(l[re],s,n,re);if(a){const re=U(a)?a.call(n):a;Reflect.ownKeys(re).forEach(te=>{ii(te,re[te])})}u&&Tl(u,t,"c");function ge(re,te){B(te)?te.forEach(Ke=>re(Ke.bind(n))):te&&re(te.bind(n))}if(ge(_d,h),ge(Fc,f),ge(gd,_),ge(md,m),ge(fd,b),ge(dd,O),ge(bd,G),ge(Cd,ve),ge(Ed,Q),ge(vd,W),ge(Wc,Y),ge(yd,Re),B(be))if(be.length){const re=t.exposed||(t.exposed={});be.forEach(te=>{Object.defineProperty(re,te,{get:()=>n[te],set:Ke=>n[te]=Ke})})}else t.exposed||(t.exposed={});se&&t.render===nt&&(t.render=se),Me!=null&&(t.inheritAttrs=Me),qe&&(t.components=qe),St&&(t.directives=St)}function Nd(t,e,n=nt,s=!1){B(t)&&(t=Ar(t));for(const i in t){const r=t[i];let o;ce(r)?"default"in r?o=ht(r.from||i,r.default,!0):o=ht(r.from||i):o=ht(r),de(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Tl(t,e,n){st(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hc(t,e,n,s){const i=s.includes(".")?Dc(n,s):()=>n[s];if(Ce(t)){const r=e[t];U(r)&&os(i,r)}else if(U(t))os(i,t.bind(n));else if(ce(t))if(B(t))t.forEach(r=>Hc(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&os(i,r,t)}}function So(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>fi(a,c,o,!0)),fi(a,e,o)),ce(e)&&r.set(e,a),a}function fi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&fi(t,r,n,!0),i&&i.forEach(o=>fi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=xd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const xd={data:Rl,props:zt,emits:zt,methods:zt,computed:zt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:zt,directives:zt,watch:Ad,provide:Rl,inject:Pd};function Rl(t,e){return e?t?function(){return De(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Pd(t,e){return zt(Ar(t),Ar(e))}function Ar(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function zt(t,e){return t?De(De(Object.create(null),t),e):e}function Ad(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const s in e)n[s]=Oe(t[s],e[s]);return n}function Od(t,e,n,s=!1){const i={},r={};ai(r,Ui,1),t.propsDefaults=Object.create(null),Uc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=K(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Fi(t.emitsOptions,f))continue;const _=e[f];if(a)if(J(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=ft(f);i[m]=Or(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Uc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!J(e,h)&&((u=Wn(h))===h||!J(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Or(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!J(e,h))&&(delete r[h],c=!0)}c&&Et(t,"set","$attrs")}function Uc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ti(a))continue;const c=e[a];let u;i&&J(i,u=ft(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Fi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=K(n),c=l||he;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Or(i,a,h,c[h],t,!J(c,h))}}return o}function Or(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=J(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&U(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(An(i),s=c[n]=a.call(null,e),sn())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Wn(n))&&(s=!0))}return s}function $c(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const u=h=>{a=!0;const[f,_]=$c(h,e,!0);De(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ce(t)&&s.set(t,Cn),Cn;if(B(r))for(let u=0;u<r.length;u++){const h=ft(r[u]);Nl(h)&&(o[h]=he)}else if(r)for(const u in r){const h=ft(u);if(Nl(h)){const f=r[u],_=o[h]=B(f)||U(f)?{type:f}:Object.assign({},f);if(_){const m=Al(Boolean,_.type),b=Al(String,_.type);_[0]=m>-1,_[1]=b<0||m<b,(m>-1||J(_,"default"))&&l.push(h)}}}const c=[o,l];return ce(t)&&s.set(t,c),c}function Nl(t){return t[0]!=="$"}function xl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Pl(t,e){return xl(t)===xl(e)}function Al(t,e){return B(e)?e.findIndex(n=>Pl(n,t)):U(e)&&Pl(e,t)?0:-1}const Vc=t=>t[0]==="_"||t==="$stable",To=t=>B(t)?t.map(at):[at(t)],Dd=(t,e,n)=>{if(e._n)return e;const s=si((...i)=>To(e(...i)),n);return s._c=!1,s},jc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Vc(i))continue;const r=t[i];if(U(r))e[i]=Dd(i,r,s);else if(r!=null){const o=To(r);e[i]=()=>o}}},Gc=(t,e)=>{const n=To(e);t.slots.default=()=>n},Md=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),ai(e,"_",n)):jc(e,t.slots={})}else t.slots={},e&&Gc(t,e);ai(t.slots,Ui,1)},Ld=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=he;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(De(i,e),!n&&l===1&&delete i._):(r=!e.$stable,jc(e,i)),o=e}else e&&(Gc(t,e),o={default:1});if(r)for(const l in i)!Vc(l)&&!(l in o)&&delete i[l]};function zc(){return{app:null,config:{isNativeTag:lf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fd=0;function Wd(t,e){return function(s,i=null){U(s)||(s=Object.assign({},s)),i!=null&&!ce(i)&&(i=null);const r=zc(),o=new Set;let l=!1;const a=r.app={_uid:Fd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:rp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(a,...u)):U(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=Pe(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,$i(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function kr(t,e,n,s,i=!1){if(B(t)){t.forEach((f,_)=>kr(f,e&&(B(e)?e[_]:e),n,s,i));return}if(ri(s)&&!i)return;const r=s.shapeFlag&4?$i(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===he?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Ce(c)?(u[c]=null,J(h,c)&&(h[c]=null)):de(c)&&(c.value=null)),U(a))Dt(a,l,12,[o,u]);else{const f=Ce(a),_=de(a);if(f||_){const m=()=>{if(t.f){const b=f?J(h,a)?h[a]:u[a]:a.value;i?B(b)&&ho(b,r):B(b)?b.includes(r)||b.push(r):f?(u[a]=[r],J(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,J(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Fe(m,n)):m()}}}const Fe=ud;function Bd(t){return Hd(t)}function Hd(t,e){const n=df();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=nt,insertStaticContent:m}=t,b=(d,p,g,v=null,E=null,S=null,N=!1,w=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Kn(d,p)&&(v=R(d),Le(d,E,S,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:M,shapeFlag:A}=p;switch(C){case Hi:O(d,p,g,v);break;case on:P(d,p,g,v);break;case or:d==null&&W(p,g,v,N);break;case gt:qe(d,p,g,v,E,S,N,w,T);break;default:A&1?se(d,p,g,v,E,S,N,w,T):A&6?St(d,p,g,v,E,S,N,w,T):(A&64||A&128)&&C.process(d,p,g,v,E,S,N,w,T,X)}M!=null&&E&&kr(M,d&&d.ref,S,p||d,!p)},O=(d,p,g,v)=>{if(d==null)s(p.el=l(p.children),g,v);else{const E=p.el=d.el;p.children!==d.children&&c(E,p.children)}},P=(d,p,g,v)=>{d==null?s(p.el=a(p.children||""),g,v):p.el=d.el},W=(d,p,g,v)=>{[d.el,d.anchor]=m(d.children,p,g,v,d.el,d.anchor)},k=({el:d,anchor:p},g,v)=>{let E;for(;d&&d!==p;)E=f(d),s(d,g,v),d=E;s(p,g,v)},Y=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},se=(d,p,g,v,E,S,N,w,T)=>{N=N||p.type==="svg",d==null?ve(p,g,v,E,S,N,w,T):Re(d,p,E,S,N,w,T)},ve=(d,p,g,v,E,S,N,w)=>{let T,C;const{type:M,props:A,shapeFlag:L,transition:H,dirs:z}=d;if(T=d.el=o(d.type,S,A&&A.is,A),L&8?u(T,d.children):L&16&&G(d.children,T,null,v,E,S&&M!=="foreignObject",N,w),z&&jt(d,null,v,"created"),Q(T,d,d.scopeId,N,v),A){for(const ne in A)ne!=="value"&&!ti(ne)&&r(T,ne,null,A[ne],S,d.children,v,E,x);"value"in A&&r(T,"value",null,A.value),(C=A.onVnodeBeforeMount)&&lt(C,v,d)}z&&jt(d,null,v,"beforeMount");const oe=(!E||E&&!E.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(T),s(T,p,g),((C=A&&A.onVnodeMounted)||oe||z)&&Fe(()=>{C&&lt(C,v,d),oe&&H.enter(T),z&&jt(d,null,v,"mounted")},E)},Q=(d,p,g,v,E)=>{if(g&&_(d,g),v)for(let S=0;S<v.length;S++)_(d,v[S]);if(E){let S=E.subTree;if(p===S){const N=E.vnode;Q(d,N,N.scopeId,N.slotScopeIds,E.parent)}}},G=(d,p,g,v,E,S,N,w,T=0)=>{for(let C=T;C<d.length;C++){const M=d[C]=w?Pt(d[C]):at(d[C]);b(null,M,p,g,v,E,S,N,w)}},Re=(d,p,g,v,E,S,N)=>{const w=p.el=d.el;let{patchFlag:T,dynamicChildren:C,dirs:M}=p;T|=d.patchFlag&16;const A=d.props||he,L=p.props||he;let H;g&&Gt(g,!1),(H=L.onVnodeBeforeUpdate)&&lt(H,g,p,d),M&&jt(p,d,g,"beforeUpdate"),g&&Gt(g,!0);const z=E&&p.type!=="foreignObject";if(C?be(d.dynamicChildren,C,w,g,v,z,S):N||te(d,p,w,null,g,v,z,S,!1),T>0){if(T&16)Me(w,p,A,L,g,v,E);else if(T&2&&A.class!==L.class&&r(w,"class",null,L.class,E),T&4&&r(w,"style",A.style,L.style,E),T&8){const oe=p.dynamicProps;for(let ne=0;ne<oe.length;ne++){const me=oe[ne],Qe=A[me],pn=L[me];(pn!==Qe||me==="value")&&r(w,me,Qe,pn,E,d.children,g,v,x)}}T&1&&d.children!==p.children&&u(w,p.children)}else!N&&C==null&&Me(w,p,A,L,g,v,E);((H=L.onVnodeUpdated)||M)&&Fe(()=>{H&&lt(H,g,p,d),M&&jt(p,d,g,"updated")},v)},be=(d,p,g,v,E,S,N)=>{for(let w=0;w<p.length;w++){const T=d[w],C=p[w],M=T.el&&(T.type===gt||!Kn(T,C)||T.shapeFlag&70)?h(T.el):g;b(T,C,M,null,v,E,S,N,!0)}},Me=(d,p,g,v,E,S,N)=>{if(g!==v){if(g!==he)for(const w in g)!ti(w)&&!(w in v)&&r(d,w,g[w],null,N,p.children,E,S,x);for(const w in v){if(ti(w))continue;const T=v[w],C=g[w];T!==C&&w!=="value"&&r(d,w,C,T,N,p.children,E,S,x)}"value"in v&&r(d,"value",g.value,v.value)}},qe=(d,p,g,v,E,S,N,w,T)=>{const C=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:A,dynamicChildren:L,slotScopeIds:H}=p;H&&(w=w?w.concat(H):H),d==null?(s(C,g,v),s(M,g,v),G(p.children,g,M,E,S,N,w,T)):A>0&&A&64&&L&&d.dynamicChildren?(be(d.dynamicChildren,L,g,E,S,N,w),(p.key!=null||E&&p===E.subTree)&&qc(d,p,!0)):te(d,p,g,M,E,S,N,w,T)},St=(d,p,g,v,E,S,N,w,T)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?E.ctx.activate(p,g,v,N,T):$e(p,g,v,E,S,N,T):we(d,p,T)},$e=(d,p,g,v,E,S,N)=>{const w=d.component=Yd(d,v,E);if(Mc(d)&&(w.ctx.renderer=X),Xd(w),w.asyncDep){if(E&&E.registerDep(w,ge),!d.el){const T=w.subTree=Pe(on);P(null,T,p,g)}return}ge(w,d,p,g,E,S,N)},we=(d,p,g)=>{const v=p.component=d.component;if(ld(d,p,g))if(v.asyncDep&&!v.asyncResolved){re(v,p,g);return}else v.next=p,Zf(v.update),v.update();else p.el=d.el,v.vnode=p},ge=(d,p,g,v,E,S,N)=>{const w=()=>{if(d.isMounted){let{next:M,bu:A,u:L,parent:H,vnode:z}=d,oe=M,ne;Gt(d,!1),M?(M.el=z.el,re(d,M,N)):M=z,A&&ni(A),(ne=M.props&&M.props.onVnodeBeforeUpdate)&&lt(ne,H,M,z),Gt(d,!0);const me=ir(d),Qe=d.subTree;d.subTree=me,b(Qe,me,h(Qe.el),R(Qe),d,E,S),M.el=me.el,oe===null&&ad(d,me.el),L&&Fe(L,E),(ne=M.props&&M.props.onVnodeUpdated)&&Fe(()=>lt(ne,H,M,z),E)}else{let M;const{el:A,props:L}=p,{bm:H,m:z,parent:oe}=d,ne=ri(p);if(Gt(d,!1),H&&ni(H),!ne&&(M=L&&L.onVnodeBeforeMount)&&lt(M,oe,p),Gt(d,!0),A&&$){const me=()=>{d.subTree=ir(d),$(A,d.subTree,d,E,null)};ne?p.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=ir(d);b(null,me,g,v,d,E,S),p.el=me.el}if(z&&Fe(z,E),!ne&&(M=L&&L.onVnodeMounted)){const me=p;Fe(()=>lt(M,oe,me),E)}(p.shapeFlag&256||oe&&ri(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&Fe(d.a,E),d.isMounted=!0,p=g=v=null}},T=d.effect=new _o(w,()=>wo(C),d.scope),C=d.update=()=>T.run();C.id=d.uid,Gt(d,!0),C()},re=(d,p,g)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,kd(d,p.props,v,g),Ld(d,p.children,g),Bn(),bl(),Hn()},te=(d,p,g,v,E,S,N,w,T=!1)=>{const C=d&&d.children,M=d?d.shapeFlag:0,A=p.children,{patchFlag:L,shapeFlag:H}=p;if(L>0){if(L&128){Vt(C,A,g,v,E,S,N,w,T);return}else if(L&256){Ke(C,A,g,v,E,S,N,w,T);return}}H&8?(M&16&&x(C,E,S),A!==C&&u(g,A)):M&16?H&16?Vt(C,A,g,v,E,S,N,w,T):x(C,E,S,!0):(M&8&&u(g,""),H&16&&G(A,g,v,E,S,N,w,T))},Ke=(d,p,g,v,E,S,N,w,T)=>{d=d||Cn,p=p||Cn;const C=d.length,M=p.length,A=Math.min(C,M);let L;for(L=0;L<A;L++){const H=p[L]=T?Pt(p[L]):at(p[L]);b(d[L],H,g,null,E,S,N,w,T)}C>M?x(d,E,S,!0,!1,A):G(p,g,v,E,S,N,w,T,A)},Vt=(d,p,g,v,E,S,N,w,T)=>{let C=0;const M=p.length;let A=d.length-1,L=M-1;for(;C<=A&&C<=L;){const H=d[C],z=p[C]=T?Pt(p[C]):at(p[C]);if(Kn(H,z))b(H,z,g,null,E,S,N,w,T);else break;C++}for(;C<=A&&C<=L;){const H=d[A],z=p[L]=T?Pt(p[L]):at(p[L]);if(Kn(H,z))b(H,z,g,null,E,S,N,w,T);else break;A--,L--}if(C>A){if(C<=L){const H=L+1,z=H<M?p[H].el:v;for(;C<=L;)b(null,p[C]=T?Pt(p[C]):at(p[C]),g,z,E,S,N,w,T),C++}}else if(C>L)for(;C<=A;)Le(d[C],E,S,!0),C++;else{const H=C,z=C,oe=new Map;for(C=z;C<=L;C++){const Ve=p[C]=T?Pt(p[C]):at(p[C]);Ve.key!=null&&oe.set(Ve.key,C)}let ne,me=0;const Qe=L-z+1;let pn=!1,ul=0;const qn=new Array(Qe);for(C=0;C<Qe;C++)qn[C]=0;for(C=H;C<=A;C++){const Ve=d[C];if(me>=Qe){Le(Ve,E,S,!0);continue}let ot;if(Ve.key!=null)ot=oe.get(Ve.key);else for(ne=z;ne<=L;ne++)if(qn[ne-z]===0&&Kn(Ve,p[ne])){ot=ne;break}ot===void 0?Le(Ve,E,S,!0):(qn[ot-z]=C+1,ot>=ul?ul=ot:pn=!0,b(Ve,p[ot],g,null,E,S,N,w,T),me++)}const hl=pn?Ud(qn):Cn;for(ne=hl.length-1,C=Qe-1;C>=0;C--){const Ve=z+C,ot=p[Ve],fl=Ve+1<M?p[Ve+1].el:v;qn[C]===0?b(null,ot,g,fl,E,S,N,w,T):pn&&(ne<0||C!==hl[ne]?Ye(ot,g,fl,2):ne--)}}},Ye=(d,p,g,v,E=null)=>{const{el:S,type:N,transition:w,children:T,shapeFlag:C}=d;if(C&6){Ye(d.component.subTree,p,g,v);return}if(C&128){d.suspense.move(p,g,v);return}if(C&64){N.move(d,p,g,X);return}if(N===gt){s(S,p,g);for(let A=0;A<T.length;A++)Ye(T[A],p,g,v);s(d.anchor,p,g);return}if(N===or){k(d,p,g);return}if(v!==2&&C&1&&w)if(v===0)w.beforeEnter(S),s(S,p,g),Fe(()=>w.enter(S),E);else{const{leave:A,delayLeave:L,afterLeave:H}=w,z=()=>s(S,p,g),oe=()=>{A(S,()=>{z(),H&&H()})};L?L(S,z,oe):oe()}else s(S,p,g)},Le=(d,p,g,v=!1,E=!1)=>{const{type:S,props:N,ref:w,children:T,dynamicChildren:C,shapeFlag:M,patchFlag:A,dirs:L}=d;if(w!=null&&kr(w,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const H=M&1&&L,z=!ri(d);let oe;if(z&&(oe=N&&N.onVnodeBeforeUnmount)&&lt(oe,p,d),M&6)y(d.component,g,v);else{if(M&128){d.suspense.unmount(g,v);return}H&&jt(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,E,X,v):C&&(S!==gt||A>0&&A&64)?x(C,p,g,!1,!0):(S===gt&&A&384||!E&&M&16)&&x(T,p,g),v&&dn(d)}(z&&(oe=N&&N.onVnodeUnmounted)||H)&&Fe(()=>{oe&&lt(oe,p,d),H&&jt(d,null,p,"unmounted")},g)},dn=d=>{const{type:p,el:g,anchor:v,transition:E}=d;if(p===gt){js(g,v);return}if(p===or){Y(d);return}const S=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:w}=E,T=()=>N(g,S);w?w(d.el,S,T):T()}else S()},js=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},y=(d,p,g)=>{const{bum:v,scope:E,update:S,subTree:N,um:w}=d;v&&ni(v),E.stop(),S&&(S.active=!1,Le(N,d,p,g)),w&&Fe(w,p),Fe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(d,p,g,v=!1,E=!1,S=0)=>{for(let N=S;N<d.length;N++)Le(d[N],p,g,v,E)},R=d=>d.shapeFlag&6?R(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),D=(d,p,g)=>{d==null?p._vnode&&Le(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,g),bl(),Pc(),p._vnode=d},X={p:b,um:Le,m:Ye,r:dn,mt:$e,mc:G,pc:te,pbc:be,n:R,o:t};let fe,$;return e&&([fe,$]=e(X)),{render:D,hydrate:fe,createApp:Wd(D,fe)}}function Gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qc(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Pt(i[r]),l.el=o.el),n||qc(o,l)),l.type===Hi&&(l.el=o.el)}}function Ud(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const $d=t=>t.__isTeleport,gt=Symbol(void 0),Hi=Symbol(void 0),on=Symbol(void 0),or=Symbol(void 0),as=[];let Ze=null;function vn(t=!1){as.push(Ze=t?null:[])}function Vd(){as.pop(),Ze=as[as.length-1]||null}let bs=1;function Ol(t){bs+=t}function Kc(t){return t.dynamicChildren=bs>0?Ze||Cn:null,Vd(),bs>0&&Ze&&Ze.push(t),t}function Xs(t,e,n,s,i,r){return Kc(Ot(t,e,n,s,i,r,!0))}function Yc(t,e,n,s,i){return Kc(Pe(t,e,n,s,i,!0))}function Dr(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const Ui="__vInternal",Qc=({key:t})=>t??null,oi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||de(t)||U(t)?{i:ze,r:t,k:e,f:!!n}:t:null;function Ot(t,e=null,n=null,s=0,i=null,r=t===gt?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qc(e),ref:e&&oi(e),scopeId:Wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ze};return l?(Ro(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Ce(n)?8:16),bs>0&&!o&&Ze&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ze.push(a),a}const Pe=jd;function jd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Id)&&(t=on),Dr(t)){const l=Pn(t,e,!0);return n&&Ro(l,n),bs>0&&!r&&Ze&&(l.shapeFlag&6?Ze[Ze.indexOf(t)]=l:Ze.push(l)),l.patchFlag|=-2,l}if(np(t)&&(t=t.__vccOpts),e){e=Gd(e);let{class:l,style:a}=e;l&&!Ce(l)&&(e.class=co(l)),ce(a)&&(Cc(a)&&!B(a)&&(a=De({},a)),e.style=ao(a))}const o=Ce(t)?1:cd(t)?128:$d(t)?64:ce(t)?4:U(t)?2:0;return Ot(t,e,n,s,i,o,r,!0)}function Gd(t){return t?Cc(t)||Ui in t?De({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?zd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Qc(l),ref:e&&e.ref?n&&i?B(i)?i.concat(oi(e)):[i,oi(e)]:oi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function li(t=" ",e=0){return Pe(Hi,null,t,e)}function kl(t="",e=!1){return e?(vn(),Yc(on,null,t)):Pe(on,null,t)}function at(t){return t==null||typeof t=="boolean"?Pe(on):B(t)?Pe(gt,null,t.slice()):typeof t=="object"?Pt(t):Pe(Hi,null,String(t))}function Pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function Ro(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ro(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ui in e)?e._ctx=ze:i===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[li(e)]):n=8);t.children=e,t.shapeFlag|=n}function zd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=co([e.class,s.class]));else if(i==="style")e.style=ao([e.style,s.style]);else if(Ai(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){st(t,e,7,[n,s])}const qd=zc();let Kd=0;function Yd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qd,r={uid:Kd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$c(s,i),emitsOptions:Oc(s,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nd.bind(null,r),t.ce&&t.ce(r),r}let _e=null;const Qd=()=>_e||ze,An=t=>{_e=t,t.scope.on()},sn=()=>{_e&&_e.scope.off(),_e=null};function Xc(t){return t.vnode.shapeFlag&4}let ws=!1;function Xd(t,e=!1){ws=e;const{props:n,children:s}=t.vnode,i=Xc(t);Od(t,n,i,e),Md(t,s);const r=i?Jd(t,e):void 0;return ws=!1,r}function Jd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=xn(new Proxy(t.ctx,Td));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ep(t):null;An(t),Bn();const r=Dt(s,t,0,[t.props,i]);if(Hn(),sn(),ic(r)){if(r.then(sn,sn),e)return r.then(o=>{Dl(t,o,e)}).catch(o=>{Li(o,t,0)});t.asyncDep=r}else Dl(t,r,e)}else Jc(t,e)}function Dl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Sc(e)),Jc(t,n)}let Ml;function Jc(t,e,n){const s=t.type;if(!t.render){if(!e&&Ml&&!s.render){const i=s.template||So(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=De(De({isCustomElement:r,delimiters:l},o),a);s.render=Ml(i,c)}}t.render=s.render||nt}An(t),Bn(),Rd(t),Hn(),sn()}function Zd(t){return new Proxy(t.attrs,{get(e,n){return He(t,"get","$attrs"),e[n]}})}function ep(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Zd(t))},slots:t.slots,emit:t.emit,expose:e}}function $i(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sc(xn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ls)return ls[n](t)},has(e,n){return n in e||n in ls}}))}function tp(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function np(t){return U(t)&&"__vccOpts"in t}const Ge=(t,e)=>Qf(t,e,ws);function Zc(t,e,n){const s=arguments.length;return s===2?ce(e)&&!B(e)?Dr(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Dr(n)&&(n=[n]),Pe(t,e,n))}const sp=Symbol(""),ip=()=>ht(sp),rp="3.2.47",op="http://www.w3.org/2000/svg",Qt=typeof document<"u"?document:null,Ll=Qt&&Qt.createElement("template"),lp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Qt.createElementNS(op,t):Qt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Qt.createTextNode(t),createComment:t=>Qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ll.innerHTML=s?`<svg>${t}</svg>`:t;const l=Ll.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ap(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cp(t,e,n){const s=t.style,i=Ce(n);if(n&&!i){if(e&&!Ce(e))for(const r in e)n[r]==null&&Mr(s,r,"");for(const r in n)Mr(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Fl=/\s*!important$/;function Mr(t,e,n){if(B(n))n.forEach(s=>Mr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=up(t,e);Fl.test(n)?t.setProperty(Wn(s),n.replace(Fl,""),"important"):t[s]=n}}const Wl=["Webkit","Moz","ms"],lr={};function up(t,e){const n=lr[e];if(n)return n;let s=ft(e);if(s!=="filter"&&s in t)return lr[e]=s;s=Di(s);for(let i=0;i<Wl.length;i++){const r=Wl[i]+s;if(r in t)return lr[e]=r}return e}const Bl="http://www.w3.org/1999/xlink";function hp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bl,e.slice(6,e.length)):t.setAttributeNS(Bl,e,n);else{const r=rf(e);n==null||r&&!tc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function fp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=tc(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Xt(t,e,n,s){t.addEventListener(e,n,s)}function dp(t,e,n,s){t.removeEventListener(e,n,s)}function pp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=_p(e);if(s){const c=r[e]=vp(s,i);Xt(t,l,c,a)}else o&&(dp(t,l,o,a),r[e]=void 0)}}const Hl=/(?:Once|Passive|Capture)$/;function _p(t){let e;if(Hl.test(t)){e={};let s;for(;s=t.match(Hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wn(t.slice(2)),e]}let ar=0;const gp=Promise.resolve(),mp=()=>ar||(gp.then(()=>ar=0),ar=Date.now());function vp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;st(yp(s,n.value),e,5,[s])};return n.value=t,n.attached=mp(),n}function yp(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ul=/^on[a-z]/,Ep=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?ap(t,s,i):e==="style"?cp(t,n,s):Ai(e)?uo(e)||pp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cp(t,e,s,i))?fp(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),hp(t,e,s,i))};function Cp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ul.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ul.test(e)&&Ce(n)?!1:e in t}const di=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>ni(e,n):e};function bp(t){t.target.composing=!0}function $l(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wp={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=di(i);const r=s||i.props&&i.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Ir(l)),t._assign(l)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",bp),Xt(t,"compositionend",$l),Xt(t,"change",$l))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=di(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ir(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},UC={deep:!0,created(t,e,n){t._assign=di(n),Xt(t,"change",()=>{const s=t._modelValue,i=Ip(t),r=t.checked,o=t._assign;if(B(s)){const l=nc(s,i),a=l!==-1;if(r&&!a)o(s.concat(i));else if(!r&&a){const c=[...s];c.splice(l,1),o(c)}}else if(Oi(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(eu(t,r))})},mounted:Vl,beforeUpdate(t,e,n){t._assign=di(n),Vl(t,e,n)}};function Vl(t,{value:e,oldValue:n},s){t._modelValue=e,B(e)?t.checked=nc(e,s.props.value)>-1:Oi(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Pi(e,eu(t,!0)))}function Ip(t){return"_value"in t?t._value:t.value}function eu(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Sp=De({patchProp:Ep},lp);let jl;function Tp(){return jl||(jl=Bd(Sp))}const Rp=(...t)=>{const e=Tp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Np(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Np(t){return Ce(t)?document.querySelector(t):t}var xp=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let tu;const Vi=t=>tu=t,nu=Symbol();function Lr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var cs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(cs||(cs={}));function Pp(){const t=ac(!0),e=t.run(()=>ys({}));let n=[],s=[];const i=xn({install(r){Vi(i),i._a=r,r.provide(nu,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!xp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const su=()=>{};function Gl(t,e,n,s=su){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&cc()&&_f(i),i}function _n(t,...e){t.slice().forEach(n=>{n(...e)})}function Fr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Lr(i)&&Lr(s)&&t.hasOwnProperty(n)&&!de(s)&&!vt(s)?t[n]=Fr(i,s):t[n]=s}return t}const Ap=Symbol();function Op(t){return!Lr(t)||!t.hasOwnProperty(Ap)}const{assign:xt}=Object;function kp(t){return!!(de(t)&&t.effect)}function Dp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=qf(n.state.value[t]);return xt(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=xn(Ge(()=>{Vi(n);const _=n._s.get(t);return o[f].call(_,_)})),h),{}))}return a=iu(t,c,e,n,s,!0),a}function iu(t,e,n={},s,i,r){let o;const l=xt({actions:{}},n),a={deep:!0};let c,u,h=xn([]),f=xn([]),_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),ys({});let b;function O(Q){let G;c=u=!1,typeof Q=="function"?(Q(s.state.value[t]),G={type:cs.patchFunction,storeId:t,events:_}):(Fr(s.state.value[t],Q),G={type:cs.patchObject,payload:Q,storeId:t,events:_});const Re=b=Symbol();bo().then(()=>{b===Re&&(c=!0)}),u=!0,_n(h,G,s.state.value[t])}const P=r?function(){const{state:G}=n,Re=G?G():{};this.$patch(be=>{xt(be,Re)})}:su;function W(){o.stop(),h=[],f=[],s._s.delete(t)}function k(Q,G){return function(){Vi(s);const Re=Array.from(arguments),be=[],Me=[];function qe(we){be.push(we)}function St(we){Me.push(we)}_n(f,{args:Re,name:Q,store:se,after:qe,onError:St});let $e;try{$e=G.apply(this&&this.$id===t?this:se,Re)}catch(we){throw _n(Me,we),we}return $e instanceof Promise?$e.then(we=>(_n(be,we),we)).catch(we=>(_n(Me,we),Promise.reject(we))):(_n(be,$e),$e)}}const Y={_p:s,$id:t,$onAction:Gl.bind(null,f),$patch:O,$reset:P,$subscribe(Q,G={}){const Re=Gl(h,Q,G.detached,()=>be()),be=o.run(()=>os(()=>s.state.value[t],Me=>{(G.flush==="sync"?u:c)&&Q({storeId:t,type:cs.direct,events:_},Me)},xt({},a,G)));return Re},$dispose:W},se=Un(Y);s._s.set(t,se);const ve=s._e.run(()=>(o=ac(),o.run(()=>e())));for(const Q in ve){const G=ve[Q];if(de(G)&&!kp(G)||vt(G))r||(m&&Op(G)&&(de(G)?G.value=m[Q]:Fr(G,m[Q])),s.state.value[t][Q]=G);else if(typeof G=="function"){const Re=k(Q,G);ve[Q]=Re,l.actions[Q]=G}}return xt(se,ve),xt(K(se),ve),Object.defineProperty(se,"$state",{get:()=>s.state.value[t],set:Q=>{O(G=>{xt(G,Q)})}}),s._p.forEach(Q=>{xt(se,o.run(()=>Q({store:se,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(se.$state,m),c=!0,u=!0,se}function Mp(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=Qd();return l=l||c&&ht(nu,null),l&&Vi(l),l=tu,l._s.has(s)||(r?iu(s,e,i,l):Dp(s,i,l)),l._s.get(s)}return o.$id=s,o}function Lp(t){{t=K(t);const e={};for(const n in t){const s=t[n];(de(s)||vt(s))&&(e[n]=Tc(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw $n(e)},$n=function(t){return new Error("Firebase Database ("+ru.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},No={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ou(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Wp;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lu=function(t){const e=ou(t);return No.encodeByteArray(e,!0)},pi=function(t){return lu(t).replace(/\./g,"")},Wr=function(t){try{return No.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t){return au(void 0,t)}function au(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hp(n)||(t[n]=au(t[n],e[n]));return t}function Hp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=()=>Up().__FIREBASE_DEFAULTS__,Vp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wr(t[1]);return e&&JSON.parse(e)},cu=()=>{try{return $p()||Vp()||jp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gp=t=>{var e,n;return(n=(e=cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zp=t=>{const e=Gp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qp=()=>{var t;return(t=cu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[pi(JSON.stringify(n)),pi(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yp())}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hu(){return ru.NODE_ADMIN===!0}function Xp(){try{return typeof indexedDB=="object"}catch{return!1}}function Jp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="FirebaseError";class Fs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zp,Object.setPrototypeOf(this,Fs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fu.prototype.create)}}class fu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?e_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fs(i,l,s)}}function e_(t,e){return t.replace(t_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const t_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Is(Wr(r[0])||""),n=Is(Wr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},n_=function(t){const e=du(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},s_=function(t){const e=du(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function On(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _i(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ql(r)&&ql(o)){if(!Br(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ql(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function xo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){return t&&t._delegate?t._delegate:t}class Ss{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ji;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c_(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:a_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a_(t){return t===qt?void 0:t}function c_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const h_={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},f_=le.INFO,d_={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},p_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=d_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=f_,this._logHandler=p_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const __=(t,e)=>e.some(n=>t instanceof n);let Kl,Yl;function g_(){return Kl||(Kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m_(){return Yl||(Yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,Hr=new WeakMap,gu=new WeakMap,cr=new WeakMap,Po=new WeakMap;function v_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_u.set(n,t)}).catch(()=>{}),Po.set(e,t),e}function y_(t){if(Hr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Hr.set(t,e)}let Ur={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function E_(t){Ur=t(Ur)}function C_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ur(this),e,...n);return gu.set(s,e.sort?e.sort():[e]),Mt(s)}:m_().includes(t)?function(...e){return t.apply(ur(this),e),Mt(_u.get(this))}:function(...e){return Mt(t.apply(ur(this),e))}}function b_(t){return typeof t=="function"?C_(t):(t instanceof IDBTransaction&&y_(t),__(t,g_())?new Proxy(t,Ur):t)}function Mt(t){if(t instanceof IDBRequest)return v_(t);if(cr.has(t))return cr.get(t);const e=b_(t);return e!==t&&(cr.set(t,e),Po.set(e,t)),e}const ur=t=>Po.get(t);function w_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Mt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Mt(o.result),a.oldVersion,a.newVersion,Mt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const I_=["get","getKey","getAll","getAllKeys","count"],S_=["put","add","delete","clear"],hr=new Map;function Ql(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=S_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||I_.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return hr.set(e,r),r}E_(t=>({...t,get:(e,n,s)=>Ql(e,n)||t.get(e,n,s),has:(e,n)=>!!Ql(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function R_(t){const e=t.getComponent();return e?.type==="VERSION"}const $r="@firebase/app",Xl="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new pu("@firebase/app"),N_="@firebase/app-compat",x_="@firebase/analytics-compat",P_="@firebase/analytics",A_="@firebase/app-check-compat",O_="@firebase/app-check",k_="@firebase/auth",D_="@firebase/auth-compat",M_="@firebase/database",L_="@firebase/database-compat",F_="@firebase/functions",W_="@firebase/functions-compat",B_="@firebase/installations",H_="@firebase/installations-compat",U_="@firebase/messaging",$_="@firebase/messaging-compat",V_="@firebase/performance",j_="@firebase/performance-compat",G_="@firebase/remote-config",z_="@firebase/remote-config-compat",q_="@firebase/storage",K_="@firebase/storage-compat",Y_="@firebase/firestore",Q_="@firebase/firestore-compat",X_="firebase",J_="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]",Z_={[$r]:"fire-core",[N_]:"fire-core-compat",[P_]:"fire-analytics",[x_]:"fire-analytics-compat",[O_]:"fire-app-check",[A_]:"fire-app-check-compat",[k_]:"fire-auth",[D_]:"fire-auth-compat",[M_]:"fire-rtdb",[L_]:"fire-rtdb-compat",[F_]:"fire-fn",[W_]:"fire-fn-compat",[B_]:"fire-iid",[H_]:"fire-iid-compat",[U_]:"fire-fcm",[$_]:"fire-fcm-compat",[V_]:"fire-perf",[j_]:"fire-perf-compat",[G_]:"fire-rc",[z_]:"fire-rc-compat",[q_]:"fire-gcs",[K_]:"fire-gcs-compat",[Y_]:"fire-fst",[Q_]:"fire-fst-compat","fire-js":"fire-js",[X_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Map,jr=new Map;function eg(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(jr.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;jr.set(e,t);for(const n of an.values())eg(n,t);return!0}function tg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new fu("app","Firebase",ng);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=J_;function mu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=qp()),!n)throw Lt.create("no-options");const r=an.get(i);if(r){if(Br(n,r.options)&&Br(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new u_(i);for(const a of jr.values())o.addComponent(a);const l=new sg(n,s,o);return an.set(i,l),l}function rg(t=Vr){const e=an.get(t);if(!e&&t===Vr)return mu();if(!e)throw Lt.create("no-app",{appName:t});return e}function og(){return Array.from(an.values())}async function lg(t){const e=t.name;an.has(e)&&(an.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function In(t,e,n){var s;let i=(s=Z_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(l.join(" "));return}gi(new Ss(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="firebase-heartbeat-database",cg=1,Ts="firebase-heartbeat-store";let fr=null;function vu(){return fr||(fr=w_(ag,cg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ts)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),fr}async function ug(t){try{return(await vu()).transaction(Ts).objectStore(Ts).get(yu(t))}catch(e){if(e instanceof Fs)ln.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e?.message});ln.warn(n.message)}}}async function Jl(t,e){try{const s=(await vu()).transaction(Ts,"readwrite");return await s.objectStore(Ts).put(e,yu(t)),s.done}catch(n){if(n instanceof Fs)ln.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n?.message});ln.warn(s.message)}}}function yu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=1024,fg=30*24*60*60*1e3;class dg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _g(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=fg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zl(),{heartbeatsToSend:n,unsentEntries:s}=pg(this._heartbeatsCache.heartbeats),i=pi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zl(){return new Date().toISOString().substring(0,10)}function pg(t,e=hg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ea(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ea(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xp()?Jp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ug(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ea(t){return pi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){gi(new Ss("platform-logger",e=>new T_(e),"PRIVATE")),gi(new Ss("heartbeat",e=>new dg(e),"PRIVATE")),In($r,Xl,t),In($r,Xl,"esm2017"),In("fire-js","")}gg("");const ta="@firebase/database",na="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu="";function mg(t){Eu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vg(e)}}catch{}return new yg},Zt=Cu("localStorage"),Gr=Cu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new pu("@firebase/database"),Eg=function(){let t=1;return function(){return t++}}(),bu=function(t){const e=o_(t),n=new r_;n.update(e);const s=n.digest();return No.encodeByteArray(s)},Ws=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ws.apply(null,s):typeof s=="object"?e+=ye(s):e+=s,e+=" "}return e};let rn=null,sa=!0;const Cg=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Sn.logLevel=le.VERBOSE,rn=Sn.log.bind(Sn),e&&Gr.set("logging_enabled",!0)):typeof t=="function"?rn=t:(rn=null,Gr.remove("logging_enabled"))},Ne=function(...t){if(sa===!0&&(sa=!1,rn===null&&Gr.get("logging_enabled")===!0&&Cg(!0)),rn){const e=Ws.apply(null,t);rn(e)}},Bs=function(t){return function(...e){Ne(t,...e)}},zr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ws(...t);Sn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${Ws(...t)}`;throw Sn.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Ws(...t);Sn.warn(e)},bg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},kn="[MIN_NAME]",cn="[MAX_NAME]",jn=function(t,e){if(t===e)return 0;if(t===kn||e===cn)return-1;if(e===kn||t===cn)return 1;{const n=ia(t),s=ia(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ig=function(t,e){return t===e?0:t<e?-1:1},Yn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},Ao=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ye(e[s]),n+=":",n+=Ao(t[e[s]]);return n+="}",n},Iu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Su=function(t){I(!wu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Sg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Tg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Rg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Ng=new RegExp("^-?(0*)\\d{1,10}$"),xg=-2147483648,Pg=2147483647,ia=function(t){if(Ng.test(t)){const e=Number(t);if(e>=xg&&e<=Pg)return e}return null},Gn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ag=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="5",Tu="v",Ru="s",Nu="r",xu="f",Pu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Au="ls",Ou="p",qr="ac",ku="websocket",Du="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Dg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lu(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===ku)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Du)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dg(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Bp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={},pr={};function ko(t){const e=t.toString();return dr[e]||(dr[e]=new Mg),dr[e]}function Lg(t,e){const n=t.toString();return pr[n]||(pr[n]=e()),pr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Gn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="start",Wg="close",Bg="pLPCommand",Hg="pRTLPCB",Fu="id",Wu="pw",Bu="ser",Ug="cb",$g="seg",Vg="ts",jg="d",Gg="dframe",Hu=1870,Uu=30,zg=Hu-Uu,qg=25e3,Kg=3e4;class En{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bs(e),this.stats_=ko(n),this.urlFn=a=>(this.appCheckToken&&(a[qr]=this.appCheckToken),Lu(n,Du,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Fg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kg)),wg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Do((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ra)this.id=l,this.password=a;else if(o===Wg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ra]="t",s[Bu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ug]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Tu]=Oo,this.transportSessionId&&(s[Ru]=this.transportSessionId),this.lastSessionId&&(s[Au]=this.lastSessionId),this.applicationId&&(s[Ou]=this.applicationId),this.appCheckToken&&(s[qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pu.test(location.hostname)&&(s[Nu]=xu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){En.forceAllow_=!0}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){return En.forceAllow_?!0:!En.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sg()&&!Tg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=lu(n),i=Iu(s,zg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Gg]="t",s[Fu]=e,s[Wu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Do{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Eg(),window[Bg+this.uniqueCallbackIdentifier]=e,window[Hg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Do.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fu]=this.myID,e[Wu]=this.myPW,e[Bu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Uu+s.length<=Hu;){const o=this.pendingSegs.shift();s=s+"&"+$g+i+"="+o.seg+"&"+Vg+i+"="+o.ts+"&"+jg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(qg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=16384,Qg=45e3;let mi=null;typeof MozWebSocket<"u"?mi=MozWebSocket:typeof WebSocket<"u"&&(mi=WebSocket);class Je{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bs(this.connId),this.stats_=ko(n),this.connURL=Je.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Tu]=Oo,typeof location<"u"&&location.hostname&&Pu.test(location.hostname)&&(o[Nu]=xu),n&&(o[Ru]=n),s&&(o[Au]=s),i&&(o[qr]=i),r&&(o[Ou]=r),Lu(e,ku,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zt.set("previous_websocket_failure",!0);try{let s;hu(),this.mySock=new mi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&mi!==null&&!Je.forceDisallow_}static previouslyFailed(){return Zt.isInMemoryStorage||Zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Is(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Iu(n,Yg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[En,Je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Je&&Je.isAvailable();let s=n&&!Je.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Je];else{const i=this.transports_=[];for(const r of Rs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=6e4,Jg=5e3,Zg=10*1024,em=100*1024,_r="t",oa="d",tm="s",la="r",nm="e",aa="o",ca="a",ua="n",ha="p",sm="h";class im{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bs("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>em?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_r in e){const n=e[_r];n===ca?this.upgradeIfSecondaryHealthy_():n===la?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===aa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yn("t",e),s=Yn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ha,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ca,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ua,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yn("t",e),s=Yn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yn(_r,e);if(oa in e){const s=e[oa];if(n===sm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ua){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tm?this.onConnectionShutdown_(s):n===la?this.onReset_(s):n===nm?zr("Server Error: "+s):n===aa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Oo!==s&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Jg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ha,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Vu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!uu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vi}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=32,da=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ie("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ht(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function ju(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function Ee(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ie(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return ke(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qu(t,e){if(Ht(t)!==Ht(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ht(t)>Ht(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class om{constructor(e,n){this.errorPrefix_=n,this.parts_=Gu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Gi(this.parts_[s]);Ku(this)}}function lm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gi(e),Ku(t)}function am(t){const e=t.parts_.pop();t.byteLength_-=Gi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ku(t){if(t.byteLength_>da)throw new Error(t.errorPrefix_+"has a key path longer than "+da+" bytes ("+t.byteLength_+").");if(t.parts_.length>fa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fa+") or object contains a cycle "+Kt(t))}function Kt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Vu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Mo}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=1e3,cm=60*5*1e3,pa=30*1e3,um=1.3,hm=3e4,fm="server_kill",_a=3;class yt extends $u{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=yt.nextPersistentConnectionId_++,this.log_=Bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qn,this.maxReconnectDelay_=cm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!hu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ye(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;yt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const s=On(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||s_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=n_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zr("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hm&&(this.reconnectDelay_=Qn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*um)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new im(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Be(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(fm)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Be(h),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zl(this.interruptReasons_)&&(this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ao(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_a&&(this.reconnectDelay_=pa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_a&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Eu.replace(/\./g,"-")]=1,uu()?e["framework.cordova"]=1:Qp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vi.getInstance().currentlyOnline();return zl(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(kn,e),i=new V(kn,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js;class Yu extends zi{static get __EMPTY_NODE(){return Js}static set __EMPTY_NODE(e){Js=e}compare(e,n){return jn(e.name,n.name)}isDefinedOn(e){throw $n("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(cn,Js)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,Js)}toString(){return".key"}}const Rn=new Yu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Se.RED,this.left=i??We.EMPTY_NODE,this.right=r??We.EMPTY_NODE}copy(e,n,s,i,r){return new Se(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class dm{copy(e,n,s,i,r){return this}insert(e,n,s){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zs(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new dm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){return jn(t.name,e.name)}function Lo(t,e){return jn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;function _m(t){Kr=t}const Qu=function(t){return typeof t=="number"?"number:"+Su(t):"string:"+t},Xu=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else I(t===Kr||t.isEmpty(),"priority of unexpected type.");I(t===Kr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;class Ie{constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xu(this.priorityNode_)}static set __childrenNodeConstructor(e){ga=e}static get __childrenNodeConstructor(){return ga}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:q(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Su(this.value_):e+=this.value_,this.lazyHash_=bu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ie.VALUE_TYPE_ORDER.indexOf(n),r=Ie.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju,Zu;function gm(t){Ju=t}function mm(t){Zu=t}class vm extends zi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?jn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(cn,new Ie("[PRIORITY-POST]",Zu))}makePost(e,n){const s=Ju(e);return new V(n,new Ie("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new vm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=Math.log(2);class Em{constructor(e){const n=r=>parseInt(Math.log(r)/ym,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yi=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Se(f,h.node,Se.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),b=i(_+1,c);return h=t[_],f=n?n(h):h,new Se(f,h.node,Se.BLACK,m,b)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,b){const O=h-m,P=h;h-=m;const W=i(O+1,P),k=t[O],Y=n?n(k):k;_(new Se(Y,k.node,b,null,W))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const b=a.nextBitIsOne(),O=Math.pow(2,a.count-(m+1));b?f(O,Se.BLACK):(f(O,Se.BLACK),f(O,Se.RED))}return u},o=new Em(t.length),l=r(o);return new We(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;const gn={};class mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(gn&&pe,"ChildrenNode.ts has not been loaded"),gr=gr||new mt({".priority":gn},{".priority":pe}),gr}get(e){const n=On(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=yi(s,e.getCompare()):l=gn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new mt(u,c)}addToIndexes(e,n){const s=_i(this.indexes_,(i,r)=>{const o=On(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===gn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),yi(l,o.getCompare())}else return gn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=_i(this.indexes_,i=>{if(i===gn)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn;class F{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xu(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xn||(Xn=new F(new We(Lo),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xn}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xn:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Xn:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{I(q(e)!==".priority"||Ht(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qu(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===Rn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cm extends F{constructor(){super(new We(Lo),F.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Hs=new Cm;Object.defineProperties(V,{MIN:{value:new V(kn,F.EMPTY_NODE)},MAX:{value:new V(cn,Hs)}});Yu.__EMPTY_NODE=F.EMPTY_NODE;Ie.__childrenNodeConstructor=F;_m(Hs);mm(Hs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=!0;function Te(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,Te(e))}if(!(t instanceof Array)&&bm){const n=[];let s=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return F.EMPTY_NODE;const r=yi(n,pm,o=>o.name,Lo);if(s){const o=yi(n,pe.getCompare());return new F(r,Te(e),new mt({".priority":o},{".priority":pe}))}else return new F(r,Te(e),mt.Default)}else{let n=F.EMPTY_NODE;return Ue(t,(s,i)=>{if(wt(t,s)&&s.substring(0,1)!=="."){const r=Te(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Te(e))}}gm(Te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends zi{constructor(e){super(),this.indexPath_=e,I(!j(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?jn(e.name,n.name):r}makePost(e,n){const s=Te(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new V(cn,e)}toString(){return Gu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends zi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?jn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=Te(e);return new V(n,s)}toString(){return".value"}}const Sm=new Im;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){return{type:"value",snapshotNode:t}}function Dn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Tm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ns(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Dn(n,s)):o.trackChildChange(xs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ns(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(xs(i,r,o))}else s.trackChildChange(Dn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.indexedFilter_=new Fo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ps.getStartPost_(e),this.endPost_=Ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,l)=>{r.matches(new V(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new V(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r?.trackChildChange(xs(n,s,h)),l.updateImmediateChild(n,s);{r?.trackChildChange(Ns(n,h));const b=l.updateImmediateChild(n,F.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r?.trackChildChange(Dn(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ns(c.name,c.node)),r.trackChildChange(Dn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new Wo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nm(t){return t.loadsAllData()?new Fo(t.getIndex()):t.hasLimit()?new Rm(t):new Ps(t)}function ma(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pe?n="$priority":t.index_===Sm?n="$value":t.index_===Rn?n="$key":(I(t.index_ instanceof wm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ye(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ye(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ye(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function va(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends $u{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Bs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ei.getListenId_(e,s),l={};this.listens_[o]=l;const a=ma(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),On(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ei.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ma(e._queryParams),s=e._path.toString(),i=new ji;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+i_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Is(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){return{value:null,children:new Map}}function th(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,Ci());const i=t.children.get(s);e=ae(e),th(i,e,n)}}function Yr(t,e,n){t.value!==null?n(e,t.value):Pm(t,(s,i)=>{const r=new ie(e.toString()+"/"+s);Yr(i,r,n)})}function Pm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=10*1e3,Om=30*1e3,km=5*60*1e3;class Dm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Am(e);const s=ya+(Om-ya)*Math.random();us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ue(e,(i,r)=>{r>0&&wt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),us(this.reportStats_.bind(this),Math.floor(Math.random()*2*km))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function nh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ho(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tt.ACK_USER_WRITE,this.source=nh()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new bi(Z(),n,this.revert)}}else return I(q(this.path)===e,"operationForChild called for unrelated child."),new bi(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new As(this.source,Z()):new As(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tt.OVERWRITE}operationForChild(e){return j(this.path)?new un(this.source,Z(),this.snap.getImmediateChild(e)):new un(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tt.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new un(this.source,Z(),n.value):new Os(this.source,Z(),n)}else return I(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Os(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Tm(o.childName,o.snapshotNode))}),Jn(t,i,"child_removed",e,s,n),Jn(t,i,"child_added",e,s,n),Jn(t,i,"child_moved",r,s,n),Jn(t,i,"child_changed",e,s,n),Jn(t,i,"value",e,s,n),i}function Jn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Wm(t,l,a)),o.forEach(l=>{const a=Fm(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Fm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Wm(t,e,n){if(e.childName==null||n.childName==null)throw $n("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){return{eventCache:t,serverCache:e}}function hs(t,e,n,s){return qi(new Ut(e,n,s),t.serverCache)}function sh(t,e,n,s){return qi(t.eventCache,new Ut(e,n,s))}function wi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr;const Bm=()=>(mr||(mr=new We(Ig)),mr);class ue{constructor(e,n=Bm()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Ue(e,(s,i)=>{n=n.set(new ie(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(j(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:Ee(new ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new ue(null)}}set(e,n){if(j(e))return new ue(n,this.children);{const s=q(e),r=(this.children.get(s)||new ue(null)).set(ae(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(j(e))return n;{const s=q(e),r=(this.children.get(s)||new ue(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ee(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),Ee(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),Ee(n,i),s):new ue(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ee(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.writeTree_=e}static empty(){return new it(new ue(null))}}function fs(t,e,n){if(j(e))return new it(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new it(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new it(r)}}}function Ea(t,e,n){let s=t;return Ue(n,(i,r)=>{s=fs(s,Ee(e,i),r)}),s}function Ca(t,e){if(j(e))return it.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new it(n)}}function Qr(t,e){return fn(t,e)!=null}function fn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function ba(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function Ft(t,e){if(j(e))return t;{const n=fn(t,e);return n!=null?new it(new ue(n)):new it(t.writeTree_.subtree(e))}}function Xr(t){return t.writeTree_.isEmpty()}function Mn(t,e){return ih(Z(),t.writeTree_,e)}function ih(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ih(Ee(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ee(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t,e){return ah(e,t)}function Hm(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=fs(t.visibleWrites,e,n)),t.lastWriteId=s}function Um(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function $m(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Vm(l,s.path)?i=!1:et(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return jm(t),!0;if(s.snap)t.visibleWrites=Ca(t.visibleWrites,s.path);else{const l=s.children;Ue(l,a=>{t.visibleWrites=Ca(t.visibleWrites,Ee(s.path,a))})}return!0}else return!1}function Vm(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(Ee(t.path,n),e))return!0;return!1}function jm(t){t.visibleWrites=rh(t.allWrites,Gm,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Gm(t){return t.visible}function rh(t,e,n){let s=it.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)et(n,o)?(l=ke(n,o),s=fs(s,l,r.snap)):et(o,n)&&(l=ke(o,n),s=fs(s,Z(),r.snap.getChild(l)));else if(r.children){if(et(n,o))l=ke(n,o),s=Ea(s,l,r.children);else if(et(o,n))if(l=ke(o,n),j(l))s=Ea(s,Z(),r.children);else{const a=On(r.children,q(l));if(a){const c=a.getChild(ae(l));s=fs(s,Z(),c)}}}else throw $n("WriteRecord should have .snap or .children")}}return s}function oh(t,e,n,s,i){if(!s&&!i){const r=fn(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if(Xr(o))return n;if(n==null&&!Qr(o,Z()))return null;{const l=n||F.EMPTY_NODE;return Mn(o,l)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&Xr(r))return n;if(!i&&n==null&&!Qr(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(et(c.path,e)||et(e,c.path))},l=rh(t.allWrites,o,e),a=n||F.EMPTY_NODE;return Mn(l,a)}}}function zm(t,e,n){let s=F.EMPTY_NODE;const i=fn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(pe,(o,l)=>{const a=Mn(Ft(r,new ie(o)),l);s=s.updateImmediateChild(o,a)}),ba(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return ba(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qm(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(e,n);if(Qr(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return Xr(o)?i.getChild(n):Mn(o,i.getChild(n))}}function Km(t,e,n,s){const i=Ee(e,n),r=fn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return Mn(o,s.getNode().getImmediateChild(n))}else return null}function Ym(t,e){return fn(t.visibleWrites,e)}function Qm(t,e,n,s,i,r,o){let l;const a=Ft(t.visibleWrites,e),c=fn(a,Z());if(c!=null)l=c;else if(n!=null)l=Mn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Xm(){return{visibleWrites:it.empty(),allWrites:[],lastWriteId:-1}}function Ii(t,e,n,s){return oh(t.writeTree,t.treePath,e,n,s)}function Uo(t,e){return zm(t.writeTree,t.treePath,e)}function wa(t,e,n,s){return qm(t.writeTree,t.treePath,e,n,s)}function Si(t,e){return Ym(t.writeTree,Ee(t.treePath,e))}function Jm(t,e,n,s,i,r){return Qm(t.writeTree,t.treePath,e,n,s,i,r)}function $o(t,e,n){return Km(t.writeTree,t.treePath,e,n)}function lh(t,e){return ah(Ee(t.treePath,e),t.writeTree)}function ah(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,xs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ns(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Dn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,xs(s,e.snapshotNode,i.oldSnap));else throw $n("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ch=new ev;class Vo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ut(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $o(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hn(this.viewCache_),r=Jm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){return{filter:t}}function nv(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sv(t,e,n,s,i){const r=new Zm;let o,l;if(n.type===tt.OVERWRITE){const c=n;c.source.fromUser?o=Jr(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=Ti(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===tt.MERGE){const c=n;c.source.fromUser?o=rv(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===tt.ACK_USER_WRITE){const c=n;c.revert?o=av(t,e,c.path,s,i,r):o=ov(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===tt.LISTEN_COMPLETE)o=lv(t,e,n.path,s,r);else throw $n("Unknown operation type: "+n.type);const a=r.getChanges();return iv(e,o,a),{viewCache:o,changes:a}}function iv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(eh(wi(e)))}}function uh(t,e,n,s,i,r){const o=e.eventCache;if(Si(s,n)!=null)return e;{let l,a;if(j(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hn(e),u=c instanceof F?c:F.EMPTY_NODE,h=Uo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ii(s,hn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(n);if(c===".priority"){I(Ht(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=wa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ae(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=wa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=$o(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return hs(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Ti(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=q(n);if(!a.isCompleteForPath(n)&&Ht(n)>1)return e;const m=ae(n),O=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),O):c=u.updateChild(a.getNode(),_,O,m,ch,null)}const h=sh(e,c,a.isFullyInitialized()||j(n),u.filtersNodes()),f=new Vo(i,h,r);return uh(t,h,n,i,f,l)}function Jr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Vo(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=hs(e,c,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=hs(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ae(n),_=l.getNode().getImmediateChild(h);let m;if(j(f))m=s;else{const b=u.getCompleteChild(h);b!=null?ju(f)===".priority"&&b.getChild(zu(f)).isEmpty()?m=b:m=b.updateChild(f,s):m=F.EMPTY_NODE}if(_.equals(m))a=e;else{const b=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=hs(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ia(t,e){return t.eventCache.isCompleteForChild(e)}function rv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=Ee(n,a);Ia(e,q(u))&&(l=Jr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=Ee(n,a);Ia(e,q(u))||(l=Jr(t,l,u,c,i,r,o))}),l}function Sa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;j(n)?c=s:c=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Sa(t,_,f);a=Ti(t,a,new ie(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),b=Sa(t,m,f);a=Ti(t,a,new ie(h),b,i,r,o,l)}}),a}function ov(t,e,n,s,i,r,o){if(Si(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ti(t,e,n,a.getNode().getChild(n),i,r,l,o);if(j(n)){let c=new ue(null);return a.getNode().forEachChild(Rn,(u,h)=>{c=c.set(new ie(u),h)}),Zr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ue(null);return s.foreach((u,h)=>{const f=Ee(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Zr(t,e,n,c,i,r,l,o)}}function lv(t,e,n,s,i){const r=e.serverCache,o=sh(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return uh(t,o,n,s,ch,i)}function av(t,e,n,s,i,r){let o;if(Si(s,n)!=null)return e;{const l=new Vo(s,e,i),a=e.eventCache.getNode();let c;if(j(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ii(s,hn(e));else{const h=e.serverCache.getNode();I(h instanceof F,"serverChildren would be complete if leaf node"),u=Uo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=q(n);let h=$o(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ae(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,F.EMPTY_NODE,ae(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ii(s,hn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Si(s,Z())!=null,hs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Fo(s.getIndex()),r=Nm(s);this.processor_=tv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new Ut(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ut(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=qi(h,u),this.eventGenerator_=new Mm(this.query_)}get query(){return this.query_}}function uv(t){return t.viewCache_.serverCache.getNode()}function hv(t){return wi(t.viewCache_)}function fv(t,e){const n=hn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Ta(t){return t.eventRegistrations_.length===0}function dv(t,e){t.eventRegistrations_.push(e)}function Ra(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Na(t,e,n,s){e.type===tt.MERGE&&e.source.queryId!==null&&(I(hn(t.viewCache_),"We should always have a full cache before handling merges"),I(wi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=sv(t.processor_,i,e,n,s);return nv(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,hh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function pv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(Dn(r,o))}),n.isFullyInitialized()&&s.push(eh(n.getNode())),hh(t,s,n.getNode(),e)}function hh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Lm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;class fh{constructor(){this.views=new Map}}function _v(t){I(!Ri,"__referenceConstructor has already been defined"),Ri=t}function gv(){return I(Ri,"Reference.ts has not been loaded"),Ri}function mv(t){return t.views.size===0}function jo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Na(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Na(o,e,n,s));return r}}function dh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ii(n,i?s:null),a=!1;l?a=!0:s instanceof F?(l=Uo(n,s),a=!1):(l=F.EMPTY_NODE,a=!1);const c=qi(new Ut(l,a,!1),new Ut(s,i,!1));return new cv(e,c)}return o}function vv(t,e,n,s,i,r){const o=dh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),dv(o,n),pv(o,n)}function yv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=$t(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ra(c,n,s)),Ta(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ra(a,n,s)),Ta(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!$t(t)&&r.push(new(gv())(e._repo,e._path)),{removed:r,events:o}}function ph(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wt(t,e){let n=null;for(const s of t.views.values())n=n||fv(s,e);return n}function _h(t,e){if(e._queryParams.loadsAllData())return Yi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function gh(t,e){return _h(t,e)!=null}function $t(t){return Yi(t)!=null}function Yi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni;function Ev(t){I(!Ni,"__referenceConstructor has already been defined"),Ni=t}function Cv(){return I(Ni,"Reference.ts has not been loaded"),Ni}let bv=1;class xa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Xm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mh(t,e,n,s,i){return Hm(t.pendingWriteTree_,e,n,s,i),i?$s(t,new un(nh(),e,n)):[]}function en(t,e,n=!1){const s=Um(t.pendingWriteTree_,e);if($m(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(Z(),!0):Ue(s.children,o=>{r=r.set(new ie(o),!0)}),$s(t,new bi(s.path,r,n))}else return[]}function Us(t,e,n){return $s(t,new un(Bo(),e,n))}function wv(t,e,n){const s=ue.fromObject(n);return $s(t,new Os(Bo(),e,s))}function Iv(t,e){return $s(t,new As(Bo(),e))}function Sv(t,e,n){const s=zo(t,n);if(s){const i=qo(s),r=i.path,o=i.queryId,l=ke(r,e),a=new As(Ho(o),l);return Ko(t,r,a)}else return[]}function vh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||gh(o,e))){const a=yv(o,e,n,s);mv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>$t(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=xv(f);for(let m=0;m<_.length;++m){const b=_[m],O=b.query,P=bh(t,b);t.listenProvider_.startListening(ds(O),ks(t,O),P.hashFn,P.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ds(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Qi(f));t.listenProvider_.stopListening(ds(f),_)}))}Pv(t,c)}return l}function yh(t,e,n,s){const i=zo(t,s);if(i!=null){const r=qo(i),o=r.path,l=r.queryId,a=ke(o,e),c=new un(Ho(l),a,n);return Ko(t,o,c)}else return[]}function Tv(t,e,n,s){const i=zo(t,s);if(i){const r=qo(i),o=r.path,l=r.queryId,a=ke(o,e),c=ue.fromObject(n),u=new Os(Ho(l),a,c);return Ko(t,o,u)}else return[]}function Rv(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=ke(f,i);r=r||Wt(_,m),o=o||$t(_)});let l=t.syncPointTree_.get(i);l?(o=o||$t(l),r=r||Wt(l,Z())):(l=new fh,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const b=Wt(m,Z());b&&(r=r.updateImmediateChild(_,b))}));const c=gh(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Qi(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Av();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Ki(t.pendingWriteTree_,i);let h=vv(l,e,n,u,r,a);if(!c&&!o&&!s){const f=_h(l,e);h=h.concat(Ov(t,e,f))}return h}function Go(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ke(o,e),c=Wt(l,a);if(c)return c});return oh(i,e,r,n,!0)}function Nv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ke(c,n);s=s||Wt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Wt(i,Z()):(i=new fh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ut(s,!0,!1):null,l=Ki(t.pendingWriteTree_,e._path),a=dh(i,e,l,r?o.getNode():F.EMPTY_NODE,r);return hv(a)}function $s(t,e){return Eh(e,t.syncPointTree_,null,Ki(t.pendingWriteTree_,Z()))}function Eh(t,e,n,s){if(j(t.path))return Ch(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=Wt(i,Z()));let r=[];const o=q(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=lh(s,o);r=r.concat(Eh(l,a,c,u))}return i&&(r=r.concat(jo(i,t,s,n))),r}}function Ch(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=Wt(i,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=lh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ch(u,l,a,c)))}),i&&(r=r.concat(jo(i,t,s,n))),r}function bh(t,e){const n=e.query,s=ks(t,n);return{hashFn:()=>(uv(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Sv(t,n._path,s):Iv(t,n._path);{const r=Rg(i,n);return vh(t,n,null,r)}}}}function ks(t,e){const n=Qi(e);return t.queryToTagMap.get(n)}function Qi(t){return t._path.toString()+"$"+t._queryIdentifier}function zo(t,e){return t.tagToQueryMap.get(e)}function qo(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function Ko(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=Ki(t.pendingWriteTree_,e);return jo(s,n,i,null)}function xv(t){return t.fold((e,n,s)=>{if(n&&$t(n))return[Yi(n)];{let i=[];return n&&(i=ph(n)),Ue(s,(r,o)=>{i=i.concat(o)}),i}})}function ds(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Cv())(t._repo,t._path):t}function Pv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Qi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Av(){return bv++}function Ov(t,e,n){const s=e._path,i=ks(t,e),r=bh(t,n),o=t.listenProvider_.startListening(ds(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)I(!$t(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!j(c)&&u&&$t(u))return[Yi(u).query];{let f=[];return u&&(f=f.concat(ph(u).map(_=>_.query))),Ue(h,(_,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ds(u),ks(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yo(n)}node(){return this.node_}}class Qo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Qo(this.syncTree_,n)}node(){return Go(this.syncTree_,this.path_)}}const kv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pa=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Dv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mv(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Dv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Mv=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Lv=function(t,e,n,s){return Xo(e,new Qo(n,t),s)},wh=function(t,e,n){return Xo(t,new Yo(e),n)};function Xo(t,e,n){const s=t.getPriority().val(),i=Pa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Pa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ie(l,Te(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ie(i))),o.forEachChild(pe,(l,a)=>{const c=Xo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Zo(t,e){let n=e instanceof ie?e:new ie(e),s=t,i=q(n);for(;i!==null;){const r=On(s.node.children,i)||{children:{},childCount:0};s=new Jo(i,s,r),n=ae(n),i=q(n)}return s}function zn(t){return t.node.value}function Ih(t,e){t.node.value=e,eo(t)}function Sh(t){return t.node.childCount>0}function Fv(t){return zn(t)===void 0&&!Sh(t)}function Xi(t,e){Ue(t.node.children,(n,s)=>{e(new Jo(n,t,s))})}function Th(t,e,n,s){n&&!s&&e(t),Xi(t,i=>{Th(i,e,!0,s)}),n&&s&&e(t)}function Wv(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Vs(t){return new ie(t.parent===null?t.name:Vs(t.parent)+"/"+t.name)}function eo(t){t.parent!==null&&Bv(t.parent,t.name,t)}function Bv(t,e,n){const s=Fv(n),i=wt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,eo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,eo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=/[\[\].#$\/\u0000-\u001F\u007F]/,Uv=/[\[\].#$\u0000-\u001F\u007F]/,vr=10*1024*1024,Rh=function(t){return typeof t=="string"&&t.length!==0&&!Hv.test(t)},Nh=function(t){return typeof t=="string"&&t.length!==0&&!Uv.test(t)},$v=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Nh(t)},Vv=function(t,e,n,s){s&&e===void 0||el(xo(t,"value"),e,n)},el=function(t,e,n){const s=n instanceof ie?new om(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kt(s)+" with contents = "+e.toString());if(wu(e))throw new Error(t+"contains "+e.toString()+" "+Kt(s));if(typeof e=="string"&&e.length>vr/3&&Gi(e)>vr)throw new Error(t+"contains a string greater than "+vr+" utf8 bytes "+Kt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Rh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lm(s,o),el(t,l,s),am(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kt(s)+" in addition to actual children.")}},xh=function(t,e,n,s){if(!(s&&n===void 0)&&!Nh(n))throw new Error(xo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xh(t,e,n,s)},Ph=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Gv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$v(n))throw new Error(xo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ah(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!qu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function dt(t,e,n){Ah(t,n),qv(t,s=>et(s,e)||et(e,s))}function qv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Kv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Kv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();rn&&Ne("event: "+n.toString()),Gn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="repo_interrupt",Qv=25;class Xv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ci(),this.transactionQueueTree_=new Jo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jv(t,e,n){if(t.stats_=ko(t.repoInfo_),t.forceRestClient_||Ag())t.server_=new Ei(t.repoInfo_,(s,i,r,o)=>{Aa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Oa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new yt(t.repoInfo_,e,(s,i,r,o)=>{Aa(t,s,i,r,o)},s=>{Oa(t,s)},s=>{ey(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Lg(t.repoInfo_,()=>new Dm(t.stats_,t.server_)),t.infoData_=new xm,t.infoSyncTree_=new xa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Us(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),nl(t,"connected",!1),t.serverSyncTree_=new xa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);dt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Zv(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tl(t){return kv({timestamp:Zv(t)})}function Aa(t,e,n,s,i){t.dataUpdateCount++;const r=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=_i(n,c=>Te(c));o=Tv(t.serverSyncTree_,r,a,i)}else{const a=Te(n);o=yh(t.serverSyncTree_,r,a,i)}else if(s){const a=_i(n,c=>Te(c));o=wv(t.serverSyncTree_,r,a)}else{const a=Te(n);o=Us(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Zi(t,r)),dt(t.eventQueue_,l,o)}function Oa(t,e){nl(t,"connected",e),e===!1&&sy(t)}function ey(t,e){Ue(e,(n,s)=>{nl(t,n,s)})}function nl(t,e,n){const s=new ie("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(s,i);const r=Us(t.infoSyncTree_,s,i);dt(t.eventQueue_,s,r)}function Oh(t){return t.nextWriteId_++}function ty(t,e,n){const s=Nv(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Te(i).withIndex(e._queryParams.getIndex());Rv(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Us(t.serverSyncTree_,e._path,r);else{const l=ks(t.serverSyncTree_,e);o=yh(t.serverSyncTree_,e._path,r,l)}return dt(t.eventQueue_,e._path,o),vh(t.serverSyncTree_,e,n,null,!0),r},i=>(Ji(t,"get for query "+ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function ny(t,e,n,s,i){Ji(t,"set",{path:e.toString(),value:n,priority:s});const r=tl(t),o=Te(n,s),l=Go(t.serverSyncTree_,e),a=wh(o,l,r),c=Oh(t),u=mh(t.serverSyncTree_,e,a,c,!0);Ah(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Be("set at "+e+" failed: "+f);const b=en(t.serverSyncTree_,c,!m);dt(t.eventQueue_,e,b),ry(t,i,f,_)});const h=Fh(t,e);Zi(t,h),dt(t.eventQueue_,h,[])}function sy(t){Ji(t,"onDisconnectEvents");const e=tl(t),n=Ci();Yr(t.onDisconnect_,Z(),(i,r)=>{const o=Lv(i,r,t.serverSyncTree_,e);th(n,i,o)});let s=[];Yr(n,Z(),(i,r)=>{s=s.concat(Us(t.serverSyncTree_,i,r));const o=Fh(t,i);Zi(t,o)}),t.onDisconnect_=Ci(),dt(t.eventQueue_,Z(),s)}function iy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Yv)}function Ji(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function ry(t,e,n,s){e&&Gn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function kh(t,e,n){return Go(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function sl(t,e=t.transactionQueueTree_){if(e||er(t,e),zn(e)){const n=Mh(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oy(t,Vs(e),n)}else Sh(e)&&Xi(e,n=>{sl(t,n)})}function oy(t,e,n){const s=n.map(c=>c.currentWriteId),i=kh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ke(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ji(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(en(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();er(t,Zo(t.transactionQueueTree_,e)),sl(t,t.transactionQueueTree_),dt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Gn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Be("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zi(t,e)}},o)}function Zi(t,e){const n=Dh(t,e),s=Vs(n),i=Mh(t,n);return ly(t,i,s),s}function ly(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ke(n,a.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Qv)u=!0,h="maxretry",i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else{const f=kh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){el("transaction failed: Data returned ",_,a.path);let m=Te(_);typeof _=="object"&&_!=null&&wt(_,".priority")||(m=m.updatePriority(f.getPriority()));const O=a.currentWriteId,P=tl(t),W=wh(m,f,P);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=W,a.currentWriteId=Oh(t),o.splice(o.indexOf(O),1),i=i.concat(mh(t.serverSyncTree_,a.path,W,a.currentWriteId,a.applyLocally)),i=i.concat(en(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}er(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Gn(s[l]);sl(t,t.transactionQueueTree_)}function Dh(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&zn(s)===void 0;)s=Zo(s,n),e=ae(e),n=q(e);return s}function Mh(t,e){const n=[];return Lh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Lh(t,e,n){const s=zn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Xi(e,i=>{Lh(t,i,n)})}function er(t,e){const n=zn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ih(e,n.length>0?n:void 0)}Xi(e,s=>{er(t,s)})}function Fh(t,e){const n=Vs(Dh(t,e)),s=Zo(t.transactionQueueTree_,e);return Wv(s,i=>{yr(t,i)}),yr(t,s),Th(s,i=>{yr(t,i)}),n}function yr(t,e){const n=zn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(en(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ih(e,void 0):n.length=r+1,dt(t.eventQueue_,Vs(e),i);for(let o=0;o<s.length;o++)Gn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const ka=function(t,e){const n=uy(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Mu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ie(n.pathString)}},uy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ay(t.substring(u,h)));const f=cy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class fy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:ju(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=va(this._queryParams),n=Ao(e);return n==="{}"?"default":n}get _queryObject(){return va(this._queryParams)}isEqual(e){if(e=Vn(e),!(e instanceof il))return!1;const n=this._repo===e._repo,s=qu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rm(this._path)}}class It extends il{constructor(e,n){super(e,n,new Wo,!1)}get parent(){const e=zu(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ds{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),s=tn(this.ref,e);return new Ds(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ds(i,tn(this.ref,s),pe)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zn(t,e){return t=Vn(t),t._checkNotDeleted("ref"),e!==void 0?tn(t._root,e):t._root}function tn(t,e){return t=Vn(t),q(t._path)===null?jv("child","path",e,!1):xh("child","path",e,!1),new It(t._repo,Ee(t._path,e))}function Da(t){return Ph("remove",t._path),to(t,null)}function to(t,e){t=Vn(t),Ph("set",t._path),Vv("set",e,t._path,!1);const n=new ji;return ny(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ei(t){t=Vn(t);const e=new dy(()=>{}),n=new rl(e);return ty(t._repo,t,n).then(s=>new Ds(s,new It(t._repo,t._path),t._queryParams.getIndex()))}class rl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new hy("value",this,new Ds(e.snapshotNode,new It(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fy(this,e,n):null}matches(e){return e instanceof rl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}_v(It);Ev(It);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="FIREBASE_DATABASE_EMULATOR_HOST",no={};let _y=!1;function gy(t,e,n,s){t.repoInfo_=new Mu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function my(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ka(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[py]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ka(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Tn(Tn.OWNER):new kg(t.name,t.options,e);Gv("Invalid Firebase Database URL",o),j(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yy(l,t,u,new Og(t.name,n));return new Ey(h,t)}function vy(t,e){const n=no[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iy(t),delete n[t.key]}function yy(t,e,n,s){let i=no[e.name];i||(i={},no[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Xv(t,_y,n,s),i[t.toURLString()]=r,r}class Ey{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function es(t=rg(),e){const n=tg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=zp("database");s&&Cy(n,...s)}return n}function Cy(t,e,n,s={}){t=Vn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Tn(Tn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Kp(s.mockUserToken,t.app.options.projectId);r=new Tn(o)}gy(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){mg(ig),gi(new Ss("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return my(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),In(ta,na,t),In(ta,na,"esm2017")}yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};by();var wy="firebase",Iy="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(wy,Iy,"app");class Sy{areas=[];curator=[];helpers=[];tasks=[]}class Wh{id=""}class Ty extends Wh{fio="";areaId=""}class $C extends Ty{completedTaskIds=[];schoolName=""}class Ry extends Wh{month="2023-01";title=""}let Ny=t=>({databaseURL:`https://${t}-default-rtdb.europe-west1.firebasedatabase.app`});const xy=Mp({id:"main",state:()=>({dbRef:void 0,information:new Sy,isInited:!1}),actions:{async dbInit(t){console.log("store: dbInit()");const n=og().find(i=>i.name=="[DEFAULT]");return n&&lg(n),mu(Ny(t)),this.dbRef=Zn(es()),(await ei(tn(this.dbRef,"anabo"))).exists()?(this.isInited=!0,this.init(),"success"):"error"},async init(){console.log("store: init()");const t=await ei(tn(this.dbRef,"anabo"));console.log("store: snapshot",t),t.exists()?this.information=t.val():console.warn("db empty")},async saveHelpers(t){const e=await ei(tn(this.dbRef,"anabo/helpers"));if(e.exists()){let n=e.val();t.forEach(s=>n[s.id]=s),await to(Zn(es(),"anabo/helpers"),n),this.init()}},async removeHelper(t){await Da(Zn(es(),"anabo/helpers/"+t)),await this.init()},getMonthTasks(t){return this.tasks.filter(e=>e.month==t)},async saveTasks(){const t=await ei(tn(this.dbRef,"anabo/tasks"));if(t.exists()){let e=t.val();this.tasks.forEach(n=>e[n.id]=n),await to(Zn(es(),"anabo/tasks"),e),this.init()}},newTask(t){let e=new Ry;e.id=this.getNewTaskId(),e.month=t,this.tasks.push(e)},async removeTask(t){await Da(Zn(es(),"anabo/tasks/"+t)),await this.init()},getNewHelperId(){return(+this.helpers.reduce(function(t,e){return+t.id>+e.id?t:e}).id+1).toString()},getNewTaskId(){return(+this.tasks.reduce(function(t,e){return+t.id>+e.id?t:e}).id+1).toString()}},getters:{areas:t=>t.information.areas,helpers:t=>t.information.helpers,curator:t=>t.information.curator,tasks:t=>t.information.tasks}}),Bh=t=>(sd("data-v-86688ac4"),t=t(),id(),t),Py={id:"app"},Ay={class:"wrapper"},Oy=Bh(()=>Ot("h1",null,"Статистика",-1)),ky={key:0},Dy={key:1,style:{display:"flex","flex-direction":"column"}},My=Bh(()=>Ot("label",{textContent:"Пароль"},null,-1)),Ly={key:0,style:{color:"#ff3333"},textContent:"Неверный пароль"},Fy=Io({__name:"App",setup(t){const e=xy(),{isInited:n}=Lp(e);async function s(a){await e.dbInit(a)!="success"&&(r.value=!0)}let i=ys(""),r=ys(!1);function o(){if(!i.value){r.value=!0;return}i.value,window.localStorage.setItem("anabo-key",i.value),s(i.value)}function l(){let a=window.localStorage.getItem("anabo-key");console.log("found key",a),a&&s(a)}return Fc(l),(a,c)=>{const u=Il("router-link"),h=Il("router-view");return vn(),Xs("div",Py,[Ot("header",null,[Ot("div",Ay,[Oy,ut(n)?(vn(),Xs("nav",ky,[Pe(u,{to:"/"},{default:si(()=>[li("Ввод данных")]),_:1}),Pe(u,{to:"/admin"},{default:si(()=>[li("Управление")]),_:1}),Pe(u,{to:"/results"},{default:si(()=>[li("Итоги")]),_:1})])):kl("",!0)])]),ut(n)?(vn(),Yc(h,{key:0,class:"main"})):(vn(),Xs("div",Dy,[My,wd(Ot("input",{"onUpdate:modelValue":c[0]||(c[0]=f=>de(i)?i.value=f:i=f)},null,512),[[wp,ut(i)]]),Ot("button",{onClick:o},"Войти"),ut(r)?(vn(),Xs("div",Ly)):kl("",!0)]))])}}});const Wy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},By=Wy(Fy,[["__scopeId","data-v-86688ac4"]]),Hy="modulepreload",Uy=function(t){return"/anabo-publish/"+t},Ma={},Rt=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Uy(r),r in Ma)return;Ma[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Hy,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const yn=typeof window<"u";function $y(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Er(t,e){const n={};for(const s in e){const i=e[s];n[s]=rt(i)?i.map(t):t(i)}return n}const ps=()=>{},rt=Array.isArray,Vy=/\/$/,jy=t=>t.replace(Vy,"");function Cr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Ky(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Gy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function La(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zy(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ln(e.matched[s],n.matched[i])&&Hh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qy(t[n],e[n]))return!1;return!0}function qy(t,e){return rt(t)?Fa(t,e):rt(e)?Fa(e,t):t===e}function Fa(t,e){return rt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ky(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ms;(function(t){t.pop="pop",t.push="push"})(Ms||(Ms={}));var _s;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_s||(_s={}));function Yy(t){if(!t)if(yn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jy(t)}const Qy=/^[^#]+#/;function Xy(t,e){return t.replace(Qy,"#")+e}function Jy(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zy(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Jy(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wa(t,e){return(history.state?history.state.position-e:-1)+t}const so=new Map;function eE(t,e){so.set(t,e)}function tE(t){const e=so.get(t);return so.delete(t),e}let nE=()=>location.protocol+"//"+location.host;function Uh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),La(a,"")}return La(n,t)+s+i}function sE(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Uh(t,location),m=n.value,b=e.value;let O=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}O=b?f.position-b.position:0}else s(_);i.forEach(P=>{P(n.value,m,{delta:O,type:Ms.pop,direction:O?O>0?_s.forward:_s.back:_s.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(ee({},f.state,{scroll:tr()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function Ba(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?tr():null}}function iE(t){const{history:e,location:n}=window,s={value:Uh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:nE()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=ee({},e.state,Ba(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=ee({},i.value,e.state,{forward:a,scroll:tr()});r(u.current,u,!0);const h=ee({},Ba(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function rE(t){t=Yy(t);const e=iE(t),n=sE(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ee({location:"",base:t,go:s,createHref:Xy.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function oE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),rE(t)}function lE(t){return typeof t=="string"||t&&typeof t=="object"}function $h(t){return typeof t=="string"||typeof t=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vh=Symbol("");var Ha;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ha||(Ha={}));function Fn(t,e){return ee(new Error,{type:t,[Vh]:!0},e)}function pt(t,e){return t instanceof Error&&Vh in t&&(e==null||!!(t.type&e))}const Ua="[^/]+?",aE={sensitive:!1,strict:!1,start:!0,end:!0},cE=/[.+*?^${}()[\]/\\]/g;function uE(t,e){const n=ee({},aE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(cE,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:b,optional:O,regexp:P}=f;r.push({name:m,repeatable:b,optional:O});const W=P||Ua;if(W!==Ua){_+=10;try{new RegExp(`(${W})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${m}" (${W}): `+Y.message)}}let k=b?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;h||(k=O&&c.length<2?`(?:/${k})`:"/"+k),O&&(k+="?"),i+=k,_+=20,O&&(_+=-8),b&&(_+=-20),W===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:b,optional:O}=_,P=m in c?c[m]:"";if(rt(P)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const W=rt(P)?P.join("/"):P;if(!W)if(O)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=W}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function hE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function fE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=hE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if($a(s))return 1;if($a(i))return-1}return i.length-s.length}function $a(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dE={type:0,value:""},pE=/[a-zA-Z0-9_]/;function _E(t){if(!t)return[[]];if(t==="/")return[[dE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:pE.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function gE(t,e,n){const s=uE(_E(t.path),n),i=ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function mE(t,e){const n=[],s=new Map;e=Ga({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=vE(u);m.aliasOf=f&&f.record;const b=Ga(e,u),O=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const Y of k)O.push(ee({},m,{components:f?f.record.components:m.components,path:Y,aliasOf:f?f.record:m}))}let P,W;for(const k of O){const{path:Y}=k;if(h&&Y[0]!=="/"){const se=h.record.path,ve=se[se.length-1]==="/"?"":"/";k.path=h.record.path+(Y&&ve+Y)}if(P=gE(k,h,b),f?f.alias.push(P):(W=W||P,W!==P&&W.alias.push(P),_&&u.name&&!ja(P)&&o(u.name)),m.children){const se=m.children;for(let ve=0;ve<se.length;ve++)r(se[ve],P,f&&f.children[ve])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return W?()=>{o(W)}:ps}function o(u){if($h(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&fE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!jh(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ja(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},m,b;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Fn(1,{location:u});b=f.record.name,_=ee(Va(h.params,f.keys.filter(W=>!W.optional).map(W=>W.name)),u.params&&Va(u.params,f.keys.map(W=>W.name))),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(W=>W.re.test(m)),f&&(_=f.parse(m),b=f.record.name);else{if(f=h.name?s.get(h.name):n.find(W=>W.re.test(h.path)),!f)throw Fn(1,{location:u,currentLocation:h});b=f.record.name,_=ee({},h.params,u.params),m=f.stringify(_)}const O=[];let P=f;for(;P;)O.unshift(P.record),P=P.parent;return{name:b,path:m,params:_,matched:O,meta:EE(O)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Va(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function vE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:yE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function yE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ja(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function EE(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Ga(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function jh(t,e){return e.children.some(n=>n===t||jh(t,n))}const Gh=/#/g,CE=/&/g,bE=/\//g,wE=/=/g,IE=/\?/g,zh=/\+/g,SE=/%5B/g,TE=/%5D/g,qh=/%5E/g,RE=/%60/g,Kh=/%7B/g,NE=/%7C/g,Yh=/%7D/g,xE=/%20/g;function ol(t){return encodeURI(""+t).replace(NE,"|").replace(SE,"[").replace(TE,"]")}function PE(t){return ol(t).replace(Kh,"{").replace(Yh,"}").replace(qh,"^")}function io(t){return ol(t).replace(zh,"%2B").replace(xE,"+").replace(Gh,"%23").replace(CE,"%26").replace(RE,"`").replace(Kh,"{").replace(Yh,"}").replace(qh,"^")}function AE(t){return io(t).replace(wE,"%3D")}function OE(t){return ol(t).replace(Gh,"%23").replace(IE,"%3F")}function kE(t){return t==null?"":OE(t).replace(bE,"%2F")}function xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function DE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(zh," "),o=r.indexOf("="),l=xi(o<0?r:r.slice(0,o)),a=o<0?null:xi(r.slice(o+1));if(l in e){let c=e[l];rt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function za(t){let e="";for(let n in t){const s=t[n];if(n=AE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(rt(s)?s.map(r=>r&&io(r)):[s&&io(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ME(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=rt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const LE=Symbol(""),qa=Symbol(""),ll=Symbol(""),Qh=Symbol(""),ro=Symbol("");function ts(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function At(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Fn(4,{from:n,to:e})):h instanceof Error?l(h):lE(h)?l(Fn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function br(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(FE(l)){const c=(l.__vccOpts||l)[e];c&&i.push(At(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=$y(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&At(f,n,s,r,o)()}))}}return i}function FE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ka(t){const e=ht(ll),n=ht(Qh),s=Ge(()=>e.resolve(ut(t.to))),i=Ge(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ln.bind(null,u));if(f>-1)return f;const _=Ya(a[c-2]);return c>1&&Ya(u)===_&&h[h.length-1].path!==_?h.findIndex(Ln.bind(null,a[c-2])):f}),r=Ge(()=>i.value>-1&&UE(n.params,s.value.params)),o=Ge(()=>i.value>-1&&i.value===n.matched.length-1&&Hh(n.params,s.value.params));function l(a={}){return HE(a)?e[ut(t.replace)?"replace":"push"](ut(t.to)).catch(ps):Promise.resolve()}return{route:s,href:Ge(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const WE=Io({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ka,setup(t,{slots:e}){const n=Un(Ka(t)),{options:s}=ht(ll),i=Ge(()=>({[Qa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),BE=WE;function HE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!rt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ya(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qa=(t,e,n)=>t??e??n,$E=Io({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ht(ro),i=Ge(()=>t.route||s.value),r=ht(qa,0),o=Ge(()=>{let c=ut(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Ge(()=>i.value.matched[o.value]);ii(qa,Ge(()=>o.value+1)),ii(LE,l),ii(ro,i);const a=ys();return os(()=>[a.value,l.value,t.name],([c,u,h],[f,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Ln(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Xa(n.default,{Component:f,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,O=Zc(f,ee({},m,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Xa(n.default,{Component:O,route:c})||O}}});function Xa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VE=$E;function jE(t){const e=mE(t.routes,t),n=t.parseQuery||DE,s=t.stringifyQuery||za,i=t.history,r=ts(),o=ts(),l=ts(),a=jf(Nt);let c=Nt;yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Er.bind(null,y=>""+y),h=Er.bind(null,kE),f=Er.bind(null,xi);function _(y,x){let R,D;return $h(y)?(R=e.getRecordMatcher(y),D=x):D=y,e.addRoute(D,R)}function m(y){const x=e.getRecordMatcher(y);x&&e.removeRoute(x)}function b(){return e.getRoutes().map(y=>y.record)}function O(y){return!!e.getRecordMatcher(y)}function P(y,x){if(x=ee({},x||a.value),typeof y=="string"){const d=Cr(n,y,x.path),p=e.resolve({path:d.path},x),g=i.createHref(d.fullPath);return ee(d,p,{params:f(p.params),hash:xi(d.hash),redirectedFrom:void 0,href:g})}let R;if("path"in y)R=ee({},y,{path:Cr(n,y.path,x.path).path});else{const d=ee({},y.params);for(const p in d)d[p]==null&&delete d[p];R=ee({},y,{params:h(y.params)}),x.params=h(x.params)}const D=e.resolve(R,x),X=y.hash||"";D.params=u(f(D.params));const fe=Gy(s,ee({},y,{hash:PE(X),path:D.path})),$=i.createHref(fe);return ee({fullPath:fe,hash:X,query:s===za?ME(y.query):y.query||{}},D,{redirectedFrom:void 0,href:$})}function W(y){return typeof y=="string"?Cr(n,y,a.value.path):ee({},y)}function k(y,x){if(c!==y)return Fn(8,{from:x,to:y})}function Y(y){return Q(y)}function se(y){return Y(ee(W(y),{replace:!0}))}function ve(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:R}=x;let D=typeof R=="function"?R(y):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=W(D):{path:D},D.params={}),ee({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function Q(y,x){const R=c=P(y),D=a.value,X=y.state,fe=y.force,$=y.replace===!0,d=ve(R);if(d)return Q(ee(W(d),{state:typeof d=="object"?ee({},X,d.state):X,force:fe,replace:$}),x||R);const p=R;p.redirectedFrom=x;let g;return!fe&&zy(s,D,R)&&(g=Fn(16,{to:p,from:D}),Vt(D,D,!0,!1)),(g?Promise.resolve(g):Re(p,D)).catch(v=>pt(v)?pt(v,2)?v:Ke(v):re(v,p,D)).then(v=>{if(v){if(pt(v,2))return Q(ee({replace:$},W(v.to),{state:typeof v.to=="object"?ee({},X,v.to.state):X,force:fe}),x||p)}else v=Me(p,D,!0,$,X);return be(p,D,v),v})}function G(y,x){const R=k(y,x);return R?Promise.reject(R):Promise.resolve()}function Re(y,x){let R;const[D,X,fe]=GE(y,x);R=br(D.reverse(),"beforeRouteLeave",y,x);for(const d of D)d.leaveGuards.forEach(p=>{R.push(At(p,y,x))});const $=G.bind(null,y,x);return R.push($),mn(R).then(()=>{R=[];for(const d of r.list())R.push(At(d,y,x));return R.push($),mn(R)}).then(()=>{R=br(X,"beforeRouteUpdate",y,x);for(const d of X)d.updateGuards.forEach(p=>{R.push(At(p,y,x))});return R.push($),mn(R)}).then(()=>{R=[];for(const d of y.matched)if(d.beforeEnter&&!x.matched.includes(d))if(rt(d.beforeEnter))for(const p of d.beforeEnter)R.push(At(p,y,x));else R.push(At(d.beforeEnter,y,x));return R.push($),mn(R)}).then(()=>(y.matched.forEach(d=>d.enterCallbacks={}),R=br(fe,"beforeRouteEnter",y,x),R.push($),mn(R))).then(()=>{R=[];for(const d of o.list())R.push(At(d,y,x));return R.push($),mn(R)}).catch(d=>pt(d,8)?d:Promise.reject(d))}function be(y,x,R){for(const D of l.list())D(y,x,R)}function Me(y,x,R,D,X){const fe=k(y,x);if(fe)return fe;const $=x===Nt,d=yn?history.state:{};R&&(D||$?i.replace(y.fullPath,ee({scroll:$&&d&&d.scroll},X)):i.push(y.fullPath,X)),a.value=y,Vt(y,x,R,$),Ke()}let qe;function St(){qe||(qe=i.listen((y,x,R)=>{if(!js.listening)return;const D=P(y),X=ve(D);if(X){Q(ee(X,{replace:!0}),D).catch(ps);return}c=D;const fe=a.value;yn&&eE(Wa(fe.fullPath,R.delta),tr()),Re(D,fe).catch($=>pt($,12)?$:pt($,2)?(Q($.to,D).then(d=>{pt(d,20)&&!R.delta&&R.type===Ms.pop&&i.go(-1,!1)}).catch(ps),Promise.reject()):(R.delta&&i.go(-R.delta,!1),re($,D,fe))).then($=>{$=$||Me(D,fe,!1),$&&(R.delta&&!pt($,8)?i.go(-R.delta,!1):R.type===Ms.pop&&pt($,20)&&i.go(-1,!1)),be(D,fe,$)}).catch(ps)}))}let $e=ts(),we=ts(),ge;function re(y,x,R){Ke(y);const D=we.list();return D.length?D.forEach(X=>X(y,x,R)):console.error(y),Promise.reject(y)}function te(){return ge&&a.value!==Nt?Promise.resolve():new Promise((y,x)=>{$e.add([y,x])})}function Ke(y){return ge||(ge=!y,St(),$e.list().forEach(([x,R])=>y?R(y):x()),$e.reset()),y}function Vt(y,x,R,D){const{scrollBehavior:X}=t;if(!yn||!X)return Promise.resolve();const fe=!R&&tE(Wa(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return bo().then(()=>X(y,x,fe)).then($=>$&&Zy($)).catch($=>re($,y,x))}const Ye=y=>i.go(y);let Le;const dn=new Set,js={currentRoute:a,listening:!0,addRoute:_,removeRoute:m,hasRoute:O,getRoutes:b,resolve:P,options:t,push:Y,replace:se,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:we.add,isReady:te,install(y){const x=this;y.component("RouterLink",BE),y.component("RouterView",VE),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(a)}),yn&&!Le&&a.value===Nt&&(Le=!0,Y(i.location).catch(X=>{}));const R={};for(const X in Nt)R[X]=Ge(()=>a.value[X]);y.provide(ll,x),y.provide(Qh,Un(R)),y.provide(ro,a);const D=y.unmount;dn.add(y),y.unmount=function(){dn.delete(y),dn.size<1&&(c=Nt,qe&&qe(),qe=null,a.value=Nt,Le=!1,ge=!1),D()}}};return js}function mn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function GE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Ln(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Ln(c,a))||i.push(a))}return[n,s,i]}const zE=jE({history:oE("/anabo-publish/"),routes:[{path:"/",name:"home",component:()=>Rt(()=>import("./HomeView-f4af0786.js"),["assets/HomeView-f4af0786.js","assets/AreaItem.vue_vue_type_style_index_0_lang-4a234fca.js","assets/AreaItem-94fe7447.css","assets/index-9772a4f5.js"])},{path:"/area/:id/:month",name:"area",component:()=>Rt(()=>import("./AreaView-f793f31f.js"),["assets/AreaView-f793f31f.js","assets/index-9772a4f5.js","assets/AreaView-ccea7687.css"]),props:!0},{path:"/monthStats/:month",name:"monthStats",component:()=>Rt(()=>import("./MonthView-0f735d07.js"),["assets/MonthView-0f735d07.js","assets/MonthView.vue_vue_type_script_setup_true_lang-8884c9fc.js","assets/AreaCard.vue_vue_type_script_setup_true_lang-d1bcb2a1.js","assets/index-9772a4f5.js"]),props:!0},{path:"/admin",name:"admin",component:()=>Rt(()=>import("./AdminView-39569c54.js"),["assets/AdminView-39569c54.js","assets/AdminView-83a0aafa.css"])},{path:"/editTasks",name:"editTasks",component:()=>Rt(()=>import("./EditTasks-4cf0dc3c.js"),["assets/EditTasks-4cf0dc3c.js","assets/index-9772a4f5.js"])},{path:"/addHelper",name:"addHelper",component:()=>Rt(()=>import("./AddHelper-aa058468.js"),["assets/AddHelper-aa058468.js","assets/AreaItem.vue_vue_type_style_index_0_lang-4a234fca.js","assets/AreaItem-94fe7447.css"])},{path:"/editHelpers",name:"editHelpers",component:()=>Rt(()=>import("./EditHelpers-fcfecf75.js"),["assets/EditHelpers-fcfecf75.js","assets/AreaCard.vue_vue_type_script_setup_true_lang-d1bcb2a1.js"])},{path:"/results",name:"results",component:()=>Rt(()=>import("./ResultsView-4cd60297.js"),["assets/ResultsView-4cd60297.js","assets/MonthView.vue_vue_type_script_setup_true_lang-8884c9fc.js","assets/AreaCard.vue_vue_type_script_setup_true_lang-d1bcb2a1.js","assets/index-9772a4f5.js"])}]});function oo(t){return oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oo(t)}function qE(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function nr(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function KE(t){nr(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||oo(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var Xh={};function Jh(){return Xh}function YE(t){Xh=t}function Ja(t,e){var n,s,i,r,o,l,a,c;nr(1,arguments);var u=Jh(),h=qE((n=(s=(i=(r=e?.weekStartsOn)!==null&&r!==void 0?r:e==null||(o=e.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&i!==void 0?i:u.weekStartsOn)!==null&&s!==void 0?s:(a=u.locale)===null||a===void 0||(c=a.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&n!==void 0?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=KE(t),_=f.getUTCDay(),m=(_<h?7:0)+_-h;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function wr(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,s=t.formats[n]||t.formats[t.defaultWidth];return s}}function ns(t){return function(e,n){var s=n!=null&&n.context?String(n.context):"standalone",i;if(s==="formatting"&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):r;i=t.formattingValues[o]||t.formattingValues[r]}else{var l=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[l]}var c=t.argumentCallback?t.argumentCallback(e):e;return i[c]}}function ss(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.width,i=s&&t.matchPatterns[s]||t.matchPatterns[t.defaultMatchWidth],r=e.match(i);if(!r)return null;var o=r[0],l=s&&t.parsePatterns[s]||t.parsePatterns[t.defaultParseWidth],a=Array.isArray(l)?XE(l,function(h){return h.test(o)}):QE(l,function(h){return h.test(o)}),c;c=t.valueCallback?t.valueCallback(a):a,c=n.valueCallback?n.valueCallback(c):c;var u=e.slice(o.length);return{value:c,rest:u}}}function QE(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function XE(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function JE(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.match(t.matchPattern);if(!s)return null;var i=s[0],r=e.match(t.parsePattern);if(!r)return null;var o=t.valueCallback?t.valueCallback(r[0]):r[0];o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(i.length);return{value:o,rest:l}}}function ZE(t){nr(1,arguments);var e={},n=Jh();for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(t[i]===void 0?delete e[i]:e[i]=t[i]);YE(e)}function Za(t,e,n){nr(2,arguments);var s=Ja(t,n),i=Ja(e,n);return s.getTime()===i.getTime()}function is(t,e){if(t.one!==void 0&&e===1)return t.one;var n=e%10,s=e%100;return n===1&&s!==11?t.singularNominative.replace("{{count}}",String(e)):n>=2&&n<=4&&(s<10||s>20)?t.singularGenitive.replace("{{count}}",String(e)):t.pluralGenitive.replace("{{count}}",String(e))}function Ae(t){return function(e,n){return n!=null&&n.addSuffix?n.comparison&&n.comparison>0?t.future?is(t.future,e):"через "+is(t.regular,e):t.past?is(t.past,e):is(t.regular,e)+" назад":is(t.regular,e)}}var eC={lessThanXSeconds:Ae({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:Ae({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(e,n){return n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:Ae({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:Ae({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:Ae({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:Ae({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:Ae({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:Ae({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:Ae({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:Ae({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:Ae({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:Ae({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:Ae({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:Ae({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:Ae({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},tC=function(e,n,s){return eC[e](n,s)};const nC=tC;var sC={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},iC={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},rC={any:"{{date}}, {{time}}"},oC={date:wr({formats:sC,defaultWidth:"full"}),time:wr({formats:iC,defaultWidth:"full"}),dateTime:wr({formats:rC,defaultWidth:"any"})};const lC=oC;var al=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function aC(t){var e=al[t];switch(t){case 0:return"'в прошлое "+e+" в' p";case 1:case 2:case 4:return"'в прошлый "+e+" в' p";case 3:case 5:case 6:return"'в прошлую "+e+" в' p"}}function ec(t){var e=al[t];return t===2?"'во "+e+" в' p":"'в "+e+" в' p"}function cC(t){var e=al[t];switch(t){case 0:return"'в следующее "+e+" в' p";case 1:case 2:case 4:return"'в следующий "+e+" в' p";case 3:case 5:case 6:return"'в следующую "+e+" в' p"}}var uC={lastWeek:function(e,n,s){var i=e.getUTCDay();return Za(e,n,s)?ec(i):aC(i)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function(e,n,s){var i=e.getUTCDay();return Za(e,n,s)?ec(i):cC(i)},other:"P"},hC=function(e,n,s,i){var r=uC[e];return typeof r=="function"?r(n,s,i):r};const fC=hC;var dC={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},pC={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},_C={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},gC={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},mC={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},vC={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},yC={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},EC=function(e,n){var s=Number(e),i=n?.unit,r;return i==="date"?r="-е":i==="week"||i==="minute"||i==="second"?r="-я":r="-й",s+r},CC={ordinalNumber:EC,era:ns({values:dC,defaultWidth:"wide"}),quarter:ns({values:pC,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:ns({values:_C,defaultWidth:"wide",formattingValues:gC,defaultFormattingWidth:"wide"}),day:ns({values:mC,defaultWidth:"wide"}),dayPeriod:ns({values:vC,defaultWidth:"any",formattingValues:yC,defaultFormattingWidth:"wide"})};const bC=CC;var wC=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,IC=/\d+/i,SC={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},TC={any:[/^д/i,/^н/i]},RC={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},NC={any:[/1/i,/2/i,/3/i,/4/i]},xC={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},PC={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},AC={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},OC={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},kC={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},DC={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},MC={ordinalNumber:JE({matchPattern:wC,parsePattern:IC,valueCallback:function(e){return parseInt(e,10)}}),era:ss({matchPatterns:SC,defaultMatchWidth:"wide",parsePatterns:TC,defaultParseWidth:"any"}),quarter:ss({matchPatterns:RC,defaultMatchWidth:"wide",parsePatterns:NC,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ss({matchPatterns:xC,defaultMatchWidth:"wide",parsePatterns:PC,defaultParseWidth:"any"}),day:ss({matchPatterns:AC,defaultMatchWidth:"wide",parsePatterns:OC,defaultParseWidth:"any"}),dayPeriod:ss({matchPatterns:kC,defaultMatchWidth:"wide",parsePatterns:DC,defaultParseWidth:"any"})};const LC=MC;var FC={code:"ru",formatDistance:nC,formatLong:lC,formatRelative:fC,localize:bC,match:LC,options:{weekStartsOn:1,firstWeekContainsDate:1}};const WC=FC;ZE({locale:WC});const cl=Rp(By);cl.use(Pp());cl.use(zE);cl.mount("#app");export{ao as A,nr as B,KE as C,qE as D,oo as E,gt as F,Ja as G,$C as H,Jh as I,wr as J,ns as K,JE as L,ss as M,Wy as _,Xs as a,Ot as b,Ge as c,Io as d,ut as e,HC as f,Yc as g,UC as h,de as i,Fc as j,kl as k,Il as l,Pe as m,li as n,vn as o,Un as p,co as q,ys as r,Lp as s,BC as t,xy as u,wp as v,wd as w,es as x,to as y,Zn as z};

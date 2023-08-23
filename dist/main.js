(()=>{"use strict";var e={958:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(81),o=r.n(n),i=r(645),s=r.n(i)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),s.push([e.id,'html[data-theme=light] .weather_card{background-color:#fff;background-image:radial-gradient(at 0% 0%, rgba(37, 118, 111, 0.32) 0, transparent 52%),radial-gradient(at 52% 20%, rgba(233, 30, 179, 0.116) 0, transparent 52%)}html[data-theme=light] .weather_card .weather_item{background:rgba(17,17,17,.1)}html[data-theme=light] .temp_hour .hour{background:rgba(37,52,85,.151);border:1px solid rgba(22,38,68,.281)}html[data-theme=dark] .weather_card{color:#cfcfcf;background-color:#10131d;background-image:radial-gradient(at 0% 0%, rgba(37, 118, 111, 0.288) 0, transparent 52%),radial-gradient(at 52% 20%, rgba(233, 30, 179, 0.116) 0, transparent 52%)}html[data-theme=dark] .weather_card .weather_item{background:rgba(207,207,207,.1)}html[data-theme=dark] .menu{background:rgba(16,19,29,.5568627451)}html[data-theme=dark] .temp_hour .hour{background:rgba(209,209,209,.151);border:1px solid rgba(209,209,209,.281)}*{box-sizing:border-box}body{font-family:"Inter",sans-serif}.weather_card{position:relative;margin:0px;width:500px;min-height:400px;z-index:1}.weather_card_wrapper{margin:0px;padding:30px 50px;display:grid;grid-template-rows:5fr 5fr;width:100%;height:100%;z-index:1}.current_weather_infos{display:grid;grid-template-rows:2fr 7fr 2fr}.current_weather_infos .condition_date{display:flex;gap:10px;align-items:flex-end}.current_weather_infos .condition_date p{font-size:small;font-weight:bold;background:rgba(255,255,255,.199);padding:5px 10px;border-radius:15px}.current_weather_infos .temp_hour{display:flex;justify-content:space-between;align-items:center}.current_weather_infos .temp_hour .temp{font-size:6.5em;font-weight:600;text-shadow:0px 3px 5px rgba(0,0,0,.432)}.current_weather_infos .temp_hour .hour{font-size:2em;font-weight:bold;margin-bottom:10px;text-align:center;padding:10px;border-radius:10px;backdrop-filter:blur(1px)}.future_weather_infos{width:100%;overflow:hidden}.future_weather_infos .pagination{margin-bottom:10px}.future_weather_infos .pagination .pagination_link{color:#fff;font-weight:bold;margin-right:20px}.future_weather_infos .weather_items_container{width:100%;overflow-x:auto;padding:10px 0;display:flex;gap:10px}.future_weather_infos .weather_items_container .weather_item{flex-shrink:0;font-size:small;width:80px;min-height:115px;background:rgba(255,255,255,.23);padding:10px;border-radius:10px;text-align:center;backdrop-filter:blur(2px)}.future_weather_infos .weather_items_container .weather_item .temperature{font-weight:bold}.future_weather_infos .weather_items_container .weather_item img{width:40px;margin:10px auto}.menu{display:block;position:absolute;top:0;left:30%;width:70%;height:100%;background:rgba(216,216,216,.369);padding:20px;backdrop-filter:blur(20px)}.menu .menu_option{border-radius:5px;padding:10px;margin:5px 0;display:grid;grid-template-columns:30px 1fr;align-items:center;cursor:pointer;transition:all .3s ease-in}.menu .menu_option:hover{background:rgba(0,0,0,.2)}.menu .menu_option .option_icon svg{width:15px}.dark_toggle_container{display:flex;justify-content:space-between;align-items:center}.dark_toggle_container .switcher{position:relative;cursor:pointer;display:block;min-width:34px;outline:0;width:34px;z-index:1}.dark_toggle_container .switcher:has(#dark_toggle:checked) #knob{background-color:#ffb400;transform:translate3d(18px, 0, 0)}.dark_toggle_container .switcher #knob{background-color:#fff;border-radius:50%;box-shadow:0 1px 3px 0 rgba(0,0,0,.4);display:block;height:16px;position:relative;transition:transform linear 80ms,background-color linear 80ms;width:16px}.dark_toggle_container .switcher #bar{background:rgba(108,108,108,.27);border-radius:8px;height:12px;left:3px;position:absolute;top:2px;transition:background-color linear 80ms;width:28px;z-index:0}.dark_toggle_container .switcher #dark_toggle{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:rgba(0,0,0,.27);border-radius:20px}::-webkit-scrollbar-thumb{background:rgba(54,54,54,.6392156863);border-radius:20px}::-webkit-scrollbar-thumb:hover{background:#555}',""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],u=n.base?c[0]+n.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,n);n.byIndex=a,t.splice(a,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=r(i[s]);t[a].references--}for(var c=n(e,o),u=0;u<i.length;u++){var l=r(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),i=r(569),s=r.n(i),a=r(565),c=r.n(a),u=r(216),l=r.n(u),d=r(589),f=r.n(d),p=r(958),h={};function m(e,t){return function(){return e.apply(t,arguments)}}h.styleTagTransform=f(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const{toString:g}=Object.prototype,{getPrototypeOf:b}=Object,y=(w=Object.create(null),e=>{const t=g.call(e);return w[t]||(w[t]=t.slice(8,-1).toLowerCase())});var w;const x=e=>(e=e.toLowerCase(),t=>y(t)===e),E=e=>t=>typeof t===e,{isArray:S}=Array,_=E("undefined"),O=x("ArrayBuffer"),v=E("string"),R=E("function"),A=E("number"),T=e=>null!==e&&"object"==typeof e,C=e=>{if("object"!==y(e))return!1;const t=b(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},k=x("Date"),j=x("File"),N=x("Blob"),P=x("FileList"),L=x("URLSearchParams");function U(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),S(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(n=0;n<i;n++)s=o[n],t.call(null,e[s],s,e)}}function F(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,D=e=>!_(e)&&e!==B,q=(I="undefined"!=typeof Uint8Array&&b(Uint8Array),e=>I&&e instanceof I);var I;const M=x("HTMLFormElement"),z=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),H=x("RegExp"),J=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};U(r,((r,o)=>{!1!==t(r,o,e)&&(n[o]=r)})),Object.defineProperties(e,n)},$="abcdefghijklmnopqrstuvwxyz",W="0123456789",K={DIGIT:W,ALPHA:$,ALPHA_DIGIT:$+$.toUpperCase()+W},V=x("AsyncFunction"),G={isArray:S,isArrayBuffer:O,isBuffer:function(e){return null!==e&&!_(e)&&null!==e.constructor&&!_(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||R(e.append)&&("formdata"===(t=y(e))||"object"===t&&R(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&O(e.buffer),t},isString:v,isNumber:A,isBoolean:e=>!0===e||!1===e,isObject:T,isPlainObject:C,isUndefined:_,isDate:k,isFile:j,isBlob:N,isRegExp:H,isFunction:R,isStream:e=>T(e)&&R(e.pipe),isURLSearchParams:L,isTypedArray:q,isFileList:P,forEach:U,merge:function e(){const{caseless:t}=D(this)&&this||{},r={},n=(n,o)=>{const i=t&&F(r,o)||o;C(r[i])&&C(n)?r[i]=e(r[i],n):C(n)?r[i]=e({},n):S(n)?r[i]=n.slice():r[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&U(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(U(t,((t,n)=>{r&&R(t)?e[n]=m(t,r):e[n]=t}),{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],n&&!n(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==r&&b(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:y,kindOfTest:x,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(S(e))return e;let t=e.length;if(!A(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:M,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:J,freezeMethods:e=>{J(e,((t,r)=>{if(R(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];R(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return S(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:F,global:B,isContextDefined:D,ALPHABET:K,generateString:(e=16,t=K.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&R(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(T(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=S(e)?[]:{};return U(e,((e,t)=>{const i=r(e,n+1);!_(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:V,isThenable:e=>e&&(T(e)||R(e))&&R(e.then)&&R(e.catch)};function Z(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}G.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const X=Z.prototype,Q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Q[e]={value:e}})),Object.defineProperties(Z,Q),Object.defineProperty(X,"isAxiosError",{value:!0}),Z.from=(e,t,r,n,o,i)=>{const s=Object.create(X);return G.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Z.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Y=Z;function ee(e){return G.isPlainObject(e)||G.isArray(e)}function te(e){return G.endsWith(e,"[]")?e.slice(0,-2):e}function re(e,t,r){return e?e.concat(t).map((function(e,t){return e=te(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const ne=G.toFlatObject(G,{},null,(function(e){return/^is[A-Z]/.test(e)})),oe=function(e,t,r){if(!G.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=G.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!G.isUndefined(t[e])}))).metaTokens,o=r.visitor||u,i=r.dots,s=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&G.isSpecCompliantForm(t);if(!G.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(G.isDate(e))return e.toISOString();if(!a&&G.isBlob(e))throw new Y("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(e)||G.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,r,o){let a=e;if(e&&!o&&"object"==typeof e)if(G.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(G.isArray(e)&&function(e){return G.isArray(e)&&!e.some(ee)}(e)||(G.isFileList(e)||G.endsWith(r,"[]"))&&(a=G.toArray(e)))return r=te(r),a.forEach((function(e,n){!G.isUndefined(e)&&null!==e&&t.append(!0===s?re([r],n,i):null===s?r:r+"[]",c(e))})),!1;return!!ee(e)||(t.append(re(o,r,i),c(e)),!1)}const l=[],d=Object.assign(ne,{defaultVisitor:u,convertValue:c,isVisitable:ee});if(!G.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!G.isUndefined(r)){if(-1!==l.indexOf(r))throw Error("Circular reference detected in "+n.join("."));l.push(r),G.forEach(r,(function(r,i){!0===(!(G.isUndefined(r)||null===r)&&o.call(t,r,G.isString(i)?i.trim():i,n,d))&&e(r,n?n.concat(i):[i])})),l.pop()}}(e),t};function ie(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function se(e,t){this._pairs=[],e&&oe(e,this,t)}const ae=se.prototype;ae.append=function(e,t){this._pairs.push([e,t])},ae.toString=function(e){const t=e?function(t){return e.call(this,t,ie)}:ie;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const ce=se;function ue(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function le(e,t,r){if(!t)return e;const n=r&&r.encode||ue,o=r&&r.serialize;let i;if(i=o?o(t,r):G.isURLSearchParams(t)?t.toString():new ce(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const de=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ce,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},he=function(e){function t(e,r,n,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&G.isArray(n)?n.length:i,a?(G.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s):(n[i]&&G.isObject(n[i])||(n[i]=[]),t(e,r,n[i],o)&&G.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!s)}if(G.isFormData(e)&&G.isFunction(e.entries)){const r={};return G.forEachEntry(e,((e,n)=>{t(function(e){return G.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null},me={"Content-Type":void 0},ge={transitional:fe,adapter:["xhr","http"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=G.isObject(e);if(o&&G.isHTMLForm(e)&&(e=new FormData(e)),G.isFormData(e))return n&&n?JSON.stringify(he(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return oe(e,new pe.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return pe.isNode&&G.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=G.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return oe(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t,r){if(G.isString(e))try{return(0,JSON.parse)(e),G.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ge.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&G.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw Y.from(e,Y.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pe.classes.FormData,Blob:pe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};G.forEach(["delete","get","head"],(function(e){ge.headers[e]={}})),G.forEach(["post","put","patch"],(function(e){ge.headers[e]=G.merge(me)}));const be=ge,ye=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),we=Symbol("internals");function xe(e){return e&&String(e).trim().toLowerCase()}function Ee(e){return!1===e||null==e?e:G.isArray(e)?e.map(Ee):String(e)}function Se(e,t,r,n,o){return G.isFunction(n)?n.call(this,t,r):(o&&(t=r),G.isString(t)?G.isString(n)?-1!==t.indexOf(n):G.isRegExp(n)?n.test(t):void 0:void 0)}class _e{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=xe(t);if(!o)throw new Error("header name must be a non-empty string");const i=G.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=Ee(e))}const i=(e,t)=>G.forEach(e,((e,r)=>o(e,r,t)));return G.isPlainObject(e)||e instanceof this.constructor?i(e,t):G.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&ye[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t):null!=e&&o(t,e,r),this}get(e,t){if(e=xe(e)){const r=G.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(G.isFunction(t))return t.call(this,e,r);if(G.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xe(e)){const r=G.findKey(this,e);return!(!r||void 0===this[r]||t&&!Se(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=xe(e)){const o=G.findKey(r,e);!o||t&&!Se(0,r[o],o,t)||(delete r[o],n=!0)}}return G.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!Se(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return G.forEach(this,((n,o)=>{const i=G.findKey(r,o);if(i)return t[i]=Ee(n),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();s!==o&&delete t[o],t[s]=Ee(n),r[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return G.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&G.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[we]=this[we]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=xe(e);t[n]||(function(e,t){const r=G.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return G.isArray(e)?e.forEach(n):n(e),this}}_e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),G.freezeMethods(_e.prototype),G.freezeMethods(_e);const Oe=_e;function ve(e,t){const r=this||be,n=t||r,o=Oe.from(n.headers);let i=n.data;return G.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Re(e){return!(!e||!e.__CANCEL__)}function Ae(e,t,r){Y.call(this,null==e?"canceled":e,Y.ERR_CANCELED,t,r),this.name="CanceledError"}G.inherits(Ae,Y,{__CANCEL__:!0});const Te=Ae,Ce=pe.isStandardBrowserEnv?{write:function(e,t,r,n,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),G.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),G.isString(n)&&s.push("path="+n),G.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ke(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const je=pe.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function n(r){let n=r;return e&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return r=n(window.location.href),function(e){const t=G.isString(e)?n(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return!0};function Ne(e,t){let r=0;const n=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=n[s];o||(o=c),r[i]=a,n[i]=c;let l=s,d=0;for(;l!==i;)d+=r[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const f=u&&c-u;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,c=n(a);r=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Pe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){let n=e.data;const o=Oe.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}G.isFormData(n)&&(pe.isStandardBrowserEnv||pe.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+r))}const u=ke(e.baseURL,e.url);function l(){if(!c)return;const n=Oe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Y("Request failed with status code "+r.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}((function(e){t(e),a()}),(function(e){r(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:n,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),le(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(r(new Y("Request aborted",Y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new Y("Network Error",Y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const n=e.transitional||fe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new Y(t,n.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,c)),c=null},pe.isStandardBrowserEnv){const t=(e.withCredentials||je(u))&&e.xsrfCookieName&&Ce.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===n&&o.setContentType(null),"setRequestHeader"in c&&G.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),G.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Ne(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ne(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(r(!t||t.type?new Te(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);d&&-1===pe.protocols.indexOf(d)?r(new Y("Unsupported protocol "+d+":",Y.ERR_BAD_REQUEST,e)):c.send(n||null)}))}};G.forEach(Pe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function Le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Te(null,e)}function Ue(e){return Le(e),e.headers=Oe.from(e.headers),e.data=ve.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=G.isArray(e)?e:[e];const{length:t}=e;let r,n;for(let o=0;o<t&&(r=e[o],!(n=G.isString(r)?Pe[r.toLowerCase()]:r));o++);if(!n){if(!1===n)throw new Y(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(G.hasOwnProp(Pe,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`)}if(!G.isFunction(n))throw new TypeError("adapter is not a function");return n})(e.adapter||be.adapter)(e).then((function(t){return Le(e),t.data=ve.call(e,e.transformResponse,t),t.headers=Oe.from(t.headers),t}),(function(t){return Re(t)||(Le(e),t&&t.response&&(t.response.data=ve.call(e,e.transformResponse,t.response),t.response.headers=Oe.from(t.response.headers))),Promise.reject(t)}))}const Fe=e=>e instanceof Oe?e.toJSON():e;function Be(e,t){t=t||{};const r={};function n(e,t,r){return G.isPlainObject(e)&&G.isPlainObject(t)?G.merge.call({caseless:r},e,t):G.isPlainObject(t)?G.merge({},t):G.isArray(t)?t.slice():t}function o(e,t,r){return G.isUndefined(t)?G.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function i(e,t){if(!G.isUndefined(t))return n(void 0,t)}function s(e,t){return G.isUndefined(t)?G.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Fe(e),Fe(t),!0)};return G.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=c[n]||o,s=i(e[n],t[n],n);G.isUndefined(s)&&i!==a||(r[n]=s)})),r}const De={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{De[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const qe={};De.transitional=function(e,t,r){function n(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new Y(n(o," has been removed"+(t?" in "+t:"")),Y.ERR_DEPRECATED);return t&&!qe[o]&&(qe[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};const Ie={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],s=t[i];if(s){const t=e[i],r=void 0===t||s(t,i,e);if(!0!==r)throw new Y("option "+i+" must be "+r,Y.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Y("Unknown option "+i,Y.ERR_BAD_OPTION)}},validators:De},Me=Ie.validators;class ze{constructor(e){this.defaults=e,this.interceptors={request:new de,response:new de}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Be(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;let i;void 0!==r&&Ie.assertOptions(r,{silentJSONParsing:Me.transitional(Me.boolean),forcedJSONParsing:Me.transitional(Me.boolean),clarifyTimeoutError:Me.transitional(Me.boolean)},!1),null!=n&&(G.isFunction(n)?t.paramsSerializer={serialize:n}:Ie.assertOptions(n,{encode:Me.function,serialize:Me.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&G.merge(o.common,o[t.method]),i&&G.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Oe.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,d=0;if(!a){const e=[Ue.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);d<l;)u=u.then(e[d++],e[d++]);return u}l=s.length;let f=t;for(d=0;d<l;){const e=s[d++],t=s[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{u=Ue.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,l=c.length;d<l;)u=u.then(c[d++],c[d++]);return u}getUri(e){return le(ke((e=Be(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}G.forEach(["delete","get","head","options"],(function(e){ze.prototype[e]=function(t,r){return this.request(Be(r||{},{method:e,url:t,data:(r||{}).data}))}})),G.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Be(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ze.prototype[e]=t(),ze.prototype[e+"Form"]=t(!0)}));const He=ze;class Je{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new Te(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Je((function(t){e=t})),cancel:e}}}const $e=Je,We={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(We).forEach((([e,t])=>{We[t]=e}));const Ke=We,Ve=function e(t){const r=new He(t),n=m(He.prototype.request,r);return G.extend(n,He.prototype,r,{allOwnKeys:!0}),G.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Be(t,r))},n}(be);Ve.Axios=He,Ve.CanceledError=Te,Ve.CancelToken=$e,Ve.isCancel=Re,Ve.VERSION="1.4.0",Ve.toFormData=oe,Ve.AxiosError=Y,Ve.Cancel=Ve.CanceledError,Ve.all=function(e){return Promise.all(e)},Ve.spread=function(e){return function(t){return e.apply(null,t)}},Ve.isAxiosError=function(e){return G.isObject(e)&&!0===e.isAxiosError},Ve.mergeConfig=Be,Ve.AxiosHeaders=Oe,Ve.formToJSON=e=>he(G.isHTMLForm(e)?new FormData(e):e),Ve.HttpStatusCode=Ke,Ve.default=Ve;const Ge=Ve;function Ze(e){const t=new Date(e),r=new Intl.DateTimeFormat("en-US",{weekday:"short",month:"short",day:"numeric"}).format(t),n=t.getHours(),o=t.getMinutes();return[r,`${n.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`]}const Xe=document.querySelector(".weather_items_container"),Qe=Xe.querySelector(".weather_item_template");for(let e=0;e<6;e++)Xe.append(Qe.content.cloneNode(!0));const Ye=document.getElementById("current_weather");Ge.get("http://api.weatherapi.com/v1/forecast.json?key=f9de0c04c1bc48c2a6485330230408&q=London&days=1&aqi=no&alerts=no").then((e=>{const t=e.data.location,r=e.data.current,n=r.condition,o=e.data.forecast.forecastday[0].hour;Ye.querySelector(".location").textContent=`${t.name}, ${t.country}`,Ye.querySelector(".localdate").textContent=Ze(t.localtime)[0],Ye.querySelector(".temp_hour .hour").textContent=Ze(t.localtime)[1],Ye.querySelector(".temp_hour .temp").textContent=`${parseInt(r.temp_c)}°`,Ye.querySelector(".condition").textContent=n.text,Ye.querySelector(".cloud_icon img").src=n.icon,Ye.querySelector(".humidity .value").textContent=`${r.humidity}%`,Ye.querySelector(".wind .value").textContent=`${r.wind_mph}mph`,Xe.innerHTML="";for(const e of o){const t=Qe.content.cloneNode(!0);t.querySelector(".time").innerHTML=e.time.slice(-5),t.querySelector(".cloud_icon img").src=e.condition.icon,t.querySelector(".temperature").innerHTML=`${e.temp_c}°C`,Xe.appendChild(t)}})).catch((e=>{console.error(e)}))})()})();
function Yd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function qd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gd={exports:{}},fa={},Jd={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),mm=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),ym=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),xm=Symbol.for("react.context"),wm=Symbol.for("react.forward_ref"),km=Symbol.for("react.suspense"),Sm=Symbol.for("react.memo"),Em=Symbol.for("react.lazy"),oc=Symbol.iterator;function Pm(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var Zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,nf={};function zr(e,n,t){this.props=e,this.context=n,this.refs=nf,this.updater=t||Zd}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tf(){}tf.prototype=zr.prototype;function Fs(e,n,t){this.props=e,this.context=n,this.refs=nf,this.updater=t||Zd}var Bs=Fs.prototype=new tf;Bs.constructor=Fs;ef(Bs,zr.prototype);Bs.isPureReactComponent=!0;var ic=Array.isArray,rf=Object.prototype.hasOwnProperty,Hs={current:null},of={key:!0,ref:!0,__self:!0,__source:!0};function af(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)rf.call(n,r)&&!of.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Io,type:e,key:i,ref:a,props:o,_owner:Hs.current}}function Om(e,n){return{$$typeof:Io,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Io}function Cm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ac=/\/+/g;function cl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Cm(""+e.key):n.toString(36)}function wi(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Io:case mm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+cl(a,0):r,ic(o)?(t="",e!=null&&(t=e.replace(ac,"$&/")+"/"),wi(o,n,t,"",function(u){return u})):o!=null&&(Vs(o)&&(o=Om(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ac,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",ic(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+cl(i,s);a+=wi(i,n,t,l,o)}else if(l=Pm(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+cl(i,s++),a+=wi(i,n,t,l,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function ei(e,n,t){if(e==null)return e;var r=[],o=0;return wi(e,r,"","",function(i){return n.call(t,i,o++)}),r}function _m(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},ki={transition:null},Tm={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ki,ReactCurrentOwner:Hs};Y.Children={map:ei,forEach:function(e,n,t){ei(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ei(e,function(){n++}),n},toArray:function(e){return ei(e,function(n){return n})||[]},only:function(e){if(!Vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=zr;Y.Fragment=vm;Y.Profiler=ym;Y.PureComponent=Fs;Y.StrictMode=gm;Y.Suspense=km;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tm;Y.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ef({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Hs.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)rf.call(n,l)&&!of.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Io,type:e.type,key:o,ref:i,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:xm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bm,_context:e},e.Consumer=e};Y.createElement=af;Y.createFactory=function(e){var n=af.bind(null,e);return n.type=e,n};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:wm,render:e}};Y.isValidElement=Vs;Y.lazy=function(e){return{$$typeof:Em,_payload:{_status:-1,_result:e},_init:_m}};Y.memo=function(e,n){return{$$typeof:Sm,type:e,compare:n===void 0?null:n}};Y.startTransition=function(e){var n=ki.transition;ki.transition={};try{e()}finally{ki.transition=n}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,n){return Xe.current.useCallback(e,n)};Y.useContext=function(e){return Xe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};Y.useEffect=function(e,n){return Xe.current.useEffect(e,n)};Y.useId=function(){return Xe.current.useId()};Y.useImperativeHandle=function(e,n,t){return Xe.current.useImperativeHandle(e,n,t)};Y.useInsertionEffect=function(e,n){return Xe.current.useInsertionEffect(e,n)};Y.useLayoutEffect=function(e,n){return Xe.current.useLayoutEffect(e,n)};Y.useMemo=function(e,n){return Xe.current.useMemo(e,n)};Y.useReducer=function(e,n,t){return Xe.current.useReducer(e,n,t)};Y.useRef=function(e){return Xe.current.useRef(e)};Y.useState=function(e){return Xe.current.useState(e)};Y.useSyncExternalStore=function(e,n,t){return Xe.current.useSyncExternalStore(e,n,t)};Y.useTransition=function(){return Xe.current.useTransition()};Y.version="18.2.0";Jd.exports=Y;var P=Jd.exports;const K=qd(P),Rm=Yd({__proto__:null,default:K},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm=P,Dm=Symbol.for("react.element"),Mm=Symbol.for("react.fragment"),Lm=Object.prototype.hasOwnProperty,zm=Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jm={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Lm.call(n,r)&&!jm.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Dm,type:e,key:i,ref:a,props:o,_owner:zm.current}}fa.Fragment=Mm;fa.jsx=lf;fa.jsxs=lf;Gd.exports=fa;var N=Gd.exports,Bl={},sf={exports:{}},cn={},uf={exports:{}},cf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,H){var W=R.length;R.push(H);e:for(;0<W;){var ie=W-1>>>1,ae=R[ie];if(0<o(ae,H))R[ie]=H,R[W]=ae,W=ie;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var H=R[0],W=R.pop();if(W!==H){R[0]=W;e:for(var ie=0,ae=R.length,kn=ae>>>1;ie<kn;){var tn=2*(ie+1)-1,He=R[tn],Ve=tn+1,pn=R[Ve];if(0>o(He,W))Ve<ae&&0>o(pn,He)?(R[ie]=pn,R[Ve]=W,ie=Ve):(R[ie]=He,R[tn]=W,ie=tn);else if(Ve<ae&&0>o(pn,W))R[ie]=pn,R[Ve]=W,ie=Ve;else break e}}return H}function o(R,H){var W=R.sortIndex-H.sortIndex;return W!==0?W:R.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,d=null,c=3,y=!1,x=!1,h=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var H=t(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=R)r(u),H.sortIndex=H.expirationTime,n(l,H);else break;H=t(u)}}function E(R){if(h=!1,g(R),!x)if(t(l)!==null)x=!0,et(_);else{var H=t(u);H!==null&&nt(E,H.startTime-R)}}function _(R,H){x=!1,h&&(h=!1,m(O),O=-1),y=!0;var W=c;try{for(g(H),d=t(l);d!==null&&(!(d.expirationTime>H)||R&&!oe());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,c=d.priorityLevel;var ae=ie(d.expirationTime<=H);H=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===t(l)&&r(l),g(H)}else r(l);d=t(l)}if(d!==null)var kn=!0;else{var tn=t(u);tn!==null&&nt(E,tn.startTime-H),kn=!1}return kn}finally{d=null,c=W,y=!1}}var M=!1,b=null,O=-1,I=5,L=-1;function oe(){return!(e.unstable_now()-L<I)}function se(){if(b!==null){var R=e.unstable_now();L=R;var H=!0;try{H=b(!0,R)}finally{H?Oe():(M=!1,b=null)}}else M=!1}var Oe;if(typeof p=="function")Oe=function(){p(se)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,wn=Me.port2;Me.port1.onmessage=se,Oe=function(){wn.postMessage(null)}}else Oe=function(){S(se,0)};function et(R){b=R,M||(M=!0,Oe())}function nt(R,H){O=S(function(){R(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,et(_))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(R){switch(c){case 1:case 2:case 3:var H=3;break;default:H=c}var W=c;c=H;try{return R()}finally{c=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=c;c=R;try{return H()}finally{c=W}},e.unstable_scheduleCallback=function(R,H,W){var ie=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ie+W:ie):W=ie,R){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=W+ae,R={id:f++,callback:H,priorityLevel:R,startTime:W,expirationTime:ae,sortIndex:-1},W>ie?(R.sortIndex=W,n(u,R),t(l)===null&&R===t(u)&&(h?(m(O),O=-1):h=!0,nt(E,W-ie))):(R.sortIndex=ae,n(l,R),x||y||(x=!0,et(_))),R},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(R){var H=c;return function(){var W=c;c=H;try{return R.apply(this,arguments)}finally{c=W}}}})(cf);uf.exports=cf;var $m=uf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=P,un=$m;function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ff=new Set,vo={};function Kt(e,n){Pr(e,n),Pr(e+"Capture",n)}function Pr(e,n){for(vo[e]=n,e=0;e<n.length;e++)ff.add(n[e])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,Am=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},sc={};function Im(e){return Hl.call(sc,e)?!0:Hl.call(lc,e)?!1:Am.test(e)?sc[e]=!0:(lc[e]=!0,!1)}function Um(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fm(e,n,t,r){if(n===null||typeof n>"u"||Um(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ye(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];$e[n]=new Ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ws=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ws,Qs);$e[n]=new Ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ws,Qs);$e[n]=new Ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ws,Qs);$e[n]=new Ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ks(e,n,t,r){var o=$e.hasOwnProperty(n)?$e[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Fm(n,t,o,r)&&(t=null),r||o===null?Im(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Jn=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),lr=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Xs=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),qs=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),mf=Symbol.for("react.offscreen"),uc=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=uc&&e[uc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,dl;function eo(e){if(dl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);dl=n&&n[1]||""}return`
`+dl+e}var fl=!1;function pl(e,n){if(!e||fl)return"";fl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{fl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?eo(e):""}function Bm(e){switch(e.tag){case 5:return eo(e.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return e=pl(e.type,!1),e;case 11:return e=pl(e.type.render,!1),e;case 1:return e=pl(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case lr:return"Portal";case Vl:return"Profiler";case Xs:return"StrictMode";case Wl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hf:return(e.displayName||"Context")+".Consumer";case pf:return(e._context.displayName||"Context")+".Provider";case Ys:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qs:return n=e.displayName||null,n!==null?n:Kl(e.type)||"Memo";case lt:n=e._payload,e=e._init;try{return Kl(e(n))}catch{}}return null}function Hm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(n);case 8:return n===Xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Vm(e){var n=vf(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ti(e){e._valueTracker||(e._valueTracker=Vm(e))}function gf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=vf(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,n){var t=n.checked;return ye({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function cc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=kt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function yf(e,n){n=n.checked,n!=null&&Ks(e,"checked",n,!1)}function Yl(e,n){yf(e,n);var t=kt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ql(e,n.type,t):n.hasOwnProperty("defaultValue")&&ql(e,n.type,kt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function dc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ql(e,n,t){(n!=="number"||Li(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var no=Array.isArray;function br(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+kt(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Gl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return ye({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(no(t)){if(1<t.length)throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:kt(t)}}function bf(e,n){var t=kt(n.value),r=kt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function pc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?xf(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ri,wf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ri=ri||document.createElement("div"),ri.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function go(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wm=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(e){Wm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ao[n]=ao[e]})});function kf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ao.hasOwnProperty(e)&&ao[e]?(""+n).trim():n+"px"}function Sf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=kf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Qm=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(e,n){if(n){if(Qm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function es(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ns=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ts=null,xr=null,wr=null;function hc(e){if(e=Bo(e)){if(typeof ts!="function")throw Error(T(280));var n=e.stateNode;n&&(n=ga(n),ts(e.stateNode,e.type,n))}}function Ef(e){xr?wr?wr.push(e):wr=[e]:xr=e}function Pf(){if(xr){var e=xr,n=wr;if(wr=xr=null,hc(e),n)for(e=0;e<n.length;e++)hc(n[e])}}function Of(e,n){return e(n)}function Cf(){}var hl=!1;function _f(e,n,t){if(hl)return e(n,t);hl=!0;try{return Of(e,n,t)}finally{hl=!1,(xr!==null||wr!==null)&&(Cf(),Pf())}}function yo(e,n){var t=e.stateNode;if(t===null)return null;var r=ga(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var rs=!1;if(Xn)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{rs=!1}function Km(e,n,t,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var lo=!1,zi=null,ji=!1,os=null,Xm={onError:function(e){lo=!0,zi=e}};function Ym(e,n,t,r,o,i,a,s,l){lo=!1,zi=null,Km.apply(Xm,arguments)}function qm(e,n,t,r,o,i,a,s,l){if(Ym.apply(this,arguments),lo){if(lo){var u=zi;lo=!1,zi=null}else throw Error(T(198));ji||(ji=!0,os=u)}}function Xt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Tf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function mc(e){if(Xt(e)!==e)throw Error(T(188))}function Gm(e){var n=e.alternate;if(!n){if(n=Xt(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return mc(o),e;if(i===r)return mc(o),n;i=i.sibling}throw Error(T(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===t){a=!0,t=o,r=i;break}if(s===r){a=!0,r=o,t=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===t){a=!0,t=i,r=o;break}if(s===r){a=!0,r=i,t=o;break}s=s.sibling}if(!a)throw Error(T(189))}}if(t.alternate!==r)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function Rf(e){return e=Gm(e),e!==null?Nf(e):null}function Nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Nf(e);if(n!==null)return n;e=e.sibling}return null}var Df=un.unstable_scheduleCallback,vc=un.unstable_cancelCallback,Jm=un.unstable_shouldYield,Zm=un.unstable_requestPaint,Se=un.unstable_now,e0=un.unstable_getCurrentPriorityLevel,Js=un.unstable_ImmediatePriority,Mf=un.unstable_UserBlockingPriority,$i=un.unstable_NormalPriority,n0=un.unstable_LowPriority,Lf=un.unstable_IdlePriority,pa=null,$n=null;function t0(e){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(pa,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:i0,r0=Math.log,o0=Math.LN2;function i0(e){return e>>>=0,e===0?32:31-(r0(e)/o0|0)|0}var oi=64,ii=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~o;s!==0?r=to(s):(i&=a,i!==0&&(r=to(i)))}else a=t&~o,a!==0?r=to(a):i!==0&&(r=to(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Rn(n),o=1<<t,r|=e[t],n&=~o;return r}function a0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Rn(i),s=1<<a,l=o[a];l===-1?(!(s&t)||s&r)&&(o[a]=a0(s,n)):l<=n&&(e.expiredLanes|=s),i&=~s}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zf(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function ml(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Uo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Rn(n),e[n]=t}function s0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Rn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Zs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Rn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var te=0;function jf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $f,eu,Af,If,Uf,as=!1,ai=[],ht=null,mt=null,vt=null,bo=new Map,xo=new Map,ut=[],u0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,n){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function Wr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Bo(n),n!==null&&eu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function c0(e,n,t,r,o){switch(n){case"focusin":return ht=Wr(ht,e,n,t,r,o),!0;case"dragenter":return mt=Wr(mt,e,n,t,r,o),!0;case"mouseover":return vt=Wr(vt,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return bo.set(i,Wr(bo.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,xo.set(i,Wr(xo.get(i)||null,e,n,t,r,o)),!0}return!1}function Ff(e){var n=zt(e.target);if(n!==null){var t=Xt(n);if(t!==null){if(n=t.tag,n===13){if(n=Tf(t),n!==null){e.blockedOn=n,Uf(e.priority,function(){Af(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ls(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ns=r,t.target.dispatchEvent(r),ns=null}else return n=Bo(t),n!==null&&eu(n),e.blockedOn=t,!1;n.shift()}return!0}function yc(e,n,t){Si(e)&&t.delete(n)}function d0(){as=!1,ht!==null&&Si(ht)&&(ht=null),mt!==null&&Si(mt)&&(mt=null),vt!==null&&Si(vt)&&(vt=null),bo.forEach(yc),xo.forEach(yc)}function Qr(e,n){e.blockedOn===n&&(e.blockedOn=null,as||(as=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,d0)))}function wo(e){function n(o){return Qr(o,e)}if(0<ai.length){Qr(ai[0],e);for(var t=1;t<ai.length;t++){var r=ai[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Qr(ht,e),mt!==null&&Qr(mt,e),vt!==null&&Qr(vt,e),bo.forEach(n),xo.forEach(n),t=0;t<ut.length;t++)r=ut[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(t=ut[0],t.blockedOn===null);)Ff(t),t.blockedOn===null&&ut.shift()}var kr=Jn.ReactCurrentBatchConfig,Ii=!0;function f0(e,n,t,r){var o=te,i=kr.transition;kr.transition=null;try{te=1,nu(e,n,t,r)}finally{te=o,kr.transition=i}}function p0(e,n,t,r){var o=te,i=kr.transition;kr.transition=null;try{te=4,nu(e,n,t,r)}finally{te=o,kr.transition=i}}function nu(e,n,t,r){if(Ii){var o=ls(e,n,t,r);if(o===null)Pl(e,n,r,Ui,t),gc(e,r);else if(c0(o,e,n,t,r))r.stopPropagation();else if(gc(e,r),n&4&&-1<u0.indexOf(e)){for(;o!==null;){var i=Bo(o);if(i!==null&&$f(i),i=ls(e,n,t,r),i===null&&Pl(e,n,r,Ui,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Pl(e,n,r,null,t)}}var Ui=null;function ls(e,n,t,r){if(Ui=null,e=Gs(r),e=zt(e),e!==null)if(n=Xt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Tf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ui=e,null}function Bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e0()){case Js:return 1;case Mf:return 4;case $i:case n0:return 16;case Lf:return 536870912;default:return 16}default:return 16}}var dt=null,tu=null,Ei=null;function Hf(){if(Ei)return Ei;var e,n=tu,t=n.length,r,o="value"in dt?dt.value:dt.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return Ei=o.slice(e,1<r?1-r:void 0)}function Pi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function bc(){return!1}function dn(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?li:bc,this.isPropagationStopped=bc,this}return ye(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),n}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=dn(jr),Fo=ye({},jr,{view:0,detail:0}),h0=dn(Fo),vl,gl,Kr,ha=ye({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(vl=e.screenX-Kr.screenX,gl=e.screenY-Kr.screenY):gl=vl=0,Kr=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),xc=dn(ha),m0=ye({},ha,{dataTransfer:0}),v0=dn(m0),g0=ye({},Fo,{relatedTarget:0}),yl=dn(g0),y0=ye({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=dn(y0),x0=ye({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=dn(x0),k0=ye({},jr,{data:0}),wc=dn(k0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=P0[e])?!!n[e]:!1}function ou(){return O0}var C0=ye({},Fo,{key:function(e){if(e.key){var n=S0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_0=dn(C0),T0=ye({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=dn(T0),R0=ye({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),N0=dn(R0),D0=ye({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=dn(D0),L0=ye({},ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=dn(L0),j0=[9,13,27,32],iu=Xn&&"CompositionEvent"in window,so=null;Xn&&"documentMode"in document&&(so=document.documentMode);var $0=Xn&&"TextEvent"in window&&!so,Vf=Xn&&(!iu||so&&8<so&&11>=so),Sc=String.fromCharCode(32),Ec=!1;function Wf(e,n){switch(e){case"keyup":return j0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function A0(e,n){switch(e){case"compositionend":return Qf(n);case"keypress":return n.which!==32?null:(Ec=!0,Sc);case"textInput":return e=n.data,e===Sc&&Ec?null:e;default:return null}}function I0(e,n){if(ur)return e==="compositionend"||!iu&&Wf(e,n)?(e=Hf(),Ei=tu=dt=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vf&&n.locale!=="ko"?null:n.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!U0[e.type]:n==="textarea"}function Kf(e,n,t,r){Ef(r),n=Fi(n,"onChange"),0<n.length&&(t=new ru("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var uo=null,ko=null;function F0(e){op(e,0)}function ma(e){var n=fr(e);if(gf(n))return e}function B0(e,n){if(e==="change")return n}var Xf=!1;if(Xn){var bl;if(Xn){var xl="oninput"in document;if(!xl){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),xl=typeof Oc.oninput=="function"}bl=xl}else bl=!1;Xf=bl&&(!document.documentMode||9<document.documentMode)}function Cc(){uo&&(uo.detachEvent("onpropertychange",Yf),ko=uo=null)}function Yf(e){if(e.propertyName==="value"&&ma(ko)){var n=[];Kf(n,ko,e,Gs(e)),_f(F0,n)}}function H0(e,n,t){e==="focusin"?(Cc(),uo=n,ko=t,uo.attachEvent("onpropertychange",Yf)):e==="focusout"&&Cc()}function V0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ma(ko)}function W0(e,n){if(e==="click")return ma(n)}function Q0(e,n){if(e==="input"||e==="change")return ma(n)}function K0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dn=typeof Object.is=="function"?Object.is:K0;function So(e,n){if(Dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Hl.call(n,o)||!Dn(e[o],n[o]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,n){var t=_c(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_c(t)}}function qf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gf(){for(var e=window,n=Li();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Li(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function X0(e){var n=Gf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qf(t.ownerDocument.documentElement,t)){if(r!==null&&au(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Tc(t,i);var a=Tc(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y0=Xn&&"documentMode"in document&&11>=document.documentMode,cr=null,ss=null,co=null,us=!1;function Rc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;us||cr==null||cr!==Li(r)||(r=cr,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&So(co,r)||(co=r,r=Fi(ss,"onSelect"),0<r.length&&(n=new ru("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=cr)))}function si(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var dr={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},wl={},Jf={};Xn&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function va(e){if(wl[e])return wl[e];if(!dr[e])return e;var n=dr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Jf)return wl[e]=n[t];return e}var Zf=va("animationend"),ep=va("animationiteration"),np=va("animationstart"),tp=va("transitionend"),rp=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,n){rp.set(e,n),Kt(n,[e])}for(var kl=0;kl<Nc.length;kl++){var Sl=Nc[kl],q0=Sl.toLowerCase(),G0=Sl[0].toUpperCase()+Sl.slice(1);Pt(q0,"on"+G0)}Pt(Zf,"onAnimationEnd");Pt(ep,"onAnimationIteration");Pt(np,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(tp,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Dc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,qm(r,n,void 0,e),e.currentTarget=null}function op(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Dc(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Dc(o,s,u),i=l}}}if(ji)throw e=os,ji=!1,os=null,e}function de(e,n){var t=n[hs];t===void 0&&(t=n[hs]=new Set);var r=e+"__bubble";t.has(r)||(ip(n,e,2,!1),t.add(r))}function El(e,n,t){var r=0;n&&(r|=4),ip(t,e,r,n)}var ui="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[ui]){e[ui]=!0,ff.forEach(function(t){t!=="selectionchange"&&(J0.has(t)||El(t,!1,e),El(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ui]||(n[ui]=!0,El("selectionchange",!1,n))}}function ip(e,n,t,r){switch(Bf(n)){case 1:var o=f0;break;case 4:o=p0;break;default:o=nu}t=o.bind(null,n,t,e),o=void 0,!rs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Pl(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=zt(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}_f(function(){var u=i,f=Gs(t),d=[];e:{var c=rp.get(e);if(c!==void 0){var y=ru,x=e;switch(e){case"keypress":if(Pi(t)===0)break e;case"keydown":case"keyup":y=_0;break;case"focusin":x="focus",y=yl;break;case"focusout":x="blur",y=yl;break;case"beforeblur":case"afterblur":y=yl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=N0;break;case Zf:case ep:case np:y=b0;break;case tp:y=M0;break;case"scroll":y=h0;break;case"wheel":y=z0;break;case"copy":case"cut":case"paste":y=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=kc}var h=(n&4)!==0,S=!h&&e==="scroll",m=h?c!==null?c+"Capture":null:c;h=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=yo(p,m),E!=null&&h.push(Po(p,E,g)))),S)break;p=p.return}0<h.length&&(c=new y(c,x,null,t,f),d.push({event:c,listeners:h}))}}if(!(n&7)){e:{if(c=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",c&&t!==ns&&(x=t.relatedTarget||t.fromElement)&&(zt(x)||x[Yn]))break e;if((y||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,y?(x=t.relatedTarget||t.toElement,y=u,x=x?zt(x):null,x!==null&&(S=Xt(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(h=xc,E="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(h=kc,E="onPointerLeave",m="onPointerEnter",p="pointer"),S=y==null?c:fr(y),g=x==null?c:fr(x),c=new h(E,p+"leave",y,t,f),c.target=S,c.relatedTarget=g,E=null,zt(f)===u&&(h=new h(m,p+"enter",x,t,f),h.target=g,h.relatedTarget=S,E=h),S=E,y&&x)n:{for(h=y,m=x,p=0,g=h;g;g=nr(g))p++;for(g=0,E=m;E;E=nr(E))g++;for(;0<p-g;)h=nr(h),p--;for(;0<g-p;)m=nr(m),g--;for(;p--;){if(h===m||m!==null&&h===m.alternate)break n;h=nr(h),m=nr(m)}h=null}else h=null;y!==null&&Mc(d,c,y,h,!1),x!==null&&S!==null&&Mc(d,S,x,h,!0)}}e:{if(c=u?fr(u):window,y=c.nodeName&&c.nodeName.toLowerCase(),y==="select"||y==="input"&&c.type==="file")var _=B0;else if(Pc(c))if(Xf)_=Q0;else{_=V0;var M=H0}else(y=c.nodeName)&&y.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(_=W0);if(_&&(_=_(e,u))){Kf(d,_,t,f);break e}M&&M(e,c,u),e==="focusout"&&(M=c._wrapperState)&&M.controlled&&c.type==="number"&&ql(c,"number",c.value)}switch(M=u?fr(u):window,e){case"focusin":(Pc(M)||M.contentEditable==="true")&&(cr=M,ss=u,co=null);break;case"focusout":co=ss=cr=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,Rc(d,t,f);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":Rc(d,t,f)}var b;if(iu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ur?Wf(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(Vf&&t.locale!=="ko"&&(ur||O!=="onCompositionStart"?O==="onCompositionEnd"&&ur&&(b=Hf()):(dt=f,tu="value"in dt?dt.value:dt.textContent,ur=!0)),M=Fi(u,O),0<M.length&&(O=new wc(O,e,null,t,f),d.push({event:O,listeners:M}),b?O.data=b:(b=Qf(t),b!==null&&(O.data=b)))),(b=$0?A0(e,t):I0(e,t))&&(u=Fi(u,"onBeforeInput"),0<u.length&&(f=new wc("onBeforeInput","beforeinput",null,t,f),d.push({event:f,listeners:u}),f.data=b))}op(d,n)})}function Po(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fi(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=yo(e,t),i!=null&&r.unshift(Po(e,i,o)),i=yo(e,n),i!=null&&r.push(Po(e,i,o))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mc(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=yo(t,i),l!=null&&a.unshift(Po(t,l,s))):o||(l=yo(t,i),l!=null&&a.push(Po(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Z0=/\r\n?/g,ev=/\u0000|\uFFFD/g;function Lc(e){return(typeof e=="string"?e:""+e).replace(Z0,`
`).replace(ev,"")}function ci(e,n,t){if(n=Lc(n),Lc(e)!==n&&t)throw Error(T(425))}function Bi(){}var cs=null,ds=null;function fs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ps=typeof setTimeout=="function"?setTimeout:void 0,nv=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(rv)}:ps;function rv(e){setTimeout(function(){throw e})}function Ol(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),wo(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);wo(n)}function gt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function jc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),jn="__reactFiber$"+$r,Oo="__reactProps$"+$r,Yn="__reactContainer$"+$r,hs="__reactEvents$"+$r,ov="__reactListeners$"+$r,iv="__reactHandles$"+$r;function zt(e){var n=e[jn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Yn]||t[jn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=jc(e);e!==null;){if(t=e[jn])return t;e=jc(e)}return n}e=t,t=e.parentNode}return null}function Bo(e){return e=e[jn]||e[Yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function ga(e){return e[Oo]||null}var ms=[],pr=-1;function Ot(e){return{current:e}}function fe(e){0>pr||(e.current=ms[pr],ms[pr]=null,pr--)}function ce(e,n){pr++,ms[pr]=e.current,e.current=n}var St={},Be=Ot(St),Ze=Ot(!1),Ft=St;function Or(e,n){var t=e.type.contextTypes;if(!t)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function en(e){return e=e.childContextTypes,e!=null}function Hi(){fe(Ze),fe(Be)}function $c(e,n,t){if(Be.current!==St)throw Error(T(168));ce(Be,n),ce(Ze,t)}function ap(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(T(108,Hm(e)||"Unknown",o));return ye({},t,r)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Ft=Be.current,ce(Be,e),ce(Ze,Ze.current),!0}function Ac(e,n,t){var r=e.stateNode;if(!r)throw Error(T(169));t?(e=ap(e,n,Ft),r.__reactInternalMemoizedMergedChildContext=e,fe(Ze),fe(Be),ce(Be,e)):fe(Ze),ce(Ze,t)}var Hn=null,ya=!1,Cl=!1;function lp(e){Hn===null?Hn=[e]:Hn.push(e)}function av(e){ya=!0,lp(e)}function Ct(){if(!Cl&&Hn!==null){Cl=!0;var e=0,n=te;try{var t=Hn;for(te=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Hn=null,ya=!1}catch(o){throw Hn!==null&&(Hn=Hn.slice(e+1)),Df(Js,Ct),o}finally{te=n,Cl=!1}}return null}var hr=[],mr=0,Wi=null,Qi=0,hn=[],mn=0,Bt=null,Vn=1,Wn="";function Nt(e,n){hr[mr++]=Qi,hr[mr++]=Wi,Wi=e,Qi=n}function sp(e,n,t){hn[mn++]=Vn,hn[mn++]=Wn,hn[mn++]=Bt,Bt=e;var r=Vn;e=Wn;var o=32-Rn(r)-1;r&=~(1<<o),t+=1;var i=32-Rn(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Vn=1<<32-Rn(n)+o|t<<o|r,Wn=i+e}else Vn=1<<i|t<<o|r,Wn=e}function lu(e){e.return!==null&&(Nt(e,1),sp(e,1,0))}function su(e){for(;e===Wi;)Wi=hr[--mr],hr[mr]=null,Qi=hr[--mr],hr[mr]=null;for(;e===Bt;)Bt=hn[--mn],hn[mn]=null,Wn=hn[--mn],hn[mn]=null,Vn=hn[--mn],hn[mn]=null}var sn=null,ln=null,me=!1,_n=null;function up(e,n){var t=vn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ic(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,sn=e,ln=gt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,sn=e,ln=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bt!==null?{id:Vn,overflow:Wn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=vn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,sn=e,ln=null,!0):!1;default:return!1}}function vs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gs(e){if(me){var n=ln;if(n){var t=n;if(!Ic(e,n)){if(vs(e))throw Error(T(418));n=gt(t.nextSibling);var r=sn;n&&Ic(e,n)?up(r,t):(e.flags=e.flags&-4097|2,me=!1,sn=e)}}else{if(vs(e))throw Error(T(418));e.flags=e.flags&-4097|2,me=!1,sn=e}}}function Uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function di(e){if(e!==sn)return!1;if(!me)return Uc(e),me=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!fs(e.type,e.memoizedProps)),n&&(n=ln)){if(vs(e))throw cp(),Error(T(418));for(;n;)up(e,n),n=gt(n.nextSibling)}if(Uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ln=gt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ln=null}}else ln=sn?gt(e.stateNode.nextSibling):null;return!0}function cp(){for(var e=ln;e;)e=gt(e.nextSibling)}function Cr(){ln=sn=null,me=!1}function uu(e){_n===null?_n=[e]:_n.push(e)}var lv=Jn.ReactCurrentBatchConfig;function Pn(e,n){if(e&&e.defaultProps){n=ye({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Ki=Ot(null),Xi=null,vr=null,cu=null;function du(){cu=vr=Xi=null}function fu(e){var n=Ki.current;fe(Ki),e._currentValue=n}function ys(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Sr(e,n){Xi=e,cu=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Je=!0),e.firstContext=null)}function yn(e){var n=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:n,next:null},vr===null){if(Xi===null)throw Error(T(308));vr=e,Xi.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return n}var jt=null;function pu(e){jt===null?jt=[e]:jt.push(e)}function dp(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,pu(n)):(t.next=o.next,o.next=t),n.interleaved=t,qn(e,r)}function qn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var st=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,qn(e,t)}return o=r.interleaved,o===null?(n.next=n,pu(r)):(n.next=o.next,o.next=n),r.interleaved=n,qn(e,t)}function Oi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zs(e,t)}}function Fc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Yi(e,n,t,r){var o=e.updateQueue;st=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;a=0,f=u=l=null,s=i;do{var c=s.lane,y=s.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,h=s;switch(c=n,y=t,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(y,d,c);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,c=typeof x=="function"?x.call(y,d,c):x,c==null)break e;d=ye({},d,c);break e;case 2:st=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,c=o.effects,c===null?o.effects=[s]:c.push(s))}else y={eventTime:y,lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,l=d):f=f.next=y,a|=c;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;c=s,s=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(1);if(f===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Vt|=a,e.lanes=a,e.memoizedState=d}}function Bc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var pp=new df.Component().refs;function bs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ye({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ba={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ke(),o=xt(e),i=Qn(r,o);i.payload=n,t!=null&&(i.callback=t),n=yt(e,i,o),n!==null&&(Nn(n,e,o,r),Oi(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ke(),o=xt(e),i=Qn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=yt(e,i,o),n!==null&&(Nn(n,e,o,r),Oi(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ke(),r=xt(e),o=Qn(t,r);o.tag=2,n!=null&&(o.callback=n),n=yt(e,o,r),n!==null&&(Nn(n,e,r,t),Oi(n,e,r))}};function Hc(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!So(t,r)||!So(o,i):!0}function hp(e,n,t){var r=!1,o=St,i=n.contextType;return typeof i=="object"&&i!==null?i=yn(i):(o=en(n)?Ft:Be.current,r=n.contextTypes,i=(r=r!=null)?Or(e,o):St),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ba,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Vc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ba.enqueueReplaceState(n,n.state,null)}function xs(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=pp,hu(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=yn(i):(i=en(n)?Ft:Be.current,o.context=Or(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(bs(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ba.enqueueReplaceState(o,o.state,null),Yi(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var r=t.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var s=o.refs;s===pp&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function fi(e,n){throw e=Object.prototype.toString.call(n),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Wc(e){var n=e._init;return n(e._payload)}function mp(e){function n(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function t(m,p){if(!e)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=wt(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,g,E){return p===null||p.tag!==6?(p=Ll(g,m.mode,E),p.return=m,p):(p=o(p,g),p.return=m,p)}function l(m,p,g,E){var _=g.type;return _===sr?f(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===lt&&Wc(_)===p.type)?(E=o(p,g.props),E.ref=Xr(m,p,g),E.return=m,E):(E=Di(g.type,g.key,g.props,null,m.mode,E),E.ref=Xr(m,p,g),E.return=m,E)}function u(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=zl(g,m.mode,E),p.return=m,p):(p=o(p,g.children||[]),p.return=m,p)}function f(m,p,g,E,_){return p===null||p.tag!==7?(p=Ut(g,m.mode,E,_),p.return=m,p):(p=o(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ll(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ni:return g=Di(p.type,p.key,p.props,null,m.mode,g),g.ref=Xr(m,null,p),g.return=m,g;case lr:return p=zl(p,m.mode,g),p.return=m,p;case lt:var E=p._init;return d(m,E(p._payload),g)}if(no(p)||Hr(p))return p=Ut(p,m.mode,g,null),p.return=m,p;fi(m,p)}return null}function c(m,p,g,E){var _=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:s(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ni:return g.key===_?l(m,p,g,E):null;case lr:return g.key===_?u(m,p,g,E):null;case lt:return _=g._init,c(m,p,_(g._payload),E)}if(no(g)||Hr(g))return _!==null?null:f(m,p,g,E,null);fi(m,g)}return null}function y(m,p,g,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,s(p,m,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ni:return m=m.get(E.key===null?g:E.key)||null,l(p,m,E,_);case lr:return m=m.get(E.key===null?g:E.key)||null,u(p,m,E,_);case lt:var M=E._init;return y(m,p,g,M(E._payload),_)}if(no(E)||Hr(E))return m=m.get(g)||null,f(p,m,E,_,null);fi(p,E)}return null}function x(m,p,g,E){for(var _=null,M=null,b=p,O=p=0,I=null;b!==null&&O<g.length;O++){b.index>O?(I=b,b=null):I=b.sibling;var L=c(m,b,g[O],E);if(L===null){b===null&&(b=I);break}e&&b&&L.alternate===null&&n(m,b),p=i(L,p,O),M===null?_=L:M.sibling=L,M=L,b=I}if(O===g.length)return t(m,b),me&&Nt(m,O),_;if(b===null){for(;O<g.length;O++)b=d(m,g[O],E),b!==null&&(p=i(b,p,O),M===null?_=b:M.sibling=b,M=b);return me&&Nt(m,O),_}for(b=r(m,b);O<g.length;O++)I=y(b,m,O,g[O],E),I!==null&&(e&&I.alternate!==null&&b.delete(I.key===null?O:I.key),p=i(I,p,O),M===null?_=I:M.sibling=I,M=I);return e&&b.forEach(function(oe){return n(m,oe)}),me&&Nt(m,O),_}function h(m,p,g,E){var _=Hr(g);if(typeof _!="function")throw Error(T(150));if(g=_.call(g),g==null)throw Error(T(151));for(var M=_=null,b=p,O=p=0,I=null,L=g.next();b!==null&&!L.done;O++,L=g.next()){b.index>O?(I=b,b=null):I=b.sibling;var oe=c(m,b,L.value,E);if(oe===null){b===null&&(b=I);break}e&&b&&oe.alternate===null&&n(m,b),p=i(oe,p,O),M===null?_=oe:M.sibling=oe,M=oe,b=I}if(L.done)return t(m,b),me&&Nt(m,O),_;if(b===null){for(;!L.done;O++,L=g.next())L=d(m,L.value,E),L!==null&&(p=i(L,p,O),M===null?_=L:M.sibling=L,M=L);return me&&Nt(m,O),_}for(b=r(m,b);!L.done;O++,L=g.next())L=y(b,m,O,L.value,E),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?O:L.key),p=i(L,p,O),M===null?_=L:M.sibling=L,M=L);return e&&b.forEach(function(se){return n(m,se)}),me&&Nt(m,O),_}function S(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===sr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ni:e:{for(var _=g.key,M=p;M!==null;){if(M.key===_){if(_=g.type,_===sr){if(M.tag===7){t(m,M.sibling),p=o(M,g.props.children),p.return=m,m=p;break e}}else if(M.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===lt&&Wc(_)===M.type){t(m,M.sibling),p=o(M,g.props),p.ref=Xr(m,M,g),p.return=m,m=p;break e}t(m,M);break}else n(m,M);M=M.sibling}g.type===sr?(p=Ut(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=Di(g.type,g.key,g.props,null,m.mode,E),E.ref=Xr(m,p,g),E.return=m,m=E)}return a(m);case lr:e:{for(M=g.key;p!==null;){if(p.key===M)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(m,p.sibling),p=o(p,g.children||[]),p.return=m,m=p;break e}else{t(m,p);break}else n(m,p);p=p.sibling}p=zl(g,m.mode,E),p.return=m,m=p}return a(m);case lt:return M=g._init,S(m,p,M(g._payload),E)}if(no(g))return x(m,p,g,E);if(Hr(g))return h(m,p,g,E);fi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(m,p.sibling),p=o(p,g),p.return=m,m=p):(t(m,p),p=Ll(g,m.mode,E),p.return=m,m=p),a(m)):t(m,p)}return S}var _r=mp(!0),vp=mp(!1),Ho={},An=Ot(Ho),Co=Ot(Ho),_o=Ot(Ho);function $t(e){if(e===Ho)throw Error(T(174));return e}function mu(e,n){switch(ce(_o,n),ce(Co,e),ce(An,Ho),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Jl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Jl(n,e)}fe(An),ce(An,n)}function Tr(){fe(An),fe(Co),fe(_o)}function gp(e){$t(_o.current);var n=$t(An.current),t=Jl(n,e.type);n!==t&&(ce(Co,e),ce(An,t))}function vu(e){Co.current===e&&(fe(An),fe(Co))}var ve=Ot(0);function qi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _l=[];function gu(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var Ci=Jn.ReactCurrentDispatcher,Tl=Jn.ReactCurrentBatchConfig,Ht=0,ge=null,Ce=null,Re=null,Gi=!1,fo=!1,To=0,sv=0;function Ae(){throw Error(T(321))}function yu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Dn(e[t],n[t]))return!1;return!0}function bu(e,n,t,r,o,i){if(Ht=i,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ci.current=e===null||e.memoizedState===null?fv:pv,e=t(r,o),fo){i=0;do{if(fo=!1,To=0,25<=i)throw Error(T(301));i+=1,Re=Ce=null,n.updateQueue=null,Ci.current=hv,e=t(r,o)}while(fo)}if(Ci.current=Ji,n=Ce!==null&&Ce.next!==null,Ht=0,Re=Ce=ge=null,Gi=!1,n)throw Error(T(300));return e}function xu(){var e=To!==0;return To=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ge.memoizedState=Re=e:Re=Re.next=e,Re}function bn(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Re===null?ge.memoizedState:Re.next;if(n!==null)Re=n,Ce=e;else{if(e===null)throw Error(T(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Re===null?ge.memoizedState=Re=e:Re=Re.next=e}return Re}function Ro(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=bn(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=Ce,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var f=u.lane;if((Ht&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,ge.lanes|=f,Vt|=f}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Dn(r,n.memoizedState)||(Je=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,ge.lanes|=i,Vt|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Nl(e){var n=bn(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Dn(i,n.memoizedState)||(Je=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function yp(){}function bp(e,n){var t=ge,r=bn(),o=n(),i=!Dn(r.memoizedState,o);if(i&&(r.memoizedState=o,Je=!0),r=r.queue,wu(kp.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Re!==null&&Re.memoizedState.tag&1){if(t.flags|=2048,No(9,wp.bind(null,t,r,o,n),void 0,null),Ne===null)throw Error(T(349));Ht&30||xp(t,n,o)}return o}function xp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function wp(e,n,t,r){n.value=t,n.getSnapshot=r,Sp(n)&&Ep(e)}function kp(e,n,t){return t(function(){Sp(n)&&Ep(e)})}function Sp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Dn(e,t)}catch{return!0}}function Ep(e){var n=qn(e,1);n!==null&&Nn(n,e,1,-1)}function Qc(e){var n=zn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},n.queue=e,e=e.dispatch=dv.bind(null,ge,e),[n.memoizedState,e]}function No(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Pp(){return bn().memoizedState}function _i(e,n,t,r){var o=zn();ge.flags|=e,o.memoizedState=No(1|n,t,void 0,r===void 0?null:r)}function xa(e,n,t,r){var o=bn();r=r===void 0?null:r;var i=void 0;if(Ce!==null){var a=Ce.memoizedState;if(i=a.destroy,r!==null&&yu(r,a.deps)){o.memoizedState=No(n,t,i,r);return}}ge.flags|=e,o.memoizedState=No(1|n,t,i,r)}function Kc(e,n){return _i(8390656,8,e,n)}function wu(e,n){return xa(2048,8,e,n)}function Op(e,n){return xa(4,2,e,n)}function Cp(e,n){return xa(4,4,e,n)}function _p(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tp(e,n,t){return t=t!=null?t.concat([e]):null,xa(4,4,_p.bind(null,n,e),t)}function ku(){}function Rp(e,n){var t=bn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Np(e,n){var t=bn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Dp(e,n,t){return Ht&21?(Dn(t,n)||(t=zf(),ge.lanes|=t,Vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=t)}function uv(e,n){var t=te;te=t!==0&&4>t?t:4,e(!0);var r=Tl.transition;Tl.transition={};try{e(!1),n()}finally{te=t,Tl.transition=r}}function Mp(){return bn().memoizedState}function cv(e,n,t){var r=xt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Lp(e))zp(n,t);else if(t=dp(e,n,t,r),t!==null){var o=Ke();Nn(t,e,r,o),jp(t,n,r)}}function dv(e,n,t){var r=xt(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Lp(e))zp(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,s=i(a,t);if(o.hasEagerState=!0,o.eagerState=s,Dn(s,a)){var l=n.interleaved;l===null?(o.next=o,pu(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}t=dp(e,n,o,r),t!==null&&(o=Ke(),Nn(t,e,r,o),jp(t,n,r))}}function Lp(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function zp(e,n){fo=Gi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function jp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zs(e,t)}}var Ji={readContext:yn,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},fv={readContext:yn,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Kc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,_i(4194308,4,_p.bind(null,n,e),t)},useLayoutEffect:function(e,n){return _i(4194308,4,e,n)},useInsertionEffect:function(e,n){return _i(4,2,e,n)},useMemo:function(e,n){var t=zn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=zn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=cv.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:Qc,useDebugValue:ku,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=Qc(!1),n=e[0];return e=uv.bind(null,e[1]),zn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ge,o=zn();if(me){if(t===void 0)throw Error(T(407));t=t()}else{if(t=n(),Ne===null)throw Error(T(349));Ht&30||xp(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Kc(kp.bind(null,r,i,e),[e]),r.flags|=2048,No(9,wp.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=zn(),n=Ne.identifierPrefix;if(me){var t=Wn,r=Vn;t=(r&~(1<<32-Rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=To++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=sv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},pv={readContext:yn,useCallback:Rp,useContext:yn,useEffect:wu,useImperativeHandle:Tp,useInsertionEffect:Op,useLayoutEffect:Cp,useMemo:Np,useReducer:Rl,useRef:Pp,useState:function(){return Rl(Ro)},useDebugValue:ku,useDeferredValue:function(e){var n=bn();return Dp(n,Ce.memoizedState,e)},useTransition:function(){var e=Rl(Ro)[0],n=bn().memoizedState;return[e,n]},useMutableSource:yp,useSyncExternalStore:bp,useId:Mp,unstable_isNewReconciler:!1},hv={readContext:yn,useCallback:Rp,useContext:yn,useEffect:wu,useImperativeHandle:Tp,useInsertionEffect:Op,useLayoutEffect:Cp,useMemo:Np,useReducer:Nl,useRef:Pp,useState:function(){return Nl(Ro)},useDebugValue:ku,useDeferredValue:function(e){var n=bn();return Ce===null?n.memoizedState=e:Dp(n,Ce.memoizedState,e)},useTransition:function(){var e=Nl(Ro)[0],n=bn().memoizedState;return[e,n]},useMutableSource:yp,useSyncExternalStore:bp,useId:Mp,unstable_isNewReconciler:!1};function Rr(e,n){try{var t="",r=n;do t+=Bm(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Dl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ws(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var mv=typeof WeakMap=="function"?WeakMap:Map;function $p(e,n,t){t=Qn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ea||(ea=!0,Ns=r),ws(e,n)},t}function Ap(e,n,t){t=Qn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){ws(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ws(e,n),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Xc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new mv;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Tv.bind(null,e,n,t),n.then(e,e))}function Yc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qc(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qn(-1,1),n.tag=2,yt(t,n,1))),t.lanes|=1),e)}var vv=Jn.ReactCurrentOwner,Je=!1;function Qe(e,n,t,r){n.child=e===null?vp(n,null,t,r):_r(n,e.child,t,r)}function Gc(e,n,t,r,o){t=t.render;var i=n.ref;return Sr(n,o),r=bu(e,n,t,r,i,o),t=xu(),e!==null&&!Je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Gn(e,n,o)):(me&&t&&lu(n),n.flags|=1,Qe(e,n,r,o),n.child)}function Jc(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Ru(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ip(e,n,i,r,o)):(e=Di(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:So,t(a,r)&&e.ref===n.ref)return Gn(e,n,o)}return n.flags|=1,e=wt(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ip(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(So(i,r)&&e.ref===n.ref)if(Je=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Je=!0);else return n.lanes=e.lanes,Gn(e,n,o)}return ks(e,n,t,r,o)}function Up(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(yr,on),on|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ce(yr,on),on|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ce(yr,on),on|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ce(yr,on),on|=r;return Qe(e,n,o,t),n.child}function Fp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ks(e,n,t,r,o){var i=en(t)?Ft:Be.current;return i=Or(n,i),Sr(n,o),t=bu(e,n,t,r,i,o),r=xu(),e!==null&&!Je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Gn(e,n,o)):(me&&r&&lu(n),n.flags|=1,Qe(e,n,t,o),n.child)}function Zc(e,n,t,r,o){if(en(t)){var i=!0;Vi(n)}else i=!1;if(Sr(n,o),n.stateNode===null)Ti(e,n),hp(n,t,r),xs(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=en(t)?Ft:Be.current,u=Or(n,u));var f=t.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Vc(n,a,r,u),st=!1;var c=n.memoizedState;a.state=c,Yi(n,r,a,o),l=n.memoizedState,s!==r||c!==l||Ze.current||st?(typeof f=="function"&&(bs(n,t,f,r),l=n.memoizedState),(s=st||Hc(n,t,s,r,c,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,fp(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Pn(n.type,s),a.props=u,d=n.pendingProps,c=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=en(t)?Ft:Be.current,l=Or(n,l));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||c!==l)&&Vc(n,a,r,l),st=!1,c=n.memoizedState,a.state=c,Yi(n,r,a,o);var x=n.memoizedState;s!==d||c!==x||Ze.current||st?(typeof y=="function"&&(bs(n,t,y,r),x=n.memoizedState),(u=st||Hc(n,t,u,r,c,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(n.flags|=1024),r=!1)}return Ss(e,n,t,r,i,o)}function Ss(e,n,t,r,o,i){Fp(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&Ac(n,t,!1),Gn(e,n,i);r=n.stateNode,vv.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=_r(n,e.child,null,i),n.child=_r(n,null,s,i)):Qe(e,n,s,i),n.memoizedState=r.state,o&&Ac(n,t,!0),n.child}function Bp(e){var n=e.stateNode;n.pendingContext?$c(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$c(e,n.context,!1),mu(e,n.containerInfo)}function ed(e,n,t,r,o){return Cr(),uu(o),n.flags|=256,Qe(e,n,t,r),n.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hp(e,n,t){var r=n.pendingProps,o=ve.current,i=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ce(ve,o&1),e===null)return gs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Sa(a,r,0,null),e=Ut(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ps(t),n.memoizedState=Es,e):Su(n,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return gv(e,n,a,r,s,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=wt(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=wt(s,i):(i=Ut(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?Ps(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Es,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Su(e,n){return n=Sa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pi(e,n,t,r){return r!==null&&uu(r),_r(n,e.child,null,t),e=Su(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function gv(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=Dl(Error(T(422))),pi(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Sa({mode:"visible",children:r.children},o,0,null),i=Ut(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&_r(n,e.child,null,a),n.child.memoizedState=Ps(a),n.memoizedState=Es,i);if(!(n.mode&1))return pi(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(T(419)),r=Dl(i,r,void 0),pi(e,n,a,r)}if(s=(a&e.childLanes)!==0,Je||s){if(r=Ne,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qn(e,o),Nn(r,e,o,-1))}return Tu(),r=Dl(Error(T(421))),pi(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Rv.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,ln=gt(o.nextSibling),sn=n,me=!0,_n=null,e!==null&&(hn[mn++]=Vn,hn[mn++]=Wn,hn[mn++]=Bt,Vn=e.id,Wn=e.overflow,Bt=n),n=Su(n,r.children),n.flags|=4096,n)}function nd(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ys(e.return,n,t)}function Ml(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Vp(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(Qe(e,n,r.children,t),r=ve.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nd(e,t,n);else if(e.tag===19)nd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ve,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&qi(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Ml(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&qi(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ml(n,!0,t,null,i);break;case"together":Ml(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ti(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=wt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=wt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function yv(e,n,t){switch(n.tag){case 3:Bp(n),Cr();break;case 5:gp(n);break;case 1:en(n.type)&&Vi(n);break;case 4:mu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ce(Ki,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),n.flags|=128,null):t&n.child.childLanes?Hp(e,n,t):(ce(ve,ve.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Vp(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return n.lanes=0,Up(e,n,t)}return Gn(e,n,t)}var Wp,Os,Qp,Kp;Wp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Os=function(){};Qp=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,$t(An.current);var i=null;switch(t){case"input":o=Xl(e,o),r=Xl(e,r),i=[];break;case"select":o=ye({},o,{value:void 0}),r=ye({},r,{value:void 0}),i=[];break;case"textarea":o=Gl(e,o),r=Gl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bi)}Zl(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Kp=function(e,n,t,r){t!==r&&(n.flags|=4)};function Yr(e,n){if(!me)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function bv(e,n,t){var r=n.pendingProps;switch(su(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return en(n.type)&&Hi(),Ie(n),null;case 3:return r=n.stateNode,Tr(),fe(Ze),fe(Be),gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(di(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_n!==null&&(Ls(_n),_n=null))),Os(e,n),Ie(n),null;case 5:vu(n);var o=$t(_o.current);if(t=n.type,e!==null&&n.stateNode!=null)Qp(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(T(166));return Ie(n),null}if(e=$t(An.current),di(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[jn]=n,r[Oo]=i,e=(n.mode&1)!==0,t){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(o=0;o<ro.length;o++)de(ro[o],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":cc(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":fc(r,i),de("invalid",r)}Zl(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ci(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ci(r.textContent,s,e),o=["children",""+s]):vo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&de("scroll",r)}switch(t){case"input":ti(r),dc(r,i,!0);break;case"textarea":ti(r),pc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bi)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xf(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[jn]=n,e[Oo]=r,Wp(e,n,!1,!1),n.stateNode=e;e:{switch(a=es(t,r),t){case"dialog":de("cancel",e),de("close",e),o=r;break;case"iframe":case"object":case"embed":de("load",e),o=r;break;case"video":case"audio":for(o=0;o<ro.length;o++)de(ro[o],e);o=r;break;case"source":de("error",e),o=r;break;case"img":case"image":case"link":de("error",e),de("load",e),o=r;break;case"details":de("toggle",e),o=r;break;case"input":cc(e,r),o=Xl(e,r),de("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ye({},r,{value:void 0}),de("invalid",e);break;case"textarea":fc(e,r),o=Gl(e,r),de("invalid",e);break;default:o=r}Zl(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Sf(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wf(e,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&go(e,l):typeof l=="number"&&go(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&de("scroll",e):l!=null&&Ks(e,i,l,a))}switch(t){case"input":ti(e),dc(e,r,!1);break;case"textarea":ti(e),pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?br(e,!!r.multiple,i,!1):r.defaultValue!=null&&br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ie(n),null;case 6:if(e&&n.stateNode!=null)Kp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(T(166));if(t=$t(_o.current),$t(An.current),di(n)){if(r=n.stateNode,t=n.memoizedProps,r[jn]=n,(i=r.nodeValue!==t)&&(e=sn,e!==null))switch(e.tag){case 3:ci(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ci(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[jn]=n,n.stateNode=r}return Ie(n),null;case 13:if(fe(ve),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ln!==null&&n.mode&1&&!(n.flags&128))cp(),Cr(),n.flags|=98560,i=!1;else if(i=di(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[jn]=n}else Cr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ie(n),i=!1}else _n!==null&&(Ls(_n),_n=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ve.current&1?_e===0&&(_e=3):Tu())),n.updateQueue!==null&&(n.flags|=4),Ie(n),null);case 4:return Tr(),Os(e,n),e===null&&Eo(n.stateNode.containerInfo),Ie(n),null;case 10:return fu(n.type._context),Ie(n),null;case 17:return en(n.type)&&Hi(),Ie(n),null;case 19:if(fe(ve),i=n.memoizedState,i===null)return Ie(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Yr(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=qi(e),a!==null){for(n.flags|=128,Yr(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ce(ve,ve.current&1|2),n.child}e=e.sibling}i.tail!==null&&Se()>Nr&&(n.flags|=128,r=!0,Yr(i,!1),n.lanes=4194304)}else{if(!r)if(e=qi(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!me)return Ie(n),null}else 2*Se()-i.renderingStartTime>Nr&&t!==1073741824&&(n.flags|=128,r=!0,Yr(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Se(),n.sibling=null,t=ve.current,ce(ve,r?t&1|2:t&1),n):(Ie(n),null);case 22:case 23:return _u(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?on&1073741824&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),null;case 24:return null;case 25:return null}throw Error(T(156,n.tag))}function xv(e,n){switch(su(n),n.tag){case 1:return en(n.type)&&Hi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Tr(),fe(Ze),fe(Be),gu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vu(n),null;case 13:if(fe(ve),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(T(340));Cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return fe(ve),null;case 4:return Tr(),null;case 10:return fu(n.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var hi=!1,Fe=!1,wv=typeof WeakSet=="function"?WeakSet:Set,z=null;function gr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){we(e,n,r)}else t.current=null}function Cs(e,n,t){try{t()}catch(r){we(e,n,r)}}var td=!1;function kv(e,n){if(cs=Ii,e=Gf(),au(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,f=0,d=e,c=null;n:for(;;){for(var y;d!==t||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)c=d,d=y;for(;;){if(d===e)break n;if(c===t&&++u===o&&(s=a),c===i&&++f===r&&(l=a),(y=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=y}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(ds={focusedElem:e,selectionRange:t},Ii=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,S=x.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?h:Pn(n.type,h),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){we(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return x=td,td=!1,x}function po(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Cs(n,t,i)}o=o.next}while(o!==r)}}function wa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function _s(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Xp(e){var n=e.alternate;n!==null&&(e.alternate=null,Xp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[jn],delete n[Oo],delete n[hs],delete n[ov],delete n[iv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yp(e){return e.tag===5||e.tag===3||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Bi));else if(r!==4&&(e=e.child,e!==null))for(Ts(e,n,t),e=e.sibling;e!==null;)Ts(e,n,t),e=e.sibling}function Rs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rs(e,n,t),e=e.sibling;e!==null;)Rs(e,n,t),e=e.sibling}var ze=null,On=!1;function ot(e,n,t){for(t=t.child;t!==null;)qp(e,n,t),t=t.sibling}function qp(e,n,t){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(pa,t)}catch{}switch(t.tag){case 5:Fe||gr(t,n);case 6:var r=ze,o=On;ze=null,ot(e,n,t),ze=r,On=o,ze!==null&&(On?(e=ze,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ze.removeChild(t.stateNode));break;case 18:ze!==null&&(On?(e=ze,t=t.stateNode,e.nodeType===8?Ol(e.parentNode,t):e.nodeType===1&&Ol(e,t),wo(e)):Ol(ze,t.stateNode));break;case 4:r=ze,o=On,ze=t.stateNode.containerInfo,On=!0,ot(e,n,t),ze=r,On=o;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Cs(t,n,a),o=o.next}while(o!==r)}ot(e,n,t);break;case 1:if(!Fe&&(gr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){we(t,n,s)}ot(e,n,t);break;case 21:ot(e,n,t);break;case 22:t.mode&1?(Fe=(r=Fe)||t.memoizedState!==null,ot(e,n,t),Fe=r):ot(e,n,t);break;default:ot(e,n,t)}}function od(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new wv),n.forEach(function(r){var o=Nv.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:ze=s.stateNode,On=!1;break e;case 3:ze=s.stateNode.containerInfo,On=!0;break e;case 4:ze=s.stateNode.containerInfo,On=!0;break e}s=s.return}if(ze===null)throw Error(T(160));qp(i,a,o),ze=null,On=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){we(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gp(n,e),n=n.sibling}function Gp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(n,e),Ln(e),r&4){try{po(3,e,e.return),wa(3,e)}catch(h){we(e,e.return,h)}try{po(5,e,e.return)}catch(h){we(e,e.return,h)}}break;case 1:Sn(n,e),Ln(e),r&512&&t!==null&&gr(t,t.return);break;case 5:if(Sn(n,e),Ln(e),r&512&&t!==null&&gr(t,t.return),e.flags&32){var o=e.stateNode;try{go(o,"")}catch(h){we(e,e.return,h)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&yf(o,i),es(s,a);var u=es(s,i);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?Sf(o,d):f==="dangerouslySetInnerHTML"?wf(o,d):f==="children"?go(o,d):Ks(o,f,d,u)}switch(s){case"input":Yl(o,i);break;case"textarea":bf(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?br(o,!!i.multiple,y,!1):c!==!!i.multiple&&(i.defaultValue!=null?br(o,!!i.multiple,i.defaultValue,!0):br(o,!!i.multiple,i.multiple?[]:"",!1))}o[Oo]=i}catch(h){we(e,e.return,h)}}break;case 6:if(Sn(n,e),Ln(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(h){we(e,e.return,h)}}break;case 3:if(Sn(n,e),Ln(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(h){we(e,e.return,h)}break;case 4:Sn(n,e),Ln(e);break;case 13:Sn(n,e),Ln(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ou=Se())),r&4&&od(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||f,Sn(n,e),Fe=u):Sn(n,e),Ln(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(d=z=f;z!==null;){switch(c=z,y=c.child,c.tag){case 0:case 11:case 14:case 15:po(4,c,c.return);break;case 1:gr(c,c.return);var x=c.stateNode;if(typeof x.componentWillUnmount=="function"){r=c,t=c.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(h){we(r,t,h)}}break;case 5:gr(c,c.return);break;case 22:if(c.memoizedState!==null){ad(d);continue}}y!==null?(y.return=c,z=y):ad(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=kf("display",a))}catch(h){we(e,e.return,h)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){we(e,e.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Sn(n,e),Ln(e),r&4&&od(e);break;case 21:break;default:Sn(n,e),Ln(e)}}function Ln(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Yp(t)){var r=t;break e}t=t.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(go(o,""),r.flags&=-33);var i=rd(e);Rs(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=rd(e);Ts(e,s,a);break;default:throw Error(T(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sv(e,n,t){z=e,Jp(e)}function Jp(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||hi;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Fe;s=hi;var u=Fe;if(hi=a,(Fe=l)&&!u)for(z=o;z!==null;)a=z,l=a.child,a.tag===22&&a.memoizedState!==null?ld(o):l!==null?(l.return=a,z=l):ld(o);for(;i!==null;)z=i,Jp(i),i=i.sibling;z=o,hi=s,Fe=u}id(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):id(e)}}function id(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fe||wa(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Fe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Pn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Bc(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Bc(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Fe||n.flags&512&&_s(n)}catch(c){we(n,n.return,c)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function ad(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function ld(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wa(4,n)}catch(l){we(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(l){we(n,o,l)}}var i=n.return;try{_s(n)}catch(l){we(n,i,l)}break;case 5:var a=n.return;try{_s(n)}catch(l){we(n,a,l)}}}catch(l){we(n,n.return,l)}if(n===e){z=null;break}var s=n.sibling;if(s!==null){s.return=n.return,z=s;break}z=n.return}}var Ev=Math.ceil,Zi=Jn.ReactCurrentDispatcher,Eu=Jn.ReactCurrentOwner,gn=Jn.ReactCurrentBatchConfig,G=0,Ne=null,Pe=null,je=0,on=0,yr=Ot(0),_e=0,Do=null,Vt=0,ka=0,Pu=0,ho=null,Ge=null,Ou=0,Nr=1/0,Bn=null,ea=!1,Ns=null,bt=null,mi=!1,ft=null,na=0,mo=0,Ds=null,Ri=-1,Ni=0;function Ke(){return G&6?Se():Ri!==-1?Ri:Ri=Se()}function xt(e){return e.mode&1?G&2&&je!==0?je&-je:lv.transition!==null?(Ni===0&&(Ni=zf()),Ni):(e=te,e!==0||(e=window.event,e=e===void 0?16:Bf(e.type)),e):1}function Nn(e,n,t,r){if(50<mo)throw mo=0,Ds=null,Error(T(185));Uo(e,t,r),(!(G&2)||e!==Ne)&&(e===Ne&&(!(G&2)&&(ka|=t),_e===4&&ct(e,je)),nn(e,r),t===1&&G===0&&!(n.mode&1)&&(Nr=Se()+500,ya&&Ct()))}function nn(e,n){var t=e.callbackNode;l0(e,n);var r=Ai(e,e===Ne?je:0);if(r===0)t!==null&&vc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&vc(t),n===1)e.tag===0?av(sd.bind(null,e)):lp(sd.bind(null,e)),tv(function(){!(G&6)&&Ct()}),t=null;else{switch(jf(r)){case 1:t=Js;break;case 4:t=Mf;break;case 16:t=$i;break;case 536870912:t=Lf;break;default:t=$i}t=ah(t,Zp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Zp(e,n){if(Ri=-1,Ni=0,G&6)throw Error(T(327));var t=e.callbackNode;if(Er()&&e.callbackNode!==t)return null;var r=Ai(e,e===Ne?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ta(e,r);else{n=r;var o=G;G|=2;var i=nh();(Ne!==e||je!==n)&&(Bn=null,Nr=Se()+500,It(e,n));do try{Cv();break}catch(s){eh(e,s)}while(1);du(),Zi.current=i,G=o,Pe!==null?n=0:(Ne=null,je=0,n=_e)}if(n!==0){if(n===2&&(o=is(e),o!==0&&(r=o,n=Ms(e,o))),n===1)throw t=Do,It(e,0),ct(e,r),nn(e,Se()),t;if(n===6)ct(e,r);else{if(o=e.current.alternate,!(r&30)&&!Pv(o)&&(n=ta(e,r),n===2&&(i=is(e),i!==0&&(r=i,n=Ms(e,i))),n===1))throw t=Do,It(e,0),ct(e,r),nn(e,Se()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(T(345));case 2:Dt(e,Ge,Bn);break;case 3:if(ct(e,r),(r&130023424)===r&&(n=Ou+500-Se(),10<n)){if(Ai(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ps(Dt.bind(null,e,Ge,Bn),n);break}Dt(e,Ge,Bn);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Rn(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ev(r/1960))-r,10<r){e.timeoutHandle=ps(Dt.bind(null,e,Ge,Bn),r);break}Dt(e,Ge,Bn);break;case 5:Dt(e,Ge,Bn);break;default:throw Error(T(329))}}}return nn(e,Se()),e.callbackNode===t?Zp.bind(null,e):null}function Ms(e,n){var t=ho;return e.current.memoizedState.isDehydrated&&(It(e,n).flags|=256),e=ta(e,n),e!==2&&(n=Ge,Ge=t,n!==null&&Ls(n)),e}function Ls(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Pv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Dn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ct(e,n){for(n&=~Pu,n&=~ka,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Rn(n),r=1<<t;e[t]=-1,n&=~r}}function sd(e){if(G&6)throw Error(T(327));Er();var n=Ai(e,0);if(!(n&1))return nn(e,Se()),null;var t=ta(e,n);if(e.tag!==0&&t===2){var r=is(e);r!==0&&(n=r,t=Ms(e,r))}if(t===1)throw t=Do,It(e,0),ct(e,n),nn(e,Se()),t;if(t===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Dt(e,Ge,Bn),nn(e,Se()),null}function Cu(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(Nr=Se()+500,ya&&Ct())}}function Wt(e){ft!==null&&ft.tag===0&&!(G&6)&&Er();var n=G;G|=1;var t=gn.transition,r=te;try{if(gn.transition=null,te=1,e)return e()}finally{te=r,gn.transition=t,G=n,!(G&6)&&Ct()}}function _u(){on=yr.current,fe(yr)}function It(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,nv(t)),Pe!==null)for(t=Pe.return;t!==null;){var r=t;switch(su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hi();break;case 3:Tr(),fe(Ze),fe(Be),gu();break;case 5:vu(r);break;case 4:Tr();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:fu(r.type._context);break;case 22:case 23:_u()}t=t.return}if(Ne=e,Pe=e=wt(e.current,null),je=on=n,_e=0,Do=null,Pu=ka=Vt=0,Ge=ho=null,jt!==null){for(n=0;n<jt.length;n++)if(t=jt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}jt=null}return e}function eh(e,n){do{var t=Pe;try{if(du(),Ci.current=Ji,Gi){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Gi=!1}if(Ht=0,Re=Ce=ge=null,fo=!1,To=0,Eu.current=null,t===null||t.return===null){_e=1,Do=n,Pe=null;break}e:{var i=e,a=t.return,s=t,l=n;if(n=je,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Yc(a);if(y!==null){y.flags&=-257,qc(y,a,s,i,n),y.mode&1&&Xc(i,u,n),n=y,l=u;var x=n.updateQueue;if(x===null){var h=new Set;h.add(l),n.updateQueue=h}else x.add(l);break e}else{if(!(n&1)){Xc(i,u,n),Tu();break e}l=Error(T(426))}}else if(me&&s.mode&1){var S=Yc(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),qc(S,a,s,i,n),uu(Rr(l,s));break e}}i=l=Rr(l,s),_e!==4&&(_e=2),ho===null?ho=[i]:ho.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var m=$p(i,l,n);Fc(i,m);break e;case 1:s=l;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bt===null||!bt.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var E=Ap(i,s,n);Fc(i,E);break e}}i=i.return}while(i!==null)}rh(t)}catch(_){n=_,Pe===t&&t!==null&&(Pe=t=t.return);continue}break}while(1)}function nh(){var e=Zi.current;return Zi.current=Ji,e===null?Ji:e}function Tu(){(_e===0||_e===3||_e===2)&&(_e=4),Ne===null||!(Vt&268435455)&&!(ka&268435455)||ct(Ne,je)}function ta(e,n){var t=G;G|=2;var r=nh();(Ne!==e||je!==n)&&(Bn=null,It(e,n));do try{Ov();break}catch(o){eh(e,o)}while(1);if(du(),G=t,Zi.current=r,Pe!==null)throw Error(T(261));return Ne=null,je=0,_e}function Ov(){for(;Pe!==null;)th(Pe)}function Cv(){for(;Pe!==null&&!Jm();)th(Pe)}function th(e){var n=ih(e.alternate,e,on);e.memoizedProps=e.pendingProps,n===null?rh(e):Pe=n,Eu.current=null}function rh(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=xv(t,n),t!==null){t.flags&=32767,Pe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Pe=null;return}}else if(t=bv(t,n,on),t!==null){Pe=t;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);_e===0&&(_e=5)}function Dt(e,n,t){var r=te,o=gn.transition;try{gn.transition=null,te=1,_v(e,n,t,r)}finally{gn.transition=o,te=r}return null}function _v(e,n,t,r){do Er();while(ft!==null);if(G&6)throw Error(T(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(s0(e,i),e===Ne&&(Pe=Ne=null,je=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mi||(mi=!0,ah($i,function(){return Er(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=gn.transition,gn.transition=null;var a=te;te=1;var s=G;G|=4,Eu.current=null,kv(e,t),Gp(t,e),X0(ds),Ii=!!cs,ds=cs=null,e.current=t,Sv(t),Zm(),G=s,te=a,gn.transition=i}else e.current=t;if(mi&&(mi=!1,ft=e,na=o),i=e.pendingLanes,i===0&&(bt=null),t0(t.stateNode),nn(e,Se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ea)throw ea=!1,e=Ns,Ns=null,e;return na&1&&e.tag!==0&&Er(),i=e.pendingLanes,i&1?e===Ds?mo++:(mo=0,Ds=e):mo=0,Ct(),null}function Er(){if(ft!==null){var e=jf(na),n=gn.transition,t=te;try{if(gn.transition=null,te=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,na=0,G&6)throw Error(T(331));var o=G;for(G|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(z=u;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:po(8,f,i)}var d=f.child;if(d!==null)d.return=f,z=d;else for(;z!==null;){f=z;var c=f.sibling,y=f.return;if(Xp(f),f===u){z=null;break}if(c!==null){c.return=y,z=c;break}z=y}}}var x=i.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var S=h.sibling;h.sibling=null,h=S}while(h!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:po(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,z=m;break e}z=i.return}}var p=e.current;for(z=p;z!==null;){a=z;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,z=g;else e:for(a=p;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:wa(9,s)}}catch(_){we(s,s.return,_)}if(s===a){z=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,z=E;break e}z=s.return}}if(G=o,Ct(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(pa,e)}catch{}r=!0}return r}finally{te=t,gn.transition=n}}return!1}function ud(e,n,t){n=Rr(t,n),n=$p(e,n,1),e=yt(e,n,1),n=Ke(),e!==null&&(Uo(e,1,n),nn(e,n))}function we(e,n,t){if(e.tag===3)ud(e,e,t);else for(;n!==null;){if(n.tag===3){ud(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Rr(t,e),e=Ap(n,e,1),n=yt(n,e,1),e=Ke(),n!==null&&(Uo(n,1,e),nn(n,e));break}}n=n.return}}function Tv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ke(),e.pingedLanes|=e.suspendedLanes&t,Ne===e&&(je&t)===t&&(_e===4||_e===3&&(je&130023424)===je&&500>Se()-Ou?It(e,0):Pu|=t),nn(e,n)}function oh(e,n){n===0&&(e.mode&1?(n=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):n=1);var t=Ke();e=qn(e,n),e!==null&&(Uo(e,n,t),nn(e,t))}function Rv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),oh(e,t)}function Nv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(n),oh(e,t)}var ih;ih=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ze.current)Je=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Je=!1,yv(e,n,t);Je=!!(e.flags&131072)}else Je=!1,me&&n.flags&1048576&&sp(n,Qi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ti(e,n),e=n.pendingProps;var o=Or(n,Be.current);Sr(n,t),o=bu(null,n,r,e,o,t);var i=xu();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,en(r)?(i=!0,Vi(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hu(n),o.updater=ba,n.stateNode=o,o._reactInternals=n,xs(n,r,e,t),n=Ss(null,n,r,!0,i,t)):(n.tag=0,me&&i&&lu(n),Qe(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ti(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Mv(r),e=Pn(r,e),o){case 0:n=ks(null,n,r,e,t);break e;case 1:n=Zc(null,n,r,e,t);break e;case 11:n=Gc(null,n,r,e,t);break e;case 14:n=Jc(null,n,r,Pn(r.type,e),t);break e}throw Error(T(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Pn(r,o),ks(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Pn(r,o),Zc(e,n,r,o,t);case 3:e:{if(Bp(n),e===null)throw Error(T(387));r=n.pendingProps,i=n.memoizedState,o=i.element,fp(e,n),Yi(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Rr(Error(T(423)),n),n=ed(e,n,r,t,o);break e}else if(r!==o){o=Rr(Error(T(424)),n),n=ed(e,n,r,t,o);break e}else for(ln=gt(n.stateNode.containerInfo.firstChild),sn=n,me=!0,_n=null,t=vp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Cr(),r===o){n=Gn(e,n,t);break e}Qe(e,n,r,t)}n=n.child}return n;case 5:return gp(n),e===null&&gs(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,fs(r,o)?a=null:i!==null&&fs(r,i)&&(n.flags|=32),Fp(e,n),Qe(e,n,a,t),n.child;case 6:return e===null&&gs(n),null;case 13:return Hp(e,n,t);case 4:return mu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=_r(n,null,r,t):Qe(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Pn(r,o),Gc(e,n,r,o,t);case 7:return Qe(e,n,n.pendingProps,t),n.child;case 8:return Qe(e,n,n.pendingProps.children,t),n.child;case 12:return Qe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,ce(Ki,r._currentValue),r._currentValue=a,i!==null)if(Dn(i.value,a)){if(i.children===o.children&&!Ze.current){n=Gn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Qn(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),ys(i.return,t,n),s.lanes|=t;break}l=l.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),ys(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Qe(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Sr(n,t),o=yn(o),r=r(o),n.flags|=1,Qe(e,n,r,t),n.child;case 14:return r=n.type,o=Pn(r,n.pendingProps),o=Pn(r.type,o),Jc(e,n,r,o,t);case 15:return Ip(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Pn(r,o),Ti(e,n),n.tag=1,en(r)?(e=!0,Vi(n)):e=!1,Sr(n,t),hp(n,r,o),xs(n,r,o,t),Ss(null,n,r,!0,e,t);case 19:return Vp(e,n,t);case 22:return Up(e,n,t)}throw Error(T(156,n.tag))};function ah(e,n){return Df(e,n)}function Dv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,n,t,r){return new Dv(e,n,t,r)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mv(e){if(typeof e=="function")return Ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===qs)return 14}return 2}function wt(e,n){var t=e.alternate;return t===null?(t=vn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Di(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")Ru(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case sr:return Ut(t.children,o,i,n);case Xs:a=8,o|=8;break;case Vl:return e=vn(12,t,n,o|2),e.elementType=Vl,e.lanes=i,e;case Wl:return e=vn(13,t,n,o),e.elementType=Wl,e.lanes=i,e;case Ql:return e=vn(19,t,n,o),e.elementType=Ql,e.lanes=i,e;case mf:return Sa(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pf:a=10;break e;case hf:a=9;break e;case Ys:a=11;break e;case qs:a=14;break e;case lt:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=vn(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Ut(e,n,t,r){return e=vn(7,e,r,n),e.lanes=t,e}function Sa(e,n,t,r){return e=vn(22,e,r,n),e.elementType=mf,e.lanes=t,e.stateNode={isHidden:!1},e}function Ll(e,n,t){return e=vn(6,e,null,n),e.lanes=t,e}function zl(e,n,t){return n=vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Lv(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nu(e,n,t,r,o,i,a,s,l){return e=new Lv(e,n,t,s,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=vn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(i),e}function zv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function lh(e){if(!e)return St;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(T(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(en(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(T(171))}if(e.tag===1){var t=e.type;if(en(t))return ap(e,t,n)}return n}function sh(e,n,t,r,o,i,a,s,l){return e=Nu(t,r,!0,e,o,i,a,s,l),e.context=lh(null),t=e.current,r=Ke(),o=xt(t),i=Qn(r,o),i.callback=n??null,yt(t,i,o),e.current.lanes=o,Uo(e,o,r),nn(e,r),e}function Ea(e,n,t,r){var o=n.current,i=Ke(),a=xt(o);return t=lh(t),n.context===null?n.context=t:n.pendingContext=t,n=Qn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=yt(o,n,a),e!==null&&(Nn(e,o,a,i),Oi(e,o,a)),a}function ra(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Du(e,n){cd(e,n),(e=e.alternate)&&cd(e,n)}function jv(){return null}var uh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mu(e){this._internalRoot=e}Pa.prototype.render=Mu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(T(409));Ea(e,n,null,null)};Pa.prototype.unmount=Mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wt(function(){Ea(null,e,null,null)}),n[Yn]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var n=If();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ut.length&&n!==0&&n<ut[t].priority;t++);ut.splice(t,0,e),t===0&&Ff(e)}};function Lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dd(){}function $v(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ra(a);i.call(u)}}var a=sh(n,r,e,0,null,!1,!1,"",dd);return e._reactRootContainer=a,e[Yn]=a.current,Eo(e.nodeType===8?e.parentNode:e),Wt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ra(l);s.call(u)}}var l=Nu(e,0,!1,null,null,!1,!1,"",dd);return e._reactRootContainer=l,e[Yn]=l.current,Eo(e.nodeType===8?e.parentNode:e),Wt(function(){Ea(n,l,t,r)}),l}function Ca(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=ra(a);s.call(l)}}Ea(n,a,e,o)}else a=$v(t,n,e,o,r);return ra(a)}$f=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=to(n.pendingLanes);t!==0&&(Zs(n,t|1),nn(n,Se()),!(G&6)&&(Nr=Se()+500,Ct()))}break;case 13:Wt(function(){var r=qn(e,1);if(r!==null){var o=Ke();Nn(r,e,1,o)}}),Du(e,1)}};eu=function(e){if(e.tag===13){var n=qn(e,134217728);if(n!==null){var t=Ke();Nn(n,e,134217728,t)}Du(e,134217728)}};Af=function(e){if(e.tag===13){var n=xt(e),t=qn(e,n);if(t!==null){var r=Ke();Nn(t,e,n,r)}Du(e,n)}};If=function(){return te};Uf=function(e,n){var t=te;try{return te=e,n()}finally{te=t}};ts=function(e,n,t){switch(n){case"input":if(Yl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=ga(r);if(!o)throw Error(T(90));gf(r),Yl(r,o)}}}break;case"textarea":bf(e,t);break;case"select":n=t.value,n!=null&&br(e,!!t.multiple,n,!1)}};Of=Cu;Cf=Wt;var Av={usingClientEntryPoint:!1,Events:[Bo,fr,ga,Ef,Pf,Cu]},qr={findFiberByHostInstance:zt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Iv={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rf(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||jv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{pa=vi.inject(Iv),$n=vi}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;cn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(n))throw Error(T(200));return zv(e,n,null,t)};cn.createRoot=function(e,n){if(!Lu(e))throw Error(T(299));var t=!1,r="",o=uh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Nu(e,1,!1,null,null,t,!1,r,o),e[Yn]=n.current,Eo(e.nodeType===8?e.parentNode:e),new Mu(n)};cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Rf(n),e=e===null?null:e.stateNode,e};cn.flushSync=function(e){return Wt(e)};cn.hydrate=function(e,n,t){if(!Oa(n))throw Error(T(200));return Ca(null,e,n,!0,t)};cn.hydrateRoot=function(e,n,t){if(!Lu(e))throw Error(T(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=uh;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=sh(n,null,e,1,t??null,o,!1,i,a),e[Yn]=n.current,Eo(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Pa(n)};cn.render=function(e,n,t){if(!Oa(n))throw Error(T(200));return Ca(null,e,n,!1,t)};cn.unmountComponentAtNode=function(e){if(!Oa(e))throw Error(T(40));return e._reactRootContainer?(Wt(function(){Ca(null,null,e,!1,function(){e._reactRootContainer=null,e[Yn]=null})}),!0):!1};cn.unstable_batchedUpdates=Cu;cn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Oa(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ca(e,n,t,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";function ch(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ch)}catch(e){console.error(e)}}ch(),sf.exports=cn;var _a=sf.exports;const Uv=qd(_a),Fv=Yd({__proto__:null,default:Uv},[_a]);var fd=_a;Bl.createRoot=fd.createRoot,Bl.hydrateRoot=fd.hydrateRoot;var dh={exports:{}},fh={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=P;function Bv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Hv=typeof Object.is=="function"?Object.is:Bv,Vv=Dr.useState,Wv=Dr.useEffect,Qv=Dr.useLayoutEffect,Kv=Dr.useDebugValue;function Xv(e,n){var t=n(),r=Vv({inst:{value:t,getSnapshot:n}}),o=r[0].inst,i=r[1];return Qv(function(){o.value=t,o.getSnapshot=n,jl(o)&&i({inst:o})},[e,t,n]),Wv(function(){return jl(o)&&i({inst:o}),e(function(){jl(o)&&i({inst:o})})},[e]),Kv(t),t}function jl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Hv(e,t)}catch{return!0}}function Yv(e,n){return n()}var qv=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Yv:Xv;fh.useSyncExternalStore=Dr.useSyncExternalStore!==void 0?Dr.useSyncExternalStore:qv;dh.exports=fh;var Gv=dh.exports,ph={exports:{}},hh={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=P,Jv=Gv;function Zv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var eg=typeof Object.is=="function"?Object.is:Zv,ng=Jv.useSyncExternalStore,tg=Ta.useRef,rg=Ta.useEffect,og=Ta.useMemo,ig=Ta.useDebugValue;hh.useSyncExternalStoreWithSelector=function(e,n,t,r,o){var i=tg(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=og(function(){function l(y){if(!u){if(u=!0,f=y,y=r(y),o!==void 0&&a.hasValue){var x=a.value;if(o(x,y))return d=x}return d=y}if(x=d,eg(f,y))return x;var h=r(y);return o!==void 0&&o(x,h)?x:(f=y,d=h)}var u=!1,f,d,c=t===void 0?null:t;return[function(){return l(n())},c===null?void 0:function(){return l(c())}]},[n,t,r,o]);var s=ng(e,i[0],i[1]);return rg(function(){a.hasValue=!0,a.value=s},[s]),ig(s),s};ph.exports=hh;var ag=ph.exports;function lg(e){e()}let mh=lg;const sg=e=>mh=e,ug=()=>mh,pd=Symbol.for("react-redux-context"),hd=typeof globalThis<"u"?globalThis:{};function cg(){var e;if(!P.createContext)return{};const n=(e=hd[pd])!=null?e:hd[pd]=new Map;let t=n.get(P.createContext);return t||(t=P.createContext(null),n.set(P.createContext,t)),t}const Et=cg();function zu(e=Et){return function(){return P.useContext(e)}}const vh=zu(),dg=()=>{throw new Error("uSES not initialized!")};let gh=dg;const fg=e=>{gh=e},pg=(e,n)=>e===n;function hg(e=Et){const n=e===Et?vh:zu(e);return function(r,o={}){const{equalityFn:i=pg,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:l,subscription:u,getServerState:f,stabilityCheck:d,noopCheck:c}=n();P.useRef(!0);const y=P.useCallback({[r.name](h){return r(h)}}[r.name],[r,d,a]),x=gh(u.addNestedSub,l.getState,f||l.getState,y,i);return P.useDebugValue(x),x}}const Mr=hg();var yh={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,ju=De?Symbol.for("react.element"):60103,$u=De?Symbol.for("react.portal"):60106,Ra=De?Symbol.for("react.fragment"):60107,Na=De?Symbol.for("react.strict_mode"):60108,Da=De?Symbol.for("react.profiler"):60114,Ma=De?Symbol.for("react.provider"):60109,La=De?Symbol.for("react.context"):60110,Au=De?Symbol.for("react.async_mode"):60111,za=De?Symbol.for("react.concurrent_mode"):60111,ja=De?Symbol.for("react.forward_ref"):60112,$a=De?Symbol.for("react.suspense"):60113,mg=De?Symbol.for("react.suspense_list"):60120,Aa=De?Symbol.for("react.memo"):60115,Ia=De?Symbol.for("react.lazy"):60116,vg=De?Symbol.for("react.block"):60121,gg=De?Symbol.for("react.fundamental"):60117,yg=De?Symbol.for("react.responder"):60118,bg=De?Symbol.for("react.scope"):60119;function fn(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case ju:switch(e=e.type,e){case Au:case za:case Ra:case Da:case Na:case $a:return e;default:switch(e=e&&e.$$typeof,e){case La:case ja:case Ia:case Aa:case Ma:return e;default:return n}}case $u:return n}}}function bh(e){return fn(e)===za}re.AsyncMode=Au;re.ConcurrentMode=za;re.ContextConsumer=La;re.ContextProvider=Ma;re.Element=ju;re.ForwardRef=ja;re.Fragment=Ra;re.Lazy=Ia;re.Memo=Aa;re.Portal=$u;re.Profiler=Da;re.StrictMode=Na;re.Suspense=$a;re.isAsyncMode=function(e){return bh(e)||fn(e)===Au};re.isConcurrentMode=bh;re.isContextConsumer=function(e){return fn(e)===La};re.isContextProvider=function(e){return fn(e)===Ma};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ju};re.isForwardRef=function(e){return fn(e)===ja};re.isFragment=function(e){return fn(e)===Ra};re.isLazy=function(e){return fn(e)===Ia};re.isMemo=function(e){return fn(e)===Aa};re.isPortal=function(e){return fn(e)===$u};re.isProfiler=function(e){return fn(e)===Da};re.isStrictMode=function(e){return fn(e)===Na};re.isSuspense=function(e){return fn(e)===$a};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ra||e===za||e===Da||e===Na||e===$a||e===mg||typeof e=="object"&&e!==null&&(e.$$typeof===Ia||e.$$typeof===Aa||e.$$typeof===Ma||e.$$typeof===La||e.$$typeof===ja||e.$$typeof===gg||e.$$typeof===yg||e.$$typeof===bg||e.$$typeof===vg)};re.typeOf=fn;yh.exports=re;var xg=yh.exports,xh=xg,wg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wh={};wh[xh.ForwardRef]=wg;wh[xh.Memo]=kg;var le={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=Symbol.for("react.element"),Uu=Symbol.for("react.portal"),Ua=Symbol.for("react.fragment"),Fa=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),Ha=Symbol.for("react.provider"),Va=Symbol.for("react.context"),Sg=Symbol.for("react.server_context"),Wa=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),Xa=Symbol.for("react.memo"),Ya=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),kh;kh=Symbol.for("react.module.reference");function xn(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case Iu:switch(e=e.type,e){case Ua:case Ba:case Fa:case Qa:case Ka:return e;default:switch(e=e&&e.$$typeof,e){case Sg:case Va:case Wa:case Ya:case Xa:case Ha:return e;default:return n}}case Uu:return n}}}le.ContextConsumer=Va;le.ContextProvider=Ha;le.Element=Iu;le.ForwardRef=Wa;le.Fragment=Ua;le.Lazy=Ya;le.Memo=Xa;le.Portal=Uu;le.Profiler=Ba;le.StrictMode=Fa;le.Suspense=Qa;le.SuspenseList=Ka;le.isAsyncMode=function(){return!1};le.isConcurrentMode=function(){return!1};le.isContextConsumer=function(e){return xn(e)===Va};le.isContextProvider=function(e){return xn(e)===Ha};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Iu};le.isForwardRef=function(e){return xn(e)===Wa};le.isFragment=function(e){return xn(e)===Ua};le.isLazy=function(e){return xn(e)===Ya};le.isMemo=function(e){return xn(e)===Xa};le.isPortal=function(e){return xn(e)===Uu};le.isProfiler=function(e){return xn(e)===Ba};le.isStrictMode=function(e){return xn(e)===Fa};le.isSuspense=function(e){return xn(e)===Qa};le.isSuspenseList=function(e){return xn(e)===Ka};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ua||e===Ba||e===Fa||e===Qa||e===Ka||e===Eg||typeof e=="object"&&e!==null&&(e.$$typeof===Ya||e.$$typeof===Xa||e.$$typeof===Ha||e.$$typeof===Va||e.$$typeof===Wa||e.$$typeof===kh||e.getModuleId!==void 0)};le.typeOf=xn;function Pg(){const e=ug();let n=null,t=null;return{clear(){n=null,t=null},notify(){e(()=>{let r=n;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=n;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=t={callback:r,next:null,prev:t};return i.prev?i.prev.next=i:n=i,function(){!o||n===null||(o=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:n=i.next)}}}}const md={notify(){},get:()=>[]};function Og(e,n){let t,r=md,o=0,i=!1;function a(h){f();const S=r.subscribe(h);let m=!1;return()=>{m||(m=!0,S(),d())}}function s(){r.notify()}function l(){x.onStateChange&&x.onStateChange()}function u(){return i}function f(){o++,t||(t=n?n.addNestedSub(l):e.subscribe(l),r=Pg())}function d(){o--,t&&o===0&&(t(),t=void 0,r.clear(),r=md)}function c(){i||(i=!0,f())}function y(){i&&(i=!1,d())}const x={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:c,tryUnsubscribe:y,getListeners:()=>r};return x}const Cg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_g=Cg?P.useLayoutEffect:P.useEffect;function Tg({store:e,context:n,children:t,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=P.useMemo(()=>{const u=Og(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=P.useMemo(()=>e.getState(),[e]);_g(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=n||Et;return P.createElement(l.Provider,{value:a},t)}function Sh(e=Et){const n=e===Et?vh:zu(e);return function(){const{store:r}=n();return r}}const Rg=Sh();function Ng(e=Et){const n=e===Et?Rg:Sh(e);return function(){return n().dispatch}}const qa=Ng();fg(ag.useSyncExternalStoreWithSelector);sg(_a.unstable_batchedUpdates);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pe.apply(this,arguments)}var ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ke||(ke={}));const vd="popstate";function Dg(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:a,hash:s}=r.location;return Mo("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:Qt(o)}return Lg(n,t,null,e)}function X(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Lr(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Mg(){return Math.random().toString(36).substr(2,8)}function gd(e,n){return{usr:e.state,key:e.key,idx:n}}function Mo(e,n,t,r){return t===void 0&&(t=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Zn(n):n,{state:t,key:n&&n.key||r||Mg()})}function Qt(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Zn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Lg(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=ke.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(pe({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){s=ke.Pop;let S=f(),m=S==null?null:S-u;u=S,l&&l({action:s,location:h.location,delta:m})}function c(S,m){s=ke.Push;let p=Mo(h.location,S,m);t&&t(p,S),u=f()+1;let g=gd(p,u),E=h.createHref(p);try{a.pushState(g,"",E)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;o.location.assign(E)}i&&l&&l({action:s,location:h.location,delta:1})}function y(S,m){s=ke.Replace;let p=Mo(h.location,S,m);t&&t(p,S),u=f();let g=gd(p,u),E=h.createHref(p);a.replaceState(g,"",E),i&&l&&l({action:s,location:h.location,delta:0})}function x(S){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof S=="string"?S:Qt(S);return p=p.replace(/ $/,"%20"),X(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let h={get action(){return s},get location(){return e(o,a)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(vd,d),l=S,()=>{o.removeEventListener(vd,d),l=null}},createHref(S){return n(o,S)},createURL:x,encodeLocation(S){let m=x(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:c,replace:y,go(S){return a.go(S)}};return h}var ee;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ee||(ee={}));const zg=new Set(["lazy","caseSensitive","path","id","index","children"]);function jg(e){return e.index===!0}function oa(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...t,String(i)],s=typeof o.id=="string"?o.id:a.join("-");if(X(o.index!==!0||!o.children,"Cannot specify children on an index route"),X(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),jg(o)){let l=pe({},o,n(o),{id:s});return r[s]=l,l}else{let l=pe({},o,n(o),{id:s,children:void 0});return r[s]=l,o.children&&(l.children=oa(o.children,n,a,r)),l}})}function Mt(e,n,t){return t===void 0&&(t="/"),Mi(e,n,t,!1)}function Mi(e,n,t,r){let o=typeof n=="string"?Zn(n):n,i=Ar(o.pathname||"/",t);if(i==null)return null;let a=Eh(e);Ag(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=Yg(i);s=Kg(a[l],u,r)}return s}function $g(e,n){let{route:t,pathname:r,params:o}=e;return{id:t.id,pathname:r,params:o,data:n[t.id],handle:t.handle}}function Eh(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),f=t.concat(l);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Eh(i.children,n,f,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:Wg(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of Ph(i.path))o(i,a,l)}),n}function Ph(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Ph(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Ag(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Qg(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Ig=/^:[\w-]+$/,Ug=3,Fg=2,Bg=1,Hg=10,Vg=-2,yd=e=>e==="*";function Wg(e,n){let t=e.split("/"),r=t.length;return t.some(yd)&&(r+=Vg),n&&(r+=Fg),t.filter(o=>!yd(o)).reduce((o,i)=>o+(Ig.test(i)?Ug:i===""?Bg:Hg),r)}function Qg(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Kg(e,n,t){t===void 0&&(t=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,f=i==="/"?n:n.slice(i.length)||"/",d=bd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),c=l.route;if(!d&&u&&t&&!r[r.length-1].route.index&&(d=bd({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:Kn([i,d.pathname]),pathnameBase:Jg(Kn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Kn([i,d.pathnameBase]))}return a}function bd(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Xg(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:c,isOptional:y}=f;if(c==="*"){let h=s[d]||"";a=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}const x=s[d];return y&&!x?u[c]=void 0:u[c]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Xg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Lr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Yg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Lr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ar(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function qg(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?Zn(e):e;return{pathname:t?t.startsWith("/")?t:Gg(t,n):n,search:Zg(r),hash:ey(o)}}function Gg(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function $l(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Oh(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Fu(e,n){let t=Oh(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Bu(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Zn(e):(o=pe({},e),X(!o.pathname||!o.pathname.includes("?"),$l("?","pathname","search",o)),X(!o.pathname||!o.pathname.includes("#"),$l("#","pathname","hash",o)),X(!o.search||!o.search.includes("#"),$l("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=t;else{let d=n.length-1;if(!r&&a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),d-=1;o.pathname=c.join("/")}s=d>=0?n[d]:"/"}let l=qg(o,s),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Kn=e=>e.join("/").replace(/\/\/+/g,"/"),Jg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ey=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class ia{constructor(n,t,r,o){o===void 0&&(o=!1),this.status=n,this.statusText=t||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Lo(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ch=["post","put","patch","delete"],ny=new Set(Ch),ty=["get",...Ch],ry=new Set(ty),oy=new Set([301,302,303,307,308]),iy=new Set([307,308]),Al={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ay={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Gr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Hu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ly=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),_h="remix-router-transitions";function sy(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;X(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let v=e.detectErrorBoundary;o=w=>({hasErrorBoundary:v(w)})}else o=ly;let i={},a=oa(e.routes,o,void 0,i),s,l=e.basename||"/",u=e.dataStrategy||fy,f=e.patchRoutesOnNavigation,d=pe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),c=null,y=new Set,x=null,h=null,S=null,m=e.hydrationData!=null,p=Mt(a,e.history.location,l),g=!1,E=null;if(p==null&&!f){let v=qe(404,{pathname:e.history.location.pathname}),{matches:w,route:k}=Rd(a);p=w,E={[k.id]:v}}p&&!e.hydrationData&&qo(p,a,e.history.location.pathname).active&&(p=null);let _;if(p)if(p.some(v=>v.route.lazy))_=!1;else if(!p.some(v=>v.route.loader))_=!0;else if(d.v7_partialHydration){let v=e.hydrationData?e.hydrationData.loaderData:null,w=e.hydrationData?e.hydrationData.errors:null;if(w){let k=p.findIndex(C=>w[C.route.id]!==void 0);_=p.slice(0,k+1).every(C=>!js(C.route,v,w))}else _=p.every(k=>!js(k.route,v,w))}else _=e.hydrationData!=null;else if(_=!1,p=[],d.v7_partialHydration){let v=qo(null,a,e.history.location.pathname);v.active&&v.matches&&(g=!0,p=v.matches)}let M,b={historyAction:e.history.action,location:e.history.location,matches:p,initialized:_,navigation:Al,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||E,fetchers:new Map,blockers:new Map},O=ke.Pop,I=!1,L,oe=!1,se=new Map,Oe=null,Me=!1,wn=!1,et=[],nt=new Set,R=new Map,H=0,W=-1,ie=new Map,ae=new Set,kn=new Map,tn=new Map,He=new Set,Ve=new Map,pn=new Map,Ko;function Jh(){if(c=e.history.listen(v=>{let{action:w,location:k,delta:C}=v;if(Ko){Ko(),Ko=void 0;return}Lr(pn.size===0||C!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let D=ec({currentLocation:b.location,nextLocation:k,historyAction:w});if(D&&C!=null){let B=new Promise(V=>{Ko=V});e.history.go(C*-1),Yo(D,{state:"blocked",location:k,proceed(){Yo(D,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),B.then(()=>e.history.go(C))},reset(){let V=new Map(b.blockers);V.set(D,Gr),We({blockers:V})}});return}return _t(w,k)}),t){Oy(n,se);let v=()=>Cy(n,se);n.addEventListener("pagehide",v),Oe=()=>n.removeEventListener("pagehide",v)}return b.initialized||_t(ke.Pop,b.location,{initialHydration:!0}),M}function Zh(){c&&c(),Oe&&Oe(),y.clear(),L&&L.abort(),b.fetchers.forEach((v,w)=>Xo(w)),b.blockers.forEach((v,w)=>Zu(w))}function em(v){return y.add(v),()=>y.delete(v)}function We(v,w){w===void 0&&(w={}),b=pe({},b,v);let k=[],C=[];d.v7_fetcherPersist&&b.fetchers.forEach((D,B)=>{D.state==="idle"&&(He.has(B)?C.push(B):k.push(B))}),He.forEach(D=>{!b.fetchers.has(D)&&!R.has(D)&&C.push(D)}),[...y].forEach(D=>D(b,{deletedFetchers:C,viewTransitionOpts:w.viewTransitionOpts,flushSync:w.flushSync===!0})),d.v7_fetcherPersist?(k.forEach(D=>b.fetchers.delete(D)),C.forEach(D=>Xo(D))):C.forEach(D=>He.delete(D))}function Gt(v,w,k){var C,D;let{flushSync:B}=k===void 0?{}:k,V=b.actionData!=null&&b.navigation.formMethod!=null&&Cn(b.navigation.formMethod)&&b.navigation.state==="loading"&&((C=v.state)==null?void 0:C._isRedirect)!==!0,$;w.actionData?Object.keys(w.actionData).length>0?$=w.actionData:$=null:V?$=b.actionData:$=null;let A=w.loaderData?_d(b.loaderData,w.loaderData,w.matches||[],w.errors):b.loaderData,j=b.blockers;j.size>0&&(j=new Map(j),j.forEach((q,Le)=>j.set(Le,Gr)));let U=I===!0||b.navigation.formMethod!=null&&Cn(b.navigation.formMethod)&&((D=v.state)==null?void 0:D._isRedirect)!==!0;s&&(a=s,s=void 0),Me||O===ke.Pop||(O===ke.Push?e.history.push(v,v.state):O===ke.Replace&&e.history.replace(v,v.state));let Q;if(O===ke.Pop){let q=se.get(b.location.pathname);q&&q.has(v.pathname)?Q={currentLocation:b.location,nextLocation:v}:se.has(v.pathname)&&(Q={currentLocation:v,nextLocation:b.location})}else if(oe){let q=se.get(b.location.pathname);q?q.add(v.pathname):(q=new Set([v.pathname]),se.set(b.location.pathname,q)),Q={currentLocation:b.location,nextLocation:v}}We(pe({},w,{actionData:$,loaderData:A,historyAction:O,location:v,initialized:!0,navigation:Al,revalidation:"idle",restoreScrollPosition:tc(v,w.matches||b.matches),preventScrollReset:U,blockers:j}),{viewTransitionOpts:Q,flushSync:B===!0}),O=ke.Pop,I=!1,oe=!1,Me=!1,wn=!1,et=[]}async function Qu(v,w){if(typeof v=="number"){e.history.go(v);return}let k=zs(b.location,b.matches,l,d.v7_prependBasename,v,d.v7_relativeSplatPath,w==null?void 0:w.fromRouteId,w==null?void 0:w.relative),{path:C,submission:D,error:B}=xd(d.v7_normalizeFormMethod,!1,k,w),V=b.location,$=Mo(b.location,C,w&&w.state);$=pe({},$,e.history.encodeLocation($));let A=w&&w.replace!=null?w.replace:void 0,j=ke.Push;A===!0?j=ke.Replace:A===!1||D!=null&&Cn(D.formMethod)&&D.formAction===b.location.pathname+b.location.search&&(j=ke.Replace);let U=w&&"preventScrollReset"in w?w.preventScrollReset===!0:void 0,Q=(w&&w.flushSync)===!0,q=ec({currentLocation:V,nextLocation:$,historyAction:j});if(q){Yo(q,{state:"blocked",location:$,proceed(){Yo(q,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),Qu(v,w)},reset(){let Le=new Map(b.blockers);Le.set(q,Gr),We({blockers:Le})}});return}return await _t(j,$,{submission:D,pendingError:B,preventScrollReset:U,replace:w&&w.replace,enableViewTransition:w&&w.viewTransition,flushSync:Q})}function nm(){if(al(),We({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){_t(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}_t(O||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:oe===!0})}}async function _t(v,w,k){L&&L.abort(),L=null,O=v,Me=(k&&k.startUninterruptedRevalidation)===!0,dm(b.location,b.matches),I=(k&&k.preventScrollReset)===!0,oe=(k&&k.enableViewTransition)===!0;let C=s||a,D=k&&k.overrideNavigation,B=k!=null&&k.initialHydration&&b.matches&&b.matches.length>0&&!g?b.matches:Mt(C,w,l),V=(k&&k.flushSync)===!0;if(B&&b.initialized&&!wn&&yy(b.location,w)&&!(k&&k.submission&&Cn(k.submission.formMethod))){Gt(w,{matches:B},{flushSync:V});return}let $=qo(B,C,w.pathname);if($.active&&$.matches&&(B=$.matches),!B){let{error:ue,notFoundMatches:Z,route:be}=ll(w.pathname);Gt(w,{matches:Z,loaderData:{},errors:{[be.id]:ue}},{flushSync:V});return}L=new AbortController;let A=tr(e.history,w,L.signal,k&&k.submission),j;if(k&&k.pendingError)j=[Lt(B).route.id,{type:ee.error,error:k.pendingError}];else if(k&&k.submission&&Cn(k.submission.formMethod)){let ue=await tm(A,w,k.submission,B,$.active,{replace:k.replace,flushSync:V});if(ue.shortCircuited)return;if(ue.pendingActionResult){let[Z,be]=ue.pendingActionResult;if(an(be)&&Lo(be.error)&&be.error.status===404){L=null,Gt(w,{matches:ue.matches,loaderData:{},errors:{[Z]:be.error}});return}}B=ue.matches||B,j=ue.pendingActionResult,D=Il(w,k.submission),V=!1,$.active=!1,A=tr(e.history,A.url,A.signal)}let{shortCircuited:U,matches:Q,loaderData:q,errors:Le}=await rm(A,w,B,$.active,D,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,V,j);U||(L=null,Gt(w,pe({matches:Q||B},Td(j),{loaderData:q,errors:Le})))}async function tm(v,w,k,C,D,B){B===void 0&&(B={}),al();let V=Ey(w,k);if(We({navigation:V},{flushSync:B.flushSync===!0}),D){let j=await Go(C,w.pathname,v.signal);if(j.type==="aborted")return{shortCircuited:!0};if(j.type==="error"){let U=Lt(j.partialMatches).route.id;return{matches:j.partialMatches,pendingActionResult:[U,{type:ee.error,error:j.error}]}}else if(j.matches)C=j.matches;else{let{notFoundMatches:U,error:Q,route:q}=ll(w.pathname);return{matches:U,pendingActionResult:[q.id,{type:ee.error,error:Q}]}}}let $,A=oo(C,w);if(!A.route.action&&!A.route.lazy)$={type:ee.error,error:qe(405,{method:v.method,pathname:w.pathname,routeId:A.route.id})};else if($=(await Ir("action",b,v,[A],C,null))[A.route.id],v.signal.aborted)return{shortCircuited:!0};if(At($)){let j;return B&&B.replace!=null?j=B.replace:j=Pd($.response.headers.get("Location"),new URL(v.url),l)===b.location.pathname+b.location.search,await Tt(v,$,!0,{submission:k,replace:j}),{shortCircuited:!0}}if(pt($))throw qe(400,{type:"defer-action"});if(an($)){let j=Lt(C,A.route.id);return(B&&B.replace)!==!0&&(O=ke.Push),{matches:C,pendingActionResult:[j.route.id,$]}}return{matches:C,pendingActionResult:[A.route.id,$]}}async function rm(v,w,k,C,D,B,V,$,A,j,U){let Q=D||Il(w,B),q=B||V||Dd(Q),Le=!Me&&(!d.v7_partialHydration||!A);if(C){if(Le){let xe=Ku(U);We(pe({navigation:Q},xe!==void 0?{actionData:xe}:{}),{flushSync:j})}let J=await Go(k,w.pathname,v.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let xe=Lt(J.partialMatches).route.id;return{matches:J.partialMatches,loaderData:{},errors:{[xe]:J.error}}}else if(J.matches)k=J.matches;else{let{error:xe,notFoundMatches:Zt,route:Br}=ll(w.pathname);return{matches:Zt,loaderData:{},errors:{[Br.id]:xe}}}}let ue=s||a,[Z,be]=kd(e.history,b,k,q,w,d.v7_partialHydration&&A===!0,d.v7_skipActionErrorRevalidation,wn,et,nt,He,kn,ae,ue,l,U);if(sl(J=>!(k&&k.some(xe=>xe.route.id===J))||Z&&Z.some(xe=>xe.route.id===J)),W=++H,Z.length===0&&be.length===0){let J=Gu();return Gt(w,pe({matches:k,loaderData:{},errors:U&&an(U[1])?{[U[0]]:U[1].error}:null},Td(U),J?{fetchers:new Map(b.fetchers)}:{}),{flushSync:j}),{shortCircuited:!0}}if(Le){let J={};if(!C){J.navigation=Q;let xe=Ku(U);xe!==void 0&&(J.actionData=xe)}be.length>0&&(J.fetchers=om(be)),We(J,{flushSync:j})}be.forEach(J=>{rt(J.key),J.controller&&R.set(J.key,J.controller)});let Jt=()=>be.forEach(J=>rt(J.key));L&&L.signal.addEventListener("abort",Jt);let{loaderResults:Ur,fetcherResults:Un}=await Xu(b,k,Z,be,v);if(v.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",Jt),be.forEach(J=>R.delete(J.key));let Mn=gi(Ur);if(Mn)return await Tt(v,Mn.result,!0,{replace:$}),{shortCircuited:!0};if(Mn=gi(Un),Mn)return ae.add(Mn.key),await Tt(v,Mn.result,!0,{replace:$}),{shortCircuited:!0};let{loaderData:ul,errors:Fr}=Cd(b,k,Ur,U,be,Un,Ve);Ve.forEach((J,xe)=>{J.subscribe(Zt=>{(Zt||J.done)&&Ve.delete(xe)})}),d.v7_partialHydration&&A&&b.errors&&(Fr=pe({},b.errors,Fr));let Rt=Gu(),Jo=Ju(W),Zo=Rt||Jo||be.length>0;return pe({matches:k,loaderData:ul,errors:Fr},Zo?{fetchers:new Map(b.fetchers)}:{})}function Ku(v){if(v&&!an(v[1]))return{[v[0]]:v[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function om(v){return v.forEach(w=>{let k=b.fetchers.get(w.key),C=Jr(void 0,k?k.data:void 0);b.fetchers.set(w.key,C)}),new Map(b.fetchers)}function im(v,w,k,C){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");rt(v);let D=(C&&C.flushSync)===!0,B=s||a,V=zs(b.location,b.matches,l,d.v7_prependBasename,k,d.v7_relativeSplatPath,w,C==null?void 0:C.relative),$=Mt(B,V,l),A=qo($,B,V);if(A.active&&A.matches&&($=A.matches),!$){In(v,w,qe(404,{pathname:V}),{flushSync:D});return}let{path:j,submission:U,error:Q}=xd(d.v7_normalizeFormMethod,!0,V,C);if(Q){In(v,w,Q,{flushSync:D});return}let q=oo($,j),Le=(C&&C.preventScrollReset)===!0;if(U&&Cn(U.formMethod)){am(v,w,j,q,$,A.active,D,Le,U);return}kn.set(v,{routeId:w,path:j}),lm(v,w,j,q,$,A.active,D,Le,U)}async function am(v,w,k,C,D,B,V,$,A){al(),kn.delete(v);function j(Ee){if(!Ee.route.action&&!Ee.route.lazy){let er=qe(405,{method:A.formMethod,pathname:k,routeId:w});return In(v,w,er,{flushSync:V}),!0}return!1}if(!B&&j(C))return;let U=b.fetchers.get(v);tt(v,Py(A,U),{flushSync:V});let Q=new AbortController,q=tr(e.history,k,Q.signal,A);if(B){let Ee=await Go(D,new URL(q.url).pathname,q.signal,v);if(Ee.type==="aborted")return;if(Ee.type==="error"){In(v,w,Ee.error,{flushSync:V});return}else if(Ee.matches){if(D=Ee.matches,C=oo(D,k),j(C))return}else{In(v,w,qe(404,{pathname:k}),{flushSync:V});return}}R.set(v,Q);let Le=H,Z=(await Ir("action",b,q,[C],D,v))[C.route.id];if(q.signal.aborted){R.get(v)===Q&&R.delete(v);return}if(d.v7_fetcherPersist&&He.has(v)){if(At(Z)||an(Z)){tt(v,at(void 0));return}}else{if(At(Z))if(R.delete(v),W>Le){tt(v,at(void 0));return}else return ae.add(v),tt(v,Jr(A)),Tt(q,Z,!1,{fetcherSubmission:A,preventScrollReset:$});if(an(Z)){In(v,w,Z.error);return}}if(pt(Z))throw qe(400,{type:"defer-action"});let be=b.navigation.location||b.location,Jt=tr(e.history,be,Q.signal),Ur=s||a,Un=b.navigation.state!=="idle"?Mt(Ur,b.navigation.location,l):b.matches;X(Un,"Didn't find any matches after fetcher action");let Mn=++H;ie.set(v,Mn);let ul=Jr(A,Z.data);b.fetchers.set(v,ul);let[Fr,Rt]=kd(e.history,b,Un,A,be,!1,d.v7_skipActionErrorRevalidation,wn,et,nt,He,kn,ae,Ur,l,[C.route.id,Z]);Rt.filter(Ee=>Ee.key!==v).forEach(Ee=>{let er=Ee.key,rc=b.fetchers.get(er),hm=Jr(void 0,rc?rc.data:void 0);b.fetchers.set(er,hm),rt(er),Ee.controller&&R.set(er,Ee.controller)}),We({fetchers:new Map(b.fetchers)});let Jo=()=>Rt.forEach(Ee=>rt(Ee.key));Q.signal.addEventListener("abort",Jo);let{loaderResults:Zo,fetcherResults:J}=await Xu(b,Un,Fr,Rt,Jt);if(Q.signal.aborted)return;Q.signal.removeEventListener("abort",Jo),ie.delete(v),R.delete(v),Rt.forEach(Ee=>R.delete(Ee.key));let xe=gi(Zo);if(xe)return Tt(Jt,xe.result,!1,{preventScrollReset:$});if(xe=gi(J),xe)return ae.add(xe.key),Tt(Jt,xe.result,!1,{preventScrollReset:$});let{loaderData:Zt,errors:Br}=Cd(b,Un,Zo,void 0,Rt,J,Ve);if(b.fetchers.has(v)){let Ee=at(Z.data);b.fetchers.set(v,Ee)}Ju(Mn),b.navigation.state==="loading"&&Mn>W?(X(O,"Expected pending action"),L&&L.abort(),Gt(b.navigation.location,{matches:Un,loaderData:Zt,errors:Br,fetchers:new Map(b.fetchers)})):(We({errors:Br,loaderData:_d(b.loaderData,Zt,Un,Br),fetchers:new Map(b.fetchers)}),wn=!1)}async function lm(v,w,k,C,D,B,V,$,A){let j=b.fetchers.get(v);tt(v,Jr(A,j?j.data:void 0),{flushSync:V});let U=new AbortController,Q=tr(e.history,k,U.signal);if(B){let Z=await Go(D,new URL(Q.url).pathname,Q.signal,v);if(Z.type==="aborted")return;if(Z.type==="error"){In(v,w,Z.error,{flushSync:V});return}else if(Z.matches)D=Z.matches,C=oo(D,k);else{In(v,w,qe(404,{pathname:k}),{flushSync:V});return}}R.set(v,U);let q=H,ue=(await Ir("loader",b,Q,[C],D,v))[C.route.id];if(pt(ue)&&(ue=await Vu(ue,Q.signal,!0)||ue),R.get(v)===U&&R.delete(v),!Q.signal.aborted){if(He.has(v)){tt(v,at(void 0));return}if(At(ue))if(W>q){tt(v,at(void 0));return}else{ae.add(v),await Tt(Q,ue,!1,{preventScrollReset:$});return}if(an(ue)){In(v,w,ue.error);return}X(!pt(ue),"Unhandled fetcher deferred data"),tt(v,at(ue.data))}}async function Tt(v,w,k,C){let{submission:D,fetcherSubmission:B,preventScrollReset:V,replace:$}=C===void 0?{}:C;w.response.headers.has("X-Remix-Revalidate")&&(wn=!0);let A=w.response.headers.get("Location");X(A,"Expected a Location header on the redirect Response"),A=Pd(A,new URL(v.url),l);let j=Mo(b.location,A,{_isRedirect:!0});if(t){let Z=!1;if(w.response.headers.has("X-Remix-Reload-Document"))Z=!0;else if(Hu.test(A)){const be=e.history.createURL(A);Z=be.origin!==n.location.origin||Ar(be.pathname,l)==null}if(Z){$?n.location.replace(A):n.location.assign(A);return}}L=null;let U=$===!0||w.response.headers.has("X-Remix-Replace")?ke.Replace:ke.Push,{formMethod:Q,formAction:q,formEncType:Le}=b.navigation;!D&&!B&&Q&&q&&Le&&(D=Dd(b.navigation));let ue=D||B;if(iy.has(w.response.status)&&ue&&Cn(ue.formMethod))await _t(U,j,{submission:pe({},ue,{formAction:A}),preventScrollReset:V||I,enableViewTransition:k?oe:void 0});else{let Z=Il(j,D);await _t(U,j,{overrideNavigation:Z,fetcherSubmission:B,preventScrollReset:V||I,enableViewTransition:k?oe:void 0})}}async function Ir(v,w,k,C,D,B){let V,$={};try{V=await py(u,v,w,k,C,D,B,i,o)}catch(A){return C.forEach(j=>{$[j.route.id]={type:ee.error,error:A}}),$}for(let[A,j]of Object.entries(V))if(by(j)){let U=j.result;$[A]={type:ee.redirect,response:vy(U,k,A,D,l,d.v7_relativeSplatPath)}}else $[A]=await my(j);return $}async function Xu(v,w,k,C,D){let B=v.matches,V=Ir("loader",v,D,k,w,null),$=Promise.all(C.map(async U=>{if(U.matches&&U.match&&U.controller){let q=(await Ir("loader",v,tr(e.history,U.path,U.controller.signal),[U.match],U.matches,U.key))[U.match.route.id];return{[U.key]:q}}else return Promise.resolve({[U.key]:{type:ee.error,error:qe(404,{pathname:U.path})}})})),A=await V,j=(await $).reduce((U,Q)=>Object.assign(U,Q),{});return await Promise.all([ky(w,A,D.signal,B,v.loaderData),Sy(w,j,C)]),{loaderResults:A,fetcherResults:j}}function al(){wn=!0,et.push(...sl()),kn.forEach((v,w)=>{R.has(w)&&nt.add(w),rt(w)})}function tt(v,w,k){k===void 0&&(k={}),b.fetchers.set(v,w),We({fetchers:new Map(b.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function In(v,w,k,C){C===void 0&&(C={});let D=Lt(b.matches,w);Xo(v),We({errors:{[D.route.id]:k},fetchers:new Map(b.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function Yu(v){return tn.set(v,(tn.get(v)||0)+1),He.has(v)&&He.delete(v),b.fetchers.get(v)||ay}function Xo(v){let w=b.fetchers.get(v);R.has(v)&&!(w&&w.state==="loading"&&ie.has(v))&&rt(v),kn.delete(v),ie.delete(v),ae.delete(v),d.v7_fetcherPersist&&He.delete(v),nt.delete(v),b.fetchers.delete(v)}function sm(v){let w=(tn.get(v)||0)-1;w<=0?(tn.delete(v),He.add(v),d.v7_fetcherPersist||Xo(v)):tn.set(v,w),We({fetchers:new Map(b.fetchers)})}function rt(v){let w=R.get(v);w&&(w.abort(),R.delete(v))}function qu(v){for(let w of v){let k=Yu(w),C=at(k.data);b.fetchers.set(w,C)}}function Gu(){let v=[],w=!1;for(let k of ae){let C=b.fetchers.get(k);X(C,"Expected fetcher: "+k),C.state==="loading"&&(ae.delete(k),v.push(k),w=!0)}return qu(v),w}function Ju(v){let w=[];for(let[k,C]of ie)if(C<v){let D=b.fetchers.get(k);X(D,"Expected fetcher: "+k),D.state==="loading"&&(rt(k),ie.delete(k),w.push(k))}return qu(w),w.length>0}function um(v,w){let k=b.blockers.get(v)||Gr;return pn.get(v)!==w&&pn.set(v,w),k}function Zu(v){b.blockers.delete(v),pn.delete(v)}function Yo(v,w){let k=b.blockers.get(v)||Gr;X(k.state==="unblocked"&&w.state==="blocked"||k.state==="blocked"&&w.state==="blocked"||k.state==="blocked"&&w.state==="proceeding"||k.state==="blocked"&&w.state==="unblocked"||k.state==="proceeding"&&w.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+w.state);let C=new Map(b.blockers);C.set(v,w),We({blockers:C})}function ec(v){let{currentLocation:w,nextLocation:k,historyAction:C}=v;if(pn.size===0)return;pn.size>1&&Lr(!1,"A router only supports one blocker at a time");let D=Array.from(pn.entries()),[B,V]=D[D.length-1],$=b.blockers.get(B);if(!($&&$.state==="proceeding")&&V({currentLocation:w,nextLocation:k,historyAction:C}))return B}function ll(v){let w=qe(404,{pathname:v}),k=s||a,{matches:C,route:D}=Rd(k);return sl(),{notFoundMatches:C,route:D,error:w}}function sl(v){let w=[];return Ve.forEach((k,C)=>{(!v||v(C))&&(k.cancel(),w.push(C),Ve.delete(C))}),w}function cm(v,w,k){if(x=v,S=w,h=k||null,!m&&b.navigation===Al){m=!0;let C=tc(b.location,b.matches);C!=null&&We({restoreScrollPosition:C})}return()=>{x=null,S=null,h=null}}function nc(v,w){return h&&h(v,w.map(C=>$g(C,b.loaderData)))||v.key}function dm(v,w){if(x&&S){let k=nc(v,w);x[k]=S()}}function tc(v,w){if(x){let k=nc(v,w),C=x[k];if(typeof C=="number")return C}return null}function qo(v,w,k){if(f)if(v){if(Object.keys(v[0].params).length>0)return{active:!0,matches:Mi(w,k,l,!0)}}else return{active:!0,matches:Mi(w,k,l,!0)||[]};return{active:!1,matches:null}}async function Go(v,w,k,C){if(!f)return{type:"success",matches:v};let D=v;for(;;){let B=s==null,V=s||a,$=i;try{await f({signal:k,path:w,matches:D,fetcherKey:C,patch:(U,Q)=>{k.aborted||Ed(U,Q,V,$,o)}})}catch(U){return{type:"error",error:U,partialMatches:D}}finally{B&&!k.aborted&&(a=[...a])}if(k.aborted)return{type:"aborted"};let A=Mt(V,w,l);if(A)return{type:"success",matches:A};let j=Mi(V,w,l,!0);if(!j||D.length===j.length&&D.every((U,Q)=>U.route.id===j[Q].route.id))return{type:"success",matches:null};D=j}}function fm(v){i={},s=oa(v,o,void 0,i)}function pm(v,w){let k=s==null;Ed(v,w,s||a,i,o),k&&(a=[...a],We({}))}return M={get basename(){return l},get future(){return d},get state(){return b},get routes(){return a},get window(){return n},initialize:Jh,subscribe:em,enableScrollRestoration:cm,navigate:Qu,fetch:im,revalidate:nm,createHref:v=>e.history.createHref(v),encodeLocation:v=>e.history.encodeLocation(v),getFetcher:Yu,deleteFetcher:sm,dispose:Zh,getBlocker:um,deleteBlocker:Zu,patchRoutes:pm,_internalFetchControllers:R,_internalActiveDeferreds:Ve,_internalSetRoutes:fm},M}function uy(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function zs(e,n,t,r,o,i,a,s){let l,u;if(a){l=[];for(let d of n)if(l.push(d),d.route.id===a){u=d;break}}else l=n,u=n[n.length-1];let f=Bu(o||".",Fu(l,i),Ar(e.pathname,t)||e.pathname,s==="path");if(o==null&&(f.search=e.search,f.hash=e.hash),(o==null||o===""||o===".")&&u){let d=Wu(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let c=new URLSearchParams(f.search),y=c.getAll("index");c.delete("index"),y.filter(h=>h).forEach(h=>c.append("index",h));let x=c.toString();f.search=x?"?"+x:""}}return r&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Kn([t,f.pathname])),Qt(f)}function xd(e,n,t,r){if(!r||!uy(r))return{path:t};if(r.formMethod&&!wy(r.formMethod))return{path:t,error:qe(405,{method:r.formMethod})};let o=()=>({path:t,error:qe(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),s=Nh(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Cn(a))return o();let c=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,x)=>{let[h,S]=x;return""+y+h+"="+S+`
`},""):String(r.body);return{path:t,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:c}}}else if(r.formEncType==="application/json"){if(!Cn(a))return o();try{let c=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:c,text:void 0}}}catch{return o()}}}X(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=$s(r.formData),u=r.formData;else if(r.body instanceof FormData)l=$s(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Od(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Od(l)}catch{return o()}let f={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Cn(f.formMethod))return{path:t,submission:f};let d=Zn(t);return n&&d.search&&Wu(d.search)&&l.append("index",""),d.search="?"+l,{path:Qt(d),submission:f}}function wd(e,n,t){t===void 0&&(t=!1);let r=e.findIndex(o=>o.route.id===n);return r>=0?e.slice(0,t?r+1:r):e}function kd(e,n,t,r,o,i,a,s,l,u,f,d,c,y,x,h){let S=h?an(h[1])?h[1].error:h[1].data:void 0,m=e.createURL(n.location),p=e.createURL(o),g=t;i&&n.errors?g=wd(t,Object.keys(n.errors)[0],!0):h&&an(h[1])&&(g=wd(t,h[0]));let E=h?h[1].statusCode:void 0,_=a&&E&&E>=400,M=g.filter((O,I)=>{let{route:L}=O;if(L.lazy)return!0;if(L.loader==null)return!1;if(i)return js(L,n.loaderData,n.errors);if(cy(n.loaderData,n.matches[I],O)||l.some(Oe=>Oe===O.route.id))return!0;let oe=n.matches[I],se=O;return Sd(O,pe({currentUrl:m,currentParams:oe.params,nextUrl:p,nextParams:se.params},r,{actionResult:S,actionStatus:E,defaultShouldRevalidate:_?!1:s||m.pathname+m.search===p.pathname+p.search||m.search!==p.search||Th(oe,se)}))}),b=[];return d.forEach((O,I)=>{if(i||!t.some(Me=>Me.route.id===O.routeId)||f.has(I))return;let L=Mt(y,O.path,x);if(!L){b.push({key:I,routeId:O.routeId,path:O.path,matches:null,match:null,controller:null});return}let oe=n.fetchers.get(I),se=oo(L,O.path),Oe=!1;c.has(I)?Oe=!1:u.has(I)?(u.delete(I),Oe=!0):oe&&oe.state!=="idle"&&oe.data===void 0?Oe=s:Oe=Sd(se,pe({currentUrl:m,currentParams:n.matches[n.matches.length-1].params,nextUrl:p,nextParams:t[t.length-1].params},r,{actionResult:S,actionStatus:E,defaultShouldRevalidate:_?!1:s})),Oe&&b.push({key:I,routeId:O.routeId,path:O.path,matches:L,match:se,controller:new AbortController})}),[M,b]}function js(e,n,t){if(e.lazy)return!0;if(!e.loader)return!1;let r=n!=null&&n[e.id]!==void 0,o=t!=null&&t[e.id]!==void 0;return!r&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!o}function cy(e,n,t){let r=!n||t.route.id!==n.route.id,o=e[t.route.id]===void 0;return r||o}function Th(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function Sd(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}function Ed(e,n,t,r,o){var i;let a;if(e){let u=r[e];X(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),a=u.children}else a=t;let s=n.filter(u=>!a.some(f=>Rh(u,f))),l=oa(s,o,[e||"_","patch",String(((i=a)==null?void 0:i.length)||"0")],r);a.push(...l)}function Rh(e,n){return"id"in e&&"id"in n&&e.id===n.id?!0:e.index===n.index&&e.path===n.path&&e.caseSensitive===n.caseSensitive?(!e.children||e.children.length===0)&&(!n.children||n.children.length===0)?!0:e.children.every((t,r)=>{var o;return(o=n.children)==null?void 0:o.some(i=>Rh(t,i))}):!1}async function dy(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=t[e.id];X(o,"No route found in manifest");let i={};for(let a in r){let l=o[a]!==void 0&&a!=="hasErrorBoundary";Lr(!l,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!zg.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,pe({},n(o),{lazy:void 0}))}async function fy(e){let{matches:n}=e,t=n.filter(o=>o.shouldLoad);return(await Promise.all(t.map(o=>o.resolve()))).reduce((o,i,a)=>Object.assign(o,{[t[a].route.id]:i}),{})}async function py(e,n,t,r,o,i,a,s,l,u){let f=i.map(y=>y.route.lazy?dy(y.route,l,s):void 0),d=i.map((y,x)=>{let h=f[x],S=o.some(p=>p.route.id===y.route.id);return pe({},y,{shouldLoad:S,resolve:async p=>(p&&r.method==="GET"&&(y.route.lazy||y.route.loader)&&(S=!0),S?hy(n,r,y,h,p,u):Promise.resolve({type:ee.data,result:void 0}))})}),c=await e({matches:d,request:r,params:i[0].params,fetcherKey:a,context:u});try{await Promise.all(f)}catch{}return c}async function hy(e,n,t,r,o,i){let a,s,l=u=>{let f,d=new Promise((x,h)=>f=h);s=()=>f(),n.signal.addEventListener("abort",s);let c=x=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+t.route.id+"]"))):u({request:n,params:t.params,context:i},...x!==void 0?[x]:[]),y=(async()=>{try{return{type:"data",result:await(o?o(h=>c(h)):c())}}catch(x){return{type:"error",result:x}}})();return Promise.race([y,d])};try{let u=t.route[e];if(r)if(u){let f,[d]=await Promise.all([l(u).catch(c=>{f=c}),r]);if(f!==void 0)throw f;a=d}else if(await r,u=t.route[e],u)a=await l(u);else if(e==="action"){let f=new URL(n.url),d=f.pathname+f.search;throw qe(405,{method:n.method,pathname:d,routeId:t.route.id})}else return{type:ee.data,result:void 0};else if(u)a=await l(u);else{let f=new URL(n.url),d=f.pathname+f.search;throw qe(404,{pathname:d})}X(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ee.error,result:u}}finally{s&&n.signal.removeEventListener("abort",s)}return a}async function my(e){let{result:n,type:t}=e;if(Dh(n)){let d;try{let c=n.headers.get("Content-Type");c&&/\bapplication\/json\b/.test(c)?n.body==null?d=null:d=await n.json():d=await n.text()}catch(c){return{type:ee.error,error:c}}return t===ee.error?{type:ee.error,error:new ia(n.status,n.statusText,d),statusCode:n.status,headers:n.headers}:{type:ee.data,data:d,statusCode:n.status,headers:n.headers}}if(t===ee.error){if(Nd(n)){var r,o;if(n.data instanceof Error){var i,a;return{type:ee.error,error:n.data,statusCode:(i=n.init)==null?void 0:i.status,headers:(a=n.init)!=null&&a.headers?new Headers(n.init.headers):void 0}}return{type:ee.error,error:new ia(((r=n.init)==null?void 0:r.status)||500,void 0,n.data),statusCode:Lo(n)?n.status:void 0,headers:(o=n.init)!=null&&o.headers?new Headers(n.init.headers):void 0}}return{type:ee.error,error:n,statusCode:Lo(n)?n.status:void 0}}if(xy(n)){var s,l;return{type:ee.deferred,deferredData:n,statusCode:(s=n.init)==null?void 0:s.status,headers:((l=n.init)==null?void 0:l.headers)&&new Headers(n.init.headers)}}if(Nd(n)){var u,f;return{type:ee.data,data:n.data,statusCode:(u=n.init)==null?void 0:u.status,headers:(f=n.init)!=null&&f.headers?new Headers(n.init.headers):void 0}}return{type:ee.data,data:n}}function vy(e,n,t,r,o,i){let a=e.headers.get("Location");if(X(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Hu.test(a)){let s=r.slice(0,r.findIndex(l=>l.route.id===t)+1);a=zs(new URL(n.url),s,o,!0,a,i),e.headers.set("Location",a)}return e}function Pd(e,n,t){if(Hu.test(e)){let r=e,o=r.startsWith("//")?new URL(n.protocol+r):new URL(r),i=Ar(o.pathname,t)!=null;if(o.origin===n.origin&&i)return o.pathname+o.search+o.hash}return e}function tr(e,n,t,r){let o=e.createURL(Nh(n)).toString(),i={signal:t};if(r&&Cn(r.formMethod)){let{formMethod:a,formEncType:s}=r;i.method=a.toUpperCase(),s==="application/json"?(i.headers=new Headers({"Content-Type":s}),i.body=JSON.stringify(r.json)):s==="text/plain"?i.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?i.body=$s(r.formData):i.body=r.formData}return new Request(o,i)}function $s(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,typeof r=="string"?r:r.name);return n}function Od(e){let n=new FormData;for(let[t,r]of e.entries())n.append(t,r);return n}function gy(e,n,t,r,o){let i={},a=null,s,l=!1,u={},f=t&&an(t[1])?t[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in n))return;let c=d.route.id,y=n[c];if(X(!At(y),"Cannot handle redirect results in processLoaderData"),an(y)){let x=y.error;if(f!==void 0&&(x=f,f=void 0),a=a||{},o)a[c]=x;else{let h=Lt(e,c);a[h.route.id]==null&&(a[h.route.id]=x)}i[c]=void 0,l||(l=!0,s=Lo(y.error)?y.error.status:500),y.headers&&(u[c]=y.headers)}else pt(y)?(r.set(c,y.deferredData),i[c]=y.deferredData.data,y.statusCode!=null&&y.statusCode!==200&&!l&&(s=y.statusCode),y.headers&&(u[c]=y.headers)):(i[c]=y.data,y.statusCode&&y.statusCode!==200&&!l&&(s=y.statusCode),y.headers&&(u[c]=y.headers))}),f!==void 0&&t&&(a={[t[0]]:f},i[t[0]]=void 0),{loaderData:i,errors:a,statusCode:s||200,loaderHeaders:u}}function Cd(e,n,t,r,o,i,a){let{loaderData:s,errors:l}=gy(n,t,r,a,!1);return o.forEach(u=>{let{key:f,match:d,controller:c}=u,y=i[f];if(X(y,"Did not find corresponding fetcher result"),!(c&&c.signal.aborted))if(an(y)){let x=Lt(e.matches,d==null?void 0:d.route.id);l&&l[x.route.id]||(l=pe({},l,{[x.route.id]:y.error})),e.fetchers.delete(f)}else if(At(y))X(!1,"Unhandled fetcher revalidation redirect");else if(pt(y))X(!1,"Unhandled fetcher deferred data");else{let x=at(y.data);e.fetchers.set(f,x)}}),{loaderData:s,errors:l}}function _d(e,n,t,r){let o=pe({},n);for(let i of t){let a=i.route.id;if(n.hasOwnProperty(a)?n[a]!==void 0&&(o[a]=n[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function Td(e){return e?an(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Lt(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Rd(e){let n=e.length===1?e[0]:e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function qe(e,n){let{pathname:t,routeId:r,method:o,type:i,message:a}=n===void 0?{}:n,s="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(s="Bad Request",o&&t&&r?l="You made a "+o+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?l="defer() is not supported in actions":i==="invalid-body"&&(l="Unable to encode submission body")):e===403?(s="Forbidden",l='Route "'+r+'" does not match URL "'+t+'"'):e===404?(s="Not Found",l='No route matches URL "'+t+'"'):e===405&&(s="Method Not Allowed",o&&t&&r?l="You made a "+o.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(l='Invalid request method "'+o.toUpperCase()+'"')),new ia(e||500,s,new Error(l),!0)}function gi(e){let n=Object.entries(e);for(let t=n.length-1;t>=0;t--){let[r,o]=n[t];if(At(o))return{key:r,result:o}}}function Nh(e){let n=typeof e=="string"?Zn(e):e;return Qt(pe({},n,{hash:""}))}function yy(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function by(e){return Dh(e.result)&&oy.has(e.result.status)}function pt(e){return e.type===ee.deferred}function an(e){return e.type===ee.error}function At(e){return(e&&e.type)===ee.redirect}function Nd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function xy(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function Dh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function wy(e){return ry.has(e.toLowerCase())}function Cn(e){return ny.has(e.toLowerCase())}async function ky(e,n,t,r,o){let i=Object.entries(n);for(let a=0;a<i.length;a++){let[s,l]=i[a],u=e.find(c=>(c==null?void 0:c.route.id)===s);if(!u)continue;let f=r.find(c=>c.route.id===u.route.id),d=f!=null&&!Th(f,u)&&(o&&o[u.route.id])!==void 0;pt(l)&&d&&await Vu(l,t,!1).then(c=>{c&&(n[s]=c)})}}async function Sy(e,n,t){for(let r=0;r<t.length;r++){let{key:o,routeId:i,controller:a}=t[r],s=n[o];e.find(u=>(u==null?void 0:u.route.id)===i)&&pt(s)&&(X(a,"Expected an AbortController for revalidating fetcher deferred result"),await Vu(s,a.signal,!0).then(u=>{u&&(n[o]=u)}))}}async function Vu(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:ee.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ee.error,error:o}}return{type:ee.data,data:e.deferredData.data}}}function Wu(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function oo(e,n){let t=typeof n=="string"?Zn(n).search:n.search;if(e[e.length-1].route.index&&Wu(t||""))return e[e.length-1];let r=Oh(e);return r[r.length-1]}function Dd(e){let{formMethod:n,formAction:t,formEncType:r,text:o,formData:i,json:a}=e;if(!(!n||!t||!r)){if(o!=null)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:n,formAction:t,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:a,text:void 0}}}function Il(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Ey(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Jr(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function Py(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function at(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Oy(e,n){try{let t=e.sessionStorage.getItem(_h);if(t){let r=JSON.parse(t);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&n.set(o,new Set(i||[]))}}catch{}}function Cy(e,n){if(n.size>0){let t={};for(let[r,o]of n)t[r]=[...o];try{e.sessionStorage.setItem(_h,JSON.stringify(t))}catch(r){Lr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zo.apply(this,arguments)}const Ga=P.createContext(null),Mh=P.createContext(null),Yt=P.createContext(null),Ja=P.createContext(null),qt=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Lh=P.createContext(null);function _y(e,n){let{relative:t}=n===void 0?{}:n;Vo()||X(!1);let{basename:r,navigator:o}=P.useContext(Yt),{hash:i,pathname:a,search:s}=jh(e,{relative:t}),l=a;return r!=="/"&&(l=a==="/"?r:Kn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function Vo(){return P.useContext(Ja)!=null}function Za(){return Vo()||X(!1),P.useContext(Ja).location}function zh(e){P.useContext(Yt).static||P.useLayoutEffect(e)}function el(){let{isDataRoute:e}=P.useContext(qt);return e?Uy():Ty()}function Ty(){Vo()||X(!1);let e=P.useContext(Ga),{basename:n,future:t,navigator:r}=P.useContext(Yt),{matches:o}=P.useContext(qt),{pathname:i}=Za(),a=JSON.stringify(Fu(o,t.v7_relativeSplatPath)),s=P.useRef(!1);return zh(()=>{s.current=!0}),P.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=Bu(u,JSON.parse(a),i,f.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Kn([n,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[n,r,a,i,e])}function jh(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=P.useContext(Yt),{matches:o}=P.useContext(qt),{pathname:i}=Za(),a=JSON.stringify(Fu(o,r.v7_relativeSplatPath));return P.useMemo(()=>Bu(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function Ry(e,n,t,r){Vo()||X(!1);let{navigator:o}=P.useContext(Yt),{matches:i}=P.useContext(qt),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Za(),f;if(n){var d;let S=typeof n=="string"?Zn(n):n;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||X(!1),f=S}else f=u;let c=f.pathname||"/",y=c;if(l!=="/"){let S=l.replace(/^\//,"").split("/");y="/"+c.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=Mt(e,{pathname:y}),h=zy(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:Kn([l,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Kn([l,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,t,r);return n&&h?P.createElement(Ja.Provider,{value:{location:zo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ke.Pop}},h):h}function Ny(){let e=Iy(),n=Lo(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},n),t?P.createElement("pre",{style:o},t):null,i)}const Dy=P.createElement(Ny,null);class My extends P.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?P.createElement(qt.Provider,{value:this.props.routeContext},P.createElement(Lh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ly(e){let{routeContext:n,match:t,children:r}=e,o=P.useContext(Ga);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),P.createElement(qt.Provider,{value:n},r)}function zy(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let f=a.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||X(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:c,errors:y}=t,x=d.route.loader&&c[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||x){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,c)=>{let y,x=!1,h=null,S=null;t&&(y=s&&d.route.id?s[d.route.id]:void 0,h=d.route.errorElement||Dy,l&&(u<0&&c===0?(Fy("route-fallback",!1),x=!0,S=null):u===c&&(x=!0,S=d.route.hydrateFallbackElement||null)));let m=n.concat(a.slice(0,c+1)),p=()=>{let g;return y?g=h:x?g=S:d.route.Component?g=P.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,P.createElement(Ly,{match:d,routeContext:{outlet:f,matches:m,isDataRoute:t!=null},children:g})};return t&&(d.route.ErrorBoundary||d.route.errorElement||c===0)?P.createElement(My,{location:t.location,revalidation:t.revalidation,component:h,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var $h=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($h||{}),aa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(aa||{});function jy(e){let n=P.useContext(Ga);return n||X(!1),n}function $y(e){let n=P.useContext(Mh);return n||X(!1),n}function Ay(e){let n=P.useContext(qt);return n||X(!1),n}function Ah(e){let n=Ay(),t=n.matches[n.matches.length-1];return t.route.id||X(!1),t.route.id}function Iy(){var e;let n=P.useContext(Lh),t=$y(aa.UseRouteError),r=Ah(aa.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Uy(){let{router:e}=jy($h.UseNavigateStable),n=Ah(aa.UseNavigateStable),t=P.useRef(!1);return zh(()=>{t.current=!0}),P.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,zo({fromRouteId:n},i)))},[e,n])}const Md={};function Fy(e,n,t){!n&&!Md[e]&&(Md[e]=!0)}function By(e,n){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!n||n.v7_relativeSplatPath),n&&(n.v7_fetcherPersist,n.v7_normalizeFormMethod,n.v7_partialHydration,n.v7_skipActionErrorRevalidation)}function Hy(e){let{basename:n="/",children:t=null,location:r,navigationType:o=ke.Pop,navigator:i,static:a=!1,future:s}=e;Vo()&&X(!1);let l=n.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:i,static:a,future:zo({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=Zn(r));let{pathname:f="/",search:d="",hash:c="",state:y=null,key:x="default"}=r,h=P.useMemo(()=>{let S=Ar(f,l);return S==null?null:{location:{pathname:S,search:d,hash:c,state:y,key:x},navigationType:o}},[l,f,d,c,y,x,o]);return h==null?null:P.createElement(Yt.Provider,{value:u},P.createElement(Ja.Provider,{children:t,value:h}))}new Promise(()=>{});function Vy(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:P.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:P.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:P.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jo(){return jo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},jo.apply(this,arguments)}function Wy(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Qy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ky(e,n){return e.button===0&&(!n||n==="_self")&&!Qy(e)}const Xy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yy="6";try{window.__reactRouterVersion=Yy}catch{}function qy(e,n){return sy({basename:n==null?void 0:n.basename,future:jo({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:Dg({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||Gy(),routes:e,mapRouteProperties:Vy,dataStrategy:n==null?void 0:n.dataStrategy,patchRoutesOnNavigation:n==null?void 0:n.patchRoutesOnNavigation,window:n==null?void 0:n.window}).initialize()}function Gy(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=jo({},n,{errors:Jy(n.errors)})),n}function Jy(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,o]of n)if(o&&o.__type==="RouteErrorResponse")t[r]=new ia(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",t[r]=a}catch{}}if(t[r]==null){let i=new Error(o.message);i.stack="",t[r]=i}}else t[r]=o;return t}const Zy=P.createContext({isTransitioning:!1}),e1=P.createContext(new Map),n1="startTransition",Ld=Rm[n1],t1="flushSync",zd=Fv[t1];function r1(e){Ld?Ld(e):e()}function Zr(e){zd?zd(e):e()}class o1{constructor(){this.status="pending",this.promise=new Promise((n,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",n(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}}function i1(e){let{fallbackElement:n,router:t,future:r}=e,[o,i]=P.useState(t.state),[a,s]=P.useState(),[l,u]=P.useState({isTransitioning:!1}),[f,d]=P.useState(),[c,y]=P.useState(),[x,h]=P.useState(),S=P.useRef(new Map),{v7_startTransition:m}=r||{},p=P.useCallback(O=>{m?r1(O):O()},[m]),g=P.useCallback((O,I)=>{let{deletedFetchers:L,flushSync:oe,viewTransitionOpts:se}=I;O.fetchers.forEach((Me,wn)=>{Me.data!==void 0&&S.current.set(wn,Me.data)}),L.forEach(Me=>S.current.delete(Me));let Oe=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!se||Oe){oe?Zr(()=>i(O)):p(()=>i(O));return}if(oe){Zr(()=>{c&&(f&&f.resolve(),c.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:se.currentLocation,nextLocation:se.nextLocation})});let Me=t.window.document.startViewTransition(()=>{Zr(()=>i(O))});Me.finished.finally(()=>{Zr(()=>{d(void 0),y(void 0),s(void 0),u({isTransitioning:!1})})}),Zr(()=>y(Me));return}c?(f&&f.resolve(),c.skipTransition(),h({state:O,currentLocation:se.currentLocation,nextLocation:se.nextLocation})):(s(O),u({isTransitioning:!0,flushSync:!1,currentLocation:se.currentLocation,nextLocation:se.nextLocation}))},[t.window,c,f,S,p]);P.useLayoutEffect(()=>t.subscribe(g),[t,g]),P.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new o1)},[l]),P.useEffect(()=>{if(f&&a&&t.window){let O=a,I=f.promise,L=t.window.document.startViewTransition(async()=>{p(()=>i(O)),await I});L.finished.finally(()=>{d(void 0),y(void 0),s(void 0),u({isTransitioning:!1})}),y(L)}},[p,a,f,t.window]),P.useEffect(()=>{f&&a&&o.location.key===a.location.key&&f.resolve()},[f,c,o.location,a]),P.useEffect(()=>{!l.isTransitioning&&x&&(s(x.state),u({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),h(void 0))},[l.isTransitioning,x]),P.useEffect(()=>{},[]);let E=P.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:O=>t.navigate(O),push:(O,I,L)=>t.navigate(O,{state:I,preventScrollReset:L==null?void 0:L.preventScrollReset}),replace:(O,I,L)=>t.navigate(O,{replace:!0,state:I,preventScrollReset:L==null?void 0:L.preventScrollReset})}),[t]),_=t.basename||"/",M=P.useMemo(()=>({router:t,navigator:E,static:!1,basename:_}),[t,E,_]),b=P.useMemo(()=>({v7_relativeSplatPath:t.future.v7_relativeSplatPath}),[t.future.v7_relativeSplatPath]);return P.useEffect(()=>By(r,t.future),[r,t.future]),P.createElement(P.Fragment,null,P.createElement(Ga.Provider,{value:M},P.createElement(Mh.Provider,{value:o},P.createElement(e1.Provider,{value:S.current},P.createElement(Zy.Provider,{value:l},P.createElement(Hy,{basename:_,location:o.location,navigationType:o.historyAction,navigator:E,future:b},o.initialized||t.future.v7_partialHydration?P.createElement(a1,{routes:t.routes,future:t.future,state:o}):n))))),null)}const a1=P.memo(l1);function l1(e){let{routes:n,future:t,state:r}=e;return Ry(n,void 0,r,t)}const s1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,As=P.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:f,viewTransition:d}=n,c=Wy(n,Xy),{basename:y}=P.useContext(Yt),x,h=!1;if(typeof u=="string"&&u1.test(u)&&(x=u,s1))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),_=Ar(E.pathname,y);E.origin===g.origin&&_!=null?u=_+E.search+E.hash:h=!0}catch{}let S=_y(u,{relative:o}),m=c1(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:o,viewTransition:d});function p(g){r&&r(g),g.defaultPrevented||m(g)}return P.createElement("a",jo({},c,{href:x||S,onClick:h||i?r:p,ref:t,target:l}))});var jd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jd||(jd={}));var $d;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($d||($d={}));function c1(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=n===void 0?{}:n,l=el(),u=Za(),f=jh(e,{relative:a});return P.useCallback(d=>{if(Ky(d,t)){d.preventDefault();let c=r!==void 0?r:Qt(u)===Qt(f);l(e,{replace:c,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,f,r,o,t,e,i,a,s])}/*! js-cookie v3.0.5 | MIT */function yi(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)e[r]=t[r]}return e}var d1={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Is(e,n){function t(o,i,a){if(!(typeof document>"u")){a=yi({},n,a),typeof a.expires=="number"&&(a.expires=new Date(Date.now()+a.expires*864e5)),a.expires&&(a.expires=a.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var l in a)a[l]&&(s+="; "+l,a[l]!==!0&&(s+="="+a[l].split(";")[0]));return document.cookie=o+"="+e.write(i,o)+s}}function r(o){if(!(typeof document>"u"||arguments.length&&!o)){for(var i=document.cookie?document.cookie.split("; "):[],a={},s=0;s<i.length;s++){var l=i[s].split("="),u=l.slice(1).join("=");try{var f=decodeURIComponent(l[0]);if(a[f]=e.read(u,f),o===f)break}catch{}}return o?a[o]:a}}return Object.create({set:t,get:r,remove:function(o,i){t(o,"",yi({},i,{expires:-1}))},withAttributes:function(o){return Is(this.converter,yi({},this.attributes,o))},withConverter:function(o){return Is(yi({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(e)}})}var f1=Is(d1,{path:"/"});async function Wo(e,n={}){n.method=n.method||"GET",n.headers=n.headers||{},n.method.toUpperCase()!=="GET"&&(n.headers["Content-Type"]=n.headers["Content-Type"]||"application/json",n.headers["XSRF-Token"]=f1.get("XSRF-TOKEN"));const t=await window.fetch(e,n);if(t.status>=400)throw t;return t}const Ih="session/GET_USER",p1="session/ADD_USER",h1="session/REMOVE_USER",Uh="session/LOGIN_USER",Fh="session/LOGOUT_USER",m1="session/SIGNUP_USER",v1=e=>({type:Ih,user:e}),g1=e=>({type:Uh,user:e}),y1=()=>({type:Fh}),la=()=>async e=>{const n=await Wo("/api/session");if(n.ok){const t=await n.json();return e(v1(t)),t}},b1=e=>async n=>{const t=await Wo("/api/session",{method:"POST",body:JSON.stringify(e)});if(t.ok){const r=await t.json();return n(g1(r)),r}},Bh=()=>async e=>{(await Wo("/api/session",{method:"DELETE"})).ok&&e(y1())},x1={user:null,allUsers:[]},w1=(e=x1,n)=>{switch(n.type){case Ih:return{...e,user:n.user};case p1:return{...e,user:n.user};case h1:return{...e,user:null};case Uh:return{...e,user:n.user};case Fh:return{...e,user:null};case m1:return{...e,user:n.user};default:return e}};function k1(){const e=qa(),n=el(),t=Mr(c=>{var y;return(y=c.session.user)==null?void 0:y.user});P.useEffect(()=>{e(la()),t&&n("/admin")},[t,n,e]);const[r,o]=P.useState(""),[i,a]=P.useState(""),[s,l]=P.useState({}),[u,f]=P.useState(!0);P.useEffect(()=>{o(""),a(""),l({}),f(!0)},[]),P.useEffect(()=>{const c={};r.length>0&&r.length<4&&(c.credential="Username or Email must be at least 4 characters"),i.length>0&&i.length<6&&(c.password="Password must be at least 6 characters"),l(c),f(r.length<4||i.length<6)},[r,i]);const d=async c=>{if(c.preventDefault(),u)return;const y={credential:r,password:i};try{await e(b1(y)),n("/admin")}catch{l({...s,server:"Login failed. Please check your credentials."})}};return N.jsx("div",{className:"login-container",children:N.jsxs("form",{onSubmit:d,className:"login-form",children:[N.jsx("h1",{children:"Log In"}),s.message&&N.jsx("p",{className:"error-message",children:s.message}),N.jsxs("div",{className:"login-items",children:[N.jsxs("label",{id:"userName-field",children:["Username or Email",N.jsx("input",{type:"text",className:"login-box",value:r,onChange:c=>o(c.target.value),required:!0})]}),s.credential&&N.jsx("p",{className:"error-message",children:s.credential}),N.jsxs("label",{id:"password-field",children:["Password",N.jsx("input",{type:"password",className:"login-box",value:i,onChange:c=>a(c.target.value),required:!0})]}),s.password&&N.jsx("p",{className:"error-message",children:s.password})]}),N.jsx("button",{type:"submit",id:"login-button",disabled:u,children:"Log In"})]})})}const S1=({teamName:e,color:n,logoUrl:t,score:r,tempMax:o})=>{const i=o>0?r/o*100:0;return N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"score-scale-container",children:[N.jsx("div",{className:"team-name",children:e}),N.jsxs("div",{className:"scale-wrapper",children:[N.jsx("div",{className:"scale-bar",children:N.jsx("div",{className:"scale-fill",style:{height:`${i}%`,backgroundColor:n}})}),N.jsxs("div",{className:"team-score",children:[N.jsxs("div",{className:"score-text",children:[r," pts"]}),N.jsx("div",{className:"team-logo",children:N.jsx("img",{src:t,alt:`${e} logo`})})]})]})]}),N.jsxs("div",{className:"score-scale-container-mobile",children:[N.jsxs("div",{className:"team-score-mobile",children:[N.jsxs("div",{className:"score-text-mobile",children:[r," pts"]}),N.jsx("div",{className:"team-logo-mobile",children:N.jsx("img",{src:t,alt:`${e} logo`})})]}),N.jsxs("div",{className:"scale-wrapper-mobile",children:[N.jsx("div",{className:"scale-bar-mobile",children:N.jsx("div",{className:"scale-fill-mobile",style:{height:"100%",width:`${i}%`,backgroundColor:n}})}),N.jsx("div",{className:"team-name-mobile",children:e})]})]})]})};const E1=({ogTeams:e})=>{const[n,t]=P.useState(e),r=Math.max(...n.map(o=>o.score),1);return N.jsx("div",{className:"team-score-board",children:n.map(o=>N.jsx("div",{children:N.jsx(S1,{teamName:o.name,color:o.color,score:o.score,tempMax:r,logoUrl:o.logoUrl})},o.name))})},Hh="teams/GET_TEAMS",P1="teams/ADD_TEAM",O1="teams/UPDATE_TEAM",C1="teams/DELETE_TEAM",_1="teams/GET_TEAM",T1="teams/INCREASE_SCORE",R1="teams/DECREASE_SCORE",N1="teams/UPDATE_TEAM_SCORE",D1=e=>({type:Hh,teams:e}),$o=()=>async e=>{const n=await Wo("/api/teams");if(n.ok){const{teams:t}=await n.json();e(D1(t))}},M1=(e,n)=>async t=>{const r=await Wo(`/api/teams/${e}/score`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({pointsToAdd:n})});if(r.ok){const o=await r.json();t({type:"UPDATE_TEAM_SCORE",team:o})}},L1={allTeams:[],team:null},z1=(e=L1,n)=>{switch(n.type){case Hh:return{...e,allTeams:n.teams};case P1:return{...e,allTeams:[...e.allTeams,n.team]};case O1:return{...e,allTeams:e.allTeams.map(t=>t.id===n.team.id?n.team:t)};case C1:return{...e,allTeams:e.allTeams.filter(t=>t.id!==n.teamId)};case _1:return{...e,team:n.team};case T1:return{...e,allTeams:e.allTeams.map(t=>t.id===n.teamId?{...t,score:t.score+n.points}:t)};case R1:return{...e,allTeams:e.allTeams.map(t=>t.id===n.teamId?{...t,score:t.score-n.points}:t)};case N1:return{...e,allTeams:{...e.allTeams,[n.team.id]:n.team}};default:return e}};function Te(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Te(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ne=function(){return ne=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},ne.apply(this,arguments)};function sa(e){return sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},sa(e)}var j1=/^\s+/,$1=/\s+$/;function F(e,n){if(n=n||{},(e=e||"")instanceof F)return e;if(!(this instanceof F))return new F(e,n);var t=function(r){var o={r:0,g:0,b:0},i=1,a=null,s=null,l=null,u=!1,f=!1;typeof r=="string"&&(r=function(x){x=x.replace(j1,"").replace($1,"").toLowerCase();var h,S=!1;if(Us[x])x=Us[x],S=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(h=En.rgb.exec(x))?{r:h[1],g:h[2],b:h[3]}:(h=En.rgba.exec(x))?{r:h[1],g:h[2],b:h[3],a:h[4]}:(h=En.hsl.exec(x))?{h:h[1],s:h[2],l:h[3]}:(h=En.hsla.exec(x))?{h:h[1],s:h[2],l:h[3],a:h[4]}:(h=En.hsv.exec(x))?{h:h[1],s:h[2],v:h[3]}:(h=En.hsva.exec(x))?{h:h[1],s:h[2],v:h[3],a:h[4]}:(h=En.hex8.exec(x))?{r:rn(h[1]),g:rn(h[2]),b:rn(h[3]),a:Hd(h[4]),format:S?"name":"hex8"}:(h=En.hex6.exec(x))?{r:rn(h[1]),g:rn(h[2]),b:rn(h[3]),format:S?"name":"hex"}:(h=En.hex4.exec(x))?{r:rn(h[1]+""+h[1]),g:rn(h[2]+""+h[2]),b:rn(h[3]+""+h[3]),a:Hd(h[4]+""+h[4]),format:S?"name":"hex8"}:(h=En.hex3.exec(x))?{r:rn(h[1]+""+h[1]),g:rn(h[2]+""+h[2]),b:rn(h[3]+""+h[3]),format:S?"name":"hex"}:!1}(r)),sa(r)=="object"&&(Fn(r.r)&&Fn(r.g)&&Fn(r.b)?(d=r.r,c=r.g,y=r.b,o={r:255*he(d,255),g:255*he(c,255),b:255*he(y,255)},u=!0,f=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Fn(r.h)&&Fn(r.s)&&Fn(r.v)?(a=io(r.s),s=io(r.v),o=function(x,h,S){x=6*he(x,360),h=he(h,100),S=he(S,100);var m=Math.floor(x),p=x-m,g=S*(1-h),E=S*(1-p*h),_=S*(1-(1-p)*h),M=m%6,b=[S,E,g,g,_,S][M],O=[_,S,S,E,g,g][M],I=[g,g,_,S,S,E][M];return{r:255*b,g:255*O,b:255*I}}(r.h,a,s),u=!0,f="hsv"):Fn(r.h)&&Fn(r.s)&&Fn(r.l)&&(a=io(r.s),l=io(r.l),o=function(x,h,S){var m,p,g;function E(b,O,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?b+6*(O-b)*I:I<.5?O:I<2/3?b+(O-b)*(2/3-I)*6:b}if(x=he(x,360),h=he(h,100),S=he(S,100),h===0)m=p=g=S;else{var _=S<.5?S*(1+h):S+h-S*h,M=2*S-_;m=E(M,_,x+1/3),p=E(M,_,x),g=E(M,_,x-1/3)}return{r:255*m,g:255*p,b:255*g}}(r.h,a,l),u=!0,f="hsl"),r.hasOwnProperty("a")&&(i=r.a));var d,c,y;return i=Vh(i),{ok:u,format:r.format||f,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function Ad(e,n,t){e=he(e,255),n=he(n,255),t=he(t,255);var r,o,i=Math.max(e,n,t),a=Math.min(e,n,t),s=(i+a)/2;if(i==a)r=o=0;else{var l=i-a;switch(o=s>.5?l/(2-i-a):l/(i+a),i){case e:r=(n-t)/l+(n<t?6:0);break;case n:r=(t-e)/l+2;break;case t:r=(e-n)/l+4}r/=6}return{h:r,s:o,l:s}}function Id(e,n,t){e=he(e,255),n=he(n,255),t=he(t,255);var r,o,i=Math.max(e,n,t),a=Math.min(e,n,t),s=i,l=i-a;if(o=i===0?0:l/i,i==a)r=0;else{switch(i){case e:r=(n-t)/l+(n<t?6:0);break;case n:r=(t-e)/l+2;break;case t:r=(e-n)/l+4}r/=6}return{h:r,s:o,v:s}}function Ud(e,n,t,r){var o=[Tn(Math.round(e).toString(16)),Tn(Math.round(n).toString(16)),Tn(Math.round(t).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Fd(e,n,t,r){return[Tn(Wh(r)),Tn(Math.round(e).toString(16)),Tn(Math.round(n).toString(16)),Tn(Math.round(t).toString(16))].join("")}function A1(e,n){n=n===0?0:n||10;var t=F(e).toHsl();return t.s-=n/100,t.s=nl(t.s),F(t)}function I1(e,n){n=n===0?0:n||10;var t=F(e).toHsl();return t.s+=n/100,t.s=nl(t.s),F(t)}function U1(e){return F(e).desaturate(100)}function F1(e,n){n=n===0?0:n||10;var t=F(e).toHsl();return t.l+=n/100,t.l=nl(t.l),F(t)}function B1(e,n){n=n===0?0:n||10;var t=F(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),F(t)}function H1(e,n){n=n===0?0:n||10;var t=F(e).toHsl();return t.l-=n/100,t.l=nl(t.l),F(t)}function V1(e,n){var t=F(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,F(t)}function W1(e){var n=F(e).toHsl();return n.h=(n.h+180)%360,F(n)}function Bd(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=F(e).toHsl(),r=[F(e)],o=360/n,i=1;i<n;i++)r.push(F({h:(t.h+i*o)%360,s:t.s,l:t.l}));return r}function Q1(e){var n=F(e).toHsl(),t=n.h;return[F(e),F({h:(t+72)%360,s:n.s,l:n.l}),F({h:(t+216)%360,s:n.s,l:n.l})]}function K1(e,n,t){n=n||6,t=t||30;var r=F(e).toHsl(),o=360/t,i=[F(e)];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,i.push(F(r));return i}function X1(e,n){n=n||6;for(var t=F(e).toHsv(),r=t.h,o=t.s,i=t.v,a=[],s=1/n;n--;)a.push(F({h:r,s:o,v:i})),i=(i+s)%1;return a}F.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Vh(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Id(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Id(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Ad(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Ad(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Ud(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,t,r,o,i){var a=[Tn(Math.round(n).toString(16)),Tn(Math.round(t).toString(16)),Tn(Math.round(r).toString(16)),Tn(Wh(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*he(this._r,255))+"%",g:Math.round(100*he(this._g,255))+"%",b:Math.round(100*he(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*he(this._r,255))+"%, "+Math.round(100*he(this._g,255))+"%, "+Math.round(100*he(this._b,255))+"%)":"rgba("+Math.round(100*he(this._r,255))+"%, "+Math.round(100*he(this._g,255))+"%, "+Math.round(100*he(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Y1[Ud(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+Fd(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=F(e);t="#"+Fd(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return F(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(F1,arguments)},brighten:function(){return this._applyModification(B1,arguments)},darken:function(){return this._applyModification(H1,arguments)},desaturate:function(){return this._applyModification(A1,arguments)},saturate:function(){return this._applyModification(I1,arguments)},greyscale:function(){return this._applyModification(U1,arguments)},spin:function(){return this._applyModification(V1,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(K1,arguments)},complement:function(){return this._applyCombination(W1,arguments)},monochromatic:function(){return this._applyCombination(X1,arguments)},splitcomplement:function(){return this._applyCombination(Q1,arguments)},triad:function(){return this._applyCombination(Bd,[3])},tetrad:function(){return this._applyCombination(Bd,[4])}},F.fromRatio=function(e,n){if(sa(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:io(e[r]));e=t}return F(e,n)},F.equals=function(e,n){return!(!e||!n)&&F(e).toRgbString()==F(n).toRgbString()},F.random=function(){return F.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},F.mix=function(e,n,t){t=t===0?0:t||50;var r=F(e).toRgb(),o=F(n).toRgb(),i=t/100;return F({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},F.readability=function(e,n){var t=F(e),r=F(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},F.isReadable=function(e,n,t){var r,o,i=F.readability(e,n);switch(o=!1,(r=function(a){var s,l;return s=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),l=(a.size||"small").toLowerCase(),s!=="AA"&&s!=="AAA"&&(s="AA"),l!=="small"&&l!=="large"&&(l="small"),{level:s,size:l}}(t)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},F.mostReadable=function(e,n,t){var r,o,i,a,s=null,l=0;o=(t=t||{}).includeFallbackColors,i=t.level,a=t.size;for(var u=0;u<n.length;u++)(r=F.readability(e,n[u]))>l&&(l=r,s=F(n[u]));return F.isReadable(e,s,{level:i,size:a})||!o?s:(t.includeFallbackColors=!1,F.mostReadable(e,["#fff","#000"],t))};var Us=F.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Y1=F.hexNames=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}(Us);function Vh(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function he(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function nl(e){return Math.min(1,Math.max(0,e))}function rn(e){return parseInt(e,16)}function Tn(e){return e.length==1?"0"+e:""+e}function io(e){return e<=1&&(e=100*e+"%"),e}function Wh(e){return Math.round(255*parseFloat(e)).toString(16)}function Hd(e){return rn(e)/255}var it,bi,xi,En=(bi="[\\s|\\(]+("+(it="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+it+")[,|\\s]+("+it+")\\s*\\)?",xi="[\\s|\\(]+("+it+")[,|\\s]+("+it+")[,|\\s]+("+it+")[,|\\s]+("+it+")\\s*\\)?",{CSS_UNIT:new RegExp(it),rgb:new RegExp("rgb"+bi),rgba:new RegExp("rgba"+xi),hsl:new RegExp("hsl"+bi),hsla:new RegExp("hsla"+xi),hsv:new RegExp("hsv"+bi),hsva:new RegExp("hsva"+xi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Fn(e){return!!En.CSS_UNIT.exec(e)}var tl=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,o=parseFloat(n),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:n}},rl=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(t.fontSize){var i=t.fontSize;o=function(a,s){var l={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&s.indexOf(u)<0&&(l[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var f=0;for(u=Object.getOwnPropertySymbols(a);f<u.length;f++)s.indexOf(u[f])<0&&Object.prototype.propertyIsEnumerable.call(a,u[f])&&(l[u[f]]=a[u[f]])}return l}(t,["fontSize"]),r=i}return{fontSize:r,styles:o}},q1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},ol=function(e){var n=e.className,t=e.text,r=e.textColor,o=e.staticText,i=e.style;return t?K.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:ne(ne(ne({},o&&q1),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof t=="string"&&t.length?t:"loading"):null},Qo="rgb(50, 205, 50)";function il(e,n){if(n===void 0&&(n=0),e.length===0)throw new Error("Input array cannot be empty!");var t=[];return function r(o,i){return i===void 0&&(i=0),t.push.apply(t,o),t.length<i&&r(t,i),t.slice(0,i)}(e,n)}Te(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);F(Qo).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});Te(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});Te(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")});function Ul(e){return e&&e.Math===Math&&e}Te(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Ul(typeof window=="object"&&window)||Ul(typeof self=="object"&&self)||Ul(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")});Te(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")});Te(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")});Te(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]});Te(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});Te(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});Te(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});Te(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var rr=Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")}),G1=function(e){var n,t=rl(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=tl(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(l){var u={};if(l instanceof Array){for(var f=il(l,rr.length),d=0;d<f.length&&!(d>=4);d++)u[rr[d]]=f[d];return u}try{if(typeof l!="string")throw new Error("Color String expected");for(var c=0;c<rr.length;c++)u[rr[c]]=l}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),c=0;c<rr.length;c++)u[rr[c]]=Qo}return u}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return K.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:ne(ne(ne(ne(ne({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},K.createElement("span",{className:"rli-d-i-b pulsate-indicator"},K.createElement("span",{className:"rli-d-i-b pulsate-dot"}),K.createElement("span",{className:"rli-d-i-b pulsate-dot"}),K.createElement("span",{className:"rli-d-i-b pulsate-dot"})),K.createElement(ol,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Te(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var or=Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")}),J1=function(e){var n,t=rl(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=tl(e==null?void 0:e.speedPlus,"1s").animationPeriod,s=function(l){var u={};if(l instanceof Array){for(var f=il(l,or.length),d=0;d<f.length&&!(d>=4);d++)u[or[d]]=f[d];return u}try{if(typeof l!="string")throw new Error("Color String expected");for(var c=0;c<or.length;c++)u[or[c]]=l}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),c=0;c<or.length;c++)u[or[c]]=Qo}return u}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return K.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:ne(ne(ne(ne(ne({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},K.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},K.createElement("span",{className:"rli-d-i-b brick-stack"})),K.createElement(ol,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Te(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var ir=Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")}),Z1=function(e){var n,t=rl(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=tl(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(l){var u={};if(l instanceof Array){for(var f=il(l,ir.length),d=0;d<f.length&&!(d>=4);d++)u[ir[d]]=f[d];return u}try{if(typeof l!="string")throw new Error("Color String expected");for(var c=0;c<ir.length;c++)u[ir[c]]=l}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),c=0;c<ir.length;c++)u[ir[c]]=Qo}return u}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return K.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:ne(ne(ne(ne(ne({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},K.createElement("span",{className:"bob-indicator"},K.createElement("span",{className:"bobbing"})),K.createElement(ol,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Te(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var ar=Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")}),eb=function(e){var n,t=rl(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=tl(e==null?void 0:e.speedPlus,"0.5s").animationPeriod,s=function(l){var u={};if(l instanceof Array){for(var f=il(l,ar.length),d=0;d<f.length&&!(d>=4);d++)u[ar[d]]=f[d];return u}try{if(typeof l!="string")throw new Error("Color String expected");for(var c=0;c<ar.length;c++)u[ar[c]]=l}catch{for(c=0;c<ar.length;c++)u[ar[c]]=Qo}return u}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return K.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:ne(ne(ne(ne(ne({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),s),r)},K.createElement("span",{className:"wrapper"},K.createElement("span",{className:"group"},K.createElement("span",{className:"rli-d-i-b dot"}),K.createElement("span",{className:"rli-d-i-b dot"}),K.createElement("span",{className:"rli-d-i-b dot"})),K.createElement("span",{className:"group"},K.createElement("span",{className:"rli-d-i-b shadow"}),K.createElement("span",{className:"rli-d-i-b shadow"}),K.createElement("span",{className:"rli-d-i-b shadow"}))),K.createElement(ol,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor,style:{marginTop:"2px"}}))},nb=function(e){var n=Object(e).variant,t=n===void 0?"pulsate":n;return t==="pulsate"?K.createElement(G1,ne({},e)):t==="brick-stack"?K.createElement(J1,ne({},e)):t==="bob"?K.createElement(Z1,ne({},e)):t==="bounce"?K.createElement(eb,ne({},e)):null};Te(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});Te(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});Te(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});Te(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});var Qh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vd=K.createContext&&K.createContext(Qh),tb=["attr","size","title"];function rb(e,n){if(e==null)return{};var t=ob(e,n),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function ob(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ua.apply(this,arguments)}function Wd(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ca(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Wd(Object(t),!0).forEach(function(r){ib(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Wd(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ib(e,n,t){return n=ab(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ab(e){var n=lb(e,"string");return typeof n=="symbol"?n:n+""}function lb(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Kh(e){return e&&e.map((n,t)=>K.createElement(n.tag,ca({key:t},n.attr),Kh(n.child)))}function sb(e){return n=>K.createElement(ub,ua({attr:ca({},e.attr)},n),Kh(e.child))}function ub(e){var n=t=>{var{attr:r,size:o,title:i}=e,a=rb(e,tb),s=o||t.size||"1em",l;return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),K.createElement("svg",ua({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,a,{className:l,style:ca(ca({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&K.createElement("title",null,i),e.children)};return Vd!==void 0?K.createElement(Vd.Consumer,null,t=>n(t)):n(Qh)}function cb(e){return sb({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}function db(){const e=Mr(i=>i.teams.allTeams),n=Mr(i=>i.session.user),t=qa(),r=el();if(P.useEffect(()=>{t($o()),t(la())},[t]),!e||e.length===0)return N.jsxs("div",{className:"loading",children:[N.jsx(nb,{color:"#f4e491",size:"medium",text:"",textColor:""}),N.jsx("p",{children:"Loading teams..."})]});const o=async()=>{await t(Bh()),r("/")};return N.jsxs("div",{className:"homepage",children:[N.jsxs("div",{className:"header",children:[N.jsx("h1",{children:"Semana de la Juventud"}),N.jsx("tittle",{children:"Más allá del espejo: Jóvenes con identidad en un mundo sin dirección"})]}),N.jsx("div",{className:"scoreboard",children:N.jsx(E1,{ogTeams:e})}),N.jsxs("div",{className:"footer",children:[N.jsx("div",{className:"button-container",children:N.jsx("button",{onClick:()=>t($o()),children:N.jsx(cb,{})})}),n!=null&&n.user?N.jsxs("div",{className:"admin-links",children:[N.jsx(As,{to:"/admin",className:"login-link",children:"Admin"}),N.jsx("p",{className:"logout-link",onClick:o,children:"Logout"})]}):N.jsx("div",{className:"welcome-message",children:N.jsx(As,{to:"/login",className:"login-link",children:"Login"})})]})]})}function fb({teamId:e}){const n=qa(),t=Mr(c=>c.teams.allTeams[e-1]);P.useEffect(()=>{n($o())},[n,e]);const[r,o]=P.useState(""),[i,a]=P.useState({}),[s,l]=P.useState(!0),u=c=>{if(c.trim()===""){a({score:"Score is required"}),l(!0);return}const y=Number(c);isNaN(y)?(a({score:"Score must be a number"}),l(!0)):y===0?(a({score:"Score cannot be zero"}),l(!0)):y*-1>t.score?(a({score:"You cannot decrease the score below zero"}),l(!0)):(a({}),l(!1))};if(P.useEffect(()=>{u(r)},[r]),!t)return N.jsx("div",{className:"team-pane",children:"Loading..."});const f=c=>{o(c.target.value)},d=async()=>{const c=Number(r);isNaN(c)||c===0||(await n(M1(t.id,c)).then(()=>{n($o(t.id))}),o(""),l(!0))};return N.jsxs("div",{className:"team-pane",children:[N.jsxs("div",{className:"team-header",children:[N.jsx("img",{src:t.logoUrl,alt:`${t.name} logo`,className:"team-logo-img"}),N.jsx("h2",{children:t.name})]}),N.jsx("p",{className:"team-description",children:t.description}),N.jsx("div",{className:"team-details",children:N.jsxs("h2",{children:["Score: ",t.score]})}),N.jsx("div",{className:"team-actions",children:N.jsxs("div",{className:"add-score-pane",children:[N.jsx("input",{type:"number",className:"score-input",value:r,onChange:f,placeholder:"e.g. 5 or -5"}),i.score&&N.jsx("p",{className:"error-message",children:i.score}),N.jsx("button",{className:"Save",disabled:s,onClick:d,children:"Update"})]})})]})}function pb(){const e=qa(),n=el(),t=Mr(i=>i.teams.allTeams),r=Mr(i=>i.session.user);if(P.useEffect(()=>{e($o()),e(la())},[e]),!r||!r.user)return n("/"),null;const o=async()=>{await e(Bh()),e(la()),n("/")};return N.jsxs("div",{className:"admin-page",children:[N.jsxs("header",{className:"admin-header",children:[N.jsx("div",{children:N.jsx("h1",{children:"Admin Scores"})}),N.jsxs("div",{className:"admin-header-links",children:[N.jsx(As,{to:"/",className:"home-link",children:"Home"}),N.jsx("p",{className:"logout-link",onClick:o,children:"Logout"})]})]}),t&&N.jsx("section",{className:"admin-content",children:t.map(i=>N.jsx(fb,{teamId:i.id},i.id))}),N.jsx("footer",{className:"admin-footer"})]})}const hb=qy([{path:"/",element:N.jsx(db,{})},{path:"/login",element:N.jsx(k1,{})},{path:"/admin",element:N.jsx(pb,{})}]);function mb(){return N.jsx(i1,{router:hb})}function Ao(e){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ao(e)}function vb(e,n){if(Ao(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(Ao(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function gb(e){var n=vb(e,"string");return Ao(n)==="symbol"?n:String(n)}function yb(e,n,t){return n=gb(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Qd(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Kd(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Qd(Object(t),!0).forEach(function(r){yb(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Qd(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ue(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Xd=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Fl=function(){return Math.random().toString(36).substring(7).split("").join(".")},da={INIT:"@@redux/INIT"+Fl(),REPLACE:"@@redux/REPLACE"+Fl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Fl()}};function bb(e){if(typeof e!="object"||e===null)return!1;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}function Xh(e,n,t){var r;if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(Ue(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(Ue(1));return t(Xh)(e,n)}if(typeof e!="function")throw new Error(Ue(2));var o=e,i=n,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function f(){if(l)throw new Error(Ue(3));return i}function d(h){if(typeof h!="function")throw new Error(Ue(4));if(l)throw new Error(Ue(5));var S=!0;return u(),s.push(h),function(){if(S){if(l)throw new Error(Ue(6));S=!1,u();var p=s.indexOf(h);s.splice(p,1),a=null}}}function c(h){if(!bb(h))throw new Error(Ue(7));if(typeof h.type>"u")throw new Error(Ue(8));if(l)throw new Error(Ue(9));try{l=!0,i=o(i,h)}finally{l=!1}for(var S=a=s,m=0;m<S.length;m++){var p=S[m];p()}return h}function y(h){if(typeof h!="function")throw new Error(Ue(10));o=h,c({type:da.REPLACE})}function x(){var h,S=d;return h={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(Ue(11));function g(){p.next&&p.next(f())}g();var E=S(g);return{unsubscribe:E}}},h[Xd]=function(){return this},h}return c({type:da.INIT}),r={dispatch:c,subscribe:d,getState:f,replaceReducer:y},r[Xd]=x,r}function xb(e){Object.keys(e).forEach(function(n){var t=e[n],r=t(void 0,{type:da.INIT});if(typeof r>"u")throw new Error(Ue(12));if(typeof t(void 0,{type:da.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ue(13))})}function wb(e){for(var n=Object.keys(e),t={},r=0;r<n.length;r++){var o=n[r];typeof e[o]=="function"&&(t[o]=e[o])}var i=Object.keys(t),a;try{xb(t)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var f=!1,d={},c=0;c<i.length;c++){var y=i[c],x=t[y],h=l[y],S=x(h,u);if(typeof S>"u")throw u&&u.type,new Error(Ue(14));d[y]=S,f=f||S!==h}return f=f||i.length!==Object.keys(l).length,f?d:l}}function kb(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.length===0?function(r){return r}:n.length===1?n[0]:n.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function Sb(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ue(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=n.map(function(l){return l(a)});return i=kb.apply(void 0,s)(o.dispatch),Kd(Kd({},o),{},{dispatch:i})}}}function Yh(e){var n=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return n}var qh=Yh();qh.withExtraArgument=Yh;const Eb=qh,Pb=wb({session:w1,teams:z1});let Gh;Gh=Sb(Eb);const Ob=e=>Xh(Pb,e,Gh),Cb=Ob();Bl.createRoot(document.getElementById("root")).render(N.jsx(K.StrictMode,{children:N.jsx(Tg,{store:Cb,children:N.jsx(mb,{})})}));

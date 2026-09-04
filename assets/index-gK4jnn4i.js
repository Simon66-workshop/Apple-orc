var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function D(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+E(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+E(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+E(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(D(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<C)}function ne(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function E(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),E=Symbol.iterator;function D(e){return typeof e!=`object`||!e?null:(e=E&&e[E]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function A(e){return{current:e}}function j(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function M(e,t){ue++,le[ue]=e.current,e.current=t}var N=A(null),P=A(null),de=A(null),fe=A(null);function pe(e,t){switch(M(de,t),M(P,e),M(N,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(N),M(N,e)}function me(){j(N),j(P),j(de)}function he(e){e.memoizedState!==null&&M(fe,e);var t=N.current,n=Hd(t,e.type);t!==n&&(M(P,e),M(N,n))}function ge(e){P.current===e&&(j(N),j(P)),fe.current===e&&(j(fe),Qf._currentValue=ce)}var _e,ve;function ye(e){if(_e===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||``,ve=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+_e+e+ve}var be=!1;function xe(e,t){if(!e||be)return``;be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ye(n):``}function Se(e,t){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye(`Lazy`);case 13:return e.child!==t&&t!==null?ye(`Suspense Fallback`):ye(`Suspense`);case 19:return ye(`SuspenseList`);case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return ye(`Activity`);default:return``}}function Ce(e){try{var t=``,n=null;do t+=Se(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var we=Object.prototype.hasOwnProperty,Te=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,De=t.unstable_shouldYield,Oe=t.unstable_requestPaint,ke=t.unstable_now,Ae=t.unstable_getCurrentPriorityLevel,je=t.unstable_ImmediatePriority,Me=t.unstable_UserBlockingPriority,Ne=t.unstable_NormalPriority,Pe=t.unstable_LowPriority,Fe=t.unstable_IdlePriority,Ie=t.log,Le=t.unstable_setDisableYieldValue,Re=null,ze=null;function Be(e){if(typeof Ie==`function`&&Le(e),ze&&typeof ze.setStrictMode==`function`)try{ze.setStrictMode(Re,e)}catch{}}var Ve=Math.clz32?Math.clz32:We,He=Math.log,Ue=Math.LN2;function We(e){return e>>>=0,e===0?32:31-(He(e)/Ue|0)|0}var Ge=256,Ke=262144,qe=4194304;function Je(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ye(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Je(n))):i=Je(o):i=Je(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Je(n))):i=Je(o)):i=Je(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Xe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ze(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qe(){var e=qe;return qe<<=1,!(qe&62914560)&&(qe=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function et(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ve(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&nt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function nt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ve(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function it(e,t){var n=t&-t;return n=n&42?1:at(n),(n&(e.suspendedLanes|t))===0?n:0}function at(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function st(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ct(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var F=Math.random().toString(36).slice(2),lt=`__reactFiber$`+F,ut=`__reactProps$`+F,dt=`__reactContainer$`+F,ft=`__reactEvents$`+F,pt=`__reactListeners$`+F,mt=`__reactHandles$`+F,ht=`__reactResources$`+F,gt=`__reactMarker$`+F;function _t(e){delete e[lt],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[lt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[lt]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function Tt(e,t){Et(e,t),Et(e+`Capture`,t)}function Et(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Dt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ot={},kt={};function At(e){return we.call(kt,e)?!0:we.call(Ot,e)?!1:Dt.test(e)?kt[e]=!0:(Ot[e]=!0,!1)}function jt(e,t,n){if(At(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Mt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Nt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Pt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ft(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function It(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lt(e){if(!e._valueTracker){var t=Ft(e)?`checked`:`value`;e._valueTracker=It(e,t,``+e[t])}}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ft(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function zt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Bt=/[\n"\\]/g;function Vt(e){return e.replace(Bt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ht(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Pt(t)):e.value!==``+Pt(t)&&(e.value=``+Pt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Wt(e,o,Pt(n)):Wt(e,o,Pt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Pt(s):e.removeAttribute(`name`)}function Ut(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Lt(e);return}n=n==null?``:``+Pt(n),t=t==null?n:``+Pt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Lt(e)}function Wt(e,t,n){t===`number`&&zt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kt(e,t,n){if(t!=null&&(t=``+Pt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Pt(n)}function qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Pt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Lt(e)}function Jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Xt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Yt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Zt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Xt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Xt(e,o,t[o])}function Qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var $t=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),en=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return en.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function nn(){}var rn=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ht(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Vt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ut]||null;if(!a)throw Error(i(90));Ht(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Rt(r)}break a;case`textarea`:Kt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var ln=!1;function I(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(bu(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var dn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),fn=!1;if(dn)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){fn=!0}}),window.addEventListener(`test`,pn,pn),window.removeEventListener(`test`,pn,pn)}catch{fn=!1}var mn=null,hn=null,gn=null;function _n(){if(gn)return gn;var e,t=hn,n=t.length,r,i=`value`in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return gn=i.slice(e,1<r?1-r:void 0)}function vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function bn(){return!1}function L(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?yn:bn,this.isPropagationStopped=bn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=L(xn),Cn=h({},xn,{view:0,detail:0}),wn=L(Cn),Tn,En,Dn,R=h({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),On=L(R),kn=L(h({},R,{dataTransfer:0})),An=L(h({},Cn,{relatedTarget:0})),jn=L(h({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=L(h({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=L(h({},xn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=L(h({},Cn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=L(h({},R,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=L(h({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=L(h({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=L(h({},R,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=L(h({},xn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=dn&&`CompositionEvent`in window,qn=null;dn&&`documentMode`in document&&(qn=document.documentMode);var z=dn&&`TextEvent`in window&&!qn,Jn=dn&&(!Kn||qn&&8<qn&&11>=qn),Yn=` `,Xn=!1;function Zn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Qn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var $n=!1;function er(e,t){switch(e){case`compositionend`:return Qn(t);case`keypress`:return t.which===32?(Xn=!0,Yn):null;case`textInput`:return e=t.data,e===Yn&&Xn?null:e;default:return null}}function tr(e,t){if($n)return e===`compositionend`||!Kn&&Zn(e,t)?(e=_n(),gn=hn=mn=null,$n=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Jn&&t.locale!==`ko`?null:t.data;default:return null}}var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!nr[e.type]:t===`textarea`}function ir(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Ed(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ar=null,or=null;function sr(e){yd(e,0)}function cr(e){if(Rt(bt(e)))return e}function lr(e,t){if(e===`change`)return t}var ur=!1;if(dn){var dr;if(dn){var fr=`oninput`in document;if(!fr){var pr=document.createElement(`div`);pr.setAttribute(`oninput`,`return;`),fr=typeof pr.oninput==`function`}dr=fr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function mr(){ar&&(ar.detachEvent(`onpropertychange`,hr),or=ar=null)}function hr(e){if(e.propertyName===`value`&&cr(or)){var t=[];ir(t,or,e,an(e)),I(sr,t)}}function gr(e,t,n){e===`focusin`?(mr(),ar=t,or=n,ar.attachEvent(`onpropertychange`,hr)):e===`focusout`&&mr()}function _r(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return cr(or)}function vr(e,t){if(e===`click`)return cr(t)}function yr(e,t){if(e===`input`||e===`change`)return cr(t)}function br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var xr=typeof Object.is==`function`?Object.is:br;function Sr(e,t){if(xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!we.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Cr(n)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=zt(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Or=dn&&`documentMode`in document&&11>=document.documentMode,kr=null,Ar=null,jr=null,Mr=!1;function Nr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mr||kr==null||kr!==zt(r)||(r=kr,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Sr(jr,r)||(jr=r,r=Ed(Ar,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Fr={animationend:Pr(`Animation`,`AnimationEnd`),animationiteration:Pr(`Animation`,`AnimationIteration`),animationstart:Pr(`Animation`,`AnimationStart`),transitionrun:Pr(`Transition`,`TransitionRun`),transitionstart:Pr(`Transition`,`TransitionStart`),transitioncancel:Pr(`Transition`,`TransitionCancel`),transitionend:Pr(`Transition`,`TransitionEnd`)},Ir={},Lr={};dn&&(Lr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),`TransitionEvent`in window||delete Fr.transitionend.transition);function Rr(e){if(Ir[e])return Ir[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lr)return Ir[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),Hr=Rr(`transitionrun`),Ur=Rr(`transitionstart`),Wr=Rr(`transitioncancel`),Gr=Rr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),Tt(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ve(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ci(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,N.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=si(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return fi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=si(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case w:return e=si(13,n,t,a),e.elementType=w,e.lanes=o,e;case te:return e=si(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=si(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:Ce(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:Ce(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],B=0,Ci=null,wi=1,Ti=``;function Ei(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Di(e,t,n){Si[B++]=wi,Si[B++]=Ti,Si[B++]=Ci,Ci=e;var r=wi;e=Ti;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wi=1<<32-Ve(t)+i|n<<i|r,Ti=a+e}else wi=1<<a|n<<i|r,Ti=e}function Oi(e){e.return!==null&&(Ei(e,1),Di(e,1,0))}function ki(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===Ci;)Ci=Si[--B],Si[B]=null,Ti=Si[--B],Si[B]=null,wi=Si[--B],Si[B]=null}function Ai(e,t){Si[B++]=wi,Si[B++]=Ti,Si[B++]=Ci,wi=t.id,Ti=t.overflow,Ci=e}var ji=null,V=null,H=!1,Mi=null,U=!1,Ni=Error(i(519));function Pi(e){throw Bi(_i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[lt]=e,t[ut]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ji=e.return;ji;)switch(ji.tag){case 5:case 31:case 13:U=!1;return;case 27:case 3:U=!0;return;default:ji=ji.return}}function Li(e){if(e!==ji)return!1;if(!H)return Ii(e),H=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&V&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));V=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));V=uf(e)}else t===27?(t=V,Zd(e.type)?(e=lf,lf=null,V=e):V=t):V=ji?cf(e.stateNode.nextSibling):null;return!0}function Ri(){V=ji=null,H=!1}function zi(){var e=Mi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Mi=null),e}function Bi(e){Mi===null?Mi=[e]:Mi.push(e)}var Vi=A(null),Hi=null,Ui=null;function Wi(e,t,n){M(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,j(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;xr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===fe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=O.S;O.S=function(e,t){eu=ke(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=A(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?M(ma,ma.current):M(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(nn,nn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=di(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=hi(t,e.mode,n),t.return=e,t;case T:return t=wa(t),f(e,t,n)}if(se(t)||D(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===S)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=wa(n),p(e,t,n,r)}if(se(n)||D(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===S)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=wa(r),m(e,t,n,r,i)}if(se(r)||D(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===S)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),H&&Ei(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return H&&Ei(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),H&&Ei(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),H&&Ei(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return H&&Ei(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),H&&Ei(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=fi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=di(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=hi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=wa(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(D(o)){if(l=D(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===S)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=pi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=A(null),Ya=A(0);function Xa(e,t){e=Ul,M(Ya,e),M(Ja,t),Ul=e|t.baseLanes}function Za(){M(Ya,Ul),M(Ja,Ja.current)}function Qa(){Ul=Ya.current,j(Ja),j(Ya)}var $a=A(null),eo=null;function to(e){var t=e.alternate;M(oo,oo.current&1),M($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){M(oo,oo.current),M($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(M(oo,oo.current),M($a,e),eo===null&&(eo=e)):io(e)}function io(){M(oo,oo.current),M($a,$a.current)}function ao(e){j($a),eo===e&&(eo=null),j(oo)}var oo=A(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){O.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===S)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!xr(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);xr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=H;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!xr((G||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function Ho(e){var t=ni(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Be(!0);try{n()}finally{Be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(H){var n=q.formState;if(n!==null){a:{var r=W;if(H){if(V){b:{for(var i=V,a=U;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){V=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return xr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),xr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ms(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,ce,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=ti(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xr(s,o))return ei(e,t,i,0),q===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=ti(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Be(!0);try{n(t)}finally{Be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(H){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(H){var n=Ti,r=wi;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Yr(e)}function Ks(e){console.error(e)}function qs(e){Yr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(H)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(_i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=_i(r,n),a=Xs(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(_i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=_i(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(H&&s&&Oi(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Sr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sr(a,r)&&e.ref===t.ref){if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(H){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=V)?(e=rf(e,U),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,ji=t,V=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a){if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=it(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ni(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,V=cf(s.nextSibling),ji=t,H=!0,Mi=null,U=!1,e!==null&&Ai(t,e),t=lc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(H&&r&&Oi(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(H&&r&&Oi(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(oo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(H){if(a?to(t):io(t),(e=V)?(e=rf(e,U),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,ji=t,V=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=fi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=fi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=it(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,V=cf(c.nextSibling),ji=t,H=!0,Mi=null,U=!1,e!==null&&Ai(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,a,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,M(oo,o),nc(e,t,r,n),r=H?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Yi(e)))}function kc(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:he(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}}else tc=!1,H&&t.flags&1048576&&Di(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=rc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}if(r!==a){a=_i(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(V=cf(e.firstChild),ji=t,H=!0,Mi=null,U=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:H||(n=t.type,e=t.pendingProps,r=Bd(de.current).createElement(n),r[lt]=t,r[ut]=e,Pd(r,n,e),St(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),e===null&&H&&(r=t.stateNode=ff(t.type,t.pendingProps,de.current),ji=t,U=!0,a=V,Zd(t.type)?(lf=a,V=cf(r.firstChild)):V=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&H&&((a=r=V)&&(r=tf(r,t.type,t.pendingProps,U),r===null?a=!1:(t.stateNode=r,ji=t,V=cf(r.firstChild),U=!1,a=!0)),a||Pi(t)),he(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&H&&((e=n=V)&&(n=nf(n,t.pendingProps,U),n===null?e=!1:(t.stateNode=n,ji=t,V=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=q,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ta=xa,ya}}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Qe(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!H)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(ge(t),n=de.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=N.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(ge(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=N.current,Li(t))Fi(t,o);else{var s=Bd(de.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[lt]=t,o[ut]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=de.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ji,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[lt]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[lt]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[lt]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return me(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(j(oo),r=t.memoizedState,r===null)return Ic(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return M(oo,oo.current&1|2),H&&Ei(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ke()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!H)return Ic(t),null}else 2*ke()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,n=oo.current,M(oo,a?n&1|2:n&1),H&&Ei(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),me(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ge(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(oo),null;case 4:return me(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&j(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(ki(t),t.tag){case 3:Gi(ra),me();break;case 26:case 27:case 5:ge(t);break;case 4:me();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:j(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&j(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ut]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[lt]=e,t[ut]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Er(e),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount==`function`)try{ze.onCommitFiberUnmount(Re,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null){if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[lt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[lt]=e,St(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[lt]=e,St(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Jt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=ke()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Jt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:O.T===null?st():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||H){var e=Ke;Ke<<=1,!(Ke&3932160)&&(Ke=262144),Jl=e}else Jl=536870912}return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),et(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Xe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-ke(),10<a)){if(yu(r,t,Jl,!Bl),Ye(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},jl(t,a,d);var m=(a&62914560)===a?$l-ke():(a&4194048)===a?eu-ke():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ve(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&nt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=li(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Xe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ve(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,$r(),n}function Cu(e,t){W=null,O.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,_i(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=O.H;return O.H=Is,e===null?Is:e}function Eu(){var e=O.A;return O.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,$r()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=ke()+500,Su(e,t)):Vl=Xe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,$r(),Wl):0}function ju(){for(;J!==null&&!De();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=ui(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,_i(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,_i(n,e.current)),J=null;return}t.flags&32768?(H||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Qr,tt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ne,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Er(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Tr(s.ownerDocument.documentElement,s)){if(c!==null&&Dr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=wr(s,h),v=wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Oe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ot(n),t=t.stateNode,ze&&typeof ze.onCommitFiberRoot==`function`)try{ze.onCommitFiberRoot(Re,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ot(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),ze&&typeof ze.onPostCommitFiberRoot==`function`)try{ze.onPostCommitFiberRoot(Re,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=_i(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(et(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=_i(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),et(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>ke()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Qe()),e=ni(e,t),e!==null&&(et(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Te(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ve(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ye(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Xe(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=ke(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ve(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ze(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ye(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Xe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ee(r),ot(n)){case 2:case 8:n=Me;break;case 32:n=Ne;break;case 268435456:n=Fe;break;default:n=Ne}return r=cd.bind(null,e),n=Te(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ye(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,ke()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Te(je,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=Ge,Ge<<=1,!(Ge&261888)&&(Ge=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:tn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Sn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<qr.length;hd++){var gd=qr[hd];Jr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Jr(zr,`onAnimationEnd`),Jr(Br,`onAnimationIteration`),Jr(Vr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Hr,`onTransitionRun`),Jr(Ur,`onTransitionStart`),Jr(Wr,`onTransitionCancel`),Jr(Gr,`onTransitionEnd`),Et(`onMouseEnter`,[`mouseout`,`mouseover`]),Et(`onMouseLeave`,[`mouseout`,`mouseover`]),Et(`onPointerEnter`,[`pointerout`,`pointerover`]),Et(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}I(function(){var r=a,i=an(n),s=[];a:{var c=Kr.get(e);if(c!==void 0){var l=Sn,u=e;switch(e){case`keypress`:if(vn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case zr:case Br:case Vr:l=jn;break;case Gr:l=Hn;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=un(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==rn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=lr;else if(rr(c)){if(ur)v=yr;else{v=_r;var y=gr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Qt(r.elementType)&&(v=lr):v=vr;if(v&&=v(e,r)){ir(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Wt(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(rr(y)||y.contentEditable===`true`)&&(kr=y,Ar=r,jr=null);break;case`focusout`:jr=Ar=kr=null;break;case`mousedown`:Mr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Mr=!1,Nr(s,n,i);break;case`selectionchange`:if(Or)break;case`keydown`:case`keyup`:Nr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else $n?Zn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Jn&&n.locale!==`ko`&&($n||x!==`onCompositionStart`?x===`onCompositionEnd`&&$n&&(b=_n()):(mn=i,hn=`value`in mn?mn.value:mn.textContent,$n=!0)),y=Ed(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Qn(n),b!==null&&(x.data=b)))),(b=z?er(e,n):tr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=un(e,n),i!=null&&r.unshift(Td(e,i,a)),i=un(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=un(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=un(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Jt(e,``+r);break;case`className`:Mt(e,`class`,r);break;case`tabIndex`:Mt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Mt(e,n,r);break;case`style`:Zt(e,r,o);break;case`data`:if(t!==`object`){Mt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=tn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),jt(e,`popover`,r);break;case`xlinkActuate`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:jt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=$t.get(n)||n,jt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Zt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Jt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ut]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):jt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Ut(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Gt(e,!!r,n,!0):Gt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ht(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Gt(e,!!n,n?[]:``,!1):Gt(e,!!n,t,!0)):Gt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Kt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Vt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Vt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Vt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Vt(n.imageSizes)+`"]`)):i+=`[href="`+Vt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Vt(r)+`"][href="`+Vt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=xt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);St(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=de.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Vt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),St(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Vt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Vt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),St(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,St(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),St(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[lt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=at(t);var n=ni(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Je(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ve(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=ke()+500,id(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=an(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ae()){case je:return 2;case Me:return 8;case Ne:case Pe:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rn=r,n.target.dispatchEvent(r),rn=null}else return t=yt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[dt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Re=zp.inject(Rp),ze=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[dt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y={min:.3,max:.95},b={glassEnabled:!0,speed:1,radius:.72,contourDeform:0,bandDensity:2,chromaticShift:.42,metalScale:.77,metalStretch:.23,metalAngle:65,metalOffset:0,metalPhase:0,metalEvolution:1,metalRoughness:.22,metalDepth:.25,particleDensity:.72,ribbonCount:5,ribbonWidth:.42,ribbonTwist:1.25,ribbonFold:.55,ribbonBreath:.3,particleSize:1.2,particleBloom:.7,zoom:.3,warp:3,ridgeAmt:.5,sharp:2.2,shade:.3,sheen:.36,gloss:.28,glassOpacity:.42,shellMidAlpha:.2,shellEdgeAlpha:.22,exposure:1,edgeSoftness:.005,edgeGlow:0,colorA:`#F7FBFF`,colorB:`#D6E8F7`,colorC:`#A8C8F0`,colorD:`#6F9EE8`,highlightColor:`#FFFFFF`,shellInner:`#FFFFFF`,shellMid:`#D6E8F7`,shellEdge:`#6F9EE8`,sheenColor:`#EAF4FF`,specColor:`#DCEAFF`,canvasColor:`#000000`,glowColor:`#6F9EE8`},x={siri:{...b,speed:.82,zoom:.36,warp:3.2,ridgeAmt:.5,sharp:2.2,shade:.12,sheen:.28,gloss:.24,glassOpacity:.44,shellMidAlpha:.18,shellEdgeAlpha:.18,exposure:2,colorA:`#FFD86B`,colorB:`#82F4FF`,colorC:`#FF7BD5`,colorD:`#8E6CFF`,shellMid:`#9BF4FF`,shellEdge:`#C5A9FF`,canvasColor:`#030409`,glowColor:`#956CFF`},voiceWave:{...b,speed:.95,radius:.7,contourDeform:.1,zoom:.36,warp:2.6,ridgeAmt:.46,shade:.08,sheen:.22,gloss:.36,glassOpacity:.48,shellMidAlpha:.18,shellEdgeAlpha:.2,exposure:1.35,colorA:`#09030E`,colorB:`#CE2CCB`,colorC:`#FF5C71`,colorD:`#7B53FF`,highlightColor:`#FFD9F0`,shellMid:`#E48BFF`,shellEdge:`#FF7890`,sheenColor:`#FFF1FA`,specColor:`#E7D9FF`,canvasColor:`#020105`,glowColor:`#CE2CCB`},aurora:{...b,speed:3,contourDeform:.08,zoom:.4,warp:4.2,ridgeAmt:.62,sharp:2.1,shade:.18,exposure:1.18,colorA:`#030816`,colorB:`#20F0B6`,colorC:`#32A8FF`,colorD:`#A34BFF`,shellMid:`#32A8FF`,shellEdge:`#20F0B6`,canvasColor:`#010207`,glowColor:`#20F0B6`},plasma:{...b,speed:1.32,contourDeform:.05,zoom:.55,warp:5.4,ridgeAmt:.78,sharp:4.2,shade:.16,exposure:1.25,colorA:`#06020E`,colorB:`#0099FF`,colorC:`#258BFF`,colorD:`#1375FF`,shellInner:`#FFFFFF`,shellMid:`#1951C2`,shellEdge:`#00E9FF`,sheenColor:`#EAF4FF`,specColor:`#DCEAFF`,canvasColor:`#020105`,glowColor:`#0099FF`},chrome:{...b,speed:2,zoom:.36,warp:3.8,ridgeAmt:.44,sharp:5.2,shade:.58,exposure:1.08,colorA:`#FFFFFF`,colorB:`#B9C0CA`,colorC:`#343A43`,colorD:`#030405`,shellMid:`#B9C0CA`,shellEdge:`#FFFFFF`,canvasColor:`#050608`,glowColor:`#FFFFFF`},opal:{...b,speed:1.5,zoom:.3,warp:2.8,ridgeAmt:.36,sharp:2,shade:.1,sheen:.3,gloss:.26,glassOpacity:.38,shellMidAlpha:.2,shellEdgeAlpha:.2,exposure:1.12,colorA:`#FFF6E8`,colorB:`#6EF2CF`,colorC:`#FF91D8`,colorD:`#756BFF`,shellMid:`#CDE5FF`,shellEdge:`#D9C8FF`,canvasColor:`#07080D`,glowColor:`#9E8CFF`},spectrum:{...b,speed:1.8,contourDeform:.03,zoom:.46,warp:4.4,ridgeAmt:.72,shade:.06,sheen:.26,gloss:.24,glassOpacity:.4,shellMidAlpha:.18,shellEdgeAlpha:.18,exposure:1.5,colorA:`#FFFFFF`,colorB:`#1677FF`,colorC:`#F249A0`,colorD:`#35E6B2`,shellMid:`#66E8FF`,shellEdge:`#D26CFF`,canvasColor:`#03040A`,glowColor:`#1677FF`},frost:{...b,speed:2.22,contourDeform:.04,zoom:.36,warp:3.7,ridgeAmt:.45,sharp:2.05,shade:.3,sheen:.34,gloss:.28,glassOpacity:.42,shellMidAlpha:.2,shellEdgeAlpha:.22,exposure:1,colorA:`#F7FBFF`,colorB:`#D6E8F7`,colorC:`#A8C8F0`,colorD:`#6F9EE8`,shellMid:`#D6E8F7`,shellEdge:`#6F9EE8`,canvasColor:`#000000`,glowColor:`#6F9EE8`},blueDrop:{...b,speed:.9,radius:.74,contourDeform:.08,zoom:.48,warp:2.65,ridgeAmt:.42,sharp:2.4,shade:.16,sheen:.22,gloss:.42,glassOpacity:.66,shellMidAlpha:.32,shellEdgeAlpha:.24,exposure:1.24,colorA:`#020B1D`,colorB:`#0756B8`,colorC:`#1EC8FF`,colorD:`#DDFBFF`,highlightColor:`#EAFBFF`,shellInner:`#F6FDFF`,shellMid:`#4FD7FF`,shellEdge:`#466DFF`,sheenColor:`#DDFBFF`,specColor:`#A8D9FF`,canvasColor:`#010207`,glowColor:`#168DFF`},violetEmber:{...b,speed:1.12,radius:.72,contourDeform:.04,zoom:.58,warp:4.7,ridgeAmt:.73,sharp:3.3,shade:.18,sheen:.2,gloss:.34,glassOpacity:.62,shellMidAlpha:.28,shellEdgeAlpha:.24,exposure:1.28,colorA:`#100016`,colorB:`#4A0E8F`,colorC:`#A52EFF`,colorD:`#F1A7FF`,highlightColor:`#FFD6FF`,shellInner:`#FCF5FF`,shellMid:`#C257FF`,shellEdge:`#6C2DFF`,sheenColor:`#F8E6FF`,specColor:`#D4B7FF`,canvasColor:`#030006`,glowColor:`#A52EFF`},refractiveBlob:{...b,speed:.76,radius:.73,contourDeform:.16,zoom:.46,warp:3.65,ridgeAmt:.58,sharp:2.7,shade:.14,sheen:.14,gloss:.52,glassOpacity:.82,shellMidAlpha:.42,shellEdgeAlpha:.2,exposure:1.2,colorA:`#1B102B`,colorB:`#7056A8`,colorC:`#BFA5F5`,colorD:`#F1E8FF`,highlightColor:`#FFFFFF`,shellInner:`#F6F0FF`,shellMid:`#D9C7FF`,shellEdge:`#B59AE8`,sheenColor:`#FFFFFF`,specColor:`#E9DEFF`,canvasColor:`#050208`,glowColor:`#B18CFF`},particleRibbon:{...b,glassEnabled:!0,speed:.72,radius:.66,particleDensity:1,ribbonCount:4,ribbonWidth:.48,ribbonTwist:1.15,ribbonFold:.6,ribbonBreath:.38,particleSize:1.12,particleBloom:1.22,shade:.12,sheen:.28,gloss:.24,glassOpacity:.44,shellMidAlpha:.18,shellEdgeAlpha:.18,exposure:1.48,colorA:`#63F1FF`,colorB:`#4A9DFF`,colorC:`#8566FF`,colorD:`#F15DE1`,highlightColor:`#F5FBFF`,shellInner:`#FFFFFF`,shellMid:`#9BF4FF`,shellEdge:`#C5A9FF`,sheenColor:`#EAF4FF`,specColor:`#DCEAFF`,canvasColor:`#010208`,glowColor:`#765CFF`},chromaticMetal:{...b,speed:1.12,radius:.72,bandDensity:2,chromaticShift:.42,metalScale:.77,metalStretch:.23,metalAngle:65,metalOffset:0,metalPhase:0,metalEvolution:1,metalRoughness:.16,metalDepth:.38,shade:.1,sheen:.14,gloss:.46,glassOpacity:.54,shellMidAlpha:.2,shellEdgeAlpha:.16,exposure:1.08,colorA:`#FBFCFB`,colorB:`#7F8683`,colorC:`#D6DAD8`,colorD:`#33373A`,highlightColor:`#FFFFFF`,shellInner:`#F7FCFF`,shellMid:`#6EDCFF`,shellEdge:`#FF806D`,sheenColor:`#F7FCFF`,specColor:`#D9F3FF`,canvasColor:`#050606`,glowColor:`#BDEFFF`}},ee=[`siri`,`voiceWave`,`particleRibbon`,`blueDrop`,`violetEmber`,`refractiveBlob`,`chromaticMetal`,`aurora`,`frost`,`chrome`,`opal`,`spectrum`,`plasma`],S={siri:9,voiceWave:19,aurora:10,plasma:11,chrome:12,opal:13,spectrum:14,frost:15,blueDrop:20,violetEmber:21,refractiveBlob:23,particleRibbon:24,chromaticMetal:22},C={style:`siri`,...x.siri};({...C});for(let e of ee)if(!Number.isInteger(S[e]))throw Error(`预设缺少流场映射：${e}`);var w=`Thinking...`,te=`apple-orc-editor-locale`,ne={min:.05,max:.8,step:.01},T={min:.1,max:2,step:.05},re=[`siri`,`voiceWave`,`spectrum`,`aurora`,`frost`,`plasma`,`blueDrop`,`violetEmber`,`refractiveBlob`],ie=[`frost`,`plasma`,`chrome`,`blueDrop`,`violetEmber`,`refractiveBlob`],E=ee.filter(e=>e!==`chromaticMetal`&&e!==`particleRibbon`),D=[`chromaticMetal`],ae=[`particleRibbon`],oe=[{key:`speed`,min:0,max:3,step:.01},{key:`radius`,...y,step:.01},{key:`contourDeform`,min:0,max:1,step:.01,enabledStyles:E},{key:`zoom`,min:.05,max:1,step:.01,enabledStyles:E},{key:`warp`,min:0,max:6,step:.05,enabledStyles:E},{key:`ridgeAmt`,min:0,max:1,step:.01,enabledStyles:re},{key:`sharp`,min:.5,max:6,step:.05,enabledStyles:ie},{key:`bandDensity`,min:1,max:6,step:.1,enabledStyles:D},{key:`metalDepth`,min:0,max:1,step:.01,enabledStyles:D},{key:`metalRoughness`,min:0,max:1,step:.01,enabledStyles:D},{key:`chromaticShift`,min:0,max:1,step:.01,enabledStyles:D},{key:`metalScale`,min:.2,max:2,step:.01,enabledStyles:D},{key:`metalStretch`,min:0,max:1,step:.01,enabledStyles:D},{key:`metalAngle`,min:-180,max:180,step:1,enabledStyles:D},{key:`metalOffset`,min:-1,max:1,step:.01,enabledStyles:D},{key:`metalPhase`,min:0,max:1,step:.01,enabledStyles:D},{key:`metalEvolution`,min:0,max:2,step:.02,enabledStyles:D},{key:`particleDensity`,min:.2,max:1,step:.01,enabledStyles:ae},{key:`ribbonCount`,min:2,max:6,step:1,enabledStyles:ae},{key:`ribbonWidth`,min:.1,max:.8,step:.01,enabledStyles:ae},{key:`ribbonTwist`,min:.1,max:3,step:.01,enabledStyles:ae},{key:`ribbonFold`,min:0,max:1.2,step:.01,enabledStyles:ae},{key:`ribbonBreath`,min:0,max:.8,step:.01,enabledStyles:ae},{key:`particleSize`,min:.6,max:2.5,step:.01,enabledStyles:ae},{key:`particleBloom`,min:0,max:2,step:.01,enabledStyles:ae},{key:`shade`,min:0,max:1.5,step:.01},{key:`exposure`,min:.2,max:3,step:.02},{key:`sheen`,min:0,max:2,step:.02},{key:`gloss`,min:0,max:2,step:.02},{key:`glassOpacity`,min:0,max:1,step:.01},{key:`shellMidAlpha`,min:0,max:1,step:.01},{key:`shellEdgeAlpha`,min:0,max:1,step:.01},{key:`edgeSoftness`,min:.005,max:.15,step:.005},{key:`edgeGlow`,min:0,max:1,step:.01}],se=new Map(oe.map(e=>[e.key,e])),O=[`colorA`,`colorB`,`colorC`,`colorD`,`highlightColor`,`shellInner`,`shellMid`,`shellEdge`,`sheenColor`,`specColor`,`canvasColor`,`glowColor`],k=new Set([`particleRibbon`,`blueDrop`,`violetEmber`,`refractiveBlob`,`chromaticMetal`]),ce={siri:`/presets/siri.png`,voiceWave:`/presets/voiceWave.png`,spectrum:`/presets/spectrum.png`,aurora:`/presets/aurora.png`,frost:`/presets/frost.png`,plasma:`/presets/plasma.png`,chrome:`/presets/chrome.png`,opal:`/presets/opal.png`,blueDrop:`/presets/blueDrop.png`,violetEmber:`/presets/violetEmber.png`,refractiveBlob:`/presets/refractiveBlob.png`,particleRibbon:`/presets/particleRibbon.png`,chromaticMetal:`/presets/chromaticMetal.png`};function le(e,t,n){return Math.min(n,Math.max(t,e))}function ue(e){return/^#[0-9a-f]{6}$/i.test(e)?e.toUpperCase():null}function A(e){return Array.from(e).slice(0,20).join(``)}function j(e,t){return!e.enabledStyles||e.enabledStyles.includes(t)}var M=`// Generated from effect.wgsl for the native SwiftUI/Metal export.
// Do not edit this file independently of the WGSL source.
// language: metal2.1
#include <metal_stdlib>
#include <simd/simd.h>

using metal::uint;
struct DefaultConstructible {
    template<typename T>
    operator T() && {
        return T {};
    }
};

struct Uniforms {
    metal::float2 size;
    float time;
    float speed;
    float radius;
    float zoom;
    float warp;
    float ridgeAmt;
    float sharp;
    float shade;
    float sheen;
    float gloss;
    float shellMidAlpha;
    float shellEdgeAlpha;
    float exposure;
    float style;
    float edgeSoftness;
    float edgeGlow;
    float paletteCount;
    float glassEnabled;
    float glassOpacity;
    float contourDeform;
    float bandDensity;
    float chromaticShift;
    float metalScale;
    float metalStretch;
    float metalAngle;
    float metalOffset;
    float metalPhase;
    float metalEvolution;
    float metalRoughness;
    float metalDepth;
    float particleDensity;
    float ribbonCount;
    float ribbonWidth;
    float ribbonTwist;
    float ribbonFold;
    float ribbonBreath;
    float particleSize;
    float particleBloom;
    metal::float4 colorA;
    metal::float4 colorB;
    metal::float4 colorC;
    metal::float4 colorD;
    metal::float4 highlightColor;
    metal::float4 shellInner;
    metal::float4 shellMid;
    metal::float4 shellEdge;
    metal::float4 sheenColor;
    metal::float4 specColor;
    metal::float4 canvasColor;
    metal::float4 glowColor;
    metal::float4 paletteStop0_;
    metal::float4 paletteStop1_;
    metal::float4 paletteStop2_;
    metal::float4 paletteStop3_;
    metal::float4 paletteStop4_;
    metal::float4 paletteStop5_;
    metal::float4 paletteStop6_;
    metal::float4 paletteStop7_;
    metal::float4 paletteStop8_;
    metal::float4 paletteStop9_;
    metal::float4 paletteStop10_;
    metal::float4 paletteStop11_;
};
struct MfRamp {
    float n;
    char _pad1[12];
    metal::float3 s0_;
    metal::float3 s1_;
    metal::float3 s2_;
    metal::float3 s3_;
    metal::float3 s4_;
    metal::float3 s5_;
    metal::float3 s6_;
    metal::float3 s7_;
    metal::float3 s8_;
    metal::float3 s9_;
    metal::float3 s10_;
    metal::float3 s11_;
};
struct VOut {
    metal::float4 pos;
    metal::float2 uv;
    char _pad2[8];
};
struct type_7 {
    metal::float2 inner[3];
};
constant float GL_FU = 0.8817204;
constant float GL_BSIG_CLEAR = 0.018;
constant float GL_BSIG_GLASS = 0.0399;
constant float GL_KA = 6.0;
constant float GL_KG = 4.1209;
constant float GL_KWA = 0.5;
constant float GL_KR = 0.32;
constant float GL_GH = 1.7320508;
constant float GL_CLEAR_EA = 0.995;
constant float GL_CLEAR_EB = 1.04;

float mfEdgeD(
    float soft
) {
    return soft - 0.005;
}

metal::float3 mfEdgeGlow(
    metal::float3 col,
    metal::float2 uv,
    metal::float2 ctr,
    float rad,
    float soft_1,
    float glow,
    metal::float3 glowRGB
) {
    if (glow <= 0.0) {
        return col;
    }
    float r_3 = metal::length(uv - ctr);
    float outside = metal::smoothstep(rad - metal::max(soft_1, 0.0005), rad + metal::max(soft_1, 0.0005), r_3);
    return col + (glowRGB * ((glow * metal::exp(-(metal::max(r_3 - rad, 0.0)) * 11.0)) * outside));
}

metal::float3 mfRampPick(
    float idx,
    metal::float3 s0_,
    metal::float3 s1_,
    metal::float3 s2_,
    metal::float3 s3_,
    metal::float3 s4_,
    metal::float3 s5_,
    metal::float3 s6_,
    metal::float3 s7_,
    metal::float3 s8_,
    metal::float3 s9_,
    metal::float3 s10_,
    metal::float3 s11_
) {
    metal::float3 r = {};
    r = s0_;
    metal::float3 _e14 = r;
    r = (idx == 1.0) ? s1_ : _e14;
    metal::float3 _e18 = r;
    r = (idx == 2.0) ? s2_ : _e18;
    metal::float3 _e22 = r;
    r = (idx == 3.0) ? s3_ : _e22;
    metal::float3 _e26 = r;
    r = (idx == 4.0) ? s4_ : _e26;
    metal::float3 _e30 = r;
    r = (idx == 5.0) ? s5_ : _e30;
    metal::float3 _e34 = r;
    r = (idx == 6.0) ? s6_ : _e34;
    metal::float3 _e38 = r;
    r = (idx == 7.0) ? s7_ : _e38;
    metal::float3 _e42 = r;
    r = (idx == 8.0) ? s8_ : _e42;
    metal::float3 _e46 = r;
    r = (idx == 9.0) ? s9_ : _e46;
    metal::float3 _e50 = r;
    r = (idx == 10.0) ? s10_ : _e50;
    metal::float3 _e54 = r;
    r = (idx == 11.0) ? s11_ : _e54;
    metal::float3 _e58 = r;
    return _e58;
}

metal::float3 mfRampCyc(
    float tIn,
    float n,
    metal::float3 s0_1,
    metal::float3 s1_1,
    metal::float3 s2_1,
    metal::float3 s3_1,
    metal::float3 s4_1,
    metal::float3 s5_1,
    metal::float3 s6_1,
    metal::float3 s7_1,
    metal::float3 s8_1,
    metal::float3 s9_1,
    metal::float3 s10_1,
    metal::float3 s11_1
) {
    float k_3 = metal::clamp(metal::floor(n + 0.5), 1.0, 12.0);
    float x = metal::fract(tIn) * k_3;
    float i0_ = metal::min(metal::floor(x), k_3 - 1.0);
    float i1_ = ((i0_ + 1.0) >= k_3) ? 0.0 : i0_ + 1.0;
    metal::float3 _e33 = mfRampPick(i0_, s0_1, s1_1, s2_1, s3_1, s4_1, s5_1, s6_1, s7_1, s8_1, s9_1, s10_1, s11_1);
    metal::float3 _e34 = mfRampPick(i1_, s0_1, s1_1, s2_1, s3_1, s4_1, s5_1, s6_1, s7_1, s8_1, s9_1, s10_1, s11_1);
    return metal::mix(_e33, _e34, x - i0_);
}

metal::float3 mfRampLin(
    float tIn_1,
    float n_1,
    metal::float3 s0_2,
    metal::float3 s1_2,
    metal::float3 s2_2,
    metal::float3 s3_2,
    metal::float3 s4_2,
    metal::float3 s5_2,
    metal::float3 s6_2,
    metal::float3 s7_2,
    metal::float3 s8_2,
    metal::float3 s9_2,
    metal::float3 s10_2,
    metal::float3 s11_2
) {
    float k_4 = metal::clamp(metal::floor(n_1 + 0.5), 1.0, 12.0);
    float x_1 = metal::clamp(tIn_1, 0.0, 1.0) * (k_4 - 1.0);
    float i0_1 = metal::clamp(metal::floor(x_1), 0.0, metal::max(k_4 - 2.0, 0.0));
    metal::float3 _e33 = mfRampPick(i0_1, s0_2, s1_2, s2_2, s3_2, s4_2, s5_2, s6_2, s7_2, s8_2, s9_2, s10_2, s11_2);
    metal::float3 _e36 = mfRampPick(i0_1 + 1.0, s0_2, s1_2, s2_2, s3_2, s4_2, s5_2, s6_2, s7_2, s8_2, s9_2, s10_2, s11_2);
    return metal::mix(_e33, _e36, x_1 - i0_1);
}

MfRamp mfRampOf(
    float n_2,
    metal::float3 s0_3,
    metal::float3 s1_3,
    metal::float3 s2_3,
    metal::float3 s3_3,
    metal::float3 s4_3,
    metal::float3 s5_3,
    metal::float3 s6_3,
    metal::float3 s7_3,
    metal::float3 s8_3,
    metal::float3 s9_3,
    metal::float3 s10_3,
    metal::float3 s11_3
) {
    return MfRamp {n_2, {}, s0_3, s1_3, s2_3, s3_3, s4_3, s5_3, s6_3, s7_3, s8_3, s9_3, s10_3, s11_3};
}

metal::float3 mfRampCycR(
    float t,
    MfRamp r_1
) {
    metal::float3 _e15 = mfRampCyc(t, r_1.n, r_1.s0_, r_1.s1_, r_1.s2_, r_1.s3_, r_1.s4_, r_1.s5_, r_1.s6_, r_1.s7_, r_1.s8_, r_1.s9_, r_1.s10_, r_1.s11_);
    return _e15;
}

metal::float3 mfRampLinR(
    float t_1,
    MfRamp r_2
) {
    metal::float3 _e15 = mfRampLin(t_1, r_2.n, r_2.s0_, r_2.s1_, r_2.s2_, r_2.s3_, r_2.s4_, r_2.s5_, r_2.s6_, r_2.s7_, r_2.s8_, r_2.s9_, r_2.s10_, r_2.s11_);
    return _e15;
}

float lqHash(
    metal::float2 pIn
) {
    metal::float2 p_1 = {};
    p_1 = metal::fract(pIn * metal::float2(123.34, 456.21));
    metal::float2 _e7 = p_1;
    metal::float2 _e8 = p_1;
    metal::float2 _e9 = p_1;
    p_1 = _e7 + metal::float2(metal::dot(_e8, _e9 + metal::float2(45.32)));
    float _e17 = p_1.x;
    float _e19 = p_1.y;
    return metal::fract(_e17 * _e19);
}

float lqNoise(
    metal::float2 p_2
) {
    metal::float2 f = {};
    metal::float2 i_4 = metal::floor(p_2);
    f = metal::fract(p_2);
    metal::float2 _e4 = f;
    metal::float2 _e5 = f;
    metal::float2 _e7 = f;
    f = (_e4 * _e5) * (metal::float2(3.0) - (2.0 * _e7));
    float _e14 = lqHash(i_4);
    float _e19 = lqHash(i_4 + metal::float2(1.0, 0.0));
    float _e21 = f.x;
    float _e27 = lqHash(i_4 + metal::float2(0.0, 1.0));
    float _e32 = lqHash(i_4 + metal::float2(1.0, 1.0));
    float _e34 = f.x;
    float _e37 = f.y;
    return metal::mix(metal::mix(_e14, _e19, _e21), metal::mix(_e27, _e32, _e34), _e37);
}

metal::float2 lqFbm(
    metal::float2 pIn_1,
    float bs
) {
    metal::float2 p_3 = {};
    float s = 0.0;
    float a = 0.5;
    float m = 0.0;
    float vr = 0.0;
    float g = 1.0;
    int i_1 = 0;
    p_3 = pIn_1;
    float e = (-6.0 * bs) * bs;
    uint2 loop_bound = uint2(4294967295u);
    bool loop_init = true;
    while(true) {
        if (metal::all(loop_bound == uint2(0u))) { break; }
        loop_bound -= uint2(loop_bound.y == 0u, 1u);
        if (!loop_init) {
            int _e74 = i_1;
            i_1 = as_type<int>(as_type<uint>(_e74) + as_type<uint>(1));
        }
        loop_init = false;
        int _e18 = i_1;
        if (_e18 < 5) {
        } else {
            break;
        }
        {
            float _e21 = g;
            float b_1 = metal::exp(e * _e21);
            float _e24 = s;
            float _e25 = a;
            metal::float2 _e26 = p_3;
            float _e27 = lqNoise(_e26);
            s = _e24 + (_e25 * (0.5 + (b_1 * (_e27 - 0.5))));
            float _e35 = vr;
            float _e36 = a;
            float _e37 = a;
            vr = _e35 + ((_e36 * _e37) * (1.0 - (b_1 * b_1)));
            float _e44 = m;
            float _e45 = a;
            m = _e44 + _e45;
            float _e47 = a;
            a = _e47 * 0.5;
            float _e50 = g;
            g = _e50 * GL_KG;
            float _e54 = p_3.x;
            float _e58 = p_3.y;
            float _e63 = p_3.x;
            float _e67 = p_3.y;
            p_3 = metal::float2((0.8 * _e54) - (0.6 * _e58), (0.6 * _e63) + (0.8 * _e67)) * 2.03;
        }
    }
    float _e77 = s;
    float _e78 = m;
    float _e81 = vr;
    float _e84 = m;
    return metal::float2(_e77 / _e78, (GL_KR * metal::sqrt(_e81)) / _e84);
}

float lqRidge(
    float v,
    float k
) {
    return metal::pow(metal::clamp(1.0 - metal::abs((v * 2.0) - 1.0), 0.0, 1.0), k);
}

metal::float3 lqRamp(
    float v_1,
    metal::float3 cA,
    metal::float3 cB,
    metal::float3 cC,
    metal::float3 cD,
    constant Uniforms& u
) {
    metal::float3 c = {};
    c = metal::mix(cA, cB, metal::smoothstep(0.0, 0.45, v_1));
    metal::float3 _e10 = c;
    c = metal::mix(_e10, cC, metal::smoothstep(0.38, 0.72, v_1));
    metal::float3 _e15 = c;
    c = metal::mix(_e15, cD, metal::smoothstep(0.68, 1.0, v_1));
    metal::float3 _e20 = c;
    float _e23 = u.paletteCount;
    metal::float4 _e26 = u.paletteStop0_;
    metal::float4 _e30 = u.paletteStop1_;
    metal::float4 _e34 = u.paletteStop2_;
    metal::float4 _e38 = u.paletteStop3_;
    metal::float4 _e42 = u.paletteStop4_;
    metal::float4 _e46 = u.paletteStop5_;
    metal::float4 _e50 = u.paletteStop6_;
    metal::float4 _e54 = u.paletteStop7_;
    metal::float4 _e58 = u.paletteStop8_;
    metal::float4 _e62 = u.paletteStop9_;
    metal::float4 _e66 = u.paletteStop10_;
    metal::float4 _e70 = u.paletteStop11_;
    metal::float3 _e72 = mfRampLin(v_1, _e23, _e26.xyz, _e30.xyz, _e34.xyz, _e38.xyz, _e42.xyz, _e46.xyz, _e50.xyz, _e54.xyz, _e58.xyz, _e62.xyz, _e66.xyz, _e70.xyz);
    float _e75 = u.paletteCount;
    return (_e75 > 0.5) ? _e72 : _e20;
}

float lqRidgeS(
    metal::float2 vs,
    float k_1
) {
    float d_1 = GL_GH * vs.y;
    float _e7 = lqRidge(vs.x - d_1, k_1);
    float _e9 = lqRidge(vs.x, k_1);
    float _e15 = lqRidge(vs.x + d_1, k_1);
    return ((_e7 + (4.0 * _e9)) + _e15) / 6.0;
}

float lqStepS(
    metal::float2 vs_1,
    float a_1,
    float b
) {
    float d_2 = GL_GH * vs_1.y;
    return ((metal::smoothstep(a_1, b, vs_1.x - d_2) + (4.0 * metal::smoothstep(a_1, b, vs_1.x))) + metal::smoothstep(a_1, b, vs_1.x + d_2)) / 6.0;
}

float lqPowS(
    metal::float2 vs_2,
    float k_2
) {
    float d_3 = GL_GH * vs_2.y;
    return ((metal::pow(metal::clamp(vs_2.x - d_3, 0.0, 1.0), k_2) + (4.0 * metal::pow(metal::clamp(vs_2.x, 0.0, 1.0), k_2))) + metal::pow(metal::clamp(vs_2.x + d_3, 0.0, 1.0), k_2)) / 6.0;
}

metal::float3 glsFinishPresetFluid(
    metal::float3 colorIn,
    metal::float2 p_4,
    constant Uniforms& u
) {
    metal::float3 color = {};
    color = colorIn;
    metal::float3 _e3 = color;
    metal::float4 _e6 = u.highlightColor;
    float _e10 = u.shade;
    color = metal::mix(_e3, _e6.xyz, (_e10 * 0.22) * metal::smoothstep(0.15, 1.15, metal::dot(p_4, metal::float2(-0.32, 0.78))));
    metal::float3 _e22 = color;
    float _e25 = u.shade;
    color = _e22 * (1.0 - ((_e25 * 0.34) * metal::smoothstep(-0.1, 1.2, metal::dot(p_4, metal::float2(0.45, -0.62)))));
    metal::float3 _e39 = color;
    float _e42 = u.shade;
    color = _e39 * (1.0 - ((_e42 * 0.22) * metal::smoothstep(0.72, 1.08, metal::length(p_4))));
    metal::float3 _e53 = color;
    return metal::clamp(_e53, metal::float3(0.0), metal::float3(1.0));
}

metal::float3 glsFinishEmissionFluid(
    metal::float3 colorIn,
    metal::float2 p,
    constant Uniforms& u
) {
    metal::float3 color = colorIn;
    if (u.glassEnabled > 0.5) {
        color = metal::mix(
            color,
            u.highlightColor.xyz,
            u.shade * 0.22
                * metal::smoothstep(0.15, 1.15, metal::dot(p, metal::float2(-0.32, 0.78)))
        );
    }
    color *= 1.0 - u.shade * 0.34
        * metal::smoothstep(-0.1, 1.2, metal::dot(p, metal::float2(0.45, -0.62)));
    color *= 1.0 - u.shade * 0.22
        * metal::smoothstep(0.72, 1.08, metal::length(p));
    return metal::clamp(color, metal::float3(0.0), metal::float3(1.0));
}

metal::float2 glsSiriBand(
    metal::float2 q,
    float drift,
    float phaseOffset,
    float amplitude,
    float mainY,
    float envelope,
    float softness
) {
    float y = (amplitude * envelope) * metal::sin(((q.x * 1.0) + drift) + phaseOffset);
    float distanceToLine = metal::abs(q.y - y);
    float line = 0.018 / (metal::sqrt((distanceToLine * distanceToLine) + (softness * softness)) + 0.026);
    float bandDistance = metal::max(0.0, metal::max(q.y - metal::max(mainY, y), metal::min(mainY, y) - q.y));
    float band = 0.018 / (bandDistance + 0.075);
    return metal::float2(line, band);
}

metal::float3 glsSiriFluid(
    metal::float2 p_5,
    float t_2,
    constant Uniforms& u
) {
    metal::float3 color_1 = {};
    float _e4 = u.zoom;
    float scale_1 = 0.74 + (_e4 * 0.34);
    metal::float2 q_5 = p_5 / metal::float2(scale_1);
    float xNorm = q_5.x;
    float envelopeBase = metal::cos(1.5707964 * metal::min(metal::abs(0.9 * xNorm), 1.0));
    float envelope_1 = envelopeBase * envelopeBase;
    float low = 0.5 + (0.5 * metal::cos(t_2 * 0.37));
    float mid = 0.5 + (0.5 * metal::sin((t_2 * 0.51) + 1.2));
    float high = 0.5 + (0.5 * metal::cos((t_2 * 0.73) + 2.1));
    float drift_1 = t_2 * 2.4;
    float _e50 = u.ridgeAmt;
    float mainAmplitude = (0.25 + (_e50 * 0.075)) + (low * 0.018);
    float bandAmplitude = (mainAmplitude + (mid * 0.025)) + (high * 0.018);
    float mainY_1 = (mainAmplitude * envelope_1) * metal::sin((q_5.x * 1.1) + drift_1);
    float _e73 = u.warp;
    float separation = (1.85 + (_e73 * 0.2)) + (mid * 0.28);
    float _e83 = u.ridgeAmt;
    float softness_2 = (0.035 + ((1.0 - _e83) * 0.018)) + (mid * 0.006);
    metal::float2 _e94 = glsSiriBand(q_5, drift_1, -(separation), bandAmplitude, mainY_1, envelope_1, softness_2);
    metal::float2 _e98 = glsSiriBand(q_5, drift_1, -(separation) * 0.34, bandAmplitude, mainY_1, envelope_1, softness_2);
    metal::float2 _e101 = glsSiriBand(q_5, drift_1, separation * 0.34, bandAmplitude, mainY_1, envelope_1, softness_2);
    metal::float2 _e102 = glsSiriBand(q_5, drift_1, separation, bandAmplitude, mainY_1, envelope_1, softness_2);
    float w0_ = _e94.x + _e94.y;
    float w1_ = _e98.x + _e98.y;
    float w2_ = _e101.x + _e101.y;
    float w3_ = _e102.x + _e102.y;
    float total = ((w0_ + w1_) + w2_) + w3_;
    float dominant0_ = w0_ * w0_;
    float dominant1_ = w1_ * w1_;
    float dominant2_ = w2_ * w2_;
    float dominant3_ = w3_ * w3_;
    float dominantTotal = ((dominant0_ + dominant1_) + dominant2_) + dominant3_;
    metal::float4 _e127 = u.colorA;
    metal::float4 _e132 = u.colorC;
    metal::float4 _e138 = u.colorB;
    metal::float4 _e144 = u.colorD;
    metal::float3 spectral = ((((_e127.xyz * dominant0_) + (_e132.xyz * dominant1_)) + (_e138.xyz * dominant2_)) + (_e144.xyz * dominant3_)) / metal::float3(metal::max(dominantTotal, 0.0001));
    float energy = (1.0 - metal::exp(-(total) * 0.58)) * envelope_1;
    float mainDistance = metal::abs(q_5.y - mainY_1);
    float whiteCore = metal::exp((-(mainDistance) * mainDistance) / 0.0028) * envelope_1;
    metal::float4 _e170 = u.colorD;
    metal::float4 _e174 = u.colorB;
    float glassFill = u.glassEnabled > 0.5 ? 1.0 : 0.0;
    metal::float3 atmosphere = metal::mix(
        _e170.xyz, _e174.xyz, metal::smoothstep(-0.7, 0.7, q_5.y)) * 0.018 * glassFill;
    color_1 = atmosphere + ((spectral * energy) * 1.14);
    metal::float3 _e188 = color_1;
    metal::float4 _e191 = u.highlightColor;
    color_1 = _e188 + ((_e191.xyz * whiteCore) * (0.18 + (0.1 * low)));
    float emissionMask = metal::mix(
        metal::smoothstep(0.08, 0.25, energy + whiteCore * 0.12),
        1.0,
        glassFill
    );
    color_1 *= emissionMask;
    metal::float3 _e200 = color_1;
    metal::float3 _e203 = color_1;
    color_1 = _e200 / (metal::float3(1.0) + (_e203 * 0.18));
    metal::float3 _e208 = color_1;
    metal::float3 _e209 = glsFinishEmissionFluid(_e208, p_5, u);
    return _e209;
}

float glsSpectrumHeight(
    metal::float2 q_1,
    float t_3,
    float frequency,
    float phaseOffset_1,
    float amplitude_1
) {
    float x_2 = q_1.x * 2.15;
    float envelope_2 = metal::pow(4.0 / (4.0 + (x_2 * x_2)), 4.0);
    float breathing = 0.82 + (0.18 * metal::sin((t_3 * 0.48) + (phaseOffset_1 * 0.7)));
    float wave = metal::abs(metal::sin(((frequency * x_2) - (t_3 * 1.36)) + phaseOffset_1));
    return ((envelope_2 * amplitude_1) * breathing) * (0.28 + (0.72 * wave));
}

float glsSpectrumLayer(
    metal::float2 q_2,
    float height,
    float softness_1
) {
    return (1.0 - metal::smoothstep(metal::max(height - softness_1, 0.0), height + softness_1, metal::abs(q_2.y))) * metal::smoothstep(0.0, 0.045, height);
}

metal::float3 glsSpectrumFluid(
    metal::float2 p_6,
    float t_4,
    constant Uniforms& u
) {
    metal::float3 color_2 = {};
    float _e4 = u.zoom;
    float scale_2 = 0.74 + (_e4 * 0.34);
    metal::float2 q_6 = p_6 / metal::float2(scale_2);
    float _e13 = u.ridgeAmt;
    float amplitude_2 = 0.26 + (_e13 * 0.27);
    float _e20 = u.warp;
    float frequency_1 = 0.72 + (_e20 * 0.095);
    float _e27 = u.ridgeAmt;
    float softness_3 = 0.026 + ((1.0 - _e27) * 0.032);
    float _e39 = glsSpectrumHeight(q_6, t_4, frequency_1 * 0.82, -1.2, amplitude_2 * 0.72);
    float _e41 = glsSpectrumHeight(q_6, t_4, frequency_1, 0.45, amplitude_2);
    float _e47 = glsSpectrumHeight(q_6, t_4, frequency_1 * 1.17, 2.05, amplitude_2 * 0.82);
    float _e48 = glsSpectrumLayer(q_6, _e39, softness_3);
    float _e49 = glsSpectrumLayer(q_6, _e41, softness_3);
    float _e50 = glsSpectrumLayer(q_6, _e47, softness_3);
    float spectrumX = q_6.x * 2.15;
    float envelope_3 = metal::pow(4.0 / (4.0 + (spectrumX * spectrumX)), 4.0);
    float support = metal::exp((-(q_6.y) * q_6.y) / 0.00072) * envelope_3;
    float total_1 = (_e48 + _e49) + _e50;
    metal::float4 _e73 = u.colorB;
    metal::float4 _e78 = u.colorC;
    metal::float4 _e84 = u.colorD;
    metal::float3 spectral_1 = (((_e73.xyz * _e48) + (_e78.xyz * _e49)) + (_e84.xyz * _e50)) / metal::float3(metal::max(total_1, 0.001));
    metal::float4 _e94 = u.colorD;
    float glassFill = u.glassEnabled > 0.5 ? 1.0 : 0.0;
    color_2 = (_e94.xyz * 0.025 * glassFill)
            + (spectral_1 * (1.0 - metal::exp(-(total_1) * 0.86)));
    metal::float3 _e107 = color_2;
    metal::float4 _e110 = u.colorA;
    color_2 = _e107 + ((_e110.xyz * support) * 0.58);
    metal::float3 _e116 = color_2;
    metal::float3 _e119 = color_2;
    color_2 = _e116 / (metal::float3(1.0) + (_e119 * 0.2));
    metal::float3 _e124 = color_2;
    metal::float3 _e125 = glsFinishEmissionFluid(_e124, p_6, u);
    return _e125;
}

float glsAuroraLayer(
    metal::float2 p_7,
    float t_5,
    float offset,
    constant Uniforms& u
) {
    float drift_2 = (t_5 * 0.18) + (offset * 2.5);
    float _e11 = u.warp;
    float wave1_ = metal::sin(((p_7.x * (2.0 + (_e11 * 0.13))) + drift_2) + (offset * 6.0)) * 0.25;
    float wave2_ = metal::sin(((p_7.x * 3.7) + (drift_2 * 1.3)) + (offset * 4.0)) * 0.12;
    float wave3_ = metal::sin(((p_7.x * 7.2) + (drift_2 * 0.7)) + (offset * 8.0)) * 0.055;
    metal::float2 _e62 = lqFbm(metal::float2((p_7.x * 1.6) + (drift_2 * 0.35), (p_7.y * 0.8) + (offset * 3.0)), 0.018);
    float noiseValue = _e62.x;
    float center = ((((offset * 0.46) + wave1_) + wave2_) + wave3_) + ((noiseValue - 0.5) * 0.28);
    float dist = metal::abs(p_7.y - center);
    float _e81 = u.ridgeAmt;
    float glow_1 = metal::exp((-(dist) * dist) * (13.0 - (5.0 * _e81)));
    metal::float2 _e102 = lqFbm(metal::float2((p_7.x * 4.0) + (t_5 * 0.22), (p_7.y * 7.0) + (offset * 5.0)), 0.012);
    float shimmer = _e102.x;
    return glow_1 * (0.64 + (0.36 * shimmer));
}

metal::float3 glsAuroraFluid(
    metal::float2 p_8,
    float t_6,
    constant Uniforms& u
) {
    metal::float3 color_3 = {};
    float _e4 = u.zoom;
    metal::float2 q_7 = p_8 * (0.82 + (_e4 * 0.58));
    float _e11 = glsAuroraLayer(q_7, t_6, -0.72, u);
    float _e13 = glsAuroraLayer(q_7, t_6, 0.0, u);
    float _e15 = glsAuroraLayer(q_7, t_6, 0.72, u);
    metal::float4 _e18 = u.colorA;
    color_3 = _e18.xyz * (0.46 + (0.18 * (q_7.y + 1.0)));
    metal::float3 _e29 = color_3;
    metal::float4 _e32 = u.colorB;
    color_3 = _e29 + ((_e32.xyz * _e11) * 1.3);
    metal::float3 _e38 = color_3;
    metal::float4 _e41 = u.colorC;
    color_3 = _e38 + ((_e41.xyz * _e13) * 1.15);
    metal::float3 _e47 = color_3;
    metal::float4 _e50 = u.colorD;
    color_3 = _e47 + ((_e50.xyz * _e15) * 1.2);
    metal::float3 _e56 = color_3;
    metal::float4 _e59 = u.colorB;
    metal::float4 _e63 = u.colorD;
    color_3 = _e56 + ((metal::mix(_e59.xyz, _e63.xyz, 0.5) * metal::min(_e11 * _e15, _e13)) * 0.65);
    metal::float2 starUv = (q_7 + metal::float2(1.0)) * 18.0;
    metal::float2 starCell = metal::floor(starUv);
    float _e79 = lqHash(starCell);
    float starPoint = metal::exp(-(metal::dot(metal::fract(starUv) - metal::float2(0.5), metal::fract(starUv) - metal::float2(0.5))) * 90.0);
    float stars = (metal::step(0.965, _e79) * starPoint) * (0.55 + (0.45 * metal::sin((t_6 * (1.0 + (_e79 * 2.0))) + (_e79 * 6.28))));
    metal::float3 _e110 = color_3;
    metal::float4 _e113 = u.highlightColor;
    color_3 = _e110 + ((_e113.xyz * stars) * (1.0 - metal::clamp((_e11 + _e13) + _e15, 0.0, 1.0)));
    metal::float3 _e125 = color_3;
    metal::float3 _e128 = color_3;
    color_3 = _e125 / (metal::float3(1.0) + (_e128 * 0.28));
    metal::float3 _e133 = color_3;
    metal::float3 _e134 = glsFinishPresetFluid(_e133, p_8, u);
    return _e134;
}

metal::float2 glsRotate(
    metal::float2 p_9,
    float angle
) {
    float c_1 = metal::cos(angle);
    float s_1 = metal::sin(angle);
    return metal::float2((c_1 * p_9.x) - (s_1 * p_9.y), (s_1 * p_9.x) + (c_1 * p_9.y));
}

float glsNeuroShape(
    metal::float2 pIn_2,
    float t_7,
    constant Uniforms& u
) {
    metal::float2 p_10 = {};
    metal::float2 sineAccum = metal::float2(0.0);
    metal::float2 result = metal::float2(0.0);
    float scale = 8.0;
    int j = 0;
    float _e4 = u.zoom;
    p_10 = pIn_2 * (0.34 + (0.08 * _e4));
    uint2 loop_bound_1 = uint2(4294967295u);
    bool loop_init_1 = true;
    while(true) {
        if (metal::all(loop_bound_1 == uint2(0u))) { break; }
        loop_bound_1 -= uint2(loop_bound_1.y == 0u, 1u);
        if (!loop_init_1) {
            int _e60 = j;
            j = as_type<int>(as_type<uint>(_e60) + as_type<uint>(1));
        }
        loop_init_1 = false;
        int _e21 = j;
        if (_e21 < 11) {
        } else {
            break;
        }
        {
            metal::float2 _e24 = p_10;
            metal::float2 _e26 = glsRotate(_e24, 1.0);
            p_10 = _e26;
            metal::float2 _e27 = sineAccum;
            metal::float2 _e29 = glsRotate(_e27, 1.0);
            sineAccum = _e29;
            metal::float2 _e30 = p_10;
            float _e31 = scale;
            int _e33 = j;
            metal::float2 _e37 = sineAccum;
            metal::float2 layer = (((_e30 * _e31) + metal::float2(static_cast<float>(_e33))) + _e37) - metal::float2(t_7 * 0.34);
            metal::float2 _e43 = sineAccum;
            sineAccum = _e43 + metal::sin(layer);
            metal::float2 _e46 = result;
            float _e53 = scale;
            result = _e46 + ((metal::float2(0.5) + (0.5 * metal::cos(layer))) / metal::float2(_e53));
            float _e57 = scale;
            scale = _e57 * 1.16;
        }
    }
    float _e64 = result.x;
    float _e66 = result.y;
    return _e64 + _e66;
}

metal::float3 glsPlasmaFluid(
    metal::float2 p_11,
    float t_8,
    constant Uniforms& u
) {
    metal::float3 color_4 = {};
    float _e2 = glsNeuroShape(p_11, t_8, u);
    float _e5 = u.warp;
    float phase = (((_e2 * (10.0 + _e5)) + (p_11.x * 1.7)) - (p_11.y * 1.3)) - (t_8 * 0.52);
    float _e22 = u.ridgeAmt;
    float ridgeWidth = 0.62 - (0.24 * _e22);
    float _e32 = u.sharp;
    float primary = metal::pow(metal::abs(metal::cos(phase)), metal::max(1.3, _e32 * ridgeWidth));
    float _e52 = u.sharp;
    float secondary = metal::pow(metal::abs(metal::cos(((phase * 0.53) + (metal::atan2(p_11.y, p_11.x) * 2.0)) + (t_8 * 0.21))), metal::max(1.6, _e52 * (ridgeWidth + 0.1)));
    float filaments = metal::max(primary, secondary * 0.64);
    float core = metal::pow(primary, 4.0);
    float polarity = 0.5 + (0.5 * metal::sin((phase * 0.37) + (_e2 * 3.0)));
    metal::float4 _e75 = u.colorA;
    metal::float4 _e81 = u.colorD;
    color_4 = metal::mix(_e75.xyz * 0.42, _e81.xyz * 0.48, polarity * 0.46);
    metal::float3 _e89 = color_4;
    metal::float4 _e92 = u.colorB;
    color_4 = metal::mix(_e89, _e92.xyz, filaments * 0.72);
    metal::float3 _e97 = color_4;
    metal::float4 _e100 = u.colorC;
    color_4 = metal::mix(_e97, _e100.xyz, core * 0.68);
    metal::float3 _e105 = color_4;
    metal::float4 _e108 = u.highlightColor;
    color_4 = _e105 + ((_e108.xyz * metal::pow(core, 3.0)) * 0.16);
    metal::float3 _e116 = color_4;
    metal::float3 _e119 = color_4;
    color_4 = _e116 / (metal::float3(1.0) + (_e119 * 0.34));
    metal::float3 _e124 = color_4;
    metal::float3 _e125 = glsFinishPresetFluid(_e124, p_11, u);
    return _e125;
}

metal::float3 glsChromeFluid(
    metal::float2 p_12,
    float t_9,
    constant Uniforms& u
) {
    metal::float2 q_3 = {};
    int i_2 = 1;
    metal::float3 color_5 = {};
    float _e4 = u.zoom;
    q_3 = p_12 * (1.0 + (_e4 * 0.35));
    float _e13 = u.warp;
    float amplitude_3 = 0.028 * _e13;
    uint2 loop_bound_2 = uint2(4294967295u);
    bool loop_init_2 = true;
    while(true) {
        if (metal::all(loop_bound_2 == uint2(0u))) { break; }
        loop_bound_2 -= uint2(loop_bound_2.y == 0u, 1u);
        if (!loop_init_2) {
            int _e53 = i_2;
            i_2 = as_type<int>(as_type<uint>(_e53) + as_type<uint>(1));
        }
        loop_init_2 = false;
        int _e18 = i_2;
        if (_e18 <= 9) {
        } else {
            break;
        }
        {
            int _e21 = i_2;
            float fi = static_cast<float>(_e21);
            float _e25 = q_3.x;
            float _e30 = q_3.y;
            q_3.x = _e25 + ((amplitude_3 / fi) * metal::cos(((fi * 2.7) * _e30) + (t_9 * 0.46)));
            float _e40 = q_3.y;
            float _e45 = q_3.x;
            q_3.y = _e40 + ((amplitude_3 / fi) * metal::cos(((fi * 3.1) * _e45) - (t_9 * 0.4)));
        }
    }
    float _e59 = q_3.y;
    float _e62 = q_3.x;
    float denominator = metal::max(metal::abs(metal::sin(((t_9 * 0.24) - _e59) - _e62)), 0.045);
    float flare = metal::clamp(1.0 / denominator, 0.0, 18.0);
    float metal_ = metal::smoothstep(1.15, 7.5, flare);
    float _e77 = q_3.x;
    float _e79 = q_3.y;
    float _e83 = u.sharp;
    float fold = 0.5 + (0.5 * metal::cos(((_e77 - _e79) * (3.2 + (_e83 * 0.28))) + (t_9 * 0.32)));
    float value = metal::clamp((metal_ * 0.74) + (fold * 0.36), 0.0, 1.0);
    metal::float4 _e107 = u.colorD;
    metal::float4 _e111 = u.colorC;
    metal::float4 _e115 = u.colorB;
    metal::float4 _e119 = u.colorA;
    metal::float3 _e121 = lqRamp(value, _e107.xyz, _e111.xyz, _e115.xyz, _e119.xyz, u);
    color_5 = _e121;
    metal::float3 _e123 = color_5;
    metal::float4 _e126 = u.colorA;
    color_5 = metal::mix(_e123, _e126.xyz, metal::pow(metal_, 5.0) * 0.62);
    metal::float3 _e133 = color_5;
    metal::float3 _e134 = glsFinishPresetFluid(_e133, p_12, u);
    return _e134;
}

float glsChromaticMetalPhase(
    metal::float2 p,
    float t,
    constant Uniforms& u
) {
    float angle = u.metalAngle * 0.01745329252;
    float scale = metal::max(u.metalScale, 0.05);
    float stretch = metal::mix(0.48, 1.58, metal::clamp(u.metalStretch, 0.0, 1.0));
    metal::float2 q = glsRotate(p / scale, angle);
    q = metal::float2(q.x / stretch, q.y * stretch);
    float cycle = t * 0.46 + u.metalPhase * 6.28318530718;
    float evolution = metal::clamp(u.metalEvolution, 0.0, 2.0);
    q.x += metal::sin(q.y * 1.86 - cycle) * 0.095 * evolution;
    q.x += metal::sin((q.x + q.y) * 1.28 + cycle * 2.0 + 1.4) * 0.045 * evolution;
    q.y += metal::sin(q.x * 1.52 + cycle + 0.8) * 0.07 * evolution;
    float repeats = metal::max(u.bandDensity, 1.0);
    return q.x * repeats * 2.18
         + metal::sin(q.y * (1.3 + repeats * 0.26) - cycle) * 0.56 * evolution
         + metal::sin((q.x - q.y) * 1.34 + cycle * 2.0 + 1.7) * 0.27 * evolution
         + metal::sin((q.x * 0.72 + q.y) * 2.1 - cycle * 3.0 + 0.35) * 0.11 * evolution
         + metal::sin(cycle) * 0.1
         + metal::sin(cycle * 3.0 + 0.7) * 0.035
         + cycle
         + u.metalOffset * 6.28318530718;
}

float glsChromaticMetalTone(
    float phase,
    constant Uniforms& u
) {
    float wave = 0.5 + 0.5 * metal::cos(phase);
    float roughness = metal::clamp(u.metalRoughness, 0.0, 1.0);
    float depth = metal::clamp(u.metalDepth, 0.0, 1.0);
    float edge = 0.025 + roughness * 0.18;
    float broadReflection = metal::smoothstep(0.5 - edge, 0.5 + edge, wave);
    float hardReflection = metal::pow(wave, metal::mix(13.0, 4.0, roughness));
    float blackFold = metal::pow(1.0 - wave, metal::mix(9.0, 3.0, roughness));
    float body = metal::mix(wave, broadReflection, 0.2 + depth * 0.3);
    return metal::clamp(0.018 + body * (0.46 + depth * 0.12)
                        + hardReflection * (0.3 + depth * 0.42)
                        - blackFold * (0.07 + depth * 0.11), 0.0, 1.0);
}

metal::float3 glsChromaticMetalSample(
    metal::float2 p,
    float t,
    constant Uniforms& u
) {
    float phase = glsChromaticMetalPhase(p, t, u);
    float angle = u.metalAngle * 0.01745329252;
    metal::float2 brushP = glsRotate(p / metal::max(u.metalScale, 0.05), angle);
    float brushed = metal::sin(brushP.y * 146.0
                               + metal::sin(brushP.x * 11.0) * 0.58)
                  + 0.48 * metal::sin(brushP.y * 317.0 - brushP.x * 5.0);
    float brushAmount = 0.004 + metal::clamp(u.metalRoughness, 0.0, 1.0) * 0.014;
    float tone = metal::clamp(glsChromaticMetalTone(phase, u)
                              + brushed * brushAmount, 0.0, 1.0);
    return lqRamp(tone, u.colorD.xyz, u.colorB.xyz, u.colorC.xyz, u.colorA.xyz, u);
}

metal::float3 glsChromaticMetalFluid(
    metal::float2 p,
    float t,
    constant Uniforms& u
) {
    float angle = u.metalAngle * 0.01745329252;
    metal::float2 splitDirection = glsRotate(metal::float2(0.0, 1.0), angle);
    metal::float2 split = splitDirection * u.chromaticShift * 0.045;
    metal::float3 redSample = glsChromaticMetalSample(p + split, t, u);
    metal::float3 neutral = glsChromaticMetalSample(p, t, u);
    metal::float3 blueSample = glsChromaticMetalSample(p - split, t, u);
    metal::float3 optical = metal::float3(redSample.x, neutral.y, blueSample.z);
    float fringe = metal::clamp(metal::length(optical - neutral) * 4.0, 0.0, 1.0);
    metal::float3 color = metal::mix(neutral, optical,
        metal::clamp(u.chromaticShift * (0.72 + fringe * 0.28), 0.0, 1.0));
    float centerTone = glsChromaticMetalTone(glsChromaticMetalPhase(p, t, u), u);
    float glint = metal::pow(centerTone,
        metal::mix(12.0, 5.0, metal::clamp(u.metalRoughness, 0.0, 1.0)));
    color = metal::mix(color, u.highlightColor.xyz,
        glint * metal::clamp(u.metalDepth, 0.0, 1.0) * 0.06);
    float radial2 = metal::clamp(metal::dot(p, p), 0.0, 1.0);
    metal::float3 normal = metal::normalize(metal::float3(
        p, metal::sqrt(metal::max(1.0 - radial2, 0.0))));
    float roughness = metal::clamp(u.metalRoughness, 0.0, 1.0);
    float depth = metal::clamp(u.metalDepth, 0.0, 1.0);
    float key = metal::pow(metal::max(metal::dot(normal,
        metal::normalize(metal::float3(-0.48, 0.62, 0.62))), 0.0),
        metal::mix(7.0, 3.0, roughness));
    float fill = metal::pow(metal::max(metal::dot(normal,
        metal::normalize(metal::float3(0.7, -0.34, 0.63))), 0.0),
        metal::mix(10.0, 4.0, roughness));
    float limb = 1.0 - normal.z;
    float fresnel = metal::pow(limb, 3.0);
    float rim = metal::pow(limb, 10.0);
    color *= 0.86 + normal.z * 0.14;
    color = metal::mix(color, u.highlightColor.xyz, key * (0.05 + depth * 0.13));
    color = metal::mix(color, u.colorC.xyz, fill * (0.025 + depth * 0.07));
    color = metal::mix(color, u.colorD.xyz, fresnel * (0.12 + depth * 0.15));
    color = metal::mix(color, u.highlightColor.xyz, rim * (0.035 + depth * 0.055));
    return glsFinishPresetFluid(color, p, u);
}

metal::float3 glsOpalFluid(
    metal::float2 p_13,
    float t_10,
    constant Uniforms& u
) {
    float d = {};
    float a_2 = 0.0;
    int i_3 = 0;
    metal::float3 color_6 = {};
    float _e4 = u.zoom;
    metal::float2 q_8 = p_13 * (0.8 + (_e4 * 0.64));
    float _e12 = u.warp;
    float complexity = 0.76 + (_e12 * 0.085);
    d = -(t_10) * 0.42;
    uint2 loop_bound_3 = uint2(4294967295u);
    bool loop_init_3 = true;
    while(true) {
        if (metal::all(loop_bound_3 == uint2(0u))) { break; }
        loop_bound_3 -= uint2(loop_bound_3.y == 0u, 1u);
        if (!loop_init_3) {
            int _e48 = i_3;
            i_3 = as_type<int>(as_type<uint>(_e48) + as_type<uint>(1));
        }
        loop_init_3 = false;
        int _e25 = i_3;
        if (_e25 < 8) {
        } else {
            break;
        }
        {
            int _e28 = i_3;
            float fi_1 = static_cast<float>(_e28);
            float _e30 = a_2;
            float _e31 = d;
            float _e33 = a_2;
            a_2 = _e30 + metal::cos((fi_1 - _e31) - ((_e33 * q_8.x) * complexity));
            float _e40 = d;
            float _e44 = a_2;
            d = _e40 + metal::sin(((q_8.y * fi_1) * complexity) + _e44);
        }
    }
    float _e51 = d;
    d = _e51 + (t_10 * 0.42);
    float _e55 = d;
    float _e56 = a_2;
    metal::float2 c1_ = (metal::cos(q_8 * metal::float2(_e55, _e56)) * 0.6) + metal::float2(0.4);
    float _e65 = a_2;
    float _e66 = d;
    float c2_ = (metal::cos(_e65 + _e66) * 0.5) + 0.5;
    float _e76 = d;
    float _e77 = a_2;
    metal::float3 interference = metal::float3(0.5) + (0.5 * metal::cos(((metal::float3(c1_.x, c1_.y, c2_) * metal::cos(metal::float3(_e76, _e77, 2.5))) * 0.5) + metal::float3(0.5)));
    float tone = metal::fract(((((interference.x * 0.37) + (interference.y * 0.51)) + (interference.z * 0.73)) + (c1_.x * 0.22)) - (c1_.y * 0.15));
    metal::float4 _e115 = u.colorB;
    metal::float4 _e119 = u.colorC;
    metal::float4 _e123 = u.colorD;
    metal::float4 _e127 = u.colorA;
    metal::float3 _e129 = lqRamp(tone, _e115.xyz, _e119.xyz, _e123.xyz, _e127.xyz, u);
    color_6 = _e129;
    metal::float3 _e131 = color_6;
    metal::float4 _e134 = u.colorA;
    color_6 = metal::mix(_e131, _e134.xyz, 0.16 + (0.1 * interference.z));
    metal::float3 _e142 = color_6;
    metal::float3 _e145 = color_6;
    color_6 = _e142 / (metal::float3(1.0) + (_e145 * 0.16));
    metal::float3 _e150 = color_6;
    metal::float3 _e151 = glsFinishPresetFluid(_e150, p_13, u);
    return _e151;
}

metal::float3 glsFrostFluid(
    metal::float2 p_14,
    float t_11,
    constant Uniforms& u
) {
    metal::float2 q_4 = {};
    metal::float3 color_7 = {};
    float _e4 = u.zoom;
    q_4 = p_14 * (0.66 + (_e4 * 0.92));
    float _e13 = q_4.y;
    q_4.y = _e13 + (t_11 * 0.055);
    float _e19 = u.zoom;
    float blur = 0.011 + (0.006 * _e19);
    metal::float2 _e24 = q_4;
    metal::float2 _e32 = lqFbm((_e24 * 1.14) + metal::float2(t_11 * 0.055, 0.0), blur);
    metal::float2 _e34 = q_4;
    metal::float2 _e43 = lqFbm((_e34 * 1.14) + metal::float2(6.8, -(t_11) * 0.048), blur);
    metal::float2 warpField = metal::float2(_e32.x, _e43.x);
    metal::float2 _e46 = q_4;
    float _e52 = u.warp;
    metal::float2 warped = _e46 + ((warpField - metal::float2(0.5)) * (0.28 + (_e52 * 0.17)));
    metal::float2 _e70 = lqFbm((warped * 1.48) + metal::float2(t_11 * 0.032, -(t_11) * 0.02), blur * 1.48);
    metal::float2 _e81 = lqFbm((warped * 2.36) + metal::float2(3.1, -(t_11) * 0.024), blur * 2.36);
    float _e84 = u.sharp;
    float _e85 = lqRidgeS(_e81, _e84);
    float _e88 = lqStepS(_e70, 0.1, 0.9);
    float _e100 = u.ridgeAmt;
    float value_1 = metal::mix(_e88, metal::clamp((_e85 * 0.8) + (_e70.x * 0.46), 0.0, 1.0), _e100);
    metal::float4 _e104 = u.colorA;
    metal::float4 _e108 = u.colorB;
    metal::float4 _e112 = u.colorC;
    metal::float4 _e116 = u.colorD;
    metal::float3 _e118 = lqRamp(value_1, _e104.xyz, _e108.xyz, _e112.xyz, _e116.xyz, u);
    color_7 = _e118;
    metal::float3 _e120 = color_7;
    metal::float4 _e123 = u.colorA;
    color_7 = metal::mix(_e120, _e123.xyz, 0.08 * metal::smoothstep(0.62, 0.92, _e70.x));
    metal::float3 _e132 = color_7;
    metal::float3 _e133 = glsFinishPresetFluid(_e132, p_14, u);
    return _e133;
}

metal::float3 glsVoiceWaveFluid(
    metal::float2 p_15,
    float t_12,
    constant Uniforms& u
) {
    metal::float3 color_8 = {};
    float _e4 = u.zoom;
    float scale_3 = 0.76 + (_e4 * 0.34);
    metal::float2 q_9 = p_15 / metal::float2(scale_3);
    float rimEnvelope = metal::pow(metal::max(1.0 - (q_9.x * q_9.x), 0.0), 0.72);
    float drift_3 = t_12 * 0.82;
    float _e24 = u.warp;
    float amplitude_4 = 0.2 + (_e24 * 0.018);
    float mainY_2 = rimEnvelope * ((amplitude_4 * metal::sin((q_9.x * 1.48) + drift_3)) + (0.055 * metal::sin(((q_9.x * 3.2) - (drift_3 * 0.43)) + 1.1)));
    float distance = q_9.y - mainY_2;
    float _e52 = u.ridgeAmt;
    float width = 0.11 + ((1.0 - _e52) * 0.075);
    float membrane = metal::exp((-(distance) * distance) / metal::max(width * width, 0.001)) * rimEnvelope;
    float upperVeil = metal::exp((-(distance - 0.105) * (distance - 0.105)) / metal::max((width * width) * 2.4, 0.001)) * rimEnvelope;
    float lowerVeil = metal::exp((-(distance + 0.115) * (distance + 0.115)) / metal::max((width * width) * 2.8, 0.001)) * rimEnvelope;
    float crest = metal::exp((-(distance) * distance) / 0.0026) * rimEnvelope;
    float depth = metal::sqrt(metal::max(1.0 - metal::clamp(metal::dot(p_15, p_15), 0.0, 1.0), 0.0));
    metal::float4 _e112 = u.colorA;
    metal::float4 _e118 = u.colorD;
    color_8 = metal::mix(_e112.xyz * 0.7, _e118.xyz * 0.34, metal::smoothstep(-0.82, 0.82, q_9.y));
    metal::float3 _e128 = color_8;
    metal::float4 _e131 = u.colorB;
    color_8 = metal::mix(_e128, _e131.xyz, upperVeil * 0.7);
    metal::float3 _e136 = color_8;
    metal::float4 _e139 = u.colorC;
    color_8 = metal::mix(_e136, _e139.xyz, lowerVeil * 0.62);
    metal::float3 _e144 = color_8;
    metal::float4 _e147 = u.colorB;
    metal::float4 _e151 = u.colorC;
    color_8 = _e144 + ((metal::mix(_e147.xyz, _e151.xyz, 0.46) * membrane) * 0.34);
    metal::float3 _e159 = color_8;
    metal::float4 _e162 = u.highlightColor;
    color_8 = _e159 + ((_e162.xyz * crest) * 0.14);
    metal::float3 _e168 = color_8;
    color_8 = _e168 * (0.58 + (0.42 * depth));
    metal::float3 _e174 = color_8;
    metal::float3 _e175 = glsFinishPresetFluid(_e174, p_15, u);
    return _e175;
}

metal::float3 glsBlueDropFluid(
    metal::float2 p,
    float t,
    constant Uniforms& u
) {
    float depth = metal::sqrt(metal::max(1.0 - metal::clamp(metal::dot(p, p), 0.0, 1.0), 0.0));
    metal::float2 q = p * metal::mix(0.72, 1.0, depth * 0.62 + 0.38);
    q = glsRotate(q, -0.24 + 0.06 * metal::sin(t * 0.17));
    float scale = 1.0 + u.zoom * 1.12;
    float blur = 0.012 + 0.006 * u.zoom;
    metal::float2 driftA = lqFbm(q * 1.28 + metal::float2(t * 0.095, -t * 0.034), blur * 1.28);
    metal::float2 driftB = lqFbm(glsRotate(q, 1.08) * 1.62
                                 + metal::float2(-t * 0.042, t * 0.078), blur * 1.62);
    metal::float2 flowed = q + metal::float2(driftA.x - 0.5, driftB.x - 0.5)
                               * (0.24 + u.warp * 0.1);
    flowed.x += metal::sin(flowed.y * 2.15 + t * 0.24) * (0.035 + u.warp * 0.012);
    flowed.y += metal::sin(flowed.x * 1.38 - t * 0.18) * (0.045 + u.warp * 0.01);
    metal::float2 body = lqFbm(flowed * scale + metal::float2(t * 0.025, -t * 0.018), blur * scale);
    float marbleScale = 1.72 + u.zoom * 0.9;
    float marble = lqRidgeS(lqFbm(flowed * marbleScale
                                  + metal::float2(2.7, -t * 0.035), blur * marbleScale),
                            0.8 + u.sharp * 0.46);
    float value = metal::clamp(metal::mix(body.x, body.x * 0.62 + marble * 0.58, u.ridgeAmt), 0.0, 1.0);
    metal::float3 color = lqRamp(value, u.colorA.xyz, u.colorB.xyz, u.colorC.xyz, u.colorD.xyz, u);
    metal::float3 surface = metal::normalize(metal::float3(p.x, p.y, depth));
    metal::float3 direction = metal::normalize(metal::float3(-0.48, 0.62, 0.92));
    float light = metal::pow(metal::max(metal::dot(surface, direction), 0.0), 3.2);
    color = metal::mix(color, u.highlightColor.xyz, light * (0.035 + 0.05 * u.shade));
    color *= 0.74 + 0.26 * depth;
    return glsFinishPresetFluid(color, p, u);
}

metal::float3 glsVioletEmberFluid(
    metal::float2 p,
    float t,
    constant Uniforms& u
) {
    float scale = 1.08 + u.zoom * 1.18;
    float blur = 0.011 + 0.005 * u.zoom;
    float radius = metal::length(p);
    float twist = t * 0.055 + radius * (0.72 + u.warp * 0.11)
                  + 0.08 * metal::sin(t * 0.31 + radius * 4.0);
    metal::float2 q = glsRotate(p * scale, twist);
    metal::float2 low = lqFbm(q * 1.18 + metal::float2(t * 0.068, -t * 0.105), blur * 1.18);
    metal::float2 cross = lqFbm(glsRotate(q, -1.12) * 1.52
                                + metal::float2(-t * 0.094, t * 0.042)
                                + metal::float2(low.x * 1.35, -low.x * 0.72), blur * 1.52);
    metal::float2 warped = q + metal::float2(low.x - 0.5, cross.x - 0.5)
                              * (0.3 + u.warp * 0.12);
    metal::float2 melt = lqFbm(warped * 1.34
                               + metal::float2(cross.x * 1.48, low.x * 1.12), blur * 1.34);
    float veinScale = 2.05 + u.zoom * 0.72;
    float veins = lqRidgeS(lqFbm(warped * veinScale
                                 + metal::float2(-2.1, t * 0.052), blur * veinScale),
                           0.82 + u.sharp * 0.58);
    float heat = metal::smoothstep(0.18, 0.92,
                                   melt.x * (0.72 - u.ridgeAmt * 0.16)
                                   + veins * (0.32 + u.ridgeAmt * 0.5));
    metal::float3 color = lqRamp(heat, u.colorA.xyz, u.colorB.xyz, u.colorC.xyz, u.colorD.xyz, u);
    float pulse = 0.94 + 0.06 * metal::sin(t * 0.44 + melt.x * 5.0);
    color *= pulse;
    color = metal::mix(color, u.highlightColor.xyz, metal::pow(veins, 4.0) * 0.045);
    return glsFinishPresetFluid(color, p, u);
}

metal::float3 glsRefractiveBlobFluid(
    metal::float2 p,
    float t,
    constant Uniforms& u
) {
    float radial2 = metal::clamp(metal::dot(p, p), 0.0, 1.0);
    float depth = metal::sqrt(metal::max(1.0 - radial2, 0.0));
    float scale = 0.82 + u.zoom * 1.08;
    float blur = 0.012 + 0.005 * u.zoom;
    metal::float2 q = glsRotate(p * scale, 0.08 * metal::sin(t * 0.17));
    metal::float2 driftA = lqFbm(
        q * 1.16 + metal::float2(t * 0.052, -t * 0.078), blur * 1.16);
    metal::float2 driftB = lqFbm(
        glsRotate(q, 1.21) * 1.34 + metal::float2(-t * 0.064, t * 0.041),
        blur * 1.34);
    q += metal::float2(driftA.x - 0.5, driftB.x - 0.5)
       * (0.34 + u.warp * 0.105);

    metal::float2 body = lqFbm(
        q * 1.42 + metal::float2(driftB.x * 0.82, driftA.x * 0.66),
        blur * 1.42);
    float ribbonPhase = q.y * (2.2 + u.warp * 0.11)
                      + metal::sin(q.x * 1.72 - t * 0.19) * 0.92
                      + metal::sin((q.x + q.y) * 1.08 + t * 0.13) * 0.46;
    float ribbon = metal::pow(
        metal::clamp(1.0 - metal::abs(metal::sin(ribbonPhase)), 0.0, 1.0),
        0.82 + u.sharp * 0.23);
    float fold = lqRidgeS(
        lqFbm(q * 2.05 + metal::float2(2.8, -t * 0.037), blur * 2.05),
        0.9 + u.sharp * 0.32);
    float value = metal::clamp(
        body.x * 0.5 + driftA.x * 0.16
        + ribbon * (0.2 + u.ridgeAmt * 0.2)
        + fold * u.ridgeAmt * 0.18, 0.0, 1.0);

    metal::float3 color = lqRamp(
        value, u.colorA.xyz, u.colorB.xyz, u.colorC.xyz, u.colorD.xyz, u);
    float caustic = metal::pow(ribbon, 3.1) * (0.24 + 0.28 * u.ridgeAmt)
                  + metal::pow(fold, 4.2) * 0.08;
    color = metal::mix(color, u.colorD.xyz, metal::clamp(caustic, 0.0, 0.52));
    color *= 0.7 + depth * 0.3;
    float key = metal::pow(metal::max(metal::dot(
        metal::normalize(metal::float3(p, depth)),
        metal::normalize(metal::float3(-0.42, 0.58, 0.9))), 0.0), 4.0);
    color = metal::mix(color, u.highlightColor.xyz, key * 0.055);
    return glsFinishPresetFluid(color, p, u);
}

metal::float3 glsParticleRibbonFluid(
    metal::float2 p,
    float t,
    constant Uniforms& u
) {
    return metal::float3(0.0);
}

metal::float3 glsPresetFluid(
    metal::float2 p_16,
    int style,
    float t_13,
    constant Uniforms& u
) {
    if (style == 9) {
        metal::float3 _e5 = glsSiriFluid(p_16, t_13, u);
        return _e5;
    }
    if (style == 10) {
        metal::float3 _e8 = glsAuroraFluid(p_16, t_13, u);
        return _e8;
    }
    if (style == 11) {
        metal::float3 _e11 = glsPlasmaFluid(p_16, t_13, u);
        return _e11;
    }
    if (style == 12) {
        metal::float3 _e14 = glsChromeFluid(p_16, t_13, u);
        return _e14;
    }
    if (style == 13) {
        metal::float3 _e17 = glsOpalFluid(p_16, t_13, u);
        return _e17;
    }
    if (style == 14) {
        metal::float3 _e20 = glsSpectrumFluid(p_16, t_13, u);
        return _e20;
    }
    if (style == 15) {
        metal::float3 _e23 = glsFrostFluid(p_16, t_13, u);
        return _e23;
    }
    if (style == 19) {
        metal::float3 _e26 = glsVoiceWaveFluid(p_16, t_13, u);
        return _e26;
    }
    if (style == 20) {
        return glsBlueDropFluid(p_16, t_13, u);
    }
    if (style == 21) {
        return glsVioletEmberFluid(p_16, t_13, u);
    }
    if (style == 22) {
        return glsChromaticMetalFluid(p_16, t_13, u);
    }
    if (style == 23) {
        return glsRefractiveBlobFluid(p_16, t_13, u);
    }
    if (style == 24) {
        return glsParticleRibbonFluid(p_16, t_13, u);
    }
    metal::float3 _e27 = glsFrostFluid(p_16, t_13, u);
    return _e27;
}

metal::float3 glsFluid(
    metal::float2 fu,
    int md,
    float t_14,
    constant Uniforms& u
) {
    metal::float3 fcol = {};
    metal::float2 pp = {};
    float v_2 = {};
    float df = metal::length(fu);
    metal::float4 _e6 = u.colorA;
    metal::float3 cA_1 = _e6.xyz;
    metal::float4 _e10 = u.colorB;
    metal::float3 cB_1 = _e10.xyz;
    metal::float4 _e14 = u.colorC;
    metal::float3 cC_1 = _e14.xyz;
    metal::float4 _e18 = u.colorD;
    metal::float3 cD_1 = _e18.xyz;
    float _e24 = u.glassEnabled;
    float blurSigma = (_e24 > 0.5) ? GL_BSIG_GLASS : GL_BSIG_CLEAR;
    float _e30 = u.zoom;
    float sp = blurSigma * _e30;
    float sw = (sp * 1.1) * GL_KWA;
    if (md < 0) {
        float _e41 = u.zoom;
        pp = fu * _e41;
        float _e46 = pp.y;
        pp.y = _e46 + (t_14 * 0.05);
        metal::float2 _e50 = pp;
        metal::float2 _e58 = lqFbm((_e50 * 1.1) + metal::float2(0.0, t_14 * 0.09), sw);
        metal::float2 _e60 = pp;
        metal::float2 _e69 = lqFbm((_e60 * 1.1) + metal::float2(7.7, -(t_14) * 0.07), sw);
        metal::float2 w = metal::float2(_e58.x, _e69.x);
        metal::float2 _e72 = pp;
        float _e75 = u.warp;
        metal::float2 q_10 = _e72 + (_e75 * (w - metal::float2(0.5)));
        metal::float2 _e90 = lqFbm((q_10 * 1.5) + metal::float2(t_14 * 0.04, 0.0), sp * 1.5);
        metal::float2 _e98 = lqFbm((q_10 * 2.2) + metal::float2(3.1), sp * 2.2);
        float _e101 = u.sharp;
        float _e102 = lqRidgeS(_e98, _e101);
        float _e105 = lqStepS(_e90, 0.12, 0.88);
        float _e117 = u.ridgeAmt;
        float v_3 = metal::mix(_e105, metal::clamp((_e102 * 0.85) + (0.45 * _e90.x), 0.0, 1.0), _e117);
        metal::float3 _e119 = lqRamp(v_3, cA_1, cB_1, cC_1, cD_1, u);
        fcol = _e119;
    } else {
        float _e122 = u.zoom;
        metal::float2 pp_1 = fu * _e122;
        metal::float2 _e131 = lqFbm((pp_1 * 1.1) + metal::float2(0.0, t_14 * 0.09), sw);
        metal::float2 _e141 = lqFbm((pp_1 * 1.1) + metal::float2(7.7, -(t_14) * 0.07), sw);
        metal::float2 w_1 = metal::float2(_e131.x, _e141.x);
        float _e146 = u.warp;
        metal::float2 q_11 = pp_1 + (_e146 * (w_1 - metal::float2(0.5)));
        if (md == 0) {
            metal::float2 _e158 = lqFbm(q_11 * 2.2, sp * 2.2);
            float damp = metal::exp(((-18.0 * _e158.y) * _e158.y) - ((24.5 * sp) * sp));
            v_2 = 0.5 + ((0.5 * damp) * metal::sin(((q_11.x * 7.0) + (_e158.x * 6.0)) + (t_14 * 0.35)));
            float _e186 = v_2;
            metal::float2 _e195 = lqFbm((q_11 * 1.4) + metal::float2(t_14 * 0.03), sp * 1.4);
            v_2 = metal::mix(_e186, _e195.x, 0.25);
            float _e199 = v_2;
            metal::float3 _e200 = lqRamp(_e199, cA_1, cB_1, cC_1, cD_1, u);
            fcol = _e200;
        } else {
            if (md == 1) {
                metal::float2 _e212 = lqFbm((q_11 * 1.4) + metal::float2(t_14 * 0.06, 0.0), sp * 1.4);
                float _e215 = u.sharp;
                float _e216 = lqRidgeS(_e212, _e215);
                metal::float2 _e226 = lqFbm((q_11 * 1.7) - metal::float2(0.0, t_14 * 0.05), sp * 1.7);
                float _e229 = u.sharp;
                float _e230 = lqRidgeS(_e226, _e229);
                float v_4 = _e216 * _e230;
                metal::float3 _e234 = lqRamp(metal::pow(v_4, 0.7), cA_1, cB_1, cC_1, cD_1, u);
                fcol = _e234;
            } else {
                if (md == 6) {
                    metal::float2 _e247 = lqFbm((q_11 * 2.6) + metal::float2(t_14 * 0.025), sp * 2.6);
                    metal::float2 _e255 = lqFbm((q_11 * 1.3) + metal::float2(1.5 * _e247.x), sp * 1.3);
                    metal::float2 _e263 = lqFbm((q_11 * 2.1) + metal::float2(7.0), sp * 2.1);
                    float _e265 = lqRidgeS(_e263, 1.3);
                    float _e268 = lqStepS(_e255, 0.1, 0.9);
                    metal::float3 _e269 = lqRamp(_e268, cA_1, cB_1, cC_1, cD_1, u);
                    fcol = _e269;
                    metal::float3 _e270 = fcol;
                    fcol = _e270 * (1.0 - (0.18 * _e265));
                } else {
                    metal::float2 q2_ = q_11 + metal::float2(0.0, -(t_14) * 0.14);
                    metal::float2 _e294 = lqFbm((q2_ * 2.4) + metal::float2(0.0, -(t_14) * 0.05), sp * 2.4);
                    metal::float2 _e302 = lqFbm((q2_ * 1.6) + metal::float2(2.2 * _e294.x), sp * 1.6);
                    float _e304 = lqPowS(_e302, 1.5);
                    metal::float3 _e305 = lqRamp(_e304, cA_1, cB_1, cC_1, cD_1, u);
                    fcol = _e305;
                }
            }
        }
    }
    metal::float3 _e306 = fcol;
    metal::float4 _e309 = u.highlightColor;
    float _e313 = u.shade;
    fcol = metal::mix(_e306, _e309.xyz, (_e313 * 0.3) * metal::smoothstep(0.25, 1.25, metal::dot(fu, metal::float2(-0.32, 0.78))));
    metal::float3 _e325 = fcol;
    float _e328 = u.shade;
    fcol = _e325 * (1.0 - ((_e328 * 0.42) * metal::smoothstep(-0.05, 1.25, metal::dot(fu, metal::float2(0.45, -0.62)))));
    metal::float3 _e342 = fcol;
    float _e345 = u.shade;
    fcol = _e342 * (1.0 - ((_e345 * 0.3) * metal::smoothstep(0.72, 1.0, df)));
    metal::float3 _e355 = fcol;
    return metal::clamp(_e355, metal::float3(0.0), metal::float3(1.0));
}

metal::float3 glsOver(
    metal::float3 dst,
    metal::float3 src,
    float a_3
) {
    float k_5 = metal::clamp(a_3, 0.0, 1.0);
    return (src * k_5) + (dst * (1.0 - k_5));
}

float glsRefractionProfile(
    float t_15
) {
    float depth_1 = metal::clamp(t_15, 0.0, 1.0);
    float circular = metal::sqrt(metal::max(1.0 - ((1.0 - depth_1) * (1.0 - depth_1)), 0.0));
    return 1.0 - circular;
}

float glsHighlightLobe(
    metal::float2 normal,
    metal::float2 direction,
    float cut,
    float power
) {
    float angular = metal::clamp((metal::dot(normal, direction) - cut) / metal::max(1.0 - cut, 0.001), 0.0, 1.0);
    return metal::pow(angular, power);
}

int naga_f2i32(float value) {
    return static_cast<int>(metal::clamp(value, -2147483600.0, 2147483500.0));
}

metal::float2 glsContourWave(
    float angle_1,
    float t_16,
    constant Uniforms& u
) {
    float _e4 = u.style;
    int style_1 = naga_f2i32(_e4 + 0.5);
    if (style_1 == 19) {
        float wave_1 = (metal::sin((angle_1 * 2.0) + (t_16 * 0.27)) * 0.72) + (metal::sin(((angle_1 * 4.0) - (t_16 * 0.16)) + 2.1) * 0.28);
        float slope = (metal::cos((angle_1 * 2.0) + (t_16 * 0.27)) * 1.44) + (metal::cos(((angle_1 * 4.0) - (t_16 * 0.16)) + 2.1) * 1.12);
        return metal::float2(wave_1, slope);
    }
    float wave_2 = ((metal::sin((angle_1 * 3.0) + (t_16 * 0.62)) * 0.52) + (metal::sin(((angle_1 * 5.0) - (t_16 * 0.41)) + 1.7) * 0.31)) + (metal::sin(((angle_1 * 2.0) + (t_16 * 0.23)) + 3.1) * 0.17);
    float slope_1 = ((metal::cos((angle_1 * 3.0) + (t_16 * 0.62)) * 1.56) + (metal::cos(((angle_1 * 5.0) - (t_16 * 0.41)) + 1.7) * 1.55)) + (metal::cos(((angle_1 * 2.0) + (t_16 * 0.23)) + 3.1) * 0.34);
    return metal::float2(wave_2, slope_1);
}

float glsContourStrength(
    constant Uniforms& u
) {
    float _e2 = u.style;
    if (_e2 >= 18.5) {
        return 0.11;
    }
    float _e10 = u.style;
    return (_e10 >= 15.5) ? 0.16 : 0.09;
}

float glsContourScale(
    metal::float2 uv_1,
    float t_17,
    float amount,
    constant Uniforms& u
) {
    if (amount <= 0.0) {
        return 1.0;
    }
    metal::float2 _e9 = glsContourWave(metal::atan2(uv_1.y, uv_1.x), t_17, u);
    float _e13 = glsContourStrength(u);
    return 1.0 + ((metal::clamp(amount, 0.0, 1.0) * _e13) * _e9.x);
}

metal::float2 glsContourNormal(
    metal::float2 uv_2,
    float rad_1,
    float t_18,
    float amount_1,
    constant Uniforms& u
) {
    float distance_1 = metal::length(uv_2);
    if (distance_1 <= 0.0001) {
        return metal::float2(0.0);
    }
    metal::float2 radial = uv_2 / metal::float2(distance_1);
    metal::float2 _e14 = glsContourWave(metal::atan2(uv_2.y, uv_2.x), t_18, u);
    float _e18 = glsContourStrength(u);
    float slope_2 = (metal::clamp(amount_1, 0.0, 1.0) * _e18) * _e14.y;
    metal::float2 tangent = metal::float2(-(radial.y), radial.x);
    return metal::normalize(radial - (tangent * ((rad_1 * slope_2) / distance_1)));
}

metal::float2 glsRefractionNormal(
    metal::float2 base,
    metal::float2 p,
    float t,
    int style
) {
    if (style != 23) {
        return base;
    }
    metal::float2 tangent = metal::float2(-base.y, base.x);
    float a = lqFbm(
        p * 2.15 + metal::float2(t * 0.061, -t * 0.043), 0.018).x;
    float b = lqFbm(
        glsRotate(p, 1.37) * 2.55 + metal::float2(-t * 0.037, t * 0.052),
        0.021).x;
    float wave = (a - b) * 0.76
               + metal::sin(metal::atan2(p.y, p.x) * 3.0 + t * 0.21) * 0.08;
    return metal::normalize(base + tangent * wave);
}

metal::float4 orbGlassLiquidAnim(
    metal::float2 uv01_,
    constant Uniforms& u
) {
    metal::float2 fc = metal::float2(uv01_.x, 1.0 - uv01_.y) * u.size;
    metal::float2 uv = (2.0 * fc - u.size)
                     / metal::max(metal::min(u.size.x, u.size.y), 1.0);
    float rad = metal::max(u.radius, 0.05);
    float t = u.time * u.speed;
    int s = naga_f2i32(u.style + 0.5);
    bool emissionOnly = u.glassEnabled <= 0.5 && (s == 9 || s == 14 || s == 24);
    float contourRad = rad * glsContourScale(uv, t, u.contourDeform, u);

    if (metal::length(uv) > contourRad * (1.01 + mfEdgeD(u.edgeSoftness))) {
        metal::float3 halo = mfEdgeGlow(metal::float3(0.0), uv, metal::float2(0.0),
                                         contourRad, u.edgeSoftness, u.edgeGlow,
                                         u.glowColor.xyz);
        halo = metal::clamp(halo, metal::float3(0.0), metal::float3(1.0));
        float haloAlpha = metal::max(halo.x, metal::max(halo.y, halo.z));
        return metal::float4(halo, haloAlpha);
    }

    metal::float2 p = uv / contourRad;
    float pd = metal::length(p);
    metal::float2 fu = p / GL_FU;
    int md = -1;
    if (s == 1) { md = 1; }
    else if (s == 3 || s == 8) { md = 7; }
    else if (s == 5) { md = 6; }
    else if (s == 7) { md = 0; }

    float clearFa = 1.0 - metal::smoothstep(GL_CLEAR_EA, GL_CLEAR_EB, pd);
    metal::float2 contourNormal = glsContourNormal(uv, rad, t, u.contourDeform, u);
    metal::float2 normal = glsRefractionNormal(contourNormal, p, t, s);
    float edgeDepth = metal::max(1.0 - pd, 0.0);
    float refractionWidth = 0.015 + 0.95 * metal::clamp(u.shellMidAlpha, 0.0, 1.0);
    float refractionT = edgeDepth / metal::max(refractionWidth, 0.001);
    float refractionProfile = metal::pow(glsRefractionProfile(refractionT), 0.68);
    float refractionAmount = 1.6 * metal::clamp(u.glassOpacity, 0.0, 1.0)
                           * refractionProfile;
    metal::float2 refractedP = p - normal * refractionAmount;
    metal::float3 fcol = metal::float3(0.0);

    if (clearFa > 0.0) {
        if (s >= 9) {
            if (u.glassEnabled > 0.5) {
                float channelSplit = 0.14 * metal::clamp(u.gloss, 0.0, 2.0)
                                   * metal::clamp(u.glassOpacity, 0.0, 1.0)
                                   * refractionProfile;
                metal::float3 redSample = glsPresetFluid(refractedP - normal * channelSplit, s, t, u);
                metal::float3 greenSample = glsPresetFluid(refractedP, s, t, u);
                metal::float3 blueSample = glsPresetFluid(refractedP + normal * channelSplit, s, t, u);
                fcol = metal::float3(redSample.x, greenSample.y, blueSample.z);
            } else {
                fcol = glsPresetFluid(p, s, t, u);
            }
        } else {
            fcol = glsFluid(fu, md, t, u);
        }
    }

    float lum = metal::dot(fcol, metal::float3(0.213, 0.715, 0.072));
    metal::float3 clearSat = metal::clamp(
        metal::float3(lum) + (fcol - metal::float3(lum)) * 1.22,
        metal::float3(0.0), metal::float3(1.0));
    bool particleGlassOverlay = s == 24;
    metal::float3 col = particleGlassOverlay
        ? metal::float3(0.0)
        : glsOver(u.canvasColor.xyz, clearSat, 0.99 * clearFa);
    if (emissionOnly) {
        float signal = metal::max(clearSat.x, metal::max(clearSat.y, clearSat.z));
        float emissionCoverage = metal::smoothstep(0.025, 0.16, signal);
        col = clearSat * emissionCoverage;
    }

    if (u.glassEnabled > 0.5) {
        float surfaceWidth = particleGlassOverlay
            ? 0.09 + 0.12 * metal::clamp(u.shellEdgeAlpha, 0.0, 1.0)
            : 0.026 + 0.055 * metal::clamp(u.shellEdgeAlpha, 0.0, 1.0);
        float surfaceBand = (1.0 - metal::smoothstep(0.0, surfaceWidth, edgeDepth)) * clearFa;
        float opticalRim = metal::pow(surfaceBand, particleGlassOverlay ? 1.3 : 1.8);
        float innerRimAlpha = !particleGlassOverlay
            ? opticalRim * u.glassOpacity * 0.45
            : opticalRim * u.glassOpacity * 0.14;
        col = glsOver(col, u.shellInner.xyz, innerRimAlpha);

        metal::float2 coolDirection = metal::normalize(metal::float2(0.84, 0.54));
        metal::float2 warmDirection = metal::normalize(metal::float2(-0.62, -0.78));
        float coolSplit = glsHighlightLobe(normal, coolDirection, -0.32, 1.8);
        float warmSplit = glsHighlightLobe(normal, warmDirection, -0.28, 2.0);
        float dispersion = opticalRim * metal::clamp(u.gloss, 0.0, 2.0)
                         * (0.8 + 0.8 * u.shellEdgeAlpha);
        col = glsOver(col, u.shellMid.xyz, dispersion * coolSplit);
        col = glsOver(col, u.shellEdge.xyz, dispersion * warmSplit);

        float edgeShadow = opticalRim * (0.015 + 0.15 * u.shellEdgeAlpha)
                         * (0.15 + 0.85 * metal::max(
                            metal::dot(normal, metal::float2(0.45, -0.89)), 0.0));
        col *= 1.0 - edgeShadow;

        metal::float2 keyDirection = metal::normalize(metal::float2(-0.68, 0.73));
        metal::float2 fillDirection = metal::normalize(metal::float2(0.74, -0.67));
        float key = opticalRim * glsHighlightLobe(normal, keyDirection, 0.2, 2.8)
                  * metal::clamp(u.sheen, 0.0, 2.0) * 1.4;
        float fill = opticalRim * glsHighlightLobe(normal, fillDirection, 0.4, 3.6)
                   * metal::clamp(u.sheen, 0.0, 2.0) * 1.0;
        col = glsOver(col, u.sheenColor.xyz, key);
        col = glsOver(col, u.specColor.xyz, fill);
    }

    float ballA = 1.0 - metal::smoothstep(
        0.99 - mfEdgeD(u.edgeSoftness),
        1.01 + mfEdgeD(u.edgeSoftness), pd);
    col = metal::clamp(col * metal::max(u.exposure, 0.0),
                       metal::float3(0.0), metal::float3(1.0)) * ballA;
    metal::float3 edged = mfEdgeGlow(col, uv, metal::float2(0.0), contourRad,
                                     u.edgeSoftness, u.edgeGlow, u.glowColor.xyz);
    metal::float3 finalColor = metal::clamp(
        edged, metal::float3(0.0), metal::float3(1.0));
    float emissionAlpha = metal::max(finalColor.x, metal::max(finalColor.y, finalColor.z));
    float sphereAlpha = metal::clamp(metal::max(ballA, emissionAlpha), 0.0, 1.0);
    float finalAlpha = (emissionOnly || particleGlassOverlay)
        ? emissionAlpha
        : sphereAlpha;
    return metal::float4(finalColor, finalAlpha);
}

struct vs_mainInput {
};
struct vs_mainOutput {
    metal::float4 pos [[position]];
    metal::float2 uv [[user(loc0), center_perspective]];
};
vertex vs_mainOutput vs_main(
  uint i [[vertex_id]]
) {
    type_7 p = type_7 {metal::float2(-1.0, -1.0), metal::float2(3.0, -1.0), metal::float2(-1.0, 3.0)};
    VOut out = {};
    metal::float2 _e15 = uint(i) < 3 ? p.inner[i] : DefaultConstructible();
    out.pos = metal::float4(_e15, 0.0, 1.0);
    metal::float2 _e20 = uint(i) < 3 ? p.inner[i] : DefaultConstructible();
    metal::float2 uv01_1 = (_e20 + metal::float2(1.0)) * 0.5;
    out.uv = metal::float2(uv01_1.x, 1.0 - uv01_1.y);
    VOut _e32 = out;
    const auto _tmp = _e32;
    return vs_mainOutput { _tmp.pos, _tmp.uv };
}


struct fs_mainInput {
    metal::float2 uv [[user(loc0), center_perspective]];
};
struct fs_mainOutput {
    metal::float4 member_1 [[color(0)]];
};
fragment fs_mainOutput fs_main(
  fs_mainInput varyings_1 [[stage_in]]
, metal::float4 pos [[position]]
, constant Uniforms& u [[buffer(0)]]
) {
    const VOut in = { pos, varyings_1.uv };
    metal::float4 _e2 = orbGlassLiquidAnim(in.uv, u);
    metal::float2 _e12 = u.size;
    metal::float2 fc_1 = metal::float2(in.uv.x, 1.0 - in.uv.y) * _e12;
    metal::float2 _e18 = u.size;
    float _e23 = u.size.x;
    float _e27 = u.size.y;
    metal::float2 uv_4 = ((2.0 * fc_1) - _e18) / metal::float2(metal::max(metal::min(_e23, _e27), 1.0));
    float _e35 = u.radius;
    float rad_3 = metal::max(_e35, 0.05);
    float _e40 = u.time;
    float _e43 = u.speed;
    float t_20 = _e40 * _e43;
    float _e47 = u.contourDeform;
    float _e48 = glsContourScale(uv_4, t_20, _e47, u);
    float contourRad_1 = rad_3 * _e48;
    metal::float2 _e76 = u.size;
    metal::float2 _e80 = u.size;
    metal::float2 q_12 = ((2.0 * fc_1) - _e76) / _e80;
    float fitEnd = 1.0;
    float fitFeather = 2.0 / metal::max(metal::min(u.size.x, u.size.y), 1.0);
    float fitStart = metal::min(metal::mix(contourRad_1, fitEnd, 0.5), fitEnd - fitFeather);
    float fit = 1.0 - metal::smoothstep(fitStart, fitEnd, metal::max(metal::abs(q_12.x), metal::abs(q_12.y)));
    return fs_mainOutput { metal::float4(_e2.xyz * fit, _e2.w * fit) };
}

constant uint PR_U_SEGMENTS = 384;
constant uint PR_V_SEGMENTS = 96;
constant uint PR_PARTICLES_PER_LAYER = PR_U_SEGMENTS * PR_V_SEGMENTS;

float prHash(float value) {
    return metal::fract(metal::sin(value * 12.9898 + 78.233) * 43758.5453);
}

metal::float3 prRotateX(metal::float3 p, float angle) {
    float c = metal::cos(angle);
    float s = metal::sin(angle);
    return metal::float3(p.x, c * p.y - s * p.z, s * p.y + c * p.z);
}

metal::float3 prRotateY(metal::float3 p, float angle) {
    float c = metal::cos(angle);
    float s = metal::sin(angle);
    return metal::float3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}

metal::float3 prCurve(
    float theta,
    float layer,
    float phase,
    constant Uniforms& u
) {
    float local = theta + layer * 0.11;
    float foldPhase = 2.0 * local + phase * (0.72 + layer * 0.025);
    float fold = metal::clamp(u.ribbonFold, 0.0, 1.2);
    float radial = 0.4 + (0.085 + fold * 0.04) * metal::cos(foldPhase);
    float orbit = local + phase * 0.13
                + metal::sin(local - phase * 0.22 + layer) * fold * 0.13;
    float vertical = (0.235 + fold * 0.085) * metal::sin(foldPhase)
                   + 0.055 * metal::sin(local * 3.0 - phase * 0.46 + layer * 0.7);
    return metal::float3(radial * metal::cos(orbit), vertical, radial * metal::sin(orbit));
}

metal::float3 prPalette(float valueIn, constant Uniforms& u) {
    float value = metal::fract(valueIn) * 4.0;
    if (value < 1.0) return metal::mix(u.colorA.xyz, u.colorB.xyz, value);
    if (value < 2.0) return metal::mix(u.colorB.xyz, u.colorC.xyz, value - 1.0);
    if (value < 3.0) return metal::mix(u.colorC.xyz, u.colorD.xyz, value - 2.0);
    return metal::mix(u.colorD.xyz, u.colorA.xyz, value - 3.0);
}

struct ribbon_vs_mainOutput {
    metal::float4 pos [[position]];
    metal::float2 local [[user(loc0), center_no_perspective]];
    metal::float3 color [[user(loc1), center_perspective]];
    float opacity [[user(loc2), center_perspective]];
};

vertex ribbon_vs_mainOutput ribbon_vs_main(
    uint vertexIndex [[vertex_id]],
    uint instanceIndex [[instance_id]],
    constant Uniforms& u [[buffer(0)]]
) {
    const metal::float2 corners[6] = {
        metal::float2(-1.0, -1.0), metal::float2(1.0, -1.0),
        metal::float2(-1.0, 1.0), metal::float2(-1.0, 1.0),
        metal::float2(1.0, -1.0), metal::float2(1.0, 1.0)
    };
    uint layerIndex = instanceIndex / PR_PARTICLES_PER_LAYER;
    uint particleIndex = instanceIndex % PR_PARTICLES_PER_LAYER;
    uint uIndex = particleIndex / PR_V_SEGMENTS;
    uint vIndex = particleIndex % PR_V_SEGMENTS;
    float layer = float(layerIndex);
    float random = prHash(float(instanceIndex));
    bool activeLayer = layer < metal::floor(metal::clamp(u.ribbonCount, 2.0, 6.0) + 0.5);

    float uCoord = (float(uIndex) + prHash(float(instanceIndex) + 11.0) * 0.56)
                 / float(PR_U_SEGMENTS);
    float vCoord = (float(vIndex) + prHash(float(instanceIndex) + 29.0) * 0.46)
                 / float(PR_V_SEGMENTS);
    float strip = vCoord * 2.0 - 1.0;
    float t = u.time * u.speed;
    float phase = t * 0.48;
    float arc = metal::fract(uCoord + layer * 0.211 - phase * 0.019);
    float arcLength = 0.76 + 0.055 * metal::sin(t * 0.23 + layer * 1.71);
    float arcPosition = arc / arcLength;
    float arcEnvelope = metal::smoothstep(0.0, 0.075, arcPosition)
                      * (1.0 - metal::smoothstep(0.88, 1.0, arcPosition));
    bool active = activeLayer
               && arc <= arcLength
               && random <= metal::clamp(u.particleDensity, 0.2, 1.0);
    float theta = uCoord * 6.28318530718;
    metal::float3 center = prCurve(theta, layer, phase, u);
    metal::float3 ahead = prCurve(theta + 0.006, layer, phase, u);
    metal::float3 tangent = metal::normalize(ahead - center);
    metal::float3 radial = metal::normalize(center + metal::float3(0.001, 0.013, 0.007));
    metal::float3 side = metal::normalize(metal::cross(tangent, radial));
    metal::float3 surfaceNormal = metal::normalize(metal::cross(side, tangent));
    float twist = theta * (0.72 + u.ribbonTwist * 0.58)
                + phase * 0.74 + layer * 1.17;
    metal::float3 ribbonDirection = metal::normalize(
        side * metal::cos(twist) + surfaceNormal * metal::sin(twist));
    float widthEnvelope = (0.72 + 0.28
        * metal::pow(metal::sin(theta * 1.5 + phase + layer), 2.0))
        * metal::mix(0.42, 1.0, metal::sqrt(metal::max(arcEnvelope, 0.0)));
    metal::float3 position = center
        + ribbonDirection * strip * u.ribbonWidth * 0.5 * widthEnvelope;

    float pulse = metal::sin(t * 0.73 + layer * 1.71)
                + 0.44 * metal::sin(t * 1.17 + layer * 0.83 + 1.2);
    position *= 1.0 + u.ribbonBreath * pulse * 0.16;
    float layerCenter = layer
        - (metal::floor(metal::clamp(u.ribbonCount, 2.0, 6.0) + 0.5) - 1.0) * 0.5;
    position = prRotateY(
        position, layerCenter * 0.24 + metal::sin(t * 0.19 + layer * 1.3) * 0.055);
    position = prRotateX(
        position, layerCenter * 0.14 + metal::cos(t * 0.17 + layer * 0.9) * 0.04);
    position = prRotateY(position, t * 0.105 + metal::sin(t * 0.21) * 0.11);
    position = prRotateX(position, -0.2 + metal::sin(t * 0.16 + layer * 0.1) * 0.16);

    float minSize = metal::max(metal::min(u.size.x, u.size.y), 1.0);
    float depthScale = 0.88 + position.z * 0.16;
    metal::float2 orbPosition = position.xy * u.radius * 1.45 * depthScale;
    metal::float2 clip = metal::float2(
        orbPosition.x * minSize / metal::max(u.size.x, 1.0),
        orbPosition.y * minSize / metal::max(u.size.y, 1.0));
    float canvasParticleScale = metal::clamp(minSize / 640.0, 0.22, 1.0);
    float pointPixels = metal::max(0.6, u.particleSize)
                      * (1.5 + u.particleBloom * 2.5)
                      * (0.92 + position.z * 0.18)
                      * canvasParticleScale;
    metal::float2 corner = corners[vertexIndex];
    metal::float2 pointOffset = corner * pointPixels * 2.0
                              / metal::max(u.size, metal::float2(1.0));

    float colorPhase = uCoord * 0.32 + layer * 0.19 + phase * 0.025
                     + position.z * 0.08;
    float stripEdge = metal::smoothstep(0.58, 1.0, metal::abs(strip));
    float front = metal::clamp(0.78 + position.z * 0.54, 0.5, 1.24);
    float baseOpacity = metal::mix(0.025, 0.009,
        metal::clamp(u.shade / 1.5, 0.0, 1.0));

    ribbon_vs_mainOutput out;
    out.pos = active
        ? metal::float4(clip + pointOffset,
                        metal::clamp(0.5 - position.z * 0.12, 0.05, 0.95), 1.0)
        : metal::float4(2.0, 2.0, 1.0, 1.0);
    out.local = corner;
    out.color = metal::pow(
        metal::mix(prPalette(colorPhase, u), u.highlightColor.xyz, stripEdge * 0.56),
        metal::float3(0.72)) * front;
    out.opacity = active
        ? baseOpacity
            * (0.72 + stripEdge * 1.28)
            * arcEnvelope
            * metal::pow(canvasParticleScale, 1.35)
        : 0.0;
    return out;
}

struct ribbon_fs_mainOutput {
    metal::float4 color [[color(0)]];
};

fragment ribbon_fs_mainOutput ribbon_fs_main(
    ribbon_vs_mainOutput in [[stage_in]],
    constant Uniforms& u [[buffer(0)]]
) {
    float distanceSquared = metal::dot(in.local, in.local);
    if (distanceSquared > 1.0) discard_fragment();
    float core = metal::exp(-distanceSquared * 4.8);
    float halo = metal::exp(-distanceSquared * 1.35);
    float bloom = metal::clamp(u.particleBloom, 0.0, 2.0);
    float intensity = in.opacity * (core * 1.9 + halo * bloom * 0.72)
                    * metal::max(u.exposure, 0.0);
    float glowMix = metal::clamp((halo - core * 0.45)
        * (0.18 + u.edgeGlow * 0.5), 0.0, 0.7);
    metal::float3 color = metal::mix(in.color, u.glowColor.xyz, glowMix);
    float alpha = metal::clamp(intensity, 0.0, 1.0);
    return ribbon_fs_mainOutput { metal::float4(color * alpha, alpha) };
}

metal::float2 prTextureUvFromOrb(
    metal::float2 p,
    float contourRad,
    constant Uniforms& u
) {
    float minSize = metal::max(metal::min(u.size.x, u.size.y), 1.0);
    metal::float2 fc = (p * contourRad * minSize + u.size) * 0.5;
    return metal::clamp(
        metal::float2(
            fc.x / metal::max(u.size.x, 1.0),
            1.0 - fc.y / metal::max(u.size.y, 1.0)),
        metal::float2(0.0),
        metal::float2(1.0));
}

struct ribbon_composite_fs_mainOutput {
    metal::float4 color [[color(0)]];
};

fragment ribbon_composite_fs_mainOutput ribbon_composite_fs_main(
    fs_mainInput in [[stage_in]],
    metal::float4 position [[position]],
    constant Uniforms& u [[buffer(0)]],
    metal::texture2d<float> ribbonTexture [[texture(0)]]
) {
    constexpr metal::sampler ribbonSampler(
        metal::coord::normalized,
        metal::address::clamp_to_edge,
        metal::filter::linear);
    metal::float4 direct = ribbonTexture.sample(ribbonSampler, in.uv);
    if (u.glassEnabled <= 0.5) {
        return ribbon_composite_fs_mainOutput { direct };
    }

    metal::float2 fc = metal::float2(in.uv.x, 1.0 - in.uv.y) * u.size;
    float minSize = metal::max(metal::min(u.size.x, u.size.y), 1.0);
    metal::float2 uv = (2.0 * fc - u.size) / minSize;
    float rad = metal::max(u.radius, 0.05);
    float t = u.time * u.speed;
    float contourRad = rad * glsContourScale(uv, t, u.contourDeform, u);
    metal::float4 shell = orbGlassLiquidAnim(in.uv, u);
    if (metal::length(uv) > contourRad * (1.01 + mfEdgeD(u.edgeSoftness))) {
        return ribbon_composite_fs_mainOutput { shell };
    }

    metal::float2 p = uv / contourRad;
    float pd = metal::length(p);
    float clearFa = 1.0 - metal::smoothstep(GL_CLEAR_EA, GL_CLEAR_EB, pd);
    metal::float2 normal = glsContourNormal(uv, rad, t, u.contourDeform, u);
    float edgeDepth = metal::max(1.0 - pd, 0.0);
    float refractionWidth = 0.015 + 0.95 * metal::clamp(u.shellMidAlpha, 0.0, 1.0);
    float refractionT = edgeDepth / metal::max(refractionWidth, 0.001);
    float refractionProfile = metal::pow(glsRefractionProfile(refractionT), 0.68);
    float refractionAmount = 1.6 * metal::clamp(u.glassOpacity, 0.0, 1.0)
                           * refractionProfile;
    metal::float2 refractedP = p - normal * refractionAmount;
    float channelSplit = 0.14 * metal::clamp(u.gloss, 0.0, 2.0)
                       * metal::clamp(u.glassOpacity, 0.0, 1.0)
                       * refractionProfile;
    metal::float4 redSample = ribbonTexture.sample(
        ribbonSampler,
        prTextureUvFromOrb(refractedP - normal * channelSplit, contourRad, u));
    metal::float4 greenSample = ribbonTexture.sample(
        ribbonSampler,
        prTextureUvFromOrb(refractedP, contourRad, u));
    metal::float4 blueSample = ribbonTexture.sample(
        ribbonSampler,
        prTextureUvFromOrb(refractedP + normal * channelSplit, contourRad, u));
    float refractedAlpha = metal::max(
        redSample.w,
        metal::max(greenSample.w, blueSample.w)) * clearFa;
    metal::float4 refracted = metal::float4(
        metal::float3(redSample.x, greenSample.y, blueSample.z) * clearFa,
        refractedAlpha);
    return ribbon_composite_fs_mainOutput {
        metal::float4(
            shell.xyz + refracted.xyz * (1.0 - shell.w),
            shell.w + refracted.w * (1.0 - shell.w))
    };
}
`,N=[`#F7FBFF`,`#EFF6FD`,`#E0EEF9`,`#D4E6F7`,`#BBD5F3`,`#A6C7F0`,`#87B0EB`,`#6F9EE8`,`#6F9EE8`,`#6F9EE8`,`#6F9EE8`,`#6F9EE8`];function P(e){let t=e.slice(1);return[Number.parseInt(t.slice(0,2),16)/255,Number.parseInt(t.slice(2,4),16)/255,Number.parseInt(t.slice(4,6),16)/255,1]}function de(e,t,n,r,i){e.fill(0),e[0]=t,e[1]=n,e[2]=r,e.set([i.speed,i.radius,i.zoom,i.warp,i.ridgeAmt,i.sharp,i.shade,i.sheen,i.gloss,i.shellMidAlpha,i.shellEdgeAlpha,i.exposure,S[i.style],i.edgeSoftness,i.edgeGlow,0,+!!i.glassEnabled,i.glassOpacity,i.contourDeform,i.bandDensity,i.chromaticShift,i.metalScale,i.metalStretch,i.metalAngle,i.metalOffset,i.metalPhase,i.metalEvolution,i.metalRoughness,i.metalDepth,i.particleDensity,i.ribbonCount,i.ribbonWidth,i.ribbonTwist,i.ribbonFold,i.ribbonBreath,i.particleSize,i.particleBloom],3),[i.colorA,i.colorB,i.colorC,i.colorD,i.highlightColor,i.shellInner,i.shellMid,i.shellEdge,i.sheenColor,i.specColor,i.canvasColor,i.glowColor,...N].forEach((t,n)=>e.set(P(t),40+n*4))}function fe(e){let t=new Float32Array(136);return de(t,1,1,0,e),Array.from(t)}var pe=221184,me=[`idle`,`thinking`],he=[`speed`,`contourDeform`,`bandDensity`,`chromaticShift`,`metalStretch`,`metalEvolution`,`metalRoughness`,`metalDepth`,`ribbonWidth`,`ribbonTwist`,`ribbonFold`,`ribbonBreath`,`zoom`,`warp`,`ridgeAmt`,`sharp`,`shade`,`exposure`,`edgeGlow`],ge=[`colorA`,`colorB`,`colorC`,`colorD`,`highlightColor`,`glowColor`],_e=[...he,...ge],ve=`thinking`,ye=.22,be=.65,xe={siri:{numeric:{speed:{scale:.3},contourDeform:{scale:.3},zoom:{scale:.94},warp:{scale:.52},ridgeAmt:{scale:.48},sharp:{scale:.9},exposure:{scale:.68}},colors:{colorA:`#B5A674`,colorB:`#5E8794`,colorC:`#9A648A`,colorD:`#635B8A`,highlightColor:`#B6C4D2`,glowColor:`#6C688F`}},voiceWave:{numeric:{speed:{scale:.28},contourDeform:{scale:.3},zoom:{scale:.92},warp:{scale:.46},ridgeAmt:{scale:.42},exposure:{scale:.62}},colors:{colorA:`#08050B`,colorB:`#6A2F69`,colorC:`#8C4652`,colorD:`#55467F`,highlightColor:`#B58AA5`,glowColor:`#6C3E72`}},blueDrop:{numeric:{speed:{scale:.3},contourDeform:{scale:.35},zoom:{scale:.93},warp:{scale:.5},ridgeAmt:{scale:.46},sharp:{scale:.82},exposure:{scale:.66}},colors:{colorA:`#020812`,colorB:`#0A2C5A`,colorC:`#24678A`,colorD:`#A4C3CA`,highlightColor:`#9FC8D5`,glowColor:`#1F5076`}},violetEmber:{numeric:{speed:{scale:.28},contourDeform:{scale:.3},zoom:{scale:.92},warp:{scale:.46},ridgeAmt:{scale:.42},sharp:{scale:.78},exposure:{scale:.64}},colors:{colorA:`#0B0310`,colorB:`#2B1748`,colorC:`#593078`,colorD:`#9B78A8`,highlightColor:`#BCA6C2`,glowColor:`#593273`}},refractiveBlob:{numeric:{speed:{scale:.3},contourDeform:{scale:.32},zoom:{scale:.94},warp:{scale:.5},ridgeAmt:{scale:.44},sharp:{scale:.82},exposure:{scale:.68}},colors:{colorA:`#0F0B16`,colorB:`#403552`,colorC:`#776990`,colorD:`#AEA4BD`,highlightColor:`#C9C4D1`,glowColor:`#6E6185`}},particleRibbon:{numeric:{speed:{scale:.28},ribbonWidth:{scale:.62},ribbonTwist:{scale:.42},ribbonFold:{scale:.35},ribbonBreath:{scale:.18},exposure:{scale:.68}},colors:{colorA:`#3A6068`,colorB:`#375D78`,colorC:`#594E83`,colorD:`#854C7A`,highlightColor:`#B9CCD1`,glowColor:`#514C78`}},chromaticMetal:{numeric:{speed:{scale:.3},bandDensity:{scale:.62},chromaticShift:{scale:.35},metalStretch:{scale:.48},metalEvolution:{scale:.32},metalRoughness:{scale:1.35},metalDepth:{scale:.55},exposure:{scale:.72}},colors:{colorA:`#B8BCBA`,colorB:`#666B69`,colorC:`#9EA3A1`,colorD:`#282B2D`,highlightColor:`#D1D5D3`,glowColor:`#78898F`}},aurora:{numeric:{speed:{scale:.22},contourDeform:{scale:.3},zoom:{scale:.92},warp:{scale:.42},ridgeAmt:{scale:.38},sharp:{scale:.85},exposure:{scale:.62}},colors:{colorA:`#02050C`,colorB:`#1D6659`,colorC:`#285D78`,colorD:`#533E75`,highlightColor:`#92B6B3`,glowColor:`#286A62`}},frost:{numeric:{speed:{scale:.26},contourDeform:{scale:.28},zoom:{scale:.94},warp:{scale:.5},ridgeAmt:{scale:.46},sharp:{scale:.78},exposure:{scale:.72}},colors:{colorA:`#C3CDD5`,colorB:`#9AABB8`,colorC:`#768D9E`,colorD:`#536985`,highlightColor:`#D6DEE5`,glowColor:`#697D91`}},chrome:{numeric:{speed:{scale:.28},contourDeform:{scale:.35},zoom:{scale:.92},warp:{scale:.48},sharp:{scale:.74},exposure:{scale:.72}},colors:{colorA:`#A7AAA9`,colorB:`#6E7273`,colorC:`#363A3D`,colorD:`#101213`,highlightColor:`#CBCFCE`,glowColor:`#747A7B`}},opal:{numeric:{speed:{scale:.3},contourDeform:{scale:.32},zoom:{scale:.94},warp:{scale:.52},ridgeAmt:{scale:.48},exposure:{scale:.68}},colors:{colorA:`#C9C3BC`,colorB:`#6E9E91`,colorC:`#A17496`,colorD:`#68608E`,highlightColor:`#E1DCD5`,glowColor:`#82799B`}},spectrum:{numeric:{speed:{scale:.27},contourDeform:{scale:.3},zoom:{scale:.92},warp:{scale:.44},ridgeAmt:{scale:.38},exposure:{scale:.62}},colors:{colorA:`#B4BBC2`,colorB:`#285D8F`,colorC:`#91506F`,colorD:`#3F8873`,highlightColor:`#D8DDE1`,glowColor:`#386789`}},plasma:{numeric:{speed:{scale:.26},contourDeform:{scale:.28},zoom:{scale:.9},warp:{scale:.42},ridgeAmt:{scale:.36},sharp:{scale:.68},exposure:{scale:.6}},colors:{colorA:`#04020A`,colorB:`#084772`,colorC:`#1C5790`,colorD:`#174B84`,highlightColor:`#A5BBD0`,glowColor:`#14577F`}}},Se=new Set(_e);function Ce(e){return Se.has(e)}function we(e){let t=Object.fromEntries(_e.map(t=>[t,e[t]])),n={...e};for(let e of _e)delete n[e];return{shared:n,profile:t}}function Te(e){let t={...e},n=xe[e.style];for(let[r,i]of Object.entries(n.numeric))t[r]=e[r]*i.scale+(i.offset??0);for(let e of ge)t[e]=n.colors[e];return t}function Ee(e,t=be,n=ye){if(!Number.isFinite(t)||t<0)throw RangeError(`Invalid orb transition duration: ${t}`);if(!Number.isFinite(n)||n<0)throw RangeError(`Invalid orb activation duration: ${n}`);let r=we(e),i=we(Te(e));return{activationDuration:n,shared:r.shared,profiles:{idle:i.profile,thinking:r.profile},transitionDuration:t}}function De(e){return Ee({style:e,...x[e]})}function Oe(e,t){return{...e.shared,...e.profiles[t]}}function ke(e,t,n,r){return Ce(n)?{...e,profiles:{...e.profiles,[t]:{...e.profiles[t],[n]:r}}}:{...e,shared:{...e.shared,[n]:r}}}function Ae(e){if(!/^#[0-9a-f]{6}$/i.test(e))throw Error(`Invalid orb color: ${e}`);return[Number.parseInt(e.slice(1,3),16)/255,Number.parseInt(e.slice(3,5),16)/255,Number.parseInt(e.slice(5,7),16)/255]}function je(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function Me(e){return e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055}function Ne(e,t,n){if(n===0)return e;if(n===1)return t;let r=Ae(e),i=Ae(t);return`#${r.map((e,t)=>{let r=je(e)+(je(i[t])-je(e))*n;return Math.min(255,Math.max(0,Math.round(Me(r)*255)))}).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`.toUpperCase()}function Pe(e){let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)}function Fe(e){return 1-(1-Math.min(1,Math.max(0,e)))**3}function Ie(e,t,n){let r=Math.min(1,Math.max(0,n));if(r===0)return{...e};if(r===1)return{...t};let i={...t};for(let n of he)i[n]=e[n]+(t[n]-e[n])*r;for(let n of ge)i[n]=Ne(e[n],t[n],r);return i}function Le(e){let t=e.state,n={...e.params},r={...e.params},i=e.state,a=0,o=0;function s(e){if(o===0)return{...r};let t=Math.max(0,e-a)/o,s=i===`thinking`?Fe(t):Pe(t);return Ie(n,r,s)}return{sample(e,c){return e.state===t?r={...e.params}:(n=s(c),r={...e.params},i=e.state,a=c,o=Math.max(0,(e.state===`thinking`?e.activationDuration:e.transitionDuration)*1e3),t=e.state),s(c)}}}var Re=`// Glass Liquid — curated flow programs with an optional glass shell.
//
// The local presets use independent spatial models for Siri-like sheets,
// symmetric colour waves, aurora curtains, frost flow, neural interference,
// liquid chrome, opal interference, a voice membrane, a blue liquid drop, and
// a violet molten core, plus a chromatic brushed-metal field. The legacy liquid
// bank remains below for compatibility with older shared shader
// code, but is not exposed as an editor preset.
//
// When enabled, the shell uses a signed-distance refraction profile around the
// boundary, asymmetric spectral separation, and two directional edge lights.
// The fluid is resampled through that profile, so glass changes the image rather
// than covering it with a translucent white face.
//
// ---------------------------------------------------------------------------
// Analytic optical diffusion without a convolution.
// ---------------------------------------------------------------------------
//
// The source used a thirteen-tap 5px frost blur. This port keeps one fluid
// evaluation and applies the equivalent gaussian in the frequency domain:
//
//  1. **Per-octave attenuation, inside \`lqFbm\`.** Convolving with a gaussian of
//     sigma σ scales a component at wavenumber k by exp(-k²σ²/2). An fbm's
//     octaves have known wavenumbers — octave i sits at 2.03^i times the base —
//     so each octave's amplitude is scaled by its own factor and the field is
//     sampled once. The mean is untouched (a blur preserves it), so only the
//     deviation from 0.5 is scaled and the \`s / m\` normaliser is unchanged.
//     Every caller passes the diffusion sigma in its own input units, so detail
//     attenuation continues to track \`zoom\`.
//
//  2. **Value-space quadrature at every pointwise nonlinearity.** This is the
//     part that is easy to get wrong. \`blur(ridge(f))\` is not \`ridge(blur(f))\`:
//     attenuating first and ridging after leaves filaments thin and hard where
//     the blur should have spread them, which is exactly how the earlier
//     analytic-edge version failed. So \`lqFbm\` also returns the standard
//     deviation of the detail the attenuation removed — within a gaussian
//     window an octave scaled by β contributes variance ∝ (1 - β²), NOT
//     (1 - β)² — and every nonlinearity applied to that field integrates it
//     back out with a three-point Gauss-Hermite rule (exact through the fourth
//     moment). Three evaluations of a function of one float, not three
//     evaluations of the noise. \`lqRidgeS\`/\`lqStepS\`/\`lqPowS\` below; Nectar's
//     branch has the fbm inside a \`sin\`, where the same integral is closed-form
//     (E[sin(A + cε)] = sin A · exp(-c²σ²/2)), so it damps the sine instead.
//
//  3. **One continuous disc edge.** The fluid always reaches the sphere
//     boundary. Glass changes its sample coordinates near that boundary, so
//     toggling the shell cannot reveal a second hard-clipped silhouette.
//
// Deliberately NOT ported, and why:
//   - The liquid grain. It sits below display-pixel scale and adds noise rather
//     than useful optical detail, so Glass Liquid has no Grain parameter.
//   - The two contact-shadow ellipses under the ball and its outer
//     \`0 26px 50px -24px\` drop shadow. The Orbs family cut the source app's
//     floor at the user's request, and the export paints over \`Color.black\`.
//
// Scalar controls are packed after \`time\`; the colour bank starts on the next
// 16-byte boundary. The TypeScript writer mirrors this order exactly.
struct Uniforms {
  size:           vec2<f32>,
  time:           f32,
  speed:          f32,
  radius:         f32,
  zoom:           f32,
  warp:           f32,
  ridgeAmt:       f32,
  sharp:          f32,
  shade:          f32,
  sheen:          f32,
  gloss:          f32,
  shellMidAlpha:  f32,
  shellEdgeAlpha: f32,
  exposure:       f32,
  style:          f32,
  edgeSoftness:   f32,
  edgeGlow:       f32,
  paletteCount:   f32,
  glassEnabled:   f32,
  glassOpacity:   f32,
  contourDeform:  f32,
  bandDensity:    f32,
  chromaticShift: f32,
  metalScale:     f32,
  metalStretch:   f32,
  metalAngle:     f32,
  metalOffset:    f32,
  metalPhase:     f32,
  metalEvolution: f32,
  metalRoughness: f32,
  metalDepth:     f32,
  particleDensity: f32,
  ribbonCount:     f32,
  ribbonWidth:     f32,
  ribbonTwist:     f32,
  ribbonFold:      f32,
  ribbonBreath:    f32,
  particleSize:    f32,
  particleBloom:   f32,
  colorA:         vec4<f32>,
  colorB:         vec4<f32>,
  colorC:         vec4<f32>,
  colorD:         vec4<f32>,
  highlightColor: vec4<f32>,
  shellInner:     vec4<f32>,
  shellMid:       vec4<f32>,
  shellEdge:      vec4<f32>,
  sheenColor:     vec4<f32>,
  specColor:      vec4<f32>,
  canvasColor:    vec4<f32>,
  glowColor:      vec4<f32>,
  paletteStop0:    vec4<f32>,
  paletteStop1:    vec4<f32>,
  paletteStop2:    vec4<f32>,
  paletteStop3:    vec4<f32>,
  paletteStop4:    vec4<f32>,
  paletteStop5:    vec4<f32>,
  paletteStop6:    vec4<f32>,
  paletteStop7:    vec4<f32>,
  paletteStop8:    vec4<f32>,
  paletteStop9:    vec4<f32>,
  paletteStop10:   vec4<f32>,
  paletteStop11:   vec4<f32>,
};
@group(0) @binding(0) var<uniform> u: Uniforms;

// ── The Orbs edge bank (WGSL) ───────────────────────────────────────────────
// Two knobs every orb on the shelf carries: how soft its limb is, and how far
// it glows past it. See effects/_shared/edge.ts for the contract.
//
// THREE files must agree — edge.wgsl, edge.metal, edge.sksl. Change one, change
// all three, or the Code tab starts lying about what it ships.

// How much wider than the shipped feather the Edge softness slider is asking
// for. 0.005 is the width every orb was authored with, so this returns exactly
// 0 at the default and every edge expression collapses to the constant it
// replaced — the defaults are bit-identical to the render before the bank.
fn mfEdgeD(soft: f32) -> f32 {
  return soft - 0.005;
}

// The halo an orb throws past its own limb.
//
// ADDED, never subtracted: whatever the orb already paints out there — a
// studio wall, its own exp() bleed, the sheet's cones — survives untouched.
// That is what lets this be adopted by seventeen shaders whose backdrops have
// nothing in common.
//
// \`glow == 0\` returns \`col\` by an early exit rather than by adding zero. Both
// are exact, but the exit also skips the length() on the ~60% of the frame
// outside the ball, and 0 is the default.
fn mfEdgeGlow(col: vec3<f32>, uv: vec2<f32>, ctr: vec2<f32>, rad: f32,
              soft: f32, glow: f32, glowRGB: vec3<f32>) -> vec3<f32> {
  if (glow <= 0.0) { return col; }
  let r = length(uv - ctr);
  // Fenced to the outside of the limb by the same softness the limb uses, so
  // the halo starts where the ball stops however soft that boundary is. Without
  // it the exp() is 1 across the whole disc and washes the face flat.
  let outside = smoothstep(rad - max(soft, 0.0005), rad + max(soft, 0.0005), r);
  return col + glowRGB * (glow * exp(-max(r - rad, 0.0) * 11.0) * outside);
}


// ── The Orbs palette-ramp bank (WGSL) ───────────────────────────────────────
// The add/remove colour list, evaluated INSIDE the shader so every stop paints
// its own region of the ball instead of being averaged into a role colour.
// See effects/_shared/ramp.ts for the contract.
//
// THREE files must agree — ramp.wgsl, ramp.metal, ramp.sksl. Change one, change
// all three, or the Code tab starts lying about what it ships.

// One stop, picked without a dynamic array index.
//
// A \`var\` array indexed by a runtime value is the shape that spills to scratch
// memory on the GPUs this project cares about (PERFORMANCE.md); twelve selects
// stay in registers and are branchless on every backend. Written once here so
// no adopting shader has to.
fn mfRampPick(idx: f32,
              s0: vec3<f32>, s1: vec3<f32>, s2:  vec3<f32>, s3:  vec3<f32>,
              s4: vec3<f32>, s5: vec3<f32>, s6:  vec3<f32>, s7:  vec3<f32>,
              s8: vec3<f32>, s9: vec3<f32>, s10: vec3<f32>, s11: vec3<f32>) -> vec3<f32> {
  var r = s0;
  r = select(r, s1,  idx == 1.0);
  r = select(r, s2,  idx == 2.0);
  r = select(r, s3,  idx == 3.0);
  r = select(r, s4,  idx == 4.0);
  r = select(r, s5,  idx == 5.0);
  r = select(r, s6,  idx == 6.0);
  r = select(r, s7,  idx == 7.0);
  r = select(r, s8,  idx == 8.0);
  r = select(r, s9,  idx == 9.0);
  r = select(r, s10, idx == 10.0);
  r = select(r, s11, idx == 11.0);
  return r;
}

// The CYCLIC ramp: \`t\` wraps, and the last stop runs back into the first.
//
// This is the one a generated-colour orb wants. Prism's hue comes from a cosine
// of an unbounded scalar field, so its colour has always been periodic — a
// clamped ramp would flatten every band past t == 1 into one colour and throw
// the banding away. Wrapping keeps the field's structure exactly and only swaps
// what the structure is *coloured* with.
//
// NOT ONE BRANCH IN HERE, and that is load-bearing rather than tidy. An orb
// evaluates this next to a \`fract(sin(x) * 43758.5453)\` grain hash, which
// amplifies a last-bit change in its argument by ~44000x. Any \`if\` in this file
// or at a call site splits the fragment's basic block, the compiler stops
// folding \`uv / rad\` into its uses, and the hash turns that into speckle up to
// 33/255 — measured, on exactly the first cut of this bank. Straight-line code
// keeps the untouched render bit-identical. Same reasoning as the early-out
// guards every orb carries; see the note in orb-prism.wgsl.
fn mfRampCyc(tIn: f32, n: f32,
             s0: vec3<f32>, s1: vec3<f32>, s2:  vec3<f32>, s3:  vec3<f32>,
             s4: vec3<f32>, s5: vec3<f32>, s6:  vec3<f32>, s7:  vec3<f32>,
             s8: vec3<f32>, s9: vec3<f32>, s10: vec3<f32>, s11: vec3<f32>) -> vec3<f32> {
  let k  = clamp(floor(n + 0.5), 1.0, 12.0);
  let x  = fract(tIn) * k;
  let i0 = min(floor(x), k - 1.0);
  let i1 = select(i0 + 1.0, 0.0, i0 + 1.0 >= k);   // the wrap
  return mix(mfRampPick(i0, s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11),
             mfRampPick(i1, s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11),
             x - i0);
}

// The CLAMPED ramp: stop 0 at t == 0, the last stop at t == 1, held outside.
//
// This is the one an orb with an authored dark→light body ramp wants — the
// four-stop Deep/Mid/Surge/Crest shape, where the ends really are ends.
//
// Branchless for the same reason as \`mfRampCyc\`. The single-stop case falls out
// of the arithmetic rather than needing an early return: k == 1 makes the span
// zero, so x is 0, i0 is 0 and the mix weight is 0 — s0, exactly.
fn mfRampLin(tIn: f32, n: f32,
             s0: vec3<f32>, s1: vec3<f32>, s2:  vec3<f32>, s3:  vec3<f32>,
             s4: vec3<f32>, s5: vec3<f32>, s6:  vec3<f32>, s7:  vec3<f32>,
             s8: vec3<f32>, s9: vec3<f32>, s10: vec3<f32>, s11: vec3<f32>) -> vec3<f32> {
  let k  = clamp(floor(n + 0.5), 1.0, 12.0);
  let x  = clamp(tIn, 0.0, 1.0) * (k - 1.0);
  let i0 = clamp(floor(x), 0.0, max(k - 2.0, 0.0));
  return mix(mfRampPick(i0,     s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11),
             mfRampPick(i0 + 1.0, s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11),
             x - i0);
}

// ── The ramp as ONE value ───────────────────────────────────────────────────
//
// Thirteen uniforms is a reasonable thing for a shader to hold and a terrible
// thing for a helper to take. Several orbs make their body colour deep inside
// one — Glass·Liquid's fluid, the studio orbs' environment mirrors — and in the
// MSL these files are transcribed against, a helper cannot read the stitchable
// entry point's arguments, so the palette has to be handed down. Bundled like
// this that is one parameter instead of thirteen, and the three languages stay
// line-for-line.
//
// The stops come back out by CONSTANT index only, so this is still not a
// dynamically indexed array and still cannot spill to scratch memory.
struct MfRamp {
  n:   f32,
  s0:  vec3<f32>, s1:  vec3<f32>, s2:  vec3<f32>, s3:  vec3<f32>,
  s4:  vec3<f32>, s5:  vec3<f32>, s6:  vec3<f32>, s7:  vec3<f32>,
  s8:  vec3<f32>, s9:  vec3<f32>, s10: vec3<f32>, s11: vec3<f32>,
};

fn mfRampOf(n: f32,
            s0: vec3<f32>, s1: vec3<f32>, s2:  vec3<f32>, s3:  vec3<f32>,
            s4: vec3<f32>, s5: vec3<f32>, s6:  vec3<f32>, s7:  vec3<f32>,
            s8: vec3<f32>, s9: vec3<f32>, s10: vec3<f32>, s11: vec3<f32>) -> MfRamp {
  return MfRamp(n, s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11);
}

fn mfRampCycR(t: f32, r: MfRamp) -> vec3<f32> {
  return mfRampCyc(t, r.n, r.s0, r.s1, r.s2, r.s3, r.s4, r.s5,
                   r.s6, r.s7, r.s8, r.s9, r.s10, r.s11);
}

fn mfRampLinR(t: f32, r: MfRamp) -> vec3<f32> {
  return mfRampLin(t, r.n, r.s0, r.s1, r.s2, r.s3, r.s4, r.s5,
                   r.s6, r.s7, r.s8, r.s9, r.s10, r.s11);
}


// Fluid geometry, in ball radii (|p| == 1 on the ball's edge, y up).
const GL_FU:   f32 = 0.88172043;   // canvas half-side = 0.82/0.93 R

// Pure fluid keeps tighter diffusion; enabling glass restores the source's 5px
// frosted diffusion inside the inset shell.
const GL_BSIG_CLEAR: f32 = 0.01800000;
const GL_BSIG_GLASS: f32 = 0.03990000;

// --- the three constants the frequency-domain blur is fitted on -------------
// A gaussian's response is exp(-k²σ²/2), so GL_KA is k²/2 for the wavenumber
// where smoothstep-interpolated value noise actually keeps its energy. The
// textbook choice — one cycle per noise cell, k = 2π, GL_KA = 19.74 — blurs too
// hard, because the smoothstep interpolation is itself a low-pass and pulls the
// effective k down to about 3.5. Fitted against the 13-tap render.
const GL_KA:  f32 = 6.0;
// (2.03)² — how σ grows, in its own octave's cells, from one octave to the next.
const GL_KG:  f32 = 4.1209;
// The warp field displaces the fluid rather than colouring it, so blurring the
// image does not attenuate it as strongly as the model says. Also fitted.
const GL_KWA: f32 = 0.5;
// One value-noise octave's standard deviation about its own mean, as a fraction
// of its range — the scale that turns "amplitude the attenuation removed" into
// "how far the removed detail typically pushed the value".
const GL_KR:  f32 = 0.32;
const GL_GH:  f32 = 1.73205081;   // sqrt(3), the 3-point Gauss-Hermite abscissa

// Pure fluid reaches the ball edge.
const GL_CLEAR_EA: f32 = 0.995;
const GL_CLEAR_EB: f32 = 1.04;

// ---------------------------------------------------------------------------
// The sheet's liquid noise bank. Five octaves, gain .5, normalised by the
// weight sum, and rotated every octave. This is NOT the bank the sheet's Prism
// screen uses (a different hash, gain .55, unnormalised, no rotation).
// ---------------------------------------------------------------------------
fn lqHash(pIn: vec2<f32>) -> f32 {
  var p = fract(pIn * vec2<f32>(123.34, 456.21));
  p = p + vec2<f32>(dot(p, p + vec2<f32>(45.32)));
  return fract(p.x * p.y);
}

fn lqNoise(p: vec2<f32>) -> f32 {
  let i = floor(p);
  var f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lqHash(i), lqHash(i + vec2<f32>(1.0, 0.0)), f.x),
             mix(lqHash(i + vec2<f32>(0.0, 1.0)), lqHash(i + vec2<f32>(1.0, 1.0)), f.x), f.y);
}

// The fbm, pre-blurred. \`bs\` is the blur's sigma expressed in THIS call's input
// units — the caller scales it by whatever it scaled the domain by. Returns
// \`.x\` the attenuated value and \`.y\` the standard deviation of the detail the
// attenuation took out, which is what a following nonlinearity has to integrate
// over. Both are exact for a gaussian window: the surviving amplitude is β and
// the variance that leaves is (1 - β²), per octave, weighted by that octave's
// own share of the normalised sum.
fn lqFbm(pIn: vec2<f32>, bs: f32) -> vec2<f32> {
  var p = pIn;
  var s:  f32 = 0.0;
  var a:  f32 = 0.5;
  var m:  f32 = 0.0;
  var vr: f32 = 0.0;
  let e = -GL_KA * bs * bs;
  var g: f32 = 1.0;
  for (var i: i32 = 0; i < 5; i = i + 1) {
    let b = exp(e * g);
    s  = s  + a * (0.5 + b * (lqNoise(p) - 0.5));
    vr = vr + a * a * (1.0 - b * b);
    m  = m + a;
    a  = a * 0.5;
    g  = g * GL_KG;
    // GLSL's mat2(.8,.6,-.6,.8) is COLUMN-major — columns (.8,.6) and
    // (-.6,.8) — so the product is written out rather than constructed.
    p = vec2<f32>(0.8 * p.x - 0.6 * p.y, 0.6 * p.x + 0.8 * p.y) * 2.03;
  }
  return vec2<f32>(s / m, GL_KR * sqrt(vr) / m);
}

fn lqRidge(v: f32, k: f32) -> f32 {
  return pow(clamp(1.0 - abs(v * 2.0 - 1.0), 0.0, 1.0), k);
}

// The sheet's four-stop ramp, shared by every branch of every program.
fn lqRamp(v: f32, cA: vec3<f32>, cB: vec3<f32>, cC: vec3<f32>, cD: vec3<f32>) -> vec3<f32> {
  var c = mix(cA, cB, smoothstep(0.0, 0.45, v));
  c = mix(c, cC, smoothstep(0.38, 0.72, v));
  c = mix(c, cD, smoothstep(0.68, 1.0, v));
  // The editor's four colours are the default ramp. An optional custom palette
  // can replace them without changing the scalar field that produces \`v\`.
  return select(c, mfRampLin(v, u.paletteCount,
                             u.paletteStop0.rgb, u.paletteStop1.rgb, u.paletteStop2.rgb,
                             u.paletteStop3.rgb, u.paletteStop4.rgb, u.paletteStop5.rgb,
                             u.paletteStop6.rgb, u.paletteStop7.rgb, u.paletteStop8.rgb,
                             u.paletteStop9.rgb, u.paletteStop10.rgb, u.paletteStop11.rgb), u.paletteCount > 0.5);
}

// ---------------------------------------------------------------------------
// The three nonlinearities the fluid applies to a pre-blurred field, each
// integrated over the detail \`lqFbm\` attenuated away. Three-point
// Gauss-Hermite — nodes 0 and ±sqrt(3)·sd, weights 4/6 and 1/6 — reproduces a
// gaussian's second AND fourth moments, which is what keeps a ridged filament
// spreading as it dims instead of just dimming. \`vs\` is an \`lqFbm\` result:
// \`.x\` the value, \`.y\` that standard deviation.
// ---------------------------------------------------------------------------
fn lqRidgeS(vs: vec2<f32>, k: f32) -> f32 {
  let d = GL_GH * vs.y;
  return (lqRidge(vs.x - d, k) + 4.0 * lqRidge(vs.x, k) + lqRidge(vs.x + d, k)) / 6.0;
}

fn lqStepS(vs: vec2<f32>, a: f32, b: f32) -> f32 {
  let d = GL_GH * vs.y;
  return (smoothstep(a, b, vs.x - d) + 4.0 * smoothstep(a, b, vs.x)
        + smoothstep(a, b, vs.x + d)) / 6.0;
}

fn lqPowS(vs: vec2<f32>, k: f32) -> f32 {
  let d = GL_GH * vs.y;
  return (pow(clamp(vs.x - d, 0.0, 1.0), k) + 4.0 * pow(clamp(vs.x, 0.0, 1.0), k)
        + pow(clamp(vs.x + d, 0.0, 1.0), k)) / 6.0;
}

// ---------------------------------------------------------------------------
// Curated local flow programs. Each preset owns a different spatial model;
// colour changes are secondary to silhouette, frequency, and motion structure.
// ---------------------------------------------------------------------------

fn glsFinishPresetFluid(colorIn: vec3<f32>, p: vec2<f32>) -> vec3<f32> {
  var color = colorIn;
  color = mix(color, u.highlightColor.rgb,
              u.shade * 0.22 * smoothstep(0.15, 1.15, dot(p, vec2<f32>(-0.32, 0.78))));
  color = color * (1.0 - u.shade * 0.34
                  * smoothstep(-0.1, 1.2, dot(p, vec2<f32>(0.45, -0.62))));
  color = color * (1.0 - u.shade * 0.22 * smoothstep(0.72, 1.08, length(p)));
  return clamp(color, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn glsFinishEmissionFluid(colorIn: vec3<f32>, p: vec2<f32>) -> vec3<f32> {
  var color = colorIn;
  if (u.glassEnabled > 0.5) {
    color = mix(color, u.highlightColor.rgb,
                u.shade * 0.22 * smoothstep(0.15, 1.15, dot(p, vec2<f32>(-0.32, 0.78))));
  }
  color = color * (1.0 - u.shade * 0.34
                  * smoothstep(-0.1, 1.2, dot(p, vec2<f32>(0.45, -0.62))));
  color = color * (1.0 - u.shade * 0.22 * smoothstep(0.72, 1.08, length(p)));
  return clamp(color, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn glsSiriBand(q: vec2<f32>, drift: f32, phaseOffset: f32, amplitude: f32,
               mainY: f32, envelope: f32, softness: f32) -> vec2<f32> {
  let y = amplitude * envelope * sin(q.x * 1.0 + drift + phaseOffset);
  let distanceToLine = abs(q.y - y);
  let line = 0.018 / (sqrt(distanceToLine * distanceToLine + softness * softness) + 0.026);
  let bandDistance = max(0.0, max(q.y - max(mainY, y), min(mainY, y) - q.y));
  let band = 0.018 / (bandDistance + 0.075);
  return vec2<f32>(line, band);
}

fn glsSiriFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  // The reference wave is a main sinusoid plus four chromatically separated
  // waves. Their enclosed bands carry colour while the shared crest stays hot.
  let scale = 0.74 + u.zoom * 0.34;
  let q = p / scale;
  let xNorm = q.x;
  let envelopeBase = cos(1.57079633 * min(abs(0.9 * xNorm), 1.0));
  let envelope = envelopeBase * envelopeBase;
  let low = 0.5 + 0.5 * cos(t * 0.37);
  let mid = 0.5 + 0.5 * sin(t * 0.51 + 1.2);
  let high = 0.5 + 0.5 * cos(t * 0.73 + 2.1);
  let drift = t * 2.4;
  let mainAmplitude = 0.25 + u.ridgeAmt * 0.075 + low * 0.018;
  let bandAmplitude = mainAmplitude + mid * 0.025 + high * 0.018;
  let mainY = mainAmplitude * envelope * sin(q.x * 1.1 + drift);
  let separation = 1.85 + u.warp * 0.2 + mid * 0.28;
  let softness = 0.035 + (1.0 - u.ridgeAmt) * 0.018 + mid * 0.006;

  let band0 = glsSiriBand(q, drift, -separation, bandAmplitude, mainY, envelope, softness);
  let band1 = glsSiriBand(q, drift, -separation * 0.34, bandAmplitude, mainY, envelope, softness);
  let band2 = glsSiriBand(q, drift, separation * 0.34, bandAmplitude, mainY, envelope, softness);
  let band3 = glsSiriBand(q, drift, separation, bandAmplitude, mainY, envelope, softness);
  let w0 = band0.x + band0.y;
  let w1 = band1.x + band1.y;
  let w2 = band2.x + band2.y;
  let w3 = band3.x + band3.y;
  let total = w0 + w1 + w2 + w3;
  let dominant0 = w0 * w0;
  let dominant1 = w1 * w1;
  let dominant2 = w2 * w2;
  let dominant3 = w3 * w3;
  let dominantTotal = dominant0 + dominant1 + dominant2 + dominant3;
  let spectral = (u.colorA.rgb * dominant0 + u.colorC.rgb * dominant1
                + u.colorB.rgb * dominant2 + u.colorD.rgb * dominant3)
                / max(dominantTotal, 0.0001);
  let energy = (1.0 - exp(-total * 0.58)) * envelope;
  let mainDistance = abs(q.y - mainY);
  let whiteCore = exp(-mainDistance * mainDistance / 0.0028) * envelope;
  let glassFill = select(0.0, 1.0, u.glassEnabled > 0.5);
  let atmosphere = mix(u.colorD.rgb, u.colorB.rgb,
                       smoothstep(-0.7, 0.7, q.y)) * 0.018 * glassFill;
  var color = atmosphere + spectral * energy * 1.14;
  color = color + u.highlightColor.rgb * whiteCore * (0.18 + 0.1 * low);
  let emissionMask = mix(smoothstep(0.08, 0.25, energy + whiteCore * 0.12),
                         1.0, glassFill);
  color = color * emissionMask;
  color = color / (vec3<f32>(1.0) + color * 0.18);
  return glsFinishEmissionFluid(color, p);
}

fn glsSpectrumHeight(q: vec2<f32>, t: f32, frequency: f32,
                     phaseOffset: f32, amplitude: f32) -> f32 {
  let x = q.x * 2.15;
  let envelope = pow(4.0 / (4.0 + x * x), 4.0);
  let breathing = 0.82 + 0.18 * sin(t * 0.48 + phaseOffset * 0.7);
  let wave = abs(sin(frequency * x - t * 1.36 + phaseOffset));
  return envelope * amplitude * breathing * (0.28 + 0.72 * wave);
}

fn glsSpectrumLayer(q: vec2<f32>, height: f32, softness: f32) -> f32 {
  return (1.0 - smoothstep(max(height - softness, 0.0), height + softness, abs(q.y)))
         * smoothstep(0.0, 0.045, height);
}

fn glsSpectrumFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  // Three symmetric filled wave surfaces orbit a persistent support line. This
  // keeps the iOS 9 voice-field silhouette without depending on canvas strokes.
  let scale = 0.74 + u.zoom * 0.34;
  let q = p / scale;
  let amplitude = 0.26 + u.ridgeAmt * 0.27;
  let frequency = 0.72 + u.warp * 0.095;
  let softness = 0.026 + (1.0 - u.ridgeAmt) * 0.032;
  let h0 = glsSpectrumHeight(q, t, frequency * 0.82, -1.2, amplitude * 0.72);
  let h1 = glsSpectrumHeight(q, t, frequency, 0.45, amplitude);
  let h2 = glsSpectrumHeight(q, t, frequency * 1.17, 2.05, amplitude * 0.82);
  let l0 = glsSpectrumLayer(q, h0, softness);
  let l1 = glsSpectrumLayer(q, h1, softness);
  let l2 = glsSpectrumLayer(q, h2, softness);
  let spectrumX = q.x * 2.15;
  let envelope = pow(4.0 / (4.0 + spectrumX * spectrumX), 4.0);
  let support = exp(-q.y * q.y / 0.00072) * envelope;
  let total = l0 + l1 + l2;
  let spectral = (u.colorB.rgb * l0 + u.colorC.rgb * l1 + u.colorD.rgb * l2)
                 / max(total, 0.001);
  let glassFill = select(0.0, 1.0, u.glassEnabled > 0.5);
  var color = u.colorD.rgb * 0.025 * glassFill
            + spectral * (1.0 - exp(-total * 0.86));
  color = color + u.colorA.rgb * support * 0.58;
  color = color / (vec3<f32>(1.0) + color * 0.2);
  return glsFinishEmissionFluid(color, p);
}

fn glsAuroraLayer(p: vec2<f32>, t: f32, offset: f32) -> f32 {
  let drift = t * 0.18 + offset * 2.5;
  let wave1 = sin(p.x * (2.0 + u.warp * 0.13) + drift + offset * 6.0) * 0.25;
  let wave2 = sin(p.x * 3.7 + drift * 1.3 + offset * 4.0) * 0.12;
  let wave3 = sin(p.x * 7.2 + drift * 0.7 + offset * 8.0) * 0.055;
  let noiseValue = lqFbm(vec2<f32>(p.x * 1.6 + drift * 0.35,
                                   p.y * 0.8 + offset * 3.0), 0.018).x;
  let center = offset * 0.46 + wave1 + wave2 + wave3
               + (noiseValue - 0.5) * 0.28;
  let dist = abs(p.y - center);
  let glow = exp(-dist * dist * (13.0 - 5.0 * u.ridgeAmt));
  let shimmer = lqFbm(vec2<f32>(p.x * 4.0 + t * 0.22,
                                p.y * 7.0 + offset * 5.0), 0.012).x;
  return glow * (0.64 + 0.36 * shimmer);
}

fn glsAuroraFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  let q = p * (0.82 + u.zoom * 0.58);
  let l0 = glsAuroraLayer(q, t, -0.72);
  let l1 = glsAuroraLayer(q, t, 0.0);
  let l2 = glsAuroraLayer(q, t, 0.72);
  var color = u.colorA.rgb * (0.46 + 0.18 * (q.y + 1.0));
  color = color + u.colorB.rgb * l0 * 1.3;
  color = color + u.colorC.rgb * l1 * 1.15;
  color = color + u.colorD.rgb * l2 * 1.2;
  color = color + mix(u.colorB.rgb, u.colorD.rgb, 0.5) * min(l0 * l2, l1) * 0.65;

  let starUv = (q + vec2<f32>(1.0)) * 18.0;
  let starCell = floor(starUv);
  let starHash = lqHash(starCell);
  let starPoint = exp(-dot(fract(starUv) - vec2<f32>(0.5),
                            fract(starUv) - vec2<f32>(0.5)) * 90.0);
  let stars = step(0.965, starHash) * starPoint
              * (0.55 + 0.45 * sin(t * (1.0 + starHash * 2.0) + starHash * 6.28));
  color = color + u.highlightColor.rgb * stars * (1.0 - clamp(l0 + l1 + l2, 0.0, 1.0));
  color = color / (vec3<f32>(1.0) + color * 0.28);
  return glsFinishPresetFluid(color, p);
}

fn glsRotate(p: vec2<f32>, angle: f32) -> vec2<f32> {
  let c = cos(angle);
  let s = sin(angle);
  return vec2<f32>(c * p.x - s * p.y, s * p.x + c * p.y);
}

fn glsNeuroShape(pIn: vec2<f32>, t: f32) -> f32 {
  var p = pIn * (0.34 + 0.08 * u.zoom);
  var sineAccum = vec2<f32>(0.0);
  var result = vec2<f32>(0.0);
  var scale = 8.0;
  for (var j: i32 = 0; j < 11; j = j + 1) {
    p = glsRotate(p, 1.0);
    sineAccum = glsRotate(sineAccum, 1.0);
    let layer = p * scale + vec2<f32>(f32(j)) + sineAccum - vec2<f32>(t * 0.34);
    sineAccum = sineAccum + sin(layer);
    result = result + (vec2<f32>(0.5) + 0.5 * cos(layer)) / scale;
    scale = scale * 1.16;
  }
  return result.x + result.y;
}

fn glsPlasmaFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  let shape = glsNeuroShape(p, t);
  let phase = shape * (10.0 + u.warp) + p.x * 1.7 - p.y * 1.3 - t * 0.52;
  let ridgeWidth = 0.62 - 0.24 * u.ridgeAmt;
  let primary = pow(abs(cos(phase)), max(1.3, u.sharp * ridgeWidth));
  let secondary = pow(abs(cos(phase * 0.53 + atan2(p.y, p.x) * 2.0 + t * 0.21)),
                      max(1.6, u.sharp * (ridgeWidth + 0.1)));
  let filaments = max(primary, secondary * 0.64);
  let core = pow(primary, 4.0);
  let polarity = 0.5 + 0.5 * sin(phase * 0.37 + shape * 3.0);
  var color = mix(u.colorA.rgb * 0.42, u.colorD.rgb * 0.48, polarity * 0.46);
  color = mix(color, u.colorB.rgb, filaments * 0.72);
  color = mix(color, u.colorC.rgb, core * 0.68);
  color = color + u.highlightColor.rgb * pow(core, 3.0) * 0.16;
  color = color / (vec3<f32>(1.0) + color * 0.34);
  return glsFinishPresetFluid(color, p);
}

fn glsChromeFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  var q = p * (1.0 + u.zoom * 0.35);
  let amplitude = 0.028 * u.warp;
  for (var i: i32 = 1; i <= 9; i = i + 1) {
    let fi = f32(i);
    q.x = q.x + amplitude / fi * cos(fi * 2.7 * q.y + t * 0.46);
    q.y = q.y + amplitude / fi * cos(fi * 3.1 * q.x - t * 0.4);
  }
  let denominator = max(abs(sin(t * 0.24 - q.y - q.x)), 0.045);
  let flare = clamp(1.0 / denominator, 0.0, 18.0);
  let metal = smoothstep(1.15, 7.5, flare);
  let fold = 0.5 + 0.5 * cos((q.x - q.y) * (3.2 + u.sharp * 0.28) + t * 0.32);
  let value = clamp(metal * 0.74 + fold * 0.36, 0.0, 1.0);
  var color = lqRamp(value, u.colorD.rgb, u.colorC.rgb, u.colorB.rgb, u.colorA.rgb);
  color = mix(color, u.colorA.rgb, pow(metal, 5.0) * 0.62);
  return glsFinishPresetFluid(color, p);
}

fn glsChromaticMetalPhase(p: vec2<f32>, t: f32) -> f32 {
  let angle = u.metalAngle * 0.01745329252;
  let scale = max(u.metalScale, 0.05);
  let stretch = mix(0.48, 1.58, clamp(u.metalStretch, 0.0, 1.0));
  var q = glsRotate(p / scale, angle);
  q = vec2<f32>(q.x / stretch, q.y * stretch);

  // The reference advances continuously while local reflections evolve out of
  // phase. Travelling domain waves provide that deformation without rotating
  // the entire pattern as one rigid layer. Integer harmonics keep a clean loop.
  let cycle = t * 0.46 + u.metalPhase * 6.28318530718;
  let evolution = clamp(u.metalEvolution, 0.0, 2.0);
  q.x = q.x + sin(q.y * 1.86 - cycle) * 0.095 * evolution;
  q.x = q.x + sin((q.x + q.y) * 1.28 + cycle * 2.0 + 1.4) * 0.045 * evolution;
  q.y = q.y + sin(q.x * 1.52 + cycle + 0.8) * 0.07 * evolution;

  let repeats = max(u.bandDensity, 1.0);
  return q.x * repeats * 2.18
       + sin(q.y * (1.3 + repeats * 0.26) - cycle) * 0.56 * evolution
       + sin((q.x - q.y) * 1.34 + cycle * 2.0 + 1.7) * 0.27 * evolution
       + sin((q.x * 0.72 + q.y) * 2.1 - cycle * 3.0 + 0.35) * 0.11 * evolution
       + sin(cycle) * 0.1
       + sin(cycle * 3.0 + 0.7) * 0.035
       + cycle
       + u.metalOffset * 6.28318530718;
}

fn glsChromaticMetalTone(phase: f32) -> f32 {
  let wave = 0.5 + 0.5 * cos(phase);
  let roughness = clamp(u.metalRoughness, 0.0, 1.0);
  let depth = clamp(u.metalDepth, 0.0, 1.0);
  let edge = 0.025 + roughness * 0.18;
  let broadReflection = smoothstep(0.5 - edge, 0.5 + edge, wave);
  let hardReflection = pow(wave, mix(13.0, 4.0, roughness));
  let blackFold = pow(1.0 - wave, mix(9.0, 3.0, roughness));
  let body = mix(wave, broadReflection, 0.2 + depth * 0.3);
  return clamp(0.018 + body * (0.46 + depth * 0.12)
               + hardReflection * (0.3 + depth * 0.42)
               - blackFold * (0.07 + depth * 0.11), 0.0, 1.0);
}

fn glsChromaticMetalSample(p: vec2<f32>, t: f32) -> vec3<f32> {
  let phase = glsChromaticMetalPhase(p, t);
  let angle = u.metalAngle * 0.01745329252;
  let brushP = glsRotate(p / max(u.metalScale, 0.05), angle);
  let brushed = sin(brushP.y * 146.0 + sin(brushP.x * 11.0) * 0.58)
              + 0.48 * sin(brushP.y * 317.0 - brushP.x * 5.0);
  let brushAmount = 0.004 + clamp(u.metalRoughness, 0.0, 1.0) * 0.014;
  let tone = clamp(glsChromaticMetalTone(phase) + brushed * brushAmount, 0.0, 1.0);
  return lqRamp(tone, u.colorD.rgb, u.colorB.rgb, u.colorC.rgb, u.colorA.rgb);
}

fn glsChromaticMetalFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  let angle = u.metalAngle * 0.01745329252;
  let splitDirection = glsRotate(vec2<f32>(0.0, 1.0), angle);
  let split = splitDirection * u.chromaticShift * 0.045;
  let redSample = glsChromaticMetalSample(p + split, t);
  let neutral = glsChromaticMetalSample(p, t);
  let blueSample = glsChromaticMetalSample(p - split, t);
  let optical = vec3<f32>(redSample.r, neutral.g, blueSample.b);
  let fringe = clamp(length(optical - neutral) * 4.0, 0.0, 1.0);
  var color = mix(neutral, optical,
                  clamp(u.chromaticShift * (0.72 + fringe * 0.28), 0.0, 1.0));
  let centerTone = glsChromaticMetalTone(glsChromaticMetalPhase(p, t));
  let glint = pow(centerTone, mix(12.0, 5.0, clamp(u.metalRoughness, 0.0, 1.0)));
  color = mix(color, u.highlightColor.rgb,
              glint * clamp(u.metalDepth, 0.0, 1.0) * 0.06);

  // A second, sphere-scale reflection layer keeps the material metallic even
  // when the optional glass shell is disabled. It modulates the animated ramp
  // instead of raising exposure, preserving dark chrome between reflections.
  let radial2 = clamp(dot(p, p), 0.0, 1.0);
  let normal = normalize(vec3<f32>(p, sqrt(max(1.0 - radial2, 0.0))));
  let roughness = clamp(u.metalRoughness, 0.0, 1.0);
  let depth = clamp(u.metalDepth, 0.0, 1.0);
  let key = pow(max(dot(normal, normalize(vec3<f32>(-0.48, 0.62, 0.62))), 0.0),
                mix(7.0, 3.0, roughness));
  let fill = pow(max(dot(normal, normalize(vec3<f32>(0.7, -0.34, 0.63))), 0.0),
                 mix(10.0, 4.0, roughness));
  let limb = 1.0 - normal.z;
  let fresnel = pow(limb, 3.0);
  let rim = pow(limb, 10.0);
  color = color * (0.86 + normal.z * 0.14);
  color = mix(color, u.highlightColor.rgb, key * (0.05 + depth * 0.13));
  color = mix(color, u.colorC.rgb, fill * (0.025 + depth * 0.07));
  color = mix(color, u.colorD.rgb, fresnel * (0.12 + depth * 0.15));
  color = mix(color, u.highlightColor.rgb, rim * (0.035 + depth * 0.055));
  return glsFinishPresetFluid(color, p);
}

fn glsOpalFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  let q = p * (0.8 + u.zoom * 0.64);
  let complexity = 0.76 + u.warp * 0.085;
  var d = -t * 0.42;
  var a = 0.0;
  for (var i: i32 = 0; i < 8; i = i + 1) {
    let fi = f32(i);
    a = a + cos(fi - d - a * q.x * complexity);
    d = d + sin(q.y * fi * complexity + a);
  }
  d = d + t * 0.42;
  let c1 = cos(q * vec2<f32>(d, a)) * 0.6 + vec2<f32>(0.4);
  let c2 = cos(a + d) * 0.5 + 0.5;
  let interference = 0.5 + 0.5 * cos(vec3<f32>(c1.x, c1.y, c2)
                         * cos(vec3<f32>(d, a, 2.5)) * 0.5 + vec3<f32>(0.5));
  let tone = fract(interference.r * 0.37 + interference.g * 0.51
                   + interference.b * 0.73 + c1.x * 0.22 - c1.y * 0.15);
  var color = lqRamp(tone, u.colorB.rgb, u.colorC.rgb, u.colorD.rgb, u.colorA.rgb);
  color = mix(color, u.colorA.rgb, 0.16 + 0.1 * interference.b);
  color = color / (vec3<f32>(1.0) + color * 0.16);
  return glsFinishPresetFluid(color, p);
}

fn glsFrostFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  // The initial frost-style orb: a slow domain warp drives broad cloudy colour
  // bodies, while a second higher-frequency field contributes adjustable veins.
  var q = p * (0.66 + u.zoom * 0.92);
  q.y = q.y + t * 0.055;
  let blur = 0.011 + 0.006 * u.zoom;
  let warpField = vec2<f32>(
    lqFbm(q * 1.14 + vec2<f32>(t * 0.055, 0.0), blur).x,
    lqFbm(q * 1.14 + vec2<f32>(6.8, -t * 0.048), blur).x
  );
  let warped = q + (warpField - vec2<f32>(0.5)) * (0.28 + u.warp * 0.17);
  let body = lqFbm(warped * 1.48 + vec2<f32>(t * 0.032, -t * 0.02), blur * 1.48);
  let veins = lqRidgeS(
    lqFbm(warped * 2.36 + vec2<f32>(3.1, -t * 0.024), blur * 2.36),
    u.sharp
  );
  let value = mix(lqStepS(body, 0.1, 0.9),
                  clamp(veins * 0.8 + body.x * 0.46, 0.0, 1.0),
                  u.ridgeAmt);
  var color = lqRamp(value, u.colorA.rgb, u.colorB.rgb, u.colorC.rgb, u.colorD.rgb);
  color = mix(color, u.colorA.rgb, 0.08 * smoothstep(0.62, 0.92, body.x));
  return glsFinishPresetFluid(color, p);
}

fn glsVoiceWaveFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  // A single broad membrane stays phase-coherent across the sphere. Nearby
  // translucent layers add volume without splitting into separate Siri bands.
  let scale = 0.76 + u.zoom * 0.34;
  let q = p / scale;
  let rimEnvelope = pow(max(1.0 - q.x * q.x, 0.0), 0.72);
  let drift = t * 0.82;
  let amplitude = 0.2 + u.warp * 0.018;
  let mainY = rimEnvelope * (amplitude * sin(q.x * 1.48 + drift)
              + 0.055 * sin(q.x * 3.2 - drift * 0.43 + 1.1));
  let distance = q.y - mainY;
  let width = 0.11 + (1.0 - u.ridgeAmt) * 0.075;
  let membrane = exp(-distance * distance / max(width * width, 0.001)) * rimEnvelope;
  let upperVeil = exp(-(distance - 0.105) * (distance - 0.105)
                      / max(width * width * 2.4, 0.001)) * rimEnvelope;
  let lowerVeil = exp(-(distance + 0.115) * (distance + 0.115)
                      / max(width * width * 2.8, 0.001)) * rimEnvelope;
  let crest = exp(-distance * distance / 0.0026) * rimEnvelope;
  let depth = sqrt(max(1.0 - clamp(dot(p, p), 0.0, 1.0), 0.0));
  var color = mix(u.colorA.rgb * 0.7, u.colorD.rgb * 0.34,
                  smoothstep(-0.82, 0.82, q.y));
  color = mix(color, u.colorB.rgb, upperVeil * 0.7);
  color = mix(color, u.colorC.rgb, lowerVeil * 0.62);
  color = color + mix(u.colorB.rgb, u.colorC.rgb, 0.46) * membrane * 0.34;
  color = color + u.highlightColor.rgb * crest * 0.14;
  color = color * (0.58 + 0.42 * depth);
  return glsFinishPresetFluid(color, p);
}

fn glsBlueDropFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  // Slow diagonal advection keeps the broad liquid bodies coherent. The two
  // shear waves replace the reference orb's circular, looped point motion.
  let depth = sqrt(max(1.0 - clamp(dot(p, p), 0.0, 1.0), 0.0));
  var q = p * mix(0.72, 1.0, depth * 0.62 + 0.38);
  q = glsRotate(q, -0.24 + 0.06 * sin(t * 0.17));
  let scale = 1.0 + u.zoom * 1.12;
  let blur = 0.012 + 0.006 * u.zoom;
  let driftA = lqFbm(q * 1.28 + vec2<f32>(t * 0.095, -t * 0.034), blur * 1.28);
  let driftB = lqFbm(glsRotate(q, 1.08) * 1.62
                     + vec2<f32>(-t * 0.042, t * 0.078), blur * 1.62);
  var flowed = q + vec2<f32>(driftA.x - 0.5, driftB.x - 0.5)
                 * (0.24 + u.warp * 0.1);
  flowed.x = flowed.x + sin(flowed.y * 2.15 + t * 0.24) * (0.035 + u.warp * 0.012);
  flowed.y = flowed.y + sin(flowed.x * 1.38 - t * 0.18) * (0.045 + u.warp * 0.01);
  let body = lqFbm(flowed * scale + vec2<f32>(t * 0.025, -t * 0.018), blur * scale);
  let marble = lqRidgeS(lqFbm(flowed * (1.72 + u.zoom * 0.9)
                              + vec2<f32>(2.7, -t * 0.035),
                              blur * (1.72 + u.zoom * 0.9)),
                            0.8 + u.sharp * 0.46);
  let value = clamp(mix(body.x, body.x * 0.62 + marble * 0.58, u.ridgeAmt), 0.0, 1.0);
  var color = lqRamp(value, u.colorA.rgb, u.colorB.rgb, u.colorC.rgb, u.colorD.rgb);
  let light = pow(max(dot(normalize(vec3<f32>(p, depth)),
                          normalize(vec3<f32>(-0.48, 0.62, 0.92))), 0.0), 3.2);
  color = mix(color, u.highlightColor.rgb, light * (0.035 + 0.05 * u.shade));
  color = color * (0.74 + 0.26 * depth);
  return glsFinishPresetFluid(color, p);
}

fn glsVioletEmberFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  // A radial twist and two crossing drift fields make heavy molten folds. This
  // moves as a breathing spiral instead of the reference orb's closed circles.
  let scale = 1.08 + u.zoom * 1.18;
  let blur = 0.011 + 0.005 * u.zoom;
  let radius = length(p);
  let twist = t * 0.055 + radius * (0.72 + u.warp * 0.11)
              + 0.08 * sin(t * 0.31 + radius * 4.0);
  let q = glsRotate(p * scale, twist);
  let low = lqFbm(q * 1.18 + vec2<f32>(t * 0.068, -t * 0.105), blur * 1.18);
  let cross = lqFbm(glsRotate(q, -1.12) * 1.52
                    + vec2<f32>(-t * 0.094, t * 0.042)
                    + vec2<f32>(low.x * 1.35, -low.x * 0.72), blur * 1.52);
  let warped = q + vec2<f32>(low.x - 0.5, cross.x - 0.5)
                   * (0.3 + u.warp * 0.12);
  let melt = lqFbm(warped * 1.34
                   + vec2<f32>(cross.x * 1.48, low.x * 1.12), blur * 1.34);
  let veins = lqRidgeS(lqFbm(warped * (2.05 + u.zoom * 0.72)
                             + vec2<f32>(-2.1, t * 0.052),
                             blur * (2.05 + u.zoom * 0.72)),
                           0.82 + u.sharp * 0.58);
  let heat = smoothstep(0.18, 0.92,
                        melt.x * (0.72 - u.ridgeAmt * 0.16)
                        + veins * (0.32 + u.ridgeAmt * 0.5));
  var color = lqRamp(heat, u.colorA.rgb, u.colorB.rgb, u.colorC.rgb, u.colorD.rgb);
  let pulse = 0.94 + 0.06 * sin(t * 0.44 + melt.x * 5.0);
  color = color * pulse;
  color = mix(color, u.highlightColor.rgb, pow(veins, 4.0) * 0.045);
  return glsFinishPresetFluid(color, p);
}

fn glsRefractiveBlobFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  // Broad advected cells give the lens something legible to bend. A slower
  // caustic ribbon crosses those cells out of phase, so the material evolves
  // without looking like a texture rotating inside a fixed sphere.
  let radial2 = clamp(dot(p, p), 0.0, 1.0);
  let depth = sqrt(max(1.0 - radial2, 0.0));
  let scale = 0.82 + u.zoom * 1.08;
  let blur = 0.012 + 0.005 * u.zoom;
  var q = glsRotate(p * scale, 0.08 * sin(t * 0.17));
  let driftA = lqFbm(q * 1.16 + vec2<f32>(t * 0.052, -t * 0.078), blur * 1.16);
  let driftB = lqFbm(glsRotate(q, 1.21) * 1.34
                     + vec2<f32>(-t * 0.064, t * 0.041), blur * 1.34);
  q = q + vec2<f32>(driftA.x - 0.5, driftB.x - 0.5)
          * (0.34 + u.warp * 0.105);

  let body = lqFbm(q * 1.42 + vec2<f32>(driftB.x * 0.82, driftA.x * 0.66),
                   blur * 1.42);
  let ribbonPhase = q.y * (2.2 + u.warp * 0.11)
                  + sin(q.x * 1.72 - t * 0.19) * 0.92
                  + sin((q.x + q.y) * 1.08 + t * 0.13) * 0.46;
  let ribbon = pow(clamp(1.0 - abs(sin(ribbonPhase)), 0.0, 1.0),
                   0.82 + u.sharp * 0.23);
  let fold = lqRidgeS(lqFbm(q * 2.05 + vec2<f32>(2.8, -t * 0.037),
                            blur * 2.05), 0.9 + u.sharp * 0.32);
  let value = clamp(body.x * 0.5 + driftA.x * 0.16
                    + ribbon * (0.2 + u.ridgeAmt * 0.2)
                    + fold * u.ridgeAmt * 0.18, 0.0, 1.0);

  var color = lqRamp(value, u.colorA.rgb, u.colorB.rgb, u.colorC.rgb, u.colorD.rgb);
  let caustic = pow(ribbon, 3.1) * (0.24 + 0.28 * u.ridgeAmt)
               + pow(fold, 4.2) * 0.08;
  color = mix(color, u.colorD.rgb, clamp(caustic, 0.0, 0.52));
  color = color * (0.7 + depth * 0.3);
  let key = pow(max(dot(normalize(vec3<f32>(p, depth)),
                        normalize(vec3<f32>(-0.42, 0.58, 0.9))), 0.0), 4.0);
  color = mix(color, u.highlightColor.rgb, key * 0.055);
  return glsFinishPresetFluid(color, p);
}

fn glsParticleRibbonFluid(p: vec2<f32>, t: f32) -> vec3<f32> {
  // The visible body is emitted by the dedicated particle pipeline. Keeping
  // this branch empty lets the shared fullscreen pass contribute only the
  // optional glass shell and its transparent background contract.
  return vec3<f32>(0.0);
}

fn glsPresetFluid(p: vec2<f32>, style: i32, t: f32) -> vec3<f32> {
  if (style == 9) { return glsSiriFluid(p, t); }
  if (style == 10) { return glsAuroraFluid(p, t); }
  if (style == 11) { return glsPlasmaFluid(p, t); }
  if (style == 12) { return glsChromeFluid(p, t); }
  if (style == 13) { return glsOpalFluid(p, t); }
  if (style == 14) { return glsSpectrumFluid(p, t); }
  if (style == 15) { return glsFrostFluid(p, t); }
  if (style == 19) { return glsVoiceWaveFluid(p, t); }
  if (style == 20) { return glsBlueDropFluid(p, t); }
  if (style == 21) { return glsVioletEmberFluid(p, t); }
  if (style == 22) { return glsChromaticMetalFluid(p, t); }
  if (style == 23) { return glsRefractiveBlobFluid(p, t); }
  if (style == 24) { return glsParticleRibbonFluid(p, t); }
  return glsFrostFluid(p, t);
}

// ---------------------------------------------------------------------------
// The fluid, at one point, already blurred and straight (not premultiplied):
// the sheet's shader on \`fu\` — both programs, all four inner branches, and the
// shared shade tail — with the blur folded into the noise bank as above. The
// disc's own alpha is the caller's, because it is analytic now.
// ---------------------------------------------------------------------------
fn glsFluid(fu: vec2<f32>, md: i32, t: f32) -> vec3<f32> {
  let df = length(fu);

  let cA = u.colorA.rgb;
  let cB = u.colorB.rgb;
  let cC = u.colorC.rgb;
  let cD = u.colorD.rgb;

  // The blur's sigma, carried from fluid units into the fluid's own domains.
  // \`sp\` is it in pp/q units — the warp shifts q about but does not stretch it
  // on average, so pp and q share one. \`sw\` is the warp field's own, softened
  // by GL_KWA.
  let blurSigma = select(GL_BSIG_CLEAR, GL_BSIG_GLASS, u.glassEnabled > 0.5);
  let sp = blurSigma * u.zoom;
  let sw = sp * 1.1 * GL_KWA;

  var fcol: vec3<f32>;
  if (md < 0) {
    // progA — the warped body, the only branch with the slow vertical drift
    // and the only one that reads Ridge.
    var pp = fu * u.zoom;
    pp.y = pp.y + t * 0.05;
    let w = vec2<f32>(lqFbm(pp * 1.1 + vec2<f32>(0.0, t * 0.09), sw).x,
                      lqFbm(pp * 1.1 + vec2<f32>(7.7, -t * 0.07), sw).x);
    let q = pp + u.warp * (w - vec2<f32>(0.5));
    let body  = lqFbm(q * 1.5 + vec2<f32>(t * 0.04, 0.0), sp * 1.5);
    let veins = lqRidgeS(lqFbm(q * 2.2 + vec2<f32>(3.1), sp * 2.2), u.sharp);
    let v = mix(lqStepS(body, 0.12, 0.88),
                clamp(veins * 0.85 + 0.45 * body.x, 0.0, 1.0), u.ridgeAmt);
    fcol = lqRamp(v, cA, cB, cC, cD);
  } else {
    // progB — same warp, no vertical drift, four inner branches.
    let pp = fu * u.zoom;
    let w = vec2<f32>(lqFbm(pp * 1.1 + vec2<f32>(0.0, t * 0.09), sw).x,
                      lqFbm(pp * 1.1 + vec2<f32>(7.7, -t * 0.07), sw).x);
    let q = pp + u.warp * (w - vec2<f32>(0.5));
    if (md == 0) {
      // Nectar — a sine band the noise leans on. The fbm is INSIDE the sine, so
      // the removed detail integrates out in closed form rather than by
      // quadrature: E[sin(A + 6e)] = sin(A)·exp(-18·sd²). The second term of
      // the exponent is the same integral for the sine's own \`q.x * 7.0\`, which
      // the blur attenuates by exp(-49·sp²/2).
      let n0 = lqFbm(q * 2.2, sp * 2.2);
      let damp = exp(-18.0 * n0.y * n0.y - 24.5 * sp * sp);
      var v = 0.5 + 0.5 * damp * sin(q.x * 7.0 + n0.x * 6.0 + t * 0.35);
      v = mix(v, lqFbm(q * 1.4 + vec2<f32>(t * 0.03), sp * 1.4).x, 0.25);
      fcol = lqRamp(v, cA, cB, cC, cD);
    } else if (md == 1) {
      // Lumen — two ridged fields multiplied into filaments. The two fields are
      // independent, so each integrates its own detail out before the product.
      let v = lqRidgeS(lqFbm(q * 1.4 + vec2<f32>(t * 0.06, 0.0), sp * 1.4), u.sharp)
            * lqRidgeS(lqFbm(q * 1.7 - vec2<f32>(0.0, t * 0.05), sp * 1.7), u.sharp);
      fcol = lqRamp(pow(v, 0.7), cA, cB, cC, cD);
    } else if (md == 6) {
      // Sprig — noise warped by noise, with a ridged edge darkening it.
      let v = lqFbm(q * 1.3 + vec2<f32>(1.5 * lqFbm(q * 2.6 + vec2<f32>(t * 0.025), sp * 2.6).x), sp * 1.3);
      let edge = lqRidgeS(lqFbm(q * 2.1 + vec2<f32>(7.0), sp * 2.1), 1.3);
      fcol = lqRamp(lqStepS(v, 0.1, 0.9), cA, cB, cC, cD);
      fcol = fcol * (1.0 - 0.18 * edge);
    } else {
      // Haze and Smoke — the same rising plume at two palettes.
      let q2 = q + vec2<f32>(0.0, -t * 0.14);
      let v = lqFbm(q2 * 1.6 + vec2<f32>(2.2 * lqFbm(q2 * 2.4 + vec2<f32>(0.0, -t * 0.05), sp * 2.4).x), sp * 1.6);
      fcol = lqRamp(lqPowS(v, 1.5), cA, cB, cC, cD);
    }
  }

  // The sheet's shared tail: a highlight up-left, a shadow down-right, and a
  // darkened limb. All three are far below the blur's cutoff, so they are the
  // sheet's own expressions untouched. The grain term the sheet ends on is not
  // ported — see the header. The two \`1 - shade*k*smoothstep(...)\` terms are
  // multiplicative darkening, not colours, so they stay literal.
  fcol = mix(fcol, u.highlightColor.rgb,
             u.shade * 0.3 * smoothstep(0.25, 1.25, dot(fu, vec2<f32>(-0.32, 0.78))));
  fcol = fcol * (1.0 - u.shade * 0.42 * smoothstep(-0.05, 1.25, dot(fu, vec2<f32>(0.45, -0.62))));
  fcol = fcol * (1.0 - u.shade * 0.3 * smoothstep(0.72, 1.0, df));
  return clamp(fcol, vec3<f32>(0.0), vec3<f32>(1.0));
}

// ---------------------------------------------------------------------------
// The shell.
// ---------------------------------------------------------------------------

// Source-over onto an opaque destination, straight (un-premultiplied) sRGB.
fn glsOver(dst: vec3<f32>, src: vec3<f32>, a: f32) -> vec3<f32> {
  let k = clamp(a, 0.0, 1.0);
  return src * k + dst * (1.0 - k);
}

fn glsRefractionProfile(t: f32) -> f32 {
  let depth = clamp(t, 0.0, 1.0);
  let circular = sqrt(max(1.0 - (1.0 - depth) * (1.0 - depth), 0.0));
  return 1.0 - circular;
}

fn glsHighlightLobe(normal: vec2<f32>, direction: vec2<f32>, cut: f32,
                     power: f32) -> f32 {
  let angular = clamp((dot(normal, direction) - cut) / max(1.0 - cut, 0.001),
                      0.0, 1.0);
  return pow(angular, power);
}

fn glsContourWave(angle: f32, t: f32) -> vec2<f32> {
  let style = i32(u.style + 0.5);
  if (style == 19) {
    let wave = sin(angle * 2.0 + t * 0.27) * 0.72
               + sin(angle * 4.0 - t * 0.16 + 2.1) * 0.28;
    let slope = cos(angle * 2.0 + t * 0.27) * 1.44
                + cos(angle * 4.0 - t * 0.16 + 2.1) * 1.12;
    return vec2<f32>(wave, slope);
  }
  let wave = sin(angle * 3.0 + t * 0.62) * 0.52
             + sin(angle * 5.0 - t * 0.41 + 1.7) * 0.31
             + sin(angle * 2.0 + t * 0.23 + 3.1) * 0.17;
  let slope = cos(angle * 3.0 + t * 0.62) * 1.56
              + cos(angle * 5.0 - t * 0.41 + 1.7) * 1.55
              + cos(angle * 2.0 + t * 0.23 + 3.1) * 0.34;
  return vec2<f32>(wave, slope);
}

fn glsContourStrength() -> f32 {
  if (u.style >= 18.5) { return 0.11; }
  return select(0.09, 0.16, u.style >= 15.5);
}

fn glsContourScale(uv: vec2<f32>, t: f32, amount: f32) -> f32 {
  if (amount <= 0.0) { return 1.0; }
  let contour = glsContourWave(atan2(uv.y, uv.x), t);
  return 1.0 + clamp(amount, 0.0, 1.0) * glsContourStrength() * contour.x;
}

fn glsContourNormal(uv: vec2<f32>, rad: f32, t: f32, amount: f32) -> vec2<f32> {
  let distance = length(uv);
  if (distance <= 0.0001) { return vec2<f32>(0.0); }
  let radial = uv / distance;
  let contour = glsContourWave(atan2(uv.y, uv.x), t);
  let slope = clamp(amount, 0.0, 1.0) * glsContourStrength() * contour.y;
  let tangent = vec2<f32>(-radial.y, radial.x);
  return normalize(radial - tangent * (rad * slope / distance));
}

fn glsRefractionNormal(base: vec2<f32>, p: vec2<f32>, t: f32,
                       style: i32) -> vec2<f32> {
  if (style != 23) { return base; }
  let tangent = vec2<f32>(-base.y, base.x);
  let a = lqFbm(p * 2.15 + vec2<f32>(t * 0.061, -t * 0.043), 0.018).x;
  let b = lqFbm(glsRotate(p, 1.37) * 2.55
                  + vec2<f32>(-t * 0.037, t * 0.052), 0.021).x;
  let wave = (a - b) * 0.76 + sin(atan2(p.y, p.x) * 3.0 + t * 0.21) * 0.08;
  return normalize(base + tangent * wave);
}

fn orbGlassLiquidAnim(uv01: vec2<f32>) -> vec4<f32> {
  // The runner hands uv01 with y down from the top, like stitchable MSL's
  // \`position\`; the orb was authored bottom-left, so flip back.
  let fc = vec2<f32>(uv01.x, 1.0 - uv01.y) * u.size;
  let uv = (2.0 * fc - u.size) / max(min(u.size.x, u.size.y), 1.0);

  let rad = max(u.radius, 0.05);
  let t = u.time * u.speed;
  let s = i32(u.style + 0.5);
  let emissionOnly = u.glassEnabled <= 0.5 && (s == 9 || s == 14 || s == 24);
  let contourRad = rad * glsContourScale(uv, t, u.contourDeform);

  // Nothing on this pixel — and here that is the whole fluid and the whole
  // shell skipped, over roughly 60% of the quad. 1.01 is the far edge of the
  // ball's own coverage, \`1 - smoothstep(0.99, 1.01, pd)\` on the last line of
  // this function, which is EXACTLY zero past it, so the full path already
  // returns opaque black here. An early-out, not a clip: the number is that
  // coverage term's own far edge, so do not "tidy" it to 1.0 — that would
  // shave the outer half of the limb's antialiasing.
  //
  // Tested on \`uv\` rather than on \`pd\` because \`|uv| > rad * 1.01\` IS
  // \`pd > 1.01\`, and it keeps \`p\` and \`pd\` in the same basic block as
  // everything that reads them — the shape the four sibling orbs of this port
  // need, where branching on \`d\` after computing it makes the compiler stop
  // folding \`uv / rad\` into its uses and the moved last bit comes back through
  // their grain hash as speckle up to 34/255. Glass Liquid has no grain and is
  // nearly immune either way: at 1024x1024 this costs under a dozen bytes of a
  // four-million-byte frame, off by 1/255. Those are the branch existing, not a
  // pixel wrongly skipped — a copy of this guard with a threshold it can never
  // reach diffs identically, and against it the guard is exactly 0/255.
  if (length(uv) > contourRad * (1.01 + mfEdgeD(u.edgeSoftness))) {
    // Off the ball entirely — but the halo lives out here, so hand back
    // what the edge bank paints on nothing. Exactly black at Glow 0.
    let halo = clamp(mfEdgeGlow(vec3<f32>(0.0), uv, vec2<f32>(0.0), contourRad,
                                u.edgeSoftness, u.edgeGlow, u.glowColor.rgb),
                     vec3<f32>(0.0), vec3<f32>(1.0));
    let haloAlpha = max(halo.r, max(halo.g, halo.b));
    return vec4<f32>(halo, haloAlpha);
  }

  let p   = uv / contourRad;     // deformed ball space: |p| == 1 on the edge
  let pd  = length(p);

  // ---- the fluid ------------------------------------------------------
  let fu = p / GL_FU;

  // Branch dispatch. Source indices 0/2/4/6 are progA (md < 0); the others are
  // progB at the sheet's own mode number. An if-chain avoids a runtime-indexed
  // lookup here.
  var md: i32 = -1;
  if (s == 1) { md = 1; }
  else if (s == 3 || s == 8) { md = 7; }
  else if (s == 5) { md = 6; }
  else if (s == 7) { md = 0; }

  let clearFa = 1.0 - smoothstep(GL_CLEAR_EA, GL_CLEAR_EB, pd);
  let contourNormal = glsContourNormal(uv, rad, t, u.contourDeform);
  let normal = glsRefractionNormal(contourNormal, p, t, s);
  let edgeDepth = max(1.0 - pd, 0.0);
  let refractionWidth = 0.015 + 0.95 * clamp(u.shellMidAlpha, 0.0, 1.0);
  let refractionT = edgeDepth / max(refractionWidth, 0.001);
  let refractionProfile = pow(glsRefractionProfile(refractionT), 0.68);
  let refractionAmount = 1.6 * clamp(u.glassOpacity, 0.0, 1.0)
                         * refractionProfile;
  let refractedP = p - normal * refractionAmount;
  var fcol = vec3<f32>(0.0);
  if (clearFa > 0.0) {
    if (s >= 9) {
      if (u.glassEnabled > 0.5) {
        // Three actual fluid evaluations produce optical dispersion. At the
        // outer boundary the reference lens pulls samples from deep inside the
        // orb; the channels converge continuously at the inner edge of the
        // refraction band.
        let channelSplit = 0.14 * clamp(u.gloss, 0.0, 2.0)
                           * clamp(u.glassOpacity, 0.0, 1.0)
                           * refractionProfile;
        let redSample = glsPresetFluid(refractedP - normal * channelSplit, s, t);
        let greenSample = glsPresetFluid(refractedP, s, t);
        let blueSample = glsPresetFluid(refractedP + normal * channelSplit, s, t);
        fcol = vec3<f32>(redSample.r, greenSample.g, blueSample.b);
      }
      else { fcol = glsPresetFluid(p, s, t); }
    }
    else { fcol = glsFluid(fu, md, t); }
  }

  // Voice-like presets become a true emissive layer when glass is disabled.
  // Their empty pixels no longer inherit the opaque circular canvas fill.
  let lum = dot(fcol, vec3<f32>(0.213, 0.715, 0.072));
  let clearSat = clamp(vec3<f32>(lum) + (fcol - vec3<f32>(lum)) * 1.22,
                       vec3<f32>(0.0), vec3<f32>(1.0));
  let particleGlassOverlay = s == 24;
  var col = select(
    glsOver(u.canvasColor.rgb, clearSat, 0.99 * clearFa),
    vec3<f32>(0.0),
    particleGlassOverlay,
  );
  if (emissionOnly) {
    let signal = max(clearSat.r, max(clearSat.g, clearSat.b));
    let emissionCoverage = smoothstep(0.025, 0.16, signal);
    col = clearSat * emissionCoverage;
  }
  if (u.glassEnabled > 0.5) {
    // Surface lighting stays on a thin arc. The broad visual change comes from
    // the refracted fluid above, not from a translucent white overlay.
    // Its weights still need enough contrast to keep the exposed colour and
    // highlight controls perceptible in the compact scene preview.
    let surfaceWidth = select(
      0.026 + 0.055 * clamp(u.shellEdgeAlpha, 0.0, 1.0),
      0.09 + 0.12 * clamp(u.shellEdgeAlpha, 0.0, 1.0),
      particleGlassOverlay,
    );
    let surfaceBand = (1.0 - smoothstep(0.0, surfaceWidth, edgeDepth)) * clearFa;
    let opticalRim = pow(surfaceBand, select(1.8, 1.3, particleGlassOverlay));
    let innerRimAlpha = select(
      opticalRim * u.glassOpacity * 0.45,
      opticalRim * u.glassOpacity * 0.14,
      particleGlassOverlay,
    );
    col = glsOver(col, u.shellInner.rgb, innerRimAlpha);

    let coolDirection = normalize(vec2<f32>(0.84, 0.54));
    let warmDirection = normalize(vec2<f32>(-0.62, -0.78));
    let coolSplit = glsHighlightLobe(normal, coolDirection, -0.32, 1.8);
    let warmSplit = glsHighlightLobe(normal, warmDirection, -0.28, 2.0);
    let dispersion = opticalRim * clamp(u.gloss, 0.0, 2.0)
                     * (0.8 + 0.8 * u.shellEdgeAlpha);
    col = glsOver(col, u.shellMid.rgb, dispersion * coolSplit);
    col = glsOver(col, u.shellEdge.rgb, dispersion * warmSplit);

    let edgeShadow = opticalRim * (0.015 + 0.15 * u.shellEdgeAlpha)
                     * (0.15 + 0.85 * max(dot(normal, vec2<f32>(0.45, -0.89)), 0.0));
    col = col * (1.0 - edgeShadow);

    let keyDirection = normalize(vec2<f32>(-0.68, 0.73));
    let fillDirection = normalize(vec2<f32>(0.74, -0.67));
    let key = opticalRim * glsHighlightLobe(normal, keyDirection, 0.2, 2.8)
              * clamp(u.sheen, 0.0, 2.0) * 1.4;
    let fill = opticalRim * glsHighlightLobe(normal, fillDirection, 0.4, 3.6)
               * clamp(u.sheen, 0.0, 2.0) * 1.0;
    col = glsOver(col, u.sheenColor.rgb, key);
    col = glsOver(col, u.specColor.rgb, fill);
  }

  // The ball's own edge, and nothing outside it — everything the effect does
  // not paint must be exactly 0 so the page shows through.
  let ballA = 1.0 - smoothstep(0.99 - mfEdgeD(u.edgeSoftness), 1.01 + mfEdgeD(u.edgeSoftness), pd);
  col = clamp(col * max(u.exposure, 0.0), vec3<f32>(0.0), vec3<f32>(1.0)) * ballA;
  // The Orbs edge bank — the Edge group's Glow. Adding zero is exactly
  // the render this file was diffed against, and zero is the default.
  let edged = mfEdgeGlow(col, uv, vec2<f32>(0.0), contourRad,
                         u.edgeSoftness, u.edgeGlow, u.glowColor.rgb);
  let finalColor = clamp(edged, vec3<f32>(0.0), vec3<f32>(1.0));
  let emissionAlpha = max(finalColor.r, max(finalColor.g, finalColor.b));
  let sphereAlpha = clamp(max(ballA, emissionAlpha), 0.0, 1.0);
  let finalAlpha = select(
    sphereAlpha,
    emissionAlpha,
    emissionOnly || particleGlassOverlay,
  );
  return vec4<f32>(finalColor, finalAlpha);
}


struct VOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) i: u32) -> VOut {
  var p = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>( 3.0, -1.0),
    vec2<f32>(-1.0,  3.0),
  );
  var out: VOut;
  out.pos = vec4<f32>(p[i], 0.0, 1.0);
  let uv01 = (p[i] + vec2<f32>(1.0)) * 0.5;
  out.uv = vec2<f32>(uv01.x, 1.0 - uv01.y);
  return out;
}

@fragment
fn fs_main(in: VOut) -> @location(0) vec4<f32> {
  let c = orbGlassLiquidAnim(in.uv);

  let fc = vec2<f32>(in.uv.x, 1.0 - in.uv.y) * u.size;
  let uv = (2.0 * fc - u.size) / max(min(u.size.x, u.size.y), 1.0);
  let rad = max(u.radius, 0.05);
  let t = u.time * u.speed;
  let contourRad = rad * glsContourScale(uv, t, u.contourDeform);
  let q = (2.0 * fc - u.size) / u.size;
  let fitEnd = 1.0;
  let fitFeather = 2.0 / max(min(u.size.x, u.size.y), 1.0);
  let fitStart = min(mix(contourRad, fitEnd, 0.5), fitEnd - fitFeather);
  let fit = 1.0 - smoothstep(fitStart, fitEnd, max(abs(q.x), abs(q.y)));
  return vec4<f32>(c.rgb * fit, c.a * fit);
}

const PR_U_SEGMENTS: u32 = 384u;
const PR_V_SEGMENTS: u32 = 96u;
const PR_PARTICLES_PER_LAYER: u32 = PR_U_SEGMENTS * PR_V_SEGMENTS;

struct RibbonOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) local: vec2<f32>,
  @location(1) color: vec3<f32>,
  @location(2) opacity: f32,
};

fn prHash(value: f32) -> f32 {
  return fract(sin(value * 12.9898 + 78.233) * 43758.5453);
}

fn prRotateX(p: vec3<f32>, angle: f32) -> vec3<f32> {
  let c = cos(angle);
  let s = sin(angle);
  return vec3<f32>(p.x, c * p.y - s * p.z, s * p.y + c * p.z);
}

fn prRotateY(p: vec3<f32>, angle: f32) -> vec3<f32> {
  let c = cos(angle);
  let s = sin(angle);
  return vec3<f32>(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}

fn prCurve(theta: f32, layer: f32, phase: f32) -> vec3<f32> {
  let local = theta + layer * 0.11;
  let foldPhase = 2.0 * local + phase * (0.72 + layer * 0.025);
  let fold = clamp(u.ribbonFold, 0.0, 1.2);
  let radial = 0.4 + (0.085 + fold * 0.04) * cos(foldPhase);
  let orbit = local + phase * 0.13
              + sin(local - phase * 0.22 + layer) * fold * 0.13;
  let vertical = (0.235 + fold * 0.085) * sin(foldPhase)
                 + 0.055 * sin(local * 3.0 - phase * 0.46 + layer * 0.7);
  return vec3<f32>(radial * cos(orbit), vertical, radial * sin(orbit));
}

fn prPalette(valueIn: f32) -> vec3<f32> {
  let value = fract(valueIn) * 4.0;
  if (value < 1.0) { return mix(u.colorA.rgb, u.colorB.rgb, value); }
  if (value < 2.0) { return mix(u.colorB.rgb, u.colorC.rgb, value - 1.0); }
  if (value < 3.0) { return mix(u.colorC.rgb, u.colorD.rgb, value - 2.0); }
  return mix(u.colorD.rgb, u.colorA.rgb, value - 3.0);
}

@vertex
fn ribbon_vs_main(
  @builtin(vertex_index) vertexIndex: u32,
  @builtin(instance_index) instanceIndex: u32,
) -> RibbonOut {
  var corners = array<vec2<f32>, 6>(
    vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0), vec2<f32>(-1.0, 1.0),
    vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, -1.0), vec2<f32>(1.0, 1.0),
  );
  let layerIndex = instanceIndex / PR_PARTICLES_PER_LAYER;
  let particleIndex = instanceIndex % PR_PARTICLES_PER_LAYER;
  let uIndex = particleIndex / PR_V_SEGMENTS;
  let vIndex = particleIndex % PR_V_SEGMENTS;
  let layer = f32(layerIndex);
  let random = prHash(f32(instanceIndex));
  let activeLayer = layer < floor(clamp(u.ribbonCount, 2.0, 6.0) + 0.5);

  let uCoord = (f32(uIndex) + prHash(f32(instanceIndex) + 11.0) * 0.56)
               / f32(PR_U_SEGMENTS);
  let vCoord = (f32(vIndex) + prHash(f32(instanceIndex) + 29.0) * 0.46)
               / f32(PR_V_SEGMENTS);
  let strip = vCoord * 2.0 - 1.0;
  let t = u.time * u.speed;
  let phase = t * 0.48;
  let arc = fract(uCoord + layer * 0.211 - phase * 0.019);
  let arcLength = 0.76 + 0.055 * sin(t * 0.23 + layer * 1.71);
  let arcPosition = arc / arcLength;
  let arcEnvelope = smoothstep(0.0, 0.075, arcPosition)
                    * (1.0 - smoothstep(0.88, 1.0, arcPosition));
  let particleVisible = activeLayer
                        && arc <= arcLength
                        && random <= clamp(u.particleDensity, 0.2, 1.0);
  let theta = uCoord * 6.28318530718;
  let center = prCurve(theta, layer, phase);
  let ahead = prCurve(theta + 0.006, layer, phase);
  let tangent = normalize(ahead - center);
  let radial = normalize(center + vec3<f32>(0.001, 0.013, 0.007));
  let side = normalize(cross(tangent, radial));
  let surfaceNormal = normalize(cross(side, tangent));
  let twist = theta * (0.72 + u.ribbonTwist * 0.58)
              + phase * 0.74 + layer * 1.17;
  let ribbonDirection = normalize(side * cos(twist) + surfaceNormal * sin(twist));
  let widthEnvelope = (0.72 + 0.28 * pow(sin(theta * 1.5 + phase + layer), 2.0))
                      * mix(0.42, 1.0, sqrt(max(arcEnvelope, 0.0)));
  var position = center + ribbonDirection * strip * u.ribbonWidth * 0.5 * widthEnvelope;

  let pulse = sin(t * 0.73 + layer * 1.71)
              + 0.44 * sin(t * 1.17 + layer * 0.83 + 1.2);
  position *= 1.0 + u.ribbonBreath * pulse * 0.16;
  let layerCenter = layer
                    - (floor(clamp(u.ribbonCount, 2.0, 6.0) + 0.5) - 1.0) * 0.5;
  position = prRotateY(
    position,
    layerCenter * 0.24 + sin(t * 0.19 + layer * 1.3) * 0.055,
  );
  position = prRotateX(
    position,
    layerCenter * 0.14 + cos(t * 0.17 + layer * 0.9) * 0.04,
  );
  position = prRotateY(position, t * 0.105 + sin(t * 0.21) * 0.11);
  position = prRotateX(position, -0.2 + sin(t * 0.16 + layer * 0.1) * 0.16);

  let minSize = max(min(u.size.x, u.size.y), 1.0);
  let depthScale = 0.88 + position.z * 0.16;
  let orbPosition = position.xy * u.radius * 1.45 * depthScale;
  let clip = vec2<f32>(
    orbPosition.x * minSize / max(u.size.x, 1.0),
    orbPosition.y * minSize / max(u.size.y, 1.0),
  );
  let canvasParticleScale = clamp(minSize / 640.0, 0.22, 1.0);
  let pointPixels = max(0.6, u.particleSize)
                    * (1.5 + u.particleBloom * 2.5)
                    * (0.92 + position.z * 0.18)
                    * canvasParticleScale;
  let corner = corners[vertexIndex];
  let pointOffset = corner * pointPixels * 2.0 / max(u.size, vec2<f32>(1.0));

  let colorPhase = uCoord * 0.32 + layer * 0.19 + phase * 0.025
                   + position.z * 0.08;
  let stripEdge = smoothstep(0.58, 1.0, abs(strip));
  let front = clamp(0.78 + position.z * 0.54, 0.5, 1.24);
  let baseOpacity = mix(0.025, 0.009, clamp(u.shade / 1.5, 0.0, 1.0));
  var out: RibbonOut;
  out.pos = select(
    vec4<f32>(2.0, 2.0, 1.0, 1.0),
    vec4<f32>(clip + pointOffset, clamp(0.5 - position.z * 0.12, 0.05, 0.95), 1.0),
    particleVisible,
  );
  out.local = corner;
  out.color = pow(
    mix(prPalette(colorPhase), u.highlightColor.rgb, stripEdge * 0.56),
    vec3<f32>(0.72),
  ) * front;
  out.opacity = select(
    0.0,
    baseOpacity
      * (0.72 + stripEdge * 1.28)
      * arcEnvelope
      * pow(canvasParticleScale, 1.35),
    particleVisible,
  );
  return out;
}

@fragment
fn ribbon_fs_main(in: RibbonOut) -> @location(0) vec4<f32> {
  let distanceSquared = dot(in.local, in.local);
  if (distanceSquared > 1.0) { discard; }
  let core = exp(-distanceSquared * 4.8);
  let halo = exp(-distanceSquared * 1.35);
  let bloom = clamp(u.particleBloom, 0.0, 2.0);
  let intensity = in.opacity * (core * 1.9 + halo * bloom * 0.72)
                  * max(u.exposure, 0.0);
  let glowMix = clamp((halo - core * 0.45) * (0.18 + u.edgeGlow * 0.5), 0.0, 0.7);
  let color = mix(in.color, u.glowColor.rgb, glowMix);
  let alpha = clamp(intensity, 0.0, 1.0);
  return vec4<f32>(color * alpha, alpha);
}

@group(0) @binding(1) var ribbonTexture: texture_2d<f32>;
@group(0) @binding(2) var ribbonSampler: sampler;

fn prTextureUvFromOrb(p: vec2<f32>, contourRad: f32) -> vec2<f32> {
  let minSize = max(min(u.size.x, u.size.y), 1.0);
  let fc = (p * contourRad * minSize + u.size) * 0.5;
  return clamp(
    vec2<f32>(fc.x / max(u.size.x, 1.0), 1.0 - fc.y / max(u.size.y, 1.0)),
    vec2<f32>(0.0),
    vec2<f32>(1.0),
  );
}

fn prSampleRibbon(p: vec2<f32>, contourRad: f32) -> vec4<f32> {
  return textureSampleLevel(
    ribbonTexture,
    ribbonSampler,
    prTextureUvFromOrb(p, contourRad),
    0.0,
  );
}

@fragment
fn ribbon_composite_fs_main(in: VOut) -> @location(0) vec4<f32> {
  let direct = textureSampleLevel(ribbonTexture, ribbonSampler, in.uv, 0.0);
  if (u.glassEnabled <= 0.5) { return direct; }

  let fc = vec2<f32>(in.uv.x, 1.0 - in.uv.y) * u.size;
  let minSize = max(min(u.size.x, u.size.y), 1.0);
  let uv = (2.0 * fc - u.size) / minSize;
  let rad = max(u.radius, 0.05);
  let t = u.time * u.speed;
  let contourRad = rad * glsContourScale(uv, t, u.contourDeform);
  let shell = orbGlassLiquidAnim(in.uv);
  if (length(uv) > contourRad * (1.01 + mfEdgeD(u.edgeSoftness))) {
    return shell;
  }

  let p = uv / contourRad;
  let pd = length(p);
  let clearFa = 1.0 - smoothstep(GL_CLEAR_EA, GL_CLEAR_EB, pd);
  let normal = glsContourNormal(uv, rad, t, u.contourDeform);
  let edgeDepth = max(1.0 - pd, 0.0);
  let refractionWidth = 0.015 + 0.95 * clamp(u.shellMidAlpha, 0.0, 1.0);
  let refractionT = edgeDepth / max(refractionWidth, 0.001);
  let refractionProfile = pow(glsRefractionProfile(refractionT), 0.68);
  let refractionAmount = 1.6 * clamp(u.glassOpacity, 0.0, 1.0)
                         * refractionProfile;
  let refractedP = p - normal * refractionAmount;
  let channelSplit = 0.14 * clamp(u.gloss, 0.0, 2.0)
                     * clamp(u.glassOpacity, 0.0, 1.0)
                     * refractionProfile;
  let redSample = prSampleRibbon(refractedP - normal * channelSplit, contourRad);
  let greenSample = prSampleRibbon(refractedP, contourRad);
  let blueSample = prSampleRibbon(refractedP + normal * channelSplit, contourRad);
  let refractedAlpha = max(redSample.a, max(greenSample.a, blueSample.a)) * clearFa;
  let refracted = vec4<f32>(
    vec3<f32>(redSample.r, greenSample.g, blueSample.b) * clearFa,
    refractedAlpha,
  );
  return vec4<f32>(
    shell.rgb + refracted.rgb * (1.0 - shell.a),
    shell.a + refracted.a * (1.0 - shell.a),
  );
}
`;function ze(e){let t=[];for(let n=0;n<e.length;n+=8)t.push(`    ${e.slice(n,n+8).join(`, `)},`);return t.join(`
`)}function Be(e){return{idle:fe(Oe(e,`idle`)),thinking:fe(Oe(e,`thinking`))}}function Ve(e,t){let n=Be(e),r=JSON.stringify(Re);return`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="data:," />
  <title>Liquid Orb</title>
  <style>
    html, body, canvas { width: 100%; height: 100%; margin: 0; }
    body { overflow: hidden; background: ${e.shared.canvasColor}; }
    canvas { display: block; }
    #status { position: fixed; inset: 0; display: grid; place-items: center; color: white; font: 14px system-ui; }
  </style>
</head>
<body>
  <canvas id="orb" aria-label="Animated liquid glass orb"></canvas>
  <div id="status" hidden></div>
  <script type="module">
    const shaderSource = ${r};
    const stateSeeds = ${JSON.stringify(n)};
    const ribbonStyleIndex = ${S.particleRibbon};
    const ribbonInstanceCount = ${pe};
    const activationDurationMs = ${e.activationDuration*1e3};
    const settleDurationMs = ${e.transitionDuration*1e3};
    const canvas = document.querySelector("#orb");
    const status = document.querySelector("#status");
    let animationFrame = 0;
    let device = null;
    let ribbonTarget = null;
    let stopped = false;
    let state = ${JSON.stringify(t)};
    let transitionTargetState = state;
    let fromUniforms = new Float32Array(stateSeeds[state]);
    let targetUniforms = new Float32Array(stateSeeds[state]);
    const displayedUniforms = new Float32Array(stateSeeds[state]);
    let transitionStartedAt = 0;
    let activeTransitionDuration = 0;
    let lastFrameAt = null;
    let motionPhase = 0;

    function srgbToLinear(value) {
      return value <= 0.04045
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4;
    }

    function linearToSrgb(value) {
      return value <= 0.0031308
        ? value * 12.92
        : 1.055 * value ** (1 / 2.4) - 0.055;
    }

    function mixSrgb(from, to, progress) {
      return linearToSrgb(
        srgbToLinear(from) + (srgbToLinear(to) - srgbToLinear(from)) * progress,
      );
    }

    function transitionProgress(now) {
      if (activeTransitionDuration === 0) return 1;
      const raw = Math.min(1, Math.max(0, (now - transitionStartedAt) / activeTransitionDuration));
      return transitionTargetState === "thinking"
        ? 1 - (1 - raw) ** 3
        : raw * raw * (3 - 2 * raw);
    }

    function sampleTransition(now) {
      const progress = transitionProgress(now);
      for (let index = 3; index < displayedUniforms.length; index += 1) {
        const colorComponent = index >= 40
          && (index - 40) % 4 < 3;
        displayedUniforms[index] = colorComponent
          ? mixSrgb(fromUniforms[index], targetUniforms[index], progress)
          : fromUniforms[index] + (targetUniforms[index] - fromUniforms[index]) * progress;
      }
      return displayedUniforms;
    }

    function setState(nextState) {
      if (!Object.prototype.hasOwnProperty.call(stateSeeds, nextState)) {
        throw new TypeError(\`Unknown liquid orb state: \${nextState}\`);
      }
      if (nextState === state) return;

      const now = performance.now();
      sampleTransition(now);
      fromUniforms = new Float32Array(displayedUniforms);
      targetUniforms = new Float32Array(stateSeeds[nextState]);
      transitionTargetState = nextState;
      transitionStartedAt = now;
      activeTransitionDuration = nextState === "thinking"
        ? activationDurationMs
        : settleDurationMs;
      state = nextState;
    }

    Object.defineProperty(window, "liquidOrb", {
      value: Object.freeze({
        getState: () => state,
        setState,
      }),
    });

    function stopWithError(error) {
      if (stopped) return;
      stopped = true;
      cancelAnimationFrame(animationFrame);
      ribbonTarget?.destroy();
      device?.destroy();
      status.hidden = false;
      status.textContent = error instanceof Error ? error.message : String(error);
      console.error(error);
    }

    async function start() {
      if (!navigator.gpu) throw new Error("WebGPU is not supported in this environment.");
      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
      device = await adapter.requestDevice();
      const context = canvas.getContext("webgpu");
      if (!context) throw new Error("Unable to create a WebGPU canvas context.");

      const format = navigator.gpu.getPreferredCanvasFormat();
      context.configure({ device, format, alphaMode: "premultiplied" });
      const shader = device.createShaderModule({ code: shaderSource });
      const compilation = await shader.getCompilationInfo();
      const errors = compilation.messages.filter((message) => message.type === "error");
      if (errors.length) {
        throw new Error(errors.map((message) => \`\${message.lineNum}:\${message.linePos} \${message.message}\`).join("\\n"));
      }

      const pipeline = device.createRenderPipeline({
        layout: "auto",
        vertex: { module: shader, entryPoint: "vs_main" },
        fragment: {
          module: shader,
          entryPoint: "fs_main",
          targets: [{
            format,
            blend: {
              color: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add",
              },
              alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add",
              },
            },
          }],
        },
        primitive: { topology: "triangle-list" },
      });
      const ribbonPipeline = device.createRenderPipeline({
        layout: "auto",
        vertex: { module: shader, entryPoint: "ribbon_vs_main" },
        fragment: {
          module: shader,
          entryPoint: "ribbon_fs_main",
          targets: [{
            format,
            blend: {
              color: { srcFactor: "one", dstFactor: "one", operation: "add" },
              alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add",
              },
            },
          }],
        },
        primitive: { topology: "triangle-list" },
      });
      const ribbonCompositePipeline = device.createRenderPipeline({
        layout: "auto",
        vertex: { module: shader, entryPoint: "vs_main" },
        fragment: {
          module: shader,
          entryPoint: "ribbon_composite_fs_main",
          targets: [{
            format,
            blend: {
              color: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add",
              },
              alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add",
              },
            },
          }],
        },
        primitive: { topology: "triangle-list" },
      });
      const values = new Float32Array(displayedUniforms);
      const uniformBuffer = device.createBuffer({
        size: values.byteLength,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });
      const bindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
      });
      const ribbonBindGroup = device.createBindGroup({
        layout: ribbonPipeline.getBindGroupLayout(0),
        entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
      });
      const ribbonSampler = device.createSampler({
        addressModeU: "clamp-to-edge",
        addressModeV: "clamp-to-edge",
        magFilter: "linear",
        minFilter: "linear",
      });
      let ribbonCompositeBindGroup = null;
      device.lost.then((info) => {
        stopWithError(new Error(\`WebGPU device lost: \${info.message || info.reason}\`));
      });
      device.addEventListener("uncapturederror", (event) => {
        event.preventDefault();
        stopWithError(new Error(\`WebGPU rendering error: \${event.error.message}\`));
      });

      function frame(now) {
        if (stopped) return;
        try {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
          const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
          if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            ribbonTarget?.destroy();
            ribbonTarget = null;
            ribbonCompositeBindGroup = null;
          }
          values.set(sampleTransition(now));
          const frameDelta = lastFrameAt === null
            ? 0
            : Math.min(0.1, Math.max(0, (now - lastFrameAt) / 1000));
          lastFrameAt = now;
          motionPhase += frameDelta * Math.max(values[3], 0);
          values[0] = width;
          values[1] = height;
          values[2] = motionPhase / Math.max(values[3], 0.001);
          device.queue.writeBuffer(uniformBuffer, 0, values);

          const isParticleRibbon = Math.round(values[15]) === ribbonStyleIndex;
          const encoder = device.createCommandEncoder();
          if (isParticleRibbon) {
            if (!ribbonTarget || !ribbonCompositeBindGroup) {
              ribbonTarget = device.createTexture({
                size: { width, height },
                format,
                usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
              });
              ribbonCompositeBindGroup = device.createBindGroup({
                layout: ribbonCompositePipeline.getBindGroupLayout(0),
                entries: [
                  { binding: 0, resource: { buffer: uniformBuffer } },
                  { binding: 1, resource: ribbonTarget.createView() },
                  { binding: 2, resource: ribbonSampler },
                ],
              });
            }
            const particlePass = encoder.beginRenderPass({
              colorAttachments: [{
                view: ribbonTarget.createView(),
                clearValue: { r: 0, g: 0, b: 0, a: 0 },
                loadOp: "clear",
                storeOp: "store",
              }],
            });
            particlePass.setPipeline(ribbonPipeline);
            particlePass.setBindGroup(0, ribbonBindGroup);
            particlePass.draw(6, ribbonInstanceCount);
            particlePass.end();
          }
          const pass = encoder.beginRenderPass({
            colorAttachments: [{
              view: context.getCurrentTexture().createView(),
              clearValue: { r: 0, g: 0, b: 0, a: 0 },
              loadOp: "clear",
              storeOp: "store",
            }],
          });
          if (isParticleRibbon) {
            pass.setPipeline(ribbonCompositePipeline);
            pass.setBindGroup(0, ribbonCompositeBindGroup);
          } else {
            pass.setPipeline(pipeline);
            pass.setBindGroup(0, bindGroup);
          }
          pass.draw(3);
          pass.end();
          device.queue.submit([encoder.finish()]);
          animationFrame = requestAnimationFrame(frame);
        } catch (error) {
          stopWithError(error);
        }
      }

      animationFrame = requestAnimationFrame(frame);
    }

    window.addEventListener("pagehide", () => {
      stopped = true;
      cancelAnimationFrame(animationFrame);
      ribbonTarget?.destroy();
      device?.destroy();
    }, { once: true });
    start().catch((error) => {
      stopWithError(error);
    });
  <\/script>
</body>
</html>`}function He(e,t){let n=Be(e);return`import Foundation
import MetalKit
import QuartzCore
import SwiftUI

private let orbMetalSource = #"""
${M}
"""#

private let orbIdleUniformSeed: [Float] = [
${ze(n.idle)}
]

private let orbThinkingUniformSeed: [Float] = [
${ze(n.thinking)}
]

private let orbActivationDuration: CFTimeInterval = ${e.activationDuration}
private let orbSettleDuration: CFTimeInterval = ${e.transitionDuration}
private let orbRibbonStyleIndex: Float = ${S.particleRibbon}
private let orbRibbonInstanceCount = ${pe}

public enum LiquidOrbState: Sendable {
    case idle
    case thinking
}

private func orbUniformSeed(for state: LiquidOrbState) -> [Float] {
    switch state {
    case .idle: orbIdleUniformSeed
    case .thinking: orbThinkingUniformSeed
    }
}

private func orbSrgbToLinear(_ value: Float) -> Float {
    value <= 0.04045
        ? value / 12.92
        : Float(pow(Double((value + 0.055) / 1.055), 2.4))
}

private func orbLinearToSrgb(_ value: Float) -> Float {
    value <= 0.0031308
        ? value * 12.92
        : 1.055 * Float(pow(Double(value), 1.0 / 2.4)) - 0.055
}

private func orbMixSrgb(_ from: Float, _ to: Float, _ progress: Float) -> Float {
    orbLinearToSrgb(
        orbSrgbToLinear(from) + (orbSrgbToLinear(to) - orbSrgbToLinear(from)) * progress
    )
}

private enum LiquidOrbError: Error {
    case metalUnavailable
    case shaderFunctionMissing(String)
    case commandQueueUnavailable
}

private final class LiquidOrbRenderer: NSObject, MTKViewDelegate {
    private let commandQueue: MTLCommandQueue
    private let pipeline: MTLRenderPipelineState
    private let ribbonPipeline: MTLRenderPipelineState
    private let ribbonCompositePipeline: MTLRenderPipelineState
    private var ribbonTexture: MTLTexture?
    private var lastFrameAt = CACurrentMediaTime()
    private var motionPhase: CFTimeInterval = 0
    private let stateLock = NSLock()
    private var currentState: LiquidOrbState
    private var transitionTargetState: LiquidOrbState
    private var fromUniforms: [Float]
    private var targetUniforms: [Float]
    private var displayedUniforms: [Float]
    private var transitionStartedAt = CACurrentMediaTime()
    private var activeTransitionDuration: CFTimeInterval = 0

    init(view: MTKView, state: LiquidOrbState) throws {
        let initialUniforms = orbUniformSeed(for: state)
        currentState = state
        transitionTargetState = state
        fromUniforms = initialUniforms
        targetUniforms = initialUniforms
        displayedUniforms = initialUniforms

        guard let device = MTLCreateSystemDefaultDevice() else {
            throw LiquidOrbError.metalUnavailable
        }
        view.device = device
        view.colorPixelFormat = .bgra8Unorm
        view.framebufferOnly = true
        view.preferredFramesPerSecond = 60
        view.enableSetNeedsDisplay = false
        view.isPaused = false
        #if os(iOS)
        view.isOpaque = false
        #elseif os(macOS)
        view.layer?.isOpaque = false
        #endif
        view.clearColor = MTLClearColor(
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0
        )

        let library = try device.makeLibrary(source: orbMetalSource, options: nil)
        guard let vertex = library.makeFunction(name: "vs_main") else {
            throw LiquidOrbError.shaderFunctionMissing("vs_main")
        }
        guard let fragment = library.makeFunction(name: "fs_main") else {
            throw LiquidOrbError.shaderFunctionMissing("fs_main")
        }
        let descriptor = MTLRenderPipelineDescriptor()
        descriptor.vertexFunction = vertex
        descriptor.fragmentFunction = fragment
        descriptor.colorAttachments[0].pixelFormat = view.colorPixelFormat
        descriptor.colorAttachments[0].isBlendingEnabled = true
        descriptor.colorAttachments[0].sourceRGBBlendFactor = .one
        descriptor.colorAttachments[0].destinationRGBBlendFactor = .oneMinusSourceAlpha
        descriptor.colorAttachments[0].sourceAlphaBlendFactor = .one
        descriptor.colorAttachments[0].destinationAlphaBlendFactor = .oneMinusSourceAlpha
        pipeline = try device.makeRenderPipelineState(descriptor: descriptor)
        guard let ribbonVertex = library.makeFunction(name: "ribbon_vs_main") else {
            throw LiquidOrbError.shaderFunctionMissing("ribbon_vs_main")
        }
        guard let ribbonFragment = library.makeFunction(name: "ribbon_fs_main") else {
            throw LiquidOrbError.shaderFunctionMissing("ribbon_fs_main")
        }
        let ribbonDescriptor = MTLRenderPipelineDescriptor()
        ribbonDescriptor.vertexFunction = ribbonVertex
        ribbonDescriptor.fragmentFunction = ribbonFragment
        ribbonDescriptor.colorAttachments[0].pixelFormat = view.colorPixelFormat
        ribbonDescriptor.colorAttachments[0].isBlendingEnabled = true
        ribbonDescriptor.colorAttachments[0].sourceRGBBlendFactor = .one
        ribbonDescriptor.colorAttachments[0].destinationRGBBlendFactor = .one
        ribbonDescriptor.colorAttachments[0].sourceAlphaBlendFactor = .one
        ribbonDescriptor.colorAttachments[0].destinationAlphaBlendFactor = .oneMinusSourceAlpha
        ribbonPipeline = try device.makeRenderPipelineState(descriptor: ribbonDescriptor)
        guard let ribbonCompositeFragment = library.makeFunction(
            name: "ribbon_composite_fs_main"
        ) else {
            throw LiquidOrbError.shaderFunctionMissing("ribbon_composite_fs_main")
        }
        let ribbonCompositeDescriptor = MTLRenderPipelineDescriptor()
        ribbonCompositeDescriptor.vertexFunction = vertex
        ribbonCompositeDescriptor.fragmentFunction = ribbonCompositeFragment
        ribbonCompositeDescriptor.colorAttachments[0].pixelFormat = view.colorPixelFormat
        ribbonCompositeDescriptor.colorAttachments[0].isBlendingEnabled = true
        ribbonCompositeDescriptor.colorAttachments[0].sourceRGBBlendFactor = .one
        ribbonCompositeDescriptor.colorAttachments[0].destinationRGBBlendFactor = .oneMinusSourceAlpha
        ribbonCompositeDescriptor.colorAttachments[0].sourceAlphaBlendFactor = .one
        ribbonCompositeDescriptor.colorAttachments[0].destinationAlphaBlendFactor = .oneMinusSourceAlpha
        ribbonCompositePipeline = try device.makeRenderPipelineState(
            descriptor: ribbonCompositeDescriptor
        )
        guard let queue = device.makeCommandQueue() else {
            throw LiquidOrbError.commandQueueUnavailable
        }
        commandQueue = queue
        super.init()
    }

    func setState(_ state: LiquidOrbState) {
        let now = CACurrentMediaTime()
        stateLock.lock()
        defer { stateLock.unlock() }
        guard state != currentState else { return }

        let nextUniforms = orbUniformSeed(for: state)
        fromUniforms = sampleTransition(at: now)
        targetUniforms = nextUniforms
        transitionTargetState = state
        transitionStartedAt = now
        activeTransitionDuration = state == .thinking
            ? orbActivationDuration
            : orbSettleDuration
        currentState = state
    }

    private func sampleTransition(at now: CFTimeInterval) -> [Float] {
        let rawProgress = activeTransitionDuration == 0
            ? 1
            : min(1, max(0, (now - transitionStartedAt) / activeTransitionDuration))
        let easedProgress = transitionTargetState == .thinking
            ? 1 - pow(1 - rawProgress, 3)
            : rawProgress * rawProgress * (3 - 2 * rawProgress)
        let progress = Float(easedProgress)

        for index in 3..<displayedUniforms.count {
            let isColorComponent = index >= 40
                && (index - 40) % 4 < 3
            displayedUniforms[index] = isColorComponent
                ? orbMixSrgb(fromUniforms[index], targetUniforms[index], progress)
                : fromUniforms[index] + (targetUniforms[index] - fromUniforms[index]) * progress
        }
        return displayedUniforms
    }

    func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {
        ribbonTexture = nil
    }

    private func ensureRibbonTexture(for view: MTKView) -> MTLTexture? {
        let width = max(1, Int(view.drawableSize.width))
        let height = max(1, Int(view.drawableSize.height))
        if let ribbonTexture,
           ribbonTexture.width == width,
           ribbonTexture.height == height {
            return ribbonTexture
        }
        guard let device = view.device else { return nil }
        let descriptor = MTLTextureDescriptor.texture2DDescriptor(
            pixelFormat: view.colorPixelFormat,
            width: width,
            height: height,
            mipmapped: false
        )
        descriptor.usage = [.renderTarget, .shaderRead]
        descriptor.storageMode = .private
        ribbonTexture = device.makeTexture(descriptor: descriptor)
        return ribbonTexture
    }

    func draw(in view: MTKView) {
        guard
            view.drawableSize.width > 0,
            view.drawableSize.height > 0,
            let descriptor = view.currentRenderPassDescriptor,
            let drawable = view.currentDrawable,
            let commandBuffer = commandQueue.makeCommandBuffer()
        else { return }

        let now = CACurrentMediaTime()
        stateLock.lock()
        var uniforms = sampleTransition(at: now)
        stateLock.unlock()
        let frameDelta = min(0.1, max(0, now - lastFrameAt))
        lastFrameAt = now
        motionPhase += frameDelta * CFTimeInterval(max(uniforms[3], 0))
        uniforms[0] = Float(view.drawableSize.width)
        uniforms[1] = Float(view.drawableSize.height)
        uniforms[2] = Float(motionPhase / CFTimeInterval(max(uniforms[3], 0.001)))
        let isParticleRibbon = round(uniforms[15]) == orbRibbonStyleIndex
        if isParticleRibbon {
            guard let ribbonTexture = ensureRibbonTexture(for: view) else { return }
            let ribbonPass = MTLRenderPassDescriptor()
            ribbonPass.colorAttachments[0].texture = ribbonTexture
            ribbonPass.colorAttachments[0].loadAction = .clear
            ribbonPass.colorAttachments[0].storeAction = .store
            ribbonPass.colorAttachments[0].clearColor = MTLClearColor(
                red: 0, green: 0, blue: 0, alpha: 0
            )
            guard let ribbonEncoder = commandBuffer.makeRenderCommandEncoder(
                descriptor: ribbonPass
            ) else { return }
            ribbonEncoder.setRenderPipelineState(ribbonPipeline)
            uniforms.withUnsafeBytes { bytes in
                ribbonEncoder.setVertexBytes(bytes.baseAddress!, length: bytes.count, index: 0)
                ribbonEncoder.setFragmentBytes(bytes.baseAddress!, length: bytes.count, index: 0)
            }
            ribbonEncoder.drawPrimitives(
                type: .triangle,
                vertexStart: 0,
                vertexCount: 6,
                instanceCount: orbRibbonInstanceCount
            )
            ribbonEncoder.endEncoding()
        }
        guard let encoder = commandBuffer.makeRenderCommandEncoder(descriptor: descriptor) else {
            return
        }
        encoder.setRenderPipelineState(isParticleRibbon ? ribbonCompositePipeline : pipeline)
        uniforms.withUnsafeBytes { bytes in
            encoder.setFragmentBytes(bytes.baseAddress!, length: bytes.count, index: 0)
        }
        if isParticleRibbon {
            encoder.setFragmentTexture(ribbonTexture, index: 0)
        }
        encoder.drawPrimitives(type: .triangle, vertexStart: 0, vertexCount: 3)
        encoder.endEncoding()
        commandBuffer.present(drawable)
        commandBuffer.commit()
    }
}

private final class LiquidOrbCoordinator {
    private var renderer: LiquidOrbRenderer?

    func makeView(state: LiquidOrbState) -> MTKView {
        let view = MTKView(frame: .zero, device: nil)
        do {
            let renderer = try LiquidOrbRenderer(view: view, state: state)
            self.renderer = renderer
            view.delegate = renderer
            return view
        } catch {
            preconditionFailure("Liquid Orb Metal initialization failed: \\(error)")
        }
    }

    func setState(_ state: LiquidOrbState) {
        renderer?.setState(state)
    }
}

#if os(iOS)
private struct LiquidOrbSurface: UIViewRepresentable {
    let state: LiquidOrbState

    func makeCoordinator() -> LiquidOrbCoordinator { LiquidOrbCoordinator() }
    func makeUIView(context: Context) -> MTKView { context.coordinator.makeView(state: state) }
    func updateUIView(_ view: MTKView, context: Context) { context.coordinator.setState(state) }
}
#elseif os(macOS)
private struct LiquidOrbSurface: NSViewRepresentable {
    let state: LiquidOrbState

    func makeCoordinator() -> LiquidOrbCoordinator { LiquidOrbCoordinator() }
    func makeNSView(context: Context) -> MTKView { context.coordinator.makeView(state: state) }
    func updateNSView(_ view: MTKView, context: Context) { context.coordinator.setState(state) }
}
#endif

public struct LiquidOrbView: View {
    private let state: LiquidOrbState

    public init(state: LiquidOrbState = .${t}) {
        self.state = state
    }

    public var body: some View {
        LiquidOrbSurface(state: state)
    }
}`}var Ue=`apple-orc`;function We(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.source===`apple-orc`&&typeof t.type==`string`}function Ge(e,t=`/`){return`${e.replace(/\/$/,``)}${t===`/`?``:t.replace(/\/$/,``)}`}function Ke(e,t,n=120){return`<iframe
  title="Apple Orc"
  src="${`${Ge(e)}/embed#${t}`}"
  style="border:0;width:100%;max-width:420px;height:${n}px;background:transparent"
  allow="autoplay"
></iframe>`}function qe(e,t){let n=`${Ge(e)}/embed#${t}`;return`export function AppleOrcEmbed() {
  return (
    <iframe
      title="Apple Orc"
      src=${JSON.stringify(n)}
      style={{
        border: 0,
        width: "100%",
        maxWidth: 420,
        height: 120,
        background: "transparent",
      }}
      allow="autoplay"
    />
  );
}

// Drive the orb from the host page:
// iframe.contentWindow.postMessage(
//   { source: "apple-orc", type: "setState", state: "thinking" },
//   "*",
// );`}function Je(){return`import { AppleOrc } from "@/lib/orb";

export function StatusOrb() {
  return (
    <AppleOrc
      preset="siri"
      state="thinking"
      size={72}
      label="Thinking..."
    />
  );
}`}function Ye(e,t,n){let r=Oe(e.configuration,`thinking`),i=Oe(e.configuration,`idle`);return JSON.stringify({preset:r.style,state:e.activeState,preview:t,text:n,activationDuration:e.configuration.activationDuration,transitionDuration:e.configuration.transitionDuration,thinking:r,idle:i},null,2)}function Xe(e,t,n,r,i){return{web:Ve(e.configuration,e.activeState),swift:He(e.configuration,e.activeState),iframe:Ke(t,n,r===`scene`?120:360),react:qe(t,n),dropin:Je(),json:Ye(e,r,i)}}function Ze(){return typeof window<`u`}function Qe(){if(!Ze())return`en`;try{let e=window.localStorage.getItem(te);if(e===`zh`||e===`en`)return e}catch{}return navigator.language.toLowerCase().startsWith(`zh`)?`zh`:`en`}function $e(e){if(Ze())try{window.localStorage.setItem(te,e)}catch{}}function et(){return new URLSearchParams(window.location.hash.replace(/^#/,``))}function tt(){return Ze()&&et().get(`preview`)===`scene`?`scene`:`orb`}function nt(){if(!Ze())return w;let e=et().get(`text`);return e===null?w:A(e)}function rt(e,t){return e===`thinking`?t:`idle${t.charAt(0).toUpperCase()}${t.slice(1)}`}function it(){return{configuration:De(C.style),activeState:ve}}function at(){if(!Ze())return it();let e=et(),t=e.get(`style`),n=t&&ee.includes(t)?t:C.style,r={style:n,...x[n]},i=e.get(`glass`);i===`1`&&(r.glassEnabled=!0),i===`0`&&(r.glassEnabled=!1);for(let t of oe){let n=e.get(t.key);if(n===null)continue;let i=Number(n);Number.isFinite(i)&&(r[t.key]=le(i,t.min,t.max))}for(let t of O){let n=e.get(t);if(n===null)continue;let i=ue(n);i&&(r[t]=i)}let a=e.get(`transition`),o=a===null?null:Number(a),s=o!==null&&Number.isFinite(o)?le(o,T.min,T.max):be,c=e.get(`activation`),l=c===null?null:Number(c),u=Ee(r,s,l!==null&&Number.isFinite(l)?le(l,ne.min,ne.max):ye);for(let t of _e){let n=e.get(rt(`idle`,t));if(n!==null){if(typeof u.profiles.idle[t]==`number`){let e=se.get(t),r=Number(n);e&&Number.isFinite(r)&&(u=ke(u,`idle`,t,le(r,e.min,e.max)))}else{let e=ue(n);e&&(u=ke(u,`idle`,t,e))}}}let d=e.get(`state`),f=d&&me.includes(d)?d:ve;return{configuration:u,activeState:f}}function ot(e,t,n){let{configuration:r,activeState:i}=e,a=Oe(r,`thinking`),o=new URLSearchParams;o.set(`effect`,`orb-glass-liquid`),o.set(`style`,a.style),o.set(`glass`,a.glassEnabled?`1`:`0`),o.set(`state`,i),o.set(`activation`,String(r.activationDuration)),o.set(`transition`,String(r.transitionDuration)),o.set(`preview`,t),o.set(`text`,n);for(let e of oe)o.set(e.key,String(a[e.key])),Ce(e.key)&&o.set(rt(`idle`,e.key),String(r.profiles.idle[e.key]));for(let e of O)o.set(e,a[e]),Ce(e)&&o.set(rt(`idle`,e),r.profiles.idle[e]);return o.toString()}function st(e,t,n){Ze()&&window.history.replaceState(null,``,`#${ot(e,t,n)}`)}function ct(e){return[Number.parseInt(e.slice(1,3),16),Number.parseInt(e.slice(3,5),16),Number.parseInt(e.slice(5,7),16)]}function F(e,t){let[n,r,i]=ct(e);return`rgba(${n}, ${r}, ${i}, ${t})`}function lt(e,t,n){let r=ct(e),i=ct(t),a=Math.min(1,Math.max(0,n));return`#${[Math.round(r[0]+(i[0]-r[0])*a),Math.round(r[1]+(i[1]-r[1])*a),Math.round(r[2]+(i[2]-r[2])*a)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function ut(e,t){let n=(t%1+1)%1;return n<.25?lt(e.colorA,e.colorB,n/.25):n<.5?lt(e.colorB,e.colorC,(n-.25)/.25):n<.75?lt(e.colorC,e.colorD,(n-.5)/.25):lt(e.colorD,e.colorA,(n-.75)/.25)}function dt(e,t,n,r,i,a){let o=r*(.1+a.warp*.018)*(.45+a.ridgeAmt),s=r*(.16+a.zoom*.22),c=n+Math.sin(i*1.15)*r*.1;e.save(),e.translate(t,c),e.rotate(Math.sin(i*.27)*.12*(.4+a.contourDeform)),e.filter=`blur(${Math.max(1.2,r*.055)}px)`;let l=e.createLinearGradient(-r,0,r,0);l.addColorStop(0,F(a.colorD,0)),l.addColorStop(.18,F(a.colorD,.85)),l.addColorStop(.38,a.colorC),l.addColorStop(.52,a.colorB),l.addColorStop(.7,a.colorA),l.addColorStop(.88,F(a.colorD,.7)),l.addColorStop(1,F(a.colorD,0)),e.beginPath(),e.moveTo(-r,0);for(let t=0;t<=48;t+=1){let n=-r+2*r*t/48,s=n/r,c=Math.sin(s*(2.2+a.zoom*4)+i*2.1)*o+Math.sin(s*5.4-i*1.3)*o*.28;e.lineTo(n,c)}e.strokeStyle=l,e.lineWidth=s,e.lineCap=`round`,e.stroke(),e.filter=`blur(${Math.max(.6,r*.03)}px)`,e.globalCompositeOperation=`lighter`,e.strokeStyle=F(a.highlightColor,.45),e.lineWidth=s*.28,e.stroke(),e.restore()}function ft(e,t,n,r,i,a){let o=Math.max(2,Math.round(a.ribbonCount));e.save(),e.globalCompositeOperation=`lighter`;for(let s=0;s<o;s+=1){let o=i*.7+s*.6;e.beginPath();for(let i=0;i<=40;i+=1){let a=i/40*Math.PI*2+o*.4+s,c=r*(.22+.18*Math.cos(a*2+o)),l=t+Math.cos(a+s*.4)*c*1.6,u=n+Math.sin(a*.85+o)*c*.55;i===0?e.moveTo(l,u):e.lineTo(l,u)}e.strokeStyle=F(ut(a,s*.18+i*.02),.55),e.lineWidth=Math.max(1.2,r*.045*a.ribbonWidth*2),e.lineCap=`round`,e.filter=`blur(${Math.max(.8,r*.02*a.particleBloom)}px)`,e.stroke()}e.restore()}function pt(e,t,n,r,i,a){e.save(),e.translate(t,n),e.rotate(a.metalAngle*Math.PI/180);let o=10+Math.round(a.bandDensity*3);for(let t=0;t<o;t+=1){let n=-r+2*r*t/o+Math.sin(i+t)*r*.04,s=e.createLinearGradient(n,-r,n+r*.18,r);s.addColorStop(0,F(a.colorA,.15)),s.addColorStop(.4,F(a.colorB,.55)),s.addColorStop(.7,F(a.shellMid,.4)),s.addColorStop(1,F(a.colorD,.2)),e.fillStyle=s,e.fillRect(n,-r,r*(.08+a.metalStretch*.1),r*2)}e.restore()}function mt(e,t,n,r,i){if(!i.glassEnabled)return;let a=e.createRadialGradient(t,n,r*.55,t,n,r);a.addColorStop(0,`rgba(255,255,255,0)`),a.addColorStop(.72,F(i.shellInner,.02)),a.addColorStop(.88,F(i.shellMid,.18+i.sheen*.12)),a.addColorStop(1,F(i.shellEdge,.42+i.shellEdgeAlpha*.35)),e.fillStyle=a,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e.save(),e.globalCompositeOperation=`lighter`;let o=e.createRadialGradient(t-r*.32,n-r*.38,r*.02,t-r*.22,n-r*.32,r*.42);o.addColorStop(0,F(i.sheenColor,.55)),o.addColorStop(.45,F(i.specColor,.12)),o.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=o,e.beginPath(),e.ellipse(t-r*.18,n-r*.28,r*.42,r*.28,-.5,0,Math.PI*2),e.fill(),e.restore()}function ht(e,t,n,r,i){let a=t/2,o=n/2,s=Math.max(8,Math.min(t,n)*.5*i.radius);if(e.clearRect(0,0,t,n),i.edgeGlow>.01){let r=e.createRadialGradient(a,o,s*.7,a,o,s*(1.35+i.edgeGlow));r.addColorStop(0,F(i.glowColor,.22*i.edgeGlow*i.exposure)),r.addColorStop(1,`rgba(0,0,0,0)`),e.fillStyle=r,e.fillRect(0,0,t,n)}e.save(),e.beginPath(),e.arc(a,o,s,0,Math.PI*2),e.clip();let c=e.createRadialGradient(a,o-s*.15,s*.08,a,o,s);c.addColorStop(0,lt(i.colorA,`#0a0a12`,.55+i.shade*.2)),c.addColorStop(.55,lt(i.colorD,`#050509`,.72)),c.addColorStop(1,`#030308`),e.fillStyle=c,e.fillRect(a-s,o-s,s*2,s*2);let l=i.style;l===`particleRibbon`?ft(e,a,o,s,r,i):l===`chromaticMetal`||l===`chrome`?(pt(e,a,o,s,r,i),l===`chromaticMetal`&&(e.save(),e.globalCompositeOperation=`screen`,e.filter=`blur(${s*.04}px)`,e.fillStyle=F(i.shellMid,.25*i.chromaticShift),e.fillRect(a-s+3,o-s,s*2,s*2),e.fillStyle=F(i.shellEdge,.2*i.chromaticShift),e.fillRect(a-s-3,o-s,s*2,s*2),e.restore())):(dt(e,a,o,s,r,i),(l===`aurora`||l===`plasma`)&&(e.save(),e.globalAlpha=.55,e.translate(0,s*.18),e.rotate(.4),dt(e,a,o,s*.85,r*.7+1.2,i),e.restore())),e.restore(),mt(e,a,o,s,i),e.beginPath(),e.arc(a,o,s,0,Math.PI*2),e.strokeStyle=F(i.highlightColor,.22+i.sheen*.1),e.lineWidth=Math.max(1,s*(.012+i.edgeSoftness)),e.stroke()}function gt({canvas:e,getTarget:t}){let n=e.getContext(`2d`);if(!n)return()=>{};let r=n,i=!1,a=0,o=null,s=0,c=Le(t());function l(n){if(i)return;let u=Math.min(window.devicePixelRatio||1,2),d=Math.max(1,Math.floor(e.clientWidth*u)),f=Math.max(1,Math.floor(e.clientHeight*u));(e.width!==d||e.height!==f)&&(e.width=d,e.height=f);let p=c.sample(t(),n),m=o===null?0:Math.min(.1,Math.max(0,(n-o)/1e3));o=n,s+=m*Math.max(p.speed,0),ht(r,d,f,s,p),a=requestAnimationFrame(l)}return a=requestAnimationFrame(l),()=>{i=!0,cancelAnimationFrame(a)}}function _t({canvas:e,getTarget:t,onError:n,onReady:r}){let i=!1,a=0,o=null,s=null,c=!1,l=!1,u=null,d=0;function f(e){i||l||(l=!0,cancelAnimationFrame(a),s?.destroy(),o?.destroy(),n(e))}async function p(){if(!navigator.gpu)throw Error(`当前浏览器不支持 WebGPU`);let n=await navigator.gpu.requestAdapter();if(!n)throw Error(`未找到可用的 WebGPU 适配器`);if(o=await n.requestDevice(),i){o.destroy();return}let p=e.getContext(`webgpu`);if(!p)throw Error(`无法创建 WebGPU 画布上下文`);let m=p,h=navigator.gpu.getPreferredCanvasFormat();m.configure({device:o,format:h,alphaMode:`premultiplied`});let g=o.createShaderModule({label:`orb-glass-liquid`,code:Re}),_=(await g.getCompilationInfo()).messages.filter(e=>e.type===`error`);if(_.length>0)throw Error(_.map(e=>`${e.lineNum}:${e.linePos} ${e.message}`).join(`
`));let v=o.createRenderPipeline({label:`orb-glass-liquid-pipeline`,layout:`auto`,vertex:{module:g,entryPoint:`vs_main`},fragment:{module:g,entryPoint:`fs_main`,targets:[{format:h,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),y=o.createRenderPipeline({label:`particle-ribbon-pipeline`,layout:`auto`,vertex:{module:g,entryPoint:`ribbon_vs_main`},fragment:{module:g,entryPoint:`ribbon_fs_main`,targets:[{format:h,blend:{color:{srcFactor:`one`,dstFactor:`one`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),b=o.createRenderPipeline({label:`particle-ribbon-glass-composite-pipeline`,layout:`auto`,vertex:{module:g,entryPoint:`vs_main`},fragment:{module:g,entryPoint:`ribbon_composite_fs_main`,targets:[{format:h,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),x=new Float32Array(136),ee=o.createBuffer({size:x.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),C=o.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:ee}}]}),w=o.createBindGroup({layout:y.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:ee}}]}),te=o.createSampler({addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,magFilter:`linear`,minFilter:`linear`}),ne=null,T=Le(t());o.lost.then(e=>{f(Error(`WebGPU 设备已断开：${e.message||e.reason}`))}),o.addEventListener(`uncapturederror`,e=>{e.preventDefault(),f(Error(`WebGPU 渲染错误：${e.error.message}`))});function re(){let t=Math.min(window.devicePixelRatio||1,2),n=Math.max(1,Math.floor(e.clientWidth*t)),r=Math.max(1,Math.floor(e.clientHeight*t));(e.width!==n||e.height!==r)&&(e.width=n,e.height=r,s?.destroy(),s=null,ne=null)}function ie(){s&&ne||(s=o.createTexture({label:`particle-ribbon-offscreen-texture`,size:{width:e.width,height:e.height},format:h,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),ne=o.createBindGroup({layout:b.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:ee}},{binding:1,resource:s.createView()},{binding:2,resource:te}]}))}function E(n){if(!(i||l||!o))try{re();let i=T.sample(t(),n),l=u===null?0:Math.min(.1,Math.max(0,(n-u)/1e3));u=n,d+=l*Math.max(i.speed,0);let f=d/Math.max(i.speed,.001);de(x,e.width,e.height,f,i),o.queue.writeBuffer(ee,0,x);let p=S[i.style]===S.particleRibbon,h=o.createCommandEncoder();if(p){ie();let e=h.beginRenderPass({colorAttachments:[{view:s.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});e.setPipeline(y),e.setBindGroup(0,w),e.draw(6,pe,0,0),e.end()}let g=h.beginRenderPass({colorAttachments:[{view:m.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});p?(g.setPipeline(b),g.setBindGroup(0,ne)):(g.setPipeline(v),g.setBindGroup(0,C)),g.draw(3,1,0,0),g.end(),o.queue.submit([h.finish()]),c||(c=!0,r()),a=requestAnimationFrame(E)}catch(e){f(e instanceof Error?e:Error(String(e)))}}a=requestAnimationFrame(E)}return p().catch(e=>{f(e instanceof Error?e:Error(String(e)))}),()=>{i=!0,cancelAnimationFrame(a),s?.destroy(),o?.destroy()}}function vt(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=vt(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function yt(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=vt(e))&&(r&&(r+=` `),r+=t);return r}var bt=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},xt=(e,t)=>({classGroupId:e,validator:t}),St=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Ct=`-`,wt=[],Tt=`arbitrary..`,Et=e=>{let t=kt(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Ot(e);let n=e.split(Ct);return Dt(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?bt(i,t):t:i||wt}return n[e]||wt}}},Dt=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Dt(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Ct):e.slice(t).join(Ct),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Ot=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Tt+r:void 0})(),kt=e=>{let{theme:t,classGroups:n}=e;return At(n,t)},At=(e,t)=>{let n=St();for(let r in e){let i=e[r];jt(i,n,r,t)}return n},jt=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Mt(i,t,n,r)}},Mt=(e,t,n,r)=>{if(typeof e==`string`){Nt(e,t,n);return}if(typeof e==`function`){Pt(e,t,n,r);return}Ft(e,t,n,r)},Nt=(e,t,n)=>{let r=e===``?t:It(t,e);r.classGroupId=n},Pt=(e,t,n,r)=>{if(Lt(e)){jt(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(xt(n,e))},Ft=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];jt(o,It(t,a),n,r)}},It=(e,t)=>{let n=e,r=t.split(Ct),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=St(),n.nextPart.set(t,i)),n=i}return n},Lt=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Rt=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},zt=`!`,Bt=`:`,Vt=[],Ht=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Ut=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Bt){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(zt)?(c=s.slice(0,-1),l=!0):s.startsWith(zt)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Ht(t,l,c,u)};if(t){let e=t+Bt,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Ht(Vt,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Wt=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Gt=e=>({cache:Rt(e.cacheSize),parseClassName:Ut(e),sortModifiers:Wt(e),postfixLookupClassGroupIds:Kt(e),...Et(e)}),Kt=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},qt=/\s+/,Jt=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(qt),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+zt:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},Yt=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=Xt(n))&&(i&&(i+=` `),i+=r);return i},Xt=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Xt(e[r]))&&(n&&(n+=` `),n+=t);return n},Zt=(e,...t)=>{let n,r,i,a,o=o=>(n=Gt(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Jt(e,n);return i(e,a),a};return a=o,(...e)=>a(Yt(...e))},Qt=[],$t=e=>{let t=t=>t[e]||Qt;return t.isThemeGetter=!0,t},en=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,tn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,nn=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,rn=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,an=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,on=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,sn=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,cn=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ln=e=>nn.test(e),I=e=>!!e&&!Number.isNaN(Number(e)),un=e=>!!e&&Number.isInteger(Number(e)),dn=e=>e.endsWith(`%`)&&I(e.slice(0,-1)),fn=e=>rn.test(e),pn=()=>!0,mn=e=>an.test(e)&&!on.test(e),hn=()=>!1,gn=e=>sn.test(e),_n=e=>cn.test(e),vn=e=>!L(e)&&!R(e),yn=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),bn=e=>Fn(e,zn,hn),L=e=>en.test(e),xn=e=>Fn(e,Bn,mn),Sn=e=>Fn(e,Vn,I),Cn=e=>Fn(e,Un,pn),wn=e=>Fn(e,Hn,hn),Tn=e=>Fn(e,Ln,hn),En=e=>Fn(e,Rn,_n),Dn=e=>Fn(e,Wn,gn),R=e=>tn.test(e),On=e=>In(e,Bn),kn=e=>In(e,Hn),An=e=>In(e,Ln),jn=e=>In(e,zn),Mn=e=>In(e,Rn),Nn=e=>In(e,Wn,!0),Pn=e=>In(e,Un,!0),Fn=(e,t,n)=>{let r=en.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},In=(e,t,n=!1)=>{let r=tn.exec(e);return r?r[1]?t(r[1]):n:!1},Ln=e=>e===`position`||e===`percentage`,Rn=e=>e===`image`||e===`url`,zn=e=>e===`length`||e===`size`||e===`bg-size`,Bn=e=>e===`length`,Vn=e=>e===`number`,Hn=e=>e===`family-name`,Un=e=>e===`number`||e===`weight`,Wn=e=>e===`shadow`,Gn=Zt(()=>{let e=$t(`color`),t=$t(`font`),n=$t(`text`),r=$t(`font-weight`),i=$t(`tracking`),a=$t(`leading`),o=$t(`breakpoint`),s=$t(`container`),c=$t(`spacing`),l=$t(`radius`),u=$t(`shadow`),d=$t(`inset-shadow`),f=$t(`text-shadow`),p=$t(`drop-shadow`),m=$t(`blur`),h=$t(`perspective`),g=$t(`aspect`),_=$t(`ease`),v=$t(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),R,L],ee=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],S=()=>[`auto`,`contain`,`none`],C=()=>[R,L,c],w=()=>[ln,`full`,`auto`,...C()],te=()=>[un,`none`,`subgrid`,R,L],ne=()=>[`auto`,{span:[`full`,un,R,L]},un,R,L],T=()=>[un,`auto`,R,L],re=()=>[`auto`,`min`,`max`,`fr`,R,L],ie=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],E=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],D=()=>[`auto`,...C()],ae=()=>[ln,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...C()],oe=()=>[ln,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...C()],se=()=>[ln,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...C()],O=()=>[e,R,L],k=()=>[...b(),An,Tn,{position:[R,L]}],ce=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],le=()=>[`auto`,`cover`,`contain`,jn,bn,{size:[R,L]}],ue=()=>[dn,On,xn],A=()=>[``,`none`,`full`,l,R,L],j=()=>[``,I,On,xn],M=()=>[`solid`,`dashed`,`dotted`,`double`],N=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],P=()=>[I,dn,An,Tn],de=()=>[``,`none`,m,R,L],fe=()=>[`none`,I,R,L],pe=()=>[`none`,I,R,L],me=()=>[I,R,L],he=()=>[ln,`full`,...C()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[fn],breakpoint:[fn],color:[pn],container:[fn],"drop-shadow":[fn],ease:[`in`,`out`,`in-out`],font:[vn],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[fn],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[fn],shadow:[fn],spacing:[`px`,I],text:[fn],"text-shadow":[fn],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,ln,L,R,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,R,L]}],"container-named":[yn],columns:[{columns:[I,L,R,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:ee()}],"overflow-x":[{"overflow-x":ee()}],"overflow-y":[{"overflow-y":ee()}],overscroll:[{overscroll:S()}],"overscroll-x":[{"overscroll-x":S()}],"overscroll-y":[{"overscroll-y":S()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:w()}],"inset-x":[{"inset-x":w()}],"inset-y":[{"inset-y":w()}],start:[{"inset-s":w(),start:w()}],end:[{"inset-e":w(),end:w()}],"inset-bs":[{"inset-bs":w()}],"inset-be":[{"inset-be":w()}],top:[{top:w()}],right:[{right:w()}],bottom:[{bottom:w()}],left:[{left:w()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[un,`auto`,R,L]}],basis:[{basis:[ln,`full`,`auto`,s,...C()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[I,ln,`auto`,`initial`,`none`,L]}],grow:[{grow:[``,I,R,L]}],shrink:[{shrink:[``,I,R,L]}],order:[{order:[un,`first`,`last`,`none`,R,L]}],"grid-cols":[{"grid-cols":te()}],"col-start-end":[{col:ne()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":te()}],"row-start-end":[{row:ne()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":re()}],"auto-rows":[{"auto-rows":re()}],gap:[{gap:C()}],"gap-x":[{"gap-x":C()}],"gap-y":[{"gap-y":C()}],"justify-content":[{justify:[...ie(),`normal`]}],"justify-items":[{"justify-items":[...E(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...E()]}],"align-content":[{content:[`normal`,...ie()]}],"align-items":[{items:[...E(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...E(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":ie()}],"place-items":[{"place-items":[...E(),`baseline`]}],"place-self":[{"place-self":[`auto`,...E()]}],p:[{p:C()}],px:[{px:C()}],py:[{py:C()}],ps:[{ps:C()}],pe:[{pe:C()}],pbs:[{pbs:C()}],pbe:[{pbe:C()}],pt:[{pt:C()}],pr:[{pr:C()}],pb:[{pb:C()}],pl:[{pl:C()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mbs:[{mbs:D()}],mbe:[{mbe:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":C()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":C()}],"space-y-reverse":[`space-y-reverse`],size:[{size:ae()}],"inline-size":[{inline:[`auto`,...oe()]}],"min-inline-size":[{"min-inline":[`auto`,...oe()]}],"max-inline-size":[{"max-inline":[`none`,...oe()]}],"block-size":[{block:[`auto`,...se()]}],"min-block-size":[{"min-block":[`auto`,...se()]}],"max-block-size":[{"max-block":[`none`,...se()]}],w:[{w:[s,`screen`,...ae()]}],"min-w":[{"min-w":[s,`screen`,`none`,...ae()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...ae()]}],h:[{h:[`screen`,`lh`,...ae()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...ae()]}],"max-h":[{"max-h":[`screen`,`lh`,...ae()]}],"font-size":[{text:[`base`,n,On,xn]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Pn,Cn]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,dn,L]}],"font-family":[{font:[kn,wn,t]}],"font-features":[{"font-features":[L]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,R,L]}],"line-clamp":[{"line-clamp":[I,`none`,R,Sn]}],leading:[{leading:[a,...C()]}],"list-image":[{"list-image":[`none`,R,L]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,R,L]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...M(),`wavy`]}],"text-decoration-thickness":[{decoration:[I,`from-font`,`auto`,R,xn]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[I,`auto`,R,L]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:C()}],"tab-size":[{tab:[un,R,L]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,R,L]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,R,L]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:k()}],"bg-repeat":[{bg:ce()}],"bg-size":[{bg:le()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},un,R,L],radial:[``,R,L],conic:[un,R,L]},Mn,En]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:ue()}],"gradient-via-pos":[{via:ue()}],"gradient-to-pos":[{to:ue()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:A()}],"rounded-s":[{"rounded-s":A()}],"rounded-e":[{"rounded-e":A()}],"rounded-t":[{"rounded-t":A()}],"rounded-r":[{"rounded-r":A()}],"rounded-b":[{"rounded-b":A()}],"rounded-l":[{"rounded-l":A()}],"rounded-ss":[{"rounded-ss":A()}],"rounded-se":[{"rounded-se":A()}],"rounded-ee":[{"rounded-ee":A()}],"rounded-es":[{"rounded-es":A()}],"rounded-tl":[{"rounded-tl":A()}],"rounded-tr":[{"rounded-tr":A()}],"rounded-br":[{"rounded-br":A()}],"rounded-bl":[{"rounded-bl":A()}],"border-w":[{border:j()}],"border-w-x":[{"border-x":j()}],"border-w-y":[{"border-y":j()}],"border-w-s":[{"border-s":j()}],"border-w-e":[{"border-e":j()}],"border-w-bs":[{"border-bs":j()}],"border-w-be":[{"border-be":j()}],"border-w-t":[{"border-t":j()}],"border-w-r":[{"border-r":j()}],"border-w-b":[{"border-b":j()}],"border-w-l":[{"border-l":j()}],"divide-x":[{"divide-x":j()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":j()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...M(),`hidden`,`none`]}],"divide-style":[{divide:[...M(),`hidden`,`none`]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-bs":[{"border-bs":O()}],"border-color-be":[{"border-be":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...M(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[I,R,L]}],"outline-w":[{outline:[``,I,On,xn]}],"outline-color":[{outline:O()}],shadow:[{shadow:[``,`none`,u,Nn,Dn]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":[`none`,d,Nn,Dn]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:j()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[I,xn]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":j()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":[`none`,f,Nn,Dn]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[I,R,L]}],"mix-blend":[{"mix-blend":[...N(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":N()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[I]}],"mask-image-linear-from-pos":[{"mask-linear-from":P()}],"mask-image-linear-to-pos":[{"mask-linear-to":P()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":P()}],"mask-image-t-to-pos":[{"mask-t-to":P()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":P()}],"mask-image-r-to-pos":[{"mask-r-to":P()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":P()}],"mask-image-b-to-pos":[{"mask-b-to":P()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":P()}],"mask-image-l-to-pos":[{"mask-l-to":P()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":P()}],"mask-image-x-to-pos":[{"mask-x-to":P()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":P()}],"mask-image-y-to-pos":[{"mask-y-to":P()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[R,L]}],"mask-image-radial-from-pos":[{"mask-radial-from":P()}],"mask-image-radial-to-pos":[{"mask-radial-to":P()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[I]}],"mask-image-conic-from-pos":[{"mask-conic-from":P()}],"mask-image-conic-to-pos":[{"mask-conic-to":P()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:k()}],"mask-repeat":[{mask:ce()}],"mask-size":[{mask:le()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,R,L]}],filter:[{filter:[``,`none`,R,L]}],blur:[{blur:de()}],brightness:[{brightness:[I,R,L]}],contrast:[{contrast:[I,R,L]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Nn,Dn]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:[``,I,R,L]}],"hue-rotate":[{"hue-rotate":[I,R,L]}],invert:[{invert:[``,I,R,L]}],saturate:[{saturate:[I,R,L]}],sepia:[{sepia:[``,I,R,L]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,R,L]}],"backdrop-blur":[{"backdrop-blur":de()}],"backdrop-brightness":[{"backdrop-brightness":[I,R,L]}],"backdrop-contrast":[{"backdrop-contrast":[I,R,L]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,I,R,L]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[I,R,L]}],"backdrop-invert":[{"backdrop-invert":[``,I,R,L]}],"backdrop-opacity":[{"backdrop-opacity":[I,R,L]}],"backdrop-saturate":[{"backdrop-saturate":[I,R,L]}],"backdrop-sepia":[{"backdrop-sepia":[``,I,R,L]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":C()}],"border-spacing-x":[{"border-spacing-x":C()}],"border-spacing-y":[{"border-spacing-y":C()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,R,L]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[I,`initial`,R,L]}],ease:[{ease:[`linear`,`initial`,_,R,L]}],delay:[{delay:[I,R,L]}],animate:[{animate:[`none`,v,R,L]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,R,L]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:fe()}],"rotate-x":[{"rotate-x":fe()}],"rotate-y":[{"rotate-y":fe()}],"rotate-z":[{"rotate-z":fe()}],scale:[{scale:pe()}],"scale-x":[{"scale-x":pe()}],"scale-y":[{"scale-y":pe()}],"scale-z":[{"scale-z":pe()}],"scale-3d":[`scale-3d`],skew:[{skew:me()}],"skew-x":[{"skew-x":me()}],"skew-y":[{"skew-y":me()}],transform:[{transform:[R,L,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:he()}],"translate-x":[{"translate-x":he()}],"translate-y":[{"translate-y":he()}],"translate-z":[{"translate-z":he()}],"translate-none":[`translate-none`],zoom:[{zoom:[un,R,L]}],accent:[{accent:O()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,R,L]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":O()}],"scrollbar-track-color":[{"scrollbar-track":O()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mbs":[{"scroll-mbs":C()}],"scroll-mbe":[{"scroll-mbe":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pbs":[{"scroll-pbs":C()}],"scroll-pbe":[{"scroll-pbe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,R,L]}],fill:[{fill:[`none`,...O()]}],"stroke-w":[{stroke:[I,On,xn,Sn]}],stroke:[{stroke:[`none`,...O()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function Kn(...e){return Gn(yt(e))}var qn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),z=o(((e,t)=>{t.exports=qn()}))();function Jn({getTarget:e,className:t,label:n,onStatus:r}){let i=(0,_.useRef)(null),a=(0,_.useRef)(null),o=(0,_.useRef)(e),[s,c]=(0,_.useState)(`loading`);return o.current=e,(0,_.useEffect)(()=>{r?.(s)},[r,s]),(0,_.useEffect)(()=>{let e=a.current;if(e)return gt({canvas:e,getTarget:()=>o.current()})},[]),(0,_.useEffect)(()=>{let e=i.current;if(!e||typeof navigator>`u`||!navigator.gpu){c(`fallback`);return}let t=!1,n=_t({canvas:e,getTarget:()=>o.current(),onError:()=>{t||c(`fallback`)},onReady:()=>{t||c(`gpu`)}}),r=window.setTimeout(()=>{c(e=>e===`loading`?`fallback`:e)},2200);return()=>{t=!0,window.clearTimeout(r),n()}},[]),(0,z.jsxs)(`div`,{className:Kn(`orc-canvas-stack`,t),children:[(0,z.jsx)(`canvas`,{ref:a,className:`orc-canvas orc-canvas-fallback`,"aria-hidden":s===`gpu`}),(0,z.jsx)(`canvas`,{ref:i,className:`orc-canvas orc-canvas-gpu`,"data-ready":s===`gpu`?`true`:`false`,"aria-label":n??`Animated liquid glass orb`})]})}function Yn(){let[e,t]=(0,_.useState)(()=>({configuration:De(C.style),activeState:ve})),[n,r]=(0,_.useState)(`scene`),[i,a]=(0,_.useState)(w);(0,_.useEffect)(()=>{let e=()=>{let e=at(),n=new URLSearchParams(window.location.search),i=n.get(`style`)??n.get(`preset`);if(i&&ee.includes(i)&&!window.location.hash){t({configuration:De(i),activeState:n.get(`state`)===`idle`||n.get(`state`)===`thinking`?n.get(`state`):ve}),r(n.get(`preview`)===`orb`?`orb`:`scene`),a(n.get(`text`)??`Thinking...`);return}t(e),r(window.location.hash?tt():`scene`),a(window.location.hash?nt():n.get(`text`)??`Thinking...`)};return e(),window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]),(0,_.useEffect)(()=>{let n=e=>{if(!We(e.data))return;let n=e.data;n.type===`setState`&&t(e=>({...e,activeState:n.state})),n.type===`setText`&&a(n.text),n.type===`ping`&&e.source?.postMessage({source:Ue,type:`pong`},{targetOrigin:e.origin})};return window.addEventListener(`message`,n),window.parent?.postMessage({source:Ue,type:`ready`,state:e.activeState},`*`),()=>window.removeEventListener(`message`,n)},[e.activeState]);let o=(0,_.useMemo)(()=>Oe(e.configuration,e.activeState),[e]),s=(0,_.useRef)({state:e.activeState,params:o,activationDuration:e.configuration.activationDuration,transitionDuration:e.configuration.transitionDuration});return s.current={state:e.activeState,params:o,activationDuration:e.configuration.activationDuration,transitionDuration:e.configuration.transitionDuration},(0,z.jsx)(`main`,{className:`orc-embed`,children:n===`scene`?(0,z.jsxs)(`div`,{className:`orc-scene-pill`,children:[(0,z.jsx)(`div`,{className:`orc-scene-pill-orb`,children:(0,z.jsx)(Jn,{getTarget:()=>s.current})}),(0,z.jsx)(`span`,{className:`orc-scene-pill-text`,children:i||`\xA0`})]}):(0,z.jsx)(`div`,{className:`orc-embed-orb`,children:(0,z.jsx)(Jn,{getTarget:()=>s.current})})})}var Xn=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Zn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Qn=e=>{let t=Zn(e);return t.charAt(0).toUpperCase()+t.slice(1)},$n=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),er=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},tr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},nr=(0,_.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,_.createElement)(`svg`,{ref:c,...tr,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:$n(`lucide`,i),...!a&&!er(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])),rr=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(nr,{ref:i,iconNode:t,className:$n(`lucide-${Xn(Qn(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Qn(e),n},ir=rr(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ar=rr(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),or=rr(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),sr=rr(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),cr=rr(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),lr=rr(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]);function ur({tone:e=`dark`,sheen:t=!0,radius:n=`2rem`,padding:r=`1.5rem`,className:i,style:a,children:o,...s}){let c=[`glass-panel`,e===`light`?`tone-light`:``,i??``].filter(Boolean).join(` `);return(0,z.jsxs)(`article`,{className:c,style:{borderRadius:n,padding:r,...a},...s,children:[(0,z.jsx)(`div`,{className:`glass-read`,"aria-hidden":`true`}),t?(0,z.jsx)(`div`,{className:`glass-sheen`,"aria-hidden":`true`}):null,(0,z.jsx)(`div`,{className:`type-legible`,style:{position:`relative`,zIndex:10},children:o})]})}var dr=Object.defineProperty,fr=(e,t)=>dr(e,`name`,{value:t,configurable:!0});function pr(e,[t,n]){return Math.min(n,Math.max(t,e))}fr(pr,`clamp`);var mr=Object.defineProperty,hr=(e,t)=>mr(e,`name`,{value:t,configurable:!0}),gr=!!(typeof window<`u`&&window.document&&window.document.createElement);function _r(e,t,{checkForDefaultPrevented:n=!0}={}){return hr(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}hr(_r,`composeEventHandlers`);function vr(e){if(!gr)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}hr(vr,`getOwnerWindow`);function yr(e){if(!gr)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}hr(yr,`getOwnerDocument`);function br(e,t=!1){let{activeElement:n}=yr(e);if(!n?.nodeName)return null;if(xr(n)&&n.contentDocument)return br(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=yr(n).getElementById(e);if(t)return t}}return n}hr(br,`getActiveElement`);function xr(e){return e.tagName===`IFRAME`}hr(xr,`isFrame`);var Sr=Object.defineProperty,Cr=(e,t)=>Sr(e,`name`,{value:t,configurable:!0});function wr(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}Cr(wr,`setRef`);function Tr(...e){return t=>{let n=!1,r=e.map(e=>{let r=wr(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():wr(e[t],null)}}}}Cr(Tr,`composeRefs`);function Er(...e){return _.useCallback(Tr(...e),e)}Cr(Er,`useComposedRefs`);var Dr=Object.defineProperty,Or=(e,t)=>Dr(e,`name`,{value:t,configurable:!0});function kr(e,t){let n=_.createContext(t);n.displayName=e+`Context`;let r=Or(e=>{let{children:t,...r}=e,i=_.useMemo(()=>r,Object.values(r));return(0,z.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=_.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return Or(i,`useContext`),[r,i]}Or(kr,`createContext`);function Ar(e,t=[]){let n=[];function r(t,r){let i=_.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=Or(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=_.useMemo(()=>o,Object.values(o));return(0,z.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=_.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return Or(s,`useContext`),[o,s]}Or(r,`createContext`);let i=Or(()=>{let t=n.map(e=>_.createContext(e));return Or(function(n){let r=n?.[e]||t;return _.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,jr(i,...t)]}Or(Ar,`createContextScope`);function jr(...e){let t=e[0];if(e.length===1)return t;let n=Or(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return Or(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return _.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}Or(jr,`composeContextScopes`);var Mr=globalThis?.document?_.useLayoutEffect:()=>{},Nr=Object.defineProperty,Pr=(e,t)=>Nr(e,`name`,{value:t,configurable:!0}),Fr=_.useEffectEvent,Ir=_.useInsertionEffect;function Lr(e){if(typeof Fr==`function`)return Fr(e);let t=_.useRef(()=>{throw Error(`Cannot call an event handler while rendering.`)});return typeof Ir==`function`?Ir(()=>{t.current=e}):Mr(()=>{t.current=e}),_.useMemo(()=>((...e)=>t.current?.(...e)),[])}Pr(Lr,`useEffectEvent`);var Rr=Object.defineProperty,zr=(e,t)=>Rr(e,`name`,{value:t,configurable:!0}),Br=_.useInsertionEffect||Mr;function Vr({prop:e,defaultProp:t,onChange:n=zr(()=>{},`onChange`),caller:r}){let[i,a,o]=Hr({defaultProp:t,onChange:n}),s=e!==void 0;return[s?e:i,_.useCallback(t=>{if(s){let n=Ur(t)?t(e):t;n!==e&&o.current?.(n)}else a(t)},[s,e,a,o])]}zr(Vr,`useControllableState`);function Hr({defaultProp:e,onChange:t}){let[n,r]=_.useState(e),i=_.useRef(n),a=_.useRef(t);return Br(()=>{a.current=t},[t]),_.useEffect(()=>{i.current!==n&&(a.current?.(n),i.current=n)},[n,i]),[n,r,a]}zr(Hr,`useUncontrolledState`);function Ur(e){return typeof e==`function`}zr(Ur,`isFunction`);var Wr=Symbol(`RADIX:SYNC_STATE`);function Gr(e,t,n,r){let{prop:i,defaultProp:a,onChange:o,caller:s}=t,c=i!==void 0,l=Lr(o),u=[{...n,state:a}];r&&u.push(r);let[d,f]=_.useReducer((t,n)=>{if(n.type===Wr)return{...t,state:n.state};let r=e(t,n);return c&&!Object.is(r.state,t.state)&&l(r.state),r},...u),p=d.state,m=_.useRef(p);_.useEffect(()=>{m.current!==p&&(m.current=p,c||l(p))},[p,m,c]);let h=_.useMemo(()=>i===void 0?d:{...d,state:i},[d,i]);return _.useEffect(()=>{c&&!Object.is(i,d.state)&&f({type:Wr,state:i})},[i,d.state,c]),[h,f]}zr(Gr,`useControllableStateReducer`);var Kr=Object.defineProperty,qr=(e,t)=>Kr(e,`name`,{value:t,configurable:!0}),Jr=_.createContext(void 0);function Yr(e){let t=_.useContext(Jr);return e||t||`ltr`}qr(Yr,`useDirection`);var Xr=Object.defineProperty,Zr=(e,t)=>Xr(e,`name`,{value:t,configurable:!0});function Qr(e){let t=_.useRef({value:e,previous:e});return _.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}Zr(Qr,`usePrevious`);var $r=Object.defineProperty,ei=(e,t)=>$r(e,`name`,{value:t,configurable:!0});function ti(e){let[t,n]=_.useState(void 0);return Mr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{if(!Array.isArray(t)||!t.length)return;let r=t[0],i,a;if(`borderBoxSize`in r){let e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,a=t.blockSize}else i=e.offsetWidth,a=e.offsetHeight;n({width:i,height:a})});return t.observe(e,{box:`border-box`}),()=>t.unobserve(e)}n(void 0)},[e]),t}ei(ti,`useSize`);var ni=c(m(),1),ri=Object.defineProperty,ii=(e,t)=>ri(e,`name`,{value:t,configurable:!0});function ai(e){let t=_.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];pi(r)&&typeof _i==`function`&&(r=_i(r._payload)),_.Children.forEach(r,e=>{if(di(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;pi(n)&&typeof _i==`function`&&(n=_i(n._payload)),a=ci(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=_.cloneElement(a,void 0,s):!o&&_.Children.count(r)===1&&_.isValidElement(r)&&(a=r);let c=a?ui(a):void 0,l=Er(n,c);if(!a){if(r||r===0)throw Error(o?gi(e):hi(e));return r}let u=li(i,a.props??{});return a.type!==_.Fragment&&(u.ref=n?l:c),_.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}ii(ai,`createSlot`);var oi=Symbol.for(`radix.slottable`);function si(e){let t=ii(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=oi,t}ii(si,`createSlottable`);var ci=ii((e,t)=>{if(`child`in e.props){let t=e.props.child;return _.isValidElement(t)?_.cloneElement(t,void 0,e.props.children(t.props.children)):null}return _.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function li(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}ii(li,`mergeProps`);function ui(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}ii(ui,`getElementRef`);function di(e){return _.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===oi}ii(di,`isSlottable`);var fi=Symbol.for(`react.lazy`);function pi(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===fi&&`_payload`in e&&mi(e._payload)}ii(pi,`isLazyComponent`);function mi(e){return typeof e==`object`&&!!e&&`then`in e}ii(mi,`isPromiseLike`);var hi=ii(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),gi=ii(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),_i=_.use,vi=Object.defineProperty,yi=(e,t)=>vi(e,`name`,{value:t,configurable:!0}),bi=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=ai(`Primitive.${t}`),r=_.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,z.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function xi(e,t){e&&ni.flushSync(()=>e.dispatchEvent(t))}yi(xi,`dispatchDiscreteCustomEvent`);var Si=Object.defineProperty,B=(e,t)=>Si(e,`name`,{value:t,configurable:!0});function Ci(e){let t=e+`CollectionProvider`,[n,r]=Ar(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=B(e=>{let{scope:t,children:n}=e,r=_.useRef(null),a=_.useRef(new Map).current;return(0,z.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})},`CollectionProvider`);o.displayName=t;let s=e+`CollectionSlot`,c=ai(s),l=_.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=Er(t,a(s,n).collectionRef);return(0,z.jsx)(c,{ref:i,children:r})});l.displayName=s;let u=e+`CollectionItemSlot`,d=`data-radix-collection-item`,f=ai(u),p=_.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=_.useRef(null),s=Er(t,o),c=a(u,n);return _.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,z.jsx)(f,{[d]:``,ref:s,children:r})});p.displayName=u;function m(t){let n=a(e+`CollectionConsumer`,t);return _.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return B(m,`useCollection`),[{Provider:o,Slot:l,ItemSlot:p},m,r]}B(Ci,`createCollection`);var wi=new WeakMap,Ti=class e extends Map{static{B(this,`OrderedDict`)}#e;constructor(e){super(e),this.#e=[...super.keys()],wi.set(this,!0)}set(e,t){return wi.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,t),this}insert(e,t,n){let r=this.has(t),i=this.#e.length,a=Oi(e),o=a>=0?a:i+a,s=o<0||o>=i?-1:o;if(s===this.size||r&&s===this.size-1||s===-1)return this.set(t,n),this;let c=this.size+ +!r;a<0&&o++;let l=[...this.#e],u,d=!1;for(let e=o;e<c;e++)if(o===e){let i=l[e];l[e]===t&&(i=l[e+1]),r&&this.delete(t),u=this.get(i),this.set(t,n)}else{!d&&l[e-1]===t&&(d=!0);let n=l[d?e:e-1],r=u;u=this.get(n),this.delete(n),this.set(n,r)}return this}with(t,n,r){let i=new e(this);return i.insert(t,n,r),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,n){let r=this.#e.indexOf(e);return r===-1?this:this.insert(r,t,n)}after(e){let t=this.#e.indexOf(e);if(t=t===-1||t===this.size-1?-1:t+1,t!==-1)return this.entryAt(t)}setAfter(e,t,n){let r=this.#e.indexOf(e);return r===-1?this:this.insert(r+1,t,n)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return t!==void 0&&this.delete(t)}at(e){let t=Ei(this.#e,e);if(t!==void 0)return this.get(t)}entryAt(e){let t=Ei(this.#e,e);if(t!==void 0)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return Ei(this.#e,e)}from(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return r;n++}}findIndex(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return n;n++}return-1}filter(t,n){let r=[],i=0;for(let e of this)Reflect.apply(t,n,[e,i,this])&&r.push(e),i++;return new e(r)}map(t,n){let r=[],i=0;for(let e of this)r.push([e[0],Reflect.apply(t,n,[e,i,this])]),i++;return new e(r)}reduce(...e){let[t,n]=e,r=0,i=n??this.at(0);for(let n of this)i=r===0&&e.length===1?n:Reflect.apply(t,this,[i,n,r,this]),r++;return i}reduceRight(...e){let[t,n]=e,r=n??this.at(-1);for(let n=this.size-1;n>=0;n--){let i=this.at(n);r=n===this.size-1&&e.length===1?i:Reflect.apply(t,this,[r,i,n,this])}return r}toSorted(t){let n=[...this.entries()].sort(t);return new e(n)}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let n=this.keyAt(e),r=this.get(n);t.set(n,r)}return t}toSpliced(...t){let n=[...this.entries()];return n.splice(...t),new e(n)}slice(t,n){let r=new e,i=this.size-1;if(t===void 0)return r;t<0&&(t+=this.size),n!==void 0&&n>0&&(i=n-1);for(let e=t;e<=i;e++){let t=this.keyAt(e),n=this.get(t);r.set(t,n)}return r}every(e,t){let n=0;for(let r of this){if(!Reflect.apply(e,t,[r,n,this]))return!1;n++}return!0}some(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return!0;n++}return!1}};function Ei(e,t){if(`at`in Array.prototype)return Array.prototype.at.call(e,t);let n=Di(e,t);return n===-1?void 0:e[n]}B(Ei,`at`);function Di(e,t){let n=e.length,r=Oi(t),i=r>=0?r:n+r;return i<0||i>=n?-1:i}B(Di,`toSafeIndex`);function Oi(e){return e!==e||e===0?0:Math.trunc(e)}B(Oi,`toSafeInteger`);function ki(e){let t=e+`CollectionProvider`,[n,r]=Ar(t),[i,a]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Ti,setItemMap:B(()=>void 0,`setItemMap`)}),o=B(({state:e,...t})=>e?(0,z.jsx)(c,{...t,state:e}):(0,z.jsx)(s,{...t}),`CollectionProvider`);o.displayName=t;let s=B(e=>{let t=h();return(0,z.jsx)(c,{...e,state:t})},`CollectionInit`);s.displayName=t+`Init`;let c=B(e=>{let{scope:t,children:n,state:r}=e,a=_.useRef(null),[o,s]=_.useState(null),c=Er(a,s),[l,u]=r;return _.useEffect(()=>{if(!o)return;let e=H(()=>{});return e.observe(o,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[o]),(0,z.jsx)(i,{scope:t,itemMap:l,setItemMap:u,collectionRef:c,collectionRefObject:a,collectionElement:o,children:n})},`CollectionProviderImpl`);c.displayName=t+`Impl`;let l=e+`CollectionSlot`,u=ai(l),d=_.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=Er(t,a(l,n).collectionRef);return(0,z.jsx)(u,{ref:i,children:r})});d.displayName=l;let f=e+`CollectionItemSlot`,p=ai(f),m=_.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=_.useRef(null),[s,c]=_.useState(null),l=Er(t,o,c),{setItemMap:u}=a(f,n),d=_.useRef(i);Ai(d.current,i)||(d.current=i);let m=d.current;return _.useEffect(()=>{let e=m;return u(t=>s?t.has(s)?t.set(s,{...e,element:s}).toSorted(V):(t.set(s,{...e,element:s}),t.toSorted(V)):t),()=>{u(e=>!s||!e.has(s)?e:(e.delete(s),new Ti(e)))}},[s,m,u]),(0,z.jsx)(p,{"data-radix-collection-item":``,ref:l,children:r})});m.displayName=f;function h(){return _.useState(new Ti)}B(h,`useInitCollection`);function g(t){let{itemMap:n}=a(e+`CollectionConsumer`,t);return n}return B(g,`useCollection`),[{Provider:o,Slot:d,ItemSlot:m},{createCollectionScope:r,useCollection:g,useInitCollection:h}]}B(ki,`createCollection`);function Ai(e,t){if(e===t)return!0;if(typeof e!=`object`||typeof t!=`object`||e==null||t==null)return!1;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}B(Ai,`shallowEqual`);function ji(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}B(ji,`isElementPreceding`);function V(e,t){return!e[1].element||!t[1].element?0:ji(e[1].element,t[1].element)?-1:1}B(V,`sortByDocumentPosition`);function H(e){return new MutationObserver(t=>{for(let n of t)if(n.type===`childList`){e();return}})}B(H,`getChildListObserver`);var Mi=Object.defineProperty,U=(e,t)=>Mi(e,`name`,{value:t,configurable:!0}),Ni=[`PageUp`,`PageDown`],Pi=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],Fi={"from-left":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-right":[`Home`,`PageDown`,`ArrowDown`,`ArrowRight`],"from-bottom":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-top":[`Home`,`PageDown`,`ArrowUp`,`ArrowLeft`]},Ii=`Slider`,[Li,Ri,zi]=Ci(Ii),[Bi,Vi]=Ar(Ii,[zi]),[Hi,Ui]=Bi(Ii),Wi=_.forwardRef(U(function(e,t){let{name:n,min:r=0,max:i=100,step:a=1,orientation:o=`horizontal`,disabled:s=!1,minStepsBetweenThumbs:c=0,defaultValue:l=[r],value:u,onValueChange:d=U(()=>{},`onValueChange`),onValueCommit:f=U(()=>{},`onValueCommit`),inverted:p=!1,form:m,...h}=e,g=_.useRef(new Set),v=_.useRef(0),y=_.useRef(!1),b=o===`horizontal`?qi:Ji,[x,ee]=_.useState(null),S=Er(t,ee),[C=[],w]=Vr({prop:u,defaultProp:l,onChange:U(e=>{[...g.current][v.current]?.focus({preventScroll:!0,focusVisible:y.current}),y.current=!1,d(e)},`onChange`)}),te=_.useRef(C),ne=_.useRef(C);_.useEffect(()=>{let e=m?x?.ownerDocument.getElementById(m):x?.closest(`form`);if(e instanceof HTMLFormElement){let t=U(()=>w(ne.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[x,m,w]);function T(e){E(e,fa(C,e))}U(T,`handleSlideStart`);function re(e){E(e,v.current)}U(re,`handleSlideMove`);function ie(){String(C)!==String(te.current)&&f(C)}U(ie,`handleSlideEnd`);function E(e,t,{commit:n}={commit:!1}){let o=_a(a),s=pr(va(Math.round((e-r)/a)*a+r,o),[r,i]);w((e=[])=>{let r=la(e,s,t);if(ha(r,c*a)){v.current=r.indexOf(s);let t=String(r)!==String(e);return t&&n&&f(r),t?r:e}return e})}return U(E,`updateValues`),(0,z.jsx)(Hi,{scope:e.__scopeSlider,name:n,disabled:s,min:r,max:i,valueIndexToChangeRef:v,thumbs:g.current,values:C,orientation:o,form:m,children:(0,z.jsx)(Li.Provider,{scope:e.__scopeSlider,children:(0,z.jsx)(Li.Slot,{scope:e.__scopeSlider,children:(0,z.jsx)(b,{"aria-disabled":s,"data-disabled":s?``:void 0,...h,ref:S,onPointerDown:_r(h.onPointerDown,()=>{s||(te.current=C,y.current=!1)}),min:r,max:i,inverted:p,onSlideStart:s?void 0:T,onSlideMove:s?void 0:re,onSlideEnd:s?void 0:ie,onHomeKeyDown:()=>{s||(y.current=!0,E(r,0,{commit:!0}))},onEndKeyDown:()=>{s||(y.current=!0,E(i,C.length-1,{commit:!0}))},onStepKeyDown:({event:e,direction:t})=>{if(!s){y.current=!0;let n=Ni.includes(e.key)||e.shiftKey&&Pi.includes(e.key)?10:1,i=v.current,o=C[i];E(ya(o,{min:r,step:a,direction:t,multiplier:n}),i,{commit:!0})}}})})})})},`Slider`)),[Gi,Ki]=Bi(Ii,{startEdge:`left`,endEdge:`right`,size:`width`,direction:1}),qi=_.forwardRef(U(function(e,t){let{min:n,max:r,dir:i,inverted:a,onSlideStart:o,onSlideMove:s,onSlideEnd:c,onStepKeyDown:l,...u}=e,[d,f]=_.useState(null),p=Er(t,f),m=_.useRef(void 0),h=Yr(i),g=h===`ltr`,v=g&&!a||!g&&a;function y(e){let t=m.current||d.getBoundingClientRect(),i=ga([0,t.width],v?[n,r]:[r,n]);return m.current=t,i(e-t.left)}return U(y,`getValueFromPointer`),(0,z.jsx)(Gi,{scope:e.__scopeSlider,startEdge:v?`left`:`right`,endEdge:v?`right`:`left`,direction:v?1:-1,size:`width`,children:(0,z.jsx)(Yi,{dir:h,"data-orientation":`horizontal`,...u,ref:p,style:{...u.style,"--radix-slider-thumb-transform":`translateX(-50%)`},onSlideStart:e=>{let t=y(e.clientX);o?.(t)},onSlideMove:e=>{let t=y(e.clientX);s?.(t)},onSlideEnd:()=>{m.current=void 0,c?.()},onStepKeyDown:e=>{let t=Fi[v?`from-left`:`from-right`].includes(e.key);l?.({event:e,direction:t?-1:1})}})})},`SliderHorizontal`)),Ji=_.forwardRef(U(function(e,t){let{min:n,max:r,inverted:i,onSlideStart:a,onSlideMove:o,onSlideEnd:s,onStepKeyDown:c,...l}=e,u=_.useRef(null),d=Er(t,u),f=_.useRef(void 0),p=!i;function m(e){let t=f.current||u.current.getBoundingClientRect(),i=ga([0,t.height],p?[r,n]:[n,r]);return f.current=t,i(e-t.top)}return U(m,`getValueFromPointer`),(0,z.jsx)(Gi,{scope:e.__scopeSlider,startEdge:p?`bottom`:`top`,endEdge:p?`top`:`bottom`,size:`height`,direction:p?1:-1,children:(0,z.jsx)(Yi,{"data-orientation":`vertical`,...l,ref:d,style:{...l.style,"--radix-slider-thumb-transform":`translateY(50%)`},onSlideStart:e=>{let t=m(e.clientY);a?.(t)},onSlideMove:e=>{let t=m(e.clientY);o?.(t)},onSlideEnd:()=>{f.current=void 0,s?.()},onStepKeyDown:e=>{let t=Fi[p?`from-bottom`:`from-top`].includes(e.key);c?.({event:e,direction:t?-1:1})}})})},`SliderVertical`)),Yi=_.forwardRef(U(function(e,t){let{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:o,onEndKeyDown:s,onStepKeyDown:c,...l}=e,u=Ui(Ii,n);return(0,z.jsx)(bi.span,{...l,ref:t,onKeyDown:_r(e.onKeyDown,e=>{e.key===`Home`?(o(e),e.preventDefault()):e.key===`End`?(s(e),e.preventDefault()):Ni.concat(Pi).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:_r(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),u.thumbs.has(t)?t.focus({preventScroll:!0,focusVisible:!1}):r(e)}),onPointerMove:_r(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:_r(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))})})},`SliderImpl`)),Xi=`SliderTrack`,Zi=_.forwardRef(U(function(e,t){let{__scopeSlider:n,...r}=e,i=Ui(Xi,n);return(0,z.jsx)(bi.span,{"data-disabled":i.disabled?``:void 0,"data-orientation":i.orientation,...r,ref:t})},`SliderTrack`)),Qi=`SliderRange`,$i=_.forwardRef(U(function(e,t){let{__scopeSlider:n,...r}=e,i=Ui(Qi,n),a=Ki(Qi,n),o=Er(t,_.useRef(null)),s=i.values.length,c=i.values.map(e=>ua(e,i.min,i.max)),l=s>1?Math.min(...c):0,u=100-Math.max(...c);return(0,z.jsx)(bi.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,...r,ref:o,style:{...e.style,[a.startEdge]:l+`%`,[a.endEdge]:u+`%`}})},`SliderRange`)),[ea,ta]=Bi(`SliderThumb`),na=`SliderThumbProvider`;function ra(e){let{__scopeSlider:t,name:n,children:r,internal_do_not_use_render:i}=e,a=Ui(na,t),o=Ri(t),[s,c]=_.useState(null),l=_.useMemo(()=>s?o().findIndex(e=>e.ref.current===s):-1,[o,s]),u=ti(s),d=!s||!!a.form||!!s.closest(`form`),f=a.values[l],p=n??(a.name?a.name+(a.values.length>1?`[]`:``):void 0),m=f===void 0?0:ua(f,a.min,a.max);_.useEffect(()=>{if(s)return a.thumbs.add(s),()=>{a.thumbs.delete(s)}},[s,a.thumbs]);let h={value:f,name:p,form:a.form,isFormControl:d,index:l,thumb:s,onThumbChange:c,percent:m,size:u};return(0,z.jsx)(ea,{scope:t,...h,children:ba(i)?i(h):r})}U(ra,`SliderThumbProvider`);var ia=`SliderThumbTrigger`,aa=_.forwardRef(U(function(e,t){let{__scopeSlider:n,...r}=e,i=Ui(ia,n),a=Ki(ia,n),{index:o,value:s,percent:c,size:l,onThumbChange:u}=ta(ia,n),d=Er(t,u),f=da(o,i.values.length),p=l?.[a.size],m=p?pa(p,c,a.direction):0;return(0,z.jsx)(`span`,{style:{transform:`var(--radix-slider-thumb-transform)`,position:`absolute`,[a.startEdge]:`calc(${c}% + ${m}px)`},children:(0,z.jsx)(Li.ItemSlot,{scope:n,children:(0,z.jsx)(bi.span,{role:`slider`,"aria-label":e[`aria-label`]||f,"aria-valuemin":i.min,"aria-valuenow":s,"aria-valuemax":i.max,"aria-orientation":i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,tabIndex:i.disabled?void 0:0,...r,ref:d,style:s===void 0?{display:`none`}:e.style,onFocus:_r(e.onFocus,()=>{i.valueIndexToChangeRef.current=o})})})})},`SliderThumbTrigger`)),oa=_.forwardRef(U(function(e,t){let{__scopeSlider:n,name:r,...i}=e;return(0,z.jsx)(ra,{__scopeSlider:n,name:r,internal_do_not_use_render:({index:e,isFormControl:r})=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(aa,{...i,ref:t,__scopeSlider:n}),r?(0,z.jsx)(ca,{__scopeSlider:n},e):null]})})},`SliderThumb`)),sa=`SliderBubbleInput`,ca=_.forwardRef(U(function({__scopeSlider:e,...t},n){let{value:r,name:i,form:a}=ta(sa,e),o=_.useRef(null),s=Er(o,n),c=Qr(r);return _.useEffect(()=>{let e=o.current;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set;if(c!==r&&n){let t=new Event(`input`,{bubbles:!0});n.call(e,r),e.dispatchEvent(t)}},[c,r]),(0,z.jsx)(bi.input,{style:{display:`none`},name:i,form:a,...t,ref:s,defaultValue:r})},`SliderBubbleInput`));function la(e=[],t,n){let r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}U(la,`getNextSortedValues`);function ua(e,t,n){return pr(100/(n-t)*(e-t),[0,100])}U(ua,`convertValueToPercentage`);function da(e,t){if(t>2)return`Value ${e+1} of ${t}`;if(t===2)return[`Minimum`,`Maximum`][e]}U(da,`getLabel`);function fa(e,t){if(e.length===1)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}U(fa,`getClosestValueIndex`);function pa(e,t,n){let r=e/2;return(r-ga([0,50],[0,r])(t)*n)*n}U(pa,`getThumbInBoundsOffset`);function ma(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}U(ma,`getStepsBetweenValues`);function ha(e,t){if(t>0){let n=ma(e);return Math.min(...n)>=t}return!0}U(ha,`hasMinStepsBetweenValues`);function ga(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}U(ga,`linearScale`);function _a(e){if(!Number.isFinite(e))return 0;let t=e.toString();if(t.includes(`e`)){let[e,n]=t.split(`e`),r=e.split(`.`)[1]||``,i=Number(n);return Math.max(0,r.length-i)}let n=t.split(`.`)[1];return n?n.length:0}U(_a,`getDecimalCount`);function va(e,t){let n=10**t;return Math.round(e*n)/n}U(va,`roundValue`);function ya(e,{min:t,step:n,direction:r,multiplier:i}){let a=_a(n),o=(e-t)/n,s=Math.round(o),c=va(s*n+t,a)===va(e,a),l;return l=c?s+i*r:r>0?Math.ceil(o):Math.floor(o),va(l*n+t,a)}U(ya,`getNextStepValue`);function ba(e){return typeof e==`function`}U(ba,`isFunction`);function xa({title:e,open:t,onToggle:n,children:r}){return(0,z.jsxs)(`section`,{className:`orc-section`,children:[(0,z.jsxs)(`button`,{type:`button`,className:`orc-section-head`,onClick:n,"aria-expanded":t,children:[(0,z.jsx)(`span`,{children:e}),(0,z.jsx)(ir,{className:Kn(`orc-section-chevron`,t&&`is-open`)})]}),t?(0,z.jsx)(`div`,{className:`orc-section-body`,children:r}):null]})}function Sa({label:e,value:t,min:n,max:r,step:i,onChange:a,unit:o}){let s=i<.01?3:i<1?2:0,c=`${t.toFixed(s)}${o??``}`;return(0,z.jsxs)(`div`,{className:`orc-slider`,children:[(0,z.jsxs)(`div`,{className:`orc-slider-head`,children:[(0,z.jsx)(`span`,{children:e}),(0,z.jsx)(`span`,{className:`orc-slider-value`,children:c})]}),(0,z.jsxs)(Wi,{className:`orc-slider-root`,min:n,max:r,step:i,value:[t],onValueChange:e=>a(e[0]??n),children:[(0,z.jsx)(Zi,{className:`orc-slider-track`,children:(0,z.jsx)($i,{className:`orc-slider-range`})}),(0,z.jsx)(oa,{className:`orc-slider-thumb`,"aria-label":e})]})]})}function Ca({label:e,hex:t,onChange:n}){return(0,z.jsxs)(`label`,{className:`orc-swatch`,children:[(0,z.jsx)(`input`,{type:`color`,value:t.toLowerCase(),"aria-label":e,onChange:e=>n(e.target.value.toUpperCase())}),(0,z.jsxs)(`span`,{className:`orc-swatch-meta`,children:[(0,z.jsx)(`span`,{className:`orc-swatch-label`,children:e}),(0,z.jsx)(`span`,{className:`orc-swatch-hex`,children:t})]})]})}function wa({value:e,options:t,ariaLabel:n,onChange:r}){return(0,z.jsx)(`div`,{className:`orc-segmented`,role:`radiogroup`,"aria-label":n,children:t.map(t=>(0,z.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e===t.value,className:Kn(`orc-segment`,e===t.value&&`is-active`),onClick:()=>r(t.value),children:t.label},t.value))})}function Ta({label:e,checked:t,onChange:n}){return(0,z.jsxs)(`label`,{className:`orc-toggle`,children:[(0,z.jsx)(`span`,{children:e}),(0,z.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":t,className:Kn(`orc-switch`,t&&`is-on`),onClick:()=>n(!t),children:(0,z.jsx)(`span`,{className:`orc-switch-knob`})})]})}var Ea=[{label:`中`,value:`zh`},{label:`EN`,value:`en`}],Da={zh:{siri:`Siri 波澜`,voiceWave:`声纹薄膜`,spectrum:`彩色声场`,aurora:`极光帷幕`,frost:`冰霜流体`,plasma:`神经电浆`,chrome:`液态铬`,opal:`虹彩欧泊`,blueDrop:`蓝晶液滴`,violetEmber:`紫焰流核`,refractiveBlob:`折射软体`,particleRibbon:`量子丝带`,chromaticMetal:`色差液态金属`},en:{siri:`Siri Wave`,voiceWave:`Voice Membrane`,spectrum:`Prismatic Field`,aurora:`Aurora Veil`,frost:`Frost Flow`,plasma:`Neural Plasma`,chrome:`Liquid Chrome`,opal:`Iridescent Opal`,blueDrop:`Crystal Drop`,violetEmber:`Violet Ember`,refractiveBlob:`Refractive Gel`,particleRibbon:`Particle Ribbons`,chromaticMetal:`Chromatic Metal`}},Oa={zh:{speed:`速度`,radius:`半径`,contourDeform:`轮廓形变`,zoom:`缩放`,warp:`扭曲`,ridgeAmt:`脊线`,sharp:`锐度`,bandDensity:`重复次数`,metalDepth:`金属深度`,metalRoughness:`表面粗糙度`,chromaticShift:`RGB 分离`,metalScale:`图案缩放`,metalStretch:`纵横拉伸`,metalAngle:`流带角度`,metalOffset:`图案偏移`,metalPhase:`循环相位`,metalEvolution:`演化幅度`,particleDensity:`粒子密度`,ribbonCount:`丝带层数`,ribbonWidth:`丝带宽度`,ribbonTwist:`扭转强度`,ribbonFold:`折叠幅度`,ribbonBreath:`呼吸幅度`,particleSize:`粒子尺寸`,particleBloom:`粒子辉光`,shade:`明暗`,exposure:`曝光`,sheen:`边缘高光`,gloss:`色散`,glassOpacity:`折射强度`,shellMidAlpha:`折射宽度`,shellEdgeAlpha:`边缘强度`,edgeSoftness:`边缘柔化`,edgeGlow:`外发光强度`},en:{speed:`Speed`,radius:`Radius`,contourDeform:`Contour Motion`,zoom:`Flow Scale`,warp:`Flow Distortion`,ridgeAmt:`Ridge Detail`,sharp:`Sharpness`,bandDensity:`Band Count`,metalDepth:`Metallic Depth`,metalRoughness:`Roughness`,chromaticShift:`RGB Split`,metalScale:`Pattern Scale`,metalStretch:`Aspect Stretch`,metalAngle:`Band Angle`,metalOffset:`Pattern Offset`,metalPhase:`Loop Phase`,metalEvolution:`Flow Evolution`,particleDensity:`Particle Density`,ribbonCount:`Ribbon Layers`,ribbonWidth:`Ribbon Width`,ribbonTwist:`Twist`,ribbonFold:`Folding`,ribbonBreath:`Breathing`,particleSize:`Particle Size`,particleBloom:`Particle Bloom`,shade:`Shading`,exposure:`Exposure`,sheen:`Rim Highlight`,gloss:`Dispersion`,glassOpacity:`Refraction Strength`,shellMidAlpha:`Refraction Width`,shellEdgeAlpha:`Edge Intensity`,edgeSoftness:`Edge Softness`,edgeGlow:`Outer Glow`}},ka={zh:{colorA:`颜色 A`,colorB:`颜色 B`,colorC:`颜色 C`,colorD:`颜色 D`,highlightColor:`提亮色`,shellInner:`折射底色`,shellMid:`冷色散`,shellEdge:`暖色散`,sheenColor:`主高光色`,specColor:`辅高光色`,canvasColor:`背景颜色`,glowColor:`外发光颜色`},en:{colorA:`Color A`,colorB:`Color B`,colorC:`Color C`,colorD:`Color D`,highlightColor:`Highlight Tint`,shellInner:`Refraction Base`,shellMid:`Cool Dispersion`,shellEdge:`Warm Dispersion`,sheenColor:`Key Highlight`,specColor:`Fill Highlight`,canvasColor:`Background`,glowColor:`Glow Color`}},Aa={zh:{documentTitle:`液态玻璃球编辑器`,presets:`效果预设`,animatedPresets:`动态预设`,orbControls:`球体参数`,collapsePresets:`收起预设面板`,expandPresets:`展开预设面板`,collapseControls:`收起参数面板`,expandControls:`展开参数面板`,resetControls:`重置全部参数`,previewMode:`预览模式`,switchPreviewMode:`切换预览模式`,orbMode:`球体`,sceneMode:`场景`,switchLanguage:`切换界面语言`,orbPreview:`液态玻璃球预览`,scenePreview:`实际场景预览`,staticOrbPreview:`液态玻璃球静态预览`,animatedOrbPreview:`动态液态玻璃球`,loadingOrb:`正在加载球体`,renderFallback:`WebGPU 不可用，当前显示静态预览`,renderErrorTitle:`WebGPU 渲染失败`,sceneText:e=>`场景文字：${e}`,copyCode:`复制代码`,viewSource:`在 GitHub 查看源码`,sceneSection:`场景预览`,displayText:`显示文字`,sceneTextLimit:`最多 20 个字符`,stateSection:`AI 状态`,orbState:`当前状态`,switchOrbState:`切换 AI 球状态`,idleState:`空闲`,thinkingState:`思考中`,activationDuration:`启动时长`,transitionDuration:`回落时长`,collapseSection:e=>`收起${e}`,expandSection:e=>`展开${e}`,editValue:e=>`编辑${e}数值`,selectColor:e=>`选择${e}`,hexValue:e=>`${e}十六进制值`,hexColor:`十六进制颜色`,colorSurface:`颜色饱和度和亮度`,colorChannel:`通道`,cssColorValue:`CSS 颜色值`,hue:`色相`,motionSection:`动态`,colorsSection:`颜色`,shapeSection:`形状动画`,glassSection:`玻璃罩`,enableGlass:`开启玻璃罩`,edgeSection:`边缘与外发光`,copyFailed:`复制失败`,copied:`已复制`,close:`关闭`,webCode:`Web 代码`,swiftCode:`SwiftUI 代码`},en:{documentTitle:`Liquid Orb Editor`,presets:`Presets`,animatedPresets:`Animated presets`,orbControls:`Orb Controls`,collapsePresets:`Collapse presets`,expandPresets:`Expand presets`,collapseControls:`Collapse controls`,expandControls:`Expand controls`,resetControls:`Reset all controls`,previewMode:`Preview`,switchPreviewMode:`Switch preview mode`,orbMode:`Orb`,sceneMode:`Scene`,switchLanguage:`Switch interface language`,orbPreview:`Liquid glass orb preview`,scenePreview:`In-context preview`,staticOrbPreview:`Static liquid glass orb preview`,animatedOrbPreview:`Animated liquid glass orb`,loadingOrb:`Loading orb`,renderFallback:`WebGPU is unavailable. Showing the fallback preview.`,renderErrorTitle:`WebGPU rendering failed`,sceneText:e=>`Scene text: ${e}`,copyCode:`Copy Code`,viewSource:`View source on GitHub`,sceneSection:`Scene Preview`,displayText:`Display Text`,sceneTextLimit:`Up to 20 characters`,stateSection:`AI State`,orbState:`Current State`,switchOrbState:`Switch AI orb state`,idleState:`Idle`,thinkingState:`Thinking`,activationDuration:`Activation Duration`,transitionDuration:`Settle Duration`,collapseSection:e=>`Collapse ${e}`,expandSection:e=>`Expand ${e}`,editValue:e=>`Edit ${e} value`,selectColor:e=>`Choose ${e}`,hexValue:e=>`${e} hex value`,hexColor:`Hex color`,colorSurface:`Color saturation and brightness`,colorChannel:`channel`,cssColorValue:`CSS color value`,hue:`Hue`,motionSection:`Motion`,colorsSection:`Color`,shapeSection:`Shape Motion`,glassSection:`Glass Shell`,enableGlass:`Enable Glass Shell`,edgeSection:`Edge & Glow`,copyFailed:`Copy Failed`,copied:`Copied`,close:`Close`,webCode:`Web code`,swiftCode:`SwiftUI code`}},ja={zh:{appName:`Apple Orc`,appTag:`液态玻璃球工作台`,embedIframe:`iframe 嵌入`,embedReact:`React 组件`,embedDropin:`项目内引用`,embedJson:`JSON 配置`,widgetHint:`把调好的球体嵌入其它网站或工作台。iframe 适合任意站点；JSON 与组件适合本仓库其它项目。`,hostApi:`宿主可通过 postMessage 切换 idle / thinking。`,originNote:`嵌入地址使用当前站点。部署后把域名换成你的公开地址即可。`,fallbackNote:`当前环境没有 WebGPU，已使用画布回退预览。`,gpuReady:`WebGPU 实时渲染`,shareLink:`复制分享链接`,linkCopied:`链接已复制`},en:{appName:`Apple Orc`,appTag:`Liquid glass orb workbench`,embedIframe:`iframe embed`,embedReact:`React embed`,embedDropin:`In-project import`,embedJson:`JSON config`,widgetHint:`Drop the tuned orb into another site or workbench. Use iframe for any page; JSON and the component for other projects in this repo.`,hostApi:`The host page can switch idle / thinking over postMessage.`,originNote:`Embed URLs use this origin. After deploy, swap in your public domain.`,fallbackNote:`WebGPU is unavailable here. Showing a canvas fallback preview.`,gpuReady:`Live WebGPU render`,shareLink:`Copy share link`,linkCopied:`Link copied`}},Ma=[`shellInner`,`shellMid`,`shellEdge`,`sheenColor`,`specColor`],Na=[`colorA`,`colorB`,`colorC`,`colorD`,`highlightColor`,`canvasColor`];function Pa(){let[e,t]=(0,_.useState)(`en`),[n,r]=(0,_.useState)(()=>({configuration:De(C.style),activeState:ve})),[i,a]=(0,_.useState)(`orb`),[o,s]=(0,_.useState)(w),[c,l]=(0,_.useState)(1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(`iframe`),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(`loading`),[y,b]=(0,_.useState)({scene:!0,state:!0,motion:!0,colors:!1,shape:!1,glass:!0,edge:!0}),x=(0,_.useRef)(null),S=Aa[e],te=ja[e],re=Oe(n.configuration,n.activeState),ie=(0,_.useRef)({state:n.activeState,params:re,activationDuration:n.configuration.activationDuration,transitionDuration:n.configuration.transitionDuration});ie.current={state:n.activeState,params:re,activationDuration:n.configuration.activationDuration,transitionDuration:n.configuration.transitionDuration},(0,_.useEffect)(()=>{t(Qe()),r(at()),a(tt()),s(nt())},[]),(0,_.useEffect)(()=>{$e(e),typeof document<`u`&&(document.documentElement.lang=e===`zh`?`zh-CN`:`en`)},[e]),(0,_.useEffect)(()=>{let e=window.setTimeout(()=>{st(n,i,o)},500);return()=>window.clearTimeout(e)},[n,i,o]),(0,_.useEffect)(()=>{let e=x.current;if(!e)return;let t=e=>{if(e.target instanceof Element&&e.target.closest(`[data-stage-controls]`))return;e.preventDefault();let t=le(-e.deltaY*.001,-.1,.1);l(e=>Math.round(le(e+t,.6,1.6)*100)/100)};return e.addEventListener(`wheel`,t,{passive:!1}),()=>e.removeEventListener(`wheel`,t)},[]);let E=(0,_.useCallback)((e,t)=>{r(n=>({...n,configuration:ke(n.configuration,n.activeState,e,t)}))},[]),D=(0,_.useCallback)(e=>{r(t=>({activeState:t.activeState,configuration:{...De(e),activationDuration:t.configuration.activationDuration,transitionDuration:t.configuration.transitionDuration}}))},[]),ae=(0,_.useCallback)(()=>{r({activeState:ve,configuration:De(C.style)}),s(w),l(1)},[]),oe=(0,_.useMemo)(()=>ot(n,i,o),[n,i,o]),O=typeof window>`u`?``:Ge(window.location.origin,`/Apple-orc/`),ue=(0,_.useMemo)(()=>Xe(n,O,oe,i,o),[n,oe,O,i,o]),M=(0,_.useCallback)(async(e,t)=>{try{await navigator.clipboard.writeText(e),h(t)}catch{h(`error`)}window.setTimeout(()=>h(null),1600)},[]);function N(t){let n=se.get(t);return!n||!j(n,re.style)?null:(0,z.jsx)(Sa,{label:Oa[e][t],value:re[t],min:n.min,max:n.max,step:n.step,onChange:e=>E(t,e)},t)}function P(t){return(0,z.jsx)(Ca,{label:ka[e][t],hex:re[t],onChange:e=>E(t,e)},t)}let de=e=>()=>{b(t=>({...t,[e]:!t[e]}))};return(0,z.jsxs)(`div`,{className:`orc-app`,children:[(0,z.jsx)(`div`,{className:`orc-bg`,"aria-hidden":`true`}),(0,z.jsx)(`aside`,{className:`orc-rail orc-rail-left`,children:(0,z.jsxs)(ur,{sheen:!1,radius:`1.5rem`,padding:`0.9rem`,className:`orc-panel`,children:[(0,z.jsx)(`div`,{className:`orc-panel-title`,children:S.presets}),(0,z.jsx)(`div`,{className:`orc-preset-grid`,role:`list`,children:ee.map(t=>(0,z.jsxs)(`button`,{type:`button`,role:`listitem`,"aria-pressed":re.style===t,className:Kn(`orc-preset`,re.style===t&&`is-active`),onClick:()=>D(t),"aria-label":Da[e][t],children:[(0,z.jsx)(`img`,{src:ce[t],alt:``,className:Kn(`orc-preset-thumb`,k.has(t)&&`is-compact`)}),(0,z.jsx)(`span`,{children:Da[e][t]})]},t))})]})}),(0,z.jsxs)(`section`,{ref:x,className:`orc-stage`,"data-preview-mode":i,"aria-label":i===`scene`?S.scenePreview:S.orbPreview,children:[(0,z.jsxs)(`div`,{className:`orc-stage-top`,"data-stage-controls":!0,children:[(0,z.jsx)(wa,{ariaLabel:S.switchLanguage,value:e,options:Ea,onChange:t}),(0,z.jsx)(wa,{ariaLabel:S.switchPreviewMode,value:i,options:[{label:S.orbMode,value:`orb`},{label:S.sceneMode,value:`scene`}],onChange:e=>{a(e),l(1)}})]}),(0,z.jsx)(`div`,{className:Kn(`orc-preview`,i===`scene`&&`is-scene`),style:{transform:`scale(${c})`},children:i===`scene`?(0,z.jsxs)(`div`,{className:`orc-scene-pill`,children:[(0,z.jsx)(`div`,{className:`orc-scene-pill-orb`,children:(0,z.jsx)(Jn,{getTarget:()=>ie.current,label:S.animatedOrbPreview,onStatus:v})}),(0,z.jsx)(`span`,{className:`orc-scene-pill-text`,children:o||`\xA0`})]}):(0,z.jsx)(`div`,{className:`orc-orb-frame`,children:(0,z.jsx)(Jn,{getTarget:()=>ie.current,label:S.animatedOrbPreview,onStatus:v})})}),g===`fallback`?(0,z.jsx)(`p`,{className:`orc-fallback-note`,children:te.fallbackNote}):null,(0,z.jsxs)(`div`,{className:`orc-stage-bottom`,"data-stage-controls":!0,children:[(0,z.jsxs)(`button`,{type:`button`,className:`orc-code-btn`,onClick:()=>d(!0),children:[(0,z.jsx)(ar,{size:16}),S.copyCode]}),(0,z.jsx)(`button`,{type:`button`,className:`orc-icon-btn`,onClick:()=>{let e=`${window.location.origin}${window.location.pathname}#${oe}`;M(e,`link`)},"aria-label":te.shareLink,children:(0,z.jsx)(sr,{size:16})})]})]}),(0,z.jsx)(`aside`,{className:`orc-rail orc-rail-right`,children:(0,z.jsxs)(ur,{sheen:!1,radius:`1.5rem`,padding:`0.85rem`,className:`orc-panel orc-controls`,children:[(0,z.jsxs)(`div`,{className:`orc-panel-title-row`,children:[(0,z.jsx)(`div`,{className:`orc-panel-title`,children:S.orbControls}),(0,z.jsx)(`button`,{type:`button`,className:`orc-icon-btn`,onClick:ae,"aria-label":S.resetControls,children:(0,z.jsx)(cr,{size:14})})]}),(0,z.jsxs)(`div`,{className:`orc-controls-scroll`,children:[i===`scene`?(0,z.jsx)(xa,{title:S.sceneSection,open:y.scene,onToggle:de(`scene`),children:(0,z.jsxs)(`label`,{className:`orc-field`,children:[(0,z.jsxs)(`span`,{className:`orc-field-label`,children:[S.displayText,(0,z.jsxs)(`span`,{children:[Array.from(o).length,`/20`]})]}),(0,z.jsx)(`input`,{className:`orc-text-input`,value:o,maxLength:40,onChange:e=>s(A(e.target.value))})]})}):null,(0,z.jsxs)(xa,{title:S.stateSection,open:y.state,onToggle:de(`state`),children:[(0,z.jsx)(wa,{ariaLabel:S.switchOrbState,value:n.activeState,options:[{label:S.idleState,value:`idle`},{label:S.thinkingState,value:`thinking`}],onChange:e=>r(t=>({...t,activeState:e}))}),(0,z.jsx)(Sa,{label:S.activationDuration,value:n.configuration.activationDuration,min:ne.min,max:ne.max,step:ne.step,unit:`s`,onChange:e=>r(t=>({...t,configuration:{...t.configuration,activationDuration:e}}))}),(0,z.jsx)(Sa,{label:S.transitionDuration,value:n.configuration.transitionDuration,min:T.min,max:T.max,step:T.step,unit:`s`,onChange:e=>r(t=>({...t,configuration:{...t.configuration,transitionDuration:e}}))})]}),(0,z.jsx)(xa,{title:S.motionSection,open:y.motion,onToggle:de(`motion`),children:N(`speed`)}),(0,z.jsxs)(xa,{title:S.colorsSection,open:y.colors,onToggle:de(`colors`),children:[(0,z.jsx)(`div`,{className:`orc-swatch-grid`,children:Na.map(P)}),N(`shade`),N(`exposure`)]}),(0,z.jsxs)(xa,{title:S.shapeSection,open:y.shape,onToggle:de(`shape`),children:[N(`radius`),N(`contourDeform`),N(`zoom`),N(`warp`),N(`ridgeAmt`),N(`sharp`),N(`metalDepth`),N(`metalRoughness`),N(`chromaticShift`),N(`metalScale`),N(`metalStretch`),N(`metalAngle`),N(`bandDensity`),N(`metalOffset`),N(`metalPhase`),N(`metalEvolution`),N(`particleDensity`),N(`ribbonCount`),N(`ribbonWidth`),N(`ribbonTwist`),N(`ribbonFold`),N(`ribbonBreath`),N(`particleSize`),N(`particleBloom`)]}),(0,z.jsxs)(xa,{title:S.glassSection,open:y.glass,onToggle:de(`glass`),children:[(0,z.jsx)(Ta,{label:S.enableGlass,checked:re.glassEnabled,onChange:e=>E(`glassEnabled`,e)}),re.glassEnabled?(0,z.jsxs)(z.Fragment,{children:[N(`glassOpacity`),N(`sheen`),N(`gloss`),N(`shellMidAlpha`),N(`shellEdgeAlpha`),(0,z.jsx)(`div`,{className:`orc-swatch-grid`,children:Ma.map(P)})]}):null]}),(0,z.jsxs)(xa,{title:S.edgeSection,open:y.edge,onToggle:de(`edge`),children:[N(`edgeSoftness`),N(`edgeGlow`),P(`glowColor`)]})]})]})}),u?(0,z.jsx)(`div`,{className:`orc-sheet-backdrop`,role:`presentation`,onClick:()=>d(!1),children:(0,z.jsx)(`div`,{className:`orc-sheet`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`orc-copy-title`,onClick:e=>e.stopPropagation(),children:(0,z.jsxs)(ur,{sheen:!1,radius:`1.6rem`,padding:`1.1rem`,className:`orc-sheet-card`,children:[(0,z.jsxs)(`div`,{className:`orc-sheet-head`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h2`,{id:`orc-copy-title`,children:S.copyCode}),(0,z.jsx)(`p`,{children:te.widgetHint})]}),(0,z.jsx)(`button`,{type:`button`,className:`orc-icon-btn`,onClick:()=>d(!1),"aria-label":S.close,children:(0,z.jsx)(lr,{size:16})})]}),(0,z.jsx)(`div`,{className:`orc-sheet-tabs`,children:[[`iframe`,te.embedIframe],[`react`,te.embedReact],[`dropin`,te.embedDropin],[`json`,te.embedJson],[`web`,S.webCode],[`swift`,S.swiftCode]].map(([e,t])=>(0,z.jsx)(`button`,{type:`button`,className:Kn(`orc-tab`,f===e&&`is-active`),onClick:()=>p(e),children:t},e))}),(0,z.jsx)(`pre`,{className:`orc-code`,children:(0,z.jsx)(`code`,{children:ue[f]})}),(0,z.jsxs)(`div`,{className:`orc-sheet-actions`,children:[(0,z.jsx)(`p`,{className:`orc-sheet-hint`,children:te.hostApi}),(0,z.jsxs)(`button`,{type:`button`,className:`orc-code-btn`,onClick:()=>void M(ue[f],f),children:[(0,z.jsx)(or,{size:16}),m===`error`?S.copyFailed:m===f?S.copied:S.copyCode]})]})]})})}):null,m===`link`?(0,z.jsx)(`div`,{className:`orc-toast`,role:`status`,children:te.linkCopied}):null]})}function Fa(e){return/(?:^|\/)embed(?:\.html)?\/?$/.test(e)}(0,v.createRoot)(document.getElementById(`root`)).render((0,z.jsx)(_.StrictMode,{children:Fa(window.location.pathname)?(0,z.jsx)(Yn,{}):(0,z.jsx)(Pa,{})}));
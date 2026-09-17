var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return ee(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var D=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function k(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,re(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(D,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(D,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=re(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=re(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return re(k(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var A=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},j={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=j,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,A)}catch(e){A(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&O(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function te(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&O(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,D=ne.port2;ne.port1.onmessage=te,E=function(){D.postMessage(null)}}else E=function(){_(te,0)};function O(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,O(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),D=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function k(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var re=Symbol.for(`react.client.reference`);function ie(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?ie(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var ae=Array.isArray,A=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},se=[],ce=-1;function M(e){return{current:e}}function N(e){0>ce||(e.current=se[ce],se[ce]=null,ce--)}function P(e,t){ce++,se[ce]=e.current,e.current=t}var le=M(null),F=M(null),ue=M(null),de=M(null);function fe(e,t){switch(P(ue,t),P(F,e),P(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}N(le),P(le,e)}function I(){N(le),N(F),N(ue)}function pe(e){e.memoizedState!==null&&P(de,e);var t=le.current,n=Hd(t,e.type);t!==n&&(P(F,e),P(le,n))}function me(e){F.current===e&&(N(le),N(F)),de.current===e&&(N(de),Qf._currentValue=oe)}var he,ge;function _e(e){if(he===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);he=t&&t[1]||``,ge=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+he+e+ge}var ve=!1;function ye(e,t){if(!e||ve)return``;ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?_e(n):``}function be(e,t){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e(`Lazy`);case 13:return e.child!==t&&t!==null?_e(`Suspense Fallback`):_e(`Suspense`);case 19:return _e(`SuspenseList`);case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return _e(`Activity`);default:return``}}function xe(e){try{var t=``,n=null;do t+=be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Se=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Je(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ye(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Ze(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=j.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ot(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var st=Math.random().toString(36).slice(2),ct=`__reactFiber$`+st,lt=`__reactProps$`+st,ut=`__reactContainer$`+st,dt=`__reactEvents$`+st,ft=`__reactListeners$`+st,pt=`__reactHandles$`+st,mt=`__reactResources$`+st,ht=`__reactMarker$`+st;function gt(e){delete e[ct],delete e[lt],delete e[dt],delete e[ft],delete e[pt]}function _t(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ct])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[ct]||e[ut]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function bt(e){var t=e[mt];return t||=e[mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[ht]=!0}var L=new Set,St={};function Ct(e,t){wt(e,t),wt(e+`Capture`,t)}function wt(e,t){for(St[e]=t,e=0;e<t.length;e++)L.add(t[e])}var Tt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Et={},Dt={};function Ot(e){return Se.call(Dt,e)?!0:Se.call(Et,e)?!1:Tt.test(e)?Dt[e]=!0:(Et[e]=!0,!1)}function kt(e,t,n){if(Ot(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function At(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Mt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Nt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Pt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){if(!e._valueTracker){var t=Nt(e)?`checked`:`value`;e._valueTracker=Pt(e,t,``+e[t])}}function It(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Nt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Lt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Rt=/[\n"\\]/g;function zt(e){return e.replace(Rt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Bt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Mt(t)):e.value!==``+Mt(t)&&(e.value=``+Mt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ht(e,o,Mt(n)):Ht(e,o,Mt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Mt(s):e.removeAttribute(`name`)}function Vt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ft(e);return}n=n==null?``:``+Mt(n),t=t==null?n:``+Mt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ft(e)}function Ht(e,t,n){t===`number`&&Lt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ut(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wt(e,t,n){if(t!=null&&(t=``+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Mt(n)}function Gt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ae(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Mt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ft(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Jt(e,o,t[o])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Zt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function en(){}var tn=null;function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,an=null;function on(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[lt]||null;if(!a)throw Error(i(90));Bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&It(r)}break a;case`textarea`:Wt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}}}var sn=!1;function cn(e,t,n){if(sn)return e(t,n);sn=!0;try{return e(t)}finally{if(sn=!1,(rn!==null||an!==null)&&(bu(),rn&&(t=rn,e=an,an=rn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[lt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var un=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),dn=!1;if(un)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){dn=!0}}),window.addEventListener(`test`,fn,fn),window.removeEventListener(`test`,fn,fn)}catch{dn=!1}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function R(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=R(bn),Sn=h({},bn,{view:0,detail:0}),Cn=R(Sn),wn,Tn,En,Dn=h({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=R(Dn),z=R(h({},Dn,{dataTransfer:0})),kn=R(h({},Sn,{relatedTarget:0})),An=R(h({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),jn=R(h({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Mn=R(h({},bn,{data:0})),Nn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Pn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Fn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function In(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fn[e])?!!t[e]:!1}function Ln(){return In}var Rn=R(h({},Sn,{key:function(e){if(e.key){var t=Nn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Pn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),zn=R(h({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),B=R(h({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),Bn=R(h({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Vn=R(h({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Hn=R(h({},bn,{newState:0,oldState:0})),Un=[9,13,27,32],Wn=un&&`CompositionEvent`in window,Gn=null;un&&`documentMode`in document&&(Gn=document.documentMode);var Kn=un&&`TextEvent`in window&&!Gn,V=un&&(!Wn||Gn&&8<Gn&&11>=Gn),qn=` `,Jn=!1;function Yn(e,t){switch(e){case`keyup`:return Un.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Xn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Zn=!1;function Qn(e,t){switch(e){case`compositionend`:return Xn(t);case`keypress`:return t.which===32?(Jn=!0,qn):null;case`textInput`:return e=t.data,e===qn&&Jn?null:e;default:return null}}function $n(e,t){if(Zn)return e===`compositionend`||!Wn&&Yn(e,t)?(e=gn(),hn=mn=pn=null,Zn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return V&&t.locale!==`ko`?null:t.data;default:return null}}var er={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!er[e.type]:t===`textarea`}function nr(e,t,n,r){rn?an?an.push(r):an=[r]:rn=r,t=Ed(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var rr=null,ir=null;function ar(e){yd(e,0)}function or(e){if(It(yt(e)))return e}function sr(e,t){if(e===`change`)return t}var cr=!1;if(un){var lr;if(un){var ur=`oninput`in document;if(!ur){var dr=document.createElement(`div`);dr.setAttribute(`oninput`,`return;`),ur=typeof dr.oninput==`function`}lr=ur}else lr=!1;cr=lr&&(!document.documentMode||9<document.documentMode)}function fr(){rr&&(rr.detachEvent(`onpropertychange`,H),ir=rr=null)}function H(e){if(e.propertyName===`value`&&or(ir)){var t=[];nr(t,ir,e,nn(e)),cn(ar,t)}}function pr(e,t,n){e===`focusin`?(fr(),rr=t,ir=n,rr.attachEvent(`onpropertychange`,H)):e===`focusout`&&fr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return or(ir)}function hr(e,t){if(e===`click`)return or(t)}function gr(e,t){if(e===`input`||e===`change`)return or(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Se.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function Sr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lt(e.document)}return t}function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Tr=un&&`documentMode`in document&&11>=document.documentMode,Er=null,Dr=null,Or=null,kr=!1;function Ar(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kr||Er==null||Er!==Lt(r)||(r=Er,`selectionStart`in r&&wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&yr(Or,r)||(Or=r,r=Ed(Dr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Mr={animationend:jr(`Animation`,`AnimationEnd`),animationiteration:jr(`Animation`,`AnimationIteration`),animationstart:jr(`Animation`,`AnimationStart`),transitionrun:jr(`Transition`,`TransitionRun`),transitionstart:jr(`Transition`,`TransitionStart`),transitioncancel:jr(`Transition`,`TransitionCancel`),transitionend:jr(`Transition`,`TransitionEnd`)},Nr={},Pr={};un&&(Pr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),`TransitionEvent`in window||delete Mr.transitionend.transition);function Fr(e){if(Nr[e])return Nr[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pr)return Nr[e]=t[n];return e}var Ir=Fr(`animationend`),Lr=Fr(`animationiteration`),Rr=Fr(`animationstart`),zr=Fr(`transitionrun`),Br=Fr(`transitionstart`),Vr=Fr(`transitioncancel`),Hr=Fr(`transitionend`),Ur=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){Ur.set(e,t),Ct(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},qr=[],Jr=0,Yr=0;function Xr(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=qr[t];qr[t++]=null;var r=qr[t];qr[t++]=null;var i=qr[t];qr[t++]=null;var a=qr[t];if(qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ei(n,i,a)}}function Zr(e,t,n,r){qr[Jr++]=e,qr[Jr++]=t,qr[Jr++]=n,qr[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qr(e,t,n,r){return Zr(e,t,n,r),ti(e)}function $r(e,t){return Zr(e,null,null,t),ti(e)}function ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ti(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,r){return new ri(e,t,n,r)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ai(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,le.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=ii(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return li(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ii(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ii(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=ii(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ii(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=ii(7,e,r,t),e.lanes=n,e}function ui(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function di(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function fi(e,t,n){return t=ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pi=new WeakMap;function mi(e,t){if(typeof e==`object`&&e){var n=pi.get(e);return n===void 0?(t={value:e,source:t,stack:xe(t)},pi.set(e,t),t):n}return{value:e,source:t,stack:xe(t)}}var hi=[],gi=0,_i=null,vi=0,yi=[],bi=0,xi=null,Si=1,Ci=``;function wi(e,t){hi[gi++]=vi,hi[gi++]=_i,_i=e,vi=t}function Ti(e,t,n){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,xi=e;var r=Si;e=Ci;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Si=1<<32-ze(t)+i|n<<i|r,Ci=a+e}else Si=1<<a|n<<i|r,Ci=e}function Ei(e){e.return!==null&&(wi(e,1),Ti(e,1,0))}function Di(e){for(;e===_i;)_i=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null;for(;e===xi;)xi=yi[--bi],yi[bi]=null,Ci=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null}function Oi(e,t){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,Si=t.id,Ci=t.overflow,xi=e}var ki=null,Ai=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(mi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ct]=e,t[lt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=en),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:ki=ki.return}}function Li(e){if(e!==ki)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&Ai&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else t===27?(t=Ai,Zd(e.type)?(e=lf,lf=null,Ai=e):Ai=t):Ai=ki?cf(e.stateNode.nextSibling):null;return!0}function Ri(){Ai=ki=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=M(null),Hi=null,Ui=null;function Wi(e,t,n){P(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,N(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===de.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function W(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var aa=null,oa=0,sa=0,ca=null;function la(e,t){if(aa===null){var n=aa=[];oa=0,sa=dd(),ca={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return oa++,t.then(ua,ua),t}function ua(){if(--oa===0&&aa!==null){ca!==null&&(ca.status=`fulfilled`);var e=aa;aa=null,sa=0,ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function da(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var fa=A.S;A.S=function(e,t){eu=De(),typeof t==`object`&&t&&typeof t.then==`function`&&la(e,t),fa!==null&&fa(e,t)};var pa=M(null);function ma(){var e=pa.current;return e===null?Rl.pooledCache:e}function ha(e,t){t===null?P(pa,pa.current):P(pa,t.pool)}function ga(){var e=ma();return e===null?null:{parent:ra._currentValue,pool:e}}var _a=Error(i(460)),va=Error(i(474)),ya=Error(i(542)),ba={then:function(){}};function xa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Sa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(en,en),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ea(e),e;default:if(typeof t.status==`string`)t.then(en,en);else{if(e=Rl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ea(e),e}throw wa=t,_a}}function Ca(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(wa=e,_a):e}}var wa=null;function Ta(){if(wa===null)throw Error(i(459));var e=wa;return wa=null,e}function Ea(e){if(e===_a||e===ya)throw Error(i(483))}var Da=null,Oa=0;function ka(e){var t=Oa;return Oa+=1,Da===null&&(Da=[]),Sa(Da,e,t)}function Aa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ja(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ma(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Ca(i)===t.type)?(t=a(t,n.props),Aa(t,n),t.return=e,t):(t=ci(n.type,n.key,n.props,null,e.mode,r),Aa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ci(t.type,t.key,t.props,null,e.mode,n),Aa(n,t),n.return=e,n;case v:return t=fi(t,e.mode,n),t.return=e,t;case E:return t=Ca(t),f(e,t,n)}if(ae(t)||k(t))return t=li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ka(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);ja(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Ca(n),p(e,t,n,r)}if(ae(n)||k(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ka(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);ja(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Ca(r),m(e,t,n,r,i)}if(ae(r)||k(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ka(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);ja(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&wi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&wi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Ca(l)===r.type){n(e,r.sibling),c=a(r,o.props),Aa(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=li(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ci(o.type,o.key,o.props,null,e.mode,c),Aa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=fi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Ca(o),b(e,r,o,c)}if(ae(o))return h(e,r,o,c);if(k(o)){if(l=k(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ka(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);ja(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ui(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Oa=0;var i=b(e,t,n,r);return Da=null,i}catch(t){if(t===_a||t===ya)throw t;var a=ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Na=Ma(!0),Pa=Ma(!1),Fa=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ti(e),ei(e,null,n),t}return Zr(e,r,t,n),ti(e)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ha=!1;function Ua(){if(Ha){var e=ca;if(e!==null)throw e}}function Wa(e,t,n,r){Ha=!1;var i=e.updateQueue;Fa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===sa&&(Ha=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Fa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ga(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ka(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ga(n[e],t)}var qa=M(null),Ja=M(0);function Ya(e,t){e=Ul,P(Ja,e),P(qa,t),Ul=e|t.baseLanes}function Xa(){P(Ja,Ul),P(qa,qa.current)}function Za(){Ul=Ja.current,N(qa),N(Ja)}var Qa=M(null),$a=null;function eo(e){var t=e.alternate;P(ao,ao.current&1),P(Qa,e),$a===null&&(t===null||qa.current!==null||t.memoizedState!==null)&&($a=e)}function to(e){P(ao,ao.current),P(Qa,e),$a===null&&($a=e)}function no(e){e.tag===22?(P(ao,ao.current),P(Qa,e),$a===null&&($a=e)):ro(e)}function ro(){P(ao,ao.current),P(Qa,Qa.current)}function io(e){N(Qa),$a===e&&($a=null),N(ao)}var ao=M(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=0,G=null,K=null,co=null,lo=!1,uo=!1,fo=!1,po=0,mo=0,ho=null,go=0;function _o(){throw Error(i(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,i,a){return so=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Is:Ls,fo=!1,a=n(r,i),fo=!1,uo&&(a=xo(t,n,r,i)),bo(e),a}function bo(e){A.H=Fs;var t=K!==null&&K.next!==null;if(so=0,co=K=G=null,lo=!1,mo=0,ho=null,t)throw Error(i(300));e===null||ec||(e=e.dependencies,e!==null&&Yi(e)&&(ec=!0))}function xo(e,t,n,r){G=e;var a=0;do{if(uo&&(ho=null),mo=0,uo=!1,25<=a)throw Error(i(301));if(a+=1,co=K=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=Rs,o=t(n,r)}while(uo);return o}function So(){var e=A.H,t=e.useState()[0];return t=typeof t.then==`function`?ko(t):t,e=e.useState()[0],(K===null?null:K.memoizedState)!==e&&(G.flags|=1024),t}function Co(){var e=po!==0;return po=0,e}function wo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function To(e){if(lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lo=!1}so=0,co=K=G=null,uo=!1,mo=po=0,ho=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?G.memoizedState=co=e:co=co.next=e,co}function Do(){if(K===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=K.next;var t=co===null?G.memoizedState:co.next;if(t!==null)co=t,K=e;else{if(e===null)throw G.alternate===null?Error(i(467)):Error(i(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},co===null?G.memoizedState=co=e:co=co.next=e}return co}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var t=mo;return mo+=1,ho===null&&(ho=[]),e=Sa(ho,e,t),t=G,(co===null?t.memoizedState:co.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Is:Ls),e}function Ao(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ko(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function jo(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=D;return t.index++,n}function Mo(e,t){return typeof t==`function`?t(e):t}function No(e){return Po(Do(),K,e)}function Po(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(so&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===sa&&(d=!0);else if((so&p)===p){u=u.next,p===sa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,Gl|=p;f=u.action,fo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!vr(o,e.memoizedState)&&(ec=!0,d&&(n=ca,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fo(e){var t=Do(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);vr(o,t.memoizedState)||(ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Io(e,t,n){var r=G,a=Do(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!vr((K||a).memoizedState,n);if(s&&(a.memoizedState=n,ec=!0),a=a.queue,ss(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,a,n,t),null),Rl===null)throw Error(i(349));o||so&127||Lo(r,t,n)}return n}function Lo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=Oo(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ro(e,t,n,r){t.value=n,t.getSnapshot=r,Bo(t)&&Vo(e)}function zo(e,t,n){return n(function(){Bo(t)&&Vo(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function Vo(e){var t=$r(e,2);t!==null&&hu(t,e,2)}function Ho(e){var t=Eo();if(typeof e==`function`){var n=e;if(e=n(),fo){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t}function Uo(e,t,n,r){return e.baseState=n,Po(e,K,typeof r==`function`?r:Mo)}function Wo(e,t,n,r,a){if(Ms(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};A.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Go(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Go(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};A.T=o;try{var s=n(i,r),c=A.S;c!==null&&c(o,s),Ko(e,t,s)}catch(n){Jo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),A.T=a}}else try{a=n(i,r),Ko(e,t,a)}catch(n){Jo(e,t,n)}}function Ko(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){qo(e,t,n)},function(n){return Jo(e,t,n)}):qo(e,t,n)}function qo(e,t,n){t.status=`fulfilled`,t.value=n,Yo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Go(e,n)))}function Jo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Yo(t),t=t.next;while(t!==r)}e.action=null}function Yo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xo(e,t){return t}function Zo(e,t){if(U){var n=Rl.formState;if(n!==null){a:{var r=G;if(U){if(Ai){b:{for(var i=Ai,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ai=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Eo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},n.queue=r,n=ks.bind(null,G,r),r.dispatch=n,r=Ho(!1),a=js.bind(null,G,!1,r.queue),r=Eo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Wo.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Qo(e){return $o(Do(),K,e)}function $o(e,t,n){if(t=Po(e,t,Xo)[0],e=No(Mo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ko(t)}catch(e){throw e===_a?ya:e}else r=t;t=Do();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,ns(9,{destroy:void 0},es.bind(null,i,n),null)),[r,a,e]}function es(e,t){e.action=t}function ts(e){var t=Do(),n=K;if(n!==null)return $o(t,n,e);Do(),t=t.memoizedState,n=Do();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ns(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=Oo(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function rs(){return Do().memoizedState}function is(e,t,n,r){var i=Eo();G.flags|=e,i.memoizedState=ns(1|t,{destroy:void 0},n,r===void 0?null:r)}function as(e,t,n,r){var i=Do();r=r===void 0?null:r;var a=i.memoizedState.inst;K!==null&&r!==null&&vo(r,K.memoizedState.deps)?i.memoizedState=ns(t,a,n,r):(G.flags|=e,i.memoizedState=ns(1|t,a,n,r))}function os(e,t){is(8390656,8,e,t)}function ss(e,t){as(2048,8,e,t)}function cs(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=Oo(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ls(e){var t=Do().memoizedState;return cs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function us(e,t){return as(4,2,e,t)}function ds(e,t){return as(4,4,e,t)}function fs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ps(e,t,n){n=n==null?null:n.concat([e]),as(4,4,fs.bind(null,t,e),n)}function ms(){}function hs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&vo(t,r[1]))return r[0];if(r=e(),fo){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function _s(e,t,n){return n===void 0||so&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),G.lanes|=e,Gl|=e,n)}function vs(e,t,n,r){return vr(n,t)?n:qa.current===null?!(so&42)||so&1073741824&&!(Y&261930)?(ec=!0,e.memoizedState=n):(e=mu(),G.lanes|=e,Gl|=e,t):(e=_s(e,n,r),vr(e,t)||(ec=!0),e)}function ys(e,t,n,r,i){var a=j.p;j.p=a!==0&&8>a?a:8;var o=A.T,s={};A.T=s,js(e,!1,t,n);try{var c=i(),l=A.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?As(e,t,da(c,r),pu(e)):As(e,t,r,pu(e))}catch(n){As(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{j.p=a,o!==null&&s.types!==null&&(o.types=s.types),A.T=o}}function bs(){}function xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ss(e).queue;ys(e,a,t,oe,n===null?bs:function(){return Cs(e),n(r)})}function Ss(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cs(e){var t=Ss(e);t.next===null&&(t=e.alternate.memoizedState),As(e,t.next.queue,{},pu())}function ws(){return Zi(Qf)}function Ts(){return Do().memoizedState}function Es(){return Do().memoizedState}function Ds(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ra(n);var r=za(t,e,n);r!==null&&(hu(r,t,n),Ba(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function Os(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e)?Ns(t,n):(n=Qr(e,t,n,r),n!==null&&(hu(n,e,r),Ps(n,t,r)))}function ks(e,t,n){As(e,t,n,pu())}function As(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Ns(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Zr(e,t,i,0),Rl===null&&Xr(),!1}catch{}if(n=Qr(e,t,i,r),n!==null)return hu(n,e,r),Ps(n,t,r),!0}return!1}function js(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(i(479))}else t=Qr(e,n,r,2),t!==null&&hu(t,e,2)}function Ms(e){var t=e.alternate;return e===G||t!==null&&t===G}function Ns(e,t){uo=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}var Fs={readContext:Zi,use:Ao,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o};Fs.useEffectEvent=_o;var Is={readContext:Zi,use:Ao,useCallback:function(e,t){return Eo().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:os,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),is(4194308,4,fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){is(4,2,e,t)},useMemo:function(e,t){var n=Eo();t=t===void 0?null:t;var r=e();if(fo){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo();if(n!==void 0){var i=n(t);if(fo){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Os.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Eo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ho(e);var t=e.queue,n=ks.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ms,useDeferredValue:function(e,t){return _s(Eo(),e,t)},useTransition:function(){var e=Ho(!1);return e=ys.bind(null,G,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,a=Eo();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Rl===null)throw Error(i(349));Y&127||Lo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,os(zo.bind(null,r,o,e),[e]),r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Eo(),t=Rl.identifierPrefix;if(U){var n=Ci,r=Si;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=po++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:Zo,useActionState:Zo,useOptimistic:function(e){var t=Eo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Eo().memoizedState=Ds.bind(null,G)},useEffectEvent:function(e){var t=Eo(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ls={readContext:Zi,use:Ao,useCallback:hs,useContext:Zi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:No,useRef:rs,useState:function(){return No(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){return vs(Do(),K.memoizedState,e,t)},useTransition:function(){var e=No(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){return Uo(Do(),K,e,t)},useMemoCache:jo,useCacheRefresh:Es};Ls.useEffectEvent=ls;var Rs={readContext:Zi,use:Ao,useCallback:hs,useContext:Zi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Fo,useRef:rs,useState:function(){return Fo(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){var n=Do();return K===null?_s(n,e,t):vs(n,K.memoizedState,e,t)},useTransition:function(){var e=Fo(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){var n=Do();return K===null?(n.baseState=e,[e,n.queue.dispatch]):Uo(n,K,e,t)},useMemoCache:jo,useCacheRefresh:Es};Rs.useEffectEvent=ls;function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ra(r);i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(hu(t,e,r),Ba(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ra(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(hu(t,e,r),Ba(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ra(n);r.tag=2,t!=null&&(r.callback=t),t=za(e,r,n),t!==null&&(hu(t,e,n),Ba(t,e,n))}};function Vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ws(e){Kr(e)}function Gs(e){console.error(e)}function Ks(e){Kr(e)}function qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Js(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){qs(e,t)},n}function Xs(e){return e=Ra(e),e.tag=3,e}function Zs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Js(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Js(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=Qa.current,n!==null){switch(n.tag){case 31:case 13:return $a===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ba?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ba?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=Qa.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(mi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=mi(r,n),a=Ys(e.stateNode,r,a),Va(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(mi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=mi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ys(n.stateNode,r,e),Va(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xs(a),Zs(a,e,n,r),Va(n,a),!1}n=n.return}while(n!==null);return!1}var $s=Error(i(461)),ec=!1;function tc(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Na(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=yo(e,t,n,o,a,i),s=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(U&&s&&Ei(t),t.flags|=1,tc(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ic(e,t,a,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return Ec(e,t,i)}return t.flags|=1,e=oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref){if(ec=!1,t.pendingProps=r=a,Dc(e,i))e.flags&131072&&(ec=!0);else return t.lanes=e.lanes,Ec(e,t,i)}}return fc(e,t,n,r,i)}function ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return sc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ha(t,a===null?null:a.cachePool),a===null?Xa():Ya(t,a),no(t);else return r=t.lanes=536870912,sc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ha(t,null),Xa(),ro(t)):(ha(t,a.cachePool),Ya(t,a),ro(t),t.memoizedState=null);return tc(e,t,i,n),t.child}function oc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sc(e,t,n,r,i){var a=ma();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ha(t,null),Xa(),no(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function cc(e,t){return t=xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lc(e,t,n){return Na(t,e.child,null,n),e=cc(t,t.pendingProps),e.flags|=2,io(t),t.memoizedState=null,e}function uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=cc(t,r),t.lanes=536870912,oc(null,e);if(to(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return cc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(to(t),a){if(t.flags&256)t.flags&=-257,t=lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ec||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,ec||a){if(r=Rl,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,$r(e,s),hu(r,e,s),$s;Du(),t=lc(e,t,n)}else e=o.treeContext,Ai=cf(s.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=cc(t,r),t.flags|=4096;return t}return e=oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,r,i){return Xi(t),n=yo(e,t,n,r,void 0,i),r=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(U&&r&&Ei(t),t.flags|=1,tc(e,t,n,i),t.child)}function pc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=xo(t,r,n,i),bo(e),r=Co(),e!==null&&!ec?(wo(e,t,a),Ec(e,t,a)):(U&&r&&Ei(t),t.flags|=1,tc(e,t,n,a),t.child)}function mc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ni,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ia(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Bs.enqueueReplaceState(a,a.state,null),Wa(t,r,a,i),Ua(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Us(n,s);a.props=c;var l=a.context,u=n.contextType;o=ni,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Hs(t,a,r,o),Fa=!1;var f=t.memoizedState;a.state=f,Wa(t,r,a,i),Ua(),l=t.memoizedState,s||f!==l||Fa?(typeof d==`function`&&(zs(t,n,d,r),l=t.memoizedState),(c=Fa||Vs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,La(e,t),o=t.memoizedProps,u=Us(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ni,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Hs(t,a,r,c),Fa=!1,f=t.memoizedState,a.state=f,Wa(t,r,a,i),Ua();var p=t.memoizedState;o!==d||f!==p||Fa||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(zs(t,n,s,r),p=t.memoizedState),(u=Fa||Vs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,dc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Na(t,e.child,null,i),t.child=Na(t,null,n,i)):tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ec(e,t,i),e}function hc(e,t,n,r){return Ri(),t.flags|=256,tc(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:ga()}}function vc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function yc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(ao.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(U){if(a?eo(t):ro(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ro(t),a=t.mode,c=xc({mode:`hidden`,children:c},a),r=li(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(null,r)):(eo(t),bc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(eo(t),t.flags&=-257,t=Sc(e,t,n)):t.memoizedState===null?(ro(t),c=r.fallback,a=t.mode,r=xc({mode:`visible`,children:r.children},a),c=li(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Na(t,e.child,null,n),r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,t=oc(null,r)):(ro(t),t.child=e.child,t.flags|=128,t=null);else if(eo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Sc(e,t,n)}else if(ec||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,ec||s){if(s=Rl,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,$r(e,r),hu(s,e,r),$s;af(c)||Du(),t=Sc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ai=cf(c.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=bc(t,r.children),t.flags|=4096);return t}return a?(ro(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=oi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=li(c,a,n,null),c.flags|=2):c=oi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,oc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a===null?a=ga():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(e.child,r)):(eo(t),n=e.child,e=n.sibling,n=oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function bc(e,t){return t=xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function Sc(e,t,n){return Na(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function wc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ao.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,P(ao,o),tc(e,t,r,n),r=U?vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,a,r);break;case`together`:wc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Yi(e)))}function Oc(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:pe(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,to(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(eo(t),e=Ec(e,t,n),e===null?null:e.sibling):yc(e,t,n):(eo(t),t.flags|=128,null);eo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(ao,ao.current),r)break;return null;case 22:return t.lanes=0,ac(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Ec(e,t,n)}function kc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ec=!0;else{if(!Dc(e,n)&&!(t.flags&128))return ec=!1,Oc(e,t,n);ec=!!(e.flags&131072)}}else ec=!1,U&&t.flags&1048576&&Ti(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ca(t.elementType),t.type=e,typeof e==`function`)ai(e)?(r=Us(e,r),t.tag=1,t=mc(null,t,e,r,n)):(t.tag=0,t=fc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=nc(null,t,e,r,n);break a}if(a===te){t.tag=14,t=rc(null,t,e,r,n);break a}}throw t=ie(e)||e,Error(i(306,t,``))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Us(r,t.pendingProps),mc(e,t,r,a,n);case 3:a:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,La(e,t),Wa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Ua(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=hc(e,t,r,n);break a}if(r!==a){a=mi(Error(i(424)),t),Bi(a),t=hc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ai=cf(e.firstChild),ki=t,U=!0,ji=null,Mi=!0,n=Pa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Ec(e,t,n);break a}tc(e,t,r,n)}t=t.child}return t;case 26:return dc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(ue.current).createElement(n),r[ct]=t,r[lt]=e,Pd(r,n,e),xt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pe(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,ue.current),ki=t,Mi=!0,a=Ai,Zd(t.type)?(lf=a,Ai=cf(r.firstChild)):Ai=a),tc(e,t,t.pendingProps.children,n),dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=Ai)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,ki=t,Ai=cf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),pe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yo(e,t,So,null,null,n),Qf._currentValue=a),dc(e,t),tc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=Ai)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,ki=t,Ai=null,e=!0)),e||Pi(t)),null;case 13:return yc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Na(t,null,r,n):tc(e,t,r,n),t.child;case 11:return nc(e,t,t.type,t.pendingProps,n);case 7:return tc(e,t,t.pendingProps,n),t.child;case 8:return tc(e,t,t.pendingProps.children,n),t.child;case 12:return tc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),tc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,tc(e,t,r,n),t.child;case 14:return rc(e,t,t.type,t.pendingProps,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 19:return Tc(e,t,n);case 31:return uc(e,t,n);case 22:return ac(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ma(),a===null&&(a=Rl,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ia(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(La(e,t),Wa(t,null,null,n),Ua()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),tc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ac(e){e.flags|=4}function jc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw wa=ba,va}}else e.flags&=-16777217}function Mc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw wa=ba,va}}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Xe(),e.lanes|=t,Yl|=t)}function Pc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ic(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fc(t),null;case 1:return Fc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),I(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?Ac(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Fc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ac(t),o===null?(Fc(t),jc(t,a,null,r,n)):(Fc(t),Mc(t,o))):o?o===e.memoizedState?(Fc(t),t.flags&=-16777217):(Ac(t),Fc(t),Mc(t,o)):(e=e.memoizedProps,e!==r&&Ac(t),Fc(t),jc(t,a,e,r,n)),null;case 27:if(me(t),n=ue.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}e=le.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,Ac(t))}return Fc(t),null;case 5:if(me(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}if(o=le.current,Li(t))Fi(t,o);else{var s=Bd(ue.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ct]=t,o[lt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ac(t)}}return Fc(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ue.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[ct]=t,t.stateNode=e}return Fc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ct]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(io(t),t):(io(t),null);if(t.flags&128)throw Error(i(558))}return Fc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ct]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(io(t),t):(io(t),null)}return io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),Fc(t),null);case 4:return I(),e===null&&Sd(t.stateNode.containerInfo),Fc(t),null;case 10:return Gi(t.type),Fc(t),null;case 19:if(N(ao),r=t.memoizedState,r===null)return Fc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Pc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oo(e),o!==null){for(t.flags|=128,Pc(r,!1),e=o.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)si(n,e),n=n.sibling;return P(ao,ao.current&1|2),U&&wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>tu&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=oo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Pc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Fc(t),null}else 2*De()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Fc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=ao.current,P(ao,a?n&1|2:n&1),U&&wi(t,r.treeForkCount),e);case 22:case 23:return io(t),Za(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Fc(t),t.subtreeFlags&6&&(t.flags|=8192)):Fc(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&N(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Fc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Lc(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),I(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return me(t),null;case 31:if(t.memoizedState!==null){if(io(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(ao),null;case 4:return I(),null;case 10:return Gi(t.type),null;case 22:case 23:return io(t),Za(),e!==null&&N(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function Rc(e,t){switch(Di(t),t.tag){case 3:Gi(ra),I();break;case 26:case 27:case 5:me(t);break;case 4:I();break;case 31:t.memoizedState!==null&&io(t);break;case 13:io(t);break;case 19:N(ao);break;case 10:Gi(t.type);break;case 22:case 23:io(t),Za(),e!==null&&N(pa);break;case 24:Gi(ra)}}function zc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Bc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ka(t,n)}catch(t){Z(e,e.return,t)}}}function Hc(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Uc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Wc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Gc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Kc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[lt]=t}catch(t){Z(e,e.return,t)}}function qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Jc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=en));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ct]=e,t[lt]=n}catch(t){Z(e,e.return,t)}}var Qc=!1,$c=!1,el=!1,tl=typeof WeakSet==`function`?WeakSet:Set,nl=null;function rl(e,t){if(e=e.containerInfo,Rd=sp,e=Cr(e),wr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,nl=t;nl!==null;)if(t=nl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,nl=e;else for(;nl!==null;){switch(t=nl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Us(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,nl=e;break}nl=t.return}}function il(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:yl(e,n),r&4&&zc(5,n);break;case 1:if(yl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Vc(n),r&512&&Uc(n,n.return);break;case 3:if(yl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ka(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Zc(n);case 26:case 5:yl(e,n),t===null&&r&4&&Gc(n),r&512&&Uc(n,n.return);break;case 12:yl(e,n);break;case 31:yl(e,n),r&4&&ul(e,n);break;case 13:yl(e,n),r&4&&dl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Qc,!r){t=t!==null&&t.memoizedState!==null||$c,i=Qc;var a=$c;Qc=r,($c=t)&&!a?xl(e,n,!!(n.subtreeFlags&8772)):yl(e,n),Qc=i,$c=a}break;case 30:break;default:yl(e,n)}}function al(e){var t=e.alternate;t!==null&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ol=null,sl=!1;function cl(e,t,n){for(n=n.child;n!==null;)ll(e,t,n),n=n.sibling}function ll(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:$c||Wc(n,t),cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$c||Wc(n,t);var r=ol,i=sl;Zd(n.type)&&(ol=n.stateNode,sl=!1),cl(e,t,n),pf(n.stateNode),ol=r,sl=i;break;case 5:$c||Wc(n,t);case 6:if(r=ol,i=sl,ol=null,cl(e,t,n),ol=r,sl=i,ol!==null){if(sl)try{(ol.nodeType===9?ol.body:ol.nodeName===`HTML`?ol.ownerDocument.body:ol).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{ol.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:ol!==null&&(sl?(e=ol,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(ol,n.stateNode));break;case 4:r=ol,i=sl,ol=n.stateNode.containerInfo,sl=!0,cl(e,t,n),ol=r,sl=i;break;case 0:case 11:case 14:case 15:Bc(2,n,t),$c||Bc(4,n,t),cl(e,t,n);break;case 1:$c||(Wc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Hc(n,t,r)),cl(e,t,n);break;case 21:cl(e,t,n);break;case 22:$c=(r=$c)||n.memoizedState!==null,cl(e,t,n),$c=r;break;default:cl(e,t,n)}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function fl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tl),t;default:throw Error(i(435,e.tag))}}function pl(e,t){var n=fl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function ml(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){ol=c.stateNode,sl=!1;break a}break;case 5:ol=c.stateNode,sl=!1;break a;case 3:case 4:ol=c.stateNode.containerInfo,sl=!0;break a}c=c.return}if(ol===null)throw Error(i(160));ll(o,s,a),ol=null,sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gl(t,e),t=t.sibling}var hl=null;function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ml(t,e),_l(e),r&4&&(Bc(3,e,e.return),zc(3,e),Bc(5,e,e.return));break;case 1:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&64&&Qc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=hl;if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ht]||o[ct]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ct]=e,xt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ct]=e,xt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Kc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),n!==null&&r&4&&Kc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),e.flags&32){a=e.stateNode;try{Kt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Kc(e,a,n===null?a:n.memoizedProps)),r&1024&&(el=!0);break;case 6:if(ml(t,e),_l(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=hl,hl=gf(t.containerInfo),ml(t,e),hl=a,_l(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}el&&(el=!1,vl(e));break;case 4:r=hl,hl=gf(e.stateNode.containerInfo),ml(t,e),_l(e),hl=r;break;case 12:ml(t,e),_l(e);break;case 31:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 13:ml(t,e),_l(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Qc,d=$c;if(Qc=u||a,$c=d||l,ml(t,e),$c=d,Qc=u,_l(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Qc||$c||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,pl(e,n))));break;case 19:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 30:break;case 21:break;default:ml(t,e),_l(e)}}function _l(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Xc(e,Jc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Kt(o,``),n.flags&=-33),Xc(e,Jc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Yc(e,Jc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)il(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bc(4,t,t.return),bl(t);break;case 1:Wc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Hc(t,t.return,n),bl(t);break;case 27:pf(t.stateNode);case 26:case 5:Wc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),zc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ga(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Vc(a),Uc(a,a.return);break;case 27:Zc(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Gc(a),Uc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&ul(i,a);break;case 13:xl(i,a,n),n&&o&4&&dl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),Uc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&W(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&W(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&zc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&W(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),zc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Gf(n,hl,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=hl;hl=gf(e.stateNode.containerInfo),kl(e,t,n),hl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nl(e),e=e.sibling}function Nl(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Bc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pl(e)):Ml(e);break;default:Ml(e)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bc(8,t,t.return),Pl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pl(t));break;default:Pl(t)}e=e.sibling}}function Fl(e,t){for(;nl!==null;){var n=nl;switch(n.tag){case 0:case 11:case 15:Bc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:W(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nl=r;else a:for(n=e;nl!==null;){r=nl;var i=r.sibling,a=r.return;if(al(r),r===n){nl=null;break a}if(i!==null){i.return=a,nl=i;break a}nl=a}}}var Il={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Ll=typeof WeakMap==`function`?WeakMap:Map,q=0,Rl=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return q&2&&Y!==0?Y&-Y:A.T===null?at():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||U){var e=We;We<<=1,!(We&3932160)&&(We=262144),Jl=e}else Jl=536870912}return e=Qa.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Rl&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Qe(e,n),(!(q&2)||e!==Rl)&&(e===Rl&&(!(q&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(q&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Je(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-De(),10<a)){if(yu(r,t,Jl,!Bl),qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},Al(t,a,d);var m=(a&62914560)===a?$l-De():(a&4194048)===a?eu-De():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&et(e,n,t)}function bu(){return q&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,To(e),Da=null,Oa=0,e=J;for(;e!==null;)Rc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Rl=e,J=n=oi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Je(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Xr(),n}function Cu(e,t){G=null,A.H=Fs,t===_a||t===ya?(t=Ta(),X=3):t===va?(t=Ta(),X=4):X=t===$s?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,qs(e,mi(t,e.current)))}function wu(){var e=Qa.current;return e===null?!0:(Y&4194048)===Y?$a===null:(Y&62914560)===Y||Y&536870912?e===$a:!1}function Tu(){var e=A.H;return A.H=Fs,e===null?Fs:e}function Eu(){var e=A.A;return A.A=Il,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&Qa.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Rl===null||yu(Rl,Y,Jl,!1)}function Ou(e,t,n){var r=q;q|=2;var i=Tu(),a=Eu();(Rl!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:Qa.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,q=r,A.H=i,A.A=a,J===null&&(Rl=null,Y=0,Xr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=q;q|=2;var r=Tu(),a=Eu();Rl!==e||Y!==t?(nu=null,tu=De()+500,Su(e,t)):Vl=Je(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(xa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||Rl!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:xa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,A.H=r,A.A=a,q=n,J===null?(Rl=null,Y=0,Xr(),Wl):0}function ju(){for(;J!==null&&!Te();)Mu(J)}function Mu(e){var t=kc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=pc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:To(t);default:Rc(n,t),t=J=si(t,Ul),t=kc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,To(t),Da=null,Oa=0;var i=t.return;try{if(Qs(e,i,t,n,Y)){Wl=1,qs(e,mi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,qs(e,mi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Ic(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Lc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Yr,$e(e,n,o,s,c,l),e===Rl&&(J=Rl=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(je,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=A.T,A.T=null,a=j.p,j.p=2,s=q,q|=4;try{rl(e,t,n)}finally{q=s,j.p=a,A.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=q;q|=4;try{gl(t,e);var a=zd,o=Cr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Sr(s.ownerDocument.documentElement,s)){if(c!==null&&wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{q=i,j.p=r,A.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=q;q|=4;try{il(e,t.alternate,t)}finally{q=i,j.p=r,A.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ee();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),it(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=A.T,i=j.p,j.p=2,A.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{A.T=t,j.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,W(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=it(su),r=A.T,a=j.p;try{j.p=32>n?32:n,A.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,q&6)throw Error(i(331));var c=q;if(q|=4,Nl(o.current),Tl(o,o.current,s,n),q=c,id(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,o)}catch{}return!0}finally{j.p=a,A.T=r,Vu(e,t)}}function Wu(e,t,n){t=mi(n,t),t=Ys(e.stateNode,t,2),e=za(e,t,2),e!==null&&(Qe(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=mi(n,e),n=Xs(2),r=za(t,n,2),r!==null&&(Zs(n,r,t,e),Qe(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ll;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Rl===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>De()-$l?!(q&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Xe()),e=$r(e,t),e!==null&&(Qe(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ce(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=qe(r,r===Rl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Je(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=De(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ye(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Rl,n=Y,n=qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Je(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),it(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=cd.bind(null,e),n=Ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=qe(e,e===Rl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,De()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){q&6?Ce(ke,ad):od()})}function dd(){if(nd===0){var e=sa;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:$t(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[lt]||null).action),o=r.submitter;o&&(t=(t=o[lt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Wr.length;hd++){var gd=Wr[hd];Gr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Gr(Ir,`onAnimationEnd`),Gr(Lr,`onAnimationIteration`),Gr(Rr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(zr,`onTransitionRun`),Gr(Br,`onTransitionStart`),Gr(Vr,`onTransitionCancel`),Gr(Hr,`onTransitionEnd`),wt(`onMouseEnter`,[`mouseout`,`mouseover`]),wt(`onMouseLeave`,[`mouseout`,`mouseover`]),wt(`onPointerEnter`,[`pointerout`,`pointerover`]),wt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ct(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ct(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ct(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ct(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[dt];n===void 0&&(n=t[dt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,L.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=_t(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}cn(function(){var r=a,i=nn(n),s=[];a:{var c=Ur.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:l=Rn;break;case`focusin`:u=`focus`,l=kn;break;case`focusout`:u=`blur`,l=kn;break;case`beforeblur`:case`afterblur`:l=kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=z;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=B;break;case Ir:case Lr:case Rr:l=An;break;case Hr:l=Bn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Vn;break;case`copy`:case`cut`:case`paste`:l=jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=zn;break;case`toggle`:case`beforetoggle`:l=Hn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=ln(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[ut]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?_t(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:yt(l),h=u==null?c:yt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?yt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=sr;else if(tr(c)){if(cr)v=gr;else{v=mr;var y=pr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Xt(r.elementType)&&(v=sr):v=hr;if(v&&=v(e,r)){nr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ht(c,`number`,c.value)}switch(y=r?yt(r):window,e){case`focusin`:(tr(y)||y.contentEditable===`true`)&&(Er=y,Dr=r,Or=null);break;case`focusout`:Or=Dr=Er=null;break;case`mousedown`:kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:kr=!1,Ar(s,n,i);break;case`selectionchange`:if(Tr)break;case`keydown`:case`keyup`:Ar(s,n,i)}var b;if(Wn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Zn?Yn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(V&&n.locale!==`ko`&&(Zn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Zn&&(b=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,Zn=!0)),y=Ed(r,x),0<y.length&&(x=new Mn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Xn(n),b!==null&&(x.data=b)))),(b=Kn?Qn(e,n):$n(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Mn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=ln(e,n),i!=null&&r.unshift(Td(e,i,a)),i=ln(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=ln(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=ln(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:At(e,`class`,r);break;case`tabIndex`:At(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:At(e,n,r);break;case`style`:Yt(e,r,o);break;case`data`:if(t!==`object`){At(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=en);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=$t(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),kt(e,`popover`,r);break;case`xlinkActuate`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:kt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Zt.get(n)||n,kt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Yt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=en);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[lt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):kt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Vt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ut(e,!!r,n,!0):Ut(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Gt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Bt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ut(e,!!n,n?[]:``,!1):Ut(e,!!n,t,!0)):Ut(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Wt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=j.d;j.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?Cs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+zt(n.imageSizes)+`"]`)):i+=`[href="`+zt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+zt(r)+`"][href="`+zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),xt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=bt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);xt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ue.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=bt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=bt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+zt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),xt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+zt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+zt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,xt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),xt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,xt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),xt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ht]||a[ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,xt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),xt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ia(a),e}function tp(e){return e?(e=ni,e):ni}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ra(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=za(e,r,t),n!==null&&(hu(n,e,t),Ba(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=rt(t);var n=$r(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=2,up(e,t,n,r)}finally{j.p=a,A.T=i}}function lp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=8,up(e,t,n,r)}finally{j.p=a,A.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}rd(a),!(q&6)&&(tu=De()+500,id(0,!1))}}break;case 31:case 13:s=$r(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=nn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=_t(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=_t(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=vt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[lt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[lt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ut]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:A,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),Le=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ws,s=Gs,c=Ks;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ut]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y={min:.3,max:.95},b={glassEnabled:!0,speed:1,radius:.72,contourDeform:0,bandDensity:2,chromaticShift:.42,metalScale:.77,metalStretch:.23,metalAngle:65,metalOffset:0,metalPhase:0,metalEvolution:1,metalRoughness:.22,metalDepth:.25,particleDensity:.72,ribbonCount:5,ribbonWidth:.42,ribbonTwist:1.25,ribbonFold:.55,ribbonBreath:.3,particleSize:1.2,particleBloom:.7,shapeMorph:0,zoom:.3,warp:3,ridgeAmt:.5,sharp:2.2,shade:.3,sheen:.36,gloss:.28,glassOpacity:.42,shellMidAlpha:.2,shellEdgeAlpha:.22,exposure:1,edgeSoftness:.005,edgeGlow:0,colorA:`#F7FBFF`,colorB:`#D6E8F7`,colorC:`#A8C8F0`,colorD:`#6F9EE8`,highlightColor:`#FFFFFF`,shellInner:`#FFFFFF`,shellMid:`#D6E8F7`,shellEdge:`#6F9EE8`,sheenColor:`#EAF4FF`,specColor:`#DCEAFF`,canvasColor:`#000000`,glowColor:`#6F9EE8`},x={siriAi:{...b,speed:.88,radius:.86,contourDeform:.18,shapeMorph:0,zoom:.28,warp:2.4,ridgeAmt:.48,sharp:2.2,shade:.12,sheen:.38,gloss:.34,glassOpacity:.48,shellMidAlpha:.16,shellEdgeAlpha:.2,exposure:1.7,edgeSoftness:.01,edgeGlow:.1,colorA:`#FFD56A`,colorB:`#4EFFF6`,colorC:`#FF5EC8`,colorD:`#6B6CFF`,highlightColor:`#FFFFFF`,shellInner:`#F7FBFF`,shellMid:`#9BF4FF`,shellEdge:`#C5A9FF`,sheenColor:`#F4FBFF`,specColor:`#E7F3FF`,canvasColor:`#010207`,glowColor:`#8A74FF`},siri:{...b,speed:.82,zoom:.36,warp:3.2,ridgeAmt:.5,sharp:2.2,shade:.12,sheen:.28,gloss:.24,glassOpacity:.44,shellMidAlpha:.18,shellEdgeAlpha:.18,exposure:2,colorA:`#FFD86B`,colorB:`#82F4FF`,colorC:`#FF7BD5`,colorD:`#8E6CFF`,shellMid:`#9BF4FF`,shellEdge:`#C5A9FF`,canvasColor:`#030409`,glowColor:`#956CFF`},voiceWave:{...b,speed:.95,radius:.7,contourDeform:.1,zoom:.36,warp:2.6,ridgeAmt:.46,shade:.08,sheen:.22,gloss:.36,glassOpacity:.48,shellMidAlpha:.18,shellEdgeAlpha:.2,exposure:1.35,colorA:`#09030E`,colorB:`#CE2CCB`,colorC:`#FF5C71`,colorD:`#7B53FF`,highlightColor:`#FFD9F0`,shellMid:`#E48BFF`,shellEdge:`#FF7890`,sheenColor:`#FFF1FA`,specColor:`#E7D9FF`,canvasColor:`#020105`,glowColor:`#CE2CCB`},aurora:{...b,speed:3,contourDeform:.08,zoom:.4,warp:4.2,ridgeAmt:.62,sharp:2.1,shade:.18,exposure:1.18,colorA:`#030816`,colorB:`#20F0B6`,colorC:`#32A8FF`,colorD:`#A34BFF`,shellMid:`#32A8FF`,shellEdge:`#20F0B6`,canvasColor:`#010207`,glowColor:`#20F0B6`},plasma:{...b,speed:1.32,contourDeform:.05,zoom:.55,warp:5.4,ridgeAmt:.78,sharp:4.2,shade:.16,exposure:1.25,colorA:`#06020E`,colorB:`#0099FF`,colorC:`#258BFF`,colorD:`#1375FF`,shellInner:`#FFFFFF`,shellMid:`#1951C2`,shellEdge:`#00E9FF`,sheenColor:`#EAF4FF`,specColor:`#DCEAFF`,canvasColor:`#020105`,glowColor:`#0099FF`},chrome:{...b,speed:2,zoom:.36,warp:3.8,ridgeAmt:.44,sharp:5.2,shade:.58,exposure:1.08,colorA:`#FFFFFF`,colorB:`#B9C0CA`,colorC:`#343A43`,colorD:`#030405`,shellMid:`#B9C0CA`,shellEdge:`#FFFFFF`,canvasColor:`#050608`,glowColor:`#FFFFFF`},opal:{...b,speed:1.5,zoom:.3,warp:2.8,ridgeAmt:.36,sharp:2,shade:.1,sheen:.3,gloss:.26,glassOpacity:.38,shellMidAlpha:.2,shellEdgeAlpha:.2,exposure:1.12,colorA:`#FFF6E8`,colorB:`#6EF2CF`,colorC:`#FF91D8`,colorD:`#756BFF`,shellMid:`#CDE5FF`,shellEdge:`#D9C8FF`,canvasColor:`#07080D`,glowColor:`#9E8CFF`},spectrum:{...b,speed:1.8,contourDeform:.03,zoom:.46,warp:4.4,ridgeAmt:.72,shade:.06,sheen:.26,gloss:.24,glassOpacity:.4,shellMidAlpha:.18,shellEdgeAlpha:.18,exposure:1.5,colorA:`#FFFFFF`,colorB:`#1677FF`,colorC:`#F249A0`,colorD:`#35E6B2`,shellMid:`#66E8FF`,shellEdge:`#D26CFF`,canvasColor:`#03040A`,glowColor:`#1677FF`},frost:{...b,speed:2.22,contourDeform:.04,zoom:.36,warp:3.7,ridgeAmt:.45,sharp:2.05,shade:.3,sheen:.34,gloss:.28,glassOpacity:.42,shellMidAlpha:.2,shellEdgeAlpha:.22,exposure:1,colorA:`#F7FBFF`,colorB:`#D6E8F7`,colorC:`#A8C8F0`,colorD:`#6F9EE8`,shellMid:`#D6E8F7`,shellEdge:`#6F9EE8`,canvasColor:`#000000`,glowColor:`#6F9EE8`},blueDrop:{...b,speed:.9,radius:.74,contourDeform:.08,zoom:.48,warp:2.65,ridgeAmt:.42,sharp:2.4,shade:.16,sheen:.22,gloss:.42,glassOpacity:.66,shellMidAlpha:.32,shellEdgeAlpha:.24,exposure:1.24,colorA:`#020B1D`,colorB:`#0756B8`,colorC:`#1EC8FF`,colorD:`#DDFBFF`,highlightColor:`#EAFBFF`,shellInner:`#F6FDFF`,shellMid:`#4FD7FF`,shellEdge:`#466DFF`,sheenColor:`#DDFBFF`,specColor:`#A8D9FF`,canvasColor:`#010207`,glowColor:`#168DFF`},violetEmber:{...b,speed:1.12,radius:.72,contourDeform:.04,zoom:.58,warp:4.7,ridgeAmt:.73,sharp:3.3,shade:.18,sheen:.2,gloss:.34,glassOpacity:.62,shellMidAlpha:.28,shellEdgeAlpha:.24,exposure:1.28,colorA:`#100016`,colorB:`#4A0E8F`,colorC:`#A52EFF`,colorD:`#F1A7FF`,highlightColor:`#FFD6FF`,shellInner:`#FCF5FF`,shellMid:`#C257FF`,shellEdge:`#6C2DFF`,sheenColor:`#F8E6FF`,specColor:`#D4B7FF`,canvasColor:`#030006`,glowColor:`#A52EFF`},refractiveBlob:{...b,speed:.76,radius:.73,contourDeform:.16,zoom:.46,warp:3.65,ridgeAmt:.58,sharp:2.7,shade:.14,sheen:.14,gloss:.52,glassOpacity:.82,shellMidAlpha:.42,shellEdgeAlpha:.2,exposure:1.2,colorA:`#1B102B`,colorB:`#7056A8`,colorC:`#BFA5F5`,colorD:`#F1E8FF`,highlightColor:`#FFFFFF`,shellInner:`#F6F0FF`,shellMid:`#D9C7FF`,shellEdge:`#B59AE8`,sheenColor:`#FFFFFF`,specColor:`#E9DEFF`,canvasColor:`#050208`,glowColor:`#B18CFF`},particleRibbon:{...b,glassEnabled:!0,speed:.72,radius:.66,particleDensity:1,ribbonCount:4,ribbonWidth:.48,ribbonTwist:1.15,ribbonFold:.6,ribbonBreath:.38,particleSize:1.12,particleBloom:1.22,shade:.12,sheen:.28,gloss:.24,glassOpacity:.44,shellMidAlpha:.18,shellEdgeAlpha:.18,exposure:1.48,colorA:`#63F1FF`,colorB:`#4A9DFF`,colorC:`#8566FF`,colorD:`#F15DE1`,highlightColor:`#F5FBFF`,shellInner:`#FFFFFF`,shellMid:`#9BF4FF`,shellEdge:`#C5A9FF`,sheenColor:`#EAF4FF`,specColor:`#DCEAFF`,canvasColor:`#010208`,glowColor:`#765CFF`},chromaticMetal:{...b,speed:1.12,radius:.72,bandDensity:2,chromaticShift:.42,metalScale:.77,metalStretch:.23,metalAngle:65,metalOffset:0,metalPhase:0,metalEvolution:1,metalRoughness:.16,metalDepth:.38,shade:.1,sheen:.14,gloss:.46,glassOpacity:.54,shellMidAlpha:.2,shellEdgeAlpha:.16,exposure:1.08,colorA:`#FBFCFB`,colorB:`#7F8683`,colorC:`#D6DAD8`,colorD:`#33373A`,highlightColor:`#FFFFFF`,shellInner:`#F7FCFF`,shellMid:`#6EDCFF`,shellEdge:`#FF806D`,sheenColor:`#F7FCFF`,specColor:`#D9F3FF`,canvasColor:`#050606`,glowColor:`#BDEFFF`}},S=[`siriAi`,`siri`,`voiceWave`,`particleRibbon`,`blueDrop`,`violetEmber`,`refractiveBlob`,`chromaticMetal`,`aurora`,`frost`,`chrome`,`opal`,`spectrum`,`plasma`],C={siriAi:25,siri:9,voiceWave:19,aurora:10,plasma:11,chrome:12,opal:13,spectrum:14,frost:15,blueDrop:20,violetEmber:21,refractiveBlob:23,particleRibbon:24,chromaticMetal:22},w={style:`siri`,...x.siri};({...w});for(let e of S)if(!Number.isInteger(C[e]))throw Error(`预设缺少流场映射：${e}`);var T=`Thinking...`,ee=`apple-orc-editor-locale`,te={min:.05,max:.8,step:.01},E={min:.1,max:2,step:.05},ne=[`siriAi`,`siri`,`voiceWave`,`spectrum`,`aurora`,`frost`,`plasma`,`blueDrop`,`violetEmber`,`refractiveBlob`],D=[`frost`,`plasma`,`chrome`,`blueDrop`,`violetEmber`,`refractiveBlob`],O=S.filter(e=>e!==`chromaticMetal`&&e!==`particleRibbon`),k=[`chromaticMetal`],re=[`particleRibbon`],ie=[`siriAi`],ae=[{key:`speed`,min:0,max:3,step:.01},{key:`radius`,...y,step:.01},{key:`shapeMorph`,min:0,max:1,step:.01,enabledStyles:ie},{key:`contourDeform`,min:0,max:1,step:.01,enabledStyles:O},{key:`zoom`,min:.05,max:1,step:.01,enabledStyles:O},{key:`warp`,min:0,max:6,step:.05,enabledStyles:O},{key:`ridgeAmt`,min:0,max:1,step:.01,enabledStyles:ne},{key:`sharp`,min:.5,max:6,step:.05,enabledStyles:D},{key:`bandDensity`,min:1,max:6,step:.1,enabledStyles:k},{key:`metalDepth`,min:0,max:1,step:.01,enabledStyles:k},{key:`metalRoughness`,min:0,max:1,step:.01,enabledStyles:k},{key:`chromaticShift`,min:0,max:1,step:.01,enabledStyles:k},{key:`metalScale`,min:.2,max:2,step:.01,enabledStyles:k},{key:`metalStretch`,min:0,max:1,step:.01,enabledStyles:k},{key:`metalAngle`,min:-180,max:180,step:1,enabledStyles:k},{key:`metalOffset`,min:-1,max:1,step:.01,enabledStyles:k},{key:`metalPhase`,min:0,max:1,step:.01,enabledStyles:k},{key:`metalEvolution`,min:0,max:2,step:.02,enabledStyles:k},{key:`particleDensity`,min:.2,max:1,step:.01,enabledStyles:re},{key:`ribbonCount`,min:2,max:6,step:1,enabledStyles:re},{key:`ribbonWidth`,min:.1,max:.8,step:.01,enabledStyles:re},{key:`ribbonTwist`,min:.1,max:3,step:.01,enabledStyles:re},{key:`ribbonFold`,min:0,max:1.2,step:.01,enabledStyles:re},{key:`ribbonBreath`,min:0,max:.8,step:.01,enabledStyles:re},{key:`particleSize`,min:.6,max:2.5,step:.01,enabledStyles:re},{key:`particleBloom`,min:0,max:2,step:.01,enabledStyles:re},{key:`shade`,min:0,max:1.5,step:.01},{key:`exposure`,min:.2,max:3,step:.02},{key:`sheen`,min:0,max:2,step:.02},{key:`gloss`,min:0,max:2,step:.02},{key:`glassOpacity`,min:0,max:1,step:.01},{key:`shellMidAlpha`,min:0,max:1,step:.01},{key:`shellEdgeAlpha`,min:0,max:1,step:.01},{key:`edgeSoftness`,min:.005,max:.15,step:.005},{key:`edgeGlow`,min:0,max:1,step:.01}],A=new Map(ae.map(e=>[e.key,e])),j=[`colorA`,`colorB`,`colorC`,`colorD`,`highlightColor`,`shellInner`,`shellMid`,`shellEdge`,`sheenColor`,`specColor`,`canvasColor`,`glowColor`],oe=new Set([`particleRibbon`,`blueDrop`,`violetEmber`,`refractiveBlob`,`chromaticMetal`]),se=Object.fromEntries(S.map(e=>[e,`/Apple-orc/presets/${e}.png`]));function ce(e,t,n){return Math.min(n,Math.max(t,e))}function M(e){return/^#[0-9a-f]{6}$/i.test(e)?e.toUpperCase():null}function N(e){return Array.from(e).slice(0,20).join(``)}function P(e,t){return!e.enabledStyles||e.enabledStyles.includes(t)}var le=`// Generated from effect.wgsl for the native SwiftUI/Metal export.
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
    float shapeMorph;
    float _padShape0;
    float _padShape1;
    float _padShape2;
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
    if (style == 25) {
        metal::float3 _eSiriAi = glsSiriFluid(p_16, t_13, u);
        return _eSiriAi;
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
`,F=[`#F7FBFF`,`#EFF6FD`,`#E0EEF9`,`#D4E6F7`,`#BBD5F3`,`#A6C7F0`,`#87B0EB`,`#6F9EE8`,`#6F9EE8`,`#6F9EE8`,`#6F9EE8`,`#6F9EE8`];function ue(e){let t=e.slice(1);return[Number.parseInt(t.slice(0,2),16)/255,Number.parseInt(t.slice(2,4),16)/255,Number.parseInt(t.slice(4,6),16)/255,1]}function de(e,t,n,r,i){e.fill(0),e[0]=t,e[1]=n,e[2]=r,e.set([i.speed,i.radius,i.zoom,i.warp,i.ridgeAmt,i.sharp,i.shade,i.sheen,i.gloss,i.shellMidAlpha,i.shellEdgeAlpha,i.exposure,C[i.style],i.edgeSoftness,i.edgeGlow,0,+!!i.glassEnabled,i.glassOpacity,i.contourDeform,i.bandDensity,i.chromaticShift,i.metalScale,i.metalStretch,i.metalAngle,i.metalOffset,i.metalPhase,i.metalEvolution,i.metalRoughness,i.metalDepth,i.particleDensity,i.ribbonCount,i.ribbonWidth,i.ribbonTwist,i.ribbonFold,i.ribbonBreath,i.particleSize,i.particleBloom,i.shapeMorph,0,0,0],3),[i.colorA,i.colorB,i.colorC,i.colorD,i.highlightColor,i.shellInner,i.shellMid,i.shellEdge,i.sheenColor,i.specColor,i.canvasColor,i.glowColor,...F].forEach((t,n)=>e.set(ue(t),44+n*4))}function fe(e){let t=new Float32Array(140);return de(t,1,1,0,e),Array.from(t)}var I=221184,pe=[`idle`,`thinking`],me=[`speed`,`contourDeform`,`bandDensity`,`chromaticShift`,`metalStretch`,`metalEvolution`,`metalRoughness`,`metalDepth`,`ribbonWidth`,`ribbonTwist`,`ribbonFold`,`ribbonBreath`,`zoom`,`warp`,`ridgeAmt`,`sharp`,`shade`,`exposure`,`edgeGlow`],he=[`colorA`,`colorB`,`colorC`,`colorD`,`highlightColor`,`glowColor`],ge=[...me,...he],_e=`thinking`,ve=.22,ye=.65,be={siriAi:{numeric:{speed:{scale:.4},contourDeform:{scale:.18},zoom:{scale:.95},warp:{scale:.55},ridgeAmt:{scale:.55},sharp:{scale:.92},exposure:{scale:.78},edgeGlow:{scale:.48}},colors:{colorA:`#B8A56C`,colorB:`#4E8A8A`,colorC:`#9A648A`,colorD:`#5E5888`,highlightColor:`#C9D4DE`,glowColor:`#5E5878`}},siri:{numeric:{speed:{scale:.3},contourDeform:{scale:.3},zoom:{scale:.94},warp:{scale:.52},ridgeAmt:{scale:.48},sharp:{scale:.9},exposure:{scale:.68}},colors:{colorA:`#B5A674`,colorB:`#5E8794`,colorC:`#9A648A`,colorD:`#635B8A`,highlightColor:`#B6C4D2`,glowColor:`#6C688F`}},voiceWave:{numeric:{speed:{scale:.28},contourDeform:{scale:.3},zoom:{scale:.92},warp:{scale:.46},ridgeAmt:{scale:.42},exposure:{scale:.62}},colors:{colorA:`#08050B`,colorB:`#6A2F69`,colorC:`#8C4652`,colorD:`#55467F`,highlightColor:`#B58AA5`,glowColor:`#6C3E72`}},blueDrop:{numeric:{speed:{scale:.3},contourDeform:{scale:.35},zoom:{scale:.93},warp:{scale:.5},ridgeAmt:{scale:.46},sharp:{scale:.82},exposure:{scale:.66}},colors:{colorA:`#020812`,colorB:`#0A2C5A`,colorC:`#24678A`,colorD:`#A4C3CA`,highlightColor:`#9FC8D5`,glowColor:`#1F5076`}},violetEmber:{numeric:{speed:{scale:.28},contourDeform:{scale:.3},zoom:{scale:.92},warp:{scale:.46},ridgeAmt:{scale:.42},sharp:{scale:.78},exposure:{scale:.64}},colors:{colorA:`#0B0310`,colorB:`#2B1748`,colorC:`#593078`,colorD:`#9B78A8`,highlightColor:`#BCA6C2`,glowColor:`#593273`}},refractiveBlob:{numeric:{speed:{scale:.3},contourDeform:{scale:.32},zoom:{scale:.94},warp:{scale:.5},ridgeAmt:{scale:.44},sharp:{scale:.82},exposure:{scale:.68}},colors:{colorA:`#0F0B16`,colorB:`#403552`,colorC:`#776990`,colorD:`#AEA4BD`,highlightColor:`#C9C4D1`,glowColor:`#6E6185`}},particleRibbon:{numeric:{speed:{scale:.28},ribbonWidth:{scale:.62},ribbonTwist:{scale:.42},ribbonFold:{scale:.35},ribbonBreath:{scale:.18},exposure:{scale:.68}},colors:{colorA:`#3A6068`,colorB:`#375D78`,colorC:`#594E83`,colorD:`#854C7A`,highlightColor:`#B9CCD1`,glowColor:`#514C78`}},chromaticMetal:{numeric:{speed:{scale:.3},bandDensity:{scale:.62},chromaticShift:{scale:.35},metalStretch:{scale:.48},metalEvolution:{scale:.32},metalRoughness:{scale:1.35},metalDepth:{scale:.55},exposure:{scale:.72}},colors:{colorA:`#B8BCBA`,colorB:`#666B69`,colorC:`#9EA3A1`,colorD:`#282B2D`,highlightColor:`#D1D5D3`,glowColor:`#78898F`}},aurora:{numeric:{speed:{scale:.22},contourDeform:{scale:.3},zoom:{scale:.92},warp:{scale:.42},ridgeAmt:{scale:.38},sharp:{scale:.85},exposure:{scale:.62}},colors:{colorA:`#02050C`,colorB:`#1D6659`,colorC:`#285D78`,colorD:`#533E75`,highlightColor:`#92B6B3`,glowColor:`#286A62`}},frost:{numeric:{speed:{scale:.26},contourDeform:{scale:.28},zoom:{scale:.94},warp:{scale:.5},ridgeAmt:{scale:.46},sharp:{scale:.78},exposure:{scale:.72}},colors:{colorA:`#C3CDD5`,colorB:`#9AABB8`,colorC:`#768D9E`,colorD:`#536985`,highlightColor:`#D6DEE5`,glowColor:`#697D91`}},chrome:{numeric:{speed:{scale:.28},contourDeform:{scale:.35},zoom:{scale:.92},warp:{scale:.48},sharp:{scale:.74},exposure:{scale:.72}},colors:{colorA:`#A7AAA9`,colorB:`#6E7273`,colorC:`#363A3D`,colorD:`#101213`,highlightColor:`#CBCFCE`,glowColor:`#747A7B`}},opal:{numeric:{speed:{scale:.3},contourDeform:{scale:.32},zoom:{scale:.94},warp:{scale:.52},ridgeAmt:{scale:.48},exposure:{scale:.68}},colors:{colorA:`#C9C3BC`,colorB:`#6E9E91`,colorC:`#A17496`,colorD:`#68608E`,highlightColor:`#E1DCD5`,glowColor:`#82799B`}},spectrum:{numeric:{speed:{scale:.27},contourDeform:{scale:.3},zoom:{scale:.92},warp:{scale:.44},ridgeAmt:{scale:.38},exposure:{scale:.62}},colors:{colorA:`#B4BBC2`,colorB:`#285D8F`,colorC:`#91506F`,colorD:`#3F8873`,highlightColor:`#D8DDE1`,glowColor:`#386789`}},plasma:{numeric:{speed:{scale:.26},contourDeform:{scale:.28},zoom:{scale:.9},warp:{scale:.42},ridgeAmt:{scale:.36},sharp:{scale:.68},exposure:{scale:.6}},colors:{colorA:`#04020A`,colorB:`#084772`,colorC:`#1C5790`,colorD:`#174B84`,highlightColor:`#A5BBD0`,glowColor:`#14577F`}}},xe=new Set(ge);function Se(e){return xe.has(e)}function Ce(e){let t=Object.fromEntries(ge.map(t=>[t,e[t]])),n={...e};for(let e of ge)delete n[e];return{shared:n,profile:t}}function we(e){let t={...e},n=be[e.style];for(let[r,i]of Object.entries(n.numeric))t[r]=e[r]*i.scale+(i.offset??0);for(let e of he)t[e]=n.colors[e];return t}function Te(e,t=ye,n=ve){if(!Number.isFinite(t)||t<0)throw RangeError(`Invalid orb transition duration: ${t}`);if(!Number.isFinite(n)||n<0)throw RangeError(`Invalid orb activation duration: ${n}`);let r=Ce(e),i=Ce(we(e));return{activationDuration:n,shared:r.shared,profiles:{idle:i.profile,thinking:r.profile},transitionDuration:t}}function Ee(e){return Te({style:e,...x[e]})}function De(e,t){return{...e.shared,...e.profiles[t]}}function Oe(e,t,n,r){return Se(n)?{...e,profiles:{...e.profiles,[t]:{...e.profiles[t],[n]:r}}}:{...e,shared:{...e.shared,[n]:r}}}function ke(e){if(!/^#[0-9a-f]{6}$/i.test(e))throw Error(`Invalid orb color: ${e}`);return[Number.parseInt(e.slice(1,3),16)/255,Number.parseInt(e.slice(3,5),16)/255,Number.parseInt(e.slice(5,7),16)/255]}function Ae(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function je(e){return e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055}function Me(e,t,n){if(n===0)return e;if(n===1)return t;let r=ke(e),i=ke(t);return`#${r.map((e,t)=>{let r=Ae(e)+(Ae(i[t])-Ae(e))*n;return Math.min(255,Math.max(0,Math.round(je(r)*255)))}).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`.toUpperCase()}function Ne(e){let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)}function Pe(e){return 1-(1-Math.min(1,Math.max(0,e)))**3}function Fe(e,t,n){let r=Math.min(1,Math.max(0,n));if(r===0)return{...e};if(r===1)return{...t};let i={...t};for(let n of me)i[n]=e[n]+(t[n]-e[n])*r;for(let n of he)i[n]=Me(e[n],t[n],r);return i}function Ie(e){let t=e.state,n={...e.params},r={...e.params},i=e.state,a=0,o=0;function s(e){if(o===0)return{...r};let t=Math.max(0,e-a)/o,s=i===`thinking`?Pe(t):Ne(t);return Fe(n,r,s)}return{sample(e,c){return e.state===t?r={...e.params}:(n=s(c),r={...e.params},i=e.state,a=c,o=Math.max(0,(e.state===`thinking`?e.activationDuration:e.transitionDuration)*1e3),t=e.state),s(c)}}}var Le=`// Glass Liquid — curated flow programs with an optional glass shell.
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
  shapeMorph:      f32,
  _padShape0:      f32,
  _padShape1:      f32,
  _padShape2:      f32,
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
  if (style == 25) { return glsSiriFluid(p, t); }
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

fn glsSdRoundBox(p: vec2<f32>, halfSize: vec2<f32>, r: f32) -> f32 {
  let q = abs(p) - halfSize + vec2<f32>(r);
  return length(max(q, vec2<f32>(0.0))) + min(max(q.x, q.y), 0.0) - r;
}

fn glsSdEllipse(p: vec2<f32>, r: vec2<f32>) -> f32 {
  let rr = max(r, vec2<f32>(0.001, 0.001));
  let k = p / rr;
  return (length(k) - 1.0) * min(rr.x, rr.y);
}

fn glsSiriAiSd(uv: vec2<f32>, rad: f32, morph: f32, t: f32) -> f32 {
  let m = clamp(morph, 0.0, 1.0);
  let sphere = length(uv) - rad;
  let ellipse = glsSdEllipse(uv, vec2<f32>(rad * 1.52, rad * 0.84));
  let drift = t * 2.2;
  let env = pow(max(1.0 - abs(uv.x) / (rad * 1.85), 0.0), 1.45);
  let waveY = (sin(uv.x * 2.2 / rad + drift) * 0.22
             + sin(uv.x * 4.1 / rad - drift * 0.62) * 0.07) * rad * env;
  let wave = max(abs(uv.y - waveY) - rad * 0.13 * (0.48 + env), abs(uv.x) - rad * 1.78);
  let capsule = glsSdRoundBox(uv, vec2<f32>(rad * 1.72, rad * 0.96), rad * 0.96);
  if (m < 0.34) {
    return mix(sphere, ellipse, smoothstep(0.0, 0.34, m));
  }
  if (m < 0.67) {
    return mix(ellipse, wave, smoothstep(0.34, 0.67, m));
  }
  return mix(wave, capsule, smoothstep(0.67, 1.0, m));
}

fn glsSiriAiFluidP(uv: vec2<f32>, rad: f32, morph: f32) -> vec2<f32> {
  let m = clamp(morph, 0.0, 1.0);
  var shift = 0.0;
  if (m < 0.34) {
    shift = mix(0.0, 0.32, smoothstep(0.0, 0.34, m));
  } else if (m < 0.67) {
    shift = mix(0.32, 0.0, smoothstep(0.34, 0.67, m));
  } else {
    shift = mix(0.0, 0.72, smoothstep(0.67, 1.0, m));
  }
  return vec2<f32>(uv.x / max(rad, 0.001), uv.y / max(rad, 0.001) + shift);
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
  let siriAi = s == 25;
  let emissionOnly = u.glassEnabled <= 0.5 && (s == 9 || s == 14 || s == 24
                    || (siriAi && u.shapeMorph > 0.5 && u.shapeMorph < 0.84));
  let contourRad = rad * glsContourScale(uv, t, u.contourDeform);
  let siriSd = glsSiriAiSd(uv, rad, u.shapeMorph, t);
  let outside = select(
    length(uv) - contourRad * (1.01 + mfEdgeD(u.edgeSoftness)),
    siriSd - rad * (0.02 + mfEdgeD(u.edgeSoftness)),
    siriAi,
  );

  if (outside > 0.0) {
    let haloRad = select(contourRad, rad, siriAi);
    let haloUv = select(uv, normalize(uv + vec2<f32>(0.0001, 0.0)) * (haloRad + max(siriSd, 0.0)), siriAi);
    let halo = clamp(mfEdgeGlow(vec3<f32>(0.0), haloUv, vec2<f32>(0.0), haloRad,
                                u.edgeSoftness, u.edgeGlow, u.glowColor.rgb),
                     vec3<f32>(0.0), vec3<f32>(1.0));
    let haloAlpha = max(halo.r, max(halo.g, halo.b));
    return vec4<f32>(halo, haloAlpha);
  }

  let p   = select(uv / contourRad, glsSiriAiFluidP(uv, rad, u.shapeMorph), siriAi);
  let pd  = select(length(p), clamp(1.0 + siriSd / max(rad, 0.001), 0.0, 1.6), siriAi);

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
`;function Re(e){let t=[];for(let n=0;n<e.length;n+=8)t.push(`    ${e.slice(n,n+8).join(`, `)},`);return t.join(`
`)}function ze(e){return{idle:fe(De(e,`idle`)),thinking:fe(De(e,`thinking`))}}function Be(e,t){let n=ze(e),r=JSON.stringify(Le);return`<!doctype html>
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
    const ribbonStyleIndex = ${C.particleRibbon};
    const ribbonInstanceCount = ${I};
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
        const colorComponent = index >= 44
          && (index - 44) % 4 < 3;
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
</html>`}function Ve(e,t){let n=ze(e);return`import Foundation
import MetalKit
import QuartzCore
import SwiftUI

private let orbMetalSource = #"""
${le}
"""#

private let orbIdleUniformSeed: [Float] = [
${Re(n.idle)}
]

private let orbThinkingUniformSeed: [Float] = [
${Re(n.thinking)}
]

private let orbActivationDuration: CFTimeInterval = ${e.activationDuration}
private let orbSettleDuration: CFTimeInterval = ${e.transitionDuration}
private let orbRibbonStyleIndex: Float = ${C.particleRibbon}
private let orbRibbonInstanceCount = ${I}

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
            let isColorComponent = index >= 44
                && (index - 44) % 4 < 3
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
}`}var He=`apple-orc`;function Ue(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return t.source===`apple-orc`?t.type===`ping`?!0:t.type===`setState`?t.state===`idle`||t.state===`thinking`:t.type===`setText`&&typeof t.text==`string`&&t.text.length<=280:!1}function We(e,t){let n=new URLSearchParams(e).get(`parentOrigin`)??t;if(!n)return null;try{let e=new URL(n);return e.protocol===`https:`||e.protocol===`http:`?e.origin:null}catch{return null}}function Ge(e,t=`/`){return`${e.replace(/\/$/,``)}${t===`/`?``:t.replace(/\/$/,``)}`}function Ke(e,t){let n=new URL(`${Ge(e)}/embed.html`);if(n.protocol!==`https:`&&n.protocol!==`http:`)throw Error(`Embed URLs require HTTP(S)`);return n.hash=t.replace(/^#/,``),n.href}function qe(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}function Je(e){return Number.isFinite(e)?Math.round(Math.min(1200,Math.max(72,e))):120}function Ye(e,t,n=120){return`<iframe\n  title="Apple Orc"\n  src="${qe(Ke(e,t))}"\n  style="border:0;width:100%;max-width:420px;height:${Je(n)}px;background:transparent"\n></iframe>`}function Xe(e,t,n=120){let r=Ke(e,t),i=new URL(r).origin;return`import { useRef } from "react";\n\nexport function AppleOrcEmbed() {\n  const frame = useRef(null);\n  return (\n    <>\n      <iframe\n        ref={frame}\n        title="Apple Orc"\n        src=${JSON.stringify(r)}\n        style={{ border: 0, width: "100%", maxWidth: 420, height: ${Je(n)}, background: "transparent" }}\n      />\n      <button onClick={() => frame.current?.contentWindow?.postMessage(\n        { source: "apple-orc", type: "setState", state: "thinking" },\n        ${JSON.stringify(i)},\n      )}>Thinking</button>\n    </>\n  );\n}\n\n// JavaScript / JSX example. In TSX use useRef<HTMLIFrameElement>(null).\n// Wait for the iframe load or ready event before sending commands.\n// Add ?parentOrigin=YOUR_ENCODED_ORIGIN before # when using no-referrer.`}function Ze(){return`import { AppleOrc } from "@/lib/orb";

export function StatusOrb() {
  return <AppleOrc preset="siri" state="thinking" size={72} label="Thinking..." />;
}

// Source import, not an npm package. Copy src/lib/orb, src/lib/utils.ts,
// required styles and license notices; see the integration guide.`}function Qe(e,t,n){let r=De(e.configuration,`thinking`),i=De(e.configuration,`idle`);return JSON.stringify({preset:r.style,state:e.activeState,preview:t,text:n,activationDuration:e.configuration.activationDuration,transitionDuration:e.configuration.transitionDuration,thinking:r,idle:i},null,2)}function $e(e,t,n,r,i){let a=r===`scene`?120:360;return{web:Be(e.configuration,e.activeState),swift:Ve(e.configuration,e.activeState),iframe:Ye(t,n,a),react:Xe(t,n,a),dropin:Ze(),json:Qe(e,r,i)}}function et(){return typeof window<`u`}function tt(){if(!et())return`en`;try{let e=window.localStorage.getItem(ee);if(e===`zh`||e===`en`)return e}catch{}return navigator.language.toLowerCase().startsWith(`zh`)?`zh`:`en`}function nt(e){if(et())try{window.localStorage.setItem(ee,e)}catch{}}function rt(){return new URLSearchParams(window.location.hash.replace(/^#/,``))}function it(){return et()&&rt().get(`preview`)===`scene`?`scene`:`orb`}function at(){if(!et())return T;let e=rt().get(`text`);return e===null?T:N(e)}function ot(e,t){return e===`thinking`?t:`idle${t.charAt(0).toUpperCase()}${t.slice(1)}`}function st(){return{configuration:Ee(w.style),activeState:_e}}function ct(){if(!et())return st();let e=rt(),t=e.get(`style`),n=t&&S.includes(t)?t:w.style,r={style:n,...x[n]},i=e.get(`glass`);i===`1`&&(r.glassEnabled=!0),i===`0`&&(r.glassEnabled=!1);for(let t of ae){let n=e.get(t.key);if(n===null)continue;let i=Number(n);Number.isFinite(i)&&(r[t.key]=ce(i,t.min,t.max))}for(let t of j){let n=e.get(t);if(n===null)continue;let i=M(n);i&&(r[t]=i)}let a=e.get(`transition`),o=a===null?null:Number(a),s=o!==null&&Number.isFinite(o)?ce(o,E.min,E.max):ye,c=e.get(`activation`),l=c===null?null:Number(c),u=Te(r,s,l!==null&&Number.isFinite(l)?ce(l,te.min,te.max):ve);for(let t of ge){let n=e.get(ot(`idle`,t));if(n!==null){if(typeof u.profiles.idle[t]==`number`){let e=A.get(t),r=Number(n);e&&Number.isFinite(r)&&(u=Oe(u,`idle`,t,ce(r,e.min,e.max)))}else{let e=M(n);e&&(u=Oe(u,`idle`,t,e))}}}let d=e.get(`state`),f=d&&pe.includes(d)?d:_e;return{configuration:u,activeState:f}}function lt(e,t,n){let{configuration:r,activeState:i}=e,a=De(r,`thinking`),o=new URLSearchParams;o.set(`effect`,`orb-glass-liquid`),o.set(`style`,a.style),o.set(`glass`,a.glassEnabled?`1`:`0`),o.set(`state`,i),o.set(`activation`,String(r.activationDuration)),o.set(`transition`,String(r.transitionDuration)),o.set(`preview`,t),o.set(`text`,n);for(let e of ae)o.set(e.key,String(a[e.key])),Se(e.key)&&o.set(ot(`idle`,e.key),String(r.profiles.idle[e.key]));for(let e of j)o.set(e,a[e]),Se(e)&&o.set(ot(`idle`,e),r.profiles.idle[e]);return o.toString()}function ut(e,t,n){et()&&window.history.replaceState(window.history.state,``,`#${lt(e,t,n)}`)}var dt=[`sphere`,`ellipse`,`wave`,`capsule`],ft={sphere:0,ellipse:.34,wave:.67,capsule:1},pt={zh:{sphere:`圆球`,ellipse:`椭圆`,wave:`波纹`,capsule:`胶囊`},en:{sphere:`Sphere`,ellipse:`Ellipse`,wave:`Wave`,capsule:`Capsule`}},mt=[{shape:`sphere`,morph:0,widthScale:1,heightScale:1,waveY:0,waveAmp:.1,waveThick:.028,waveSoft:.12,bodyAlpha:1,glass:1,corner:1,silhouette:0},{shape:`ellipse`,morph:.34,widthScale:1.5,heightScale:.8,waveY:.46,waveAmp:.08,waveThick:.024,waveSoft:.16,bodyAlpha:1,glass:1,corner:1,silhouette:0},{shape:`wave`,morph:.67,widthScale:2.08,heightScale:.42,waveY:0,waveAmp:.34,waveThick:.038,waveSoft:.1,bodyAlpha:0,glass:0,corner:.5,silhouette:.35},{shape:`capsule`,morph:1,widthScale:1.78,heightScale:.96,waveY:.4,waveAmp:.085,waveThick:.026,waveSoft:.28,bodyAlpha:1,glass:1,corner:1,silhouette:1}];function ht(e,t,n){return e+(t-e)*n}function gt(e){let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)}function _t(e){return 1-(1-Math.min(1,Math.max(0,e)))**4}function vt(e){return e<.17?`sphere`:e<.505?`ellipse`:e<.835?`wave`:`capsule`}function yt(e){let t=Math.min(1,Math.max(0,e)),n=mt[0],r=mt[1];for(let e=0;e<mt.length-1;e+=1){if(t>=mt[e].morph&&t<=mt[e+1].morph){n=mt[e],r=mt[e+1];break}t>mt[e+1].morph&&(n=mt[e+1],r=mt[Math.min(e+2,mt.length-1)])}let i=Math.max(r.morph-n.morph,1e-4),a=gt((t-n.morph)/i);return{shape:a<.5?n.shape:r.shape,widthScale:ht(n.widthScale,r.widthScale,a),heightScale:ht(n.heightScale,r.heightScale,a),waveY:ht(n.waveY,r.waveY,a),waveAmp:ht(n.waveAmp,r.waveAmp,a),waveThick:ht(n.waveThick,r.waveThick,a),waveSoft:ht(n.waveSoft,r.waveSoft,a),bodyAlpha:ht(n.bodyAlpha,r.bodyAlpha,a),glass:ht(n.glass,r.glass,a),corner:ht(n.corner,r.corner,a),silhouette:ht(n.silhouette,r.silhouette,a)}}function bt(e){return e.silhouette>.5?`stadium`:`ellipse`}function xt(e){return[Number.parseInt(e.slice(1,3),16),Number.parseInt(e.slice(3,5),16),Number.parseInt(e.slice(5,7),16)]}function L(e,t){let[n,r,i]=xt(e);return`rgba(${n}, ${r}, ${i}, ${t})`}function St(e,t,n){let r=xt(e),i=xt(t),a=Math.min(1,Math.max(0,n));return`#${[Math.round(r[0]+(i[0]-r[0])*a),Math.round(r[1]+(i[1]-r[1])*a),Math.round(r[2]+(i[2]-r[2])*a)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Ct(e,t){let n=(t%1+1)%1;return n<.25?St(e.colorA,e.colorB,n/.25):n<.5?St(e.colorB,e.colorC,(n-.25)/.25):n<.75?St(e.colorC,e.colorD,(n-.5)/.25):St(e.colorD,e.colorA,(n-.75)/.25)}function wt(e,t,n,r,i,a){let o=Math.max(0,Math.min(a,r/2,i/2));if(e.beginPath(),typeof e.roundRect==`function`){e.roundRect(t,n,r,i,o);return}e.moveTo(t+o,n),e.arcTo(t+r,n,t+r,n+i,o),e.arcTo(t+r,n+i,t,n+i,o),e.arcTo(t,n+i,t,n,o),e.arcTo(t,n,t+r,n,o),e.closePath()}function Tt(e,t,n,r,i,a){if(a){wt(e,t-r/2,n-i/2,r,i,Math.min(r,i)/2);return}e.beginPath(),e.ellipse(t,n,r/2,i/2,0,0,Math.PI*2)}function Et(e,t,n,r,i){let a=i?Math.sqrt(Math.max(0,1-e*e)):Math.max(0,Math.cos(Math.min(Math.abs(e),1)*Math.PI*.5))**1.18;return{y:Math.sin(e*Math.PI*2.18+n*2.05+r)*t*a+Math.sin(e*Math.PI*4.4-n*1.18+r*.45)*t*.16*a,env:a}}function Dt(e,t,n,r,i,a,o,s){e.beginPath();for(let c=0;c<=s;c+=1){let l=c/s*2-1,{y:u,env:d}=Et(l,n,r,i,a),f=l*t,p=u+o*d;c===0?e.moveTo(f,p):e.lineTo(f,p)}}function Ot(e,t,n,r){let i=e.createLinearGradient(-t,0,t,0);return i.addColorStop(0,L(n.colorD,0)),i.addColorStop(.1,L(n.colorA,r*.45)),i.addColorStop(.28,L(n.highlightColor,r)),i.addColorStop(.48,L(n.colorB,r*.9)),i.addColorStop(.68,L(n.colorC,r*.75)),i.addColorStop(.86,L(n.colorD,r*.45)),i.addColorStop(1,L(n.colorD,0)),i}function kt(e,t,n,r,i,a,o,s,c=0,l={}){let u=l.crossing??!1,d=l.wrapSphere??!1,f=l.backWave??!1,p=l.soft??.12,m=i*(.94+.06*Math.sin(o*.8)),h=Math.max(1.4,a),g=u?160:120,_=u?[0,Math.PI]:d?[0,.58]:[0];e.save(),e.translate(t,n+c),e.lineCap=`round`,e.lineJoin=`round`,e.globalCompositeOperation=`lighter`,f&&(e.save(),e.globalAlpha=.28,e.filter=`blur(${Math.max(1.2,h*.8)}px)`,e.strokeStyle=Ot(e,r,s,.55),e.lineWidth=h*1.1,Dt(e,r,m*.42,o+.7,Math.PI,d,0,80),e.stroke(),e.restore()),e.filter=`blur(${Math.max(2.2,h*(1.6+p*2.2))}px)`;for(let t of _){let n=d&&t!==0?m*.72:m;e.strokeStyle=L(s.highlightColor,.5*s.exposure),e.lineWidth=h*(2.4+p),Dt(e,r,n,o,t,d,0,g),e.stroke()}e.filter=`none`;for(let t of _){let n=d&&t!==0?m*.72:m,i=h*(1.15+p*.4);e.strokeStyle=Ot(e,r,s,.55),e.lineWidth=i,Dt(e,r,n,o,t,d,h*.55,g),e.stroke(),e.strokeStyle=L(s.colorC,.5),e.lineWidth=i*.85,Dt(e,r,n,o,t,d,-h*.45,g),e.stroke(),e.strokeStyle=L(s.colorB,.55),e.lineWidth=i*.8,Dt(e,r,n,o,t,d,h*.7,g),e.stroke(),e.strokeStyle=Ot(e,r,s,1),e.lineWidth=h*.95,Dt(e,r,n,o,t,d,0,g),e.stroke(),e.strokeStyle=L(s.highlightColor,.95),e.lineWidth=Math.max(1,h*.42),Dt(e,r,n,o,t,d,0,g),e.stroke()}e.restore()}function At(e,t,n,r,i){let a=yt(i.shapeMorph),o=Math.min(t,n),s=1+i.contourDeform*.42,c=1+.01*Math.sin(r*.62),l=Math.min(t*.94,o*a.widthScale*i.radius)*s*c,u=Math.min(n*.9,o*a.heightScale*i.radius)/Math.sqrt(s)/c,d=t/2,f=n/2,p=bt(a)===`stadium`,m=a.bodyAlpha<.18,h=!m&&!p;m||a.waveAmp;let g=m?t*.46:l*.46,_=(m?n*.18:Math.min(u,l)*a.waveAmp)*(.85+i.ridgeAmt*.3),v=m?Math.max(2.4,t*.007):Math.min(u,l)*a.waveThick*(.9+i.zoom*.25),y=f+(m?0:u*.5*a.waveY),b=Math.min(l,u);if(e.clearRect(0,0,t,n),i.edgeGlow>.01||m){let r=Math.max(l,u)*(.55+i.edgeGlow*.4),a=e.createRadialGradient(d,y,2,d,y,r);a.addColorStop(0,L(i.glowColor,.18*Math.max(i.edgeGlow,.12)*i.exposure)),a.addColorStop(.45,L(i.colorB,.04*i.exposure)),a.addColorStop(1,`rgba(0,0,0,0)`),e.fillStyle=a,e.fillRect(0,0,t,n)}if(m){kt(e,d,y,g,_,v,r,i,0,{crossing:!0,wrapSphere:!1,backWave:!1,soft:a.waveSoft});return}p&&(e.save(),e.globalCompositeOperation=`lighter`,e.filter=`blur(${Math.max(3,b*.035)}px)`,e.strokeStyle=L(i.highlightColor,.5*a.glass),e.lineWidth=Math.max(2.4,b*.04),Tt(e,d,f,l,u,!0),e.stroke(),e.restore()),e.save(),e.globalAlpha=a.bodyAlpha,Tt(e,d,f,l,u,p),e.clip();let x=e.createRadialGradient(d-l*.12,f-u*.28,b*.04,d,f+u*.08,Math.max(l,u)*.78);x.addColorStop(0,St(`#1a1c28`,i.colorA,.08)),x.addColorStop(.35,St(`#09090f`,i.colorD,.06)),x.addColorStop(1,`#030308`),e.fillStyle=x,e.fillRect(d-l,f-u,l*2,u*2);let S=e.createLinearGradient(d,f-u/2,d,f+u/2);if(S.addColorStop(0,`rgba(255,255,255,0.1)`),S.addColorStop(.4,`rgba(0,0,0,0)`),S.addColorStop(1,`rgba(0,0,0,0.5)`),e.fillStyle=S,e.fillRect(d-l,f-u,l*2,u*2),kt(e,d,y,g,_,v,r,i,0,{crossing:!1,wrapSphere:h,backWave:h,soft:a.waveSoft}),e.restore(),i.glassEnabled&&a.glass>.05){e.save(),e.globalAlpha=a.glass*Math.max(i.glassOpacity,.28),Tt(e,d,f,l,u,p),e.clip(),e.globalCompositeOperation=`lighter`;let t=e.createRadialGradient(d-l*.26,f-u*.34,1,d-l*.18,f-u*.24,b*.42);t.addColorStop(0,L(i.sheenColor,.7)),t.addColorStop(.28,L(i.specColor,.16)),t.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=t,e.beginPath(),e.ellipse(d-l*.2,f-u*.28,l*.22,u*.16,-.55,0,Math.PI*2),e.fill(),e.restore()}e.save();let C=p?Math.max(1.6,b*.014):Math.max(1.1,b*.0075),w=e.createLinearGradient(d-l*.4,f-u*.5,d+l*.4,f+u*.45);w.addColorStop(0,L(i.highlightColor,p?.55:.38)),w.addColorStop(.45,L(i.colorB,p?.22:.1)),w.addColorStop(1,L(i.shellEdge,.12)),e.strokeStyle=w,e.lineWidth=C,Tt(e,d,f,l-C,u-C,p),e.stroke(),e.restore()}function jt(e,t,n,r,i,a){let o=r*(.1+a.warp*.018)*(.45+a.ridgeAmt),s=r*(.16+a.zoom*.22),c=n+Math.sin(i*1.15)*r*.1;e.save(),e.translate(t,c),e.rotate(Math.sin(i*.27)*.12*(.4+a.contourDeform)),e.filter=`blur(${Math.max(1.2,r*.055)}px)`;let l=e.createLinearGradient(-r,0,r,0);l.addColorStop(0,L(a.colorD,0)),l.addColorStop(.18,L(a.colorD,.85)),l.addColorStop(.38,a.colorC),l.addColorStop(.52,a.colorB),l.addColorStop(.7,a.colorA),l.addColorStop(.88,L(a.colorD,.7)),l.addColorStop(1,L(a.colorD,0)),e.beginPath(),e.moveTo(-r,0);for(let t=0;t<=48;t+=1){let n=-r+2*r*t/48,s=n/r,c=Math.sin(s*(2.2+a.zoom*4)+i*2.1)*o+Math.sin(s*5.4-i*1.3)*o*.28;e.lineTo(n,c)}e.strokeStyle=l,e.lineWidth=s,e.lineCap=`round`,e.stroke(),e.filter=`blur(${Math.max(.6,r*.03)}px)`,e.globalCompositeOperation=`lighter`,e.strokeStyle=L(a.highlightColor,.45),e.lineWidth=s*.28,e.stroke(),e.restore()}function Mt(e,t,n,r,i,a){let o=Math.max(2,Math.round(a.ribbonCount));e.save(),e.globalCompositeOperation=`lighter`;for(let s=0;s<o;s+=1){let o=i*.7+s*.6;e.beginPath();for(let i=0;i<=40;i+=1){let a=i/40*Math.PI*2+o*.4+s,c=r*(.22+.18*Math.cos(a*2+o)),l=t+Math.cos(a+s*.4)*c*1.6,u=n+Math.sin(a*.85+o)*c*.55;i===0?e.moveTo(l,u):e.lineTo(l,u)}e.strokeStyle=L(Ct(a,s*.18+i*.02),.55),e.lineWidth=Math.max(1.2,r*.045*a.ribbonWidth*2),e.lineCap=`round`,e.filter=`blur(${Math.max(.8,r*.02*a.particleBloom)}px)`,e.stroke()}e.restore()}function Nt(e,t,n,r,i,a){e.save(),e.translate(t,n),e.rotate(a.metalAngle*Math.PI/180);let o=10+Math.round(a.bandDensity*3);for(let t=0;t<o;t+=1){let n=-r+2*r*t/o+Math.sin(i+t)*r*.04,s=e.createLinearGradient(n,-r,n+r*.18,r);s.addColorStop(0,L(a.colorA,.15)),s.addColorStop(.4,L(a.colorB,.55)),s.addColorStop(.7,L(a.shellMid,.4)),s.addColorStop(1,L(a.colorD,.2)),e.fillStyle=s,e.fillRect(n,-r,r*(.08+a.metalStretch*.1),r*2)}e.restore()}function Pt(e,t,n,r,i){if(!i.glassEnabled)return;let a=e.createRadialGradient(t,n,r*.55,t,n,r);a.addColorStop(0,`rgba(255,255,255,0)`),a.addColorStop(.72,L(i.shellInner,.02)),a.addColorStop(.88,L(i.shellMid,.18+i.sheen*.12)),a.addColorStop(1,L(i.shellEdge,.42+i.shellEdgeAlpha*.35)),e.fillStyle=a,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e.save(),e.globalCompositeOperation=`lighter`;let o=e.createRadialGradient(t-r*.32,n-r*.38,r*.02,t-r*.22,n-r*.32,r*.42);o.addColorStop(0,L(i.sheenColor,.55)),o.addColorStop(.45,L(i.specColor,.12)),o.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=o,e.beginPath(),e.ellipse(t-r*.18,n-r*.28,r*.42,r*.28,-.5,0,Math.PI*2),e.fill(),e.restore()}function Ft(e,t,n,r,i){if(i.style===`siriAi`){At(e,t,n,r,i);return}let a=t/2,o=n/2,s=Math.max(8,Math.min(t,n)*.5*i.radius);if(e.clearRect(0,0,t,n),i.edgeGlow>.01){let r=e.createRadialGradient(a,o,s*.7,a,o,s*(1.35+i.edgeGlow));r.addColorStop(0,L(i.glowColor,.22*i.edgeGlow*i.exposure)),r.addColorStop(1,`rgba(0,0,0,0)`),e.fillStyle=r,e.fillRect(0,0,t,n)}e.save(),e.beginPath(),e.arc(a,o,s,0,Math.PI*2),e.clip();let c=e.createRadialGradient(a,o-s*.15,s*.08,a,o,s);c.addColorStop(0,St(i.colorA,`#0a0a12`,.55+i.shade*.2)),c.addColorStop(.55,St(i.colorD,`#050509`,.72)),c.addColorStop(1,`#030308`),e.fillStyle=c,e.fillRect(a-s,o-s,s*2,s*2);let l=i.style;l===`particleRibbon`?Mt(e,a,o,s,r,i):l===`chromaticMetal`||l===`chrome`?(Nt(e,a,o,s,r,i),l===`chromaticMetal`&&(e.save(),e.globalCompositeOperation=`screen`,e.filter=`blur(${s*.04}px)`,e.fillStyle=L(i.shellMid,.25*i.chromaticShift),e.fillRect(a-s+3,o-s,s*2,s*2),e.fillStyle=L(i.shellEdge,.2*i.chromaticShift),e.fillRect(a-s-3,o-s,s*2,s*2),e.restore())):(jt(e,a,o,s,r,i),(l===`aurora`||l===`plasma`)&&(e.save(),e.globalAlpha=.55,e.translate(0,s*.18),e.rotate(.4),jt(e,a,o,s*.85,r*.7+1.2,i),e.restore())),e.restore(),Pt(e,a,o,s,i),e.beginPath(),e.arc(a,o,s,0,Math.PI*2),e.strokeStyle=L(i.highlightColor,.22+i.sheen*.1),e.lineWidth=Math.max(1,s*(.012+i.edgeSoftness)),e.stroke()}function It({canvas:e,getTarget:t}){let n=e.getContext(`2d`);if(!n)return()=>{};let r=n,i=!1,a=0,o=null,s=0,c=Ie(t());function l(n){if(i)return;let u=Math.min(window.devicePixelRatio||1,2),d=Math.max(1,Math.floor(e.clientWidth*u)),f=Math.max(1,Math.floor(e.clientHeight*u));(e.width!==d||e.height!==f)&&(e.width=d,e.height=f);let p=c.sample(t(),n),m=o===null?0:Math.min(.1,Math.max(0,(n-o)/1e3));o=n,s+=m*Math.max(p.speed,0),Ft(r,d,f,s,p),a=requestAnimationFrame(l)}return a=requestAnimationFrame(l),()=>{i=!0,cancelAnimationFrame(a)}}function Lt({canvas:e,getTarget:t,onError:n,onReady:r}){let i=!1,a=0,o=null,s=null,c=!1,l=!1,u=null,d=0;function f(e){i||l||(l=!0,cancelAnimationFrame(a),s?.destroy(),o?.destroy(),n(e))}async function p(){if(!navigator.gpu)throw Error(`当前浏览器不支持 WebGPU`);let n=await navigator.gpu.requestAdapter();if(!n)throw Error(`未找到可用的 WebGPU 适配器`);if(o=await n.requestDevice(),i){o.destroy();return}let p=e.getContext(`webgpu`);if(!p)throw Error(`无法创建 WebGPU 画布上下文`);let m=p,h=navigator.gpu.getPreferredCanvasFormat();m.configure({device:o,format:h,alphaMode:`premultiplied`});let g=o.createShaderModule({label:`orb-glass-liquid`,code:Le}),_=(await g.getCompilationInfo()).messages.filter(e=>e.type===`error`);if(_.length>0)throw Error(_.map(e=>`${e.lineNum}:${e.linePos} ${e.message}`).join(`
`));if(i||l)return;let v=o.createRenderPipeline({label:`orb-glass-liquid-pipeline`,layout:`auto`,vertex:{module:g,entryPoint:`vs_main`},fragment:{module:g,entryPoint:`fs_main`,targets:[{format:h,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),y=o.createRenderPipeline({label:`particle-ribbon-pipeline`,layout:`auto`,vertex:{module:g,entryPoint:`ribbon_vs_main`},fragment:{module:g,entryPoint:`ribbon_fs_main`,targets:[{format:h,blend:{color:{srcFactor:`one`,dstFactor:`one`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),b=o.createRenderPipeline({label:`particle-ribbon-glass-composite-pipeline`,layout:`auto`,vertex:{module:g,entryPoint:`vs_main`},fragment:{module:g,entryPoint:`ribbon_composite_fs_main`,targets:[{format:h,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),x=new Float32Array(140),S=o.createBuffer({size:x.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),w=o.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:S}}]}),T=o.createBindGroup({layout:y.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:S}}]}),ee=o.createSampler({addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,magFilter:`linear`,minFilter:`linear`}),te=null,E=Ie(t());o.lost.then(e=>{f(Error(`WebGPU 设备已断开：${e.message||e.reason}`))}),o.addEventListener(`uncapturederror`,e=>{e.preventDefault(),f(Error(`WebGPU 渲染错误：${e.error.message}`))});function ne(){let t=Math.min(window.devicePixelRatio||1,2),n=Math.max(1,Math.floor(e.clientWidth*t)),r=Math.max(1,Math.floor(e.clientHeight*t));(e.width!==n||e.height!==r)&&(e.width=n,e.height=r,s?.destroy(),s=null,te=null)}function D(){s&&te||(s=o.createTexture({label:`particle-ribbon-offscreen-texture`,size:{width:e.width,height:e.height},format:h,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),te=o.createBindGroup({layout:b.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:S}},{binding:1,resource:s.createView()},{binding:2,resource:ee}]}))}function O(n){if(!(i||l||!o))try{ne();let p=E.sample(t(),n),h=u===null?0:Math.min(.1,Math.max(0,(n-u)/1e3));u=n,d+=h*Math.max(p.speed,0);let g=d/Math.max(p.speed,.001);de(x,e.width,e.height,g,p),o.queue.writeBuffer(S,0,x);let _=C[p.style]===C.particleRibbon,ee=o.createCommandEncoder();if(_){D();let e=ee.beginRenderPass({colorAttachments:[{view:s.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});e.setPipeline(y),e.setBindGroup(0,T),e.draw(6,I,0,0),e.end()}let k=ee.beginRenderPass({colorAttachments:[{view:m.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});_?(k.setPipeline(b),k.setBindGroup(0,te)):(k.setPipeline(v),k.setBindGroup(0,w)),k.draw(3,1,0,0),k.end(),o.queue.submit([ee.finish()]),o.queue.onSubmittedWorkDone().then(()=>{i||l||(c||(c=!0,r()),a=requestAnimationFrame(O))}).catch(e=>{f(e instanceof Error?e:Error(String(e)))})}catch(e){f(e instanceof Error?e:Error(String(e)))}}a=requestAnimationFrame(O)}return p().catch(e=>{f(e instanceof Error?e:Error(String(e)))}),()=>{i=!0,cancelAnimationFrame(a),s?.destroy(),o?.destroy()}}function Rt(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Rt(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function zt(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Rt(e))&&(r&&(r+=` `),r+=t);return r}var Bt=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Vt=(e,t)=>({classGroupId:e,validator:t}),Ht=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Ut=`-`,Wt=[],Gt=`arbitrary..`,Kt=e=>{let t=Yt(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Jt(e);let n=e.split(Ut);return qt(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Bt(i,t):t:i||Wt}return n[e]||Wt}}},qt=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=qt(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Ut):e.slice(t).join(Ut),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Jt=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Gt+r:void 0})(),Yt=e=>{let{theme:t,classGroups:n}=e;return Xt(n,t)},Xt=(e,t)=>{let n=Ht();for(let r in e){let i=e[r];Zt(i,n,r,t)}return n},Zt=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Qt(i,t,n,r)}},Qt=(e,t,n,r)=>{if(typeof e==`string`){$t(e,t,n);return}if(typeof e==`function`){en(e,t,n,r);return}tn(e,t,n,r)},$t=(e,t,n)=>{let r=e===``?t:nn(t,e);r.classGroupId=n},en=(e,t,n,r)=>{if(rn(e)){Zt(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Vt(n,e))},tn=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Zt(o,nn(t,a),n,r)}},nn=(e,t)=>{let n=e,r=t.split(Ut),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Ht(),n.nextPart.set(t,i)),n=i}return n},rn=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,an=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},on=`!`,sn=`:`,cn=[],ln=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),un=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===sn){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(on)?(c=s.slice(0,-1),l=!0):s.startsWith(on)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return ln(t,l,c,u)};if(t){let e=t+sn,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):ln(cn,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},dn=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},fn=e=>({cache:an(e.cacheSize),parseClassName:un(e),sortModifiers:dn(e),postfixLookupClassGroupIds:pn(e),...Kt(e)}),pn=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},mn=/\s+/,hn=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(mn),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+on:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},gn=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=_n(n))&&(i&&(i+=` `),i+=r);return i},_n=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=_n(e[r]))&&(n&&(n+=` `),n+=t);return n},vn=(e,...t)=>{let n,r,i,a,o=o=>(n=fn(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=hn(e,n);return i(e,a),a};return a=o,(...e)=>a(gn(...e))},yn=[],R=e=>{let t=t=>t[e]||yn;return t.isThemeGetter=!0,t},bn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,xn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Sn=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Cn=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,wn=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Tn=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,En=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Dn=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,On=e=>Sn.test(e),z=e=>!!e&&!Number.isNaN(Number(e)),kn=e=>!!e&&Number.isInteger(Number(e)),An=e=>e.endsWith(`%`)&&z(e.slice(0,-1)),jn=e=>Cn.test(e),Mn=()=>!0,Nn=e=>wn.test(e)&&!Tn.test(e),Pn=()=>!1,Fn=e=>En.test(e),In=e=>Dn.test(e),Ln=e=>!B(e)&&!V(e),Rn=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),zn=e=>er(e,ir,Pn),B=e=>bn.test(e),Bn=e=>er(e,ar,Nn),Vn=e=>er(e,or,z),Hn=e=>er(e,cr,Mn),Un=e=>er(e,sr,Pn),Wn=e=>er(e,nr,Pn),Gn=e=>er(e,rr,In),Kn=e=>er(e,lr,Fn),V=e=>xn.test(e),qn=e=>tr(e,ar),Jn=e=>tr(e,sr),Yn=e=>tr(e,nr),Xn=e=>tr(e,ir),Zn=e=>tr(e,rr),Qn=e=>tr(e,lr,!0),$n=e=>tr(e,cr,!0),er=(e,t,n)=>{let r=bn.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},tr=(e,t,n=!1)=>{let r=xn.exec(e);return r?r[1]?t(r[1]):n:!1},nr=e=>e===`position`||e===`percentage`,rr=e=>e===`image`||e===`url`,ir=e=>e===`length`||e===`size`||e===`bg-size`,ar=e=>e===`length`,or=e=>e===`number`,sr=e=>e===`family-name`,cr=e=>e===`number`||e===`weight`,lr=e=>e===`shadow`,ur=vn(()=>{let e=R(`color`),t=R(`font`),n=R(`text`),r=R(`font-weight`),i=R(`tracking`),a=R(`leading`),o=R(`breakpoint`),s=R(`container`),c=R(`spacing`),l=R(`radius`),u=R(`shadow`),d=R(`inset-shadow`),f=R(`text-shadow`),p=R(`drop-shadow`),m=R(`blur`),h=R(`perspective`),g=R(`aspect`),_=R(`ease`),v=R(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),V,B],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[V,B,c],T=()=>[On,`full`,`auto`,...w()],ee=()=>[kn,`none`,`subgrid`,V,B],te=()=>[`auto`,{span:[`full`,kn,V,B]},kn,V,B],E=()=>[kn,`auto`,V,B],ne=()=>[`auto`,`min`,`max`,`fr`,V,B],D=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],O=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],k=()=>[`auto`,...w()],re=()=>[On,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],ie=()=>[On,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],ae=()=>[On,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],A=()=>[e,V,B],j=()=>[...b(),Yn,Wn,{position:[V,B]}],oe=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],se=()=>[`auto`,`cover`,`contain`,Xn,zn,{size:[V,B]}],ce=()=>[An,qn,Bn],M=()=>[``,`none`,`full`,l,V,B],N=()=>[``,z,qn,Bn],P=()=>[`solid`,`dashed`,`dotted`,`double`],le=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],F=()=>[z,An,Yn,Wn],ue=()=>[``,`none`,m,V,B],de=()=>[`none`,z,V,B],fe=()=>[`none`,z,V,B],I=()=>[z,V,B],pe=()=>[On,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[jn],breakpoint:[jn],color:[Mn],container:[jn],"drop-shadow":[jn],ease:[`in`,`out`,`in-out`],font:[Ln],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[jn],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[jn],shadow:[jn],spacing:[`px`,z],text:[jn],"text-shadow":[jn],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,On,B,V,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,V,B]}],"container-named":[Rn],columns:[{columns:[z,B,V,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[kn,`auto`,V,B]}],basis:[{basis:[On,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[z,On,`auto`,`initial`,`none`,B]}],grow:[{grow:[``,z,V,B]}],shrink:[{shrink:[``,z,V,B]}],order:[{order:[kn,`first`,`last`,`none`,V,B]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:te()}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:te()}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":ne()}],"auto-rows":[{"auto-rows":ne()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...D(),`normal`]}],"justify-items":[{"justify-items":[...O(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...O()]}],"align-content":[{content:[`normal`,...D()]}],"align-items":[{items:[...O(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...O(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":D()}],"place-items":[{"place-items":[...O(),`baseline`]}],"place-self":[{"place-self":[`auto`,...O()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:k()}],mx:[{mx:k()}],my:[{my:k()}],ms:[{ms:k()}],me:[{me:k()}],mbs:[{mbs:k()}],mbe:[{mbe:k()}],mt:[{mt:k()}],mr:[{mr:k()}],mb:[{mb:k()}],ml:[{ml:k()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:re()}],"inline-size":[{inline:[`auto`,...ie()]}],"min-inline-size":[{"min-inline":[`auto`,...ie()]}],"max-inline-size":[{"max-inline":[`none`,...ie()]}],"block-size":[{block:[`auto`,...ae()]}],"min-block-size":[{"min-block":[`auto`,...ae()]}],"max-block-size":[{"max-block":[`none`,...ae()]}],w:[{w:[s,`screen`,...re()]}],"min-w":[{"min-w":[s,`screen`,`none`,...re()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...re()]}],h:[{h:[`screen`,`lh`,...re()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...re()]}],"max-h":[{"max-h":[`screen`,`lh`,...re()]}],"font-size":[{text:[`base`,n,qn,Bn]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,$n,Hn]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,An,B]}],"font-family":[{font:[Jn,Un,t]}],"font-features":[{"font-features":[B]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,V,B]}],"line-clamp":[{"line-clamp":[z,`none`,V,Vn]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,V,B]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,V,B]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...P(),`wavy`]}],"text-decoration-thickness":[{decoration:[z,`from-font`,`auto`,V,Bn]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[z,`auto`,V,B]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[kn,V,B]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,V,B]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,V,B]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:j()}],"bg-repeat":[{bg:oe()}],"bg-size":[{bg:se()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},kn,V,B],radial:[``,V,B],conic:[kn,V,B]},Zn,Gn]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:ce()}],"gradient-via-pos":[{via:ce()}],"gradient-to-pos":[{to:ce()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:M()}],"rounded-s":[{"rounded-s":M()}],"rounded-e":[{"rounded-e":M()}],"rounded-t":[{"rounded-t":M()}],"rounded-r":[{"rounded-r":M()}],"rounded-b":[{"rounded-b":M()}],"rounded-l":[{"rounded-l":M()}],"rounded-ss":[{"rounded-ss":M()}],"rounded-se":[{"rounded-se":M()}],"rounded-ee":[{"rounded-ee":M()}],"rounded-es":[{"rounded-es":M()}],"rounded-tl":[{"rounded-tl":M()}],"rounded-tr":[{"rounded-tr":M()}],"rounded-br":[{"rounded-br":M()}],"rounded-bl":[{"rounded-bl":M()}],"border-w":[{border:N()}],"border-w-x":[{"border-x":N()}],"border-w-y":[{"border-y":N()}],"border-w-s":[{"border-s":N()}],"border-w-e":[{"border-e":N()}],"border-w-bs":[{"border-bs":N()}],"border-w-be":[{"border-be":N()}],"border-w-t":[{"border-t":N()}],"border-w-r":[{"border-r":N()}],"border-w-b":[{"border-b":N()}],"border-w-l":[{"border-l":N()}],"divide-x":[{"divide-x":N()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":N()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...P(),`hidden`,`none`]}],"divide-style":[{divide:[...P(),`hidden`,`none`]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-bs":[{"border-bs":A()}],"border-color-be":[{"border-be":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...P(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[z,V,B]}],"outline-w":[{outline:[``,z,qn,Bn]}],"outline-color":[{outline:A()}],shadow:[{shadow:[``,`none`,u,Qn,Kn]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":[`none`,d,Qn,Kn]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:N()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[z,Bn]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":N()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":[`none`,f,Qn,Kn]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[z,V,B]}],"mix-blend":[{"mix-blend":[...le(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":le()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[z]}],"mask-image-linear-from-pos":[{"mask-linear-from":F()}],"mask-image-linear-to-pos":[{"mask-linear-to":F()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":F()}],"mask-image-t-to-pos":[{"mask-t-to":F()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":F()}],"mask-image-r-to-pos":[{"mask-r-to":F()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":F()}],"mask-image-b-to-pos":[{"mask-b-to":F()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":F()}],"mask-image-l-to-pos":[{"mask-l-to":F()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":F()}],"mask-image-x-to-pos":[{"mask-x-to":F()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":F()}],"mask-image-y-to-pos":[{"mask-y-to":F()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[V,B]}],"mask-image-radial-from-pos":[{"mask-radial-from":F()}],"mask-image-radial-to-pos":[{"mask-radial-to":F()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[z]}],"mask-image-conic-from-pos":[{"mask-conic-from":F()}],"mask-image-conic-to-pos":[{"mask-conic-to":F()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:j()}],"mask-repeat":[{mask:oe()}],"mask-size":[{mask:se()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,V,B]}],filter:[{filter:[``,`none`,V,B]}],blur:[{blur:ue()}],brightness:[{brightness:[z,V,B]}],contrast:[{contrast:[z,V,B]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Qn,Kn]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:[``,z,V,B]}],"hue-rotate":[{"hue-rotate":[z,V,B]}],invert:[{invert:[``,z,V,B]}],saturate:[{saturate:[z,V,B]}],sepia:[{sepia:[``,z,V,B]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,V,B]}],"backdrop-blur":[{"backdrop-blur":ue()}],"backdrop-brightness":[{"backdrop-brightness":[z,V,B]}],"backdrop-contrast":[{"backdrop-contrast":[z,V,B]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,z,V,B]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[z,V,B]}],"backdrop-invert":[{"backdrop-invert":[``,z,V,B]}],"backdrop-opacity":[{"backdrop-opacity":[z,V,B]}],"backdrop-saturate":[{"backdrop-saturate":[z,V,B]}],"backdrop-sepia":[{"backdrop-sepia":[``,z,V,B]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,V,B]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[z,`initial`,V,B]}],ease:[{ease:[`linear`,`initial`,_,V,B]}],delay:[{delay:[z,V,B]}],animate:[{animate:[`none`,v,V,B]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,V,B]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:de()}],"rotate-x":[{"rotate-x":de()}],"rotate-y":[{"rotate-y":de()}],"rotate-z":[{"rotate-z":de()}],scale:[{scale:fe()}],"scale-x":[{"scale-x":fe()}],"scale-y":[{"scale-y":fe()}],"scale-z":[{"scale-z":fe()}],"scale-3d":[`scale-3d`],skew:[{skew:I()}],"skew-x":[{"skew-x":I()}],"skew-y":[{"skew-y":I()}],transform:[{transform:[V,B,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:pe()}],"translate-x":[{"translate-x":pe()}],"translate-y":[{"translate-y":pe()}],"translate-z":[{"translate-z":pe()}],"translate-none":[`translate-none`],zoom:[{zoom:[kn,V,B]}],accent:[{accent:A()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,V,B]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":A()}],"scrollbar-track-color":[{"scrollbar-track":A()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,V,B]}],fill:[{fill:[`none`,...A()]}],"stroke-w":[{stroke:[z,qn,Bn,Vn]}],stroke:[{stroke:[`none`,...A()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function dr(...e){return ur(zt(e))}var fr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=fr()}))();function pr({getTarget:e,className:t,label:n,onStatus:r}){let i=(0,_.useRef)(null),a=(0,_.useRef)(null),o=(0,_.useRef)(e),[s,c]=(0,_.useState)(`loading`);return o.current=e,(0,_.useEffect)(()=>{r?.(s)},[r,s]),(0,_.useEffect)(()=>{let e=a.current;if(e&&s!==`gpu`)return It({canvas:e,getTarget:()=>o.current()})},[s]),(0,_.useEffect)(()=>{let e=i.current;if(!e||typeof navigator>`u`||!navigator.gpu){c(`fallback`);return}let t=!1,n=Lt({canvas:e,getTarget:()=>o.current(),onError:()=>{t||c(`fallback`)},onReady:()=>{t||c(`gpu`)}}),r=window.setTimeout(()=>c(e=>e===`loading`?`fallback`:e),2200);return()=>{t=!0,window.clearTimeout(r),n()}},[]),(0,H.jsxs)(`div`,{className:dr(`orc-canvas-stack`,t),"data-renderer":s,role:`img`,"aria-label":n??`Animated liquid glass orb`,children:[(0,H.jsx)(`canvas`,{ref:a,className:`orc-canvas orc-canvas-fallback`,"aria-hidden":`true`}),(0,H.jsx)(`canvas`,{ref:i,className:`orc-canvas orc-canvas-gpu`,"data-ready":s===`gpu`?`true`:`false`,"aria-hidden":`true`})]})}function mr(){let e=new URLSearchParams(window.location.search);if(window.location.hash)return{editor:ct(),preview:it(),text:at()};let t=e.get(`style`)??e.get(`preset`),n=t&&S.includes(t)?t:w.style,r=e.get(`state`),i=r===`idle`||r===`thinking`?r:_e;return{editor:{configuration:Ee(n),activeState:i},preview:e.get(`preview`)===`orb`?`orb`:`scene`,text:(e.get(`text`)??`Thinking...`).slice(0,280)}}function hr(){let[e]=(0,_.useState)(mr),[t,n]=(0,_.useState)(e.editor),[r,i]=(0,_.useState)(e.preview),[a,o]=(0,_.useState)(e.text),s=(0,_.useMemo)(()=>We(window.location.search,document.referrer),[]);(0,_.useEffect)(()=>(document.documentElement.classList.add(`is-orc-embed`),()=>document.documentElement.classList.remove(`is-orc-embed`)),[]),(0,_.useEffect)(()=>{let e=()=>{let e=mr();n(e.editor),i(e.preview),o(e.text)};return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]),(0,_.useEffect)(()=>{let t=e=>{if(window.parent===window||e.source!==window.parent||!s||e.origin!==s||!Ue(e.data))return;let t=e.data;t.type===`setState`?n(e=>({...e,activeState:t.state})):t.type===`setText`?o(t.text):window.parent.postMessage({source:He,type:`pong`},s)};return window.addEventListener(`message`,t),s&&window.parent!==window&&window.parent.postMessage({source:He,type:`ready`,state:e.editor.activeState},s),()=>window.removeEventListener(`message`,t)},[e.editor.activeState,s]),(0,_.useEffect)(()=>{s&&window.parent!==window&&window.parent.postMessage({source:He,type:`state`,state:t.activeState},s)},[t.activeState,s]);let c=(0,_.useMemo)(()=>De(t.configuration,t.activeState),[t]),l=(0,_.useRef)({state:t.activeState,params:c,activationDuration:t.configuration.activationDuration,transitionDuration:t.configuration.transitionDuration});return l.current={state:t.activeState,params:c,activationDuration:t.configuration.activationDuration,transitionDuration:t.configuration.transitionDuration},(0,H.jsx)(`main`,{className:`orc-embed`,"data-state":t.activeState,"data-preview":r,children:r===`scene`?(0,H.jsxs)(`div`,{className:`orc-scene-pill`,children:[(0,H.jsx)(`div`,{className:`orc-scene-pill-orb`,children:(0,H.jsx)(pr,{getTarget:()=>l.current})}),(0,H.jsx)(`span`,{className:`orc-scene-pill-text`,children:a||`\xA0`})]}):(0,H.jsx)(`div`,{className:`orc-embed-orb`,children:(0,H.jsx)(pr,{getTarget:()=>l.current})})})}var gr=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),_r=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),vr=e=>{let t=_r(e);return t.charAt(0).toUpperCase()+t.slice(1)},yr=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),br=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},xr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Sr=(0,_.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,_.createElement)(`svg`,{ref:c,...xr,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:yr(`lucide`,i),...!a&&!br(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])),Cr=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(Sr,{ref:i,iconNode:t,className:yr(`lucide-${gr(vr(e))}`,`lucide-${e}`,n),...r}));return n.displayName=vr(e),n},wr=Cr(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),Tr=Cr(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Er=Cr(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Dr=Cr(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),Or=Cr(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),kr=Cr(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),Ar=Cr(`play`,[[`polygon`,{points:`6 3 20 12 6 21 6 3`,key:`1oa8hb`}]]),jr=Cr(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Mr=Cr(`square`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]),Nr=Cr(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]);function Pr({tone:e=`dark`,sheen:t=!0,radius:n=`2rem`,padding:r=`1.5rem`,className:i,style:a,children:o,...s}){let c=[`glass-panel`,e===`light`?`tone-light`:``,i??``].filter(Boolean).join(` `);return(0,H.jsxs)(`article`,{className:c,style:{borderRadius:n,padding:r,...a},...s,children:[(0,H.jsx)(`div`,{className:`glass-read`,"aria-hidden":`true`}),t?(0,H.jsx)(`div`,{className:`glass-sheen`,"aria-hidden":`true`}):null,(0,H.jsx)(`div`,{className:`type-legible`,style:{position:`relative`,zIndex:10},children:o})]})}var Fr=Object.defineProperty,Ir=(e,t)=>Fr(e,`name`,{value:t,configurable:!0});function Lr(e,[t,n]){return Math.min(n,Math.max(t,e))}Ir(Lr,`clamp`);var Rr=Object.defineProperty,zr=(e,t)=>Rr(e,`name`,{value:t,configurable:!0}),Br=!!(typeof window<`u`&&window.document&&window.document.createElement);function Vr(e,t,{checkForDefaultPrevented:n=!0}={}){return zr(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}zr(Vr,`composeEventHandlers`);function Hr(e){if(!Br)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}zr(Hr,`getOwnerWindow`);function Ur(e){if(!Br)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}zr(Ur,`getOwnerDocument`);function Wr(e,t=!1){let{activeElement:n}=Ur(e);if(!n?.nodeName)return null;if(Gr(n)&&n.contentDocument)return Wr(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=Ur(n).getElementById(e);if(t)return t}}return n}zr(Wr,`getActiveElement`);function Gr(e){return e.tagName===`IFRAME`}zr(Gr,`isFrame`);var Kr=Object.defineProperty,qr=(e,t)=>Kr(e,`name`,{value:t,configurable:!0});function Jr(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}qr(Jr,`setRef`);function Yr(...e){return t=>{let n=!1,r=e.map(e=>{let r=Jr(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Jr(e[t],null)}}}}qr(Yr,`composeRefs`);function Xr(...e){return _.useCallback(Yr(...e),e)}qr(Xr,`useComposedRefs`);var Zr=Object.defineProperty,Qr=(e,t)=>Zr(e,`name`,{value:t,configurable:!0});function $r(e,t){let n=_.createContext(t);n.displayName=e+`Context`;let r=Qr(e=>{let{children:t,...r}=e,i=_.useMemo(()=>r,Object.values(r));return(0,H.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=_.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return Qr(i,`useContext`),[r,i]}Qr($r,`createContext`);function ei(e,t=[]){let n=[];function r(t,r){let i=_.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=Qr(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=_.useMemo(()=>o,Object.values(o));return(0,H.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=_.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return Qr(s,`useContext`),[o,s]}Qr(r,`createContext`);let i=Qr(()=>{let t=n.map(e=>_.createContext(e));return Qr(function(n){let r=n?.[e]||t;return _.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,ti(i,...t)]}Qr(ei,`createContextScope`);function ti(...e){let t=e[0];if(e.length===1)return t;let n=Qr(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return Qr(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return _.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}Qr(ti,`composeContextScopes`);var ni=globalThis?.document?_.useLayoutEffect:()=>{},ri=Object.defineProperty,ii=(e,t)=>ri(e,`name`,{value:t,configurable:!0}),ai=_.useEffectEvent,oi=_.useInsertionEffect;function si(e){if(typeof ai==`function`)return ai(e);let t=_.useRef(()=>{throw Error(`Cannot call an event handler while rendering.`)});return typeof oi==`function`?oi(()=>{t.current=e}):ni(()=>{t.current=e}),_.useMemo(()=>((...e)=>t.current?.(...e)),[])}ii(si,`useEffectEvent`);var ci=Object.defineProperty,li=(e,t)=>ci(e,`name`,{value:t,configurable:!0}),ui=_.useInsertionEffect||ni;function di({prop:e,defaultProp:t,onChange:n=li(()=>{},`onChange`),caller:r}){let[i,a,o]=fi({defaultProp:t,onChange:n}),s=e!==void 0;return[s?e:i,_.useCallback(t=>{if(s){let n=pi(t)?t(e):t;n!==e&&o.current?.(n)}else a(t)},[s,e,a,o])]}li(di,`useControllableState`);function fi({defaultProp:e,onChange:t}){let[n,r]=_.useState(e),i=_.useRef(n),a=_.useRef(t);return ui(()=>{a.current=t},[t]),_.useEffect(()=>{i.current!==n&&(a.current?.(n),i.current=n)},[n,i]),[n,r,a]}li(fi,`useUncontrolledState`);function pi(e){return typeof e==`function`}li(pi,`isFunction`);var mi=Symbol(`RADIX:SYNC_STATE`);function hi(e,t,n,r){let{prop:i,defaultProp:a,onChange:o,caller:s}=t,c=i!==void 0,l=si(o),u=[{...n,state:a}];r&&u.push(r);let[d,f]=_.useReducer((t,n)=>{if(n.type===mi)return{...t,state:n.state};let r=e(t,n);return c&&!Object.is(r.state,t.state)&&l(r.state),r},...u),p=d.state,m=_.useRef(p);_.useEffect(()=>{m.current!==p&&(m.current=p,c||l(p))},[p,m,c]);let h=_.useMemo(()=>i===void 0?d:{...d,state:i},[d,i]);return _.useEffect(()=>{c&&!Object.is(i,d.state)&&f({type:mi,state:i})},[i,d.state,c]),[h,f]}li(hi,`useControllableStateReducer`);var gi=Object.defineProperty,_i=(e,t)=>gi(e,`name`,{value:t,configurable:!0}),vi=_.createContext(void 0);function yi(e){let t=_.useContext(vi);return e||t||`ltr`}_i(yi,`useDirection`);var bi=Object.defineProperty,xi=(e,t)=>bi(e,`name`,{value:t,configurable:!0});function Si(e){let t=_.useRef({value:e,previous:e});return _.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}xi(Si,`usePrevious`);var Ci=Object.defineProperty,wi=(e,t)=>Ci(e,`name`,{value:t,configurable:!0});function Ti(e){let[t,n]=_.useState(void 0);return ni(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{if(!Array.isArray(t)||!t.length)return;let r=t[0],i,a;if(`borderBoxSize`in r){let e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,a=t.blockSize}else i=e.offsetWidth,a=e.offsetHeight;n({width:i,height:a})});return t.observe(e,{box:`border-box`}),()=>t.unobserve(e)}n(void 0)},[e]),t}wi(Ti,`useSize`);var Ei=c(m(),1),Di=Object.defineProperty,Oi=(e,t)=>Di(e,`name`,{value:t,configurable:!0});function ki(e){let t=_.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];Ii(r)&&typeof Bi==`function`&&(r=Bi(r._payload)),_.Children.forEach(r,e=>{if(Pi(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Ii(n)&&typeof Bi==`function`&&(n=Bi(n._payload)),a=ji(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=_.cloneElement(a,void 0,s):!o&&_.Children.count(r)===1&&_.isValidElement(r)&&(a=r);let c=a?Ni(a):void 0,l=Xr(n,c);if(!a){if(r||r===0)throw Error(o?zi(e):Ri(e));return r}let u=Mi(i,a.props??{});return a.type!==_.Fragment&&(u.ref=n?l:c),_.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}Oi(ki,`createSlot`);var Ai=Symbol.for(`radix.slottable`);function U(e){let t=Oi(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=Ai,t}Oi(U,`createSlottable`);var ji=Oi((e,t)=>{if(`child`in e.props){let t=e.props.child;return _.isValidElement(t)?_.cloneElement(t,void 0,e.props.children(t.props.children)):null}return _.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function Mi(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}Oi(Mi,`mergeProps`);function Ni(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Oi(Ni,`getElementRef`);function Pi(e){return _.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Ai}Oi(Pi,`isSlottable`);var Fi=Symbol.for(`react.lazy`);function Ii(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Fi&&`_payload`in e&&Li(e._payload)}Oi(Ii,`isLazyComponent`);function Li(e){return typeof e==`object`&&!!e&&`then`in e}Oi(Li,`isPromiseLike`);var Ri=Oi(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),zi=Oi(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),Bi=_.use,Vi=Object.defineProperty,Hi=(e,t)=>Vi(e,`name`,{value:t,configurable:!0}),Ui=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=ki(`Primitive.${t}`),r=_.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,H.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Wi(e,t){e&&Ei.flushSync(()=>e.dispatchEvent(t))}Hi(Wi,`dispatchDiscreteCustomEvent`);var Gi=Object.defineProperty,Ki=(e,t)=>Gi(e,`name`,{value:t,configurable:!0});function qi(e){let t=e+`CollectionProvider`,[n,r]=ei(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=Ki(e=>{let{scope:t,children:n}=e,r=_.useRef(null),a=_.useRef(new Map).current;return(0,H.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})},`CollectionProvider`);o.displayName=t;let s=e+`CollectionSlot`,c=ki(s),l=_.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=Xr(t,a(s,n).collectionRef);return(0,H.jsx)(c,{ref:i,children:r})});l.displayName=s;let u=e+`CollectionItemSlot`,d=`data-radix-collection-item`,f=ki(u),p=_.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=_.useRef(null),s=Xr(t,o),c=a(u,n);return _.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,H.jsx)(f,{[d]:``,ref:s,children:r})});p.displayName=u;function m(t){let n=a(e+`CollectionConsumer`,t);return _.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return Ki(m,`useCollection`),[{Provider:o,Slot:l,ItemSlot:p},m,r]}Ki(qi,`createCollection`);var Ji=new WeakMap,Yi=class e extends Map{static{Ki(this,`OrderedDict`)}#e;constructor(e){super(e),this.#e=[...super.keys()],Ji.set(this,!0)}set(e,t){return Ji.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,t),this}insert(e,t,n){let r=this.has(t),i=this.#e.length,a=Qi(e),o=a>=0?a:i+a,s=o<0||o>=i?-1:o;if(s===this.size||r&&s===this.size-1||s===-1)return this.set(t,n),this;let c=this.size+ +!r;a<0&&o++;let l=[...this.#e],u,d=!1;for(let e=o;e<c;e++)if(o===e){let i=l[e];l[e]===t&&(i=l[e+1]),r&&this.delete(t),u=this.get(i),this.set(t,n)}else{!d&&l[e-1]===t&&(d=!0);let n=l[d?e:e-1],r=u;u=this.get(n),this.delete(n),this.set(n,r)}return this}with(t,n,r){let i=new e(this);return i.insert(t,n,r),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,n){let r=this.#e.indexOf(e);return r===-1?this:this.insert(r,t,n)}after(e){let t=this.#e.indexOf(e);if(t=t===-1||t===this.size-1?-1:t+1,t!==-1)return this.entryAt(t)}setAfter(e,t,n){let r=this.#e.indexOf(e);return r===-1?this:this.insert(r+1,t,n)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return t!==void 0&&this.delete(t)}at(e){let t=Xi(this.#e,e);if(t!==void 0)return this.get(t)}entryAt(e){let t=Xi(this.#e,e);if(t!==void 0)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return Xi(this.#e,e)}from(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return r;n++}}findIndex(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return n;n++}return-1}filter(t,n){let r=[],i=0;for(let e of this)Reflect.apply(t,n,[e,i,this])&&r.push(e),i++;return new e(r)}map(t,n){let r=[],i=0;for(let e of this)r.push([e[0],Reflect.apply(t,n,[e,i,this])]),i++;return new e(r)}reduce(...e){let[t,n]=e,r=0,i=n??this.at(0);for(let n of this)i=r===0&&e.length===1?n:Reflect.apply(t,this,[i,n,r,this]),r++;return i}reduceRight(...e){let[t,n]=e,r=n??this.at(-1);for(let n=this.size-1;n>=0;n--){let i=this.at(n);r=n===this.size-1&&e.length===1?i:Reflect.apply(t,this,[r,i,n,this])}return r}toSorted(t){let n=[...this.entries()].sort(t);return new e(n)}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let n=this.keyAt(e),r=this.get(n);t.set(n,r)}return t}toSpliced(...t){let n=[...this.entries()];return n.splice(...t),new e(n)}slice(t,n){let r=new e,i=this.size-1;if(t===void 0)return r;t<0&&(t+=this.size),n!==void 0&&n>0&&(i=n-1);for(let e=t;e<=i;e++){let t=this.keyAt(e),n=this.get(t);r.set(t,n)}return r}every(e,t){let n=0;for(let r of this){if(!Reflect.apply(e,t,[r,n,this]))return!1;n++}return!0}some(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return!0;n++}return!1}};function Xi(e,t){if(`at`in Array.prototype)return Array.prototype.at.call(e,t);let n=Zi(e,t);return n===-1?void 0:e[n]}Ki(Xi,`at`);function Zi(e,t){let n=e.length,r=Qi(t),i=r>=0?r:n+r;return i<0||i>=n?-1:i}Ki(Zi,`toSafeIndex`);function Qi(e){return e!==e||e===0?0:Math.trunc(e)}Ki(Qi,`toSafeInteger`);function $i(e){let t=e+`CollectionProvider`,[n,r]=ei(t),[i,a]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Yi,setItemMap:Ki(()=>void 0,`setItemMap`)}),o=Ki(({state:e,...t})=>e?(0,H.jsx)(c,{...t,state:e}):(0,H.jsx)(s,{...t}),`CollectionProvider`);o.displayName=t;let s=Ki(e=>{let t=h();return(0,H.jsx)(c,{...e,state:t})},`CollectionInit`);s.displayName=t+`Init`;let c=Ki(e=>{let{scope:t,children:n,state:r}=e,a=_.useRef(null),[o,s]=_.useState(null),c=Xr(a,s),[l,u]=r;return _.useEffect(()=>{if(!o)return;let e=ra(()=>{});return e.observe(o,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[o]),(0,H.jsx)(i,{scope:t,itemMap:l,setItemMap:u,collectionRef:c,collectionRefObject:a,collectionElement:o,children:n})},`CollectionProviderImpl`);c.displayName=t+`Impl`;let l=e+`CollectionSlot`,u=ki(l),d=_.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=Xr(t,a(l,n).collectionRef);return(0,H.jsx)(u,{ref:i,children:r})});d.displayName=l;let f=e+`CollectionItemSlot`,p=ki(f),m=_.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=_.useRef(null),[s,c]=_.useState(null),l=Xr(t,o,c),{setItemMap:u}=a(f,n),d=_.useRef(i);ea(d.current,i)||(d.current=i);let m=d.current;return _.useEffect(()=>{let e=m;return u(t=>s?t.has(s)?t.set(s,{...e,element:s}).toSorted(na):(t.set(s,{...e,element:s}),t.toSorted(na)):t),()=>{u(e=>!s||!e.has(s)?e:(e.delete(s),new Yi(e)))}},[s,m,u]),(0,H.jsx)(p,{"data-radix-collection-item":``,ref:l,children:r})});m.displayName=f;function h(){return _.useState(new Yi)}Ki(h,`useInitCollection`);function g(t){let{itemMap:n}=a(e+`CollectionConsumer`,t);return n}return Ki(g,`useCollection`),[{Provider:o,Slot:d,ItemSlot:m},{createCollectionScope:r,useCollection:g,useInitCollection:h}]}Ki($i,`createCollection`);function ea(e,t){if(e===t)return!0;if(typeof e!=`object`||typeof t!=`object`||e==null||t==null)return!1;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Ki(ea,`shallowEqual`);function ta(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Ki(ta,`isElementPreceding`);function na(e,t){return!e[1].element||!t[1].element?0:ta(e[1].element,t[1].element)?-1:1}Ki(na,`sortByDocumentPosition`);function ra(e){return new MutationObserver(t=>{for(let n of t)if(n.type===`childList`){e();return}})}Ki(ra,`getChildListObserver`);var ia=Object.defineProperty,W=(e,t)=>ia(e,`name`,{value:t,configurable:!0}),aa=[`PageUp`,`PageDown`],oa=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],sa={"from-left":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-right":[`Home`,`PageDown`,`ArrowDown`,`ArrowRight`],"from-bottom":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-top":[`Home`,`PageDown`,`ArrowUp`,`ArrowLeft`]},ca=`Slider`,[la,ua,da]=qi(ca),[fa,pa]=ei(ca,[da]),[ma,ha]=fa(ca),ga=_.forwardRef(W(function(e,t){let{name:n,min:r=0,max:i=100,step:a=1,orientation:o=`horizontal`,disabled:s=!1,minStepsBetweenThumbs:c=0,defaultValue:l=[r],value:u,onValueChange:d=W(()=>{},`onValueChange`),onValueCommit:f=W(()=>{},`onValueCommit`),inverted:p=!1,form:m,...h}=e,g=_.useRef(new Set),v=_.useRef(0),y=_.useRef(!1),b=o===`horizontal`?ya:ba,[x,S]=_.useState(null),C=Xr(t,S),[w=[],T]=di({prop:u,defaultProp:l,onChange:W(e=>{[...g.current][v.current]?.focus({preventScroll:!0,focusVisible:y.current}),y.current=!1,d(e)},`onChange`)}),ee=_.useRef(w),te=_.useRef(w);_.useEffect(()=>{let e=m?x?.ownerDocument.getElementById(m):x?.closest(`form`);if(e instanceof HTMLFormElement){let t=W(()=>T(te.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[x,m,T]);function E(e){O(e,Ra(w,e))}W(E,`handleSlideStart`);function ne(e){O(e,v.current)}W(ne,`handleSlideMove`);function D(){String(w)!==String(ee.current)&&f(w)}W(D,`handleSlideEnd`);function O(e,t,{commit:n}={commit:!1}){let o=Ua(a),s=Lr(Wa(Math.round((e-r)/a)*a+r,o),[r,i]);T((e=[])=>{let r=Fa(e,s,t);if(Va(r,c*a)){v.current=r.indexOf(s);let t=String(r)!==String(e);return t&&n&&f(r),t?r:e}return e})}return W(O,`updateValues`),(0,H.jsx)(ma,{scope:e.__scopeSlider,name:n,disabled:s,min:r,max:i,valueIndexToChangeRef:v,thumbs:g.current,values:w,orientation:o,form:m,children:(0,H.jsx)(la.Provider,{scope:e.__scopeSlider,children:(0,H.jsx)(la.Slot,{scope:e.__scopeSlider,children:(0,H.jsx)(b,{"aria-disabled":s,"data-disabled":s?``:void 0,...h,ref:C,onPointerDown:Vr(h.onPointerDown,()=>{s||(ee.current=w,y.current=!1)}),min:r,max:i,inverted:p,onSlideStart:s?void 0:E,onSlideMove:s?void 0:ne,onSlideEnd:s?void 0:D,onHomeKeyDown:()=>{s||(y.current=!0,O(r,0,{commit:!0}))},onEndKeyDown:()=>{s||(y.current=!0,O(i,w.length-1,{commit:!0}))},onStepKeyDown:({event:e,direction:t})=>{if(!s){y.current=!0;let n=aa.includes(e.key)||e.shiftKey&&oa.includes(e.key)?10:1,i=v.current,o=w[i];O(Ga(o,{min:r,step:a,direction:t,multiplier:n}),i,{commit:!0})}}})})})})},`Slider`)),[_a,va]=fa(ca,{startEdge:`left`,endEdge:`right`,size:`width`,direction:1}),ya=_.forwardRef(W(function(e,t){let{min:n,max:r,dir:i,inverted:a,onSlideStart:o,onSlideMove:s,onSlideEnd:c,onStepKeyDown:l,...u}=e,[d,f]=_.useState(null),p=Xr(t,f),m=_.useRef(void 0),h=yi(i),g=h===`ltr`,v=g&&!a||!g&&a;function y(e){let t=m.current||d.getBoundingClientRect(),i=Ha([0,t.width],v?[n,r]:[r,n]);return m.current=t,i(e-t.left)}return W(y,`getValueFromPointer`),(0,H.jsx)(_a,{scope:e.__scopeSlider,startEdge:v?`left`:`right`,endEdge:v?`right`:`left`,direction:v?1:-1,size:`width`,children:(0,H.jsx)(xa,{dir:h,"data-orientation":`horizontal`,...u,ref:p,style:{...u.style,"--radix-slider-thumb-transform":`translateX(-50%)`},onSlideStart:e=>{let t=y(e.clientX);o?.(t)},onSlideMove:e=>{let t=y(e.clientX);s?.(t)},onSlideEnd:()=>{m.current=void 0,c?.()},onStepKeyDown:e=>{let t=sa[v?`from-left`:`from-right`].includes(e.key);l?.({event:e,direction:t?-1:1})}})})},`SliderHorizontal`)),ba=_.forwardRef(W(function(e,t){let{min:n,max:r,inverted:i,onSlideStart:a,onSlideMove:o,onSlideEnd:s,onStepKeyDown:c,...l}=e,u=_.useRef(null),d=Xr(t,u),f=_.useRef(void 0),p=!i;function m(e){let t=f.current||u.current.getBoundingClientRect(),i=Ha([0,t.height],p?[r,n]:[n,r]);return f.current=t,i(e-t.top)}return W(m,`getValueFromPointer`),(0,H.jsx)(_a,{scope:e.__scopeSlider,startEdge:p?`bottom`:`top`,endEdge:p?`top`:`bottom`,size:`height`,direction:p?1:-1,children:(0,H.jsx)(xa,{"data-orientation":`vertical`,...l,ref:d,style:{...l.style,"--radix-slider-thumb-transform":`translateY(50%)`},onSlideStart:e=>{let t=m(e.clientY);a?.(t)},onSlideMove:e=>{let t=m(e.clientY);o?.(t)},onSlideEnd:()=>{f.current=void 0,s?.()},onStepKeyDown:e=>{let t=sa[p?`from-bottom`:`from-top`].includes(e.key);c?.({event:e,direction:t?-1:1})}})})},`SliderVertical`)),xa=_.forwardRef(W(function(e,t){let{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:o,onEndKeyDown:s,onStepKeyDown:c,...l}=e,u=ha(ca,n);return(0,H.jsx)(Ui.span,{...l,ref:t,onKeyDown:Vr(e.onKeyDown,e=>{e.key===`Home`?(o(e),e.preventDefault()):e.key===`End`?(s(e),e.preventDefault()):aa.concat(oa).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:Vr(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),u.thumbs.has(t)?t.focus({preventScroll:!0,focusVisible:!1}):r(e)}),onPointerMove:Vr(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:Vr(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))})})},`SliderImpl`)),Sa=`SliderTrack`,Ca=_.forwardRef(W(function(e,t){let{__scopeSlider:n,...r}=e,i=ha(Sa,n);return(0,H.jsx)(Ui.span,{"data-disabled":i.disabled?``:void 0,"data-orientation":i.orientation,...r,ref:t})},`SliderTrack`)),wa=`SliderRange`,Ta=_.forwardRef(W(function(e,t){let{__scopeSlider:n,...r}=e,i=ha(wa,n),a=va(wa,n),o=Xr(t,_.useRef(null)),s=i.values.length,c=i.values.map(e=>Ia(e,i.min,i.max)),l=s>1?Math.min(...c):0,u=100-Math.max(...c);return(0,H.jsx)(Ui.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,...r,ref:o,style:{...e.style,[a.startEdge]:l+`%`,[a.endEdge]:u+`%`}})},`SliderRange`)),[Ea,Da]=fa(`SliderThumb`),Oa=`SliderThumbProvider`;function ka(e){let{__scopeSlider:t,name:n,children:r,internal_do_not_use_render:i}=e,a=ha(Oa,t),o=ua(t),[s,c]=_.useState(null),l=_.useMemo(()=>s?o().findIndex(e=>e.ref.current===s):-1,[o,s]),u=Ti(s),d=!s||!!a.form||!!s.closest(`form`),f=a.values[l],p=n??(a.name?a.name+(a.values.length>1?`[]`:``):void 0),m=f===void 0?0:Ia(f,a.min,a.max);_.useEffect(()=>{if(s)return a.thumbs.add(s),()=>{a.thumbs.delete(s)}},[s,a.thumbs]);let h={value:f,name:p,form:a.form,isFormControl:d,index:l,thumb:s,onThumbChange:c,percent:m,size:u};return(0,H.jsx)(Ea,{scope:t,...h,children:Ka(i)?i(h):r})}W(ka,`SliderThumbProvider`);var Aa=`SliderThumbTrigger`,ja=_.forwardRef(W(function(e,t){let{__scopeSlider:n,...r}=e,i=ha(Aa,n),a=va(Aa,n),{index:o,value:s,percent:c,size:l,onThumbChange:u}=Da(Aa,n),d=Xr(t,u),f=La(o,i.values.length),p=l?.[a.size],m=p?za(p,c,a.direction):0;return(0,H.jsx)(`span`,{style:{transform:`var(--radix-slider-thumb-transform)`,position:`absolute`,[a.startEdge]:`calc(${c}% + ${m}px)`},children:(0,H.jsx)(la.ItemSlot,{scope:n,children:(0,H.jsx)(Ui.span,{role:`slider`,"aria-label":e[`aria-label`]||f,"aria-valuemin":i.min,"aria-valuenow":s,"aria-valuemax":i.max,"aria-orientation":i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,tabIndex:i.disabled?void 0:0,...r,ref:d,style:s===void 0?{display:`none`}:e.style,onFocus:Vr(e.onFocus,()=>{i.valueIndexToChangeRef.current=o})})})})},`SliderThumbTrigger`)),Ma=_.forwardRef(W(function(e,t){let{__scopeSlider:n,name:r,...i}=e;return(0,H.jsx)(ka,{__scopeSlider:n,name:r,internal_do_not_use_render:({index:e,isFormControl:r})=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(ja,{...i,ref:t,__scopeSlider:n}),r?(0,H.jsx)(Pa,{__scopeSlider:n},e):null]})})},`SliderThumb`)),Na=`SliderBubbleInput`,Pa=_.forwardRef(W(function({__scopeSlider:e,...t},n){let{value:r,name:i,form:a}=Da(Na,e),o=_.useRef(null),s=Xr(o,n),c=Si(r);return _.useEffect(()=>{let e=o.current;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set;if(c!==r&&n){let t=new Event(`input`,{bubbles:!0});n.call(e,r),e.dispatchEvent(t)}},[c,r]),(0,H.jsx)(Ui.input,{style:{display:`none`},name:i,form:a,...t,ref:s,defaultValue:r})},`SliderBubbleInput`));function Fa(e=[],t,n){let r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}W(Fa,`getNextSortedValues`);function Ia(e,t,n){return Lr(100/(n-t)*(e-t),[0,100])}W(Ia,`convertValueToPercentage`);function La(e,t){if(t>2)return`Value ${e+1} of ${t}`;if(t===2)return[`Minimum`,`Maximum`][e]}W(La,`getLabel`);function Ra(e,t){if(e.length===1)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}W(Ra,`getClosestValueIndex`);function za(e,t,n){let r=e/2;return(r-Ha([0,50],[0,r])(t)*n)*n}W(za,`getThumbInBoundsOffset`);function Ba(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}W(Ba,`getStepsBetweenValues`);function Va(e,t){if(t>0){let n=Ba(e);return Math.min(...n)>=t}return!0}W(Va,`hasMinStepsBetweenValues`);function Ha(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}W(Ha,`linearScale`);function Ua(e){if(!Number.isFinite(e))return 0;let t=e.toString();if(t.includes(`e`)){let[e,n]=t.split(`e`),r=e.split(`.`)[1]||``,i=Number(n);return Math.max(0,r.length-i)}let n=t.split(`.`)[1];return n?n.length:0}W(Ua,`getDecimalCount`);function Wa(e,t){let n=10**t;return Math.round(e*n)/n}W(Wa,`roundValue`);function Ga(e,{min:t,step:n,direction:r,multiplier:i}){let a=Ua(n),o=(e-t)/n,s=Math.round(o),c=Wa(s*n+t,a)===Wa(e,a),l;return l=c?s+i*r:r>0?Math.ceil(o):Math.floor(o),Wa(l*n+t,a)}W(Ga,`getNextStepValue`);function Ka(e){return typeof e==`function`}W(Ka,`isFunction`);function qa({title:e,open:t,onToggle:n,children:r}){return(0,H.jsxs)(`section`,{className:`orc-section`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`orc-section-head`,onClick:n,"aria-expanded":t,children:[(0,H.jsx)(`span`,{children:e}),(0,H.jsx)(Er,{className:dr(`orc-section-chevron`,t&&`is-open`)})]}),t?(0,H.jsx)(`div`,{className:`orc-section-body`,children:r}):null]})}function Ja({label:e,value:t,min:n,max:r,step:i,onChange:a,unit:o}){let s=i<.01?3:i<1?2:0,c=`${t.toFixed(s)}${o??``}`;return(0,H.jsxs)(`div`,{className:`orc-slider`,children:[(0,H.jsxs)(`div`,{className:`orc-slider-head`,children:[(0,H.jsx)(`span`,{children:e}),(0,H.jsx)(`span`,{className:`orc-slider-value`,children:c})]}),(0,H.jsxs)(ga,{className:`orc-slider-root`,min:n,max:r,step:i,value:[t],onValueChange:e=>a(e[0]??n),children:[(0,H.jsx)(Ca,{className:`orc-slider-track`,children:(0,H.jsx)(Ta,{className:`orc-slider-range`})}),(0,H.jsx)(Ma,{className:`orc-slider-thumb`,"aria-label":e})]})]})}function Ya({label:e,hex:t,onChange:n}){return(0,H.jsxs)(`label`,{className:`orc-swatch`,children:[(0,H.jsx)(`input`,{type:`color`,value:t.toLowerCase(),"aria-label":e,onChange:e=>n(e.target.value.toUpperCase())}),(0,H.jsxs)(`span`,{className:`orc-swatch-meta`,children:[(0,H.jsx)(`span`,{className:`orc-swatch-label`,children:e}),(0,H.jsx)(`span`,{className:`orc-swatch-hex`,children:t})]})]})}function Xa({value:e,options:t,ariaLabel:n,onChange:r}){return(0,H.jsx)(`div`,{className:`orc-segmented`,role:`radiogroup`,"aria-label":n,children:t.map(t=>(0,H.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e===t.value,className:dr(`orc-segment`,e===t.value&&`is-active`),onClick:()=>r(t.value),children:t.label},t.value))})}function Za({label:e,checked:t,onChange:n}){return(0,H.jsxs)(`label`,{className:`orc-toggle`,children:[(0,H.jsx)(`span`,{children:e}),(0,H.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":t,className:dr(`orc-switch`,t&&`is-on`),onClick:()=>n(!t),children:(0,H.jsx)(`span`,{className:`orc-switch-knob`})})]})}var Qa=[{label:`中`,value:`zh`},{label:`EN`,value:`en`}],$a={zh:{siriAi:`Siri Ai`,siri:`Siri 波澜`,voiceWave:`声纹薄膜`,spectrum:`彩色声场`,aurora:`极光帷幕`,frost:`冰霜流体`,plasma:`神经电浆`,chrome:`液态铬`,opal:`虹彩欧泊`,blueDrop:`蓝晶液滴`,violetEmber:`紫焰流核`,refractiveBlob:`折射软体`,particleRibbon:`量子丝带`,chromaticMetal:`色差液态金属`},en:{siriAi:`Siri Ai`,siri:`Siri Wave`,voiceWave:`Voice Membrane`,spectrum:`Prismatic Field`,aurora:`Aurora Veil`,frost:`Frost Flow`,plasma:`Neural Plasma`,chrome:`Liquid Chrome`,opal:`Iridescent Opal`,blueDrop:`Crystal Drop`,violetEmber:`Violet Ember`,refractiveBlob:`Refractive Gel`,particleRibbon:`Particle Ribbons`,chromaticMetal:`Chromatic Metal`}},eo={zh:{speed:`速度`,radius:`半径`,shapeMorph:`形态`,contourDeform:`轮廓形变`,zoom:`缩放`,warp:`扭曲`,ridgeAmt:`脊线`,sharp:`锐度`,bandDensity:`重复次数`,metalDepth:`金属深度`,metalRoughness:`表面粗糙度`,chromaticShift:`RGB 分离`,metalScale:`图案缩放`,metalStretch:`纵横拉伸`,metalAngle:`流带角度`,metalOffset:`图案偏移`,metalPhase:`循环相位`,metalEvolution:`演化幅度`,particleDensity:`粒子密度`,ribbonCount:`丝带层数`,ribbonWidth:`丝带宽度`,ribbonTwist:`扭转强度`,ribbonFold:`折叠幅度`,ribbonBreath:`呼吸幅度`,particleSize:`粒子尺寸`,particleBloom:`粒子辉光`,shade:`明暗`,exposure:`曝光`,sheen:`边缘高光`,gloss:`色散`,glassOpacity:`折射强度`,shellMidAlpha:`折射宽度`,shellEdgeAlpha:`边缘强度`,edgeSoftness:`边缘柔化`,edgeGlow:`外发光强度`},en:{speed:`Speed`,radius:`Radius`,shapeMorph:`Shape Morph`,contourDeform:`Contour Motion`,zoom:`Flow Scale`,warp:`Flow Distortion`,ridgeAmt:`Ridge Detail`,sharp:`Sharpness`,bandDensity:`Band Count`,metalDepth:`Metallic Depth`,metalRoughness:`Roughness`,chromaticShift:`RGB Split`,metalScale:`Pattern Scale`,metalStretch:`Aspect Stretch`,metalAngle:`Band Angle`,metalOffset:`Pattern Offset`,metalPhase:`Loop Phase`,metalEvolution:`Flow Evolution`,particleDensity:`Particle Density`,ribbonCount:`Ribbon Layers`,ribbonWidth:`Ribbon Width`,ribbonTwist:`Twist`,ribbonFold:`Folding`,ribbonBreath:`Breathing`,particleSize:`Particle Size`,particleBloom:`Particle Bloom`,shade:`Shading`,exposure:`Exposure`,sheen:`Rim Highlight`,gloss:`Dispersion`,glassOpacity:`Refraction Strength`,shellMidAlpha:`Refraction Width`,shellEdgeAlpha:`Edge Intensity`,edgeSoftness:`Edge Softness`,edgeGlow:`Outer Glow`}},to={zh:{colorA:`颜色 A`,colorB:`颜色 B`,colorC:`颜色 C`,colorD:`颜色 D`,highlightColor:`提亮色`,shellInner:`折射底色`,shellMid:`冷色散`,shellEdge:`暖色散`,sheenColor:`主高光色`,specColor:`辅高光色`,canvasColor:`背景颜色`,glowColor:`外发光颜色`},en:{colorA:`Color A`,colorB:`Color B`,colorC:`Color C`,colorD:`Color D`,highlightColor:`Highlight Tint`,shellInner:`Refraction Base`,shellMid:`Cool Dispersion`,shellEdge:`Warm Dispersion`,sheenColor:`Key Highlight`,specColor:`Fill Highlight`,canvasColor:`Background`,glowColor:`Glow Color`}},no={zh:{documentTitle:`液态玻璃球编辑器`,presets:`效果预设`,animatedPresets:`动态预设`,orbControls:`球体参数`,collapsePresets:`收起预设面板`,expandPresets:`展开预设面板`,collapseControls:`收起参数面板`,expandControls:`展开参数面板`,resetControls:`重置全部参数`,previewMode:`预览模式`,switchPreviewMode:`切换预览模式`,orbMode:`球体`,sceneMode:`场景`,switchLanguage:`切换界面语言`,orbPreview:`液态玻璃球预览`,scenePreview:`实际场景预览`,staticOrbPreview:`液态玻璃球静态预览`,animatedOrbPreview:`动态液态玻璃球`,loadingOrb:`正在加载球体`,renderFallback:`WebGPU 不可用，当前显示静态预览`,renderErrorTitle:`WebGPU 渲染失败`,sceneText:e=>`场景文字：${e}`,copyCode:`复制代码`,viewSource:`在 GitHub 查看源码`,sceneSection:`场景预览`,displayText:`显示文字`,sceneTextLimit:`最多 20 个字符`,stateSection:`AI 状态`,orbState:`当前状态`,switchOrbState:`切换 AI 球状态`,idleState:`空闲`,thinkingState:`思考中`,activationDuration:`启动时长`,transitionDuration:`回落时长`,collapseSection:e=>`收起${e}`,expandSection:e=>`展开${e}`,editValue:e=>`编辑${e}数值`,selectColor:e=>`选择${e}`,hexValue:e=>`${e}十六进制值`,hexColor:`十六进制颜色`,colorSurface:`颜色饱和度和亮度`,colorChannel:`通道`,cssColorValue:`CSS 颜色值`,hue:`色相`,motionSection:`动态`,colorsSection:`颜色`,shapeSection:`形状动画`,siriShapeSection:`Siri 形态`,switchSiriShape:`切换 Siri Ai 形态`,enableGlass:`开启玻璃罩`,glassSection:`玻璃罩`,edgeSection:`边缘与外发光`,copyFailed:`复制失败`,copied:`已复制`,close:`关闭`,webCode:`Web 代码`,swiftCode:`SwiftUI 代码`},en:{documentTitle:`Liquid Orb Editor`,presets:`Presets`,animatedPresets:`Animated presets`,orbControls:`Orb Controls`,collapsePresets:`Collapse presets`,expandPresets:`Expand presets`,collapseControls:`Collapse controls`,expandControls:`Expand controls`,resetControls:`Reset all controls`,previewMode:`Preview`,switchPreviewMode:`Switch preview mode`,orbMode:`Orb`,sceneMode:`Scene`,switchLanguage:`Switch interface language`,orbPreview:`Liquid glass orb preview`,scenePreview:`In-context preview`,staticOrbPreview:`Static liquid glass orb preview`,animatedOrbPreview:`Animated liquid glass orb`,loadingOrb:`Loading orb`,renderFallback:`WebGPU is unavailable. Showing the fallback preview.`,renderErrorTitle:`WebGPU rendering failed`,sceneText:e=>`Scene text: ${e}`,copyCode:`Copy Code`,viewSource:`View source on GitHub`,sceneSection:`Scene Preview`,displayText:`Display Text`,sceneTextLimit:`Up to 20 characters`,stateSection:`AI State`,orbState:`Current State`,switchOrbState:`Switch AI orb state`,idleState:`Idle`,thinkingState:`Thinking`,activationDuration:`Activation Duration`,transitionDuration:`Settle Duration`,collapseSection:e=>`Collapse ${e}`,expandSection:e=>`Expand ${e}`,editValue:e=>`Edit ${e} value`,selectColor:e=>`Choose ${e}`,hexValue:e=>`${e} hex value`,hexColor:`Hex color`,colorSurface:`Color saturation and brightness`,colorChannel:`channel`,cssColorValue:`CSS color value`,hue:`Hue`,motionSection:`Motion`,colorsSection:`Color`,shapeSection:`Shape Motion`,siriShapeSection:`Siri Shape`,switchSiriShape:`Switch Siri Ai shape`,enableGlass:`Enable Glass Shell`,glassSection:`Glass Shell`,edgeSection:`Edge & Glow`,copyFailed:`Copy Failed`,copied:`Copied`,close:`Close`,webCode:`Web code`,swiftCode:`SwiftUI code`}},ro={zh:{appName:`Apple Orc`,appTag:`液态玻璃球工作台`,embedIframe:`iframe 嵌入`,embedReact:`React 组件`,embedDropin:`项目内引用`,embedJson:`JSON 配置`,widgetHint:`把调好的球体嵌入其它网站或工作台。iframe 适合任意站点；JSON 与组件适合本仓库其它项目。`,hostApi:`宿主可通过 postMessage 切换 idle / thinking。`,originNote:`嵌入地址使用当前站点。部署后把域名换成你的公开地址即可。`,fallbackNote:`当前环境没有 WebGPU，已使用画布回退预览。`,gpuReady:`WebGPU 实时渲染`,shareLink:`复制分享链接`,linkCopied:`链接已复制`},en:{appName:`Apple Orc`,appTag:`Liquid glass orb workbench`,embedIframe:`iframe embed`,embedReact:`React embed`,embedDropin:`In-project import`,embedJson:`JSON config`,widgetHint:`Drop the tuned orb into another site or workbench. Use iframe for any page; JSON and the component for other projects in this repo.`,hostApi:`The host page can switch idle / thinking over postMessage.`,originNote:`Embed URLs use this origin. After deploy, swap in your public domain.`,fallbackNote:`WebGPU is unavailable here. Showing a canvas fallback preview.`,gpuReady:`Live WebGPU render`,shareLink:`Copy share link`,linkCopied:`Link copied`}},io=[`shellInner`,`shellMid`,`shellEdge`,`sheenColor`,`specColor`],ao=[`colorA`,`colorB`,`colorC`,`colorD`,`highlightColor`,`canvasColor`];function oo(){let[e,t]=(0,_.useState)(`en`),[n,r]=(0,_.useState)(()=>({configuration:Ee(w.style),activeState:_e})),[i,a]=(0,_.useState)(`orb`),[o,s]=(0,_.useState)(T),[c,l]=(0,_.useState)(1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(`iframe`),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(`loading`),[y,b]=(0,_.useState)({scene:!0,state:!0,motion:!0,colors:!1,shape:!0,glass:!0,edge:!0}),x=(0,_.useRef)(0),C=(0,_.useRef)(null),ee=(0,_.useRef)(0),ne=(0,_.useRef)(null),D=no[e],O=ro[e],k=De(n.configuration,n.activeState),re=C.current!==null&&k.style===`siriAi`?{...k,shapeMorph:C.current}:k,ie=(0,_.useRef)({state:n.activeState,params:re,activationDuration:n.configuration.activationDuration,transitionDuration:n.configuration.transitionDuration});ie.current={state:n.activeState,params:re,activationDuration:n.configuration.activationDuration,transitionDuration:n.configuration.transitionDuration},(0,_.useEffect)(()=>{t(tt()),r(ct()),a(it()),s(at())},[]),(0,_.useEffect)(()=>()=>cancelAnimationFrame(x.current),[]),(0,_.useEffect)(()=>{nt(e),typeof document<`u`&&(document.documentElement.lang=e===`zh`?`zh-CN`:`en`)},[e]),(0,_.useEffect)(()=>{let e=window.setTimeout(()=>{ut(n,i,o)},500);return()=>window.clearTimeout(e)},[n,i,o]),(0,_.useEffect)(()=>{let e=ne.current;if(!e)return;let t=e=>{if(e.target instanceof Element&&e.target.closest(`[data-stage-controls]`))return;e.preventDefault();let t=ce(-e.deltaY*.001,-.1,.1);l(e=>Math.round(ce(e+t,.6,1.6)*100)/100)};return e.addEventListener(`wheel`,t,{passive:!1}),()=>e.removeEventListener(`wheel`,t)},[]);let ae=(0,_.useCallback)((e,t)=>{r(n=>({...n,configuration:Oe(n.configuration,n.activeState,e,t)}))},[]),j=(0,_.useCallback)(e=>{C.current=null,cancelAnimationFrame(x.current),r(t=>({activeState:t.activeState,configuration:{...Ee(e),activationDuration:t.configuration.activationDuration,transitionDuration:t.configuration.transitionDuration}})),e===`siriAi`&&b(e=>({...e,shape:!0}))},[]),M=(0,_.useCallback)((e,t)=>{let n=typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;if(!t||n){C.current=null,ae(`shapeMorph`,e);return}let r=C.current??ie.current.params.shapeMorph,i=performance.now();cancelAnimationFrame(x.current);let a=t=>{let n=Math.min(1,Math.max(0,(t-i)/780)),o=r+(e-r)*_t(n);C.current=o,ie.current={...ie.current,params:{...ie.current.params,shapeMorph:o}},n<1?(t-ee.current>48&&(ee.current=t,ae(`shapeMorph`,o)),x.current=requestAnimationFrame(a)):(C.current=null,ae(`shapeMorph`,e))};x.current=requestAnimationFrame(a)},[ae]),le=(0,_.useCallback)(()=>{r({activeState:_e,configuration:Ee(w.style)}),s(T),l(1)},[]),F=(0,_.useMemo)(()=>lt(n,i,o),[n,i,o]),ue=typeof window>`u`?``:Ge(window.location.origin,`/Apple-orc/`),de=(0,_.useMemo)(()=>$e(n,ue,F,i,o),[n,F,ue,i,o]),fe=(0,_.useCallback)(async(e,t)=>{try{await navigator.clipboard.writeText(e),h(t)}catch{h(`error`)}window.setTimeout(()=>h(null),1600)},[]);function I(t){let n=A.get(t);return!n||!P(n,k.style)?null:(0,H.jsx)(Ja,{label:eo[e][t],value:k[t],min:n.min,max:n.max,step:n.step,onChange:e=>ae(t,e)},t)}function pe(t){return(0,H.jsx)(Ya,{label:to[e][t],hex:k[t],onChange:e=>ae(t,e)},t)}let me=k.style===`siriAi`?vt(re.shapeMorph):null,he=e=>()=>{b(t=>({...t,[e]:!t[e]}))};return(0,H.jsxs)(`div`,{className:`orc-app`,children:[(0,H.jsx)(`div`,{className:`orc-bg`,"aria-hidden":`true`}),(0,H.jsx)(`aside`,{className:`orc-rail orc-rail-left`,children:(0,H.jsxs)(Pr,{sheen:!1,radius:`1.5rem`,padding:`0.9rem`,className:`orc-panel`,children:[(0,H.jsx)(`div`,{className:`orc-panel-title`,children:D.presets}),(0,H.jsx)(`div`,{className:`orc-preset-grid`,children:S.map(t=>(0,H.jsxs)(`button`,{type:`button`,"aria-pressed":k.style===t,className:dr(`orc-preset`,k.style===t&&`is-active`),onClick:()=>j(t),"aria-label":$a[e][t],children:[(0,H.jsx)(`img`,{src:se[t],alt:``,className:dr(`orc-preset-thumb`,oe.has(t)&&`is-compact`)}),(0,H.jsx)(`span`,{children:$a[e][t]})]},t))})]})}),(0,H.jsxs)(`section`,{ref:ne,className:`orc-stage`,"data-preview-mode":i,"aria-label":i===`scene`?D.scenePreview:D.orbPreview,children:[(0,H.jsxs)(`div`,{className:`orc-stage-top`,"data-stage-controls":!0,children:[(0,H.jsx)(Xa,{ariaLabel:D.switchLanguage,value:e,options:Qa,onChange:t}),(0,H.jsx)(Xa,{ariaLabel:D.switchPreviewMode,value:i,options:[{label:D.orbMode,value:`orb`},{label:D.sceneMode,value:`scene`}],onChange:e=>{a(e),l(1)}})]}),(0,H.jsx)(`div`,{className:dr(`orc-preview`,i===`scene`&&`is-scene`,k.style===`siriAi`&&`is-siri-ai`,me&&`is-siri-${me}`),style:{transform:`scale(${c})`},children:i===`scene`?(0,H.jsxs)(`div`,{className:dr(`orc-scene-pill`,k.style===`siriAi`&&`is-siri-ai`),children:[(0,H.jsx)(`div`,{className:`orc-scene-pill-orb`,children:(0,H.jsx)(pr,{getTarget:()=>ie.current,label:D.animatedOrbPreview,onStatus:v})}),(0,H.jsx)(`span`,{className:`orc-scene-pill-text`,children:o||`\xA0`})]}):(0,H.jsx)(`div`,{className:`orc-orb-frame`,children:(0,H.jsx)(pr,{getTarget:()=>ie.current,label:D.animatedOrbPreview,onStatus:v})})}),g===`fallback`?(0,H.jsx)(`p`,{className:`orc-fallback-note`,children:O.fallbackNote}):null,(0,H.jsxs)(`div`,{className:`orc-stage-bottom`,"data-stage-controls":!0,children:[(0,H.jsxs)(`button`,{type:`button`,className:`orc-code-btn`,onClick:()=>d(!0),children:[(0,H.jsx)(Dr,{size:16}),D.copyCode]}),(0,H.jsx)(`button`,{type:`button`,className:`orc-icon-btn`,onClick:()=>{let e=`${window.location.origin}${window.location.pathname}#${F}`;fe(e,`link`)},"aria-label":O.shareLink,children:(0,H.jsx)(kr,{size:16})})]})]}),(0,H.jsx)(`aside`,{className:`orc-rail orc-rail-right`,children:(0,H.jsxs)(Pr,{sheen:!1,radius:`1.5rem`,padding:`0.85rem`,className:`orc-panel orc-controls`,children:[(0,H.jsxs)(`div`,{className:`orc-panel-title-row`,children:[(0,H.jsx)(`div`,{className:`orc-panel-title`,children:D.orbControls}),(0,H.jsx)(`button`,{type:`button`,className:`orc-icon-btn`,onClick:le,"aria-label":D.resetControls,children:(0,H.jsx)(jr,{size:14})})]}),(0,H.jsxs)(`div`,{className:`orc-controls-scroll`,children:[i===`scene`?(0,H.jsx)(qa,{title:D.sceneSection,open:y.scene,onToggle:he(`scene`),children:(0,H.jsxs)(`label`,{className:`orc-field`,children:[(0,H.jsxs)(`span`,{className:`orc-field-label`,children:[D.displayText,(0,H.jsxs)(`span`,{children:[Array.from(o).length,`/20`]})]}),(0,H.jsx)(`input`,{className:`orc-text-input`,value:o,maxLength:40,onChange:e=>s(N(e.target.value))})]})}):null,(0,H.jsxs)(qa,{title:D.stateSection,open:y.state,onToggle:he(`state`),children:[(0,H.jsx)(Xa,{ariaLabel:D.switchOrbState,value:n.activeState,options:[{label:D.idleState,value:`idle`},{label:D.thinkingState,value:`thinking`}],onChange:e=>r(t=>({...t,activeState:e}))}),(0,H.jsx)(Ja,{label:D.activationDuration,value:n.configuration.activationDuration,min:te.min,max:te.max,step:te.step,unit:`s`,onChange:e=>r(t=>({...t,configuration:{...t.configuration,activationDuration:e}}))}),(0,H.jsx)(Ja,{label:D.transitionDuration,value:n.configuration.transitionDuration,min:E.min,max:E.max,step:E.step,unit:`s`,onChange:e=>r(t=>({...t,configuration:{...t.configuration,transitionDuration:e}}))})]}),(0,H.jsx)(qa,{title:D.motionSection,open:y.motion,onToggle:he(`motion`),children:I(`speed`)}),(0,H.jsxs)(qa,{title:D.colorsSection,open:y.colors,onToggle:he(`colors`),children:[(0,H.jsx)(`div`,{className:`orc-swatch-grid`,children:ao.map(pe)}),I(`shade`),I(`exposure`)]}),(0,H.jsxs)(qa,{title:k.style===`siriAi`?D.siriShapeSection:D.shapeSection,open:y.shape,onToggle:he(`shape`),children:[k.style===`siriAi`?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Xa,{ariaLabel:D.switchSiriShape,value:vt(re.shapeMorph),options:dt.map(t=>({label:pt[e][t],value:t})),onChange:e=>M(ft[e],!0)}),I(`shapeMorph`)]}):null,I(`radius`),I(`contourDeform`),I(`zoom`),I(`warp`),I(`ridgeAmt`),I(`sharp`),I(`metalDepth`),I(`metalRoughness`),I(`chromaticShift`),I(`metalScale`),I(`metalStretch`),I(`metalAngle`),I(`bandDensity`),I(`metalOffset`),I(`metalPhase`),I(`metalEvolution`),I(`particleDensity`),I(`ribbonCount`),I(`ribbonWidth`),I(`ribbonTwist`),I(`ribbonFold`),I(`ribbonBreath`),I(`particleSize`),I(`particleBloom`)]}),(0,H.jsxs)(qa,{title:D.glassSection,open:y.glass,onToggle:he(`glass`),children:[(0,H.jsx)(Za,{label:D.enableGlass,checked:k.glassEnabled,onChange:e=>ae(`glassEnabled`,e)}),k.glassEnabled?(0,H.jsxs)(H.Fragment,{children:[I(`glassOpacity`),I(`sheen`),I(`gloss`),I(`shellMidAlpha`),I(`shellEdgeAlpha`),(0,H.jsx)(`div`,{className:`orc-swatch-grid`,children:io.map(pe)})]}):null]}),(0,H.jsxs)(qa,{title:D.edgeSection,open:y.edge,onToggle:he(`edge`),children:[I(`edgeSoftness`),I(`edgeGlow`),pe(`glowColor`)]})]})]})}),u?(0,H.jsx)(`div`,{className:`orc-sheet-backdrop`,role:`presentation`,onClick:()=>d(!1),children:(0,H.jsx)(`div`,{className:`orc-sheet`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`orc-copy-title`,onClick:e=>e.stopPropagation(),children:(0,H.jsxs)(Pr,{sheen:!1,radius:`1.6rem`,padding:`1.1rem`,className:`orc-sheet-card`,children:[(0,H.jsxs)(`div`,{className:`orc-sheet-head`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h2`,{id:`orc-copy-title`,children:D.copyCode}),(0,H.jsx)(`p`,{children:O.widgetHint})]}),(0,H.jsx)(`button`,{type:`button`,className:`orc-icon-btn`,onClick:()=>d(!1),"aria-label":D.close,children:(0,H.jsx)(Nr,{size:16})})]}),(0,H.jsx)(`div`,{className:`orc-sheet-tabs`,children:[[`iframe`,O.embedIframe],[`react`,O.embedReact],[`dropin`,O.embedDropin],[`json`,O.embedJson],[`web`,D.webCode],[`swift`,D.swiftCode]].map(([e,t])=>(0,H.jsx)(`button`,{type:`button`,className:dr(`orc-tab`,f===e&&`is-active`),onClick:()=>p(e),children:t},e))}),(0,H.jsx)(`pre`,{className:`orc-code`,children:(0,H.jsx)(`code`,{children:de[f]})}),(0,H.jsxs)(`div`,{className:`orc-sheet-actions`,children:[(0,H.jsx)(`p`,{className:`orc-sheet-hint`,children:O.hostApi}),(0,H.jsxs)(`button`,{type:`button`,className:`orc-code-btn`,onClick:()=>void fe(de[f],f),children:[(0,H.jsx)(Or,{size:16}),m===`error`?D.copyFailed:m===f?D.copied:D.copyCode]})]})]})})}):null,m===`link`?(0,H.jsx)(`div`,{className:`orc-toast`,role:`status`,children:O.linkCopied}):null]})}function so({preset:e=`siri`,state:t=`thinking`,size:n=72,label:r,params:i,className:a,activationDuration:o=ve,transitionDuration:s=ye}){let c=(0,_.useMemo)(()=>{let t=Ee(e);return i?{...t,activationDuration:o,transitionDuration:s,shared:{...t.shared,...G(i)},profiles:{idle:{...t.profiles.idle,...K(i)},thinking:{...t.profiles.thinking,...K(i)}}}:{...t,activationDuration:o,transitionDuration:s}},[o,i,e,s]),l=De(c,t),u=(0,_.useRef)({state:t,params:l,activationDuration:c.activationDuration,transitionDuration:c.transitionDuration});u.current={state:t,params:l,activationDuration:c.activationDuration,transitionDuration:c.transitionDuration};let d=(0,H.jsx)(pr,{getTarget:()=>u.current,className:`orc-widget-canvas`,label:r?`${r} orb`:`Apple Orc`});return r?(0,H.jsxs)(`div`,{className:dr(`orc-scene-pill`,a),children:[(0,H.jsx)(`div`,{className:`orc-scene-pill-orb`,style:{width:n,height:n},children:d}),(0,H.jsx)(`span`,{className:`orc-scene-pill-text`,children:r})]}):(0,H.jsx)(`div`,{className:dr(`orc-widget`,a),style:{width:n,height:n},children:d})}function G(e){let t={...e};return delete t.speed,delete t.contourDeform,delete t.zoom,delete t.warp,delete t.ridgeAmt,delete t.sharp,delete t.shade,delete t.exposure,delete t.edgeGlow,delete t.colorA,delete t.colorB,delete t.colorC,delete t.colorD,delete t.highlightColor,delete t.glowColor,t}function K(e){let t=[`speed`,`contourDeform`,`bandDensity`,`chromaticShift`,`metalStretch`,`metalEvolution`,`metalRoughness`,`metalDepth`,`ribbonWidth`,`ribbonTwist`,`ribbonFold`,`ribbonBreath`,`zoom`,`warp`,`ridgeAmt`,`sharp`,`shade`,`exposure`,`edgeGlow`,`colorA`,`colorB`,`colorC`,`colorD`,`highlightColor`,`glowColor`],n={};for(let r of t)e[r]!==void 0&&Object.assign(n,{[r]:e[r]});return n}var co=`https://github.com/Simon66-workshop/Apple-orc`,lo=`/Apple-orc/`,uo=[`interface`,`presets`,`embed`],fo={interface:`In your interface`,presets:`Preset library`,embed:`iframe lab`};function po({children:e}){let[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(!1);async function a(){try{await navigator.clipboard.writeText(e),n(!0),i(!1)}catch{i(!0)}}return(0,_.useEffect)(()=>{if(!t)return;let e=setTimeout(()=>n(!1),1800);return()=>clearTimeout(e)},[t]),(0,H.jsxs)(`div`,{className:`showcase-code`,children:[(0,H.jsxs)(`div`,{className:`code-caption`,children:[(0,H.jsx)(`span`,{children:`Integration example`}),(0,H.jsxs)(`button`,{onClick:a,"aria-label":`Copy integration code`,children:[t?(0,H.jsx)(Tr,{size:15}):(0,H.jsx)(Or,{size:15}),` `,t?`Copied`:`Copy`]})]}),(0,H.jsx)(`pre`,{tabIndex:0,children:(0,H.jsx)(`code`,{children:e})}),r&&(0,H.jsx)(`p`,{role:`status`,children:`Clipboard unavailable. Select and copy the code.`})]})}function mo(){let[e,t]=(0,_.useState)(`thinking`),[n,r]=(0,_.useState)(`siri`),[i,a]=(0,_.useState)(`Thinking it through`);return(0,H.jsxs)(`div`,{className:`showcase-interface`,children:[(0,H.jsxs)(`section`,{className:`showcase-intro`,children:[(0,H.jsxs)(`h1`,{children:[`A little presence.`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`span`,{children:`A clearer state.`})]}),(0,H.jsx)(`p`,{children:`A liquid-glass orb for the moments between a question and an answer. Tune its look, then put it in your own interface.`}),(0,H.jsxs)(`div`,{className:`showcase-facts`,children:[`13 presets `,(0,H.jsx)(`span`,{children:`·`}),` React + iframe `,(0,H.jsx)(`span`,{children:`·`}),` MIT`]}),(0,H.jsxs)(`a`,{className:`showcase-primary`,href:lo,children:[`Open the workbench `,(0,H.jsx)(wr,{size:18})]}),(0,H.jsx)(`p`,{className:`showcase-small`,children:`Interactive component demo. No model or microphone connected.`})]}),(0,H.jsxs)(`section`,{className:`interface-example`,"aria-label":`Live React integration`,children:[(0,H.jsxs)(`div`,{className:`example-top`,children:[(0,H.jsx)(`span`,{children:`Assistant interface`}),(0,H.jsx)(`span`,{className:`local-label`,children:`Local demo`})]}),(0,H.jsx)(`div`,{className:`example-orb`,children:(0,H.jsx)(so,{preset:n,state:e,size:260})}),(0,H.jsx)(`h2`,{children:e===`thinking`?i||`Thinking`:`Ready when you are`}),(0,H.jsxs)(`p`,{children:[`The component follows your app state.`,(0,H.jsx)(`br`,{}),`The rest of the conversation is yours.`]}),(0,H.jsxs)(`div`,{className:`state-buttons`,role:`group`,"aria-label":`Component state`,children:[(0,H.jsxs)(`button`,{"aria-pressed":e===`idle`,onClick:()=>t(`idle`),children:[(0,H.jsx)(Mr,{size:14}),` Idle`]}),(0,H.jsxs)(`button`,{"aria-pressed":e===`thinking`,onClick:()=>t(`thinking`),children:[(0,H.jsx)(Ar,{size:14}),` Thinking`]})]}),(0,H.jsxs)(`div`,{className:`example-config`,children:[(0,H.jsxs)(`label`,{children:[`Preset`,(0,H.jsx)(`select`,{"aria-label":`Preset`,value:n,onChange:e=>r(e.target.value),children:S.map(e=>(0,H.jsx)(`option`,{value:e,children:$a.en[e]},e))})]}),(0,H.jsxs)(`label`,{children:[`Status text`,(0,H.jsx)(`input`,{value:i,maxLength:60,onChange:e=>a(e.target.value)})]})]})]}),(0,H.jsxs)(`div`,{className:`interface-code`,children:[(0,H.jsx)(po,{children:`import { AppleOrc } from "@/lib/orb";\n\n<AppleOrc\n  preset="${n}"\n  state="${e}"\n  size={72}\n  label="${e===`thinking`?`Thinking...`:`Ready`}"\n/>`}),(0,H.jsxs)(`p`,{className:`showcase-small`,children:[`Source import, not an npm package. `,(0,H.jsx)(`a`,{href:`${co}/blob/main/docs/INTEGRATION.md`,children:`Integration guide ↗`})]})]})]})}var ho=[`siri`,`aurora`,`chromaticMetal`,`plasma`,`opal`,`particleRibbon`];function go(){let[e,t]=(0,_.useState)(`thinking`),[n,r]=(0,_.useState)(`siri`);return(0,H.jsxs)(`section`,{className:`preset-showcase`,children:[(0,H.jsxs)(`div`,{className:`section-heading`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`h1`,{children:[`Same component.`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`span`,{children:`A different character.`})]}),(0,H.jsx)(`p`,{children:`Six choices from 13 presets. The selected orb is live; the others are preset thumbnails.`})]}),(0,H.jsxs)(`div`,{className:`state-buttons`,"aria-label":`Gallery state`,role:`group`,children:[(0,H.jsx)(`button`,{"aria-pressed":e===`idle`,onClick:()=>t(`idle`),children:`Idle`}),(0,H.jsx)(`button`,{"aria-pressed":e===`thinking`,onClick:()=>t(`thinking`),children:`Thinking`})]})]}),(0,H.jsx)(`div`,{className:`live-preset-grid`,children:ho.map((t,i)=>(0,H.jsxs)(`article`,{"data-active":n===t,children:[(0,H.jsx)(`button`,{className:`preset-orb`,"data-preset":t,"aria-label":`Preview ${$a.en[t]}`,"aria-pressed":n===t,onClick:()=>r(t),children:n===t?(0,H.jsx)(so,{preset:t,state:e,size:170}):(0,H.jsx)(`img`,{src:`${lo}presets/${t}.png`,width:170,height:170,alt:``})}),(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`span`,{className:`preset-number`,children:[`0`,i+1,n===t?` · LIVE`:``]}),(0,H.jsx)(`h2`,{children:$a.en[t]}),(0,H.jsx)(`code`,{children:t})]})]},t))}),(0,H.jsxs)(`a`,{className:`showcase-secondary`,href:lo,children:[`Tune all 13 presets in the workbench `,(0,H.jsx)(wr,{size:17})]})]})}function _o(){let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(`idle`),[a,o]=(0,_.useState)(`Ready when you are`),[s,c]=(0,_.useState)(`Waiting for widget`),l=window.location.origin,u=`${l}${lo}embed.html?style=aurora&state=idle&preview=scene&text=Ready%20when%20you%20are&parentOrigin=${encodeURIComponent(l)}`;(0,_.useEffect)(()=>{let t=t=>{if(t.source!==e.current?.contentWindow||t.origin!==l||t.data?.source!==`apple-orc`)return;let r=t.data;r.type===`ready`&&(n(!0),c(`ready · parent origin verified`)),r.type===`state`&&(r.state===`idle`||r.state===`thinking`)&&(i(r.state),c(`state · ${r.state}`)),r.type===`pong`&&(n(!0),c(`pong · round trip confirmed`))};return window.addEventListener(`message`,t),()=>window.removeEventListener(`message`,t)},[l]);function d(t,n={}){e.current?.contentWindow?.postMessage({source:`apple-orc`,type:t,...n},l)}function f(e){d(`setState`,{state:e}),d(`setText`,{text:e===`thinking`?`Thinking it through`:a})}return(0,H.jsxs)(`section`,{className:`embed-showcase`,children:[(0,H.jsxs)(`div`,{className:`section-heading`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`h1`,{children:[`Your page.`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`span`,{children:`One small embed.`})]}),(0,H.jsx)(`p`,{children:`This panel controls an actual iframe. The widget replies with its state.`})]}),(0,H.jsx)(Dr,{size:32,strokeWidth:1})]}),(0,H.jsxs)(`div`,{className:`embed-layout`,children:[(0,H.jsxs)(`div`,{className:`embed-live`,children:[(0,H.jsxs)(`div`,{className:`example-top`,children:[(0,H.jsx)(`span`,{children:`Host application`}),(0,H.jsx)(`span`,{className:`local-label`,children:`Live iframe`})]}),(0,H.jsxs)(`div`,{className:`embed-stage`,children:[(0,H.jsx)(`iframe`,{title:`Live Apple Orc widget`,ref:e,src:u,onLoad:()=>d(`ping`)}),(0,H.jsx)(`span`,{className:`embed-boundary-label`,children:`The iframe boundary`})]}),(0,H.jsxs)(`div`,{className:`embed-controls`,children:[(0,H.jsxs)(`div`,{className:`state-buttons`,role:`group`,"aria-label":`Iframe state`,children:[(0,H.jsx)(`button`,{disabled:!t,"aria-pressed":r===`idle`,onClick:()=>f(`idle`),children:`Idle`}),(0,H.jsx)(`button`,{disabled:!t,"aria-pressed":r===`thinking`,onClick:()=>f(`thinking`),children:`Thinking`})]}),(0,H.jsxs)(`label`,{children:[`Widget text`,(0,H.jsx)(`input`,{value:a,maxLength:280,onChange:e=>{o(e.target.value),d(`setText`,{text:e.target.value})}})]}),(0,H.jsx)(`button`,{className:`showcase-secondary`,disabled:!t,onClick:()=>d(`ping`),children:`Ping widget`}),(0,H.jsx)(`output`,{"aria-live":`polite`,"data-testid":`widget-event`,children:s})]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(po,{children:`const frame = document.querySelector("iframe");
const widgetOrigin = new URL(frame.src).origin;

frame.contentWindow.postMessage(
  {
    source: "apple-orc",
    type: "setState",
    state: "thinking"
  },
  widgetOrigin // exact origin, not "*"
);`}),(0,H.jsxs)(`div`,{className:`embed-notes`,children:[(0,H.jsx)(`h2`,{children:`A small, explicit contract.`}),(0,H.jsxs)(`p`,{children:[(0,H.jsx)(`code`,{children:`setState`}),` — idle or thinking`]}),(0,H.jsxs)(`p`,{children:[(0,H.jsx)(`code`,{children:`setText`}),` — up to 280 characters`]}),(0,H.jsxs)(`p`,{children:[(0,H.jsx)(`code`,{children:`ping → pong`}),` — connection check`]}),(0,H.jsx)(`p`,{children:`Messages are checked against the parent window, parent origin and payload schema.`}),(0,H.jsx)(`a`,{href:`${co}/blob/main/docs/INTEGRATION.md`,children:`Read the integration guide ↗`})]})]})]})]})}function vo(){let e=new URLSearchParams(window.location.search).get(`view`),[t,n]=(0,_.useState)(uo.includes(e)?e:`interface`);function r(e){n(e);let t=new URL(window.location.href);t.searchParams.set(`view`,e),window.history.replaceState(null,``,t)}return(0,_.useEffect)(()=>{document.title=`Apple Orc — Live integration examples`},[]),(0,H.jsxs)(`div`,{className:`showcase-app`,children:[(0,H.jsxs)(`header`,{className:`orc-product-bar`,children:[(0,H.jsxs)(`a`,{className:`orc-wordmark`,href:lo,children:[`Apple Orc `,(0,H.jsx)(`span`,{children:`by 66Workshop`})]}),(0,H.jsx)(`nav`,{"aria-label":`Showcase views`,children:uo.map(e=>(0,H.jsx)(`button`,{onClick:()=>r(e),"aria-current":t===e?`page`:void 0,children:fo[e]},e))}),(0,H.jsxs)(`a`,{className:`github-link`,href:co,target:`_blank`,rel:`noreferrer`,children:[`GitHub `,(0,H.jsx)(wr,{size:15})]})]}),(0,H.jsx)(`main`,{children:t===`interface`?(0,H.jsx)(mo,{}):t===`presets`?(0,H.jsx)(go,{}):(0,H.jsx)(_o,{})}),(0,H.jsxs)(`footer`,{children:[(0,H.jsx)(`span`,{children:`Open source. Small by design.`}),(0,H.jsxs)(`span`,{children:[`Shader & motion: `,(0,H.jsx)(`a`,{href:`https://github.com/LerSent001/orb`,children:`LerSent001/orb`}),` · MIT · Independent of Apple`]})]})]})}var yo=`/Apple-orc/`,bo=window.location.pathname,xo=/(?:^|\/)embed(?:\.html)?\/?$/.test(bo),So=/(?:^|\/)showcase(?:\.html)?\/?$/.test(bo);function Co(){return(0,H.jsxs)(`div`,{className:`orc-workbench-shell`,children:[(0,H.jsxs)(`header`,{className:`orc-product-bar`,children:[(0,H.jsxs)(`a`,{href:yo,className:`orc-wordmark`,children:[`Apple Orc `,(0,H.jsx)(`span`,{children:`by 66Workshop`})]}),(0,H.jsxs)(`nav`,{"aria-label":`Product links`,children:[(0,H.jsx)(`a`,{href:`${yo}showcase.html`,children:`Live examples`}),(0,H.jsx)(`a`,{href:`https://github.com/Simon66-workshop/Apple-orc`,target:`_blank`,rel:`noreferrer`,children:`GitHub ↗`})]})]}),(0,H.jsx)(oo,{})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,H.jsx)(_.StrictMode,{children:xo?(0,H.jsx)(hr,{}):So?(0,H.jsx)(vo,{}):(0,H.jsx)(Co,{})}));
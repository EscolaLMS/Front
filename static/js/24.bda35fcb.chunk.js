(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[24],{448:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ResponsiveImage=void 0;var s,l,p=n(1),f=u(n(8)),d=c(n(222)),m=(0,f.default)("div")(s||(s=r(["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"],["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"])));t.ResponsiveImage=function(e){return(0,p.jsx)(m,{children:(0,p.jsx)(d.default,o({},e))})},t.default=(0,f.withTheme)((0,f.default)(t.ResponsiveImage)(l||(l=r([""],[""]))))},519:function(e,t,n){!function(e,t){"use strict";function n(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function o(){}function i(){}i.resetWarningCache=o;var a=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n},u=n((function(e){e.exports=a()}));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return d(e)||m(e,t)||y(e,t)||h()}function d(e){if(Array.isArray(e))return e}function m(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}function y(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var b=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},g=function(e){return null!==e&&"object"===l(e)},E=function(e){return g(e)&&"function"===typeof e.then},w=function(e){return g(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},j="[object Object]",O=function e(t,n){if(!g(t)||!g(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===j;if(o!==(Object.prototype.toString.call(n)===j))return!1;if(!o&&!r)return t===n;var i=Object.keys(t),a=Object.keys(n);if(i.length!==a.length)return!1;for(var u={},c=0;c<i.length;c+=1)u[i[c]]=!0;for(var s=0;s<a.length;s+=1)u[a[s]]=!0;var l=Object.keys(u);if(l.length!==i.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return l.every(d)},S=function(e,t,n){return g(e)?Object.keys(e).reduce((function(r,o){var i=!g(t)||!O(e[o],t[o]);return n.includes(o)?(i&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):i?s(s({},r||{}),{},p({},o,e[o])):r}),null):null},P="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",_=function(e){if(null===e||w(e))return e;throw new Error(P)},k=function(e){if(E(e))return{tag:"async",stripePromise:Promise.resolve(e).then(_)};var t=_(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},C=t.createContext(null);C.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},x=function(e){var n=e.stripe,r=e.options,o=e.children,i=t.useMemo((function(){return k(n)}),[n]),a=f(t.useState((function(){return{stripe:"sync"===i.tag?i.stripe:null,elements:"sync"===i.tag?i.stripe.elements(r):null}})),2),u=a[0],c=a[1];t.useEffect((function(){var e=!0,t=function(e){c((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==i.tag||u.stripe?"sync"!==i.tag||u.stripe||t(i.stripe):i.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[i,u,r]);var s=b(n);t.useEffect((function(){null!==s&&s!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[s,n]);var l=b(r);return t.useEffect((function(){if(u.elements){var e=S(r,l,["clientSecret","fonts"]);e&&u.elements.update(e)}}),[r,l,u.elements]),t.useEffect((function(){var e=u.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.9.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.9.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[u.stripe]),t.createElement(C.Provider,{value:u},o)};x.propTypes={stripe:u.any,options:u.object};var T=function(e){var n=t.useContext(C);return A(n,e)},R=function(){return T("calls useElements()").elements},B=function(){return T("calls useStripe()").stripe},I=function(e){return(0,e.children)(T("mounts <ElementsConsumer>"))};I.propTypes={children:u.func.isRequired};var M=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},D=function(){},L=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},N=function(e,n){var r="".concat(L(e),"Element"),o=n?function(e){T("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,i=n.className,a=n.options,u=void 0===a?{}:a,c=n.onBlur,s=void 0===c?D:c,l=n.onFocus,p=void 0===l?D:l,f=n.onReady,d=void 0===f?D:f,m=n.onChange,y=void 0===m?D:m,v=n.onEscape,h=void 0===v?D:v,g=n.onClick,E=void 0===g?D:g,w=n.onLoadError,j=void 0===w?D:w,O=T("mounts <".concat(r,">")).elements,P=t.useRef(null),_=t.useRef(null),k=M(d),C=M(s),A=M(p),x=M(E),R=M(y),B=M(h),I=M(j);t.useLayoutEffect((function(){if(null==P.current&&O&&null!=_.current){var t=O.create(e,u);P.current=t,t.mount(_.current),t.on("ready",(function(){return k(t)})),t.on("change",R),t.on("blur",C),t.on("focus",A),t.on("escape",B),t.on("loaderror",I),t.on("click",x)}}));var L=b(u);return t.useEffect((function(){if(P.current){var e=S(u,L,["paymentRequest"]);e&&P.current.update(e)}}),[u,L]),t.useLayoutEffect((function(){return function(){P.current&&(P.current.destroy(),P.current=null)}}),[]),t.createElement("div",{id:o,className:i,ref:_})};return o.propTypes={id:u.string,className:u.string,onChange:u.func,onBlur:u.func,onFocus:u.func,onReady:u.func,onClick:u.func,onLoadError:u.func,options:u.object},o.displayName=r,o.__elementType=e,o},W="undefined"===typeof window,q=N("auBankAccount",W),F=N("card",W),U=N("cardNumber",W),Y=N("cardExpiry",W),J=N("cardCvc",W),$=N("fpxBank",W),H=N("iban",W),V=N("idealBank",W),z=N("p24Bank",W),G=N("epsBank",W),K=N("payment",W),Q=N("paymentRequestButton",W),X=N("linkAuthentication",W),Z=N("shippingAddress",W),ee=N("affirmMessage",W),te=N("afterpayClearpayMessage",W);e.AffirmMessageElement=ee,e.AfterpayClearpayMessageElement=te,e.AuBankAccountElement=q,e.CardCvcElement=J,e.CardElement=F,e.CardExpiryElement=Y,e.CardNumberElement=U,e.Elements=x,e.ElementsConsumer=I,e.EpsBankElement=G,e.FpxBankElement=$,e.IbanElement=H,e.IdealBankElement=V,e.LinkAuthenticationElement=X,e.P24BankElement=z,e.PaymentElement=K,e.PaymentRequestButtonElement=Q,e.ShippingAddressElement=Z,e.useElements=R,e.useStripe=B,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(0))},682:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",a=null,u=function(e){return null!==a||(a=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var a=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();a&&e?console.warn(i):a||(a=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n}(e)),a.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(u){return void n(u)}else t(null)}))),a},c=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:t})}(r,n),r},s=Promise.resolve().then((function(){return u(null)})),l=!1;s.catch((function(e){l||console.warn(e)}));var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l=!0;var r=Date.now();return s.then((function(e){return c(e,t,r)}))}}}]);
//# sourceMappingURL=24.bda35fcb.chunk.js.map
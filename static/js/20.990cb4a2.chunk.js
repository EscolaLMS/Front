/*! For license information please see 20.990cb4a2.chunk.js.LICENSE.txt */
(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[20],{604:function(e,t,n){"use strict";n.r(t);var r,i=n(668),o=n(669),a=n(12),c=n(74),l=n(1),s=n(34),u=n(35),d=n(675),f=n(874),h=n(33),p=n(73),m=n(20),x=n(82),v=n(267),b=n(273),g=n(666),j=n(671),y=n(3),O=m.default.section(r||(r=Object(c.a)(["\n  margin-top: 35px;\n  .name-container {\n    p {\n      display: inline;\n      margin: 0;\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])));t.default=function(){var e,t=Object(l.useContext)(u.EscolaLMSContext),n=t.user,r=t.orders,c=t.fetchOrders,m=t.fetchOrderInvoice,w=Object(l.useState)([]),_=Object(a.a)(w,2),k=_[0],M=_[1],P=Object(s.g)(),N=Object(v.a)().t,T=Object(l.useState)(-1),C=Object(a.a)(T,2),E=C[0],L=C[1];Object(l.useEffect)((function(){n.loading||n.value?c():P.push("/login")}),[]);var S=Object(l.useCallback)(function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(t),e.prev=1,e.next=4,m(t);case 4:(n=e.sent)&&(r=document.createElement("a"),document.body.appendChild(r),r.setAttribute("href",URL.createObjectURL(new Blob([n]))),r.setAttribute("download","".concat(N("MyProfilePage.InvoiceTitle")," ").concat(t,".pdf")),r.style.display="",r.click(),document.body.removeChild(r),L(-1)),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),L(-1),b.b.error(N("UnexpectedError")),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[m,N]);return Object(l.useEffect)((function(){var e;r.list&&!r.loading&&M(null===r||void 0===r||null===(e=r.list)||void 0===e?void 0:e.data.map((function(e){var t;return{title:Object(y.jsx)("div",{className:"name-container",children:null===e||void 0===e||null===(t=e.items)||void 0===t?void 0:t.map((function(t,n){var r,i;return Object(y.jsx)(h.Text,{children:Object(y.jsxs)("strong",{children:[null===t||void 0===t||null===(r=t.product)||void 0===r?void 0:r.name,n+1!==(null===e||void 0===e||null===(i=e.items)||void 0===i?void 0:i.length)&&", "]})},n)}))}),price:Object(y.jsxs)(h.Text,{children:[e.subtotal," z\u0142"]}),date:e.created_at?Object(y.jsx)(h.Text,{children:Object(j.d)(e.created_at)}):"",actions:Object(y.jsx)(p.Button,{mode:"outline",onClick:function(){return S(e.id)},loading:E===e.id,children:N("MyProfilePage.Invoice")})}})))}),[r]),Object(y.jsx)(d.a,{title:N("MyProfilePage.OrdersHistory"),children:Object(y.jsxs)(O,{children:[0===(null===(e=r.list)||void 0===e?void 0:e.data.length)?Object(y.jsx)(h.Text,{style:{paddingLeft:x.isMobile?20:40},children:N("MyProfilePage.OrdersEmpty")}):Object(y.jsx)(f.Orders,{mobile:x.isMobile,data:k}),r.loading&&Object(y.jsx)(g.a,{})]})})}},666:function(e,t,n){"use strict";var r,i=n(74),o=n(30),a=n(20),c=n(3),l=a.default.div(r||(r=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"])));t.a=function(e){var t=e.width,n=e.height,r=Object(a.useTheme)();return Object(c.jsx)(l,{style:{width:t||"100%",height:n||"100%"},children:Object(c.jsx)(o.Spin,{color:r.primaryColor})})}},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={defaultDateFormat:"dd/MM/yyyy",defaultDateTimeFormat:"dd/MM/yyyy, HH:mm"}},668:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(22);function i(){i=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(C){u=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),c=new P(r||[]);return o(a,"_invoke",{value:w(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=d;var h={};function p(){}function m(){}function x(){}var v={};u(v,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(N([])));g&&g!==t&&n.call(g,c)&&(v=g);var j=x.prototype=p.prototype=Object.create(v);function y(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function i(o,a,c,l){var s=f(e[o],e,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==Object(r.a)(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,c,l)}),(function(e){i("throw",e,c,l)})):t.resolve(d).then((function(e){u.value=e,c(u)}),(function(e){return i("throw",e,c,l)}))}l(s.arg)}var a;o(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function w(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return T()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function _(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return m.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=u(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,u(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},y(O.prototype),u(O.prototype,l,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new O(d(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(j),u(j,s,"Generator"),u(j,c,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}},669:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var c=e[o](a),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function c(e){r(a,i,o,c,l,"next",e)}function l(e){r(a,i,o,c,l,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return i}))},671:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return h}));var r=n(174),i=n(282),o=n(134),a=n(667),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.a.defaultDateFormat;return e?Object(r.default)(new Date(e),t):""},l=function(e,t,n){return!(!e||!t)&&c(e,n)===c(t,n)},s=function(e){var t=[];return e.forEach((function(e){var n=Object(r.default)(new Date(e),"MM/dd/yyyy"),i=t.find((function(e){return Object(r.default)(new Date(e.date),"MM/dd/yyyy")===n}));i?i.times.push(new Date(e)):t.push({date:n,times:[new Date(e)]})})),t},u=function(e){return e.filter((function(e){return Object(i.default)(e,new Date)}))},d=function(e){return e.sort((function(e,t){return e.getTime()-t.getTime()}))},f=function(e){var t=Array.from(e.matchAll(/(\d+)\s+(day|hour|minute|second|week|year)s?/g)),n={},r=!1;if(t.forEach((function(e){r=!0;var t=parseInt(e[1]),i=e[2];n[i]?n[i]+=t:n[i]=t})),!r){Array.from(e.matchAll(/\d+/g)).forEach((function(e){var t=parseInt(e[0]);n.hour=t}))}return n},h=function(e,t){return Object(o.a)(new Date(e),{years:t.year||0,months:t.month||0,weeks:t.week||0,days:t.day||0,hours:t.hour||0,minutes:t.minute||0,seconds:t.second||0})}},675:function(e,t,n){"use strict";var r,i,o,a,c,l,s,u=n(74),d=n(269),f=n(12),h=n(55),p=n(1),m=n(20),x=n(191),v=n(33),b=n(89),g=n(34),j=n(45),y=n(82),O=n(190),w=n(3),_=m.default.div(r||(r=Object(u.a)(["\n  padding: ",";\n  background: ",";\n  border-radius: ","px;\n"])),y.isMobile?"20px":"40px",(function(e){var t=e.theme;return"dark"===t.mode?t.dm__cardBackgroundColor:t.cardBackgroundColor}),(function(e){return e.theme.cardRadius})),k=function(e){var t=e.title,n=e.icon,r=e.children;return Object(w.jsxs)(_,{children:[Object(w.jsx)(O.IconTitle,{title:t,icon:n,as:"h2",level:4}),r]})},M=n(268),P=n(267),N=m.default.div(i||(i=Object(u.a)(["\n  transition: max-height 0.5s ease-in-out;\n  max-height: 5000px;\n  ",";\n\n  .collapse-header {\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n    align-items: start;\n    gap: 6px;\n    cursor: pointer;\n\n    &__heading {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        color: ",";\n    }\n\n    &__icon {\n      color: ",";\n        opacity: 0.6;\n        width: 12px;\n        margin-top: 3.5px;\n        transition: rotate 0.2s ease-in-out;\n        rotate: ",";\n\n        &:hover {\n            svg {\n                opacity: 1;\n            }\n        }\n    }\n"])),(function(e){return e.isOpen?"":"max-height: 1.2em; overflow: hidden; transition: max-height 1s cubic-bezier(0, 1, 0, 1);"}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__textColor:t.textColor}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__textColor:t.textColor}),(function(e){return e.isOpen?"180deg":"0"})),T=function(e){var t=e.headerTitle,n=e.headerClassName,r=e.initialValue,i=e.children,o=Object(p.useState)(null!==r&&void 0!==r&&r),a=Object(f.a)(o,2),c=a[0],l=a[1];return Object(w.jsxs)(N,{isOpen:c,children:[Object(w.jsxs)("div",{className:"collapse-header ".concat(null!==n&&void 0!==n?n:""),onClick:function(){return l((function(e){return!e}))},onKeyUp:function(e){return"Enter"===e.code&&l((function(e){return!e}))},role:"button",tabIndex:0,children:[Object(w.jsx)("span",{className:"collapse-header__heading",children:t}),Object(w.jsx)("svg",{className:"arrows collapse-header__icon",width:"14",height:"8",viewBox:"0 0 14 8",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{d:"M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z",fill:"currentColor"})})]}),i]})},C=Object(m.default)("aside")(o||(o=Object(u.a)(["\n  ","\n  transform: ",";\n  background: ",";\n  .user-main-sidebar {\n    margin-bottom: ",";\n    .avatar-wrapper {\n      margin-bottom: ",";\n      display: flex;\n      justify-content: flex-start;\n      align-items: ",";\n      flex-direction: ",";\n    }\n    .name {\n      margin: ",";\n    }\n    .navigation {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      row-gap: 15px;\n      margin-bottom: 50px;\n      a {\n        text-decoration: none;\n        &:hover {\n          p {\n            color: ",";\n          }\n        }\n        &.selected {\n          p {\n            color: ",';\n          }\n        }\n      }\n    }\n    .logout-wrapper {\n      position: relative;\n      &:before {\n        position: absolute;\n        content: "";\n        left: 0;\n        top: -16px;\n        height: 1px;\n        width: 24px;\n        background: ',";\n      }\n      button {\n        appearance: none;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0;\n        cursor: pointer;\n        p {\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .progress-container {\n    display: flex;\n    flex-direction: ",";\n    flex-wrap: wrap;\n    justify-content: ",";\n    align-items: ",";\n  }\n"])),y.isMobile&&"\n    box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    height: 100vh;\n    width: 100%;\n    transition: all 0.25s;\n    z-index: 1000;\n    overflow: scroll;\n    ",(function(e){return e.opened&&y.isMobile?"translate(0, 0%)":!e.opened&&y.isMobile?"translate(0, 91%)":"translate(0, 0)"}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__background:t.background}),y.isMobile?"70px":"22px",y.isMobile?"30px":"21px",y.isMobile?"center":"flex-start",y.isMobile?"row":"column",y.isMobile?"0 0 0 21px":"16px 0 0 0",(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){var t=e.theme;return"dark"===t.mode?t.gray5:t.gray1}),(function(e){return e.theme.primaryColor}),y.isMobile?"row":"column",y.isMobile?"space-between":"flex-start",y.isMobile?"center":"flex-start"),E=m.default.div(a||(a=Object(u.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n\n  &:not(:last-child) {\n    margin-bottom: ",";\n    margin-right: ",";\n  }\n  .number {\n    color: ",";\n  }\n  .label {\n    margin-left: ",";\n    margin-top: 10px;\n    position: relative;\n    font-size: 14px;\n    line-height: 1.2;\n    font-weight: 700;\n    max-width: ",';\n  }\n\n  .list-box {\n    padding: 0;\n    list-style: none;\n    width: 100%;\n    grid-column: 1/3;\n    font-family: "Mulish", sans-serif;\n  }\n\n  .list-box-item {\n    font-size: 14px;\n\n    :not(:last-child) {\n      margin-bottom: 16px;\n    }\n\n    &__time {\n      color: ',";\n      opacity: 0.6;\n      margin: 0;\n      display: flex;\n      align-items: center;\n\n      &:first-of-type {\n        margin-top: 8px;\n      }\n\n      svg {\n        width: 12px;\n        height: auto;\n        fill: ",";\n        opacity: 0.6;\n      }\n    }\n\n    &__value {\n      font-size: 12px;\n      line-height: 1.5;\n      margin-left: 4px;\n    }\n  }\n"])),y.isMobile?0:"14px",y.isMobile?"10px":0,(function(e){return e.theme.primaryColor}),y.isMobile?0:"11px",y.isMobile?"80px":"unset",(function(e){var t=e.theme;return"dark"===t.mode?t.dm__textColor:t.textColor}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__textColor:t.textColor})),L=Object(m.default)("div")(c||(c=Object(u.a)(['\n  padding: 17px 15px;\n  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n  position: relative;\n  &:after {\n    content: "";\n    display: ',";\n    position: absolute;\n    right: 22px;\n    top: 50%;\n    transform: translate(0, -50%) rotate(-45deg);\n    width: 12px;\n    height: 12px;\n    border-left: 2px solid\n      ",";\n    border-bottom: 2px solid\n      ",";\n  }\n  .content-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n  }\n"])),(function(e){return e.opened?"block":"none"}),(function(e){var t=e.theme;return"dark"===t.mode?t.gray5:t.gray1}),(function(e){var t=e.theme;return"dark"===t.mode?t.gray5:t.gray1})),S=function(){var e,t,n,r,i,o,a,c,l,s=Object(p.useState)(!1),u=Object(f.a)(s,2),d=u[0],O=u[1],_=Object(p.useContext)(h.EscolaLMSContext),N=_.user,S=_.logout,z=_.certificates,D=_.progress,A=_.fetchProgress,B=Object(P.a)().t,I=Object(m.useTheme)(),F=Object(g.g)(),R=function(e){if(!e)return"-";var t=e,n=Math.trunc(e/3600);n>=1&&(t-=3600*n);var r=Math.trunc(e/60);return r>=1&&(t-=60*r),"\n        ".concat(n>=1?n+"h ":"").concat(r>=1?r+"min ":"").concat(t>=1?t+"s":"","\n    ")};Object(p.useEffect)((function(){A()}),[]);var G=Object(p.useMemo)((function(){return(D.value||[]).filter((function(e){return e.finish_date}))}),[D]),U=[{key:"COURSES",title:B("MyProfilePage.MyCourses"),url:"/user/my-profile"},{key:"CONSULTATIONS",title:B("MyProfilePage.MyConsultations"),url:"/user/my-consultations"},{key:"EVENTS",title:B("MyProfilePage.MyStationaryEvents"),url:"/user/my-stationary-events"},{key:"TASKS",title:B("MyProfilePage.MyTasks"),url:"/user/my-tasks"},{key:"BOOKMARKS",title:B("MyProfilePage.MyBookmarks"),url:"/user/my-bookmarks"},{key:"ORDERS",title:B("MyProfilePage.OrdersHistory"),url:"/user/my-orders"},{key:"NOTIFICATIONS",title:B("MyProfilePage.Notifications"),url:"/user/my-notifications"},{key:"EDIT",title:B("MyProfilePage.EditData"),url:"/user/my-data"}];return Object(w.jsxs)(C,{opened:d,children:[y.isMobile&&Object(w.jsx)(L,{opened:d,onClick:function(){return O(!d)},children:Object(w.jsxs)("div",{className:"content-wrapper",children:[null!==(e=N.value)&&void 0!==e&&e.avatar?Object(w.jsx)(x.Avatar,{size:"extraSmall",src:null===(t=N.value)||void 0===t?void 0:t.avatar,alt:""}):Object(w.jsx)(M.d,{mode:"dark"===I.mode?"light":"dark"}),Object(w.jsx)(v.Text,{children:Object(w.jsxs)("strong",{children:[null===(n=N.value)||void 0===n?void 0:n.first_name," ",null===(r=N.value)||void 0===r?void 0:r.last_name]})})]})}),Object(w.jsx)("div",{className:"user-main-sidebar",children:Object(w.jsxs)(k,{title:B("MyProfilePage.YourAccount"),icon:Object(w.jsx)(M.y,{}),children:[Object(w.jsxs)("div",{className:"avatar-wrapper",children:[null!==(i=N.value)&&void 0!==i&&i.avatar?Object(w.jsx)(x.Avatar,{size:"small",src:null===(o=N.value)||void 0===o?void 0:o.avatar,alt:""}):Object(w.jsx)(M.d,{mode:"dark"===I.mode?"light":"dark"}),Object(w.jsxs)(b.Title,{className:"name",level:4,as:"h3",children:[null===(a=N.value)||void 0===a?void 0:a.first_name," ",null===(c=N.value)||void 0===c?void 0:c.last_name]})]}),Object(w.jsx)("nav",{className:"navigation",children:U.map((function(e){return Object(w.jsx)(j.d,{activeClassName:"selected",to:e.url,children:Object(w.jsx)(v.Text,{size:"14",children:e.title})},e.key)}))}),Object(w.jsx)("div",{className:"logout-wrapper",children:Object(w.jsx)("button",{onClick:function(){return S().then((function(){return F.push("/")}))},children:Object(w.jsx)(v.Text,{children:B("MyProfilePage.Logout")})})})]})}),Object(w.jsx)("div",{className:"user-progress sidebar",children:Object(w.jsx)(k,{title:B("MyProfilePage.MyProgress"),icon:Object(w.jsx)(M.u,{}),children:Object(w.jsxs)("div",{className:"progress-container",children:[Object(w.jsxs)(E,{children:[Object(w.jsx)(b.Title,{className:"number",level:1,children:G.length}),Object(w.jsx)(v.Text,{className:"label",children:B("MyProfilePage.FinishedCourses")}),Object(w.jsx)("ul",{className:"list-box",children:G.map((function(e,t){return Object(w.jsx)("li",{className:"list-box-item",children:Object(w.jsxs)(T,{initialValue:0===t,headerTitle:e.course.title,headerClassName:"list-box-item__title",children:[e.start_date&&e.finish_date&&Object(w.jsxs)("p",{className:"list-box-item__time",children:[Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(w.jsx)("path",{d:"M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"})}),Object(w.jsxs)("span",{className:"list-box-item__value",children:[new Date(e.start_date).toLocaleDateString()," - ",new Date(e.finish_date).toLocaleDateString()]})]}),Object(w.jsxs)("p",{className:"list-box-item__time",children:[Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(w.jsx)("path",{d:"M6 14h6v-6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6zm16 0c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328z"})}),Object(w.jsx)("span",{className:"list-box-item__value",children:R(e.total_spent_time)})]})]})})}))})]}),Object(w.jsxs)(E,{children:[Object(w.jsx)(b.Title,{className:"number",level:1,children:null===(l=z.list)||void 0===l?void 0:l.data.length}),Object(w.jsx)(v.Text,{className:"label",children:B("MyProfilePage.TotalCertificates")})]})]})})})]})},z=m.default.div(l||(l=Object(u.a)(["\n  position: relative;\n  z-index: 0;\n  padding: ",";\n  background: ",";\n  border-radius: ",";\n  @media (max-width: 991px) {\n    padding: 60px 20px 20px 20px;\n    margin-bottom: 20px;\n  }\n\n  .actions {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n"])),(function(e){return e.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__cardBackgroundColor:t.cardBackgroundColor}),(function(e){return e.theme.cardRadius})),D=function(e){var t=e.title,n=e.withTabs,r=e.actions;return Object(w.jsxs)(z,{withTabs:n,children:[Object(w.jsx)(b.Title,{level:1,children:t}),r&&Object(w.jsx)("div",{className:"actions",children:r})]})},A=n(83),B=n(189),I=m.default.section(s||(s=Object(u.a)(["\n  .courses-wrapper {\n    margin-top: -70px;\n    .tabs-menu {\n      margin: 0 0 70px 40px;\n    }\n  }\n  .certificates-container {\n    margin-top: 70px;\n    h2 {\n      margin-left: 40px;\n    }\n  }\n"])));t.a=function(e){var t=e.children,n=e.title,r=e.withTabs,i=e.actions,o=Object(p.useContext)(h.EscolaLMSContext).user,a=Object(g.g)();return Object(p.useEffect)((function(){o.loading||o.value||a.push("/login")}),[]),Object(w.jsx)(d.a,{metaTitle:n,children:Object(w.jsx)(I,{children:Object(w.jsx)(B.a,{children:Object(w.jsxs)(A.Row,{children:[Object(w.jsxs)(A.Col,{lg:9,children:[Object(w.jsx)(D,{title:n,withTabs:r,actions:i}),t]}),Object(w.jsx)(A.Col,{lg:3,children:Object(w.jsx)(S,{})})]})})})})}},874:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Orders=void 0;var l,s,u,d=n(3),f=c(n(1)),h=c(n(20)),p=n(46),m=n(33),x=n(28),v=(0,h.default)("div")(l||(l=r(["\n  .labels-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 40px 12px 40px;\n    .single-label {\n      &:first-of-type {\n        flex: 0 0 40%;\n        max-width: 40%;\n      }\n      &:nth-of-type(2),\n      &:nth-of-type(3) {\n        flex: 0 0 15%;\n        max-width: 15%;\n      }\n      &:last-of-type {\n        flex: 0 0 20%;\n        max-width: 20%;\n      }\n    }\n  }\n"],["\n  .labels-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 40px 12px 40px;\n    .single-label {\n      &:first-of-type {\n        flex: 0 0 40%;\n        max-width: 40%;\n      }\n      &:nth-of-type(2),\n      &:nth-of-type(3) {\n        flex: 0 0 15%;\n        max-width: 15%;\n      }\n      &:last-of-type {\n        flex: 0 0 20%;\n        max-width: 20%;\n      }\n    }\n  }\n"]))),b=(0,h.default)("div")(s||(s=r(["\n  display: flex;\n  flex-direction: ",";\n  width: 100%;\n  justify-content: ",";\n  align-items: ",";\n  margin-bottom: 10px;\n  padding: ",";\n  background: ",";\n  .single-content {\n    &:not(:last-child) {\n      margin-bottom: ",";\n    }\n    &:first-of-type {\n      flex: ",";\n      max-width: ",";\n    }\n    &:nth-of-type(2),\n    &:nth-of-type(3) {\n      flex: ",";\n      max-width: ",";\n    }\n    &:last-of-type {\n      flex: ",";\n      max-width: ",";\n    }\n  }\n"],["\n  display: flex;\n  flex-direction: ",";\n  width: 100%;\n  justify-content: ",";\n  align-items: ",";\n  margin-bottom: 10px;\n  padding: ",";\n  background: ",";\n  .single-content {\n    &:not(:last-child) {\n      margin-bottom: ",";\n    }\n    &:first-of-type {\n      flex: ",";\n      max-width: ",";\n    }\n    &:nth-of-type(2),\n    &:nth-of-type(3) {\n      flex: ",";\n      max-width: ",";\n    }\n    &:last-of-type {\n      flex: ",";\n      max-width: ",";\n    }\n  }\n"])),(function(e){return e.mobile?"column":"row"}),(function(e){return e.mobile?"flex-start":"space-between"}),(function(e){return e.mobile?"flex-start":"center"}),(function(e){return e.mobile?"20px 15px":"12px 40px"}),(function(e){var t=e.theme;return(0,x.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)}),(function(e){return e.mobile?"15px":0}),(function(e){return e.mobile?"0 0 100%":"0 0 40%"}),(function(e){return e.mobile?"100%":"40%"}),(function(e){return e.mobile?"0 0 100%":"0 0 15%"}),(function(e){return e.mobile?"100%":"15%"}),(function(e){return e.mobile?"0 0 100%":"0 0 20%"}),(function(e){return e.mobile?"100%":"20%"}));t.Orders=function(e){var t=e.data,n=e.mobile,r=void 0!==n&&n,o=e.className,a=void 0===o?"":o,c=(0,p.useTranslation)().t,l=(0,f.useMemo)((function(){return t.some((function(e){return!!e.actions}))}),[t]);return(0,d.jsxs)(v,i({className:"wellms-component ".concat(a),mobile:r},{children:[0===t.length&&(0,d.jsx)(m.Text,{children:c("Orders.NoRecords")}),t.length>0&&(0,d.jsxs)(f.default.Fragment,{children:[!r&&(0,d.jsxs)("div",i({className:"labels-row"},{children:[(0,d.jsx)("div",i({className:"single-label"},{children:(0,d.jsx)(m.Text,i({size:"14"},{children:c("Orders.Title")}))})),(0,d.jsx)("div",i({className:"single-label"},{children:(0,d.jsx)(m.Text,i({size:"14"},{children:c("Orders.Date")}))})),(0,d.jsx)("div",i({className:"single-label"},{children:(0,d.jsx)(m.Text,i({size:"14"},{children:c("Orders.Price")}))})),l&&(0,d.jsx)("div",i({className:"single-label"},{children:(0,d.jsx)(m.Text,i({size:"14"},{children:c("Orders.Actions")}))}))]})),t.map((function(e,t){return(0,d.jsxs)(b,i({mobile:r},{children:[(0,d.jsx)("div",i({className:"single-content"},{children:e.title})),(0,d.jsx)("div",i({className:"single-content"},{children:e.date})),(0,d.jsx)("div",i({className:"single-content"},{children:e.price})),l&&(0,d.jsx)("div",i({className:"single-content"},{children:e.actions}))]}),t)}))]})]}))},t.default=(0,h.withTheme)((0,h.default)(t.Orders)(u||(u=r([""],[""]))))}}]);
//# sourceMappingURL=20.990cb4a2.chunk.js.map
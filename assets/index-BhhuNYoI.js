import{P as d,b as l,cz as Ie,q as H,r as k,j as n,cA as Fe,X as je,f as le,aH as Ee,w as T,aa as Ue,i as we,h as ke,o as Pe,C as Ne,v as se,l as q,n as ie,an as We,L as ze,s as ne,T as W,cB as De,aq as ae,y as Ve,A as qe}from"./index-CQ96WfSz.js";import{P as He}from"./index-0qAy9Eaq.js";import{C as xe}from"./index-BZ8bAeGI.js";import{B as Ye}from"./index-DJo8rp4U.js";import{t as V}from"./toast-CwM_HkAX.js";import"./index-DwLacoX8.js";import"./ResponsiveImage-D_FmW4Qc.js";import"./index-NPaUK2Xa.js";import"./swiper-react-DPen1Ja8.js";import"./index-D0cv_siB.js";import"./swiper-CClqrQVx.js";import"./a11y-Bvn7SDsJ.js";function he(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,a)}return r}function Ce(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?he(Object(r),!0).forEach(function(a){Te(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))})}return t}function J(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?J=function(e){return typeof e}:J=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(t)}function Te(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Q(t,e){return Ke(t)||Ze(t,e)||Xe(t,e)||Ge()}function Ke(t){if(Array.isArray(t))return t}function Ze(t,e){var r=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(r!=null){var a=[],s=!0,o=!1,u,p;try{for(r=r.call(t);!(s=(u=r.next()).done)&&(a.push(u.value),!(e&&a.length===e));s=!0);}catch(i){o=!0,p=i}finally{try{!s&&r.return!=null&&r.return()}finally{if(o)throw p}}return a}}function Xe(t,e){if(t){if(typeof t=="string")return ve(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ve(t,e)}}function ve(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function Ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ce=function(e){var r=l.useRef(e);return l.useEffect(function(){r.current=e},[e]),r.current},z=function(e){return e!==null&&J(e)==="object"},Je=function(e){return z(e)&&typeof e.then=="function"},Qe=function(e){return z(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},ge="[object Object]",et=function t(e,r){if(!z(e)||!z(r))return e===r;var a=Array.isArray(e),s=Array.isArray(r);if(a!==s)return!1;var o=Object.prototype.toString.call(e)===ge,u=Object.prototype.toString.call(r)===ge;if(o!==u)return!1;if(!o&&!a)return e===r;var p=Object.keys(e),i=Object.keys(r);if(p.length!==i.length)return!1;for(var c={},S=0;S<p.length;S+=1)c[p[S]]=!0;for(var w=0;w<i.length;w+=1)c[i[w]]=!0;var j=Object.keys(c);if(j.length!==p.length)return!1;var L=e,O=r,h=function(R){return t(L[R],O[R])};return j.every(h)},Le=function(e,r,a){return z(e)?Object.keys(e).reduce(function(s,o){var u=!z(r)||!et(e[o],r[o]);return a.includes(o)?(u&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),s):u?Ce(Ce({},s||{}),{},Te({},o,e[o])):s},null):null},tt="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",ye=function(e){if(e===null||Qe(e))return e;throw new Error(tt)},rt=function(e){if(Je(e))return{tag:"async",stripePromise:Promise.resolve(e).then(ye)};var r=ye(e);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},ue=l.createContext(null);ue.displayName="ElementsContext";var nt=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},pe=l.createContext(null);pe.displayName="CartElementContext";var at=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},Re=function(e){var r=e.stripe,a=e.options,s=e.children,o=l.useMemo(function(){return rt(r)},[r]),u=l.useState(null),p=Q(u,2),i=p[0],c=p[1],S=l.useState(null),w=Q(S,2),j=w[0],L=w[1],O=l.useState(function(){return{stripe:o.tag==="sync"?o.stripe:null,elements:o.tag==="sync"?o.stripe.elements(a):null}}),h=Q(O,2),v=h[0],R=h[1];l.useEffect(function(){var g=!0,I=function($){R(function(B){return B.stripe?B:{stripe:$,elements:$.elements(a)}})};return o.tag==="async"&&!v.stripe?o.stripePromise.then(function(N){N&&g&&I(N)}):o.tag==="sync"&&!v.stripe&&I(o.stripe),function(){g=!1}},[o,v,a]);var _=ce(r);l.useEffect(function(){_!==null&&_!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[_,r]);var A=ce(a);return l.useEffect(function(){if(v.elements){var g=Le(a,A,["clientSecret","fonts"]);g&&v.elements.update(g)}},[a,A,v.elements]),l.useEffect(function(){var g=v.stripe;!g||!g._registerWrapper||!g.registerAppInfo||(g._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),g.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))},[v.stripe]),l.createElement(ue.Provider,{value:v},l.createElement(pe.Provider,{value:{cart:i,setCart:c,cartState:j,setCartState:L}},s))};Re.propTypes={stripe:d.any,options:d.object};var ee=function(e){var r=l.useContext(ue);return nt(r,e)},be=function(e){var r=l.useContext(pe);return at(r,e)},ot=function(){var e=ee("calls useElements()"),r=e.elements;return r},st=function(){var e=ee("calls useStripe()"),r=e.stripe;return r};d.func.isRequired;var b=function(e,r,a){var s=!!a,o=l.useRef(a);l.useEffect(function(){o.current=a},[a]),l.useEffect(function(){if(!s||!e)return function(){};var u=function(){o.current&&o.current.apply(o,arguments)};return e.on(r,u),function(){e.off(r,u)}},[s,r,e,o])},it=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},m=function(e,r){var a="".concat(it(e),"Element"),s=function(i){var c=i.id,S=i.className,w=i.options,j=w===void 0?{}:w,L=i.onBlur,O=i.onFocus,h=i.onReady,v=i.onChange,R=i.onEscape,_=i.onClick,A=i.onLoadError,g=i.onLoaderStart,I=i.onNetworksChange,N=i.onCheckout,$=i.onLineItemClick,B=i.onConfirm,Y=i.onCancel,f=i.onShippingAddressChange,E=i.onShippingRateChange,M=ee("mounts <".concat(a,">")),F=M.elements,K=l.useState(null),D=Q(K,2),C=D[0],Z=D[1],P=l.useRef(null),U=l.useRef(null),de=be("mounts <".concat(a,">")),te=de.setCart,re=de.setCartState;b(C,"blur",L),b(C,"focus",O),b(C,"escape",R),b(C,"click",_),b(C,"loaderror",A),b(C,"loaderstart",g),b(C,"networkschange",I),b(C,"lineitemclick",$),b(C,"confirm",B),b(C,"cancel",Y),b(C,"shippingaddresschange",f),b(C,"shippingratechange",E);var X;e==="cart"?X=function(me){re(me),h&&h(me)}:h&&(e==="payButton"?X=h:X=function(){h(C)}),b(C,"ready",X);var Be=e==="cart"?function(y){re(y),v&&v(y)}:v;b(C,"change",Be);var Me=e==="cart"?function(y){re(y),N&&N(y)}:N;b(C,"checkout",Me),l.useLayoutEffect(function(){if(P.current===null&&F&&U.current!==null){var y=F.create(e,j);e==="cart"&&te&&te(y),P.current=y,Z(y),y.mount(U.current)}},[F,j,te]);var fe=ce(j);return l.useEffect(function(){if(P.current){var y=Le(j,fe,["paymentRequest"]);y&&P.current.update(y)}},[j,fe]),l.useLayoutEffect(function(){return function(){P.current&&(P.current.destroy(),P.current=null)}},[]),l.createElement("div",{id:c,className:S,ref:U})},o=function(i){ee("mounts <".concat(a,">")),be("mounts <".concat(a,">"));var c=i.id,S=i.className;return l.createElement("div",{id:c,className:S})},u=r?o:s;return u.propTypes={id:d.string,className:d.string,onChange:d.func,onBlur:d.func,onFocus:d.func,onReady:d.func,onEscape:d.func,onClick:d.func,onLoadError:d.func,onLoaderStart:d.func,onNetworksChange:d.func,onCheckout:d.func,onLineItemClick:d.func,onConfirm:d.func,onCancel:d.func,onShippingAddressChange:d.func,onShippingRateChange:d.func,options:d.object},u.displayName=a,u.__elementType=e,u},x=typeof window>"u";m("auBankAccount",x);m("card",x);var Ae=m("cardNumber",x),ct=m("cardExpiry",x),lt=m("cardCvc",x);m("fpxBank",x);m("iban",x);m("idealBank",x);m("p24Bank",x);m("epsBank",x);m("payment",x);m("payButton",x);m("paymentRequestButton",x);m("linkAuthentication",x);m("address",x);m("shippingAddress",x);m("cart",x);m("paymentMethodMessaging",x);m("affirmMessage",x);m("afterpayClearpayMessage",x);var Oe="https://js.stripe.com/v3",ut=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Se="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",pt=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Oe,'"]')),r=0;r<e.length;r++){var a=e[r];if(ut.test(a.src))return a}return null},dt=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(Oe).concat(r);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(a),a},ft=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},G=null,mt=function(e){return G!==null||(G=new Promise(function(r,a){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&e&&console.warn(Se),window.Stripe){r(window.Stripe);return}try{var s=pt();s&&e?console.warn(Se):s||(s=dt(e)),s.addEventListener("load",function(){window.Stripe?r(window.Stripe):a(new Error("Stripe.js not available"))}),s.addEventListener("error",function(){a(new Error("Failed to load Stripe.js"))})}catch(o){a(o);return}})),G},xt=function(e,r,a){if(e===null)return null;var s=e.apply(void 0,r);return ft(s,a),s},_e=Promise.resolve().then(function(){return mt(null)}),$e=!1;_e.catch(function(t){$e||console.warn(t)});var ht=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];$e=!0;var s=Date.now();return _e.then(function(o){return xt(o,r,s)})},Ct=Ie();const vt=H.div`
  padding: 15px;
  background-color: ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
  .collapse-title {
  }
  .collapse-content {
    padding: 0 30px;
    padding-top: 22px;
    margin-top: 16px;
    border-top: 1px solid ${({theme:t})=>t.gray1};
    @media (max-width: 991px) {
      padding: 30px 0 0 0;
    }
  }
`,gt=({title:t,children:e,active:r})=>{const[a,s]=k.useState(r||!1);return n.jsxs(vt,{children:[n.jsx("div",{className:"collapse-title",children:n.jsx(Fe,{name:t,label:n.jsx("strong",{children:t}),checked:r||a,onChange:()=>s(!a)})}),a&&n.jsx("div",{className:"collapse-content",children:e})]})},yt=H.div`
  .input-wrapper {
    background-color: ${({theme:t})=>t.mode==="dark"?"#333":t.cardBackgroundColor};
    &--custom {
      @media (max-width: 991px) {
        margin-bottom: 30px;
      }
    }
    .StripeElement {
      color: ${({theme:t})=>t.mode==="dark"?"#c3c3c3":t.gray1};
      padding: 11px 12px 13px;
      border: 1px solid
        ${({theme:t})=>t.mode==="dark"?t.gray5:t.gray4};
      &--focus {
        border: 1px solid
          ${({theme:t})=>t.mode==="dark"?t.gray5:t.gray3};
      }
      &--empty + label {
        display: none;
      }
      &--invalid + label,
      &--focus + label,
      &--complete + label {
        display: block;
        top: -8px;
        left: 24px;
      }
    }
  }
`,oe=H.label`
  position: absolute;
  top: 0;
  left: 0;
  font-family: ${({theme:t})=>t.font};
  color: ${({theme:t})=>t.mode==="dark"?"#c3c3c3":t.gray1};
  font-size: 10px;
  padding: 0 2px;
  background-color: ${({theme:t})=>t.mode==="dark"?"#000":t.white};
`,bt=({billingDetails:t,setBillingDetails:e})=>{const r=je(),{t:a}=le(),o=Ee.getFontFromTheme(r).fontFamily.split(",")[0].replace(/['"]/g,""),u=k.useMemo(()=>({style:{base:{fontFamily:o,backgroundColor:"transparent",padding:"11px 12px 13px",border:"1px solid red",color:r.mode==="dark"?r.white:r.gray1,fontSize:"12px","::placeholder":{color:r.mode==="dark"?"#c3c3c3":r.gray1}},invalid:{color:"#ff0000"}}}),[]);return n.jsxs(yt,{children:[n.jsxs(T.Row,{children:[n.jsx(T.Col,{lg:6,children:n.jsx("div",{className:"input-wrapper--custom",children:n.jsx(Ue.Input,{label:a("Cart.FullName"),type:"text",onChange:p=>e({...t,name:p.currentTarget.value}),value:t.name})})}),n.jsx(T.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(Ae,{options:u,id:"cardNumber"}),n.jsx(oe,{htmlFor:"cardNumber",children:a("Card number")})]})})]}),n.jsxs(T.Row,{children:[n.jsx(T.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(ct,{options:u,id:"cardExpiry"}),n.jsx(oe,{htmlFor:"cardExpiry",children:a("Expiration date")})]})}),n.jsx(T.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(lt,{options:u,id:"cardCVC"}),n.jsx(oe,{htmlFor:"cardCVC",children:"CVC"})]})})]})]})},St="data:image/svg+xml,%3csvg%20width='15'%20height='15'%20viewBox='0%200%2015%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.5%201H12.5C13.3284%201%2014%201.67157%2014%202.5V12.5C14%2013.3284%2013.3284%2014%2012.5%2014H2.5C1.67157%2014%201%2013.3284%201%2012.5V2.5C1%201.67157%201.67157%201%202.5%201ZM2.5%202C2.22386%202%202%202.22386%202%202.5V8.3636L3.6818%206.6818C3.76809%206.59551%203.88572%206.54797%204.00774%206.55007C4.12975%206.55216%204.24568%206.60372%204.32895%206.69293L7.87355%2010.4901L10.6818%207.6818C10.8575%207.50607%2011.1425%207.50607%2011.3182%207.6818L13%209.3636V2.5C13%202.22386%2012.7761%202%2012.5%202H2.5ZM2%2012.5V9.6364L3.98887%207.64753L7.5311%2011.4421L8.94113%2013H2.5C2.22386%2013%202%2012.7761%202%2012.5ZM12.5%2013H10.155L8.48336%2011.153L11%208.6364L13%2010.6364V12.5C13%2012.7761%2012.7761%2013%2012.5%2013ZM6.64922%205.5C6.64922%205.03013%207.03013%204.64922%207.5%204.64922C7.96987%204.64922%208.35078%205.03013%208.35078%205.5C8.35078%205.96987%207.96987%206.35078%207.5%206.35078C7.03013%206.35078%206.64922%205.96987%206.64922%205.5ZM7.5%203.74922C6.53307%203.74922%205.74922%204.53307%205.74922%205.5C5.74922%206.46693%206.53307%207.25078%207.5%207.25078C8.46693%207.25078%209.25078%206.46693%209.25078%205.5C9.25078%204.53307%208.46693%203.74922%207.5%203.74922Z'%20fill='currentColor'%20/%3e%3c/svg%3e",jt=H.section`
  .cart-success-container {
    font-family: ${({theme:t})=>t.font};
    background: #f8f8f8;
    border: 1px solid ${({theme:t})=>t.primaryColor};
    padding: 16px;
    display: grid;
    place-content: center;
    gap: 16px;

    .cart-success-title {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      margin: 0.8em;
    }

    .cart-success-text {
      font-size: 18px;
      text-align: center;
    }

    .cart-success-buttons {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
      justify-content: center;
      margin: 0.8em;
    }
  }
`,Et=()=>{const{t}=le(),{push:e}=we(),{fetchProgress:r}=k.useContext(ke.EscolaLMSContext);return k.useEffect(()=>{r()},[]),n.jsx(Pe,{metaTitle:t("Cart.Cart"),children:n.jsx(jt,{children:n.jsx(Ne,{children:n.jsxs("div",{className:"cart-success-container",children:[n.jsx("h2",{className:"cart-success-title",children:t("Cart.ThankYouTitle")}),n.jsx("p",{className:"cart-success-text",children:t("Cart.ThankYouText")}),n.jsxs("div",{className:"cart-success-buttons",children:[n.jsx(se.Button,{mode:"primary",onClick:()=>e(q.myProfile),children:t("Menu.Profile")}),n.jsx(se.Button,{mode:"primary",onClick:()=>e(q.courses),children:t("Menu.Courses")})]})]})})})})},wt=H.section`
  .module-wrapper {
    margin-bottom: 55px;
    @media (max-width: 991px) {
      margin-bottom: 33px;
    }
    h4 {
      margin-bottom: 20px;
      @media (max-width: 991px) {
        text-align: center;
      }
    }
  }
  .products-container {
    row-gap: 20px;
  }
  .payments-form {
    .collapse-wrapper {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    .input-wrapper {
      margin-bottom: 30px;
    }
  }
  .slider-section {
    margin-top: 110px;
  }
  .summary-box-wrapper {
    position: sticky;
    top: 100px;
    ${ie&&We`
      position: fixed;
      top: unset;
      bottom: 0;
      z-index: 10;
      width: 100%;
      left: 0;
      z-index: 99999;
    `}
  }
  .empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 192px 20px;
    text-align: center;
    background-color: ${({theme:t})=>t.mode==="light"?t.gray5:t.gray1};
    row-gap: 20px;

    p {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      padding: 80px 20px;
    }
  }
  .slider-section {
    h4 {
      @media (max-width: 575px) {
        padding-right: 45%;
      }
    }
  }
`,kt=({stripeKey:t})=>{var $,B,Y;const{user:e,cart:r,fetchCart:a,removeFromCart:s,payWithStripe:o,fetchCourses:u,courses:p,realizeVoucher:i}=k.useContext(ke.EscolaLMSContext),{t:c}=le(),{push:S,location:w}=we(),j=st(),L=ot(),[O,h]=k.useState(!1),[v,R]=k.useState({name:""}),[_,A]=k.useState(r.value.additional_discount>0?"granted":void 0),g=t.includes("_test_");k.useEffect(()=>{!e.loading&&!e.value?S(q.login):(u({per_page:6}),a())},[]);const I=k.useCallback(f=>{h(!0),o(f,"https://demo-stage.escolalms.com/#/user/my-profile").then(()=>{h(!1),S("/cart?status=success")}).catch(()=>{V(`${c("UnexpectedError")}`,"error"),h(!1)}).finally(()=>h(!1))},[]),N=()=>{if(!v.name){V(`${c("Cart.EmptyNameWarning")}`,"error");return}if(!j||!L){V(`${c("UnexpectedError")}`,"error");return}const f=L.getElement(Ae);f&&h(!0),f&&j.createPaymentMethod({type:"card",card:f,billing_details:v}).then(E=>{var M;E.error?(h(!1),V(E.error.message,"error"),console.log(E.error)):(I((M=E==null?void 0:E.paymentMethod)==null?void 0:M.id),setTimeout(()=>{h(!1)},3e3))}).catch(()=>{h(!1),V(`${c("UnexpectedError")}`,"error")})};return w.search.includes("?status=success")?n.jsx(Et,{}):n.jsx(Pe,{metaTitle:c("Cart.Cart"),children:n.jsxs(wt,{children:[n.jsx(Ne,{children:(($=r.value)==null?void 0:$.items.length)!==0?n.jsxs(T.Row,{children:[n.jsxs(T.Col,{lg:9,children:[n.jsx(Ye,{items:[n.jsx(ze,{to:q.home,children:c("Home")}),n.jsx(ne.Text,{size:"12",children:c("Cart.YourCart")})]}),n.jsxs("div",{className:"module-wrapper",children:[n.jsx(W.Title,{level:4,children:c("Cart.YourCart")}),n.jsx("div",{className:"products-container",children:(B=r.value)==null?void 0:B.items.map(f=>{var E,M,F,K,D,C,Z,P;return n.jsx(De.CheckoutCard,{mobile:ie,img:{src:((E=f.product)==null?void 0:E.poster_url)||St,alt:((M=f.product)==null?void 0:M.name)||""},title:(F=f.product)==null?void 0:F.name,price:`${ae((K=f.product)==null?void 0:K.price,(D=f.product)==null?void 0:D.tax_rate)} zł`,oldPrice:(C=f.product)!=null&&C.price_old?`${ae((Z=f.product)==null?void 0:Z.price_old,(P=f.product)==null?void 0:P.tax_rate)} zł`:void 0,handleDelete:()=>{var U;return s(Number((U=f.product)==null?void 0:U.id))}},f.id)})})]}),n.jsxs("div",{className:"module-wrapper",children:[n.jsx(W.Title,{level:4,children:c("Cart.ChoosePaymentMethod")}),n.jsxs("div",{className:"payments-form",children:[n.jsx("div",{className:"collapse-wrapper",children:n.jsx(gt,{active:!0,title:c("Cart.CreditCard"),children:n.jsx(bt,{setBillingDetails:R,billingDetails:v})})}),g&&n.jsx("div",{className:"card-info",children:n.jsxs(ne.Text,{size:"14",children:[c("Cart.UseTestCard"),":"," ",n.jsx(Ve.Link,{href:"https://docs.wellms.io/getting-started/demo.html",target:"_blank",rel:"noreferrer nofollow",children:c("Cart.LearnMore")})]})})]})]}),n.jsxs("section",{className:"slider-section",children:[n.jsx(W.Title,{level:4,children:c("Cart.Interest")}),p&&p.list&&n.jsx(xe,{courses:p.list.data})]})]}),n.jsxs(T.Col,{lg:3,children:[n.jsx(W.Title,{style:{marginBottom:20},level:4,as:"h3",children:c("Cart.Summary")}),n.jsx("div",{className:"summary-box-wrapper",children:n.jsx(Ct.CartCard,{mobile:ie,onBuyClick:()=>N(),id:1,title:`${ae(Number(((Y=r.value)==null?void 0:Y.total_with_tax)||0))} zł`,discount:{onDiscountClick:f=>i(f).then(E=>{E.success?(A("granted"),a()):A("error")}).catch(()=>{A("error")}),onDeleteDiscountClick:()=>console.log("clicked"),status:_}})})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"empty-cart",children:[n.jsx(W.Title,{level:3,children:c("Cart.EmptyCartTitle")}),n.jsx(ne.Text,{children:c("Cart.EmptyCartText")}),n.jsx(se.Button,{mode:"secondary",onClick:()=>S(q.courses),children:c("Cart.EmptyCartBtnText")})]}),n.jsxs("section",{className:"slider-section",children:[n.jsx(W.Title,{level:4,children:c("Cart.Interest")}),p&&p.list&&n.jsx(xe,{courses:p.list.data})]})]})}),(r.loading||O)&&n.jsx(He,{})]})})},Ft=()=>{var u,p,i;const{config:t}=k.useContext(qe.EscolaLMSContext),e=c=>ht(c),r=(p=(u=t==null?void 0:t.value)==null?void 0:u.escolalms_payments)==null?void 0:p.drivers,a=(i=r==null?void 0:r.stripe)==null?void 0:i.publishable_key,s=je(),o=Ee.getFontFromTheme(s);return n.jsx(Re,{stripe:e(a),options:{fonts:[{cssSrc:o.links[0]}]},children:n.jsx(kt,{stripeKey:a})})};export{Ft as default};

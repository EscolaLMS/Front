import{P as d,b as l,cB as Fe,q as Y,r as k,j as n,cC as Me,X as je,f as le,aC as Ee,w as T,aa as Ue,i as we,h as ke,o as Pe,C as Ne,v as oe,l as V,n as ie,aI as We,A as q,L as ze,s as ne,T as W,cD as De,al as ae,y as qe,D as Ve}from"./index-CBf-QksF.js";import{P as Ye}from"./index-xwqFlg5Y.js";import{C as xe}from"./index-BYpeRe0x.js";import{B as Ke}from"./index-E9QXZg2w.js";import{P as Xe}from"./index-DSumW0cD.js";import"./ResponsiveImage-BnPBXGWb.js";import"./index-DVEYPayL.js";import"./swiper-react-qtwdYFOz.js";import"./index-JHcu9MtM.js";import"./swiper-MZP_Uh6z.js";function he(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,a)}return r}function Ce(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?he(Object(r),!0).forEach(function(a){Te(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))})}return t}function Q(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Q=function(e){return typeof e}:Q=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(t)}function Te(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Z(t,e){return Ge(t)||He(t,e)||Je(t,e)||Qe()}function Ge(t){if(Array.isArray(t))return t}function He(t,e){var r=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(r!=null){var a=[],o=!0,s=!1,u,p;try{for(r=r.call(t);!(o=(u=r.next()).done)&&(a.push(u.value),!(e&&a.length===e));o=!0);}catch(i){s=!0,p=i}finally{try{!o&&r.return!=null&&r.return()}finally{if(s)throw p}}return a}}function Je(t,e){if(t){if(typeof t=="string")return ve(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ve(t,e)}}function ve(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ce=function(e){var r=l.useRef(e);return l.useEffect(function(){r.current=e},[e]),r.current},z=function(e){return e!==null&&Q(e)==="object"},Ze=function(e){return z(e)&&typeof e.then=="function"},et=function(e){return z(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},ye="[object Object]",tt=function t(e,r){if(!z(e)||!z(r))return e===r;var a=Array.isArray(e),o=Array.isArray(r);if(a!==o)return!1;var s=Object.prototype.toString.call(e)===ye,u=Object.prototype.toString.call(r)===ye;if(s!==u)return!1;if(!s&&!a)return e===r;var p=Object.keys(e),i=Object.keys(r);if(p.length!==i.length)return!1;for(var c={},S=0;S<p.length;S+=1)c[p[S]]=!0;for(var w=0;w<i.length;w+=1)c[i[w]]=!0;var j=Object.keys(c);if(j.length!==p.length)return!1;var R=e,_=r,h=function(O){return t(R[O],_[O])};return j.every(h)},Re=function(e,r,a){return z(e)?Object.keys(e).reduce(function(o,s){var u=!z(r)||!tt(e[s],r[s]);return a.includes(s)?(u&&console.warn("Unsupported prop change: options.".concat(s," is not a mutable property.")),o):u?Ce(Ce({},o||{}),{},Te({},s,e[s])):o},null):null},rt="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",ge=function(e){if(e===null||et(e))return e;throw new Error(rt)},nt=function(e){if(Ze(e))return{tag:"async",stripePromise:Promise.resolve(e).then(ge)};var r=ge(e);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},ue=l.createContext(null);ue.displayName="ElementsContext";var at=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},pe=l.createContext(null);pe.displayName="CartElementContext";var st=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},Oe=function(e){var r=e.stripe,a=e.options,o=e.children,s=l.useMemo(function(){return nt(r)},[r]),u=l.useState(null),p=Z(u,2),i=p[0],c=p[1],S=l.useState(null),w=Z(S,2),j=w[0],R=w[1],_=l.useState(function(){return{stripe:s.tag==="sync"?s.stripe:null,elements:s.tag==="sync"?s.stripe.elements(a):null}}),h=Z(_,2),v=h[0],O=h[1];l.useEffect(function(){var y=!0,F=function(L){O(function(B){return B.stripe?B:{stripe:L,elements:L.elements(a)}})};return s.tag==="async"&&!v.stripe?s.stripePromise.then(function(N){N&&y&&F(N)}):s.tag==="sync"&&!v.stripe&&F(s.stripe),function(){y=!1}},[s,v,a]);var $=ce(r);l.useEffect(function(){$!==null&&$!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[$,r]);var A=ce(a);return l.useEffect(function(){if(v.elements){var y=Re(a,A,["clientSecret","fonts"]);y&&v.elements.update(y)}},[a,A,v.elements]),l.useEffect(function(){var y=v.stripe;!y||!y._registerWrapper||!y.registerAppInfo||(y._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),y.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))},[v.stripe]),l.createElement(ue.Provider,{value:v},l.createElement(pe.Provider,{value:{cart:i,setCart:c,cartState:j,setCartState:R}},o))};Oe.propTypes={stripe:d.any,options:d.object};var ee=function(e){var r=l.useContext(ue);return at(r,e)},be=function(e){var r=l.useContext(pe);return st(r,e)},ot=function(){var e=ee("calls useElements()"),r=e.elements;return r},it=function(){var e=ee("calls useStripe()"),r=e.stripe;return r};d.func.isRequired;var b=function(e,r,a){var o=!!a,s=l.useRef(a);l.useEffect(function(){s.current=a},[a]),l.useEffect(function(){if(!o||!e)return function(){};var u=function(){s.current&&s.current.apply(s,arguments)};return e.on(r,u),function(){e.off(r,u)}},[o,r,e,s])},ct=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},m=function(e,r){var a="".concat(ct(e),"Element"),o=function(i){var c=i.id,S=i.className,w=i.options,j=w===void 0?{}:w,R=i.onBlur,_=i.onFocus,h=i.onReady,v=i.onChange,O=i.onEscape,$=i.onClick,A=i.onLoadError,y=i.onLoaderStart,F=i.onNetworksChange,N=i.onCheckout,L=i.onLineItemClick,B=i.onConfirm,K=i.onCancel,f=i.onShippingAddressChange,E=i.onShippingRateChange,I=ee("mounts <".concat(a,">")),M=I.elements,X=l.useState(null),D=Z(X,2),C=D[0],G=D[1],P=l.useRef(null),U=l.useRef(null),de=be("mounts <".concat(a,">")),te=de.setCart,re=de.setCartState;b(C,"blur",R),b(C,"focus",_),b(C,"escape",O),b(C,"click",$),b(C,"loaderror",A),b(C,"loaderstart",y),b(C,"networkschange",F),b(C,"lineitemclick",L),b(C,"confirm",B),b(C,"cancel",K),b(C,"shippingaddresschange",f),b(C,"shippingratechange",E);var H;e==="cart"?H=function(me){re(me),h&&h(me)}:h&&(e==="payButton"?H=h:H=function(){h(C)}),b(C,"ready",H);var Be=e==="cart"?function(g){re(g),v&&v(g)}:v;b(C,"change",Be);var Ie=e==="cart"?function(g){re(g),N&&N(g)}:N;b(C,"checkout",Ie),l.useLayoutEffect(function(){if(P.current===null&&M&&U.current!==null){var g=M.create(e,j);e==="cart"&&te&&te(g),P.current=g,G(g),g.mount(U.current)}},[M,j,te]);var fe=ce(j);return l.useEffect(function(){if(P.current){var g=Re(j,fe,["paymentRequest"]);g&&P.current.update(g)}},[j,fe]),l.useLayoutEffect(function(){return function(){P.current&&(P.current.destroy(),P.current=null)}},[]),l.createElement("div",{id:c,className:S,ref:U})},s=function(i){ee("mounts <".concat(a,">")),be("mounts <".concat(a,">"));var c=i.id,S=i.className;return l.createElement("div",{id:c,className:S})},u=r?s:o;return u.propTypes={id:d.string,className:d.string,onChange:d.func,onBlur:d.func,onFocus:d.func,onReady:d.func,onEscape:d.func,onClick:d.func,onLoadError:d.func,onLoaderStart:d.func,onNetworksChange:d.func,onCheckout:d.func,onLineItemClick:d.func,onConfirm:d.func,onCancel:d.func,onShippingAddressChange:d.func,onShippingRateChange:d.func,options:d.object},u.displayName=a,u.__elementType=e,u},x=typeof window>"u";m("auBankAccount",x);m("card",x);var Ae=m("cardNumber",x),lt=m("cardExpiry",x),ut=m("cardCvc",x);m("fpxBank",x);m("iban",x);m("idealBank",x);m("p24Bank",x);m("epsBank",x);m("payment",x);m("payButton",x);m("paymentRequestButton",x);m("linkAuthentication",x);m("address",x);m("shippingAddress",x);m("cart",x);m("paymentMethodMessaging",x);m("affirmMessage",x);m("afterpayClearpayMessage",x);var _e="https://js.stripe.com/v3",pt=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Se="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",dt=function(){for(var e=document.querySelectorAll('script[src^="'.concat(_e,'"]')),r=0;r<e.length;r++){var a=e[r];if(pt.test(a.src))return a}return null},ft=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(_e).concat(r);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(a),a},mt=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},J=null,xt=function(e){return J!==null||(J=new Promise(function(r,a){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&e&&console.warn(Se),window.Stripe){r(window.Stripe);return}try{var o=dt();o&&e?console.warn(Se):o||(o=ft(e)),o.addEventListener("load",function(){window.Stripe?r(window.Stripe):a(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){a(new Error("Failed to load Stripe.js"))})}catch(s){a(s);return}})),J},ht=function(e,r,a){if(e===null)return null;var o=e.apply(void 0,r);return mt(o,a),o},$e=Promise.resolve().then(function(){return xt(null)}),Le=!1;$e.catch(function(t){Le||console.warn(t)});var Ct=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];Le=!0;var o=Date.now();return $e.then(function(s){return ht(s,r,o)})},vt=Fe();const yt=Y.div`
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
`,gt=({title:t,children:e,active:r})=>{const[a,o]=k.useState(r||!1);return n.jsxs(yt,{children:[n.jsx("div",{className:"collapse-title",children:n.jsx(Me,{name:t,label:n.jsx("strong",{children:t}),checked:r||a,onChange:()=>o(!a)})}),a&&n.jsx("div",{className:"collapse-content",children:e})]})},bt=Y.div`
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
`,se=Y.label`
  position: absolute;
  top: 0;
  left: 0;
  font-family: ${({theme:t})=>t.font};
  color: ${({theme:t})=>t.mode==="dark"?"#c3c3c3":t.gray1};
  font-size: 10px;
  padding: 0 2px;
  background-color: ${({theme:t})=>t.mode==="dark"?"#000":t.white};
`,St=({billingDetails:t,setBillingDetails:e})=>{const r=je(),{t:a}=le(),s=Ee.getFontFromTheme(r).fontFamily.split(",")[0].replace(/['"]/g,""),u=k.useMemo(()=>({style:{base:{fontFamily:s,backgroundColor:"transparent",padding:"11px 12px 13px",border:"1px solid red",color:r.mode==="dark"?r.white:r.gray1,fontSize:"12px","::placeholder":{color:r.mode==="dark"?"#c3c3c3":r.gray1}},invalid:{color:"#ff0000"}}}),[]);return n.jsxs(bt,{children:[n.jsxs(T.Row,{children:[n.jsx(T.Col,{lg:6,children:n.jsx("div",{className:"input-wrapper--custom",children:n.jsx(Ue.Input,{label:a("Cart.FullName"),type:"text",onChange:p=>e({...t,name:p.currentTarget.value}),value:t.name})})}),n.jsx(T.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(Ae,{options:u,id:"cardNumber"}),n.jsx(se,{htmlFor:"cardNumber",children:a("Card number")})]})})]}),n.jsxs(T.Row,{children:[n.jsx(T.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(lt,{options:u,id:"cardExpiry"}),n.jsx(se,{htmlFor:"cardExpiry",children:a("Expiration date")})]})}),n.jsx(T.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(ut,{options:u,id:"cardCVC"}),n.jsx(se,{htmlFor:"cardCVC",children:"CVC"})]})})]})]})},jt=Y.section`
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
`,Et=()=>{const{t}=le(),{push:e}=we(),{fetchProgress:r}=k.useContext(ke.EscolaLMSContext);return k.useEffect(()=>{r()},[]),n.jsx(Pe,{metaTitle:t("Cart.Cart"),children:n.jsx(jt,{children:n.jsx(Ne,{children:n.jsxs("div",{className:"cart-success-container",children:[n.jsx("h2",{className:"cart-success-title",children:t("Cart.ThankYouTitle")}),n.jsx("p",{className:"cart-success-text",children:t("Cart.ThankYouText")}),n.jsxs("div",{className:"cart-success-buttons",children:[n.jsx(oe.Button,{mode:"primary",onClick:()=>e(V.myProfile),children:t("Menu.Profile")}),n.jsx(oe.Button,{mode:"primary",onClick:()=>e(V.courses),children:t("Menu.Courses")})]})]})})})})},wt=Y.section`
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
`,kt=({stripeKey:t})=>{var L,B,K;const{user:e,cart:r,fetchCart:a,removeFromCart:o,payWithStripe:s,fetchCourses:u,courses:p,realizeVoucher:i}=k.useContext(ke.EscolaLMSContext),{t:c}=le(),{push:S,location:w}=we(),j=it(),R=ot(),[_,h]=k.useState(!1),[v,O]=k.useState({name:""}),[$,A]=k.useState(r.value.additional_discount>0?"granted":void 0),y=t.includes("_test_");k.useEffect(()=>{!e.loading&&!e.value?S(V.login):(u({per_page:6}),a())},[]);const F=k.useCallback(f=>{h(!0),s(f,"https://demo-stage.escolalms.com/#/user/my-profile").then(()=>{h(!1),S("/cart?status=success")}).catch(()=>{q.error(`${c("UnexpectedError")}`),h(!1)}).finally(()=>h(!1))},[]),N=()=>{if(!v.name){q.error(`${c("Cart.EmptyNameWarning")}`);return}if(!j||!R){q.error(`${c("UnexpectedError")}`);return}const f=R.getElement(Ae);f&&h(!0),f&&j.createPaymentMethod({type:"card",card:f,billing_details:v}).then(E=>{var I;E.error?(h(!1),q.error(E.error.message),console.log(E.error)):(F((I=E==null?void 0:E.paymentMethod)==null?void 0:I.id),setTimeout(()=>{h(!1)},3e3))}).catch(()=>{h(!1),q.error(`${c("UnexpectedError")}`)})};return w.search.includes("?status=success")?n.jsx(Et,{}):n.jsx(Pe,{metaTitle:c("Cart.Cart"),children:n.jsxs(wt,{children:[n.jsx(Ne,{children:((L=r.value)==null?void 0:L.items.length)!==0?n.jsxs(T.Row,{children:[n.jsxs(T.Col,{lg:9,children:[n.jsx(Ke,{items:[n.jsx(ze,{to:V.home,children:c("Home")}),n.jsx(ne.Text,{size:"12",children:c("Cart.YourCart")})]}),n.jsxs("div",{className:"module-wrapper",children:[n.jsx(W.Title,{level:4,children:c("Cart.YourCart")}),n.jsx("div",{className:"products-container",children:(B=r.value)==null?void 0:B.items.map(f=>{var E,I,M,X,D,C,G,P;return n.jsx(De.CheckoutCard,{mobile:ie,img:{src:((E=f.product)==null?void 0:E.poster_url)||Xe,alt:((I=f.product)==null?void 0:I.name)||""},title:(M=f.product)==null?void 0:M.name,price:`${ae((X=f.product)==null?void 0:X.price,(D=f.product)==null?void 0:D.tax_rate)} zł`,oldPrice:(C=f.product)!=null&&C.price_old?`${ae((G=f.product)==null?void 0:G.price_old,(P=f.product)==null?void 0:P.tax_rate)} zł`:void 0,handleDelete:()=>{var U;return o(Number((U=f.product)==null?void 0:U.id))}},f.id)})})]}),n.jsxs("div",{className:"module-wrapper",children:[n.jsx(W.Title,{level:4,children:c("Cart.ChoosePaymentMethod")}),n.jsxs("div",{className:"payments-form",children:[n.jsx("div",{className:"collapse-wrapper",children:n.jsx(gt,{active:!0,title:c("Cart.CreditCard"),children:n.jsx(St,{setBillingDetails:O,billingDetails:v})})}),y&&n.jsx("div",{className:"card-info",children:n.jsxs(ne.Text,{size:"14",children:[c("Cart.UseTestCard"),":"," ",n.jsx(qe.Link,{href:"https://docs.wellms.io/getting-started/demo.html",target:"_blank",rel:"noreferrer nofollow",children:c("Cart.LearnMore")})]})})]})]}),n.jsxs("section",{className:"slider-section",children:[n.jsx(W.Title,{level:4,children:c("Cart.Interest")}),p&&p.list&&n.jsx(xe,{courses:p.list.data})]})]}),n.jsxs(T.Col,{lg:3,children:[n.jsx(W.Title,{style:{marginBottom:20},level:4,as:"h3",children:c("Cart.Summary")}),n.jsx("div",{className:"summary-box-wrapper",children:n.jsx(vt.CartCard,{mobile:ie,onBuyClick:()=>N(),id:1,title:`${ae(Number(((K=r.value)==null?void 0:K.total_with_tax)||0))} zł`,discount:{onDiscountClick:f=>i(f).then(E=>{E.success?(A("granted"),a()):A("error")}).catch(()=>{A("error")}),onDeleteDiscountClick:()=>console.log("clicked"),status:$}})})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"empty-cart",children:[n.jsx(W.Title,{level:3,children:c("Cart.EmptyCartTitle")}),n.jsx(ne.Text,{children:c("Cart.EmptyCartText")}),n.jsx(oe.Button,{mode:"secondary",onClick:()=>S(V.courses),children:c("Cart.EmptyCartBtnText")})]}),n.jsxs("section",{className:"slider-section",children:[n.jsx(W.Title,{level:4,children:c("Cart.Interest")}),p&&p.list&&n.jsx(xe,{courses:p.list.data})]})]})}),(r.loading||_)&&n.jsx(Ye,{})]})})},It=()=>{var u,p,i;const{config:t}=k.useContext(Ve.EscolaLMSContext),e=c=>Ct(c),r=(p=(u=t==null?void 0:t.value)==null?void 0:u.escolalms_payments)==null?void 0:p.drivers,a=(i=r==null?void 0:r.stripe)==null?void 0:i.publishable_key,o=je(),s=Ee.getFontFromTheme(o);return n.jsx(Oe,{stripe:e(a),options:{fonts:[{cssSrc:s.links[0]}]},children:n.jsx(kt,{stripeKey:a})})};export{It as default};

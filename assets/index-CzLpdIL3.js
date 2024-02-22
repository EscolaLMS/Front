import{P as p,b as l,cq as Me,q as Y,r as k,j as n,cr as Fe,X as je,f as ue,aA as Ee,h as R,aa as Ue,i as we,l as ke,L as Pe,m as Te,B as ie,k as V,o as ce,aG as We,A as q,w as ze,v as ae,T as U,cs as De,y as qe,D as Ve}from"./index-BTvwz0L3.js";import{P as Ye}from"./index-Dr14e7t8.js";import{C as xe}from"./index-MGoobGEV.js";import{B as Ke}from"./index-hgCH-7gi.js";import{P as Ge}from"./index-ClhuH08r.js";import{f as se}from"./index-1V4e0nUl.js";import"./ResponsiveImage-G_l4wTjD.js";import"./index-BHYkv3Er.js";import"./swiper-react-BSSPoOCY.js";import"./app-B2E7767C.js";import"./date-msTaMnuE.js";function he(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,a)}return r}function ve(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?he(Object(r),!0).forEach(function(a){Ne(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))})}return t}function Z(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Z=function(e){return typeof e}:Z=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(t)}function Ne(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ee(t,e){return Xe(t)||He(t,e)||Je(t,e)||Qe()}function Xe(t){if(Array.isArray(t))return t}function He(t,e){var r=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(r!=null){var a=[],o=!0,s=!1,u,d;try{for(r=r.call(t);!(o=(u=r.next()).done)&&(a.push(u.value),!(e&&a.length===e));o=!0);}catch(i){s=!0,d=i}finally{try{!o&&r.return!=null&&r.return()}finally{if(s)throw d}}return a}}function Je(t,e){if(t){if(typeof t=="string")return ge(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ge(t,e)}}function ge(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var le=function(e){var r=l.useRef(e);return l.useEffect(function(){r.current=e},[e]),r.current},W=function(e){return e!==null&&Z(e)==="object"},Ze=function(e){return W(e)&&typeof e.then=="function"},et=function(e){return W(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},Ce="[object Object]",tt=function t(e,r){if(!W(e)||!W(r))return e===r;var a=Array.isArray(e),o=Array.isArray(r);if(a!==o)return!1;var s=Object.prototype.toString.call(e)===Ce,u=Object.prototype.toString.call(r)===Ce;if(s!==u)return!1;if(!s&&!a)return e===r;var d=Object.keys(e),i=Object.keys(r);if(d.length!==i.length)return!1;for(var c={},b=0;b<d.length;b+=1)c[d[b]]=!0;for(var w=0;w<i.length;w+=1)c[i[w]]=!0;var j=Object.keys(c);if(j.length!==d.length)return!1;var A=e,$=r,h=function(O){return t(A[O],$[O])};return j.every(h)},Re=function(e,r,a){return W(e)?Object.keys(e).reduce(function(o,s){var u=!W(r)||!tt(e[s],r[s]);return a.includes(s)?(u&&console.warn("Unsupported prop change: options.".concat(s," is not a mutable property.")),o):u?ve(ve({},o||{}),{},Ne({},s,e[s])):o},null):null},rt="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",ye=function(e){if(e===null||et(e))return e;throw new Error(rt)},nt=function(e){if(Ze(e))return{tag:"async",stripePromise:Promise.resolve(e).then(ye)};var r=ye(e);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},de=l.createContext(null);de.displayName="ElementsContext";var at=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},pe=l.createContext(null);pe.displayName="CartElementContext";var st=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},Ae=function(e){var r=e.stripe,a=e.options,o=e.children,s=l.useMemo(function(){return nt(r)},[r]),u=l.useState(null),d=ee(u,2),i=d[0],c=d[1],b=l.useState(null),w=ee(b,2),j=w[0],A=w[1],$=l.useState(function(){return{stripe:s.tag==="sync"?s.stripe:null,elements:s.tag==="sync"?s.stripe.elements(a):null}}),h=ee($,2),g=h[0],O=h[1];l.useEffect(function(){var C=!0,B=function(M){O(function(I){return I.stripe?I:{stripe:M,elements:M.elements(a)}})};return s.tag==="async"&&!g.stripe?s.stripePromise.then(function(T){T&&C&&B(T)}):s.tag==="sync"&&!g.stripe&&B(s.stripe),function(){C=!1}},[s,g,a]);var L=le(r);l.useEffect(function(){L!==null&&L!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[L,r]);var _=le(a);return l.useEffect(function(){if(g.elements){var C=Re(a,_,["clientSecret","fonts"]);C&&g.elements.update(C)}},[a,_,g.elements]),l.useEffect(function(){var C=g.stripe;!C||!C._registerWrapper||!C.registerAppInfo||(C._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),C.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))},[g.stripe]),l.createElement(de.Provider,{value:g},l.createElement(pe.Provider,{value:{cart:i,setCart:c,cartState:j,setCartState:A}},o))};Ae.propTypes={stripe:p.any,options:p.object};var te=function(e){var r=l.useContext(de);return at(r,e)},Se=function(e){var r=l.useContext(pe);return st(r,e)},ot=function(){var e=te("calls useElements()"),r=e.elements;return r},it=function(){var e=te("calls useStripe()"),r=e.stripe;return r};p.func.isRequired;var S=function(e,r,a){var o=!!a,s=l.useRef(a);l.useEffect(function(){s.current=a},[a]),l.useEffect(function(){if(!o||!e)return function(){};var u=function(){s.current&&s.current.apply(s,arguments)};return e.on(r,u),function(){e.off(r,u)}},[o,r,e,s])},ct=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},m=function(e,r){var a="".concat(ct(e),"Element"),o=function(i){var c=i.id,b=i.className,w=i.options,j=w===void 0?{}:w,A=i.onBlur,$=i.onFocus,h=i.onReady,g=i.onChange,O=i.onEscape,L=i.onClick,_=i.onLoadError,C=i.onLoaderStart,B=i.onNetworksChange,T=i.onCheckout,M=i.onLineItemClick,I=i.onConfirm,K=i.onCancel,G=i.onShippingAddressChange,f=i.onShippingRateChange,E=te("mounts <".concat(a,">")),N=E.elements,X=l.useState(null),z=ee(X,2),v=z[0],H=z[1],P=l.useRef(null),F=l.useRef(null),D=Se("mounts <".concat(a,">")),re=D.setCart,ne=D.setCartState;S(v,"blur",A),S(v,"focus",$),S(v,"escape",O),S(v,"click",L),S(v,"loaderror",_),S(v,"loaderstart",C),S(v,"networkschange",B),S(v,"lineitemclick",M),S(v,"confirm",I),S(v,"cancel",K),S(v,"shippingaddresschange",G),S(v,"shippingratechange",f);var J;e==="cart"?J=function(me){ne(me),h&&h(me)}:h&&(e==="payButton"?J=h:J=function(){h(v)}),S(v,"ready",J);var Be=e==="cart"?function(y){ne(y),g&&g(y)}:g;S(v,"change",Be);var Ie=e==="cart"?function(y){ne(y),T&&T(y)}:T;S(v,"checkout",Ie),l.useLayoutEffect(function(){if(P.current===null&&N&&F.current!==null){var y=N.create(e,j);e==="cart"&&re&&re(y),P.current=y,H(y),y.mount(F.current)}},[N,j,re]);var fe=le(j);return l.useEffect(function(){if(P.current){var y=Re(j,fe,["paymentRequest"]);y&&P.current.update(y)}},[j,fe]),l.useLayoutEffect(function(){return function(){P.current&&(P.current.destroy(),P.current=null)}},[]),l.createElement("div",{id:c,className:b,ref:F})},s=function(i){te("mounts <".concat(a,">")),Se("mounts <".concat(a,">"));var c=i.id,b=i.className;return l.createElement("div",{id:c,className:b})},u=r?s:o;return u.propTypes={id:p.string,className:p.string,onChange:p.func,onBlur:p.func,onFocus:p.func,onReady:p.func,onEscape:p.func,onClick:p.func,onLoadError:p.func,onLoaderStart:p.func,onNetworksChange:p.func,onCheckout:p.func,onLineItemClick:p.func,onConfirm:p.func,onCancel:p.func,onShippingAddressChange:p.func,onShippingRateChange:p.func,options:p.object},u.displayName=a,u.__elementType=e,u},x=typeof window>"u";m("auBankAccount",x);m("card",x);var Oe=m("cardNumber",x),lt=m("cardExpiry",x),ut=m("cardCvc",x);m("fpxBank",x);m("iban",x);m("idealBank",x);m("p24Bank",x);m("epsBank",x);m("payment",x);m("payButton",x);m("paymentRequestButton",x);m("linkAuthentication",x);m("address",x);m("shippingAddress",x);m("cart",x);m("paymentMethodMessaging",x);m("affirmMessage",x);m("afterpayClearpayMessage",x);var _e="https://js.stripe.com/v3",dt=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,be="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",pt=function(){for(var e=document.querySelectorAll('script[src^="'.concat(_e,'"]')),r=0;r<e.length;r++){var a=e[r];if(dt.test(a.src))return a}return null},ft=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(_e).concat(r);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(a),a},mt=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},Q=null,xt=function(e){return Q!==null||(Q=new Promise(function(r,a){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&e&&console.warn(be),window.Stripe){r(window.Stripe);return}try{var o=pt();o&&e?console.warn(be):o||(o=ft(e)),o.addEventListener("load",function(){window.Stripe?r(window.Stripe):a(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){a(new Error("Failed to load Stripe.js"))})}catch(s){a(s);return}})),Q},ht=function(e,r,a){if(e===null)return null;var o=e.apply(void 0,r);return mt(o,a),o},$e=Promise.resolve().then(function(){return xt(null)}),Le=!1;$e.catch(function(t){Le||console.warn(t)});var vt=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];Le=!0;var o=Date.now();return $e.then(function(s){return ht(s,r,o)})},gt=Me();const Ct=Y.div`
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
`,yt=({title:t,children:e,active:r})=>{const[a,o]=k.useState(r||!1);return n.jsxs(Ct,{children:[n.jsx("div",{className:"collapse-title",children:n.jsx(Fe,{name:t,label:n.jsx("strong",{children:t}),checked:r||a,onChange:()=>o(!a)})}),a&&n.jsx("div",{className:"collapse-content",children:e})]})},St=Y.div`
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
`,oe=Y.label`
  position: absolute;
  top: 0;
  left: 0;
  font-family: ${({theme:t})=>t.font};
  color: ${({theme:t})=>t.mode==="dark"?"#c3c3c3":t.gray1};
  font-size: 10px;
  padding: 0 2px;
  background-color: ${({theme:t})=>t.mode==="dark"?"#000":t.white};
`,bt=({billingDetails:t,setBillingDetails:e})=>{const r=je(),{t:a}=ue(),s=Ee.getFontFromTheme(r).fontFamily.split(",")[0].replace(/['"]/g,""),u=k.useMemo(()=>({style:{base:{fontFamily:s,backgroundColor:"transparent",padding:"11px 12px 13px",border:"1px solid red",color:r.mode==="dark"?r.white:r.gray1,fontSize:"12px","::placeholder":{color:r.mode==="dark"?"#c3c3c3":r.gray1}},invalid:{color:"#ff0000"}}}),[]);return n.jsxs(St,{children:[n.jsxs(R.Row,{children:[n.jsx(R.Col,{lg:6,children:n.jsx("div",{className:"input-wrapper--custom",children:n.jsx(Ue.Input,{label:a("Cart.FullName"),type:"text",onChange:d=>e({...t,name:d.currentTarget.value}),value:t.name})})}),n.jsx(R.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(Oe,{options:u,id:"cardNumber"}),n.jsx(oe,{htmlFor:"cardNumber",children:a("Card number")})]})})]}),n.jsxs(R.Row,{children:[n.jsx(R.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(lt,{options:u,id:"cardExpiry"}),n.jsx(oe,{htmlFor:"cardExpiry",children:a("Expiration date")})]})}),n.jsx(R.Col,{lg:6,children:n.jsxs("div",{className:"input-wrapper",children:[n.jsx(ut,{options:u,id:"cardCVC"}),n.jsx(oe,{htmlFor:"cardCVC",children:"CVC"})]})})]})]})},jt=Y.section`
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
`,Et=()=>{const{t}=ue(),{push:e}=we(),{fetchProgress:r}=k.useContext(ke.EscolaLMSContext);return k.useEffect(()=>{r()},[]),n.jsx(Pe,{metaTitle:t("Cart.Cart"),children:n.jsx(jt,{children:n.jsx(Te,{children:n.jsxs("div",{className:"cart-success-container",children:[n.jsx("h2",{className:"cart-success-title",children:t("Cart.ThankYouTitle")}),n.jsx("p",{className:"cart-success-text",children:t("Cart.ThankYouText")}),n.jsxs("div",{className:"cart-success-buttons",children:[n.jsx(ie.Button,{mode:"primary",onClick:()=>e(V.myProfile),children:t("Menu.Profile")}),n.jsx(ie.Button,{mode:"primary",onClick:()=>e(V.courses),children:t("Menu.Courses")})]})]})})})})},wt=Y.section`
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
    ${ce&&We`
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
`,kt=({stripeKey:t})=>{var I,K,G;const{user:e,cart:r,fetchCart:a,removeFromCart:o,payWithStripe:s,fetchCourses:u,courses:d,realizeVoucher:i}=k.useContext(ke.EscolaLMSContext),{t:c}=ue(),{push:b,location:w}=we(),j=it(),A=ot(),[$,h]=k.useState(!1),[g,O]=k.useState({name:""}),[L,_]=k.useState(r.value.additional_discount>0?"granted":void 0),C=t.includes("_test_"),B={arrows:!1,infinite:!0,speed:500,slidesToShow:3,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]};k.useEffect(()=>{!e.loading&&!e.value?b(V.login):(u({per_page:6}),a())},[]);const T=k.useCallback(f=>{h(!0),s(f,"https://demo-stage.escolalms.com/#/user/my-profile").then(()=>{h(!1),b("/cart?status=success")}).catch(()=>{q.error(`${c("UnexpectedError")}`),h(!1)}).finally(()=>h(!1))},[]),M=()=>{if(!g.name){q.error(`${c("Cart.EmptyNameWarning")}`);return}if(!j||!A){q.error(`${c("UnexpectedError")}`);return}const f=A.getElement(Oe);f&&h(!0),f&&j.createPaymentMethod({type:"card",card:f,billing_details:g}).then(E=>{var N;E.error?(h(!1),q.error(E.error.message),console.log(E.error)):(T((N=E==null?void 0:E.paymentMethod)==null?void 0:N.id),setTimeout(()=>{h(!1)},3e3))}).catch(()=>{h(!1),q.error(`${c("UnexpectedError")}`)})};return w.search.includes("?status=success")?n.jsx(Et,{}):n.jsx(Pe,{metaTitle:c("Cart.Cart"),children:n.jsxs(wt,{children:[n.jsx(Te,{children:((I=r.value)==null?void 0:I.items.length)!==0?n.jsxs(R.Row,{children:[n.jsxs(R.Col,{lg:9,children:[n.jsx(Ke,{items:[n.jsx(ze,{to:V.home,children:c("Home")}),n.jsx(ae.Text,{size:"12",children:c("Cart.YourCart")})]}),n.jsxs("div",{className:"module-wrapper",children:[n.jsx(U.Title,{level:4,children:c("Cart.YourCart")}),n.jsx("div",{className:"products-container",children:(K=r.value)==null?void 0:K.items.map(f=>{var E,N,X,z,v,H,P,F;return n.jsx(De.CheckoutCard,{mobile:ce,img:{src:((E=f.product)==null?void 0:E.poster_url)||Ge,alt:((N=f.product)==null?void 0:N.name)||""},title:(X=f.product)==null?void 0:X.name,price:`${se((z=f.product)==null?void 0:z.price,(v=f.product)==null?void 0:v.tax_rate)} zł`,oldPrice:(H=f.product)!=null&&H.price_old?`${se((P=f.product)==null?void 0:P.price_old,(F=f.product)==null?void 0:F.tax_rate)} zł`:void 0,handleDelete:()=>{var D;return o(Number((D=f.product)==null?void 0:D.id))}},f.id)})})]}),n.jsxs("div",{className:"module-wrapper",children:[n.jsx(U.Title,{level:4,children:c("Cart.ChoosePaymentMethod")}),n.jsxs("div",{className:"payments-form",children:[n.jsx("div",{className:"collapse-wrapper",children:n.jsx(yt,{active:!0,title:c("Cart.CreditCard"),children:n.jsx(bt,{setBillingDetails:O,billingDetails:g})})}),C&&n.jsx("div",{className:"card-info",children:n.jsxs(ae.Text,{size:"14",children:[c("Cart.UseTestCard"),":"," ",n.jsx(qe.Link,{href:"https://docs.wellms.io/getting-started/demo.html",target:"_blank",rel:"noreferrer nofollow",children:c("Cart.LearnMore")})]})})]})]}),n.jsxs("section",{className:"slider-section",children:[n.jsx(U.Title,{level:4,children:c("Cart.Interest")}),d&&d.list&&n.jsx(xe,{courses:d.list.data,sliderSettings:B})]})]}),n.jsxs(R.Col,{lg:3,children:[n.jsx(U.Title,{style:{marginBottom:20},level:4,as:"h3",children:c("Cart.Summary")}),n.jsx("div",{className:"summary-box-wrapper",children:n.jsx(gt.CartCard,{mobile:ce,onBuyClick:()=>M(),id:1,title:`${se(Number(((G=r.value)==null?void 0:G.total_with_tax)||0))} zł`,discount:{onDiscountClick:f=>i(f).then(E=>{E.success?(_("granted"),a()):_("error")}).catch(()=>{_("error")}),onDeleteDiscountClick:()=>console.log("clicked"),status:L}})})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"empty-cart",children:[n.jsx(U.Title,{level:3,children:c("Cart.EmptyCartTitle")}),n.jsx(ae.Text,{children:c("Cart.EmptyCartText")}),n.jsx(ie.Button,{mode:"secondary",onClick:()=>b(V.courses),children:c("Cart.EmptyCartBtnText")})]}),n.jsxs("section",{className:"slider-section",children:[n.jsx(U.Title,{level:4,children:c("Cart.Interest")}),d&&d.list&&n.jsx(xe,{courses:d.list.data,sliderSettings:B})]})]})}),(r.loading||$)&&n.jsx(Ye,{})]})})},Mt=()=>{var u,d,i;const{config:t}=k.useContext(Ve.EscolaLMSContext),e=c=>vt(c),r=(d=(u=t==null?void 0:t.value)==null?void 0:u.escolalms_payments)==null?void 0:d.drivers,a=(i=r==null?void 0:r.stripe)==null?void 0:i.publishable_key,o=je(),s=Ee.getFontFromTheme(o);return n.jsx(Ae,{stripe:e(a),options:{fonts:[{cssSrc:s.links[0]}]},children:n.jsx(kt,{stripeKey:a})})};export{Mt as default};

import{r as l,i as W,h as q,k as A,J as i,A as y}from"./index-CfziJAoE.js";var L=(o=>(o.Stripe="Stripe",o.Przelewy24="Przelewy24",o))(L||{});const F=()=>{var E,P,w,x;const{config:o,user:a,cart:d,fetchCart:S,removeFromCart:$,payWithStripe:f,payWithP24:m,subscriptionPayWithP24:v,courses:h,realizeVoucher:C,resetCart:n}=l.useContext(W.EscolaLMSContext),{t:r}=q(),{push:p,location:_}=A(),[b,e]=l.useState(!1),[g,U]=l.useState(((E=d==null?void 0:d.value)==null?void 0:E.additional_discount)>0?"granted":void 0),z=l.useCallback(async s=>{var t;e(!0);try{if(!((t=a.value)!=null&&t.email)){i(`${r("MissingEmailError")}`,"error"),e(!1);return}await f(s,`${y}/#/cart?status=success`),e(!1),p("/cart?status=success"),n()}catch(u){i(`${r("UnexpectedError")}`,"error"),e(!1),console.error(u)}},[f,p,r,(P=a.value)==null?void 0:P.email,n]),M=l.useCallback(async s=>{var t,u;e(!0);try{if(!((t=a.value)!=null&&t.email)){i(`${r("MissingEmailError")}`,"error"),e(!1);return}const c=await m((u=a.value)==null?void 0:u.email,`${y}/#/cart?status=success`,s||void 0);if(c.data.redirect_url===void 0){i(`${r("UnexpectedError")}`,"error"),e(!1);return}e(!1),n(),window.open(c.data.redirect_url)}catch(c){i(`${r("UnexpectedError")}`,"error"),e(!1),console.error(c)}},[m,r,(w=a.value)==null?void 0:w.email,n]),k=l.useCallback(async s=>{var t,u;if(e(!0),!((t=a.value)!=null&&t.email)){i(`${r("MissingEmailError")}`,"error"),e(!1);return}try{const c=await v(s,(u=a.value)==null?void 0:u.email,`${y}/#/cart?status=success`);if(c.data.redirect_url===void 0){i(`${r("UnexpectedError")}`,"error"),e(!1);return}e(!1),window.open(c.data.redirect_url),n()}catch{i(`${r("UnexpectedError")}`,"error")}},[r,v,(x=a.value)==null?void 0:x.email,n]),B=l.useMemo(()=>{var s,t;return((t=(s=o==null?void 0:o.value)==null?void 0:s.escolalms_payments)==null?void 0:t.default_gateway)==="Przelewy24"?"Przelewy24":"Stripe"},[o]);return{user:a,processing:b,setProcessing:e,discountStatus:g,payByStripe:z,payByP24:M,removeFromCart:$,courses:h,cart:d,location:_,push:p,realizeVoucher:C,setDiscountStatus:U,fetchCart:S,buySubscriptionByP24:k,defaultGateway:B}};export{L as P,F as u};
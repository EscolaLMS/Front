import{a as P,j as a,aG as k,o as i,ar as C,p as T,G as $,q as w,b as A,f as x,O as y,V as N,Q as B,v as j,T as E,K as O}from"./index-B2DLdQWL.js";import{r as d}from"./sentry-DZqhWugq.js";import{P as c,a as M,f as R,r as z}from"./payment-C9RZguD5.js";import{u as D}from"./usePayment-DLZcKjTY.js";const K=w.div`
  border-radius: ${({theme:e})=>e.buttonRadius}px;
  background-color: ${({theme:e})=>$(e.mode,e.black,e.white,"black")};
  padding: 22px;
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .${"cancelled"} {
    color: ${({theme:e})=>e.primaryColor};
    @media (max-width: 768px) {
      padding-left: 20px;
    }
  }
`,Y=({activeSubscription:e,subscriptionCancel:s})=>{const[l,t]=d.useState((e==null?void 0:e.status)||"active"),{t:o}=P(),p=d.useCallback(()=>{t("cancelled"),s(e.id)},[e==null?void 0:e.id,s]);return a.jsxs(K,{className:"info-box",children:[a.jsxs("div",{children:[e&&a.jsx(k,{}),a.jsx(i.Text,{children:e?o("Subscriptions.ActiveSubscription",{date:C(e.end_date,"dd.MM.yyyy")}):o("Subscriptions.NoSubscription")})]}),l==="cancelled"&&a.jsx(i.Text,{className:"cancelled",children:o("Subscriptions.Cancelled")}),e&&l==="active"&&a.jsx(T.Button,{onClick:p,children:"Anuluj subskrypcję"})]})},V=w.div`
  border-radius: ${({theme:e})=>e.cardRadius}px;
  border: 1px solid ${({theme:e})=>e.gray3};
  padding: ${({$isMobile:e})=>e?"20px":"23px 75px"};
  transition: border 0.3s ease-in-out;
  margin-bottom: ${({$isMobile:e})=>"30px"};
  background-color: ${({theme:e})=>$(e.mode,e.black,e.white,"black")};
  .content {
    text-align: center;
    max-width: 210px;
    position: relative;
    margin: 0 auto;

    p {
      margin-bottom: 0;
    }
    .information {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.5px;
      margin-top: 5px;
      background-color: ${({theme:e})=>e.secondaryColor};
    }
    .divider {
      width: 21px;
      height: 3px;
      border-radius: 18px;
      background-color: ${({theme:e})=>e.primaryColor};
      margin: 23px auto 16px auto;
    }
    .description {
      margin-bottom: 17px;
    }
    .price {
      margin-bottom: 30px;
    }
    button {
      width: 100%;
    }
    .tag {
      position: absolute;
      top: -37px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 18px;
      width: fit-content;
      background-color: ${({theme:e})=>e.textColor};
      padding: 3px 14px;

      p {
        text-transform: uppercase;
        color: ${({theme:e})=>e.white};
        margin-bottom: 0;
      }
    }
  }

  &:hover {
    border: 1px solid #333333;
  }
`,F=({subscription:e})=>{var u,m,g;const{t:s}=P(),{buySubscriptionByP24:l,user:t}=D(),o=A(),p=d.useMemo(()=>e.tags&&e.tags.includes("best-deal"),[e.tags]),S=d.useCallback(()=>{var r;(r=t.value)!=null&&r.id?l(e.id):o.push(x.login)},[e.id,(u=t.value)==null?void 0:u.id,l,o]);d.useEffect(()=>{(async function(){var n;const r=(n=t==null?void 0:t.value)==null?void 0:n.id;y.getPlatform()==="ios"?await c.configure({apiKey:N,appUserID:`${r}`}):y.getPlatform()==="android"&&await c.configure({apiKey:B,appUserID:`${r}`})})()},[(m=t==null?void 0:t.value)==null?void 0:m.id]);const I=d.useCallback(async()=>{var h,b;if(!((h=t.value)!=null&&h.id)){o.push(x.login);return}const r=M(e),n=await c.getOfferings(),_=((b=n==null?void 0:n.current)==null?void 0:b.availablePackages)||[],f=R(_,r);if(f)try{await c.purchaseStoreProduct({product:f}),o.push(x.home)}catch(v){z(v)}},[o,e,(g=t.value)==null?void 0:g.id]);return a.jsx(V,{$isMobile:j,children:a.jsxs("div",{className:"content",children:[p&&a.jsx("div",{className:"tag",children:a.jsx(i.Text,{size:"13",children:s("Subscriptions.CheapestOffer")})}),a.jsx(i.Text,{children:s("Subscriptions.AccessVia")}),a.jsxs(E.Title,{level:1,as:"h4",children:[e.subscription_duration," ",s(`Subscriptions.Periods.${e.subscription_period}`)]}),a.jsxs(i.Text,{className:"information",size:"13",children:[a.jsx(k,{})," ",e.trial_duration,"-",s(`Subscriptions.Periods.${e.trial_period}`)," ",s("Subscriptions.TrialText")]}),a.jsx("div",{className:"divider"}),a.jsx(i.Text,{size:"13",className:"description",children:e.name}),a.jsxs(i.Text,{size:"24",className:"price",bold:!0,children:[O(e.gross_price)," zł"]}),a.jsx(T.Button,{mode:"secondary",onClick:()=>{if(j){I();return}S()},children:s("Subscriptions.IPick")})]})})};export{Y as A,F as S};
//# sourceMappingURL=index-CS_g6lY3.js.map

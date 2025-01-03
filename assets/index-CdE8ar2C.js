import{q as P,K as k,r as d,h as $,j as a,aL as T,y as i,aw as v,z as w,k as A,m as p,Z as y,_ as N,$ as B,E as j,T as E,W as z}from"./index-vFA023FS.js";import{P as c,a as M,f as O,r as R}from"./payment-BdTNQiYW.js";import{u as D}from"./usePayment-C3y29Z2i.js";const K=P.div`
  border-radius: ${({theme:e})=>e.buttonRadius}px;
  background-color: ${({theme:e})=>k(e.mode,e.black,e.white,"black")};
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
`,Y=({activeSubscription:e,subscriptionCancel:s})=>{const[l,t]=d.useState((e==null?void 0:e.status)||"active"),{t:o}=$(),x=d.useCallback(()=>{t("cancelled"),s(e.id)},[e==null?void 0:e.id,s]);return a.jsxs(K,{className:"info-box",children:[a.jsxs("div",{children:[e&&a.jsx(T,{}),a.jsx(i.Text,{children:e?o("Subscriptions.ActiveSubscription",{date:v(e.end_date,"dd.MM.yyyy")}):o("Subscriptions.NoSubscription")})]}),l==="cancelled"&&a.jsx(i.Text,{className:"cancelled",children:o("Subscriptions.Cancelled")}),e&&l==="active"&&a.jsx(w.Button,{onClick:x,children:"Anuluj subskrypcję"})]})},V=P.div`
  border-radius: ${({theme:e})=>e.cardRadius}px;
  border: 1px solid ${({theme:e})=>e.gray3};
  padding: ${({$isMobile:e})=>e?"20px":"23px 75px"};
  transition: border 0.3s ease-in-out;
  margin-bottom: ${({$isMobile:e})=>"30px"};
  background-color: ${({theme:e})=>k(e.mode,e.black,e.white,"black")};
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
`,F=({subscription:e})=>{var u,m,g;const{t:s}=$(),{buySubscriptionByP24:l,user:t}=D(),o=A(),x=d.useMemo(()=>e.tags&&e.tags.includes("best-deal"),[e.tags]),S=d.useCallback(()=>{var r;(r=t.value)!=null&&r.id?l(e.id):o.push(p.login)},[e.id,(u=t.value)==null?void 0:u.id,l,o]);d.useEffect(()=>{(async function(){var n;const r=(n=t==null?void 0:t.value)==null?void 0:n.id;y.getPlatform()==="ios"?await c.configure({apiKey:N,appUserID:`${r}`}):y.getPlatform()==="android"&&await c.configure({apiKey:B,appUserID:`${r}`})})()},[(m=t==null?void 0:t.value)==null?void 0:m.id]);const _=d.useCallback(async()=>{var f,b;if(!((f=t.value)!=null&&f.id)){o.push(p.login);return}const r=M(e),n=await c.getOfferings(),I=((b=n==null?void 0:n.current)==null?void 0:b.availablePackages)||[],h=O(I,r);if(h)try{await c.purchaseStoreProduct({product:h}),o.push(p.home)}catch(C){R(C)}},[o,e,(g=t.value)==null?void 0:g.id]);return a.jsx(V,{$isMobile:j,children:a.jsxs("div",{className:"content",children:[x&&a.jsx("div",{className:"tag",children:a.jsx(i.Text,{size:"13",children:s("Subscriptions.CheapestOffer")})}),a.jsx(i.Text,{children:s("Subscriptions.AccessVia")}),a.jsxs(E.Title,{level:1,as:"h4",children:[e.subscription_duration," ",s(`Subscriptions.Periods.${e.subscription_period}`)]}),a.jsxs(i.Text,{className:"information",size:"13",children:[a.jsx(T,{})," ",e.trial_duration,"-",s(`Subscriptions.Periods.${e.trial_period}`)," ",s("Subscriptions.TrialText")]}),a.jsx("div",{className:"divider"}),a.jsx(i.Text,{size:"13",className:"description",children:e.name}),a.jsxs(i.Text,{size:"24",className:"price",bold:!0,children:[z(e.gross_price)," zł"]}),a.jsx(w.Button,{mode:"secondary",onClick:()=>{if(j){_();return}S()},children:s("Subscriptions.IPick")})]})})};export{Y as A,F as S};
//# sourceMappingURL=index-CdE8ar2C.js.map

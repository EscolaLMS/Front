import{q as P,N as k,r as d,f as T,j as a,aI as $,y as i,aq as v,z as w,h as N,o as b,a3 as y,a4 as A,a5 as B,E as j,T as E,a1 as z}from"./index-B3KsnArT.js";import{P as c,a as M,f as O,r as R}from"./payment-C-X75r29.js";import{u as D}from"./usePayment-DXoL1Iqg.js";const K=P.div`
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
`,Y=({activeSubscription:e,subscriptionCancel:s})=>{const[l,t]=d.useState((e==null?void 0:e.status)||"active"),{t:o}=T(),x=d.useCallback(()=>{t("cancelled"),s(e.id)},[e==null?void 0:e.id,s]);return a.jsxs(K,{className:"info-box",children:[a.jsxs("div",{children:[e&&a.jsx($,{}),a.jsx(i.Text,{children:e?o("Subscriptions.ActiveSubscription",{date:v(e.end_date,"dd.MM.yyyy")}):o("Subscriptions.NoSubscription")})]}),l==="cancelled"&&a.jsx(i.Text,{className:"cancelled",children:o("Subscriptions.Cancelled")}),e&&l==="active"&&a.jsx(w.Button,{onClick:x,children:"Anuluj subskrypcję"})]})},q=P.div`
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
`,F=({subscription:e})=>{var p,u,m;const{t:s}=T(),{buySubscriptionByP24:l,user:t}=D(),o=N(),x=d.useMemo(()=>e.tags&&e.tags.includes("best-deal"),[e.tags]),S=d.useCallback(()=>{var r;(r=t.value)!=null&&r.id?l(e.id):o.push(b.login)},[e.id,(p=t.value)==null?void 0:p.id,l,o]);d.useEffect(()=>{(async function(){var n;const r=(n=t==null?void 0:t.value)==null?void 0:n.id;y.getPlatform()==="ios"?await c.configure({apiKey:A,appUserID:`${r}`}):y.getPlatform()==="android"&&await c.configure({apiKey:B,appUserID:`${r}`})})()},[(u=t==null?void 0:t.value)==null?void 0:u.id]);const I=d.useCallback(async()=>{var f,h;if(!((f=t.value)!=null&&f.id)){o.push(b.login);return}const r=M(e),n=await c.getOfferings(),_=((h=n==null?void 0:n.current)==null?void 0:h.availablePackages)||[],g=O(_,r);if(g)try{await c.purchaseStoreProduct({product:g}),window.location.reload()}catch(C){R(C)}},[o,e,(m=t.value)==null?void 0:m.id]);return a.jsx(q,{$isMobile:j,children:a.jsxs("div",{className:"content",children:[x&&a.jsx("div",{className:"tag",children:a.jsx(i.Text,{size:"13",children:s("Subscriptions.CheapestOffer")})}),a.jsx(i.Text,{children:s("Subscriptions.AccessVia")}),a.jsxs(E.Title,{level:1,as:"h4",children:[e.subscription_duration," ",s(`Subscriptions.Periods.${e.subscription_period}`)]}),a.jsxs(i.Text,{className:"information",size:"13",children:[a.jsx($,{})," ",e.trial_duration,"-",s(`Subscriptions.Periods.${e.trial_period}`)," ",s("Subscriptions.TrialText")]}),a.jsx("div",{className:"divider"}),a.jsx(i.Text,{size:"13",className:"description",children:e.name}),a.jsxs(i.Text,{size:"24",className:"price",bold:!0,children:[z(e.gross_price)," zł"]}),a.jsx(w.Button,{mode:"secondary",onClick:()=>{if(j){I();return}S()},children:s("Subscriptions.IPick")})]})})};export{Y as A,F as S};

import{q as x,F as p,r as n,f as u,j as s,az as m,w as o,ai as b,x as g,h as j,o as y,i as f,T,U as $}from"./index-DdFzT1l9.js";import{u as k}from"./usePayment-BhCZUg58.js";const S=x.div`
  border-radius: ${({theme:e})=>e.buttonRadius}px;
  background-color: ${({theme:e})=>p(e.mode,e.black,e.white,"black")};
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
`,B=({activeSubscription:e,subscriptionCancel:t})=>{const[r,i]=n.useState((e==null?void 0:e.status)||"active"),{t:a}=u();console.log("activeSubscription",e);const d=n.useCallback(()=>{i("cancelled"),t(e.id)},[e==null?void 0:e.id,t]);return s.jsxs(S,{className:"info-box",children:[s.jsxs("div",{children:[e&&s.jsx(m,{}),s.jsx(o.Text,{children:e?a("Subscriptions.ActiveSubscription",{date:b(e.end_date,"dd.MM.yyyy")}):a("Subscriptions.NoSubscription")})]}),r==="cancelled"&&s.jsx(o.Text,{className:"cancelled",children:a("Subscriptions.Cancelled")}),r==="active"&&s.jsx(g.Button,{onClick:d,children:"Anuluj subskrypcję"})]})},w=x.div`
  border-radius: ${({theme:e})=>e.cardRadius}px;
  border: 1px solid ${({theme:e})=>e.gray3};
  padding: ${({$isMobile:e})=>e?"20px":"23px 75px"};
  transition: border 0.3s ease-in-out;
  margin-bottom: ${({$isMobile:e})=>"30px"};
  background-color: ${({theme:e})=>p(e.mode,e.black,e.white,"black")};
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
`,_=({subscription:e})=>{var l;const{t}=u(),{buySubscriptionByP24:r,user:i}=k(),a=j(),d=n.useMemo(()=>e.tags&&e.tags.includes("best-deal"),[e.tags]),h=n.useCallback(()=>{var c;(c=i.value)!=null&&c.id?r(e.id):a.push(y.login)},[e.id,(l=i.value)==null?void 0:l.id,r,a]);return s.jsx(w,{$isMobile:f,children:s.jsxs("div",{className:"content",children:[d&&s.jsx("div",{className:"tag",children:s.jsx(o.Text,{size:"13",children:t("Subscriptions.CheapestOffer")})}),s.jsx(o.Text,{children:t("Subscriptions.AccessVia")}),s.jsxs(T.Title,{level:1,as:"h4",children:[e.subscription_duration," ",t(`Subscriptions.Periods.${e.subscription_period}`)]}),s.jsxs(o.Text,{className:"information",size:"13",children:[s.jsx(m,{})," ",e.trial_duration,"-",t(`Subscriptions.Periods.${e.trial_period}`)," ",t("Subscriptions.TrialText")]}),s.jsx("div",{className:"divider"}),s.jsx(o.Text,{size:"13",className:"description",children:e.name}),s.jsxs(o.Text,{size:"24",className:"price",bold:!0,children:[$(e.gross_price)," zł"]}),s.jsx(g.Button,{mode:"secondary",onClick:()=>h(),children:t("Subscriptions.IPick")})]})})};export{B as A,_ as S};

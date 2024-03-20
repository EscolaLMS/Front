import{q as d,aP as c,f as l,r as x,j as t,n as p,s as r,T as m,aQ as u,W as g,v as b}from"./index-qD7U5zMV.js";import{u as h}from"./usePayment-BKebm3AC.js";const j=d.div`
  border-radius: ${({theme:e})=>e.cardRadius}px;
  border: 1px solid ${({theme:e})=>e.gray3};
  padding: ${({$isMobile:e})=>e?"20px":"23px 75px"};
  transition: border 0.3s ease-in-out;
  margin-bottom: ${({$isMobile:e})=>"30px"};
  background-color: ${({theme:e})=>c(e.mode,e.black,e.white,"black")};
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
`,S=({subscription:e})=>{var o;const{t:i}=l(),{buySubscriptionByP24:s,user:a}=h(),n=x.useMemo(()=>e.tags&&e.tags.includes("best-deal"),[e.tags]);return t.jsx(j,{$isMobile:p,children:t.jsxs("div",{className:"content",children:[n&&t.jsx("div",{className:"tag",children:t.jsx(r.Text,{size:"13",children:i("Subscriptions.CheapestOffer")})}),t.jsx(r.Text,{children:i("Subscriptions.AccessVia")}),t.jsxs(m.Title,{level:1,as:"h4",children:[e.subscription_duration," ",i(`Subscriptions.Periods.${e.subscription_period}`)]}),t.jsxs(r.Text,{className:"information",size:"13",children:[t.jsx(u,{})," ",e.trial_duration,"-",i(`Subscriptions.Periods.${e.trial_period}`)," ",i("Subscriptions.TrialText")]}),t.jsx("div",{className:"divider"}),t.jsx(r.Text,{size:"13",className:"description",children:e.name}),t.jsxs(r.Text,{size:"24",className:"price",bold:!0,children:[g(e.gross_price)," zł"]}),((o=a.value)==null?void 0:o.id)&&t.jsx(b.Button,{mode:"secondary",onClick:()=>s(e.id),children:i("Subscriptions.IPick")})]})})};export{S};

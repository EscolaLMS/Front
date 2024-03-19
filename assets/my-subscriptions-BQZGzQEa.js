import{q as e,aP as n,f as c,j as t,aQ as p,s as d,aj as l,w as r}from"./index-DvAWm433.js";import{P as u}from"./index-fLm5dc1S.js";import{u as x}from"./useSubscriptions-iev8sl41.js";import{S as m}from"./index-BnNOP9qa.js";import"./index-DmCeVJO3.js";import"./usePayment-BkTzNuZV.js";const b=e.div`
  border-radius: ${({theme:s})=>s.buttonRadius}px;
  background-color: ${({theme:s})=>n(s.mode,s.black,s.white,"black")};
  padding: 22px;
  margin-top: 10px;
  margin-bottom: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,P=()=>{const{t:s}=c(),{subscriptions:a,getActiveSubscription:i}=x();return t.jsxs(u,{title:s("MyProfilePage.Subscriptions"),children:[t.jsxs(b,{className:"info-box",children:[i&&t.jsx(p,{}),t.jsx(d.Text,{children:i?s("Subscriptions.ActiveSubscription",{date:l(i.end_date,"dd.MM.yyyy")}):s("Subscriptions.NoSubscription")})]}),!i&&t.jsx("div",{className:"subscriptions",children:t.jsx(r.Row,{children:a.map(o=>t.jsx(r.Col,{lg:6,md:12,children:t.jsx(m,{subscription:o})},o.id))})})]})};export{P as default};

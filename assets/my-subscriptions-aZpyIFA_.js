import{q as n,aP as c,f as d,j as s,a0 as p,aQ as l,s as x,aj as u,w as r}from"./index-Cg8uAso-.js";import{P as m}from"./index-9n5NmUEp.js";import{u as b}from"./useSubscriptions-BQNlwuy0.js";import{S as j}from"./index-BsDIAy6X.js";import"./index-CcZE00-4.js";import"./toast-C85uSAFb.js";import"./usePayment-Cl4bi3-3.js";const f=n.div`
  border-radius: ${({theme:t})=>t.buttonRadius}px;
  background-color: ${({theme:t})=>c(t.mode,t.black,t.white,"black")};
  padding: 22px;
  margin-top: 10px;
  margin-bottom: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,T=()=>{const{t}=d(),{subscriptions:a,getActiveSubscription:i,isLoading:e}=b();return s.jsx(m,{title:t("MyProfilePage.Subscriptions"),children:e?s.jsx(p,{}):s.jsxs(s.Fragment,{children:[s.jsxs(f,{className:"info-box",children:[i&&s.jsx(l,{}),s.jsx(x.Text,{children:i?t("Subscriptions.ActiveSubscription",{date:u(i.end_date,"dd.MM.yyyy")}):t("Subscriptions.NoSubscription")})]}),!i&&s.jsx("div",{className:"subscriptions",children:s.jsx(r.Row,{children:a.map(o=>s.jsx(r.Col,{lg:6,md:12,children:s.jsx(j,{subscription:o})},o.id))})})]})})};export{T as default};

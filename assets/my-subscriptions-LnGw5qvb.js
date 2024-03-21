import{q as n,aP as c,f as d,j as s,a0 as p,aQ as l,s as x,aj as u,w as r}from"./index-CcQ9x6fP.js";import{P as m}from"./index-QwKXpFx7.js";import{u as b}from"./useSubscriptions-CK9Yz6Hj.js";import{S as j}from"./index-CQm0S3Ga.js";import"./index-yuKTftwM.js";import"./toast-8bhsWSTr.js";import"./usePayment-VzU0jf7q.js";const f=n.div`
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

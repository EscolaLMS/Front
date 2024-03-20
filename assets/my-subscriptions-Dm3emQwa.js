import{q as n,aP as c,f as d,j as s,a0 as p,aQ as l,s as x,aj as u,w as a}from"./index-qD7U5zMV.js";import{P as m}from"./index-8al_xJPs.js";import{u as b}from"./useSubscriptions-CuH-LEBN.js";import{S as j}from"./index-D1D0QJU2.js";import"./index-BRgMvLP6.js";import"./usePayment-BKebm3AC.js";const f=n.div`
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
`,M=()=>{const{t}=d(),{subscriptions:r,getActiveSubscription:i,isLoading:e}=b();return s.jsx(m,{title:t("MyProfilePage.Subscriptions"),children:e?s.jsx(p,{}):s.jsxs(s.Fragment,{children:[s.jsxs(f,{className:"info-box",children:[i&&s.jsx(l,{}),s.jsx(x.Text,{children:i?t("Subscriptions.ActiveSubscription",{date:u(i.end_date,"dd.MM.yyyy")}):t("Subscriptions.NoSubscription")})]}),!i&&s.jsx("div",{className:"subscriptions",children:s.jsx(a.Row,{children:r.map(o=>s.jsx(a.Col,{lg:6,md:12,children:s.jsx(j,{subscription:o})},o.id))})})]})})};export{M as default};

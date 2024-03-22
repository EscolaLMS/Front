import{q as e,f as n,j as i,o as d,C as p,T as c,s as x,n as l,a0 as u,w as t}from"./index-BxTLNZRa.js";import{S as b}from"./index-B2ftQick.js";import{u as m}from"./useSubscriptions-BqXWY7j1.js";import"./usePayment-C0fpcKjo.js";import"./toast-sK0s2imx.js";const h=e.div`
  background-color: ${({theme:s})=>s.gray4};
  padding-top: 57px;
  min-height: calc(100vh - 452px);
  padding-bottom: 50px;

  h1 {
    margin-bottom: 20px;
  }
`,j=e.div`
  border-radius: ${({theme:s})=>s.cardRadius}px;
  padding: ${({$isMobile:s})=>s?"20px":"50px 90px"};

  background-color: ${({theme:s})=>s.white};
  border: 1px solid #eaeaea;
`,$=()=>{const{t:s}=n(),{subscriptions:a,isLoading:o}=m();return i.jsx(d,{metaTitle:s("Subscriptions"),children:i.jsx(h,{children:i.jsxs(p,{children:[i.jsx(c.Title,{level:1,children:s("Subscriptions.Subs")}),i.jsx(x.Text,{size:"16",children:s("Subscriptions.Text")}),i.jsxs(j,{$isMobile:l,children:[o&&i.jsx(u,{}),!o&&i.jsx(t.Row,{children:a.map(r=>i.jsx(t.Col,{lg:6,md:12,children:i.jsx(b,{subscription:r})},r.id))})]})]})})})};export{$ as default};

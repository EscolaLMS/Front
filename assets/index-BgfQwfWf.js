import{a as l,D as u,j as i,k as b,C as m,T as h,o as n,g as j,U as S,J as c,q as p}from"./index-aC1vIBhc.js";import{A as g,S as T}from"./index-RK-qEmky.js";import{u as C}from"./payment-DW5-cLgc.js";import{r as f}from"./sentry-DZqhWugq.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";import"./usePayment-B5uHhGda.js";const v=p.div`
  background-color: ${({theme:s})=>s.gray4};
  padding-top: 57px;
  min-height: calc(100vh - 452px);
  padding-bottom: 50px;

  h1 {
    margin-bottom: 20px;
  }
`,$=p.div`
  border-radius: ${({theme:s})=>s.cardRadius}px;
  padding: ${({$isMobile:s})=>s?"20px":"50px 90px"};

  background-color: ${({theme:s})=>s.white};
  border: 1px solid #eaeaea;
`,q=()=>{var e;const{t:s}=l(),{subscriptions:t,isLoading:r,getActiveSubscription:o,subscriptionCancel:d}=C(),{user:x}=f.useContext(u.EscolaLMSContext);return i.jsx(b,{metaTitle:s("Subscriptions.Subs"),children:i.jsx(v,{children:i.jsxs(m,{children:[i.jsx(h.Title,{level:1,children:s("Subscriptions.Subs")}),i.jsx(n.Text,{size:"16",children:s("Subscriptions.Text")}),o&&((e=x.value)==null?void 0:e.id)&&i.jsx(g,{activeSubscription:o,subscriptionCancel:d}),!(o!=null&&o.id)&&i.jsxs($,{$isMobile:j,children:[r&&i.jsx(S,{}),!r&&i.jsx(c.Row,{children:t.length?t.map(a=>i.jsx(c.Col,{lg:6,md:12,children:i.jsx(T,{subscription:a})},a.id)):i.jsx(n.Text,{children:s("MyProfilePage.NoSub")})})]})]})})})};export{q as default};
//# sourceMappingURL=index-BgfQwfWf.js.map

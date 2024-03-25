import{q as n,f as x,r as l,G as u,j as i,s as b,C as m,T as h,w as j,i as S,Y as g,y as a}from"./index-CDjsyf2-.js";import{A as C,S as T}from"./index-DwFI4QLi.js";import{u as v}from"./useSubscriptions-C8bPwTqu.js";import"./usePayment-N1rZQGly.js";import"./toast-B-P2W3bd.js";const f=n.div`
  background-color: ${({theme:s})=>s.gray4};
  padding-top: 57px;
  min-height: calc(100vh - 452px);
  padding-bottom: 50px;

  h1 {
    margin-bottom: 20px;
  }
`,$=n.div`
  border-radius: ${({theme:s})=>s.cardRadius}px;
  padding: ${({$isMobile:s})=>s?"20px":"50px 90px"};

  background-color: ${({theme:s})=>s.white};
  border: 1px solid #eaeaea;
`,R=()=>{var r;const{t:s}=x(),{subscriptions:c,isLoading:t,getActiveSubscription:o,subscriptionCancel:d}=v(),{user:p}=l.useContext(u.EscolaLMSContext);return i.jsx(b,{metaTitle:s("Subscriptions.Subs"),children:i.jsx(f,{children:i.jsxs(m,{children:[i.jsx(h.Title,{level:1,children:s("Subscriptions.Subs")}),i.jsx(j.Text,{size:"16",children:s("Subscriptions.Text")}),o&&((r=p.value)==null?void 0:r.id)&&i.jsx(C,{activeSubscription:o,subscriptionCancel:d}),!(o!=null&&o.id)&&i.jsxs($,{$isMobile:S,children:[t&&i.jsx(g,{}),!t&&i.jsx(a.Row,{children:c.map(e=>i.jsx(a.Col,{lg:6,md:12,children:i.jsx(T,{subscription:e})},e.id))})]})]})})})};export{R as default};

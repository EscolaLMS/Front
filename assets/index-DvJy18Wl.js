import{q as n,h as x,r as l,N as u,j as i,v as b,C as m,T as h,y as j,o as S,a0 as g,V as e}from"./index-CfziJAoE.js";import{A as C,S as T}from"./index-YWz89d56.js";import{u as v}from"./payment-BAMXs_k0.js";import"./usePayment-H11NGnGq.js";const $=n.div`
  background-color: ${({theme:s})=>s.gray4};
  padding-top: 57px;
  min-height: calc(100vh - 452px);
  padding-bottom: 50px;

  h1 {
    margin-bottom: 20px;
  }
`,f=n.div`
  border-radius: ${({theme:s})=>s.cardRadius}px;
  padding: ${({$isMobile:s})=>s?"20px":"50px 90px"};

  background-color: ${({theme:s})=>s.white};
  border: 1px solid #eaeaea;
`,R=()=>{var r;const{t:s}=x(),{subscriptions:c,isLoading:t,getActiveSubscription:o,subscriptionCancel:d}=v(),{user:p}=l.useContext(u.EscolaLMSContext);return i.jsx(b,{metaTitle:s("Subscriptions.Subs"),children:i.jsx($,{children:i.jsxs(m,{children:[i.jsx(h.Title,{level:1,children:s("Subscriptions.Subs")}),i.jsx(j.Text,{size:"16",children:s("Subscriptions.Text")}),o&&((r=p.value)==null?void 0:r.id)&&i.jsx(C,{activeSubscription:o,subscriptionCancel:d}),!(o!=null&&o.id)&&i.jsxs(f,{$isMobile:S,children:[t&&i.jsx(g,{}),!t&&i.jsx(e.Row,{children:c.map(a=>i.jsx(e.Col,{lg:6,md:12,children:i.jsx(T,{subscription:a})},a.id))})]})]})})})};export{R as default};

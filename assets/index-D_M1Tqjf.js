import{q as n,f as x,r as l,O as u,j as i,w as b,C as m,T as h,y as j,i as S,a6 as g,W as e}from"./index-B3KsnArT.js";import{A as C,S as T}from"./index-CV84brbM.js";import{u as v}from"./payment-C-X75r29.js";import"./usePayment-DXoL1Iqg.js";const f=n.div`
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
`,M=()=>{var r;const{t:s}=x(),{subscriptions:c,isLoading:t,getActiveSubscription:o,subscriptionCancel:d}=v(),{user:p}=l.useContext(u.EscolaLMSContext);return i.jsx(b,{metaTitle:s("Subscriptions.Subs"),children:i.jsx(f,{children:i.jsxs(m,{children:[i.jsx(h.Title,{level:1,children:s("Subscriptions.Subs")}),i.jsx(j.Text,{size:"16",children:s("Subscriptions.Text")}),o&&((r=p.value)==null?void 0:r.id)&&i.jsx(C,{activeSubscription:o,subscriptionCancel:d}),!(o!=null&&o.id)&&i.jsxs($,{$isMobile:S,children:[t&&i.jsx(g,{}),!t&&i.jsx(e.Row,{children:c.map(a=>i.jsx(e.Col,{lg:6,md:12,children:i.jsx(T,{subscription:a})},a.id))})]})]})})})};export{M as default};

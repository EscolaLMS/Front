import{q as m,r as e,D as u,f,j as t,x,a3 as M,A as g}from"./index-CU_5DVq5.js";const W=m.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,p=({onClose:n,visible:c,webinarId:a})=>{const[s,l]=e.useState(null),[o,i]=e.useState(!1),{generateWebinarJitsy:d}=e.useContext(u.EscolaLMSContext),{t:h}=f();return e.useEffect(()=>{(async()=>{if(i(!0),a){const r=await d(a);r.success&&l(r.data),r.success||(g.error(`${h("WebinarPage.ErrorWhileGeneratingUrl")}`),n())}i(!1)})()},[a]),t.jsx(x.Modal,{onClose:n,visible:c,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:t.jsxs(W,{children:[o&&t.jsx(M,{}),!o&&s&&t.jsx("iframe",{title:s.data.roomName,src:s.url})]})})};export{p as W};

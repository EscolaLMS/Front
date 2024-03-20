import{q as f,r as e,A as h,f as u,j as t,x,a0 as M}from"./index-qD7U5zMV.js";import{t as g}from"./toast-lasjBFrg.js";const p=f.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,y=({onClose:o,visible:c,webinarId:a})=>{const[s,l]=e.useState(null),[n,i]=e.useState(!1),{generateWebinarJitsy:d}=e.useContext(h.EscolaLMSContext),{t:m}=u();return e.useEffect(()=>{(async()=>{if(i(!0),a){const r=await d(a);r.success&&l(r.data),r.success||(g(`${m("WebinarPage.ErrorWhileGeneratingUrl")}`,"error"),o())}i(!1)})()},[a]),t.jsx(x.Modal,{onClose:o,visible:c,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:t.jsxs(p,{children:[n&&t.jsx(M,{}),!n&&s&&t.jsx("iframe",{title:s.data.roomName,src:s.url})]})})};export{y as W};

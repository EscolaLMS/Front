import{q as x,D as S,a as v,j as t,w as U,U as R,z as E}from"./index-BVJtsEaO.js";import{r as e}from"./sentry-DZqhWugq.js";import{M as J,J as k,E as A}from"./index-Bq1-YPwF.js";import{Q as D}from"./questionnaire-CXWDgbJ4.js";const L=x.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,O=x.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,z=({onClose:n,visible:a,webinarId:s,webinar:r})=>{const[o,u]=e.useState(null),[f,g]=e.useState(!1),[h,m]=e.useState(!1),[j,W]=e.useState(null),[p,C]=e.useState(0),M=e.useRef(n),{generateWebinarJitsy:y}=e.useContext(S.EscolaLMSContext),{t:l}=v();e.useEffect(()=>{M.current=n},[n]),e.useEffect(()=>{(async()=>{if(!(!s||!a||o)){g(!0);try{const i=await y(s);i.success?u(i.data):(E(l("WebinarPage.ErrorWhileGeneratingUrl"),"error"),M.current())}catch(i){console.error("Error generating Jitsi URL:",i),E(l("WebinarPage.ErrorWhileGeneratingUrl"),"error")}finally{g(!1)}}})()},[s,a,y,l,o]),e.useEffect(()=>()=>{Object.keys(localStorage).forEach(d=>{d.startsWith("questionnaire_")&&localStorage.removeItem(d)})},[]),e.useEffect(()=>{a&&m(!1)},[a]);const c=e.useCallback(()=>{m(!0),u(null)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(U.Modal,{visible:a&&!h,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"100vh",padding:0,background:"black"},children:t.jsxs(L,{children:[f&&t.jsx(R,{}),t.jsxs(O,{children:[t.jsx(J,{onClose:c,recordingUrl:j,modelType:"webinar",webinar:r,participantCount:p}),a&&!f&&o&&t.jsx(k,{jitsyData:o,modelId:s,modelType:"webinar",close:c,onRecordingAvailable:W,term:(r==null?void 0:r.active_to)??"",participantCount:p,onParticipantCountChange:C,webinar:r},s)]})]})}),h&&t.jsx(A,{entityId:s,entityModel:D.WEBINAR,setIsEnded:()=>{n(),c()}})]})};export{z as W};
//# sourceMappingURL=index-B_fLVZSi.js.map

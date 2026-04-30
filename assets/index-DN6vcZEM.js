import{q as E,D as C,a as U,j as t,w as v,U as R,z as y}from"./index-CPuADl1x.js";import{r as e}from"./sentry-DZqhWugq.js";import{M as J,J as k,E as A}from"./index-C5-rX5R6.js";import{Q as D}from"./questionnaire-CXWDgbJ4.js";const L=E.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,O=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,z=({onClose:a,visible:r,webinarId:s,webinar:n})=>{const[o,u]=e.useState(null),[f,g]=e.useState(!1),[x,l]=e.useState(!1),[j,W]=e.useState(null),[h,S]=e.useState(0),m=e.useRef(a),{generateWebinarJitsy:p}=e.useContext(C.EscolaLMSContext),{t:c}=U();e.useEffect(()=>{m.current=a},[a]),e.useEffect(()=>{(async()=>{if(!(!s||!r||o)){g(!0);try{const i=await p(s);i.success?u(i.data):(y(c("WebinarPage.ErrorWhileGeneratingUrl"),"error"),m.current())}catch(i){console.error("Error generating Jitsi URL:",i),y(c("WebinarPage.ErrorWhileGeneratingUrl"),"error")}finally{g(!1)}}})()},[s,r,p,c,o]),e.useEffect(()=>()=>{Object.keys(localStorage).forEach(d=>{d.startsWith("questionnaire_")&&localStorage.removeItem(d)})},[]),e.useEffect(()=>{r&&l(!1)},[r]);const M=e.useCallback(()=>{l(!0),u(null),a()},[a]);return t.jsxs(t.Fragment,{children:[t.jsx(v.Modal,{visible:r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"100vh",padding:0,background:"black"},children:t.jsxs(L,{children:[f&&t.jsx(R,{}),t.jsxs(O,{children:[t.jsx(J,{onClose:M,recordingUrl:j,modelType:"webinar",webinar:n,participantCount:h}),r&&!f&&o&&t.jsx(k,{jitsyData:o,modelId:s,modelType:"webinar",close:M,onRecordingAvailable:W,term:(n==null?void 0:n.active_to)??"",participantCount:h,onParticipantCountChange:S,webinar:n},s)]})]})}),x&&t.jsx(A,{entityId:s,entityModel:D.WEBINAR,setIsEnded:()=>{l(!1),a()}})]})};export{z as W};
//# sourceMappingURL=index-DN6vcZEM.js.map

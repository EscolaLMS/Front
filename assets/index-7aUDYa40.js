import{q as E,D as S,a as v,j as t,w as R,U,z as y}from"./index-C8RYle4a.js";import{r as e}from"./sentry-DZqhWugq.js";import{M as J,J as T,E as k}from"./index-DvpE0QnH.js";import{Q as A}from"./questionnaire-CXWDgbJ4.js";import{u as C}from"./useRoles-BTPJFye5.js";const D=E.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,L=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,G=({onClose:s,visible:a,webinarId:r,webinar:o})=>{const[n,p]=e.useState(null),[u,f]=e.useState(!1),[x,l]=e.useState(!1),[j,W]=e.useState(null),g=e.useRef(s),{generateWebinarJitsy:m}=e.useContext(S.EscolaLMSContext),{t:c}=v(),{isTutor:h}=C();e.useEffect(()=>{g.current=s},[s]),e.useEffect(()=>{(async()=>{if(!(!r||!a||n)){f(!0);try{const i=await m(r);i.success?p(i.data):(y(c("WebinarPage.ErrorWhileGeneratingUrl"),"error"),g.current())}catch(i){console.error("Error generating Jitsi URL:",i),y(c("WebinarPage.ErrorWhileGeneratingUrl"),"error")}finally{f(!1)}}})()},[r,a,m,c,n]),e.useEffect(()=>()=>{Object.keys(localStorage).forEach(d=>{d.startsWith("questionnaire_")&&localStorage.removeItem(d)})},[]),e.useEffect(()=>{a&&l(!1)},[a]);const M=e.useCallback(()=>{l(!0),h&&s()},[h,s]);return t.jsxs(t.Fragment,{children:[t.jsx(R.Modal,{visible:a,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"100vh",padding:0,background:"black"},children:t.jsxs(D,{children:[u&&t.jsx(U,{}),t.jsxs(L,{children:[t.jsx(J,{onClose:M,recordingUrl:j,modelType:"webinar",webinar:o}),!u&&n&&t.jsx(T,{jitsyData:n,modelId:r,modelType:"webinar",close:M,onRecordingAvailable:W,term:(o==null?void 0:o.active_to)??""},r)]})]})}),x&&t.jsx(k,{entityId:r,entityModel:A.WEBINAR,setIsEnded:()=>{l(!1),s()}})]})};export{G as W};
//# sourceMappingURL=index-7aUDYa40.js.map

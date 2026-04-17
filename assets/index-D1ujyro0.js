import{q as E,D as C,a as R,j as t,w as U,U as J,z as y}from"./index-Bh0S307Q.js";import{r as e}from"./sentry-DZqhWugq.js";import{M as T,J as k,E as A}from"./index-C9ToxrQk.js";import{Q as D}from"./questionnaire-CXWDgbJ4.js";import{u as L}from"./useRoles-et2rZKWT.js";const O=E.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,P=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,b=({onClose:s,visible:r,webinarId:a,webinar:o})=>{const[n,x]=e.useState(null),[u,f]=e.useState(!1),[j,c]=e.useState(!1),[W,S]=e.useState(null),[g,v]=e.useState(0),h=e.useRef(s),{generateWebinarJitsy:m}=e.useContext(C.EscolaLMSContext),{t:l}=R(),{isTutor:p}=L();e.useEffect(()=>{h.current=s},[s]),e.useEffect(()=>{(async()=>{if(!(!a||!r||n)){f(!0);try{const i=await m(a);i.success?x(i.data):(y(l("WebinarPage.ErrorWhileGeneratingUrl"),"error"),h.current())}catch(i){console.error("Error generating Jitsi URL:",i),y(l("WebinarPage.ErrorWhileGeneratingUrl"),"error")}finally{f(!1)}}})()},[a,r,m,l,n]),e.useEffect(()=>()=>{Object.keys(localStorage).forEach(d=>{d.startsWith("questionnaire_")&&localStorage.removeItem(d)})},[]),e.useEffect(()=>{r&&c(!1)},[r]);const M=e.useCallback(()=>{c(!0),p&&s()},[p,s]);return t.jsxs(t.Fragment,{children:[t.jsx(U.Modal,{visible:r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"100vh",padding:0,background:"black"},children:t.jsxs(O,{children:[u&&t.jsx(J,{}),t.jsxs(P,{children:[t.jsx(T,{onClose:M,recordingUrl:W,modelType:"webinar",webinar:o,participantCount:g}),!u&&n&&t.jsx(k,{jitsyData:n,modelId:a,modelType:"webinar",close:M,onRecordingAvailable:S,term:(o==null?void 0:o.active_to)??"",participantCount:g,onParticipantCountChange:v,webinar:o},a)]})]})}),j&&t.jsx(A,{entityId:a,entityModel:D.WEBINAR,setIsEnded:()=>{c(!1),s()}})]})};export{b as W};
//# sourceMappingURL=index-D1ujyro0.js.map

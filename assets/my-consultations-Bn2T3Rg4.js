import{r as a,i as V,h as S,j as t,V as R,y as P,o as H,q as v,L as ne,al as se,X as re,N as Q,aQ as O,aR as K,aS as X,aT as q,aU as G,ak as oe,at as ae,aV as ie,g as ce,z as $,aW as de,aX as le,a0 as Y,af as ue,T as me,F as Z,aY as ee,v as fe,C as pe}from"./index-BqSOc7pd.js";import{a as ge,T as xe}from"./index-BrItLmPf.js";import{C as he}from"./index-CQART5pN.js";import{P as Ce,C as je,D as N,a as M,b as ye}from"./index-DnPQP2A3.js";import{u as J,R as Ee}from"./useRoles-zaUYPua_.js";import{Q as F}from"./questionnaire-CXWDgbJ4.js";import{u as ve,Q as we}from"./index-Dhh5H6VQ.js";import{C as Te}from"./CourseCard-DBwbD2Cv.js";import"./questionnaires-CDZ9uvMp.js";import"./useDownloadCertificate-q8Sxy2xE.js";import"./base-7gvCcPfx.js";import"./index-QEd7Mvtd.js";import"./swiper-BTgAPlM0.js";import"./swiper-react-Cbe2lyV1.js";import"./a11y-DvVZOIf9.js";import"./floating-ui.react-dom-DLwwW5-O.js";import"./index-C4zwrq8c.js";import"./index-C4SeeOYt.js";const _e=({type:e})=>{var l;const{userConsultations:r,fetchUserConsultations:o}=a.useContext(V.EscolaLMSContext),{t:n}=S(),[c,i]=a.useState([]),d=a.useMemo(()=>{var p;const s=((p=r.list)==null?void 0:p.data.filter(u=>e===L.STARTED||e===L.UPCOMING?u.in_coming||u.is_started:u.is_ended))||[];return Array.from(new Map(s.map(u=>[u.id,u])).values())},[e,(l=r.list)==null?void 0:l.data]);return a.useEffect(()=>{o()},[e,o]),a.useEffect(()=>(i([]),i(d),()=>{i([])}),[e,d]),t.jsx(Ce,{children:t.jsx(R.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((s,m)=>t.jsx(R.Col,{md:3,children:t.jsx(Te,{})},`skeleton-card-${m}`)):c.length===0?t.jsx(P.Text,{style:{paddingLeft:H?20:40},children:n("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:c.map(s=>t.jsx(R.Col,{xs:12,md:6,lg:3,children:t.jsx(je,{consultation:s})},s.id))})})})},k=a.memo(_e),be=v.div`
  .course-section {
    margin-top: 0px;
  }

  .course-card-buttons-group {
    margin: 0;
    width: 100%;

    button {
      width: 100%;
      margin: 0;
    }
  }

  p {
    font-family: ${({theme:e})=>e.font};
  }
`,Se=({product:e})=>e?t.jsx(ne,{to:`/consultations/${e.id}`,children:e.poster_path?t.jsx(se,{path:e.poster_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(he,{})}):null,Ie=v.div`
  display: flex;
  align-items: center;
  user-select: none;

  .status {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .name {
    padding: 0.5rem;
    font-family: ${({theme:e})=>e.font};
  }
`;var E=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(E||{});const A=({status:e,name:r})=>{const o=re(),n=a.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,e]);return t.jsxs(Ie,{children:[t.jsx("div",{className:"status",style:{backgroundColor:n}}),t.jsx("div",{className:"name",children:r})]})},Ae=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,De=v.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  > p {
    padding: 2px;
    border-radius: ${({theme:e})=>e.radius};
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
`,Pe={reported:{type:E.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:E.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:E.ENDED,info:"ConsultationStatus.RejectedInfo"}},Ne=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:o}=a.useContext(Q.EscolaLMSContext),{t:n}=S(),c=i=>{switch(i){case"reported":return t.jsx(A,{status:E.WAITING,name:n("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(A,{status:E.ACCEPTED,name:n("ConsultationStatus.Appointment")});case"reject":return t.jsx(A,{status:E.ENDED,name:n("ConsultationStatus.Canceled")})}};return t.jsx(Ae,{children:e.users.map(i=>t.jsxs("div",{children:[t.jsxs(P.Text,{className:"text",children:[i.first_name," ",i.last_name]}),t.jsx(P.Text,{className:"text",children:i.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Pe[i.executed_status]&&c(i.executed_status),t.jsxs(De,{children:[t.jsx(O,{icon:t.jsx(K,{}),text:n("Confirm"),onClick:()=>r(e.consultation_term_id,e.date,i.id)}),t.jsx(O,{icon:t.jsx(X,{}),text:n("Cancel"),onClick:()=>o(e.consultation_term_id,e.date,i.id)})]})]}),t.jsx("hr",{})]},i.id))})},Me=v.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Re=({consultation:e})=>{const{t:r}=S(),o=e.is_ended,n=e.is_started,c=e.status==="reported",i=e.status==="approved",d=e.status==="not_reported",l=e.status==="reject";return t.jsxs(t.Fragment,{children:[o&&e.date&&t.jsx(N,{type:M.ENDED,date:q(e.date,G(`${e.duration}`))}),l&&t.jsx(N,{type:M.ENDED,date:q(e.date,G(`${e.duration}`))}),c&&!o&&t.jsx(N,{type:M.WAITING,date:e.date,info:r("ConsultationStatus.UnconfirmedInfo")}),i&&!o&&t.jsx(N,{type:M.ACCEPTED,date:e.date,info:n&&e.consultation_term_id?t.jsx(Me,{children:t.jsx(ye,{consultationTermId:e.consultation_term_id,consultationId:e.consultation_id,term:e.date})}):r("ConsultationStatus.AppointmentInfo",{date:oe(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),d&&t.jsx(N,{type:M.DEFAULT})]})},Le=v.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({theme:e})=>e.primaryColor};
  border-radius: 2px;
  align-items: center;
  border-radius: ${({theme:e})=>e.cardRadius}px;
  .icon-container {
    display: flex;
    align-items: center;
    padding: 0.6rem;
    background-color: ${({theme:e})=>e.primaryColor};
    border-top-left-radius: ${({theme:e})=>(e.cardRadius??2)-2}px;
    border-bottom-left-radius: ${({theme:e})=>(e.cardRadius??2)-2}px;
  }

  .time {
    padding: 0.5rem;
    margin: 0 auto;
  }
`,ke=({time:e})=>t.jsxs(Le,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(ae,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(P.Text,{className:"time",children:e})]}),Ue=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,Oe=({consultation:e})=>t.jsxs(Ue,{children:[t.jsx(Ne,{consultation:e}),t.jsx(ke,{time:e.duration}),t.jsx(Re,{consultation:e})]});var $e=ie();const Fe=ce($e),Qe=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:o}=a.useContext(Q.EscolaLMSContext),{t:n}=S(),{consultation_term_id:c}=e,i=a.useMemo(()=>[{id:1,content:t.jsx(O,{icon:t.jsx(K,{}),text:n("Confirm"),onClick:()=>r(c,e.date)})},{id:2,content:t.jsx(O,{icon:t.jsx(X,{}),text:n("Cancel"),onClick:()=>o(c,e.date)})}],[r,c,o,n,e.date]);return t.jsx(Fe,{menuItems:i,child:t.jsx($.Button,{mode:"icon",children:t.jsx(de,{})})})},Je=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,Be=({consultation:e})=>{const{status:r,is_ended:o}=e,{t:n}=S(),c=r==="reported",i=r==="approved";return r==="reject"?t.jsx(A,{status:E.CANCELED,name:n("ConsultationStatus.Canceled")}):o?t.jsx(A,{status:E.ENDED,name:n("ConsultationStatus.Ended")}):c?t.jsxs(Je,{children:[t.jsx(A,{status:E.WAITING,name:n("ConsultationStatus.Unconfirmed")}),t.jsx(Qe,{consultation:e})]}):i?t.jsx(A,{status:E.ACCEPTED,name:n("ConsultationStatus.Appointment")}):t.jsx(A,{status:E.DEFAULT,name:r})},qe=e=>{var o;const{consultation:r}=e;return t.jsx(be,{children:t.jsx(le,{id:r.consultation_term_id,image:t.jsx(Se,{product:r.related_product}),title:t.jsx(Be,{consultation:r}),subtitle:t.jsx("p",{children:(o=r.related_product)==null?void 0:o.name}),footer:t.jsx(Oe,{consultation:r})})})},Ge=({type:e})=>{var i;const{tutorConsultations:r,fetchTutorConsultations:o}=a.useContext(V.EscolaLMSContext),{t:n}=S(),c=a.useMemo(()=>{var d;return((d=r.list)==null?void 0:d.data.filter(l=>e===L.STARTED||e===L.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[e,(i=r.list)==null?void 0:i.data]);return a.useEffect(()=>{o()},[o]),t.jsx(t.Fragment,{children:r.loading?t.jsx(Y,{}):c.length===0?t.jsx(P.Text,{style:{paddingLeft:H?20:40},children:n("MyProfilePage.OrdersEmpty")}):t.jsx(R.Row,{style:{gap:"30px 0"},children:c.map(d=>t.jsx(R.Col,{xs:12,md:6,lg:3,children:t.jsx(qe,{consultation:d})},d.consultation_term_id))})})},W=a.memo(Ge),We=v.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,te="meet.jit.si",ze="stage.8x8.vc",Ve="8x8.vc";var He=function(e,r,o,n){function c(i){return i instanceof o?i:new o(function(d){d(i)})}return new(o||(o=Promise))(function(i,d){function l(p){try{m(n.next(p))}catch(u){d(u)}}function s(p){try{m(n.throw(p))}catch(u){d(u)}}function m(p){p.done?i(p.value):c(p.value).then(l,s)}m((n=n.apply(e,r||[])).next())})};const Ke=(e,r,o)=>He(void 0,void 0,void 0,function*(){return new Promise((n,c)=>{if(window.JitsiMeetExternalAPI)return n(window.JitsiMeetExternalAPI);const i=document.createElement("script"),d=r?`?release=${r}`:"",l=o?`${o}/`:"";i.async=!0,i.src=`https://${e}/${l}external_api.js${d}`,i.onload=()=>n(window.JitsiMeetExternalAPI),i.onerror=()=>c(new Error(`Script load error: ${i.src}`)),document.head.appendChild(i)})});let U;const Xe=(e=te,r,o)=>U||(U=Ke(e,r,o),U),Ye=(e,r)=>r?`${r}/${e}`:e,Ze=e=>{const r=e.split("/");if(!(r.length<=1))return r[0]},et=e=>e?ze:Ve;let tt=0;const z=e=>`${e}-${tt++}`,nt=({domain:e=te,roomName:r,configOverwrite:o,interfaceConfigOverwrite:n,jwt:c,invitees:i,devices:d,userInfo:l,release:s,lang:m,spinner:p,onApiReady:u,onReadyToClose:x,getIFrameRef:j})=>{const[_,g]=a.useState(!0),[f,w]=a.useState(!1),y=a.useRef(),C=a.useRef(),T=a.useRef(null),h=a.useMemo(()=>z("jitsiMeeting"),[z]);a.useEffect(()=>{Xe(e,s,Ze(r)).then(I=>{y.current=I,w(!0)}).catch(I=>console.error(I.message))},[]);const b=a.useCallback(I=>{C.current=new I(e,{roomName:r,configOverwrite:o,interfaceConfigOverwrite:n,jwt:c,invitees:i,devices:d,userInfo:l,release:s,lang:m,parentNode:T.current}),g(!1),C.current&&(typeof u=="function"&&u(C.current),C.current.on("readyToClose",()=>{typeof x=="function"&&x()}),T.current&&typeof j=="function"&&j(T.current))},[C,T,u,x,j,e,r,o,n,c,i,d,l,s,m]);a.useEffect(()=>{f&&!C.current&&y.current&&b(y.current)},[f,b]);const D=a.useCallback(()=>!p||!_||C.current?null:t.jsx(p,{},void 0),[p,C.current]);return t.jsxs(t.Fragment,{children:[D(),t.jsx("div",{id:h,ref:T},h)]},void 0)};var st=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(e);c<n.length;c++)r.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]]);return o};const rt=e=>{var{appId:r,roomName:o,useStaging:n,release:c}=e,i=st(e,["appId","roomName","useStaging","release"]);return t.jsx(nt,Object.assign({domain:et(n),roomName:Ye(o,r),release:c},i),void 0)},ot=()=>{const[e,r]=a.useState(!1),o=a.useRef(null),n=a.useRef(null),c=a.useCallback(async()=>{try{const s=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});return r(!0),o.current=s,n.current||(n.current=document.createElement("video"),n.current.muted=!0,n.current.playsInline=!0),n.current.srcObject=s,n.current.play(),n.current}catch(s){return console.error("Camera access denied or not available:",s),r(!1),null}},[]),i=a.useCallback(async()=>(o.current&&o.current.getTracks().forEach(s=>s.stop()),await c()),[c]),d=async()=>await c(),l=async()=>{if(n.current&&o.current){const s=document.createElement("canvas"),m=s.getContext("2d"),u=o.current.getVideoTracks()[0].getSettings();s.height=u.height||0,s.width=u.width||0,m==null||m.drawImage(n.current,0,0);const x=s.toDataURL("image/png",1);return m==null||m.clearRect(0,0,s.width,s.height),s.remove(),x}return null};return a.useEffect(()=>{(async()=>{const m=await navigator.permissions.query({name:"camera"});m.state==="granted"&&await i(),m.onchange=async()=>{m.state==="granted"?await i():r(!1)}})()},[i]),{camera:d,hasCameraAccess:e,restartVideoTrack:i,getDataUrl:l}},at=e=>{const r=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),c=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),d=String(e.getSeconds()).padStart(2,"0");return`${r}-${o}-${n} ${c}:${i}:${d}`},it=(e,r,o,n,c,i="aaa.png")=>{fetch(n).then(d=>d.blob()).then(d=>{const l=new FormData;l.append("name",i),l.append("file",new File([d],i,{type:"image/png"})),l.append("consultation_id",e.toString()),l.append("user_termin_id",r.toString()),l.append("user_email",o),l.append("timestamp",at(new Date)),fetch(`${ue}/api/consultations/save-screen?executed_at=${c}`,{method:"POST",body:l}).then(()=>{}).catch(s=>console.log(s))}).catch(d=>console.log(d))},ct=async e=>{const o=(await e.getRoomsInfo()).rooms.find(n=>n.isMainRoom);return o==null?void 0:o.participants.find(n=>n.id===e._myUserID)},dt=v.div`
  padding: 30px 23px 0 23px;
  text-align: center;
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    max-width: 80%;
    margin: 20px auto;
  }
`,lt=v.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  button {
    min-width: 130px;
  }
`,ut=({message:e,closeToast:r,userConsentedRef:o})=>{const{t:n}=S();return t.jsxs(dt,{className:"jitsy-message",children:[t.jsx(me.Title,{className:"jitsy-message__title",children:n("ConsultationPage.EmotionConsent")}),t.jsx(P.Text,{size:"16",children:e}),t.jsxs(lt,{children:[t.jsx($.Button,{onClick:()=>[o.current=!0,r()],children:n("ConsultationPage.Yes")}),t.jsx($.Button,{mode:"secondary",onClick:()=>[o.current=!1,r()],children:n("ConsultationPage.No")})]})]})},mt=v(Z.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,ft=.3,pt=({jitsyData:e,term:r,consultationTermId:o,consultationId:n,close:c})=>{const[i,d]=a.useState(!1),{camera:l,getDataUrl:s,hasCameraAccess:m}=ot(),p=a.useRef(!1),u=a.useRef(!1),x=a.useRef(null),{isStudent:j}=J(),{t:_}=S(),g=a.useCallback(()=>{console.log("Video conference joined"),u.current=!0},[]),f=a.useCallback(()=>{console.log("Video conference left"),u.current=!1},[]),w=a.useCallback(async(h,b,D)=>{D.on?(console.log("Recording has started in mode:",D.mode),x.current||(x.current=setInterval(async()=>{const I=await b(),B=await ct(h);B&&(console.log("Saving image..."),I?it(n??0,o,e.data.userInfo.email,I,r,`${B.displayName}.png`):console.error("Failed to get data URL for saving image."))},1e3/ft))):(console.log("Recording has stopped."),x.current&&(clearInterval(x.current),x.current=null),D.error&&console.error("Recording error:",D.error))},[n,o,e.data.userInfo.email,r]),y=a.useCallback(async h=>{window.api=h,await l(),h.addListener("videoConferenceJoined",()=>g()),h.addListener("videoConferenceLeft",()=>f()),h.on("recordingStatusChanged",b=>{s&&p.current?w(h,async()=>await s(),b):console.error("User has not consented to record video or data url is not available.")})},[l,g,f,s,w]),C=()=>{var h;c&&c(),(h=window.api)==null||h.dispose()},T=a.useCallback(()=>{const h=/\/([^/?]+)\?/,b=e.url.match(h);return b?b[1]:e.data.roomName},[e]);return a.useEffect(()=>()=>{x.current&&clearInterval(x.current)},[]),a.useEffect(()=>(setTimeout(()=>{m&&u&&j&&d(!0)},5e3),()=>{}),[m,u,j,_]),t.jsxs(t.Fragment,{children:[e&&t.jsx(rt,{jwt:e.data.jwt,appId:e.data.app_id,roomName:T(),getIFrameRef:h=>{h.style.height="calc(100vh - 76px)",h.style.width="100%"},onApiReady:y,onReadyToClose:C,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1}}}),t.jsx(mt,{onClose:()=>d(!1),visible:i,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(ut,{message:_("ConsultationPage.AdditionalRecording"),closeToast:()=>d(!1),userConsentedRef:p})})]})},gt=({entityId:e,entityModel:r,onSuccesGetQuestionnaires:o,setIsEnded:n})=>{const{questionnaires:c,loading:i,getQuestionnaires:d}=ve({entityId:e||0,entityModel:r}),[l,s]=a.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:m,isTutor:p}=J(),u=a.useMemo(()=>c.filter(g=>g.models.some(f=>f.model_type_title===r?f.model_type_title===F.CONSULTATION?m&&f.target_group==="user"||p&&f.target_group==="author":!0:!1)),[c,m,p,r]),x=a.useCallback(()=>{if(!u)return;const g=u.reduce((f,w)=>{var C;const y=(C=w.models.find(T=>T.model_type_title===r&&T.model_id===e))==null?void 0:C.display_frequency_minutes;return y!=null&&y===0&&f.endMeetingQuestionnaires.push(w),f},{endMeetingQuestionnaires:[]});s(f=>({...f,...g}))},[u,r,e]),j=a.useCallback(()=>{s(f=>({...f,step:f.step+1}));const g=setTimeout(()=>{s(f=>({...f,show:!0}))},500);return()=>clearTimeout(g)},[]),_=a.useCallback(()=>{s(g=>({...g,show:!1})),l.step<l.endMeetingQuestionnaires.length-1?j():(s(g=>({...g,show:!1})),n&&n(!1))},[l,j,n]);return a.useEffect(()=>{d()},[e]),a.useEffect(()=>{x()},[u,x,o]),a.useEffect(()=>{let g;return l.endMeetingQuestionnaires.length&&s(f=>({...f,show:!0})),()=>{clearTimeout(g)}},[u,l.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:l.show&&e&&!!u.length&&!i&&t.jsx(Ee,{entityModel:r,entityId:Number(e),visible:l.show,onClose:_,questionnaire:l.endMeetingQuestionnaires[l.step]})})},xt=({onClose:e})=>{var p,u,x,j,_;const[r,o]=a.useState(null),[n,c]=a.useState(!1),[i,d]=a.useState(!1),{generateConsultationJitsy:l}=a.useContext(Q.EscolaLMSContext),s=a.useContext(ee);a.useEffect(()=>((async()=>{var f,w;if(d(!0),s!=null&&s.consultationData){const y=await l((f=s==null?void 0:s.consultationData)==null?void 0:f.consultationTermId,(w=s==null?void 0:s.consultationData)==null?void 0:w.term);y.success&&o(y.data),d(!1)}})(),()=>{Object.keys(localStorage).forEach(f=>{f.startsWith("questionnaire_")&&localStorage.removeItem(f)})}),[s==null?void 0:s.consultationData]),a.useEffect(()=>{c(!1)},[s==null?void 0:s.consultationData]);const m=a.useCallback(()=>{var g;c(!0),(g=s==null?void 0:s.setModalOpen)==null||g.call(s,!1),e()},[c,e,s]);return t.jsxs(t.Fragment,{children:[t.jsxs(Z.Modal,{onClose:m,visible:s==null?void 0:s.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(We,{children:[i&&t.jsx(Y,{}),!i&&r&&t.jsx(pt,{jitsyData:r,close:m,consultationId:(p=s==null?void 0:s.consultationData)==null?void 0:p.consultationId,consultationTermId:((u=s==null?void 0:s.consultationData)==null?void 0:u.consultationTermId)??0,term:((x=s==null?void 0:s.consultationData)==null?void 0:x.term)??""})]}),t.jsx(we,{entityId:Number((j=s==null?void 0:s.consultationData)==null?void 0:j.consultationId),entityModel:F.CONSULTATION})]}),n&&t.jsx(gt,{entityId:Number((_=s==null?void 0:s.consultationData)==null?void 0:_.consultationId),entityModel:F.CONSULTATION,setIsEnded:c})]})};var L=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(L||{});const Lt=()=>{const{t:e}=S(),{isTutor:r}=J(),o=a.useContext(ee),n=a.useMemo(()=>({tabs:r?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(W,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(W,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx(k,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx(k,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(k,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(k,{type:"is_ended"})}],defaultActiveKey:1}),[r,e]);return t.jsx(fe,{children:t.jsx(ge,{children:t.jsxs(pe,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(xe.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})}),t.jsx(xt,{onClose:()=>[o==null?void 0:o.setModalOpen(!1)]})]})})})};export{L as ConsultationStatus,Lt as default};

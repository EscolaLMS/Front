import{r as i,i as K,h as A,ar as B,j as t,V as P,y as N,o as X,q as T,L as ne,ax as ae,X as oe,N as Q,aP as $,aQ as Y,aR as Z,aS as z,aT as G,aw as ie,al as ce,aU as de,g as le,z as O,aV as ue,aW as fe,T as me,F as ee,aX as te,a0 as pe,v as ge,C as he}from"./index-vFA023FS.js";import{a as xe,T as Ce}from"./index-5w42VceT.js";import{C as se,a as je}from"./CourseCard-BhuxnNht.js";import{P as ye,C as _e,D as R,a as k,b as we}from"./index-Byv8GEiT.js";import{u as q,R as Ee}from"./useRoles-BSUhOggI.js";import{Q as F}from"./questionnaire-CXWDgbJ4.js";import{u as Te,Q as be}from"./index-BoAbte4Y.js";import"./questionnaires-Dj7PdDZO.js";import"./useDownloadCertificate-BhL_db1-.js";import"./base-7gvCcPfx.js";import"./index-yDEBKeAd.js";import"./swiper-qUasc2QR.js";import"./swiper-react-BqEff7Ip.js";import"./a11y-DRdgbXzW.js";import"./index-CcZ_Pb-K.js";import"./floating-ui.react-dom-DEbq0g6h.js";import"./index-DlabVCDl.js";const ve=({type:e})=>{var g;const{userConsultations:s,fetchUserConsultations:o,token:r}=i.useContext(K.EscolaLMSContext),{t:l}=A(),[c,p]=i.useState([]),u=i.useMemo(()=>{var C;const a=((C=s.list)==null?void 0:C.data.filter(h=>e===M.STARTED||e===M.UPCOMING?h.in_coming||h.is_started:h.is_ended))||[];return Array.from(new Map(a.map(h=>[h.id,h])).values())},[e,(g=s.list)==null?void 0:g.data]),n=i.useCallback(async(a,f)=>{try{const h=await(await fetch(`${B}/api/consultations/me?ids[]=${a}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(d=>(d==null?void 0:d.consultation_term_id)===f);p(d=>{const y=d.findIndex(j=>(j==null?void 0:j.consultation_term_id)===f);return y!==-1&&x!==-1&&(d[y]=h.data[x]),[...d]})}}catch(C){console.error(C)}},[r]),m=i.useCallback(()=>{c.forEach(a=>{!a.is_started&&!a.is_ended&&(a==null?void 0:a.consultation_term_id)!==void 0&&n(a==null?void 0:a.id,a==null?void 0:a.consultation_term_id)})},[c,n]);return i.useEffect(()=>{o()},[e,o]),i.useEffect(()=>{p([]),p(u);const a=setInterval(()=>{m()},3e4);return()=>{p([]),clearInterval(a)}},[e,u,m]),t.jsx(ye,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:s.loading?Array.from({length:8}).map((a,f)=>t.jsx(P.Col,{md:3,children:t.jsx(se,{})},`skeleton-card-${f}`)):c.length===0?t.jsx(N.Text,{style:{paddingLeft:X?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:c.map(a=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(_e,{consultation:a})},a.id))})})})},L=i.memo(ve),Ie=T.div`
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
`,Ae=({product:e})=>{var s;return e?t.jsx(ne,{to:`/consultations/${e==null?void 0:e.consultation_term_id}`,children:e!=null&&e.consultation_media&&((s=e==null?void 0:e.consultation_media)!=null&&s.image_path)?t.jsx(ae,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(je,{})}):null},Se=T.div`
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
`;var E=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(E||{});const S=({status:e,name:s})=>{const o=oe(),r=i.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,e]);return t.jsxs(Se,{children:[t.jsx("div",{className:"status",style:{backgroundColor:r}}),t.jsx("div",{className:"name",children:s})]})},De=T.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,Pe=T.div`
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
`,Ne={reported:{type:E.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:E.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:E.ENDED,info:"ConsultationStatus.RejectedInfo"}},Re=({consultation:e})=>{const{approveConsultationTerm:s,rejectConsultationTerm:o}=i.useContext(Q.EscolaLMSContext),{t:r}=A(),l=c=>{switch(c){case"reported":return t.jsx(S,{status:E.WAITING,name:r("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(S,{status:E.ACCEPTED,name:r("ConsultationStatus.Appointment")});case"reject":return t.jsx(S,{status:E.ENDED,name:r("ConsultationStatus.Canceled")})}};return t.jsx(De,{children:e.users.map(c=>t.jsxs("div",{children:[t.jsxs(N.Text,{className:"text",children:[c.first_name," ",c.last_name]}),t.jsx(N.Text,{className:"text",children:c.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Ne[c.executed_status]&&l(c.executed_status),t.jsxs(Pe,{children:[t.jsx($,{icon:t.jsx(Y,{}),text:r("Confirm"),onClick:()=>s(e==null?void 0:e.consultation_term_id,e.date,c.id)}),t.jsx($,{icon:t.jsx(Z,{}),text:r("Cancel"),onClick:()=>o(e==null?void 0:e.consultation_term_id,e.date,c.id)})]})]}),t.jsx("hr",{})]},c.id))})},ke=T.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Me=({consultation:e})=>{const{t:s}=A(),o=e.is_ended,r=e.is_started,l=e.status==="reported",c=e.status==="approved",p=e.status==="not_reported",u=e.status==="reject";return t.jsxs(t.Fragment,{children:[o&&e.date&&t.jsx(R,{type:k.ENDED,date:z(e.date,G(`${e.duration}`))}),u&&t.jsx(R,{type:k.ENDED,date:z(e.date,G(`${e.duration}`))}),l&&!o&&t.jsx(R,{type:k.WAITING,date:e.date,info:s("ConsultationStatus.UnconfirmedInfo")}),c&&!o&&t.jsx(R,{type:k.ACCEPTED,date:e.date,info:r&&(e!=null&&e.consultation_term_id)?t.jsx(ke,{children:t.jsx(we,{consultationTermId:e==null?void 0:e.consultation_term_id,consultationId:e==null?void 0:e.consultation_id,term:e.date})}):s("ConsultationStatus.AppointmentInfo",{date:ie(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),p&&t.jsx(R,{type:k.DEFAULT})]})},Le=T.div`
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
`,Ue=({time:e})=>t.jsxs(Le,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(ce,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(N.Text,{className:"time",children:e})]}),$e=T.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,Oe=({consultation:e})=>t.jsxs($e,{children:[t.jsx(Re,{consultation:e}),t.jsx(Ue,{time:e.duration}),t.jsx(Me,{consultation:e})]});var Fe=de();const Be=le(Fe),Qe=({consultation:e})=>{const{approveConsultationTerm:s,rejectConsultationTerm:o}=i.useContext(Q.EscolaLMSContext),{t:r}=A(),l=i.useMemo(()=>[{id:1,content:t.jsx($,{icon:t.jsx(Y,{}),text:r("Confirm"),onClick:()=>s(e==null?void 0:e.consultation_term_id,e.date)})},{id:2,content:t.jsx($,{icon:t.jsx(Z,{}),text:r("Cancel"),onClick:()=>o(e==null?void 0:e.consultation_term_id,e.date)})}],[s,e==null?void 0:e.consultation_term_id,o,r,e.date]);return t.jsx(Be,{menuItems:l,child:t.jsx(O.Button,{mode:"icon",children:t.jsx(ue,{})})})},qe=T.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,Je=({consultation:e})=>{const{status:s,is_ended:o}=e,{t:r}=A(),l=s==="reported",c=s==="approved";return s==="reject"?t.jsx(S,{status:E.CANCELED,name:r("ConsultationStatus.Canceled")}):o?t.jsx(S,{status:E.ENDED,name:r("ConsultationStatus.Ended")}):l?t.jsxs(qe,{children:[t.jsx(S,{status:E.WAITING,name:r("ConsultationStatus.Unconfirmed")}),t.jsx(Qe,{consultation:e})]}):c?t.jsx(S,{status:E.ACCEPTED,name:r("ConsultationStatus.Appointment")}):t.jsx(S,{status:E.DEFAULT,name:s})},ze=e=>{var o;const{consultation:s}=e;return t.jsx(Ie,{children:t.jsx(fe,{id:s==null?void 0:s.consultation_term_id,image:t.jsx(Ae,{product:s}),title:t.jsx(Je,{consultation:s}),subtitle:t.jsx("p",{children:(o=s==null?void 0:s.related_product)==null?void 0:o.name}),footer:t.jsx(Oe,{consultation:s})})})},Ge=({type:e})=>{var g;const{tutorConsultations:s,fetchTutorConsultations:o,token:r}=i.useContext(K.EscolaLMSContext),{t:l}=A(),[c,p]=i.useState([]),u=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(f=>e===M.STARTED||e===M.UPCOMING?f.in_coming||f.is_started:f.is_ended))||[]},[e,(g=s.list)==null?void 0:g.data]),n=i.useCallback(async(a,f)=>{try{const h=await(await fetch(`${B}/api/consultations/my-schedule?ids[]=${a}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(d=>(d==null?void 0:d.consultation_term_id)===f);p(d=>{const y=d.findIndex(j=>(j==null?void 0:j.consultation_term_id)===f);return y!==-1&&x!==-1&&(d[y]=h.data[x]),[...d]})}}catch(C){console.error(C)}},[r]),m=i.useCallback(()=>{c.forEach(a=>{!a.is_started&&!a.is_ended&&n(a==null?void 0:a.consultation_id,a.consultation_term_id)})},[c,n]);return i.useEffect(()=>{o()},[o]),i.useEffect(()=>{p([]),p(u);const a=setInterval(()=>{m()},3e4);return()=>{p([]),clearInterval(a)}},[e,u,m]),t.jsx(t.Fragment,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:s.loading?Array.from({length:8}).map((a,f)=>t.jsx(P.Col,{md:3,children:t.jsx(se,{})},`skeleton-card-${f}`)):c.length===0?t.jsx(N.Text,{style:{paddingLeft:X?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",c.map(a=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(ze,{consultation:a})},a.consultation_term_id))]})})})},W=i.memo(Ge),We=T.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,re="meet.jit.si",Ve="stage.8x8.vc",He="8x8.vc";var Ke=function(e,s,o,r){function l(c){return c instanceof o?c:new o(function(p){p(c)})}return new(o||(o=Promise))(function(c,p){function u(g){try{m(r.next(g))}catch(a){p(a)}}function n(g){try{m(r.throw(g))}catch(a){p(a)}}function m(g){g.done?c(g.value):l(g.value).then(u,n)}m((r=r.apply(e,s||[])).next())})};const Xe=(e,s,o)=>Ke(void 0,void 0,void 0,function*(){return new Promise((r,l)=>{if(window.JitsiMeetExternalAPI)return r(window.JitsiMeetExternalAPI);const c=document.createElement("script"),p=s?`?release=${s}`:"",u=o?`${o}/`:"";c.async=!0,c.src=`https://${e}/${u}external_api.js${p}`,c.onload=()=>r(window.JitsiMeetExternalAPI),c.onerror=()=>l(new Error(`Script load error: ${c.src}`)),document.head.appendChild(c)})});let U;const Ye=(e=re,s,o)=>U||(U=Xe(e,s,o),U),Ze=(e,s)=>s?`${s}/${e}`:e,et=e=>{const s=e.split("/");if(!(s.length<=1))return s[0]},tt=e=>e?Ve:He;let st=0;const V=e=>`${e}-${st++}`,rt=({domain:e=re,roomName:s,configOverwrite:o,interfaceConfigOverwrite:r,jwt:l,invitees:c,devices:p,userInfo:u,release:n,lang:m,spinner:g,onApiReady:a,onReadyToClose:f,getIFrameRef:C})=>{const[h,x]=i.useState(!0),[d,y]=i.useState(!1),j=i.useRef(),w=i.useRef(),b=i.useRef(null),_=i.useMemo(()=>V("jitsiMeeting"),[V]);i.useEffect(()=>{Ye(e,n,et(s)).then(v=>{j.current=v,y(!0)}).catch(v=>console.error(v.message))},[]);const I=i.useCallback(v=>{w.current=new v(e,{roomName:s,configOverwrite:o,interfaceConfigOverwrite:r,jwt:l,invitees:c,devices:p,userInfo:u,release:n,lang:m,parentNode:b.current}),x(!1),w.current&&(typeof a=="function"&&a(w.current),w.current.on("readyToClose",()=>{typeof f=="function"&&f()}),b.current&&typeof C=="function"&&C(b.current))},[w,b,a,f,C,e,s,o,r,l,c,p,u,n,m]);i.useEffect(()=>{d&&!w.current&&j.current&&I(j.current)},[d,I]);const D=i.useCallback(()=>!g||!h||w.current?null:t.jsx(g,{},void 0),[g,w.current]);return t.jsxs(t.Fragment,{children:[D(),t.jsx("div",{id:_,ref:b},_)]},void 0)};var nt=function(e,s){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)s.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(o[r[l]]=e[r[l]]);return o};const at=e=>{var{appId:s,roomName:o,useStaging:r,release:l}=e,c=nt(e,["appId","roomName","useStaging","release"]);return t.jsx(rt,Object.assign({domain:tt(r),roomName:Ze(o,s),release:l},c),void 0)},ot=()=>{const[e,s]=i.useState(!1),o=i.useRef(null),r=i.useRef(null),l=i.useCallback(async()=>{try{const n=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720}},audio:!1});return s(!0),o.current=n,r.current||(r.current=document.createElement("video"),r.current.muted=!0,r.current.playsInline=!0),r.current.srcObject=n,r.current.play(),r.current}catch(n){return console.error("Camera access denied or not available:",n),s(!1),null}},[]),c=i.useCallback(async()=>(o.current&&o.current.getTracks().forEach(n=>n.stop()),await l()),[l]),p=async()=>await l(),u=async()=>{if(r.current&&o.current){const n=document.createElement("canvas"),m=n.getContext("2d"),a=o.current.getVideoTracks()[0].getSettings();n.height=a.height||0,n.width=a.width||0,m==null||m.drawImage(r.current,0,0);const f=n.toDataURL("image/webp",1);return m==null||m.clearRect(0,0,n.width,n.height),n.remove(),f}return null};return i.useEffect(()=>{(async()=>{const m=await navigator.permissions.query({name:"camera"});m.state==="granted"&&await c(),m.onchange=async()=>{m.state==="granted"?await c():s(!1)}})()},[c]),{camera:p,hasCameraAccess:e,restartVideoTrack:c,getDataUrl:u}},it=async(e,s,o,r,l,c)=>{const p=l.map(u=>({filename:`${u.timestamp}.webp`}));try{const u=await fetch(`${B}/api/consultations/signed-screen-urls`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({consultation_id:e,user_termin_id:s,user_id:r,user_email:o,files:p,executed_at:c})});if(!u.ok)throw new Error(`Failed to sign URLs: ${u.statusText}`);const n=await u.json();for(let m=0;m<n.data.length;m++){const{url:g,filename:a}=n.data[m],f=l.find(C=>`${C.timestamp}.webp`===a);if(!f){console.warn(`Screenshot not found for filename: ${a}`);continue}try{const C=f.dataURL.split(",")[1],h=atob(C),x=new Uint8Array(h.length);for(let j=0;j<h.length;j++)x[j]=h.charCodeAt(j);const d=new Blob([x]),y=await fetch(g,{method:"PUT",body:d});y.ok?console.log(`File ${a} uploaded successfully.`):console.error(`Failed to upload ${a}: ${y.statusText}`)}catch(C){console.error(`Error uploading ${a}:`,C)}}}catch(u){console.error("Error saving screenshots and timestamps:",u)}},ct=async e=>{const o=(await e.getRoomsInfo()).rooms.find(r=>r.isMainRoom);return o==null?void 0:o.participants.find(r=>r.id===e._myUserID)},dt=T.div`
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
`,lt=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  button {
    min-width: 130px;
  }
`,ut=({message:e,closeToast:s,userConsentedRef:o})=>{const{t:r}=A();return t.jsxs(dt,{className:"jitsy-message",children:[t.jsx(me.Title,{className:"jitsy-message__title",children:r("ConsultationPage.EmotionConsent")}),t.jsx(N.Text,{size:"16",children:e}),t.jsxs(lt,{children:[t.jsx(O.Button,{onClick:()=>[o.current=!0,s()],children:r("ConsultationPage.Yes")}),t.jsx(O.Button,{mode:"secondary",onClick:()=>[o.current=!1,s()],children:r("ConsultationPage.No")})]})]})},ft=T(ee.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,H=3,mt=3e3,pt=({jitsyData:e,term:s,consultationTermId:o,consultationId:r,close:l})=>{const[c,p]=i.useState(!1),{camera:u,getDataUrl:n,hasCameraAccess:m}=ot(),g=i.useRef(!1),a=i.useRef(!1),f=i.useRef(null),{isStudent:C}=q(),{t:h}=A(),x=i.useCallback(()=>{console.log("Video conference joined"),a.current=!0},[]),d=i.useCallback(()=>{console.log("Video conference left"),a.current=!1},[]),y=i.useCallback(async(_,I,D)=>{if(D.on){console.log("Recording has started in mode:",D.mode);let v=[];f.current||(f.current=setInterval(async()=>{const J=await I();J?(v.push({dataURL:J,timestamp:new Date().getTime()}),v.length===H*(mt/1e3)&&(await ct(_)?(console.log("Saving images..."),it(r??0,o,e.data.userInfo.email,e.data.userInfo.id,v,s),v=[]):console.error("Failed to get current user for saving images."))):console.error("Failed to get data URL for screenshot.")},1e3/H))}else console.log("Recording has stopped."),f.current&&(clearInterval(f.current),f.current=null),D.error&&console.error("Recording error:",D.error)},[r,o,e.data.userInfo.email,e.data.userInfo.id,s]),j=i.useCallback(async _=>{window.api=_,await u(),_.addListener("videoConferenceJoined",()=>x()),_.addListener("videoConferenceLeft",()=>d()),_.on("recordingStatusChanged",I=>{g.current&&y(_,async()=>await n(),I)})},[u,x,d,n,y,g]),w=()=>{var _;l&&l(),(_=window.api)==null||_.dispose()},b=i.useCallback(()=>{const _=/\/([^/?]+)\?/,I=e.url.match(_);return I?I[1]:e.data.roomName},[e]);return i.useEffect(()=>()=>{f.current&&clearInterval(f.current)},[]),i.useEffect(()=>(m&&a&&C&&p(!0),()=>{}),[m,a,C,h]),t.jsxs(t.Fragment,{children:[e&&!c&&t.jsx(at,{jwt:e.data.jwt,appId:e.data.app_id,roomName:b(),getIFrameRef:_=>{_.style.height="calc(100vh - 76px)",_.style.width="100%"},onApiReady:j,onReadyToClose:w,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1}}}),t.jsx(ft,{onClose:()=>p(!1),visible:c,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(ut,{message:h("ConsultationPage.AdditionalRecording"),closeToast:()=>p(!1),userConsentedRef:g})})]})},gt=({entityId:e,entityModel:s,onSuccesGetQuestionnaires:o,setIsEnded:r})=>{const{questionnaires:l,loading:c,getQuestionnaires:p}=Te({entityId:e||0,entityModel:s}),[u,n]=i.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:m,isTutor:g}=q(),a=i.useMemo(()=>l.filter(x=>x.models.some(d=>d.model_type_title===s?d.model_type_title===F.CONSULTATION?m&&d.target_group==="user"||g&&d.target_group==="author":!0:!1)),[l,m,g,s]),f=i.useCallback(()=>{if(!a)return;const x=a.reduce((d,y)=>{var w;const j=(w=y.models.find(b=>b.model_type_title===s&&b.model_id===e))==null?void 0:w.display_frequency_minutes;return j!=null&&j===0&&d.endMeetingQuestionnaires.push(y),d},{endMeetingQuestionnaires:[]});n(d=>({...d,...x}))},[a,s,e]),C=i.useCallback(()=>{n(d=>({...d,step:d.step+1}));const x=setTimeout(()=>{n(d=>({...d,show:!0}))},500);return()=>clearTimeout(x)},[]),h=i.useCallback(()=>{n(x=>({...x,show:!1})),u.step<u.endMeetingQuestionnaires.length-1?C():(n(x=>({...x,show:!1})),r&&r(!1))},[u,C,r]);return i.useEffect(()=>{p()},[e]),i.useEffect(()=>{f()},[a,f,o]),i.useEffect(()=>{let x;return u.endMeetingQuestionnaires.length&&n(d=>({...d,show:!0})),()=>{clearTimeout(x)}},[a,u.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:u.show&&e&&!!a.length&&!c&&t.jsx(Ee,{entityModel:s,entityId:Number(e),visible:u.show,onClose:h,questionnaire:u.endMeetingQuestionnaires[u.step]})})},ht=({onClose:e})=>{var g,a,f,C,h;const[s,o]=i.useState(null),[r,l]=i.useState(!1),[c,p]=i.useState(!1),{generateConsultationJitsy:u}=i.useContext(Q.EscolaLMSContext),n=i.useContext(te);i.useEffect(()=>((async()=>{var d,y;if(p(!0),n!=null&&n.consultationData){const j=await u((d=n==null?void 0:n.consultationData)==null?void 0:d.consultationTermId,(y=n==null?void 0:n.consultationData)==null?void 0:y.term);j.success&&o(j.data),p(!1)}})(),()=>{Object.keys(localStorage).forEach(d=>{d.startsWith("questionnaire_")&&localStorage.removeItem(d)})}),[n==null?void 0:n.consultationData]),i.useEffect(()=>{l(!1)},[n==null?void 0:n.consultationData]);const m=i.useCallback(()=>{var x;l(!0),(x=n==null?void 0:n.setModalOpen)==null||x.call(n,!1),e()},[l,e,n]);return t.jsxs(t.Fragment,{children:[t.jsxs(ee.Modal,{onClose:m,visible:n==null?void 0:n.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(We,{children:[c&&t.jsx(pe,{}),!c&&s&&t.jsx(pt,{jitsyData:s,close:m,consultationId:(g=n==null?void 0:n.consultationData)==null?void 0:g.consultationId,consultationTermId:((a=n==null?void 0:n.consultationData)==null?void 0:a.consultationTermId)??0,term:((f=n==null?void 0:n.consultationData)==null?void 0:f.term)??""})]}),t.jsx(be,{entityId:Number((C=n==null?void 0:n.consultationData)==null?void 0:C.consultationId),entityModel:F.CONSULTATION})]}),r&&t.jsx(gt,{entityId:Number((h=n==null?void 0:n.consultationData)==null?void 0:h.consultationId),entityModel:F.CONSULTATION,setIsEnded:l})]})};var M=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(M||{});const Mt=()=>{const{t:e}=A(),{isTutor:s}=q(),o=i.useContext(te),r=i.useMemo(()=>({tabs:s?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(W,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(W,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx(L,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx(L,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(L,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(L,{type:"is_ended"})}],defaultActiveKey:1}),[s,e]);return t.jsx(ge,{children:t.jsx(xe,{children:t.jsxs(he,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(Ce.Tabs,{tabs:r.tabs,defaultActiveKey:r.defaultActiveKey})}),t.jsx(ht,{onClose:()=>[o==null?void 0:o.setModalOpen(!1)]})]})})})};export{M as ConsultationStatus,Mt as default};
//# sourceMappingURL=my-consultations-BSg_uDaj.js.map

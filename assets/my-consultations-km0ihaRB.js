import{r as i,i as X,h as S,ar as Q,j as t,V as P,y as N,o as Y,q as v,L as ae,ax as oe,X as ie,N as q,aP as U,aQ as Z,aR as ee,aS as G,aT as W,aw as ce,al as de,aU as le,g as ue,z as O,aV as me,aW as fe,T as pe,F as te,aX as se,a0 as ge,v as he,C as xe}from"./index-CfziJAoE.js";import{a as Ce,T as je}from"./index-DlXonrt3.js";import{C as re,a as ye}from"./CourseCard-DqzZYK-2.js";import{P as _e,C as Ee,D as R,a as $,b as we}from"./index-DJ2rJTGA.js";import{u as B,R as ve}from"./useRoles-MDBPe49G.js";import{Q as F}from"./questionnaire-CXWDgbJ4.js";import{u as Te,Q as Ie}from"./index-C5RfZHqu.js";import"./questionnaires-G0amxKbJ.js";import"./useDownloadCertificate-C9dTKx7W.js";import"./base-7gvCcPfx.js";import"./index-DaJXa73r.js";import"./swiper-BUwBRgXx.js";import"./swiper-react-Cy9-RP1Q.js";import"./a11y-m8EKkMlX.js";import"./index-6Uncm27N.js";import"./floating-ui.react-dom-DJ2aRl0a.js";import"./index-DXjCpR9z.js";const be=({type:e})=>{var g;const{userConsultations:s,fetchUserConsultations:a,token:r}=i.useContext(X.EscolaLMSContext),{t:d}=S(),[c,u]=i.useState([]),p=i.useMemo(()=>{var C;const o=((C=s.list)==null?void 0:C.data.filter(h=>e===M.STARTED||e===M.UPCOMING?h.in_coming||h.is_started:h.is_ended))||[];return Array.from(new Map(o.map(h=>[h.id,h])).values())},[e,(g=s.list)==null?void 0:g.data]),n=i.useCallback(async(o,f)=>{try{const h=await(await fetch(`${Q}/api/consultations/me?ids[]=${o}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(l=>(l==null?void 0:l.consultation_term_id)===f);u(l=>{const _=l.findIndex(j=>(j==null?void 0:j.consultation_term_id)===f);return _!==-1&&x!==-1&&(l[_]=h.data[x]),[...l]})}}catch(C){console.error(C)}},[r]),m=i.useCallback(()=>{c.forEach(o=>{!o.is_started&&!o.is_ended&&(o==null?void 0:o.consultation_term_id)!==void 0&&n(o==null?void 0:o.id,o==null?void 0:o.consultation_term_id)})},[c,n]);return i.useEffect(()=>{a()},[e,a]),i.useEffect(()=>{u([]),u(p);const o=setInterval(()=>{m()},3e4);return()=>{u([]),clearInterval(o)}},[e,p,m]),t.jsx(_e,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:s.loading?Array.from({length:8}).map((o,f)=>t.jsx(P.Col,{md:3,children:t.jsx(re,{})},`skeleton-card-${f}`)):c.length===0?t.jsx(N.Text,{style:{paddingLeft:Y?20:40},children:d("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:c.map(o=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(Ee,{consultation:o})},o.id))})})})},k=i.memo(be),Se=v.div`
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
`,Ae=({product:e})=>e?t.jsx(ae,{to:`/consultations/${e==null?void 0:e.consultation_term_id}`,children:e.consultation_media?t.jsx(oe,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(ye,{})}):null,De=v.div`
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
`;var w=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(w||{});const A=({status:e,name:s})=>{const a=ie(),r=i.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return a.primaryColor}},[a.primaryColor,e]);return t.jsxs(De,{children:[t.jsx("div",{className:"status",style:{backgroundColor:r}}),t.jsx("div",{className:"name",children:s})]})},Pe=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,Ne=v.div`
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
`,Re={reported:{type:w.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:w.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:w.ENDED,info:"ConsultationStatus.RejectedInfo"}},$e=({consultation:e})=>{const{approveConsultationTerm:s,rejectConsultationTerm:a}=i.useContext(q.EscolaLMSContext),{t:r}=S(),d=c=>{switch(c){case"reported":return t.jsx(A,{status:w.WAITING,name:r("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(A,{status:w.ACCEPTED,name:r("ConsultationStatus.Appointment")});case"reject":return t.jsx(A,{status:w.ENDED,name:r("ConsultationStatus.Canceled")})}};return t.jsx(Pe,{children:e.users.map(c=>t.jsxs("div",{children:[t.jsxs(N.Text,{className:"text",children:[c.first_name," ",c.last_name]}),t.jsx(N.Text,{className:"text",children:c.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Re[c.executed_status]&&d(c.executed_status),t.jsxs(Ne,{children:[t.jsx(U,{icon:t.jsx(Z,{}),text:r("Confirm"),onClick:()=>s(e==null?void 0:e.consultation_term_id,e.date,c.id)}),t.jsx(U,{icon:t.jsx(ee,{}),text:r("Cancel"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date,c.id)})]})]}),t.jsx("hr",{})]},c.id))})},Me=v.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,ke=({consultation:e})=>{const{t:s}=S(),a=e.is_ended,r=e.is_started,d=e.status==="reported",c=e.status==="approved",u=e.status==="not_reported",p=e.status==="reject";return t.jsxs(t.Fragment,{children:[a&&e.date&&t.jsx(R,{type:$.ENDED,date:G(e.date,W(`${e.duration}`))}),p&&t.jsx(R,{type:$.ENDED,date:G(e.date,W(`${e.duration}`))}),d&&!a&&t.jsx(R,{type:$.WAITING,date:e.date,info:s("ConsultationStatus.UnconfirmedInfo")}),c&&!a&&t.jsx(R,{type:$.ACCEPTED,date:e.date,info:r&&(e!=null&&e.consultation_term_id)?t.jsx(Me,{children:t.jsx(we,{consultationTermId:e==null?void 0:e.consultation_term_id,consultationId:e==null?void 0:e.consultation_id,term:e.date})}):s("ConsultationStatus.AppointmentInfo",{date:ce(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),u&&t.jsx(R,{type:$.DEFAULT})]})},Le=v.div`
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
`,Ue=({time:e})=>t.jsxs(Le,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(de,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(N.Text,{className:"time",children:e})]}),Oe=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,Fe=({consultation:e})=>t.jsxs(Oe,{children:[t.jsx($e,{consultation:e}),t.jsx(Ue,{time:e.duration}),t.jsx(ke,{consultation:e})]});var Qe=le();const qe=ue(Qe),Be=({consultation:e})=>{const{approveConsultationTerm:s,rejectConsultationTerm:a}=i.useContext(q.EscolaLMSContext),{t:r}=S(),d=i.useMemo(()=>[{id:1,content:t.jsx(U,{icon:t.jsx(Z,{}),text:r("Confirm"),onClick:()=>s(e==null?void 0:e.consultation_term_id,e.date)})},{id:2,content:t.jsx(U,{icon:t.jsx(ee,{}),text:r("Cancel"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date)})}],[s,e==null?void 0:e.consultation_term_id,a,r,e.date]);return t.jsx(qe,{menuItems:d,child:t.jsx(O.Button,{mode:"icon",children:t.jsx(me,{})})})},Je=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,ze=({consultation:e})=>{const{status:s,is_ended:a}=e,{t:r}=S(),d=s==="reported",c=s==="approved";return s==="reject"?t.jsx(A,{status:w.CANCELED,name:r("ConsultationStatus.Canceled")}):a?t.jsx(A,{status:w.ENDED,name:r("ConsultationStatus.Ended")}):d?t.jsxs(Je,{children:[t.jsx(A,{status:w.WAITING,name:r("ConsultationStatus.Unconfirmed")}),t.jsx(Be,{consultation:e})]}):c?t.jsx(A,{status:w.ACCEPTED,name:r("ConsultationStatus.Appointment")}):t.jsx(A,{status:w.DEFAULT,name:s})},Ge=e=>{var a;const{consultation:s}=e;return t.jsx(Se,{children:t.jsx(fe,{id:s==null?void 0:s.consultation_term_id,image:t.jsx(Ae,{product:s}),title:t.jsx(ze,{consultation:s}),subtitle:t.jsx("p",{children:(a=s==null?void 0:s.related_product)==null?void 0:a.name}),footer:t.jsx(Fe,{consultation:s})})})},We=({type:e})=>{var g;const{tutorConsultations:s,fetchTutorConsultations:a,token:r}=i.useContext(X.EscolaLMSContext),{t:d}=S(),[c,u]=i.useState([]),p=i.useMemo(()=>{var o;return((o=s.list)==null?void 0:o.data.filter(f=>e===M.STARTED||e===M.UPCOMING?f.in_coming||f.is_started:f.is_ended))||[]},[e,(g=s.list)==null?void 0:g.data]),n=i.useCallback(async(o,f)=>{try{const h=await(await fetch(`${Q}/api/consultations/my-schedule?ids[]=${o}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(l=>(l==null?void 0:l.consultation_term_id)===f);u(l=>{const _=l.findIndex(j=>(j==null?void 0:j.consultation_term_id)===f);return _!==-1&&x!==-1&&(l[_]=h.data[x]),[...l]})}}catch(C){console.error(C)}},[r]),m=i.useCallback(()=>{c.forEach(o=>{!o.is_started&&!o.is_ended&&n(o==null?void 0:o.consultation_id,o.consultation_term_id)})},[c,n]);return i.useEffect(()=>{a()},[a]),i.useEffect(()=>{u([]),u(p);const o=setInterval(()=>{m()},3e4);return()=>{u([]),clearInterval(o)}},[e,p,m]),t.jsx(t.Fragment,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:s.loading?Array.from({length:8}).map((o,f)=>t.jsx(P.Col,{md:3,children:t.jsx(re,{})},`skeleton-card-${f}`)):c.length===0?t.jsx(N.Text,{style:{paddingLeft:Y?20:40},children:d("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",c.map(o=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(Ge,{consultation:o})},o.consultation_term_id))]})})})},V=i.memo(We),Ve=v.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,ne="meet.jit.si",He="stage.8x8.vc",Ke="8x8.vc";var Xe=function(e,s,a,r){function d(c){return c instanceof a?c:new a(function(u){u(c)})}return new(a||(a=Promise))(function(c,u){function p(g){try{m(r.next(g))}catch(o){u(o)}}function n(g){try{m(r.throw(g))}catch(o){u(o)}}function m(g){g.done?c(g.value):d(g.value).then(p,n)}m((r=r.apply(e,s||[])).next())})};const Ye=(e,s,a)=>Xe(void 0,void 0,void 0,function*(){return new Promise((r,d)=>{if(window.JitsiMeetExternalAPI)return r(window.JitsiMeetExternalAPI);const c=document.createElement("script"),u=s?`?release=${s}`:"",p=a?`${a}/`:"";c.async=!0,c.src=`https://${e}/${p}external_api.js${u}`,c.onload=()=>r(window.JitsiMeetExternalAPI),c.onerror=()=>d(new Error(`Script load error: ${c.src}`)),document.head.appendChild(c)})});let L;const Ze=(e=ne,s,a)=>L||(L=Ye(e,s,a),L),et=(e,s)=>s?`${s}/${e}`:e,tt=e=>{const s=e.split("/");if(!(s.length<=1))return s[0]},st=e=>e?He:Ke;let rt=0;const H=e=>`${e}-${rt++}`,nt=({domain:e=ne,roomName:s,configOverwrite:a,interfaceConfigOverwrite:r,jwt:d,invitees:c,devices:u,userInfo:p,release:n,lang:m,spinner:g,onApiReady:o,onReadyToClose:f,getIFrameRef:C})=>{const[h,x]=i.useState(!0),[l,_]=i.useState(!1),j=i.useRef(),E=i.useRef(),T=i.useRef(null),y=i.useMemo(()=>H("jitsiMeeting"),[H]);i.useEffect(()=>{Ze(e,n,tt(s)).then(I=>{j.current=I,_(!0)}).catch(I=>console.error(I.message))},[]);const b=i.useCallback(I=>{E.current=new I(e,{roomName:s,configOverwrite:a,interfaceConfigOverwrite:r,jwt:d,invitees:c,devices:u,userInfo:p,release:n,lang:m,parentNode:T.current}),x(!1),E.current&&(typeof o=="function"&&o(E.current),E.current.on("readyToClose",()=>{typeof f=="function"&&f()}),T.current&&typeof C=="function"&&C(T.current))},[E,T,o,f,C,e,s,a,r,d,c,u,p,n,m]);i.useEffect(()=>{l&&!E.current&&j.current&&b(j.current)},[l,b]);const D=i.useCallback(()=>!g||!h||E.current?null:t.jsx(g,{},void 0),[g,E.current]);return t.jsxs(t.Fragment,{children:[D(),t.jsx("div",{id:y,ref:T},y)]},void 0)};var at=function(e,s){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,r=Object.getOwnPropertySymbols(e);d<r.length;d++)s.indexOf(r[d])<0&&Object.prototype.propertyIsEnumerable.call(e,r[d])&&(a[r[d]]=e[r[d]]);return a};const ot=e=>{var{appId:s,roomName:a,useStaging:r,release:d}=e,c=at(e,["appId","roomName","useStaging","release"]);return t.jsx(nt,Object.assign({domain:st(r),roomName:et(a,s),release:d},c),void 0)},it=()=>{const[e,s]=i.useState(!1),a=i.useRef(null),r=i.useRef(null),d=i.useCallback(async()=>{try{const n=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});return s(!0),a.current=n,r.current||(r.current=document.createElement("video"),r.current.muted=!0,r.current.playsInline=!0),r.current.srcObject=n,r.current.play(),r.current}catch(n){return console.error("Camera access denied or not available:",n),s(!1),null}},[]),c=i.useCallback(async()=>(a.current&&a.current.getTracks().forEach(n=>n.stop()),await d()),[d]),u=async()=>await d(),p=async()=>{if(r.current&&a.current){const n=document.createElement("canvas"),m=n.getContext("2d"),o=a.current.getVideoTracks()[0].getSettings();n.height=o.height||0,n.width=o.width||0,m==null||m.drawImage(r.current,0,0);const f=n.toDataURL("image/png",1);return m==null||m.clearRect(0,0,n.width,n.height),n.remove(),f}return null};return i.useEffect(()=>{(async()=>{const m=await navigator.permissions.query({name:"camera"});m.state==="granted"&&await c(),m.onchange=async()=>{m.state==="granted"?await c():s(!1)}})()},[c]),{camera:u,hasCameraAccess:e,restartVideoTrack:c,getDataUrl:p}},ct=e=>{const s=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),d=String(e.getHours()).padStart(2,"0"),c=String(e.getMinutes()).padStart(2,"0"),u=String(e.getSeconds()).padStart(2,"0");return`${s}-${a}-${r} ${d}:${c}:${u}`},dt=async(e,s,a,r,d,c="screenshot")=>{const u=new FormData;try{(await Promise.all(r.map(async(m,g)=>{const f=await(await fetch(m.dataURL)).blob();return{file:new File([f],`${c}_${g+1}.png`,{type:"image/png"}),timestamp:m.timestamp}}))).forEach((m,g)=>{const o=`files[${g}]`;u.append(`${o}[file]`,m.file),u.append(`${o}[timestamp]`,ct(new Date(m.timestamp)))}),u.append("consultation_id",e.toString()),u.append("user_termin_id",s.toString()),u.append("user_email",a),u.append("executed_at",d);const n=await fetch(`${Q}/api/consultations/save-screen`,{method:"POST",body:u});if(!n.ok)throw new Error(`Failed to save images: ${n.statusText}`);console.log("Screenshots and timestamps saved successfully.")}catch(p){console.error("Error saving screenshots and timestamps:",p)}},lt=async e=>{const a=(await e.getRoomsInfo()).rooms.find(r=>r.isMainRoom);return a==null?void 0:a.participants.find(r=>r.id===e._myUserID)},ut=v.div`
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
`,mt=v.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  button {
    min-width: 130px;
  }
`,ft=({message:e,closeToast:s,userConsentedRef:a})=>{const{t:r}=S();return t.jsxs(ut,{className:"jitsy-message",children:[t.jsx(pe.Title,{className:"jitsy-message__title",children:r("ConsultationPage.EmotionConsent")}),t.jsx(N.Text,{size:"16",children:e}),t.jsxs(mt,{children:[t.jsx(O.Button,{onClick:()=>[a.current=!0,s()],children:r("ConsultationPage.Yes")}),t.jsx(O.Button,{mode:"secondary",onClick:()=>[a.current=!1,s()],children:r("ConsultationPage.No")})]})]})},pt=v(te.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,K=3,gt=3e3,ht=({jitsyData:e,term:s,consultationTermId:a,consultationId:r,close:d})=>{const[c,u]=i.useState(!1),{camera:p,getDataUrl:n,hasCameraAccess:m}=it(),g=i.useRef(!1),o=i.useRef(!1),f=i.useRef(null),{isStudent:C}=B(),{t:h}=S(),x=i.useCallback(()=>{console.log("Video conference joined"),o.current=!0},[]),l=i.useCallback(()=>{console.log("Video conference left"),o.current=!1},[]),_=i.useCallback(async(y,b,D)=>{if(D.on){console.log("Recording has started in mode:",D.mode);let I=[];f.current||(f.current=setInterval(async()=>{const J=await b();if(J){if(I.push({dataURL:J,timestamp:new Date().toISOString()}),I.length===K*(gt/1e3)){const z=await lt(y);z?(console.log("Saving images..."),dt(r??0,a,e.data.userInfo.email,I,s,`${z.displayName}.png`),I=[]):console.error("Failed to get current user for saving images.")}}else console.error("Failed to get data URL for screenshot.")},1e3/K))}else console.log("Recording has stopped."),f.current&&(clearInterval(f.current),f.current=null),D.error&&console.error("Recording error:",D.error)},[r,a,e.data.userInfo.email,s]),j=i.useCallback(async y=>{window.api=y,await p(),y.addListener("videoConferenceJoined",()=>x()),y.addListener("videoConferenceLeft",()=>l()),y.on("recordingStatusChanged",b=>{g.current&&_(y,async()=>await n(),b)})},[p,x,l,n,_,g]),E=()=>{var y;d&&d(),(y=window.api)==null||y.dispose()},T=i.useCallback(()=>{const y=/\/([^/?]+)\?/,b=e.url.match(y);return b?b[1]:e.data.roomName},[e]);return i.useEffect(()=>()=>{f.current&&clearInterval(f.current)},[]),i.useEffect(()=>(m&&o&&C&&u(!0),()=>{}),[m,o,C,h]),t.jsxs(t.Fragment,{children:[e&&!c&&t.jsx(ot,{jwt:e.data.jwt,appId:e.data.app_id,roomName:T(),getIFrameRef:y=>{y.style.height="calc(100vh - 76px)",y.style.width="100%"},onApiReady:j,onReadyToClose:E,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1}}}),t.jsx(pt,{onClose:()=>u(!1),visible:c,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(ft,{message:h("ConsultationPage.AdditionalRecording"),closeToast:()=>u(!1),userConsentedRef:g})})]})},xt=({entityId:e,entityModel:s,onSuccesGetQuestionnaires:a,setIsEnded:r})=>{const{questionnaires:d,loading:c,getQuestionnaires:u}=Te({entityId:e||0,entityModel:s}),[p,n]=i.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:m,isTutor:g}=B(),o=i.useMemo(()=>d.filter(x=>x.models.some(l=>l.model_type_title===s?l.model_type_title===F.CONSULTATION?m&&l.target_group==="user"||g&&l.target_group==="author":!0:!1)),[d,m,g,s]),f=i.useCallback(()=>{if(!o)return;const x=o.reduce((l,_)=>{var E;const j=(E=_.models.find(T=>T.model_type_title===s&&T.model_id===e))==null?void 0:E.display_frequency_minutes;return j!=null&&j===0&&l.endMeetingQuestionnaires.push(_),l},{endMeetingQuestionnaires:[]});n(l=>({...l,...x}))},[o,s,e]),C=i.useCallback(()=>{n(l=>({...l,step:l.step+1}));const x=setTimeout(()=>{n(l=>({...l,show:!0}))},500);return()=>clearTimeout(x)},[]),h=i.useCallback(()=>{n(x=>({...x,show:!1})),p.step<p.endMeetingQuestionnaires.length-1?C():(n(x=>({...x,show:!1})),r&&r(!1))},[p,C,r]);return i.useEffect(()=>{u()},[e]),i.useEffect(()=>{f()},[o,f,a]),i.useEffect(()=>{let x;return p.endMeetingQuestionnaires.length&&n(l=>({...l,show:!0})),()=>{clearTimeout(x)}},[o,p.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:p.show&&e&&!!o.length&&!c&&t.jsx(ve,{entityModel:s,entityId:Number(e),visible:p.show,onClose:h,questionnaire:p.endMeetingQuestionnaires[p.step]})})},Ct=({onClose:e})=>{var g,o,f,C,h;const[s,a]=i.useState(null),[r,d]=i.useState(!1),[c,u]=i.useState(!1),{generateConsultationJitsy:p}=i.useContext(q.EscolaLMSContext),n=i.useContext(se);i.useEffect(()=>((async()=>{var l,_;if(u(!0),n!=null&&n.consultationData){const j=await p((l=n==null?void 0:n.consultationData)==null?void 0:l.consultationTermId,(_=n==null?void 0:n.consultationData)==null?void 0:_.term);j.success&&a(j.data),u(!1)}})(),()=>{Object.keys(localStorage).forEach(l=>{l.startsWith("questionnaire_")&&localStorage.removeItem(l)})}),[n==null?void 0:n.consultationData]),i.useEffect(()=>{d(!1)},[n==null?void 0:n.consultationData]);const m=i.useCallback(()=>{var x;d(!0),(x=n==null?void 0:n.setModalOpen)==null||x.call(n,!1),e()},[d,e,n]);return t.jsxs(t.Fragment,{children:[t.jsxs(te.Modal,{onClose:m,visible:n==null?void 0:n.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(Ve,{children:[c&&t.jsx(ge,{}),!c&&s&&t.jsx(ht,{jitsyData:s,close:m,consultationId:(g=n==null?void 0:n.consultationData)==null?void 0:g.consultationId,consultationTermId:((o=n==null?void 0:n.consultationData)==null?void 0:o.consultationTermId)??0,term:((f=n==null?void 0:n.consultationData)==null?void 0:f.term)??""})]}),t.jsx(Ie,{entityId:Number((C=n==null?void 0:n.consultationData)==null?void 0:C.consultationId),entityModel:F.CONSULTATION})]}),r&&t.jsx(xt,{entityId:Number((h=n==null?void 0:n.consultationData)==null?void 0:h.consultationId),entityModel:F.CONSULTATION,setIsEnded:d})]})};var M=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(M||{});const kt=()=>{const{t:e}=S(),{isTutor:s}=B(),a=i.useContext(se),r=i.useMemo(()=>({tabs:s?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(V,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(V,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx(k,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx(k,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(k,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(k,{type:"is_ended"})}],defaultActiveKey:1}),[s,e]);return t.jsx(he,{children:t.jsx(Ce,{children:t.jsxs(xe,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(je.Tabs,{tabs:r.tabs,defaultActiveKey:r.defaultActiveKey})}),t.jsx(Ct,{onClose:()=>[a==null?void 0:a.setModalOpen(!1)]})]})})})};export{M as ConsultationStatus,kt as default};

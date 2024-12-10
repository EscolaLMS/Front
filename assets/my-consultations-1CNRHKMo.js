import{r as i,i as H,h as b,ar as Q,j as t,V as P,y as N,o as K,q as w,L as re,ax as ne,X as ae,N as q,aP as U,aQ as X,aR as Y,aS as z,aT as G,aw as oe,al as ie,aU as ce,g as de,z as O,aV as le,aW as ue,T as me,F as Z,aX as ee,a0 as fe,v as pe,C as ge}from"./index-Dd-EmmDK.js";import{a as he,T as xe}from"./index-CRMNxQ6R.js";import{C as te,a as Ce}from"./CourseCard-DXnwbM49.js";import{P as je,C as ye,D as R,a as M,b as _e}from"./index-O54qwMiD.js";import{u as B,R as Ee}from"./useRoles-CmFlr0Qr.js";import{Q as F}from"./questionnaire-CXWDgbJ4.js";import{u as ve,Q as we}from"./index-ohwvoth3.js";import"./questionnaires-BtGO_7w_.js";import"./useDownloadCertificate-B4yhInQC.js";import"./base-7gvCcPfx.js";import"./index-CeMxA2-Q.js";import"./swiper-BjzC48Nf.js";import"./swiper-react-BR3TCB-0.js";import"./a11y-CmlfqFN7.js";import"./index-BcEkxx5F.js";import"./floating-ui.react-dom-DUJR8K0k.js";import"./index-DQEmS1yW.js";const Te=({type:e})=>{var g;const{userConsultations:r,fetchUserConsultations:o,token:s}=i.useContext(H.EscolaLMSContext),{t:d}=b(),[c,u]=i.useState([]),m=i.useMemo(()=>{var C;const a=((C=r.list)==null?void 0:C.data.filter(h=>e===k.STARTED||e===k.UPCOMING?h.in_coming||h.is_started:h.is_ended))||[];return Array.from(new Map(a.map(h=>[h.id,h])).values())},[e,(g=r.list)==null?void 0:g.data]),n=i.useCallback(async(a,f)=>{try{const h=await(await fetch(`${Q}/api/consultations/me?ids[]=${a}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(l=>(l==null?void 0:l.consultation_term_id)===f);u(l=>{const _=l.findIndex(j=>(j==null?void 0:j.consultation_term_id)===f);return _!==-1&&(l[_]=h.data[x]),[...l]})}}catch(C){console.error(C)}},[s]),p=i.useCallback(()=>{c.forEach(a=>{!a.is_started&&!a.is_ended&&(a==null?void 0:a.consultation_term_id)!==void 0&&n(a==null?void 0:a.id,a==null?void 0:a.consultation_term_id)})},[c,n]);return i.useEffect(()=>{o()},[e,o]),i.useEffect(()=>{u([]),u(m);const a=setInterval(()=>{p()},3e4);return()=>{u([]),clearInterval(a)}},[e,m,p]),t.jsx(je,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((a,f)=>t.jsx(P.Col,{md:3,children:t.jsx(te,{})},`skeleton-card-${f}`)):c.length===0?t.jsx(N.Text,{style:{paddingLeft:K?20:40},children:d("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:c.map(a=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(ye,{consultation:a})},a.id))})})})},$=i.memo(Te),Ie=w.div`
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
`,be=({product:e})=>e?t.jsx(re,{to:`/consultations/${e==null?void 0:e.consultation_term_id}`,children:e.consultation_media?t.jsx(ne,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(Ce,{})}):null,Se=w.div`
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
`;var v=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(v||{});const A=({status:e,name:r})=>{const o=ae(),s=i.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,e]);return t.jsxs(Se,{children:[t.jsx("div",{className:"status",style:{backgroundColor:s}}),t.jsx("div",{className:"name",children:r})]})},Ae=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,De=w.div`
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
`,Pe={reported:{type:v.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:v.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:v.ENDED,info:"ConsultationStatus.RejectedInfo"}},Ne=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:o}=i.useContext(q.EscolaLMSContext),{t:s}=b(),d=c=>{switch(c){case"reported":return t.jsx(A,{status:v.WAITING,name:s("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(A,{status:v.ACCEPTED,name:s("ConsultationStatus.Appointment")});case"reject":return t.jsx(A,{status:v.ENDED,name:s("ConsultationStatus.Canceled")})}};return t.jsx(Ae,{children:e.users.map(c=>t.jsxs("div",{children:[t.jsxs(N.Text,{className:"text",children:[c.first_name," ",c.last_name]}),t.jsx(N.Text,{className:"text",children:c.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Pe[c.executed_status]&&d(c.executed_status),t.jsxs(De,{children:[t.jsx(U,{icon:t.jsx(X,{}),text:s("Confirm"),onClick:()=>r(e==null?void 0:e.consultation_term_id,e.date,c.id)}),t.jsx(U,{icon:t.jsx(Y,{}),text:s("Cancel"),onClick:()=>o(e==null?void 0:e.consultation_term_id,e.date,c.id)})]})]}),t.jsx("hr",{})]},c.id))})},Re=w.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Me=({consultation:e})=>{const{t:r}=b(),o=e.is_ended,s=e.is_started,d=e.status==="reported",c=e.status==="approved",u=e.status==="not_reported",m=e.status==="reject";return t.jsxs(t.Fragment,{children:[o&&e.date&&t.jsx(R,{type:M.ENDED,date:z(e.date,G(`${e.duration}`))}),m&&t.jsx(R,{type:M.ENDED,date:z(e.date,G(`${e.duration}`))}),d&&!o&&t.jsx(R,{type:M.WAITING,date:e.date,info:r("ConsultationStatus.UnconfirmedInfo")}),c&&!o&&t.jsx(R,{type:M.ACCEPTED,date:e.date,info:s&&(e!=null&&e.consultation_term_id)?t.jsx(Re,{children:t.jsx(_e,{consultationTermId:e==null?void 0:e.consultation_term_id,consultationId:e==null?void 0:e.consultation_id,term:e.date})}):r("ConsultationStatus.AppointmentInfo",{date:oe(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),u&&t.jsx(R,{type:M.DEFAULT})]})},ke=w.div`
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
`,$e=({time:e})=>t.jsxs(ke,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(ie,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(N.Text,{className:"time",children:e})]}),Le=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,Ue=({consultation:e})=>t.jsxs(Le,{children:[t.jsx(Ne,{consultation:e}),t.jsx($e,{time:e.duration}),t.jsx(Me,{consultation:e})]});var Oe=ce();const Fe=de(Oe),Qe=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:o}=i.useContext(q.EscolaLMSContext),{t:s}=b(),d=i.useMemo(()=>[{id:1,content:t.jsx(U,{icon:t.jsx(X,{}),text:s("Confirm"),onClick:()=>r(e==null?void 0:e.consultation_term_id,e.date)})},{id:2,content:t.jsx(U,{icon:t.jsx(Y,{}),text:s("Cancel"),onClick:()=>o(e==null?void 0:e.consultation_term_id,e.date)})}],[r,e==null?void 0:e.consultation_term_id,o,s,e.date]);return t.jsx(Fe,{menuItems:d,child:t.jsx(O.Button,{mode:"icon",children:t.jsx(le,{})})})},qe=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,Be=({consultation:e})=>{const{status:r,is_ended:o}=e,{t:s}=b(),d=r==="reported",c=r==="approved";return r==="reject"?t.jsx(A,{status:v.CANCELED,name:s("ConsultationStatus.Canceled")}):o?t.jsx(A,{status:v.ENDED,name:s("ConsultationStatus.Ended")}):d?t.jsxs(qe,{children:[t.jsx(A,{status:v.WAITING,name:s("ConsultationStatus.Unconfirmed")}),t.jsx(Qe,{consultation:e})]}):c?t.jsx(A,{status:v.ACCEPTED,name:s("ConsultationStatus.Appointment")}):t.jsx(A,{status:v.DEFAULT,name:r})},Je=e=>{var o;const{consultation:r}=e;return t.jsx(Ie,{children:t.jsx(ue,{id:r==null?void 0:r.consultation_term_id,image:t.jsx(be,{product:r}),title:t.jsx(Be,{consultation:r}),subtitle:t.jsx("p",{children:(o=r.related_product)==null?void 0:o.name}),footer:t.jsx(Ue,{consultation:r})})})},ze=({type:e})=>{var g;const{tutorConsultations:r,fetchTutorConsultations:o,token:s}=i.useContext(H.EscolaLMSContext),{t:d}=b(),[c,u]=i.useState([]),m=i.useMemo(()=>{var a;return((a=r.list)==null?void 0:a.data.filter(f=>e===k.STARTED||e===k.UPCOMING?f.in_coming||f.is_started:f.is_ended))||[]},[e,(g=r.list)==null?void 0:g.data]),n=i.useCallback(async(a,f)=>{try{const h=await(await fetch(`${Q}/api/consultations/my-schedule?ids[]=${a}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(l=>(l==null?void 0:l.consultation_term_id)===f);u(l=>{const _=l.findIndex(j=>(j==null?void 0:j.consultation_term_id)===f);return _!==-1&&(l[_]=h.data[x]),[...l]})}}catch(C){console.error(C)}},[s]),p=i.useCallback(()=>{c.forEach(a=>{console.log("refreshing consultation",a),!a.is_started&&!a.is_ended&&n(a==null?void 0:a.consultation_id,a==null?void 0:a.consultation_term_id)})},[c,n]);return i.useEffect(()=>{o()},[o]),i.useEffect(()=>{u([]),u(m);const a=setInterval(()=>{p()},3e4);return()=>{u([]),clearInterval(a)}},[e,m,p]),t.jsx(t.Fragment,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((a,f)=>t.jsx(P.Col,{md:3,children:t.jsx(te,{})},`skeleton-card-${f}`)):c.length===0?t.jsx(N.Text,{style:{paddingLeft:K?20:40},children:d("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",c.map(a=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(Je,{consultation:a})},a==null?void 0:a.consultation_term_id))]})})})},W=i.memo(ze),Ge=w.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,se="meet.jit.si",We="stage.8x8.vc",Ve="8x8.vc";var He=function(e,r,o,s){function d(c){return c instanceof o?c:new o(function(u){u(c)})}return new(o||(o=Promise))(function(c,u){function m(g){try{p(s.next(g))}catch(a){u(a)}}function n(g){try{p(s.throw(g))}catch(a){u(a)}}function p(g){g.done?c(g.value):d(g.value).then(m,n)}p((s=s.apply(e,r||[])).next())})};const Ke=(e,r,o)=>He(void 0,void 0,void 0,function*(){return new Promise((s,d)=>{if(window.JitsiMeetExternalAPI)return s(window.JitsiMeetExternalAPI);const c=document.createElement("script"),u=r?`?release=${r}`:"",m=o?`${o}/`:"";c.async=!0,c.src=`https://${e}/${m}external_api.js${u}`,c.onload=()=>s(window.JitsiMeetExternalAPI),c.onerror=()=>d(new Error(`Script load error: ${c.src}`)),document.head.appendChild(c)})});let L;const Xe=(e=se,r,o)=>L||(L=Ke(e,r,o),L),Ye=(e,r)=>r?`${r}/${e}`:e,Ze=e=>{const r=e.split("/");if(!(r.length<=1))return r[0]},et=e=>e?We:Ve;let tt=0;const V=e=>`${e}-${tt++}`,st=({domain:e=se,roomName:r,configOverwrite:o,interfaceConfigOverwrite:s,jwt:d,invitees:c,devices:u,userInfo:m,release:n,lang:p,spinner:g,onApiReady:a,onReadyToClose:f,getIFrameRef:C})=>{const[h,x]=i.useState(!0),[l,_]=i.useState(!1),j=i.useRef(),E=i.useRef(),T=i.useRef(null),y=i.useMemo(()=>V("jitsiMeeting"),[V]);i.useEffect(()=>{Xe(e,n,Ze(r)).then(S=>{j.current=S,_(!0)}).catch(S=>console.error(S.message))},[]);const I=i.useCallback(S=>{E.current=new S(e,{roomName:r,configOverwrite:o,interfaceConfigOverwrite:s,jwt:d,invitees:c,devices:u,userInfo:m,release:n,lang:p,parentNode:T.current}),x(!1),E.current&&(typeof a=="function"&&a(E.current),E.current.on("readyToClose",()=>{typeof f=="function"&&f()}),T.current&&typeof C=="function"&&C(T.current))},[E,T,a,f,C,e,r,o,s,d,c,u,m,n,p]);i.useEffect(()=>{l&&!E.current&&j.current&&I(j.current)},[l,I]);const D=i.useCallback(()=>!g||!h||E.current?null:t.jsx(g,{},void 0),[g,E.current]);return t.jsxs(t.Fragment,{children:[D(),t.jsx("div",{id:y,ref:T},y)]},void 0)};var rt=function(e,r){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(e);d<s.length;d++)r.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(e,s[d])&&(o[s[d]]=e[s[d]]);return o};const nt=e=>{var{appId:r,roomName:o,useStaging:s,release:d}=e,c=rt(e,["appId","roomName","useStaging","release"]);return t.jsx(st,Object.assign({domain:et(s),roomName:Ye(o,r),release:d},c),void 0)},at=()=>{const[e,r]=i.useState(!1),o=i.useRef(null),s=i.useRef(null),d=i.useCallback(async()=>{try{const n=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});return r(!0),o.current=n,s.current||(s.current=document.createElement("video"),s.current.muted=!0,s.current.playsInline=!0),s.current.srcObject=n,s.current.play(),s.current}catch(n){return console.error("Camera access denied or not available:",n),r(!1),null}},[]),c=i.useCallback(async()=>(o.current&&o.current.getTracks().forEach(n=>n.stop()),await d()),[d]),u=async()=>await d(),m=async()=>{if(s.current&&o.current){const n=document.createElement("canvas"),p=n.getContext("2d"),a=o.current.getVideoTracks()[0].getSettings();n.height=a.height||0,n.width=a.width||0,p==null||p.drawImage(s.current,0,0);const f=n.toDataURL("image/png",1);return p==null||p.clearRect(0,0,n.width,n.height),n.remove(),f}return null};return i.useEffect(()=>{(async()=>{const p=await navigator.permissions.query({name:"camera"});p.state==="granted"&&await c(),p.onchange=async()=>{p.state==="granted"?await c():r(!1)}})()},[c]),{camera:u,hasCameraAccess:e,restartVideoTrack:c,getDataUrl:m}},ot=e=>{const r=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),d=String(e.getHours()).padStart(2,"0"),c=String(e.getMinutes()).padStart(2,"0"),u=String(e.getSeconds()).padStart(2,"0");return`${r}-${o}-${s} ${d}:${c}:${u}`},it=(e,r,o,s,d,c="aaa.png")=>{fetch(s).then(u=>u.blob()).then(u=>{const m=new FormData;m.append("name",c),m.append("file",new File([u],c,{type:"image/png"})),m.append("consultation_id",e.toString()),m.append("user_termin_id",r.toString()),m.append("user_email",o),m.append("timestamp",ot(new Date)),fetch(`${Q}/api/consultations/save-screen?executed_at=${d}`,{method:"POST",body:m}).then(()=>{}).catch(n=>console.log(n))}).catch(u=>console.log(u))},ct=async e=>{const o=(await e.getRoomsInfo()).rooms.find(s=>s.isMainRoom);return o==null?void 0:o.participants.find(s=>s.id===e._myUserID)},dt=w.div`
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
`,lt=w.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  button {
    min-width: 130px;
  }
`,ut=({message:e,closeToast:r,userConsentedRef:o})=>{const{t:s}=b();return t.jsxs(dt,{className:"jitsy-message",children:[t.jsx(me.Title,{className:"jitsy-message__title",children:s("ConsultationPage.EmotionConsent")}),t.jsx(N.Text,{size:"16",children:e}),t.jsxs(lt,{children:[t.jsx(O.Button,{onClick:()=>[o.current=!0,r()],children:s("ConsultationPage.Yes")}),t.jsx(O.Button,{mode:"secondary",onClick:()=>[o.current=!1,r()],children:s("ConsultationPage.No")})]})]})},mt=w(Z.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,ft=3,pt=({jitsyData:e,term:r,consultationTermId:o,consultationId:s,close:d})=>{const[c,u]=i.useState(!1),{camera:m,getDataUrl:n,hasCameraAccess:p}=at(),g=i.useRef(!1),a=i.useRef(!1),f=i.useRef(null),{isStudent:C}=B(),{t:h}=b(),x=i.useCallback(()=>{console.log("Video conference joined"),a.current=!0},[]),l=i.useCallback(()=>{console.log("Video conference left"),a.current=!1},[]),_=i.useCallback(async(y,I,D)=>{D.on?(console.log("Recording has started in mode:",D.mode),f.current||(f.current=setInterval(async()=>{const S=await I(),J=await ct(y);J&&(console.log("Saving image..."),S?it(s??0,o,e.data.userInfo.email,S,r,`${J.displayName}.png`):console.error("Failed to get data URL for saving image."))},1e3/ft))):(console.log("Recording has stopped."),f.current&&(clearInterval(f.current),f.current=null),D.error&&console.error("Recording error:",D.error))},[s,o,e.data.userInfo.email,r]),j=i.useCallback(async y=>{window.api=y,await m(),y.addListener("videoConferenceJoined",()=>x()),y.addListener("videoConferenceLeft",()=>l()),y.on("recordingStatusChanged",I=>{n&&g.current?_(y,async()=>await n(),I):console.error("User has not consented to record video or data url is not available.")})},[m,x,l,n,_]),E=()=>{var y;d&&d(),(y=window.api)==null||y.dispose()},T=i.useCallback(()=>{const y=/\/([^/?]+)\?/,I=e.url.match(y);return I?I[1]:e.data.roomName},[e]);return i.useEffect(()=>()=>{f.current&&clearInterval(f.current)},[]),i.useEffect(()=>(setTimeout(()=>{p&&a&&C&&u(!0)},5e3),()=>{}),[p,a,C,h]),t.jsxs(t.Fragment,{children:[e&&t.jsx(nt,{jwt:e.data.jwt,appId:e.data.app_id,roomName:T(),getIFrameRef:y=>{y.style.height="calc(100vh - 76px)",y.style.width="100%"},onApiReady:j,onReadyToClose:E,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1}}}),t.jsx(mt,{onClose:()=>u(!1),visible:c,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(ut,{message:h("ConsultationPage.AdditionalRecording"),closeToast:()=>u(!1),userConsentedRef:g})})]})},gt=({entityId:e,entityModel:r,onSuccesGetQuestionnaires:o,setIsEnded:s})=>{const{questionnaires:d,loading:c,getQuestionnaires:u}=ve({entityId:e||0,entityModel:r}),[m,n]=i.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:p,isTutor:g}=B(),a=i.useMemo(()=>d.filter(x=>x.models.some(l=>l.model_type_title===r?l.model_type_title===F.CONSULTATION?p&&l.target_group==="user"||g&&l.target_group==="author":!0:!1)),[d,p,g,r]),f=i.useCallback(()=>{if(!a)return;const x=a.reduce((l,_)=>{var E;const j=(E=_.models.find(T=>T.model_type_title===r&&T.model_id===e))==null?void 0:E.display_frequency_minutes;return j!=null&&j===0&&l.endMeetingQuestionnaires.push(_),l},{endMeetingQuestionnaires:[]});n(l=>({...l,...x}))},[a,r,e]),C=i.useCallback(()=>{n(l=>({...l,step:l.step+1}));const x=setTimeout(()=>{n(l=>({...l,show:!0}))},500);return()=>clearTimeout(x)},[]),h=i.useCallback(()=>{n(x=>({...x,show:!1})),m.step<m.endMeetingQuestionnaires.length-1?C():(n(x=>({...x,show:!1})),s&&s(!1))},[m,C,s]);return i.useEffect(()=>{u()},[e]),i.useEffect(()=>{f()},[a,f,o]),i.useEffect(()=>{let x;return m.endMeetingQuestionnaires.length&&n(l=>({...l,show:!0})),()=>{clearTimeout(x)}},[a,m.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:m.show&&e&&!!a.length&&!c&&t.jsx(Ee,{entityModel:r,entityId:Number(e),visible:m.show,onClose:h,questionnaire:m.endMeetingQuestionnaires[m.step]})})},ht=({onClose:e})=>{var g,a,f,C,h;const[r,o]=i.useState(null),[s,d]=i.useState(!1),[c,u]=i.useState(!1),{generateConsultationJitsy:m}=i.useContext(q.EscolaLMSContext),n=i.useContext(ee);i.useEffect(()=>((async()=>{var l,_;if(u(!0),n!=null&&n.consultationData){const j=await m((l=n==null?void 0:n.consultationData)==null?void 0:l.consultationTermId,(_=n==null?void 0:n.consultationData)==null?void 0:_.term);j.success&&o(j.data),u(!1)}})(),()=>{Object.keys(localStorage).forEach(l=>{l.startsWith("questionnaire_")&&localStorage.removeItem(l)})}),[n==null?void 0:n.consultationData]),i.useEffect(()=>{d(!1)},[n==null?void 0:n.consultationData]);const p=i.useCallback(()=>{var x;d(!0),(x=n==null?void 0:n.setModalOpen)==null||x.call(n,!1),e()},[d,e,n]);return t.jsxs(t.Fragment,{children:[t.jsxs(Z.Modal,{onClose:p,visible:n==null?void 0:n.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(Ge,{children:[c&&t.jsx(fe,{}),!c&&r&&t.jsx(pt,{jitsyData:r,close:p,consultationId:(g=n==null?void 0:n.consultationData)==null?void 0:g.consultationId,consultationTermId:((a=n==null?void 0:n.consultationData)==null?void 0:a.consultationTermId)??0,term:((f=n==null?void 0:n.consultationData)==null?void 0:f.term)??""})]}),t.jsx(we,{entityId:Number((C=n==null?void 0:n.consultationData)==null?void 0:C.consultationId),entityModel:F.CONSULTATION})]}),s&&t.jsx(gt,{entityId:Number((h=n==null?void 0:n.consultationData)==null?void 0:h.consultationId),entityModel:F.CONSULTATION,setIsEnded:d})]})};var k=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(k||{});const Mt=()=>{const{t:e}=b(),{isTutor:r}=B(),o=i.useContext(ee),s=i.useMemo(()=>({tabs:r?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(W,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(W,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx($,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx($,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx($,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx($,{type:"is_ended"})}],defaultActiveKey:1}),[r,e]);return t.jsx(pe,{children:t.jsx(he,{children:t.jsxs(ge,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(xe.Tabs,{tabs:s.tabs,defaultActiveKey:s.defaultActiveKey})}),t.jsx(ht,{onClose:()=>[o==null?void 0:o.setModalOpen(!1)]})]})})})};export{k as ConsultationStatus,Mt as default};

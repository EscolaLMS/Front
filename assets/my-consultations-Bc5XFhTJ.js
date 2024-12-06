import{r as o,i as H,h as I,ar as Q,j as t,V as P,y as N,o as K,q as v,L as se,ax as re,X as ae,N as q,aP as U,aQ as X,aR as Y,aS as z,aT as G,aw as oe,al as ie,aU as ce,g as de,z as O,aV as le,aW as ue,T as me,F as Z,aX as ee,a0 as fe,v as pe,C as ge}from"./index-_i66FZVw.js";import{a as he,T as xe}from"./index-lSRCaHB-.js";import{C as te,a as Ce}from"./CourseCard-Dk0UU9ib.js";import{P as je,C as ye,D as R,a as M,b as _e}from"./index-EpQHIcgZ.js";import{u as B,R as Ee}from"./useRoles-CBKfgIzR.js";import{Q as F}from"./questionnaire-CXWDgbJ4.js";import{u as we,Q as ve}from"./index-DL54DOtw.js";import"./questionnaires-BZiO0UEp.js";import"./useDownloadCertificate-BIuFUOpm.js";import"./base-7gvCcPfx.js";import"./index-DiyfmUy4.js";import"./swiper-B7zW7uQV.js";import"./swiper-react-DsQnZ3yO.js";import"./a11y-AIlIBpk6.js";import"./index-DwmytEkL.js";import"./floating-ui.react-dom-C5Jr9n5A.js";import"./index-NLuswLRA.js";const Te=({type:e})=>{var g;const{userConsultations:r,fetchUserConsultations:a,token:n}=o.useContext(H.EscolaLMSContext),{t:d}=I(),[i,l]=o.useState([]),u=o.useMemo(()=>{var C;const c=((C=r.list)==null?void 0:C.data.filter(h=>e===k.STARTED||e===k.UPCOMING?h.in_coming||h.is_started:h.is_ended))||[];return Array.from(new Map(c.map(h=>[h.id,h])).values())},[e,(g=r.list)==null?void 0:g.data]),s=o.useCallback(async c=>{try{const C=await(await fetch(`${Q}/api/consultations/me?ids[]=${c}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}})).json();C.success&&C.data.length>0&&l(h=>{const x=h.findIndex(m=>m.id===c);return x!==-1&&(h[x]=C.data[0]),[...h]})}catch(f){console.error(f)}},[n]),p=o.useCallback(()=>{i.forEach(c=>{!c.is_started&&!c.is_ended&&s(c.id)})},[i,s]);return o.useEffect(()=>{a()},[e,a]),o.useEffect(()=>{l([]),l(u);const c=setInterval(()=>{p()},5e3);return()=>{l([]),clearInterval(c)}},[e,u,p]),t.jsx(je,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((c,f)=>t.jsx(P.Col,{md:3,children:t.jsx(te,{})},`skeleton-card-${f}`)):i.length===0?t.jsx(N.Text,{style:{paddingLeft:K?20:40},children:d("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:i.map(c=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(ye,{consultation:c})},c.id))})})})},$=o.memo(Te),be=v.div`
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
`,Ie=({product:e})=>e?t.jsx(se,{to:`/consultations/${e.consultation_term_id}`,children:e.consultation_media?t.jsx(re,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(Ce,{})}):null,Se=v.div`
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
`;var w=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(w||{});const A=({status:e,name:r})=>{const a=ae(),n=o.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return a.primaryColor}},[a.primaryColor,e]);return t.jsxs(Se,{children:[t.jsx("div",{className:"status",style:{backgroundColor:n}}),t.jsx("div",{className:"name",children:r})]})},Ae=v.div`
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
`,Pe={reported:{type:w.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:w.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:w.ENDED,info:"ConsultationStatus.RejectedInfo"}},Ne=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:a}=o.useContext(q.EscolaLMSContext),{t:n}=I(),d=i=>{switch(i){case"reported":return t.jsx(A,{status:w.WAITING,name:n("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(A,{status:w.ACCEPTED,name:n("ConsultationStatus.Appointment")});case"reject":return t.jsx(A,{status:w.ENDED,name:n("ConsultationStatus.Canceled")})}};return t.jsx(Ae,{children:e.users.map(i=>t.jsxs("div",{children:[t.jsxs(N.Text,{className:"text",children:[i.first_name," ",i.last_name]}),t.jsx(N.Text,{className:"text",children:i.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Pe[i.executed_status]&&d(i.executed_status),t.jsxs(De,{children:[t.jsx(U,{icon:t.jsx(X,{}),text:n("Confirm"),onClick:()=>r(e.consultation_term_id,e.date,i.id)}),t.jsx(U,{icon:t.jsx(Y,{}),text:n("Cancel"),onClick:()=>a(e.consultation_term_id,e.date,i.id)})]})]}),t.jsx("hr",{})]},i.id))})},Re=v.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Me=({consultation:e})=>{const{t:r}=I(),a=e.is_ended,n=e.is_started,d=e.status==="reported",i=e.status==="approved",l=e.status==="not_reported",u=e.status==="reject";return t.jsxs(t.Fragment,{children:[a&&e.date&&t.jsx(R,{type:M.ENDED,date:z(e.date,G(`${e.duration}`))}),u&&t.jsx(R,{type:M.ENDED,date:z(e.date,G(`${e.duration}`))}),d&&!a&&t.jsx(R,{type:M.WAITING,date:e.date,info:r("ConsultationStatus.UnconfirmedInfo")}),i&&!a&&t.jsx(R,{type:M.ACCEPTED,date:e.date,info:n&&e.consultation_term_id?t.jsx(Re,{children:t.jsx(_e,{consultationTermId:e.consultation_term_id,consultationId:e.consultation_id,term:e.date})}):r("ConsultationStatus.AppointmentInfo",{date:oe(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),l&&t.jsx(R,{type:M.DEFAULT})]})},ke=v.div`
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
`,$e=({time:e})=>t.jsxs(ke,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(ie,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(N.Text,{className:"time",children:e})]}),Le=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,Ue=({consultation:e})=>t.jsxs(Le,{children:[t.jsx(Ne,{consultation:e}),t.jsx($e,{time:e.duration}),t.jsx(Me,{consultation:e})]});var Oe=ce();const Fe=de(Oe),Qe=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:a}=o.useContext(q.EscolaLMSContext),{t:n}=I(),{consultation_term_id:d}=e,i=o.useMemo(()=>[{id:1,content:t.jsx(U,{icon:t.jsx(X,{}),text:n("Confirm"),onClick:()=>r(d,e.date)})},{id:2,content:t.jsx(U,{icon:t.jsx(Y,{}),text:n("Cancel"),onClick:()=>a(d,e.date)})}],[r,d,a,n,e.date]);return t.jsx(Fe,{menuItems:i,child:t.jsx(O.Button,{mode:"icon",children:t.jsx(le,{})})})},qe=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,Be=({consultation:e})=>{const{status:r,is_ended:a}=e,{t:n}=I(),d=r==="reported",i=r==="approved";return r==="reject"?t.jsx(A,{status:w.CANCELED,name:n("ConsultationStatus.Canceled")}):a?t.jsx(A,{status:w.ENDED,name:n("ConsultationStatus.Ended")}):d?t.jsxs(qe,{children:[t.jsx(A,{status:w.WAITING,name:n("ConsultationStatus.Unconfirmed")}),t.jsx(Qe,{consultation:e})]}):i?t.jsx(A,{status:w.ACCEPTED,name:n("ConsultationStatus.Appointment")}):t.jsx(A,{status:w.DEFAULT,name:r})},Je=e=>{var a;const{consultation:r}=e;return t.jsx(be,{children:t.jsx(ue,{id:r.consultation_term_id,image:t.jsx(Ie,{product:r}),title:t.jsx(Be,{consultation:r}),subtitle:t.jsx("p",{children:(a=r.related_product)==null?void 0:a.name}),footer:t.jsx(Ue,{consultation:r})})})},ze=({type:e})=>{var g;const{tutorConsultations:r,fetchTutorConsultations:a,token:n}=o.useContext(H.EscolaLMSContext),{t:d}=I(),[i,l]=o.useState([]),u=o.useMemo(()=>{var c;return((c=r.list)==null?void 0:c.data.filter(f=>e===k.STARTED||e===k.UPCOMING?f.in_coming||f.is_started:f.is_ended))||[]},[e,(g=r.list)==null?void 0:g.data]),s=o.useCallback(async(c,f)=>{try{const h=await(await fetch(`${Q}/api/consultations/my-schedule?ids[]=${c}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(m=>(m==null?void 0:m.consultation_term_id)===f);l(m=>{const _=m.findIndex(y=>(y==null?void 0:y.consultation_term_id)===f);return _!==-1&&(m[_]=h.data[x]),[...m]})}}catch(C){console.error(C)}},[n]),p=o.useCallback(()=>{i.forEach(c=>{!c.is_started&&!c.is_ended&&s(c==null?void 0:c.consultation_id,c.consultation_term_id)})},[i,s]);return o.useEffect(()=>{a()},[a]),o.useEffect(()=>{l([]),l(u);const c=setInterval(()=>{p()},5e3);return()=>{l([]),clearInterval(c)}},[e,u,p]),t.jsx(t.Fragment,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((c,f)=>t.jsx(P.Col,{md:3,children:t.jsx(te,{})},`skeleton-card-${f}`)):i.length===0?t.jsx(N.Text,{style:{paddingLeft:K?20:40},children:d("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",i.map(c=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(Je,{consultation:c})},c.consultation_term_id))]})})})},W=o.memo(ze),Ge=v.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,ne="meet.jit.si",We="stage.8x8.vc",Ve="8x8.vc";var He=function(e,r,a,n){function d(i){return i instanceof a?i:new a(function(l){l(i)})}return new(a||(a=Promise))(function(i,l){function u(g){try{p(n.next(g))}catch(c){l(c)}}function s(g){try{p(n.throw(g))}catch(c){l(c)}}function p(g){g.done?i(g.value):d(g.value).then(u,s)}p((n=n.apply(e,r||[])).next())})};const Ke=(e,r,a)=>He(void 0,void 0,void 0,function*(){return new Promise((n,d)=>{if(window.JitsiMeetExternalAPI)return n(window.JitsiMeetExternalAPI);const i=document.createElement("script"),l=r?`?release=${r}`:"",u=a?`${a}/`:"";i.async=!0,i.src=`https://${e}/${u}external_api.js${l}`,i.onload=()=>n(window.JitsiMeetExternalAPI),i.onerror=()=>d(new Error(`Script load error: ${i.src}`)),document.head.appendChild(i)})});let L;const Xe=(e=ne,r,a)=>L||(L=Ke(e,r,a),L),Ye=(e,r)=>r?`${r}/${e}`:e,Ze=e=>{const r=e.split("/");if(!(r.length<=1))return r[0]},et=e=>e?We:Ve;let tt=0;const V=e=>`${e}-${tt++}`,nt=({domain:e=ne,roomName:r,configOverwrite:a,interfaceConfigOverwrite:n,jwt:d,invitees:i,devices:l,userInfo:u,release:s,lang:p,spinner:g,onApiReady:c,onReadyToClose:f,getIFrameRef:C})=>{const[h,x]=o.useState(!0),[m,_]=o.useState(!1),y=o.useRef(),E=o.useRef(),T=o.useRef(null),j=o.useMemo(()=>V("jitsiMeeting"),[V]);o.useEffect(()=>{Xe(e,s,Ze(r)).then(S=>{y.current=S,_(!0)}).catch(S=>console.error(S.message))},[]);const b=o.useCallback(S=>{E.current=new S(e,{roomName:r,configOverwrite:a,interfaceConfigOverwrite:n,jwt:d,invitees:i,devices:l,userInfo:u,release:s,lang:p,parentNode:T.current}),x(!1),E.current&&(typeof c=="function"&&c(E.current),E.current.on("readyToClose",()=>{typeof f=="function"&&f()}),T.current&&typeof C=="function"&&C(T.current))},[E,T,c,f,C,e,r,a,n,d,i,l,u,s,p]);o.useEffect(()=>{m&&!E.current&&y.current&&b(y.current)},[m,b]);const D=o.useCallback(()=>!g||!h||E.current?null:t.jsx(g,{},void 0),[g,E.current]);return t.jsxs(t.Fragment,{children:[D(),t.jsx("div",{id:j,ref:T},j)]},void 0)};var st=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(e);d<n.length;d++)r.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(e,n[d])&&(a[n[d]]=e[n[d]]);return a};const rt=e=>{var{appId:r,roomName:a,useStaging:n,release:d}=e,i=st(e,["appId","roomName","useStaging","release"]);return t.jsx(nt,Object.assign({domain:et(n),roomName:Ye(a,r),release:d},i),void 0)},at=()=>{const[e,r]=o.useState(!1),a=o.useRef(null),n=o.useRef(null),d=o.useCallback(async()=>{try{const s=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});return r(!0),a.current=s,n.current||(n.current=document.createElement("video"),n.current.muted=!0,n.current.playsInline=!0),n.current.srcObject=s,n.current.play(),n.current}catch(s){return console.error("Camera access denied or not available:",s),r(!1),null}},[]),i=o.useCallback(async()=>(a.current&&a.current.getTracks().forEach(s=>s.stop()),await d()),[d]),l=async()=>await d(),u=async()=>{if(n.current&&a.current){const s=document.createElement("canvas"),p=s.getContext("2d"),c=a.current.getVideoTracks()[0].getSettings();s.height=c.height||0,s.width=c.width||0,p==null||p.drawImage(n.current,0,0);const f=s.toDataURL("image/png",1);return p==null||p.clearRect(0,0,s.width,s.height),s.remove(),f}return null};return o.useEffect(()=>{(async()=>{const p=await navigator.permissions.query({name:"camera"});p.state==="granted"&&await i(),p.onchange=async()=>{p.state==="granted"?await i():r(!1)}})()},[i]),{camera:l,hasCameraAccess:e,restartVideoTrack:i,getDataUrl:u}},ot=e=>{const r=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),d=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),l=String(e.getSeconds()).padStart(2,"0");return`${r}-${a}-${n} ${d}:${i}:${l}`},it=(e,r,a,n,d,i="aaa.png")=>{fetch(n).then(l=>l.blob()).then(l=>{const u=new FormData;u.append("name",i),u.append("file",new File([l],i,{type:"image/png"})),u.append("consultation_id",e.toString()),u.append("user_termin_id",r.toString()),u.append("user_email",a),u.append("timestamp",ot(new Date)),fetch(`${Q}/api/consultations/save-screen?executed_at=${d}`,{method:"POST",body:u}).then(()=>{}).catch(s=>console.log(s))}).catch(l=>console.log(l))},ct=async e=>{const a=(await e.getRoomsInfo()).rooms.find(n=>n.isMainRoom);return a==null?void 0:a.participants.find(n=>n.id===e._myUserID)},dt=v.div`
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
`,ut=({message:e,closeToast:r,userConsentedRef:a})=>{const{t:n}=I();return t.jsxs(dt,{className:"jitsy-message",children:[t.jsx(me.Title,{className:"jitsy-message__title",children:n("ConsultationPage.EmotionConsent")}),t.jsx(N.Text,{size:"16",children:e}),t.jsxs(lt,{children:[t.jsx(O.Button,{onClick:()=>[a.current=!0,r()],children:n("ConsultationPage.Yes")}),t.jsx(O.Button,{mode:"secondary",onClick:()=>[a.current=!1,r()],children:n("ConsultationPage.No")})]})]})},mt=v(Z.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,ft=.3,pt=({jitsyData:e,term:r,consultationTermId:a,consultationId:n,close:d})=>{const[i,l]=o.useState(!1),{camera:u,getDataUrl:s,hasCameraAccess:p}=at(),g=o.useRef(!1),c=o.useRef(!1),f=o.useRef(null),{isStudent:C}=B(),{t:h}=I(),x=o.useCallback(()=>{console.log("Video conference joined"),c.current=!0},[]),m=o.useCallback(()=>{console.log("Video conference left"),c.current=!1},[]),_=o.useCallback(async(j,b,D)=>{D.on?(console.log("Recording has started in mode:",D.mode),f.current||(f.current=setInterval(async()=>{const S=await b(),J=await ct(j);J&&(console.log("Saving image..."),S?it(n??0,a,e.data.userInfo.email,S,r,`${J.displayName}.png`):console.error("Failed to get data URL for saving image."))},1e3/ft))):(console.log("Recording has stopped."),f.current&&(clearInterval(f.current),f.current=null),D.error&&console.error("Recording error:",D.error))},[n,a,e.data.userInfo.email,r]),y=o.useCallback(async j=>{window.api=j,await u(),j.addListener("videoConferenceJoined",()=>x()),j.addListener("videoConferenceLeft",()=>m()),j.on("recordingStatusChanged",b=>{s&&g.current?_(j,async()=>await s(),b):console.error("User has not consented to record video or data url is not available.")})},[u,x,m,s,_]),E=()=>{var j;d&&d(),(j=window.api)==null||j.dispose()},T=o.useCallback(()=>{const j=/\/([^/?]+)\?/,b=e.url.match(j);return b?b[1]:e.data.roomName},[e]);return o.useEffect(()=>()=>{f.current&&clearInterval(f.current)},[]),o.useEffect(()=>(setTimeout(()=>{p&&c&&C&&l(!0)},5e3),()=>{}),[p,c,C,h]),t.jsxs(t.Fragment,{children:[e&&t.jsx(rt,{jwt:e.data.jwt,appId:e.data.app_id,roomName:T(),getIFrameRef:j=>{j.style.height="calc(100vh - 76px)",j.style.width="100%"},onApiReady:y,onReadyToClose:E,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1}}}),t.jsx(mt,{onClose:()=>l(!1),visible:i,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(ut,{message:h("ConsultationPage.AdditionalRecording"),closeToast:()=>l(!1),userConsentedRef:g})})]})},gt=({entityId:e,entityModel:r,onSuccesGetQuestionnaires:a,setIsEnded:n})=>{const{questionnaires:d,loading:i,getQuestionnaires:l}=we({entityId:e||0,entityModel:r}),[u,s]=o.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:p,isTutor:g}=B(),c=o.useMemo(()=>d.filter(x=>x.models.some(m=>m.model_type_title===r?m.model_type_title===F.CONSULTATION?p&&m.target_group==="user"||g&&m.target_group==="author":!0:!1)),[d,p,g,r]),f=o.useCallback(()=>{if(!c)return;const x=c.reduce((m,_)=>{var E;const y=(E=_.models.find(T=>T.model_type_title===r&&T.model_id===e))==null?void 0:E.display_frequency_minutes;return y!=null&&y===0&&m.endMeetingQuestionnaires.push(_),m},{endMeetingQuestionnaires:[]});s(m=>({...m,...x}))},[c,r,e]),C=o.useCallback(()=>{s(m=>({...m,step:m.step+1}));const x=setTimeout(()=>{s(m=>({...m,show:!0}))},500);return()=>clearTimeout(x)},[]),h=o.useCallback(()=>{s(x=>({...x,show:!1})),u.step<u.endMeetingQuestionnaires.length-1?C():(s(x=>({...x,show:!1})),n&&n(!1))},[u,C,n]);return o.useEffect(()=>{l()},[e]),o.useEffect(()=>{f()},[c,f,a]),o.useEffect(()=>{let x;return u.endMeetingQuestionnaires.length&&s(m=>({...m,show:!0})),()=>{clearTimeout(x)}},[c,u.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:u.show&&e&&!!c.length&&!i&&t.jsx(Ee,{entityModel:r,entityId:Number(e),visible:u.show,onClose:h,questionnaire:u.endMeetingQuestionnaires[u.step]})})},ht=({onClose:e})=>{var g,c,f,C,h;const[r,a]=o.useState(null),[n,d]=o.useState(!1),[i,l]=o.useState(!1),{generateConsultationJitsy:u}=o.useContext(q.EscolaLMSContext),s=o.useContext(ee);o.useEffect(()=>((async()=>{var m,_;if(l(!0),s!=null&&s.consultationData){const y=await u((m=s==null?void 0:s.consultationData)==null?void 0:m.consultationTermId,(_=s==null?void 0:s.consultationData)==null?void 0:_.term);y.success&&a(y.data),l(!1)}})(),()=>{Object.keys(localStorage).forEach(m=>{m.startsWith("questionnaire_")&&localStorage.removeItem(m)})}),[s==null?void 0:s.consultationData]),o.useEffect(()=>{d(!1)},[s==null?void 0:s.consultationData]);const p=o.useCallback(()=>{var x;d(!0),(x=s==null?void 0:s.setModalOpen)==null||x.call(s,!1),e()},[d,e,s]);return t.jsxs(t.Fragment,{children:[t.jsxs(Z.Modal,{onClose:p,visible:s==null?void 0:s.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(Ge,{children:[i&&t.jsx(fe,{}),!i&&r&&t.jsx(pt,{jitsyData:r,close:p,consultationId:(g=s==null?void 0:s.consultationData)==null?void 0:g.consultationId,consultationTermId:((c=s==null?void 0:s.consultationData)==null?void 0:c.consultationTermId)??0,term:((f=s==null?void 0:s.consultationData)==null?void 0:f.term)??""})]}),t.jsx(ve,{entityId:Number((C=s==null?void 0:s.consultationData)==null?void 0:C.consultationId),entityModel:F.CONSULTATION})]}),n&&t.jsx(gt,{entityId:Number((h=s==null?void 0:s.consultationData)==null?void 0:h.consultationId),entityModel:F.CONSULTATION,setIsEnded:d})]})};var k=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(k||{});const Mt=()=>{const{t:e}=I(),{isTutor:r}=B(),a=o.useContext(ee),n=o.useMemo(()=>({tabs:r?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(W,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(W,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx($,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx($,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx($,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx($,{type:"is_ended"})}],defaultActiveKey:1}),[r,e]);return t.jsx(pe,{children:t.jsx(he,{children:t.jsxs(ge,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(xe.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})}),t.jsx(ht,{onClose:()=>[a==null?void 0:a.setModalOpen(!1)]})]})})})};export{k as ConsultationStatus,Mt as default};

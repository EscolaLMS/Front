import{r as o,i as H,h as b,ar as Q,j as t,V as P,y as N,o as K,q as v,L as se,ax as re,X as ae,N as q,aP as U,aQ as X,aR as Y,aS as z,aT as G,aw as oe,al as ie,aU as ce,g as de,z as O,aV as le,aW as ue,T as me,F as Z,aX as ee,a0 as fe,v as pe,C as ge}from"./index-D4kQ_0st.js";import{a as he,T as xe}from"./index-DU9dat9C.js";import{C as te,a as Ce}from"./CourseCard-B3UcYNvV.js";import{P as je,C as ye,D as R,a as M,b as _e}from"./index-BLbUWJ8_.js";import{u as B,R as Ee}from"./useRoles-D4ZXOqhc.js";import{Q as F}from"./questionnaire-CXWDgbJ4.js";import{u as we,Q as ve}from"./index-BGNZdF-0.js";import"./questionnaires-B5IPE4XH.js";import"./useDownloadCertificate-kizXMIIm.js";import"./base-7gvCcPfx.js";import"./index-V3R8q8zQ.js";import"./swiper-46fbWuie.js";import"./swiper-react-DT6q0NI0.js";import"./a11y-BEecXIpB.js";import"./index-B4b_WV-r.js";import"./floating-ui.react-dom-B0lPo3zV.js";import"./index-BYUtxcxd.js";const Te=({type:e})=>{var g;const{userConsultations:r,fetchUserConsultations:a,token:n}=o.useContext(H.EscolaLMSContext),{t:d}=b(),[i,u]=o.useState([]),m=o.useMemo(()=>{var C;const c=((C=r.list)==null?void 0:C.data.filter(h=>e===k.STARTED||e===k.UPCOMING?h.in_coming||h.is_started:h.is_ended))||[];return Array.from(new Map(c.map(h=>[h.id,h])).values())},[e,(g=r.list)==null?void 0:g.data]),s=o.useCallback(async(c,f)=>{try{const h=await(await fetch(`${Q}/api/consultations/me?ids[]=${c}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(l=>(l==null?void 0:l.consultation_term_id)===f);u(l=>{const _=l.findIndex(j=>j.consultation_term_id===f);return _!==-1&&(l[_]=h.data[x]),[...l]})}}catch(C){console.error(C)}},[n]),p=o.useCallback(()=>{i.forEach(c=>{!c.is_started&&!c.is_ended&&s(c.id,c.consultation_term_id)})},[i,s]);return o.useEffect(()=>{a()},[e,a]),o.useEffect(()=>{u([]),u(m);const c=setInterval(()=>{p()},3e4);return()=>{u([]),clearInterval(c)}},[e,m,p]),t.jsx(je,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((c,f)=>t.jsx(P.Col,{md:3,children:t.jsx(te,{})},`skeleton-card-${f}`)):i.length===0?t.jsx(N.Text,{style:{paddingLeft:K?20:40},children:d("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:i.map(c=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(ye,{consultation:c})},c.id))})})})},$=o.memo(Te),Ie=v.div`
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
`,be=({product:e})=>e?t.jsx(se,{to:`/consultations/${e.consultation_term_id}`,children:e.consultation_media?t.jsx(re,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(Ce,{})}):null,Se=v.div`
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
`,Pe={reported:{type:w.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:w.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:w.ENDED,info:"ConsultationStatus.RejectedInfo"}},Ne=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:a}=o.useContext(q.EscolaLMSContext),{t:n}=b(),d=i=>{switch(i){case"reported":return t.jsx(A,{status:w.WAITING,name:n("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(A,{status:w.ACCEPTED,name:n("ConsultationStatus.Appointment")});case"reject":return t.jsx(A,{status:w.ENDED,name:n("ConsultationStatus.Canceled")})}};return t.jsx(Ae,{children:e.users.map(i=>t.jsxs("div",{children:[t.jsxs(N.Text,{className:"text",children:[i.first_name," ",i.last_name]}),t.jsx(N.Text,{className:"text",children:i.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Pe[i.executed_status]&&d(i.executed_status),t.jsxs(De,{children:[t.jsx(U,{icon:t.jsx(X,{}),text:n("Confirm"),onClick:()=>r(e.consultation_term_id,e.date,i.id)}),t.jsx(U,{icon:t.jsx(Y,{}),text:n("Cancel"),onClick:()=>a(e.consultation_term_id,e.date,i.id)})]})]}),t.jsx("hr",{})]},i.id))})},Re=v.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Me=({consultation:e})=>{const{t:r}=b(),a=e.is_ended,n=e.is_started,d=e.status==="reported",i=e.status==="approved",u=e.status==="not_reported",m=e.status==="reject";return t.jsxs(t.Fragment,{children:[a&&e.date&&t.jsx(R,{type:M.ENDED,date:z(e.date,G(`${e.duration}`))}),m&&t.jsx(R,{type:M.ENDED,date:z(e.date,G(`${e.duration}`))}),d&&!a&&t.jsx(R,{type:M.WAITING,date:e.date,info:r("ConsultationStatus.UnconfirmedInfo")}),i&&!a&&t.jsx(R,{type:M.ACCEPTED,date:e.date,info:n&&e.consultation_term_id?t.jsx(Re,{children:t.jsx(_e,{consultationTermId:e.consultation_term_id,consultationId:e.consultation_id,term:e.date})}):r("ConsultationStatus.AppointmentInfo",{date:oe(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),u&&t.jsx(R,{type:M.DEFAULT})]})},ke=v.div`
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
`,Ue=({consultation:e})=>t.jsxs(Le,{children:[t.jsx(Ne,{consultation:e}),t.jsx($e,{time:e.duration}),t.jsx(Me,{consultation:e})]});var Oe=ce();const Fe=de(Oe),Qe=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:a}=o.useContext(q.EscolaLMSContext),{t:n}=b(),{consultation_term_id:d}=e,i=o.useMemo(()=>[{id:1,content:t.jsx(U,{icon:t.jsx(X,{}),text:n("Confirm"),onClick:()=>r(d,e.date)})},{id:2,content:t.jsx(U,{icon:t.jsx(Y,{}),text:n("Cancel"),onClick:()=>a(d,e.date)})}],[r,d,a,n,e.date]);return t.jsx(Fe,{menuItems:i,child:t.jsx(O.Button,{mode:"icon",children:t.jsx(le,{})})})},qe=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,Be=({consultation:e})=>{const{status:r,is_ended:a}=e,{t:n}=b(),d=r==="reported",i=r==="approved";return r==="reject"?t.jsx(A,{status:w.CANCELED,name:n("ConsultationStatus.Canceled")}):a?t.jsx(A,{status:w.ENDED,name:n("ConsultationStatus.Ended")}):d?t.jsxs(qe,{children:[t.jsx(A,{status:w.WAITING,name:n("ConsultationStatus.Unconfirmed")}),t.jsx(Qe,{consultation:e})]}):i?t.jsx(A,{status:w.ACCEPTED,name:n("ConsultationStatus.Appointment")}):t.jsx(A,{status:w.DEFAULT,name:r})},Je=e=>{var a;const{consultation:r}=e;return t.jsx(Ie,{children:t.jsx(ue,{id:r.consultation_term_id,image:t.jsx(be,{product:r}),title:t.jsx(Be,{consultation:r}),subtitle:t.jsx("p",{children:(a=r.related_product)==null?void 0:a.name}),footer:t.jsx(Ue,{consultation:r})})})},ze=({type:e})=>{var g;const{tutorConsultations:r,fetchTutorConsultations:a,token:n}=o.useContext(H.EscolaLMSContext),{t:d}=b(),[i,u]=o.useState([]),m=o.useMemo(()=>{var c;return((c=r.list)==null?void 0:c.data.filter(f=>e===k.STARTED||e===k.UPCOMING?f.in_coming||f.is_started:f.is_ended))||[]},[e,(g=r.list)==null?void 0:g.data]),s=o.useCallback(async(c,f)=>{try{const h=await(await fetch(`${Q}/api/consultations/my-schedule?ids[]=${c}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}})).json();if(h.success&&h.data.length>0){const x=h.data.findIndex(l=>(l==null?void 0:l.consultation_term_id)===f);u(l=>{const _=l.findIndex(j=>(j==null?void 0:j.consultation_term_id)===f);return _!==-1&&(l[_]=h.data[x]),[...l]})}}catch(C){console.error(C)}},[n]),p=o.useCallback(()=>{i.forEach(c=>{!c.is_started&&!c.is_ended&&s(c==null?void 0:c.consultation_id,c.consultation_term_id)})},[i,s]);return o.useEffect(()=>{a()},[a]),o.useEffect(()=>{u([]),u(m);const c=setInterval(()=>{p()},3e4);return()=>{u([]),clearInterval(c)}},[e,m,p]),t.jsx(t.Fragment,{children:t.jsx(P.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((c,f)=>t.jsx(P.Col,{md:3,children:t.jsx(te,{})},`skeleton-card-${f}`)):i.length===0?t.jsx(N.Text,{style:{paddingLeft:K?20:40},children:d("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",i.map(c=>t.jsx(P.Col,{xs:12,md:6,lg:3,children:t.jsx(Je,{consultation:c})},c.consultation_term_id))]})})})},W=o.memo(ze),Ge=v.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,ne="meet.jit.si",We="stage.8x8.vc",Ve="8x8.vc";var He=function(e,r,a,n){function d(i){return i instanceof a?i:new a(function(u){u(i)})}return new(a||(a=Promise))(function(i,u){function m(g){try{p(n.next(g))}catch(c){u(c)}}function s(g){try{p(n.throw(g))}catch(c){u(c)}}function p(g){g.done?i(g.value):d(g.value).then(m,s)}p((n=n.apply(e,r||[])).next())})};const Ke=(e,r,a)=>He(void 0,void 0,void 0,function*(){return new Promise((n,d)=>{if(window.JitsiMeetExternalAPI)return n(window.JitsiMeetExternalAPI);const i=document.createElement("script"),u=r?`?release=${r}`:"",m=a?`${a}/`:"";i.async=!0,i.src=`https://${e}/${m}external_api.js${u}`,i.onload=()=>n(window.JitsiMeetExternalAPI),i.onerror=()=>d(new Error(`Script load error: ${i.src}`)),document.head.appendChild(i)})});let L;const Xe=(e=ne,r,a)=>L||(L=Ke(e,r,a),L),Ye=(e,r)=>r?`${r}/${e}`:e,Ze=e=>{const r=e.split("/");if(!(r.length<=1))return r[0]},et=e=>e?We:Ve;let tt=0;const V=e=>`${e}-${tt++}`,nt=({domain:e=ne,roomName:r,configOverwrite:a,interfaceConfigOverwrite:n,jwt:d,invitees:i,devices:u,userInfo:m,release:s,lang:p,spinner:g,onApiReady:c,onReadyToClose:f,getIFrameRef:C})=>{const[h,x]=o.useState(!0),[l,_]=o.useState(!1),j=o.useRef(),E=o.useRef(),T=o.useRef(null),y=o.useMemo(()=>V("jitsiMeeting"),[V]);o.useEffect(()=>{Xe(e,s,Ze(r)).then(S=>{j.current=S,_(!0)}).catch(S=>console.error(S.message))},[]);const I=o.useCallback(S=>{E.current=new S(e,{roomName:r,configOverwrite:a,interfaceConfigOverwrite:n,jwt:d,invitees:i,devices:u,userInfo:m,release:s,lang:p,parentNode:T.current}),x(!1),E.current&&(typeof c=="function"&&c(E.current),E.current.on("readyToClose",()=>{typeof f=="function"&&f()}),T.current&&typeof C=="function"&&C(T.current))},[E,T,c,f,C,e,r,a,n,d,i,u,m,s,p]);o.useEffect(()=>{l&&!E.current&&j.current&&I(j.current)},[l,I]);const D=o.useCallback(()=>!g||!h||E.current?null:t.jsx(g,{},void 0),[g,E.current]);return t.jsxs(t.Fragment,{children:[D(),t.jsx("div",{id:y,ref:T},y)]},void 0)};var st=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(e);d<n.length;d++)r.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(e,n[d])&&(a[n[d]]=e[n[d]]);return a};const rt=e=>{var{appId:r,roomName:a,useStaging:n,release:d}=e,i=st(e,["appId","roomName","useStaging","release"]);return t.jsx(nt,Object.assign({domain:et(n),roomName:Ye(a,r),release:d},i),void 0)},at=()=>{const[e,r]=o.useState(!1),a=o.useRef(null),n=o.useRef(null),d=o.useCallback(async()=>{try{const s=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});return r(!0),a.current=s,n.current||(n.current=document.createElement("video"),n.current.muted=!0,n.current.playsInline=!0),n.current.srcObject=s,n.current.play(),n.current}catch(s){return console.error("Camera access denied or not available:",s),r(!1),null}},[]),i=o.useCallback(async()=>(a.current&&a.current.getTracks().forEach(s=>s.stop()),await d()),[d]),u=async()=>await d(),m=async()=>{if(n.current&&a.current){const s=document.createElement("canvas"),p=s.getContext("2d"),c=a.current.getVideoTracks()[0].getSettings();s.height=c.height||0,s.width=c.width||0,p==null||p.drawImage(n.current,0,0);const f=s.toDataURL("image/png",1);return p==null||p.clearRect(0,0,s.width,s.height),s.remove(),f}return null};return o.useEffect(()=>{(async()=>{const p=await navigator.permissions.query({name:"camera"});p.state==="granted"&&await i(),p.onchange=async()=>{p.state==="granted"?await i():r(!1)}})()},[i]),{camera:u,hasCameraAccess:e,restartVideoTrack:i,getDataUrl:m}},ot=e=>{const r=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),d=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),u=String(e.getSeconds()).padStart(2,"0");return`${r}-${a}-${n} ${d}:${i}:${u}`},it=(e,r,a,n,d,i="aaa.png")=>{fetch(n).then(u=>u.blob()).then(u=>{const m=new FormData;m.append("name",i),m.append("file",new File([u],i,{type:"image/png"})),m.append("consultation_id",e.toString()),m.append("user_termin_id",r.toString()),m.append("user_email",a),m.append("timestamp",ot(new Date)),fetch(`${Q}/api/consultations/save-screen?executed_at=${d}`,{method:"POST",body:m}).then(()=>{}).catch(s=>console.log(s))}).catch(u=>console.log(u))},ct=async e=>{const a=(await e.getRoomsInfo()).rooms.find(n=>n.isMainRoom);return a==null?void 0:a.participants.find(n=>n.id===e._myUserID)},dt=v.div`
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
`,ut=({message:e,closeToast:r,userConsentedRef:a})=>{const{t:n}=b();return t.jsxs(dt,{className:"jitsy-message",children:[t.jsx(me.Title,{className:"jitsy-message__title",children:n("ConsultationPage.EmotionConsent")}),t.jsx(N.Text,{size:"16",children:e}),t.jsxs(lt,{children:[t.jsx(O.Button,{onClick:()=>[a.current=!0,r()],children:n("ConsultationPage.Yes")}),t.jsx(O.Button,{mode:"secondary",onClick:()=>[a.current=!1,r()],children:n("ConsultationPage.No")})]})]})},mt=v(Z.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,ft=.3,pt=({jitsyData:e,term:r,consultationTermId:a,consultationId:n,close:d})=>{const[i,u]=o.useState(!1),{camera:m,getDataUrl:s,hasCameraAccess:p}=at(),g=o.useRef(!1),c=o.useRef(!1),f=o.useRef(null),{isStudent:C}=B(),{t:h}=b(),x=o.useCallback(()=>{console.log("Video conference joined"),c.current=!0},[]),l=o.useCallback(()=>{console.log("Video conference left"),c.current=!1},[]),_=o.useCallback(async(y,I,D)=>{D.on?(console.log("Recording has started in mode:",D.mode),f.current||(f.current=setInterval(async()=>{const S=await I(),J=await ct(y);J&&(console.log("Saving image..."),S?it(n??0,a,e.data.userInfo.email,S,r,`${J.displayName}.png`):console.error("Failed to get data URL for saving image."))},1e3/ft))):(console.log("Recording has stopped."),f.current&&(clearInterval(f.current),f.current=null),D.error&&console.error("Recording error:",D.error))},[n,a,e.data.userInfo.email,r]),j=o.useCallback(async y=>{window.api=y,await m(),y.addListener("videoConferenceJoined",()=>x()),y.addListener("videoConferenceLeft",()=>l()),y.on("recordingStatusChanged",I=>{s&&g.current?_(y,async()=>await s(),I):console.error("User has not consented to record video or data url is not available.")})},[m,x,l,s,_]),E=()=>{var y;d&&d(),(y=window.api)==null||y.dispose()},T=o.useCallback(()=>{const y=/\/([^/?]+)\?/,I=e.url.match(y);return I?I[1]:e.data.roomName},[e]);return o.useEffect(()=>()=>{f.current&&clearInterval(f.current)},[]),o.useEffect(()=>(setTimeout(()=>{p&&c&&C&&u(!0)},5e3),()=>{}),[p,c,C,h]),t.jsxs(t.Fragment,{children:[e&&t.jsx(rt,{jwt:e.data.jwt,appId:e.data.app_id,roomName:T(),getIFrameRef:y=>{y.style.height="calc(100vh - 76px)",y.style.width="100%"},onApiReady:j,onReadyToClose:E,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1}}}),t.jsx(mt,{onClose:()=>u(!1),visible:i,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(ut,{message:h("ConsultationPage.AdditionalRecording"),closeToast:()=>u(!1),userConsentedRef:g})})]})},gt=({entityId:e,entityModel:r,onSuccesGetQuestionnaires:a,setIsEnded:n})=>{const{questionnaires:d,loading:i,getQuestionnaires:u}=we({entityId:e||0,entityModel:r}),[m,s]=o.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:p,isTutor:g}=B(),c=o.useMemo(()=>d.filter(x=>x.models.some(l=>l.model_type_title===r?l.model_type_title===F.CONSULTATION?p&&l.target_group==="user"||g&&l.target_group==="author":!0:!1)),[d,p,g,r]),f=o.useCallback(()=>{if(!c)return;const x=c.reduce((l,_)=>{var E;const j=(E=_.models.find(T=>T.model_type_title===r&&T.model_id===e))==null?void 0:E.display_frequency_minutes;return j!=null&&j===0&&l.endMeetingQuestionnaires.push(_),l},{endMeetingQuestionnaires:[]});s(l=>({...l,...x}))},[c,r,e]),C=o.useCallback(()=>{s(l=>({...l,step:l.step+1}));const x=setTimeout(()=>{s(l=>({...l,show:!0}))},500);return()=>clearTimeout(x)},[]),h=o.useCallback(()=>{s(x=>({...x,show:!1})),m.step<m.endMeetingQuestionnaires.length-1?C():(s(x=>({...x,show:!1})),n&&n(!1))},[m,C,n]);return o.useEffect(()=>{u()},[e]),o.useEffect(()=>{f()},[c,f,a]),o.useEffect(()=>{let x;return m.endMeetingQuestionnaires.length&&s(l=>({...l,show:!0})),()=>{clearTimeout(x)}},[c,m.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:m.show&&e&&!!c.length&&!i&&t.jsx(Ee,{entityModel:r,entityId:Number(e),visible:m.show,onClose:h,questionnaire:m.endMeetingQuestionnaires[m.step]})})},ht=({onClose:e})=>{var g,c,f,C,h;const[r,a]=o.useState(null),[n,d]=o.useState(!1),[i,u]=o.useState(!1),{generateConsultationJitsy:m}=o.useContext(q.EscolaLMSContext),s=o.useContext(ee);o.useEffect(()=>((async()=>{var l,_;if(u(!0),s!=null&&s.consultationData){const j=await m((l=s==null?void 0:s.consultationData)==null?void 0:l.consultationTermId,(_=s==null?void 0:s.consultationData)==null?void 0:_.term);j.success&&a(j.data),u(!1)}})(),()=>{Object.keys(localStorage).forEach(l=>{l.startsWith("questionnaire_")&&localStorage.removeItem(l)})}),[s==null?void 0:s.consultationData]),o.useEffect(()=>{d(!1)},[s==null?void 0:s.consultationData]);const p=o.useCallback(()=>{var x;d(!0),(x=s==null?void 0:s.setModalOpen)==null||x.call(s,!1),e()},[d,e,s]);return t.jsxs(t.Fragment,{children:[t.jsxs(Z.Modal,{onClose:p,visible:s==null?void 0:s.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(Ge,{children:[i&&t.jsx(fe,{}),!i&&r&&t.jsx(pt,{jitsyData:r,close:p,consultationId:(g=s==null?void 0:s.consultationData)==null?void 0:g.consultationId,consultationTermId:((c=s==null?void 0:s.consultationData)==null?void 0:c.consultationTermId)??0,term:((f=s==null?void 0:s.consultationData)==null?void 0:f.term)??""})]}),t.jsx(ve,{entityId:Number((C=s==null?void 0:s.consultationData)==null?void 0:C.consultationId),entityModel:F.CONSULTATION})]}),n&&t.jsx(gt,{entityId:Number((h=s==null?void 0:s.consultationData)==null?void 0:h.consultationId),entityModel:F.CONSULTATION,setIsEnded:d})]})};var k=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(k||{});const Mt=()=>{const{t:e}=b(),{isTutor:r}=B(),a=o.useContext(ee),n=o.useMemo(()=>({tabs:r?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(W,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(W,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx($,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx($,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx($,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx($,{type:"is_ended"})}],defaultActiveKey:1}),[r,e]);return t.jsx(pe,{children:t.jsx(he,{children:t.jsxs(ge,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(xe.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})}),t.jsx(ht,{onClose:()=>[a==null?void 0:a.setModalOpen(!1)]})]})})})};export{k as ConsultationStatus,Mt as default};

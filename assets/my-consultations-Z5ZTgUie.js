import{r as n,i as Z,h as b,ar as ee,j as t,V as k,y as P,o as te,q as I,L as le,ax as ue,X as me,N as J,aP as F,aQ as re,aR as se,aS as V,aT as H,aw as fe,al as pe,aU as ge,g as he,z as Q,aV as xe,aW as Ce,T as je,F as ne,aX as ae,a0 as ye,v as _e,C as we}from"./index-CHBp5M0J.js";import{a as Ee,T as ve}from"./index-Dz-AUX8r.js";import{C as oe,a as Ie}from"./CourseCard-C9vL_g0Z.js";import{P as Te,C as be,D as R,a as N,b as Ae}from"./index-BzI_0Vw1.js";import{u as z,R as Se}from"./useRoles-C8kZX9ab.js";import{Q as q}from"./questionnaire-CXWDgbJ4.js";import{u as De,Q as ke}from"./index-DPBy7mM-.js";import"./questionnaires-BjwmVKbo.js";import"./useDownloadCertificate-B0zYx3Bd.js";import"./base-7gvCcPfx.js";import"./index-BW2f3MTf.js";import"./swiper-DV-PiC9Z.js";import"./swiper-react-ibs1HSAe.js";import"./a11y-CPGwJ9Sh.js";import"./index-Dk-TGFHx.js";import"./floating-ui.react-dom-C012_T7f.js";import"./index-4d92tbBR.js";const Pe=({type:e})=>{var f;const{userConsultations:r,fetchUserConsultations:a,token:s}=n.useContext(Z.EscolaLMSContext),{t:l}=b(),[c,m]=n.useState([]),g=n.useMemo(()=>{var x;const i=((x=r.list)==null?void 0:x.data.filter(C=>e===M.STARTED||e===M.UPCOMING?C.in_coming||C.is_started:C.is_ended))||[];return Array.from(new Map(i.map(C=>[C.id,C])).values())},[e,(f=r.list)==null?void 0:f.data]),o=n.useCallback(async(i,p)=>{try{const C=await(await fetch(`${ee}/api/consultations/me?ids[]=${i}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}})).json();if(C.success&&C.data.length>0){const h=C.data.findIndex(d=>(d==null?void 0:d.consultation_term_id)===p);m(d=>{const _=d.findIndex(j=>(j==null?void 0:j.consultation_term_id)===p);return _!==-1&&h!==-1&&(d[_]=C.data[h]),[...d]})}}catch(x){console.error(x)}},[s]),u=n.useCallback(()=>{c.forEach(i=>{!i.is_started&&!i.is_ended&&(i==null?void 0:i.consultation_term_id)!==void 0&&o(i==null?void 0:i.id,i==null?void 0:i.consultation_term_id)})},[c,o]);return n.useEffect(()=>{a()},[e,a]),n.useEffect(()=>{m([]),m(g);const i=setInterval(()=>{u()},3e4);return()=>{m([]),clearInterval(i)}},[e,g,u]),t.jsx(Te,{children:t.jsx(k.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((i,p)=>t.jsx(k.Col,{md:3,children:t.jsx(oe,{})},`skeleton-card-${p}`)):c.length===0?t.jsx(P.Text,{style:{paddingLeft:te?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:c.map(i=>t.jsx(k.Col,{xs:12,md:6,lg:3,children:t.jsx(be,{consultation:i})},i.id))})})})},$=n.memo(Pe),Re=I.div`
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
`,Ne=({product:e})=>{var r;return e?t.jsx(le,{to:`/consultations/${e==null?void 0:e.consultation_term_id}`,children:e!=null&&e.consultation_media&&((r=e==null?void 0:e.consultation_media)!=null&&r.image_path)?t.jsx(ue,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(Ie,{})}):null},Me=I.div`
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
`;var v=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(v||{});const A=({status:e,name:r})=>{const a=me(),s=n.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return a.primaryColor}},[a.primaryColor,e]);return t.jsxs(Me,{children:[t.jsx("div",{className:"status",style:{backgroundColor:s}}),t.jsx("div",{className:"name",children:r})]})},Le=I.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,Ue=I.div`
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
`,Oe={reported:{type:v.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:v.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:v.ENDED,info:"ConsultationStatus.RejectedInfo"}},$e=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:a}=n.useContext(J.EscolaLMSContext),{t:s}=b(),l=c=>{switch(c){case"reported":return t.jsx(A,{status:v.WAITING,name:s("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(A,{status:v.ACCEPTED,name:s("ConsultationStatus.Appointment")});case"reject":return t.jsx(A,{status:v.ENDED,name:s("ConsultationStatus.Canceled")})}};return t.jsx(Le,{children:e.users.map(c=>t.jsxs("div",{children:[t.jsxs(P.Text,{className:"text",children:[c.first_name," ",c.last_name]}),t.jsx(P.Text,{className:"text",children:c.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Oe[c.executed_status]&&l(c.executed_status),t.jsxs(Ue,{children:[t.jsx(F,{icon:t.jsx(re,{}),text:s("Confirm"),onClick:()=>r(e==null?void 0:e.consultation_term_id,e.date,c.id)}),t.jsx(F,{icon:t.jsx(se,{}),text:s("Cancel"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date,c.id)})]})]}),t.jsx("hr",{})]},c.id))})},We=I.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Fe=({consultation:e})=>{const{t:r}=b(),a=e.is_ended,s=e.is_started,l=e.status==="reported",c=e.status==="approved",m=e.status==="not_reported",g=e.status==="reject";return t.jsxs(t.Fragment,{children:[a&&e.date&&t.jsx(R,{type:N.ENDED,date:V(e.date,H(`${e.duration}`))}),g&&t.jsx(R,{type:N.ENDED,date:V(e.date,H(`${e.duration}`))}),l&&!a&&t.jsx(R,{type:N.WAITING,date:e.date,info:r("ConsultationStatus.UnconfirmedInfo")}),c&&!a&&t.jsx(R,{type:N.ACCEPTED,date:e.date,info:s&&(e!=null&&e.consultation_term_id)?t.jsx(We,{children:t.jsx(Ae,{consultationTermId:e==null?void 0:e.consultation_term_id,consultationId:e==null?void 0:e.consultation_id,term:e.date})}):r("ConsultationStatus.AppointmentInfo",{date:fe(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),m&&t.jsx(R,{type:N.DEFAULT})]})},Be=I.div`
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
`,Qe=({time:e})=>t.jsxs(Be,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(pe,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(P.Text,{className:"time",children:e})]}),qe=I.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,Je=({consultation:e})=>t.jsxs(qe,{children:[t.jsx($e,{consultation:e}),t.jsx(Qe,{time:e.duration}),t.jsx(Fe,{consultation:e})]});var ze=ge();const Ge=he(ze),Ve=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:a}=n.useContext(J.EscolaLMSContext),{t:s}=b(),l=n.useMemo(()=>[{id:1,content:t.jsx(F,{icon:t.jsx(re,{}),text:s("Confirm"),onClick:()=>r(e==null?void 0:e.consultation_term_id,e.date)})},{id:2,content:t.jsx(F,{icon:t.jsx(se,{}),text:s("Cancel"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date)})}],[r,e==null?void 0:e.consultation_term_id,a,s,e.date]);return t.jsx(Ge,{menuItems:l,child:t.jsx(Q.Button,{mode:"icon",children:t.jsx(xe,{})})})},He=I.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,Ke=({consultation:e})=>{const{status:r,is_ended:a}=e,{t:s}=b(),l=r==="reported",c=r==="approved";return r==="reject"?t.jsx(A,{status:v.CANCELED,name:s("ConsultationStatus.Canceled")}):a?t.jsx(A,{status:v.ENDED,name:s("ConsultationStatus.Ended")}):l?t.jsxs(He,{children:[t.jsx(A,{status:v.WAITING,name:s("ConsultationStatus.Unconfirmed")}),t.jsx(Ve,{consultation:e})]}):c?t.jsx(A,{status:v.ACCEPTED,name:s("ConsultationStatus.Appointment")}):t.jsx(A,{status:v.DEFAULT,name:r})},Xe=e=>{var a;const{consultation:r}=e;return t.jsx(Re,{children:t.jsx(Ce,{id:r==null?void 0:r.consultation_term_id,image:t.jsx(Ne,{product:r}),title:t.jsx(Ke,{consultation:r}),subtitle:t.jsx("p",{children:(a=r==null?void 0:r.related_product)==null?void 0:a.name}),footer:t.jsx(Je,{consultation:r})})})},Ye=({type:e})=>{var f;const{tutorConsultations:r,fetchTutorConsultations:a,token:s}=n.useContext(Z.EscolaLMSContext),{t:l}=b(),[c,m]=n.useState([]),g=n.useMemo(()=>{var i;return((i=r.list)==null?void 0:i.data.filter(p=>e===M.STARTED||e===M.UPCOMING?p.in_coming||p.is_started:p.is_ended))||[]},[e,(f=r.list)==null?void 0:f.data]),o=n.useCallback(async(i,p)=>{try{const C=await(await fetch(`${ee}/api/consultations/my-schedule?ids[]=${i}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}})).json();if(C.success&&C.data.length>0){const h=C.data.findIndex(d=>(d==null?void 0:d.consultation_term_id)===p);m(d=>{const _=d.findIndex(j=>(j==null?void 0:j.consultation_term_id)===p);return _!==-1&&h!==-1&&(d[_]=C.data[h]),[...d]})}}catch(x){console.error(x)}},[s]),u=n.useCallback(()=>{c.forEach(i=>{!i.is_started&&!i.is_ended&&o(i==null?void 0:i.consultation_id,i.consultation_term_id)})},[c,o]);return n.useEffect(()=>{a()},[a]),n.useEffect(()=>{m([]),m(g);const i=setInterval(()=>{u()},3e4);return()=>{m([]),clearInterval(i)}},[e,g,u]),t.jsx(t.Fragment,{children:t.jsx(k.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((i,p)=>t.jsx(k.Col,{md:3,children:t.jsx(oe,{})},`skeleton-card-${p}`)):c.length===0?t.jsx(P.Text,{style:{paddingLeft:te?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",c.map(i=>t.jsx(k.Col,{xs:12,md:6,lg:3,children:t.jsx(Xe,{consultation:i})},i.consultation_term_id))]})})})},K=n.memo(Ye),Ze=I.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,ie="meet.jit.si",et="stage.8x8.vc",tt="8x8.vc";var rt=function(e,r,a,s){function l(c){return c instanceof a?c:new a(function(m){m(c)})}return new(a||(a=Promise))(function(c,m){function g(f){try{u(s.next(f))}catch(i){m(i)}}function o(f){try{u(s.throw(f))}catch(i){m(i)}}function u(f){f.done?c(f.value):l(f.value).then(g,o)}u((s=s.apply(e,r||[])).next())})};const st=(e,r,a)=>rt(void 0,void 0,void 0,function*(){return new Promise((s,l)=>{if(window.JitsiMeetExternalAPI)return s(window.JitsiMeetExternalAPI);const c=document.createElement("script"),m=r?`?release=${r}`:"",g=a?`${a}/`:"";c.async=!0,c.src=`https://${e}/${g}external_api.js${m}`,c.onload=()=>s(window.JitsiMeetExternalAPI),c.onerror=()=>l(new Error(`Script load error: ${c.src}`)),document.head.appendChild(c)})});let W;const nt=(e=ie,r,a)=>W||(W=st(e,r,a),W),at=(e,r)=>r?`${r}/${e}`:e,ot=e=>{const r=e.split("/");if(!(r.length<=1))return r[0]},it=e=>e?et:tt;let ct=0;const X=e=>`${e}-${ct++}`,dt=({domain:e=ie,roomName:r,configOverwrite:a,interfaceConfigOverwrite:s,jwt:l,invitees:c,devices:m,userInfo:g,release:o,lang:u,spinner:f,onApiReady:i,onReadyToClose:p,getIFrameRef:x})=>{const[C,h]=n.useState(!0),[d,_]=n.useState(!1),j=n.useRef(),w=n.useRef(),T=n.useRef(null),L=n.useMemo(()=>X("jitsiMeeting"),[X]);n.useEffect(()=>{nt(e,o,ot(r)).then(E=>{j.current=E,_(!0)}).catch(E=>console.error(E.message))},[]);const U=n.useCallback(E=>{w.current=new E(e,{roomName:r,configOverwrite:a,interfaceConfigOverwrite:s,jwt:l,invitees:c,devices:m,userInfo:g,release:o,lang:u,parentNode:T.current}),h(!1),w.current&&(typeof i=="function"&&i(w.current),w.current.on("readyToClose",()=>{typeof p=="function"&&p()}),T.current&&typeof x=="function"&&x(T.current))},[w,T,i,p,x,e,r,a,s,l,c,m,g,o,u]);n.useEffect(()=>{d&&!w.current&&j.current&&U(j.current)},[d,U]);const y=n.useCallback(()=>!f||!C||w.current?null:t.jsx(f,{},void 0),[f,w.current]);return t.jsxs(t.Fragment,{children:[y(),t.jsx("div",{id:L,ref:T},L)]},void 0)};var lt=function(e,r){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(a[s[l]]=e[s[l]]);return a};const ut=e=>{var{appId:r,roomName:a,useStaging:s,release:l}=e,c=lt(e,["appId","roomName","useStaging","release"]);return t.jsx(dt,Object.assign({domain:it(s),roomName:at(a,r),release:l},c),void 0)},mt=()=>{const[e,r]=n.useState(!1),a=n.useRef(null),s=n.useRef(null),l=n.useRef(null),c=n.useCallback(async()=>{try{const u=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720}},audio:!1});return r(!0),a.current=u,s.current||(s.current=document.createElement("video"),s.current.muted=!0,s.current.playsInline=!0),s.current.srcObject=u,s.current.play(),s.current}catch(u){return console.error("Camera access denied or not available:",u),r(!1),null}},[]),m=n.useCallback(async()=>(a.current&&a.current.getTracks().forEach(u=>u.stop()),await c()),[c]),g=async()=>await c(),o=async()=>{if(s.current&&a.current){const u=document.createElement("canvas"),f=u.getContext("2d"),p=a.current.getVideoTracks()[0].getSettings();u.height=p.height||720,u.width=p.width||1280,f==null||f.drawImage(s.current,0,0,u.width,u.height);const x=await createImageBitmap(u);return l.current||(l.current=new Worker(new URL("/assets/dataUrlWorker-0-pOUrAF.js",import.meta.url),{type:"module"})),new Promise((C,h)=>{l.current.onmessage=d=>{const{success:_,blob:j,error:w}=d.data;_&&j?C(j):h(w||"Unknown error occurred in Web Worker.")},l.current.onerror=d=>{console.error("Worker error:",d),h("Web Worker encountered an error.")},l.current.postMessage({canvasData:x,width:u.width,height:u.height})})}return null};return n.useEffect(()=>((async()=>{const f=await navigator.permissions.query({name:"camera"});f.state==="granted"&&await m(),f.onchange=async()=>{f.state==="granted"?await m():r(!1)}})(),()=>{l.current&&l.current.terminate()}),[m]),{camera:g,hasCameraAccess:e,restartVideoTrack:m,getDataUrl:o}},ft=async e=>{const a=(await e.getRoomsInfo()).rooms.find(s=>s.isMainRoom);return a==null?void 0:a.participants.find(s=>s.id===e._myUserID)},pt=I.div`
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
`,gt=I.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  button {
    min-width: 130px;
  }
`,ht=({message:e,closeToast:r,userConsentedRef:a})=>{const{t:s}=b();return t.jsxs(pt,{className:"jitsy-message",children:[t.jsx(je.Title,{className:"jitsy-message__title",children:s("ConsultationPage.EmotionConsent")}),t.jsx(P.Text,{size:"16",children:e}),t.jsxs(gt,{children:[t.jsx(Q.Button,{onClick:()=>[a.current=!0,r()],children:s("ConsultationPage.Yes")}),t.jsx(Q.Button,{mode:"secondary",onClick:()=>[a.current=!1,r()],children:s("ConsultationPage.No")})]})]})},xt=I(ne.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,Y=3,Ct=3e3,jt=({jitsyData:e,term:r,consultationTermId:a,consultationId:s,close:l})=>{const[c,m]=n.useState(!1),{camera:g,getDataUrl:o,hasCameraAccess:u}=mt(),f=n.useRef(!1),i=n.useRef(!1),p=n.useRef(null),x=n.useRef(null),{isStudent:C}=z(),{t:h}=b(),d=n.useCallback(()=>{console.log("Video conference joined"),i.current=!0},[]),_=n.useCallback(()=>{console.log("Video conference left"),i.current=!1},[]),j=n.useCallback((y,E,S,D,O,G)=>{x.current||(x.current=new Worker(new URL("/assets/saveImageWorker-DPPfx0Pz.js",import.meta.url),{type:"module"})),x.current.onmessage=B=>{const{success:ce,error:de}=B.data;ce?console.log("Images saved successfully via Worker."):console.error("Error saving images in Worker:",de)},x.current.onerror=B=>{console.error("Worker encountered an error:",B)},x.current.postMessage({consultationId:y,consultationTermId:E,userEmail:S,userId:D,screenshots:O,term:G})},[]),w=n.useCallback(async(y,E,S)=>{if(S.on){console.log("Recording has started in mode:",S.mode);let D=[];p.current||(p.current=setInterval(async()=>{const O=await E();O?(D.push({dataURL:O,timestamp:new Date().getTime()}),D.length===Y*(Ct/1e3)&&(await ft(y)?(console.log("Saving images..."),j(s??0,a,e.data.userInfo.email,e.data.userInfo.id,D,r),D=[]):console.error("Failed to get current user for saving images."))):console.error("Failed to get data URL for screenshot.")},1e3/Y))}else console.log("Recording has stopped."),p.current&&(clearInterval(p.current),p.current=null),S.error&&console.error("Recording error:",S.error)},[s,a,e.data.userInfo.email,e.data.userInfo.id,r,j]),T=n.useCallback(async y=>{window.api=y,await g(),y.addListener("videoConferenceJoined",()=>d()),y.addListener("videoConferenceLeft",()=>_()),y.on("recordingStatusChanged",E=>{f.current&&w(y,async()=>await o(),E)})},[g,d,_,o,w,f]),L=()=>{var y;l&&l(),(y=window.api)==null||y.dispose()},U=n.useCallback(()=>{const y=/\/([^/?]+)\?/,E=e.url.match(y);return E?E[1]:e.data.roomName},[e]);return n.useEffect(()=>()=>{x.current&&x.current.terminate(),p.current&&clearInterval(p.current)},[]),n.useEffect(()=>(u&&i&&C&&m(!0),()=>{}),[u,i,C,h]),t.jsxs(t.Fragment,{children:[e&&!c&&t.jsx(ut,{jwt:e.data.jwt,appId:e.data.app_id,roomName:U(),getIFrameRef:y=>{y.style.height="calc(100vh - 76px)",y.style.width="100%"},onApiReady:T,onReadyToClose:L,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1}}}),t.jsx(xt,{onClose:()=>m(!1),visible:c,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(ht,{message:h("ConsultationPage.AdditionalRecording"),closeToast:()=>m(!1),userConsentedRef:f})})]})},yt=({entityId:e,entityModel:r,onSuccesGetQuestionnaires:a,setIsEnded:s})=>{const{questionnaires:l,loading:c,getQuestionnaires:m}=De({entityId:e||0,entityModel:r}),[g,o]=n.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:u,isTutor:f}=z(),i=n.useMemo(()=>l.filter(h=>h.models.some(d=>d.model_type_title===r?d.model_type_title===q.CONSULTATION?u&&d.target_group==="user"||f&&d.target_group==="author":!0:!1)),[l,u,f,r]),p=n.useCallback(()=>{if(!i)return;const h=i.reduce((d,_)=>{var w;const j=(w=_.models.find(T=>T.model_type_title===r&&T.model_id===e))==null?void 0:w.display_frequency_minutes;return j!=null&&j===0&&d.endMeetingQuestionnaires.push(_),d},{endMeetingQuestionnaires:[]});o(d=>({...d,...h}))},[i,r,e]),x=n.useCallback(()=>{o(d=>({...d,step:d.step+1}));const h=setTimeout(()=>{o(d=>({...d,show:!0}))},500);return()=>clearTimeout(h)},[]),C=n.useCallback(()=>{o(h=>({...h,show:!1})),g.step<g.endMeetingQuestionnaires.length-1?x():(o(h=>({...h,show:!1})),s&&s(!1))},[g,x,s]);return n.useEffect(()=>{m()},[e]),n.useEffect(()=>{p()},[i,p,a]),n.useEffect(()=>{let h;return g.endMeetingQuestionnaires.length&&o(d=>({...d,show:!0})),()=>{clearTimeout(h)}},[i,g.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:g.show&&e&&!!i.length&&!c&&t.jsx(Se,{entityModel:r,entityId:Number(e),visible:g.show,onClose:C,questionnaire:g.endMeetingQuestionnaires[g.step]})})},_t=({onClose:e})=>{var f,i,p,x,C;const[r,a]=n.useState(null),[s,l]=n.useState(!1),[c,m]=n.useState(!1),{generateConsultationJitsy:g}=n.useContext(J.EscolaLMSContext),o=n.useContext(ae);n.useEffect(()=>((async()=>{var d,_;if(m(!0),o!=null&&o.consultationData){const j=await g((d=o==null?void 0:o.consultationData)==null?void 0:d.consultationTermId,(_=o==null?void 0:o.consultationData)==null?void 0:_.term);j.success&&a(j.data),m(!1)}})(),()=>{Object.keys(localStorage).forEach(d=>{d.startsWith("questionnaire_")&&localStorage.removeItem(d)})}),[o==null?void 0:o.consultationData]),n.useEffect(()=>{l(!1)},[o==null?void 0:o.consultationData]);const u=n.useCallback(()=>{var h;l(!0),(h=o==null?void 0:o.setModalOpen)==null||h.call(o,!1),e()},[l,e,o]);return t.jsxs(t.Fragment,{children:[t.jsxs(ne.Modal,{onClose:u,visible:o==null?void 0:o.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(Ze,{children:[c&&t.jsx(ye,{}),!c&&r&&t.jsx(jt,{jitsyData:r,close:u,consultationId:(f=o==null?void 0:o.consultationData)==null?void 0:f.consultationId,consultationTermId:((i=o==null?void 0:o.consultationData)==null?void 0:i.consultationTermId)??0,term:((p=o==null?void 0:o.consultationData)==null?void 0:p.term)??""})]}),t.jsx(ke,{entityId:Number((x=o==null?void 0:o.consultationData)==null?void 0:x.consultationId),entityModel:q.CONSULTATION})]}),s&&t.jsx(yt,{entityId:Number((C=o==null?void 0:o.consultationData)==null?void 0:C.consultationId),entityModel:q.CONSULTATION,setIsEnded:l})]})};var M=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(M||{});const $t=()=>{const{t:e}=b(),{isTutor:r}=z(),a=n.useContext(ae),s=n.useMemo(()=>({tabs:r?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(K,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(K,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx($,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx($,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx($,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx($,{type:"is_ended"})}],defaultActiveKey:1}),[r,e]);return t.jsx(_e,{children:t.jsx(Ee,{children:t.jsxs(we,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(ve.Tabs,{tabs:s.tabs,defaultActiveKey:s.defaultActiveKey})}),t.jsx(_t,{onClose:()=>[a==null?void 0:a.setModalOpen(!1)]})]})})})};export{M as ConsultationStatus,$t as default};
//# sourceMappingURL=my-consultations-Z5ZTgUie.js.map

import{c as ne,a as k,a9 as V,j as t,J as M,o as T,g as ae,q as _,L as Ce,as as je,X as ye,D as H,aK as J,aL as oe,aM as ie,aN as Z,aO as ee,ar as we,ah as be,aP as ve,p as $,aQ as _e,aR as Ee,T as Ie,w as ce,aS as de,U as Te,k as ke,C as Ae}from"./index-aC1vIBhc.js";import{r as a}from"./sentry-DZqhWugq.js";import{a as Se,T as De}from"./index-C8w9QFVc.js";import{C as le,b as Ne}from"./CourseCard-CspsM_KU.js";import{P as Pe,C as Re,D as U,a as O,b as Me}from"./index-CjtFc1bh.js";import{g as Le}from"./katex-D1m830yy.js";import{u as K,R as Ue}from"./useRoles-D1x0CTSo.js";import{S as N}from"./index-B7vnVY_d.js";import{Q as z}from"./questionnaire-CXWDgbJ4.js";import{u as Oe,Q as $e}from"./index-D6AfCGkl.js";import"./lodash-Bu-jC-fW.js";import"./questionnaires-C93eNu13.js";import"./useDownloadCertificate-BvI5Cvdz.js";import"./base-p0-tgtY_.js";import"./index-ce3Q708w.js";import"./swiper-BV6lyAXY.js";import"./swiper-CphuuvCl.js";import"./index-sfnwQdC2.js";const We=({type:e})=>{var h;const{userConsultations:r,fetchUserConsultations:i,token:n}=a.useContext(ne.EscolaLMSContext),{t:l}=k(),[c,u]=a.useState([]),m=a.useMemo(()=>{var j;const s=((j=r.list)==null?void 0:j.data.filter(g=>e===W.STARTED||e===W.UPCOMING?g.in_coming||g.is_started:g.is_ended))||[];return Array.from(new Map(s.map(g=>[g.id,g])).values())},[e,(h=r.list)==null?void 0:h.data]),o=a.useCallback(async(s,f)=>{try{const g=await(await fetch(`${V}/api/consultations/me?ids[]=${s}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}})).json();if(g.success&&g.data.length>0){const p=g.data.findIndex(d=>(d==null?void 0:d.consultation_term_id)===f);u(d=>{const w=d.findIndex(x=>(x==null?void 0:x.consultation_term_id)===f);return w!==-1&&p!==-1&&(d[w]=g.data[p]),[...d]})}}catch(j){console.error(j)}},[n]),C=a.useCallback(()=>{c.forEach(s=>{!s.is_started&&!s.is_ended&&(s==null?void 0:s.consultation_term_id)!==void 0&&o(s==null?void 0:s.id,s==null?void 0:s.consultation_term_id)})},[c,o]);return a.useEffect(()=>{i()},[e,i]),a.useEffect(()=>{u([]),u(m);const s=setInterval(()=>{C()},3e4);return()=>{u([]),clearInterval(s)}},[e,m,C]),t.jsx(Pe,{children:t.jsx(M.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((s,f)=>t.jsx(M.Col,{md:3,children:t.jsx(le,{})},`skeleton-card-${f}`)):c.length===0?t.jsx(T.Text,{style:{paddingLeft:ae?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:c.map(s=>t.jsx(M.Col,{xs:12,md:6,lg:3,children:t.jsx(Re,{consultation:s})},s.id))})})})},Q=a.memo(We),Be=_.div`
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
`,Fe=({product:e})=>{var r;return e?t.jsx(Ce,{to:`/consultations/${e==null?void 0:e.consultation_id}`,children:e!=null&&e.consultation_media&&((r=e==null?void 0:e.consultation_media)!=null&&r.image_path)?t.jsx(je,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(Ne,{})}):null},Qe=_.div`
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
`;var I=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(I||{});const S=({status:e,name:r})=>{const i=ye(),n=a.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return i.primaryColor}},[i.primaryColor,e]);return t.jsxs(Qe,{children:[t.jsx("div",{className:"status",style:{backgroundColor:n}}),t.jsx("div",{className:"name",children:r})]})},qe=_.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,Je=_.div`
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
`,Ge={reported:{type:I.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:I.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:I.ENDED,info:"ConsultationStatus.RejectedInfo"}},ze=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:i}=a.useContext(H.EscolaLMSContext),{t:n}=k(),l=c=>{switch(c){case"reported":return t.jsx(S,{status:I.WAITING,name:n("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(S,{status:I.ACCEPTED,name:n("ConsultationStatus.Appointment")});case"reject":return t.jsx(S,{status:I.ENDED,name:n("ConsultationStatus.Canceled")})}};return t.jsx(qe,{children:e.users.map(c=>t.jsxs("div",{children:[t.jsxs(T.Text,{className:"text",children:[c.first_name," ",c.last_name]}),t.jsx(T.Text,{className:"text",children:c.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Ge[c.executed_status]&&l(c.executed_status),t.jsxs(Je,{children:[t.jsx(J,{icon:t.jsx(oe,{}),text:n("Confirm"),onClick:()=>r(e==null?void 0:e.consultation_term_id,e.date,c.id)}),t.jsx(J,{icon:t.jsx(ie,{}),text:n("Cancel"),onClick:()=>i(e==null?void 0:e.consultation_term_id,e.date,c.id)})]})]}),t.jsx("hr",{})]},c.id))})},Ve=_.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,He=({consultation:e})=>{const{t:r}=k(),i=e.is_ended,n=e.is_started,l=e.status==="reported",c=e.status==="approved",u=e.status==="not_reported",m=e.status==="reject";return t.jsxs(t.Fragment,{children:[i&&e.date&&t.jsx(U,{type:O.ENDED,date:Z(e.date,ee(`${e.duration}`))}),m&&t.jsx(U,{type:O.ENDED,date:Z(e.date,ee(`${e.duration}`))}),l&&!i&&t.jsx(U,{type:O.WAITING,date:e.date,info:r("ConsultationStatus.UnconfirmedInfo")}),c&&!i&&t.jsx(U,{type:O.ACCEPTED,date:e.date,info:n&&(e!=null&&e.consultation_term_id)?t.jsx(Ve,{children:t.jsx(Me,{consultationTermId:e==null?void 0:e.consultation_term_id,consultationId:e==null?void 0:e.consultation_id,term:e.date})}):r("ConsultationStatus.AppointmentInfo",{date:we(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),u&&t.jsx(U,{type:O.DEFAULT})]})},Ke=_.div`
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
`,Xe=({time:e})=>t.jsxs(Ke,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(be,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(T.Text,{className:"time",children:e})]}),Ye=_.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,Ze=({consultation:e})=>t.jsxs(Ye,{children:[t.jsx(ze,{consultation:e}),t.jsx(Xe,{time:e.duration}),t.jsx(He,{consultation:e})]});var et=ve();const tt=Le(et),rt=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:i}=a.useContext(H.EscolaLMSContext),{t:n}=k(),l=a.useMemo(()=>[{id:1,content:t.jsx(J,{icon:t.jsx(oe,{}),text:n("Confirm"),onClick:()=>r(e==null?void 0:e.consultation_term_id,e.date)})},{id:2,content:t.jsx(J,{icon:t.jsx(ie,{}),text:n("Cancel"),onClick:()=>i(e==null?void 0:e.consultation_term_id,e.date)})}],[r,e==null?void 0:e.consultation_term_id,i,n,e.date]);return t.jsx(tt,{menuItems:l,child:t.jsx($.Button,{mode:"icon",children:t.jsx(_e,{})})})},st=_.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,nt=({consultation:e})=>{const{status:r,is_ended:i}=e,{t:n}=k(),l=r==="reported",c=r==="approved";return r==="reject"?t.jsx(S,{status:I.CANCELED,name:n("ConsultationStatus.Canceled")}):i?t.jsx(S,{status:I.ENDED,name:n("ConsultationStatus.Ended")}):l?t.jsxs(st,{children:[t.jsx(S,{status:I.WAITING,name:n("ConsultationStatus.Unconfirmed")}),t.jsx(rt,{consultation:e})]}):c?t.jsx(S,{status:I.ACCEPTED,name:n("ConsultationStatus.Appointment")}):t.jsx(S,{status:I.DEFAULT,name:r})},at=e=>{var i;const{consultation:r}=e;return t.jsx(Be,{children:t.jsx(Ee,{id:r==null?void 0:r.consultation_term_id,image:t.jsx(Fe,{product:r}),title:t.jsx(nt,{consultation:r}),subtitle:t.jsx("p",{children:(i=r==null?void 0:r.related_product)==null?void 0:i.name}),footer:t.jsx(Ze,{consultation:r})})})},ot=({type:e})=>{var h;const{tutorConsultations:r,fetchTutorConsultations:i,token:n}=a.useContext(ne.EscolaLMSContext),{t:l}=k(),[c,u]=a.useState([]),m=a.useMemo(()=>{var s;return((s=r.list)==null?void 0:s.data.filter(f=>e===W.STARTED||e===W.UPCOMING?f.in_coming||f.is_started:f.is_ended))||[]},[e,(h=r.list)==null?void 0:h.data]),o=a.useCallback(async(s,f)=>{try{const g=await(await fetch(`${V}/api/consultations/my-schedule?ids[]=${s}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}})).json();if(g.success&&g.data.length>0){const p=g.data.findIndex(d=>(d==null?void 0:d.consultation_term_id)===f);u(d=>{const w=d.findIndex(x=>(x==null?void 0:x.consultation_term_id)===f);return w!==-1&&p!==-1&&(d[w]=g.data[p]),[...d]})}}catch(j){console.error(j)}},[n]),C=a.useCallback(()=>{c.forEach(s=>{!s.is_started&&!s.is_ended&&o(s==null?void 0:s.consultation_id,s.consultation_term_id)})},[c,o]);return a.useEffect(()=>{i()},[i]),a.useEffect(()=>{u([]),u(m);const s=setInterval(()=>{C()},3e4);return()=>{u([]),clearInterval(s)}},[e,m,C]),t.jsx(t.Fragment,{children:t.jsx(M.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((s,f)=>t.jsx(M.Col,{md:3,children:t.jsx(le,{})},`skeleton-card-${f}`)):c.length===0?t.jsx(T.Text,{style:{paddingLeft:ae?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",c.map(s=>t.jsx(M.Col,{xs:12,md:6,lg:3,children:t.jsx(at,{consultation:s})},s.consultation_term_id))]})})})},te=a.memo(ot),it=_.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,ue="meet.jit.si",ct="stage.8x8.vc",dt="8x8.vc";var lt=function(e,r,i,n){function l(c){return c instanceof i?c:new i(function(u){u(c)})}return new(i||(i=Promise))(function(c,u){function m(h){try{C(n.next(h))}catch(s){u(s)}}function o(h){try{C(n.throw(h))}catch(s){u(s)}}function C(h){h.done?c(h.value):l(h.value).then(m,o)}C((n=n.apply(e,r||[])).next())})};const ut=(e,r,i)=>lt(void 0,void 0,void 0,function*(){return new Promise((n,l)=>{if(window.JitsiMeetExternalAPI)return n(window.JitsiMeetExternalAPI);const c=document.createElement("script"),u=r?`?release=${r}`:"",m=i?`${i}/`:"";c.async=!0,c.src=`https://${e}/${m}external_api.js${u}`,c.onload=()=>n(window.JitsiMeetExternalAPI),c.onerror=()=>l(new Error(`Script load error: ${c.src}`)),document.head.appendChild(c)})});let q;const mt=(e=ue,r,i)=>q||(q=ut(e,r,i),q),ft=(e,r)=>r?`${r}/${e}`:e,pt=e=>{const r=e.split("/");if(!(r.length<=1))return r[0]},gt=e=>e?ct:dt;let ht=0;const re=e=>`${e}-${ht++}`,xt=({domain:e=ue,roomName:r,configOverwrite:i,interfaceConfigOverwrite:n,jwt:l,invitees:c,devices:u,userInfo:m,release:o,lang:C,spinner:h,onApiReady:s,onReadyToClose:f,getIFrameRef:j})=>{const[g,p]=a.useState(!0),[d,w]=a.useState(!1),x=a.useRef(),b=a.useRef(),v=a.useRef(null),D=a.useMemo(()=>re("jitsiMeeting"),[re]);a.useEffect(()=>{mt(e,o,pt(r)).then(A=>{x.current=A,w(!0)}).catch(A=>console.error(A.message))},[]);const L=a.useCallback(A=>{b.current=new A(e,{roomName:r,configOverwrite:i,interfaceConfigOverwrite:n,jwt:l,invitees:c,devices:u,userInfo:m,release:o,lang:C,parentNode:v.current}),p(!1),b.current&&(typeof s=="function"&&s(b.current),b.current.on("readyToClose",()=>{typeof f=="function"&&f()}),v.current&&typeof j=="function"&&j(v.current))},[b,v,s,f,j,e,r,i,n,l,c,u,m,o,C]);a.useEffect(()=>{d&&!b.current&&x.current&&L(x.current)},[d,L]);const B=a.useCallback(()=>!h||!g||b.current?null:t.jsx(h,{},void 0),[h,b.current]);return t.jsxs(t.Fragment,{children:[B(),t.jsx("div",{id:D,ref:v},D)]},void 0)};var Ct=function(e,r){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(i[n[l]]=e[n[l]]);return i};const jt=e=>{var{appId:r,roomName:i,useStaging:n,release:l}=e,c=Ct(e,["appId","roomName","useStaging","release"]);return t.jsx(xt,Object.assign({domain:gt(n),roomName:ft(i,r),release:l},c),void 0)};var me=(e=>(e.GRANTED="granted",e.DENIED="denied",e.PROMPT="prompt",e))(me||{});const yt=()=>{const[e,r]=a.useState(!1),[i,n]=a.useState("prompt"),l=a.useRef(null),c=a.useRef(null),u=a.useRef(null),m=a.useCallback(async()=>{try{const s=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720}},audio:!1});return r(!0),n("granted"),l.current=s,c.current||(c.current=document.createElement("video"),c.current.muted=!0,c.current.playsInline=!0),c.current.srcObject=s,c.current.play(),c.current}catch(s){return console.error("Camera access denied or not available:",s),r(!1),n("denied"),null}},[]),o=a.useCallback(async()=>(l.current&&l.current.getTracks().forEach(s=>s.stop()),await m()),[m]),C=async()=>await m(),h=async()=>{if(c.current&&l.current){const s=document.createElement("canvas"),f=s.getContext("2d"),g=l.current.getVideoTracks()[0].getSettings();s.height=g.height||720,s.width=g.width||1280,f==null||f.drawImage(c.current,0,0,s.width,s.height);const p=await createImageBitmap(s);return u.current||(u.current=new Worker(new URL("/assets/dataUrlWorker-0-pOUrAF.js",import.meta.url),{type:"module"})),new Promise((d,w)=>{u.current.onmessage=x=>{const{success:b,blob:v,error:D}=x.data;b&&v?d(v):w(D||"Unknown error occurred in Web Worker.")},u.current.onerror=x=>{console.error("Worker error:",x),w("Web Worker encountered an error.")},u.current.postMessage({canvasData:p,width:s.width,height:s.height})})}return null};return a.useEffect(()=>((async()=>{const f=await navigator.permissions.query({name:"camera"});f.state==="granted"&&await o(),f.state==="denied"&&(r(!1),n("denied")),f.onchange=async()=>{f.state==="granted"?await o():(r(!1),n("denied"))}})(),()=>{u.current&&u.current.terminate()}),[o]),{camera:C,hasCameraAccess:e,restartVideoTrack:o,getDataUrl:h,cameraAccessStatus:i}},wt=async e=>{const i=(await e.getRoomsInfo()).rooms.find(n=>n.isMainRoom);return i==null?void 0:i.participants.find(n=>n.id===e._myUserID)},bt=_.div`
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
`,vt=_.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  button {
    min-width: 130px;
  }
`,_t=({message:e,closeToast:r,userConsentedRef:i})=>{const{t:n}=k();return t.jsxs(bt,{className:"jitsy-message",children:[t.jsx(Ie.Title,{className:"jitsy-message__title",children:n("ConsultationPage.EmotionConsent")}),t.jsx(T.Text,{size:"16",children:e}),t.jsxs(vt,{children:[t.jsx($.Button,{onClick:()=>[i.current=!0,r()],children:n("ConsultationPage.Yes")}),t.jsx($.Button,{mode:"secondary",onClick:()=>[i.current=!1,r()],children:n("ConsultationPage.No")})]})]})},Et=_.div`
  position: relative;
  background: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .meeting-container {
    width: 80%;
    height: 50vh;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: relative;
  }

  .participant-initials {
    width: 80px;
    height: 80px;
    background: #d33;
    border-radius: 50%;
  }

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 10px;
  }

  .control-button {
    width: 35px;
    height: 35px;
    background: #333;
  }

  .end-call {
    background: red;
  }
`,It=()=>t.jsxs(Et,{children:[t.jsx("div",{className:"meeting-container",children:t.jsx(N,{width:80,height:80,className:"participant-initials"})}),t.jsxs("div",{className:"controls",children:[t.jsx(N,{width:35,height:35,className:"control-button"}),t.jsx(N,{width:35,height:35,className:"control-button"}),t.jsx(N,{width:35,height:35,className:"control-button"}),t.jsx(N,{width:35,height:35,className:"control-button"}),t.jsx(N,{width:35,height:35,className:"control-button"}),t.jsx(N,{width:35,height:35,className:"control-button end-call"})]})]}),Tt=_(ce.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,kt=_.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  .button-reload {
    margin-top: 20px;
  }
`,At=_.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`,se=3,St=3e3,Dt=({jitsyData:e,term:r,consultationTermId:i,consultationId:n,close:l})=>{const[c,u]=a.useState(!1),[m,o]=a.useState(!1),{camera:C,getDataUrl:h,hasCameraAccess:s,cameraAccessStatus:f}=yt(),j=a.useRef(!1),g=a.useRef(!1),p=a.useRef(null),d=a.useRef(null),[w,x]=a.useState(null),{isStudent:b}=K(),{t:v}=k(),D=a.useCallback(()=>{console.log("Video conference joined"),g.current=!0},[]),L=a.useCallback(()=>{console.log("Video conference left"),g.current=!1},[]),B=a.useCallback(y=>{y.link&&x(y.link)},[]),A=a.useCallback((y,E,P,R,F,Y)=>{d.current||(d.current=new Worker(new URL("/assets/saveImageWorker-D-miS2i4.js",import.meta.url),{type:"module"}),d.current.postMessage({apiUrl:V})),d.current.onmessage=G=>{const{success:he,error:xe}=G.data;he?console.log("Images saved successfully via Worker."):console.error("Error saving images in Worker:",xe)},d.current.onerror=G=>{console.error("Worker encountered an error:",G)},d.current.postMessage({consultationId:y,consultationTermId:E,userEmail:P,userId:R,screenshots:F,term:Y})},[]),X=a.useCallback(async(y,E,P)=>{if(P.on){console.log("Recording has started in mode:",P);let R=[];p.current||(p.current=setInterval(async()=>{const F=await E();F?(R.push({dataURL:F,timestamp:new Date().getTime(),userID:e.data.userInfo.id,consultationId:n}),R.length===se*(St/1e3)&&(await wt(y)?(console.log("Saving images..."),A(n??0,i,e.data.userInfo.email,e.data.userInfo.id,R,r),R=[]):console.error("Failed to get current user for saving images."))):console.error("Failed to get data URL for screenshot.")},1e3/se))}else console.log("Recording has stopped."),p.current&&(clearInterval(p.current),p.current=null),P.error&&console.error("Recording error:",P.error)},[n,i,e.data.userInfo.email,e.data.userInfo.id,r,A]),fe=a.useCallback(async y=>{window.api=y,await C(),y.addListener("videoConferenceJoined",()=>D()),y.addListener("videoConferenceLeft",()=>L()),y.addListener("recordingLinkAvailable",E=>B(E)),y.on("recordingStatusChanged",E=>{j.current&&X(y,async()=>await h(),E)})},[C,D,L,h,X,j,B]),pe=()=>{var y;l&&l(),(y=window.api)==null||y.dispose(),window.location.reload()},ge=a.useCallback(()=>{const y=/\/([^/?]+)\?/,E=e.url.match(y);return E?E[1]:e.data.roomName},[e]);return a.useEffect(()=>()=>{d.current&&d.current.terminate(),p.current&&clearInterval(p.current)},[]),a.useEffect(()=>{(async()=>{await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});try{s&&g&&b?o(!0):(o(!1),b||u(!0))}catch(E){console.error("Error checking permissions:",E),o(!1)}})()},[s,g,b,v]),t.jsxs(t.Fragment,{children:[e&&!m&&c&&t.jsx(jt,{jwt:e.data.jwt,appId:e.data.app_id,roomName:ge(),getIFrameRef:y=>{y.style.height="calc(100vh - 76px)",y.style.width="100%"},onApiReady:fe,onReadyToClose:pe,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1},constraints:{video:{deviceId:localStorage.getItem("preferredCamera")||void 0},audio:{deviceId:localStorage.getItem("preferredMic")||void 0}}}}),t.jsx(Tt,{onClose:()=>[o(!1),u(!0)],visible:m,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,closable:!1,maskClosable:!1,children:t.jsx(_t,{message:v("ConsultationPage.AdditionalRecording"),closeToast:()=>[o(!1),u(!0)],userConsentedRef:j})}),!m&&!c&&t.jsx(It,{}),!m&&!c&&f===me.DENIED&&t.jsxs(kt,{children:[t.jsx(T.Text,{children:v("ConsultationPage.BlockedAccess")}),t.jsx(T.Text,{children:v("ConsultationPage.BlockedAccessEnable")}),t.jsx("div",{className:"button-reload",children:t.jsx($.Button,{onClick:()=>window.location.reload(),children:v("ConsultationPage.ReloadPage")})})]}),w&&!b&&t.jsx(At,{children:t.jsx($.Button,{onClick:()=>w&&window.open(w,"_blank"),children:t.jsx(T.Text,{children:v("ConsultationPage.DownloadRecording")})})})]})},Nt=({entityId:e,entityModel:r,onSuccesGetQuestionnaires:i,setIsEnded:n})=>{const{questionnaires:l,loading:c,getQuestionnaires:u}=Oe({entityId:e||0,entityModel:r}),[m,o]=a.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:C,isTutor:h}=K(),s=a.useMemo(()=>l.filter(p=>p.models.some(d=>d.model_type_title===r?d.model_type_title===z.CONSULTATION?C&&d.target_group==="user"||h&&d.target_group==="author":!0:!1)),[l,C,h,r]),f=a.useCallback(()=>{if(!s)return;const p=s.reduce((d,w)=>{var b;const x=(b=w.models.find(v=>v.model_type_title===r&&v.model_id===e))==null?void 0:b.display_frequency_minutes;return x!=null&&x===0&&d.endMeetingQuestionnaires.push(w),d},{endMeetingQuestionnaires:[]});o(d=>({...d,...p}))},[s,r,e]),j=a.useCallback(()=>{o(d=>({...d,step:d.step+1}));const p=setTimeout(()=>{o(d=>({...d,show:!0}))},500);return()=>clearTimeout(p)},[]),g=a.useCallback(()=>{o(p=>({...p,show:!1})),m.step<m.endMeetingQuestionnaires.length-1?j():(o(p=>({...p,show:!1})),n&&n(!1))},[m,j,n]);return a.useEffect(()=>{u()},[e]),a.useEffect(()=>{f()},[s,f,i]),a.useEffect(()=>(m.endMeetingQuestionnaires.length&&o(p=>({...p,show:!0})),()=>{}),[s,m.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:m.show&&e&&!!s.length&&!c&&t.jsx(Ue,{entityModel:r,entityId:Number(e),visible:m.show,onClose:g,questionnaire:m.endMeetingQuestionnaires[m.step]})})},Pt=({onClose:e})=>{var h,s,f,j,g;const[r,i]=a.useState(null),[n,l]=a.useState(!1),[c,u]=a.useState(!1),{generateConsultationJitsy:m}=a.useContext(H.EscolaLMSContext),o=a.useContext(de);a.useEffect(()=>((async()=>{var d,w;if(u(!0),o!=null&&o.consultationData){const x=await m((d=o==null?void 0:o.consultationData)==null?void 0:d.consultationTermId,(w=o==null?void 0:o.consultationData)==null?void 0:w.term);x.success&&i(x.data),u(!1)}})(),()=>{Object.keys(localStorage).forEach(d=>{d.startsWith("questionnaire_")&&localStorage.removeItem(d)})}),[o==null?void 0:o.consultationData]),a.useEffect(()=>{l(!1)},[o==null?void 0:o.consultationData]);const C=a.useCallback(()=>{var p;l(!0),(p=o==null?void 0:o.setModalOpen)==null||p.call(o,!1),e()},[l,e,o]);return t.jsxs(t.Fragment,{children:[t.jsxs(ce.Modal,{onClose:C,visible:o==null?void 0:o.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(it,{children:[c&&t.jsx(Te,{}),!c&&r&&t.jsx(Dt,{jitsyData:r,close:C,consultationId:(h=o==null?void 0:o.consultationData)==null?void 0:h.consultationId,consultationTermId:((s=o==null?void 0:o.consultationData)==null?void 0:s.consultationTermId)??0,term:((f=o==null?void 0:o.consultationData)==null?void 0:f.term)??""})]}),t.jsx($e,{entityId:Number((j=o==null?void 0:o.consultationData)==null?void 0:j.consultationId),entityModel:z.CONSULTATION})]}),n&&t.jsx(Nt,{entityId:Number((g=o==null?void 0:o.consultationData)==null?void 0:g.consultationId),entityModel:z.CONSULTATION,setIsEnded:l})]})};var W=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(W||{});const Yt=()=>{const{t:e}=k(),{isTutor:r}=K(),i=a.useContext(de),n=a.useMemo(()=>({tabs:r?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(te,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(te,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx(Q,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx(Q,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(Q,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(Q,{type:"is_ended"})}],defaultActiveKey:1}),[r,e]);return t.jsx(ke,{children:t.jsx(Se,{children:t.jsxs(Ae,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(De.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})}),t.jsx(Pt,{onClose:()=>[i==null?void 0:i.setModalOpen(!1)]})]})})})};export{W as ConsultationStatus,Yt as default};
//# sourceMappingURL=my-consultations-BylOrLLt.js.map

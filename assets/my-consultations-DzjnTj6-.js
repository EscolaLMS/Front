import{r as n,i as re,h as T,ae as G,j as t,V as R,y as S,o as se,q as v,L as fe,ax as pe,X as ge,N as V,aP as B,aQ as ne,aR as ae,aS as K,aT as Y,aw as xe,am as he,aU as Ce,g as je,z as Q,aV as ye,aW as _e,T as we,F as oe,aX as ie,a0 as Ee,v as ve,C as Ie}from"./index-CIznKkTS.js";import{a as be,T as Te}from"./index-CZN2aTUu.js";import{C as ce,a as Ae}from"./CourseCard-BBcc1oS0.js";import{P as ke,C as Se,D as L,a as U,b as De}from"./index-BjW4Pwty.js";import{u as H,R as Pe}from"./useRoles-MN5kO3PM.js";import{Q as z}from"./questionnaire-CXWDgbJ4.js";import{u as Re,Q as Ne}from"./index-DcpX0UnC.js";import"./questionnaires-Bje2k2hc.js";import"./useDownloadCertificate-ByBy7IDl.js";import"./base-7gvCcPfx.js";import"./index-CzPrus7p.js";import"./swiper-DmmiztEe.js";import"./swiper-react-CpqQ8Abo.js";import"./a11y-DNdN5A0Z.js";import"./index-ImteYqHQ.js";import"./floating-ui.react-dom-CJq4unBI.js";import"./index-DErzUM7r.js";const Me=({type:e})=>{var f;const{userConsultations:r,fetchUserConsultations:a,token:s}=n.useContext(re.EscolaLMSContext),{t:l}=T(),[c,m]=n.useState([]),g=n.useMemo(()=>{var x;const i=((x=r.list)==null?void 0:x.data.filter(h=>e===O.STARTED||e===O.UPCOMING?h.in_coming||h.is_started:h.is_ended))||[];return Array.from(new Map(i.map(h=>[h.id,h])).values())},[e,(f=r.list)==null?void 0:f.data]),o=n.useCallback(async(i,p)=>{try{const h=await(await fetch(`${G}/api/consultations/me?ids[]=${i}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}})).json();if(h.success&&h.data.length>0){const C=h.data.findIndex(d=>(d==null?void 0:d.consultation_term_id)===p);m(d=>{const _=d.findIndex(j=>(j==null?void 0:j.consultation_term_id)===p);return _!==-1&&C!==-1&&(d[_]=h.data[C]),[...d]})}}catch(x){console.error(x)}},[s]),u=n.useCallback(()=>{c.forEach(i=>{!i.is_started&&!i.is_ended&&(i==null?void 0:i.consultation_term_id)!==void 0&&o(i==null?void 0:i.id,i==null?void 0:i.consultation_term_id)})},[c,o]);return n.useEffect(()=>{a()},[e,a]),n.useEffect(()=>{m([]),m(g);const i=setInterval(()=>{u()},3e4);return()=>{m([]),clearInterval(i)}},[e,g,u]),t.jsx(ke,{children:t.jsx(R.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((i,p)=>t.jsx(R.Col,{md:3,children:t.jsx(ce,{})},`skeleton-card-${p}`)):c.length===0?t.jsx(S.Text,{style:{paddingLeft:se?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:c.map(i=>t.jsx(R.Col,{xs:12,md:6,lg:3,children:t.jsx(Se,{consultation:i})},i.id))})})})},W=n.memo(Me),Le=v.div`
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
`,Ue=({product:e})=>{var r;return e?t.jsx(fe,{to:`/consultations/${e==null?void 0:e.consultation_id}`,children:e!=null&&e.consultation_media&&((r=e==null?void 0:e.consultation_media)!=null&&r.image_path)?t.jsx(pe,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(Ae,{})}):null},Oe=v.div`
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
`;var E=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(E||{});const A=({status:e,name:r})=>{const a=ge(),s=n.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return a.primaryColor}},[a.primaryColor,e]);return t.jsxs(Oe,{children:[t.jsx("div",{className:"status",style:{backgroundColor:s}}),t.jsx("div",{className:"name",children:r})]})},$e=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,We=v.div`
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
`,Fe={reported:{type:E.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:E.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:E.ENDED,info:"ConsultationStatus.RejectedInfo"}},Be=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:a}=n.useContext(V.EscolaLMSContext),{t:s}=T(),l=c=>{switch(c){case"reported":return t.jsx(A,{status:E.WAITING,name:s("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(A,{status:E.ACCEPTED,name:s("ConsultationStatus.Appointment")});case"reject":return t.jsx(A,{status:E.ENDED,name:s("ConsultationStatus.Canceled")})}};return t.jsx($e,{children:e.users.map(c=>t.jsxs("div",{children:[t.jsxs(S.Text,{className:"text",children:[c.first_name," ",c.last_name]}),t.jsx(S.Text,{className:"text",children:c.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Fe[c.executed_status]&&l(c.executed_status),t.jsxs(We,{children:[t.jsx(B,{icon:t.jsx(ne,{}),text:s("Confirm"),onClick:()=>r(e==null?void 0:e.consultation_term_id,e.date,c.id)}),t.jsx(B,{icon:t.jsx(ae,{}),text:s("Cancel"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date,c.id)})]})]}),t.jsx("hr",{})]},c.id))})},Qe=v.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,qe=({consultation:e})=>{const{t:r}=T(),a=e.is_ended,s=e.is_started,l=e.status==="reported",c=e.status==="approved",m=e.status==="not_reported",g=e.status==="reject";return t.jsxs(t.Fragment,{children:[a&&e.date&&t.jsx(L,{type:U.ENDED,date:K(e.date,Y(`${e.duration}`))}),g&&t.jsx(L,{type:U.ENDED,date:K(e.date,Y(`${e.duration}`))}),l&&!a&&t.jsx(L,{type:U.WAITING,date:e.date,info:r("ConsultationStatus.UnconfirmedInfo")}),c&&!a&&t.jsx(L,{type:U.ACCEPTED,date:e.date,info:s&&(e!=null&&e.consultation_term_id)?t.jsx(Qe,{children:t.jsx(De,{consultationTermId:e==null?void 0:e.consultation_term_id,consultationId:e==null?void 0:e.consultation_id,term:e.date})}):r("ConsultationStatus.AppointmentInfo",{date:xe(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),m&&t.jsx(L,{type:U.DEFAULT})]})},Je=v.div`
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
`,ze=({time:e})=>t.jsxs(Je,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(he,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(S.Text,{className:"time",children:e})]}),Ge=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,Ve=({consultation:e})=>t.jsxs(Ge,{children:[t.jsx(Be,{consultation:e}),t.jsx(ze,{time:e.duration}),t.jsx(qe,{consultation:e})]});var He=Ce();const Xe=je(He),Ke=({consultation:e})=>{const{approveConsultationTerm:r,rejectConsultationTerm:a}=n.useContext(V.EscolaLMSContext),{t:s}=T(),l=n.useMemo(()=>[{id:1,content:t.jsx(B,{icon:t.jsx(ne,{}),text:s("Confirm"),onClick:()=>r(e==null?void 0:e.consultation_term_id,e.date)})},{id:2,content:t.jsx(B,{icon:t.jsx(ae,{}),text:s("Cancel"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date)})}],[r,e==null?void 0:e.consultation_term_id,a,s,e.date]);return t.jsx(Xe,{menuItems:l,child:t.jsx(Q.Button,{mode:"icon",children:t.jsx(ye,{})})})},Ye=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,Ze=({consultation:e})=>{const{status:r,is_ended:a}=e,{t:s}=T(),l=r==="reported",c=r==="approved";return r==="reject"?t.jsx(A,{status:E.CANCELED,name:s("ConsultationStatus.Canceled")}):a?t.jsx(A,{status:E.ENDED,name:s("ConsultationStatus.Ended")}):l?t.jsxs(Ye,{children:[t.jsx(A,{status:E.WAITING,name:s("ConsultationStatus.Unconfirmed")}),t.jsx(Ke,{consultation:e})]}):c?t.jsx(A,{status:E.ACCEPTED,name:s("ConsultationStatus.Appointment")}):t.jsx(A,{status:E.DEFAULT,name:r})},et=e=>{var a;const{consultation:r}=e;return t.jsx(Le,{children:t.jsx(_e,{id:r==null?void 0:r.consultation_term_id,image:t.jsx(Ue,{product:r}),title:t.jsx(Ze,{consultation:r}),subtitle:t.jsx("p",{children:(a=r==null?void 0:r.related_product)==null?void 0:a.name}),footer:t.jsx(Ve,{consultation:r})})})},tt=({type:e})=>{var f;const{tutorConsultations:r,fetchTutorConsultations:a,token:s}=n.useContext(re.EscolaLMSContext),{t:l}=T(),[c,m]=n.useState([]),g=n.useMemo(()=>{var i;return((i=r.list)==null?void 0:i.data.filter(p=>e===O.STARTED||e===O.UPCOMING?p.in_coming||p.is_started:p.is_ended))||[]},[e,(f=r.list)==null?void 0:f.data]),o=n.useCallback(async(i,p)=>{try{const h=await(await fetch(`${G}/api/consultations/my-schedule?ids[]=${i}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}})).json();if(h.success&&h.data.length>0){const C=h.data.findIndex(d=>(d==null?void 0:d.consultation_term_id)===p);m(d=>{const _=d.findIndex(j=>(j==null?void 0:j.consultation_term_id)===p);return _!==-1&&C!==-1&&(d[_]=h.data[C]),[...d]})}}catch(x){console.error(x)}},[s]),u=n.useCallback(()=>{c.forEach(i=>{!i.is_started&&!i.is_ended&&o(i==null?void 0:i.consultation_id,i.consultation_term_id)})},[c,o]);return n.useEffect(()=>{a()},[a]),n.useEffect(()=>{m([]),m(g);const i=setInterval(()=>{u()},3e4);return()=>{m([]),clearInterval(i)}},[e,g,u]),t.jsx(t.Fragment,{children:t.jsx(R.Row,{style:{gap:"30px 0"},children:r.loading?Array.from({length:8}).map((i,p)=>t.jsx(R.Col,{md:3,children:t.jsx(ce,{})},`skeleton-card-${p}`)):c.length===0?t.jsx(S.Text,{style:{paddingLeft:se?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",c.map(i=>t.jsx(R.Col,{xs:12,md:6,lg:3,children:t.jsx(et,{consultation:i})},i.consultation_term_id))]})})})},Z=n.memo(tt),rt=v.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,de="meet.jit.si",st="stage.8x8.vc",nt="8x8.vc";var at=function(e,r,a,s){function l(c){return c instanceof a?c:new a(function(m){m(c)})}return new(a||(a=Promise))(function(c,m){function g(f){try{u(s.next(f))}catch(i){m(i)}}function o(f){try{u(s.throw(f))}catch(i){m(i)}}function u(f){f.done?c(f.value):l(f.value).then(g,o)}u((s=s.apply(e,r||[])).next())})};const ot=(e,r,a)=>at(void 0,void 0,void 0,function*(){return new Promise((s,l)=>{if(window.JitsiMeetExternalAPI)return s(window.JitsiMeetExternalAPI);const c=document.createElement("script"),m=r?`?release=${r}`:"",g=a?`${a}/`:"";c.async=!0,c.src=`https://${e}/${g}external_api.js${m}`,c.onload=()=>s(window.JitsiMeetExternalAPI),c.onerror=()=>l(new Error(`Script load error: ${c.src}`)),document.head.appendChild(c)})});let F;const it=(e=de,r,a)=>F||(F=ot(e,r,a),F),ct=(e,r)=>r?`${r}/${e}`:e,dt=e=>{const r=e.split("/");if(!(r.length<=1))return r[0]},lt=e=>e?st:nt;let ut=0;const ee=e=>`${e}-${ut++}`,mt=({domain:e=de,roomName:r,configOverwrite:a,interfaceConfigOverwrite:s,jwt:l,invitees:c,devices:m,userInfo:g,release:o,lang:u,spinner:f,onApiReady:i,onReadyToClose:p,getIFrameRef:x})=>{const[h,C]=n.useState(!0),[d,_]=n.useState(!1),j=n.useRef(),w=n.useRef(),I=n.useRef(null),N=n.useMemo(()=>ee("jitsiMeeting"),[ee]);n.useEffect(()=>{it(e,o,dt(r)).then(k=>{j.current=k,_(!0)}).catch(k=>console.error(k.message))},[]);const M=n.useCallback(k=>{w.current=new k(e,{roomName:r,configOverwrite:a,interfaceConfigOverwrite:s,jwt:l,invitees:c,devices:m,userInfo:g,release:o,lang:u,parentNode:I.current}),C(!1),w.current&&(typeof i=="function"&&i(w.current),w.current.on("readyToClose",()=>{typeof p=="function"&&p()}),I.current&&typeof x=="function"&&x(I.current))},[w,I,i,p,x,e,r,a,s,l,c,m,g,o,u]);n.useEffect(()=>{d&&!w.current&&j.current&&M(j.current)},[d,M]);const q=n.useCallback(()=>!f||!h||w.current?null:t.jsx(f,{},void 0),[f,w.current]);return t.jsxs(t.Fragment,{children:[q(),t.jsx("div",{id:N,ref:I},N)]},void 0)};var ft=function(e,r){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(a[s[l]]=e[s[l]]);return a};const pt=e=>{var{appId:r,roomName:a,useStaging:s,release:l}=e,c=ft(e,["appId","roomName","useStaging","release"]);return t.jsx(mt,Object.assign({domain:lt(s),roomName:ct(a,r),release:l},c),void 0)},gt=()=>{const[e,r]=n.useState(!1),a=n.useRef(null),s=n.useRef(null),l=n.useRef(null),c=n.useCallback(async()=>{try{const u=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720}},audio:!1});return r(!0),a.current=u,s.current||(s.current=document.createElement("video"),s.current.muted=!0,s.current.playsInline=!0),s.current.srcObject=u,s.current.play(),s.current}catch(u){return console.error("Camera access denied or not available:",u),r(!1),null}},[]),m=n.useCallback(async()=>(a.current&&a.current.getTracks().forEach(u=>u.stop()),await c()),[c]),g=async()=>await c(),o=async()=>{if(s.current&&a.current){const u=document.createElement("canvas"),f=u.getContext("2d"),p=a.current.getVideoTracks()[0].getSettings();u.height=p.height||720,u.width=p.width||1280,f==null||f.drawImage(s.current,0,0,u.width,u.height);const x=await createImageBitmap(u);return l.current||(l.current=new Worker(new URL("/assets/dataUrlWorker-0-pOUrAF.js",import.meta.url),{type:"module"})),new Promise((h,C)=>{l.current.onmessage=d=>{const{success:_,blob:j,error:w}=d.data;_&&j?h(j):C(w||"Unknown error occurred in Web Worker.")},l.current.onerror=d=>{console.error("Worker error:",d),C("Web Worker encountered an error.")},l.current.postMessage({canvasData:x,width:u.width,height:u.height})})}return null};return n.useEffect(()=>((async()=>{const f=await navigator.permissions.query({name:"camera"});f.state==="granted"&&await m(),f.onchange=async()=>{f.state==="granted"?await m():r(!1)}})(),()=>{l.current&&l.current.terminate()}),[m]),{camera:g,hasCameraAccess:e,restartVideoTrack:m,getDataUrl:o}},xt=async e=>{const a=(await e.getRoomsInfo()).rooms.find(s=>s.isMainRoom);return a==null?void 0:a.participants.find(s=>s.id===e._myUserID)},ht=v.div`
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
`,Ct=v.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  button {
    min-width: 130px;
  }
`,jt=({message:e,closeToast:r,userConsentedRef:a})=>{const{t:s}=T();return t.jsxs(ht,{className:"jitsy-message",children:[t.jsx(we.Title,{className:"jitsy-message__title",children:s("ConsultationPage.EmotionConsent")}),t.jsx(S.Text,{size:"16",children:e}),t.jsxs(Ct,{children:[t.jsx(Q.Button,{onClick:()=>[a.current=!0,r()],children:s("ConsultationPage.Yes")}),t.jsx(Q.Button,{mode:"secondary",onClick:()=>[a.current=!1,r()],children:s("ConsultationPage.No")})]})]})},yt=v(oe.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,te=3,_t=3e3,wt=({jitsyData:e,term:r,consultationTermId:a,consultationId:s,close:l})=>{const[c,m]=n.useState(!1),{camera:g,getDataUrl:o,hasCameraAccess:u}=gt(),f=n.useRef(!1),i=n.useRef(!1),p=n.useRef(null),x=n.useRef(null),[h,C]=n.useState(null),{isStudent:d}=H(),{t:_}=T(),j=n.useCallback(()=>{console.log("Video conference joined"),i.current=!0},[]),w=n.useCallback(()=>{console.log("Video conference left"),i.current=!1},[]),I=n.useCallback(y=>{y.link&&C(y.link)},[]),N=n.useCallback((y,b,D,P,$,X)=>{x.current||(x.current=new Worker(new URL("/assets/saveImageWorker-BLB7ATek.js",import.meta.url),{type:"module"}),x.current.postMessage({apiUrl:G})),x.current.onmessage=J=>{const{success:ue,error:me}=J.data;ue?console.log("Images saved successfully via Worker."):console.error("Error saving images in Worker:",me)},x.current.onerror=J=>{console.error("Worker encountered an error:",J)},x.current.postMessage({consultationId:y,consultationTermId:b,userEmail:D,userId:P,screenshots:$,term:X})},[]),M=n.useCallback(async(y,b,D)=>{if(D.on){console.log("Recording has started in mode:",D);let P=[];p.current||(p.current=setInterval(async()=>{const $=await b();$?(P.push({dataURL:$,timestamp:new Date().getTime()}),P.length===te*(_t/1e3)&&(await xt(y)?(console.log("Saving images..."),N(s??0,a,e.data.userInfo.email,e.data.userInfo.id,P,r),P=[]):console.error("Failed to get current user for saving images."))):console.error("Failed to get data URL for screenshot.")},1e3/te))}else console.log("Recording has stopped."),p.current&&(clearInterval(p.current),p.current=null),D.error&&console.error("Recording error:",D.error)},[s,a,e.data.userInfo.email,e.data.userInfo.id,r,N]),q=n.useCallback(async y=>{window.api=y,await g(),y.addListener("videoConferenceJoined",()=>j()),y.addListener("videoConferenceLeft",()=>w()),y.addListener("recordingLinkAvailable",b=>I(b)),y.on("recordingStatusChanged",b=>{f.current&&M(y,async()=>await o(),b)})},[g,j,w,o,M,f,I]),k=()=>{var y;l&&l(),(y=window.api)==null||y.dispose()},le=n.useCallback(()=>{const y=/\/([^/?]+)\?/,b=e.url.match(y);return b?b[1]:e.data.roomName},[e]);return n.useEffect(()=>()=>{x.current&&x.current.terminate(),p.current&&clearInterval(p.current)},[]),n.useEffect(()=>(u&&i&&d&&m(!0),()=>{}),[u,i,d,_]),t.jsxs(t.Fragment,{children:[e&&!c&&t.jsx(pt,{jwt:e.data.jwt,appId:e.data.app_id,roomName:le(),getIFrameRef:y=>{y.style.height="calc(100vh - 76px)",y.style.width="100%"},onApiReady:q,onReadyToClose:k,interfaceConfigOverwrite:{...e.data.interfaceConfigOverwrite},configOverwrite:{...e.data.configOverwrite,prejoinConfig:{enabled:!1}}}),t.jsx(yt,{onClose:()=>m(!1),visible:c,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,closable:!1,maskClosable:!1,children:t.jsx(jt,{message:_("ConsultationPage.AdditionalRecording"),closeToast:()=>m(!1),userConsentedRef:f})}),h&&!d&&t.jsx("div",{style:{marginTop:"20px",textAlign:"center",position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)"},children:t.jsx(Q.Button,{onClick:()=>h&&window.open(h,"_blank"),children:t.jsx(S.Text,{children:_("ConsultationPage.DownloadRecording")})})})]})},Et=({entityId:e,entityModel:r,onSuccesGetQuestionnaires:a,setIsEnded:s})=>{const{questionnaires:l,loading:c,getQuestionnaires:m}=Re({entityId:e||0,entityModel:r}),[g,o]=n.useState({show:!1,step:0,loading:!0,endMeetingQuestionnaires:[]}),{isStudent:u,isTutor:f}=H(),i=n.useMemo(()=>l.filter(C=>C.models.some(d=>d.model_type_title===r?d.model_type_title===z.CONSULTATION?u&&d.target_group==="user"||f&&d.target_group==="author":!0:!1)),[l,u,f,r]),p=n.useCallback(()=>{if(!i)return;const C=i.reduce((d,_)=>{var w;const j=(w=_.models.find(I=>I.model_type_title===r&&I.model_id===e))==null?void 0:w.display_frequency_minutes;return j!=null&&j===0&&d.endMeetingQuestionnaires.push(_),d},{endMeetingQuestionnaires:[]});o(d=>({...d,...C}))},[i,r,e]),x=n.useCallback(()=>{o(d=>({...d,step:d.step+1}));const C=setTimeout(()=>{o(d=>({...d,show:!0}))},500);return()=>clearTimeout(C)},[]),h=n.useCallback(()=>{o(C=>({...C,show:!1})),g.step<g.endMeetingQuestionnaires.length-1?x():(o(C=>({...C,show:!1})),s&&s(!1))},[g,x,s]);return n.useEffect(()=>{m()},[e]),n.useEffect(()=>{p()},[i,p,a]),n.useEffect(()=>(g.endMeetingQuestionnaires.length&&o(C=>({...C,show:!0})),()=>{}),[i,g.endMeetingQuestionnaires]),t.jsx(t.Fragment,{children:g.show&&e&&!!i.length&&!c&&t.jsx(Pe,{entityModel:r,entityId:Number(e),visible:g.show,onClose:h,questionnaire:g.endMeetingQuestionnaires[g.step]})})},vt=({onClose:e})=>{var f,i,p,x,h;const[r,a]=n.useState(null),[s,l]=n.useState(!1),[c,m]=n.useState(!1),{generateConsultationJitsy:g}=n.useContext(V.EscolaLMSContext),o=n.useContext(ie);n.useEffect(()=>((async()=>{var d,_;if(m(!0),o!=null&&o.consultationData){const j=await g((d=o==null?void 0:o.consultationData)==null?void 0:d.consultationTermId,(_=o==null?void 0:o.consultationData)==null?void 0:_.term);j.success&&a(j.data),m(!1)}})(),()=>{Object.keys(localStorage).forEach(d=>{d.startsWith("questionnaire_")&&localStorage.removeItem(d)})}),[o==null?void 0:o.consultationData]),n.useEffect(()=>{l(!1)},[o==null?void 0:o.consultationData]);const u=n.useCallback(()=>{var C;l(!0),(C=o==null?void 0:o.setModalOpen)==null||C.call(o,!1),e()},[l,e,o]);return t.jsxs(t.Fragment,{children:[t.jsxs(oe.Modal,{onClose:u,visible:o==null?void 0:o.isModalOpen,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:[t.jsxs(rt,{children:[c&&t.jsx(Ee,{}),!c&&r&&t.jsx(wt,{jitsyData:r,close:u,consultationId:(f=o==null?void 0:o.consultationData)==null?void 0:f.consultationId,consultationTermId:((i=o==null?void 0:o.consultationData)==null?void 0:i.consultationTermId)??0,term:((p=o==null?void 0:o.consultationData)==null?void 0:p.term)??""})]}),t.jsx(Ne,{entityId:Number((x=o==null?void 0:o.consultationData)==null?void 0:x.consultationId),entityModel:z.CONSULTATION})]}),s&&t.jsx(Et,{entityId:Number((h=o==null?void 0:o.consultationData)==null?void 0:h.consultationId),entityModel:z.CONSULTATION,setIsEnded:l})]})};var O=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(O||{});const Bt=()=>{const{t:e}=T(),{isTutor:r}=H(),a=n.useContext(ie),s=n.useMemo(()=>({tabs:r?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(Z,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(Z,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx(W,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx(W,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(W,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(W,{type:"is_ended"})}],defaultActiveKey:1}),[r,e]);return t.jsx(ve,{children:t.jsx(be,{children:t.jsxs(Ie,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(Te.Tabs,{tabs:s.tabs,defaultActiveKey:s.defaultActiveKey})}),t.jsx(vt,{onClose:()=>[a==null?void 0:a.setModalOpen(!1)]})]})})})};export{O as ConsultationStatus,Bt as default};
//# sourceMappingURL=my-consultations-DzjnTj6-.js.map

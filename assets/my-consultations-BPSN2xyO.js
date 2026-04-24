import{c as q,a as I,a9 as G,j as t,J as v,o as P,g as W,q as h,L as K,as as X,X as V,D as k,aR as N,aS as J,aT as z,aU as $,aV as O,ar as Y,ah as Z,aW as ee,p as te,aX as se,aY as re,aZ as Q,w as ae,U as ne,k as ie,C as oe}from"./index-DcQpgbXL.js";import{r as n}from"./sentry-DZqhWugq.js";import{T as de}from"./Tabs-B2c-8yoh.js";import{C as me}from"./index-BziKAB00.js";import{D as b,a as A}from"./index-ByCk4RYr.js";import{P as ce,C as le,a as fe}from"./index-DQL1arxY.js";import{g as xe}from"./katex-D1m830yy.js";import{C as H}from"./CourseCard-BauD5kmS.js";import{u as pe}from"./useRoles-D8B7bnff.js";import{a as ue}from"./index-C4e108BD.js";import{M as Ce,J as he,E as je}from"./index-DXgAo48Y.js";import{Q as F}from"./questionnaire-CXWDgbJ4.js";import{Q as ge}from"./index-p-gAq4oX.js";import"./lodash-Bu-jC-fW.js";import"./index-D86G3uEd.js";import"./index-B7vnVY_d.js";import"./questionnaires-DeflnvtO.js";import"./useDownloadCertificate-BJLOC8IN.js";import"./base-Bd27snqx.js";import"./index-C3uaK5s3.js";import"./swiper-Cr1zqDqk.js";import"./swiper-CphuuvCl.js";import"./index-iWYEsCWG.js";const ye=({type:e})=>{var T;const{userConsultations:a,fetchUserConsultations:o,token:i}=n.useContext(q.EscolaLMSContext),{t:l}=I(),[d,x]=n.useState([]),j=n.useMemo(()=>{var u;const r=((u=a.list)==null?void 0:u.data.filter(m=>e===S.STARTED||e===S.UPCOMING?m.in_coming||m.is_started:m.is_ended))||[];return Array.from(new Map(r.map(m=>[m.id,m])).values())},[e,(T=a.list)==null?void 0:T.data]),s=n.useCallback(async(r,f)=>{try{const m=await(await fetch(`${G}/api/consultations/me?ids[]=${r}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}})).json();if(m.success&&m.data.length>0){const g=m.data.findIndex(c=>(c==null?void 0:c.consultation_term_id)===f);x(c=>{const y=c.findIndex(C=>(C==null?void 0:C.consultation_term_id)===f);return y!==-1&&g!==-1&&(c[y]=m.data[g]),[...c]})}}catch(u){console.error(u)}},[i]),E=n.useCallback(()=>{d.forEach(r=>{!r.is_started&&!r.is_ended&&(r==null?void 0:r.consultation_term_id)!==void 0&&s(r==null?void 0:r.id,r==null?void 0:r.consultation_term_id)})},[d,s]);return n.useEffect(()=>{o()},[e,o]),n.useEffect(()=>{x([]),x(j);const r=setInterval(()=>{E()},3e4);return()=>{x([]),clearInterval(r)}},[e,j,E]),t.jsx(ce,{children:t.jsx(v.Row,{style:{gap:"30px 0"},children:a.loading?Array.from({length:8}).map((r,f)=>t.jsx(v.Col,{md:3,children:t.jsx(H,{})},`skeleton-card-${f}`)):d.length===0?t.jsx(P.Text,{style:{paddingLeft:W?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:d.map(r=>t.jsx(v.Col,{xs:12,md:6,lg:3,children:t.jsx(le,{consultation:r})},r.id))})})})},w=n.memo(ye),_e=h.div`
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
`,Ee=({product:e})=>{var a;return e?t.jsx(K,{to:`/consultations/${e==null?void 0:e.consultation_id}`,children:e!=null&&e.consultation_media&&((a=e==null?void 0:e.consultation_media)!=null&&a.image_path)?t.jsx(X,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(me,{})}):null},Te=h.div`
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
`;var p=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(p||{});const _=({status:e,name:a})=>{const o=V(),i=n.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,e]);return t.jsxs(Te,{children:[t.jsx("div",{className:"status",style:{backgroundColor:i}}),t.jsx("div",{className:"name",children:a})]})},Ie=h.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,De=h.div`
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
`,ve={reported:{type:p.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:p.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:p.ENDED,info:"ConsultationStatus.RejectedInfo"}},be=({consultation:e})=>{const{approveConsultationTerm:a,rejectConsultationTerm:o}=n.useContext(k.EscolaLMSContext),{t:i}=I(),l=d=>{switch(d){case"reported":return t.jsx(_,{status:p.WAITING,name:i("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(_,{status:p.ACCEPTED,name:i("ConsultationStatus.Appointment")});case"reject":return t.jsx(_,{status:p.ENDED,name:i("ConsultationStatus.Canceled")})}};return t.jsx(Ie,{children:e.users.map(d=>t.jsxs("div",{children:[t.jsxs(P.Text,{className:"text",children:[d.first_name," ",d.last_name]}),t.jsx(P.Text,{className:"text",children:d.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[ve[d.executed_status]&&l(d.executed_status),t.jsxs(De,{children:[t.jsx(N,{icon:t.jsx(J,{}),text:i("Confirm"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date,d.id)}),t.jsx(N,{icon:t.jsx(z,{}),text:i("Cancel"),onClick:()=>o(e==null?void 0:e.consultation_term_id,e.date,d.id)})]})]}),t.jsx("hr",{})]},d.id))})},Ae=h.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Pe=({consultation:e})=>{const{t:a}=I(),o=e.is_ended,i=e.is_started,l=e.status==="reported",d=e.status==="approved",x=e.status==="not_reported",j=e.status==="reject";return t.jsxs(t.Fragment,{children:[o&&e.date&&t.jsx(b,{type:A.ENDED,date:$(e.date,O(`${e.duration}`))}),j&&t.jsx(b,{type:A.ENDED,date:$(e.date,O(`${e.duration}`))}),l&&!o&&t.jsx(b,{type:A.WAITING,date:e.date,info:a("ConsultationStatus.UnconfirmedInfo")}),d&&!o&&t.jsx(b,{type:A.ACCEPTED,date:e.date,info:i&&(e!=null&&e.consultation_term_id)?t.jsx(Ae,{children:t.jsx(fe,{consultationTermId:e==null?void 0:e.consultation_term_id,consultationId:e==null?void 0:e.consultation_id,term:e.date})}):a("ConsultationStatus.AppointmentInfo",{date:Y(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),x&&t.jsx(b,{type:A.DEFAULT})]})},Se=h.div`
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
`,we=({time:e})=>t.jsxs(Se,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(Z,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(P.Text,{className:"time",children:e})]}),Ne=h.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,ke=({consultation:e})=>t.jsxs(Ne,{children:[t.jsx(be,{consultation:e}),t.jsx(we,{time:e.duration}),t.jsx(Pe,{consultation:e})]});var Ue=ee();const Le=xe(Ue),Re=({consultation:e})=>{const{approveConsultationTerm:a,rejectConsultationTerm:o}=n.useContext(k.EscolaLMSContext),{t:i}=I(),l=n.useMemo(()=>[{id:1,content:t.jsx(N,{icon:t.jsx(J,{}),text:i("Confirm"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date)})},{id:2,content:t.jsx(N,{icon:t.jsx(z,{}),text:i("Cancel"),onClick:()=>o(e==null?void 0:e.consultation_term_id,e.date)})}],[a,e==null?void 0:e.consultation_term_id,o,i,e.date]);return t.jsx(Le,{menuItems:l,child:t.jsx(te.Button,{mode:"icon",children:t.jsx(se,{})})})},Me=h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,$e=({consultation:e})=>{const{status:a,is_ended:o}=e,{t:i}=I(),l=a==="reported",d=a==="approved";return a==="reject"?t.jsx(_,{status:p.CANCELED,name:i("ConsultationStatus.Canceled")}):o?t.jsx(_,{status:p.ENDED,name:i("ConsultationStatus.Ended")}):l?t.jsxs(Me,{children:[t.jsx(_,{status:p.WAITING,name:i("ConsultationStatus.Unconfirmed")}),t.jsx(Re,{consultation:e})]}):d?t.jsx(_,{status:p.ACCEPTED,name:i("ConsultationStatus.Appointment")}):t.jsx(_,{status:p.DEFAULT,name:a})},Oe=e=>{var o;const{consultation:a}=e;return t.jsx(_e,{children:t.jsx(re,{id:a==null?void 0:a.consultation_term_id,image:t.jsx(Ee,{product:a}),title:t.jsx($e,{consultation:a}),subtitle:t.jsx("p",{children:(o=a==null?void 0:a.related_product)==null?void 0:o.name}),footer:t.jsx(ke,{consultation:a})})})},Fe=({type:e})=>{var T;const{tutorConsultations:a,fetchTutorConsultations:o,token:i}=n.useContext(q.EscolaLMSContext),{t:l}=I(),[d,x]=n.useState([]),j=n.useMemo(()=>{var r;return((r=a.list)==null?void 0:r.data.filter(f=>e===S.STARTED||e===S.UPCOMING?f.in_coming||f.is_started:f.is_ended))||[]},[e,(T=a.list)==null?void 0:T.data]),s=n.useCallback(async(r,f)=>{try{const m=await(await fetch(`${G}/api/consultations/my-schedule?ids[]=${r}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}})).json();if(m.success&&m.data.length>0){const g=m.data.findIndex(c=>(c==null?void 0:c.consultation_term_id)===f);x(c=>{const y=c.findIndex(C=>(C==null?void 0:C.consultation_term_id)===f);return y!==-1&&g!==-1&&(c[y]=m.data[g]),[...c]})}}catch(u){console.error(u)}},[i]),E=n.useCallback(()=>{d.forEach(r=>{!r.is_started&&!r.is_ended&&s(r==null?void 0:r.consultation_id,r.consultation_term_id)})},[d,s]);return n.useEffect(()=>{o()},[o]),n.useEffect(()=>{x([]),x(j);const r=setInterval(()=>{E()},3e4);return()=>{x([]),clearInterval(r)}},[e,j,E]),t.jsx(t.Fragment,{children:t.jsx(v.Row,{style:{gap:"30px 0"},children:a.loading?Array.from({length:8}).map((r,f)=>t.jsx(v.Col,{md:3,children:t.jsx(H,{})},`skeleton-card-${f}`)):d.length===0?t.jsx(P.Text,{style:{paddingLeft:W?20:40},children:l("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",d.map(r=>t.jsx(v.Col,{xs:12,md:6,lg:3,children:t.jsx(Oe,{consultation:r})},r.consultation_term_id))]})})})},B=n.memo(Fe),Be=h.div`
  iframe {
    width: 100% !important;
    height: 100vh;
    border: none;
  }
`,qe=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Ge=({onClose:e})=>{var m,g,c,y,C,U;const[a,o]=n.useState(null),[i,l]=n.useState(!1),[d,x]=n.useState(!1),{generateConsultationJitsy:j}=n.useContext(k.EscolaLMSContext),s=n.useContext(Q),[E,T]=n.useState(null),[r,f]=n.useState(0);n.useEffect(()=>{(async()=>{var L,R;if(x(!0),s!=null&&s.consultationData){const M=await j((L=s==null?void 0:s.consultationData)==null?void 0:L.consultationTermId,(R=s==null?void 0:s.consultationData)==null?void 0:R.term);M.success&&o(M.data),x(!1)}})()},[s==null?void 0:s.consultationData]),n.useEffect(()=>()=>{Object.keys(localStorage).forEach(D=>{D.startsWith("questionnaire_")&&localStorage.removeItem(D)})},[]),n.useEffect(()=>{l(!1)},[s==null?void 0:s.consultationData]);const u=n.useCallback(()=>{var D;l(!0),(D=s==null?void 0:s.setModalOpen)==null||D.call(s,!1),e()},[l,e,s]);return t.jsxs(t.Fragment,{children:[t.jsxs(ae.Modal,{visible:s==null?void 0:s.isModalOpen,animation:"zoom",maskAnimation:"fade",width:"100vw",height:"100vh",bodyStyle:{minHeight:"100vh",padding:0,background:"black"},children:[t.jsxs(Be,{children:[d&&t.jsx(ne,{}),t.jsxs(qe,{children:[t.jsx(Ce,{onClose:u,recordingUrl:E,participantCount:r}),!d&&a&&t.jsx(he,{jitsyData:a,modelId:((m=s==null?void 0:s.consultationData)==null?void 0:m.consultationId)??0,modelType:"consultation",consultationTermId:((g=s==null?void 0:s.consultationData)==null?void 0:g.consultationTermId)??0,term:((c=s==null?void 0:s.consultationData)==null?void 0:c.term)??"",close:u,onRecordingAvailable:T,participantCount:r,onParticipantCountChange:f},(y=s==null?void 0:s.consultationData)==null?void 0:y.consultationId)]})]}),t.jsx(ge,{entityId:Number((C=s==null?void 0:s.consultationData)==null?void 0:C.consultationId),entityModel:F.CONSULTATION})]}),i&&t.jsx(je,{entityId:Number((U=s==null?void 0:s.consultationData)==null?void 0:U.consultationId),entityModel:F.CONSULTATION,setIsEnded:l})]})};var S=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(S||{});const xt=()=>{const{t:e}=I(),{isTutor:a}=pe(),o=n.useContext(Q),i=n.useMemo(()=>({tabs:a?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(B,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(B,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx(w,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx(w,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(w,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(w,{type:"is_ended"})}],defaultActiveKey:1}),[a,e]);return t.jsx(ie,{children:t.jsx(ue,{children:t.jsxs(oe,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(de.Tabs,{tabs:i.tabs,defaultActiveKey:i.defaultActiveKey})}),t.jsx(Ge,{onClose:()=>[o==null?void 0:o.setModalOpen(!1)]})]})})})};export{S as ConsultationStatus,xt as default};
//# sourceMappingURL=my-consultations-BPSN2xyO.js.map

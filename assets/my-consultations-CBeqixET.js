import{c as F,a as I,a9 as B,j as t,J as D,o as A,g as q,q as h,L as Q,as as H,X as K,D as N,aR as w,aS as G,aT as W,aU as R,aV as M,ar as X,ah as V,aW as Y,p as Z,aX as ee,aY as te,aZ as J,w as se,U as re,k as ae,C as ne}from"./index-C8RYle4a.js";import{r as n}from"./sentry-DZqhWugq.js";import{T as ie}from"./Tabs-BBLmmjri.js";import{C as oe}from"./index-BTHE13-u.js";import{D as v,a as b}from"./index-CMg6wq3C.js";import{P as de,C as me,a as ce}from"./index-BrazeI_c.js";import{g as le}from"./katex-D1m830yy.js";import{C as z}from"./CourseCard-H03ZoLrr.js";import{u as fe}from"./useRoles-BTPJFye5.js";import{a as xe}from"./index-I7BgikuG.js";import{M as pe,J as ue,E as Ce}from"./index-DvpE0QnH.js";import{Q as $}from"./questionnaire-CXWDgbJ4.js";import{Q as he}from"./index-YRt_p0vN.js";import"./lodash-Bu-jC-fW.js";import"./index-j13jBhAP.js";import"./index-B7vnVY_d.js";import"./questionnaires-Dk2u0aZr.js";import"./useDownloadCertificate-naI9s69Q.js";import"./base-Bd27snqx.js";import"./index-BfmoqrZO.js";import"./swiper-Cjr7D3Sq.js";import"./swiper-CphuuvCl.js";import"./index-BWa02Npu.js";const je=({type:e})=>{var T;const{userConsultations:a,fetchUserConsultations:o,token:i}=n.useContext(F.EscolaLMSContext),{t:f}=I(),[d,x]=n.useState([]),j=n.useMemo(()=>{var C;const r=((C=a.list)==null?void 0:C.data.filter(m=>e===S.STARTED||e===S.UPCOMING?m.in_coming||m.is_started:m.is_ended))||[];return Array.from(new Map(r.map(m=>[m.id,m])).values())},[e,(T=a.list)==null?void 0:T.data]),s=n.useCallback(async(r,l)=>{try{const m=await(await fetch(`${B}/api/consultations/me?ids[]=${r}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}})).json();if(m.success&&m.data.length>0){const g=m.data.findIndex(c=>(c==null?void 0:c.consultation_term_id)===l);x(c=>{const y=c.findIndex(p=>(p==null?void 0:p.consultation_term_id)===l);return y!==-1&&g!==-1&&(c[y]=m.data[g]),[...c]})}}catch(C){console.error(C)}},[i]),E=n.useCallback(()=>{d.forEach(r=>{!r.is_started&&!r.is_ended&&(r==null?void 0:r.consultation_term_id)!==void 0&&s(r==null?void 0:r.id,r==null?void 0:r.consultation_term_id)})},[d,s]);return n.useEffect(()=>{o()},[e,o]),n.useEffect(()=>{x([]),x(j);const r=setInterval(()=>{E()},3e4);return()=>{x([]),clearInterval(r)}},[e,j,E]),t.jsx(de,{children:t.jsx(D.Row,{style:{gap:"30px 0"},children:a.loading?Array.from({length:8}).map((r,l)=>t.jsx(D.Col,{md:3,children:t.jsx(z,{})},`skeleton-card-${l}`)):d.length===0?t.jsx(A.Text,{style:{paddingLeft:q?20:40},children:f("MyProfilePage.OrdersEmpty")}):t.jsx(t.Fragment,{children:d.map(r=>t.jsx(D.Col,{xs:12,md:6,lg:3,children:t.jsx(me,{consultation:r})},r.id))})})})},P=n.memo(je),ge=h.div`
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
`,ye=({product:e})=>{var a;return e?t.jsx(Q,{to:`/consultations/${e==null?void 0:e.consultation_id}`,children:e!=null&&e.consultation_media&&((a=e==null?void 0:e.consultation_media)!=null&&a.image_path)?t.jsx(H,{path:e.consultation_media.image_path,alt:e.name,srcSizes:[300,600,900]}):t.jsx(oe,{})}):null},_e=h.div`
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
`;var u=(e=>(e[e.ACCEPTED=0]="ACCEPTED",e[e.WAITING=1]="WAITING",e[e.ENDED=2]="ENDED",e[e.CANCELED=3]="CANCELED",e[e.DEFAULT=4]="DEFAULT",e))(u||{});const _=({status:e,name:a})=>{const o=K(),i=n.useMemo(()=>{switch(e){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,e]);return t.jsxs(_e,{children:[t.jsx("div",{className:"status",style:{backgroundColor:i}}),t.jsx("div",{className:"name",children:a})]})},Ee=h.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,Te=h.div`
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
`,Ie={reported:{type:u.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:u.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:u.ENDED,info:"ConsultationStatus.RejectedInfo"}},De=({consultation:e})=>{const{approveConsultationTerm:a,rejectConsultationTerm:o}=n.useContext(N.EscolaLMSContext),{t:i}=I(),f=d=>{switch(d){case"reported":return t.jsx(_,{status:u.WAITING,name:i("ConsultationStatus.Unconfirmed")});case"approved":return t.jsx(_,{status:u.ACCEPTED,name:i("ConsultationStatus.Appointment")});case"reject":return t.jsx(_,{status:u.ENDED,name:i("ConsultationStatus.Canceled")})}};return t.jsx(Ee,{children:e.users.map(d=>t.jsxs("div",{children:[t.jsxs(A.Text,{className:"text",children:[d.first_name," ",d.last_name]}),t.jsx(A.Text,{className:"text",children:d.email}),e.users.length>1&&t.jsxs(t.Fragment,{children:[Ie[d.executed_status]&&f(d.executed_status),t.jsxs(Te,{children:[t.jsx(w,{icon:t.jsx(G,{}),text:i("Confirm"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date,d.id)}),t.jsx(w,{icon:t.jsx(W,{}),text:i("Cancel"),onClick:()=>o(e==null?void 0:e.consultation_term_id,e.date,d.id)})]})]}),t.jsx("hr",{})]},d.id))})},ve=h.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,be=({consultation:e})=>{const{t:a}=I(),o=e.is_ended,i=e.is_started,f=e.status==="reported",d=e.status==="approved",x=e.status==="not_reported",j=e.status==="reject";return t.jsxs(t.Fragment,{children:[o&&e.date&&t.jsx(v,{type:b.ENDED,date:R(e.date,M(`${e.duration}`))}),j&&t.jsx(v,{type:b.ENDED,date:R(e.date,M(`${e.duration}`))}),f&&!o&&t.jsx(v,{type:b.WAITING,date:e.date,info:a("ConsultationStatus.UnconfirmedInfo")}),d&&!o&&t.jsx(v,{type:b.ACCEPTED,date:e.date,info:i&&(e!=null&&e.consultation_term_id)?t.jsx(ve,{children:t.jsx(ce,{consultationTermId:e==null?void 0:e.consultation_term_id,consultationId:e==null?void 0:e.consultation_id,term:e.date})}):a("ConsultationStatus.AppointmentInfo",{date:X(e.date,"EEEE, dd LLLL yyyy, HH:mm")})}),x&&t.jsx(v,{type:b.DEFAULT})]})},Ae=h.div`
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
`,Se=({time:e})=>t.jsxs(Ae,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(V,{color:"#ffffff",width:"22px",height:"22px"})}),t.jsx(A.Text,{className:"time",children:e})]}),Pe=h.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,we=({consultation:e})=>t.jsxs(Pe,{children:[t.jsx(De,{consultation:e}),t.jsx(Se,{time:e.duration}),t.jsx(be,{consultation:e})]});var Ne=Y();const ke=le(Ne),Ue=({consultation:e})=>{const{approveConsultationTerm:a,rejectConsultationTerm:o}=n.useContext(N.EscolaLMSContext),{t:i}=I(),f=n.useMemo(()=>[{id:1,content:t.jsx(w,{icon:t.jsx(G,{}),text:i("Confirm"),onClick:()=>a(e==null?void 0:e.consultation_term_id,e.date)})},{id:2,content:t.jsx(w,{icon:t.jsx(W,{}),text:i("Cancel"),onClick:()=>o(e==null?void 0:e.consultation_term_id,e.date)})}],[a,e==null?void 0:e.consultation_term_id,o,i,e.date]);return t.jsx(ke,{menuItems:f,child:t.jsx(Z.Button,{mode:"icon",children:t.jsx(ee,{})})})},Le=h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,Re=({consultation:e})=>{const{status:a,is_ended:o}=e,{t:i}=I(),f=a==="reported",d=a==="approved";return a==="reject"?t.jsx(_,{status:u.CANCELED,name:i("ConsultationStatus.Canceled")}):o?t.jsx(_,{status:u.ENDED,name:i("ConsultationStatus.Ended")}):f?t.jsxs(Le,{children:[t.jsx(_,{status:u.WAITING,name:i("ConsultationStatus.Unconfirmed")}),t.jsx(Ue,{consultation:e})]}):d?t.jsx(_,{status:u.ACCEPTED,name:i("ConsultationStatus.Appointment")}):t.jsx(_,{status:u.DEFAULT,name:a})},Me=e=>{var o;const{consultation:a}=e;return t.jsx(ge,{children:t.jsx(te,{id:a==null?void 0:a.consultation_term_id,image:t.jsx(ye,{product:a}),title:t.jsx(Re,{consultation:a}),subtitle:t.jsx("p",{children:(o=a==null?void 0:a.related_product)==null?void 0:o.name}),footer:t.jsx(we,{consultation:a})})})},$e=({type:e})=>{var T;const{tutorConsultations:a,fetchTutorConsultations:o,token:i}=n.useContext(F.EscolaLMSContext),{t:f}=I(),[d,x]=n.useState([]),j=n.useMemo(()=>{var r;return((r=a.list)==null?void 0:r.data.filter(l=>e===S.STARTED||e===S.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[e,(T=a.list)==null?void 0:T.data]),s=n.useCallback(async(r,l)=>{try{const m=await(await fetch(`${B}/api/consultations/my-schedule?ids[]=${r}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}})).json();if(m.success&&m.data.length>0){const g=m.data.findIndex(c=>(c==null?void 0:c.consultation_term_id)===l);x(c=>{const y=c.findIndex(p=>(p==null?void 0:p.consultation_term_id)===l);return y!==-1&&g!==-1&&(c[y]=m.data[g]),[...c]})}}catch(C){console.error(C)}},[i]),E=n.useCallback(()=>{d.forEach(r=>{!r.is_started&&!r.is_ended&&s(r==null?void 0:r.consultation_id,r.consultation_term_id)})},[d,s]);return n.useEffect(()=>{o()},[o]),n.useEffect(()=>{x([]),x(j);const r=setInterval(()=>{E()},3e4);return()=>{x([]),clearInterval(r)}},[e,j,E]),t.jsx(t.Fragment,{children:t.jsx(D.Row,{style:{gap:"30px 0"},children:a.loading?Array.from({length:8}).map((r,l)=>t.jsx(D.Col,{md:3,children:t.jsx(z,{})},`skeleton-card-${l}`)):d.length===0?t.jsx(A.Text,{style:{paddingLeft:q?20:40},children:f("MyProfilePage.OrdersEmpty")}):t.jsxs(t.Fragment,{children:[" ",d.map(r=>t.jsx(D.Col,{xs:12,md:6,lg:3,children:t.jsx(Me,{consultation:r})},r.consultation_term_id))]})})})},O=n.memo($e),Oe=h.div`
  iframe {
    width: 100% !important;
    height: 100vh;
    border: none;
  }
`,Fe=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Be=({onClose:e})=>{var l,C,m,g,c,y;const[a,o]=n.useState(null),[i,f]=n.useState(!1),[d,x]=n.useState(!1),{generateConsultationJitsy:j}=n.useContext(N.EscolaLMSContext),s=n.useContext(J),[E,T]=n.useState(null);n.useEffect(()=>{(async()=>{var k,U;if(x(!0),s!=null&&s.consultationData){const L=await j((k=s==null?void 0:s.consultationData)==null?void 0:k.consultationTermId,(U=s==null?void 0:s.consultationData)==null?void 0:U.term);L.success&&o(L.data),x(!1)}})()},[s==null?void 0:s.consultationData]),n.useEffect(()=>()=>{Object.keys(localStorage).forEach(p=>{p.startsWith("questionnaire_")&&localStorage.removeItem(p)})},[]),n.useEffect(()=>{f(!1)},[s==null?void 0:s.consultationData]);const r=n.useCallback(()=>{var p;f(!0),(p=s==null?void 0:s.setModalOpen)==null||p.call(s,!1),e()},[f,e,s]);return t.jsxs(t.Fragment,{children:[t.jsxs(se.Modal,{visible:s==null?void 0:s.isModalOpen,animation:"zoom",maskAnimation:"fade",width:"100vw",height:"100vh",bodyStyle:{minHeight:"100vh",padding:0,background:"black"},children:[t.jsxs(Oe,{children:[d&&t.jsx(re,{}),t.jsxs(Fe,{children:[t.jsx(pe,{onClose:r,recordingUrl:E}),!d&&a&&t.jsx(ue,{jitsyData:a,modelId:((l=s==null?void 0:s.consultationData)==null?void 0:l.consultationId)??0,modelType:"consultation",consultationTermId:((C=s==null?void 0:s.consultationData)==null?void 0:C.consultationTermId)??0,term:((m=s==null?void 0:s.consultationData)==null?void 0:m.term)??"",close:r,onRecordingAvailable:T},(g=s==null?void 0:s.consultationData)==null?void 0:g.consultationId)]})]}),t.jsx(he,{entityId:Number((c=s==null?void 0:s.consultationData)==null?void 0:c.consultationId),entityModel:$.CONSULTATION})]}),i&&t.jsx(Ce,{entityId:Number((y=s==null?void 0:s.consultationData)==null?void 0:y.consultationId),entityModel:$.CONSULTATION,setIsEnded:f})]})};var S=(e=>(e.UPCOMING="in_coming",e.PAST="is_ended",e.STARTED="is_started",e))(S||{});const lt=()=>{const{t:e}=I(),{isTutor:a}=fe(),o=n.useContext(J),i=n.useMemo(()=>({tabs:a?[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(O,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(O,{type:"is_ended"})},{label:e("MyProfilePage.BoughtUpcoming"),key:3,component:t.jsx(P,{type:"in_coming"})},{label:e("MyProfilePage.BoughtArchived"),key:4,component:t.jsx(P,{type:"is_ended"})}]:[{label:e("MyProfilePage.Upcoming"),key:1,component:t.jsx(P,{type:"in_coming"})},{label:e("MyProfilePage.Archived"),key:2,component:t.jsx(P,{type:"is_ended"})}],defaultActiveKey:1}),[a,e]);return t.jsx(ae,{children:t.jsx(xe,{children:t.jsxs(ne,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(ie.Tabs,{tabs:i.tabs,defaultActiveKey:i.defaultActiveKey})}),t.jsx(Be,{onClose:()=>[o==null?void 0:o.setModalOpen(!1)]})]})})})};export{S as ConsultationStatus,lt as default};
//# sourceMappingURL=my-consultations-CBeqixET.js.map

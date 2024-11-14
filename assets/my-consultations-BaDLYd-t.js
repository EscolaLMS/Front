import{r as i,i as _,h as u,j as e,U as j,x,o as P,q as c,L as b,al as I,aQ as y,aR as E,ak as v,at as A,X as M,aS as N,g as L,K as w,aT as T,aU as R,aV as S,y as U,aW as k,aX as $,$ as F,v as B,C as G}from"./index-fLzfRICx.js";import{a as O,T as W}from"./index-BiXVeFzQ.js";import{C as K}from"./index-_-oHElzk.js";import{P as q,C as X,D as p,a as C,b as z}from"./index-8ceVNEno.js";import{u as H}from"./useRoles-0ozfsvuk.js";import{C as V}from"./CourseCard-CnKy93dI.js";import"./questionnaire-CXWDgbJ4.js";import"./questionnaires-D6GUbSAI.js";import"./useDownloadCertificate-C_kpTWOc.js";import"./base-DdFT33YW.js";import"./index-1o8A6gAP.js";import"./swiper-Y1OIlzVo.js";import"./swiper-react-Il8edV5V.js";import"./a11y-DzCD3up1.js";import"./warning-4RavIMUc.js";import"./index-CUo86Ouv.js";import"./index-vHS9T1Bq.js";const J=({type:t})=>{var d;const{userConsultations:s,fetchUserConsultations:o}=i.useContext(_.EscolaLMSContext),{t:n}=u(),a=i.useMemo(()=>{var r;return((r=s.list)==null?void 0:r.data.filter(l=>t===h.STARTED||t===h.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{o()},[t,o]),e.jsx(q,{children:e.jsx(j.Row,{style:{gap:"30px 0"},children:s.loading?Array.from({length:8}).map((r,l)=>e.jsx(j.Col,{md:3,children:e.jsx(V,{})},`skeleton-card-${l}`)):a.length===0?e.jsx(x.Text,{style:{paddingLeft:P?20:40},children:n("MyProfilePage.OrdersEmpty")}):e.jsx(e.Fragment,{children:a.map(r=>e.jsx(j.Col,{xs:12,md:6,lg:3,children:e.jsx(X,{consultation:r})},r.id))})})})},g=i.memo(J),Q=c.div`
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
    font-family: ${({theme:t})=>t.font};
  }
`,Y=({product:t})=>t?e.jsx(b,{to:`/consultations/${t.id}`,children:t.poster_path?e.jsx(I,{path:t.poster_path,alt:t.name,srcSizes:[300,600,900]}):e.jsx(K,{})}):null,Z=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,tt=({consultation:t})=>e.jsx(Z,{children:t.users.map(s=>e.jsxs("div",{children:[e.jsxs(x.Text,{className:"text",children:[s.first_name," ",s.last_name]}),e.jsx(x.Text,{className:"text",children:s.email}),e.jsx(x.Text,{className:"text",children:s.phone}),e.jsx("hr",{})]},s.id))}),et=c.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,st=({consultation:t})=>{const{t:s}=u(),o=t.is_ended,n=t.is_started,a=t.status==="reported",d=t.status==="approved",r=t.status==="not_reported",l=t.status==="reject";return e.jsxs(e.Fragment,{children:[o&&t.date&&e.jsx(p,{type:C.ENDED,date:y(t.date,E(`${t.duration}`))}),l&&e.jsx(p,{type:C.ENDED,date:y(t.date,E(`${t.duration}`))}),a&&!o&&e.jsx(p,{type:C.WAITING,date:t.date,info:s("ConsultationStatus.UnconfirmedInfo")}),d&&!o&&e.jsx(p,{type:C.ACCEPTED,date:t.date,info:n&&t.consultation_term_id?e.jsx(et,{children:e.jsx(z,{consultationTermId:t.consultation_term_id})}):s("ConsultationStatus.AppointmentInfo",{date:v(t.date,"EEEE, dd LLLL yyyy, HH:mm")})}),r&&e.jsx(p,{type:C.DEFAULT})]})},ot=c.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({theme:t})=>t.primaryColor};
  border-radius: 2px;
  align-items: center;
  border-radius: ${({theme:t})=>t.cardRadius}px;
  .icon-container {
    display: flex;
    align-items: center;
    padding: 0.6rem;
    background-color: ${({theme:t})=>t.primaryColor};
    border-top-left-radius: ${({theme:t})=>(t.cardRadius??2)-2}px;
    border-bottom-left-radius: ${({theme:t})=>(t.cardRadius??2)-2}px;
  }

  .time {
    padding: 0.5rem;
    margin: 0 auto;
  }
`,nt=({time:t})=>e.jsxs(ot,{children:[e.jsx("div",{className:"icon-container",children:e.jsx(A,{color:"#ffffff",width:"22px",height:"22px"})}),e.jsx(x.Text,{className:"time",children:t})]}),rt=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,at=({consultation:t})=>e.jsxs(rt,{children:[e.jsx(tt,{consultation:t}),e.jsx(nt,{time:t.duration}),e.jsx(st,{consultation:t})]}),it=c.div`
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
    font-family: ${({theme:t})=>t.font};
  }
`;var m=(t=>(t[t.ACCEPTED=0]="ACCEPTED",t[t.WAITING=1]="WAITING",t[t.ENDED=2]="ENDED",t[t.CANCELED=3]="CANCELED",t[t.DEFAULT=4]="DEFAULT",t))(m||{});const f=({status:t,name:s})=>{const o=M(),n=i.useMemo(()=>{switch(t){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,t]);return e.jsxs(it,{children:[e.jsx("div",{className:"status",style:{backgroundColor:n}}),e.jsx("div",{className:"name",children:s})]})};var dt=N();const lt=L(dt),ct=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:o}=i.useContext(w.EscolaLMSContext),{t:n}=u(),{consultation_term_id:a}=t,d=i.useMemo(()=>[{id:1,content:e.jsx(T,{icon:e.jsx(R,{}),text:n("Confirm"),onClick:()=>s(a,t.date)})},{id:2,content:e.jsx(T,{icon:e.jsx(S,{}),text:n("Cancel"),onClick:()=>o(a,t.date)})}],[s,a,o,n,t.date]);return e.jsx(lt,{menuItems:d,child:e.jsx(U.Button,{mode:"icon",children:e.jsx(k,{})})})},mt=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,xt=({consultation:t})=>{const{status:s,is_ended:o}=t,{t:n}=u(),a=s==="reported",d=s==="approved";return s==="reject"?e.jsx(f,{status:m.CANCELED,name:n("ConsultationStatus.Canceled")}):o?e.jsx(f,{status:m.ENDED,name:n("ConsultationStatus.Ended")}):a?e.jsxs(mt,{children:[e.jsx(f,{status:m.WAITING,name:n("ConsultationStatus.Unconfirmed")}),e.jsx(ct,{consultation:t})]}):d?e.jsx(f,{status:m.ACCEPTED,name:n("ConsultationStatus.Appointment")}):e.jsx(f,{status:m.DEFAULT,name:s})},ut=t=>{var o;const{consultation:s}=t;return e.jsx(Q,{children:e.jsx($,{id:s.consultation_term_id,image:e.jsx(Y,{product:s.related_product}),title:e.jsx(xt,{consultation:s}),subtitle:e.jsx("p",{children:(o=s.related_product)==null?void 0:o.name}),footer:e.jsx(at,{consultation:s})})})},pt=({type:t})=>{var d;const{tutorConsultations:s,fetchTutorConsultations:o}=i.useContext(_.EscolaLMSContext),{t:n}=u(),a=i.useMemo(()=>{var r;return((r=s.list)==null?void 0:r.data.filter(l=>t===h.STARTED||t===h.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{o()},[o]),e.jsx(e.Fragment,{children:s.loading?e.jsx(F,{}):a.length===0?e.jsx(x.Text,{style:{paddingLeft:P?20:40},children:n("MyProfilePage.OrdersEmpty")}):e.jsx(j.Row,{style:{gap:"30px 0"},children:a.map(r=>e.jsx(j.Col,{xs:12,md:6,lg:3,children:e.jsx(ut,{consultation:r})},r.consultation_term_id))})})},D=i.memo(pt);var h=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(h||{});const Lt=()=>{const{t}=u(),{isTutor:s}=H(),o=i.useMemo(()=>({tabs:s?[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(D,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(D,{type:"is_ended"})},{label:t("MyProfilePage.BoughtUpcoming"),key:3,component:e.jsx(g,{type:"in_coming"})},{label:t("MyProfilePage.BoughtArchived"),key:4,component:e.jsx(g,{type:"is_ended"})}]:[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(g,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(g,{type:"is_ended"})}],defaultActiveKey:1}),[s,t]);return e.jsx(B,{children:e.jsx(O,{children:e.jsx(G,{children:e.jsx("div",{className:"courses-wrapper",children:e.jsx(W.Tabs,{tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})})})})})};export{h as ConsultationStatus,Lt as default};

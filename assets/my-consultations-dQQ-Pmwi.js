import{r as i,i as P,h as x,j as e,U as h,x as g,o as v,q as m,L as S,ak as M,X as w,K as A,aP as T,aQ as b,aR as N,aS as D,aT as _,aj as L,as as U,aU as R,g as k,y as $,aV as F,aW as B,$ as G,v as W,C as O}from"./index-CD4m0m91.js";import{a as K,T as q}from"./index-DvKCozwO.js";import{C as z}from"./index-Bl18cPsA.js";import{P as H,C as V,D as f,a as j,b as X}from"./index-dgpqIlq-.js";import{u as J}from"./useRoles-BaW_97Yq.js";import{C as Q}from"./CourseCard-BrIciOI_.js";import"./questionnaire-CXWDgbJ4.js";import"./questionnaires-aw0isazL.js";import"./useDownloadCertificate-DerECiC7.js";import"./base-DdFT33YW.js";import"./index-J9T9aVd8.js";import"./swiper-CvL8pbFc.js";import"./swiper-react-e8GtKPCY.js";import"./a11y-B__xtIWB.js";import"./warning-LX-z1nhn.js";import"./index-DLRIBwEi.js";import"./index-COt4SKXg.js";const Y=({type:t})=>{var l;const{userConsultations:s,fetchUserConsultations:n}=i.useContext(P.EscolaLMSContext),{t:o}=x(),[a,r]=i.useState([]),c=i.useMemo(()=>{var p;return((p=s.list)==null?void 0:p.data.filter(C=>t===E.STARTED||t===E.UPCOMING?C.in_coming||C.is_started:C.is_ended))||[]},[t,(l=s.list)==null?void 0:l.data]);return i.useEffect(()=>{n()},[t,n]),i.useEffect(()=>(r(c),()=>{r([])}),[c]),e.jsx(H,{children:e.jsx(h.Row,{style:{gap:"30px 0"},children:s.loading?Array.from({length:8}).map((p,C)=>e.jsx(h.Col,{md:3,children:e.jsx(Q,{})},`skeleton-card-${C}`)):a.length===0?e.jsx(g.Text,{style:{paddingLeft:v?20:40},children:o("MyProfilePage.OrdersEmpty")}):e.jsx(e.Fragment,{children:a.map(p=>e.jsx(h.Col,{xs:12,md:6,lg:3,children:e.jsx(V,{consultation:p})},p.id))})})})},y=i.memo(Y),Z=m.div`
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
`,tt=({product:t})=>t?e.jsx(S,{to:`/consultations/${t.id}`,children:t.poster_path?e.jsx(M,{path:t.poster_path,alt:t.name,srcSizes:[300,600,900]}):e.jsx(z,{})}):null,et=m.div`
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
`;var d=(t=>(t[t.ACCEPTED=0]="ACCEPTED",t[t.WAITING=1]="WAITING",t[t.ENDED=2]="ENDED",t[t.CANCELED=3]="CANCELED",t[t.DEFAULT=4]="DEFAULT",t))(d||{});const u=({status:t,name:s})=>{const n=w(),o=i.useMemo(()=>{switch(t){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return n.primaryColor}},[n.primaryColor,t]);return e.jsxs(et,{children:[e.jsx("div",{className:"status",style:{backgroundColor:o}}),e.jsx("div",{className:"name",children:s})]})},st=m.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,nt=m.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  > p {
    padding: 2px;
    border-radius: ${({theme:t})=>t.radius};
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
`,ot={reported:{type:d.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:d.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:d.ENDED,info:"ConsultationStatus.RejectedInfo"}},rt=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:n}=i.useContext(A.EscolaLMSContext),{t:o}=x(),a=r=>{switch(r){case"reported":return e.jsx(u,{status:d.WAITING,name:o("ConsultationStatus.Unconfirmed")});case"approved":return e.jsx(u,{status:d.ACCEPTED,name:o("ConsultationStatus.Appointment")});case"reject":return e.jsx(u,{status:d.ENDED,name:o("ConsultationStatus.Canceled")})}};return e.jsx(st,{children:t.users.map(r=>e.jsxs("div",{children:[e.jsxs(g.Text,{className:"text",children:[r.first_name," ",r.last_name]}),e.jsx(g.Text,{className:"text",children:r.email}),t.users.length>1&&e.jsxs(e.Fragment,{children:[ot[r.executed_status]&&a(r.executed_status),e.jsxs(nt,{children:[e.jsx(T,{icon:e.jsx(b,{}),text:o("Confirm"),onClick:()=>s(t.consultation_term_id,t.date,r.id)}),e.jsx(T,{icon:e.jsx(N,{}),text:o("Cancel"),onClick:()=>n(t.consultation_term_id,t.date,r.id)})]})]}),e.jsx("hr",{})]},r.id))})},at=m.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,it=({consultation:t})=>{const{t:s}=x(),n=t.is_ended,o=t.is_started,a=t.status==="reported",r=t.status==="approved",c=t.status==="not_reported",l=t.status==="reject";return e.jsxs(e.Fragment,{children:[n&&t.date&&e.jsx(f,{type:j.ENDED,date:D(t.date,_(`${t.duration}`))}),l&&e.jsx(f,{type:j.ENDED,date:D(t.date,_(`${t.duration}`))}),a&&!n&&e.jsx(f,{type:j.WAITING,date:t.date,info:s("ConsultationStatus.UnconfirmedInfo")}),r&&!n&&e.jsx(f,{type:j.ACCEPTED,date:t.date,info:o&&t.consultation_term_id?e.jsx(at,{children:e.jsx(X,{consultationTermId:t.consultation_term_id,consultationId:t.consultation_id,term:t.date})}):s("ConsultationStatus.AppointmentInfo",{date:L(t.date,"EEEE, dd LLLL yyyy, HH:mm")})}),c&&e.jsx(f,{type:j.DEFAULT})]})},dt=m.div`
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
`,ct=({time:t})=>e.jsxs(dt,{children:[e.jsx("div",{className:"icon-container",children:e.jsx(U,{color:"#ffffff",width:"22px",height:"22px"})}),e.jsx(g.Text,{className:"time",children:t})]}),lt=m.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,ut=({consultation:t})=>e.jsxs(lt,{children:[e.jsx(rt,{consultation:t}),e.jsx(ct,{time:t.duration}),e.jsx(it,{consultation:t})]});var mt=R();const xt=k(mt),pt=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:n}=i.useContext(A.EscolaLMSContext),{t:o}=x(),{consultation_term_id:a}=t,r=i.useMemo(()=>[{id:1,content:e.jsx(T,{icon:e.jsx(b,{}),text:o("Confirm"),onClick:()=>s(a,t.date)})},{id:2,content:e.jsx(T,{icon:e.jsx(N,{}),text:o("Cancel"),onClick:()=>n(a,t.date)})}],[s,a,n,o,t.date]);return e.jsx(xt,{menuItems:r,child:e.jsx($.Button,{mode:"icon",children:e.jsx(F,{})})})},Ct=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,ft=({consultation:t})=>{const{status:s,is_ended:n}=t,{t:o}=x(),a=s==="reported",r=s==="approved";return s==="reject"?e.jsx(u,{status:d.CANCELED,name:o("ConsultationStatus.Canceled")}):n?e.jsx(u,{status:d.ENDED,name:o("ConsultationStatus.Ended")}):a?e.jsxs(Ct,{children:[e.jsx(u,{status:d.WAITING,name:o("ConsultationStatus.Unconfirmed")}),e.jsx(pt,{consultation:t})]}):r?e.jsx(u,{status:d.ACCEPTED,name:o("ConsultationStatus.Appointment")}):e.jsx(u,{status:d.DEFAULT,name:s})},jt=t=>{var n;const{consultation:s}=t;return e.jsx(Z,{children:e.jsx(B,{id:s.consultation_term_id,image:e.jsx(tt,{product:s.related_product}),title:e.jsx(ft,{consultation:s}),subtitle:e.jsx("p",{children:(n=s.related_product)==null?void 0:n.name}),footer:e.jsx(ut,{consultation:s})})})},ht=({type:t})=>{var r;const{tutorConsultations:s,fetchTutorConsultations:n}=i.useContext(P.EscolaLMSContext),{t:o}=x(),a=i.useMemo(()=>{var c;return((c=s.list)==null?void 0:c.data.filter(l=>t===E.STARTED||t===E.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(r=s.list)==null?void 0:r.data]);return i.useEffect(()=>{n()},[n]),e.jsx(e.Fragment,{children:s.loading?e.jsx(G,{}):a.length===0?e.jsx(g.Text,{style:{paddingLeft:v?20:40},children:o("MyProfilePage.OrdersEmpty")}):e.jsx(h.Row,{style:{gap:"30px 0"},children:a.map(c=>e.jsx(h.Col,{xs:12,md:6,lg:3,children:e.jsx(jt,{consultation:c})},c.consultation_term_id))})})},I=i.memo(ht);var E=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(E||{});const Rt=()=>{const{t}=x(),{isTutor:s}=J(),n=i.useMemo(()=>({tabs:s?[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(I,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(I,{type:"is_ended"})},{label:t("MyProfilePage.BoughtUpcoming"),key:3,component:e.jsx(y,{type:"in_coming"})},{label:t("MyProfilePage.BoughtArchived"),key:4,component:e.jsx(y,{type:"is_ended"})}]:[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(y,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(y,{type:"is_ended"})}],defaultActiveKey:1}),[s,t]);return e.jsx(W,{children:e.jsx(K,{children:e.jsx(O,{children:e.jsx("div",{className:"courses-wrapper",children:e.jsx(q.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})})})})})};export{E as ConsultationStatus,Rt as default};

import{r as i,i as P,h as x,j as e,V as h,y as g,o as b,q as m,L as w,al as L,X as R,N,aQ as T,aR as M,aS as S,aT as I,aU as v,ak as U,at as k,aV as $,g as F,z as B,aW as G,aX as W,a0 as q,v as O,C as z}from"./index-Cov4NIbj.js";import{a as K,T as V}from"./index-Bi-FPMOZ.js";import{C as X}from"./index-DQjgTkW6.js";import{P as H,C as J,D as f,a as j,b as Q}from"./index-DhqZ6sg9.js";import{u as Y}from"./useRoles-v00MWHfW.js";import{C as Z}from"./CourseCard-DHUyca3p.js";import"./questionnaire-CXWDgbJ4.js";import"./questionnaires-BQPZ2tJN.js";import"./useDownloadCertificate-BQatk7ZM.js";import"./base-7gvCcPfx.js";import"./index-DE1mb58R.js";import"./swiper-Bjf-0xAq.js";import"./swiper-react-CfoARLNE.js";import"./a11y-BTMGBKUS.js";import"./floating-ui.react-dom-D0I_2yxE.js";import"./index-Dd7-zItb.js";import"./index-afGA12bm.js";import"./index-KCVTbkR8.js";const tt=({type:t})=>{var c;const{userConsultations:s,fetchUserConsultations:n}=i.useContext(P.EscolaLMSContext),{t:r}=x(),[a,o]=i.useState([]),l=i.useMemo(()=>{var _;const C=((_=s.list)==null?void 0:_.data.filter(p=>t===E.STARTED||t===E.UPCOMING?p.in_coming||p.is_started:p.is_ended))||[];return Array.from(new Map(C.map(p=>[p.id,p])).values())},[t,(c=s.list)==null?void 0:c.data]);return i.useEffect(()=>{n()},[t,n]),i.useEffect(()=>(o([]),o(l),()=>{o([])}),[t,l]),e.jsx(H,{children:e.jsx(h.Row,{style:{gap:"30px 0"},children:s.loading?Array.from({length:8}).map((C,D)=>e.jsx(h.Col,{md:3,children:e.jsx(Z,{})},`skeleton-card-${D}`)):a.length===0?e.jsx(g.Text,{style:{paddingLeft:b?20:40},children:r("MyProfilePage.OrdersEmpty")}):e.jsx(e.Fragment,{children:a.map(C=>e.jsx(h.Col,{xs:12,md:6,lg:3,children:e.jsx(J,{consultation:C})},C.id))})})})},y=i.memo(tt),et=m.div`
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
`,st=({product:t})=>t?e.jsx(w,{to:`/consultations/${t.id}`,children:t.poster_path?e.jsx(L,{path:t.poster_path,alt:t.name,srcSizes:[300,600,900]}):e.jsx(X,{})}):null,nt=m.div`
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
`;var d=(t=>(t[t.ACCEPTED=0]="ACCEPTED",t[t.WAITING=1]="WAITING",t[t.ENDED=2]="ENDED",t[t.CANCELED=3]="CANCELED",t[t.DEFAULT=4]="DEFAULT",t))(d||{});const u=({status:t,name:s})=>{const n=R(),r=i.useMemo(()=>{switch(t){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return n.primaryColor}},[n.primaryColor,t]);return e.jsxs(nt,{children:[e.jsx("div",{className:"status",style:{backgroundColor:r}}),e.jsx("div",{className:"name",children:s})]})},ot=m.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;
  margin-bottom: 5px;
  .text {
    margin: 0;
    font-size: 14px;
  }
`,rt=m.div`
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
`,at={reported:{type:d.WAITING,info:"ConsultationStatus.UnconfirmedInfo"},approved:{type:d.ACCEPTED,info:"ConsultationStatus.ConfirmedInfo"},reject:{type:d.ENDED,info:"ConsultationStatus.RejectedInfo"}},it=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:n}=i.useContext(N.EscolaLMSContext),{t:r}=x(),a=o=>{switch(o){case"reported":return e.jsx(u,{status:d.WAITING,name:r("ConsultationStatus.Unconfirmed")});case"approved":return e.jsx(u,{status:d.ACCEPTED,name:r("ConsultationStatus.Appointment")});case"reject":return e.jsx(u,{status:d.ENDED,name:r("ConsultationStatus.Canceled")})}};return e.jsx(ot,{children:t.users.map(o=>e.jsxs("div",{children:[e.jsxs(g.Text,{className:"text",children:[o.first_name," ",o.last_name]}),e.jsx(g.Text,{className:"text",children:o.email}),t.users.length>1&&e.jsxs(e.Fragment,{children:[at[o.executed_status]&&a(o.executed_status),e.jsxs(rt,{children:[e.jsx(T,{icon:e.jsx(M,{}),text:r("Confirm"),onClick:()=>s(t.consultation_term_id,t.date,o.id)}),e.jsx(T,{icon:e.jsx(S,{}),text:r("Cancel"),onClick:()=>n(t.consultation_term_id,t.date,o.id)})]})]}),e.jsx("hr",{})]},o.id))})},dt=m.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,lt=({consultation:t})=>{const{t:s}=x(),n=t.is_ended,r=t.is_started,a=t.status==="reported",o=t.status==="approved",l=t.status==="not_reported",c=t.status==="reject";return e.jsxs(e.Fragment,{children:[n&&t.date&&e.jsx(f,{type:j.ENDED,date:I(t.date,v(`${t.duration}`))}),c&&e.jsx(f,{type:j.ENDED,date:I(t.date,v(`${t.duration}`))}),a&&!n&&e.jsx(f,{type:j.WAITING,date:t.date,info:s("ConsultationStatus.UnconfirmedInfo")}),o&&!n&&e.jsx(f,{type:j.ACCEPTED,date:t.date,info:r&&t.consultation_term_id?e.jsx(dt,{children:e.jsx(Q,{consultationTermId:t.consultation_term_id,consultationId:t.consultation_id,term:t.date})}):s("ConsultationStatus.AppointmentInfo",{date:U(t.date,"EEEE, dd LLLL yyyy, HH:mm")})}),l&&e.jsx(f,{type:j.DEFAULT})]})},ct=m.div`
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
`,ut=({time:t})=>e.jsxs(ct,{children:[e.jsx("div",{className:"icon-container",children:e.jsx(k,{color:"#ffffff",width:"22px",height:"22px"})}),e.jsx(g.Text,{className:"time",children:t})]}),mt=m.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,xt=({consultation:t})=>e.jsxs(mt,{children:[e.jsx(it,{consultation:t}),e.jsx(ut,{time:t.duration}),e.jsx(lt,{consultation:t})]});var pt=$();const Ct=F(pt),ft=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:n}=i.useContext(N.EscolaLMSContext),{t:r}=x(),{consultation_term_id:a}=t,o=i.useMemo(()=>[{id:1,content:e.jsx(T,{icon:e.jsx(M,{}),text:r("Confirm"),onClick:()=>s(a,t.date)})},{id:2,content:e.jsx(T,{icon:e.jsx(S,{}),text:r("Cancel"),onClick:()=>n(a,t.date)})}],[s,a,n,r,t.date]);return e.jsx(Ct,{menuItems:o,child:e.jsx(B.Button,{mode:"icon",children:e.jsx(G,{})})})},jt=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,ht=({consultation:t})=>{const{status:s,is_ended:n}=t,{t:r}=x(),a=s==="reported",o=s==="approved";return s==="reject"?e.jsx(u,{status:d.CANCELED,name:r("ConsultationStatus.Canceled")}):n?e.jsx(u,{status:d.ENDED,name:r("ConsultationStatus.Ended")}):a?e.jsxs(jt,{children:[e.jsx(u,{status:d.WAITING,name:r("ConsultationStatus.Unconfirmed")}),e.jsx(ft,{consultation:t})]}):o?e.jsx(u,{status:d.ACCEPTED,name:r("ConsultationStatus.Appointment")}):e.jsx(u,{status:d.DEFAULT,name:s})},gt=t=>{var n;const{consultation:s}=t;return e.jsx(et,{children:e.jsx(W,{id:s.consultation_term_id,image:e.jsx(st,{product:s.related_product}),title:e.jsx(ht,{consultation:s}),subtitle:e.jsx("p",{children:(n=s.related_product)==null?void 0:n.name}),footer:e.jsx(xt,{consultation:s})})})},Et=({type:t})=>{var o;const{tutorConsultations:s,fetchTutorConsultations:n}=i.useContext(P.EscolaLMSContext),{t:r}=x(),a=i.useMemo(()=>{var l;return((l=s.list)==null?void 0:l.data.filter(c=>t===E.STARTED||t===E.UPCOMING?c.in_coming||c.is_started:c.is_ended))||[]},[t,(o=s.list)==null?void 0:o.data]);return i.useEffect(()=>{n()},[n]),e.jsx(e.Fragment,{children:s.loading?e.jsx(q,{}):a.length===0?e.jsx(g.Text,{style:{paddingLeft:b?20:40},children:r("MyProfilePage.OrdersEmpty")}):e.jsx(h.Row,{style:{gap:"30px 0"},children:a.map(l=>e.jsx(h.Col,{xs:12,md:6,lg:3,children:e.jsx(gt,{consultation:l})},l.consultation_term_id))})})},A=i.memo(Et);var E=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(E||{});const Ft=()=>{const{t}=x(),{isTutor:s}=Y(),n=i.useMemo(()=>({tabs:s?[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(A,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(A,{type:"is_ended"})},{label:t("MyProfilePage.BoughtUpcoming"),key:3,component:e.jsx(y,{type:"in_coming"})},{label:t("MyProfilePage.BoughtArchived"),key:4,component:e.jsx(y,{type:"is_ended"})}]:[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(y,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(y,{type:"is_ended"})}],defaultActiveKey:1}),[s,t]);return e.jsx(O,{children:e.jsx(K,{children:e.jsx(z,{children:e.jsx("div",{className:"courses-wrapper",children:e.jsx(V.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})})})})})};export{E as ConsultationStatus,Ft as default};

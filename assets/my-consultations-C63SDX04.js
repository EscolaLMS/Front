import{r as i,i as _,h as m,j as e,$ as P,x,o as I,U as g,q as c,L as b,ak as v,aP as y,aQ as E,aj as A,as as M,X as N,aR as L,g as w,K as R,aS as T,aT as U,aU as S,y as k,aV as $,aW as B,v as F,C as G}from"./index-DMEaDbL2.js";import{a as O,T as W}from"./index-Biv2cOa_.js";import{C as K}from"./index-2_Yu-yEN.js";import{P as q,C as z,D as p,a as C,b as H}from"./index-CMl1UQ5b.js";import{u as V}from"./useRoles-ClkkD2v2.js";import"./index-B_8aLlci.js";import"./questionnaires-D-ydJBRr.js";import"./useDownloadCertificate-BvhKcDUc.js";import"./base-DdFT33YW.js";import"./index-Cgok2pEk.js";import"./swiper-w72Q-aQP.js";import"./swiper-react-CcMmZze_.js";import"./a11y-I4Fe_F0J.js";import"./CourseCard-BVopZ_ZN.js";import"./index-BcMNIAcd.js";import"./warning-bWiOVVW-.js";const X=({type:t})=>{var d;const{userConsultations:s,fetchUserConsultations:o}=i.useContext(_.EscolaLMSContext),{t:n}=m(),r=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(l=>t===j.STARTED||t===j.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{o()},[t,o]),e.jsx(q,{children:s.loading?e.jsx(P,{}):r.length===0?e.jsx(x.Text,{style:{paddingLeft:I?20:40},children:n("MyProfilePage.OrdersEmpty")}):e.jsx(g.Row,{style:{gap:"30px 0"},children:r.map(a=>e.jsx(g.Col,{xs:12,md:6,lg:3,children:e.jsx(z,{consultation:a})},a.id))})})},h=i.memo(X),J=c.div`
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
`,Q=({product:t})=>t?e.jsx(b,{to:`/consultations/${t.id}`,children:t.poster_path?e.jsx(v,{path:t.poster_path,alt:t.name,srcSizes:[300,600,900]}):e.jsx(K,{})}):null,Y=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;

  .text {
    margin: 0;
    font-size: 14px;
  }
`,Z=({consultation:t})=>{const{first_name:s,last_name:o,email:n,phone:r}=t.user;return e.jsxs(Y,{children:[e.jsxs(x.Text,{className:"text",children:[s," ",o]}),e.jsx(x.Text,{className:"text",children:n}),e.jsx(x.Text,{className:"text",children:r})]})},tt=c.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,et=({consultation:t})=>{const{t:s}=m(),o=t.is_ended,n=t.is_started,r=t.status==="reported",d=t.status==="approved",a=t.status==="not_reported",l=t.status==="reject";return e.jsxs(e.Fragment,{children:[o&&t.date&&e.jsx(p,{type:C.ENDED,date:y(t.date,E(`${t.duration}`))}),l&&e.jsx(p,{type:C.ENDED,date:y(t.date,E(`${t.duration}`))}),r&&!o&&e.jsx(p,{type:C.WAITING,date:t.date,info:s("ConsultationStatus.UnconfirmedInfo")}),d&&!o&&e.jsx(p,{type:C.ACCEPTED,date:t.date,info:n&&t.consultation_term_id?e.jsx(tt,{children:e.jsx(H,{consultationTermId:t.consultation_term_id})}):s("ConsultationStatus.AppointmentInfo",{date:A(t.date,"EEEE, dd LLLL yyyy, HH:mm")})}),a&&e.jsx(p,{type:C.DEFAULT})]})},st=c.div`
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
`,ot=({time:t})=>e.jsxs(st,{children:[e.jsx("div",{className:"icon-container",children:e.jsx(M,{color:"#ffffff",width:"22px",height:"22px"})}),e.jsx(x.Text,{className:"time",children:t})]}),nt=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,rt=({consultation:t})=>e.jsxs(nt,{children:[e.jsx(Z,{consultation:t}),e.jsx(ot,{time:t.duration}),e.jsx(et,{consultation:t})]}),at=c.div`
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
`;var u=(t=>(t[t.ACCEPTED=0]="ACCEPTED",t[t.WAITING=1]="WAITING",t[t.ENDED=2]="ENDED",t[t.CANCELED=3]="CANCELED",t[t.DEFAULT=4]="DEFAULT",t))(u||{});const f=({status:t,name:s})=>{const o=N(),n=i.useMemo(()=>{switch(t){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,t]);return e.jsxs(at,{children:[e.jsx("div",{className:"status",style:{backgroundColor:n}}),e.jsx("div",{className:"name",children:s})]})};var it=L();const dt=w(it),lt=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:o}=i.useContext(R.EscolaLMSContext),{t:n}=m(),{consultation_term_id:r}=t,d=i.useMemo(()=>[{id:1,content:e.jsx(T,{icon:e.jsx(U,{}),text:n("Confirm"),onClick:()=>s(r)})},{id:2,content:e.jsx(T,{icon:e.jsx(S,{}),text:n("Cancel"),onClick:()=>o(r)})}],[s,r,o,n]);return e.jsx(dt,{menuItems:d,child:e.jsx(k.Button,{mode:"icon",children:e.jsx($,{})})})},ct=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,ut=({consultation:t})=>{const{status:s,is_ended:o}=t,{t:n}=m(),r=s==="reported",d=s==="approved";return s==="reject"?e.jsx(f,{status:u.CANCELED,name:n("ConsultationStatus.Canceled")}):o?e.jsx(f,{status:u.ENDED,name:n("ConsultationStatus.Ended")}):r?e.jsxs(ct,{children:[e.jsx(f,{status:u.WAITING,name:n("ConsultationStatus.Unconfirmed")}),e.jsx(lt,{consultation:t})]}):d?e.jsx(f,{status:u.ACCEPTED,name:n("ConsultationStatus.Appointment")}):e.jsx(f,{status:u.DEFAULT,name:s})},xt=t=>{var o;const{consultation:s}=t;return e.jsx(J,{children:e.jsx(B,{id:s.consultation_term_id,image:e.jsx(Q,{product:s.related_product}),title:e.jsx(ut,{consultation:s}),subtitle:e.jsx("p",{children:(o=s.related_product)==null?void 0:o.name}),footer:e.jsx(rt,{consultation:s})})})},mt=({type:t})=>{var d;const{tutorConsultations:s,fetchTutorConsultations:o}=i.useContext(_.EscolaLMSContext),{t:n}=m(),r=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(l=>t===j.STARTED||t===j.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{o()},[o]),e.jsx(e.Fragment,{children:s.loading?e.jsx(P,{}):r.length===0?e.jsx(x.Text,{style:{paddingLeft:I?20:40},children:n("MyProfilePage.OrdersEmpty")}):e.jsx(g.Row,{style:{gap:"30px 0"},children:r.map(a=>e.jsx(g.Col,{xs:12,md:6,lg:3,children:e.jsx(xt,{consultation:a})},a.consultation_term_id))})})},D=i.memo(mt);var j=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(j||{});const Mt=()=>{const{t}=m(),{isTutor:s}=V(),o=i.useMemo(()=>({tabs:s?[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(D,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(D,{type:"is_ended"})},{label:t("MyProfilePage.BoughtUpcoming"),key:3,component:e.jsx(h,{type:"in_coming"})},{label:t("MyProfilePage.BoughtArchived"),key:4,component:e.jsx(h,{type:"is_ended"})}]:[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(h,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(h,{type:"is_ended"})}],defaultActiveKey:1}),[s,t]);return e.jsx(F,{children:e.jsx(O,{children:e.jsx(G,{children:e.jsx("div",{className:"courses-wrapper",children:e.jsx(W.Tabs,{tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})})})})})};export{j as ConsultationStatus,Mt as default};

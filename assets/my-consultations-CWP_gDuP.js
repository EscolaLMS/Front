import{r as i,k as _,f as x,j as e,s as u,m as D,i as g,q as c,w as A,al as v,X as b,h as M,aB as y,aP as N,aQ as L,aR as w,v as S,aS as U,I as R}from"./index-Duhnd3NG.js";import{P as k}from"./index-Dn2Rm74I.js";import{T as B}from"./Tabs-JkWdeoWs.js";import{a as $}from"./ResponsiveImage-CKPbfW5t.js";import{C as F}from"./index-B7aoIFqz.js";import{a as T,e as E,f as G}from"./date-DtH1bSeH.js";import{D as C,a as p}from"./index-D-Kp-gXP.js";import{P as O,C as W,a as K}from"./index-oDIIxnaL.js";import{C as I}from"./index-CDaAQ3M0.js";import{u as q}from"./useRoles-DSkD3nJi.js";import"components/atoms/Typography/Text";import"./app-B2E7767C.js";const z=({type:t})=>{var d;const{userConsultations:s,fetchUserConsultations:o}=i.useContext(_.EscolaLMSContext),{t:n}=x(),r=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(l=>t===j.STARTED||t===j.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{o()},[t,o]),e.jsx(O,{children:s.loading?e.jsx(I,{}):r.length===0?e.jsx(u.Text,{style:{paddingLeft:D?20:40},children:n("MyProfilePage.OrdersEmpty")}):e.jsx(g.Row,{style:{gap:"30px 0"},children:r.map(a=>e.jsx(g.Col,{xs:12,md:6,lg:4,children:e.jsx(W,{consultation:a})},a.id))})})},h=i.memo(z),H=c.div`
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
`,X=({product:t})=>t?e.jsx(A,{to:`/consultations/${t.id}`,children:t.poster_path?e.jsx($,{path:t.poster_path,alt:t.name,srcSizes:[300,600,900]}):e.jsx(F,{})}):null,J=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;

  .text {
    margin: 0;
    font-size: 14px;
  }
`,Q=({consultation:t})=>{const{first_name:s,last_name:o,email:n,phone:r}=t.user;return e.jsxs(J,{children:[e.jsxs(u.Text,{className:"text",children:[s," ",o]}),e.jsx(u.Text,{className:"text",children:n}),e.jsx(u.Text,{className:"text",children:r})]})},V=c.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Y=({consultation:t})=>{const{t:s}=x(),o=t.is_ended,n=t.is_started,r=t.status==="reported",d=t.status==="approved",a=t.status==="not_reported",l=t.status==="reject";return e.jsxs(e.Fragment,{children:[o&&t.date&&e.jsx(C,{type:p.ENDED,date:T(t.date,E(`${t.duration}`))}),l&&e.jsx(C,{type:p.ENDED,date:T(t.date,E(`${t.duration}`))}),r&&!o&&e.jsx(C,{type:p.WAITING,date:t.date,info:s("ConsultationStatus.UnconfirmedInfo")}),d&&!o&&e.jsx(C,{type:p.ACCEPTED,date:t.date,info:n&&t.consultation_term_id?e.jsx(V,{children:e.jsx(K,{consultationTermId:t.consultation_term_id})}):s("ConsultationStatus.AppointmentInfo",{date:G(t.date,"EEEE, dd LLLL yyyy, HH:mm")})}),a&&e.jsx(C,{type:p.DEFAULT})]})},Z=c.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({theme:t})=>t.primaryColor};
  border-radius: 2px;
  align-items: center;

  .icon-container {
    display: flex;
    align-items: center;
    padding: 0.6rem;
    background-color: ${({theme:t})=>t.primaryColor};
  }

  .time {
    padding: 0.5rem;
    margin: 0 auto;
  }
`,tt=({time:t})=>e.jsxs(Z,{children:[e.jsx("div",{className:"icon-container",children:e.jsx(v,{color:"#ffffff",width:"22px",height:"22px"})}),e.jsx(u.Text,{className:"time",children:t})]}),et=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,st=({consultation:t})=>e.jsxs(et,{children:[e.jsx(Q,{consultation:t}),e.jsx(tt,{time:t.duration}),e.jsx(Y,{consultation:t})]}),ot=c.div`
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
`;var m=(t=>(t[t.ACCEPTED=0]="ACCEPTED",t[t.WAITING=1]="WAITING",t[t.ENDED=2]="ENDED",t[t.CANCELED=3]="CANCELED",t[t.DEFAULT=4]="DEFAULT",t))(m||{});const f=({status:t,name:s})=>{const o=b(),n=i.useMemo(()=>{switch(t){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,t]);return e.jsxs(ot,{children:[e.jsx("div",{className:"status",style:{backgroundColor:n}}),e.jsx("div",{className:"name",children:s})]})},nt=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:o}=i.useContext(M.EscolaLMSContext),{t:n}=x(),{consultation_term_id:r}=t,d=i.useMemo(()=>[{id:1,content:e.jsx(y,{icon:e.jsx(N,{}),text:n("Confirm"),onClick:()=>s(r)})},{id:2,content:e.jsx(y,{icon:e.jsx(L,{}),text:n("Cancel"),onClick:()=>o(r)})}],[s,r,o,n]);return e.jsx(w,{menuItems:d,child:e.jsx(S.Button,{mode:"icon",children:e.jsx(U,{})})})},rt=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,at=({consultation:t})=>{const{status:s,is_ended:o}=t,{t:n}=x(),r=s==="reported",d=s==="approved";return s==="reject"?e.jsx(f,{status:m.CANCELED,name:n("ConsultationStatus.Canceled")}):o?e.jsx(f,{status:m.ENDED,name:n("ConsultationStatus.Ended")}):r?e.jsxs(rt,{children:[e.jsx(f,{status:m.WAITING,name:n("ConsultationStatus.Unconfirmed")}),e.jsx(nt,{consultation:t})]}):d?e.jsx(f,{status:m.ACCEPTED,name:n("ConsultationStatus.Appointment")}):e.jsx(f,{status:m.DEFAULT,name:s})},it=t=>{var o;const{consultation:s}=t;return e.jsx(H,{children:e.jsx(R,{id:s.consultation_term_id,image:e.jsx(X,{product:s.related_product}),title:e.jsx(at,{consultation:s}),subtitle:e.jsx("p",{children:(o=s.related_product)==null?void 0:o.name}),footer:e.jsx(st,{consultation:s})})})},dt=({type:t})=>{var d;const{tutorConsultations:s,fetchTutorConsultations:o}=i.useContext(_.EscolaLMSContext),{t:n}=x(),r=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(l=>t===j.STARTED||t===j.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{o()},[o]),e.jsx(e.Fragment,{children:s.loading?e.jsx(I,{}):r.length===0?e.jsx(u.Text,{style:{paddingLeft:D?20:40},children:n("MyProfilePage.OrdersEmpty")}):e.jsx(g.Row,{style:{gap:"30px 0"},children:r.map(a=>e.jsx(g.Col,{xs:12,md:6,lg:4,children:e.jsx(it,{consultation:a})},a.consultation_term_id))})})},P=i.memo(dt);var j=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(j||{});const Tt=()=>{const{t}=x(),{isTutor:s}=q(),o=i.useMemo(()=>({tabs:s?[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(P,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(P,{type:"is_ended"})},{label:t("MyProfilePage.BoughtUpcoming"),key:3,component:e.jsx(h,{type:"in_coming"})},{label:t("MyProfilePage.BoughtArchived"),key:4,component:e.jsx(h,{type:"is_ended"})}]:[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(h,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(h,{type:"is_ended"})}],defaultActiveKey:1}),[s,t]);return e.jsx(k,{title:t("MyProfilePage.MyConsultations"),withTabs:!0,children:e.jsx(B.Tabs,{tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})})};export{j as ConsultationStatus,Tt as default};

import{r as i,h as _,f as x,j as e,a2 as P,s as m,n as I,w as h,q as c,L as A,aY as y,aZ as E,ai as b,am as v,X as M,a_ as N,g as w,D as L,aG as T,a$ as S,b0 as U,v as R,b1 as k,J as $}from"./index-CBf-QksF.js";import{P as B}from"./index-giA7nHkv.js";import{T as F}from"./Tabs-HSHUgx-X.js";import{a as G}from"./ResponsiveImage-BnPBXGWb.js";import{C as O}from"./index-DSumW0cD.js";import{D as C,a as p}from"./index-B3rIIyXq.js";import{P as W,C as q,a as K}from"./index-uC-ekOh-.js";import{u as z}from"./useRoles-G7t6bNfP.js";const H=({type:t})=>{var d;const{userConsultations:s,fetchUserConsultations:n}=i.useContext(_.EscolaLMSContext),{t:o}=x(),r=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(l=>t===j.STARTED||t===j.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{n()},[t,n]),e.jsx(W,{children:s.loading?e.jsx(P,{}):r.length===0?e.jsx(m.Text,{style:{paddingLeft:I?20:40},children:o("MyProfilePage.OrdersEmpty")}):e.jsx(h.Row,{style:{gap:"30px 0"},children:r.map(a=>e.jsx(h.Col,{xs:12,md:6,lg:4,children:e.jsx(q,{consultation:a})},a.id))})})},g=i.memo(H),J=c.div`
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
`,X=({product:t})=>t?e.jsx(A,{to:`/consultations/${t.id}`,children:t.poster_path?e.jsx(G,{path:t.poster_path,alt:t.name,srcSizes:[300,600,900]}):e.jsx(O,{})}):null,V=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;

  .text {
    margin: 0;
    font-size: 14px;
  }
`,Y=({consultation:t})=>{const{first_name:s,last_name:n,email:o,phone:r}=t.user;return e.jsxs(V,{children:[e.jsxs(m.Text,{className:"text",children:[s," ",n]}),e.jsx(m.Text,{className:"text",children:o}),e.jsx(m.Text,{className:"text",children:r})]})},Z=c.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Q=({consultation:t})=>{const{t:s}=x(),n=t.is_ended,o=t.is_started,r=t.status==="reported",d=t.status==="approved",a=t.status==="not_reported",l=t.status==="reject";return e.jsxs(e.Fragment,{children:[n&&t.date&&e.jsx(C,{type:p.ENDED,date:y(t.date,E(`${t.duration}`))}),l&&e.jsx(C,{type:p.ENDED,date:y(t.date,E(`${t.duration}`))}),r&&!n&&e.jsx(C,{type:p.WAITING,date:t.date,info:s("ConsultationStatus.UnconfirmedInfo")}),d&&!n&&e.jsx(C,{type:p.ACCEPTED,date:t.date,info:o&&t.consultation_term_id?e.jsx(Z,{children:e.jsx(K,{consultationTermId:t.consultation_term_id})}):s("ConsultationStatus.AppointmentInfo",{date:b(t.date,"EEEE, dd LLLL yyyy, HH:mm")})}),a&&e.jsx(C,{type:p.DEFAULT})]})},tt=c.div`
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
`,et=({time:t})=>e.jsxs(tt,{children:[e.jsx("div",{className:"icon-container",children:e.jsx(v,{color:"#ffffff",width:"22px",height:"22px"})}),e.jsx(m.Text,{className:"time",children:t})]}),st=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,nt=({consultation:t})=>e.jsxs(st,{children:[e.jsx(Y,{consultation:t}),e.jsx(et,{time:t.duration}),e.jsx(Q,{consultation:t})]}),ot=c.div`
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
`;var u=(t=>(t[t.ACCEPTED=0]="ACCEPTED",t[t.WAITING=1]="WAITING",t[t.ENDED=2]="ENDED",t[t.CANCELED=3]="CANCELED",t[t.DEFAULT=4]="DEFAULT",t))(u||{});const f=({status:t,name:s})=>{const n=M(),o=i.useMemo(()=>{switch(t){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return n.primaryColor}},[n.primaryColor,t]);return e.jsxs(ot,{children:[e.jsx("div",{className:"status",style:{backgroundColor:o}}),e.jsx("div",{className:"name",children:s})]})};var rt=N();const at=w(rt),it=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:n}=i.useContext(L.EscolaLMSContext),{t:o}=x(),{consultation_term_id:r}=t,d=i.useMemo(()=>[{id:1,content:e.jsx(T,{icon:e.jsx(S,{}),text:o("Confirm"),onClick:()=>s(r)})},{id:2,content:e.jsx(T,{icon:e.jsx(U,{}),text:o("Cancel"),onClick:()=>n(r)})}],[s,r,n,o]);return e.jsx(at,{menuItems:d,child:e.jsx(R.Button,{mode:"icon",children:e.jsx(k,{})})})},dt=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,lt=({consultation:t})=>{const{status:s,is_ended:n}=t,{t:o}=x(),r=s==="reported",d=s==="approved";return s==="reject"?e.jsx(f,{status:u.CANCELED,name:o("ConsultationStatus.Canceled")}):n?e.jsx(f,{status:u.ENDED,name:o("ConsultationStatus.Ended")}):r?e.jsxs(dt,{children:[e.jsx(f,{status:u.WAITING,name:o("ConsultationStatus.Unconfirmed")}),e.jsx(it,{consultation:t})]}):d?e.jsx(f,{status:u.ACCEPTED,name:o("ConsultationStatus.Appointment")}):e.jsx(f,{status:u.DEFAULT,name:s})},ct=t=>{var n;const{consultation:s}=t;return e.jsx(J,{children:e.jsx($,{id:s.consultation_term_id,image:e.jsx(X,{product:s.related_product}),title:e.jsx(lt,{consultation:s}),subtitle:e.jsx("p",{children:(n=s.related_product)==null?void 0:n.name}),footer:e.jsx(nt,{consultation:s})})})},ut=({type:t})=>{var d;const{tutorConsultations:s,fetchTutorConsultations:n}=i.useContext(_.EscolaLMSContext),{t:o}=x(),r=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(l=>t===j.STARTED||t===j.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{n()},[n]),e.jsx(e.Fragment,{children:s.loading?e.jsx(P,{}):r.length===0?e.jsx(m.Text,{style:{paddingLeft:I?20:40},children:o("MyProfilePage.OrdersEmpty")}):e.jsx(h.Row,{style:{gap:"30px 0"},children:r.map(a=>e.jsx(h.Col,{xs:12,md:6,lg:4,children:e.jsx(ct,{consultation:a})},a.consultation_term_id))})})},D=i.memo(ut);var j=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(j||{});const yt=()=>{const{t}=x(),{isTutor:s}=z(),n=i.useMemo(()=>({tabs:s?[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(D,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(D,{type:"is_ended"})},{label:t("MyProfilePage.BoughtUpcoming"),key:3,component:e.jsx(g,{type:"in_coming"})},{label:t("MyProfilePage.BoughtArchived"),key:4,component:e.jsx(g,{type:"is_ended"})}]:[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(g,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(g,{type:"is_ended"})}],defaultActiveKey:1}),[s,t]);return e.jsx(B,{title:t("MyProfilePage.MyConsultations"),withTabs:!0,children:e.jsx(F.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})})};export{j as ConsultationStatus,yt as default};

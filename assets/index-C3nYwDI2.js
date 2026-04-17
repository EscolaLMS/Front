import{g as b,q as g,j as e,T as W,o as M,L as j,p as h,a as m,aU as v,aV as _,aM as f,U as E,f as D,J as P,c as C}from"./index-Bh0S307Q.js";import{r}from"./sentry-DZqhWugq.js";import{P as I}from"./index-DGS3h0QV.js";import{T as A}from"./Tabs-C2ffXOit.js";import{W as S,a as k}from"./index-B2h7cfm7.js";import{D as p,a as u}from"./index-DBo-72SV.js";import{W as L}from"./index-D1ujyro0.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";import"./index-D5tbPW1A.js";import"./index-DKGXq-s_.js";import"./index-C9ToxrQk.js";import"./useRoles-et2rZKWT.js";import"./questionnaire-CXWDgbJ4.js";import"./index-B7vnVY_d.js";import"./index-B1PNhBb5.js";const U=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
  padding: ${b?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;

  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,$=({title:t,description:i,buttonText:s,buttonLocation:o})=>e.jsxs(U,{children:[e.jsx(W.Title,{level:3,children:t}),e.jsx(M.Text,{className:"small-text",children:i}),e.jsx(j,{to:o,children:e.jsx(h.Button,{mode:"secondary",children:s})})]}),J=({webinar:t})=>{const i=t.is_ended,s=t.is_started,{t:o}=m();return i&&t.active_to?e.jsx(p,{type:u.ENDED,date:v(t.active_to,_(`${t.duration}`))}):s&&t.active_to?e.jsx(p,{type:u.ACCEPTED,date:t.active_to,info:o("MyProfilePage.WebinarIsStarted")}):t.active_to?e.jsx(p,{type:u.DEFAULT,date:t.active_to}):null},N=({webinar:t,onJoin:i})=>{const s=t.is_started,{t:o}=m();return s?e.jsx(f,{mode:"secondary",onClick:i,children:o("Join")}):e.jsx(j,{to:`/webinar/${t.id}`,children:e.jsx(f,{mode:"secondary",children:o("Show")})})},R=g(P.Row)`
  gap: 30px 0;
`,B=({webinars:t,loading:i})=>{const[s,o]=r.useState(void 0),[d,c]=r.useState(void 0),a=r.useContext(S),{t:n}=m(),T=r.useCallback(()=>{o(void 0)},[]);return i?e.jsx(E,{}):t.length===0?e.jsx($,{title:n("MyProfilePage.EmptyWebinarTitle"),description:n("MyProfilePage.EmptyWebinarText"),buttonText:n("MyProfilePage.EmptyWebinarsBtnText"),buttonLocation:D.webinars}):e.jsxs(R,{children:[t.map(l=>e.jsx(P.Col,{xs:12,md:6,lg:4,children:e.jsx(k,{webinar:l,actions:e.jsx(N,{webinar:l,onJoin:()=>{var x;c(l),o(l.id),(x=a==null?void 0:a.setModalOpen)==null||x.call(a,!0)}}),footer:e.jsx(J,{webinar:l})})},l.id)),!!s&&e.jsx(L,{visible:!!s,onClose:T,webinarId:s,webinar:d})]})},y=r.memo(B);var K=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(K||{});const it=()=>{const{userWebinars:t,fetchUserWebinars:i}=r.useContext(C.EscolaLMSContext),{t:s}=m();r.useEffect(()=>{i()},[i]);const{upcomingWebinars:o,pastWebinars:d}=r.useMemo(()=>(t.list??[]).reduce((a,n)=>((n.in_coming||n.is_started)&&a.upcomingWebinars.push(n),n.is_ended&&a.pastWebinars.push(n),a),{upcomingWebinars:[],pastWebinars:[]}),[t.list]),c=r.useMemo(()=>({tabs:[{label:s("MyProfilePage.Upcoming"),key:1,component:e.jsx(y,{webinars:o,loading:t.loading})},{label:s("MyProfilePage.Archived"),key:2,component:e.jsx(y,{webinars:d,loading:t.loading,isPast:!0})}],defaultActiveKey:1}),[d,s,o,t.loading]);return e.jsx(I,{title:s("MyProfilePage.MyWebinars"),withTabs:!0,children:e.jsx(A.Tabs,{tabs:c.tabs,defaultActiveKey:c.defaultActiveKey})})};export{K as WebinarStatus,it as default};
//# sourceMappingURL=index-C3nYwDI2.js.map

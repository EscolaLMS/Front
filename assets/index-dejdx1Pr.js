import{q as f,m as j,j as e,T as P,s as T,w as y,v as b,f as l,aA as p,r as a,i as g,n as W,k as h}from"./index-Duhnd3NG.js";import{P as v}from"./index-Dn2Rm74I.js";import{T as M}from"./Tabs-JkWdeoWs.js";import{C as _}from"./index-CDaAQ3M0.js";import{W as E}from"./index-D2xbmsNP.js";import{a as C,e as D}from"./date-DtH1bSeH.js";import{D as m,a as x}from"./index-D-Kp-gXP.js";import{W as A}from"./index-BgjA_Aub.js";import"components/atoms/Typography/Text";import"./ResponsiveImage-CKPbfW5t.js";import"./index-B7aoIFqz.js";import"./index-s_L9J9A7.js";import"./app-B2E7767C.js";const I=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
  padding: ${j?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;

  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,S=({title:t,description:i,buttonText:s,buttonLocation:o})=>e.jsxs(I,{children:[e.jsx(P.Title,{level:3,children:t}),e.jsx(T.Text,{className:"small-text",children:i}),e.jsx(y,{to:o,children:e.jsx(b.Button,{mode:"secondary",children:s})})]}),k=({webinar:t})=>{const i=t.is_ended,s=t.is_started,{t:o}=l();return i&&t.active_to?e.jsx(m,{type:x.ENDED,date:C(t.active_to,D(`${t.duration}`))}):s&&t.active_to?e.jsx(m,{type:x.ACCEPTED,date:t.active_to,info:o("MyProfilePage.WebinarIsStarted")}):t.active_to?e.jsx(m,{type:x.DEFAULT,date:t.active_to}):null},L=({webinar:t,onJoin:i})=>{const s=t.is_started,{t:o}=l();return s?e.jsx(p,{mode:"secondary",onClick:i,children:o("Join")}):e.jsx(y,{to:`/webinar/${t.id}`,children:e.jsx(p,{mode:"secondary",children:o("Show")})})},$=f(g.Row)`
  gap: 30px 0;
`,N=({webinars:t,loading:i})=>{const[s,o]=a.useState(void 0),{t:r}=l();return i?e.jsx(_,{}):t.length===0?e.jsx(S,{title:r("MyProfilePage.EmptyWebinarTitle"),description:r("MyProfilePage.EmptyWebinarText"),buttonText:r("MyProfilePage.EmptyWebinarsBtnText"),buttonLocation:W.webinars}):e.jsxs($,{children:[t.map(n=>e.jsx(g.Col,{xs:12,md:6,lg:4,children:e.jsx(E,{webinar:n,actions:e.jsx(L,{webinar:n,onJoin:()=>o(n.id)}),footer:e.jsx(k,{webinar:n})})},n.id)),!!s&&e.jsx(A,{visible:!!s,onClose:()=>o(void 0),webinarId:s})]})},u=a.memo(N);var R=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(R||{});const Y=()=>{const{userWebinars:t,fetchUserWebinars:i}=a.useContext(h.EscolaLMSContext),{t:s}=l();a.useEffect(()=>{i()},[i]);const{upcomingWebinars:o,pastWebinars:r}=a.useMemo(()=>(t.list??[]).reduce((c,d)=>((d.in_coming||d.is_started)&&c.upcomingWebinars.push(d),d.is_ended&&c.pastWebinars.push(d),c),{upcomingWebinars:[],pastWebinars:[]}),[t.list]),n=a.useMemo(()=>({tabs:[{label:s("MyProfilePage.Upcoming"),key:1,component:e.jsx(u,{webinars:o,loading:t.loading})},{label:s("MyProfilePage.Archived"),key:2,component:e.jsx(u,{webinars:r,loading:t.loading,isPast:!0})}],defaultActiveKey:1}),[r,s,o,t.loading]);return e.jsx(v,{title:s("MyProfilePage.MyWebinars"),withTabs:!0,children:e.jsx(M.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})})};export{R as WebinarStatus,Y as default};

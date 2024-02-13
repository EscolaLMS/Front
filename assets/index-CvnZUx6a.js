import{q as f,m as j,j as e,T as P,s as T,w as y,v as b,f as l,aA as p,r as a,i as g,n as W,k as h}from"./index-8nfYNS1Y.js";import{P as v}from"./index-DG-kaJNk.js";import{T as M}from"./Tabs-vCzF-nNU.js";import{C as _}from"./index-DBeeu3RS.js";import{W as E}from"./index-DEFKTinO.js";import{a as C,e as D}from"./date-Dn2wePPJ.js";import{D as m,a as x}from"./index-CPpvDPZD.js";import{W as A}from"./index-BIeDC2a9.js";import"./ResponsiveImage-D2Ds7Ba-.js";import"./index-C779-yNS.js";import"./index-kxjE66PW.js";import"./app-B2E7767C.js";const I=f.div`
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
`,N=({webinars:t,loading:i})=>{const[s,o]=a.useState(void 0),{t:r}=l();return i?e.jsx(_,{}):t.length===0?e.jsx(S,{title:r("MyProfilePage.EmptyWebinarTitle"),description:r("MyProfilePage.EmptyWebinarText"),buttonText:r("MyProfilePage.EmptyWebinarsBtnText"),buttonLocation:W.webinars}):e.jsxs($,{children:[t.map(n=>e.jsx(g.Col,{xs:12,md:6,lg:4,children:e.jsx(E,{webinar:n,actions:e.jsx(L,{webinar:n,onJoin:()=>o(n.id)}),footer:e.jsx(k,{webinar:n})})},n.id)),!!s&&e.jsx(A,{visible:!!s,onClose:()=>o(void 0),webinarId:s})]})},u=a.memo(N);var R=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(R||{});const X=()=>{const{userWebinars:t,fetchUserWebinars:i}=a.useContext(h.EscolaLMSContext),{t:s}=l();a.useEffect(()=>{i()},[i]);const{upcomingWebinars:o,pastWebinars:r}=a.useMemo(()=>(t.list??[]).reduce((c,d)=>((d.in_coming||d.is_started)&&c.upcomingWebinars.push(d),d.is_ended&&c.pastWebinars.push(d),c),{upcomingWebinars:[],pastWebinars:[]}),[t.list]),n=a.useMemo(()=>({tabs:[{label:s("MyProfilePage.Upcoming"),key:1,component:e.jsx(u,{webinars:o,loading:t.loading})},{label:s("MyProfilePage.Archived"),key:2,component:e.jsx(u,{webinars:r,loading:t.loading,isPast:!0})}],defaultActiveKey:1}),[r,s,o,t.loading]);return e.jsx(v,{title:s("MyProfilePage.MyWebinars"),withTabs:!0,children:e.jsx(M.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})})};export{R as WebinarStatus,X as default};

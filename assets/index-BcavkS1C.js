import{q as f,n as j,j as e,T as P,s as b,L as y,v as T,f as d,b3 as W,b4 as h,aK as p,r,w as g,a0 as v,l as M,h as _}from"./index-BxTLNZRa.js";import{P as E}from"./index-CJiIKhQQ.js";import{T as D}from"./Tabs-CwZWgZha.js";import{W as C}from"./index-qxxXB7Dr.js";import{D as m,a as x}from"./index-BQamTqZs.js";import{W as I}from"./index-Cb7Npzaq.js";import"./index-zcbTMobk.js";import"./ResponsiveImage-BL00KlJk.js";import"./index-BO57T78B.js";import"./index-B24d7565.js";import"./toast-sK0s2imx.js";const A=f.div`
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
`,S=({title:t,description:i,buttonText:s,buttonLocation:o})=>e.jsxs(A,{children:[e.jsx(P.Title,{level:3,children:t}),e.jsx(b.Text,{className:"small-text",children:i}),e.jsx(y,{to:o,children:e.jsx(T.Button,{mode:"secondary",children:s})})]}),L=({webinar:t})=>{const i=t.is_ended,s=t.is_started,{t:o}=d();return i&&t.active_to?e.jsx(m,{type:x.ENDED,date:W(t.active_to,h(`${t.duration}`))}):s&&t.active_to?e.jsx(m,{type:x.ACCEPTED,date:t.active_to,info:o("MyProfilePage.WebinarIsStarted")}):t.active_to?e.jsx(m,{type:x.DEFAULT,date:t.active_to}):null},k=({webinar:t,onJoin:i})=>{const s=t.is_started,{t:o}=d();return s?e.jsx(p,{mode:"secondary",onClick:i,children:o("Join")}):e.jsx(y,{to:`/webinar/${t.id}`,children:e.jsx(p,{mode:"secondary",children:o("Show")})})},$=f(g.Row)`
  gap: 30px 0;
`,N=({webinars:t,loading:i})=>{const[s,o]=r.useState(void 0),{t:a}=d();return i?e.jsx(v,{}):t.length===0?e.jsx(S,{title:a("MyProfilePage.EmptyWebinarTitle"),description:a("MyProfilePage.EmptyWebinarText"),buttonText:a("MyProfilePage.EmptyWebinarsBtnText"),buttonLocation:M.webinars}):e.jsxs($,{children:[t.map(n=>e.jsx(g.Col,{xs:12,md:6,lg:4,children:e.jsx(C,{webinar:n,actions:e.jsx(k,{webinar:n,onJoin:()=>o(n.id)}),footer:e.jsx(L,{webinar:n})})},n.id)),!!s&&e.jsx(I,{visible:!!s,onClose:()=>o(void 0),webinarId:s})]})},u=r.memo(N);var R=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(R||{});const V=()=>{const{userWebinars:t,fetchUserWebinars:i}=r.useContext(_.EscolaLMSContext),{t:s}=d();r.useEffect(()=>{i()},[i]);const{upcomingWebinars:o,pastWebinars:a}=r.useMemo(()=>(t.list??[]).reduce((c,l)=>((l.in_coming||l.is_started)&&c.upcomingWebinars.push(l),l.is_ended&&c.pastWebinars.push(l),c),{upcomingWebinars:[],pastWebinars:[]}),[t.list]),n=r.useMemo(()=>({tabs:[{label:s("MyProfilePage.Upcoming"),key:1,component:e.jsx(u,{webinars:o,loading:t.loading})},{label:s("MyProfilePage.Archived"),key:2,component:e.jsx(u,{webinars:a,loading:t.loading,isPast:!0})}],defaultActiveKey:1}),[a,s,o,t.loading]);return e.jsx(E,{title:s("MyProfilePage.MyWebinars"),withTabs:!0,children:e.jsx(D.Tabs,{tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})})};export{R as WebinarStatus,V as default};
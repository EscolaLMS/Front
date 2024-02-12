import{q as y,n as j,j as e,l as p,G as b,v as g,f as c,au as u,r as a,i as P,o as T,k as W}from"./index-BsLXwVX-.js";import{P as h}from"./index-iAlfguab.js";import{T as v}from"./Tabs-BM0UnGoM.js";import{C as E}from"./index-DD3hn7qC.js";import{W as M}from"./index-ByoWIqYb.js";import{a as _,e as C}from"./date-C5z6T5_w.js";import{D as m,a as x}from"./index-jMulucNq.js";import{W as D}from"./index-BDK5YOam.js";import"./ResponsiveImage-KgADMS5g.js";import"./index-2LkLTXFl.js";import"./index-DrXkeQ_F.js";import"./app-B2E7767C.js";const I=y.div`
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
`,A=({title:t,description:i,buttonText:o,buttonLocation:s})=>e.jsxs(I,{children:[e.jsx(p.Title,{level:3,children:t}),e.jsx(b.Text,{className:"small-text",children:i}),e.jsx(g,{to:s,children:e.jsx(p.Button,{mode:"secondary",children:o})})]}),S=({webinar:t})=>{const i=t.is_ended,o=t.is_started,{t:s}=c();return i&&t.active_to?e.jsx(m,{type:x.ENDED,date:_(t.active_to,C(`${t.duration}`))}):o&&t.active_to?e.jsx(m,{type:x.ACCEPTED,date:t.active_to,info:s("MyProfilePage.WebinarIsStarted")}):t.active_to?e.jsx(m,{type:x.DEFAULT,date:t.active_to}):null},k=({webinar:t,onJoin:i})=>{const o=t.is_started,{t:s}=c();return o?e.jsx(u,{mode:"secondary",onClick:i,children:s("Join")}):e.jsx(g,{to:`/webinar/${t.id}`,children:e.jsx(u,{mode:"secondary",children:s("Show")})})},L=y(P.Row)`
  gap: 30px 0;
`,N=({webinars:t,loading:i,isPast:o})=>{const[s,l]=a.useState(void 0),{t:r}=c();return i?e.jsx(E,{}):t.length===0?e.jsx(A,{title:r("MyProfilePage.EmptyWebinarTitle"),description:r("MyProfilePage.EmptyWebinarText"),buttonText:r("MyProfilePage.EmptyWebinarsBtnText"),buttonLocation:T.webinars}):e.jsxs(L,{children:[t.map(n=>e.jsx(P.Col,{xs:12,md:6,lg:4,children:e.jsx(M,{webinar:n,actions:e.jsx(k,{webinar:n,onJoin:()=>l(n.id)}),footer:e.jsx(S,{webinar:n})})},n.id)),!!s&&e.jsx(D,{visible:!!s,onClose:()=>l(void 0),webinarId:s})]})},f=a.memo(N);var R=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(R||{});const V=()=>{const{userWebinars:t,fetchUserWebinars:i}=a.useContext(W.EscolaLMSContext),{t:o}=c();a.useEffect(()=>{i()},[i]);const{upcomingWebinars:s,pastWebinars:l}=a.useMemo(()=>(t.list??[]).reduce((n,d)=>((d.in_coming||d.is_started)&&n.upcomingWebinars.push(d),d.is_ended&&n.pastWebinars.push(d),n),{upcomingWebinars:[],pastWebinars:[]}),[t.list]),r=a.useMemo(()=>({tabs:[{label:o("MyProfilePage.Upcoming"),key:1,component:e.jsx(f,{webinars:s,loading:t.loading})},{label:o("MyProfilePage.Archived"),key:2,component:e.jsx(f,{webinars:l,loading:t.loading,isPast:!0})}],defaultActiveKey:1}),[l,o,s,t.loading]);return e.jsx(h,{title:o("MyProfilePage.MyWebinars"),withTabs:!0,children:e.jsx(v.Tabs,{tabs:r.tabs,defaultActiveKey:r.defaultActiveKey})})};export{R as WebinarStatus,V as default};

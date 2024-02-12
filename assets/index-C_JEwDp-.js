import{q as j,n as f,f as p,m as E,j as e,l as x,G as P,o as b,i as c,r as i,h as v,k as M}from"./index-BsLXwVX-.js";import{T as w}from"./Tabs-BM0UnGoM.js";import{C as k}from"./index-DD3hn7qC.js";import{E as m}from"./index-BAf7LWsI.js";import{P as S}from"./index-iAlfguab.js";import"./ResponsiveImage-KgADMS5g.js";import"./index-2LkLTXFl.js";import"./index-DrXkeQ_F.js";import"./index-Dv47bB8G.js";const C=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
  padding: ${f?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;

  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,T=()=>{const{t}=p(),o=E();return e.jsxs(C,{children:[e.jsx(x.Title,{level:3,children:t("MyProfilePage.EmptyEventTitle")}),e.jsx(P.Text,{className:"small-text",children:t("MyProfilePage.EmptyEventText")}),e.jsx(x.Button,{onClick:()=>o.push(b.events),mode:"secondary",children:t("MyProfilePage.EmptyEventsBtnText")})]})},F=({filteredList:t,showMore:o,setShowMore:a})=>{const{t:r}=p();return e.jsxs(c.Row,{style:{gap:"28px 0"},children:[t.slice(0,6).map(s=>e.jsx(c.Col,{md:4,children:e.jsx(m,{event:s})},s.id)),t.length>6&&!o&&e.jsx(c.Col,{sm:12,md:12,lg:12,style:{display:"flex",justifyContent:"center",marginTop:30},children:e.jsx(x.Button,{onClick:()=>a(!0),mode:"outline",children:r("MyProfilePage.ShowMore")})})]})},N=j.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;
    a {
      text-decoration: none;
    }
  }

  .slider-wrapper {
    width: 100%;
    display: flex;
    overflow: scroll;
    column-gap: 15px;

    @media (max-width: 575px) {
      width: calc(100% + 15px);
      margin-right: -15px;
    }

    .single-slide {
      width: 272px;
      max-width: 272px;
      flex-shrink: 0;
    }
  }
`,A=({filteredList:t})=>{const{t:o}=p(),a=E(),r=i.useCallback(s=>e.jsx(e.Fragment,{children:e.jsx(x.Button,{mode:"secondary",onClick:()=>a.push(`/event/${s}`),children:o("Show")})}),[a,o]);return f?e.jsx(N,{children:e.jsx("div",{className:"slider-wrapper",children:t&&t.map(s=>e.jsx("div",{className:"single-slide",children:e.jsx(m,{event:s,actions:r(s.id)},s.id)},s.id))})}):e.jsx(c.Row,{style:{gap:"28px 0"},children:t&&t.map(s=>e.jsx(c.Col,{md:4,children:e.jsx(m,{event:s,actions:r(s.id)})},s.id))})},d=({filter:t})=>{const[o,a]=i.useState(!1),[r,s]=i.useState([]),{userStationaryEvents:u}=i.useContext(v.EscolaLMSContext),n=u.list,y=i.useMemo(()=>n==null?void 0:n.filter(l=>l.is_started),[n]),h=i.useMemo(()=>n==null?void 0:n.filter(l=>l.is_ended),[n]),g=i.useMemo(()=>n==null?void 0:n.filter(l=>l.in_coming),[n]);return i.useEffect(()=>{switch(t){case"all":s(n||[]);break;case"inProgress":s(y||[]);break;case"planned":s(g||[]);break;case"finished":s(h||[]);break;default:s(n||[]);break}},[g,t,h,n,y]),u.loading?e.jsx(k,{}):r.length===0?e.jsx(T,{}):!o&&r&&r.length>6&&!f?e.jsx(F,{filteredList:r,showMore:o,setShowMore:a}):e.jsx(A,{filteredList:r})},z=()=>{const{fetchUserStationaryEvents:t}=i.useContext(M.EscolaLMSContext),{t:o}=p();i.useEffect(()=>{t()},[]);const a={tabs:[{label:o("MyProfilePage.ALlCourses"),key:1,component:e.jsx(d,{filter:"all"})},{label:o("MyProfilePage.InProgress"),key:2,component:e.jsx(d,{filter:"inProgress"})},{label:o("MyProfilePage.Planned"),key:3,component:e.jsx(d,{filter:"planned"})},{label:o("MyProfilePage.Finished"),key:4,component:e.jsx(d,{filter:"finished"})}],defaultActiveKey:1};return e.jsx(S,{title:o("MyProfilePage.MyStationaryEvents"),withTabs:!0,children:e.jsx(w.Tabs,{tabs:a.tabs,defaultActiveKey:a.defaultActiveKey})})};export{z as default};

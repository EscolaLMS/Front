import{q as j,k as m,f as x,i as E,j as e,o as P,T as v,p as f,l as b,s as c,r as a,A as M,h as w}from"./index-CJUViYQs.js";import{T as k}from"./Tabs-CY6OtsA9.js";import{C as S}from"./index-D-lsSNuI.js";import{E as p}from"./index-BMebzaQK.js";import{P as C}from"./index-CXZJa1nH.js";import"./ResponsiveImage-CYeKSXk0.js";import"./index-YkBOJNJW.js";import"./index-WpwygM9U.js";import"./index-BovjN4tP.js";const T=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
  padding: ${m?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;

  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,A=()=>{const{t}=x(),o=E();return e.jsxs(T,{children:[e.jsx(P.Title,{level:3,children:t("MyProfilePage.EmptyEventTitle")}),e.jsx(v.Text,{className:"small-text",children:t("MyProfilePage.EmptyEventText")}),e.jsx(f.Button,{onClick:()=>o.push(b.events),mode:"secondary",children:t("MyProfilePage.EmptyEventsBtnText")})]})},B=({filteredList:t,showMore:o,setShowMore:i})=>{const{t:r}=x();return e.jsxs(c.Row,{style:{gap:"28px 0"},children:[t.slice(0,6).map(s=>e.jsx(c.Col,{md:4,children:e.jsx(p,{event:s})},s.id)),t.length>6&&!o&&e.jsx(c.Col,{sm:12,md:12,lg:12,style:{display:"flex",justifyContent:"center",marginTop:30},children:e.jsx(f.Button,{onClick:()=>i(!0),mode:"outline",children:r("MyProfilePage.ShowMore")})})]})},F=j.div`
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
`,N=({filteredList:t})=>{const{t:o}=x(),i=E(),r=a.useCallback(s=>e.jsx(e.Fragment,{children:e.jsx(f.Button,{mode:"secondary",onClick:()=>i.push(`/event/${s}`),children:o("Show")})}),[i,o]);return m?e.jsx(F,{children:e.jsx("div",{className:"slider-wrapper",children:t&&t.map(s=>e.jsx("div",{className:"single-slide",children:e.jsx(p,{event:s,actions:r(s.id)},s.id)},s.id))})}):e.jsx(c.Row,{style:{gap:"28px 0"},children:t&&t.map(s=>e.jsx(c.Col,{md:4,children:e.jsx(p,{event:s,actions:r(s.id)})},s.id))})},d=({filter:t})=>{const[o,i]=a.useState(!1),[r,s]=a.useState([]),{userStationaryEvents:u}=a.useContext(M.EscolaLMSContext),n=u.list,y=a.useMemo(()=>n==null?void 0:n.filter(l=>l.is_started),[n]),h=a.useMemo(()=>n==null?void 0:n.filter(l=>l.is_ended),[n]),g=a.useMemo(()=>n==null?void 0:n.filter(l=>l.in_coming),[n]);return a.useEffect(()=>{switch(t){case"all":s(n||[]);break;case"inProgress":s(y||[]);break;case"planned":s(g||[]);break;case"finished":s(h||[]);break;default:s(n||[]);break}},[g,t,h,n,y]),u.loading?e.jsx(S,{}):r.length===0?e.jsx(A,{}):!o&&r&&r.length>6&&!m?e.jsx(B,{filteredList:r,showMore:o,setShowMore:i}):e.jsx(N,{filteredList:r})},H=()=>{const{fetchUserStationaryEvents:t}=a.useContext(w.EscolaLMSContext),{t:o}=x();a.useEffect(()=>{t()},[]);const i={tabs:[{label:o("MyProfilePage.ALlCourses"),key:1,component:e.jsx(d,{filter:"all"})},{label:o("MyProfilePage.InProgress"),key:2,component:e.jsx(d,{filter:"inProgress"})},{label:o("MyProfilePage.Planned"),key:3,component:e.jsx(d,{filter:"planned"})},{label:o("MyProfilePage.Finished"),key:4,component:e.jsx(d,{filter:"finished"})}],defaultActiveKey:1};return e.jsx(C,{title:o("MyProfilePage.MyStationaryEvents"),withTabs:!0,children:e.jsx(k.Tabs,{tabs:i.tabs,defaultActiveKey:i.defaultActiveKey})})};export{H as default};

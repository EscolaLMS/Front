import{q as j,n as m,f as x,i as E,j as e,T as P,s as v,v as f,l as b,w as c,r,D as M,a2 as w,h as S}from"./index-BrnsqxCr.js";import{T as k}from"./Tabs-o-Xza13V.js";import{E as p}from"./index-DerbMIvq.js";import{P as C}from"./index-BmP4mXxo.js";import"./ResponsiveImage-Cy_iuZ6S.js";import"./index-D6Vr4FBf.js";import"./index-CQOyv8Aw.js";import"./index-Be7kF9a5.js";const T=j.div`
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
`,B=()=>{const{t}=x(),n=E();return e.jsxs(T,{children:[e.jsx(P.Title,{level:3,children:t("MyProfilePage.EmptyEventTitle")}),e.jsx(v.Text,{className:"small-text",children:t("MyProfilePage.EmptyEventText")}),e.jsx(f.Button,{onClick:()=>n.push(b.events),mode:"secondary",children:t("MyProfilePage.EmptyEventsBtnText")})]})},F=({filteredList:t,showMore:n,setShowMore:i})=>{const{t:a}=x();return e.jsxs(c.Row,{style:{gap:"28px 0"},children:[t.slice(0,6).map(s=>e.jsx(c.Col,{md:4,children:e.jsx(p,{event:s})},s.id)),t.length>6&&!n&&e.jsx(c.Col,{sm:12,md:12,lg:12,style:{display:"flex",justifyContent:"center",marginTop:30},children:e.jsx(f.Button,{onClick:()=>i(!0),mode:"outline",children:a("MyProfilePage.ShowMore")})})]})},N=j.div`
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
`,A=({filteredList:t})=>{const{t:n}=x(),i=E(),a=r.useCallback(s=>e.jsx(e.Fragment,{children:e.jsx(f.Button,{mode:"secondary",onClick:()=>i.push(`/event/${s}`),children:n("Show")})}),[i,n]);return m?e.jsx(N,{children:e.jsx("div",{className:"slider-wrapper",children:t&&t.map(s=>e.jsx("div",{className:"single-slide",children:e.jsx(p,{event:s,actions:a(s.id)},s.id)},s.id))})}):e.jsx(c.Row,{style:{gap:"28px 0"},children:t&&t.map(s=>e.jsx(c.Col,{md:4,children:e.jsx(p,{event:s,actions:a(s.id)})},s.id))})},d=({filter:t})=>{const[n,i]=r.useState(!1),[a,s]=r.useState([]),{userStationaryEvents:u}=r.useContext(M.EscolaLMSContext),o=u.list,y=r.useMemo(()=>o==null?void 0:o.filter(l=>l.is_started),[o]),h=r.useMemo(()=>o==null?void 0:o.filter(l=>l.is_ended),[o]),g=r.useMemo(()=>o==null?void 0:o.filter(l=>l.in_coming),[o]);return r.useEffect(()=>{switch(t){case"all":s(o||[]);break;case"inProgress":s(y||[]);break;case"planned":s(g||[]);break;case"finished":s(h||[]);break;default:s(o||[]);break}},[g,t,h,o,y]),u.loading?e.jsx(w,{}):a.length===0?e.jsx(B,{}):!n&&a&&a.length>6&&!m?e.jsx(F,{filteredList:a,showMore:n,setShowMore:i}):e.jsx(A,{filteredList:a})},z=()=>{const{fetchUserStationaryEvents:t}=r.useContext(S.EscolaLMSContext),{t:n}=x();r.useEffect(()=>{t()},[]);const i={tabs:[{label:n("MyProfilePage.ALlCourses"),key:1,component:e.jsx(d,{filter:"all"})},{label:n("MyProfilePage.InProgress"),key:2,component:e.jsx(d,{filter:"inProgress"})},{label:n("MyProfilePage.Planned"),key:3,component:e.jsx(d,{filter:"planned"})},{label:n("MyProfilePage.Finished"),key:4,component:e.jsx(d,{filter:"finished"})}],defaultActiveKey:1};return e.jsx(C,{title:n("MyProfilePage.MyStationaryEvents"),withTabs:!0,children:e.jsx(k.Tabs,{tabs:i.tabs,defaultActiveKey:i.defaultActiveKey})})};export{z as default};

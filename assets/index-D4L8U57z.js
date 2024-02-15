import{q as j,m,f as x,l as E,j as e,T as P,s as v,v as f,n as b,i as c,r as i,h as M,k as w}from"./index-Duhnd3NG.js";import{T as k}from"./Tabs-JkWdeoWs.js";import{C as S}from"./index-CDaAQ3M0.js";import{E as p}from"./index-CHDoRWF7.js";import{P as C}from"./index-Dn2Rm74I.js";import"components/atoms/Typography/Text";import"./ResponsiveImage-CKPbfW5t.js";import"./index-B7aoIFqz.js";import"./index-s_L9J9A7.js";import"./index-C5wfF83u.js";const T=j.div`
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
`,B=()=>{const{t}=x(),n=E();return e.jsxs(T,{children:[e.jsx(P.Title,{level:3,children:t("MyProfilePage.EmptyEventTitle")}),e.jsx(v.Text,{className:"small-text",children:t("MyProfilePage.EmptyEventText")}),e.jsx(f.Button,{onClick:()=>n.push(b.events),mode:"secondary",children:t("MyProfilePage.EmptyEventsBtnText")})]})},F=({filteredList:t,showMore:n,setShowMore:a})=>{const{t:r}=x();return e.jsxs(c.Row,{style:{gap:"28px 0"},children:[t.slice(0,6).map(s=>e.jsx(c.Col,{md:4,children:e.jsx(p,{event:s})},s.id)),t.length>6&&!n&&e.jsx(c.Col,{sm:12,md:12,lg:12,style:{display:"flex",justifyContent:"center",marginTop:30},children:e.jsx(f.Button,{onClick:()=>a(!0),mode:"outline",children:r("MyProfilePage.ShowMore")})})]})},N=j.div`
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
`,A=({filteredList:t})=>{const{t:n}=x(),a=E(),r=i.useCallback(s=>e.jsx(e.Fragment,{children:e.jsx(f.Button,{mode:"secondary",onClick:()=>a.push(`/event/${s}`),children:n("Show")})}),[a,n]);return m?e.jsx(N,{children:e.jsx("div",{className:"slider-wrapper",children:t&&t.map(s=>e.jsx("div",{className:"single-slide",children:e.jsx(p,{event:s,actions:r(s.id)},s.id)},s.id))})}):e.jsx(c.Row,{style:{gap:"28px 0"},children:t&&t.map(s=>e.jsx(c.Col,{md:4,children:e.jsx(p,{event:s,actions:r(s.id)})},s.id))})},d=({filter:t})=>{const[n,a]=i.useState(!1),[r,s]=i.useState([]),{userStationaryEvents:u}=i.useContext(M.EscolaLMSContext),o=u.list,y=i.useMemo(()=>o==null?void 0:o.filter(l=>l.is_started),[o]),h=i.useMemo(()=>o==null?void 0:o.filter(l=>l.is_ended),[o]),g=i.useMemo(()=>o==null?void 0:o.filter(l=>l.in_coming),[o]);return i.useEffect(()=>{switch(t){case"all":s(o||[]);break;case"inProgress":s(y||[]);break;case"planned":s(g||[]);break;case"finished":s(h||[]);break;default:s(o||[]);break}},[g,t,h,o,y]),u.loading?e.jsx(S,{}):r.length===0?e.jsx(B,{}):!n&&r&&r.length>6&&!m?e.jsx(F,{filteredList:r,showMore:n,setShowMore:a}):e.jsx(A,{filteredList:r})},U=()=>{const{fetchUserStationaryEvents:t}=i.useContext(w.EscolaLMSContext),{t:n}=x();i.useEffect(()=>{t()},[]);const a={tabs:[{label:n("MyProfilePage.ALlCourses"),key:1,component:e.jsx(d,{filter:"all"})},{label:n("MyProfilePage.InProgress"),key:2,component:e.jsx(d,{filter:"inProgress"})},{label:n("MyProfilePage.Planned"),key:3,component:e.jsx(d,{filter:"planned"})},{label:n("MyProfilePage.Finished"),key:4,component:e.jsx(d,{filter:"finished"})}],defaultActiveKey:1};return e.jsx(C,{title:n("MyProfilePage.MyStationaryEvents"),withTabs:!0,children:e.jsx(k.Tabs,{tabs:a.tabs,defaultActiveKey:a.defaultActiveKey})})};export{U as default};

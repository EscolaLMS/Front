import{b as q,r as g,N as W,h as N,n as z,q as u,i as P,f as b,j as e,V as D,x as j,p as f,L as $,s as M,W as R,T as H,l as O,Y as k,X as G,Z as X,a0 as U,v as V,C as F}from"./index-xz6dt63Y.js";import{P as Y}from"./index-DJ4k_Jpt.js";import{q as _}from"./base-C7euzKDi.js";import{C as Z,a as J,b as K}from"./CourseCard-QOr2t26e.js";import{P as Q}from"./index-dNaO37VC.js";import{u as ee}from"./useFetchCourses-DLQc82LH.js";import"./index-CWMiWCX8.js";const A=q.createContext({}),se=()=>{const{courses:r,params:a,setParams:s,loading:x}=g.useContext(A),{fetchCategories:t,categoryTree:c}=g.useContext(W.EscolaLMSContext),[o,n]=g.useState([]),i=N(),h=z(),y=g.useCallback(l=>{s&&s({...a,order:l})},[a,s]),C=g.useCallback(l=>{s&&s({...a,page:l})},[a,s]),E=g.useCallback(l=>{const d=o.filter(p=>p.id!==l);n(d),s&&s({...a,page:1,"categories[]":d.map(p=>p.id)})},[a,o,s]),T=g.useCallback(l=>{const d=o.some(p=>p.id===l.id)?o.filter(p=>p.id!==l.id):[...o,l];n(d),s&&s({...a,page:1,"categories[]":d.map(p=>p.id)})},[a,o,s]),v=g.useCallback(()=>{n([]),s&&s({...a,page:1,order:void 0,"categories[]":void 0})},[a,s]),w=g.useCallback(l=>l.flatMap(d=>{const p=w(d.subcategories||[]);return[d,...p]}),[]);return g.useEffect(()=>{const d=_.parse(h.search)["categories[]"];if(d){const S=w(c.list||[]).filter(B=>d.includes(String(B.id)));n(S)}},[h.search,c,w]),g.useEffect(()=>{t()},[t]),g.useEffect(()=>{a&&i.push(`${h.pathname}?${_.stringify(a)}`)},[a,h.pathname,i]),{courses:r,loading:x,prevCategories:o,handleSortChange:y,handlePageChange:C,handleRemoveCategory:E,handleCategoryChange:T,onClearCategories:v,params:a,categoryTree:c}},I=u.section`
  margin-bottom: ${P?"50px":"75px"};
`,re=({courses:r,loading:a})=>{const s=N(),{t:x}=b();return r&&!a&&r.length===0?e.jsx(D.Row,{justify:"center",children:e.jsx(j.Text,{size:"18",children:x("NoCourses")})}):a?e.jsx(I,{children:e.jsx(D.Row,{style:{gap:"30px 0"},children:Array.from({length:12}).map((t,c)=>e.jsx(Z,{colProps:{xl:3,lg:4,md:6}},`index-${c}-skeleton`))})}):e.jsx(I,{children:e.jsx(D.Row,{style:{gap:"30px 0"},children:r==null?void 0:r.map(t=>{var c,o,n;return e.jsx(D.Col,{md:6,lg:4,xl:3,children:e.jsx(f.NewCourseCard,{mobile:P,id:t.id,image:e.jsx($,{to:`/courses/${t.id}`,children:t.image_path?e.jsx(M.ResponsiveImage,{path:t.image_path,alt:t.title,srcSizes:[300,600,900]}):e.jsx(J,{})}),price:t.public?e.jsx(R,{children:e.jsx("div",{className:"course-price",children:x("FREE")})}):e.jsx(R,{children:e.jsx(Q,{price:(c=t.product)==null?void 0:c.price,oldPrice:(o=t.product)==null?void 0:o.price_old,taxRate:(n=t.product)==null?void 0:n.tax_rate})}),title:e.jsx($,{to:`/courses/${t.id}`,children:e.jsx(H.Title,{level:3,as:"h3",className:"title",children:t.title})}),categories:e.jsx(K,{categories:t.categories,onCategoryClick:i=>{s.push(`/courses/?categories[]=${i}`)}})})},t.id)})})})},ae=u.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  button {
    border: none;
  }
`,te=({showDrawer:r,type:a,prevCategories:s,onClearCategories:x,handleCategoryChange:t,categories:c,handleSortChange:o,setMobileDrawerState:n})=>{const{t:i}=b();return e.jsxs(e.Fragment,{children:[r&&a===m.categories&&e.jsx(f.DropdownCategories,{checkedCategories:s,onClear:()=>[x(),n({showDrawer:!1,type:m.categories})],onChange:t,categories:c||[],isInitiallyOpen:!0,forMobile:!0}),r&&a===m.sort&&e.jsxs(ae,{children:[e.jsx(f.Button,{mode:"secondary outline",onClick:()=>{o("DESC"),n({showDrawer:!1,type:m.sort})},children:i("CoursesPage.newOnes")}),e.jsx(f.Button,{mode:"secondary outline",onClick:()=>{o("ASC"),n({showDrawer:!1,type:m.sort})},children:i("CoursesPage.oldOnes")})]})]})},oe=u.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    margin: 0px;
  }

  @media (max-width: 335px) {
    flex-direction: column;
    gap: 20px;
  }
`,ne=u.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    margin: unset;
  }
  svg {
    margin-left: 5px;
    margin-top: -2px;
  }
`,L=u.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .icon-squares {
    width: 11px;
    height: 11px;
    path {
      fill: ${({theme:r})=>r.primaryColor};
    }
  }
`,ie=({prevCategories:r,onClearCategories:a,handleCategoryChange:s,categories:x,handleSortChange:t,params:c,setMobileDrawerState:o,parentState:n})=>{const{t:i}=b();return e.jsxs(oe,{children:[P?e.jsxs(L,{onClick:()=>o({showDrawer:!n.showDrawer,type:m.categories}),children:[e.jsx(O,{}),e.jsx(j.Text,{size:"16",children:i("CoursesPage.showByCategory")}),e.jsx(k,{})]}):e.jsx(f.DropdownCategories,{checkedCategories:r,onClear:a,onChange:s,categories:x||[],child:e.jsxs(L,{children:[e.jsx(O,{}),e.jsx(j.Text,{size:"16",children:i("CoursesPage.showByCategory")}),e.jsx(k,{})]})}),e.jsxs(ne,{children:[e.jsxs(j.Text,{onClick:()=>P&&o({showDrawer:!n.showDrawer,type:m.sort}),children:[i("CoursesPage.sort")," ",P&&e.jsx(k,{})]}),!P&&e.jsx(f.DropdownMenu,{top:10,menuItems:[{id:"DESC",content:i("CoursesPage.newOnes")},{id:"ASC",content:i("CoursesPage.oldOnes")}],onChange:h=>t(String(h.id)),child:e.jsxs(j.Text,{children:[c&&c.order==="DESC"?i("CoursesPage.newOnes"):i("CoursesPage.oldOnes"),e.jsx(k,{})]})})]})]})},ce=u.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 17px;
  gap: 5px;
  .clear-categories {
    all: unset;
    cursor: pointer;
    margin-left: 14px;
    p {
      margin: 0;
      color: ${({theme:r})=>r.gray2};
    }
  }
`,le=u.button`
  all: unset;
  border-radius: 19px;
  border: 1px solid #eaeaea;
  padding: 8px 13px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    margin: 0;
    margin-right: 17px;
  }
`;var m=(r=>(r.categories="categories",r.sort="sort",r))(m||{});const pe=()=>{var v,w,l,d,p;const[r,a]=q.useState({showDrawer:!1,type:"categories"}),{courses:s,loading:x,prevCategories:t,handleSortChange:c,handlePageChange:o,handleRemoveCategory:n,handleCategoryChange:i,onClearCategories:h,params:y,categoryTree:C}=se(),E=G(),{t:T}=b();return e.jsxs(e.Fragment,{children:[e.jsx(ie,{prevCategories:t,onClearCategories:h,handleCategoryChange:i,categories:C.list||[],handleSortChange:c,params:y,setMobileDrawerState:a,parentState:r}),t.length>0&&e.jsxs(ce,{children:[t.map(S=>e.jsxs(le,{onClick:()=>n(S.id),children:[e.jsx(j.Text,{size:"13",children:S.name}),e.jsx(X,{color:E.gray2})]})),e.jsx("button",{className:"clear-categories",onClick:h,children:e.jsx(j.Text,{size:"13",children:T("CoursesPage.clearAll")})})]}),e.jsx(U,{isOpen:r.showDrawer,onClose:()=>a({showDrawer:!1,type:"categories"}),height:r.type==="categories"?"40vh":"12vh",children:e.jsx(te,{showDrawer:r.showDrawer,type:r.type,prevCategories:t,onClearCategories:h,handleCategoryChange:i,categories:C.list||[],handleSortChange:c,setMobileDrawerState:a})}),e.jsx(re,{courses:(s==null?void 0:s.data)||[],loading:x}),Number((v=s==null?void 0:s.meta)==null?void 0:v.total)>Number((w=s==null?void 0:s.meta)==null?void 0:w.per_page)&&e.jsx(Y,{total:Number((l=s==null?void 0:s.meta)==null?void 0:l.total),perPage:Number((d=s==null?void 0:s.meta)==null?void 0:d.per_page),currentPage:Number((p=s==null?void 0:s.meta)==null?void 0:p.current_page),onPage:o})]})},de=12,ge=(r={})=>_.stringify(r),xe=({onlyFree:r=!0,children:a})=>{const[s,x]=g.useState({page:1,per_page:de,order_by:"created_at"}),{courses:t,loading:c,fetchCoursesData:o}=ee(s),n=z(),{push:i}=N();return g.useEffect(()=>{const h=_.parse(n.search),y=h&&{...h,order_by:"created_at"},C=y||s;x(C),i(`${n.pathname}?${ge(C)}`),o(C)},[n.search]),e.jsx(A.Provider,{value:{params:s,setParams:x,courses:t,onlyFree:r,loading:c},children:a})},he=u.section`
  padding-top: 31px;
`,ue=u.div`
  background: ${({theme:r})=>r.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`,be=()=>{const{t:r}=b();return e.jsx(V,{metaTitle:r("CoursesPage.Courses"),children:e.jsx(xe,{onlyFree:!1,children:e.jsxs(he,{className:"courses-page",children:[e.jsx(ue,{children:e.jsx(F,{children:e.jsxs(f.Title,{level:1,children:[" ",r("CoursesPage.Courses")]})})}),e.jsx(F,{children:e.jsx(pe,{})})]})})})};export{be as default};

import{b as z,r as g,Q as B,i as $,o as L,q as u,k as P,h as b,j as e,Y as k,z as j,s as f,L as N,w as W,T as M,m as R,Z as D,X as H,_ as X,$ as G,x as Q,C as O}from"./index-BrDgRaEo.js";import{P as U}from"./index-ClIryWcB.js";import{q as _}from"./base-C7euzKDi.js";import{C as Y,a as Z,b as J}from"./CourseCard-BzLcbEU1.js";import{P as K}from"./index-Dn8AjmU3.js";import{u as V}from"./useFetchCourses-DyXMgr_5.js";import"./index-CiBjOMaL.js";const q=z.createContext({}),ee=()=>{const{courses:r,params:a,setParams:s,loading:x}=g.useContext(q),{fetchCategories:t,categoryTree:c}=g.useContext(B.EscolaLMSContext),[o,n]=g.useState([]),i=$(),h=L(),y=g.useCallback(l=>{s&&s({...a,order:l})},[a,s]),C=g.useCallback(l=>{s&&s({...a,page:l})},[a,s]),E=g.useCallback(l=>{const d=o.filter(p=>p.id!==l);n(d),s&&s({...a,page:1,"categories[]":d.map(p=>p.id)})},[a,o,s]),T=g.useCallback(l=>{const d=o.some(p=>p.id===l.id)?o.filter(p=>p.id!==l.id):[...o,l];n(d),s&&s({...a,page:1,"categories[]":d.map(p=>p.id)})},[a,o,s]),v=g.useCallback(()=>{n([]),s&&s({...a,page:1,order:void 0,"categories[]":void 0})},[a,s]),w=g.useCallback(l=>l.flatMap(d=>{const p=w(d.subcategories||[]);return[d,...p]}),[]);return g.useEffect(()=>{const d=_.parse(h.search)["categories[]"];if(d){const S=w(c.list||[]).filter(A=>d.includes(String(A.id)));n(S)}},[h.search,c,w]),g.useEffect(()=>{t()},[t]),g.useEffect(()=>{a&&i.push(`${h.pathname}?${_.stringify(a)}`)},[a,h.pathname,i]),{courses:r,loading:x,prevCategories:o,handleSortChange:y,handlePageChange:C,handleRemoveCategory:E,handleCategoryChange:T,onClearCategories:v,params:a,categoryTree:c}},F=u.section`
  margin-bottom: ${P?"50px":"75px"};
`,se=({courses:r,loading:a})=>{const s=$(),{t:x}=b();return r&&!a&&r.length===0?e.jsx(k.Row,{justify:"center",children:e.jsx(j.Text,{size:"18",children:x("NoCourses")})}):a?e.jsx(F,{children:e.jsx(k.Row,{style:{gap:"30px 0"},children:Array.from({length:12}).map((t,c)=>e.jsx(Y,{colProps:{xl:3,lg:4,md:6}},`index-${c}-skeleton`))})}):e.jsx(F,{children:e.jsx(k.Row,{style:{gap:"30px 0"},children:r==null?void 0:r.map(t=>{var c,o,n;return e.jsx(k.Col,{md:6,lg:4,xl:3,children:e.jsx(f.NewCourseCard,{mobile:P,id:t.id,image:e.jsx(N,{to:`/courses/${t.id}`,children:t.image_path?e.jsx(W.ResponsiveImage,{path:t.image_path,alt:t.title,srcSizes:[300,600,900]}):e.jsx(Z,{})}),price:t.public?e.jsx("div",{className:"course-price",children:x("FREE")}):e.jsx(K,{price:(c=t.product)==null?void 0:c.price,oldPrice:(o=t.product)==null?void 0:o.price_old,taxRate:(n=t.product)==null?void 0:n.tax_rate}),title:e.jsx(N,{to:`/courses/${t.id}`,children:e.jsx(M.Title,{level:3,as:"h3",className:"title",children:t.title})}),categories:e.jsx(J,{categories:t.categories,onCategoryClick:i=>{s.push(`/courses/?categories[]=${i}`)}})})},t.id)})})})},re=u.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  button {
    border: none;
  }
`,ae=({showDrawer:r,type:a,prevCategories:s,onClearCategories:x,handleCategoryChange:t,categories:c,handleSortChange:o,setMobileDrawerState:n})=>{const{t:i}=b();return e.jsxs(e.Fragment,{children:[r&&a===m.categories&&e.jsx(f.DropdownCategories,{checkedCategories:s,onClear:()=>[x(),n({showDrawer:!1,type:m.categories})],onChange:t,categories:c||[],isInitiallyOpen:!0,forMobile:!0}),r&&a===m.sort&&e.jsxs(re,{children:[e.jsx(f.Button,{mode:"secondary outline",onClick:()=>{o("DESC"),n({showDrawer:!1,type:m.sort})},children:i("CoursesPage.newOnes")}),e.jsx(f.Button,{mode:"secondary outline",onClick:()=>{o("ASC"),n({showDrawer:!1,type:m.sort})},children:i("CoursesPage.oldOnes")})]})]})},te=u.div`
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
`,oe=u.div`
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
`,I=u.div`
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
`,ne=({prevCategories:r,onClearCategories:a,handleCategoryChange:s,categories:x,handleSortChange:t,params:c,setMobileDrawerState:o,parentState:n})=>{const{t:i}=b();return e.jsxs(te,{children:[P?e.jsxs(I,{onClick:()=>o({showDrawer:!n.showDrawer,type:m.categories}),children:[e.jsx(R,{}),e.jsx(j.Text,{size:"16",children:i("CoursesPage.showByCategory")}),e.jsx(D,{})]}):e.jsx(f.DropdownCategories,{checkedCategories:r,onClear:a,onChange:s,categories:x||[],child:e.jsxs(I,{children:[e.jsx(R,{}),e.jsx(j.Text,{size:"16",children:i("CoursesPage.showByCategory")}),e.jsx(D,{})]})}),e.jsxs(oe,{children:[e.jsxs(j.Text,{onClick:()=>P&&o({showDrawer:!n.showDrawer,type:m.sort}),children:[i("CoursesPage.sort")," ",P&&e.jsx(D,{})]}),!P&&e.jsx(f.DropdownMenu,{top:10,menuItems:[{id:"DESC",content:i("CoursesPage.newOnes")},{id:"ASC",content:i("CoursesPage.oldOnes")}],onChange:h=>t(String(h.id)),child:e.jsxs(j.Text,{children:[c&&c.order==="DESC"?i("CoursesPage.newOnes"):i("CoursesPage.oldOnes"),e.jsx(D,{})]})})]})]})},ie=u.div`
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
`,ce=u.button`
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
`;var m=(r=>(r.categories="categories",r.sort="sort",r))(m||{});const le=()=>{var v,w,l,d,p;const[r,a]=z.useState({showDrawer:!1,type:"categories"}),{courses:s,loading:x,prevCategories:t,handleSortChange:c,handlePageChange:o,handleRemoveCategory:n,handleCategoryChange:i,onClearCategories:h,params:y,categoryTree:C}=ee(),E=H(),{t:T}=b();return e.jsxs(e.Fragment,{children:[e.jsx(ne,{prevCategories:t,onClearCategories:h,handleCategoryChange:i,categories:C.list||[],handleSortChange:c,params:y,setMobileDrawerState:a,parentState:r}),t.length>0&&e.jsxs(ie,{children:[t.map(S=>e.jsxs(ce,{onClick:()=>n(S.id),children:[e.jsx(j.Text,{size:"13",children:S.name}),e.jsx(X,{color:E.gray2})]})),e.jsx("button",{className:"clear-categories",onClick:h,children:e.jsx(j.Text,{size:"13",children:T("CoursesPage.clearAll")})})]}),e.jsx(G,{isOpen:r.showDrawer,onClose:()=>a({showDrawer:!1,type:"categories"}),height:r.type==="categories"?"40vh":"12vh",children:e.jsx(ae,{showDrawer:r.showDrawer,type:r.type,prevCategories:t,onClearCategories:h,handleCategoryChange:i,categories:C.list||[],handleSortChange:c,setMobileDrawerState:a})}),e.jsx(se,{courses:(s==null?void 0:s.data)||[],loading:x}),Number((v=s==null?void 0:s.meta)==null?void 0:v.total)>Number((w=s==null?void 0:s.meta)==null?void 0:w.per_page)&&e.jsx(U,{total:Number((l=s==null?void 0:s.meta)==null?void 0:l.total),perPage:Number((d=s==null?void 0:s.meta)==null?void 0:d.per_page),currentPage:Number((p=s==null?void 0:s.meta)==null?void 0:p.current_page),onPage:o})]})},pe=12,de=(r={})=>_.stringify(r),ge=({onlyFree:r=!0,children:a})=>{const[s,x]=g.useState({page:1,per_page:pe,order_by:"created_at"}),{courses:t,loading:c,fetchCoursesData:o}=V(s),n=L(),{push:i}=$();return g.useEffect(()=>{const h=_.parse(n.search),y=h&&{...h,order_by:"created_at"},C=y||s;x(C),i(`${n.pathname}?${de(C)}`),o(C)},[n.search]),e.jsx(q.Provider,{value:{params:s,setParams:x,courses:t,onlyFree:r,loading:c},children:a})},xe=u.section`
  padding-top: 31px;
`,he=u.div`
  background: ${({theme:r})=>r.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`,Pe=()=>{const{t:r}=b();return e.jsx(Q,{metaTitle:r("CoursesPage.Courses"),children:e.jsx(ge,{onlyFree:!1,children:e.jsxs(xe,{className:"courses-page",children:[e.jsx(he,{children:e.jsx(O,{children:e.jsxs(f.Title,{level:1,children:[" ",r("CoursesPage.Courses")]})})}),e.jsx(O,{children:e.jsx(le,{})})]})})})};export{Pe as default};

import{b as L,r as g,D as B,i as N,k as q,q as C,n as P,f as b,j as e,w as S,s as j,m as f,L as R,T as W,N as $,O as k,X as M,Q as H,V as X,o as G,C as O}from"./index-Bjk_45MO.js";import{P as Q}from"./index-DXgEk6c6.js";import{q as _}from"./base-C7euzKDi.js";import{R as U}from"./ResponsiveImage-wYxl3kWJ.js";import{C as V}from"./index-BNTGN6Sw.js";import{C as J}from"./index-DdavEOvA.js";import{P as K}from"./index-D1KheDiE.js";import{C as Y}from"./CourseCard-Cly8Zjem.js";import{u as Z}from"./useFetchCourses-CPsyyy8t.js";import"./index-BMKx56cF.js";const z=L.createContext({}),ee=()=>{const{courses:r,params:t,setParams:s,loading:x}=g.useContext(z),{fetchCategories:a,categoryTree:c}=g.useContext(B.EscolaLMSContext),[o,n]=g.useState([]),i=N(),h=q(),y=g.useCallback(l=>{s&&s({...t,order:l})},[t,s]),u=g.useCallback(l=>{s&&s({...t,page:l})},[t,s]),E=g.useCallback(l=>{const d=o.filter(p=>p.id!==l);n(d),s&&s({...t,page:1,"categories[]":d.map(p=>p.id)})},[t,o,s]),T=g.useCallback(l=>{const d=o.some(p=>p.id===l.id)?o.filter(p=>p.id!==l.id):[...o,l];n(d),s&&s({...t,page:1,"categories[]":d.map(p=>p.id)})},[t,o,s]),v=g.useCallback(()=>{n([]),s&&s({...t,page:1,order:void 0,"categories[]":void 0})},[t,s]),w=g.useCallback(l=>l.flatMap(d=>{const p=w(d.subcategories||[]);return[d,...p]}),[]);return g.useEffect(()=>{const d=_.parse(h.search)["categories[]"];if(d){const D=w(c.list||[]).filter(A=>d.includes(String(A.id)));n(D)}},[h.search,c,w]),g.useEffect(()=>{a()},[a]),g.useEffect(()=>{t&&i.push(`${h.pathname}?${_.stringify(t)}`)},[t,h.pathname,i]),{courses:r,loading:x,prevCategories:o,handleSortChange:y,handlePageChange:u,handleRemoveCategory:E,handleCategoryChange:T,onClearCategories:v,params:t,categoryTree:c}},F=C.section`
  margin-bottom: ${P?"50px":"75px"};
`,se=({courses:r,loading:t})=>{const s=N(),{t:x}=b();return r&&!t&&r.length===0?e.jsx(S.Row,{justify:"center",children:e.jsx(j.Text,{size:"18",children:x("NoCourses")})}):t?e.jsx(F,{children:e.jsx(S.Row,{style:{gap:"30px 0"},children:Array.from({length:12}).map((a,c)=>e.jsx(Y,{colProps:{xl:3,lg:4,md:6}},`index-${c}-skeleton`))})}):e.jsx(F,{children:e.jsx(S.Row,{style:{gap:"30px 0"},children:r==null?void 0:r.map(a=>{var c,o,n;return e.jsx(S.Col,{md:6,lg:4,xl:3,children:e.jsx(f.NewCourseCard,{mobile:P,id:a.id,image:e.jsx(R,{to:`/courses/${a.id}`,children:a.image_path?e.jsx(U.ResponsiveImage,{path:a.image_path,alt:a.title,srcSizes:[300,600,900]}):e.jsx(J,{})}),price:a.public?e.jsx("div",{className:"course-price",children:x("FREE")}):e.jsx(K,{price:(c=a.product)==null?void 0:c.price,oldPrice:(o=a.product)==null?void 0:o.price_old,taxRate:(n=a.product)==null?void 0:n.tax_rate}),title:e.jsx(R,{to:`/courses/${a.id}`,children:e.jsx(W.Title,{level:3,as:"h3",className:"title",children:a.title})}),categories:e.jsx(V,{categories:a.categories,onCategoryClick:i=>{s.push(`/courses/?categories[]=${i}`)}})})},a.id)})})})},re=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  button {
    border: none;
  }
`,te=({showDrawer:r,type:t,prevCategories:s,onClearCategories:x,handleCategoryChange:a,categories:c,handleSortChange:o,setMobileDrawerState:n})=>{const{t:i}=b();return e.jsxs(e.Fragment,{children:[r&&t===m.categories&&e.jsx(f.DropdownCategories,{checkedCategories:s,onClear:()=>[x(),n({showDrawer:!1,type:m.categories})],onChange:a,categories:c||[],isInitiallyOpen:!0,forMobile:!0}),r&&t===m.sort&&e.jsxs(re,{children:[e.jsx(f.Button,{mode:"secondary outline",onClick:()=>{o("DESC"),n({showDrawer:!1,type:m.sort})},children:i("CoursesPage.newOnes")}),e.jsx(f.Button,{mode:"secondary outline",onClick:()=>{o("ASC"),n({showDrawer:!1,type:m.sort})},children:i("CoursesPage.oldOnes")})]})]})},ae=C.div`
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
`,oe=C.div`
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
`,I=C.div`
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
`,ne=({prevCategories:r,onClearCategories:t,handleCategoryChange:s,categories:x,handleSortChange:a,params:c,setMobileDrawerState:o,parentState:n})=>{const{t:i}=b();return e.jsxs(ae,{children:[P?e.jsxs(I,{onClick:()=>o({showDrawer:!n.showDrawer,type:m.categories}),children:[e.jsx($,{}),e.jsx(j.Text,{size:"16",children:i("CoursesPage.showByCategory")}),e.jsx(k,{})]}):e.jsx(f.DropdownCategories,{checkedCategories:r,onClear:t,onChange:s,categories:x||[],child:e.jsxs(I,{children:[e.jsx($,{}),e.jsx(j.Text,{size:"16",children:i("CoursesPage.showByCategory")}),e.jsx(k,{})]})}),e.jsxs(oe,{children:[e.jsxs(j.Text,{onClick:()=>P&&o({showDrawer:!n.showDrawer,type:m.sort}),children:[i("CoursesPage.sort")," ",P&&e.jsx(k,{})]}),!P&&e.jsx(f.DropdownMenu,{top:10,menuItems:[{id:"DESC",content:i("CoursesPage.newOnes")},{id:"ASC",content:i("CoursesPage.oldOnes")}],onChange:h=>a(String(h.id)),child:e.jsxs(j.Text,{children:[c&&c.order==="DESC"?i("CoursesPage.newOnes"):i("CoursesPage.oldOnes"),e.jsx(k,{})]})})]})]})},ie=C.div`
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
`,ce=C.button`
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
`;var m=(r=>(r.categories="categories",r.sort="sort",r))(m||{});const le=()=>{var v,w,l,d,p;const[r,t]=L.useState({showDrawer:!1,type:"categories"}),{courses:s,loading:x,prevCategories:a,handleSortChange:c,handlePageChange:o,handleRemoveCategory:n,handleCategoryChange:i,onClearCategories:h,params:y,categoryTree:u}=ee(),E=M(),{t:T}=b();return e.jsxs(e.Fragment,{children:[e.jsx(ne,{prevCategories:a,onClearCategories:h,handleCategoryChange:i,categories:u.list||[],handleSortChange:c,params:y,setMobileDrawerState:t,parentState:r}),a.length>0&&e.jsxs(ie,{children:[a.map(D=>e.jsxs(ce,{onClick:()=>n(D.id),children:[e.jsx(j.Text,{size:"13",children:D.name}),e.jsx(H,{color:E.gray2})]})),e.jsx("button",{className:"clear-categories",onClick:h,children:e.jsx(j.Text,{size:"13",children:T("CoursesPage.clearAll")})})]}),e.jsx(X,{isOpen:r.showDrawer,onClose:()=>t({showDrawer:!1,type:"categories"}),height:r.type==="categories"?"40vh":"12vh",children:e.jsx(te,{showDrawer:r.showDrawer,type:r.type,prevCategories:a,onClearCategories:h,handleCategoryChange:i,categories:u.list||[],handleSortChange:c,setMobileDrawerState:t})}),e.jsx(se,{courses:(s==null?void 0:s.data)||[],loading:x}),Number((v=s==null?void 0:s.meta)==null?void 0:v.total)>Number((w=s==null?void 0:s.meta)==null?void 0:w.per_page)&&e.jsx(Q,{total:Number((l=s==null?void 0:s.meta)==null?void 0:l.total),perPage:Number((d=s==null?void 0:s.meta)==null?void 0:d.per_page),currentPage:Number((p=s==null?void 0:s.meta)==null?void 0:p.current_page),onPage:o})]})},pe=12,de=(r={})=>_.stringify(r),ge=({onlyFree:r=!0,children:t})=>{const[s,x]=g.useState({page:1,per_page:pe,order_by:"created_at"}),{courses:a,loading:c,fetchCoursesData:o}=Z(s),n=q(),{push:i}=N();return g.useEffect(()=>{const h=_.parse(n.search),y=h&&{...h,order_by:"created_at"},u=y||s;x(u),i(`${n.pathname}?${de(u)}`),o(u)},[n.search]),e.jsx(z.Provider,{value:{params:s,setParams:x,courses:a,onlyFree:r,loading:c},children:t})},xe=C.section`
  padding-top: 31px;
`,he=C.div`
  background: ${({theme:r})=>r.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`,De=()=>{const{t:r}=b();return e.jsx(G,{metaTitle:r("CoursesPage.Courses"),children:e.jsx(ge,{onlyFree:!1,children:e.jsxs(xe,{className:"courses-page",children:[e.jsx(he,{children:e.jsx(O,{children:e.jsxs(f.Title,{level:1,children:[" ",r("CoursesPage.Courses")]})})}),e.jsx(O,{children:e.jsx(le,{})})]})})})};export{De as default};

import{b as L,r as x,D as A,i as T,k as W,q as u,V as B,j as e,W as M,n as b,f as P,w as S,s as j,m as w,L as N,T as H,Y as R,Z as k,X as G,a0 as X,o as U,C as O}from"./index-CU_5DVq5.js";import{P as V}from"./index-B3aStsVP.js";import{q as _}from"./base-C7euzKDi.js";import{R as Y}from"./ResponsiveImage-DO1LARVL.js";import{C as Z}from"./index-j3h8hXcH.js";import{C as J}from"./index-C4rUuFGZ.js";import{P as K}from"./index-B1Sr3u5b.js";import{C as Q,u as ee}from"./CourseCard-uH8BUU-R.js";const q=L.createContext({}),se=()=>{const{courses:r,params:a,setParams:s,loading:l}=x.useContext(q),{fetchCategories:t,categoryTree:c}=x.useContext(A.EscolaLMSContext),[o,n]=x.useState([]),i=T(),h=W(),f=x.useCallback(p=>{s&&s({...a,order:p})},[a,s]),C=x.useCallback(p=>{s&&s({...a,page:p})},[a,s]),$=x.useCallback(p=>{const g=o.filter(d=>d.id!==p);n(g),s&&s({...a,page:1,"categories[]":g.map(d=>d.id)})},[a,o,s]),E=x.useCallback(p=>{const g=o.some(d=>d.id===p.id)?o.filter(d=>d.id!==p.id):[...o,p];n(g),s&&s({...a,page:1,"categories[]":g.map(d=>d.id)})},[a,o,s]),v=x.useCallback(()=>{n([]),s&&s({...a,page:1,order:void 0,"categories[]":void 0})},[a,s]),y=x.useCallback(p=>p.flatMap(g=>{const d=y(g.subcategories||[]);return[g,...d]}),[]);return x.useEffect(()=>{const g=_.parse(h.search)["categories[]"];if(g){const D=y(c.list||[]).filter(z=>g.includes(String(z.id)));n(D)}},[h.search,c,y]),x.useEffect(()=>{t()},[t]),x.useEffect(()=>{a&&i.push(`${h.pathname}?${_.stringify(a)}`)},[a,h.pathname,i]),{courses:r,loading:l,prevCategories:o,handleSortChange:f,handlePageChange:C,handleRemoveCategory:$,handleCategoryChange:E,onClearCategories:v,params:a,categoryTree:c}},re=u.div`
  .close {
    all: unset;
    cursor: pointer;
  }
`,ae=B`
.drawer-handle {
  display: none;
}
  .mobile-drawer-drawer-wrapper { 
     height: ${({$height:r})=>r||"40vh"};
     min-height: 105px;
      width: 100%;
      bottom: 0;
      border-radius: 10px 10px 0px 0px; 
  }
`,te=({children:r,isOpen:a,onClose:s,height:l})=>e.jsxs(re,{children:[e.jsx(ae,{$height:l}),e.jsx(M,{open:a,classNames:{wrapper:"mobile-drawer-drawer-wrapper",content:"drawer-content"},onClose:s,placement:"bottom",children:r})]}),F=u.section`
  margin-bottom: ${b?"50px":"75px"};
`,oe=({courses:r,loading:a})=>{const s=T(),{t:l}=P();return r&&!a&&r.length===0?e.jsx(S.Row,{justify:"center",children:e.jsx(j.Text,{size:"18",children:l("NoCourses")})}):a?e.jsx(F,{children:e.jsx(S.Row,{style:{gap:"30px 0"},children:Array.from({length:12}).map((t,c)=>e.jsx(Q,{colProps:{xl:3,lg:4,md:6}},`index-${c}-skeleton`))})}):e.jsx(F,{children:e.jsx(S.Row,{style:{gap:"30px 0"},children:r==null?void 0:r.map(t=>{var c,o,n;return e.jsx(S.Col,{md:6,lg:4,xl:3,children:e.jsx(w.NewCourseCard,{mobile:b,id:t.id,image:e.jsx(N,{to:`/courses/${t.id}`,children:t.image_path?e.jsx(Y.ResponsiveImage,{path:t.image_path,alt:t.title,srcSizes:[300,600,900]}):e.jsx(J,{})}),price:t.public?e.jsx("div",{className:"course-price",children:l("FREE")}):e.jsx(K,{price:(c=t.product)==null?void 0:c.price,oldPrice:(o=t.product)==null?void 0:o.price_old,taxRate:(n=t.product)==null?void 0:n.tax_rate}),title:e.jsx(N,{to:`/courses/${t.id}`,children:e.jsx(H.Title,{level:3,as:"h3",className:"title",children:t.title})}),categories:e.jsx(Z,{categories:t.categories,onCategoryClick:i=>{s.push(`/courses/?categories[]=${i}`)}})})},t.id)})})})},ne=u.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  button {
    border: none;
  }
`,ie=({showDrawer:r,type:a,prevCategories:s,onClearCategories:l,handleCategoryChange:t,categories:c,handleSortChange:o,setMobileDrawerState:n})=>{const{t:i}=P();return e.jsxs(e.Fragment,{children:[r&&a===m.categories&&e.jsx(w.DropdownCategories,{checkedCategories:s,onClear:()=>[l(),n({showDrawer:!1,type:m.categories})],onChange:t,categories:c||[],isInitiallyOpen:!0,forMobile:!0}),r&&a===m.sort&&e.jsxs(ne,{children:[e.jsx(w.Button,{mode:"secondary outline",onClick:()=>{o("DESC"),n({showDrawer:!1,type:m.sort})},children:i("CoursesPage.newOnes")}),e.jsx(w.Button,{mode:"secondary outline",onClick:()=>{o("ASC"),n({showDrawer:!1,type:m.sort})},children:i("CoursesPage.oldOnes")})]})]})},ce=u.div`
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
`,le=u.div`
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
`,pe=({prevCategories:r,onClearCategories:a,handleCategoryChange:s,categories:l,handleSortChange:t,params:c,setMobileDrawerState:o,parentState:n})=>{const{t:i}=P();return e.jsxs(ce,{children:[b?e.jsxs(I,{onClick:()=>o({showDrawer:!n.showDrawer,type:m.categories}),children:[e.jsx(R,{}),e.jsx(j.Text,{size:"16",children:i("CoursesPage.showByCategory")}),e.jsx(k,{})]}):e.jsx(w.DropdownCategories,{checkedCategories:r,onClear:a,onChange:s,categories:l||[],child:e.jsxs(I,{children:[e.jsx(R,{}),e.jsx(j.Text,{size:"16",children:i("CoursesPage.showByCategory")}),e.jsx(k,{})]})}),e.jsxs(le,{children:[e.jsxs(j.Text,{onClick:()=>b&&o({showDrawer:!n.showDrawer,type:m.sort}),children:[i("CoursesPage.sort")," ",b&&e.jsx(k,{})]}),!b&&e.jsx(w.DropdownMenu,{top:10,menuItems:[{id:"DESC",content:i("CoursesPage.newOnes")},{id:"ASC",content:i("CoursesPage.oldOnes")}],onChange:h=>t(String(h.id)),child:e.jsxs(j.Text,{children:[c&&c.order==="DESC"?i("CoursesPage.newOnes"):i("CoursesPage.oldOnes"),e.jsx(k,{})]})})]})]})},de=u.div`
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
`,ge=u.button`
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
`;var m=(r=>(r.categories="categories",r.sort="sort",r))(m||{});const xe=()=>{var v,y,p,g,d;const[r,a]=L.useState({showDrawer:!1,type:"categories"}),{courses:s,loading:l,prevCategories:t,handleSortChange:c,handlePageChange:o,handleRemoveCategory:n,handleCategoryChange:i,onClearCategories:h,params:f,categoryTree:C}=se(),$=G(),{t:E}=P();return e.jsxs(e.Fragment,{children:[e.jsx(pe,{prevCategories:t,onClearCategories:h,handleCategoryChange:i,categories:C.list||[],handleSortChange:c,params:f,setMobileDrawerState:a,parentState:r}),t.length>0&&e.jsxs(de,{children:[t.map(D=>e.jsxs(ge,{onClick:()=>n(D.id),children:[e.jsx(j.Text,{size:"13",children:D.name}),e.jsx(X,{color:$.gray2})]})),e.jsx("button",{className:"clear-categories",onClick:h,children:e.jsx(j.Text,{size:"13",children:E("CoursesPage.clearAll")})})]}),e.jsx(te,{isOpen:r.showDrawer,onClose:()=>a({showDrawer:!1,type:"categories"}),height:r.type==="categories"?"40vh":"12vh",children:e.jsx(ie,{showDrawer:r.showDrawer,type:r.type,prevCategories:t,onClearCategories:h,handleCategoryChange:i,categories:C.list||[],handleSortChange:c,setMobileDrawerState:a})}),e.jsx(oe,{courses:(s==null?void 0:s.data)||[],loading:l}),Number((v=s==null?void 0:s.meta)==null?void 0:v.total)>Number((y=s==null?void 0:s.meta)==null?void 0:y.per_page)&&e.jsx(V,{total:Number((p=s==null?void 0:s.meta)==null?void 0:p.total),perPage:Number((g=s==null?void 0:s.meta)==null?void 0:g.per_page),currentPage:Number((d=s==null?void 0:s.meta)==null?void 0:d.current_page),onPage:o})]})},he=12,ue=(r={})=>_.stringify(r),Ce=({onlyFree:r=!0,children:a})=>{const[s,l]=x.useState({page:1,per_page:he,order_by:"created_at"}),{courses:t,loading:c,fetchCoursesData:o}=ee(s),n=W(),{push:i}=T();return x.useEffect(()=>{const h=_.parse(n.search),f=h&&{...h,order_by:"created_at"},C=f||s;l(C),i(`${n.pathname}?${ue(C)}`),o(C)},[n.search]),e.jsx(q.Provider,{value:{params:s,setParams:l,courses:t,onlyFree:r,loading:c},children:a})},me=u.section`
  padding-top: 31px;
`,je=u.div`
  background: ${({theme:r})=>r.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`,ke=()=>{const{t:r}=P();return e.jsx(U,{metaTitle:r("CoursesPage.Courses"),children:e.jsx(Ce,{onlyFree:!1,children:e.jsxs(me,{className:"courses-page",children:[e.jsx(je,{children:e.jsx(O,{children:e.jsxs(w.Title,{level:1,children:[" ",r("CoursesPage.Courses")]})})}),e.jsx(O,{children:e.jsx(xe,{})})]})})})};export{ke as default};

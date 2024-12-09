import{q as m,o as y,j as e,V as D,k as B,h as E,y as f,n as w,L as R,s as F,T as M,aA as _,aB as k,b as $,r as p,N as H,l as X,X as G,aC as U,ay as V,C as O}from"./index-D4kQ_0st.js";import{P as J}from"./index-V3R8q8zQ.js";import{C as K,a as Q,b as Y}from"./CourseCard-B3UcYNvV.js";import{P as Z}from"./index-BYUtxcxd.js";import{q as A}from"./base-7gvCcPfx.js";const ee=m.section`
  margin-bottom: ${y?"50px":"75px"};
`,se=()=>e.jsx(ee,{children:e.jsx(D.Row,{style:{gap:"30px 0"},children:Array.from({length:12}).map((s,t)=>e.jsx(K,{colProps:{xl:3,lg:4,md:6}},`index-${t}-skeleton`))})}),re=m.section`
  margin-bottom: ${y?"50px":"75px"};
`,ae=({courses:s,loading:t})=>{const r=B(),{t:g}=E();return s&&!t&&s.length===0?e.jsx(D.Row,{justify:"center",children:e.jsx(f.Text,{size:"18",children:g("NoCourses")})}):t?e.jsx(se,{}):e.jsx(re,{children:e.jsx(D.Row,{style:{gap:"30px 0"},children:s==null?void 0:s.map(a=>{var c,d,l;return e.jsx(D.Col,{md:6,lg:4,xl:3,children:e.jsx(w.NewCourseCard,{mobile:y,id:a.id,image:e.jsx(R,{to:`/courses/${a.id}`,children:a.image_path?e.jsx(F.ResponsiveImage,{path:a.image_path,alt:a.title,srcSizes:[300,600,900]}):e.jsx(Q,{})}),price:a.public?e.jsx("div",{className:"course-price",children:g("FREE")}):e.jsx(Z,{price:(c=a.product)==null?void 0:c.price,oldPrice:(d=a.product)==null?void 0:d.price_old,taxRate:(l=a.product)==null?void 0:l.tax_rate}),title:e.jsx(R,{to:`/courses/${a.id}`,children:e.jsx(M.Title,{level:3,as:"h3",className:"title",children:a.title})}),categories:e.jsx(Y,{categories:a.categories,onCategoryClick:o=>{r.push(`/courses?categories[]=${o}`)}})})},a.id)})})})},te=m.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  button {
    border: none;
  }
`,oe=({showDrawer:s,type:t,prevCategories:r,onClearCategories:g,handleCategoryChange:a,categories:c,handleSortChange:d,setMobileDrawerState:l})=>{const{t:o}=E();return e.jsxs(e.Fragment,{children:[s&&t===j.categories&&e.jsx(w.DropdownCategories,{checkedCategories:r,onClear:()=>[g(),l({showDrawer:!1,type:j.categories})],onChange:a,categories:c||[],isInitiallyOpen:!0,forMobile:!0}),s&&t===j.sort&&e.jsxs(te,{children:[e.jsx(w.Button,{mode:"secondary outline",onClick:()=>{d("DESC"),l({showDrawer:!1,type:j.sort})},children:o("CoursesPage.newOnes")}),e.jsx(w.Button,{mode:"secondary outline",onClick:()=>{d("ASC"),l({showDrawer:!1,type:j.sort})},children:o("CoursesPage.oldOnes")})]})]})},ne=m.div`
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
`,ie=m.div`
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
`,L=m.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .icon-squares {
    width: 11px;
    height: 11px;
    path {
      fill: ${({theme:s})=>s.primaryColor};
    }
  }
`,ce=({prevCategories:s,onClearCategories:t,handleCategoryChange:r,categories:g,handleSortChange:a,params:c,setMobileDrawerState:d,parentState:l})=>{const{t:o}=E();return e.jsxs(ne,{children:[y?e.jsxs(L,{onClick:()=>d({showDrawer:!l.showDrawer,type:j.categories}),children:[e.jsx(_,{}),e.jsx(f.Text,{size:"16",children:o("CoursesPage.showByCategory")}),e.jsx(k,{})]}):e.jsx(w.DropdownCategories,{checkedCategories:s,onClear:t,onChange:r,categories:g||[],child:e.jsxs(L,{children:[e.jsx(_,{}),e.jsx(f.Text,{size:"16",children:o("CoursesPage.showByCategory")}),e.jsx(k,{})]})}),e.jsxs(ie,{children:[e.jsxs(f.Text,{onClick:()=>y&&d({showDrawer:!l.showDrawer,type:j.sort}),children:[o("CoursesPage.sort")," ",y&&e.jsx(k,{})]}),!y&&e.jsx(w.DropdownMenu,{top:10,menuItems:[{id:"DESC",content:o("CoursesPage.newOnes")},{id:"ASC",content:o("CoursesPage.oldOnes")}],onChange:C=>a(String(C.id)),child:e.jsxs(f.Text,{children:[c&&c.order==="DESC"?o("CoursesPage.newOnes"):o("CoursesPage.oldOnes"),e.jsx(k,{})]})})]})]})},le=$.createContext({}),pe=$.createContext({}),ge=(s="courses")=>{const t=p.useContext(le),r=p.useContext(pe),{fetchCategories:g,categoryTree:a}=p.useContext(H.EscolaLMSContext),{search:c,pathname:d}=X(),l=B(),[o,C]=p.useState([]),{entities:N,params:i,setParams:n,loading:b}=p.useMemo(()=>s==="courses"?{entities:t.courses,params:t.params,setParams:t.setParams,loading:t.loading}:{entities:r.consultations,params:r.params,setParams:r.setParams,loading:r.loading},[s,t,r]),P=p.useCallback(u=>{const x=o.some(h=>h.id===u.id)?o.filter(h=>h.id!==u.id):[...o,u];C(x),n&&n({...i,page:1,"categories[]":x.map(h=>h.id)})},[i,o,n]),v=p.useCallback(u=>{const x=o.filter(h=>h.id!==u);C(x),n&&n({...i,page:1,"categories[]":x.map(h=>h.id)})},[i,o,n]),S=p.useCallback(()=>{C([]),n&&n({...i,page:1,order:void 0,"categories[]":void 0})},[i,n]),I=p.useCallback(u=>{n&&n({...i,order:u})},[i,n]),W=p.useCallback(u=>{n&&n({...i,page:u})},[i,n]),T=p.useCallback(u=>u.flatMap(x=>[x,...T(x.subcategories||[])]),[]);return p.useEffect(()=>{const x=A.parse(c)["categories[]"];if(x){const q=T(a.list||[]).filter(z=>(Array.isArray(x)?x:[x]).includes(String(z.id)));C(q)}},[c,a,T]),p.useEffect(()=>{g()},[g]),p.useEffect(()=>{i&&l.push(`${d}?${A.stringify(i)}`)},[i,d,l]),{entities:N,loading:b,prevCategories:o,handleSortChange:I,handlePageChange:W,handleCategoryChange:P,onClearCategories:S,handleRemoveCategory:v,params:i,categoryTree:a}},de=m.div`
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
      color: ${({theme:s})=>s.gray2};
    }
  }
`,xe=m.button`
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
`,ue=({onClearCategories:s,prevCategories:t,handleRemoveCategory:r})=>{const{t:g}=E(),a=G();return e.jsxs(de,{children:[t.map(c=>e.jsxs(xe,{onClick:()=>r(c.id),children:[e.jsx(f.Text,{size:"13",children:c.name}),e.jsx(U,{color:a.gray2})]})),e.jsx("button",{className:"clear-categories",onClick:s,children:e.jsx(f.Text,{size:"13",children:g("CoursesPage.clearAll")})})]})};var j=(s=>(s.categories="categories",s.sort="sort",s))(j||{});const be=()=>{var n,b,P,v,S;const[s,t]=$.useState({showDrawer:!1,type:"categories"}),{entities:r,loading:g,prevCategories:a,handleSortChange:c,handlePageChange:d,handleRemoveCategory:l,handleCategoryChange:o,onClearCategories:C,params:N,categoryTree:i}=ge("courses");return e.jsxs(e.Fragment,{children:[e.jsx(ce,{prevCategories:a,onClearCategories:C,handleCategoryChange:o,categories:i.list||[],handleSortChange:c,params:N,setMobileDrawerState:t,parentState:s}),a.length>0&&e.jsx(ue,{onClearCategories:C,prevCategories:a,handleRemoveCategory:l}),e.jsx(V,{isOpen:s.showDrawer,onClose:()=>t({showDrawer:!1,type:"categories"}),height:s.type==="categories"?"40vh":"12vh",children:e.jsx(oe,{showDrawer:s.showDrawer,type:s.type,prevCategories:a,onClearCategories:C,handleCategoryChange:o,categories:i.list||[],handleSortChange:c,setMobileDrawerState:t})}),e.jsx(ae,{courses:(r==null?void 0:r.data)||[],loading:g}),Number((n=r==null?void 0:r.meta)==null?void 0:n.total)>Number((b=r==null?void 0:r.meta)==null?void 0:b.per_page)&&e.jsx(J,{total:Number((P=r==null?void 0:r.meta)==null?void 0:P.total),perPage:Number((v=r==null?void 0:r.meta)==null?void 0:v.per_page),currentPage:Number((S=r==null?void 0:r.meta)==null?void 0:S.current_page),onPage:d})]})},Pe=12,Ce=m.section`
  padding-top: 31px;
`,he=m.div`
  background: ${({theme:s})=>s.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`,ve=({children:s,title:t})=>e.jsxs(Ce,{className:"consultations-page",children:[e.jsx(he,{children:e.jsx(O,{children:e.jsxs(w.Title,{level:1,children:[" ",t]})})}),e.jsx(O,{children:s})]});export{Pe as C,ve as E,j as M,ue as S,le as a,be as b,se as c,ce as d,oe as e,pe as f,ge as u};

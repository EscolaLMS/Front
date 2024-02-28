import{b as J,r as x,A as ne,i as A,n as K,q as C,O as oe,j as r,Q as ie,k as P,f as k,s as D,T as w,V as T,v as G,o as ce,W as M,Y as E,X as le,Z as de,d as I,g as ge,L as pe,C as q}from"./index-CJUViYQs.js";import{P as ue}from"./index-Cf_ERY3M.js";import{q as N}from"./base-C7euzKDi.js";import{R as me}from"./ResponsiveImage-CYeKSXk0.js";import{C as xe}from"./index-BovjN4tP.js";import{C as fe}from"./index-YkBOJNJW.js";import{P as he}from"./index-CAagf-yf.js";import{C as Ce,u as be}from"./CourseCard-DUHMV-ff.js";import"./index-CkZQCNYJ.js";import"./app-B2E7767C.js";import"./date-DocSkm8y.js";const ee=J.createContext({}),je=()=>{const{courses:e,params:s,setParams:t,loading:c}=x.useContext(ee),{fetchCategories:a,categoryTree:l}=x.useContext(ne.EscolaLMSContext),[i,n]=x.useState([]),o=A(),g=K(),b=x.useCallback(u=>{t&&t({...s,order:u})},[s,t]),f=x.useCallback(u=>{t&&t({...s,page:u})},[s,t]),h=x.useCallback(u=>{const p=i.filter(m=>m.id!==u);n(p),t&&t({...s,page:1,"categories[]":p.map(m=>m.id)})},[s,i,t]),v=x.useCallback(u=>{const p=i.some(m=>m.id===u.id)?i.filter(m=>m.id!==u.id):[...i,u];n(p),t&&t({...s,page:1,"categories[]":p.map(m=>m.id)})},[s,i,t]),S=x.useCallback(()=>{n([]),t&&t({...s,page:1,order:void 0,"categories[]":void 0})},[s,t]),$=x.useCallback(u=>u.flatMap(p=>{const m=$(p.subcategories||[]);return[p,...m]}),[]);return x.useEffect(()=>{const p=N.parse(g.search)["categories[]"];if(p){const R=$(l.list||[]).filter(L=>p.includes(String(L.id)));n(R)}},[g.search,l,$]),x.useEffect(()=>{a()},[a]),x.useEffect(()=>{s&&o.push(`${g.pathname}?${N.stringify(s)}`)},[s,g.pathname,o]),{courses:e,loading:c,prevCategories:i,handleSortChange:b,handlePageChange:f,handleRemoveCategory:h,handleCategoryChange:v,onClearCategories:S,params:s,categoryTree:l}},ye=C.div`
  .close {
    all: unset;
    cursor: pointer;
  }
`,ve=oe`
  .mobile-drawer-drawer-wrapper { 
     height: ${({$height:e})=>e||"40vh"};
     min-height: 105px;
      width: 100%;
      bottom: 0;
      border-radius: 10px 10px 0px 0px; 
  }
`,we=({children:e,isOpen:s,onClose:t,height:c})=>r.jsxs(ye,{children:[r.jsx(ve,{$height:c}),r.jsx(ie,{open:s,classNames:{wrapper:"mobile-drawer-drawer-wrapper",content:"drawer-content"},onClose:t,placement:"bottom",children:e})]}),z=C.section`
  margin-bottom: ${P?"50px":"75px"};
`,Te=({courses:e,loading:s})=>{const t=A(),{t:c}=k();return e&&!s&&e.length===0?r.jsx(D.Row,{justify:"center",children:r.jsx(w.Text,{size:"18",children:c("NoCourses")})}):s?r.jsx(z,{children:r.jsx(D.Row,{style:{gap:"30px 0"},children:Array.from({length:12}).map((a,l)=>r.jsx(Ce,{colProps:{xl:3,lg:4,md:6}},`index-${l}-skeleton`))})}):r.jsx(z,{children:r.jsx(D.Row,{style:{gap:"30px 0"},children:e==null?void 0:e.map(a=>{var l,i,n;return r.jsx(D.Col,{md:6,lg:4,xl:3,children:r.jsx(T.NewCourseCard,{mobile:P,id:a.id,image:r.jsx(G,{to:`/courses/${a.id}`,children:a.image_path?r.jsx(me.ResponsiveImage,{path:a.image_path,alt:a.title,srcSizes:[300,600,900]}):r.jsx(fe,{})}),price:a.public?r.jsx("div",{className:"course-price",children:c("FREE")}):r.jsx(he,{price:(l=a.product)==null?void 0:l.price,oldPrice:(i=a.product)==null?void 0:i.price_old,taxRate:(n=a.product)==null?void 0:n.tax_rate}),title:r.jsx(G,{to:`/courses/${a.id}`,children:r.jsx(ce.Title,{level:3,as:"h3",className:"title",children:a.title})}),categories:r.jsx(xe,{categories:a.categories,onCategoryClick:o=>{t.push(`/courses/?categories[]=${o}`)}})})},a.id)})})})},Se=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  button {
    border: none;
  }
`,Pe=({showDrawer:e,type:s,prevCategories:t,onClearCategories:c,handleCategoryChange:a,categories:l,handleSortChange:i,setMobileDrawerState:n})=>{const{t:o}=k();return r.jsxs(r.Fragment,{children:[e&&s===y.categories&&r.jsx(T.DropdownCategories,{checkedCategories:t,onClear:()=>[c(),n({showDrawer:!1,type:y.categories})],onChange:a,categories:l||[],isInitiallyOpen:!0,forMobile:!0}),e&&s===y.sort&&r.jsxs(Se,{children:[r.jsx(T.Button,{mode:"secondary outline",onClick:()=>{i("DESC"),n({showDrawer:!1,type:y.sort})},children:o("CoursesPage.newOnes")}),r.jsx(T.Button,{mode:"secondary outline",onClick:()=>{i("ASC"),n({showDrawer:!1,type:y.sort})},children:o("CoursesPage.oldOnes")})]})]})},$e=C.div`
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
`,Oe=C.div`
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
`,H=C.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .icon-squares {
    width: 11px;
    height: 11px;
    path {
      fill: ${({theme:e})=>e.primaryColor};
    }
  }
`,_e=({prevCategories:e,onClearCategories:s,handleCategoryChange:t,categories:c,handleSortChange:a,params:l,setMobileDrawerState:i,parentState:n})=>{const{t:o}=k();return r.jsxs($e,{children:[P?r.jsxs(H,{onClick:()=>i({showDrawer:!n.showDrawer,type:y.categories}),children:[r.jsx(M,{}),r.jsx(w.Text,{size:"16",children:o("CoursesPage.showByCategory")}),r.jsx(E,{})]}):r.jsx(T.DropdownCategories,{checkedCategories:e,onClear:s,onChange:t,categories:c||[],child:r.jsxs(H,{children:[r.jsx(M,{}),r.jsx(w.Text,{size:"16",children:o("CoursesPage.showByCategory")}),r.jsx(E,{})]})}),r.jsxs(Oe,{children:[r.jsxs(w.Text,{onClick:()=>P&&i({showDrawer:!n.showDrawer,type:y.sort}),children:[o("CoursesPage.sort")," ",P&&r.jsx(E,{})]}),!P&&r.jsx(T.DropdownMenu,{top:10,menuItems:[{id:"DESC",content:o("CoursesPage.newOnes")},{id:"ASC",content:o("CoursesPage.oldOnes")}],onChange:g=>a(String(g.id)),child:r.jsxs(w.Text,{children:[l&&l.order==="DESC"?o("CoursesPage.newOnes"):o("CoursesPage.oldOnes"),r.jsx(E,{})]})})]})]})},ke=C.div`
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
      color: ${({theme:e})=>e.gray2};
    }
  }
`,De=C.button`
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
`;var y=(e=>(e.categories="categories",e.sort="sort",e))(y||{});const Ee=()=>{const[e,s]=J.useState({showDrawer:!1,type:"categories"}),{courses:t,loading:c,prevCategories:a,handleSortChange:l,handlePageChange:i,handleRemoveCategory:n,handleCategoryChange:o,onClearCategories:g,params:b,categoryTree:f}=je(),h=le(),{t:v}=k();return r.jsxs(r.Fragment,{children:[r.jsx(_e,{prevCategories:a,onClearCategories:g,handleCategoryChange:o,categories:f.list||[],handleSortChange:l,params:b,setMobileDrawerState:s,parentState:e}),a.length>0&&r.jsxs(ke,{children:[a.map(S=>r.jsxs(De,{onClick:()=>n(S.id),children:[r.jsx(w.Text,{size:"13",children:S.name}),r.jsx(de,{color:h.gray2})]})),r.jsx("button",{className:"clear-categories",onClick:g,children:r.jsx(w.Text,{size:"13",children:v("CoursesPage.clearAll")})})]}),r.jsx(we,{isOpen:e.showDrawer,onClose:()=>s({showDrawer:!1,type:"categories"}),height:e.type==="categories"?"40vh":"12vh",children:r.jsx(Pe,{showDrawer:e.showDrawer,type:e.type,prevCategories:a,onClearCategories:g,handleCategoryChange:o,categories:f.list||[],handleSortChange:l,setMobileDrawerState:s})}),r.jsx(Te,{courses:(t==null?void 0:t.data)||[],loading:c}),Number(t==null?void 0:t.meta.total)>Number(t==null?void 0:t.meta.per_page)&&r.jsx(ue,{total:Number(t==null?void 0:t.meta.total),perPage:Number(t==null?void 0:t.meta.per_page),currentPage:Number(t==null?void 0:t.meta.current_page),onPage:i})]})},Ie=12;function Ne(e){var s=typeof e;return e!=null&&(s=="object"||s=="function")}var re=Ne,Re=typeof I=="object"&&I&&I.Object===Object&&I,Le=Re,Fe=Le,We=typeof self=="object"&&self&&self.Object===Object&&self,Ae=Fe||We||Function("return this")(),te=Ae,Be=te,Ge=function(){return Be.Date.now()},Me=Ge,qe=/\s/;function ze(e){for(var s=e.length;s--&&qe.test(e.charAt(s)););return s}var He=ze,Ue=He,Xe=/^\s+/;function Qe(e){return e&&e.slice(0,Ue(e)+1).replace(Xe,"")}var Ve=Qe,Ye=te,Ze=Ye.Symbol,se=Ze,U=se,ae=Object.prototype,Je=ae.hasOwnProperty,Ke=ae.toString,_=U?U.toStringTag:void 0;function er(e){var s=Je.call(e,_),t=e[_];try{e[_]=void 0;var c=!0}catch{}var a=Ke.call(e);return c&&(s?e[_]=t:delete e[_]),a}var rr=er,tr=Object.prototype,sr=tr.toString;function ar(e){return sr.call(e)}var nr=ar,X=se,or=rr,ir=nr,cr="[object Null]",lr="[object Undefined]",Q=X?X.toStringTag:void 0;function dr(e){return e==null?e===void 0?lr:cr:Q&&Q in Object(e)?or(e):ir(e)}var gr=dr;function pr(e){return e!=null&&typeof e=="object"}var ur=pr,mr=gr,xr=ur,fr="[object Symbol]";function hr(e){return typeof e=="symbol"||xr(e)&&mr(e)==fr}var Cr=hr,br=Ve,V=re,jr=Cr,Y=NaN,yr=/^[-+]0x[0-9a-f]+$/i,vr=/^0b[01]+$/i,wr=/^0o[0-7]+$/i,Tr=parseInt;function Sr(e){if(typeof e=="number")return e;if(jr(e))return Y;if(V(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=V(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=br(e);var t=vr.test(e);return t||wr.test(e)?Tr(e.slice(2),t?2:8):yr.test(e)?Y:+e}var Pr=Sr,$r=re,W=Me,Z=Pr,Or="Expected a function",_r=Math.max,kr=Math.min;function Dr(e,s,t){var c,a,l,i,n,o,g=0,b=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError(Or);s=Z(s)||0,$r(t)&&(b=!!t.leading,f="maxWait"in t,l=f?_r(Z(t.maxWait)||0,s):l,h="trailing"in t?!!t.trailing:h);function v(d){var j=c,O=a;return c=a=void 0,g=d,i=e.apply(O,j),i}function S(d){return g=d,n=setTimeout(p,s),b?v(d):i}function $(d){var j=d-o,O=d-g,B=s-j;return f?kr(B,l-O):B}function u(d){var j=d-o,O=d-g;return o===void 0||j>=s||j<0||f&&O>=l}function p(){var d=W();if(u(d))return m(d);n=setTimeout(p,$(d))}function m(d){return n=void 0,h&&c?v(d):(c=a=void 0,i)}function R(){n!==void 0&&clearTimeout(n),g=0,c=o=a=n=void 0}function L(){return n===void 0?i:m(W())}function F(){var d=W(),j=u(d);if(c=arguments,a=this,o=d,j){if(n===void 0)return S(o);if(f)return clearTimeout(n),n=setTimeout(p,s),v(o)}return n===void 0&&(n=setTimeout(p,s)),i}return F.cancel=R,F.flush=L,F}var Er=Dr;const Ir=ge(Er),Nr=(e={})=>N.stringify(e),Rr=({onlyFree:e=!0,children:s})=>{const[t,c]=x.useState({page:1,per_page:Ie,order_by:"created_at"}),{courses:a,loading:l,fetchCoursesData:i}=be(t),n=K(),{push:o}=A(),g=Ir(i,300);return x.useEffect(()=>{const b=N.parse(n.search),f=b&&{...b,order_by:"created_at"},h=f||t;c(h),g(h),o(`${n.pathname}?${Nr(h)}`)},[n.search]),r.jsx(ee.Provider,{value:{params:t,setParams:c,courses:a,onlyFree:e,loading:l},children:s})},Lr=C.section`
  padding-top: 31px;
`,Fr=C.div`
  background: ${({theme:e})=>e.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`,Vr=()=>{const{t:e}=k();return r.jsx(pe,{metaTitle:e("CoursesPage.Courses"),children:r.jsx(Rr,{onlyFree:!1,children:r.jsxs(Lr,{className:"courses-page",children:[r.jsx(Fr,{children:r.jsx(q,{children:r.jsxs(T.Title,{level:1,children:[" ",e("CoursesPage.Courses")]})})}),r.jsx(q,{children:r.jsx(Ee,{})})]})})})};export{Vr as default};

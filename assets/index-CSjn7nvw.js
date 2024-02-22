import{b as J,r as x,D as ne,i as A,s as K,q as C,Q as oe,j as r,V as ie,o as $,f as k,h as D,v as w,C as ce,W as S,w as G,T as le,Y as M,Z as E,X as de,a0 as ge,d as I,g as pe,L as ue,m as q}from"./index-BTvwz0L3.js";import{P as me}from"./index-DzsaDRiK.js";import{q as N}from"./base-CumTa13P.js";import{R as xe}from"./ResponsiveImage-G_l4wTjD.js";import{C as fe}from"./index-BHYkv3Er.js";import{C as he}from"./index-ClhuH08r.js";import{u as Ce}from"./useFetchCourses-B9Pdn2Rg.js";const ee=J.createContext({}),be=()=>{const{courses:e,params:a,setParams:t,loading:i}=x.useContext(ee),{fetchCategories:s,categoryTree:c}=x.useContext(ne.EscolaLMSContext),[o,n]=x.useState([]),l=A(),g=K(),b=x.useCallback(u=>{t&&t({...a,order:u})},[a,t]),f=x.useCallback(u=>{t&&t({...a,page:u})},[a,t]),h=x.useCallback(u=>{const p=o.filter(m=>m.id!==u);n(p),t&&t({...a,page:1,"categories[]":p.map(m=>m.id)})},[a,o,t]),v=x.useCallback(u=>{const p=o.some(m=>m.id===u.id)?o.filter(m=>m.id!==u.id):[...o,u];n(p),t&&t({...a,page:1,"categories[]":p.map(m=>m.id)})},[a,o,t]),T=x.useCallback(()=>{n([]),t&&t({...a,page:1,order:void 0,"categories[]":void 0})},[a,t]),P=x.useCallback(u=>u.flatMap(p=>{const m=P(p.subcategories||[]);return[p,...m]}),[]);return x.useEffect(()=>{const p=N.parse(g.search)["categories[]"];if(p){const R=P(c.list||[]).filter(L=>p.includes(String(L.id)));n(R)}},[g.search,c,P]),x.useEffect(()=>{s()},[s]),x.useEffect(()=>{a&&l.push(`${g.pathname}?${N.stringify(a)}`)},[a,g.pathname,l]),{courses:e,loading:i,prevCategories:o,handleSortChange:b,handlePageChange:f,handleRemoveCategory:h,handleCategoryChange:v,onClearCategories:T,params:a,categoryTree:c}},je=C.div`
  .close {
    all: unset;
    cursor: pointer;
  }
`,ye=oe`
  .mobile-drawer-drawer-wrapper { 
     height: ${({$height:e})=>e||"40vh"};
      width: 100%;
      bottom: 0;
      border-radius: 10px 10px 0px 0px; 
  }
`,ve=({children:e,isOpen:a,onClose:t,height:i})=>r.jsxs(je,{children:[r.jsx(ye,{$height:i}),r.jsx(ie,{open:a,classNames:{wrapper:"mobile-drawer-drawer-wrapper",content:"drawer-content"},onClose:t,placement:"bottom",children:e})]}),z=C.section`
  margin-bottom: ${$?"50px":"75px"};
`,we=({courses:e,loading:a})=>{const t=A(),{t:i}=k();return e&&!a&&e.length===0?r.jsx(D.Row,{justify:"center",children:r.jsx(w.Text,{size:"18",children:i("NoCourses")})}):a?r.jsx(z,{children:r.jsx(D.Row,{style:{gap:"30px 0"},children:Array.from({length:12}).map((s,c)=>r.jsx(ce,{colProps:{xl:3,lg:4,md:6}},`index-${c}-skeleton`))})}):r.jsx(z,{children:r.jsx(D.Row,{style:{gap:"30px 0"},children:e==null?void 0:e.map(s=>r.jsx(D.Col,{md:6,lg:4,xl:3,children:r.jsx(S.NewCourseCard,{mobile:$,id:s.id,image:r.jsx(G,{to:`/courses/${s.id}`,children:s.image_path?r.jsx(xe.ResponsiveImage,{path:s.image_path,alt:s.title,srcSizes:[300,600,900]}):r.jsx(he,{})}),title:r.jsx(G,{to:`/courses/${s.id}`,children:r.jsx(le.Title,{level:3,as:"h3",className:"title",children:s.title})}),categories:r.jsx(fe,{categories:s.categories,onCategoryClick:c=>{t.push(`/courses/?categories[]=${c}`)}})})},s.id))})})},Se=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`,Te=({showDrawer:e,type:a,prevCategories:t,onClearCategories:i,handleCategoryChange:s,categories:c,handleSortChange:o,setMobileDrawerState:n})=>{const{t:l}=k();return r.jsxs(r.Fragment,{children:[e&&a===y.categories&&r.jsx(S.DropdownCategories,{checkedCategories:t,onClear:()=>[i(),n({showDrawer:!1,type:y.categories})],onChange:s,categories:c||[],isInitiallyOpen:!0,forMobile:!0}),e&&a===y.sort&&r.jsxs(Se,{children:[r.jsx(S.Button,{mode:"secondary outline",onClick:()=>{o("DESC"),n({showDrawer:!1,type:y.sort})},children:l("CoursesPage.newOnes")}),r.jsx(S.Button,{mode:"secondary outline",onClick:()=>{o("ASC"),n({showDrawer:!1,type:y.sort})},children:l("CoursesPage.oldOnes")})]})]})},$e=C.div`
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
`,Pe=C.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    margin: unset;
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
`,Oe=({prevCategories:e,onClearCategories:a,handleCategoryChange:t,categories:i,handleSortChange:s,params:c,setMobileDrawerState:o,parentState:n})=>{const{t:l}=k();return r.jsxs($e,{children:[$?r.jsxs(H,{onClick:()=>o({showDrawer:!n.showDrawer,type:y.categories}),children:[r.jsx(M,{}),r.jsx(w.Text,{size:"16",children:"Show By Category"}),r.jsx(E,{})]}):r.jsx(S.DropdownCategories,{checkedCategories:e,onClear:a,onChange:t,categories:i||[],child:r.jsxs(H,{children:[r.jsx(M,{}),r.jsx(w.Text,{size:"16",children:"Show By Category"}),r.jsx(E,{})]})}),r.jsxs(Pe,{children:[r.jsxs(w.Text,{onClick:()=>$&&o({showDrawer:!n.showDrawer,type:y.sort}),children:["Sort ",$&&r.jsx(E,{})]}),!$&&r.jsx(S.DropdownMenu,{top:10,menuItems:[{id:"DESC",content:l("CoursesPage.newOnes")},{id:"ASC",content:l("CoursesPage.oldOnes")}],onChange:g=>s(String(g.id)),child:r.jsxs(w.Text,{children:[c&&c.order==="DESC"?l("CoursesPage.newOnes"):l("CoursesPage.oldOnes"),r.jsx(E,{})]})})]})]})},_e=C.div`
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
`,ke=C.button`
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
`;var y=(e=>(e.categories="categories",e.sort="sort",e))(y||{});const De=()=>{const[e,a]=J.useState({showDrawer:!1,type:"categories"}),{courses:t,loading:i,prevCategories:s,handleSortChange:c,handlePageChange:o,handleRemoveCategory:n,handleCategoryChange:l,onClearCategories:g,params:b,categoryTree:f}=be(),h=de(),{t:v}=k();return r.jsxs(r.Fragment,{children:[r.jsx(Oe,{prevCategories:s,onClearCategories:g,handleCategoryChange:l,categories:f.list||[],handleSortChange:c,params:b,setMobileDrawerState:a,parentState:e}),s.length>0&&r.jsxs(_e,{children:[s.map(T=>r.jsxs(ke,{onClick:()=>n(T.id),children:[r.jsx(w.Text,{size:"13",children:T.name}),r.jsx(ge,{color:h.gray2})]})),r.jsx("button",{className:"clear-categories",onClick:g,children:r.jsx(w.Text,{size:"13",children:v("CoursesPage.clearAll")})})]}),r.jsx(ve,{isOpen:e.showDrawer,onClose:()=>a({showDrawer:!1,type:"categories"}),height:e.type==="categories"?"40vh":"12vh",children:r.jsx(Te,{showDrawer:e.showDrawer,type:e.type,prevCategories:s,onClearCategories:g,handleCategoryChange:l,categories:f.list||[],handleSortChange:c,setMobileDrawerState:a})}),r.jsx(we,{courses:(t==null?void 0:t.data)||[],loading:i}),Number(t==null?void 0:t.meta.total)>Number(t==null?void 0:t.meta.per_page)&&r.jsx(me,{total:Number(t==null?void 0:t.meta.total),perPage:Number(t==null?void 0:t.meta.per_page),currentPage:Number(t==null?void 0:t.meta.current_page),onPage:o})]})},Ee=12;function Ie(e){var a=typeof e;return e!=null&&(a=="object"||a=="function")}var re=Ie,Ne=typeof I=="object"&&I&&I.Object===Object&&I,Re=Ne,Le=Re,We=typeof self=="object"&&self&&self.Object===Object&&self,Fe=Le||We||Function("return this")(),te=Fe,Ae=te,Be=function(){return Ae.Date.now()},Ge=Be,Me=/\s/;function qe(e){for(var a=e.length;a--&&Me.test(e.charAt(a)););return a}var ze=qe,He=ze,Ue=/^\s+/;function Xe(e){return e&&e.slice(0,He(e)+1).replace(Ue,"")}var Qe=Xe,Ve=te,Ye=Ve.Symbol,ae=Ye,U=ae,se=Object.prototype,Ze=se.hasOwnProperty,Je=se.toString,_=U?U.toStringTag:void 0;function Ke(e){var a=Ze.call(e,_),t=e[_];try{e[_]=void 0;var i=!0}catch{}var s=Je.call(e);return i&&(a?e[_]=t:delete e[_]),s}var er=Ke,rr=Object.prototype,tr=rr.toString;function ar(e){return tr.call(e)}var sr=ar,X=ae,nr=er,or=sr,ir="[object Null]",cr="[object Undefined]",Q=X?X.toStringTag:void 0;function lr(e){return e==null?e===void 0?cr:ir:Q&&Q in Object(e)?nr(e):or(e)}var dr=lr;function gr(e){return e!=null&&typeof e=="object"}var pr=gr,ur=dr,mr=pr,xr="[object Symbol]";function fr(e){return typeof e=="symbol"||mr(e)&&ur(e)==xr}var hr=fr,Cr=Qe,V=re,br=hr,Y=NaN,jr=/^[-+]0x[0-9a-f]+$/i,yr=/^0b[01]+$/i,vr=/^0o[0-7]+$/i,wr=parseInt;function Sr(e){if(typeof e=="number")return e;if(br(e))return Y;if(V(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=V(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Cr(e);var t=yr.test(e);return t||vr.test(e)?wr(e.slice(2),t?2:8):jr.test(e)?Y:+e}var Tr=Sr,$r=re,F=Ge,Z=Tr,Pr="Expected a function",Or=Math.max,_r=Math.min;function kr(e,a,t){var i,s,c,o,n,l,g=0,b=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError(Pr);a=Z(a)||0,$r(t)&&(b=!!t.leading,f="maxWait"in t,c=f?Or(Z(t.maxWait)||0,a):c,h="trailing"in t?!!t.trailing:h);function v(d){var j=i,O=s;return i=s=void 0,g=d,o=e.apply(O,j),o}function T(d){return g=d,n=setTimeout(p,a),b?v(d):o}function P(d){var j=d-l,O=d-g,B=a-j;return f?_r(B,c-O):B}function u(d){var j=d-l,O=d-g;return l===void 0||j>=a||j<0||f&&O>=c}function p(){var d=F();if(u(d))return m(d);n=setTimeout(p,P(d))}function m(d){return n=void 0,h&&i?v(d):(i=s=void 0,o)}function R(){n!==void 0&&clearTimeout(n),g=0,i=l=s=n=void 0}function L(){return n===void 0?o:m(F())}function W(){var d=F(),j=u(d);if(i=arguments,s=this,l=d,j){if(n===void 0)return T(l);if(f)return clearTimeout(n),n=setTimeout(p,a),v(l)}return n===void 0&&(n=setTimeout(p,a)),o}return W.cancel=R,W.flush=L,W}var Dr=kr;const Er=pe(Dr),Ir=(e={})=>N.stringify(e),Nr=({onlyFree:e=!0,children:a})=>{const[t,i]=x.useState({page:1,per_page:Ee,order_by:"created_at"}),{courses:s,loading:c,fetchCoursesData:o}=Ce(t),n=K(),{push:l}=A(),g=Er(o,300);return x.useEffect(()=>{const b=N.parse(n.search),f=b&&{...b,order_by:"created_at"},h=f||t;i(h),g(h),l(`${n.pathname}?${Ir(h)}`)},[n.search]),r.jsx(ee.Provider,{value:{params:t,setParams:i,courses:s,onlyFree:e,loading:c},children:a})},Rr=C.section`
  padding-top: 31px;
`,Lr=C.div`
  background: ${({theme:e})=>e.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`,zr=()=>{const{t:e}=k();return r.jsx(ue,{metaTitle:e("CoursesPage.Courses"),children:r.jsx(Nr,{onlyFree:!1,children:r.jsxs(Rr,{className:"courses-page",children:[r.jsx(Lr,{children:r.jsx(q,{children:r.jsxs(S.Title,{level:1,children:[" ",e("CoursesPage.Courses")]})})}),r.jsx(q,{children:r.jsx(De,{})})]})})})};export{zr as default};

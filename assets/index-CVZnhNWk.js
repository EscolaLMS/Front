import{n as K,h as E,r as i,d as _,a8 as te,aF as se,a9 as D,j as t,q as k,J as F,f as R,A as W,T as L,x as B,aj as ne,y as N,al as re,aG as ae,G as oe,aH as ie,a2 as J,aI as le,aJ as ce,aK as de,p as ue,i as U,L as q,s as pe,m as V,U as me,o as fe,Q as $,v as ge,C as he}from"./index-flVLDudU.js";import{a as xe,b as be,C as z}from"./CourseCard-o5LQylDQ.js";import{R as ye}from"./index-BqLJH0jp.js";import{b as je,Q as Ce}from"./questionnaires-Czq0VuLo.js";import{u as ve}from"./useDownloadCertificate-DmpzPCTx.js";import{q as Pe}from"./base-C7euzKDi.js";import{P as we}from"./index-CCvRmBxB.js";import{S as _e}from"./swiper-BwlyVynA.js";import{a as H}from"./a11y-CcPUmQje.js";const X=()=>{const{search:e,pathname:d}=K(),r=E(),c=i.useMemo(()=>new URLSearchParams(e),[e]),a=i.useCallback(p=>new URLSearchParams(e).get(p),[e]),x=i.useCallback(p=>new URLSearchParams(e).getAll(p),[e]),b=i.useCallback((p,f)=>{!f||f===""?c.delete(p):c.set(p,f),r.push({pathname:d,search:c.toString()})},[r,d,c]),y=i.useCallback(p=>{const f=new URLSearchParams;return Object.entries(p).forEach(([v,g])=>{Array.isArray(g)?g.forEach(P=>{f.append(`${v}`,P)}):f.append(v,g)}),f.toString()},[]),u=i.useCallback(p=>{r.push({pathname:d,search:p?y(p):void 0})},[r,y,d]),j=i.useCallback((p,f)=>{c.delete(p),f.forEach(v=>{c.append(p,`${v}`)}),r.push({pathname:d,search:c.toString()})},[r,d,c]),C=i.useMemo(()=>Pe.parse(e),[e]);return{query:c,getQueryValueByName:a,getAllQueryValueByName:x,setQueryParam:b,setPathname:u,setQueryArrayParam:j,paramsToObject:C,objectToParam:y}};var Y={};(function(e){var d=_&&_.__makeTemplateObject||function(n,s){return Object.defineProperty?Object.defineProperty(n,"raw",{value:s}):n.raw=s,n},r=_&&_.__assign||function(){return r=Object.assign||function(n){for(var s,l=1,h=arguments.length;l<h;l++){s=arguments[l];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])}return n},r.apply(this,arguments)},c=_&&_.__createBinding||(Object.create?function(n,s,l,h){h===void 0&&(h=l);var o=Object.getOwnPropertyDescriptor(s,l);(!o||("get"in o?!s.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return s[l]}}),Object.defineProperty(n,h,o)}:function(n,s,l,h){h===void 0&&(h=l),n[h]=s[l]}),a=_&&_.__setModuleDefault||(Object.create?function(n,s){Object.defineProperty(n,"default",{enumerable:!0,value:s})}:function(n,s){n.default=s}),x=_&&_.__importStar||function(n){if(n&&n.__esModule)return n;var s={};if(n!=null)for(var l in n)l!=="default"&&Object.prototype.hasOwnProperty.call(n,l)&&c(s,n,l);return a(s,n),s};Object.defineProperty(e,"__esModule",{value:!0}),e.Tabs=void 0;var b=t,y=x(i),u=x(te),j=se,C=D,p=D,f=(0,u.default)("div")(g||(g=d([`
  .tabs-menu {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: `,`;
    border-radius: `,`px;
    padding: 8px;
    &-inner {
      display: flex;
    }
  }

  .tab-menu-btn {
    position: relative;
    padding: 6px 24px;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    font-family: `,`;
    color: `,`;
    border-radius: `,`px;
    &:first-of-type {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:nth-of-type(2) {
      border-radius: 0;
    }
    &:last-of-type {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    background-color: #f8f8f8;
    &.active {
      font-weight: bold;
      background-color: `,`;
      color: `,`;
      border-radius: `,`px;
    }
  }

  .tabs-panel {
    padding: 25px 0;
  }
`],[`
  .tabs-menu {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: `,`;
    border-radius: `,`px;
    padding: 8px;
    &-inner {
      display: flex;
    }
  }

  .tab-menu-btn {
    position: relative;
    padding: 6px 24px;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    font-family: `,`;
    color: `,`;
    border-radius: `,`px;
    &:first-of-type {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:nth-of-type(2) {
      border-radius: 0;
    }
    &:last-of-type {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    background-color: #f8f8f8;
    &.active {
      font-weight: bold;
      background-color: `,`;
      color: `,`;
      border-radius: `,`px;
    }
  }

  .tabs-panel {
    padding: 25px 0;
  }
`])),function(n){var s=n.theme;return(0,C.getStylesBasedOnTheme)(s.mode,s.black,s.white)},function(n){var s=n.theme;return s.cardRadius},function(n){var s=n.theme;return(0,j.getFontFromTheme)(s).fontFamily},function(n){var s=n.theme;return(0,C.getStylesBasedOnTheme)(s.mode,s.white,s.gray1)},function(n){var s=n.theme;return s.buttonRadius},function(n){var s=n.theme;return s.primaryColor},function(n){var s=n.theme;return s.white},function(n){var s=n.theme;return s.buttonRadius}),v=function(n){var s=n.tabs,l=s===void 0?[]:s,h=n.defaultActiveKey,o=h===void 0?l[0].key:h,m=n.onClick,w=n.className,M=w===void 0?"":w,A=y.useState(o),I=A[0],ee=A[1],Q=l&&l.find(function(T){return T.key===I});return(0,b.jsxs)(f,r({className:"wellms-component ".concat(M)},{children:[(0,b.jsx)("div",r({className:"tabs-menu"},{children:(0,b.jsx)("div",r({className:"tabs-menu-inner"},{children:l.map(function(T){return T.hidden?null:(0,b.jsx)("button",r({type:"button",className:"tab-menu-btn ".concat(I===T.key?"active":""),id:(0,p.getUniqueId)("tab-menu-".concat(T.key)),onClick:function(){ee(T.key),m&&m(T.key)}},{children:T.label}),T.key)})}))})),(0,b.jsx)("div",r({id:"tabpanel-".concat(I),className:"tabs-panel"},{children:(0,b.jsx)(y.Fragment,{children:Q&&Q.component})}))]}))};e.Tabs=v,e.default=(0,u.withTheme)((0,u.default)(e.Tabs)(P||(P=d([""],[""]))));var g,P})(Y);const Te=k.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`,Se=({children:e})=>t.jsx(Te,{children:e}),ke=({courseData:e,visible:d,onClose:r})=>{const{sendProgress:c}=i.useContext(F.EscolaLMSContext),{t:a}=R(),{push:x}=E(),b=i.useCallback(async()=>{await c(e.course.id,e.progress.map(({topic_id:y})=>({topic_id:y,status:0}))),x(`/course/${e.course.id}`)},[e.course.id,e.progress,c,x]);return t.jsx(W.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:d,onClose:r,children:t.jsxs(t.Fragment,{children:[t.jsx(L.Title,{level:4,children:a("ResetProgressModal.Continue")}),t.jsxs(B.Text,{children:[" ",a("ResetProgressModal.RestartCourse")]}),t.jsxs(ne,{$gap:16,children:[t.jsx(N.Button,{mode:"primary",onClick:b,children:a("ResetProgressModal.WantContinue")}),t.jsx(N.Button,{mode:"primary",onClick:r,children:a("ResetProgressModal.Cancel")})]})]})})},Me=k(re)`
  gap: 6px;
  margin: 0;
  width: 100%;
  p {
    margin: 0;
  }
`,Re=({courseId:e})=>{const{fetchCertificates:d}=i.useContext(F.EscolaLMSContext),{downloadCertificate:r,loadingId:c}=ve(),{t:a}=R(),[x,b]=i.useState(!1),y=i.useCallback(async()=>{try{const u=await d({assignable_type:ae.CertificateAssignableTypes.Course,assignable_id:Number(e)});if(u&&u.success){const j=u.data||[];if(j.length===0){b(!0);return}j.forEach(({id:C,title:p})=>{r(C,p)})}}catch(u){oe(`${a("UnexpectedError")}`,"error"),console.log(u)}},[e,r,a,d]);return t.jsx(Z,{onClick:y,children:!x&&t.jsxs(t.Fragment,{children:[t.jsx(ie,{})," ",a("MyProfilePage.DownloadCertificate")," ",c>-1&&t.jsx(J,{width:"10px",height:"10px"})]})})},Z=k.button`
  all: unset;
  text-decoration: underline;
  font-size: 13px;
  font-family: ${({theme:e})=>e.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`,Ae=k.div`
  margin-top: 5px;
`,Oe=({courseData:e,courseProgress:d})=>{const[r,c]=i.useState(void 0),[a,x]=i.useState(!1),{fetchQuestionnaires:b,fetchQuestionnaire:y}=i.useContext(F.EscolaLMSContext),[u,j]=i.useState({show:!1,step:0,loading:!1}),{t:C}=R(),p={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},f=i.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),v=f?f.getTime()<Date.now():!1,g=i.useMemo(()=>f?le(f):null,[f]),[P,n]=i.useState([]),s=i.useCallback(()=>{if(c(void 0),j(l=>({...l,show:!1})),u.step<P.length-1){j(h=>({...h,step:h.step+1}));const l=setTimeout(()=>{j(h=>({...h,show:!0}))},500);return()=>clearTimeout(l)}},[P,u.step]);return i.useEffect(()=>{r&&je({courseId:r,fetchQuestionnaire:y,fetchQuestionnaires:b,onSucces:l=>{n(l)},onFinish:()=>j(l=>({...l,loading:!1}))})},[r]),t.jsxs(Me,{children:[p.isDone&&t.jsx(Re,{courseId:e.course.id}),d===100&&t.jsxs(t.Fragment,{children:[t.jsxs(Z,{onClick:()=>{c(e.course.id),j(l=>({...l,show:!0,loading:!0}))},children:[t.jsx(ce,{})," ",C("MyProfilePage.RateCourse")," ",u.loading&&t.jsx(J,{width:"10px",height:"10px"})]}),t.jsx(Ae,{children:!v&&p.isDone&&t.jsx(N.Button,{mode:"secondary",onClick:()=>x(!0),children:C("MyProfilePage.ResetCourseProgress")})})]}),!!v&&g!==null&&g[0]<0&&t.jsxs(B.Text,{size:"12",children:[C("MyProfilePage.AccessCourseExpired")," ",de.format(g[0],g[1])]}),t.jsx(ke,{courseData:e,visible:a,onClose:()=>x(!1)}),u.show&&r&&!u.loading&&(P.length?t.jsx(t.Fragment,{children:t.jsx(ye,{course:Ce.COURSE,courseId:r,visible:u.show,onClose:s,questionnaire:P[u.step],onFinish:()=>{}})}):t.jsx(W.Modal,{onClose:s,visible:u.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(L.Title,{style:{textAlign:"center"},children:C("CourseProgram.CourseRated")})}))]})},G=({course:e})=>{const d=E();return t.jsx(Se,{children:t.jsx(ue.NewCourseCard,{mobile:U,id:e.id,image:t.jsx(q,{to:`/course/${e.id}`,children:e.image_path?t.jsx(pe.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):t.jsx(xe,{})}),title:t.jsx(q,{to:`/courses/${e.id}`,className:"title",children:t.jsx(L.Title,{level:4,as:"h2",children:e.title})}),categories:t.jsx(be,{categories:e.categories,onCategoryClick:r=>{d.push(`/courses/?categories[]=${r}`)}}),actions:e.courseData&&t.jsx(Oe,{courseData:e.courseData,courseProgress:e.progress||0}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},Ne=k.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;

    a {
      text-decoration: none;
    }
  }
`,Ee=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5}; */
  padding: ${U?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;
  text-align: center;
  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,Le=k.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,O=({filter:e=S.ALL})=>{var l,h;const{fetchMyAuthoredCourses:d,myAuthoredCourses:r,fetchPaginatedProgress:c,paginatedProgress:a}=i.useContext(V.EscolaLMSContext),[x,b]=i.useState([]),y=E(),{t:u}=R(),{setQueryParam:j}=X(),{search:C}=K(),p=new URLSearchParams(C),f=p.get("page"),v=p.get("status"),g=i.useMemo(()=>{var o,m;return e===S.AUTHORED?(o=r.list)==null?void 0:o.meta:(m=a.list)==null?void 0:m.meta},[e,(l=r.list)==null?void 0:l.meta,(h=a.list)==null?void 0:h.meta]),P=i.useCallback(o=>{let m="";switch(o){case 1:case 5:break;case 2:m="started";break;case 4:m="finished";break}return m},[]);i.useEffect(()=>{c({page:f?parseInt(f):1,per_page:8,status:P(Number(v))}),(e===S.ALL||e===S.AUTHORED)&&d()},[c,e,d,f,v,P]);const n=i.useMemo(()=>{var o;return(((o=a.list)==null?void 0:o.data)||[]).reduce((m,w)=>({...m,[w.course.id?w.course.id:-1]:Math.round((w.progress||[]).reduce((M,A)=>A.status===1?M+1:M,0)/w.progress.length*100)}),{})},[a]),s=i.useCallback(o=>o.map(m=>({...m.course,courseData:m,progress:n[m.course.id?m.course.id:-1]})),[n]);return i.useEffect(()=>{var o,m,w,M;e!==S.AUTHORED?b(s(((o=a.list)==null?void 0:o.data)||[])):e===S.AUTHORED?b(((m=r.list)==null?void 0:m.data)||[]):b([...s(((w=a.list)==null?void 0:w.data)||[]),...((M=r.list)==null?void 0:M.data)||[]])},[e,a,r,s]),t.jsxs(Ne,{children:[x.length===0&&!a.loading&&!r.loading&&t.jsxs(Ee,{children:[t.jsx(L.Title,{level:3,children:u("MyProfilePage.EmptyCoursesTitle")}),t.jsx(B.Text,{className:"small-text",children:u("MyProfilePage.EmptyCoursesText")}),t.jsx(me,{children:t.jsx(N.Button,{onClick:()=>y.push(fe.courses),mode:"secondary",children:u("MyProfilePage.EmptyCoursesBtnText")})})]}),U?t.jsxs(_e,{children:[a.loading&&r.loading&&Array.from({length:8}).map((o,m)=>t.jsx(H,{className:"single-slide",children:t.jsx(z,{})},`skeleton-card-${m}`)),(!a.loading||!r.loading)&&x&&x.map(o=>t.jsx(H,{className:"single-slide",children:t.jsx(G,{course:o})},o.id))]}):t.jsxs(t.Fragment,{children:[t.jsx($.Row,{children:a.loading||r.loading?Array.from({length:8}).map((o,m)=>t.jsx($.Col,{md:3,children:t.jsx(z,{})},`skeleton-card-${m}`)):x.map(o=>t.jsx($.Col,{md:3,children:t.jsx(G,{course:o})},o.id))}),t.jsx(Le,{children:t.jsx(we,{total:(g==null?void 0:g.total)||0,perPage:Number((g==null?void 0:g.per_page)||0),currentPage:Number((g==null?void 0:g.current_page)||1),onPage:o=>{j("page",`${o}`),window==null||window.scrollTo(0,0)}})})]})]})},Ie=()=>{const{user:e}=i.useContext(V.EscolaLMSContext),d=i.useMemo(()=>{var c,a;return!!((a=(c=e.value)==null?void 0:c.roles)!=null&&a.includes("tutor"))},[e]),r=i.useMemo(()=>{var c,a;return!!((a=(c=e.value)==null?void 0:c.roles)!=null&&a.includes("student"))},[e]);return{isTutor:d,isStudent:r}};var S=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(S||{});const $e=k.section`
  background-color: ${({theme:e})=>e.gray4};
  .courses-wrapper {
    padding-top: 100px;

    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
      min-height: fit-content;
    }
  }
`,Fe=()=>{const{t:e}=R(),{isTutor:d}=Ie(),{query:r,setQueryParam:c}=X(),a={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:t.jsx(O,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:t.jsx(O,{filter:"inProgress"})},{label:e("MyProfilePage.Finished"),key:4,component:t.jsx(O,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:t.jsx(O,{filter:"authored"}),hidden:!d}],defaultActiveKey:Number(r.get("status")||1)};return t.jsx(ge,{children:t.jsx($e,{children:t.jsx(he,{children:t.jsx("div",{className:"courses-wrapper",children:t.jsx(Y.Tabs,{onClick:x=>{c("status",String(x)),c("page","1")},tabs:a.tabs,defaultActiveKey:a.defaultActiveKey})})})})})},We=Object.freeze(Object.defineProperty({__proto__:null,CourseStatus:S,default:Fe},Symbol.toStringTag,{value:"Module"}));export{S as C,We as i,X as u};
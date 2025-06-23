import{e as K,b as E,a2 as te,a3 as Q,bb as ne,j as t,q as S,D,a as R,w as G,T as L,o as B,ao as se,p as N,aq as re,bc as ae,z as oe,bd as ie,U as V,be as le,bf as ce,bg as de,l as ue,i as pe,g as F,L as q,h as me,c as fe,f as ge,J as $,k as he,C as xe}from"./index-B2DLdQWL.js";import{c as _}from"./katex-D1m830yy.js";import{r as l}from"./sentry-DZqhWugq.js";import{a as be,b as ye,C as z}from"./CourseCard-C3sEHsXB.js";import{R as je,u as Ce}from"./useRoles-CJer6dHx.js";import{Q as ve}from"./questionnaire-CXWDgbJ4.js";import{a as Pe}from"./questionnaires-DhtQoaqC.js";import{u as we}from"./useDownloadCertificate-JyHKKXSX.js";import{q as _e}from"./base-Bd27snqx.js";import{P as Te}from"./index-8pUc590M.js";import{S as ke}from"./swiper-C3F57q8-.js";import{S as H}from"./swiper-CphuuvCl.js";const J=()=>{const{search:e,pathname:p}=K(),r=E(),c=l.useMemo(()=>new URLSearchParams(e),[e]),i=l.useCallback(u=>new URLSearchParams(e).get(u),[e]),x=l.useCallback(u=>new URLSearchParams(e).getAll(u),[e]),b=l.useCallback((u,f)=>{!f||f===""?c.delete(u):c.set(u,f),r.push({pathname:p,search:c.toString()})},[r,p,c]),y=l.useCallback(u=>{const f=new URLSearchParams;return Object.entries(u).forEach(([v,g])=>{Array.isArray(g)?g.forEach(P=>{f.append(`${v}`,P)}):f.append(v,g)}),f.toString()},[]),d=l.useCallback(u=>{r.push({pathname:p,search:u?y(u):void 0})},[r,y,p]),j=l.useCallback((u,f)=>{c.delete(u),f.forEach(v=>{c.append(u,`${v}`)}),r.push({pathname:p,search:c.toString()})},[r,p,c]),C=l.useMemo(()=>_e.parse(e),[e]);return{query:c,getQueryValueByName:i,getAllQueryValueByName:x,setQueryParam:b,setPathname:d,setQueryArrayParam:j,paramsToObject:C,objectToParam:y}};var X={};(function(e){var p=_&&_.__makeTemplateObject||function(s,n){return Object.defineProperty?Object.defineProperty(s,"raw",{value:n}):s.raw=n,s},r=_&&_.__assign||function(){return r=Object.assign||function(s){for(var n,o=1,h=arguments.length;o<h;o++){n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=n[a])}return s},r.apply(this,arguments)},c=_&&_.__createBinding||(Object.create?function(s,n,o,h){h===void 0&&(h=o);var a=Object.getOwnPropertyDescriptor(n,o);(!a||("get"in a?!n.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return n[o]}}),Object.defineProperty(s,h,a)}:function(s,n,o,h){h===void 0&&(h=o),s[h]=n[o]}),i=_&&_.__setModuleDefault||(Object.create?function(s,n){Object.defineProperty(s,"default",{enumerable:!0,value:n})}:function(s,n){s.default=n}),x=_&&_.__importStar||function(s){if(s&&s.__esModule)return s;var n={};if(s!=null)for(var o in s)o!=="default"&&Object.prototype.hasOwnProperty.call(s,o)&&c(n,s,o);return i(n,s),n};Object.defineProperty(e,"__esModule",{value:!0}),e.Tabs=void 0;var b=t,y=x(l),d=x(te),j=ne,C=Q,u=Q,f=(0,d.default)("div")(g||(g=p([`
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
`])),function(s){var n=s.theme;return(0,C.getStylesBasedOnTheme)(n.mode,n.black,n.white)},function(s){var n=s.theme;return n.cardRadius},function(s){var n=s.theme;return(0,j.getFontFromTheme)(n).fontFamily},function(s){var n=s.theme;return(0,C.getStylesBasedOnTheme)(n.mode,n.white,n.gray1)},function(s){var n=s.theme;return n.buttonRadius},function(s){var n=s.theme;return n.primaryColor},function(s){var n=s.theme;return n.white},function(s){var n=s.theme;return n.buttonRadius}),v=function(s){var n=s.tabs,o=n===void 0?[]:n,h=s.defaultActiveKey,a=h===void 0?o[0].key:h,m=s.onClick,w=s.className,M=w===void 0?"":w,O=y.useState(a),I=O[0],ee=O[1],U=o&&o.find(function(T){return T.key===I});return(0,b.jsxs)(f,r({className:"wellms-component ".concat(M)},{children:[(0,b.jsx)("div",r({className:"tabs-menu"},{children:(0,b.jsx)("div",r({className:"tabs-menu-inner"},{children:o.map(function(T){return T.hidden?null:(0,b.jsx)("button",r({type:"button",className:"tab-menu-btn ".concat(I===T.key?"active":""),id:(0,u.getUniqueId)("tab-menu-".concat(T.key)),onClick:function(){ee(T.key),m&&m(T.key)}},{children:T.label}),T.key)})}))})),(0,b.jsx)("div",r({id:"tabpanel-".concat(I),className:"tabs-panel"},{children:(0,b.jsx)(y.Fragment,{children:U&&U.component})}))]}))};e.Tabs=v,e.default=(0,d.withTheme)((0,d.default)(e.Tabs)(P||(P=p([""],[""]))));var g,P})(X);const Se=S.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`,Me=({children:e})=>t.jsx(Se,{children:e}),Re=({courseData:e,visible:p,onClose:r})=>{const{sendProgress:c}=l.useContext(D.EscolaLMSContext),{t:i}=R(),{push:x}=E(),b=l.useCallback(async()=>{await c(e.course.id,e.progress.map(({topic_id:y})=>({topic_id:y,status:0}))),x(`/course/${e.course.id}`)},[e.course.id,e.progress,c,x]);return t.jsx(G.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:p,onClose:r,children:t.jsxs(t.Fragment,{children:[t.jsx(L.Title,{level:4,children:i("ResetProgressModal.Continue")}),t.jsxs(B.Text,{children:[" ",i("ResetProgressModal.RestartCourse")]}),t.jsxs(se,{$gap:16,children:[t.jsx(N.Button,{mode:"primary",onClick:b,children:i("ResetProgressModal.WantContinue")}),t.jsx(N.Button,{mode:"primary",onClick:r,children:i("ResetProgressModal.Cancel")})]})]})})},Oe=S(re)`
  gap: 6px;
  margin: 0;
  width: 100%;
  p {
    margin: 0;
  }
`,Ae=({courseId:e})=>{const{fetchCertificates:p}=l.useContext(D.EscolaLMSContext),{downloadCertificate:r,loadingId:c}=we(),{t:i}=R(),[x,b]=l.useState(!1),y=l.useCallback(async()=>{try{const d=await p({assignable_type:ae.CertificateAssignableTypes.Course,assignable_id:Number(e)});if(d&&d.success){const j=d.data||[];if(j.length===0){b(!0);return}j.forEach(({id:C,title:u})=>{r(C,u)})}}catch(d){oe(`${i("UnexpectedError")}`,"error"),console.log(d)}},[e,r,i,p]);return t.jsx(Y,{onClick:y,children:!x&&t.jsxs(t.Fragment,{children:[t.jsx(ie,{})," ",i("MyProfilePage.DownloadCertificate")," ",c>-1&&t.jsx(V,{width:"10px",height:"10px"})]})})},Y=S.button`
  all: unset;
  text-decoration: underline;
  font-size: 13px;
  font-family: ${({theme:e})=>e.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`,Ne=S.div`
  margin-top: 5px;
`,Ee=({courseData:e,courseProgress:p})=>{const[r,c]=l.useState(void 0),[i,x]=l.useState(!1),{fetchQuestionnaires:b,fetchQuestionnaire:y}=l.useContext(D.EscolaLMSContext),[d,j]=l.useState({show:!1,step:0,loading:!1}),{t:C}=R(),u={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},f=l.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),v=f?f.getTime()<Date.now():!1,g=l.useMemo(()=>f?le(f):null,[f]),[P,s]=l.useState([]),n=l.useCallback(()=>{if(c(void 0),j(o=>({...o,show:!1})),d.step<P.length-1){j(h=>({...h,step:h.step+1}));const o=setTimeout(()=>{j(h=>({...h,show:!0}))},500);return()=>clearTimeout(o)}},[P,d.step]);return l.useEffect(()=>{r&&Pe({courseId:r,fetchQuestionnaire:y,fetchQuestionnaires:b,onSucces:o=>{s(o)},onFinish:()=>j(o=>({...o,loading:!1}))})},[r]),t.jsxs(Oe,{children:[u.isDone&&t.jsx(Ae,{courseId:e.course.id}),p===100&&t.jsxs(t.Fragment,{children:[t.jsxs(Y,{onClick:()=>{c(e.course.id),j(o=>({...o,show:!0,loading:!0}))},children:[t.jsx(ce,{})," ",C("MyProfilePage.RateCourse")," ",d.loading&&t.jsx(V,{width:"10px",height:"10px"})]}),t.jsx(Ne,{children:!v&&u.isDone&&t.jsx(N.Button,{mode:"secondary",onClick:()=>x(!0),children:C("MyProfilePage.ResetCourseProgress")})})]}),!!v&&g!==null&&g[0]<0&&t.jsxs(B.Text,{size:"12",children:[C("MyProfilePage.AccessCourseExpired")," ",de.format(g[0],g[1])]}),t.jsx(Re,{courseData:e,visible:i,onClose:()=>x(!1)}),d.show&&r&&!d.loading&&(P.length?t.jsx(t.Fragment,{children:t.jsx(je,{entityModel:ve.COURSE,entityId:r,visible:d.show,onClose:n,questionnaire:P[d.step]})}):t.jsx(G.Modal,{onClose:n,visible:d.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(L.Title,{style:{textAlign:"center"},children:C("CourseProgram.CourseRated")})}))]})},W=({course:e})=>{var r,c;const p=E();return t.jsx(Me,{children:t.jsx(ue.NewCourseCard,{mobile:F,id:e.id,disabled:((r=e==null?void 0:e.courseData)==null?void 0:r.end_date)&&pe(new Date((c=e==null?void 0:e.courseData)==null?void 0:c.end_date)),image:t.jsx(q,{to:`/course/${e.id}`,children:e.image_path?t.jsx(me.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):t.jsx(ye,{})}),title:t.jsx(q,{to:`/courses/${e.id}`,className:"title",children:t.jsx(L.Title,{level:4,as:"h2",children:e.title})}),categories:t.jsx(be,{categories:e.categories,onCategoryClick:i=>{p.push(`/courses/?categories[]=${i}`)}}),actions:e.courseData&&t.jsx(Ee,{courseData:e.courseData,courseProgress:e.progress||0}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},Le=S.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;

    a {
      text-decoration: none;
    }
  }
`,Ie=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5}; */
  padding: ${F?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;
  text-align: center;
  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,$e=S.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,A=({filter:e=k.ALL})=>{var o,h;const{fetchMyAuthoredCourses:p,myAuthoredCourses:r,fetchPaginatedProgress:c,paginatedProgress:i}=l.useContext(fe.EscolaLMSContext),[x,b]=l.useState([]),y=E(),{t:d}=R(),{setQueryParam:j}=J(),{search:C}=K(),u=new URLSearchParams(C),f=u.get("page"),v=u.get("status"),g=l.useMemo(()=>{var a,m;return e===k.AUTHORED?(a=r.list)==null?void 0:a.meta:(m=i.list)==null?void 0:m.meta},[e,(o=r.list)==null?void 0:o.meta,(h=i.list)==null?void 0:h.meta]),P=l.useCallback(a=>{let m="";switch(a){case 1:case 5:break;case 2:m="started";break;case 4:m="finished";break}return m},[]);l.useEffect(()=>{c({page:f?parseInt(f):1,per_page:8,status:P(Number(v))}),(e===k.ALL||e===k.AUTHORED)&&p()},[c,e,p,f,v,P]);const s=l.useMemo(()=>{var a;return(((a=i.list)==null?void 0:a.data)||[]).reduce((m,w)=>({...m,[w.course.id?w.course.id:-1]:Math.round((w.progress||[]).reduce((M,O)=>O.status===1?M+1:M,0)/w.progress.length*100)}),{})},[i]),n=l.useCallback(a=>a.map(m=>({...m.course,courseData:m,progress:s[m.course.id?m.course.id:-1]})),[s]);return l.useEffect(()=>{var a,m,w,M;e!==k.AUTHORED?b(n(((a=i.list)==null?void 0:a.data)||[])):e===k.AUTHORED?b(((m=r.list)==null?void 0:m.data)||[]):b([...n(((w=i.list)==null?void 0:w.data)||[]),...((M=r.list)==null?void 0:M.data)||[]])},[e,i,r,n]),t.jsxs(Le,{children:[x.length===0&&!i.loading&&!r.loading&&t.jsxs(Ie,{children:[t.jsx(L.Title,{level:3,children:d("MyProfilePage.EmptyCoursesTitle")}),t.jsx(B.Text,{className:"small-text",children:d("MyProfilePage.EmptyCoursesText")}),t.jsx(N.Button,{onClick:()=>y.push(ge.courses),mode:"secondary",children:d("MyProfilePage.EmptyCoursesBtnText")})]}),F?t.jsxs(ke,{children:[i.loading&&r.loading&&Array.from({length:8}).map((a,m)=>t.jsx(H,{className:"single-slide",children:t.jsx(z,{})},`skeleton-card-${m}`)),(!i.loading||!r.loading)&&x&&x.map(a=>t.jsx(H,{className:"single-slide",children:t.jsx(W,{course:a})},a.id))]}):t.jsxs(t.Fragment,{children:[t.jsx($.Row,{children:i.loading||r.loading?Array.from({length:8}).map((a,m)=>t.jsx($.Col,{md:3,children:t.jsx(z,{})},`skeleton-card-${m}`)):x.map(a=>t.jsx($.Col,{md:3,children:t.jsx(W,{course:a})},a.id))}),t.jsx($e,{children:t.jsx(Te,{total:(g==null?void 0:g.total)||0,perPage:Number((g==null?void 0:g.per_page)||0),currentPage:Number((g==null?void 0:g.current_page)||1),onPage:a=>{j("page",`${a}`),window==null||window.scrollTo(0,0)}})})]})]})};var k=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(k||{});const Z=S.section`
  background-color: ${({theme:e})=>e.gray4};
  .courses-wrapper {
    padding-top: 100px;

    min-height: calc(100vh - 500px);
    height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
      min-height: fit-content;
    }
  }
`,De=()=>{const{t:e}=R(),{isTutor:p}=Ce(),{query:r,setQueryParam:c}=J(),i={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:t.jsx(A,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:t.jsx(A,{filter:"inProgress"})},{label:e("MyProfilePage.Finished"),key:4,component:t.jsx(A,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:t.jsx(A,{filter:"authored"}),hidden:!p}],defaultActiveKey:Number(r.get("status")||1)};return t.jsx(he,{children:t.jsx(Z,{children:t.jsx(xe,{children:t.jsx("div",{className:"courses-wrapper",children:t.jsx(X.Tabs,{onClick:x=>{c("status",String(x)),c("page","1")},tabs:i.tabs,defaultActiveKey:i.defaultActiveKey})})})})})},Xe=Object.freeze(Object.defineProperty({__proto__:null,Content:Z,CourseStatus:k,default:De},Symbol.toStringTag,{value:"Module"}));export{k as C,X as T,Z as a,Xe as i,J as u};
//# sourceMappingURL=index-YOn6Zurc.js.map

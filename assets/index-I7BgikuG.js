import{e as B,b as N,j as s,q as b,D as L,a as T,w as F,T as _,o as I,ao as K,p as E,aq as V,bh as J,z as X,bi as Y,U as q,bj as Z,bk as ee,bl as se,l as te,i as ae,g as $,L as O,h as re,c as oe,f as ne,J as v,k as ie,C as le}from"./index-C8RYle4a.js";import{T as ce}from"./Tabs-BBLmmjri.js";import{r as a}from"./sentry-DZqhWugq.js";import{C as de}from"./index-BTHE13-u.js";import{a as ue,C as U}from"./CourseCard-H03ZoLrr.js";import{R as pe,u as ge}from"./useRoles-BTPJFye5.js";import{Q as me}from"./questionnaire-CXWDgbJ4.js";import{a as he}from"./questionnaires-Dk2u0aZr.js";import{u as xe}from"./useDownloadCertificate-naI9s69Q.js";import{q as fe}from"./base-Bd27snqx.js";import{P as Ce}from"./index-BfmoqrZO.js";import{S as ye}from"./swiper-Cjr7D3Sq.js";import{S as D}from"./swiper-CphuuvCl.js";const z=()=>{const{search:e,pathname:l}=B(),t=N(),o=a.useMemo(()=>new URLSearchParams(e),[e]),r=a.useCallback(n=>new URLSearchParams(e).get(n),[e]),g=a.useCallback(n=>new URLSearchParams(e).getAll(n),[e]),x=a.useCallback((n,u)=>{!u||u===""?o.delete(n):o.set(n,u),t.push({pathname:l,search:o.toString()})},[t,l,o]),f=a.useCallback(n=>{const u=new URLSearchParams;return Object.entries(n).forEach(([y,p])=>{Array.isArray(p)?p.forEach(j=>{u.append(`${y}`,j)}):u.append(y,p)}),u.toString()},[]),c=a.useCallback(n=>{t.push({pathname:l,search:n?f(n):void 0})},[t,f,l]),m=a.useCallback((n,u)=>{o.delete(n),u.forEach(y=>{o.append(n,`${y}`)}),t.push({pathname:l,search:o.toString()})},[t,l,o]),C=a.useMemo(()=>fe.parse(e),[e]);return{query:o,getQueryValueByName:r,getAllQueryValueByName:g,setQueryParam:x,setPathname:c,setQueryArrayParam:m,paramsToObject:C,objectToParam:f}},je=b.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`,Pe=({children:e})=>s.jsx(je,{children:e}),be=({courseData:e,visible:l,onClose:t})=>{const{sendProgress:o}=a.useContext(L.EscolaLMSContext),{t:r}=T(),{push:g}=N(),x=a.useCallback(async()=>{await o(e.course.id,e.progress.map(({topic_id:f})=>({topic_id:f,status:0}))),g(`/course/${e.course.id}`)},[e.course.id,e.progress,o,g]);return s.jsx(F.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:l,onClose:t,children:s.jsxs(s.Fragment,{children:[s.jsx(_.Title,{level:4,children:r("ResetProgressModal.Continue")}),s.jsxs(I.Text,{children:[" ",r("ResetProgressModal.RestartCourse")]}),s.jsxs(K,{$gap:16,children:[s.jsx(E.Button,{mode:"primary",onClick:x,children:r("ResetProgressModal.WantContinue")}),s.jsx(E.Button,{mode:"primary",onClick:t,children:r("ResetProgressModal.Cancel")})]})]})})},we=b(V)`
  gap: 6px;
  margin: 0;
  width: 100%;
  p {
    margin: 0;
  }
`,Se=({courseId:e})=>{const{fetchCertificates:l}=a.useContext(L.EscolaLMSContext),{downloadCertificate:t,loadingId:o}=xe(),{t:r}=T(),[g,x]=a.useState(!1),f=a.useCallback(async()=>{try{const c=await l({assignable_type:J.CertificateAssignableTypes.Course,assignable_id:Number(e)});if(c&&c.success){const m=c.data||[];if(m.length===0){x(!0);return}m.forEach(({id:C,title:n})=>{t(C,n)})}}catch(c){X(`${r("UnexpectedError")}`,"error"),console.log(c)}},[e,t,r,l]);return s.jsx(H,{onClick:f,children:!g&&s.jsxs(s.Fragment,{children:[s.jsx(Y,{})," ",r("MyProfilePage.DownloadCertificate")," ",o>-1&&s.jsx(q,{width:"10px",height:"10px"})]})})},H=b.button`
  all: unset;
  text-decoration: underline;
  font-size: 13px;
  font-family: ${({theme:e})=>e.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`,Me=b.div`
  margin-top: 5px;
`,Re=({courseData:e,courseProgress:l})=>{const[t,o]=a.useState(void 0),[r,g]=a.useState(!1),{fetchQuestionnaires:x,fetchQuestionnaire:f}=a.useContext(L.EscolaLMSContext),[c,m]=a.useState({show:!1,step:0,loading:!1}),{t:C}=T(),n={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},u=a.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),y=u?u.getTime()<Date.now():!1,p=a.useMemo(()=>u?Z(u):null,[u]),[j,k]=a.useState([]),M=a.useCallback(()=>{if(o(void 0),m(h=>({...h,show:!1})),c.step<j.length-1){m(w=>({...w,step:w.step+1}));const h=setTimeout(()=>{m(w=>({...w,show:!0}))},500);return()=>clearTimeout(h)}},[j,c.step]);return a.useEffect(()=>{t&&he({courseId:t,fetchQuestionnaire:f,fetchQuestionnaires:x,onSucces:h=>{k(h)},onFinish:()=>m(h=>({...h,loading:!1}))})},[t]),s.jsxs(we,{children:[n.isDone&&s.jsx(Se,{courseId:e.course.id}),l===100&&s.jsxs(s.Fragment,{children:[s.jsxs(H,{onClick:()=>{o(e.course.id),m(h=>({...h,show:!0,loading:!0}))},children:[s.jsx(ee,{})," ",C("MyProfilePage.RateCourse")," ",c.loading&&s.jsx(q,{width:"10px",height:"10px"})]}),s.jsx(Me,{children:!y&&n.isDone&&s.jsx(E.Button,{mode:"secondary",onClick:()=>g(!0),children:C("MyProfilePage.ResetCourseProgress")})})]}),!!y&&p!==null&&p[0]<0&&s.jsxs(I.Text,{size:"12",children:[C("MyProfilePage.AccessCourseExpired")," ",se.format(p[0],p[1])]}),s.jsx(be,{courseData:e,visible:r,onClose:()=>g(!1)}),c.show&&t&&!c.loading&&(j.length?s.jsx(s.Fragment,{children:s.jsx(pe,{entityModel:me.COURSE,entityId:t,visible:c.show,onClose:M,questionnaire:j[c.step]})}):s.jsx(F.Modal,{onClose:M,visible:c.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:s.jsx(_.Title,{style:{textAlign:"center"},children:C("CourseProgram.CourseRated")})}))]})},Q=({course:e})=>{var t,o;const l=N();return s.jsx(Pe,{children:s.jsx(te.NewCourseCard,{mobile:$,id:e.id,disabled:((t=e==null?void 0:e.courseData)==null?void 0:t.end_date)&&ae(new Date((o=e==null?void 0:e.courseData)==null?void 0:o.end_date)),image:s.jsx(O,{to:`/course/${e.id}`,children:e.image_path?s.jsx(re.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):s.jsx(de,{})}),title:s.jsx(O,{to:`/courses/${e.id}`,className:"title",children:s.jsx(_.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(ue,{categories:e.categories,onCategoryClick:r=>{l.push(`/courses/?categories[]=${r}`)}}),actions:e.courseData&&s.jsx(Re,{courseData:e.courseData,courseProgress:e.progress||0}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},Te=b.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;

    a {
      text-decoration: none;
    }
  }
`,ke=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5}; */
  padding: ${$?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;
  text-align: center;
  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,Ae=b.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,A=({filter:e=P.ALL})=>{var h,w;const{fetchMyAuthoredCourses:l,myAuthoredCourses:t,fetchPaginatedProgress:o,paginatedProgress:r}=a.useContext(oe.EscolaLMSContext),[g,x]=a.useState([]),f=N(),{t:c}=T(),{setQueryParam:m}=z(),{search:C}=B(),n=new URLSearchParams(C),u=n.get("page"),y=n.get("status"),p=a.useMemo(()=>{var i,d;return e===P.AUTHORED?(i=t.list)==null?void 0:i.meta:(d=r.list)==null?void 0:d.meta},[e,(h=t.list)==null?void 0:h.meta,(w=r.list)==null?void 0:w.meta]),j=a.useCallback(i=>{let d="";switch(i){case 1:case 5:break;case 2:d="started";break;case 4:d="finished";break}return d},[]);a.useEffect(()=>{o({page:u?parseInt(u):1,per_page:8,status:j(Number(y))}),(e===P.ALL||e===P.AUTHORED)&&l()},[o,e,l,u,y,j]);const k=a.useMemo(()=>{var i;return(((i=r.list)==null?void 0:i.data)||[]).reduce((d,S)=>({...d,[S.course.id?S.course.id:-1]:Math.round((S.progress||[]).reduce((R,G)=>G.status===1?R+1:R,0)/S.progress.length*100)}),{})},[r]),M=a.useCallback(i=>i.map(d=>({...d.course,courseData:d,progress:k[d.course.id?d.course.id:-1]})),[k]);return a.useEffect(()=>{var i,d,S,R;e!==P.AUTHORED?x(M(((i=r.list)==null?void 0:i.data)||[])):e===P.AUTHORED?x(((d=t.list)==null?void 0:d.data)||[]):x([...M(((S=r.list)==null?void 0:S.data)||[]),...((R=t.list)==null?void 0:R.data)||[]])},[e,r,t,M]),s.jsxs(Te,{children:[g.length===0&&!r.loading&&!t.loading&&s.jsxs(ke,{children:[s.jsx(_.Title,{level:3,children:c("MyProfilePage.EmptyCoursesTitle")}),s.jsx(I.Text,{className:"small-text",children:c("MyProfilePage.EmptyCoursesText")}),s.jsx(E.Button,{onClick:()=>f.push(ne.courses),mode:"secondary",children:c("MyProfilePage.EmptyCoursesBtnText")})]}),$?s.jsxs(ye,{children:[r.loading&&t.loading&&Array.from({length:8}).map((i,d)=>s.jsx(D,{className:"single-slide",children:s.jsx(U,{})},`skeleton-card-${d}`)),(!r.loading||!t.loading)&&g&&g.map(i=>s.jsx(D,{className:"single-slide",children:s.jsx(Q,{course:i})},i.id))]}):s.jsxs(s.Fragment,{children:[s.jsx(v.Row,{children:r.loading||t.loading?Array.from({length:8}).map((i,d)=>s.jsx(v.Col,{md:3,children:s.jsx(U,{})},`skeleton-card-${d}`)):g.map(i=>s.jsx(v.Col,{md:3,children:s.jsx(Q,{course:i})},i.id))}),s.jsx(Ae,{children:s.jsx(Ce,{total:(p==null?void 0:p.total)||0,perPage:Number((p==null?void 0:p.per_page)||0),currentPage:Number((p==null?void 0:p.current_page)||1),onPage:i=>{m("page",`${i}`),window==null||window.scrollTo(0,0)}})})]})]})};var P=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(P||{});const W=b.section`
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
`,Ee=()=>{const{t:e}=T(),{isTutor:l}=ge(),{query:t,setQueryParam:o}=z(),r={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:s.jsx(A,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:s.jsx(A,{filter:"inProgress"})},{label:e("MyProfilePage.Finished"),key:4,component:s.jsx(A,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:s.jsx(A,{filter:"authored"}),hidden:!l}],defaultActiveKey:Number(t.get("status")||1)};return s.jsx(ie,{children:s.jsx(W,{children:s.jsx(le,{children:s.jsx("div",{className:"courses-wrapper",children:s.jsx(ce.Tabs,{onClick:g=>{o("status",String(g)),o("page","1")},tabs:r.tabs,defaultActiveKey:r.defaultActiveKey})})})})})},ze=Object.freeze(Object.defineProperty({__proto__:null,Content:W,CourseStatus:P,default:Ee},Symbol.toStringTag,{value:"Module"}));export{P as C,W as a,ze as i,z as u};
//# sourceMappingURL=index-I7BgikuG.js.map

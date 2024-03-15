import{r as a,D as L,f as k,i as _,j as s,x as Q,T as A,s as I,ag as W,v,q as y,ai as G,A as K,aY as Y,a0 as U,aZ as Z,a_ as J,a$ as V,m as X,n as $,L as F,h as ee,k as se,l as te,w as N,o as oe,C as re}from"./index-BCUQyqgJ.js";import{T as ae}from"./Tabs-CcZ96ecJ.js";import{C as ie}from"./index-eQjFQKsi.js";import{R as ne}from"./ResponsiveImage-BEYjcc29.js";import{C as le}from"./index-umsRqGuf.js";import{C as de}from"./index-Bte0mGZh.js";import{R as ce}from"./index-B_zLrZvy.js";import{b as me,Q as ue}from"./questionnaires-sus-r1ow.js";import{u as pe}from"./useDownloadCertificate-DTbQKDsR.js";import{u as ge}from"./useRoles-DWF1L03f.js";import{u as H}from"./useSearchParams-vbkPOI5c.js";import{P as xe}from"./index-C2nSJp8r.js";import{S as he}from"./swiper-BklnkZNd.js";import{S as B}from"./swiper-react-skRm1w3h.js";import{C as D}from"./CourseCard-yw__UstK.js";import"./base-C7euzKDi.js";import"./a11y-CoPXPIIH.js";import"./index-woZ_YaJw.js";const fe=({courseData:e,visible:d,onClose:t})=>{const{sendProgress:c}=a.useContext(L.EscolaLMSContext),{t:o}=k(),{push:n}=_(),g=a.useCallback(async()=>{await c(e.course.id,e.progress.map(({topic_id:p})=>({topic_id:p,status:0}))),n(`/course/${e.course.id}`)},[e.course.id,e.progress,c,n]);return s.jsx(Q.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:d,onClose:t,children:s.jsxs(s.Fragment,{children:[s.jsx(A.Title,{level:4,children:o("ResetProgressModal.Continue")}),s.jsxs(I.Text,{children:[" ",o("ResetProgressModal.RestartCourse")]}),s.jsxs(W,{$gap:16,children:[s.jsx(v.Button,{mode:"primary",onClick:g,children:o("ResetProgressModal.WantContinue")}),s.jsx(v.Button,{mode:"primary",onClick:t,children:o("ResetProgressModal.Cancel")})]})]})})},Ce=y(G)`
  gap: 6px;
  margin: 0;
  width: 100%;
  p {
    margin: 0;
  }
`,je=({courseId:e})=>{const{fetchCertificate:d}=a.useContext(L.EscolaLMSContext),{downloadCertificate:t,loadingId:c}=pe(),{t:o}=k(),n=a.useCallback(async()=>{var g;try{const p=await d(e);p.success&&t(p.data.id,(g=p.data)==null?void 0:g.title)}catch(p){K.error(`${o("UnexpectedError")}`),console.log(p)}},[e,t,d,o]);return s.jsxs(z,{onClick:n,children:[s.jsx(Y,{})," ",o("MyProfilePage.DownloadCertificate")," ",c>-1&&s.jsx(U,{width:"10px",height:"10px"})]})},z=y.button`
  all: unset;
  text-decoration: underline;
  font-size: 13px;
  font-family: ${({theme:e})=>e.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`,Pe=y.div`
  margin-top: 5px;
`,ye=({courseData:e,courseProgress:d})=>{const[t,c]=a.useState(void 0),[o,n]=a.useState(!1),{fetchQuestionnaires:g,fetchQuestionnaire:p}=a.useContext(L.EscolaLMSContext),[m,h]=a.useState({show:!1,step:0,loading:!1}),{t:w}=k(),R={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},x=a.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),M=x?x.getTime()<Date.now():!1,l=a.useMemo(()=>x?Z(x):null,[x]),[f,S]=a.useState([]),b=a.useCallback(()=>{if(c(void 0),h(u=>({...u,show:!1})),m.step<f.length-1){h(C=>({...C,step:C.step+1}));const u=setTimeout(()=>{h(C=>({...C,show:!0}))},500);return()=>clearTimeout(u)}},[f,m.step]);return a.useEffect(()=>{t&&me({courseId:t,fetchQuestionnaire:p,fetchQuestionnaires:g,onSucces:u=>{S(u)},onFinish:()=>h(u=>({...u,loading:!1}))})},[t]),s.jsxs(Ce,{children:[R.isDone&&s.jsx(je,{courseId:e.course.id}),d===100&&s.jsxs(s.Fragment,{children:[s.jsxs(z,{onClick:()=>{c(e.course.id),h(u=>({...u,show:!0,loading:!0}))},children:[s.jsx(J,{})," ",w("MyProfilePage.RateCourse")," ",m.loading&&s.jsx(U,{width:"10px",height:"10px"})]}),s.jsx(Pe,{children:!M&&R.isDone&&s.jsx(v.Button,{mode:"secondary",onClick:()=>n(!0),children:w("MyProfilePage.ResetCourseProgress")})})]}),!!M&&l!==null&&l[0]<0&&s.jsxs(I.Text,{size:"12",children:[w("MyProfilePage.AccessCourseExpired")," ",V.format(l[0],l[1])]}),s.jsx(fe,{courseData:e,visible:o,onClose:()=>n(!1)}),m.show&&t&&!m.loading&&(f.length?s.jsx(s.Fragment,{children:s.jsx(ce,{course:ue.COURSE,courseId:t,visible:m.show,onClose:b,questionnaire:f[m.step],onFinish:()=>{}})}):s.jsx(Q.Modal,{onClose:b,visible:m.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:s.jsx(A.Title,{children:w("CourseProgram.CourseRated")})}))]})},O=({course:e})=>{const d=_();return s.jsx(le,{children:s.jsx(X.NewCourseCard,{mobile:$,id:e.id,image:s.jsx(F,{to:`/course/${e.id}`,children:e.image_path?s.jsx(ne.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):s.jsx(ie,{})}),title:s.jsx(F,{to:`/courses/${e.id}`,className:"title",children:s.jsx(A.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(de,{categories:e.categories,onCategoryClick:t=>{d.push(`/courses/?categories[]=${t}`)}}),actions:e.courseData&&s.jsx(ye,{courseData:e.courseData,courseProgress:e.progress||0}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},we=y.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;

    a {
      text-decoration: none;
    }
  }
`,be=y.div`
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
`,Re=y.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,E=({filter:e=P.ALL})=>{var u,C;const{fetchMyAuthoredCourses:d,myAuthoredCourses:t,fetchPaginatedProgress:c,paginatedProgress:o}=a.useContext(ee.EscolaLMSContext),[n,g]=a.useState([]),p=_(),{t:m}=k(),{setQueryParam:h}=H(),{search:w}=se(),R=new URLSearchParams(w),x=R.get("page"),M=R.get("status"),l=a.useMemo(()=>{var r,i;return e===P.AUTHORED?(r=t.list)==null?void 0:r.meta:(i=o.list)==null?void 0:i.meta},[e,(u=t.list)==null?void 0:u.meta,(C=o.list)==null?void 0:C.meta]),f=a.useCallback(r=>{let i="";switch(r){case 1:case 5:break;case 2:i="started";break;case 4:i="finished";break}return i},[]);a.useEffect(()=>{c({page:x?parseInt(x):1,per_page:8,status:f(Number(M))}),(e===P.ALL||e===P.AUTHORED)&&d()},[c,e,d,x,M,f]);const S=a.useMemo(()=>{var r;return(((r=o.list)==null?void 0:r.data)||[]).reduce((i,j)=>({...i,[j.course.id?j.course.id:-1]:Math.round((j.progress||[]).reduce((T,q)=>q.status===1?T+1:T,0)/j.progress.length*100)}),{})},[o]),b=a.useCallback(r=>r.map(i=>({...i.course,courseData:i,progress:S[i.course.id?i.course.id:-1]})),[S]);return a.useEffect(()=>{var r,i,j,T;e!==P.AUTHORED?g(b(((r=o.list)==null?void 0:r.data)||[])):e===P.AUTHORED?g(((i=t.list)==null?void 0:i.data)||[]):g([...b(((j=o.list)==null?void 0:j.data)||[]),...((T=t.list)==null?void 0:T.data)||[]])},[e,o,t,b]),s.jsxs(we,{children:[n.length===0&&!o.loading&&!t.loading&&s.jsxs(be,{children:[s.jsx(A.Title,{level:3,children:m("MyProfilePage.EmptyCoursesTitle")}),s.jsx(I.Text,{className:"small-text",children:m("MyProfilePage.EmptyCoursesText")}),s.jsx(v.Button,{onClick:()=>p.push(te.courses),mode:"secondary",children:m("MyProfilePage.EmptyCoursesBtnText")})]}),$?s.jsxs(he,{children:[o.loading&&t.loading&&Array.from({length:8}).map((r,i)=>s.jsx(B,{className:"single-slide",children:s.jsx(D,{})},`skeleton-card-${i}`)),(!o.loading||!t.loading)&&n&&n.map(r=>s.jsx(B,{className:"single-slide",children:s.jsx(O,{course:r})},r.id))]}):s.jsxs(s.Fragment,{children:[s.jsx(N.Row,{children:o.loading||t.loading?Array.from({length:8}).map((r,i)=>s.jsx(N.Col,{md:3,children:s.jsx(D,{})},`skeleton-card-${i}`)):n.map(r=>s.jsx(N.Col,{md:3,children:s.jsx(O,{course:r})},r.id))}),s.jsx(Re,{children:s.jsx(xe,{total:(l==null?void 0:l.total)||0,perPage:Number((l==null?void 0:l.per_page)||0),currentPage:Number((l==null?void 0:l.current_page)||1),onPage:r=>{h("page",`${r}`),window==null||window.scrollTo(0,0)}})})]})]})};var P=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(P||{});const Me=y.section`
  background-color: ${({theme:e})=>e.gray4};
  .courses-wrapper {
    padding-top: 100px;

    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
`,ze=()=>{const{t:e}=k(),{isTutor:d}=ge(),{query:t,setQueryParam:c}=H(),o={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:s.jsx(E,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:s.jsx(E,{filter:"inProgress"})},{label:e("MyProfilePage.Finished"),key:4,component:s.jsx(E,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:s.jsx(E,{filter:"authored"}),hidden:!d}],defaultActiveKey:Number(t.get("status")||1)};return s.jsx(oe,{children:s.jsx(Me,{children:s.jsx(re,{children:s.jsx("div",{className:"courses-wrapper",children:s.jsx(ae.Tabs,{onClick:n=>{c("status",String(n)),c("page","1")},tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})})})})})};export{P as CourseStatus,ze as default};

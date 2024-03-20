import{r as a,A as L,f as k,i as _,j as s,x as Q,T as v,s as I,ag as W,v as A,q as P,ai as G,a_ as K,a0 as U,a$ as J,b0 as V,b1 as X,m as Y,n as $,L as F,h as Z,k as ee,l as se,w as N,o as te,C as oe}from"./index-CZsFk1zJ.js";import{T as re}from"./Tabs-gGIBWDpe.js";import{C as ae}from"./index-CYIdbcg4.js";import{R as ie}from"./ResponsiveImage-Dg78X8YI.js";import{C as ne}from"./index-DcY-PoYZ.js";import{C as le}from"./index-Drf-Jlzt.js";import{R as de}from"./index-C1PBEdlJ.js";import{b as ce,Q as me}from"./questionnaires-CqNAGS0-.js";import{u as ue}from"./useDownloadCertificate-BnoTAPH8.js";import{t as pe}from"./toast-BTDp9duJ.js";import{u as ge}from"./useRoles-Dgg5McOc.js";import{u as H}from"./useSearchParams-DFwMMUd9.js";import{P as xe}from"./index-Cn_h3-Jj.js";import{S as he}from"./swiper-DOgFw6B5.js";import{S as O}from"./swiper-react-BUZ4MU2V.js";import{C as B}from"./CourseCard-CNm-kw9I.js";import"./base-C7euzKDi.js";import"./a11y-BCBgNuzA.js";import"./index-BbjIVNI-.js";const fe=({courseData:e,visible:d,onClose:t})=>{const{sendProgress:c}=a.useContext(L.EscolaLMSContext),{t:o}=k(),{push:n}=_(),g=a.useCallback(async()=>{await c(e.course.id,e.progress.map(({topic_id:p})=>({topic_id:p,status:0}))),n(`/course/${e.course.id}`)},[e.course.id,e.progress,c,n]);return s.jsx(Q.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:d,onClose:t,children:s.jsxs(s.Fragment,{children:[s.jsx(v.Title,{level:4,children:o("ResetProgressModal.Continue")}),s.jsxs(I.Text,{children:[" ",o("ResetProgressModal.RestartCourse")]}),s.jsxs(W,{$gap:16,children:[s.jsx(A.Button,{mode:"primary",onClick:g,children:o("ResetProgressModal.WantContinue")}),s.jsx(A.Button,{mode:"primary",onClick:t,children:o("ResetProgressModal.Cancel")})]})]})})},Ce=P(G)`
  gap: 6px;
  margin: 0;
  width: 100%;
  p {
    margin: 0;
  }
`,je=({courseId:e})=>{const{fetchCertificate:d}=a.useContext(L.EscolaLMSContext),{downloadCertificate:t,loadingId:c}=ue(),{t:o}=k(),n=a.useCallback(async()=>{var g;try{const p=await d(e);p.success&&t(p.data.id,(g=p.data)==null?void 0:g.title)}catch(p){pe(`${o("UnexpectedError")}`,"error"),console.log(p)}},[e,t,d,o]);return s.jsxs(z,{onClick:n,children:[s.jsx(K,{})," ",o("MyProfilePage.DownloadCertificate")," ",c>-1&&s.jsx(U,{width:"10px",height:"10px"})]})},z=P.button`
  all: unset;
  text-decoration: underline;
  font-size: 13px;
  font-family: ${({theme:e})=>e.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`,ye=P.div`
  margin-top: 5px;
`,Pe=({courseData:e,courseProgress:d})=>{const[t,c]=a.useState(void 0),[o,n]=a.useState(!1),{fetchQuestionnaires:g,fetchQuestionnaire:p}=a.useContext(L.EscolaLMSContext),[m,h]=a.useState({show:!1,step:0,loading:!1}),{t:b}=k(),R={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},x=a.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),M=x?x.getTime()<Date.now():!1,l=a.useMemo(()=>x?J(x):null,[x]),[f,S]=a.useState([]),w=a.useCallback(()=>{if(c(void 0),h(u=>({...u,show:!1})),m.step<f.length-1){h(C=>({...C,step:C.step+1}));const u=setTimeout(()=>{h(C=>({...C,show:!0}))},500);return()=>clearTimeout(u)}},[f,m.step]);return a.useEffect(()=>{t&&ce({courseId:t,fetchQuestionnaire:p,fetchQuestionnaires:g,onSucces:u=>{S(u)},onFinish:()=>h(u=>({...u,loading:!1}))})},[t]),s.jsxs(Ce,{children:[R.isDone&&s.jsx(je,{courseId:e.course.id}),d===100&&s.jsxs(s.Fragment,{children:[s.jsxs(z,{onClick:()=>{c(e.course.id),h(u=>({...u,show:!0,loading:!0}))},children:[s.jsx(V,{})," ",b("MyProfilePage.RateCourse")," ",m.loading&&s.jsx(U,{width:"10px",height:"10px"})]}),s.jsx(ye,{children:!M&&R.isDone&&s.jsx(A.Button,{mode:"secondary",onClick:()=>n(!0),children:b("MyProfilePage.ResetCourseProgress")})})]}),!!M&&l!==null&&l[0]<0&&s.jsxs(I.Text,{size:"12",children:[b("MyProfilePage.AccessCourseExpired")," ",X.format(l[0],l[1])]}),s.jsx(fe,{courseData:e,visible:o,onClose:()=>n(!1)}),m.show&&t&&!m.loading&&(f.length?s.jsx(s.Fragment,{children:s.jsx(de,{course:me.COURSE,courseId:t,visible:m.show,onClose:w,questionnaire:f[m.step],onFinish:()=>{}})}):s.jsx(Q.Modal,{onClose:w,visible:m.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:s.jsx(v.Title,{style:{textAlign:"center"},children:b("CourseProgram.CourseRated")})}))]})},D=({course:e})=>{const d=_();return s.jsx(ne,{children:s.jsx(Y.NewCourseCard,{mobile:$,id:e.id,image:s.jsx(F,{to:`/course/${e.id}`,children:e.image_path?s.jsx(ie.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):s.jsx(ae,{})}),title:s.jsx(F,{to:`/courses/${e.id}`,className:"title",children:s.jsx(v.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(le,{categories:e.categories,onCategoryClick:t=>{d.push(`/courses/?categories[]=${t}`)}}),actions:e.courseData&&s.jsx(Pe,{courseData:e.courseData,courseProgress:e.progress||0}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},be=P.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;

    a {
      text-decoration: none;
    }
  }
`,we=P.div`
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
`,Re=P.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,E=({filter:e=y.ALL})=>{var u,C;const{fetchMyAuthoredCourses:d,myAuthoredCourses:t,fetchPaginatedProgress:c,paginatedProgress:o}=a.useContext(Z.EscolaLMSContext),[n,g]=a.useState([]),p=_(),{t:m}=k(),{setQueryParam:h}=H(),{search:b}=ee(),R=new URLSearchParams(b),x=R.get("page"),M=R.get("status"),l=a.useMemo(()=>{var r,i;return e===y.AUTHORED?(r=t.list)==null?void 0:r.meta:(i=o.list)==null?void 0:i.meta},[e,(u=t.list)==null?void 0:u.meta,(C=o.list)==null?void 0:C.meta]),f=a.useCallback(r=>{let i="";switch(r){case 1:case 5:break;case 2:i="started";break;case 4:i="finished";break}return i},[]);a.useEffect(()=>{c({page:x?parseInt(x):1,per_page:8,status:f(Number(M))}),(e===y.ALL||e===y.AUTHORED)&&d()},[c,e,d,x,M,f]);const S=a.useMemo(()=>{var r;return(((r=o.list)==null?void 0:r.data)||[]).reduce((i,j)=>({...i,[j.course.id?j.course.id:-1]:Math.round((j.progress||[]).reduce((T,q)=>q.status===1?T+1:T,0)/j.progress.length*100)}),{})},[o]),w=a.useCallback(r=>r.map(i=>({...i.course,courseData:i,progress:S[i.course.id?i.course.id:-1]})),[S]);return a.useEffect(()=>{var r,i,j,T;e!==y.AUTHORED?g(w(((r=o.list)==null?void 0:r.data)||[])):e===y.AUTHORED?g(((i=t.list)==null?void 0:i.data)||[]):g([...w(((j=o.list)==null?void 0:j.data)||[]),...((T=t.list)==null?void 0:T.data)||[]])},[e,o,t,w]),s.jsxs(be,{children:[n.length===0&&!o.loading&&!t.loading&&s.jsxs(we,{children:[s.jsx(v.Title,{level:3,children:m("MyProfilePage.EmptyCoursesTitle")}),s.jsx(I.Text,{className:"small-text",children:m("MyProfilePage.EmptyCoursesText")}),s.jsx(A.Button,{onClick:()=>p.push(se.courses),mode:"secondary",children:m("MyProfilePage.EmptyCoursesBtnText")})]}),$?s.jsxs(he,{children:[o.loading&&t.loading&&Array.from({length:8}).map((r,i)=>s.jsx(O,{className:"single-slide",children:s.jsx(B,{})},`skeleton-card-${i}`)),(!o.loading||!t.loading)&&n&&n.map(r=>s.jsx(O,{className:"single-slide",children:s.jsx(D,{course:r})},r.id))]}):s.jsxs(s.Fragment,{children:[s.jsx(N.Row,{children:o.loading||t.loading?Array.from({length:8}).map((r,i)=>s.jsx(N.Col,{md:3,children:s.jsx(B,{})},`skeleton-card-${i}`)):n.map(r=>s.jsx(N.Col,{md:3,children:s.jsx(D,{course:r})},r.id))}),s.jsx(Re,{children:s.jsx(xe,{total:(l==null?void 0:l.total)||0,perPage:Number((l==null?void 0:l.per_page)||0),currentPage:Number((l==null?void 0:l.current_page)||1),onPage:r=>{h("page",`${r}`),window==null||window.scrollTo(0,0)}})})]})]})};var y=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(y||{});const Me=P.section`
  background-color: ${({theme:e})=>e.gray4};
  .courses-wrapper {
    padding-top: 100px;

    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
`,qe=()=>{const{t:e}=k(),{isTutor:d}=ge(),{query:t,setQueryParam:c}=H(),o={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:s.jsx(E,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:s.jsx(E,{filter:"inProgress"})},{label:e("MyProfilePage.Finished"),key:4,component:s.jsx(E,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:s.jsx(E,{filter:"authored"}),hidden:!d}],defaultActiveKey:Number(t.get("status")||1)};return s.jsx(te,{children:s.jsx(Me,{children:s.jsx(oe,{children:s.jsx("div",{className:"courses-wrapper",children:s.jsx(re.Tabs,{onClick:n=>{c("status",String(n)),c("page","1")},tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})})})})})};export{y as CourseStatus,qe as default};

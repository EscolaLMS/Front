import{r as a,A as L,f as k,i as _,j as s,x as Q,T as v,s as I,af as W,v as A,q as P,ah as G,aX as K,Z as U,aY as Z,aZ as X,a_ as Y,m as J,n as $,L as F,h as V,k as ee,l as se,w as N,o as te,C as oe}from"./index-CQ96WfSz.js";import{T as re}from"./Tabs-BVhRcFmS.js";import{C as ae}from"./index-DwLacoX8.js";import{R as ne}from"./ResponsiveImage-D_FmW4Qc.js";import{C as ie}from"./index-B4PtRLkI.js";import{C as le}from"./index-NPaUK2Xa.js";import{R as de}from"./index-DapZIaGy.js";import{b as ce,Q as me}from"./questionnaires-f2FHD02J.js";import{u as ue}from"./useDownloadCertificate-E_WbM1Jf.js";import{t as pe}from"./toast-CwM_HkAX.js";import{u as ge}from"./useRoles-CfyHo_FK.js";import{u as H}from"./useSearchParams-C7hEivA9.js";import{P as xe}from"./index-reJ2lLFi.js";import{S as he}from"./swiper-CClqrQVx.js";import{S as O}from"./swiper-react-DPen1Ja8.js";import{C as B}from"./CourseCard-A30qlITF.js";import"./base-C7euzKDi.js";import"./a11y-Bvn7SDsJ.js";import"./index-D6sSRccO.js";const fe=({courseData:e,visible:d,onClose:t})=>{const{sendProgress:c}=a.useContext(L.EscolaLMSContext),{t:o}=k(),{push:i}=_(),g=a.useCallback(async()=>{await c(e.course.id,e.progress.map(({topic_id:p})=>({topic_id:p,status:0}))),i(`/course/${e.course.id}`)},[e.course.id,e.progress,c,i]);return s.jsx(Q.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:d,onClose:t,children:s.jsxs(s.Fragment,{children:[s.jsx(v.Title,{level:4,children:o("ResetProgressModal.Continue")}),s.jsxs(I.Text,{children:[" ",o("ResetProgressModal.RestartCourse")]}),s.jsxs(W,{$gap:16,children:[s.jsx(A.Button,{mode:"primary",onClick:g,children:o("ResetProgressModal.WantContinue")}),s.jsx(A.Button,{mode:"primary",onClick:t,children:o("ResetProgressModal.Cancel")})]})]})})},Ce=P(G)`
  gap: 6px;
  margin: 0;
  width: 100%;
  p {
    margin: 0;
  }
`,je=({courseId:e})=>{const{fetchCertificate:d}=a.useContext(L.EscolaLMSContext),{downloadCertificate:t,loadingId:c}=ue(),{t:o}=k(),i=a.useCallback(async()=>{var g;try{const p=await d(e);p.success&&t(p.data.id,(g=p.data)==null?void 0:g.title)}catch(p){pe(`${o("UnexpectedError")}`,"error"),console.log(p)}},[e,t,d,o]);return s.jsxs(z,{onClick:i,children:[s.jsx(K,{})," ",o("MyProfilePage.DownloadCertificate")," ",c>-1&&s.jsx(U,{width:"10px",height:"10px"})]})},z=P.button`
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
`,Pe=({courseData:e,courseProgress:d})=>{const[t,c]=a.useState(void 0),[o,i]=a.useState(!1),{fetchQuestionnaires:g,fetchQuestionnaire:p}=a.useContext(L.EscolaLMSContext),[m,h]=a.useState({show:!1,step:0,loading:!1}),{t:w}=k(),R={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},x=a.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),M=x?x.getTime()<Date.now():!1,l=a.useMemo(()=>x?Z(x):null,[x]),[f,S]=a.useState([]),b=a.useCallback(()=>{if(c(void 0),h(u=>({...u,show:!1})),m.step<f.length-1){h(C=>({...C,step:C.step+1}));const u=setTimeout(()=>{h(C=>({...C,show:!0}))},500);return()=>clearTimeout(u)}},[f,m.step]);return a.useEffect(()=>{t&&ce({courseId:t,fetchQuestionnaire:p,fetchQuestionnaires:g,onSucces:u=>{S(u)},onFinish:()=>h(u=>({...u,loading:!1}))})},[t]),s.jsxs(Ce,{children:[R.isDone&&s.jsx(je,{courseId:e.course.id}),d===100&&s.jsxs(s.Fragment,{children:[s.jsxs(z,{onClick:()=>{c(e.course.id),h(u=>({...u,show:!0,loading:!0}))},children:[s.jsx(X,{})," ",w("MyProfilePage.RateCourse")," ",m.loading&&s.jsx(U,{width:"10px",height:"10px"})]}),s.jsx(ye,{children:!M&&R.isDone&&s.jsx(A.Button,{mode:"secondary",onClick:()=>i(!0),children:w("MyProfilePage.ResetCourseProgress")})})]}),!!M&&l!==null&&l[0]<0&&s.jsxs(I.Text,{size:"12",children:[w("MyProfilePage.AccessCourseExpired")," ",Y.format(l[0],l[1])]}),s.jsx(fe,{courseData:e,visible:o,onClose:()=>i(!1)}),m.show&&t&&!m.loading&&(f.length?s.jsx(s.Fragment,{children:s.jsx(de,{course:me.COURSE,courseId:t,visible:m.show,onClose:b,questionnaire:f[m.step],onFinish:()=>{}})}):s.jsx(Q.Modal,{onClose:b,visible:m.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:s.jsx(v.Title,{style:{textAlign:"center"},children:w("CourseProgram.CourseRated")})}))]})},D=({course:e})=>{const d=_();return s.jsx(ie,{children:s.jsx(J.NewCourseCard,{mobile:$,id:e.id,image:s.jsx(F,{to:`/course/${e.id}`,children:e.image_path?s.jsx(ne.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):s.jsx(ae,{})}),title:s.jsx(F,{to:`/courses/${e.id}`,className:"title",children:s.jsx(v.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(le,{categories:e.categories,onCategoryClick:t=>{d.push(`/courses/?categories[]=${t}`)}}),actions:e.courseData&&s.jsx(Pe,{courseData:e.courseData,courseProgress:e.progress||0}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},we=P.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;

    a {
      text-decoration: none;
    }
  }
`,be=P.div`
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
`,E=({filter:e=y.ALL})=>{var u,C;const{fetchMyAuthoredCourses:d,myAuthoredCourses:t,fetchPaginatedProgress:c,paginatedProgress:o}=a.useContext(V.EscolaLMSContext),[i,g]=a.useState([]),p=_(),{t:m}=k(),{setQueryParam:h}=H(),{search:w}=ee(),R=new URLSearchParams(w),x=R.get("page"),M=R.get("status"),l=a.useMemo(()=>{var r,n;return e===y.AUTHORED?(r=t.list)==null?void 0:r.meta:(n=o.list)==null?void 0:n.meta},[e,(u=t.list)==null?void 0:u.meta,(C=o.list)==null?void 0:C.meta]),f=a.useCallback(r=>{let n="";switch(r){case 1:case 5:break;case 2:n="started";break;case 4:n="finished";break}return n},[]);a.useEffect(()=>{c({page:x?parseInt(x):1,per_page:8,status:f(Number(M))}),(e===y.ALL||e===y.AUTHORED)&&d()},[c,e,d,x,M,f]);const S=a.useMemo(()=>{var r;return(((r=o.list)==null?void 0:r.data)||[]).reduce((n,j)=>({...n,[j.course.id?j.course.id:-1]:Math.round((j.progress||[]).reduce((T,q)=>q.status===1?T+1:T,0)/j.progress.length*100)}),{})},[o]),b=a.useCallback(r=>r.map(n=>({...n.course,courseData:n,progress:S[n.course.id?n.course.id:-1]})),[S]);return a.useEffect(()=>{var r,n,j,T;e!==y.AUTHORED?g(b(((r=o.list)==null?void 0:r.data)||[])):e===y.AUTHORED?g(((n=t.list)==null?void 0:n.data)||[]):g([...b(((j=o.list)==null?void 0:j.data)||[]),...((T=t.list)==null?void 0:T.data)||[]])},[e,o,t,b]),s.jsxs(we,{children:[i.length===0&&!o.loading&&!t.loading&&s.jsxs(be,{children:[s.jsx(v.Title,{level:3,children:m("MyProfilePage.EmptyCoursesTitle")}),s.jsx(I.Text,{className:"small-text",children:m("MyProfilePage.EmptyCoursesText")}),s.jsx(A.Button,{onClick:()=>p.push(se.courses),mode:"secondary",children:m("MyProfilePage.EmptyCoursesBtnText")})]}),$?s.jsxs(he,{children:[o.loading&&t.loading&&Array.from({length:8}).map((r,n)=>s.jsx(O,{className:"single-slide",children:s.jsx(B,{})},`skeleton-card-${n}`)),(!o.loading||!t.loading)&&i&&i.map(r=>s.jsx(O,{className:"single-slide",children:s.jsx(D,{course:r})},r.id))]}):s.jsxs(s.Fragment,{children:[s.jsx(N.Row,{children:o.loading||t.loading?Array.from({length:8}).map((r,n)=>s.jsx(N.Col,{md:3,children:s.jsx(B,{})},`skeleton-card-${n}`)):i.map(r=>s.jsx(N.Col,{md:3,children:s.jsx(D,{course:r})},r.id))}),s.jsx(Re,{children:s.jsx(xe,{total:(l==null?void 0:l.total)||0,perPage:Number((l==null?void 0:l.per_page)||0),currentPage:Number((l==null?void 0:l.current_page)||1),onPage:r=>{h("page",`${r}`),window==null||window.scrollTo(0,0)}})})]})]})};var y=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(y||{});const Me=P.section`
  background-color: ${({theme:e})=>e.gray4};
  .courses-wrapper {
    padding-top: 100px;

    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
`,qe=()=>{const{t:e}=k(),{isTutor:d}=ge(),{query:t,setQueryParam:c}=H(),o={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:s.jsx(E,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:s.jsx(E,{filter:"inProgress"})},{label:e("MyProfilePage.Finished"),key:4,component:s.jsx(E,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:s.jsx(E,{filter:"authored"}),hidden:!d}],defaultActiveKey:Number(t.get("status")||1)};return s.jsx(te,{children:s.jsx(Me,{children:s.jsx(oe,{children:s.jsx("div",{className:"courses-wrapper",children:s.jsx(re.Tabs,{onClick:i=>{c("status",String(i)),c("page","1")},tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})})})})})};export{y as CourseStatus,qe as default};

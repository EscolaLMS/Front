import{r as a,A as L,f as k,i as _,j as e,x as Q,T as v,s as I,ag as W,v as A,q as w,ai as G,aZ as K,a_ as Z,a0 as U,a$ as J,b0 as V,b1 as X,m as Y,n as $,L as F,h as ee,k as se,l as te,w as N,o as oe,C as re}from"./index-Cg8uAso-.js";import{T as ae}from"./Tabs-DBHvo_ig.js";import{C as ie}from"./index-CkoPhBVv.js";import{R as ne}from"./ResponsiveImage-BIRGvmK9.js";import{C as le}from"./index-Bwso0oIy.js";import{C as ce}from"./index-CN3aX4nq.js";import{R as de}from"./index-Clu5SLqE.js";import{b as ue,Q as me}from"./questionnaires-BjtsTtrc.js";import{u as pe}from"./useDownloadCertificate-QzNNL9fM.js";import{t as ge}from"./toast-C85uSAFb.js";import{u as xe}from"./useRoles-BfZmP_7J.js";import{u as H}from"./useSearchParams-B3yezRXd.js";import{P as he}from"./index-D8ehxqmm.js";import{S as fe}from"./swiper-C3bPJBwb.js";import{S as O}from"./swiper-react-DtdOL6sW.js";import{C as B}from"./CourseCard-bPu6oQmZ.js";import"./base-C7euzKDi.js";import"./a11y-YqQ-xN7Q.js";import"./index-YdG4f09r.js";const Ce=({courseData:s,visible:d,onClose:t})=>{const{sendProgress:u}=a.useContext(L.EscolaLMSContext),{t:o}=k(),{push:l}=_(),g=a.useCallback(async()=>{await u(s.course.id,s.progress.map(({topic_id:f})=>({topic_id:f,status:0}))),l(`/course/${s.course.id}`)},[s.course.id,s.progress,u,l]);return e.jsx(Q.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:d,onClose:t,children:e.jsxs(e.Fragment,{children:[e.jsx(v.Title,{level:4,children:o("ResetProgressModal.Continue")}),e.jsxs(I.Text,{children:[" ",o("ResetProgressModal.RestartCourse")]}),e.jsxs(W,{$gap:16,children:[e.jsx(A.Button,{mode:"primary",onClick:g,children:o("ResetProgressModal.WantContinue")}),e.jsx(A.Button,{mode:"primary",onClick:t,children:o("ResetProgressModal.Cancel")})]})]})})},je=w(G)`
  gap: 6px;
  margin: 0;
  width: 100%;
  p {
    margin: 0;
  }
`,ye=({courseId:s})=>{const{fetchCertificates:d}=a.useContext(L.EscolaLMSContext),{downloadCertificate:t,loadingId:u}=pe(),{t:o}=k(),[l,g]=a.useState(!1),f=a.useCallback(async()=>{try{const n=await d({assignable_type:K.CertificateAssignableTypes.Course,assignable_id:Number(s)});if(n&&n.success){const p=n.data||[];if(p.length===0){g(!0);return}p.forEach(({id:h,title:C})=>{t(h,C)})}}catch(n){ge(`${o("UnexpectedError")}`,"error"),console.log(n)}},[s,t,o,d]);return e.jsx(z,{onClick:f,children:!l&&e.jsxs(e.Fragment,{children:[e.jsx(Z,{})," ",o("MyProfilePage.DownloadCertificate")," ",u>-1&&e.jsx(U,{width:"10px",height:"10px"})]})})},z=w.button`
  all: unset;
  text-decoration: underline;
  font-size: 13px;
  font-family: ${({theme:s})=>s.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`,Pe=w.div`
  margin-top: 5px;
`,be=({courseData:s,courseProgress:d})=>{const[t,u]=a.useState(void 0),[o,l]=a.useState(!1),{fetchQuestionnaires:g,fetchQuestionnaire:f}=a.useContext(L.EscolaLMSContext),[n,p]=a.useState({show:!1,step:0,loading:!1}),{t:h}=k(),C={isDone:s.finish_date,isActive:s.start_date&&!s.finish_date,isNotStarted:!s.start_date&&!s.finish_date},x=a.useMemo(()=>s.deadline?new Date(s.deadline):null,[s.deadline]),T=x?x.getTime()<Date.now():!1,c=a.useMemo(()=>x?J(x):null,[x]),[j,S]=a.useState([]),R=a.useCallback(()=>{if(u(void 0),p(m=>({...m,show:!1})),n.step<j.length-1){p(y=>({...y,step:y.step+1}));const m=setTimeout(()=>{p(y=>({...y,show:!0}))},500);return()=>clearTimeout(m)}},[j,n.step]);return a.useEffect(()=>{t&&ue({courseId:t,fetchQuestionnaire:f,fetchQuestionnaires:g,onSucces:m=>{S(m)},onFinish:()=>p(m=>({...m,loading:!1}))})},[t]),e.jsxs(je,{children:[C.isDone&&e.jsx(ye,{courseId:s.course.id}),d===100&&e.jsxs(e.Fragment,{children:[e.jsxs(z,{onClick:()=>{u(s.course.id),p(m=>({...m,show:!0,loading:!0}))},children:[e.jsx(V,{})," ",h("MyProfilePage.RateCourse")," ",n.loading&&e.jsx(U,{width:"10px",height:"10px"})]}),e.jsx(Pe,{children:!T&&C.isDone&&e.jsx(A.Button,{mode:"secondary",onClick:()=>l(!0),children:h("MyProfilePage.ResetCourseProgress")})})]}),!!T&&c!==null&&c[0]<0&&e.jsxs(I.Text,{size:"12",children:[h("MyProfilePage.AccessCourseExpired")," ",X.format(c[0],c[1])]}),e.jsx(Ce,{courseData:s,visible:o,onClose:()=>l(!1)}),n.show&&t&&!n.loading&&(j.length?e.jsx(e.Fragment,{children:e.jsx(de,{course:me.COURSE,courseId:t,visible:n.show,onClose:R,questionnaire:j[n.step],onFinish:()=>{}})}):e.jsx(Q.Modal,{onClose:R,visible:n.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:e.jsx(v.Title,{style:{textAlign:"center"},children:h("CourseProgram.CourseRated")})}))]})},D=({course:s})=>{const d=_();return e.jsx(le,{children:e.jsx(Y.NewCourseCard,{mobile:$,id:s.id,image:e.jsx(F,{to:`/course/${s.id}`,children:s.image_path?e.jsx(ne.ResponsiveImage,{path:s.image_path,alt:s.title,srcSizes:[300,600,900]}):e.jsx(ie,{})}),title:e.jsx(F,{to:`/courses/${s.id}`,className:"title",children:e.jsx(v.Title,{level:4,as:"h2",children:s.title})}),categories:e.jsx(ce,{categories:s.categories,onCategoryClick:t=>{d.push(`/courses/?categories[]=${t}`)}}),actions:s.courseData&&e.jsx(be,{courseData:s.courseData,courseProgress:s.progress||0}),progress:s.progress&&s.progress!==100&&!isNaN(s.progress)?{currentProgress:s.progress,maxProgress:100}:void 0})})},we=w.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;

    a {
      text-decoration: none;
    }
  }
`,Re=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: ${({theme:s})=>s.mode==="dark"?s.gray1:s.gray5}; */
  padding: ${$?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;
  text-align: center;
  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,Te=w.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,E=({filter:s=b.ALL})=>{var m,y;const{fetchMyAuthoredCourses:d,myAuthoredCourses:t,fetchPaginatedProgress:u,paginatedProgress:o}=a.useContext(ee.EscolaLMSContext),[l,g]=a.useState([]),f=_(),{t:n}=k(),{setQueryParam:p}=H(),{search:h}=se(),C=new URLSearchParams(h),x=C.get("page"),T=C.get("status"),c=a.useMemo(()=>{var r,i;return s===b.AUTHORED?(r=t.list)==null?void 0:r.meta:(i=o.list)==null?void 0:i.meta},[s,(m=t.list)==null?void 0:m.meta,(y=o.list)==null?void 0:y.meta]),j=a.useCallback(r=>{let i="";switch(r){case 1:case 5:break;case 2:i="started";break;case 4:i="finished";break}return i},[]);a.useEffect(()=>{u({page:x?parseInt(x):1,per_page:8,status:j(Number(T))}),(s===b.ALL||s===b.AUTHORED)&&d()},[u,s,d,x,T,j]);const S=a.useMemo(()=>{var r;return(((r=o.list)==null?void 0:r.data)||[]).reduce((i,P)=>({...i,[P.course.id?P.course.id:-1]:Math.round((P.progress||[]).reduce((M,q)=>q.status===1?M+1:M,0)/P.progress.length*100)}),{})},[o]),R=a.useCallback(r=>r.map(i=>({...i.course,courseData:i,progress:S[i.course.id?i.course.id:-1]})),[S]);return a.useEffect(()=>{var r,i,P,M;s!==b.AUTHORED?g(R(((r=o.list)==null?void 0:r.data)||[])):s===b.AUTHORED?g(((i=t.list)==null?void 0:i.data)||[]):g([...R(((P=o.list)==null?void 0:P.data)||[]),...((M=t.list)==null?void 0:M.data)||[]])},[s,o,t,R]),e.jsxs(we,{children:[l.length===0&&!o.loading&&!t.loading&&e.jsxs(Re,{children:[e.jsx(v.Title,{level:3,children:n("MyProfilePage.EmptyCoursesTitle")}),e.jsx(I.Text,{className:"small-text",children:n("MyProfilePage.EmptyCoursesText")}),e.jsx(A.Button,{onClick:()=>f.push(te.courses),mode:"secondary",children:n("MyProfilePage.EmptyCoursesBtnText")})]}),$?e.jsxs(fe,{children:[o.loading&&t.loading&&Array.from({length:8}).map((r,i)=>e.jsx(O,{className:"single-slide",children:e.jsx(B,{})},`skeleton-card-${i}`)),(!o.loading||!t.loading)&&l&&l.map(r=>e.jsx(O,{className:"single-slide",children:e.jsx(D,{course:r})},r.id))]}):e.jsxs(e.Fragment,{children:[e.jsx(N.Row,{children:o.loading||t.loading?Array.from({length:8}).map((r,i)=>e.jsx(N.Col,{md:3,children:e.jsx(B,{})},`skeleton-card-${i}`)):l.map(r=>e.jsx(N.Col,{md:3,children:e.jsx(D,{course:r})},r.id))}),e.jsx(Te,{children:e.jsx(he,{total:(c==null?void 0:c.total)||0,perPage:Number((c==null?void 0:c.per_page)||0),currentPage:Number((c==null?void 0:c.current_page)||1),onPage:r=>{p("page",`${r}`),window==null||window.scrollTo(0,0)}})})]})]})};var b=(s=>(s.IN_PROGRESS="inProgress",s.PLANNED="planned",s.FINISHED="finished",s.AUTHORED="authored",s.ALL="all",s))(b||{});const Me=w.section`
  background-color: ${({theme:s})=>s.gray4};
  .courses-wrapper {
    padding-top: 100px;

    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
`,We=()=>{const{t:s}=k(),{isTutor:d}=xe(),{query:t,setQueryParam:u}=H(),o={tabs:[{label:s("MyProfilePage.ALlCourses"),key:1,component:e.jsx(E,{filter:"all"})},{label:s("MyProfilePage.InProgress"),key:2,component:e.jsx(E,{filter:"inProgress"})},{label:s("MyProfilePage.Finished"),key:4,component:e.jsx(E,{filter:"finished"})},{label:s("MyProfilePage.Authored"),key:5,component:e.jsx(E,{filter:"authored"}),hidden:!d}],defaultActiveKey:Number(t.get("status")||1)};return e.jsx(oe,{children:e.jsx(Me,{children:e.jsx(re,{children:e.jsx("div",{className:"courses-wrapper",children:e.jsx(ae.Tabs,{onClick:l=>{u("status",String(l)),u("page","1")},tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})})})})})};export{b as CourseStatus,We as default};

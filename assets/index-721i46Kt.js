import{r,D as $,f as k,i as B,j as t,x as q,T as N,v as _,aj as V,B as L,q as R,ai as Y,S as W,X as G,J as Z,o as D,w as I,N as U,U as ee,O as te,l as se,s as oe,h as z,k as ne,d as M,E as re,G as ae,aP as ie}from"./index-B8t7bxZo.js";import{T as le}from"./Tabs-lM-qfhAO.js";import{C as ce}from"./index-Cks0KJwc.js";import{C as de}from"./index-Dp8bV9hL.js";import{R as ue}from"./ResponsiveImage-B7bcvD5e.js";import{C as me}from"./index-CKt0GIUE.js";import{C as pe}from"./index-BAzXgDWl.js";import{R as xe}from"./index-OPrbDiVN.js";import{g as ge,r as he}from"./index-B3TTgJzd.js";import{c as fe,a as je}from"./questionnaires-DLL3MiMR.js";import{P as ye}from"./index-Cka8reF9.js";import{u as be}from"./useRoles-CG5Kd-d6.js";import{u as K}from"./useSearchParams-8UhInns8.js";import{P as Ce}from"./index-CrC3Z2ZD.js";import"./app-B2E7767C.js";import"./date-DjWK0l4x.js";import"./base-CumTa13P.js";const Pe=({courseData:e,visible:s,onClose:o})=>{const{sendProgress:a}=r.useContext($.EscolaLMSContext),{t:n}=k(),{push:l}=B(),p=r.useCallback(async()=>{await a(e.course.id,e.progress.map(({topic_id:b})=>({topic_id:b,status:0}))),l(`/course/${e.course.id}`)},[e.course.id,e.progress,a,l]);return t.jsx(q.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:s,onClose:o,children:t.jsxs(t.Fragment,{children:[t.jsx(N.Title,{level:4,children:n("ResetProgressModal.Continue")}),t.jsxs(_.Text,{children:[" ",n("ResetProgressModal.RestartCourse")]}),t.jsxs(V,{$gap:16,children:[t.jsx(L.Button,{mode:"primary",onClick:p,children:n("ResetProgressModal.WantContinue")}),t.jsx(L.Button,{mode:"primary",onClick:o,children:n("ResetProgressModal.Cancel")})]})]})})},ve=R(Y)`
  gap: 6px;
  margin: 0;
  width: 100%;
`,we=({courseData:e,courseProgress:s})=>{const[o,a]=r.useState(void 0),[n,l]=r.useState(!1),{fetchQuestionnaires:p,fetchQuestionnaire:b}=r.useContext($.EscolaLMSContext),[m,j]=r.useState({show:!1,step:0,loading:!1}),{t:y}=k(),C={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},x=r.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),d=x?x.getTime()<Date.now():!1,u=r.useMemo(()=>x?ge(x):null,[x]),[g,f]=r.useState([]),T=r.useCallback(()=>{if(a(void 0),j(h=>({...h,show:!1})),m.step<g.length-1){j(P=>({...P,step:P.step+1}));const h=setTimeout(()=>{j(P=>({...P,show:!0}))},500);return()=>clearTimeout(h)}},[g,m.step]);return r.useEffect(()=>{o&&fe({courseId:o,fetchQuestionnaire:b,fetchQuestionnaires:p,onSucces:h=>{f(h)},onFinish:()=>j(h=>({...h,loading:!1}))})},[o]),t.jsxs(ve,{children:[s===100&&t.jsxs(t.Fragment,{children:[t.jsx(L.Button,{mode:"secondary",onClick:()=>{a(e.course.id),j(h=>({...h,show:!0,loading:!0}))},children:m.loading?t.jsx(W.Spin,{}):y("MyProfilePage.RateCourse")}),!d&&C.isDone&&t.jsx(L.Button,{mode:"secondary",onClick:()=>l(!0),children:y("MyProfilePage.ResetCourseProgress")})]}),!!d&&u!==null&&u[0]<0&&t.jsxs(_.Text,{children:[y("MyProfilePage.AccessCourseExpired")," ",he.format(u[0],u[1])]}),t.jsx(Pe,{courseData:e,visible:n,onClose:()=>l(!1)}),m.show&&o&&!m.loading&&(g.length?t.jsx(t.Fragment,{children:t.jsx(xe,{course:je.COURSE,courseId:o,visible:m.show,onClose:T,questionnaire:g[m.step]})}):t.jsx(q.Modal,{onClose:T,visible:m.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(N.Title,{children:y("CourseProgram.CourseRated")})}))]})},H=({course:e})=>{const s=G(),o=B(),{t:a}=k();return t.jsx(me,{children:t.jsx(Z,{mobile:D,id:e.id,image:t.jsx(I,{to:`/course/${e.id}`,children:e.image_path?t.jsx(ue.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):t.jsx(de,{})}),subtitle:e.subtitle?t.jsx(_.Text,{children:t.jsx(I,{style:{color:s.primaryColor},to:`/course/${e.id}`,children:e.subtitle})}):void 0,title:t.jsx(I,{to:`/courses/${e.id}`,className:"title",children:t.jsx(N.Title,{level:4,as:"h2",children:e.title})}),categories:t.jsx(pe,{categories:e.categories,onCategoryClick:n=>{o.push(`/courses/?categories[]=${n}`)}}),actions:e.courseData&&t.jsx(we,{courseData:e.courseData,courseProgress:e.progress||0}),footer:t.jsxs(t.Fragment,{children:[e.users_count&&e.users_count>0&&t.jsx(U.IconText,{icon:t.jsx(ee,{}),text:`${e.users_count} ${a("Students")}`})," ",e.lessons_count&&e.lessons_count>0&&t.jsx(U.IconText,{icon:t.jsx(te,{}),text:`${e.lessons_count} ${a("Lessons")}`})]}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},_e=R.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;
    a {
      text-decoration: none;
    }
  }

  .slider-wrapper {
    width: 100%;
    display: flex;
    overflow: scroll;
    column-gap: 15px;

    @media (max-width: 575px) {
      width: calc(100% + 15px);
      margin-right: -15px;
    }

    .single-slide {
      width: 272px;
      max-width: 272px;
      flex-shrink: 0;
    }
  }
`,Te=R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
  padding: ${D?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;

  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,Me=R.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,E=({filter:e=w.ALL})=>{var h,P;const{fetchMyAuthoredCourses:s,myAuthoredCourses:o,fetchPaginatedProgress:a,paginatedProgress:n}=r.useContext(se.EscolaLMSContext),[l,p]=r.useState([]),b=B(),{t:m}=k(),{setQueryParam:j}=K(),{search:y}=oe(),C=new URLSearchParams(y),x=C.get("page"),d=C.get("status"),u=r.useMemo(()=>{var i,c;return e===w.AUTHORED?(i=o.list)==null?void 0:i.meta:(c=n.list)==null?void 0:c.meta},[e,(h=o.list)==null?void 0:h.meta,(P=n.list)==null?void 0:P.meta]),g=r.useCallback(i=>{let c="";switch(i){case 1:case 5:break;case 2:c="started";break;case 3:c="planned";break;case 4:c="finished";break}return c},[]);r.useEffect(()=>{a({page:x?parseInt(x):1,per_page:6,status:g(Number(d))}),(e===w.ALL||e===w.AUTHORED)&&s()},[a,e,s,x,d,g]);const f=r.useMemo(()=>{var i;return(((i=n.list)==null?void 0:i.data)||[]).reduce((c,v)=>({...c,[v.course.id?v.course.id:-1]:Math.round((v.progress||[]).reduce((S,J)=>J.status===1?S+1:S,0)/v.progress.length*100)}),{})},[n]),T=r.useCallback(i=>i.map(c=>({...c.course,courseData:c,progress:f[c.course.id?c.course.id:-1]})),[f]);return r.useEffect(()=>{var i,c,v,S;e!==w.AUTHORED?p(T(((i=n.list)==null?void 0:i.data)||[])):e===w.AUTHORED?p(((c=o.list)==null?void 0:c.data)||[]):p([...T(((v=n.list)==null?void 0:v.data)||[]),...((S=o.list)==null?void 0:S.data)||[]])},[e,n,o,T]),t.jsx(_e,{children:D?t.jsx("div",{className:"slider-wrapper",children:l&&l.map(i=>t.jsx("div",{className:"single-slide",children:t.jsx(H,{course:i})},i.id))}):t.jsxs(t.Fragment,{children:[t.jsxs(z.Row,{style:{gap:"28px 0"},children:[l.length===0&&!n.loading&&!o.loading&&t.jsxs(Te,{children:[t.jsx(N.Title,{level:3,children:m("MyProfilePage.EmptyCoursesTitle")}),t.jsx(_.Text,{className:"small-text",children:m("MyProfilePage.EmptyCoursesText")}),t.jsx(L.Button,{onClick:()=>b.push(ne.courses),mode:"secondary",children:m("MyProfilePage.EmptyCoursesBtnText")})]}),n.loading||o.loading?t.jsx(ce,{}):l.map(i=>t.jsx(z.Col,{md:4,children:t.jsx(H,{course:i})},i.id))]}),t.jsx(Me,{children:t.jsx(Ce,{total:(u==null?void 0:u.total)||0,perPage:Number((u==null?void 0:u.per_page)||0),currentPage:Number((u==null?void 0:u.current_page)||1),onPage:i=>{j("page",`${i}`),window==null||window.scrollTo(0,0)}})})]})})};var F={},ke=M&&M.__makeTemplateObject||function(e,s){return Object.defineProperty?Object.defineProperty(e,"raw",{value:s}):e.raw=s,e},O=M&&M.__assign||function(){return O=Object.assign||function(e){for(var s,o=1,a=arguments.length;o<a;o++){s=arguments[o];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},O.apply(this,arguments)},Ne=M&&M.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(F,"__esModule",{value:!0});var X=F.NoteAction=void 0,A=t,Re=Ne(re),Se=ae,Ee=(0,Re.default)("div")(Q||(Q=ke([`
  border-left: 3px solid `,`;
  padding: 20px;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: `,`px;
  background: `,`;
  > div:first-child {
    padding-right: 30px;
  }

  .subtitle {
    opacity: 0.8;
  }
`],[`
  border-left: 3px solid `,`;
  padding: 20px;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: `,`px;
  background: `,`;
  > div:first-child {
    padding-right: 30px;
  }

  .subtitle {
    opacity: 0.8;
  }
`])),function(e){return e.color?e.color:"#F2C94C"},function(e){return e.theme.cardRadius},function(e){var s=e.theme;return(0,Se.getStylesBasedOnTheme)(s.mode,s.dm__cardBackgroundColor,s.cardBackgroundColor)}),Ae=function(e){var s=e.title,o=e.subtitle,a=e.color,n=e.actions,l=e.className,p=l===void 0?"":l;return(0,A.jsxs)(Ee,O({className:"wellms-component ".concat(p),color:a},{children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{children:s}),o&&(0,A.jsx)("div",O({className:"subtitle"},{children:o}))]}),(0,A.jsx)("div",{children:n})]}))};X=F.NoteAction=Ae;var Q;const Le=R.section`
  .empty-certificates-message {
    padding: 34px 40px;
    background: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
  }
  .buttons-container {
    display: flex;
    column-gap: 60px;
    align-items: center;
    justify-content: flex-end;

    .download-btn {
      appearance: none;
      outline: none;
      border: none;
      cursor: pointer;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 10px;
      color: ${({theme:e})=>e.mode==="dark"?e.white:e.gray1};
    }
  }
`,Oe=()=>{var m,j,y,C,x;const{generateCertificate:e,certificates:s,fetchCertificates:o}=r.useContext($.EscolaLMSContext),{t:a}=k(),n=G(),[l,p]=r.useState(-1);r.useEffect(()=>{o()},[o]);const b=r.useCallback(async(d,u)=>{p(d);try{const g=await e(d);if(g){const f=document.createElement("a");document.body.appendChild(f),f.setAttribute("href",URL.createObjectURL(new Blob([g]))),f.setAttribute("download",`${u||"Certificate"}.pdf`),f.style.display="",f.click(),document.body.removeChild(f),p(-1)}}catch(g){p(-1),console.log(g)}},[e]);return t.jsx(t.Fragment,{children:t.jsxs(Le,{children:[((m=s.list)==null?void 0:m.data.length)===0&&t.jsx(_.Text,{className:"empty-certificates-message",children:t.jsx("strong",{children:a("MyProfilePage.EmptyCertificates")})}),s&&((j=s==null?void 0:s.list)==null?void 0:j.data)&&((y=s.list)==null?void 0:y.data.length)>0&&((x=(C=s==null?void 0:s.list)==null?void 0:C.data)==null?void 0:x.filter(d=>d.title).map(d=>t.jsx(X,{color:n.primaryColor,title:t.jsx(N.Title,{level:4,as:"h3",children:d.title}),subtitle:t.jsx(_.Text,{noMargin:!0,size:"12",children:new Date(d.created_at).toLocaleDateString("pl-PL")}),actions:t.jsx("div",{className:"buttons-container",children:l===d.id?t.jsx(W.Spin,{color:n.primaryColor}):t.jsxs("button",{className:"download-btn",onClick:()=>b(d.id,d.title),children:[t.jsx(ie,{})," ",t.jsx(_.Text,{children:"(.pdf)"})]})})})))]})})};var w=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(w||{});const Ie=R.section`
  .courses-wrapper {
    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
`,et=()=>{const{t:e}=k(),{isTutor:s}=be(),{query:o,setQueryParam:a}=K(),n={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:t.jsx(E,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:t.jsx(E,{filter:"inProgress"})},{label:e("MyProfilePage.Planned"),key:3,component:t.jsx(E,{filter:"planned"})},{label:e("MyProfilePage.Finished"),key:4,component:t.jsx(E,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:t.jsx(E,{filter:"authored"}),hidden:!s}],defaultActiveKey:Number(o.get("status")||1)};return t.jsx(ye,{title:e("MyProfilePage.MyCourses"),withTabs:!0,children:t.jsxs(Ie,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(le.Tabs,{onClick:l=>{a("status",String(l)),a("page","1")},tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})}),t.jsxs("div",{className:"certificates-container",children:[t.jsx(N.Title,{level:2,children:e("MyProfilePage.MyCertificates")}),t.jsx(Oe,{})]})]})})};export{w as CourseStatus,et as default};

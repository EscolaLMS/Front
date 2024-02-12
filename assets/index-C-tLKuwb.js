import{r,h as $,f as k,m as B,j as t,w as X,l as x,q as R,X as q,H as J,n as D,v as O,G as S,T as I,Q as U,U as V,J as Y,k as Z,p as ee,i as z,s as te,o as se,d as M,z as oe,D as ne,aE as re}from"./index-BsLXwVX-.js";import{T as ae}from"./Tabs-BM0UnGoM.js";import{C as ie}from"./index-DD3hn7qC.js";import{C as le}from"./index-2LkLTXFl.js";import{R as ce}from"./ResponsiveImage-KgADMS5g.js";import{C as de}from"./index-B1fleA7X.js";import{C as ue}from"./index-Dv47bB8G.js";import{R as me}from"./index-BQIpjfkc.js";import{g as pe,r as xe}from"./index-B6JCoH2u.js";import{c as ge,a as he}from"./questionnaires-BsRSV85P.js";import{P as fe}from"./index-iAlfguab.js";import{u as je}from"./useRoles-D5uhn3ke.js";import{u as W}from"./useSearchParams-Dt057rbN.js";import{P as ye}from"./index-CaJenVQ0.js";import"./app-B2E7767C.js";import"./date-C5z6T5_w.js";import"./base-CumTa13P.js";const be=({courseData:e,visible:s,onClose:o})=>{const{sendProgress:a}=r.useContext($.EscolaLMSContext),{t:n}=k(),{push:l}=B(),p=r.useCallback(async()=>{await a(e.course.id,e.progress.map(({topic_id:C})=>({topic_id:C,status:0}))),l(`/course/${e.course.id}`)},[e.course.id,e.progress,a,l]);return t.jsx(X.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:s,onClose:o,children:t.jsxs(t.Fragment,{children:[t.jsx(x.Title,{level:4,children:n("ResetProgressModal.Continue")}),t.jsxs(x.Text,{children:[" ",n("ResetProgressModal.RestartCourse")]}),t.jsxs(x.Row,{$gap:16,children:[t.jsx(x.Button,{mode:"primary",onClick:p,children:n("ResetProgressModal.WantContinue")}),t.jsx(x.Button,{mode:"primary",onClick:o,children:n("ResetProgressModal.Cancel")})]})]})})},Ce=R(x.Stack)`
  gap: 6px;
  margin: 0;
  width: 100%;
`,Pe=({courseData:e,courseProgress:s})=>{const[o,a]=r.useState(void 0),[n,l]=r.useState(!1),{fetchQuestionnaires:p,fetchQuestionnaire:C}=r.useContext($.EscolaLMSContext),[m,y]=r.useState({show:!1,step:0,loading:!1}),{t:b}=k(),P={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},g=r.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),d=g?g.getTime()<Date.now():!1,u=r.useMemo(()=>g?pe(g):null,[g]),[h,j]=r.useState([]),_=r.useCallback(()=>{if(a(void 0),y(f=>({...f,show:!1})),m.step<h.length-1){y(v=>({...v,step:v.step+1}));const f=setTimeout(()=>{y(v=>({...v,show:!0}))},500);return()=>clearTimeout(f)}},[h,m.step]);return r.useEffect(()=>{o&&ge({courseId:o,fetchQuestionnaire:C,fetchQuestionnaires:p,onSucces:f=>{j(f)},onFinish:()=>y(f=>({...f,loading:!1}))})},[o]),t.jsxs(Ce,{children:[s===100&&t.jsxs(t.Fragment,{children:[t.jsx(x.Button,{mode:"secondary",onClick:()=>{a(e.course.id),y(f=>({...f,show:!0,loading:!0}))},children:m.loading?t.jsx(x.Spin,{}):b("MyProfilePage.RateCourse")}),!d&&P.isDone&&t.jsx(x.Button,{mode:"secondary",onClick:()=>l(!0),children:b("MyProfilePage.ResetCourseProgress")})]}),!!d&&u!==null&&u[0]<0&&t.jsxs(x.Text,{children:[b("MyProfilePage.AccessCourseExpired")," ",xe.format(u[0],u[1])]}),t.jsx(be,{courseData:e,visible:n,onClose:()=>l(!1)}),m.show&&o&&!m.loading&&(h.length?t.jsx(t.Fragment,{children:t.jsx(me,{course:he.COURSE,courseId:o,visible:m.show,onClose:_,questionnaire:h[m.step]})}):t.jsx(x.Modal,{onClose:_,visible:m.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:t.jsx(x.Title,{children:b("CourseProgram.CourseRated")})}))]})},H=({course:e})=>{const s=q(),o=B(),{t:a}=k();return t.jsx(de,{children:t.jsx(J,{mobile:D,id:e.id,image:t.jsx(O,{to:`/course/${e.id}`,children:e.image_path?t.jsx(ce.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):t.jsx(le,{})}),subtitle:e.subtitle?t.jsx(S.Text,{children:t.jsx(O,{style:{color:s.primaryColor},to:`/course/${e.id}`,children:e.subtitle})}):void 0,title:t.jsx(O,{to:`/courses/${e.id}`,className:"title",children:t.jsx(I.Title,{level:4,as:"h2",children:e.title})}),categories:t.jsx(ue,{categories:e.categories,onCategoryClick:n=>{o.push(`/courses/?categories[]=${n}`)}}),actions:e.courseData&&t.jsx(Pe,{courseData:e.courseData,courseProgress:e.progress||0}),footer:t.jsxs(t.Fragment,{children:[e.users_count&&e.users_count>0&&t.jsx(U.IconText,{icon:t.jsx(V,{}),text:`${e.users_count} ${a("Students")}`})," ",e.lessons_count&&e.lessons_count>0&&t.jsx(U.IconText,{icon:t.jsx(Y,{}),text:`${e.lessons_count} ${a("Lessons")}`})]}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},ve=R.div`
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
`,we=R.div`
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
`,Te=R.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,E=({filter:e=T.ALL})=>{var f,v;const{fetchMyAuthoredCourses:s,myAuthoredCourses:o,fetchPaginatedProgress:a,paginatedProgress:n}=r.useContext(Z.EscolaLMSContext),[l,p]=r.useState([]),C=B(),{t:m}=k(),{setQueryParam:y}=W(),{search:b}=ee(),P=new URLSearchParams(b),g=P.get("page"),d=P.get("status"),u=r.useMemo(()=>{var i,c;return e===T.AUTHORED?(i=o.list)==null?void 0:i.meta:(c=n.list)==null?void 0:c.meta},[e,(f=o.list)==null?void 0:f.meta,(v=n.list)==null?void 0:v.meta]),h=r.useCallback(i=>{let c="";switch(i){case 1:case 5:break;case 2:c="started";break;case 3:c="planned";break;case 4:c="finished";break}return c},[]);r.useEffect(()=>{a({page:g?parseInt(g):1,per_page:6,status:h(Number(d))}),(e===T.ALL||e===T.AUTHORED)&&s()},[a,e,s,g,d,h]);const j=r.useMemo(()=>{var i;return(((i=n.list)==null?void 0:i.data)||[]).reduce((c,w)=>({...c,[w.course.id?w.course.id:-1]:Math.round((w.progress||[]).reduce((N,K)=>K.status===1?N+1:N,0)/w.progress.length*100)}),{})},[n]),_=r.useCallback(i=>i.map(c=>({...c.course,courseData:c,progress:j[c.course.id?c.course.id:-1]})),[j]);return r.useEffect(()=>{var i,c,w,N;e!==T.AUTHORED?p(_(((i=n.list)==null?void 0:i.data)||[])):e===T.AUTHORED?p(((c=o.list)==null?void 0:c.data)||[]):p([..._(((w=n.list)==null?void 0:w.data)||[]),...((N=o.list)==null?void 0:N.data)||[]])},[e,n,o,_]),t.jsx(ve,{children:D?t.jsx("div",{className:"slider-wrapper",children:l&&l.map(i=>t.jsx("div",{className:"single-slide",children:t.jsx(H,{course:i})},i.id))}):t.jsxs(t.Fragment,{children:[t.jsxs(z.Row,{style:{gap:"28px 0"},children:[l.length===0&&!n.loading&&!o.loading&&t.jsxs(we,{children:[t.jsx(I.Title,{level:3,children:m("MyProfilePage.EmptyCoursesTitle")}),t.jsx(S.Text,{className:"small-text",children:m("MyProfilePage.EmptyCoursesText")}),t.jsx(te.Button,{onClick:()=>C.push(se.courses),mode:"secondary",children:m("MyProfilePage.EmptyCoursesBtnText")})]}),n.loading||o.loading?t.jsx(ie,{}):l.map(i=>t.jsx(z.Col,{md:4,children:t.jsx(H,{course:i})},i.id))]}),t.jsx(Te,{children:t.jsx(ye,{total:(u==null?void 0:u.total)||0,perPage:Number((u==null?void 0:u.per_page)||0),currentPage:Number((u==null?void 0:u.current_page)||1),onPage:i=>{y("page",`${i}`),window==null||window.scrollTo(0,0)}})})]})})};var F={},_e=M&&M.__makeTemplateObject||function(e,s){return Object.defineProperty?Object.defineProperty(e,"raw",{value:s}):e.raw=s,e},L=M&&M.__assign||function(){return L=Object.assign||function(e){for(var s,o=1,a=arguments.length;o<a;o++){s=arguments[o];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},L.apply(this,arguments)},Me=M&&M.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(F,"__esModule",{value:!0});var G=F.NoteAction=void 0,A=t,ke=Me(oe),Re=ne,Ne=(0,ke.default)("div")(Q||(Q=_e([`
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
`])),function(e){return e.color?e.color:"#F2C94C"},function(e){return e.theme.cardRadius},function(e){var s=e.theme;return(0,Re.getStylesBasedOnTheme)(s.mode,s.dm__cardBackgroundColor,s.cardBackgroundColor)}),Ee=function(e){var s=e.title,o=e.subtitle,a=e.color,n=e.actions,l=e.className,p=l===void 0?"":l;return(0,A.jsxs)(Ne,L({className:"wellms-component ".concat(p),color:a},{children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{children:s}),o&&(0,A.jsx)("div",L({className:"subtitle"},{children:o}))]}),(0,A.jsx)("div",{children:n})]}))};G=F.NoteAction=Ee;var Q;const Ae=R.section`
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
`,Se=()=>{var m,y,b,P,g;const{generateCertificate:e,certificates:s,fetchCertificates:o}=r.useContext($.EscolaLMSContext),{t:a}=k(),n=q(),[l,p]=r.useState(-1);r.useEffect(()=>{o()},[o]);const C=r.useCallback(async(d,u)=>{p(d);try{const h=await e(d);if(h){const j=document.createElement("a");document.body.appendChild(j),j.setAttribute("href",URL.createObjectURL(new Blob([h]))),j.setAttribute("download",`${u||"Certificate"}.pdf`),j.style.display="",j.click(),document.body.removeChild(j),p(-1)}}catch(h){p(-1),console.log(h)}},[e]);return t.jsx(t.Fragment,{children:t.jsxs(Ae,{children:[((m=s.list)==null?void 0:m.data.length)===0&&t.jsx(S.Text,{className:"empty-certificates-message",children:t.jsx("strong",{children:a("MyProfilePage.EmptyCertificates")})}),s&&((y=s==null?void 0:s.list)==null?void 0:y.data)&&((b=s.list)==null?void 0:b.data.length)>0&&((g=(P=s==null?void 0:s.list)==null?void 0:P.data)==null?void 0:g.filter(d=>d.title).map(d=>t.jsx(G,{color:n.primaryColor,title:t.jsx(I.Title,{level:4,as:"h3",children:d.title}),subtitle:t.jsx(S.Text,{noMargin:!0,size:"12",children:new Date(d.created_at).toLocaleDateString("pl-PL")}),actions:t.jsx("div",{className:"buttons-container",children:l===d.id?t.jsx(x.Spin,{color:n.primaryColor}):t.jsxs("button",{className:"download-btn",onClick:()=>C(d.id,d.title),children:[t.jsx(re,{})," ",t.jsx(S.Text,{children:"(.pdf)"})]})})})))]})})};var T=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(T||{});const Le=R.section`
  .courses-wrapper {
    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
`,Ye=()=>{const{t:e}=k(),{isTutor:s}=je(),{query:o,setQueryParam:a}=W(),n={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:t.jsx(E,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:t.jsx(E,{filter:"inProgress"})},{label:e("MyProfilePage.Planned"),key:3,component:t.jsx(E,{filter:"planned"})},{label:e("MyProfilePage.Finished"),key:4,component:t.jsx(E,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:t.jsx(E,{filter:"authored"}),hidden:!s}],defaultActiveKey:Number(o.get("status")||1)};return t.jsx(fe,{title:e("MyProfilePage.MyCourses"),withTabs:!0,children:t.jsxs(Le,{children:[t.jsx("div",{className:"courses-wrapper",children:t.jsx(ae.Tabs,{onClick:l=>{a("status",String(l)),a("page","1")},tabs:n.tabs,defaultActiveKey:n.defaultActiveKey})}),t.jsxs("div",{className:"certificates-container",children:[t.jsx(I.Title,{level:2,children:e("MyProfilePage.MyCertificates")}),t.jsx(Se,{})]})]})})};export{T as CourseStatus,Ye as default};

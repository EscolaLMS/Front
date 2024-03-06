import{an as g,q as h,T as b,f as w,r as n,D as v,i as y,j as s,n as P,m as A,c5 as Q,Z as D,c6 as W,c7 as H,s as N,v as z,c8 as R,ax as q,aK as T,c9 as L,L as S,l as $,ca as O,h as V,o as K}from"./index-Bo8UkscO.js";import{u as C,C as U,a as _,b as G}from"./CourseAgenda-DG6Q95Xo.js";import{R as Y}from"./index-DvNYyE7v.js";import{b as Z,Q as J}from"./questionnaires-_0sODp6F.js";import{u as X}from"./useDownloadCertificate-Gsl9Kioe.js";import"./index-DLruw0EO.js";import"./warning-C5gOjCvf.js";import"./ResponsiveImage-wHQCVyd2.js";import"./Upload-CrRhBbHH.js";const ee={xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},m=(e,t)=>g`
  @media (min-width: ${ee[e]}) {
    ${t}
  }
`,se=h.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`,te=h.div`
  width: 100%;

  ${m("lg",g`
      width: calc(100% - 280px);
    `)}
`,ie=h.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: -3px 0px 6px #0000000b;
  position: absolute;
  top: 0;
  right: ${({$isOpen:e})=>e?"0":"-100vw"};
  transition: right 0.3s;

  ${m("lg",g`
      width: 280px;
      position: unset;
    `)}
`,oe=h.div`
  display: flex;
  flex-direction: column;
`,ne=h.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  box-shadow: -3px 0px 6px #0000000b;

  h2 {
    padding: 0 25px;
  }

  ${m("lg",g`
      h2 {
        padding: 0 12px;
      }
    `)}
`,ae=h.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
`,le=h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;
  box-shadow: 0px 3px 6px #0000000b;
  background-color: #ffffff;
  padding: 0px 0 0 26px;
  gap: 8px;

  ${m("lg",g`
      padding: 0px 26px;
    `)}
`,F=h(b.Title)`
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
  padding: 0 25px;
  font-size: 16px;
  padding: 0;
  margin: 0;
  width: 100%;

  span {
    font-weight: normal;
    margin-right: 8px;
  }
`,re=h.div`
  width: calc(100% - 50px);

  .label-container .percentage-value {
    color: ${({theme:{positive:e}})=>e};
    display: none;
  }

  ${m("lg",g`
      width: 100%;

      .label-container .percentage-value {
        display: unset;
      }
    `)}
`,ce=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: ${({theme:e})=>e.primaryColor};
  width: 50px;
  height: 100%;
  z-index: 10;

  ${m("lg",g`
      display: none;
    `)}
`,de=()=>{const{t:e}=w(),{user:t}=n.useContext(v.EscolaLMSContext),{currentTopic:a,finishedTopicsIds:u,availableTopicsIds:l,courseId:o,currentCourseProgram:i}=C(),r=y();return s.jsxs(oe,{children:[s.jsx(ne,{children:s.jsx(F,{level:2,children:e("CoursePanel.ScheduleTitle")})}),s.jsx(ae,{children:s.jsx(U.CourseAgenda,{areAllTopicsUnlocked:!!(i!=null&&i.authors.find(({id:c})=>{var f;return c===((f=t.value)==null?void 0:f.id)})),lessons:(i==null?void 0:i.lessons)||[],currentTopicId:Number(a==null?void 0:a.id),finishedTopicIds:u??[],onMarkFinished:()=>console.log("onMarkFinished"),onTopicClick:c=>{r.push(`/course/${o}/${c.lesson_id}/${c.id}`)},onCourseFinished:()=>console.log("onCourseFinished"),availableTopicsIds:l??[],isMobile:P})})]})},he=({menuOnClick:e})=>{const{finishedTopicsIds:t,flatTopics:a,currentLessonParentsIds:u,flatLessons:l,currentTopic:o,currentLesson:i}=C(),{t:r}=w(),c=l==null?void 0:l.find(({id:d})=>d===(u==null?void 0:u.at(0))),f=(t??[]).length/(a??[]).length*100;return s.jsxs(le,{children:[s.jsx(re,{children:s.jsx(A.ProgressBar,{currentProgress:f,maxProgress:100,label:s.jsxs(F,{level:2,children:[s.jsx("span",{children:(c==null?void 0:c.title)||(i==null?void 0:i.title)||""})," ",o==null?void 0:o.title]}),variant:"square"})}),s.jsx(ce,{role:"button","aria-label":r("CoursePanel.MenuButtonAria"),onClick:e,children:s.jsx(Q,{})})]})},ue=()=>g`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  opacity: 1;
  animation-name: fadeIn;
  animation-duration: 0.5s;
`,xe=h.main`
  width: auto;
  height: calc(100vh - 215px);
  overflow-y: auto;
  padding: 20px 26px;

  ${ue()}
`,pe=()=>{const{currentTopic:e,isAnyDataLoading:t}=C();return s.jsxs(xe,{children:[s.jsx(_,{topic:e}),t&&s.jsx(D,{})]})};var fe=W();const ge=()=>{const{completeCurrentTopic:e,currentTopic:t,finishedTopicsIds:a,flatTopics:u,courseId:l,currentLesson:o,nextTopic:i,prevTopic:r,availableTopicsIds:c,isNextTopicButtonDisabled:f,isAnyDataLoading:d}=C(),x=y(),p=n.useMemo(()=>(t==null?void 0:t.id)!==void 0&&(a??[]).includes(t==null?void 0:t.id),[a,t==null?void 0:t.id]),j=n.useMemo(()=>{var k;return(t==null?void 0:t.id)!==void 0&&((k=(u??[]).at(-1))==null?void 0:k.id)===(t==null?void 0:t.id)},[t==null?void 0:t.id,u]),M=n.useCallback(()=>{l===void 0||i===void 0||x.push(`/course/${l}/${o==null?void 0:o.id}/${i==null?void 0:i.id}`)},[l,o==null?void 0:o.id,x,i]),E=n.useCallback(()=>{l===void 0||r===void 0||x.push(`/course/${l}/${o==null?void 0:o.id}/${r==null?void 0:r.id}`)},[l,o==null?void 0:o.id,x,r]),B=n.useMemo(()=>!!((i==null?void 0:i.id)!==void 0&&(c!=null&&c.includes(i.id))),[c,i==null?void 0:i.id]);return s.jsx(fe.CourseTopNav,{mobile:P,onFinish:()=>e==null?void 0:e(),onNext:()=>M(),isFinished:p,onPrev:()=>E(),hasPrev:!!r,hasNext:B,isLast:j,isMarkBtnDisabled:f,onCourseFinished:()=>e==null?void 0:e(!0),allButtonsDisabled:d})},Ce=()=>{const[e,t]=n.useState(!1);return s.jsxs(se,{children:[s.jsxs(te,{children:[s.jsx(he,{menuOnClick:()=>t(a=>!a)}),s.jsx(pe,{}),s.jsx(ge,{})]}),s.jsx(ie,{$isOpen:e,children:s.jsx(de,{})})]})},me=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.white};
`,I=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 320px;

  .title {
    font-size: 44px;
    padding: 5px 0;
  }

  .subtitle {
    font-size: 24px;
  }

  .text {
    font-size: 16px;
    padding: 22px 0;
    text-align: center;
  }

  .button {
    width: 265px;
  }

  .icon-container {
    width: 100%;

    svg {
      width: 100%;
    }
  }

  &.certificate-container {
    .subtitle {
      padding: 40px 0 27px 0;
    }

    .text {
      padding: 12px 0 22px 0;
      margin: 0;
    }
  }
`,je=({onNextClick:e})=>{const{t}=w();return s.jsxs(I,{children:[s.jsx("div",{className:"icon-container",children:s.jsx(H,{})}),s.jsx(b.Title,{className:"title",level:1,children:t("CoursePanel.FinishPage.Congrats")}),s.jsx(b.Title,{className:"subtitle",level:2,children:t("CoursePanel.FinishPage.Subtitle")}),s.jsx(N.Text,{className:"text",children:t("CoursePanel.FinishPage.Text")}),s.jsx(z.Button,{className:"button",onClick:e,children:t("Next")})]})},we=({showModal:e,onClose:t,onFinish:a,onSuccesGetQuestionnaires:u})=>{const{fetchQuestionnaires:l,fetchQuestionnaire:o}=n.useContext(v.EscolaLMSContext),[i,r]=n.useState({show:!1,step:0,loading:!0}),[c,f]=n.useState([]),{courseId:d}=C();n.useEffect(()=>{r(p=>({...p,show:e}))},[e]);const x=n.useCallback(()=>{if(r(p=>({...p,show:!1})),i.step<c.length-1){r(j=>({...j,step:j.step+1}));const p=setTimeout(()=>{r(j=>({...j,show:!0}))},500);return()=>clearTimeout(p)}t()},[t,c.length,i.step]);return n.useEffect(()=>{d&&Z({courseId:Number(d),fetchQuestionnaire:o,fetchQuestionnaires:l,onSucces:p=>{u(!!p.length),f(p)},onFinish:()=>r(p=>({...p,loading:!1}))})},[d]),s.jsx(s.Fragment,{children:e&&d&&!!c.length&&!i.loading&&s.jsx(Y,{course:J.COURSE,courseId:Number(d),visible:i.show,onClose:x,questionnaire:c[i.step],onFinish:a})})},be=({certificateTitle:e,courseId:t})=>{const{t:a}=w(),{downloadCertificate:u,loadingId:l}=X(),o=n.useCallback(()=>{u(t,e)},[e,t,u]);return s.jsxs(I,{className:"certificate-container",children:[s.jsx("div",{className:"icon-container",children:s.jsx(R,{})}),s.jsx(q,{className:"subtitle",level:2,children:a("CoursePanel.FinishPage.YourCertificate")}),s.jsx(T,{className:"button",onClick:o,loading:l===t,disabled:l===t,children:a("DownloadCertificate")}),s.jsx(L,{className:"text",children:a("CoursePanel.FinishPage.CertificateText")}),s.jsx(S,{to:$.home,children:s.jsx(T,{mode:"outline",className:"button",children:a("BackToHomePage")})})]})},ve=()=>{const[e,t]=n.useState({showModal:!1,isAnyQuestionnaire:null,showCertificate:!1,certificateTitle:null}),{courseId:a}=C(),{fetchCertificate:u}=n.useContext(v.EscolaLMSContext),l=y(),o=n.useCallback(async()=>{try{const d=await u(Number(a));d.success&&t(x=>({...x,certificateTitle:d.data.title||"Certificate"}))}catch(d){console.log("Error: ",d)}},[a,u]);n.useEffect(()=>{o()},[]);const i=n.useCallback(()=>{t(d=>({...d,showModal:!1,showCertificate:!0}))},[]),r=n.useCallback(d=>{t(x=>({...x,showModal:d}))},[]),c=n.useCallback(()=>{if(e.isAnyQuestionnaire){r(!0);return}if(typeof e.certificateTitle=="string"){i();return}l.push($.myProfile)},[r,l,i,e.certificateTitle,e.isAnyQuestionnaire]),f=n.useCallback(d=>{t(x=>({...x,isAnyQuestionnaire:d}))},[]);return s.jsxs(me,{children:[!e.showCertificate&&s.jsx(je,{onNextClick:c}),e.showCertificate&&s.jsx(be,{certificateTitle:String(e.certificateTitle),courseId:Number(a)}),s.jsx(we,{showModal:e.showModal,onClose:()=>r(!1),onFinish:i,onSuccesGetQuestionnaires:f})]})},ye=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme:{gray1:e}})=>e};
  color: ${({theme:{white:e}})=>e};
  padding: 0 0 0 26px;
  height: 50px;

  picture {
    margin: 0 10px;
    color: ${({theme:{gray4:e}})=>e};
  }

  ${m("lg",g`
      padding: 0 26px;
    `)}
`,Pe=h(b.Title)`
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
  padding: 0 25px;
  font-size: 16px;
  color: ${({theme:{gray4:e}})=>e};
  padding: 0;

  > * {
    color: ${({theme:{gray4:e}})=>e};
  }

  span {
    font-weight: normal;
    margin-right: 8px;
  }
`,$e=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: color 150ms ease-in-out;
  padding: 0 12px;

  svg {
    color: #afafaf;
  }

  &:hover {
    > * {
      transition: color 150ms ease-in-out;
      color: ${({theme:{gray4:e}})=>e};
    }
  }

  ${m("lg",g`
      padding: 0 26px;
    `)}
`,ke=h(N.Text)`
  color: ${({theme:{gray2:e}})=>e};
  margin: 0;
  line-height: 0;
`,Te=()=>{const{currentCourseProgram:e}=C(),{t}=w();return s.jsxs(ye,{children:[s.jsxs(Pe,{children:[s.jsx("span",{children:t("CoursePanel.Course",{defaultValue:"Kurs"})})," ",e==null?void 0:e.title]}),s.jsx(S,{to:$.myProfile,children:s.jsxs($e,{children:[!P&&s.jsx(ke,{children:t("CoursePanel.Leave")}),s.jsx(O,{})]})})]})},Ne=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({theme:e})=>e.gray4};
  z-index: 1000;
`,Se=()=>{const{showFinish:e}=C();return s.jsxs(Ne,{children:[s.jsx(Te,{}),!e&&s.jsx(Ce,{}),e&&s.jsx(ve,{})]})},Fe=()=>s.jsx(G,{children:s.jsx(Se,{})}),ze=()=>{var t;const{program:e}=n.useContext(V.EscolaLMSContext);return s.jsx(K,{metaTitle:((t=e.value)==null?void 0:t.title)||"Course",children:s.jsx(Fe,{})})};export{ze as default};

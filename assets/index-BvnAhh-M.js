import{an as g,q as u,T as w,f as b,r as a,D as v,i as y,j as s,n as P,m as E,c6 as A,Z as B,c7 as Q,c8 as D,s as k,v as W,c9 as H,ax as z,aK as T,ca as R,L as N,l as $,cb as q,cc as L,h as O,o as _}from"./index-DdHAFv7l.js";import{u as C,C as V,a as K,b as U}from"./CourseAgenda-cCSt_tLg.js";import{R as G}from"./index-5chsB0GR.js";import{b as Y,Q as Z}from"./questionnaires-qjpIslVN.js";import{u as J}from"./useDownloadCertificate-DoajWcWj.js";import"./index-Def-oRoG.js";import"./warning-Cfon6nUU.js";import"./ResponsiveImage-C5aumxut.js";import"./Upload-BemetLVC.js";const X={xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},m=(e,t)=>g`
  @media (min-width: ${X[e]}) {
    ${t}
  }
`,ee=u.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`,se=u.div`
  width: 100%;

  ${m("lg",g`
      width: calc(100% - 280px);
    `)}
`,te=u.div`
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
`,ie=u.div`
  display: flex;
  flex-direction: column;
`,oe=u.div`
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
`,ne=u.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
`,ae=u.div`
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
`,S=u(w.Title)`
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
`,re=u.div`
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
`,le=u.div`
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
`,ce=()=>{const{t:e}=b(),{user:t}=a.useContext(v.EscolaLMSContext),{currentTopic:c,finishedTopicsIds:l,availableTopicsIds:o,courseId:n,currentCourseProgram:i}=C(),d=y();return s.jsxs(ie,{children:[s.jsx(oe,{children:s.jsx(S,{level:2,children:e("CoursePanel.ScheduleTitle")})}),s.jsx(ne,{children:s.jsx(V.CourseAgenda,{areAllTopicsUnlocked:!!(i!=null&&i.authors.find(({id:h})=>{var f;return h===((f=t.value)==null?void 0:f.id)})),lessons:(i==null?void 0:i.lessons)||[],currentTopicId:Number(c==null?void 0:c.id),finishedTopicIds:l??[],onMarkFinished:()=>console.log("onMarkFinished"),onTopicClick:h=>{d.push(`/course/${n}/${h.lesson_id}/${h.id}`)},onCourseFinished:()=>console.log("onCourseFinished"),availableTopicsIds:o??[],isMobile:P})})]})},de=({menuOnClick:e})=>{const{finishedTopicsIds:t,flatTopics:c,currentLessonParentsIds:l,flatLessons:o,currentTopic:n,currentLesson:i}=C(),{t:d}=b(),h=o==null?void 0:o.find(({id:r})=>r===(l==null?void 0:l.at(0))),f=(t??[]).length/(c??[]).length*100;return s.jsxs(ae,{children:[s.jsx(re,{children:s.jsx(E.ProgressBar,{currentProgress:f,maxProgress:100,label:s.jsxs(S,{level:2,children:[s.jsx("span",{children:(h==null?void 0:h.title)||(i==null?void 0:i.title)||""})," ",n==null?void 0:n.title]}),variant:"square"})}),s.jsx(le,{role:"button","aria-label":d("CoursePanel.MenuButtonAria"),onClick:e,children:s.jsx(A,{})})]})},ue=()=>g`
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
`,he=u.main`
  width: auto;
  height: calc(100vh - 215px);
  overflow-y: auto;
  padding: 20px 26px;

  ${ue()}
`,xe=()=>{const{currentTopic:e,isAnyDataLoading:t}=C();return s.jsxs(he,{children:[s.jsx(K,{topic:e}),t&&s.jsx(B,{})]})};var pe=Q();const fe=()=>{const{completeCurrentTopic:e,currentTopic:t,finishedTopicsIds:c,courseId:l,currentLesson:o,nextTopic:n,prevTopic:i,availableTopicsIds:d,isNextTopicButtonDisabled:h,isAnyDataLoading:f,isLastTopic:r}=C(),x=y(),p=a.useMemo(()=>(t==null?void 0:t.id)!==void 0&&(c??[]).includes(t==null?void 0:t.id),[c,t==null?void 0:t.id]),j=a.useCallback(()=>{l===void 0||n===void 0||x.push(`/course/${l}/${o==null?void 0:o.id}/${n==null?void 0:n.id}`)},[l,o==null?void 0:o.id,x,n]),F=a.useCallback(()=>{l===void 0||i===void 0||x.push(`/course/${l}/${o==null?void 0:o.id}/${i==null?void 0:i.id}`)},[l,o==null?void 0:o.id,x,i]),M=a.useMemo(()=>!!((n==null?void 0:n.id)!==void 0&&(d!=null&&d.includes(n.id))),[d,n==null?void 0:n.id]);return s.jsx(pe.CourseTopNav,{mobile:P,onFinish:()=>e==null?void 0:e(),onNext:()=>j(),isFinished:p,onPrev:()=>F(),hasPrev:!!i,hasNext:M,isLast:r,isMarkBtnDisabled:h,onCourseFinished:()=>e==null?void 0:e(!0),allButtonsDisabled:f})},ge=()=>{const[e,t]=a.useState(!1);return s.jsxs(ee,{children:[s.jsxs(se,{children:[s.jsx(de,{menuOnClick:()=>t(c=>!c)}),s.jsx(xe,{}),s.jsx(fe,{})]}),s.jsx(te,{$isOpen:e,children:s.jsx(ce,{})})]})},Ce=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.white};
`,I=u.div`
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
`,me=({onNextClick:e})=>{const{t}=b();return s.jsxs(I,{children:[s.jsx("div",{className:"icon-container",children:s.jsx(D,{})}),s.jsx(w.Title,{className:"title",level:1,children:t("CoursePanel.FinishPage.Congrats")}),s.jsx(w.Title,{className:"subtitle",level:2,children:t("CoursePanel.FinishPage.Subtitle")}),s.jsx(k.Text,{className:"text",children:t("CoursePanel.FinishPage.Text")}),s.jsx(W.Button,{className:"button",onClick:e,children:t("Next")})]})},je=({showModal:e,onClose:t,onFinish:c,onSuccesGetQuestionnaires:l})=>{const{fetchQuestionnaires:o,fetchQuestionnaire:n}=a.useContext(v.EscolaLMSContext),[i,d]=a.useState({show:!1,step:0,loading:!0}),[h,f]=a.useState([]),{courseId:r}=C();a.useEffect(()=>{d(p=>({...p,show:e}))},[e]);const x=a.useCallback(()=>{if(d(p=>({...p,show:!1})),i.step<h.length-1){d(j=>({...j,step:j.step+1}));const p=setTimeout(()=>{d(j=>({...j,show:!0}))},500);return()=>clearTimeout(p)}t()},[t,h.length,i.step]);return a.useEffect(()=>{r&&Y({courseId:Number(r),fetchQuestionnaire:n,fetchQuestionnaires:o,onSucces:p=>{l(!!p.length),f(p)},onFinish:()=>d(p=>({...p,loading:!1}))})},[r]),s.jsx(s.Fragment,{children:e&&r&&!!h.length&&!i.loading&&s.jsx(G,{course:Z.COURSE,courseId:Number(r),visible:i.show,onClose:x,questionnaire:h[i.step],onFinish:c})})},be=({certificates:e})=>{const{t}=b(),{downloadCertificate:c,loadingId:l}=J(),o=a.useCallback(()=>{e.forEach(({id:n,title:i})=>{c(n,i)})},[e,c]);return s.jsxs(I,{className:"certificate-container",children:[s.jsx("div",{className:"icon-container",children:s.jsx(H,{})}),s.jsx(z,{className:"subtitle",level:2,children:t("CoursePanel.FinishPage.YourCertificate")}),s.jsx(T,{className:"button",onClick:o,loading:l!==-1,disabled:l!==-1,children:t("DownloadCertificate")}),s.jsx(R,{className:"text",children:t("CoursePanel.FinishPage.CertificateText")}),s.jsx(N,{to:$.home,children:s.jsx(T,{mode:"outline",className:"button",children:t("BackToHomePage")})})]})},we=()=>{const[e,t]=a.useState({showModal:!1,isAnyQuestionnaire:null,showCertificate:!1,certificates:null}),{courseId:c}=C(),{fetchCertificates:l}=a.useContext(v.EscolaLMSContext),o=y(),n=a.useCallback(async()=>{try{const r=await l({assignable_type:q.CertificateAssignableTypes.Course,assignable_id:Number(c)});r&&r.success&&t(x=>({...x,certificates:r.data}))}catch(r){console.log("Error: ",r)}},[c,l]);a.useEffect(()=>{n()},[]);const i=a.useCallback(()=>{t(r=>({...r,showModal:!1,showCertificate:!0}))},[]),d=a.useCallback(r=>{t(x=>({...x,showModal:r}))},[]),h=a.useCallback(()=>{if(e.isAnyQuestionnaire){d(!0);return}if(e.certificates&&e.certificates.length>0){i();return}o.push($.myProfile)},[d,o,i,e.certificates,e.isAnyQuestionnaire]),f=a.useCallback(r=>{t(x=>({...x,isAnyQuestionnaire:r}))},[]);return s.jsxs(Ce,{children:[!e.showCertificate&&s.jsx(me,{onNextClick:h}),e.showCertificate&&e.certificates&&s.jsx(be,{certificates:e.certificates}),s.jsx(je,{showModal:e.showModal,onClose:()=>d(!1),onFinish:i,onSuccesGetQuestionnaires:f})]})},ve=u.header`
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
`,ye=u(w.Title)`
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
`,Pe=u.div`
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
`,$e=u(k.Text)`
  color: ${({theme:{gray2:e}})=>e};
  margin: 0;
  line-height: 0;
`,Te=()=>{const{currentCourseProgram:e}=C(),{t}=b();return s.jsxs(ve,{children:[s.jsxs(ye,{children:[s.jsx("span",{children:t("CoursePanel.Course",{defaultValue:"Kurs"})})," ",e==null?void 0:e.title]}),s.jsx(N,{to:$.myProfile,children:s.jsxs(Pe,{children:[!P&&s.jsx($e,{children:t("CoursePanel.Leave")}),s.jsx(L,{})]})})]})},ke=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({theme:e})=>e.gray4};
  z-index: 1000;
`,Ne=()=>{const{showFinish:e}=C();return s.jsxs(ke,{children:[s.jsx(Te,{}),!e&&s.jsx(ge,{}),e&&s.jsx(we,{})]})},Se=()=>s.jsx(U,{children:s.jsx(Ne,{})}),He=()=>{var t;const{program:e}=a.useContext(O.EscolaLMSContext);return s.jsx(_,{metaTitle:((t=e.value)==null?void 0:t.title)||"Course",children:s.jsx(Se,{})})};export{He as default};

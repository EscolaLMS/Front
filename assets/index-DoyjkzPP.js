import{an as g,q as h,T as w,f as b,r as n,D as v,i as y,j as s,n as P,m as B,c5 as Q,Z as D,c6 as W,c7 as H,s as S,v as z,c8 as R,ax as q,aK as N,c9 as L,L as T,l as $,ca as O,cb as _,h as V,o as K}from"./index-Bjk_45MO.js";import{u as C,C as U,a as G,b as Y}from"./CourseAgenda-DA7epH6Y.js";import{R as Z}from"./index-Bz9IQ-KJ.js";import{b as J,Q as X}from"./questionnaires-BlwwmS39.js";import{u as ee}from"./useDownloadCertificate-CojJpn-m.js";import"./index-BgAgt_Xs.js";import"./warning-CKk5dc80.js";import"./ResponsiveImage-wYxl3kWJ.js";import"./Upload-DMNCn73R.js";const se={xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},m=(e,t)=>g`
  @media (min-width: ${se[e]}) {
    ${t}
  }
`,te=h.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`,ie=h.div`
  width: 100%;

  ${m("lg",g`
      width: calc(100% - 280px);
    `)}
`,oe=h.div`
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
`,ne=h.div`
  display: flex;
  flex-direction: column;
`,ae=h.div`
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
`,le=h.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
`,re=h.div`
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
`,I=h(w.Title)`
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
`,ce=h.div`
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
`,de=h.div`
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
`,he=()=>{const{t:e}=b(),{user:t}=n.useContext(v.EscolaLMSContext),{currentTopic:d,finishedTopicsIds:u,availableTopicsIds:c,courseId:o,currentCourseProgram:i}=C(),l=y();return s.jsxs(ne,{children:[s.jsx(ae,{children:s.jsx(I,{level:2,children:e("CoursePanel.ScheduleTitle")})}),s.jsx(le,{children:s.jsx(U.CourseAgenda,{areAllTopicsUnlocked:!!(i!=null&&i.authors.find(({id:r})=>{var f;return r===((f=t.value)==null?void 0:f.id)})),lessons:(i==null?void 0:i.lessons)||[],currentTopicId:Number(d==null?void 0:d.id),finishedTopicIds:u??[],onMarkFinished:()=>console.log("onMarkFinished"),onTopicClick:r=>{l.push(`/course/${o}/${r.lesson_id}/${r.id}`)},onCourseFinished:()=>console.log("onCourseFinished"),availableTopicsIds:c??[],isMobile:P})})]})},ue=({menuOnClick:e})=>{const{finishedTopicsIds:t,flatTopics:d,currentLessonParentsIds:u,flatLessons:c,currentTopic:o,currentLesson:i}=C(),{t:l}=b(),r=c==null?void 0:c.find(({id:a})=>a===(u==null?void 0:u.at(0))),f=(t??[]).length/(d??[]).length*100;return s.jsxs(re,{children:[s.jsx(ce,{children:s.jsx(B.ProgressBar,{currentProgress:f,maxProgress:100,label:s.jsxs(I,{level:2,children:[s.jsx("span",{children:(r==null?void 0:r.title)||(i==null?void 0:i.title)||""})," ",o==null?void 0:o.title]}),variant:"square"})}),s.jsx(de,{role:"button","aria-label":l("CoursePanel.MenuButtonAria"),onClick:e,children:s.jsx(Q,{})})]})},xe=()=>g`
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
`,pe=h.main`
  width: auto;
  height: calc(100vh - 215px);
  overflow-y: auto;
  padding: 20px 26px;

  ${xe()}
`,fe=()=>{const{currentTopic:e,isAnyDataLoading:t}=C();return s.jsxs(pe,{children:[s.jsx(G,{topic:e}),t&&s.jsx(D,{})]})};var ge=W();const Ce=()=>{const{completeCurrentTopic:e,currentTopic:t,finishedTopicsIds:d,flatTopics:u,courseId:c,currentLesson:o,nextTopic:i,prevTopic:l,availableTopicsIds:r,isNextTopicButtonDisabled:f,isAnyDataLoading:a}=C(),x=y(),p=n.useMemo(()=>(t==null?void 0:t.id)!==void 0&&(d??[]).includes(t==null?void 0:t.id),[d,t==null?void 0:t.id]),j=n.useMemo(()=>{var k;return(t==null?void 0:t.id)!==void 0&&((k=(u??[]).at(-1))==null?void 0:k.id)===(t==null?void 0:t.id)},[t==null?void 0:t.id,u]),M=n.useCallback(()=>{c===void 0||i===void 0||x.push(`/course/${c}/${o==null?void 0:o.id}/${i==null?void 0:i.id}`)},[c,o==null?void 0:o.id,x,i]),E=n.useCallback(()=>{c===void 0||l===void 0||x.push(`/course/${c}/${o==null?void 0:o.id}/${l==null?void 0:l.id}`)},[c,o==null?void 0:o.id,x,l]),A=n.useMemo(()=>!!((i==null?void 0:i.id)!==void 0&&(r!=null&&r.includes(i.id))),[r,i==null?void 0:i.id]);return s.jsx(ge.CourseTopNav,{mobile:P,onFinish:()=>e==null?void 0:e(),onNext:()=>M(),isFinished:p,onPrev:()=>E(),hasPrev:!!l,hasNext:A,isLast:j,isMarkBtnDisabled:f,onCourseFinished:()=>e==null?void 0:e(!0),allButtonsDisabled:a})},me=()=>{const[e,t]=n.useState(!1);return s.jsxs(te,{children:[s.jsxs(ie,{children:[s.jsx(ue,{menuOnClick:()=>t(d=>!d)}),s.jsx(fe,{}),s.jsx(Ce,{})]}),s.jsx(oe,{$isOpen:e,children:s.jsx(he,{})})]})},je=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.white};
`,F=h.div`
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
`,be=({onNextClick:e})=>{const{t}=b();return s.jsxs(F,{children:[s.jsx("div",{className:"icon-container",children:s.jsx(H,{})}),s.jsx(w.Title,{className:"title",level:1,children:t("CoursePanel.FinishPage.Congrats")}),s.jsx(w.Title,{className:"subtitle",level:2,children:t("CoursePanel.FinishPage.Subtitle")}),s.jsx(S.Text,{className:"text",children:t("CoursePanel.FinishPage.Text")}),s.jsx(z.Button,{className:"button",onClick:e,children:t("Next")})]})},we=({showModal:e,onClose:t,onFinish:d,onSuccesGetQuestionnaires:u})=>{const{fetchQuestionnaires:c,fetchQuestionnaire:o}=n.useContext(v.EscolaLMSContext),[i,l]=n.useState({show:!1,step:0,loading:!0}),[r,f]=n.useState([]),{courseId:a}=C();n.useEffect(()=>{l(p=>({...p,show:e}))},[e]);const x=n.useCallback(()=>{if(l(p=>({...p,show:!1})),i.step<r.length-1){l(j=>({...j,step:j.step+1}));const p=setTimeout(()=>{l(j=>({...j,show:!0}))},500);return()=>clearTimeout(p)}t()},[t,r.length,i.step]);return n.useEffect(()=>{a&&J({courseId:Number(a),fetchQuestionnaire:o,fetchQuestionnaires:c,onSucces:p=>{u(!!p.length),f(p)},onFinish:()=>l(p=>({...p,loading:!1}))})},[a]),s.jsx(s.Fragment,{children:e&&a&&!!r.length&&!i.loading&&s.jsx(Z,{course:X.COURSE,courseId:Number(a),visible:i.show,onClose:x,questionnaire:r[i.step],onFinish:d})})},ve=({certificates:e})=>{const{t}=b(),{downloadCertificate:d,loadingId:u}=ee(),c=n.useCallback(()=>{e.forEach(({id:o,title:i})=>{d(o,i)})},[e,d]);return s.jsxs(F,{className:"certificate-container",children:[s.jsx("div",{className:"icon-container",children:s.jsx(R,{})}),s.jsx(q,{className:"subtitle",level:2,children:t("CoursePanel.FinishPage.YourCertificate")}),s.jsx(N,{className:"button",onClick:c,loading:u!==-1,disabled:u!==-1,children:t("DownloadCertificate")}),s.jsx(L,{className:"text",children:t("CoursePanel.FinishPage.CertificateText")}),s.jsx(T,{to:$.home,children:s.jsx(N,{mode:"outline",className:"button",children:t("BackToHomePage")})})]})},ye=()=>{const[e,t]=n.useState({showModal:!1,isAnyQuestionnaire:null,showCertificate:!1,certificates:null}),{courseId:d}=C(),{fetchCertificates:u}=n.useContext(v.EscolaLMSContext),c=y(),o=n.useCallback(async()=>{try{const a=await u({assignable_type:O.CertificateAssignableTypes.Course,assignable_id:Number(d)});a&&a.success&&t(x=>({...x,certificates:a.data}))}catch(a){console.log("Error: ",a)}},[d,u]);n.useEffect(()=>{o()},[]);const i=n.useCallback(()=>{t(a=>({...a,showModal:!1,showCertificate:!0}))},[]),l=n.useCallback(a=>{t(x=>({...x,showModal:a}))},[]),r=n.useCallback(()=>{if(e.isAnyQuestionnaire){l(!0);return}if(e.certificates&&e.certificates.length>0){i();return}c.push($.myProfile)},[l,c,i,e.certificates,e.isAnyQuestionnaire]),f=n.useCallback(a=>{t(x=>({...x,isAnyQuestionnaire:a}))},[]);return s.jsxs(je,{children:[!e.showCertificate&&s.jsx(be,{onNextClick:r}),e.showCertificate&&e.certificates&&s.jsx(ve,{certificates:e.certificates}),s.jsx(we,{showModal:e.showModal,onClose:()=>l(!1),onFinish:i,onSuccesGetQuestionnaires:f})]})},Pe=h.header`
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
`,$e=h(w.Title)`
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
`,ke=h.div`
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
`,Ne=h(S.Text)`
  color: ${({theme:{gray2:e}})=>e};
  margin: 0;
  line-height: 0;
`,Se=()=>{const{currentCourseProgram:e}=C(),{t}=b();return s.jsxs(Pe,{children:[s.jsxs($e,{children:[s.jsx("span",{children:t("CoursePanel.Course",{defaultValue:"Kurs"})})," ",e==null?void 0:e.title]}),s.jsx(T,{to:$.myProfile,children:s.jsxs(ke,{children:[!P&&s.jsx(Ne,{children:t("CoursePanel.Leave")}),s.jsx(_,{})]})})]})},Te=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({theme:e})=>e.gray4};
  z-index: 1000;
`,Ie=()=>{const{showFinish:e}=C();return s.jsxs(Te,{children:[s.jsx(Se,{}),!e&&s.jsx(me,{}),e&&s.jsx(ye,{})]})},Fe=()=>s.jsx(Y,{children:s.jsx(Ie,{})}),Re=()=>{var t;const{program:e}=n.useContext(V.EscolaLMSContext);return s.jsx(K,{metaTitle:((t=e.value)==null?void 0:t.title)||"Course",children:s.jsx(Fe,{})})};export{Re as default};

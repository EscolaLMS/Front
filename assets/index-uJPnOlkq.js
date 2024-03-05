import{q as a,r as p,D as b,j as s,S as I,an as x,T as w,f as C,i as y,n as v,m as F,c5 as N,Z as E,c6 as A,s as B,L as W,l as _,c7 as H,h as Q,o as q}from"./index-BwDDCa5l.js";import{u as g,C as z,a as D,b as R}from"./CourseAgenda-DsB19i2S.js";import{R as L}from"./index-CdiRyItl.js";import{b as O,Q as V}from"./questionnaires-B0SMBGXj.js";import"./index-BFtnUeGh.js";import"./warning-BmYsiiaZ.js";import"./ResponsiveImage-BfAhZdZG.js";import"./Upload-BclhsyIC.js";const U=a.div`
  .course-program-finish-modal {
    font-family: "Mulish", sans-serif;
    background: #f8f8f8;
    inset: 0;
    border: 1px solid #157493;
    padding: 16px;
    display: grid;
    place-content: center;
    gap: 16px;
    height: 100%;
    max-height: 500px;

    p {
      text-align: center;
      margin: 0;
    }

    &__title {
      font-size: 24px;
      font-weight: 500;
    }

    &__paragraph {
      font-size: 18px;
    }

    &__buttons {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
      justify-content: center;
      margin-top: 8px;
    }
  }
`,K=({courseId:e})=>{const[i,l]=p.useState({show:!1,step:0,loading:!1}),[d,r]=p.useState([]),{fetchQuestionnaires:n,fetchQuestionnaire:o}=p.useContext(b.EscolaLMSContext),c=p.useCallback(()=>{if(l(t=>({...t,show:!1})),i.step<d.length-1){l(h=>({...h,step:h.step+1}));const t=setTimeout(()=>{l(h=>({...h,show:!0}))},500);return()=>clearTimeout(t)}},[d,i.step]);return p.useEffect(()=>{l(t=>({...t,loading:!0})),e&&O({courseId:e,fetchQuestionnaire:o,fetchQuestionnaires:n,onSucces:t=>{r(t)},onFinish:()=>l(t=>({...t,loading:!1}))})},[e]),s.jsx(U,{children:s.jsx("div",{className:"course-program-finish-modal",children:i.loading?s.jsx(I.Spin,{}):e&&!!d.length&&s.jsx(L,{course:V.COURSE,courseId:e,visible:!0,onClose:()=>c(),questionnaire:d[i.step]})})})},Z={xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},u=(e,i)=>x`
  @media (min-width: ${Z[e]}) {
    ${i}
  }
`,G=a.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`,J=a.div`
  width: 100%;

  ${u("lg",x`
      width: calc(100% - 280px);
    `)}
`,X=a.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: -3px 0px 6px #0000000b;
  position: absolute;
  top: 0;
  right: ${({$isOpen:e})=>e?"0":"-100vw"};
  transition: right 0.3s;

  ${u("lg",x`
      width: 280px;
      position: unset;
    `)}
`,Y=a.div`
  display: flex;
  flex-direction: column;
`,ee=a.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  box-shadow: -3px 0px 6px #0000000b;

  h2 {
    padding: 0 25px;
  }

  ${u("lg",x`
      h2 {
        padding: 0 12px;
      }
    `)}
`,se=a.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
`,ie=a.div`
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

  ${u("lg",x`
      padding: 0px 26px;
    `)}
`,$=a(w.Title)`
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
`,oe=a.div`
  width: calc(100% - 50px);

  .label-container .percentage-value {
    color: ${({theme:{positive:e}})=>e};
    display: none;
  }

  ${u("lg",x`
      width: 100%;

      .label-container .percentage-value {
        display: unset;
      }
    `)}
`,te=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: ${({theme:e})=>e.primaryColor};
  width: 50px;
  height: 100%;
  z-index: 10;

  ${u("lg",x`
      display: none;
    `)}
`,ne=()=>{const{t:e}=C(),{user:i}=p.useContext(b.EscolaLMSContext),{currentTopic:l,finishedTopicsIds:d,availableTopicsIds:r,courseId:n,currentCourseProgram:o}=g(),c=y();return s.jsxs(Y,{children:[s.jsx(ee,{children:s.jsx($,{level:2,children:e("CoursePanel.ScheduleTitle")})}),s.jsx(se,{children:s.jsx(z.CourseAgenda,{areAllTopicsUnlocked:!!(o!=null&&o.authors.find(({id:t})=>{var h;return t===((h=i.value)==null?void 0:h.id)})),lessons:(o==null?void 0:o.lessons)||[],currentTopicId:Number(l==null?void 0:l.id),finishedTopicIds:d??[],onMarkFinished:()=>console.log("onMarkFinished"),onTopicClick:t=>{c.push(`/course/${n}/${t.lesson_id}/${t.id}`)},onCourseFinished:()=>console.log("onCourseFinished"),availableTopicsIds:r??[],isMobile:v})})]})},ae=({menuOnClick:e})=>{const{finishedTopicsIds:i,flatTopics:l,currentLessonParentsIds:d,flatLessons:r,currentTopic:n,currentLesson:o}=g(),{t:c}=C(),t=r==null?void 0:r.find(({id:m})=>m===(d==null?void 0:d.at(0))),h=(i??[]).length/(l??[]).length*100;return s.jsxs(ie,{children:[s.jsx(oe,{children:s.jsx(F.ProgressBar,{currentProgress:h,maxProgress:100,label:s.jsxs($,{level:2,children:[s.jsx("span",{children:(t==null?void 0:t.title)||(o==null?void 0:o.title)||""})," ",n==null?void 0:n.title]}),variant:"square"})}),s.jsx(te,{role:"button","aria-label":c("CoursePanel.MenuButtonAria"),onClick:e,children:s.jsx(N,{})})]})},le=()=>x`
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
`,re=a.main`
  width: auto;
  height: calc(100vh - 215px);
  overflow-y: auto;
  padding: 20px 26px;

  ${le()}
`,de=()=>{const{currentTopic:e,isAnyDataLoading:i}=g();return s.jsxs(re,{children:[s.jsx(D,{topic:e}),i&&s.jsx(E,{})]})};var pe=A();const ce=()=>{const{completeCurrentTopic:e,currentTopic:i,finishedTopicsIds:l,flatTopics:d,courseId:r,currentLesson:n,nextTopic:o,prevTopic:c,availableTopicsIds:t,isNextTopicButtonDisabled:h,isAnyDataLoading:m}=g(),f=y(),S=p.useMemo(()=>(i==null?void 0:i.id)!==void 0&&(l??[]).includes(i==null?void 0:i.id),[l,i==null?void 0:i.id]),P=p.useMemo(()=>{var j;return(i==null?void 0:i.id)!==void 0&&((j=(d??[]).at(-1))==null?void 0:j.id)===(i==null?void 0:i.id)},[i==null?void 0:i.id,d]),k=p.useCallback(()=>{r===void 0||o===void 0||f.push(`/course/${r}/${n==null?void 0:n.id}/${o==null?void 0:o.id}`)},[r,n==null?void 0:n.id,f,o]),M=p.useCallback(()=>{r===void 0||c===void 0||f.push(`/course/${r}/${n==null?void 0:n.id}/${c==null?void 0:c.id}`)},[r,n==null?void 0:n.id,f,c]),T=p.useMemo(()=>!!((o==null?void 0:o.id)!==void 0&&(t!=null&&t.includes(o.id))),[t,o==null?void 0:o.id]);return s.jsx(pe.CourseTopNav,{mobile:v,onFinish:()=>e==null?void 0:e(!0),onNext:()=>k(),isFinished:S,onPrev:()=>M(),hasPrev:!!c,hasNext:T,isLast:P,isMarkBtnDisabled:h,onCourseFinished:()=>e==null?void 0:e(),allButtonsDisabled:m})},he=()=>{const[e,i]=p.useState(!1);return s.jsxs(G,{children:[s.jsxs(J,{children:[s.jsx(ae,{menuOnClick:()=>i(l=>!l)}),s.jsx(de,{}),s.jsx(ce,{})]}),s.jsx(X,{$isOpen:e,children:s.jsx(ne,{})})]})},xe=a.header`
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

  ${u("lg",x`
      padding: 0 26px;
    `)}
`,ue=a(w.Title)`
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
`,ge=a.div`
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

  ${u("lg",x`
      padding: 0 26px;
    `)}
`,fe=a(B.Text)`
  color: ${({theme:{gray2:e}})=>e};
  margin: 0;
  line-height: 0;
`,me=()=>{const{currentCourseProgram:e}=g(),{t:i}=C();return s.jsxs(xe,{children:[s.jsxs(ue,{children:[s.jsx("span",{children:i("CoursePanel.Course",{defaultValue:"Kurs"})})," ",e==null?void 0:e.title]}),s.jsx(W,{to:_.myProfile,children:s.jsxs(ge,{children:[!v&&s.jsx(fe,{children:i("CoursePanel.Leave")}),s.jsx(H,{})]})})]})},Ce=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({theme:e})=>e.gray4};
  z-index: 2000;
`,ve=()=>{const{showFinishModal:e,courseId:i}=g();return s.jsxs(Ce,{children:[s.jsx(me,{}),s.jsx(he,{}),e&&s.jsx(K,{courseId:Number(i)})]})},je=()=>s.jsx(R,{children:s.jsx(ve,{})}),Te=()=>{var i;const{program:e}=p.useContext(Q.EscolaLMSContext);return s.jsx(q,{metaTitle:((i=e.value)==null?void 0:i.title)||"Course",children:s.jsx(je,{})})};export{Te as default};

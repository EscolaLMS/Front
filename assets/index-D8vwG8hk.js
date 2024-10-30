import{q as x,j as t,n as y,ae as B,r as l,h as w,K as $,o as C,$ as P,cb as L,ap as f,cc as S,cd as z,T as v,k,ce as W,cf as O,cg as V,x as N,y as D,ch as Q,aG as R,aF as T,ci as q,L as _,m as I,c5 as H,cj as U,i as K,v as G}from"./index-DMEaDbL2.js";import{u as m,C as Y,a as J,b as X}from"./CourseAgenda-2k_CbhRJ.js";import{R as Z}from"./index-B_8aLlci.js";import{b as ee,Q as te}from"./questionnaires-D-ydJBRr.js";import{u as se}from"./useDownloadCertificate-BvhKcDUc.js";import"./index-CrtvwOQ3.js";import"./warning-bWiOVVW-.js";import"./Upload-CwZUl6Lh.js";const ie=x.div`
  border-radius: ${({$isAI:e})=>e?"15px 15px 15px 0px":"15px 15px 0px 15px"};
  background-color: ${({theme:e,$isAI:s})=>s?e.gray4:"rgba(238, 49, 47, 0.07)"};
  padding: 12px 17px;
  width: 80%;
  max-width: 260px;
  margin-bottom: 10px;
  margin-left: ${({$isAI:e})=>e?"0":"auto"};
`,oe=({message:e,isAI:s=!1})=>t.jsx(ie,{$isAI:s,children:t.jsx(y.Text,{size:"16",children:e})}),ne=x.div`
  border-radius: 22px 21px 0px 0px;
  min-width: ${({$isMobile:e})=>e?"100%":"380px"};
  box-shadow: 0px 0px 15px #00000029;
  height: 100%;

  .chatwindow__header {
    background-color: ${({theme:e})=>e.primaryColor};
    padding: 13px 25px;
    border-radius: 22px 21px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${({theme:e})=>e.white};
      margin-bottom: 0;
    }

    &--close {
      all: unset;
      color: ${({theme:e})=>e.white};
      cursor: pointer;
      min-height: 20px;
      span {
        display: block;
        width: 17px;
        height: 2px;
        background: ${({theme:e})=>e.white};
      }
    }
  }
  .chatwindow__content {
    padding: 12px;
    min-height: 200px;
    height: fit-content;

    background-color: ${({theme:e})=>e.white};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &--messages {
      max-height: 50vh;
      overflow-y: auto;
      &__empty {
        text-align: center;
      }
    }
    &--input {
      border: 1px solid ${({theme:e})=>e.gray3};
      padding: 10px 13px;
      border-radius: 21px;
      background: ${({theme:e})=>e.gray4} 0% 0% no-repeat padding-box;
      display: flex;
      position: relative;

      input {
        all: unset;
        font-family: ${({theme:e})=>e.font};
        font-size: 14px;
        width: 100%;
        padding-right: 34px;
      }

      button {
        all: unset;
        cursor: pointer;
        background: ${({theme:e})=>e.white};
        border-radius: 50%;
        width: 34px;
        height: 34px;
        position: absolute;
        top: 1px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &--error {
      text-align: center;
    }
  }
`,ae=B;async function re(e,s){try{const i=await fetch(e,s),o=await i.json();return{data:o.data,message:o.message,status:i.status}}catch(i){return{data:null,status:500,message:i.message}}}const le=async(e,s,i)=>re(`${ae}/api/yepp-chat/${e}`,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}}),ce={isLoading:!1,messages:[],inputValue:"",error:"",conversationId:null},de=(e,s)=>{if(!s)throw new Error("Token is required");const[i,o]=l.useState(ce),{t:a}=w(),c=l.useCallback(n=>{o(h=>({...h,error:n,isLoading:!1}))},[o]),r=l.useCallback(async()=>{const n=i.conversationId?{question:i.inputValue,conversation_id:i.conversationId}:{question:i.inputValue};return s?await le(e,n,s):{status:500,message:a("UnexpectedError"),data:null}},[i,e,s,a]),u=l.useCallback(n=>{o(h=>({...h,error:"",isLoading:!1,messages:[...h.messages,{message:h.inputValue},{message:n.answer??h.inputValue,isAi:!!n.conversation_id}],inputValue:"",conversationId:h.conversationId??n.conversation_id??null}))},[o]),p=l.useCallback(n=>{o(h=>({...h,isLoading:!1,error:n}))},[o]),g=l.useCallback(()=>{o(n=>({...n,isLoading:!1,error:a("UnexpectedError")}))},[o,a]),d=l.useCallback(async()=>{if(o(h=>({...h,isLoading:!0})),i.inputValue.length<5){c(a("SpecifyMore",{count:5}));return}const n=await r();n.status===200?n.data&&u(n.data):n.status===422?p(n.message):g()},[i,a,c,u,p,g,r]);return{chatState:i,handleSendMessage:d,handleInputChange:n=>{o({...i,inputValue:n.target.value})},handleKeyDown:n=>{n.key==="Enter"&&d()}}},he=({isOpen:e,lessonID:s,onClose:i})=>{const{token:o}=l.useContext($.EscolaLMSContext),{chatState:a,handleSendMessage:c,handleInputChange:r,handleKeyDown:u}=de(s,o),{t:p}=w(),g=l.useId(),d=l.useCallback(()=>{const n=setTimeout(()=>{i()},200);return()=>clearTimeout(n)},[i]);return t.jsxs(ne,{className:"chatwindow",$closeAnimation:!e,$isMobile:C,children:[t.jsxs("header",{className:"chatwindow__header",children:[t.jsx(y.Text,{size:"18",bold:!0,children:p("LetsTalk")}),t.jsx("button",{title:"close-chat",className:"chatwindow__header--close",onClick:d,children:t.jsx("span",{})})]}),t.jsxs("div",{className:"chatwindow__content",children:[t.jsxs("div",{className:"chatwindow__content--messages",children:[a.messages.length===0&&t.jsx("div",{className:"chatwindow__content--messages__empty",children:t.jsx(y.Text,{size:"16",children:p("StartChat")})}),a.messages.map((n,h)=>t.jsx(oe,{message:n.message,isAI:n.isAi},`message=${h}-${g}`))]}),t.jsxs("div",{children:[t.jsxs("div",{className:"chatwindow__content--input",children:[t.jsx("input",{value:a.inputValue,onChange:r,onKeyDown:u,type:"text",title:"chatmessage"}),t.jsx("button",{title:"send-message",onClick:c,children:a.isLoading?t.jsx(P,{width:"20px",height:"20px"}):t.jsx(L,{})})]}),t.jsx("div",{className:"chatwindow__content--error",children:t.jsx(y.Text,{size:"11",children:a.error})})]})]})]})},ue=x.div`
  ${({$isMobile:e,$isOpen:s})=>e&&s&&f`
      height: 100dvh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    `};
`,pe=S`
  from {
    bottom:  0;
  }
  to {
    bottom:  -100%;
  }
`,xe=S`
  from {
    bottom:  -100%;
  }
  to {
    bottom:  0;
  }
`,ge=x.div`
  ${({$placement:e})=>e&&f`
      ${Object.keys(e).map(s=>`${s}: ${e[s]};`).join(`
`)}
    `}
  ${({$isOpen:e})=>e?f`
          animation: ${xe} 0.5s ease forwards;
          bottom: 0;
        `:f`
          animation: ${pe} 0.5s ease forwards;
          bottom: -100%;
        `}
  padding-bottom: env(safe-area-inset-bottom);
`,fe=x.div`
  width: ${({$isMobile:e})=>e?"45px":"68px"};
  height: ${({$isMobile:e})=>e?"45px":"68px"};
  background-color: ${({theme:e})=>e.primaryColor};
  border-radius: ${({$isMobile:e})=>e?"0":"50%"};
  box-shadow: 0px 5px 15px #00000058;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;
  margin-bottom: 15px;
  position: fixed;
  bottom: 5px;
  right: 15px;

  &:hover {
    transform: scale(1.05) translateY(-3px);
  }
  .badge {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.secondaryColor};
    position: absolute;
    left: 14px;
    top: 15px;
  }
  ${({$isMobile:e})=>e&&f`
      margin-left: auto;
      border-top-left-radius: 29px;
      border-bottom-left-radius: 29px;
      top: 110px;
      right: 0%;
      svg {
        width: 23px;
        height: 23px;
      }
    `}
`,me=({lessonID:e,placement:s=C?{right:"0px",position:"absolute",width:"100%",bottom:"-100%"}:{bottom:"-100%",right:"15px",position:"absolute"}})=>{const[i,o]=l.useState(!1);return t.jsxs(ue,{$isMobile:C,$isOpen:i,children:[t.jsx(ge,{$placement:s,$isOpen:i,children:t.jsx(he,{isOpen:i,lessonID:e,onClose:()=>o(!1)})}),!i&&t.jsx(fe,{onClick:()=>o(!0),$isMobile:C,children:t.jsx(z,{})})]})},be={xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},b=(e,s)=>f`
  @media (min-width: ${be[e]}) {
    ${s}
  }
`,Ce=x.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`,we=x.div`
  width: 100%;

  ${b("lg",f`
      width: calc(100% - 280px);
    `)}
`,je=x.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: -3px 0px 6px #0000000b;
  position: absolute;
  top: 0;
  right: ${({$isOpen:e})=>e?"0":"-100vw"};
  transition: right 0.3s;

  ${b("lg",f`
      width: 280px;
      position: unset;
    `)}
`,ye=x.div`
  display: flex;
  flex-direction: column;
`,ve=x.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  box-shadow: -3px 0px 6px #0000000b;

  h2 {
    padding: 0 25px;
  }

  ${b("lg",f`
      h2 {
        padding: 0 12px;
      }
    `)}
`,$e=x.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
`,ke=x.div`
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

  ${b("lg",f`
      padding: 0px 26px;
    `)}
`,M=x(v.Title)`
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
`,Ie=x.div`
  width: calc(100% - 50px);

  .label-container .percentage-value {
    color: ${({theme:{positive:e}})=>e};
    display: none;
  }

  ${b("lg",f`
      width: 100%;

      .label-container .percentage-value {
        display: unset;
      }
    `)}
`,Te=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: ${({theme:e})=>e.primaryColor};
  width: 50px;
  height: 100%;
  z-index: 10;

  ${b("lg",f`
      display: none;
    `)}
`,Pe=()=>{const{t:e}=w(),{user:s}=l.useContext($.EscolaLMSContext),{currentTopic:i,finishedTopicsIds:o,availableTopicsIds:a,courseId:c,currentCourseProgram:r}=m(),u=k();return t.jsxs(ye,{children:[t.jsx(ve,{children:t.jsx(M,{level:2,children:e("CoursePanel.ScheduleTitle")})}),t.jsx($e,{children:t.jsx(Y.CourseAgenda,{areAllTopicsUnlocked:!!(r!=null&&r.authors.find(({id:p})=>{var g;return p===((g=s.value)==null?void 0:g.id)})),lessons:(r==null?void 0:r.lessons)||[],currentTopicId:Number(i==null?void 0:i.id),finishedTopicIds:o??[],onMarkFinished:()=>console.log("onMarkFinished"),onTopicClick:p=>{u.push(`/course/${c}/${p.lesson_id}/${p.id}`)},onCourseFinished:()=>console.log("onCourseFinished"),availableTopicsIds:a??[],isMobile:C})})]})},Se=({menuOnClick:e})=>{const{finishedTopicsIds:s,flatTopics:i,currentLessonParentsIds:o,flatLessons:a,currentTopic:c,currentLesson:r}=m(),{t:u}=w(),p=a==null?void 0:a.find(({id:d})=>d===(o==null?void 0:o.at(0))),g=(s??[]).length/(i??[]).length*100;return t.jsxs(ke,{children:[t.jsx(Ie,{children:t.jsx(y.ProgressBar,{currentProgress:g,maxProgress:100,label:t.jsxs(M,{level:2,children:[t.jsx("span",{children:(p==null?void 0:p.title)||(r==null?void 0:r.title)||""})," ",c==null?void 0:c.title]}),variant:"square"})}),t.jsx(Te,{role:"button","aria-label":u("CoursePanel.MenuButtonAria"),onClick:e,children:t.jsx(W,{})})]})},Ne=()=>f`
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
`,_e=x.main`
  width: auto;
  height: calc(100vh - 215px);
  overflow-y: auto;
  padding: 20px 26px;

  ${Ne()}
`,Me=()=>{const{currentTopic:e,isAnyDataLoading:s}=m();return t.jsxs(_e,{children:[t.jsx(J,{topic:e}),s&&t.jsx(P,{})]})};var Ae=O();const Ee=()=>{const{completeCurrentTopic:e,currentTopic:s,finishedTopicsIds:i,courseId:o,currentLesson:a,nextTopic:c,prevTopic:r,availableTopicsIds:u,isNextTopicButtonDisabled:p,isAnyDataLoading:g,isLastTopic:d}=m(),n=k(),h=l.useMemo(()=>(s==null?void 0:s.id)!==void 0&&(i??[]).includes(s==null?void 0:s.id),[i,s==null?void 0:s.id]),j=l.useCallback(()=>{o===void 0||c===void 0||n.push(`/course/${o}/${a==null?void 0:a.id}/${c==null?void 0:c.id}`)},[o,a==null?void 0:a.id,n,c]),E=l.useCallback(()=>{o===void 0||r===void 0||n.push(`/course/${o}/${a==null?void 0:a.id}/${r==null?void 0:r.id}`)},[o,a==null?void 0:a.id,n,r]),F=l.useMemo(()=>!!((c==null?void 0:c.id)!==void 0&&(u!=null&&u.includes(c.id))),[u,c==null?void 0:c.id]);return t.jsx(Ae.CourseTopNav,{mobile:C,onFinish:()=>e==null?void 0:e(),onNext:()=>j(),isFinished:h,onPrev:()=>E(),hasPrev:!!r,hasNext:F,isLast:d,isMarkBtnDisabled:p,onCourseFinished:()=>e==null?void 0:e(!0),allButtonsDisabled:g})},Fe=()=>{const[e,s]=l.useState(!1);return t.jsxs(Ce,{children:[t.jsxs(we,{children:[t.jsx(Se,{menuOnClick:()=>s(i=>!i)}),t.jsx(Me,{}),t.jsx(Ee,{})]}),t.jsx(je,{$isOpen:e,children:t.jsx(Pe,{})})]})},Be=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.white};
`,A=x.div`
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
`,Le=({onNextClick:e})=>{const{t:s}=w();return t.jsxs(A,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(V,{})}),t.jsx(v.Title,{className:"title",level:1,children:s("CoursePanel.FinishPage.Congrats")}),t.jsx(v.Title,{className:"subtitle",level:2,children:s("CoursePanel.FinishPage.Subtitle")}),t.jsx(N.Text,{className:"text",children:s("CoursePanel.FinishPage.Text")}),t.jsx(D.Button,{className:"button",onClick:e,children:s("Next")})]})},ze=({showModal:e,onClose:s,onFinish:i,onSuccesGetQuestionnaires:o})=>{const{fetchQuestionnaires:a,fetchQuestionnaire:c}=l.useContext($.EscolaLMSContext),[r,u]=l.useState({show:!1,step:0,loading:!0}),[p,g]=l.useState([]),{courseId:d}=m();l.useEffect(()=>{u(h=>({...h,show:e}))},[e]);const n=l.useCallback(()=>{if(u(h=>({...h,show:!1})),r.step<p.length-1){u(j=>({...j,step:j.step+1}));const h=setTimeout(()=>{u(j=>({...j,show:!0}))},500);return()=>clearTimeout(h)}s()},[s,p.length,r.step]);return l.useEffect(()=>{d&&ee({courseId:Number(d),fetchQuestionnaire:c,fetchQuestionnaires:a,onSucces:h=>{o(!!h.length),g(h)},onFinish:()=>u(h=>({...h,loading:!1}))})},[d]),t.jsx(t.Fragment,{children:e&&d&&!!p.length&&!r.loading&&t.jsx(Z,{course:te.COURSE,courseId:Number(d),visible:r.show,onClose:n,questionnaire:p[r.step],onFinish:i})})},We=({certificates:e})=>{const{t:s}=w(),{downloadCertificate:i,loadingId:o}=se(),a=l.useCallback(()=>{e.forEach(({id:c,title:r})=>{i(c,r)})},[e,i]);return t.jsxs(A,{className:"certificate-container",children:[t.jsx("div",{className:"icon-container",children:t.jsx(Q,{})}),t.jsx(R,{className:"subtitle",level:2,children:s("CoursePanel.FinishPage.YourCertificate")}),t.jsx(T,{className:"button",onClick:a,loading:o!==-1,disabled:o!==-1,children:s("DownloadCertificate")}),t.jsx(q,{className:"text",children:s("CoursePanel.FinishPage.CertificateText")}),t.jsx(_,{to:I.home,children:t.jsx(T,{mode:"outline",className:"button",children:s("BackToHomePage")})})]})},Oe=()=>{const[e,s]=l.useState({showModal:!1,isAnyQuestionnaire:null,showCertificate:!1,certificates:null}),{courseId:i}=m(),{fetchCertificates:o}=l.useContext($.EscolaLMSContext),a=k(),c=l.useCallback(async()=>{try{const d=await o({assignable_type:H.CertificateAssignableTypes.Course,assignable_id:Number(i)});d&&d.success&&s(n=>({...n,certificates:d.data}))}catch(d){console.log("Error: ",d)}},[i,o]);l.useEffect(()=>{c()},[]);const r=l.useCallback(()=>{s(d=>({...d,showModal:!1,showCertificate:!0}))},[]),u=l.useCallback(d=>{s(n=>({...n,showModal:d}))},[]),p=l.useCallback(()=>{if(e.isAnyQuestionnaire){u(!0);return}if(e.certificates&&e.certificates.length>0){r();return}a.push(I.myProfile)},[u,a,r,e.certificates,e.isAnyQuestionnaire]),g=l.useCallback(d=>{s(n=>({...n,isAnyQuestionnaire:d}))},[]);return t.jsxs(Be,{children:[!e.showCertificate&&t.jsx(Le,{onNextClick:p}),e.showCertificate&&e.certificates&&t.jsx(We,{certificates:e.certificates}),t.jsx(ze,{showModal:e.showModal,onClose:()=>u(!1),onFinish:r,onSuccesGetQuestionnaires:g})]})},Ve=x.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme:{gray1:e}})=>e};
  color: ${({theme:{white:e}})=>e};
  padding: 0 0 0 26px;
  height: 50px;
  z-index: 10;
  position: relative;

  picture {
    margin: 0 10px;
    color: ${({theme:{gray4:e}})=>e};
  }

  ${b("lg",f`
      padding: 0 26px;
    `)}
`,De=x(v.Title)`
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
`,Qe=x.div`
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

  ${b("lg",f`
      padding: 0 26px;
    `)}
`,Re=x(N.Text)`
  color: ${({theme:{gray2:e}})=>e};
  margin: 0;
  line-height: 0;
`,qe=()=>{const{currentCourseProgram:e}=m(),{t:s}=w();return t.jsxs(Ve,{children:[t.jsxs(De,{children:[t.jsx("span",{children:s("CoursePanel.Course",{defaultValue:"Kurs"})})," ",e==null?void 0:e.title]}),t.jsx(_,{to:I.myProfile,children:t.jsxs(Qe,{children:[!C&&t.jsx(Re,{children:s("CoursePanel.Leave")}),t.jsx(U,{})]})})]})},He=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({theme:e})=>e.gray4};
  z-index: 1000;
`,Ue=()=>{const{showFinish:e,currentLesson:s}=m();return t.jsxs(He,{children:[t.jsx(qe,{}),!e&&t.jsx(Fe,{}),e&&t.jsx(Oe,{}),(s==null?void 0:s.id)&&t.jsx(me,{lessonID:s==null?void 0:s.id})]})},Ke=()=>t.jsx(X,{children:t.jsx(Ue,{})}),it=()=>{var s;const{program:e}=l.useContext(K.EscolaLMSContext);return t.jsx(G,{metaTitle:((s=e.value)==null?void 0:s.title)||"Course",children:t.jsx(Ke,{})})};export{it as default};

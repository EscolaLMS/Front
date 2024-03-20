import{q as x,j as t,m as y,cE as P,ao as f,af as L,r as l,f as b,A as $,n as m,a0 as S,cF as B,cG as z,T as v,i as k,cH as W,cI as V,cJ as D,s as N,v as Q,cK as O,ax as R,aK as I,cL as q,L as _,l as T,a_ as H,cM as U,h as K,o as Y}from"./index-qD7U5zMV.js";import{u as C,C as G,a as J,b as X}from"./CourseAgenda-CUvTWv4z.js";import{R as Z}from"./index-BBFLA_ni.js";import{b as ee,Q as te}from"./questionnaires-C-a5RkfO.js";import{u as se}from"./useDownloadCertificate-rfsH6aun.js";import"./index-C8HV2i1a.js";import"./warning-CAvyeAS1.js";import"./ResponsiveImage-biK-hrc-.js";import"./Upload-Xvtxnh_2.js";import"./toast-lasjBFrg.js";const ie=x.div`
  border-radius: ${({$isAI:e})=>e?"15px 15px 15px 0px":"15px 15px 0px 15px"};
  background-color: ${({theme:e,$isAI:s})=>s?e.gray4:"rgba(238, 49, 47, 0.07)"};
  padding: 12px 17px;
  width: 80%;
  max-width: 260px;
  margin-bottom: 10px;
  margin-left: ${({$isAI:e})=>e?"0":"auto"};
`,ne=({message:e,isAI:s=!1})=>t.jsx(ie,{$isAI:s,children:t.jsx(y.Text,{size:"16",children:e})}),ae=P`
  from {
    transform:  translateY(100%);
  }
  to {
    transform:  translateY(0%);
  }
`,oe=P`
  from {
    transform:  translateY(0);
  }
  to {
    transform:  translateY(100%);
  }
`,re=x.div`
  border-radius: 22px 21px 0px 0px;
  min-width: ${({$isMobile:e})=>e?"100%":"380px"};
  box-shadow: 0px 0px 15px #00000029;
  height: 100%;
  ${({$closeAnimation:e})=>e?f`
          animation: ${oe} 0.5s ease forwards;
        `:f`
          animation: ${ae} 0.5s ease forwards;
        `}

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
`,le=L;async function ce(e,s){try{const i=await fetch(e,s),n=await i.json();return{data:n.data,message:n.message,status:i.status}}catch(i){return{data:null,status:500,message:i.message}}}const de=async(e,s,i)=>ce(`${le}/api/yepp-chat/${e}`,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}}),he={isLoading:!1,messages:[],inputValue:"",error:"",conversationId:null},pe=(e,s)=>{if(!s)throw new Error("Token is required");const[i,n]=l.useState(he),{t:o}=b(),c=l.useCallback(a=>{n(h=>({...h,error:a,isLoading:!1}))},[n]),r=l.useCallback(async()=>{const a=i.conversationId?{question:i.inputValue,conversation_id:i.conversationId}:{question:i.inputValue};return s?await de(e,a,s):{status:500,message:o("UnexpectedError"),data:null}},[i,e,s,o]),p=l.useCallback(a=>{n(h=>({...h,error:"",isLoading:!1,messages:[...h.messages,{message:h.inputValue},{message:a.answer??h.inputValue,isAi:!!a.conversation_id}],inputValue:"",conversationId:h.conversationId??a.conversation_id??null}))},[n]),u=l.useCallback(a=>{n(h=>({...h,isLoading:!1,error:a}))},[n]),g=l.useCallback(()=>{n(a=>({...a,isLoading:!1,error:o("UnexpectedError")}))},[n,o]),d=l.useCallback(async()=>{if(n(h=>({...h,isLoading:!0})),i.inputValue.length<5){c(o("SpecifyMore",{count:5}));return}const a=await r();a.status===200?a.data&&p(a.data):a.status===422?u(a.message):g()},[i,o,c,p,u,g,r]);return{chatState:i,handleSendMessage:d,handleInputChange:a=>{n({...i,inputValue:a.target.value})},handleKeyDown:a=>{a.key==="Enter"&&d()}}},ue=({isOpen:e,lessonID:s,onClose:i})=>{const{token:n}=l.useContext($.EscolaLMSContext),{chatState:o,handleSendMessage:c,handleInputChange:r,handleKeyDown:p}=pe(s,n),{t:u}=b(),g=l.useId(),d=l.useCallback(()=>{const a=setTimeout(()=>{i()},200);return()=>clearTimeout(a)},[i]);return t.jsxs(re,{className:"chatwindow",$closeAnimation:!e,$isMobile:m,children:[t.jsxs("header",{className:"chatwindow__header",children:[t.jsx(y.Text,{size:"18",bold:!0,children:u("LetsTalk")}),t.jsx("button",{title:"close-chat",className:"chatwindow__header--close",onClick:d,children:t.jsx("span",{})})]}),t.jsxs("div",{className:"chatwindow__content",children:[t.jsxs("div",{className:"chatwindow__content--messages",children:[o.messages.length===0&&t.jsx("div",{className:"chatwindow__content--messages__empty",children:t.jsx(y.Text,{size:"16",children:u("StartChat")})}),o.messages.map((a,h)=>t.jsx(ne,{message:a.message,isAI:a.isAi},`message=${h}-${g}`))]}),t.jsxs("div",{children:[t.jsxs("div",{className:"chatwindow__content--input",children:[t.jsx("input",{value:o.inputValue,onChange:r,onKeyDown:p,type:"text",title:"chatmessage"}),t.jsx("button",{title:"send-message",onClick:c,children:o.isLoading?t.jsx(S,{width:"20px",height:"20px"}):t.jsx(B,{})})]}),t.jsx("div",{className:"chatwindow__content--error",children:t.jsx(y.Text,{size:"11",children:o.error})})]})]})]})},xe=x.div`
  ${({$isMobile:e})=>e&&f`
      height: 100dvh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    `};
`,ge=x.div`
  ${({$placement:e})=>e&&f`
      ${Object.keys(e).map(s=>`${s}: ${e[s]};`).join(`
`)}
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
`,me=({lessonID:e,placement:s=m?{right:"0px",top:"120px",position:"absolute",width:"100%",bottom:"0px"}:{bottom:"0px",right:"15px",position:"absolute"}})=>{const[i,n]=l.useState(!1);return t.jsx(xe,{$isMobile:m,children:t.jsxs(ge,{$placement:m?{...s,top:i?"initial":"120px"}:s,children:[!i&&t.jsx(fe,{onClick:()=>n(!0),$isMobile:m,children:t.jsx(z,{})}),t.jsx(ue,{isOpen:i,lessonID:e,onClose:()=>n(!1)})]})})},Ce={xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},w=(e,s)=>f`
  @media (min-width: ${Ce[e]}) {
    ${s}
  }
`,we=x.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`,be=x.div`
  width: 100%;

  ${w("lg",f`
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

  ${w("lg",f`
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

  ${w("lg",f`
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

  ${w("lg",f`
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
`,Te=x.div`
  width: calc(100% - 50px);

  .label-container .percentage-value {
    color: ${({theme:{positive:e}})=>e};
    display: none;
  }

  ${w("lg",f`
      width: 100%;

      .label-container .percentage-value {
        display: unset;
      }
    `)}
`,Ie=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: ${({theme:e})=>e.primaryColor};
  width: 50px;
  height: 100%;
  z-index: 10;

  ${w("lg",f`
      display: none;
    `)}
`,Pe=()=>{const{t:e}=b(),{user:s}=l.useContext($.EscolaLMSContext),{currentTopic:i,finishedTopicsIds:n,availableTopicsIds:o,courseId:c,currentCourseProgram:r}=C(),p=k();return t.jsxs(ye,{children:[t.jsx(ve,{children:t.jsx(M,{level:2,children:e("CoursePanel.ScheduleTitle")})}),t.jsx($e,{children:t.jsx(G.CourseAgenda,{areAllTopicsUnlocked:!!(r!=null&&r.authors.find(({id:u})=>{var g;return u===((g=s.value)==null?void 0:g.id)})),lessons:(r==null?void 0:r.lessons)||[],currentTopicId:Number(i==null?void 0:i.id),finishedTopicIds:n??[],onMarkFinished:()=>console.log("onMarkFinished"),onTopicClick:u=>{p.push(`/course/${c}/${u.lesson_id}/${u.id}`)},onCourseFinished:()=>console.log("onCourseFinished"),availableTopicsIds:o??[],isMobile:m})})]})},Se=({menuOnClick:e})=>{const{finishedTopicsIds:s,flatTopics:i,currentLessonParentsIds:n,flatLessons:o,currentTopic:c,currentLesson:r}=C(),{t:p}=b(),u=o==null?void 0:o.find(({id:d})=>d===(n==null?void 0:n.at(0))),g=(s??[]).length/(i??[]).length*100;return t.jsxs(ke,{children:[t.jsx(Te,{children:t.jsx(y.ProgressBar,{currentProgress:g,maxProgress:100,label:t.jsxs(M,{level:2,children:[t.jsx("span",{children:(u==null?void 0:u.title)||(r==null?void 0:r.title)||""})," ",c==null?void 0:c.title]}),variant:"square"})}),t.jsx(Ie,{role:"button","aria-label":p("CoursePanel.MenuButtonAria"),onClick:e,children:t.jsx(W,{})})]})},Ne=()=>f`
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
`,Me=()=>{const{currentTopic:e,isAnyDataLoading:s}=C();return t.jsxs(_e,{children:[t.jsx(J,{topic:e}),s&&t.jsx(S,{})]})};var Ae=V();const Ee=()=>{const{completeCurrentTopic:e,currentTopic:s,finishedTopicsIds:i,courseId:n,currentLesson:o,nextTopic:c,prevTopic:r,availableTopicsIds:p,isNextTopicButtonDisabled:u,isAnyDataLoading:g,isLastTopic:d}=C(),a=k(),h=l.useMemo(()=>(s==null?void 0:s.id)!==void 0&&(i??[]).includes(s==null?void 0:s.id),[i,s==null?void 0:s.id]),j=l.useCallback(()=>{n===void 0||c===void 0||a.push(`/course/${n}/${o==null?void 0:o.id}/${c==null?void 0:c.id}`)},[n,o==null?void 0:o.id,a,c]),E=l.useCallback(()=>{n===void 0||r===void 0||a.push(`/course/${n}/${o==null?void 0:o.id}/${r==null?void 0:r.id}`)},[n,o==null?void 0:o.id,a,r]),F=l.useMemo(()=>!!((c==null?void 0:c.id)!==void 0&&(p!=null&&p.includes(c.id))),[p,c==null?void 0:c.id]);return t.jsx(Ae.CourseTopNav,{mobile:m,onFinish:()=>e==null?void 0:e(),onNext:()=>j(),isFinished:h,onPrev:()=>E(),hasPrev:!!r,hasNext:F,isLast:d,isMarkBtnDisabled:u,onCourseFinished:()=>e==null?void 0:e(!0),allButtonsDisabled:g})},Fe=()=>{const[e,s]=l.useState(!1);return t.jsxs(we,{children:[t.jsxs(be,{children:[t.jsx(Se,{menuOnClick:()=>s(i=>!i)}),t.jsx(Me,{}),t.jsx(Ee,{})]}),t.jsx(je,{$isOpen:e,children:t.jsx(Pe,{})})]})},Le=x.div`
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
`,Be=({onNextClick:e})=>{const{t:s}=b();return t.jsxs(A,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(D,{})}),t.jsx(v.Title,{className:"title",level:1,children:s("CoursePanel.FinishPage.Congrats")}),t.jsx(v.Title,{className:"subtitle",level:2,children:s("CoursePanel.FinishPage.Subtitle")}),t.jsx(N.Text,{className:"text",children:s("CoursePanel.FinishPage.Text")}),t.jsx(Q.Button,{className:"button",onClick:e,children:s("Next")})]})},ze=({showModal:e,onClose:s,onFinish:i,onSuccesGetQuestionnaires:n})=>{const{fetchQuestionnaires:o,fetchQuestionnaire:c}=l.useContext($.EscolaLMSContext),[r,p]=l.useState({show:!1,step:0,loading:!0}),[u,g]=l.useState([]),{courseId:d}=C();l.useEffect(()=>{p(h=>({...h,show:e}))},[e]);const a=l.useCallback(()=>{if(p(h=>({...h,show:!1})),r.step<u.length-1){p(j=>({...j,step:j.step+1}));const h=setTimeout(()=>{p(j=>({...j,show:!0}))},500);return()=>clearTimeout(h)}s()},[s,u.length,r.step]);return l.useEffect(()=>{d&&ee({courseId:Number(d),fetchQuestionnaire:c,fetchQuestionnaires:o,onSucces:h=>{n(!!h.length),g(h)},onFinish:()=>p(h=>({...h,loading:!1}))})},[d]),t.jsx(t.Fragment,{children:e&&d&&!!u.length&&!r.loading&&t.jsx(Z,{course:te.COURSE,courseId:Number(d),visible:r.show,onClose:a,questionnaire:u[r.step],onFinish:i})})},We=({certificates:e})=>{const{t:s}=b(),{downloadCertificate:i,loadingId:n}=se(),o=l.useCallback(()=>{e.forEach(({id:c,title:r})=>{i(c,r)})},[e,i]);return t.jsxs(A,{className:"certificate-container",children:[t.jsx("div",{className:"icon-container",children:t.jsx(O,{})}),t.jsx(R,{className:"subtitle",level:2,children:s("CoursePanel.FinishPage.YourCertificate")}),t.jsx(I,{className:"button",onClick:o,loading:n!==-1,disabled:n!==-1,children:s("DownloadCertificate")}),t.jsx(q,{className:"text",children:s("CoursePanel.FinishPage.CertificateText")}),t.jsx(_,{to:T.home,children:t.jsx(I,{mode:"outline",className:"button",children:s("BackToHomePage")})})]})},Ve=()=>{const[e,s]=l.useState({showModal:!1,isAnyQuestionnaire:null,showCertificate:!1,certificates:null}),{courseId:i}=C(),{fetchCertificates:n}=l.useContext($.EscolaLMSContext),o=k(),c=l.useCallback(async()=>{try{const d=await n({assignable_type:H.CertificateAssignableTypes.Course,assignable_id:Number(i)});d&&d.success&&s(a=>({...a,certificates:d.data}))}catch(d){console.log("Error: ",d)}},[i,n]);l.useEffect(()=>{c()},[]);const r=l.useCallback(()=>{s(d=>({...d,showModal:!1,showCertificate:!0}))},[]),p=l.useCallback(d=>{s(a=>({...a,showModal:d}))},[]),u=l.useCallback(()=>{if(e.isAnyQuestionnaire){p(!0);return}if(e.certificates&&e.certificates.length>0){r();return}o.push(T.myProfile)},[p,o,r,e.certificates,e.isAnyQuestionnaire]),g=l.useCallback(d=>{s(a=>({...a,isAnyQuestionnaire:d}))},[]);return t.jsxs(Le,{children:[!e.showCertificate&&t.jsx(Be,{onNextClick:u}),e.showCertificate&&e.certificates&&t.jsx(We,{certificates:e.certificates}),t.jsx(ze,{showModal:e.showModal,onClose:()=>p(!1),onFinish:r,onSuccesGetQuestionnaires:g})]})},De=x.header`
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

  ${w("lg",f`
      padding: 0 26px;
    `)}
`,Qe=x(v.Title)`
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
`,Oe=x.div`
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

  ${w("lg",f`
      padding: 0 26px;
    `)}
`,Re=x(N.Text)`
  color: ${({theme:{gray2:e}})=>e};
  margin: 0;
  line-height: 0;
`,qe=()=>{const{currentCourseProgram:e}=C(),{t:s}=b();return t.jsxs(De,{children:[t.jsxs(Qe,{children:[t.jsx("span",{children:s("CoursePanel.Course",{defaultValue:"Kurs"})})," ",e==null?void 0:e.title]}),t.jsx(_,{to:T.myProfile,children:t.jsxs(Oe,{children:[!m&&t.jsx(Re,{children:s("CoursePanel.Leave")}),t.jsx(U,{})]})})]})},He=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({theme:e})=>e.gray4};
  z-index: 1000;
`,Ue=()=>{const{showFinish:e,currentLesson:s}=C();return t.jsxs(He,{children:[t.jsx(qe,{}),!e&&t.jsx(Fe,{}),e&&t.jsx(Ve,{}),(s==null?void 0:s.id)&&t.jsx(me,{lessonID:s==null?void 0:s.id})]})},Ke=()=>t.jsx(X,{children:t.jsx(Ue,{})}),at=()=>{var s;const{program:e}=l.useContext(K.EscolaLMSContext);return t.jsx(Y,{metaTitle:((s=e.value)==null?void 0:s.title)||"Course",children:t.jsx(Ke,{})})};export{at as default};

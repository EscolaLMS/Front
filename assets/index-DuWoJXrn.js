import{q as d,j as t,n as j,ar as B,r as c,h as C,N as v,o as b,a0 as T,bn as L,ai as g,bo as P,bp as z,T as y,k as $,bq as W,br as O,bs as V,y as S,z as D,bt as Q,aG as q,aF as I,bu as H,L as N,m as k,bh as R,bv as U,i as K,v as G}from"./index-CfziJAoE.js";import{u as w,C as Y,a as J,b as X}from"./CourseAgenda-8M_23fFy.js";import{Q as Z}from"./index-C5RfZHqu.js";import{u as ee}from"./useDownloadCertificate-C9dTKx7W.js";import{Q as te}from"./questionnaire-CXWDgbJ4.js";import"./index-CS3wgeMx.js";import"./Upload-D0HQiD62.js";import"./useRoles-MDBPe49G.js";const se=d.div`
  border-radius: ${({$isAI:e})=>e?"15px 15px 15px 0px":"15px 15px 0px 15px"};
  background-color: ${({theme:e,$isAI:s})=>s?e.gray4:"rgba(238, 49, 47, 0.07)"};
  padding: 12px 17px;
  width: 80%;
  max-width: 260px;
  margin-bottom: 10px;
  margin-left: ${({$isAI:e})=>e?"0":"auto"};
`,ie=({message:e,isAI:s=!1})=>t.jsx(se,{$isAI:s,children:t.jsx(j.Text,{size:"16",children:e})}),oe=d.div`
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
`,ne=B;async function ae(e,s){try{const i=await fetch(e,s),o=await i.json();return{data:o.data,message:o.message,status:i.status}}catch(i){return{data:null,status:500,message:i.message}}}const re=async(e,s,i)=>ae(`${ne}/api/yepp-chat/${e}`,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}}),le={isLoading:!1,messages:[],inputValue:"",error:"",conversationId:null},ce=(e,s)=>{if(!s)throw new Error("Token is required");const[i,o]=c.useState(le),{t:n}=C(),l=c.useCallback(a=>{o(u=>({...u,error:a,isLoading:!1}))},[o]),r=c.useCallback(async()=>{const a=i.conversationId?{question:i.inputValue,conversation_id:i.conversationId}:{question:i.inputValue};return s?await re(e,a,s):{status:500,message:n("UnexpectedError"),data:null}},[i,e,s,n]),x=c.useCallback(a=>{o(u=>({...u,error:"",isLoading:!1,messages:[...u.messages,{message:u.inputValue},{message:a.answer??u.inputValue,isAi:!!a.conversation_id}],inputValue:"",conversationId:u.conversationId??a.conversation_id??null}))},[o]),p=c.useCallback(a=>{o(u=>({...u,isLoading:!1,error:a}))},[o]),h=c.useCallback(()=>{o(a=>({...a,isLoading:!1,error:n("UnexpectedError")}))},[o,n]),f=c.useCallback(async()=>{if(o(u=>({...u,isLoading:!0})),i.inputValue.length<5){l(n("SpecifyMore",{count:5}));return}const a=await r();a.status===200?a.data&&x(a.data):a.status===422?p(a.message):h()},[i,n,l,x,p,h,r]);return{chatState:i,handleSendMessage:f,handleInputChange:a=>{o({...i,inputValue:a.target.value})},handleKeyDown:a=>{a.key==="Enter"&&f()}}},de=({isOpen:e,lessonID:s,onClose:i})=>{const{token:o}=c.useContext(v.EscolaLMSContext),{chatState:n,handleSendMessage:l,handleInputChange:r,handleKeyDown:x}=ce(s,o),{t:p}=C(),h=c.useId(),f=c.useCallback(()=>{const a=setTimeout(()=>{i()},200);return()=>clearTimeout(a)},[i]);return t.jsxs(oe,{className:"chatwindow",$closeAnimation:!e,$isMobile:b,children:[t.jsxs("header",{className:"chatwindow__header",children:[t.jsx(j.Text,{size:"18",bold:!0,children:p("LetsTalk")}),t.jsx("button",{title:"close-chat",className:"chatwindow__header--close",onClick:f,children:t.jsx("span",{})})]}),t.jsxs("div",{className:"chatwindow__content",children:[t.jsxs("div",{className:"chatwindow__content--messages",children:[n.messages.length===0&&t.jsx("div",{className:"chatwindow__content--messages__empty",children:t.jsx(j.Text,{size:"16",children:p("StartChat")})}),n.messages.map((a,u)=>t.jsx(ie,{message:a.message,isAI:a.isAi},`message=${u}-${h}`))]}),t.jsxs("div",{children:[t.jsxs("div",{className:"chatwindow__content--input",children:[t.jsx("input",{value:n.inputValue,onChange:r,onKeyDown:x,type:"text",title:"chatmessage"}),t.jsx("button",{title:"send-message",onClick:l,children:n.isLoading?t.jsx(T,{width:"20px",height:"20px"}):t.jsx(L,{})})]}),t.jsx("div",{className:"chatwindow__content--error",children:t.jsx(j.Text,{size:"11",children:n.error})})]})]})]})},he=d.div`
  ${({$isMobile:e,$isOpen:s})=>e&&s&&g`
      height: 100dvh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    `};
`,pe=P`
  from {
    bottom:  0;
  }
  to {
    bottom:  -100%;
  }
`,xe=P`
  from {
    bottom:  -100%;
  }
  to {
    bottom:  0;
  }
`,ue=d.div`
  ${({$placement:e})=>e&&g`
      ${Object.keys(e).map(s=>`${s}: ${e[s]};`).join(`
`)}
    `}
  ${({$isOpen:e})=>e?g`
          animation: ${xe} 0.5s ease forwards;
          bottom: 0;
        `:g`
          animation: ${pe} 0.5s ease forwards;
          bottom: -100%;
        `}
  padding-bottom: env(safe-area-inset-bottom);
`,ge=d.div`
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
  ${({$isMobile:e})=>e&&g`
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
`,fe=({lessonID:e,placement:s=b?{right:"0px",position:"absolute",width:"100%",bottom:"-100%"}:{bottom:"-100%",right:"15px",position:"absolute"}})=>{const[i,o]=c.useState(!1);return t.jsxs(he,{$isMobile:b,$isOpen:i,children:[t.jsx(ue,{$placement:s,$isOpen:i,children:t.jsx(de,{isOpen:i,lessonID:e,onClose:()=>o(!1)})}),!i&&t.jsx(ge,{onClick:()=>o(!0),$isMobile:b,children:t.jsx(z,{})})]})},me={xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},m=(e,s)=>g`
  @media (min-width: ${me[e]}) {
    ${s}
  }
`,be=d.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`,Ce=d.div`
  width: 100%;

  ${m("lg",g`
      width: calc(100% - 280px);
    `)}
`,we=d.div`
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
`,je=d.div`
  display: flex;
  flex-direction: column;
`,ye=d.div`
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
`,ve=d.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
`,$e=d.div`
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
`,M=d(y.Title)`
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
`,ke=d.div`
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
`,Ie=d.div`
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
`,Te=()=>{const{t:e}=C(),{user:s}=c.useContext(v.EscolaLMSContext),{currentTopic:i,finishedTopicsIds:o,availableTopicsIds:n,courseId:l,currentCourseProgram:r}=w(),x=$();return t.jsxs(je,{children:[t.jsx(ye,{children:t.jsx(M,{level:2,children:e("CoursePanel.ScheduleTitle")})}),t.jsx(ve,{children:t.jsx(Y.CourseAgenda,{areAllTopicsUnlocked:!!(r!=null&&r.authors.find(({id:p})=>{var h;return p===((h=s.value)==null?void 0:h.id)})),lessons:(r==null?void 0:r.lessons)||[],currentTopicId:Number(i==null?void 0:i.id),finishedTopicIds:o??[],onMarkFinished:()=>console.log("onMarkFinished"),onTopicClick:p=>{x.push(`/course/${l}/${p.lesson_id}/${p.id}`)},onCourseFinished:()=>console.log("onCourseFinished"),availableTopicsIds:n??[],isMobile:b})})]})},Pe=({menuOnClick:e})=>{const{finishedTopicsIds:s,flatTopics:i,currentLessonParentsIds:o,flatLessons:n,currentTopic:l,currentLesson:r}=w(),{t:x}=C(),p=n==null?void 0:n.find(({id:f})=>f===(o==null?void 0:o.at(0))),h=(s??[]).length/(i??[]).length*100;return t.jsxs($e,{children:[t.jsx(ke,{children:t.jsx(j.ProgressBar,{currentProgress:h,maxProgress:100,label:t.jsxs(M,{level:2,children:[t.jsx("span",{children:(p==null?void 0:p.title)||(r==null?void 0:r.title)||""})," ",l==null?void 0:l.title]}),variant:"square"})}),t.jsx(Ie,{role:"button","aria-label":x("CoursePanel.MenuButtonAria"),onClick:e,children:t.jsx(W,{})})]})},Se=()=>g`
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
`,Ne=d.main`
  width: auto;
  height: calc(100vh - 215px);
  overflow-y: auto;
  padding: 20px 26px;

  ${Se()}
`,Me=()=>{const{currentTopic:e,isAnyDataLoading:s}=w();return t.jsxs(Ne,{children:[t.jsx(J,{topic:e}),s&&t.jsx(T,{})]})};var _e=O();const Ae=()=>{const{completeCurrentTopic:e,currentTopic:s,finishedTopicsIds:i,courseId:o,currentLesson:n,nextTopic:l,prevTopic:r,availableTopicsIds:x,isNextTopicButtonDisabled:p,isAnyDataLoading:h,isLastTopic:f}=w(),a=$(),u=c.useMemo(()=>(s==null?void 0:s.id)!==void 0&&(i??[]).includes(s==null?void 0:s.id),[i,s==null?void 0:s.id]),A=c.useCallback(()=>{o===void 0||l===void 0||a.push(`/course/${o}/${n==null?void 0:n.id}/${l==null?void 0:l.id}`)},[o,n==null?void 0:n.id,a,l]),E=c.useCallback(()=>{o===void 0||r===void 0||a.push(`/course/${o}/${n==null?void 0:n.id}/${r==null?void 0:r.id}`)},[o,n==null?void 0:n.id,a,r]),F=c.useMemo(()=>!!((l==null?void 0:l.id)!==void 0&&(x!=null&&x.includes(l.id))),[x,l==null?void 0:l.id]);return t.jsx(_e.CourseTopNav,{mobile:b,onFinish:()=>e==null?void 0:e(),onNext:()=>A(),isFinished:u,onPrev:()=>E(),hasPrev:!!r,hasNext:F,isLast:f,isMarkBtnDisabled:p,onCourseFinished:()=>e==null?void 0:e(!0),allButtonsDisabled:h})},Ee=()=>{const[e,s]=c.useState(!1);return t.jsxs(be,{children:[t.jsxs(Ce,{children:[t.jsx(Pe,{menuOnClick:()=>s(i=>!i)}),t.jsx(Me,{}),t.jsx(Ae,{})]}),t.jsx(we,{$isOpen:e,children:t.jsx(Te,{})})]})},Fe=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.white};
`,_=d.div`
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
`,Be=({onNextClick:e})=>{const{t:s}=C();return t.jsxs(_,{children:[t.jsx("div",{className:"icon-container",children:t.jsx(V,{})}),t.jsx(y.Title,{className:"title",level:1,children:s("CoursePanel.FinishPage.Congrats")}),t.jsx(y.Title,{className:"subtitle",level:2,children:s("CoursePanel.FinishPage.Subtitle")}),t.jsx(S.Text,{className:"text",children:s("CoursePanel.FinishPage.Text")}),t.jsx(D.Button,{className:"button",onClick:e,children:s("Next")})]})},Le=({certificates:e})=>{const{t:s}=C(),{downloadCertificate:i,loadingId:o}=ee(),n=c.useCallback(()=>{e.forEach(({id:l,title:r})=>{i(l,r)})},[e,i]);return t.jsxs(_,{className:"certificate-container",children:[t.jsx("div",{className:"icon-container",children:t.jsx(Q,{})}),t.jsx(q,{className:"subtitle",level:2,children:s("CoursePanel.FinishPage.YourCertificate")}),t.jsx(I,{className:"button",onClick:n,loading:o!==-1,disabled:o!==-1,children:s("DownloadCertificate")}),t.jsx(H,{className:"text",children:s("CoursePanel.FinishPage.CertificateText")}),t.jsx(N,{to:k.home,children:t.jsx(I,{mode:"outline",className:"button",children:s("BackToHomePage")})})]})},ze=()=>{const[e,s]=c.useState({showModal:!1,isAnyQuestionnaire:null,showCertificate:!1,certificates:null}),{courseId:i}=w(),{fetchCertificates:o}=c.useContext(v.EscolaLMSContext),n=$(),l=c.useCallback(async()=>{try{const h=await o({assignable_type:R.CertificateAssignableTypes.Course,assignable_id:Number(i)});h&&h.success&&s(f=>({...f,certificates:h.data}))}catch(h){console.log("Error: ",h)}},[i,o]);c.useEffect(()=>{l()},[]);const r=c.useCallback(()=>{s(h=>({...h,showModal:!1,showCertificate:!0}))},[]),x=c.useCallback(()=>{if(e.isAnyQuestionnaire){r();return}if(e.certificates&&e.certificates.length>0){r();return}n.push(k.myProfile)},[n,r,e.certificates,e.isAnyQuestionnaire]),p=c.useCallback(h=>{s(f=>({...f,isAnyQuestionnaire:h}))},[]);return t.jsxs(Fe,{children:[!e.showCertificate&&t.jsx(Be,{onNextClick:x}),e.showCertificate&&e.certificates&&t.jsx(Le,{certificates:e.certificates}),t.jsx(Z,{entityId:Number(i),entityModel:te.COURSE,showModal:e.showModal,onSuccesGetQuestionnaires:p})]})},We=d.header`
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

  ${m("lg",g`
      padding: 0 26px;
    `)}
`,Oe=d(y.Title)`
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
`,Ve=d.div`
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
`,De=d(S.Text)`
  color: ${({theme:{gray2:e}})=>e};
  margin: 0;
  line-height: 0;
`,Qe=()=>{const{currentCourseProgram:e}=w(),{t:s}=C();return t.jsxs(We,{children:[t.jsxs(Oe,{children:[t.jsx("span",{children:s("CoursePanel.Course",{defaultValue:"Kurs"})})," ",e==null?void 0:e.title]}),t.jsx(N,{to:k.myProfile,children:t.jsxs(Ve,{children:[!b&&t.jsx(De,{children:s("CoursePanel.Leave")}),t.jsx(U,{})]})})]})},qe=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({theme:e})=>e.gray4};
  z-index: 1000;
`,He=()=>{const{showFinish:e,currentLesson:s}=w();return t.jsxs(qe,{children:[t.jsx(Qe,{}),!e&&t.jsx(Ee,{}),e&&t.jsx(ze,{}),(s==null?void 0:s.id)&&t.jsx(fe,{lessonID:s==null?void 0:s.id})]})},Re=()=>t.jsx(X,{children:t.jsx(He,{})}),tt=()=>{var s;const{program:e}=c.useContext(K.EscolaLMSContext);return t.jsx(G,{metaTitle:((s=e.value)==null?void 0:s.title)||"Course",children:t.jsx(Re,{})})};export{tt as default};

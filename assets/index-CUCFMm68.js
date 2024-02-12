import{bH as q,E as G,r as d,k as p,a3 as z,f as w,y as $,p as U,m as R,q as D,j as r,L,l as _,o as P,h as K,s as M,bI as X,M as B,i as N,C as H,v as O,G as Q,T as Y,n as Z,bJ as ee,b as se}from"./index-BsLXwVX-.js";import{P as I}from"./index-DduWXmdR.js";import{A as g}from"./index-CFmML0be.js";import{C as te,u as re,a as oe,S as ne}from"./index-RwW-U-6P.js";import{B as ae}from"./index-DG-fcZoy.js";import{R as ie}from"./index-BQIpjfkc.js";import{c as le,a as ue}from"./questionnaires-BsRSV85P.js";import"./ResponsiveImage-KgADMS5g.js";import"./Upload-CJayUHoB.js";import"./index-B6JCoH2u.js";import"./app-B2E7767C.js";import"./date-C5z6T5_w.js";var de=q();const ce=["http://h5p.org/libraries/H5P.ImageJuxtaposition-1.4","http://h5p.org/libraries/H5P.Crossword-0.4"],me=s=>{var n,i,l;const{statement:t}=s,e=(l=(i=(n=t==null?void 0:t.context)==null?void 0:n.contextActivities)==null?void 0:i.category)==null?void 0:l.map(({id:C})=>C);return e&&ce.some(C=>e==null?void 0:e.some(c=>c.includes(C)))},he=({program:s,disableNextTopicButton:t,isThereAnotherTopic:e=!0})=>{const{topicID:o}=G(),{sendProgress:n,h5pProgress:i}=d.useContext(p.EscolaLMSContext),[l,C]=d.useState(null),c=d.useCallback((a,u=!0)=>{var h;s!=null&&s.id&&((h=i(String(s==null?void 0:s.id),Number(o),a==null?void 0:a.statement))==null||h.then(()=>{u&&C(null)}))},[s==null?void 0:s.id,o,i]),f=d.useCallback(a=>{t&&t(!1),s!=null&&s.id&&!l?n(s==null?void 0:s.id,[{topic_id:Number(o),status:1}]):l&&c({...l,statement:{...l.statement,verb:{...l.statement.verb,id:a||me(l)?z.completed.find(u=>u.includes("completed")):l.statement.verb.id}}},!0)},[l,t,s==null?void 0:s.id,n,o,c]),m=d.useCallback(a=>{var u,h,x,b;e&&t&&t(!((h=(u=a==null?void 0:a.statement)==null?void 0:u.verb)!=null&&h.id)),C(a),a!=null&&a.statement&&((b=(x=a==null?void 0:a.statement)==null?void 0:x.verb)==null?void 0:b.id)!==z.completed.find(T=>T.includes("completed"))&&c(a,!1)},[e,t,c]);return{onCompleteTopic:f,onXAPI:m,onCompleteH5pTopic:c}},xe=({topic:s,courseId:t,program:e,lesson:o})=>{var u,h;const{bookmarkNotes:n,fetchBookmarkNotes:i,createBookmarkNote:l,deleteBookmarkNote:C}=d.useContext(p.EscolaLMSContext),{t:c}=w(),f=d.useMemo(()=>{var x;return(x=n.list)==null?void 0:x.data.filter(b=>b.bookmarkable_id===Number(s==null?void 0:s.id)&&b.value===null)},[(u=n.list)==null?void 0:u.data,s==null?void 0:s.id]),m=()=>f!=null&&f.length?C(f[0].id).then(()=>{i(),$.success(c("Notifications.DeleteBookmark"))}):l({bookmarkable_id:Number(s==null?void 0:s.id),bookmarkable_type:g.BookmarkableType.Topic,value:null}).then(()=>{i(),$.success(c("Notifications.CreateBookmark"))}),a=d.useMemo(()=>{var x;return(x=n.list)==null?void 0:x.data.filter(b=>b.bookmarkable_id===Number(s==null?void 0:s.id)&&b.value!==null)},[(h=n.list)==null?void 0:h.data,s==null?void 0:s.id]);return{handleBookmark:m,topicBookmark:f,topicNote:a}},fe=({courseId:s,program:t,topic:e})=>{const{courseProgressDetails:o,progress:n}=d.useContext(p.EscolaLMSContext),i=U(),{push:l}=R(),C=i.pathname.split("/").length===3,c=d.useMemo(()=>{var u,h;return(u=o.byId)!=null&&u[Number(s)]&&o.byId[Number(s)].value?o.byId[Number(s)].value:n&&n.value&&((h=n.value.find(x=>x.course.id===Number(s)))==null?void 0:h.progress)},[n,s]),f=d.useMemo(()=>{const u=c||[],h=u.filter(x=>x.status===g.CourseProgressItemElementStatus.IN_PROGRESS).sort((x,b)=>new Date(b.started_at).getTime()-new Date(x.started_at).getTime())[0];return h||u.filter(x=>x.status===g.CourseProgressItemElementStatus.INCOMPLETE)[0]},[c]),m=d.useMemo(()=>f&&t.lessons.find(u=>u&&u.topics&&u.topics.some(h=>h.id===f.topic_id)),[t,f]);d.useEffect(()=>{C&&m&&f&&l(`/course/${t.id}/${m.id}/${f.topic_id}`,null)},[C,m,t,l,f]);const a=c==null?void 0:c.findIndex(u=>u.topic_id===(e==null?void 0:e.id)&&u.status===g.CourseProgressItemElementStatus.COMPLETE);return{getCourseProgress:c,finishedTopicIndex:a}},Ce=D.div`
  min-height: calc(100vh - 150px);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .buttons-block {
    display: grid;
    gap: 8px;
  }
`,F=({error:s,goTo:t=P.courses,goToText:e,alternativeButton:o})=>{const{t:n}=w(),i=R(),l=e??n("CoursePage.SeeOtherCourses");return r.jsx(L,{children:r.jsxs(Ce,{children:[r.jsx(_.Text,{size:"16",children:r.jsx("strong",{children:n("CoursePage.ErrorOccurred")})}),r.jsx(_.Text,{size:"14",children:s}),r.jsx("hr",{}),r.jsxs("div",{className:"buttons-block",children:[r.jsx(_.Button,{mode:"secondary",onClick:()=>i.push(t),children:l}),o&&r.jsx(_.Button,{mode:"outline",onClick:()=>i.push(o.goTo),children:o.goToText})]})]})})},be=D.section`
  padding-bottom: 110px;
  .main-title {
    margin-bottom: 20px;
  }
  .course-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  img {
    max-width: 100%;
    height: auto;
  }

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
`,je=({courseId:s})=>{const{t}=w(),{push:e}=R(),[o,n]=d.useState({show:!1,step:0,loading:!1}),[i,l]=d.useState([]),{fetchQuestionnaires:C,fetchQuestionnaire:c}=d.useContext(K.EscolaLMSContext),f=d.useCallback(()=>{if(n(m=>({...m,show:!1})),o.step<i.length-1){n(a=>({...a,step:a.step+1}));const m=setTimeout(()=>{n(a=>({...a,show:!0}))},500);return()=>clearTimeout(m)}},[i,o.step]);return d.useEffect(()=>{n(m=>({...m,loading:!0})),s&&le({courseId:s,fetchQuestionnaire:c,fetchQuestionnaires:C,onSucces:m=>{l(m)},onFinish:()=>n(m=>({...m,loading:!1}))})},[s]),r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"course-program-finish-modal",children:o.loading?r.jsx(_.Spin,{}):r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"course-program-finish-modal__title",children:t("CourseProgram.FinishTitle")}),r.jsx("p",{className:"course-program-finish-modal__paragraph",children:i!=null&&i.length?t("CourseProgram.FinishSubtitle"):t("CourseProgram.FinishSubtitleNoRating")}),r.jsxs("div",{className:"course-program-finish-modal__buttons",children:[!!(i!=null&&i.length)&&r.jsx(M.Button,{mode:"primary",onClick:()=>n(m=>({...m,show:!0})),children:t("MyProfilePage.RateCourse")}),r.jsx(M.Button,{mode:"primary",onClick:()=>e(P.myProfile),children:t("Menu.Profile")}),r.jsx(M.Button,{mode:"primary",onClick:()=>e(P.courses),children:t("Menu.Courses")})]})]})}),o.show&&s&&!!i.length&&r.jsx(ie,{course:ue.COURSE,courseId:s,visible:o.show,onClose:()=>f(),questionnaire:i[o.step]})]})},ge=D.div`
  margin-top: 100px;
`,ke=({resources:s,subtitle:t})=>{const{t:e}=w(),o=s.map(n=>({href:n.url,fileName:n.name}));return r.jsx(ge,{children:r.jsx(X.Downloads,{subtitle:t,title:e("CourseProgram.TopicAttachment"),downloads:o})})},Te=({lesson:s,topic:t,disableNextTopicButton:e,getNextPrevTopic:o,onXAPI:n,onVideoEnd:i,onAudioEnd:l,onPdfEnd:C,onQuizEnd:c,onProjectEnd:f,onProjectsChange:m})=>{var u,h;const a=s&&s.summary&&t&&t.summary?6:12;return r.jsxs("div",{className:"course-program-player",children:[r.jsxs("div",{className:"course-program-player-content",children:[t&&t.introduction&&r.jsx(B.MarkdownRenderer,{children:t.introduction}),r.jsx("div",{className:"course-program-player-content__wrapper",style:{...((u=t==null?void 0:t.json)==null?void 0:u.wrapperStyle)||{}},children:r.jsx(te,{topic:t,disableNextTopicButton:e,isThereAnotherTopic:!!o(Number(t==null?void 0:t.id)),onXAPI:x=>n==null?void 0:n(x),onVideoEnd:i,onAudioEnd:l,onPdfEnd:C,onQuizEnd:c,onProjectEnd:f,onProjectsChange:m},t==null?void 0:t.id)})]}),r.jsx("div",{className:"course-program-content__container",children:r.jsxs(N.Row,{children:[s&&s.summary&&r.jsx(N.Col,{sm:12,md:a,lg:a,children:r.jsx("div",{className:"course-program-summary",children:r.jsx(B.MarkdownRenderer,{children:s.summary})})}),t&&t.summary&&r.jsx(N.Col,{sm:12,md:a,lg:a,children:r.jsxs("div",{className:"course-program-summary",children:[r.jsx(B.MarkdownRenderer,{children:t.summary}),t&&t.resources&&((h=t.resources)==null?void 0:h.length)>0&&r.jsx(ke,{resources:t.resources||[],subtitle:t.introduction||""})]})})]})})]})},ye=(s,t,e)=>{var n,i;if(!t||!e||!s.byId)return!1;const o=(i=(n=s.byId[e])==null?void 0:n.value)==null?void 0:i.find(({topic_id:l})=>t===l);return(o==null?void 0:o.status)===1},Pe=({program:s,courseId:t})=>{const{topic:e,lesson:o,onNextTopic:n,onPrevTopic:i,getNextPrevTopic:l,isNextTopicButtonDisabled:C,disableNextTopicButton:c,sendProgress:f,courseProgressDetails:m,isLastTopic:a}=re(s),[u,h]=d.useState(!1),[x,b]=d.useState(!1),{onCompleteTopic:T,onXAPI:J}=he({program:s}),{topicBookmark:S,handleBookmark:V,topicNote:v}=xe({topic:e,lesson:o,program:s,courseId:t}),{finishedTopicIndex:A}=fe({courseId:t,program:s,topic:e}),{t:y}=w();d.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o==null?void 0:o.id,e==null?void 0:e.id]),d.useEffect(()=>{const j=l(Number(e==null?void 0:e.id));if(!(!s||!e))if(j===null||e.can_skip===!1&&ye(m,e.id,t)===!1){c(!0);return}else c(!1)},[e==null?void 0:e.id,s,m,t]),window.resetProgress=()=>(async()=>{await f(s.id,s.lessons.flatMap(j=>j.topics).map(j=>({topic_id:Number(j==null?void 0:j.id),status:0})))})();const E=d.useCallback(j=>{if(((e==null?void 0:e.topicable_type)===g.TopicType.Video||(e==null?void 0:e.topicable_type)===g.TopicType.Audio||(e==null?void 0:e.topicable_type)===g.TopicType.GiftQuiz||(e==null?void 0:e.topicable_type)===g.TopicType.Project||(e==null?void 0:e.topicable_type)===g.TopicType.Pdf)&&(e==null?void 0:e.can_skip)===!1&&!x)return!1;T(e==null?void 0:e.can_skip),j&&h(!0)},[x,T,e==null?void 0:e.can_skip,e==null?void 0:e.topicable_type]),k=d.useCallback(()=>{a?b(!0):T()},[a,T]),W=d.useCallback(j=>{if(j.data.length>0){k();return}a&&b(!1)},[a,k]);return s?e?r.jsxs(be,{className:"course-program-wrapper",children:[r.jsxs(H,{children:[r.jsx(ae,{items:[r.jsx(O,{to:P.home,children:y("Home")}),r.jsx(O,{to:P.courses,children:y("Courses")}),r.jsx(Q.Text,{size:"12",children:s.title}),r.jsx(Q.Text,{size:"12",children:e.title})]}),r.jsx(Y.Title,{className:"main-title",level:3,children:e.title}),r.jsxs(N.Row,{children:[r.jsxs(N.Col,{lg:9,children:[u&&r.jsx(je,{courseId:t}),!u&&r.jsx(Te,{lesson:o,topic:e,onXAPI:J,disableNextTopicButton:c,getNextPrevTopic:l,onAudioEnd:k,onVideoEnd:k,onPdfEnd:k,onQuizEnd:k,onProjectEnd:k,onProjectsChange:W})]}),r.jsx(N.Col,{lg:3,children:r.jsx(oe,{course:s,topicId:Number(e==null?void 0:e.id),onCourseFinish:()=>E(!0),onCompleteTopic:E})})]})]}),r.jsx("div",{className:"course-nav",children:r.jsx(H,{children:r.jsx(de.CourseTopNav,{onFinish:E,mobile:Z,onNext:n,isFinished:typeof A=="number"?A>-1:!1,onPrev:i,addNotes:!0,newNoteData:{id:e.id,type:`${t}/${o==null?void 0:o.id}/${e==null?void 0:e.id}:${s.title}:${e==null?void 0:e.title}`},currentNote:v==null?void 0:v[0],addBookmarks:!0,bookmarkBtnText:S!=null&&S.length?"deleteBookmark":"addBookmark",onBookmarkClick:()=>V(),hasPrev:!!l(Number(e==null?void 0:e.id),!1),hasNext:!C,isLast:a,onCourseFinished:()=>E(!0)})})})]}):r.jsx(F,{error:y("CourseProgram.NoTopic"),goTo:`/course/${s.id}`,goToText:y("CoursePage.BackToCourse"),alternativeButton:{goTo:P.courses,goToText:y("CoursePage.SeeOtherCourses")}}):r.jsx(F,{error:y("CourseProgram.NoProgram")})},Ne=({program:s})=>{const t=s==null?void 0:s.scorm_sco,e=t==null?void 0:t.uuid;return!t&&!e?r.jsx(se.Fragment,{}):r.jsx(ne,{value:{title:t.title,uuid:t.uuid}})},Ae=()=>{var n;const{id:s}=G(),{program:t,fetchProgram:e,fetchCourseProgress:o}=d.useContext(p.EscolaLMSContext);return d.useEffect(()=>{s&&(e(Number(s)),o(Number(s)))},[s]),t.loading?r.jsx(I,{}):t.error?r.jsx(F,{error:ee("CourseProgram.NoProgram")}):t.value&&((n=t==null?void 0:t.value)!=null&&n.scorm_sco_id)?r.jsx(L,{metaTitle:t.value.title,children:r.jsx(Ne,{program:t.value})}):t.value&&t.value.lessons&&t.value.lessons.length?r.jsx(L,{metaTitle:t.value.title,children:r.jsx(Pe,{program:t.value,courseId:Number(s)})}):r.jsx(I,{})};export{Ae as default};

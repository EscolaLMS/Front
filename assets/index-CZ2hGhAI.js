import{bT as W,H as I,r as d,l as S,a8 as z,f as w,A as $,s as q,i as R,q as D,j as r,L,v as p,B as _,k as y,D as J,S as K,bU as X,M as B,h as N,m as H,w as O,T as Y,o as Z,bV as ee,b as se}from"./index-BTvwz0L3.js";import{P as Q}from"./index-Dr14e7t8.js";import{A as j}from"./index-O1s2SJEC.js";import{C as te,u as re,a as oe,S as ne}from"./index-jr0GT9Mh.js";import{B as ae}from"./index-hgCH-7gi.js";import{R as ie}from"./index-DbTzvoRw.js";import{c as le,a as ue}from"./questionnaires-BykLl9Mv.js";import"./ResponsiveImage-G_l4wTjD.js";import"./Upload-CzmffQvE.js";import"./index-1V4e0nUl.js";import"./app-B2E7767C.js";import"./date-msTaMnuE.js";var de=W();const ce=["http://h5p.org/libraries/H5P.ImageJuxtaposition-1.4","http://h5p.org/libraries/H5P.Crossword-0.4"],me=t=>{var a,l,i;const{statement:s}=t,e=(i=(l=(a=s==null?void 0:s.context)==null?void 0:a.contextActivities)==null?void 0:l.category)==null?void 0:i.map(({id:x})=>x);return e&&ce.some(x=>e==null?void 0:e.some(m=>m.includes(x)))},he=({program:t,disableNextTopicButton:s,isThereAnotherTopic:e=!0})=>{const{topicID:o}=I(),{sendProgress:a,h5pProgress:l}=d.useContext(S.EscolaLMSContext),[i,x]=d.useState(null),m=d.useCallback((n,u=!0)=>{var h;t!=null&&t.id&&((h=l(String(t==null?void 0:t.id),Number(o),n==null?void 0:n.statement))==null||h.then(()=>{u&&x(null)}))},[t==null?void 0:t.id,o,l]),f=d.useCallback(n=>{s&&s(!1),t!=null&&t.id&&!i?a(t==null?void 0:t.id,[{topic_id:Number(o),status:1}]):i&&m({...i,statement:{...i.statement,verb:{...i.statement.verb,id:n||me(i)?z.completed.find(u=>u.includes("completed")):i.statement.verb.id}}},!0)},[i,s,t==null?void 0:t.id,a,o,m]),c=d.useCallback(n=>{var u,h,C,k;e&&s&&s(!((h=(u=n==null?void 0:n.statement)==null?void 0:u.verb)!=null&&h.id)),x(n),n!=null&&n.statement&&((k=(C=n==null?void 0:n.statement)==null?void 0:C.verb)==null?void 0:k.id)!==z.completed.find(T=>T.includes("completed"))&&m(n,!1)},[e,s,m]);return{onCompleteTopic:f,onXAPI:c,onCompleteH5pTopic:m}},xe=({topic:t})=>{var f,c;const{bookmarkNotes:s,fetchBookmarkNotes:e,createBookmarkNote:o,deleteBookmarkNote:a}=d.useContext(S.EscolaLMSContext),{t:l}=w(),i=d.useMemo(()=>{var n;return(n=s.list)==null?void 0:n.data.filter(u=>u.bookmarkable_id===Number(t==null?void 0:t.id)&&u.value===null)},[(f=s.list)==null?void 0:f.data,t==null?void 0:t.id]),x=()=>i!=null&&i.length?a(i[0].id).then(()=>{e(),$.success(l("Notifications.DeleteBookmark"))}):o({bookmarkable_id:Number(t==null?void 0:t.id),bookmarkable_type:j.BookmarkableType.Topic,value:null}).then(()=>{e(),$.success(l("Notifications.CreateBookmark"))}),m=d.useMemo(()=>{var n;return(n=s.list)==null?void 0:n.data.filter(u=>u.bookmarkable_id===Number(t==null?void 0:t.id)&&u.value!==null)},[(c=s.list)==null?void 0:c.data,t==null?void 0:t.id]);return{handleBookmark:x,topicBookmark:i,topicNote:m}},fe=({courseId:t,program:s,topic:e})=>{const{courseProgressDetails:o,progress:a}=d.useContext(S.EscolaLMSContext),l=q(),{push:i}=R(),x=l.pathname.split("/").length===3,m=d.useMemo(()=>{var u,h;return(u=o.byId)!=null&&u[Number(t)]&&o.byId[Number(t)].value?o.byId[Number(t)].value:a&&a.value&&((h=a.value.find(C=>C.course.id===Number(t)))==null?void 0:h.progress)},[a,t]),f=d.useMemo(()=>{const u=m||[],h=u.filter(C=>C.status===j.CourseProgressItemElementStatus.IN_PROGRESS).sort((C,k)=>new Date(k.started_at).getTime()-new Date(C.started_at).getTime())[0];return h||u.filter(C=>C.status===j.CourseProgressItemElementStatus.INCOMPLETE)[0]},[m]),c=d.useMemo(()=>f&&s.lessons.find(u=>u&&u.topics&&u.topics.some(h=>h.id===f.topic_id)),[s,f]);d.useEffect(()=>{x&&c&&f&&i(`/course/${s.id}/${c.id}/${f.topic_id}`,null)},[x,c,s,i,f]);const n=m==null?void 0:m.findIndex(u=>u.topic_id===(e==null?void 0:e.id)&&u.status===j.CourseProgressItemElementStatus.COMPLETE);return{getCourseProgress:m,finishedTopicIndex:n}},Ce=D.div`
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
`,F=({error:t,goTo:s=y.courses,goToText:e,alternativeButton:o})=>{const{t:a}=w(),l=R(),i=e??a("CoursePage.SeeOtherCourses");return r.jsx(L,{children:r.jsxs(Ce,{children:[r.jsx(p.Text,{size:"16",children:r.jsx("strong",{children:a("CoursePage.ErrorOccurred")})}),r.jsx(p.Text,{size:"14",children:t}),r.jsx("hr",{}),r.jsxs("div",{className:"buttons-block",children:[r.jsx(_.Button,{mode:"secondary",onClick:()=>l.push(s),children:i}),o&&r.jsx(_.Button,{mode:"outline",onClick:()=>l.push(o.goTo),children:o.goToText})]})]})})},be=D.section`
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
`,je=({courseId:t})=>{const{t:s}=w(),{push:e}=R(),[o,a]=d.useState({show:!1,step:0,loading:!1}),[l,i]=d.useState([]),{fetchQuestionnaires:x,fetchQuestionnaire:m}=d.useContext(J.EscolaLMSContext),f=d.useCallback(()=>{if(a(c=>({...c,show:!1})),o.step<l.length-1){a(n=>({...n,step:n.step+1}));const c=setTimeout(()=>{a(n=>({...n,show:!0}))},500);return()=>clearTimeout(c)}},[l,o.step]);return d.useEffect(()=>{a(c=>({...c,loading:!0})),t&&le({courseId:t,fetchQuestionnaire:m,fetchQuestionnaires:x,onSucces:c=>{i(c)},onFinish:()=>a(c=>({...c,loading:!1}))})},[t]),r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"course-program-finish-modal",children:o.loading?r.jsx(K.Spin,{}):r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"course-program-finish-modal__title",children:s("CourseProgram.FinishTitle")}),r.jsx("p",{className:"course-program-finish-modal__paragraph",children:l!=null&&l.length?s("CourseProgram.FinishSubtitle"):s("CourseProgram.FinishSubtitleNoRating")}),r.jsxs("div",{className:"course-program-finish-modal__buttons",children:[!!(l!=null&&l.length)&&r.jsx(_.Button,{mode:"primary",onClick:()=>a(c=>({...c,show:!0})),children:s("MyProfilePage.RateCourse")}),r.jsx(_.Button,{mode:"primary",onClick:()=>e(y.myProfile),children:s("Menu.Profile")}),r.jsx(_.Button,{mode:"primary",onClick:()=>e(y.courses),children:s("Menu.Courses")})]})]})}),o.show&&t&&!!l.length&&r.jsx(ie,{course:ue.COURSE,courseId:t,visible:o.show,onClose:()=>f(),questionnaire:l[o.step]})]})},ke=D.div`
  margin-top: 100px;
`,ge=({resources:t,subtitle:s})=>{const{t:e}=w(),o=t.map(a=>({href:a.url,fileName:a.name}));return r.jsx(ke,{children:r.jsx(X.Downloads,{subtitle:s,title:e("CourseProgram.TopicAttachment"),downloads:o})})},Te=({lesson:t,topic:s,disableNextTopicButton:e,getNextPrevTopic:o,onXAPI:a,onVideoEnd:l,onAudioEnd:i,onPdfEnd:x,onQuizEnd:m,onProjectEnd:f,onProjectsChange:c})=>{var u,h;const n=t&&t.summary&&s&&s.summary?6:12;return r.jsxs("div",{className:"course-program-player",children:[r.jsxs("div",{className:"course-program-player-content",children:[s&&s.introduction&&r.jsx(B.MarkdownRenderer,{children:s.introduction}),r.jsx("div",{className:"course-program-player-content__wrapper",style:{...((u=s==null?void 0:s.json)==null?void 0:u.wrapperStyle)||{}},children:r.jsx(te,{topic:s,disableNextTopicButton:e,isThereAnotherTopic:!!o(Number(s==null?void 0:s.id)),onXAPI:C=>a==null?void 0:a(C),onVideoEnd:l,onAudioEnd:i,onPdfEnd:x,onQuizEnd:m,onProjectEnd:f,onProjectsChange:c},s==null?void 0:s.id)})]}),r.jsx("div",{className:"course-program-content__container",children:r.jsxs(N.Row,{children:[t&&t.summary&&r.jsx(N.Col,{sm:12,md:n,lg:n,children:r.jsx("div",{className:"course-program-summary",children:r.jsx(B.MarkdownRenderer,{children:t.summary})})}),s&&s.summary&&r.jsx(N.Col,{sm:12,md:n,lg:n,children:r.jsxs("div",{className:"course-program-summary",children:[r.jsx(B.MarkdownRenderer,{children:s.summary}),s&&s.resources&&((h=s.resources)==null?void 0:h.length)>0&&r.jsx(ge,{resources:s.resources||[],subtitle:s.introduction||""})]})})]})})]})},Pe=(t,s,e)=>{var a,l;if(!s||!e||!t.byId)return!1;const o=(l=(a=t.byId[e])==null?void 0:a.value)==null?void 0:l.find(({topic_id:i})=>s===i);return(o==null?void 0:o.status)===1},ye=({program:t,courseId:s})=>{const{topic:e,lesson:o,onNextTopic:a,onPrevTopic:l,getNextPrevTopic:i,isNextTopicButtonDisabled:x,disableNextTopicButton:m,sendProgress:f,courseProgressDetails:c,isLastTopic:n}=re(t),[u,h]=d.useState(!1),[C,k]=d.useState(!1),{onCompleteTopic:T,onXAPI:V}=he({program:t}),{topicBookmark:v,handleBookmark:G,topicNote:M}=xe({topic:e,lesson:o,program:t,courseId:s}),{finishedTopicIndex:A}=fe({courseId:s,program:t,topic:e}),{t:P}=w();d.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o==null?void 0:o.id,e==null?void 0:e.id]),d.useEffect(()=>{const b=i(Number(e==null?void 0:e.id));if(!(!t||!e))if(b===null||e.can_skip===!1&&Pe(c,e.id,s)===!1){m(!0);return}else m(!1)},[e==null?void 0:e.id,t,c,s]),window.resetProgress=()=>(async()=>{await f(t.id,t.lessons.flatMap(b=>b.topics).map(b=>({topic_id:Number(b==null?void 0:b.id),status:0})))})();const E=d.useCallback(b=>{if(((e==null?void 0:e.topicable_type)===j.TopicType.Video||(e==null?void 0:e.topicable_type)===j.TopicType.Audio||(e==null?void 0:e.topicable_type)===j.TopicType.GiftQuiz||(e==null?void 0:e.topicable_type)===j.TopicType.Project||(e==null?void 0:e.topicable_type)===j.TopicType.Pdf)&&(e==null?void 0:e.can_skip)===!1&&!C)return!1;T(e==null?void 0:e.can_skip),b&&h(!0)},[C,T,e==null?void 0:e.can_skip,e==null?void 0:e.topicable_type]),g=d.useCallback(()=>{n?k(!0):T()},[n,T]),U=d.useCallback(b=>{if(b.data.length>0){g();return}n&&k(!1)},[n,g]);return t?e?r.jsxs(be,{className:"course-program-wrapper",children:[r.jsxs(H,{children:[r.jsx(ae,{items:[r.jsx(O,{to:y.home,children:P("Home")}),r.jsx(O,{to:y.courses,children:P("Courses")}),r.jsx(p.Text,{size:"12",children:t.title}),r.jsx(p.Text,{size:"12",children:e.title})]}),r.jsx(Y.Title,{className:"main-title",level:3,children:e.title}),r.jsxs(N.Row,{children:[r.jsxs(N.Col,{lg:9,children:[u&&r.jsx(je,{courseId:s}),!u&&r.jsx(Te,{lesson:o,topic:e,onXAPI:V,disableNextTopicButton:m,getNextPrevTopic:i,onAudioEnd:g,onVideoEnd:g,onPdfEnd:g,onQuizEnd:g,onProjectEnd:g,onProjectsChange:U})]}),r.jsx(N.Col,{lg:3,children:r.jsx(oe,{course:t,topicId:Number(e==null?void 0:e.id),onCourseFinish:()=>E(!0),onCompleteTopic:E})})]})]}),r.jsx("div",{className:"course-nav",children:r.jsx(H,{children:r.jsx(de.CourseTopNav,{onFinish:E,mobile:Z,onNext:a,isFinished:typeof A=="number"?A>-1:!1,onPrev:l,addNotes:!0,newNoteData:{id:e.id,type:`${s}/${o==null?void 0:o.id}/${e==null?void 0:e.id}:${t.title}:${e==null?void 0:e.title}`},currentNote:M==null?void 0:M[0],addBookmarks:!0,bookmarkBtnText:v!=null&&v.length?"deleteBookmark":"addBookmark",onBookmarkClick:()=>G(),hasPrev:!!i(Number(e==null?void 0:e.id),!1),hasNext:!x,isLast:n,onCourseFinished:()=>E(!0)})})})]}):r.jsx(F,{error:P("CourseProgram.NoTopic"),goTo:`/course/${t.id}`,goToText:P("CoursePage.BackToCourse"),alternativeButton:{goTo:y.courses,goToText:P("CoursePage.SeeOtherCourses")}}):r.jsx(F,{error:P("CourseProgram.NoProgram")})},Ne=({program:t})=>{const s=t==null?void 0:t.scorm_sco,e=s==null?void 0:s.uuid;return!s&&!e?r.jsx(se.Fragment,{}):r.jsx(ne,{value:{title:s.title,uuid:s.uuid}})},Ae=()=>{var a;const{id:t}=I(),{program:s,fetchProgram:e,fetchCourseProgress:o}=d.useContext(S.EscolaLMSContext);return d.useEffect(()=>{t&&(e(Number(t)),o(Number(t)))},[t]),s.loading?r.jsx(Q,{}):s.error?r.jsx(F,{error:ee("CourseProgram.NoProgram")}):s.value&&((a=s==null?void 0:s.value)!=null&&a.scorm_sco_id)?r.jsx(L,{metaTitle:s.value.title,children:r.jsx(Ne,{program:s.value})}):s.value&&s.value.lessons&&s.value.lessons.length?r.jsx(L,{metaTitle:s.value.title,children:r.jsx(ye,{program:s.value,courseId:Number(t)})}):r.jsx(Q,{})};export{Ae as default};

import{q as R,a as S,j as t,T as g,bI as T,o as h,bJ as f,aq as q,ao as A,p as C,w as E,D as N,z as j,c as y}from"./index-YRlvC1Yo.js";import{r as x}from"./sentry-DZqhWugq.js";import{Q as w,a as k}from"./questionnaire-CXWDgbJ4.js";const v=R.form`
  .question-box {
    &__title {
      font-size: 24px;
      text-align: center;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 13px;
    }

    &__content {
      padding: 30px 23px 0 23px;
      text-align: center;

      &--title {
        font-size: 16px;
      }
      &--description {
        font-size: 16px;
        margin: 11px 0;
      }
      &--textarea-title {
        font-size: 16px;
        margin: 11px 0;
        font-weight: bold;
      }
      &--textarea {
        background: #f8f8f8;
        border: 1px solid #eaeaea;
        border-radius: 10px;
      }
      &--buttons {
        margin-top: 37px;
      }
    }
  }
`,z=({entityModel:a,data:s,textareaPlaceholder:u,questionnaireTitle:e,withStarsRating:n,handleSubmit:_,onClose:m})=>{const{t:o}=S(),[c,d]=x.useState({rate:0,note:""}),b=r=>{_(r||c.rate,c.note),d({rate:0,note:""})};return t.jsxs(v,{children:[t.jsx(g.Title,{className:"question-box__title",children:o(a===w.COURSE?"RateCourse.Title":e||"Ankieta")}),t.jsx("div",{className:"question-box__content",children:n?t.jsxs(T,{score:s.max_score,onSubmit:r=>b(r),header:s.title,onCancel:m,children:[t.jsx(h.Text,{className:"question-box__content--textarea-title",children:o("RateCourse.WriteComment")}),t.jsx(f,{className:"question-box__content--textarea",placeholder:u,value:c.note,onChange:({target:{value:r}})=>d(i=>({...i,note:r})),rows:5})]}):t.jsxs(q,{children:[t.jsx(g.Title,{className:"question-box__content--title",children:s==null?void 0:s.title}),t.jsx(h.Text,{className:"question-box__content--description",children:s==null?void 0:s.description}),t.jsx(h.Text,{className:"question-box__content--textarea-title",children:o(a===w.COURSE?"RateCourse.WriteComment":"RateCourse.WriteAnswer")}),t.jsx(f,{className:"question-box__content--textarea",placeholder:u,value:c.note,onChange:({target:{value:r}})=>d(i=>({...i,note:r})),rows:5}),t.jsxs(A,{className:"question-box__content--buttons",$alignItems:"center",$justifyContent:"center",$gap:12,children:[t.jsx(C.Button,{type:"button",mode:"white",onClick:m,children:o("RateCourse.NoAnswer")}),t.jsx(C.Button,{onClick:()=>b(),type:"button",mode:"primary",disabled:!c.note.length,children:o("RateCourse.SendAnswer")})]})]})})]})},Q=R(E.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,B={loading:!1,step:0},O=({entityModel:a,entityId:s,visible:u,questionnaire:e,onClose:n})=>{var r;const{sendQuestionnaireAnswer:_}=x.useContext(N.EscolaLMSContext),{t:m}=S(),[o,c]=x.useState(B),d=x.useCallback(async(i,p)=>{if(e.questions){c(l=>({...l,loading:!0}));try{(await _(a,s,e==null?void 0:e.id,{question_id:e.questions[o.step].id,rate:i,note:p,visible_on_front:e.questions[o.step].public_answers})).success&&j(`${m("RateCourse.AnswerSended")}`,"success")}catch(l){j("Error",l.message),console.error(l)}finally{c(l=>({...l,loading:!1,step:l.step+1,note:"",rating:null}))}}},[a,s,e,o]),b=x.useCallback((i,p)=>{d(i,p),e.questions&&o.step===e.questions.length-1&&n()},[d,e,o.step,n]);return t.jsx(Q,{onClose:n,visible:u,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,closable:!1,children:e.questions&&t.jsx(z,{questionnaireTitle:e.title,entityModel:a,data:e.questions[o.step],handleSubmit:(i,p)=>b(i,p),withStarsRating:((r=e.questions[o.step])==null?void 0:r.type)===k.REVIEW,onClose:n})})},I=()=>{const{user:a}=x.useContext(y.EscolaLMSContext),s=x.useMemo(()=>{var e,n;return!!((n=(e=a.value)==null?void 0:e.roles)!=null&&n.includes("tutor"))},[a]),u=x.useMemo(()=>{var e,n;return!!((n=(e=a.value)==null?void 0:e.roles)!=null&&n.includes("student"))},[a]);return{isTutor:s,isStudent:u}};export{O as R,I as u};
//# sourceMappingURL=useRoles-oVPgLSb6.js.map

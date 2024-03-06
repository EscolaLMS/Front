import{q,f as R,r as p,j as t,T as f,ct as T,s as g,cu as j,ah as y,af as S,v as C,x as N,D as A,A as w}from"./index-Bo8UkscO.js";import{a as k}from"./questionnaires-_0sODp6F.js";const B=q.form`
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
`,E=({data:l,textareaPlaceholder:c,withStarsRating:b,handleSubmit:e,onClose:x})=>{const{t:o}=R(),{title:_,description:h}=l,[s,a]=p.useState({rate:0,note:""}),m=()=>{e(s.rate,s.note),a({rate:0,note:""})};return t.jsxs(B,{onSubmit:m,children:[t.jsx(f.Title,{className:"question-box__title",children:o("RateCourse.Title")}),t.jsx("div",{className:"question-box__content",children:b?t.jsxs(T,{onSubmit:r=>a(n=>({...n,rate:r})),header:l.title,onCancel:x,children:[t.jsx(g.Text,{className:"question-box__content--textarea-title",children:o("RateCourse.WriteComment")}),t.jsx(j,{className:"question-box__content--textarea",placeholder:c,value:s.note,onChange:({target:{value:r}})=>a(n=>({...n,note:r})),rows:5})]}):t.jsxs(y,{children:[t.jsx(f.Title,{className:"question-box__content--title",children:_}),t.jsx(g.Text,{className:"question-box__content--description",children:h}),t.jsx(g.Text,{className:"question-box__content--textarea-title",children:o("RateCourse.WriteComment")}),t.jsx(j,{className:"question-box__content--textarea",placeholder:c,value:s.note,onChange:({target:{value:r}})=>a(n=>({...n,note:r})),rows:5}),t.jsxs(S,{className:"question-box__content--buttons",$alignItems:"center",$justifyContent:"center",$gap:12,children:[t.jsx(C.Button,{type:"button",mode:"white",onClick:x,children:o("RateCourse.NoAnswer")}),t.jsx(C.Button,{type:"submit",mode:"primary",disabled:!s.note.length,children:o("RateCourse.SendAnswer")})]})]})})]})},v=q(N.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,Q=({course:l,courseId:c,visible:b,questionnaire:e,onClose:x,onFinish:o})=>{var n;const{sendQuestionnaireAnswer:_}=p.useContext(A.EscolaLMSContext),{t:h}=R(),[s,a]=p.useState({loading:!1,step:0}),m=p.useCallback(async(d,u)=>{if(e.questions){a(i=>({...i,loading:!0}));try{(await _(l,c,e.id,{question_id:e.questions[s.step].id,rate:d,note:u,visible_on_front:e.questions[s.step].public_answers})).success&&w.success(`${h("RateCourse.ThankYouMessage")}`)}catch(i){w.error("Error"),console.error(i)}finally{a(i=>({...i,loading:!1,step:i.step+1,note:"",rating:null}))}}},[l,c,e.id,s]),r=p.useCallback((d,u)=>{m(d,u),e.questions&&s.step===e.questions.length-1&&o()},[m,e.questions,s.step,o]);return t.jsx(v,{onClose:x,visible:b,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,closable:!1,children:e.questions&&t.jsx(E,{data:e.questions[s.step],handleSubmit:(d,u)=>r(d,u),withStarsRating:((n=e.questions[s.step])==null?void 0:n.type)===k.REVIEW,onClose:x})})};export{Q as R};

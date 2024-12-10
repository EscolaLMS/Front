import{q as R,h as S,r as x,j as t,T as g,bM as T,y as h,bN as f,av as N,at as y,z as C,F as A,N as E,J as j,i as q}from"./index-Dd-EmmDK.js";import{Q as w,a as k}from"./questionnaire-CXWDgbJ4.js";const v=R.form`
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
`,z=({entityModel:a,data:s,textareaPlaceholder:u,questionnaireTitle:e,withStarsRating:n,handleSubmit:_,onClose:m})=>{const{t:o}=S(),[l,d]=x.useState({rate:0,note:""}),b=r=>{_(r||l.rate,l.note),d({rate:0,note:""})};return console.log({data:s}),t.jsxs(v,{children:[t.jsx(g.Title,{className:"question-box__title",children:o(a===w.COURSE?"RateCourse.Title":e||"Ankieta")}),t.jsx("div",{className:"question-box__content",children:n?t.jsxs(T,{score:s.max_score,onSubmit:r=>b(r),header:s.title,onCancel:m,children:[t.jsx(h.Text,{className:"question-box__content--textarea-title",children:o("RateCourse.WriteComment")}),t.jsx(f,{className:"question-box__content--textarea",placeholder:u,value:l.note,onChange:({target:{value:r}})=>d(i=>({...i,note:r})),rows:5})]}):t.jsxs(N,{children:[t.jsx(g.Title,{className:"question-box__content--title",children:s==null?void 0:s.title}),t.jsx(h.Text,{className:"question-box__content--description",children:s==null?void 0:s.description}),t.jsx(h.Text,{className:"question-box__content--textarea-title",children:o(a===w.COURSE?"RateCourse.WriteComment":"RateCourse.WriteAnswer")}),t.jsx(f,{className:"question-box__content--textarea",placeholder:u,value:l.note,onChange:({target:{value:r}})=>d(i=>({...i,note:r})),rows:5}),t.jsxs(y,{className:"question-box__content--buttons",$alignItems:"center",$justifyContent:"center",$gap:12,children:[t.jsx(C.Button,{type:"button",mode:"white",onClick:m,children:o("RateCourse.NoAnswer")}),t.jsx(C.Button,{onClick:()=>b(),type:"button",mode:"primary",disabled:!l.note.length,children:o("RateCourse.SendAnswer")})]})]})})]})},M=R(A.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,Q={loading:!1,step:0},$=({entityModel:a,entityId:s,visible:u,questionnaire:e,onClose:n})=>{var r;const{sendQuestionnaireAnswer:_}=x.useContext(E.EscolaLMSContext),{t:m}=S(),[o,l]=x.useState(Q),d=x.useCallback(async(i,p)=>{if(console.log("handleSendAnswer",i,p),e.questions){l(c=>({...c,loading:!0}));try{(await _(a,s,e==null?void 0:e.id,{question_id:e.questions[o.step].id,rate:i,note:p,visible_on_front:e.questions[o.step].public_answers})).success&&j(`${m("RateCourse.")}`,"success")}catch(c){j("Error",c.message),console.error(c)}finally{l(c=>({...c,loading:!1,step:c.step+1,note:"",rating:null}))}}},[a,s,e,o]),b=x.useCallback((i,p)=>{d(i,p),e.questions&&o.step===e.questions.length-1&&n()},[d,e,o.step,n]);return t.jsx(M,{onClose:n,visible:u,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,closable:!1,children:e.questions&&t.jsx(z,{questionnaireTitle:e.title,entityModel:a,data:e.questions[o.step],handleSubmit:(i,p)=>b(i,p),withStarsRating:((r=e.questions[o.step])==null?void 0:r.type)===k.REVIEW,onClose:n})})},O=()=>{const{user:a}=x.useContext(q.EscolaLMSContext),s=x.useMemo(()=>{var e,n;return!!((n=(e=a.value)==null?void 0:e.roles)!=null&&n.includes("tutor"))},[a]),u=x.useMemo(()=>{var e,n;return!!((n=(e=a.value)==null?void 0:e.roles)!=null&&n.includes("student"))},[a]);return{isTutor:s,isStudent:u}};export{$ as R,O as u};

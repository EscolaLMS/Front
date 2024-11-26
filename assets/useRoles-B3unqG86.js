import{q as w,h as S,r as c,j as t,T as g,bN as T,y as _,bO as f,aj as N,ah as y,z as C,F as E,N as k,J as j,i as q}from"./index-Y9RNIFp-.js";import{Q as R,a as A}from"./questionnaire-CXWDgbJ4.js";const v=w.form`
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
`,z=({entityModel:a,data:o,textareaPlaceholder:d,questionnaireTitle:e,withStarsRating:n,handleSubmit:b,onClose:m})=>{const{t:s}=S(),[i,u]=c.useState({rate:0,note:""}),h=()=>{b(i.rate,i.note),u({rate:0,note:""})};return t.jsxs(v,{children:[t.jsx(g.Title,{className:"question-box__title",children:s(a===R.COURSE?"RateCourse.Title":e||"Ankieta")}),t.jsx("div",{className:"question-box__content",children:n?t.jsxs(T,{onSubmit:l=>u(r=>({...r,rate:l})),header:o.title,onCancel:m,children:[t.jsx(_.Text,{className:"question-box__content--textarea-title",children:s("RateCourse.WriteComment")}),t.jsx(f,{className:"question-box__content--textarea",placeholder:d,value:i.note,onChange:({target:{value:l}})=>u(r=>({...r,note:l})),rows:5})]}):t.jsxs(N,{children:[t.jsx(g.Title,{className:"question-box__content--title",children:o==null?void 0:o.title}),t.jsx(_.Text,{className:"question-box__content--description",children:o==null?void 0:o.description}),t.jsx(_.Text,{className:"question-box__content--textarea-title",children:s(a===R.COURSE?"RateCourse.WriteComment":"RateCourse.WriteAnswer")}),t.jsx(f,{className:"question-box__content--textarea",placeholder:d,value:i.note,onChange:({target:{value:l}})=>u(r=>({...r,note:l})),rows:5}),t.jsxs(y,{className:"question-box__content--buttons",$alignItems:"center",$justifyContent:"center",$gap:12,children:[t.jsx(C.Button,{type:"button",mode:"white",onClick:m,children:s("RateCourse.NoAnswer")}),t.jsx(C.Button,{onClick:h,type:"button",mode:"primary",disabled:!i.note.length,children:s("RateCourse.SendAnswer")})]})]})})]})},M=w(E.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,Q={loading:!1,step:0},O=({entityModel:a,entityId:o,visible:d,questionnaire:e,onClose:n})=>{var l;const{sendQuestionnaireAnswer:b}=c.useContext(k.EscolaLMSContext),{t:m}=S(),[s,i]=c.useState(Q),u=c.useCallback(async(r,p)=>{if(e.questions){i(x=>({...x,loading:!0}));try{(await b(a,o,e==null?void 0:e.id,{question_id:e.questions[s.step].id,rate:r,note:p,visible_on_front:e.questions[s.step].public_answers})).success&&j(`${m("RateCourse.ThankYouMessage")}`,"success")}catch(x){j("Error","error"),console.error(x)}finally{i(x=>({...x,loading:!1,step:x.step+1,note:"",rating:null}))}}},[a,o,e,s]),h=c.useCallback((r,p)=>{u(r,p),e.questions&&s.step===e.questions.length-1&&n()},[u,e,s.step,n]);return t.jsx(M,{onClose:n,visible:d,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,closable:!1,children:e.questions&&t.jsx(z,{questionnaireTitle:e.title,entityModel:a,data:e.questions[s.step],handleSubmit:(r,p)=>h(r,p),withStarsRating:((l=e.questions[s.step])==null?void 0:l.type)===A.REVIEW,onClose:n})})},$=()=>{const{user:a}=c.useContext(q.EscolaLMSContext),o=c.useMemo(()=>{var e,n;return!!((n=(e=a.value)==null?void 0:e.roles)!=null&&n.includes("tutor"))},[a]),d=c.useMemo(()=>{var e,n;return!!((n=(e=a.value)==null?void 0:e.roles)!=null&&n.includes("student"))},[a]);return{isTutor:o,isStudent:d}};export{O as R,$ as u};

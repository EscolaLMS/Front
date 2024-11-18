import{q as S,h as T,r as i,j as t,T as f,cz as q,x as _,cA as C,ai as E,ag as y,y as j,E as A,K as N,I as R,i as k}from"./index-CWlckqug.js";import{Q as w,a as v}from"./questionnaire-CXWDgbJ4.js";const z=S.form`
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
`,M=({entityModel:a,data:o,textareaPlaceholder:d,questionnaireTitle:e,withStarsRating:n,handleSubmit:g,onClose:b})=>{const{t:l}=T(),[s,c]=i.useState({rate:0,note:""}),h=()=>{g(s.rate,s.note),c({rate:0,note:""})};return t.jsxs(z,{children:[t.jsx(f.Title,{className:"question-box__title",children:l(a===w.COURSE?"RateCourse.Title":e||"Ankieta")}),t.jsx("div",{className:"question-box__content",children:n?t.jsxs(q,{onSubmit:u=>c(r=>({...r,rate:u})),header:o.title,onCancel:b,children:[t.jsx(_.Text,{className:"question-box__content--textarea-title",children:l("RateCourse.WriteComment")}),t.jsx(C,{className:"question-box__content--textarea",placeholder:d,value:s.note,onChange:({target:{value:u}})=>c(r=>({...r,note:u})),rows:5})]}):t.jsxs(E,{children:[t.jsx(f.Title,{className:"question-box__content--title",children:o==null?void 0:o.title}),t.jsx(_.Text,{className:"question-box__content--description",children:o==null?void 0:o.description}),t.jsx(_.Text,{className:"question-box__content--textarea-title",children:l(a===w.COURSE?"RateCourse.WriteComment":"RateCourse.WriteAnswer")}),t.jsx(C,{className:"question-box__content--textarea",placeholder:d,value:s.note,onChange:({target:{value:u}})=>c(r=>({...r,note:u})),rows:5}),t.jsxs(y,{className:"question-box__content--buttons",$alignItems:"center",$justifyContent:"center",$gap:12,children:[t.jsx(j.Button,{type:"button",mode:"white",onClick:b,children:l("RateCourse.NoAnswer")}),t.jsx(j.Button,{onClick:h,type:"button",mode:"primary",disabled:!s.note.length,children:l("RateCourse.SendAnswer")})]})]})})]})},Q=S(A.Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`,B={loading:!1,step:0},O=({entityModel:a,entityId:o,visible:d,questionnaire:e,onClose:n,onFinish:g})=>{var r;const{sendQuestionnaireAnswer:b}=i.useContext(N.EscolaLMSContext),{t:l}=T(),[s,c]=i.useState(B),h=i.useCallback(async(p,m)=>{if(e.questions){c(x=>({...x,loading:!0}));try{(await b(a,o,e.id,{question_id:e.questions[s.step].id,rate:p,note:m,visible_on_front:e.questions[s.step].public_answers})).success&&R(`${l("RateCourse.ThankYouMessage")}`,"success")}catch(x){R("Error","error"),console.error(x)}finally{c(x=>({...x,loading:!1,step:x.step+1,note:"",rating:null}))}}},[a,o,e.id,s]),u=i.useCallback((p,m)=>{h(p,m),e.questions&&s.step===e.questions.length-1&&n()},[h,e,s.step,n]);return t.jsx(Q,{onClose:n,visible:d,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,closable:!1,children:e.questions&&t.jsx(M,{questionnaireTitle:e.title,entityModel:a,data:e.questions[s.step],handleSubmit:(p,m)=>u(p,m),withStarsRating:((r=e.questions[s.step])==null?void 0:r.type)===v.REVIEW,onClose:n})})},I=()=>{const{user:a}=i.useContext(k.EscolaLMSContext),o=i.useMemo(()=>{var e,n;return!!((n=(e=a.value)==null?void 0:e.roles)!=null&&n.includes("tutor"))},[a]),d=i.useMemo(()=>{var e,n;return!!((n=(e=a.value)==null?void 0:e.roles)!=null&&n.includes("student"))},[a]);return{isTutor:o,isStudent:d}};export{O as R,I as u};

import{m as $,e as F,c as p,b as z,a as N,n as B,j as e,o as b,f as a,k as V,T as A,M as g,p as T,C,g as q,A as H,s as I,v as K,q as r,L as O,w as W,E as D,x as U}from"./index-aC1vIBhc.js";import{r as s}from"./sentry-DZqhWugq.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";var Z=$();const G=r.div`
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:i})=>i.gray4};

  @media (max-width: 991px) {
    padding-top: 100px;
    height: 100%;
    padding-bottom: 50px;
    * {
      p,
      a {
        text-align: center;
      }
    }
  }
`,E=r(O)`
  color: ${({theme:i})=>i.primaryColor}!important;
`,J=r.div`
  background-color: ${({theme:i})=>i.gray4};
  padding-top: 100px;
  /* height: calc(100vh - 452px); */
  @media (max-width: 991px) {
    height: 100%;
    padding: 100px 0px;
    text-align: center;
  }
  .image-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .content-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .email-title {
      text-align: center;
    }

    .email-main-text {
      text-align: center;
      margin: 25px 0 85px;
      font-weight: 700;
      span {
        color: ${({theme:i})=>i.primaryColor};
      }
    }

    .email-help-text {
      margin: 0 auto 20px 0;
      ul {
        padding-left: 15px;
        margin-left: 0;
        li {
          font-size: 12px;
        }
      }
    }

    .back-text {
      text-align: center;
      margin-top: 20px;
    }
  }
  .back-to-login {
    margin: 20px 0px;
  }
`,Q=r(W.Modal)`
  a {
    font-size: 1.14em;
  }
`,ie=()=>{var j,y;const{search:i}=F(),{user:u,socialAuthorize:w}=s.useContext(p.EscolaLMSContext),[c,h]=s.useState(""),[L,d]=s.useState(!1),{settings:x}=s.useContext(p.EscolaLMSContext),[M,R]=s.useState(""),o=z(),m=i.split("?token=")[1],{t}=N(),f=(y=(j=x==null?void 0:x.value)==null?void 0:j.config)==null?void 0:y[B.registerWarningMetaKey],S={"AdditionalFields.Privacy Policy":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:a.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:a.privacyPolicy,children:t("TermsOfService")})]})};m&&(w(m),setTimeout(()=>{o.push(a.home)},1e3)),!u.loading&&!m&&u.value&&o.push(a.home),s.useEffect(()=>{d(c==="success")},[c]);const P=()=>{var v,k;const{config:l}=s.useContext(p.EscolaLMSContext),n=((k=(v=l==null?void 0:l.value)==null?void 0:v.escola_auth)==null?void 0:k.account_must_be_enabled_by_admin)==="enabled";return e.jsx(J,{children:e.jsxs(C,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx(D,{})}),e.jsxs("div",{className:"content-container",children:[e.jsx(A.Title,{className:"email-title",level:3,children:t(`EmailActivation.${n?"Title2":"Title"}`)}),!n&&e.jsx(g.MarkdownRenderer,{components:{a:_=>e.jsx("span",{children:_.children})},children:t("EmailActivation.Text",{email:M})}),e.jsx(g.MarkdownRenderer,{children:t(`EmailActivation.${n?"HelpText2":"HelpText"}`)}),!n&&e.jsx("div",{className:"back-text",children:e.jsx(U.Link,{onClick:()=>h("register"),children:t("EmailActivation.RegisterAgain")})}),e.jsx("div",{className:"back-to-login",children:e.jsx(T.Button,{onClick:()=>o.push(a.login),children:t("ResetForm.BackToLogin")})})]})]})})};return e.jsxs(V,{metaTitle:t("LoginAndRegister"),children:[f&&e.jsxs(Q,{onClose:()=>d(!1),visible:L,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(A.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(g.MarkdownRenderer,{children:f}),e.jsx(T.Button,{mode:"outline",onClick:()=>d(!1),children:t("I'm aware")})]}),c!=="success"?e.jsx(G,{children:e.jsx(C,{children:e.jsx(Z.RegisterForm,{return_url:`${H}${I()}${a.emailVerify}`,fieldLabels:S,mobile:q,onLoginLink:()=>o.push(a.login),onSuccess:(l,n)=>{h("success"),R(n.email)},...K?{submitText:"Załóż darmowe konto"}:{}})})}):e.jsx(P,{})]})};export{ie as default};
//# sourceMappingURL=index-BF0bwQsx.js.map

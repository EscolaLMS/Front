import{y as $,q as r,o as F,r as n,n as p,i as z,h as N,j as e,z as b,p as s,x as B,T as A,M as g,A as T,C,D as H,E as V,k as q,F as I,L as O,G as W,H as D,J as G}from"./index-Bk8P6YMX.js";var J=$();const U=r.div`
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
`,Z=r.div`
  background-color: ${({theme:i})=>i.gray4};
  padding-top: 100px;
  height: calc(100vh - 452px);
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
`,K=r(W.Modal)`
  a {
    font-size: 1.14em;
  }
`,X=()=>{var f,y;const{search:i}=F(),{user:h,socialAuthorize:L}=n.useContext(p.EscolaLMSContext),[c,u]=n.useState(""),[w,d]=n.useState(!1),{settings:x}=n.useContext(p.EscolaLMSContext),[R,M]=n.useState(""),o=z(),m=i.split("?token=")[1],{t}=N(),j=(y=(f=x==null?void 0:x.value)==null?void 0:f.config)==null?void 0:y.registerWarning,S={"AdditionalFields.Privacy Policy":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:s.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:s.privacyPolicy,children:t("TermsOfService")})]})};m&&(L(m),setTimeout(()=>{o.push(s.home)},1e3)),!h.loading&&!m&&h.value&&o.push(s.home),n.useEffect(()=>{d(c==="success")},[c]);const P=()=>{var v,k;const{config:l}=n.useContext(p.EscolaLMSContext),a=((k=(v=l==null?void 0:l.value)==null?void 0:v.escola_auth)==null?void 0:k.account_must_be_enabled_by_admin)==="enabled";return e.jsx(Z,{children:e.jsxs(C,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx(D,{})}),e.jsxs("div",{className:"content-container",children:[e.jsx(A.Title,{className:"email-title",level:3,children:t(`EmailActivation.${a?"Title2":"Title"}`)}),!a&&e.jsx(g.MarkdownRenderer,{components:{a:_=>e.jsx("span",{children:_.children})},children:t("EmailActivation.Text",{email:R})}),e.jsx(g.MarkdownRenderer,{children:t(`EmailActivation.${a?"HelpText2":"HelpText"}`)}),!a&&e.jsx("div",{className:"back-text",children:e.jsx(G.Link,{onClick:()=>u("register"),children:t("EmailActivation.RegisterAgain")})}),e.jsx("div",{className:"back-to-login",children:e.jsx(T.Button,{onClick:()=>o.push(s.login),children:t("ResetForm.BackToLogin")})})]})]})})};return e.jsxs(B,{metaTitle:t("LoginAndRegister"),children:[j&&e.jsxs(K,{onClose:()=>d(!1),visible:w,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(A.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(g.MarkdownRenderer,{children:j}),e.jsx(T.Button,{mode:"outline",onClick:()=>d(!1),children:t("I'm aware")})]}),c!=="success"?e.jsx(U,{children:e.jsx(C,{children:e.jsx(J.RegisterForm,{return_url:`${H}${V()}${s.emailVerify}`,fieldLabels:S,mobile:q,onLoginLink:()=>o.push(s.login),onSuccess:(l,a)=>{u("success"),M(a.email)},...I?{submitText:"Załóż darmowe konto"}:{}})})}):e.jsx(P,{})]})};export{X as default};

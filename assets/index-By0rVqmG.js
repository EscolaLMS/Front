import{w as $,q as r,l as F,r as a,i as p,k as z,h as N,x as B,j as e,y as b,m as s,v as H,T as A,M as g,z as T,C,A as V,D as q,o as D,E as I,L as K,F as O,G as W,H as G}from"./index-CHBp5M0J.js";var U=$();const Z=r.div`
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
`,E=r(K)`
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
`,Q=r(O.Modal)`
  a {
    font-size: 1.14em;
  }
`,Y=()=>{var j,f;const{search:i}=F(),{user:h,socialAuthorize:w}=a.useContext(p.EscolaLMSContext),[c,u]=a.useState(""),[L,d]=a.useState(!1),{settings:x}=a.useContext(p.EscolaLMSContext),[M,R]=a.useState(""),o=z(),m=i.split("?token=")[1],{t}=N(),y=(f=(j=x==null?void 0:x.value)==null?void 0:j.config)==null?void 0:f[B.registerWarningMetaKey],S={"AdditionalFields.Privacy Policy":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:s.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:s.privacyPolicy,children:t("TermsOfService")})]})};m&&(w(m),setTimeout(()=>{o.push(s.home)},1e3)),!h.loading&&!m&&h.value&&o.push(s.home),a.useEffect(()=>{d(c==="success")},[c]);const P=()=>{var v,k;const{config:l}=a.useContext(p.EscolaLMSContext),n=((k=(v=l==null?void 0:l.value)==null?void 0:v.escola_auth)==null?void 0:k.account_must_be_enabled_by_admin)==="enabled";return e.jsx(J,{children:e.jsxs(C,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx(W,{})}),e.jsxs("div",{className:"content-container",children:[e.jsx(A.Title,{className:"email-title",level:3,children:t(`EmailActivation.${n?"Title2":"Title"}`)}),!n&&e.jsx(g.MarkdownRenderer,{components:{a:_=>e.jsx("span",{children:_.children})},children:t("EmailActivation.Text",{email:M})}),e.jsx(g.MarkdownRenderer,{children:t(`EmailActivation.${n?"HelpText2":"HelpText"}`)}),!n&&e.jsx("div",{className:"back-text",children:e.jsx(G.Link,{onClick:()=>u("register"),children:t("EmailActivation.RegisterAgain")})}),e.jsx("div",{className:"back-to-login",children:e.jsx(T.Button,{onClick:()=>o.push(s.login),children:t("ResetForm.BackToLogin")})})]})]})})};return e.jsxs(H,{metaTitle:t("LoginAndRegister"),children:[y&&e.jsxs(Q,{onClose:()=>d(!1),visible:L,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(A.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(g.MarkdownRenderer,{children:y}),e.jsx(T.Button,{mode:"outline",onClick:()=>d(!1),children:t("I'm aware")})]}),c!=="success"?e.jsx(Z,{children:e.jsx(C,{children:e.jsx(U.RegisterForm,{return_url:`${V}${q()}${s.emailVerify}`,fieldLabels:S,mobile:D,onLoginLink:()=>o.push(s.login),onSuccess:(l,n)=>{u("success"),R(n.email)},...I?{submitText:"Załóż darmowe konto"}:{}})})}):e.jsx(P,{})]})};export{Y as default};
//# sourceMappingURL=index-By0rVqmG.js.map

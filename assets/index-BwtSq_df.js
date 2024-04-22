import{w as _,q as r,n as $,r as s,m as p,h as z,f as F,j as e,x as b,o as a,v as N,T as E,M as u,y as V,C as A,A as B,z as I,i as q,D as H,L as O,E as D,F as W,G}from"./index-rkmB2-qz.js";var U=_();const Z=r.div`
  padding-top: 100px;
  padding-bottom: 50px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:i})=>i.gray4};

  @media (max-width: 991px) {
    padding-top: 100px;
    height: 100%;
    padding-bottom: 50px;
    * {
      width: 100%;
      p,
      a {
        text-align: center;
      }
    }
  }
`,C=r(O)`
  color: ${({theme:i})=>i.primaryColor}!important;
`,J=r.div`
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
`,K=r(D.Modal)`
  a {
    font-size: 1.14em;
  }
`,X=()=>{var y,j;const{search:i}=$(),{user:h,socialAuthorize:T}=s.useContext(p.EscolaLMSContext),[l,g]=s.useState(""),[w,c]=s.useState(!1),{settings:d}=s.useContext(p.EscolaLMSContext),[L,M]=s.useState(""),x=z(),m=i.split("?token=")[1],{t}=F(),f=(j=(y=d==null?void 0:d.value)==null?void 0:y.config)==null?void 0:j.registerWarning,R={"AdditionalFields.Privacy Policy":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(C,{to:a.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(C,{to:a.privacyPolicy,children:t("TermsOfService")})]})};m&&(T(m),setTimeout(()=>{x.push(a.home)},1e3)),!h.loading&&!m&&h.value&&x.push(a.home),s.useEffect(()=>{c(l==="success")},[l]);const S=()=>{var v,k;const{config:o}=s.useContext(p.EscolaLMSContext),n=((k=(v=o==null?void 0:o.value)==null?void 0:v.escola_auth)==null?void 0:k.account_must_be_enabled_by_admin)==="enabled";return e.jsx(J,{children:e.jsxs(A,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx(W,{})}),e.jsxs("div",{className:"content-container",children:[e.jsx(E.Title,{className:"email-title",level:3,children:t(`EmailActivation.${n?"Title2":"Title"}`)}),!n&&e.jsx(u.MarkdownRenderer,{components:{a:P=>e.jsx("span",{children:P.children})},children:t("EmailActivation.Text",{email:L})}),e.jsx(u.MarkdownRenderer,{children:t(`EmailActivation.${n?"HelpText2":"HelpText"}`)}),!n&&e.jsx("div",{className:"back-text",children:e.jsx(G.Link,{onClick:()=>g("register"),children:t("EmailActivation.RegisterAgain")})})]})]})})};return e.jsxs(N,{metaTitle:t("LoginAndRegister"),children:[f&&e.jsxs(K,{onClose:()=>c(!1),visible:w,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(E.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(u.MarkdownRenderer,{children:f}),e.jsx(V.Button,{mode:"outline",onClick:()=>c(!1),children:t("I'm aware")})]}),l!=="success"?e.jsx(Z,{children:e.jsx(A,{children:e.jsx(U.RegisterForm,{return_url:`${B}${I()}${a.emailVerify}`,fieldLabels:R,mobile:q,onLoginLink:()=>x.push(a.login),onSuccess:(o,n)=>{g("success"),M(n.email)},...H==="true"?{submitText:"Załóż darmowe konto"}:{}})})}):e.jsx(S,{})]})};export{X as default};

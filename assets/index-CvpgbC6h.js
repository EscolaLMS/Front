import{w as P,q as l,n as z,r as n,m as p,h as $,f as F,j as e,x as b,o as a,v as N,T as E,M as u,y as V,C as A,i as B,z as I,L as q,A as H,E as O,D}from"./index-BoiM7txo.js";var W=P();const Z=l.div`
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
`,C=l(q)`
  color: ${({theme:i})=>i.primaryColor}!important;
`,G=l.div`
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
`,J=l(H.Modal)`
  a {
    font-size: 1.14em;
  }
`,Q=()=>{var f,j;const{search:i}=z(),{user:h,socialAuthorize:T}=n.useContext(p.EscolaLMSContext),[r,g]=n.useState(""),[w,c]=n.useState(!1),{settings:d}=n.useContext(p.EscolaLMSContext),[L,M]=n.useState(""),x=$(),m=i.split("?token=")[1],{t}=F(),y=(j=(f=d==null?void 0:d.value)==null?void 0:f.config)==null?void 0:j.registerWarning,R={"AdditionalFields.Privacy Policy":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(C,{to:a.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(C,{to:a.privacyPolicy,children:t("TermsOfService")})]})};m&&(T(m),setTimeout(()=>{x.push(a.home)},1e3)),!h.loading&&!m&&h.value&&x.push(a.home),n.useEffect(()=>{c(r==="success")},[r]);const S=()=>{var v,k;const{config:o}=n.useContext(p.EscolaLMSContext),s=((k=(v=o==null?void 0:o.value)==null?void 0:v.escola_auth)==null?void 0:k.account_must_be_enabled_by_admin)==="enabled";return e.jsx(G,{children:e.jsxs(A,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx(O,{})}),e.jsxs("div",{className:"content-container",children:[e.jsx(E.Title,{className:"email-title",level:3,children:t(`EmailActivation.${s?"Title2":"Title"}`)}),!s&&e.jsx(u.MarkdownRenderer,{components:{a:_=>e.jsx("span",{children:_.children})},children:t("EmailActivation.Text",{email:L})}),e.jsx(u.MarkdownRenderer,{children:t(`EmailActivation.${s?"HelpText2":"HelpText"}`)}),!s&&e.jsx("div",{className:"back-text",children:e.jsx(D.Link,{onClick:()=>g("register"),children:t("EmailActivation.RegisterAgain")})})]})]})})};return e.jsxs(N,{metaTitle:t("LoginAndRegister"),children:[y&&e.jsxs(J,{onClose:()=>c(!1),visible:w,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(E.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(u.MarkdownRenderer,{children:y}),e.jsx(V.Button,{mode:"outline",onClick:()=>c(!1),children:t("I'm aware")})]}),r!=="success"?e.jsx(Z,{children:e.jsx(A,{children:e.jsx(W.RegisterForm,{return_url:a.emailVerify,fieldLabels:R,mobile:B,onLoginLink:()=>x.push(a.login),onSuccess:(o,s)=>{g("success"),M(s.email)},...I==="true"?{submitText:"Załóż darmowe konto"}:{}})})}):e.jsx(S,{})]})};export{Q as default};

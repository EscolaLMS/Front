import{w as P,q as l,n as z,r as n,m as p,h as $,f as F,j as e,x as b,o as a,v as N,T as A,M as h,y as q,C,i as B,L as H,z as V,E as I,A as O}from"./index-BRyshI_t.js";var W=P();const D=l.div`
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
`,E=l(H)`
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
`,J=l(V.Modal)`
  a {
    font-size: 1.14em;
  }
`,Q=()=>{var f,j;const{search:i}=z(),{user:g,socialAuthorize:T}=n.useContext(p.EscolaLMSContext),[r,u]=n.useState(""),[w,c]=n.useState(!1),{settings:d}=n.useContext(p.EscolaLMSContext),[L,M]=n.useState(""),x=$(),m=i.split("?token=")[1],{t}=F(),y=(j=(f=d==null?void 0:d.value)==null?void 0:f.config)==null?void 0:j.registerWarning,R={"AdditionalFields.Privacy Policy":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:a.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(b.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:a.privacyPolicy,children:t("TermsOfService")})]})};m&&(T(m),setTimeout(()=>{x.push(a.home)},1e3)),!g.loading&&!m&&g.value&&x.push(a.home),n.useEffect(()=>{c(r==="success")},[r]);const S=()=>{var v,k;const{config:o}=n.useContext(p.EscolaLMSContext),s=((k=(v=o==null?void 0:o.value)==null?void 0:v.escola_auth)==null?void 0:k.account_must_be_enabled_by_admin)==="enabled";return e.jsx(G,{children:e.jsxs(C,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx(I,{})}),e.jsxs("div",{className:"content-container",children:[e.jsx(A.Title,{className:"email-title",level:3,children:t(`EmailActivation.${s?"Title2":"Title"}`)}),!s&&e.jsx(h.MarkdownRenderer,{components:{a:_=>e.jsx("span",{children:_.children})},children:t("EmailActivation.Text",{email:L})}),e.jsx(h.MarkdownRenderer,{children:t(`EmailActivation.${s?"HelpText2":"HelpText"}`)}),!s&&e.jsx("div",{className:"back-text",children:e.jsx(O.Link,{onClick:()=>u("register"),children:t("EmailActivation.RegisterAgain")})})]})]})})};return e.jsxs(N,{metaTitle:t("LoginAndRegister"),children:[y&&e.jsxs(J,{onClose:()=>c(!1),visible:w,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(A.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(h.MarkdownRenderer,{children:y}),e.jsx(q.Button,{mode:"outline",onClick:()=>c(!1),children:t("I'm aware")})]}),r!=="success"?e.jsx(D,{children:e.jsx(C,{children:e.jsx(W.RegisterForm,{return_url:"#/email-verify",fieldLabels:R,mobile:B,onLoginLink:()=>x.push(a.login),onSuccess:(o,s)=>{u("success"),M(s.email)}})})}):e.jsx(S,{})]})};export{Q as default};

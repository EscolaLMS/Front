import{w as z,q as r,n as $,r as s,m as h,h as F,f as N,j as e,x as C,o as a,v as q,T as A,M as u,y as B,C as w,z as l,i as H,L as V,A as I,E as O,D as W}from"./index-BZyw651V.js";var D=z();const G=r.div`
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
  }
`,E=r(V)`
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
`,K=r(I.Modal)`
  a {
    font-size: 1.14em;
  }
`,U=()=>{var f,v;const{search:i}=$(),{user:g,socialAuthorize:T}=s.useContext(h.EscolaLMSContext),[c,j]=s.useState(""),[R,d]=s.useState(!1),{settings:x}=s.useContext(h.EscolaLMSContext),[L,M]=s.useState(""),m=F(),p=i.split("?token=")[1],{t}=N(),y=(v=(f=x==null?void 0:x.value)==null?void 0:f.config)==null?void 0:v.registerWarning,S={"AdditionalFields.Privacy Policy":e.jsxs(C.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:a.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(C.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(E,{to:a.privacyPolicy,children:t("TermsOfService")})]})};p&&(T(p),setTimeout(()=>{m.push(a.home)},1e3)),!g.loading&&!p&&g.value&&m.push(a.home),s.useEffect(()=>{d(c==="success")},[c]);const _=()=>{var b,k;const{config:o}=s.useContext(h.EscolaLMSContext),n=((k=(b=o==null?void 0:o.value)==null?void 0:b.escola_auth)==null?void 0:k.account_must_be_enabled_by_admin)==="enabled";return e.jsx(J,{children:e.jsxs(w,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx(O,{})}),e.jsx(l.Row,{justify:"center",children:e.jsx(l.Col,{md:12,children:e.jsxs("div",{className:"content-container",children:[e.jsx(A.Title,{className:"email-title",level:3,children:t(`EmailActivation.${n?"Title2":"Title"}`)}),!n&&e.jsx(u.MarkdownRenderer,{components:{a:P=>e.jsx("span",{children:P.children})},children:t("EmailActivation.Text",{email:L})}),e.jsx(u.MarkdownRenderer,{children:t(`EmailActivation.${n?"HelpText2":"HelpText"}`)}),!n&&e.jsx("div",{className:"back-text",children:e.jsx(W.Link,{onClick:()=>j("register"),children:t("EmailActivation.RegisterAgain")})})]})})})]})})};return e.jsxs(q,{metaTitle:t("LoginAndRegister"),children:[y&&e.jsxs(K,{onClose:()=>d(!1),visible:R,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(A.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(u.MarkdownRenderer,{children:y}),e.jsx(B.Button,{mode:"outline",onClick:()=>d(!1),children:t("I'm aware")})]}),c!=="success"?e.jsx(G,{children:e.jsx(w,{children:e.jsx(l.Row,{justify:"center",children:e.jsx(l.Col,{md:12,children:e.jsx(D.RegisterForm,{return_url:"#/email-verify",fieldLabels:S,mobile:H,onLoginLink:()=>m.push(a.login),onSuccess:(o,n)=>{j("success"),M(n.email)}})})})})}):e.jsx(_,{})]})};export{U as default};

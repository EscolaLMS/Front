import{p as S,q as a,s as P,r as i,l as y,i as z,f as F,j as e,v,k as n,L as O,T as k,M as m,B as N,m as T,h as o,o as q,w as B,x as V,y as _}from"./index-B8t7bxZo.js";var $=S();const D=a.div`
  min-height: calc(100vh - 283px);

  display: flex;
  align-items: center;
  justify-content: center; /* TODO: export colors */
  background-color: #f8f8f8;
  @media (max-width: 991px) {
    padding-top: 100px;
    min-height: 100%;
    padding-bottom: 50px;
    /* TODO: make a wrapper for it */
  }
`,C=a(B)`
  color: ${({theme:s})=>s.primaryColor}!important;
`,H=a.div`
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
        color: ${({theme:s})=>s.primaryColor};
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
`,W=a(V.Modal)`
  a {
    font-size: 1.14em;
  }
`,G=()=>{var f,g;const{search:s}=P(),{user:u,socialAuthorize:R}=i.useContext(y.EscolaLMSContext),[r,h]=i.useState(""),[w,l]=i.useState(!1),{settings:c}=i.useContext(y.EscolaLMSContext),[A,E]=i.useState(""),d=z(),x=s.split("?token=")[1],{t}=F(),p=(g=(f=c==null?void 0:c.value)==null?void 0:f.config)==null?void 0:g.registerWarning,b={"AdditionalFields.Privacy Policy":e.jsxs(v.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(C,{to:n.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(v.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(C,{to:n.privacyPolicy,children:t("TermsOfService")})]})};x&&(R(x),setTimeout(()=>{d.push(n.home)},1e3)),!u.loading&&!x&&u.value&&d.push(n.home),i.useEffect(()=>{l(r==="success")},[r]);const L=()=>e.jsx(H,{children:e.jsx(T,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsxs("div",{className:"content-container",children:[e.jsx(k.Title,{className:"email-title",level:3,children:t("EmailActivation.Title")}),e.jsx(m.MarkdownRenderer,{components:{a:j=>e.jsx("span",{children:j.children})},children:t("EmailActivation.Text",{email:A})}),e.jsx(m.MarkdownRenderer,{children:t("EmailActivation.HelpText")}),e.jsx("div",{className:"back-text",children:e.jsx(_.Link,{onClick:()=>h("register"),underline:!0,children:t("EmailActivation.RegisterAgain")})})]})})})})});return e.jsxs(O,{metaTitle:t("LoginAndRegister"),children:[p&&e.jsxs(W,{onClose:()=>l(!1),visible:w,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(k.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(m.MarkdownRenderer,{children:p}),e.jsx(N.Button,{mode:"outline",onClick:()=>l(!1),children:t("I'm aware")})]}),r!=="success"?e.jsx(D,{children:e.jsx(T,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsx($.RegisterForm,{return_url:"#/email-verify",fieldLabels:b,mobile:q,onLoginLink:()=>d.push(n.login),onSuccess:(j,M)=>{h("success"),E(M.email)}})})})})}):e.jsx(L,{})]})};export{G as default};

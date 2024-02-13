import{o as b,q as l,p as P,r as i,k as y,l as z,f as F,j as e,s as v,n,L as N,T as k,M as m,v as q,C,i as o,m as V,w as _,x as $,y as B}from"./index-8nfYNS1Y.js";var H=b();const O=l.div`
  min-height: calc(100vh - 500px);
  display: flex;
  align-items: center;
  justify-content: center;
`,R=l(_)`
  color: ${({theme:s})=>s.primaryColor}!important;
`,W=l.div`
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
`,I=l($.Modal)`
  a {
    font-size: 1.14em;
  }
`,G=()=>{var j,f;const{search:s}=P(),{user:u,socialAuthorize:T}=i.useContext(y.EscolaLMSContext),[a,h]=i.useState(""),[A,r]=i.useState(!1),{settings:c}=i.useContext(y.EscolaLMSContext),[E,L]=i.useState(""),d=z(),x=s.split("?token=")[1],{t}=F(),p=(f=(j=c==null?void 0:c.value)==null?void 0:j.config)==null?void 0:f.registerWarning,w={"AdditionalFields.Privacy Policy":e.jsxs(v.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(R,{to:n.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(v.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(R,{to:n.privacyPolicy,children:t("TermsOfService")})]})};x&&(T(x),setTimeout(()=>{d.push(n.home)},1e3)),!u.loading&&!x&&u.value&&d.push(n.home),i.useEffect(()=>{r(a==="success")},[a]);const M=()=>e.jsx(W,{children:e.jsx(C,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsxs("div",{className:"content-container",children:[e.jsx(k.Title,{className:"email-title",level:3,children:t("EmailActivation.Title")}),e.jsx(m.MarkdownRenderer,{components:{a:g=>e.jsx("span",{children:g.children})},children:t("EmailActivation.Text",{email:E})}),e.jsx(m.MarkdownRenderer,{children:t("EmailActivation.HelpText")}),e.jsx("div",{className:"back-text",children:e.jsx(B.Link,{onClick:()=>h("register"),underline:!0,children:t("EmailActivation.RegisterAgain")})})]})})})})});return e.jsxs(N,{metaTitle:t("LoginAndRegister"),children:[p&&e.jsxs(I,{onClose:()=>r(!1),visible:A,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(k.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(m.MarkdownRenderer,{children:p}),e.jsx(q.Button,{mode:"outline",onClick:()=>r(!1),children:t("I'm aware")})]}),a!=="success"?e.jsx(O,{children:e.jsx(C,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsx(H.RegisterForm,{return_url:"#/email-verify",fieldLabels:w,mobile:V,onLoginLink:()=>d.push(n.login),onSuccess:(g,S)=>{h("success"),L(S.email)}})})})})}):e.jsx(M,{})]})};export{G as default};

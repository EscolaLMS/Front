import{q as l,p as S,r as i,k as v,m as P,f as z,j as e,l as m,o as n,L as F,T as k,M as u,s as N,C,i as o,n as V,v as _,w as $,x as q}from"./index-BsLXwVX-.js";const B=l.div`
  min-height: calc(100vh - 500px);
  display: flex;
  align-items: center;
  justify-content: center;
`,A=l(_)`
  color: ${({theme:s})=>s.primaryColor}!important;
`,H=l.div`
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
`,O=l($.Modal)`
  a {
    font-size: 1.14em;
  }
`,I=()=>{var f,g;const{search:s}=S(),{user:h,socialAuthorize:E}=i.useContext(v.EscolaLMSContext),[a,p]=i.useState(""),[T,r]=i.useState(!1),{settings:c}=i.useContext(v.EscolaLMSContext),[L,R]=i.useState(""),d=P(),x=s.split("?token=")[1],{t}=z(),j=(g=(f=c==null?void 0:c.value)==null?void 0:f.config)==null?void 0:g.registerWarning,b={"AdditionalFields.Privacy Policy":e.jsxs(m.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(A,{to:n.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(m.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(A,{to:n.privacyPolicy,children:t("TermsOfService")})]})};x&&(E(x),setTimeout(()=>{d.push(n.home)},1e3)),!h.loading&&!x&&h.value&&d.push(n.home),i.useEffect(()=>{r(a==="success")},[a]);const w=()=>e.jsx(H,{children:e.jsx(C,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsxs("div",{className:"content-container",children:[e.jsx(k.Title,{className:"email-title",level:3,children:t("EmailActivation.Title")}),e.jsx(u.MarkdownRenderer,{components:{a:y=>e.jsx("span",{children:y.children})},children:t("EmailActivation.Text",{email:L})}),e.jsx(u.MarkdownRenderer,{children:t("EmailActivation.HelpText")}),e.jsx("div",{className:"back-text",children:e.jsx(q.Link,{onClick:()=>p("register"),underline:!0,children:t("EmailActivation.RegisterAgain")})})]})})})})});return e.jsxs(F,{metaTitle:t("LoginAndRegister"),children:[j&&e.jsxs(O,{onClose:()=>r(!1),visible:T,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(k.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(u.MarkdownRenderer,{children:j}),e.jsx(N.Button,{mode:"outline",onClick:()=>r(!1),children:t("I'm aware")})]}),a!=="success"?e.jsx(B,{children:e.jsx(C,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsx(m.RegisterForm,{return_url:"#/email-verify",fieldLabels:b,mobile:V,onLoginLink:()=>d.push(n.login),onSuccess:(y,M)=>{p("success"),R(M.email)}})})})})}):e.jsx(w,{})]})};export{I as default};

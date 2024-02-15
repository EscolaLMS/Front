import{o as S,q as l,p as P,r as i,k as y,l as z,f as F,j as e,s as v,n,L as N,T as k,M as m,v as O,C,i as o,m as q,w as V,x as _,y as $}from"./index-Duhnd3NG.js";import"components/atoms/Typography/Text";var B=S();const H=l.div`
  min-height: calc(100vh - 283px);

  display: flex;
  align-items: center;
  justify-content: center; /* TODO: export colors */
  background-color: #f8f8f8;
`,T=l(V)`
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
`,D=l(_.Modal)`
  a {
    font-size: 1.14em;
  }
`,J=()=>{var f,j;const{search:s}=P(),{user:u,socialAuthorize:R}=i.useContext(y.EscolaLMSContext),[r,h]=i.useState(""),[A,a]=i.useState(!1),{settings:c}=i.useContext(y.EscolaLMSContext),[E,L]=i.useState(""),d=z(),x=s.split("?token=")[1],{t}=F(),p=(j=(f=c==null?void 0:c.value)==null?void 0:f.config)==null?void 0:j.registerWarning,b={"AdditionalFields.Privacy Policy":e.jsxs(v.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(T,{to:n.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(v.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(T,{to:n.privacyPolicy,children:t("TermsOfService")})]})};x&&(R(x),setTimeout(()=>{d.push(n.home)},1e3)),!u.loading&&!x&&u.value&&d.push(n.home),i.useEffect(()=>{a(r==="success")},[r]);const w=()=>e.jsx(W,{children:e.jsx(C,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsxs("div",{className:"content-container",children:[e.jsx(k.Title,{className:"email-title",level:3,children:t("EmailActivation.Title")}),e.jsx(m.MarkdownRenderer,{components:{a:g=>e.jsx("span",{children:g.children})},children:t("EmailActivation.Text",{email:E})}),e.jsx(m.MarkdownRenderer,{children:t("EmailActivation.HelpText")}),e.jsx("div",{className:"back-text",children:e.jsx($.Link,{onClick:()=>h("register"),underline:!0,children:t("EmailActivation.RegisterAgain")})})]})})})})});return e.jsxs(N,{metaTitle:t("LoginAndRegister"),children:[p&&e.jsxs(D,{onClose:()=>a(!1),visible:A,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(k.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(m.MarkdownRenderer,{children:p}),e.jsx(O.Button,{mode:"outline",onClick:()=>a(!1),children:t("I'm aware")})]}),r!=="success"?e.jsx(H,{children:e.jsx(C,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsx(B.RegisterForm,{return_url:"#/email-verify",fieldLabels:b,mobile:q,onLoginLink:()=>d.push(n.login),onSuccess:(g,M)=>{h("success"),L(M.email)}})})})})}):e.jsx(w,{})]})};export{J as default};

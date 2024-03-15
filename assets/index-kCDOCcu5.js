import{p as S,q as a,k as P,r as i,h as y,i as z,f as F,j as e,s as v,l as n,o as O,T as k,M as m,v as N,C as w,w as o,n as q,L as V,x as _,E as $,y as B}from"./index-BCUQyqgJ.js";var D=S();const H=a.div`
  padding-top: 100px;
  padding-bottom: 50px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center; /* TODO: export colors */
  background-color: #f8f8f8;
  @media (max-width: 991px) {
    padding-top: 100px;
    height: 100%;
    padding-bottom: 50px;
    /* TODO: make a wrapper for it */
  }
`,C=a(V)`
  color: ${({theme:s})=>s.primaryColor}!important;
`,I=a.div`
  padding: 200px 0px;
  background-color: #f8f8f8;

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
`,W=a(_.Modal)`
  a {
    font-size: 1.14em;
  }
`,J=()=>{var g,f;const{search:s}=P(),{user:p,socialAuthorize:T}=i.useContext(y.EscolaLMSContext),[r,h]=i.useState(""),[b,l]=i.useState(!1),{settings:c}=i.useContext(y.EscolaLMSContext),[E,A]=i.useState(""),d=z(),x=s.split("?token=")[1],{t}=F(),u=(f=(g=c==null?void 0:c.value)==null?void 0:g.config)==null?void 0:f.registerWarning,R={"AdditionalFields.Privacy Policy":e.jsxs(v.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(C,{to:n.privacyPolicy,children:t("PrivacyPolicy")})]}),"AdditionalFields.Terms of Service":e.jsxs(v.Text,{size:"14",children:[t("AcceptCheckbox")," ",e.jsx(C,{to:n.privacyPolicy,children:t("TermsOfService")})]})};x&&(T(x),setTimeout(()=>{d.push(n.home)},1e3)),!p.loading&&!x&&p.value&&d.push(n.home),i.useEffect(()=>{l(r==="success")},[r]);const L=()=>e.jsx(I,{children:e.jsxs(w,{children:[e.jsx("div",{className:"image-wrapper",children:e.jsx($,{})}),e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsxs("div",{className:"content-container",children:[e.jsx(k.Title,{className:"email-title",level:3,children:t("EmailActivation.Title")}),e.jsx(m.MarkdownRenderer,{components:{a:j=>e.jsx("span",{children:j.children})},children:t("EmailActivation.Text",{email:E})}),e.jsx(m.MarkdownRenderer,{children:t("EmailActivation.HelpText")}),e.jsx("div",{className:"back-text",children:e.jsx(B.Link,{onClick:()=>h("register"),children:t("EmailActivation.RegisterAgain")})})]})})})]})});return e.jsxs(O,{metaTitle:t("LoginAndRegister"),children:[u&&e.jsxs(W,{onClose:()=>l(!1),visible:b,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:[e.jsx(k.Title,{level:4,className:"modal-title",children:t("Warning")}),e.jsx(m.MarkdownRenderer,{children:u}),e.jsx(N.Button,{mode:"outline",onClick:()=>l(!1),children:t("I'm aware")})]}),r!=="success"?e.jsx(H,{children:e.jsx(w,{children:e.jsx(o.Row,{justify:"center",children:e.jsx(o.Col,{md:12,children:e.jsx(D.RegisterForm,{return_url:"#/email-verify",fieldLabels:R,mobile:q,onLoginLink:()=>d.push(n.login),onSuccess:(j,M)=>{h("success"),A(M.email)}})})})})}):e.jsx(L,{})]})};export{J as default};

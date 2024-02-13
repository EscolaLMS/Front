import{z as h,q as L,p as f,r as l,k as j,f as R,l as w,j as e,L as E,C as F,i as u,n as g,m as p,A as x}from"./index-8nfYNS1Y.js";import{R as k}from"./ResetPasswordForm-CK1Y39aO.js";var y=h();const S=L.div`
  min-height: calc(100vh - 583px);
  display: flex;
  align-items: center;
  justify-content: center;
`,v=()=>{const{search:t,state:i}=f(),{user:n,socialAuthorize:d}=l.useContext(j.EscolaLMSContext),[m,a]=l.useState("login"),{t:r}=R(),s=w(),o=t.split("?token=")[1],c=i&&i.referrer||t.split("?referrer=")[1]||"/";return o&&(d(o),setTimeout(()=>{s.push(c)},1e3)),!n.loading&&!o&&n.value&&s.push(c),e.jsx(E,{metaTitle:r("LoginAndRegister"),children:e.jsx(S,{children:e.jsx(F,{children:e.jsx(u.Row,{justify:"center",children:e.jsx(u.Col,{md:12,children:m==="login"?e.jsx(y.LoginForm,{onResetPasswordLink:()=>a("forgotPassword"),onRegisterLink:()=>s.push(g.register),mobile:p}):e.jsx(k.ResetPasswordForm,{mobile:p,backToLogin:()=>a("login"),onRegisterLink:()=>s.push(g.register),return_url:"#/reset-password",onFirstStepSuccess:()=>x.success(r("LoginPage.ForgotSuccess")),onFirstStepError:()=>x.error(r("UnexpectedError"))})})})})})})};export{v as default};

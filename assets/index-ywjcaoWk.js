import{z as h,q as f,s as L,r as l,l as j,f as w,i as R,j as e,L as k,m as E,h as p,k as u,o as g,A as d}from"./index-B8t7bxZo.js";import{R as F}from"./ResetPasswordForm-3Ad7srJD.js";var b=h();const y=f.div`
  min-height: calc(100vh - 583px);
  display: flex;
  align-items: center;
  justify-content: center;
  /* TODO: export colors */
  background-color: #f8f8f8;
  @media (max-width: 991px) {
    padding-top: 100px;
    min-height: 100%;
    padding-bottom: 50px;
    /* TODO: make a wrapper for it */
  }
`,T=()=>{const{search:t,state:i}=L(),{user:n,socialAuthorize:x}=l.useContext(j.EscolaLMSContext),[m,a]=l.useState("login"),{t:o}=w(),s=R(),r=t.split("?token=")[1],c=i&&i.referrer||t.split("?referrer=")[1]||"/";return r&&(x(r),setTimeout(()=>{s.push(c)},1e3)),!n.loading&&!r&&n.value&&s.push(c),e.jsx(k,{metaTitle:o("LoginAndRegister"),children:e.jsx(y,{children:e.jsx(E,{children:e.jsx(p.Row,{justify:"center",children:e.jsx(p.Col,{md:12,children:m==="login"?e.jsx(b.LoginForm,{onResetPasswordLink:()=>a("forgotPassword"),onRegisterLink:()=>s.push(u.register),mobile:g}):e.jsx(F.ResetPasswordForm,{mobile:g,backToLogin:()=>a("login"),onRegisterLink:()=>s.push(u.register),return_url:"#/reset-password",onFirstStepSuccess:()=>d.success(o("LoginPage.ForgotSuccess")),onFirstStepError:()=>d.error(o("UnexpectedError"))})})})})})})};export{T as default};

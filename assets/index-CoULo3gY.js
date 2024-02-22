import{z as h,q as f,s as L,r as p,l as j,f as w,i as R,j as e,L as k,m as E,h as l,k as u,o as d,A as g}from"./index-BTvwz0L3.js";import{R as F}from"./ResetPasswordForm-CY_QXbsu.js";var b=h();const y=f.div`
  padding-top: 100px;
  height: 100vh;
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
`,T=()=>{const{search:t,state:i}=L(),{user:n,socialAuthorize:x}=p.useContext(j.EscolaLMSContext),[m,a]=p.useState("login"),{t:o}=w(),s=R(),r=t.split("?token=")[1],c=i&&i.referrer||t.split("?referrer=")[1]||"/";return r&&(x(r),setTimeout(()=>{s.push(c)},1e3)),!n.loading&&!r&&n.value&&s.push(c),e.jsx(k,{metaTitle:o("LoginAndRegister"),children:e.jsx(y,{children:e.jsx(E,{children:e.jsx(l.Row,{justify:"center",children:e.jsx(l.Col,{md:12,children:m==="login"?e.jsx(b.LoginForm,{onResetPasswordLink:()=>a("forgotPassword"),onRegisterLink:()=>s.push(u.register),mobile:d}):e.jsx(F.ResetPasswordForm,{mobile:d,backToLogin:()=>a("login"),onRegisterLink:()=>s.push(u.register),return_url:"#/reset-password",onFirstStepSuccess:()=>g.success(o("LoginPage.ForgotSuccess")),onFirstStepError:()=>g.error(o("UnexpectedError"))})})})})})})};export{T as default};

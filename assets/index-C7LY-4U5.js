import{y as h,q as f,n as L,r as l,h as j,f as R,i as w,j as e,L as k,C as y,s as u,l as g,k as d,z as p}from"./index-DuLQ5VKT.js";import{R as E}from"./ResetPasswordForm-CHnAhpi6.js";var F=h();const b=f.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f8f8f8;
  @media (max-width: 991px) {
    padding-top: 100px;
    height: 100%;
    padding-bottom: 50px;
  }
`,C=()=>{const{search:r,state:i}=L(),{user:n,socialAuthorize:x}=l.useContext(j.EscolaLMSContext),[m,a]=l.useState("login"),{t:o}=R(),s=w(),t=r.split("?token=")[1],c=i&&i.referrer||r.split("?referrer=")[1]||"/";return t&&(x(t),setTimeout(()=>{s.push(c)},1e3)),!n.loading&&!t&&n.value&&s.push(c),e.jsx(k,{metaTitle:o("LoginAndRegister"),children:e.jsx(b,{children:e.jsx(y,{children:e.jsx(u.Row,{justify:"center",children:e.jsx(u.Col,{md:12,children:m==="login"?e.jsx(F.LoginForm,{onResetPasswordLink:()=>a("forgotPassword"),onRegisterLink:()=>s.push(g.register),mobile:d}):e.jsx(E.ResetPasswordForm,{mobile:d,backToLogin:()=>a("login"),onRegisterLink:()=>s.push(g.register),return_url:"#/reset-password",onFirstStepSuccess:()=>p.success(o("LoginPage.ForgotSuccess")),onFirstStepError:()=>p.error(o("UnexpectedError"))})})})})})})};export{C as default};

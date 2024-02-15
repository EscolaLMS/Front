import{z as f,q as h,p as L,r as l,k as j,f as R,l as k,j as e,L as w,C as E,i as u,n as g,m as p,A as x}from"./index-Duhnd3NG.js";import{R as F}from"./ResetPasswordForm-DzCISTys.js";import"components/atoms/Typography/Text";var y=f();const S=h.div`
  min-height: calc(100vh - 583px);
  display: flex;
  align-items: center;
  justify-content: center;
  /* TODO: export colors */
  background-color: #f8f8f8;
`,C=()=>{const{search:t,state:i}=L(),{user:n,socialAuthorize:d}=l.useContext(j.EscolaLMSContext),[m,a]=l.useState("login"),{t:o}=R(),s=k(),r=t.split("?token=")[1],c=i&&i.referrer||t.split("?referrer=")[1]||"/";return r&&(d(r),setTimeout(()=>{s.push(c)},1e3)),!n.loading&&!r&&n.value&&s.push(c),e.jsx(w,{metaTitle:o("LoginAndRegister"),children:e.jsx(S,{children:e.jsx(E,{children:e.jsx(u.Row,{justify:"center",children:e.jsx(u.Col,{md:12,children:m==="login"?e.jsx(y.LoginForm,{onResetPasswordLink:()=>a("forgotPassword"),onRegisterLink:()=>s.push(g.register),mobile:p}):e.jsx(F.ResetPasswordForm,{mobile:p,backToLogin:()=>a("login"),onRegisterLink:()=>s.push(g.register),return_url:"#/reset-password",onFirstStepSuccess:()=>x.success(o("LoginPage.ForgotSuccess")),onFirstStepError:()=>x.error(o("UnexpectedError"))})})})})})})};export{C as default};

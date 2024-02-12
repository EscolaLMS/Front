import{q as L,p as f,r as l,k as j,f as y,m as R,j as e,L as k,C as w,i as u,l as g,o as p,n as x,y as d}from"./index-BsLXwVX-.js";const E=L.div`
  min-height: calc(100vh - 583px);
  display: flex;
  align-items: center;
  justify-content: center;
`,b=()=>{const{search:r,state:i}=f(),{user:n,socialAuthorize:h}=l.useContext(j.EscolaLMSContext),[m,a]=l.useState("login"),{t}=y(),s=R(),o=r.split("?token=")[1],c=i&&i.referrer||r.split("?referrer=")[1]||"/";return o&&(h(o),setTimeout(()=>{s.push(c)},1e3)),!n.loading&&!o&&n.value&&s.push(c),e.jsx(k,{metaTitle:t("LoginAndRegister"),children:e.jsx(E,{children:e.jsx(w,{children:e.jsx(u.Row,{justify:"center",children:e.jsx(u.Col,{md:12,children:m==="login"?e.jsx(g.LoginForm,{onResetPasswordLink:()=>a("forgotPassword"),onRegisterLink:()=>s.push(p.register),mobile:x}):e.jsx(g.ResetPasswordForm,{mobile:x,backToLogin:()=>a("login"),onRegisterLink:()=>s.push(p.register),return_url:"#/reset-password",onFirstStepSuccess:()=>d.success(t("LoginPage.ForgotSuccess")),onFirstStepError:()=>d.error(t("UnexpectedError"))})})})})})})};export{b as default};

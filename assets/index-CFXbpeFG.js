import{h as c,n as u,f as l,b as p,o as r,j as s,v as d,C as m,Q as a,G as h,i as x}from"./index-flVLDudU.js";import{A as j,R}from"./AuthWrapper-D2j5c5Xy.js";const g=()=>{const{push:t}=c(),{search:e}=u(),n=e&&e.split("&")[0].split("=")[1],o=e&&e.split("&")[1].split("=")[1],{t:i}=l();return p.useEffect(()=>{!o&&t(r.home)},[]),s.jsx(d,{children:s.jsx(j,{children:s.jsx(m,{children:s.jsx(a.Row,{justify:"center",children:s.jsx(a.Col,{md:12,lg:12,children:s.jsx(R.ResetPasswordForm,{onSecondStepSuccess:()=>{t(r.login),h(i("LoginPage.ForgotSuccessStep2"),"success")},secondStep:!0,mobile:x,return_url:"#/reset-password",token:o,email:n})})})})})})};export{g as default};
import{q as r,X as t,r as n,j as o,S as d}from"./index-DMEaDbL2.js";const s=r.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.mode==="dark"?e.dm__background:e.background};
`,a=()=>{const e=t();return n.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="inherit"}),[]),o.jsx(s,{children:o.jsx(d.Spin,{color:e.primaryColor})})};export{a as P};

import{q as g,G as h,h as y,n as j,f as w,X as S,r as o,H as v,o as E,j as t,v as T,J as V,S as b,T as k}from"./index-BRyshI_t.js";const C=g.div`
  background-color: ${({theme:e})=>e.gray4};

  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    height: 100%;
    padding: 100px 0px;
    text-align: center;
  }

  .content-wrapper {
    background: ${({theme:e})=>h(e.mode,e.black,e.white,e.white)};
    border-radius: ${({theme:e})=>e.cardRadius}px;
    padding: 98px 20px;
    width: 100%;
    min-width: 600px;
    display: grid;
    place-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
      min-width: auto;
      padding: 20px;
      width: auto;
    }
    svg {
      margin: 20px 0px;
    }
    h2 {
      margin-top: 20px;
    }
  }
`,q=()=>{var p,x;const{push:e}=y(),{search:i}=j(),n=i&&((p=i==null?void 0:i.split("&")[0])==null?void 0:p.split("=")[1]),a=i&&((x=i==null?void 0:i.split("&")[1])==null?void 0:x.split("=")[1]),{t:m}=w(),u=S(),{emailVerify:l}=o.useContext(v.EscolaLMSContext),[c,r]=o.useState({loading:!1,state:"init",isVerified:!1,message:""}),d=o.useCallback(async()=>{r(s=>({...s,loading:!0}));try{const s=n&&a&&await l(String(n),String(a));s&&r(f=>({...f,state:"success",message:s.message,isVerified:!0}))}catch(s){console.error(s)}finally{r(s=>({...s,loading:!1}))}},[n,a,l]);return o.useEffect(()=>{a||e(E.home),n&&a&&d()},[n,a,d,e]),t.jsx(T,{children:t.jsx(C,{className:"profile-authentication-area",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row ",children:t.jsx("div",{className:"col-lg-12 col-md-12",children:t.jsxs("div",{className:"content-wrapper",children:[t.jsx(V,{}),c.loading&&t.jsx(b.Spin,{color:u.primaryColor})," ",c.isVerified&&t.jsx(k.Title,{level:2,children:m("EmailWasVerified")})]})})})})})})};export{q as default};

import{b as g,e as h,a as y,X as j,D as w,f as S,j as t,k as v,F as E,S as b,T as k,G as T,q as V}from"./index-D5UVe-mj.js";import{r as o}from"./sentry-DZqhWugq.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";const C=V.div`
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
    background: ${({theme:e})=>T(e.mode,e.black,e.white,e.white)};
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
`,$=()=>{var p,m;const{push:e}=g(),{search:i}=h(),n=i&&((p=i==null?void 0:i.split("&")[0])==null?void 0:p.split("=")[1]),a=i&&((m=i==null?void 0:i.split("&")[1])==null?void 0:m.split("=")[1]),{t:x}=y(),u=j(),{emailVerify:l}=o.useContext(w.EscolaLMSContext),[c,r]=o.useState({loading:!1,state:"init",isVerified:!1,message:""}),d=o.useCallback(async()=>{r(s=>({...s,loading:!0}));try{const s=n&&a&&await l(String(n),String(a));s&&r(f=>({...f,state:"success",message:s.message,isVerified:!0}))}catch(s){console.error(s)}finally{r(s=>({...s,loading:!1}))}},[n,a,l]);return o.useEffect(()=>{a||e(S.home),n&&a&&d()},[n,a,d,e]),t.jsx(v,{children:t.jsx(C,{className:"profile-authentication-area",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row ",children:t.jsx("div",{className:"col-lg-12 col-md-12",children:t.jsxs("div",{className:"content-wrapper",children:[t.jsx(E,{}),c.loading&&t.jsx(b.Spin,{color:u.primaryColor})," ",c.isVerified&&t.jsx(k.Title,{level:2,children:x("EmailWasVerified")})]})})})})})})};export{$ as default};
//# sourceMappingURL=index-BAJti76K.js.map

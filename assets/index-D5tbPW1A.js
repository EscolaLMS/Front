import{j as s,q as l,D as w,bY as A,a as P,b as C,T as D,bZ as g,o as t,n as m,b_ as N,f as S,b$ as _,g as a}from"./index-Bh0S307Q.js";import{r as c}from"./sentry-DZqhWugq.js";const R=l.div`
  padding: 11px 6px;
  background: ${({theme:e})=>e.mode==="dark"?e.dm__cardBackgroundColor:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;
`,b=({children:e})=>s.jsx(R,{children:e}),E=l.div`
  h2 {
    margin-bottom: 10px;
  }
`,h=l("aside")`
  background: ${({theme:e})=>e.mode==="dark"?e.dm__background:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;

  .user-main-sidebar {
    margin-bottom: ${a?"20px":"5px"};

    .name {
      margin: ${a?"0 0 0 21px":"16px 0 0 0"};
    }
    .navigation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      cursor: pointer;
      position: relative;
      button {
        all: unset;
      }
      a,
      button {
        text-decoration: none;
        display: block;
        width: 100%;
        border-radius: ${({theme:e})=>e.cardRadius}px;
        transition: background-color 0.3s ease, color 0.3s ease;
        p {
          padding: 8px 10px;
        }
        &:hover {
          background-color: ${({theme:e})=>e.gray3};
        }
        &.selected {
          background-color: ${({theme:e})=>e.primaryColor};
          p {
            color: ${({theme:e})=>e.white};
          }
        }
      }
    }
  }
  .delete-account {
    p {
      color: ${({theme:e})=>e.errorColor};
    }
  }
  .progress-container {
    display: flex;
    flex-direction: ${a?"row":"column"};
    flex-wrap: wrap;
    justify-content: ${a?"space-between":"flex-start"};
    align-items: ${a?"center":"flex-start"};
  }
`,q=({tabs:e,isProfile:n=!0})=>{var u,x,p;const[d]=c.useState(!1),{logout:j,fetchProgress:f,settings:o}=c.useContext(w.EscolaLMSContext),{triggerDeleteAccount:y,handleDeleteAccount:v,showModal:$,closeModal:k,loading:M}=A(),{t:r}=P(),T=C();return c.useEffect(()=>{f()},[]),s.jsxs(E,{children:[n&&s.jsx(D.Title,{level:2,as:"h2",children:r("MyProfilePage.YourAccount")}),s.jsx(h,{opened:d,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(b,{icon:s.jsx(N,{}),children:s.jsxs("nav",{className:"navigation",children:[e.map(i=>s.jsx(g,{activeClassName:"selected",to:i.url,children:s.jsx(t.Text,{size:"16",children:i.title})},i.key)),n&&((x=(u=o==null?void 0:o.value)==null?void 0:u.config)==null?void 0:x[m.termsPageMetaKey])&&s.jsx(g,{to:`/${(p=o.value.config)==null?void 0:p[m.termsPageMetaKey]}`,children:s.jsx(t.Text,{size:"16",children:r("Terms")})})]})})})}),n&&s.jsx(h,{opened:d,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(b,{children:s.jsxs("div",{className:"navigation",children:[s.jsx("button",{onClick:()=>j().then(()=>T.push(S.home)),children:s.jsx(t.Text,{children:r("MyProfilePage.Logout")})}),s.jsx("button",{className:"delete-account",onClick:()=>y(),children:s.jsx(t.Text,{children:r("MyProfilePage.DeleteAccount")})})]})})})}),s.jsx(_,{closeModal:k,showModal:$,handleDeleteAccount:v,isLoading:M})]})};export{q as P};
//# sourceMappingURL=index-D5tbPW1A.js.map

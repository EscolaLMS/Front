import{q as l,j as s,o as a,r as c,N as w,bV as A,h as P,k as C,T as N,bW as S,bX as g,y as t,x as h,m as D,bY as R}from"./index-vFA023FS.js";const _=l.div`
  padding: 11px 6px;
  background: ${({theme:e})=>e.mode==="dark"?e.dm__cardBackgroundColor:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;
`,m=({children:e})=>s.jsx(_,{children:e}),E=l.div`
  h2 {
    margin-bottom: 10px;
  }
`,b=l("aside")`
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
`,K=({tabs:e,isProfile:n=!0})=>{var x,u,p;const[d]=c.useState(!1),{logout:j,fetchProgress:f,settings:o}=c.useContext(w.EscolaLMSContext),{triggerDeleteAccount:y,handleDeleteAccount:v,showModal:k,closeModal:$,loading:M}=A(),{t:r}=P(),T=C();return c.useEffect(()=>{f()},[]),s.jsxs(E,{children:[n&&s.jsx(N.Title,{level:2,as:"h2",children:r("MyProfilePage.YourAccount")}),s.jsx(b,{opened:d,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(m,{icon:s.jsx(S,{}),children:s.jsxs("nav",{className:"navigation",children:[e.map(i=>s.jsx(g,{activeClassName:"selected",to:i.url,children:s.jsx(t.Text,{size:"16",children:i.title})},i.key)),n&&((u=(x=o==null?void 0:o.value)==null?void 0:x.config)==null?void 0:u[h.termsPageMetaKey])&&s.jsx(g,{to:`/${(p=o.value.config)==null?void 0:p[h.termsPageMetaKey]}`,children:s.jsx(t.Text,{size:"16",children:r("Terms")})})]})})})}),n&&s.jsx(b,{opened:d,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(m,{children:s.jsxs("div",{className:"navigation",children:[s.jsx("button",{onClick:()=>j().then(()=>T.push(D.home)),children:s.jsx(t.Text,{children:r("MyProfilePage.Logout")})}),s.jsx("button",{className:"delete-account",onClick:()=>y(),children:s.jsx(t.Text,{children:r("MyProfilePage.DeleteAccount")})})]})})})}),s.jsx(R,{closeModal:$,showModal:k,handleDeleteAccount:v,isLoading:M})]})};export{K as P};
//# sourceMappingURL=index-BF9z252k.js.map

import{q as l,j as s,i as o,r as c,N as T,bm as w,f as A,h as M,T as P,bn as C,bo as p,x as t,o as N,bp as S}from"./index-Be73eTrM.js";const D=l.div`
  padding: 11px 6px;
  background: ${({theme:e})=>e.mode==="dark"?e.dm__cardBackgroundColor:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;
`,g=({children:e})=>s.jsx(D,{children:e}),R=l.div`
  h2 {
    margin-bottom: 10px;
  }
`,h=l("aside")`
  background: ${({theme:e})=>e.mode==="dark"?e.dm__background:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;

  .user-main-sidebar {
    margin-bottom: ${o?"20px":"5px"};

    .name {
      margin: ${o?"0 0 0 21px":"16px 0 0 0"};
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
    flex-direction: ${o?"row":"column"};
    flex-wrap: wrap;
    justify-content: ${o?"space-between":"flex-start"};
    align-items: ${o?"center":"flex-start"};
  }
`,E=({tabs:e,isProfile:n=!0})=>{var x,u;const[d]=c.useState(!1),{logout:m,fetchProgress:b,settings:a}=c.useContext(T.EscolaLMSContext),{triggerDeleteAccount:j,handleDeleteAccount:f,showModal:v,closeModal:y,loading:$}=w(),{t:r}=A(),k=M();return c.useEffect(()=>{b()},[]),s.jsxs(R,{children:[n&&s.jsx(P.Title,{level:2,as:"h2",children:r("MyProfilePage.YourAccount")}),s.jsx(h,{opened:d,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(g,{icon:s.jsx(C,{}),children:s.jsxs("nav",{className:"navigation",children:[e.map(i=>s.jsx(p,{activeClassName:"selected",to:i.url,children:s.jsx(t.Text,{size:"16",children:i.title})},i.key)),n&&((u=(x=a==null?void 0:a.value)==null?void 0:x.config)==null?void 0:u.termsPage)&&s.jsx(p,{to:`/${a.value.config.termsPage}`,children:s.jsx(t.Text,{size:"16",children:r("Terms")})})]})})})}),n&&s.jsx(h,{opened:d,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(g,{children:s.jsxs("div",{className:"navigation",children:[s.jsx("button",{onClick:()=>m().then(()=>k.push(N.home)),children:s.jsx(t.Text,{children:r("MyProfilePage.Logout")})}),s.jsx("button",{className:"delete-account",onClick:()=>j(),children:s.jsx(t.Text,{children:r("MyProfilePage.DeleteAccount")})})]})})})}),s.jsx(S,{closeModal:y,showModal:v,handleDeleteAccount:f,isLoading:$})]})};export{E as P};

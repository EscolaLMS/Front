import{q as c,j as s,n as r,r as a,D as x,f as j,i as f,T as v,U as y,cB as u,s as i,l as $}from"./index-DdR0U16d.js";const k=c.div`
  padding: 11px 6px;
  background: ${({theme:e})=>e.mode==="dark"?e.dm__cardBackgroundColor:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;
`,p=({children:e})=>s.jsx(k,{children:e}),T=c.div`
  h2 {
    margin-bottom: 10px;
  }
`,g=c("aside")`
  background: ${({theme:e})=>e.mode==="dark"?e.dm__background:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;

  .user-main-sidebar {
    margin-bottom: ${r?"20px":"5px"};

    .name {
      margin: ${r?"0 0 0 21px":"16px 0 0 0"};
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
  .progress-container {
    display: flex;
    flex-direction: ${r?"row":"column"};
    flex-wrap: wrap;
    justify-content: ${r?"space-between":"flex-start"};
    align-items: ${r?"center":"flex-start"};
  }
`,C=({tabs:e,isProfile:t=!0})=>{const{settings:d}=a.useContext(x.EscolaLMSContext),[l]=a.useState(!1),{logout:m,fetchProgress:h}=a.useContext(x.EscolaLMSContext),{t:o}=j(),b=f();return a.useEffect(()=>{h()},[]),s.jsxs(T,{children:[t&&s.jsx(v.Title,{level:2,as:"h2",children:o("MyProfilePage.YourAccount")}),s.jsx(g,{opened:l,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(p,{icon:s.jsx(y,{}),children:s.jsxs("nav",{className:"navigation",children:[e.map(n=>s.jsx(u,{activeClassName:"selected",to:n.url,children:s.jsx(i.Text,{size:"16",children:n.title})},n.key)),t&&d.value.config.termsPage&&s.jsx(u,{to:`/${d.value.config.termsPage}`,children:s.jsx(i.Text,{size:"16",children:o("Terms")})})]})})})}),t&&s.jsx(g,{opened:l,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(p,{children:s.jsx("div",{className:"navigation",children:s.jsx("button",{onClick:()=>m().then(()=>b.push($.home)),children:s.jsx(i.Text,{children:o("MyProfilePage.Logout")})})})})})})]})};export{C as P};

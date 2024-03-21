import{q as d,j as s,n as r,r as o,A as p,f as v,i as y,T as $,U as k,cq as g,s as c,l as T}from"./index-t6qcE6xV.js";const w=d.div`
  padding: 11px 6px;
  background: ${({theme:e})=>e.mode==="dark"?e.dm__cardBackgroundColor:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;
`,m=({children:e})=>s.jsx(w,{children:e}),C=d.div`
  h2 {
    margin-bottom: 10px;
  }
`,h=d("aside")`
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
`,P=({tabs:e,isProfile:t=!0})=>{var x,u;const{settings:a}=o.useContext(p.EscolaLMSContext),[l]=o.useState(!1),{logout:b,fetchProgress:j}=o.useContext(p.EscolaLMSContext),{t:n}=v(),f=y();return o.useEffect(()=>{j()},[]),s.jsxs(C,{children:[t&&s.jsx($.Title,{level:2,as:"h2",children:n("MyProfilePage.YourAccount")}),s.jsx(h,{opened:l,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(m,{icon:s.jsx(k,{}),children:s.jsxs("nav",{className:"navigation",children:[e.map(i=>s.jsx(g,{activeClassName:"selected",to:i.url,children:s.jsx(c.Text,{size:"16",children:i.title})},i.key)),t&&((u=(x=a==null?void 0:a.value)==null?void 0:x.config)==null?void 0:u.termsPage)&&s.jsx(g,{to:`/${a.value.config.termsPage}`,children:s.jsx(c.Text,{size:"16",children:n("Terms")})})]})})})}),t&&s.jsx(h,{opened:l,children:s.jsx("div",{className:"user-main-sidebar",children:s.jsx(m,{children:s.jsx("div",{className:"navigation",children:s.jsx("button",{onClick:()=>b().then(()=>f.push(T.home)),children:s.jsx(c.Text,{children:n("MyProfilePage.Logout")})})})})})})]})};export{P};

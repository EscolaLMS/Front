import{q as l,j as a,n as t,r as o,D as h,ag as $,s as g,f as P,X as S,i as w,l as d,T as C,cB as M,U as T,cC as E,o as R,C as A,w as m}from"./index-BrnsqxCr.js";const N=l.div`
  padding: 11px 6px;
  background: ${({theme:e})=>e.mode==="dark"?e.dm__cardBackgroundColor:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;
`,v=({children:e})=>a.jsx(N,{children:e}),L=l.div`
  margin-bottom: ${t?"0":"21px"};
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  .avatar-upload-text {
    margin: 0;
    cursor: pointer;
  }
`,_=({size:e})=>{var n;const{updateAvatar:i,user:r}=o.useContext(h.EscolaLMSContext),c=o.useCallback(s=>{var p,u;const x=(u=(p=s.target)==null?void 0:p.files)==null?void 0:u[0];x&&i(x)},[i]);return a.jsxs(L,{children:[a.jsx($.Avatar,{size:e,src:(n=r.value)==null?void 0:n.avatar,alt:""}),a.jsxs("label",{htmlFor:"fileInput",children:[a.jsx(g.Text,{className:"avatar-upload-text",size:"12",children:"Dodaj nowe zdjęcie"}),a.jsx("input",{type:"file",id:"fileInput",accept:"image/*",style:{display:"none"},onChange:c})]})]})},z=l.div`
  h2 {
    margin-bottom: 10px;
  }
`,k=l("aside")`
  ${t&&`
    box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    transition: all 0.25s;
    z-index: 1000;
    overflow: scroll;
    `}
  transform: ${e=>e.opened&&t?"translate(0, 0%)":!e.opened&&t?"translate(0, 91%)":"translate(0, 0)"};
  background: ${({theme:e})=>e.mode==="dark"?e.dm__background:e.white};
  border-radius: ${({theme:e})=>e.cardRadius}px;

  .user-main-sidebar {
    margin-bottom: ${t?"70px":"5px"};

    .name {
      margin: ${t?"0 0 0 21px":"16px 0 0 0"};
    }
    .navigation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 10px;
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
          padding: 10px 20px;
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
    flex-direction: ${t?"row":"column"};
    flex-wrap: wrap;
    justify-content: ${t?"space-between":"flex-start"};
    align-items: ${t?"center":"flex-start"};
  }
`,D=l("div")`
  padding: 17px 15px;
  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  &:after {
    content: "";
    display: ${({opened:e})=>e?"block":"none"};
    position: absolute;
    right: 22px;
    top: 50%;
    transform: translate(0, -50%) rotate(-45deg);
    width: 12px;
    height: 12px;
    border-left: 2px solid
      ${({theme:e})=>e.mode==="dark"?e.gray5:e.gray1};
    border-bottom: 2px solid
      ${({theme:e})=>e.mode==="dark"?e.gray5:e.gray1};
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    flex-direction: ${t?"column":"row"};
  }
`,H=()=>{var y,j,b;const[e,i]=o.useState(!1),{user:r,logout:c,fetchProgress:n}=o.useContext(h.EscolaLMSContext),{t:s}=P(),x=S(),p=w();o.useEffect(()=>{n()},[]);const u=o.useMemo(()=>[{key:"ORDERS",title:s("MyProfilePage.OrdersHistory"),url:d.myOrders},{key:"EDIT",title:s("MyProfilePage.EditData"),url:d.myData},{key:"CERS",title:s("MyProfilePage.MyCertificates"),url:d.myCertificates},{key:"COURSES",title:s("MyProfilePage.MyCourses"),url:d.myProfile}],[s]);return a.jsxs(z,{children:[a.jsx(C.Title,{level:2,as:"h2",children:s("MyProfilePage.YourAccount")})," ",a.jsxs(k,{opened:e,children:[t&&a.jsx(D,{opened:e,onClick:()=>i(!e),children:a.jsxs("div",{className:"content-wrapper",children:[(y=r.value)!=null&&y.avatar?a.jsx(_,{size:"extraSmall"}):a.jsx(M,{mode:x.mode==="dark"?"light":"dark"}),a.jsx(g.Text,{children:a.jsxs("strong",{children:[(j=r.value)==null?void 0:j.first_name," ",(b=r.value)==null?void 0:b.last_name]})})]})}),a.jsx("div",{className:"user-main-sidebar",children:a.jsx(v,{icon:a.jsx(T,{}),children:a.jsx("nav",{className:"navigation",children:u.map(f=>a.jsx(E,{activeClassName:"selected",to:f.url,children:a.jsx(g.Text,{size:"16",children:f.title})},f.key))})})})]}),a.jsx(k,{opened:e,children:a.jsx("div",{className:"user-main-sidebar",children:a.jsx(v,{children:a.jsx("div",{className:"navigation",children:a.jsx("button",{onClick:()=>c().then(()=>p.push(d.home)),children:a.jsx(g.Text,{children:s("MyProfilePage.Logout")})})})})})})]})},O=l.div`
  position: relative;
  z-index: 0;
  /* padding: ${e=>e.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"}; */

  border-radius: ${({theme:e})=>e.cardRadius};
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`,U=({title:e,withTabs:i,actions:r})=>a.jsxs(O,{withTabs:i,children:[a.jsx(C.Title,{level:2,children:e}),r&&a.jsx("div",{className:"actions",children:r})]}),I=l.section`
  background-color: ${({theme:e})=>e.gray4};
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 70vh;
  .tabs-menu {
    padding: 0 0 70px 40px;
    background: #f8f8f8;
  }
  .certificates-container {
    margin-top: 70px;
    h2 {
      margin-left: 40px;
    }
  }
  @media (max-width: 767px) {
    padding-top: 80px;
  }
`,B=({children:e,title:i,withTabs:r,actions:c})=>{const{user:n}=o.useContext(h.EscolaLMSContext),s=w();return o.useEffect(()=>{!n.loading&&!n.value&&s.push(d.login)},[]),a.jsx(R,{metaTitle:i,children:a.jsx(I,{children:a.jsx(A,{children:a.jsxs(m.Row,{children:[!t&&a.jsx(m.Col,{lg:3,children:a.jsx(H,{})}),a.jsxs(m.Col,{offset:{lg:1},lg:t?12:8,children:[a.jsx(U,{title:i,withTabs:r,actions:c}),e]})]})})})})};export{B as P};

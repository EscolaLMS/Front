import{q as x,j as e,T as u,r as o,A as m,i as y,f as g,l as s,o as h,C as P,w as l,n as d}from"./index-CQ96WfSz.js";import{P as j}from"./index-CkUSjY16.js";const b=x.div`
  position: relative;
  z-index: 0;
  /* padding: ${t=>t.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"}; */

  border-radius: ${({theme:t})=>t.cardRadius};
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`,C=({title:t,withTabs:a,actions:r})=>e.jsxs(b,{withTabs:a,children:[e.jsx(u.Title,{level:2,children:t}),r&&e.jsx("div",{className:"actions",children:r})]}),E=x.section`
  background-color: ${({theme:t})=>t.gray4};
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
`,T=({children:t,title:a,withTabs:r,actions:c})=>{const{user:n}=o.useContext(m.EscolaLMSContext),p=y(),{t:i}=g();o.useEffect(()=>{!n.loading&&!n.value&&p.push(s.login)},[]);const f=o.useMemo(()=>[{key:"ORDERS",title:i("MyProfilePage.OrdersHistory"),url:s.myOrders},{key:"EDIT",title:i("MyProfilePage.EditData"),url:s.myData},{key:"CERS",title:i("MyProfilePage.MyCertificates"),url:s.myCertificates},{key:"COURSES",title:i("MyProfilePage.MyCourses"),url:s.myProfile}],[i]);return e.jsx(h,{metaTitle:a,children:e.jsx(E,{children:e.jsx(P,{children:e.jsxs(l.Row,{children:[!d&&e.jsx(l.Col,{lg:3,children:e.jsx(j,{tabs:f})}),e.jsxs(l.Col,{offset:{lg:1},lg:d?12:8,children:[e.jsx(C,{title:a,withTabs:r,actions:c}),t]})]})})})})};export{T as P};

import{j as e,T as y,q as x,D as f,b as m,a as g,f as s,k as h,C as P,J as a,g as d}from"./index-aC1vIBhc.js";import{P as C}from"./index-STMgqzbp.js";import{r as l}from"./sentry-DZqhWugq.js";const b=x.div`
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
`,j=({title:t,withTabs:o,actions:r})=>e.jsxs(b,{withTabs:o,children:[e.jsx(y.Title,{level:2,children:t}),r&&e.jsx("div",{className:"actions",children:r})]}),S=x.section`
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
    min-height: auto;
  }
`,E=({children:t,title:o,withTabs:r,actions:p})=>{const{user:n}=l.useContext(f.EscolaLMSContext),c=m(),{t:i}=g();l.useEffect(()=>{!n.loading&&!n.value&&c.push(s.login)},[]);const u=l.useMemo(()=>[{key:"ORDERS",title:i("MyProfilePage.OrdersHistory"),url:s.myOrders},{key:"EDIT",title:i("MyProfilePage.EditData"),url:s.myData},{key:"CERS",title:i("MyProfilePage.MyCertificates"),url:s.myCertificates},{key:"SUBSCRIPTIONS",title:i("MyProfilePage.Subscriptions"),url:s.mySubscriptions},{key:"COURSES",title:i("MyProfilePage.MyCourses"),url:s.myProfile},{key:"CONSULTATIONS",title:i("MyProfilePage.MyConsultations"),url:s.myConsultations}],[i]);return e.jsx(h,{metaTitle:o,children:e.jsx(S,{children:e.jsx(P,{children:e.jsxs(a.Row,{children:[!d&&e.jsx(a.Col,{lg:3,children:e.jsx(C,{tabs:u})}),e.jsxs(a.Col,{offset:{lg:.5},lg:d?12:8.5,children:[e.jsx(j,{title:o,withTabs:r,actions:p}),t]})]})})})})};export{E as P};
//# sourceMappingURL=index-D9_ViitC.js.map

import{j as e,T as p,q as x,D as m,b as f,a as g,f as s,k as P,C as h,J as a,g as d}from"./index-Bh0S307Q.js";import{P as b}from"./index-D5tbPW1A.js";import{r as l}from"./sentry-DZqhWugq.js";const C=x.div`
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
`,S=({title:t,withTabs:r,actions:o})=>e.jsxs(C,{withTabs:r,children:[e.jsx(p.Title,{level:2,style:{marginBottom:12},children:t}),o&&e.jsx("div",{className:"actions",children:o})]}),j=x.section`
  background-color: ${({theme:t})=>t.gray4};
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 70vh;
  .tabs-menu {
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
`,E=({children:t,title:r,withTabs:o,actions:c})=>{const{user:n}=l.useContext(m.EscolaLMSContext),y=f(),{t:i}=g();l.useEffect(()=>{!n.loading&&!n.value&&y.push(s.login)},[]);const u=l.useMemo(()=>[{key:"ORDERS",title:i("MyProfilePage.OrdersHistory"),url:s.myOrders},{key:"EDIT",title:i("MyProfilePage.EditData"),url:s.myData},{key:"CERS",title:i("MyProfilePage.MyCertificates"),url:s.myCertificates},{key:"SUBSCRIPTIONS",title:i("MyProfilePage.Subscriptions"),url:s.mySubscriptions},{key:"COURSES",title:i("MyProfilePage.MyCourses"),url:s.myProfile},{key:"CONSULTATIONS",title:i("MyProfilePage.MyConsultations"),url:s.myConsultations},{key:"WEBINARS",title:i("MyProfilePage.MyWebinars"),url:s.myWebinars}],[i]);return e.jsx(P,{metaTitle:r,children:e.jsx(j,{children:e.jsx(h,{children:e.jsxs(a.Row,{children:[!d&&e.jsx(a.Col,{lg:3,children:e.jsx(b,{tabs:u})}),e.jsxs(a.Col,{offset:{lg:.5},lg:d?12:8.5,children:[e.jsx(S,{title:r,withTabs:o,actions:c}),t]})]})})})})};export{E as P};
//# sourceMappingURL=index-DGS3h0QV.js.map

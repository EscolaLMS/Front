import{q as x,j as e,T as f,r as o,Q as y,i as m,h as g,p as s,x as h,C as P,Y as l,k as d}from"./index-D1d_pcfS.js";import{P as j}from"./index-Q01MQlJv.js";const b=x.div`
  position: relative;
  z-index: 0;
  /* padding: ${i=>i.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"}; */

  border-radius: ${({theme:i})=>i.cardRadius};
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`,C=({title:i,withTabs:r,actions:a})=>e.jsxs(b,{withTabs:r,children:[e.jsx(f.Title,{level:2,children:i}),a&&e.jsx("div",{className:"actions",children:a})]}),S=x.section`
  background-color: ${({theme:i})=>i.gray4};
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
`,R=({children:i,title:r,withTabs:a,actions:p})=>{const{user:n}=o.useContext(y.EscolaLMSContext),c=m(),{t}=g();o.useEffect(()=>{!n.loading&&!n.value&&c.push(s.login)},[]);const u=o.useMemo(()=>[{key:"ORDERS",title:t("MyProfilePage.OrdersHistory"),url:s.myOrders},{key:"EDIT",title:t("MyProfilePage.EditData"),url:s.myData},{key:"CERS",title:t("MyProfilePage.MyCertificates"),url:s.myCertificates},{key:"SUBSCRIPTIONS",title:t("MyProfilePage.Subscriptions"),url:s.mySubscriptions},{key:"COURSES",title:t("MyProfilePage.MyCourses"),url:s.myProfile}],[t]);return e.jsx(h,{metaTitle:r,children:e.jsx(S,{children:e.jsx(P,{children:e.jsxs(l.Row,{children:[!d&&e.jsx(l.Col,{lg:3,children:e.jsx(j,{tabs:u})}),e.jsxs(l.Col,{offset:{lg:.5},lg:d?12:8.5,children:[e.jsx(C,{title:r,withTabs:a,actions:p}),i]})]})})})})};export{R as P};

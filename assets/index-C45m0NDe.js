import{q as x,j as e,T as y,r,N as f,k as m,h as g,m as s,v as h,C as P,V as l,o as d}from"./index-D4kQ_0st.js";import{P as C}from"./index-D_BN92pi.js";const j=x.div`
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
`,S=({title:t,withTabs:o,actions:a})=>e.jsxs(j,{withTabs:o,children:[e.jsx(y.Title,{level:2,children:t}),a&&e.jsx("div",{className:"actions",children:a})]}),b=x.section`
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
`,k=({children:t,title:o,withTabs:a,actions:c})=>{const{user:n}=r.useContext(f.EscolaLMSContext),p=m(),{t:i}=g();r.useEffect(()=>{!n.loading&&!n.value&&p.push(s.login)},[]);const u=r.useMemo(()=>[{key:"ORDERS",title:i("MyProfilePage.OrdersHistory"),url:s.myOrders},{key:"EDIT",title:i("MyProfilePage.EditData"),url:s.myData},{key:"CERS",title:i("MyProfilePage.MyCertificates"),url:s.myCertificates},{key:"SUBSCRIPTIONS",title:i("MyProfilePage.Subscriptions"),url:s.mySubscriptions},{key:"COURSES",title:i("MyProfilePage.MyCourses"),url:s.myProfile},{key:"CONSULTATIONS",title:i("MyProfilePage.MyConsultations"),url:s.myConsultations}],[i]);return e.jsx(h,{metaTitle:o,children:e.jsx(b,{children:e.jsx(P,{children:e.jsxs(l.Row,{children:[!d&&e.jsx(l.Col,{lg:3,children:e.jsx(C,{tabs:u})}),e.jsxs(l.Col,{offset:{lg:.5},lg:d?12:8.5,children:[e.jsx(S,{title:o,withTabs:a,actions:c}),t]})]})})})})};export{k as P};

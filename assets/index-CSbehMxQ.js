import{q as p,k as i,j as t,cz as I,r as n,A as b,ad as R,T as g,f as D,X as U,i as A,l,cA as T,U as H,o as y,cB as K,cC as F,L as W,C as q,s as j}from"./index-DPt-kbd_.js";const V=p.div`
  padding: ${i?"20px":"40px"};
  background: ${({theme:e})=>e.mode==="dark"?e.dm__cardBackgroundColor:e.cardBackgroundColor};
  border-radius: ${({theme:e})=>e.cardRadius}px;
`,S=({title:e,icon:o,children:s})=>t.jsxs(V,{children:[t.jsx(I.IconTitle,{title:e,icon:o,as:"h2",level:4}),s]}),X=p.div`
  transition: max-height 0.5s ease-in-out;
  max-height: 5000px;
  ${({isOpen:e})=>e?"":"max-height: 1.2em; overflow: hidden; transition: max-height 1s cubic-bezier(0, 1, 0, 1);"};

  .collapse-header {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: start;
    gap: 6px;
    cursor: pointer;

    &__heading {
        text-overflow: ellipsis;
        overflow: hidden;
        color: ${({theme:e})=>e.mode==="dark"?e.dm__textColor:e.textColor};
    }

    &__icon {
      color: ${({theme:e})=>e.mode==="dark"?e.dm__textColor:e.textColor};
        opacity: 0.6;
        width: 12px;
        margin-top: 3.5px;
        transition: rotate 0.2s ease-in-out;
        rotate: ${({isOpen:e})=>e?"180deg":"0"};

        &:hover {
            svg {
                opacity: 1;
            }
        }
    }
`,Y=({headerTitle:e,headerClassName:o,initialValue:s,children:m})=>{const[d,c]=n.useState(s??!1);return t.jsxs(X,{isOpen:d,children:[t.jsxs("div",{className:`collapse-header ${o??""}`,onClick:()=>c(x=>!x),onKeyUp:x=>x.code==="Enter"&&c(a=>!a),role:"button",tabIndex:0,children:[t.jsx("span",{className:"collapse-header__heading",children:e}),t.jsx("svg",{className:"arrows collapse-header__icon",width:"14",height:"8",viewBox:"0 0 14 8",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z",fill:"currentColor"})})]}),m]})},Z=p.div`
  margin-bottom: ${i?"0":"21px"};
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  .avatar-upload-text {
    margin: 0;
    cursor: pointer;
  }
`,z=({size:e})=>{var d;const{updateAvatar:o,user:s}=n.useContext(b.EscolaLMSContext),m=n.useCallback(c=>{var a,u;const x=(u=(a=c.target)==null?void 0:a.files)==null?void 0:u[0];x&&o(x)},[o]);return t.jsxs(Z,{children:[t.jsx(R.Avatar,{size:e,src:(d=s.value)==null?void 0:d.avatar,alt:""}),t.jsxs("label",{htmlFor:"fileInput",children:[t.jsx(g.Text,{className:"avatar-upload-text",size:"12",children:"Dodaj nowe zdjęcie"}),t.jsx("input",{type:"file",id:"fileInput",accept:"image/*",style:{display:"none"},onChange:m})]})]})},G=p("aside")`
  ${i&&`
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
  transform: ${e=>e.opened&&i?"translate(0, 0%)":!e.opened&&i?"translate(0, 91%)":"translate(0, 0)"};
  background: ${({theme:e})=>e.mode==="dark"?e.dm__background:e.background};
  .user-main-sidebar {
    margin-bottom: ${i?"70px":"22px"};
    .name {
      margin: ${i?"0 0 0 21px":"16px 0 0 0"};
    }
    .navigation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 15px;
      margin-bottom: 50px;
      a {
        text-decoration: none;
        &:hover {
          p {
            color: ${({theme:e})=>e.primaryColor};
          }
        }
        &.selected {
          p {
            color: ${({theme:e})=>e.primaryColor};
          }
        }
      }
    }
    .logout-wrapper {
      position: relative;
      &:before {
        position: absolute;
        content: "";
        left: 0;
        top: -16px;
        height: 1px;
        width: 24px;
        background: ${({theme:e})=>e.mode==="dark"?e.gray5:e.gray1};
      }
      button {
        appearance: none;
        outline: none;
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
        cursor: pointer;
        p {
          &:hover {
            color: ${({theme:e})=>e.primaryColor};
          }
        }
      }
    }
  }
  .progress-container {
    display: flex;
    flex-direction: ${i?"row":"column"};
    flex-wrap: wrap;
    justify-content: ${i?"space-between":"flex-start"};
    align-items: ${i?"center":"flex-start"};
  }
`,E=p.div`
  display: grid;
  grid-template-columns: auto 1fr;

  &:not(:last-child) {
    margin-bottom: ${i?0:"14px"};
    margin-right: ${i?"10px":0};
  }
  .number {
    color: ${({theme:e})=>e.primaryColor};
  }
  .label {
    margin-left: ${i?0:"11px"};
    margin-top: 10px;
    position: relative;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
    max-width: ${i?"80px":"unset"};
  }

  .list-box {
    padding: 0;
    list-style: none;
    width: 100%;
    grid-column: 1/3;
    font-family: "Mulish", sans-serif;
  }

  .list-box-item {
    font-size: 14px;

    :not(:last-child) {
      margin-bottom: 16px;
    }

    &__time {
      color: ${({theme:e})=>e.mode==="dark"?e.dm__textColor:e.textColor};
      opacity: 0.6;
      margin: 0;
      display: flex;
      align-items: center;

      &:first-of-type {
        margin-top: 8px;
      }

      svg {
        width: 12px;
        height: auto;
        fill: ${({theme:e})=>e.mode==="dark"?e.dm__textColor:e.textColor};
        opacity: 0.6;
      }
    }

    &__value {
      font-size: 12px;
      line-height: 1.5;
      margin-left: 4px;
    }
  }
`,J=p("div")`
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
    flex-direction: ${i?"column":"row"};
  }
`,Q=()=>{var k,C,_,P,$,M,N;const[e,o]=n.useState(!1),{user:s,logout:m,certificates:d,progress:c,fetchProgress:x}=n.useContext(b.EscolaLMSContext),{t:a}=D(),u=U(),L=A(),O=r=>{if(!r)return"-";let h=r;const f=Math.trunc(r/3600);f>=1&&(h-=f*3600);const v=Math.trunc(r/60);return v>=1&&(h-=v*60),`
        ${f>=1?f+"h ":""}${v>=1?v+"min ":""}${h>=1?h+"s":""}
    `};n.useEffect(()=>{x()},[]);const w=n.useMemo(()=>(c.value||[]).filter(r=>r.finish_date),[c]),B=n.useMemo(()=>[{key:"COURSES",title:a("MyProfilePage.MyCourses"),url:l.myProfile},{key:"CONSULTATIONS",title:a("MyProfilePage.MyConsultations"),url:l.myConsultations},{key:"WEBINARS",title:a("MyProfilePage.MyWebinars"),url:l.myWebinars},{key:"EVENTS",title:a("MyProfilePage.MyStationaryEvents"),url:l.myStationaryEvents},{key:"TASKS",title:a("MyProfilePage.MyTasks"),url:l.myTasks},{key:"BOOKMARKS",title:a("MyProfilePage.MyBookmarks"),url:l.myBookmarks},{key:"ORDERS",title:a("MyProfilePage.OrdersHistory"),url:l.myOrders},{key:"NOTIFICATIONS",title:a("MyProfilePage.Notifications"),url:l.myNotifications},{key:"EDIT",title:a("MyProfilePage.EditData"),url:l.myData}],[a]);return t.jsxs(G,{opened:e,children:[i&&t.jsx(J,{opened:e,onClick:()=>o(!e),children:t.jsxs("div",{className:"content-wrapper",children:[(k=s.value)!=null&&k.avatar?t.jsx(z,{size:"extraSmall"}):t.jsx(T,{mode:u.mode==="dark"?"light":"dark"}),t.jsx(g.Text,{children:t.jsxs("strong",{children:[(C=s.value)==null?void 0:C.first_name," ",(_=s.value)==null?void 0:_.last_name]})})]})}),t.jsx("div",{className:"user-main-sidebar",children:t.jsxs(S,{title:a("MyProfilePage.YourAccount"),icon:t.jsx(H,{}),children:[t.jsxs("div",{className:"avatar-wrapper",children:[(P=s.value)!=null&&P.avatar?t.jsx(z,{size:"small"}):t.jsx(T,{mode:u.mode==="dark"?"light":"dark"}),t.jsxs(y.Title,{className:"name",level:4,as:"h3",children:[($=s.value)==null?void 0:$.first_name," ",(M=s.value)==null?void 0:M.last_name]})]}),t.jsx("nav",{className:"navigation",children:B.map(r=>t.jsx(K,{activeClassName:"selected",to:r.url,children:t.jsx(g.Text,{size:"14",children:r.title})},r.key))}),t.jsx("div",{className:"logout-wrapper",children:t.jsx("button",{onClick:()=>m().then(()=>L.push(l.home)),children:t.jsx(g.Text,{children:a("MyProfilePage.Logout")})})})]})}),t.jsx("div",{className:"user-progress sidebar",children:t.jsx(S,{title:a("MyProfilePage.MyProgress"),icon:t.jsx(F,{}),children:t.jsxs("div",{className:"progress-container",children:[t.jsxs(E,{children:[t.jsx(y.Title,{className:"number",level:1,children:w.length}),t.jsx(g.Text,{className:"label",children:a("MyProfilePage.FinishedCourses")}),t.jsx("ul",{className:"list-box",children:w.map((r,h)=>t.jsx("li",{className:"list-box-item",children:t.jsxs(Y,{initialValue:h===0,headerTitle:r.course.title,headerClassName:"list-box-item__title",children:[r.start_date&&r.finish_date&&t.jsxs("p",{className:"list-box-item__time",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"})}),t.jsxs("span",{className:"list-box-item__value",children:[new Date(r.start_date).toLocaleDateString()," - ",new Date(r.finish_date).toLocaleDateString()]})]}),t.jsxs("p",{className:"list-box-item__time",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M6 14h6v-6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6zm16 0c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328z"})}),t.jsx("span",{className:"list-box-item__value",children:O(r.total_spent_time)})]})]})}))})]}),t.jsxs(E,{children:[t.jsx(y.Title,{className:"number",level:1,children:(N=d.list)==null?void 0:N.data.length}),t.jsx(g.Text,{className:"label",children:a("MyProfilePage.TotalCertificates")})]})]})})})]})},ee=p.div`
  position: relative;
  z-index: 0;
  padding: ${e=>e.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"};
  background: ${({theme:e})=>e.mode==="dark"?e.dm__cardBackgroundColor:e.cardBackgroundColor};
  border-radius: ${({theme:e})=>e.cardRadius};
  @media (max-width: 991px) {
    padding: 60px 20px 20px 20px;
    margin-bottom: 20px;
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`,te=({title:e,withTabs:o,actions:s})=>t.jsxs(ee,{withTabs:o,children:[t.jsx(y.Title,{level:1,children:e}),s&&t.jsx("div",{className:"actions",children:s})]}),ae=p.section`
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
`,re=({children:e,title:o,withTabs:s,actions:m})=>{const{user:d}=n.useContext(b.EscolaLMSContext),c=A();return n.useEffect(()=>{!d.loading&&!d.value&&c.push(l.login)},[]),t.jsx(W,{metaTitle:o,children:t.jsx(ae,{children:t.jsx(q,{children:t.jsxs(j.Row,{children:[t.jsxs(j.Col,{lg:9,children:[t.jsx(te,{title:o,withTabs:s,actions:m}),e]}),t.jsx(j.Col,{lg:3,children:t.jsx(Q,{})})]})})})})};export{re as P};

import{aS as m,q as u,r as d,l as N,f as j,j as o,B as P}from"./index-BTvwz0L3.js";import{P as b}from"./index-DOxl94Sr.js";import{a as p}from"./index-1V4e0nUl.js";import{C as y}from"./index-B2HKkCHC.js";import{P as C}from"./index-DzsaDRiK.js";import"./app-B2E7767C.js";import"./date-msTaMnuE.js";var E=m();const h=u.div`
  margin-top: 11px;
  margin-bottom: 11px;
  row-gap: 11px;
  display: flex;
  flex-direction: column;
  .single-notification {
    background: ${({theme:a})=>a.mode==="dark"?a.gray1:a.gray5};

    > section {
      box-sizing: border-box;
    }
  }
`,T=()=>{var r,s,c,l;const{fetchNotifications:a,notifications:i,readNotify:f,readAllNotifications:g}=d.useContext(N.EscolaLMSContext),{t:n}=j(),e=(r=i.list)==null?void 0:r.meta;return d.useEffect(()=>{a({page:1,per_page:10})},[]),o.jsxs(b,{title:n("MyProfilePage.Notifications"),actions:o.jsx(P.Button,{mode:"secondary",onClick:()=>{g()},disabled:i.loading||!((s=i.list)!=null&&s.data.length),children:n("ReadAll")}),children:[o.jsxs(h,{children:[i.loading&&o.jsx(y,{}),i&&((l=(c=i.list)==null?void 0:c.data)==null?void 0:l.map((t,x)=>o.jsx("div",{className:"single-notification",children:o.jsx(E.Notification,{notification:{id:"324241",unread:!0,title:n(p(t).translation,p(t).object),description:"",dateTime:new Date(t.created_at)},onClick:()=>{f(t.id)},maxLengthDesc:60},t.id)},x)))]}),e&&e.total>Number(e.per_page)&&o.jsx(C,{currentPage:e.current_page,total:e.total,perPage:10,onPage:t=>a({page:t,per_page:10})})]})};export{T as default};

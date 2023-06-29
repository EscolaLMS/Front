(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[22],{605:function(e,t,n){"use strict";n.r(t);var a,r=n(74),o=n(1),i=n(267),c=n(34),s=n(20),l=n(35),d=n(675),u=n(275),m=n(677),v=n(666),p=n(73),b=n(683),h=n(3),j=s.default.div(a||(a=Object(r.a)(["\n  margin-top: 11px;\n  margin-bottom: 11px;\n  row-gap: 11px;\n  display: flex;\n  flex-direction: column;\n  .single-notification {\n    background: ",";\n\n    > section {\n      box-sizing: border-box;\n    }\n  }\n"])),(function(e){var t=e.theme;return"dark"===t.mode?t.gray1:t.gray5}));t.default=function(){var e,t,n,a,r=Object(o.useContext)(l.EscolaLMSContext),s=r.user,f=r.fetchNotifications,x=r.notifications,g=r.readNotify,y=r.readAllNotifications,O=Object(c.g)(),T=Object(i.a)().t,w=null===(e=x.list)||void 0===e?void 0:e.meta;return Object(o.useEffect)((function(){s.loading||s.value?f({page:1,per_page:10}):O.push("/login")}),[]),Object(h.jsxs)(d.a,{title:T("MyProfilePage.Notifications"),actions:Object(h.jsx)(p.Button,{mode:"secondary",onClick:function(){y()},disabled:x.loading||!(null!==(t=x.list)&&void 0!==t&&t.data.length),children:T("ReadAll")}),children:[Object(h.jsxs)(j,{children:[x.loading&&Object(h.jsx)(v.a,{}),x&&(null===(n=x.list)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.map((function(e,t){return Object(h.jsx)("div",{className:"single-notification",children:Object(h.jsx)(u.Notification,{notification:{id:"324241",unread:!0,title:T(Object(m.b)(e).translation,Object(m.b)(e).object),description:"",dateTime:new Date(e.created_at)},onClick:function(){g(e.id)},maxLengthDesc:60},e.id)},t)})))]}),w&&w.total>w.per_page&&Object(h.jsx)(b.a,{currentPage:w.current_page,total:w.total,perPage:10,onPage:function(e){return f({page:e,per_page:10})}})]})}},666:function(e,t,n){"use strict";var a,r=n(74),o=n(30),i=n(20),c=n(3),s=i.default.div(a||(a=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"])));t.a=function(e){var t=e.width,n=e.height,a=Object(i.useTheme)();return Object(c.jsx)(s,{style:{width:t||"100%",height:n||"100%"},children:Object(c.jsx)(o.Spin,{color:a.primaryColor})})}},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={defaultDateFormat:"dd/MM/yyyy",defaultDateTimeFormat:"dd/MM/yyyy, HH:mm"}},671:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return v}));var a=n(174),r=n(282),o=n(134),i=n(667),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.a.defaultDateFormat;return e?Object(a.default)(new Date(e),t):""},s=function(e,t,n){return!(!e||!t)&&c(e,n)===c(t,n)},l=function(e){var t=[];return e.forEach((function(e){var n=Object(a.default)(new Date(e),"MM/dd/yyyy"),r=t.find((function(e){return Object(a.default)(new Date(e.date),"MM/dd/yyyy")===n}));r?r.times.push(new Date(e)):t.push({date:n,times:[new Date(e)]})})),t},d=function(e){return e.filter((function(e){return Object(r.default)(e,new Date)}))},u=function(e){return e.sort((function(e,t){return e.getTime()-t.getTime()}))},m=function(e){var t=Array.from(e.matchAll(/(\d+)\s+(day|hour|minute|second|week|year)s?/g)),n={},a=!1;if(t.forEach((function(e){a=!0;var t=parseInt(e[1]),r=e[2];n[r]?n[r]+=t:n[r]=t})),!a){Array.from(e.matchAll(/\d+/g)).forEach((function(e){var t=parseInt(e[0]);n.hour=t}))}return n},v=function(e,t){return Object(o.a)(new Date(e),{years:t.year||0,months:t.month||0,weeks:t.week||0,days:t.day||0,hours:t.hour||0,minutes:t.minute||0,seconds:t.second||0})}},675:function(e,t,n){"use strict";var a,r,o,i,c,s,l,d=n(74),u=n(269),m=n(12),v=n(55),p=n(1),b=n(20),h=n(191),j=n(33),f=n(89),x=n(34),g=n(45),y=n(82),O=n(190),T=n(3),w=b.default.div(a||(a=Object(d.a)(["\n  padding: ",";\n  background: ",";\n  border-radius: ","px;\n"])),y.isMobile?"20px":"40px",(function(e){var t=e.theme;return"dark"===t.mode?t.dm__cardBackgroundColor:t.cardBackgroundColor}),(function(e){return e.theme.cardRadius})),C=function(e){var t=e.title,n=e.icon,a=e.children;return Object(T.jsxs)(w,{children:[Object(T.jsx)(O.IconTitle,{title:t,icon:n,as:"h2",level:4}),a]})},E=n(268),_=n(267),M=b.default.div(r||(r=Object(d.a)(["\n  transition: max-height 0.5s ease-in-out;\n  max-height: 5000px;\n  ",";\n\n  .collapse-header {\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n    align-items: start;\n    gap: 6px;\n    cursor: pointer;\n\n    &__heading {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        color: ",";\n    }\n\n    &__icon {\n      color: ",";\n        opacity: 0.6;\n        width: 12px;\n        margin-top: 3.5px;\n        transition: rotate 0.2s ease-in-out;\n        rotate: ",";\n\n        &:hover {\n            svg {\n                opacity: 1;\n            }\n        }\n    }\n"])),(function(e){return e.isOpen?"":"max-height: 1.2em; overflow: hidden; transition: max-height 1s cubic-bezier(0, 1, 0, 1);"}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__textColor:t.textColor}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__textColor:t.textColor}),(function(e){return e.isOpen?"180deg":"0"})),k=function(e){var t=e.headerTitle,n=e.headerClassName,a=e.initialValue,r=e.children,o=Object(p.useState)(null!==a&&void 0!==a&&a),i=Object(m.a)(o,2),c=i[0],s=i[1];return Object(T.jsxs)(M,{isOpen:c,children:[Object(T.jsxs)("div",{className:"collapse-header ".concat(null!==n&&void 0!==n?n:""),onClick:function(){return s((function(e){return!e}))},onKeyUp:function(e){return"Enter"===e.code&&s((function(e){return!e}))},role:"button",tabIndex:0,children:[Object(T.jsx)("span",{className:"collapse-header__heading",children:t}),Object(T.jsx)("svg",{className:"arrows collapse-header__icon",width:"14",height:"8",viewBox:"0 0 14 8",xmlns:"http://www.w3.org/2000/svg",children:Object(T.jsx)("path",{d:"M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z",fill:"currentColor"})})]}),r]})},N=Object(b.default)("aside")(o||(o=Object(d.a)(["\n  ","\n  transform: ",";\n  background: ",";\n  .user-main-sidebar {\n    margin-bottom: ",";\n    .avatar-wrapper {\n      margin-bottom: ",";\n      display: flex;\n      justify-content: flex-start;\n      align-items: ",";\n      flex-direction: ",";\n    }\n    .name {\n      margin: ",";\n    }\n    .navigation {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      row-gap: 15px;\n      margin-bottom: 50px;\n      a {\n        text-decoration: none;\n        &:hover {\n          p {\n            color: ",";\n          }\n        }\n        &.selected {\n          p {\n            color: ",';\n          }\n        }\n      }\n    }\n    .logout-wrapper {\n      position: relative;\n      &:before {\n        position: absolute;\n        content: "";\n        left: 0;\n        top: -16px;\n        height: 1px;\n        width: 24px;\n        background: ',";\n      }\n      button {\n        appearance: none;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0;\n        cursor: pointer;\n        p {\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .progress-container {\n    display: flex;\n    flex-direction: ",";\n    flex-wrap: wrap;\n    justify-content: ",";\n    align-items: ",";\n  }\n"])),y.isMobile&&"\n    box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    height: 100vh;\n    width: 100%;\n    transition: all 0.25s;\n    z-index: 1000;\n    overflow: scroll;\n    ",(function(e){return e.opened&&y.isMobile?"translate(0, 0%)":!e.opened&&y.isMobile?"translate(0, 91%)":"translate(0, 0)"}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__background:t.background}),y.isMobile?"70px":"22px",y.isMobile?"30px":"21px",y.isMobile?"center":"flex-start",y.isMobile?"row":"column",y.isMobile?"0 0 0 21px":"16px 0 0 0",(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){var t=e.theme;return"dark"===t.mode?t.gray5:t.gray1}),(function(e){return e.theme.primaryColor}),y.isMobile?"row":"column",y.isMobile?"space-between":"flex-start",y.isMobile?"center":"flex-start"),P=b.default.div(i||(i=Object(d.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n\n  &:not(:last-child) {\n    margin-bottom: ",";\n    margin-right: ",";\n  }\n  .number {\n    color: ",";\n  }\n  .label {\n    margin-left: ",";\n    margin-top: 10px;\n    position: relative;\n    font-size: 14px;\n    line-height: 1.2;\n    font-weight: 700;\n    max-width: ",';\n  }\n\n  .list-box {\n    padding: 0;\n    list-style: none;\n    width: 100%;\n    grid-column: 1/3;\n    font-family: "Mulish", sans-serif;\n  }\n\n  .list-box-item {\n    font-size: 14px;\n\n    :not(:last-child) {\n      margin-bottom: 16px;\n    }\n\n    &__time {\n      color: ',";\n      opacity: 0.6;\n      margin: 0;\n      display: flex;\n      align-items: center;\n\n      &:first-of-type {\n        margin-top: 8px;\n      }\n\n      svg {\n        width: 12px;\n        height: auto;\n        fill: ",";\n        opacity: 0.6;\n      }\n    }\n\n    &__value {\n      font-size: 12px;\n      line-height: 1.5;\n      margin-left: 4px;\n    }\n  }\n"])),y.isMobile?0:"14px",y.isMobile?"10px":0,(function(e){return e.theme.primaryColor}),y.isMobile?0:"11px",y.isMobile?"80px":"unset",(function(e){var t=e.theme;return"dark"===t.mode?t.dm__textColor:t.textColor}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__textColor:t.textColor})),S=Object(b.default)("div")(c||(c=Object(d.a)(['\n  padding: 17px 15px;\n  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n  position: relative;\n  &:after {\n    content: "";\n    display: ',";\n    position: absolute;\n    right: 22px;\n    top: 50%;\n    transform: translate(0, -50%) rotate(-45deg);\n    width: 12px;\n    height: 12px;\n    border-left: 2px solid\n      ",";\n    border-bottom: 2px solid\n      ",";\n  }\n  .content-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n  }\n"])),(function(e){return e.opened?"block":"none"}),(function(e){var t=e.theme;return"dark"===t.mode?t.gray5:t.gray1}),(function(e){var t=e.theme;return"dark"===t.mode?t.gray5:t.gray1})),A=function(){var e,t,n,a,r,o,i,c,s,l=Object(p.useState)(!1),d=Object(m.a)(l,2),u=d[0],O=d[1],w=Object(p.useContext)(v.EscolaLMSContext),M=w.user,A=w.logout,D=w.certificates,z=w.progress,R=w.fetchProgress,F=Object(_.a)().t,L=Object(b.useTheme)(),B=Object(x.g)(),I=function(e){if(!e)return"-";var t=e,n=Math.trunc(e/3600);n>=1&&(t-=3600*n);var a=Math.trunc(e/60);return a>=1&&(t-=60*a),"\n        ".concat(n>=1?n+"h ":"").concat(a>=1?a+"min ":"").concat(t>=1?t+"s":"","\n    ")};Object(p.useEffect)((function(){R()}),[]);var U=Object(p.useMemo)((function(){return(z.value||[]).filter((function(e){return e.finish_date}))}),[z]),H=[{key:"COURSES",title:F("MyProfilePage.MyCourses"),url:"/user/my-profile"},{key:"CONSULTATIONS",title:F("MyProfilePage.MyConsultations"),url:"/user/my-consultations"},{key:"EVENTS",title:F("MyProfilePage.MyStationaryEvents"),url:"/user/my-stationary-events"},{key:"TASKS",title:F("MyProfilePage.MyTasks"),url:"/user/my-tasks"},{key:"BOOKMARKS",title:F("MyProfilePage.MyBookmarks"),url:"/user/my-bookmarks"},{key:"ORDERS",title:F("MyProfilePage.OrdersHistory"),url:"/user/my-orders"},{key:"NOTIFICATIONS",title:F("MyProfilePage.Notifications"),url:"/user/my-notifications"},{key:"EDIT",title:F("MyProfilePage.EditData"),url:"/user/my-data"}];return Object(T.jsxs)(N,{opened:u,children:[y.isMobile&&Object(T.jsx)(S,{opened:u,onClick:function(){return O(!u)},children:Object(T.jsxs)("div",{className:"content-wrapper",children:[null!==(e=M.value)&&void 0!==e&&e.avatar?Object(T.jsx)(h.Avatar,{size:"extraSmall",src:null===(t=M.value)||void 0===t?void 0:t.avatar,alt:""}):Object(T.jsx)(E.d,{mode:"dark"===L.mode?"light":"dark"}),Object(T.jsx)(j.Text,{children:Object(T.jsxs)("strong",{children:[null===(n=M.value)||void 0===n?void 0:n.first_name," ",null===(a=M.value)||void 0===a?void 0:a.last_name]})})]})}),Object(T.jsx)("div",{className:"user-main-sidebar",children:Object(T.jsxs)(C,{title:F("MyProfilePage.YourAccount"),icon:Object(T.jsx)(E.y,{}),children:[Object(T.jsxs)("div",{className:"avatar-wrapper",children:[null!==(r=M.value)&&void 0!==r&&r.avatar?Object(T.jsx)(h.Avatar,{size:"small",src:null===(o=M.value)||void 0===o?void 0:o.avatar,alt:""}):Object(T.jsx)(E.d,{mode:"dark"===L.mode?"light":"dark"}),Object(T.jsxs)(f.Title,{className:"name",level:4,as:"h3",children:[null===(i=M.value)||void 0===i?void 0:i.first_name," ",null===(c=M.value)||void 0===c?void 0:c.last_name]})]}),Object(T.jsx)("nav",{className:"navigation",children:H.map((function(e){return Object(T.jsx)(g.d,{activeClassName:"selected",to:e.url,children:Object(T.jsx)(j.Text,{size:"14",children:e.title})},e.key)}))}),Object(T.jsx)("div",{className:"logout-wrapper",children:Object(T.jsx)("button",{onClick:function(){return A().then((function(){return B.push("/")}))},children:Object(T.jsx)(j.Text,{children:F("MyProfilePage.Logout")})})})]})}),Object(T.jsx)("div",{className:"user-progress sidebar",children:Object(T.jsx)(C,{title:F("MyProfilePage.MyProgress"),icon:Object(T.jsx)(E.u,{}),children:Object(T.jsxs)("div",{className:"progress-container",children:[Object(T.jsxs)(P,{children:[Object(T.jsx)(f.Title,{className:"number",level:1,children:U.length}),Object(T.jsx)(j.Text,{className:"label",children:F("MyProfilePage.FinishedCourses")}),Object(T.jsx)("ul",{className:"list-box",children:U.map((function(e,t){return Object(T.jsx)("li",{className:"list-box-item",children:Object(T.jsxs)(k,{initialValue:0===t,headerTitle:e.course.title,headerClassName:"list-box-item__title",children:[e.start_date&&e.finish_date&&Object(T.jsxs)("p",{className:"list-box-item__time",children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(T.jsx)("path",{d:"M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"})}),Object(T.jsxs)("span",{className:"list-box-item__value",children:[new Date(e.start_date).toLocaleDateString()," - ",new Date(e.finish_date).toLocaleDateString()]})]}),Object(T.jsxs)("p",{className:"list-box-item__time",children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(T.jsx)("path",{d:"M6 14h6v-6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6zm16 0c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328z"})}),Object(T.jsx)("span",{className:"list-box-item__value",children:I(e.total_spent_time)})]})]})})}))})]}),Object(T.jsxs)(P,{children:[Object(T.jsx)(f.Title,{className:"number",level:1,children:null===(s=D.list)||void 0===s?void 0:s.data.length}),Object(T.jsx)(j.Text,{className:"label",children:F("MyProfilePage.TotalCertificates")})]})]})})})]})},D=b.default.div(s||(s=Object(d.a)(["\n  position: relative;\n  z-index: 0;\n  padding: ",";\n  background: ",";\n  border-radius: ",";\n  @media (max-width: 991px) {\n    padding: 60px 20px 20px 20px;\n    margin-bottom: 20px;\n  }\n\n  .actions {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n"])),(function(e){return e.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"}),(function(e){var t=e.theme;return"dark"===t.mode?t.dm__cardBackgroundColor:t.cardBackgroundColor}),(function(e){return e.theme.cardRadius})),z=function(e){var t=e.title,n=e.withTabs,a=e.actions;return Object(T.jsxs)(D,{withTabs:n,children:[Object(T.jsx)(f.Title,{level:1,children:t}),a&&Object(T.jsx)("div",{className:"actions",children:a})]})},R=n(83),F=n(189),L=b.default.section(l||(l=Object(d.a)(["\n  .courses-wrapper {\n    margin-top: -70px;\n    .tabs-menu {\n      margin: 0 0 70px 40px;\n    }\n  }\n  .certificates-container {\n    margin-top: 70px;\n    h2 {\n      margin-left: 40px;\n    }\n  }\n"])));t.a=function(e){var t=e.children,n=e.title,a=e.withTabs,r=e.actions,o=Object(p.useContext)(v.EscolaLMSContext).user,i=Object(x.g)();return Object(p.useEffect)((function(){o.loading||o.value||i.push("/login")}),[]),Object(T.jsx)(u.a,{metaTitle:n,children:Object(T.jsx)(L,{children:Object(T.jsx)(F.a,{children:Object(T.jsxs)(R.Row,{children:[Object(T.jsxs)(R.Col,{lg:9,children:[Object(T.jsx)(z,{title:n,withTabs:a,actions:r}),t]}),Object(T.jsx)(R.Col,{lg:3,children:Object(T.jsx)(A,{})})]})})})})}},677:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l}));var a=n(367),r=n(667),o=n(671),i=function(e){var t;return e?null===(t=e.items)||void 0===t?void 0:t.map((function(e){return e.name})).join(", "):""},c=function(e){var t,n,c,s,l,d,u,m,v,p,b,h,j,f,x,g,y,O,T,w,C,E,_,M,k,N,P,S,A,D,z,R,F,L,B,I,U,H,K,V,J,W,G,Y,Z,q="".concat("Notifications.").concat(e.event);switch(e.event){case a.EventTypes.StationaryEventAuthorAssigned:return{translation:q,object:{name:(null===(t=e.data.stationaryEvent)||void 0===t?void 0:t.name)||""}};case a.EventTypes.StationaryEventAuthorUnassigned:return{translation:q,object:{name:(null===(n=e.data.stationaryEvent)||void 0===n?void 0:n.name)||""}};case a.EventTypes.StationaryEventAssigned:return{translation:q,object:{name:(null===(c=e.data.stationaryEvent)||void 0===c?void 0:c.name)||""}};case a.EventTypes.StationaryEventUnassigned:return{translation:q,object:{name:(null===(s=e.data.stationaryEvent)||void 0===s?void 0:s.name)||""}};case a.EventTypes.AbandonedCartEvent:case a.EventTypes.OrderCancelled:case a.EventTypes.OrderCreated:return{translation:q};case a.EventTypes.OrderPaid:return{translation:q,object:{name:i(e.data.order)||""}};case a.EventTypes.ProductableAttached:return{translation:q,object:{name:(null===(l=e.data.productable)||void 0===l?void 0:l.name)||""}};case a.EventTypes.ProductableDetached:return{translation:q,object:{name:(null===(d=e.data.productable)||void 0===d?void 0:d.name)||""}};case a.EventTypes.ProductAddedToCart:return{translation:q,object:{name:(null===(u=e.data.product)||void 0===u?void 0:u.name)||""}};case a.EventTypes.ProductAttached:return{translation:q,object:{name:(null===(m=e.data.product)||void 0===m?void 0:m.name)||""}};case a.EventTypes.ProductBought:return{translation:q,object:{name:(null===(v=e.data.product)||void 0===v?void 0:v.name)||""}};case a.EventTypes.ProductDetached:return{translation:q,object:{name:(null===(p=e.data.product)||void 0===p?void 0:p.name)||""}};case a.EventTypes.ProductRemovedFromCart:return{translation:q,object:{name:(null===(b=e.data.product)||void 0===b?void 0:b.name)||""}};case a.EventTypes.PaymentCancelled:return{translation:q,object:{amount:(null===(h=e.data.payment)||void 0===h?void 0:h.amount)||0,name:i(null===(j=e.data.payment)||void 0===j?void 0:j.payable)}};case a.EventTypes.PaymentFailed:return{translation:q,object:{amount:(null===(f=e.data.payment)||void 0===f?void 0:f.amount)||0,name:i(null===(x=e.data.payment)||void 0===x?void 0:x.payable)}};case a.EventTypes.PaymentRegistered:return{translation:q,object:{amount:(null===(g=e.data.payment)||void 0===g?void 0:g.amount)||0}};case a.EventTypes.PaymentSuccess:return{translation:q,object:{amount:(null===(y=e.data.payment)||void 0===y?void 0:y.amount)||0,name:i(null===(O=e.data.payment)||void 0===O?void 0:O.payable)}};case a.EventTypes.CourseAccessFinished:return{translation:q,object:{name:(null===(T=e.data.course)||void 0===T?void 0:T.title)||""}};case a.EventTypes.CourseAccessStarted:return{translation:q,object:{name:(null===(w=e.data.course)||void 0===w?void 0:w.title)||""}};case a.EventTypes.CourseAssigned:return{translation:q,object:{name:(null===(C=e.data.course)||void 0===C?void 0:C.title)||""}};case a.EventTypes.CourseDeadlineSoon:return{translation:q,object:{name:(null===(E=e.data.course)||void 0===E?void 0:E.title)||"",date:Object(o.d)(null===(_=e.data.course)||void 0===_?void 0:_.active_to,r.a.defaultDateTimeFormat)}};case a.EventTypes.CoursedPublished:return{translation:q,object:{name:(null===(M=e.data.course)||void 0===M?void 0:M.title)||""}};case a.EventTypes.CourseFinished:return{translation:q,object:{name:(null===(k=e.data.course)||void 0===k?void 0:k.title)||""}};case a.EventTypes.CourseStarted:return{translation:q,object:{name:(null===(N=e.data.course)||void 0===N?void 0:N.title)||""}};case a.EventTypes.CourseStatusChanged:return{translation:q,object:{name:(null===(P=e.data.course)||void 0===P?void 0:P.title)||""}};case a.EventTypes.CourseTutorAssigned:return{translation:q,object:{name:(null===(S=e.data.course)||void 0===S?void 0:S.title)||""}};case a.EventTypes.CourseTutorUnassigned:return{translation:q,object:{name:(null===(A=e.data.course)||void 0===A?void 0:A.title)||""}};case a.EventTypes.CourseUnassigned:return{translation:q,object:{name:(null===(D=e.data.course)||void 0===D?void 0:D.title)||""}};case a.EventTypes.TopicFinished:return{translation:q,object:{name:(null===(z=e.data.course)||void 0===z?void 0:z.title)||""}};case a.EventTypes.TopicTypeChanged:return{translation:q,object:{name:(null===(R=e.data.topicContent)||void 0===R?void 0:R.value)||""}};case a.EventTypes.ReportTerm:return{translation:q,object:{name:(null===(F=e.data.consultationTerm)||void 0===F?void 0:F.consultation.name)||"",date:Object(o.d)(null===(L=e.data.consultationTerm)||void 0===L?void 0:L.executed_at,r.a.defaultDateTimeFormat),user:"".concat(null===(B=e.data.consultationTerm)||void 0===B||null===(I=B.user)||void 0===I?void 0:I.first_name," ").concat(null===(U=e.data.consultationTerm)||void 0===U||null===(H=U.user)||void 0===H?void 0:H.last_name)}};case a.EventTypes.ApprovedTerm:return{translation:q,object:{date:Object(o.d)(null===(K=e.data.consultationTerm)||void 0===K?void 0:K.executed_at)||""}};case a.EventTypes.ApprovedTermWithTrainer:return{translation:q,object:{date:Object(o.d)(null===(V=e.data.consultationTerm)||void 0===V?void 0:V.executed_at)||""}};case a.EventTypes.ChangeTerm:return{translation:q,object:{date:Object(o.d)(null===(J=e.data.consultationTerm)||void 0===J?void 0:J.executed_at)||""}};case a.EventTypes.RejectTerm:return{translation:q,object:{date:Object(o.d)(null===(W=e.data.consultationTerm)||void 0===W?void 0:W.executed_at)||""}};case a.EventTypes.RejectTermWithTrainer:return{translation:q,object:{date:Object(o.d)(null===(G=e.data.consultationTerm)||void 0===G?void 0:G.executed_at)||""}};case a.EventTypes.ReminderAboutTerm:return{translation:q,object:{date:Object(o.d)(null===(Y=e.data.consultationTerm)||void 0===Y?void 0:Y.executed_at)||""}};case a.EventTypes.ReminderTrainerAboutTerm:return{translation:q,object:{date:Object(o.d)(null===(Z=e.data.consultationTerm)||void 0===Z?void 0:Z.executed_at)||""}};default:return{translation:q}}},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2?arguments[2]:void 0;if(!e||"number"!==typeof e)return 0;var a=Math.round(e*Math.pow(10,t))/Math.pow(10,t);return n?a/n:a},l=function(e,t){return e?(t?s(e,2,100)*(1+t/100):s(e,2,100)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):0}},683:function(e,t,n){"use strict";var a,r=n(19),o=n(74),i=(n(1),n(20)),c=n(33),s=n(45),l=n(3),d=i.default.div(a||(a=Object(o.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  a {\n    text-decoration: none !important;\n  }\n  .arrow {\n    width: 10px;\n    height: 10px;\n    border-left: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    margin: 0 10px;\n    &--left {\n      transform: rotate(45deg);\n    }\n    &--right {\n      transform: rotate(-135deg);\n    }\n  }\n  .number {\n    margin: 0 8px;\n    p {\n      opacity: 0.5;\n      &.current {\n        color: ","!important;\n        font-weight: 700;\n        opacity: 1;\n      }\n    }\n  }\n"])),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor})),u="LEFT",m="RIGHT",v=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e,r=[];a<=t;)r.push(a),a+=n;return r};t.a=function(e){var t=e.currentPage,n=e.total,a=e.perPage,o=e.onPage,i=e.pageNeighbours,p=void 0===i?2:i,b=Math.ceil(n/a);return Object(l.jsx)(d,{children:function(){var e=2*p+3;if(b>e+2){var n=Math.max(2,t-p),a=Math.min(b-1,t+p),o=v(n,a),i=n>2,c=b-a>1,s=e-(o.length+1);switch(!0){case i&&!c:var l=v(n-s,n-1);o=[u].concat(Object(r.a)(l),Object(r.a)(o));break;case!i&&c:var d=v(a+1,a+s);o=[].concat(Object(r.a)(o),Object(r.a)(d),[m]);break;default:o=[u].concat(Object(r.a)(o),[m])}return[1].concat(Object(r.a)(o),[b])}return t<b&&1===t?[].concat(Object(r.a)(v(1,b)),[m]):t>1&&t!==b?[u].concat(Object(r.a)(v(1,b)),[m]):t>1&&t===b?[u].concat(Object(r.a)(v(1,b))):v(1,b)}().map((function(e){return e===u?Object(l.jsx)("a",{href:"#!prev_page",className:"prev page-numbers",onClick:function(e){e.preventDefault(),o(t<=1?1:t-1)},children:Object(l.jsx)("div",{className:"arrow arrow--left"})}):e===m?Object(l.jsx)("a",{href:"#!next_page",className:"next page-numbers",onClick:function(e){e.preventDefault(),o(t===b?b:t+1)},children:Object(l.jsx)("div",{className:"arrow arrow--right"})}):Object(l.jsx)(s.c,{onClick:function(t){t.preventDefault(),o(Number(e))},to:"#!page-".concat(Number(e)),className:"number",children:Object(l.jsx)(c.Text,{className:Number(e)===t?"current":"",size:"16","aria-current":"page",children:Number(e)})},"#".concat(Number(e)))}))})}}}]);
//# sourceMappingURL=22.76e85363.chunk.js.map
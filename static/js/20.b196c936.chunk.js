(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[20],{411:function(e,n,t){"use strict";t.r(n);var i,r=t(78),a=t(50),o=t(0),l=t(12),s=t(23),c=t(470),d=t(677),u=t(14),x=t(45),f=t(246),b=t(8),p=t(44),m=t(63),j=t(163),h=t(477),g=t(1),v=b.default.section(i||(i=Object(a.a)(["\n  margin-top: 35px;\n  .name-container {\n    p {\n      display: inline;\n      margin: 0;\n    }\n  }\n"])));n.default=function(){var e,n=Object(o.useContext)(s.EscolaLMSContext),t=n.user,i=n.orders,a=n.fetchOrders,b=n.fetchOrderInvoice,O=Object(o.useState)([]),y=Object(r.a)(O,2),w=y[0],M=y[1],k=Object(l.g)(),P=Object(m.a)().t;Object(o.useEffect)((function(){t.loading||t.value?a():k.push("/login")}),[]);var T=Object(o.useCallback)((function(e){b(e).then((function(n){var t="data:application/pdf;base64,".concat(n),i=document.createElement("a");i.href=t,i.setAttribute("download","".concat(P("MyProfilePage.InvoiceTitle")," ").concat(e,".pdf")),document.body.appendChild(i),i.click(),i&&i.parentNode&&i.parentNode.removeChild(i)})).catch((function(e){e&&(j.b.error(P("UnexpectedError")),console.log(e))}))}),[]);return Object(o.useEffect)((function(){var e;i.list&&!i.loading&&M(null===i||void 0===i||null===(e=i.list)||void 0===e?void 0:e.data.map((function(e){var n;return{title:Object(g.jsx)("div",{className:"name-container",children:null===e||void 0===e||null===(n=e.items)||void 0===n?void 0:n.map((function(n,t){var i,r;return Object(g.jsx)(u.Text,{children:Object(g.jsxs)("strong",{children:[null===n||void 0===n||null===(i=n.product)||void 0===i?void 0:i.name,t+1!==(null===e||void 0===e||null===(r=e.items)||void 0===r?void 0:r.length)&&", "]})},t)}))}),price:Object(g.jsxs)(u.Text,{children:[e.subtotal," z\u0142"]}),date:e.created_at?Object(g.jsx)(u.Text,{children:Object(f.default)(new Date(e.created_at),"dd.MM.yyyy")}):"",actions:Object(g.jsx)(x.Button,{mode:"outline",onClick:function(){return T(e.id)},children:P("MyProfilePage.Invoice")})}})))}),[i]),Object(g.jsx)(c.a,{title:P("MyProfilePage.OrdersHistory"),children:Object(g.jsxs)(v,{children:[0===(null===(e=i.list)||void 0===e?void 0:e.data.length)?Object(g.jsx)(u.Text,{style:{paddingLeft:p.isMobile?20:40},children:P("MyProfilePage.OrdersEmpty")}):Object(g.jsx)(d.Orders,{mobile:p.isMobile,data:w}),i.loading&&Object(g.jsx)(h.a,{})]})})}},470:function(e,n,t){"use strict";var i,r,a,o,l,s,c=t(50),d=t(158),u=t(78),x=t(68),f=t(0),b=t(8),p=t(112),m=t(14),j=t(54),h=t(12),g=t(17),v=t(44),O=t(110),y=t(1),w=b.default.div(i||(i=Object(c.a)(["\n  padding: ",";\n  background: ",";\n  border-radius: ","px;\n"])),v.isMobile?"20px":"40px",(function(e){var n=e.theme;return"dark"===n.mode?n.cardBackgroundColorLight:n.cardBackgroundColorDark}),(function(e){return e.theme.cardRadius})),M=function(e){var n=e.title,t=e.icon,i=e.children;return Object(y.jsxs)(w,{children:[Object(y.jsx)(O.IconTitle,{title:n,icon:t,as:"h4",level:4}),i]})},k=t(159),P=t(63),T=Object(b.default)("aside")(r||(r=Object(c.a)(["\n  ","\n  transform: ",";\n  background: ",";\n  .user-main-sidebar {\n    margin-bottom: ",";\n    .avatar-wrapper {\n      margin-bottom: ",";\n      display: flex;\n      justify-content: flex-start;\n      align-items: ",";\n      flex-direction: ",";\n    }\n    .name {\n      margin: ",";\n    }\n    .navigation {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      row-gap: 15px;\n      margin-bottom: 50px;\n      a {\n        text-decoration: none;\n        &:hover {\n          p {\n            color: ",";\n          }\n        }\n        &.selected {\n          p {\n            color: ",';\n          }\n        }\n      }\n    }\n    .logout-wrapper {\n      position: relative;\n      &:before {\n        position: absolute;\n        content: "";\n        left: 0;\n        top: -16px;\n        height: 1px;\n        width: 24px;\n        background: ',";\n      }\n      button {\n        appearance: none;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0;\n        cursor: pointer;\n        p {\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .progress-container {\n    display: flex;\n    flex-direction: ",";\n    flex-wrap: wrap;\n    justify-content: ",";\n    align-items: ",";\n  }\n"])),v.isMobile&&"\n    box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    height: 100vh;\n    width: 100%;\n    transition: all 0.25s;\n    z-index: 1000;\n    overflow: scroll;\n    ",(function(e){return e.opened&&v.isMobile?"translate(0, 0%)":!e.opened&&v.isMobile?"translate(0, 91%)":"translate(0, 0)"}),(function(e){var n=e.theme;return"dark"===n.mode?n.backgroundDark:n.backgroundLight}),v.isMobile?"70px":"22px",v.isMobile?"30px":"21px",v.isMobile?"center":"flex-start",v.isMobile?"row":"column",v.isMobile?"0 0 0 21px":"16px 0 0 0",(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){var n=e.theme;return"dark"===n.mode?n.gray5:n.gray1}),(function(e){return e.theme.primaryColor}),v.isMobile?"row":"column",v.isMobile?"space-between":"flex-start",v.isMobile?"center":"flex-start"),N=b.default.div(a||(a=Object(c.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: ",";\n  flex-direction: ",";\n  &:not(:last-child) {\n    margin-bottom: ",";\n    margin-right: ",";\n  }\n  .number {\n    min-width: 56px;\n    color: ",";\n  }\n  .label {\n    margin-left: ",";\n    position: relative;\n    top: ",";\n    font-size: 14px;\n    line-height: 1.2;\n    font-weight: 700;\n    max-width: ",";\n  }\n"])),v.isMobile?"flex-start":"flex-end",v.isMobile?"column":"row",v.isMobile?0:"14px",v.isMobile?"10px":0,(function(e){return e.theme.primaryColor}),v.isMobile?0:"11px",v.isMobile?0:"-12px",v.isMobile?"80px":"unset"),C=Object(b.default)("div")(o||(o=Object(c.a)(['\n  padding: 17px 15px;\n  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n  position: relative;\n  &:after {\n    content: "";\n    display: ',";\n    position: absolute;\n    right: 22px;\n    top: 50%;\n    transform: translate(0, -50%) rotate(-45deg);\n    width: 12px;\n    height: 12px;\n    border-left: 2px solid\n      ",";\n    border-bottom: 2px solid\n      ",";\n  }\n  .content-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n  }\n"])),(function(e){return e.opened?"block":"none"}),(function(e){var n=e.theme;return"dark"===n.mode?n.gray5:n.gray1}),(function(e){var n=e.theme;return"dark"===n.mode?n.gray5:n.gray1})),_=function(){var e,n,t,i,r,a,o,l,s,c=Object(f.useState)(!1),d=Object(u.a)(c,2),O=d[0],w=d[1],_=Object(f.useContext)(x.EscolaLMSContext),E=_.user,S=_.logout,z=_.certificates,D=_.progress,L=_.fetchProgress,B=Object(P.a)().t,I=Object(b.useTheme)(),A=Object(h.g)();Object(f.useEffect)((function(){L()}),[]);var R=Object(f.useMemo)((function(){return(D.value||[]).filter((function(e){return e.finish_date}))}),[D]),F=[{key:"COURSES",title:B("MyProfilePage.MyCourses"),url:"/user/my-profile"},{key:"ORDERS",title:B("MyProfilePage.OrdersHistory"),url:"/user/my-orders"},{key:"NOTIFICATIONS",title:B("MyProfilePage.Notifications"),url:"/user/my-notifications"},{key:"EDIT",title:B("MyProfilePage.EditData"),url:"/user/my-data"}];return Object(y.jsxs)(T,{opened:O,children:[v.isMobile&&Object(y.jsx)(C,{opened:O,onClick:function(){return w(!O)},children:Object(y.jsxs)("div",{className:"content-wrapper",children:[null!==(e=E.value)&&void 0!==e&&e.avatar?Object(y.jsx)(p.Avatar,{size:"extraSmall",src:null===(n=E.value)||void 0===n?void 0:n.avatar,alt:""}):Object(y.jsx)(k.d,{mode:"dark"===I.mode?"light":"dark"}),Object(y.jsx)(m.Text,{children:Object(y.jsxs)("strong",{children:[null===(t=E.value)||void 0===t?void 0:t.first_name," ",null===(i=E.value)||void 0===i?void 0:i.last_name]})})]})}),Object(y.jsx)("div",{className:"user-main-sidebar",children:Object(y.jsxs)(M,{title:B("MyProfilePage.YourAccount"),icon:Object(y.jsx)(k.m,{}),children:[Object(y.jsxs)("div",{className:"avatar-wrapper",children:[null!==(r=E.value)&&void 0!==r&&r.avatar?Object(y.jsx)(p.Avatar,{size:"small",src:null===(a=E.value)||void 0===a?void 0:a.avatar,alt:""}):Object(y.jsx)(k.d,{mode:"dark"===I.mode?"light":"dark"}),Object(y.jsxs)(j.Title,{className:"name",level:4,children:[null===(o=E.value)||void 0===o?void 0:o.first_name," ",null===(l=E.value)||void 0===l?void 0:l.last_name]})]}),Object(y.jsx)("nav",{className:"navigation",children:F.map((function(e){return Object(y.jsx)(g.d,{activeClassName:"selected",to:e.url,children:Object(y.jsx)(m.Text,{size:"14",children:e.title})},e.key)}))}),Object(y.jsx)("div",{className:"logout-wrapper",children:Object(y.jsx)("button",{onClick:function(){return S().then((function(){return A.push("/")}))},children:Object(y.jsx)(m.Text,{children:B("MyProfilePage.Logout")})})})]})}),Object(y.jsx)("div",{className:"user-progress sidebar",children:Object(y.jsx)(M,{title:B("MyProfilePage.MyProgress"),icon:Object(y.jsx)(k.j,{}),children:Object(y.jsxs)("div",{className:"progress-container",children:[Object(y.jsxs)(N,{children:[Object(y.jsx)(j.Title,{className:"number",level:1,children:R.length}),Object(y.jsx)(m.Text,{className:"label",children:B("MyProfilePage.FinishedCourses")})]}),Object(y.jsxs)(N,{children:[Object(y.jsx)(j.Title,{className:"number",level:1,children:null===(s=z.list)||void 0===s?void 0:s.data.length}),Object(y.jsx)(m.Text,{className:"label",children:B("MyProfilePage.TotalCertificates")})]})]})})})]})},E=b.default.div(l||(l=Object(c.a)(["\n  position: relative;\n  z-index: 0;\n  padding: ",";\n  background: ",";\n  border-radius: ",";\n  @media (max-width: 991px) {\n    padding: 60px 20px 20px 20px;\n    margin-bottom: 20px;\n  }\n"])),(function(e){return e.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"}),(function(e){var n=e.theme;return"dark"===n.mode?n.cardBackgroundColorLight:n.cardBackgroundColorDark}),(function(e){return e.theme.cardRadius})),S=function(e){var n=e.title,t=e.withTabs;return Object(y.jsx)(E,{withTabs:t,children:Object(y.jsx)(j.Title,{level:1,children:n})})},z=b.default.section(s||(s=Object(c.a)(["\n  .courses-wrapper {\n    margin-top: -70px;\n    .tabs-menu {\n      margin: 0 0 70px 40px;\n    }\n  }\n  .certificates-container {\n    margin-top: 70px;\n    h2 {\n      margin-left: 40px;\n    }\n  }\n"])));n.a=function(e){var n=e.children,t=e.title,i=e.withTabs,r=Object(f.useContext)(x.EscolaLMSContext).user,a=Object(h.g)();return Object(f.useEffect)((function(){r.loading||r.value||a.push("/login")}),[]),Object(y.jsx)(d.a,{metaTitle:t,children:Object(y.jsx)(z,{children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-lg-9",children:[Object(y.jsx)(S,{title:t,withTabs:i}),n]}),Object(y.jsx)("div",{className:"col-lg-3",children:Object(y.jsx)(_,{})})]})})})})}},477:function(e,n,t){"use strict";var i,r=t(50),a=t(31),o=t(8),l=t(1),s=o.default.div(i||(i=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"])));n.a=function(){var e=Object(o.useTheme)();return Object(l.jsx)(s,{children:Object(l.jsx)(a.Spin,{color:e.primaryColor})})}},677:function(e,n,t){"use strict";var i=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,n,t,i){void 0===i&&(i=t);var r=Object.getOwnPropertyDescriptor(n,t);r&&!("get"in r?!n.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,i,r)}:function(e,n,t,i){void 0===i&&(i=t),e[i]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.Orders=void 0;var s,c,d,u=t(1),x=l(t(0)),f=l(t(8)),b=t(27),p=t(14),m=(0,f.default)("div")(s||(s=i(["\n  .labels-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 40px 12px 40px;\n    .single-label {\n      &:first-of-type {\n        flex: 0 0 40%;\n        max-width: 40%;\n      }\n      &:nth-of-type(2),\n      &:nth-of-type(3) {\n        flex: 0 0 15%;\n        max-width: 15%;\n      }\n      &:last-of-type {\n        flex: 0 0 20%;\n        max-width: 20%;\n      }\n    }\n  }\n"],["\n  .labels-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 40px 12px 40px;\n    .single-label {\n      &:first-of-type {\n        flex: 0 0 40%;\n        max-width: 40%;\n      }\n      &:nth-of-type(2),\n      &:nth-of-type(3) {\n        flex: 0 0 15%;\n        max-width: 15%;\n      }\n      &:last-of-type {\n        flex: 0 0 20%;\n        max-width: 20%;\n      }\n    }\n  }\n"]))),j=(0,f.default)("div")(c||(c=i(["\n  display: flex;\n  flex-direction: ",";\n  width: 100%;\n  justify-content: ",";\n  align-items: ",";\n  margin-bottom: 10px;\n  padding: ",";\n  background: ",";\n  .single-content {\n    &:not(:last-child) {\n      margin-bottom: ",";\n    }\n    &:first-of-type {\n      flex: ",";\n      max-width: ",";\n    }\n    &:nth-of-type(2),\n    &:nth-of-type(3) {\n      flex: ",";\n      max-width: ",";\n    }\n    &:last-of-type {\n      flex: ",";\n      max-width: ",";\n    }\n  }\n"],["\n  display: flex;\n  flex-direction: ",";\n  width: 100%;\n  justify-content: ",";\n  align-items: ",";\n  margin-bottom: 10px;\n  padding: ",";\n  background: ",";\n  .single-content {\n    &:not(:last-child) {\n      margin-bottom: ",";\n    }\n    &:first-of-type {\n      flex: ",";\n      max-width: ",";\n    }\n    &:nth-of-type(2),\n    &:nth-of-type(3) {\n      flex: ",";\n      max-width: ",";\n    }\n    &:last-of-type {\n      flex: ",";\n      max-width: ",";\n    }\n  }\n"])),(function(e){return e.mobile?"column":"row"}),(function(e){return e.mobile?"flex-start":"space-between"}),(function(e){return e.mobile?"flex-start":"center"}),(function(e){return e.mobile?"20px 15px":"12px 40px"}),(function(e){var n=e.theme;return"dark"===n.mode?n.cardBackgroundColorLight:n.cardBackgroundColorDark}),(function(e){return e.mobile?"15px":0}),(function(e){return e.mobile?"0 0 100%":"0 0 40%"}),(function(e){return e.mobile?"100%":"40%"}),(function(e){return e.mobile?"0 0 100%":"0 0 15%"}),(function(e){return e.mobile?"100%":"15%"}),(function(e){return e.mobile?"0 0 100%":"0 0 20%"}),(function(e){return e.mobile?"100%":"20%"}));n.Orders=function(e){var n=e.data,t=e.mobile,i=void 0!==t&&t,a=(0,b.useTranslation)().t,o=(0,x.useMemo)((function(){return n.some((function(e){return!!e.actions}))}),[n]);return(0,u.jsxs)(m,r({mobile:i},{children:[0===n.length&&(0,u.jsx)(p.Text,{children:a("Orders.NoRecords")}),n.length>0&&(0,u.jsxs)(x.default.Fragment,{children:[!i&&(0,u.jsxs)("div",r({className:"labels-row"},{children:[(0,u.jsx)("div",r({className:"single-label"},{children:(0,u.jsx)(p.Text,r({size:"14"},{children:a("Orders.Title")}))})),(0,u.jsx)("div",r({className:"single-label"},{children:(0,u.jsx)(p.Text,r({size:"14"},{children:a("Orders.Date")}))})),(0,u.jsx)("div",r({className:"single-label"},{children:(0,u.jsx)(p.Text,r({size:"14"},{children:a("Orders.Price")}))})),o&&(0,u.jsx)("div",r({className:"single-label"},{children:(0,u.jsx)(p.Text,r({size:"14"},{children:a("Orders.Actions")}))}))]})),n.map((function(e,n){return(0,u.jsxs)(j,r({mobile:i},{children:[(0,u.jsx)("div",r({className:"single-content"},{children:e.title})),(0,u.jsx)("div",r({className:"single-content"},{children:e.date})),(0,u.jsx)("div",r({className:"single-content"},{children:e.price})),o&&(0,u.jsx)("div",r({className:"single-content"},{children:e.actions}))]}),n)}))]})]}))},n.default=(0,f.withTheme)((0,f.default)(n.Orders)(d||(d=i([""],[""]))))}}]);
//# sourceMappingURL=20.b196c936.chunk.js.map
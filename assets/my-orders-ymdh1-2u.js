import{d as u,r as x,z,D,j as d,a1 as $,G as O,q as I,k as q,f as A,y as R,s as U,n as B}from"./index-DaafzRP_.js";import{P as G}from"./index-BuaDi91w.js";import{C as F}from"./index-p2Hnf5if.js";import{f as H}from"./date-D2Y_Z1t9.js";import"./app-B2E7767C.js";var E={};(function(l){var g=u&&u.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},t=u&&u.__assign||function(){return t=Object.assign||function(n){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},t.apply(this,arguments)},T=u&&u.__createBinding||(Object.create?function(n,e,i,s){s===void 0&&(s=i);var o=Object.getOwnPropertyDescriptor(e,i);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(n,s,o)}:function(n,e,i,s){s===void 0&&(s=i),n[s]=e[i]}),N=u&&u.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),m=u&&u.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var i in n)i!=="default"&&Object.prototype.hasOwnProperty.call(n,i)&&T(e,n,i);return N(e,n),e};Object.defineProperty(l,"__esModule",{value:!0}),l.Orders=void 0;var r=d,p=m(x),b=m(z),w=$,c=O,a=D,f=(0,b.default)("div")(y||(y=g([`
  .labels-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px 12px 40px;
    .single-label {
      &:first-of-type {
        flex: 0 0 40%;
        max-width: 40%;
      }
      &:nth-of-type(2),
      &:nth-of-type(3) {
        flex: 0 0 15%;
        max-width: 15%;
      }
      &:last-of-type {
        flex: 0 0 20%;
        max-width: 20%;
      }
    }
  }
`],[`
  .labels-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px 12px 40px;
    .single-label {
      &:first-of-type {
        flex: 0 0 40%;
        max-width: 40%;
      }
      &:nth-of-type(2),
      &:nth-of-type(3) {
        flex: 0 0 15%;
        max-width: 15%;
      }
      &:last-of-type {
        flex: 0 0 20%;
        max-width: 20%;
      }
    }
  }
`]))),v=(0,b.default)("div")(j||(j=g([`
  display: flex;
  flex-direction: `,`;
  width: 100%;
  justify-content: `,`;
  align-items: `,`;
  margin-bottom: 10px;
  padding: `,`;
  background: `,`;
  .single-content {
    &:not(:last-child) {
      margin-bottom: `,`;
    }
    &:first-of-type {
      flex: `,`;
      max-width: `,`;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      flex: `,`;
      max-width: `,`;
    }
    &:last-of-type {
      flex: `,`;
      max-width: `,`;
    }
  }
`],[`
  display: flex;
  flex-direction: `,`;
  width: 100%;
  justify-content: `,`;
  align-items: `,`;
  margin-bottom: 10px;
  padding: `,`;
  background: `,`;
  .single-content {
    &:not(:last-child) {
      margin-bottom: `,`;
    }
    &:first-of-type {
      flex: `,`;
      max-width: `,`;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      flex: `,`;
      max-width: `,`;
    }
    &:last-of-type {
      flex: `,`;
      max-width: `,`;
    }
  }
`])),function(n){var e=n.mobile;return e?"column":"row"},function(n){var e=n.mobile;return e?"flex-start":"space-between"},function(n){var e=n.mobile;return e?"flex-start":"center"},function(n){var e=n.mobile;return e?"20px 15px":"12px 40px"},function(n){var e=n.theme;return(0,a.getStylesBasedOnTheme)(e.mode,e.dm__cardBackgroundColor,e.cardBackgroundColor)},function(n){var e=n.mobile;return e?"15px":0},function(n){var e=n.mobile;return e?"0 0 100%":"0 0 40%"},function(n){var e=n.mobile;return e?"100%":"40%"},function(n){var e=n.mobile;return e?"0 0 100%":"0 0 15%"},function(n){var e=n.mobile;return e?"100%":"15%"},function(n){var e=n.mobile;return e?"0 0 100%":"0 0 20%"},function(n){var e=n.mobile;return e?"100%":"20%"}),P=function(n){var e=n.data,i=n.mobile,s=i===void 0?!1:i,o=n.className,S=o===void 0?"":o,_=(0,w.useTranslation)().t,C=(0,p.useMemo)(function(){return e.some(function(h){return!!h.actions})},[e]);return(0,r.jsxs)(f,t({className:"wellms-component ".concat(S),mobile:s},{children:[e.length===0&&(0,r.jsx)(c.Text,{children:_("Orders.NoRecords")}),e.length>0&&(0,r.jsxs)(p.default.Fragment,{children:[!s&&(0,r.jsxs)("div",t({className:"labels-row"},{children:[(0,r.jsx)("div",t({className:"single-label"},{children:(0,r.jsx)(c.Text,t({size:"14"},{children:_("Orders.Title")}))})),(0,r.jsx)("div",t({className:"single-label"},{children:(0,r.jsx)(c.Text,t({size:"14"},{children:_("Orders.Date")}))})),(0,r.jsx)("div",t({className:"single-label"},{children:(0,r.jsx)(c.Text,t({size:"14"},{children:_("Orders.Price")}))})),C&&(0,r.jsx)("div",t({className:"single-label"},{children:(0,r.jsx)(c.Text,t({size:"14"},{children:_("Orders.Actions")}))}))]})),e.map(function(h,L){return(0,r.jsxs)(v,t({mobile:s},{children:[(0,r.jsx)("div",t({className:"single-content"},{children:h.title})),(0,r.jsx)("div",t({className:"single-content"},{children:h.date})),(0,r.jsx)("div",t({className:"single-content"},{children:h.price})),C&&(0,r.jsx)("div",t({className:"single-content"},{children:h.actions}))]}),L)})]})]}))};l.Orders=P,l.default=(0,b.withTheme)((0,b.default)(l.Orders)(M||(M=g([""],[""]))));var y,j,M})(E);const J=I.section`
  margin-top: 35px;
  .name-container {
    p {
      display: inline;
      margin: 0;
    }
  }

  * {
    box-sizing: border-box;
  }
`,Y=()=>{var w;const{orders:l,fetchOrders:g,fetchOrderInvoice:t}=x.useContext(q.EscolaLMSContext),[T,N]=x.useState([]),{t:m}=A(),[r,p]=x.useState(-1);x.useEffect(()=>{g()},[]);const b=x.useCallback(async c=>{p(c);try{const a=await t(c);if(a){const f=document.createElement("a");document.body.appendChild(f),f.setAttribute("href",URL.createObjectURL(new Blob([a]))),f.setAttribute("download",`${m("MyProfilePage.InvoiceTitle")} ${c}.pdf`),f.style.display="",f.click(),document.body.removeChild(f),p(-1)}}catch(a){p(-1),R.error(m("UnexpectedError")),console.log(a)}},[t,m]);return x.useEffect(()=>{var c;l.list&&!l.loading&&N((c=l==null?void 0:l.list)==null?void 0:c.data.map(a=>{var f;return{title:d.jsx("div",{className:"name-container",children:(f=a==null?void 0:a.items)==null?void 0:f.map((v,P)=>{var y,j;return d.jsx(O.Text,{children:d.jsxs("strong",{children:[(y=v==null?void 0:v.product)==null?void 0:y.name,P+1!==((j=a==null?void 0:a.items)==null?void 0:j.length)&&", "]})},P)})}),price:d.jsxs(O.Text,{children:[a.subtotal," zł"]}),date:a.created_at?d.jsx(O.Text,{children:H(a.created_at)}):"",actions:d.jsx(U.Button,{mode:"outline",onClick:()=>b(a.id),loading:r===a.id,children:m("MyProfilePage.Invoice")})}}))},[l]),d.jsx(G,{title:m("MyProfilePage.OrdersHistory"),children:d.jsxs(J,{children:[((w=l.list)==null?void 0:w.data.length)===0?d.jsx(O.Text,{style:{paddingLeft:B?20:40},children:m("MyProfilePage.OrdersEmpty")}):d.jsx(E.Orders,{mobile:B,data:T}),l.loading&&d.jsx(F,{})]})})};export{Y as default};

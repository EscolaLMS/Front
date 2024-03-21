import{d as f,r as b,a6 as D,a7 as I,j as l,a4 as z,s as j,q as A,h as L,f as R,n as q,W as U,aj as F,v as k}from"./index-t6qcE6xV.js";import{P as G}from"./index-DB8kd_Xy.js";import{P as H}from"./index-DSE5LBwN.js";import{S as B}from"./index-BZNMhtf1.js";import{t as W}from"./toast-D7XhDk_L.js";import"./index-DmM4Ouv-.js";var M={};(function(n){var u=f&&f.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},r=f&&f.__assign||function(){return r=Object.assign||function(t){for(var e,s=1,c=arguments.length;s<c;s++){e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},r.apply(this,arguments)},d=f&&f.__createBinding||(Object.create?function(t,e,s,c){c===void 0&&(c=s);var a=Object.getOwnPropertyDescriptor(e,s);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(t,c,a)}:function(t,e,s,c){c===void 0&&(c=s),t[c]=e[s]}),y=f&&f.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),g=f&&f.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var s in t)s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)&&d(e,t,s);return y(e,t),e};Object.defineProperty(n,"__esModule",{value:!0}),n.Orders=void 0;var i=l,w=g(b),h=g(D),P=z,x=j,N=I,T=(0,h.default)("div")(v||(v=u([`
  .labels-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0px 12px 0px;
    .single-label {
      &:first-of-type {
        flex: 0 0 25%;
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
    padding: 0 0px 12px 0px;
    .single-label {
      &:first-of-type {
        flex: 0 0 25%;
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
`]))),C=(0,h.default)("div")(_||(_=u([`
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
`])),function(t){var e=t.mobile;return e?"column":"row"},function(t){var e=t.mobile;return e?"flex-start":"space-between"},function(t){var e=t.mobile;return e?"flex-start":"center"},function(t){var e=t.mobile;return e?"20px 0px":"12px 0px"},function(t){var e=t.theme;return(0,N.getStylesBasedOnTheme)(e.mode,e.dm__cardBackgroundColor,e.cardBackgroundColor)},function(t){var e=t.mobile;return e?"15px":0},function(t){var e=t.mobile;return e?"0 0 100%":"0 0 25%"},function(t){var e=t.mobile;return e?"100%":"40%"},function(t){var e=t.mobile;return e?"0 0 100%":"0 0 15%"},function(t){var e=t.mobile;return e?"100%":"15%"},function(t){var e=t.mobile;return e?"0 0 100%":"0 0 20%"},function(t){var e=t.mobile;return e?"100%":"20%"}),S=function(t){var e=t.data,s=t.mobile,c=s===void 0?!1:s,a=t.className,p=a===void 0?"":a,o=(0,P.useTranslation)().t,$=(0,w.useMemo)(function(){return e.some(function(m){return!!m.actions})},[e]);return(0,i.jsxs)(T,r({className:"wellms-component ".concat(p),mobile:c},{children:[e.length===0&&(0,i.jsx)(x.Text,{children:o("Orders.NoRecords")}),e.length>0&&(0,i.jsxs)(w.default.Fragment,{children:[!c&&(0,i.jsxs)("div",r({className:"labels-row"},{children:[(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:o("Orders.Title")}))}))," ",(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:o("Orders.Status")}))})),(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:o("Orders.Date")}))})),(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:o("Orders.Price")}))})),$&&(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:o("Orders.Actions")}))}))]})),e.map(function(m,E){return(0,i.jsxs)(C,r({mobile:c},{children:[(0,i.jsx)("div",r({className:"single-content"},{children:m.title})),(0,i.jsx)("div",r({className:"single-content"},{children:m.status})),(0,i.jsx)("div",r({className:"single-content"},{children:m.date})),(0,i.jsx)("div",r({className:"single-content"},{children:m.price})),$&&(0,i.jsx)("div",r({className:"single-content"},{children:m.actions}))]}),E)})]})]}))};n.Orders=S,n.default=(0,h.withTheme)((0,h.default)(n.Orders)(O||(O=u([""],[""]))));var v,_,O})(M);const J=()=>{const n=b.useId();return l.jsx(l.Fragment,{children:l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",width:"100%",justifyContent:"space-between"},children:Array.from({length:5}).map((u,r)=>l.jsx(B,{style:{marginBottom:"11px",display:"flex",width:"100px",height:"28px"}},`${n}-${r}-header`))}),Array.from({length:15}).map((u,r)=>l.jsxs("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",marginBottom:"22px"},children:[Array.from({length:4}).map((d,y)=>l.jsx(B,{style:{marginBottom:"11px",width:"100px",height:"28px"}},`${n}-${y}-cell`)),l.jsx(B,{style:{marginBottom:"11px",width:"90px",borderRadius:"5px",height:"44px"}})]},`${n}-${r}-row`))]})})},K=A.section`
  margin-top: 20px;

  @media (max-width: 991px) {
    margin-top: 0;
  }
  .name-container {
    p {
      display: inline;
      margin: 0;
    }
  }

  * {
    box-sizing: border-box;
  }
`,te=()=>{var h,P,x,N,T,C,S,v,_,O,t,e,s,c;const{orders:n,fetchOrders:u,fetchOrderInvoice:r}=b.useContext(L.EscolaLMSContext),{t:d}=R(),[y,g]=b.useState(-1);b.useEffect(()=>{u({page:1,order_by:"created_at",order:"DESC"})},[]);const i=b.useCallback(a=>{u({page:a,order_by:"created_at",order:"DESC"})},[u]),w=b.useCallback(async a=>{g(a);try{const p=await r(a);if(p){const o=document.createElement("a");document.body.appendChild(o),o.setAttribute("href",URL.createObjectURL(new Blob([p]))),o.setAttribute("download",`${d("MyProfilePage.InvoiceTitle")} ${a}.pdf`),o.style.display="",o.click(),document.body.removeChild(o),g(-1)}}catch(p){g(-1),W(d("UnexpectedError"),"error"),console.log(p)}},[r,d]);return l.jsx(G,{title:d("MyProfilePage.OrdersHistory"),children:l.jsxs(K,{children:[!n.loading&&((h=n.list)==null?void 0:h.data.length)===0&&l.jsx(j.Text,{children:d("MyProfilePage.OrdersEmpty")}),!n.loading&&!n.error&&n&&((P=n.list)==null?void 0:P.data)&&((x=n.list)==null?void 0:x.data.length)>0&&l.jsx(M.Orders,{mobile:q,data:(((N=n==null?void 0:n.list)==null?void 0:N.data)||[]).map(a=>{var p;return{title:l.jsx("div",{className:"name-container",children:(p=a==null?void 0:a.items)==null?void 0:p.map((o,$)=>{var m;return l.jsx(j.Text,{children:l.jsx("strong",{children:(m=o==null?void 0:o.product)==null?void 0:m.name})},$)})}),status:l.jsx(j.Text,{children:d(`OrderStatus.${a.status}`)}),price:l.jsxs(j.Text,{children:[U(a.total)," zł"]}),date:a.created_at?l.jsx(j.Text,{children:F(a.created_at)}):"",actions:l.jsx(k.Button,{mode:"outline",onClick:()=>w(a.id),loading:y===a.id,children:d("MyProfilePage.Invoice")})}})}),n.loading&&l.jsx(J,{}),Number((C=(T=n==null?void 0:n.list)==null?void 0:T.meta)==null?void 0:C.total)>Number((v=(S=n==null?void 0:n.list)==null?void 0:S.meta)==null?void 0:v.per_page)&&l.jsx(H,{total:Number((O=(_=n==null?void 0:n.list)==null?void 0:_.meta)==null?void 0:O.total),perPage:Number((e=(t=n==null?void 0:n.list)==null?void 0:t.meta)==null?void 0:e.per_page),currentPage:Number((c=(s=n==null?void 0:n.list)==null?void 0:s.meta)==null?void 0:c.current_page),onPage:i})]})})};export{te as default};

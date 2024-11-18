import{e as u,r as b,a6 as I,a7 as D,j as l,a4 as z,x as y,q as A,i as L,h as R,I as q,o as U,V as F,aj as k,y as G}from"./index-CD4m0m91.js";import{P as H}from"./index-2bVnVilS.js";import{P as V}from"./index-J9T9aVd8.js";import{S as B}from"./index-COt4SKXg.js";import"./index-DjD8yRvx.js";var M={};(function(n){var f=u&&u.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},r=u&&u.__assign||function(){return r=Object.assign||function(t){for(var e,s=1,o=arguments.length;s<o;s++){e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},r.apply(this,arguments)},d=u&&u.__createBinding||(Object.create?function(t,e,s,o){o===void 0&&(o=s);var a=Object.getOwnPropertyDescriptor(e,s);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(t,o,a)}:function(t,e,s,o){o===void 0&&(o=s),t[o]=e[s]}),j=u&&u.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),g=u&&u.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var s in t)s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)&&d(e,t,s);return j(e,t),e};Object.defineProperty(n,"__esModule",{value:!0}),n.Orders=void 0;var i=l,w=g(b),h=g(I),P=z,x=y,N=D,T=(0,h.default)("div")(v||(v=f([`
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
`]))),C=(0,h.default)("div")(_||(_=f([`
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
`])),function(t){var e=t.mobile;return e?"column":"row"},function(t){var e=t.mobile;return e?"flex-start":"space-between"},function(t){var e=t.mobile;return e?"flex-start":"center"},function(t){var e=t.mobile;return e?"20px 0px":"12px 0px"},function(t){var e=t.theme;return(0,N.getStylesBasedOnTheme)(e.mode,e.dm__cardBackgroundColor,e.cardBackgroundColor)},function(t){var e=t.mobile;return e?"15px":0},function(t){var e=t.mobile;return e?"0 0 100%":"0 0 25%"},function(t){var e=t.mobile;return e?"100%":"40%"},function(t){var e=t.mobile;return e?"0 0 100%":"0 0 15%"},function(t){var e=t.mobile;return e?"100%":"15%"},function(t){var e=t.mobile;return e?"0 0 100%":"0 0 20%"},function(t){var e=t.mobile;return e?"100%":"20%"}),S=function(t){var e=t.data,s=t.mobile,o=s===void 0?!1:s,a=t.className,p=a===void 0?"":a,c=(0,P.useTranslation)().t,$=(0,w.useMemo)(function(){return e.some(function(m){return!!m.actions})},[e]);return(0,i.jsxs)(T,r({className:"wellms-component ".concat(p),mobile:o},{children:[e.length===0&&(0,i.jsx)(x.Text,{children:c("Orders.NoRecords")}),e.length>0&&(0,i.jsxs)(w.default.Fragment,{children:[!o&&(0,i.jsxs)("div",r({className:"labels-row"},{children:[(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:c("Orders.Title")}))}))," ",(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:c("Orders.Status")}))})),(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:c("Orders.Date")}))})),(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:c("Orders.Price")}))})),$&&(0,i.jsx)("div",r({className:"single-label"},{children:(0,i.jsx)(x.Text,r({size:"14"},{children:c("Orders.Actions")}))}))]})),e.map(function(m,E){return(0,i.jsxs)(C,r({mobile:o},{children:[(0,i.jsx)("div",r({className:"single-content"},{children:m.title})),(0,i.jsx)("div",r({className:"single-content"},{children:m.status})),(0,i.jsx)("div",r({className:"single-content"},{children:m.date})),(0,i.jsx)("div",r({className:"single-content"},{children:m.price})),$&&(0,i.jsx)("div",r({className:"single-content"},{children:m.actions}))]}),E)})]})]}))};n.Orders=S,n.default=(0,h.withTheme)((0,h.default)(n.Orders)(O||(O=f([""],[""]))));var v,_,O})(M);const J=()=>{const n=b.useId();return l.jsx(l.Fragment,{children:l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",width:"100%",justifyContent:"space-between"},children:Array.from({length:5}).map((f,r)=>l.jsx(B,{style:{marginBottom:"11px",display:"flex",width:"100px",height:"28px"}},`${n}-${r}-header`))}),Array.from({length:15}).map((f,r)=>l.jsxs("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",marginBottom:"22px"},children:[Array.from({length:4}).map((d,j)=>l.jsx(B,{style:{marginBottom:"11px",width:"100px",height:"28px"}},`${n}-${j}-cell`)),l.jsx(B,{style:{marginBottom:"11px",width:"90px",borderRadius:"5px",height:"44px"}})]},`${n}-${r}-row`))]})})},K=A.section`
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
`,ee=()=>{var h,P,x,N,T,C,S,v,_,O,t,e,s,o;const{orders:n,fetchOrders:f,fetchOrderInvoice:r}=b.useContext(L.EscolaLMSContext),{t:d}=R(),[j,g]=b.useState(-1);b.useEffect(()=>{f({page:1,order_by:"created_at",order:"DESC"})},[]);const i=b.useCallback(a=>{f({page:a,order_by:"created_at",order:"DESC"})},[f]),w=b.useCallback(async a=>{g(a);try{const p=await r(a);if(p){const c=document.createElement("a");document.body.appendChild(c),c.setAttribute("href",URL.createObjectURL(new Blob([p]))),c.setAttribute("download",`${d("MyProfilePage.InvoiceTitle")} ${a}.pdf`),c.style.display="",c.click(),document.body.removeChild(c),g(-1)}}catch(p){g(-1),q(d("UnexpectedError"),"error"),console.log(p)}},[r,d]);return l.jsx(H,{title:d("MyProfilePage.OrdersHistory"),children:l.jsxs(K,{children:[!n.loading&&((h=n.list)==null?void 0:h.data.length)===0&&l.jsx(y.Text,{children:d("MyProfilePage.OrdersEmpty")}),!n.loading&&!n.error&&n&&((P=n.list)==null?void 0:P.data)&&((x=n.list)==null?void 0:x.data.length)>0&&l.jsx(M.Orders,{mobile:U,data:(((N=n==null?void 0:n.list)==null?void 0:N.data)||[]).map(a=>{var p;return{title:l.jsx("div",{className:"name-container",children:(p=a==null?void 0:a.items)==null?void 0:p.map((c,$)=>{var m;return l.jsx(y.Text,{children:l.jsx("strong",{children:(m=c.product)==null?void 0:m.name})},$)})}),status:l.jsx(y.Text,{children:d(`OrderStatus.${a.status}`)}),price:l.jsxs(y.Text,{children:[F(a.total)," zł"]}),date:a.created_at?l.jsx(y.Text,{children:k(a.created_at)}):"",actions:l.jsx(G.Button,{mode:"outline",onClick:()=>w(a.id),loading:j===a.id,children:d("MyProfilePage.Invoice")})}})}),n.loading&&l.jsx(J,{}),Number((C=(T=n==null?void 0:n.list)==null?void 0:T.meta)==null?void 0:C.total)>Number((v=(S=n==null?void 0:n.list)==null?void 0:S.meta)==null?void 0:v.per_page)&&l.jsx(V,{total:Number((O=(_=n==null?void 0:n.list)==null?void 0:_.meta)==null?void 0:O.total),perPage:Number((e=(t=n==null?void 0:n.list)==null?void 0:t.meta)==null?void 0:e.per_page),currentPage:Number((o=(s=n==null?void 0:n.list)==null?void 0:s.meta)==null?void 0:o.current_page),onPage:i})]})})};export{ee as default};

import{d as s,a5 as C,a6 as w,j as e,q as h,r as j,D as N,f as v,X as P,s as p,T,S as O,cC as k}from"./index-BwDDCa5l.js";import{P as M}from"./index-CntMwbrZ.js";import{u as S}from"./useDownloadCertificate-S0p9VWMq.js";import"./index-C-knIOix.js";var x={},D=s&&s.__makeTemplateObject||function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},u=s&&s.__assign||function(){return u=Object.assign||function(t){for(var n,a=1,o=arguments.length;a<o;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u.apply(this,arguments)},A=s&&s.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(x,"__esModule",{value:!0});var _=x.NoteAction=void 0,l=e,E=A(C),L=w,$=(0,E.default)("div")(y||(y=D([`
  border-left: 3px solid `,`;
  padding: 20px;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: `,`px;
  background: `,`;
  > div:first-child {
    padding-right: 30px;
  }

  .subtitle {
    opacity: 0.8;
  }
`],[`
  border-left: 3px solid `,`;
  padding: 20px;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: `,`px;
  background: `,`;
  > div:first-child {
    padding-right: 30px;
  }

  .subtitle {
    opacity: 0.8;
  }
`])),function(t){return t.color?t.color:"#F2C94C"},function(t){return t.theme.cardRadius},function(t){var n=t.theme;return(0,L.getStylesBasedOnTheme)(n.mode,n.dm__cardBackgroundColor,n.cardBackgroundColor)}),q=function(t){var n=t.title,a=t.subtitle,o=t.color,i=t.actions,c=t.className,d=c===void 0?"":c;return(0,l.jsxs)($,u({className:"wellms-component ".concat(d),color:o},{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:n}),a&&(0,l.jsx)("div",u({className:"subtitle"},{children:a}))]}),(0,l.jsx)("div",{children:i})]}))};_=x.NoteAction=q;var y;const z=h.section`
  .empty-certificates-message {
    background: ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
  }
  .buttons-container {
    display: flex;
    column-gap: 60px;
    align-items: center;
    justify-content: flex-end;

    .download-btn {
      appearance: none;
      outline: none;
      border: none;
      cursor: pointer;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 10px;
      color: ${({theme:t})=>t.mode==="dark"?t.white:t.gray1};
    }
  }
`,B=()=>{var d,f,m,g,b;const{certificates:t,fetchCertificates:n}=j.useContext(N.EscolaLMSContext),{t:a}=v(),o=P(),{downloadCertificate:i,loadingId:c}=S();return j.useEffect(()=>{n()},[n]),e.jsx(e.Fragment,{children:e.jsxs(z,{children:[((d=t.list)==null?void 0:d.data.length)===0&&e.jsx(p.Text,{className:"empty-certificates-message",children:e.jsx("strong",{children:a("MyProfilePage.EmptyCertificates")})}),t&&((f=t==null?void 0:t.list)==null?void 0:f.data)&&((m=t.list)==null?void 0:m.data.length)>0&&((b=(g=t==null?void 0:t.list)==null?void 0:g.data)==null?void 0:b.filter(r=>r.title).map(r=>e.jsx(_,{color:o.primaryColor,title:e.jsx(T.Title,{level:4,as:"h3",children:r.title}),subtitle:e.jsx(p.Text,{noMargin:!0,size:"12",children:new Date(r.created_at).toLocaleDateString("pl-PL")}),actions:e.jsx("div",{className:"buttons-container",children:c===r.id?e.jsx(O.Spin,{color:o.primaryColor}):e.jsxs("button",{className:"download-btn",onClick:()=>i(r.id,r.title),children:[e.jsx(k,{})," ",e.jsx(p.Text,{children:"(.pdf)"})]})})})))]})})},F=h.div`
  margin-top: 20px;
  max-width: 450px;
`,W=()=>{const{t}=v();return e.jsx(M,{title:t("MyProfilePage.MyCertificates"),children:e.jsx(F,{children:e.jsx(B,{})})})};export{W as default};

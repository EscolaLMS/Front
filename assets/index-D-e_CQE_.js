import{r as g,d as l,D as P,E as T,F as B,j as a,q as E,k as R,G as D,h as A,f as N,X as L,H as q,l as M,L as z,C as $,v as w,T as C,s as O,S as F,M as G}from"./index-DuLQ5VKT.js";import{B as H}from"./index-YzPqBO_p.js";function X(o){const u=g.useRef();return g.useEffect(()=>{u.current=o},[o]),u.current}var S={};(function(o){var u=l&&l.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},n=l&&l.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},n.apply(this,arguments)},_=l&&l.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(t,r);(!s||("get"in s?!t.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,s)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),p=l&&l.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),m=l&&l.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&_(t,e,r);return p(t,e),t},j=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0}),o.AsideMenu=void 0;var y=a,d=m(P),v=j(T),f=B,x=(0,d.default)("div")(c||(c=u([`
  margin-bottom: 5px;
  padding: 11px 15px;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: `,`px;

  border-left-color: `,`;
  border-left-width: 3px;
  border-left-style: solid;

  transition: border-left 0.4s;

  background: `,`;
  &:hover {
    border-left-color: `,`;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`],[`
  margin-bottom: 5px;
  padding: 11px 15px;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: `,`px;

  border-left-color: `,`;
  border-left-width: 3px;
  border-left-style: solid;

  transition: border-left 0.4s;

  background: `,`;
  &:hover {
    border-left-color: `,`;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`])),function(e){return e.theme.cardRadius},function(e){var t=e.active,r=e.theme;return t?(0,f.getStylesBasedOnTheme)(r.mode,r.dm__primaryColor,r.primaryColor,r.primaryColor):"transparent"},function(e){var t=e.theme;return(0,f.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.active,r=e.theme;return t?(0,f.getStylesBasedOnTheme)(r.mode,r.dm__primaryColor,r.primaryColor,r.primaryColor):(0,v.default)(r.primaryColor).alpha(.5).css()}),h=function(e){var t=e.children,r=e.active,i=e.className,s=i===void 0?"":i;return(0,y.jsx)(x,n({active:r,className:"wellms-component ".concat(s)},{children:t}))};o.AsideMenu=h,o.default=(0,d.withTheme)((0,d.default)(o.AsideMenu)(b||(b=u([""],[""]))));var c,b})(S);const I=E.section`
  .content {
    margin-top: ${R?"30px":0};
  }
  .spin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
  }
`,Q=()=>{var d,v,f,x,h;const{slug:o}=D(),{fetchPage:u,page:n,fetchPages:_,pages:p}=g.useContext(A.EscolaLMSContext),m=X(o),{t:j}=N(),y=L();return g.useEffect(()=>{var c;o&&!n.loading&&(!n.value&&!n.error||n.value&&((c=n.value)==null?void 0:c.slug)!==o||n.error&&!m)&&(_(),u(String(o)))},[o,n]),!n.loading&&n.error&&!n.error.success?a.jsx(q,{to:M.notFound}):a.jsx(z,{metaTitle:(d=n.value)==null?void 0:d.title,children:a.jsx(I,{children:a.jsxs($,{children:[a.jsx(H,{items:[a.jsx(w,{to:M.home,children:j("Home")}),a.jsx(C.Text,{size:"12",children:(v=n.value)==null?void 0:v.title})]}),a.jsxs(O.Row,{children:[a.jsx(O.Col,{lg:4,children:p&&((f=p.list)==null?void 0:f.data.map((c,b)=>a.jsx(S.AsideMenu,{active:o===c.slug,children:a.jsx(w,{to:c.slug,children:a.jsx(C.Text,{children:a.jsxs("strong",{children:[c.title.substring(0,50),c.title.length>50&&"..."]})})})},b)))}),a.jsx(O.Col,{lg:8,children:a.jsx("div",{className:"content",children:n.loading||!n.value&&!n.error||n.value&&((x=n.value)==null?void 0:x.slug)!==o||n.error&&!m?a.jsx("div",{className:"spin-container",children:a.jsx(F.Spin,{color:y.primaryColor})}):a.jsx(G.MarkdownRenderer,{children:((h=n==null?void 0:n.value)==null?void 0:h.content)||""})})})]})]})})})};export{Q as default};

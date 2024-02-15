import{b as cn,r as b,k as dn,p as G,l as un,j as r,q as X,m as L,d as h,D as pn,a2 as gn,aw as xn,ax as fn,F as hn,ay as mn,E as bn,a3 as vn,h as J,f as A,X as K,T as wn,S as jn,i as H,L as yn,C as Cn}from"./index-Duhnd3NG.js";import{q as M}from"./base-CumTa13P.js";import{C as _n}from"./index-BeZgrGw9.js";import{F as kn,S as Tn}from"./index-u0zXpjTk.js";import{W as On}from"./index-D2xbmsNP.js";import{P as Pn}from"./index-BgTC7Ibn.js";import"components/atoms/Typography/Text";import"./Search-Dv2P6ije.js";import"./ResponsiveImage-CKPbfW5t.js";import"./index-B7aoIFqz.js";import"./index-s_L9J9A7.js";const N=cn.createContext({}),I=(i={})=>M.stringify(i),Sn=({children:i})=>{const{fetchWebinars:l,webinars:t,fetchTags:a}=b.useContext(dn.EscolaLMSContext),p=G(),{push:m}=un(),[u,C]=b.useState(),o=(g={})=>({page:1,per_page:8,...g});return b.useEffect(()=>{a()},[a]),b.useEffect(()=>{m(`${p.pathname}?${I(u)}`)},[u,p.pathname]),b.useEffect(()=>{if(p.search&&p.search.split("?")[1]!==I(u)){const g=M.parse(p.search);C(g),l(g||{})}else l(o(u))},[p.search]),r.jsx(N.Provider,{value:{params:u,setParams:C,webinars:t},children:i})},Fn=({children:i})=>{const l=X("div")`
    background: ${({theme:a})=>a.primaryColor};
    padding: ${L?"60px 20px 20px 20px":"140px 40px 30px"};
    margin-bottom: ${L?"100px":"40px"};

    h1 {
      color: ${({theme:a})=>a.white};
      margin-bottom: ${({filters:a})=>L?0:a&&Object.keys(a).length>1?"35px":a&&Object.keys(a).length===1&&"page"in a||a===void 0?"-35px":"35px"};
      transition: margin-bottom 0.5s ease-out;
    }
  `,{params:t}=b.useContext(N);return r.jsx(l,{filters:t,children:i})},Wn=X("div")`
  display: flex;
  row-gap: 30px;
  flex-wrap: wrap;

  .filters {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    position: relative;
  }

  .selects-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 35px;
    margin-left: auto;

    @media (max-width: 991px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 40px;
    }
    @media (max-width: 575px) {
      row-gap: 15px;
      margin-top: 20px;
    }

    .single-select--search {
      .search-input-options {
        display: none !important;
      }
      input {
        background: transparent !important;
        border-bottom: 1px solid #fff;
        color: #fff;
        border-radius: 0;
      }

      .fieldset {
        border-color: transparent !important;
      }

      svg {
        filter: brightness(0) invert(1);
      }
    }

    .single-select--category {
      min-width: 200px;
    }
  }
`;var Q={};(function(i){var l=h&&h.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},t=h&&h.__assign||function(){return t=Object.assign||function(n){for(var e,s=1,c=arguments.length;s<c;s++){e=arguments[s];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(n[d]=e[d])}return n},t.apply(this,arguments)},a=h&&h.__createBinding||(Object.create?function(n,e,s,c){c===void 0&&(c=s);var d=Object.getOwnPropertyDescriptor(e,s);(!d||("get"in d?!e.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(n,c,d)}:function(n,e,s,c){c===void 0&&(c=s),n[c]=e[s]}),p=h&&h.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),m=h&&h.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var s in n)s!=="default"&&Object.prototype.hasOwnProperty.call(n,s)&&a(e,n,s);return p(e,n),e},u=h&&h.__spreadArray||function(n,e,s){if(s||arguments.length===2)for(var c=0,d=e.length,x;c<d;c++)(x||!(c in e))&&(x||(x=Array.prototype.slice.call(e,0,c)),x[c]=e[c]);return n.concat(x||Array.prototype.slice.call(e))},C=h&&h.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(i,"__esModule",{value:!0}),i.Tags=void 0;var o=r,g=m(b),v=m(pn),S=b,k=mn,U=bn,F=gn(),V=C(xn),Y=vn,Z=fn,W=hn,nn=function(){return(0,o.jsx)("svg",t({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,o.jsx)("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))},en=function(){return(0,o.jsx)("svg",t({width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,o.jsx)("path",{d:"M7 1L1 7L7 13",stroke:"#4A4A4A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))},tn=(0,v.default)("div")(E||(E=l([`
  position: relative;
  min-width: 150px;
  color: `,`;
  border: `,`;
  background-color: `,`;
  border-radius: `,`;

  .tags-collapse {
    color: currentColor;
  }

  .tags-dropdown-button {
    position: relative;
    justify-content: space-between;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    appearance: none;
    background-color: transparent;
    border: none;
    font-weight: normal;
    cursor: pointer;
    color: currentColor;
    font-size: 16px;
    font-family: `,`;

    svg {
      margin-left: 10px;
      transform: `,`;
      transition: opacity 0.2s ease-in-out;

      path {
        stroke: currentColor;
      }
    }

    &:hover svg {
      opacity: 0.6;
    }

    &:after {
      position: absolute;
      bottom: 0;
      left: 10px;
      right: 10px;
      height: 1px;
      display: `,`;
      background-color: currentColor;
      content: "";
    }
  }

  > .tags-dropdown-options {
    padding: 7px 10px;
    position: absolute;
    top: 100%;
    left: -1px;
    width: calc(100% + 2px);
    max-height: `,`;
    height: `,`;
    overflow-y: `,`;
    display: `,`;
    box-sizing: border-box;
    background-color: `,`;
    border: 1px solid currentColor;
    border-top: none;
    z-index: `,`;
    border-radius: `,`;
    div {
      position: relative;
    }

    input {
      color: currentColor;
    }

    span {
      word-break: break-word;
      color: `,`;
    }
  }

  .tags-dropdown-options .tags-dropdown-options {
    margin-left: 20px;
  }
`],[`
  position: relative;
  min-width: 150px;
  color: `,`;
  border: `,`;
  background-color: `,`;
  border-radius: `,`;

  .tags-collapse {
    color: currentColor;
  }

  .tags-dropdown-button {
    position: relative;
    justify-content: space-between;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    appearance: none;
    background-color: transparent;
    border: none;
    font-weight: normal;
    cursor: pointer;
    color: currentColor;
    font-size: 16px;
    font-family: `,`;

    svg {
      margin-left: 10px;
      transform: `,`;
      transition: opacity 0.2s ease-in-out;

      path {
        stroke: currentColor;
      }
    }

    &:hover svg {
      opacity: 0.6;
    }

    &:after {
      position: absolute;
      bottom: 0;
      left: 10px;
      right: 10px;
      height: 1px;
      display: `,`;
      background-color: currentColor;
      content: "";
    }
  }

  > .tags-dropdown-options {
    padding: 7px 10px;
    position: absolute;
    top: 100%;
    left: -1px;
    width: calc(100% + 2px);
    max-height: `,`;
    height: `,`;
    overflow-y: `,`;
    display: `,`;
    box-sizing: border-box;
    background-color: `,`;
    border: 1px solid currentColor;
    border-top: none;
    z-index: `,`;
    border-radius: `,`;
    div {
      position: relative;
    }

    input {
      color: currentColor;
    }

    span {
      word-break: break-word;
      color: `,`;
    }
  }

  .tags-dropdown-options .tags-dropdown-options {
    margin-left: 20px;
  }
`])),function(n){return n.lightContrast?n.theme.gray4:n.theme.gray2},function(n){return"1px solid ".concat(n.open?"currentColor":"transparent")},function(n){return n.backgroundColor},function(n){var e=n.theme,s=n.open;return s?"".concat(e.inputRadius,"px ").concat(e.inputRadius,"px 0 0"):"".concat(e.inputRadius,"px")},function(n){return(0,Z.getFontFromTheme)(n.theme).fontFamily},function(n){return n.open?"rotate(180deg)":"none"},function(n){return n.open?"block":"none"},function(n){return n.open?"200px":"auto"},function(n){return n.open?"auto":"0"},function(n){return n.open?"auto":"hidden"},function(n){return n.open?"block":"none"},function(n){return n.backgroundColor},function(n){return n.open?"1":"0"},function(n){var e=n.theme;return"0 0 ".concat(e.inputRadius,"px ").concat(e.inputRadius,"px")},function(n){return n.lightContrast?n.theme.gray4:n.theme.gray2}),rn=(0,v.createGlobalStyle)(R||(R=l([`
  width: 100%;
  box-sizing: border-box;
  
  * {
    box-sizing: border-box;
  }
  
  .drawer-content-wrapper {
    left: 0;
    width: 100%;
  }
  
  .tags-drawer-list {
    > div {
      position: relative;
      margin-bottom: 4px;
    }
  
    .tags-drawer-list {
      margin-left: 20px;
    }
  }
  
  .drawer-content {
    display: flex;
    flex-direction: column;
  }
  
  .drawer-content-header {
    position: relative;
    padding: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -2px 15px 0px #0000001A;
  }
  
  .drawer-content-btn {
    position: absolute;
    left: 22px;
    appearance: none;
    background-color: transparent;
    border: none;
    
    svg path {
      stroke: `,`;
    }
  }
  
  .drawer-content-inner {
    padding: 0 16px 32px 16px;
    flex: 1;
    overflow: auto;
  }
  
  .drawer-content-footer {
    padding: 16px;
    box-shadow: 0px -2px 15px 0px #0000001A;
  }
  
  .tags-collapse {
    color: `,`;
  }
  
  label {
    color: `,`;
  }
`],[`
  width: 100%;
  box-sizing: border-box;
  
  * {
    box-sizing: border-box;
  }
  
  .drawer-content-wrapper {
    left: 0;
    width: 100%;
  }
  
  .tags-drawer-list {
    > div {
      position: relative;
      margin-bottom: 4px;
    }
  
    .tags-drawer-list {
      margin-left: 20px;
    }
  }
  
  .drawer-content {
    display: flex;
    flex-direction: column;
  }
  
  .drawer-content-header {
    position: relative;
    padding: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -2px 15px 0px #0000001A;
  }
  
  .drawer-content-btn {
    position: absolute;
    left: 22px;
    appearance: none;
    background-color: transparent;
    border: none;
    
    svg path {
      stroke: `,`;
    }
  }
  
  .drawer-content-inner {
    padding: 0 16px 32px 16px;
    flex: 1;
    overflow: auto;
  }
  
  .drawer-content-footer {
    padding: 16px;
    box-shadow: 0px -2px 15px 0px #0000001A;
  }
  
  .tags-collapse {
    color: `,`;
  }
  
  label {
    color: `,`;
  }
`])),function(n){var e=n.theme;return(0,W.getStylesBasedOnTheme)(e.mode,e.white,e.gray1)},function(n){var e=n.theme;return(0,W.getStylesBasedOnTheme)(e.mode,e.white,e.gray1)},function(n){var e=n.theme;return(0,W.getStylesBasedOnTheme)(e.mode,e.white,e.gray1)}),on=(0,v.default)("div")(z||(z=l([`
  .tags-collapse {
    position: absolute;
    right: 0;
    top: 0;
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &.active {
      svg {
        transform: rotate(180deg);
      }
    }
  }
`],[`
  .tags-collapse {
    position: absolute;
    right: 0;
    top: 0;
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &.active {
      svg {
        transform: rotate(180deg);
      }
    }
  }
`]))),$=function(n){var e=n.tags,s=n.labelPrefix,c=n.selectedTags,d=c===void 0?[]:c,x=n.label,w=n.handleChange,j=n.mobile,y=n.className,P=y===void 0?"":y,_=g.useCallback(function(f){w&&w(d.includes(f)?d.filter(function(T){return T!==f}):u(u([],d,!0),[f],!1))},[d]);return(0,o.jsxs)(on,t({className:"wellms-component ".concat(j?"tags-drawer-list":"tags-dropdown-options"," ").concat(P)},{children:[j&&x&&(0,o.jsx)(F.Title,t({level:5,style:{marginTop:"32px",marginBottom:"17px"}},{children:x})),e.map(function(f){return(0,o.jsx)("div",{children:(0,o.jsx)(F.Checkbox,{value:f.id,label:s?"".concat(s).concat(f.title):f.title,checked:d.includes(f.title),onChange:function(){return _(f.title)}})},f.id)})]}))},an=function(n){var e=g.useContext(v.ThemeContext),s=n.tags,c=n.labelPrefix,d=n.label,x=n.selectedTags,w=n.handleChange,j=n.backgroundColor,y=j===void 0?(0,W.getStylesBasedOnTheme)(e.mode,e.dm__background,e.background):j,P=g.useMemo(function(){return(0,U.contrast)("#fff",y)>=1.85},[y]),_=g.useState(!1),f=_[0],T=_[1],B=(0,S.useRef)(null),O=function(){T(function(D){return!D})};return(0,k.useOnClickOutside)(B,function(){return T(!1)}),(0,o.jsxs)(tn,t({open:f,ref:B,className:"wellms-component",lightContrast:P,backgroundColor:y},{children:[(0,o.jsxs)("button",t({type:"button",className:"tags-dropdown-button",onClick:O},{children:[d," ",x&&x.length>0&&"(".concat(x.length,")"),(0,o.jsx)(nn,{})]})),(0,o.jsx)($,{tags:s,labelPrefix:c,selectedTags:x,handleChange:w})]}))},sn=function(n){var e=n.tags,s=n.labelPrefix,c=n.label,d=n.handleChange,x=n.handleDrawerButtonClick,w=n.selectedTags,j=n.drawerButtonText,y=n.drawerTitle,P=n.mobile,_=g.useState(!1),f=_[0],T=_[1],B=(0,Y.useTranslation)().t,O=function(){T(function(D){return!D})};return(0,o.jsxs)(g.Fragment,{children:[(0,o.jsx)(rn,{}),(0,o.jsxs)(F.Button,t({type:"button",mode:"outline",onClick:O},{children:[B("Tags.Filter")," ",w&&w.length>0&&"(".concat(w.length,")")]})),(0,o.jsxs)(V.default,t({open:f,handler:!1,onClose:O,level:null},{children:[(0,o.jsxs)("div",t({className:"drawer-content-header"},{children:[(0,o.jsx)("button",t({type:"button",onClick:O,className:"drawer-content-btn"},{children:(0,o.jsx)(en,{})})),y&&(0,o.jsx)(g.Fragment,{children:y})]})),(0,o.jsx)("div",t({className:"drawer-content-inner"},{children:(0,o.jsx)($,{tags:e,label:c,labelPrefix:s,selectedTags:w,handleChange:d,mobile:P})})),j&&x&&(0,o.jsx)("div",t({className:"drawer-content-footer"},{children:(0,o.jsx)(F.Button,t({block:!0,mode:"secondary",onClick:function(){O(),x&&x()}},{children:j&&j}))}))]}))]})},ln=function(n){var e=n.mobile;return(0,o.jsx)(g.Fragment,{children:e?(0,o.jsx)(sn,t({},n)):(0,o.jsx)(g.Fragment,{children:(0,o.jsx)(an,t({},n))})})};i.Tags=ln,i.default=(0,v.withTheme)((0,v.default)(i.Tags)(q||(q=l([""],[""]))));var E,R,z,q})(Q);const Bn=({selectedTags:i,handleChange:l})=>{var m;const{uniqueTags:t}=b.useContext(J.EscolaLMSContext),{t:a}=A(),p=K();return r.jsx(Q.Tags,{mobile:L,backgroundColor:p.primaryColor,tags:(t==null?void 0:t.list)||[],label:a("Tags"),selectedTags:(m=t.list)==null?void 0:m.map(({title:u})=>u).filter(u=>i==null?void 0:i.includes(u)),handleChange:u=>{l(u)}})},Ln=()=>{const{params:i,setParams:l}=b.useContext(N),t=G(),a=M.parse(t.search,{arrayFormat:"bracket",parseNumbers:!0}),p=b.useMemo(()=>({categories:[],name:(a==null?void 0:a.name)||"",tags:(a==null?void 0:a.tags)||[]}),[a]);return r.jsxs(Wn,{children:[r.jsx("div",{className:"tags",children:r.jsx(kn,{filters:p,onReset:()=>{l&&l({page:1})}})}),r.jsxs("div",{className:"selects-row",children:[r.jsx("div",{className:"single-select single-select--search",children:r.jsx(Tn,{onSubmit:m=>{if(l){const u={...i,page:1,name:m};l({...u})}}})}),r.jsx("div",{className:"single-select single-select--tag",children:r.jsx(Bn,{selectedTags:a==null?void 0:a.tags,handleChange:m=>{l&&l({...i,"tags[]":m})}})})]})]})},Nn=()=>{const{t:i}=A();return r.jsxs(Fn,{children:[r.jsxs(wn.Title,{level:1,children:[" ",i("WebinarsPage.Webinars")]}),r.jsx(Ln,{})]})},Dn=()=>{var u,C,o,g,v,S;const{params:i,setParams:l,webinars:t}=b.useContext(N),a=t==null?void 0:t.loading,p=(u=t==null?void 0:t.list)==null?void 0:u.meta,m=K();return a?r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(jn.Spin,{color:m.primaryColor})}):r.jsxs(r.Fragment,{children:[r.jsx(H.Row,{style:{gap:"30px 0"},children:(C=t==null?void 0:t.list)==null?void 0:C.data.map(k=>r.jsx(H.Col,{md:6,lg:4,xl:3,children:r.jsx(On,{webinar:k})},k.id))}),p&&(Number((g=(o=t==null?void 0:t.list)==null?void 0:o.meta)==null?void 0:g.total)||0)>(Number((S=(v=t==null?void 0:t.list)==null?void 0:v.meta)==null?void 0:S.per_page)||0)&&r.jsx(Pn,{total:p.total,perPage:Number(p.per_page),currentPage:p.current_page,onPage:k=>l&&l({...i,page:k,per_page:8})})]})},An=()=>{var l;const{categoryTree:i}=b.useContext(J.EscolaLMSContext);return r.jsxs(r.Fragment,{children:[r.jsx(Nn,{}),r.jsx(Dn,{}),i&&r.jsx(r.Fragment,{children:r.jsx(_n,{categories:((l=i.list)==null?void 0:l.filter(t=>!!t.icon))||[]})})]})},Kn=()=>{const{t:i}=A();return r.jsx(yn,{metaTitle:i("WebinarsPage.Webinars"),children:r.jsx(Sn,{children:r.jsx("section",{className:"webinars-page",children:r.jsx(Cn,{children:r.jsx(An,{})})})})})};export{Kn as default};

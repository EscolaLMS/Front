import{c as cn,e as K,b as dn,j as o,g as k,q as L,ay as pn,a as D,D as E,o as un,aw as gn,ag as xn,a2 as hn,$ as bn,az as mn,aA as fn,a3 as vn,a0 as wn,a1 as yn,aB as jn,X as Q,T as Cn,S as _n,J as X,k as kn,C as Tn}from"./index-C8RYle4a.js";import{r as h}from"./sentry-DZqhWugq.js";import{q as z}from"./base-Bd27snqx.js";import{W as M,a as On}from"./index-D5VBJpj6.js";import{C as Sn}from"./index-D0JehXBg.js";import{g as Pn,c as f}from"./katex-D1m830yy.js";import{P as $n}from"./index-BfmoqrZO.js";import"./lodash-Bu-jC-fW.js";import"./index-BTHE13-u.js";import"./swiper-CphuuvCl.js";const J=(e={})=>z.stringify(e),Fn=({children:e})=>{const{fetchWebinars:i,webinars:r,fetchTags:s}=h.useContext(cn.EscolaLMSContext),u=K(),{push:b}=dn(),[c,w]=h.useState(),[a,g]=h.useState(null),[v,O]=h.useState(!1),_=(S={})=>({page:1,per_page:8,...S});return h.useEffect(()=>{s()},[s]),h.useEffect(()=>{b(`${u.pathname}?${J(c)}`)},[c,u.pathname]),h.useEffect(()=>{if(u.search&&u.search.split("?")[1]!==J(c)){const S=z.parse(u.search);w(S),i(S||{})}else i(_(c))},[i,u.search,c]),o.jsx(M.Provider,{value:{params:c,setParams:w,webinars:r,webinarData:a,setWebinarData:g,isModalOpen:v,setModalOpen:O},children:e})},Nn=({children:e})=>{const i=L("div")`
    background: ${({theme:s})=>s.primaryColor};
    padding: ${k?"60px 20px 20px 20px":"140px 40px 30px"};
    margin-bottom: ${k?"100px":"40px"};

    h1 {
      color: ${({theme:s})=>s.white};
      margin-bottom: ${({filters:s})=>k?0:s&&Object.keys(s).length>1?"35px":s&&Object.keys(s).length===1&&"page"in s||s===void 0?"-35px":"35px"};
      transition: margin-bottom 0.5s ease-out;
    }
  `,{params:r}=h.useContext(M);return o.jsx(i,{filters:r,children:e})};var Wn=pn();const Bn=Pn(Wn),Dn=({onSubmit:e})=>{const{t:i}=D();return o.jsx(Bn,{placeholder:i("Filters.Search"),onSubmit:e})},Mn=L("div")`
  display: flex;

  .tags-list {
    display: flex;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    padding-bottom: 5px;

    ::-webkit-scrollbar {
      height: 4px;
      width: 4px;
      border: 1px solid transparent;
    }
    ::-webkit-scrollbar-track {
      border-radius: 0;
      background: rgba(255, 255, 255, 0.2);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0;
      background: #ffffff;
    }

    .tag {
      border-width: 2px;
      border-style: solid;
      margin-bottom: 0;
      padding: 10px 20px;
      line-height: 0.9;
      text-align: center;
      max-height: 50px;
      min-height: 50px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      border-color: ${({theme:e})=>k?e.primaryColor:e.white};
      color: ${({theme:e})=>k?e.primaryColor:e.white};
    }
  }
  .clear-btn {
    appearance: none;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 15px;
    cursor: pointer;
    &--desktop {
      display: ${k?"none":"block"};
    }
    ${k&&xn`
      svg {
        path {
          fill: ${({theme:e})=>e.primaryColor};
        }
      }
    `}
  }
`,An=({filters:e,onReset:i})=>{var b,c,w;const{categoryTree:r}=h.useContext(E.EscolaLMSContext),s=!!((b=e==null?void 0:e.categories)!=null&&b.length)||!!(e!=null&&e.name)||!!((c=e==null?void 0:e.tags)!=null&&c.length),u=h.useCallback(a=>o.jsx(un.Text,{className:"tag",children:a}),[]);return o.jsxs(Mn,{children:[o.jsxs("div",{className:"tags-list",children:[!!(e!=null&&e.categories)&&((w=r.list)==null?void 0:w.filter(a=>{var g;return((g=e.categories)==null?void 0:g.indexOf(a.id))>-1}).map(a=>u(a.name))),!!(e!=null&&e.tags)&&(e==null?void 0:e.tags.map(a=>u(a))),!!(e!=null&&e.name)&&u(e.name)]}),s&&o.jsx("button",{type:"button",onClick:()=>{i()},className:"clear-btn clear-btn--desktop",children:o.jsx(gn,{})})]})},Ln=L("div")`
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
`;var U={};(function(e){var i=f&&f.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},r=f&&f.__assign||function(){return r=Object.assign||function(n){for(var t,l=1,d=arguments.length;l<d;l++){t=arguments[l];for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&(n[p]=t[p])}return n},r.apply(this,arguments)},s=f&&f.__createBinding||(Object.create?function(n,t,l,d){d===void 0&&(d=l);var p=Object.getOwnPropertyDescriptor(t,l);(!p||("get"in p?!t.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return t[l]}}),Object.defineProperty(n,d,p)}:function(n,t,l,d){d===void 0&&(d=l),n[d]=t[l]}),u=f&&f.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),b=f&&f.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var l in n)l!=="default"&&Object.prototype.hasOwnProperty.call(n,l)&&s(t,n,l);return u(t,n),t},c=f&&f.__spreadArray||function(n,t,l){if(l||arguments.length===2)for(var d=0,p=t.length,x;d<p;d++)(x||!(d in t))&&(x||(x=Array.prototype.slice.call(t,0,d)),x[d]=t[d]);return n.concat(x||Array.prototype.slice.call(t))},w=f&&f.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.Tags=void 0;var a=o,g=b(h),v=b(hn),O=h,_=jn,S=yn,N=bn(),V=w(mn),Y=wn,Z=fn,W=vn,nn=function(){return(0,a.jsx)("svg",r({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,a.jsx)("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))},en=function(){return(0,a.jsx)("svg",r({width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,a.jsx)("path",{d:"M7 1L1 7L7 13",stroke:"#4A4A4A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))},tn=(0,v.default)("div")(q||(q=i([`
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
`])),function(n){return n.lightContrast?n.theme.gray4:n.theme.gray2},function(n){return"1px solid ".concat(n.open?"currentColor":"transparent")},function(n){return n.backgroundColor},function(n){var t=n.theme,l=n.open;return l?"".concat(t.inputRadius,"px ").concat(t.inputRadius,"px 0 0"):"".concat(t.inputRadius,"px")},function(n){return(0,Z.getFontFromTheme)(n.theme).fontFamily},function(n){return n.open?"rotate(180deg)":"none"},function(n){return n.open?"block":"none"},function(n){return n.open?"200px":"auto"},function(n){return n.open?"auto":"0"},function(n){return n.open?"auto":"hidden"},function(n){return n.open?"block":"none"},function(n){return n.backgroundColor},function(n){return n.open?"1":"0"},function(n){var t=n.theme;return"0 0 ".concat(t.inputRadius,"px ").concat(t.inputRadius,"px")},function(n){return n.lightContrast?n.theme.gray4:n.theme.gray2}),rn=(0,v.createGlobalStyle)(I||(I=i([`
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
`])),function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)}),an=(0,v.default)("div")(H||(H=i([`
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
`]))),R=function(n){var t=n.tags,l=n.labelPrefix,d=n.selectedTags,p=d===void 0?[]:d,x=n.label,y=n.handleChange,j=n.mobile,C=n.className,F=C===void 0?"":C,T=g.useCallback(function(m){y&&y(p.includes(m)?p.filter(function(P){return P!==m}):c(c([],p,!0),[m],!1))},[p]);return(0,a.jsxs)(an,r({className:"wellms-component ".concat(j?"tags-drawer-list":"tags-dropdown-options"," ").concat(F)},{children:[j&&x&&(0,a.jsx)(N.Title,r({level:5,style:{marginTop:"32px",marginBottom:"17px"}},{children:x})),t.map(function(m){return(0,a.jsx)("div",{children:(0,a.jsx)(N.Checkbox,{value:m.id,label:l?"".concat(l).concat(m.title):m.title,checked:p.includes(m.title),onChange:function(){return T(m.title)}})},m.id)})]}))},on=function(n){var t=g.useContext(v.ThemeContext),l=n.tags,d=n.labelPrefix,p=n.label,x=n.selectedTags,y=n.handleChange,j=n.backgroundColor,C=j===void 0?(0,W.getStylesBasedOnTheme)(t.mode,t.dm__background,t.background):j,F=g.useMemo(function(){return(0,S.contrast)("#fff",C)>=1.85},[C]),T=g.useState(!1),m=T[0],P=T[1],B=(0,O.useRef)(null),$=function(){P(function(A){return!A})};return(0,_.useOnClickOutside)(B,function(){return P(!1)}),(0,a.jsxs)(tn,r({open:m,ref:B,className:"wellms-component",lightContrast:F,backgroundColor:C},{children:[(0,a.jsxs)("button",r({type:"button",className:"tags-dropdown-button",onClick:$},{children:[p," ",x&&x.length>0&&"(".concat(x.length,")"),(0,a.jsx)(nn,{})]})),(0,a.jsx)(R,{tags:l,labelPrefix:d,selectedTags:x,handleChange:y})]}))},sn=function(n){var t=n.tags,l=n.labelPrefix,d=n.label,p=n.handleChange,x=n.handleDrawerButtonClick,y=n.selectedTags,j=n.drawerButtonText,C=n.drawerTitle,F=n.mobile,T=g.useState(!1),m=T[0],P=T[1],B=(0,Y.useTranslation)().t,$=function(){P(function(A){return!A})};return(0,a.jsxs)(g.Fragment,{children:[(0,a.jsx)(rn,{}),(0,a.jsxs)(N.Button,r({type:"button",mode:"outline",onClick:$},{children:[B("Tags.Filter")," ",y&&y.length>0&&"(".concat(y.length,")")]})),(0,a.jsxs)(V.default,r({open:m,onClose:$},{children:[(0,a.jsxs)("div",r({className:"drawer-content-header"},{children:[(0,a.jsx)("button",r({type:"button",onClick:$,className:"drawer-content-btn"},{children:(0,a.jsx)(en,{})})),C&&(0,a.jsx)(g.Fragment,{children:C})]})),(0,a.jsx)("div",r({className:"drawer-content-inner"},{children:(0,a.jsx)(R,{tags:t,label:d,labelPrefix:l,selectedTags:y,handleChange:p,mobile:F})})),j&&x&&(0,a.jsx)("div",r({className:"drawer-content-footer"},{children:(0,a.jsx)(N.Button,r({block:!0,mode:"secondary",onClick:function(){$(),x&&x()}},{children:j&&j}))}))]}))]})},ln=function(n){var t=n.mobile;return(0,a.jsx)(g.Fragment,{children:t?(0,a.jsx)(sn,r({},n)):(0,a.jsx)(g.Fragment,{children:(0,a.jsx)(on,r({},n))})})};e.Tags=ln,e.default=(0,v.withTheme)((0,v.default)(e.Tags)(G||(G=i([""],[""]))));var q,I,H,G})(U);const En=({selectedTags:e,handleChange:i})=>{var b;const{uniqueTags:r}=h.useContext(E.EscolaLMSContext),{t:s}=D(),u=Q();return o.jsx(U.Tags,{mobile:k,backgroundColor:u.primaryColor,tags:(r==null?void 0:r.list)||[],label:s("Tags"),selectedTags:(b=r.list)==null?void 0:b.map(({title:c})=>c).filter(c=>e==null?void 0:e.includes(c)),handleChange:c=>{i(c)}})},zn=()=>{const{params:e,setParams:i}=h.useContext(M),r=K(),s=z.parse(r.search,{arrayFormat:"bracket",parseNumbers:!0}),u=h.useMemo(()=>({categories:[],name:(s==null?void 0:s.name)||"",tags:(s==null?void 0:s.tags)||[]}),[s]);return o.jsxs(Ln,{children:[o.jsx("div",{className:"tags",children:o.jsx(An,{filters:u,onReset:()=>{i&&i({page:1})}})}),o.jsxs("div",{className:"selects-row",children:[o.jsx("div",{className:"single-select single-select--search",children:o.jsx(Dn,{onSubmit:b=>{if(i){const c={...e,page:1,name:b};i({...c})}}})}),o.jsx("div",{className:"single-select single-select--tag",children:o.jsx(En,{selectedTags:s==null?void 0:s.tags,handleChange:b=>{i&&i({...e,"tags[]":b})}})})]})]})},Rn=()=>{const{t:e}=D();return o.jsxs(Nn,{children:[o.jsxs(Cn.Title,{level:1,children:[" ",e("WebinarsPage.Webinars")]}),o.jsx(zn,{})]})},qn=()=>{var c,w,a,g,v,O;const{params:e,setParams:i,webinars:r}=h.useContext(M),s=r==null?void 0:r.loading,u=(c=r==null?void 0:r.list)==null?void 0:c.meta,b=Q();return s?o.jsx("div",{style:{display:"flex",justifyContent:"center"},children:o.jsx(_n.Spin,{color:b.primaryColor})}):o.jsxs(o.Fragment,{children:[o.jsx(X.Row,{style:{gap:"30px 0"},children:(w=r==null?void 0:r.list)==null?void 0:w.data.map(_=>o.jsx(X.Col,{md:6,lg:4,xl:3,children:o.jsx(On,{webinar:_})},_.id))}),u&&(Number((g=(a=r==null?void 0:r.list)==null?void 0:a.meta)==null?void 0:g.total)||0)>(Number((O=(v=r==null?void 0:r.list)==null?void 0:v.meta)==null?void 0:O.per_page)||0)&&o.jsx($n,{total:u.total,perPage:Number(u.per_page),currentPage:u.current_page,onPage:_=>i&&i({...e,page:_,per_page:8})})]})},In=()=>{var i;const{categoryTree:e}=h.useContext(E.EscolaLMSContext);return o.jsxs(o.Fragment,{children:[o.jsx(Rn,{}),o.jsx(qn,{}),e&&o.jsx(o.Fragment,{children:o.jsx(Sn,{categories:((i=e.list)==null?void 0:i.filter(r=>!!r.icon))||[],entity:"webinars"})})]})},ne=()=>{const{t:e}=D();return o.jsx(kn,{metaTitle:e("WebinarsPage.Webinars"),children:o.jsx(Fn,{children:o.jsx("section",{className:"webinars-page",children:o.jsx(Tn,{children:o.jsx(In,{})})})})})};export{ne as default};
//# sourceMappingURL=index-C67g-A5F.js.map

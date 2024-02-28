import{d as o,r as F,D as M,ax as B,F as x,j as D}from"./index-Blo-PJs7.js";var q={};(function(s){var f=o&&o.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=o&&o.__assign||function(){return l=Object.assign||function(n){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},l.apply(this,arguments)},j=o&&o.__createBinding||(Object.create?function(n,e,t,a){a===void 0&&(a=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,a,r)}:function(n,e,t,a){a===void 0&&(a=t),n[a]=e[t]}),O=o&&o.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),p=o&&o.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)t!=="default"&&Object.prototype.hasOwnProperty.call(n,t)&&j(e,n,t);return O(e,n),e};Object.defineProperty(s,"__esModule",{value:!0}),s.Tabs=void 0;var c=D,b=p(F),u=p(M),T=B,m=x,k=x,P=(0,u.default)("div")(v||(v=f([`
  .tabs-menu {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &-inner {
      display: flex;
      border-bottom: 2px solid
        `,`;
    }
  }

  .tab-menu-btn {
    position: relative;
    padding: 11px;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
    font-family: `,`;
    color: `,`;

    &.active {
      font-weight: bold;

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: currentColor;
      }
    }
  }

  .tabs-panel {
    padding: 10px 0;
  }
`],[`
  .tabs-menu {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &-inner {
      display: flex;
      border-bottom: 2px solid
        `,`;
    }
  }

  .tab-menu-btn {
    position: relative;
    padding: 11px;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
    font-family: `,`;
    color: `,`;

    &.active {
      font-weight: bold;

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: currentColor;
      }
    }
  }

  .tabs-panel {
    padding: 10px 0;
  }
`])),function(n){var e=n.theme;return(0,m.getStylesBasedOnTheme)(e.mode,e.gray2,e.gray3)},function(n){var e=n.theme;return(0,T.getFontFromTheme)(e).fontFamily},function(n){var e=n.theme;return(0,m.getStylesBasedOnTheme)(e.mode,e.white,e.gray1)}),N=function(n){var e=n.tabs,t=e===void 0?[]:e,a=n.defaultActiveKey,r=a===void 0?t[0].key:a,y=n.onClick,g=n.className,S=g===void 0?"":g,h=b.useState(r),d=h[0],C=h[1],w=t&&t.find(function(i){return i.key===d});return(0,c.jsxs)(P,l({className:"wellms-component ".concat(S)},{children:[(0,c.jsx)("div",l({className:"tabs-menu"},{children:(0,c.jsx)("div",l({className:"tabs-menu-inner"},{children:t.map(function(i){return i.hidden?null:(0,c.jsx)("button",l({type:"button",className:"tab-menu-btn ".concat(d===i.key?"active":""),id:(0,k.getUniqueId)("tab-menu-".concat(i.key)),onClick:function(){C(i.key),y&&y(i.key)}},{children:i.label}),i.key)})}))})),(0,c.jsx)("div",l({id:"tabpanel-".concat(d),className:"tabs-panel"},{children:(0,c.jsx)(b.Fragment,{children:w&&w.component})}))]}))};s.Tabs=N,s.default=(0,u.withTheme)((0,u.default)(s.Tabs)(_||(_=f([""],[""]))));var v,_})(q);export{q as T};

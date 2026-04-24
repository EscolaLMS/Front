import{c as o}from"./katex-D1m830yy.js";import{a2 as R,a3 as w,aA as B,j as C}from"./index-DcQpgbXL.js";import{r as F}from"./sentry-DZqhWugq.js";var A={};(function(c){var f=o&&o.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},u=o&&o.__assign||function(){return u=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)},j=o&&o.__createBinding||(Object.create?function(e,n,r,t){t===void 0&&(t=r);var a=Object.getOwnPropertyDescriptor(n,r);(!a||("get"in a?!n.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return n[r]}}),Object.defineProperty(e,t,a)}:function(e,n,r,t){t===void 0&&(t=r),e[t]=n[r]}),O=o&&o.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),p=o&&o.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&j(n,e,r);return O(n,e),n};Object.defineProperty(c,"__esModule",{value:!0}),c.Tabs=void 0;var l=C,b=p(F),d=p(R),T=B,m=w,k=w,P=(0,d.default)("div")(v||(v=f([`
  .tabs-menu {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: `,`;
    border-radius: `,`px;
    padding: 8px;
    &-inner {
      display: flex;
    }
  }

  .tab-menu-btn {
    position: relative;
    padding: 6px 24px;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    font-family: `,`;
    color: `,`;
    border-radius: `,`px;
    &:first-of-type {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:nth-of-type(2) {
      border-radius: 0;
    }
    &:last-of-type {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    background-color: #f8f8f8;
    &.active {
      font-weight: bold;
      background-color: `,`;
      color: `,`;
      border-radius: `,`px;
    }
  }

  .tabs-panel {
    padding: 25px 0;
  }
`],[`
  .tabs-menu {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: `,`;
    border-radius: `,`px;
    padding: 8px;
    &-inner {
      display: flex;
    }
  }

  .tab-menu-btn {
    position: relative;
    padding: 6px 24px;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    font-family: `,`;
    color: `,`;
    border-radius: `,`px;
    &:first-of-type {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:nth-of-type(2) {
      border-radius: 0;
    }
    &:last-of-type {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    background-color: #f8f8f8;
    &.active {
      font-weight: bold;
      background-color: `,`;
      color: `,`;
      border-radius: `,`px;
    }
  }

  .tabs-panel {
    padding: 25px 0;
  }
`])),function(e){var n=e.theme;return(0,m.getStylesBasedOnTheme)(n.mode,n.black,n.white)},function(e){var n=e.theme;return n.cardRadius},function(e){var n=e.theme;return(0,T.getFontFromTheme)(n).fontFamily},function(e){var n=e.theme;return(0,m.getStylesBasedOnTheme)(n.mode,n.white,n.gray1)},function(e){var n=e.theme;return n.buttonRadius},function(e){var n=e.theme;return n.primaryColor},function(e){var n=e.theme;return n.white},function(e){var n=e.theme;return n.buttonRadius}),N=function(e){var n=e.tabs,r=n===void 0?[]:n,t=e.defaultActiveKey,a=t===void 0?r[0].key:t,g=e.onClick,y=e.className,S=y===void 0?"":y,_=b.useState(a),s=_[0],M=_[1],x=r&&r.find(function(i){return i.key===s});return(0,l.jsxs)(P,u({className:"wellms-component ".concat(S)},{children:[(0,l.jsx)("div",u({className:"tabs-menu"},{children:(0,l.jsx)("div",u({className:"tabs-menu-inner"},{children:r.map(function(i){return i.hidden?null:(0,l.jsx)("button",u({type:"button",className:"tab-menu-btn ".concat(s===i.key?"active":""),id:(0,k.getUniqueId)("tab-menu-".concat(i.key)),onClick:function(){M(i.key),g&&g(i.key)}},{children:i.label}),i.key)})}))})),(0,l.jsx)("div",u({id:"tabpanel-".concat(s),className:"tabs-panel"},{children:(0,l.jsx)(b.Fragment,{children:x&&x.component})}))]}))};c.Tabs=N,c.default=(0,d.withTheme)((0,d.default)(c.Tabs)(h||(h=f([""],[""]))));var v,h})(A);export{A as T};
//# sourceMappingURL=Tabs-B2c-8yoh.js.map

import{d as o,r as R,a5 as B,aH as C,a6 as w,j as F}from"./index-gbJMaPe7.js";var D={};(function(c){var f=o&&o.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},u=o&&o.__assign||function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)},j=o&&o.__createBinding||(Object.create?function(e,n,t,r){r===void 0&&(r=t);var a=Object.getOwnPropertyDescriptor(n,t);(!a||("get"in a?!n.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,a)}:function(e,n,t,r){r===void 0&&(r=t),e[r]=n[t]}),O=o&&o.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),b=o&&o.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&j(n,e,t);return O(n,e),n};Object.defineProperty(c,"__esModule",{value:!0}),c.Tabs=void 0;var l=F,p=b(R),d=b(B),T=C,m=w,k=w,P=(0,d.default)("div")(v||(v=f([`
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
`])),function(e){var n=e.theme;return(0,m.getStylesBasedOnTheme)(n.mode,n.black,n.white)},function(e){var n=e.theme;return n.cardRadius},function(e){var n=e.theme;return(0,T.getFontFromTheme)(n).fontFamily},function(e){var n=e.theme;return(0,m.getStylesBasedOnTheme)(n.mode,n.white,n.gray1)},function(e){var n=e.theme;return n.buttonRadius},function(e){var n=e.theme;return n.primaryColor},function(e){var n=e.theme;return n.white},function(e){var n=e.theme;return n.buttonRadius}),N=function(e){var n=e.tabs,t=n===void 0?[]:n,r=e.defaultActiveKey,a=r===void 0?t[0].key:r,g=e.onClick,y=e.className,S=y===void 0?"":y,_=p.useState(a),s=_[0],M=_[1],x=t&&t.find(function(i){return i.key===s});return(0,l.jsxs)(P,u({className:"wellms-component ".concat(S)},{children:[(0,l.jsx)("div",u({className:"tabs-menu"},{children:(0,l.jsx)("div",u({className:"tabs-menu-inner"},{children:t.map(function(i){return i.hidden?null:(0,l.jsx)("button",u({type:"button",className:"tab-menu-btn ".concat(s===i.key?"active":""),id:(0,k.getUniqueId)("tab-menu-".concat(i.key)),onClick:function(){M(i.key),g&&g(i.key)}},{children:i.label}),i.key)})}))})),(0,l.jsx)("div",u({id:"tabpanel-".concat(s),className:"tabs-panel"},{children:(0,l.jsx)(p.Fragment,{children:x&&x.component})}))]}))};c.Tabs=N,c.default=(0,d.withTheme)((0,d.default)(c.Tabs)(h||(h=f([""],[""]))));var v,h})(D);export{D as T};

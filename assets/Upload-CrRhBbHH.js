import{d as i,a5 as $,a2 as L,a6 as U,j as R,r as X,a3 as Z}from"./index-Bo8UkscO.js";var F={};(function(s){var m=i&&i.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=i&&i.__assign||function(){return l=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},l.apply(this,arguments)},P=i&&i.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,a)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),S=i&&i.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),V=i&&i.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&P(e,n,r);return S(e,n),e},z=i&&i.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};Object.defineProperty(s,"__esModule",{value:!0}),s.Upload=void 0;var o=R,p=X,v=V($),h=L(),T=Z,M=U,H=U,d=999,N=(0,v.default)("div")(_||(_=m([`
  width: 100%;
  text-align: center;
  position: relative;
  > a {
    margin-top: 0.5em;
  }
  > input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: `,`;
    opacity: 0.001;
  }

  .wrapper {
    width: 100%;
    position: relative;
    cursor: pointer;
    :after {
      content: "";
      padding-top: 100%;
      display: block;
    }

    .border,
    img,
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    img {
      display: block;
      object-fit: cover;
      z-index: `,`;
    }
    img,
    svg {
      transition: transform 0.5s ease-out;
    }
    .border {
      overflow: hidden;
      border-width: 1px;
      opacity: 1;
      border: `,`;
      border-radius: 50%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;

      > svg {
        position: relative;
        z-index: `,`;
      }
    }
  }

  &:hover {
    .wrapper .border > svg {
      transform: scale(1.5);
      z-index: `,`;
    }
    img {
      transform: scale(1.1);
    }
    a:after {
      transform: scaleX(0);
      transform-origin: bottom left;
    }
  }
`],[`
  width: 100%;
  text-align: center;
  position: relative;
  > a {
    margin-top: 0.5em;
  }
  > input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: `,`;
    opacity: 0.001;
  }

  .wrapper {
    width: 100%;
    position: relative;
    cursor: pointer;
    :after {
      content: "";
      padding-top: 100%;
      display: block;
    }

    .border,
    img,
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    img {
      display: block;
      object-fit: cover;
      z-index: `,`;
    }
    img,
    svg {
      transition: transform 0.5s ease-out;
    }
    .border {
      overflow: hidden;
      border-width: 1px;
      opacity: 1;
      border: `,`;
      border-radius: 50%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;

      > svg {
        position: relative;
        z-index: `,`;
      }
    }
  }

  &:hover {
    .wrapper .border > svg {
      transform: scale(1.5);
      z-index: `,`;
    }
    img {
      transform: scale(1.1);
    }
    a:after {
      transform: scaleX(0);
      transform-origin: bottom left;
    }
  }
`])),d,d-1,function(n){var e=n.theme;return"1px solid ".concat((0,M.getStylesBasedOnTheme)(e.mode,e.gray1,e.gray3))},d-2,d-1),D=function(){return(0,o.jsx)("svg",l({width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,o.jsx)("path",{d:"M20 10.636V17.636C20 17.9012 19.8946 18.1556 19.7071 18.3431C19.5196 18.5306 19.2652 18.636 19 18.636H1C0.734784 18.636 0.48043 18.5306 0.292893 18.3431C0.105357 18.1556 0 17.9012 0 17.636V10.636C0 10.3708 0.105357 10.1164 0.292893 9.92888C0.48043 9.74134 0.734784 9.63599 1 9.63599C1.26522 9.63599 1.51957 9.74134 1.70711 9.92888C1.89464 10.1164 2 10.3708 2 10.636V16.636H18V10.636C18 10.3708 18.1054 10.1164 18.2929 9.92888C18.4804 9.74134 18.7348 9.63599 19 9.63599C19.2652 9.63599 19.5196 9.74134 19.7071 9.92888C19.8946 10.1164 20 10.3708 20 10.636V10.636ZM10 0.635986C9.73478 0.635986 9.48043 0.741343 9.29289 0.928879C9.10536 1.11642 9 1.37077 9 1.63599V5.63599H5C4.73478 5.63599 4.48043 5.74134 4.29289 5.92888C4.10536 6.11642 4 6.37077 4 6.63599C4 6.9012 4.10536 7.15556 4.29289 7.34309C4.48043 7.53063 4.73478 7.63599 5 7.63599H9V11.636C9 11.9012 9.10536 12.1556 9.29289 12.3431C9.48043 12.5306 9.73478 12.636 10 12.636C10.2652 12.636 10.5196 12.5306 10.7071 12.3431C10.8946 12.1556 11 11.9012 11 11.636V7.63599H15C15.2652 7.63599 15.5196 7.53063 15.7071 7.34309C15.8946 7.15556 16 6.9012 16 6.63599C16 6.37077 15.8946 6.11642 15.7071 5.92888C15.5196 5.74134 15.2652 5.63599 15 5.63599H11V1.63599C11 1.37077 10.8946 1.11642 10.7071 0.928879C10.5196 0.741343 10.2652 0.635986 10 0.635986V0.635986Z",fill:"#4A4A4A"})}))},I=function(n){var e=(0,T.useTranslation)().t,r=n.onChange,t=n.url,a=n.loading,y=n.buttonTitle,g=y===void 0?e("Upload.button"):y,j=n.className,q=j===void 0?"":j,A=z(n,["onChange","url","loading","buttonTitle","className"]),x=(0,p.useState)(t),C=x[0],O=x[1];(0,p.useEffect)(function(){O(t)},[t]);var B=(0,p.useCallback)(function(u){if(u.target.files&&u.target.files[0]){var E=u.target.files[0],f=new FileReader;f.readAsDataURL(E),f.onload=function(){var c;return O((c=f.result)===null||c===void 0?void 0:c.toString())},f.onerror=function(c){return console.log("reading error",c)}}r&&r(u)},[]),b=g?(0,H.getUniqueId)("upload"):null;return(0,o.jsxs)(N,l({className:"wellms-component upload ".concat(q)},{children:[(0,o.jsx)("input",l({type:"file"},A,{onChange:B},b?{"aria-labelledby":b}:{"aria-label":e("Upload.button")})),(0,o.jsx)("div",l({className:"wrapper"},{children:(0,o.jsxs)("div",l({className:"border"},{children:[a&&(0,o.jsx)(h.Spin,{}),C&&(0,o.jsx)("img",{src:C,alt:"Upload preview"}),(0,o.jsx)(D,{})]}))})),g&&(0,o.jsx)(h.Link,l({underline:!0,id:b},{children:g}))]}))};s.Upload=I,s.default=(0,v.withTheme)((0,v.default)(s.Upload)(w||(w=m([""],[""]))));var _,w})(F);export{F as U};

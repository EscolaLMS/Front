import{q as h,X as j,r as g,j as e,ck as p}from"./index-BsLXwVX-.js";const y=h("div")`
  align-self: end;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;

  .tags-menu-container {
    position: relative;

    .tags-menu {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 4px;
      list-style: none;
      padding: 4px 0;
      height: fit-content;
      max-height: 230px;
      overflow-y: scroll;
      background-color: ${n=>n.theme.primaryColor};
      width: fit-content;
      margin: 0;

      li {
        width: 100%;
      }
    }
  }

  .badge {
    cursor: pointer;
  }
`,b=n=>{const{tags:l,onTagClick:o}=n,r=j(),[x,d]=g.useState(!1),u=l?[...l].splice(0,2):[],i=l?[...l].splice(2):[],f=g.useRef(null),m=g.useCallback((t,s)=>{o&&o(s)},[o]);return e.jsxs(y,{ref:f,children:[u.map((t,s)=>{const a=t.title??t;return e.jsx(p.Badge,{className:"badge",color:r.primaryColor,onClick:c=>m(c,a),children:a},s)}),i.length>0&&e.jsxs("div",{className:"tags-menu-container",onMouseLeave:()=>d(!1),children:[e.jsx(p.Badge,{className:"badge",color:r.primaryColor,onMouseOver:()=>d(!0),children:`+${i.length}`}),x&&e.jsx("ul",{className:"tags-menu",children:i.map((t,s)=>{const a=t.title??t;return e.jsx("li",{children:e.jsx(p.Badge,{className:"badge",onClick:c=>m(c,a),color:r.primaryColor,children:a},s)})})})]})]})};export{b as T};

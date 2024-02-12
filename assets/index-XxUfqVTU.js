import{q as g,r as o,j as e,cf as p}from"./index-DaafzRP_.js";const x=g("div")`
  .more-icon {
    border: 1px solid;
    border-radius: 50%;
    padding: 4px;
    margin-left: 12px;
    font-size: 0.75em;
  }

  .category-name {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .categories-menu-container {
    position: relative;

    .categories-menu {
      position: absolute;
      top: 0;
      right: 0;
      list-style: none;
      background-color: #f2f2f2;
      margin: 4px 0;

      li {
        margin: 4px 0;
      }
    }
  }
`,j=h=>{var m;const{categories:r,onCategoryClick:t}=h,[c,i]=o.useState(!1),l=o.useRef(null),a=r?[...r].splice(0,2):[],s=r?[...r].splice(2):[],d=o.useCallback(n=>{t&&t(n)},[t]);return e.jsxs(x,{ref:l,isOpen:c,children:[e.jsx(p.BreadCrumbs,{hyphen:"/",items:a==null?void 0:a.map((n,u)=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"category-name",onClick:()=>d(n.id),"aria-hidden":!0,children:n.name},n.name+u),u===a.length-1&&s.length>0&&e.jsx("span",{className:"more-icon",onMouseOver:()=>i(!0),onFocus:()=>i(!0),"aria-hidden":!0,children:`+${s.length}`})]}))}),s.length>0&&e.jsx("div",{className:"categories-menu-container",onMouseLeave:()=>i(!1),children:c&&e.jsx("ul",{className:"categories-menu",style:{width:((m=l.current)==null?void 0:m.getBoundingClientRect().width)||"auto"},children:e.jsx(p.BreadCrumbs,{hyphen:"/",items:s==null?void 0:s.map(n=>e.jsx("li",{className:"category-name",onClick:()=>d(n.id),"aria-hidden":!0,children:n.name}))})})})]})};export{j as C};

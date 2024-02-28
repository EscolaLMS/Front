import{q as l,r as s,j as o,cr as p}from"./index-CJUViYQs.js";const m=l("div")`
  .more-icon {
    border: 1px solid;
    border-radius: 50%;
    padding: 4px;
    margin-left: 12px;
    font-size: 0.75em;
  }

  .category-name {
    cursor: pointer;
    padding: 2px 4px;
    background-color: ${({theme:e})=>e.secondaryColor};
    color: ${({theme:e})=>e.black};
    border-radius: 3px;
    font-size: 11px;
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
`,x=e=>{const{categories:i,onCategoryClick:n}=e,t=s.useRef(null),a=i||[],c=s.useCallback(r=>{n&&n(r)},[n]);return o.jsx(m,{ref:t,children:o.jsx(p.BreadCrumbs,{hyphen:"",items:a==null?void 0:a.map((r,d)=>o.jsx(o.Fragment,{children:o.jsx("span",{className:"category-name",onClick:()=>c(r.id),"aria-hidden":"true",children:r.name},r.name+d)}))})})};export{x as C};

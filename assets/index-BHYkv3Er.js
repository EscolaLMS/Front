import{q as m,r as a,j as r,cv as d}from"./index-BTvwz0L3.js";const p=m("div")`
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
`,x=s=>{const{categories:i,onCategoryClick:n}=s,t=a.useRef(null),o=i||[],c=a.useCallback(e=>{n&&n(e)},[n]);return r.jsx(p,{ref:t,children:r.jsx(d.BreadCrumbs,{hyphen:"",items:o==null?void 0:o.map((e,l)=>r.jsx(r.Fragment,{children:r.jsx("span",{className:"category-name",onClick:()=>c(e.id),"aria-hidden":"true",children:e.name},e.name+l)}))})})};export{x as C};

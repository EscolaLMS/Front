import{q as t,j as r,r as a,cI as p}from"./index-fLzfRICx.js";const m="/assets/no-picture-sHwVEW-e.png",g=t.div`
  width: 100%;
  height: 100%;
  border: 1px solid
    ${({theme:e})=>e.mode==="light"?e.gray4:e.gray2};
  img {
    &:hover {
      transform: none !important;
    }
  }
`,h=()=>r.jsx(g,{children:r.jsx("img",{src:m,alt:""})}),u=t("div")`
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
    text-transform: uppercase;
    font-weight: 700;
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
`,f=e=>{const{categories:i,onCategoryClick:n}=e,c=a.useRef(null),s=i||[],d=a.useCallback(o=>{n&&n(o)},[n]);return r.jsx(u,{ref:c,children:r.jsx(p.BreadCrumbs,{hyphen:"",items:s==null?void 0:s.map((o,l)=>r.jsx(r.Fragment,{children:r.jsx("span",{className:"category-name",onClick:()=>d(o.id),"aria-hidden":"true",children:o.name},o.name+l)}))})})};export{h as C,f as a};

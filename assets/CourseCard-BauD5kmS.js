import{j as e,bR as p,q as m,J as u}from"./index-DcQpgbXL.js";import{r as a}from"./sentry-DZqhWugq.js";import{S as o}from"./index-B7vnVY_d.js";const h=m("div")`
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
    background-color: ${({theme:r})=>r.secondaryColor};
    color: ${({theme:r})=>r.black};
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
`,f=r=>{const{categories:s,onCategoryClick:t}=r,c=a.useRef(null),i=s||[],x=a.useCallback(n=>{t&&t(n)},[t]);return e.jsx(h,{ref:c,children:e.jsx(p.BreadCrumbs,{hyphen:"",items:i==null?void 0:i.map((n,l)=>e.jsx(e.Fragment,{children:e.jsx("span",{className:"category-name",onClick:()=>x(n.id),"aria-hidden":"true",children:n.name},n.name+l)}))})})},d=m.div`
  max-width: 278px;
  min-height: 414px;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: auto;
  }
`,C=({count:r=1,colProps:s})=>{const t=a.useId();return e.jsx(e.Fragment,{children:Array.from({length:r}).map(()=>s?e.jsx(u.Col,{...s,children:e.jsxs(d,{children:[e.jsx(o,{height:"264px",borderRadius:14,style:{marginBottom:"10px"}}),e.jsx(o,{width:146,style:{marginBottom:"10px"}}),e.jsx(o,{count:2})]})},`card-skeleton-${t}`):e.jsxs(d,{children:[e.jsx(o,{height:"264px",borderRadius:14,style:{marginBottom:"10px"}}),e.jsx(o,{width:146,style:{marginBottom:"10px"}}),e.jsx(o,{count:2})]},`card-skeleton-${t}`))})};export{C,f as a};
//# sourceMappingURL=CourseCard-BauD5kmS.js.map

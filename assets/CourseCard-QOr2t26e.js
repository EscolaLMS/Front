import{q as d,j as e,r as i,W as p,bk as h,V as g}from"./index-xz6dt63Y.js";import{S as t}from"./index-CWMiWCX8.js";const u="/assets/no-picture-sHwVEW-e.png",j=d.div`
  width: 100%;
  height: 100%;
  border: 1px solid
    ${({theme:r})=>r.mode==="light"?r.gray4:r.gray2};
  img {
    &:hover {
      transform: none !important;
    }
  }
`,y=()=>e.jsx(j,{children:e.jsx("img",{src:u,alt:""})}),b=d("div")`
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
`,k=r=>{const{categories:n,onCategoryClick:o}=r,c=i.useRef(null),a=n||[],m=i.useCallback(s=>{o&&o(s)},[o]);return e.jsx(b,{ref:c,children:e.jsx(p,{children:e.jsx(h.BreadCrumbs,{hyphen:"",items:a==null?void 0:a.map((s,x)=>e.jsx(e.Fragment,{children:e.jsx("span",{className:"category-name",onClick:()=>m(s.id),"aria-hidden":"true",children:s.name},s.name+x)}))})})})},l=d.div`
  max-width: 278px;
  min-height: 414px;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: auto;
  }
`,w=({count:r=1,colProps:n})=>{const o=i.useId();return e.jsx(e.Fragment,{children:Array.from({length:r}).map(()=>n?e.jsx(g.Col,{...n,children:e.jsxs(l,{children:[e.jsx(t,{height:"264px",borderRadius:14,style:{marginBottom:"10px"}}),e.jsx(t,{width:146,style:{marginBottom:"10px"}}),e.jsx(t,{count:2})]})},`card-skeleton-${o}`):e.jsxs(l,{children:[e.jsx(t,{height:"264px",borderRadius:14,style:{marginBottom:"10px"}}),e.jsx(t,{width:146,style:{marginBottom:"10px"}}),e.jsx(t,{count:2})]},`card-skeleton-${o}`))})};export{w as C,y as a,k as b};

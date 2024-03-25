import{q as d,j as e,r as a,bd as p,y as h}from"./index-CDjsyf2-.js";import{M as g}from"./index-BV8UJ7i4.js";import{S as t}from"./index-DsCf56L1.js";const u="/assets/no-picture-sHwVEW-e.png",j=d.div`
  width: 100%;
  height: 100%;
  border: 1px solid
    ${({theme:r})=>r.mode==="light"?r.gray4:r.gray2};
  img {
    &:hover {
      transform: none !important;
    }
  }
`,k=()=>e.jsx(j,{children:e.jsx("img",{src:u,alt:""})}),b=d("div")`
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
`,w=r=>{const{categories:n,onCategoryClick:o}=r,c=a.useRef(null),i=n||[],m=a.useCallback(s=>{o&&o(s)},[o]);return e.jsx(b,{ref:c,children:e.jsx(g,{children:e.jsx(p.BreadCrumbs,{hyphen:"",items:i==null?void 0:i.map((s,x)=>e.jsx(e.Fragment,{children:e.jsx("span",{className:"category-name",onClick:()=>m(s.id),"aria-hidden":"true",children:s.name},s.name+x)}))})})})},l=d.div`
  max-width: 278px;
  min-height: 414px;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: auto;
  }
`,v=({count:r=1,colProps:n})=>{const o=a.useId();return e.jsx(e.Fragment,{children:Array.from({length:r}).map(()=>n?e.jsx(h.Col,{...n,children:e.jsxs(l,{children:[e.jsx(t,{height:"264px",borderRadius:14,style:{marginBottom:"10px"}}),e.jsx(t,{width:146,style:{marginBottom:"10px"}}),e.jsx(t,{count:2})]})},`card-skeleton-${o}`):e.jsxs(l,{children:[e.jsx(t,{height:"264px",borderRadius:14,style:{marginBottom:"10px"}}),e.jsx(t,{width:146,style:{marginBottom:"10px"}}),e.jsx(t,{count:2})]},`card-skeleton-${o}`))})};export{v as C,k as a,w as b};
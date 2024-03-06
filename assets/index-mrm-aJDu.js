import{aM as b,g as l,f as h,j as e,q as m,n,an as u,r as x,D as y,s as k,Q as j}from"./index-Bo8UkscO.js";var w=b();const C=l(w),v=({onSubmit:a})=>{const{t}=h();return e.jsx(C,{placeholder:t("Filters.Search"),onSubmit:a})},S=m("div")`
  display: flex;

  .tags-list {
    display: flex;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    padding-bottom: 5px;

    ::-webkit-scrollbar {
      height: 4px;
      width: 4px;
      border: 1px solid transparent;
    }
    ::-webkit-scrollbar-track {
      border-radius: 0;
      background: rgba(255, 255, 255, 0.2);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0;
      background: #ffffff;
    }

    .tag {
      border-width: 2px;
      border-style: solid;
      margin-bottom: 0;
      padding: 10px 20px;
      line-height: 0.9;
      text-align: center;
      max-height: 50px;
      min-height: 50px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      border-color: ${({theme:a})=>n?a.primaryColor:a.white};
      color: ${({theme:a})=>n?a.primaryColor:a.white};
    }
  }
  .clear-btn {
    appearance: none;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 15px;
    cursor: pointer;
    &--desktop {
      display: ${n?"none":"block"};
    }
    ${n&&u`
      svg {
        path {
          fill: ${({theme:a})=>a.primaryColor};
        }
      }
    `}
  }
`,E=({filters:a,onReset:t})=>{var c,s,d;const{categoryTree:g}=x.useContext(y.EscolaLMSContext),i=!!((c=a==null?void 0:a.categories)!=null&&c.length)||!!(a!=null&&a.name)||!!((s=a==null?void 0:a.tags)!=null&&s.length),r=x.useCallback(o=>e.jsx(k.Text,{className:"tag",children:o}),[]);return e.jsxs(S,{children:[e.jsxs("div",{className:"tags-list",children:[!!(a!=null&&a.categories)&&((d=g.list)==null?void 0:d.filter(o=>{var p;return((p=a.categories)==null?void 0:p.indexOf(o.id))>-1}).map(o=>r(o.name))),!!(a!=null&&a.tags)&&(a==null?void 0:a.tags.map(o=>r(o))),!!(a!=null&&a.name)&&r(a.name)]}),i&&e.jsx("button",{type:"button",onClick:()=>{t()},className:"clear-btn clear-btn--desktop",children:e.jsx(j,{})})]})};export{E as F,v as S};

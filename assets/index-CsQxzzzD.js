import{b,r as i,k as S,p as v,l as w,j as e,q as C,m as u,f as E,T as P,X as F,S as N,i as j,h as T,L as $,C as k}from"./index-Duhnd3NG.js";import{q as f}from"./base-CumTa13P.js";import{C as L}from"./index-BeZgrGw9.js";import{C as _}from"./index-BYDDSTss.js";import{F as H,S as M}from"./index-u0zXpjTk.js";import{E as q}from"./index-CHDoRWF7.js";import{P as R}from"./index-BgTC7Ibn.js";import"components/atoms/Typography/Text";import"./Categories-CQsnzeZ-.js";import"./Search-Dv2P6ije.js";import"./ResponsiveImage-CKPbfW5t.js";import"./index-B7aoIFqz.js";import"./index-s_L9J9A7.js";import"./index-C5wfF83u.js";const g=b.createContext({}),y=(a={})=>f.stringify(a),I=({children:a})=>{const{fetchStationaryEvents:r,stationaryEvents:s,fetchCategories:t}=i.useContext(S.EscolaLMSContext),n=v(),{push:c}=w();i.useEffect(()=>{t()},[]);const[o,p]=i.useState(),m=(l={})=>({page:1,per_page:8,...l});return i.useEffect(()=>{c(`${n.pathname}?${y(o)}`)},[o,n.pathname]),i.useEffect(()=>{if(n.search&&n.search.split("?")[1]!==y(o)){const l=f.parse(n.search);p(l),r(l||{})}else r(m(o))},[n.search]),e.jsx(g.Provider,{value:{params:o,setParams:p,events:s},children:a})},O=({children:a})=>{const r=C("div")`
    background: ${({theme:t})=>t.primaryColor};
    padding: ${u?"60px 20px 20px 20px":"140px 40px 30px"};
    margin-bottom: ${u?"100px":"40px"};

    h1 {
      color: ${({theme:t})=>t.white};
      margin-bottom: ${({filters:t})=>u?0:t&&Object.keys(t).length>1?"35px":t&&Object.keys(t).length===1&&"page"in t||t===void 0?"-35px":"35px"};
      transition: margin-bottom 0.5s ease-out;
    }
  `,{params:s}=i.useContext(g);return e.jsx(r,{filters:s,children:a})},X=C("div")`
  display: flex;
  row-gap: 30px;
  flex-wrap: wrap;

  .filters {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    position: relative;
  }

  .selects-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 35px;
    margin-left: auto;

    @media (max-width: 991px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 40px;
    }
    @media (max-width: 575px) {
      row-gap: 15px;
      margin-top: 20px;
    }

    .single-select--search {
      .search-input-options {
        display: none !important;
      }
      input {
        background: transparent !important;
        border-bottom: 1px solid #fff;
        color: #fff;
        border-radius: 0;
      }

      .fieldset {
        border-color: transparent !important;
      }

      svg {
        filter: brightness(0) invert(1);
      }
    }

    .single-select--category {
      min-width: 200px;
    }
  }
`,A=()=>{const{params:a,setParams:r}=i.useContext(g),s=v(),t=f.parse(s.search,{arrayFormat:"bracket",parseNumbers:!0}),n=i.useMemo(()=>({categories:(t==null?void 0:t.categories)||[],name:(t==null?void 0:t.name)||"",tags:(t==null?void 0:t.tags)||[]}),[t]);return e.jsxs(X,{children:[e.jsx("div",{className:"tags",children:e.jsx(H,{filters:n,onReset:()=>{r&&r({page:1})}})}),e.jsxs("div",{className:"selects-row",children:[e.jsx("div",{className:"single-select single-select--search",children:e.jsx(M,{onSubmit:c=>{if(r){const o={...a,page:1,name:c};r({...o})}}})}),e.jsx("div",{className:"single-select single-select--category",children:e.jsx(_,{selectedCategories:(t==null?void 0:t.categories)||[],handleChange:c=>{r&&r({...a,page:1,"categories[]":c})}})})]})]})},z=()=>{const{t:a}=E();return e.jsxs(O,{children:[e.jsxs(P.Title,{level:1,children:[" ",a("EventsPage.Events")]}),e.jsx(A,{})]})},B=()=>{var o,p,m,l,d,h;const{params:a,setParams:r,events:s}=i.useContext(g),t=s==null?void 0:s.loading,n=(o=s==null?void 0:s.list)==null?void 0:o.meta,c=F();return t?e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(N.Spin,{color:c.primaryColor})}):e.jsxs(e.Fragment,{children:[e.jsx(j.Row,{style:{gap:"30px 0"},children:(p=s==null?void 0:s.list)==null?void 0:p.data.map(x=>e.jsx(j.Col,{md:6,lg:4,xl:3,children:e.jsx(q,{event:x})},x.id))}),n&&(Number((l=(m=s==null?void 0:s.list)==null?void 0:m.meta)==null?void 0:l.total)||0)>(Number((h=(d=s==null?void 0:s.list)==null?void 0:d.meta)==null?void 0:h.per_page)||0)&&e.jsx(R,{total:n.total,perPage:Number(n.per_page),currentPage:n.current_page,onPage:x=>r&&r({...a,page:x,per_page:8})})]})},D=()=>{var r;const{categoryTree:a}=i.useContext(T.EscolaLMSContext);return e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(B,{}),a&&e.jsx(e.Fragment,{children:e.jsx(L,{categories:((r=a.list)==null?void 0:r.filter(s=>!!s.icon))||[]})})]})},ne=()=>{const{t:a}=E();return e.jsx($,{metaTitle:a("EventsPage.Events"),children:e.jsx(I,{children:e.jsx("section",{className:"events-page",children:e.jsx(k,{children:e.jsx(D,{})})})})})};export{ne as default};

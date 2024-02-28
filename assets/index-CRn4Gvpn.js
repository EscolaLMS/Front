import{q as j,r as m,j as e,k as f,f as C,o as b,b as N,X as P,S as v,s as h,A as w,h as S,L as F,C as E}from"./index-OGDo-hkl.js";import{C as M}from"./index-DbvMYWQb.js";import{C as Q}from"./index-4PStjSQT.js";import{F as T,S as _}from"./index-yqcya3Qo.js";import{u}from"./useSearchParams-CwmX-KWF.js";import{C as k}from"./index-CD_lX0z0.js";import{P as $}from"./index-D-Ty7NYk.js";import"./swiper-react-LoObXzUJ.js";import"./base-C7euzKDi.js";import"./index-D9Lp23u1.js";import"./ResponsiveImage-dgTLmURN.js";import"./index-CkkSfJi5.js";const B=j("div")`
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
`,L=()=>{var n;const{setPathname:t,setQueryParam:r,setQueryArrayParam:o,getAllQueryValueByName:s,getQueryValueByName:p}=u(),c=m.useMemo(()=>({categories:s("categories[]").map(a=>Number(a))||[],name:p("name")||""}),[s,p]);return e.jsxs(B,{children:[e.jsx("div",{className:"tags",children:e.jsx(T,{filters:c,onReset:()=>{t()}})}),e.jsxs("div",{className:"selects-row",children:[e.jsx("div",{className:"single-select single-select--search",children:e.jsx(_,{onSubmit:a=>{r("name",a)}})}),e.jsx("div",{className:"single-select single-select--category",children:e.jsx(Q,{selectedCategories:(n=s("categories[]"))==null?void 0:n.map(a=>Number(a)),handleChange:a=>{o("categories[]",a)}})})]})]})},A=({children:t})=>{const r=j("div")`
    background: ${({theme:s})=>s.primaryColor};
    padding: ${f?"60px 20px 20px 20px":"140px 40px 30px"};
    margin-bottom: ${f?"100px":"40px"};

    h1 {
      color: ${({theme:s})=>s.white};
    }

    .tags {
      display: ${({filters:s})=>s&&Object.keys(s).length>2?"block":"none"};
      width: 100%;
      margin-top: 35px;
    }
  `,{paramsToObject:o}=u();return e.jsx(r,{filters:o,children:t})},H=()=>{const{t}=C();return e.jsxs(A,{children:[e.jsxs(b.Title,{level:1,children:[" ",t("Menu.Consultations")]}),e.jsx(L,{})]})},y=N.createContext({}),R=({consultation:t})=>e.jsx(k,{consultation:t}),V=()=>{var c,n,a,x,g,i;const{consultations:t}=m.useContext(y),{setQueryParam:r}=u(),o=t==null?void 0:t.loading,s=(c=t==null?void 0:t.list)==null?void 0:c.meta,p=P();return o?e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(v.Spin,{color:p.primaryColor})}):e.jsxs(e.Fragment,{children:[e.jsx(h.Row,{style:{gap:"30px 0",marginBottom:"30px"},children:(n=t==null?void 0:t.list)==null?void 0:n.data.map(l=>e.jsx(h.Col,{md:6,lg:4,xl:3,children:e.jsx(R,{consultation:l})},l.id))}),s&&(Number((x=(a=t==null?void 0:t.list)==null?void 0:a.meta)==null?void 0:x.total)||0)>(Number((i=(g=t==null?void 0:t.list)==null?void 0:g.meta)==null?void 0:i.per_page)||0)&&e.jsx($,{total:s.total,perPage:Number(s.per_page),currentPage:s.current_page,onPage:l=>r("page",`${l}`)})]})},q=()=>{var r;const{categoryTree:t}=m.useContext(w.EscolaLMSContext);return e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx(V,{}),t&&e.jsx(e.Fragment,{children:e.jsx(M,{categories:((r=t.list)==null?void 0:r.filter(o=>!!o.icon))||[]})})]})},O=t=>{const{fetchConsultations:r,consultations:o,fetchCategories:s}=m.useContext(S.EscolaLMSContext),{children:p}=t,{query:c,getQueryValueByName:n,getAllQueryValueByName:a,setPathname:x}=u();m.useEffect(()=>{s()},[]);const g=m.useCallback(()=>{const i={page:Number(n("page"))||1,per_page:Number(n("per_page"))||8},l=a("categories[]"),d=n("name");return d&&(i.name=d),l&&l.length&&(i["categories[]"]=l),i},[a,n]);return m.useEffect(()=>{const i=g();x(i),c.has("page")&&r(i)},[c]),e.jsx(y.Provider,{value:{consultations:o},children:p})},te=()=>{const{t}=C();return e.jsx(F,{metaTitle:t("ConsultationsPageMeta"),children:e.jsx(O,{children:e.jsx("section",{className:"consultations-page",children:e.jsx(E,{children:e.jsx(q,{})})})})})};export{te as default};

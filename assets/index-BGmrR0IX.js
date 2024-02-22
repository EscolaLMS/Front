import{q as j,r as m,j as e,o as f,f as C,T as b,b as N,X as P,S as v,h,D as w,l as S,L as F,m as T}from"./index-BTvwz0L3.js";import{C as E}from"./index-BCstk8RY.js";import{C as M}from"./index-C6jTeD2y.js";import{F as Q,S as _}from"./index-BTth33E-.js";import{u}from"./useSearchParams-Dcu5KpUk.js";import{C as $}from"./index-D95a-Goj.js";import{P as k}from"./index-DzsaDRiK.js";import"./swiper-react-BSSPoOCY.js";import"./base-CumTa13P.js";import"./date-msTaMnuE.js";import"./app-B2E7767C.js";import"./index-B2HKkCHC.js";import"./index-BMX1PR5H.js";import"./ResponsiveImage-G_l4wTjD.js";import"./index-ClhuH08r.js";const B=j("div")`
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
`,L=()=>{var n;const{setPathname:t,setQueryParam:r,setQueryArrayParam:o,getAllQueryValueByName:s,getQueryValueByName:p}=u(),c=m.useMemo(()=>({categories:s("categories[]").map(a=>Number(a))||[],name:p("name")||""}),[s,p]);return e.jsxs(B,{children:[e.jsx("div",{className:"tags",children:e.jsx(Q,{filters:c,onReset:()=>{t()}})}),e.jsxs("div",{className:"selects-row",children:[e.jsx("div",{className:"single-select single-select--search",children:e.jsx(_,{onSubmit:a=>{r("name",a)}})}),e.jsx("div",{className:"single-select single-select--category",children:e.jsx(M,{selectedCategories:(n=s("categories[]"))==null?void 0:n.map(a=>Number(a)),handleChange:a=>{o("categories[]",a)}})})]})]})},H=({children:t})=>{const r=j("div")`
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
  `,{paramsToObject:o}=u();return e.jsx(r,{filters:o,children:t})},R=()=>{const{t}=C();return e.jsxs(H,{children:[e.jsxs(b.Title,{level:1,children:[" ",t("Menu.Consultations")]}),e.jsx(L,{})]})},y=N.createContext({}),V=({consultation:t})=>e.jsx($,{consultation:t}),q=()=>{var c,n,a,x,g,i;const{consultations:t}=m.useContext(y),{setQueryParam:r}=u(),o=t==null?void 0:t.loading,s=(c=t==null?void 0:t.list)==null?void 0:c.meta,p=P();return o?e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(v.Spin,{color:p.primaryColor})}):e.jsxs(e.Fragment,{children:[e.jsx(h.Row,{style:{gap:"30px 0",marginBottom:"30px"},children:(n=t==null?void 0:t.list)==null?void 0:n.data.map(l=>e.jsx(h.Col,{md:6,lg:4,xl:3,children:e.jsx(V,{consultation:l})},l.id))}),s&&(Number((x=(a=t==null?void 0:t.list)==null?void 0:a.meta)==null?void 0:x.total)||0)>(Number((i=(g=t==null?void 0:t.list)==null?void 0:g.meta)==null?void 0:i.per_page)||0)&&e.jsx(k,{total:s.total,perPage:Number(s.per_page),currentPage:s.current_page,onPage:l=>r("page",`${l}`)})]})},A=()=>{var r;const{categoryTree:t}=m.useContext(w.EscolaLMSContext);return e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(q,{}),t&&e.jsx(e.Fragment,{children:e.jsx(E,{categories:((r=t.list)==null?void 0:r.filter(o=>!!o.icon))||[]})})]})},O=t=>{const{fetchConsultations:r,consultations:o,fetchCategories:s}=m.useContext(S.EscolaLMSContext),{children:p}=t,{query:c,getQueryValueByName:n,getAllQueryValueByName:a,setPathname:x}=u();m.useEffect(()=>{s()},[]);const g=m.useCallback(()=>{const i={page:Number(n("page"))||1,per_page:Number(n("per_page"))||8},l=a("categories[]"),d=n("name");return d&&(i.name=d),l&&l.length&&(i["categories[]"]=l),i},[a,n]);return m.useEffect(()=>{const i=g();x(i),c.has("page")&&r(i)},[c]),e.jsx(y.Provider,{value:{consultations:o},children:p})},re=()=>{const{t}=C();return e.jsx(F,{metaTitle:t("ConsultationsPageMeta"),children:e.jsx(O,{children:e.jsx("section",{className:"consultations-page",children:e.jsx(T,{children:e.jsx(A,{})})})})})};export{re as default};

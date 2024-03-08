import{b as S,r as i,h as w,k as P,i as k,j as e,q as v,n as d,f as u,T as $,G as _,L as C,ax as T,aK as N,aL as E,U as F,X as L,S as I,w as y,D as H,o as M,C as R}from"./index-Ba_2FdXr.js";import{q as f}from"./base-C7euzKDi.js";import{C as q}from"./index-CqrFTY6I.js";import{C as B}from"./index-RM2uwnGF.js";import{F as D,S as O}from"./index-DNkXXbmg.js";import{P as U}from"./index-Br4I4p60.js";import{a as X}from"./ResponsiveImage-DZYeXYfo.js";import{C as z}from"./index-BG-rGcdP.js";import{T as A}from"./index-CS_Ph2Fc.js";import{C as G}from"./index-DTb7IJLS.js";import"./swiper-react-7yEnN6SU.js";const h=S.createContext({}),b=(s={})=>f.stringify(s),K=({children:s})=>{const{fetchProducts:r,products:a,fetchCategories:t,fetchTags:n}=i.useContext(w.EscolaLMSContext),o=P(),{push:g}=k();i.useEffect(()=>{t(),n()},[]);const[c,x]=i.useState(),m=(l={})=>({page:1,per_page:8,type:"bundle",order_by:"created_at",order:"DESC",...l});return i.useEffect(()=>{g(`${o.pathname}?${b(c)}`)},[c,o.pathname]),i.useEffect(()=>{if(o.search&&o.search.split("?")[1]!==b(c)){const l=f.parse(o.search);x(l),r(l||{})}else r(m(c))},[o.search]),e.jsx(h.Provider,{value:{params:c,setParams:x,packages:a},children:s})},J=({children:s})=>{const r=v("div")`
    background: ${({theme:t})=>t.primaryColor};
    padding: ${d?"60px 20px 20px 20px":"140px 40px 30px"};
    margin-bottom: ${d?"100px":"40px"};

    h1 {
      color: ${({theme:t})=>t.white};
      margin-bottom: ${({filters:t})=>d?0:t&&Object.keys(t).length>1?"35px":t&&Object.keys(t).length===1&&"page"in t||t===void 0?"-35px":"35px"};
      transition: margin-bottom 0.5s ease-out;
    }
  `,{params:a}=i.useContext(h);return e.jsx(r,{filters:a,children:s})},Q=v("div")`
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
`,V=()=>{const{params:s,setParams:r}=i.useContext(h),a=P(),t=f.parse(a.search,{arrayFormat:"bracket",parseNumbers:!0}),n=i.useMemo(()=>({categories:(t==null?void 0:t.categories)||[],name:(t==null?void 0:t.name)||"",tags:(t==null?void 0:t.tags)||[]}),[t]);return e.jsxs(Q,{children:[e.jsx("div",{className:"tags",children:e.jsx(D,{filters:n,onReset:()=>{r&&r({page:1})}})}),e.jsxs("div",{className:"selects-row",children:[e.jsx("div",{className:"single-select single-select--search",children:e.jsx(O,{onSubmit:o=>{if(r){const g={...s,page:1,name:o};r({...g})}}})}),e.jsx("div",{className:"single-select single-select--category",children:e.jsx(B,{selectedCategories:(t==null?void 0:t.categories)||[],handleChange:o=>{r&&r({...s,page:1,"categories[]":o})}})})]})]})},W=()=>{const{t:s}=u();return e.jsxs(J,{children:[e.jsxs($.Title,{level:1,children:[" ",s("PackagesPage.Packages")]}),e.jsx(V,{})]})},Y=({product:s,actions:r})=>{const a=k(),{t}=u();return e.jsx(_,{id:s.id,mobile:d,image:e.jsx(C,{to:`/package/${s.id}`,"aria-label":s.name,children:s.poster_path?e.jsx(X,{path:s.poster_path,alt:s.name,srcSizes:[300,600,900]}):e.jsx(z,{})}),title:e.jsx(C,{to:`/package/${s.id}`,className:"title",children:e.jsx(T,{level:4,as:"h2",children:s.name})}),categories:e.jsx(G,{categories:s.categories,onCategoryClick:n=>{a.push(`/packages/?categories[]=${n}`)}}),tags:e.jsx(A,{tags:(s==null?void 0:s.tags)||[],onTagClick:n=>a.push(`/packages/?tag=${n}`)}),actions:r??e.jsx(e.Fragment,{children:e.jsx(N,{mode:"secondary",onClick:()=>a.push(`/package/${s.id}`),children:t("StartNow")})}),footer:e.jsx(e.Fragment,{children:s.users_count&&s.users_count>0?e.jsx(E,{icon:e.jsx(F,{}),text:`${s.users_count} ${t("Students")}`}):""})})},Z=()=>{var g,c,x,m,l,j;const{params:s,setParams:r,packages:a}=i.useContext(h),t=a==null?void 0:a.loading,n=(g=a==null?void 0:a.list)==null?void 0:g.meta,o=L();return t?e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(I.Spin,{color:o.primaryColor})}):e.jsxs(y.Row,{style:{gap:"30px 0"},children:[(c=a==null?void 0:a.list)==null?void 0:c.data.map(p=>e.jsx(y.Col,{md:6,lg:4,xl:3,children:e.jsx(Y,{product:p})},p.id)),n&&(Number((m=(x=a==null?void 0:a.list)==null?void 0:x.meta)==null?void 0:m.total)||0)>(Number((j=(l=a==null?void 0:a.list)==null?void 0:l.meta)==null?void 0:j.per_page)||0)&&e.jsx(U,{total:n.total,perPage:Number(n.per_page),currentPage:n.current_page,onPage:p=>r&&r({...s,page:p,per_page:8})})]})},ee=()=>{var r;const{categoryTree:s}=i.useContext(H.EscolaLMSContext);return e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsx(Z,{}),s&&e.jsx(q,{categories:((r=s.list)==null?void 0:r.filter(a=>!!a.icon))||[]})]})},me=()=>{const{t:s}=u();return e.jsx(M,{metaTitle:s("PackagesPage.Events"),children:e.jsx(K,{children:e.jsx("section",{className:"packages-page",children:e.jsx(R,{children:e.jsx(ee,{})})})})})};export{me as default};

import{b as A,q as D,m as i,O as F,r as o,h as X,f as B,l as M,p as U,X as G,j as e,T as j,Q as I,s as k,V as Q,S as W,i as R,I as J,w as q,v as Y,K as z,U as Z,N as ee,k as te,L as se,C as ae}from"./index-8nfYNS1Y.js";import{C as O}from"./Categories-DSjTNpmj.js";import{q as S}from"./base-CumTa13P.js";import{P as re}from"./index-xB7dCB5U.js";import{P as oe}from"./index-BffHj736.js";import{C as ie}from"./index-qGlr-bC4.js";import{C as ne}from"./index-C779-yNS.js";import{R as le}from"./ResponsiveImage-D2Ds7Ba-.js";import{C as ce}from"./index-CZVCaklh.js";import{S as ge}from"./Search-5S_c8X8c.js";import{T as pe}from"./index-kxjE66PW.js";import{C as de}from"./index-C22JsHSd.js";import{g as xe}from"./index-o5mPTd5i.js";import"./index-DBeeu3RS.js";const V=A.createContext({}),H=8,ue=D("div")`
  background: ${({theme:t})=>t.primaryColor};
  padding: ${i?"60px 20px 20px 20px":"140px 40px 30px"};
  margin-bottom: ${i?"100px":"40px"};
  position: relative;
  z-index: 100;

  h1 {
    color: ${({theme:t})=>t.white};
    margin-bottom: ${({filters:t})=>i?0:t&&Object.keys(t).length>1?"35px":t&&Object.keys(t).length===1&&"page"in t||t===void 0?"-35px":"35px"};
    transition: margin-bottom 0.5s ease-out;
  }

  .filters-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    row-gap: 35px;

    .categories-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      &--loading {
        opacity: 0.6;
      }
      ${i&&F`
        position: absolute;
        bottom: -95px;
        left: -20px;
        width: calc(100% + 40px);
      `}

      .clear-btn {
        appearance: none;
        background: transparent;
        border: none;
        outline: none;
        margin-left: 15px;
        cursor: pointer;
        &--desktop {
          display: ${i?"none":"block"};
        }
        ${i&&F`
          svg {
            path {
              fill: ${({theme:t})=>t.primaryColor};
            }
          }
        `}
      }

      .categories-row {
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

        .single-filter {
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
          border-color: ${({theme:t})=>i?t.primaryColor:t.white};
          color: ${({theme:t})=>i?t.primaryColor:t.white};

          &--filters {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 120px;
            color: ${({theme:t})=>t.primaryColor};
          }

          &--active {
            border-color: ${({theme:t})=>i?t.primaryColor:t.white};
            color: ${({theme:t})=>i?t.white:t.primaryColor};
            background-color: ${({theme:t})=>i?t.primaryColor:t.white};
          }
        }
      }
    }
    .mobile-categories-wrapper {
      button {
        color: ${({theme:t})=>t.primaryColor};
        border-color: ${({theme:t})=>t.primaryColor};
        min-width: 110px;
      }
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
          background: transparent;
          border-bottom: 1px solid #fff;
          color: #fff;
          border-radius: 0;
        }

        .fieldset {
          border-color: transparent;
        }

        svg {
          filter: brightness(0) invert(1);
        }
      }

      .single-select {
        min-width: 200px;
      }
    }
  }
`,me=D.section`
  margin-bottom: ${i?"50px":"75px"};
`,he=()=>{var T,_,N,E,L;const{params:t,setParams:r,courses:l,loading:C}=o.useContext(V),{categoryTree:x,uniqueTags:m}=o.useContext(X.EscolaLMSContext),[g,h]=o.useState(),d={categories:[],tag:"",title:""},[a,u]=o.useState(d),[b,w]=o.useState(!1),{t:c}=B(),p=M(),f=U(),v=G(),y=o.useCallback(s=>u(n=>({...n,[s.key]:s.value})),[]);o.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[a.categories]);const P=()=>{u(d)},K=m.list?(T=m.list)==null?void 0:T.map(s=>({label:String(s.title),value:String(s.title)})):[];return o.useEffect(()=>{t&&w(t)},[t]),o.useEffect(()=>{b&&h(S.parse(f.search,{arrayFormat:"bracket",parseNumbers:!0}))},[b]),o.useEffect(()=>{g&&u({categories:g.categories,tag:g.tag,title:g.title})},[g]),e.jsxs(e.Fragment,{children:[e.jsxs(ue,{filters:t,children:[e.jsxs(j.Title,{level:1,children:[" ",c("CoursesPage.Courses")]}),e.jsxs("div",{className:"filters-container",children:[e.jsxs("div",{className:`categories-container ${C&&"categories-container--loading"}`,children:[e.jsxs("div",{className:"categories-row",children:[(a.tag||a.categories&&((_=a.categories)==null?void 0:_.length)>0)&&i&&e.jsx("button",{type:"button",onClick:()=>{h({}),r&&r({page:1}),P()},className:"clear-btn",children:e.jsx(I,{})}),i&&e.jsx("div",{className:"mobile-categories-wrapper",children:e.jsx(O.Categories,{mobile:!0,categories:x.list||[],label:"Kategoria",selectedCategories:a.categories&&a.categories.length>0?a.categories:g&&g.categories,drawerTitle:e.jsx(j.Title,{level:5,style:{fontSize:"14px"},children:c("CoursesPage.Category")}),handleChange:s=>{const n=s;y({key:"categories",value:n}),r&&r({...t,page:1,"categories[]":n})}})}),a.categories&&a.categories.length>0&&((N=x==null?void 0:x.list)==null?void 0:N.filter(s=>a.categories.indexOf(s.id)>-1).map(s=>e.jsx(k.Text,{className:"single-filter",children:s.name},s.id))),(a==null?void 0:a.tag)&&e.jsx(k.Text,{className:"single-filter",children:t==null?void 0:t.tag}),(a==null?void 0:a.title)&&e.jsx(k.Text,{className:"single-filter",children:t==null?void 0:t.title})]}),(a.categories&&((E=a.categories)==null?void 0:E.length)>0||a.title||a.tag)&&!i&&e.jsx("button",{type:"button",onClick:()=>{h({}),r&&r({page:1}),P()},className:"clear-btn clear-btn--desktop",children:e.jsx(I,{})})]}),e.jsxs("div",{className:"selects-row",children:[e.jsx("div",{className:"single-select single-select--search",children:e.jsx(ge.Search,{placeholder:c("CoursesPage.Search"),onSubmit:s=>{const n=s;y({key:"title",value:n}),s===""?(t&&delete t.title,r&&r({...t,page:1})):r&&r({...t,page:1,title:n})}})}),!i&&e.jsx("div",{className:"single-select single-select--category",children:e.jsx(O.Categories,{backgroundColor:v.primaryColor,categories:x.list||[],label:c("CoursesPage.Category"),selectedCategories:a.categories&&a.categories.length>0?a.categories:g&&g.categories,drawerTitle:e.jsx(j.Title,{level:5,style:{fontSize:"14px"},children:c("CoursesPage.Category")}),handleChange:s=>{const n=s;y({key:"categories",value:n}),r&&r({...t,page:1,"categories[]":n})}})}),e.jsx("div",{className:"single-select single-select--tag",children:e.jsx(Q,{onChange:s=>{y({key:"tag",value:s.value}),r&&r({...t,page:1,tag:s.value})},backgroundColor:v.primaryColor,value:a.tag,placeholder:"Tag",options:[{label:c("CoursesPage.All"),value:""},...K]})})]})]})]}),l&&!C&&(!l.data||!l.data.length)?e.jsx(j.Title,{level:4,children:c("NoCourses")}):e.jsx(e.Fragment,{children:C?e.jsx("div",{style:{display:"flex",justifyContent:"center"},className:"loader-wrapper",children:e.jsx(W.Spin,{color:v.primaryColor})}):e.jsxs(A.Fragment,{children:[e.jsx(me,{children:e.jsx(R.Row,{style:{gap:"30px 0"},children:l==null?void 0:l.data.map(s=>e.jsx(R.Col,{md:6,lg:4,xl:3,children:e.jsx(ce,{children:e.jsx(J,{mobile:i,id:s.id,image:e.jsx(q,{to:`/courses/${s.id}`,"aria-label":s.title,children:s.image_path?e.jsx(le.ResponsiveImage,{path:s.image_path,alt:s.title,srcSizes:[300,600,900]}):e.jsx(ne,{})}),tags:e.jsx(pe,{tags:s.tags,onTagClick:n=>p.push(`/courses/?tag=${n}`)}),subtitle:xe({subtitle:s.subtitle,linkTo:`/courses/${s.id}`,textLength:29}),title:e.jsx(q,{to:`/course/${s.id}`,className:"title",children:e.jsx(j.Title,{level:4,as:"h2",children:s.title})}),categories:e.jsx(de,{categories:s.categories,onCategoryClick:n=>{p.push(`/courses/?categories[]=${n}`)}}),actions:e.jsx(e.Fragment,{children:e.jsx(Y.Button,{mode:"secondary",onClick:()=>p.push(`/course/${s.id}`),children:c("StartNow")})}),footer:e.jsxs(e.Fragment,{children:[s.users_count&&s.users_count>0?e.jsx(z.IconText,{icon:e.jsx(Z,{}),text:`${s.users_count} ${c("Students")}`}):""," ",s.lessons_count&&s.lessons_count>0?e.jsx(z.IconText,{icon:e.jsx(ee,{}),text:`${s.lessons_count} ${c("Lessons")}`}):""]})})})},s.id))})}),l.meta.total>l.meta.per_page&&e.jsx(re,{total:l.meta.total,perPage:l.meta.per_page,currentPage:l.meta.current_page,onPage:s=>r&&r({...t,page:s,per_page:H})})]})}),e.jsx(oe,{}),x&&e.jsx(e.Fragment,{children:e.jsx(ie,{categories:((L=x.list)==null?void 0:L.filter(s=>!!s.icon))||[]})})]})},$=(t={})=>S.stringify(t),fe=({onlyFree:t=!0,children:r})=>{const[l,C]=o.useState(),[x,m]=o.useState(!0),{fetchCourses:g,fetchCategories:h}=o.useContext(te.EscolaLMSContext),d=U(),{push:a}=M(),[u,b]=o.useState(),w=(p={})=>{const f={page:1,per_page:H,order_by:"created_at",order:"DESC",...p};return t&&(f.free=!0),f};o.useEffect(()=>{h()},[h]),o.useEffect(()=>{a(`${d.pathname}?${$(u)}`)},[u,d.pathname]);const c=o.useCallback(p=>{m(!0),g(p).then(f=>{C(f)}).catch(()=>m(!1)).finally(()=>m(!1))},[g]);return o.useEffect(()=>{if(d.search&&d.search.split("?")[1]!==$(u)){const p=S.parse(d.search);a(`${d.pathname}?${$(p)}`),b(p),c(p?{...p,order_by:"created_at",order:"DESC"}:{})}else c(w(u))},[d.search]),e.jsx(V.Provider,{value:{params:u,setParams:b,courses:l,onlyFree:t,loading:x},children:r})},Le=()=>{const{t}=B();return e.jsx(se,{metaTitle:t("CoursesPage.Courses"),children:e.jsx(fe,{onlyFree:!1,children:e.jsx("section",{className:"courses-page",children:e.jsx(ae,{children:e.jsx(he,{})})})})})};export{Le as default};

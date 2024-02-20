import{b as G,q as j,o as i,i as N,f as _,j as e,m as W,T as b,B as F,k as H,h as w,Q as te,w as k,X as E,v as $,r as l,V as O,D as se,s as X,W as M,Y as re,S as oe,J as ae,N as U,U as ie,O as ne,l as le,L as ce}from"./index-B8t7bxZo.js";import{C as V}from"./Categories-OUhMrw_M.js";import{q as L}from"./base-CumTa13P.js";import{P as de}from"./index-CrC3Z2ZD.js";import{C as J}from"./index-Dp8bV9hL.js";import{R as K}from"./ResponsiveImage-B7bcvD5e.js";import{C as pe,N as ge}from"./index-Dam1NB4i.js";import{C as Q}from"./index-BAzXgDWl.js";import{u as xe}from"./useFetchCourses-Da9gZeoE.js";import{C as ue}from"./index-ClUiBIQr.js";import{C as me}from"./index-CKt0GIUE.js";import{S as he}from"./Search-CTLKKOal.js";import{T as Ce}from"./index-BxmKzVC8.js";import"./swiper-react-CojPz2DI.js";const Y=G.createContext({}),fe=j.section`
  @media (max-width: 768px) {
    margin: 30px 0;
  }
  .container {
    position: relative;

    z-index: 1;
    &:after {
      position: absolute;
      content: "";
      width: ${i?"100%":"calc(100% + 100px)"};
      height: 100%;
      background: ${({theme:t})=>t.theme==="orangeTheme"&&t.mode==="light"?t.gray4:"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"};
      left: 50%;
      transform: translate(-50%, 0);
      top: 0;
      z-index: -1;
      opacity: ${({theme:t})=>t.mode==="dark"?.1:1};
      border-radius: ${({theme:t})=>t.radius};

      @media (max-width: 1200px) {
        background: ${({theme:t})=>t.theme==="orangeTheme"?"linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 100%)":"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"};
      }
    }
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    button {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
  .show-more-btn {
    display: none;
    @media (max-width: 1200px) {
      display: block;
      margin-top: 60px;
    }
  }
  .course-section {
    display: none;
  }
`,be=()=>{const{courses:t,loading:r}=xe({per_page:8}),a=N(),{t:p}=_();return e.jsx(fe,{children:e.jsxs(W,{className:"container",children:[e.jsxs("div",{className:"header-wrapper",children:[e.jsx(b.Title,{level:1,as:"h2",children:p("Homepage.AwardedCoursesTitle")}),e.jsx(F.Button,{mode:"outline",onClick:()=>a.push(H.courses),children:p("Homepage.AwardedCoursesBtnText")})]}),r&&e.jsx(w.Row,{children:e.jsx(te.CourseCardSkeleton,{count:8,colProps:{xs:12,sm:6,md:3}})}),!r&&i&&e.jsx(pe,{courses:t||[]}),!r&&!i&&e.jsx(w.Row,{style:{rowGap:"20px"},children:t.map(n=>e.jsx(w.Col,{md:6,lg:3,children:e.jsx(ge.NewCourseCard,{mobile:i,id:n.id,image:e.jsx(k,{to:`/courses/${n.id}`,children:n.image_path?e.jsx(K.ResponsiveImage,{path:n.image_path,alt:n.title,srcSizes:[300,600,900]}):e.jsx(J,{})}),title:n.title,categories:e.jsx(Q,{categories:n.categories,onCategoryClick:u=>{a.push(`/courses/?categories[]=${u}`)}})})},n.id))}),e.jsx(F.Button,{className:"show-more-btn",onClick:()=>a.push(H.courses),block:!0,mode:"outline",children:p("Homepage.AwardedCoursesBtnText")})]})})},Z=8,R=j.span`
  color: ${t=>t.color};
`,je=j.span`
  color: ${t=>t.color};
  ${R}:hover & {
    display: none;
  }
`,ye=j.span`
  color: ${t=>t.color};
  display: none;
  ${R}:hover & {
    display: block;
  }
`,we=({text:t,length:r=30,tail:a="...",...p})=>{const n=E(),u=t.slice(0,r),c=t.slice(r,t.length);return e.jsx($.Text,{...p,children:e.jsxs(R,{color:n.primaryColor,children:[u,c&&e.jsxs(e.Fragment,{children:[e.jsx(je,{children:a}),e.jsx(ye,{children:c})]})]})})},ve=l.memo(({linkTo:t,subtitle:r,textLength:a})=>{const p=E();return r?e.jsx(k,{style:{color:p.primaryColor},to:t,children:e.jsx(we,{text:r,bold:!0,size:"12",length:a})}):null}),$e=({...t})=>{if(t.subtitle)return e.jsx(ve,{...t})},ke=j("div")`
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
      ${i&&O`
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
        ${i&&O`
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
`,Se=j.section`
  margin-bottom: ${i?"50px":"75px"};
`,Te=()=>{var z,B,A,q,D;const{params:t,setParams:r,courses:a,loading:p}=l.useContext(Y),{categoryTree:n,uniqueTags:u}=l.useContext(se.EscolaLMSContext),[c,C]=l.useState(),m={categories:[],tag:"",title:""},[o,h]=l.useState(m),[y,S]=l.useState(!1),{t:g}=_(),x=N(),f=X(),T=E(),v=l.useCallback(s=>h(d=>({...d,[s.key]:s.value})),[]);l.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o.categories]);const I=()=>{h(m)},ee=u.list?(z=u.list)==null?void 0:z.map(s=>({label:String(s.title),value:String(s.title)})):[];return l.useEffect(()=>{t&&S(t)},[t]),l.useEffect(()=>{y&&C(L.parse(f.search,{arrayFormat:"bracket",parseNumbers:!0}))},[y]),l.useEffect(()=>{c&&h({categories:c.categories,tag:c.tag,title:c.title})},[c]),e.jsxs(e.Fragment,{children:[e.jsxs(ke,{filters:t,children:[e.jsxs(b.Title,{level:1,children:[" ",g("CoursesPage.Courses")]}),e.jsxs("div",{className:"filters-container",children:[e.jsxs("div",{className:`categories-container ${p&&"categories-container--loading"}`,children:[e.jsxs("div",{className:"categories-row",children:[(o.tag||o.categories&&((B=o.categories)==null?void 0:B.length)>0)&&i&&e.jsx("button",{type:"button",onClick:()=>{C({}),r&&r({page:1}),I()},className:"clear-btn",children:e.jsx(M,{})}),i&&e.jsx("div",{className:"mobile-categories-wrapper",children:e.jsx(V.Categories,{mobile:!0,categories:n.list||[],label:"Kategoria",selectedCategories:o.categories&&o.categories.length>0?o.categories:c&&c.categories,drawerTitle:e.jsx(b.Title,{level:5,style:{fontSize:"14px"},children:g("CoursesPage.Category")}),handleChange:s=>{const d=s;v({key:"categories",value:d}),r&&r({...t,page:1,"categories[]":d})}})}),o.categories&&o.categories.length>0&&((A=n==null?void 0:n.list)==null?void 0:A.filter(s=>o.categories.indexOf(s.id)>-1).map(s=>e.jsx($.Text,{className:"single-filter",children:s.name},s.id))),(o==null?void 0:o.tag)&&e.jsx($.Text,{className:"single-filter",children:t==null?void 0:t.tag}),(o==null?void 0:o.title)&&e.jsx($.Text,{className:"single-filter",children:t==null?void 0:t.title})]}),(o.categories&&((q=o.categories)==null?void 0:q.length)>0||o.title||o.tag)&&!i&&e.jsx("button",{type:"button",onClick:()=>{C({}),r&&r({page:1}),I()},className:"clear-btn clear-btn--desktop",children:e.jsx(M,{})})]}),e.jsxs("div",{className:"selects-row",children:[e.jsx("div",{className:"single-select single-select--search",children:e.jsx(he.Search,{placeholder:g("CoursesPage.Search"),onSubmit:s=>{const d=s;v({key:"title",value:d}),s===""?(t&&delete t.title,r&&r({...t,page:1})):r&&r({...t,page:1,title:d})}})}),!i&&e.jsx("div",{className:"single-select single-select--category",children:e.jsx(V.Categories,{backgroundColor:T.primaryColor,categories:n.list||[],label:g("CoursesPage.Category"),selectedCategories:o.categories&&o.categories.length>0?o.categories:c&&c.categories,drawerTitle:e.jsx(b.Title,{level:5,style:{fontSize:"14px"},children:g("CoursesPage.Category")}),handleChange:s=>{const d=s;v({key:"categories",value:d}),r&&r({...t,page:1,"categories[]":d})}})}),e.jsx("div",{className:"single-select single-select--tag",children:e.jsx(re,{onChange:s=>{v({key:"tag",value:s.value}),r&&r({...t,page:1,tag:s.value})},backgroundColor:T.primaryColor,value:o.tag,placeholder:"Tag",options:[{label:g("CoursesPage.All"),value:""},...ee]})})]})]})]}),a&&!p&&(!a.data||!a.data.length)?e.jsx(b.Title,{level:4,children:g("NoCourses")}):e.jsx(e.Fragment,{children:p?e.jsx("div",{style:{display:"flex",justifyContent:"center"},className:"loader-wrapper",children:e.jsx(oe.Spin,{color:T.primaryColor})}):e.jsxs(G.Fragment,{children:[e.jsx(Se,{children:e.jsx(w.Row,{style:{gap:"30px 0"},children:a==null?void 0:a.data.map(s=>e.jsx(w.Col,{md:6,lg:4,xl:3,children:e.jsx(me,{children:e.jsx(ae,{mobile:i,id:s.id,image:e.jsx(k,{to:`/courses/${s.id}`,"aria-label":s.title,children:s.image_path?e.jsx(K.ResponsiveImage,{path:s.image_path,alt:s.title,srcSizes:[300,600,900]}):e.jsx(J,{})}),tags:e.jsx(Ce,{tags:s.tags,onTagClick:d=>x.push(`/courses/?tag=${d}`)}),subtitle:$e({subtitle:s.subtitle,linkTo:`/courses/${s.id}`,textLength:29}),title:e.jsx(k,{to:`/course/${s.id}`,className:"title",children:e.jsx(b.Title,{level:4,as:"h2",children:s.title})}),categories:e.jsx(Q,{categories:s.categories,onCategoryClick:d=>{x.push(`/courses/?categories[]=${d}`)}}),actions:e.jsx(e.Fragment,{children:e.jsx(F.Button,{mode:"secondary",onClick:()=>x.push(`/course/${s.id}`),children:g("StartNow")})}),footer:e.jsxs(e.Fragment,{children:[s.users_count&&s.users_count>0?e.jsx(U.IconText,{icon:e.jsx(ie,{}),text:`${s.users_count} ${g("Students")}`}):""," ",s.lessons_count&&s.lessons_count>0?e.jsx(U.IconText,{icon:e.jsx(ne,{}),text:`${s.lessons_count} ${g("Lessons")}`}):""]})})})},s.id))})}),a.meta.total>a.meta.per_page&&e.jsx(de,{total:a.meta.total,perPage:a.meta.per_page,currentPage:a.meta.current_page,onPage:s=>r&&r({...t,page:s,per_page:Z})})]})}),e.jsx(be,{}),n&&e.jsx(e.Fragment,{children:e.jsx(ue,{categories:((D=n.list)==null?void 0:D.filter(s=>!!s.icon))||[]})})]})},P=(t={})=>L.stringify(t),Pe=({onlyFree:t=!0,children:r})=>{const[a,p]=l.useState(),[n,u]=l.useState(!0),{fetchCourses:c,fetchCategories:C}=l.useContext(le.EscolaLMSContext),m=X(),{push:o}=N(),[h,y]=l.useState(),S=(x={})=>{const f={page:1,per_page:Z,order_by:"created_at",order:"DESC",...x};return t&&(f.free=!0),f};l.useEffect(()=>{C()},[C]),l.useEffect(()=>{o(`${m.pathname}?${P(h)}`)},[h,m.pathname]);const g=l.useCallback(x=>{u(!0),c(x).then(f=>{p(f)}).catch(()=>u(!1)).finally(()=>u(!1))},[c]);return l.useEffect(()=>{if(m.search&&m.search.split("?")[1]!==P(h)){const x=L.parse(m.search);o(`${m.pathname}?${P(x)}`),y(x),g(x?{...x,order_by:"created_at",order:"DESC"}:{})}else g(S(h))},[m.search]),e.jsx(Y.Provider,{value:{params:h,setParams:y,courses:a,onlyFree:t,loading:n},children:r})},Me=()=>{const{t}=_();return e.jsx(ce,{metaTitle:t("CoursesPage.Courses"),children:e.jsx(Pe,{onlyFree:!1,children:e.jsx("section",{className:"courses-page",children:e.jsx(W,{children:e.jsx(Te,{})})})})})};export{Me as default};

import{q as y,f as $,h as N,j as e,C as E,T as P,i as k,k as L,I as R,l as _,r as d,m as U,n as V,o as O,p as W,s as Q,L as D,v as q,w as F,B as G,M as J}from"./index-7DCmJPFg.js";import{S as K,a as M}from"./a11y-CezNhKGd.js";import{D as B}from"./index-Br1GzgNi.js";import{S as A}from"./swiper-8y6Xyn9s.js";import{C as X,a as Y,b as Z}from"./CourseCard-Ceajei5g.js";import{u as ee,C as m}from"./index-BsXaXf9C.js";import"./index-CcB8IiQf.js";import"./useFetchCourses-B4gzILIJ.js";import"./index-ZPqAC9jf.js";import"./index-DXKx787A.js";import"./questionnaires-DDTsABY_.js";import"./useDownloadCertificate-6I2Tk0D6.js";import"./base-C7euzKDi.js";import"./index-DBYp5aGp.js";const se=y.section`
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
  h2 {
    margin-bottom: 27px;
  }
  .slider-title {
    @media (max-width: 575px) {
      padding-right: 45%;
    }
  }
  .categories-slider {
    .slick-dots {
      bottom: 40px;
    }
  }
  .slick-track {
    display: flex;
    gap: 0 20px;
  }
  .slick-slide {
    @media (max-width: 991px) {
      display: flex !important;
      justify-content: center;
    }
  }
  .single-category-slide {
    margin: 0 8px;

    @media (max-width: 991px) {
      margin: 0 auto;
      min-width: 300px;
    }
  }
  .category-card-icon {
    img {
      margin: 0 auto;
      display: block;
      max-height: 70px;
    }
  }
`,ae=y.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 10px;
`,te=({categories:i})=>{const{t}=$(),o=N(),c=i.filter(s=>s.count&&s.count>0);return e.jsx(se,{children:e.jsxs(E,{children:[e.jsx(P.Title,{level:1,as:"h2",children:e.jsx("strong",{children:t("Homepage.CategoriesTitle")})}),k?e.jsx("div",{className:"categories-slider",children:e.jsx(K,{spaceBetween:18,slidesOffsetAfter:18,breakpoints:{0:{slidesPerView:1.3},576:{slidesPerView:2},768:{slidesPerView:3},1201:{slidesPerView:4}},children:c.slice(-5).map(s=>e.jsx(M,{children:e.jsx(L.CategoryCard,{icon:e.jsx("img",{src:s.icon,alt:s.name}),title:s.name,buttonText:t("Homepage.CategoryBtnText"),subtitle:e.jsx(R.IconText,{icon:e.jsx(_,{}),text:`${t("CoursesLength",{count:s.count})}`}),onButtonClick:()=>o.push(`/courses/?categories[]=${s.id}`),variant:"gradient"})},s.id))})}):e.jsx(ae,{children:c.slice(-5).map(s=>e.jsx("div",{className:"category-item",children:e.jsx(L.CategoryCard,{icon:e.jsx("img",{src:s.icon,alt:s.name}),title:s.name,buttonText:t("Homepage.CategoryBtnText"),subtitle:e.jsx(R.IconText,{icon:e.jsx(_,{}),text:`${t("CoursesLength",{count:s.count})}`}),onButtonClick:()=>o.push(`/courses/?categories[]=${s.id}`),variant:"gradient"})},s.id))})]})})},re=(i=m.ALL)=>{var H,I;const{fetchMyAuthoredCourses:t,myAuthoredCourses:o,fetchPaginatedProgress:c,paginatedProgress:s}=d.useContext(U.EscolaLMSContext),[a,l]=d.useState([]),p=N(),{setQueryParam:u}=ee(),{search:f}=V(),h=new URLSearchParams(f),g=h.get("page"),j=h.get("status"),v=d.useMemo(()=>{var n,r;return i===m.AUTHORED?(n=o.list)==null?void 0:n.meta:(r=s.list)==null?void 0:r.meta},[i,(H=o.list)==null?void 0:H.meta,(I=s.list)==null?void 0:I.meta]),C=d.useCallback(n=>{let r="";switch(n){case 1:case 5:break;case 2:r="started";break;case 3:r="planned";break;case 4:r="finished";break}return r},[]);d.useEffect(()=>{c({page:g?parseInt(g):1,per_page:18,status:C(Number(j))}),(i===m.ALL||i===m.AUTHORED)&&t()},[c,i,t,g,j,C]);const w=d.useMemo(()=>{var n;return(((n=s.list)==null?void 0:n.data)||[]).reduce((r,x)=>({...r,[x.course.id?x.course.id:-1]:Math.round((x.progress||[]).reduce((b,z)=>z.status===1?b+1:b,0)/x.progress.length*100)}),{})},[s]),T=d.useCallback(n=>n.map(r=>({...r.course,courseData:r,progress:w[r.course.id?r.course.id:-1]})),[w]);return d.useEffect(()=>{var n,r,x,b;i!==m.AUTHORED?l(T(((n=s.list)==null?void 0:n.data)||[])):i===m.AUTHORED?l(((r=o.list)==null?void 0:r.data)||[]):l([...T(((x=s.list)==null?void 0:x.data)||[]),...((b=o.list)==null?void 0:b.data)||[]])},[i,s,o,T]),{coursesToMap:a,paginationMeta:v,loading:s.loading||o.loading,handlePagination:n=>{u("page",`${n}`),window==null||window.scrollTo(0,0)},redirectToCourses:()=>p.push(O.courses)}},oe=y.div`
  position: relative;
`,ie=({titleText:i,slidesPerView:t=4})=>{const{coursesToMap:o,loading:c}=re(),s=N();return o.length===0?null:e.jsxs(oe,{children:[e.jsx("div",{className:"header-wrapper",children:e.jsx(P.Title,{className:"slider-title",level:1,as:"h2",children:e.jsx("strong",{children:i})})}),c&&e.jsx(A,{slidesPerView:t,children:Array.from({length:6}).map((a,l)=>e.jsx(M,{children:e.jsx(X,{})},l))}),!c&&o&&e.jsx(A,{slidesPerView:t,children:o.map(a=>{var l,p;return e.jsx(M,{children:e.jsx(W.NewCourseCard,{mobile:k,id:a.id,disabled:((l=a==null?void 0:a.courseData)==null?void 0:l.end_date)&&Q(new Date((p=a==null?void 0:a.courseData)==null?void 0:p.end_date)),image:e.jsx(D,{to:`/courses/${a.id}`,children:a.image_path?e.jsx(q.ResponsiveImage,{path:a.image_path,alt:a.title,srcSizes:[300,600,900]}):e.jsx(Y,{})}),title:e.jsx(D,{to:`/courses/${a.id}`,children:e.jsx(P.Title,{level:3,as:"h3",className:"title",children:a.title})}),categories:e.jsx(Z,{categories:a.categories,onCategoryClick:u=>{s.push(`/courses/?categories[]=${u}`)}}),progress:a.progress&&a.progress!==100&&!isNaN(a.progress)?{currentProgress:a.progress,maxProgress:100}:void 0})},a.id)})})]})},ne=y.div`
  @media (max-width: 1200px) {
    margin-top: 0;
  }
  @media (max-width: 575px) {
    margin-top: -30px;
  }
  .home-hero {
    margin-bottom: 45px;
    padding-top: 42px;

    h1 {
      margin-top: 0 !important;
    }
    @media (max-width: 768px) {
      margin-bottom: 40px;
      padding-top: 100px;
      h1 {
        font-size: 26px;
      }
    }
  }

  .home-newest-courses {
    margin-bottom: 30px;
  }
`,S=y(E)`
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    button {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
`,ye=()=>{var p,u,f,h,g,j,v,C,w;const{categoryTree:i,settings:t,fetchCategories:o,user:c}=d.useContext(U.EscolaLMSContext),s=N(),{t:a,i18n:l}=$();return d.useEffect(()=>{o()},[o]),e.jsx(F,{metaTitle:a("Home"),children:e.jsxs(ne,{children:[e.jsx("section",{className:"home-hero",children:((p=t.value)==null?void 0:p.homepage)&&((u=t.value.homepage)==null?void 0:u.heroBannerText)&&((f=t.value.homepage)==null?void 0:f.heroBannerImg)&&((h=t.value.homepage)==null?void 0:h.heroBannerImg)!==""&&e.jsx(E,{children:e.jsx(G.Banner,{mobile:k,title:e.jsx(J.MarkdownRenderer,{children:`<h1>${((g=t.value.homepage)==null?void 0:g.heroBannerText[l.language])||""}</h1>`}),btnText:a("Homepage.HeroBtnText"),asset:e.jsx(q.ResponsiveImage,{path:((v=(j=t==null?void 0:t.value)==null?void 0:j.homepage)==null?void 0:v.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>s.push(O.courses)})})}),((C=c.value)==null?void 0:C.id)&&e.jsx("section",{className:"home-newest-courses",children:e.jsx(S,{children:e.jsx(ie,{titleText:a("Navbar.MyCourses")})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(S,{children:e.jsx(B,{titleText:a("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(S,{children:e.jsx(B,{titleText:a("Homepage.CoursesSlider1Title"),params:{per_page:8}})})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(S,{children:e.jsx(B,{titleText:a("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!k,ctaButton:!0})})}),i&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(te,{categories:((w=i.list)==null?void 0:w.filter(T=>!!T.icon))||[]})})]})})};export{ye as default};

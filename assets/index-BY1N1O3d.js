import{q as w,f as D,h as N,j as e,C as E,T as M,i as k,k as L,I as R,l as A,r as l,m as U,n as V,o as O,p as W,L as _,s as q,v as Q,B as F,M as G}from"./index-BRyshI_t.js";import{S as J,a as P}from"./a11y-BDhpMVLn.js";import{D as B}from"./index-BohSzmRo.js";import{S as $}from"./swiper-QxCfsGxW.js";import{C as K,a as X,b as Y}from"./CourseCard-CicOOZqv.js";import{u as Z,C as x}from"./index-Blg6Wgwm.js";import"./index-49vF-SRl.js";import"./useFetchCourses-BXC-h9-w.js";import"./index-DrZDainX.js";import"./index-BQtrr-lO.js";import"./questionnaires-D59mfA-a.js";import"./useDownloadCertificate-C02sAa3D.js";import"./base-C7euzKDi.js";import"./index-DCq69k1g.js";const ee=w.section`
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
`,se=w.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 10px;
`,ae=({categories:i})=>{const{t}=D(),o=N(),c=i.filter(s=>s.count&&s.count>0);return e.jsx(ee,{children:e.jsxs(E,{children:[e.jsx(M.Title,{level:1,as:"h2",children:e.jsx("strong",{children:t("Homepage.CategoriesTitle")})}),k?e.jsx("div",{className:"categories-slider",children:e.jsx(J,{spaceBetween:18,slidesOffsetAfter:18,breakpoints:{0:{slidesPerView:1.3},576:{slidesPerView:2},768:{slidesPerView:3},1201:{slidesPerView:4}},children:c.slice(-5).map(s=>e.jsx(P,{children:e.jsx(L.CategoryCard,{icon:e.jsx("img",{src:s.icon,alt:s.name}),title:s.name,buttonText:t("Homepage.CategoryBtnText"),subtitle:e.jsx(R.IconText,{icon:e.jsx(A,{}),text:`${t("CoursesLength",{count:s.count})}`}),onButtonClick:()=>o.push(`/courses/?categories[]=${s.id}`),variant:"gradient"})},s.id))})}):e.jsx(se,{children:c.slice(-5).map(s=>e.jsx("div",{className:"category-item",children:e.jsx(L.CategoryCard,{icon:e.jsx("img",{src:s.icon,alt:s.name}),title:s.name,buttonText:t("Homepage.CategoryBtnText"),subtitle:e.jsx(R.IconText,{icon:e.jsx(A,{}),text:`${t("CoursesLength",{count:s.count})}`}),onButtonClick:()=>o.push(`/courses/?categories[]=${s.id}`),variant:"gradient"})},s.id))})]})})},te=(i=x.ALL)=>{var H,I;const{fetchMyAuthoredCourses:t,myAuthoredCourses:o,fetchPaginatedProgress:c,paginatedProgress:s}=l.useContext(U.EscolaLMSContext),[a,d]=l.useState([]),y=N(),{setQueryParam:b}=Z(),{search:f}=V(),g=new URLSearchParams(f),m=g.get("page"),u=g.get("status"),v=l.useMemo(()=>{var n,r;return i===x.AUTHORED?(n=o.list)==null?void 0:n.meta:(r=s.list)==null?void 0:r.meta},[i,(H=o.list)==null?void 0:H.meta,(I=s.list)==null?void 0:I.meta]),h=l.useCallback(n=>{let r="";switch(n){case 1:case 5:break;case 2:r="started";break;case 3:r="planned";break;case 4:r="finished";break}return r},[]);l.useEffect(()=>{c({page:m?parseInt(m):1,per_page:18,status:h(Number(u))}),(i===x.ALL||i===x.AUTHORED)&&t()},[c,i,t,m,u,h]);const j=l.useMemo(()=>{var n;return(((n=s.list)==null?void 0:n.data)||[]).reduce((r,p)=>({...r,[p.course.id?p.course.id:-1]:Math.round((p.progress||[]).reduce((T,z)=>z.status===1?T+1:T,0)/p.progress.length*100)}),{})},[s]),C=l.useCallback(n=>n.map(r=>({...r.course,courseData:r,progress:j[r.course.id?r.course.id:-1]})),[j]);return l.useEffect(()=>{var n,r,p,T;i!==x.AUTHORED?d(C(((n=s.list)==null?void 0:n.data)||[])):i===x.AUTHORED?d(((r=o.list)==null?void 0:r.data)||[]):d([...C(((p=s.list)==null?void 0:p.data)||[]),...((T=o.list)==null?void 0:T.data)||[]])},[i,s,o,C]),{coursesToMap:a,paginationMeta:v,loading:s.loading||o.loading,handlePagination:n=>{b("page",`${n}`),window==null||window.scrollTo(0,0)},redirectToCourses:()=>y.push(O.courses)}},re=w.div`
  position: relative;
`,oe=({titleText:i,slidesPerView:t=4})=>{const{coursesToMap:o,loading:c}=te(),s=N();return o.length===0?null:e.jsxs(re,{children:[e.jsx("div",{className:"header-wrapper",children:e.jsx(M.Title,{className:"slider-title",level:1,as:"h2",children:e.jsx("strong",{children:i})})}),c&&e.jsx($,{slidesPerView:t,children:Array.from({length:6}).map((a,d)=>e.jsx(P,{children:e.jsx(K,{})},d))}),!c&&o&&e.jsx($,{slidesPerView:t,children:o.map(a=>e.jsx(P,{children:e.jsx(W.NewCourseCard,{mobile:k,id:a.id,image:e.jsx(_,{to:`/courses/${a.id}`,children:a.image_path?e.jsx(q.ResponsiveImage,{path:a.image_path,alt:a.title,srcSizes:[300,600,900]}):e.jsx(X,{})}),title:e.jsx(_,{to:`/courses/${a.id}`,children:e.jsx(M.Title,{level:3,as:"h3",className:"title",children:a.title})}),categories:e.jsx(Y,{categories:a.categories,onCategoryClick:d=>{s.push(`/courses/?categories[]=${d}`)}}),progress:a.progress&&a.progress!==100&&!isNaN(a.progress)?{currentProgress:a.progress,maxProgress:100}:void 0})},a.id))})]})},ie=w.div`
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
`,S=w(E)`
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
`,ye=()=>{var y,b,f,g,m,u,v,h,j;const{categoryTree:i,settings:t,fetchCategories:o,user:c}=l.useContext(U.EscolaLMSContext),s=N(),{t:a,i18n:d}=D();return l.useEffect(()=>{o()},[o]),e.jsx(Q,{metaTitle:a("Home"),children:e.jsxs(ie,{children:[e.jsx("section",{className:"home-hero",children:((y=t.value)==null?void 0:y.homepage)&&((b=t.value.homepage)==null?void 0:b.heroBannerText)&&((f=t.value.homepage)==null?void 0:f.heroBannerImg)&&((g=t.value.homepage)==null?void 0:g.heroBannerImg)!==""&&e.jsx(E,{children:e.jsx(F.Banner,{mobile:k,title:e.jsx(G.MarkdownRenderer,{children:`<h1>${((m=t.value.homepage)==null?void 0:m.heroBannerText[d.language])||""}</h1>`}),btnText:a("Homepage.HeroBtnText"),asset:e.jsx(q.ResponsiveImage,{path:((v=(u=t==null?void 0:t.value)==null?void 0:u.homepage)==null?void 0:v.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>s.push(O.courses)})})}),((h=c.value)==null?void 0:h.id)&&e.jsx("section",{className:"home-newest-courses",children:e.jsx(S,{children:e.jsx(oe,{titleText:a("Navbar.MyCourses")})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(S,{children:e.jsx(B,{titleText:a("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(S,{children:e.jsx(B,{titleText:a("Homepage.CoursesSlider1Title"),params:{per_page:8}})})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(S,{children:e.jsx(B,{titleText:a("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!k,ctaButton:!0})})}),i&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(ae,{categories:((j=i.list)==null?void 0:j.filter(C=>!!C.icon))||[]})})]})})};export{ye as default};

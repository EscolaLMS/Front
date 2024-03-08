import{r as p,h as _,i as M,k as $,l as A,q as E,j as e,T as B,m as O,n as N,L as H,f as z,o as q,C as I,B as W,M as Q}from"./index-Bjk_45MO.js";import{R as D}from"./ResponsiveImage-wYxl3kWJ.js";import{C as F}from"./index-ByFOh-xS.js";import{D as y}from"./index-Ml3LGY9S.js";import{S as P}from"./swiper-react-CO9r4Bsk.js";import{S as L}from"./swiper-B3oKVkBy.js";import{C as G}from"./CourseCard-Cly8Zjem.js";import{u as J}from"./useSearchParams-DawJFBcb.js";import{CourseStatus as u}from"./index-BYwjnrZ6.js";import{C as K}from"./index-DdavEOvA.js";import{C as X}from"./index-BNTGN6Sw.js";import"./index-3y6ZJfCp.js";import"./index-D1KheDiE.js";import"./useFetchCourses-CPsyyy8t.js";import"./index-BMKx56cF.js";import"./base-C7euzKDi.js";import"./Tabs-DeLQ6nIG.js";import"./index-ByR6k3wq.js";import"./index-Bz9IQ-KJ.js";import"./questionnaires-BlwwmS39.js";import"./useDownloadCertificate-CojJpn-m.js";import"./useRoles-DhUVqcxA.js";import"./index-DXgEk6c6.js";const Y=(o=u.ALL)=>{var R,k;const{fetchMyAuthoredCourses:a,myAuthoredCourses:i,fetchPaginatedProgress:m,paginatedProgress:n}=p.useContext(_.EscolaLMSContext),[s,c]=p.useState([]),w=M(),{setQueryParam:f}=J(),{search:b}=$(),h=new URLSearchParams(b),d=h.get("page"),x=h.get("status"),S=p.useMemo(()=>{var t,r;return o===u.AUTHORED?(t=i.list)==null?void 0:t.meta:(r=n.list)==null?void 0:r.meta},[o,(R=i.list)==null?void 0:R.meta,(k=n.list)==null?void 0:k.meta]),g=p.useCallback(t=>{let r="";switch(t){case 1:case 5:break;case 2:r="started";break;case 3:r="planned";break;case 4:r="finished";break}return r},[]);p.useEffect(()=>{m({page:d?parseInt(d):1,per_page:18,status:g(Number(x))}),(o===u.ALL||o===u.AUTHORED)&&a()},[m,o,a,d,x,g]);const j=p.useMemo(()=>{var t;return(((t=n.list)==null?void 0:t.data)||[]).reduce((r,l)=>({...r,[l.course.id?l.course.id:-1]:Math.round((l.progress||[]).reduce((T,U)=>U.status===1?T+1:T,0)/l.progress.length*100)}),{})},[n]),C=p.useCallback(t=>t.map(r=>({...r.course,courseData:r,progress:j[r.course.id?r.course.id:-1]})),[j]);return p.useEffect(()=>{var t,r,l,T;o!==u.AUTHORED?c(C(((t=n.list)==null?void 0:t.data)||[])):o===u.AUTHORED?c(((r=i.list)==null?void 0:r.data)||[]):c([...C(((l=n.list)==null?void 0:l.data)||[]),...((T=i.list)==null?void 0:T.data)||[]])},[o,n,i,C]),{coursesToMap:s,paginationMeta:S,loading:n.loading||i.loading,handlePagination:t=>{f("page",`${t}`),window==null||window.scrollTo(0,0)},redirectToCourses:()=>w.push(A.courses)}},Z=E.div`
  position: relative;
`,V=({titleText:o,slidesPerView:a=4})=>{const{coursesToMap:i,loading:m}=Y(),n=M();return i.length===0?null:e.jsxs(Z,{children:[e.jsx("div",{className:"header-wrapper",children:e.jsx(B.Title,{className:"slider-title",level:1,as:"h2",children:e.jsx("strong",{children:o})})}),m&&e.jsx(L,{slidesPerView:a,children:Array.from({length:6}).map((s,c)=>e.jsx(P,{children:e.jsx(G,{})},c))}),!m&&i&&e.jsx(L,{slidesPerView:a,children:i.map(s=>e.jsx(P,{children:e.jsx(O.NewCourseCard,{mobile:N,id:s.id,image:e.jsx(H,{to:`/courses/${s.id}`,children:s.image_path?e.jsx(D.ResponsiveImage,{path:s.image_path,alt:s.title,srcSizes:[300,600,900]}):e.jsx(K,{})}),title:e.jsx(H,{to:`/courses/${s.id}`,children:e.jsx(B.Title,{level:3,as:"h3",className:"title",children:s.title})}),categories:e.jsx(X,{categories:s.categories,onCategoryClick:c=>{n.push(`/courses/?categories[]=${c}`)}}),progress:s.progress&&s.progress!==100&&!isNaN(s.progress)?{currentProgress:s.progress,maxProgress:100}:void 0})},s.id))})]})},ee=E.div`
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
    button {
      @media (max-width: 991px) {
      }
    }
  }

  .home-best-courses {
    @media (max-width: 768px) {
    }
  }

  .home-newest-courses {
    @media (max-width: 768px) {
    }
  }

  .promoted-courses-wrapper {
  }

  .categories-section-wrapper {
  }
`,v=E(I)`
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
`,ve=()=>{var w,f,b,h,d,x,S,g,j;const{categoryTree:o,settings:a,fetchCategories:i,user:m}=p.useContext(_.EscolaLMSContext),n=M(),{t:s,i18n:c}=z();return p.useEffect(()=>{i()},[i]),e.jsx(q,{metaTitle:s("Home"),children:e.jsxs(ee,{children:[e.jsx("section",{className:"home-hero",children:((w=a.value)==null?void 0:w.homepage)&&((f=a.value.homepage)==null?void 0:f.heroBannerText)&&((b=a.value.homepage)==null?void 0:b.heroBannerImg)&&((h=a.value.homepage)==null?void 0:h.heroBannerImg)!==""&&e.jsx(I,{children:e.jsx(W.Banner,{mobile:N,title:e.jsx(Q.MarkdownRenderer,{children:`<h1>${((d=a.value.homepage)==null?void 0:d.heroBannerText[c.language])||""}</h1>`}),btnText:s("Homepage.HeroBtnText"),asset:e.jsx(D.ResponsiveImage,{path:((S=(x=a==null?void 0:a.value)==null?void 0:x.homepage)==null?void 0:S.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>n.push(A.courses)})})}),((g=m.value)==null?void 0:g.id)&&e.jsx("section",{className:"home-newest-courses",children:e.jsx(v,{children:e.jsx(V,{titleText:s("Navbar.MyCourses")})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(v,{children:e.jsx(y,{titleText:s("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(v,{children:e.jsx(y,{titleText:s("Homepage.CoursesSlider1Title"),params:{per_page:8}})})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(v,{children:e.jsx(y,{titleText:s("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!N,ctaButton:!0})})}),o&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(F,{categories:((j=o.list)==null?void 0:j.filter(C=>!!C.icon))||[]})})]})})};export{ve as default};

import{q as g,h as T,i as j,f as w,j as e,T as B,B as b,k as C,C as S,r as v,l as y,L as H,m as _,n as N,o as u,M as R}from"./index-BTvwz0L3.js";import{R as k}from"./ResponsiveImage-G_l4wTjD.js";import{C as E}from"./index-BCstk8RY.js";import{C as I}from"./index-MGoobGEV.js";import{u as M}from"./useFetchCourses-B9Pdn2Rg.js";import{S as P,a as A}from"./swiper-react-BSSPoOCY.js";import"./index-ClhuH08r.js";import"./index-BHYkv3Er.js";const V=g(T.Container)`
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
`,d=({titleText:t,params:s,isSlider:m=!0,ctaButton:r})=>{const{courses:o,loading:a}=M(s),i=j(),{t:n}=w();return e.jsxs(V,{children:[e.jsxs("div",{className:"header-wrapper",children:[e.jsx(B.Title,{className:"slider-title",level:1,as:"h2",children:e.jsx("strong",{children:t})}),r&&e.jsx(b.Button,{mode:"outline",onClick:()=>i.push(C.courses),children:n("Homepage.AwardedCoursesBtnText")})]}),a&&e.jsx(P,{spaceBetween:18,slidesOffsetAfter:18,breakpoints:{0:{slidesPerView:1.3},576:{slidesPerView:2},768:{slidesPerView:3},1201:{slidesPerView:4}},children:Array.from({length:6}).map((l,p)=>e.jsx(A,{children:e.jsx(S,{})},p))}),!a&&o&&e.jsx(I,{courses:o.data,isSlider:m})]})},L=g.div`
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
`,J=()=>{var a,i,n,l,p,c,x,h;const{categoryTree:t,settings:s}=v.useContext(y.EscolaLMSContext),m=j(),{t:r,i18n:o}=w();return e.jsx(H,{metaTitle:r("Home"),children:e.jsxs(L,{children:[e.jsx("section",{className:"home-hero",children:((a=s.value)==null?void 0:a.homepage)&&((i=s.value.homepage)==null?void 0:i.heroBannerText)&&((n=s.value.homepage)==null?void 0:n.heroBannerImg)&&((l=s.value.homepage)==null?void 0:l.heroBannerImg)!==""&&e.jsx(_,{children:e.jsx(N.Banner,{mobile:u,title:e.jsx(R.MarkdownRenderer,{children:`<h1>${((p=s.value.homepage)==null?void 0:p.heroBannerText[o.language])||""}</h1>`}),btnText:r("Homepage.HeroBtnText"),asset:e.jsx(k.ResponsiveImage,{path:((x=(c=s==null?void 0:s.value)==null?void 0:c.homepage)==null?void 0:x.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>m.push(C.courses)})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(d,{titleText:r("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(d,{titleText:r("Homepage.CoursesSlider1Title"),params:{per_page:8}})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(d,{titleText:r("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!u,ctaButton:!0})}),t&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(E,{categories:((h=t.list)==null?void 0:h.filter(f=>!!f.icon))||[]})})]})})};export{J as default};

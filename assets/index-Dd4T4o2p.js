import{q as j,r as g,h as C,i as v,f as B,j as e,L as y,C as w,B as H,k as u,M as S,l as E}from"./index-Blo-PJs7.js";import{R}from"./ResponsiveImage-Dt4SFaY6.js";import{C as I}from"./index-CbjcyPo6.js";import{D as a}from"./index-eUrxqsvX.js";import"./swiper-react-Cl7FVjDz.js";import"./index-3c5NpFMV.js";import"./index-BRHuAp1f.js";import"./index-Cp2AHIQh.js";import"./index-DlFxAeba.js";import"./index-UKkASopu.js";import"./app-B2E7767C.js";import"./date-Dq-o8tMk.js";import"./CourseCard-1IILcvP7.js";const _=j.div`
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
`,s=j(w)`
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
`,J=()=>{var n,p,m,x,d,c,l,h;const{categoryTree:o,settings:t,fetchCategories:i}=g.useContext(C.EscolaLMSContext),f=v(),{t:r,i18n:T}=B();return g.useEffect(()=>{i()},[i]),e.jsx(y,{metaTitle:r("Home"),children:e.jsxs(_,{children:[e.jsx("section",{className:"home-hero",children:((n=t.value)==null?void 0:n.homepage)&&((p=t.value.homepage)==null?void 0:p.heroBannerText)&&((m=t.value.homepage)==null?void 0:m.heroBannerImg)&&((x=t.value.homepage)==null?void 0:x.heroBannerImg)!==""&&e.jsx(w,{children:e.jsx(H.Banner,{mobile:u,title:e.jsx(S.MarkdownRenderer,{children:`<h1>${((d=t.value.homepage)==null?void 0:d.heroBannerText[T.language])||""}</h1>`}),btnText:r("Homepage.HeroBtnText"),asset:e.jsx(R.ResponsiveImage,{path:((l=(c=t==null?void 0:t.value)==null?void 0:c.homepage)==null?void 0:l.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>f.push(E.courses)})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(s,{children:e.jsx(a,{titleText:r("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(s,{children:e.jsx(a,{titleText:r("Homepage.CoursesSlider1Title"),params:{per_page:8}})})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(s,{children:e.jsx(a,{titleText:r("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!u,ctaButton:!0})})}),o&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(I,{categories:((h=o.list)==null?void 0:h.filter(b=>!!b.icon))||[]})})]})})};export{J as default};

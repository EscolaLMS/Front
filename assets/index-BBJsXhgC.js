import{q as g,r as b,h as f,i as v,f as B,j as e,L as C,C as u,B as y,k as h,M as H,l as S}from"./index-Dgt1a0Cx.js";import{R}from"./ResponsiveImage-ghj5d5AC.js";import{C as E}from"./index-GSioCoFt.js";import{D as a}from"./index-CJ3nUeOD.js";import"./swiper-react-CkP-HQen.js";import"./index-8hOxIQ50.js";import"./index-Dp_qiSfW.js";import"./index-C29f-TlD.js";import"./index-DmY6vcHz.js";import"./index-B_M1NQ7l.js";import"./app-B2E7767C.js";import"./date-Bv1nYvSV.js";import"./CourseCard-DmF1lPsz.js";const I=g.div`
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
`,s=g(u)`
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
`,G=()=>{var i,n,p,m,x,d,l,c;const{categoryTree:o,settings:r}=b.useContext(f.EscolaLMSContext),j=v(),{t,i18n:w}=B();return e.jsx(C,{metaTitle:t("Home"),children:e.jsxs(I,{children:[e.jsx("section",{className:"home-hero",children:((i=r.value)==null?void 0:i.homepage)&&((n=r.value.homepage)==null?void 0:n.heroBannerText)&&((p=r.value.homepage)==null?void 0:p.heroBannerImg)&&((m=r.value.homepage)==null?void 0:m.heroBannerImg)!==""&&e.jsx(u,{children:e.jsx(y.Banner,{mobile:h,title:e.jsx(H.MarkdownRenderer,{children:`<h1>${((x=r.value.homepage)==null?void 0:x.heroBannerText[w.language])||""}</h1>`}),btnText:t("Homepage.HeroBtnText"),asset:e.jsx(R.ResponsiveImage,{path:((l=(d=r==null?void 0:r.value)==null?void 0:d.homepage)==null?void 0:l.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>j.push(S.courses)})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(s,{children:e.jsx(a,{titleText:t("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(s,{children:e.jsx(a,{titleText:t("Homepage.CoursesSlider1Title"),params:{per_page:8}})})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(s,{children:e.jsx(a,{titleText:t("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!h,ctaButton:!0})})}),o&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(E,{categories:((c=o.list)==null?void 0:c.filter(T=>!!T.icon))||[]})})]})})};export{G as default};

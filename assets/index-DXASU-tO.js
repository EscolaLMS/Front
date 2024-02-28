import{q as j,r as g,h as C,i as v,f as B,j as e,L as y,C as w,B as H,k as u,M as S,l as E}from"./index-OGDo-hkl.js";import{R}from"./ResponsiveImage-dgTLmURN.js";import{C as I}from"./index-DbvMYWQb.js";import{D as s}from"./index-C0T9cc3c.js";import"./swiper-react-LoObXzUJ.js";import"./index-DF8CFjlI.js";import"./index-CkkSfJi5.js";import"./index-DeyRTtVF.js";import"./index-BAF1aJt1.js";import"./CourseCard-BlyWBZq_.js";const _=j.div`
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
`,r=j(w)`
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
`,$=()=>{var n,p,m,x,d,c,l,h;const{categoryTree:o,settings:t,fetchCategories:i}=g.useContext(C.EscolaLMSContext),f=v(),{t:a,i18n:T}=B();return g.useEffect(()=>{i()},[i]),e.jsx(y,{metaTitle:a("Home"),children:e.jsxs(_,{children:[e.jsx("section",{className:"home-hero",children:((n=t.value)==null?void 0:n.homepage)&&((p=t.value.homepage)==null?void 0:p.heroBannerText)&&((m=t.value.homepage)==null?void 0:m.heroBannerImg)&&((x=t.value.homepage)==null?void 0:x.heroBannerImg)!==""&&e.jsx(w,{children:e.jsx(H.Banner,{mobile:u,title:e.jsx(S.MarkdownRenderer,{children:`<h1>${((d=t.value.homepage)==null?void 0:d.heroBannerText[T.language])||""}</h1>`}),btnText:a("Homepage.HeroBtnText"),asset:e.jsx(R.ResponsiveImage,{path:((l=(c=t==null?void 0:t.value)==null?void 0:c.homepage)==null?void 0:l.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>f.push(E.courses)})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(r,{children:e.jsx(s,{titleText:a("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(r,{children:e.jsx(s,{titleText:a("Homepage.CoursesSlider1Title"),params:{per_page:8}})})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(r,{children:e.jsx(s,{titleText:a("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!u,ctaButton:!0})})}),o&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(I,{categories:((h=o.list)==null?void 0:h.filter(b=>!!b.icon))||[]})})]})})};export{$ as default};

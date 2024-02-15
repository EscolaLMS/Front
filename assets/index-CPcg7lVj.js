import{r as t,h as E,f as S,j as e,i as N,T as v,q as H,k as L,l as R,L as I,C as w,B as M,m as _,M as k,n as P}from"./index-Duhnd3NG.js";import{R as q}from"./ResponsiveImage-CKPbfW5t.js";import{C as T}from"./index-B_TZyTLB.js";import{P as z}from"./index-y4L-S5c0.js";import{C as D}from"./index-BeZgrGw9.js";import{C as b}from"./index-CDaAQ3M0.js";import"components/atoms/Typography/Text";import"./index-B7aoIFqz.js";import"./index-DxBA_noo.js";import"./index-s_L9J9A7.js";import"./index-C5wfF83u.js";const $=()=>{const[r,i]=t.useState(),[o,a]=t.useState(!0),{fetchCourses:n}=t.useContext(E.EscolaLMSContext),{t:m}=S();return t.useEffect(()=>{n({per_page:8,order_by:"created_at",order:"DESC"}).then(c=>{i(c.data||[])}).catch(()=>a(!1)).finally(()=>a(!1))},[n]),e.jsxs(N.Container,{children:[e.jsx(v.Title,{className:"slider-title",level:3,as:"h1",children:e.jsx("strong",{children:m("Homepage.CoursesSlider2Title")})}),o&&e.jsx(b,{}),!o&&r&&e.jsx(T,{courses:r})]})},A=H.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-top: 0;
  }
  @media (max-width: 575px) {
    margin-top: -30px;
  }
  .home-hero {
    margin-bottom: 45px;
    padding-top: 42px;
    order: 1;
    h1 {
      margin-top: 0 !important;
    }
    @media (max-width: 768px) {
      margin-bottom: 30px;
      padding-top: 0;
      h1 {
        font-size: 26px;
      }
    }
    button {
      @media (max-width: 991px) {
        width: 100%;
      }
    }
  }

  .home-best-courses {
    margin: 40px 0;
    order: 2;
    @media (max-width: 768px) {
      margin: 30px 0;
    }
  }

  .home-newest-courses {
    order: 1;
    margin: 40px 0;
    @media (max-width: 768px) {
      margin: 30px 0;
    }
  }

  .promoted-courses-wrapper {
    order: 3;
  }

  .categories-section-wrapper {
    order: 5;
  }
`,Z=()=>{var p,x,h,u,g,j,f,C;const[r,i]=t.useState(),[o,a]=t.useState(!0),{categoryTree:n,fetchCategories:m,fetchCourses:c,settings:s}=t.useContext(L.EscolaLMSContext),B=R(),{t:l,i18n:y}=S();return t.useEffect(()=>{c({per_page:8}).then(d=>{i(d.data)}).catch(()=>a(!1)).finally(()=>a(!1)),m()},[]),e.jsx(I,{metaTitle:l("Home"),children:e.jsxs(A,{children:[e.jsx("section",{className:"home-hero",children:((p=s.value)==null?void 0:p.homepage)&&((x=s.value.homepage)==null?void 0:x.heroBannerText)&&((h=s.value.homepage)==null?void 0:h.heroBannerImg)&&((u=s.value.homepage)==null?void 0:u.heroBannerImg)!==""&&e.jsx(w,{children:e.jsx(M.Banner,{mobile:_,title:e.jsx(k.MarkdownRenderer,{children:`<h1>${((g=s.value.homepage)==null?void 0:g.heroBannerText[y.language])||""}</h1>`}),btnText:l("Homepage.HeroBtnText"),asset:e.jsx(q.ResponsiveImage,{path:((f=(j=s==null?void 0:s.value)==null?void 0:j.homepage)==null?void 0:f.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>B.push(P.courses)})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx($,{})}),e.jsx("section",{className:"home-best-courses",children:e.jsxs(w,{children:[e.jsx(v.Title,{className:"slider-title",level:3,as:"h1",children:e.jsx("strong",{children:l("Homepage.CoursesSlider1Title")})}),o&&e.jsx(b,{}),!o&&r&&e.jsx(T,{courses:r})]})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(z,{})}),n&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(D,{categories:((C=n.list)==null?void 0:C.filter(d=>!!d.icon))||[]})})]})})};export{Z as default};

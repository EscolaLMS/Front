import{q as d,h as x,k as g,j as e,C as p,T as m,o as u,az as n,a1 as r,aA as c}from"./index-BJhtOcuL.js";import{a as h,S as j}from"./swiper-react-BloDJTZK.js";const C=d.section`
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
`,w=d.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 10px;
`,T=({categories:l,entity:s})=>{const{t}=x(),a=g(),o=l.filter(i=>i.count&&i.count>0);return e.jsx(C,{children:e.jsxs(p,{children:[e.jsx(m.Title,{level:1,as:"h2",children:e.jsx("strong",{children:t("Homepage.CategoriesTitle")})}),u?e.jsx("div",{className:"categories-slider",children:e.jsx(h,{spaceBetween:18,slidesOffsetAfter:18,breakpoints:{0:{slidesPerView:1.3},576:{slidesPerView:2},768:{slidesPerView:3},1201:{slidesPerView:4}},children:o.slice(-5).map(i=>e.jsx(j,{children:e.jsx(n.CategoryCard,{icon:e.jsx("img",{src:i.icon,alt:i.name}),title:i.name,buttonText:t("Homepage.CategoryBtnText"),subtitle:e.jsx(r.IconText,{icon:e.jsx(c,{}),text:`${t("CoursesLength",{count:i.count})}`}),onButtonClick:()=>a.push(`/${s}/?categories[]=${i.id}`),variant:"gradient"})},i.id))})}):e.jsx(w,{children:o.slice(-5).map(i=>e.jsx("div",{className:"category-item",children:e.jsx(n.CategoryCard,{icon:e.jsx("img",{src:i.icon,alt:i.name}),title:i.name,buttonText:t("Homepage.CategoryBtnText"),subtitle:e.jsx(r.IconText,{icon:e.jsx(c,{}),text:`${t("CoursesLength",{count:i.count})}`}),onButtonClick:()=>a.push(`/${s}/?categories[]=${i.id}`),variant:"gradient"})},i.id))})]})})};export{T as C};
//# sourceMappingURL=index-ChwhPtxO.js.map

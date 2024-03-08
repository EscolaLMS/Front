import{q as c,f as l,i as x,j as e,C as g,T as p,n as m,aN as o,J as n,N as r}from"./index-C31D5yYy.js";import{a as u,S as h}from"./swiper-react-BdGy-X-Q.js";const j=c.section`
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
`,C=c.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 10px;
`,f=({categories:d})=>{const{t:s}=l(),t=x(),a=d.filter(i=>i.count&&i.count>0);return e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p.Title,{level:1,as:"h2",children:e.jsx("strong",{children:s("Homepage.CategoriesTitle")})}),m?e.jsx("div",{className:"categories-slider",children:e.jsx(u,{spaceBetween:18,slidesOffsetAfter:18,breakpoints:{0:{slidesPerView:1.3},576:{slidesPerView:2},768:{slidesPerView:3},1201:{slidesPerView:4}},children:a.slice(-5).map(i=>e.jsx(h,{children:e.jsx(o.CategoryCard,{icon:e.jsx("img",{src:i.icon,alt:i.name}),title:i.name,buttonText:s("Homepage.CategoryBtnText"),subtitle:e.jsx(n.IconText,{icon:e.jsx(r,{}),text:`${s("CoursesLength",{count:i.count})}`}),onButtonClick:()=>t.push(`/courses/?categories[]=${i.id}`),variant:"gradient"})},i.id))})}):e.jsx(C,{children:a.slice(-5).map(i=>e.jsx("div",{className:"category-item",children:e.jsx(o.CategoryCard,{icon:e.jsx("img",{src:i.icon,alt:i.name}),title:i.name,buttonText:s("Homepage.CategoryBtnText"),subtitle:e.jsx(n.IconText,{icon:e.jsx(r,{}),text:`${s("CoursesLength",{count:i.count})}`}),onButtonClick:()=>t.push(`/courses/?categories[]=${i.id}`),variant:"gradient"})},i.id))})]})})};export{f as C};

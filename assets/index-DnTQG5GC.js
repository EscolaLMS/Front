import{q as g,r as p,f as u,m,j as e,C as h,T as j,n as C,ak as T,ax as a,Q as n,Y as r,i as c}from"./index-BsLXwVX-.js";const y=g.section`
  overflow: hidden;
  padding: 60px 0 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
  h3 {
    text-align: center;
    margin-bottom: 30px;
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
`,b=({categories:l})=>{const[d]=p.useState(!0),{t:s}=u(),i=m(),x={arrows:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,centerMode:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]},o=l.filter(t=>t.count&&t.count>0);return e.jsx(y,{children:e.jsxs(h,{children:[e.jsx(j.Title,{level:3,children:e.jsx("strong",{children:s("Homepage.CategoriesTitle")})}),C?e.jsx("div",{className:"categories-slider",children:e.jsx(T.Slider,{settings:{...x,dots:d},dotsPosition:"bottom",children:o.slice(-4).map(t=>e.jsx("div",{className:"single-category-slide",children:e.jsx(a.CategoryCard,{icon:e.jsx("img",{src:t.icon,alt:t.name}),title:t.name,buttonText:s("Homepage.CategoryBtnText"),subtitle:e.jsx(n.IconText,{icon:e.jsx(r,{}),text:`${s("CoursesLength",{count:t.count})}`}),onButtonClick:()=>i.push(`/courses/?categories[]=${t.id}`),variant:"gradient"})},t.id))})}):e.jsx(c.Row,{children:o.slice(-4).map(t=>e.jsx(c.Col,{md:3,children:e.jsx(a.CategoryCard,{icon:e.jsx("img",{src:t.icon,alt:t.name}),title:t.name,buttonText:s("Homepage.CategoryBtnText"),subtitle:e.jsx(n.IconText,{icon:e.jsx(r,{}),text:`${s("CoursesLength",{count:t.count})}`}),onButtonClick:()=>i.push(`/courses/?categories[]=${t.id}`),variant:"gradient"})},t.id))})]})})};export{b as C};

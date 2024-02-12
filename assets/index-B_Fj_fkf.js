import{q as d,X as y,j as s,G as w,r as _,v as a,m as v,f as I,n as x,ak as E,H as h,l as A,s as g,Q as c,U as j,J as S,i as m}from"./index-BsLXwVX-.js";import{C as T}from"./index-2LkLTXFl.js";import{R as b}from"./ResponsiveImage-KgADMS5g.js";import{C}from"./index-B1fleA7X.js";import{T as $}from"./index-DrXkeQ_F.js";import{C as f}from"./index-Dv47bB8G.js";const p=d.span`
  color: ${o=>o.color};
`,R=d.span`
  color: ${o=>o.color};
  ${p}:hover & {
    display: none;
  }
`,q=d.span`
  color: ${o=>o.color};
  display: none;
  ${p}:hover & {
    display: block;
  }
`,F=({text:o,length:l=30,tail:n="...",...r})=>{const i=y(),e=o.slice(0,l),t=o.slice(l,o.length);return s.jsx(w.Text,{...r,children:s.jsxs(p,{color:i.primaryColor,children:[e,t&&s.jsxs(s.Fragment,{children:[s.jsx(R,{children:n}),s.jsx(q,{children:t})]})]})})},H=_.memo(({linkTo:o,subtitle:l,textLength:n})=>{const r=y();return l?s.jsx(a,{style:{color:r.primaryColor},to:o,children:s.jsx(F,{text:l,bold:!0,size:"12",length:n})}):null}),k=({...o})=>{if(o.subtitle)return s.jsx(H,{...o})},B=d.div`
  @media (max-width: 575px) {
    margin-left: -59px;
  }
  .slick-slider {
    @media (max-width: 575px) {
      width: calc(100% + 15px);
    }
  }
  .slick-dots {
    top: -65px;
    @media (max-width: 575px) {
      top: -30px !important;
      right: unset !important;
      left: 60px !important;
    }
  }
  .slick-track {
    display: flex;
    gap: 0 20px;
    @media (max-width: 991px) {
      padding-bottom: 20px;
    }
  }

  .slick-slide {
    height: inherit;

    > div {
      display: flex;
      height: 100%;
    }
  }
`,L={arrows:!1,infinite:!0,speed:500,draggable:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1201,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},V=({courses:o,sliderSettings:l=L})=>{const[n]=_.useState(!0),r=v(),{t:i}=I();return s.jsx(B,{children:o.length>=5||x?s.jsx("div",{children:s.jsx(E.Slider,{settings:{...l,dots:n,onSwipe:()=>{const e=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(u=>u.removeAttribute("aria-modal")),e.forEach(u=>u.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(t=>t.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:o&&o.map(e=>s.jsx(C,{children:s.jsx(h,{mobile:x,id:e.id,image:s.jsx(a,{to:`/courses/${e.id}`,children:e.image_path?s.jsx(b.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):s.jsx(T,{})}),tags:s.jsx($,{tags:e.tags,onTagClick:t=>r.push(`/courses/?tag=${t}`)}),subtitle:k({subtitle:e.subtitle,linkTo:`/courses/${e.id}`}),title:s.jsx(a,{to:`/courses/${e.id}`,className:"title",children:s.jsx(A.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(f,{categories:e.categories,onCategoryClick:t=>{r.push(`/courses/?categories[]=${t}`)}}),actions:s.jsx(s.Fragment,{children:s.jsx(g.Button,{mode:"secondary",onClick:()=>r.push(`/courses/${e.id}`),children:i("StartNow")})}),footer:s.jsxs(s.Fragment,{children:[e.users_count&&e.users_count>0?s.jsx(c.IconText,{icon:s.jsx(j,{}),text:`${e.users_count} ${i("Students")}`}):""," ",e.lessons_count&&e.lessons_count>0?s.jsx(c.IconText,{icon:s.jsx(S,{}),text:`${e.lessons_count} ${i("Lessons")}`}):""]})})},e.id))})}):s.jsx(m.Row,{style:{marginTop:"30px",rowGap:"60px"},children:o.map(e=>s.jsx(m.Col,{md:6,lg:3,children:s.jsx(C,{children:s.jsx(h,{mobile:x,id:e.id,image:s.jsx(a,{to:`/courses/${e.id}`,children:e.image_path?s.jsx(b.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):s.jsx(T,{})}),tags:s.jsx($,{tags:e.tags,onTagClick:t=>r.push(`/courses/?tag=${t}`)}),subtitle:k({subtitle:e.subtitle,linkTo:`/courses/${e.id}`}),title:s.jsx(a,{to:`/courses/${e.id}`,children:e.title}),categories:s.jsx(f,{categories:e.categories,onCategoryClick:t=>{r.push(`/courses/?categories[]=${t}`)}}),actions:s.jsx(s.Fragment,{children:s.jsx(g.Button,{mode:"secondary",onClick:()=>r.push(`/courses/${e.id}`),children:i("StartNow")})}),footer:s.jsxs(s.Fragment,{children:[e.users_count&&e.users_count>0?s.jsx(c.IconText,{icon:s.jsx(j,{}),text:`${e.users_count} ${i("Students")}`}):""," ",e.lessons_count&&e.lessons_count>0?s.jsx(c.IconText,{icon:s.jsx(S,{}),text:`${e.lessons_count} ${i("Lessons")}`}):""]})})},e.id)},e.id))})})};export{V as C,k as g};

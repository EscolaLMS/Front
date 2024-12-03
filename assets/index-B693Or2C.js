import{k as E,j as e,V as o,T as h,o as N,s as H,q as g,r as f,i as _,h as z,W as P,p as B,y as k,z as j,m as C,a1 as y,al as A,am as q,an as L,ao as D,ap as V,Q as G,v as Q,C as T,L as I,af as W,M as U}from"./index-DSCUWzSv.js";import{P as J}from"./index-DJ1960S2.js";import{B as K}from"./index-m6SRtTiK.js";import{b as O}from"./CourseCard-lCEjaTYC.js";import{P as R}from"./PricingCard-CzaxcLSc.js";import{C as $}from"./index-BU6BMlLh.js";import{S as M,a as X,b as Y}from"./sidebar-B_h_ZqDF.js";import{S as p}from"./index-C483pC0F.js";import"./floating-ui.react-dom-CTdYFKzF.js";import"./index-BE9PI57n.js";import"./questionnaire-CXWDgbJ4.js";import"./index-w-Z9NoFv.js";import"./questionnaires-De7YnJrd.js";import"./index-DOjDNS20.js";import"./swiper-react-ft3sPPqI.js";import"./swiper-DpuCcnoW.js";import"./a11y-2tju78nt.js";import"./useFetchCourses-CuIIjPf-.js";const Z=i=>{const{consultation:s}=i,t=E();return e.jsxs(o.Row,{align:"center",children:[e.jsxs(o.Col,{lg:7,children:[(s==null?void 0:s.categories)&&s.categories.length>0&&e.jsx(O,{categories:s.categories,onCategoryClick:u=>{t.push(`/consultations/?categories[]=${u}`)}}),e.jsx("br",{}),e.jsx(h.Title,{mobile:N,level:1,children:s==null?void 0:s.name})]}),e.jsx(o.Col,{lg:4,children:(s==null?void 0:s.image_path)&&e.jsx("div",{className:"image-wrapper",children:e.jsx(H.ResponsiveImage,{path:s.image_path,srcSizes:[790*.5,790,2*790]})})})]})};g.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`;const ee=g.div`
  padding: 50px 45px;
  margin: 45px 0 0;
  background-color: ${({theme:i})=>i.mode==="dark"?i.gray1:i.gray5};
  border-radius: ${({theme:i})=>i.cardRadius}px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`,se=g.section`
  background-color: ${({theme:i})=>i.mode==="dark"?i.gray1:i.gray5};
  padding: 20px 0;
  margin-top: 60px;
`,te=g.div`
  width: 100%;
  left: 0;
  position: sticky;
  top: 130px;
  bottom: unset;
  z-index: 100;
`,ie=g.div`
  width: 100%;
  left: 0;
  position: fixed;
  top: unset;
  bottom: 0;
  z-index: 100;
`,re=i=>{var l,d,b,S;const{consultation:s}=i,{cart:t,addToCart:u,user:m}=f.useContext(_.EscolaLMSContext),{t:r}=z(),{push:a}=E(),n=f.useMemo(()=>{var c;return(c=t==null?void 0:t.value)==null?void 0:c.items.some(x=>{var v;return Number(x.product_id)===Number((v=s==null?void 0:s.product)==null?void 0:v.id)})},[(l=s==null?void 0:s.product)==null?void 0:l.id,t]);return N?e.jsx(ie,{children:e.jsxs(R.PricingCard,{mobile:!0,children:[e.jsx(h.Title,{level:5,as:"h5",children:r("ConsultationPage.SidebarHeader")}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsx("div",{children:e.jsx(h.Title,{level:4,as:"h4",style:{marginBottom:10},children:(s==null?void 0:s.product)&&`${P(s.product.price,s.product.tax_rate)} zł`})}),e.jsx("div",{children:B(new Date((s==null?void 0:s.active_to)||""))?e.jsx(k.Text,{children:r("ConsultationPage.IsFinished")}):n?e.jsx(j.Button,{mode:"secondary",block:!0,onClick:()=>a(C.cart),children:r("ConsultationPage.GoToCheckout")}):m.value&&((d=s==null?void 0:s.product)!=null&&d.purchasable)?e.jsx(j.Button,{loading:t.loading,block:!0,mode:"secondary",onClick:()=>{var c;return u(Number((c=s.product)==null?void 0:c.id)).then(()=>a(C.cart))},children:r("ConsultationPage.BuyConsultation")}):e.jsx(j.Button,{block:!0,onClick:()=>a(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")})})]})]})}):e.jsx(te,{children:e.jsxs(R.PricingCard,{children:[e.jsx(h.Title,{level:4,as:"h2",children:r("ConsultationPage.SidebarHeader")}),e.jsx(h.Title,{level:3,as:"h3",style:{marginTop:20},children:(s==null?void 0:s.product)&&`${P(s.product.price,s.product.tax_rate)} zł`}),e.jsx(y.IconText,{icon:e.jsx(A,{}),text:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:(b=s==null?void 0:s.product)==null?void 0:b.duration})," -"," ",r("Consultation")]}),style:{marginTop:20}}),B(new Date((s==null?void 0:s.active_to)||""))?e.jsx(k.Text,{children:r("ConsultationPage.IsFinished")}):n?e.jsx(j.Button,{mode:"secondary",onClick:()=>a(C.cart),children:r("ConsultationPage.GoToCheckout")}):m.value&&((S=s==null?void 0:s.product)!=null&&S.purchasable)?e.jsx(j.Button,{loading:t.loading,mode:"secondary",onClick:()=>{var c;return u(Number((c=s.product)==null?void 0:c.id)).then(()=>a(C.cart))},children:r("ConsultationPage.BuyConsultation")}):e.jsx(j.Button,{onClick:()=>a(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")}),e.jsx(y.IconText,{icon:e.jsx(q,{}),text:r("ConsultationPage.SidebarFeature1")}),e.jsx(y.IconText,{icon:e.jsx(L,{}),text:r("ConsultationPage.SidebarFeature2")}),e.jsx(y.IconText,{icon:e.jsx(D,{}),text:r("ConsultationPage.SidebarFeature3"),noMargin:!0})]})})},oe=g.section`
  padding: 40px 0;

  .slick-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .slick-dots {
    top: -65px;
  }
`,ne={arrows:!1,infinite:!0,speed:500,slidesToShow:4,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},ae=i=>{const{category:s,title:t=s,consultations:u,sliderSettings:m=ne}=i,[r]=f.useState(!0),a=u.filter(n=>{var l;return(l=n.categories)==null?void 0:l.some(d=>d.name===s)});return e.jsxs(oe,{children:[e.jsx(h.Title,{level:3,style:{marginBottom:30},children:t}),a.length>4?e.jsx(V.Slider,{settings:{...m,dots:r,onSwipe:()=>{const n=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(d=>d.removeAttribute("aria-modal")),n.forEach(d=>d.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(l=>l.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:a.map(n=>e.jsx($,{consultation:n},n.id))}):e.jsx(o.Row,{children:a.map(n=>e.jsx(o.Col,{xs:12,sm:6,md:4,lg:3,children:e.jsx($,{consultation:n})},n.id))})]})},le=g.div`
  position: relative;
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,de=()=>e.jsxs(le,{children:[e.jsx(p,{width:"20px",style:{marginBottom:"5px"}}),e.jsxs(o.Row,{children:[e.jsx(o.Col,{style:{marginTop:"120px"},md:7,children:e.jsx(p,{height:45,style:{marginBottom:"10px"}})}),e.jsx(o.Col,{children:e.jsx(p,{height:300,style:{marginBottom:"10px"}})})]}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(p,{width:"100%",height:20,count:12,style:{marginBottom:"5px"}})})," ",e.jsxs("div",{className:"tutors",children:[e.jsx(p,{circle:!0,width:"112px",height:"112px"}),e.jsxs("div",{children:[e.jsx(p,{width:"140px",style:{marginBottom:"20px"}}),e.jsx(p,{width:"140px",count:2})]})]})]}),ce=()=>{var a,n,l,d,b,S,c;const{t:i}=z(),{id:s}=G(),{consultation:t,fetchConsultation:u,consultations:m}=f.useContext(_.EscolaLMSContext),r=(n=(a=t.value)==null?void 0:a.categories)==null?void 0:n.map(x=>x.name);return f.useEffect(()=>{s&&u(Number(s))},[s]),t.loading&&!((l=t.value)!=null&&l.id)?e.jsx(J,{}):t.error?e.jsx("pre",{children:t.error.message}):e.jsxs(Q,{metaTitle:`${i("Consultation")} ${(d=t.value)==null?void 0:d.name}`,children:[t.loading&&e.jsx(e.Fragment,{children:e.jsx(M,{children:e.jsx(T,{children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{md:12,lg:8,children:e.jsx(de,{})}),e.jsx(o.Col,{md:12,lg:3,offset:{lg:1},children:e.jsx(X,{})})]})})})}),!t.loading&&e.jsx(M,{children:e.jsx(T,{children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{xs:12,children:e.jsx(K,{items:[e.jsx(I,{to:C.home,children:i("Home")}),e.jsx(I,{to:C.consultations,children:i("Consultations")}),e.jsx(k.Text,{size:"12",children:(b=t==null?void 0:t.value)==null?void 0:b.name})]})}),e.jsx(o.Col,{xs:12,md:9,children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{md:12,children:e.jsx(Z,{consultation:t.value})}),e.jsx(o.Col,{md:12,children:((S=t==null?void 0:t.value)==null?void 0:S.description)&&W(t.value.description)!==""&&e.jsx(ee,{children:e.jsx(U.MarkdownRenderer,{children:t.value.description})})}),e.jsxs(o.Col,{md:12,children:[" ",e.jsx("br",{}),e.jsx(h.Title,{as:"h3",level:4,className:"title",children:i("ConsultationPage.Teacher")}),t.value&&t.value.teachers.map(x=>e.jsx(Y,{author:x}))]})]})}),((c=t==null?void 0:t.value)==null?void 0:c.product)&&e.jsx(o.Col,{xs:12,md:3,children:e.jsx(re,{consultation:t.value})})]})})}),r&&r.length>0&&e.jsx(se,{children:e.jsx(T,{children:r.map(x=>{var v,w;return e.jsx(ae,{category:x,title:`${i("Inni specjaliści")} ${x}`,consultations:((w=(v=m==null?void 0:m.list)==null?void 0:v.data)==null?void 0:w.filter(F=>F.id!==Number(s)))||[]},x)})})})]})},Ie=()=>e.jsx(ce,{});export{Ie as default};

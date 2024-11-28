import{k as E,j as e,V as a,T as j,o as _,s as N,q as g,r as v,i as z,h as F,W as B,p as P,y as T,z as h,m as C,a1 as f,at as A,au as q,av as L,aw as D,ax as V,Q as G,v as Q,C as k,L as I,an as W,M as U}from"./index-BqSOc7pd.js";import{P as J}from"./index-Bo070MHw.js";import{B as K}from"./index-CTTrBn80.js";import{a as O}from"./index-CQART5pN.js";import{P as R}from"./PricingCard-BSqQ2qIH.js";import{C as $}from"./index-DnPQP2A3.js";import{S as M,a as X}from"./sidebar-BFrUZ9mN.js";import{S as p}from"./index-C4SeeOYt.js";import"./floating-ui.react-dom-DLwwW5-O.js";import"./index-C4zwrq8c.js";const Y=i=>{const{consultation:t}=i,s=E();return e.jsxs(a.Row,{align:"center",children:[e.jsxs(a.Col,{lg:7,children:[(t==null?void 0:t.categories)&&t.categories.length>0&&e.jsx(O,{categories:t.categories,onCategoryClick:x=>{s.push(`/consultations/?categories[]=${x}`)}}),e.jsx("br",{}),e.jsx(j.Title,{mobile:_,level:1,children:t==null?void 0:t.name})]}),e.jsx(a.Col,{lg:4,children:(t==null?void 0:t.image_path)&&e.jsx("div",{className:"image-wrapper",children:e.jsx(N.ResponsiveImage,{path:t.image_path,srcSizes:[790*.5,790,2*790]})})})]})};g.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`;const Z=g.div`
  padding: 50px 45px;
  margin: 45px 0 0;
  background-color: ${({theme:i})=>i.mode==="dark"?i.gray1:i.gray5};
  border-radius: ${({theme:i})=>i.cardRadius}px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`,ee=g.section`
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
`,se=g.div`
  width: 100%;
  left: 0;
  position: fixed;
  top: unset;
  bottom: 0;
  z-index: 100;
`,ie=i=>{var l,d,S,b;const{consultation:t}=i,{cart:s,addToCart:x,user:u}=v.useContext(z.EscolaLMSContext),{t:o}=F(),{push:n}=E(),r=v.useMemo(()=>{var c;return(c=s==null?void 0:s.value)==null?void 0:c.items.some(m=>{var y;return Number(m.product_id)===Number((y=t==null?void 0:t.product)==null?void 0:y.id)})},[(l=t==null?void 0:t.product)==null?void 0:l.id,s]);return _?e.jsx(se,{children:e.jsxs(R.PricingCard,{mobile:!0,children:[e.jsx(j.Title,{level:5,as:"h5",children:o("ConsultationPage.SidebarHeader")}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsx("div",{children:e.jsx(j.Title,{level:4,as:"h4",style:{marginBottom:10},children:(t==null?void 0:t.product)&&`${B(t.product.price,t.product.tax_rate)} zł`})}),e.jsx("div",{children:P(new Date((t==null?void 0:t.active_to)||""))?e.jsx(T.Text,{children:o("ConsultationPage.IsFinished")}):r?e.jsx(h.Button,{mode:"secondary",block:!0,onClick:()=>n(C.cart),children:o("ConsultationPage.GoToCheckout")}):u.value&&((d=t==null?void 0:t.product)!=null&&d.purchasable)?e.jsx(h.Button,{loading:s.loading,block:!0,mode:"secondary",onClick:()=>{var c;return x(Number((c=t.product)==null?void 0:c.id)).then(()=>n(C.cart))},children:o("ConsultationPage.BuyConsultation")}):e.jsx(h.Button,{block:!0,onClick:()=>n(`/login?referrer=/consultations/${t==null?void 0:t.id}`),mode:"secondary",children:o("ConsultationPage.BuyConsultation")})})]})]})}):e.jsx(te,{children:e.jsxs(R.PricingCard,{children:[e.jsx(j.Title,{level:4,as:"h2",children:o("ConsultationPage.SidebarHeader")}),e.jsx(j.Title,{level:3,as:"h3",style:{marginTop:20},children:(t==null?void 0:t.product)&&`${B(t.product.price,t.product.tax_rate)} zł`}),e.jsx(f.IconText,{icon:e.jsx(A,{}),text:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:(S=t==null?void 0:t.product)==null?void 0:S.duration})," -"," ",o("Consultation")]}),style:{marginTop:20}}),P(new Date((t==null?void 0:t.active_to)||""))?e.jsx(T.Text,{children:o("ConsultationPage.IsFinished")}):r?e.jsx(h.Button,{mode:"secondary",onClick:()=>n(C.cart),children:o("ConsultationPage.GoToCheckout")}):u.value&&((b=t==null?void 0:t.product)!=null&&b.purchasable)?e.jsx(h.Button,{loading:s.loading,mode:"secondary",onClick:()=>{var c;return x(Number((c=t.product)==null?void 0:c.id)).then(()=>n(C.cart))},children:o("ConsultationPage.BuyConsultation")}):e.jsx(h.Button,{onClick:()=>n(`/login?referrer=/consultations/${t==null?void 0:t.id}`),mode:"secondary",children:o("ConsultationPage.BuyConsultation")}),e.jsx(f.IconText,{icon:e.jsx(q,{}),text:o("ConsultationPage.SidebarFeature1")}),e.jsx(f.IconText,{icon:e.jsx(L,{}),text:o("ConsultationPage.SidebarFeature2")}),e.jsx(f.IconText,{icon:e.jsx(D,{}),text:o("ConsultationPage.SidebarFeature3"),noMargin:!0})]})})},oe=g.section`
  padding: 40px 0;

  .slick-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .slick-dots {
    top: -65px;
  }
`,re={arrows:!1,infinite:!0,speed:500,slidesToShow:4,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},ne=i=>{const{category:t,title:s=t,consultations:x,sliderSettings:u=re}=i,[o]=v.useState(!0),n=x.filter(r=>{var l;return(l=r.categories)==null?void 0:l.some(d=>d.name===t)});return e.jsxs(oe,{children:[e.jsx(j.Title,{level:3,style:{marginBottom:30},children:s}),n.length>4?e.jsx(V.Slider,{settings:{...u,dots:o,onSwipe:()=>{const r=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(d=>d.removeAttribute("aria-modal")),r.forEach(d=>d.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(l=>l.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:n.map(r=>e.jsx($,{consultation:r},r.id))}):e.jsx(a.Row,{children:n.map(r=>e.jsx(a.Col,{xs:12,sm:6,md:4,lg:3,children:e.jsx($,{consultation:r})},r.id))})]})},ae=g.div`
  position: relative;
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,le=()=>e.jsxs(ae,{children:[e.jsx(p,{width:"20px",style:{marginBottom:"5px"}}),e.jsx(p,{width:"40%",height:37,style:{marginBottom:"10px"}}),e.jsx(p,{width:"40%",style:{marginBottom:"10px"}})," ",e.jsx(p,{width:"100%",height:490,style:{marginBottom:"40px"}}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(p,{width:"100%",count:4,style:{marginBottom:"5px"}})}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(p,{width:"100%",count:5,style:{marginBottom:"5px"}})})," ",e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(p,{width:"100%",count:5,style:{marginBottom:"5px"}})})," "]}),de=()=>{var n,r,l,d,S,b,c;const{t:i}=F(),{id:t}=G(),{consultation:s,fetchConsultation:x,consultations:u}=v.useContext(z.EscolaLMSContext),o=(r=(n=s.value)==null?void 0:n.categories)==null?void 0:r.map(m=>m.name);return v.useEffect(()=>{t&&x(Number(t))},[t]),s.loading&&!((l=s.value)!=null&&l.id)?e.jsx(J,{}):s.error?e.jsx("pre",{children:s.error.message}):e.jsxs(Q,{metaTitle:`${i("Consultation")} ${(d=s.value)==null?void 0:d.name}`,children:[s.loading&&e.jsx(e.Fragment,{children:e.jsx(M,{children:e.jsx(k,{children:e.jsxs(a.Row,{children:[e.jsx(a.Col,{md:12,lg:8,children:e.jsx(le,{})}),e.jsx(a.Col,{md:12,lg:3,offset:{lg:1},children:e.jsx(X,{})})]})})})}),!s.loading&&e.jsx(M,{children:e.jsx(k,{children:e.jsxs(a.Row,{children:[e.jsx(a.Col,{xs:12,children:e.jsx(K,{items:[e.jsx(I,{to:C.home,children:i("Home")}),e.jsx(I,{to:C.consultations,children:i("Consultations")}),e.jsx(T.Text,{size:"12",children:(S=s==null?void 0:s.value)==null?void 0:S.name})]})}),e.jsxs(a.Col,{xs:12,md:9,children:[e.jsx(Y,{consultation:s.value}),((b=s==null?void 0:s.value)==null?void 0:b.description)&&W(s.value.description)!==""&&e.jsx(Z,{children:e.jsx(U.MarkdownRenderer,{children:s.value.description})})]}),((c=s==null?void 0:s.value)==null?void 0:c.product)&&e.jsx(a.Col,{xs:12,md:3,children:e.jsx(ie,{consultation:s.value})})]})})}),o&&o.length>0&&e.jsx(ee,{children:e.jsx(k,{children:o.map(m=>{var y,w;return e.jsx(ne,{category:m,title:`${i("Inni specjaliści")} ${m}`,consultations:((w=(y=u==null?void 0:u.list)==null?void 0:y.data)==null?void 0:w.filter(H=>H.id!==Number(t)))||[]},m)})})})]})},be=()=>e.jsx(de,{});export{be as default};

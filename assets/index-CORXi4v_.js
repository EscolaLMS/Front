import{k as A,j as e,V as o,T as m,o as H,s as G,q as h,r as j,i as q,h as L,m as k,W as F,p as $,y as R,z as g,a1 as B,al as D,am as V,an as Q,ao as W,ap as U,Q as J,v as K,C as I,L as M,af as O,M as X}from"./index-BVPnA-aq.js";import{P as Y}from"./index-DuttXKR6.js";import{B as Z}from"./index-CC5VmrC3.js";import{b as ee}from"./CourseCard-DwkfUrET.js";import{P as N}from"./PricingCard-C2LQaiOw.js";import{u as se,E as te,S as _,a as ie,b as re}from"./sidebar-xaNynyL0.js";import{u as oe,P as ae}from"./usePayment-CGELCaRj.js";import{C as z}from"./index-BvFN8irI.js";import{S as p}from"./index-XZ5CgrGM.js";import"./questionnaire-CXWDgbJ4.js";import"./index-BMK7cStT.js";import"./questionnaires-Byoeh61R.js";import"./index-BA7gLmCd.js";import"./swiper-react-CXbdjO7e.js";import"./index-BlLQbOD3.js";import"./swiper-DQafcaG0.js";import"./a11y-BQ4120_t.js";import"./useFetchCourses-DJsRZYxN.js";import"./floating-ui.react-dom-BH6oC21Z.js";const ne=r=>{const{consultation:s}=r,t=A();return e.jsxs(o.Row,{align:"center",children:[e.jsxs(o.Col,{lg:7,children:[(s==null?void 0:s.categories)&&s.categories.length>0&&e.jsx(ee,{categories:s.categories,onCategoryClick:x=>{t.push(`/consultations/?categories[]=${x}`)}}),e.jsx("br",{}),e.jsx(m.Title,{mobile:H,level:1,children:s==null?void 0:s.name})]}),e.jsx(o.Col,{lg:4,children:(s==null?void 0:s.image_path)&&e.jsx("div",{className:"image-wrapper",children:e.jsx(G.ResponsiveImage,{path:s.image_path,srcSizes:[790*.5,790,2*790]})})})]})};h.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`;const le=h.div`
  padding: 50px 45px;
  margin: 45px 0 0;
  background-color: ${({theme:r})=>r.mode==="dark"?r.gray1:r.gray5};
  border-radius: ${({theme:r})=>r.cardRadius}px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`,de=h.section`
  background-color: ${({theme:r})=>r.mode==="dark"?r.gray1:r.gray5};
  padding: 20px 0;
  margin-top: 60px;
`,ce=h.div`
  width: 100%;
  left: 0;
  position: sticky;
  top: 130px;
  bottom: unset;
  z-index: 100;
`,xe=h.div`
  width: 100%;
  left: 0;
  position: fixed;
  top: unset;
  bottom: 0;
  z-index: 100;
`,ue=r=>{var S,f,P,E;const{consultation:s}=r,{cart:t,addToCart:x,user:u}=j.useContext(q.EscolaLMSContext),{t:i}=L(),{push:n}=A(),l=se(s)===te.FREE,{defaultGateway:d,payByP24:C,payByStripe:y}=oe(),b=j.useMemo(()=>{var v;return(v=t==null?void 0:t.value)==null?void 0:v.items.some(w=>{var T;return Number(w.product_id)===Number((T=s==null?void 0:s.product)==null?void 0:T.id)})},[(S=s==null?void 0:s.product)==null?void 0:S.id,t]),c=j.useCallback(()=>{var v,w,T;l&&((v=s==null?void 0:s.product)!=null&&v.id)?x(Number((w=s.product)==null?void 0:w.id)).then(()=>d===ae.Stripe?y("free"):C()):s&&x(Number((T=s.product)==null?void 0:T.id)).then(()=>n(k.cart))},[s,x,n,y,C,d,l]);return H?e.jsx(xe,{children:e.jsxs(N.PricingCard,{mobile:!0,children:[e.jsx(m.Title,{level:5,as:"h5",children:i("ConsultationPage.SidebarHeader")}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsx("div",{children:e.jsx(m.Title,{level:4,as:"h4",style:{marginBottom:10},children:l?i("CoursesPage.Free"):(s==null?void 0:s.product)&&`${F(s.product.price,s.product.tax_rate)} zł`})}),e.jsx("div",{children:$(new Date((s==null?void 0:s.active_to)||""))?e.jsx(R.Text,{children:i("ConsultationPage.IsFinished")}):b?e.jsx(g.Button,{mode:"secondary",block:!0,onClick:()=>n(k.cart),children:i("ConsultationPage.GoToCheckout")}):u.value&&((f=s==null?void 0:s.product)!=null&&f.purchasable)?e.jsx(g.Button,{loading:t.loading,block:!0,mode:"secondary",onClick:c,children:i("ConsultationPage.BuyConsultation")}):e.jsx(g.Button,{block:!0,onClick:()=>n(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:i("ConsultationPage.BuyConsultation")})})]})]})}):e.jsx(ce,{children:e.jsxs(N.PricingCard,{children:[e.jsx(m.Title,{level:4,as:"h2",children:i("ConsultationPage.SidebarHeader")}),e.jsx(m.Title,{level:3,as:"h3",style:{marginTop:20},children:l?i("CoursesPage.Free"):(s==null?void 0:s.product)&&`${F(s.product.price,s.product.tax_rate)} zł`}),e.jsx(B.IconText,{icon:e.jsx(D,{}),text:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:(P=s==null?void 0:s.product)==null?void 0:P.duration})," -"," ",i("Consultation")]}),style:{marginTop:20}}),$(new Date((s==null?void 0:s.active_to)||""))?e.jsx(R.Text,{children:i("ConsultationPage.IsFinished")}):b?e.jsx(g.Button,{mode:"secondary",onClick:()=>n(k.cart),children:i("ConsultationPage.GoToCheckout")}):u.value&&((E=s==null?void 0:s.product)!=null&&E.purchasable)?e.jsx(g.Button,{loading:t.loading,mode:"secondary",onClick:c,children:i("ConsultationPage.BuyConsultation")}):e.jsx(g.Button,{onClick:()=>n(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:i("ConsultationPage.BuyConsultation")}),e.jsx(B.IconText,{icon:e.jsx(V,{}),text:i("ConsultationPage.SidebarFeature1")}),e.jsx(B.IconText,{icon:e.jsx(Q,{}),text:i("ConsultationPage.SidebarFeature2")}),e.jsx(B.IconText,{icon:e.jsx(W,{}),text:i("ConsultationPage.SidebarFeature3"),noMargin:!0})]})})},pe=h.section`
  padding: 40px 0;

  .slick-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .slick-dots {
    top: -65px;
  }
`,me={arrows:!1,infinite:!0,speed:500,slidesToShow:4,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},he=r=>{const{category:s,title:t=s,consultations:x,sliderSettings:u=me}=r,[i]=j.useState(!0),n=x.filter(a=>{var l;return(l=a.categories)==null?void 0:l.some(d=>d.name===s)});return e.jsxs(pe,{children:[e.jsx(m.Title,{level:3,style:{marginBottom:30},children:t}),n.length>4?e.jsx(U.Slider,{settings:{...u,dots:i,onSwipe:()=>{const a=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(d=>d.removeAttribute("aria-modal")),a.forEach(d=>d.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(l=>l.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:n.map(a=>e.jsx(z,{consultation:a},a.id))}):e.jsx(o.Row,{children:n.map(a=>e.jsx(o.Col,{xs:12,sm:6,md:4,lg:3,children:e.jsx(z,{consultation:a})},a.id))})]})},ge=h.div`
  position: relative;
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,je=()=>e.jsxs(ge,{children:[e.jsx(p,{width:"20px",style:{marginBottom:"5px"}}),e.jsxs(o.Row,{children:[e.jsx(o.Col,{style:{marginTop:"120px"},md:7,children:e.jsx(p,{height:45,style:{marginBottom:"10px"}})}),e.jsx(o.Col,{children:e.jsx(p,{height:300,style:{marginBottom:"10px"}})})]}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(p,{width:"100%",height:20,count:12,style:{marginBottom:"5px"}})})," ",e.jsxs("div",{className:"tutors",children:[e.jsx(p,{circle:!0,width:"112px",height:"112px"}),e.jsxs("div",{children:[e.jsx(p,{width:"140px",style:{marginBottom:"20px"}}),e.jsx(p,{width:"140px",count:2})]})]})]}),Ce=()=>{var n,a,l,d,C,y,b;const{t:r}=L(),{id:s}=J(),{consultation:t,fetchConsultation:x,consultations:u}=j.useContext(q.EscolaLMSContext),i=(a=(n=t.value)==null?void 0:n.categories)==null?void 0:a.map(c=>c.name);return j.useEffect(()=>{s&&x(Number(s))},[s]),t.loading&&!((l=t.value)!=null&&l.id)?e.jsx(Y,{}):t.error?e.jsx("pre",{children:t.error.message}):e.jsxs(K,{metaTitle:`${r("Consultation")} ${(d=t.value)==null?void 0:d.name}`,children:[t.loading&&e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsx(I,{children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{md:12,lg:8,children:e.jsx(je,{})}),e.jsx(o.Col,{md:12,lg:3,offset:{lg:1},children:e.jsx(ie,{})})]})})})}),!t.loading&&e.jsx(_,{children:e.jsx(I,{children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{xs:12,children:e.jsx(Z,{items:[e.jsx(M,{to:k.home,children:r("Home")}),e.jsx(M,{to:k.consultations,children:r("Consultations")}),e.jsx(R.Text,{size:"12",children:(C=t==null?void 0:t.value)==null?void 0:C.name})]})}),e.jsx(o.Col,{xs:12,md:9,children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{md:12,children:e.jsx(ne,{consultation:t.value})}),e.jsx(o.Col,{md:12,children:((y=t==null?void 0:t.value)==null?void 0:y.description)&&O(t.value.description)!==""&&e.jsx(le,{children:e.jsx(X.MarkdownRenderer,{children:t.value.description})})}),e.jsxs(o.Col,{md:12,children:[" ",e.jsx("br",{}),e.jsx(m.Title,{as:"h3",level:4,className:"title",children:r("ConsultationPage.Teacher")}),t.value&&t.value.teachers.map(c=>e.jsx(re,{author:c}))]})]})}),((b=t==null?void 0:t.value)==null?void 0:b.product)&&e.jsx(o.Col,{xs:12,md:3,children:e.jsx(ue,{consultation:t.value})})]})})}),i&&i.length>0&&e.jsx(de,{children:e.jsx(I,{children:i.map(c=>{var S,f;return e.jsx(he,{category:c,title:`${r("Inni specjaliści")} ${c}`,consultations:((f=(S=u==null?void 0:u.list)==null?void 0:S.data)==null?void 0:f.filter(P=>P.id!==Number(s)))||[]},c)})})})]})},Ae=()=>e.jsx(Ce,{});export{Ae as default};

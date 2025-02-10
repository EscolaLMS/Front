import{k as A,j as e,V as o,T as m,o as H,s as G,q as h,r as j,i as q,h as L,m as k,W as $,p as F,y as E,z as g,a1 as B,am as D,an as V,ao as Q,ap as W,Q as J,v as K,C as R,L as M,ag as O,M as U}from"./index-D1kco1EJ.js";import{P as X}from"./index-Do0P9e4o.js";import{B as Y}from"./index-CWGoLWrE.js";import{b as Z}from"./CourseCard-EettxkIO.js";import{P as N}from"./PricingCard-B2ajaZ90.js";import{u as ee,E as se,S as _,a as te,b as ie}from"./sidebar-EMwvJHI5.js";import{u as re,P as oe}from"./usePayment-1yOn-Izo.js";import{C as z}from"./index-DAL-P2E0.js";import{S as p}from"./index-Z6avFsvJ.js";import"./questionnaire-CXWDgbJ4.js";import"./index-_n8c4Qw7.js";import"./questionnaires-BTzD3ijh.js";import"./index-Cu2RAZb5.js";import"./swiper-react-BthlvbdY.js";import"./index-B_GDzVv0.js";import"./swiper-CBJ5APE5.js";import"./a11y-DfrJoC43.js";import"./useFetchCourses-tr2fv0d1.js";import"./floating-ui.react-dom-BKuE_7Kd.js";const ae=i=>{const{consultation:s}=i,t=A();return e.jsxs(o.Row,{align:"center",children:[e.jsxs(o.Col,{lg:7,children:[(s==null?void 0:s.categories)&&s.categories.length>0&&e.jsx(Z,{categories:s.categories,onCategoryClick:x=>{t.push(`/consultations/?categories[]=${x}`)}}),e.jsx("br",{}),e.jsx(m.Title,{mobile:H,level:1,children:s==null?void 0:s.name})]}),e.jsx(o.Col,{lg:4,children:(s==null?void 0:s.image_path)&&e.jsx("div",{className:"image-wrapper",children:e.jsx(G.ResponsiveImage,{path:s.image_path,srcSizes:[790*.5,790,2*790]})})})]})};h.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`;const ne=h.div`
  padding: 50px 45px;
  margin: 45px 0 0;
  background-color: ${({theme:i})=>i.mode==="dark"?i.gray1:i.gray5};
  border-radius: ${({theme:i})=>i.cardRadius}px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`,le=h.section`
  background-color: ${({theme:i})=>i.mode==="dark"?i.gray1:i.gray5};
  padding: 20px 0;
  margin-top: 60px;
`,de=h.div`
  width: 100%;
  left: 0;
  position: sticky;
  top: 130px;
  bottom: unset;
  z-index: 100;
`,ce=h.div`
  width: 100%;
  left: 0;
  position: fixed;
  top: unset;
  bottom: 0;
  z-index: 100;
`,xe=i=>{var S,f,P,I;const{consultation:s}=i,{cart:t,addToCart:x,user:u}=j.useContext(q.EscolaLMSContext),{t:r}=L(),{push:n}=A(),l=ee(s)===se.FREE,{defaultGateway:d,payByP24:C,payByStripe:y}=re(),b=j.useMemo(()=>{var v;return(v=t==null?void 0:t.value)==null?void 0:v.items.some(w=>{var T;return Number(w.product_id)===Number((T=s==null?void 0:s.product)==null?void 0:T.id)})},[(S=s==null?void 0:s.product)==null?void 0:S.id,t]),c=j.useCallback(()=>{var v,w,T;l&&((v=s==null?void 0:s.product)!=null&&v.id)?x(Number((w=s.product)==null?void 0:w.id)).then(()=>d===oe.Stripe?y("free"):C()):s&&x(Number((T=s.product)==null?void 0:T.id)).then(()=>n(k.cart))},[s,x,n,y,C,d,l]);return H?e.jsx(ce,{children:e.jsxs(N.PricingCard,{mobile:!0,children:[e.jsx(m.Title,{level:5,as:"h5",children:r("ConsultationPage.SidebarHeader")}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsx("div",{children:e.jsx(m.Title,{level:4,as:"h4",style:{marginBottom:10},children:l?r("CoursesPage.Free"):(s==null?void 0:s.product)&&`${$(s.product.price,s.product.tax_rate)} zł`})}),e.jsx("div",{children:F(new Date((s==null?void 0:s.active_to)||""))?e.jsx(E.Text,{children:r("ConsultationPage.IsFinished")}):b?e.jsx(g.Button,{mode:"secondary",block:!0,onClick:()=>n(k.cart),children:r("ConsultationPage.GoToCheckout")}):u.value&&((f=s==null?void 0:s.product)!=null&&f.purchasable)?e.jsx(g.Button,{loading:t.loading,block:!0,mode:"secondary",onClick:c,children:r("ConsultationPage.BuyConsultation")}):e.jsx(g.Button,{block:!0,onClick:()=>n(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")})})]})]})}):e.jsx(de,{children:e.jsxs(N.PricingCard,{children:[e.jsx(m.Title,{level:4,as:"h2",children:r("ConsultationPage.SidebarHeader")}),e.jsx(m.Title,{level:3,as:"h3",style:{marginTop:20},children:l?r("CoursesPage.Free"):(s==null?void 0:s.product)&&`${$(s.product.price,s.product.tax_rate)} zł`}),e.jsx(B.IconText,{icon:e.jsx(D,{}),text:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:(P=s==null?void 0:s.product)==null?void 0:P.duration})," -"," ",r("Consultation")]}),style:{marginTop:20}}),F(new Date((s==null?void 0:s.active_to)||""))?e.jsx(E.Text,{children:r("ConsultationPage.IsFinished")}):b?e.jsx(g.Button,{mode:"secondary",onClick:()=>n(k.cart),children:r("ConsultationPage.GoToCheckout")}):u.value&&((I=s==null?void 0:s.product)!=null&&I.purchasable)?e.jsx(g.Button,{loading:t.loading,mode:"secondary",onClick:c,children:r("ConsultationPage.BuyConsultation")}):e.jsx(g.Button,{onClick:()=>n(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")}),e.jsx(B.IconText,{icon:e.jsx(V,{}),text:r("ConsultationPage.SidebarFeature2")}),e.jsx(B.IconText,{icon:e.jsx(Q,{}),text:r("ConsultationPage.SidebarFeature3"),noMargin:!0})]})})},ue=h.section`
  padding: 40px 0;

  .slick-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .slick-dots {
    top: -65px;
  }
`,pe={arrows:!1,infinite:!0,speed:500,slidesToShow:4,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},me=i=>{const{category:s,title:t=s,consultations:x,sliderSettings:u=pe}=i,[r]=j.useState(!0),n=x.filter(a=>{var l;return(l=a.categories)==null?void 0:l.some(d=>d.name===s)});return e.jsxs(ue,{children:[e.jsx(m.Title,{level:3,style:{marginBottom:30},children:t}),n.length>4?e.jsx(W.Slider,{settings:{...u,dots:r,onSwipe:()=>{const a=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(d=>d.removeAttribute("aria-modal")),a.forEach(d=>d.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(l=>l.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:n.map(a=>e.jsx(z,{consultation:a},a.id))}):e.jsx(o.Row,{children:n.map(a=>e.jsx(o.Col,{xs:12,sm:6,md:4,lg:3,children:e.jsx(z,{consultation:a})},a.id))})]})},he=h.div`
  position: relative;
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,ge=()=>e.jsxs(he,{children:[e.jsx(p,{width:"20px",style:{marginBottom:"5px"}}),e.jsxs(o.Row,{children:[e.jsx(o.Col,{style:{marginTop:"120px"},md:7,children:e.jsx(p,{height:45,style:{marginBottom:"10px"}})}),e.jsx(o.Col,{children:e.jsx(p,{height:300,style:{marginBottom:"10px"}})})]}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(p,{width:"100%",height:20,count:12,style:{marginBottom:"5px"}})})," ",e.jsxs("div",{className:"tutors",children:[e.jsx(p,{circle:!0,width:"112px",height:"112px"}),e.jsxs("div",{children:[e.jsx(p,{width:"140px",style:{marginBottom:"20px"}}),e.jsx(p,{width:"140px",count:2})]})]})]}),je=()=>{var n,a,l,d,C,y,b;const{t:i}=L(),{id:s}=J(),{consultation:t,fetchConsultation:x,consultations:u}=j.useContext(q.EscolaLMSContext),r=(a=(n=t.value)==null?void 0:n.categories)==null?void 0:a.map(c=>c.name);return j.useEffect(()=>{s&&x(Number(s))},[s]),t.loading&&!((l=t.value)!=null&&l.id)?e.jsx(X,{}):t.error?e.jsx("pre",{children:t.error.message}):e.jsxs(K,{metaTitle:`${i("Consultation")} ${(d=t.value)==null?void 0:d.name}`,children:[t.loading&&e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsx(R,{children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{md:12,lg:8,children:e.jsx(ge,{})}),e.jsx(o.Col,{md:12,lg:3,offset:{lg:1},children:e.jsx(te,{})})]})})})}),!t.loading&&e.jsx(_,{children:e.jsx(R,{children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{xs:12,children:e.jsx(Y,{items:[e.jsx(M,{to:k.home,children:i("Home")}),e.jsx(M,{to:k.consultations,children:i("Consultations")}),e.jsx(E.Text,{size:"12",children:(C=t==null?void 0:t.value)==null?void 0:C.name})]})}),e.jsx(o.Col,{xs:12,md:9,children:e.jsxs(o.Row,{children:[e.jsx(o.Col,{md:12,children:e.jsx(ae,{consultation:t.value})}),e.jsx(o.Col,{md:12,children:((y=t==null?void 0:t.value)==null?void 0:y.description)&&O(t.value.description)!==""&&e.jsx(ne,{children:e.jsx(U.MarkdownRenderer,{children:t.value.description})})}),e.jsxs(o.Col,{md:12,children:[" ",e.jsx("br",{}),e.jsx(m.Title,{as:"h3",level:4,className:"title",children:i("ConsultationPage.Teacher")}),t.value&&t.value.teachers.map(c=>e.jsx(ie,{author:c}))]})]})}),((b=t==null?void 0:t.value)==null?void 0:b.product)&&e.jsx(o.Col,{xs:12,md:3,children:e.jsx(xe,{consultation:t.value})})]})})}),r&&r.length>0&&e.jsx(le,{children:e.jsx(R,{children:r.map(c=>{var S,f;return e.jsx(me,{category:c,title:`${i("Inni specjaliści")} ${c}`,consultations:((f=(S=u==null?void 0:u.list)==null?void 0:S.data)==null?void 0:f.filter(P=>P.id!==Number(s)))||[]},c)})})})]})},ze=()=>e.jsx(je,{});export{ze as default};
//# sourceMappingURL=index-BXofhc0L.js.map

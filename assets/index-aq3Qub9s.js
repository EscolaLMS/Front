import{q as j,j as e,i as c,T as g,m as M,v as p,r as f,k as $,f as E,l as H,W as y,s as T,n as h,K as v,al as N,am as z,an as F,ao as A,ap as L,G as q,L as D,C as P,w,ak as G,M as V}from"./index-8nfYNS1Y.js";import{P as K}from"./index-BAnR4aiB.js";import{B as Q}from"./index-CdKdkPSk.js";import{R as U}from"./ResponsiveImage-D2Ds7Ba-.js";import{P as B}from"./PricingCard-CDRZkH3A.js";import{f as I}from"./index-BK8LQiq0.js";import{C as R}from"./index-dr6cFZb5.js";import{C as W}from"./index-DBeeu3RS.js";import"./app-B2E7767C.js";import"./date-Dn2wePPJ.js";import"./index-CPpvDPZD.js";import"./index-C779-yNS.js";const J=j.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`,O=j.div`
  padding: 50px 45px;
  margin: 45px 0 0;
  background-color: ${({theme:i})=>i.mode==="dark"?i.gray1:i.gray5};
  border-radius: ${({theme:i})=>i.cardRadius}px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`,X=j.section`
  background-color: ${({theme:i})=>i.mode==="dark"?i.gray1:i.gray5};
  padding: 20px 0;
  margin-top: 60px;
`,Y=j.div`
  width: 100%;
  left: 0;
  position: sticky;
  top: 130px;
  bottom: unset;
  z-index: 100;
`,Z=j.div`
  width: 100%;
  left: 0;
  position: fixed;
  top: unset;
  bottom: 0;
  z-index: 100;
`,ee=i=>{const{consultation:s}=i;return e.jsxs(c.Row,{align:"center",children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(g.Title,{mobile:M,level:2,children:s==null?void 0:s.name}),(s==null?void 0:s.categories)&&s.categories.length>0&&e.jsx(J,{children:s.categories.map(t=>e.jsx(p.Button,{mode:"outline",children:t.name}))})]}),e.jsx(c.Col,{lg:4,children:(s==null?void 0:s.image_path)&&e.jsx("div",{className:"image-wrapper",children:e.jsx(U.ResponsiveImage,{path:s.image_path,srcSizes:[790*.5,790,2*790]})})})]})},se=i=>{var n,d,C,b;const{consultation:s}=i,{cart:t,addToCart:m,user:x}=f.useContext($.EscolaLMSContext),{t:r}=E(),{push:a}=H(),o=f.useMemo(()=>{var l;return(l=t==null?void 0:t.value)==null?void 0:l.items.some(u=>{var S;return Number(u.product_id)===Number((S=s==null?void 0:s.product)==null?void 0:S.id)})},[(n=s==null?void 0:s.product)==null?void 0:n.id,t]);return M?e.jsx(Z,{children:e.jsxs(B.PricingCard,{mobile:!0,children:[e.jsx(g.Title,{level:5,as:"h5",children:r("ConsultationPage.SidebarHeader")}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsx("div",{children:e.jsx(g.Title,{level:4,as:"h4",style:{marginBottom:10},children:(s==null?void 0:s.product)&&`${I(s.product.price,s.product.tax_rate)} zł`})}),e.jsx("div",{children:y(new Date((s==null?void 0:s.active_to)||""))?e.jsx(T.Text,{children:r("ConsultationPage.IsFinished")}):o?e.jsx(p.Button,{mode:"secondary",block:!0,onClick:()=>a(h.cart),children:r("ConsultationPage.GoToCheckout")}):x.value&&((d=s==null?void 0:s.product)!=null&&d.purchasable)?e.jsx(p.Button,{loading:t.loading,block:!0,mode:"secondary",onClick:()=>{var l;return m(Number((l=s.product)==null?void 0:l.id)).then(()=>a(h.cart))},children:r("ConsultationPage.BuyConsultation")}):e.jsx(p.Button,{block:!0,onClick:()=>a(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")})})]})]})}):e.jsx(Y,{children:e.jsxs(B.PricingCard,{children:[e.jsx(g.Title,{level:4,as:"h2",children:r("ConsultationPage.SidebarHeader")}),e.jsx(g.Title,{level:3,as:"h3",style:{marginTop:20},children:(s==null?void 0:s.product)&&`${I(s.product.price,s.product.tax_rate)} zł`}),e.jsx(v.IconText,{icon:e.jsx(N,{}),text:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:(C=s==null?void 0:s.product)==null?void 0:C.duration})," -"," ",r("Consultation")]}),style:{marginTop:20}}),y(new Date((s==null?void 0:s.active_to)||""))?e.jsx(T.Text,{children:r("ConsultationPage.IsFinished")}):o?e.jsx(p.Button,{mode:"secondary",onClick:()=>a(h.cart),children:r("ConsultationPage.GoToCheckout")}):x.value&&((b=s==null?void 0:s.product)!=null&&b.purchasable)?e.jsx(p.Button,{loading:t.loading,mode:"secondary",onClick:()=>{var l;return m(Number((l=s.product)==null?void 0:l.id)).then(()=>a(h.cart))},children:r("ConsultationPage.BuyConsultation")}):e.jsx(p.Button,{onClick:()=>a(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")}),e.jsx(v.IconText,{icon:e.jsx(z,{}),text:r("ConsultationPage.SidebarFeature1")}),e.jsx(v.IconText,{icon:e.jsx(F,{}),text:r("ConsultationPage.SidebarFeature2")}),e.jsx(v.IconText,{icon:e.jsx(A,{}),text:r("ConsultationPage.SidebarFeature3"),noMargin:!0})]})})},te=j.section`
  padding: 40px 0;

  .slick-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .slick-dots {
    top: -65px;
  }
`,ie={arrows:!1,infinite:!0,speed:500,slidesToShow:4,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},re=i=>{const{category:s,title:t=s,consultations:m,sliderSettings:x=ie}=i,[r]=f.useState(!0),a=m.filter(o=>{var n;return(n=o.categories)==null?void 0:n.some(d=>d.name===s)});return e.jsxs(te,{children:[e.jsx(g.Title,{level:3,style:{marginBottom:30},children:t}),a.length>4?e.jsx(L.Slider,{settings:{...x,dots:r,onSwipe:()=>{const o=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(d=>d.removeAttribute("aria-modal")),o.forEach(d=>d.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(n=>n.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:a.map(o=>e.jsx(R,{consultation:o},o.id))}):e.jsx(c.Row,{children:a.map(o=>e.jsx(c.Col,{xs:12,sm:6,md:4,lg:3,children:e.jsx(R,{consultation:o})},o.id))})]})},oe=()=>{var a,o,n,d,C,b,l;const{t:i}=E(),{id:s}=q(),{consultation:t,fetchConsultation:m,consultations:x}=f.useContext($.EscolaLMSContext),r=(o=(a=t.value)==null?void 0:a.categories)==null?void 0:o.map(u=>u.name);return f.useEffect(()=>{s&&m(Number(s))},[s]),t.loading&&!((n=t.value)!=null&&n.id)?e.jsx(K,{}):t.error?e.jsx("pre",{children:t.error.message}):e.jsxs(D,{metaTitle:`${i("Consultation")} ${(d=t.value)==null?void 0:d.name}`,children:[t.loading&&e.jsx(W,{}),!t.loading&&e.jsx(P,{children:e.jsxs(c.Row,{children:[e.jsx(c.Col,{xs:12,children:e.jsx(Q,{items:[e.jsx(w,{to:h.home,children:i("Home")}),e.jsx(w,{to:h.consultations,children:i("Consultations")}),e.jsx(T.Text,{size:"12",children:(C=t==null?void 0:t.value)==null?void 0:C.name})]})}),e.jsxs(c.Col,{xs:12,md:9,children:[e.jsx(ee,{consultation:t.value}),((b=t==null?void 0:t.value)==null?void 0:b.description)&&G(t.value.description)!==""&&e.jsx(O,{children:e.jsx(V.MarkdownRenderer,{children:t.value.description})})]}),((l=t==null?void 0:t.value)==null?void 0:l.product)&&e.jsx(c.Col,{xs:12,md:3,children:e.jsx(se,{consultation:t.value})})]})}),r&&r.length>0&&e.jsx(X,{children:e.jsx(P,{children:r.map(u=>{var S,k;return e.jsx(re,{category:u,title:`${i("Inni specjaliści")} ${u}`,consultations:((k=(S=x==null?void 0:x.list)==null?void 0:S.data)==null?void 0:k.filter(_=>_.id!==Number(s)))||[]},u)})})})]})},Ce=()=>e.jsx(oe,{});export{Ce as default};

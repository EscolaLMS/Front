import{q as j,j as e,i as x,T as g,n as I,s as $,r as f,k as E,f as R,m as _,V as T,l as n,o as h,ag as H,ah as N,ai as z,aj as F,ak as A,E as L,L as q,C as k,v as y,G as D,af as G,M as V}from"./index-DaafzRP_.js";import{P as Q}from"./index-DBq-nsKT.js";import{B as U}from"./index-DVPhWZqb.js";import{R as J}from"./ResponsiveImage-BWLsb9wG.js";import{P}from"./PricingCard-yK-81SRW.js";import{f as w}from"./index-DfHnr1oM.js";import{C as B}from"./index-DnhCVoif.js";import{C as K}from"./index-p2Hnf5if.js";import"./app-B2E7767C.js";import"./date-D2Y_Z1t9.js";import"./index-K8vVyNCH.js";import"./index-DmeYF39A.js";const O=j.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`,W=j.div`
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
`,ee=i=>{const{consultation:s}=i;return e.jsxs(x.Row,{align:"center",children:[e.jsxs(x.Col,{lg:7,children:[e.jsx(g.Title,{mobile:I,level:2,children:s==null?void 0:s.name}),(s==null?void 0:s.categories)&&s.categories.length>0&&e.jsx(O,{children:s.categories.map(t=>e.jsx($.Button,{mode:"outline",children:t.name}))})]}),e.jsx(x.Col,{lg:4,children:(s==null?void 0:s.image_path)&&e.jsx("div",{className:"image-wrapper",children:e.jsx(J.ResponsiveImage,{path:s.image_path,srcSizes:[790*.5,790,2*790]})})})]})},se=i=>{var d,l,C,b;const{consultation:s}=i,{cart:t,addToCart:m,user:u}=f.useContext(E.EscolaLMSContext),{t:r}=R(),{push:a}=_(),o=f.useMemo(()=>{var c;return(c=t==null?void 0:t.value)==null?void 0:c.items.some(p=>{var S;return Number(p.product_id)===Number((S=s==null?void 0:s.product)==null?void 0:S.id)})},[(d=s==null?void 0:s.product)==null?void 0:d.id,t]);return I?e.jsx(Z,{children:e.jsxs(P.PricingCard,{mobile:!0,children:[e.jsx(g.Title,{level:5,as:"h5",children:r("ConsultationPage.SidebarHeader")}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsx("div",{children:e.jsx(g.Title,{level:4,as:"h4",style:{marginBottom:10},children:(s==null?void 0:s.product)&&`${w(s.product.price,s.product.tax_rate)} zł`})}),e.jsx("div",{children:T(new Date((s==null?void 0:s.active_to)||""))?e.jsx(n.Text,{children:r("ConsultationPage.IsFinished")}):o?e.jsx(n.Button,{mode:"secondary",block:!0,onClick:()=>a(h.cart),children:r("ConsultationPage.GoToCheckout")}):u.value&&((l=s==null?void 0:s.product)!=null&&l.purchasable)?e.jsx(n.Button,{loading:t.loading,block:!0,mode:"secondary",onClick:()=>{var c;return m(Number((c=s.product)==null?void 0:c.id)).then(()=>a(h.cart))},children:r("ConsultationPage.BuyConsultation")}):e.jsx(n.Button,{block:!0,onClick:()=>a(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")})})]})]})}):e.jsx(Y,{children:e.jsxs(P.PricingCard,{children:[e.jsx(g.Title,{level:4,as:"h2",children:r("ConsultationPage.SidebarHeader")}),e.jsx(g.Title,{level:3,as:"h3",style:{marginTop:20},children:(s==null?void 0:s.product)&&`${w(s.product.price,s.product.tax_rate)} zł`}),e.jsx(n.IconText,{icon:e.jsx(H,{}),text:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:(C=s==null?void 0:s.product)==null?void 0:C.duration})," -"," ",r("Consultation")]}),style:{marginTop:20}}),T(new Date((s==null?void 0:s.active_to)||""))?e.jsx(n.Text,{children:r("ConsultationPage.IsFinished")}):o?e.jsx(n.Button,{mode:"secondary",onClick:()=>a(h.cart),children:r("ConsultationPage.GoToCheckout")}):u.value&&((b=s==null?void 0:s.product)!=null&&b.purchasable)?e.jsx(n.Button,{loading:t.loading,mode:"secondary",onClick:()=>{var c;return m(Number((c=s.product)==null?void 0:c.id)).then(()=>a(h.cart))},children:r("ConsultationPage.BuyConsultation")}):e.jsx(n.Button,{onClick:()=>a(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")}),e.jsx(n.IconText,{icon:e.jsx(N,{}),text:r("ConsultationPage.SidebarFeature1")}),e.jsx(n.IconText,{icon:e.jsx(z,{}),text:r("ConsultationPage.SidebarFeature2")}),e.jsx(n.IconText,{icon:e.jsx(F,{}),text:r("ConsultationPage.SidebarFeature3"),noMargin:!0})]})})},te=j.section`
  padding: 40px 0;

  .slick-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .slick-dots {
    top: -65px;
  }
`,ie={arrows:!1,infinite:!0,speed:500,slidesToShow:4,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},re=i=>{const{category:s,title:t=s,consultations:m,sliderSettings:u=ie}=i,[r]=f.useState(!0),a=m.filter(o=>{var d;return(d=o.categories)==null?void 0:d.some(l=>l.name===s)});return e.jsxs(te,{children:[e.jsx(g.Title,{level:3,style:{marginBottom:30},children:t}),a.length>4?e.jsx(A.Slider,{settings:{...u,dots:r,onSwipe:()=>{const o=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(l=>l.removeAttribute("aria-modal")),o.forEach(l=>l.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(d=>d.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:a.map(o=>e.jsx(B,{consultation:o},o.id))}):e.jsx(x.Row,{children:a.map(o=>e.jsx(x.Col,{xs:12,sm:6,md:4,lg:3,children:e.jsx(B,{consultation:o})},o.id))})]})},oe=()=>{var a,o,d,l,C,b,c;const{t:i}=R(),{id:s}=L(),{consultation:t,fetchConsultation:m,consultations:u}=f.useContext(E.EscolaLMSContext),r=(o=(a=t.value)==null?void 0:a.categories)==null?void 0:o.map(p=>p.name);return f.useEffect(()=>{s&&m(Number(s))},[s]),t.loading&&!((d=t.value)!=null&&d.id)?e.jsx(Q,{}):t.error?e.jsx("pre",{children:t.error.message}):e.jsxs(q,{metaTitle:`${i("Consultation")} ${(l=t.value)==null?void 0:l.name}`,children:[t.loading&&e.jsx(K,{}),!t.loading&&e.jsx(k,{children:e.jsxs(x.Row,{children:[e.jsx(x.Col,{xs:12,children:e.jsx(U,{items:[e.jsx(y,{to:h.home,children:i("Home")}),e.jsx(y,{to:h.consultations,children:i("Consultations")}),e.jsx(D.Text,{size:"12",children:(C=t==null?void 0:t.value)==null?void 0:C.name})]})}),e.jsxs(x.Col,{xs:12,md:9,children:[e.jsx(ee,{consultation:t.value}),((b=t==null?void 0:t.value)==null?void 0:b.description)&&G(t.value.description)!==""&&e.jsx(W,{children:e.jsx(V.MarkdownRenderer,{children:t.value.description})})]}),((c=t==null?void 0:t.value)==null?void 0:c.product)&&e.jsx(x.Col,{xs:12,md:3,children:e.jsx(se,{consultation:t.value})})]})}),r&&r.length>0&&e.jsx(X,{children:e.jsx(k,{children:r.map(p=>{var S,v;return e.jsx(re,{category:p,title:`${i("Inni specjaliści")} ${p}`,consultations:((v=(S=u==null?void 0:u.list)==null?void 0:S.data)==null?void 0:v.filter(M=>M.id!==Number(s)))||[]},p)})})})]})},Ce=()=>e.jsx(oe,{});export{Ce as default};

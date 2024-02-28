import{q as j,j as e,s as c,o as g,k as M,p,r as f,h as $,f as E,i as _,al as y,a2 as P,T,l as h,N as v,am as H,an as z,ao as F,ap as q,aq as A,G as L,L as D,a3 as G,C as w,v as B,ak as V,M as Q}from"./index-DuLQ5VKT.js";import{P as U}from"./index-B17mMKeX.js";import{B as J}from"./index-YzPqBO_p.js";import{R as K}from"./ResponsiveImage-D9-kAHzA.js";import{P as I}from"./PricingCard-CZ6W3Msx.js";import{C as R}from"./index-DF0D5upH.js";import"./index-Cscszz8i.js";import"./index-PVNoMdOp.js";const O=j.div`
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
`,ee=i=>{const{consultation:s}=i;return e.jsxs(c.Row,{align:"center",children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(g.Title,{mobile:M,level:2,children:s==null?void 0:s.name}),(s==null?void 0:s.categories)&&s.categories.length>0&&e.jsx(O,{children:s.categories.map(t=>e.jsx(p.Button,{mode:"outline",children:t.name}))})]}),e.jsx(c.Col,{lg:4,children:(s==null?void 0:s.image_path)&&e.jsx("div",{className:"image-wrapper",children:e.jsx(K.ResponsiveImage,{path:s.image_path,srcSizes:[790*.5,790,2*790]})})})]})},se=i=>{var n,d,C,b;const{consultation:s}=i,{cart:t,addToCart:m,user:x}=f.useContext($.EscolaLMSContext),{t:r}=E(),{push:a}=_(),o=f.useMemo(()=>{var l;return(l=t==null?void 0:t.value)==null?void 0:l.items.some(u=>{var S;return Number(u.product_id)===Number((S=s==null?void 0:s.product)==null?void 0:S.id)})},[(n=s==null?void 0:s.product)==null?void 0:n.id,t]);return M?e.jsx(Z,{children:e.jsxs(I.PricingCard,{mobile:!0,children:[e.jsx(g.Title,{level:5,as:"h5",children:r("ConsultationPage.SidebarHeader")}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsx("div",{children:e.jsx(g.Title,{level:4,as:"h4",style:{marginBottom:10},children:(s==null?void 0:s.product)&&`${y(s.product.price,s.product.tax_rate)} zł`})}),e.jsx("div",{children:P(new Date((s==null?void 0:s.active_to)||""))?e.jsx(T.Text,{children:r("ConsultationPage.IsFinished")}):o?e.jsx(p.Button,{mode:"secondary",block:!0,onClick:()=>a(h.cart),children:r("ConsultationPage.GoToCheckout")}):x.value&&((d=s==null?void 0:s.product)!=null&&d.purchasable)?e.jsx(p.Button,{loading:t.loading,block:!0,mode:"secondary",onClick:()=>{var l;return m(Number((l=s.product)==null?void 0:l.id)).then(()=>a(h.cart))},children:r("ConsultationPage.BuyConsultation")}):e.jsx(p.Button,{block:!0,onClick:()=>a(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")})})]})]})}):e.jsx(Y,{children:e.jsxs(I.PricingCard,{children:[e.jsx(g.Title,{level:4,as:"h2",children:r("ConsultationPage.SidebarHeader")}),e.jsx(g.Title,{level:3,as:"h3",style:{marginTop:20},children:(s==null?void 0:s.product)&&`${y(s.product.price,s.product.tax_rate)} zł`}),e.jsx(v.IconText,{icon:e.jsx(H,{}),text:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:(C=s==null?void 0:s.product)==null?void 0:C.duration})," -"," ",r("Consultation")]}),style:{marginTop:20}}),P(new Date((s==null?void 0:s.active_to)||""))?e.jsx(T.Text,{children:r("ConsultationPage.IsFinished")}):o?e.jsx(p.Button,{mode:"secondary",onClick:()=>a(h.cart),children:r("ConsultationPage.GoToCheckout")}):x.value&&((b=s==null?void 0:s.product)!=null&&b.purchasable)?e.jsx(p.Button,{loading:t.loading,mode:"secondary",onClick:()=>{var l;return m(Number((l=s.product)==null?void 0:l.id)).then(()=>a(h.cart))},children:r("ConsultationPage.BuyConsultation")}):e.jsx(p.Button,{onClick:()=>a(`/login?referrer=/consultations/${s==null?void 0:s.id}`),mode:"secondary",children:r("ConsultationPage.BuyConsultation")}),e.jsx(v.IconText,{icon:e.jsx(z,{}),text:r("ConsultationPage.SidebarFeature1")}),e.jsx(v.IconText,{icon:e.jsx(F,{}),text:r("ConsultationPage.SidebarFeature2")}),e.jsx(v.IconText,{icon:e.jsx(q,{}),text:r("ConsultationPage.SidebarFeature3"),noMargin:!0})]})})},te=j.section`
  padding: 40px 0;

  .slick-slide {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .slick-dots {
    top: -65px;
  }
`,ie={arrows:!1,infinite:!0,speed:500,slidesToShow:4,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},re=i=>{const{category:s,title:t=s,consultations:m,sliderSettings:x=ie}=i,[r]=f.useState(!0),a=m.filter(o=>{var n;return(n=o.categories)==null?void 0:n.some(d=>d.name===s)});return e.jsxs(te,{children:[e.jsx(g.Title,{level:3,style:{marginBottom:30},children:t}),a.length>4?e.jsx(A.Slider,{settings:{...x,dots:r,onSwipe:()=>{const o=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(d=>d.removeAttribute("aria-modal")),o.forEach(d=>d.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(n=>n.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:a.map(o=>e.jsx(R,{consultation:o},o.id))}):e.jsx(c.Row,{children:a.map(o=>e.jsx(c.Col,{xs:12,sm:6,md:4,lg:3,children:e.jsx(R,{consultation:o})},o.id))})]})},oe=()=>{var a,o,n,d,C,b,l;const{t:i}=E(),{id:s}=L(),{consultation:t,fetchConsultation:m,consultations:x}=f.useContext($.EscolaLMSContext),r=(o=(a=t.value)==null?void 0:a.categories)==null?void 0:o.map(u=>u.name);return f.useEffect(()=>{s&&m(Number(s))},[s]),t.loading&&!((n=t.value)!=null&&n.id)?e.jsx(U,{}):t.error?e.jsx("pre",{children:t.error.message}):e.jsxs(D,{metaTitle:`${i("Consultation")} ${(d=t.value)==null?void 0:d.name}`,children:[t.loading&&e.jsx(G,{}),!t.loading&&e.jsx(w,{children:e.jsxs(c.Row,{children:[e.jsx(c.Col,{xs:12,children:e.jsx(J,{items:[e.jsx(B,{to:h.home,children:i("Home")}),e.jsx(B,{to:h.consultations,children:i("Consultations")}),e.jsx(T.Text,{size:"12",children:(C=t==null?void 0:t.value)==null?void 0:C.name})]})}),e.jsxs(c.Col,{xs:12,md:9,children:[e.jsx(ee,{consultation:t.value}),((b=t==null?void 0:t.value)==null?void 0:b.description)&&V(t.value.description)!==""&&e.jsx(W,{children:e.jsx(Q.MarkdownRenderer,{children:t.value.description})})]}),((l=t==null?void 0:t.value)==null?void 0:l.product)&&e.jsx(c.Col,{xs:12,md:3,children:e.jsx(se,{consultation:t.value})})]})}),r&&r.length>0&&e.jsx(X,{children:e.jsx(w,{children:r.map(u=>{var S,k;return e.jsx(re,{category:u,title:`${i("Inni specjaliści")} ${u}`,consultations:((k=(S=x==null?void 0:x.list)==null?void 0:S.data)==null?void 0:k.filter(N=>N.id!==Number(s)))||[]},u)})})})]})},me=()=>e.jsx(oe,{});export{me as default};

import{H as M,c as y,j as e,g as n,q as p,L as m,aL as E,o as d,J as c,D as x,T as v,a as u,b as L,f as b,aM as C,W as w,ah as N,au as $,aE as I,aF as h,aG as R,aH as B,aI as _,as as z,k as D,C as A}from"./index-C8RYle4a.js";import{r as o,R as W}from"./sentry-DZqhWugq.js";import{P as G}from"./index-Bqp2gs8d.js";import{a as H}from"./PricingCard-BnHr5ojY.js";import{P as q}from"./index-j13jBhAP.js";import{B as F}from"./index-xLklIcjt.js";import{C as O,T as U}from"./index-dNe3mM-N.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";const J=W.createContext({}),V=({children:t})=>{const{id:s}=M(),{fetchProduct:a}=o.useContext(y.EscolaLMSContext);return o.useEffect(()=>{s&&a(Number(s))},[a,s]),e.jsx(J.Provider,{value:{},children:t})},K=p.div`
  width: 100%;
  left: 0;
  position: ${n?"fixed":"sticky"};
  top: ${n?"unset":"130px"};
  bottom: ${n?"0":"unset"};
  z-index: 100;
  padding-bottom: ${n?"":"45px"};
`,Q=({children:t})=>e.jsx(K,{children:t});var r=(t=>(t.Consultation="App\\Models\\Consultation",t.StationaryEvent="App\\Models\\StationaryEvent",t.Course="App\\Models\\Course",t.Webinar="App\\Models\\Webinar",t))(r||{});const X=t=>t.reduce((s,a)=>{const i=a.productable_type,l=s[i]??[];return{...s,[i]:[...l,a]}},{}),Y=p(c.Col)`
  border: 1px solid ${({theme:t})=>t.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,j=({products:t,linkTo:s})=>e.jsx(Y,{lg:12,children:t.map(a=>e.jsx(m,{to:`${s}/${a.productable_id}`,children:e.jsx(E.Tag,{children:e.jsx(d.Text,{size:"12",children:a.name})})}))}),Z=p(c.Row)`
  width: 100%;
  margin: 0 auto !important;
`,ee=()=>{var a;const{product:t}=o.useContext(x.EscolaLMSContext),s=o.useMemo(()=>{var i;return X(((i=t==null?void 0:t.value)==null?void 0:i.productables)||[])},[(a=t==null?void 0:t.value)==null?void 0:a.productables]);return e.jsxs(Z,{children:[s[r.Consultation]&&e.jsx(j,{linkTo:"/consultations",products:s[r.Consultation]}),s[r.Webinar]&&e.jsx(j,{linkTo:"/webinar",products:s[r.Webinar]}),s[r.StationaryEvent]&&e.jsx(j,{linkTo:"/event",products:s[r.StationaryEvent]}),s[r.Course]&&e.jsx(j,{linkTo:"/courses",products:s[r.Course]})]})},te=({title:t})=>n?e.jsx(v.Title,{level:5,as:"h5",children:t}):e.jsx(v.Title,{level:4,as:"h2",children:t}),se=({product:t})=>{var k;const{cart:s,addToCart:a,user:i}=o.useContext(x.EscolaLMSContext),{t:l}=u(),{push:P}=L(),g=(k=i.value)==null?void 0:k.id,f=o.useMemo(()=>{var T;return(T=s==null?void 0:s.value)==null?void 0:T.items.some(S=>Number(S.product_id)===Number(t.id))},[t.id,s]);return o.useMemo(()=>g&&t.owned?e.jsx(d.Text,{size:"12",children:l("PackagePage.ProductOwned")}):f?e.jsx(m,{to:b.cart,children:e.jsx(C,{mode:"secondary",block:n,children:l("EventPage.GoToCheckout")})}):g&&t.buyable&&!t.owned?e.jsx(C,{loading:s.loading,mode:"secondary",block:n,onClick:()=>a(t.id).then(()=>P(b.cart)),children:l("Buy now")}):!t||g&&!t.buyable?e.jsx(d.Text,{size:"12",children:l("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${t.id}`,children:e.jsx(C,{mode:"secondary",block:n,children:l("Buy now")})}),[a,s.loading,t,f,P,l,g])},ae=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:s}=u(),a=t.value;return a?e.jsx(Q,{children:e.jsxs(H,{mobile:n,children:[e.jsx(te,{title:a.name}),e.jsxs("div",{className:n?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(q,{price:a.price,oldPrice:a.price_old,taxRate:a.tax_rate})}),e.jsxs("div",{children:[e.jsx(se,{product:a}),!n&&e.jsxs(e.Fragment,{children:[e.jsxs(d.Text,{size:"12",children:[" ",s("EventPage.30Days")]}),e.jsxs(d.Text,{size:"12",children:[" ",s("PackagePage.PackageIncludes")]}),e.jsx(ee,{}),e.jsxs("div",{className:"pricing-card-features",children:[a.duration&&e.jsx(w.IconText,{icon:e.jsx(N,{}),text:`${s("Duration")}: ${a.duration}`}),a.users_count&&e.jsx(w.IconText,{icon:e.jsx($,{}),text:`${s("Students")}: ${a.users_count}`})]})]})]})]})]})}):null},ne=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:s}=u();return t.value?e.jsx(F,{items:[e.jsx(m,{to:b.home,children:s("Home")}),e.jsx(m,{to:b.packages,children:s("Menu.Packages")}),e.jsx(d.Text,{size:"12",children:t.value.name})]}):null},oe=p.div`
  .package-main-info {
    .image-wrapper {
      @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 35px;

        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
    .labels-row {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      column-gap: 20px;
      margin: 35px 0;
      @media (max-width: 991px) {
        margin: 35px 0 0;
      }
      @media (max-width: 374px) {
        flex-direction: column;
        row-gap: 16px;
      }
      &--bottom {
        column-gap: 45px;
        margin-top: 120px;
        margin-bottom: 0;
        flex-wrap: wrap;
        @media (max-width: 991px) {
          column-gap: 0;
          margin-top: 55px;
        }
        @media (max-width: 374px) {
          flex-direction: row;
        }
        .single-label {
          @media (max-width: 991px) {
            flex: 0 0 50%;
            max-width: 50%;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`,ie=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:s}=u();return t.value?e.jsx(oe,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(c.Row,{children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(I,{mobile:n,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(h,{mobile:n,title:"90%",icon:e.jsx(R,{}),children:s("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(h,{mobile:n,title:s("CoursePage.Guarantee"),icon:e.jsx(B,{}),children:s("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(h,{mobile:n,title:"5.0",icon:e.jsx(_,{}),children:s("CoursePage.AvarageRating")})})]})]}),e.jsx(c.Col,{lg:4,children:t.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(z,{path:t.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:t.value.categories&&t.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(h,{title:s("CoursePage.CourseCategory"),variant:"label",children:t.value.categories[0].name})})})]})}):null},re=()=>{var i;const{product:t}=o.useContext(y.EscolaLMSContext),{t:s}=u(),a=(i=t.value)==null?void 0:i.description;return a?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(v.Title,{level:4,children:s("PackagePage.DescriptionTitle")}),e.jsx(d.Text,{children:a})]}):null},le=p.div`
  section {
    margin-bottom: 45px;
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
    }
    &.padding-right {
      padding-right: 150px;
      @media (max-width: 991px) {
        padding-right: 70px;
      }
      @media (max-width: 768px) {
        padding-right: 0;
      }
    }
  }
`,ce=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:s}=u();return t.loading||!t.value?e.jsx(G,{}):e.jsx(le,{children:e.jsxs(c.Row,{children:[e.jsxs(c.Col,{md:12,lg:9,children:[e.jsx(ne,{}),e.jsx(ie,{}),e.jsx(O,{title:s("PackagePage.CompaniesSectionTitle")}),e.jsx(re,{}),e.jsx(U,{title:s("PackagePage.TutorsSectionTitle"),users:t.value.authors})]}),e.jsx(c.Col,{md:12,lg:3,children:e.jsx(ae,{})})]})})},ve=()=>{var s;const{product:t}=o.useContext(x.EscolaLMSContext);return e.jsx(D,{metaTitle:(s=t.value)==null?void 0:s.name,children:e.jsx(V,{children:e.jsx(A,{children:e.jsx(ce,{})})})})};export{ve as default};
//# sourceMappingURL=index-BCVUVvk1.js.map

import{b as M,H as E,r as n,h as y,j as e,q as b,w as c,L as m,aK as L,s as d,D as x,n as o,T as v,f as u,i as N,l as j,aF as C,O as w,am as I,Y as R,as as B,at as p,au as _,av as $,aw as z,o as D,C as A}from"./index-CU_5DVq5.js";import{P as W}from"./index-DiUCeXg_.js";import{a as q}from"./PricingCard-DbJbnea0.js";import{P as G}from"./index-B1Sr3u5b.js";import{D as H}from"./index-BZVyblZ_.js";import{B as O}from"./index-yvTSSGHX.js";import{a as F}from"./ResponsiveImage-DO1LARVL.js";import{C as U,T as K}from"./index-B53ZdVqc.js";const V=M.createContext({}),Y=({children:s})=>{const{id:a}=E(),{fetchProduct:t}=n.useContext(y.EscolaLMSContext);return n.useEffect(()=>{a&&t(Number(a))},[t,a]),e.jsx(V.Provider,{value:{},children:s})};var i=(s=>(s.Consultation="App\\Models\\Consultation",s.StationaryEvent="App\\Models\\StationaryEvent",s.Course="App\\Models\\Course",s.Webinar="App\\Models\\Webinar",s))(i||{});const J=s=>s.reduce((a,t)=>{const r=t.productable_type,l=a[r]??[];return{...a,[r]:[...l,t]}},{}),Q=b(c.Col)`
  border: 1px solid ${({theme:s})=>s.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,h=({products:s,linkTo:a})=>e.jsx(Q,{lg:12,children:s.map(t=>e.jsx(m,{to:`${a}/${t.productable_id}`,children:e.jsx(L.Tag,{children:e.jsx(d.Text,{size:"12",children:t.name})})}))}),X=b(c.Row)`
  width: 100%;
  margin: 0 auto !important;
`,Z=()=>{var t;const{product:s}=n.useContext(x.EscolaLMSContext),a=n.useMemo(()=>{var r;return J(((r=s==null?void 0:s.value)==null?void 0:r.productables)||[])},[(t=s==null?void 0:s.value)==null?void 0:t.productables]);return e.jsxs(X,{children:[a[i.Consultation]&&e.jsx(h,{linkTo:"/consultations",products:a[i.Consultation]}),a[i.Webinar]&&e.jsx(h,{linkTo:"/webinar",products:a[i.Webinar]}),a[i.StationaryEvent]&&e.jsx(h,{linkTo:"/event",products:a[i.StationaryEvent]}),a[i.Course]&&e.jsx(h,{linkTo:"/courses",products:a[i.Course]})]})},ee=({title:s})=>o?e.jsx(v.Title,{level:5,as:"h5",children:s}):e.jsx(v.Title,{level:4,as:"h2",children:s}),se=({product:s})=>{var T;const{cart:a,addToCart:t,user:r}=n.useContext(x.EscolaLMSContext),{t:l}=u(),{push:P}=N(),g=(T=r.value)==null?void 0:T.id,f=n.useMemo(()=>{var k;return(k=a==null?void 0:a.value)==null?void 0:k.items.some(S=>Number(S.product_id)===Number(s.id))},[s.id,a]);return n.useMemo(()=>g&&s.owned?e.jsx(d.Text,{size:"12",children:l("PackagePage.ProductOwned")}):f?e.jsx(m,{to:j.cart,children:e.jsx(C,{mode:"secondary",block:o,children:l("EventPage.GoToCheckout")})}):g&&s.buyable&&!s.owned?e.jsx(C,{loading:a.loading,mode:"secondary",block:o,onClick:()=>t(s.id).then(()=>P(j.cart)),children:l("Buy now")}):!s||g&&!s.buyable?e.jsx(d.Text,{size:"12",children:l("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${s.id}`,children:e.jsx(C,{mode:"secondary",block:o,children:l("Buy now")})}),[t,a.loading,s,f,P,l,g])},ae=()=>{const{product:s}=n.useContext(x.EscolaLMSContext),{t:a}=u(),t=s.value;return t?e.jsx(H,{children:e.jsxs(q,{mobile:o,children:[e.jsx(ee,{title:t.name}),e.jsxs("div",{className:o?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(G,{price:t.price,oldPrice:t.price_old,taxRate:t.tax_rate})}),e.jsxs("div",{children:[e.jsx(se,{product:t}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs(d.Text,{size:"12",children:[" ",a("EventPage.30Days")]}),e.jsxs(d.Text,{size:"12",children:[" ",a("PackagePage.PackageIncludes")]}),e.jsx(Z,{}),e.jsxs("div",{className:"pricing-card-features",children:[t.duration&&e.jsx(w.IconText,{icon:e.jsx(I,{}),text:`${a("Duration")}: ${t.duration}`}),t.users_count&&e.jsx(w.IconText,{icon:e.jsx(R,{}),text:`${a("Students")}: ${t.users_count}`})]})]})]})]})]})}):null},te=()=>{const{product:s}=n.useContext(x.EscolaLMSContext),{t:a}=u();return s.value?e.jsx(O,{items:[e.jsx(m,{to:j.home,children:a("Home")}),e.jsx(m,{to:j.packages,children:a("Menu.Packages")}),e.jsx(d.Text,{size:"12",children:s.value.name})]}):null},ne=b.div`
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
`,oe=()=>{const{product:s}=n.useContext(x.EscolaLMSContext),{t:a}=u();return s.value?e.jsx(ne,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(c.Row,{children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(B,{mobile:o,level:2,children:s.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:o,title:"90%",icon:e.jsx(_,{}),children:a("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:o,title:a("CoursePage.Guarantee"),icon:e.jsx($,{}),children:a("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:o,title:"5.0",icon:e.jsx(z,{}),children:a("CoursePage.AvarageRating")})})]})]}),e.jsx(c.Col,{lg:4,children:s.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(F,{path:s.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:s.value.categories&&s.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(p,{title:a("CoursePage.CourseCategory"),variant:"label",children:s.value.categories[0].name})})})]})}):null},re=()=>{var r;const{product:s}=n.useContext(y.EscolaLMSContext),{t:a}=u(),t=(r=s.value)==null?void 0:r.description;return t?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(v.Title,{level:4,children:a("PackagePage.DescriptionTitle")}),e.jsx(d.Text,{children:t})]}):null},ie=b.div`
  section {
    margin-bottom: 45px;
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({theme:s})=>s.mode==="dark"?s.gray1:s.gray5};
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
`,le=()=>{const{product:s}=n.useContext(x.EscolaLMSContext),{t:a}=u();return s.loading||!s.value?e.jsx(W,{}):e.jsx(ie,{children:e.jsxs(c.Row,{children:[e.jsxs(c.Col,{md:12,lg:9,children:[e.jsx(te,{}),e.jsx(oe,{}),e.jsx(U,{title:a("PackagePage.CompaniesSectionTitle")}),e.jsx(re,{}),e.jsx(K,{title:a("PackagePage.TutorsSectionTitle"),users:s.value.authors})]}),e.jsx(c.Col,{md:12,lg:3,children:e.jsx(ae,{})})]})})},be=()=>{var a;const{product:s}=n.useContext(x.EscolaLMSContext);return e.jsx(D,{metaTitle:(a=s.value)==null?void 0:a.name,children:e.jsx(Y,{children:e.jsx(A,{children:e.jsx(le,{})})})})};export{be as default};

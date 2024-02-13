import{b as E,G as M,r as n,k as y,j as e,q as b,i as c,w as m,aE as L,s as d,h as x,m as o,T as v,f as u,l as N,n as j,aA as C,K as w,al as I,Z as R,ar as B,as as g,ad as _,ae as $,af as z,L as A,C as D}from"./index-8nfYNS1Y.js";import{P as G}from"./index-BAnR4aiB.js";import{a as W}from"./PricingCard-CDRZkH3A.js";import{P as q}from"./index-BC033tPN.js";import{D as H}from"./index-SmqXgDa7.js";import{B as O}from"./index-CdKdkPSk.js";import{a as U}from"./ResponsiveImage-D2Ds7Ba-.js";import{C as F,T as K}from"./index-CEHBTfR_.js";import"./index-BK8LQiq0.js";import"./app-B2E7767C.js";import"./date-Dn2wePPJ.js";const V=E.createContext({}),Z=({children:s})=>{const{id:t}=M(),{fetchProduct:a}=n.useContext(y.EscolaLMSContext);return n.useEffect(()=>{t&&a(Number(t))},[a,t]),e.jsx(V.Provider,{value:{},children:s})};var i=(s=>(s.Consultation="App\\Models\\Consultation",s.StationaryEvent="App\\Models\\StationaryEvent",s.Course="App\\Models\\Course",s.Webinar="App\\Models\\Webinar",s))(i||{});const J=s=>s.reduce((t,a)=>{const r=a.productable_type,l=t[r]??[];return{...t,[r]:[...l,a]}},{}),Q=b(c.Col)`
  border: 1px solid ${({theme:s})=>s.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,h=({products:s,linkTo:t})=>e.jsx(Q,{lg:12,children:s.map(a=>e.jsx(m,{to:`${t}/${a.productable_id}`,children:e.jsx(L.Tag,{children:e.jsx(d.Text,{size:"12",children:a.name})})}))}),X=b(c.Row)`
  width: 100%;
  margin: 0 auto !important;
`,Y=()=>{var a;const{product:s}=n.useContext(x.EscolaLMSContext),t=n.useMemo(()=>{var r;return J(((r=s==null?void 0:s.value)==null?void 0:r.productables)||[])},[(a=s==null?void 0:s.value)==null?void 0:a.productables]);return e.jsxs(X,{children:[t[i.Consultation]&&e.jsx(h,{linkTo:"/consultations",products:t[i.Consultation]}),t[i.Webinar]&&e.jsx(h,{linkTo:"/webinar",products:t[i.Webinar]}),t[i.StationaryEvent]&&e.jsx(h,{linkTo:"/event",products:t[i.StationaryEvent]}),t[i.Course]&&e.jsx(h,{linkTo:"/courses",products:t[i.Course]})]})},ee=({title:s})=>o?e.jsx(v.Title,{level:5,as:"h5",children:s}):e.jsx(v.Title,{level:4,as:"h2",children:s}),se=({product:s})=>{var k;const{cart:t,addToCart:a,user:r}=n.useContext(x.EscolaLMSContext),{t:l}=u(),{push:P}=N(),p=(k=r.value)==null?void 0:k.id,f=n.useMemo(()=>{var T;return(T=t==null?void 0:t.value)==null?void 0:T.items.some(S=>Number(S.product_id)===Number(s.id))},[s.id,t]);return n.useMemo(()=>p&&s.owned?e.jsx(d.Text,{size:"12",children:l("PackagePage.ProductOwned")}):f?e.jsx(m,{to:j.cart,children:e.jsx(C,{mode:"secondary",block:o,children:l("EventPage.GoToCheckout")})}):p&&s.buyable&&!s.owned?e.jsx(C,{loading:t.loading,mode:"secondary",block:o,onClick:()=>a(s.id).then(()=>P(j.cart)),children:l("Buy now")}):!s||p&&!s.buyable?e.jsx(d.Text,{size:"12",children:l("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${s.id}`,children:e.jsx(C,{mode:"secondary",block:o,children:l("Buy now")})}),[a,t.loading,s,f,P,l,p])},te=()=>{const{product:s}=n.useContext(x.EscolaLMSContext),{t}=u(),a=s.value;return a?e.jsx(H,{children:e.jsxs(W,{mobile:o,children:[e.jsx(ee,{title:a.name}),e.jsxs("div",{className:o?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(q,{price:a.price,oldPrice:a.price_old,taxRate:a.tax_rate})}),e.jsxs("div",{children:[e.jsx(se,{product:a}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs(d.Text,{size:"12",children:[" ",t("EventPage.30Days")]}),e.jsxs(d.Text,{size:"12",children:[" ",t("PackagePage.PackageIncludes")]}),e.jsx(Y,{}),e.jsxs("div",{className:"pricing-card-features",children:[a.duration&&e.jsx(w.IconText,{icon:e.jsx(I,{}),text:`${t("Duration")}: ${a.duration}`}),a.users_count&&e.jsx(w.IconText,{icon:e.jsx(R,{}),text:`${t("Students")}: ${a.users_count}`})]})]})]})]})]})}):null},ae=()=>{const{product:s}=n.useContext(x.EscolaLMSContext),{t}=u();return s.value?e.jsx(O,{items:[e.jsx(m,{to:j.home,children:t("Home")}),e.jsx(m,{to:j.packages,children:t("Menu.Packages")}),e.jsx(d.Text,{size:"12",children:s.value.name})]}):null},ne=b.div`
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
`,oe=()=>{const{product:s}=n.useContext(x.EscolaLMSContext),{t}=u();return s.value?e.jsx(ne,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(c.Row,{children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(B,{mobile:o,level:2,children:s.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:o,title:"90%",icon:e.jsx(_,{}),children:t("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:o,title:t("CoursePage.Guarantee"),icon:e.jsx($,{}),children:t("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:o,title:"5.0",icon:e.jsx(z,{}),children:t("CoursePage.AvarageRating")})})]})]}),e.jsx(c.Col,{lg:4,children:s.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(U,{path:s.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:s.value.categories&&s.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(g,{title:t("CoursePage.CourseCategory"),variant:"label",children:s.value.categories[0].name})})})]})}):null},re=()=>{var r;const{product:s}=n.useContext(y.EscolaLMSContext),{t}=u(),a=(r=s.value)==null?void 0:r.description;return a?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(v.Title,{level:4,children:t("PackagePage.DescriptionTitle")}),e.jsx(d.Text,{children:a})]}):null},ie=b.div`
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
`,le=()=>{const{product:s}=n.useContext(x.EscolaLMSContext),{t}=u();return s.loading||!s.value?e.jsx(G,{}):e.jsx(ie,{children:e.jsxs(c.Row,{children:[e.jsxs(c.Col,{md:12,lg:9,children:[e.jsx(ae,{}),e.jsx(oe,{}),e.jsx(F,{title:t("PackagePage.CompaniesSectionTitle")}),e.jsx(re,{}),e.jsx(K,{title:t("PackagePage.TutorsSectionTitle"),users:s.value.authors})]}),e.jsx(c.Col,{md:12,lg:3,children:e.jsx(te,{})})]})})},Pe=()=>{var t;const{product:s}=n.useContext(x.EscolaLMSContext);return e.jsx(A,{metaTitle:(t=s.value)==null?void 0:t.name,children:e.jsx(Z,{children:e.jsx(D,{children:e.jsx(le,{})})})})};export{Pe as default};

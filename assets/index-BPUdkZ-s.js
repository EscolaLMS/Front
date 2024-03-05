import{b as E,E as M,r as n,h as y,j as e,q as b,w as c,L as m,aO as N,s as d,D as x,n as o,T as v,f as u,i as L,l as j,aK as C,J as w,ar as I,N as B,ax as R,ay as p,az as _,aA as $,aB as z,o as D,C as A}from"./index-BwDDCa5l.js";import{P as W}from"./index-DNAhof5Q.js";import{a as q}from"./PricingCard-qZg96Hng.js";import{P as G}from"./index-Cnd3jTz7.js";import{D as O}from"./index-DLg9NA9K.js";import{B as H}from"./index-fnJvflA6.js";import{a as U}from"./ResponsiveImage-BfAhZdZG.js";import{C as F,T as J}from"./index-BBmfJa4y.js";const K=E.createContext({}),V=({children:a})=>{const{id:s}=M(),{fetchProduct:t}=n.useContext(y.EscolaLMSContext);return n.useEffect(()=>{s&&t(Number(s))},[t,s]),e.jsx(K.Provider,{value:{},children:a})};var i=(a=>(a.Consultation="App\\Models\\Consultation",a.StationaryEvent="App\\Models\\StationaryEvent",a.Course="App\\Models\\Course",a.Webinar="App\\Models\\Webinar",a))(i||{});const Q=a=>a.reduce((s,t)=>{const r=t.productable_type,l=s[r]??[];return{...s,[r]:[...l,t]}},{}),X=b(c.Col)`
  border: 1px solid ${({theme:a})=>a.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,h=({products:a,linkTo:s})=>e.jsx(X,{lg:12,children:a.map(t=>e.jsx(m,{to:`${s}/${t.productable_id}`,children:e.jsx(N.Tag,{children:e.jsx(d.Text,{size:"12",children:t.name})})}))}),Y=b(c.Row)`
  width: 100%;
  margin: 0 auto !important;
`,Z=()=>{var t;const{product:a}=n.useContext(x.EscolaLMSContext),s=n.useMemo(()=>{var r;return Q(((r=a==null?void 0:a.value)==null?void 0:r.productables)||[])},[(t=a==null?void 0:a.value)==null?void 0:t.productables]);return e.jsxs(Y,{children:[s[i.Consultation]&&e.jsx(h,{linkTo:"/consultations",products:s[i.Consultation]}),s[i.Webinar]&&e.jsx(h,{linkTo:"/webinar",products:s[i.Webinar]}),s[i.StationaryEvent]&&e.jsx(h,{linkTo:"/event",products:s[i.StationaryEvent]}),s[i.Course]&&e.jsx(h,{linkTo:"/courses",products:s[i.Course]})]})},ee=({title:a})=>o?e.jsx(v.Title,{level:5,as:"h5",children:a}):e.jsx(v.Title,{level:4,as:"h2",children:a}),ae=({product:a})=>{var T;const{cart:s,addToCart:t,user:r}=n.useContext(x.EscolaLMSContext),{t:l}=u(),{push:P}=L(),g=(T=r.value)==null?void 0:T.id,f=n.useMemo(()=>{var k;return(k=s==null?void 0:s.value)==null?void 0:k.items.some(S=>Number(S.product_id)===Number(a.id))},[a.id,s]);return n.useMemo(()=>g&&a.owned?e.jsx(d.Text,{size:"12",children:l("PackagePage.ProductOwned")}):f?e.jsx(m,{to:j.cart,children:e.jsx(C,{mode:"secondary",block:o,children:l("EventPage.GoToCheckout")})}):g&&a.buyable&&!a.owned?e.jsx(C,{loading:s.loading,mode:"secondary",block:o,onClick:()=>t(a.id).then(()=>P(j.cart)),children:l("Buy now")}):!a||g&&!a.buyable?e.jsx(d.Text,{size:"12",children:l("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${a.id}`,children:e.jsx(C,{mode:"secondary",block:o,children:l("Buy now")})}),[t,s.loading,a,f,P,l,g])},se=()=>{const{product:a}=n.useContext(x.EscolaLMSContext),{t:s}=u(),t=a.value;return t?e.jsx(O,{children:e.jsxs(q,{mobile:o,children:[e.jsx(ee,{title:t.name}),e.jsxs("div",{className:o?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(G,{price:t.price,oldPrice:t.price_old,taxRate:t.tax_rate})}),e.jsxs("div",{children:[e.jsx(ae,{product:t}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs(d.Text,{size:"12",children:[" ",s("EventPage.30Days")]}),e.jsxs(d.Text,{size:"12",children:[" ",s("PackagePage.PackageIncludes")]}),e.jsx(Z,{}),e.jsxs("div",{className:"pricing-card-features",children:[t.duration&&e.jsx(w.IconText,{icon:e.jsx(I,{}),text:`${s("Duration")}: ${t.duration}`}),t.users_count&&e.jsx(w.IconText,{icon:e.jsx(B,{}),text:`${s("Students")}: ${t.users_count}`})]})]})]})]})]})}):null},te=()=>{const{product:a}=n.useContext(x.EscolaLMSContext),{t:s}=u();return a.value?e.jsx(H,{items:[e.jsx(m,{to:j.home,children:s("Home")}),e.jsx(m,{to:j.packages,children:s("Menu.Packages")}),e.jsx(d.Text,{size:"12",children:a.value.name})]}):null},ne=b.div`
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
`,oe=()=>{const{product:a}=n.useContext(x.EscolaLMSContext),{t:s}=u();return a.value?e.jsx(ne,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(c.Row,{children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(R,{mobile:o,level:2,children:a.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:o,title:"90%",icon:e.jsx(_,{}),children:s("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:o,title:s("CoursePage.Guarantee"),icon:e.jsx($,{}),children:s("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:o,title:"5.0",icon:e.jsx(z,{}),children:s("CoursePage.AvarageRating")})})]})]}),e.jsx(c.Col,{lg:4,children:a.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(U,{path:a.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:a.value.categories&&a.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(p,{title:s("CoursePage.CourseCategory"),variant:"label",children:a.value.categories[0].name})})})]})}):null},re=()=>{var r;const{product:a}=n.useContext(y.EscolaLMSContext),{t:s}=u(),t=(r=a.value)==null?void 0:r.description;return t?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(v.Title,{level:4,children:s("PackagePage.DescriptionTitle")}),e.jsx(d.Text,{children:t})]}):null},ie=b.div`
  section {
    margin-bottom: 45px;
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({theme:a})=>a.mode==="dark"?a.gray1:a.gray5};
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
`,le=()=>{const{product:a}=n.useContext(x.EscolaLMSContext),{t:s}=u();return a.loading||!a.value?e.jsx(W,{}):e.jsx(ie,{children:e.jsxs(c.Row,{children:[e.jsxs(c.Col,{md:12,lg:9,children:[e.jsx(te,{}),e.jsx(oe,{}),e.jsx(F,{title:s("PackagePage.CompaniesSectionTitle")}),e.jsx(re,{}),e.jsx(J,{title:s("PackagePage.TutorsSectionTitle"),users:a.value.authors})]}),e.jsx(c.Col,{md:12,lg:3,children:e.jsx(se,{})})]})})},be=()=>{var s;const{product:a}=n.useContext(x.EscolaLMSContext);return e.jsx(D,{metaTitle:(s=a.value)==null?void 0:s.name,children:e.jsx(V,{children:e.jsx(A,{children:e.jsx(le,{})})})})};export{be as default};

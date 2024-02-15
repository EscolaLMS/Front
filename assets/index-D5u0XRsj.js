import{b as E,G as M,r as n,k as y,j as e,q as b,i as c,w as m,aE as L,s as d,h as x,m as o,T as v,f as u,l as N,n as j,aA as C,K as w,al as I,Z as R,ar as B,as as g,ad as _,ae as $,af as z,L as A,C as D}from"./index-Duhnd3NG.js";import{P as G}from"./index-5jiTykP9.js";import{a as W}from"./PricingCard-L2C0_epf.js";import{P as q}from"./index-DpXbU8lt.js";import{D as H}from"./index-T9hpvTXs.js";import{B as O}from"./index-CAFi8QTa.js";import{a as U}from"./ResponsiveImage-CKPbfW5t.js";import{C as F,T as K}from"./index-BKnYV56D.js";import"components/atoms/Typography/Text";import"./index-CnyZdFlA.js";import"./app-B2E7767C.js";import"./date-DtH1bSeH.js";const V=E.createContext({}),Z=({children:t})=>{const{id:s}=M(),{fetchProduct:a}=n.useContext(y.EscolaLMSContext);return n.useEffect(()=>{s&&a(Number(s))},[a,s]),e.jsx(V.Provider,{value:{},children:t})};var i=(t=>(t.Consultation="App\\Models\\Consultation",t.StationaryEvent="App\\Models\\StationaryEvent",t.Course="App\\Models\\Course",t.Webinar="App\\Models\\Webinar",t))(i||{});const J=t=>t.reduce((s,a)=>{const r=a.productable_type,l=s[r]??[];return{...s,[r]:[...l,a]}},{}),Q=b(c.Col)`
  border: 1px solid ${({theme:t})=>t.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,h=({products:t,linkTo:s})=>e.jsx(Q,{lg:12,children:t.map(a=>e.jsx(m,{to:`${s}/${a.productable_id}`,children:e.jsx(L.Tag,{children:e.jsx(d.Text,{size:"12",children:a.name})})}))}),X=b(c.Row)`
  width: 100%;
  margin: 0 auto !important;
`,Y=()=>{var a;const{product:t}=n.useContext(x.EscolaLMSContext),s=n.useMemo(()=>{var r;return J(((r=t==null?void 0:t.value)==null?void 0:r.productables)||[])},[(a=t==null?void 0:t.value)==null?void 0:a.productables]);return e.jsxs(X,{children:[s[i.Consultation]&&e.jsx(h,{linkTo:"/consultations",products:s[i.Consultation]}),s[i.Webinar]&&e.jsx(h,{linkTo:"/webinar",products:s[i.Webinar]}),s[i.StationaryEvent]&&e.jsx(h,{linkTo:"/event",products:s[i.StationaryEvent]}),s[i.Course]&&e.jsx(h,{linkTo:"/courses",products:s[i.Course]})]})},ee=({title:t})=>o?e.jsx(v.Title,{level:5,as:"h5",children:t}):e.jsx(v.Title,{level:4,as:"h2",children:t}),te=({product:t})=>{var k;const{cart:s,addToCart:a,user:r}=n.useContext(x.EscolaLMSContext),{t:l}=u(),{push:P}=N(),p=(k=r.value)==null?void 0:k.id,f=n.useMemo(()=>{var T;return(T=s==null?void 0:s.value)==null?void 0:T.items.some(S=>Number(S.product_id)===Number(t.id))},[t.id,s]);return n.useMemo(()=>p&&t.owned?e.jsx(d.Text,{size:"12",children:l("PackagePage.ProductOwned")}):f?e.jsx(m,{to:j.cart,children:e.jsx(C,{mode:"secondary",block:o,children:l("EventPage.GoToCheckout")})}):p&&t.buyable&&!t.owned?e.jsx(C,{loading:s.loading,mode:"secondary",block:o,onClick:()=>a(t.id).then(()=>P(j.cart)),children:l("Buy now")}):!t||p&&!t.buyable?e.jsx(d.Text,{size:"12",children:l("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${t.id}`,children:e.jsx(C,{mode:"secondary",block:o,children:l("Buy now")})}),[a,s.loading,t,f,P,l,p])},se=()=>{const{product:t}=n.useContext(x.EscolaLMSContext),{t:s}=u(),a=t.value;return a?e.jsx(H,{children:e.jsxs(W,{mobile:o,children:[e.jsx(ee,{title:a.name}),e.jsxs("div",{className:o?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(q,{price:a.price,oldPrice:a.price_old,taxRate:a.tax_rate})}),e.jsxs("div",{children:[e.jsx(te,{product:a}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs(d.Text,{size:"12",children:[" ",s("EventPage.30Days")]}),e.jsxs(d.Text,{size:"12",children:[" ",s("PackagePage.PackageIncludes")]}),e.jsx(Y,{}),e.jsxs("div",{className:"pricing-card-features",children:[a.duration&&e.jsx(w.IconText,{icon:e.jsx(I,{}),text:`${s("Duration")}: ${a.duration}`}),a.users_count&&e.jsx(w.IconText,{icon:e.jsx(R,{}),text:`${s("Students")}: ${a.users_count}`})]})]})]})]})]})}):null},ae=()=>{const{product:t}=n.useContext(x.EscolaLMSContext),{t:s}=u();return t.value?e.jsx(O,{items:[e.jsx(m,{to:j.home,children:s("Home")}),e.jsx(m,{to:j.packages,children:s("Menu.Packages")}),e.jsx(d.Text,{size:"12",children:t.value.name})]}):null},ne=b.div`
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
`,oe=()=>{const{product:t}=n.useContext(x.EscolaLMSContext),{t:s}=u();return t.value?e.jsx(ne,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(c.Row,{children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(B,{mobile:o,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:o,title:"90%",icon:e.jsx(_,{}),children:s("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:o,title:s("CoursePage.Guarantee"),icon:e.jsx($,{}),children:s("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:o,title:"5.0",icon:e.jsx(z,{}),children:s("CoursePage.AvarageRating")})})]})]}),e.jsx(c.Col,{lg:4,children:t.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(U,{path:t.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:t.value.categories&&t.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(g,{title:s("CoursePage.CourseCategory"),variant:"label",children:t.value.categories[0].name})})})]})}):null},re=()=>{var r;const{product:t}=n.useContext(y.EscolaLMSContext),{t:s}=u(),a=(r=t.value)==null?void 0:r.description;return a?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(v.Title,{level:4,children:s("PackagePage.DescriptionTitle")}),e.jsx(d.Text,{children:a})]}):null},ie=b.div`
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
`,le=()=>{const{product:t}=n.useContext(x.EscolaLMSContext),{t:s}=u();return t.loading||!t.value?e.jsx(G,{}):e.jsx(ie,{children:e.jsxs(c.Row,{children:[e.jsxs(c.Col,{md:12,lg:9,children:[e.jsx(ae,{}),e.jsx(oe,{}),e.jsx(F,{title:s("PackagePage.CompaniesSectionTitle")}),e.jsx(re,{}),e.jsx(K,{title:s("PackagePage.TutorsSectionTitle"),users:t.value.authors})]}),e.jsx(c.Col,{md:12,lg:3,children:e.jsx(se,{})})]})})},fe=()=>{var s;const{product:t}=n.useContext(x.EscolaLMSContext);return e.jsx(A,{metaTitle:(s=t.value)==null?void 0:s.name,children:e.jsx(Z,{children:e.jsx(D,{children:e.jsx(le,{})})})})};export{fe as default};

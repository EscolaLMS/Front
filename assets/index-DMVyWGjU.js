import{b as S,E,r as o,k as w,j as e,q as b,i as d,v as m,l as i,h as x,n,T,f as u,m as M,o as j,au as C,ag as L,Y as N,G as I,al as R,am as g,ab as B,ac as _,ad as $,L as z,C as D}from"./index-BsLXwVX-.js";import{P as A}from"./index-DduWXmdR.js";import{a as G}from"./PricingCard-07H49TcA.js";import{P as W}from"./index-RXy4nqCb.js";import{D as q}from"./index-DmvhSXYW.js";import{B as H}from"./index-DG-fcZoy.js";import{a as O}from"./ResponsiveImage-KgADMS5g.js";import{C as U,T as F}from"./index-C-adksy7.js";import"./index-B6JCoH2u.js";import"./app-B2E7767C.js";import"./date-C5z6T5_w.js";const V=S.createContext({}),Y=({children:t})=>{const{id:s}=E(),{fetchProduct:a}=o.useContext(w.EscolaLMSContext);return o.useEffect(()=>{s&&a(Number(s))},[a,s]),e.jsx(V.Provider,{value:{},children:t})};var l=(t=>(t.Consultation="App\\Models\\Consultation",t.StationaryEvent="App\\Models\\StationaryEvent",t.Course="App\\Models\\Course",t.Webinar="App\\Models\\Webinar",t))(l||{});const J=t=>t.reduce((s,a)=>{const r=a.productable_type,c=s[r]??[];return{...s,[r]:[...c,a]}},{}),K=b(d.Col)`
  border: 1px solid ${({theme:t})=>t.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,h=({products:t,linkTo:s})=>e.jsx(K,{lg:12,children:t.map(a=>e.jsx(m,{to:`${s}/${a.productable_id}`,children:e.jsx(i.Tag,{children:e.jsx(i.Text,{size:"12",children:a.name})})}))}),Q=b(d.Row)`
  width: 100%;
  margin: 0 auto !important;
`,X=()=>{var a;const{product:t}=o.useContext(x.EscolaLMSContext),s=o.useMemo(()=>{var r;return J(((r=t==null?void 0:t.value)==null?void 0:r.productables)||[])},[(a=t==null?void 0:t.value)==null?void 0:a.productables]);return e.jsxs(Q,{children:[s[l.Consultation]&&e.jsx(h,{linkTo:"/consultations",products:s[l.Consultation]}),s[l.Webinar]&&e.jsx(h,{linkTo:"/webinar",products:s[l.Webinar]}),s[l.StationaryEvent]&&e.jsx(h,{linkTo:"/event",products:s[l.StationaryEvent]}),s[l.Course]&&e.jsx(h,{linkTo:"/courses",products:s[l.Course]})]})},Z=({title:t})=>n?e.jsx(T.Title,{level:5,as:"h5",children:t}):e.jsx(T.Title,{level:4,as:"h2",children:t}),ee=({product:t})=>{var f;const{cart:s,addToCart:a,user:r}=o.useContext(x.EscolaLMSContext),{t:c}=u(),{push:v}=M(),p=(f=r.value)==null?void 0:f.id,P=o.useMemo(()=>{var k;return(k=s==null?void 0:s.value)==null?void 0:k.items.some(y=>Number(y.product_id)===Number(t.id))},[t.id,s]);return o.useMemo(()=>p&&t.owned?e.jsx(i.Text,{size:"12",children:c("PackagePage.ProductOwned")}):P?e.jsx(m,{to:j.cart,children:e.jsx(C,{mode:"secondary",block:n,children:c("EventPage.GoToCheckout")})}):p&&t.buyable&&!t.owned?e.jsx(C,{loading:s.loading,mode:"secondary",block:n,onClick:()=>a(t.id).then(()=>v(j.cart)),children:c("Buy now")}):!t||p&&!t.buyable?e.jsx(i.Text,{size:"12",children:c("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${t.id}`,children:e.jsx(C,{mode:"secondary",block:n,children:c("Buy now")})}),[a,s.loading,t,P,v,c,p])},te=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:s}=u(),a=t.value;return a?e.jsx(q,{children:e.jsxs(G,{mobile:n,children:[e.jsx(Z,{title:a.name}),e.jsxs("div",{className:n?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(W,{price:a.price,oldPrice:a.price_old,taxRate:a.tax_rate})}),e.jsxs("div",{children:[e.jsx(ee,{product:a}),!n&&e.jsxs(e.Fragment,{children:[e.jsxs(i.Text,{size:"12",children:[" ",s("EventPage.30Days")]}),e.jsxs(i.Text,{size:"12",children:[" ",s("PackagePage.PackageIncludes")]}),e.jsx(X,{}),e.jsxs("div",{className:"pricing-card-features",children:[a.duration&&e.jsx(i.IconText,{icon:e.jsx(L,{}),text:`${s("Duration")}: ${a.duration}`}),a.users_count&&e.jsx(i.IconText,{icon:e.jsx(N,{}),text:`${s("Students")}: ${a.users_count}`})]})]})]})]})]})}):null},se=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:s}=u();return t.value?e.jsx(H,{items:[e.jsx(m,{to:j.home,children:s("Home")}),e.jsx(m,{to:j.packages,children:s("Menu.Packages")}),e.jsx(I.Text,{size:"12",children:t.value.name})]}):null},ae=b.div`
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
`,oe=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:s}=u();return t.value?e.jsx(ae,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(d.Row,{children:[e.jsxs(d.Col,{lg:7,children:[e.jsx(R,{mobile:n,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:n,title:"90%",icon:e.jsx(B,{}),children:s("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:n,title:s("CoursePage.Guarantee"),icon:e.jsx(_,{}),children:s("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:n,title:"5.0",icon:e.jsx($,{}),children:s("CoursePage.AvarageRating")})})]})]}),e.jsx(d.Col,{lg:4,children:t.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(O,{path:t.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:t.value.categories&&t.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(g,{title:s("CoursePage.CourseCategory"),variant:"label",children:t.value.categories[0].name})})})]})}):null},ne=()=>{var r;const{product:t}=o.useContext(w.EscolaLMSContext),{t:s}=u(),a=(r=t.value)==null?void 0:r.description;return a?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(i.Title,{level:4,children:s("PackagePage.DescriptionTitle")}),e.jsx(i.Text,{children:a})]}):null},re=b.div`
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
`,ie=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:s}=u();return t.loading||!t.value?e.jsx(A,{}):e.jsx(re,{children:e.jsxs(d.Row,{children:[e.jsxs(d.Col,{md:12,lg:9,children:[e.jsx(se,{}),e.jsx(oe,{}),e.jsx(U,{title:s("PackagePage.CompaniesSectionTitle")}),e.jsx(ne,{}),e.jsx(F,{title:s("PackagePage.TutorsSectionTitle"),users:t.value.authors})]}),e.jsx(d.Col,{md:12,lg:3,children:e.jsx(te,{})})]})})},ve=()=>{var s;const{product:t}=o.useContext(x.EscolaLMSContext);return e.jsx(z,{metaTitle:(s=t.value)==null?void 0:s.name,children:e.jsx(Y,{children:e.jsx(D,{children:e.jsx(ie,{})})})})};export{ve as default};

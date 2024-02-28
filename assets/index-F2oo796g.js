import{b as M,G as E,r as o,h as y,j as e,q as b,s as c,v as m,aF as L,T as d,A as x,k as n,o as v,f as u,i as N,l as j,aA as C,K as w,ah as I,W as R,an as B,ao as g,ap as _,aq as $,ar as z,L as A,C as D}from"./index-Blo-PJs7.js";import{P as W}from"./index-B83h2WWx.js";import{a as q}from"./PricingCard-BgpddvsZ.js";import{P as G}from"./index-DlFxAeba.js";import{D as F}from"./index-BqtOd3gJ.js";import{B as H}from"./index-Dwln5hYY.js";import{a as O}from"./ResponsiveImage-Dt4SFaY6.js";import{C as U,T as K}from"./index-B18IRAAS.js";import"./index-UKkASopu.js";import"./app-B2E7767C.js";import"./date-Dq-o8tMk.js";const V=M.createContext({}),J=({children:t})=>{const{id:a}=E(),{fetchProduct:s}=o.useContext(y.EscolaLMSContext);return o.useEffect(()=>{a&&s(Number(a))},[s,a]),e.jsx(V.Provider,{value:{},children:t})};var i=(t=>(t.Consultation="App\\Models\\Consultation",t.StationaryEvent="App\\Models\\StationaryEvent",t.Course="App\\Models\\Course",t.Webinar="App\\Models\\Webinar",t))(i||{});const Q=t=>t.reduce((a,s)=>{const r=s.productable_type,l=a[r]??[];return{...a,[r]:[...l,s]}},{}),X=b(c.Col)`
  border: 1px solid ${({theme:t})=>t.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,h=({products:t,linkTo:a})=>e.jsx(X,{lg:12,children:t.map(s=>e.jsx(m,{to:`${a}/${s.productable_id}`,children:e.jsx(L.Tag,{children:e.jsx(d.Text,{size:"12",children:s.name})})}))}),Y=b(c.Row)`
  width: 100%;
  margin: 0 auto !important;
`,Z=()=>{var s;const{product:t}=o.useContext(x.EscolaLMSContext),a=o.useMemo(()=>{var r;return Q(((r=t==null?void 0:t.value)==null?void 0:r.productables)||[])},[(s=t==null?void 0:t.value)==null?void 0:s.productables]);return e.jsxs(Y,{children:[a[i.Consultation]&&e.jsx(h,{linkTo:"/consultations",products:a[i.Consultation]}),a[i.Webinar]&&e.jsx(h,{linkTo:"/webinar",products:a[i.Webinar]}),a[i.StationaryEvent]&&e.jsx(h,{linkTo:"/event",products:a[i.StationaryEvent]}),a[i.Course]&&e.jsx(h,{linkTo:"/courses",products:a[i.Course]})]})},ee=({title:t})=>n?e.jsx(v.Title,{level:5,as:"h5",children:t}):e.jsx(v.Title,{level:4,as:"h2",children:t}),te=({product:t})=>{var k;const{cart:a,addToCart:s,user:r}=o.useContext(x.EscolaLMSContext),{t:l}=u(),{push:P}=N(),p=(k=r.value)==null?void 0:k.id,f=o.useMemo(()=>{var T;return(T=a==null?void 0:a.value)==null?void 0:T.items.some(S=>Number(S.product_id)===Number(t.id))},[t.id,a]);return o.useMemo(()=>p&&t.owned?e.jsx(d.Text,{size:"12",children:l("PackagePage.ProductOwned")}):f?e.jsx(m,{to:j.cart,children:e.jsx(C,{mode:"secondary",block:n,children:l("EventPage.GoToCheckout")})}):p&&t.buyable&&!t.owned?e.jsx(C,{loading:a.loading,mode:"secondary",block:n,onClick:()=>s(t.id).then(()=>P(j.cart)),children:l("Buy now")}):!t||p&&!t.buyable?e.jsx(d.Text,{size:"12",children:l("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${t.id}`,children:e.jsx(C,{mode:"secondary",block:n,children:l("Buy now")})}),[s,a.loading,t,f,P,l,p])},ae=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:a}=u(),s=t.value;return s?e.jsx(F,{children:e.jsxs(q,{mobile:n,children:[e.jsx(ee,{title:s.name}),e.jsxs("div",{className:n?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(G,{price:s.price,oldPrice:s.price_old,taxRate:s.tax_rate})}),e.jsxs("div",{children:[e.jsx(te,{product:s}),!n&&e.jsxs(e.Fragment,{children:[e.jsxs(d.Text,{size:"12",children:[" ",a("EventPage.30Days")]}),e.jsxs(d.Text,{size:"12",children:[" ",a("PackagePage.PackageIncludes")]}),e.jsx(Z,{}),e.jsxs("div",{className:"pricing-card-features",children:[s.duration&&e.jsx(w.IconText,{icon:e.jsx(I,{}),text:`${a("Duration")}: ${s.duration}`}),s.users_count&&e.jsx(w.IconText,{icon:e.jsx(R,{}),text:`${a("Students")}: ${s.users_count}`})]})]})]})]})]})}):null},se=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:a}=u();return t.value?e.jsx(H,{items:[e.jsx(m,{to:j.home,children:a("Home")}),e.jsx(m,{to:j.packages,children:a("Menu.Packages")}),e.jsx(d.Text,{size:"12",children:t.value.name})]}):null},oe=b.div`
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
`,ne=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:a}=u();return t.value?e.jsx(oe,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(c.Row,{children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(B,{mobile:n,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:n,title:"90%",icon:e.jsx(_,{}),children:a("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:n,title:a("CoursePage.Guarantee"),icon:e.jsx($,{}),children:a("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(g,{mobile:n,title:"5.0",icon:e.jsx(z,{}),children:a("CoursePage.AvarageRating")})})]})]}),e.jsx(c.Col,{lg:4,children:t.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(O,{path:t.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:t.value.categories&&t.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(g,{title:a("CoursePage.CourseCategory"),variant:"label",children:t.value.categories[0].name})})})]})}):null},re=()=>{var r;const{product:t}=o.useContext(y.EscolaLMSContext),{t:a}=u(),s=(r=t.value)==null?void 0:r.description;return s?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(v.Title,{level:4,children:a("PackagePage.DescriptionTitle")}),e.jsx(d.Text,{children:s})]}):null},ie=b.div`
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
`,le=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:a}=u();return t.loading||!t.value?e.jsx(W,{}):e.jsx(ie,{children:e.jsxs(c.Row,{children:[e.jsxs(c.Col,{md:12,lg:9,children:[e.jsx(se,{}),e.jsx(ne,{}),e.jsx(U,{title:a("PackagePage.CompaniesSectionTitle")}),e.jsx(re,{}),e.jsx(K,{title:a("PackagePage.TutorsSectionTitle"),users:t.value.authors})]}),e.jsx(c.Col,{md:12,lg:3,children:e.jsx(ae,{})})]})})},Pe=()=>{var a;const{product:t}=o.useContext(x.EscolaLMSContext);return e.jsx(A,{metaTitle:(a=t.value)==null?void 0:a.name,children:e.jsx(J,{children:e.jsx(D,{children:e.jsx(le,{})})})})};export{Pe as default};

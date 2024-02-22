import{b as M,H as E,r as o,l as y,j as e,q as b,h as c,w as m,aI as N,v as d,D as x,o as n,T as v,f as u,i as L,k as j,aD as C,N as w,ao as I,Y as R,au as B,av as p,af as _,ag as $,ah as D,L as z,m as A}from"./index-BTvwz0L3.js";import{P as W}from"./index-Dr14e7t8.js";import{a as q}from"./PricingCard-COmh7QJa.js";import{P as G}from"./index-CS4Picjp.js";import{D as H}from"./index-CkwsB4Kh.js";import{B as O}from"./index-hgCH-7gi.js";import{a as U}from"./ResponsiveImage-G_l4wTjD.js";import{C as F,T as V}from"./index-GZMMJ2MB.js";import"./index-1V4e0nUl.js";import"./app-B2E7767C.js";import"./date-msTaMnuE.js";const Y=M.createContext({}),J=({children:t})=>{const{id:a}=E(),{fetchProduct:s}=o.useContext(y.EscolaLMSContext);return o.useEffect(()=>{a&&s(Number(a))},[s,a]),e.jsx(Y.Provider,{value:{},children:t})};var i=(t=>(t.Consultation="App\\Models\\Consultation",t.StationaryEvent="App\\Models\\StationaryEvent",t.Course="App\\Models\\Course",t.Webinar="App\\Models\\Webinar",t))(i||{});const K=t=>t.reduce((a,s)=>{const r=s.productable_type,l=a[r]??[];return{...a,[r]:[...l,s]}},{}),Q=b(c.Col)`
  border: 1px solid ${({theme:t})=>t.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,h=({products:t,linkTo:a})=>e.jsx(Q,{lg:12,children:t.map(s=>e.jsx(m,{to:`${a}/${s.productable_id}`,children:e.jsx(N.Tag,{children:e.jsx(d.Text,{size:"12",children:s.name})})}))}),X=b(c.Row)`
  width: 100%;
  margin: 0 auto !important;
`,Z=()=>{var s;const{product:t}=o.useContext(x.EscolaLMSContext),a=o.useMemo(()=>{var r;return K(((r=t==null?void 0:t.value)==null?void 0:r.productables)||[])},[(s=t==null?void 0:t.value)==null?void 0:s.productables]);return e.jsxs(X,{children:[a[i.Consultation]&&e.jsx(h,{linkTo:"/consultations",products:a[i.Consultation]}),a[i.Webinar]&&e.jsx(h,{linkTo:"/webinar",products:a[i.Webinar]}),a[i.StationaryEvent]&&e.jsx(h,{linkTo:"/event",products:a[i.StationaryEvent]}),a[i.Course]&&e.jsx(h,{linkTo:"/courses",products:a[i.Course]})]})},ee=({title:t})=>n?e.jsx(v.Title,{level:5,as:"h5",children:t}):e.jsx(v.Title,{level:4,as:"h2",children:t}),te=({product:t})=>{var k;const{cart:a,addToCart:s,user:r}=o.useContext(x.EscolaLMSContext),{t:l}=u(),{push:P}=L(),g=(k=r.value)==null?void 0:k.id,f=o.useMemo(()=>{var T;return(T=a==null?void 0:a.value)==null?void 0:T.items.some(S=>Number(S.product_id)===Number(t.id))},[t.id,a]);return o.useMemo(()=>g&&t.owned?e.jsx(d.Text,{size:"12",children:l("PackagePage.ProductOwned")}):f?e.jsx(m,{to:j.cart,children:e.jsx(C,{mode:"secondary",block:n,children:l("EventPage.GoToCheckout")})}):g&&t.buyable&&!t.owned?e.jsx(C,{loading:a.loading,mode:"secondary",block:n,onClick:()=>s(t.id).then(()=>P(j.cart)),children:l("Buy now")}):!t||g&&!t.buyable?e.jsx(d.Text,{size:"12",children:l("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${t.id}`,children:e.jsx(C,{mode:"secondary",block:n,children:l("Buy now")})}),[s,a.loading,t,f,P,l,g])},ae=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:a}=u(),s=t.value;return s?e.jsx(H,{children:e.jsxs(q,{mobile:n,children:[e.jsx(ee,{title:s.name}),e.jsxs("div",{className:n?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(G,{price:s.price,oldPrice:s.price_old,taxRate:s.tax_rate})}),e.jsxs("div",{children:[e.jsx(te,{product:s}),!n&&e.jsxs(e.Fragment,{children:[e.jsxs(d.Text,{size:"12",children:[" ",a("EventPage.30Days")]}),e.jsxs(d.Text,{size:"12",children:[" ",a("PackagePage.PackageIncludes")]}),e.jsx(Z,{}),e.jsxs("div",{className:"pricing-card-features",children:[s.duration&&e.jsx(w.IconText,{icon:e.jsx(I,{}),text:`${a("Duration")}: ${s.duration}`}),s.users_count&&e.jsx(w.IconText,{icon:e.jsx(R,{}),text:`${a("Students")}: ${s.users_count}`})]})]})]})]})]})}):null},se=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:a}=u();return t.value?e.jsx(O,{items:[e.jsx(m,{to:j.home,children:a("Home")}),e.jsx(m,{to:j.packages,children:a("Menu.Packages")}),e.jsx(d.Text,{size:"12",children:t.value.name})]}):null},oe=b.div`
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
`,ne=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:a}=u();return t.value?e.jsx(oe,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(c.Row,{children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(B,{mobile:n,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:n,title:"90%",icon:e.jsx(_,{}),children:a("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:n,title:a("CoursePage.Guarantee"),icon:e.jsx($,{}),children:a("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(p,{mobile:n,title:"5.0",icon:e.jsx(D,{}),children:a("CoursePage.AvarageRating")})})]})]}),e.jsx(c.Col,{lg:4,children:t.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(U,{path:t.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:t.value.categories&&t.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(p,{title:a("CoursePage.CourseCategory"),variant:"label",children:t.value.categories[0].name})})})]})}):null},re=()=>{var r;const{product:t}=o.useContext(y.EscolaLMSContext),{t:a}=u(),s=(r=t.value)==null?void 0:r.description;return s?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(v.Title,{level:4,children:a("PackagePage.DescriptionTitle")}),e.jsx(d.Text,{children:s})]}):null},ie=b.div`
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
`,le=()=>{const{product:t}=o.useContext(x.EscolaLMSContext),{t:a}=u();return t.loading||!t.value?e.jsx(W,{}):e.jsx(ie,{children:e.jsxs(c.Row,{children:[e.jsxs(c.Col,{md:12,lg:9,children:[e.jsx(se,{}),e.jsx(ne,{}),e.jsx(F,{title:a("PackagePage.CompaniesSectionTitle")}),e.jsx(re,{}),e.jsx(V,{title:a("PackagePage.TutorsSectionTitle"),users:t.value.authors})]}),e.jsx(c.Col,{md:12,lg:3,children:e.jsx(ae,{})})]})})},Pe=()=>{var a;const{product:t}=o.useContext(x.EscolaLMSContext);return e.jsx(z,{metaTitle:(a=t.value)==null?void 0:a.name,children:e.jsx(J,{children:e.jsx(A,{children:e.jsx(le,{})})})})};export{Pe as default};

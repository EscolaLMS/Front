import{b as M,J as N,r as i,m as k,j as e,q as x,i as n,y as c,L as m,ar as E,w as d,G as u,T as b,f as p,h as L,o as v,as as C,I as T,at as _,l as I,au as R,av as h,aw as B,ax as z,ay as A,ac as D,ad as G,s as W,C as q}from"./index-CDjsyf2-.js";import{P as O}from"./index-DVLJ25AK.js";import{a as U}from"./PricingCard-DR8bdZX1.js";import{P as F}from"./index-DCZ91LmE.js";import{B as H}from"./index-DehmZbDk.js";import{a as S}from"./ResponsiveImage-BmseR_VP.js";import"./index-BV8UJ7i4.js";const V=M.createContext({}),J=({children:t})=>{const{id:a}=N(),{fetchProduct:s}=i.useContext(k.EscolaLMSContext);return i.useEffect(()=>{a&&s(Number(a))},[s,a]),e.jsx(V.Provider,{value:{},children:t})},K=x.div`
  width: 100%;
  left: 0;
  position: ${n?"fixed":"sticky"};
  top: ${n?"unset":"130px"};
  bottom: ${n?"0":"unset"};
  z-index: 100;
  padding-bottom: ${n?"":"45px"};
`,Q=({children:t})=>e.jsx(K,{children:t});var l=(t=>(t.Consultation="App\\Models\\Consultation",t.StationaryEvent="App\\Models\\StationaryEvent",t.Course="App\\Models\\Course",t.Webinar="App\\Models\\Webinar",t))(l||{});const X=t=>t.reduce((a,s)=>{const o=s.productable_type,r=a[o]??[];return{...a,[o]:[...r,s]}},{}),Y=x(c.Col)`
  border: 1px solid ${({theme:t})=>t.primaryColor};
  margin: 4px auto;
  padding: 4px;
`,j=({products:t,linkTo:a})=>e.jsx(Y,{lg:12,children:t.map(s=>e.jsx(m,{to:`${a}/${s.productable_id}`,children:e.jsx(E.Tag,{children:e.jsx(d.Text,{size:"12",children:s.name})})}))}),Z=x(c.Row)`
  width: 100%;
  margin: 0 auto !important;
`,ee=()=>{var s;const{product:t}=i.useContext(u.EscolaLMSContext),a=i.useMemo(()=>{var o;return X(((o=t==null?void 0:t.value)==null?void 0:o.productables)||[])},[(s=t==null?void 0:t.value)==null?void 0:s.productables]);return e.jsxs(Z,{children:[a[l.Consultation]&&e.jsx(j,{linkTo:"/consultations",products:a[l.Consultation]}),a[l.Webinar]&&e.jsx(j,{linkTo:"/webinar",products:a[l.Webinar]}),a[l.StationaryEvent]&&e.jsx(j,{linkTo:"/event",products:a[l.StationaryEvent]}),a[l.Course]&&e.jsx(j,{linkTo:"/courses",products:a[l.Course]})]})},te=({title:t})=>n?e.jsx(b.Title,{level:5,as:"h5",children:t}):e.jsx(b.Title,{level:4,as:"h2",children:t}),ae=({product:t})=>{var y;const{cart:a,addToCart:s,user:o}=i.useContext(u.EscolaLMSContext),{t:r}=p(),{push:f}=L(),g=(y=o.value)==null?void 0:y.id,w=i.useMemo(()=>{var P;return(P=a==null?void 0:a.value)==null?void 0:P.items.some($=>Number($.product_id)===Number(t.id))},[t.id,a]);return i.useMemo(()=>g&&t.owned?e.jsx(d.Text,{size:"12",children:r("PackagePage.ProductOwned")}):w?e.jsx(m,{to:v.cart,children:e.jsx(C,{mode:"secondary",block:n,children:r("EventPage.GoToCheckout")})}):g&&t.buyable&&!t.owned?e.jsx(C,{loading:a.loading,mode:"secondary",block:n,onClick:()=>s(t.id).then(()=>f(v.cart)),children:r("Buy now")}):!t||g&&!t.buyable?e.jsx(d.Text,{size:"12",children:r("EventPage.UnavailableEvent")}):e.jsx(m,{to:`/login?referrer=/package/${t.id}`,children:e.jsx(C,{mode:"secondary",block:n,children:r("Buy now")})}),[s,a.loading,t,w,f,r,g])},se=()=>{const{product:t}=i.useContext(u.EscolaLMSContext),{t:a}=p(),s=t.value;return s?e.jsx(Q,{children:e.jsxs(U,{mobile:n,children:[e.jsx(te,{title:s.name}),e.jsxs("div",{className:n?"pricing-card-footer":"",children:[e.jsx("div",{children:e.jsx(F,{price:s.price,oldPrice:s.price_old,taxRate:s.tax_rate})}),e.jsxs("div",{children:[e.jsx(ae,{product:s}),!n&&e.jsxs(e.Fragment,{children:[e.jsxs(d.Text,{size:"12",children:[" ",a("EventPage.30Days")]}),e.jsxs(d.Text,{size:"12",children:[" ",a("PackagePage.PackageIncludes")]}),e.jsx(ee,{}),e.jsxs("div",{className:"pricing-card-features",children:[s.duration&&e.jsx(T.IconText,{icon:e.jsx(_,{}),text:`${a("Duration")}: ${s.duration}`}),s.users_count&&e.jsx(T.IconText,{icon:e.jsx(I,{}),text:`${a("Students")}: ${s.users_count}`})]})]})]})]})]})}):null},ne=()=>{const{product:t}=i.useContext(u.EscolaLMSContext),{t:a}=p();return t.value?e.jsx(H,{items:[e.jsx(m,{to:v.home,children:a("Home")}),e.jsx(m,{to:v.packages,children:a("Menu.Packages")}),e.jsx(d.Text,{size:"12",children:t.value.name})]}):null},ie=x.div`
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
`,oe=()=>{const{product:t}=i.useContext(u.EscolaLMSContext),{t:a}=p();return t.value?e.jsx(ie,{children:e.jsxs("section",{className:"package-main-info with-border",children:[e.jsxs(c.Row,{children:[e.jsxs(c.Col,{lg:7,children:[e.jsx(R,{mobile:n,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(h,{mobile:n,title:"90%",icon:e.jsx(B,{}),children:a("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(h,{mobile:n,title:a("CoursePage.Guarantee"),icon:e.jsx(z,{}),children:a("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(h,{mobile:n,title:"5.0",icon:e.jsx(A,{}),children:a("CoursePage.AvarageRating")})})]})]}),e.jsx(c.Col,{lg:4,children:t.value.poster_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(S,{path:t.value.poster_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsx("div",{className:"labels-row labels-row--bottom",children:t.value.categories&&t.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(h,{title:a("CoursePage.CourseCategory"),variant:"label",children:t.value.categories[0].name})})})]})}):null},re=x.div`
  .section-companies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .companies-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 70px;
      .single-company {
        max-height: 85px;
        max-width: 65px;
      }
      @media (max-width: 768px) {
        column-gap: 0;
        justify-content: space-between;
        width: 100%;
      }
    }

    p {
      max-width: 220px;
      margin-right: 50px;
    }
  }
`,le=({title:t})=>{const{settings:a}=i.useContext(u.EscolaLMSContext);return e.jsx(re,{children:e.jsxs("section",{className:"section-companies with-border",children:[e.jsx(d.Text,{children:e.jsx("strong",{children:t})}),e.jsx("div",{className:"companies-row",children:a&&a.value.courseLogos&&Object.values(a.value.courseLogos).map((s,o)=>{var r;return e.jsx("div",{className:"single-company",children:e.jsx(S,{path:((r=a==null?void 0:a.value)==null?void 0:r.courseLogos[`logo${o+1}`])||"",srcSizes:[100,200,300]})},o)})})]})})},ce=x.div`
  .section-tutor {
    .ranking-row {
      display: none !important;
    }
    .title {
      margin-bottom: 20px;
    }
  }
`,de=x(D)`
  margin-bottom: 20px;
`,xe=({users:t,title:a})=>t!=null&&t.length?e.jsx(ce,{children:e.jsxs("section",{className:"section-tutor with-border padding-right",children:[e.jsx(b.Title,{as:"h3",level:4,className:"title",children:a}),t.map(s=>e.jsx(de,{mobile:n,avatar:{alt:`${s.first_name} ${s.last_name}`,src:`${G}/api/images/img?path=${s.path_avatar}`||""},rating:{ratingValue:4.1},title:e.jsx(e.Fragment,{}),fullName:e.jsx(m,{to:`/tutors/${s.id}`,children:`${s.first_name} ${s.last_name}`}),coursesInfo:"8 Curses",description:s.bio}))]})}):null,ue=()=>{var o;const{product:t}=i.useContext(k.EscolaLMSContext),{t:a}=p(),s=(o=t.value)==null?void 0:o.description;return s?e.jsxs("section",{className:"package-description-short with-border",children:[e.jsx(b.Title,{level:4,children:a("PackagePage.DescriptionTitle")}),e.jsx(d.Text,{children:s})]}):null},me=x.div`
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
`,pe=()=>{const{product:t}=i.useContext(u.EscolaLMSContext),{t:a}=p();return t.loading||!t.value?e.jsx(O,{}):e.jsx(me,{children:e.jsxs(c.Row,{children:[e.jsxs(c.Col,{md:12,lg:9,children:[e.jsx(ne,{}),e.jsx(oe,{}),e.jsx(le,{title:a("PackagePage.CompaniesSectionTitle")}),e.jsx(ue,{}),e.jsx(xe,{title:a("PackagePage.TutorsSectionTitle"),users:t.value.authors})]}),e.jsx(c.Col,{md:12,lg:3,children:e.jsx(se,{})})]})})},ye=()=>{var a;const{product:t}=i.useContext(u.EscolaLMSContext);return e.jsx(W,{metaTitle:(a=t.value)==null?void 0:a.name,children:e.jsx(J,{children:e.jsx(q,{children:e.jsx(pe,{})})})})};export{ye as default};
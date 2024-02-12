import{f as g,j as e,af as R,l,ao as D,r,h as S,v as k,o as C,G as F,q as j,i as p,al as H,n as d,am as m,ab as q,ac as z,ad as G,k as B,m as A,V as U,T as J,W as V,Y,C as w,E as K,L as Q,at as X}from"./index-BsLXwVX-.js";import{C as Z,T as b}from"./index-C-adksy7.js";import{B as O}from"./index-DG-fcZoy.js";import{a as ee}from"./ResponsiveImage-KgADMS5g.js";import{f as L}from"./date-C5z6T5_w.js";import{P as te}from"./PricingCard-07H49TcA.js";import{W as se}from"./index-BDK5YOam.js";import{P as ae}from"./index-RXy4nqCb.js";import"./app-B2E7767C.js";import"./index-DD3hn7qC.js";import"./index-B6JCoH2u.js";const $=({description:t,title:a})=>{const{t:o}=g();return t?e.jsx(e.Fragment,{children:t&&R(t)!==""&&e.jsxs("section",{className:"with-border",children:[e.jsx(l.Title,{level:4,children:a??o("SectionDescriptionTitle")}),e.jsx(D,{children:t})]})}):null},oe=()=>{const{webinar:t}=r.useContext(S.EscolaLMSContext),{t:a}=g();return t.value?e.jsx(O,{items:[e.jsx(k,{to:C.home,children:a("Home")}),e.jsx(k,{to:C.webinars,children:a("Menu.Webinars")}),e.jsx(F.Text,{size:"12",children:t.value.name})]}):null},ie=j.div`
  .webinar-main-info {
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
`,ne=()=>{const{webinar:t}=r.useContext(S.EscolaLMSContext),{t:a}=g();return t.value?e.jsx(ie,{children:e.jsxs("section",{className:"webinar-main-info with-border",children:[e.jsxs(p.Row,{children:[e.jsxs(p.Col,{lg:7,children:[e.jsx(H,{mobile:d,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(m,{mobile:d,title:"90%",icon:e.jsx(q,{}),children:a("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(m,{mobile:d,title:a("CoursePage.Guarantee"),icon:e.jsx(z,{}),children:a("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(m,{mobile:d,title:"5.0",icon:e.jsx(G,{}),children:a("CoursePage.AvarageRating")})})]})]}),e.jsx(p.Col,{lg:4,children:t.value.image_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(ee,{path:t.value.image_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsxs("div",{className:"labels-row labels-row--bottom",children:[t.value.tags&&t.value.tags.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(m,{title:a("WebinarPage.WebinarTags"),variant:"label",children:t.value.tags[0].title})}),t.value.active_from&&e.jsx("div",{className:"single-label",children:e.jsx(m,{title:a("WebinarPage.StartDate"),variant:"label",children:t.value.active_from?L(t.value.active_from):"---"})}),t.value.active_to&&e.jsx("div",{className:"single-label",children:e.jsx(m,{title:a("WebinarPage.EndDate"),variant:"label",children:t.value.active_to?L(t.value.active_to):"---"})})]})]})}):null},le=j.div`
  width: 100%;
  left: 0;
  position: ${d?"fixed":"sticky"};
  top: ${d?"unset":"130px"};
  bottom: ${d?"0":"unset"};
  z-index: 100;
  padding-bottom: ${d?"":"45px"};
`,re=()=>{var y,P;const[t,a]=r.useState(6),[o,n]=r.useState(!1),{cart:i,addToCart:I,user:u,webinar:{value:s}}=r.useContext(B.EscolaLMSContext),{t:c}=g(),{push:v}=A(),T=r.useMemo(()=>{var x;return(x=i==null?void 0:i.value)==null?void 0:x.items.some(f=>{var h;return Number(f.product_id)===Number((h=s==null?void 0:s.product)==null?void 0:h.id)})},[(y=s==null?void 0:s.product)==null?void 0:y.id,i]);return r.useEffect(()=>{var x,f,h,E,W,M,_,N;s!=null&&s.deadline&&U(new Date(s==null?void 0:s.deadline))?a(0):T?a(1):(x=u.value)!=null&&x.id&&((f=s==null?void 0:s.product)!=null&&f.owned)&&(s!=null&&s.is_ended)?a(2):(h=u.value)!=null&&h.id&&((E=s==null?void 0:s.product)!=null&&E.owned)&&(s!=null&&s.in_coming)?a(3):(W=u.value)!=null&&W.id&&((M=s==null?void 0:s.product)!=null&&M.owned)&&(s!=null&&s.is_started)?a(7):(_=u.value)!=null&&_.id&&(s!=null&&s.product)&&(s!=null&&s.product.buyable)?a(4):!(s!=null&&s.product)||(N=u.value)!=null&&N.id&&!(s!=null&&s.product.buyable)?a(5):a(6)},[T,s,(P=u.value)==null?void 0:P.id]),e.jsxs(e.Fragment,{children:[t===0&&e.jsx(l.Text,{children:c("EventPage.IsFinished")}),t===1&&e.jsx(l.Button,{mode:"secondary",onClick:()=>v(C.cart),children:c("EventPage.GoToCheckout")}),t===2&&e.jsx(l.Button,{onClick:()=>v(`/webinar/${s==null?void 0:s.id}`),mode:"secondary",children:c("Show")}),t===3&&e.jsx(l.Text,{children:c("EventPage.NotStarted")}),t===7&&e.jsx(l.Button,{loading:i.loading,mode:"secondary",onClick:()=>n(!0),children:c("Join")}),t===4&&e.jsx(l.Button,{loading:i.loading,mode:"secondary",onClick:()=>{var x;return I(Number((x=s==null?void 0:s.product)==null?void 0:x.id)).then(()=>v(C.cart))},children:c("Buy now")}),t===5&&e.jsx(l.Text,{children:c("EventPage.UnavailableEvent")}),t===6&&e.jsx(l.Button,{onClick:()=>v(`/login?referrer=/webinar/${s==null?void 0:s.id}`),mode:"secondary",children:c("Buy now")}),o&&(s==null?void 0:s.id)&&e.jsx(se,{visible:o,onClose:()=>n(!1),webinarId:s.id})]})},de=()=>{var o,n,i;const{webinar:{value:t}}=r.useContext(S.EscolaLMSContext),{t:a}=g();return e.jsx(le,{children:e.jsxs(te.PricingCard,{mobile:d,children:[e.jsx(J.Title,{level:4,as:"h2",children:t==null?void 0:t.name}),e.jsx(ae,{price:(o=t==null?void 0:t.product)==null?void 0:o.price,taxRate:(n=t==null?void 0:t.product)==null?void 0:n.tax_rate,oldPrice:((i=t==null?void 0:t.product)==null?void 0:i.price_old)||void 0}),e.jsx(re,{}),e.jsxs("div",{className:"pricing-card-features",children:[(t==null?void 0:t.duration)&&e.jsx(l.IconText,{icon:e.jsx(V,{}),text:`${a("Duration")}: ${t.duration} ${t.duration==="1"?a("Hour"):a("Hours")}`}),t!=null&&t.users_count?e.jsx(l.IconText,{icon:e.jsx(Y,{}),text:`${a("Students")}: ${t==null?void 0:t.users_count}`}):""]})]})})},ce=j.div`
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
`,xe=()=>{var o,n,i;const{webinar:t}=r.useContext(S.EscolaLMSContext),{t:a}=g();return e.jsx(w,{children:e.jsx(ce,{children:e.jsxs(p.Row,{children:[e.jsxs(p.Col,{md:12,lg:9,children:[e.jsx(oe,{}),e.jsx(ne,{}),e.jsx(Z,{title:a("WebinarPage.CompaniesTitle")}),e.jsx(b,{users:((o=t.value)==null?void 0:o.trainers)||[],title:a("Tutors")}),e.jsx($,{description:(n=t.value)==null?void 0:n.description}),e.jsx($,{title:a("Agenda"),description:(i=t.value)==null?void 0:i.agenda})]}),e.jsx(p.Col,{md:12,lg:3,children:e.jsx(de,{})})]})})})},ye=()=>{var n;const{fetchWebinar:t,webinar:a}=r.useContext(B.EscolaLMSContext),{id:o}=K();return r.useEffect(()=>{t(Number(o))},[t,o]),e.jsxs(Q,{metaTitle:((n=a==null?void 0:a.value)==null?void 0:n.name)||"Loading",children:[a.loading&&e.jsx(X,{}),!a.loading&&a.value&&e.jsx(xe,{})]})};export{ye as default};

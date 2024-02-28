import{f as p,j as e,ag as z,o as R,au as F,r as l,A as j,v as B,l as S,T as C,q as T,s as m,an as H,k as r,ao as u,ap as A,aq as G,ar as U,h as D,i as J,a0 as K,p as h,K as L,at as w,W as Q,C as V,G as X,L as Y,az as Z}from"./index-DPt-kbd_.js";import{C as b,T as O}from"./index-BoXUmtCD.js";import{B as ee}from"./index-gbrwycAH.js";import{a as te}from"./ResponsiveImage-CM6EDuxv.js";import{f as $}from"./date-BM4UYDeF.js";import{P as se}from"./PricingCard-CAfhZRxf.js";import{W as ae}from"./index-_PaRvMkQ.js";import{P as oe}from"./index-VcbCZUss.js";import"./app-B2E7767C.js";import"./index-BI9dgBs_.js";import"./index-DB6D8qFb.js";const I=({description:t,title:a})=>{const{t:o}=p();return t?e.jsx(e.Fragment,{children:t&&z(t)!==""&&e.jsxs("section",{className:"with-border",children:[e.jsx(R.Title,{level:4,children:a??o("SectionDescriptionTitle")}),e.jsx(F,{children:t})]})}):null},ie=()=>{const{webinar:t}=l.useContext(j.EscolaLMSContext),{t:a}=p();return t.value?e.jsx(ee,{items:[e.jsx(B,{to:S.home,children:a("Home")}),e.jsx(B,{to:S.webinars,children:a("Menu.Webinars")}),e.jsx(C.Text,{size:"12",children:t.value.name})]}):null},ne=T.div`
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
`,le=()=>{const{webinar:t}=l.useContext(j.EscolaLMSContext),{t:a}=p();return t.value?e.jsx(ne,{children:e.jsxs("section",{className:"webinar-main-info with-border",children:[e.jsxs(m.Row,{children:[e.jsxs(m.Col,{lg:7,children:[e.jsx(H,{mobile:r,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(u,{mobile:r,title:"90%",icon:e.jsx(A,{}),children:a("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(u,{mobile:r,title:a("CoursePage.Guarantee"),icon:e.jsx(G,{}),children:a("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(u,{mobile:r,title:"5.0",icon:e.jsx(U,{}),children:a("CoursePage.AvarageRating")})})]})]}),e.jsx(m.Col,{lg:4,children:t.value.image_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(te,{path:t.value.image_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsxs("div",{className:"labels-row labels-row--bottom",children:[t.value.tags&&t.value.tags.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(u,{title:a("WebinarPage.WebinarTags"),variant:"label",children:t.value.tags[0].title})}),t.value.active_from&&e.jsx("div",{className:"single-label",children:e.jsx(u,{title:a("WebinarPage.StartDate"),variant:"label",children:t.value.active_from?$(t.value.active_from):"---"})}),t.value.active_to&&e.jsx("div",{className:"single-label",children:e.jsx(u,{title:a("WebinarPage.EndDate"),variant:"label",children:t.value.active_to?$(t.value.active_to):"---"})})]})]})}):null},re=T.div`
  width: 100%;
  left: 0;
  position: ${r?"fixed":"sticky"};
  top: ${r?"unset":"130px"};
  bottom: ${r?"0":"unset"};
  z-index: 100;
  padding-bottom: ${r?"":"45px"};
`,de=()=>{var P,W;const[t,a]=l.useState(6),[o,n]=l.useState(!1),{cart:i,addToCart:q,user:x,webinar:{value:s}}=l.useContext(D.EscolaLMSContext),{t:d}=p(),{push:v}=J(),y=l.useMemo(()=>{var c;return(c=i==null?void 0:i.value)==null?void 0:c.items.some(f=>{var g;return Number(f.product_id)===Number((g=s==null?void 0:s.product)==null?void 0:g.id)})},[(P=s==null?void 0:s.product)==null?void 0:P.id,i]);return l.useEffect(()=>{var c,f,g,M,_,E,N,k;s!=null&&s.deadline&&K(new Date(s==null?void 0:s.deadline))?a(0):y?a(1):(c=x.value)!=null&&c.id&&((f=s==null?void 0:s.product)!=null&&f.owned)&&(s!=null&&s.is_ended)?a(2):(g=x.value)!=null&&g.id&&((M=s==null?void 0:s.product)!=null&&M.owned)&&(s!=null&&s.in_coming)?a(3):(_=x.value)!=null&&_.id&&((E=s==null?void 0:s.product)!=null&&E.owned)&&(s!=null&&s.is_started)?a(7):(N=x.value)!=null&&N.id&&(s!=null&&s.product)&&(s!=null&&s.product.buyable)?a(4):!(s!=null&&s.product)||(k=x.value)!=null&&k.id&&!(s!=null&&s.product.buyable)?a(5):a(6)},[y,s,(W=x.value)==null?void 0:W.id]),e.jsxs(e.Fragment,{children:[t===0&&e.jsx(C.Text,{children:d("EventPage.IsFinished")}),t===1&&e.jsx(h.Button,{mode:"secondary",onClick:()=>v(S.cart),children:d("EventPage.GoToCheckout")}),t===2&&e.jsx(h.Button,{onClick:()=>v(`/webinar/${s==null?void 0:s.id}`),mode:"secondary",children:d("Show")}),t===3&&e.jsx(C.Text,{children:d("EventPage.NotStarted")}),t===7&&e.jsx(h.Button,{loading:i.loading,mode:"secondary",onClick:()=>n(!0),children:d("Join")}),t===4&&e.jsx(h.Button,{loading:i.loading,mode:"secondary",onClick:()=>{var c;return q(Number((c=s==null?void 0:s.product)==null?void 0:c.id)).then(()=>v(S.cart))},children:d("Buy now")}),t===5&&e.jsx(C.Text,{children:d("EventPage.UnavailableEvent")}),t===6&&e.jsx(h.Button,{onClick:()=>v(`/login?referrer=/webinar/${s==null?void 0:s.id}`),mode:"secondary",children:d("Buy now")}),o&&(s==null?void 0:s.id)&&e.jsx(ae,{visible:o,onClose:()=>n(!1),webinarId:s.id})]})},ce=()=>{var o,n,i;const{webinar:{value:t}}=l.useContext(j.EscolaLMSContext),{t:a}=p();return e.jsx(re,{children:e.jsxs(se.PricingCard,{mobile:r,children:[e.jsx(R.Title,{level:4,as:"h2",children:t==null?void 0:t.name}),e.jsx(oe,{price:(o=t==null?void 0:t.product)==null?void 0:o.price,taxRate:(n=t==null?void 0:t.product)==null?void 0:n.tax_rate,oldPrice:((i=t==null?void 0:t.product)==null?void 0:i.price_old)||void 0}),e.jsx(de,{}),e.jsxs("div",{className:"pricing-card-features",children:[(t==null?void 0:t.duration)&&e.jsx(L.IconText,{icon:e.jsx(w,{}),text:`${a("Duration")}: ${t.duration} ${t.duration==="1"?a("Hour"):a("Hours")}`}),t!=null&&t.users_count?e.jsx(L.IconText,{icon:e.jsx(Q,{}),text:`${a("Students")}: ${t==null?void 0:t.users_count}`}):""]})]})})},xe=T.div`
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
`,ue=()=>{var o,n,i;const{webinar:t}=l.useContext(j.EscolaLMSContext),{t:a}=p();return e.jsx(V,{children:e.jsx(xe,{children:e.jsxs(m.Row,{children:[e.jsxs(m.Col,{md:12,lg:9,children:[e.jsx(ie,{}),e.jsx(le,{}),e.jsx(b,{title:a("WebinarPage.CompaniesTitle")}),e.jsx(O,{users:((o=t.value)==null?void 0:o.trainers)||[],title:a("Tutors")}),e.jsx(I,{description:(n=t.value)==null?void 0:n.description}),e.jsx(I,{title:a("Agenda"),description:(i=t.value)==null?void 0:i.agenda})]}),e.jsx(m.Col,{md:12,lg:3,children:e.jsx(ce,{})})]})})})},Pe=()=>{var n;const{fetchWebinar:t,webinar:a}=l.useContext(D.EscolaLMSContext),{id:o}=X();return l.useEffect(()=>{t(Number(o))},[t,o]),e.jsxs(Y,{metaTitle:((n=a==null?void 0:a.value)==null?void 0:n.name)||"Loading",children:[a.loading&&e.jsx(Z,{}),!a.loading&&a.value&&e.jsx(ue,{})]})};export{Pe as default};

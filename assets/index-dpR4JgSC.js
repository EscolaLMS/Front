import{a as p,j as e,ab as q,T as D,aD as z,D as j,L as B,f as S,o as C,q as T,J as m,aE as G,g as r,aF as u,aG as J,aH as A,aI as U,as as K,ar as I,c as R,b as w,i as Q,p as h,W as L,aJ as V,au as X,C as Y,H as Z,k as b,aK as O}from"./index-C8RYle4a.js";import{r as n}from"./sentry-DZqhWugq.js";import{C as ee,T as te}from"./index-dNe3mM-N.js";import{B as se}from"./index-xLklIcjt.js";import{P as ae}from"./PricingCard-BnHr5ojY.js";import{W as oe}from"./index-7aUDYa40.js";import{P as ie}from"./index-j13jBhAP.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";import"./index-DvpE0QnH.js";import"./useRoles-BTPJFye5.js";import"./questionnaire-CXWDgbJ4.js";import"./index-B7vnVY_d.js";import"./index-BWa02Npu.js";const $=({description:t,title:a})=>{const{t:o}=p();return t?e.jsx(e.Fragment,{children:t&&q(t)!==""&&e.jsxs("section",{className:"with-border",children:[e.jsx(D.Title,{level:4,children:a??o("SectionDescriptionTitle")}),e.jsx(z,{children:t})]})}):null},ne=()=>{const{webinar:t}=n.useContext(j.EscolaLMSContext),{t:a}=p();return t.value?e.jsx(se,{items:[e.jsx(B,{to:S.home,children:a("Home")}),e.jsx(B,{to:S.webinars,children:a("Menu.Webinars")}),e.jsx(C.Text,{size:"12",children:t.value.name})]}):null},le=T.div`
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
`,re=()=>{const{webinar:t}=n.useContext(j.EscolaLMSContext),{t:a}=p();return t.value?e.jsx(le,{children:e.jsxs("section",{className:"webinar-main-info with-border",children:[e.jsxs(m.Row,{children:[e.jsxs(m.Col,{lg:7,children:[e.jsx(G,{mobile:r,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(u,{mobile:r,title:"90%",icon:e.jsx(J,{}),children:a("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(u,{mobile:r,title:a("CoursePage.Guarantee"),icon:e.jsx(A,{}),children:a("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(u,{mobile:r,title:"5.0",icon:e.jsx(U,{}),children:a("CoursePage.AvarageRating")})})]})]}),e.jsx(m.Col,{lg:4,children:t.value.image_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(K,{path:t.value.image_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsxs("div",{className:"labels-row labels-row--bottom",children:[t.value.tags&&t.value.tags.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(u,{title:a("WebinarPage.WebinarTags"),variant:"label",children:t.value.tags[0].title})}),t.value.active_from&&e.jsx("div",{className:"single-label",children:e.jsx(u,{title:a("WebinarPage.StartDate"),variant:"label",children:t.value.active_from?I(t.value.active_from):"---"})}),t.value.active_to&&e.jsx("div",{className:"single-label",children:e.jsx(u,{title:a("WebinarPage.EndDate"),variant:"label",children:t.value.active_to?I(t.value.active_to):"---"})})]})]})}):null},de=T.div`
  width: 100%;
  left: 0;
  position: ${r?"fixed":"sticky"};
  top: ${r?"unset":"130px"};
  bottom: ${r?"0":"unset"};
  z-index: 100;
  padding-bottom: ${r?"":"45px"};
`,ce=()=>{var P,M;const[t,a]=n.useState(6),[o,l]=n.useState(!1),{cart:i,addToCart:H,user:x,webinar:{value:s}}=n.useContext(R.EscolaLMSContext),{t:d}=p(),{push:v}=w(),y=n.useMemo(()=>{var c;return(c=i==null?void 0:i.value)==null?void 0:c.items.some(f=>{var g;return Number(f.product_id)===Number((g=s==null?void 0:s.product)==null?void 0:g.id)})},[(P=s==null?void 0:s.product)==null?void 0:P.id,i]);n.useEffect(()=>{var c,f,g,W,E,_,N,k;s!=null&&s.deadline&&Q(new Date(s==null?void 0:s.deadline))?a(0):y?a(1):(c=x.value)!=null&&c.id&&((f=s==null?void 0:s.product)!=null&&f.owned)&&(s!=null&&s.is_ended)?a(2):(g=x.value)!=null&&g.id&&((W=s==null?void 0:s.product)!=null&&W.owned)&&(s!=null&&s.in_coming)?a(3):(E=x.value)!=null&&E.id&&((_=s==null?void 0:s.product)!=null&&_.owned)&&(s!=null&&s.is_started)?a(7):(N=x.value)!=null&&N.id&&(s!=null&&s.product)&&(s!=null&&s.product.buyable)?a(4):!(s!=null&&s.product)||(k=x.value)!=null&&k.id&&!(s!=null&&s.product.buyable)?a(5):a(6)},[y,s,(M=x.value)==null?void 0:M.id]);const F=n.useCallback(()=>{l(!1)},[]);return e.jsxs(e.Fragment,{children:[t===0&&e.jsx(C.Text,{children:d("EventPage.IsFinished")}),t===1&&e.jsx(h.Button,{mode:"secondary",onClick:()=>v(S.cart),children:d("EventPage.GoToCheckout")}),t===2&&e.jsx(h.Button,{onClick:()=>v(`/webinar/${s==null?void 0:s.id}`),mode:"secondary",children:d("Show")}),t===3&&e.jsx(C.Text,{children:d("EventPage.NotStarted")}),t===7&&e.jsx(h.Button,{loading:i.loading,mode:"secondary",onClick:()=>l(!0),children:d("Join")}),t===4&&e.jsx(h.Button,{loading:i.loading,mode:"secondary",onClick:()=>{var c;return H(Number((c=s==null?void 0:s.product)==null?void 0:c.id)).then(()=>v(S.cart))},children:d("Buy now")}),t===5&&e.jsx(C.Text,{children:d("EventPage.UnavailableEvent")}),t===6&&e.jsx(h.Button,{onClick:()=>v(`/login?referrer=/webinar/${s==null?void 0:s.id}`),mode:"secondary",children:d("Buy now")}),o&&(s==null?void 0:s.id)&&e.jsx(oe,{visible:o,onClose:F,webinarId:s.id})]})},xe=()=>{var o,l,i;const{webinar:{value:t}}=n.useContext(j.EscolaLMSContext),{t:a}=p();return e.jsx(de,{children:e.jsxs(ae.PricingCard,{mobile:r,children:[e.jsx(D.Title,{level:4,as:"h2",children:t==null?void 0:t.name}),e.jsx(ie,{price:(o=t==null?void 0:t.product)==null?void 0:o.price,taxRate:(l=t==null?void 0:t.product)==null?void 0:l.tax_rate,oldPrice:((i=t==null?void 0:t.product)==null?void 0:i.price_old)||void 0}),e.jsx(ce,{}),e.jsxs("div",{className:"pricing-card-features",children:[(t==null?void 0:t.duration)&&e.jsx(L.IconText,{icon:e.jsx(V,{}),text:`${a("Duration")}: ${t.duration} ${t.duration==="1"?a("Hour"):a("Hours")}`}),t!=null&&t.users_count?e.jsx(L.IconText,{icon:e.jsx(X,{}),text:`${a("Students")}: ${t==null?void 0:t.users_count}`}):""]})]})})},ue=T.div`
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
`,me=()=>{var o,l,i;const{webinar:t}=n.useContext(j.EscolaLMSContext),{t:a}=p();return e.jsx(Y,{children:e.jsx(ue,{children:e.jsxs(m.Row,{children:[e.jsxs(m.Col,{md:12,lg:9,children:[e.jsx(ne,{}),e.jsx(re,{}),e.jsx(ee,{title:a("WebinarPage.CompaniesTitle")}),e.jsx(te,{users:((o=t.value)==null?void 0:o.trainers)||[],title:a("Tutors")}),e.jsx($,{description:(l=t.value)==null?void 0:l.description}),e.jsx($,{title:a("Agenda"),description:(i=t.value)==null?void 0:i.agenda})]}),e.jsx(m.Col,{md:12,lg:3,children:e.jsx(xe,{})})]})})})},_e=()=>{var l;const{fetchWebinar:t,webinar:a}=n.useContext(R.EscolaLMSContext),{id:o}=Z();return n.useEffect(()=>{t(Number(o))},[t,o]),e.jsxs(b,{metaTitle:((l=a==null?void 0:a.value)==null?void 0:l.name)||"Loading",children:[a.loading&&e.jsx(O,{}),!a.loading&&a.value&&e.jsx(me,{})]})};export{_e as default};
//# sourceMappingURL=index-dpR4JgSC.js.map

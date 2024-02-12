import{b as Y,E as J,r as l,k as N,j as e,h as p,f as u,v as y,o as j,G as A,q as g,i as m,al as w,n as E,am as C,ab as K,ac as Q,ad as Z,m as ee,V,T as b,l as o,an as te,W as se,Y as ie,a9 as ae,af as re,ao as ne,X as oe,ap as le,ak as de,L as ce,C as xe}from"./index-BsLXwVX-.js";import{P as me}from"./index-DduWXmdR.js";import{B as pe}from"./index-DG-fcZoy.js";import{a as X}from"./ResponsiveImage-KgADMS5g.js";import{f as ue}from"./date-C5z6T5_w.js";import{P as q}from"./PricingCard-07H49TcA.js";import{f as z}from"./index-B6JCoH2u.js";import{P as he}from"./index-RXy4nqCb.js";import{D as ge}from"./index-DmvhSXYW.js";import{C as T}from"./index-B1fleA7X.js";import{E as _}from"./index-BAf7LWsI.js";import"./app-B2E7767C.js";import"./index-2LkLTXFl.js";import"./index-DrXkeQ_F.js";import"./index-Dv47bB8G.js";const je=Y.createContext({}),Ee=({children:t})=>{const{id:s}=J(),{fetchStationaryEvent:i}=l.useContext(N.EscolaLMSContext);return l.useEffect(()=>{s&&i(Number(s))},[i,s]),e.jsx(je.Provider,{value:{},children:t})},ve=()=>{const{stationaryEvent:t}=l.useContext(p.EscolaLMSContext),{t:s}=u();return t.value?e.jsx(pe,{items:[e.jsx(y,{to:j.home,children:s("Home")}),e.jsx(y,{to:j.events,children:s("Menu.Events")}),e.jsx(A.Text,{size:"12",children:t.value.name})]}):null},Ce=g.div`
  .event-main-info {
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
`,fe=()=>{const{stationaryEvent:t}=l.useContext(p.EscolaLMSContext),{t:s}=u();return t.value?e.jsx(Ce,{children:e.jsxs("section",{className:"event-main-info with-border",children:[e.jsxs(m.Row,{children:[e.jsxs(m.Col,{lg:7,children:[e.jsx(w,{mobile:E,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(C,{mobile:E,title:"90%",icon:e.jsx(K,{}),children:s("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(C,{mobile:E,title:s("CoursePage.Guarantee"),icon:e.jsx(Q,{}),children:s("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(C,{mobile:E,title:"5.0",icon:e.jsx(Z,{}),children:s("CoursePage.AvarageRating")})})]})]}),e.jsx(m.Col,{lg:4,children:t.value.image_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(X,{path:t.value.image_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsxs("div",{className:"labels-row labels-row--bottom",children:[t.value.categories&&t.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(C,{title:s("CoursePage.CourseCategory"),variant:"label",children:t.value.categories[0].name})}),t.value.started_at&&e.jsx("div",{className:"single-label",children:e.jsx(C,{title:s("CoursePage.StartDate"),variant:"label",children:t.value.started_at?ue(t.value.started_at):"---"})})]})]})}):null};var d=(t=>(t[t.FINISHED=0]="FINISHED",t[t.IN_CART=1]="IN_CART",t[t.USER_BOUGHT_AND_EVENT_FINISHED=2]="USER_BOUGHT_AND_EVENT_FINISHED",t[t.USER_BOUGHT=3]="USER_BOUGHT",t[t.USER_LOGGED_AND_PRODUCT_AVAILABLE=4]="USER_LOGGED_AND_PRODUCT_AVAILABLE",t[t.PRODUCT_UNAVAILABLE=5]="PRODUCT_UNAVAILABLE",t[t.DEFAULT=6]="DEFAULT",t))(d||{});const be=({event:t})=>{var L,D,P,I,U,R,k,G,O,H,$;const[s,i]=l.useState(d.DEFAULT),{cart:n,addToCart:a,user:r}=l.useContext(N.EscolaLMSContext),{t:c}=u(),{push:h}=ee(),S=l.useMemo(()=>{var x;return(x=n==null?void 0:n.value)==null?void 0:x.items.some(f=>{var v;return Number(f.product_id)===Number((v=t.product)==null?void 0:v.id)})},[(L=t.product)==null?void 0:L.id,n]);return l.useEffect(()=>{var x,f,v,M,F,B;V(new Date(t.finished_at||""))?i(d.FINISHED):S?i(d.IN_CART):(x=r.value)!=null&&x.id&&((f=t.product)!=null&&f.owned)&&V(new Date(t.finished_at||""))?i(d.USER_BOUGHT_AND_EVENT_FINISHED):(v=r.value)!=null&&v.id&&((M=t.product)!=null&&M.owned)?i(d.USER_BOUGHT):(F=r.value)!=null&&F.id&&t.product&&t.product.buyable?i(d.USER_LOGGED_AND_PRODUCT_AVAILABLE):!t.product||(B=r.value)!=null&&B.id&&!t.product.buyable?i(d.PRODUCT_UNAVAILABLE):i(d.DEFAULT)},[S,t,(D=r.value)==null?void 0:D.id]),E?e.jsxs(q.PricingCard,{mobile:!0,children:[e.jsx(b.Title,{level:5,as:"h5",children:t.name}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsxs("div",{children:[((k=t.product)==null?void 0:k.price_old)&&e.jsx("div",{className:"pricing-card-discount",children:e.jsxs(b.Title,{level:5,as:"h5",children:[z((G=t.product)==null?void 0:G.price_old,(O=t.product)==null?void 0:O.tax_rate)," ","zł"]})}),e.jsxs(b.Title,{level:4,as:"h4",children:[z((H=t.product)==null?void 0:H.price,($=t.product)==null?void 0:$.tax_rate)," zł"]})]}),e.jsx("div",{children:S?e.jsx(o.Button,{block:!0,mode:"secondary",onClick:()=>h(j.cart),children:c("EventPage.GoToCheckout")}):r.value&&t.product?e.jsx(o.Button,{block:!0,mode:"secondary",onClick:()=>{var x;return a(Number((x=t.product)==null?void 0:x.id)).then(()=>h(j.cart))},children:c("Buy now")}):t.product?e.jsx(o.Button,{onClick:()=>h(`/login?referrer=/event/${t.id}`),block:!0,mode:"secondary",children:c("Login to buy")}):e.jsx(o.Text,{children:c("EventPage.UnavailableEvent")})})]})]}):e.jsxs(q.PricingCard,{children:[e.jsx(b.Title,{level:4,as:"h2",children:t.name}),e.jsx(he,{price:(P=t.product)==null?void 0:P.price,oldPrice:(I=t.product)==null?void 0:I.price_old,taxRate:(U=t.product)==null?void 0:U.tax_rate}),s===d.FINISHED&&e.jsx(o.Text,{children:c("EventPage.IsFinished")}),s===d.IN_CART&&e.jsx(o.Button,{mode:"secondary",onClick:()=>h(j.cart),children:c("EventPage.GoToCheckout")}),s===d.USER_BOUGHT_AND_EVENT_FINISHED&&e.jsx(o.Button,{onClick:()=>h(`/event/${t.id}`),mode:"secondary",children:c("Show")}),s===d.USER_BOUGHT&&e.jsx(o.Text,{children:c("EventPage.NotStarted")}),s===d.USER_LOGGED_AND_PRODUCT_AVAILABLE&&e.jsx(o.Button,{loading:n.loading,mode:"secondary",onClick:()=>{var x;return a(Number((x=t.product)==null?void 0:x.id)).then(()=>h(j.cart))},children:c("Buy now")}),s===d.PRODUCT_UNAVAILABLE&&e.jsx(o.Text,{children:c("EventPage.UnavailableEvent")}),s===d.DEFAULT&&e.jsx(o.Button,{onClick:()=>h(`/login?referrer=/event/${t.id}`),mode:"secondary",children:c("Buy now")}),e.jsxs(o.Text,{size:"12",children:[" ",c("EventPage.30Days")]}),e.jsxs("div",{className:"pricing-card-features",children:[t.place&&e.jsx(o.IconText,{icon:e.jsx(te,{}),text:`${t.place}`}),((R=t.product)==null?void 0:R.duration)&&e.jsx(o.IconText,{icon:e.jsx(se,{}),text:`${c("Duration")}: ${t.product.duration}`}),t.users_count?e.jsx(o.IconText,{icon:e.jsx(ie,{}),text:`${c("Students")}: ${t.users_count}`}):""]})]})},Te=()=>{const{stationaryEvent:t}=l.useContext(p.EscolaLMSContext);return t.value?e.jsx(ge,{children:e.jsx(be,{event:t.value})}):null},_e=g.div`
  .event-tutor {
    .ranking-row {
      display: none !important;
    }
  }
`,we=()=>{var n,a;const{stationaryEvent:t}=l.useContext(p.EscolaLMSContext),{t:s}=u(),i=(a=(n=t.value)==null?void 0:n.product)==null?void 0:a.authors;return i!=null&&i.length?e.jsx(_e,{children:i.map(r=>e.jsx("section",{className:"event-tutor with-border padding-right",children:e.jsx(y,{to:`/tutors/${r.id}`,children:e.jsx(o.Tutor,{mobile:E,avatar:{alt:`${r.first_name} ${r.last_name}`,src:`${ae}/api/images/img?path=${r.path_avatar}`||""},rating:{ratingValue:4.1},title:e.jsx(o.Title,{as:"h3",level:4,className:"title",children:s("CoursePage.Teacher")}),fullName:`${r.first_name} ${r.last_name}`,coursesInfo:"8 Curses",description:r.bio})})}))}):null},Se=g.div`
  .event-companies {
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
`,ye=()=>{const{settings:t}=l.useContext(p.EscolaLMSContext),{t:s}=u();return e.jsx(Se,{children:e.jsxs("section",{className:"event-companies",children:[e.jsx(A.Text,{children:e.jsx("strong",{children:s("CoursePage.CompaniesTitle")})}),e.jsx("div",{className:"companies-row",children:t&&t.value.courseLogos&&Object.values(t.value.courseLogos).map((i,n)=>{var a;return e.jsx("div",{className:"single-company",children:e.jsx(X,{path:((a=t==null?void 0:t.value)==null?void 0:a.courseLogos[`logo${n+1}`])||"",srcSizes:[100,200,300]})},n)})})]})})},Ne=()=>{var n;const{stationaryEvent:t}=l.useContext(N.EscolaLMSContext),{t:s}=u(),i=(n=t.value)==null?void 0:n.description;return i?e.jsx(e.Fragment,{children:i&&re(i)!==""&&e.jsxs("section",{className:"course-description-short with-border",children:[e.jsx(o.Title,{level:4,children:s("CoursePage.CourseDescriptionTitle")}),e.jsx(ne,{children:i})]})}):null},Ae=g.div`
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
`,Le=g("div")`
  h4,
  h5 {
    margin-bottom: 15px;
  }
`,De=()=>{var a;const{stationaryEvent:t}=l.useContext(p.EscolaLMSContext),s=(a=t.value)==null?void 0:a.agenda,i=oe(),{t:n}=u();return s?e.jsx("section",{className:"with-border",children:e.jsxs(Le,{children:[e.jsx(w,{level:4,children:n("Agenda")}),s.map(r=>e.jsx(le,{color:i.primaryColor,description:e.jsxs(e.Fragment,{children:[e.jsx(w,{level:4,children:r.title}),e.jsx(w,{level:5,children:r.subtitle}),e.jsx(A.Text,{children:r.description})]}),time:e.jsx(e.Fragment,{children:r.hour})}))]})}):null},Pe=()=>{const{stationaryEvent:t}=l.useContext(p.EscolaLMSContext);return t.loading||!t.value?e.jsx(me,{}):e.jsx(Ae,{children:e.jsxs(m.Row,{children:[e.jsxs(m.Col,{md:12,lg:9,children:[e.jsx(ve,{}),e.jsx(fe,{}),e.jsx(ye,{}),e.jsx(we,{}),e.jsx(Ne,{}),e.jsx(De,{})]}),e.jsx(m.Col,{md:12,lg:3,children:e.jsx(Te,{})})]})})},Ie=g.div`
  .event-related-events {
    background-color: ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
    padding: 60px 0 90px;
    .slick-dots {
      top: -65px;
      right: 80px;
      @media (max-width: 575px) {
        right: 0;
      }
    }
    .content-container {
      position: relative;
      overflow: hidden;
      &:first-of-type {
        margin-bottom: 60px;
        @media (max-width: 768px) {
          margin-bottom: 40px;
        }
      }
      h4 {
        @media (max-width: 575px) {
          padding-right: 50%;
        }
      }
      .slider-wrapper {
        a {
          text-decoration: none !important;
        }
        @media (max-width: 575px) {
          margin-left: -50px;

          .image-section,
          img {
            max-height: 180px;
          }
        }
      }
    }
  }
`,Ue=g.div`
  @media (max-width: 575px) {
    margin-left: -59px;
  }
  .slick-slider {
    @media (max-width: 575px) {
      width: calc(100% + 15px);
    }
  }
  .slick-dots {
    top: -65px;
    @media (max-width: 575px) {
      top: -30px !important;
      right: unset !important;
      left: 60px !important;
    }
  }
  .slick-track {
    display: flex;
    gap: 0 20px;
    @media (max-width: 991px) {
      padding-bottom: 20px;
    }
  }

  .slick-slide {
    height: inherit;

    > div {
      display: flex;
      height: 100%;
    }
  }
`,Re={arrows:!1,infinite:!0,speed:500,draggable:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1201,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},W=({nodes:t,sliderSettings:s=Re})=>{const[i]=l.useState(!0);return e.jsx(Ue,{children:e.jsx("div",{children:e.jsx(de.Slider,{settings:{...s,dots:i,onSwipe:()=>{const n=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(r=>r.removeAttribute("aria-modal")),n.forEach(r=>r.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(a=>a.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:t})})})},ke=()=>{var n;const{stationaryEvents:t}=l.useContext(p.EscolaLMSContext),{t:s}=u(),i=(n=t.list)==null?void 0:n.data;return e.jsx(Ie,{children:e.jsx("section",{className:"event-related-events",children:e.jsxs(m.Container,{children:[e.jsxs("div",{className:"content-container",children:[e.jsx(o.Title,{level:4,as:"h2",children:s("CoursePage.RelatedCoursesTitle")}),i&&i.length>4?e.jsx(W,{nodes:i.map(a=>e.jsx(T,{children:e.jsx(_,{event:a})},a.id))}):e.jsx(m.Row,{style:{marginTop:"30px",rowGap:"60px"},children:i==null?void 0:i.map(a=>e.jsx(m.Col,{md:6,lg:3,children:e.jsx(T,{children:e.jsx(_,{event:a})})},a.id))})]}),e.jsxs("div",{className:"content-container",children:[e.jsx(o.Title,{level:4,as:"h2",children:s("CoursePage.InterestTitle")}),i&&i.length>4?e.jsx(W,{nodes:i.map(a=>e.jsx(T,{children:e.jsx(_,{event:a})},a.id))}):e.jsx(m.Row,{style:{marginTop:"30px",rowGap:"60px"},children:i==null?void 0:i.map(a=>e.jsx(m.Col,{md:6,lg:3,children:e.jsx(T,{children:e.jsx(_,{event:a})})},a.id))})]})]})})})},Qe=()=>{var s;const{stationaryEvent:t}=l.useContext(p.EscolaLMSContext);return e.jsx(ce,{metaTitle:(s=t.value)==null?void 0:s.name,children:e.jsxs(Ee,{children:[e.jsx(xe,{children:e.jsx(Pe,{})}),e.jsx(ke,{})]})})};export{Qe as default};

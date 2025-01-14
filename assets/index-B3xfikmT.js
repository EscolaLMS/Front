import{r as h,N as U,q as V,h as J,k as ie,m as Q,j as n,T as Z,y as N,V as A,o as E,W as _e,n as ve,z as L,Y as qe,p as be,F as fe,E as je,Z as ye,_ as He,$ as Qe,i as Ee,Q as Le,a0 as Ce,a1 as re,a2 as Ue,a3 as We,e as f,a4 as ge,a5 as ae,a6 as Ke,a7 as le,a8 as Ye,a9 as Xe,aa as z,b as Ze,ab as Je,ac as en,ad as nn,X as tn,v as rn,C as Pe,L as we,ae as sn,af as Te,M as Oe}from"./index-BJhtOcuL.js";import{P as on}from"./PricingCard-TUeql_YF.js";import{u as Re,P as se,g as an,f as ln,r as cn}from"./payment-Btqctgk7.js";import{u as $e,E as he,S as Me,a as dn,C as un,b as pn,c as mn,d as xn,M as Be}from"./sidebar-DQT3ovxU.js";import{u as fn,P as hn}from"./usePayment-DdiuLYxo.js";import{P as gn}from"./index-CyGluHre.js";import{A as _n,_ as vn,P as bn,I as jn,a as yn,O as Cn,H as Pn}from"./index-CuuD40L6.js";import{B as wn}from"./index-Duu5T7DK.js";import{Q as Tn}from"./questionnaire-CXWDgbJ4.js";import{S}from"./index-Cw7IHPB-.js";import"./CourseCard-B7wy6L_N.js";import"./index-z5XBzfqF.js";import"./questionnaires-Cer9XMeZ.js";import"./index-DQ5y4lkN.js";import"./swiper-react-BloDJTZK.js";import"./swiper-l3CZ8c15.js";import"./a11y-BkDsCldc.js";import"./useFetchCourses-BQ_6-cnc.js";const On=e=>{const[t,r]=h.useState({data:void 0,loaded:!1,loading:!1}),{user:l,fetchCourseProgress:a,courseProgressDetails:p}=h.useContext(U.EscolaLMSContext);return h.useEffect(()=>{p.byId&&p.byId[Number(e)]&&p.byId[Number(e)].value&&r({...t,data:p.byId[Number(e)].value,loaded:!0,loading:!1})},[e,p]),h.useEffect(()=>{l!=null&&l.value&&!l.loading&&!t.loading&&!t.loaded?(r({...t,loading:!0}),a(e).catch(()=>r({...t,loaded:!0,loading:!1}))):t.loaded||r({...t,loaded:!0})},[l,t,a,e]),{progress:t}},Mn=V.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,Se=V.div`
  border-radius: ${({theme:e})=>e.cardRadius}px;
  border: 1px solid ${({theme:e})=>e.gray3};
  padding: 20px 40px;
  margin-bottom: ${({$isMobile:e})=>e?"20px":"0"};
  min-height: 240px;

  .title {
    min-height: 45px;
  }
  .divider {
    width: 21px;
    height: 3px;
    border-radius: 18px;
    background-color: ${({theme:e})=>e.primaryColor};
    margin: 10px auto;
  }
  .description {
    margin-bottom: 30px;
    min-height: 30px;
  }
  .price {
    margin-bottom: 22px;
  }
  button {
    width: 100%;
  }
`,Bn=({course:e})=>{var g;const{getCheapestSubscription:t}=Re(),{cart:r,addToCart:l}=h.useContext(U.EscolaLMSContext),{t:a}=J(),{push:p}=ie(),o=h.useCallback(()=>{var v;l(Number((v=e.product)==null?void 0:v.id)).then(()=>p(Q.cart))},[e,l,p]);return n.jsxs(Mn,{children:[n.jsx(Z.Title,{className:"modal-header",level:2,children:a("Subscriptions.GetAccess")}),n.jsx(N.Text,{children:a("Subscriptions.YouHaveTwoOptions")}),n.jsxs(A.Row,{children:[n.jsx(A.Col,{lg:6,md:12,sm:12,children:n.jsxs(Se,{className:"product-box",$isMobile:E,children:[n.jsx(Z.Title,{className:"title",level:3,children:a("Buy Course")}),n.jsx("div",{className:"divider"}),n.jsx(N.Text,{className:"description",size:"13",children:e.title}),n.jsxs(N.Text,{className:"price",size:"24",bold:!0,children:[_e((g=e.product)==null?void 0:g.gross_price)," zł"]}),n.jsx(ve.Button,{loading:r.loading,onClick:()=>o(),children:a("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&n.jsx(A.Col,{lg:6,md:12,sm:12,children:n.jsxs(Se,{className:"product-box",$isMobile:E,children:[n.jsx(Z.Title,{className:"title",level:3,children:t==null?void 0:t.name}),n.jsx("div",{className:"divider"}),n.jsx(N.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),n.jsxs(N.Text,{className:"price",size:"24",bold:!0,children:[a("From")," ",_e(t==null?void 0:t.gross_price)," ","zł"]}),n.jsx(ve.Button,{onClick:()=>{var v;return p((v=Q)==null?void 0:v.subscriptions)},children:a("Subscriptions.IPick")})]})})]})]})},Ne=V(L.Button)`
  display: block;
  margin-bottom: 10px;
`,Sn=({course:e,onRequestAccess:t,setModalVisible:r})=>{var u,_;const{t:l}=J(),{push:a}=ie(),{courseAccess:p,fetchCourseAccess:o,user:g,fetchCourse:v,addToCart:y}=h.useContext(U.EscolaLMSContext),{attachProduct:c,getActiveSubscription:s}=Re(),{payByStripe:d,payByP24:m,defaultGateway:C}=fn(),i=$e(e);h.useEffect(()=>{(async function(){var T;const j=(T=g==null?void 0:g.value)==null?void 0:T.id;j&&je&&(ye.getPlatform()==="ios"?await se.configure({apiKey:He,appUserID:`${j}`}):ye.getPlatform()==="android"&&await se.configure({apiKey:Qe,appUserID:`${j}`}))})()},[(u=g==null?void 0:g.value)==null?void 0:u.id]);const x=h.useCallback(async()=>{var q;const j=an(e),T=await se.getOfferings(),M=((q=T==null?void 0:T.current)==null?void 0:q.availablePackages)||[],D=ln(M,j);if(D)try{await se.purchaseStoreProduct({product:D}),setTimeout(()=>{v(Number(e.id)),o({course_id:Number(e.id),current_page:1,per_page:1})},3e3)}catch(W){cn(W)}},[e,v,o]),b=h.useMemo(()=>{var j,T;return(T=(j=p.list)==null?void 0:j.data)==null?void 0:T.find(M=>{var D;return((D=M==null?void 0:M.course)==null?void 0:D.id)===e.id})},[(_=p.list)==null?void 0:_.data,e.id]),P=h.useCallback(()=>{var j,T;i===he.FREE&&((j=e==null?void 0:e.product)!=null&&j.id)?y(Number((T=e.product)==null?void 0:T.id)).then(()=>C===hn.Stripe?d("free"):m()):r(!0)},[r,y,e,d,i,m,C]),w=h.useCallback(()=>{c(e.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[a(`/course/${e.id}`),o({course_id:Number(e.id),current_page:1,per_page:1})])},[c,e.id,a,o]),O=h.useMemo(()=>n.jsx(L.Button,{mode:"secondary",onClick:()=>{if(je){x();return}P()},children:i===he.FREE?l("Go to the course"):l("Buy Course")}),[l,P,x,i]);return s!=null&&s.id?n.jsx(L.Button,{onClick:()=>w(),mode:"secondary",children:l("Go to the course")}):b?b.status!=="approved"?n.jsxs(n.Fragment,{children:[n.jsx(Ne,{mode:"secondary",disabled:!0,children:l("CourseAccess.Pending")}),O]}):b.status==="approved"?n.jsx(L.Button,{onClick:()=>a(`/course/${e.id}`),mode:"secondary",children:l("Go to the course")}):O:n.jsxs(n.Fragment,{children:[n.jsx(Ne,{mode:"secondary",onClick:t,children:l("CourseAccess.RequestAccess")}),O]})},Nn=({course:e,userOwnThisCourse:t,onRequestAccess:r})=>{var s,d;const{cart:l,user:a,fetchCourseAccess:p}=h.useContext(U.EscolaLMSContext),{t:o}=J(),{push:g}=ie(),[v,y]=h.useState(!1),c=h.useMemo(()=>{var m;return(m=l==null?void 0:l.value)==null?void 0:m.items.some(C=>{var i;return Number(C.product_id)===Number((i=e.product)==null?void 0:i.id)})},[(s=e.product)==null?void 0:s.id,l]);return h.useEffect(()=>{p({course_id:Number(e.id),current_page:1,per_page:1})},[e.id,p]),qe(Number((d=a.value)==null?void 0:d.id),e)?n.jsx(L.Button,{onClick:()=>g(`/course/${e.id}`),mode:"secondary",children:o("Go to the course")}):be(new Date(e.active_to||""))?n.jsx(N.Text,{children:o("CoursePage.IsFinished")}):c?n.jsx(n.Fragment,{children:n.jsx(L.Button,{mode:"secondary",onClick:()=>g(Q.cart),children:o("CoursePage.GoToCheckout")})}):t&&be(new Date(e.active_from||""))?n.jsx(L.Button,{onClick:()=>g(`/course/${e.id}`),mode:"secondary",children:o("Go to the course")}):t?n.jsx(N.Text,{children:o("CoursePage.NotStarted")}):a.value&&e.product?n.jsxs(n.Fragment,{children:[n.jsx(Sn,{course:e,onRequestAccess:r,setModalVisible:y}),n.jsx(fe.Modal,{onClose:()=>y(!1),visible:v,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:n.jsx(Bn,{course:e})})]}):e.product?n.jsx(L.Button,{onClick:()=>g(`/login?referrer=/courses/${e.id}`),mode:"secondary",children:o("Buy Course")}):n.jsx(N.Text,{children:o("CoursePage.UnavailableCourse")})},kn=V.div`
  width: 100%;
  left: 0;
  position: ${E?"static":"sticky"};
  top: ${E?"unset":"130px"};
  bottom: ${E?"0":"unset"};
  z-index: 100;
  .course-sidebar-header {
    p {
      margin-bottom: 0;
    }
  }
  .price-wrapper {
    margin-bottom: 16px;
    * {
      font-weight: 700;
    }
  }
  button {
    width: 100%;
  }
`,oe=V.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 13px;
    font-weight: 700;
    &:first-of-type {
      font-weight: 400;
    }
  }
`,ke=({course:e,onRequestAccess:t})=>{var m,C,i,x,b;const{user:r,courseAccess:l}=h.useContext(Ee.EscolaLMSContext),{t:a}=J(),{id:p}=Le(),{progress:o}=On(Number(p)),v=$e(e)===he.FREE,y=h.useMemo(()=>{var P;return(P=e==null?void 0:e.product)==null?void 0:P.owned},[(m=e==null?void 0:e.product)==null?void 0:m.owned]),c=h.useMemo(()=>{var P,w;return!!((w=(P=l.list)==null?void 0:P.data)!=null&&w.find(O=>{var u;return((u=O==null?void 0:O.course)==null?void 0:u.id)===e.id&&O.status==="approved"}))},[e.id,(C=l.list)==null?void 0:C.data]),s=h.useMemo(()=>o.data||[],[o.data]),d=h.useMemo(()=>r.value&&(y||c)?((s==null?void 0:s.filter(w=>w.status===1))||[]).length:0,[s,r.value,c,y]);return n.jsx(kn,{children:n.jsxs(on.PricingCard,{children:[n.jsxs("div",{className:"course-sidebar-header",children:[n.jsx(N.Text,{size:"13",children:a("PricePerAccess")}),n.jsx("div",{className:"price-wrapper",children:n.jsx(gn,{price:(i=e.product)==null?void 0:i.price,taxRate:(x=e.product)==null?void 0:x.tax_rate,oldPrice:(b=e.product)==null?void 0:b.price_old,textSizes:{old:"18",new:"24"},isFree:v})})]}),o.loaded?n.jsx(Nn,{onRequestAccess:t,course:e,userOwnThisCourse:y}):n.jsx(Ce,{}),n.jsxs("div",{className:"pricing-card-features",children:[e.duration&&n.jsx(re.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:a("CoursePage.Duration")}),n.jsx("span",{children:e.duration})]})}),e.lessons&&n.jsx(re.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:a("CoursePage.Lessons")}),n.jsx("span",{children:e.lessons.length})]})}),e.language&&n.jsx(re.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:a("CoursePage.Language")}),n.jsx("span",{children:e.language})]})}),e.level&&n.jsx(re.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:a("CoursePage.Level")}),n.jsx("span",{children:e.level})]})})]}),r.value?n.jsxs(Ue.CourseProgress,{progress:s&&(s==null?void 0:s.length)>0?d/s.length:0,icon:o.loaded?n.jsx(We,{}):n.jsx(Ce,{width:"22px",height:"22px"}),title:a("CoursePage.MyProgress"),children:[n.jsxs("strong",{style:{fontSize:14},children:[a("CoursePage.Finished")," ",d||0," ",a("CoursePage.Of")," ",s&&(s==null?void 0:s.length)>0?s.length:0," ",a("CoursePage.Lessons")]}),n.jsx("p",{style:{marginTop:9,marginBottom:0},children:a("CoursePage.FinishToGetCertificate")})]}):n.jsx(n.Fragment,{})]})})};var ze={},De={},ce={},de={},G=f&&f.__assign||function(){return G=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},G.apply(this,arguments)};Object.defineProperty(de,"__esModule",{value:!0});de.CourseProgramTopic=void 0;var Y=n,An=ae,xe=ge(),En=function(e){var t=e.index,r=e.topic,l=e.onTopicClick,a=e.mobile,p=(0,An.useTranslation)().t;return(0,Y.jsxs)("li",G({className:"lesson__topic"},{children:[(0,Y.jsxs)("div",G({className:"lesson__description"},{children:[(0,Y.jsxs)(xe.Text,G({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,Y.jsx)(xe.Text,G({size:"14",noMargin:!0},{children:r.title}))]})),r.preview&&(0,Y.jsx)(xe.Button,G({mode:"outline",onClick:function(){return l(r)},block:a},{children:p("Course.topicPreview")}))]}))};de.CourseProgramTopic=En;var k=f&&f.__assign||function(){return k=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},k.apply(this,arguments)};Object.defineProperty(ce,"__esModule",{value:!0});ce.CourseProgramLesson=void 0;var B=n,Ln=h,Rn=ae,X=ge(),$n=de,zn=function(e){var t,r,l=e.lesson,a=e.index,p=e.defaultOpen,o=p===void 0?!1:p,g=e.onTopicClick,v=e.mobile,y=e.isSubLesson,c=e.children,s=(0,Rn.useTranslation)().t,d=(0,Ln.useState)(o),m=d[0],C=d[1];return(0,B.jsxs)("li",k({className:"lesson__item ".concat(m?"open":"closed"," ").concat(y?"sub-lesson":"")},{children:[(0,B.jsxs)("header",{children:[(0,B.jsxs)("div",k({className:"lesson__details"},{children:[(0,B.jsxs)(X.Text,k({noMargin:!0,size:"12"},{children:[s(y?"Course.SubLesson":"Course.Lesson")," ",a+1]})),(0,B.jsx)(X.Text,k({noMargin:!0,size:"12"},{children:l.duration&&l.duration}))]})),(0,B.jsx)("div",{children:(0,B.jsx)(X.Text,k({size:"14",bold:!0,noMargin:!0},{children:l.title}))}),(0,B.jsx)(X.Button,k({type:"button",onClick:function(){return C(!m)},mode:"icon","aria-label":s("Actions.Hide")},{children:(0,B.jsx)(X.Icon,{name:"chevron"})}))]}),!!(!((t=l.lessons)===null||t===void 0)&&t.length)&&(0,B.jsx)("ul",k({className:"lesson__lessons"},{children:c})),(0,B.jsx)("ul",k({className:"lesson__topics"},{children:(r=l.topics)===null||r===void 0?void 0:r.map(function(i,x){return(0,B.jsx)($n.CourseProgramTopic,{topic:i,index:x+1,onTopicClick:g,mobile:v},x)})}))]}))};ce.CourseProgramLesson=zn;(function(e){var t=f&&f.__assign||function(){return t=Object.assign||function(p){for(var o,g=1,v=arguments.length;g<v;g++){o=arguments[g];for(var y in o)Object.prototype.hasOwnProperty.call(o,y)&&(p[y]=o[y])}return p},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RecursiveLessons=void 0;var r=n,l=ce,a=function(p){var o=p.lessons,g=p.depth,v=g===void 0?0:g,y=p.onTopicClick,c=p.mobile;return(0,r.jsx)(r.Fragment,{children:o.map(function(s,d){var m;return(0,r.jsx)(l.CourseProgramLesson,t({defaultOpen:d===0,index:d,lesson:s,isSubLesson:v>0,onTopicClick:y,mobile:c},{children:(0,r.jsx)(e.RecursiveLessons,{lessons:(m=s.lessons)!==null&&m!==void 0?m:[],depth:v+1,onTopicClick:y,mobile:c})}),s.id)})})};e.RecursiveLessons=a})(De);var ue={},Dn=f&&f.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Fe=f&&f.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ue,"__esModule",{value:!0});ue.StyledSection=void 0;var Fn=Fe(Ke),In=Fe(le),I=Ye;ue.StyledSection=(0,In.default)("section")(Ae||(Ae=Dn([`
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  > p {
    margin-bottom: 0px;
    font-weight: 700;
  }
  & > header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    margin-bottom: 20px;

    .lms-icon-title {
      margin: 0;
      flex-wrap: nowrap;
    }
    & > div {
      display: inline-flex;
      align-items: center;

      p {
        margin-right: 6px;
      }
    }
  }

  .lessons__list {
    list-style-type: none;
    padding-left: 0;
  }

  .lesson__item {
    background: `,`;
    border-left: 2px solid
      `,`;
    padding: 10px;
    margin: 10px 0;
    overflow: hidden;

    .duration {
      margin: 1px 0;
    }

    & > header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      align-content: flex-start;

      button {
        margin-left: auto;
        margin-top: -2px;
        svg {
          transform: rotate(180deg);
          transition: transform 0.2s ease-in;
        }
      }

      .lesson__details {
        flex-shrink: 0;
        margin-right: 10px;

        > p:first-child {
          margin-bottom: 2px;
          margin-top: 3px;
          text-transform: uppercase;
          color: `,`;
        }
      }

      .lesson__title {
        font-size: 16px;
        color: `,`;
        margin: 0;
        font-weight: bold;
        display: flex;
        small {
          font-size: 12px;
          font-weight: 300;
          .lesson__index {
            text-transform: uppercase;
            color: `,`;
            white-space: nowrap;
          }
          .lesson__duration {
            color: `,`;
          }
          margin-right: 12px;
        }
      }
    }
    &.open > header button svg {
      transform: rotate(0);
    }

    .lesson__topics {
      list-style: none;
      margin: 0;
      padding: 0;
      transition: all 0.5s;

      li {
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: `,`;

        &:first-child {
          margin-top: 10px;
        }

        &:last-child:not(.lesson__topic-current) {
          padding-bottom: 0;
          border-bottom: none;
        }

        &:not(.lesson__topic-current):not(:last-child) {
          border-bottom: 2px solid
            `,`;
        }

        button {
          margin-left: `,`;
          margin-top: `,`;
          font-size: 12px;
          padding: 3px 10px;
        }

        &.lesson__topic-pending svg {
          margin-top: 4px;

          path {
            fill: `,`;
          }
        }

        &.lesson__topic-finished svg {
          margin-top: 7px;
        }

        .lesson__description {
          display: flex;
          align-items: center;

          svg {
            margin-right: 7px;
            width: 17px;
            flex-shrink: 0;

            path {
              fill: `,`;
            }
          }

          .lesson__index {
            opacity: `,`;
            margin-right: 4px;
          }
        }
      }
    }
  }

  .lesson__lessons {
    list-style: none;
    padding-left: 0;

    .sub-lesson {
      padding-inline: 5px;
      margin-block: 0;
      border-left: 2px solid transparent;
      border-bottom: 2px solid rgb(255, 255, 255);
    }
  }

  .lesson__item.open .lesson__topics {
    max-height: 100vh;
    transition: all 0.35s ease-in;
  }

  .lesson__item.closed .lesson__topics,
  .lesson__item.closed .lesson__lessons {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s ease-out;
  }
`],[`
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  > p {
    margin-bottom: 0px;
    font-weight: 700;
  }
  & > header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    margin-bottom: 20px;

    .lms-icon-title {
      margin: 0;
      flex-wrap: nowrap;
    }
    & > div {
      display: inline-flex;
      align-items: center;

      p {
        margin-right: 6px;
      }
    }
  }

  .lessons__list {
    list-style-type: none;
    padding-left: 0;
  }

  .lesson__item {
    background: `,`;
    border-left: 2px solid
      `,`;
    padding: 10px;
    margin: 10px 0;
    overflow: hidden;

    .duration {
      margin: 1px 0;
    }

    & > header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      align-content: flex-start;

      button {
        margin-left: auto;
        margin-top: -2px;
        svg {
          transform: rotate(180deg);
          transition: transform 0.2s ease-in;
        }
      }

      .lesson__details {
        flex-shrink: 0;
        margin-right: 10px;

        > p:first-child {
          margin-bottom: 2px;
          margin-top: 3px;
          text-transform: uppercase;
          color: `,`;
        }
      }

      .lesson__title {
        font-size: 16px;
        color: `,`;
        margin: 0;
        font-weight: bold;
        display: flex;
        small {
          font-size: 12px;
          font-weight: 300;
          .lesson__index {
            text-transform: uppercase;
            color: `,`;
            white-space: nowrap;
          }
          .lesson__duration {
            color: `,`;
          }
          margin-right: 12px;
        }
      }
    }
    &.open > header button svg {
      transform: rotate(0);
    }

    .lesson__topics {
      list-style: none;
      margin: 0;
      padding: 0;
      transition: all 0.5s;

      li {
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: `,`;

        &:first-child {
          margin-top: 10px;
        }

        &:last-child:not(.lesson__topic-current) {
          padding-bottom: 0;
          border-bottom: none;
        }

        &:not(.lesson__topic-current):not(:last-child) {
          border-bottom: 2px solid
            `,`;
        }

        button {
          margin-left: `,`;
          margin-top: `,`;
          font-size: 12px;
          padding: 3px 10px;
        }

        &.lesson__topic-pending svg {
          margin-top: 4px;

          path {
            fill: `,`;
          }
        }

        &.lesson__topic-finished svg {
          margin-top: 7px;
        }

        .lesson__description {
          display: flex;
          align-items: center;

          svg {
            margin-right: 7px;
            width: 17px;
            flex-shrink: 0;

            path {
              fill: `,`;
            }
          }

          .lesson__index {
            opacity: `,`;
            margin-right: 4px;
          }
        }
      }
    }
  }

  .lesson__lessons {
    list-style: none;
    padding-left: 0;

    .sub-lesson {
      padding-inline: 5px;
      margin-block: 0;
      border-left: 2px solid transparent;
      border-bottom: 2px solid rgb(255, 255, 255);
    }
  }

  .lesson__item.open .lesson__topics {
    max-height: 100vh;
    transition: all 0.35s ease-in;
  }

  .lesson__item.closed .lesson__topics,
  .lesson__item.closed .lesson__lessons {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s ease-out;
  }
`])),function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray1},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray2},function(e){return e.$mobile?"column":"row"},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,(0,Fn.default)(t.white).alpha(.2).hex(),t.white)},function(e){return e.$mobile?"0":"auto"},function(e){return e.$mobile?"6px":"0"},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){return e.theme.dm__numerationsColor||e.theme.numerationsColor?1:.5});var Ae;(function(e){var t=f&&f.__makeTemplateObject||function(i,x){return Object.defineProperty?Object.defineProperty(i,"raw",{value:x}):i.raw=x,i},r=f&&f.__assign||function(){return r=Object.assign||function(i){for(var x,b=1,P=arguments.length;b<P;b++){x=arguments[b];for(var w in x)Object.prototype.hasOwnProperty.call(x,w)&&(i[w]=x[w])}return i},r.apply(this,arguments)},l=f&&f.__createBinding||(Object.create?function(i,x,b,P){P===void 0&&(P=b);var w=Object.getOwnPropertyDescriptor(x,b);(!w||("get"in w?!x.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return x[b]}}),Object.defineProperty(i,P,w)}:function(i,x,b,P){P===void 0&&(P=b),i[P]=x[b]}),a=f&&f.__setModuleDefault||(Object.create?function(i,x){Object.defineProperty(i,"default",{enumerable:!0,value:x})}:function(i,x){i.default=x}),p=f&&f.__importStar||function(i){if(i&&i.__esModule)return i;var x={};if(i!=null)for(var b in i)b!=="default"&&Object.prototype.hasOwnProperty.call(i,b)&&l(x,i,b);return a(x,i),x};Object.defineProperty(e,"__esModule",{value:!0}),e.CourseProgram=void 0;var o=n,g=ae,v=p(le),y=ge(),c=De,s=ue,d=function(i){var x=i.lessons,b=i.onTopicClick,P=i.mobile,w=P===void 0?!1:P,O=i.className,u=O===void 0?"":O,_=(0,g.useTranslation)().t;return(0,o.jsxs)(s.StyledSection,r({$mobile:w,className:"wellms-component ".concat(u)},{children:[(0,o.jsx)(y.Text,{children:_("Course.Agenda")}),(0,o.jsx)("ul",r({className:"lessons__list"},{children:(0,o.jsx)(c.RecursiveLessons,{lessons:x,onTopicClick:b,mobile:w})}))]}))};e.CourseProgram=d;var m=(0,v.default)(e.CourseProgram)(C||(C=t([""],[""])));e.default=(0,v.withTheme)(m);var C})(ze);var Ie={};(function(e){var t=f&&f.__makeTemplateObject||function(s,d){return Object.defineProperty?Object.defineProperty(s,"raw",{value:d}):s.raw=d,s},r=f&&f.__createBinding||(Object.create?function(s,d,m,C){C===void 0&&(C=m);var i=Object.getOwnPropertyDescriptor(d,m);(!i||("get"in i?!d.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return d[m]}}),Object.defineProperty(s,C,i)}:function(s,d,m,C){C===void 0&&(C=m),s[C]=d[m]}),l=f&&f.__setModuleDefault||(Object.create?function(s,d){Object.defineProperty(s,"default",{enumerable:!0,value:d})}:function(s,d){s.default=d}),a=f&&f.__importStar||function(s){if(s&&s.__esModule)return s;var d={};if(s!=null)for(var m in s)m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)&&r(d,s,m);return l(d,s),d};Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownPlayer=void 0;var p=n,o=a(h),g=Xe(),v=a(le),y=function(s){var d=s.onLoad,m=s.children,C=s.mobile,i=C===void 0?!1:C;return o.useEffect(function(){m&&d&&d()},[m,d]),(0,p.jsx)(g.MarkdownRenderer,{children:m,mobile:i})};e.MarkdownPlayer=y,e.default=(0,v.withTheme)((0,v.default)(e.MarkdownPlayer)(c||(c=t([""],[""]))));var c})(Ie);const Gn=({topic:e})=>{const{apiUrl:t}=h.useContext(U.EscolaLMSContext),r=h.useMemo(()=>{var l,a;if(e&&e.topicable_type)switch(e.topicable_type){case z.TopicType.H5P:return n.jsx(Pn.H5Player,{h5pObject:(l=e==null?void 0:e.topicable)==null?void 0:l.content,hideActionButtons:!0});case z.TopicType.OEmbed:return n.jsx(Cn.OEmbedPlayer,{url:(a=e==null?void 0:e.topicable)==null?void 0:a.value});case z.TopicType.RichText:return n.jsx("div",{className:"container-xl",children:n.jsx(Ie.MarkdownPlayer,{children:e.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return n.jsx(yn.AudioVideoPlayer,{url:e.topicable.url});case z.TopicType.Image:return n.jsx(jn.ImagePlayer,{topic:e,onLoad:()=>console.log("")});case z.TopicType.Pdf:return n.jsx(bn.PdfPlayer,{url:e.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return n.jsx("div",{className:"scorm-wrapper",children:n.jsx("iframe",{title:e.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${e.topicable.uuid}`})});case _n.TopicType.GiftQuiz:return n.jsx(vn,{topic:e});default:return n.jsx("pre",{children:e.topicable_type})}return n.jsx(Ze.Fragment,{})},[e,t]);return n.jsx("div",{className:"topic-preview-modal",children:n.jsx("div",{className:"topic-preview-modal-content",children:r})})};var Ge={};(function(e){var t=f&&f.__makeTemplateObject||function(u,_){return Object.defineProperty?Object.defineProperty(u,"raw",{value:_}):u.raw=_,u},r=f&&f.__assign||function(){return r=Object.assign||function(u){for(var _,j=1,T=arguments.length;j<T;j++){_=arguments[j];for(var M in _)Object.prototype.hasOwnProperty.call(_,M)&&(u[M]=_[M])}return u},r.apply(this,arguments)},l=f&&f.__createBinding||(Object.create?function(u,_,j,T){T===void 0&&(T=j);var M=Object.getOwnPropertyDescriptor(_,j);(!M||("get"in M?!_.__esModule:M.writable||M.configurable))&&(M={enumerable:!0,get:function(){return _[j]}}),Object.defineProperty(u,T,M)}:function(u,_,j,T){T===void 0&&(T=j),u[T]=_[j]}),a=f&&f.__setModuleDefault||(Object.create?function(u,_){Object.defineProperty(u,"default",{enumerable:!0,value:_})}:function(u,_){u.default=_}),p=f&&f.__importStar||function(u){if(u&&u.__esModule)return u;var _={};if(u!=null)for(var j in u)j!=="default"&&Object.prototype.hasOwnProperty.call(u,j)&&l(_,u,j);return a(_,u),_};Object.defineProperty(e,"__esModule",{value:!0}),e.ModalCourseAccess=void 0;var o=n,g=h,v=ae,y=Je,c=p(le),s=U,d=L,m=en,C=nn,i=Z,x=N,b=c.default.aside(w||(w=t([`
  display: flex;
  flex-direction: column;
  gap: 24px;

  header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    & > .form-content {
      .error-msg {
        color: `,`;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    & > .button-group {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  gap: 24px;

  header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    & > .form-content {
      .error-msg {
        color: `,`;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    & > .button-group {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
  }
`])),function(u){var _=u.theme;return _.errorColor}),P=function(u){var _=u.course,j=u.className,T=u.initialValues,M=T===void 0?{phone_number:"",contact_details:""}:T,D=u.onCancel,q=u.onSuccess,W=u.onError,K=(0,v.useTranslation)().t,Ve=(0,g.useContext)(s.EscolaLMSContext).addCourseAccess;return(0,o.jsxs)(b,r({className:"wellms-component ".concat(j),"data-testid":"modal-course-access"},{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)(i.Title,r({level:1},{children:_.title})),(0,o.jsx)(x.Text,r({size:"14",bold:!0},{children:K("ModalCourseAccess.Title")}))]}),(0,o.jsx)(y.Formik,r({initialValues:M,onSubmit:function(R,H){var ee=H.setErrors,F=H.setSubmitting,ne=H.resetForm,te={course_id:_.id,data:R};Ve(te).then(function(){ne(),q==null||q()}).catch(function($){var pe,me;ee(r({error:(pe=$==null?void 0:$.data)===null||pe===void 0?void 0:pe.message},(me=$==null?void 0:$.data)===null||me===void 0?void 0:me.errors)),W==null||W()}).finally(function(){F(!1)})}},{children:function(R){var H=R.values,ee=R.touched,F=R.errors,ne=R.handleChange,te=R.handleBlur,$=R.handleSubmit;return(0,o.jsxs)("form",r({onSubmit:$},{children:[(0,o.jsxs)("div",r({className:"form-content"},{children:[F&&F.error&&(0,o.jsx)(x.Text,r({className:"error-msg",size:"12",bold:!0},{children:F.error})),(0,o.jsxs)("div",r({className:"input-group"},{children:[(0,o.jsx)(m.Input,{type:"text",label:K("ModalCourseAccess.PhoneNumber"),error:ee.phone_number&&F.phone_number,id:"phone_number",name:"phone_number",onChange:ne,onBlur:te,value:H.phone_number}),(0,o.jsx)(C.TextArea,{label:K("ModalCourseAccess.ContactDetails"),error:ee.contact_details&&F.contact_details,id:"contact_details",name:"contact_details",onChange:ne,onBlur:te,value:H.contact_details})]}))]})),(0,o.jsxs)("div",r({className:"button-group"},{children:[(0,o.jsx)(d.Button,r({type:"button",mode:"secondary",onClick:D},{children:K("ModalCourseAccess.Cancel")})),(0,o.jsx)(d.Button,r({type:"submit",mode:"secondary"},{children:K("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};e.ModalCourseAccess=P,e.default=(0,c.withTheme)((0,c.default)(e.ModalCourseAccess)(O||(O=t([""],[""]))));var w,O})(Ge);const Vn=V.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,qn=()=>n.jsxs(Vn,{children:[n.jsx(S,{width:"20px",style:{marginBottom:"5px"}}),n.jsx(S,{width:"40%",height:37,style:{marginBottom:"10px"}}),n.jsx(S,{width:"40%",style:{marginBottom:"10px"}})," ",n.jsx(S,{width:"100%",height:490,style:{marginBottom:"40px"}}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(S,{width:"100%",count:4,style:{marginBottom:"5px"}})}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(S,{width:"100%",count:5,style:{marginBottom:"5px"}})}),n.jsx(S,{width:"80px",style:{marginBottom:"20px"}}),n.jsxs("div",{className:"tutors",children:[n.jsx(S,{circle:!0,width:"112px",height:"112px"}),n.jsxs("div",{children:[n.jsx(S,{width:"140px",style:{marginBottom:"20px"}}),n.jsx(S,{width:"140px",count:2})]})]}),n.jsx("div",{style:{marginTop:"40px"},children:n.jsx(S,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),Hn=V.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,dt=()=>{var P,w;const[e,t]=h.useState([]),[r,l]=h.useState(!1),[a,p]=h.useState(),{id:o}=Le(),{t:g}=J(),v=ie(),y=tn(),{course:c,fetchCourse:s,fetchCourses:d,fetchCourseAccess:m,fetchQuestionnaires:C}=h.useContext(Ee.EscolaLMSContext),i=h.useCallback(()=>l(!1),[]),x=h.useCallback(()=>l(!0),[]),b=h.useCallback(()=>m({course_id:Number(o),current_page:1,per_page:1}),[o,m]);return h.useEffect(()=>{d({per_page:6}),o&&(s(Number(o)),b(),C(Tn.COURSE,Number(o)).then(O=>O.success&&t(O.data)))},[o]),c.error?n.jsx("pre",{children:c.error.message}):n.jsxs(rn,{metaTitle:((P=c==null?void 0:c.value)==null?void 0:P.title)||"Loading",children:[c.loading&&n.jsx(n.Fragment,{children:n.jsx(Me,{children:n.jsx(Pe,{children:n.jsxs(A.Row,{children:[n.jsx(A.Col,{md:12,lg:8,children:n.jsx(qn,{})}),n.jsx(A.Col,{md:12,lg:3,offset:{lg:1},children:n.jsx(dn,{})})]})})})}),!c.loading&&c.value&&n.jsxs(n.Fragment,{children:[n.jsxs(Me,{children:[n.jsxs(Pe,{children:[!E&&n.jsx(wn,{items:[n.jsx(we,{to:Q.home,children:g("Home")}),n.jsx(we,{to:Q.courses,children:g("Courses")}),n.jsx(N.Text,{size:"13",children:c.value.title})]}),n.jsxs(A.Row,{children:[n.jsxs(A.Col,{md:12,lg:8,children:[E&&n.jsx(Hn,{onClick:()=>v.push(Q.courses),children:n.jsx(sn,{color:y.black})}),n.jsx(un,{courseData:c.value}),E&&c.value&&n.jsx(ke,{course:c.value,onRequestAccess:x}),c.value.description&&Te(c.value.description)!==""&&n.jsx("section",{className:"course-description-short",children:n.jsx(Oe.MarkdownRenderer,{children:c.value.description})}),c.value.summary&&Te(c.value.summary)!==""&&n.jsx("section",{className:"course-description",children:n.jsx(Oe.MarkdownRenderer,{children:c.value.summary})}),n.jsxs("section",{className:"",children:[n.jsx(Z.Title,{as:"h3",level:4,className:"title",children:g("CoursePage.Teacher")}),n.jsx(A.Row,{children:c.value&&c.value.authors.map(O=>n.jsx(pn,{author:O}))})]}),c.value.lessons&&c.value.lessons.length>0&&n.jsx(ze.CourseProgram,{lessons:c.value.lessons,onTopicClick:O=>p(O)}),n.jsx(mn,{questionnaires:e})]}),!E&&n.jsx(A.Col,{md:12,lg:3,offset:{lg:1},children:c.value&&n.jsx(ke,{course:c.value,onRequestAccess:x})})]})]}),n.jsx(xn,{relatedProducts:(w=c.value.product)==null?void 0:w.related_products})]}),n.jsxs(fe.Modal,{onClose:()=>p(void 0),visible:!!a,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[n.jsx(Be,{}),a&&n.jsx(Gn,{topic:a})]}),n.jsxs(fe.Modal,{onClose:i,visible:r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[n.jsx(Be,{}),n.jsx(Ge.ModalCourseAccess,{course:c.value,onCancel:i,onSuccess:()=>{b(),i()}})]})]})]})};export{dt as default};
//# sourceMappingURL=index-B3xfikmT.js.map

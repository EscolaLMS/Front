import{r as _,N as G,q as V,h as Y,k as re,m as H,j as n,T as K,y as N,V as A,o as L,W as he,n as ge,z as E,Y as Ve,p as _e,F as xe,E as ve,Z as be,_ as qe,$ as He,i as ke,Q as Ae,a0 as je,a1 as ee,a2 as Ge,a3 as Qe,e as h,a4 as fe,a5 as se,a6 as Ue,a7 as oe,a8 as We,a9 as Ke,aa as z,b as Ye,ab as Xe,ac as Ze,ad as Je,X as en,v as nn,C as ye,L as Ce,ae as tn,af as we,M as Pe}from"./index-DSCUWzSv.js";import{P as rn}from"./PricingCard-CzaxcLSc.js";import{u as Le,P as ne,g as sn,f as on,r as an}from"./payment-CFhXiSFZ.js";import{P as ln}from"./index-BE9PI57n.js";import{A as cn,_ as dn,P as un,I as pn,a as mn,O as xn,H as fn}from"./index-CqT4KQdb.js";import{B as hn}from"./index-m6SRtTiK.js";import{Q as gn}from"./questionnaire-CXWDgbJ4.js";import{S as Te,a as _n,C as vn,b as bn,c as jn,d as yn,M as Oe}from"./sidebar-B_h_ZqDF.js";import{S as B}from"./index-C483pC0F.js";import"./CourseCard-lCEjaTYC.js";import"./index-w-Z9NoFv.js";import"./questionnaires-De7YnJrd.js";import"./index-DOjDNS20.js";import"./swiper-react-ft3sPPqI.js";import"./swiper-DpuCcnoW.js";import"./a11y-2tju78nt.js";import"./useFetchCourses-CuIIjPf-.js";const Cn=e=>{const[t,r]=_.useState({data:void 0,loaded:!1,loading:!1}),{user:l,fetchCourseProgress:o,courseProgressDetails:x}=_.useContext(G.EscolaLMSContext);return _.useEffect(()=>{x.byId&&x.byId[Number(e)]&&x.byId[Number(e)].value&&r({...t,data:x.byId[Number(e)].value,loaded:!0,loading:!1})},[e,x]),_.useEffect(()=>{l!=null&&l.value&&!l.loading&&!t.loading&&!t.loaded?(r({...t,loading:!0}),o(e).catch(()=>r({...t,loaded:!0,loading:!1}))):t.loaded||r({...t,loaded:!0})},[l,t,o,e]),{progress:t}},wn=V.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,Me=V.div`
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
`,Pn=({course:e})=>{var g,C;const{getCheapestSubscription:t}=Le(),{cart:r,addToCart:l}=_.useContext(G.EscolaLMSContext),{t:o}=Y(),{push:x}=re(),s=_.useCallback(()=>{var d;l(Number((d=e.product)==null?void 0:d.id)).then(()=>x(H.cart))},[(g=e.product)==null?void 0:g.id,l,x]);return n.jsxs(wn,{children:[n.jsx(K.Title,{className:"modal-header",level:2,children:o("Subscriptions.GetAccess")}),n.jsx(N.Text,{children:o("Subscriptions.YouHaveTwoOptions")}),n.jsxs(A.Row,{children:[n.jsx(A.Col,{lg:6,md:12,sm:12,children:n.jsxs(Me,{className:"product-box",$isMobile:L,children:[n.jsx(K.Title,{className:"title",level:3,children:o("Buy Course")}),n.jsx("div",{className:"divider"}),n.jsx(N.Text,{className:"description",size:"13",children:e.title}),n.jsxs(N.Text,{className:"price",size:"24",bold:!0,children:[he((C=e.product)==null?void 0:C.gross_price)," zł"]}),n.jsx(ge.Button,{loading:r.loading,onClick:()=>s(),children:o("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&n.jsx(A.Col,{lg:6,md:12,sm:12,children:n.jsxs(Me,{className:"product-box",$isMobile:L,children:[n.jsx(K.Title,{className:"title",level:3,children:t==null?void 0:t.name}),n.jsx("div",{className:"divider"}),n.jsx(N.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),n.jsxs(N.Text,{className:"price",size:"24",bold:!0,children:[o("From")," ",he(t==null?void 0:t.gross_price)," ","zł"]}),n.jsx(ge.Button,{onClick:()=>{var d;return x((d=H)==null?void 0:d.subscriptions)},children:o("Subscriptions.IPick")})]})})]})]})},Se=V(E.Button)`
  display: block;
  margin-bottom: 10px;
`,Tn=({course:e,onRequestAccess:t,setModalVisible:r})=>{var p,y;const{t:l}=Y(),{push:o}=re(),{courseAccess:x,fetchCourseAccess:s,user:g,fetchCourse:C}=_.useContext(G.EscolaLMSContext),{attachProduct:d,getActiveSubscription:a}=Le();_.useEffect(()=>{(async function(){var v;const b=(v=g==null?void 0:g.value)==null?void 0:v.id;b&&ve&&(be.getPlatform()==="ios"?await ne.configure({apiKey:qe,appUserID:`${b}`}):be.getPlatform()==="android"&&await ne.configure({apiKey:He,appUserID:`${b}`}))})()},[(p=g==null?void 0:g.value)==null?void 0:p.id]);const c=_.useCallback(async()=>{var j;const b=sn(e),v=await ne.getOfferings(),P=((j=v==null?void 0:v.current)==null?void 0:j.availablePackages)||[],m=on(P,b);if(m)try{await ne.purchaseStoreProduct({product:m}),setTimeout(()=>{C(Number(e.id)),s({course_id:Number(e.id),current_page:1,per_page:1})},3e3)}catch(T){an(T)}},[e,C,s]),u=_.useMemo(()=>{var b,v;return(v=(b=x.list)==null?void 0:b.data)==null?void 0:v.find(P=>{var m;return((m=P==null?void 0:P.course)==null?void 0:m.id)===e.id})},[(y=x.list)==null?void 0:y.data,e.id]),f=_.useCallback(()=>{r(!0)},[r]),w=_.useCallback(()=>{d(e.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[o(`/course/${e.id}`),s({course_id:Number(e.id),current_page:1,per_page:1})])},[d,e.id,o,s]),i=_.useMemo(()=>n.jsx(E.Button,{mode:"secondary",onClick:()=>{if(ve){c();return}f()},children:l("Buy Course")}),[l,f,c]);return a!=null&&a.id?n.jsx(E.Button,{onClick:()=>w(),mode:"secondary",children:l("Go to the course")}):u?u.status!=="approved"?n.jsxs(n.Fragment,{children:[n.jsx(Se,{mode:"secondary",disabled:!0,children:l("CourseAccess.Pending")}),i]}):u.status==="approved"?n.jsx(E.Button,{onClick:()=>o(`/course/${e.id}`),mode:"secondary",children:l("Go to the course")}):i:n.jsxs(n.Fragment,{children:[n.jsx(Se,{mode:"secondary",onClick:t,children:l("CourseAccess.RequestAccess")}),i]})},On=({course:e,userOwnThisCourse:t,onRequestAccess:r})=>{var c,u;const{cart:l,user:o,fetchCourseAccess:x}=_.useContext(G.EscolaLMSContext),{t:s}=Y(),{push:g}=re(),[C,d]=_.useState(!1),a=_.useMemo(()=>{var f;return(f=l==null?void 0:l.value)==null?void 0:f.items.some(w=>{var i;return Number(w.product_id)===Number((i=e.product)==null?void 0:i.id)})},[(c=e.product)==null?void 0:c.id,l]);return _.useEffect(()=>{x({course_id:Number(e.id),current_page:1,per_page:1})},[e.id,x]),Ve(Number((u=o.value)==null?void 0:u.id),e)?n.jsx(E.Button,{onClick:()=>g(`/course/${e.id}`),mode:"secondary",children:s("Go to the course")}):_e(new Date(e.active_to||""))?n.jsx(N.Text,{children:s("CoursePage.IsFinished")}):a?n.jsx(n.Fragment,{children:n.jsx(E.Button,{mode:"secondary",onClick:()=>g(H.cart),children:s("CoursePage.GoToCheckout")})}):t&&_e(new Date(e.active_from||""))?n.jsx(E.Button,{onClick:()=>g(`/course/${e.id}`),mode:"secondary",children:s("Go to the course")}):t?n.jsx(N.Text,{children:s("CoursePage.NotStarted")}):o.value&&e.product?n.jsxs(n.Fragment,{children:[n.jsx(Tn,{course:e,onRequestAccess:r,setModalVisible:d}),n.jsx(xe.Modal,{onClose:()=>d(!1),visible:C,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:n.jsx(Pn,{course:e})})]}):e.product?n.jsx(E.Button,{onClick:()=>g(`/login?referrer=/courses/${e.id}`),mode:"secondary",children:s("Buy Course")}):n.jsx(N.Text,{children:s("CoursePage.UnavailableCourse")})},Mn=V.div`
  width: 100%;
  left: 0;
  position: ${L?"static":"sticky"};
  top: ${L?"unset":"130px"};
  bottom: ${L?"0":"unset"};
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
`,te=V.div`
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
`,Be=({course:e,onRequestAccess:t})=>{var c,u,f,w,i;const{user:r,courseAccess:l}=_.useContext(ke.EscolaLMSContext),{t:o}=Y(),{id:x}=Ae(),{progress:s}=Cn(Number(x)),g=_.useMemo(()=>{var p;return(p=e==null?void 0:e.product)==null?void 0:p.owned},[(c=e==null?void 0:e.product)==null?void 0:c.owned]),C=_.useMemo(()=>{var p,y;return!!((y=(p=l.list)==null?void 0:p.data)!=null&&y.find(b=>{var v;return((v=b==null?void 0:b.course)==null?void 0:v.id)===e.id&&b.status==="approved"}))},[e.id,(u=l.list)==null?void 0:u.data]),d=_.useMemo(()=>s.data||[],[s.data]),a=_.useMemo(()=>r.value&&(g||C)?((d==null?void 0:d.filter(y=>y.status===1))||[]).length:0,[d,r.value,C,g]);return n.jsx(Mn,{children:n.jsxs(rn.PricingCard,{children:[n.jsxs("div",{className:"course-sidebar-header",children:[n.jsx(N.Text,{size:"13",children:o("PricePerAccess")}),n.jsx("div",{className:"price-wrapper",children:n.jsx(ln,{price:(f=e.product)==null?void 0:f.price,taxRate:(w=e.product)==null?void 0:w.tax_rate,oldPrice:(i=e.product)==null?void 0:i.price_old,textSizes:{old:"18",new:"24"}})})]}),s.loaded?n.jsx(On,{onRequestAccess:t,course:e,userOwnThisCourse:g}):n.jsx(je,{}),n.jsxs("div",{className:"pricing-card-features",children:[e.duration&&n.jsx(ee.IconText,{text:n.jsxs(te,{children:[n.jsx("span",{children:o("CoursePage.Duration")}),n.jsx("span",{children:e.duration})]})}),e.lessons&&n.jsx(ee.IconText,{text:n.jsxs(te,{children:[n.jsx("span",{children:o("CoursePage.Lessons")}),n.jsx("span",{children:e.lessons.length})]})}),e.language&&n.jsx(ee.IconText,{text:n.jsxs(te,{children:[n.jsx("span",{children:o("CoursePage.Language")}),n.jsx("span",{children:e.language})]})}),e.level&&n.jsx(ee.IconText,{text:n.jsxs(te,{children:[n.jsx("span",{children:o("CoursePage.Level")}),n.jsx("span",{children:e.level})]})})]}),r.value?n.jsxs(Ge.CourseProgress,{progress:d&&(d==null?void 0:d.length)>0?a/d.length:0,icon:s.loaded?n.jsx(Qe,{}):n.jsx(je,{width:"22px",height:"22px"}),title:o("CoursePage.MyProgress"),children:[n.jsxs("strong",{style:{fontSize:14},children:[o("CoursePage.Finished")," ",a||0," ",o("CoursePage.Of")," ",d&&(d==null?void 0:d.length)>0?d.length:0," ",o("CoursePage.Lessons")]}),n.jsx("p",{style:{marginTop:9,marginBottom:0},children:o("CoursePage.FinishToGetCertificate")})]}):n.jsx(n.Fragment,{})]})})};var Ee={},$e={},ie={},ae={},F=h&&h.__assign||function(){return F=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},F.apply(this,arguments)};Object.defineProperty(ae,"__esModule",{value:!0});ae.CourseProgramTopic=void 0;var U=n,Sn=se,me=fe(),Bn=function(e){var t=e.index,r=e.topic,l=e.onTopicClick,o=e.mobile,x=(0,Sn.useTranslation)().t;return(0,U.jsxs)("li",F({className:"lesson__topic"},{children:[(0,U.jsxs)("div",F({className:"lesson__description"},{children:[(0,U.jsxs)(me.Text,F({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,U.jsx)(me.Text,F({size:"14",noMargin:!0},{children:r.title}))]})),r.preview&&(0,U.jsx)(me.Button,F({mode:"outline",onClick:function(){return l(r)},block:o},{children:x("Course.topicPreview")}))]}))};ae.CourseProgramTopic=Bn;var k=h&&h.__assign||function(){return k=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},k.apply(this,arguments)};Object.defineProperty(ie,"__esModule",{value:!0});ie.CourseProgramLesson=void 0;var S=n,Nn=_,kn=se,W=fe(),An=ae,Ln=function(e){var t,r,l=e.lesson,o=e.index,x=e.defaultOpen,s=x===void 0?!1:x,g=e.onTopicClick,C=e.mobile,d=e.isSubLesson,a=e.children,c=(0,kn.useTranslation)().t,u=(0,Nn.useState)(s),f=u[0],w=u[1];return(0,S.jsxs)("li",k({className:"lesson__item ".concat(f?"open":"closed"," ").concat(d?"sub-lesson":"")},{children:[(0,S.jsxs)("header",{children:[(0,S.jsxs)("div",k({className:"lesson__details"},{children:[(0,S.jsxs)(W.Text,k({noMargin:!0,size:"12"},{children:[c(d?"Course.SubLesson":"Course.Lesson")," ",o+1]})),(0,S.jsx)(W.Text,k({noMargin:!0,size:"12"},{children:l.duration&&l.duration}))]})),(0,S.jsx)("div",{children:(0,S.jsx)(W.Text,k({size:"14",bold:!0,noMargin:!0},{children:l.title}))}),(0,S.jsx)(W.Button,k({type:"button",onClick:function(){return w(!f)},mode:"icon","aria-label":c("Actions.Hide")},{children:(0,S.jsx)(W.Icon,{name:"chevron"})}))]}),!!(!((t=l.lessons)===null||t===void 0)&&t.length)&&(0,S.jsx)("ul",k({className:"lesson__lessons"},{children:a})),(0,S.jsx)("ul",k({className:"lesson__topics"},{children:(r=l.topics)===null||r===void 0?void 0:r.map(function(i,p){return(0,S.jsx)(An.CourseProgramTopic,{topic:i,index:p+1,onTopicClick:g,mobile:C},p)})}))]}))};ie.CourseProgramLesson=Ln;(function(e){var t=h&&h.__assign||function(){return t=Object.assign||function(x){for(var s,g=1,C=arguments.length;g<C;g++){s=arguments[g];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(x[d]=s[d])}return x},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RecursiveLessons=void 0;var r=n,l=ie,o=function(x){var s=x.lessons,g=x.depth,C=g===void 0?0:g,d=x.onTopicClick,a=x.mobile;return(0,r.jsx)(r.Fragment,{children:s.map(function(c,u){var f;return(0,r.jsx)(l.CourseProgramLesson,t({defaultOpen:u===0,index:u,lesson:c,isSubLesson:C>0,onTopicClick:d,mobile:a},{children:(0,r.jsx)(e.RecursiveLessons,{lessons:(f=c.lessons)!==null&&f!==void 0?f:[],depth:C+1,onTopicClick:d,mobile:a})}),c.id)})})};e.RecursiveLessons=o})($e);var le={},En=h&&h.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Re=h&&h.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(le,"__esModule",{value:!0});le.StyledSection=void 0;var $n=Re(Ue),Rn=Re(oe),I=We;le.StyledSection=(0,Rn.default)("section")(Ne||(Ne=En([`
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
`])),function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray1},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray2},function(e){return e.$mobile?"column":"row"},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,(0,$n.default)(t.white).alpha(.2).hex(),t.white)},function(e){return e.$mobile?"0":"auto"},function(e){return e.$mobile?"6px":"0"},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){var t=e.theme;return(0,I.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){return e.theme.dm__numerationsColor||e.theme.numerationsColor?1:.5});var Ne;(function(e){var t=h&&h.__makeTemplateObject||function(i,p){return Object.defineProperty?Object.defineProperty(i,"raw",{value:p}):i.raw=p,i},r=h&&h.__assign||function(){return r=Object.assign||function(i){for(var p,y=1,b=arguments.length;y<b;y++){p=arguments[y];for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(i[v]=p[v])}return i},r.apply(this,arguments)},l=h&&h.__createBinding||(Object.create?function(i,p,y,b){b===void 0&&(b=y);var v=Object.getOwnPropertyDescriptor(p,y);(!v||("get"in v?!p.__esModule:v.writable||v.configurable))&&(v={enumerable:!0,get:function(){return p[y]}}),Object.defineProperty(i,b,v)}:function(i,p,y,b){b===void 0&&(b=y),i[b]=p[y]}),o=h&&h.__setModuleDefault||(Object.create?function(i,p){Object.defineProperty(i,"default",{enumerable:!0,value:p})}:function(i,p){i.default=p}),x=h&&h.__importStar||function(i){if(i&&i.__esModule)return i;var p={};if(i!=null)for(var y in i)y!=="default"&&Object.prototype.hasOwnProperty.call(i,y)&&l(p,i,y);return o(p,i),p};Object.defineProperty(e,"__esModule",{value:!0}),e.CourseProgram=void 0;var s=n,g=se,C=x(oe),d=fe(),a=$e,c=le,u=function(i){var p=i.lessons,y=i.onTopicClick,b=i.mobile,v=b===void 0?!1:b,P=i.className,m=P===void 0?"":P,j=(0,g.useTranslation)().t;return(0,s.jsxs)(c.StyledSection,r({$mobile:v,className:"wellms-component ".concat(m)},{children:[(0,s.jsx)(d.Text,{children:j("Course.Agenda")}),(0,s.jsx)("ul",r({className:"lessons__list"},{children:(0,s.jsx)(a.RecursiveLessons,{lessons:p,onTopicClick:y,mobile:v})}))]}))};e.CourseProgram=u;var f=(0,C.default)(e.CourseProgram)(w||(w=t([""],[""])));e.default=(0,C.withTheme)(f);var w})(Ee);var ze={};(function(e){var t=h&&h.__makeTemplateObject||function(c,u){return Object.defineProperty?Object.defineProperty(c,"raw",{value:u}):c.raw=u,c},r=h&&h.__createBinding||(Object.create?function(c,u,f,w){w===void 0&&(w=f);var i=Object.getOwnPropertyDescriptor(u,f);(!i||("get"in i?!u.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return u[f]}}),Object.defineProperty(c,w,i)}:function(c,u,f,w){w===void 0&&(w=f),c[w]=u[f]}),l=h&&h.__setModuleDefault||(Object.create?function(c,u){Object.defineProperty(c,"default",{enumerable:!0,value:u})}:function(c,u){c.default=u}),o=h&&h.__importStar||function(c){if(c&&c.__esModule)return c;var u={};if(c!=null)for(var f in c)f!=="default"&&Object.prototype.hasOwnProperty.call(c,f)&&r(u,c,f);return l(u,c),u};Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownPlayer=void 0;var x=n,s=o(_),g=Ke(),C=o(oe),d=function(c){var u=c.onLoad,f=c.children,w=c.mobile,i=w===void 0?!1:w;return s.useEffect(function(){f&&u&&u()},[f,u]),(0,x.jsx)(g.MarkdownRenderer,{children:f,mobile:i})};e.MarkdownPlayer=d,e.default=(0,C.withTheme)((0,C.default)(e.MarkdownPlayer)(a||(a=t([""],[""]))));var a})(ze);const zn=({topic:e})=>{const{apiUrl:t}=_.useContext(G.EscolaLMSContext),r=_.useMemo(()=>{var l,o;if(e&&e.topicable_type)switch(e.topicable_type){case z.TopicType.H5P:return n.jsx(fn.H5Player,{h5pObject:(l=e==null?void 0:e.topicable)==null?void 0:l.content,hideActionButtons:!0});case z.TopicType.OEmbed:return n.jsx(xn.OEmbedPlayer,{url:(o=e==null?void 0:e.topicable)==null?void 0:o.value});case z.TopicType.RichText:return n.jsx("div",{className:"container-xl",children:n.jsx(ze.MarkdownPlayer,{children:e.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return n.jsx(mn.AudioVideoPlayer,{url:e.topicable.url});case z.TopicType.Image:return n.jsx(pn.ImagePlayer,{topic:e,onLoad:()=>console.log("")});case z.TopicType.Pdf:return n.jsx(un.PdfPlayer,{url:e.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return n.jsx("div",{className:"scorm-wrapper",children:n.jsx("iframe",{title:e.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${e.topicable.uuid}`})});case cn.TopicType.GiftQuiz:return n.jsx(dn,{topic:e});default:return n.jsx("pre",{children:e.topicable_type})}return n.jsx(Ye.Fragment,{})},[e,t]);return n.jsx("div",{className:"topic-preview-modal",children:n.jsx("div",{className:"topic-preview-modal-content",children:r})})};var De={};(function(e){var t=h&&h.__makeTemplateObject||function(m,j){return Object.defineProperty?Object.defineProperty(m,"raw",{value:j}):m.raw=j,m},r=h&&h.__assign||function(){return r=Object.assign||function(m){for(var j,T=1,O=arguments.length;T<O;T++){j=arguments[T];for(var M in j)Object.prototype.hasOwnProperty.call(j,M)&&(m[M]=j[M])}return m},r.apply(this,arguments)},l=h&&h.__createBinding||(Object.create?function(m,j,T,O){O===void 0&&(O=T);var M=Object.getOwnPropertyDescriptor(j,T);(!M||("get"in M?!j.__esModule:M.writable||M.configurable))&&(M={enumerable:!0,get:function(){return j[T]}}),Object.defineProperty(m,O,M)}:function(m,j,T,O){O===void 0&&(O=T),m[O]=j[T]}),o=h&&h.__setModuleDefault||(Object.create?function(m,j){Object.defineProperty(m,"default",{enumerable:!0,value:j})}:function(m,j){m.default=j}),x=h&&h.__importStar||function(m){if(m&&m.__esModule)return m;var j={};if(m!=null)for(var T in m)T!=="default"&&Object.prototype.hasOwnProperty.call(m,T)&&l(j,m,T);return o(j,m),j};Object.defineProperty(e,"__esModule",{value:!0}),e.ModalCourseAccess=void 0;var s=n,g=_,C=se,d=Xe,a=x(oe),c=G,u=E,f=Ze,w=Je,i=K,p=N,y=a.default.aside(v||(v=t([`
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
`])),function(m){var j=m.theme;return j.errorColor}),b=function(m){var j=m.course,T=m.className,O=m.initialValues,M=O===void 0?{phone_number:"",contact_details:""}:O,Ie=m.onCancel,ce=m.onSuccess,de=m.onError,Q=(0,C.useTranslation)().t,Fe=(0,g.useContext)(c.EscolaLMSContext).addCourseAccess;return(0,s.jsxs)(y,r({className:"wellms-component ".concat(T),"data-testid":"modal-course-access"},{children:[(0,s.jsxs)("header",{children:[(0,s.jsx)(i.Title,r({level:1},{children:j.title})),(0,s.jsx)(p.Text,r({size:"14",bold:!0},{children:Q("ModalCourseAccess.Title")}))]}),(0,s.jsx)(d.Formik,r({initialValues:M,onSubmit:function($,q){var X=q.setErrors,D=q.setSubmitting,Z=q.resetForm,J={course_id:j.id,data:$};Fe(J).then(function(){Z(),ce==null||ce()}).catch(function(R){var ue,pe;X(r({error:(ue=R==null?void 0:R.data)===null||ue===void 0?void 0:ue.message},(pe=R==null?void 0:R.data)===null||pe===void 0?void 0:pe.errors)),de==null||de()}).finally(function(){D(!1)})}},{children:function($){var q=$.values,X=$.touched,D=$.errors,Z=$.handleChange,J=$.handleBlur,R=$.handleSubmit;return(0,s.jsxs)("form",r({onSubmit:R},{children:[(0,s.jsxs)("div",r({className:"form-content"},{children:[D&&D.error&&(0,s.jsx)(p.Text,r({className:"error-msg",size:"12",bold:!0},{children:D.error})),(0,s.jsxs)("div",r({className:"input-group"},{children:[(0,s.jsx)(f.Input,{type:"text",label:Q("ModalCourseAccess.PhoneNumber"),error:X.phone_number&&D.phone_number,id:"phone_number",name:"phone_number",onChange:Z,onBlur:J,value:q.phone_number}),(0,s.jsx)(w.TextArea,{label:Q("ModalCourseAccess.ContactDetails"),error:X.contact_details&&D.contact_details,id:"contact_details",name:"contact_details",onChange:Z,onBlur:J,value:q.contact_details})]}))]})),(0,s.jsxs)("div",r({className:"button-group"},{children:[(0,s.jsx)(u.Button,r({type:"button",mode:"secondary",onClick:Ie},{children:Q("ModalCourseAccess.Cancel")})),(0,s.jsx)(u.Button,r({type:"submit",mode:"secondary"},{children:Q("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};e.ModalCourseAccess=b,e.default=(0,a.withTheme)((0,a.default)(e.ModalCourseAccess)(P||(P=t([""],[""]))));var v,P})(De);const Dn=V.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,In=()=>n.jsxs(Dn,{children:[n.jsx(B,{width:"20px",style:{marginBottom:"5px"}}),n.jsx(B,{width:"40%",height:37,style:{marginBottom:"10px"}}),n.jsx(B,{width:"40%",style:{marginBottom:"10px"}})," ",n.jsx(B,{width:"100%",height:490,style:{marginBottom:"40px"}}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(B,{width:"100%",count:4,style:{marginBottom:"5px"}})}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(B,{width:"100%",count:5,style:{marginBottom:"5px"}})}),n.jsx(B,{width:"80px",style:{marginBottom:"20px"}}),n.jsxs("div",{className:"tutors",children:[n.jsx(B,{circle:!0,width:"112px",height:"112px"}),n.jsxs("div",{children:[n.jsx(B,{width:"140px",style:{marginBottom:"20px"}}),n.jsx(B,{width:"140px",count:2})]})]}),n.jsx("div",{style:{marginTop:"40px"},children:n.jsx(B,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),Fn=V.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,ot=()=>{var b,v;const[e,t]=_.useState([]),[r,l]=_.useState(!1),[o,x]=_.useState(),{id:s}=Ae(),{t:g}=Y(),C=re(),d=en(),{course:a,fetchCourse:c,fetchCourses:u,fetchCourseAccess:f,fetchQuestionnaires:w}=_.useContext(ke.EscolaLMSContext),i=_.useCallback(()=>l(!1),[]),p=_.useCallback(()=>l(!0),[]),y=_.useCallback(()=>f({course_id:Number(s),current_page:1,per_page:1}),[s,f]);return _.useEffect(()=>{u({per_page:6}),s&&(c(Number(s)),y(),w(gn.COURSE,Number(s)).then(P=>P.success&&t(P.data)))},[s]),a.error?n.jsx("pre",{children:a.error.message}):n.jsxs(nn,{metaTitle:((b=a==null?void 0:a.value)==null?void 0:b.title)||"Loading",children:[a.loading&&n.jsx(n.Fragment,{children:n.jsx(Te,{children:n.jsx(ye,{children:n.jsxs(A.Row,{children:[n.jsx(A.Col,{md:12,lg:8,children:n.jsx(In,{})}),n.jsx(A.Col,{md:12,lg:3,offset:{lg:1},children:n.jsx(_n,{})})]})})})}),!a.loading&&a.value&&n.jsxs(n.Fragment,{children:[n.jsxs(Te,{children:[n.jsxs(ye,{children:[!L&&n.jsx(hn,{items:[n.jsx(Ce,{to:H.home,children:g("Home")}),n.jsx(Ce,{to:H.courses,children:g("Courses")}),n.jsx(N.Text,{size:"13",children:a.value.title})]}),n.jsxs(A.Row,{children:[n.jsxs(A.Col,{md:12,lg:8,children:[L&&n.jsx(Fn,{onClick:()=>C.push(H.courses),children:n.jsx(tn,{color:d.black})}),n.jsx(vn,{courseData:a.value}),L&&a.value&&n.jsx(Be,{course:a.value,onRequestAccess:p}),a.value.description&&we(a.value.description)!==""&&n.jsx("section",{className:"course-description-short",children:n.jsx(Pe.MarkdownRenderer,{children:a.value.description})}),a.value.summary&&we(a.value.summary)!==""&&n.jsx("section",{className:"course-description",children:n.jsx(Pe.MarkdownRenderer,{children:a.value.summary})}),n.jsxs("section",{className:"",children:[n.jsx(K.Title,{as:"h3",level:4,className:"title",children:g("CoursePage.Teacher")}),n.jsx(A.Row,{children:a.value&&a.value.authors.map(P=>n.jsx(bn,{author:P}))})]}),a.value.lessons&&a.value.lessons.length>0&&n.jsx(Ee.CourseProgram,{lessons:a.value.lessons,onTopicClick:P=>x(P)}),n.jsx(jn,{questionnaires:e})]}),!L&&n.jsx(A.Col,{md:12,lg:3,offset:{lg:1},children:a.value&&n.jsx(Be,{course:a.value,onRequestAccess:p})})]})]}),n.jsx(yn,{relatedProducts:(v=a.value.product)==null?void 0:v.related_products})]}),n.jsxs(xe.Modal,{onClose:()=>x(void 0),visible:!!o,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[n.jsx(Oe,{}),o&&n.jsx(zn,{topic:o})]}),n.jsxs(xe.Modal,{onClose:i,visible:r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[n.jsx(Oe,{}),n.jsx(De.ModalCourseAccess,{course:a.value,onCancel:i,onSuccess:()=>{y(),i()}})]})]})]})};export{ot as default};

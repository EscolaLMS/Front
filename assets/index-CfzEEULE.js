import{D as Q,a as Z,b as ie,f as U,j as n,T as J,o as N,J as A,g as L,K as ve,l as _e,q,N as He,p as E,i as be,w as fe,v as je,O as ye,V as Ve,Q as Ue,c as Le,H as Ee,U as Ce,W as re,Y as Qe,Z as We,$ as ge,a0 as ae,a1 as Ke,a2 as le,a3 as Ye,a4 as Xe,a5 as z,a6 as Je,a7 as Ze,a8 as en,X as nn,a9 as tn,z as rn,k as sn,C as we,L as Pe,aa as on,ab as Te,M as Oe}from"./index-DHorRSia.js";import{r as g,R as an}from"./sentry-DZqhWugq.js";import{P as ln}from"./PricingCard-DIYNb4vF.js";import{u as Re,P as se,g as cn,f as dn,r as un}from"./payment-C2gnPrW3.js";import{u as $e,E as he,S as Me,a as pn,C as mn,b as xn,c as fn,d as hn,M as Se}from"./sidebar-iprEht4j.js";import{u as gn,P as vn}from"./usePayment-_8o_kbBp.js";import{P as _n}from"./index-DgDBwUqe.js";import{c as f}from"./katex-D1m830yy.js";import{A as bn,_ as jn,S as yn,P as Cn,I as wn,a as Pn,O as Tn,H as On}from"./index.esm-eAUGR2Er.js";import{B as Mn}from"./index-BJMPeVBP.js";import{Q as Sn}from"./questionnaire-CXWDgbJ4.js";import{S as B}from"./index-B7vnVY_d.js";import"./lodash-Bu-jC-fW.js";import"./CourseCard-yQmPKytJ.js";import"./index-DcaIG2pc.js";import"./questionnaires-rQ_WgpJv.js";import"./index-B-n2w3x2.js";import"./swiper-CphuuvCl.js";import"./swiper-Bkq9vrtu.js";import"./useFetchCourses-m9mvzXk_.js";const Bn=e=>{const[t,r]=g.useState({data:void 0,loaded:!1,loading:!1}),{user:c,fetchCourseProgress:a,courseProgressDetails:p}=g.useContext(Q.EscolaLMSContext);return g.useEffect(()=>{p.byId&&p.byId[Number(e)]&&p.byId[Number(e)].value&&r({...t,data:p.byId[Number(e)].value,loaded:!0,loading:!1})},[e,p]),g.useEffect(()=>{c!=null&&c.value&&!c.loading&&!t.loading&&!t.loaded?(r({...t,loading:!0}),a(e).catch(()=>r({...t,loaded:!0,loading:!1}))):t.loaded||r({...t,loaded:!0})},[c,t,a,e]),{progress:t}},Nn=q.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,Be=q.div`
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
`,kn=({course:e})=>{var h;const{getCheapestSubscription:t}=Re(),{cart:r,addToCart:c}=g.useContext(Q.EscolaLMSContext),{t:a}=Z(),{push:p}=ie(),o=g.useCallback(()=>{var b;c(Number((b=e.product)==null?void 0:b.id)).then(()=>p(U.cart))},[e,c,p]);return n.jsxs(Nn,{children:[n.jsx(J.Title,{className:"modal-header",level:2,children:a("Subscriptions.GetAccess")}),n.jsx(N.Text,{children:a("Subscriptions.YouHaveTwoOptions")}),n.jsxs(A.Row,{children:[n.jsx(A.Col,{lg:6,md:12,sm:12,children:n.jsxs(Be,{className:"product-box",$isMobile:L,children:[n.jsx(J.Title,{className:"title",level:3,children:a("Buy Course")}),n.jsx("div",{className:"divider"}),n.jsx(N.Text,{className:"description",size:"13",children:e.title}),n.jsxs(N.Text,{className:"price",size:"24",bold:!0,children:[ve((h=e.product)==null?void 0:h.gross_price)," zł"]}),n.jsx(_e.Button,{loading:r.loading,onClick:()=>o(),children:a("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&n.jsx(A.Col,{lg:6,md:12,sm:12,children:n.jsxs(Be,{className:"product-box",$isMobile:L,children:[n.jsx(J.Title,{className:"title",level:3,children:t==null?void 0:t.name}),n.jsx("div",{className:"divider"}),n.jsx(N.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),n.jsxs(N.Text,{className:"price",size:"24",bold:!0,children:[a("From")," ",ve(t==null?void 0:t.gross_price)," ","zł"]}),n.jsx(_e.Button,{onClick:()=>{var b;return p((b=U)==null?void 0:b.subscriptions)},children:a("Subscriptions.IPick")})]})})]})]})},Ne=q(E.Button)`
  display: block;
  margin-bottom: 10px;
`,An=({course:e,onRequestAccess:t,setModalVisible:r})=>{var d,v;const{t:c}=Z(),{push:a}=ie(),{courseAccess:p,fetchCourseAccess:o,user:h,fetchCourse:b,addToCart:y}=g.useContext(Q.EscolaLMSContext),{attachProduct:l,getActiveSubscription:s}=Re(),{payByStripe:u,payByP24:m,defaultGateway:C}=gn(),i=$e(e);g.useEffect(()=>{(async function(){var w;const _=(w=h==null?void 0:h.value)==null?void 0:w.id;_&&je&&(ye.getPlatform()==="ios"?await se.configure({apiKey:Ve,appUserID:`${_}`}):ye.getPlatform()==="android"&&await se.configure({apiKey:Ue,appUserID:`${_}`}))})()},[(d=h==null?void 0:h.value)==null?void 0:d.id]);const x=g.useCallback(async()=>{var H;const _=cn(e),w=await se.getOfferings(),O=((H=w==null?void 0:w.current)==null?void 0:H.availablePackages)||[],D=dn(O,_);if(D)try{await se.purchaseStoreProduct({product:D}),setTimeout(()=>{b(Number(e.id)),o({course_id:Number(e.id),current_page:1,per_page:1})},3e3)}catch(W){un(W)}},[e,b,o]),j=g.useMemo(()=>{var _,w;return(w=(_=p.list)==null?void 0:_.data)==null?void 0:w.find(O=>{var D;return((D=O==null?void 0:O.course)==null?void 0:D.id)===e.id})},[(v=p.list)==null?void 0:v.data,e.id]),P=g.useCallback(()=>{var _,w;i===he.FREE&&((_=e==null?void 0:e.product)!=null&&_.id)?y(Number((w=e.product)==null?void 0:w.id)).then(()=>C===vn.Stripe?u("free"):m()):r(!0)},[r,y,e,u,i,m,C]),T=g.useCallback(()=>{l(e.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[a(`/course/${e.id}`),o({course_id:Number(e.id),current_page:1,per_page:1})])},[l,e.id,a,o]),M=g.useMemo(()=>n.jsx(E.Button,{mode:"secondary",onClick:()=>{if(je){x();return}P()},children:i===he.FREE?c("Go to the course"):c("Buy Course")}),[c,P,x,i]);return s!=null&&s.id?n.jsx(E.Button,{onClick:()=>T(),mode:"secondary",children:c("Go to the course")}):j?j.status!=="approved"?n.jsxs(n.Fragment,{children:[n.jsx(Ne,{mode:"secondary",disabled:!0,children:c("CourseAccess.Pending")}),M]}):j.status==="approved"?n.jsx(E.Button,{onClick:()=>a(`/course/${e.id}`),mode:"secondary",children:c("Go to the course")}):M:n.jsxs(n.Fragment,{children:[n.jsx(Ne,{mode:"secondary",onClick:t,children:c("CourseAccess.RequestAccess")}),M]})},Ln=({course:e,userOwnThisCourse:t,onRequestAccess:r})=>{var s,u;const{cart:c,user:a,fetchCourseAccess:p}=g.useContext(Q.EscolaLMSContext),{t:o}=Z(),{push:h}=ie(),[b,y]=g.useState(!1),l=g.useMemo(()=>{var m;return(m=c==null?void 0:c.value)==null?void 0:m.items.some(C=>{var i;return Number(C.product_id)===Number((i=e.product)==null?void 0:i.id)})},[(s=e.product)==null?void 0:s.id,c]);return g.useEffect(()=>{p({course_id:Number(e.id),current_page:1,per_page:1})},[e.id,p]),He(Number((u=a.value)==null?void 0:u.id),e)?n.jsx(E.Button,{onClick:()=>h(`/course/${e.id}`),mode:"secondary",children:o("Go to the course")}):be(new Date(e.active_to||""))?n.jsx(N.Text,{children:o("CoursePage.IsFinished")}):l?n.jsx(n.Fragment,{children:n.jsx(E.Button,{mode:"secondary",onClick:()=>h(U.cart),children:o("CoursePage.GoToCheckout")})}):t&&be(new Date(e.active_from||""))?n.jsx(E.Button,{onClick:()=>h(`/course/${e.id}`),mode:"secondary",children:o("Go to the course")}):t?n.jsx(N.Text,{children:o("CoursePage.NotStarted")}):a.value&&e.product?n.jsxs(n.Fragment,{children:[n.jsx(An,{course:e,onRequestAccess:r,setModalVisible:y}),n.jsx(fe.Modal,{onClose:()=>y(!1),visible:b,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:n.jsx(kn,{course:e})})]}):e.product?n.jsx(E.Button,{onClick:()=>h(`/login?referrer=/courses/${e.id}`),mode:"secondary",children:o("Buy Course")}):n.jsx(N.Text,{children:o("CoursePage.UnavailableCourse")})},En=q.div`
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
`,oe=q.div`
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
`,ke=({course:e,onRequestAccess:t})=>{var m,C,i,x,j;const{user:r,courseAccess:c}=g.useContext(Le.EscolaLMSContext),{t:a}=Z(),{id:p}=Ee(),{progress:o}=Bn(Number(p)),b=$e(e)===he.FREE,y=g.useMemo(()=>{var P;return(P=e==null?void 0:e.product)==null?void 0:P.owned},[(m=e==null?void 0:e.product)==null?void 0:m.owned]),l=g.useMemo(()=>{var P,T;return!!((T=(P=c.list)==null?void 0:P.data)!=null&&T.find(M=>{var d;return((d=M==null?void 0:M.course)==null?void 0:d.id)===e.id&&M.status==="approved"}))},[e.id,(C=c.list)==null?void 0:C.data]),s=g.useMemo(()=>o.data||[],[o.data]),u=g.useMemo(()=>r.value&&(y||l)?((s==null?void 0:s.filter(T=>T.status===1))||[]).length:0,[s,r.value,l,y]);return n.jsx(En,{children:n.jsxs(ln.PricingCard,{children:[n.jsxs("div",{className:"course-sidebar-header",children:[n.jsx(N.Text,{size:"13",children:a("PricePerAccess")}),n.jsx("div",{className:"price-wrapper",children:n.jsx(_n,{price:(i=e.product)==null?void 0:i.price,taxRate:(x=e.product)==null?void 0:x.tax_rate,oldPrice:(j=e.product)==null?void 0:j.price_old,textSizes:{old:"18",new:"24"},isFree:b})})]}),o.loaded?n.jsx(Ln,{onRequestAccess:t,course:e,userOwnThisCourse:y}):n.jsx(Ce,{}),n.jsxs("div",{className:"pricing-card-features",children:[e.duration&&n.jsx(re.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:a("CoursePage.Duration")}),n.jsx("span",{children:e.duration})]})}),e.lessons&&n.jsx(re.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:a("CoursePage.Lessons")}),n.jsx("span",{children:e.lessons.length})]})}),e.language&&n.jsx(re.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:a("CoursePage.Language")}),n.jsx("span",{children:e.language})]})}),e.level&&n.jsx(re.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:a("CoursePage.Level")}),n.jsx("span",{children:e.level})]})})]}),r.value?n.jsxs(Qe.CourseProgress,{progress:s&&(s==null?void 0:s.length)>0?u/s.length:0,icon:o.loaded?n.jsx(We,{}):n.jsx(Ce,{width:"22px",height:"22px"}),title:a("CoursePage.MyProgress"),children:[n.jsxs("strong",{style:{fontSize:14},children:[a("CoursePage.Finished")," ",u||0," ",a("CoursePage.Of")," ",s&&(s==null?void 0:s.length)>0?s.length:0," ",a("CoursePage.Lessons")]}),n.jsx("p",{style:{marginTop:9,marginBottom:0},children:a("CoursePage.FinishToGetCertificate")})]}):n.jsx(n.Fragment,{})]})})};var ze={},De={},ce={},de={},G=f&&f.__assign||function(){return G=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},G.apply(this,arguments)};Object.defineProperty(de,"__esModule",{value:!0});de.CourseProgramTopic=void 0;var Y=n,Rn=ae,xe=ge(),$n=function(e){var t=e.index,r=e.topic,c=e.onTopicClick,a=e.mobile,p=(0,Rn.useTranslation)().t;return(0,Y.jsxs)("li",G({className:"lesson__topic"},{children:[(0,Y.jsxs)("div",G({className:"lesson__description"},{children:[(0,Y.jsxs)(xe.Text,G({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,Y.jsx)(xe.Text,G({size:"14",noMargin:!0},{children:r.title}))]})),r.preview&&(0,Y.jsx)(xe.Button,G({mode:"outline",onClick:function(){return c(r)},block:a},{children:p("Course.topicPreview")}))]}))};de.CourseProgramTopic=$n;var k=f&&f.__assign||function(){return k=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},k.apply(this,arguments)};Object.defineProperty(ce,"__esModule",{value:!0});ce.CourseProgramLesson=void 0;var S=n,zn=g,Dn=ae,X=ge(),In=de,Fn=function(e){var t,r,c=e.lesson,a=e.index,p=e.defaultOpen,o=p===void 0?!1:p,h=e.onTopicClick,b=e.mobile,y=e.isSubLesson,l=e.children,s=(0,Dn.useTranslation)().t,u=(0,zn.useState)(o),m=u[0],C=u[1];return(0,S.jsxs)("li",k({className:"lesson__item ".concat(m?"open":"closed"," ").concat(y?"sub-lesson":"")},{children:[(0,S.jsxs)("header",{children:[(0,S.jsxs)("div",k({className:"lesson__details"},{children:[(0,S.jsxs)(X.Text,k({noMargin:!0,size:"12"},{children:[s(y?"Course.SubLesson":"Course.Lesson")," ",a+1]})),(0,S.jsx)(X.Text,k({noMargin:!0,size:"12"},{children:c.duration&&c.duration}))]})),(0,S.jsx)("div",{children:(0,S.jsx)(X.Text,k({size:"14",bold:!0,noMargin:!0},{children:c.title}))}),(0,S.jsx)(X.Button,k({type:"button",onClick:function(){return C(!m)},mode:"icon","aria-label":s("Actions.Hide")},{children:(0,S.jsx)(X.Icon,{name:"chevron"})}))]}),!!(!((t=c.lessons)===null||t===void 0)&&t.length)&&(0,S.jsx)("ul",k({className:"lesson__lessons"},{children:l})),(0,S.jsx)("ul",k({className:"lesson__topics"},{children:(r=c.topics)===null||r===void 0?void 0:r.map(function(i,x){return(0,S.jsx)(In.CourseProgramTopic,{topic:i,index:x+1,onTopicClick:h,mobile:b},x)})}))]}))};ce.CourseProgramLesson=Fn;(function(e){var t=f&&f.__assign||function(){return t=Object.assign||function(p){for(var o,h=1,b=arguments.length;h<b;h++){o=arguments[h];for(var y in o)Object.prototype.hasOwnProperty.call(o,y)&&(p[y]=o[y])}return p},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RecursiveLessons=void 0;var r=n,c=ce,a=function(p){var o=p.lessons,h=p.depth,b=h===void 0?0:h,y=p.onTopicClick,l=p.mobile;return(0,r.jsx)(r.Fragment,{children:o.map(function(s,u){var m;return(0,r.jsx)(c.CourseProgramLesson,t({defaultOpen:u===0,index:u,lesson:s,isSubLesson:b>0,onTopicClick:y,mobile:l},{children:(0,r.jsx)(e.RecursiveLessons,{lessons:(m=s.lessons)!==null&&m!==void 0?m:[],depth:b+1,onTopicClick:y,mobile:l})}),s.id)})})};e.RecursiveLessons=a})(De);var ue={},Gn=f&&f.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ie=f&&f.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ue,"__esModule",{value:!0});ue.StyledSection=void 0;var qn=Ie(Ke),Hn=Ie(le),F=Ye;ue.StyledSection=(0,Hn.default)("section")(Ae||(Ae=Gn([`
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
`])),function(e){var t=e.theme;return(0,F.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.theme;return(0,F.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){var t=e.theme;return(0,F.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray1},function(e){var t=e.theme;return(0,F.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray2},function(e){return e.$mobile?"column":"row"},function(e){var t=e.theme;return(0,F.getStylesBasedOnTheme)(t.mode,(0,qn.default)(t.white).alpha(.2).hex(),t.white)},function(e){return e.$mobile?"0":"auto"},function(e){return e.$mobile?"6px":"0"},function(e){var t=e.theme;return(0,F.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){var t=e.theme;return(0,F.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){return e.theme.dm__numerationsColor||e.theme.numerationsColor?1:.5});var Ae;(function(e){var t=f&&f.__makeTemplateObject||function(i,x){return Object.defineProperty?Object.defineProperty(i,"raw",{value:x}):i.raw=x,i},r=f&&f.__assign||function(){return r=Object.assign||function(i){for(var x,j=1,P=arguments.length;j<P;j++){x=arguments[j];for(var T in x)Object.prototype.hasOwnProperty.call(x,T)&&(i[T]=x[T])}return i},r.apply(this,arguments)},c=f&&f.__createBinding||(Object.create?function(i,x,j,P){P===void 0&&(P=j);var T=Object.getOwnPropertyDescriptor(x,j);(!T||("get"in T?!x.__esModule:T.writable||T.configurable))&&(T={enumerable:!0,get:function(){return x[j]}}),Object.defineProperty(i,P,T)}:function(i,x,j,P){P===void 0&&(P=j),i[P]=x[j]}),a=f&&f.__setModuleDefault||(Object.create?function(i,x){Object.defineProperty(i,"default",{enumerable:!0,value:x})}:function(i,x){i.default=x}),p=f&&f.__importStar||function(i){if(i&&i.__esModule)return i;var x={};if(i!=null)for(var j in i)j!=="default"&&Object.prototype.hasOwnProperty.call(i,j)&&c(x,i,j);return a(x,i),x};Object.defineProperty(e,"__esModule",{value:!0}),e.CourseProgram=void 0;var o=n,h=ae,b=p(le),y=ge(),l=De,s=ue,u=function(i){var x=i.lessons,j=i.onTopicClick,P=i.mobile,T=P===void 0?!1:P,M=i.className,d=M===void 0?"":M,v=(0,h.useTranslation)().t;return(0,o.jsxs)(s.StyledSection,r({$mobile:T,className:"wellms-component ".concat(d)},{children:[(0,o.jsx)(y.Text,{children:v("Course.Agenda")}),(0,o.jsx)("ul",r({className:"lessons__list"},{children:(0,o.jsx)(l.RecursiveLessons,{lessons:x,onTopicClick:j,mobile:T})}))]}))};e.CourseProgram=u;var m=(0,b.default)(e.CourseProgram)(C||(C=t([""],[""])));e.default=(0,b.withTheme)(m);var C})(ze);var Fe={};(function(e){var t=f&&f.__makeTemplateObject||function(s,u){return Object.defineProperty?Object.defineProperty(s,"raw",{value:u}):s.raw=u,s},r=f&&f.__createBinding||(Object.create?function(s,u,m,C){C===void 0&&(C=m);var i=Object.getOwnPropertyDescriptor(u,m);(!i||("get"in i?!u.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return u[m]}}),Object.defineProperty(s,C,i)}:function(s,u,m,C){C===void 0&&(C=m),s[C]=u[m]}),c=f&&f.__setModuleDefault||(Object.create?function(s,u){Object.defineProperty(s,"default",{enumerable:!0,value:u})}:function(s,u){s.default=u}),a=f&&f.__importStar||function(s){if(s&&s.__esModule)return s;var u={};if(s!=null)for(var m in s)m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)&&r(u,s,m);return c(u,s),u};Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownPlayer=void 0;var p=n,o=a(g),h=Xe(),b=a(le),y=function(s){var u=s.onLoad,m=s.children,C=s.mobile,i=C===void 0?!1:C;return o.useEffect(function(){m&&u&&u()},[m,u]),(0,p.jsx)(h.MarkdownRenderer,{children:m,mobile:i})};e.MarkdownPlayer=y,e.default=(0,b.withTheme)((0,b.default)(e.MarkdownPlayer)(l||(l=t([""],[""]))));var l})(Fe);const Vn=({topic:e})=>{const{apiUrl:t}=g.useContext(Q.EscolaLMSContext),r=g.useMemo(()=>{var c,a;if(e&&e.topicable_type)switch(e.topicable_type){case z.TopicType.H5P:return n.jsx(On.H5Player,{h5pObject:(c=e==null?void 0:e.topicable)==null?void 0:c.content,hideActionButtons:!0});case z.TopicType.OEmbed:return n.jsx(Tn.OEmbedPlayer,{url:(a=e==null?void 0:e.topicable)==null?void 0:a.value});case z.TopicType.RichText:return n.jsx("div",{className:"container-xl",children:n.jsx(Fe.MarkdownPlayer,{children:e.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return n.jsx(Pn.AudioVideoPlayer,{url:e.topicable.url});case z.TopicType.Image:return n.jsx(wn.ImagePlayer,{topic:e,onLoad:()=>console.log("")});case z.TopicType.Pdf:return n.jsx(Cn.PdfPlayer,{url:e.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return n.jsx("div",{className:"scorm-wrapper",children:n.jsx("div",{style:{height:"440px"},children:n.jsx(yn,{uuid:e.topicable.uuid,apiUrl:t,serviceWorkerUrl:"/service-worker-scorm.js"})})});case bn.TopicType.GiftQuiz:return n.jsx(jn,{topic:e});default:return n.jsx("pre",{children:e.topicable_type})}return n.jsx(an.Fragment,{})},[e,t]);return n.jsx("div",{className:"topic-preview-modal",children:n.jsx("div",{className:"topic-preview-modal-content",children:r})})};var Ge={};(function(e){var t=f&&f.__makeTemplateObject||function(d,v){return Object.defineProperty?Object.defineProperty(d,"raw",{value:v}):d.raw=v,d},r=f&&f.__assign||function(){return r=Object.assign||function(d){for(var v,_=1,w=arguments.length;_<w;_++){v=arguments[_];for(var O in v)Object.prototype.hasOwnProperty.call(v,O)&&(d[O]=v[O])}return d},r.apply(this,arguments)},c=f&&f.__createBinding||(Object.create?function(d,v,_,w){w===void 0&&(w=_);var O=Object.getOwnPropertyDescriptor(v,_);(!O||("get"in O?!v.__esModule:O.writable||O.configurable))&&(O={enumerable:!0,get:function(){return v[_]}}),Object.defineProperty(d,w,O)}:function(d,v,_,w){w===void 0&&(w=_),d[w]=v[_]}),a=f&&f.__setModuleDefault||(Object.create?function(d,v){Object.defineProperty(d,"default",{enumerable:!0,value:v})}:function(d,v){d.default=v}),p=f&&f.__importStar||function(d){if(d&&d.__esModule)return d;var v={};if(d!=null)for(var _ in d)_!=="default"&&Object.prototype.hasOwnProperty.call(d,_)&&c(v,d,_);return a(v,d),v};Object.defineProperty(e,"__esModule",{value:!0}),e.ModalCourseAccess=void 0;var o=n,h=g,b=ae,y=Je,l=p(le),s=Q,u=E,m=Ze,C=en,i=J,x=N,j=l.default.aside(T||(T=t([`
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
`])),function(d){var v=d.theme;return v.errorColor}),P=function(d){var v=d.course,_=d.className,w=d.initialValues,O=w===void 0?{phone_number:"",contact_details:""}:w,D=d.onCancel,H=d.onSuccess,W=d.onError,K=(0,b.useTranslation)().t,qe=(0,h.useContext)(s.EscolaLMSContext).addCourseAccess;return(0,o.jsxs)(j,r({className:"wellms-component ".concat(_),"data-testid":"modal-course-access"},{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)(i.Title,r({level:1},{children:v.title})),(0,o.jsx)(x.Text,r({size:"14",bold:!0},{children:K("ModalCourseAccess.Title")}))]}),(0,o.jsx)(y.Formik,r({initialValues:O,onSubmit:function(R,V){var ee=V.setErrors,I=V.setSubmitting,ne=V.resetForm,te={course_id:v.id,data:R};qe(te).then(function(){ne(),H==null||H()}).catch(function($){var pe,me;ee(r({error:(pe=$==null?void 0:$.data)===null||pe===void 0?void 0:pe.message},(me=$==null?void 0:$.data)===null||me===void 0?void 0:me.errors)),W==null||W()}).finally(function(){I(!1)})}},{children:function(R){var V=R.values,ee=R.touched,I=R.errors,ne=R.handleChange,te=R.handleBlur,$=R.handleSubmit;return(0,o.jsxs)("form",r({onSubmit:$},{children:[(0,o.jsxs)("div",r({className:"form-content"},{children:[I&&I.error&&(0,o.jsx)(x.Text,r({className:"error-msg",size:"12",bold:!0},{children:I.error})),(0,o.jsxs)("div",r({className:"input-group"},{children:[(0,o.jsx)(m.Input,{type:"text",label:K("ModalCourseAccess.PhoneNumber"),error:ee.phone_number&&I.phone_number,id:"phone_number",name:"phone_number",onChange:ne,onBlur:te,value:V.phone_number}),(0,o.jsx)(C.TextArea,{label:K("ModalCourseAccess.ContactDetails"),error:ee.contact_details&&I.contact_details,id:"contact_details",name:"contact_details",onChange:ne,onBlur:te,value:V.contact_details})]}))]})),(0,o.jsxs)("div",r({className:"button-group"},{children:[(0,o.jsx)(u.Button,r({type:"button",mode:"secondary",onClick:D},{children:K("ModalCourseAccess.Cancel")})),(0,o.jsx)(u.Button,r({type:"submit",mode:"secondary"},{children:K("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};e.ModalCourseAccess=P,e.default=(0,l.withTheme)((0,l.default)(e.ModalCourseAccess)(M||(M=t([""],[""]))));var T,M})(Ge);const Un=q.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,Qn=()=>n.jsxs(Un,{children:[n.jsx(B,{width:"20px",style:{marginBottom:"5px"}}),n.jsx(B,{width:"40%",height:37,style:{marginBottom:"10px"}}),n.jsx(B,{width:"40%",style:{marginBottom:"10px"}})," ",n.jsx(B,{width:"100%",height:490,style:{marginBottom:"40px"}}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(B,{width:"100%",count:4,style:{marginBottom:"5px"}})}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(B,{width:"100%",count:5,style:{marginBottom:"5px"}})}),n.jsx(B,{width:"80px",style:{marginBottom:"20px"}}),n.jsxs("div",{className:"tutors",children:[n.jsx(B,{circle:!0,width:"112px",height:"112px"}),n.jsxs("div",{children:[n.jsx(B,{width:"140px",style:{marginBottom:"20px"}}),n.jsx(B,{width:"140px",count:2})]})]}),n.jsx("div",{style:{marginTop:"40px"},children:n.jsx(B,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),Wn=q.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,ft=()=>{var T,M;const[e,t]=g.useState([]),[r,c]=g.useState(!1),[a,p]=g.useState(),{id:o}=Ee(),{t:h}=Z(),b=ie(),y=nn(),{course:l,fetchCourse:s,fetchCourses:u,fetchCourseAccess:m,fetchQuestionnaires:C}=g.useContext(Le.EscolaLMSContext),i=g.useCallback(()=>c(!1),[]),x=g.useCallback(()=>c(!0),[]),j=g.useCallback(()=>m({course_id:Number(o),current_page:1,per_page:1}),[o,m]);g.useEffect(()=>{u({per_page:6}),o&&(s(Number(o)),j(),C(Sn.COURSE,Number(o)).then(d=>d.success&&t(d.data)))},[o]);const P=g.useCallback(async d=>{var v;try{const _=await fetch(`${tn}/api/courses/${(v=l.value)==null?void 0:v.id}/preview/${d.id}`);if(_.ok){const w=await _.json();p(w.data)}}catch(_){console.error(_),rn(`${h("UnexpectedError")}`,"error")}},[l,h]);return l.error?n.jsx("pre",{children:l.error.message}):n.jsxs(sn,{metaTitle:((T=l==null?void 0:l.value)==null?void 0:T.title)||"Loading",children:[l.loading&&n.jsx(n.Fragment,{children:n.jsx(Me,{children:n.jsx(we,{children:n.jsxs(A.Row,{children:[n.jsx(A.Col,{md:12,lg:8,children:n.jsx(Qn,{})}),n.jsx(A.Col,{md:12,lg:3,offset:{lg:1},children:n.jsx(pn,{})})]})})})}),!l.loading&&l.value&&n.jsxs(n.Fragment,{children:[n.jsxs(Me,{children:[n.jsxs(we,{children:[!L&&n.jsx(Mn,{items:[n.jsx(Pe,{to:U.home,children:h("Home")}),n.jsx(Pe,{to:U.courses,children:h("Courses")}),n.jsx(N.Text,{size:"13",children:l.value.title})]}),n.jsxs(A.Row,{children:[n.jsxs(A.Col,{md:12,lg:8,children:[L&&n.jsx(Wn,{onClick:()=>b.push(U.courses),children:n.jsx(on,{color:y.black})}),n.jsx(mn,{courseData:l.value}),L&&l.value&&n.jsx(ke,{course:l.value,onRequestAccess:x}),l.value.description&&Te(l.value.description)!==""&&n.jsx("section",{className:"course-description-short",children:n.jsx(Oe.MarkdownRenderer,{children:l.value.description})}),l.value.summary&&Te(l.value.summary)!==""&&n.jsx("section",{className:"course-description",children:n.jsx(Oe.MarkdownRenderer,{children:l.value.summary})}),n.jsxs("section",{className:"",children:[n.jsx(J.Title,{as:"h3",level:4,className:"title",children:h("CoursePage.Teacher")}),n.jsx(A.Row,{children:l.value&&l.value.authors.map(d=>n.jsx(xn,{author:d}))})]}),l.value.lessons&&l.value.lessons.length>0&&n.jsx(ze.CourseProgram,{lessons:l.value.lessons,onTopicClick:d=>P(d)}),n.jsx(fn,{questionnaires:e})]}),!L&&n.jsx(A.Col,{md:12,lg:3,offset:{lg:1},children:l.value&&n.jsx(ke,{course:l.value,onRequestAccess:x})})]})]}),n.jsx(hn,{relatedProducts:(M=l.value.product)==null?void 0:M.related_products})]}),n.jsxs(fe.Modal,{onClose:()=>p(void 0),visible:!!a,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[n.jsx(Se,{}),a&&n.jsx(Vn,{topic:a})]}),n.jsxs(fe.Modal,{onClose:i,visible:r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[n.jsx(Se,{}),n.jsx(Ge.ModalCourseAccess,{course:l.value,onCancel:i,onSuccess:()=>{j(),i()}})]})]})]})};export{ft as default};
//# sourceMappingURL=index-CfzEEULE.js.map

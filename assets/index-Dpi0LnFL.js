import{r as c,H as G,q as P,f as q,h as ne,o as X,j as n,T as Q,x as M,O,i as B,Y as Ce,p as F,y as $,Z as Ke,a0 as we,z as fe,m as $e,K as be,a1 as ve,I as K,a2 as Ze,a3 as Je,d as v,a4 as ye,a5 as ae,a6 as en,a7 as ie,a8 as nn,a9 as tn,aa as z,b as sn,ab as rn,ac as on,ad as an,ae as ln,af as cn,ag as dn,ah as Ee,s as un,F as pn,ai as Ie,X as ze,aj as mn,ak as De,al as xn,S as gn,C as je,L as oe,am as hn,Q as Pe,v as fn,an as vn,ao as Te,M as Oe}from"./index-Bdpwia2Z.js";import{P as jn}from"./PricingCard-vpfCnW8x.js";import{u as Fe}from"./useSubscriptions-ClXNPpni.js";import{P as Ge}from"./index-ToPPR4wM.js";import{A as _n,_ as bn,P as yn,I as Cn,a as wn,O as Pn,H as Tn}from"./index-Cv3zEQ37.js";import{B as On}from"./index-D11m-q8u.js";import{Q as qe,a as Me,g as Mn}from"./questionnaires-B1Kvure3.js";import{b as Sn,a as Nn}from"./CourseCard-UjnHNM_t.js";import{P as Rn}from"./index-CbDfb6px.js";import{D as kn}from"./index-0akB55c8.js";import{S as An}from"./swiper-Cw6ShK_0.js";import{a as Bn}from"./a11y-Bxm-x80v.js";import{S as A}from"./index-BUHfHlMV.js";import"./useFetchCourses-B6JA3rkW.js";const Ln=e=>{const[t,s]=c.useState({data:void 0,loaded:!1,loading:!1}),{user:a,fetchCourseProgress:r,courseProgressDetails:i}=c.useContext(G.EscolaLMSContext);return c.useEffect(()=>{i.byId&&i.byId[Number(e)]&&i.byId[Number(e)].value&&s({...t,data:i.byId[Number(e)].value,loaded:!0,loading:!1})},[e,i]),c.useEffect(()=>{a!=null&&a.value&&!a.loading&&!t.loading&&!t.loaded?(s({...t,loading:!0}),r(e).catch(()=>s({...t,loaded:!0,loading:!1}))):t.loaded||s({...t,loaded:!0})},[a,t,r,e]),{progress:t}},$n=P.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,Se=P.div`
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
`,En=({course:e})=>{var x,f;const{getCheapestSubscription:t}=Fe(),{cart:s,addToCart:a}=c.useContext(G.EscolaLMSContext),{t:r}=q(),{push:i}=ne(),o=c.useCallback(()=>{var u;a(Number((u=e.product)==null?void 0:u.id)).then(()=>i(X.cart))},[(x=e.product)==null?void 0:x.id,a,i]);return n.jsxs($n,{children:[n.jsx(Q.Title,{className:"modal-header",level:2,children:r("Subscriptions.GetAccess")}),n.jsx(M.Text,{children:r("Subscriptions.YouHaveTwoOptions")}),n.jsxs(O.Row,{children:[n.jsx(O.Col,{lg:6,md:12,sm:12,children:n.jsxs(Se,{className:"product-box",$isMobile:B,children:[n.jsx(Q.Title,{className:"title",level:3,children:r("Buy Course")}),n.jsx("div",{className:"divider"}),n.jsx(M.Text,{className:"description",size:"13",children:e.title}),n.jsxs(M.Text,{className:"price",size:"24",bold:!0,children:[Ce((f=e.product)==null?void 0:f.gross_price)," zł"]}),n.jsx(F.Button,{loading:s.loading,onClick:()=>o(),children:r("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&n.jsx(O.Col,{lg:6,md:12,sm:12,children:n.jsxs(Se,{className:"product-box",$isMobile:B,children:[n.jsx(Q.Title,{className:"title",level:3,children:t==null?void 0:t.name}),n.jsx("div",{className:"divider"}),n.jsx(M.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),n.jsxs(M.Text,{className:"price",size:"24",bold:!0,children:[r("From")," ",Ce(t==null?void 0:t.gross_price)," ","zł"]}),n.jsx(F.Button,{onClick:()=>{var u;return i((u=X)==null?void 0:u.subscriptions)},children:r("Subscriptions.IPick")})]})})]})]})},Ne=P($.Button)`
  display: block;
  margin-bottom: 10px;
`,In=({course:e,onRequestAccess:t,setModalVisible:s})=>{var m;const{t:a}=q(),{push:r}=ne(),{courseAccess:i,fetchCourseAccess:o}=c.useContext(G.EscolaLMSContext),{attachProduct:x,getActiveSubscription:f}=Fe(),u=c.useMemo(()=>{var _,d;return(d=(_=i.list)==null?void 0:_.data)==null?void 0:d.find(h=>{var b;return((b=h==null?void 0:h.course)==null?void 0:b.id)===e.id})},[(m=i.list)==null?void 0:m.data,e.id]),l=c.useCallback(()=>{s(!0)},[s]),p=c.useCallback(()=>{x(e.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[r(`/course/${e.id}`),o({course_id:Number(e.id),current_page:1,per_page:1})])},[x,e.id,r,o]),g=c.useMemo(()=>n.jsx($.Button,{mode:"secondary",onClick:()=>l(),children:a("Buy Course")}),[a,l]);return f!=null&&f.id?n.jsx($.Button,{onClick:()=>p(),mode:"secondary",children:a("Go to the course")}):u?u.status!=="approved"?n.jsxs(n.Fragment,{children:[n.jsx(Ne,{mode:"secondary",disabled:!0,children:a("CourseAccess.Pending")}),g]}):u.status==="approved"?n.jsx($.Button,{onClick:()=>r(`/course/${e.id}`),mode:"secondary",children:a("Go to the course")}):g:n.jsxs(n.Fragment,{children:[n.jsx(Ne,{mode:"secondary",onClick:t,children:a("CourseAccess.RequestAccess")}),g]})},zn=({course:e,userOwnThisCourse:t,onRequestAccess:s})=>{var l,p;const{cart:a,user:r}=c.useContext(G.EscolaLMSContext),{t:i}=q(),{push:o}=ne(),[x,f]=c.useState(!1),u=c.useMemo(()=>{var g;return(g=a==null?void 0:a.value)==null?void 0:g.items.some(m=>{var _;return Number(m.product_id)===Number((_=e.product)==null?void 0:_.id)})},[(l=e.product)==null?void 0:l.id,a]);return Ke(Number((p=r.value)==null?void 0:p.id),e)?n.jsx($.Button,{onClick:()=>o(`/course/${e.id}`),mode:"secondary",children:i("Go to the course")}):we(new Date(e.active_to||""))?n.jsx(M.Text,{children:i("CoursePage.IsFinished")}):u?n.jsx($.Button,{mode:"secondary",onClick:()=>o(X.cart),children:i("CoursePage.GoToCheckout")}):t&&we(new Date(e.active_from||""))?n.jsx($.Button,{onClick:()=>o(`/course/${e.id}`),mode:"secondary",children:i("Go to the course")}):t?n.jsx(M.Text,{children:i("CoursePage.NotStarted")}):r.value&&e.product?n.jsxs(n.Fragment,{children:[n.jsx(In,{course:e,onRequestAccess:s,setModalVisible:f}),n.jsx(fe.Modal,{onClose:()=>f(!1),visible:x,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:n.jsx(En,{course:e})})]}):e.product?n.jsx(n.Fragment,{children:n.jsx($.Button,{onClick:()=>o(`/login?referrer=/courses/${e.id}`),mode:"secondary",children:i("Buy Course")})}):n.jsx(M.Text,{children:i("CoursePage.UnavailableCourse")})},Dn=P.div`
  width: 100%;
  left: 0;
  position: ${B?"static":"sticky"};
  top: ${B?"unset":"130px"};
  bottom: ${B?"0":"unset"};
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
`,Z=P.div`
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
`,Re=({course:e,onRequestAccess:t})=>{var p,g,m,_,d;const{user:s,courseAccess:a}=c.useContext($e.EscolaLMSContext),{t:r}=q(),{id:i}=be(),{progress:o}=Ln(Number(i)),x=c.useMemo(()=>{var h;return(h=e==null?void 0:e.product)==null?void 0:h.owned},[(p=e==null?void 0:e.product)==null?void 0:p.owned]),f=c.useMemo(()=>{var h,b;return!!((b=(h=a.list)==null?void 0:h.data)!=null&&b.find(C=>{var w;return((w=C==null?void 0:C.course)==null?void 0:w.id)===e.id&&C.status==="approved"}))},[e.id,(g=a.list)==null?void 0:g.data]),u=c.useMemo(()=>o.data||[],[o.data]),l=c.useMemo(()=>s.value&&(x||f)?((u==null?void 0:u.filter(b=>b.status===1))||[]).length:0,[u,s.value,f,x]);return n.jsx(Dn,{children:n.jsxs(jn.PricingCard,{children:[n.jsxs("div",{className:"course-sidebar-header",children:[n.jsx(M.Text,{size:"13",children:r("PricePerAccess")}),n.jsx("div",{className:"price-wrapper",children:n.jsx(Ge,{price:(m=e.product)==null?void 0:m.price,taxRate:(_=e.product)==null?void 0:_.tax_rate,oldPrice:(d=e.product)==null?void 0:d.price_old,textSizes:{old:"18",new:"24"}})})]}),o.loaded?n.jsx(zn,{onRequestAccess:t,course:e,userOwnThisCourse:x}):n.jsx(ve,{}),n.jsxs("div",{className:"pricing-card-features",children:[e.duration&&n.jsx(K.IconText,{text:n.jsxs(Z,{children:[n.jsx("span",{children:r("CoursePage.Duration")}),n.jsx("span",{children:e.duration})]})}),e.lessons&&n.jsx(K.IconText,{text:n.jsxs(Z,{children:[n.jsx("span",{children:r("CoursePage.Lessons")}),n.jsx("span",{children:e.lessons.length})]})}),e.language&&n.jsx(K.IconText,{text:n.jsxs(Z,{children:[n.jsx("span",{children:r("CoursePage.Language")}),n.jsx("span",{children:e.language})]})}),e.level&&n.jsx(K.IconText,{text:n.jsxs(Z,{children:[n.jsx("span",{children:r("CoursePage.Level")}),n.jsx("span",{children:e.level})]})}),e.users_count?n.jsx(K.IconText,{text:n.jsxs(Z,{children:[n.jsx("span",{children:r("CoursePage.Students")}),n.jsx("span",{children:e.users_count})]})}):""]}),s.value?n.jsxs(Ze.CourseProgress,{progress:u&&(u==null?void 0:u.length)>0?l/u.length:0,icon:o.loaded?n.jsx(Je,{}):n.jsx(ve,{width:"22px",height:"22px"}),title:r("CoursePage.MyProgress"),children:[n.jsxs("strong",{style:{fontSize:14},children:[r("CoursePage.Finished")," ",l||0," ",r("CoursePage.Of")," ",u&&(u==null?void 0:u.length)>0?u.length:0," ",r("CoursePage.Lessons")]}),n.jsx("p",{style:{marginTop:9,marginBottom:0},children:r("CoursePage.FinishToGetCertificate")})]}):n.jsx(n.Fragment,{})]})})};var Ve={},He={},le={},ce={},W=v&&v.__assign||function(){return W=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W.apply(this,arguments)};Object.defineProperty(ce,"__esModule",{value:!0});ce.CourseProgramTopic=void 0;var J=n,Fn=ae,ge=ye(),Gn=function(e){var t=e.index,s=e.topic,a=e.onTopicClick,r=e.mobile,i=(0,Fn.useTranslation)().t;return(0,J.jsxs)("li",W({className:"lesson__topic"},{children:[(0,J.jsxs)("div",W({className:"lesson__description"},{children:[(0,J.jsxs)(ge.Text,W({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,J.jsx)(ge.Text,W({size:"14",noMargin:!0},{children:s.title}))]})),s.preview&&(0,J.jsx)(ge.Button,W({mode:"outline",onClick:function(){return a(s)},block:r},{children:i("Course.topicPreview")}))]}))};ce.CourseProgramTopic=Gn;var L=v&&v.__assign||function(){return L=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},L.apply(this,arguments)};Object.defineProperty(le,"__esModule",{value:!0});le.CourseProgramLesson=void 0;var k=n,qn=c,Vn=ae,ee=ye(),Hn=ce,Wn=function(e){var t,s,a=e.lesson,r=e.index,i=e.defaultOpen,o=i===void 0?!1:i,x=e.onTopicClick,f=e.mobile,u=e.isSubLesson,l=e.children,p=(0,Vn.useTranslation)().t,g=(0,qn.useState)(o),m=g[0],_=g[1];return(0,k.jsxs)("li",L({className:"lesson__item ".concat(m?"open":"closed"," ").concat(u?"sub-lesson":"")},{children:[(0,k.jsxs)("header",{children:[(0,k.jsxs)("div",L({className:"lesson__details"},{children:[(0,k.jsxs)(ee.Text,L({noMargin:!0,size:"12"},{children:[p(u?"Course.SubLesson":"Course.Lesson")," ",r+1]})),(0,k.jsx)(ee.Text,L({noMargin:!0,size:"12"},{children:a.duration&&a.duration}))]})),(0,k.jsx)("div",{children:(0,k.jsx)(ee.Text,L({size:"14",bold:!0,noMargin:!0},{children:a.title}))}),(0,k.jsx)(ee.Button,L({type:"button",onClick:function(){return _(!m)},mode:"icon","aria-label":p("Actions.Hide")},{children:(0,k.jsx)(ee.Icon,{name:"chevron"})}))]}),!!(!((t=a.lessons)===null||t===void 0)&&t.length)&&(0,k.jsx)("ul",L({className:"lesson__lessons"},{children:l})),(0,k.jsx)("ul",L({className:"lesson__topics"},{children:(s=a.topics)===null||s===void 0?void 0:s.map(function(d,h){return(0,k.jsx)(Hn.CourseProgramTopic,{topic:d,index:h+1,onTopicClick:x,mobile:f},h)})}))]}))};le.CourseProgramLesson=Wn;(function(e){var t=v&&v.__assign||function(){return t=Object.assign||function(i){for(var o,x=1,f=arguments.length;x<f;x++){o=arguments[x];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(i[u]=o[u])}return i},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RecursiveLessons=void 0;var s=n,a=le,r=function(i){var o=i.lessons,x=i.depth,f=x===void 0?0:x,u=i.onTopicClick,l=i.mobile;return(0,s.jsx)(s.Fragment,{children:o.map(function(p,g){var m;return(0,s.jsx)(a.CourseProgramLesson,t({defaultOpen:g===0,index:g,lesson:p,isSubLesson:f>0,onTopicClick:u,mobile:l},{children:(0,s.jsx)(e.RecursiveLessons,{lessons:(m=p.lessons)!==null&&m!==void 0?m:[],depth:f+1,onTopicClick:u,mobile:l})}),p.id)})})};e.RecursiveLessons=r})(He);var de={},Qn=v&&v.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},We=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.StyledSection=void 0;var Un=We(en),Xn=We(ie),H=nn;de.StyledSection=(0,Xn.default)("section")(ke||(ke=Qn([`
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
`])),function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray1},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray2},function(e){return e.$mobile?"column":"row"},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,(0,Un.default)(t.white).alpha(.2).hex(),t.white)},function(e){return e.$mobile?"0":"auto"},function(e){return e.$mobile?"6px":"0"},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){return e.theme.dm__numerationsColor||e.theme.numerationsColor?1:.5});var ke;(function(e){var t=v&&v.__makeTemplateObject||function(d,h){return Object.defineProperty?Object.defineProperty(d,"raw",{value:h}):d.raw=h,d},s=v&&v.__assign||function(){return s=Object.assign||function(d){for(var h,b=1,C=arguments.length;b<C;b++){h=arguments[b];for(var w in h)Object.prototype.hasOwnProperty.call(h,w)&&(d[w]=h[w])}return d},s.apply(this,arguments)},a=v&&v.__createBinding||(Object.create?function(d,h,b,C){C===void 0&&(C=b);var w=Object.getOwnPropertyDescriptor(h,b);(!w||("get"in w?!h.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return h[b]}}),Object.defineProperty(d,C,w)}:function(d,h,b,C){C===void 0&&(C=b),d[C]=h[b]}),r=v&&v.__setModuleDefault||(Object.create?function(d,h){Object.defineProperty(d,"default",{enumerable:!0,value:h})}:function(d,h){d.default=h}),i=v&&v.__importStar||function(d){if(d&&d.__esModule)return d;var h={};if(d!=null)for(var b in d)b!=="default"&&Object.prototype.hasOwnProperty.call(d,b)&&a(h,d,b);return r(h,d),h};Object.defineProperty(e,"__esModule",{value:!0}),e.CourseProgram=void 0;var o=n,x=ae,f=i(ie),u=ye(),l=He,p=de,g=function(d){var h=d.lessons,b=d.onTopicClick,C=d.mobile,w=C===void 0?!1:C,S=d.className,j=S===void 0?"":S,y=(0,x.useTranslation)().t;return(0,o.jsxs)(p.StyledSection,s({$mobile:w,className:"wellms-component ".concat(j)},{children:[(0,o.jsx)(u.Text,{children:y("Course.Agenda")}),(0,o.jsx)("ul",s({className:"lessons__list"},{children:(0,o.jsx)(l.RecursiveLessons,{lessons:h,onTopicClick:b,mobile:w})}))]}))};e.CourseProgram=g;var m=(0,f.default)(e.CourseProgram)(_||(_=t([""],[""])));e.default=(0,f.withTheme)(m);var _})(Ve);var Qe={};(function(e){var t=v&&v.__makeTemplateObject||function(p,g){return Object.defineProperty?Object.defineProperty(p,"raw",{value:g}):p.raw=g,p},s=v&&v.__createBinding||(Object.create?function(p,g,m,_){_===void 0&&(_=m);var d=Object.getOwnPropertyDescriptor(g,m);(!d||("get"in d?!g.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return g[m]}}),Object.defineProperty(p,_,d)}:function(p,g,m,_){_===void 0&&(_=m),p[_]=g[m]}),a=v&&v.__setModuleDefault||(Object.create?function(p,g){Object.defineProperty(p,"default",{enumerable:!0,value:g})}:function(p,g){p.default=g}),r=v&&v.__importStar||function(p){if(p&&p.__esModule)return p;var g={};if(p!=null)for(var m in p)m!=="default"&&Object.prototype.hasOwnProperty.call(p,m)&&s(g,p,m);return a(g,p),g};Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownPlayer=void 0;var i=n,o=r(c),x=tn(),f=r(ie),u=function(p){var g=p.onLoad,m=p.children,_=p.mobile,d=_===void 0?!1:_;return o.useEffect(function(){m&&g&&g()},[m,g]),(0,i.jsx)(x.MarkdownRenderer,{children:m,mobile:d})};e.MarkdownPlayer=u,e.default=(0,f.withTheme)((0,f.default)(e.MarkdownPlayer)(l||(l=t([""],[""]))));var l})(Qe);const Yn=({topic:e})=>{const{apiUrl:t}=c.useContext(G.EscolaLMSContext),s=c.useMemo(()=>{var a,r;if(e&&e.topicable_type)switch(e.topicable_type){case z.TopicType.H5P:return n.jsx(Tn.H5Player,{h5pObject:(a=e==null?void 0:e.topicable)==null?void 0:a.content,hideActionButtons:!0});case z.TopicType.OEmbed:return n.jsx(Pn.OEmbedPlayer,{url:(r=e==null?void 0:e.topicable)==null?void 0:r.value});case z.TopicType.RichText:return n.jsx("div",{className:"container-xl",children:n.jsx(Qe.MarkdownPlayer,{children:e.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return n.jsx(wn.AudioVideoPlayer,{url:e.topicable.url});case z.TopicType.Image:return n.jsx(Cn.ImagePlayer,{topic:e,onLoad:()=>console.log("")});case z.TopicType.Pdf:return n.jsx(yn.PdfPlayer,{url:e.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return n.jsx("div",{className:"scorm-wrapper",children:n.jsx("iframe",{title:e.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${e.topicable.uuid}`})});case _n.TopicType.GiftQuiz:return n.jsx(bn,{topic:e});default:return n.jsx("pre",{children:e.topicable_type})}return n.jsx(sn.Fragment,{})},[e,t]);return n.jsx("div",{className:"topic-preview-modal",children:n.jsx("div",{className:"topic-preview-modal-content",children:s})})};var Ue={};(function(e){var t=v&&v.__makeTemplateObject||function(j,y){return Object.defineProperty?Object.defineProperty(j,"raw",{value:y}):j.raw=y,j},s=v&&v.__assign||function(){return s=Object.assign||function(j){for(var y,T=1,N=arguments.length;T<N;T++){y=arguments[T];for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(j[R]=y[R])}return j},s.apply(this,arguments)},a=v&&v.__createBinding||(Object.create?function(j,y,T,N){N===void 0&&(N=T);var R=Object.getOwnPropertyDescriptor(y,T);(!R||("get"in R?!y.__esModule:R.writable||R.configurable))&&(R={enumerable:!0,get:function(){return y[T]}}),Object.defineProperty(j,N,R)}:function(j,y,T,N){N===void 0&&(N=T),j[N]=y[T]}),r=v&&v.__setModuleDefault||(Object.create?function(j,y){Object.defineProperty(j,"default",{enumerable:!0,value:y})}:function(j,y){j.default=y}),i=v&&v.__importStar||function(j){if(j&&j.__esModule)return j;var y={};if(j!=null)for(var T in j)T!=="default"&&Object.prototype.hasOwnProperty.call(j,T)&&a(y,j,T);return r(y,j),y};Object.defineProperty(e,"__esModule",{value:!0}),e.ModalCourseAccess=void 0;var o=n,x=c,f=ae,u=rn,l=i(ie),p=G,g=$,m=on,_=an,d=Q,h=M,b=l.default.aside(w||(w=t([`
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
`])),function(j){var y=j.theme;return y.errorColor}),C=function(j){var y=j.course,T=j.className,N=j.initialValues,R=N===void 0?{phone_number:"",contact_details:""}:N,Xe=j.onCancel,ue=j.onSuccess,pe=j.onError,Y=(0,f.useTranslation)().t,Ye=(0,x.useContext)(p.EscolaLMSContext).addCourseAccess;return(0,o.jsxs)(b,s({className:"wellms-component ".concat(T),"data-testid":"modal-course-access"},{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)(d.Title,s({level:1},{children:y.title})),(0,o.jsx)(h.Text,s({size:"14",bold:!0},{children:Y("ModalCourseAccess.Title")}))]}),(0,o.jsx)(u.Formik,s({initialValues:R,onSubmit:function(E,U){var te=U.setErrors,V=U.setSubmitting,se=U.resetForm,re={course_id:y.id,data:E};Ye(re).then(function(){se(),ue==null||ue()}).catch(function(I){var me,xe;te(s({error:(me=I==null?void 0:I.data)===null||me===void 0?void 0:me.message},(xe=I==null?void 0:I.data)===null||xe===void 0?void 0:xe.errors)),pe==null||pe()}).finally(function(){V(!1)})}},{children:function(E){var U=E.values,te=E.touched,V=E.errors,se=E.handleChange,re=E.handleBlur,I=E.handleSubmit;return(0,o.jsxs)("form",s({onSubmit:I},{children:[(0,o.jsxs)("div",s({className:"form-content"},{children:[V&&V.error&&(0,o.jsx)(h.Text,s({className:"error-msg",size:"12",bold:!0},{children:V.error})),(0,o.jsxs)("div",s({className:"input-group"},{children:[(0,o.jsx)(m.Input,{type:"text",label:Y("ModalCourseAccess.PhoneNumber"),error:te.phone_number&&V.phone_number,id:"phone_number",name:"phone_number",onChange:se,onBlur:re,value:U.phone_number}),(0,o.jsx)(_.TextArea,{label:Y("ModalCourseAccess.ContactDetails"),error:te.contact_details&&V.contact_details,id:"contact_details",name:"contact_details",onChange:se,onBlur:re,value:U.contact_details})]}))]})),(0,o.jsxs)("div",s({className:"button-group"},{children:[(0,o.jsx)(g.Button,s({type:"button",mode:"secondary",onClick:Xe},{children:Y("ModalCourseAccess.Cancel")})),(0,o.jsx)(g.Button,s({type:"submit",mode:"secondary"},{children:Y("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};e.ModalCourseAccess=C,e.default=(0,l.withTheme)((0,l.default)(e.ModalCourseAccess)(S||(S=t([""],[""]))));var w,S})(Ue);const Ae=P.div`
  padding-top: 40px;
  section {
    margin-bottom: 40px;
    @media (max-width: 991px) {
      margin-bottom: 20px;
    }
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
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
  .sidebar-col {
    padding-bottom: 45px;
  }
  .course-main-info {
    h1 {
      margin-top: 5px;
      margin-bottom: 10px;
      @media (max-width: 991px) {
        font-size: 30px;
      }
    }
    .image-wrapper {
      margin-top: 13px;

      img {
        border-radius: ${({theme:e})=>e.cardRadius}px;
      }
      @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        width: 100%;

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
  .course-tutor {
    .ranking-row {
      display: none !important;
    }
  }
  .course-ratings {
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  }
  .course-description,
  .course-description-short {
    p {
      font-size: 16px;
    }
  }
  .course-companies {
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
  .course-description {
    /* padding: 50px 45px;
    margin: 45px 0; */
    /* background-color: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
    border-radius: ${({theme:e})=>e.cardRadius}px; */
  }

  .course-tutor {
    a {
      text-decoration: none !important;
    }
  }

  .single-content {
    box-sizing: border-box;
  }
`,Be=ln`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`,Kn=({author:e})=>n.jsx(O.Col,{lg:6,children:n.jsx(cn,{mobile:B,avatar:{alt:`${e.first_name} ${e.last_name}`,src:e.path_avatar?`${dn}/api/images/img?path=${e.path_avatar}`:Ee.tutorPlaceholderPath},fullName:`${e.first_name} ${e.last_name}`,description:e.bio})});var D=(e=>(e.INIT="INIT",e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e))(D||{});const Zn=P.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,Jn=({courseData:e})=>{const{fetchQuestionnaireStarsByModel:t}=c.useContext(G.EscolaLMSContext),[s,a]=c.useState({type:D.INIT}),r=ne(),i=c.useCallback(async()=>{if(e.id)try{a({type:D.LOADING});const o=await t("course",Number(e.id));o.success&&a({type:D.LOADED,rating:o.data})}catch(o){a({type:D.ERROR,error:o instanceof Error?o.message:"Unknown error"})}},[e.id,t]);return c.useEffect(()=>{i()},[e.id,i]),n.jsx("section",{className:"course-main-info",children:n.jsxs(O.Row,{children:[n.jsxs(O.Col,{lg:12,children:[n.jsx(Sn,{categories:e.categories,onCategoryClick:o=>{r.push(`/courses/?categories[]=${o}`)}}),n.jsx(Q.Title,{mobile:B,level:1,children:e.title}),s.type===D.LOADED?n.jsxs(Zn,{children:[n.jsx(F.Rating,{ratingValue:s.rating.avg_rate,label:`${s.rating.avg_rate}`}),n.jsx(F.Text,{size:"13",children:"Śr. ocena kursu"}),"・",n.jsx("div",{children:n.jsxs(F.Text,{size:"13",children:["Dodane opinie ",n.jsx("strong",{children:s.rating.count_answers})]})})]}):s.type===D.LOADING?n.jsx(ve,{width:"20px",height:"20px"}):s.type===D.ERROR?s.error:null]}),n.jsx(O.Col,{lg:12,children:e.image_path&&n.jsx("div",{className:"image-wrapper",children:n.jsx(un.ResponsiveImage,{path:e.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},he={total:0,per_page:3,page:1,current_page:1},et=({questionId:e,courseId:t})=>{const[s,a]=c.useState(void 0),[r,i]=c.useState(he),[o,x]=c.useState(!0),{fetchQuestionnairesAnswers:f}=c.useContext(G.EscolaLMSContext),{t:u}=q(),l=c.useCallback(g=>{e&&t&&(x(!0),f(qe.COURSE,Number(t),e,{per_page:r.per_page,page:g,order_by:"updated_at",order:"DESC"}).then(m=>{m.success&&(a(m.data),i(_=>({..._,total:m.meta.total,current_page:m.meta.current_page,page:m.meta.current_page})))}).catch(m=>{pn(u("UnexpectedError"),m),console.log(m)}).finally(()=>x(!1)))},[r,f,t,e,u]),p=c.useCallback(g=>{i(m=>({...m,current_page:g}))},[]);return c.useEffect(()=>{r.page!==r.current_page&&l(r.current_page)},[r.current_page,r.page,l]),c.useEffect(()=>{i(he),l(he.page)},[e]),{answersMeta:r,questionnaireAnswers:s,loading:o,onPageChange:p}},nt=P(Ie)`
  justify-content: space-between;

  background: ${({theme:e})=>e.white};
`,tt=P.div`
  .date {
    color: ${({theme:e})=>e.gray2};
    margin-bottom: 5px;
  }
`,st=P.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    text-transform: uppercase;
  }
`,rt=({name:e})=>{const t=()=>"#"+Math.floor(Math.random()*16777215).toString(16),s=e.charAt(0).toUpperCase();return n.jsx(st,{style:{backgroundColor:t()},children:n.jsx(M.Text,{size:"18",children:s})})},ot=({question:e})=>{const{user:t,note:s,updated_at:a}=e,r=ze();return s?n.jsx(tt,{children:n.jsx(nt,{children:n.jsxs(Ie,{$gap:19,children:[t.avatar?n.jsx(mn.Avatar,{src:t.avatar,alt:`user-avatar-${t.name}`}):n.jsx(rt,{name:t.name}),n.jsxs(De,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[n.jsx(M.Text,{noMargin:!0,color:r.gray2,className:"date",size:"13",children:xn(a,Ee.defaultDateFormat)}),n.jsx(M.Text,{className:"note",size:"13",children:s})]})]})})}):null},at=P(De)`
  gap: 22px;
  margin: 16px auto;
`,it=P(Q.Title)`
  margin-bottom: 16px;
`,lt=P.div`
  margin: 0 auto;
`,ct=({courseId:e,questionId:t})=>{var x;const{answersMeta:s,loading:a,onPageChange:r,questionnaireAnswers:i}=et({questionId:t,courseId:e}),{t:o}=q();return n.jsx(at,{children:a?n.jsx(gn.Spin,{}):((x=i||[])==null?void 0:x.length)>0?n.jsxs(n.Fragment,{children:[n.jsx(it,{level:4,children:o("CoursePage.CourseRatingsTitle")}),(i||[]).map(f=>n.jsx(ot,{question:f})),s.total>s.per_page&&n.jsx(lt,{children:n.jsx(Rn,{total:s.total,perPage:s.per_page,currentPage:s.current_page,onPage:r})})]}):null})},Le=()=>console.warn("INITIAL STATE"),_e=c.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:Le,questionId:null,setQuestionId:Le,reviewId:void 0,courseId:void 0}),dt=({children:e,questionnaires:t})=>{var l;const[s,a]=c.useState(null),[r,i]=c.useState(null),{id:o}=be(),x=t==null?void 0:t.at(0),f=(l=x==null?void 0:x.questions)==null?void 0:l.find(({type:p})=>p===Me.RATE),u=Mn({questionnaires:t,questionnaireId:s,questionType:Me.REVIEW});return c.useEffect(()=>{x!=null&&x.id&&!s&&a(x.id)},[x==null?void 0:x.id,s]),c.useEffect(()=>{f!=null&&f.id&&!r&&i(f.id)},[f==null?void 0:f.id,r]),n.jsx(_e.Provider,{value:{questionnaires:t,questionnaireId:s,setQuestionnaireId:a,questionId:r,setQuestionId:i,reviewId:u,courseId:Number(o)},children:e})},ut=()=>{const e=c.useContext(_e);if(!_e)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return e},pt=c.memo(()=>{const{courseId:e,reviewId:t}=ut();return n.jsx(n.Fragment,{children:e&&t&&n.jsx(ct,{courseId:e,questionId:t})})}),mt=c.memo(({questionnaires:e})=>n.jsx(dt,{questionnaires:e,children:n.jsx("section",{className:"course-ratings",children:n.jsx(pt,{})})})),xt=P.section`
  position: relative;
  margin-top: 100px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  .content-container {
    h2 {
      margin-bottom: 20px;
    }
    .swiper {
      padding: 7px 10px;
      margin: 0px -15px;
    }
  }
`,gt=({relatedProducts:e})=>{const{t}=q();return n.jsx(xt,{className:"course-related-courses",children:n.jsx(je,{children:n.jsx(O.Row,{children:n.jsxs(O.Col,{lg:12,children:[e&&(e==null?void 0:e.length)>0&&n.jsxs("div",{className:"content-container",children:[n.jsx(F.Title,{level:1,as:"h2",children:t("CoursePage.RelatedCoursesTitle")}),n.jsx(An,{slidesPerView:4,children:e==null?void 0:e.map(s=>{var a;return n.jsx(Bn,{children:n.jsx(F.NewCourseCard,{mobile:B,id:s.id,image:n.jsx(oe,{to:`/courses/${(a=s==null?void 0:s.productables[0])==null?void 0:a.id}`,children:s.poster_path?n.jsx(hn,{path:s.poster_path,alt:s.name,srcSizes:[300,600,900]}):n.jsx(Nn,{})}),price:item.public?n.jsx(Pe,{children:n.jsx("div",{className:"course-price",children:t("FREE")})}):n.jsx(Pe,{children:n.jsx(Ge,{price:s==null?void 0:s.price,oldPrice:s==null?void 0:s.price_old,taxRate:s==null?void 0:s.tax_rate})}),title:n.jsx(oe,{to:`/courses/${s.id}`,children:n.jsx(F.Title,{level:3,as:"h3",className:"title",children:s.name})})})},s.id)})})]}),n.jsx("div",{className:"content-container",children:n.jsx(kn,{titleText:t("CoursePage.InterestTitle"),params:{per_page:8,order_by:"created_at",order:"ASC"},slidesPerView:4})})]})})})})},ht=P.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`,ft=()=>n.jsx(ht,{children:n.jsx(A,{width:"100%",height:350})}),vt=P.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,jt=()=>n.jsxs(vt,{children:[n.jsx(A,{width:"20px",style:{marginBottom:"5px"}}),n.jsx(A,{width:"40%",height:37,style:{marginBottom:"10px"}}),n.jsx(A,{width:"40%",style:{marginBottom:"10px"}})," ",n.jsx(A,{width:"100%",height:490,style:{marginBottom:"40px"}}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(A,{width:"100%",count:4,style:{marginBottom:"5px"}})}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(A,{width:"100%",count:5,style:{marginBottom:"5px"}})}),n.jsx(A,{width:"80px",style:{marginBottom:"20px"}}),n.jsxs("div",{className:"tutors",children:[n.jsx(A,{circle:!0,width:"112px",height:"112px"}),n.jsxs("div",{children:[n.jsx(A,{width:"140px",style:{marginBottom:"20px"}}),n.jsx(A,{width:"140px",count:2})]})]}),n.jsx("div",{style:{marginTop:"40px"},children:n.jsx(A,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),_t=P.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,Lt=()=>{var C,w;const[e,t]=c.useState([]),[s,a]=c.useState(!1),[r,i]=c.useState(),{id:o}=be(),{t:x}=q(),f=ne(),u=ze(),{course:l,fetchCourse:p,fetchCourses:g,fetchCourseAccess:m,fetchQuestionnaires:_}=c.useContext($e.EscolaLMSContext),d=c.useCallback(()=>a(!1),[]),h=c.useCallback(()=>a(!0),[]),b=c.useCallback(()=>m({course_id:Number(o),current_page:1,per_page:1}),[o,m]);return c.useEffect(()=>{g({per_page:6}),o&&(p(Number(o)),b(),_(qe.COURSE,Number(o)).then(S=>S.success&&t(S.data)))},[o]),l.error?n.jsx("pre",{children:l.error.message}):n.jsxs(fn,{metaTitle:((C=l==null?void 0:l.value)==null?void 0:C.title)||"Loading",children:[l.loading&&n.jsx(n.Fragment,{children:n.jsx(Ae,{children:n.jsx(je,{children:n.jsxs(O.Row,{children:[n.jsx(O.Col,{md:12,lg:8,children:n.jsx(jt,{})}),n.jsx(O.Col,{md:12,lg:3,offset:{lg:1},children:n.jsx(ft,{})})]})})})}),!l.loading&&l.value&&n.jsxs(n.Fragment,{children:[n.jsxs(Ae,{children:[n.jsxs(je,{children:[!B&&n.jsx(On,{items:[n.jsx(oe,{to:X.home,children:x("Home")}),n.jsx(oe,{to:X.courses,children:x("Courses")}),n.jsx(M.Text,{size:"13",children:l.value.title})]}),n.jsxs(O.Row,{children:[n.jsxs(O.Col,{md:12,lg:8,children:[B&&n.jsx(_t,{onClick:()=>f.push(X.courses),children:n.jsx(vn,{color:u.black})}),n.jsx(Jn,{courseData:l.value}),B&&l.value&&n.jsx(Re,{course:l.value,onRequestAccess:h}),l.value.description&&Te(l.value.description)!==""&&n.jsx("section",{className:"course-description-short",children:n.jsx(Oe.MarkdownRenderer,{children:l.value.description})}),l.value.summary&&Te(l.value.summary)!==""&&n.jsx("section",{className:"course-description",children:n.jsx(Oe.MarkdownRenderer,{children:l.value.summary})}),n.jsxs("section",{className:"",children:[n.jsx(Q.Title,{as:"h3",level:4,className:"title",children:x("CoursePage.Teacher")}),n.jsx(O.Row,{children:l.value&&l.value.authors.map(S=>n.jsx(Kn,{author:S}))})]}),l.value.lessons&&l.value.lessons.length>0&&n.jsx(Ve.CourseProgram,{lessons:l.value.lessons,onTopicClick:S=>i(S)}),n.jsx(mt,{questionnaires:e})]}),!B&&n.jsx(O.Col,{md:12,lg:3,offset:{lg:1},children:l.value&&n.jsx(Re,{course:l.value,onRequestAccess:h})})]})]}),n.jsx(gt,{relatedProducts:(w=l.value.product)==null?void 0:w.related_products})]}),n.jsxs(fe.Modal,{onClose:()=>i(void 0),visible:!!r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[n.jsx(Be,{}),r&&n.jsx(Yn,{topic:r})]}),n.jsxs(fe.Modal,{onClose:d,visible:s,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[n.jsx(Be,{}),n.jsx(Ue.ModalCourseAccess,{course:l.value,onCancel:d,onSuccess:()=>{b(),d()}})]})]})]})};export{Lt as default};

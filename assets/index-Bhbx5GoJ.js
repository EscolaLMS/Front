import{r as c,H as G,q as P,f as q,h as te,o as X,j as e,T as Q,x as M,O,i as B,Y as we,p as F,y as $,Z as Ke,a0 as Pe,Q as Y,z as je,m as $e,K as ye,a1 as ve,I as Z,a2 as Ze,a3 as Je,d as j,a4 as Ce,a5 as ae,a6 as en,a7 as le,a8 as nn,a9 as tn,aa as z,b as sn,ab as rn,ac as on,ad as an,ae as ln,af as cn,ag as dn,ah as Ee,s as un,F as pn,ai as Ie,X as ze,aj as mn,ak as De,al as xn,S as gn,C as _e,L as ie,am as hn,v as fn,an as jn,ao as Te,M as Oe}from"./index-CZ-rWARv.js";import{P as vn}from"./PricingCard-D0895BqP.js";import{u as Fe}from"./useSubscriptions-BQCYwX7V.js";import{P as Ge}from"./index-CulGZ0B5.js";import{A as _n,_ as bn,P as yn,I as Cn,a as wn,O as Pn,H as Tn}from"./index-DVActjap.js";import{B as On}from"./index-ZBtXpvXu.js";import{Q as qe,a as Me,g as Mn}from"./questionnaires-DwLB5fyz.js";import{b as Sn,a as Nn}from"./CourseCard-BToff4Zf.js";import{P as Rn}from"./index-Cmp7-sZ3.js";import{D as kn}from"./index-BOt8Kd7y.js";import{S as An}from"./swiper-DOUk8CXK.js";import{a as Bn}from"./a11y-miO9qZKr.js";import{S as A}from"./index-Az3bAjsa.js";import"./useFetchCourses-DSZ-ApqR.js";const Ln=n=>{const[t,s]=c.useState({data:void 0,loaded:!1,loading:!1}),{user:i,fetchCourseProgress:r,courseProgressDetails:a}=c.useContext(G.EscolaLMSContext);return c.useEffect(()=>{a.byId&&a.byId[Number(n)]&&a.byId[Number(n)].value&&s({...t,data:a.byId[Number(n)].value,loaded:!0,loading:!1})},[n,a]),c.useEffect(()=>{i!=null&&i.value&&!i.loading&&!t.loading&&!t.loaded?(s({...t,loading:!0}),r(n).catch(()=>s({...t,loaded:!0,loading:!1}))):t.loaded||s({...t,loaded:!0})},[i,t,r,n]),{progress:t}},$n=P.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,Se=P.div`
  border-radius: ${({theme:n})=>n.cardRadius}px;
  border: 1px solid ${({theme:n})=>n.gray3};
  padding: 20px 40px;
  margin-bottom: ${({$isMobile:n})=>n?"20px":"0"};
  min-height: 240px;

  .title {
    min-height: 45px;
  }
  .divider {
    width: 21px;
    height: 3px;
    border-radius: 18px;
    background-color: ${({theme:n})=>n.primaryColor};
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
`,En=({course:n})=>{var x,f;const{getCheapestSubscription:t}=Fe(),{cart:s,addToCart:i}=c.useContext(G.EscolaLMSContext),{t:r}=q(),{push:a}=te(),o=c.useCallback(()=>{var u;i(Number((u=n.product)==null?void 0:u.id)).then(()=>a(X.cart))},[(x=n.product)==null?void 0:x.id,i,a]);return e.jsxs($n,{children:[e.jsx(Q.Title,{className:"modal-header",level:2,children:r("Subscriptions.GetAccess")}),e.jsx(M.Text,{children:r("Subscriptions.YouHaveTwoOptions")}),e.jsxs(O.Row,{children:[e.jsx(O.Col,{lg:6,md:12,sm:12,children:e.jsxs(Se,{className:"product-box",$isMobile:B,children:[e.jsx(Q.Title,{className:"title",level:3,children:r("Buy Course")}),e.jsx("div",{className:"divider"}),e.jsx(M.Text,{className:"description",size:"13",children:n.title}),e.jsxs(M.Text,{className:"price",size:"24",bold:!0,children:[we((f=n.product)==null?void 0:f.gross_price)," zł"]}),e.jsx(F.Button,{loading:s.loading,onClick:()=>o(),children:r("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&e.jsx(O.Col,{lg:6,md:12,sm:12,children:e.jsxs(Se,{className:"product-box",$isMobile:B,children:[e.jsx(Q.Title,{className:"title",level:3,children:t==null?void 0:t.name}),e.jsx("div",{className:"divider"}),e.jsx(M.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),e.jsxs(M.Text,{className:"price",size:"24",bold:!0,children:[r("From")," ",we(t==null?void 0:t.gross_price)," ","zł"]}),e.jsx(F.Button,{onClick:()=>{var u;return a((u=X)==null?void 0:u.subscriptions)},children:r("Subscriptions.IPick")})]})})]})]})},Ne=P($.Button)`
  display: block;
  margin-bottom: 10px;
`,In=({course:n,onRequestAccess:t,setModalVisible:s})=>{var m;const{t:i}=q(),{push:r}=te(),{courseAccess:a,fetchCourseAccess:o}=c.useContext(G.EscolaLMSContext),{attachProduct:x,getActiveSubscription:f}=Fe(),u=c.useMemo(()=>{var _,d;return(d=(_=a.list)==null?void 0:_.data)==null?void 0:d.find(h=>{var b;return((b=h==null?void 0:h.course)==null?void 0:b.id)===n.id})},[(m=a.list)==null?void 0:m.data,n.id]),l=c.useCallback(()=>{s(!0)},[s]),p=c.useCallback(()=>{x(n.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[r(`/course/${n.id}`),o({course_id:Number(n.id),current_page:1,per_page:1})])},[x,n.id,r,o]),g=c.useMemo(()=>e.jsx(e.Fragment,{children:e.jsx(Y,{children:e.jsx($.Button,{mode:"secondary",onClick:()=>l(),children:i("Buy Course")})})}),[i,l]);return f!=null&&f.id?e.jsx($.Button,{onClick:()=>p(),mode:"secondary",children:i("Go to the course")}):u?u.status!=="approved"?e.jsxs(e.Fragment,{children:[e.jsx(Ne,{mode:"secondary",disabled:!0,children:i("CourseAccess.Pending")}),g]}):u.status==="approved"?e.jsx($.Button,{onClick:()=>r(`/course/${n.id}`),mode:"secondary",children:i("Go to the course")}):g:e.jsxs(e.Fragment,{children:[e.jsx(Ne,{mode:"secondary",onClick:t,children:i("CourseAccess.RequestAccess")}),g]})},zn=({course:n,userOwnThisCourse:t,onRequestAccess:s})=>{var l,p;const{cart:i,user:r}=c.useContext(G.EscolaLMSContext),{t:a}=q(),{push:o}=te(),[x,f]=c.useState(!1),u=c.useMemo(()=>{var g;return(g=i==null?void 0:i.value)==null?void 0:g.items.some(m=>{var _;return Number(m.product_id)===Number((_=n.product)==null?void 0:_.id)})},[(l=n.product)==null?void 0:l.id,i]);return Ke(Number((p=r.value)==null?void 0:p.id),n)?e.jsx($.Button,{onClick:()=>o(`/course/${n.id}`),mode:"secondary",children:a("Go to the course")}):Pe(new Date(n.active_to||""))?e.jsx(M.Text,{children:a("CoursePage.IsFinished")}):u?e.jsx(e.Fragment,{children:e.jsx(Y,{children:e.jsx($.Button,{mode:"secondary",onClick:()=>o(X.cart),children:a("CoursePage.GoToCheckout")})})}):t&&Pe(new Date(n.active_from||""))?e.jsx($.Button,{onClick:()=>o(`/course/${n.id}`),mode:"secondary",children:a("Go to the course")}):t?e.jsx(M.Text,{children:a("CoursePage.NotStarted")}):r.value&&n.product?e.jsxs(e.Fragment,{children:[e.jsx(In,{course:n,onRequestAccess:s,setModalVisible:f}),e.jsx(je.Modal,{onClose:()=>f(!1),visible:x,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:e.jsx(En,{course:n})})]}):n.product?e.jsx(e.Fragment,{children:e.jsx(Y,{children:e.jsx($.Button,{onClick:()=>o(`/login?referrer=/courses/${n.id}`),mode:"secondary",children:a("Buy Course")})})}):e.jsx(M.Text,{children:a("CoursePage.UnavailableCourse")})},Dn=P.div`
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
`,J=P.div`
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
`,Re=({course:n,onRequestAccess:t})=>{var p,g,m,_,d;const{user:s,courseAccess:i}=c.useContext($e.EscolaLMSContext),{t:r}=q(),{id:a}=ye(),{progress:o}=Ln(Number(a)),x=c.useMemo(()=>{var h;return(h=n==null?void 0:n.product)==null?void 0:h.owned},[(p=n==null?void 0:n.product)==null?void 0:p.owned]),f=c.useMemo(()=>{var h,b;return!!((b=(h=i.list)==null?void 0:h.data)!=null&&b.find(C=>{var w;return((w=C==null?void 0:C.course)==null?void 0:w.id)===n.id&&C.status==="approved"}))},[n.id,(g=i.list)==null?void 0:g.data]),u=c.useMemo(()=>o.data||[],[o.data]),l=c.useMemo(()=>s.value&&(x||f)?((u==null?void 0:u.filter(b=>b.status===1))||[]).length:0,[u,s.value,f,x]);return e.jsx(Dn,{children:e.jsxs(vn.PricingCard,{children:[e.jsx(Y,{children:e.jsxs("div",{className:"course-sidebar-header",children:[e.jsx(M.Text,{size:"13",children:r("PricePerAccess")}),e.jsx("div",{className:"price-wrapper",children:e.jsx(Ge,{price:(m=n.product)==null?void 0:m.price,taxRate:(_=n.product)==null?void 0:_.tax_rate,oldPrice:(d=n.product)==null?void 0:d.price_old,textSizes:{old:"18",new:"24"}})})]})}),o.loaded?e.jsx(zn,{onRequestAccess:t,course:n,userOwnThisCourse:x}):e.jsx(ve,{}),e.jsxs("div",{className:"pricing-card-features",children:[n.duration&&e.jsx(Z.IconText,{text:e.jsxs(J,{children:[e.jsx("span",{children:r("CoursePage.Duration")}),e.jsx("span",{children:n.duration})]})}),n.lessons&&e.jsx(Z.IconText,{text:e.jsxs(J,{children:[e.jsx("span",{children:r("CoursePage.Lessons")}),e.jsx("span",{children:n.lessons.length})]})}),n.language&&e.jsx(Z.IconText,{text:e.jsxs(J,{children:[e.jsx("span",{children:r("CoursePage.Language")}),e.jsx("span",{children:n.language})]})}),n.level&&e.jsx(Z.IconText,{text:e.jsxs(J,{children:[e.jsx("span",{children:r("CoursePage.Level")}),e.jsx("span",{children:n.level})]})}),n.users_count?e.jsx(Z.IconText,{text:e.jsxs(J,{children:[e.jsx("span",{children:r("CoursePage.Students")}),e.jsx("span",{children:n.users_count})]})}):""]}),s.value?e.jsxs(Ze.CourseProgress,{progress:u&&(u==null?void 0:u.length)>0?l/u.length:0,icon:o.loaded?e.jsx(Je,{}):e.jsx(ve,{width:"22px",height:"22px"}),title:r("CoursePage.MyProgress"),children:[e.jsxs("strong",{style:{fontSize:14},children:[r("CoursePage.Finished")," ",l||0," ",r("CoursePage.Of")," ",u&&(u==null?void 0:u.length)>0?u.length:0," ",r("CoursePage.Lessons")]}),e.jsx("p",{style:{marginTop:9,marginBottom:0},children:r("CoursePage.FinishToGetCertificate")})]}):e.jsx(e.Fragment,{})]})})};var Ve={},He={},ce={},de={},W=j&&j.__assign||function(){return W=Object.assign||function(n){for(var t,s=1,i=arguments.length;s<i;s++){t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},W.apply(this,arguments)};Object.defineProperty(de,"__esModule",{value:!0});de.CourseProgramTopic=void 0;var ee=e,Fn=ae,he=Ce(),Gn=function(n){var t=n.index,s=n.topic,i=n.onTopicClick,r=n.mobile,a=(0,Fn.useTranslation)().t;return(0,ee.jsxs)("li",W({className:"lesson__topic"},{children:[(0,ee.jsxs)("div",W({className:"lesson__description"},{children:[(0,ee.jsxs)(he.Text,W({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,ee.jsx)(he.Text,W({size:"14",noMargin:!0},{children:s.title}))]})),s.preview&&(0,ee.jsx)(he.Button,W({mode:"outline",onClick:function(){return i(s)},block:r},{children:a("Course.topicPreview")}))]}))};de.CourseProgramTopic=Gn;var L=j&&j.__assign||function(){return L=Object.assign||function(n){for(var t,s=1,i=arguments.length;s<i;s++){t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},L.apply(this,arguments)};Object.defineProperty(ce,"__esModule",{value:!0});ce.CourseProgramLesson=void 0;var k=e,qn=c,Vn=ae,ne=Ce(),Hn=de,Wn=function(n){var t,s,i=n.lesson,r=n.index,a=n.defaultOpen,o=a===void 0?!1:a,x=n.onTopicClick,f=n.mobile,u=n.isSubLesson,l=n.children,p=(0,Vn.useTranslation)().t,g=(0,qn.useState)(o),m=g[0],_=g[1];return(0,k.jsxs)("li",L({className:"lesson__item ".concat(m?"open":"closed"," ").concat(u?"sub-lesson":"")},{children:[(0,k.jsxs)("header",{children:[(0,k.jsxs)("div",L({className:"lesson__details"},{children:[(0,k.jsxs)(ne.Text,L({noMargin:!0,size:"12"},{children:[p(u?"Course.SubLesson":"Course.Lesson")," ",r+1]})),(0,k.jsx)(ne.Text,L({noMargin:!0,size:"12"},{children:i.duration&&i.duration}))]})),(0,k.jsx)("div",{children:(0,k.jsx)(ne.Text,L({size:"14",bold:!0,noMargin:!0},{children:i.title}))}),(0,k.jsx)(ne.Button,L({type:"button",onClick:function(){return _(!m)},mode:"icon","aria-label":p("Actions.Hide")},{children:(0,k.jsx)(ne.Icon,{name:"chevron"})}))]}),!!(!((t=i.lessons)===null||t===void 0)&&t.length)&&(0,k.jsx)("ul",L({className:"lesson__lessons"},{children:l})),(0,k.jsx)("ul",L({className:"lesson__topics"},{children:(s=i.topics)===null||s===void 0?void 0:s.map(function(d,h){return(0,k.jsx)(Hn.CourseProgramTopic,{topic:d,index:h+1,onTopicClick:x,mobile:f},h)})}))]}))};ce.CourseProgramLesson=Wn;(function(n){var t=j&&j.__assign||function(){return t=Object.assign||function(a){for(var o,x=1,f=arguments.length;x<f;x++){o=arguments[x];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},t.apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.RecursiveLessons=void 0;var s=e,i=ce,r=function(a){var o=a.lessons,x=a.depth,f=x===void 0?0:x,u=a.onTopicClick,l=a.mobile;return(0,s.jsx)(s.Fragment,{children:o.map(function(p,g){var m;return(0,s.jsx)(i.CourseProgramLesson,t({defaultOpen:g===0,index:g,lesson:p,isSubLesson:f>0,onTopicClick:u,mobile:l},{children:(0,s.jsx)(n.RecursiveLessons,{lessons:(m=p.lessons)!==null&&m!==void 0?m:[],depth:f+1,onTopicClick:u,mobile:l})}),p.id)})})};n.RecursiveLessons=r})(He);var ue={},Qn=j&&j.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},We=j&&j.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(ue,"__esModule",{value:!0});ue.StyledSection=void 0;var Un=We(en),Xn=We(le),H=nn;ue.StyledSection=(0,Xn.default)("section")(ke||(ke=Qn([`
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
`])),function(n){var t=n.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(n){var t=n.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(n){var t=n.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(n){return n.theme.gray1},function(n){var t=n.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(n){return n.theme.gray2},function(n){return n.$mobile?"column":"row"},function(n){var t=n.theme;return(0,H.getStylesBasedOnTheme)(t.mode,(0,Un.default)(t.white).alpha(.2).hex(),t.white)},function(n){return n.$mobile?"0":"auto"},function(n){return n.$mobile?"6px":"0"},function(n){var t=n.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(n){var t=n.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(n){return n.theme.dm__numerationsColor||n.theme.numerationsColor?1:.5});var ke;(function(n){var t=j&&j.__makeTemplateObject||function(d,h){return Object.defineProperty?Object.defineProperty(d,"raw",{value:h}):d.raw=h,d},s=j&&j.__assign||function(){return s=Object.assign||function(d){for(var h,b=1,C=arguments.length;b<C;b++){h=arguments[b];for(var w in h)Object.prototype.hasOwnProperty.call(h,w)&&(d[w]=h[w])}return d},s.apply(this,arguments)},i=j&&j.__createBinding||(Object.create?function(d,h,b,C){C===void 0&&(C=b);var w=Object.getOwnPropertyDescriptor(h,b);(!w||("get"in w?!h.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return h[b]}}),Object.defineProperty(d,C,w)}:function(d,h,b,C){C===void 0&&(C=b),d[C]=h[b]}),r=j&&j.__setModuleDefault||(Object.create?function(d,h){Object.defineProperty(d,"default",{enumerable:!0,value:h})}:function(d,h){d.default=h}),a=j&&j.__importStar||function(d){if(d&&d.__esModule)return d;var h={};if(d!=null)for(var b in d)b!=="default"&&Object.prototype.hasOwnProperty.call(d,b)&&i(h,d,b);return r(h,d),h};Object.defineProperty(n,"__esModule",{value:!0}),n.CourseProgram=void 0;var o=e,x=ae,f=a(le),u=Ce(),l=He,p=ue,g=function(d){var h=d.lessons,b=d.onTopicClick,C=d.mobile,w=C===void 0?!1:C,S=d.className,v=S===void 0?"":S,y=(0,x.useTranslation)().t;return(0,o.jsxs)(p.StyledSection,s({$mobile:w,className:"wellms-component ".concat(v)},{children:[(0,o.jsx)(u.Text,{children:y("Course.Agenda")}),(0,o.jsx)("ul",s({className:"lessons__list"},{children:(0,o.jsx)(l.RecursiveLessons,{lessons:h,onTopicClick:b,mobile:w})}))]}))};n.CourseProgram=g;var m=(0,f.default)(n.CourseProgram)(_||(_=t([""],[""])));n.default=(0,f.withTheme)(m);var _})(Ve);var Qe={};(function(n){var t=j&&j.__makeTemplateObject||function(p,g){return Object.defineProperty?Object.defineProperty(p,"raw",{value:g}):p.raw=g,p},s=j&&j.__createBinding||(Object.create?function(p,g,m,_){_===void 0&&(_=m);var d=Object.getOwnPropertyDescriptor(g,m);(!d||("get"in d?!g.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return g[m]}}),Object.defineProperty(p,_,d)}:function(p,g,m,_){_===void 0&&(_=m),p[_]=g[m]}),i=j&&j.__setModuleDefault||(Object.create?function(p,g){Object.defineProperty(p,"default",{enumerable:!0,value:g})}:function(p,g){p.default=g}),r=j&&j.__importStar||function(p){if(p&&p.__esModule)return p;var g={};if(p!=null)for(var m in p)m!=="default"&&Object.prototype.hasOwnProperty.call(p,m)&&s(g,p,m);return i(g,p),g};Object.defineProperty(n,"__esModule",{value:!0}),n.MarkdownPlayer=void 0;var a=e,o=r(c),x=tn(),f=r(le),u=function(p){var g=p.onLoad,m=p.children,_=p.mobile,d=_===void 0?!1:_;return o.useEffect(function(){m&&g&&g()},[m,g]),(0,a.jsx)(x.MarkdownRenderer,{children:m,mobile:d})};n.MarkdownPlayer=u,n.default=(0,f.withTheme)((0,f.default)(n.MarkdownPlayer)(l||(l=t([""],[""]))));var l})(Qe);const Yn=({topic:n})=>{const{apiUrl:t}=c.useContext(G.EscolaLMSContext),s=c.useMemo(()=>{var i,r;if(n&&n.topicable_type)switch(n.topicable_type){case z.TopicType.H5P:return e.jsx(Tn.H5Player,{h5pObject:(i=n==null?void 0:n.topicable)==null?void 0:i.content,hideActionButtons:!0});case z.TopicType.OEmbed:return e.jsx(Pn.OEmbedPlayer,{url:(r=n==null?void 0:n.topicable)==null?void 0:r.value});case z.TopicType.RichText:return e.jsx("div",{className:"container-xl",children:e.jsx(Qe.MarkdownPlayer,{children:n.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return e.jsx(wn.AudioVideoPlayer,{url:n.topicable.url});case z.TopicType.Image:return e.jsx(Cn.ImagePlayer,{topic:n,onLoad:()=>console.log("")});case z.TopicType.Pdf:return e.jsx(yn.PdfPlayer,{url:n.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return e.jsx("div",{className:"scorm-wrapper",children:e.jsx("iframe",{title:n.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${n.topicable.uuid}`})});case _n.TopicType.GiftQuiz:return e.jsx(bn,{topic:n});default:return e.jsx("pre",{children:n.topicable_type})}return e.jsx(sn.Fragment,{})},[n,t]);return e.jsx("div",{className:"topic-preview-modal",children:e.jsx("div",{className:"topic-preview-modal-content",children:s})})};var Ue={};(function(n){var t=j&&j.__makeTemplateObject||function(v,y){return Object.defineProperty?Object.defineProperty(v,"raw",{value:y}):v.raw=y,v},s=j&&j.__assign||function(){return s=Object.assign||function(v){for(var y,T=1,N=arguments.length;T<N;T++){y=arguments[T];for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(v[R]=y[R])}return v},s.apply(this,arguments)},i=j&&j.__createBinding||(Object.create?function(v,y,T,N){N===void 0&&(N=T);var R=Object.getOwnPropertyDescriptor(y,T);(!R||("get"in R?!y.__esModule:R.writable||R.configurable))&&(R={enumerable:!0,get:function(){return y[T]}}),Object.defineProperty(v,N,R)}:function(v,y,T,N){N===void 0&&(N=T),v[N]=y[T]}),r=j&&j.__setModuleDefault||(Object.create?function(v,y){Object.defineProperty(v,"default",{enumerable:!0,value:y})}:function(v,y){v.default=y}),a=j&&j.__importStar||function(v){if(v&&v.__esModule)return v;var y={};if(v!=null)for(var T in v)T!=="default"&&Object.prototype.hasOwnProperty.call(v,T)&&i(y,v,T);return r(y,v),y};Object.defineProperty(n,"__esModule",{value:!0}),n.ModalCourseAccess=void 0;var o=e,x=c,f=ae,u=rn,l=a(le),p=G,g=$,m=on,_=an,d=Q,h=M,b=l.default.aside(w||(w=t([`
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
`])),function(v){var y=v.theme;return y.errorColor}),C=function(v){var y=v.course,T=v.className,N=v.initialValues,R=N===void 0?{phone_number:"",contact_details:""}:N,Xe=v.onCancel,pe=v.onSuccess,me=v.onError,K=(0,f.useTranslation)().t,Ye=(0,x.useContext)(p.EscolaLMSContext).addCourseAccess;return(0,o.jsxs)(b,s({className:"wellms-component ".concat(T),"data-testid":"modal-course-access"},{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)(d.Title,s({level:1},{children:y.title})),(0,o.jsx)(h.Text,s({size:"14",bold:!0},{children:K("ModalCourseAccess.Title")}))]}),(0,o.jsx)(u.Formik,s({initialValues:R,onSubmit:function(E,U){var se=U.setErrors,V=U.setSubmitting,re=U.resetForm,oe={course_id:y.id,data:E};Ye(oe).then(function(){re(),pe==null||pe()}).catch(function(I){var xe,ge;se(s({error:(xe=I==null?void 0:I.data)===null||xe===void 0?void 0:xe.message},(ge=I==null?void 0:I.data)===null||ge===void 0?void 0:ge.errors)),me==null||me()}).finally(function(){V(!1)})}},{children:function(E){var U=E.values,se=E.touched,V=E.errors,re=E.handleChange,oe=E.handleBlur,I=E.handleSubmit;return(0,o.jsxs)("form",s({onSubmit:I},{children:[(0,o.jsxs)("div",s({className:"form-content"},{children:[V&&V.error&&(0,o.jsx)(h.Text,s({className:"error-msg",size:"12",bold:!0},{children:V.error})),(0,o.jsxs)("div",s({className:"input-group"},{children:[(0,o.jsx)(m.Input,{type:"text",label:K("ModalCourseAccess.PhoneNumber"),error:se.phone_number&&V.phone_number,id:"phone_number",name:"phone_number",onChange:re,onBlur:oe,value:U.phone_number}),(0,o.jsx)(_.TextArea,{label:K("ModalCourseAccess.ContactDetails"),error:se.contact_details&&V.contact_details,id:"contact_details",name:"contact_details",onChange:re,onBlur:oe,value:U.contact_details})]}))]})),(0,o.jsxs)("div",s({className:"button-group"},{children:[(0,o.jsx)(g.Button,s({type:"button",mode:"secondary",onClick:Xe},{children:K("ModalCourseAccess.Cancel")})),(0,o.jsx)(g.Button,s({type:"submit",mode:"secondary"},{children:K("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};n.ModalCourseAccess=C,n.default=(0,l.withTheme)((0,l.default)(n.ModalCourseAccess)(S||(S=t([""],[""]))));var w,S})(Ue);const Ae=P.div`
  padding-top: 40px;
  section {
    margin-bottom: 40px;
    @media (max-width: 991px) {
      margin-bottom: 20px;
    }
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({theme:n})=>n.mode==="dark"?n.gray1:n.gray5};
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
        border-radius: ${({theme:n})=>n.cardRadius}px;
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
    /* background-color: ${({theme:n})=>n.mode==="dark"?n.gray1:n.gray5};
    border-radius: ${({theme:n})=>n.cardRadius}px; */
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
`,Kn=({author:n})=>e.jsx(O.Col,{lg:6,children:e.jsx(cn,{mobile:B,avatar:{alt:`${n.first_name} ${n.last_name}`,src:n.path_avatar?`${dn}/api/images/img?path=${n.path_avatar}`:Ee.tutorPlaceholderPath},fullName:`${n.first_name} ${n.last_name}`,description:n.bio})});var D=(n=>(n.INIT="INIT",n.LOADED="LOADED",n.LOADING="LOADING",n.ERROR="ERROR",n))(D||{});const Zn=P.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,Jn=({courseData:n})=>{const{fetchQuestionnaireStarsByModel:t}=c.useContext(G.EscolaLMSContext),[s,i]=c.useState({type:D.INIT}),r=te(),a=c.useCallback(async()=>{if(n.id)try{i({type:D.LOADING});const o=await t("course",Number(n.id));o.success&&i({type:D.LOADED,rating:o.data})}catch(o){i({type:D.ERROR,error:o instanceof Error?o.message:"Unknown error"})}},[n.id,t]);return c.useEffect(()=>{a()},[n.id,a]),e.jsx("section",{className:"course-main-info",children:e.jsxs(O.Row,{children:[e.jsxs(O.Col,{lg:12,children:[e.jsx(Sn,{categories:n.categories,onCategoryClick:o=>{r.push(`/courses/?categories[]=${o}`)}}),e.jsx(Q.Title,{mobile:B,level:1,children:n.title}),s.type===D.LOADED?e.jsxs(Zn,{children:[e.jsx(F.Rating,{ratingValue:s.rating.avg_rate,label:`${s.rating.avg_rate}`}),e.jsx(F.Text,{size:"13",children:"Śr. ocena kursu"}),"・",e.jsx("div",{children:e.jsxs(F.Text,{size:"13",children:["Dodane opinie ",e.jsx("strong",{children:s.rating.count_answers})]})})]}):s.type===D.LOADING?e.jsx(ve,{width:"20px",height:"20px"}):s.type===D.ERROR?s.error:null]}),e.jsx(O.Col,{lg:12,children:n.image_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(un.ResponsiveImage,{path:n.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},fe={total:0,per_page:3,page:1,current_page:1},et=({questionId:n,courseId:t})=>{const[s,i]=c.useState(void 0),[r,a]=c.useState(fe),[o,x]=c.useState(!0),{fetchQuestionnairesAnswers:f}=c.useContext(G.EscolaLMSContext),{t:u}=q(),l=c.useCallback(g=>{n&&t&&(x(!0),f(qe.COURSE,Number(t),n,{per_page:r.per_page,page:g,order_by:"updated_at",order:"DESC"}).then(m=>{m.success&&(i(m.data),a(_=>({..._,total:m.meta.total,current_page:m.meta.current_page,page:m.meta.current_page})))}).catch(m=>{pn(u("UnexpectedError"),m),console.log(m)}).finally(()=>x(!1)))},[r,f,t,n,u]),p=c.useCallback(g=>{a(m=>({...m,current_page:g}))},[]);return c.useEffect(()=>{r.page!==r.current_page&&l(r.current_page)},[r.current_page,r.page,l]),c.useEffect(()=>{a(fe),l(fe.page)},[n]),{answersMeta:r,questionnaireAnswers:s,loading:o,onPageChange:p}},nt=P(Ie)`
  justify-content: space-between;

  background: ${({theme:n})=>n.white};
`,tt=P.div`
  .date {
    color: ${({theme:n})=>n.gray2};
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
`,rt=({name:n})=>{const t=()=>"#"+Math.floor(Math.random()*16777215).toString(16),s=n.charAt(0).toUpperCase();return e.jsx(st,{style:{backgroundColor:t()},children:e.jsx(M.Text,{size:"18",children:s})})},ot=({question:n})=>{const{user:t,note:s,updated_at:i}=n,r=ze();return s?e.jsx(tt,{children:e.jsx(nt,{children:e.jsxs(Ie,{$gap:19,children:[t.avatar?e.jsx(mn.Avatar,{src:t.avatar,alt:`user-avatar-${t.name}`}):e.jsx(rt,{name:t.name}),e.jsxs(De,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[e.jsx(M.Text,{noMargin:!0,color:r.gray2,className:"date",size:"13",children:xn(i,Ee.defaultDateFormat)}),e.jsx(M.Text,{className:"note",size:"13",children:s})]})]})})}):null},it=P(De)`
  gap: 22px;
  margin: 16px auto;
`,at=P(Q.Title)`
  margin-bottom: 16px;
`,lt=P.div`
  margin: 0 auto;
`,ct=({courseId:n,questionId:t})=>{var x;const{answersMeta:s,loading:i,onPageChange:r,questionnaireAnswers:a}=et({questionId:t,courseId:n}),{t:o}=q();return e.jsx(it,{children:i?e.jsx(gn.Spin,{}):((x=a||[])==null?void 0:x.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(at,{level:4,children:o("CoursePage.CourseRatingsTitle")}),(a||[]).map(f=>e.jsx(ot,{question:f})),s.total>s.per_page&&e.jsx(lt,{children:e.jsx(Rn,{total:s.total,perPage:s.per_page,currentPage:s.current_page,onPage:r})})]}):null})},Le=()=>console.warn("INITIAL STATE"),be=c.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:Le,questionId:null,setQuestionId:Le,reviewId:void 0,courseId:void 0}),dt=({children:n,questionnaires:t})=>{var l;const[s,i]=c.useState(null),[r,a]=c.useState(null),{id:o}=ye(),x=t==null?void 0:t.at(0),f=(l=x==null?void 0:x.questions)==null?void 0:l.find(({type:p})=>p===Me.RATE),u=Mn({questionnaires:t,questionnaireId:s,questionType:Me.REVIEW});return c.useEffect(()=>{x!=null&&x.id&&!s&&i(x.id)},[x==null?void 0:x.id,s]),c.useEffect(()=>{f!=null&&f.id&&!r&&a(f.id)},[f==null?void 0:f.id,r]),e.jsx(be.Provider,{value:{questionnaires:t,questionnaireId:s,setQuestionnaireId:i,questionId:r,setQuestionId:a,reviewId:u,courseId:Number(o)},children:n})},ut=()=>{const n=c.useContext(be);if(!be)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return n},pt=c.memo(()=>{const{courseId:n,reviewId:t}=ut();return e.jsx(e.Fragment,{children:n&&t&&e.jsx(ct,{courseId:n,questionId:t})})}),mt=c.memo(({questionnaires:n})=>e.jsx(dt,{questionnaires:n,children:e.jsx("section",{className:"course-ratings",children:e.jsx(pt,{})})})),xt=P.section`
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
`,gt=({relatedProducts:n})=>{const{t}=q();return e.jsx(xt,{className:"course-related-courses",children:e.jsx(_e,{children:e.jsx(O.Row,{children:e.jsxs(O.Col,{lg:12,children:[n&&(n==null?void 0:n.length)>0&&e.jsxs("div",{className:"content-container",children:[e.jsx(F.Title,{level:1,as:"h2",children:t("CoursePage.RelatedCoursesTitle")}),e.jsx(An,{slidesPerView:4,children:n==null?void 0:n.map(s=>{var i;return e.jsx(Bn,{children:e.jsx(F.NewCourseCard,{mobile:B,id:s.id,image:e.jsx(ie,{to:`/courses/${(i=s==null?void 0:s.productables[0])==null?void 0:i.id}`,children:s.poster_path?e.jsx(hn,{path:s.poster_path,alt:s.name,srcSizes:[300,600,900]}):e.jsx(Nn,{})}),price:item.public?e.jsx(Y,{children:e.jsx("div",{className:"course-price",children:t("FREE")})}):e.jsx(Y,{children:e.jsx(Ge,{price:s==null?void 0:s.price,oldPrice:s==null?void 0:s.price_old,taxRate:s==null?void 0:s.tax_rate})}),title:e.jsx(ie,{to:`/courses/${s.id}`,children:e.jsx(F.Title,{level:3,as:"h3",className:"title",children:s.name})})})},s.id)})})]}),e.jsx("div",{className:"content-container",children:e.jsx(kn,{titleText:t("CoursePage.InterestTitle"),params:{per_page:8,order_by:"created_at",order:"ASC"},slidesPerView:4})})]})})})})},ht=P.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`,ft=()=>e.jsx(ht,{children:e.jsx(A,{width:"100%",height:350})}),jt=P.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,vt=()=>e.jsxs(jt,{children:[e.jsx(A,{width:"20px",style:{marginBottom:"5px"}}),e.jsx(A,{width:"40%",height:37,style:{marginBottom:"10px"}}),e.jsx(A,{width:"40%",style:{marginBottom:"10px"}})," ",e.jsx(A,{width:"100%",height:490,style:{marginBottom:"40px"}}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(A,{width:"100%",count:4,style:{marginBottom:"5px"}})}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(A,{width:"100%",count:5,style:{marginBottom:"5px"}})}),e.jsx(A,{width:"80px",style:{marginBottom:"20px"}}),e.jsxs("div",{className:"tutors",children:[e.jsx(A,{circle:!0,width:"112px",height:"112px"}),e.jsxs("div",{children:[e.jsx(A,{width:"140px",style:{marginBottom:"20px"}}),e.jsx(A,{width:"140px",count:2})]})]}),e.jsx("div",{style:{marginTop:"40px"},children:e.jsx(A,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),_t=P.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,Lt=()=>{var C,w;const[n,t]=c.useState([]),[s,i]=c.useState(!1),[r,a]=c.useState(),{id:o}=ye(),{t:x}=q(),f=te(),u=ze(),{course:l,fetchCourse:p,fetchCourses:g,fetchCourseAccess:m,fetchQuestionnaires:_}=c.useContext($e.EscolaLMSContext),d=c.useCallback(()=>i(!1),[]),h=c.useCallback(()=>i(!0),[]),b=c.useCallback(()=>m({course_id:Number(o),current_page:1,per_page:1}),[o,m]);return c.useEffect(()=>{g({per_page:6}),o&&(p(Number(o)),b(),_(qe.COURSE,Number(o)).then(S=>S.success&&t(S.data)))},[o]),l.error?e.jsx("pre",{children:l.error.message}):e.jsxs(fn,{metaTitle:((C=l==null?void 0:l.value)==null?void 0:C.title)||"Loading",children:[l.loading&&e.jsx(e.Fragment,{children:e.jsx(Ae,{children:e.jsx(_e,{children:e.jsxs(O.Row,{children:[e.jsx(O.Col,{md:12,lg:8,children:e.jsx(vt,{})}),e.jsx(O.Col,{md:12,lg:3,offset:{lg:1},children:e.jsx(ft,{})})]})})})}),!l.loading&&l.value&&e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsxs(_e,{children:[!B&&e.jsx(On,{items:[e.jsx(ie,{to:X.home,children:x("Home")}),e.jsx(ie,{to:X.courses,children:x("Courses")}),e.jsx(M.Text,{size:"13",children:l.value.title})]}),e.jsxs(O.Row,{children:[e.jsxs(O.Col,{md:12,lg:8,children:[B&&e.jsx(_t,{onClick:()=>f.push(X.courses),children:e.jsx(jn,{color:u.black})}),e.jsx(Jn,{courseData:l.value}),B&&l.value&&e.jsx(Re,{course:l.value,onRequestAccess:h}),l.value.description&&Te(l.value.description)!==""&&e.jsx("section",{className:"course-description-short",children:e.jsx(Oe.MarkdownRenderer,{children:l.value.description})}),l.value.summary&&Te(l.value.summary)!==""&&e.jsx("section",{className:"course-description",children:e.jsx(Oe.MarkdownRenderer,{children:l.value.summary})}),e.jsxs("section",{className:"",children:[e.jsx(Q.Title,{as:"h3",level:4,className:"title",children:x("CoursePage.Teacher")}),e.jsx(O.Row,{children:l.value&&l.value.authors.map(S=>e.jsx(Kn,{author:S}))})]}),l.value.lessons&&l.value.lessons.length>0&&e.jsx(Ve.CourseProgram,{lessons:l.value.lessons,onTopicClick:S=>a(S)}),e.jsx(mt,{questionnaires:n})]}),!B&&e.jsx(O.Col,{md:12,lg:3,offset:{lg:1},children:l.value&&e.jsx(Re,{course:l.value,onRequestAccess:h})})]})]}),e.jsx(gt,{relatedProducts:(w=l.value.product)==null?void 0:w.related_products})]}),e.jsxs(je.Modal,{onClose:()=>a(void 0),visible:!!r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[e.jsx(Be,{}),r&&e.jsx(Yn,{topic:r})]}),e.jsxs(je.Modal,{onClose:d,visible:s,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[e.jsx(Be,{}),e.jsx(Ue.ModalCourseAccess,{course:l.value,onCancel:d,onSuccess:()=>{b(),d()}})]})]})]})};export{Lt as default};

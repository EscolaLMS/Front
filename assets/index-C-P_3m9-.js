import{r as c,N as G,q as T,f as q,h as te,o as J,j as e,T as Q,x as S,V as M,i as B,a1 as we,p as F,y as $,a2 as Ye,a3 as Pe,W as U,E as je,m as $e,Q as ye,a4 as ve,I as K,a5 as Ke,a6 as Ze,d as j,a7 as Ce,a8 as ae,a9 as en,aa as le,ab as nn,ac as tn,ad as z,b as sn,ae as rn,af as on,ag as an,ah as ln,ai as cn,aj as dn,ak as Ee,s as un,J as pn,al as Ie,X as ze,am as mn,an as De,ao as xn,S as gn,C as _e,L as ie,ap as hn,v as fn,aq as jn,ar as Te,M as Oe}from"./index-xz6dt63Y.js";import{P as vn}from"./PricingCard-BQkF5_EG.js";import{u as Fe}from"./useSubscriptions-DQtwnaDq.js";import{P as Ge}from"./index-dNaO37VC.js";import{A as _n,_ as bn,P as yn,I as Cn,a as wn,O as Pn,H as Tn}from"./index-Bp5_D_SV.js";import{B as On}from"./index-DTHn6hWi.js";import{Q as qe,a as Me,g as Mn}from"./questionnaires-DiOOK1uN.js";import{b as Sn,a as Nn}from"./CourseCard-QOr2t26e.js";import{P as Rn}from"./index-DJ4k_Jpt.js";import{D as kn}from"./index-DwqXXjnP.js";import{S as An}from"./swiper-BRTzvh_f.js";import{a as Bn}from"./a11y-D-XEsuyp.js";import{S as A}from"./index-CWMiWCX8.js";import"./useFetchCourses-DLQc82LH.js";const Ln=n=>{const[t,s]=c.useState({data:void 0,loaded:!1,loading:!1}),{user:a,fetchCourseProgress:o,courseProgressDetails:i}=c.useContext(G.EscolaLMSContext);return c.useEffect(()=>{i.byId&&i.byId[Number(n)]&&i.byId[Number(n)].value&&s({...t,data:i.byId[Number(n)].value,loaded:!0,loading:!1})},[n,i]),c.useEffect(()=>{a!=null&&a.value&&!a.loading&&!t.loading&&!t.loaded?(s({...t,loading:!0}),o(n).catch(()=>s({...t,loaded:!0,loading:!1}))):t.loaded||s({...t,loaded:!0})},[a,t,o,n]),{progress:t}},$n=T.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,Se=T.div`
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
`,En=({course:n})=>{var p,g;const{getCheapestSubscription:t}=Fe(),{cart:s,addToCart:a}=c.useContext(G.EscolaLMSContext),{t:o}=q(),{push:i}=te(),l=c.useCallback(()=>{var v;a(Number((v=n.product)==null?void 0:v.id)).then(()=>i(J.cart))},[(p=n.product)==null?void 0:p.id,a,i]);return e.jsxs($n,{children:[e.jsx(Q.Title,{className:"modal-header",level:2,children:o("Subscriptions.GetAccess")}),e.jsx(S.Text,{children:o("Subscriptions.YouHaveTwoOptions")}),e.jsxs(M.Row,{children:[e.jsx(M.Col,{lg:6,md:12,sm:12,children:e.jsxs(Se,{className:"product-box",$isMobile:B,children:[e.jsx(Q.Title,{className:"title",level:3,children:o("Buy Course")}),e.jsx("div",{className:"divider"}),e.jsx(S.Text,{className:"description",size:"13",children:n.title}),e.jsxs(S.Text,{className:"price",size:"24",bold:!0,children:[we((g=n.product)==null?void 0:g.gross_price)," zł"]}),e.jsx(F.Button,{loading:s.loading,onClick:()=>l(),children:o("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&e.jsx(M.Col,{lg:6,md:12,sm:12,children:e.jsxs(Se,{className:"product-box",$isMobile:B,children:[e.jsx(Q.Title,{className:"title",level:3,children:t==null?void 0:t.name}),e.jsx("div",{className:"divider"}),e.jsx(S.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),e.jsxs(S.Text,{className:"price",size:"24",bold:!0,children:[o("From")," ",we(t==null?void 0:t.gross_price)," ","zł"]}),e.jsx(F.Button,{onClick:()=>{var v;return i((v=J)==null?void 0:v.subscriptions)},children:o("Subscriptions.IPick")})]})})]})]})},Ne=T($.Button)`
  display: block;
  margin-bottom: 10px;
`,In=({course:n,onRequestAccess:t,setModalVisible:s})=>{var m;const{t:a}=q(),{push:o}=te(),{courseAccess:i,fetchCourseAccess:l}=c.useContext(G.EscolaLMSContext),{attachProduct:p,getActiveSubscription:g}=Fe(),v=c.useMemo(()=>{var b,d;return(d=(b=i.list)==null?void 0:b.data)==null?void 0:d.find(h=>{var y;return((y=h==null?void 0:h.course)==null?void 0:y.id)===n.id})},[(m=i.list)==null?void 0:m.data,n.id]),r=c.useCallback(()=>{s(!0)},[s]),u=c.useCallback(()=>{p(n.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[o(`/course/${n.id}`),l({course_id:Number(n.id),current_page:1,per_page:1})])},[p,n.id,o,l]),x=c.useMemo(()=>e.jsx(e.Fragment,{children:e.jsx(U,{children:e.jsx($.Button,{mode:"secondary",onClick:()=>r(),children:a("Buy Course")})})}),[a,r]);return g!=null&&g.id?e.jsx($.Button,{onClick:()=>u(),mode:"secondary",children:a("Go to the course")}):v?v.status!=="approved"?e.jsxs(e.Fragment,{children:[e.jsx(Ne,{mode:"secondary",disabled:!0,children:a("CourseAccess.Pending")}),x]}):v.status==="approved"?e.jsx($.Button,{onClick:()=>o(`/course/${n.id}`),mode:"secondary",children:a("Go to the course")}):x:e.jsx(e.Fragment,{children:e.jsxs(U,{children:[e.jsx(Ne,{mode:"secondary",onClick:t,children:a("CourseAccess.RequestAccess")}),x]})})},zn=({course:n,userOwnThisCourse:t,onRequestAccess:s})=>{var r,u;const{cart:a,user:o}=c.useContext(G.EscolaLMSContext),{t:i}=q(),{push:l}=te(),[p,g]=c.useState(!1),v=c.useMemo(()=>{var x;return(x=a==null?void 0:a.value)==null?void 0:x.items.some(m=>{var b;return Number(m.product_id)===Number((b=n.product)==null?void 0:b.id)})},[(r=n.product)==null?void 0:r.id,a]);return Ye(Number((u=o.value)==null?void 0:u.id),n)?e.jsx($.Button,{onClick:()=>l(`/course/${n.id}`),mode:"secondary",children:i("Go to the course")}):Pe(new Date(n.active_to||""))?e.jsx(S.Text,{children:i("CoursePage.IsFinished")}):v?e.jsx(e.Fragment,{children:e.jsx(U,{children:e.jsx($.Button,{mode:"secondary",onClick:()=>l(J.cart),children:i("CoursePage.GoToCheckout")})})}):t&&Pe(new Date(n.active_from||""))?e.jsx($.Button,{onClick:()=>l(`/course/${n.id}`),mode:"secondary",children:i("Go to the course")}):t?e.jsx(S.Text,{children:i("CoursePage.NotStarted")}):o.value&&n.product?e.jsxs(e.Fragment,{children:[e.jsx(In,{course:n,onRequestAccess:s,setModalVisible:g}),e.jsx(je.Modal,{onClose:()=>g(!1),visible:p,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:e.jsx(En,{course:n})})]}):n.product?e.jsx(e.Fragment,{children:e.jsx(U,{children:e.jsx($.Button,{onClick:()=>l(`/login?referrer=/courses/${n.id}`),mode:"secondary",children:i("Buy Course")})})}):e.jsx(S.Text,{children:i("CoursePage.UnavailableCourse")})},Dn=T.div`
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
`,Z=T.div`
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
`,Re=({course:n,onRequestAccess:t})=>{var x,m,b,d,h,y,w;const{user:s,courseAccess:a,settings:o}=c.useContext($e.EscolaLMSContext),{t:i}=q(),{id:l}=ye(),{progress:p}=Ln(Number(l)),g=c.useMemo(()=>{var C;return(C=n==null?void 0:n.product)==null?void 0:C.owned},[(x=n==null?void 0:n.product)==null?void 0:x.owned]),v=c.useMemo(()=>{var C,P;return!!((P=(C=a.list)==null?void 0:C.data)!=null&&P.find(f=>{var _;return((_=f==null?void 0:f.course)==null?void 0:_.id)===n.id&&f.status==="approved"}))},[n.id,(m=a.list)==null?void 0:m.data]),r=c.useMemo(()=>p.data||[],[p.data]),u=c.useMemo(()=>s.value&&(g||v)?((r==null?void 0:r.filter(P=>P.status===1))||[]).length:0,[r,s.value,v,g]);return e.jsx(Dn,{children:e.jsxs(vn.PricingCard,{children:[e.jsx(U,{children:e.jsxs("div",{className:"course-sidebar-header",children:[e.jsx(S.Text,{size:"13",children:i("PricePerAccess")}),e.jsx("div",{className:"price-wrapper",children:e.jsx(Ge,{price:(b=n.product)==null?void 0:b.price,taxRate:(d=n.product)==null?void 0:d.tax_rate,oldPrice:(h=n.product)==null?void 0:h.price_old,textSizes:{old:"18",new:"24"}})})]})}),p.loaded?e.jsx(zn,{onRequestAccess:t,course:n,userOwnThisCourse:g}):e.jsx(ve,{}),e.jsx(S.Text,{children:(w=(y=o==null?void 0:o.value)==null?void 0:y.mobile)==null?void 0:w.infotext}),e.jsxs("div",{className:"pricing-card-features",children:[n.duration&&e.jsx(K.IconText,{text:e.jsxs(Z,{children:[e.jsx("span",{children:i("CoursePage.Duration")}),e.jsx("span",{children:n.duration})]})}),n.lessons&&e.jsx(K.IconText,{text:e.jsxs(Z,{children:[e.jsx("span",{children:i("CoursePage.Lessons")}),e.jsx("span",{children:n.lessons.length})]})}),n.language&&e.jsx(K.IconText,{text:e.jsxs(Z,{children:[e.jsx("span",{children:i("CoursePage.Language")}),e.jsx("span",{children:n.language})]})}),n.level&&e.jsx(K.IconText,{text:e.jsxs(Z,{children:[e.jsx("span",{children:i("CoursePage.Level")}),e.jsx("span",{children:n.level})]})}),n.users_count?e.jsx(K.IconText,{text:e.jsxs(Z,{children:[e.jsx("span",{children:i("CoursePage.Students")}),e.jsx("span",{children:n.users_count})]})}):""]}),s.value?e.jsxs(Ke.CourseProgress,{progress:r&&(r==null?void 0:r.length)>0?u/r.length:0,icon:p.loaded?e.jsx(Ze,{}):e.jsx(ve,{width:"22px",height:"22px"}),title:i("CoursePage.MyProgress"),children:[e.jsxs("strong",{style:{fontSize:14},children:[i("CoursePage.Finished")," ",u||0," ",i("CoursePage.Of")," ",r&&(r==null?void 0:r.length)>0?r.length:0," ",i("CoursePage.Lessons")]}),e.jsx("p",{style:{marginTop:9,marginBottom:0},children:i("CoursePage.FinishToGetCertificate")})]}):e.jsx(e.Fragment,{})]})})};var Ve={},We={},ce={},de={},H=j&&j.__assign||function(){return H=Object.assign||function(n){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},H.apply(this,arguments)};Object.defineProperty(de,"__esModule",{value:!0});de.CourseProgramTopic=void 0;var ee=e,Fn=ae,he=Ce(),Gn=function(n){var t=n.index,s=n.topic,a=n.onTopicClick,o=n.mobile,i=(0,Fn.useTranslation)().t;return(0,ee.jsxs)("li",H({className:"lesson__topic"},{children:[(0,ee.jsxs)("div",H({className:"lesson__description"},{children:[(0,ee.jsxs)(he.Text,H({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,ee.jsx)(he.Text,H({size:"14",noMargin:!0},{children:s.title}))]})),s.preview&&(0,ee.jsx)(he.Button,H({mode:"outline",onClick:function(){return a(s)},block:o},{children:i("Course.topicPreview")}))]}))};de.CourseProgramTopic=Gn;var L=j&&j.__assign||function(){return L=Object.assign||function(n){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},L.apply(this,arguments)};Object.defineProperty(ce,"__esModule",{value:!0});ce.CourseProgramLesson=void 0;var k=e,qn=c,Vn=ae,ne=Ce(),Wn=de,Hn=function(n){var t,s,a=n.lesson,o=n.index,i=n.defaultOpen,l=i===void 0?!1:i,p=n.onTopicClick,g=n.mobile,v=n.isSubLesson,r=n.children,u=(0,Vn.useTranslation)().t,x=(0,qn.useState)(l),m=x[0],b=x[1];return(0,k.jsxs)("li",L({className:"lesson__item ".concat(m?"open":"closed"," ").concat(v?"sub-lesson":"")},{children:[(0,k.jsxs)("header",{children:[(0,k.jsxs)("div",L({className:"lesson__details"},{children:[(0,k.jsxs)(ne.Text,L({noMargin:!0,size:"12"},{children:[u(v?"Course.SubLesson":"Course.Lesson")," ",o+1]})),(0,k.jsx)(ne.Text,L({noMargin:!0,size:"12"},{children:a.duration&&a.duration}))]})),(0,k.jsx)("div",{children:(0,k.jsx)(ne.Text,L({size:"14",bold:!0,noMargin:!0},{children:a.title}))}),(0,k.jsx)(ne.Button,L({type:"button",onClick:function(){return b(!m)},mode:"icon","aria-label":u("Actions.Hide")},{children:(0,k.jsx)(ne.Icon,{name:"chevron"})}))]}),!!(!((t=a.lessons)===null||t===void 0)&&t.length)&&(0,k.jsx)("ul",L({className:"lesson__lessons"},{children:r})),(0,k.jsx)("ul",L({className:"lesson__topics"},{children:(s=a.topics)===null||s===void 0?void 0:s.map(function(d,h){return(0,k.jsx)(Wn.CourseProgramTopic,{topic:d,index:h+1,onTopicClick:p,mobile:g},h)})}))]}))};ce.CourseProgramLesson=Hn;(function(n){var t=j&&j.__assign||function(){return t=Object.assign||function(i){for(var l,p=1,g=arguments.length;p<g;p++){l=arguments[p];for(var v in l)Object.prototype.hasOwnProperty.call(l,v)&&(i[v]=l[v])}return i},t.apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.RecursiveLessons=void 0;var s=e,a=ce,o=function(i){var l=i.lessons,p=i.depth,g=p===void 0?0:p,v=i.onTopicClick,r=i.mobile;return(0,s.jsx)(s.Fragment,{children:l.map(function(u,x){var m;return(0,s.jsx)(a.CourseProgramLesson,t({defaultOpen:x===0,index:x,lesson:u,isSubLesson:g>0,onTopicClick:v,mobile:r},{children:(0,s.jsx)(n.RecursiveLessons,{lessons:(m=u.lessons)!==null&&m!==void 0?m:[],depth:g+1,onTopicClick:v,mobile:r})}),u.id)})})};n.RecursiveLessons=o})(We);var ue={},Qn=j&&j.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},He=j&&j.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(ue,"__esModule",{value:!0});ue.StyledSection=void 0;var Un=He(en),Xn=He(le),W=nn;ue.StyledSection=(0,Xn.default)("section")(ke||(ke=Qn([`
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
`])),function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(n){return n.theme.gray1},function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(n){return n.theme.gray2},function(n){return n.$mobile?"column":"row"},function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,(0,Un.default)(t.white).alpha(.2).hex(),t.white)},function(n){return n.$mobile?"0":"auto"},function(n){return n.$mobile?"6px":"0"},function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(n){var t=n.theme;return(0,W.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(n){return n.theme.dm__numerationsColor||n.theme.numerationsColor?1:.5});var ke;(function(n){var t=j&&j.__makeTemplateObject||function(d,h){return Object.defineProperty?Object.defineProperty(d,"raw",{value:h}):d.raw=h,d},s=j&&j.__assign||function(){return s=Object.assign||function(d){for(var h,y=1,w=arguments.length;y<w;y++){h=arguments[y];for(var C in h)Object.prototype.hasOwnProperty.call(h,C)&&(d[C]=h[C])}return d},s.apply(this,arguments)},a=j&&j.__createBinding||(Object.create?function(d,h,y,w){w===void 0&&(w=y);var C=Object.getOwnPropertyDescriptor(h,y);(!C||("get"in C?!h.__esModule:C.writable||C.configurable))&&(C={enumerable:!0,get:function(){return h[y]}}),Object.defineProperty(d,w,C)}:function(d,h,y,w){w===void 0&&(w=y),d[w]=h[y]}),o=j&&j.__setModuleDefault||(Object.create?function(d,h){Object.defineProperty(d,"default",{enumerable:!0,value:h})}:function(d,h){d.default=h}),i=j&&j.__importStar||function(d){if(d&&d.__esModule)return d;var h={};if(d!=null)for(var y in d)y!=="default"&&Object.prototype.hasOwnProperty.call(d,y)&&a(h,d,y);return o(h,d),h};Object.defineProperty(n,"__esModule",{value:!0}),n.CourseProgram=void 0;var l=e,p=ae,g=i(le),v=Ce(),r=We,u=ue,x=function(d){var h=d.lessons,y=d.onTopicClick,w=d.mobile,C=w===void 0?!1:w,P=d.className,f=P===void 0?"":P,_=(0,p.useTranslation)().t;return(0,l.jsxs)(u.StyledSection,s({$mobile:C,className:"wellms-component ".concat(f)},{children:[(0,l.jsx)(v.Text,{children:_("Course.Agenda")}),(0,l.jsx)("ul",s({className:"lessons__list"},{children:(0,l.jsx)(r.RecursiveLessons,{lessons:h,onTopicClick:y,mobile:C})}))]}))};n.CourseProgram=x;var m=(0,g.default)(n.CourseProgram)(b||(b=t([""],[""])));n.default=(0,g.withTheme)(m);var b})(Ve);var Qe={};(function(n){var t=j&&j.__makeTemplateObject||function(u,x){return Object.defineProperty?Object.defineProperty(u,"raw",{value:x}):u.raw=x,u},s=j&&j.__createBinding||(Object.create?function(u,x,m,b){b===void 0&&(b=m);var d=Object.getOwnPropertyDescriptor(x,m);(!d||("get"in d?!x.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return x[m]}}),Object.defineProperty(u,b,d)}:function(u,x,m,b){b===void 0&&(b=m),u[b]=x[m]}),a=j&&j.__setModuleDefault||(Object.create?function(u,x){Object.defineProperty(u,"default",{enumerable:!0,value:x})}:function(u,x){u.default=x}),o=j&&j.__importStar||function(u){if(u&&u.__esModule)return u;var x={};if(u!=null)for(var m in u)m!=="default"&&Object.prototype.hasOwnProperty.call(u,m)&&s(x,u,m);return a(x,u),x};Object.defineProperty(n,"__esModule",{value:!0}),n.MarkdownPlayer=void 0;var i=e,l=o(c),p=tn(),g=o(le),v=function(u){var x=u.onLoad,m=u.children,b=u.mobile,d=b===void 0?!1:b;return l.useEffect(function(){m&&x&&x()},[m,x]),(0,i.jsx)(p.MarkdownRenderer,{children:m,mobile:d})};n.MarkdownPlayer=v,n.default=(0,g.withTheme)((0,g.default)(n.MarkdownPlayer)(r||(r=t([""],[""]))));var r})(Qe);const Jn=({topic:n})=>{const{apiUrl:t}=c.useContext(G.EscolaLMSContext),s=c.useMemo(()=>{var a,o;if(n&&n.topicable_type)switch(n.topicable_type){case z.TopicType.H5P:return e.jsx(Tn.H5Player,{h5pObject:(a=n==null?void 0:n.topicable)==null?void 0:a.content,hideActionButtons:!0});case z.TopicType.OEmbed:return e.jsx(Pn.OEmbedPlayer,{url:(o=n==null?void 0:n.topicable)==null?void 0:o.value});case z.TopicType.RichText:return e.jsx("div",{className:"container-xl",children:e.jsx(Qe.MarkdownPlayer,{children:n.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return e.jsx(wn.AudioVideoPlayer,{url:n.topicable.url});case z.TopicType.Image:return e.jsx(Cn.ImagePlayer,{topic:n,onLoad:()=>console.log("")});case z.TopicType.Pdf:return e.jsx(yn.PdfPlayer,{url:n.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return e.jsx("div",{className:"scorm-wrapper",children:e.jsx("iframe",{title:n.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${n.topicable.uuid}`})});case _n.TopicType.GiftQuiz:return e.jsx(bn,{topic:n});default:return e.jsx("pre",{children:n.topicable_type})}return e.jsx(sn.Fragment,{})},[n,t]);return e.jsx("div",{className:"topic-preview-modal",children:e.jsx("div",{className:"topic-preview-modal-content",children:s})})};var Ue={};(function(n){var t=j&&j.__makeTemplateObject||function(f,_){return Object.defineProperty?Object.defineProperty(f,"raw",{value:_}):f.raw=_,f},s=j&&j.__assign||function(){return s=Object.assign||function(f){for(var _,O=1,N=arguments.length;O<N;O++){_=arguments[O];for(var R in _)Object.prototype.hasOwnProperty.call(_,R)&&(f[R]=_[R])}return f},s.apply(this,arguments)},a=j&&j.__createBinding||(Object.create?function(f,_,O,N){N===void 0&&(N=O);var R=Object.getOwnPropertyDescriptor(_,O);(!R||("get"in R?!_.__esModule:R.writable||R.configurable))&&(R={enumerable:!0,get:function(){return _[O]}}),Object.defineProperty(f,N,R)}:function(f,_,O,N){N===void 0&&(N=O),f[N]=_[O]}),o=j&&j.__setModuleDefault||(Object.create?function(f,_){Object.defineProperty(f,"default",{enumerable:!0,value:_})}:function(f,_){f.default=_}),i=j&&j.__importStar||function(f){if(f&&f.__esModule)return f;var _={};if(f!=null)for(var O in f)O!=="default"&&Object.prototype.hasOwnProperty.call(f,O)&&a(_,f,O);return o(_,f),_};Object.defineProperty(n,"__esModule",{value:!0}),n.ModalCourseAccess=void 0;var l=e,p=c,g=ae,v=rn,r=i(le),u=G,x=$,m=on,b=an,d=Q,h=S,y=r.default.aside(C||(C=t([`
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
`])),function(f){var _=f.theme;return _.errorColor}),w=function(f){var _=f.course,O=f.className,N=f.initialValues,R=N===void 0?{phone_number:"",contact_details:""}:N,Xe=f.onCancel,pe=f.onSuccess,me=f.onError,Y=(0,g.useTranslation)().t,Je=(0,p.useContext)(u.EscolaLMSContext).addCourseAccess;return(0,l.jsxs)(y,s({className:"wellms-component ".concat(O),"data-testid":"modal-course-access"},{children:[(0,l.jsxs)("header",{children:[(0,l.jsx)(d.Title,s({level:1},{children:_.title})),(0,l.jsx)(h.Text,s({size:"14",bold:!0},{children:Y("ModalCourseAccess.Title")}))]}),(0,l.jsx)(v.Formik,s({initialValues:R,onSubmit:function(E,X){var se=X.setErrors,V=X.setSubmitting,re=X.resetForm,oe={course_id:_.id,data:E};Je(oe).then(function(){re(),pe==null||pe()}).catch(function(I){var xe,ge;se(s({error:(xe=I==null?void 0:I.data)===null||xe===void 0?void 0:xe.message},(ge=I==null?void 0:I.data)===null||ge===void 0?void 0:ge.errors)),me==null||me()}).finally(function(){V(!1)})}},{children:function(E){var X=E.values,se=E.touched,V=E.errors,re=E.handleChange,oe=E.handleBlur,I=E.handleSubmit;return(0,l.jsxs)("form",s({onSubmit:I},{children:[(0,l.jsxs)("div",s({className:"form-content"},{children:[V&&V.error&&(0,l.jsx)(h.Text,s({className:"error-msg",size:"12",bold:!0},{children:V.error})),(0,l.jsxs)("div",s({className:"input-group"},{children:[(0,l.jsx)(m.Input,{type:"text",label:Y("ModalCourseAccess.PhoneNumber"),error:se.phone_number&&V.phone_number,id:"phone_number",name:"phone_number",onChange:re,onBlur:oe,value:X.phone_number}),(0,l.jsx)(b.TextArea,{label:Y("ModalCourseAccess.ContactDetails"),error:se.contact_details&&V.contact_details,id:"contact_details",name:"contact_details",onChange:re,onBlur:oe,value:X.contact_details})]}))]})),(0,l.jsxs)("div",s({className:"button-group"},{children:[(0,l.jsx)(x.Button,s({type:"button",mode:"secondary",onClick:Xe},{children:Y("ModalCourseAccess.Cancel")})),(0,l.jsx)(x.Button,s({type:"submit",mode:"secondary"},{children:Y("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};n.ModalCourseAccess=w,n.default=(0,r.withTheme)((0,r.default)(n.ModalCourseAccess)(P||(P=t([""],[""]))));var C,P})(Ue);const Ae=T.div`
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
`,Yn=({author:n})=>e.jsx(M.Col,{lg:6,children:e.jsx(cn,{mobile:B,avatar:{alt:`${n.first_name} ${n.last_name}`,src:n.path_avatar?`${dn}/api/images/img?path=${n.path_avatar}`:Ee.tutorPlaceholderPath},fullName:`${n.first_name} ${n.last_name}`,description:n.bio})});var D=(n=>(n.INIT="INIT",n.LOADED="LOADED",n.LOADING="LOADING",n.ERROR="ERROR",n))(D||{});const Kn=T.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,Zn=({courseData:n})=>{const{fetchQuestionnaireStarsByModel:t}=c.useContext(G.EscolaLMSContext),[s,a]=c.useState({type:D.INIT}),o=te(),i=c.useCallback(async()=>{if(n.id)try{a({type:D.LOADING});const l=await t("course",Number(n.id));l.success&&a({type:D.LOADED,rating:l.data})}catch(l){a({type:D.ERROR,error:l instanceof Error?l.message:"Unknown error"})}},[n.id,t]);return c.useEffect(()=>{i()},[n.id,i]),e.jsx("section",{className:"course-main-info",children:e.jsxs(M.Row,{children:[e.jsxs(M.Col,{lg:12,children:[e.jsx(Sn,{categories:n.categories,onCategoryClick:l=>{o.push(`/courses/?categories[]=${l}`)}}),e.jsx(Q.Title,{mobile:B,level:1,children:n.title}),s.type===D.LOADED?e.jsxs(Kn,{children:[e.jsx(F.Rating,{ratingValue:s.rating.avg_rate,label:`${s.rating.avg_rate}`}),e.jsx(F.Text,{size:"13",children:"Śr. ocena kursu"}),"・",e.jsx("div",{children:e.jsxs(F.Text,{size:"13",children:["Dodane opinie ",e.jsx("strong",{children:s.rating.count_answers})]})})]}):s.type===D.LOADING?e.jsx(ve,{width:"20px",height:"20px"}):s.type===D.ERROR?s.error:null]}),e.jsx(M.Col,{lg:12,children:n.image_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(un.ResponsiveImage,{path:n.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},fe={total:0,per_page:3,page:1,current_page:1},et=({questionId:n,courseId:t})=>{const[s,a]=c.useState(void 0),[o,i]=c.useState(fe),[l,p]=c.useState(!0),{fetchQuestionnairesAnswers:g}=c.useContext(G.EscolaLMSContext),{t:v}=q(),r=c.useCallback(x=>{n&&t&&(p(!0),g(qe.COURSE,Number(t),n,{per_page:o.per_page,page:x,order_by:"updated_at",order:"DESC"}).then(m=>{m.success&&(a(m.data),i(b=>({...b,total:m.meta.total,current_page:m.meta.current_page,page:m.meta.current_page})))}).catch(m=>{pn(v("UnexpectedError"),m),console.log(m)}).finally(()=>p(!1)))},[o,g,t,n,v]),u=c.useCallback(x=>{i(m=>({...m,current_page:x}))},[]);return c.useEffect(()=>{o.page!==o.current_page&&r(o.current_page)},[o.current_page,o.page,r]),c.useEffect(()=>{i(fe),r(fe.page)},[n]),{answersMeta:o,questionnaireAnswers:s,loading:l,onPageChange:u}},nt=T(Ie)`
  justify-content: space-between;

  background: ${({theme:n})=>n.white};
`,tt=T.div`
  .date {
    color: ${({theme:n})=>n.gray2};
    margin-bottom: 5px;
  }
`,st=T.div`
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
`,rt=({name:n})=>{const t=()=>"#"+Math.floor(Math.random()*16777215).toString(16),s=n.charAt(0).toUpperCase();return e.jsx(st,{style:{backgroundColor:t()},children:e.jsx(S.Text,{size:"18",children:s})})},ot=({question:n})=>{const{user:t,note:s,updated_at:a}=n,o=ze();return s?e.jsx(tt,{children:e.jsx(nt,{children:e.jsxs(Ie,{$gap:19,children:[t.avatar?e.jsx(mn.Avatar,{src:t.avatar,alt:`user-avatar-${t.name}`}):e.jsx(rt,{name:t.name}),e.jsxs(De,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[e.jsx(S.Text,{noMargin:!0,color:o.gray2,className:"date",size:"13",children:xn(a,Ee.defaultDateFormat)}),e.jsx(S.Text,{className:"note",size:"13",children:s})]})]})})}):null},it=T(De)`
  gap: 22px;
  margin: 16px auto;
`,at=T(Q.Title)`
  margin-bottom: 16px;
`,lt=T.div`
  margin: 0 auto;
`,ct=({courseId:n,questionId:t})=>{var p;const{answersMeta:s,loading:a,onPageChange:o,questionnaireAnswers:i}=et({questionId:t,courseId:n}),{t:l}=q();return e.jsx(it,{children:a?e.jsx(gn.Spin,{}):((p=i||[])==null?void 0:p.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(at,{level:4,children:l("CoursePage.CourseRatingsTitle")}),(i||[]).map(g=>e.jsx(ot,{question:g})),s.total>s.per_page&&e.jsx(lt,{children:e.jsx(Rn,{total:s.total,perPage:s.per_page,currentPage:s.current_page,onPage:o})})]}):null})},Le=()=>console.warn("INITIAL STATE"),be=c.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:Le,questionId:null,setQuestionId:Le,reviewId:void 0,courseId:void 0}),dt=({children:n,questionnaires:t})=>{var r;const[s,a]=c.useState(null),[o,i]=c.useState(null),{id:l}=ye(),p=t==null?void 0:t.at(0),g=(r=p==null?void 0:p.questions)==null?void 0:r.find(({type:u})=>u===Me.RATE),v=Mn({questionnaires:t,questionnaireId:s,questionType:Me.REVIEW});return c.useEffect(()=>{p!=null&&p.id&&!s&&a(p.id)},[p==null?void 0:p.id,s]),c.useEffect(()=>{g!=null&&g.id&&!o&&i(g.id)},[g==null?void 0:g.id,o]),e.jsx(be.Provider,{value:{questionnaires:t,questionnaireId:s,setQuestionnaireId:a,questionId:o,setQuestionId:i,reviewId:v,courseId:Number(l)},children:n})},ut=()=>{const n=c.useContext(be);if(!be)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return n},pt=c.memo(()=>{const{courseId:n,reviewId:t}=ut();return e.jsx(e.Fragment,{children:n&&t&&e.jsx(ct,{courseId:n,questionId:t})})}),mt=c.memo(({questionnaires:n})=>e.jsx(dt,{questionnaires:n,children:e.jsx("section",{className:"course-ratings",children:e.jsx(pt,{})})})),xt=T.section`
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
`,gt=({relatedProducts:n})=>{const{t}=q();return e.jsx(xt,{className:"course-related-courses",children:e.jsx(_e,{children:e.jsx(M.Row,{children:e.jsxs(M.Col,{lg:12,children:[n&&(n==null?void 0:n.length)>0&&e.jsxs("div",{className:"content-container",children:[e.jsx(F.Title,{level:1,as:"h2",children:t("CoursePage.RelatedCoursesTitle")}),e.jsx(An,{slidesPerView:4,children:n==null?void 0:n.map(s=>{var a;return e.jsx(Bn,{children:e.jsx(F.NewCourseCard,{mobile:B,id:s.id,image:e.jsx(ie,{to:`/courses/${(a=s==null?void 0:s.productables[0])==null?void 0:a.id}`,children:s.poster_path?e.jsx(hn,{path:s.poster_path,alt:s.name,srcSizes:[300,600,900]}):e.jsx(Nn,{})}),price:item.public?e.jsx(U,{children:e.jsx("div",{className:"course-price",children:t("FREE")})}):e.jsx(U,{children:e.jsx(Ge,{price:s==null?void 0:s.price,oldPrice:s==null?void 0:s.price_old,taxRate:s==null?void 0:s.tax_rate})}),title:e.jsx(ie,{to:`/courses/${s.id}`,children:e.jsx(F.Title,{level:3,as:"h3",className:"title",children:s.name})})})},s.id)})})]}),e.jsx("div",{className:"content-container",children:e.jsx(kn,{titleText:t("CoursePage.InterestTitle"),params:{per_page:8,order_by:"created_at",order:"ASC"},slidesPerView:4})})]})})})})},ht=T.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`,ft=()=>e.jsx(ht,{children:e.jsx(A,{width:"100%",height:350})}),jt=T.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,vt=()=>e.jsxs(jt,{children:[e.jsx(A,{width:"20px",style:{marginBottom:"5px"}}),e.jsx(A,{width:"40%",height:37,style:{marginBottom:"10px"}}),e.jsx(A,{width:"40%",style:{marginBottom:"10px"}})," ",e.jsx(A,{width:"100%",height:490,style:{marginBottom:"40px"}}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(A,{width:"100%",count:4,style:{marginBottom:"5px"}})}),e.jsx("div",{style:{marginBottom:"40px"},children:e.jsx(A,{width:"100%",count:5,style:{marginBottom:"5px"}})}),e.jsx(A,{width:"80px",style:{marginBottom:"20px"}}),e.jsxs("div",{className:"tutors",children:[e.jsx(A,{circle:!0,width:"112px",height:"112px"}),e.jsxs("div",{children:[e.jsx(A,{width:"140px",style:{marginBottom:"20px"}}),e.jsx(A,{width:"140px",count:2})]})]}),e.jsx("div",{style:{marginTop:"40px"},children:e.jsx(A,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),_t=T.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,Lt=()=>{var w,C;const[n,t]=c.useState([]),[s,a]=c.useState(!1),[o,i]=c.useState(),{id:l}=ye(),{t:p}=q(),g=te(),v=ze(),{course:r,fetchCourse:u,fetchCourses:x,fetchCourseAccess:m,fetchQuestionnaires:b}=c.useContext($e.EscolaLMSContext),d=c.useCallback(()=>a(!1),[]),h=c.useCallback(()=>a(!0),[]),y=c.useCallback(()=>m({course_id:Number(l),current_page:1,per_page:1}),[l,m]);return c.useEffect(()=>{x({per_page:6}),l&&(u(Number(l)),y(),b(qe.COURSE,Number(l)).then(P=>P.success&&t(P.data)))},[l]),r.error?e.jsx("pre",{children:r.error.message}):e.jsxs(fn,{metaTitle:((w=r==null?void 0:r.value)==null?void 0:w.title)||"Loading",children:[r.loading&&e.jsx(e.Fragment,{children:e.jsx(Ae,{children:e.jsx(_e,{children:e.jsxs(M.Row,{children:[e.jsx(M.Col,{md:12,lg:8,children:e.jsx(vt,{})}),e.jsx(M.Col,{md:12,lg:3,offset:{lg:1},children:e.jsx(ft,{})})]})})})}),!r.loading&&r.value&&e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsxs(_e,{children:[!B&&e.jsx(On,{items:[e.jsx(ie,{to:J.home,children:p("Home")}),e.jsx(ie,{to:J.courses,children:p("Courses")}),e.jsx(S.Text,{size:"13",children:r.value.title})]}),e.jsxs(M.Row,{children:[e.jsxs(M.Col,{md:12,lg:8,children:[B&&e.jsx(_t,{onClick:()=>g.push(J.courses),children:e.jsx(jn,{color:v.black})}),e.jsx(Zn,{courseData:r.value}),B&&r.value&&e.jsx(Re,{course:r.value,onRequestAccess:h}),r.value.description&&Te(r.value.description)!==""&&e.jsx("section",{className:"course-description-short",children:e.jsx(Oe.MarkdownRenderer,{children:r.value.description})}),r.value.summary&&Te(r.value.summary)!==""&&e.jsx("section",{className:"course-description",children:e.jsx(Oe.MarkdownRenderer,{children:r.value.summary})}),e.jsxs("section",{className:"",children:[e.jsx(Q.Title,{as:"h3",level:4,className:"title",children:p("CoursePage.Teacher")}),e.jsx(M.Row,{children:r.value&&r.value.authors.map(P=>e.jsx(Yn,{author:P}))})]}),r.value.lessons&&r.value.lessons.length>0&&e.jsx(Ve.CourseProgram,{lessons:r.value.lessons,onTopicClick:P=>i(P)}),e.jsx(mt,{questionnaires:n})]}),!B&&e.jsx(M.Col,{md:12,lg:3,offset:{lg:1},children:r.value&&e.jsx(Re,{course:r.value,onRequestAccess:h})})]})]}),e.jsx(gt,{relatedProducts:(C=r.value.product)==null?void 0:C.related_products})]}),e.jsxs(je.Modal,{onClose:()=>i(void 0),visible:!!o,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[e.jsx(Be,{}),o&&e.jsx(Jn,{topic:o})]}),e.jsxs(je.Modal,{onClose:d,visible:s,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[e.jsx(Be,{}),e.jsx(Ue.ModalCourseAccess,{course:r.value,onCancel:d,onSuccess:()=>{y(),d()}})]})]})]})};export{Lt as default};

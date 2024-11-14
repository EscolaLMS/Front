import{r as c,K as W,q as M,h as V,k as J,m as K,j as n,T as U,x as S,U as O,o as k,V as we,n as F,y as L,W as Je,p as Pe,E as _e,D as Te,Y as Oe,Z as en,_ as nn,i as $e,O as ye,$ as ve,a0 as se,a1 as tn,a2 as sn,e as v,a3 as Ce,a4 as ie,a5 as rn,a6 as le,a7 as on,a8 as an,a9 as z,b as ln,aa as cn,ab as dn,ac as un,ad as pn,ae as mn,af as xn,ag as ze,s as gn,I as hn,ah as De,X as Fe,ai as fn,aj as Ve,ak as _n,S as vn,C as je,L as ae,al as jn,v as bn,am as yn,an as Me,M as Se}from"./index-fLzfRICx.js";import{P as Cn}from"./PricingCard-v5KbwKCx.js";import{u as Ge,P as re,g as wn,f as Pn,r as Tn}from"./payment-BDfs1aEm.js";import{P as qe}from"./index-B5qUhDbL.js";import{A as On,_ as Mn,P as Sn,I as Nn,a as An,O as Rn,H as kn}from"./index-Ct1y9_1y.js";import{B as Bn}from"./index-BHf87JtN.js";import{Q as He,a as Ne}from"./questionnaire-CXWDgbJ4.js";import{S as Ae,a as En,M as Re}from"./sidebar-DJSV6G2T.js";import{a as Ln,C as In}from"./index-_-oHElzk.js";import{P as $n}from"./index-1o8A6gAP.js";import{g as zn}from"./questionnaires-D6GUbSAI.js";import{D as Dn}from"./index-Djh-iGCA.js";import{S as Fn}from"./swiper-Y1OIlzVo.js";import{S as Vn}from"./swiper-react-Il8edV5V.js";import{S as B}from"./index-vHS9T1Bq.js";import"./warning-4RavIMUc.js";import"./useFetchCourses-DExrnADk.js";import"./CourseCard-CnKy93dI.js";import"./a11y-DzCD3up1.js";const Gn=e=>{const[t,s]=c.useState({data:void 0,loaded:!1,loading:!1}),{user:a,fetchCourseProgress:r,courseProgressDetails:u}=c.useContext(W.EscolaLMSContext);return c.useEffect(()=>{u.byId&&u.byId[Number(e)]&&u.byId[Number(e)].value&&s({...t,data:u.byId[Number(e)].value,loaded:!0,loading:!1})},[e,u]),c.useEffect(()=>{a!=null&&a.value&&!a.loading&&!t.loading&&!t.loaded?(s({...t,loading:!0}),r(e).catch(()=>s({...t,loaded:!0,loading:!1}))):t.loaded||s({...t,loaded:!0})},[a,t,r,e]),{progress:t}},qn=M.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,ke=M.div`
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
`,Hn=({course:e})=>{var d,f;const{getCheapestSubscription:t}=Ge(),{cart:s,addToCart:a}=c.useContext(W.EscolaLMSContext),{t:r}=V(),{push:u}=J(),o=c.useCallback(()=>{var m;a(Number((m=e.product)==null?void 0:m.id)).then(()=>u(K.cart))},[(d=e.product)==null?void 0:d.id,a,u]);return n.jsxs(qn,{children:[n.jsx(U.Title,{className:"modal-header",level:2,children:r("Subscriptions.GetAccess")}),n.jsx(S.Text,{children:r("Subscriptions.YouHaveTwoOptions")}),n.jsxs(O.Row,{children:[n.jsx(O.Col,{lg:6,md:12,sm:12,children:n.jsxs(ke,{className:"product-box",$isMobile:k,children:[n.jsx(U.Title,{className:"title",level:3,children:r("Buy Course")}),n.jsx("div",{className:"divider"}),n.jsx(S.Text,{className:"description",size:"13",children:e.title}),n.jsxs(S.Text,{className:"price",size:"24",bold:!0,children:[we((f=e.product)==null?void 0:f.gross_price)," zł"]}),n.jsx(F.Button,{loading:s.loading,onClick:()=>o(),children:r("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&n.jsx(O.Col,{lg:6,md:12,sm:12,children:n.jsxs(ke,{className:"product-box",$isMobile:k,children:[n.jsx(U.Title,{className:"title",level:3,children:t==null?void 0:t.name}),n.jsx("div",{className:"divider"}),n.jsx(S.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),n.jsxs(S.Text,{className:"price",size:"24",bold:!0,children:[r("From")," ",we(t==null?void 0:t.gross_price)," ","zł"]}),n.jsx(F.Button,{onClick:()=>{var m;return u((m=K)==null?void 0:m.subscriptions)},children:r("Subscriptions.IPick")})]})})]})]})},Be=M(L.Button)`
  display: block;
  margin-bottom: 10px;
`,Un=({course:e,onRequestAccess:t,setModalVisible:s})=>{var h,C;const{t:a}=V(),{push:r}=J(),{courseAccess:u,fetchCourseAccess:o,user:d,fetchCourse:f}=c.useContext(W.EscolaLMSContext),{attachProduct:m,getActiveSubscription:i}=Ge();c.useEffect(()=>{(async function(){var j;const b=(j=d==null?void 0:d.value)==null?void 0:j.id;b&&Te&&(Oe.getPlatform()==="ios"?await re.configure({apiKey:en,appUserID:`${b}`}):Oe.getPlatform()==="android"&&await re.configure({apiKey:nn,appUserID:`${b}`}))})()},[(h=d==null?void 0:d.value)==null?void 0:h.id]);const p=c.useCallback(async()=>{var y;const b=wn(e),j=await re.getOfferings(),P=((y=j==null?void 0:j.current)==null?void 0:y.availablePackages)||[],_=Pn(P,b);if(_)try{await re.purchaseStoreProduct({product:_}),setTimeout(()=>{f(Number(e.id)),o({course_id:Number(e.id),current_page:1,per_page:1})},3e3)}catch(T){Tn(T)}},[e,f,o]),g=c.useMemo(()=>{var b,j;return(j=(b=u.list)==null?void 0:b.data)==null?void 0:j.find(P=>{var _;return((_=P==null?void 0:P.course)==null?void 0:_.id)===e.id})},[(C=u.list)==null?void 0:C.data,e.id]),x=c.useCallback(()=>{s(!0)},[s]),w=c.useCallback(()=>{m(e.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[r(`/course/${e.id}`),o({course_id:Number(e.id),current_page:1,per_page:1})])},[m,e.id,r,o]),l=c.useMemo(()=>n.jsx(L.Button,{mode:"secondary",onClick:()=>{if(Te){p();return}x()},children:a("Buy Course")}),[a,x,p]);return i!=null&&i.id?n.jsx(L.Button,{onClick:()=>w(),mode:"secondary",children:a("Go to the course")}):g?g.status!=="approved"?n.jsxs(n.Fragment,{children:[n.jsx(Be,{mode:"secondary",disabled:!0,children:a("CourseAccess.Pending")}),l]}):g.status==="approved"?n.jsx(L.Button,{onClick:()=>r(`/course/${e.id}`),mode:"secondary",children:a("Go to the course")}):l:n.jsxs(n.Fragment,{children:[n.jsx(Be,{mode:"secondary",onClick:t,children:a("CourseAccess.RequestAccess")}),l]})},Wn=({course:e,userOwnThisCourse:t,onRequestAccess:s})=>{var p,g;const{cart:a,user:r,fetchCourseAccess:u}=c.useContext(W.EscolaLMSContext),{t:o}=V(),{push:d}=J(),[f,m]=c.useState(!1),i=c.useMemo(()=>{var x;return(x=a==null?void 0:a.value)==null?void 0:x.items.some(w=>{var l;return Number(w.product_id)===Number((l=e.product)==null?void 0:l.id)})},[(p=e.product)==null?void 0:p.id,a]);return c.useEffect(()=>{u({course_id:Number(e.id),current_page:1,per_page:1})},[e.id,u]),Je(Number((g=r.value)==null?void 0:g.id),e)?n.jsx(L.Button,{onClick:()=>d(`/course/${e.id}`),mode:"secondary",children:o("Go to the course")}):Pe(new Date(e.active_to||""))?n.jsx(S.Text,{children:o("CoursePage.IsFinished")}):i?n.jsx(n.Fragment,{children:n.jsx(L.Button,{mode:"secondary",onClick:()=>d(K.cart),children:o("CoursePage.GoToCheckout")})}):t&&Pe(new Date(e.active_from||""))?n.jsx(L.Button,{onClick:()=>d(`/course/${e.id}`),mode:"secondary",children:o("Go to the course")}):t?n.jsx(S.Text,{children:o("CoursePage.NotStarted")}):r.value&&e.product?n.jsxs(n.Fragment,{children:[n.jsx(Un,{course:e,onRequestAccess:s,setModalVisible:m}),n.jsx(_e.Modal,{onClose:()=>m(!1),visible:f,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:n.jsx(Hn,{course:e})})]}):e.product?n.jsx(L.Button,{onClick:()=>d(`/login?referrer=/courses/${e.id}`),mode:"secondary",children:o("Buy Course")}):n.jsx(S.Text,{children:o("CoursePage.UnavailableCourse")})},Qn=M.div`
  width: 100%;
  left: 0;
  position: ${k?"static":"sticky"};
  top: ${k?"unset":"130px"};
  bottom: ${k?"0":"unset"};
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
`,oe=M.div`
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
`,Ee=({course:e,onRequestAccess:t})=>{var p,g,x,w,l;const{user:s,courseAccess:a}=c.useContext($e.EscolaLMSContext),{t:r}=V(),{id:u}=ye(),{progress:o}=Gn(Number(u)),d=c.useMemo(()=>{var h;return(h=e==null?void 0:e.product)==null?void 0:h.owned},[(p=e==null?void 0:e.product)==null?void 0:p.owned]),f=c.useMemo(()=>{var h,C;return!!((C=(h=a.list)==null?void 0:h.data)!=null&&C.find(b=>{var j;return((j=b==null?void 0:b.course)==null?void 0:j.id)===e.id&&b.status==="approved"}))},[e.id,(g=a.list)==null?void 0:g.data]),m=c.useMemo(()=>o.data||[],[o.data]),i=c.useMemo(()=>s.value&&(d||f)?((m==null?void 0:m.filter(C=>C.status===1))||[]).length:0,[m,s.value,f,d]);return n.jsx(Qn,{children:n.jsxs(Cn.PricingCard,{children:[n.jsxs("div",{className:"course-sidebar-header",children:[n.jsx(S.Text,{size:"13",children:r("PricePerAccess")}),n.jsx("div",{className:"price-wrapper",children:n.jsx(qe,{price:(x=e.product)==null?void 0:x.price,taxRate:(w=e.product)==null?void 0:w.tax_rate,oldPrice:(l=e.product)==null?void 0:l.price_old,textSizes:{old:"18",new:"24"}})})]}),o.loaded?n.jsx(Wn,{onRequestAccess:t,course:e,userOwnThisCourse:d}):n.jsx(ve,{}),n.jsxs("div",{className:"pricing-card-features",children:[e.duration&&n.jsx(se.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:r("CoursePage.Duration")}),n.jsx("span",{children:e.duration})]})}),e.lessons&&n.jsx(se.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:r("CoursePage.Lessons")}),n.jsx("span",{children:e.lessons.length})]})}),e.language&&n.jsx(se.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:r("CoursePage.Language")}),n.jsx("span",{children:e.language})]})}),e.level&&n.jsx(se.IconText,{text:n.jsxs(oe,{children:[n.jsx("span",{children:r("CoursePage.Level")}),n.jsx("span",{children:e.level})]})})]}),s.value?n.jsxs(tn.CourseProgress,{progress:m&&(m==null?void 0:m.length)>0?i/m.length:0,icon:o.loaded?n.jsx(sn,{}):n.jsx(ve,{width:"22px",height:"22px"}),title:r("CoursePage.MyProgress"),children:[n.jsxs("strong",{style:{fontSize:14},children:[r("CoursePage.Finished")," ",i||0," ",r("CoursePage.Of")," ",m&&(m==null?void 0:m.length)>0?m.length:0," ",r("CoursePage.Lessons")]}),n.jsx("p",{style:{marginTop:9,marginBottom:0},children:r("CoursePage.FinishToGetCertificate")})]}):n.jsx(n.Fragment,{})]})})};var Ue={},We={},ce={},de={},H=v&&v.__assign||function(){return H=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H.apply(this,arguments)};Object.defineProperty(de,"__esModule",{value:!0});de.CourseProgramTopic=void 0;var X=n,Kn=ie,he=Ce(),Yn=function(e){var t=e.index,s=e.topic,a=e.onTopicClick,r=e.mobile,u=(0,Kn.useTranslation)().t;return(0,X.jsxs)("li",H({className:"lesson__topic"},{children:[(0,X.jsxs)("div",H({className:"lesson__description"},{children:[(0,X.jsxs)(he.Text,H({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,X.jsx)(he.Text,H({size:"14",noMargin:!0},{children:s.title}))]})),s.preview&&(0,X.jsx)(he.Button,H({mode:"outline",onClick:function(){return a(s)},block:r},{children:u("Course.topicPreview")}))]}))};de.CourseProgramTopic=Yn;var E=v&&v.__assign||function(){return E=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},E.apply(this,arguments)};Object.defineProperty(ce,"__esModule",{value:!0});ce.CourseProgramLesson=void 0;var R=n,Xn=c,Zn=ie,Z=Ce(),Jn=de,et=function(e){var t,s,a=e.lesson,r=e.index,u=e.defaultOpen,o=u===void 0?!1:u,d=e.onTopicClick,f=e.mobile,m=e.isSubLesson,i=e.children,p=(0,Zn.useTranslation)().t,g=(0,Xn.useState)(o),x=g[0],w=g[1];return(0,R.jsxs)("li",E({className:"lesson__item ".concat(x?"open":"closed"," ").concat(m?"sub-lesson":"")},{children:[(0,R.jsxs)("header",{children:[(0,R.jsxs)("div",E({className:"lesson__details"},{children:[(0,R.jsxs)(Z.Text,E({noMargin:!0,size:"12"},{children:[p(m?"Course.SubLesson":"Course.Lesson")," ",r+1]})),(0,R.jsx)(Z.Text,E({noMargin:!0,size:"12"},{children:a.duration&&a.duration}))]})),(0,R.jsx)("div",{children:(0,R.jsx)(Z.Text,E({size:"14",bold:!0,noMargin:!0},{children:a.title}))}),(0,R.jsx)(Z.Button,E({type:"button",onClick:function(){return w(!x)},mode:"icon","aria-label":p("Actions.Hide")},{children:(0,R.jsx)(Z.Icon,{name:"chevron"})}))]}),!!(!((t=a.lessons)===null||t===void 0)&&t.length)&&(0,R.jsx)("ul",E({className:"lesson__lessons"},{children:i})),(0,R.jsx)("ul",E({className:"lesson__topics"},{children:(s=a.topics)===null||s===void 0?void 0:s.map(function(l,h){return(0,R.jsx)(Jn.CourseProgramTopic,{topic:l,index:h+1,onTopicClick:d,mobile:f},h)})}))]}))};ce.CourseProgramLesson=et;(function(e){var t=v&&v.__assign||function(){return t=Object.assign||function(u){for(var o,d=1,f=arguments.length;d<f;d++){o=arguments[d];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(u[m]=o[m])}return u},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RecursiveLessons=void 0;var s=n,a=ce,r=function(u){var o=u.lessons,d=u.depth,f=d===void 0?0:d,m=u.onTopicClick,i=u.mobile;return(0,s.jsx)(s.Fragment,{children:o.map(function(p,g){var x;return(0,s.jsx)(a.CourseProgramLesson,t({defaultOpen:g===0,index:g,lesson:p,isSubLesson:f>0,onTopicClick:m,mobile:i},{children:(0,s.jsx)(e.RecursiveLessons,{lessons:(x=p.lessons)!==null&&x!==void 0?x:[],depth:f+1,onTopicClick:m,mobile:i})}),p.id)})})};e.RecursiveLessons=r})(We);var ue={},nt=v&&v.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Qe=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ue,"__esModule",{value:!0});ue.StyledSection=void 0;var tt=Qe(rn),st=Qe(le),q=on;ue.StyledSection=(0,st.default)("section")(Le||(Le=nt([`
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
`])),function(e){var t=e.theme;return(0,q.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.theme;return(0,q.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){var t=e.theme;return(0,q.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray1},function(e){var t=e.theme;return(0,q.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray2},function(e){return e.$mobile?"column":"row"},function(e){var t=e.theme;return(0,q.getStylesBasedOnTheme)(t.mode,(0,tt.default)(t.white).alpha(.2).hex(),t.white)},function(e){return e.$mobile?"0":"auto"},function(e){return e.$mobile?"6px":"0"},function(e){var t=e.theme;return(0,q.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){var t=e.theme;return(0,q.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){return e.theme.dm__numerationsColor||e.theme.numerationsColor?1:.5});var Le;(function(e){var t=v&&v.__makeTemplateObject||function(l,h){return Object.defineProperty?Object.defineProperty(l,"raw",{value:h}):l.raw=h,l},s=v&&v.__assign||function(){return s=Object.assign||function(l){for(var h,C=1,b=arguments.length;C<b;C++){h=arguments[C];for(var j in h)Object.prototype.hasOwnProperty.call(h,j)&&(l[j]=h[j])}return l},s.apply(this,arguments)},a=v&&v.__createBinding||(Object.create?function(l,h,C,b){b===void 0&&(b=C);var j=Object.getOwnPropertyDescriptor(h,C);(!j||("get"in j?!h.__esModule:j.writable||j.configurable))&&(j={enumerable:!0,get:function(){return h[C]}}),Object.defineProperty(l,b,j)}:function(l,h,C,b){b===void 0&&(b=C),l[b]=h[C]}),r=v&&v.__setModuleDefault||(Object.create?function(l,h){Object.defineProperty(l,"default",{enumerable:!0,value:h})}:function(l,h){l.default=h}),u=v&&v.__importStar||function(l){if(l&&l.__esModule)return l;var h={};if(l!=null)for(var C in l)C!=="default"&&Object.prototype.hasOwnProperty.call(l,C)&&a(h,l,C);return r(h,l),h};Object.defineProperty(e,"__esModule",{value:!0}),e.CourseProgram=void 0;var o=n,d=ie,f=u(le),m=Ce(),i=We,p=ue,g=function(l){var h=l.lessons,C=l.onTopicClick,b=l.mobile,j=b===void 0?!1:b,P=l.className,_=P===void 0?"":P,y=(0,d.useTranslation)().t;return(0,o.jsxs)(p.StyledSection,s({$mobile:j,className:"wellms-component ".concat(_)},{children:[(0,o.jsx)(m.Text,{children:y("Course.Agenda")}),(0,o.jsx)("ul",s({className:"lessons__list"},{children:(0,o.jsx)(i.RecursiveLessons,{lessons:h,onTopicClick:C,mobile:j})}))]}))};e.CourseProgram=g;var x=(0,f.default)(e.CourseProgram)(w||(w=t([""],[""])));e.default=(0,f.withTheme)(x);var w})(Ue);var Ke={};(function(e){var t=v&&v.__makeTemplateObject||function(p,g){return Object.defineProperty?Object.defineProperty(p,"raw",{value:g}):p.raw=g,p},s=v&&v.__createBinding||(Object.create?function(p,g,x,w){w===void 0&&(w=x);var l=Object.getOwnPropertyDescriptor(g,x);(!l||("get"in l?!g.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return g[x]}}),Object.defineProperty(p,w,l)}:function(p,g,x,w){w===void 0&&(w=x),p[w]=g[x]}),a=v&&v.__setModuleDefault||(Object.create?function(p,g){Object.defineProperty(p,"default",{enumerable:!0,value:g})}:function(p,g){p.default=g}),r=v&&v.__importStar||function(p){if(p&&p.__esModule)return p;var g={};if(p!=null)for(var x in p)x!=="default"&&Object.prototype.hasOwnProperty.call(p,x)&&s(g,p,x);return a(g,p),g};Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownPlayer=void 0;var u=n,o=r(c),d=an(),f=r(le),m=function(p){var g=p.onLoad,x=p.children,w=p.mobile,l=w===void 0?!1:w;return o.useEffect(function(){x&&g&&g()},[x,g]),(0,u.jsx)(d.MarkdownRenderer,{children:x,mobile:l})};e.MarkdownPlayer=m,e.default=(0,f.withTheme)((0,f.default)(e.MarkdownPlayer)(i||(i=t([""],[""]))));var i})(Ke);const rt=({topic:e})=>{const{apiUrl:t}=c.useContext(W.EscolaLMSContext),s=c.useMemo(()=>{var a,r;if(e&&e.topicable_type)switch(e.topicable_type){case z.TopicType.H5P:return n.jsx(kn.H5Player,{h5pObject:(a=e==null?void 0:e.topicable)==null?void 0:a.content,hideActionButtons:!0});case z.TopicType.OEmbed:return n.jsx(Rn.OEmbedPlayer,{url:(r=e==null?void 0:e.topicable)==null?void 0:r.value});case z.TopicType.RichText:return n.jsx("div",{className:"container-xl",children:n.jsx(Ke.MarkdownPlayer,{children:e.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return n.jsx(An.AudioVideoPlayer,{url:e.topicable.url});case z.TopicType.Image:return n.jsx(Nn.ImagePlayer,{topic:e,onLoad:()=>console.log("")});case z.TopicType.Pdf:return n.jsx(Sn.PdfPlayer,{url:e.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return n.jsx("div",{className:"scorm-wrapper",children:n.jsx("iframe",{title:e.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${e.topicable.uuid}`})});case On.TopicType.GiftQuiz:return n.jsx(Mn,{topic:e});default:return n.jsx("pre",{children:e.topicable_type})}return n.jsx(ln.Fragment,{})},[e,t]);return n.jsx("div",{className:"topic-preview-modal",children:n.jsx("div",{className:"topic-preview-modal-content",children:s})})};var Ye={};(function(e){var t=v&&v.__makeTemplateObject||function(_,y){return Object.defineProperty?Object.defineProperty(_,"raw",{value:y}):_.raw=y,_},s=v&&v.__assign||function(){return s=Object.assign||function(_){for(var y,T=1,N=arguments.length;T<N;T++){y=arguments[T];for(var A in y)Object.prototype.hasOwnProperty.call(y,A)&&(_[A]=y[A])}return _},s.apply(this,arguments)},a=v&&v.__createBinding||(Object.create?function(_,y,T,N){N===void 0&&(N=T);var A=Object.getOwnPropertyDescriptor(y,T);(!A||("get"in A?!y.__esModule:A.writable||A.configurable))&&(A={enumerable:!0,get:function(){return y[T]}}),Object.defineProperty(_,N,A)}:function(_,y,T,N){N===void 0&&(N=T),_[N]=y[T]}),r=v&&v.__setModuleDefault||(Object.create?function(_,y){Object.defineProperty(_,"default",{enumerable:!0,value:y})}:function(_,y){_.default=y}),u=v&&v.__importStar||function(_){if(_&&_.__esModule)return _;var y={};if(_!=null)for(var T in _)T!=="default"&&Object.prototype.hasOwnProperty.call(_,T)&&a(y,_,T);return r(y,_),y};Object.defineProperty(e,"__esModule",{value:!0}),e.ModalCourseAccess=void 0;var o=n,d=c,f=ie,m=cn,i=u(le),p=dn,g=L,x=un,w=pn,l=U,h=S,C=i.default.aside(j||(j=t([`
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
`])),function(_){var y=_.theme;return y.errorColor}),b=function(_){var y=_.course,T=_.className,N=_.initialValues,A=N===void 0?{phone_number:"",contact_details:""}:N,Xe=_.onCancel,pe=_.onSuccess,me=_.onError,Y=(0,f.useTranslation)().t,Ze=(0,d.useContext)(p.EscolaLMSContext).addCourseAccess;return(0,o.jsxs)(C,s({className:"wellms-component ".concat(T),"data-testid":"modal-course-access"},{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)(l.Title,s({level:1},{children:y.title})),(0,o.jsx)(h.Text,s({size:"14",bold:!0},{children:Y("ModalCourseAccess.Title")}))]}),(0,o.jsx)(m.Formik,s({initialValues:A,onSubmit:function(I,Q){var ee=Q.setErrors,G=Q.setSubmitting,ne=Q.resetForm,te={course_id:y.id,data:I};Ze(te).then(function(){ne(),pe==null||pe()}).catch(function($){var xe,ge;ee(s({error:(xe=$==null?void 0:$.data)===null||xe===void 0?void 0:xe.message},(ge=$==null?void 0:$.data)===null||ge===void 0?void 0:ge.errors)),me==null||me()}).finally(function(){G(!1)})}},{children:function(I){var Q=I.values,ee=I.touched,G=I.errors,ne=I.handleChange,te=I.handleBlur,$=I.handleSubmit;return(0,o.jsxs)("form",s({onSubmit:$},{children:[(0,o.jsxs)("div",s({className:"form-content"},{children:[G&&G.error&&(0,o.jsx)(h.Text,s({className:"error-msg",size:"12",bold:!0},{children:G.error})),(0,o.jsxs)("div",s({className:"input-group"},{children:[(0,o.jsx)(x.Input,{type:"text",label:Y("ModalCourseAccess.PhoneNumber"),error:ee.phone_number&&G.phone_number,id:"phone_number",name:"phone_number",onChange:ne,onBlur:te,value:Q.phone_number}),(0,o.jsx)(w.TextArea,{label:Y("ModalCourseAccess.ContactDetails"),error:ee.contact_details&&G.contact_details,id:"contact_details",name:"contact_details",onChange:ne,onBlur:te,value:Q.contact_details})]}))]})),(0,o.jsxs)("div",s({className:"button-group"},{children:[(0,o.jsx)(g.Button,s({type:"button",mode:"secondary",onClick:Xe},{children:Y("ModalCourseAccess.Cancel")})),(0,o.jsx)(g.Button,s({type:"submit",mode:"secondary"},{children:Y("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};e.ModalCourseAccess=b,e.default=(0,i.withTheme)((0,i.default)(e.ModalCourseAccess)(P||(P=t([""],[""]))));var j,P})(Ye);const ot=({author:e})=>n.jsx(O.Col,{lg:6,children:n.jsx(mn,{mobile:k,avatar:{alt:`${e.first_name} ${e.last_name}`,src:e.path_avatar?`${xn}/api/images/img?path=${e.path_avatar}`:ze.tutorPlaceholderPath},fullName:`${e.first_name} ${e.last_name}`,description:e.bio})});var D=(e=>(e.INIT="INIT",e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e))(D||{});const at=M.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,it=({courseData:e})=>{const{fetchQuestionnaireStarsByModel:t}=c.useContext(W.EscolaLMSContext),[s,a]=c.useState({type:D.INIT}),r=J(),u=c.useCallback(async()=>{if(e.id)try{a({type:D.LOADING});const o=await t("course",Number(e.id));o.success&&a({type:D.LOADED,rating:o.data})}catch(o){a({type:D.ERROR,error:o instanceof Error?o.message:"Unknown error"})}},[e.id,t]);return c.useEffect(()=>{u()},[e.id,u]),n.jsx("section",{className:"course-main-info",children:n.jsxs(O.Row,{children:[n.jsxs(O.Col,{lg:12,children:[n.jsx(Ln,{categories:e.categories,onCategoryClick:o=>{r.push(`/courses/?categories[]=${o}`)}}),n.jsx(U.Title,{mobile:k,level:1,children:e.title}),s.type===D.LOADED?n.jsxs(at,{children:[n.jsx(F.Rating,{ratingValue:s.rating.avg_rate,label:`${s.rating.avg_rate}`}),n.jsx(F.Text,{size:"13",children:"Śr. ocena kursu"}),"・",n.jsx("div",{children:n.jsxs(F.Text,{size:"13",children:["Dodane opinie ",n.jsx("strong",{children:s.rating.count_answers})]})})]}):s.type===D.LOADING?n.jsx(ve,{width:"20px",height:"20px"}):s.type===D.ERROR?s.error:null]}),n.jsx(O.Col,{lg:12,children:e.image_path&&n.jsx("div",{className:"image-wrapper",children:n.jsx(gn.ResponsiveImage,{path:e.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},fe={total:0,per_page:3,page:1,current_page:1},lt=({questionId:e,courseId:t})=>{const[s,a]=c.useState(void 0),[r,u]=c.useState(fe),[o,d]=c.useState(!0),{fetchQuestionnairesAnswers:f}=c.useContext(W.EscolaLMSContext),{t:m}=V(),i=c.useCallback(g=>{e&&t&&(d(!0),f(He.COURSE,Number(t),e,{per_page:r.per_page,page:g,order_by:"updated_at",order:"DESC"}).then(x=>{x.success&&(a(x.data),u(w=>({...w,total:x.meta.total,current_page:x.meta.current_page,page:x.meta.current_page})))}).catch(x=>{hn(m("UnexpectedError"),x),console.log(x)}).finally(()=>d(!1)))},[r,f,t,e,m]),p=c.useCallback(g=>{u(x=>({...x,current_page:g}))},[]);return c.useEffect(()=>{r.page!==r.current_page&&i(r.current_page)},[r.current_page,r.page,i]),c.useEffect(()=>{u(fe),i(fe.page)},[e]),{answersMeta:r,questionnaireAnswers:s,loading:o,onPageChange:p}},ct=M(De)`
  justify-content: space-between;

  background: ${({theme:e})=>e.white};
`,dt=M.div`
  .date {
    color: ${({theme:e})=>e.gray2};
    margin-bottom: 5px;
  }
`,ut=M.div`
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
`,pt=({name:e})=>{const t=()=>"#"+Math.floor(Math.random()*16777215).toString(16),s=e.charAt(0).toUpperCase();return n.jsx(ut,{style:{backgroundColor:t()},children:n.jsx(S.Text,{size:"18",children:s})})},mt=({question:e})=>{const{user:t,note:s,updated_at:a}=e,r=Fe();return s?n.jsx(dt,{children:n.jsx(ct,{children:n.jsxs(De,{$gap:19,children:[t.avatar?n.jsx(fn.Avatar,{src:t.avatar,alt:`user-avatar-${t.name}`}):n.jsx(pt,{name:t.name}),n.jsxs(Ve,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[n.jsx(S.Text,{noMargin:!0,color:r.gray2,className:"date",size:"13",children:_n(a,ze.defaultDateFormat)}),n.jsx(S.Text,{className:"note",size:"13",children:s})]})]})})}):null},xt=M(Ve)`
  gap: 22px;
  margin: 16px auto;
`,gt=M(U.Title)`
  margin-bottom: 16px;
`,ht=M.div`
  margin: 0 auto;
`,ft=({courseId:e,questionId:t})=>{var d;const{answersMeta:s,loading:a,onPageChange:r,questionnaireAnswers:u}=lt({questionId:t,courseId:e}),{t:o}=V();return n.jsx(xt,{children:a?n.jsx(vn.Spin,{}):((d=u||[])==null?void 0:d.length)>0?n.jsxs(n.Fragment,{children:[n.jsx(gt,{level:4,children:o("CoursePage.CourseRatingsTitle")}),(u||[]).map(f=>n.jsx(mt,{question:f})),s.total>s.per_page&&n.jsx(ht,{children:n.jsx($n,{total:s.total,perPage:s.per_page,currentPage:s.current_page,onPage:r})})]}):null})},Ie=()=>console.warn("INITIAL STATE"),be=c.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:Ie,questionId:null,setQuestionId:Ie,reviewId:void 0,courseId:void 0}),_t=({children:e,questionnaires:t})=>{var i;const[s,a]=c.useState(null),[r,u]=c.useState(null),{id:o}=ye(),d=t==null?void 0:t.at(0),f=(i=d==null?void 0:d.questions)==null?void 0:i.find(({type:p})=>p===Ne.RATE),m=zn({questionnaires:t,questionnaireId:s,questionType:Ne.REVIEW});return c.useEffect(()=>{d!=null&&d.id&&!s&&a(d.id)},[d==null?void 0:d.id,s]),c.useEffect(()=>{f!=null&&f.id&&!r&&u(f.id)},[f==null?void 0:f.id,r]),n.jsx(be.Provider,{value:{questionnaires:t,questionnaireId:s,setQuestionnaireId:a,questionId:r,setQuestionId:u,reviewId:m,courseId:Number(o)},children:e})},vt=()=>{const e=c.useContext(be);if(!be)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return e},jt=c.memo(()=>{const{courseId:e,reviewId:t}=vt();return n.jsx(n.Fragment,{children:e&&t&&n.jsx(ft,{courseId:e,questionId:t})})}),bt=c.memo(({questionnaires:e})=>n.jsx(_t,{questionnaires:e,children:n.jsx("section",{className:"course-ratings",children:n.jsx(jt,{})})})),yt=M.section`
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
`,Ct=({relatedProducts:e})=>{const{t}=V();return n.jsx(yt,{className:"course-related-courses",children:n.jsx(je,{children:n.jsx(O.Row,{children:n.jsxs(O.Col,{lg:12,children:[e&&(e==null?void 0:e.length)>0&&n.jsxs("div",{className:"content-container",children:[n.jsx(F.Title,{level:1,as:"h2",children:t("CoursePage.RelatedCoursesTitle")}),n.jsx(Fn,{slidesPerView:4,children:e==null?void 0:e.map(s=>{var a;return n.jsx(Vn,{children:n.jsx(F.NewCourseCard,{mobile:k,id:s.id,image:n.jsx(ae,{to:`/courses/${(a=s==null?void 0:s.productables[0])==null?void 0:a.id}`,children:s.poster_path?n.jsx(jn,{path:s.poster_path,alt:s.name,srcSizes:[300,600,900]}):n.jsx(In,{})}),price:item.public?n.jsx("div",{className:"course-price",children:t("FREE")}):n.jsx(qe,{price:s==null?void 0:s.price,oldPrice:s==null?void 0:s.price_old,taxRate:s==null?void 0:s.tax_rate}),title:n.jsx(ae,{to:`/courses/${s.id}`,children:n.jsx(F.Title,{level:3,as:"h3",className:"title",children:s.name})})})},s.id)})})]}),n.jsx("div",{className:"content-container",children:n.jsx(Dn,{titleText:t("CoursePage.InterestTitle"),params:{per_page:8,order_by:"created_at",order:"ASC"},slidesPerView:4})})]})})})})},wt=M.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,Pt=()=>n.jsxs(wt,{children:[n.jsx(B,{width:"20px",style:{marginBottom:"5px"}}),n.jsx(B,{width:"40%",height:37,style:{marginBottom:"10px"}}),n.jsx(B,{width:"40%",style:{marginBottom:"10px"}})," ",n.jsx(B,{width:"100%",height:490,style:{marginBottom:"40px"}}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(B,{width:"100%",count:4,style:{marginBottom:"5px"}})}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(B,{width:"100%",count:5,style:{marginBottom:"5px"}})}),n.jsx(B,{width:"80px",style:{marginBottom:"20px"}}),n.jsxs("div",{className:"tutors",children:[n.jsx(B,{circle:!0,width:"112px",height:"112px"}),n.jsxs("div",{children:[n.jsx(B,{width:"140px",style:{marginBottom:"20px"}}),n.jsx(B,{width:"140px",count:2})]})]}),n.jsx("div",{style:{marginTop:"40px"},children:n.jsx(B,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),Tt=M.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,Ut=()=>{var b,j;const[e,t]=c.useState([]),[s,a]=c.useState(!1),[r,u]=c.useState(),{id:o}=ye(),{t:d}=V(),f=J(),m=Fe(),{course:i,fetchCourse:p,fetchCourses:g,fetchCourseAccess:x,fetchQuestionnaires:w}=c.useContext($e.EscolaLMSContext),l=c.useCallback(()=>a(!1),[]),h=c.useCallback(()=>a(!0),[]),C=c.useCallback(()=>x({course_id:Number(o),current_page:1,per_page:1}),[o,x]);return c.useEffect(()=>{g({per_page:6}),o&&(p(Number(o)),C(),w(He.COURSE,Number(o)).then(P=>P.success&&t(P.data)))},[o]),i.error?n.jsx("pre",{children:i.error.message}):n.jsxs(bn,{metaTitle:((b=i==null?void 0:i.value)==null?void 0:b.title)||"Loading",children:[i.loading&&n.jsx(n.Fragment,{children:n.jsx(Ae,{children:n.jsx(je,{children:n.jsxs(O.Row,{children:[n.jsx(O.Col,{md:12,lg:8,children:n.jsx(Pt,{})}),n.jsx(O.Col,{md:12,lg:3,offset:{lg:1},children:n.jsx(En,{})})]})})})}),!i.loading&&i.value&&n.jsxs(n.Fragment,{children:[n.jsxs(Ae,{children:[n.jsxs(je,{children:[!k&&n.jsx(Bn,{items:[n.jsx(ae,{to:K.home,children:d("Home")}),n.jsx(ae,{to:K.courses,children:d("Courses")}),n.jsx(S.Text,{size:"13",children:i.value.title})]}),n.jsxs(O.Row,{children:[n.jsxs(O.Col,{md:12,lg:8,children:[k&&n.jsx(Tt,{onClick:()=>f.push(K.courses),children:n.jsx(yn,{color:m.black})}),n.jsx(it,{courseData:i.value}),k&&i.value&&n.jsx(Ee,{course:i.value,onRequestAccess:h}),i.value.description&&Me(i.value.description)!==""&&n.jsx("section",{className:"course-description-short",children:n.jsx(Se.MarkdownRenderer,{children:i.value.description})}),i.value.summary&&Me(i.value.summary)!==""&&n.jsx("section",{className:"course-description",children:n.jsx(Se.MarkdownRenderer,{children:i.value.summary})}),n.jsxs("section",{className:"",children:[n.jsx(U.Title,{as:"h3",level:4,className:"title",children:d("CoursePage.Teacher")}),n.jsx(O.Row,{children:i.value&&i.value.authors.map(P=>n.jsx(ot,{author:P}))})]}),i.value.lessons&&i.value.lessons.length>0&&n.jsx(Ue.CourseProgram,{lessons:i.value.lessons,onTopicClick:P=>u(P)}),n.jsx(bt,{questionnaires:e})]}),!k&&n.jsx(O.Col,{md:12,lg:3,offset:{lg:1},children:i.value&&n.jsx(Ee,{course:i.value,onRequestAccess:h})})]})]}),n.jsx(Ct,{relatedProducts:(j=i.value.product)==null?void 0:j.related_products})]}),n.jsxs(_e.Modal,{onClose:()=>u(void 0),visible:!!r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[n.jsx(Re,{}),r&&n.jsx(rt,{topic:r})]}),n.jsxs(_e.Modal,{onClose:l,visible:s,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[n.jsx(Re,{}),n.jsx(Ye.ModalCourseAccess,{course:i.value,onCancel:l,onSuccess:()=>{C(),l()}})]})]})]})};export{Ut as default};

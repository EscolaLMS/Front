import{r as c,Q as G,q as O,h as V,i as Z,p as K,j as n,T as W,z as S,Y as M,k as B,a0 as we,s as F,A as $,a1 as Ze,v as Pe,G as ve,F as Te,a2 as Oe,a3 as en,a4 as nn,n as Ie,V as ye,a5 as _e,I as se,a6 as tn,a7 as sn,e as _,a8 as Ce,a9 as oe,aa as rn,ab as le,ac as an,ad as on,ae as z,b as ln,af as cn,ag as dn,ah as un,ai as pn,aj as mn,ak as xn,al as ze,w as gn,N as hn,am as De,X as Fe,an as fn,ao as Ge,ap as vn,U as _n,C as je,L as ie,aq as jn,x as bn,ar as yn,as as Me,M as Se}from"./index-icc2FodH.js";import{P as Cn}from"./PricingCard-yrZoszrc.js";import{u as Ve,P as re,g as wn,f as Pn,r as Tn}from"./payment-yRxf_Pj6.js";import{P as qe}from"./index-DxVRNWdS.js";import{A as On,_ as Mn,P as Sn,I as Nn,a as Rn,O as An,H as kn}from"./index-BnmqvwOR.js";import{B as Bn}from"./index-Cci-gLDq.js";import{Q as He,a as Ne,g as En}from"./questionnaires-DHiAZNu5.js";import{b as $n,a as Ln}from"./CourseCard-D6_gEA7A.js";import{P as In}from"./index-BloXQiUr.js";import{D as zn}from"./index-Cy8gXdS7.js";import{S as Dn}from"./swiper-DHU6ggSp.js";import{a as Fn}from"./a11y-CuEFZ3Ma.js";import{S as k}from"./index-m-oBYQzC.js";import"./useFetchCourses-C-9nNpEa.js";const Gn=e=>{const[t,s]=c.useState({data:void 0,loaded:!1,loading:!1}),{user:i,fetchCourseProgress:r,courseProgressDetails:u}=c.useContext(G.EscolaLMSContext);return c.useEffect(()=>{u.byId&&u.byId[Number(e)]&&u.byId[Number(e)].value&&s({...t,data:u.byId[Number(e)].value,loaded:!0,loading:!1})},[e,u]),c.useEffect(()=>{i!=null&&i.value&&!i.loading&&!t.loading&&!t.loaded?(s({...t,loading:!0}),r(e).catch(()=>s({...t,loaded:!0,loading:!1}))):t.loaded||s({...t,loaded:!0})},[i,t,r,e]),{progress:t}},Vn=O.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,Re=O.div`
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
`,qn=({course:e})=>{var d,f;const{getCheapestSubscription:t}=Ve(),{cart:s,addToCart:i}=c.useContext(G.EscolaLMSContext),{t:r}=V(),{push:u}=Z(),a=c.useCallback(()=>{var m;i(Number((m=e.product)==null?void 0:m.id)).then(()=>u(K.cart))},[(d=e.product)==null?void 0:d.id,i,u]);return n.jsxs(Vn,{children:[n.jsx(W.Title,{className:"modal-header",level:2,children:r("Subscriptions.GetAccess")}),n.jsx(S.Text,{children:r("Subscriptions.YouHaveTwoOptions")}),n.jsxs(M.Row,{children:[n.jsx(M.Col,{lg:6,md:12,sm:12,children:n.jsxs(Re,{className:"product-box",$isMobile:B,children:[n.jsx(W.Title,{className:"title",level:3,children:r("Buy Course")}),n.jsx("div",{className:"divider"}),n.jsx(S.Text,{className:"description",size:"13",children:e.title}),n.jsxs(S.Text,{className:"price",size:"24",bold:!0,children:[we((f=e.product)==null?void 0:f.gross_price)," zł"]}),n.jsx(F.Button,{loading:s.loading,onClick:()=>a(),children:r("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&n.jsx(M.Col,{lg:6,md:12,sm:12,children:n.jsxs(Re,{className:"product-box",$isMobile:B,children:[n.jsx(W.Title,{className:"title",level:3,children:t==null?void 0:t.name}),n.jsx("div",{className:"divider"}),n.jsx(S.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),n.jsxs(S.Text,{className:"price",size:"24",bold:!0,children:[r("From")," ",we(t==null?void 0:t.gross_price)," ","zł"]}),n.jsx(F.Button,{onClick:()=>{var m;return u((m=K)==null?void 0:m.subscriptions)},children:r("Subscriptions.IPick")})]})})]})]})},Ae=O($.Button)`
  display: block;
  margin-bottom: 10px;
`,Hn=({course:e,onRequestAccess:t,setModalVisible:s})=>{var h,C;const{t:i}=V(),{push:r}=Z(),{courseAccess:u,fetchCourseAccess:a,user:d,fetchCourse:f}=c.useContext(G.EscolaLMSContext),{attachProduct:m,getActiveSubscription:o}=Ve();c.useEffect(()=>{(async function(){var j;const b=(j=d==null?void 0:d.value)==null?void 0:j.id;b&&Te&&(Oe.getPlatform()==="ios"?await re.configure({apiKey:en,appUserID:`${b}`}):Oe.getPlatform()==="android"&&await re.configure({apiKey:nn,appUserID:`${b}`}))})()},[(h=d==null?void 0:d.value)==null?void 0:h.id]);const p=c.useCallback(async()=>{var y;const b=wn(e),j=await re.getOfferings(),P=((y=j==null?void 0:j.current)==null?void 0:y.availablePackages)||[],v=Pn(P,b);if(v)try{await re.purchaseStoreProduct({product:v}),setTimeout(()=>{f(Number(e.id)),a({course_id:Number(e.id),current_page:1,per_page:1})},3e3)}catch(T){Tn(T)}},[e,f,a]),g=c.useMemo(()=>{var b,j;return(j=(b=u.list)==null?void 0:b.data)==null?void 0:j.find(P=>{var v;return((v=P==null?void 0:P.course)==null?void 0:v.id)===e.id})},[(C=u.list)==null?void 0:C.data,e.id]),x=c.useCallback(()=>{s(!0)},[s]),w=c.useCallback(()=>{m(e.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[r(`/course/${e.id}`),a({course_id:Number(e.id),current_page:1,per_page:1})])},[m,e.id,r,a]),l=c.useMemo(()=>n.jsx($.Button,{mode:"secondary",onClick:()=>{if(Te){p();return}x()},children:i("Buy Course")}),[i,x,p]);return o!=null&&o.id?n.jsx($.Button,{onClick:()=>w(),mode:"secondary",children:i("Go to the course")}):g?g.status!=="approved"?n.jsxs(n.Fragment,{children:[n.jsx(Ae,{mode:"secondary",disabled:!0,children:i("CourseAccess.Pending")}),l]}):g.status==="approved"?n.jsx($.Button,{onClick:()=>r(`/course/${e.id}`),mode:"secondary",children:i("Go to the course")}):l:n.jsxs(n.Fragment,{children:[n.jsx(Ae,{mode:"secondary",onClick:t,children:i("CourseAccess.RequestAccess")}),l]})},Un=({course:e,userOwnThisCourse:t,onRequestAccess:s})=>{var p,g;const{cart:i,user:r,fetchCourseAccess:u}=c.useContext(G.EscolaLMSContext),{t:a}=V(),{push:d}=Z(),[f,m]=c.useState(!1),o=c.useMemo(()=>{var x;return(x=i==null?void 0:i.value)==null?void 0:x.items.some(w=>{var l;return Number(w.product_id)===Number((l=e.product)==null?void 0:l.id)})},[(p=e.product)==null?void 0:p.id,i]);return c.useEffect(()=>{u({course_id:Number(e.id),current_page:1,per_page:1})},[e.id,u]),Ze(Number((g=r.value)==null?void 0:g.id),e)?n.jsx($.Button,{onClick:()=>d(`/course/${e.id}`),mode:"secondary",children:a("Go to the course")}):Pe(new Date(e.active_to||""))?n.jsx(S.Text,{children:a("CoursePage.IsFinished")}):o?n.jsx(n.Fragment,{children:n.jsx($.Button,{mode:"secondary",onClick:()=>d(K.cart),children:a("CoursePage.GoToCheckout")})}):t&&Pe(new Date(e.active_from||""))?n.jsx($.Button,{onClick:()=>d(`/course/${e.id}`),mode:"secondary",children:a("Go to the course")}):t?n.jsx(S.Text,{children:a("CoursePage.NotStarted")}):r.value&&e.product?n.jsxs(n.Fragment,{children:[n.jsx(Hn,{course:e,onRequestAccess:s,setModalVisible:m}),n.jsx(ve.Modal,{onClose:()=>m(!1),visible:f,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:n.jsx(qn,{course:e})})]}):e.product?n.jsx($.Button,{onClick:()=>d(`/login?referrer=/courses/${e.id}`),mode:"secondary",children:a("Buy Course")}):n.jsx(S.Text,{children:a("CoursePage.UnavailableCourse")})},Wn=O.div`
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
`,ae=O.div`
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
`,ke=({course:e,onRequestAccess:t})=>{var p,g,x,w,l;const{user:s,courseAccess:i}=c.useContext(Ie.EscolaLMSContext),{t:r}=V(),{id:u}=ye(),{progress:a}=Gn(Number(u)),d=c.useMemo(()=>{var h;return(h=e==null?void 0:e.product)==null?void 0:h.owned},[(p=e==null?void 0:e.product)==null?void 0:p.owned]),f=c.useMemo(()=>{var h,C;return!!((C=(h=i.list)==null?void 0:h.data)!=null&&C.find(b=>{var j;return((j=b==null?void 0:b.course)==null?void 0:j.id)===e.id&&b.status==="approved"}))},[e.id,(g=i.list)==null?void 0:g.data]),m=c.useMemo(()=>a.data||[],[a.data]),o=c.useMemo(()=>s.value&&(d||f)?((m==null?void 0:m.filter(C=>C.status===1))||[]).length:0,[m,s.value,f,d]);return n.jsx(Wn,{children:n.jsxs(Cn.PricingCard,{children:[n.jsxs("div",{className:"course-sidebar-header",children:[n.jsx(S.Text,{size:"13",children:r("PricePerAccess")}),n.jsx("div",{className:"price-wrapper",children:n.jsx(qe,{price:(x=e.product)==null?void 0:x.price,taxRate:(w=e.product)==null?void 0:w.tax_rate,oldPrice:(l=e.product)==null?void 0:l.price_old,textSizes:{old:"18",new:"24"}})})]}),a.loaded?n.jsx(Un,{onRequestAccess:t,course:e,userOwnThisCourse:d}):n.jsx(_e,{}),n.jsxs("div",{className:"pricing-card-features",children:[e.duration&&n.jsx(se.IconText,{text:n.jsxs(ae,{children:[n.jsx("span",{children:r("CoursePage.Duration")}),n.jsx("span",{children:e.duration})]})}),e.lessons&&n.jsx(se.IconText,{text:n.jsxs(ae,{children:[n.jsx("span",{children:r("CoursePage.Lessons")}),n.jsx("span",{children:e.lessons.length})]})}),e.language&&n.jsx(se.IconText,{text:n.jsxs(ae,{children:[n.jsx("span",{children:r("CoursePage.Language")}),n.jsx("span",{children:e.language})]})}),e.level&&n.jsx(se.IconText,{text:n.jsxs(ae,{children:[n.jsx("span",{children:r("CoursePage.Level")}),n.jsx("span",{children:e.level})]})})]}),s.value?n.jsxs(tn.CourseProgress,{progress:m&&(m==null?void 0:m.length)>0?o/m.length:0,icon:a.loaded?n.jsx(sn,{}):n.jsx(_e,{width:"22px",height:"22px"}),title:r("CoursePage.MyProgress"),children:[n.jsxs("strong",{style:{fontSize:14},children:[r("CoursePage.Finished")," ",o||0," ",r("CoursePage.Of")," ",m&&(m==null?void 0:m.length)>0?m.length:0," ",r("CoursePage.Lessons")]}),n.jsx("p",{style:{marginTop:9,marginBottom:0},children:r("CoursePage.FinishToGetCertificate")})]}):n.jsx(n.Fragment,{})]})})};var Ue={},We={},ce={},de={},U=_&&_.__assign||function(){return U=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++){t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},U.apply(this,arguments)};Object.defineProperty(de,"__esModule",{value:!0});de.CourseProgramTopic=void 0;var X=n,Qn=oe,he=Ce(),Kn=function(e){var t=e.index,s=e.topic,i=e.onTopicClick,r=e.mobile,u=(0,Qn.useTranslation)().t;return(0,X.jsxs)("li",U({className:"lesson__topic"},{children:[(0,X.jsxs)("div",U({className:"lesson__description"},{children:[(0,X.jsxs)(he.Text,U({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,X.jsx)(he.Text,U({size:"14",noMargin:!0},{children:s.title}))]})),s.preview&&(0,X.jsx)(he.Button,U({mode:"outline",onClick:function(){return i(s)},block:r},{children:u("Course.topicPreview")}))]}))};de.CourseProgramTopic=Kn;var E=_&&_.__assign||function(){return E=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++){t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},E.apply(this,arguments)};Object.defineProperty(ce,"__esModule",{value:!0});ce.CourseProgramLesson=void 0;var A=n,Yn=c,Xn=oe,J=Ce(),Jn=de,Zn=function(e){var t,s,i=e.lesson,r=e.index,u=e.defaultOpen,a=u===void 0?!1:u,d=e.onTopicClick,f=e.mobile,m=e.isSubLesson,o=e.children,p=(0,Xn.useTranslation)().t,g=(0,Yn.useState)(a),x=g[0],w=g[1];return(0,A.jsxs)("li",E({className:"lesson__item ".concat(x?"open":"closed"," ").concat(m?"sub-lesson":"")},{children:[(0,A.jsxs)("header",{children:[(0,A.jsxs)("div",E({className:"lesson__details"},{children:[(0,A.jsxs)(J.Text,E({noMargin:!0,size:"12"},{children:[p(m?"Course.SubLesson":"Course.Lesson")," ",r+1]})),(0,A.jsx)(J.Text,E({noMargin:!0,size:"12"},{children:i.duration&&i.duration}))]})),(0,A.jsx)("div",{children:(0,A.jsx)(J.Text,E({size:"14",bold:!0,noMargin:!0},{children:i.title}))}),(0,A.jsx)(J.Button,E({type:"button",onClick:function(){return w(!x)},mode:"icon","aria-label":p("Actions.Hide")},{children:(0,A.jsx)(J.Icon,{name:"chevron"})}))]}),!!(!((t=i.lessons)===null||t===void 0)&&t.length)&&(0,A.jsx)("ul",E({className:"lesson__lessons"},{children:o})),(0,A.jsx)("ul",E({className:"lesson__topics"},{children:(s=i.topics)===null||s===void 0?void 0:s.map(function(l,h){return(0,A.jsx)(Jn.CourseProgramTopic,{topic:l,index:h+1,onTopicClick:d,mobile:f},h)})}))]}))};ce.CourseProgramLesson=Zn;(function(e){var t=_&&_.__assign||function(){return t=Object.assign||function(u){for(var a,d=1,f=arguments.length;d<f;d++){a=arguments[d];for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&(u[m]=a[m])}return u},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RecursiveLessons=void 0;var s=n,i=ce,r=function(u){var a=u.lessons,d=u.depth,f=d===void 0?0:d,m=u.onTopicClick,o=u.mobile;return(0,s.jsx)(s.Fragment,{children:a.map(function(p,g){var x;return(0,s.jsx)(i.CourseProgramLesson,t({defaultOpen:g===0,index:g,lesson:p,isSubLesson:f>0,onTopicClick:m,mobile:o},{children:(0,s.jsx)(e.RecursiveLessons,{lessons:(x=p.lessons)!==null&&x!==void 0?x:[],depth:f+1,onTopicClick:m,mobile:o})}),p.id)})})};e.RecursiveLessons=r})(We);var ue={},et=_&&_.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Qe=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ue,"__esModule",{value:!0});ue.StyledSection=void 0;var nt=Qe(rn),tt=Qe(le),H=an;ue.StyledSection=(0,tt.default)("section")(Be||(Be=et([`
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
`])),function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray1},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray2},function(e){return e.$mobile?"column":"row"},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,(0,nt.default)(t.white).alpha(.2).hex(),t.white)},function(e){return e.$mobile?"0":"auto"},function(e){return e.$mobile?"6px":"0"},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){var t=e.theme;return(0,H.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){return e.theme.dm__numerationsColor||e.theme.numerationsColor?1:.5});var Be;(function(e){var t=_&&_.__makeTemplateObject||function(l,h){return Object.defineProperty?Object.defineProperty(l,"raw",{value:h}):l.raw=h,l},s=_&&_.__assign||function(){return s=Object.assign||function(l){for(var h,C=1,b=arguments.length;C<b;C++){h=arguments[C];for(var j in h)Object.prototype.hasOwnProperty.call(h,j)&&(l[j]=h[j])}return l},s.apply(this,arguments)},i=_&&_.__createBinding||(Object.create?function(l,h,C,b){b===void 0&&(b=C);var j=Object.getOwnPropertyDescriptor(h,C);(!j||("get"in j?!h.__esModule:j.writable||j.configurable))&&(j={enumerable:!0,get:function(){return h[C]}}),Object.defineProperty(l,b,j)}:function(l,h,C,b){b===void 0&&(b=C),l[b]=h[C]}),r=_&&_.__setModuleDefault||(Object.create?function(l,h){Object.defineProperty(l,"default",{enumerable:!0,value:h})}:function(l,h){l.default=h}),u=_&&_.__importStar||function(l){if(l&&l.__esModule)return l;var h={};if(l!=null)for(var C in l)C!=="default"&&Object.prototype.hasOwnProperty.call(l,C)&&i(h,l,C);return r(h,l),h};Object.defineProperty(e,"__esModule",{value:!0}),e.CourseProgram=void 0;var a=n,d=oe,f=u(le),m=Ce(),o=We,p=ue,g=function(l){var h=l.lessons,C=l.onTopicClick,b=l.mobile,j=b===void 0?!1:b,P=l.className,v=P===void 0?"":P,y=(0,d.useTranslation)().t;return(0,a.jsxs)(p.StyledSection,s({$mobile:j,className:"wellms-component ".concat(v)},{children:[(0,a.jsx)(m.Text,{children:y("Course.Agenda")}),(0,a.jsx)("ul",s({className:"lessons__list"},{children:(0,a.jsx)(o.RecursiveLessons,{lessons:h,onTopicClick:C,mobile:j})}))]}))};e.CourseProgram=g;var x=(0,f.default)(e.CourseProgram)(w||(w=t([""],[""])));e.default=(0,f.withTheme)(x);var w})(Ue);var Ke={};(function(e){var t=_&&_.__makeTemplateObject||function(p,g){return Object.defineProperty?Object.defineProperty(p,"raw",{value:g}):p.raw=g,p},s=_&&_.__createBinding||(Object.create?function(p,g,x,w){w===void 0&&(w=x);var l=Object.getOwnPropertyDescriptor(g,x);(!l||("get"in l?!g.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return g[x]}}),Object.defineProperty(p,w,l)}:function(p,g,x,w){w===void 0&&(w=x),p[w]=g[x]}),i=_&&_.__setModuleDefault||(Object.create?function(p,g){Object.defineProperty(p,"default",{enumerable:!0,value:g})}:function(p,g){p.default=g}),r=_&&_.__importStar||function(p){if(p&&p.__esModule)return p;var g={};if(p!=null)for(var x in p)x!=="default"&&Object.prototype.hasOwnProperty.call(p,x)&&s(g,p,x);return i(g,p),g};Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownPlayer=void 0;var u=n,a=r(c),d=on(),f=r(le),m=function(p){var g=p.onLoad,x=p.children,w=p.mobile,l=w===void 0?!1:w;return a.useEffect(function(){x&&g&&g()},[x,g]),(0,u.jsx)(d.MarkdownRenderer,{children:x,mobile:l})};e.MarkdownPlayer=m,e.default=(0,f.withTheme)((0,f.default)(e.MarkdownPlayer)(o||(o=t([""],[""]))));var o})(Ke);const st=({topic:e})=>{const{apiUrl:t}=c.useContext(G.EscolaLMSContext),s=c.useMemo(()=>{var i,r;if(e&&e.topicable_type)switch(e.topicable_type){case z.TopicType.H5P:return n.jsx(kn.H5Player,{h5pObject:(i=e==null?void 0:e.topicable)==null?void 0:i.content,hideActionButtons:!0});case z.TopicType.OEmbed:return n.jsx(An.OEmbedPlayer,{url:(r=e==null?void 0:e.topicable)==null?void 0:r.value});case z.TopicType.RichText:return n.jsx("div",{className:"container-xl",children:n.jsx(Ke.MarkdownPlayer,{children:e.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return n.jsx(Rn.AudioVideoPlayer,{url:e.topicable.url});case z.TopicType.Image:return n.jsx(Nn.ImagePlayer,{topic:e,onLoad:()=>console.log("")});case z.TopicType.Pdf:return n.jsx(Sn.PdfPlayer,{url:e.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return n.jsx("div",{className:"scorm-wrapper",children:n.jsx("iframe",{title:e.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${e.topicable.uuid}`})});case On.TopicType.GiftQuiz:return n.jsx(Mn,{topic:e});default:return n.jsx("pre",{children:e.topicable_type})}return n.jsx(ln.Fragment,{})},[e,t]);return n.jsx("div",{className:"topic-preview-modal",children:n.jsx("div",{className:"topic-preview-modal-content",children:s})})};var Ye={};(function(e){var t=_&&_.__makeTemplateObject||function(v,y){return Object.defineProperty?Object.defineProperty(v,"raw",{value:y}):v.raw=y,v},s=_&&_.__assign||function(){return s=Object.assign||function(v){for(var y,T=1,N=arguments.length;T<N;T++){y=arguments[T];for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(v[R]=y[R])}return v},s.apply(this,arguments)},i=_&&_.__createBinding||(Object.create?function(v,y,T,N){N===void 0&&(N=T);var R=Object.getOwnPropertyDescriptor(y,T);(!R||("get"in R?!y.__esModule:R.writable||R.configurable))&&(R={enumerable:!0,get:function(){return y[T]}}),Object.defineProperty(v,N,R)}:function(v,y,T,N){N===void 0&&(N=T),v[N]=y[T]}),r=_&&_.__setModuleDefault||(Object.create?function(v,y){Object.defineProperty(v,"default",{enumerable:!0,value:y})}:function(v,y){v.default=y}),u=_&&_.__importStar||function(v){if(v&&v.__esModule)return v;var y={};if(v!=null)for(var T in v)T!=="default"&&Object.prototype.hasOwnProperty.call(v,T)&&i(y,v,T);return r(y,v),y};Object.defineProperty(e,"__esModule",{value:!0}),e.ModalCourseAccess=void 0;var a=n,d=c,f=oe,m=cn,o=u(le),p=G,g=$,x=dn,w=un,l=W,h=S,C=o.default.aside(j||(j=t([`
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
`])),function(v){var y=v.theme;return y.errorColor}),b=function(v){var y=v.course,T=v.className,N=v.initialValues,R=N===void 0?{phone_number:"",contact_details:""}:N,Xe=v.onCancel,pe=v.onSuccess,me=v.onError,Y=(0,f.useTranslation)().t,Je=(0,d.useContext)(p.EscolaLMSContext).addCourseAccess;return(0,a.jsxs)(C,s({className:"wellms-component ".concat(T),"data-testid":"modal-course-access"},{children:[(0,a.jsxs)("header",{children:[(0,a.jsx)(l.Title,s({level:1},{children:y.title})),(0,a.jsx)(h.Text,s({size:"14",bold:!0},{children:Y("ModalCourseAccess.Title")}))]}),(0,a.jsx)(m.Formik,s({initialValues:R,onSubmit:function(L,Q){var ee=Q.setErrors,q=Q.setSubmitting,ne=Q.resetForm,te={course_id:y.id,data:L};Je(te).then(function(){ne(),pe==null||pe()}).catch(function(I){var xe,ge;ee(s({error:(xe=I==null?void 0:I.data)===null||xe===void 0?void 0:xe.message},(ge=I==null?void 0:I.data)===null||ge===void 0?void 0:ge.errors)),me==null||me()}).finally(function(){q(!1)})}},{children:function(L){var Q=L.values,ee=L.touched,q=L.errors,ne=L.handleChange,te=L.handleBlur,I=L.handleSubmit;return(0,a.jsxs)("form",s({onSubmit:I},{children:[(0,a.jsxs)("div",s({className:"form-content"},{children:[q&&q.error&&(0,a.jsx)(h.Text,s({className:"error-msg",size:"12",bold:!0},{children:q.error})),(0,a.jsxs)("div",s({className:"input-group"},{children:[(0,a.jsx)(x.Input,{type:"text",label:Y("ModalCourseAccess.PhoneNumber"),error:ee.phone_number&&q.phone_number,id:"phone_number",name:"phone_number",onChange:ne,onBlur:te,value:Q.phone_number}),(0,a.jsx)(w.TextArea,{label:Y("ModalCourseAccess.ContactDetails"),error:ee.contact_details&&q.contact_details,id:"contact_details",name:"contact_details",onChange:ne,onBlur:te,value:Q.contact_details})]}))]})),(0,a.jsxs)("div",s({className:"button-group"},{children:[(0,a.jsx)(g.Button,s({type:"button",mode:"secondary",onClick:Xe},{children:Y("ModalCourseAccess.Cancel")})),(0,a.jsx)(g.Button,s({type:"submit",mode:"secondary"},{children:Y("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};e.ModalCourseAccess=b,e.default=(0,o.withTheme)((0,o.default)(e.ModalCourseAccess)(P||(P=t([""],[""]))));var j,P})(Ye);const Ee=O.div`
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
`,$e=pn`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`,rt=({author:e})=>n.jsx(M.Col,{lg:6,children:n.jsx(mn,{mobile:B,avatar:{alt:`${e.first_name} ${e.last_name}`,src:e.path_avatar?`${xn}/api/images/img?path=${e.path_avatar}`:ze.tutorPlaceholderPath},fullName:`${e.first_name} ${e.last_name}`,description:e.bio})});var D=(e=>(e.INIT="INIT",e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e))(D||{});const at=O.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,it=({courseData:e})=>{const{fetchQuestionnaireStarsByModel:t}=c.useContext(G.EscolaLMSContext),[s,i]=c.useState({type:D.INIT}),r=Z(),u=c.useCallback(async()=>{if(e.id)try{i({type:D.LOADING});const a=await t("course",Number(e.id));a.success&&i({type:D.LOADED,rating:a.data})}catch(a){i({type:D.ERROR,error:a instanceof Error?a.message:"Unknown error"})}},[e.id,t]);return c.useEffect(()=>{u()},[e.id,u]),n.jsx("section",{className:"course-main-info",children:n.jsxs(M.Row,{children:[n.jsxs(M.Col,{lg:12,children:[n.jsx($n,{categories:e.categories,onCategoryClick:a=>{r.push(`/courses/?categories[]=${a}`)}}),n.jsx(W.Title,{mobile:B,level:1,children:e.title}),s.type===D.LOADED?n.jsxs(at,{children:[n.jsx(F.Rating,{ratingValue:s.rating.avg_rate,label:`${s.rating.avg_rate}`}),n.jsx(F.Text,{size:"13",children:"Śr. ocena kursu"}),"・",n.jsx("div",{children:n.jsxs(F.Text,{size:"13",children:["Dodane opinie ",n.jsx("strong",{children:s.rating.count_answers})]})})]}):s.type===D.LOADING?n.jsx(_e,{width:"20px",height:"20px"}):s.type===D.ERROR?s.error:null]}),n.jsx(M.Col,{lg:12,children:e.image_path&&n.jsx("div",{className:"image-wrapper",children:n.jsx(gn.ResponsiveImage,{path:e.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},fe={total:0,per_page:3,page:1,current_page:1},ot=({questionId:e,courseId:t})=>{const[s,i]=c.useState(void 0),[r,u]=c.useState(fe),[a,d]=c.useState(!0),{fetchQuestionnairesAnswers:f}=c.useContext(G.EscolaLMSContext),{t:m}=V(),o=c.useCallback(g=>{e&&t&&(d(!0),f(He.COURSE,Number(t),e,{per_page:r.per_page,page:g,order_by:"updated_at",order:"DESC"}).then(x=>{x.success&&(i(x.data),u(w=>({...w,total:x.meta.total,current_page:x.meta.current_page,page:x.meta.current_page})))}).catch(x=>{hn(m("UnexpectedError"),x),console.log(x)}).finally(()=>d(!1)))},[r,f,t,e,m]),p=c.useCallback(g=>{u(x=>({...x,current_page:g}))},[]);return c.useEffect(()=>{r.page!==r.current_page&&o(r.current_page)},[r.current_page,r.page,o]),c.useEffect(()=>{u(fe),o(fe.page)},[e]),{answersMeta:r,questionnaireAnswers:s,loading:a,onPageChange:p}},lt=O(De)`
  justify-content: space-between;

  background: ${({theme:e})=>e.white};
`,ct=O.div`
  .date {
    color: ${({theme:e})=>e.gray2};
    margin-bottom: 5px;
  }
`,dt=O.div`
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
`,ut=({name:e})=>{const t=()=>"#"+Math.floor(Math.random()*16777215).toString(16),s=e.charAt(0).toUpperCase();return n.jsx(dt,{style:{backgroundColor:t()},children:n.jsx(S.Text,{size:"18",children:s})})},pt=({question:e})=>{const{user:t,note:s,updated_at:i}=e,r=Fe();return s?n.jsx(ct,{children:n.jsx(lt,{children:n.jsxs(De,{$gap:19,children:[t.avatar?n.jsx(fn.Avatar,{src:t.avatar,alt:`user-avatar-${t.name}`}):n.jsx(ut,{name:t.name}),n.jsxs(Ge,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[n.jsx(S.Text,{noMargin:!0,color:r.gray2,className:"date",size:"13",children:vn(i,ze.defaultDateFormat)}),n.jsx(S.Text,{className:"note",size:"13",children:s})]})]})})}):null},mt=O(Ge)`
  gap: 22px;
  margin: 16px auto;
`,xt=O(W.Title)`
  margin-bottom: 16px;
`,gt=O.div`
  margin: 0 auto;
`,ht=({courseId:e,questionId:t})=>{var d;const{answersMeta:s,loading:i,onPageChange:r,questionnaireAnswers:u}=ot({questionId:t,courseId:e}),{t:a}=V();return n.jsx(mt,{children:i?n.jsx(_n.Spin,{}):((d=u||[])==null?void 0:d.length)>0?n.jsxs(n.Fragment,{children:[n.jsx(xt,{level:4,children:a("CoursePage.CourseRatingsTitle")}),(u||[]).map(f=>n.jsx(pt,{question:f})),s.total>s.per_page&&n.jsx(gt,{children:n.jsx(In,{total:s.total,perPage:s.per_page,currentPage:s.current_page,onPage:r})})]}):null})},Le=()=>console.warn("INITIAL STATE"),be=c.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:Le,questionId:null,setQuestionId:Le,reviewId:void 0,courseId:void 0}),ft=({children:e,questionnaires:t})=>{var o;const[s,i]=c.useState(null),[r,u]=c.useState(null),{id:a}=ye(),d=t==null?void 0:t.at(0),f=(o=d==null?void 0:d.questions)==null?void 0:o.find(({type:p})=>p===Ne.RATE),m=En({questionnaires:t,questionnaireId:s,questionType:Ne.REVIEW});return c.useEffect(()=>{d!=null&&d.id&&!s&&i(d.id)},[d==null?void 0:d.id,s]),c.useEffect(()=>{f!=null&&f.id&&!r&&u(f.id)},[f==null?void 0:f.id,r]),n.jsx(be.Provider,{value:{questionnaires:t,questionnaireId:s,setQuestionnaireId:i,questionId:r,setQuestionId:u,reviewId:m,courseId:Number(a)},children:e})},vt=()=>{const e=c.useContext(be);if(!be)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return e},_t=c.memo(()=>{const{courseId:e,reviewId:t}=vt();return n.jsx(n.Fragment,{children:e&&t&&n.jsx(ht,{courseId:e,questionId:t})})}),jt=c.memo(({questionnaires:e})=>n.jsx(ft,{questionnaires:e,children:n.jsx("section",{className:"course-ratings",children:n.jsx(_t,{})})})),bt=O.section`
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
`,yt=({relatedProducts:e})=>{const{t}=V();return n.jsx(bt,{className:"course-related-courses",children:n.jsx(je,{children:n.jsx(M.Row,{children:n.jsxs(M.Col,{lg:12,children:[e&&(e==null?void 0:e.length)>0&&n.jsxs("div",{className:"content-container",children:[n.jsx(F.Title,{level:1,as:"h2",children:t("CoursePage.RelatedCoursesTitle")}),n.jsx(Dn,{slidesPerView:4,children:e==null?void 0:e.map(s=>{var i;return n.jsx(Fn,{children:n.jsx(F.NewCourseCard,{mobile:B,id:s.id,image:n.jsx(ie,{to:`/courses/${(i=s==null?void 0:s.productables[0])==null?void 0:i.id}`,children:s.poster_path?n.jsx(jn,{path:s.poster_path,alt:s.name,srcSizes:[300,600,900]}):n.jsx(Ln,{})}),price:item.public?n.jsx("div",{className:"course-price",children:t("FREE")}):n.jsx(qe,{price:s==null?void 0:s.price,oldPrice:s==null?void 0:s.price_old,taxRate:s==null?void 0:s.tax_rate}),title:n.jsx(ie,{to:`/courses/${s.id}`,children:n.jsx(F.Title,{level:3,as:"h3",className:"title",children:s.name})})})},s.id)})})]}),n.jsx("div",{className:"content-container",children:n.jsx(zn,{titleText:t("CoursePage.InterestTitle"),params:{per_page:8,order_by:"created_at",order:"ASC"},slidesPerView:4})})]})})})})},Ct=O.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`,wt=()=>n.jsx(Ct,{children:n.jsx(k,{width:"100%",height:350})}),Pt=O.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,Tt=()=>n.jsxs(Pt,{children:[n.jsx(k,{width:"20px",style:{marginBottom:"5px"}}),n.jsx(k,{width:"40%",height:37,style:{marginBottom:"10px"}}),n.jsx(k,{width:"40%",style:{marginBottom:"10px"}})," ",n.jsx(k,{width:"100%",height:490,style:{marginBottom:"40px"}}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(k,{width:"100%",count:4,style:{marginBottom:"5px"}})}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(k,{width:"100%",count:5,style:{marginBottom:"5px"}})}),n.jsx(k,{width:"80px",style:{marginBottom:"20px"}}),n.jsxs("div",{className:"tutors",children:[n.jsx(k,{circle:!0,width:"112px",height:"112px"}),n.jsxs("div",{children:[n.jsx(k,{width:"140px",style:{marginBottom:"20px"}}),n.jsx(k,{width:"140px",count:2})]})]}),n.jsx("div",{style:{marginTop:"40px"},children:n.jsx(k,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),Ot=O.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,Gt=()=>{var b,j;const[e,t]=c.useState([]),[s,i]=c.useState(!1),[r,u]=c.useState(),{id:a}=ye(),{t:d}=V(),f=Z(),m=Fe(),{course:o,fetchCourse:p,fetchCourses:g,fetchCourseAccess:x,fetchQuestionnaires:w}=c.useContext(Ie.EscolaLMSContext),l=c.useCallback(()=>i(!1),[]),h=c.useCallback(()=>i(!0),[]),C=c.useCallback(()=>x({course_id:Number(a),current_page:1,per_page:1}),[a,x]);return c.useEffect(()=>{g({per_page:6}),a&&(p(Number(a)),C(),w(He.COURSE,Number(a)).then(P=>P.success&&t(P.data)))},[a]),o.error?n.jsx("pre",{children:o.error.message}):n.jsxs(bn,{metaTitle:((b=o==null?void 0:o.value)==null?void 0:b.title)||"Loading",children:[o.loading&&n.jsx(n.Fragment,{children:n.jsx(Ee,{children:n.jsx(je,{children:n.jsxs(M.Row,{children:[n.jsx(M.Col,{md:12,lg:8,children:n.jsx(Tt,{})}),n.jsx(M.Col,{md:12,lg:3,offset:{lg:1},children:n.jsx(wt,{})})]})})})}),!o.loading&&o.value&&n.jsxs(n.Fragment,{children:[n.jsxs(Ee,{children:[n.jsxs(je,{children:[!B&&n.jsx(Bn,{items:[n.jsx(ie,{to:K.home,children:d("Home")}),n.jsx(ie,{to:K.courses,children:d("Courses")}),n.jsx(S.Text,{size:"13",children:o.value.title})]}),n.jsxs(M.Row,{children:[n.jsxs(M.Col,{md:12,lg:8,children:[B&&n.jsx(Ot,{onClick:()=>f.push(K.courses),children:n.jsx(yn,{color:m.black})}),n.jsx(it,{courseData:o.value}),B&&o.value&&n.jsx(ke,{course:o.value,onRequestAccess:h}),o.value.description&&Me(o.value.description)!==""&&n.jsx("section",{className:"course-description-short",children:n.jsx(Se.MarkdownRenderer,{children:o.value.description})}),o.value.summary&&Me(o.value.summary)!==""&&n.jsx("section",{className:"course-description",children:n.jsx(Se.MarkdownRenderer,{children:o.value.summary})}),n.jsxs("section",{className:"",children:[n.jsx(W.Title,{as:"h3",level:4,className:"title",children:d("CoursePage.Teacher")}),n.jsx(M.Row,{children:o.value&&o.value.authors.map(P=>n.jsx(rt,{author:P}))})]}),o.value.lessons&&o.value.lessons.length>0&&n.jsx(Ue.CourseProgram,{lessons:o.value.lessons,onTopicClick:P=>u(P)}),n.jsx(jt,{questionnaires:e})]}),!B&&n.jsx(M.Col,{md:12,lg:3,offset:{lg:1},children:o.value&&n.jsx(ke,{course:o.value,onRequestAccess:h})})]})]}),n.jsx(yt,{relatedProducts:(j=o.value.product)==null?void 0:j.related_products})]}),n.jsxs(ve.Modal,{onClose:()=>u(void 0),visible:!!r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[n.jsx($e,{}),r&&n.jsx(st,{topic:r})]}),n.jsxs(ve.Modal,{onClose:l,visible:s,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[n.jsx($e,{}),n.jsx(Ye.ModalCourseAccess,{course:o.value,onCancel:l,onSuccess:()=>{C(),l()}})]})]})]})};export{Gt as default};

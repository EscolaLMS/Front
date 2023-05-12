(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[14],{523:function(e,t,n){"use strict";n.r(t);var a,r,o=n(223),i=n(1),c=n.n(i),s=n(52),l=n(608),u=n(221),d=n(29),m=n(674),b=n(675),j=n(676),v=n(68),p=n(19),g=Object(p.default)("div")(a||(a=Object(v.a)(["\n  display: flex;\n  row-gap: 30px;\n  flex-wrap: wrap;\n\n  .filters {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: center;\n    position: relative;\n  }\n\n  .selects-row {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    column-gap: 35px;\n    margin-left: auto;\n\n    @media (max-width: 991px) {\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      margin-top: 40px;\n    }\n    @media (max-width: 575px) {\n      row-gap: 15px;\n      margin-top: 20px;\n    }\n\n    .single-select--search {\n      .search-input-options {\n        display: none !important;\n      }\n      input {\n        background: transparent !important;\n        border-bottom: 1px solid #fff;\n        color: #fff;\n        border-radius: 0;\n      }\n\n      .fieldset {\n        border-color: transparent !important;\n      }\n\n      svg {\n        filter: brightness(0) invert(1);\n      }\n    }\n\n    .single-select--category {\n      min-width: 200px;\n    }\n  }\n"]))),x=n(14),f=n(635),h=n(33),y=function(){var e=Object(h.h)(),t=e.search,n=e.pathname,a=Object(h.g)(),r=Object(i.useMemo)((function(){return new URLSearchParams(t)}),[t]),o=Object(i.useCallback)((function(e){return new URLSearchParams(t).get(e)}),[t]),c=Object(i.useCallback)((function(e){return new URLSearchParams(t).getAll(e)}),[t]),s=Object(i.useCallback)((function(e,t){t&&""!==t?r.set(e,t):r.delete(e),a.push({pathname:n,search:r.toString()})}),[a,n,r]),l=Object(i.useCallback)((function(e){var t=new URLSearchParams;return Object.entries(e).forEach((function(e){var n=Object(x.a)(e,2),a=n[0],r=n[1];Array.isArray(r)?r.forEach((function(e){t.append("".concat(a),e)})):t.append(a,r)})),t.toString()}),[]),u=Object(i.useCallback)((function(e){a.push({pathname:n,search:e?l(e):void 0})}),[a,l,n]),d=Object(i.useCallback)((function(e,t){r.delete(e),t.forEach((function(t){r.append(e,"".concat(t))})),a.push({pathname:n,search:r.toString()})}),[a,n,r]),m=Object(i.useMemo)((function(){return f.a.parse(t)}),[t]);return{query:r,getQueryValueByName:o,getAllQueryValueByName:c,setQueryParam:s,setPathname:u,setQueryArrayParam:d,paramsToObject:m,objectToParam:l}},O=n(3),T=function(){var e,t=y(),n=t.setPathname,a=t.setQueryParam,r=t.setQueryArrayParam,o=t.getAllQueryValueByName,c=t.getQueryValueByName,s=Object(i.useMemo)((function(){return{categories:o("categories[]").map((function(e){return Number(e)}))||[],name:c("name")||""}}),[o,c]);return Object(O.jsxs)(g,{children:[Object(O.jsx)("div",{className:"tags",children:Object(O.jsx)(j.a,{filters:s,onReset:function(){n()}})}),Object(O.jsxs)("div",{className:"selects-row",children:[Object(O.jsx)("div",{className:"single-select single-select--search",children:Object(O.jsx)(b.a,{onSubmit:function(e){a("name",e)}})}),Object(O.jsx)("div",{className:"single-select single-select--category",children:Object(O.jsx)(m.a,{selectedCategories:null===(e=o("categories[]"))||void 0===e?void 0:e.map((function(e){return Number(e)})),handleChange:function(e){r("categories[]",e)}})})]})]})},C=n(74),E=function(e){var t=e.children,n=Object(p.default)("div")(r||(r=Object(v.a)(["\n    background: ",";\n    padding: ",";\n    margin-bottom: ",";\n\n    h1 {\n      color: ",";\n    }\n\n    .tags {\n      display: ",";\n      width: 100%;\n      margin-top: 35px;\n    }\n  "])),(function(e){return e.theme.primaryColor}),C.isMobile?"60px 20px 20px 20px":"140px 40px 30px",C.isMobile?"100px":"40px",(function(e){return e.theme.white}),(function(e){var t=e.filters;return t&&Object.keys(t).length>2?"block":"none"})),a=y().paramsToObject;return Object(O.jsx)(n,{filters:a,children:t})},w=function(){var e=Object(u.a)().t;return Object(O.jsxs)(E,{children:[Object(O.jsxs)(d.Title,{level:1,children:[" ",e("Menu.Consultations")]}),Object(O.jsx)(T,{})]})},k=n(225),N=n(75),P=c.a.createContext({}),S=n(624),M=function(e){var t=e.consultation;e.actions;return Object(O.jsx)(S.a,{consultation:t})},A=n(609),F=function(){var e,t,n,a,r,o,c=Object(i.useContext)(P).consultations,s=y().setQueryParam,l=null===c||void 0===c?void 0:c.loading,u=null===c||void 0===c||null===(e=c.list)||void 0===e?void 0:e.meta,d=Object(p.useTheme)();return l?Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(k.Spin,{color:d.primaryColor})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N.Row,{style:{gap:"30px 0",marginBottom:"30px"},children:null===c||void 0===c||null===(t=c.list)||void 0===t?void 0:t.data.map((function(e){return Object(O.jsx)(N.Col,{md:6,lg:4,xl:3,children:Object(O.jsx)(M,{consultation:e})},e.id)}))}),u&&(Number(null===c||void 0===c||null===(n=c.list)||void 0===n||null===(a=n.meta)||void 0===a?void 0:a.total)||0)>(Number(null===c||void 0===c||null===(r=c.list)||void 0===r||null===(o=r.meta)||void 0===o?void 0:o.per_page)||0)&&Object(O.jsx)(A.a,{total:u.total,perPage:Number(u.per_page),currentPage:u.current_page,onPage:function(e){return s("page","".concat(e))}})]})},_=function(){var e,t=Object(i.useContext)(s.EscolaLMSContext).categoryTree;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(F,{}),t&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(l.a,{categories:(null===(e=t.list)||void 0===e?void 0:e.filter((function(e){return!!e.icon})))||[]})})]})},R=n(37),B=function(e){var t=Object(i.useContext)(R.EscolaLMSContext),n=t.fetchConsultations,a=t.consultations,r=t.fetchCategories,o=e.children,c=y(),s=c.query,l=c.getQueryValueByName,u=c.getAllQueryValueByName,d=c.setPathname;Object(i.useEffect)((function(){r()}),[]);var m=Object(i.useCallback)((function(){var e={page:Number(l("page"))||1,per_page:Number(l("per_page"))||8},t=u("categories[]"),n=l("name");return n&&(e.name=n),t&&t.length&&(e["categories[]"]=t),e}),[u,l]);return Object(i.useEffect)((function(){var e=m();d(e),s.has("page")&&n(e)}),[s]),Object(O.jsx)(P.Provider,{value:{consultations:a},children:o})},D=n(157);t.default=function(){var e=Object(u.a)().t;return Object(O.jsx)(o.a,{metaTitle:e("ConsultationsPageMeta"),children:Object(O.jsx)(B,{children:Object(O.jsx)("section",{className:"consultations-page",children:Object(O.jsx)(D.a,{children:Object(O.jsx)(_,{})})})})})}},575:function(e,t,n){"use strict";var a,r=n(68),o=n(19),i=n(576),c=n(3),s=o.default.div(a||(a=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid\n    ",";\n"])),(function(e){var t=e.theme;return"light"===t.mode?t.gray4:t.gray2}));t.a=function(){return Object(c.jsx)(s,{children:Object(c.jsx)("img",{src:i.a,alt:""})})}},576:function(e,t,n){"use strict";t.a=n.p+"static/media/image.ece42557.svg"},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={defaultDateFormat:"dd/MM/yyyy",defaultDateTimeFormat:"dd/MM/yyyy, HH:mm"}},585:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(148),r=n(578),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.a.defaultDateFormat;return e?Object(a.default)(new Date(e),t):""}},599:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l}));var a=n(294),r=n(578),o=n(585),i=function(e,t){var n=(e/100*t).toFixed(2);return(Number(e)+Number(n)).toFixed(2)},c=function(e){var t;return e?null===(t=e.items)||void 0===t?void 0:t.map((function(e){return e.name})).join(", "):""},s=function(e){var t,n,i,s,l,u,d,m,b,j,v,p,g,x,f,h,y,O,T,C,E,w,k,N,P,S,M,A,F,_,R,B,D,L,Q,U,H,V,z,I,J,q,W,G,K,X="".concat("Notifications.").concat(e.event);switch(e.event){case a.EventTypes.StationaryEventAuthorAssigned:return{translation:X,object:{name:(null===(t=e.data.stationaryEvent)||void 0===t?void 0:t.name)||""}};case a.EventTypes.StationaryEventAuthorUnassigned:return{translation:X,object:{name:(null===(n=e.data.stationaryEvent)||void 0===n?void 0:n.name)||""}};case a.EventTypes.StationaryEventAssigned:return{translation:X,object:{name:(null===(i=e.data.stationaryEvent)||void 0===i?void 0:i.name)||""}};case a.EventTypes.StationaryEventUnassigned:return{translation:X,object:{name:(null===(s=e.data.stationaryEvent)||void 0===s?void 0:s.name)||""}};case a.EventTypes.AbandonedCartEvent:case a.EventTypes.OrderCancelled:case a.EventTypes.OrderCreated:return{translation:X};case a.EventTypes.OrderPaid:return{translation:X,object:{name:c(e.data.order)||""}};case a.EventTypes.ProductableAttached:return{translation:X,object:{name:(null===(l=e.data.productable)||void 0===l?void 0:l.name)||""}};case a.EventTypes.ProductableDetached:return{translation:X,object:{name:(null===(u=e.data.productable)||void 0===u?void 0:u.name)||""}};case a.EventTypes.ProductAddedToCart:return{translation:X,object:{name:(null===(d=e.data.product)||void 0===d?void 0:d.name)||""}};case a.EventTypes.ProductAttached:return{translation:X,object:{name:(null===(m=e.data.product)||void 0===m?void 0:m.name)||""}};case a.EventTypes.ProductBought:return{translation:X,object:{name:(null===(b=e.data.product)||void 0===b?void 0:b.name)||""}};case a.EventTypes.ProductDetached:return{translation:X,object:{name:(null===(j=e.data.product)||void 0===j?void 0:j.name)||""}};case a.EventTypes.ProductRemovedFromCart:return{translation:X,object:{name:(null===(v=e.data.product)||void 0===v?void 0:v.name)||""}};case a.EventTypes.PaymentCancelled:return{translation:X,object:{amount:(null===(p=e.data.payment)||void 0===p?void 0:p.amount)||0,name:c(null===(g=e.data.payment)||void 0===g?void 0:g.payable)}};case a.EventTypes.PaymentFailed:return{translation:X,object:{amount:(null===(x=e.data.payment)||void 0===x?void 0:x.amount)||0,name:c(null===(f=e.data.payment)||void 0===f?void 0:f.payable)}};case a.EventTypes.PaymentRegistered:return{translation:X,object:{amount:(null===(h=e.data.payment)||void 0===h?void 0:h.amount)||0}};case a.EventTypes.PaymentSuccess:return{translation:X,object:{amount:(null===(y=e.data.payment)||void 0===y?void 0:y.amount)||0,name:c(null===(O=e.data.payment)||void 0===O?void 0:O.payable)}};case a.EventTypes.CourseAccessFinished:return{translation:X,object:{name:(null===(T=e.data.course)||void 0===T?void 0:T.title)||""}};case a.EventTypes.CourseAccessStarted:return{translation:X,object:{name:(null===(C=e.data.course)||void 0===C?void 0:C.title)||""}};case a.EventTypes.CourseAssigned:return{translation:X,object:{name:(null===(E=e.data.course)||void 0===E?void 0:E.title)||""}};case a.EventTypes.CourseDeadlineSoon:return{translation:X,object:{name:(null===(w=e.data.course)||void 0===w?void 0:w.title)||"",date:Object(o.a)(null===(k=e.data.course)||void 0===k?void 0:k.active_to,r.a.defaultDateTimeFormat)}};case a.EventTypes.CoursedPublished:return{translation:X,object:{name:(null===(N=e.data.course)||void 0===N?void 0:N.title)||""}};case a.EventTypes.CourseFinished:return{translation:X,object:{name:(null===(P=e.data.course)||void 0===P?void 0:P.title)||""}};case a.EventTypes.CourseStarted:return{translation:X,object:{name:(null===(S=e.data.course)||void 0===S?void 0:S.title)||""}};case a.EventTypes.CourseStatusChanged:return{translation:X,object:{name:(null===(M=e.data.course)||void 0===M?void 0:M.title)||""}};case a.EventTypes.CourseTutorAssigned:return{translation:X,object:{name:(null===(A=e.data.course)||void 0===A?void 0:A.title)||""}};case a.EventTypes.CourseTutorUnassigned:return{translation:X,object:{name:(null===(F=e.data.course)||void 0===F?void 0:F.title)||""}};case a.EventTypes.CourseUnassigned:return{translation:X,object:{name:(null===(_=e.data.course)||void 0===_?void 0:_.title)||""}};case a.EventTypes.TopicFinished:return{translation:X,object:{name:(null===(R=e.data.course)||void 0===R?void 0:R.title)||""}};case a.EventTypes.TopicTypeChanged:return{translation:X,object:{name:(null===(B=e.data.topicContent)||void 0===B?void 0:B.value)||""}};case a.EventTypes.ReportTerm:return{translation:X,object:{name:(null===(D=e.data.consultationTerm)||void 0===D?void 0:D.consultation.name)||"",date:Object(o.a)(null===(L=e.data.consultationTerm)||void 0===L?void 0:L.executed_at,r.a.defaultDateTimeFormat),user:"".concat(null===(Q=e.data.consultationTerm)||void 0===Q||null===(U=Q.user)||void 0===U?void 0:U.first_name," ").concat(null===(H=e.data.consultationTerm)||void 0===H||null===(V=H.user)||void 0===V?void 0:V.last_name)}};case a.EventTypes.ApprovedTerm:return{translation:X,object:{date:Object(o.a)(null===(z=e.data.consultationTerm)||void 0===z?void 0:z.executed_at)||""}};case a.EventTypes.ApprovedTermWithTrainer:return{translation:X,object:{date:Object(o.a)(null===(I=e.data.consultationTerm)||void 0===I?void 0:I.executed_at)||""}};case a.EventTypes.ChangeTerm:return{translation:X,object:{date:Object(o.a)(null===(J=e.data.consultationTerm)||void 0===J?void 0:J.executed_at)||""}};case a.EventTypes.RejectTerm:return{translation:X,object:{date:Object(o.a)(null===(q=e.data.consultationTerm)||void 0===q?void 0:q.executed_at)||""}};case a.EventTypes.RejectTermWithTrainer:return{translation:X,object:{date:Object(o.a)(null===(W=e.data.consultationTerm)||void 0===W?void 0:W.executed_at)||""}};case a.EventTypes.ReminderAboutTerm:return{translation:X,object:{date:Object(o.a)(null===(G=e.data.consultationTerm)||void 0===G?void 0:G.executed_at)||""}};case a.EventTypes.ReminderTrainerAboutTerm:return{translation:X,object:{date:Object(o.a)(null===(K=e.data.consultationTerm)||void 0===K?void 0:K.executed_at)||""}};default:return{translation:X}}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e&&"number"===typeof e?Math.round(e*Math.pow(10,t))/Math.pow(10,t):0}},608:function(e,t,n){"use strict";var a,r=n(6),o=n(14),i=n(68),c=n(80),s=n(224),l=n(292),u=n(295),d=n(74),m=n(221),b=n(1),j=n(19),v=n(222),p=n(33),g=n(75),x=n(157),f=n(3),h=j.default.section(a||(a=Object(i.a)(["\n  overflow: hidden;\n  padding: 60px 0 0;\n  @media (max-width: 768px) {\n    padding: 30px 0;\n  }\n  h3 {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .slider-title {\n    @media (max-width: 575px) {\n      padding-right: 45%;\n    }\n  }\n  .categories-slider {\n    .slick-dots {\n      bottom: 40px;\n    }\n  }\n  .slick-track {\n    display: flex;\n    gap: 0 20px;\n  }\n  .slick-slide {\n    @media (max-width: 991px) {\n      display: flex !important;\n      justify-content: center;\n    }\n  }\n  .single-category-slide {\n    margin: 0 8px;\n    .category-card-icon {\n      img {\n        margin: 0 auto;\n        display: block;\n      }\n    }\n    @media (max-width: 991px) {\n      margin: 0 auto;\n      min-width: 300px;\n    }\n  }\n"])));t.a=function(e){var t=e.categories,n=Object(b.useState)(!0),a=Object(o.a)(n,1)[0],i=Object(m.a)().t,j=Object(p.g)(),y=t.filter((function(e){return e.count&&e.count>0}));return Object(f.jsx)(h,{children:Object(f.jsxs)(x.a,{children:[Object(f.jsx)(c.Title,{level:3,children:Object(f.jsx)("strong",{children:i("Homepage.CategoriesTitle")})}),d.isMobile?Object(f.jsx)("div",{className:"categories-slider",children:Object(f.jsx)(l.Slider,{settings:Object(r.a)(Object(r.a)({},{arrows:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,centerMode:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}),{},{dots:a}),dotsPosition:"bottom",children:y.slice(-4).map((function(e){return Object(f.jsx)("div",{className:"single-category-slide",children:Object(f.jsx)(u.CategoryCard,{icon:Object(f.jsx)("img",{src:e.icon,alt:e.name}),title:e.name,buttonText:i("Homepage.CategoryBtnText"),subtitle:Object(f.jsx)(s.IconText,{icon:Object(f.jsx)(v.n,{}),text:"".concat(i("CoursesLength",{count:e.count}))}),onButtonClick:function(){return j.push("/courses/?categories[]=".concat(e.id))},variant:"gradient"})},e.id)}))})}):Object(f.jsx)(g.Row,{children:y.slice(-4).map((function(e){return Object(f.jsx)(g.Col,{md:3,children:Object(f.jsx)(u.CategoryCard,{icon:Object(f.jsx)("img",{src:e.icon,alt:e.name}),title:e.name,buttonText:i("Homepage.CategoryBtnText"),subtitle:Object(f.jsx)(s.IconText,{icon:Object(f.jsx)(v.n,{}),text:"".concat(i("CoursesLength",{count:e.count}))}),onButtonClick:function(){return j.push("/courses/?categories[]=".concat(e.id))},variant:"gradient"})},e.id)}))})]})})}},609:function(e,t,n){"use strict";var a,r=n(20),o=n(68),i=(n(1),n(19)),c=n(32),s=n(43),l=n(3),u=i.default.div(a||(a=Object(o.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  a {\n    text-decoration: none !important;\n  }\n  .arrow {\n    width: 10px;\n    height: 10px;\n    border-left: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    margin: 0 10px;\n    &--left {\n      transform: rotate(45deg);\n    }\n    &--right {\n      transform: rotate(-135deg);\n    }\n  }\n  .number {\n    margin: 0 8px;\n    p {\n      opacity: 0.5;\n      &.current {\n        color: ","!important;\n        font-weight: 700;\n        opacity: 1;\n      }\n    }\n  }\n"])),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor})),d="LEFT",m="RIGHT",b=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e,r=[];a<=t;)r.push(a),a+=n;return r};t.a=function(e){var t=e.currentPage,n=e.total,a=e.perPage,o=e.onPage,i=e.pageNeighbours,j=void 0===i?2:i,v=Math.ceil(n/a);return Object(l.jsx)(u,{children:function(){var e=2*j+3;if(v>e+2){var n=Math.max(2,t-j),a=Math.min(v-1,t+j),o=b(n,a),i=n>2,c=v-a>1,s=e-(o.length+1);switch(!0){case i&&!c:var l=b(n-s,n-1);o=[d].concat(Object(r.a)(l),Object(r.a)(o));break;case!i&&c:var u=b(a+1,a+s);o=[].concat(Object(r.a)(o),Object(r.a)(u),[m]);break;default:o=[d].concat(Object(r.a)(o),[m])}return[1].concat(Object(r.a)(o),[v])}return t<v&&1===t?[].concat(Object(r.a)(b(1,v)),[m]):t>1&&t!==v?[d].concat(Object(r.a)(b(1,v)),[m]):t>1&&t===v?[d].concat(Object(r.a)(b(1,v))):b(1,v)}().map((function(e){return e===d?Object(l.jsx)("a",{href:"#!prev_page",className:"prev page-numbers",onClick:function(e){e.preventDefault(),o(t<=1?1:t-1)},children:Object(l.jsx)("div",{className:"arrow arrow--left"})}):e===m?Object(l.jsx)("a",{href:"#!next_page",className:"next page-numbers",onClick:function(e){e.preventDefault(),o(t===v?v:t+1)},children:Object(l.jsx)("div",{className:"arrow arrow--right"})}):Object(l.jsx)(s.c,{onClick:function(t){t.preventDefault(),o(Number(e))},to:"#!page-".concat(Number(e)),className:"number",children:Object(l.jsx)(c.Text,{className:Number(e)===t?"current":"",size:"16","aria-current":"page",children:Number(e)})},"#".concat(Number(e)))}))})}},624:function(e,t,n){"use strict";var a=n(291),r=n(33),o=n(43),i=n(574),c=n(575),s=n(224),l=n(222),u=n(599),d=n(67),m=n(1),b=n.n(m),j=n(221),v=n(585),p=n(578),g=n(3);t.a=function(e){var t=e.consultation,n=Object(r.g)(),m=Object(j.a)().t,x=t.is_ended,f=t.is_started;return Object(g.jsx)(a.CourseCard,{id:t.id,image:Object(g.jsx)(o.c,{to:"/consultations/".concat(t.id),children:t.image_path?Object(g.jsx)(i.ResponsiveImage,{path:t.image_path,alt:t.name,srcSizes:[300,600,900]}):Object(g.jsx)(c.a,{})}),title:"".concat(t.name),footer:Object(g.jsx)(b.a.Fragment,{children:Object(g.jsx)(s.IconText,{icon:Object(g.jsx)(l.o,{}),text:x?Object(g.jsx)(g.Fragment,{children:"".concat(m("ConsultationPage.Finished"),": ").concat(Object(v.a)(t.active_to,p.a.defaultDateTimeFormat))}):Object(g.jsxs)(g.Fragment,{children:[t.duration,t.product&&" - ".concat(Object(u.b)(t.product.price,t.product.tax_rate)," z\u0142")]})})}),actions:!x&&Object(g.jsx)(d.Button,{mode:"secondary",onClick:function(){return n.push("/consultations/".concat(t.id))},block:!0,children:m(f?"ConsultationPage.Join":"ConsultationPage.Book")})})}},674:function(e,t,n){"use strict";var a=n(1),r=n(74),o=n(221),i=n(19),c=n(52),s=n(656),l=n.n(s),u=n(80),d=n.n(u),m=n(3);t.a=function(e){var t=e.selectedCategories,n=e.handleChange,s=Object(a.useContext)(c.EscolaLMSContext).categoryTree,u=Object(i.useTheme)(),b=Object(o.a)().t;return Object(m.jsx)(l.a,{mobile:r.isMobile,backgroundColor:u.primaryColor,categories:s.list||[],label:b("Filters.Category"),selectedCategories:t,drawerTitle:Object(m.jsx)(d.a,{level:5,style:{fontSize:"14px"},children:b("Filters.Category")}),handleChange:n})}},675:function(e,t,n){"use strict";var a=n(221),r=n(301),o=n.n(r),i=n(3);t.a=function(e){var t=e.onSubmit,n=Object(a.a)().t;return Object(i.jsx)(o.a,{placeholder:n("Filters.Search"),onSubmit:t})}},676:function(e,t,n){"use strict";var a,r,o=n(68),i=n(1),c=n(52),s=n(19),l=n(74),u=n(32),d=n(222),m=n(3),b=Object(s.default)("div")(a||(a=Object(o.a)(["\n  display: flex;\n\n  .tags-list {\n    display: flex;\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    justify-content: flex-start;\n    align-items: center;\n    column-gap: 10px;\n    padding-bottom: 5px;\n\n    ::-webkit-scrollbar {\n      height: 4px;\n      width: 4px;\n      border: 1px solid transparent;\n    }\n    ::-webkit-scrollbar-track {\n      border-radius: 0;\n      background: rgba(255, 255, 255, 0.2);\n    }\n    ::-webkit-scrollbar-thumb {\n      border-radius: 0;\n      background: #ffffff;\n    }\n\n    .tag {\n      border-width: 2px;\n      border-style: solid;\n      margin-bottom: 0;\n      padding: 10px 20px;\n      line-height: 0.9;\n      text-align: center;\n      max-height: 50px;\n      min-height: 50px;\n      display: flex;\n      align-items: center;\n      box-sizing: border-box;\n      justify-content: center;\n      border-color: ",";\n      color: ",";\n    }\n  }\n  .clear-btn {\n    appearance: none;\n    background: transparent;\n    border: none;\n    outline: none;\n    margin-left: 15px;\n    cursor: pointer;\n    &--desktop {\n      display: ",";\n    }\n    ","\n  }\n"])),(function(e){var t=e.theme;return l.isMobile?t.primaryColor:t.white}),(function(e){var t=e.theme;return l.isMobile?t.primaryColor:t.white}),l.isMobile?"none":"block",l.isMobile&&Object(s.css)(r||(r=Object(o.a)(["\n      svg {\n        path {\n          fill: ",";\n        }\n      }\n    "])),(function(e){return e.theme.primaryColor})));t.a=function(e){var t,n,a=e.filters,r=e.onReset,o=Object(i.useContext)(c.EscolaLMSContext).categoryTree,s=!(null===a||void 0===a||null===(t=a.categories)||void 0===t||!t.length)||!(null===a||void 0===a||!a.name),l=Object(i.useCallback)((function(e){return Object(m.jsx)(u.Text,{className:"tag",children:e})}),[]);return Object(m.jsxs)(b,{children:[Object(m.jsxs)("div",{className:"tags-list",children:[!(null===a||void 0===a||!a.categories)&&(null===(n=o.list)||void 0===n?void 0:n.filter((function(e){var t;return(null===(t=a.categories)||void 0===t?void 0:t.indexOf(e.id))>-1})).map((function(e){return l(e.name)}))),!(null===a||void 0===a||!a.name)&&l(a.name)]}),s&&Object(m.jsx)("button",{type:"button",onClick:function(){r()},className:"clear-btn clear-btn--desktop",children:Object(m.jsx)(d.a,{})})]})}}}]);
//# sourceMappingURL=14.7c0ad0fa.chunk.js.map
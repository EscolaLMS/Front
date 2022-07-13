(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[8],{410:function(e,t,n){"use strict";n.r(t),function(e){var c,i,s=n(78),o=n(50),r=n(0),a=n(622),l=n(10),d=n(17),u=n(23),j=n(464),b=n(63),x=n(158),m=n(777),h=n(449),p=n(246),g=n(44),O=n(54),v=n(14),f=n(242),C=n(244),y=n(625),T=n(135),w=n(245),_=n(626),P=n(8),N=n(159),k=n(232),S=n(471),L=n(560),M=n(457),I=n(237),R=n(1);Object(m.a)();var E=P.default.div(c||(c=Object(o.a)(["\n  section {\n    margin-bottom: 45px;\n    &.with-border {\n      padding-bottom: 45px;\n      border-bottom: 1px solid\n        ",";\n    }\n    &.padding-right {\n      padding-right: 150px;\n      @media (max-width: 991px) {\n        padding-right: 70px;\n      }\n      @media (max-width: 768px) {\n        padding-right: 0;\n      }\n    }\n  }\n  .sidebar-col {\n    padding-bottom: 45px;\n  }\n  .course-main-info {\n    .image-wrapper {\n      @media (max-width: 991px) {\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        margin-bottom: 35px;\n\n        img {\n          display: block;\n          margin: 0 auto;\n        }\n      }\n    }\n    .labels-row {\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-start;\n      column-gap: 20px;\n      margin: 35px 0;\n      @media (max-width: 991px) {\n        margin: 35px 0 0;\n      }\n      @media (max-width: 374px) {\n        flex-direction: column;\n        row-gap: 16px;\n      }\n      &--bottom {\n        column-gap: 45px;\n        margin-top: 120px;\n        margin-bottom: 0;\n        flex-wrap: wrap;\n        @media (max-width: 991px) {\n          column-gap: 0;\n          margin-top: 55px;\n        }\n        @media (max-width: 374px) {\n          flex-direction: row;\n        }\n        .single-label {\n          @media (max-width: 991px) {\n            flex: 0 0 50%;\n            max-width: 50%;\n            margin-bottom: 20px;\n          }\n        }\n      }\n    }\n  }\n  .course-tutor {\n    .ranking-row {\n      display: none !important;\n    }\n  }\n  .course-companies {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    @media (max-width: 768px) {\n      flex-direction: column;\n      align-items: flex-start;\n    }\n\n    .companies-row {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      column-gap: 70px;\n      .single-company {\n        max-height: 85px;\n        max-width: 65px;\n      }\n      @media (max-width: 768px) {\n        column-gap: 0;\n        justify-content: space-between;\n        width: 100%;\n      }\n    }\n\n    p {\n      max-width: 220px;\n      margin-right: 50px;\n    }\n  }\n  .course-description {\n    padding: 50px 45px;\n    margin: 45px 0;\n    background-color: ",";\n    border-radius: ","px;\n    @media (max-width: 768px) {\n      padding: 20px;\n    }\n  }\n  .course-related-courses {\n    background-color: ",";\n    padding: 60px 0 90px;\n    .slick-dots {\n      top: -65px;\n      right: 80px;\n      @media (max-width: 575px) {\n        right: 0;\n      }\n    }\n    .content-container {\n      position: relative;\n      overflow: hidden;\n      &:first-of-type {\n        margin-bottom: 60px;\n        @media (max-width: 768px) {\n          margin-bottom: 40px;\n        }\n      }\n      h4 {\n        @media (max-width: 575px) {\n          padding-right: 50%;\n        }\n      }\n      .slider-wrapper {\n        a {\n          text-decoration: none !important;\n        }\n        @media (max-width: 575px) {\n          margin-left: -50px;\n\n          .image-section,\n          img {\n            max-height: 180px;\n          }\n        }\n      }\n    }\n  }\n  .course-tutor {\n    a {\n      text-decoration: none !important;\n    }\n  }\n  .sidebar-wrapper {\n    width: 100%;\n    left: 0;\n    position: ",";\n    top: ",";\n    bottom: ",";\n    z-index: 100;\n  }\n"])),(function(e){var t=e.theme;return"dark"===t.mode?t.gray1:t.gray5}),(function(e){var t=e.theme;return"dark"===t.mode?t.gray1:t.gray5}),(function(e){return e.theme.cardRadius}),(function(e){var t=e.theme;return"dark"===t.mode?t.gray1:t.gray5}),g.isMobile?"fixed":"sticky",g.isMobile?"unset":"130px",g.isMobile?"0":"unset"),B=Object(P.createGlobalStyle)(i||(i=Object(o.a)(["\n  .ReactModal__Overlay  {\n    z-index: 1500 !important;\n  }\n"])));t.default=function(){var t=Object(r.useState)(void 0),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(r.useState)(),m=Object(s.a)(o,2),P=m[0],z=m[1],A=Object(b.a)().t,F=Object(l.i)().id,D=Object(r.useContext)(u.EscolaLMSContext),U=D.apiUrl,G=D.course,H=D.settings,V=D.fetchCourse,K=D.fetchCourses,W=D.courses,Y=D.fetchCart,J=D.user,q={arrows:!1,infinite:!0,speed:500,slidesToShow:3,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]};return Object(r.useEffect)((function(){K({per_page:6}),F&&(V(Number(F)),Object(k.questionnaireStars)(U,"Course",Number(F)).then((function(e){e.success&&i(e.data?e.data:void 0)})))}),[F]),Object(r.useEffect)((function(){J.value&&Y()}),[J]),G.value?Number(G.value.id)!==Number(F)&&G.loading?Object(R.jsx)(j.a,{}):G.error?Object(R.jsx)("pre",{children:G.error.message}):Object(R.jsxs)(x.a,{metaTitle:G.value.title,children:[Object(R.jsxs)(E,{children:[Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsxs)("div",{className:"col-lg-9 col-md-12",children:[Object(R.jsx)(M.a,{items:[Object(R.jsx)(d.c,{to:"/",children:A("Home")}),Object(R.jsx)(d.c,{to:"/courses",children:A("Courses")}),Object(R.jsx)(v.Text,{size:"12",children:G.value.title})]}),Object(R.jsxs)("section",{className:"course-main-info with-border",children:[Object(R.jsxs)("div",{className:"row flex-lg-row flex-column-reverse",children:[Object(R.jsxs)("div",{className:"col-lg-7",children:[Object(R.jsx)(O.Title,{mobile:g.isMobile,level:2,children:G.value.title}),Object(R.jsxs)("div",{className:"labels-row",children:[Object(R.jsx)("div",{className:"single-label",children:Object(R.jsx)(f.LabelListItem,{mobile:g.isMobile,title:"90%",icon:Object(R.jsx)(N.l,{}),children:A("CoursePage.Recommends")})}),Object(R.jsx)("div",{className:"single-label",children:Object(R.jsx)(f.LabelListItem,{mobile:g.isMobile,title:A("CoursePage.Guarantee"),icon:Object(R.jsx)(N.i,{}),children:A("CoursePage.Satisfaction")})}),Object(R.jsx)("div",{className:"single-label",children:Object(R.jsx)(f.LabelListItem,{mobile:g.isMobile,title:"5.0",icon:Object(R.jsx)(N.k,{}),children:A("CoursePage.AvarageRating")})})]})]}),Object(R.jsx)("div",{className:"col-lg-4",children:G.value.image_path&&Object(R.jsx)("div",{className:"image-wrapper",children:Object(R.jsx)(h.ResponsiveImage,{path:G.value.image_path,srcSizes:[395,790,1580]})})})]}),Object(R.jsxs)("div",{className:"labels-row labels-row--bottom",children:[G.value.categories&&G.value.categories.length>0&&Object(R.jsx)("div",{className:"single-label",children:Object(R.jsx)(f.LabelListItem,{title:A("CoursePage.CourseCategory"),variant:"label",children:G.value.categories[0].name})}),G.value.level&&Object(R.jsx)("div",{className:"single-label",children:Object(R.jsx)(f.LabelListItem,{title:A("CoursePage.Level"),variant:"label",children:G.value.level})}),G.value.active_from&&Object(R.jsx)("div",{className:"single-label",children:Object(R.jsx)(f.LabelListItem,{title:A("CoursePage.StartDate"),variant:"label",children:G.value.active_from?Object(p.default)(new Date(String(G.value.active_from)),"dd/MM/yyyy"):"---"})}),G.value.duration&&Object(R.jsx)("div",{className:"single-label",children:Object(R.jsx)(f.LabelListItem,{title:A("CoursePage.Duration"),variant:"label",children:G.value.duration})})]})]}),Object(R.jsxs)("section",{className:"course-companies",children:[Object(R.jsx)(v.Text,{children:Object(R.jsx)("strong",{children:A("CoursePage.CompaniesTitle")})}),Object(R.jsx)("div",{className:"companies-row",children:H&&H.value.courseLogos&&Object.values(H.value.courseLogos).map((function(e,t){var n;return Object(R.jsx)("div",{className:"single-company",children:Object(R.jsx)(h.ResponsiveImage,{path:(null===H||void 0===H||null===(n=H.value)||void 0===n?void 0:n.courseLogos["logo".concat(t+1)])||"",srcSizes:[100,200,300]})},t)}))})]}),G.value.summary&&""!==Object(I.fixContentForMarkdown)(G.value.summary)&&Object(R.jsx)("section",{className:"course-description",children:Object(R.jsx)(T.MarkdownRenderer,{children:G.value.summary})}),G.value.author&&Object(R.jsx)("section",{className:"course-tutor with-border padding-right",children:Object(R.jsx)(d.c,{to:"/tutors/".concat(G.value.author_id),children:Object(R.jsx)(w.Tutor,{mobile:g.isMobile,avatar:{alt:"".concat(G.value.author.first_name," ").concat(G.value.author.last_name),src:"".concat(e&&Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRYDSN:"https://4c64b083e7ad4b6a9a79bdfb0fd659f7@sentry.etd24.pl/62",REACT_APP_ROUTING_TYPE:"HashRouter",REACT_APP_YBUG_ID:"4a30b8sn4pfpdw7wp4c0",REACT_APP_PUBLIC_API_URL:"https://api-stage.escolalms.com"})&&"https://api-stage.escolalms.com","/api/images/img?path=").concat(G.value.author.path_avatar)||""},rating:{ratingValue:4.1},title:A("CoursePage.Teacher"),fullName:"".concat(G.value.author.first_name," ").concat(G.value.author.last_name),coursesInfo:"8 Curses",description:G.value.author.bio})})}),G.value.description&&""!==Object(I.fixContentForMarkdown)(G.value.description)&&Object(R.jsxs)("section",{className:"course-description-short with-border padding-right",children:[Object(R.jsx)(O.Title,{level:4,children:A("CoursePage.CourseDescriptionTitle")}),Object(R.jsx)(T.MarkdownRenderer,{children:G.value.description})]}),G.value.lessons&&G.value.lessons.length>0&&Object(R.jsx)(y.CourseProgram,{lessons:G.value.lessons,onTopicClick:function(e){return z(e)}}),Object(R.jsx)("section",{className:"course-ratings padding-right",children:c&&c.count_answers>0?Object(R.jsx)(C.Ratings,{mobile:g.isMobile,sumRates:c.sum_rates,avgRate:Number(c.avg_rate),rates:c.rates,header:A("CoursePage.CourseRatingsTitle")}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(O.Title,{level:4,children:A("CoursePage.CourseRatingsTitle")}),Object(R.jsx)(v.Text,{style:{marginTop:20},children:A("CoursePage.CourseRatingsEmpty")})]})})]}),Object(R.jsx)("div",{className:"col-lg-3 col-md-12 sidebar-col",children:Object(R.jsx)("div",{className:"sidebar-wrapper",children:G.value&&Object(R.jsx)(a.a,{course:G.value})})})]})}),Object(R.jsx)("section",{className:"course-related-courses",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsx)("div",{className:"row",children:Object(R.jsxs)("div",{className:"col-lg-9",children:[Object(R.jsxs)("div",{className:"content-container",children:[Object(R.jsx)(O.Title,{level:4,children:A("CoursePage.RelatedCoursesTitle")}),W&&W.list&&Object(R.jsx)(S.a,{courses:W.list.data,sliderSettings:q})]}),Object(R.jsxs)("div",{className:"content-container",children:[Object(R.jsx)(O.Title,{level:4,children:A("CoursePage.InterestTitle")}),W&&W.list&&Object(R.jsx)(S.a,{courses:W.list.data,sliderSettings:q})]})]})})})})]}),Object(R.jsxs)(L.Modal,{onClose:function(){return z(void 0)},visible:!!P,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[Object(R.jsx)(B,{}),P&&Object(R.jsx)(_.a,{topic:P})]})]}):Object(R.jsx)(j.a,{})}}.call(this,n(59))},450:function(e,t,n){"use strict";var c,i=n(50),s=n(8),o=n(455),r=n(1),a=s.default.div(c||(c=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid\n    ",";\n"])),(function(e){var t=e.theme;return"light"===t.mode?t.gray4:t.gray2}));t.a=function(){return Object(r.jsx)(a,{children:Object(r.jsx)("img",{src:o.a,alt:""})})}},451:function(e,t,n){"use strict";var c,i=n(50),s=(n(0),n(8)),o=n(1),r=s.default.div(c||(c=Object(i.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n\n  a {\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])));t.a=function(e){var t=e.children;return Object(o.jsx)(r,{children:t})}},455:function(e,t,n){"use strict";t.a=n.p+"static/media/image.ece42557.svg"},457:function(e,t,n){"use strict";var c,i=n(50),s=(n(0),n(220)),o=n(8),r=n(1),a=o.default.div(c||(c=Object(i.a)(["\n  margin-bottom: 15px;\n  a {\n    text-decoration: none;\n    color: ","!important;\n  }\n"])),(function(e){var t=e.theme;return"dark"===t.mode?t.gray5:t.gray2}));t.a=function(e){var t=e.items;return Object(r.jsx)(a,{children:Object(r.jsx)(s.BreadCrumbs,{items:t})})}},464:function(e,t,n){"use strict";var c,i=n(50),s=n(0),o=n(160),r=n(8),a=n(1),l=r.default.div(c||(c=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"])),(function(e){var t=e.theme;return"dark"===t.mode?t.backgroundDark:t.backgroundLight}));t.a=function(){var e=Object(r.useTheme)();return Object(s.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="inherit"}}),[]),Object(a.jsx)(l,{children:Object(a.jsx)(o.Spin,{color:e.primaryColor})})}},471:function(e,t,n){"use strict";var c,i=n(6),s=n(78),o=n(50),r=n(0),a=n(8),l=n(14),d=n(223),u=n(221),j=n(162),b=n(45),x=n(161),m=n(220),h=n(10),p=n(17),g=n(44),O=n(63),v=n(159),f=n(450),C=n(449),y=n(451),T=n(1),w=a.default.div(c||(c=Object(o.a)(["\n  @media (max-width: 575px) {\n    margin-left: -59px;\n  }\n  .slick-slider {\n    @media (max-width: 575px) {\n      width: calc(100% + 15px);\n    }\n  }\n  .slick-dots {\n    top: -65px;\n    @media (max-width: 575px) {\n      top: -30px !important;\n      right: unset !important;\n      left: 60px !important;\n    }\n  }\n  .row {\n    margin-top: 30px;\n    row-gap: 60px;\n  }\n  .slick-track {\n    display: flex;\n    gap: 0 20px;\n    @media (max-width: 991px) {\n      padding-bottom: 20px;\n    }\n  }\n\n  .slick-slide {\n    height: inherit;\n\n    > div {\n      display: flex;\n      height: 100%;\n    }\n  }\n"])));t.a=function(e){var t=e.courses,n=e.sliderSettings,c=Object(r.useState)(!0),o=Object(s.a)(c,1)[0],_=Object(h.g)(),P=Object(a.useTheme)(),N=Object(O.a)().t;return Object(T.jsx)(w,{children:t.length>=5||g.isMobile?Object(T.jsx)("div",{children:Object(T.jsx)(d.Slider,{settings:Object(i.a)(Object(i.a)({},n),{},{dots:o}),dotsPosition:"top right",children:t&&t.map((function(e){var t,n;return Object(T.jsx)(y.a,{children:Object(T.jsx)(u.CourseCard,{mobile:g.isMobile,id:e.id,image:Object(T.jsx)(p.c,{to:"/courses/".concat(e.id),children:e.image_path?Object(T.jsx)(C.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):Object(T.jsx)(f.a,{})}),tags:Object(T.jsx)(T.Fragment,{children:null===(t=e.tags)||void 0===t?void 0:t.map((function(e,t){return Object(T.jsx)(j.Badge,{color:P.primaryColor,children:Object(T.jsx)(p.c,{style:{color:P.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),subtitle:e.subtitle?Object(T.jsx)(l.Text,{size:"12",children:Object(T.jsx)(p.c,{style:{color:P.primaryColor},to:"/courses/".concat(e.id),children:Object(T.jsx)("strong",{children:e.subtitle})})}):void 0,title:Object(T.jsx)(p.c,{to:"/courses/".concat(e.id),children:e.title}),categories:Object(T.jsx)(m.BreadCrumbs,{hyphen:"/",items:null===(n=e.categories)||void 0===n?void 0:n.map((function(e){return Object(T.jsx)(p.c,{to:"/courses/?category_id[]=".concat(e.id),children:e.name},e.id)}))}),actions:Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(b.Button,{mode:"secondary",onClick:function(){return _.push("/courses/".concat(e.id))},children:N("Start now")})}),footer:Object(T.jsxs)(T.Fragment,{children:[e.users_count&&e.users_count>0?Object(T.jsx)(x.IconText,{icon:Object(T.jsx)(v.m,{}),text:"".concat(e.users_count," ").concat(N("Students"))}):""," ",e.lessons_count&&e.lessons_count>0?Object(T.jsx)(x.IconText,{icon:Object(T.jsx)(v.h,{}),text:"".concat(e.lessons_count," ").concat(N("Lessons"))}):""]})})},e.id)}))})}):Object(T.jsx)("div",{className:"row",children:t.map((function(e){var t,n;return Object(T.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(T.jsx)(y.a,{children:Object(T.jsx)(u.CourseCard,{mobile:g.isMobile,id:e.id,image:Object(T.jsx)(p.c,{to:"/courses/".concat(e.id),children:e.image_path?Object(T.jsx)(C.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):Object(T.jsx)(f.a,{})}),tags:Object(T.jsx)(T.Fragment,{children:null===(t=e.tags)||void 0===t?void 0:t.map((function(e,t){return Object(T.jsx)(j.Badge,{color:P.primaryColor,children:Object(T.jsx)(p.c,{style:{color:P.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),subtitle:e.subtitle?Object(T.jsx)(l.Text,{size:"12",children:Object(T.jsx)(p.c,{style:{color:P.primaryColor},to:"/courses/".concat(e.id),children:Object(T.jsx)("strong",{children:e.subtitle})})}):void 0,title:Object(T.jsx)(p.c,{to:"/courses/".concat(e.id),children:e.title}),categories:Object(T.jsx)(m.BreadCrumbs,{hyphen:"/",items:null===(n=e.categories)||void 0===n?void 0:n.map((function(e){return Object(T.jsx)(p.c,{to:"/courses/?category_id[]=".concat(e.id),children:e.name},e.id)}))}),actions:Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(b.Button,{mode:"secondary",onClick:function(){return _.push("/courses/".concat(e.id))},children:N("Start now")})}),footer:Object(T.jsxs)(T.Fragment,{children:[e.users_count&&e.users_count>0?Object(T.jsx)(x.IconText,{icon:Object(T.jsx)(v.m,{}),text:"".concat(e.users_count," ").concat(N("Students"))}):""," ",e.lessons_count&&e.lessons_count>0?Object(T.jsx)(x.IconText,{icon:Object(T.jsx)(v.h,{}),text:"".concat(e.lessons_count," ").concat(N("Lessons"))}):""]})})},e.id)})}))})})}},488:function(e,t){},511:function(e,t){},512:function(e,t){},513:function(e,t){},514:function(e,t){},515:function(e,t){},622:function(e,t,n){"use strict";var c=n(0),i=n(23),s=n(31),o=n(624),r=n(623),a=n(159),l=n(63),d=n(10),u=n(17),j=n(44),b=n(54),x=n(8),m=n(1);t.a=function(e){var t,n,h,p,g,O,v,f,C=e.course,y=Object(x.useTheme)(),T=Object(c.useContext)(i.EscolaLMSContext),w=T.cart,_=T.addToCart,P=T.progress,N=T.user,k=T.fetchProgress,S=C.id,L=Object(l.a)().t,M=Object(d.g)().push;Object(c.useEffect)((function(){N&&N.value&&k()}),[N]);var I=Object(c.useMemo)((function(){var e;return null===w||void 0===w||null===(e=w.value)||void 0===e?void 0:e.items.some((function(e){var t;return Number(e.product_id)===Number(null===(t=C.product)||void 0===t?void 0:t.id)}))}),[null===(t=C.product)||void 0===t?void 0:t.id,w]),R=Object(c.useMemo)((function(){return P.value&&-1!==P.value.findIndex((function(e){return e.course.id===S}))}),[P,S]),E=P?null===(n=P.value)||void 0===n?void 0:n.filter((function(e){return e.course.id===S})):[],B=Object(c.useMemo)((function(){var e;return N.value&&R?(E?null===(e=E[0].progress)||void 0===e?void 0:e.filter((function(e){return 1===e.status})):[]).length:0}),[P]);return j.isMobile?Object(m.jsxs)(r.PricingCard,{mobile:!0,children:[Object(m.jsx)(b.Title,{level:5,as:"h5",children:C.title}),Object(m.jsxs)("div",{className:"pricing-card-footer",children:[Object(m.jsxs)("div",{children:[(null===(O=C.product)||void 0===O?void 0:O.price_old)&&Object(m.jsx)("div",{className:"pricing-card-discount",children:Object(m.jsxs)(b.Title,{level:5,as:"h5",children:[null===(v=C.product)||void 0===v?void 0:v.price_old," z\u0142"]})}),Object(m.jsxs)(b.Title,{level:4,as:"h4",children:[null===(f=C.product)||void 0===f?void 0:f.price," z\u0142"]})]}),Object(m.jsx)("div",{children:I?Object(m.jsx)(s.Button,{block:!0,mode:"secondary",onClick:function(){return M("/cart")},children:L("CoursePage.GoToCheckout")}):R?Object(m.jsx)(s.Button,{block:!0,mode:"secondary",onClick:function(){return M("/course/".concat(C.id))},children:L("Attend to Course")}):N.value&&C.product?Object(m.jsx)(s.Button,{block:!0,mode:"secondary",onClick:function(){var e;return _(Number(null===(e=C.product)||void 0===e?void 0:e.id)).then((function(){return M("/cart")}))},children:L("Buy Course")}):C.product?Object(m.jsx)(s.Button,{onClick:function(){return M("/login?referrer=/courses/".concat(C.id))},block:!0,mode:"secondary",children:L("Login to buy")}):Object(m.jsx)(s.Text,{children:L("CoursePage.UnavailableCourse")})})]})]}):Object(m.jsxs)(r.PricingCard,{children:[Object(m.jsx)(b.Title,{level:4,as:"h4",children:C.title}),Object(m.jsxs)("div",{className:"pricing-card-price",children:[Object(m.jsxs)(b.Title,{level:3,as:"h3",children:[(null===(h=C.product)||void 0===h?void 0:h.price)||0," z\u0142"]}),(null===(p=C.product)||void 0===p?void 0:p.price_old)&&Object(m.jsx)("div",{className:"pricing-card-discount",children:Object(m.jsxs)(b.Title,{level:5,as:"h5",children:[null===(g=C.product)||void 0===g?void 0:g.price_old," z\u0142"]})})]}),Object(o.a)(new Date(C.active_to||""))?Object(m.jsx)(s.Text,{children:L("CoursePage.IsFinished")}):I?Object(m.jsx)(s.Button,{mode:"secondary",onClick:function(){return M("/cart")},children:L("CoursePage.GoToCheckout")}):R?Object(m.jsx)(m.Fragment,{children:Object(o.a)(new Date(C.active_from||""))?Object(m.jsx)(s.Button,{onClick:function(){return M("/course/".concat(C.id))},mode:"secondary",children:L("Attend to Course")}):Object(m.jsx)(s.Text,{children:L("CoursePage.NotStarted")})}):N.value&&C.product?Object(m.jsx)(s.Button,{loading:w.loading,mode:"secondary",onClick:function(){var e;return _(Number(null===(e=C.product)||void 0===e?void 0:e.id)).then((function(){return M("/cart")}))},children:L("Buy Course")}):C.product?"":Object(m.jsx)(s.Text,{children:L("CoursePage.UnavailableCourse")}),Object(m.jsxs)(s.Text,{size:"12",children:[" ",L("CoursePage.30Days")]}),Object(m.jsxs)("div",{className:"pricing-card-features",children:[C.duration&&Object(m.jsx)(s.IconText,{icon:Object(m.jsx)(a.e,{}),text:"".concat(L("CoursePage.Duration"),": ").concat(C.duration)}),C.lessons&&Object(m.jsx)(s.IconText,{icon:Object(m.jsx)(a.f,{}),text:"".concat(L("CoursePage.Lessons"),": ").concat(C.lessons.length)}),C.language&&Object(m.jsx)(s.IconText,{icon:Object(m.jsx)(a.f,{}),text:"".concat(L("CoursePage.Language"),": ").concat(C.language)}),C.level&&Object(m.jsx)(s.IconText,{icon:Object(m.jsx)(a.f,{}),text:"".concat(L("CoursePage.Level"),": ").concat(C.level)}),C.users_count?Object(m.jsx)(s.IconText,{icon:Object(m.jsx)(a.f,{}),text:"".concat(L("CoursePage.Students"),": ").concat(C.users_count)}):""]}),N.value?Object(m.jsxs)(s.CourseProgress,{progress:E&&(null===E||void 0===E?void 0:E.length)>0?E[0].progress.length*(B||0)/1e3:0,icon:Object(m.jsx)(a.g,{}),title:L("CoursePage.MyProgress"),children:[Object(m.jsxs)("strong",{style:{fontSize:14},children:[L("CoursePage.Finished")," ",B||0," ",L("CoursePage.Of")," ",E&&(null===E||void 0===E?void 0:E.length)>0?E[0].progress.length:0," ",L("CoursePage.Lessons")]}),Object(m.jsx)("p",{style:{marginTop:9,marginBottom:0},children:L("CoursePage.FinishToGetCertificate")})]}):Object(m.jsxs)(s.Text,{size:"12",children:[Object(m.jsx)(u.c,{to:"/login?referrer=/courses/".concat(C.id),style:{marginRight:"4px",color:y.primaryColor},children:L("CoursePage.Login")}),L("CoursePage.ToSeeProgress")]})]})}},626:function(e,t,n){"use strict";var c=n(0),i=n.n(c),s=n(111),o=n(507),r=n(509),a=n(510),l=n(675),d=n(516),u=n(68),j=n(517),b=n(1);t.a=function(e){var t=e.topic,n=Object(c.useContext)(u.EscolaLMSContext).apiUrl,x=Object(c.useMemo)((function(){var e,c;if(t&&t.topicable_type)switch(t.topicable_type){case s.TopicType.H5P:return Object(b.jsx)(j.H5Player,{id:null===t||void 0===t||null===(e=t.topicable)||void 0===e?void 0:e.value});case s.TopicType.OEmbed:return Object(b.jsx)(o.OEmbedPlayer,{url:null===t||void 0===t||null===(c=t.topicable)||void 0===c?void 0:c.value});case s.TopicType.RichText:return Object(b.jsx)("div",{className:"container-xl",children:Object(b.jsx)(l.MarkdownPlayer,{children:t.topicable.value,onLoad:function(){return console.log("MarkdownPlayer onLoad")}})});case s.TopicType.Video:case s.TopicType.Audio:return Object(b.jsx)(r.AudioVideoPlayer,{url:t.topicable.url});case s.TopicType.Image:return Object(b.jsx)(d.ImagePlayer,{topic:t,onLoad:function(){return console.log("")}});case s.TopicType.Pdf:return Object(b.jsx)(a.PdfPlayer,{url:t.topicable.url});case s.TopicType.Scorm:return Object(b.jsx)("div",{className:"scorm-wrapper",children:Object(b.jsx)("iframe",{title:t.topicable.value,src:"".concat(n,"/api/scorm/play/").concat(t.topicable.uuid)})});default:return Object(b.jsx)("pre",{children:t.topicable_type})}return Object(b.jsx)(i.a.Fragment,{})}),[t,n]);return Object(b.jsx)("div",{className:"topic-preview-modal",children:Object(b.jsx)("div",{className:"topic-preview-modal-content",children:x})})}}}]);
//# sourceMappingURL=8.a5e9b226.chunk.js.map
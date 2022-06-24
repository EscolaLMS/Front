(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[15],{392:function(e,t,n){"use strict";n.r(t);var i,c=n(53),s=n(0),r=n(48),a=n(150),o=n(51),l=n(227),d=n(435),j=n(8),m=n(43),h=n(68),u=n(456),x=n(492),p=n(493),b=n(212),g=n(12),O=n(1),v=j.default.div(i||(i=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: -120px;\n  @media (max-width: 1200px) {\n    margin-top: 0;\n  }\n  @media (max-width: 575px) {\n    margin-top: -30px;\n  }\n  .home-hero {\n    margin-bottom: 45px;\n    padding-top: 42px;\n    order: 1;\n    h1 {\n      margin-top: 0 !important;\n    }\n    @media (max-width: 768px) {\n      margin-bottom: 30px;\n      padding-top: 0;\n      h1 {\n        font-size: 26px;\n      }\n    }\n    button {\n      @media (max-width: 991px) {\n        width: 100%;\n      }\n    }\n  }\n\n  .home-best-courses {\n    margin: 40px 0;\n    order: ",";\n    @media (max-width: 768px) {\n      margin: 30px 0;\n    }\n  }\n\n  .home-newest-courses {\n    order: ",";\n    margin: 40px 0;\n    @media (max-width: 768px) {\n      margin: 30px 0;\n    }\n  }\n\n  .promoted-courses-wrapper {\n    order: ",";\n  }\n\n  .categories-section-wrapper {\n    order: 5;\n  }\n"])),(function(e){return"velvetTheme"===e.theme.theme?3:2}),(function(e){return"orangeTheme"===e.theme.theme?3:4}),(function(e){var t=e.theme;return"orangeTheme"===t.theme?4:"velvetTheme"===t.theme?2:3}));t.default=function(){var e,t,n,i,c,j,f=Object(s.useContext)(r.EscolaLMSContext),w=f.fetchConfig,y=f.categoryTree,T=f.courses,C=f.fetchCourses,N=f.settings,_=Object(g.g)(),k=Object(h.a)().t;Object(s.useEffect)((function(){w(),C({per_page:6})}),[]);var B={arrows:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1201,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0}}]};return Object(O.jsx)(a.a,{metaTitle:k("Home"),children:Object(O.jsxs)(v,{children:[(null===N||void 0===N?void 0:N.homepage)&&(null===N||void 0===N?void 0:N.homepage.heroBannerText)&&""!==(null===(e=N.homepage)||void 0===e?void 0:e.heroBannerText)&&(null===(t=N.homepage)||void 0===t?void 0:t.heroBannerImg)&&""!==(null===(n=N.homepage)||void 0===n?void 0:n.heroBannerImg)&&Object(O.jsx)("section",{className:"home-hero",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(l.Banner,{mobile:m.isMobile,title:Object(O.jsx)(b.MarkdownRenderer,{children:(null===N||void 0===N||null===(i=N.homepage)||void 0===i?void 0:i.heroBannerText)||""}),btnText:k("Homepage.HeroBtnText"),asset:Object(O.jsx)(d.ResponsiveImage,{path:(null===N||void 0===N||null===(c=N.homepage)||void 0===c?void 0:c.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:function(){return _.push("/courses")}})})}),Object(O.jsx)("section",{className:"home-best-courses",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(o.Title,{className:"slider-title",level:3,children:Object(O.jsx)("strong",{children:k("Homepage.CoursesSlider1Title")})}),T&&T.list&&Object(O.jsx)(u.a,{courses:T.list.data,sliderSettings:B})]})}),Object(O.jsx)("section",{className:"home-newest-courses",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(o.Title,{className:"slider-title",level:3,children:Object(O.jsx)("strong",{children:k("Homepage.CoursesSlider2Title")})}),T&&T.list&&Object(O.jsx)(u.a,{courses:T.list.data,sliderSettings:B})]})}),T&&T.list&&T.list.data.length>=6&&Object(O.jsx)("div",{className:"promoted-courses-wrapper",children:Object(O.jsx)(x.a,{courses:T.list.data})}),y&&Object(O.jsx)("div",{className:"categories-section-wrapper",children:Object(O.jsx)(p.a,{categories:(null===(j=y.list)||void 0===j?void 0:j.filter((function(e){return!!e.icon})))||[]})})]})})}},435:function(e,t,n){"use strict";var i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},c=this&&this.__assign||function(){return c=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},c.apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var c=Object.getOwnPropertyDescriptor(t,n);c&&!("get"in c?!t.__esModule:c.writable||c.configurable)||(c={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,c)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ResponsiveImage=void 0;var l,d,j=n(1),m=a(n(8)),h=o(n(214)),u=(0,m.default)("div")(l||(l=i(["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"],["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"])));t.ResponsiveImage=function(e){return(0,j.jsx)(u,{children:(0,j.jsx)(h.default,c({},e))})},t.default=(0,m.withTheme)((0,m.default)(t.ResponsiveImage)(d||(d=i([""],[""]))))},439:function(e,t,n){"use strict";var i,c=n(53),s=n(8),r=n(1),a=s.default.div(i||(i=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid\n    ",";\n"])),(function(e){var t=e.theme;return"light"===t.mode?t.gray4:t.gray2}));t.a=function(){return Object(r.jsx)(a,{})}},440:function(e,t,n){"use strict";var i,c=n(53),s=(n(0),n(8)),r=n(1),a=s.default.div(i||(i=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n\n  a {\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])));t.a=function(e){var t=e.children;return Object(r.jsx)(a,{children:t})}},456:function(e,t,n){"use strict";var i,c=n(6),s=n(91),r=n(53),a=n(0),o=n(8),l=n(17),d=n(215),j=n(213),m=n(154),h=n(52),u=n(153),x=n(211),p=n(12),b=n(15),g=n(43),O=n(68),v=n(151),f=n(439),w=n(435),y=n(440),T=n(1),C=o.default.div(i||(i=Object(r.a)(["\n  @media (max-width: 575px) {\n    margin-left: -50px;\n    .image-section,\n    img {\n      max-height: 180px;\n    }\n  }\n  .slick-slider {\n    @media (max-width: 575px) {\n      width: calc(100% + 15px);\n    }\n  }\n  .slick-dots {\n    top: -65px;\n    @media (max-width: 575px) {\n      top: -30px;\n      right: unset;\n      left: 50px;\n    }\n  }\n\n  .slick-track {\n    display: flex;\n    gap: 0 20px;\n  }\n\n  .slick-slide {\n    height: inherit;\n\n    > div {\n      display: flex;\n      height: 100%;\n    }\n  }\n"])));t.a=function(e){var t=e.courses,n=e.sliderSettings,i=Object(a.useState)(!0),r=Object(s.a)(i,1)[0],N=Object(p.g)(),_=Object(o.useTheme)(),k=Object(O.a)().t;return Object(T.jsx)(C,{children:Object(T.jsx)(d.Slider,{settings:Object(c.a)(Object(c.a)({},n),{},{dots:r}),dotsPosition:"top right",children:t&&t.map((function(e){var t,n;return Object(T.jsx)(y.a,{children:Object(T.jsx)(j.CourseCard,{mobile:g.isMobile,id:e.id,image:Object(T.jsx)(b.c,{to:"/courses/".concat(e.id),children:e.image_path?Object(T.jsx)(w.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):Object(T.jsx)(f.a,{})}),tags:Object(T.jsx)(T.Fragment,{children:null===(t=e.tags)||void 0===t?void 0:t.map((function(e,t){return Object(T.jsx)(m.Badge,{color:_.primaryColor,children:Object(T.jsx)(b.c,{style:{color:_.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),subtitle:e.subtitle?Object(T.jsx)(l.Text,{size:"12",children:Object(T.jsx)(b.c,{style:{color:_.primaryColor},to:"/courses/".concat(e.id),children:Object(T.jsx)("strong",{children:e.subtitle})})}):void 0,title:Object(T.jsx)(b.c,{to:"/courses/".concat(e.id),children:e.title}),categories:Object(T.jsx)(x.BreadCrumbs,{hyphen:"/",items:null===(n=e.categories)||void 0===n?void 0:n.map((function(e){return Object(T.jsx)(b.c,{to:"/courses/?ids[]=".concat(e.id),children:e.name},e.id)}))}),actions:Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(h.Button,{mode:"secondary",onClick:function(){return N.push("/courses/".concat(e.id))},children:k("Start now")})}),footer:Object(T.jsxs)(T.Fragment,{children:[e.users_count&&e.users_count>0?Object(T.jsx)(u.IconText,{icon:Object(T.jsx)(v.m,{}),text:"".concat(e.users_count," ").concat(k("Students"))}):""," ",e.lessons_count&&e.lessons_count>0?Object(T.jsx)(u.IconText,{icon:Object(T.jsx)(v.h,{}),text:"".concat(e.lessons_count," ").concat(k("Lessons"))}):""]})})},e.id)}))})})}},492:function(e,t,n){"use strict";var i,c=n(53),s=(n(0),n(51)),r=n(17),a=n(52),o=n(213),l=n(221),d=n(154),j=n(68),m=n(12),h=n(15),u=n(8),x=n(43),p=n(439),b=n(435),g=n(211),O=n(440),v=n(1),f=u.default.section(i||(i=Object(c.a)(['\n  margin: 40px 0;\n  @media (max-width: 768px) {\n    margin: 30px 0;\n  }\n  .container {\n    position: relative;\n    padding-top: 55px;\n    padding-bottom: 35px;\n    z-index: 1;\n    &:after {\n      position: absolute;\n      content: "";\n      width: ',";\n      height: 100%;\n      background: ",";\n      left: 50%;\n      transform: translate(-50%, 0);\n      top: 0;\n      z-index: -1;\n      opacity: ",";\n      border-radius: ",";\n\n      @media (max-width: 1200px) {\n        background: ",";\n      }\n    }\n  }\n  .small-padding {\n    padding-left: 10px;\n    padding-right: 10px;\n\n    @media (max-width: 991px) {\n      padding-left: 15px;\n      padding-right: 15px;\n    }\n\n    &-wrapper {\n      padding-left: 10px;\n      padding-right: 10px;\n      @media (max-width: 991px) {\n        padding-left: 5px;\n        padding-right: 5px;\n      }\n    }\n  }\n  .header-wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 55px;\n\n    button {\n      @media (max-width: 1200px) {\n        display: none;\n      }\n    }\n  }\n  .main-col-1 {\n    @media (max-width: 1200px) {\n      order: 2;\n    }\n  }\n  .main-col-2 {\n    @media (max-width: 1200px) {\n      order: 1;\n    }\n  }\n  .main-col-3 {\n    @media (max-width: 1200px) {\n      order: 3;\n    }\n  }\n  .mobile-hide {\n    @media (max-width: 1200px) {\n      display: none;\n    }\n  }\n  .show-more-btn {\n    display: none;\n    @media (max-width: 1200px) {\n      display: block;\n    }\n  }\n  .course-wrapper {\n    background-color: ",";\n    padding: ",";\n    margin-bottom: 20px;\n    &--small {\n      .course-section {\n        margin-top: 0;\n      }\n    }\n    &--hidden-section {\n      .course-section {\n        display: none;\n      }\n    }\n    &--big {\n      padding: 0;\n    }\n    .lesson-container {\n      display: none;\n    }\n  }\n"])),x.isMobile?"100%":"calc(100% + 100px)",(function(e){var t=e.theme;return"orangeTheme"===t.theme&&"light"===t.mode?t.gray4:"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"}),(function(e){return"dark"===e.theme.mode?.1:1}),(function(e){return e.theme.radius}),(function(e){return"orangeTheme"===e.theme.theme?"linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 100%)":"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"}),(function(e){var t=e.theme;return"orangeTheme"===t.theme&&"dark"===t.mode?t.backgroundDark:"orangeTheme"===t.theme&&"light"===t.mode?t.backgroundLight:"transparent"}),(function(e){return"orangeTheme"===e.theme.theme?"12px 10px 1px 10px":0}));t.a=function(e){var t,n,i,c,x,w,y,T=e.courses,C=Object(m.g)(),N=Object(u.useTheme)(),_=Object(j.a)().t,k="dark"===N.mode?N.white:N.black;return Object(v.jsx)(f,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"header-wrapper",children:[Object(v.jsx)(s.Title,{level:3,children:_("Homepage.AwardedCoursesTitle")}),Object(v.jsx)(a.Button,{mode:"outline",onClick:function(){return C.push("/courses")},children:_("Homepage.AwardedCoursesBtnText")})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-xl-4 small-padding main-col-1",children:Object(v.jsxs)("div",{className:"row justify-content-end",children:[Object(v.jsx)("div",{className:"col-6 small-padding-wrapper",children:Object(v.jsx)("div",{className:"course-wrapper course-wrapper--small",children:Object(v.jsx)(O.a,{children:Object(v.jsx)(o.CourseCard,{id:Number(T[0].id),title:"",tags:Object(v.jsx)(v.Fragment,{children:null===(t=T[0].tags)||void 0===t?void 0:t.map((function(e,t){return Object(v.jsx)(d.Badge,{color:N.primaryColor,children:Object(v.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(v.jsx)(h.c,{to:"/courses/".concat(T[0].id),children:T[0].image_path?Object(v.jsx)(b.ResponsiveImage,{path:T[0].image_path,alt:T[0].title,srcSizes:[300,600,900]}):Object(v.jsx)(p.a,{})}),subtitle:Object(v.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(v.jsx)(h.c,{style:{color:k},to:"/courses/".concat(T[0].id),children:Object(v.jsx)("strong",{children:T[0].title})})})})})})}),Object(v.jsx)("div",{className:"col-6 small-padding-wrapper",children:Object(v.jsx)("div",{className:"course-wrapper course-wrapper--small",children:Object(v.jsx)(O.a,{children:Object(v.jsx)(o.CourseCard,{id:Number(T[1].id),title:"",tags:Object(v.jsx)(v.Fragment,{children:null===(n=T[1].tags)||void 0===n?void 0:n.map((function(e,t){return Object(v.jsx)(d.Badge,{color:N.primaryColor,children:Object(v.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(v.jsx)(h.c,{to:"/courses/".concat(T[1].id),children:T[1].image_url?Object(v.jsx)(b.ResponsiveImage,{path:T[1].image_path,alt:T[1].title,srcSizes:[300,600,900]}):Object(v.jsx)(p.a,{})}),subtitle:Object(v.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(v.jsx)(h.c,{style:{color:k},to:"/courses/".concat(T[1].id),children:Object(v.jsx)("strong",{children:T[1].title})})})})})})}),Object(v.jsx)("div",{className:"col-lg-9 small-padding-wrapper mobile-hide",children:Object(v.jsx)("div",{className:"course-wrapper course-wrapper--small",children:Object(v.jsx)(O.a,{children:Object(v.jsx)(o.CourseCard,{id:Number(T[2].id),title:"",tags:Object(v.jsx)(v.Fragment,{children:null===(i=T[2].tags)||void 0===i?void 0:i.map((function(e,t){return Object(v.jsx)(d.Badge,{color:N.primaryColor,children:Object(v.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(v.jsx)(h.c,{to:"/courses/".concat(T[2].id),children:T[2].image_url?Object(v.jsx)(b.ResponsiveImage,{path:T[2].image_path,alt:T[2].title,srcSizes:[300,600,900]}):Object(v.jsx)(p.a,{})}),subtitle:Object(v.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(v.jsx)(h.c,{style:{color:k},to:"/courses/".concat(T[2].id),children:Object(v.jsx)("strong",{children:T[2].title})})})})})})})]})}),Object(v.jsx)("div",{className:"col-xl-5 small-padding main-col-2",children:Object(v.jsx)("div",{className:"course-wrapper course-wrapper--big",children:Object(v.jsx)(l.ImageBubble,{image:{src:T[5].image_url||"",alt:T[5].title||""},header:Object(v.jsx)("div",{style:{textAlign:"right"},children:null===(c=T[5].tags)||void 0===c?void 0:c.map((function(e){return Object(v.jsx)(h.c,{to:"/courses/tag=".concat(e.title),children:Object(v.jsx)(d.Badge,{children:e.title})},e.title)}))}),children:Object(v.jsx)(O.a,{children:Object(v.jsx)(o.CourseCard,{id:Number(T[5].id),title:Object(v.jsx)(h.c,{to:"/courses/".concat(T[5].id),children:T[5].title}),hideImage:!0,buttonText:"Jak to dzia\u0142a",onButtonClick:function(){return C.push("/courses/".concat(T[5].id))},subtitle:Object(v.jsx)(r.Text,{children:Object(v.jsx)("strong",{style:{fontSize:14,display:"inline-block",lineHeight:1.2},children:T[5].title})}),categories:Object(v.jsx)(g.BreadCrumbs,{hyphen:"/",items:(null===(x=T[5].categories)||void 0===x?void 0:x.map((function(e){return Object(v.jsx)(h.c,{style:{color:k},to:"/courses/?ids[]=".concat(e.id),children:e.name},e.id)})))||[]}),onSecondaryButtonClick:function(){return C.push("/courses/".concat(T[5].id))}})})})})}),Object(v.jsx)("div",{className:"col-xl-3 small-padding main-col-3",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-xl-12 col-6 small-padding-wrapper",children:Object(v.jsx)("div",{className:"course-wrapper course-wrapper--small course-wrapper--hidden-section",children:Object(v.jsx)(O.a,{children:Object(v.jsx)(o.CourseCard,{id:Number(T[5].id),title:"",tags:Object(v.jsx)(v.Fragment,{children:null===(w=T[5].tags)||void 0===w?void 0:w.map((function(e,t){return Object(v.jsx)(d.Badge,{color:N.primaryColor,children:Object(v.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(v.jsx)(h.c,{to:"/courses/".concat(T[5].id),children:T[5].image_url?Object(v.jsx)(b.ResponsiveImage,{path:T[5].image_path,alt:T[5].title,srcSizes:[300,600,900]}):Object(v.jsx)(p.a,{})}),subtitle:Object(v.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(v.jsx)(h.c,{style:{color:k},to:"/courses/".concat(T[5].id),children:Object(v.jsx)("strong",{children:T[5].title})})})})})})}),Object(v.jsx)("div",{className:"col-xl-9 col-6 small-padding-wrapper",children:Object(v.jsx)("div",{className:"course-wrapper course-wrapper--small course-wrapper--hidden-section",children:Object(v.jsx)(O.a,{children:Object(v.jsx)(o.CourseCard,{id:Number(T[4].id),title:"",tags:Object(v.jsx)(v.Fragment,{children:null===(y=T[4].tags)||void 0===y?void 0:y.map((function(e,t){return Object(v.jsx)(d.Badge,{color:N.primaryColor,children:Object(v.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(v.jsx)(h.c,{to:"/courses/".concat(T[4].id),children:T[4].image_url?Object(v.jsx)(b.ResponsiveImage,{path:T[4].image_path,alt:T[4].title,srcSizes:[300,600,900]}):Object(v.jsx)(p.a,{})}),subtitle:Object(v.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(v.jsx)(h.c,{style:{color:k},to:"/courses/".concat(T[4].id),children:Object(v.jsx)("strong",{children:T[4].title})})})})})})})]})})]}),Object(v.jsx)(a.Button,{className:"show-more-btn",onClick:function(){return C.push("/courses")},block:!0,mode:"outline",children:_("Homepage.AwardedCoursesBtnText")})]})})}},493:function(e,t,n){"use strict";var i,c=n(6),s=n(91),r=n(53),a=n(51),o=n(153),l=n(215),d=n(220),j=n(43),m=n(68),h=n(0),u=n(8),x=n(151),p=n(12),b=n(1),g=u.default.section(i||(i=Object(r.a)(["\n  overflow: hidden;\n  padding: 60px 0 0;\n  @media (max-width: 768px) {\n    padding: 30px 0;\n  }\n  h3 {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .slider-title {\n    @media (max-width: 575px) {\n      padding-right: 45%;\n    }\n  }\n  .categories-slider {\n    margin-left: -60px;\n    .slick-dots {\n      margin-left: 30px;\n      bottom: 40px;\n    }\n  }\n  .single-category-slide {\n    max-width: 272px;\n    margin: 0 8px;\n    @media (max-width: 390px) {\n      max-width: 230px;\n    }\n    @media (max-width: 330px) {\n      max-width: 200px;\n    }\n  }\n"])));t.a=function(e){var t=e.categories,n=Object(h.useState)(!0),i=Object(s.a)(n,1)[0],r=Object(m.a)().t,u=Object(p.g)();return Object(b.jsx)(g,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(a.Title,{level:3,children:Object(b.jsx)("strong",{children:r("Homepage.CategoriesTitle")})}),j.isMobile?Object(b.jsx)("div",{className:"categories-slider",children:Object(b.jsx)(l.Slider,{settings:Object(c.a)(Object(c.a)({},{arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,centerMode:!0}),{},{dots:i}),dotsPosition:"bottom",children:t.slice(-4).map((function(e){return Object(b.jsx)("div",{className:"single-category-slide",children:Object(b.jsx)(d.CategoryCard,{icon:Object(b.jsx)("img",{src:e.icon,alt:e.name}),title:e.name,buttonText:r("Homepage.CategoryBtnText"),subtitle:Object(b.jsx)(o.IconText,{icon:Object(b.jsx)(x.f,{}),text:"".concat(r("CoursesLength",{count:e.count}))}),onButtonClick:function(){return u.push("/courses/?ids[]=".concat(e.id))},variant:"gradient"})},e.id)}))})}):Object(b.jsx)("div",{className:"row",children:t.slice(-4).map((function(e){return Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(d.CategoryCard,{icon:Object(b.jsx)("img",{src:e.icon,alt:e.name}),title:e.name,buttonText:r("Homepage.CategoryBtnText"),subtitle:Object(b.jsx)(o.IconText,{icon:Object(b.jsx)(x.f,{}),text:"".concat(r("CoursesLength",{count:e.count}))}),onButtonClick:function(){return u.push("/courses/?ids[]=".concat(e.id))},variant:"gradient"})},e.id)}))})]})})}}}]);
//# sourceMappingURL=15.c8c7f61c.chunk.js.map
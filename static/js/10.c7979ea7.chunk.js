(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[10],{619:function(e,n,t){"use strict";t.r(n);var r=t(12),o=t(1),i=t.n(o),c=t(34),a=t(48),s=t(267),l=t(35),u=t(673),d=t(269),p=t(5),f=t(729),b=t(725),v=t(692),j=t(237),h=t(83),m=t(3),g=function(e){var n,t=e.program,r=Object(v.a)(t,"/courses/preview/"),c=r.topic,a=r.lesson,l=r.onNextTopicPreview,u=r.getNextPrevTopic,d=Object(s.a)().t;return Object(o.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[null===c||void 0===c?void 0:c.id,null===a||void 0===a?void 0:a.id]),Object(m.jsx)(i.a.Fragment,{children:Object(m.jsx)("div",{className:"course-program course-program-page",children:Object(m.jsx)("div",{className:"course-program-container",children:Object(m.jsxs)("div",{className:"course-program-wrapper course-program-wrapper-preview",children:[Object(m.jsxs)("div",{className:"course-program-player",children:[Object(m.jsxs)("div",{className:"course-program-player-content",children:[Object(m.jsx)("h2",{children:null===c||void 0===c?void 0:c.title}),c&&c.introduction&&Object(m.jsx)(h.Col,{sm:12,md:12,lg:12,children:Object(m.jsx)("div",{className:"container-md",children:Object(m.jsx)(j.MarkdownRenderer,{children:c.introduction})})}),Object(m.jsx)("div",{className:"course-program-player-content__wrapper",style:Object(p.a)({},(null===c||void 0===c||null===(n=c.json)||void 0===n?void 0:n.wrapperStyle)||{}),children:Object(m.jsx)(f.a,{preview:!0,lessonId:Number(null===a||void 0===a?void 0:a.id),topicId:Number(null===c||void 0===c?void 0:c.id),isThereAnotherTopic:!!u(Number(null===c||void 0===c?void 0:c.id))})})]}),Object(m.jsxs)(h.Row,{children:[a&&a.summary&&Object(m.jsx)(h.Col,{sm:12,md:12,lg:12,children:Object(m.jsx)("div",{className:"course-program-summary",children:Object(m.jsx)(j.MarkdownRenderer,{children:a.summary})})}),c&&c.summary&&Object(m.jsx)(h.Col,{sm:12,md:12,lg:12,children:Object(m.jsx)("div",{className:"course-program-summary",children:Object(m.jsx)(j.MarkdownRenderer,{children:c.summary})})})]}),Object(m.jsx)("div",{className:"course-program-player-next",children:Object(m.jsxs)("button",{className:"default-btn default-btn-equal",onClick:function(){return l()},children:[Object(m.jsxs)("div",{className:"course-program-player-next-button__wrapper",children:[d("Next Topic")," >"]}),Object(m.jsx)("span",{})]})})]}),Object(m.jsx)(b.a,{course:t,lessonId:Number(null===a||void 0===a?void 0:a.id),topicId:Number(null===c||void 0===c?void 0:c.id)})]})})})})},x=t(189),O=function(e){var n,t,c=e.program,a=null===c||void 0===c||null===(n=c.scorm)||void 0===n||null===(t=n.scos)||void 0===t?void 0:t.find((function(e){return void 0!==e.entry_url})),s=null===a||void 0===a?void 0:a.uuid,u=Object(o.useRef)(null),d=Object(o.useState)(0),p=Object(r.a)(d,2),f=p[0],b=p[1],v=Object(o.useContext)(l.EscolaLMSContext).apiUrl;return Object(o.useEffect)((function(){var e,n,t,r;u.current&&b((null===(e=u.current)||void 0===e||null===(n=e.contentWindow)||void 0===n||null===(t=n.document)||void 0===t||null===(r=t.body)||void 0===r?void 0:r.scrollHeight)||0)}),[u]),a||s?Object(m.jsx)(i.a.Fragment,{children:Object(m.jsx)("div",{className:"container-fluid course-program",children:Object(m.jsx)("div",{className:"course-program-player scorm",style:{height:"".concat(610+f,"px")},children:Object(m.jsx)("iframe",{title:"scorm-player",ref:u,src:"".concat(v,"/api/scorm/play/").concat(s),scrolling:"no"})})})}):Object(m.jsx)(i.a.Fragment,{})};n.default=function(){var e,n,t=Object(s.a)().t,r=Object(c.i)().id,i=Object(o.useContext)(l.EscolaLMSContext),p=i.program,f=i.fetchProgram;return Object(o.useEffect)((function(){r&&f(Number(r))}),[r,f]),p.loading?Object(m.jsx)(u.a,{}):p.error?Object(m.jsx)(x.a,{children:Object(m.jsxs)("div",{className:"alert alert-danger",role:"alert",children:[Object(m.jsx)("h4",{className:"alert-heading",children:t("Error")}),Object(m.jsxs)("p",{children:[" ",p.error.message||p.error.error]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{className:"mb-0",children:[t("CoursePage.Preview.SeeOther"),Object(m.jsx)(a.c,{to:"/courses",children:t("Courses")}),"."]})]})}):p.value&&null!==p&&void 0!==p&&null!==(e=p.value)&&void 0!==e&&null!==(n=e.scorm)&&void 0!==n&&n.id?Object(m.jsx)(d.a,{children:Object(m.jsx)(O,{program:p.value})}):p.value&&p.value.lessons&&p.value.lessons.length?Object(m.jsxs)(d.a,{children:[Object(m.jsx)(g,{program:p.value}),";"]}):Object(m.jsx)(u.a,{})}},673:function(e,n,t){"use strict";var r,o=t(74),i=t(1),c=t(270),a=t(20),s=t(3),l=a.default.div(r||(r=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"])),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__background:n.background}));n.a=function(){var e=Object(a.useTheme)();return Object(i.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="inherit"}}),[]),Object(s.jsx)(l,{children:Object(s.jsx)(c.Spin,{color:e.primaryColor})})}},691:function(e,n,t){"use strict";var r=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},o.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var o=Object.getOwnPropertyDescriptor(n,t);o&&!("get"in o?!n.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,o)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),c=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&i(n,e,t);return c(n,e),n},s=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0}),n.Upload=void 0;var l,u,d=t(3),p=t(1),f=a(t(20)),b=t(30),v=t(45),j=t(28),h=t(28),m=999,g=(0,f.default)("div")(l||(l=r(["\n  width: 100%;\n  text-align: center;\n  position: relative;\n  > a {\n    margin-top: 0.5em;\n  }\n  > input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ",';\n    opacity: 0.001;\n  }\n\n  .wrapper {\n    width: 100%;\n    position: relative;\n    cursor: pointer;\n    :after {\n      content: "";\n      padding-top: 100%;\n      display: block;\n    }\n\n    .border,\n    img,\n    input {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n    img {\n      display: block;\n      object-fit: cover;\n      z-index: ',";\n    }\n    img,\n    svg {\n      transition: transform 0.5s ease-out;\n    }\n    .border {\n      overflow: hidden;\n      border-width: 1px;\n      opacity: 1;\n      border: ",";\n      border-radius: ","px;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n\n      > svg {\n        position: relative;\n        z-index: ",";\n      }\n    }\n  }\n\n  &:hover {\n    .wrapper .border > svg {\n      transform: scale(1.5);\n      z-index: ",";\n    }\n    img {\n      transform: scale(1.1);\n    }\n    a:after {\n      transform: scaleX(0);\n      transform-origin: bottom left;\n    }\n  }\n"],["\n  width: 100%;\n  text-align: center;\n  position: relative;\n  > a {\n    margin-top: 0.5em;\n  }\n  > input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ",';\n    opacity: 0.001;\n  }\n\n  .wrapper {\n    width: 100%;\n    position: relative;\n    cursor: pointer;\n    :after {\n      content: "";\n      padding-top: 100%;\n      display: block;\n    }\n\n    .border,\n    img,\n    input {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n    img {\n      display: block;\n      object-fit: cover;\n      z-index: ',";\n    }\n    img,\n    svg {\n      transition: transform 0.5s ease-out;\n    }\n    .border {\n      overflow: hidden;\n      border-width: 1px;\n      opacity: 1;\n      border: ",";\n      border-radius: ","px;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n\n      > svg {\n        position: relative;\n        z-index: ",";\n      }\n    }\n  }\n\n  &:hover {\n    .wrapper .border > svg {\n      transform: scale(1.5);\n      z-index: ",";\n    }\n    img {\n      transform: scale(1.1);\n    }\n    a:after {\n      transform: scaleX(0);\n      transform-origin: bottom left;\n    }\n  }\n"])),m,998,(function(e){var n=e.theme;return"1px solid ".concat((0,j.getStylesBasedOnTheme)(n.mode,n.gray1,n.gray3))}),(function(e){return e.theme.cardRadius}),997,998),x=function(){return(0,d.jsx)("svg",o({width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,d.jsx)("path",{d:"M20 10.636V17.636C20 17.9012 19.8946 18.1556 19.7071 18.3431C19.5196 18.5306 19.2652 18.636 19 18.636H1C0.734784 18.636 0.48043 18.5306 0.292893 18.3431C0.105357 18.1556 0 17.9012 0 17.636V10.636C0 10.3708 0.105357 10.1164 0.292893 9.92888C0.48043 9.74134 0.734784 9.63599 1 9.63599C1.26522 9.63599 1.51957 9.74134 1.70711 9.92888C1.89464 10.1164 2 10.3708 2 10.636V16.636H18V10.636C18 10.3708 18.1054 10.1164 18.2929 9.92888C18.4804 9.74134 18.7348 9.63599 19 9.63599C19.2652 9.63599 19.5196 9.74134 19.7071 9.92888C19.8946 10.1164 20 10.3708 20 10.636V10.636ZM10 0.635986C9.73478 0.635986 9.48043 0.741343 9.29289 0.928879C9.10536 1.11642 9 1.37077 9 1.63599V5.63599H5C4.73478 5.63599 4.48043 5.74134 4.29289 5.92888C4.10536 6.11642 4 6.37077 4 6.63599C4 6.9012 4.10536 7.15556 4.29289 7.34309C4.48043 7.53063 4.73478 7.63599 5 7.63599H9V11.636C9 11.9012 9.10536 12.1556 9.29289 12.3431C9.48043 12.5306 9.73478 12.636 10 12.636C10.2652 12.636 10.5196 12.5306 10.7071 12.3431C10.8946 12.1556 11 11.9012 11 11.636V7.63599H15C15.2652 7.63599 15.5196 7.53063 15.7071 7.34309C15.8946 7.15556 16 6.9012 16 6.63599C16 6.37077 15.8946 6.11642 15.7071 5.92888C15.5196 5.74134 15.2652 5.63599 15 5.63599H11V1.63599C11 1.37077 10.8946 1.11642 10.7071 0.928879C10.5196 0.741343 10.2652 0.635986 10 0.635986V0.635986Z",fill:"#4A4A4A"})}))};n.Upload=function(e){var n=(0,v.useTranslation)().t,t=e.onChange,r=e.url,i=e.loading,c=e.buttonTitle,a=void 0===c?n("Upload.button"):c,l=e.className,u=void 0===l?"":l,f=s(e,["onChange","url","loading","buttonTitle","className"]),j=(0,p.useState)(r),m=j[0],O=j[1];(0,p.useEffect)((function(){O(r)}),[r]);var y=(0,p.useCallback)((function(e){if(e.target.files&&e.target.files[0]){var n=e.target.files[0],r=new FileReader;r.readAsDataURL(n),r.onload=function(){var e;return O(null===(e=r.result)||void 0===e?void 0:e.toString())},r.onerror=function(e){return console.log("reading error",e)}}t&&t(e)}),[]),w=a?(0,h.getUniqueId)("upload"):null;return(0,d.jsxs)(g,o({className:"wellms-component upload ".concat(u)},{children:[(0,d.jsx)("input",o({type:"file"},f,{onChange:y},w?{"aria-labelledby":w}:{"aria-label":n("Upload.button")})),(0,d.jsx)("div",o({className:"wrapper"},{children:(0,d.jsxs)("div",o({className:"border"},{children:[i&&(0,d.jsx)(b.Spin,{}),m&&(0,d.jsx)("img",{src:m,alt:"Upload preview"}),(0,d.jsx)(x,{})]}))})),a&&(0,d.jsx)(b.Link,o({underline:!0,id:w},{children:a}))]}))},n.default=(0,f.withTheme)((0,f.default)(n.Upload)(u||(u=r([""],[""]))))},692:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(12),o=t(55),i=t(1),c=t(34);function a(e){var n,t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/course/",s=Object(i.useContext)(o.EscolaLMSContext),l=s.sendProgress,u=s.getNextPrevTopic,d=s.progress,p=Object(i.useState)(!1),f=Object(r.a)(p,2),b=f[0],v=f[1],j=Object(c.i)(),h=j.lessonID,m=j.topicID,g=Object(c.g)().push,x=h||e.lessons[0].id,O=m||(e&&e.lessons&&e.lessons[0]&&e.lessons[0].topics&&(null===e||void 0===e||null===(n=e.lessons[0])||void 0===n||null===(t=n.topics[0])||void 0===t?void 0:t.id)||0),y=Object(i.useMemo)((function(){return e.lessons.find((function(e){return e.id===Number(x)}))}),[e,x]),w=Object(i.useMemo)((function(){return y&&y.topics&&y.topics.find((function(e){return e.id===Number(O)}))}),[y,O]),_=Object(i.useCallback)((function(){e.id&&l(e.id,[{topic_id:Number(O),status:1}]).then((function(){var n=u(Number(O));n&&g("".concat(a).concat(e.id,"/").concat(n.lesson_id,"/").concat(n.id),null)}))}),[O,e,g,u,l,a]),C=Object(i.useCallback)((function(){e.id&&l(e.id,[{topic_id:Number(O),status:1}]).then((function(){var n=u(Number(O),!1);n&&g("".concat(a).concat(e.id,"/").concat(n.lesson_id,"/").concat(n.id),null)}))}),[O,e,g,u,l,a]),P=Object(i.useCallback)((function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=u(Number(O),n);t&&g("".concat(a).concat(e.id,"/").concat(null===t||void 0===t?void 0:t.lesson_id,"/").concat(null===t||void 0===t?void 0:t.id))}),[x,O,e,e.id,g,a]);return{topic:w,lesson:y,onNextTopic:_,onPrevTopic:C,getNextPrevTopic:u,isNextTopicButtonDisabled:b,disableNextTopicButton:v,onNextTopicPreview:P,sendProgress:l,progress:d}}},698:function(e,n){},701:function(e,n,t){"use strict";var r,o,i,c=t(12),a=t(74),s=t(1),l=t(73),u=t(55),d=t(20),p=t(267),f=t(268),b=t(3),v=d.default.div(r||(r=Object(a.a)(["\n  > button {\n    position: fixed;\n    right: 5px;\n    bottom: 5px;\n    z-index: 9999;\n    svg path {\n      fill: white;\n    }\n  }\n  iframe {\n    border: none;\n    display: block;\n    width: 100%;\n  }\n  ","\n"])),(function(e){return e.fullview?Object(d.css)(o||(o=Object(a.a)(["\n        iframe {\n          position: fixed;\n          top: 90px;\n          left: 0;\n          height: calc(100% - 90px - 80px);\n\n          z-index: 9999;\n        }\n      "]))):Object(d.css)(i||(i=Object(a.a)(["\n        display: flex;\n\n        min-height: 80vh;\n        max-height: 80vh;\n        height: 100vh;\n        iframe {\n          height: 100%;\n        }\n      "])))}));n.a=function(e){var n=e.value,t=Object(s.useContext)(u.EscolaLMSContext).apiUrl,r=Object(p.a)().t,o=Object(s.useState)(!1),i=Object(c.a)(o,2),a=i[0],d=i[1];return Object(b.jsx)("div",{className:"scorm-wrapper",children:Object(b.jsxs)(v,{fullview:a,children:[Object(b.jsxs)(l.Button,{onClick:function(){return d(!a)},children:[" ",r("Scorm.Resize")," ",Object(b.jsx)(f.v,{})]}),Object(b.jsx)("iframe",{title:n.title,src:"".concat(t,"/api/scorm/play/").concat(n.uuid)})]})})}},713:function(e,n){},714:function(e,n){},715:function(e,n){},716:function(e,n){},717:function(e,n){},723:function(e,n,t){"use strict";var r=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},o.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var o=Object.getOwnPropertyDescriptor(n,t);o&&!("get"in o?!n.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,o)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),c=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&i(n,e,t);return c(n,e),n},s=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))};Object.defineProperty(n,"__esModule",{value:!0}),n.ProjectPlayer=void 0;var l,u,d=t(3),p=t(1),f=a(t(20)),b=t(45),v=t(238),j=t(55),h=t(724),m=t(28),g=t(73),x=t(373),O=t(270),y=t(33),w=t(237),_=t(691),C=f.default.div(l||(l=r(["\n  .project-player__upload-input {\n    margin-bottom: 1em;\n    .wrapper {\n      .border img {\n        display: none;\n      }\n\n      &::after {\n        padding-top: 0;\n        aspect-ratio: 16 / 3;\n      }\n    }\n  }\n\n  .project-player__projects-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1em;\n\n    .project-card {\n      width: 100%;\n      max-width: 225px;\n\n      .content {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n      }\n    }\n  }\n"],["\n  .project-player__upload-input {\n    margin-bottom: 1em;\n    .wrapper {\n      .border img {\n        display: none;\n      }\n\n      &::after {\n        padding-top: 0;\n        aspect-ratio: 16 / 3;\n      }\n    }\n  }\n\n  .project-player__projects-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1em;\n\n    .project-card {\n      width: 100%;\n      max-width: 225px;\n\n      .content {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n      }\n    }\n  }\n"]))),P=function(){return(0,d.jsx)("svg",o({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,d.jsx)("path",{d:"M5 2C5 0.89543 5.89543 0 7 0H13C14.1046 0 15 0.895431 15 2V4H16.9897C16.9959 3.99994 17.0021 3.99994 17.0083 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H17.9311L17.0638 18.1425C16.989 19.1891 16.1182 20 15.0689 20H4.93112C3.88184 20 3.01096 19.1891 2.9362 18.1425L2.06888 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H2.99174C2.99795 3.99994 3.00414 3.99994 3.01032 4H5V2ZM7 4H13V2H7V4ZM4.07398 6L4.93112 18H15.0689L15.926 6H4.07398ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z",fill:"currentColor"})}))},N=function(e){var n=e.projects,t=e.onDeleteSuccess,r=e.onDeleteError,i=e.className,c=(0,b.useTranslation)().t,a=(0,p.useContext)(j.EscolaLMSContext),l=a.token,u=a.apiUrl,f=(0,p.useState)([]),w=f[0],_=f[1],C=(0,p.useCallback)((function(e){return function(){if(!l)return console.warn("noToken");_((function(n){return s(s([],n,!0),[e],!1)})),(0,h.removeProject)(u,l,e).then((function(){return null===t||void 0===t?void 0:t()})).catch((function(){return null===r||void 0===r?void 0:r()})).finally((function(){return _((function(n){return n.filter((function(n){return n!==e}))}))}))}}),[l,u]);return(0,d.jsxs)("div",o({className:i},{children:[n.loading&&!n.data.length&&(0,d.jsx)(O.Spin,{}),n.data.map((function(e,n){var t=e.id,r=e.created_at;return(0,d.jsxs)(x.Card,o({className:"project-card"},{children:[(0,d.jsxs)("div",o({className:"project-card__details"},{children:[(0,d.jsxs)(y.Text,o({className:"project-card__title"},{children:[c("ProjectPlayer.ProjectFile")," ".concat(n+1)]})),(0,d.jsx)(y.Text,o({className:"project-card__date"},{children:(0,v.format)(new Date(r),m.DATETIME_FORMAT)}))]})),(0,d.jsx)(g.Button,o({className:"project-card__delete-btn",mode:"icon",loading:w.includes(t),onClick:C(t)},{children:(0,d.jsx)(P,{})}))]}),t)}))]}))};n.ProjectPlayer=function(e){var n=e.course_id,t=e.topic,r=e.onSuccess,i=e.onError,c=e.className,a=(0,p.useContext)(j.EscolaLMSContext),s=a.token,l=a.apiUrl,u=(0,p.useState)({data:[],loading:!1}),f=u[0],b=u[1],v=(0,p.useState)(!1),m=v[0],g=v[1],x=(0,p.useCallback)((function(){if(!s)return console.error("noToken");b((function(e){return o(o({},e),{loading:!0})})),(0,h.fetchProjects)(l,s,{course_id:n,topic_id:null===t||void 0===t?void 0:t.id}).then((function(e){e.success&&b((function(n){return o(o({},n),{data:e.data})}))})).catch((function(e){return console.warn(e)})).finally((function(){return b((function(e){return o(o({},e),{loading:!1})}))}))}),[s,l,n,null===t||void 0===t?void 0:t.id]);(0,p.useEffect)((function(){x()}),[x]);var O=(0,p.useCallback)((function(e){var n;if((null===(n=e.currentTarget.files)||void 0===n?void 0:n[0])&&s){g(!0);var o={topic_id:(null===t||void 0===t?void 0:t.id)+"",file:e.currentTarget.files[0]};(0,h.addProject)(l,s,o).then((function(){x(),null===r||void 0===r||r()})).catch((function(){null===i||void 0===i||i()})).finally((function(){g(!1)}))}}),[l,s,null===t||void 0===t?void 0:t.id,x]);return(0,d.jsxs)(C,o({className:"wellms-component"+" ".concat(c),"data-testid":"project-player"},{children:[t.description&&(0,d.jsx)(w.MarkdownRenderer,o({className:"project-player__description"},{children:t.description})),(0,d.jsx)(_.Upload,{className:"project-player__upload-input",name:"project_file",onChange:O,disabled:m}),(0,d.jsx)(N,{className:"project-player__projects-list",projects:f,onDeleteSuccess:x})]}))},n.default=(0,f.withTheme)((0,f.default)(n.ProjectPlayer)(u||(u=r([""],[""]))))},724:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(n){i(n)}}function a(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}s((r=r.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(a){i=[6,a],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},c=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.removeProject=n.fetchProjects=n.addProject=void 0;var s=a(t(39)),l=t(67);n.addProject=function(e,n,t,c){return o(this,void 0,void 0,(function(){var o;return i(this,(function(i){return o=new FormData,Object.entries(t).forEach((function(e){var n=e[0],t=e[1];o.append(n,t)})),[2,(0,s.default)("".concat(e,"/api/topic-project-solutions"),r({method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n),"Current-timezone":(0,l.currentTimezone)()},data:o},c||{}))]}))}))},n.fetchProjects=function(e,n,t,a){var u=t.per_page,d=t.page,p=c(t,["per_page","page"]);return o(this,void 0,void 0,(function(){return i(this,(function(t){return[2,(0,s.default)("".concat(e,"/api/topic-project-solutions"),r({method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n),"Current-timezone":(0,l.currentTimezone)()},params:r({per_page:null!==u&&void 0!==u?u:15,page:null!==d&&void 0!==d?d:1},p)},a||{}))]}))}))},n.removeProject=function(e,n,t,c){return o(this,void 0,void 0,(function(){return i(this,(function(o){return[2,(0,s.default)("".concat(e,"/api/topic-project-solutions/").concat(t),r({method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n),"Current-timezone":(0,l.currentTimezone)()}},c||{}))]}))}))}},725:function(e,n,t){"use strict";var r,o,i=t(12),c=t(74),a=t(1),s=t.n(a),l=t(240),u=t(55),d=t(34),p=t(82),f=t(20),b=t(692),v=t(30),j=t(110),h=t(3),m=f.default.aside(r||(r=Object(c.a)(["\n  padding-bottom: 100px;\n  .show-agenda-btn {\n    width: 100%;\n  }\n  .agenda-wrapper {\n    ","\n  }\n"])),p.isMobile&&Object(f.css)(o||(o=Object(c.a)(["\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n      transform: translate(100%, 0);\n      transition: transform 0.25s;\n      overflow: scroll;\n      padding: 40px 0 55px;\n      z-index: 10;\n      background-color: ",";\n      &--visible {\n        transform: translate(0, 0);\n      }\n      .hide-agenda-btn {\n        display: block;\n        margin: 0 15px 0 auto;\n      }\n    "])),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__background:n.background})));n.a=function(e){var n=e.course,t=(e.lessonId,e.topicId),r=e.onCourseFinish,o=Object(b.a)(n),c=o.disableNextTopicButton,f=o.sendProgress,g=o.progress,x=Object(a.useContext)(u.EscolaLMSContext).courseProgressDetails,O=Object(d.g)(),y=Object(a.useState)(!1),w=Object(i.a)(y,2),_=w[0],C=w[1],P=((null===n||void 0===n?void 0:n.lessons)||[]).filter((function(e){var n;return e&&e.topics&&(null===e||void 0===e||null===(n=e.topics)||void 0===n?void 0:n.length)>0})),N=Object(a.useContext)(u.EscolaLMSContext).topicIsFinished,T=n.lessons.map((function(e){return e.topics})),k=[].concat.apply([],T),M=Object(a.useCallback)((function(){c&&c(!1),null!==n&&void 0!==n&&n.id&&f(null===n||void 0===n?void 0:n.id,[{topic_id:Number(t),status:1}])}),[P,t,c,f]),S=Object(a.useMemo)((function(){var e,t=n.id;return x&&x.byId&&x.byId[Number(t)]&&x.byId[Number(t)].value?x.byId[Number(t)].value:g&&g.value&&(null===(e=g.value.find((function(e){return e.course.id===Number(t)})))||void 0===e?void 0:e.progress)}),[g,n]),I=k.filter((function(e){return N(e.id)||(null===S||void 0===S?void 0:S.some((function(n){return n.topic_id===e.id&&1===n.status})))})).map((function(e){return e.id}));return n||P?Object(h.jsxs)(m,{children:[p.isMobile&&Object(h.jsx)(v.Button,{mode:"outline",className:"show-agenda-btn",onClick:function(){return C(!0)},children:Object(j.t)("CourseProgram.ShowAgenda")}),Object(h.jsxs)("div",{className:"".concat(_?"agenda-wrapper agenda-wrapper--visible":"agenda-wrapper"),children:[p.isMobile&&Object(h.jsx)(v.Button,{className:"hide-agenda-btn",mode:"secondary",onClick:function(){return C(!1)},children:"\u2715"}),Object(h.jsx)(l.CourseAgenda,{onNextTopicClick:function(){var e;n.lessons.forEach((function(n,r,o){n.topics&&n.topics.forEach((function(i,c){i.id===t&&(e=n.topics&&n.topics[c+1]?n.topics[c+1]&&n.topics[c+1]:o[r+1]?o[r+1].topics&&o[r+1].topics[0]:o[0].topics&&o[0].topics[0])}))})),e&&(O.push("/course/".concat(n.id,"/").concat(e.lesson_id,"/").concat(e.id)),C(!1))},mobile:p.isMobile,lessons:n.lessons,currentTopicId:t,finishedTopicIds:I,onMarkFinished:function(){return M()},onTopicClick:function(e){O.push("/course/".concat(n.id,"/").concat(e.lesson_id,"/").concat(e.id)),C(!1)},onCourseFinished:function(){return null===r||void 0===r?void 0:r()}})]})]}):Object(h.jsx)(s.a.Fragment,{})}},729:function(e,n,t){"use strict";var r,o,i=t(74),c=t(1),a=t.n(c),s=t(35),l=t(20),u=t(237),d=t(3),p=l.default.div(r||(r=Object(i.a)(["\n  h1 {\n    font-size: 2em;\n  }\n  h2 {\n    font-size: 1.5em;\n  }\n  h3 {\n    font-size: 1.17em;\n  }\n  h4 {\n    font-size: 1em;\n  }\n  h5 {\n    font-size: 0.9em;\n  }\n"]))),f=function(e){var n=e.value,t=e.onLoad;return Object(c.useEffect)((function(){n&&t&&t()}),[n,t]),Object(d.jsx)(p,{children:n&&Object(d.jsx)(u.MarkdownRenderer,{children:n})})},b=t(690),v=t(718),j=t(711),h=t(709),m=t(719),g=t(712),x=t(723),O=t(82),y=t(701),w=t(722),_=t.n(w),C=Object(l.default)(g.PdfPlayer)(o||(o=Object(i.a)(["\n  .course-pdf-player {\n    .react-pdf__Page__svg,\n    svg {\n      width: 100% !important;\n      height: auto !important;\n    }\n  }\n"])));n.a=function(e){var n,t,r,o=e.lessonId,i=e.topicId,l=e.preview,u=void 0!==l&&l,p=e.disableNextTopicButton,g=e.customNoCompletedEventsIds,w=void 0===g?["http://h5p.org/libraries/H5P.GuessTheAnswer-1.5"]:g,P=e.isThereAnotherTopic,N=void 0===P||P,T=Object(c.useContext)(s.EscolaLMSContext),k=T.program,M=T.topicPing,S=T.topicIsFinished,I=T.sendProgress,E=T.h5pProgress,A=Object(c.useMemo)((function(){var e,n,t,r;return null===(e=k.value)||void 0===e||null===(n=e.lessons)||void 0===n||null===(t=n.find((function(e){return e.id===o})))||void 0===t||null===(r=t.topics)||void 0===r?void 0:r.find((function(e){return e.id===i}))}),[k,o,i]),z=Object(c.useCallback)((function(){var e,n;null!==k&&void 0!==k&&null!==(e=k.value)&&void 0!==e&&e.id&&I(null===k||void 0===k||null===(n=k.value)||void 0===n?void 0:n.id,[{topic_id:Number(i),status:1}])}),[k,i,I]),H=Object(c.useCallback)((function(e){var n,t,r;(N&&p&&p(!Boolean(null===e||void 0===e||null===(n=e.statement)||void 0===n||null===(t=n.verb)||void 0===t?void 0:t.id)),null!==e&&void 0!==e&&e.statement)&&E(String(null===k||void 0===k||null===(r=k.value)||void 0===r?void 0:r.id),Number(i),null===e||void 0===e?void 0:e.statement)}),[k,i,E,p,w]);if(Object(c.useEffect)((function(){var e=(null===A||void 0===A?void 0:A.id)&&S(A.id);N&&p&&e&&p(!e&&!Boolean(null===A||void 0===A?void 0:A.can_skip))}),[p,A,N,S]),Object(c.useEffect)((function(){if(!u){var e=function(){return i&&!S(i)&&M(i)},n=setInterval((function(){e()}),5e3);return e(),function(){return clearInterval(n)}}}),[M,u,i,S]),!A)return Object(d.jsx)(a.a.Fragment,{});if(null===(n=A.topicable)||void 0===n||!n.value)return Object(d.jsx)("pre",{className:"error",children:"Error: topic.topicable?.value is missing"});if(A.topicable_type)switch(A.topicable_type){case b.API.TopicType.H5P:return Object(d.jsx)(m.H5Player,{onXAPI:function(e){return H(e)},h5pObject:A.topicable.content});case b.API.TopicType.OEmbed:return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h.OEmbedPlayer,{url:A.topicable.value},i)});case b.API.TopicType.RichText:return Object(d.jsx)(f,{value:A.topicable.value});case b.API.TopicType.Video:return Object(d.jsx)(j.AudioVideoPlayer,{mobile:O.isMobile,url:A.topicable.url,light:!0,onFinish:function(){return z()}});case b.API.TopicType.Image:return Object(d.jsx)(v.ImagePlayer,{topic:A,onLoad:function(){return z()}});case b.API.TopicType.Audio:return Object(d.jsx)(j.AudioVideoPlayer,{mobile:O.isMobile,audio:!0,url:A.topicable.url,light:!0,onFinish:function(){return z()}});case b.API.TopicType.Pdf:return Object(d.jsx)(C,{url:A.topicable.url,pageConfig:{renderMode:"svg",className:"course-pdf-player"}});case b.API.TopicType.Scorm:return Object(d.jsx)(y.a,{value:{title:A.title,uuid:A.topicable.uuid}});case b.API.TopicType.GiftQuiz:return Object(d.jsx)(_.a,{topic:A});case b.API.TopicType.Project:return Object(d.jsx)(x.ProjectPlayer,{course_id:null!==(t=null===(r=k.value)||void 0===r?void 0:r.id)&&void 0!==t?t:0,topic:A,onSuccess:z});default:return Object(d.jsx)("pre",{children:A.topicable_type})}return Object(d.jsx)("pre",{children:"loading... (or error)"})}}}]);
//# sourceMappingURL=10.c7979ea7.chunk.js.map
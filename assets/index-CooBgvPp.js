import{q as J,f as le,r as b,j as d,M as _e,s as ce,bS as je,d as j,bT as be,bU as ye,D as xe,a4 as me,h as Z,a3 as ge,bV as Pe,F as we,v as Y,bW as Ce,S as Te,O as ee,bX as Se,k as Oe,b as ue,m as F,bY as Ee,G as $e,l as de,bZ as Me,b_ as fe,bR as Ne}from"./index-Duhnd3NG.js";import{P as ke,A as S,_ as De,a as oe,I as Ae,O as Ie,H as ze}from"./index-BiBG2kUC.js";import{U as He}from"./Upload-BLd0xmK-.js";import{u as Ve}from"./index-CnyZdFlA.js";const Be=J.div`
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.9em;
  }
  .resources-container {
    padding: 24px 0;
    margin-top: 24px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${({theme:e})=>e.primaryColor};
  }
`,Fe=({value:e,onLoad:o,resources:t})=>{const{t:a}=le(),r=t&&t.length>0;return b.useEffect(()=>{e&&o&&o()},[e,o]),d.jsxs(Be,{children:[e&&d.jsx(_e.MarkdownRenderer,{children:e}),r&&d.jsxs("div",{className:"resources-container",children:[d.jsx(ce.Text,{children:a("CoursePage.Resources")}),t.map(({name:n,url:v})=>d.jsx(je.Download,{href:v,fileName:n}))]})]})};var pe={},A={},L=j&&j.__assign||function(){return L=Object.assign||function(e){for(var o,t=1,a=arguments.length;t<a;t++){o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},L.apply(this,arguments)},te=j&&j.__awaiter||function(e,o,t,a){function r(n){return n instanceof t?n:new t(function(v){v(n)})}return new(t||(t=Promise))(function(n,v){function f(p){try{s(a.next(p))}catch(C){v(C)}}function _(p){try{s(a.throw(p))}catch(C){v(C)}}function s(p){p.done?n(p.value):r(p.value).then(f,_)}s((a=a.apply(e,o||[])).next())})},ne=j&&j.__generator||function(e,o){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},a,r,n,v;return v={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function f(s){return function(p){return _([s,p])}}function _(s){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,r&&(n=s[0]&2?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,r=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){t.label=s[1];break}if(s[0]===6&&t.label<n[1]){t.label=n[1],n=s;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(s);break}n[2]&&t.ops.pop(),t.trys.pop();continue}s=o.call(e,t)}catch(p){s=[6,p],r=0}finally{a=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},Le=j&&j.__rest||function(e,o){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)o.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t},Ue=j&&j.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0});A.removeProject=A.fetchProjects=A.addProject=void 0;var re=Ue(be),ae=ye;function qe(e,o,t,a){return te(this,void 0,void 0,function(){var r;return ne(this,function(n){return r=new FormData,Object.entries(t).forEach(function(v){var f=v[0],_=v[1];r.append(f,_)}),[2,(0,re.default)("".concat(e,"/api/topic-project-solutions"),L({method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(o),"Current-timezone":(0,ae.currentTimezone)()},data:r},a||{}))]})})}A.addProject=qe;function Re(e,o,t,a){var r=t.per_page,n=t.page,v=Le(t,["per_page","page"]);return te(this,void 0,void 0,function(){return ne(this,function(f){return[2,(0,re.default)("".concat(e,"/api/topic-project-solutions"),L({method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(o),"Current-timezone":(0,ae.currentTimezone)()},params:L({per_page:r??15,page:n??1},v)},a||{}))]})})}A.fetchProjects=Re;function Ze(e,o,t,a){return te(this,void 0,void 0,function(){return ne(this,function(r){return[2,(0,re.default)("".concat(e,"/api/topic-project-solutions/").concat(t),L({method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(o),"Current-timezone":(0,ae.currentTimezone)()}},a||{}))]})})}A.removeProject=Ze;(function(e){var o=j&&j.__makeTemplateObject||function(l,u){return Object.defineProperty?Object.defineProperty(l,"raw",{value:u}):l.raw=u,l},t=j&&j.__assign||function(){return t=Object.assign||function(l){for(var u,c=1,h=arguments.length;c<h;c++){u=arguments[c];for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(l[g]=u[g])}return l},t.apply(this,arguments)},a=j&&j.__createBinding||(Object.create?function(l,u,c,h){h===void 0&&(h=c);var g=Object.getOwnPropertyDescriptor(u,c);(!g||("get"in g?!u.__esModule:g.writable||g.configurable))&&(g={enumerable:!0,get:function(){return u[c]}}),Object.defineProperty(l,h,g)}:function(l,u,c,h){h===void 0&&(h=c),l[h]=u[c]}),r=j&&j.__setModuleDefault||(Object.create?function(l,u){Object.defineProperty(l,"default",{enumerable:!0,value:u})}:function(l,u){l.default=u}),n=j&&j.__importStar||function(l){if(l&&l.__esModule)return l;var u={};if(l!=null)for(var c in l)c!=="default"&&Object.prototype.hasOwnProperty.call(l,c)&&a(u,l,c);return r(u,l),u},v=j&&j.__spreadArray||function(l,u,c){if(c||arguments.length===2)for(var h=0,g=u.length,$;h<g;h++)($||!(h in u))&&($||($=Array.prototype.slice.call(u,0,h)),$[h]=u[h]);return l.concat($||Array.prototype.slice.call(u))};Object.defineProperty(e,"__esModule",{value:!0}),e.ProjectPlayer=void 0;var f=d,_=b,s=n(xe),p=ge,C=Pe,x=Z,w=A,P=we,O=Y,i=Ce,m=Te,k=ce,K=me(),X=He,G=s.default.div(se||(se=o([`
  .project-player__upload-input {
    margin-bottom: 1em;
    .wrapper {
      .border img {
        display: none;
      }

      &::after {
        padding-top: 0;
        aspect-ratio: 16 / 3;
      }
    }
  }

  .project-player__projects-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    .project-card {
      width: 100%;
      max-width: 225px;

      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
    }
  }
`],[`
  .project-player__upload-input {
    margin-bottom: 1em;
    .wrapper {
      .border img {
        display: none;
      }

      &::after {
        padding-top: 0;
        aspect-ratio: 16 / 3;
      }
    }
  }

  .project-player__projects-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    .project-card {
      width: 100%;
      max-width: 225px;

      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
    }
  }
`]))),W=function(){return(0,f.jsx)("svg",t({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,f.jsx)("path",{d:"M5 2C5 0.89543 5.89543 0 7 0H13C14.1046 0 15 0.895431 15 2V4H16.9897C16.9959 3.99994 17.0021 3.99994 17.0083 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H17.9311L17.0638 18.1425C16.989 19.1891 16.1182 20 15.0689 20H4.93112C3.88184 20 3.01096 19.1891 2.9362 18.1425L2.06888 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H2.99174C2.99795 3.99994 3.00414 3.99994 3.01032 4H5V2ZM7 4H13V2H7V4ZM4.07398 6L4.93112 18H15.0689L15.926 6H4.07398ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z",fill:"currentColor"})}))},y=function(l){var u=l.projects,c=l.onDeleteSuccess,h=l.onDeleteError,g=l.className,$=(0,p.useTranslation)().t,U=(0,_.useContext)(x.EscolaLMSContext),V=U.token,M=U.apiUrl,I=(0,_.useState)([]),Q=I[0],B=I[1],q=(0,_.useCallback)(function(N){return function(){if(!V)return console.warn("noToken");B(function(z){return v(v([],z,!0),[N],!1)}),(0,w.removeProject)(M,V,N).then(function(){return c==null?void 0:c()}).catch(function(){return h==null?void 0:h()}).finally(function(){return B(function(z){return z.filter(function(D){return D!==N})})})}},[V,M]);return(0,f.jsxs)("div",t({className:g},{children:[u.loading&&!u.data.length&&(0,f.jsx)(m.Spin,{}),u.data.map(function(N,z){var D=N.id,H=N.created_at;return(0,f.jsxs)(i.Card,t({className:"project-card"},{children:[(0,f.jsxs)("div",t({className:"project-card__details"},{children:[(0,f.jsxs)(k.Text,t({className:"project-card__title"},{children:[$("ProjectPlayer.ProjectFile")," ".concat(z+1)]})),(0,f.jsx)(k.Text,t({className:"project-card__date"},{children:(0,C.format)(new Date(H),P.DATETIME_FORMAT)}))]})),(0,f.jsx)(O.Button,t({className:"project-card__delete-btn",mode:"icon",loading:Q.includes(D),onClick:q(D)},{children:(0,f.jsx)(W,{})}))]}),D)})]}))},E=function(l){var u=l.course_id,c=l.topic,h=l.onSuccess,g=l.onError,$=l.className,U=l.onProjectsChange,V=(0,_.useContext)(x.EscolaLMSContext),M=V.token,I=V.apiUrl,Q=(0,_.useState)({data:[],loading:!1}),B=Q[0],q=Q[1],N=(0,_.useState)(!1),z=N[0],D=N[1];(0,_.useEffect)(function(){U&&U(B)},[B]);var H=(0,_.useCallback)(function(){if(!M)return console.error("noToken");q(function(T){return t(t({},T),{loading:!0})}),(0,w.fetchProjects)(I,M,{course_id:u,topic_id:c==null?void 0:c.id}).then(function(T){T.success&&q(function(R){return t(t({},R),{data:T.data})})}).catch(function(T){return console.warn(T)}).finally(function(){return q(function(T){return t(t({},T),{loading:!1})})})},[M,I,u,c==null?void 0:c.id]);(0,_.useEffect)(function(){H()},[H]);var ve=(0,_.useCallback)(function(T){var R;if(!(!(!((R=T.currentTarget.files)===null||R===void 0)&&R[0])||!M)){D(!0);var he={topic_id:(c==null?void 0:c.id)+"",file:T.currentTarget.files[0]};(0,w.addProject)(I,M,he).then(function(){H(),h==null||h()}).catch(function(){g==null||g()}).finally(function(){D(!1)})}},[I,M,c==null?void 0:c.id,H]);return(0,f.jsxs)(G,t({className:"wellms-component"+" ".concat($),"data-testid":"project-player"},{children:[c.description&&(0,f.jsx)(K.MarkdownRenderer,t({className:"project-player__description"},{children:c.description})),(0,f.jsx)(X.Upload,{className:"project-player__upload-input",name:"project_file",onChange:ve,disabled:z}),(0,f.jsx)(y,{className:"project-player__projects-list",projects:B,onDeleteSuccess:H})]}))};e.ProjectPlayer=E,e.default=(0,s.withTheme)((0,s.default)(e.ProjectPlayer)(ie||(ie=o([""],[""]))));var se,ie})(pe);const Ge=J.div`
  > button {
    position: fixed;
    right: 5px;
    bottom: 5px;
    z-index: 9999;
    svg path {
      fill: white;
    }
  }
  iframe {
    border: none;
    display: block;
    width: 100%;
  }
  ${e=>e.fullview?ee`
        iframe {
          position: fixed;
          top: 90px;
          left: 0;
          height: calc(100% - 90px - 80px);

          z-index: 9999;
        }
      `:ee`
        display: flex;

        min-height: 80vh;
        max-height: 80vh;
        height: 100vh;
        iframe {
          height: 100%;
        }
      `}
`,We=({value:e})=>{const{apiUrl:o}=b.useContext(Z.EscolaLMSContext),{t}=le(),[a,r]=b.useState(!1);return d.jsx("div",{className:"scorm-wrapper",children:d.jsxs(Ge,{fullview:a,children:[d.jsxs(Y.Button,{onClick:()=>r(!a),children:[" ",t("Scorm.Resize")," ",d.jsx(Se,{})]}),d.jsx("iframe",{title:e.title,src:`${o}/api/scorm/play/${e.uuid}`})]})})},Qe=J(ke.PdfPlayer)`
  .course-pdf-player {
    .react-pdf__Page__svg,
    svg {
      width: 100% !important;
      height: auto !important;
    }
  }
`,rt=({topic:e,preview:o=!1,disableNextTopicButton:t,isThereAnotherTopic:a=!0,onXAPI:r,onVideoEnd:n,onAudioEnd:v,onPdfEnd:f,onQuizEnd:_,onProjectEnd:s,onProjectsChange:p})=>{var P,O;const{program:C,topicPing:x,topicIsFinished:w}=b.useContext(Oe.EscolaLMSContext);if(b.useEffect(()=>{const i=(e==null?void 0:e.id)&&w(e.id);a&&t&&i&&t(!i&&!(e!=null&&e.can_skip))},[t,e,a,w]),b.useEffect(()=>{if(!o){const i=()=>(e==null?void 0:e.id)&&!w(e==null?void 0:e.id)&&x(e==null?void 0:e.id),m=setInterval(()=>{i()},5e3);return i(),()=>clearInterval(m)}},[x,o,e==null?void 0:e.id,w]),!e)return d.jsx(ue.Fragment,{});if(!((P=e.topicable)!=null&&P.value))return d.jsx("pre",{className:"error",children:"Error: topic.topicable?.value is missing"});if(e.topicable_type)switch(e.topicable_type){case S.TopicType.H5P:return d.jsx(ze.H5Player,{onXAPI:i=>r==null?void 0:r(i),h5pObject:e.topicable.content,hideActionButtons:!0});case S.TopicType.OEmbed:return d.jsx(d.Fragment,{children:d.jsx(Ie.OEmbedPlayer,{url:e.topicable.value},e.id)});case S.TopicType.RichText:return d.jsx(Fe,{value:e.topicable.value,resources:e.resources});case S.TopicType.Video:return d.jsx(oe.AudioVideoPlayer,{mobile:F,url:e.topicable.url,light:!0,onTopicEnd:n});case S.TopicType.Image:return d.jsx(Ae.ImagePlayer,{topic:e,onLoad:()=>{}});case S.TopicType.Audio:return d.jsx(oe.AudioVideoPlayer,{mobile:F,audio:!0,url:e.topicable.url,light:!0,onTopicEnd:v});case S.TopicType.Pdf:return d.jsx(Qe,{url:e.topicable.url,pageConfig:{renderMode:"svg",className:"course-pdf-player"},onTopicEnd:f});case S.TopicType.Scorm:return d.jsx(We,{value:{title:e.title,uuid:e.topicable.uuid}});case S.TopicType.GiftQuiz:return d.jsx(De,{topic:e,onTopicEnd:_});case S.TopicType.Project:return d.jsx(pe.ProjectPlayer,{course_id:((O=C.value)==null?void 0:O.id)??0,topic:e,onSuccess:s,onProjectsChange:p});default:return d.jsx("pre",{children:e.topicable_type})}return d.jsx("pre",{children:"loading... (or error)"})};var Ye=Ee();function Je(e,o="/course/"){var G,W;const{sendProgress:t,getNextPrevTopic:a,progress:r,courseProgressDetails:n}=b.useContext(Z.EscolaLMSContext),[v,f]=b.useState(!1),{lessonID:_,topicID:s}=$e(),{push:p}=de(),C=b.useMemo(()=>Me((e==null?void 0:e.lessons)??[]),[e==null?void 0:e.lessons]),x=b.useMemo(()=>fe((e==null?void 0:e.lessons)??[]),[e==null?void 0:e.lessons]),w=_?Number(_):(G=C==null?void 0:C[0])==null?void 0:G.id,P=s?Number(s):(W=x==null?void 0:x[0])==null?void 0:W.id,O=b.useMemo(()=>C.find(y=>y.id===w),[C,w]),i=b.useMemo(()=>x.find(y=>y.id===P),[x,P]),m=b.useMemo(()=>{var y;return((y=x.at(-1))==null?void 0:y.id)===(i==null?void 0:i.id)},[x,i==null?void 0:i.id]),k=b.useCallback(()=>{e.id&&t(e.id,[{topic_id:Number(P),status:1}]).then(()=>{const y=a(Number(P));y&&p(`${o}${e.id}/${y.lesson_id}/${y.id}`,null)})},[P,e,p,a,t,o]),K=b.useCallback(()=>{const y=a(Number(P),!1);if(e.id&&(i!=null&&i.can_skip)){t(e.id,[{topic_id:Number(P),status:1}]).then(()=>{y&&p(`${o}${e.id}/${y.lesson_id}/${y.id}`,null)});return}y&&p(`${o}${e.id}/${y.lesson_id}/${y.id}`,null)},[P,e,p,a,t,o,i]),X=b.useCallback((y=!0)=>{const E=a(Number(P),y);E&&p(`${o}${e.id}/${E==null?void 0:E.lesson_id}/${E==null?void 0:E.id}`)},[w,P,e,e.id,p,o]);return{topic:i,lesson:O,onNextTopic:k,onPrevTopic:K,getNextPrevTopic:a,isNextTopicButtonDisabled:v,disableNextTopicButton:f,onNextTopicPreview:X,sendProgress:t,progress:r,courseProgressDetails:n,isLastTopic:m}}const Ke=J.aside`
  padding-bottom: 100px;
  .show-agenda-btn {
    width: 100%;
  }
  .agenda-wrapper {
    ${F&&ee`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transform: translate(100%, 0);
      transition: transform 0.25s;
      overflow: scroll;
      padding: 40px 0 55px;
      z-index: 10;
      background-color: ${({theme:e})=>e.mode==="dark"?e.dm__background:e.background};
      &--visible {
        transform: translate(0, 0);
      }
      .hide-agenda-btn {
        display: block;
        margin: 0 15px 0 auto;
      }
    `}
  }
`,at=({course:e,topicId:o,onCompleteTopic:t,onCourseFinish:a})=>{var O;const{progress:r}=Je(e),{courseProgressDetails:n,user:v}=b.useContext(Z.EscolaLMSContext),f=de(),[_,s]=b.useState(!1),p=((e==null?void 0:e.lessons)||[]).filter(i=>{var m;return(((m=i==null?void 0:i.topics)==null?void 0:m.length)??0)>0}),{topicIsFinished:C}=b.useContext(Z.EscolaLMSContext),x=b.useMemo(()=>fe(e.lessons??[]),[e.lessons]),w=b.useMemo(()=>{var m;const i=e.id;return n&&n.byId&&n.byId[Number(i)]&&n.byId[Number(i)].value?n.byId[Number(i)].value:r&&r.value&&((m=r.value.find(k=>k.course.id===Number(i)))==null?void 0:m.progress)},[r,e]),P=x.filter(i=>C(i.id)||(w==null?void 0:w.some(m=>m.topic_id===i.id&&m.status===1))).map(i=>i.id);return!e&&!p?d.jsx(ue.Fragment,{}):d.jsxs(Ke,{children:[F&&d.jsx(Y.Button,{mode:"outline",className:"show-agenda-btn",onClick:()=>s(!0),children:Ne("CourseProgram.ShowAgenda").toString()}),d.jsxs("div",{className:`${_?"agenda-wrapper agenda-wrapper--visible":"agenda-wrapper"}`,children:[F&&d.jsx(Y.Button,{className:"hide-agenda-btn",mode:"secondary",onClick:()=>s(!1),children:"✕"}),d.jsx(Ye.CourseAgenda,{areAllTopicsUnlocked:Ve(Number((O=v.value)==null?void 0:O.id),e),onNextTopicClick:()=>{const i=x.findIndex(k=>k.id===o),m=x==null?void 0:x[i+1];m&&i!==-1&&(f.push(`/course/${e.id}/${m.lesson_id}/${m.id}`),s(!1))},mobile:F,lessons:e.lessons,currentTopicId:o,finishedTopicIds:P,onMarkFinished:()=>t==null?void 0:t(),onTopicClick:i=>{f.push(`/course/${e.id}/${i.lesson_id}/${i.id}`),s(!1)},onCourseFinished:()=>a==null?void 0:a()})]})]})};export{rt as C,We as S,at as a,Je as u};

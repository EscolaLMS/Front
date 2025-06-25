import{a as le,j as _,M as ye,o as ce,bs as be,q as ue,bt as xe,bu as ge,a2 as Pe,a4 as we,D as K,a0 as Te,S as Ee,bv as Ce,bw as Me,a3 as Se,p as de,bx as Oe,ag as re,H as Ie,b as Ne,ae as Ae,c as De,g as se,by as ke}from"./index-DHorRSia.js";import{r as p,R as fe}from"./sentry-DZqhWugq.js";import{S as ze,A as g,_ as Le,P as Be,a as oe,I as He,O as Fe,H as Re}from"./index.esm-eAUGR2Er.js";import{c as x}from"./katex-D1m830yy.js";import{U as Ve}from"./Upload-DYxR5PEU.js";const $e=ue.div`
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
    border-top-color: ${({theme:t})=>t.primaryColor};
  }
`,Ue=({value:t,onLoad:s,resources:e})=>{const{t:o}=le(),a=e&&e.length>0;return p.useEffect(()=>{t&&s&&s()},[t,s]),_.jsxs($e,{children:[t&&_.jsx(ye.MarkdownRenderer,{children:t}),a&&_.jsxs("div",{className:"resources-container",children:[_.jsx(ce.Text,{children:o("CoursePage.Resources")}),e.map(({name:n,url:y})=>_.jsx(be.Download,{href:y,fileName:n}))]})]})};var pe={},R={},U=x&&x.__assign||function(){return U=Object.assign||function(t){for(var s,e=1,o=arguments.length;e<o;e++){s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},U.apply(this,arguments)},ee=x&&x.__awaiter||function(t,s,e,o){function a(n){return n instanceof e?n:new e(function(y){y(n)})}return new(e||(e=Promise))(function(n,y){function f(j){try{i(o.next(j))}catch(C){y(C)}}function P(j){try{i(o.throw(j))}catch(C){y(C)}}function i(j){j.done?n(j.value):a(j.value).then(f,P)}i((o=o.apply(t,s||[])).next())})},te=x&&x.__generator||function(t,s){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,a,n,y;return y={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(y[Symbol.iterator]=function(){return this}),y;function f(i){return function(j){return P([i,j])}}function P(i){if(o)throw new TypeError("Generator is already executing.");for(;e;)try{if(o=1,a&&(n=i[0]&2?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,a=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){e=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){e.label=i[1];break}if(i[0]===6&&e.label<n[1]){e.label=n[1],n=i;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(i);break}n[2]&&e.ops.pop(),e.trys.pop();continue}i=s.call(t,e)}catch(j){i=[6,j],a=0}finally{o=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},qe=x&&x.__rest||function(t,s){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&s.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)s.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(e[o[a]]=t[o[a]]);return e},Ge=x&&x.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(R,"__esModule",{value:!0});R.removeProject=R.fetchProjects=R.addProject=void 0;var ne=Ge(xe),ae=ge;function Ze(t,s,e,o){return ee(this,void 0,void 0,function(){var a;return te(this,function(n){return a=new FormData,Object.entries(e).forEach(function(y){var f=y[0],P=y[1];a.append(f,P)}),[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions"),U({method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(s),"Current-timezone":(0,ae.currentTimezone)()},data:a},o||{}))]})})}R.addProject=Ze;function Qe(t,s,e,o){var a=e.per_page,n=e.page,y=qe(e,["per_page","page"]);return ee(this,void 0,void 0,function(){return te(this,function(f){return[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions"),U({method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(s),"Current-timezone":(0,ae.currentTimezone)()},params:U({per_page:a??15,page:n??1},y)},o||{}))]})})}R.fetchProjects=Qe;function We(t,s,e,o){return ee(this,void 0,void 0,function(){return te(this,function(a){return[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions/").concat(e),U({method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(s),"Current-timezone":(0,ae.currentTimezone)()}},o||{}))]})})}R.removeProject=We;(function(t){var s=x&&x.__makeTemplateObject||function(c,u){return Object.defineProperty?Object.defineProperty(c,"raw",{value:u}):c.raw=u,c},e=x&&x.__assign||function(){return e=Object.assign||function(c){for(var u,d=1,b=arguments.length;d<b;d++){u=arguments[d];for(var w in u)Object.prototype.hasOwnProperty.call(u,w)&&(c[w]=u[w])}return c},e.apply(this,arguments)},o=x&&x.__createBinding||(Object.create?function(c,u,d,b){b===void 0&&(b=d);var w=Object.getOwnPropertyDescriptor(u,d);(!w||("get"in w?!u.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return u[d]}}),Object.defineProperty(c,b,w)}:function(c,u,d,b){b===void 0&&(b=d),c[b]=u[d]}),a=x&&x.__setModuleDefault||(Object.create?function(c,u){Object.defineProperty(c,"default",{enumerable:!0,value:u})}:function(c,u){c.default=u}),n=x&&x.__importStar||function(c){if(c&&c.__esModule)return c;var u={};if(c!=null)for(var d in c)d!=="default"&&Object.prototype.hasOwnProperty.call(c,d)&&o(u,c,d);return a(u,c),u},y=x&&x.__spreadArray||function(c,u,d){if(d||arguments.length===2)for(var b=0,w=u.length,A;b<w;b++)(A||!(b in u))&&(A||(A=Array.prototype.slice.call(u,0,b)),A[b]=u[b]);return c.concat(A||Array.prototype.slice.call(u))};Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectPlayer=void 0;var f=_,P=p,i=n(Pe),j=Te,C=Me,M=K,O=R,m=Se,l=de,I=Ce,S=Ee,q=ce,Z=we(),W=Ve,r=i.default.div(Q||(Q=s([`
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
`]))),X=function(){return(0,f.jsx)("svg",e({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,f.jsx)("path",{d:"M5 2C5 0.89543 5.89543 0 7 0H13C14.1046 0 15 0.895431 15 2V4H16.9897C16.9959 3.99994 17.0021 3.99994 17.0083 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H17.9311L17.0638 18.1425C16.989 19.1891 16.1182 20 15.0689 20H4.93112C3.88184 20 3.01096 19.1891 2.9362 18.1425L2.06888 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H2.99174C2.99795 3.99994 3.00414 3.99994 3.01032 4H5V2ZM7 4H13V2H7V4ZM4.07398 6L4.93112 18H15.0689L15.926 6H4.07398ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z",fill:"currentColor"})}))},$=function(c){var u=c.projects,d=c.onDeleteSuccess,b=c.onDeleteError,w=c.className,A=(0,j.useTranslation)().t,H=(0,P.useContext)(M.EscolaLMSContext),v=H.token,h=H.apiUrl,T=(0,P.useState)([]),E=T[0],D=T[1],L=(0,P.useCallback)(function(N){return function(){if(!v)return console.warn("noToken");D(function(B){return y(y([],B,!0),[N],!1)}),(0,O.removeProject)(h,v,N).then(function(){return d==null?void 0:d()}).catch(function(){return b==null?void 0:b()}).finally(function(){return D(function(B){return B.filter(function(F){return F!==N})})})}},[v,h]);return(0,f.jsxs)("div",e({className:w},{children:[u.loading&&!u.data.length&&(0,f.jsx)(S.Spin,{}),u.data.map(function(N,B){var F=N.id,V=N.created_at;return(0,f.jsxs)(I.Card,e({className:"project-card"},{children:[(0,f.jsxs)("div",e({className:"project-card__details"},{children:[(0,f.jsxs)(q.Text,e({className:"project-card__title"},{children:[A("ProjectPlayer.ProjectFile")," ".concat(B+1)]})),(0,f.jsx)(q.Text,e({className:"project-card__date"},{children:(0,C.format)(new Date(V),m.DATETIME_FORMAT)}))]})),(0,f.jsx)(l.Button,e({className:"project-card__delete-btn",mode:"icon",loading:E.includes(F),onClick:L(F)},{children:(0,f.jsx)(X,{})}))]}),F)})]}))},Y=function(c){var u=c.course_id,d=c.topic,b=c.onSuccess,w=c.onError,A=c.className,H=c.onProjectsChange,v=(0,P.useContext)(M.EscolaLMSContext),h=v.token,T=v.apiUrl,E=(0,P.useState)({data:[],loading:!1}),D=E[0],L=E[1],N=(0,P.useState)(!1),B=N[0],F=N[1];(0,P.useEffect)(function(){H&&H(D)},[D]);var V=(0,P.useCallback)(function(){if(!h)return console.error("noToken");L(function(k){return e(e({},k),{loading:!0})}),(0,O.fetchProjects)(T,h,{course_id:u,topic_id:d==null?void 0:d.id}).then(function(k){k.success&&L(function(G){return e(e({},G),{data:k.data})})}).catch(function(k){return console.warn(k)}).finally(function(){return L(function(k){return e(e({},k),{loading:!1})})})},[h,T,u,d==null?void 0:d.id]);(0,P.useEffect)(function(){V()},[V]);var _e=(0,P.useCallback)(function(k){var G;if(!(!(!((G=k.currentTarget.files)===null||G===void 0)&&G[0])||!h)){F(!0);var je={topic_id:(d==null?void 0:d.id)+"",file:k.currentTarget.files[0]};(0,O.addProject)(T,h,je).then(function(){V(),b==null||b()}).catch(function(){w==null||w()}).finally(function(){F(!1)})}},[T,h,d==null?void 0:d.id,V]);return(0,f.jsxs)(r,e({className:"wellms-component"+" ".concat(A),"data-testid":"project-player"},{children:[d.description&&(0,f.jsx)(Z.MarkdownRenderer,e({className:"project-player__description"},{children:d.description})),(0,f.jsx)(W.Upload,{className:"project-player__upload-input",name:"project_file",onChange:_e,disabled:B}),(0,f.jsx)($,{className:"project-player__projects-list",projects:D,onDeleteSuccess:V})]}))};t.ProjectPlayer=Y,t.default=(0,i.withTheme)((0,i.default)(t.ProjectPlayer)(z||(z=s([""],[""]))));var Q,z})(pe);const Xe=ue.div`
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
  ${t=>t.fullview?re`
        iframe {
          position: fixed;
          top: 90px;
          left: 0;
          height: calc(100% - 90px - 80px);

          z-index: 9999;
        }
      `:re`
        display: flex;

        min-height: 80vh;
        max-height: 80vh;
        height: 100vh;
        iframe {
          height: 100%;
        }
      `}
`,Ye=({value:t})=>{const{apiUrl:s}=p.useContext(K.EscolaLMSContext),{t:e}=le(),[o,a]=p.useState(!1);return _.jsx("div",{className:"scorm-wrapper",children:_.jsxs(Xe,{fullview:o,children:[_.jsxs(de.Button,{onClick:()=>a(!o),children:[" ",e("Scorm.Resize")," ",_.jsx(Oe,{})]}),_.jsx(ze,{uuid:t.uuid,apiUrl:s,serviceWorkerUrl:"/service-worker-scorm.js"})]})})},me=t=>t.reduce((s,e)=>[...s,...me((e==null?void 0:e.lessons)??[]),e],[]),J=t=>t.reduce((s,e)=>[...s,...e.topics??[],...e.lessons?J(e.lessons):[]],[]),ve=(t,s,e=[])=>{const o=[...e],a=t.find(n=>{var y;return(y=n==null?void 0:n.lessons)==null?void 0:y.find(f=>(f==null?void 0:f.id)===(s==null?void 0:s.id))});return a?(o.unshift(a.id),ve(t,a,o)):o},ie=(t,s,e="prev")=>{const o=s.findIndex(n=>n.id===t);return new Map([["prev",s==null?void 0:s[o-1]],["next",s==null?void 0:s[o+1]]]).get(e)},he=fe.createContext({}),Je=()=>p.useContext(he),Ke=[g.TopicType.H5P,g.TopicType.Audio,g.TopicType.Video,g.TopicType.Project,g.TopicType.GiftQuiz,g.TopicType.Pdf],st=({children:t})=>{var H;const{sendProgress:s,program:e,fetchProgram:o,courseProgressDetails:a,fetchCourseProgress:n}=p.useContext(K.EscolaLMSContext),[y,f]=p.useState(!1),[P,i]=p.useState(!1),{id:j,lessonID:C,topicID:M}=Ie(),O=Ne(),m=(H=a.byId)==null?void 0:H[j],l=p.useMemo(()=>e.value,[e.value]),I=p.useMemo(()=>me((l==null?void 0:l.lessons)??[]),[l==null?void 0:l.lessons]),S=p.useMemo(()=>J((l==null?void 0:l.lessons)??[]),[l==null?void 0:l.lessons]),q=p.useCallback(v=>I.find(h=>h.id===v),[I]),Z=p.useCallback(v=>S.find(h=>h.id===v),[S]),W=p.useMemo(()=>ie(Number(M),S),[S,M]),r=p.useMemo(()=>Z(Number(M)),[Z,M]),X=p.useMemo(()=>ie(Number(M),S,"next"),[S,M]),$=p.useMemo(()=>r&&q(r==null?void 0:r.lesson_id),[q,r]),Y=p.useCallback(v=>{(l==null?void 0:l.id)!==void 0&&(r==null?void 0:r.id)!==void 0&&(f(!1),s(l.id,[{topic_id:r.id,status:g.CourseProgressItemElementStatus.COMPLETE}]),v&&i(!0))},[s,l==null?void 0:l.id,r==null?void 0:r.id]),Q=p.useMemo(()=>((m==null?void 0:m.value)??[]).reduce((v,{status:h,topic_id:T})=>h===g.CourseProgressItemElementStatus.COMPLETE?[...v,T]:v,[]),[m]),z=p.useMemo(()=>{const v=((l==null?void 0:l.lessons)??[]).filter(h=>h.active_from===null||h.active_from&&Ae(new Date,new Date(h.active_from)));return J(v)},[l]),c=p.useCallback(v=>{const h=z.find(D=>D.id===v);if(!h)return null;const T=z.indexOf(h),E=z[T+1];return E?E.id:null},[z]),u=p.useMemo(()=>{const{in_progress:v,complete:h}=z.reduce((E,D)=>{const L=((m==null?void 0:m.value)??[]).find(({topic_id:B})=>B===D.id);if(!L)return E;const N={[g.CourseProgressItemElementStatus.INCOMPLETE]:"incomplete",[g.CourseProgressItemElementStatus.COMPLETE]:"complete",[g.CourseProgressItemElementStatus.IN_PROGRESS]:"in_progress"};return{...E,[N[L.status]]:[...E[N[L.status]],D.id]}},{in_progress:[],incomplete:[],complete:[]}),T=c(r==null?void 0:r.id);return v.length?[...v,...h,T].filter(E=>E!==null):[...h,T].filter(E=>E!==null)},[m==null?void 0:m.value,r==null?void 0:r.id,c,z]),d=p.useMemo(()=>$?ve(I,$):[],[$,I]);p.useEffect(()=>{j&&o(Number(j))},[j,o]),p.useEffect(()=>{j&&n(Number(j))},[n,j]),p.useEffect(()=>{r!=null&&r.topicable_type&&f(Ke.includes(r==null?void 0:r.topicable_type)&&!r.can_skip)},[r==null?void 0:r.can_skip,r==null?void 0:r.topicable_type]),p.useEffect(()=>{var v;if(!M||Number(M)!==(r==null?void 0:r.id)){const h=u.at(-1)??((v=S==null?void 0:S[0])==null?void 0:v.id),T=S.find(({id:E})=>E===h);T&&O.push(`/course/${j}/${T.lesson_id}/${h}`)}},[M,u,S,O,j,r==null?void 0:r.id]);const b=p.useMemo(()=>!!(m!=null&&m.value&&(m!=null&&m.value.every(({status:v})=>v===g.CourseProgressItemElementStatus.COMPLETE))),[m==null?void 0:m.value]),w=p.useMemo(()=>{var v;return(r==null?void 0:r.id)!==void 0&&((v=(S??[]).at(-1))==null?void 0:v.id)===(r==null?void 0:r.id)},[r==null?void 0:r.id,S]),A=p.useMemo(()=>e.loading||(m==null?void 0:m.loading),[e.loading,m==null?void 0:m.loading]);return _.jsx(he.Provider,{value:{courseId:j,flatLessons:I,flatTopics:S,prevTopic:W,currentTopic:r,nextTopic:X,currentLesson:$,currentCourseProgram:l,isNextTopicButtonDisabled:y,setIsNextTopicButtonDisabled:f,completeCurrentTopic:Y,availableTopicsIds:u,finishedTopicsIds:Q,currentLessonParentsIds:d,isCourseFinished:b,isAnyDataLoading:A,showFinish:P,isLastTopic:w},children:t})},ot=({topic:t,preview:s=!1})=>{var m;const{courseId:e,nextTopic:o,setIsNextTopicButtonDisabled:a,showFinish:n}=Je(),{topicPing:y,topicIsFinished:f,h5pProgress:P,fetchCourseProgress:i}=p.useContext(De.EscolaLMSContext),j=!!o,C=t==null?void 0:t.id,M=p.useCallback(l=>{var I;l!=null&&l.statement&&((I=P(String(e),Number(C),l==null?void 0:l.statement))==null||I.then(()=>{i(Number(e))}))},[P,e,C,i]);p.useEffect(()=>{const l=!!(C&&f(C));j&&l&&(a==null||a(!l&&!(t!=null&&t.can_skip)))},[a,C,t==null?void 0:t.can_skip,j,f]),p.useEffect(()=>{if(!s&&!n){const l=()=>C&&!f(C)&&y(C),I=setInterval(()=>{l()},5e3);return l(),()=>clearInterval(I)}},[y,C,f,s,n]);const O=p.useCallback(()=>a==null?void 0:a(!1),[a]);if(!t)return _.jsx(fe.Fragment,{});if(!((m=t.topicable)!=null&&m.value))return _.jsx("pre",{className:"error",children:"Error: topic.topicable?.value is missing"});if(t.topicable_type)switch(t.topicable_type){case g.TopicType.H5P:return _.jsx(Re.H5Player,{onXAPI:l=>M==null?void 0:M(l),h5pObject:t.topicable.content,hideActionButtons:!0});case g.TopicType.OEmbed:return _.jsx(_.Fragment,{children:_.jsx(Fe.OEmbedPlayer,{url:t.topicable.value},t.id)});case g.TopicType.RichText:return _.jsx(Ue,{value:t.topicable.value,resources:t.resources});case g.TopicType.Video:return _.jsx(oe.AudioVideoPlayer,{mobile:se,url:t.topicable.url,light:!0,onTopicEnd:O});case g.TopicType.Image:return _.jsx(He.ImagePlayer,{topic:t,onLoad:()=>{}});case g.TopicType.Audio:return _.jsx(oe.AudioVideoPlayer,{mobile:se,audio:!0,url:t.topicable.url,light:!0,onTopicEnd:O});case g.TopicType.Pdf:return _.jsx(Be.PdfPlayer,{url:t.topicable.url,pageConfig:{className:"course-pdf-player"},onTopicEnd:O});case g.TopicType.Scorm:return _.jsx(Ye,{value:{title:t.title,uuid:t.topicable.uuid}});case g.TopicType.GiftQuiz:return _.jsx(Le,{topic:t,onTopicEnd:O});case g.TopicType.Project:return _.jsx(pe.ProjectPlayer,{course_id:Number(e),topic:t,onSuccess:O,onProjectsChange:O});default:return _.jsx("pre",{children:t.topicable_type})}return _.jsx("pre",{children:"loading... (or error)"})};var it=ke();export{it as C,ot as a,st as b,Je as u};
//# sourceMappingURL=CourseAgenda-6b0IKfQZ.js.map

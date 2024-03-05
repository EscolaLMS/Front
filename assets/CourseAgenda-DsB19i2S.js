import{q as le,f as ce,r as p,j as h,M as ye,s as ue,c8 as be,d as b,c9 as xe,ca as ge,a5 as Te,a7 as Pe,D as K,a3 as we,cb as Ee,a6 as Ce,v as de,cc as Me,S as Oe,an as re,cd as Se,b as fe,E as Ie,i as Ne,ao as Ae,h as De,n as oe,ce as ke}from"./index-BwDDCa5l.js";import{A as x,_ as ze,P as Be,a as se,I as Le,O as Fe,H as He}from"./index-BFtnUeGh.js";import{U as $e}from"./Upload-BclhsyIC.js";const Re=le.div`
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
`,Ve=({value:t,onLoad:r,resources:e})=>{const{t:o}=ce(),a=e&&e.length>0;return p.useEffect(()=>{t&&r&&r()},[t,r]),h.jsxs(Re,{children:[t&&h.jsx(ye.MarkdownRenderer,{children:t}),a&&h.jsxs("div",{className:"resources-container",children:[h.jsx(ue.Text,{children:o("CoursePage.Resources")}),e.map(({name:n,url:y})=>h.jsx(be.Download,{href:y,fileName:n}))]})]})};var pe={},H={},U=b&&b.__assign||function(){return U=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++){r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},U.apply(this,arguments)},ee=b&&b.__awaiter||function(t,r,e,o){function a(n){return n instanceof e?n:new e(function(y){y(n)})}return new(e||(e=Promise))(function(n,y){function u(_){try{i(o.next(_))}catch(P){y(P)}}function g(_){try{i(o.throw(_))}catch(P){y(P)}}function i(_){_.done?n(_.value):a(_.value).then(u,g)}i((o=o.apply(t,r||[])).next())})},te=b&&b.__generator||function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,a,n,y;return y={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(y[Symbol.iterator]=function(){return this}),y;function u(i){return function(_){return g([i,_])}}function g(i){if(o)throw new TypeError("Generator is already executing.");for(;e;)try{if(o=1,a&&(n=i[0]&2?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,a=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){e=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){e.label=i[1];break}if(i[0]===6&&e.label<n[1]){e.label=n[1],n=i;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(i);break}n[2]&&e.ops.pop(),e.trys.pop();continue}i=r.call(t,e)}catch(_){i=[6,_],a=0}finally{o=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},Ue=b&&b.__rest||function(t,r){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(e[o[a]]=t[o[a]]);return e},qe=b&&b.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(H,"__esModule",{value:!0});H.removeProject=H.fetchProjects=H.addProject=void 0;var ne=qe(xe),ae=ge;function Ge(t,r,e,o){return ee(this,void 0,void 0,function(){var a;return te(this,function(n){return a=new FormData,Object.entries(e).forEach(function(y){var u=y[0],g=y[1];a.append(u,g)}),[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions"),U({method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()},data:a},o||{}))]})})}H.addProject=Ge;function Ze(t,r,e,o){var a=e.per_page,n=e.page,y=Ue(e,["per_page","page"]);return ee(this,void 0,void 0,function(){return te(this,function(u){return[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions"),U({method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()},params:U({per_page:a??15,page:n??1},y)},o||{}))]})})}H.fetchProjects=Ze;function Qe(t,r,e,o){return ee(this,void 0,void 0,function(){return te(this,function(a){return[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions/").concat(e),U({method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()}},o||{}))]})})}H.removeProject=Qe;(function(t){var r=b&&b.__makeTemplateObject||function(l,d){return Object.defineProperty?Object.defineProperty(l,"raw",{value:d}):l.raw=d,l},e=b&&b.__assign||function(){return e=Object.assign||function(l){for(var d,c=1,j=arguments.length;c<j;c++){d=arguments[c];for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(l[f]=d[f])}return l},e.apply(this,arguments)},o=b&&b.__createBinding||(Object.create?function(l,d,c,j){j===void 0&&(j=c);var f=Object.getOwnPropertyDescriptor(d,c);(!f||("get"in f?!d.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return d[c]}}),Object.defineProperty(l,j,f)}:function(l,d,c,j){j===void 0&&(j=c),l[j]=d[c]}),a=b&&b.__setModuleDefault||(Object.create?function(l,d){Object.defineProperty(l,"default",{enumerable:!0,value:d})}:function(l,d){l.default=d}),n=b&&b.__importStar||function(l){if(l&&l.__esModule)return l;var d={};if(l!=null)for(var c in l)c!=="default"&&Object.prototype.hasOwnProperty.call(l,c)&&o(d,l,c);return a(d,l),d},y=b&&b.__spreadArray||function(l,d,c){if(c||arguments.length===2)for(var j=0,f=d.length,T;j<f;j++)(T||!(j in d))&&(T||(T=Array.prototype.slice.call(d,0,j)),T[j]=d[j]);return l.concat(T||Array.prototype.slice.call(d))};Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectPlayer=void 0;var u=h,g=p,i=n(Te),_=we,P=Ee,w=K,M=H,m=Ce,s=de,O=Me,C=Oe,q=ue,Z=Pe(),W=$e,v=i.default.div(Q||(Q=r([`
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
`]))),X=function(){return(0,u.jsx)("svg",e({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,u.jsx)("path",{d:"M5 2C5 0.89543 5.89543 0 7 0H13C14.1046 0 15 0.895431 15 2V4H16.9897C16.9959 3.99994 17.0021 3.99994 17.0083 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H17.9311L17.0638 18.1425C16.989 19.1891 16.1182 20 15.0689 20H4.93112C3.88184 20 3.01096 19.1891 2.9362 18.1425L2.06888 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H2.99174C2.99795 3.99994 3.00414 3.99994 3.01032 4H5V2ZM7 4H13V2H7V4ZM4.07398 6L4.93112 18H15.0689L15.926 6H4.07398ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z",fill:"currentColor"})}))},R=function(l){var d=l.projects,c=l.onDeleteSuccess,j=l.onDeleteError,f=l.className,T=(0,_.useTranslation)().t,E=(0,g.useContext)(w.EscolaLMSContext),A=E.token,S=E.apiUrl,k=(0,g.useState)([]),I=k[0],z=k[1],B=(0,g.useCallback)(function(N){return function(){if(!A)return console.warn("noToken");z(function(L){return y(y([],L,!0),[N],!1)}),(0,M.removeProject)(S,A,N).then(function(){return c==null?void 0:c()}).catch(function(){return j==null?void 0:j()}).finally(function(){return z(function(L){return L.filter(function(F){return F!==N})})})}},[A,S]);return(0,u.jsxs)("div",e({className:f},{children:[d.loading&&!d.data.length&&(0,u.jsx)(C.Spin,{}),d.data.map(function(N,L){var F=N.id,$=N.created_at;return(0,u.jsxs)(O.Card,e({className:"project-card"},{children:[(0,u.jsxs)("div",e({className:"project-card__details"},{children:[(0,u.jsxs)(q.Text,e({className:"project-card__title"},{children:[T("ProjectPlayer.ProjectFile")," ".concat(L+1)]})),(0,u.jsx)(q.Text,e({className:"project-card__date"},{children:(0,P.format)(new Date($),m.DATETIME_FORMAT)}))]})),(0,u.jsx)(s.Button,e({className:"project-card__delete-btn",mode:"icon",loading:I.includes(F),onClick:B(F)},{children:(0,u.jsx)(X,{})}))]}),F)})]}))},Y=function(l){var d=l.course_id,c=l.topic,j=l.onSuccess,f=l.onError,T=l.className,E=l.onProjectsChange,A=(0,g.useContext)(w.EscolaLMSContext),S=A.token,k=A.apiUrl,I=(0,g.useState)({data:[],loading:!1}),z=I[0],B=I[1],N=(0,g.useState)(!1),L=N[0],F=N[1];(0,g.useEffect)(function(){E&&E(z)},[z]);var $=(0,g.useCallback)(function(){if(!S)return console.error("noToken");B(function(D){return e(e({},D),{loading:!0})}),(0,M.fetchProjects)(k,S,{course_id:d,topic_id:c==null?void 0:c.id}).then(function(D){D.success&&B(function(G){return e(e({},G),{data:D.data})})}).catch(function(D){return console.warn(D)}).finally(function(){return B(function(D){return e(e({},D),{loading:!1})})})},[S,k,d,c==null?void 0:c.id]);(0,g.useEffect)(function(){$()},[$]);var _e=(0,g.useCallback)(function(D){var G;if(!(!(!((G=D.currentTarget.files)===null||G===void 0)&&G[0])||!S)){F(!0);var je={topic_id:(c==null?void 0:c.id)+"",file:D.currentTarget.files[0]};(0,M.addProject)(k,S,je).then(function(){$(),j==null||j()}).catch(function(){f==null||f()}).finally(function(){F(!1)})}},[k,S,c==null?void 0:c.id,$]);return(0,u.jsxs)(v,e({className:"wellms-component"+" ".concat(T),"data-testid":"project-player"},{children:[c.description&&(0,u.jsx)(Z.MarkdownRenderer,e({className:"project-player__description"},{children:c.description})),(0,u.jsx)(W.Upload,{className:"project-player__upload-input",name:"project_file",onChange:_e,disabled:L}),(0,u.jsx)(R,{className:"project-player__projects-list",projects:z,onDeleteSuccess:$})]}))};t.ProjectPlayer=Y,t.default=(0,i.withTheme)((0,i.default)(t.ProjectPlayer)(V||(V=r([""],[""]))));var Q,V})(pe);const We=le.div`
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
`,Xe=({value:t})=>{const{apiUrl:r}=p.useContext(K.EscolaLMSContext),{t:e}=ce(),[o,a]=p.useState(!1);return h.jsx("div",{className:"scorm-wrapper",children:h.jsxs(We,{fullview:o,children:[h.jsxs(de.Button,{onClick:()=>a(!o),children:[" ",e("Scorm.Resize")," ",h.jsx(Se,{})]}),h.jsx("iframe",{title:t.title,src:`${r}/api/scorm/play/${t.uuid}`})]})})},me=t=>t.reduce((r,e)=>[...r,...me((e==null?void 0:e.lessons)??[]),e],[]),J=t=>t.reduce((r,e)=>[...r,...e.topics??[],...e.lessons?J(e.lessons):[]],[]),ve=(t,r,e=[])=>{const o=[...e],a=t.find(n=>{var y;return(y=n==null?void 0:n.lessons)==null?void 0:y.find(u=>(u==null?void 0:u.id)===(r==null?void 0:r.id))});return a?(o.unshift(a.id),ve(t,a,o)):o},ie=(t,r,e="prev")=>{const o=r.findIndex(n=>n.id===t);return new Map([["prev",r==null?void 0:r[o-1]],["next",r==null?void 0:r[o+1]]]).get(e)},he=fe.createContext({}),Ye=()=>p.useContext(he),Je=[x.TopicType.H5P,x.TopicType.Audio,x.TopicType.Video,x.TopicType.Project,x.TopicType.GiftQuiz,x.TopicType.Pdf],nt=({children:t})=>{var j;const{sendProgress:r,program:e,fetchProgram:o,courseProgressDetails:a,fetchCourseProgress:n}=p.useContext(K.EscolaLMSContext),[y,u]=p.useState(!1),[g,i]=p.useState(!1),{id:_,lessonID:P,topicID:w}=Ie(),M=Ne(),m=(j=a.byId)==null?void 0:j[_],s=p.useMemo(()=>e.value,[e.value]),O=p.useMemo(()=>me((s==null?void 0:s.lessons)??[]),[s==null?void 0:s.lessons]),C=p.useMemo(()=>J((s==null?void 0:s.lessons)??[]),[s==null?void 0:s.lessons]),q=p.useCallback(f=>O.find(T=>T.id===f),[O]),Z=p.useCallback(f=>C.find(T=>T.id===f),[C]),W=p.useMemo(()=>ie(Number(w),C),[C,w]),v=p.useMemo(()=>Z(Number(w)),[Z,w]),X=p.useMemo(()=>ie(Number(w),C,"next"),[C,w]),R=p.useMemo(()=>v&&q(v==null?void 0:v.lesson_id),[q,v]),Y=p.useCallback(f=>{(s==null?void 0:s.id)!==void 0&&(v==null?void 0:v.id)!==void 0&&(u(!1),r(s.id,[{topic_id:v.id,status:x.CourseProgressItemElementStatus.COMPLETE}]),f&&i(!0))},[r,s==null?void 0:s.id,v==null?void 0:v.id]),Q=p.useMemo(()=>((m==null?void 0:m.value)??[]).reduce((f,{status:T,topic_id:E})=>T===x.CourseProgressItemElementStatus.COMPLETE?[...f,E]:f,[]),[m]),V=p.useMemo(()=>{const f=((s==null?void 0:s.lessons)??[]).filter(I=>I.active_from===null||I.active_from&&Ae(new Date,new Date(I.active_from))),T=J(f),{incomplete:E,in_progress:A,complete:S}=T.reduce((I,z)=>{const B=((m==null?void 0:m.value)??[]).find(({topic_id:L})=>L===z.id);if(!B)return I;const N={[x.CourseProgressItemElementStatus.INCOMPLETE]:"incomplete",[x.CourseProgressItemElementStatus.COMPLETE]:"complete",[x.CourseProgressItemElementStatus.IN_PROGRESS]:"in_progress"};return{...I,[N[B.status]]:[...I[N[B.status]],z.id]}},{in_progress:[],incomplete:[],complete:[]});if(A.length)return[...A,...S];const k=E!=null&&E[0]?[E[0]]:[];return[...S,...k]},[s==null?void 0:s.lessons,m==null?void 0:m.value]),l=p.useMemo(()=>R?ve(O,R):[],[R,O]);p.useEffect(()=>{_&&o(Number(_))},[_,o]),p.useEffect(()=>{_&&n(Number(_))},[n,_]),p.useEffect(()=>{v!=null&&v.topicable_type&&u(Je.includes(v==null?void 0:v.topicable_type))},[v==null?void 0:v.topicable_type]),p.useEffect(()=>{var f;if(!w||Number(w)!==(v==null?void 0:v.id)){const T=V.at(-1)??((f=C==null?void 0:C[0])==null?void 0:f.id),E=C.find(({id:A})=>A===T);E&&M.push(`/course/${_}/${E.lesson_id}/${T}`)}},[w,V,C,M,_,v==null?void 0:v.id]);const d=p.useMemo(()=>!!(m!=null&&m.value&&(m!=null&&m.value.every(({status:f})=>f===x.CourseProgressItemElementStatus.COMPLETE))),[m==null?void 0:m.value]),c=p.useMemo(()=>e.loading||(m==null?void 0:m.loading),[e.loading,m==null?void 0:m.loading]);return h.jsx(he.Provider,{value:{courseId:_,flatLessons:O,flatTopics:C,prevTopic:W,currentTopic:v,nextTopic:X,currentLesson:R,currentCourseProgram:s,isNextTopicButtonDisabled:y,setIsNextTopicButtonDisabled:u,completeCurrentTopic:Y,availableTopicsIds:V,finishedTopicsIds:Q,currentLessonParentsIds:l,isCourseFinished:d,isAnyDataLoading:c,showFinishModal:g},children:t})},at=({topic:t,preview:r=!1})=>{var m;const{courseId:e,nextTopic:o,setIsNextTopicButtonDisabled:a,showFinishModal:n}=Ye(),{topicPing:y,topicIsFinished:u,h5pProgress:g,fetchCourseProgress:i}=p.useContext(De.EscolaLMSContext),_=!!o,P=t==null?void 0:t.id,w=p.useCallback(s=>{var O;s!=null&&s.statement&&((O=g(String(e),Number(P),s==null?void 0:s.statement))==null||O.then(()=>{i(Number(e))}))},[g,e,P,i]);p.useEffect(()=>{const s=!!(P&&u(P));_&&s&&(a==null||a(!s&&!(t!=null&&t.can_skip)))},[a,P,t==null?void 0:t.can_skip,_,u]),p.useEffect(()=>{if(!r&&!n){const s=()=>P&&!u(P)&&y(P),O=setInterval(()=>{s()},5e3);return s(),()=>clearInterval(O)}},[y,P,u,r,n]);const M=p.useCallback(()=>a==null?void 0:a(!1),[a]);if(!t)return h.jsx(fe.Fragment,{});if(!((m=t.topicable)!=null&&m.value))return h.jsx("pre",{className:"error",children:"Error: topic.topicable?.value is missing"});if(t.topicable_type)switch(t.topicable_type){case x.TopicType.H5P:return h.jsx(He.H5Player,{onXAPI:s=>w==null?void 0:w(s),h5pObject:t.topicable.content,hideActionButtons:!0});case x.TopicType.OEmbed:return h.jsx(h.Fragment,{children:h.jsx(Fe.OEmbedPlayer,{url:t.topicable.value},t.id)});case x.TopicType.RichText:return h.jsx(Ve,{value:t.topicable.value,resources:t.resources});case x.TopicType.Video:return h.jsx(se.AudioVideoPlayer,{mobile:oe,url:t.topicable.url,light:!0,onTopicEnd:M});case x.TopicType.Image:return h.jsx(Le.ImagePlayer,{topic:t,onLoad:()=>{}});case x.TopicType.Audio:return h.jsx(se.AudioVideoPlayer,{mobile:oe,audio:!0,url:t.topicable.url,light:!0,onTopicEnd:M});case x.TopicType.Pdf:return h.jsx(Be.PdfPlayer,{url:t.topicable.url,pageConfig:{className:"course-pdf-player"},onTopicEnd:M});case x.TopicType.Scorm:return h.jsx(Xe,{value:{title:t.title,uuid:t.topicable.uuid}});case x.TopicType.GiftQuiz:return h.jsx(ze,{topic:t,onTopicEnd:M});case x.TopicType.Project:return h.jsx(pe.ProjectPlayer,{course_id:Number(e),topic:t,onSuccess:M,onProjectsChange:M});default:return h.jsx("pre",{children:t.topicable_type})}return h.jsx("pre",{children:"loading... (or error)"})};var rt=ke();export{rt as C,at as a,nt as b,Ye as u};

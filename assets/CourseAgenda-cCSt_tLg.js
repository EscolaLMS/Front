import{q as le,f as ce,r as p,j as h,M as ye,s as ue,cd as be,d as b,ce as xe,cf as ge,a5 as Pe,a7 as we,D as K,a3 as Te,cg as Ee,a6 as Ce,v as de,ch as Me,S as Oe,an as re,ci as Se,b as fe,E as Ie,i as Ne,ao as Ae,h as De,n as se,cj as ke}from"./index-DdHAFv7l.js";import{A as x,_ as ze,P as Le,a as oe,I as Be,O as Fe,H as He}from"./index-Def-oRoG.js";import{U as $e}from"./Upload-BemetLVC.js";const Re=le.div`
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
`,Ve=({value:t,onLoad:r,resources:e})=>{const{t:s}=ce(),a=e&&e.length>0;return p.useEffect(()=>{t&&r&&r()},[t,r]),h.jsxs(Re,{children:[t&&h.jsx(ye.MarkdownRenderer,{children:t}),a&&h.jsxs("div",{className:"resources-container",children:[h.jsx(ue.Text,{children:s("CoursePage.Resources")}),e.map(({name:n,url:j})=>h.jsx(be.Download,{href:j,fileName:n}))]})]})};var pe={},F={},U=b&&b.__assign||function(){return U=Object.assign||function(t){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},U.apply(this,arguments)},ee=b&&b.__awaiter||function(t,r,e,s){function a(n){return n instanceof e?n:new e(function(j){j(n)})}return new(e||(e=Promise))(function(n,j){function d(_){try{l(s.next(_))}catch(w){j(w)}}function g(_){try{l(s.throw(_))}catch(w){j(w)}}function l(_){_.done?n(_.value):a(_.value).then(d,g)}l((s=s.apply(t,r||[])).next())})},te=b&&b.__generator||function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},s,a,n,j;return j={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(j[Symbol.iterator]=function(){return this}),j;function d(l){return function(_){return g([l,_])}}function g(l){if(s)throw new TypeError("Generator is already executing.");for(;e;)try{if(s=1,a&&(n=l[0]&2?a.return:l[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,l[1])).done)return n;switch(a=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,a=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){e.label=l[1];break}if(l[0]===6&&e.label<n[1]){e.label=n[1],n=l;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(l);break}n[2]&&e.ops.pop(),e.trys.pop();continue}l=r.call(t,e)}catch(_){l=[6,_],a=0}finally{s=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Ue=b&&b.__rest||function(t,r){var e={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&r.indexOf(s)<0&&(e[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)r.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(e[s[a]]=t[s[a]]);return e},qe=b&&b.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(F,"__esModule",{value:!0});F.removeProject=F.fetchProjects=F.addProject=void 0;var ne=qe(xe),ae=ge;function Ge(t,r,e,s){return ee(this,void 0,void 0,function(){var a;return te(this,function(n){return a=new FormData,Object.entries(e).forEach(function(j){var d=j[0],g=j[1];a.append(d,g)}),[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions"),U({method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()},data:a},s||{}))]})})}F.addProject=Ge;function Ze(t,r,e,s){var a=e.per_page,n=e.page,j=Ue(e,["per_page","page"]);return ee(this,void 0,void 0,function(){return te(this,function(d){return[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions"),U({method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()},params:U({per_page:a??15,page:n??1},j)},s||{}))]})})}F.fetchProjects=Ze;function Qe(t,r,e,s){return ee(this,void 0,void 0,function(){return te(this,function(a){return[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions/").concat(e),U({method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()}},s||{}))]})})}F.removeProject=Qe;(function(t){var r=b&&b.__makeTemplateObject||function(c,f){return Object.defineProperty?Object.defineProperty(c,"raw",{value:f}):c.raw=f,c},e=b&&b.__assign||function(){return e=Object.assign||function(c){for(var f,u=1,y=arguments.length;u<y;u++){f=arguments[u];for(var P in f)Object.prototype.hasOwnProperty.call(f,P)&&(c[P]=f[P])}return c},e.apply(this,arguments)},s=b&&b.__createBinding||(Object.create?function(c,f,u,y){y===void 0&&(y=u);var P=Object.getOwnPropertyDescriptor(f,u);(!P||("get"in P?!f.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return f[u]}}),Object.defineProperty(c,y,P)}:function(c,f,u,y){y===void 0&&(y=u),c[y]=f[u]}),a=b&&b.__setModuleDefault||(Object.create?function(c,f){Object.defineProperty(c,"default",{enumerable:!0,value:f})}:function(c,f){c.default=f}),n=b&&b.__importStar||function(c){if(c&&c.__esModule)return c;var f={};if(c!=null)for(var u in c)u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)&&s(f,c,u);return a(f,c),f},j=b&&b.__spreadArray||function(c,f,u){if(u||arguments.length===2)for(var y=0,P=f.length,v;y<P;y++)(v||!(y in f))&&(v||(v=Array.prototype.slice.call(f,0,y)),v[y]=f[y]);return c.concat(v||Array.prototype.slice.call(f))};Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectPlayer=void 0;var d=h,g=p,l=n(Pe),_=Te,w=Ee,T=K,I=F,m=Ce,o=de,A=Me,E=Oe,q=ue,Z=we(),W=$e,i=l.default.div(Q||(Q=r([`
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
`]))),X=function(){return(0,d.jsx)("svg",e({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,d.jsx)("path",{d:"M5 2C5 0.89543 5.89543 0 7 0H13C14.1046 0 15 0.895431 15 2V4H16.9897C16.9959 3.99994 17.0021 3.99994 17.0083 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H17.9311L17.0638 18.1425C16.989 19.1891 16.1182 20 15.0689 20H4.93112C3.88184 20 3.01096 19.1891 2.9362 18.1425L2.06888 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H2.99174C2.99795 3.99994 3.00414 3.99994 3.01032 4H5V2ZM7 4H13V2H7V4ZM4.07398 6L4.93112 18H15.0689L15.926 6H4.07398ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z",fill:"currentColor"})}))},$=function(c){var f=c.projects,u=c.onDeleteSuccess,y=c.onDeleteError,P=c.className,v=(0,_.useTranslation)().t,C=(0,g.useContext)(T.EscolaLMSContext),M=C.token,O=C.apiUrl,k=(0,g.useState)([]),V=k[0],S=k[1],B=(0,g.useCallback)(function(N){return function(){if(!M)return console.warn("noToken");S(function(z){return j(j([],z,!0),[N],!1)}),(0,I.removeProject)(O,M,N).then(function(){return u==null?void 0:u()}).catch(function(){return y==null?void 0:y()}).finally(function(){return S(function(z){return z.filter(function(L){return L!==N})})})}},[M,O]);return(0,d.jsxs)("div",e({className:P},{children:[f.loading&&!f.data.length&&(0,d.jsx)(E.Spin,{}),f.data.map(function(N,z){var L=N.id,H=N.created_at;return(0,d.jsxs)(A.Card,e({className:"project-card"},{children:[(0,d.jsxs)("div",e({className:"project-card__details"},{children:[(0,d.jsxs)(q.Text,e({className:"project-card__title"},{children:[v("ProjectPlayer.ProjectFile")," ".concat(z+1)]})),(0,d.jsx)(q.Text,e({className:"project-card__date"},{children:(0,w.format)(new Date(H),m.DATETIME_FORMAT)}))]})),(0,d.jsx)(o.Button,e({className:"project-card__delete-btn",mode:"icon",loading:V.includes(L),onClick:B(L)},{children:(0,d.jsx)(X,{})}))]}),L)})]}))},Y=function(c){var f=c.course_id,u=c.topic,y=c.onSuccess,P=c.onError,v=c.className,C=c.onProjectsChange,M=(0,g.useContext)(T.EscolaLMSContext),O=M.token,k=M.apiUrl,V=(0,g.useState)({data:[],loading:!1}),S=V[0],B=V[1],N=(0,g.useState)(!1),z=N[0],L=N[1];(0,g.useEffect)(function(){C&&C(S)},[S]);var H=(0,g.useCallback)(function(){if(!O)return console.error("noToken");B(function(D){return e(e({},D),{loading:!0})}),(0,I.fetchProjects)(k,O,{course_id:f,topic_id:u==null?void 0:u.id}).then(function(D){D.success&&B(function(G){return e(e({},G),{data:D.data})})}).catch(function(D){return console.warn(D)}).finally(function(){return B(function(D){return e(e({},D),{loading:!1})})})},[O,k,f,u==null?void 0:u.id]);(0,g.useEffect)(function(){H()},[H]);var _e=(0,g.useCallback)(function(D){var G;if(!(!(!((G=D.currentTarget.files)===null||G===void 0)&&G[0])||!O)){L(!0);var je={topic_id:(u==null?void 0:u.id)+"",file:D.currentTarget.files[0]};(0,I.addProject)(k,O,je).then(function(){H(),y==null||y()}).catch(function(){P==null||P()}).finally(function(){L(!1)})}},[k,O,u==null?void 0:u.id,H]);return(0,d.jsxs)(i,e({className:"wellms-component"+" ".concat(v),"data-testid":"project-player"},{children:[u.description&&(0,d.jsx)(Z.MarkdownRenderer,e({className:"project-player__description"},{children:u.description})),(0,d.jsx)(W.Upload,{className:"project-player__upload-input",name:"project_file",onChange:_e,disabled:z}),(0,d.jsx)($,{className:"project-player__projects-list",projects:S,onDeleteSuccess:H})]}))};t.ProjectPlayer=Y,t.default=(0,l.withTheme)((0,l.default)(t.ProjectPlayer)(R||(R=r([""],[""]))));var Q,R})(pe);const We=le.div`
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
`,Xe=({value:t})=>{const{apiUrl:r}=p.useContext(K.EscolaLMSContext),{t:e}=ce(),[s,a]=p.useState(!1);return h.jsx("div",{className:"scorm-wrapper",children:h.jsxs(We,{fullview:s,children:[h.jsxs(de.Button,{onClick:()=>a(!s),children:[" ",e("Scorm.Resize")," ",h.jsx(Se,{})]}),h.jsx("iframe",{title:t.title,src:`${r}/api/scorm/play/${t.uuid}`})]})})},me=t=>t.reduce((r,e)=>[...r,...me((e==null?void 0:e.lessons)??[]),e],[]),J=t=>t.reduce((r,e)=>[...r,...e.topics??[],...e.lessons?J(e.lessons):[]],[]),ve=(t,r,e=[])=>{const s=[...e],a=t.find(n=>{var j;return(j=n==null?void 0:n.lessons)==null?void 0:j.find(d=>(d==null?void 0:d.id)===(r==null?void 0:r.id))});return a?(s.unshift(a.id),ve(t,a,s)):s},ie=(t,r,e="prev")=>{const s=r.findIndex(n=>n.id===t);return new Map([["prev",r==null?void 0:r[s-1]],["next",r==null?void 0:r[s+1]]]).get(e)},he=fe.createContext({}),Ye=()=>p.useContext(he),Je=[x.TopicType.H5P,x.TopicType.Audio,x.TopicType.Video,x.TopicType.Project,x.TopicType.GiftQuiz,x.TopicType.Pdf],nt=({children:t})=>{var P;const{sendProgress:r,program:e,fetchProgram:s,courseProgressDetails:a,fetchCourseProgress:n}=p.useContext(K.EscolaLMSContext),[j,d]=p.useState(!1),[g,l]=p.useState(!1),{id:_,lessonID:w,topicID:T}=Ie(),I=Ne(),m=(P=a.byId)==null?void 0:P[_],o=p.useMemo(()=>e.value,[e.value]),A=p.useMemo(()=>me((o==null?void 0:o.lessons)??[]),[o==null?void 0:o.lessons]),E=p.useMemo(()=>J((o==null?void 0:o.lessons)??[]),[o==null?void 0:o.lessons]),q=p.useCallback(v=>A.find(C=>C.id===v),[A]),Z=p.useCallback(v=>E.find(C=>C.id===v),[E]),W=p.useMemo(()=>ie(Number(T),E),[E,T]),i=p.useMemo(()=>Z(Number(T)),[Z,T]),X=p.useMemo(()=>ie(Number(T),E,"next"),[E,T]),$=p.useMemo(()=>i&&q(i==null?void 0:i.lesson_id),[q,i]),Y=p.useCallback(v=>{(o==null?void 0:o.id)!==void 0&&(i==null?void 0:i.id)!==void 0&&(d(!1),r(o.id,[{topic_id:i.id,status:x.CourseProgressItemElementStatus.COMPLETE}]),v&&l(!0))},[r,o==null?void 0:o.id,i==null?void 0:i.id]),Q=p.useMemo(()=>((m==null?void 0:m.value)??[]).reduce((v,{status:C,topic_id:M})=>C===x.CourseProgressItemElementStatus.COMPLETE?[...v,M]:v,[]),[m]),R=p.useMemo(()=>{const v=((o==null?void 0:o.lessons)??[]).filter(S=>S.active_from===null||S.active_from&&Ae(new Date,new Date(S.active_from))),C=J(v),{incomplete:M,in_progress:O,complete:k}=C.reduce((S,B)=>{const N=((m==null?void 0:m.value)??[]).find(({topic_id:L})=>L===B.id);if(!N)return S;const z={[x.CourseProgressItemElementStatus.INCOMPLETE]:"incomplete",[x.CourseProgressItemElementStatus.COMPLETE]:"complete",[x.CourseProgressItemElementStatus.IN_PROGRESS]:"in_progress"};return{...S,[z[N.status]]:[...S[z[N.status]],B.id]}},{in_progress:[],incomplete:[],complete:[]});if(O.length)return[...O,...k];const V=M!=null&&M[0]?[M[0]]:[];return[...k,...V]},[o==null?void 0:o.lessons,m==null?void 0:m.value]),c=p.useMemo(()=>$?ve(A,$):[],[$,A]);p.useEffect(()=>{_&&s(Number(_))},[_,s]),p.useEffect(()=>{_&&n(Number(_))},[n,_]),p.useEffect(()=>{i!=null&&i.topicable_type&&d(Je.includes(i==null?void 0:i.topicable_type)&&!i.can_skip)},[i==null?void 0:i.can_skip,i==null?void 0:i.topicable_type]),p.useEffect(()=>{var v;if(!T||Number(T)!==(i==null?void 0:i.id)){const C=R.at(-1)??((v=E==null?void 0:E[0])==null?void 0:v.id),M=E.find(({id:O})=>O===C);M&&I.push(`/course/${_}/${M.lesson_id}/${C}`)}},[T,R,E,I,_,i==null?void 0:i.id]);const f=p.useMemo(()=>!!(m!=null&&m.value&&(m!=null&&m.value.every(({status:v})=>v===x.CourseProgressItemElementStatus.COMPLETE))),[m==null?void 0:m.value]),u=p.useMemo(()=>{var v;return(i==null?void 0:i.id)!==void 0&&((v=(E??[]).at(-1))==null?void 0:v.id)===(i==null?void 0:i.id)},[i==null?void 0:i.id,E]),y=p.useMemo(()=>e.loading||(m==null?void 0:m.loading),[e.loading,m==null?void 0:m.loading]);return h.jsx(he.Provider,{value:{courseId:_,flatLessons:A,flatTopics:E,prevTopic:W,currentTopic:i,nextTopic:X,currentLesson:$,currentCourseProgram:o,isNextTopicButtonDisabled:j,setIsNextTopicButtonDisabled:d,completeCurrentTopic:Y,availableTopicsIds:R,finishedTopicsIds:Q,currentLessonParentsIds:c,isCourseFinished:f,isAnyDataLoading:y,showFinish:g,isLastTopic:u},children:t})},at=({topic:t,preview:r=!1})=>{var m;const{courseId:e,nextTopic:s,setIsNextTopicButtonDisabled:a,showFinish:n}=Ye(),{topicPing:j,topicIsFinished:d,h5pProgress:g,fetchCourseProgress:l}=p.useContext(De.EscolaLMSContext),_=!!s,w=t==null?void 0:t.id,T=p.useCallback(o=>{var A;o!=null&&o.statement&&((A=g(String(e),Number(w),o==null?void 0:o.statement))==null||A.then(()=>{l(Number(e))}))},[g,e,w,l]);p.useEffect(()=>{const o=!!(w&&d(w));_&&o&&(a==null||a(!o&&!(t!=null&&t.can_skip)))},[a,w,t==null?void 0:t.can_skip,_,d]),p.useEffect(()=>{if(!r&&!n){const o=()=>w&&!d(w)&&j(w),A=setInterval(()=>{o()},5e3);return o(),()=>clearInterval(A)}},[j,w,d,r,n]);const I=p.useCallback(()=>a==null?void 0:a(!1),[a]);if(!t)return h.jsx(fe.Fragment,{});if(!((m=t.topicable)!=null&&m.value))return h.jsx("pre",{className:"error",children:"Error: topic.topicable?.value is missing"});if(t.topicable_type)switch(t.topicable_type){case x.TopicType.H5P:return h.jsx(He.H5Player,{onXAPI:o=>T==null?void 0:T(o),h5pObject:t.topicable.content,hideActionButtons:!0});case x.TopicType.OEmbed:return h.jsx(h.Fragment,{children:h.jsx(Fe.OEmbedPlayer,{url:t.topicable.value},t.id)});case x.TopicType.RichText:return h.jsx(Ve,{value:t.topicable.value,resources:t.resources});case x.TopicType.Video:return h.jsx(oe.AudioVideoPlayer,{mobile:se,url:t.topicable.url,light:!0,onTopicEnd:I});case x.TopicType.Image:return h.jsx(Be.ImagePlayer,{topic:t,onLoad:()=>{}});case x.TopicType.Audio:return h.jsx(oe.AudioVideoPlayer,{mobile:se,audio:!0,url:t.topicable.url,light:!0,onTopicEnd:I});case x.TopicType.Pdf:return h.jsx(Le.PdfPlayer,{url:t.topicable.url,pageConfig:{className:"course-pdf-player"},onTopicEnd:I});case x.TopicType.Scorm:return h.jsx(Xe,{value:{title:t.title,uuid:t.topicable.uuid}});case x.TopicType.GiftQuiz:return h.jsx(ze,{topic:t,onTopicEnd:I});case x.TopicType.Project:return h.jsx(pe.ProjectPlayer,{course_id:Number(e),topic:t,onSuccess:I,onProjectsChange:I});default:return h.jsx("pre",{children:t.topicable_type})}return h.jsx("pre",{children:"loading... (or error)"})};var rt=ke();export{rt as C,at as a,nt as b,Ye as u};

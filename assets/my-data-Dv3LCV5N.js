import{d as x,D as ne,a6 as te,j as O,aa as re,r as ae,a7 as ie,A as oe,s as le,q as se,f as ue}from"./index-DuLQ5VKT.js";import{P as ce}from"./index-DnLHhXZt.js";import{U as me}from"./Upload-D8p_0UvA.js";var N={};(function(v){var S=x&&x.__makeTemplateObject||function(e,i){return Object.defineProperty?Object.defineProperty(e,"raw",{value:i}):e.raw=i,e},o=x&&x.__assign||function(){return o=Object.assign||function(e){for(var i,s=1,f=arguments.length;s<f;s++){i=arguments[s];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u])}return e},o.apply(this,arguments)},I=x&&x.__createBinding||(Object.create?function(e,i,s,f){f===void 0&&(f=s);var u=Object.getOwnPropertyDescriptor(i,s);(!u||("get"in u?!i.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return i[s]}}),Object.defineProperty(e,f,u)}:function(e,i,s,f){f===void 0&&(f=s),e[f]=i[s]}),U=x&&x.__setModuleDefault||(Object.create?function(e,i){Object.defineProperty(e,"default",{enumerable:!0,value:i})}:function(e,i){e.default=i}),L=x&&x.__importStar||function(e){if(e&&e.__esModule)return e;var i={};if(e!=null)for(var s in e)s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)&&I(i,e,s);return U(i,e),i};Object.defineProperty(v,"__esModule",{value:!0}),v.MyProfileForm=void 0;var a=O,V=re,b=ae,W=ie,Z=oe,_=le,H=me,F=L(ne),h=te(),M=F.default.div(A||(A=S([`
  text-align: center;
  h2,
  h3,
  h4 {
    font-size: `,`;
    text-align: center;
  }
  p {
    margin: 15px 0;
  }
  .upload {
    padding-top: `,`;
  }
`],[`
  text-align: center;
  h2,
  h3,
  h4 {
    font-size: `,`;
    text-align: center;
  }
  p {
    margin: 15px 0;
  }
  .upload {
    padding-top: `,`;
  }
`])),function(e){return e.mobile?"18px":"28px"},function(e){return e.mobile?"15px":"30px"}),G=F.default.div(B||(B=S([`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  .lms-checkbox {
    margin: 20px 0;
  }
  .lsm-input {
    margin: 30px 0;
    &.has-error,
    &.has-helper {
      margin-bottom: -15px;
    }
  }
  button {
    margin-top: 10px;
  }
  p {
    margin: 15px 0;
  }
  p,
  a {
    font-size: 14px;
  }
  h2,
  h3,
  h4 {
    font-size: `,`;
  }
  form {
    width: 100%;
    margin-bottom: 15px;
  }
`],[`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  .lms-checkbox {
    margin: 20px 0;
  }
  .lsm-input {
    margin: 30px 0;
    &.has-error,
    &.has-helper {
      margin-bottom: -15px;
    }
  }
  button {
    margin-top: 10px;
  }
  p {
    margin: 15px 0;
  }
  p,
  a {
    font-size: 14px;
  }
  h2,
  h3,
  h4 {
    font-size: `,`;
  }
  form {
    width: 100%;
    margin-bottom: 15px;
  }
`])),function(e){return e.mobile?"18px":"28px"}),k=function(e){var i=e.onSuccess,s=e.onError,f=e.mobile,u=f===void 0?!1:f,R=e.className,J=R===void 0?"":R,T=(0,b.useState)({first_name:"",last_name:"",email:"",phone:""}),q=T[0],D=T[1],c=(0,W.useTranslation)().t,j=(0,b.useContext)(Z.EscolaLMSContext),K=j.updateProfile,d=j.fields,Q=j.fetchFields,y=j.user,$=j.updateAvatar,z=j.fetchProfile,X=y.loading;(0,b.useEffect)(function(){z(),Q({class_type:"App\\Models\\User"})},[]),(0,b.useEffect)(function(){!y.loading&&y.value&&D(function(n){return Object.assign({},n,o({},y.value))})},[y]),(0,b.useEffect)(function(){var n=d&&d.list||[];D(function(r){return o(o({},r),n.filter(function(l){var m=l.name;return!(m in r)}).reduce(function(l,m){var p;return o(o({},l),(p={},p[m.name]=m.type==="boolean"?!1:m.default,p))},{}))})},[d]);var w=(0,b.useCallback)(function(n){var r;return!!(n!=null&&n.rules&&(n==null?void 0:n.rules.length)>0&&(!((r=n.rules)===null||r===void 0)&&r.find(function(l){return l==="required"})))},[d]),Y=(0,b.useCallback)(function(n){n.target.files&&n.target.files[0]&&$(n.target.files[0])},[$]);return(0,a.jsxs)(_.Container,{children:[(0,a.jsx)(_.Row,{children:(0,a.jsx)(_.Col,o({sm:12},{children:(0,a.jsxs)(M,o({className:"wellms-component ".concat(J),mobile:u},{children:[(0,a.jsx)(h.Title,o({level:3,as:"h2"},{children:c("MyProfileForm.Heading")})),(0,a.jsx)(h.Text,o({level:3},{children:c("MyProfileForm.Subtitle")}))]}))}))}),(0,a.jsxs)(_.Row,{children:[(0,a.jsx)(_.Col,o({sm:u?12:2,className:"upload-column"},{children:(0,a.jsx)(M,o({className:"wellms-component",mobile:u},{children:(0,a.jsx)(H.Upload,{path:q.path_avatar,url:q.avatar,accept:"image/*",onChange:Y})}))})),(0,a.jsx)(_.Col,o({sm:u?12:8},{children:(0,a.jsx)(G,o({className:"wellms-component",mobile:u},{children:(0,a.jsx)(V.Formik,o({enableReinitialize:!0,initialValues:q,validate:function(n){var r={};return n.first_name||(r.first_name=c("Required")),n.last_name||(r.last_name=c("Required")),n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.email)||(r.email=c("Wrong email")):r.email=c("Required"),n.phone&&!/\d{9}$/i.test(n.phone)&&(r.phone=c("Wrong phone number")),d.list&&d.list.map(function(l){w(l)&&(n[l.name]||(r[l.name]=c("Required")))}),r},onSubmit:function(n,r){var l=r.setSubmitting,m=r.resetForm,p=r.setErrors;K(o({},n)).then(function(){i&&i()}).catch(function(g){var P;m(),p(o({error:(P=g.data)===null||P===void 0?void 0:P.message},g.data.errors)),s&&s(g)}).finally(function(){l(!1),z()})}},{children:function(n){var r=n.values,l=n.errors,m=n.touched,p=n.handleChange,g=n.handleBlur,P=n.handleSubmit,ee=n.isSubmitting;return(0,a.jsxs)("form",o({onSubmit:P},{children:[l&&l.error&&(0,a.jsx)(h.Text,o({type:"danger"},{children:l.error})),(0,a.jsx)(h.Input,{label:c("First name"),type:"text",name:"first_name",onChange:p,onBlur:g,value:r.first_name,error:m.first_name&&l.first_name,required:!0}),(0,a.jsx)(h.Input,{label:c("Last name"),type:"text",name:"last_name",onChange:p,onBlur:g,value:r.last_name,error:m.last_name&&l.last_name,required:!0}),(0,a.jsx)(h.Input,{label:c("Email"),className:"form-control grey",type:"email",name:"email",onChange:p,onBlur:g,value:r.email,error:m.email&&l.email,required:!0}),(0,a.jsx)(h.Input,{label:c("Phone"),type:"text",name:"phone",onChange:p,onBlur:g,value:r.phone,error:m.phone&&l.phone}),d&&Array.isArray(d.list)&&d.list.filter(function(t){return t.type==="varchar"||t.type==="text"}).map(function(t,C){return t.type==="varchar"?(0,a.jsx)(h.Input,{required:w(t),label:c("AdditionalFields.".concat(t.name)),type:"text",name:t.name,onChange:p,onBlur:g,value:String(r[t.name])||"",error:l[t.name]&&m[t.name]},"".concat(t).concat(C)):(0,a.jsx)(h.TextArea,{rows:10,required:w(t),label:c("AdditionalFields.".concat(t.name)),name:t.name,onChange:p,onBlur:g,value:String(r[t.name])||"",error:l[t.name]&&m[t.name]},"".concat(t).concat(C))}),d&&d.list&&d.list.filter(function(t){return t.type==="boolean"}).map(function(t,C){return(0,a.jsx)(h.Checkbox,{checked:!!r[t.name],label:c("AdditionalFields.".concat(t.name)),id:t.name+Date.now(),name:t.name,onChange:p,onBlur:g,required:w(t)},"".concat(t.id).concat(C))}),(0,a.jsx)(h.Button,o({mode:"secondary",type:"submit",loading:ee||X,block:!0},{children:c("MyProfileForm.Update")}))]}))}}))}))})),(0,a.jsx)(_.Col,o({sm:u?12:2},{children:" "}))]})]})};v.MyProfileForm=k,v.default=(0,F.withTheme)((0,F.default)(v.MyProfileForm)(E||(E=S([""],[""]))));var A,B,E})(N);const pe=se.div`
  margin-top: 20px;
`,ge=()=>{const{t:v}=ue();return O.jsx(ce,{title:v("MyProfilePage.EditData"),children:O.jsx(pe,{children:O.jsx(N.MyProfileForm,{})})})};export{ge as default};

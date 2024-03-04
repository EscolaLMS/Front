import{d as v,E as X,a5 as Y,j as w,a9 as ee,r as ne,a6 as te,D as re,q as ae,f as ie}from"./index-CBf-QksF.js";import{P as oe}from"./index-giA7nHkv.js";import{U as le}from"./Upload-Dv2yIh50.js";var T={};(function(x){var q=v&&v.__makeTemplateObject||function(n,a){return Object.defineProperty?Object.defineProperty(n,"raw",{value:a}):n.raw=a,n},u=v&&v.__assign||function(){return u=Object.assign||function(n){for(var a,l=1,p=arguments.length;l<p;l++){a=arguments[l];for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&(n[m]=a[m])}return n},u.apply(this,arguments)},R=v&&v.__createBinding||(Object.create?function(n,a,l,p){p===void 0&&(p=l);var m=Object.getOwnPropertyDescriptor(a,l);(!m||("get"in m?!a.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(n,p,m)}:function(n,a,l,p){p===void 0&&(p=l),n[p]=a[l]}),z=v&&v.__setModuleDefault||(Object.create?function(n,a){Object.defineProperty(n,"default",{enumerable:!0,value:a})}:function(n,a){n.default=a}),I=v&&v.__importStar||function(n){if(n&&n.__esModule)return n;var a={};if(n!=null)for(var l in n)l!=="default"&&Object.prototype.hasOwnProperty.call(n,l)&&R(a,n,l);return z(a,n),a};Object.defineProperty(x,"__esModule",{value:!0}),x.MyProfileForm=void 0;var o=w,U=ee,b=ne,L=te,N=re,V=le,P=I(X),g=Y(),W=P.default.div(M||(M=q([`
  text-align: center;

  h2,
  h3,
  h4 {
    font-size: `,`;
    text-align: left;
  }
  p {
    margin: 15px 0;
    text-align: left;
  }
  .upload {
  }
`],[`
  text-align: center;

  h2,
  h3,
  h4 {
    font-size: `,`;
    text-align: left;
  }
  p {
    margin: 15px 0;
    text-align: left;
  }
  .upload {
  }
`])),function(n){return n.mobile?"18px":"28px"}),Z=P.default.div(C||(C=q([`
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
`])),function(n){return n.mobile?"18px":"28px"}),G=function(n){var a=n.onSuccess,l=n.onError,p=n.mobile,m=p===void 0?!1:p,E=(0,b.useState)({first_name:"",last_name:"",email:"",phone:""}),S=E[0],B=E[1],s=(0,L.useTranslation)().t,_=(0,b.useContext)(N.EscolaLMSContext),H=_.updateProfile,d=_.fields,k=_.fetchFields,y=_.user,$=_.updateAvatar,D=_.fetchProfile,J=y.loading;(0,b.useEffect)(function(){D(),k({class_type:"App\\Models\\User"})},[]),(0,b.useEffect)(function(){!y.loading&&y.value&&B(function(e){return Object.assign({},e,u({},y.value))})},[y]),(0,b.useEffect)(function(){var e=d&&d.list||[];B(function(r){return u(u({},r),e.filter(function(i){var c=i.name;return!(c in r)}).reduce(function(i,c){var f;return u(u({},i),(f={},f[c.name]=c.type==="boolean"?!1:c.default,f))},{}))})},[d]);var F=(0,b.useCallback)(function(e){var r;return!!(e!=null&&e.rules&&(e==null?void 0:e.rules.length)>0&&(!((r=e.rules)===null||r===void 0)&&r.find(function(i){return i==="required"})))},[d]),K=(0,b.useCallback)(function(e){e.target.files&&e.target.files[0]&&$(e.target.files[0])},[$]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(Z,u({className:"wellms-component",mobile:m},{children:[(0,o.jsx)(U.Formik,u({enableReinitialize:!0,initialValues:S,validate:function(e){var r={};return e.first_name||(r.first_name=s("Required")),e.last_name||(r.last_name=s("Required")),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email=s("Wrong email")):r.email=s("Required"),e.phone&&!/\d{9}$/i.test(e.phone)&&(r.phone=s("Wrong phone number")),d.list&&d.list.map(function(i){F(i)&&(e[i.name]||(r[i.name]=s("Required")))}),r},onSubmit:function(e,r){var i=r.setSubmitting,c=r.resetForm,f=r.setErrors;H(u({},e)).then(function(){a&&a()}).catch(function(h){var j;c(),f(u({error:(j=h.data)===null||j===void 0?void 0:j.message},h.data.errors)),l&&l(h)}).finally(function(){i(!1),D()})}},{children:function(e){var r=e.values,i=e.errors,c=e.touched,f=e.handleChange,h=e.handleBlur,j=e.handleSubmit,Q=e.isSubmitting;return(0,o.jsxs)("form",u({onSubmit:j},{children:[i&&i.error&&(0,o.jsx)(g.Text,u({type:"danger"},{children:i.error})),(0,o.jsx)(g.Input,{label:s("First name"),type:"text",name:"first_name",onChange:f,onBlur:h,value:r.first_name,error:c.first_name&&i.first_name,required:!0}),(0,o.jsx)(g.Input,{label:s("Last name"),type:"text",name:"last_name",onChange:f,onBlur:h,value:r.last_name,error:c.last_name&&i.last_name,required:!0}),(0,o.jsx)(g.Input,{label:s("Email"),className:"form-control grey",type:"email",name:"email",onChange:f,onBlur:h,value:r.email,error:c.email&&i.email,required:!0}),(0,o.jsx)(g.Input,{label:s("Phone"),type:"text",name:"phone",onChange:f,onBlur:h,value:r.phone,error:c.phone&&i.phone}),d&&Array.isArray(d.list)&&d.list.filter(function(t){return t.type==="varchar"||t.type==="text"}).map(function(t,O){return t.type==="varchar"?(0,o.jsx)(g.Input,{required:F(t),label:s("AdditionalFields.".concat(t.name)),type:"text",name:t.name,onChange:f,onBlur:h,value:String(r[t.name])||"",error:i[t.name]&&c[t.name]},"".concat(t).concat(O)):(0,o.jsx)(g.TextArea,{rows:10,required:F(t),label:s("AdditionalFields.".concat(t.name)),name:t.name,onChange:f,onBlur:h,value:String(r[t.name])||"",error:i[t.name]&&c[t.name]},"".concat(t).concat(O))}),d&&d.list&&d.list.filter(function(t){return t.type==="boolean"}).map(function(t,O){return(0,o.jsx)(g.Checkbox,{checked:!!r[t.name],label:s("AdditionalFields.".concat(t.name)),id:t.name+Date.now(),name:t.name,onChange:f,onBlur:h,required:F(t)},"".concat(t.id).concat(O))}),(0,o.jsx)(g.Button,u({mode:"secondary",type:"submit",loading:Q||J,block:!0},{children:s("MyProfileForm.Update")}))]}))}}))," ",(0,o.jsxs)(W,u({className:"wellms-component",mobile:m},{children:[(0,o.jsx)(g.Text,u({size:"18"},{children:s("MyProfileForm.Avatar")})),(0,o.jsx)(V.Upload,{path:S.path_avatar,url:S.avatar,accept:"image/*",onChange:K})]}))]}))})};x.MyProfileForm=G,x.default=(0,P.withTheme)((0,P.default)(x.MyProfileForm)(A||(A=q([""],[""]))));var M,C,A})(T);const ue=ae.div`
  margin-top: 20px;
  max-width: 450px;
`,fe=()=>{const{t:x}=ie();return w.jsx(oe,{title:x("MyProfilePage.EditData"),children:w.jsx(ue,{children:w.jsx(T.MyProfileForm,{})})})};export{fe as default};

import{d as x,a5 as X,a2 as Y,j as O,a9 as nn,r as en,a3 as tn,D as rn,q as an,f as on}from"./index-Bjk_45MO.js";import{P as ln}from"./index-CaBsIUEq.js";import{U as sn}from"./Upload-DMNCn73R.js";import"./index-waE41t0D.js";var $={};(function(v){var q=x&&x.__makeTemplateObject||function(e,a){return Object.defineProperty?Object.defineProperty(e,"raw",{value:a}):e.raw=a,e},s=x&&x.__assign||function(){return s=Object.assign||function(e){for(var a,l=1,p=arguments.length;l<p;l++){a=arguments[l];for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&(e[m]=a[m])}return e},s.apply(this,arguments)},R=x&&x.__createBinding||(Object.create?function(e,a,l,p){p===void 0&&(p=l);var m=Object.getOwnPropertyDescriptor(a,l);(!m||("get"in m?!a.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(e,p,m)}:function(e,a,l,p){p===void 0&&(p=l),e[p]=a[l]}),z=x&&x.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),I=x&&x.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(e!=null)for(var l in e)l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)&&R(a,e,l);return z(a,e),a};Object.defineProperty(v,"__esModule",{value:!0}),v.MyProfileForm=void 0;var o=O,U=nn,b=en,L=tn,N=rn,V=sn,w=I(X),g=Y(),W=w.default.div(M||(M=q([`
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
    display: flex;
    align-items: center;
    justify-content: flex-start;

    min-width: 250px;
    .wrapper {
      margin-right: 20px;
      width: 40%;
    }
  }
`],[`
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
    display: flex;
    align-items: center;
    justify-content: flex-start;

    min-width: 250px;
    .wrapper {
      margin-right: 20px;
      width: 40%;
    }
  }
`])),function(e){return e.mobile?"18px":"28px"}),Z=w.default.div(C||(C=q([`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
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
  align-items: flex-start;
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
`])),function(e){return e.mobile?"18px":"28px"}),G=function(e){var a=e.onSuccess,l=e.onError,p=e.mobile,m=p===void 0?!1:p,B=(0,b.useState)({first_name:"",last_name:"",email:"",phone:""}),S=B[0],E=B[1],u=(0,L.useTranslation)().t,_=(0,b.useContext)(N.EscolaLMSContext),H=_.updateProfile,d=_.fields,k=_.fetchFields,y=_.user,D=_.updateAvatar,T=_.fetchProfile,J=y.loading;(0,b.useEffect)(function(){T(),k({class_type:"App\\Models\\User"})},[]),(0,b.useEffect)(function(){!y.loading&&y.value&&E(function(n){return Object.assign({},n,s({},y.value))})},[y]),(0,b.useEffect)(function(){var n=d&&d.list||[];E(function(r){return s(s({},r),n.filter(function(i){var c=i.name;return!(c in r)}).reduce(function(i,c){var f;return s(s({},i),(f={},f[c.name]=c.type==="boolean"?!1:c.default,f))},{}))})},[d]);var P=(0,b.useCallback)(function(n){var r;return!!(n!=null&&n.rules&&(n==null?void 0:n.rules.length)>0&&(!((r=n.rules)===null||r===void 0)&&r.find(function(i){return i==="required"})))},[d]),K=(0,b.useCallback)(function(n){n.target.files&&n.target.files[0]&&D(n.target.files[0])},[D]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(Z,s({className:"wellms-component",mobile:m},{children:[(0,o.jsxs)(W,s({className:"wellms-component",mobile:m},{children:[(0,o.jsx)(g.Text,s({size:"18"},{children:u("MyProfileForm.Avatar")})),(0,o.jsx)(V.Upload,{path:S.path_avatar,url:S.avatar,accept:"image/*",onChange:K})]})),(0,o.jsx)(U.Formik,s({enableReinitialize:!0,initialValues:S,validate:function(n){var r={};return n.first_name||(r.first_name=u("Required")),n.last_name||(r.last_name=u("Required")),n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.email)||(r.email=u("Wrong email")):r.email=u("Required"),n.phone&&!/\d{9}$/i.test(n.phone)&&(r.phone=u("Wrong phone number")),d.list&&d.list.map(function(i){P(i)&&(n[i.name]||(r[i.name]=u("Required")))}),r},onSubmit:function(n,r){var i=r.setSubmitting,c=r.resetForm,f=r.setErrors;H(s({},n)).then(function(){a&&a()}).catch(function(h){var j;c(),f(s({error:(j=h.data)===null||j===void 0?void 0:j.message},h.data.errors)),l&&l(h)}).finally(function(){i(!1),T()})}},{children:function(n){var r=n.values,i=n.errors,c=n.touched,f=n.handleChange,h=n.handleBlur,j=n.handleSubmit,Q=n.isSubmitting;return(0,o.jsxs)("form",s({onSubmit:j},{children:[i&&i.error&&(0,o.jsx)(g.Text,s({type:"danger"},{children:i.error})),(0,o.jsx)(g.Input,{label:u("First name"),type:"text",name:"first_name",onChange:f,onBlur:h,value:r.first_name,error:c.first_name&&i.first_name,required:!0}),(0,o.jsx)(g.Input,{label:u("Last name"),type:"text",name:"last_name",onChange:f,onBlur:h,value:r.last_name,error:c.last_name&&i.last_name,required:!0}),(0,o.jsx)(g.Input,{label:u("Email"),className:"form-control grey",type:"email",name:"email",onChange:f,onBlur:h,value:r.email,error:c.email&&i.email,required:!0}),(0,o.jsx)(g.Input,{label:u("Phone"),type:"text",name:"phone",onChange:f,onBlur:h,value:r.phone,error:c.phone&&i.phone}),d&&Array.isArray(d.list)&&d.list.filter(function(t){return t.type==="varchar"||t.type==="text"}).map(function(t,F){return t.type==="varchar"?(0,o.jsx)(g.Input,{required:P(t),label:u("AdditionalFields.".concat(t.name)),type:"text",name:t.name,onChange:f,onBlur:h,value:String(r[t.name])||"",error:i[t.name]&&c[t.name]},"".concat(t).concat(F)):(0,o.jsx)(g.TextArea,{rows:10,required:P(t),label:u("AdditionalFields.".concat(t.name)),name:t.name,onChange:f,onBlur:h,value:String(r[t.name])||"",error:i[t.name]&&c[t.name]},"".concat(t).concat(F))}),d&&d.list&&d.list.filter(function(t){return t.type==="boolean"}).map(function(t,F){return(0,o.jsx)(g.Checkbox,{checked:!!r[t.name],label:u("AdditionalFields.".concat(t.name)),id:t.name+Date.now(),name:t.name,onChange:f,onBlur:h,required:P(t)},"".concat(t.id).concat(F))}),(0,o.jsx)(g.Button,s({mode:"secondary",type:"submit",loading:Q||J,block:!0},{children:u("MyProfileForm.Update")}))]}))}}))," "]}))})};v.MyProfileForm=G,v.default=(0,w.withTheme)((0,w.default)(v.MyProfileForm)(A||(A=q([""],[""]))));var M,C,A})($);const un=an.div`
  margin-top: 20px;
  max-width: 450px;
`,dn=()=>{const{t:v}=on();return O.jsx(ln,{title:v("MyProfilePage.EditData"),children:O.jsx(un,{children:O.jsx($.MyProfileForm,{})})})};export{dn as default};

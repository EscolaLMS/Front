import{d,aa as rn,a7 as an,aO as on,j as O,ae as ln,r as sn,a8 as un,N as cn,q as mn,f as fn}from"./index-Cy3ZgS4_.js";import{P as pn}from"./index-_TuxVXaK.js";import{U as dn}from"./Upload-D0yothkY.js";import"./index-SP9TgBrl.js";var I={};(function(b){var q=d&&d.__makeTemplateObject||function(n,a){return Object.defineProperty?Object.defineProperty(n,"raw",{value:a}):n.raw=a,n},s=d&&d.__assign||function(){return s=Object.assign||function(n){for(var a,l=1,p=arguments.length;l<p;l++){a=arguments[l];for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&(n[m]=a[m])}return n},s.apply(this,arguments)},U=d&&d.__createBinding||(Object.create?function(n,a,l,p){p===void 0&&(p=l);var m=Object.getOwnPropertyDescriptor(a,l);(!m||("get"in m?!a.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(n,p,m)}:function(n,a,l,p){p===void 0&&(p=l),n[p]=a[l]}),L=d&&d.__setModuleDefault||(Object.create?function(n,a){Object.defineProperty(n,"default",{enumerable:!0,value:a})}:function(n,a){n.default=a}),N=d&&d.__importStar||function(n){if(n&&n.__esModule)return n;var a={};if(n!=null)for(var l in n)l!=="default"&&Object.prototype.hasOwnProperty.call(n,l)&&U(a,n,l);return L(a,n),a},V=d&&d.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(b,"__esModule",{value:!0}),b.MyProfileForm=void 0;var o=O,W=ln,_=sn,Z=un,K=cn,G=dn,w=N(rn),g=an(),H=V(on),k=w.default.div(C||(C=q([`
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
`])),function(n){return n.mobile?"18px":"28px"}),J=w.default.div(A||(A=q([`
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
`])),function(n){return n.mobile?"18px":"28px"}),Q=function(n){var a=n.onSuccess,l=n.onError,p=n.mobile,m=p===void 0?!1:p,E=(0,_.useState)({first_name:"",last_name:"",email:"",phone:""}),M=E[0],T=E[1],u=(0,Z.useTranslation)().t,D=(0,H.default)(),S=D.getFieldTranslations,$=D.filterByKey,y=(0,_.useContext)(K.EscolaLMSContext),X=y.updateProfile,x=y.fields,Y=y.fetchFields,j=y.user,R=y.updateAvatar,z=y.fetchProfile,nn=j.loading;(0,_.useEffect)(function(){z(),Y({class_type:"App\\Models\\User"})},[]),(0,_.useEffect)(function(){!j.loading&&j.value&&T(function(e){return Object.assign({},e,s({},j.value))})},[j]),(0,_.useEffect)(function(){var e=x&&x.list||[];T(function(r){return s(s({},r),e.filter(function(i){var c=i.name;return!(c in r)}).reduce(function(i,c){var f;return s(s({},i),(f={},f[c.name]=c.type==="boolean"?!1:c.default,f))},{}))})},[x]);var P=(0,_.useCallback)(function(e){var r;return!!(e!=null&&e.rules&&(e==null?void 0:e.rules.length)>0&&(!((r=e.rules)===null||r===void 0)&&r.find(function(i){return i==="required"})))},[x]),en=(0,_.useCallback)(function(e){e.target.files&&e.target.files[0]&&R(e.target.files[0])},[R]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(J,s({className:"wellms-component",mobile:m},{children:[(0,o.jsxs)(k,s({className:"wellms-component",mobile:m},{children:[(0,o.jsx)(g.Text,s({size:"18"},{children:u("MyProfileForm.Avatar")})),(0,o.jsx)(G.Upload,{path:M.path_avatar,url:M.avatar,accept:"image/*",onChange:en})]})),(0,o.jsx)(W.Formik,s({enableReinitialize:!0,initialValues:M,validate:function(e){var r={};return e.first_name||(r.first_name=u("Required")),e.last_name||(r.last_name=u("Required")),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email=u("Wrong email")):r.email=u("Required"),e.phone&&!/\d{9}$/i.test(e.phone)&&(r.phone=u("Wrong phone number")),x.list&&x.list.map(function(i){P(i)&&(e[i.name]||(r[i.name]=u("Required")))}),r},onSubmit:function(e,r){var i=r.setSubmitting,c=r.resetForm,f=r.setErrors;X(s({},e)).then(function(){a&&a()}).catch(function(h){var F;c(),f(s({error:(F=h.data)===null||F===void 0?void 0:F.message},h.data.errors)),l&&l(h)}).finally(function(){i(!1),z()})}},{children:function(e){var r=e.values,i=e.errors,c=e.touched,f=e.handleChange,h=e.handleBlur,F=e.handleSubmit,tn=e.isSubmitting;return(0,o.jsxs)("form",s({onSubmit:F},{children:[i&&i.error&&(0,o.jsx)(g.Text,s({type:"danger"},{children:i.error})),(0,o.jsx)(g.Input,{label:u("First name"),type:"text",name:"first_name",onChange:f,onBlur:h,value:r.first_name,error:c.first_name&&i.first_name,required:!0}),(0,o.jsx)(g.Input,{label:u("Last name"),type:"text",name:"last_name",onChange:f,onBlur:h,value:r.last_name,error:c.last_name&&i.last_name,required:!0}),(0,o.jsx)(g.Input,{label:u("Email"),className:"form-control grey",type:"email",name:"email",onChange:f,onBlur:h,value:r.email,error:c.email&&i.email,required:!0}),(0,o.jsx)(g.Input,{label:u("Phone"),type:"text",name:"phone",onChange:f,onBlur:h,value:r.phone,error:c.phone&&i.phone}),(x.list||[]).filter(function(t){var v=$(t);return t.type!=="boolean"&&!v}).map(function(t,v){return t.type==="varchar"?(0,o.jsx)(g.Input,{required:P(t),label:S(t)||u("AdditionalFields.".concat(t.name)),type:"text",name:t.name,onChange:f,onBlur:h,value:String(r[t.name])||"",error:i[t.name]&&c[t.name]},"".concat(t).concat(v)):(0,o.jsx)(g.TextArea,{rows:10,required:P(t),label:S(t)||u("AdditionalFields.".concat(t.name)),name:t.name,onChange:f,onBlur:h,value:String(r[t.name])||"",error:i[t.name]&&c[t.name]},"".concat(t).concat(v))}),(x.list||[]).filter(function(t){var v=$(t);return t.type==="boolean"&&!v}).map(function(t,v){return(0,o.jsx)(g.Checkbox,{checked:!!r[t.name],label:S(t)||u("AdditionalFields.".concat(t.name)),id:t.name+Date.now(),name:t.name,onChange:f,onBlur:h,required:P(t)},"".concat(t.id).concat(v))}),(0,o.jsx)(g.Button,s({mode:"secondary",type:"submit",loading:tn||nn,block:!0},{children:u("MyProfileForm.Update")}))]}))}}))," "]}))})};b.MyProfileForm=Q,b.default=(0,w.withTheme)((0,w.default)(b.MyProfileForm)(B||(B=q([""],[""]))));var C,A,B})(I);const hn=mn.div`
  margin-top: 20px;
  max-width: 450px;
`,_n=()=>{const{t:b}=fn();return O.jsx(pn,{title:b("MyProfilePage.EditData"),children:O.jsx(hn,{children:O.jsx(I.MyProfileForm,{})})})};export{_n as default};

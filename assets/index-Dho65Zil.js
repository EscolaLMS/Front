import{r as c,A as q,q as P,f as U,i as ie,l as ee,j as n,T as Y,s as A,w as O,n as k,W as Le,m as G,v as E,Y as s1,Z as Ne,x as we,X as Oe,h as De,D as Ae,a0 as Te,J as se,L as ne,a1 as r1,a2 as o1,d as C,a3 as Se,a4 as pe,a5 as i1,a6 as xe,a7 as a1,a8 as l1,a9 as D,b as c1,aa as d1,ab as u1,ac as p1,ad as x1,ae as m1,af as g1,I as Fe,ag as Ge,ah as C1,ai as qe,aj as h1,S as f1,C as Pe,o as v1,ak as j1,al as Re,M as He}from"./index-DvAWm433.js";import{P as _1}from"./PricingCard-DOxCuQ7h.js";import{u as Ue}from"./useSubscriptions-iev8sl41.js";import{P as We}from"./index-D8EfHB45.js";import{l as b1,A as y1,_ as w1,P as T1,I as P1,a as M1,O as O1,H as A1}from"./index-BZA99K8F.js";import{B as S1}from"./index-DzA4Qp_b.js";import{Q as Qe,a as Ie,g as L1}from"./questionnaires-BgSEdNGG.js";import{R as N1,a as R1}from"./ResponsiveImage-Cth0O_1O.js";import{C as H1}from"./index-azsKiB8G.js";import{t as I1}from"./toast-DKFFGsXi.js";import{P as B1}from"./index-CUw63Xwg.js";import{D as k1}from"./index-CEsS0py2.js";import{S as V1}from"./swiper-DfhQq162.js";import{S as $1}from"./swiper-react-DWVW_Yzd.js";import{C as E1}from"./index-s4NFn4uQ.js";import{S as B}from"./index-Ctlg9Kww.js";import"./warning-B-x6DfIv.js";import"./index-D2uer4Nx.js";import"./useFetchCourses-DiF1fgM5.js";import"./CourseCard-hUDdWhRW.js";import"./a11y-CyPfFaPx.js";const z1=e=>{const[t,s]=c.useState({data:void 0,loaded:!1,loading:!1}),{user:r,fetchCourseProgress:o,courseProgressDetails:i}=c.useContext(q.EscolaLMSContext);return c.useEffect(()=>{i.byId&&i.byId[Number(e)]&&i.byId[Number(e)].value&&s({...t,data:i.byId[Number(e)].value,loaded:!0,loading:!1})},[e,i]),c.useEffect(()=>{r!=null&&r.value&&!r.loading&&!t.loading&&!t.loaded?(s({...t,loading:!0}),o(e).catch(()=>s({...t,loaded:!0,loading:!1}))):t.loaded||s({...t,loaded:!0})},[r,t,o,e]),{progress:t}},Z1=P.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`,Be=P.div`
  border-radius: ${({theme:e})=>e.cardRadius}px;
  border: 1px solid ${({theme:e})=>e.gray3};
  padding: 20px 40px;
  margin-bottom: ${({$isMobile:e})=>e?"20px":"0"};
  min-height: 240px;
  .divider {
    width: 21px;
    height: 3px;
    border-radius: 18px;
    background-color: ${({theme:e})=>e.primaryColor};
    margin: 10px auto;
  }
  .description {
    margin-bottom: 30px;
    min-height: 30px;
  }
  .price {
    margin-bottom: 22px;
  }
  button {
    width: 100%;
  }
`,D1=({course:e})=>{var p,g;const{getCheapestSubscription:t}=Ue(),{cart:s,addToCart:r}=c.useContext(q.EscolaLMSContext),{t:o}=U(),{push:i}=ie(),l=c.useCallback(()=>{var f;r(Number((f=e.product)==null?void 0:f.id)).then(()=>i(ee.cart))},[(p=e.product)==null?void 0:p.id,r,i]);return n.jsxs(Z1,{children:[n.jsx(Y.Title,{className:"modal-header",level:2,children:o("Subscriptions.GetAccess")}),n.jsx(A.Text,{children:o("Subscriptions.YouHaveTwoOptions")}),n.jsxs(O.Row,{children:[n.jsx(O.Col,{lg:6,md:12,sm:12,children:n.jsxs(Be,{className:"product-box",$isMobile:k,children:[n.jsx(Y.Title,{level:3,children:e.title}),n.jsx("div",{className:"divider"}),n.jsx(A.Text,{className:"description",size:"13",children:e.description}),n.jsxs(A.Text,{className:"price",size:"24",bold:!0,children:[Le((g=e.product)==null?void 0:g.gross_price)," zł"]}),n.jsx(G.Button,{loading:s.loading,onClick:()=>l(),children:o("Subscriptions.IPick")})]})}),(t==null?void 0:t.id)&&n.jsx(O.Col,{lg:6,md:12,sm:12,children:n.jsxs(Be,{className:"product-box",$isMobile:k,children:[n.jsx(Y.Title,{level:3,children:t==null?void 0:t.name}),n.jsx("div",{className:"divider"}),n.jsx(A.Text,{className:"description",size:"13",children:t==null?void 0:t.description}),n.jsxs(A.Text,{className:"price",size:"24",bold:!0,children:[Le(t==null?void 0:t.gross_price)," zł"]}),n.jsx(G.Button,{onClick:()=>{var f;return i((f=ee)==null?void 0:f.subscriptions)},children:o("Subscriptions.IPick")})]})})]})]})},ke=P(E.Button)`
  display: block;
  margin-bottom: 10px;
`,F1=({course:e,onRequestAccess:t,setModalVisible:s})=>{var x;const{t:r}=U(),{push:o}=ie(),{courseAccess:i,fetchCourseAccess:l}=c.useContext(q.EscolaLMSContext),{attachProduct:p,getActiveSubscription:g}=Ue(),f=c.useMemo(()=>{var _,d;return(d=(_=i.list)==null?void 0:_.data)==null?void 0:d.find(h=>{var j;return((j=h==null?void 0:h.course)==null?void 0:j.id)===e.id})},[(x=i.list)==null?void 0:x.data,e.id]),a=c.useCallback(()=>{s(!0)},[s]),u=c.useCallback(()=>{p(e.id,"EscolaLms\\Courses\\Models\\Course").then(()=>[o(`/course/${e.id}`),l({course_id:Number(e.id),current_page:1,per_page:1})])},[p,e.id,o,l]),m=c.useMemo(()=>n.jsx(E.Button,{mode:"secondary",onClick:()=>a(),children:r("Buy Course")}),[r,a]);return g!=null&&g.id?n.jsx(E.Button,{onClick:()=>u(),mode:"secondary",children:r("Go to the course")}):f?f.status!=="approved"?n.jsxs(n.Fragment,{children:[n.jsx(ke,{mode:"secondary",disabled:!0,children:r("CourseAccess.Pending")}),m]}):f.status==="approved"?n.jsx(E.Button,{onClick:()=>o(`/course/${e.id}`),mode:"secondary",children:r("Go to the course")}):m:n.jsxs(n.Fragment,{children:[n.jsx(ke,{mode:"secondary",onClick:t,children:r("CourseAccess.RequestAccess")}),m]})},G1=({course:e,userOwnThisCourse:t,onRequestAccess:s})=>{var a,u;const{cart:r,user:o}=c.useContext(q.EscolaLMSContext),{t:i}=U(),{push:l}=ie(),[p,g]=c.useState(!1),f=c.useMemo(()=>{var m;return(m=r==null?void 0:r.value)==null?void 0:m.items.some(x=>{var _;return Number(x.product_id)===Number((_=e.product)==null?void 0:_.id)})},[(a=e.product)==null?void 0:a.id,r]);return s1(Number((u=o.value)==null?void 0:u.id),e)?n.jsx(E.Button,{onClick:()=>l(`/course/${e.id}`),mode:"secondary",children:i("Go to the course")}):Ne(new Date(e.active_to||""))?n.jsx(A.Text,{children:i("CoursePage.IsFinished")}):f?n.jsx(E.Button,{mode:"secondary",onClick:()=>l(ee.cart),children:i("CoursePage.GoToCheckout")}):t&&Ne(new Date(e.active_from||""))?n.jsx(E.Button,{onClick:()=>l(`/course/${e.id}`),mode:"secondary",children:i("Go to the course")}):t?n.jsx(A.Text,{children:i("CoursePage.NotStarted")}):o.value&&e.product?n.jsxs(n.Fragment,{children:[n.jsx(F1,{course:e,onRequestAccess:s,setModalVisible:g}),n.jsx(we.Modal,{onClose:()=>g(!1),visible:p,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:800,children:n.jsx(D1,{course:e})})]}):e.product?n.jsx(n.Fragment,{children:n.jsx(E.Button,{onClick:()=>l(`/login?referrer=/courses/${e.id}`),mode:"secondary",children:i("Buy Course")})}):n.jsx(A.Text,{children:i("CoursePage.UnavailableCourse")})},q1=P.div`
  width: 100%;
  left: 0;
  position: ${k?"static":"sticky"};
  top: ${k?"unset":"130px"};
  bottom: ${k?"0":"unset"};
  z-index: 100;
  .course-sidebar-header {
    p {
      margin-bottom: 0;
    }
  }
  .price-wrapper {
    margin-bottom: 16px;
    * {
      font-weight: 700;
    }
  }
  button {
    width: 100%;
  }
`,re=P.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 13px;
    font-weight: 700;
    &:first-of-type {
      font-weight: 400;
    }
  }
`,Ve=({course:e,onRequestAccess:t})=>{var m,x,_,d,h;const s=Oe(),{user:r,courseAccess:o}=c.useContext(De.EscolaLMSContext),{t:i}=U(),{id:l}=Ae(),{progress:p}=z1(Number(l)),g=c.useMemo(()=>{var j;return(j=e==null?void 0:e.product)==null?void 0:j.owned},[(m=e==null?void 0:e.product)==null?void 0:m.owned]),f=c.useMemo(()=>{var j,w;return!!((w=(j=o.list)==null?void 0:j.data)!=null&&w.find(y=>{var S;return((S=y==null?void 0:y.course)==null?void 0:S.id)===e.id&&y.status==="approved"}))},[e.id,(x=o.list)==null?void 0:x.data]),a=c.useMemo(()=>p.data||[],[p.data]),u=c.useMemo(()=>r.value&&(g||f)?((a==null?void 0:a.filter(w=>w.status===1))||[]).length:0,[a,r.value,f,g]);return n.jsx(q1,{children:n.jsxs(_1.PricingCard,{children:[n.jsxs("div",{className:"course-sidebar-header",children:[n.jsx(A.Text,{size:"13",children:"Cena za dostęp"}),n.jsx("div",{className:"price-wrapper",children:n.jsx(We,{price:(_=e.product)==null?void 0:_.price,taxRate:(d=e.product)==null?void 0:d.tax_rate,oldPrice:(h=e.product)==null?void 0:h.price_old,textSizes:{old:"18",new:"24"}})})]}),p.loaded?n.jsx(G1,{onRequestAccess:t,course:e,userOwnThisCourse:g}):n.jsx(Te,{}),n.jsxs(A.Text,{size:"12",children:[" ",i("CoursePage.30Days")]}),n.jsxs("div",{className:"pricing-card-features",children:[e.duration&&n.jsx(se.IconText,{text:n.jsxs(re,{children:[n.jsx("span",{children:i("CoursePage.Duration")}),n.jsx("span",{children:e.duration})]})}),e.lessons&&n.jsx(se.IconText,{text:n.jsxs(re,{children:[n.jsx("span",{children:i("CoursePage.Lessons")}),n.jsx("span",{children:e.lessons.length})]})}),e.language&&n.jsx(se.IconText,{text:n.jsxs(re,{children:[n.jsx("span",{children:i("CoursePage.Language")}),n.jsx("span",{children:e.language})]})}),e.level&&n.jsx(se.IconText,{text:n.jsxs(re,{children:[n.jsx("span",{children:i("CoursePage.Level")}),n.jsx("span",{children:e.level})]})}),e.users_count?n.jsx(se.IconText,{text:n.jsxs(re,{children:[n.jsx("span",{children:i("CoursePage.Students")}),n.jsx("span",{children:e.users_count})]})}):""]}),r.value?n.jsxs(r1.CourseProgress,{progress:a&&(a==null?void 0:a.length)>0?u/a.length:0,icon:p.loaded?n.jsx(o1,{}):n.jsx(Te,{width:"22px",height:"22px"}),title:i("CoursePage.MyProgress"),children:[n.jsxs("strong",{style:{fontSize:14},children:[i("CoursePage.Finished")," ",u||0," ",i("CoursePage.Of")," ",a&&(a==null?void 0:a.length)>0?a.length:0," ",i("CoursePage.Lessons")]}),n.jsx("p",{style:{marginTop:9,marginBottom:0},children:i("CoursePage.FinishToGetCertificate")})]}):n.jsxs(A.Text,{size:"12",children:[n.jsx(ne,{to:`/login?referrer=/courses/${e.id}`,style:{marginRight:"4px",color:s.primaryColor},children:i("CoursePage.Login")}),i("CoursePage.ToSeeProgress")]})]})})};var Xe={},Ye={},me={},ge={},Ce={},$=C&&C.__assign||function(){return $=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},$.apply(this,arguments)},L;Object.defineProperty(Ce,"__esModule",{value:!0});Ce.TopicIcon=void 0;var T=n,N=b1,U1=function(){return(0,T.jsx)("svg",$({width:"19",height:"23",viewBox:"0 0 19 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,T.jsx)("path",{d:"M18.2188 5.63599C18.2177 5.3705 18.1121 5.11612 17.9247 4.92799L13.9247 0.927991C13.8322 0.835564 13.7225 0.762179 13.6017 0.711991C13.4804 0.661431 13.3502 0.635593 13.2188 0.635991H1.21875C0.953534 0.635991 0.69918 0.741348 0.511643 0.928884C0.324107 1.11642 0.21875 1.37077 0.21875 1.63599V21.636C0.21875 21.9012 0.324107 22.1556 0.511643 22.3431C0.69918 22.5306 0.953534 22.636 1.21875 22.636H17.2188C17.484 22.636 17.7383 22.5306 17.9259 22.3431C18.1134 22.1556 18.2188 21.9012 18.2188 21.636V5.63599ZM16.2188 20.636H2.21875V2.63599H12.2188V5.63599C12.2188 5.90121 12.3241 6.15556 12.5116 6.3431C12.6992 6.53063 12.9535 6.63599 13.2188 6.63599H16.2188V20.636ZM13.2188 8.63599C13.484 8.63599 13.7383 8.74135 13.9259 8.92888C14.1134 9.11642 14.2188 9.37077 14.2188 9.63599C14.2188 9.90121 14.1134 10.1556 13.9259 10.3431C13.7383 10.5306 13.484 10.636 13.2188 10.636H5.21875C4.95353 10.636 4.69918 10.5306 4.51164 10.3431C4.32411 10.1556 4.21875 9.90121 4.21875 9.63599C4.21875 9.37077 4.32411 9.11642 4.51164 8.92888C4.69918 8.74135 4.95353 8.63599 5.21875 8.63599H13.2188ZM4.21875 5.63599C4.21875 5.37077 4.32411 5.11642 4.51164 4.92888C4.69918 4.74135 4.95353 4.63599 5.21875 4.63599H9.21875C9.48397 4.63599 9.73832 4.74135 9.92586 4.92888C10.1134 5.11642 10.2188 5.37077 10.2188 5.63599C10.2188 5.90121 10.1134 6.15556 9.92586 6.3431C9.73832 6.53063 9.48397 6.63599 9.21875 6.63599H5.21875C4.95353 6.63599 4.69918 6.53063 4.51164 6.3431C4.32411 6.15556 4.21875 5.90121 4.21875 5.63599ZM14.2188 13.636C14.2188 13.9012 14.1134 14.1556 13.9259 14.3431C13.7383 14.5306 13.484 14.636 13.2188 14.636H5.21875C4.95353 14.636 4.69918 14.5306 4.51164 14.3431C4.32411 14.1556 4.21875 13.9012 4.21875 13.636C4.21875 13.3708 4.32411 13.1164 4.51164 12.9289C4.69918 12.7413 4.95353 12.636 5.21875 12.636H13.2188C13.484 12.636 13.7383 12.7413 13.9259 12.9289C14.1134 13.1164 14.2188 13.3708 14.2188 13.636ZM14.2188 17.636C14.2188 17.9012 14.1134 18.1556 13.9259 18.3431C13.7383 18.5306 13.484 18.636 13.2188 18.636H5.21875C4.95353 18.636 4.69918 18.5306 4.51164 18.3431C4.32411 18.1556 4.21875 17.9012 4.21875 17.636C4.21875 17.3708 4.32411 17.1164 4.51164 16.9289C4.69918 16.7413 4.95353 16.636 5.21875 16.636H13.2188C13.484 16.636 13.7383 16.7413 13.9259 16.9289C14.1134 17.1164 14.2188 17.3708 14.2188 17.636Z",fill:"#4A4A4A"})}))},W1=function(){return(0,T.jsx)("svg",$({width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,T.jsx)("path",{d:"M1 20.636H19C19.2652 20.636 19.5196 20.5306 19.7071 20.3431C19.8946 20.1556 20 19.9012 20 19.636V1.63599C20 1.37077 19.8946 1.11642 19.7071 0.928879C19.5196 0.741343 19.2652 0.635986 19 0.635986H1C0.734784 0.635986 0.48043 0.741343 0.292893 0.928879C0.105357 1.11642 0 1.37077 0 1.63599V19.636C0 19.9012 0.105357 20.1556 0.292893 20.3431C0.48043 20.5306 0.734784 20.636 1 20.636ZM3.414 18.636L8 14.05L9.293 15.343C9.48053 15.5305 9.73484 15.6358 10 15.6358C10.2652 15.6358 10.5195 15.5305 10.707 15.343L15 11.05L18 14.05V18.636H3.414ZM18 2.63599V11.222L15.707 8.92899C15.5195 8.74152 15.2652 8.6362 15 8.6362C14.7348 8.6362 14.4805 8.74152 14.293 8.92899L10 13.222L8.707 11.929C8.51947 11.7415 8.26516 11.6362 8 11.6362C7.73484 11.6362 7.48053 11.7415 7.293 11.929L2 17.222V2.63599H18ZM4 7.13599C4 6.64153 4.14662 6.15818 4.42133 5.74706C4.69603 5.33594 5.08648 5.01551 5.54329 4.82629C6.00011 4.63707 6.50277 4.58756 6.98773 4.68402C7.47268 4.78049 7.91814 5.01859 8.26777 5.36822C8.6174 5.71785 8.8555 6.16331 8.95196 6.64826C9.04843 7.13321 8.99892 7.63588 8.8097 8.0927C8.62048 8.54951 8.30005 8.93996 7.88893 9.21466C7.4778 9.48936 6.99445 9.63599 6.5 9.63599C5.83696 9.63599 5.20107 9.37259 4.73223 8.90375C4.26339 8.43491 4 7.79903 4 7.13599Z",fill:"#4A4A4A"})}))},Q1=function(){return(0,T.jsx)("svg",$({width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,T.jsx)("path",{d:"M3 5.72311C2.20435 5.72311 1.44129 6.03918 0.87868 6.60179C0.316071 7.1644 0 7.92746 0 8.72311V12.5491C0.00256297 13.1674 0.196084 13.7697 0.554088 14.2738C0.912091 14.7779 1.41709 15.159 2 15.3651V19.6361C2 19.9013 2.10536 20.1557 2.29289 20.3432C2.48043 20.5308 2.73478 20.6361 3 20.6361H7C7.26522 20.6361 7.51957 20.5308 7.70711 20.3432C7.89464 20.1557 8 19.9013 8 19.6361V16.0591L18.609 20.5591C18.7613 20.6238 18.9272 20.6497 19.0919 20.6345C19.2567 20.6193 19.4151 20.5634 19.5529 20.472C19.6908 20.3805 19.8038 20.2563 19.8818 20.1104C19.9598 19.9645 20.0004 19.8015 20 19.6361V1.63611C20.0001 1.47084 19.9592 1.30813 19.8811 1.16252C19.8029 1.01691 19.6899 0.892938 19.5521 0.8017C19.4143 0.710462 19.256 0.654798 19.0914 0.639687C18.9269 0.624576 18.7611 0.650489 18.609 0.715108L6.8 5.72311H3ZM6 18.6361H4V15.5491H6V18.6361ZM6 13.5491H3C2.73478 13.5491 2.48043 13.4438 2.29289 13.2562C2.10536 13.0687 2 12.8143 2 12.5491V8.72311C2 8.45789 2.10536 8.20354 2.29289 8.016C2.48043 7.82846 2.73478 7.72311 3 7.72311H6V13.5491ZM8 7.38511L18 3.14611V18.1261L8 13.8871V7.38511Z",fill:"#4A4A4A"})}))},de=function(){return(0,T.jsx)("svg",$({width:"22",height:"23",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,T.jsx)("path",{d:"M2.111 22.636H7.667C7.93222 22.636 8.18657 22.5307 8.37411 22.3431C8.56164 22.1556 8.667 21.9012 8.667 21.636V19.536C8.65706 19.233 8.75204 18.9359 8.93589 18.6948C9.11973 18.4538 9.38116 18.2836 9.676 18.213C9.85146 18.1823 10.0315 18.1903 10.2036 18.2363C10.3756 18.2824 10.5356 18.3655 10.6722 18.4797C10.8088 18.594 10.9189 18.7367 10.9947 18.8979C11.0705 19.0591 11.1102 19.2349 11.111 19.413V21.636C11.111 21.9012 11.2164 22.1556 11.4039 22.3431C11.5914 22.5307 11.8458 22.636 12.111 22.636H15.445C16.0047 22.6355 16.5413 22.4129 16.9371 22.0171C17.3329 21.6214 17.5555 21.0847 17.556 20.525V17.08H18.778C19.2463 17.0799 19.709 16.9778 20.1339 16.7807C20.5587 16.5836 20.9355 16.2963 21.2381 15.9389C21.5406 15.5814 21.7617 15.1623 21.8858 14.7107C22.01 14.2591 22.0343 13.7859 21.957 13.324C21.8101 12.5602 21.3993 11.8723 20.7963 11.3809C20.1934 10.8895 19.4368 10.6258 18.659 10.636H17.559V7.19103C17.5585 6.63132 17.3359 6.09469 16.9401 5.69891C16.5443 5.30314 16.0077 5.08056 15.448 5.08003H12V3.97603C12.0109 3.19786 11.7475 2.44069 11.256 1.83729C10.7645 1.23389 10.0763 0.82277 9.312 0.67603C8.84979 0.598351 8.3762 0.622446 7.92426 0.746636C7.47232 0.870826 7.05292 1.09212 6.6953 1.39508C6.33769 1.69804 6.05048 2.07538 5.85371 2.50076C5.65694 2.92615 5.55534 3.38934 5.556 3.85803V5.08003H2.111C1.55129 5.08056 1.01466 5.30314 0.618882 5.69891C0.223108 6.09469 0.000529527 6.63132 0 7.19103V11.636C0 11.9012 0.105357 12.1556 0.292893 12.3431C0.48043 12.5307 0.734784 12.636 1 12.636H3.1C3.40309 12.6263 3.70024 12.7215 3.94128 12.9055C4.18232 13.0895 4.35247 13.3511 4.423 13.646C4.45372 13.8214 4.44577 14.0014 4.3997 14.1735C4.35363 14.3455 4.27055 14.5053 4.15626 14.6419C4.04198 14.7785 3.89925 14.8884 3.73805 14.9641C3.57686 15.0398 3.40108 15.0794 3.223 15.08H1C0.734784 15.08 0.48043 15.1854 0.292893 15.3729C0.105357 15.5605 0 15.8148 0 16.08V20.525C0.000529527 21.0847 0.223108 21.6214 0.618882 22.0171C1.01466 22.4129 1.55129 22.6355 2.111 22.636ZM2 17.08H3.222C3.69025 17.0798 4.15282 16.9775 4.57754 16.7804C5.00227 16.5832 5.37895 16.2959 5.6814 15.9385C5.98386 15.581 6.20481 15.162 6.32891 14.7105C6.45301 14.259 6.47727 13.7859 6.4 13.324C6.25326 12.5597 5.84214 11.8715 5.23874 11.38C4.63534 10.8885 3.87817 10.6251 3.1 10.636H2V7.19103C2 7.16159 2.01169 7.13336 2.03251 7.11254C2.05333 7.09172 2.08156 7.08003 2.111 7.08003H6.556C6.68732 7.08003 6.81736 7.05416 6.93868 7.00391C7.06001 6.95365 7.17025 6.88 7.26311 6.78714C7.35597 6.69428 7.42962 6.58404 7.47988 6.46271C7.53013 6.34139 7.556 6.21135 7.556 6.08003V3.85803C7.55595 3.67953 7.59497 3.50319 7.67033 3.34137C7.74569 3.17956 7.85555 3.03621 7.99221 2.92138C8.12886 2.80654 8.289 2.72301 8.46137 2.67666C8.63375 2.6303 8.81418 2.62223 8.99 2.65303C9.28502 2.72339 9.54668 2.8935 9.73073 3.13457C9.91477 3.37565 10.0099 3.6729 10 3.97603V6.07603C10 6.34125 10.1054 6.5956 10.2929 6.78314C10.4804 6.97067 10.7348 7.07603 11 7.07603H15.445C15.4744 7.07603 15.5027 7.08772 15.5235 7.10854C15.5443 7.12936 15.556 7.15759 15.556 7.18703V11.636C15.556 11.9012 15.6614 12.1556 15.8489 12.3431C16.0364 12.5307 16.2908 12.636 16.556 12.636H18.656C18.9593 12.6261 19.2566 12.7212 19.4979 12.9052C19.7391 13.0892 19.9094 13.3509 19.98 13.646C20.0104 13.8218 20.0021 14.0021 19.9556 14.1743C19.9091 14.3465 19.8256 14.5065 19.7108 14.6431C19.596 14.7797 19.4528 14.8895 19.2912 14.965C19.1296 15.0405 18.9534 15.0797 18.775 15.08H16.556C16.2908 15.08 16.0364 15.1854 15.8489 15.3729C15.6614 15.5605 15.556 15.8148 15.556 16.08V20.525C15.556 20.5545 15.5443 20.5827 15.5235 20.6035C15.5027 20.6243 15.4744 20.636 15.445 20.636H13.111V19.414C13.1111 18.9457 13.0091 18.4829 12.812 18.058C12.615 17.6331 12.3277 17.2563 11.9702 16.9538C11.6126 16.6513 11.1934 16.4303 10.7418 16.3064C10.2901 16.1824 9.81688 16.1584 9.355 16.236C8.59071 16.3828 7.90248 16.7939 7.41098 17.3973C6.91948 18.0007 6.65609 18.7579 6.667 19.536V20.636H2.111C2.08156 20.636 2.05333 20.6243 2.03251 20.6035C2.01169 20.5827 2 20.5545 2 20.525V17.08Z",fill:"#4A4A4A"})}))},X1=function(){return(0,T.jsx)("svg",$({width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,T.jsx)("path",{d:"M1.24675 18.5179C1.40642 18.6033 1.58629 18.6438 1.76717 18.635C1.94804 18.6262 2.12314 18.5684 2.27375 18.4679L14.2738 10.4679C14.4107 10.3766 14.523 10.2528 14.6007 10.1077C14.6783 9.96257 14.719 9.8005 14.719 9.63589C14.719 9.47128 14.6783 9.30921 14.6007 9.16407C14.523 9.01894 14.4107 8.89522 14.2738 8.80389L2.27375 0.803892C2.12315 0.703413 1.9481 0.645704 1.76727 0.63692C1.58644 0.628136 1.40661 0.668608 1.24699 0.754018C1.08736 0.839428 0.953906 0.966571 0.860876 1.12188C0.767845 1.2772 0.718723 1.45485 0.71875 1.63589V17.6359C0.718677 17.8169 0.767753 17.9946 0.860742 18.1499C0.953731 18.3053 1.08714 18.4324 1.24675 18.5179ZM2.71875 3.50489L11.9187 9.63589L2.71875 15.7669V3.50489ZM15.7188 15.6359V3.63589C15.7188 3.37068 15.8241 3.11632 16.0116 2.92879C16.1992 2.74125 16.4535 2.63589 16.7188 2.63589C16.984 2.63589 17.2383 2.74125 17.4259 2.92879C17.6134 3.11632 17.7188 3.37068 17.7188 3.63589V15.6359C17.7188 15.9011 17.6134 16.1555 17.4259 16.343C17.2383 16.5305 16.984 16.6359 16.7188 16.6359C16.4535 16.6359 16.1992 16.5305 16.0116 16.343C15.8241 16.1555 15.7188 15.9011 15.7188 15.6359Z",fill:"#4A4A4A"})}))},Y1=function(){return(0,T.jsx)("svg",$({width:"23",height:"21",viewBox:"0 0 23 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,T.jsx)("path",{d:"M1.21875 10.6357H4.21875C4.48397 10.6357 4.73832 10.5304 4.92586 10.3428C5.11339 10.1553 5.21875 9.90096 5.21875 9.63574C5.21875 9.37053 5.11339 9.11617 4.92586 8.92864C4.73832 8.7411 4.48397 8.63574 4.21875 8.63574H3.85375L4.43975 6.94374H7.99775L8.58375 8.63574H8.21875C7.95353 8.63574 7.69918 8.7411 7.51164 8.92864C7.32411 9.11617 7.21875 9.37053 7.21875 9.63574C7.21875 9.90096 7.32411 10.1553 7.51164 10.3428C7.69918 10.5304 7.95353 10.6357 8.21875 10.6357H11.2188C11.484 10.6357 11.7383 10.5304 11.9259 10.3428C12.1134 10.1553 12.2188 9.90096 12.2188 9.63574C12.2188 9.37053 12.1134 9.11617 11.9259 8.92864C11.7383 8.7411 11.484 8.63574 11.2188 8.63574H10.7008L8.16375 1.30874C8.09575 1.11224 7.96819 0.941817 7.79882 0.821194C7.62945 0.700571 7.42669 0.635747 7.21875 0.635742H5.21875C5.01081 0.635747 4.80805 0.700571 4.63868 0.821194C4.4693 0.941817 4.34174 1.11224 4.27375 1.30874L1.73675 8.63574H1.21875C0.953534 8.63574 0.69918 8.7411 0.511643 8.92864C0.324107 9.11617 0.21875 9.37053 0.21875 9.63574C0.21875 9.90096 0.324107 10.1553 0.511643 10.3428C0.69918 10.5304 0.953534 10.6357 1.21875 10.6357ZM5.93075 2.63574H6.50675L7.30675 4.94374H5.13175L5.93075 2.63574ZM22.2188 2.63574C22.2188 2.90096 22.1134 3.15531 21.9259 3.34285C21.7383 3.53039 21.484 3.63574 21.2188 3.63574H14.2188C13.9535 3.63574 13.6992 3.53039 13.5116 3.34285C13.3241 3.15531 13.2188 2.90096 13.2188 2.63574C13.2188 2.37053 13.3241 2.11617 13.5116 1.92864C13.6992 1.7411 13.9535 1.63574 14.2188 1.63574H21.2188C21.484 1.63574 21.7383 1.7411 21.9259 1.92864C22.1134 2.11617 22.2188 2.37053 22.2188 2.63574ZM22.2188 8.63574C22.2188 8.90096 22.1134 9.15531 21.9259 9.34285C21.7383 9.53039 21.484 9.63574 21.2188 9.63574H14.2188C13.9535 9.63574 13.6992 9.53039 13.5116 9.34285C13.3241 9.15531 13.2188 8.90096 13.2188 8.63574C13.2188 8.37053 13.3241 8.11617 13.5116 7.92864C13.6992 7.7411 13.9535 7.63574 14.2188 7.63574H21.2188C21.484 7.63574 21.7383 7.7411 21.9259 7.92864C22.1134 8.11617 22.2188 8.37053 22.2188 8.63574ZM22.2188 13.6357C22.2188 13.901 22.1134 14.1553 21.9259 14.3428C21.7383 14.5304 21.484 14.6357 21.2188 14.6357H1.21875C0.953534 14.6357 0.69918 14.5304 0.511643 14.3428C0.324107 14.1553 0.21875 13.901 0.21875 13.6357C0.21875 13.3705 0.324107 13.1162 0.511643 12.9286C0.69918 12.7411 0.953534 12.6357 1.21875 12.6357H21.2188C21.484 12.6357 21.7383 12.7411 21.9259 12.9286C22.1134 13.1162 22.2188 13.3705 22.2188 13.6357ZM22.2188 19.6357C22.2188 19.901 22.1134 20.1553 21.9259 20.3428C21.7383 20.5304 21.484 20.6357 21.2188 20.6357H1.21875C0.953534 20.6357 0.69918 20.5304 0.511643 20.3428C0.324107 20.1553 0.21875 19.901 0.21875 19.6357C0.21875 19.3705 0.324107 19.1162 0.511643 18.9286C0.69918 18.7411 0.953534 18.6357 1.21875 18.6357H21.2188C21.484 18.6357 21.7383 18.7411 21.9259 18.9286C22.1134 19.1162 22.2188 19.3705 22.2188 19.6357Z",fill:"#4A4A4A"})}))},J1=function(){return(0,T.jsx)("svg",$({width:"18",height:"23",viewBox:"0 0 18 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,T.jsx)("path",{d:"M11 10.636C11 10.4382 11.0587 10.2449 11.1685 10.0804C11.2784 9.91597 11.4346 9.78779 11.6173 9.71211C11.8 9.63642 12.0011 9.61662 12.1951 9.6552C12.3891 9.69379 12.5673 9.78903 12.7071 9.92888C12.847 10.0687 12.9422 10.2469 12.9808 10.4409C13.0194 10.6349 12.9996 10.8359 12.9239 11.0187C12.8482 11.2014 12.72 11.3576 12.5556 11.4675C12.3911 11.5773 12.1978 11.636 12 11.636C11.7348 11.636 11.4804 11.5306 11.2929 11.3431C11.1054 11.1556 11 10.9012 11 10.636ZM6 17.636C6.19778 17.636 6.39112 17.5773 6.55557 17.4675C6.72002 17.3576 6.8482 17.2014 6.92388 17.0187C6.99957 16.8359 7.01937 16.6349 6.98079 16.4409C6.9422 16.2469 6.84696 16.0687 6.70711 15.9289C6.56726 15.789 6.38907 15.6938 6.19509 15.6552C6.00111 15.6166 5.80005 15.6364 5.61732 15.7121C5.43459 15.7878 5.27841 15.916 5.16853 16.0804C5.05865 16.2449 5 16.4382 5 16.636C5 16.9012 5.10536 17.1556 5.2929 17.3431C5.48043 17.5306 5.73479 17.636 6 17.636ZM2.94563e-06 13.636C0.000338632 11.7758 0.577575 9.9615 1.65217 8.4431C2.72676 6.9247 4.24581 5.77694 6 5.15799V2.63599H5C4.73479 2.63599 4.48043 2.53063 4.2929 2.34309C4.10536 2.15556 4 1.9012 4 1.63599C4 1.37077 4.10536 1.11642 4.2929 0.928879C4.48043 0.741343 4.73479 0.635986 5 0.635986H13C13.2652 0.635986 13.5196 0.741343 13.7071 0.928879C13.8946 1.11642 14 1.37077 14 1.63599C14 1.9012 13.8946 2.15556 13.7071 2.34309C13.5196 2.53063 13.2652 2.63599 13 2.63599H12V5.15799C13.5559 5.70809 14.9306 6.6754 15.9738 7.95417C17.017 9.23293 17.6885 10.7739 17.9149 12.4086C18.1413 14.0433 17.9139 15.7088 17.2575 17.2229C16.6011 18.7371 15.541 20.0416 14.1932 20.9938C12.8453 21.9461 11.2616 22.5094 9.61516 22.6222C7.96873 22.735 6.32297 22.393 4.85784 21.6334C3.39272 20.8739 2.16463 19.7261 1.30788 18.3157C0.451116 16.9052 -0.00133202 15.2863 2.94563e-06 13.636ZM2.134 12.324C8.122 10.309 9.789 13.199 15.891 14.824C16.2012 13.0931 15.843 11.3089 14.8888 9.83187C13.9345 8.35479 12.4554 7.29482 10.75 6.86599C10.5354 6.81057 10.3453 6.68543 10.2095 6.51021C10.0738 6.33499 10.0001 6.11964 10 5.89799V2.63599H8V5.89799C7.99995 6.11964 7.92625 6.33499 7.7905 6.51021C7.65474 6.68543 7.46462 6.81057 7.25 6.86599C5.96772 7.19751 4.80603 7.88656 3.90027 8.85287C2.99451 9.81918 2.38197 11.023 2.134 12.324ZM2.057 14.476C2.23549 15.9716 2.89239 17.3696 3.92984 18.4616C4.96729 19.5536 6.32976 20.2812 7.81429 20.536C9.29882 20.7909 10.826 20.5593 12.1682 19.8758C13.5104 19.1923 14.5959 18.0935 15.263 16.743C8.887 15.02 7.72 12.236 2.057 14.476Z",fill:"#4A4A4A"})}))},K1=function(){return(0,T.jsx)("svg",$({width:"18",height:"23",viewBox:"0 0 18 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,T.jsx)("path",{d:"M17 0.635986H1C0.734784 0.635986 0.48043 0.741343 0.292893 0.928879C0.105357 1.11642 0 1.37077 0 1.63599V21.636C0 21.9012 0.105357 22.1556 0.292893 22.3431C0.48043 22.5306 0.734784 22.636 1 22.636H17C17.2652 22.636 17.5196 22.5306 17.7071 22.3431C17.8946 22.1556 18 21.9012 18 21.636V1.63599C18 1.37077 17.8946 1.11642 17.7071 0.928879C17.5196 0.741343 17.2652 0.635986 17 0.635986ZM16 20.636H2V2.63599H16V20.636ZM5.528 16.518C5.68767 16.6034 5.86754 16.6439 6.04842 16.6351C6.22929 16.6263 6.40439 16.5685 6.555 16.468L12.555 12.468C12.692 12.3767 12.8043 12.2529 12.8819 12.1078C12.9596 11.9627 13.0002 11.8006 13.0002 11.636C13.0002 11.4714 12.9596 11.3093 12.8819 11.1642C12.8043 11.019 12.692 10.8953 12.555 10.804L6.555 6.80399C6.4044 6.70351 6.22935 6.6458 6.04852 6.63701C5.86769 6.62823 5.68786 6.6687 5.52823 6.75411C5.3686 6.83952 5.23516 6.96667 5.14213 7.12198C5.04909 7.27729 4.99997 7.45494 5 7.63599V15.636C4.99993 15.817 5.049 15.9947 5.14199 16.15C5.23498 16.3054 5.36839 16.4325 5.528 16.518ZM7 9.50399L10.2 11.636L7 13.768V9.50399Z",fill:"#4A4A4A"})}))},ue=(L={},L[N.API.TopicType.Unselected]=de,L[N.API.TopicType.RichText]=U1,L[N.API.TopicType.OEmbed]=K1,L[N.API.TopicType.Audio]=Q1,L[N.API.TopicType.Video]=X1,L[N.API.TopicType.H5P]=J1,L[N.API.TopicType.Image]=W1,L[N.API.TopicType.Pdf]=Y1,L[N.API.TopicType.Scorm]=de,L[N.API.TopicType.Project]=de,L[N.API.TopicType.GiftQuiz]=de,L),en=function(e){var t,s=e.type,r=s===void 0?N.API.TopicType.Unselected:s,o=(t=ue==null?void 0:ue[r])!==null&&t!==void 0?t:ue[N.API.TopicType.Unselected];return(0,T.jsx)(o,{})};Ce.TopicIcon=en;var X=C&&C.__assign||function(){return X=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},X.apply(this,arguments)};Object.defineProperty(ge,"__esModule",{value:!0});ge.CourseProgramTopic=void 0;var K=n,nn=pe,be=Se(),tn=Ce,sn=function(e){var t=e.index,s=e.topic,r=e.onTopicClick,o=e.mobile,i=(0,nn.useTranslation)().t;return(0,K.jsxs)("li",X({className:"lesson__topic"},{children:[(0,K.jsxs)("div",X({className:"lesson__description"},{children:[(0,K.jsx)(tn.TopicIcon,{type:s.topicable_type}),(0,K.jsxs)(be.Text,X({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,K.jsx)(be.Text,X({size:"14",noMargin:!0},{children:s.title}))]})),s.preview&&(0,K.jsx)(be.Button,X({mode:"outline",onClick:function(){return r(s)},block:o},{children:i("Course.topicPreview")}))]}))};ge.CourseProgramTopic=sn;var V=C&&C.__assign||function(){return V=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},V.apply(this,arguments)};Object.defineProperty(me,"__esModule",{value:!0});me.CourseProgramLesson=void 0;var I=n,rn=c,on=pe,oe=Se(),an=ge,ln=function(e){var t,s,r=e.lesson,o=e.index,i=e.defaultOpen,l=i===void 0?!0:i,p=e.onTopicClick,g=e.mobile,f=e.isSubLesson,a=e.children,u=(0,on.useTranslation)().t,m=(0,rn.useState)(l),x=m[0],_=m[1];return(0,I.jsxs)("li",V({className:"lesson__item ".concat(x?"open":"closed"," ").concat(f?"sub-lesson":"")},{children:[(0,I.jsxs)("header",{children:[(0,I.jsxs)("div",V({className:"lesson__details"},{children:[(0,I.jsxs)(oe.Text,V({noMargin:!0,size:"12"},{children:[u(f?"Course.SubLesson":"Course.Lesson")," ",o+1]})),(0,I.jsx)(oe.Text,V({noMargin:!0,size:"12"},{children:r.duration&&r.duration}))]})),(0,I.jsx)("div",{children:(0,I.jsx)(oe.Text,V({size:"14",bold:!0,noMargin:!0},{children:r.title}))}),(0,I.jsx)(oe.Button,V({type:"button",onClick:function(){return _(!x)},mode:"icon","aria-label":u("Actions.Hide")},{children:(0,I.jsx)(oe.Icon,{name:"chevron"})}))]}),!!(!((t=r.lessons)===null||t===void 0)&&t.length)&&(0,I.jsx)("ul",V({className:"lesson__lessons"},{children:a})),(0,I.jsx)("ul",V({className:"lesson__topics"},{children:(s=r.topics)===null||s===void 0?void 0:s.map(function(d,h){return(0,I.jsx)(an.CourseProgramTopic,{topic:d,index:h+1,onTopicClick:p,mobile:g},h)})}))]}))};me.CourseProgramLesson=ln;(function(e){var t=C&&C.__assign||function(){return t=Object.assign||function(i){for(var l,p=1,g=arguments.length;p<g;p++){l=arguments[p];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(i[f]=l[f])}return i},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RecursiveLessons=void 0;var s=n,r=me,o=function(i){var l=i.lessons,p=i.depth,g=p===void 0?0:p,f=i.onTopicClick,a=i.mobile;return(0,s.jsx)(s.Fragment,{children:l.map(function(u,m){var x;return(0,s.jsx)(r.CourseProgramLesson,t({defaultOpen:!0,index:m,lesson:u,isSubLesson:g>0,onTopicClick:f,mobile:a},{children:(0,s.jsx)(e.RecursiveLessons,{lessons:(x=u.lessons)!==null&&x!==void 0?x:[],depth:g+1,onTopicClick:f,mobile:a})}),u.id)})})};e.RecursiveLessons=o})(Ye);var he={},cn=C&&C.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Je=C&&C.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(he,"__esModule",{value:!0});he.StyledSection=void 0;var dn=Je(i1),un=Je(xe),Q=a1;he.StyledSection=(0,un.default)("section")($e||($e=cn([`
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  > p {
    margin-bottom: 0px;
    font-weight: 700;
  }
  & > header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    margin-bottom: 20px;

    .lms-icon-title {
      margin: 0;
      flex-wrap: nowrap;
    }
    & > div {
      display: inline-flex;
      align-items: center;

      p {
        margin-right: 6px;
      }
    }
  }

  .lessons__list {
    list-style-type: none;
    padding-left: 0;
  }

  .lesson__item {
    background: `,`;
    border-left: 2px solid
      `,`;
    padding: 10px;
    margin: 10px 0;
    overflow: hidden;

    .duration {
      margin: 1px 0;
    }

    & > header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      align-content: flex-start;

      button {
        margin-left: auto;
        margin-top: -2px;
        svg {
          transform: rotate(180deg);
          transition: transform 0.2s ease-in;
        }
      }

      .lesson__details {
        flex-shrink: 0;
        margin-right: 10px;

        > p:first-child {
          margin-bottom: 2px;
          margin-top: 3px;
          text-transform: uppercase;
          color: `,`;
        }
      }

      .lesson__title {
        font-size: 16px;
        color: `,`;
        margin: 0;
        font-weight: bold;
        display: flex;
        small {
          font-size: 12px;
          font-weight: 300;
          .lesson__index {
            text-transform: uppercase;
            color: `,`;
            white-space: nowrap;
          }
          .lesson__duration {
            color: `,`;
          }
          margin-right: 12px;
        }
      }
    }
    &.open > header button svg {
      transform: rotate(0);
    }

    .lesson__topics {
      list-style: none;
      margin: 0;
      padding: 0;
      transition: all 0.5s;

      li {
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: `,`;

        &:first-child {
          margin-top: 10px;
        }

        &:last-child:not(.lesson__topic-current) {
          padding-bottom: 0;
          border-bottom: none;
        }

        &:not(.lesson__topic-current):not(:last-child) {
          border-bottom: 2px solid
            `,`;
        }

        button {
          margin-left: `,`;
          margin-top: `,`;
          font-size: 12px;
          padding: 3px 10px;
        }

        &.lesson__topic-pending svg {
          margin-top: 4px;

          path {
            fill: `,`;
          }
        }

        &.lesson__topic-finished svg {
          margin-top: 7px;
        }

        .lesson__description {
          display: flex;
          align-items: center;

          svg {
            margin-right: 7px;
            width: 17px;
            flex-shrink: 0;

            path {
              fill: `,`;
            }
          }

          .lesson__index {
            opacity: `,`;
            margin-right: 4px;
          }
        }
      }
    }
  }

  .lesson__lessons {
    list-style: none;
    padding-left: 0;

    .sub-lesson {
      padding-inline: 5px;
      margin-block: 0;
      border-left: 2px solid transparent;
      border-bottom: 2px solid rgb(255, 255, 255);
    }
  }

  .lesson__item.open .lesson__topics {
    max-height: 100vh;
    transition: all 0.35s ease-in;
  }

  .lesson__item.closed .lesson__topics,
  .lesson__item.closed .lesson__lessons {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s ease-out;
  }
`],[`
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  > p {
    margin-bottom: 0px;
    font-weight: 700;
  }
  & > header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    margin-bottom: 20px;

    .lms-icon-title {
      margin: 0;
      flex-wrap: nowrap;
    }
    & > div {
      display: inline-flex;
      align-items: center;

      p {
        margin-right: 6px;
      }
    }
  }

  .lessons__list {
    list-style-type: none;
    padding-left: 0;
  }

  .lesson__item {
    background: `,`;
    border-left: 2px solid
      `,`;
    padding: 10px;
    margin: 10px 0;
    overflow: hidden;

    .duration {
      margin: 1px 0;
    }

    & > header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      align-content: flex-start;

      button {
        margin-left: auto;
        margin-top: -2px;
        svg {
          transform: rotate(180deg);
          transition: transform 0.2s ease-in;
        }
      }

      .lesson__details {
        flex-shrink: 0;
        margin-right: 10px;

        > p:first-child {
          margin-bottom: 2px;
          margin-top: 3px;
          text-transform: uppercase;
          color: `,`;
        }
      }

      .lesson__title {
        font-size: 16px;
        color: `,`;
        margin: 0;
        font-weight: bold;
        display: flex;
        small {
          font-size: 12px;
          font-weight: 300;
          .lesson__index {
            text-transform: uppercase;
            color: `,`;
            white-space: nowrap;
          }
          .lesson__duration {
            color: `,`;
          }
          margin-right: 12px;
        }
      }
    }
    &.open > header button svg {
      transform: rotate(0);
    }

    .lesson__topics {
      list-style: none;
      margin: 0;
      padding: 0;
      transition: all 0.5s;

      li {
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: `,`;

        &:first-child {
          margin-top: 10px;
        }

        &:last-child:not(.lesson__topic-current) {
          padding-bottom: 0;
          border-bottom: none;
        }

        &:not(.lesson__topic-current):not(:last-child) {
          border-bottom: 2px solid
            `,`;
        }

        button {
          margin-left: `,`;
          margin-top: `,`;
          font-size: 12px;
          padding: 3px 10px;
        }

        &.lesson__topic-pending svg {
          margin-top: 4px;

          path {
            fill: `,`;
          }
        }

        &.lesson__topic-finished svg {
          margin-top: 7px;
        }

        .lesson__description {
          display: flex;
          align-items: center;

          svg {
            margin-right: 7px;
            width: 17px;
            flex-shrink: 0;

            path {
              fill: `,`;
            }
          }

          .lesson__index {
            opacity: `,`;
            margin-right: 4px;
          }
        }
      }
    }
  }

  .lesson__lessons {
    list-style: none;
    padding-left: 0;

    .sub-lesson {
      padding-inline: 5px;
      margin-block: 0;
      border-left: 2px solid transparent;
      border-bottom: 2px solid rgb(255, 255, 255);
    }
  }

  .lesson__item.open .lesson__topics {
    max-height: 100vh;
    transition: all 0.35s ease-in;
  }

  .lesson__item.closed .lesson__topics,
  .lesson__item.closed .lesson__lessons {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s ease-out;
  }
`])),function(e){var t=e.theme;return(0,Q.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.theme;return(0,Q.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){var t=e.theme;return(0,Q.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray1},function(e){var t=e.theme;return(0,Q.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray2},function(e){return e.$mobile?"column":"row"},function(e){var t=e.theme;return(0,Q.getStylesBasedOnTheme)(t.mode,(0,dn.default)(t.white).alpha(.2).hex(),t.white)},function(e){return e.$mobile?"0":"auto"},function(e){return e.$mobile?"6px":"0"},function(e){var t=e.theme;return(0,Q.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){var t=e.theme;return(0,Q.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){return e.theme.dm__numerationsColor||e.theme.numerationsColor?1:.5});var $e;(function(e){var t=C&&C.__makeTemplateObject||function(d,h){return Object.defineProperty?Object.defineProperty(d,"raw",{value:h}):d.raw=h,d},s=C&&C.__assign||function(){return s=Object.assign||function(d){for(var h,j=1,w=arguments.length;j<w;j++){h=arguments[j];for(var y in h)Object.prototype.hasOwnProperty.call(h,y)&&(d[y]=h[y])}return d},s.apply(this,arguments)},r=C&&C.__createBinding||(Object.create?function(d,h,j,w){w===void 0&&(w=j);var y=Object.getOwnPropertyDescriptor(h,j);(!y||("get"in y?!h.__esModule:y.writable||y.configurable))&&(y={enumerable:!0,get:function(){return h[j]}}),Object.defineProperty(d,w,y)}:function(d,h,j,w){w===void 0&&(w=j),d[w]=h[j]}),o=C&&C.__setModuleDefault||(Object.create?function(d,h){Object.defineProperty(d,"default",{enumerable:!0,value:h})}:function(d,h){d.default=h}),i=C&&C.__importStar||function(d){if(d&&d.__esModule)return d;var h={};if(d!=null)for(var j in d)j!=="default"&&Object.prototype.hasOwnProperty.call(d,j)&&r(h,d,j);return o(h,d),h};Object.defineProperty(e,"__esModule",{value:!0}),e.CourseProgram=void 0;var l=n,p=pe,g=i(xe),f=Se(),a=Ye,u=he,m=function(d){var h=d.lessons,j=d.onTopicClick,w=d.mobile,y=w===void 0?!1:w,S=d.className,v=S===void 0?"":S,b=(0,p.useTranslation)().t;return(0,l.jsxs)(u.StyledSection,s({$mobile:y,className:"wellms-component ".concat(v)},{children:[(0,l.jsx)(f.Text,{children:b("Course.Agenda")}),(0,l.jsx)("ul",s({className:"lessons__list"},{children:(0,l.jsx)(a.RecursiveLessons,{lessons:h,onTopicClick:j,mobile:y})}))]}))};e.CourseProgram=m;var x=(0,g.default)(e.CourseProgram)(_||(_=t([""],[""])));e.default=(0,g.withTheme)(x);var _})(Xe);var Ke={};(function(e){var t=C&&C.__makeTemplateObject||function(u,m){return Object.defineProperty?Object.defineProperty(u,"raw",{value:m}):u.raw=m,u},s=C&&C.__createBinding||(Object.create?function(u,m,x,_){_===void 0&&(_=x);var d=Object.getOwnPropertyDescriptor(m,x);(!d||("get"in d?!m.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return m[x]}}),Object.defineProperty(u,_,d)}:function(u,m,x,_){_===void 0&&(_=x),u[_]=m[x]}),r=C&&C.__setModuleDefault||(Object.create?function(u,m){Object.defineProperty(u,"default",{enumerable:!0,value:m})}:function(u,m){u.default=m}),o=C&&C.__importStar||function(u){if(u&&u.__esModule)return u;var m={};if(u!=null)for(var x in u)x!=="default"&&Object.prototype.hasOwnProperty.call(u,x)&&s(m,u,x);return r(m,u),m};Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownPlayer=void 0;var i=n,l=o(c),p=l1(),g=o(xe),f=function(u){var m=u.onLoad,x=u.children,_=u.mobile,d=_===void 0?!1:_;return l.useEffect(function(){x&&m&&m()},[x,m]),(0,i.jsx)(p.MarkdownRenderer,{children:x,mobile:d})};e.MarkdownPlayer=f,e.default=(0,g.withTheme)((0,g.default)(e.MarkdownPlayer)(a||(a=t([""],[""]))));var a})(Ke);const pn=({topic:e})=>{const{apiUrl:t}=c.useContext(q.EscolaLMSContext),s=c.useMemo(()=>{var r,o;if(e&&e.topicable_type)switch(e.topicable_type){case D.TopicType.H5P:return n.jsx(A1.H5Player,{h5pObject:(r=e==null?void 0:e.topicable)==null?void 0:r.content,hideActionButtons:!0});case D.TopicType.OEmbed:return n.jsx(O1.OEmbedPlayer,{url:(o=e==null?void 0:e.topicable)==null?void 0:o.value});case D.TopicType.RichText:return n.jsx("div",{className:"container-xl",children:n.jsx(Ke.MarkdownPlayer,{children:e.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case D.TopicType.Video:case D.TopicType.Audio:return n.jsx(M1.AudioVideoPlayer,{url:e.topicable.url});case D.TopicType.Image:return n.jsx(P1.ImagePlayer,{topic:e,onLoad:()=>console.log("")});case D.TopicType.Pdf:return n.jsx(T1.PdfPlayer,{url:e.topicable.url,pageConfig:{width:550}});case D.TopicType.Scorm:return n.jsx("div",{className:"scorm-wrapper",children:n.jsx("iframe",{title:e.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${e.topicable.uuid}`})});case y1.TopicType.GiftQuiz:return n.jsx(w1,{topic:e});default:return n.jsx("pre",{children:e.topicable_type})}return n.jsx(c1.Fragment,{})},[e,t]);return n.jsx("div",{className:"topic-preview-modal",children:n.jsx("div",{className:"topic-preview-modal-content",children:s})})};var e1={};(function(e){var t=C&&C.__makeTemplateObject||function(v,b){return Object.defineProperty?Object.defineProperty(v,"raw",{value:b}):v.raw=b,v},s=C&&C.__assign||function(){return s=Object.assign||function(v){for(var b,M=1,R=arguments.length;M<R;M++){b=arguments[M];for(var H in b)Object.prototype.hasOwnProperty.call(b,H)&&(v[H]=b[H])}return v},s.apply(this,arguments)},r=C&&C.__createBinding||(Object.create?function(v,b,M,R){R===void 0&&(R=M);var H=Object.getOwnPropertyDescriptor(b,M);(!H||("get"in H?!b.__esModule:H.writable||H.configurable))&&(H={enumerable:!0,get:function(){return b[M]}}),Object.defineProperty(v,R,H)}:function(v,b,M,R){R===void 0&&(R=M),v[R]=b[M]}),o=C&&C.__setModuleDefault||(Object.create?function(v,b){Object.defineProperty(v,"default",{enumerable:!0,value:b})}:function(v,b){v.default=b}),i=C&&C.__importStar||function(v){if(v&&v.__esModule)return v;var b={};if(v!=null)for(var M in v)M!=="default"&&Object.prototype.hasOwnProperty.call(v,M)&&r(b,v,M);return o(b,v),b};Object.defineProperty(e,"__esModule",{value:!0}),e.ModalCourseAccess=void 0;var l=n,p=c,g=pe,f=d1,a=i(xe),u=q,m=E,x=u1,_=p1,d=Y,h=A,j=a.default.aside(y||(y=t([`
  display: flex;
  flex-direction: column;
  gap: 24px;

  header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    & > .form-content {
      .error-msg {
        color: `,`;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    & > .button-group {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  gap: 24px;

  header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    & > .form-content {
      .error-msg {
        color: `,`;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    & > .button-group {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
  }
`])),function(v){var b=v.theme;return b.errorColor}),w=function(v){var b=v.course,M=v.className,R=v.initialValues,H=R===void 0?{phone_number:"",contact_details:""}:R,n1=v.onCancel,fe=v.onSuccess,ve=v.onError,te=(0,g.useTranslation)().t,t1=(0,p.useContext)(u.EscolaLMSContext).addCourseAccess;return(0,l.jsxs)(j,s({className:"wellms-component ".concat(M),"data-testid":"modal-course-access"},{children:[(0,l.jsxs)("header",{children:[(0,l.jsx)(d.Title,s({level:1},{children:b.title})),(0,l.jsx)(h.Text,s({size:"14",bold:!0},{children:te("ModalCourseAccess.Title")}))]}),(0,l.jsx)(f.Formik,s({initialValues:H,onSubmit:function(z,J){var ae=J.setErrors,W=J.setSubmitting,le=J.resetForm,ce={course_id:b.id,data:z};t1(ce).then(function(){le(),fe==null||fe()}).catch(function(Z){var je,_e;ae(s({error:(je=Z==null?void 0:Z.data)===null||je===void 0?void 0:je.message},(_e=Z==null?void 0:Z.data)===null||_e===void 0?void 0:_e.errors)),ve==null||ve()}).finally(function(){W(!1)})}},{children:function(z){var J=z.values,ae=z.touched,W=z.errors,le=z.handleChange,ce=z.handleBlur,Z=z.handleSubmit;return(0,l.jsxs)("form",s({onSubmit:Z},{children:[(0,l.jsxs)("div",s({className:"form-content"},{children:[W&&W.error&&(0,l.jsx)(h.Text,s({className:"error-msg",size:"12",bold:!0},{children:W.error})),(0,l.jsxs)("div",s({className:"input-group"},{children:[(0,l.jsx)(x.Input,{type:"text",label:te("ModalCourseAccess.PhoneNumber"),error:ae.phone_number&&W.phone_number,id:"phone_number",name:"phone_number",onChange:le,onBlur:ce,value:J.phone_number}),(0,l.jsx)(_.TextArea,{label:te("ModalCourseAccess.ContactDetails"),error:ae.contact_details&&W.contact_details,id:"contact_details",name:"contact_details",onChange:le,onBlur:ce,value:J.contact_details})]}))]})),(0,l.jsxs)("div",s({className:"button-group"},{children:[(0,l.jsx)(m.Button,s({type:"button",mode:"secondary",onClick:n1},{children:te("ModalCourseAccess.Cancel")})),(0,l.jsx)(m.Button,s({type:"submit",mode:"secondary"},{children:te("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};e.ModalCourseAccess=w,e.default=(0,a.withTheme)((0,a.default)(e.ModalCourseAccess)(S||(S=t([""],[""]))));var y,S})(e1);const Ee=P.div`
  padding-top: 40px;
  section {
    margin-bottom: 40px;
    @media (max-width: 991px) {
      margin-bottom: 20px;
    }
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
    }
    &.padding-right {
      padding-right: 150px;
      @media (max-width: 991px) {
        padding-right: 70px;
      }
      @media (max-width: 768px) {
        padding-right: 0;
      }
    }
  }
  .sidebar-col {
    padding-bottom: 45px;
  }
  .course-main-info {
    h1 {
      margin-top: 5px;
      margin-bottom: 10px;
      @media (max-width: 991px) {
        font-size: 30px;
      }
    }
    .image-wrapper {
      margin-top: 13px;

      img {
        border-radius: ${({theme:e})=>e.cardRadius}px;
      }
      @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        width: 100%;

        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
    .labels-row {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      column-gap: 20px;
      margin: 35px 0;
      @media (max-width: 991px) {
        margin: 35px 0 0;
      }
      @media (max-width: 374px) {
        flex-direction: column;
        row-gap: 16px;
      }
      &--bottom {
        column-gap: 45px;
        margin-top: 120px;
        margin-bottom: 0;
        flex-wrap: wrap;
        @media (max-width: 991px) {
          column-gap: 0;
          margin-top: 55px;
        }
        @media (max-width: 374px) {
          flex-direction: row;
        }
        .single-label {
          @media (max-width: 991px) {
            flex: 0 0 50%;
            max-width: 50%;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  .course-tutor {
    .ranking-row {
      display: none !important;
    }
  }
  .course-ratings {
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  }
  .course-description,
  .course-description-short {
    p {
      font-size: 16px;
    }
  }
  .course-companies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .companies-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 70px;
      .single-company {
        max-height: 85px;
        max-width: 65px;
      }
      @media (max-width: 768px) {
        column-gap: 0;
        justify-content: space-between;
        width: 100%;
      }
    }

    p {
      max-width: 220px;
      margin-right: 50px;
    }
  }
  .course-description {
    /* padding: 50px 45px;
    margin: 45px 0; */
    /* background-color: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
    border-radius: ${({theme:e})=>e.cardRadius}px; */
  }

  .course-tutor {
    a {
      text-decoration: none !important;
    }
  }

  .single-content {
    box-sizing: border-box;
  }
`,ze=x1`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`,xn=({author:e})=>n.jsx(O.Col,{lg:6,children:n.jsx(ne,{to:`/tutors/${e.id}`,children:n.jsx(m1,{mobile:k,avatar:{alt:`${e.first_name} ${e.last_name}`,src:e.path_avatar?`${g1}/api/images/img?path=${e.path_avatar}`:Fe.tutorPlaceholderPath},fullName:`${e.first_name} ${e.last_name}`,description:e.bio})})});var F=(e=>(e.INIT="INIT",e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e))(F||{});const mn=P.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,gn=({courseData:e})=>{const{fetchQuestionnaireStarsByModel:t}=c.useContext(q.EscolaLMSContext),[s,r]=c.useState({type:F.INIT}),o=ie(),i=c.useCallback(async()=>{if(e.id)try{r({type:F.LOADING});const l=await t("course",Number(e.id));l.success&&r({type:F.LOADED,rating:l.data})}catch(l){r({type:F.ERROR,error:l instanceof Error?l.message:"Unknown error"})}},[e.id,t]);return c.useEffect(()=>{i()},[e.id,i]),n.jsx("section",{className:"course-main-info",children:n.jsxs(O.Row,{children:[n.jsxs(O.Col,{lg:12,children:[n.jsx(H1,{categories:e.categories,onCategoryClick:l=>{o.push(`/courses/?categories[]=${l}`)}}),n.jsx(Y.Title,{mobile:k,level:1,children:e.title}),s.type===F.LOADED?n.jsxs(mn,{children:[n.jsx(G.Rating,{ratingValue:s.rating.avg_rate,label:`${s.rating.avg_rate}`}),n.jsx(G.Text,{size:"13",children:"Śr. ocena kursu"}),n.jsx("div",{children:n.jsxs(G.Text,{size:"13",children:["Dodane opinie ",n.jsx("strong",{children:s.rating.count_answers})]})})]}):s.type===F.LOADING?n.jsx(Te,{width:"20px",height:"20px"}):s.type===F.ERROR?s.error:null]}),n.jsx(O.Col,{lg:12,children:e.image_path&&n.jsx("div",{className:"image-wrapper",children:n.jsx(N1.ResponsiveImage,{path:e.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},ye={total:0,per_page:3,page:1,current_page:1},Cn=({questionId:e,courseId:t})=>{const[s,r]=c.useState(void 0),[o,i]=c.useState(ye),[l,p]=c.useState(!0),{fetchQuestionnairesAnswers:g}=c.useContext(q.EscolaLMSContext),{t:f}=U(),a=c.useCallback(m=>{e&&t&&(p(!0),g(Qe.COURSE,Number(t),e,{per_page:o.per_page,page:m,order_by:"updated_at",order:"DESC"}).then(x=>{x.success&&(r(x.data),i(_=>({..._,total:x.meta.total,current_page:x.meta.current_page,page:x.meta.current_page})))}).catch(x=>{I1(f("UnexpectedError"),x),console.log(x)}).finally(()=>p(!1)))},[o,g,t,e,f]),u=c.useCallback(m=>{i(x=>({...x,current_page:m}))},[]);return c.useEffect(()=>{o.page!==o.current_page&&a(o.current_page)},[o.current_page,o.page,a]),c.useEffect(()=>{i(ye),a(ye.page)},[e]),{answersMeta:o,questionnaireAnswers:s,loading:l,onPageChange:u}},hn=P(Ge)`
  justify-content: space-between;

  background: ${({theme:e})=>e.white};
`,fn=P.div`
  .date {
    color: ${({theme:e})=>e.gray2};
    margin-bottom: 5px;
  }
`,vn=P.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    text-transform: uppercase;
  }
`,jn=({name:e})=>{const t=()=>"#"+Math.floor(Math.random()*16777215).toString(16),s=e.charAt(0).toUpperCase();return n.jsx(vn,{style:{backgroundColor:t()},children:n.jsx(A.Text,{size:"18",children:s})})},_n=({question:e})=>{const{user:t,note:s,updated_at:r}=e,o=Oe();return s?n.jsx(fn,{children:n.jsx(hn,{children:n.jsxs(Ge,{$gap:19,children:[t.avatar?n.jsx(C1.Avatar,{src:t.avatar,alt:`user-avatar-${t.name}`}):n.jsx(jn,{name:t.name}),n.jsxs(qe,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[n.jsx(A.Text,{noMargin:!0,color:o.gray2,className:"date",size:"13",children:h1(r,Fe.defaultDateFormat)}),n.jsx(A.Text,{className:"note",size:"13",children:s})]})]})})}):null},bn=P(qe)`
  gap: 22px;
  margin: 16px auto;
`,yn=P(Y.Title)`
  margin-bottom: 16px;
`,wn=P.div`
  margin: 0 auto;
`,Tn=({courseId:e,questionId:t})=>{var p;const{answersMeta:s,loading:r,onPageChange:o,questionnaireAnswers:i}=Cn({questionId:t,courseId:e}),{t:l}=U();return n.jsx(bn,{children:r?n.jsx(f1.Spin,{}):((p=i||[])==null?void 0:p.length)>0?n.jsxs(n.Fragment,{children:[n.jsx(yn,{level:4,children:l("CoursePage.CourseRatingsTitle")}),(i||[]).map(g=>n.jsx(_n,{question:g})),s.total>s.per_page&&n.jsx(wn,{children:n.jsx(B1,{total:s.total,perPage:s.per_page,currentPage:s.current_page,onPage:o})})]}):null})},Ze=()=>console.warn("INITIAL STATE"),Me=c.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:Ze,questionId:null,setQuestionId:Ze,reviewId:void 0,courseId:void 0}),Pn=({children:e,questionnaires:t})=>{var a;const[s,r]=c.useState(null),[o,i]=c.useState(null),{id:l}=Ae(),p=t==null?void 0:t.at(0),g=(a=p==null?void 0:p.questions)==null?void 0:a.find(({type:u})=>u===Ie.RATE),f=L1({questionnaires:t,questionnaireId:s,questionType:Ie.REVIEW});return c.useEffect(()=>{p!=null&&p.id&&!s&&r(p.id)},[p==null?void 0:p.id,s]),c.useEffect(()=>{g!=null&&g.id&&!o&&i(g.id)},[g==null?void 0:g.id,o]),n.jsx(Me.Provider,{value:{questionnaires:t,questionnaireId:s,setQuestionnaireId:r,questionId:o,setQuestionId:i,reviewId:f,courseId:Number(l)},children:e})},Mn=()=>{const e=c.useContext(Me);if(!Me)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return e},On=c.memo(()=>{const{courseId:e,reviewId:t}=Mn();return n.jsx(n.Fragment,{children:e&&t&&n.jsx(Tn,{courseId:e,questionId:t})})}),An=c.memo(({questionnaires:e})=>n.jsx(Pn,{questionnaires:e,children:n.jsx("section",{className:"course-ratings",children:n.jsx(On,{})})})),Sn=P.section`
  position: relative;
  margin-top: 100px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  .content-container {
    h2 {
      margin-bottom: 20px;
    }
    .swiper {
      padding: 7px 10px;
      margin: 0px -15px;
    }
  }
`,Ln=({relatedProducts:e})=>{const{t}=U();return n.jsx(Sn,{className:"course-related-courses",children:n.jsx(Pe,{children:n.jsx(O.Row,{children:n.jsxs(O.Col,{lg:9,children:[e&&(e==null?void 0:e.length)>0&&n.jsxs("div",{className:"content-container",children:[n.jsx(G.Title,{level:1,as:"h2",children:t("CoursePage.RelatedCoursesTitle")}),n.jsx(V1,{slidesPerView:3,children:e==null?void 0:e.map(s=>{var r;return n.jsx($1,{children:n.jsx(G.NewCourseCard,{mobile:k,id:s.id,image:n.jsx(ne,{to:`/courses/${(r=s==null?void 0:s.productables[0])==null?void 0:r.id}`,children:s.poster_path?n.jsx(R1,{path:s.poster_path,alt:s.name,srcSizes:[300,600,900]}):n.jsx(E1,{})}),price:s.public?n.jsx("div",{className:"course-price",children:t("FREE")}):n.jsx(We,{price:s==null?void 0:s.price,oldPrice:s==null?void 0:s.price_old,taxRate:s==null?void 0:s.tax_rate}),title:n.jsx(ne,{to:`/courses/${s.id}`,children:n.jsx(G.Title,{level:3,as:"h3",className:"title",children:s.name})})})},s.id)})})]}),n.jsx("div",{className:"content-container",children:n.jsx(k1,{titleText:t("CoursePage.InterestTitle"),params:{per_page:6,order_by:"created_at",order:"ASC"},slidesPerView:3})})]})})})})},Nn=P.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`,Rn=()=>n.jsx(Nn,{children:n.jsx(B,{width:"100%",height:350})}),Hn=P.div`
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`,In=()=>n.jsxs(Hn,{children:[n.jsx(B,{width:"20px",style:{marginBottom:"5px"}}),n.jsx(B,{width:"40%",height:37,style:{marginBottom:"10px"}}),n.jsx(B,{width:"40%",style:{marginBottom:"10px"}})," ",n.jsx(B,{width:"100%",height:490,style:{marginBottom:"40px"}}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(B,{width:"100%",count:4,style:{marginBottom:"5px"}})}),n.jsx("div",{style:{marginBottom:"40px"},children:n.jsx(B,{width:"100%",count:5,style:{marginBottom:"5px"}})}),n.jsx(B,{width:"80px",style:{marginBottom:"20px"}}),n.jsxs("div",{className:"tutors",children:[n.jsx(B,{circle:!0,width:"112px",height:"112px"}),n.jsxs("div",{children:[n.jsx(B,{width:"140px",style:{marginBottom:"20px"}}),n.jsx(B,{width:"140px",count:2})]})]}),n.jsx("div",{style:{marginTop:"40px"},children:n.jsx(B,{width:"100%",height:"51px",style:{marginBottom:"5px"},count:8})})]}),Bn=P.button`
  all: unset;
  margin-top: 10px;
  margin-bottom: 15px;
  svg {
    transform: rotate(180deg);
    width: 10px;
    height: 17px;
  }
`,rt=()=>{var w,y;const[e,t]=c.useState([]),[s,r]=c.useState(!1),[o,i]=c.useState(),{id:l}=Ae(),{t:p}=U(),g=ie(),f=Oe(),{course:a,fetchCourse:u,fetchCourses:m,fetchCourseAccess:x,fetchQuestionnaires:_}=c.useContext(De.EscolaLMSContext),d=c.useCallback(()=>r(!1),[]),h=c.useCallback(()=>r(!0),[]),j=c.useCallback(()=>x({course_id:Number(l),current_page:1,per_page:1}),[l,x]);return c.useEffect(()=>{m({per_page:6}),l&&(u(Number(l)),j(),_(Qe.COURSE,Number(l)).then(S=>S.success&&t(S.data)))},[l]),a.error?n.jsx("pre",{children:a.error.message}):n.jsxs(v1,{metaTitle:((w=a==null?void 0:a.value)==null?void 0:w.title)||"Loading",children:[a.loading&&n.jsx(n.Fragment,{children:n.jsx(Ee,{children:n.jsx(Pe,{children:n.jsxs(O.Row,{children:[n.jsx(O.Col,{md:12,lg:8,children:n.jsx(In,{})}),n.jsx(O.Col,{md:12,lg:3,offset:{lg:1},children:n.jsx(Rn,{})})]})})})}),!a.loading&&a.value&&n.jsxs(n.Fragment,{children:[n.jsxs(Ee,{children:[n.jsxs(Pe,{children:[!k&&n.jsx(S1,{items:[n.jsx(ne,{to:ee.home,children:p("Home")}),n.jsx(ne,{to:ee.courses,children:p("Courses")}),n.jsx(A.Text,{size:"13",children:a.value.title})]}),n.jsxs(O.Row,{children:[n.jsxs(O.Col,{md:12,lg:8,children:[k&&n.jsx(Bn,{onClick:()=>g.push(ee.courses),children:n.jsx(j1,{color:f.black})}),n.jsx(gn,{courseData:a.value}),k&&a.value&&n.jsx(Ve,{course:a.value,onRequestAccess:h}),a.value.description&&Re(a.value.description)!==""&&n.jsx("section",{className:"course-description-short",children:n.jsx(He.MarkdownRenderer,{children:a.value.description})}),a.value.summary&&Re(a.value.summary)!==""&&n.jsx("section",{className:"course-description",children:n.jsx(He.MarkdownRenderer,{children:a.value.summary})}),n.jsxs("section",{className:"",children:[n.jsx(Y.Title,{as:"h3",level:4,className:"title",children:p("CoursePage.Teacher")}),n.jsx(O.Row,{children:a.value&&a.value.authors.map(S=>n.jsx(xn,{author:S}))})]}),a.value.lessons&&a.value.lessons.length>0&&n.jsx(Xe.CourseProgram,{lessons:a.value.lessons,onTopicClick:S=>i(S)}),n.jsx(An,{questionnaires:e})]}),!k&&n.jsx(O.Col,{md:12,lg:3,offset:{lg:1},children:a.value&&n.jsx(Ve,{course:a.value,onRequestAccess:h})})]})]}),n.jsx(Ln,{relatedProducts:(y=a.value.product)==null?void 0:y.related_products})]}),n.jsxs(we.Modal,{onClose:()=>i(void 0),visible:!!o,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[n.jsx(ze,{}),o&&n.jsx(pn,{topic:o})]}),n.jsxs(we.Modal,{onClose:d,visible:s,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[n.jsx(ze,{}),n.jsx(e1.ModalCourseAccess,{course:a.value,onCancel:d,onSuccess:()=>{j(),d()}})]})]})]})};export{rt as default};

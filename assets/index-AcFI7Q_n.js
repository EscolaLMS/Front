import{r as m,h as q,q as Y,l as j,f as N,m as ze,j as n,V as Le,o as ie,X as Pe,k as ce,E as de,n as k,T as H,W as i1,Y as re,v as ae,Z as a1,d as h,a0 as Te,a1 as ue,A as l1,z as pe,D as c1,a2 as d1,a3 as z,b as u1,a4 as p1,s as m1,a5 as g1,a6 as x1,G as U,a7 as C1,a8 as h1,a9 as f1,i as R,aa as F,ab as v1,ac as _1,ad as Qe,y as j1,ae as b1,C as Fe,L as y1,af as Ae,M as Ie,w as He}from"./index-DaafzRP_.js";import{P as Ne}from"./PricingCard-yK-81SRW.js";import{u as w1,f as Re}from"./index-DfHnr1oM.js";import{C as je}from"./index-p2Hnf5if.js";import{P as P1}from"./index-bfvIBFek.js";import{P as T1}from"./index-DBq-nsKT.js";import{l as M1,A as S1,_ as O1,P as L1,I as A1,a as I1,O as H1,H as N1}from"./index-Dk0OH7lM.js";import{B as R1}from"./index-DVPhWZqb.js";import{g as V1,Q as le,a as Me,b as $1}from"./questionnaires-DptVHaG1.js";import{A as De}from"./app-B2E7767C.js";import{R as Ge}from"./ResponsiveImage-BWLsb9wG.js";import{f as Ue}from"./date-D2Y_Z1t9.js";import{P as qe}from"./index-C9fEySCg.js";import{C as Ve}from"./index-DfiAQn97.js";import"./index-DmeYF39A.js";import"./index-D6Quq3aY.js";import"./index-4Hra2YYq.js";import"./index-XxUfqVTU.js";const k1=e=>{const[t,r]=m.useState({data:void 0,loaded:!1,loading:!1}),{user:a,fetchCourseProgress:s,courseProgressDetails:o}=m.useContext(q.EscolaLMSContext);return m.useEffect(()=>{o.byId&&o.byId[Number(e)]&&o.byId[Number(e)].value&&r({...t,data:o.byId[Number(e)].value,loaded:!0,loading:!1})},[e,o]),m.useEffect(()=>{a!=null&&a.value&&!a.loading&&!t.loading&&!t.loaded?(r({...t,loading:!0}),s(e).catch(()=>r({...t,loaded:!0,loading:!1}))):t.loaded||r({...t,loaded:!0})},[a,t,s,e]),{progress:t}},$e=Y(j.Button)`
  display: block;
  margin-bottom: 10px;
`,B1=({course:e,onRequestAccess:t})=>{var g,c;const{t:r}=N(),{push:a}=ze(),{courseAccess:s,cart:o,addToCart:i}=m.useContext(q.EscolaLMSContext),u=m.useMemo(()=>{var d,p;return(p=(d=s.list)==null?void 0:d.data)==null?void 0:p.find(x=>{var b;return((b=x==null?void 0:x.course)==null?void 0:b.id)===e.id})},[(g=s.list)==null?void 0:g.data,e.id]),l=m.useMemo(()=>n.jsx(j.Button,{loading:o.loading,mode:"secondary",onClick:()=>{var d;return i(Number((d=e.product)==null?void 0:d.id)).then(()=>a(ie.cart))},children:r("Buy Course")}),[i,o.loading,(c=e.product)==null?void 0:c.id,a,r]);return u?u.status!=="approved"?n.jsxs(n.Fragment,{children:[n.jsx($e,{mode:"secondary",disabled:!0,children:r("CourseAccess.Pending")}),l]}):u.status==="approved"?n.jsx(j.Button,{onClick:()=>a(`/course/${e.id}`),mode:"secondary",children:r("Go to the course")}):l:n.jsxs(n.Fragment,{children:[n.jsx($e,{mode:"secondary",onClick:t,children:r("CourseAccess.RequestAccess")}),l]})},ke=({course:e,userOwnThisCourse:t,onRequestAccess:r})=>{var l,g;const{cart:a,user:s}=m.useContext(q.EscolaLMSContext),{t:o}=N(),{push:i}=ze(),u=m.useMemo(()=>{var c;return(c=a==null?void 0:a.value)==null?void 0:c.items.some(d=>{var p;return Number(d.product_id)===Number((p=e.product)==null?void 0:p.id)})},[(l=e.product)==null?void 0:l.id,a]);return w1(Number((g=s.value)==null?void 0:g.id),e)?n.jsx(j.Button,{onClick:()=>i(`/course/${e.id}`),mode:"secondary",children:o("Go to the course")}):Le(new Date(e.active_to||""))?n.jsx(j.Text,{children:o("CoursePage.IsFinished")}):u?n.jsx(j.Button,{mode:"secondary",onClick:()=>i(ie.cart),children:o("CoursePage.GoToCheckout")}):t&&Le(new Date(e.active_from||""))?n.jsx(j.Button,{onClick:()=>i(`/course/${e.id}`),mode:"secondary",children:o("Go to the course")}):t?n.jsx(j.Text,{children:o("CoursePage.NotStarted")}):s.value&&e.product?n.jsx(B1,{course:e,onRequestAccess:r}):e.product?n.jsx(j.Button,{onClick:()=>i(`/login?referrer=/courses/${e.id}`),mode:"secondary",children:o("Buy Course")}):n.jsx(j.Text,{children:o("CoursePage.UnavailableCourse")})},E1=({course:e,onRequestAccess:t})=>{var p,x,b,C,v,y,T,P,B,f;const r=Pe(),{user:a,courseAccess:s}=m.useContext(ce.EscolaLMSContext),{t:o}=N(),{id:i}=de(),{progress:u}=k1(Number(i)),l=m.useMemo(()=>{var _;return(_=e==null?void 0:e.product)==null?void 0:_.owned},[(p=e==null?void 0:e.product)==null?void 0:p.owned]),g=m.useMemo(()=>{var _,w;return!!((w=(_=s.list)==null?void 0:_.data)!=null&&w.find(M=>{var O;return((O=M==null?void 0:M.course)==null?void 0:O.id)===e.id&&M.status==="approved"}))},[e.id,(x=s.list)==null?void 0:x.data]),c=m.useMemo(()=>u.data||[],[u.data]),d=m.useMemo(()=>a.value&&(l||g)?((c==null?void 0:c.filter(w=>w.status===1))||[]).length:0,[c,a.value,g,l]);return k?n.jsxs(Ne.PricingCard,{mobile:!0,children:[n.jsx(H.Title,{level:5,as:"h5",children:e.title}),n.jsxs("div",{className:"pricing-card-footer",children:[n.jsxs("div",{children:[((y=e.product)==null?void 0:y.price_old)&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(H.Title,{level:5,as:"h5",children:[Re((T=e.product)==null?void 0:T.price_old,(P=e.product)==null?void 0:P.tax_rate)," ","zł"]})}),n.jsxs(H.Title,{level:4,as:"h4",children:[Re((B=e.product)==null?void 0:B.price,(f=e.product)==null?void 0:f.tax_rate)," zł"]})]}),n.jsx("div",{children:u.loaded?n.jsx(ke,{onRequestAccess:t,course:e,userOwnThisCourse:l}):n.jsx(je,{})})]})]}):n.jsxs(Ne.PricingCard,{children:[n.jsx(H.Title,{level:4,as:"h2",children:e.title}),n.jsx(P1,{price:(b=e.product)==null?void 0:b.price,taxRate:(C=e.product)==null?void 0:C.tax_rate,oldPrice:(v=e.product)==null?void 0:v.price_old}),u.loaded?n.jsx(ke,{onRequestAccess:t,course:e,userOwnThisCourse:l}):n.jsx(je,{}),n.jsxs(j.Text,{size:"12",children:[" ",o("CoursePage.30Days")]}),n.jsxs("div",{className:"pricing-card-features",children:[e.duration&&n.jsx(j.IconText,{icon:n.jsx(i1,{}),text:`${o("CoursePage.Duration")}: ${e.duration}`}),e.lessons&&n.jsx(j.IconText,{icon:n.jsx(re,{}),text:`${o("CoursePage.Lessons")}: ${e.lessons.length}`}),e.language&&n.jsx(j.IconText,{icon:n.jsx(re,{}),text:`${o("CoursePage.Language")}: ${e.language}`}),e.level&&n.jsx(j.IconText,{icon:n.jsx(re,{}),text:`${o("CoursePage.Level")}: ${e.level}`}),e.users_count?n.jsx(j.IconText,{icon:n.jsx(re,{}),text:`${o("CoursePage.Students")}: ${e.users_count}`}):""]}),a.value?n.jsxs(j.CourseProgress,{progress:c&&(c==null?void 0:c.length)>0?d/c.length:0,icon:u.loaded?n.jsx(a1,{}):n.jsx(je,{width:"22px",height:"22px"}),title:o("CoursePage.MyProgress"),children:[n.jsxs("strong",{style:{fontSize:14},children:[o("CoursePage.Finished")," ",d||0," ",o("CoursePage.Of")," ",c&&(c==null?void 0:c.length)>0?c.length:0," ",o("CoursePage.Lessons")]}),n.jsx("p",{style:{marginTop:9,marginBottom:0},children:o("CoursePage.FinishToGetCertificate")})]}):n.jsxs(j.Text,{size:"12",children:[n.jsx(ae,{to:`/login?referrer=/courses/${e.id}`,style:{marginRight:"4px",color:r.primaryColor},children:o("CoursePage.Login")}),o("CoursePage.ToSeeProgress")]})]})};var We={},Xe={},me={},ge={},xe={},$=h&&h.__assign||function(){return $=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},$.apply(this,arguments)},L;Object.defineProperty(xe,"__esModule",{value:!0});xe.TopicIcon=void 0;var S=n,A=M1,Z1=function(){return(0,S.jsx)("svg",$({width:"19",height:"23",viewBox:"0 0 19 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,S.jsx)("path",{d:"M18.2188 5.63599C18.2177 5.3705 18.1121 5.11612 17.9247 4.92799L13.9247 0.927991C13.8322 0.835564 13.7225 0.762179 13.6017 0.711991C13.4804 0.661431 13.3502 0.635593 13.2188 0.635991H1.21875C0.953534 0.635991 0.69918 0.741348 0.511643 0.928884C0.324107 1.11642 0.21875 1.37077 0.21875 1.63599V21.636C0.21875 21.9012 0.324107 22.1556 0.511643 22.3431C0.69918 22.5306 0.953534 22.636 1.21875 22.636H17.2188C17.484 22.636 17.7383 22.5306 17.9259 22.3431C18.1134 22.1556 18.2188 21.9012 18.2188 21.636V5.63599ZM16.2188 20.636H2.21875V2.63599H12.2188V5.63599C12.2188 5.90121 12.3241 6.15556 12.5116 6.3431C12.6992 6.53063 12.9535 6.63599 13.2188 6.63599H16.2188V20.636ZM13.2188 8.63599C13.484 8.63599 13.7383 8.74135 13.9259 8.92888C14.1134 9.11642 14.2188 9.37077 14.2188 9.63599C14.2188 9.90121 14.1134 10.1556 13.9259 10.3431C13.7383 10.5306 13.484 10.636 13.2188 10.636H5.21875C4.95353 10.636 4.69918 10.5306 4.51164 10.3431C4.32411 10.1556 4.21875 9.90121 4.21875 9.63599C4.21875 9.37077 4.32411 9.11642 4.51164 8.92888C4.69918 8.74135 4.95353 8.63599 5.21875 8.63599H13.2188ZM4.21875 5.63599C4.21875 5.37077 4.32411 5.11642 4.51164 4.92888C4.69918 4.74135 4.95353 4.63599 5.21875 4.63599H9.21875C9.48397 4.63599 9.73832 4.74135 9.92586 4.92888C10.1134 5.11642 10.2188 5.37077 10.2188 5.63599C10.2188 5.90121 10.1134 6.15556 9.92586 6.3431C9.73832 6.53063 9.48397 6.63599 9.21875 6.63599H5.21875C4.95353 6.63599 4.69918 6.53063 4.51164 6.3431C4.32411 6.15556 4.21875 5.90121 4.21875 5.63599ZM14.2188 13.636C14.2188 13.9012 14.1134 14.1556 13.9259 14.3431C13.7383 14.5306 13.484 14.636 13.2188 14.636H5.21875C4.95353 14.636 4.69918 14.5306 4.51164 14.3431C4.32411 14.1556 4.21875 13.9012 4.21875 13.636C4.21875 13.3708 4.32411 13.1164 4.51164 12.9289C4.69918 12.7413 4.95353 12.636 5.21875 12.636H13.2188C13.484 12.636 13.7383 12.7413 13.9259 12.9289C14.1134 13.1164 14.2188 13.3708 14.2188 13.636ZM14.2188 17.636C14.2188 17.9012 14.1134 18.1556 13.9259 18.3431C13.7383 18.5306 13.484 18.636 13.2188 18.636H5.21875C4.95353 18.636 4.69918 18.5306 4.51164 18.3431C4.32411 18.1556 4.21875 17.9012 4.21875 17.636C4.21875 17.3708 4.32411 17.1164 4.51164 16.9289C4.69918 16.7413 4.95353 16.636 5.21875 16.636H13.2188C13.484 16.636 13.7383 16.7413 13.9259 16.9289C14.1134 17.1164 14.2188 17.3708 14.2188 17.636Z",fill:"#4A4A4A"})}))},z1=function(){return(0,S.jsx)("svg",$({width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,S.jsx)("path",{d:"M1 20.636H19C19.2652 20.636 19.5196 20.5306 19.7071 20.3431C19.8946 20.1556 20 19.9012 20 19.636V1.63599C20 1.37077 19.8946 1.11642 19.7071 0.928879C19.5196 0.741343 19.2652 0.635986 19 0.635986H1C0.734784 0.635986 0.48043 0.741343 0.292893 0.928879C0.105357 1.11642 0 1.37077 0 1.63599V19.636C0 19.9012 0.105357 20.1556 0.292893 20.3431C0.48043 20.5306 0.734784 20.636 1 20.636ZM3.414 18.636L8 14.05L9.293 15.343C9.48053 15.5305 9.73484 15.6358 10 15.6358C10.2652 15.6358 10.5195 15.5305 10.707 15.343L15 11.05L18 14.05V18.636H3.414ZM18 2.63599V11.222L15.707 8.92899C15.5195 8.74152 15.2652 8.6362 15 8.6362C14.7348 8.6362 14.4805 8.74152 14.293 8.92899L10 13.222L8.707 11.929C8.51947 11.7415 8.26516 11.6362 8 11.6362C7.73484 11.6362 7.48053 11.7415 7.293 11.929L2 17.222V2.63599H18ZM4 7.13599C4 6.64153 4.14662 6.15818 4.42133 5.74706C4.69603 5.33594 5.08648 5.01551 5.54329 4.82629C6.00011 4.63707 6.50277 4.58756 6.98773 4.68402C7.47268 4.78049 7.91814 5.01859 8.26777 5.36822C8.6174 5.71785 8.8555 6.16331 8.95196 6.64826C9.04843 7.13321 8.99892 7.63588 8.8097 8.0927C8.62048 8.54951 8.30005 8.93996 7.88893 9.21466C7.4778 9.48936 6.99445 9.63599 6.5 9.63599C5.83696 9.63599 5.20107 9.37259 4.73223 8.90375C4.26339 8.43491 4 7.79903 4 7.13599Z",fill:"#4A4A4A"})}))},Q1=function(){return(0,S.jsx)("svg",$({width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,S.jsx)("path",{d:"M3 5.72311C2.20435 5.72311 1.44129 6.03918 0.87868 6.60179C0.316071 7.1644 0 7.92746 0 8.72311V12.5491C0.00256297 13.1674 0.196084 13.7697 0.554088 14.2738C0.912091 14.7779 1.41709 15.159 2 15.3651V19.6361C2 19.9013 2.10536 20.1557 2.29289 20.3432C2.48043 20.5308 2.73478 20.6361 3 20.6361H7C7.26522 20.6361 7.51957 20.5308 7.70711 20.3432C7.89464 20.1557 8 19.9013 8 19.6361V16.0591L18.609 20.5591C18.7613 20.6238 18.9272 20.6497 19.0919 20.6345C19.2567 20.6193 19.4151 20.5634 19.5529 20.472C19.6908 20.3805 19.8038 20.2563 19.8818 20.1104C19.9598 19.9645 20.0004 19.8015 20 19.6361V1.63611C20.0001 1.47084 19.9592 1.30813 19.8811 1.16252C19.8029 1.01691 19.6899 0.892938 19.5521 0.8017C19.4143 0.710462 19.256 0.654798 19.0914 0.639687C18.9269 0.624576 18.7611 0.650489 18.609 0.715108L6.8 5.72311H3ZM6 18.6361H4V15.5491H6V18.6361ZM6 13.5491H3C2.73478 13.5491 2.48043 13.4438 2.29289 13.2562C2.10536 13.0687 2 12.8143 2 12.5491V8.72311C2 8.45789 2.10536 8.20354 2.29289 8.016C2.48043 7.82846 2.73478 7.72311 3 7.72311H6V13.5491ZM8 7.38511L18 3.14611V18.1261L8 13.8871V7.38511Z",fill:"#4A4A4A"})}))},se=function(){return(0,S.jsx)("svg",$({width:"22",height:"23",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,S.jsx)("path",{d:"M2.111 22.636H7.667C7.93222 22.636 8.18657 22.5307 8.37411 22.3431C8.56164 22.1556 8.667 21.9012 8.667 21.636V19.536C8.65706 19.233 8.75204 18.9359 8.93589 18.6948C9.11973 18.4538 9.38116 18.2836 9.676 18.213C9.85146 18.1823 10.0315 18.1903 10.2036 18.2363C10.3756 18.2824 10.5356 18.3655 10.6722 18.4797C10.8088 18.594 10.9189 18.7367 10.9947 18.8979C11.0705 19.0591 11.1102 19.2349 11.111 19.413V21.636C11.111 21.9012 11.2164 22.1556 11.4039 22.3431C11.5914 22.5307 11.8458 22.636 12.111 22.636H15.445C16.0047 22.6355 16.5413 22.4129 16.9371 22.0171C17.3329 21.6214 17.5555 21.0847 17.556 20.525V17.08H18.778C19.2463 17.0799 19.709 16.9778 20.1339 16.7807C20.5587 16.5836 20.9355 16.2963 21.2381 15.9389C21.5406 15.5814 21.7617 15.1623 21.8858 14.7107C22.01 14.2591 22.0343 13.7859 21.957 13.324C21.8101 12.5602 21.3993 11.8723 20.7963 11.3809C20.1934 10.8895 19.4368 10.6258 18.659 10.636H17.559V7.19103C17.5585 6.63132 17.3359 6.09469 16.9401 5.69891C16.5443 5.30314 16.0077 5.08056 15.448 5.08003H12V3.97603C12.0109 3.19786 11.7475 2.44069 11.256 1.83729C10.7645 1.23389 10.0763 0.82277 9.312 0.67603C8.84979 0.598351 8.3762 0.622446 7.92426 0.746636C7.47232 0.870826 7.05292 1.09212 6.6953 1.39508C6.33769 1.69804 6.05048 2.07538 5.85371 2.50076C5.65694 2.92615 5.55534 3.38934 5.556 3.85803V5.08003H2.111C1.55129 5.08056 1.01466 5.30314 0.618882 5.69891C0.223108 6.09469 0.000529527 6.63132 0 7.19103V11.636C0 11.9012 0.105357 12.1556 0.292893 12.3431C0.48043 12.5307 0.734784 12.636 1 12.636H3.1C3.40309 12.6263 3.70024 12.7215 3.94128 12.9055C4.18232 13.0895 4.35247 13.3511 4.423 13.646C4.45372 13.8214 4.44577 14.0014 4.3997 14.1735C4.35363 14.3455 4.27055 14.5053 4.15626 14.6419C4.04198 14.7785 3.89925 14.8884 3.73805 14.9641C3.57686 15.0398 3.40108 15.0794 3.223 15.08H1C0.734784 15.08 0.48043 15.1854 0.292893 15.3729C0.105357 15.5605 0 15.8148 0 16.08V20.525C0.000529527 21.0847 0.223108 21.6214 0.618882 22.0171C1.01466 22.4129 1.55129 22.6355 2.111 22.636ZM2 17.08H3.222C3.69025 17.0798 4.15282 16.9775 4.57754 16.7804C5.00227 16.5832 5.37895 16.2959 5.6814 15.9385C5.98386 15.581 6.20481 15.162 6.32891 14.7105C6.45301 14.259 6.47727 13.7859 6.4 13.324C6.25326 12.5597 5.84214 11.8715 5.23874 11.38C4.63534 10.8885 3.87817 10.6251 3.1 10.636H2V7.19103C2 7.16159 2.01169 7.13336 2.03251 7.11254C2.05333 7.09172 2.08156 7.08003 2.111 7.08003H6.556C6.68732 7.08003 6.81736 7.05416 6.93868 7.00391C7.06001 6.95365 7.17025 6.88 7.26311 6.78714C7.35597 6.69428 7.42962 6.58404 7.47988 6.46271C7.53013 6.34139 7.556 6.21135 7.556 6.08003V3.85803C7.55595 3.67953 7.59497 3.50319 7.67033 3.34137C7.74569 3.17956 7.85555 3.03621 7.99221 2.92138C8.12886 2.80654 8.289 2.72301 8.46137 2.67666C8.63375 2.6303 8.81418 2.62223 8.99 2.65303C9.28502 2.72339 9.54668 2.8935 9.73073 3.13457C9.91477 3.37565 10.0099 3.6729 10 3.97603V6.07603C10 6.34125 10.1054 6.5956 10.2929 6.78314C10.4804 6.97067 10.7348 7.07603 11 7.07603H15.445C15.4744 7.07603 15.5027 7.08772 15.5235 7.10854C15.5443 7.12936 15.556 7.15759 15.556 7.18703V11.636C15.556 11.9012 15.6614 12.1556 15.8489 12.3431C16.0364 12.5307 16.2908 12.636 16.556 12.636H18.656C18.9593 12.6261 19.2566 12.7212 19.4979 12.9052C19.7391 13.0892 19.9094 13.3509 19.98 13.646C20.0104 13.8218 20.0021 14.0021 19.9556 14.1743C19.9091 14.3465 19.8256 14.5065 19.7108 14.6431C19.596 14.7797 19.4528 14.8895 19.2912 14.965C19.1296 15.0405 18.9534 15.0797 18.775 15.08H16.556C16.2908 15.08 16.0364 15.1854 15.8489 15.3729C15.6614 15.5605 15.556 15.8148 15.556 16.08V20.525C15.556 20.5545 15.5443 20.5827 15.5235 20.6035C15.5027 20.6243 15.4744 20.636 15.445 20.636H13.111V19.414C13.1111 18.9457 13.0091 18.4829 12.812 18.058C12.615 17.6331 12.3277 17.2563 11.9702 16.9538C11.6126 16.6513 11.1934 16.4303 10.7418 16.3064C10.2901 16.1824 9.81688 16.1584 9.355 16.236C8.59071 16.3828 7.90248 16.7939 7.41098 17.3973C6.91948 18.0007 6.65609 18.7579 6.667 19.536V20.636H2.111C2.08156 20.636 2.05333 20.6243 2.03251 20.6035C2.01169 20.5827 2 20.5545 2 20.525V17.08Z",fill:"#4A4A4A"})}))},F1=function(){return(0,S.jsx)("svg",$({width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,S.jsx)("path",{d:"M1.24675 18.5179C1.40642 18.6033 1.58629 18.6438 1.76717 18.635C1.94804 18.6262 2.12314 18.5684 2.27375 18.4679L14.2738 10.4679C14.4107 10.3766 14.523 10.2528 14.6007 10.1077C14.6783 9.96257 14.719 9.8005 14.719 9.63589C14.719 9.47128 14.6783 9.30921 14.6007 9.16407C14.523 9.01894 14.4107 8.89522 14.2738 8.80389L2.27375 0.803892C2.12315 0.703413 1.9481 0.645704 1.76727 0.63692C1.58644 0.628136 1.40661 0.668608 1.24699 0.754018C1.08736 0.839428 0.953906 0.966571 0.860876 1.12188C0.767845 1.2772 0.718723 1.45485 0.71875 1.63589V17.6359C0.718677 17.8169 0.767753 17.9946 0.860742 18.1499C0.953731 18.3053 1.08714 18.4324 1.24675 18.5179ZM2.71875 3.50489L11.9187 9.63589L2.71875 15.7669V3.50489ZM15.7188 15.6359V3.63589C15.7188 3.37068 15.8241 3.11632 16.0116 2.92879C16.1992 2.74125 16.4535 2.63589 16.7188 2.63589C16.984 2.63589 17.2383 2.74125 17.4259 2.92879C17.6134 3.11632 17.7188 3.37068 17.7188 3.63589V15.6359C17.7188 15.9011 17.6134 16.1555 17.4259 16.343C17.2383 16.5305 16.984 16.6359 16.7188 16.6359C16.4535 16.6359 16.1992 16.5305 16.0116 16.343C15.8241 16.1555 15.7188 15.9011 15.7188 15.6359Z",fill:"#4A4A4A"})}))},D1=function(){return(0,S.jsx)("svg",$({width:"23",height:"21",viewBox:"0 0 23 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,S.jsx)("path",{d:"M1.21875 10.6357H4.21875C4.48397 10.6357 4.73832 10.5304 4.92586 10.3428C5.11339 10.1553 5.21875 9.90096 5.21875 9.63574C5.21875 9.37053 5.11339 9.11617 4.92586 8.92864C4.73832 8.7411 4.48397 8.63574 4.21875 8.63574H3.85375L4.43975 6.94374H7.99775L8.58375 8.63574H8.21875C7.95353 8.63574 7.69918 8.7411 7.51164 8.92864C7.32411 9.11617 7.21875 9.37053 7.21875 9.63574C7.21875 9.90096 7.32411 10.1553 7.51164 10.3428C7.69918 10.5304 7.95353 10.6357 8.21875 10.6357H11.2188C11.484 10.6357 11.7383 10.5304 11.9259 10.3428C12.1134 10.1553 12.2188 9.90096 12.2188 9.63574C12.2188 9.37053 12.1134 9.11617 11.9259 8.92864C11.7383 8.7411 11.484 8.63574 11.2188 8.63574H10.7008L8.16375 1.30874C8.09575 1.11224 7.96819 0.941817 7.79882 0.821194C7.62945 0.700571 7.42669 0.635747 7.21875 0.635742H5.21875C5.01081 0.635747 4.80805 0.700571 4.63868 0.821194C4.4693 0.941817 4.34174 1.11224 4.27375 1.30874L1.73675 8.63574H1.21875C0.953534 8.63574 0.69918 8.7411 0.511643 8.92864C0.324107 9.11617 0.21875 9.37053 0.21875 9.63574C0.21875 9.90096 0.324107 10.1553 0.511643 10.3428C0.69918 10.5304 0.953534 10.6357 1.21875 10.6357ZM5.93075 2.63574H6.50675L7.30675 4.94374H5.13175L5.93075 2.63574ZM22.2188 2.63574C22.2188 2.90096 22.1134 3.15531 21.9259 3.34285C21.7383 3.53039 21.484 3.63574 21.2188 3.63574H14.2188C13.9535 3.63574 13.6992 3.53039 13.5116 3.34285C13.3241 3.15531 13.2188 2.90096 13.2188 2.63574C13.2188 2.37053 13.3241 2.11617 13.5116 1.92864C13.6992 1.7411 13.9535 1.63574 14.2188 1.63574H21.2188C21.484 1.63574 21.7383 1.7411 21.9259 1.92864C22.1134 2.11617 22.2188 2.37053 22.2188 2.63574ZM22.2188 8.63574C22.2188 8.90096 22.1134 9.15531 21.9259 9.34285C21.7383 9.53039 21.484 9.63574 21.2188 9.63574H14.2188C13.9535 9.63574 13.6992 9.53039 13.5116 9.34285C13.3241 9.15531 13.2188 8.90096 13.2188 8.63574C13.2188 8.37053 13.3241 8.11617 13.5116 7.92864C13.6992 7.7411 13.9535 7.63574 14.2188 7.63574H21.2188C21.484 7.63574 21.7383 7.7411 21.9259 7.92864C22.1134 8.11617 22.2188 8.37053 22.2188 8.63574ZM22.2188 13.6357C22.2188 13.901 22.1134 14.1553 21.9259 14.3428C21.7383 14.5304 21.484 14.6357 21.2188 14.6357H1.21875C0.953534 14.6357 0.69918 14.5304 0.511643 14.3428C0.324107 14.1553 0.21875 13.901 0.21875 13.6357C0.21875 13.3705 0.324107 13.1162 0.511643 12.9286C0.69918 12.7411 0.953534 12.6357 1.21875 12.6357H21.2188C21.484 12.6357 21.7383 12.7411 21.9259 12.9286C22.1134 13.1162 22.2188 13.3705 22.2188 13.6357ZM22.2188 19.6357C22.2188 19.901 22.1134 20.1553 21.9259 20.3428C21.7383 20.5304 21.484 20.6357 21.2188 20.6357H1.21875C0.953534 20.6357 0.69918 20.5304 0.511643 20.3428C0.324107 20.1553 0.21875 19.901 0.21875 19.6357C0.21875 19.3705 0.324107 19.1162 0.511643 18.9286C0.69918 18.7411 0.953534 18.6357 1.21875 18.6357H21.2188C21.484 18.6357 21.7383 18.7411 21.9259 18.9286C22.1134 19.1162 22.2188 19.3705 22.2188 19.6357Z",fill:"#4A4A4A"})}))},G1=function(){return(0,S.jsx)("svg",$({width:"18",height:"23",viewBox:"0 0 18 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,S.jsx)("path",{d:"M11 10.636C11 10.4382 11.0587 10.2449 11.1685 10.0804C11.2784 9.91597 11.4346 9.78779 11.6173 9.71211C11.8 9.63642 12.0011 9.61662 12.1951 9.6552C12.3891 9.69379 12.5673 9.78903 12.7071 9.92888C12.847 10.0687 12.9422 10.2469 12.9808 10.4409C13.0194 10.6349 12.9996 10.8359 12.9239 11.0187C12.8482 11.2014 12.72 11.3576 12.5556 11.4675C12.3911 11.5773 12.1978 11.636 12 11.636C11.7348 11.636 11.4804 11.5306 11.2929 11.3431C11.1054 11.1556 11 10.9012 11 10.636ZM6 17.636C6.19778 17.636 6.39112 17.5773 6.55557 17.4675C6.72002 17.3576 6.8482 17.2014 6.92388 17.0187C6.99957 16.8359 7.01937 16.6349 6.98079 16.4409C6.9422 16.2469 6.84696 16.0687 6.70711 15.9289C6.56726 15.789 6.38907 15.6938 6.19509 15.6552C6.00111 15.6166 5.80005 15.6364 5.61732 15.7121C5.43459 15.7878 5.27841 15.916 5.16853 16.0804C5.05865 16.2449 5 16.4382 5 16.636C5 16.9012 5.10536 17.1556 5.2929 17.3431C5.48043 17.5306 5.73479 17.636 6 17.636ZM2.94563e-06 13.636C0.000338632 11.7758 0.577575 9.9615 1.65217 8.4431C2.72676 6.9247 4.24581 5.77694 6 5.15799V2.63599H5C4.73479 2.63599 4.48043 2.53063 4.2929 2.34309C4.10536 2.15556 4 1.9012 4 1.63599C4 1.37077 4.10536 1.11642 4.2929 0.928879C4.48043 0.741343 4.73479 0.635986 5 0.635986H13C13.2652 0.635986 13.5196 0.741343 13.7071 0.928879C13.8946 1.11642 14 1.37077 14 1.63599C14 1.9012 13.8946 2.15556 13.7071 2.34309C13.5196 2.53063 13.2652 2.63599 13 2.63599H12V5.15799C13.5559 5.70809 14.9306 6.6754 15.9738 7.95417C17.017 9.23293 17.6885 10.7739 17.9149 12.4086C18.1413 14.0433 17.9139 15.7088 17.2575 17.2229C16.6011 18.7371 15.541 20.0416 14.1932 20.9938C12.8453 21.9461 11.2616 22.5094 9.61516 22.6222C7.96873 22.735 6.32297 22.393 4.85784 21.6334C3.39272 20.8739 2.16463 19.7261 1.30788 18.3157C0.451116 16.9052 -0.00133202 15.2863 2.94563e-06 13.636ZM2.134 12.324C8.122 10.309 9.789 13.199 15.891 14.824C16.2012 13.0931 15.843 11.3089 14.8888 9.83187C13.9345 8.35479 12.4554 7.29482 10.75 6.86599C10.5354 6.81057 10.3453 6.68543 10.2095 6.51021C10.0738 6.33499 10.0001 6.11964 10 5.89799V2.63599H8V5.89799C7.99995 6.11964 7.92625 6.33499 7.7905 6.51021C7.65474 6.68543 7.46462 6.81057 7.25 6.86599C5.96772 7.19751 4.80603 7.88656 3.90027 8.85287C2.99451 9.81918 2.38197 11.023 2.134 12.324ZM2.057 14.476C2.23549 15.9716 2.89239 17.3696 3.92984 18.4616C4.96729 19.5536 6.32976 20.2812 7.81429 20.536C9.29882 20.7909 10.826 20.5593 12.1682 19.8758C13.5104 19.1923 14.5959 18.0935 15.263 16.743C8.887 15.02 7.72 12.236 2.057 14.476Z",fill:"#4A4A4A"})}))},U1=function(){return(0,S.jsx)("svg",$({width:"18",height:"23",viewBox:"0 0 18 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,S.jsx)("path",{d:"M17 0.635986H1C0.734784 0.635986 0.48043 0.741343 0.292893 0.928879C0.105357 1.11642 0 1.37077 0 1.63599V21.636C0 21.9012 0.105357 22.1556 0.292893 22.3431C0.48043 22.5306 0.734784 22.636 1 22.636H17C17.2652 22.636 17.5196 22.5306 17.7071 22.3431C17.8946 22.1556 18 21.9012 18 21.636V1.63599C18 1.37077 17.8946 1.11642 17.7071 0.928879C17.5196 0.741343 17.2652 0.635986 17 0.635986ZM16 20.636H2V2.63599H16V20.636ZM5.528 16.518C5.68767 16.6034 5.86754 16.6439 6.04842 16.6351C6.22929 16.6263 6.40439 16.5685 6.555 16.468L12.555 12.468C12.692 12.3767 12.8043 12.2529 12.8819 12.1078C12.9596 11.9627 13.0002 11.8006 13.0002 11.636C13.0002 11.4714 12.9596 11.3093 12.8819 11.1642C12.8043 11.019 12.692 10.8953 12.555 10.804L6.555 6.80399C6.4044 6.70351 6.22935 6.6458 6.04852 6.63701C5.86769 6.62823 5.68786 6.6687 5.52823 6.75411C5.3686 6.83952 5.23516 6.96667 5.14213 7.12198C5.04909 7.27729 4.99997 7.45494 5 7.63599V15.636C4.99993 15.817 5.049 15.9947 5.14199 16.15C5.23498 16.3054 5.36839 16.4325 5.528 16.518ZM7 9.50399L10.2 11.636L7 13.768V9.50399Z",fill:"#4A4A4A"})}))},oe=(L={},L[A.API.TopicType.Unselected]=se,L[A.API.TopicType.RichText]=Z1,L[A.API.TopicType.OEmbed]=U1,L[A.API.TopicType.Audio]=Q1,L[A.API.TopicType.Video]=F1,L[A.API.TopicType.H5P]=G1,L[A.API.TopicType.Image]=z1,L[A.API.TopicType.Pdf]=D1,L[A.API.TopicType.Scorm]=se,L[A.API.TopicType.Project]=se,L[A.API.TopicType.GiftQuiz]=se,L),q1=function(e){var t,r=e.type,a=r===void 0?A.API.TopicType.Unselected:r,s=(t=oe==null?void 0:oe[a])!==null&&t!==void 0?t:oe[A.API.TopicType.Unselected];return(0,S.jsx)(s,{})};xe.TopicIcon=q1;var G=h&&h.__assign||function(){return G=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},G.apply(this,arguments)};Object.defineProperty(ge,"__esModule",{value:!0});ge.CourseProgramTopic=void 0;var X=n,W1=ue,be=Te(),X1=xe,Y1=function(e){var t=e.index,r=e.topic,a=e.onTopicClick,s=e.mobile,o=(0,W1.useTranslation)().t;return(0,X.jsxs)("li",G({className:"lesson__topic"},{children:[(0,X.jsxs)("div",G({className:"lesson__description"},{children:[(0,X.jsx)(X1.TopicIcon,{type:r.topicable_type}),(0,X.jsxs)(be.Text,G({className:"lesson__index",size:"14",noMargin:!0},{children:[t,"."," "]})),(0,X.jsx)(be.Text,G({size:"14",noMargin:!0},{children:r.title}))]})),r.preview&&(0,X.jsx)(be.Button,G({mode:"outline",onClick:function(){return a(r)},block:s},{children:o("Course.topicPreview")}))]}))};ge.CourseProgramTopic=Y1;var V=h&&h.__assign||function(){return V=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},V.apply(this,arguments)};Object.defineProperty(me,"__esModule",{value:!0});me.CourseProgramLesson=void 0;var I=n,J1=m,K1=ue,K=Te(),en=ge,nn=function(e){var t,r,a=e.lesson,s=e.index,o=e.defaultOpen,i=o===void 0?!0:o,u=e.onTopicClick,l=e.mobile,g=e.isSubLesson,c=e.children,d=(0,K1.useTranslation)().t,p=(0,J1.useState)(i),x=p[0],b=p[1];return(0,I.jsxs)("li",V({className:"lesson__item ".concat(x?"open":"closed"," ").concat(g?"sub-lesson":"")},{children:[(0,I.jsxs)("header",{children:[(0,I.jsxs)("div",V({className:"lesson__details"},{children:[(0,I.jsxs)(K.Text,V({noMargin:!0,size:"12"},{children:[d(g?"Course.SubLesson":"Course.Lesson")," ",s+1]})),(0,I.jsx)(K.Text,V({noMargin:!0,size:"12"},{children:a.duration&&a.duration}))]})),(0,I.jsx)("div",{children:(0,I.jsx)(K.Text,V({size:"14",bold:!0,noMargin:!0},{children:a.title}))}),(0,I.jsx)(K.Button,V({type:"button",onClick:function(){return b(!x)},mode:"icon","aria-label":d("Actions.Hide")},{children:(0,I.jsx)(K.Icon,{name:"chevron"})}))]}),!!(!((t=a.lessons)===null||t===void 0)&&t.length)&&(0,I.jsx)("ul",V({className:"lesson__lessons"},{children:c})),(0,I.jsx)("ul",V({className:"lesson__topics"},{children:(r=a.topics)===null||r===void 0?void 0:r.map(function(C,v){return(0,I.jsx)(en.CourseProgramTopic,{topic:C,index:v+1,onTopicClick:u,mobile:l},v)})}))]}))};me.CourseProgramLesson=nn;(function(e){var t=h&&h.__assign||function(){return t=Object.assign||function(o){for(var i,u=1,l=arguments.length;u<l;u++){i=arguments[u];for(var g in i)Object.prototype.hasOwnProperty.call(i,g)&&(o[g]=i[g])}return o},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RecursiveLessons=void 0;var r=n,a=me,s=function(o){var i=o.lessons,u=o.depth,l=u===void 0?0:u,g=o.onTopicClick,c=o.mobile;return(0,r.jsx)(r.Fragment,{children:i.map(function(d,p){var x;return(0,r.jsx)(a.CourseProgramLesson,t({defaultOpen:!0,index:p,lesson:d,isSubLesson:l>0,onTopicClick:g,mobile:c},{children:(0,r.jsx)(e.RecursiveLessons,{lessons:(x=d.lessons)!==null&&x!==void 0?x:[],depth:l+1,onTopicClick:g,mobile:c})}),d.id)})})};e.RecursiveLessons=s})(Xe);var Ce={},tn=h&&h.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ye=h&&h.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.StyledSection=void 0;var rn=Ye(l1),sn=Ye(pe),D=c1;Ce.StyledSection=(0,sn.default)("section")(Be||(Be=tn([`
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
    border-radius: `,`px;

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
        font-size: 14px;
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
    border-radius: `,`px;

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
        font-size: 14px;
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
`])),function(e){var t=e.theme;return(0,D.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)},function(e){var t=e.theme;return(0,D.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.cardRadius},function(e){var t=e.theme;return(0,D.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray1},function(e){var t=e.theme;return(0,D.getStylesBasedOnTheme)(t.mode,t.dm__primaryColor,t.primaryColor,t.primaryColor)},function(e){return e.theme.gray2},function(e){return e.$mobile?"column":"row"},function(e){var t=e.theme;return(0,D.getStylesBasedOnTheme)(t.mode,(0,rn.default)(t.white).alpha(.2).hex(),t.white)},function(e){return e.$mobile?"0":"auto"},function(e){return e.$mobile?"6px":"0"},function(e){var t=e.theme;return(0,D.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){var t=e.theme;return(0,D.getStylesBasedOnTheme)(t.mode,t.white,t.gray1)},function(e){return e.theme.dm__numerationsColor||e.theme.numerationsColor?1:.5});var Be;(function(e){var t=h&&h.__makeTemplateObject||function(C,v){return Object.defineProperty?Object.defineProperty(C,"raw",{value:v}):C.raw=v,C},r=h&&h.__assign||function(){return r=Object.assign||function(C){for(var v,y=1,T=arguments.length;y<T;y++){v=arguments[y];for(var P in v)Object.prototype.hasOwnProperty.call(v,P)&&(C[P]=v[P])}return C},r.apply(this,arguments)},a=h&&h.__createBinding||(Object.create?function(C,v,y,T){T===void 0&&(T=y);var P=Object.getOwnPropertyDescriptor(v,y);(!P||("get"in P?!v.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return v[y]}}),Object.defineProperty(C,T,P)}:function(C,v,y,T){T===void 0&&(T=y),C[T]=v[y]}),s=h&&h.__setModuleDefault||(Object.create?function(C,v){Object.defineProperty(C,"default",{enumerable:!0,value:v})}:function(C,v){C.default=v}),o=h&&h.__importStar||function(C){if(C&&C.__esModule)return C;var v={};if(C!=null)for(var y in C)y!=="default"&&Object.prototype.hasOwnProperty.call(C,y)&&a(v,C,y);return s(v,C),v};Object.defineProperty(e,"__esModule",{value:!0}),e.CourseProgram=void 0;var i=n,u=ue,l=o(pe),g=Te(),c=Xe,d=Ce,p=function(C){var v=C.lessons,y=C.onTopicClick,T=C.mobile,P=T===void 0?!1:T,B=C.className,f=B===void 0?"":B,_=(0,u.useTranslation)().t;return(0,i.jsxs)(d.StyledSection,r({$mobile:P,className:"wellms-component ".concat(f)},{children:[!P&&(0,i.jsx)("header",{children:(0,i.jsx)(g.IconTitle,{level:5,as:"h1",icon:(0,i.jsx)(g.Icon,{name:"program"}),title:_("Course.Agenda")})}),(0,i.jsx)("ul",r({className:"lessons__list"},{children:(0,i.jsx)(c.RecursiveLessons,{lessons:v,onTopicClick:y,mobile:P})}))]}))};e.CourseProgram=p;var x=(0,l.default)(e.CourseProgram)(b||(b=t([""],[""])));e.default=(0,l.withTheme)(x);var b})(We);var Je={};(function(e){var t=h&&h.__makeTemplateObject||function(d,p){return Object.defineProperty?Object.defineProperty(d,"raw",{value:p}):d.raw=p,d},r=h&&h.__createBinding||(Object.create?function(d,p,x,b){b===void 0&&(b=x);var C=Object.getOwnPropertyDescriptor(p,x);(!C||("get"in C?!p.__esModule:C.writable||C.configurable))&&(C={enumerable:!0,get:function(){return p[x]}}),Object.defineProperty(d,b,C)}:function(d,p,x,b){b===void 0&&(b=x),d[b]=p[x]}),a=h&&h.__setModuleDefault||(Object.create?function(d,p){Object.defineProperty(d,"default",{enumerable:!0,value:p})}:function(d,p){d.default=p}),s=h&&h.__importStar||function(d){if(d&&d.__esModule)return d;var p={};if(d!=null)for(var x in d)x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)&&r(p,d,x);return a(p,d),p};Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownPlayer=void 0;var o=n,i=s(m),u=d1(),l=s(pe),g=function(d){var p=d.onLoad,x=d.children,b=d.mobile,C=b===void 0?!1:b;return i.useEffect(function(){x&&p&&p()},[x,p]),(0,o.jsx)(u.MarkdownRenderer,{children:x,mobile:C})};e.MarkdownPlayer=g,e.default=(0,l.withTheme)((0,l.default)(e.MarkdownPlayer)(c||(c=t([""],[""]))));var c})(Je);const on=({topic:e})=>{const{apiUrl:t}=m.useContext(q.EscolaLMSContext),r=m.useMemo(()=>{var a,s;if(e&&e.topicable_type)switch(e.topicable_type){case z.TopicType.H5P:return n.jsx(N1.H5Player,{h5pObject:(a=e==null?void 0:e.topicable)==null?void 0:a.content,hideActionButtons:!0});case z.TopicType.OEmbed:return n.jsx(H1.OEmbedPlayer,{url:(s=e==null?void 0:e.topicable)==null?void 0:s.value});case z.TopicType.RichText:return n.jsx("div",{className:"container-xl",children:n.jsx(Je.MarkdownPlayer,{children:e.topicable.value,onLoad:()=>console.log("MarkdownPlayer onLoad")})});case z.TopicType.Video:case z.TopicType.Audio:return n.jsx(I1.AudioVideoPlayer,{url:e.topicable.url});case z.TopicType.Image:return n.jsx(A1.ImagePlayer,{topic:e,onLoad:()=>console.log("")});case z.TopicType.Pdf:return n.jsx(L1.PdfPlayer,{url:e.topicable.url,pageConfig:{width:550}});case z.TopicType.Scorm:return n.jsx("div",{className:"scorm-wrapper",children:n.jsx("iframe",{title:e.topicable.value,width:"100%",height:"400px",style:{border:"none"},src:`${t}/api/scorm/play/${e.topicable.uuid}`})});case S1.TopicType.GiftQuiz:return n.jsx(O1,{topic:e});default:return n.jsx("pre",{children:e.topicable_type})}return n.jsx(u1.Fragment,{})},[e,t]);return n.jsx("div",{className:"topic-preview-modal",children:n.jsx("div",{className:"topic-preview-modal-content",children:r})})};var Ke={};(function(e){var t=h&&h.__makeTemplateObject||function(f,_){return Object.defineProperty?Object.defineProperty(f,"raw",{value:_}):f.raw=_,f},r=h&&h.__assign||function(){return r=Object.assign||function(f){for(var _,w=1,M=arguments.length;w<M;w++){_=arguments[w];for(var O in _)Object.prototype.hasOwnProperty.call(_,O)&&(f[O]=_[O])}return f},r.apply(this,arguments)},a=h&&h.__createBinding||(Object.create?function(f,_,w,M){M===void 0&&(M=w);var O=Object.getOwnPropertyDescriptor(_,w);(!O||("get"in O?!_.__esModule:O.writable||O.configurable))&&(O={enumerable:!0,get:function(){return _[w]}}),Object.defineProperty(f,M,O)}:function(f,_,w,M){M===void 0&&(M=w),f[M]=_[w]}),s=h&&h.__setModuleDefault||(Object.create?function(f,_){Object.defineProperty(f,"default",{enumerable:!0,value:_})}:function(f,_){f.default=_}),o=h&&h.__importStar||function(f){if(f&&f.__esModule)return f;var _={};if(f!=null)for(var w in f)w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)&&a(_,f,w);return s(_,f),_};Object.defineProperty(e,"__esModule",{value:!0}),e.ModalCourseAccess=void 0;var i=n,u=m,l=ue,g=p1,c=o(pe),d=q,p=m1,x=g1,b=x1,C=H,v=U,y=c.default.aside(P||(P=t([`
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
`])),function(f){var _=f.theme;return _.errorColor}),T=function(f){var _=f.course,w=f.className,M=f.initialValues,O=M===void 0?{phone_number:"",contact_details:""}:M,s1=f.onCancel,he=f.onSuccess,fe=f.onError,J=(0,l.useTranslation)().t,o1=(0,u.useContext)(d.EscolaLMSContext).addCourseAccess;return(0,i.jsxs)(y,r({className:"wellms-component ".concat(w),"data-testid":"modal-course-access"},{children:[(0,i.jsxs)("header",{children:[(0,i.jsx)(C.Title,r({level:1},{children:_.title})),(0,i.jsx)(v.Text,r({size:"14",bold:!0},{children:J("ModalCourseAccess.Title")}))]}),(0,i.jsx)(g.Formik,r({initialValues:O,onSubmit:function(E,W){var ee=W.setErrors,Q=W.setSubmitting,ne=W.resetForm,te={course_id:_.id,data:E};o1(te).then(function(){ne(),he==null||he()}).catch(function(Z){var ve,_e;ee(r({error:(ve=Z==null?void 0:Z.data)===null||ve===void 0?void 0:ve.message},(_e=Z==null?void 0:Z.data)===null||_e===void 0?void 0:_e.errors)),fe==null||fe()}).finally(function(){Q(!1)})}},{children:function(E){var W=E.values,ee=E.touched,Q=E.errors,ne=E.handleChange,te=E.handleBlur,Z=E.handleSubmit;return(0,i.jsxs)("form",r({onSubmit:Z},{children:[(0,i.jsxs)("div",r({className:"form-content"},{children:[Q&&Q.error&&(0,i.jsx)(v.Text,r({className:"error-msg",size:"12",bold:!0},{children:Q.error})),(0,i.jsxs)("div",r({className:"input-group"},{children:[(0,i.jsx)(x.Input,{type:"text",label:J("ModalCourseAccess.PhoneNumber"),error:ee.phone_number&&Q.phone_number,id:"phone_number",name:"phone_number",onChange:ne,onBlur:te,value:W.phone_number}),(0,i.jsx)(b.TextArea,{label:J("ModalCourseAccess.ContactDetails"),error:ee.contact_details&&Q.contact_details,id:"contact_details",name:"contact_details",onChange:ne,onBlur:te,value:W.contact_details})]}))]})),(0,i.jsxs)("div",r({className:"button-group"},{children:[(0,i.jsx)(p.Button,r({type:"button",mode:"secondary",onClick:s1},{children:J("ModalCourseAccess.Cancel")})),(0,i.jsx)(p.Button,r({type:"submit",mode:"secondary"},{children:J("ModalCourseAccess.Submit")}))]}))]}))}}))]}))};e.ModalCourseAccess=T,e.default=(0,c.withTheme)((0,c.default)(e.ModalCourseAccess)(B||(B=t([""],[""]))));var P,B})(Ke);const an=Y.div`
  section {
    margin-bottom: 45px;
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
    .image-wrapper {
      @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 35px;

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
    padding: 50px 45px;
    margin: 45px 0;
    background-color: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
    border-radius: ${({theme:e})=>e.cardRadius}px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  .course-related-courses {
    background-color: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
    padding: 60px 0 90px;
    .slick-dots {
      top: -65px;
      right: 80px;
      @media (max-width: 575px) {
        right: 0;
      }
    }
    .content-container {
      position: relative;
      overflow: hidden;
      &:first-of-type {
        margin-bottom: 60px;
        @media (max-width: 768px) {
          margin-bottom: 40px;
        }
      }
      h4 {
        @media (max-width: 575px) {
          padding-right: 50%;
        }
      }
      .slider-wrapper {
        a {
          text-decoration: none !important;
        }
        @media (max-width: 575px) {
          margin-left: -50px;

          .image-section,
          img {
            max-height: 180px;
          }
        }
      }
    }
  }
  .course-tutor {
    a {
      text-decoration: none !important;
    }
  }
  .sidebar-wrapper {
    width: 100%;
    left: 0;
    position: ${k?"fixed":"sticky"};
    top: ${k?"unset":"130px"};
    bottom: ${k?"0":"unset"};
    z-index: 100;
  }

  .single-content {
    box-sizing: border-box;
  }
`,Ee=C1`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`,ln=({courseData:e})=>{const{t}=N();return n.jsx("section",{className:"course-tutor with-border padding-right",children:n.jsx(ae,{to:`/tutors/${e.author_id}`,children:n.jsx(h1,{mobile:k,avatar:{alt:`${e.author.first_name} ${e.author.last_name}`,src:e.author.path_avatar?`${f1}/api/images/img?path=${e.author.path_avatar}`:De.tutorPlaceholderPath},rating:{ratingValue:4.1},title:n.jsx(H.Title,{as:"h3",level:4,className:"title",children:t("CoursePage.Teacher")}),fullName:`${e.author.first_name} ${e.author.last_name}`,coursesInfo:"8 Curses",description:e.author.bio})})})},cn=()=>{const{t:e}=N(),{settings:t}=m.useContext(ce.EscolaLMSContext);return n.jsxs("section",{className:"course-companies",children:[n.jsx(U.Text,{children:n.jsx("strong",{children:e("CoursePage.CompaniesTitle")})}),n.jsx("div",{className:"companies-row",children:t&&t.value.courseLogos&&Object.values(t.value.courseLogos).map((r,a)=>{var s;return n.jsx("div",{className:"single-company",children:n.jsx(Ge.ResponsiveImage,{path:((s=t==null?void 0:t.value)==null?void 0:s.courseLogos[`logo${a+1}`])||"",srcSizes:[100,200,300]})},a)})})]})},dn=({courseData:e,questionnaires:t})=>{const[r,a]=m.useState([]),{fetchQuestionnaireStars:s}=m.useContext(q.EscolaLMSContext),{id:o}=de(),{t:i}=N(),u=async g=>{const c=await Promise.all(g.map(async d=>{const p=await s(Me.COURSE,Number(o),d);return p.success?p.data:null}));a(c)},l=()=>{const g=(t||[]).reduce((c,d)=>{const p=d.questions.find(x=>x.type===le.REVIEW&&x.public_answers);return p&&c.push(p.id),c},[]);u(g)};return m.useEffect(()=>{t.length>0&&l()},[t]),n.jsxs("section",{className:"course-main-info with-border",children:[n.jsxs(R.Row,{children:[n.jsxs(R.Col,{lg:7,children:[n.jsx(H.Title,{mobile:k,level:2,children:e.title}),n.jsxs("div",{className:"labels-row",children:[n.jsx("div",{className:"single-label",children:n.jsx(F.LabelListItem,{mobile:k,title:"90%",icon:n.jsx(v1,{}),children:i("CoursePage.Recommends")})}),n.jsx("div",{className:"single-label",children:n.jsx(F.LabelListItem,{mobile:k,title:i("CoursePage.Guarantee"),icon:n.jsx(_1,{}),children:i("CoursePage.Satisfaction")})}),n.jsx("div",{className:"single-label",children:n.jsx(F.LabelListItem,{mobile:k,title:r.length>0?String(V1(r)):i("CoursePage.NoRatings"),icon:n.jsx(Qe,{}),children:i("CoursePage.AvarageRating")})})]})]}),n.jsx(R.Col,{lg:4,children:e.image_path&&n.jsx("div",{className:"image-wrapper",children:n.jsx(Ge.ResponsiveImage,{path:e.image_path,srcSizes:[790*.5,790,2*790]})})})]}),n.jsxs("div",{className:"labels-row labels-row--bottom",children:[e.categories&&e.categories.length>0&&n.jsx("div",{className:"single-label",children:n.jsx(F.LabelListItem,{title:i("CoursePage.CourseCategory"),variant:"label",children:e.categories[0].name})}),e.level&&n.jsx("div",{className:"single-label",children:n.jsx(F.LabelListItem,{title:i("CoursePage.Level"),variant:"label",children:e.level})}),e.active_from&&n.jsx("div",{className:"single-label",children:n.jsx(F.LabelListItem,{title:i("CoursePage.StartDate"),variant:"label",children:e.active_from?Ue(e.active_from):"---"})}),e.duration&&n.jsx("div",{className:"single-label",children:n.jsx(F.LabelListItem,{title:i("CoursePage.Duration"),variant:"label",children:e.duration})})]})]})},Se=Y(j.Stack)`
  gap: 16px;
  margin: 16px auto;
`,e1=Y(H.Title)`
  margin-bottom: 16px;
`,n1=Y.div`
  margin: 0 auto;
`,Ze=()=>console.warn("INITIAL STATE"),we=m.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:Ze,questionId:null,setQuestionId:Ze,reviewId:void 0,courseId:void 0}),un=({children:e,questionnaires:t})=>{var c;const[r,a]=m.useState(null),[s,o]=m.useState(null),{id:i}=de(),u=t==null?void 0:t.at(0),l=(c=u==null?void 0:u.questions)==null?void 0:c.find(({type:d})=>d===le.RATE),g=$1({questionnaires:t,questionnaireId:r,questionType:le.REVIEW});return m.useEffect(()=>{u!=null&&u.id&&!r&&a(u.id)},[u==null?void 0:u.id,r]),m.useEffect(()=>{l!=null&&l.id&&!s&&o(l.id)},[l==null?void 0:l.id,s]),n.jsx(we.Provider,{value:{questionnaires:t,questionnaireId:r,setQuestionnaireId:a,questionId:s,setQuestionId:o,reviewId:g,courseId:Number(i)},children:e})},Oe=()=>{const e=m.useContext(we);if(!we)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return e},ye={total:0,per_page:3,page:1,current_page:1},t1=({questionId:e,courseId:t})=>{const[r,a]=m.useState(void 0),[s,o]=m.useState(ye),[i,u]=m.useState(!0),{fetchQuestionnairesAnswers:l}=m.useContext(q.EscolaLMSContext),{t:g}=N(),c=m.useCallback(p=>{e&&t&&(u(!0),l(Me.COURSE,Number(t),e,{per_page:s.per_page,page:p,order_by:"updated_at",order:"DESC"}).then(x=>{x.success&&(a(x.data),o(b=>({...b,total:x.meta.total,current_page:x.meta.current_page,page:x.meta.current_page})))}).catch(x=>{j1.error(g("UnexpectedError")),console.log(x)}).finally(()=>u(!1)))},[s,l,t,e,g]),d=m.useCallback(p=>{o(x=>({...x,current_page:p}))},[]);return m.useEffect(()=>{s.page!==s.current_page&&c(s.current_page)},[s.current_page,s.page,c]),m.useEffect(()=>{o(ye),c(ye.page)},[e]),{answersMeta:s,questionnaireAnswers:r,loading:i,onPageChange:d}},pn=Y(j.Row)`
  justify-content: space-between;
  padding: 16px;
  background: ${({theme:e})=>e.white};
`,r1=({question:e})=>{const{user:t,note:r,updated_at:a,rate:s}=e,o=Pe();return r?n.jsxs(pn,{children:[n.jsxs(j.Row,{$gap:16,children:[t.avatar?n.jsx(j.Avatar,{src:t.avatar,alt:""}):n.jsx(b1,{mode:o.mode==="dark"?"light":"dark"}),n.jsxs(j.Stack,{$justifyContent:"space-between",children:[n.jsx(H.Title,{level:5,children:t.name}),n.jsx(U.Text,{children:r})]})]}),n.jsxs(j.Stack,{$gap:8,children:[n.jsx(U.Text,{noMargin:!0,children:Ue(a,De.defaultDateFormat)}),s>0&&n.jsxs(j.Row,{$gap:16,children:[n.jsx(Qe,{}),n.jsx(U.Text,{children:s})]})]})]}):n.jsx(n.Fragment,{})},mn=({courseId:e,questionId:t})=>{const{answersMeta:r,loading:a,onPageChange:s,questionnaireAnswers:o}=t1({questionId:t,courseId:e});return n.jsx(Se,{children:a?n.jsx(j.Spin,{}):n.jsxs(n.Fragment,{children:[o&&o.map(i=>n.jsx(r1,{question:i})),r.total>r.per_page&&n.jsx(n1,{children:n.jsx(qe,{total:r.total,perPage:r.per_page,currentPage:r.current_page,onPage:s})})]})})},gn=({questionnaires:e})=>{const{questionnaireId:t,setQuestionnaireId:r,questionId:a,setQuestionId:s}=Oe(),{t:o}=N(),i=Pe(),u=m.useMemo(()=>e.map(g=>({label:g.title,value:String(g.id)})),[e]),l=m.useMemo(()=>{var g;return((g=e==null?void 0:e.find(c=>c.id===t))==null?void 0:g.questions.filter(c=>c.public_answers).filter(c=>c.type!==le.REVIEW).map(c=>({label:c.title,value:String(c.id)})))||[]},[t,e]);return n.jsxs(Se,{children:[u.length>1&&n.jsx(j.Dropdown,{onChange:g=>r(Number(g.value)),options:u,placeholder:o("CoursePage.SelectQuestionnaire"),backgroundColor:i.white,value:u==null?void 0:u.find(({value:g})=>g===String(t))}),n.jsx(j.Dropdown,{onChange:g=>s(Number(g.value)),options:l,placeholder:o("CoursePage.SelectQuestion"),backgroundColor:i.white,value:l==null?void 0:l.find(({value:g})=>g===String(a))})]})},xn=m.memo(()=>{const{questionnaires:e,courseId:t,questionId:r}=Oe(),{t:a}=N();return n.jsxs(n.Fragment,{children:[n.jsx(e1,{level:4,children:a("CoursePage.Questionnaires")}),e.length>0?n.jsxs(n.Fragment,{children:[n.jsx(gn,{questionnaires:e}),t&&r&&n.jsx(mn,{courseId:t,questionId:r})]}):n.jsx(U.Text,{children:a("CoursePage.CourseRatingsEmpty")})]})}),Cn=({courseId:e,questionId:t})=>{const{answersMeta:r,loading:a,onPageChange:s,questionnaireAnswers:o}=t1({questionId:t,courseId:e});return n.jsx(Se,{children:a?n.jsx(j.Spin,{}):n.jsxs(n.Fragment,{children:[(o||[]).map(i=>n.jsx(r1,{question:i})),r.total>r.per_page&&n.jsx(n1,{children:n.jsx(qe,{total:r.total,perPage:r.per_page,currentPage:r.current_page,onPage:s})})]})})},hn=m.memo(()=>{const{courseId:e,reviewId:t}=Oe(),{t:r}=N();return n.jsxs(n.Fragment,{children:[n.jsx(e1,{level:4,children:r("CoursePage.CourseRatingsTitle")}),e&&t&&n.jsx(Cn,{courseId:e,questionId:t})]})}),fn=m.memo(({questionnaires:e})=>n.jsx(un,{questionnaires:e,children:n.jsx("section",{className:"course-ratings",children:n.jsxs(R.Row,{children:[n.jsx(R.Col,{children:n.jsx(xn,{})}),n.jsx(R.Col,{children:n.jsx(hn,{})})]})})})),vn=()=>{const{t:e}=N(),{courses:t}=m.useContext(ce.EscolaLMSContext),r={arrows:!1,infinite:!0,speed:500,slidesToShow:3,draggable:!1,slidesToScroll:3,responsive:[{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]};return n.jsx("section",{className:"course-related-courses",children:n.jsx(Fe,{children:n.jsx(R.Row,{children:n.jsxs(R.Col,{lg:9,children:[n.jsxs("div",{className:"content-container",children:[n.jsx(H.Title,{level:4,as:"h2",children:e("CoursePage.RelatedCoursesTitle")}),t&&t.list&&n.jsx(Ve,{courses:t.list.data,sliderSettings:r})]}),n.jsxs("div",{className:"content-container",children:[n.jsx(H.Title,{level:4,as:"h2",children:e("CoursePage.InterestTitle")}),t&&t.list&&n.jsx(Ve,{courses:t.list.data,sliderSettings:r})]})]})})})})},kn=()=>{var v;const[e,t]=m.useState([]),[r,a]=m.useState(!1),[s,o]=m.useState(),{id:i}=de(),{t:u}=N(),{course:l,fetchCourse:g,fetchCourses:c,fetchCourseAccess:d,fetchQuestionnaires:p}=m.useContext(ce.EscolaLMSContext),x=m.useCallback(()=>a(!1),[]),b=m.useCallback(()=>a(!0),[]),C=m.useCallback(()=>d({course_id:Number(i),current_page:1,per_page:1}),[i,d]);return m.useEffect(()=>{c({per_page:6}),i&&(g(Number(i)),C(),p(Me.COURSE,Number(i)).then(y=>y.success&&t(y.data)))},[i]),l.error?n.jsx("pre",{children:l.error.message}):n.jsxs(y1,{metaTitle:((v=l==null?void 0:l.value)==null?void 0:v.title)||"Loading",children:[l.loading&&n.jsx(T1,{}),!l.loading&&l.value&&n.jsxs(n.Fragment,{children:[n.jsxs(an,{children:[n.jsx(Fe,{children:n.jsxs(R.Row,{children:[n.jsxs(R.Col,{md:12,lg:9,children:[n.jsx(R1,{items:[n.jsx(ae,{to:ie.home,children:u("Home")}),n.jsx(ae,{to:ie.courses,children:u("Courses")}),n.jsx(U.Text,{size:"12",children:l.value.title})]}),n.jsx(dn,{courseData:l.value,questionnaires:e}),n.jsx(cn,{}),l.value.summary&&Ae(l.value.summary)!==""&&n.jsx("section",{className:"course-description",children:n.jsx(Ie.MarkdownRenderer,{children:l.value.summary})}),l.value.author&&n.jsx(ln,{courseData:l.value}),l.value.description&&Ae(l.value.description)!==""&&n.jsxs("section",{className:"course-description-short with-border padding-right",children:[n.jsx(H.Title,{level:4,children:u("CoursePage.CourseDescriptionTitle")}),n.jsx(Ie.MarkdownRenderer,{children:l.value.description})]}),l.value.lessons&&l.value.lessons.length>0&&n.jsx(We.CourseProgram,{lessons:l.value.lessons,onTopicClick:y=>o(y)}),n.jsx(fn,{questionnaires:e})]}),n.jsx(R.Col,{md:12,lg:3,className:"sidebar-col",children:n.jsx("div",{className:"sidebar-wrapper",children:l.value&&n.jsx(E1,{course:l.value,onRequestAccess:b})})})]})}),n.jsx(vn,{})]}),n.jsxs(He.Modal,{onClose:()=>o(void 0),visible:!!s,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,bodyStyle:{maxHeight:"80vh",overflow:"auto"},children:[n.jsx(Ee,{}),s&&n.jsx(on,{topic:s})]}),n.jsxs(He.Modal,{onClose:x,visible:r,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:600,children:[n.jsx(Ee,{}),n.jsx(Ke.ModalCourseAccess,{course:l.value,onCancel:x,onSuccess:()=>{C(),x()}})]})]})]})};export{kn as default};

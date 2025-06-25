import{c as D,b as M,e as $,f as L,j as e,T as B,l as O,i as z,g as N,L as H,h as A,q as E,a as q,k as W,C as I,B as Q,M as F}from"./index-DHorRSia.js";import{r as p}from"./sentry-DZqhWugq.js";import{C as G}from"./index-BwC7q4kx.js";import{D as y}from"./index-B-n2w3x2.js";import{S as R}from"./swiper-CphuuvCl.js";import{S as _}from"./swiper-Bkq9vrtu.js";import{C as J,a as K,b as X}from"./CourseCard-yQmPKytJ.js";import{C as g,u as Y}from"./index-DHAe1Ret.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";import"./index-DgDBwUqe.js";import"./useFetchCourses-m9mvzXk_.js";import"./index-B7vnVY_d.js";import"./useRoles-Dxl24k1Q.js";import"./questionnaire-CXWDgbJ4.js";import"./questionnaires-rQ_WgpJv.js";import"./useDownloadCertificate-C2AoYGTo.js";import"./base-Bd27snqx.js";import"./index-DcaIG2pc.js";const Z=(o=g.ALL)=>{var P,k;const{fetchMyAuthoredCourses:r,myAuthoredCourses:i,fetchPaginatedProgress:l,paginatedProgress:n}=p.useContext(D.EscolaLMSContext),[s,c]=p.useState([]),d=M(),{setQueryParam:m}=Y(),{search:f}=$(),x=new URLSearchParams(f),h=x.get("page"),j=x.get("status"),w=p.useMemo(()=>{var t,a;return o===g.AUTHORED?(t=i.list)==null?void 0:t.meta:(a=n.list)==null?void 0:a.meta},[o,(P=i.list)==null?void 0:P.meta,(k=n.list)==null?void 0:k.meta]),C=p.useCallback(t=>{let a="";switch(t){case 1:case 5:break;case 2:a="started";break;case 3:a="planned";break;case 4:a="finished";break}return a},[]);p.useEffect(()=>{l({page:h?parseInt(h):1,per_page:18,status:C(Number(j))}),(o===g.ALL||o===g.AUTHORED)&&r()},[l,o,r,h,j,C]);const T=p.useMemo(()=>{var t;return(((t=n.list)==null?void 0:t.data)||[]).reduce((a,u)=>({...a,[u.course.id?u.course.id:-1]:Math.round((u.progress||[]).reduce((S,U)=>U.status===1?S+1:S,0)/u.progress.length*100)}),{})},[n]),b=p.useCallback(t=>t.map(a=>({...a.course,courseData:a,progress:T[a.course.id?a.course.id:-1]})),[T]);return p.useEffect(()=>{var t,a,u,S;o!==g.AUTHORED?c(b(((t=n.list)==null?void 0:t.data)||[])):o===g.AUTHORED?c(((a=i.list)==null?void 0:a.data)||[]):c([...b(((u=n.list)==null?void 0:u.data)||[]),...((S=i.list)==null?void 0:S.data)||[]])},[o,n,i,b]),{coursesToMap:s,paginationMeta:w,loading:n.loading||i.loading,handlePagination:t=>{m("page",`${t}`),window==null||window.scrollTo(0,0)},redirectToCourses:()=>d.push(L.courses)}},V=E.div`
  position: relative;
`,ee=({titleText:o,slidesPerView:r=4})=>{const{coursesToMap:i,loading:l}=Z(),n=M();return i.length===0?null:e.jsxs(V,{children:[e.jsx("div",{className:"header-wrapper",children:e.jsx(B.Title,{className:"slider-title",level:1,as:"h2",children:e.jsx("strong",{children:o})})}),l&&e.jsx(_,{slidesPerView:r,children:Array.from({length:6}).map((s,c)=>e.jsx(R,{children:e.jsx(J,{})},c))}),!l&&i&&e.jsx(_,{slidesPerView:r,children:i.map(s=>{var c,d;return e.jsx(R,{children:e.jsx(O.NewCourseCard,{mobile:N,id:s.id,disabled:((c=s==null?void 0:s.courseData)==null?void 0:c.end_date)&&z(new Date((d=s==null?void 0:s.courseData)==null?void 0:d.end_date)),image:e.jsx(H,{to:`/courses/${s.id}`,children:s.image_path?e.jsx(A.ResponsiveImage,{path:s.image_path,alt:s.title,srcSizes:[300,600,900]}):e.jsx(X,{})}),title:e.jsx(H,{to:`/courses/${s.id}`,children:e.jsx(B.Title,{level:3,as:"h3",className:"title",children:s.title})}),categories:e.jsx(K,{categories:s.categories,onCategoryClick:m=>{n.push(`/courses/?categories[]=${m}`)}}),progress:s.progress&&s.progress!==100&&!isNaN(s.progress)?{currentProgress:s.progress,maxProgress:100}:void 0})},s.id)})})]})},se=E.div`
  @media (max-width: 1200px) {
    margin-top: 0;
  }
  @media (max-width: 575px) {
    margin-top: -30px;
  }
  .home-hero {
    margin-bottom: 45px;
    padding-top: 42px;

    h1 {
      margin-top: 0 !important;
    }
    @media (max-width: 768px) {
      margin-bottom: 40px;
      padding-top: 100px;
      h1 {
        font-size: 26px;
      }
    }
  }

  .home-newest-courses {
    margin-bottom: 30px;
  }
`,v=E(I)`
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    button {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
`,Se=()=>{var d,m,f,x,h,j,w,C,T;const{categoryTree:o,settings:r,fetchCategories:i,user:l}=p.useContext(D.EscolaLMSContext),n=M(),{t:s,i18n:c}=q();return p.useEffect(()=>{i()},[i]),e.jsx(W,{metaTitle:s("Home"),children:e.jsxs(se,{children:[e.jsx("section",{className:"home-hero",children:((d=r.value)==null?void 0:d.homepage)&&((m=r.value.homepage)==null?void 0:m.heroBannerText)&&((f=r.value.homepage)==null?void 0:f.heroBannerImg)&&((x=r.value.homepage)==null?void 0:x.heroBannerImg)!==""&&e.jsx(I,{children:e.jsx(Q.Banner,{mobile:N,title:e.jsx(F.MarkdownRenderer,{children:`<h1>${((h=r.value.homepage)==null?void 0:h.heroBannerText[c.language])||""}</h1>`}),btnText:s("Homepage.HeroBtnText"),asset:e.jsx(A.ResponsiveImage,{path:((w=(j=r==null?void 0:r.value)==null?void 0:j.homepage)==null?void 0:w.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>n.push(L.courses)})})}),((C=l.value)==null?void 0:C.id)&&e.jsx("section",{className:"home-newest-courses",children:e.jsx(v,{children:e.jsx(ee,{titleText:s("Navbar.MyCourses")})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(v,{children:e.jsx(y,{titleText:s("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(v,{children:e.jsx(y,{titleText:s("Homepage.CoursesSlider1Title"),params:{per_page:8}})})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(v,{children:e.jsx(y,{titleText:s("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!N,ctaButton:!0})})}),o&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(G,{categories:((T=o.list)==null?void 0:T.filter(b=>!!b.icon))||[],entity:"courses"})})]})})};export{Se as default};
//# sourceMappingURL=index-BOtvxJj9.js.map

import{r as p,i as D,k as M,l as $,m as L,q as E,j as e,T as B,n as O,o as N,p as z,L as H,s as A,h as q,v as W,C as I,B as Q,M as F}from"./index-HzhV-0zX.js";import{C as G}from"./index-DgHB2EUR.js";import{D as y}from"./index-vzOXu-4O.js";import{S as R}from"./swiper-react-DKOJhMA8.js";import{S as _}from"./swiper-Bqc0wjQY.js";import{C as J,a as K,b as X}from"./CourseCard-DSh4o7TV.js";import{u as Y,C as g}from"./index-D3V9HCT9.js";import"./index-CRAfJtHw.js";import"./useFetchCourses-6JXWaEPH.js";import"./a11y-DXG1gNu_.js";import"./index-CzWTkLq1.js";import"./useRoles-DDEMO2vF.js";import"./questionnaire-CXWDgbJ4.js";import"./questionnaires-Cxt-bs_7.js";import"./useDownloadCertificate-1sW7Pfdb.js";import"./base-7gvCcPfx.js";import"./index-D0uBG2AL.js";const Z=(o=g.ALL)=>{var P,k;const{fetchMyAuthoredCourses:r,myAuthoredCourses:n,fetchPaginatedProgress:l,paginatedProgress:i}=p.useContext(D.EscolaLMSContext),[s,c]=p.useState([]),d=M(),{setQueryParam:m}=Y(),{search:w}=$(),x=new URLSearchParams(w),h=x.get("page"),j=x.get("status"),v=p.useMemo(()=>{var t,a;return o===g.AUTHORED?(t=n.list)==null?void 0:t.meta:(a=i.list)==null?void 0:a.meta},[o,(P=n.list)==null?void 0:P.meta,(k=i.list)==null?void 0:k.meta]),C=p.useCallback(t=>{let a="";switch(t){case 1:case 5:break;case 2:a="started";break;case 3:a="planned";break;case 4:a="finished";break}return a},[]);p.useEffect(()=>{l({page:h?parseInt(h):1,per_page:18,status:C(Number(j))}),(o===g.ALL||o===g.AUTHORED)&&r()},[l,o,r,h,j,C]);const T=p.useMemo(()=>{var t;return(((t=i.list)==null?void 0:t.data)||[]).reduce((a,u)=>({...a,[u.course.id?u.course.id:-1]:Math.round((u.progress||[]).reduce((S,U)=>U.status===1?S+1:S,0)/u.progress.length*100)}),{})},[i]),b=p.useCallback(t=>t.map(a=>({...a.course,courseData:a,progress:T[a.course.id?a.course.id:-1]})),[T]);return p.useEffect(()=>{var t,a,u,S;o!==g.AUTHORED?c(b(((t=i.list)==null?void 0:t.data)||[])):o===g.AUTHORED?c(((a=n.list)==null?void 0:a.data)||[]):c([...b(((u=i.list)==null?void 0:u.data)||[]),...((S=n.list)==null?void 0:S.data)||[]])},[o,i,n,b]),{coursesToMap:s,paginationMeta:v,loading:i.loading||n.loading,handlePagination:t=>{m("page",`${t}`),window==null||window.scrollTo(0,0)},redirectToCourses:()=>d.push(L.courses)}},V=E.div`
  position: relative;
`,ee=({titleText:o,slidesPerView:r=4})=>{const{coursesToMap:n,loading:l}=Z(),i=M();return n.length===0?null:e.jsxs(V,{children:[e.jsx("div",{className:"header-wrapper",children:e.jsx(B.Title,{className:"slider-title",level:1,as:"h2",children:e.jsx("strong",{children:o})})}),l&&e.jsx(_,{slidesPerView:r,children:Array.from({length:6}).map((s,c)=>e.jsx(R,{children:e.jsx(J,{})},c))}),!l&&n&&e.jsx(_,{slidesPerView:r,children:n.map(s=>{var c,d;return e.jsx(R,{children:e.jsx(O.NewCourseCard,{mobile:N,id:s.id,disabled:((c=s==null?void 0:s.courseData)==null?void 0:c.end_date)&&z(new Date((d=s==null?void 0:s.courseData)==null?void 0:d.end_date)),image:e.jsx(H,{to:`/courses/${s.id}`,children:s.image_path?e.jsx(A.ResponsiveImage,{path:s.image_path,alt:s.title,srcSizes:[300,600,900]}):e.jsx(K,{})}),title:e.jsx(H,{to:`/courses/${s.id}`,children:e.jsx(B.Title,{level:3,as:"h3",className:"title",children:s.title})}),categories:e.jsx(X,{categories:s.categories,onCategoryClick:m=>{i.push(`/courses/?categories[]=${m}`)}}),progress:s.progress&&s.progress!==100&&!isNaN(s.progress)?{currentProgress:s.progress,maxProgress:100}:void 0})},s.id)})})]})},se=E.div`
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
`,f=E(I)`
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
`,Te=()=>{var d,m,w,x,h,j,v,C,T;const{categoryTree:o,settings:r,fetchCategories:n,user:l}=p.useContext(D.EscolaLMSContext),i=M(),{t:s,i18n:c}=q();return p.useEffect(()=>{n()},[n]),e.jsx(W,{metaTitle:s("Home"),children:e.jsxs(se,{children:[e.jsx("section",{className:"home-hero",children:((d=r.value)==null?void 0:d.homepage)&&((m=r.value.homepage)==null?void 0:m.heroBannerText)&&((w=r.value.homepage)==null?void 0:w.heroBannerImg)&&((x=r.value.homepage)==null?void 0:x.heroBannerImg)!==""&&e.jsx(I,{children:e.jsx(Q.Banner,{mobile:N,title:e.jsx(F.MarkdownRenderer,{children:`<h1>${((h=r.value.homepage)==null?void 0:h.heroBannerText[c.language])||""}</h1>`}),btnText:s("Homepage.HeroBtnText"),asset:e.jsx(A.ResponsiveImage,{path:((v=(j=r==null?void 0:r.value)==null?void 0:j.homepage)==null?void 0:v.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:()=>i.push(L.courses)})})}),((C=l.value)==null?void 0:C.id)&&e.jsx("section",{className:"home-newest-courses",children:e.jsx(f,{children:e.jsx(ee,{titleText:s("Navbar.MyCourses")})})}),e.jsx("section",{className:"home-newest-courses",children:e.jsx(f,{children:e.jsx(y,{titleText:s("Homepage.CoursesSlider2Title"),params:{per_page:8,order_by:"created_at",order:"DESC"}})})}),e.jsx("section",{className:"home-best-courses",children:e.jsx(f,{children:e.jsx(y,{titleText:s("Homepage.CoursesSlider1Title"),params:{per_page:8}})})}),e.jsx("div",{className:"promoted-courses-wrapper",children:e.jsx(f,{children:e.jsx(y,{titleText:s("Homepage.AwardedCoursesTitle"),params:{per_page:8},isSlider:!!N,ctaButton:!0})})}),o&&e.jsx("div",{className:"categories-section-wrapper",children:e.jsx(G,{categories:((T=o.list)==null?void 0:T.filter(b=>!!b.icon))||[],entity:"courses"})})]})})};export{Te as default};

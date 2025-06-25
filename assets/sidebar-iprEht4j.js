import{r as i}from"./sentry-DZqhWugq.js";import{q as p,al as O,j as a,J as h,am as P,a9 as L,an as A,g as R,D as y,b as M,T as N,l as u,U as D,h as z,a as _,z as F,ao as T,X as U,ap as W,aq as $,o as C,ar as G,S as q,H as Q,C as V,L as S,as as B}from"./index-DHorRSia.js";import{a as H,b as X}from"./CourseCard-yQmPKytJ.js";import{Q as J,a as I}from"./questionnaire-CXWDgbJ4.js";import{P as Y}from"./index-DcaIG2pc.js";import{g as K}from"./questionnaires-rQ_WgpJv.js";import{D as Z}from"./index-B-n2w3x2.js";import{S as ee}from"./swiper-Bkq9vrtu.js";import{S as ae}from"./swiper-CphuuvCl.js";import{P as se}from"./index-DgDBwUqe.js";import{S as te}from"./index-B7vnVY_d.js";var ne=(e=>(e.BUYABLE="buyable",e.FREE="free",e.OFFER="offer",e.OWNED="owned",e))(ne||{});const $e=(e,t)=>i.useMemo(()=>{var s,r,n;return(s=e==null?void 0:e.product)!=null&&s.owned||Array.isArray(t)&&e&&t.includes(e.id)?"owned":(r=e==null?void 0:e.product)!=null&&r.purchasable?(n=e==null?void 0:e.product)!=null&&n.gross_price?"buyable":"free":"offer"},[e,t]),ke=p.div`
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
`,Oe=O`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`,Pe=({author:e})=>a.jsx(h.Col,{lg:6,children:a.jsx(P,{mobile:R,avatar:{alt:`${e.first_name} ${e.last_name}`,src:e.path_avatar?`${L}/api/images/img?path=${e.path_avatar}`:A.tutorPlaceholderPath},fullName:`${e.first_name} ${e.last_name}`,description:e.bio})});var d=(e=>(e.INIT="INIT",e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e))(d||{});const ie=p.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,Le=({courseData:e})=>{const{fetchQuestionnaireStarsByModel:t}=i.useContext(y.EscolaLMSContext),[s,r]=i.useState({type:d.INIT}),n=M(),c=i.useCallback(async()=>{if(e.id)try{r({type:d.LOADING});const l=await t("course",Number(e.id));l.success&&r({type:d.LOADED,rating:l.data})}catch(l){r({type:d.ERROR,error:l instanceof Error?l.message:"Unknown error"})}},[e.id,t]);return i.useEffect(()=>{c()},[e.id,c]),a.jsx("section",{className:"course-main-info",children:a.jsxs(h.Row,{children:[a.jsxs(h.Col,{lg:12,children:[a.jsx(H,{categories:e.categories,onCategoryClick:l=>{n.push(`/courses/?categories[]=${l}`)}}),a.jsx(N.Title,{mobile:R,level:1,children:e.title}),s.type===d.LOADED?a.jsxs(ie,{children:[a.jsx(u.Rating,{ratingValue:s.rating.avg_rate,label:`${s.rating.avg_rate}`}),a.jsx(u.Text,{size:"13",children:"Śr. ocena kursu"}),"・",a.jsx("div",{children:a.jsxs(u.Text,{size:"13",children:["Dodane opinie ",a.jsx("strong",{children:s.rating.count_answers})]})})]}):s.type===d.LOADING?a.jsx(D,{width:"20px",height:"20px"}):s.type===d.ERROR?s.error:null]}),a.jsx(h.Col,{lg:12,children:e.image_path&&a.jsx("div",{className:"image-wrapper",children:a.jsx(z.ResponsiveImage,{path:e.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},b={total:0,per_page:3,page:1,current_page:1},re=({questionId:e,courseId:t})=>{const[s,r]=i.useState(void 0),[n,c]=i.useState(b),[l,o]=i.useState(!0),{fetchQuestionnairesAnswers:x}=i.useContext(y.EscolaLMSContext),{t:f}=_(),g=i.useCallback(j=>{e&&t&&(o(!0),x(J.COURSE,Number(t),e,{per_page:n.per_page,page:j,order_by:"updated_at",order:"DESC"}).then(m=>{m.success&&(r(m.data),c(k=>({...k,total:m.meta.total,current_page:m.meta.current_page,page:m.meta.current_page})))}).catch(m=>{F(f("UnexpectedError"),m),console.log(m)}).finally(()=>o(!1)))},[n,x,t,e,f]),w=i.useCallback(j=>{c(m=>({...m,current_page:j}))},[]);return i.useEffect(()=>{n.page!==n.current_page&&g(n.current_page)},[n.current_page,n.page,g]),i.useEffect(()=>{c(b),g(b.page)},[e]),{answersMeta:n,questionnaireAnswers:s,loading:l,onPageChange:w}},oe=p(T)`
  justify-content: space-between;

  background: ${({theme:e})=>e.white};
`,le=p.div`
  .date {
    color: ${({theme:e})=>e.gray2};
    margin-bottom: 5px;
  }
`,ce=p.div`
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
`,xe=({name:e})=>{const t=()=>"#"+Math.floor(Math.random()*16777215).toString(16),s=e.charAt(0).toUpperCase();return a.jsx(ce,{style:{backgroundColor:t()},children:a.jsx(C.Text,{size:"18",children:s})})},me=({question:e})=>{const{user:t,note:s,updated_at:r}=e,n=U();return s?a.jsx(le,{children:a.jsx(oe,{children:a.jsxs(T,{$gap:19,children:[t.avatar?a.jsx(W.Avatar,{src:t.avatar,alt:`user-avatar-${t.name}`}):a.jsx(xe,{name:t.name}),a.jsxs($,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[a.jsx(C.Text,{noMargin:!0,color:n.gray2,className:"date",size:"13",children:G(r,A.defaultDateFormat)}),a.jsx(C.Text,{className:"note",size:"13",children:s})]})]})})}):null},pe=p($)`
  gap: 22px;
  margin: 16px auto;
`,de=p(N.Title)`
  margin-bottom: 16px;
`,ge=p.div`
  margin: 0 auto;
`,he=({courseId:e,questionId:t})=>{var o;const{answersMeta:s,loading:r,onPageChange:n,questionnaireAnswers:c}=re({questionId:t,courseId:e}),{t:l}=_();return a.jsx(pe,{children:r?a.jsx(q.Spin,{}):((o=c||[])==null?void 0:o.length)>0?a.jsxs(a.Fragment,{children:[a.jsx(de,{level:4,children:l("CoursePage.CourseRatingsTitle")}),(c||[]).map(x=>a.jsx(me,{question:x})),s.total>s.per_page&&a.jsx(ge,{children:a.jsx(Y,{total:s.total,perPage:s.per_page,currentPage:s.current_page,onPage:n})})]}):null})},E=()=>console.warn("INITIAL STATE"),v=i.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:E,questionId:null,setQuestionId:E,reviewId:void 0,courseId:void 0}),ue=({children:e,questionnaires:t})=>{var g;const[s,r]=i.useState(null),[n,c]=i.useState(null),{id:l}=Q(),o=t==null?void 0:t.at(0),x=(g=o==null?void 0:o.questions)==null?void 0:g.find(({type:w})=>w===I.RATE),f=K({questionnaires:t,questionnaireId:s,questionType:I.REVIEW});return i.useEffect(()=>{o!=null&&o.id&&!s&&r(o.id)},[o==null?void 0:o.id,s]),i.useEffect(()=>{x!=null&&x.id&&!n&&c(x.id)},[x==null?void 0:x.id,n]),a.jsx(v.Provider,{value:{questionnaires:t,questionnaireId:s,setQuestionnaireId:r,questionId:n,setQuestionId:c,reviewId:f,courseId:Number(l)},children:e})},fe=()=>{const e=i.useContext(v);if(!v)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return e},we=i.memo(()=>{const{courseId:e,reviewId:t}=fe();return a.jsx(a.Fragment,{children:e&&t&&a.jsx(he,{courseId:e,questionId:t})})}),Me=i.memo(({questionnaires:e})=>a.jsx(ue,{questionnaires:e,children:a.jsx("section",{className:"course-ratings",children:a.jsx(we,{})})})),je=p.section`
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
`,De=({relatedProducts:e})=>{const{t}=_();return a.jsx(je,{className:"course-related-courses",children:a.jsx(V,{children:a.jsx(h.Row,{children:a.jsxs(h.Col,{lg:12,children:[e&&(e==null?void 0:e.length)>0&&a.jsxs("div",{className:"content-container",children:[a.jsx(u.Title,{level:1,as:"h2",children:t("CoursePage.RelatedCoursesTitle")}),a.jsx(ee,{slidesPerView:4,children:e==null?void 0:e.map(s=>{var r;return a.jsx(ae,{children:a.jsx(u.NewCourseCard,{mobile:R,id:s==null?void 0:s.id,image:a.jsx(S,{to:`/courses/${(r=s==null?void 0:s.productables[0])==null?void 0:r.id}`,children:s!=null&&s.poster_path?a.jsx(B,{path:s==null?void 0:s.poster_path,alt:s==null?void 0:s.name,srcSizes:[300,600,900]}):a.jsx(X,{})}),price:item!=null&&item.public?a.jsx("div",{className:"course-price",children:t("FREE")}):a.jsx(se,{price:s==null?void 0:s.price,oldPrice:s==null?void 0:s.price_old,taxRate:s==null?void 0:s.tax_rate}),title:a.jsx(S,{to:`/courses/${s.id}`,children:a.jsx(u.Title,{level:3,as:"h3",className:"title",children:s==null?void 0:s.name})})})},s==null?void 0:s.id)})})]}),a.jsx("div",{className:"content-container",children:a.jsx(Z,{titleText:t("CoursePage.InterestTitle"),params:{per_page:8,order_by:"created_at",order:"ASC"},slidesPerView:4})})]})})})})},be=p.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`,ze=()=>a.jsx(be,{children:a.jsx(te,{width:"100%",height:350})});export{Le as C,ne as E,Oe as M,ke as S,ze as a,Pe as b,Me as c,De as d,$e as u};
//# sourceMappingURL=sidebar-iprEht4j.js.map

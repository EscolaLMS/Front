import{r as n,q as x,ap as O,j as a,V as u,aq as P,o as R,ar as L,as as A,N as y,k as M,T as N,n as h,a0 as D,s as z,h as _,J as F,at as T,X as W,au as G,av as $,y as C,aw as Q,S as U,Q as q,C as V,L as S,ax as B}from"./index-BQrbGMsV.js";import{b as X,a as H}from"./CourseCard-DXvDCj1X.js";import{Q as J,a as I}from"./questionnaire-CXWDgbJ4.js";import{P as Y}from"./index-B4CEcJxn.js";import{g as K}from"./questionnaires-BjiS7INt.js";import{D as Z}from"./index-BuCP7T1g.js";import{S as ee}from"./swiper-CRdIFvpz.js";import{S as ae}from"./swiper-react-CMzPwu3A.js";import{P as te}from"./index-DonXk0zg.js";import{S as se}from"./index-L_QnKtxY.js";var re=(e=>(e.BUYABLE="buyable",e.FREE="free",e.OFFER="offer",e.OWNED="owned",e))(re||{});const Te=(e,s)=>n.useMemo(()=>{var t,i,r;return(t=e==null?void 0:e.product)!=null&&t.owned||Array.isArray(s)&&e&&s.includes(e.id)?"owned":(i=e==null?void 0:e.product)!=null&&i.purchasable?(r=e==null?void 0:e.product)!=null&&r.gross_price?"buyable":"free":"offer"},[e,s]),$e=x.div`
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
`,ke=O`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`,Oe=({author:e})=>a.jsx(u.Col,{lg:6,children:a.jsx(P,{mobile:R,avatar:{alt:`${e.first_name} ${e.last_name}`,src:e.path_avatar?`${L}/api/images/img?path=${e.path_avatar}`:A.tutorPlaceholderPath},fullName:`${e.first_name} ${e.last_name}`,description:e.bio})});var m=(e=>(e.INIT="INIT",e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e))(m||{});const ne=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,Pe=({courseData:e})=>{const{fetchQuestionnaireStarsByModel:s}=n.useContext(y.EscolaLMSContext),[t,i]=n.useState({type:m.INIT}),r=M(),c=n.useCallback(async()=>{if(e.id)try{i({type:m.LOADING});const l=await s("course",Number(e.id));l.success&&i({type:m.LOADED,rating:l.data})}catch(l){i({type:m.ERROR,error:l instanceof Error?l.message:"Unknown error"})}},[e.id,s]);return n.useEffect(()=>{c()},[e.id,c]),a.jsx("section",{className:"course-main-info",children:a.jsxs(u.Row,{children:[a.jsxs(u.Col,{lg:12,children:[a.jsx(X,{categories:e.categories,onCategoryClick:l=>{r.push(`/courses/?categories[]=${l}`)}}),a.jsx(N.Title,{mobile:R,level:1,children:e.title}),t.type===m.LOADED?a.jsxs(ne,{children:[a.jsx(h.Rating,{ratingValue:t.rating.avg_rate,label:`${t.rating.avg_rate}`}),a.jsx(h.Text,{size:"13",children:"Śr. ocena kursu"}),"・",a.jsx("div",{children:a.jsxs(h.Text,{size:"13",children:["Dodane opinie ",a.jsx("strong",{children:t.rating.count_answers})]})})]}):t.type===m.LOADING?a.jsx(D,{width:"20px",height:"20px"}):t.type===m.ERROR?t.error:null]}),a.jsx(u.Col,{lg:12,children:e.image_path&&a.jsx("div",{className:"image-wrapper",children:a.jsx(z.ResponsiveImage,{path:e.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},b={total:0,per_page:3,page:1,current_page:1},ie=({questionId:e,courseId:s})=>{const[t,i]=n.useState(void 0),[r,c]=n.useState(b),[l,o]=n.useState(!0),{fetchQuestionnairesAnswers:p}=n.useContext(y.EscolaLMSContext),{t:f}=_(),g=n.useCallback(j=>{e&&s&&(o(!0),p(J.COURSE,Number(s),e,{per_page:r.per_page,page:j,order_by:"updated_at",order:"DESC"}).then(d=>{d.success&&(i(d.data),c(k=>({...k,total:d.meta.total,current_page:d.meta.current_page,page:d.meta.current_page})))}).catch(d=>{F(f("UnexpectedError"),d),console.log(d)}).finally(()=>o(!1)))},[r,p,s,e,f]),w=n.useCallback(j=>{c(d=>({...d,current_page:j}))},[]);return n.useEffect(()=>{r.page!==r.current_page&&g(r.current_page)},[r.current_page,r.page,g]),n.useEffect(()=>{c(b),g(b.page)},[e]),{answersMeta:r,questionnaireAnswers:t,loading:l,onPageChange:w}},oe=x(T)`
  justify-content: space-between;

  background: ${({theme:e})=>e.white};
`,le=x.div`
  .date {
    color: ${({theme:e})=>e.gray2};
    margin-bottom: 5px;
  }
`,ce=x.div`
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
`,pe=({name:e})=>{const s=()=>"#"+Math.floor(Math.random()*16777215).toString(16),t=e.charAt(0).toUpperCase();return a.jsx(ce,{style:{backgroundColor:s()},children:a.jsx(C.Text,{size:"18",children:t})})},de=({question:e})=>{const{user:s,note:t,updated_at:i}=e,r=W();return t?a.jsx(le,{children:a.jsx(oe,{children:a.jsxs(T,{$gap:19,children:[s.avatar?a.jsx(G.Avatar,{src:s.avatar,alt:`user-avatar-${s.name}`}):a.jsx(pe,{name:s.name}),a.jsxs($,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[a.jsx(C.Text,{noMargin:!0,color:r.gray2,className:"date",size:"13",children:Q(i,A.defaultDateFormat)}),a.jsx(C.Text,{className:"note",size:"13",children:t})]})]})})}):null},xe=x($)`
  gap: 22px;
  margin: 16px auto;
`,me=x(N.Title)`
  margin-bottom: 16px;
`,ge=x.div`
  margin: 0 auto;
`,ue=({courseId:e,questionId:s})=>{var o;const{answersMeta:t,loading:i,onPageChange:r,questionnaireAnswers:c}=ie({questionId:s,courseId:e}),{t:l}=_();return a.jsx(xe,{children:i?a.jsx(U.Spin,{}):((o=c||[])==null?void 0:o.length)>0?a.jsxs(a.Fragment,{children:[a.jsx(me,{level:4,children:l("CoursePage.CourseRatingsTitle")}),(c||[]).map(p=>a.jsx(de,{question:p})),t.total>t.per_page&&a.jsx(ge,{children:a.jsx(Y,{total:t.total,perPage:t.per_page,currentPage:t.current_page,onPage:r})})]}):null})},E=()=>console.warn("INITIAL STATE"),v=n.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:E,questionId:null,setQuestionId:E,reviewId:void 0,courseId:void 0}),he=({children:e,questionnaires:s})=>{var g;const[t,i]=n.useState(null),[r,c]=n.useState(null),{id:l}=q(),o=s==null?void 0:s.at(0),p=(g=o==null?void 0:o.questions)==null?void 0:g.find(({type:w})=>w===I.RATE),f=K({questionnaires:s,questionnaireId:t,questionType:I.REVIEW});return n.useEffect(()=>{o!=null&&o.id&&!t&&i(o.id)},[o==null?void 0:o.id,t]),n.useEffect(()=>{p!=null&&p.id&&!r&&c(p.id)},[p==null?void 0:p.id,r]),a.jsx(v.Provider,{value:{questionnaires:s,questionnaireId:t,setQuestionnaireId:i,questionId:r,setQuestionId:c,reviewId:f,courseId:Number(l)},children:e})},fe=()=>{const e=n.useContext(v);if(!v)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return e},we=n.memo(()=>{const{courseId:e,reviewId:s}=fe();return a.jsx(a.Fragment,{children:e&&s&&a.jsx(ue,{courseId:e,questionId:s})})}),Le=n.memo(({questionnaires:e})=>a.jsx(he,{questionnaires:e,children:a.jsx("section",{className:"course-ratings",children:a.jsx(we,{})})})),je=x.section`
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
`,Me=({relatedProducts:e})=>{const{t:s}=_();return a.jsx(je,{className:"course-related-courses",children:a.jsx(V,{children:a.jsx(u.Row,{children:a.jsxs(u.Col,{lg:12,children:[e&&(e==null?void 0:e.length)>0&&a.jsxs("div",{className:"content-container",children:[a.jsx(h.Title,{level:1,as:"h2",children:s("CoursePage.RelatedCoursesTitle")}),a.jsx(ee,{slidesPerView:4,children:e==null?void 0:e.map(t=>{var i;return a.jsx(ae,{children:a.jsx(h.NewCourseCard,{mobile:R,id:t.id,image:a.jsx(S,{to:`/courses/${(i=t==null?void 0:t.productables[0])==null?void 0:i.id}`,children:t.poster_path?a.jsx(B,{path:t.poster_path,alt:t.name,srcSizes:[300,600,900]}):a.jsx(H,{})}),price:item.public?a.jsx("div",{className:"course-price",children:s("FREE")}):a.jsx(te,{price:t==null?void 0:t.price,oldPrice:t==null?void 0:t.price_old,taxRate:t==null?void 0:t.tax_rate}),title:a.jsx(S,{to:`/courses/${t.id}`,children:a.jsx(h.Title,{level:3,as:"h3",className:"title",children:t.name})})})},t.id)})})]}),a.jsx("div",{className:"content-container",children:a.jsx(Z,{titleText:s("CoursePage.InterestTitle"),params:{per_page:8,order_by:"created_at",order:"ASC"},slidesPerView:4})})]})})})})},be=x.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`,De=()=>a.jsx(be,{children:a.jsx(se,{width:"100%",height:350})});export{Pe as C,re as E,ke as M,$e as S,De as a,Oe as b,Le as c,Me as d,Te as u};

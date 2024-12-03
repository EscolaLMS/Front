import{q as d,aq as P,j as t,V as u,ar as L,o as y,as as O,at as A,r as i,N as E,k as M,T,n as h,a0 as z,s as D,h as R,J as F,au as N,X as G,av as Q,aw as $,y as b,ax as W,S as q,Q as U,C as V,L as _,ay as B}from"./index-DSCUWzSv.js";import{b as X,a as H}from"./CourseCard-lCEjaTYC.js";import{Q as J,a as S}from"./questionnaire-CXWDgbJ4.js";import{P as K}from"./index-w-Z9NoFv.js";import{g as Y}from"./questionnaires-De7YnJrd.js";import{D as Z}from"./index-DOjDNS20.js";import{S as ee}from"./swiper-DpuCcnoW.js";import{S as te}from"./swiper-react-ft3sPPqI.js";import{P as ae}from"./index-BE9PI57n.js";import{S as se}from"./index-C483pC0F.js";const Te=d.div`
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
`,Ne=P`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`,$e=({author:e})=>t.jsx(u.Col,{lg:6,children:t.jsx(L,{mobile:y,avatar:{alt:`${e.first_name} ${e.last_name}`,src:e.path_avatar?`${O}/api/images/img?path=${e.path_avatar}`:A.tutorPlaceholderPath},fullName:`${e.first_name} ${e.last_name}`,description:e.bio})});var m=(e=>(e.INIT="INIT",e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e))(m||{});const ie=d.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`,ke=({courseData:e})=>{const{fetchQuestionnaireStarsByModel:s}=i.useContext(E.EscolaLMSContext),[a,o]=i.useState({type:m.INIT}),n=M(),c=i.useCallback(async()=>{if(e.id)try{o({type:m.LOADING});const l=await s("course",Number(e.id));l.success&&o({type:m.LOADED,rating:l.data})}catch(l){o({type:m.ERROR,error:l instanceof Error?l.message:"Unknown error"})}},[e.id,s]);return i.useEffect(()=>{c()},[e.id,c]),t.jsx("section",{className:"course-main-info",children:t.jsxs(u.Row,{children:[t.jsxs(u.Col,{lg:12,children:[t.jsx(X,{categories:e.categories,onCategoryClick:l=>{n.push(`/courses/?categories[]=${l}`)}}),t.jsx(T.Title,{mobile:y,level:1,children:e.title}),a.type===m.LOADED?t.jsxs(ie,{children:[t.jsx(h.Rating,{ratingValue:a.rating.avg_rate,label:`${a.rating.avg_rate}`}),t.jsx(h.Text,{size:"13",children:"Śr. ocena kursu"}),"・",t.jsx("div",{children:t.jsxs(h.Text,{size:"13",children:["Dodane opinie ",t.jsx("strong",{children:a.rating.count_answers})]})})]}):a.type===m.LOADING?t.jsx(z,{width:"20px",height:"20px"}):a.type===m.ERROR?a.error:null]}),t.jsx(u.Col,{lg:12,children:e.image_path&&t.jsx("div",{className:"image-wrapper",children:t.jsx(D.ResponsiveImage,{path:e.image_path,srcSizes:[790*.5,790,2*790]})})})]})})},C={total:0,per_page:3,page:1,current_page:1},ne=({questionId:e,courseId:s})=>{const[a,o]=i.useState(void 0),[n,c]=i.useState(C),[l,r]=i.useState(!0),{fetchQuestionnairesAnswers:p}=i.useContext(E.EscolaLMSContext),{t:j}=R(),g=i.useCallback(f=>{e&&s&&(r(!0),p(J.COURSE,Number(s),e,{per_page:n.per_page,page:f,order_by:"updated_at",order:"DESC"}).then(x=>{x.success&&(o(x.data),c(k=>({...k,total:x.meta.total,current_page:x.meta.current_page,page:x.meta.current_page})))}).catch(x=>{F(j("UnexpectedError"),x),console.log(x)}).finally(()=>r(!1)))},[n,p,s,e,j]),w=i.useCallback(f=>{c(x=>({...x,current_page:f}))},[]);return i.useEffect(()=>{n.page!==n.current_page&&g(n.current_page)},[n.current_page,n.page,g]),i.useEffect(()=>{c(C),g(C.page)},[e]),{answersMeta:n,questionnaireAnswers:a,loading:l,onPageChange:w}},re=d(N)`
  justify-content: space-between;

  background: ${({theme:e})=>e.white};
`,oe=d.div`
  .date {
    color: ${({theme:e})=>e.gray2};
    margin-bottom: 5px;
  }
`,le=d.div`
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
`,ce=({name:e})=>{const s=()=>"#"+Math.floor(Math.random()*16777215).toString(16),a=e.charAt(0).toUpperCase();return t.jsx(le,{style:{backgroundColor:s()},children:t.jsx(b.Text,{size:"18",children:a})})},pe=({question:e})=>{const{user:s,note:a,updated_at:o}=e,n=G();return a?t.jsx(oe,{children:t.jsx(re,{children:t.jsxs(N,{$gap:19,children:[s.avatar?t.jsx(Q.Avatar,{src:s.avatar,alt:`user-avatar-${s.name}`}):t.jsx(ce,{name:s.name}),t.jsxs($,{$justifyContent:"flex-start",$alignItems:"flex-start",children:[t.jsx(b.Text,{noMargin:!0,color:n.gray2,className:"date",size:"13",children:W(o,A.defaultDateFormat)}),t.jsx(b.Text,{className:"note",size:"13",children:a})]})]})})}):null},xe=d($)`
  gap: 22px;
  margin: 16px auto;
`,de=d(T.Title)`
  margin-bottom: 16px;
`,me=d.div`
  margin: 0 auto;
`,ge=({courseId:e,questionId:s})=>{var r;const{answersMeta:a,loading:o,onPageChange:n,questionnaireAnswers:c}=ne({questionId:s,courseId:e}),{t:l}=R();return t.jsx(xe,{children:o?t.jsx(q.Spin,{}):((r=c||[])==null?void 0:r.length)>0?t.jsxs(t.Fragment,{children:[t.jsx(de,{level:4,children:l("CoursePage.CourseRatingsTitle")}),(c||[]).map(p=>t.jsx(pe,{question:p})),a.total>a.per_page&&t.jsx(me,{children:t.jsx(K,{total:a.total,perPage:a.per_page,currentPage:a.current_page,onPage:n})})]}):null})},I=()=>console.warn("INITIAL STATE"),v=i.createContext({questionnaires:[],questionnaireId:null,setQuestionnaireId:I,questionId:null,setQuestionId:I,reviewId:void 0,courseId:void 0}),ue=({children:e,questionnaires:s})=>{var g;const[a,o]=i.useState(null),[n,c]=i.useState(null),{id:l}=U(),r=s==null?void 0:s.at(0),p=(g=r==null?void 0:r.questions)==null?void 0:g.find(({type:w})=>w===S.RATE),j=Y({questionnaires:s,questionnaireId:a,questionType:S.REVIEW});return i.useEffect(()=>{r!=null&&r.id&&!a&&o(r.id)},[r==null?void 0:r.id,a]),i.useEffect(()=>{p!=null&&p.id&&!n&&c(p.id)},[p==null?void 0:p.id,n]),t.jsx(v.Provider,{value:{questionnaires:s,questionnaireId:a,setQuestionnaireId:o,questionId:n,setQuestionId:c,reviewId:j,courseId:Number(l)},children:e})},he=()=>{const e=i.useContext(v);if(!v)throw new Error("useCourseRatingContext must be used inside the CourseRatingProvider");return e},je=i.memo(()=>{const{courseId:e,reviewId:s}=he();return t.jsx(t.Fragment,{children:e&&s&&t.jsx(ge,{courseId:e,questionId:s})})}),Pe=i.memo(({questionnaires:e})=>t.jsx(ue,{questionnaires:e,children:t.jsx("section",{className:"course-ratings",children:t.jsx(je,{})})})),we=d.section`
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
`,Le=({relatedProducts:e})=>{const{t:s}=R();return t.jsx(we,{className:"course-related-courses",children:t.jsx(V,{children:t.jsx(u.Row,{children:t.jsxs(u.Col,{lg:12,children:[e&&(e==null?void 0:e.length)>0&&t.jsxs("div",{className:"content-container",children:[t.jsx(h.Title,{level:1,as:"h2",children:s("CoursePage.RelatedCoursesTitle")}),t.jsx(ee,{slidesPerView:4,children:e==null?void 0:e.map(a=>{var o;return t.jsx(te,{children:t.jsx(h.NewCourseCard,{mobile:y,id:a.id,image:t.jsx(_,{to:`/courses/${(o=a==null?void 0:a.productables[0])==null?void 0:o.id}`,children:a.poster_path?t.jsx(B,{path:a.poster_path,alt:a.name,srcSizes:[300,600,900]}):t.jsx(H,{})}),price:item.public?t.jsx("div",{className:"course-price",children:s("FREE")}):t.jsx(ae,{price:a==null?void 0:a.price,oldPrice:a==null?void 0:a.price_old,taxRate:a==null?void 0:a.tax_rate}),title:t.jsx(_,{to:`/courses/${a.id}`,children:t.jsx(h.Title,{level:3,as:"h3",className:"title",children:a.name})})})},a.id)})})]}),t.jsx("div",{className:"content-container",children:t.jsx(Z,{titleText:s("CoursePage.InterestTitle"),params:{per_page:8,order_by:"created_at",order:"ASC"},slidesPerView:4})})]})})})})},fe=d.div`
  .react-loading-skeleton {
    border-radius: 10px;
  }
`,Oe=()=>t.jsx(fe,{children:t.jsx(se,{width:"100%",height:350})});export{ke as C,Ne as M,Te as S,Oe as a,$e as b,Pe as c,Le as d};

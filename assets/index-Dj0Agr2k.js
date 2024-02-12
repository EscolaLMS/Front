import{q as b,E as $,f as y,r as C,k as w,X as N,m as P,j as s,L as E,C as R,v as a,o as v,G as l,i,T as x,M as k,l as n,n as I,U as L,J as S}from"./index-DaafzRP_.js";import{P as B}from"./index-DBq-nsKT.js";import{R as M}from"./ResponsiveImage-BWLsb9wG.js";import{C as z}from"./index-DfiAQn97.js";import{B as F}from"./index-DVPhWZqb.js";import{C as q}from"./index-DmeYF39A.js";import{C as A}from"./index-D6Quq3aY.js";import{T as G}from"./index-4Hra2YYq.js";import{C as H}from"./index-XxUfqVTU.js";import{A as U}from"./app-B2E7767C.js";const X=b.section`
  .tutor-avatar {
    width: 100%;
    max-width: 100%;
  }
  .tutor-courses {
    margin-top: 120px;
    @media (max-width: 991px) {
      margin-top: 60px;
    }
    .slick-dots {
      @media (max-width: 991px) {
        display: none !important;
      }
    }
  }
  .content {
    @media (max-width: 991px) {
      margin-top: 50px;
    }
  }
`,es=()=>{var h,m,j,p,g;const{id:c}=$(),{t:r}=y(),{tutor:t,fetchTutor:T,courses:o,fetchCourses:f}=C.useContext(w.EscolaLMSContext),_=N(),d=P();return C.useEffect(()=>{T(Number(c)),f({"authors[]":[Number(c)]})},[c]),s.jsxs(E,{children:[s.jsx(X,{children:s.jsxs(R,{children:[s.jsx(F,{items:[s.jsx(a,{to:v.home,children:r("Home")}),s.jsx(a,{to:v.tutors,children:r("Tutors")}),s.jsx(l.Text,{size:"12",children:`${((h=t.value)==null?void 0:h.first_name)||""} ${((m=t.value)==null?void 0:m.last_name)||""}`})]}),t.value&&s.jsx("div",{className:"profile-box",children:s.jsxs(i.Row,{align:"start",children:[s.jsx(i.Col,{lg:3,children:s.jsx("div",{className:"image",children:t.value.path_avatar?s.jsx(M.ResponsiveImage,{path:t.value.path_avatar,srcSizes:[355,355*2]}):s.jsx("img",{className:"tutor-avatar",src:U.tutorPlaceholderPath,alt:"Tutor avatar"})})}),s.jsx(i.Col,{lg:8,children:s.jsxs("div",{className:"content",children:[s.jsxs(x.Title,{level:3,children:[t.value.first_name," ",t.value.last_name]}),s.jsx(l.Text,{children:r("Tutor")}),s.jsx("div",{children:s.jsx(k.MarkdownRenderer,{children:t.value.bio||""})})]})})]})}),s.jsxs("div",{className:"tutor-courses",children:[s.jsx(x.Title,{style:{marginBottom:20},level:3,children:r("TutorPage.Courses")}),o.list&&((j=o.list.data)==null?void 0:j.length)===0?s.jsx(l.Text,{children:r("TutorCoursesEmpty")}):o.list&&((p=o.list.data)==null?void 0:p.length)>4?s.jsx(z,{courses:((g=o.list)==null?void 0:g.data)||[]}):s.jsx(i.Row,{children:o.list&&o.list.data.map(e=>s.jsx(i.Col,{md:6,lg:3,children:s.jsx(A,{children:s.jsx(n.CourseCard,{mobile:I,id:e.id,image:s.jsx(a,{to:`/courses/${e.id}`,children:e.image_url?s.jsx("img",{src:e.image_url,alt:e.title}):s.jsx(q,{})}),tags:s.jsx(G,{tags:e.tags,onTagClick:u=>d.push(`/courses/?tag=${u}`)}),subtitle:e.subtitle?s.jsx(l.Text,{size:"12",children:s.jsx(a,{style:{color:_.primaryColor},to:`/courses/${e.id}`,children:s.jsx("strong",{children:e.subtitle})})}):void 0,title:s.jsx(a,{to:`/courses/${e.id}`,className:"title",children:s.jsx(x.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(H,{categories:e.categories,onCategoryClick:u=>{d.push(`/courses/?categories[]=${u}`)}}),actions:s.jsx(s.Fragment,{children:s.jsx(n.Button,{mode:"secondary",onClick:()=>d.push(`/courses/${e.id}`),children:r("StartNow")})}),footer:s.jsxs(s.Fragment,{children:[e.users_count&&e.users_count>0?s.jsx(n.IconText,{icon:s.jsx(L,{}),text:`${e.users_count} ${r("Students")}`}):""," ",e.lessons_count&&e.lessons_count>0?s.jsx(n.IconText,{icon:s.jsx(S,{}),text:`${e.lessons_count} ${r("Lessons")}`}):""]})})})},e.id))})]})]})}),t.loading&&s.jsx(B,{})]})};export{es as default};

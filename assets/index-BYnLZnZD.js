import{q as b,H as $,f as w,r as g,l as y,X as N,i as P,j as s,L as I,m as R,w as a,k as C,v as l,h as i,T as u,M as k,J as B,o as E,B as L,N as v,U as S,O as M}from"./index-BTvwz0L3.js";import{P as z}from"./index-Dr14e7t8.js";import{R as F}from"./ResponsiveImage-G_l4wTjD.js";import{C as H}from"./index-MGoobGEV.js";import{B as q}from"./index-hgCH-7gi.js";import{C as A}from"./index-ClhuH08r.js";import{C as O}from"./index-eMEuee3m.js";import{T as U}from"./index-WJvgSzYs.js";import{C as X}from"./index-BHYkv3Er.js";import{A as G}from"./app-B2E7767C.js";import"./swiper-react-BSSPoOCY.js";const J=b.section`
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
`,os=()=>{var x,h,m,j,p;const{id:n}=$(),{t:r}=w(),{tutor:t,fetchTutor:T,courses:o,fetchCourses:f}=g.useContext(y.EscolaLMSContext),_=N(),c=P();return g.useEffect(()=>{T(Number(n)),f({"authors[]":[Number(n)]})},[n]),s.jsxs(I,{children:[s.jsx(J,{children:s.jsxs(R,{children:[s.jsx(q,{items:[s.jsx(a,{to:C.home,children:r("Home")}),s.jsx(a,{to:C.tutors,children:r("Tutors")}),s.jsx(l.Text,{size:"12",children:`${((x=t.value)==null?void 0:x.first_name)||""} ${((h=t.value)==null?void 0:h.last_name)||""}`})]}),t.value&&s.jsx("div",{className:"profile-box",children:s.jsxs(i.Row,{align:"start",children:[s.jsx(i.Col,{lg:3,children:s.jsx("div",{className:"image",children:t.value.path_avatar?s.jsx(F.ResponsiveImage,{path:t.value.path_avatar,srcSizes:[355,355*2]}):s.jsx("img",{className:"tutor-avatar",src:G.tutorPlaceholderPath,alt:"Tutor avatar"})})}),s.jsx(i.Col,{lg:8,children:s.jsxs("div",{className:"content",children:[s.jsxs(u.Title,{level:3,children:[t.value.first_name," ",t.value.last_name]}),s.jsx(l.Text,{children:r("Tutor")}),s.jsx("div",{children:s.jsx(k.MarkdownRenderer,{children:t.value.bio||""})})]})})]})}),s.jsxs("div",{className:"tutor-courses",children:[s.jsx(u.Title,{style:{marginBottom:20},level:3,children:r("TutorPage.Courses")}),o.list&&((m=o.list.data)==null?void 0:m.length)===0?s.jsx(l.Text,{children:r("TutorCoursesEmpty")}):o.list&&((j=o.list.data)==null?void 0:j.length)>4?s.jsx(H,{courses:((p=o.list)==null?void 0:p.data)||[]}):s.jsx(i.Row,{children:o.list&&o.list.data.map(e=>s.jsx(i.Col,{md:6,lg:3,children:s.jsx(O,{children:s.jsx(B,{mobile:E,id:e.id,image:s.jsx(a,{to:`/courses/${e.id}`,children:e.image_url?s.jsx("img",{src:e.image_url,alt:e.title}):s.jsx(A,{})}),tags:s.jsx(U,{tags:e.tags,onTagClick:d=>c.push(`/courses/?tag=${d}`)}),subtitle:e.subtitle?s.jsx(l.Text,{size:"12",children:s.jsx(a,{style:{color:_.primaryColor},to:`/courses/${e.id}`,children:s.jsx("strong",{children:e.subtitle})})}):void 0,title:s.jsx(a,{to:`/courses/${e.id}`,className:"title",children:s.jsx(u.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(X,{categories:e.categories,onCategoryClick:d=>{c.push(`/courses/?categories[]=${d}`)}}),actions:s.jsx(s.Fragment,{children:s.jsx(L.Button,{mode:"secondary",onClick:()=>c.push(`/courses/${e.id}`),children:r("StartNow")})}),footer:s.jsxs(s.Fragment,{children:[e.users_count&&e.users_count>0?s.jsx(v.IconText,{icon:s.jsx(S,{}),text:`${e.users_count} ${r("Students")}`}):""," ",e.lessons_count&&e.lessons_count>0?s.jsx(v.IconText,{icon:s.jsx(M,{}),text:`${e.lessons_count} ${r("Lessons")}`}):""]})})})},e.id))})]})]})}),t.loading&&s.jsx(z,{})]})};export{os as default};

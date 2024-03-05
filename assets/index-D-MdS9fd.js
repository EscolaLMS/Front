import{q as b,H as $,f as w,r as g,h as y,X as N,i as P,j as s,o as I,C as R,L as a,l as C,s as l,w as i,N as k,T as u,M as E,J as B,n as L,v as S,O as v,U as M,Q as z}from"./index-BrnsqxCr.js";import{P as F}from"./index-CsT2ZWt5.js";import{R as H}from"./ResponsiveImage-Cy_iuZ6S.js";import{C as q}from"./index-D3HdPfzJ.js";import{B as O}from"./index-Daa_jL_h.js";import{C as U}from"./index-D6Vr4FBf.js";import{C as X}from"./index-Cw-ZecKL.js";import{T as A}from"./index-CQOyv8Aw.js";import{C as G}from"./index-Be7kF9a5.js";import"./swiper-react-DvG64NmY.js";import"./index-DrjLV46P.js";import"./swiper-BMWfnofJ.js";const J=b.section`
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
`,as=()=>{var x,h,m,j,p;const{id:n}=$(),{t:r}=w(),{tutor:t,fetchTutor:T,courses:o,fetchCourses:f}=g.useContext(y.EscolaLMSContext),_=N(),c=P();return g.useEffect(()=>{T(Number(n)),f({"authors[]":[Number(n)]})},[n]),s.jsxs(I,{children:[s.jsx(J,{children:s.jsxs(R,{children:[s.jsx(O,{items:[s.jsx(a,{to:C.home,children:r("Home")}),s.jsx(a,{to:C.tutors,children:r("Tutors")}),s.jsx(l.Text,{size:"12",children:`${((x=t.value)==null?void 0:x.first_name)||""} ${((h=t.value)==null?void 0:h.last_name)||""}`})]}),t.value&&s.jsx("div",{className:"profile-box",children:s.jsxs(i.Row,{align:"start",children:[s.jsx(i.Col,{lg:3,children:s.jsx("div",{className:"image",children:t.value.path_avatar?s.jsx(H.ResponsiveImage,{path:t.value.path_avatar,srcSizes:[355,355*2]}):s.jsx("img",{className:"tutor-avatar",src:k.tutorPlaceholderPath,alt:"Tutor avatar"})})}),s.jsx(i.Col,{lg:8,children:s.jsxs("div",{className:"content",children:[s.jsxs(u.Title,{level:3,children:[t.value.first_name," ",t.value.last_name]}),s.jsx(l.Text,{children:r("Tutor")}),s.jsx("div",{children:s.jsx(E.MarkdownRenderer,{children:t.value.bio||""})})]})})]})}),s.jsxs("div",{className:"tutor-courses",children:[s.jsx(u.Title,{style:{marginBottom:20},level:3,children:r("TutorPage.Courses")}),o.list&&((m=o.list.data)==null?void 0:m.length)===0?s.jsx(l.Text,{children:r("TutorCoursesEmpty")}):o.list&&((j=o.list.data)==null?void 0:j.length)>4?s.jsx(q,{courses:((p=o.list)==null?void 0:p.data)||[]}):s.jsx(i.Row,{children:o.list&&o.list.data.map(e=>s.jsx(i.Col,{md:6,lg:3,children:s.jsx(X,{children:s.jsx(B,{mobile:L,id:e.id,image:s.jsx(a,{to:`/courses/${e.id}`,children:e.image_url?s.jsx("img",{src:e.image_url,alt:e.title}):s.jsx(U,{})}),tags:s.jsx(A,{tags:e.tags,onTagClick:d=>c.push(`/courses/?tag=${d}`)}),subtitle:e.subtitle?s.jsx(l.Text,{size:"12",children:s.jsx(a,{style:{color:_.primaryColor},to:`/courses/${e.id}`,children:s.jsx("strong",{children:e.subtitle})})}):void 0,title:s.jsx(a,{to:`/courses/${e.id}`,className:"title",children:s.jsx(u.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(G,{categories:e.categories,onCategoryClick:d=>{c.push(`/courses/?categories[]=${d}`)}}),actions:s.jsx(s.Fragment,{children:s.jsx(S.Button,{mode:"secondary",onClick:()=>c.push(`/courses/${e.id}`),children:r("StartNow")})}),footer:s.jsxs(s.Fragment,{children:[e.users_count&&e.users_count>0?s.jsx(v.IconText,{icon:s.jsx(M,{}),text:`${e.users_count} ${r("Students")}`}):""," ",e.lessons_count&&e.lessons_count>0?s.jsx(v.IconText,{icon:s.jsx(z,{}),text:`${e.lessons_count} ${r("Lessons")}`}):""]})})})},e.id))})]})]})}),t.loading&&s.jsx(F,{})]})};export{as as default};

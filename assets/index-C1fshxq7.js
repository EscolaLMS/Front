import{q as b,G as $,f as y,r as g,h as N,X as w,i as I,j as s,L as P,C as R,v as a,l as C,T as l,s as i,K as k,o as u,M as E,I as B,k as L,p as S,N as v,U as M,O as z}from"./index-OGDo-hkl.js";import{P as F}from"./index-u1_N4rpW.js";import{R as q}from"./ResponsiveImage-dgTLmURN.js";import{C as G}from"./index-DF8CFjlI.js";import{B as H}from"./index-ygSpdREt.js";import{C as O}from"./index-CkkSfJi5.js";import{C as U}from"./index-CeZDp3Rj.js";import{T as X}from"./index-Cb7SBqEa.js";import{C as A}from"./index-DeyRTtVF.js";import"./swiper-react-LoObXzUJ.js";import"./index-BAF1aJt1.js";const K=b.section`
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
`,os=()=>{var x,h,m,j,p;const{id:n}=$(),{t:r}=y(),{tutor:t,fetchTutor:T,courses:o,fetchCourses:f}=g.useContext(N.EscolaLMSContext),_=w(),c=I();return g.useEffect(()=>{T(Number(n)),f({"authors[]":[Number(n)]})},[n]),s.jsxs(P,{children:[s.jsx(K,{children:s.jsxs(R,{children:[s.jsx(H,{items:[s.jsx(a,{to:C.home,children:r("Home")}),s.jsx(a,{to:C.tutors,children:r("Tutors")}),s.jsx(l.Text,{size:"12",children:`${((x=t.value)==null?void 0:x.first_name)||""} ${((h=t.value)==null?void 0:h.last_name)||""}`})]}),t.value&&s.jsx("div",{className:"profile-box",children:s.jsxs(i.Row,{align:"start",children:[s.jsx(i.Col,{lg:3,children:s.jsx("div",{className:"image",children:t.value.path_avatar?s.jsx(q.ResponsiveImage,{path:t.value.path_avatar,srcSizes:[355,355*2]}):s.jsx("img",{className:"tutor-avatar",src:k.tutorPlaceholderPath,alt:"Tutor avatar"})})}),s.jsx(i.Col,{lg:8,children:s.jsxs("div",{className:"content",children:[s.jsxs(u.Title,{level:3,children:[t.value.first_name," ",t.value.last_name]}),s.jsx(l.Text,{children:r("Tutor")}),s.jsx("div",{children:s.jsx(E.MarkdownRenderer,{children:t.value.bio||""})})]})})]})}),s.jsxs("div",{className:"tutor-courses",children:[s.jsx(u.Title,{style:{marginBottom:20},level:3,children:r("TutorPage.Courses")}),o.list&&((m=o.list.data)==null?void 0:m.length)===0?s.jsx(l.Text,{children:r("TutorCoursesEmpty")}):o.list&&((j=o.list.data)==null?void 0:j.length)>4?s.jsx(G,{courses:((p=o.list)==null?void 0:p.data)||[]}):s.jsx(i.Row,{children:o.list&&o.list.data.map(e=>s.jsx(i.Col,{md:6,lg:3,children:s.jsx(U,{children:s.jsx(B,{mobile:L,id:e.id,image:s.jsx(a,{to:`/courses/${e.id}`,children:e.image_url?s.jsx("img",{src:e.image_url,alt:e.title}):s.jsx(O,{})}),tags:s.jsx(X,{tags:e.tags,onTagClick:d=>c.push(`/courses/?tag=${d}`)}),subtitle:e.subtitle?s.jsx(l.Text,{size:"12",children:s.jsx(a,{style:{color:_.primaryColor},to:`/courses/${e.id}`,children:s.jsx("strong",{children:e.subtitle})})}):void 0,title:s.jsx(a,{to:`/courses/${e.id}`,className:"title",children:s.jsx(u.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(A,{categories:e.categories,onCategoryClick:d=>{c.push(`/courses/?categories[]=${d}`)}}),actions:s.jsx(s.Fragment,{children:s.jsx(S.Button,{mode:"secondary",onClick:()=>c.push(`/courses/${e.id}`),children:r("StartNow")})}),footer:s.jsxs(s.Fragment,{children:[e.users_count&&e.users_count>0?s.jsx(v.IconText,{icon:s.jsx(M,{}),text:`${e.users_count} ${r("Students")}`}):""," ",e.lessons_count&&e.lessons_count>0?s.jsx(v.IconText,{icon:s.jsx(z,{}),text:`${e.lessons_count} ${r("Lessons")}`}):""]})})})},e.id))})]})]})}),t.loading&&s.jsx(F,{})]})};export{os as default};

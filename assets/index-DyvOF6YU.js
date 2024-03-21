import{q as b,D as $,f as w,r as g,h as y,X as I,i as N,j as s,o as P,C as R,L as a,l as C,s as l,w as i,I as k,T as u,M as E,G as B,n as L,v as S,J as v,U as M,K as z}from"./index-DFLxrXjz.js";import{P as F}from"./index-Cf0suRIC.js";import{R as q}from"./ResponsiveImage-DTtglx1x.js";import{C as G}from"./index-7ZZxhrD8.js";import{B as H}from"./index-BYenw5EM.js";import{C as U}from"./index-DeLg1i6n.js";import{C as X}from"./index-DBIqiG2E.js";import{T as A}from"./index-BbXNoOCq.js";import{C as D}from"./index-DusIoz3Z.js";import"./swiper-react-B78FQ3Jo.js";import"./index-CXHzztkv.js";import"./swiper-BkFuU53M.js";import"./a11y-Ck2cbnC9.js";const J=b.section`
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
`,is=()=>{var x,h,m,j,p;const{id:n}=$(),{t:r}=w(),{tutor:t,fetchTutor:T,courses:o,fetchCourses:f}=g.useContext(y.EscolaLMSContext),_=I(),c=N();return g.useEffect(()=>{T(Number(n)),f({"authors[]":[Number(n)]})},[n]),s.jsxs(P,{children:[s.jsx(J,{children:s.jsxs(R,{children:[s.jsx(H,{items:[s.jsx(a,{to:C.home,children:r("Home")}),s.jsx(a,{to:C.tutors,children:r("Tutors")}),s.jsx(l.Text,{size:"12",children:`${((x=t.value)==null?void 0:x.first_name)||""} ${((h=t.value)==null?void 0:h.last_name)||""}`})]}),t.value&&s.jsx("div",{className:"profile-box",children:s.jsxs(i.Row,{align:"start",children:[s.jsx(i.Col,{lg:3,children:s.jsx("div",{className:"image",children:t.value.path_avatar?s.jsx(q.ResponsiveImage,{path:t.value.path_avatar,srcSizes:[355,355*2]}):s.jsx("img",{className:"tutor-avatar",src:k.tutorPlaceholderPath,alt:"Tutor avatar"})})}),s.jsx(i.Col,{lg:8,children:s.jsxs("div",{className:"content",children:[s.jsxs(u.Title,{level:3,children:[t.value.first_name," ",t.value.last_name]}),s.jsx(l.Text,{children:r("Tutor")}),s.jsx("div",{children:s.jsx(E.MarkdownRenderer,{children:t.value.bio||""})})]})})]})}),s.jsxs("div",{className:"tutor-courses",children:[s.jsx(u.Title,{style:{marginBottom:20},level:3,children:r("TutorPage.Courses")}),o.list&&((m=o.list.data)==null?void 0:m.length)===0?s.jsx(l.Text,{children:r("TutorCoursesEmpty")}):o.list&&((j=o.list.data)==null?void 0:j.length)>4?s.jsx(G,{courses:((p=o.list)==null?void 0:p.data)||[]}):s.jsx(i.Row,{children:o.list&&o.list.data.map(e=>s.jsx(i.Col,{md:6,lg:3,children:s.jsx(X,{children:s.jsx(B,{mobile:L,id:e.id,image:s.jsx(a,{to:`/courses/${e.id}`,children:e.image_url?s.jsx("img",{src:e.image_url,alt:e.title}):s.jsx(U,{})}),tags:s.jsx(A,{tags:e.tags,onTagClick:d=>c.push(`/courses/?tag=${d}`)}),subtitle:e.subtitle?s.jsx(l.Text,{size:"12",children:s.jsx(a,{style:{color:_.primaryColor},to:`/courses/${e.id}`,children:s.jsx("strong",{children:e.subtitle})})}):void 0,title:s.jsx(a,{to:`/courses/${e.id}`,className:"title",children:s.jsx(u.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(D,{categories:e.categories,onCategoryClick:d=>{c.push(`/courses/?categories[]=${d}`)}}),actions:s.jsx(s.Fragment,{children:s.jsx(S.Button,{mode:"secondary",onClick:()=>c.push(`/courses/${e.id}`),children:r("StartNow")})}),footer:s.jsxs(s.Fragment,{children:[e.users_count&&e.users_count>0?s.jsx(v.IconText,{icon:s.jsx(M,{}),text:`${e.users_count} ${r("Students")}`}):""," ",e.lessons_count&&e.lessons_count>0?s.jsx(v.IconText,{icon:s.jsx(z,{}),text:`${e.lessons_count} ${r("Lessons")}`}):""]})})})},e.id))})]})]})}),t.loading&&s.jsx(F,{})]})};export{is as default};

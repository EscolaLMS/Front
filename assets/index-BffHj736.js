import{q as u,m as o,r as a,h,l as C,f as b,j as e,C as f,T as j,v as m,n as p,i as c,I as w,w as F}from"./index-8nfYNS1Y.js";import{C as y}from"./index-C779-yNS.js";import{R as T}from"./ResponsiveImage-D2Ds7Ba-.js";import{C as k}from"./index-CZVCaklh.js";import{C as S}from"./index-DBeeu3RS.js";import{C as $,g as v}from"./index-o5mPTd5i.js";import{T as R}from"./index-kxjE66PW.js";const B=u.section`
  margin: 40px 0;
  @media (max-width: 768px) {
    margin: 30px 0;
  }
  .container {
    position: relative;
    padding-top: 55px;
    padding-bottom: 35px;
    z-index: 1;
    &:after {
      position: absolute;
      content: "";
      width: ${o?"100%":"calc(100% + 100px)"};
      height: 100%;
      background: ${({theme:t})=>t.theme==="orangeTheme"&&t.mode==="light"?t.gray4:"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"};
      left: 50%;
      transform: translate(-50%, 0);
      top: 0;
      z-index: -1;
      opacity: ${({theme:t})=>t.mode==="dark"?.1:1};
      border-radius: ${({theme:t})=>t.radius};

      @media (max-width: 1200px) {
        background: ${({theme:t})=>t.theme==="orangeTheme"?"linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 100%)":"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"};
      }
    }
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;

    button {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
  .show-more-btn {
    display: none;
    @media (max-width: 1200px) {
      display: block;
      margin-top: 60px;
    }
  }
  .course-section {
    display: none;
  }
`,A=()=>{const[t,g]=a.useState([]),[i,d]=a.useState(!0),{fetchCourses:l}=a.useContext(h.EscolaLMSContext),r=C(),{t:n}=b();return a.useEffect(()=>{l({per_page:8}).then(s=>{g(s.data||[])}).catch(()=>d(!1)).finally(()=>d(!1))},[l]),e.jsx(B,{children:e.jsxs(f,{className:"container",children:[e.jsxs("div",{className:"header-wrapper",children:[e.jsx(j.Title,{level:3,as:"h1",children:n("Homepage.AwardedCoursesTitle")}),e.jsx(m.Button,{mode:"outline",onClick:()=>r.push(p.courses),children:n("Homepage.AwardedCoursesBtnText")})]}),i&&e.jsx(S,{}),!i&&o&&e.jsx($,{courses:t}),!i&&!o&&e.jsx(c.Row,{style:{rowGap:"60px"},children:t.map(s=>e.jsx(c.Col,{md:6,lg:3,children:e.jsx(k,{children:e.jsx(w,{mobile:o,id:Number(s.id),tags:e.jsx(R,{tags:s.tags,onTagClick:x=>r.push(`/courses/?tag=${x}`)}),image:e.jsx(F,{to:`/courses/${s.id}`,children:s.image_path?e.jsx(T.ResponsiveImage,{path:s.image_path,alt:s.title,srcSizes:[300,600,900]}):e.jsx(y,{})}),subtitle:v({subtitle:s.title,linkTo:`/courses/${s.id}`,textLength:29})})})},s.id))}),e.jsx(m.Button,{className:"show-more-btn",onClick:()=>r.push(p.courses),block:!0,mode:"outline",children:n("Homepage.AwardedCoursesBtnText")})]})})};export{A as P};

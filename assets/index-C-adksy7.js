import{q as s,r,h as c,j as t,G as m,l,n as x,a9 as p,v as d}from"./index-BsLXwVX-.js";import{a as h}from"./ResponsiveImage-KgADMS5g.js";const g=s.div`
  .section-companies {
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
`,w=({title:i})=>{const{settings:e}=r.useContext(c.EscolaLMSContext);return t.jsx(g,{children:t.jsxs("section",{className:"section-companies with-border",children:[t.jsx(m.Text,{children:t.jsx("strong",{children:i})}),t.jsx("div",{className:"companies-row",children:e&&e.value.courseLogos&&Object.values(e.value.courseLogos).map((a,n)=>{var o;return t.jsx("div",{className:"single-company",children:t.jsx(h,{path:((o=e==null?void 0:e.value)==null?void 0:o.courseLogos[`logo${n+1}`])||"",srcSizes:[100,200,300]})},n)})})]})})},j=s.div`
  .section-tutor {
    .ranking-row {
      display: none !important;
    }
    .title {
      margin-bottom: 20px;
    }
  }
`,u=s(l.Tutor)`
  margin-bottom: 20px;
`,y=({users:i,title:e})=>i!=null&&i.length?t.jsx(j,{children:t.jsxs("section",{className:"section-tutor with-border padding-right",children:[t.jsx(l.Title,{as:"h3",level:4,className:"title",children:e}),i.map(a=>t.jsx(u,{mobile:x,avatar:{alt:`${a.first_name} ${a.last_name}`,src:`${p}/api/images/img?path=${a.path_avatar}`||""},rating:{ratingValue:4.1},title:t.jsx(t.Fragment,{}),fullName:t.jsx(d,{to:`/tutors/${a.id}`,children:`${a.first_name} ${a.last_name}`}),coursesInfo:"8 Curses",description:a.bio}))]})}):null;export{w as C,y as T};

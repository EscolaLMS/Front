import{q as i,D as l,j as t,o as c,as as r,T as m,a9 as x,g as p,L as d,am as g}from"./index-DcQpgbXL.js";import{r as h}from"./sentry-DZqhWugq.js";const j=i.div`
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
`,y=({title:s})=>{const{settings:e}=h.useContext(l.EscolaLMSContext);return t.jsx(j,{children:t.jsxs("section",{className:"section-companies with-border",children:[t.jsx(c.Text,{children:t.jsx("strong",{children:s})}),t.jsx("div",{className:"companies-row",children:e&&e.value.courseLogos&&Object.values(e.value.courseLogos).map((a,o)=>{var n;return t.jsx("div",{className:"single-company",children:t.jsx(r,{path:((n=e==null?void 0:e.value)==null?void 0:n.courseLogos[`logo${o+1}`])||"",srcSizes:[100,200,300]})},o)})})]})})},u=i.div`
  .section-tutor {
    .ranking-row {
      display: none !important;
    }
    .title {
      margin-bottom: 20px;
    }
  }
`,f=i(g)`
  margin-bottom: 20px;
`,T=({users:s,title:e})=>s!=null&&s.length?t.jsx(u,{children:t.jsxs("section",{className:"section-tutor with-border padding-right",children:[t.jsx(m.Title,{as:"h3",level:4,className:"title",children:e}),s.map(a=>t.jsx(f,{mobile:p,avatar:{alt:`${a.first_name} ${a.last_name}`,src:`${x}/api/images/img?path=${a.path_avatar}`||""},rating:{ratingValue:4.1},title:t.jsx(t.Fragment,{}),fullName:t.jsx(d,{to:`/tutors/${a.id}`,children:`${a.first_name} ${a.last_name}`}),coursesInfo:"8 Curses",description:a.bio}))]})}):null;export{y as C,T};
//# sourceMappingURL=index-eFXvnw1n.js.map

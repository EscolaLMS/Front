import{q as s,r as l,A as c,j as t,T as r,aa as m,o as x,k as p,ab as d,v as g}from"./index-Blo-PJs7.js";import{a as h}from"./ResponsiveImage-Dt4SFaY6.js";const j=s.div`
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
`,y=({title:i})=>{const{settings:e}=l.useContext(c.EscolaLMSContext);return t.jsx(j,{children:t.jsxs("section",{className:"section-companies with-border",children:[t.jsx(r.Text,{children:t.jsx("strong",{children:i})}),t.jsx("div",{className:"companies-row",children:e&&e.value.courseLogos&&Object.values(e.value.courseLogos).map((a,o)=>{var n;return t.jsx("div",{className:"single-company",children:t.jsx(h,{path:((n=e==null?void 0:e.value)==null?void 0:n.courseLogos[`logo${o+1}`])||"",srcSizes:[100,200,300]})},o)})})]})})},u=s.div`
  .section-tutor {
    .ranking-row {
      display: none !important;
    }
    .title {
      margin-bottom: 20px;
    }
  }
`,f=s(m)`
  margin-bottom: 20px;
`,b=({users:i,title:e})=>i!=null&&i.length?t.jsx(u,{children:t.jsxs("section",{className:"section-tutor with-border padding-right",children:[t.jsx(x.Title,{as:"h3",level:4,className:"title",children:e}),i.map(a=>t.jsx(f,{mobile:p,avatar:{alt:`${a.first_name} ${a.last_name}`,src:`${d}/api/images/img?path=${a.path_avatar}`||""},rating:{ratingValue:4.1},title:t.jsx(t.Fragment,{}),fullName:t.jsx(g,{to:`/tutors/${a.id}`,children:`${a.first_name} ${a.last_name}`}),coursesInfo:"8 Curses",description:a.bio}))]})}):null;export{y as C,b as T};

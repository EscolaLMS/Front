import{q as d,m as a,j as s,T as r}from"./index-Duhnd3NG.js";import{f as l}from"./index-CnyZdFlA.js";const n=d.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`,h=({price:c,taxRate:i,oldPrice:e})=>a?s.jsxs(n,{children:[e&&s.jsx("div",{className:"pricing-card-discount",children:s.jsxs(r.Title,{level:5,as:"h5",children:[l(e,i)," zł"]})}),s.jsxs(r.Title,{level:4,as:"h4",children:[l(c,i)," zł"]})]}):s.jsxs(n,{children:[s.jsxs(r.Title,{level:3,as:"h3",children:[l(c,i)," zł"]}),e&&s.jsx("div",{className:"pricing-card-discount",children:s.jsxs(r.Title,{level:5,as:"h5",children:[l(e,i)," zł"]})})]});export{h as P};

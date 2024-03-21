import{q as a,n as j,j as r,s as d,W as l}from"./index-DFLxrXjz.js";const o=a.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`,m=({price:i,taxRate:c,oldPrice:s,textSizes:n})=>j?r.jsxs(o,{children:[s&&r.jsx("div",{className:"pricing-card-discount",children:r.jsxs(d.Text,{size:(n==null?void 0:n.old)||"18",children:[l(s,c)," zł"]})}),r.jsxs(d.Text,{size:(n==null?void 0:n.new)||"16",children:[l(i,c)," zł"]})]}):r.jsxs(o,{children:[r.jsxs(d.Text,{size:(n==null?void 0:n.new)||"16",children:[l(i,c)," zł"]}),s&&r.jsx("div",{className:"pricing-card-discount",children:r.jsxs(d.Text,{size:(n==null?void 0:n.old)||"18",children:[l(s,c)," zł"]})})]});export{m as P};

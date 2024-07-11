import{q as a,k as j,j as n,z as d,a0 as l}from"./index-D1d_pcfS.js";const o=a.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`,m=({price:i,taxRate:c,oldPrice:s,textSizes:r})=>j?n.jsxs(o,{children:[s&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(d.Text,{size:(r==null?void 0:r.old)||"18",children:[l(s,c)," zł"]})}),n.jsxs(d.Text,{size:(r==null?void 0:r.new)||"16",children:[l(i,c)," zł"]})]}):n.jsxs(o,{children:[n.jsxs(d.Text,{size:(r==null?void 0:r.new)||"16",children:[l(i,c)," zł"]}),s&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(d.Text,{size:(r==null?void 0:r.old)||"18",children:[l(s,c)," zł"]})})]});export{m as P};

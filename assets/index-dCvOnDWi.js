import{q as a,o as j,j as n,y as d,W as l}from"./index-9BhopFAA.js";const i=a.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`,m=({price:o,taxRate:c,oldPrice:s,textSizes:r})=>j?n.jsxs(i,{children:[s&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(d.Text,{size:(r==null?void 0:r.old)||"18",children:[l(s,c)," zł"]})}),n.jsxs(d.Text,{size:(r==null?void 0:r.new)||"16",children:[l(o,c)," zł"]})]}):n.jsxs(i,{children:[n.jsxs(d.Text,{size:(r==null?void 0:r.new)||"16",children:[l(o,c)," zł"]}),s&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(d.Text,{size:(r==null?void 0:r.old)||"18",children:[l(s,c)," zł"]})})]});export{m as P};

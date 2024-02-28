import{q as a,k as j,j as n,T as d}from"./index-DPt-kbd_.js";import{f as o}from"./index-DB6D8qFb.js";const l=a.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`,u=({price:i,taxRate:c,oldPrice:s,textSizes:r})=>j?n.jsxs(l,{children:[s&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(d.Text,{size:(r==null?void 0:r.old)||"18",children:[o(s,c)," zł"]})}),n.jsxs(d.Text,{size:(r==null?void 0:r.new)||"16",children:[o(i,c)," zł"]})]}):n.jsxs(l,{children:[n.jsxs(d.Text,{size:(r==null?void 0:r.new)||"16",children:[o(i,c)," zł"]}),s&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(d.Text,{size:(r==null?void 0:r.old)||"18",children:[o(s,c)," zł"]})})]});export{u as P};

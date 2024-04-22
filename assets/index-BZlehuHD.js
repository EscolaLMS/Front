import{q as a,i as j,j as n,x as d,a1 as i}from"./index-DVBSULAc.js";const o=a.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`,m=({price:l,taxRate:c,oldPrice:s,textSizes:r})=>j?n.jsxs(o,{children:[s&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(d.Text,{size:(r==null?void 0:r.old)||"18",children:[i(s,c)," zł"]})}),n.jsxs(d.Text,{size:(r==null?void 0:r.new)||"16",children:[i(l,c)," zł"]})]}):n.jsxs(o,{children:[n.jsxs(d.Text,{size:(r==null?void 0:r.new)||"16",children:[i(l,c)," zł"]}),s&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(d.Text,{size:(r==null?void 0:r.old)||"18",children:[i(s,c)," zł"]})})]});export{m as P};

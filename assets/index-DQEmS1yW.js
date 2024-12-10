import{q as h,h as u,o as m,j as n,y as c,W as l}from"./index-Dd-EmmDK.js";const o=h.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`,f=({price:a,taxRate:s,oldPrice:d,textSizes:r,isFree:i})=>{const{t:j}=u();return m?n.jsxs(o,{children:[d&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(c.Text,{size:(r==null?void 0:r.old)||"18",children:[l(d,s)," zł"]})}),n.jsxs(c.Text,{size:(r==null?void 0:r.new)||"16",children:[l(a,s)," zł"]})]}):i?n.jsx(o,{children:n.jsx(c.Text,{size:(r==null?void 0:r.new)||"16",children:j("CoursesPage.Free")})}):n.jsxs(o,{children:[n.jsxs(c.Text,{size:(r==null?void 0:r.new)||"16",children:[l(a,s)," zł"]}),d&&n.jsx("div",{className:"pricing-card-discount",children:n.jsxs(c.Text,{size:(r==null?void 0:r.old)||"18",children:[l(d,s)," zł"]})})]})};export{f as P};

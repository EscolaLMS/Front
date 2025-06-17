import{D as C,a as f,j as t,o as a,J as x,l as j,U as h,bQ as y,T as b,q as m}from"./index-D5UVe-mj.js";import{P}from"./index-CGqsIyIO.js";import{r as p}from"./sentry-DZqhWugq.js";import{u as T}from"./useDownloadCertificate-C-OkeBw0.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";import"./index-ybFruxe1.js";const w=m.section`
  .empty-certificates-message {
    background: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
  }
  .buttons-container {
    margin-top: 20px;
    display: flex;

    align-items: center;
    justify-content: flex-start;

    .download-btn {
      all: unset;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      color: ${({theme:e})=>e.primaryColor};
      p {
        color: ${({theme:e})=>e.primaryColor};
      }
    }
  }
  .certificate-card {
    margin-bottom: 24px;
  }
`,D=()=>{var o,l,n,c,d;const{certificates:e,fetchCertificates:r}=p.useContext(C.EscolaLMSContext),{t:s}=f(),{downloadCertificate:u,loadingId:g}=T();return p.useEffect(()=>{r()},[r]),t.jsx(t.Fragment,{children:t.jsxs(w,{children:[((o=e.list)==null?void 0:o.data.length)===0&&t.jsx(a.Text,{className:"empty-certificates-message",children:t.jsx("strong",{children:s("MyProfilePage.EmptyCertificates")})}),t.jsx(x.Row,{children:e&&((l=e==null?void 0:e.list)==null?void 0:l.data)&&((n=e.list)==null?void 0:n.data.length)>0&&((d=(c=e==null?void 0:e.list)==null?void 0:c.data)==null?void 0:d.filter(i=>i.title).map(i=>t.jsx(x.Col,{lg:4,children:t.jsx(j.CertificateCard,{uptitle:t.jsx(a.Text,{size:"13",children:s("CoursePage.CourseTitle")}),title:t.jsx(b.Title,{level:4,as:"h3",children:i.title}),dateUptitle:t.jsx(a.Text,{size:"13",children:s("CoursePage.CertificateDate")}),date:t.jsx(a.Text,{noMargin:!0,size:"16",bold:!0,children:new Date(i.created_at).toLocaleDateString("pl-PL")}),actions:t.jsx("div",{className:"buttons-container",children:g===i.id?t.jsx(h,{width:"15px",height:"15px"}):t.jsxs("button",{className:"download-btn",onClick:()=>u(i.id,i.title),children:[t.jsx(y,{})," ",t.jsx(a.Text,{bold:!0,size:"13",children:s("CoursePage.DownloadCertificate")})]})})})})))})]})})},E=m.div`
  margin-top: 20px;
`,$=()=>{const{t:e}=f();return t.jsx(P,{title:e("MyProfilePage.MyCertificates"),children:t.jsx(E,{children:t.jsx(D,{})})})};export{$ as default};
//# sourceMappingURL=my-certificates-kotgmOF4.js.map

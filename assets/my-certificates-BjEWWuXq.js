import{q as f,r as x,A as C,f as m,j as t,s,w as p,m as j,T as h,a0 as y,c_ as P}from"./index-t6qcE6xV.js";import{P as b}from"./index-DB8kd_Xy.js";import{u as T}from"./useDownloadCertificate-DjmLX4ra.js";import"./index-DmM4Ouv-.js";const w=f.section`
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
`,E=()=>{var o,l,n,c,d;const{certificates:e,fetchCertificates:r}=x.useContext(C.EscolaLMSContext),{t:a}=m(),{downloadCertificate:u,loadingId:g}=T();return x.useEffect(()=>{r()},[r]),t.jsx(t.Fragment,{children:t.jsxs(w,{children:[((o=e.list)==null?void 0:o.data.length)===0&&t.jsx(s.Text,{className:"empty-certificates-message",children:t.jsx("strong",{children:a("MyProfilePage.EmptyCertificates")})}),t.jsx(p.Row,{children:e&&((l=e==null?void 0:e.list)==null?void 0:l.data)&&((n=e.list)==null?void 0:n.data.length)>0&&((d=(c=e==null?void 0:e.list)==null?void 0:c.data)==null?void 0:d.filter(i=>i.title).map(i=>t.jsx(p.Col,{lg:4,children:t.jsx(j.CertificateCard,{uptitle:t.jsx(s.Text,{size:"13",children:a("CoursePage.CourseTitle")}),title:t.jsx(h.Title,{level:4,as:"h3",children:i.title}),dateUptitle:t.jsx(s.Text,{size:"13",children:a("CoursePage.CertificateDate")}),date:t.jsx(s.Text,{noMargin:!0,size:"16",bold:!0,children:new Date(i.created_at).toLocaleDateString("pl-PL")}),actions:t.jsx("div",{className:"buttons-container",children:g===i.id?t.jsx(y,{width:"15px",height:"15px"}):t.jsxs("button",{className:"download-btn",onClick:()=>u(i.id,i.title),children:[t.jsx(P,{})," ",t.jsx(s.Text,{bold:!0,size:"13",children:a("CoursePage.DownloadCertificate")})]})})})})))})]})})},L=f.div`
  margin-top: 20px;
`,v=()=>{const{t:e}=m();return t.jsx(b,{title:e("MyProfilePage.MyCertificates"),children:t.jsx(L,{children:t.jsx(E,{})})})};export{v as default};

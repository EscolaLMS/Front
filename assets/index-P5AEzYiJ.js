import{r as o,j as e,q as y,i as a,N as P,m as S,f as b,O as B,o as h,v as k,C as E,L as R,x as C,Q as c,M}from"./index-flVLDudU.js";import{B as T}from"./index-untzBHxu.js";import{P as L}from"./index-EdeuUYZk.js";import{S as x}from"./index-Dck82PR3.js";function $(s){const n=o.useRef();return o.useEffect(()=>{n.current=s},[s]),n.current}const w=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"27px"},children:e.jsx(x,{count:5,style:{marginBottom:"11px",height:"20px"}})}),e.jsx("div",{style:{marginBottom:"27px"},children:e.jsx(x,{count:12,style:{marginBottom:"11px",height:"20px"}})}),e.jsx("div",{style:{marginBottom:"27px"},children:e.jsx(x,{count:6,style:{marginBottom:"11px",height:"20px"}})})]}),q=y.section`
  background-color: ${({theme:s})=>s.gray4};
  min-height: calc(100vh - 400px);
  padding-top: ${a?"0px":"57px"};
  .user-main-sidebar {
    margin-top: ${a?"60px":0};
  }
  .content {
    margin-top: ${a?"30px":0};
  }
`,H=()=>{var m,d,g,p;const{slug:s}=P(),{fetchPage:n,page:t,fetchPages:j,pages:i}=o.useContext(S.EscolaLMSContext),u=$(s),{t:f}=b();o.useEffect(()=>{var r;s&&!t.loading&&(!t.value&&!t.error||t.value&&((r=t.value)==null?void 0:r.slug)!==s||t.error&&!u)&&(j(),n(String(s)))},[s,t]);const v=o.useMemo(()=>{var r;return i&&((r=i.list)==null?void 0:r.data.map(l=>({key:l.slug,title:l.title.substring(0,50),url:l.slug})))},[i]);return!t.loading&&t.error&&!t.error.success?e.jsx(B,{to:h.notFound}):e.jsx(k,{metaTitle:(m=t.value)==null?void 0:m.title,children:e.jsx(q,{children:e.jsxs(E,{children:[!a&&e.jsx(T,{items:[e.jsx(R,{to:h.home,children:f("Home")}),e.jsx(C.Text,{size:"12",children:(d=t.value)==null?void 0:d.title})]}),e.jsxs(c.Row,{children:[e.jsx(c.Col,{lg:3,sm:12,xs:12,children:e.jsx(L,{tabs:v||[],isProfile:!1})}),e.jsx(c.Col,{offset:{xs:0,sm:0,lg:1},sm:12,lg:8,children:e.jsx("div",{className:"content",children:t.loading||!t.value&&!t.error||t.value&&((g=t.value)==null?void 0:g.slug)!==s||t.error&&!u?e.jsx(w,{}):e.jsx(M.MarkdownRenderer,{children:((p=t==null?void 0:t.value)==null?void 0:p.content)||""})})})]})]})})})};export{H as default};

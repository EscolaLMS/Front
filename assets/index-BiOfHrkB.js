import{q as d,r as i,h as x,f as m,X as h,j as s,o as j,C as p,L as r,l as u,s as l,T as f,w as o,S as T,G as g,H as C,I as _}from"./index-BxTLNZRa.js";import{B as v}from"./index-Cou6qPfA.js";const y=d.div`
  margin-bottom: 10px;
`,E=()=>{const{tutors:a,fetchTutors:n}=i.useContext(x.EscolaLMSContext),{t}=m(),c=h();return i.useEffect(()=>{n()},[]),s.jsx(j,{children:s.jsx("div",{className:"advisor-area",children:s.jsxs(p,{children:[s.jsx(v,{items:[s.jsx(r,{to:u.home,children:t("Home")}),s.jsx(l.Text,{size:"12",children:t("Tutors")})]}),s.jsx(y,{children:s.jsxs(f.Title,{level:1,children:[" ",t("Tutors")]})}),s.jsxs(o.Row,{children:[a.loading&&s.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:"500px",flexDirection:"column",alignItems:"center"},className:"loader-wrapper",children:s.jsx(T.Spin,{color:c.primaryColor})}),!a.loading&&(a.list||[]).map(e=>s.jsx(o.Col,{sm:6,md:6,lg:4,children:s.jsx(g,{id:Number(e.id),title:e.name,image:s.jsx(r,{to:`/tutors/${e.id}`,children:e.path_avatar?s.jsx(C,{path:e.path_avatar,srcSizes:[380,380*2]}):s.jsx("img",{className:"tutor-card__avatar",src:_.tutorPlaceholderPath,alt:"tutor_avatar"})}),subtitle:s.jsx(r,{to:`/tutors/${e.id}`,children:s.jsx(l.Text,{size:"16",children:s.jsxs("strong",{children:[e.first_name," ",e.last_name]})})})})},e.id))]})]})})})};export{E as default};
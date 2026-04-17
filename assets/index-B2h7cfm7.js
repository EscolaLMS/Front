import{R as j,r as p}from"./sentry-DZqhWugq.js";import{X as C,j as e,bS as x,q as y,b as T,a as v,bT as k,aY as $,g as N,aR as R,ah as b,aM as I,L as h,aE as _,as as B}from"./index-Bh0S307Q.js";import{C as S}from"./index-DKGXq-s_.js";const W=j.createContext({}),H=y("div")`
  align-self: end;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;

  .tags-menu-container {
    position: relative;

    .tags-menu {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 4px;
      list-style: none;
      padding: 4px 0;
      height: fit-content;
      max-height: 230px;
      overflow-y: scroll;
      background-color: ${s=>s.theme.primaryColor};
      width: fit-content;
      margin: 0;

      li {
        width: 100%;
      }
    }
  }

  .badge {
    cursor: pointer;
  }
`,M=s=>{const{tags:t,onTagClick:i}=s,a=C(),[l,o]=p.useState(!1),d=t?[...t].splice(0,2):[],g=t?[...t].splice(2):[],f=p.useRef(null),u=p.useCallback((n,r)=>{i&&i(r)},[i]);return e.jsxs(H,{ref:f,children:[d.map((n,r)=>{const c=n.title??n;return e.jsx(x.Badge,{className:"badge",color:a.primaryColor,onClick:m=>u(m,c),children:c},r)}),g.length>0&&e.jsxs("div",{className:"tags-menu-container",onMouseLeave:()=>o(!1),children:[e.jsx(x.Badge,{className:"badge",color:a.primaryColor,onMouseOver:()=>o(!0),children:`+${g.length}`}),l&&e.jsx("ul",{className:"tags-menu",children:g.map((n,r)=>{const c=n.title??n;return e.jsx("li",{children:e.jsx(x.Badge,{className:"badge",onClick:m=>u(m,c),color:a.primaryColor,children:c},r)})})})]})]})},q=({webinar:s,actions:t,footer:i})=>{const a=T(),{t:l}=v(),o=s.active_to&&s.deadline&&k(new Date(s.deadline),new Date(s.active_to))||null;return e.jsx($,{id:s.id,mobile:N,image:e.jsx(h,{to:`/webinar/${s.id}`,"aria-label":s.name,children:s.image_path?e.jsx(B,{path:s.image_path,alt:s.name,srcSizes:[300,600,900]}):e.jsx(S,{})}),title:e.jsx(h,{to:`/webinar/${s.id}`,className:"title",children:e.jsx(_,{level:4,as:"h2",children:s.name})}),tags:e.jsx(M,{tags:s.tags,onTagClick:d=>a.push(`/webinars/?tags[]=${d}`)}),actions:t??e.jsx(e.Fragment,{children:e.jsx(I,{mode:"secondary",onClick:()=>a.push(`/webinar/${s.id}`),children:l("StartNow")})}),footer:i??e.jsx(e.Fragment,{children:!!o&&e.jsx(R,{icon:e.jsx(b,{}),text:`${o} ${l(o===1?"Hour":"Hours")}`})})})};export{W,q as a};
//# sourceMappingURL=index-B2h7cfm7.js.map

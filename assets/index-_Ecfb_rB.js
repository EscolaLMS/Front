import{q as k,j as o,L as v,x as w}from"./index-GZH7EDwP.js";const y=k.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    text-decoration: none !important;
  }
  .arrow {
    width: 10px;
    height: 10px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({theme:t})=>t.primaryColor};
    margin: 0 10px;
    &--left {
      transform: rotate(45deg);
    }
    &--right {
      transform: rotate(-135deg);
    }
  }
  .number {
    margin: 0 8px;
    p {
      opacity: 0.5;
      &.current {
        color: ${({theme:t})=>t.black}!important;

        opacity: 1;
      }
    }
  }
`,c="LEFT",m="RIGHT",i=(t,p,d=1)=>{let a=t;const l=[];for(;a<=p;)l.push(a),a+=d;return l},E=({currentPage:t,total:p,perPage:d,onPage:a,pageNeighbours:l=2})=>{const e=Math.ceil(p/d),j=()=>{const r=l*2+3,n=r+2;if(e>n){const x=Math.max(2,t-l),f=Math.min(e-1,t+l);let s=i(x,f);const h=x>2,u=e-f>1,N=r-(s.length+1);switch(!0){case(h&&!u):{const b=i(x-N,x-1);s=[c,...b,...s];break}case(!h&&u):{const b=i(f+1,f+N);s=[...s,...b,m];break}case(h&&u):default:{s=[c,...s,m];break}}return[1,...s,e]}else{if(t<e&&t===1)return[...i(1,e),m];if(t>1&&t!==e)return[c,...i(1,e),m];if(t>1&&t===e)return[c,...i(1,e)]}return i(1,e)};return o.jsx(y,{children:j().map(r=>r===c?o.jsx("a",{href:"#!prev_page",className:"prev page-numbers",onClick:n=>{n.preventDefault(),a(t<=1?1:t-1)},children:o.jsx("div",{className:"arrow arrow--left"})}):r===m?o.jsx("a",{href:"#!next_page",className:"next page-numbers",onClick:n=>{n.preventDefault(),a(t===e?e:t+1)},children:o.jsx("div",{className:"arrow arrow--right"})}):o.jsx(v,{onClick:n=>{n.preventDefault(),a(Number(r))},to:`#!page-${Number(r)}`,className:"number",children:o.jsx(w.Text,{className:Number(r)===t?"current":"",size:"16","aria-current":"page",children:Number(r)})},`#${Number(r)}`))})};export{E as P};

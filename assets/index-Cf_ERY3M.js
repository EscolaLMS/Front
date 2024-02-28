import{q as v,j as n,v as w,T as k}from"./index-CJUViYQs.js";const y=v.div`
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
        color: ${({theme:t})=>t.primaryColor}!important;
        font-weight: 700;
        opacity: 1;
      }
    }
  }
`,c="LEFT",m="RIGHT",i=(t,x,h=1)=>{let a=t;const l=[];for(;a<=x;)l.push(a),a+=h;return l},C=({currentPage:t,total:x,perPage:h,onPage:a,pageNeighbours:l=2})=>{const e=Math.ceil(x/h),j=()=>{const r=l*2+3,o=r+2;if(e>o){const f=Math.max(2,t-l),p=Math.min(e-1,t+l);let s=i(f,p);const d=f>2,u=e-p>1,N=r-(s.length+1);switch(!0){case(d&&!u):{const b=i(f-N,f-1);s=[c,...b,...s];break}case(!d&&u):{const b=i(p+1,p+N);s=[...s,...b,m];break}case(d&&u):default:{s=[c,...s,m];break}}return[1,...s,e]}else{if(t<e&&t===1)return[...i(1,e),m];if(t>1&&t!==e)return[c,...i(1,e),m];if(t>1&&t===e)return[c,...i(1,e)]}return i(1,e)};return n.jsx(y,{children:j().map(r=>r===c?n.jsx("a",{href:"#!prev_page",className:"prev page-numbers",onClick:o=>{o.preventDefault(),a(t<=1?1:t-1)},children:n.jsx("div",{className:"arrow arrow--left"})}):r===m?n.jsx("a",{href:"#!next_page",className:"next page-numbers",onClick:o=>{o.preventDefault(),a(t===e?e:t+1)},children:n.jsx("div",{className:"arrow arrow--right"})}):n.jsx(w,{onClick:o=>{o.preventDefault(),a(Number(r))},to:`#!page-${Number(r)}`,className:"number",children:n.jsx(k.Text,{className:Number(r)===t?"current":"",size:"16","aria-current":"page",children:Number(r)})},`#${Number(r)}`))})};export{C as P};

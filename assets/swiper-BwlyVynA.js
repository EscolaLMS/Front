import{q as n,r as l,j as r,ao as i}from"./index-flVLDudU.js";import{S as a,N as p,A as d}from"./a11y-CcPUmQje.js";const c=n.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
  button {
    all: unset;
    width: 24px;
    height: 24px;
    border-radius: 3px;
    background-color: ${({theme:t})=>t.primaryColor};
    margin-left: 3px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :first-of-type {
      background-color: ${({theme:t})=>t.gray3};
      svg {
        transform: rotate(180deg);
      }
    }
  }
`,f=({children:t,slidesPerView:o})=>{const s=l.useRef();return r.jsxs("div",{children:[r.jsx(a,{modules:[p,d],spaceBetween:18,slidesOffsetAfter:18,breakpoints:{0:{slidesPerView:1.3},576:{slidesPerView:2},768:{slidesPerView:3},1201:{slidesPerView:o}},onBeforeInit:e=>{s.current=e},children:t}),r.jsxs(c,{children:[r.jsx("button",{onClick:()=>{var e;return(e=s.current)==null?void 0:e.slidePrev()},title:"pev",children:r.jsx(i,{})}),r.jsx("button",{onClick:()=>{var e;return(e=s.current)==null?void 0:e.slideNext()},title:"next",children:r.jsx(i,{})})]})]})};export{f as S};

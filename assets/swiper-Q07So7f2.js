import{j as r,aa as s,q as n}from"./index-YRlvC1Yo.js";import{r as a}from"./sentry-DZqhWugq.js";import{a as l,N as p,A as d}from"./swiper-CphuuvCl.js";const c=n.div`
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
`,m=({children:t,slidesPerView:o})=>{const i=a.useRef();return r.jsxs("div",{children:[r.jsx(l,{modules:[p,d],spaceBetween:18,slidesOffsetAfter:18,breakpoints:{0:{slidesPerView:1.3},576:{slidesPerView:2},768:{slidesPerView:3},1201:{slidesPerView:o}},onBeforeInit:e=>{i.current=e},children:t}),r.jsxs(c,{children:[r.jsx("button",{onClick:()=>{var e;return(e=i.current)==null?void 0:e.slidePrev()},title:"pev",children:r.jsx(s,{})}),r.jsx("button",{onClick:()=>{var e;return(e=i.current)==null?void 0:e.slideNext()},title:"next",children:r.jsx(s,{})})]})]})};export{m as S};
//# sourceMappingURL=swiper-Q07So7f2.js.map

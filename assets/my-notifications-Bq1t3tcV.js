import{q as o,j as n,o as i,C as a,a$ as e}from"./index-DdHAFv7l.js";const r=o.div`
  background-color: ${({theme:t})=>t.gray4};
`,s=o.div`
  padding-top: 70px;
  min-height: 50vh;
  .notifications-drawer__content__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      display: none;
    }
  }
  .notifications-drawer__content--clear-all {
    margin-bottom: 20px;
    margin-top: 10px;
    button {
      all: unset;
      font-size: 13px;
      font-family: ${({theme:t})=>t.font};
      color: ${({theme:t})=>t.primaryColor};
      font-weight: 700;
    }
  }
  .notifications-list {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`,l=()=>n.jsx(i,{children:n.jsx(r,{children:n.jsx(a,{children:n.jsx(s,{children:n.jsx(e,{})})})})});export{l as default};
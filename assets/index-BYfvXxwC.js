import{q as s,X as l,r as n,j as e,cy as d,T as c}from"./index-CJUViYQs.js";import{f as m}from"./date-DocSkm8y.js";import{A as x}from"./app-B2E7767C.js";const f=s.div`
  display: flex;
  flex-direction: column;

  .date-container {
    display: flex;
    flex-direction: row;
    border: 1px solid;
    border-radius: 2px;
    align-items: center;

    .icon-container {
      display: flex;
      align-items: center;
      padding: 0.5rem;
    }

    .date {
      padding: 0.5rem;
      margin: 0 auto;
    }
  }

  .info {
    padding: 0.5rem;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    font-family: ${({theme:r})=>r.font};
    font-size: 12px;
  }
`;var u=(r=>(r[r.ACCEPTED=0]="ACCEPTED",r[r.WAITING=1]="WAITING",r[r.ENDED=2]="ENDED",r[r.DEFAULT=3]="DEFAULT",r))(u||{});const b=({type:r,date:a,info:t})=>{const i=l(),o=n.useMemo(()=>{switch(r){case 0:return"#198754";case 1:return"#FFC300";case 2:return"#D22B2B";default:return i.primaryColor}},[i.primaryColor,r]);return e.jsxs(f,{children:[e.jsxs("div",{className:"date-container",style:{borderColor:o},children:[e.jsx("div",{className:"icon-container",style:{backgroundColor:o},children:e.jsx(d,{color:"#ffffff"})}),e.jsx(c.Text,{className:"date",children:a?m(new Date(a),x.defaultDateTimeFormat):"--"})]}),t&&e.jsx("div",{className:"info",style:{borderColor:o},children:t})]})};export{b as D,u as a};

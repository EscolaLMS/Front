import{q as t,X as l,r as n,j as e,cA as d,s as c,ai as m,I as x}from"./index-BwDDCa5l.js";const f=t.div`
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
`;var u=(r=>(r[r.ACCEPTED=0]="ACCEPTED",r[r.WAITING=1]="WAITING",r[r.ENDED=2]="ENDED",r[r.DEFAULT=3]="DEFAULT",r))(u||{});const E=({type:r,date:o,info:s})=>{const i=l(),a=n.useMemo(()=>{switch(r){case 0:return"#198754";case 1:return"#FFC300";case 2:return"#D22B2B";default:return i.primaryColor}},[i.primaryColor,r]);return e.jsxs(f,{children:[e.jsxs("div",{className:"date-container",style:{borderColor:a},children:[e.jsx("div",{className:"icon-container",style:{backgroundColor:a},children:e.jsx(d,{color:"#ffffff"})}),e.jsx(c.Text,{className:"date",children:o?m(new Date(o),x.defaultDateTimeFormat):"--"})]}),s&&e.jsx("div",{className:"info",style:{borderColor:a},children:s})]})};export{E as D,u as a};

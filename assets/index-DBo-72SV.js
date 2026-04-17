import{X as s,j as e,bU as t,o as l,ar as n,an as c,q as x}from"./index-Bh0S307Q.js";import{r as m}from"./sentry-DZqhWugq.js";const u=x.div`
  display: flex;
  flex-direction: column;

  .date-container {
    display: flex;
    flex-direction: row;
    border: 1px solid;
    border-radius: 2px;
    align-items: center;
    border-radius: ${({theme:r})=>r.cardRadius}px;
    .icon-container {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-top-left-radius: ${({theme:r})=>(r.cardRadius??2)-2}px;
      border-bottom-left-radius: ${({theme:r})=>(r.cardRadius??2)-2}px;
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
    border-radius: ${({theme:r})=>r.cardRadius}px;
  }
`;var f=(r=>(r[r.ACCEPTED=0]="ACCEPTED",r[r.WAITING=1]="WAITING",r[r.ENDED=2]="ENDED",r[r.DEFAULT=3]="DEFAULT",r))(f||{});const C=({type:r,date:o,info:d})=>{const i=s(),a=m.useMemo(()=>{switch(r){case 0:return"#198754";case 1:return"#FFC300";case 2:return"#D22B2B";default:return i.primaryColor}},[i.primaryColor,r]);return e.jsxs(u,{children:[e.jsxs("div",{className:"date-container",style:{borderColor:a},children:[e.jsx("div",{className:"icon-container",style:{backgroundColor:a},children:e.jsx(t,{color:"#ffffff"})}),e.jsx(l.Text,{className:"date",children:o?n(new Date(o),c.defaultDateTimeFormat):"--"})]}),d&&e.jsx("div",{className:"info",style:{borderColor:a},children:d})]})};export{C as D,f as a};
//# sourceMappingURL=index-DBo-72SV.js.map

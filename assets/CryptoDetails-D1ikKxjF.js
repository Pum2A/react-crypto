import{u as h,r as t,C as p,a as m,j as s}from"./index-Dwi03aNs.js";const _=()=>{const{id:c}=h(),{cryptoData:e,loading:l,error:r}=t.useContext(p),[a,i]=t.useState(null),n=m();return t.useEffect(()=>{if(e&&!l){const d=e.find(o=>o.id===c);i(d)}},[e,l,c]),l?s.jsx("div",{children:"Loading..."}):r?s.jsxs("div",{children:["Error: ",r]}):a?s.jsxs("div",{className:"crypto-details",children:[s.jsxs("div",{className:"crypto-details__header",children:[s.jsx("img",{src:a.image,alt:`${a.name} logo`,className:"crypto-details__image"}),s.jsxs("h1",{children:[a.name," (",a.symbol.toUpperCase(),")"]})]}),s.jsxs("div",{className:"crypto-details__stats",children:[s.jsxs("div",{className:"crypto-details__stat",children:[s.jsx("span",{className:"label",children:"Current Price:"}),s.jsxs("span",{className:"value",children:[a.current_price,"$"]})]}),s.jsxs("div",{className:"crypto-details__stat",children:[s.jsx("span",{className:"label",children:"Market Cap Rank:"}),s.jsx("span",{className:"value",children:a.market_cap_rank})]}),s.jsxs("div",{className:"crypto-details__stat",children:[s.jsx("span",{className:"label label__24high",children:"24h High:"}),s.jsxs("span",{className:"value",children:[a.high_24h,"$"]})]}),s.jsxs("div",{className:"crypto-details__stat",children:[s.jsx("span",{className:"label label__24low",children:"24h Low:"}),s.jsxs("span",{className:"value",children:[a.low_24h,"$"]})]}),s.jsxs("div",{className:"crypto-details__stat",children:[s.jsx("span",{className:"label",children:"Price Change 24h:"}),s.jsxs("span",{className:`value ${a.price_change_percentage_24h>=0?"positive":"negative"}`,children:[a.price_change_percentage_24h.toFixed(2),"%"]})]})]}),s.jsx("button",{className:"back-details-btn",onClick:()=>n("/home"),children:"Back"})]}):s.jsx("div",{children:"No data available"})};export{_ as default};

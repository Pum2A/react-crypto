const __vite__fileDeps=["assets/Crypto-a772IUcW.js","assets/index-Dwi03aNs.js","assets/index-3PAyort1.css","assets/Crypto-CVwDcdy_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c as f,j as e,r as o,_ as b,C as I}from"./index-Dwi03aNs.js";const P=f(e.jsx("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos"),M=f(e.jsx("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos"),y="_homeMain_16kz0_13",k="_headerTextContainer_16kz0_19",B="_flexContainer_16kz0_32",z="_flexItemOrange_16kz0_38",w="_flexItemGray_16kz0_49",S="_columnContent_16kz0_60",L="_columnTextContent_16kz0_67",E="_columnImage_16kz0_112",T="_columnSecondContent_16kz0_119",A="_cryptoCurrenciesImages_16kz0_128",H="_columnPremiumMembership_16kz0_140",D="_columnPremiumMembershipBlock_16kz0_147",F="_columnHeaderContainer_16kz0_173",G="_columnPremiumMembershipName_16kz0_182",O="_cryptoCurrencies_16kz0_128",R="_columnPremiumMembershipPrice_16kz0_221",$="_columnPremiumMembershipBtnContainer_16kz0_224",W="_flexItem_16kz0_38",n={homeMain:y,headerTextContainer:k,flexContainer:B,flexItemOrange:z,flexItemGray:w,columnContent:S,columnTextContent:L,columnImage:E,columnSecondContent:T,cryptoCurrenciesImages:A,columnPremiumMembership:H,columnPremiumMembershipBlock:D,columnHeaderContainer:F,columnPremiumMembershipName:G,cryptoCurrencies:O,columnPremiumMembershipPrice:R,columnPremiumMembershipBtnContainer:$,flexItem:W},J="/assets/ethLogo-CboUB31v.png",V="_btnContainer_133a0_1",U="_sliderBtn_133a0_12",q="_imageWrapper_133a0_35",K="_imageItem_133a0_45",l={btnContainer:V,sliderBtn:U,imageWrapper:q,imageItem:K};function X({imageUrls:c,imageNames:r}){const[a,h]=o.useState(0),m=4,C=5e3;function p(){h(i=>i+m>=c.length?0:i+m)}function j(){h(i=>i-m<0?c.length-m:i-m)}const _=c.slice(a,a+m),g=r.slice(a,a+m);return o.useEffect(()=>{const i=setInterval(()=>{p()},C);return()=>clearInterval(i)},[a]),e.jsxs("div",{className:l.sliderContainer,children:[e.jsx("div",{className:l.imageWrapper,children:_.map((i,d)=>e.jsxs("div",{className:l.imageItem,children:[e.jsx("img",{src:i,alt:`Logo ${a+d+1}`,className:l.image}),e.jsx("div",{className:l.imageName,children:g[d]})]},d))}),e.jsxs("div",{className:l.btnContainer,children:[e.jsx(P,{className:l.sliderBtn,onClick:j}),e.jsx(M,{className:l.sliderBtn,onClick:p})]})]})}o.lazy(()=>b(()=>import("./Crypto-a772IUcW.js"),__vite__mapDeps([0,1,2,3])));const ee=({searchQuery:c})=>{const{cryptoData:r,loading:a,error:h,favorites:m}=o.useContext(I),[C,p]=o.useState([]),[j,_]=o.useState([]),[g,i]=o.useState([]),[d,Y]=o.useState("all"),[x,Z]=o.useState("default"),v=r.map(s=>s.image),N=r.map(s=>s.symbol);return o.useEffect(()=>{if(r.length>0){let s=[...r];c&&(d==="highMarketCap"?s=s.sort((t,u)=>u.market_cap-t.market_cap):d==="lowMarketCap"&&(s=s.sort((t,u)=>t.market_cap-u.market_cap)),x==="priceAsc"?s=s.sort((t,u)=>t.current_price-u.current_price):x==="priceDesc"&&(s=s.sort((t,u)=>u.current_price-t.current_price))),i(s)}},[r,d,x,c]),o.useEffect(()=>{if(r.length>0){const s=[...r].sort(()=>.5-Math.random());p(s.slice(0,5)),_(s.slice(5))}},[r]),o.useEffect(()=>{if(c){const s=r.filter(t=>t.name.toLowerCase().includes(c.toLowerCase())||t.symbol.toLowerCase().includes(c.toLowerCase()));i(s)}else i(r)},[c,r]),a?e.jsx("div",{children:"Loading..."}):h?e.jsxs("div",{children:["Error: ",h]}):!Array.isArray(r)||r.length===0?(console.log("Crypto data is not an array or is empty:",r),e.jsx("div",{children:"No data available"})):([...r].sort((s,t)=>t.high_24h-s.high_24h),[...r].sort((s,t)=>s.low_24h-t.low_24h),[...r].sort((s,t)=>t.price_change_24h-s.price_change_24h),console.log("Rendering Home component with favorites:",m),e.jsx(e.Fragment,{children:e.jsx("div",{className:n.homeMain,children:e.jsxs("div",{className:n.flexContainer,children:[e.jsx("div",{className:n.flexItemOrange,children:e.jsxs("div",{className:n.columnContent,children:[e.jsxs("div",{className:n.columnTextContent,children:[e.jsx("h3",{children:"Join the Biggest Cryptocurrency Community!"}),e.jsx("p",{children:"Join our Community on Discord and Twitter"}),e.jsxs("span",{children:[e.jsx("button",{children:"Discord"}),e.jsx("button",{children:"Twitter"})]})]}),e.jsx("div",{className:n.columnImage,children:e.jsx("img",{src:J,alt:"Ethereum Logo"})})]})}),e.jsx("div",{className:n.flexItemGray,children:e.jsxs("div",{className:n.columnSecondContent,children:[e.jsx("div",{className:n.columnHeaderContainer,children:e.jsx("p",{children:"Membership"})}),e.jsxs("div",{className:n.columnPremiumMembership,children:[e.jsxs("div",{className:n.columnPremiumMembershipBlock,children:[e.jsx("div",{className:n.columnPremiumMembershipName,children:e.jsx("span",{children:"Premium "})}),e.jsx("div",{className:n.columnPremiumMembershipPrice,children:e.jsx("span",{children:"$9.99"})}),e.jsx("div",{className:n.columnPremiumMembershipBtnContainer,children:e.jsx("button",{children:"Buy"})})]}),e.jsxs("div",{className:n.columnPremiumMembershipBlock,children:[e.jsx("div",{className:n.columnPremiumMembershipName,children:e.jsx("span",{children:"VIP "})}),e.jsx("div",{className:n.columnPremiumMembershipPrice,children:e.jsx("span",{children:"$15.99"})}),e.jsx("div",{className:n.columnPremiumMembershipBtnContainer,children:e.jsx("button",{children:"Buy"})})]}),e.jsxs("div",{className:n.columnPremiumMembershipBlock,children:[e.jsx("div",{className:n.columnPremiumMembershipName,children:e.jsx("span",{children:"Sponsor "})}),e.jsx("div",{className:n.columnPremiumMembershipPrice,children:e.jsx("span",{children:"$19.99"})}),e.jsx("div",{className:n.columnPremiumMembershipBtnContainer,children:e.jsx("button",{children:"Buy"})})]})]})]})}),e.jsx("div",{className:n.flexItemGray,children:e.jsxs("div",{className:n.columnSecondContent,children:[e.jsx("div",{className:n.columnHeaderContainer,children:e.jsx("p",{className:n.cryptoCurrencies,children:"Cryptocurrencies"})}),e.jsx("div",{className:n.cryptoCurrenciesImages,children:e.jsx(X,{imageUrls:v,imageNames:N})})]})})]})})}))};export{ee as default};

(this.webpackJsonpmyreactproject=this.webpackJsonpmyreactproject||[]).push([[0],[,,,,,,,,,function(e,c,s){},function(e,c,s){},function(e,c,s){},,function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),a=s(4),r=s.n(a),i=(s(9),s.p,s(10),s(11),s(0));var d=function(e){return Object(i.jsx)("div",{className:"cart-wrapper",children:Object(i.jsx)("button",{children:"Cart"})})},l=s(3);s(13),s(14);var j=function(e){var c=e.items;return console.log(c),Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("div",{className:"img-wrapper1",children:Object(i.jsx)("img",{src:c.searchImage,alt:"product-img"})}),Object(i.jsxs)("div",{className:"content-wrapper1",children:[Object(i.jsx)("h3",{className:"brand-name1",children:c.brand}),Object(i.jsxs)("h4",{className:"brand-desc1",children:[" ",c.additionalInfo]}),Object(i.jsxs)("h5",{children:[Object(i.jsxs)("span",{className:"b-d-price1",children:["Rs. ",c.price]}),c.discountDisplayLabel?Object(i.jsxs)("span",{className:"b-price1",children:["Rs. ",c.mrp]}):null,Object(i.jsx)("span",{className:"b-discount1",children:c.discountDisplayLabel})]}),Object(i.jsx)("button",{className:"add-to-cart-btn1",children:"Add to Cart"})]})]})},o=function(e){var c=e.data,s=e.item,t=e.index,n=e.setItem;function a(){var e=c[t];console.log("hi"),console.log(e),n(e)}return Object(i.jsxs)("div",{className:"each-item",children:[Object(i.jsx)("div",{className:"img-wrapper",onClick:a,children:Object(i.jsx)("img",{src:s.searchImage,alt:"product-img"})}),Object(i.jsxs)("div",{className:"content-wrapper",children:[Object(i.jsx)("h3",{className:"brand-name",onClick:a,children:s.brand}),Object(i.jsxs)("h4",{className:"brand-desc",onClick:a,children:[" ",s.additionalInfo]}),Object(i.jsxs)("h5",{children:[Object(i.jsxs)("span",{className:"b-d-price",children:["Rs. ",s.price]}),s.discountDisplayLabel?Object(i.jsxs)("span",{className:"b-price",children:["Rs. ",s.mrp]}):null,Object(i.jsx)("span",{className:"b-discount",children:s.discountDisplayLabel})]}),Object(i.jsx)("button",{className:"add-to-cart-btn",children:"Add to Cart"})]})]})};s(15);var b=function(){var e=n.a.useState(null),c=Object(l.a)(e,2),s=c[0],t=c[1],a=n.a.useState(null),r=Object(l.a)(a,2),d=r[0],b=r[1];return n.a.useEffect((function(){fetch("https://demo7242716.mockable.io/products").then((function(e){return e.json()})).then((function(e){return t(e.products)})),console.log(s)}),[]),Object(i.jsx)("div",{className:"each-item-wrapper",children:s?d?Object(i.jsx)(j,{items:d}):s.map((function(e,c){return Object(i.jsx)(o,{setItem:b,item:e,index:c,data:s})})):Object(i.jsx)("div",{children:"Loading"})})};var m=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)("div",{className:"right-header",children:Object(i.jsx)(d,{})})}),Object(i.jsx)("div",{className:"main-content",children:Object(i.jsx)(b,{})})]})},h=document.getElementById("root");r.a.render(Object(i.jsx)(t.StrictMode,{children:Object(i.jsx)(m,{})}),h)}],[[16,1,2]]]);
//# sourceMappingURL=main.bce1f559.chunk.js.map
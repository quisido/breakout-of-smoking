(this["webpackJsonpbreakout-of-smoking"]=this["webpackJsonpbreakout-of-smoking"]||[]).push([[0],[,,,,function(n,t,e){n.exports=e(14)},,,,,function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(3),c=e.n(o),i=e(1),u=(e(9),"\n0:19,4,19\n0:19,4,19\n0:19,4,19\n0:19,4,19\n0:11,5,3,4,3,5,11\n0:9,8,2,4,2,8,9\n0:8,9,2,4,2,9,8\n0:7,11,1,4,1,11,7\n0:6,12,1,4,1,12,6\n0:5,13,1,4,1,13,5\n0:5,13,1,4,1,13,5\n0:4,34,4\n0:3,36,3\n0:3,36,3\n0:2,18,2,18,2\n0:2,16,6,16,2\n0:2,16,6,16,2\n0:1,17,6,17,1\n0:1,17,6,17,1\n0:1,17,6,17,1\n0:1,17,6,17,1\n0:1,17,6,17,1\n0:1,17,6,17,1\n1:18,6,18\n1:18,6,18\n1:18,6,18\n1:17,8,17\n1:17,8,17\n1:17,8,17\n1:16,10,16\n1:15,12,15\n1:14,14,14\n1:9,24,9\n0:1,4,32,4,1\n".trim().split("\n").reduce((function(n,t){var e=[],r=t.split(":"),a=Object(i.a)(r,2),o=a[0],c=a[1].split(",").map((function(n){return parseInt(n,10)})),u="1"===o,s=!0,l=!1,f=void 0;try{for(var d,m=c[Symbol.iterator]();!(s=(d=m.next()).done);s=!0){for(var h=d.value,v=0;v<h;v++)e.push(!!u);u=!u}}catch(p){l=!0,f=p}finally{try{s||null==m.return||m.return()}finally{if(l)throw f}}return n.push(e),n}),[])),s=386/530;function l(){var n=document.body.getBoundingClientRect(),t=n.height,e=n.width;return e/t>s?t*s:e}var f=function(n,t){return t?n+1:n};function d(n,t){return n+t.reduce(f,0)}var m=16,h=u.reduce(d,0),v=64;var p=37,w=39,b=0;e(10);var k=a.a.memo((function(n){var t=n.bottomLeft,e=n.bottomRight,r=n.topLeft,o=n.topRight,c=n.x,i=n.y,u=["block"];return t&&u.push("block__bottom-left"),e&&u.push("block__bottom-right"),r&&u.push("block__top-left"),o&&u.push("block__top-right"),a.a.createElement("div",{className:"block",style:{left:"".concat(c,"em"),top:"".concat(i,"em")}})}));e(11);function g(n){var t=n.left,e=n.width,r=a.a.useMemo((function(){return{left:"".concat(t,"px"),width:"".concat(e,"px")}}),[t,e]);return a.a.createElement("div",{className:"cigarette",style:r},a.a.createElement("div",{className:"butt"}),a.a.createElement("div",{className:"lit"}))}e(12);function E(n){var t=n.grid;return a.a.createElement("div",{className:"lungs"},t.map((function(n,t){return a.a.createElement("div",{className:"lungs__row",key:t},n.map((function(n,e){return n?a.a.createElement(k,{bottomLeft:!1,bottomRight:!1,key:e,topLeft:!1,topRight:!1,x:e,y:t}):null})))})))}e(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement((function(){var n=a.a.useState(u),t=Object(i.a)(n,1)[0],e=a.a.useState([]),r=Object(i.a)(e,2),o=r[0],c=r[1],f=a.a.useState(l),k=Object(i.a)(f,2),y=k[0],x=k[1],L=function(n){return a.a.useMemo((function(){return m+n.reduce(d,0)/h*(v-m)}),[n])}(t),_=function(n){return a.a.useMemo((function(){return{maxHeight:"".concat(Math.ceil(n/s),"px"),minHeight:"".concat(Math.ceil(n/s),"px"),maxWidth:"".concat(n,"px"),minWidth:"".concat(n,"px")}}),[n])}(y),M=a.a.useCallback((function(n){switch(n.keyCode){case p:o.includes(p)||c((function(n){return n.concat([p])}));break;case w:o.includes(w)||c((function(n){return n.concat([w])}))}}),[o]),N=a.a.useCallback((function(n){switch(n.keyCode){case p:o.includes(p)&&c((function(n){return n.filter((function(n){return n!==p}))}));break;case w:o.includes(w)&&c((function(n){return n.filter((function(n){return n!==w}))}))}}),[o]),C=a.a.useCallback((function(){var n=l();y!==n&&x(n)}),[y]);a.a.useEffect((function(){return window.addEventListener("keydown",M),function(){window.removeEventListener("keydown",M)}}),[M]),a.a.useEffect((function(){return window.addEventListener("keyup",N),function(){window.removeEventListener("keyup",N)}}),[N]);var j=a.a.useState((function(){return Math.round(y-L)/2})),O=Object(i.a)(j,2),R=O[0],S=O[1];return a.a.useEffect((function(){if(o.length>0){var n=o[o.length-1],t=y-L,e=n===p?-4:4,r=window.setInterval((function(){S((function(n){return Math.max(b,Math.min(t,n+e))}))}),20);return function(){window.clearInterval(r)}}}),[o,L,y]),a.a.useEffect((function(){return window.addEventListener("resize",C),function(){window.removeEventListener("resize",C)}}),[C]),a.a.createElement("div",{className:"app",style:_},a.a.createElement(E,{grid:t}),a.a.createElement(g,{left:R,width:L}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.465bd277.chunk.js.map
(this["webpackJsonpwhiteboard-klaodio"]=this["webpackJsonpwhiteboard-klaodio"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),a=n.n(c),i=n(7),r=n.n(i),s=(n(13),n(14),n(2)),u=n(3),d=n(5),l=n(4),h=(n(15),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.drawOnCanvas()}},{key:"drawOnCanvas",value:function(){var e=document.querySelector("#board"),t=e.getContext("2d"),n=document.querySelector("#sketch"),o=getComputedStyle(n);e.width=parseInt(o.getPropertyValue("width")),e.height=parseInt(o.getPropertyValue("height"));var c={x:0,y:0},a={x:0,y:0};e.addEventListener("mousemove",(function(e){a.x=c.x,a.y=c.y,c.x=e.pageX-this.offsetLeft,c.y=e.pageY-this.offsetTop}),!1),t.lineWidth=5,t.lineJoin="round",t.lineCap="round",t.strokeStyle="blue",e.addEventListener("mousedown",(function(t){e.addEventListener("mousemove",i,!1)}),!1),e.addEventListener("mouseup",(function(){e.removeEventListener("mousemove",i,!1)}),!1);var i=function(){t.beginPath(),t.moveTo(a.x,a.y),t.lineTo(c.x,c.y),t.closePath(),t.stroke()}}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"sketch",id:"sketch",children:[Object(o.jsx)("canvas",{className:"board",id:"board"}),";"]})}}]),n}(a.a.Component)),b=(n(16),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"color-picker-container",children:Object(o.jsx)("input",{type:"color"})}),Object(o.jsx)("div",{className:"board-container",children:Object(o.jsx)(h,{})})]})}}]),n}(a.a.Component));var v=function(){return Object(o.jsx)(b,{})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),j()}],[[17,1,2]]]);
//# sourceMappingURL=main.ebef73a1.chunk.js.map
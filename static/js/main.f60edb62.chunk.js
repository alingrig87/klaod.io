(this["webpackJsonpwhiteboard-klaodio"]=this["webpackJsonpwhiteboard-klaodio"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(7),o=n.n(i),s=(n(47),n(48),n(16)),l=n(17),j=n(22),u=n(20),d=(n(49),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.drawOnCanvas()}},{key:"drawOnCanvas",value:function(){var e=document.querySelector("#board"),t=e.getContext("2d"),n=document.querySelector("#sketch"),a=getComputedStyle(n);e.width=parseInt(a.getPropertyValue("width")),e.height=parseInt(a.getPropertyValue("height"));var c={x:0,y:0},r={x:0,y:0};e.addEventListener("mousemove",(function(e){r.x=c.x,r.y=c.y,c.x=e.pageX-this.offsetLeft,c.y=e.pageY-this.offsetTop}),!1),t.lineWidth=3,t.lineJoin="round",t.lineCap="round",t.strokeStyle="blue",e.addEventListener("mousedown",(function(t){e.addEventListener("mousemove",i,!1)}),!1),e.addEventListener("mouseup",(function(){e.removeEventListener("mousemove",i,!1)}),!1);var i=function(){t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(c.x,c.y),t.closePath(),t.stroke()}}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"sketch",id:"sketch",children:[Object(a.jsx)("canvas",{className:"board",id:"board"}),";"]})}}]),n}(r.a.Component)),b=n(29),h=(n(50),n(33)),O=n.n(h),x=n(78),f=n(36),v=n.n(f),m=n(35),p=n.n(m),y=n(37),g=n.n(y),k=n(39),C=n.n(k),w=n(38),L=n.n(w),E=n(34),P=n.n(E),S=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(b.a,{bg:"light",fixed:"top",children:[Object(a.jsx)(b.a.Brand,{href:"#home",children:Object(a.jsx)("h2",{children:"kla\u2b54di\u2b54"})}),Object(a.jsxs)(b.a.Collapse,{className:"justify-content-center",children:[Object(a.jsx)(x.a,{"aria-label":"creion",color:"inherit",children:Object(a.jsx)(O.a,{})}),Object(a.jsx)(x.a,{"aria-label":"linie",color:"inherit",children:Object(a.jsx)(P.a,{})}),Object(a.jsx)(x.a,{"aria-label":"culoare",color:"inherit",children:Object(a.jsx)(p.a,{})}),Object(a.jsx)(x.a,{"aria-label":"triunghi",color:"inherit",children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(x.a,{"aria-label":"cerc",color:"inherit",children:Object(a.jsx)(g.a,{})}),Object(a.jsx)(x.a,{"aria-label":"dreptunghi",color:"inherit",children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(x.a,{"aria-label":"delete",color:"inherit",children:Object(a.jsx)(C.a,{})})]})]})}}]),n}(c.Component),N=(n(59),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:"board-container",children:Object(a.jsx)(d,{})})]})}}]),n}(r.a.Component));var T=function(){return Object(a.jsx)(N,{})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),F()}},[[61,1,2]]]);
//# sourceMappingURL=main.f60edb62.chunk.js.map
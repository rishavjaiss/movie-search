(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(11),a(12),a(2)),o=a.n(s),i=a(5),m=a(1);a(14),a(15);function u(e){var t=e.movie;return r.a.createElement("div",{className:"card",key:t.id},r.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+"poster"}),r.a.createElement("div",{className:"card--content"},r.a.createElement("h3",{className:"card--title"},t.title),r.a.createElement("p",null,r.a.createElement("small",null,"RELEASE DATE: ",t.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"RATING: ",t.vote_average)),r.a.createElement("p",{className:"card--desc"},t.overview)))}function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginTop:"10%",color:"white"}},"Getting your results.."),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginTop:"10px",color:"white"}},r.a.createElement("i",{className:"fas fa-spinner fa-spin fa-5x"})))}function p(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),p=s[0],f=s[1],d=Object(n.useState)(!1),v=Object(m.a)(d,2),E=v[0],g=v[1],b=Object(n.useState)("Let's Go!"),y=Object(m.a)(b,2),w=y[0],N=y[1],j=function(e){return new Promise((function(t){return setTimeout(t,e)}))},x=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r,c,l,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1e3,t.preventDefault(),g(!0),e.next=5,j(n);case 5:return r="https://api.themoviedb.org/3/search/movie?api_key=".concat("44ca07706ce10687a17e485b9a3166ca","&language=en-US&query=").concat(a,"&page=1&include_adult=false"),e.prev=7,e.next=10,fetch(r);case 10:return c=e.sent,e.next=13,c.json();case 13:l=e.sent,f(l.results),g(!1),0===l.results.length&&N("Oops! No Results Found"),document.getElementById("form").reset(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[7,20]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",id:"form",onSubmit:x},r.a.createElement("label",{htmlFor:"query",className:"label"},"Movie Name"),r.a.createElement("input",{type:"text",className:"input",name:"query",placeholder:"i.e Jurassic Park",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"button"},"Search")),E?r.a.createElement(h,null):p.length>0?r.a.createElement("div",{className:"card-list"},p.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement(u,{movie:e,key:e.id})}))):r.a.createElement("h2",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginTop:"10%",color:"#fcefbf"}},w))}var f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Search Movies!"),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.27f921d2.chunk.js.map
(this["webpackJsonpthe-movie-app"]=this["webpackJsonpthe-movie-app"]||[]).push([[0],{12:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),s=r(5),n=r.n(s),i=(r(12),r(0)),o=function(){return Object(i.jsxs)("footer",{className:"Footer",children:["Code by ",Object(i.jsx)("a",{href:"https://github.com",children:"Haron Acosta"}),"."," ",Object(i.jsx)("span",{children:" Movies content from"}),Object(i.jsx)("a",{href:"https://www.themoviedb.org/",children:Object(i.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg",alt:"The Movie DB"})})]})},d=function(){return Object(i.jsx)("header",{className:"header",children:"The Movie App"})},b=r(2),j=r(7),l=r(4),u=r.n(l),v=r(6),h=function(){var e=Object(v.a)(u.a.mark((function e(t){var r,c,a,s,n,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","3b5c31ed638d62a93f1bab6729057395",r="".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?api_key=").concat("3b5c31ed638d62a93f1bab6729057395","&language=en-US"),c="https://image.tmdb.org/t/p/w500/",e.next=6,fetch(r);case 6:return a=e.sent,e.next=9,a.json();case 9:return s=e.sent,n=s.results,i=n.map((function(e){var t=e.id,r=e.title,a=e.poster_path;return{id:t,title:r,poster:"".concat(c).concat(a)}})),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=Object(c.useState)({movies:[],loading:!0,error:!1}),r=Object(j.a)(t,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){h(e).then((function(e){s(Object(b.a)(Object(b.a)({},a),{},{movies:e,loading:!1}))})).catch((function(){return s(Object(b.a)(Object(b.a)({},a),{},{error:!0}))}))}),[e]),a},m=function(e){var t=e.url,r=e.alt;return Object(i.jsx)("img",{className:"image",src:t,alt:r})},f=function(e){var t=e.id,r=e.title,c=e.poster;return Object(i.jsxs)("div",{className:"Movie",children:[Object(i.jsx)("div",{className:"Movie__image",children:Object(i.jsx)(m,{url:c,alt:r})}),Object(i.jsx)("div",{className:"Movie__title",id:t,children:r})]})},O=function(e){var t=e.movies;return Object(i.jsxs)("div",{className:"ListMovies",children:[Object(i.jsx)("div",{className:"ListMovies__title",children:"POPULAR MOVIES"}),t.map((function(e){var t=e.title,r=e.id,c=e.poster;return Object(i.jsx)(f,{title:t,id:r,poster:c},r)}))]})};var x=function(){var e=p("popular"),t=e.movies,r=e.loading,c=e.error;return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{}),r&&!c?Object(i.jsx)("div",{className:"Loading",children:"Loading movies..."}):Object(i.jsx)(O,{movies:t}),c&&Object(i.jsx)("div",{className:"error",children:"Error, please reload"}),Object(i.jsx)(o,{})]})};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ec8a074f.chunk.js.map
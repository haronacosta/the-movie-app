(this["webpackJsonpthe-movie-app"]=this["webpackJsonpthe-movie-app"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),r=a(10),i=a.n(r),n=a(5),o=a(4),l=a(2),j=a(1),p=function(){return Object(j.jsxs)("footer",{className:"Footer",children:["Code by"," ",Object(j.jsx)("a",{className:"Footer__url",href:"https://github.com/haronacosta",target:"_blank",rel:"noreferrer",children:"Haron Acosta"}),". ",Object(j.jsx)("span",{className:"Footer__text",children:" Movies content from"}),Object(j.jsx)("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{className:"Footer__image",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg",alt:"The Movie DB"})})]})},b=function(e){var t=e.setCategory,a=Object(l.e)();return Object(c.useEffect)((function(){var e=""===a.pathname.split("/the-movie-app/")[1]?"popular":a.pathname.split("/the-movie-app/")[1];t(e)}),[a]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("nav",{className:"Menu",children:Object(j.jsxs)("ul",{className:"Menu__items",children:[Object(j.jsx)("li",{className:"Menu__item",children:Object(j.jsx)(n.b,{className:"item--btn",to:"/the-movie-app/popular",children:"THE MOVIE APP"})}),Object(j.jsx)("li",{className:"Menu__item",children:Object(j.jsx)(n.c,{className:"item--btn",to:"/the-movie-app/popular",children:"Popular Movies"})}),Object(j.jsx)("li",{className:"Menu__item",children:Object(j.jsx)(n.c,{className:"item--btn",to:"/the-movie-app/upcoming",children:"Upcoming Movies"})})]})})})})},m=a(6),h=a(9),u=a.n(h),d=a(11),v=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,c,s,r,i,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","3b5c31ed638d62a93f1bab6729057395",a="".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?api_key=").concat("3b5c31ed638d62a93f1bab6729057395","&language=en-US"),c="https://image.tmdb.org/t/p/w500/",e.next=6,fetch(a);case 6:return s=e.sent,e.next=9,s.json();case 9:return r=e.sent,i=r.results,n=i.map((function(e){var t=e.id,a=e.title,s=e.poster_path;return{id:t,title:a,poster:"".concat(c).concat(s)}})),e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=Object(c.useState)({movies:[],loading:!0,error:!1}),a=Object(o.a)(t,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){v(e).then((function(e){r(Object(m.a)(Object(m.a)({},s),{},{movies:e,loading:!1}))})).catch((function(){return r(Object(m.a)(Object(m.a)({},s),{},{error:!0}))}))}),[e]),s},x=function(e){var t=e.url,a=e.alt;return Object(j.jsx)("img",{className:"image",src:t,alt:a})},f=function(e){var t=e.id,a=e.title,c=e.poster;return Object(j.jsxs)("div",{className:"Movie",children:[Object(j.jsx)("div",{className:"Movie__image",children:Object(j.jsx)(x,{url:c,alt:a})}),Object(j.jsx)("div",{className:"Movie__title",id:t,children:a})]})},g=function(e){var t=e.movies,a=e.category;return Object(j.jsxs)("div",{className:"ListMovies",children:[Object(j.jsx)("div",{className:"ListMovies__title",children:"popular"===a?"Popular Movies":"Now Playing Movies"}),t.map((function(e){var t=e.title,a=e.id,c=e.poster;return Object(j.jsx)(f,{title:t,id:a,poster:c},a)}))]})};a(18);var _=function(){var e=Object(l.e)(),t=Object(c.useState)(""===e.pathname.split("/the-movie-app/")[1]?"popular":e.pathname.split("/the-movie-app/")[1]),a=Object(o.a)(t,2),s=a[0],r=a[1],i=O(s),n=i.movies,m=i.loading,h=i.error;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{setCategory:r}),m&&!h?Object(j.jsx)("div",{className:"Loading",children:"Loading movies..."}):Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/the-movie-app",exact:!0,element:Object(j.jsx)(g,{movies:n,category:s})}),Object(j.jsx)(l.a,{path:"/the-movie-app/upcoming",exact:!0,element:Object(j.jsx)(g,{movies:n,category:s})}),Object(j.jsx)(l.a,{path:"/the-movie-app/popular",exact:!0,element:Object(j.jsx)(g,{movies:n,category:s})})]}),h&&Object(j.jsx)("div",{className:"error",children:"Error, please reload"}),Object(j.jsx)(p,{})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(n.a,{children:Object(j.jsx)(_,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fc919dc3.chunk.js.map
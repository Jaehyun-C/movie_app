(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{62:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(25),r=s.n(c),i=s(10),o=s(2),j=s(1);var l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.b,{to:"/",children:"Home"}),Object(j.jsx)(i.b,{to:"/about",children:"About"})]})};var m=function(){return Object(j.jsx)("span",{children:"I built this Page :)"})},d=s(15),u=s.n(d),b=s(27),v=s(28),h=s(29),p=s(32),x=s(31),O=s(30),g=s.n(O);var _=function(e){var t=e.year,s=e.title,n=e.summary,a=e.poster,c=e.genres;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:a,alt:s,title:s}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:s}),Object(j.jsx)("h5",{className:"movie__year",children:t}),Object(j.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(j.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"summary",children:[n.slice(0,140)," ..."]})]})]})},f=(s(62),function(e){Object(p.a)(s,e);var t=Object(x.a)(s);function s(){var e;Object(v.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovie=Object(b.a)(u.a.mark((function t(){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(j.jsx)("section",{className:"contaner",children:t?Object(j.jsx)("div",{class:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"loading..."})}):Object(j.jsx)("div",{className:"movies",children:s.map((function(e){return Object(j.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));var y=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(j.jsx)(o.a,{path:"/about",component:m})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e5c42fc3.chunk.js.map
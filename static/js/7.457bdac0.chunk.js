(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{113:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(81),a=r(0),i=r(2),c=r(11),o=r(114),s=r.n(o),l=r(1);function u(t){var e=t.movie,r=t.title,o=Object(a.useState)([]),u=Object(n.a)(o,2),m=(u[0],u[1]),f=Object(i.f)();return Object(a.useEffect)((function(){m(e)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:[r," "]}),Object(l.jsx)("ul",{className:s.a.ImageGallery,children:e&&e.map((function(t){var e=t.title,r=t.id,n=t.poster_path;t.name;return Object(l.jsx)("li",{className:s.a.ImageGalleryItem,children:Object(l.jsxs)(c.b,{to:{pathname:"/movies/".concat(r),state:{ref:f.location.pathname,search:f.location.search}},children:[Object(l.jsx)("p",{children:e}),Object(l.jsx)("img",{className:s.a.ImageGalleryItem_image,src:"https://image.tmdb.org/t/p/w500".concat(n),alt:e,width:"150",title:e})]})},r)}))})]})}},114:function(t,e,r){t.exports={ImageGallery:"MoviesList_ImageGallery__1_Y0g",ImageGalleryItem:"MoviesList_ImageGalleryItem__2iiwg",ImageGalleryItem_image:"MoviesList_ImageGalleryItem_image__1P4cF"}},516:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return s}));var n=r(81),a=r(0),i=r(32),c=r(113),o=r(1);function s(){var t=Object(a.useState)([]),e=Object(n.a)(t,2),r=e[0],s=e[1];return Object(a.useEffect)((function(){Object(i.d)().then(s)}),[]),Object(o.jsxs)(o.Fragment,{children:["  ",Object(o.jsx)(c.a,{movie:r,title:"Todays Popular:"})," "]})}},81:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(n=(c=o.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=7.457bdac0.chunk.js.map
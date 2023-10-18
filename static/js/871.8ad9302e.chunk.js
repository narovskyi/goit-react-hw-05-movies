"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871],{723:function(n,e,t){t.d(e,{Z:function(){return v}});var o,r,i,a,c,s=t(689),l=t(168),u=t(867),p=t(87),d=t(652),x=u.zo.img(o||(o=(0,l.Z)(["\n    display: block;\n    min-width: 200px;\n    min-height: 300px;\n    background-image: url(",");\n    background-size: cover;\n"])),d),f=u.zo.h3(r||(r=(0,l.Z)(["\n    text-align: center;\n    margin: 0px;\n    padding: 16px;\n"]))),h=u.zo.ul(i||(i=(0,l.Z)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin: -15px; \n    list-style: none;\n"]))),g=(0,u.zo)(p.rU)(a||(a=(0,l.Z)(["\n    color: #190530;\n    font-size: 15px;\n    text-decoration: none;\n    line-height: 25px;\n"]))),m=u.zo.li(c||(c=(0,l.Z)(["\n    display: flex;\n    margin: 15px;\n    flex-direction: column;\n    flex-basis: 200px;\n    border-radius: 10px;\n    overflow: hidden;\n    transition-duration: 300ms;\n    &:hover {\n        transform: scale(1.05);\n        box-shadow: 0px 1px 6px 0px rgba(25,5,48,0.28);\n    }\n"]))),b=t(184);function v(n){var e=n.movies,t=n.path,o=(0,s.TH)();return(0,b.jsx)(b.Fragment,{children:e&&(0,b.jsx)(h,{children:e.map((function(n){var e=n.title,r=n.id,i=n.poster_path;return(0,b.jsxs)(m,{children:[(0,b.jsx)(g,{to:"".concat(t).concat(r),state:{from:o},children:(0,b.jsx)(x,{src:"https://image.tmdb.org/t/p/w200".concat(i),alt:""})}),(0,b.jsx)(g,{to:"".concat(t).concat(r),state:{from:o},children:(0,b.jsx)(f,{children:e})})]},r)}))})})}},871:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var o,r,i,a=t(439),c=t(791),s=t(168),l=t(867),u=l.ZP.button(o||(o=(0,s.Z)(["\n    display: block;\n    border-right: none;\n    background-color: #fceaff;\n    border-radius: 10px 0px 0px 10px;\n    border: 3px solid #a06cd9;\n    border-right: none;\n    cursor: pointer;\n    svg {\n        display: block;\n        height: 30px;\n        width: 30px;\n        color: #190530;\n        &:active {\n            color: #a06cd9;\n        }\n    }\n    \n"]))),p=l.ZP.input(r||(r=(0,s.Z)(["\n    font-size: 20px;\n    color: #190530;\n    height: 40px;\n    width: 300px;\n    border-radius: 0px 10px 10px 0px;\n    border: 3px solid #a06cd9;\n    border-left: none;\n    background-color: #fceaff;\n    &:focus-visible {\n        outline: none;\n    }\n"]))),d=l.ZP.form(i||(i=(0,s.Z)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n"]))),x=t(820),f=t(87),h=t(184);function g(n){var e=n.setMovies,t=(0,c.useState)(""),o=(0,a.Z)(t,2),r=o[0],i=o[1],s=(0,f.lr)(),l=(0,a.Z)(s,2),g=l[0],m=l[1],b=(0,c.useState)(g.get("query")),v=(0,a.Z)(b,2),j=v[0],Z=v[1];return(0,c.useEffect)((function(){void 0!==j&&""!==j&&null!==j&&fetch("https://api.themoviedb.org/3/search/movie?api_key=b6e502cbaaa880d060a13b6a3192abd0&query=".concat(j,"&include_adult=false&language=en-US&page=1")).then((function(n){return n.json()})).then((function(n){console.log(n),e(n.results)})).catch((function(n){console.log(n)}))}),[j,e]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(d,{onSubmit:function(n){n.preventDefault(),Z(r.trim())},children:[(0,h.jsx)(u,{type:"submit",children:(0,h.jsx)(x.RB5,{})}),(0,h.jsx)(p,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:r,onChange:function(n){i(n.target.value),m({query:n.target.value})}})]})})}var m=t(723);function b(){var n=(0,c.useState)(),e=(0,a.Z)(n,2),t=e[0],o=e[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g,{setMovies:o}),t&&(0,h.jsx)(m.Z,{path:"",movies:t})]})}},652:function(n,e,t){n.exports=t.p+"static/media/no-image.9827a015760a00257152.jpg"}}]);
//# sourceMappingURL=871.8ad9302e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),l=a(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness :/."))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(148);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"WebGL fun 🥳"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},151:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8klEQVQ4y32UzytEURTH34yZDQsrFJOyQKwk2WDFiiQlGxvJ2kKGlBJK2dhQftTYSaz8AdbkRxMbhaSUBdGEaQzGG9/7nDN9586MW5/uveec+33nvnvuddLptGMwDX2RIw3jehAGhyABfsCt67qroFPjMPbTeidHDH0I7IjAf+0CYr2UgM+hiYp1gzdZ8A2+QErEFbVrW6FsfbaY3VyBWypP3FZGUMSqwbs4r8AgnHu0IAaewafML8EwYiIUM8Zb3iXHNtlbQQuoAGWgFnSCEvF30bo4qDTGBtnWt7dH1z2Q4IBToOkBmCxFLCH9nDFOy+RD+rAeFPALPsKzSUwdeKUsz43xmAyPoDinDPJnGZB+nQ4wZgxJqrlTLVAu+DxiXB3jVGYph+pLT8//nyj+sQdlOEuCnuOatmz+Y8gqdhXIArag+Pdpy3FjWBaD1tgi36Cse/rX++ljTdYOb4yxneroRcaT/FCYDO2DwrgD3Et8UvoNdepJ94NNGd/JI1Glr4rEToGodRX1ejarYJsYnkA53ZyoZgpBPYQF8X3JVvVXrdkvzYQ4IjIvLVAmfSSoWz0DQQ7WqzQjASdgHozovyPBAevVOdKPa8nZoj3gQb9Mp62CQ3R/l/TJyojRCWbVHhg1izVDWthosse8hn5J5jL8Atd1NDEq+UBQAAAAAElFTkSuQmCC",aspectRatio:1,src:"/webgl-fun/static/eb94bb97c3410733ce017b184d314723/f04ed/git-hub-mark-light-64px.png",srcSet:"/webgl-fun/static/eb94bb97c3410733ce017b184d314723/f04ed/git-hub-mark-light-64px.png 64w",sizes:"(max-width: 64px) 100vw, 64px"}}}}}},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(157),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"WebGL fun 🥳",description:"Just trying out WebGL.",author:"@maxbause"}}}}},154:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(147),c=a(151),u=a(155),d=a.n(u),m=function(){return i.a.createElement(s.b,{query:"1093581123",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:c})},p=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("div",{style:{width:"32px"}},i.a.createElement("a",{href:"https://github.com/maxbause",target:"_blank"},i.a.createElement(m,null)))))};p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var g=p,f=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Table of contents:"),i.a.createElement("ul",{className:"uk-list uk-list-bullet"},i.a.createElement("li",null,i.a.createElement(s.a,{to:"basic-renderer"},"Basic renderer"))))},h=(a(156),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement(f,null),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," ",i.a.createElement("a",{href:"https://github.com/maxbause"},"Max Bause"),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-404-tsx-4037b7599924a0065d28.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),l=a(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react","webgl","programming","basic","renderer"]}),r.a.createElement("h1",null,"Basic renderer"),r.a.createElement("canvas",{id:"basic-renderer",width:"400",height:"300"}))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(148);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"WebGL fun 🥳"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},151:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8klEQVQ4y32UzytEURTH34yZDQsrFJOyQKwk2WDFiiQlGxvJ2kKGlBJK2dhQftTYSaz8AdbkRxMbhaSUBdGEaQzGG9/7nDN9586MW5/uveec+33nvnvuddLptGMwDX2RIw3jehAGhyABfsCt67qroFPjMPbTeidHDH0I7IjAf+0CYr2UgM+hiYp1gzdZ8A2+QErEFbVrW6FsfbaY3VyBWypP3FZGUMSqwbs4r8AgnHu0IAaewafML8EwYiIUM8Zb3iXHNtlbQQuoAGWgFnSCEvF30bo4qDTGBtnWt7dH1z2Q4IBToOkBmCxFLCH9nDFOy+RD+rAeFPALPsKzSUwdeKUsz43xmAyPoDinDPJnGZB+nQ4wZgxJqrlTLVAu+DxiXB3jVGYph+pLT8//nyj+sQdlOEuCnuOatmz+Y8gqdhXIArag+Pdpy3FjWBaD1tgi36Cse/rX++ljTdYOb4yxneroRcaT/FCYDO2DwrgD3Et8UvoNdepJ94NNGd/JI1Glr4rEToGodRX1ejarYJsYnkA53ZyoZgpBPYQF8X3JVvVXrdkvzYQ4IjIvLVAmfSSoWz0DQQ7WqzQjASdgHozovyPBAevVOdKPa8nZoj3gQb9Mp62CQ3R/l/TJyojRCWbVHhg1izVDWthosse8hn5J5jL8Atd1NDEq+UBQAAAAAElFTkSuQmCC",aspectRatio:1,src:"/maxbause/webgl-fun/static/eb94bb97c3410733ce017b184d314723/f04ed/git-hub-mark-light-64px.png",srcSet:"/maxbause/webgl-fun/static/eb94bb97c3410733ce017b184d314723/f04ed/git-hub-mark-light-64px.png 64w",sizes:"(max-width: 64px) 100vw, 64px"}}}}}},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(157),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"WebGL fun 🥳",description:"Just trying out WebGL.",author:"@maxbause"}}}}},154:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(147),s=a(151),u=a(155),d=a.n(u),m=function(){return i.a.createElement(o.b,{query:"1093581123",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},p=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("div",{style:{width:"32px"}},i.a.createElement("a",{href:"https://github.com/maxbause",target:"_blank"},i.a.createElement(m,null)))))};p.propTypes={siteTitle:c.a.string},p.defaultProps={siteTitle:""};var g=p,b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Table of contents:"),i.a.createElement("ul",{className:"uk-list uk-list-bullet"},i.a.createElement("li",null,i.a.createElement(o.a,{to:"basic-renderer"},"Basic renderer"))))},h=(a(156),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement(b,null),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," ",i.a.createElement("a",{href:"https://github.com/maxbause"},"Max Bause"),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-basic-renderer-tsx-73a15772b433ac95c9fd.js.map
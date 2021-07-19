(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":0,"title":"Minesweeper (CSGO Edition)","date":"10/07/21","tech":"HTML, CSS, JS","content":"One of my first little projects where I create the classic minesweepr game with some CSGO flavour.","code":"","deploy":"https://macakz.github.io/minesweeper/","image":"csgo.png"},{"id":1,"title":"Anzac Day Quiz","date":"16/10/2021","tech":"React","content":"First project built with React built on ANZAC day. A simple 10 question long quiz that tracks your score throughout. ","code":"https://github.com/macakz/ie-team","deploy":"","image":"anzac.png"},{"id":2,"title":"The Reactive Calculator (ios style)","date":"18/10/2021","tech":"React & math.js","content":"One of the first javascript projects I tried a few months back and never finished. I knew I wanted to revisit it and had alot of fun on a Saturday afternoon.","code":"https://github.com/macakz/calculator","deploy":"https://macakz.github.io/calculator/","image":"calculator.png"}]')},23:function(e,t,c){},26:function(e,t){e.exports={userID:"user_209MN1gR3y2lDleTZJdhx",serviceID:"service_rgwcobc"}},27:function(e,t,c){var n={"./anzac.png":51,"./calculator.png":52,"./csgo.png":53};function i(e){var t=r(e);return c(t)}function r(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=27},39:function(e,t){e.exports={accessToken:"IGQVJVN3RsOHNQTUpwNXVHbjcxQWhrRVZA0WWczRHVOUExtb2ZA2YVFlSGZAkU09Sazdhb0VTV2Q2TldqNFdLMWlDNnVDVWtodUdHYkwyNXNUcGMzdk1Hb0xad1dPZAmpmdmlYNks4ZAk13"}},48:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/anzac.50a4d370.png"},52:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/calculator.f9dbbf62.png"},53:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/csgo.e5e05b27.png"},59:function(e,t,c){},60:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(37),a=c.n(r),s=(c(48),c(3)),o=(c(49),c(23),c(19)),l=c(10);var d=function(e,t){var c=e.id,n=t.id,i=0;return c<n?i=1:c>n&&(i=-1),i},j=c(0);var b=function(){var e=o.sort(d);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"banner",children:Object(j.jsxs)("div",{className:"flexbox",children:[Object(j.jsx)("div",{className:"imageContainer",children:Object(j.jsx)("img",{src:c(27)("./".concat(e[0].image)).default,alt:e[0].imageAlt})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:e[0].title}),Object(j.jsx)("h3",{children:e[0].date}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Click below to check out more projects of mine"}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{className:"readMore",to:"/blog",children:"Read more..."})]})]})})})};c(59);var h=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"headerTitle",children:"Alexander McKerrow's Portfolio"}),Object(j.jsxs)("nav",{className:"navMenu",children:[Object(j.jsx)(l.b,{className:"navLink",to:"/portfolio",children:"Home"}),Object(j.jsx)(l.b,{className:"navLink",to:"/about",children:"About"}),Object(j.jsx)(l.b,{className:"navLink",to:"/blog",children:"Blog"}),Object(j.jsx)(l.b,{className:"navLink",to:"/contact",children:"Contact"}),Object(j.jsx)("div",{className:"dot"})]})]})},m=(c(60),c(20));var u=function(){return Object(j.jsx)("div",{className:"footerContainer",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/alexandermckerrow",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsxs)("div",{className:"icon linkedin",children:[Object(j.jsx)("div",{className:"tooltip",children:"LinkedIn"}),Object(j.jsx)("span",{children:Object(j.jsx)(m.c,{})})]})}),Object(j.jsx)("a",{href:"https://www.github.com/macakz",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsxs)("div",{className:"icon github",children:[Object(j.jsx)("div",{className:"tooltip",children:"Github"}),Object(j.jsx)("span",{children:Object(j.jsx)(m.a,{})})]})}),Object(j.jsx)("a",{href:"https://www.instagram.com/macakz",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsxs)("div",{className:"icon instagram",children:[Object(j.jsx)("div",{className:"tooltip",children:"Instagram"}),Object(j.jsx)("span",{children:Object(j.jsx)(m.b,{})})]})})]})})};var p=function(){var e=o.sort(d);return Object(j.jsx)(j.Fragment,{children:e.map((function(e){return Object(j.jsx)("div",{className:"blog",children:Object(j.jsxs)("div",{className:"flexbox",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("h3",{children:e.date}),Object(j.jsxs)("h4",{children:["Built with: ",e.tech]}),Object(j.jsx)("p",{children:e.content}),e.code?Object(j.jsx)("a",{className:"code",target:"_blank",rel:"noopener noreferrer",href:e.code,children:"View the repository here."}):null,e.deploy?Object(j.jsx)("a",{className:"flexbox deploy",target:"_blank",rel:"noopener noreferrer",href:e.deploy,children:"View it deployed here."}):null]}),Object(j.jsx)("div",{className:"imageContainer",children:Object(j.jsx)("img",{src:c(27)("./".concat(e.image)).default,alt:e.imageAlt})})]})},e.id)}))})},x=c(16),O=c(42),f=c(41),v=c(26);var g=function(){var e,t,c,n,i,r,a,s,o=Object(O.a)(),l=o.register,d=o.handleSubmit,b=o.formState.errors,h=o.reset;return Object(j.jsxs)("div",{className:"contactContainer",children:[Object(j.jsx)("div",{className:"contactTitle",children:Object(j.jsx)("h1",{children:"Send me a message"})}),Object(j.jsx)("div",{className:"formContainer",children:Object(j.jsxs)("form",{onSubmit:d((function(e){f.a.send(v.serviceID,"contactForm",e,v.userID).then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)})).then(alert("Message sent")).finally(h())})),children:[Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Name*"}),Object(j.jsx)("input",Object(x.a)({},l("fromName",{required:!0,pattern:/^[A-Za-z]+$/i})))]}),Object(j.jsxs)("div",{className:"error",children:["required"===(null===(e=b.fromName)||void 0===e?void 0:e.type)&&Object(j.jsx)("p",{children:"Name field is required"}),"pattern"===(null===(t=b.fromName)||void 0===t?void 0:t.type)&&Object(j.jsx)("p",{children:"Please enter a valid name"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Email*"}),Object(j.jsx)("input",Object(x.a)({},l("fromEmail",{required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})))]}),Object(j.jsxs)("div",{className:"error",children:["required"===(null===(c=b.fromEmail)||void 0===c?void 0:c.type)&&Object(j.jsx)("p",{children:"Email field is required"}),"pattern"===(null===(n=b.fromEmail)||void 0===n?void 0:n.type)&&Object(j.jsx)("p",{children:"Please enter a valid email"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Phone Number*"}),Object(j.jsx)("input",Object(x.a)({},l("phoneNumber",{required:!0,pattern:/([1-9][0-9]*)|0/})))]}),Object(j.jsxs)("div",{className:"error",children:["required"===(null===(i=b.phoneNumber)||void 0===i?void 0:i.type)&&Object(j.jsx)("p",{children:"Phone Number field is required"}),"pattern"===(null===(r=b.phoneNumber)||void 0===r?void 0:r.type)&&Object(j.jsx)("p",{children:"Please enter a valid phone number"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Subject*"}),Object(j.jsx)("input",Object(x.a)({},l("subject",{required:!0})))]}),Object(j.jsx)("div",{className:"error",children:"required"===(null===(a=b.phoneNumber)||void 0===a?void 0:a.type)&&Object(j.jsx)("p",{children:"Subject field is required"})}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Message"}),Object(j.jsx)("textarea",Object(x.a)({},l("message",{maxLength:250})))]}),Object(j.jsx)("div",{className:"error",children:"maxLength"===(null===(s=b.message)||void 0===s?void 0:s.type)&&Object(j.jsx)("p",{children:"Sorry please shorten your message"})}),Object(j.jsx)("p",{children:"*Mandtory fields"}),Object(j.jsx)("div",{className:"submit",children:Object(j.jsx)("input",{type:"submit"})})]})})]})},N=c.p+"static/media/profile.669493ba.jpg",w=c.p+"static/media/Resume.50a1b59c.pdf",k=c(39),y=c.n(k),C=c(2),S=c.n(C),A=c(8),z=c(11),I=c(43),L=c(40),q=c.n(L),E=function(e){var t,c=e.feed,n=c.id,i=c.caption,r=c.media_type,a=c.media_url;switch(r){case"VIDEO":t=Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("figure",{children:[Object(j.jsx)("video",{width:"100%",height:"auto",src:a,type:"video/mp4",caption:i,controls:!0,playsInline:!0}),Object(j.jsxs)("figcaption",{children:[i,".toLowerCase()"]})]})});break;case"CAROUSEL_ALBUM":t=Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{width:"100%",height:"auto",id:n,src:a,alt:i,caption:i}),Object(j.jsx)("figcaption",{children:i.toLowerCase()})]})});break;default:t=Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{width:"100%",height:"auto",id:n,src:a,alt:i,caption:i}),Object(j.jsx)("figcaption",{children:i.toLowerCase()})]})})}return Object(j.jsx)(j.Fragment,{children:t})},_=(c(80),["token"]),F=function(e){var t=e.token,c=Object(I.a)(e,_),i=Object(n.useState)([]),r=Object(z.a)(i,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){var e=new AbortController;function n(){return(n=Object(A.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.get("https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=".concat(c.limit,"&access_token=").concat(t)).then((function(e){s(e.data.data)}))}catch(n){console.log("error",n)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){e.abort()}}),[c.limit]),Object(j.jsx)("div",{className:"container",children:a.map((function(e){return Object(j.jsx)(E,{feed:e},e.id)}))})};var M=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"about",children:[Object(j.jsx)("div",{className:"profilePic",children:Object(j.jsx)("img",{src:N,alt:"profilepicture"})}),Object(j.jsxs)("div",{className:"flexbox",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:"hi"}),Object(j.jsx)("p",{})]}),Object(j.jsx)("div",{className:"resume",children:Object(j.jsx)("a",{href:w,download:!0,children:"Download my resum\xe9"})})]}),Object(j.jsxs)("div",{className:"instaContainer",children:[Object(j.jsx)("h1",{children:"what I've been up to..."}),Object(j.jsx)(F,{token:y.a.accessToken,limit:6})]})]})})};var D=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"page-container",children:[Object(j.jsxs)("div",{className:"content-wrap",children:[Object(j.jsx)(h,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/portfolio",component:b}),Object(j.jsx)(s.a,{path:"/blog",component:p}),Object(j.jsx)(s.a,{path:"/contact",component:g}),Object(j.jsx)(s.a,{path:"/about",component:M})]})]}),Object(j.jsx)(u,{})]})})};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(D,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.d36ad4fb.chunk.js.map
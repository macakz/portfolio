(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":0,"title":"first post","date":"07/07/21","blurb":"I walked down the street ","tech":"react, firebase ","code":"https://github.com/macakz","deploy":""},{"id":1,"title":"second post","date":"08/07/21","blurb":"I jumped down the street ","tech":"react, firebase ","code":"https://github.com/macakz","deploy":"https://github.com/macakz"},{"id":2,"title":"third post","date":"09/07/21","blurb":"I danced down the street ","tech":"react, firebase ","code":"https://github.com/macakz","deploy":"https://github.com/macakz"},{"id":3,"title":"fourth post","date":"10/07/21","blurb":"I crawled down the street ","tech":"react, firebase ","code":"https://github.com/macakz","deploy":"https://github.com/macakz"},{"id":4,"title":"fifth post","date":"11/07/21","blurb":"I pranced down the street ","tech":"react, firebase ","code":"https://github.com/macakz","deploy":"https://github.com/macakz"}]')},18:function(e,t,c){},21:function(e,t){e.exports={serviceID:"service_8advsz8",userID:"user_209MN1gR3y2lDleTZJdhx"}},31:function(e,t,c){},32:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),i=c(23),a=c.n(i),n=(c(31),c(3)),d=(c(32),c(18),c.p+"static/media/test.69de89ba.jpeg"),l=c(14),o=c(8),j=c(0);var b=function(){var e=l.slice(-1);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"banner",children:Object(j.jsxs)("div",{className:"flexbox",children:[Object(j.jsx)("div",{className:"imageContainer",children:Object(j.jsx)("img",{src:d,alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:e[0].title}),Object(j.jsx)("h3",{children:e[0].date}),Object(j.jsx)("p",{children:"to read more about this project and this one click below"}),Object(j.jsx)("br",{}),Object(j.jsx)(o.b,{className:"readMore",to:"/blog",children:"Read more..."})]})]})})})};c(39);var h=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"headerTitle",children:"Alexander McKerrow's Portfolio"}),Object(j.jsxs)("nav",{className:"navMenu",children:[Object(j.jsx)(o.b,{className:"navLink",to:"/portfolio",children:"Home"}),Object(j.jsx)(o.b,{className:"navLink",to:"/about",children:"About"}),Object(j.jsx)(o.b,{className:"navLink",to:"/blog",children:"Blog"}),Object(j.jsx)(o.b,{className:"navLink",to:"/contact",children:"Contact"}),Object(j.jsx)("div",{className:"dot"})]})]})},O=(c(40),c(15));var m=function(){return Object(j.jsx)("div",{className:"footerContainer",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/alexandermckerrow",children:Object(j.jsxs)("div",{className:"icon linkedin",children:[Object(j.jsx)("div",{className:"tooltip",children:"LinkedIn"}),Object(j.jsx)("span",{children:Object(j.jsx)(O.c,{})})]})}),Object(j.jsx)("a",{href:"https://www.github.com/macakz",children:Object(j.jsxs)("div",{className:"icon github",children:[Object(j.jsx)("div",{className:"tooltip",children:"Github"}),Object(j.jsx)("span",{children:Object(j.jsx)(O.a,{})})]})}),Object(j.jsx)("a",{href:"https://www.instagram.com/macakz",children:Object(j.jsxs)("div",{className:"icon instagram",children:[Object(j.jsx)("div",{className:"tooltip",children:"Instagram"}),Object(j.jsx)("span",{children:Object(j.jsx)(O.b,{})})]})})]})})};var x=function(){var e=l.reverse();return Object(j.jsx)(j.Fragment,{children:e.map((function(e){return Object(j.jsx)("div",{className:"blog",children:Object(j.jsxs)("div",{className:"flexbox",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("h3",{children:e.date}),Object(j.jsxs)("p",{children:[e.blurb,"View the code for hereView the code for hereView the code for hereView the code for hereView the code for hereView the code for hereView the code for hereView the code for herevView the code for hereView the code for hereView the code for hereView the code for hereView the code for here"]}),Object(j.jsx)("a",{className:"code",href:e.code,children:"View the code for here"}),e.deploy?Object(j.jsx)("a",{className:"flexbox deploy",href:"github.com",children:"View it deployed here!"}):null]}),Object(j.jsx)("div",{className:"imageContainer",children:Object(j.jsx)("img",{src:d,alt:""})})]})})}))})},p=c(12),u=c(25),v=c(26),f=c(21);var N=function(){var e,t,c,s,r,i,a,n,d,l=Object(u.a)(),o=l.register,b=l.handleSubmit,h=l.formState.errors;return Object(j.jsxs)("div",{className:"contactContainer",children:[Object(j.jsx)("div",{className:"contactTitle",children:Object(j.jsx)("h1",{children:"Send me a message"})}),Object(j.jsx)("div",{className:"formContainer",children:Object(j.jsxs)("form",{onSubmit:b((function(e){return v.a.send(f.serviceID,"contactForm",e,f.userID).then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))})),children:[Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Name*"}),Object(j.jsx)("input",Object(p.a)({},o("fromName",{required:!0,pattern:/^[A-Za-z]+$/i})))]}),Object(j.jsxs)("div",{className:"error",children:["required"===(null===(e=h.fromName)||void 0===e?void 0:e.type)&&Object(j.jsx)("p",{children:"Name field is required"}),"pattern"===(null===(t=h.fromName)||void 0===t?void 0:t.type)&&Object(j.jsx)("p",{children:"Please enter a valid name"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Email*"}),Object(j.jsx)("input",Object(p.a)({},o("fromEmail",{required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})))]}),Object(j.jsxs)("div",{className:"error",children:["required"===(null===(c=h.fromEmail)||void 0===c?void 0:c.type)&&Object(j.jsx)("p",{children:"Email field is required"}),"pattern"===(null===(s=h.fromEmail)||void 0===s?void 0:s.type)&&Object(j.jsx)("p",{children:"Please enter a valid email"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Phone Number*"}),Object(j.jsx)("input",Object(p.a)({},o("phoneNumber",{required:!0,pattern:/([1-9][0-9]*)|0/})))]}),Object(j.jsxs)("div",{className:"error",children:["required"===(null===(r=h.phoneNumber)||void 0===r?void 0:r.type)&&Object(j.jsx)("p",{children:"Phone Number field is required"}),"pattern"===(null===(i=h.phoneNumber)||void 0===i?void 0:i.type)&&Object(j.jsx)("p",{children:"Please enter a valid phone number"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Subject*"}),Object(j.jsx)("input",Object(p.a)({},o("subject",{required:!0,pattern:/^[a-z0-9]+$/i})))]}),Object(j.jsxs)("div",{className:"error",children:["required"===(null===(a=h.phoneNumber)||void 0===a?void 0:a.type)&&Object(j.jsx)("p",{children:"Subject field is required"}),"pattern"===(null===(n=h.phoneNumber)||void 0===n?void 0:n.type)&&Object(j.jsx)("p",{children:"Please only enter numbers or letters"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("p",{children:"Message"}),Object(j.jsx)("textarea",Object(p.a)({},o("message",{required:!0,pattern:/^[a-z0-9]+$/i})))]}),Object(j.jsx)("div",{className:"error",children:"pattern"===(null===(d=h.message)||void 0===d?void 0:d.type)&&Object(j.jsx)("p",{children:"Please only enter numbers or letters"})}),Object(j.jsx)("p",{children:"*Mandtory fields"}),Object(j.jsx)("div",{className:"submit",children:Object(j.jsx)("input",{type:"submit"})})]})})]})},L=c.p+"static/media/profile.669493ba.jpg",g=c.p+"static/media/Resume.50a1b59c.pdf";var w=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"about",children:Object(j.jsxs)("div",{className:"flexbox",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:"hi"}),Object(j.jsx)("p",{})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:L,alt:"profilepicture"})}),Object(j.jsx)("div",{className:"resume",children:Object(j.jsx)("a",{href:g,download:!0,children:"Download my resum\xe9"})})]})})})};var W=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"blogPost",children:Object(j.jsxs)("div",{className:"flexbox",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:"HELLOWWORLD"}),Object(j.jsx)("h3",{children:"HELLOWWORLD"}),Object(j.jsx)("p",{children:"HELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLDHELLOWWORLD"})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"",alt:""})})]})})})};var y=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"page-container",children:[Object(j.jsxs)("div",{className:"content-wrap",children:[Object(j.jsx)(h,{}),Object(j.jsxs)(n.c,{children:[Object(j.jsx)(n.a,{exact:!0,path:"/portfolio",component:b}),Object(j.jsx)(n.a,{path:"/blog",component:x}),Object(j.jsx)(n.a,{path:"/blogpost",component:W}),Object(j.jsx)(n.a,{path:"/contact",component:N}),Object(j.jsx)(n.a,{path:"/about",component:w})]})]}),Object(j.jsx)(m,{})]})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(y,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ca9f1d31.chunk.js.map
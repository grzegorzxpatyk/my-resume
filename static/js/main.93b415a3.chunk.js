(this["webpackJsonpmy-resume-react"]=this["webpackJsonpmy-resume-react"]||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(1),a=t.n(s),i=t(4),c=t.n(i),o=(t(9),t(2)),r=(t(10),t(11),t(0));function l(e){return Object(r.jsxs)("div",{className:"contact-info",children:[Object(r.jsx)("span",{className:"email",children:Object(r.jsx)("a",{href:"mailto:".concat(e.email),target:"_blank",rel:"noopener noreferrer",children:e.email})}),Object(r.jsx)("span",{className:"phone",children:e.phoneNumber}),Object(r.jsxs)("span",{className:"social-icons",children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/in/grzegorz-patyk",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("i",{className:"fab fa-linkedin"})}),Object(r.jsx)("a",{href:"https://github.com/grzegorzxpatyk",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("i",{className:"fab fa-github-square"})})]})]})}function m(e){return Object(r.jsxs)("header",{className:"bio",children:[Object(r.jsxs)("h1",{className:"full-name",children:[Object(r.jsx)("span",{className:"first-name",children:e.firstName}),Object(r.jsx)("span",{className:"last-name",children:e.lastName})]}),Object(r.jsxs)("section",{className:"title-contact",children:[Object(r.jsx)("h3",{className:"title",children:e.title}),Object(r.jsx)(l,Object(o.a)({},e))]}),Object(r.jsx)("h2",{className:"section-title",children:"Profile"}),Object(r.jsx)("div",{className:"about",children:e.about})]})}t(13);function d(e){return Object(r.jsxs)("div",{className:"school",children:[Object(r.jsxs)("h3",{className:"school-name",children:[Object(r.jsx)("span",{children:e.name}),Object(r.jsx)("span",{className:"duration",children:e.duration})]}),Object(r.jsxs)("div",{className:"school-details",children:[Object(r.jsx)("span",{className:"degree",children:e.degree}),Object(r.jsx)("span",{className:"location",children:e.location})]})]})}function j(e){return Object(r.jsxs)("section",{className:"education",children:[Object(r.jsx)("h2",{className:"section-title",children:"Education"}),e.schools.map((function(e,n){return Object(r.jsx)(d,Object(o.a)({},e),n)}))]})}function b(e){return Object(r.jsxs)("div",{className:"job",children:[Object(r.jsxs)("h3",{className:"job-position",children:[Object(r.jsx)("span",{children:e.position}),Object(r.jsx)("span",{className:"duration",children:e.duration})]}),Object(r.jsxs)("div",{className:"job-details",children:[Object(r.jsx)("span",{className:"company",children:e.company}),Object(r.jsx)("span",{className:"location",children:e.location}),Object(r.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:"".concat(e.description)}})]})]})}t(14);function h(e){return Object(r.jsxs)("section",{className:"experience",children:[Object(r.jsx)("h2",{className:"section-title",children:"Experience"}),e.jobs.map((function(e,n){return Object(r.jsx)(b,Object(o.a)({},e),n)}))]})}function p(e){for(var n=6-e.level,t="",s=0;s<e.level;s++)t+="+ ";for(var a=0;a<n;a++)t+="_ ";return Object(r.jsxs)("div",{className:"skill",children:[Object(r.jsx)("h4",{className:"skill-name",children:e.name}),Object(r.jsx)("span",{className:"level",children:t})]})}t(15);function u(e){return Object(r.jsxs)("section",{className:"skills",children:[Object(r.jsx)("h3",{className:"section-title",children:"Skills"}),Object(r.jsx)("div",{className:"skills-list",children:e.skills.map((function(e,n){return Object(r.jsx)(p,Object(o.a)({},e),n)}))})]})}t(16);function f(e){return Object(r.jsxs)("main",{className:"resume",children:[Object(r.jsx)(m,Object(o.a)({},e.bio)),Object(r.jsx)(h,{jobs:e.experience}),Object(r.jsx)(j,{schools:e.education}),Object(r.jsx)(u,{skills:e.skills})]})}var x={bio:{firstName:"Grzegorz",lastName:"Patyk",title:"Frontend Developer",email:"grzegorzxpatyk@gmail.com",phoneNumber:"(+48) 662 444 438",about:"Creative Front End Developer taking first steps in software development industry. Trained architect, self-taught software developer. Wishing to bring my problem solving and analytical thinking skills from architecture into web development business. Passionate about design, architecture, snowboarding and dogs \ud83d\udc36"},experience:[{position:"Junior Frontend developer",duration:"Jun 2022 - Present",company:"Transition Technologies MS",location:"Cracow/Remote",description:"Development of frontend layer of multiple web apps using <em>React.js</em>, <em>JavaScript / TypeScript</em> & <em>CSS / SASS</em>."},{position:"Junior Frontend developer",duration:"Jan 2022 - May 2022",company:"ALTEN",location:"Cracow",description:"Development of the internal applications using <em>PHP, jQuery, JavaScript and SASS</em>. Implementation of client-side form validation, with the use of <em>js and regular expressions</em>. Testing API with <em>Swagger</em> and <em>Postman</em>."},{position:"Frontend development intern",duration:"Jun 2021 - Dec 2021",company:"Beeanco",location:"Remote",description:"Implementation of new <em>Svelte</em> components of the web application, improvement of existing components. Standardization of the output to a <em>responsive, mobile-first</em> approach using <em>SASS</em>. Working on the verge of back-end and front-end with <em>WordPress as headless CMS</em>. Effective translation of UI designs to code implementations."},{position:"Freelance web developer",duration:"Feb 2020 - Present",company:"Freelance",location:"Remote",description:"Handling all verbal and written communications with clients and hosting companies. Meeting with clients to review website designs and gather their feedback. Design, build and maintenance of new responsive websites using <em>Wordpress</em>, <em>JavaScript</em>, <em>SASS</em>(with <em>SCSS</em> syntax) and <em>HTML</em>."}],education:[{name:"Cracow University of Technology",degree:"MSc in Architecture and Urban Planning",duration:"Feb 2019 - Sep 2020",location:"Cracow"},{name:"Lublin University of Technology",degree:"BSc in Architecture and Urban Planning",duration:"Oct 2015 - Jan 2019",location:"Lublin"}],skills:[{name:"JavaScript",level:"5"},{name:"React",level:"3"},{name:"Svelte",level:"3"},{name:"CSS",level:"5"},{name:"HTML",level:"5"},{name:"Git",level:"4"}],interests:["Design","Architecture","Snowboarding","Dogs\ud83d\udc36"]};var O=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(f,Object(o.a)({},x))})};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.93b415a3.chunk.js.map
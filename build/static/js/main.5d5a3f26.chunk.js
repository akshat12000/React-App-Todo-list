(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),l=(n(25),n(11)),i=n(20),r=(n(26),n(8)),b=n(0);function d(e){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"}),e.about?Object(b.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"}):""]})})]})})})}d.defaultProps={title:"Your Title Here",about:!0};var j=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)("div",{className:"my-3",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]})};function u(e){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h3",{className:"text-center my-3",children:"Todo List"}),0===e.todos.length?"No Todos To Display! All done!":e.todos.map((function(t){return Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})}function h(){return Object(b.jsx)("div",{className:"bg-dark text-light text-center py-3",style:{bottom:"0",position:"fixed",width:"100%"},children:"Copyright \xa9 MyTodoList.com"})}function m(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),r=i[0],d=i[1];return Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&r?e.addTodo(c,r):alert("Title or Description should not be empty!!")},children:[Object(b.jsx)("h4",{className:"text-center",children:"Add a Todo Item"}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},className:"form-control",id:"title"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Description"}),Object(b.jsx)("input",{type:"text",value:r,onChange:function(e){d(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success btn-sm",children:"Add Todo"})]})})}function x(){return Object(b.jsxs)("div",{children:["This is about the My Todo List",Object(b.jsx)("p",{children:"This is very cool to do list website"})]})}var O=n(2);var v=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am onDelete ",e),j(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){console.log("I am Adding ",e,t);var n={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};j([].concat(Object(i.a)(o),[n]))},c=Object(a.useState)(e),s=Object(l.a)(c,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(d,{title:"My Todo List",about:!0}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{addTodo:n}),Object(b.jsx)(u,{todos:o,onDelete:t})]})}}),Object(b.jsx)(O.a,{exact:!0,path:"/about",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(h,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.5d5a3f26.chunk.js.map
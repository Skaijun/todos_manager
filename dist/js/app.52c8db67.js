(function(t){function e(e){for(var i,s,r=e[0],l=e[1],d=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],i=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var i={},a={app:0},n=[];function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=i,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var i=o("85ec"),a=o.n(i);a.a},"03a4":function(t,e,o){"use strict";var i=o("fab6"),a=o.n(i);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("AddTodo"),o("FilterTodos"),o("Todos")],1)])},n=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Todos")]),t._m(0),o("div",{staticClass:"todos__wrap"},t._l(t.todoList,(function(e){return o("div",{key:e.id,staticClass:"todo",class:{completed:e.isCompleted,invisible:!e.isDisplayed},on:{dblclick:function(o){return t.completeCurrTask(e)}}},[t._v(" "+t._s(e.title)+" "),o("i",{staticClass:"fas fa-trash-alt",on:{click:function(o){return t.deleteTodo(e.id)}}})])})),0)])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hint"},[o("p",[t._v("Double click to mark as completed")]),o("div",[o("span",{staticClass:"square incomplete"},[t._v("_")]),t._v("= Incompleted ")]),o("div",[o("span",{staticClass:"square complete"},[t._v("_")]),t._v("= Completed ")])])}],l=o("5530"),d=o("2f62"),c={name:"Todos",data:function(){return{isCompleted:!1}},computed:Object(l["a"])({},Object(d["c"])(["todoList"])),methods:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["updateTaskState","removeTask"])),{},{completeCurrTask:function(t){var e={id:t.id,title:t.title,isCompleted:!t.isCompleted,isDisplayed:!0};this.updateTaskState(e)},deleteTodo:function(t){this.removeTask(t)}})},u=c,p=(o("ada8"),o("2877")),f=Object(p["a"])(u,s,r,!1,null,"38d38a03",null),v=f.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Add Todo")]),o("form",{staticClass:"form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"form-input",attrs:{type:"text",placeholder:"Add todo..."},domProps:{value:t.newTodo},on:{input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),o("input",{staticClass:"form-submit",attrs:{type:"submit",value:"Submit"},on:{click:function(e){return e.preventDefault(),t.addTodo(e)}}})])])},T=[],h=(o("99af"),{name:"AddTodos",data:function(){return{newTodo:""}},methods:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["addNewTask"])),{},{addTodo:function(){var t=new Date,e="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate(),"-").concat(t.getHours(),"-").concat(t.getMinutes(),"-").concat(t.getSeconds(),"-").concat(t.getMilliseconds());if(this.newTodo){var o={id:e,title:this.newTodo,isCompleted:!1,isDisplayed:!0};this.addNewTask(o),this.newTodo=""}else alert("You have to enter the task first!")}})}),b=h,y=(o("03a4"),Object(p["a"])(b,m,T,!1,null,"5a441b97",null)),_=y.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"filter-todos"},[o("div",{staticClass:"filter-quantity"},[o("h3",[t._v("Displayed Todos:")]),o("select",{staticClass:"filter-quantity-select",on:{change:function(e){return t.showQuantity(e)}}},[o("option",{attrs:{selected:"",value:"50"}},[t._v("50")]),o("option",{attrs:{value:"30"}},[t._v("30")]),o("option",{attrs:{value:"20"}},[t._v("20")]),o("option",{attrs:{value:"15"}},[t._v("15")]),o("option",{attrs:{value:"10"}},[t._v("10")]),o("option",{attrs:{value:"5"}},[t._v("5")])])]),o("div",{staticClass:"filter-completed"},[o("h3",[t._v("Completed/Incompleted Todos:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.toDisplay,expression:"toDisplay"}],staticClass:"filter-completed-select",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.toDisplay=e.target.multiple?o:o[0]},t.todoStateFilter]}},[o("option",{attrs:{selected:"",value:"all"}},[t._v("all")]),o("option",{attrs:{value:"completed"}},[t._v("completed")]),o("option",{attrs:{value:"incompleted"}},[t._v("incompleted")])])])])},C=[],O={name:"FilterTodos",data:function(){return{toDisplay:"all"}},methods:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["filterTodos","filterByTodosState"])),{},{showQuantity:function(t){var e=parseInt(t.target.options[t.target.options.selectedIndex].innerText);this.filterTodos(e)},todoStateFilter:function(){this.filterByTodosState(this.toDisplay)}}),created:function(){this.filterTodos(50)}},S=O,w=(o("c6e6"),Object(p["a"])(S,g,C,!1,null,"6bb1d0a2",null)),j=w.exports,k={name:"TodoApp",created:function(){this.$store.dispatch("initTodos")},components:{Todos:v,AddTodo:_,FilterTodos:j}},D=k,x=(o("034f"),Object(p["a"])(D,a,n,!1,null,null,null)),I=x.exports,N=(o("c740"),o("a434"),{todos:[]}),F={todoList:function(t){return t.todos}},P={initTodos:function(t){var e=t.commit,o=JSON.parse(localStorage.getItem("todos"))||[{id:1,title:"Example",isCompleted:!1,isDisplayed:!0}];e("initializeTodos",o)},addNewTask:function(t,e){var o=t.commit;o("addTodo",e),localStorage.setItem("todos",JSON.stringify(N.todos))},updateTaskState:function(t,e){var o=t.commit;o("updateTodoState",e),localStorage.setItem("todos",JSON.stringify(N.todos))},removeTask:function(t,e){var o=t.commit;o("removeTaskFromState",e),localStorage.setItem("todos",JSON.stringify(N.todos))},filterTodos:function(t,e){var o=t.commit,i=1,a={};for(var n in N.todos){var s=N.todos[n];a=i<=e?{id:s.id,title:s.title,isCompleted:s.isCompleted,isDisplayed:!0}:{id:s.id,title:s.title,isCompleted:s.isCompleted,isDisplayed:!1},o("updateTodoState",a),i++}},filterByTodosState:function(t,e){var o=t.commit,i={};for(var a in N.todos){var n=N.todos[a];"all"==e?i={id:n.id,title:n.title,isCompleted:n.isCompleted,isDisplayed:!0}:"completed"==e?i={id:n.id,title:n.title,isCompleted:n.isCompleted,isDisplayed:!!n.isCompleted}:"incompleted"==e&&(i={id:n.id,title:n.title,isCompleted:n.isCompleted,isDisplayed:!n.isCompleted}),o("updateTodoState",i)}}},A={initializeTodos:function(t,e){t.todos=e},updateTodoState:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));t.todos.splice(o,1,e)},addTodo:function(t,e){t.todos.unshift(e)},removeTaskFromState:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos.splice(o,1)}},M={state:N,getters:F,actions:P,mutations:A};i["a"].use(d["a"]);var $=new d["a"].Store({modules:{todos:M}});i["a"].config.productionTip=!1,new i["a"]({store:$,render:function(t){return t(I)}}).$mount("#app")},"7c03":function(t,e,o){},"85ec":function(t,e,o){},9028:function(t,e,o){},ada8:function(t,e,o){"use strict";var i=o("9028"),a=o.n(i);a.a},c6e6:function(t,e,o){"use strict";var i=o("7c03"),a=o.n(i);a.a},fab6:function(t,e,o){}});
//# sourceMappingURL=app.52c8db67.js.map
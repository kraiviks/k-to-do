(function(t){function e(e){for(var r,i,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/k-to-do/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d05":function(t,e,a){},"355b":function(t,e,a){},"3e14":function(t,e,a){"use strict";var r=a("0d05"),n=a.n(r);n.a},"4be1":function(t,e,a){"use strict";var r=a("ed59"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("99af"),a("4de4"),a("c740"),a("fb6a"),a("5530")),s=a("2909"),i=a("2f62");r["a"].use(i["a"]);var c=new i["a"].Store({state:{bgColor:!1,asideLeftState:!1,arrayTask:[],arrayT:[],arrayC:[],filterT:!1,filterA:!0,filterC:!1},mutations:{changeBgColor:function(t){t.bgColor=!t.bgColor},toggleL:function(t){t.asideLeftState=!t.asideLeftState},createTask:function(t){var e=document.querySelector(".form-control").value;if(""!==e){var a={label:e,important:!1,checked:!1,id:Date.now()},r=[a].concat(Object(s["a"])(t.arrayTask));t.arrayTask=r,document.querySelector(".input-group").reset()}},delTask:function(t,e){var a=t.arrayTask.findIndex((function(t){return t.id===e})),r=t.arrayTask.slice(0,a),n=t.arrayTask.slice(a+1),i=[].concat(Object(s["a"])(r),Object(s["a"])(n));t.arrayTask=i},toggleImportant:function(t,e){var a=t.arrayTask.findIndex((function(t){return t.id===e})),r=t.arrayTask[a],i=Object(n["a"])(Object(n["a"])({},r),{},{important:!r.important}),c=[].concat(Object(s["a"])(t.arrayTask.slice(0,a)),[i],Object(s["a"])(t.arrayTask.slice(a+1)));t.arrayTask=c},checkTask:function(t,e){var a=t.arrayTask.findIndex((function(t){return t.id===e}));t.arrayTask[a].checked=!t.arrayTask[a].checked},filterAll:function(t){t.arrayTask,t.filterA=!0,t.filterT=!1,t.filterC=!1},filterActive:function(t){var e=t.arrayTask.filter((function(t){return!1===t.checked}));t.arrayT=e,t.filterA=!1,t.filterT=!0,t.filterC=!1},filterCompleted:function(t){var e=t.arrayTask.filter((function(t){return!0===t.checked}));t.arrayC=e,t.filterA=!1,t.filterT=!1,t.filterC=!0}}}),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("main",[a("AsideLeft"),a("AppBody")],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header",class:{bgBlue:t.bgColor}},[a("Logo"),a("nav",{staticClass:"header-nav"},[a("ol",{staticClass:"nav-list"},[a("li",{staticClass:"nav-item",on:{click:t.showAsideLeft}},[t._v("Viks")]),a("li",{staticClass:"nav-item",on:{click:t.changeBgColor}},[t._v("Backgroung")])])])],1)},f=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[t._v(t._s(t.logo))])},p=[],m={name:"Logo",data:function(){return{logo:"Kraiviks: To Do"}}},b=m,k=a("2877"),v=Object(k["a"])(b,d,p,!1,null,"787007be",null),h=v.exports,C={name:"Header",components:{Logo:h},computed:Object(n["a"])({},Object(i["b"])(["bgColor"])),methods:{showAsideLeft:function(){this.$store.commit("toggleL")},changeBgColor:function(){this.$store.commit("changeBgColor")}}},g=C,y=(a("3e14"),Object(k["a"])(g,u,f,!1,null,"8ba1aac8",null)),T=y.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-fade"}},[this.$store.state.asideLeftState?a("aside",{staticClass:"aside-left",class:{bgBlue:t.bgColor}},[a("ol",{staticClass:"aside-left-list"},[a("li",{staticClass:"list-item"},[t._v("Viks 1")]),a("li",{staticClass:"list-item"},[t._v("Viks 2")]),a("li",{staticClass:"list-item"},[t._v("1234567")]),a("li",{staticClass:"list-item"},[t._v("+")])])]):t._e()])},O=[],j={name:"AsideLeft",computed:Object(n["a"])({},Object(i["b"])(["bgColor"]))},A=j,$=(a("9c5c"),Object(k["a"])(A,_,O,!1,null,"8aa1995a",null)),x=$.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"app-body"},[a("section",{staticClass:"body-item",class:{bgWhite:t.bgColor}},[a("div",{staticClass:"body-header"},[a("FilterTasks"),a("div",{staticClass:"counter"},[t._v(t._s(t.arrayTask.length)+" task left")])],1),a("form",{staticClass:"input-group mt-3 mb-3",on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Add tasks","aria-label":"Add tasks","aria-describedby":"button-addon2"}}),t._m(0)]),a("ToDoItem")],1)])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",id:"button-addon2"}},[t._v(" Add ")])])}],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.filterA?a("ol",{staticClass:"list-group"},t._l(t.arrayTask,(function(e){return a("li",{key:e.id,staticClass:"list-group-item",class:{important:e.important,checkT:e.checked}},[a("div",{staticClass:"noCheckTask",class:{checkTask:e.checked},on:{click:function(a){return t.checkTask(e.id)}}}),t._v(" "+t._s(e.label)+" "),a("div",{staticClass:"button-block"},[a("i",{staticClass:"far fa-star",class:{fas:e.important},on:{click:function(a){return t.toggleImportant(e.id)}}}),a("i",{staticClass:"fas fa-minus",on:{click:function(a){return t.delTask(e.id)}}})])])})),0):t.filterT?a("ol",{staticClass:"list-group"},t._l(t.arrayT,(function(e){return a("li",{key:e.id,staticClass:"list-group-item",class:{important:e.important}},[a("div",{staticClass:"noCheckTask",class:{checkTask:e.checked},on:{click:function(a){return t.checkTask(e.id)}}}),t._v(" "+t._s(e.label)+" "),a("div",{staticClass:"button-block"},[a("i",{staticClass:"far fa-star",class:{fas:e.important},on:{click:function(a){return t.toggleImportant(e.id)}}}),a("i",{staticClass:"fas fa-minus",on:{click:function(a){return t.delTask(e.id)}}})])])})),0):t.filterC?a("ol",{staticClass:"list-group"},t._l(t.arrayC,(function(e){return a("li",{key:e.id,staticClass:"list-group-item",class:{important:e.importan,checkT:e.checked}},[a("div",{staticClass:"noCheckTask",class:{checkTask:e.checked},on:{click:function(a){return t.checkTask(e.id)}}}),t._v(" "+t._s(e.label)+" "),a("div",{staticClass:"button-block"},[a("i",{staticClass:"far fa-star",class:{fas:e.important},on:{click:function(a){return t.toggleImportant(e.id)}}}),a("i",{staticClass:"fas fa-minus",on:{click:function(a){return t.delTask(e.id)}}})])])})),0):t._e()},S=[],B={name:"ToDoItem",computed:Object(n["a"])({},Object(i["b"])(["arrayTask","arrayT","arrayC","filterT","filterA","filterC"])),methods:{delTask:function(t){this.$store.commit("delTask",t)},toggleImportant:function(t){this.$store.commit("toggleImportant",t)},checkTask:function(t){this.$store.commit("checkTask",t)}}},E=B,P=(a("4be1"),Object(k["a"])(E,I,S,!1,null,"229966dd",null)),D=P.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group btn-group-toggle",attrs:{"data-toggle":"buttons"}},[a("label",{staticClass:"btn btn-secondary active"},[a("input",{attrs:{type:"radio",name:"options",id:"option1"},on:{click:t.filterAll}}),t._v(" All ")]),a("label",{staticClass:"btn btn-secondary"},[a("input",{attrs:{type:"radio",name:"options",id:"option2"},on:{click:t.filterActive}}),t._v(" Active ")]),a("label",{staticClass:"btn btn-secondary"},[a("input",{attrs:{type:"radio",name:"options",id:"option3"},on:{click:t.filterCompleted}}),t._v(" Completed ")])])},F=[],H={name:"FilterTasks",methods:{filterAll:function(){this.$store.commit("filterAll")},filterActive:function(){this.$store.commit("filterActive")},filterCompleted:function(){this.$store.commit("filterCompleted")}}},V=H,q=Object(k["a"])(V,M,F,!1,null,"3bea75da",null),J=q.exports,K={name:"AppBody",components:{ToDoItem:D,FilterTasks:J},computed:Object(n["a"])({},Object(i["b"])(["arrayTask","bgColor"])),methods:{createTask:function(){this.$store.commit("createTask")}}},W=K,z=(a("a1e9"),Object(k["a"])(W,w,L,!1,null,"333dc6a8",null)),G=z.exports,N={name:"App",components:{Header:T,AsideLeft:x,AppBody:G}},Q=N,R=(a("5c0b"),Object(k["a"])(Q,o,l,!1,null,null,null)),U=R.exports;r["a"].config.productionTip=!1,new r["a"]({store:c,render:function(t){return t(U)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"9c0c":function(t,e,a){},"9c5c":function(t,e,a){"use strict";var r=a("f4d2"),n=a.n(r);n.a},a1e9:function(t,e,a){"use strict";var r=a("355b"),n=a.n(r);n.a},ed59:function(t,e,a){},f4d2:function(t,e,a){}});
//# sourceMappingURL=app.f17cec46.js.map
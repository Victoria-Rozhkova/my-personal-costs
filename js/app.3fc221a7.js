(function(t){function e(e){for(var n,o,i=e[0],l=e[1],d=e[2],c=0,u=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},o={app:0},s={app:0},r=[];function i(t){return l.p+"js/"+({about:"about",dashboard:"dashboard",notFount:"notFount"}[t]||t)+"."+{about:"942df8d0",dashboard:"1060ab27",notFount:"4b8ec93c"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={dashboard:1,notFount:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({about:"about",dashboard:"dashboard",notFount:"notFount"}[t]||t)+"."+{about:"31d6cfe0",dashboard:"10b0811f",notFount:"edf8e01c"}[t]+".css",s=l.p+n,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var d=r[i],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===n||c===s))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){d=u[i],c=d.getAttribute("data-href");if(c===n||c===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete o[t],h.parentNode.removeChild(h),a(r)},h.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=r);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(t);var u=new Error;d=function(e){c.onerror=c.onload=null,clearTimeout(h);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}s[t]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/my-personal-costs/",l.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var h=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3a12":function(t,e,a){"use strict";a("e6f4")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=a("7496"),s=a("40dc"),r=a("8336"),i=a("f6c4"),l=a("2fa4"),d=function(){var t=this,e=t._self._c;return e(o["a"],[e(s["a"],{attrs:{app:"",color:"light-green lighten-5",flat:""}},[e("div",{staticClass:"d-flex align-center"},[e(r["a"],{attrs:{to:"/"}},[t._v("Dashboard")]),e(r["a"],{attrs:{to:"/about"}},[t._v("About")])],1),e(l["a"])],1),e(i["a"],[e("router-view")],1),e("transition",{attrs:{name:"fade"}},[t.showModal?e("ModalWindow",{attrs:{settings:t.modalSettings}}):t._e()],1),e("transition",{attrs:{name:"fade"}},[t.showContextMenu?e("ContextMenu",{attrs:{menu:t.contextMenuItems,styles:t.styles}}):t._e()],1)],1)},c=[],u=function(){var t=this,e=t._self._c;return e("div",{class:t.$style.wrapper},[e("div",{class:t.$style.wrapper__modal},[e("div",[e("h4",[t._v(t._s(t.settings.title))]),e(t.settings.content,{tag:"component"}),e("div",[e("button",{on:{click:t.hideModal}},[t._v("Close")])])],1)])])},h=[],p=a("608d"),m={name:"ModalWindow",props:{settings:{type:Object,default:()=>({})}},components:{AddPaymentsForm:p["a"]},methods:{hideModal(){this.$modal.hide()}}},f=m,y=a("d503"),g=a("2877");function v(t){this["$style"]=y["default"].locals||y["default"]}var _=Object(g["a"])(f,u,h,!1,v,null,null),b=_.exports,x=a("132d"),w=function(){var t=this,e=t._self._c;return e("div",{class:t.$style.context},[e("div",{class:t.$style.context__wrap,style:t.styles},t._l(t.menu,(function(a,n){return e("div",{key:n,class:t.$style.context__menu,on:{click:function(e){return t.onClick(a)}}},[t._v(" "+t._s(a.text)+" "),e(x["a"],{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.onClick(a)}}},[t._v(" "+t._s(a.icon)+" ")])],1)})),0)])},E=[],C={name:"ContextMenu",props:{menu:{type:Array,default:()=>[]},styles:Object},data(){return{}},methods:{onClick(t){t.action(),this.$context.close()}}},T=C,L=a("a541");function S(t){this["$style"]=L["default"].locals||L["default"]}var O=Object(g["a"])(T,w,E,!1,S,null,null),A=O.exports,M={name:"App",components:{ModalWindow:b,ContextMenu:A},data(){return{showModal:!1,modalSettings:{},showContextMenu:!1,contextMenuItems:[],xPos:0,yPos:0}},computed:{styles(){return{top:this.yPos+10+"px",left:this.xPos+10+"px"}}},methods:{modalOpen(t){this.showModal=!0,this.modalSettings=t},modalClose(){this.showModal=!1,this.modalSettings={}},setPosition(t){const e=t.getBoundingClientRect();this.yPos=e.top,this.xPos=e.left},contextOpen(t){let{menu:e,caller:a}=t;this.showContextMenu=!0,this.contextMenuItems=e,this.setPosition(a)},contextClose(){this.showContextMenu=!1,this.contextMenuItems=[]}},mounted(){this.$modal.EventBus.$on("show",this.modalOpen),this.$modal.EventBus.$on("hide",this.modalClose),this.$context.EventBus.$on("open",this.contextOpen),this.$context.EventBus.$on("close",this.contextClose)},destroyed(){this.$modal.EventBus.off("show"),this.$modal.EventBus.off("hide"),this.$context.EventBus.off("open"),this.$context.EventBus.off("close")}},$=M,P=(a("3a12"),Object(g["a"])($,d,c,!1,null,null,null)),D=P.exports,I=a("2f62"),k={state:{paymentsList:[]},mutations:{SET_PAYMENTS_LIST(t,e){t.paymentsList=e},ADD_PAYMENT_LIST(t,e){t.paymentsList.push(e)},EDIT_PAYMENT_LIST(t,e){let{index:a,newPayment:n}=e;Object.assign(t.paymentsList[a],n)},DELETE_PAYMENT(t,e){t.paymentsList.splice(e,1)}},getters:{paymentsList:t=>t.paymentsList,paymentsListTotalAmount:t=>{let{paymentsList:e}=t;return e.reduce((t,e)=>{let{value:a}=e;return t+Number(a)},0)}},actions:{fetchData(t){let{commit:e}=t;e("TOGGLE_IS_LOADING",!0),setTimeout(()=>{const t=[{id:1,date:"28.03.2020",category:"Food",value:169},{id:2,date:"24.03.2020",category:"Transport",value:360},{id:3,date:"24.03.2020",category:"Shop",value:532},{id:4,date:"28.03.2020",category:"Navigation",value:560},{id:5,date:"24.03.2020",category:"Transport",value:360},{id:6,date:"24.03.2020",category:"Shop",value:532},{id:7,date:"28.03.2020",category:"Food",value:169},{id:8,date:"24.03.2020",category:"Sport",value:360},{id:9,date:"24.03.2020",category:"Education",value:532},{id:10,date:"28.03.2020",category:"Sport",value:169},{id:11,date:"24.03.2020",category:"Transport",value:360},{id:12,date:"24.03.2020",category:"Sport",value:532},{id:13,date:"28.03.2020",category:"Education",value:169},{id:14,date:"24.03.2020",category:"Sport",value:360},{id:15,date:"24.03.2020",category:"Food",value:1532},{id:16,date:"24.03.2020",category:"Transport",value:360},{id:17,date:"24.03.2020",category:"Shop",value:532},{id:18,date:"24.03.2020",category:"Party",value:832},{id:19,date:"24.03.2020",category:"Shop",value:532},{id:20,date:"24.03.2020",category:"Entertaiment",value:1532}];e("SET_PAYMENTS_LIST",t),e("TOGGLE_IS_LOADING",!1)},3e3)}}},j={state:{categoryList:[]},mutations:{SET_CATEGORY_LIST(t,e){t.categoryList=e},ADD_CATEGORY(t,e){t.categoryList.push(e)}},getters:{categoryList:t=>t.categoryList},actions:{fetchCategoryList(t){let{commit:e}=t;setTimeout(()=>{const t=["Food","Navigation","Sport","Entertaiment","Transport","Education","Party","Shop"];e("SET_CATEGORY_LIST",t)},1e3)}}};n["a"].use(I["a"]);var N=new I["a"].Store({state:{isLoading:!1},mutations:{TOGGLE_IS_LOADING(t,e){t.isLoading=e}},getters:{isLoading:t=>t.isLoading},actions:{},modules:{payments:k,category:j}}),B=a("8c4f");n["a"].use(B["a"]);const F=[{path:"/",name:"dashboard",component:()=>a.e("dashboard").then(a.bind(null,"7277"))},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"f820"))},{path:"*",component:()=>a.e("notFount").then(a.bind(null,"9703"))}],Y=new B["a"]({mode:"history",routes:F});var G=Y,R={install(t){this.installed||(this.installed=!0,t.prototype.$modal={EventBus:new t,show(t){this.EventBus.$emit("show",t)},hide(){this.EventBus.$emit("hide")}})}},W={install(t){this.installed||(this.installed=!0,this.caller=null,t.prototype.$context={EventBus:new t,open(t){let{event:e,menu:a}=t;const n=e.target;n!==this.caller?(this.caller=n,this.EventBus.$emit("open",{menu:a,caller:n})):(this.close(),this.caller=null)},close(){this.EventBus.$emit("close")}})}},q=a("f309");n["a"].use(q["a"]);var J=new q["a"]({});n["a"].config.productionTip=!1,n["a"].use(R),n["a"].use(W),new n["a"]({store:N,router:G,vuetify:J,render:t=>t(D)}).$mount("#app")},"608d":function(t,e,a){"use strict";var n=a("8336"),o=a("b0af"),s=a("62ad"),r=a("2e4b"),i=a("e449"),l=a("0fd9"),d=a("b974"),c=a("8654"),u=function(){var t=this,e=t._self._c;return e(o["a"],{staticClass:"pa-10"},[e("h3",{staticClass:"text-center text-h4 ma-5"},[t._v("Add new payment")]),e(l["a"],{staticClass:"justify-center align-center"},[e(s["a"],{staticClass:"ma-0",attrs:{cols:"12",sm:"3",md:"3"}},[e(i["a"],{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(a){let{on:n,attrs:o}=a;return[e(c["a"],t._g(t._b({attrs:{label:"Date",color:"teal lighten-1","prepend-icon":"mdi-calendar",readonly:"","hide-details":""},model:{value:t.edited.date,callback:function(e){t.$set(t.edited,"date",e)},expression:"edited.date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[e(r["a"],{attrs:{color:"teal lighten-1"},on:{input:function(e){t.menu2=!1}},model:{value:t.edited.date,callback:function(e){t.$set(t.edited,"date",e)},expression:"edited.date"}})],1)],1),e(s["a"],{staticClass:"ma-0",attrs:{cols:"12",sm:"4"}},[e(d["a"],{attrs:{items:t.categoryList,label:"Select category",dense:"",solo:"","hide-details":""},model:{value:t.edited.category,callback:function(e){t.$set(t.edited,"category",e)},expression:"edited.category"}})],1),e(s["a"],{staticClass:"ma-0",attrs:{cols:"12",sm:"3",md:"3"}},[e(c["a"],{attrs:{type:"number",label:"Value",solo:"","hide-details":""},model:{value:t.edited.value,callback:function(e){t.$set(t.edited,"value",t._n(e))},expression:"edited.value"}})],1),e(s["a"],{attrs:{cols:"12",sm:"2"}},[e(n["a"],{attrs:{name:"save"},on:{click:t.onSave}},[t._v("Save")])],1)],1),e("h4",{staticClass:"text-center text-h5 ma-5"},[t._v("Add new category")]),e(l["a"],{staticClass:"justify-center align-center"},[e(s["a"],{attrs:{cols:"12",sm:"10"}},[e(c["a"],{attrs:{label:"New category",color:"teal lighten-1","hide-details":"",outlined:""},model:{value:t.newCategory,callback:function(e){t.newCategory=e},expression:"newCategory"}})],1),e(s["a"],{attrs:{cols:"12",sm:"2"}},[e(n["a"],{on:{click:t.addCategory}},[t._v("Add")])],1)],1)],1)},h=[],p=a("2f62"),m={name:"AddPaymentsForm",props:{edited:{type:Object,default:()=>({date:"",category:"",value:0})},index:{type:Number}},data(){return{date:"",category:"",value:"",newCategory:"",menu2:!1}},computed:{...Object(p["c"])(["categoryList","paymentsList"]),getCurrentDate(){const t=new Date,e=t.getDate(),a=Number(t.getMonth())+1,n=t.getFullYear();return`${e}.${a}.${n}`},getId(){const t=[];if(this.paymentsList.forEach(e=>t.push(e.id)),0===this.paymentsList.length)return 1;{const e=Math.max(...t);return+e+1}}},methods:{...Object(p["b"])(["fetchCategoryList"]),...Object(p["d"])(["ADD_CATEGORY","ADD_PAYMENT_LIST","EDIT_PAYMENT_LIST"]),onSave(){if(this.index>-1)this.EDIT_PAYMENT_LIST({index:this.index,newPayment:this.edited});else{const t={id:this.getId,date:this.edited.date||this.getCurrentDate,category:this.edited.category||"Not filled",value:this.edited.value||0};this.addPayment(t)}this.$emit("close")},addCategory(){const t=this.newCategory;""!==t&&(this.ADD_CATEGORY(t),this.newCategory="")},addPayment(t){this.ADD_PAYMENT_LIST(t)}},created(){this.fetchCategoryList()}},f=m,y=a("2877"),g=Object(y["a"])(f,u,h,!1,null,null,null);e["a"]=g.exports},6159:function(t,e,a){t.exports={context__wrap:"ContextMenu_context__wrap_24AyE",context__menu:"ContextMenu_context__menu_1YE4O"}},"9ed3":function(t,e,a){t.exports={wrapper:"ModalWindow_wrapper_2ObB6",wrapper__modal:"ModalWindow_wrapper__modal_2WsnV"}},a541:function(t,e,a){"use strict";var n=a("6159"),o=a.n(n);a.d(e,"default",(function(){return o.a}))},d503:function(t,e,a){"use strict";var n=a("9ed3"),o=a.n(n);a.d(e,"default",(function(){return o.a}))},e6f4:function(t,e,a){}});
//# sourceMappingURL=app.3fc221a7.js.map
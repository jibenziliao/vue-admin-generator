webpackJsonp([1],{123:function(e,t,n){"use strict";var a=n(16),o=n.n(a);t.a={login:function(e,t,n){return o.a.post("/login",e).then(function(e){return t(e)}).catch(function(e){return n(e)})},getUserList:function(e,t,n){return o.a.get("/users",e).then(function(e){return t(e)}).catch(function(e){return n(e)})}}},124:function(e,t,n){"use strict";var a=n(13),o=n.n(a),s=n(16),r=n.n(s),i=n(47);t.a={commonRequest:function(e,t,n){return r.a.request({url:e.url,method:e.method,baseUrl:i.a,data:o()({},e.data),timeout:i.b}).then(function(e){return t(e)}).catch(function(e){return n(e)})}}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),o=n(80),s=n.n(o),r=n(75),i=n(77),c=n.n(i),u=n(76),l=n(78),d=(n.n(l),n(79)),m=(n.n(d),n(74));a.default.config.productionTip=!1,m.a.bootstrap(),a.default.use(c.a),a.default.config.productionTip=!1,r.a.beforeEach(function(e,t,n){"/login"===e.path&&sessionStorage.removeItem("user"),JSON.parse(sessionStorage.getItem("user"))||"/login"===e.path?n():n({path:"/login"})}),new a.default({router:r.a,store:u.a,render:function(e){return e(s.a)}}).$mount("#app")},126:function(e,t,n){"use strict";var a=n(50),o=n.n(a),s=n(136),r=n.n(s),i=n(16),c=n.n(i),u=n(103),l=n.n(u),d=n(48),m=n(47);t.a={bootstrap:function(){var e=new l.a(c.a,{delayResponse:m.c});e.onGet("/success").reply(200,{msg:"success"}),e.onGet("/error").reply(500,{msg:"failure"}),e.onPost("/login").reply(function(e){var t=JSON.parse(e.data),n=t.username,a=t.password;return new r.a(function(e,t){var s=null;e(d.a.some(function(e){if(e.username===n&&e.password===a)return s=JSON.parse(o()(e)),s.password=void 0,!0})?[200,{code:200,msg:"请求成功",user:s}]:[200,{code:500,msg:"账号或密码错误"}])})}),e.onGet("/control").reply(200,{code:200,msg:"请求成功",controlData:d.b}),e.onGet("/employees").reply(200,{code:200,msg:"请求成功",employeeList:d.c,dataTotal:d.d})}}},127:function(e,t,n){"use strict";var a,o=n(51),s=n.n(o),r=n(13),i=n.n(r),c=n(49),u=n(123),l={userList:[],loading:!1,total:0},d={userList:function(e){return e.userList},loading:function(e){return l.loading}},m={login:function(e,t){var n=e.commit;n(c.d,i()({},t)),u.a.login(t,function(e){return n(c.e,{params:t,res:e})},function(e){return n(c.f,{params:t,err:e})})},getUserList:function(e,t){var n=e.commit;n(c.g,i()({},t)),u.a.getUserList(t,function(e){return n(c.h,{params:t,res:e})},function(e){return n(c.i,{params:t,err:e})})}},p=(a={},s()(a,c.d,function(e){e.loading=!0}),s()(a,c.e,function(e,t){var n=t.params,a=t.res;e.loading=!1,200===a.data.code?n.resolve(a):n.reject(a.data.msg)}),s()(a,c.f,function(e,t){var n=t.params,a=t.err;e.loading=!1,n.reject(a)}),s()(a,c.g,function(e){e.loading=!0}),s()(a,c.h,function(e,t){var n=t.params,a=t.res;e.loading=!1,n.resolve(a)}),s()(a,c.i,function(e,t){var n=t.params,a=t.err;e.loading=!1,n.reject(a)}),a);t.a={state:l,getters:d,actions:m,mutations:p}},128:function(e,t,n){"use strict";var a,o=n(51),s=n.n(o),r=n(49),i=n(124),c={userCount:0,activeCount:0,newCount:0,employeeList:[],dataTotal:0,pageLoading:!1},u={userCount:function(e){return e.userCount},activeCount:function(e){return e.activeCount},newCount:function(e){return e.newCount},pageLoading:function(e){return e.pageLoading},employeeList:function(e){return e.employeeList},dataTotal:function(e){return e.dataTotal}},l={commonAction:function(e,t){var n=e.commit;n(r.a,{params:t}),i.a.commonRequest(t,function(e){return n(r.b,{params:t,res:e})},function(e){return n(r.c,{params:t,err:e})})}},d=(a={},s()(a,r.a,function(e,t){t.params;e.pageLoading=!0}),s()(a,r.b,function(e,t){var n=t.params,a=t.res;e.pageLoading=!1,200===a.data.code?n.resolve(e,a.data):n.reject(e,a.data)}),s()(a,r.c,function(e,t){var n=t.params,a=t.err;e.pageLoading=!1,n.reject(e,a)}),a);t.a={state:c,getters:u,actions:l,mutations:d}},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{sysName:"vue-admin",collapsed:!1,sysUserName:"admin",sysUserAvatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png"}},methods:{handleopen:function(){},handleclose:function(){},handleselect:function(e,t){},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})},collapse:function(){this.collapsed=!this.collapsed},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},mounted:function(){}}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(50),o=n.n(a),s=n(13),r=n.n(s),i=n(48),c=n(23);t.default={data:function(){return{ruleForm:{account:"admin",checkPass:"123456"},rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0}},methods:{handleSubmit:function(e){var t=this;console.log(this.ruleForm),this.$refs.ruleForm.validate(function(e){if(!e)return!1;var n={username:t.ruleForm.account,password:t.ruleForm.checkPass};t.login(n)})},login:function(e){var t=this;console.log(e),this.$store.dispatch("login",r()({},e,{resolve:function(e){t.successTip("登录"),sessionStorage.setItem("user",o()(i.a[0])),setTimeout(function(){t.$router.push({path:"/"})},1500)},reject:function(e){return t.failedTip(e)}}))},successTip:function(e){this.$notify({title:"成功",message:e+"成功",type:"success"})},failedTip:function(e){this.$notify.error({title:"错误",message:e})}},mounted:function(){},computed:r()({},n.i(c.c)(["loading"]))}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),o=n.n(a),s=n(23);t.default={data:function(){return{}},methods:{getControlInfo:function(){this.$store.dispatch("commonAction",{url:"/control",method:"get",data:{},resolve:function(e,t){e.userCount=t.controlData.userCount,e.activeCount=t.controlData.activeCount,e.newCount=t.controlData.newCount},reject:function(e,t){}})}},mounted:function(){this.getControlInfo()},computed:o()({},n.i(s.c)(["userCount","activeCount","newCount","pageLoading"]))}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),o=n.n(a),s=n(23);t.default={data:function(){return{filters:{name:""}}},methods:o()({},n.i(s.b)(["commonAction"]),{handleCurrentChange:function(e){this.getList(e)},getList:function(e){this.$store.dispatch("commonAction",{url:"/employees",method:"get",data:{},resolve:function(e,t){e.employeeList=t.employeeList,e.dataTotal=t.dataTotal},reject:function(){}})},successTipFn:function(e){this.$notify({title:"成功",message:e+"成功",type:"success"})},failedTipFn:function(e){this.$notify.error({title:"错误",message:""+e})}}),mounted:function(){this.getList(this.reqParams)},filters:{stateText:function(e){return e?"在职":"离职"}},computed:o()({},n.i(s.c)(["employeeList","dataTotal","pageLoading"]))}},196:function(e,t){},197:function(e,t){},198:function(e,t){},199:function(e,t){},200:function(e,t){},205:function(e,t,n){n(199);var a=n(7)(n(130),n(216),"data-v-60d0448c",null);e.exports=a.exports},206:function(e,t,n){n(198);var a=n(7)(n(131),n(215),"data-v-4148c01e",null);e.exports=a.exports},207:function(e,t,n){n(196);var a=n(7)(n(132),n(212),"data-v-27dc1cd8",null);e.exports=a.exports},208:function(e,t,n){n(200);var a=n(7)(n(133),n(218),"data-v-b97e8022",null);e.exports=a.exports},209:function(e,t,n){var a=n(7)(null,n(214),null,null);e.exports=a.exports},210:function(e,t,n){var a=n(7)(null,n(217),null,null);e.exports=a.exports},211:function(e,t,n){var a=n(7)(null,n(219),null,null);e.exports=a.exports},212:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("el-card",{staticClass:"box-card"},[n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.pageLoading,expression:"pageLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"text item"},[e._v("\n      "+e._s(e.activeCount)+"\n    ")]),e._v(" "),n("div",{staticClass:"item"},[e._v("活跃用户数/人")])]),e._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"text item"},[e._v("\n      "+e._s(e.userCount)+"\n    ")]),e._v(" "),n("div",{staticClass:"item"},[e._v("用户总数/人")])]),e._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"text item"},[e._v("\n      "+e._s(e.newCount)+"\n    ")]),e._v(" "),n("div",{staticClass:"item"},[e._v("新增用户数/人")])])],1)},staticRenderFns:[]}},213:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},214:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("section",[e._v("\n  group...\n")])},staticRenderFns:[]}},215:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.ruleForm.account,callback:function(t){e.ruleForm.account=t},expression:"ruleForm.account"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"checkPass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm.checkPass,callback:function(t){e.ruleForm.checkPass=t},expression:"ruleForm.checkPass"}})],1),e._v(" "),n("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("\n    记住密码\n  ")]),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(t){t.preventDefault(),e.handleSubmit(t)}}},[e._v("\n      登录\n    ")])],1),e._v(" "),n("el-form-item",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[e._v("\n        用户名: admin\n      ")]),e._v(" "),n("el-col",{attrs:{span:12}},[e._v("\n        密码: 123456\n      ")])],1),e._v(" "),n("el-row",[n("el-col",[e._v("\n        可登录的用户在${project_root}/src/mock/data/exampleData.js中\n      ")])],1)],1)],1)},staticRenderFns:[]}},216:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:e.collapsed?"logo-collapse-width":"logo-width",attrs:{span:6}},[e._v("\n      "+e._s(e.collapsed?"":e.sysName)+"\n    ")]),e._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"tools",on:{click:function(t){t.preventDefault(),e.collapse(t)}}},[n("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:4}},[n("el-dropdown",{attrs:{trigger:"hover"}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{attrs:{src:this.sysUserAvatar}}),e._v(e._s(e.sysUserName))]),e._v(" "),n("el-dropdown-menu",{slot:"dropdown"},[n("el-dropdown-item",[e._v("我的消息")]),e._v(" "),n("el-dropdown-item",[e._v("设置")]),e._v(" "),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){e.logout(t)}}},[e._v("退出登录\n          ")])],1)],1)],1)],1),e._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":"",router:""},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.$router.options.routes,function(t,a){return t.hidden?e._e():[t.leaf?e._e():n("el-submenu",{attrs:{index:a+""}},[n("template",{slot:"title"},[n("i",{class:t.iconCls}),e._v("\n              "+e._s(t.name)+"\n            ")]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():n("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v("\n              "+e._s(t.name)+"\n            ")])})],2),e._v(" "),t.leaf&&t.children.length>0?n("el-menu-item",{key:t.children[0].path,attrs:{index:t.children[0].path}},[n("i",{class:t.iconCls}),e._v("\n            "+e._s(t.children[0].name)+"\n          ")]):e._e()]})],2),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed"},e._l(e.$router.options.routes,function(t,a){return t.hidden?e._e():n("li",{staticClass:"el-submenu item"},[t.leaf?[n("li",{staticClass:"el-submenu "},[n("div",{staticClass:"el-submenu__title el-menu-item",class:e.$route.path==t.children[0].path?"is-active":"",staticStyle:{"padding-left":"20px",height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(n){e.$router.push(t.children[0].path)}}},[n("i",{class:t.iconCls})])])]:[n("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"20px"},on:{mouseover:function(t){e.showMenu(a,!0)},mouseout:function(t){e.showMenu(a,!1)}}},[n("i",{class:t.iconCls})]),e._v(" "),n("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+a,on:{mouseover:function(t){e.showMenu(a,!0)},mouseout:function(t){e.showMenu(a,!1)}}},e._l(t.children,function(t){return t.hidden?e._e():n("li",{staticClass:"el-menu-item",class:e.$route.path==t.path?"is-active":"",staticStyle:{"padding-left":"40px"},on:{click:function(n){e.$router.push(t.path)}}},[e._v("\n                "+e._s(t.name)+"\n              ")])}))]],2)}))],1),e._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return n("el-breadcrumb-item",{key:t.name,attrs:{to:{path:t.path}}},[e._v("\n              "+e._s(t.name)+"\n            ")])}))],1),e._v(" "),n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("section",[e._v("\n  logs...\n")])},staticRenderFns:[]}},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[n("el-form",{attrs:{inline:!0,model:e.filters}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"按名称搜索"},model:{value:e.filters.name,callback:function(t){e.filters.name=t},expression:"filters.name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"plus"}},[e._v("\n          新增\n        ")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}],staticStyle:{width:"100%"},attrs:{data:e.employeeList,"highlight-current-row":"",stripe:""}},[n("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"gender",label:"性别",width:"160",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"age",label:"年龄",width:"160",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"joinDate",label:"入职时间",width:"160",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{label:"状态",width:"140",sortable:""},scopedSlots:e._u([["default",function(t){return[n("el-tag",{attrs:{type:!0===t.row.state?"primary":"danger"}},[e._v("\n          "+e._s(e._f("stateText")(t.row.state))+"\n        ")])]}]])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([["default",function(e){return[n("el-button",{attrs:{size:"small"}},[n("i",{staticClass:"fa fa-pencil-square-o"})])]}]])})],1),e._v(" "),n("el-col",{staticClass:"toolbar",attrs:{span:24}},[n("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"total, prev, pager, next, jumper","page-size":15,total:e.dataTotal},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},219:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("section",[e._v("\n  permissions\n")])},staticRenderFns:[]}},47:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return s});var a="",o=2e3,s=1e4},48:function(e,t,n){"use strict";var a=n(203),o=n.n(a);n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return d});for(var s=[{id:1,username:"admin",password:"123456",avatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",name:"张某某"},{id:2,username:"developer",password:"123456",avatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",name:"李四"},{id:3,username:"guest",password:"123456",avatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",name:"王五"}],r=[],i=0;i<86;i++)r.push(o.a.mock({id:o.a.Random.guid(),name:o.a.Random.cname(),addr:o.a.mock("@county(true)"),"age|18-60":1,birth:o.a.Random.date(),sex:o.a.Random.integer(0,1)}));for(var c=o.a.mock({"userCount|1000-9999":1201,"activeCount|1-999":728,"newCount|1-99":1}),u=[],l=0;l<15;l++)u.push(o.a.mock({id:o.a.Random.guid(),name:o.a.Random.cname(),"age|18-60":1,joinDate:o.a.Random.date(),"gender|1":["男","女"],"state|1":!0}));var d=999},49:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"f",function(){return s}),n.d(t,"g",function(){return r}),n.d(t,"h",function(){return i}),n.d(t,"i",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return d});var a="LOGIN",o="LOGIN_SUCCESS",s="LOGIN_FAILED",r="GET_USER_LIST",i="GET_USER_LIST_SUCCESS",c="GET_USER_LIST_FAILED",u="FETCH_BEGIN",l="FETCH_SUCCESS",d="FETCH_FAILED"},74:function(e,t,n){"use strict";var a=n(126);t.a=a.a},75:function(e,t,n){"use strict";var a=n(2),o=n(220),s=n(206),r=n.n(s),i=n(205),c=n.n(i),u=n(207),l=n.n(u),d=n(208),m=n.n(d),p=n(211),f=n.n(p),v=n(209),h=n.n(v),g=n(210),_=n.n(g);a.default.use(o.a),t.a=new o.a({routes:[{path:"/login",component:r.a,name:"Login",hidden:!0},{path:"/",component:c.a,name:"",iconCls:"fa fa-dashboard",leaf:!0,children:[{path:"/",component:l.a,name:"控制"}]},{path:"/",component:c.a,name:"设置",iconCls:"el-icon-setting",children:[{path:"/employee",component:m.a,name:"员工管理"},{path:"/permissions",component:f.a,name:"权限配置"},{path:"/groups",component:h.a,name:"角色管理"},{path:"/logs",component:_.a,name:"活动日志"}]}]})},76:function(e,t,n){"use strict";var a=n(2),o=n(23),s=n(127),r=n(128);a.default.use(o.a),t.a=new o.a.Store({modules:{account:s.a,common:r.a}})},78:function(e,t){},79:function(e,t){},80:function(e,t,n){n(197);var a=n(7)(n(129),n(213),null,null);e.exports=a.exports}},[125]);
//# sourceMappingURL=app.716581a025ed9511095d.js.map
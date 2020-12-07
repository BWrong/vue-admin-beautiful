/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2020-12-7 10:22:50
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c8a45a"],{"6bb2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menuManagement-container"},[a("el-divider",{attrs:{"content-position":"left"}},[e._v(" 演示环境仅做基础功能展示，若想实现不同角色的真实菜单配置，需将settings.js路由加载模式改为all模式，由后端全面接管路由渲染与权限控制 ")]),a("el-row",[a("el-col",{attrs:{xs:24,sm:24,md:8,lg:4,xl:4}},[a("el-tree",{attrs:{data:e.data,props:e.defaultProps,"node-key":"id","default-expanded-keys":["root"]},on:{"node-click":e.handleNodeClick}})],1),a("el-col",{attrs:{xs:24,sm:24,md:16,lg:20,xl:20}},[a("vab-query-form",[a("vab-query-form-top-panel",{attrs:{span:12}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v(" 添加 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText,"row-key":"path",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"name"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"path",label:"路径"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否隐藏"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(" "+e._s(n.hidden?"是":"否")+" ")])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否一直显示当前节点"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(" "+e._s(n.alwaysShow?"是":"否")+" ")])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"component",label:"vue文件路径"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"redirect",label:"重定向"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"meta.title",label:"标题"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.meta?a("span",[n.meta.icon?a("vab-icon",{attrs:{icon:["fas",n.meta.icon]}}):e._e()],1):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否固定"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.meta?a("span",[e._v(" "+e._s(n.meta.affix?"是":"否")+" ")]):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否无缓存"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.meta?a("span",[e._v(" "+e._s(n.meta.noKeepAlive?"是":"否")+" ")]):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"badge"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.meta?a("span",[e._v(" "+e._s(n.meta.badge)+" ")]):e._e()]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(n)}}},[e._v("删除")])]}}])})],1)],1)],1),a("edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},o=[],r=(a("96cf"),a("1da1")),l=a("2033"),s=a("754e"),i=a("f5ce"),u={name:"MenuManagement",components:{Edit:i["default"]},data:function(){return{data:[],defaultProps:{children:"children",label:"label"},list:[],listLoading:!0,elementLoadingText:"正在加载..."}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["getTree"])();case 2:a=t.sent,e.data=a.data,e.fetchData();case 5:case"end":return t.stop()}}),t)})))()},methods:{handleEdit:function(e){e.path?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete:function(e){var t=this;e.id&&this.$baseConfirm("你确定要删除当前项吗",null,Object(r["a"])(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(s["doDelete"])({ids:e.id});case 2:n=a.sent,o=n.msg,t.$baseMessage(o,"success"),t.fetchData();case 6:case"end":return a.stop()}}),a)}))))},fetchData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(l["getRouterList"])();case 3:a=t.sent,n=a.data,e.list=n,setTimeout((function(){e.listLoading=!1}),300);case 7:case"end":return t.stop()}}),t)})))()},handleNodeClick:function(e){this.fetchData()}}},c=u,d=a("2877"),f=Object(d["a"])(c,n,o,!1,null,null,null);t["default"]=f.exports},"754e":function(e,t,a){"use strict";a.r(t),a.d(t,"getTree",(function(){return o})),a.d(t,"doEdit",(function(){return r})),a.d(t,"doDelete",(function(){return l}));var n=a("b775");function o(e){return Object(n["default"])({url:"/menuManagement/getTree",method:"post",data:e})}function r(e){return Object(n["default"])({url:"/menuManagement/doEdit",method:"post",data:e})}function l(e){return Object(n["default"])({url:"/menuManagement/doDelete",method:"post",data:e})}},f5ce:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[a("el-divider",{attrs:{"content-position":"left"}},[e._v(" 这里就不具体写了，请自行完善 ")]),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"name",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"路径",prop:"path"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},o=[],r=(a("96cf"),a("1da1")),l=a("754e"),s={name:"MenuManagementEdit",data:function(){return{form:{},rules:{id:[{required:!0,trigger:"blur",message:"请输入路径"}]},title:"",dialogFormVisible:!1}},created:function(){},methods:{showEdit:function(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close:function(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=10;break}return t.next=3,Object(l["doEdit"])(e.form);case 3:n=t.sent,o=n.msg,e.$baseMessage(o,"success"),e.$emit("fetch-data"),e.close(),t.next=11;break;case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},i=s,u=a("2877"),c=Object(u["a"])(i,n,o,!1,null,null,null);t["default"]=c.exports}}]);
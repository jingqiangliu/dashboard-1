!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.wedn=e():t.wedn=e()}(this,function(){return webpackJsonpwedn([19,20],{116:function(t,e,n){"use strict";var r=n(2),o=n.n(r),a=n(227),u=n.n(a);o.a.use(u.a),e.a=new u.a({locale:"cn",messages:{cn:n(211)}})},117:function(t,e,n){"use strict";var r=n(18),o=n.n(r),a=n(29),u=n(17);e.a=function(t){u.a.beforeHooks.unshift(function(t,e,n){if(!t.meta.requiresAuth)return n();a.a.dispatch("checkLogin").then(function(e){if(e)return n();console.log("Unauthorized"),n({name:"login",query:{redirect:t.fullPath}})})}),u.a.beforeEach(function(t,e,n){if("login"!==t.name)return n();a.a.dispatch("checkLogin").then(function(e){if(!e)return n();console.log("dont need authorize"),n({path:t.query.redirect||"/"})})}),o()(t.prototype,{$authorize:{get:function(){return a.a.dispatch("checkLogin")}}})}},118:function(t,e,n){"use strict";var r=n(18),o=n.n(r),a=n(4);e.a=function(t){t.axios=a.b,o()(t.prototype,{$axios:{get:function(){return a.b}}})}},119:function(t,e,n){"use strict";var r=n(118),o=n(121),a=n(120),u=n(117);e.a={install:function(t){n.i(o.a)(t,{property:"title",separator:" « "}),n.i(r.a)(t),n.i(a.a)(t),n.i(u.a)(t)}}},120:function(t,e,n){"use strict";var r=n(18),o=n.n(r),a=n(30),u=n.n(a),c=n(17),i=n(4);e.a=function(t){c.a.beforeEach(function(t,e,n){i.c.start(),n()}),c.a.afterEach(function(t){i.c.done()}),i.b.interceptors.request.use(function(t){return i.c.start(),t}),i.b.interceptors.response.use(function(t){return i.c.done(),t},function(t){return i.c.done(),u.a.reject(t)}),o()(t.prototype,{$nprogress:{get:function(){return i.c}}})}},121:function(t,e,n){"use strict";var r=n(18),o=n.n(r),a=n(29),u=n(17);e.a=function(t,e){var n=void 0;u.a.afterEach(function(t){n=t.matched.map(function(t){return(t.components.default[e.property]||t.components.default.name).toUpperCase()}).reverse(),a.a.dispatch("changeTitle",n.join(e.separator))}),o()(t.prototype,{$title:{get:function(){return function(t,r){r?a.a.dispatch("changeTitle",t.toUpperCase()):(n[0]=t.toUpperCase(),a.a.dispatch("changeTitle",n.join(e.separator)))}}}})}},122:function(t,e,n){"use strict";e.a=[{name:"demo",path:"demo",meta:{requiresAuth:!1},component:function(t){return n.e(0).then(function(){return t(n(244))}.bind(null,n)).catch(n.oe)}},{name:"demo-data",path:"demo/data",meta:{requiresAuth:!1},component:function(t){return n.e(0).then(function(){return t(n(242))}.bind(null,n)).catch(n.oe)}},{name:"demo-vuex",path:"demo/vuex",meta:{requiresAuth:!1},component:function(t){return n.e(0).then(function(){return t(n(247))}.bind(null,n)).catch(n.oe)}},{name:"demo-i18n",path:"demo/i18n",meta:{requiresAuth:!1},component:function(t){return n.e(0).then(function(){return t(n(243))}.bind(null,n)).catch(n.oe)}},{name:"demo-proxy",path:"demo/proxy",meta:{requiresAuth:!1},component:function(t){return n.e(0).then(function(){return t(n(246))}.bind(null,n)).catch(n.oe)}},{name:"demo-cors",path:"demo/cors",meta:{requiresAuth:!1},component:function(t){return n.e(0).then(function(){return t(n(241))}.bind(null,n)).catch(n.oe)}},{name:"demo-params",path:"demo/:name",meta:{requiresAuth:!1},component:function(t){return n.e(0).then(function(){return t(n(245))}.bind(null,n)).catch(n.oe)}},{name:"components",path:"components",meta:{requiresAuth:!1},component:function(t){return n.e(1).then(function(){return t(n(239))}.bind(null,n)).catch(n.oe)}},{name:"components-icons",path:"components/icons",meta:{requiresAuth:!1},component:function(t){return n.e(1).then(function(){return t(n(238))}.bind(null,n)).catch(n.oe)}},{name:"components-button",path:"components/button",meta:{requiresAuth:!1},component:function(t){return n.e(1).then(function(){return t(n(237))}.bind(null,n)).catch(n.oe)}},{name:"components-table",path:"components/table",meta:{requiresAuth:!1},component:function(t){return n.e(1).then(function(){return t(n(240))}.bind(null,n)).catch(n.oe)}}]},123:function(t,e,n){"use strict";var r=n(122);e.a=[{name:"dashboard",path:"",meta:{requiresAuth:!0},component:function(t){return n.e(8).then(function(){return t(n(256))}.bind(null,n)).catch(n.oe)}},{name:"update",path:"update",meta:{requiresAuth:!0},component:function(t){return n.e(11).then(function(){return t(n(268))}.bind(null,n)).catch(n.oe)}},{name:"about",path:"about",meta:{requiresAuth:!0},component:function(t){return n.e(16).then(function(){return t(n(250))}.bind(null,n)).catch(n.oe)}},{name:"posts",path:"posts/:type",meta:{requiresAuth:!0},component:function(t){return n.e(3).then(function(){return t(n(263))}.bind(null,n)).catch(n.oe)}},{name:"new",path:"new/:type",meta:{requiresAuth:!0},component:function(t){return n.e(3).then(function(){return t(n(260))}.bind(null,n)).catch(n.oe)}},{name:"edit",path:"edit/:type/:slug?",meta:{requiresAuth:!0},component:function(t){return n.e(3).then(function(){return t(n(253))}.bind(null,n)).catch(n.oe)}},{name:"media",path:"media",meta:{requiresAuth:!0},component:function(t){return n.e(14).then(function(){return t(n(258))}.bind(null,n)).catch(n.oe)}},{name:"upload",path:"upload",meta:{requiresAuth:!0},component:function(t){return n.e(10).then(function(){return t(n(269))}.bind(null,n)).catch(n.oe)}},{name:"terms",path:"terms/:type",meta:{requiresAuth:!0},component:function(t){return n.e(12).then(function(){return t(n(265))}.bind(null,n)).catch(n.oe)}},{name:"users",path:"users",meta:{requiresAuth:!0},component:function(t){return n.e(5).then(function(){return t(n(270))}.bind(null,n)).catch(n.oe)}},{name:"profile",path:"profile",meta:{requiresAuth:!0},component:function(t){return n.e(5).then(function(){return t(n(264))}.bind(null,n)).catch(n.oe)}},{name:"comments",path:"comments",meta:{requiresAuth:!0},component:function(t){return n.e(15).then(function(){return t(n(251))}.bind(null,n)).catch(n.oe)}},{name:"themes",path:"themes",meta:{requiresAuth:!0},component:function(t){return n.e(2).then(function(){return t(n(266))}.bind(null,n)).catch(n.oe)}},{name:"customize",path:"customize",meta:{requiresAuth:!0},component:function(t){return n.e(2).then(function(){return t(n(252))}.bind(null,n)).catch(n.oe)}},{name:"widgets",path:"widgets",meta:{requiresAuth:!0},component:function(t){return n.e(2).then(function(){return t(n(271))}.bind(null,n)).catch(n.oe)}},{name:"navigation",path:"navigation",meta:{requiresAuth:!0},component:function(t){return n.e(2).then(function(){return t(n(259))}.bind(null,n)).catch(n.oe)}},{name:"plugins",path:"plugins",meta:{requiresAuth:!0},component:function(t){return n.e(6).then(function(){return t(n(262))}.bind(null,n)).catch(n.oe)}},{name:"install",path:"install/:type",meta:{requiresAuth:!0},component:function(t){return n.e(6).then(function(){return t(n(257))}.bind(null,n)).catch(n.oe)}},{name:"tools",path:"tools",meta:{requiresAuth:!0},component:function(t){return n.e(4).then(function(){return t(n(267))}.bind(null,n)).catch(n.oe)}},{name:"import",path:"import",meta:{requiresAuth:!0},component:function(t){return n.e(4).then(function(){return t(n(255))}.bind(null,n)).catch(n.oe)}},{name:"export",path:"export",meta:{requiresAuth:!0},component:function(t){return n.e(4).then(function(){return t(n(254))}.bind(null,n)).catch(n.oe)}},{name:"options",path:"options/:type",meta:{requiresAuth:!0},component:function(t){return n.e(13).then(function(){return t(n(261))}.bind(null,n)).catch(n.oe)}}].concat(r.a)},124:function(t,e,n){"use strict";var r=n(123);e.a=[{name:"login",path:"/login",meta:{requiresAuth:!1},component:function(t){return n.e(9).then(function(){return t(n(249))}.bind(null,n)).catch(n.oe)}},{path:"/",meta:{requiresAuth:!0},component:function(t){return n.e(7).then(function(){return t(n(248))}.bind(null,n)).catch(n.oe)},children:r.a},{name:"not-found",path:"*",meta:{requiresAuth:!1},component:function(t){return n.e(17).then(function(){return t(n(236))}.bind(null,n)).catch(n.oe)}}]},125:function(t,e,n){"use strict";n(4)},126:function(t,e,n){"use strict";var r=(n(125),n(127),n(128),n(129),n(130));n(131);n.d(e,"a",function(){return r.a})},127:function(t,e,n){"use strict";n(4)},128:function(t,e,n){"use strict";n(4)},129:function(t,e,n){"use strict";n(4)},130:function(t,e,n){"use strict";var r=n(4);e.a={get:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.b.get.apply(r.b,["/tokens"].concat(e))},delete:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.b.delete.apply(r.b,["/tokens"].concat(e))},head:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.b.head.apply(r.b,["/tokens"].concat(e))},post:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.b.post.apply(r.b,["/tokens"].concat(e))},put:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.b.put.apply(r.b,["/tokens"].concat(e))},patch:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.b.patch.apply(r.b,["/tokens"].concat(e))}}},131:function(t,e,n){"use strict";n(4)},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"changeTitle",function(){return r}),n.d(e,"toggleSidebarCollapse",function(){return o}),n.d(e,"increment",function(){return a}),n.d(e,"incrementAsync",function(){return u}),n.d(e,"decrement",function(){return c}),n.d(e,"decrementAsync",function(){return i});var r=function(t,e){(0,t.commit)("CHANGE_TITLE",e)},o=function(t){(0,t.commit)("TOGGLE_SIDEBAR_COLLAPSE")},a=function(t){(0,t.commit)("INCREMENT")},u=function(t){var e=t.commit;setTimeout(function(){return e("INCREMENT")},1e3)},c=function(t){(0,t.commit)("DECREMENT")},i=function(t){var e=t.commit;setTimeout(function(){return e("DECREMENT")},1e3)}},133:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"title",function(){return r}),n.d(e,"header",function(){return o}),n.d(e,"sidebar",function(){return a}),n.d(e,"count",function(){return u});var r=function(t){return t.title},o=function(t){return t.header},a=function(t){return t.sidebar},u=function(t){return t.count+2}},134:function(t,e,n){"use strict";var r={},o={},a={},u={};e.a={state:r,getters:o,mutations:a,actions:u}},135:function(t,e,n){"use strict";var r=n(4),o={message:r.a.get("wedn_net_demo_message")},a={message:function(t){return t.message}},u={CHANGE_MESSAGE:function(t,e){t.message=e}},c={changeMessage:function(t,e){var n=t.commit;console.log(e),n("CHANGE_MESSAGE",e)}};e.a={state:o,getters:a,mutations:u,actions:c}},136:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(134),o=n(137),a=n(138),u=n(139),c=n(140),i=n(141),s=n(135);n.d(e,"comments",function(){return r.a}),n.d(e,"options",function(){return o.a}),n.d(e,"posts",function(){return a.a}),n.d(e,"terms",function(){return u.a}),n.d(e,"tokens",function(){return c.a}),n.d(e,"users",function(){return i.a}),n.d(e,"demo",function(){return s.a})},137:function(t,e,n){"use strict";var r=n(149),o=n.n(r),a=n(148),u=n.n(a),c=n(147),i=n.n(c),s=this,m={options:{}},p={options:function(t){return t.options}},f={CHANGE_OPTIONS:function(t,e){i()(t.options,e)}},l={changeOptions:function(){var t=u()(o.a.mark(function t(e,n){var r=e.commit;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r("CHANGE_OPTIONS",{});case 1:case"end":return t.stop()}},t,s)}));return function(e,n){return t.apply(this,arguments)}}()};e.a={state:m,getters:p,mutations:f,actions:l}},138:function(t,e,n){"use strict";var r={},o={},a={},u={};e.a={state:r,getters:o,mutations:a,actions:u}},139:function(t,e,n){"use strict";var r={},o={},a={},u={};e.a={state:r,getters:o,mutations:a,actions:u}},140:function(t,e,n){"use strict";var r=n(30),o=n.n(r),a=n(126),u=n(4),c="wedn_net_access_token",i={token:u.a.get(c),current_user:{id:null,slug:null,avatar:n(226),username:"zce",nickname:"iceStone",email:null,mobile:null}},s={token:function(t){return t.token},currentUser:function(t){return t.current_user}},m={CHANGE_TOKEN:function(t,e){return t.token=e,t.token?u.a.set(c,e):u.a.remove(c)},CHANGE_USER:function(t,e){t.current_user.id=e.id,t.current_user.slug=e.slug,t.current_user.avatar=e.avatar,t.current_user.username=e.username,t.current_user.nickname=e.nickname,t.current_user.email=e.email,t.current_user.mobile=e.mobile}},p={initToken:function(t){(0,t.commit)("CHANGE_TOKEN",u.a.get(c))},createToken:function(t,e){var n=t.commit,r=e.username,o=e.password;return a.a.post({username:r.trim(),password:o.trim()}).then(function(t){var e=t.data.token||"";return n("CHANGE_TOKEN",e),e})},checkToken:function(t,e){var n=t.commit,r=t.dispatch;return a.a.get({params:{token:e}}).then(function(t){return n("CHANGE_USER",t.data),t.data}).catch(function(t){return console.log(t),r("deleteToken"),!1})},checkLogin:function(t){var e=t.getters,n=t.dispatch;return e.token?n("checkToken",e.token):o.a.resolve(!1)},deleteToken:function(t){(0,t.commit)("CHANGE_TOKEN","")}};e.a={state:i,getters:s,mutations:m,actions:p}},141:function(t,e,n){"use strict";var r={},o={},a={},u={};e.a={state:r,getters:o,mutations:a,actions:u}},142:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);n.d(e,"CHANGE_TITLE",function(){return o}),n.d(e,"TOGGLE_SIDEBAR_COLLAPSE",function(){return a}),n.d(e,"INCREMENT",function(){return u}),n.d(e,"DECREMENT",function(){return c});var o=function(t,e){document.title=t.title=e},a=function(t){t.sidebar.collapse=!t.sidebar.collapse,r.a.set("wedn_net_sidebar_collapse",t.sidebar.collapse)},u=function(t){t.count++,r.a.set("wedn_net_demo_count",t.count)},c=function(t){t.count--,r.a.set("wedn_net_demo_count",t.count)}},143:function(t,e,n){"use strict";var r=n(4);e.a={title:"WEDN.NET",header:{name:"WEDN.NET",menus:[{text:"0",icon:"bubble",name:"comments"},{text:"新建",icon:"plus",name:"new",params:{type:"blog"},children:[{text:"文章",name:"new",params:{type:"blog"}},{text:"媒体",name:"upload"},{text:"页面",name:"new",params:{type:"page"}},{text:"用户",name:"users"}]},{text:"组件",icon:"lab",name:"components",children:[{text:"Icons",name:"components-icons"},{text:"Button",name:"components-button"},{text:"Table",name:"components-table"}]},{text:"演示",icon:"magic-wand",name:"demo",children:[{text:"Data",name:"demo-data"},{text:"Params",name:"demo-params",params:{name:"汪磊"}},{text:"Vuex",name:"demo-vuex"},{text:"I18n",name:"demo-i18n"},{divider:!0},{text:"Proxy",name:"demo-proxy"},{text:"CORS",name:"demo-cors"},{divider:!0},{text:"NotFound",path:"/hello-world"}]}]},sidebar:{copyright:"WEDN.NET",copyright_link:"https://github.com/zce/dashboard",collapse:r.a.get("wedn_net_sidebar_collapse"),menus:[{title:"Actions"},{text:"仪表盘",icon:"meter",name:"dashboard",children:[{text:"首页",name:"dashboard"},{text:"更新",name:"update"}]},{divider:!0},{text:"文章",icon:"pushpin",name:"posts",params:{type:"blog"},children:[{text:"所有文章",name:"posts",params:{type:"blog"}},{text:"写文章",name:"new",params:{type:"blog"}},{text:"分类目录",name:"terms",params:{type:"blog-category"}},{text:"标签",name:"terms",params:{type:"blog-tag"}}]},{text:"页面",icon:"newspaper",name:"posts",params:{type:"page"},children:[{text:"所有页面",name:"posts",params:{type:"page"}},{text:"新建页面",name:"new",params:{type:"page"}}]},{text:"多媒体",icon:"images",name:"media",children:[{text:"媒体库",name:"media"},{text:"添加",name:"upload"}]},{divider:!0},{text:"用户",icon:"users",name:"users",children:[{text:"所有用户",name:"users"},{text:"我的个人资料",name:"profile"}]},{text:"评论",icon:"bubbles",name:"comments"},{divider:!0},{text:"外观",icon:"paint-format",name:"themes",children:[{text:"主题",name:"themes"},{text:"自定义",name:"customize"},{text:"小工具",name:"widgets"},{text:"菜单",name:"navigation"}]},{text:"插件",icon:"power-cord",name:"plugins",children:[{text:"已安装插件",name:"plugins"},{text:"安装插件",name:"install",params:{type:"plugin"}}]},{text:"工具",icon:"wrench",name:"tools",children:[{text:"可用工具",name:"tools"},{text:"导入",name:"import"},{text:"导出",name:"export"}]},{text:"设置",icon:"equalizer",name:"options",params:{type:"general"},children:[{text:"常规",name:"options",params:{type:"general"}},{divider:!0},{text:"撰写",name:"options",params:{type:"writing"}},{text:"阅读",name:"options",params:{type:"reading"}},{text:"讨论",name:"options",params:{type:"discussion"}},{text:"多媒体",name:"options",params:{type:"media"}},{text:"固定链接",name:"options",params:{type:"permalink"}}]}]},count:r.a.get("wedn_net_demo_count")||0}},144:function(t,e,n){"use strict";var r=n(97),o=n.n(r),a=n(52),u=o.a.create({baseURL:"http://jsonplaceholder.micua.com/api/v1/",timeout:3e3,headers:{Authorization:!0,"X-Requested-With":"XMLHttpRequest","X-Custom-Header":"foobar"}});u.interceptors.request.use(function(t){var e=a.a.get("wedn_net_access_token");return e&&t.headers.Authorization&&(t.headers.Authorization="Bearer "+e),t}),e.a=u},145:function(t,e,n){"use strict";var r=n(207),o=(n.n(r),n(212)),a=n.n(o);e.a=a.a},146:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},17:function(t,e,n){"use strict";var r=n(2),o=n.n(r),a=n(230),u=n(124);o.a.use(a.a),e.a=new a.a({mode:"history",base:"/",routes:u.a})},206:function(t,e){},207:function(t,e){},208:function(t,e){},211:function(t,e){t.exports={message:{hello:"世界你好",hello2:"{name}你好"}}},226:function(t,e,n){t.exports=n.p+"assets/img/avatar.fd116f.svg"},228:function(t,e,n){n(208);var r=n(74)(n(146),n(229),null,null);t.exports=r.exports},229:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},staticRenderFns:[]}},233:function(t,e,n){t.exports=n(73)},29:function(t,e,n){"use strict";var r=n(2),o=n.n(r),a=n(75),u=n(143),c=n(133),i=n(142),s=n(132),m=n(136);o.a.use(a.c);var p=!1,f=[],l=new a.c.Store({state:u.a,getters:c,mutations:i,actions:s,modules:m,strict:p,plugins:f});e.a=l},4:function(t,e,n){"use strict";var r=n(144),o=n(52),a=n(145);n.d(e,"b",function(){return r.a}),n.d(e,"a",function(){return o.a}),n.d(e,"c",function(){return a.a})},52:function(t,e,n){"use strict";var r=n(215),o=n.n(r);e.a=o.a},73:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n.n(r),a=n(232),u=(n.n(a),n(193)),c=n.n(u),i=n(228),s=n.n(i),m=n(116),p=n(29),f=n(17),l=n(119),d=n(206);n.n(d);o.a.use(c.a),o.a.use(l.a),n.i(a.sync)(p.a,f.a,{moduleName:"route"}),o.a.config.productionTip=!1,o.a.config.debug=!1,new o.a({name:"root",i18n:m.a,store:p.a,router:f.a,render:function(t){return t(s.a)}}).$mount("#app")}},[233])});
//# sourceMappingURL=app.cf033f.js.map
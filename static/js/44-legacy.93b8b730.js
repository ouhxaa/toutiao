(self["webpackChunkitcast_toutiao"]=self["webpackChunkitcast_toutiao"]||[]).push([[44],{3044:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"user-container"},[r("div",{staticClass:"user-card"},[r("van-cell",{scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"avatar",attrs:{src:t.user.photo,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[r("span",{staticClass:"username"},[t._v(t._s(t.user.name))])]},proxy:!0},{key:"label",fn:function(){return[r("van-tag",{attrs:{color:"#fff","text-color":"#007bff"}},[t._v("申请认证")])]},proxy:!0}])}),r("div",{staticClass:"user-data"},[r("div",{staticClass:"user-data-item"},[r("span",[t._v(t._s(t.user.art_count))]),r("span",[t._v("动态")])]),r("div",{staticClass:"user-data-item"},[r("span",[t._v(t._s(t.user.follow_count))]),r("span",[t._v("关注")])]),r("div",{staticClass:"user-data-item"},[r("span",[t._v(t._s(t.user.fans_count))]),r("span",[t._v("粉丝")])])])],1),r("van-cell-group",{staticClass:"action-card"},[r("van-cell",{attrs:{icon:"edit",title:"编辑资料","is-link":"",to:"/user_editor"}}),r("van-cell",{attrs:{icon:"chat-o",title:"兔子同学","is-link":"",to:"/chat"}}),r("van-cell",{attrs:{icon:"warning-o",title:"退出登录","is-link":""},on:{click:t.quit}})],1)],1),r("van-tabbar",{attrs:{route:""}},[r("van-tabbar-item",{attrs:{replace:"",to:"/layout/home",icon:"home-o"}},[t._v("首页")]),r("van-tabbar-item",{attrs:{replace:"",to:"/layout/user",icon:"setting-o"}},[t._v("我的")])],1)],1)},a=[],s=(r(361),r(26)),i=r(1797),c=r(9873),o=(r(4916),r(5306),r(3040),r(4141)),u=r(2740),l={data:function(){return{user:{}}},created:function(){var t=this;return(0,c.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.userInfoAPI();case 2:r=e.sent,t.user=r.data.data,t.toSetUser(r.data.data);case 5:case"end":return e.stop()}}),e)})))()},methods:(0,i.Z)((0,i.Z)({},(0,u.OI)(["toSetUser"])),{},{quit:function(){var t=this;s.Z.confirm({title:"提示",message:"这就走了?不爱我了吗?"}).then((function(){(0,o.gy)(),t.$router.replace("/login")})).catch((function(){}))}})},f=l,p=r(1001),v=(0,p.Z)(f,n,a,!1,null,"0025ca12",null),d=v.exports},9337:function(t,e,r){var n=r(2109),a=r(9781),s=r(3887),i=r(5656),c=r(1236),o=r(6135);n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),a=c.f,u=s(n),l={},f=0;while(u.length>f)r=a(n,e=u[f++]),void 0!==r&&o(l,e,r);return l}})},1797:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=44-legacy.93b8b730.js.map
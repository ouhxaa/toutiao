"use strict";(self["webpackChunkitcast_toutiao"]=self["webpackChunkitcast_toutiao"]||[]).push([[44],{3044:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"user-container"},[s("div",{staticClass:"user-card"},[s("van-cell",{scopedSlots:t._u([{key:"icon",fn:function(){return[s("img",{staticClass:"avatar",attrs:{src:t.user.photo,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[s("span",{staticClass:"username"},[t._v(t._s(t.user.name))])]},proxy:!0},{key:"label",fn:function(){return[s("van-tag",{attrs:{color:"#fff","text-color":"#007bff"}},[t._v("申请认证")])]},proxy:!0}])}),s("div",{staticClass:"user-data"},[s("div",{staticClass:"user-data-item"},[s("span",[t._v(t._s(t.user.art_count))]),s("span",[t._v("动态")])]),s("div",{staticClass:"user-data-item"},[s("span",[t._v(t._s(t.user.follow_count))]),s("span",[t._v("关注")])]),s("div",{staticClass:"user-data-item"},[s("span",[t._v(t._s(t.user.fans_count))]),s("span",[t._v("粉丝")])])])],1),s("van-cell-group",{staticClass:"action-card"},[s("van-cell",{attrs:{icon:"edit",title:"编辑资料","is-link":"",to:"/user_editor"}}),s("van-cell",{attrs:{icon:"chat-o",title:"兔子同学","is-link":"",to:"/chat"}}),s("van-cell",{attrs:{icon:"warning-o",title:"退出登录","is-link":""},on:{click:t.quit}})],1)],1),s("van-tabbar",{attrs:{route:""}},[s("van-tabbar-item",{attrs:{replace:"",to:"/layout/home",icon:"home-o"}},[t._v("首页")]),s("van-tabbar-item",{attrs:{replace:"",to:"/layout/user",icon:"setting-o"}},[t._v("我的")])],1)],1)},n=[],r=(s(361),s(26)),i=s(4141),o=s(2740),c={data(){return{user:{}}},async created(){const t=await this.$API.userInfoAPI();this.user=t.data.data,this.toSetUser(t.data.data)},methods:{...(0,o.OI)(["toSetUser"]),quit(){r.Z.confirm({title:"提示",message:"这就走了?不爱我了吗?"}).then((()=>{(0,i.gy)(),this.$router.replace("/login")})).catch((()=>{}))}}},l=c,u=s(1001),v=(0,u.Z)(l,e,n,!1,null,"0025ca12",null),d=v.exports}}]);
//# sourceMappingURL=44.6ef91f2e.js.map
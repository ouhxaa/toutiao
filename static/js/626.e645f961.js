"use strict";(self["webpackChunkitcast_toutiao"]=self["webpackChunkitcast_toutiao"]||[]).push([[626],{6626:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("van-nav-bar",{attrs:{title:"❤L O G I N❤"}}),i("van-form",{on:{submit:e.onSubmit}},[i("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"请输入手机号",rules:[{required:!0,message:"请填写手机号",trigger:"onChange",pattern:/^1[3456789]\d{9}$/}]},model:{value:e.formLogin.mobile,callback:function(t){e.$set(e.formLogin,"mobile",t)},expression:"formLogin.mobile"}}),i("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码",trigger:"onChange",pattern:/^\d{6}$/}]},model:{value:e.formLogin.code,callback:function(t){e.$set(e.formLogin,"code",t)},expression:"formLogin.code"}}),i("div",{staticStyle:{margin:"16px"}},[i("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",loading:this.isLoading,disabled:this.isLoading,"loading-text":"耐心一点..."}},[e._v("提交")])],1)],1)],1)},o=[],a=(i(691),i(2249)),s=i(2740),r={name:"login",data(){return{formLogin:{mobile:"13888888888",code:246810},isLoading:!1}},methods:{...(0,s.nv)(["asyncLoginAction"]),async onSubmit(){this.isLoading=!0;try{await this.asyncLoginAction(this.formLogin),(0,a.Z)({type:"success",message:"登录成功"}),this.isLoading=!1,this.$router.push({name:"layout"})}catch(e){console.dir(e),(0,a.Z)({type:"warning",message:"手机号或密码错误"}),this.isLoading=!1}}}},l=r,c=i(1001),d=(0,c.Z)(l,n,o,!1,null,"8286578a",null),u=d.exports}}]);
//# sourceMappingURL=626.e645f961.js.map
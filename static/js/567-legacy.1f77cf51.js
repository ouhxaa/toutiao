"use strict";(self["webpackChunkitcast_toutiao"]=self["webpackChunkitcast_toutiao"]||[]).push([[567],{5567:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{fixed:"",title:"文章详情","left-arrow":""},on:{"click-left":function(e){return t.$router.back()}}}),n("div",{staticClass:"article-container"},[n("h1",{staticClass:"art-title"},[t._v(t._s(t.artObj.title))]),n("van-cell",{attrs:{center:"",title:t.artObj.aut_name,label:t.artObj.pubdate},scopedSlots:t._u([{key:"icon",fn:function(){return[n("img",{staticClass:"avatar",attrs:{src:t.artObj.aut_photo,alt:""}})]},proxy:!0},{key:"default",fn:function(){return[n("div",[t.artObj.is_followed?n("van-button",{attrs:{type:"info",size:"mini"},on:{click:function(e){return t.followedFn(!1)}}},[t._v("已关注")]):n("van-button",{attrs:{icon:"plus",type:"info",size:"mini",plain:""},on:{click:function(e){return t.followedFn(!0)}}},[t._v("关注")])],1)]},proxy:!0}])}),n("van-divider"),n("div",{staticClass:"art-content",domProps:{innerHTML:t._s(t.artObj.content)}}),n("van-divider",[t._v("End")]),n("div",{staticClass:"like-box"},[1==t.artObj.attitude?n("van-button",{attrs:{icon:"good-job",type:"danger",size:"small"},on:{click:function(e){return t.loveFn(!1)}}},[t._v("已点赞")]):n("van-button",{attrs:{icon:"good-job-o",type:"danger",plain:"",size:"small"},on:{click:function(e){return t.loveFn(!0)}}},[t._v("点赞")])],1)],1),n("Comment")],1)},r=[],i=n(9873),o=(n(3040),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",offset:"50","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"cmt-list"},t._l(t.commentList,(function(e){return n("div",{key:e.com_id,staticClass:"cmt-item"},[n("div",{staticClass:"cmt-header"},[n("div",{staticClass:"cmt-header-left"},[n("img",{staticClass:"avatar",attrs:{src:e.aut_photo,alt:""}}),n("span",{staticClass:"uname"},[t._v(t._s(e.aut_name))])]),n("div",{staticClass:"cmt-header-right"},[!0===e.is_liking?n("van-icon",{attrs:{name:"like",size:"16",color:"red"},on:{click:function(n){return t.loveFn(!0,e)}}}):n("van-icon",{attrs:{name:"like-o",size:"16",color:"gray"},on:{click:function(n){return t.loveFn(!1,e)}}})],1)]),n("div",{staticClass:"cmt-body"},[t._v(" "+t._s(e.content)+" ")]),n("div",{staticClass:"cmt-footer"},[t._v(t._s(t.timeAgo(e.pubdate)))])])})),0)]),!1===t.isShowCmtInput?n("div",{staticClass:"add-cmt-box van-hairline--top"},[n("van-icon",{attrs:{name:"arrow-left",size:"0.48rem"},on:{click:function(e){return t.$router.back()}}}),n("div",{staticClass:"ipt-cmt-div",on:{click:function(e){t.isShowCmtInput=!0}}},[t._v("发表评论")]),n("div",{staticClass:"icon-box"},[n("van-badge",{attrs:{content:t.totalCount,max:99}},[n("van-icon",{attrs:{name:"comment-o",size:"0.53333334rem"},on:{click:t.moveFn}})],1),n("van-icon",{attrs:{name:"star-o",size:"0.53333334rem"}}),n("van-icon",{attrs:{name:"share-o",size:"0.53333334rem"}})],1)],1):n("div",{staticClass:"cmt-box van-hairline--top"},[n("textarea",{directives:[{name:"splot",rawName:"v-splot"},{name:"model",rawName:"v-model.trim",value:t.comValue,expression:"comValue",modifiers:{trim:!0}}],attrs:{placeholder:"友善评论、理性发言、阳光心灵"},domProps:{value:t.comValue},on:{blur:[t.blurFn,function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||(t.comValue=e.target.value.trim())}}}),n("van-button",{attrs:{type:"default",disabled:0===t.comValue.length},on:{click:t.send}},[t._v("发布")])],1)],1)}),s=[],c=n(156),u=(n(2222),n(3056)),l={data:function(){return{commentList:[],isShowCmtInput:!1,totalCount:1,comValue:"",loading:!1,finished:!1,offset:null}},methods:{onLoad:function(){this.getCommentListFn()},blurFn:function(){var t=this;setTimeout((function(){t.isShowCmtInput=!1}))},send:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.sendCommentAPI({artId:t.$route.query.aid,content:t.comValue});case 2:n=e.sent,t.commentList.unshift(n.data.data.new_obj),t.totalCount++,t.comValue="";case 6:case"end":return e.stop()}}),e)})))()},timeAgo:u.S,moveFn:function(){document.querySelector(".like-box").scrollIntoView({behavior:"smooth"})},getCommentListFn:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.commentListAPI({artId:t.$route.query.aid,offset:t.offset});case 2:n=e.sent,0===n.data.data.results.length&&(t.finished=!0),t.commentList=[].concat((0,c.Z)(t.commentList),(0,c.Z)(n.data.data.results)),t.totalCount=n.data.data.total_count||"",t.offset=n.data.data.last_id,t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},loveFn:function(t,e){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!0!==t){a.next=6;break}return e.is_liking=!1,a.next=4,n.$API.commentDisLikingAPI({comId:e.com_id});case 4:a.next=9;break;case 6:return e.is_liking=!0,a.next=9,n.$API.commentLikingAPI({comId:e.com_id});case 9:case"end":return a.stop()}}),a)})))()}},created:function(){this.getCommentListFn()}},d=l,m=n(1001),f=(0,m.Z)(d,o,s,!1,null,"05190bc8",null),v=f.exports,p={components:{Comment:v},data:function(){return{artObj:{}}},created:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.articleDetailAPI({id:t.$route.query.aid});case 2:n=e.sent,t.artObj=n.data.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{followedFn:function(t){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!0!==t){n.next=6;break}return e.artObj.is_followed=!0,n.next=4,e.$API.followedUserAPI({target:e.artObj.aut_id});case 4:n.next=9;break;case 6:return e.artObj.is_followed=!1,n.next=9,e.$API.unFollowedUserAPI({uid:e.artObj.aut_id});case 9:case"end":return n.stop()}}),n)})))()},loveFn:function(t){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!0!==t){n.next=6;break}return e.artObj.attitude=1,n.next=4,e.$API.articleLikeAPI({target:e.$route.query.aid});case 4:n.next=9;break;case 6:return e.artObj.attitude=-1,n.next=9,e.$API.articleDisLikeAPI({artId:e.$route.query.aid});case 9:case"end":return n.stop()}}),n)})))()}}},h=p,b=(0,m.Z)(h,a,r,!1,null,"6006e2df",null),k=b.exports}}]);
//# sourceMappingURL=567-legacy.1f77cf51.js.map
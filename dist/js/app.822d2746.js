(function(t){function e(e){for(var o,c,a=e[0],i=e[1],u=e[2],d=0,p=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},s=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0960":function(t,e,n){"use strict";n("8b52")},"09d3":function(t,e,n){"use strict";n("2c21")},"1ab3":function(t,e,n){"use strict";n("3d9b")},"2c21":function(t,e,n){},"2ced":function(t,e,n){},"3d9b":function(t,e,n){},"40c8":function(t,e,n){},4876:function(t,e,n){"use strict";n("52c1")},"50e0":function(t,e,n){},"52c1":function(t,e,n){},"54e1":function(t,e,n){"use strict";n("50e0")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b0c0");var o=n("7a23"),r={class:"app"};function s(t,e,n,s,c,a){var i=Object(o["C"])("navbar"),u=Object(o["C"])("router-view");return Object(o["u"])(),Object(o["g"])(o["a"],null,[Object(o["j"])(i),Object(o["h"])("div",r,[Object(o["j"])(u)])],64)}var c={class:"navbar"},a={class:"navbar__btns"},i=Object(o["i"])(" Posts "),u=Object(o["i"])(" Store "),l=Object(o["i"])(" Composition ");function d(t,e,n,r,s,d){var p=Object(o["C"])("it-button");return Object(o["u"])(),Object(o["g"])("div",c,[Object(o["h"])("div",{onClick:e[0]||(e[0]=function(e){return t.$router.push("/")})}," Akson-vue "),Object(o["h"])("div",a,[Object(o["j"])(p,{onClick:e[1]||(e[1]=function(e){return t.$router.push("/pages")})},{default:Object(o["J"])((function(){return[i]})),_:1}),Object(o["j"])(p,{onClick:e[2]||(e[2]=function(e){return t.$router.push("/store")})},{default:Object(o["J"])((function(){return[u]})),_:1}),Object(o["j"])(p,{onClick:e[3]||(e[3]=function(e){return t.$router.push("/composition")})},{default:Object(o["J"])((function(){return[l]})),_:1})])])}var p={class:"btn"};function b(t,e,n,r,s,c){return Object(o["u"])(),Object(o["g"])("button",p,[Object(o["B"])(t.$slots,"default",{},void 0,!0)])}var j={name:"it-button"},O=(n("b979"),n("6b0d")),f=n.n(O);const h=f()(j,[["render",b],["__scopeId","data-v-534c6dbd"]]);var v=h,m={components:{ItButton:v}};n("ac07");const g=f()(m,[["render",d],["__scopeId","data-v-8cf50348"]]);var P=g,y={components:{Navbar:P}};n("c4c1");const C=f()(y,[["render",s]]);var w=C,_=["value"];function S(t,e,n,r,s,c){return Object(o["u"])(),Object(o["g"])("input",{value:n.modelValue,onInput:e[0]||(e[0]=function(){return c.updateInput&&c.updateInput.apply(c,arguments)}),class:"input",type:"text"},null,40,_)}n("a9e3");var V={name:"it-input",props:{modelValue:[String,Number]},methods:{updateInput:function(t){this.$emit("update:modelValue",t.target.value)}}};n("0960");const k=f()(V,[["render",S],["__scopeId","data-v-05dc2f06"]]);var x=k;function I(t,e,n,r,s,c){return!0===t.show?(Object(o["u"])(),Object(o["g"])("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=Object(o["L"])((function(){return t.hideDialog&&t.hideDialog.apply(t,arguments)}),["stop"]))},[Object(o["h"])("div",{onClick:e[0]||(e[0]=Object(o["L"])((function(){}),["stop"])),class:"dialog__content"},[Object(o["B"])(t.$slots,"default",{},void 0,!0)])])):Object(o["f"])("",!0)}var L={props:{show:{type:Boolean,default:!1}},methods:{hideDialog:function(){this.$emit("update:show",!1)}},mounted:function(){}},Q={name:"it-dialog",mixins:[L]};n("1ab3");const A=f()(Q,[["render",I],["__scopeId","data-v-54ef9f2f"]]);var M=A,R=[v,x,M],J=Object(o["h"])("h1",null," You are welcome! ",-1),D=[J];function U(t,e,n,r,s,c){return Object(o["u"])(),Object(o["g"])("div",null,D)}var $={};const F=f()($,[["render",U]]);var B=F,E=n("6c02"),T=Object(o["h"])("h2",null," Page with posts ",-1),z={class:"app__btns"},N=Object(o["i"])(" Create post "),K={key:1},q={class:"observer"};function H(t,e,n,r,s,c){var a=Object(o["C"])("it-input"),i=Object(o["C"])("it-button"),u=Object(o["C"])("it-select"),l=Object(o["C"])("post-form"),d=Object(o["C"])("it-dialog"),p=Object(o["C"])("post-list"),b=Object(o["D"])("intersection");return Object(o["u"])(),Object(o["g"])("div",null,[T,Object(o["j"])(a,{modelValue:s.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.searchQuery=t}),placeholder:"Search..."},null,8,["modelValue"]),Object(o["h"])("div",z,[Object(o["j"])(i,{onClick:c.showDialog,style:{margin:"15px 0"}},{default:Object(o["J"])((function(){return[N]})),_:1},8,["onClick"]),Object(o["j"])(u,{modelValue:s.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.selectedSort=t}),options:s.sortOptions},null,8,["modelValue","options"])]),Object(o["j"])(d,{show:s.dialogVisible,"onUpdate:show":e[2]||(e[2]=function(t){return s.dialogVisible=t})},{default:Object(o["J"])((function(){return[Object(o["j"])(l,{onCreate:c.createPost},null,8,["onCreate"])]})),_:1},8,["show"]),s.isPostsLoading?(Object(o["u"])(),Object(o["g"])("div",K," loading in progress... ")):(Object(o["u"])(),Object(o["e"])(p,{key:0,posts:c.sortedAndSearchedPosts,onRemove:c.removePost},null,8,["posts","onRemove"])),Object(o["K"])(Object(o["h"])("div",q,null,512),[[b,c.loadMorePosts]])])}var Y=n("2909"),G=n("1da1"),W=(n("96cf"),n("4de4"),n("99af"),n("4e82"),n("caad"),n("2532"),function(t){return Object(o["x"])("data-v-58bda16c"),t=t(),Object(o["v"])(),t}),X=W((function(){return Object(o["h"])("h3",null," Create post ",-1)})),Z=Object(o["i"])(" Add post ");function tt(t,e,n,r,s,c){var a=Object(o["C"])("it-input"),i=Object(o["C"])("it-button");return Object(o["u"])(),Object(o["g"])("form",{onSubmit:e[2]||(e[2]=Object(o["L"])((function(){}),["prevent"]))},[X,Object(o["j"])(a,{modelValue:s.post.title,"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.post.title=t}),type:"text",placeholder:"Name"},null,8,["modelValue"]),Object(o["j"])(a,{modelValue:s.post.body,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.post.body=t}),type:"text",placeholder:"Description"},null,8,["modelValue"]),Object(o["j"])(i,{class:"btn",onClick:c.createPost,style:{"margin-top":"15px"}},{default:Object(o["J"])((function(){return[Z]})),_:1},8,["onClick"])],32)}var et={data:function(){return{post:{title:"",body:""}}},methods:{createPost:function(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};n("77e0");const nt=f()(et,[["render",tt],["__scopeId","data-v-58bda16c"]]);var ot=nt,rt=function(t){return Object(o["x"])("data-v-0826120a"),t=t(),Object(o["v"])(),t},st={key:0},ct=rt((function(){return Object(o["h"])("h3",null," Posts list ",-1)})),at={key:1,style:{color:"red"}};function it(t,e,n,r,s,c){var a=Object(o["C"])("post-item");return n.posts.length>0?(Object(o["u"])(),Object(o["g"])("div",st,[ct,Object(o["j"])(o["b"],{name:"post-list"},{default:Object(o["J"])((function(){return[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(n.posts,(function(e){return Object(o["u"])(),Object(o["e"])(a,{key:e.id,post:e,onRemove:function(n){return t.$emit("remove",e)}},null,8,["post","onRemove"])})),128))]})),_:1})])):(Object(o["u"])(),Object(o["g"])("h3",at," Posts list is umpty "))}var ut=function(t){return Object(o["x"])("data-v-53f200c2"),t=t(),Object(o["v"])(),t},lt={class:"post"},dt=ut((function(){return Object(o["h"])("strong",null,"Name:",-1)})),pt=ut((function(){return Object(o["h"])("strong",null,"Description:",-1)})),bt={class:"post__btn"},jt=Object(o["i"])(" Open "),Ot=Object(o["i"])(" Delete ");function ft(t,e,n,r,s,c){var a=Object(o["C"])("it-button");return Object(o["u"])(),Object(o["g"])("div",lt,[Object(o["h"])("div",null,[Object(o["h"])("div",null,Object(o["F"])(n.post.id),1),Object(o["h"])("div",null,[dt,Object(o["i"])(" "+Object(o["F"])(n.post.title),1)]),Object(o["h"])("div",null,[pt,Object(o["i"])(" "+Object(o["F"])(n.post.body),1)])]),Object(o["h"])("div",bt,[Object(o["j"])(a,{onClick:e[0]||(e[0]=function(e){return t.$router.push("/pages/".concat(n.post.id))})},{default:Object(o["J"])((function(){return[jt]})),_:1}),Object(o["j"])(a,{onClick:e[1]||(e[1]=function(e){return t.$emit("remove",n.post)})},{default:Object(o["J"])((function(){return[Ot]})),_:1})])])}var ht={props:{post:{type:Object,required:!0}}};n("66a9");const vt=f()(ht,[["render",ft],["__scopeId","data-v-53f200c2"]]);var mt=vt,gt={components:{PostItem:mt},props:{posts:{type:Array,required:!0}}};n("54e1");const Pt=f()(gt,[["render",it],["__scopeId","data-v-0826120a"]]);var yt=Pt,Ct=n("bc3a"),wt=n.n(Ct),_t=Object(o["h"])("option",{disabled:"",value:""}," Choose from the list ",-1),St=["value"];function Vt(t,e,n,r,s,c){return Object(o["K"])((Object(o["u"])(),Object(o["g"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return n.modelValue=t}),onChange:e[1]||(e[1]=function(){return c.changeOption&&c.changeOption.apply(c,arguments)})},[_t,(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(n.options,(function(t){return Object(o["u"])(),Object(o["g"])("option",{key:t.value,value:t.value},Object(o["F"])(t.name),9,St)})),128))],544)),[[o["H"],n.modelValue]])}var kt={name:"it-select",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}}},methods:{changeOption:function(t){this.$emit("update:modelValue",t.target.value)}}};const xt=f()(kt,[["render",Vt]]);var It=xt,Lt={components:{ItInput:x,ItSelect:It,PostForm:ot,PostList:yt,ItButton:v},data:function(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"by name"},{value:"body",name:"by description"}]}},methods:{createPost:function(t){this.posts.push(t),this.dialogVisible=!1},removePost:function(t){this.posts=this.posts.filter((function(e){return e.id!==t.id}))},showDialog:function(){this.dialogVisible=!0},fetchPosts:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isPostsLoading=!0,e.next=4,wt.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});case 4:n=e.sent,t.totalPages=Math.ceil(n.headers["x-total-count"]/t.limit),t.posts=n.data,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Error, try again later");case 12:return e.prev=12,t.isPostsLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},loadMorePosts:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.page+=1,e.next=4,wt.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});case 4:n=e.sent,t.totalPages=Math.ceil(n.headers["x-total-count"]/t.limit),t.posts=[].concat(Object(Y["a"])(t.posts),Object(Y["a"])(n.data)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Error, try again later");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.fetchPosts()},computed:{sortedPosts:function(){var t=this;return Object(Y["a"])(this.posts).sort((function(e,n){var o;return null===(o=e[t.selectedSort])||void 0===o?void 0:o.localeCompare(n[t.selectedSort])}))},sortedAndSearchedPosts:function(){var t=this;return this.sortedPosts.filter((function(e){return e.title.toLowerCase().includes(t.searchQuery.toLowerCase())}))}},watch:{}};n("4876");const Qt=f()(Lt,[["render",H]]);var At=Qt;function Mt(t,e,n,r,s,c){return Object(o["u"])(),Object(o["g"])("div",null,[Object(o["h"])("h1",null,"This is page post with ID = "+Object(o["F"])(t.$route.params.id),1)])}var Rt={};const Jt=f()(Rt,[["render",Mt]]);var Dt=Jt,Ut=Object(o["h"])("h2",null," Page with posts ",-1),$t={class:"app__btns"},Ft=Object(o["i"])(" Create post "),Bt={key:1},Et={class:"observer"},Tt={class:"page__wrapper"},zt=["onClick"];function Nt(t,e,n,r,s,c){var a=Object(o["C"])("it-input"),i=Object(o["C"])("it-button"),u=Object(o["C"])("it-select"),l=Object(o["C"])("post-form"),d=Object(o["C"])("it-dialog"),p=Object(o["C"])("post-list"),b=Object(o["D"])("intersection");return Object(o["u"])(),Object(o["g"])("div",null,[Ut,Object(o["j"])(a,{"model-value":t.searchQuery,"onUpdate:modelValue":t.setSearchQuery,placeholder:"Search..."},null,8,["model-value","onUpdate:modelValue"]),Object(o["h"])("div",$t,[Object(o["j"])(i,{onClick:c.showDialog,style:{margin:"15px 0"}},{default:Object(o["J"])((function(){return[Ft]})),_:1},8,["onClick"]),Object(o["j"])(u,{"model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,options:t.sortOptions},null,8,["model-value","onUpdate:modelValue","options"])]),Object(o["j"])(d,{show:s.dialogVisible,"onUpdate:show":e[0]||(e[0]=function(t){return s.dialogVisible=t})},{default:Object(o["J"])((function(){return[Object(o["j"])(l,{onCreate:c.createPost},null,8,["onCreate"])]})),_:1},8,["show"]),t.isPostsLoading?(Object(o["u"])(),Object(o["g"])("div",Bt," loading in progress... ")):(Object(o["u"])(),Object(o["e"])(p,{key:0,posts:t.sortedAndSearchedPosts,onRemove:c.removePost},null,8,["posts","onRemove"])),Object(o["K"])(Object(o["h"])("div",Et,null,512),[[b,t.loadMorePosts]]),Object(o["h"])("div",Tt,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(t.totalPages,(function(e){return Object(o["u"])(),Object(o["g"])("div",{key:e,class:Object(o["p"])(["page",{"current-page":t.page===e}]),onClick:function(n){return t.changePage(e)}},Object(o["F"])(e),11,zt)})),128))])])}var Kt=n("5530"),qt=n("5502"),Ht={components:{ItInput:x,ItSelect:It,PostForm:ot,PostList:yt,ItButton:v},data:function(){return{dialogVisible:!1}},methods:Object(Kt["a"])(Object(Kt["a"])(Object(Kt["a"])({},Object(qt["d"])({setPage:"post/setPage",setSearchQuery:"post/setSearchQuery",setSelectedSort:"post/setSelectedSort"})),Object(qt["b"])({loadMorePosts:"post/loadMorePosts",fetchPosts:"post/fetchPosts"})),{},{createPost:function(t){this.posts.push(t),this.dialogVisible=!1},removePost:function(t){this.posts=this.posts.filter((function(e){return e.id!==t.id}))},showDialog:function(){this.dialogVisible=!0}}),mounted:function(){this.fetchPosts()},computed:Object(Kt["a"])(Object(Kt["a"])({},Object(qt["e"])({posts:function(t){return t.post.posts},isPostsLoading:function(t){return t.post.isPostsLoading},selectedSort:function(t){return t.post.selectedSort},searchQuery:function(t){return t.post.searchQuery},page:function(t){return t.post.page},limit:function(t){return t.post.limit},totalPages:function(t){return t.post.totalPages},sortOptions:function(t){return t.post.sortOptions}})),Object(qt["c"])({sortedPosts:"post/sortedPosts",sortedAndSearchedPosts:"post/sortedAndSearchedPosts"})),watch:{}};n("b1b2");const Yt=f()(Ht,[["render",Nt]]);var Gt=Yt,Wt=Object(o["h"])("h2",null," Page with posts ",-1),Xt={class:"app__btns"},Zt=Object(o["i"])(" Create post "),te={key:1};function ee(t,e,n,r,s,c){var a=Object(o["C"])("it-input"),i=Object(o["C"])("it-button"),u=Object(o["C"])("it-select"),l=Object(o["C"])("post-form"),d=Object(o["C"])("it-dialog"),p=Object(o["C"])("post-list");return Object(o["u"])(),Object(o["g"])("div",null,[Wt,Object(o["j"])(a,{modelValue:r.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=function(t){return r.searchQuery=t}),placeholder:"Search..."},null,8,["modelValue"]),Object(o["h"])("div",Xt,[Object(o["j"])(i,{style:{margin:"15px 0"}},{default:Object(o["J"])((function(){return[Zt]})),_:1}),Object(o["j"])(u,{modelValue:r.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.selectedSort=t}),options:s.sortOptions},null,8,["modelValue","options"])]),Object(o["j"])(d,{show:s.dialogVisible,"onUpdate:show":e[2]||(e[2]=function(t){return s.dialogVisible=t})},{default:Object(o["J"])((function(){return[Object(o["j"])(l)]})),_:1},8,["show"]),r.isPostsLoading?(Object(o["u"])(),Object(o["g"])("div",te," loading in progress... ")):(Object(o["u"])(),Object(o["e"])(p,{key:0,posts:r.sortedAndSearchedPosts},null,8,["posts"]))])}function ne(t){var e=Object(o["z"])([]),n=Object(o["z"])(0),r=Object(o["z"])(!0),s=function(){var o=Object(G["a"])(regeneratorRuntime.mark((function o(){var s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,wt.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:1,_limit:t}});case 3:s=o.sent,n.value=Math.ceil(s.headers["x-total-count"]/t),e.value=s.data,o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),alert("Error, try again later");case 11:return o.prev=11,r.value=!1,o.finish(11);case 14:case"end":return o.stop()}}),o,null,[[0,8,11,14]])})));return function(){return o.apply(this,arguments)}}();return Object(o["s"])(s),{posts:e,isPostsLoading:r,totalPages:n}}function oe(t){var e=Object(o["z"])(""),n=Object(o["c"])((function(){return Object(Y["a"])(t.value).sort((function(t,n){var o;return null===(o=t[e.value])||void 0===o?void 0:o.localeCompare(n[e.value])}))}));return{selectedSort:e,sortedPosts:n}}function re(t){var e=Object(o["z"])(""),n=Object(o["c"])((function(){return t.value.filter((function(t){return t.title.toLowerCase().includes(e.value.toLowerCase())}))}));return{searchQuery:e,sortedAndSearchedPosts:n}}var se={components:{ItInput:x,ItSelect:It,PostForm:ot,PostList:yt,ItButton:v},data:function(){return{dialogVisible:!1,sortOptions:[{value:"title",name:"by name"},{value:"body",name:"by description"}]}},setup:function(t){var e=ne(10),n=e.posts,o=e.totalPages,r=e.isPostsLoading,s=oe(n),c=s.sortedPosts,a=s.selectedSort,i=re(c),u=i.searchQuery,l=i.sortedAndSearchedPosts;return{posts:n,totalPages:o,isPostsLoading:r,sortedPosts:c,selectedSort:a,searchQuery:u,sortedAndSearchedPosts:l}}};n("09d3");const ce=f()(se,[["render",ee]]);var ae=ce,ie=[{path:"/",component:B},{path:"/pages",component:At},{path:"/pages/:id",component:Dt},{path:"/store",component:Gt},{path:"/composition",component:ae}],ue=Object(E["a"])({routes:ie,history:Object(E["b"])("/")}),le=ue,de={mounted:function(t,e){var n={rootMargin:"0px",threshold:1},o=function(t,n){t[0].isIntersecting&&e.value()},r=new IntersectionObserver(o,n);r.observe(t)}},pe={state:function(){return{posts:[],isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"by name"},{value:"body",name:"by description"}]}},getters:{sortedPosts:function(t){return Object(Y["a"])(t.posts).sort((function(e,n){var o;return null===(o=e[t.selectedSort])||void 0===o?void 0:o.localeCompare(n[t.selectedSort])}))},sortedAndSearchedPosts:function(t,e){return e.sortedPosts.filter((function(e){return e.title.toLowerCase().includes(t.searchQuery.toLowerCase())}))}},mutations:{setPosts:function(t,e){t.posts=e},setLoading:function(t,e){t.isPostsLoading=e},setPage:function(t,e){t.page=e},setSelectedSort:function(t,e){t.selectedSort=e},setTotalPage:function(t,e){t.totalPage=e},setSearchQuery:function(t,e){t.searchQuery=e}},actions:{fetchPosts:function(t){return Object(G["a"])(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,o=t.commit,e.prev=1,o("setLoading",!0),e.next=5,wt.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:n.page,_limit:n.limit}});case 5:r=e.sent,o("setTotalPage",Math.ceil(r.headers["x-total-count"]/n.limit)),o("setPosts",r.data),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),alert("Error, try again later");case 13:return e.prev=13,o("setLoading",!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},loadMorePosts:function(t){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function n(){var o,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.state,r=t.commit,n.prev=1,r("setPage",o.page+=1),n.next=5,wt.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:o.page,_limit:o.limit}});case 5:s=n.sent,r("setTotalPage",Math.ceil(s.headers["x-total-count"]/e.limit)),r("setPosts",[].concat(Object(Y["a"])(o.posts),Object(Y["a"])(s.data))),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](1),alert("Error, try again later");case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()}},namespaced:!0},be=Object(qt["a"])({modules:{post:pe}}),je=Object(o["d"])(w);R.forEach((function(t){je.component(t.name,t)})),je.directive("intersection",de),je.use(le).use(be).mount("#app")},"66a9":function(t,e,n){"use strict";n("da7e")},6838:function(t,e,n){},"77e0":function(t,e,n){"use strict";n("2ced")},"8b52":function(t,e,n){},ac07:function(t,e,n){"use strict";n("e225")},b1b2:function(t,e,n){"use strict";n("d7a7")},b979:function(t,e,n){"use strict";n("40c8")},c4c1:function(t,e,n){"use strict";n("6838")},d7a7:function(t,e,n){},da7e:function(t,e,n){},e225:function(t,e,n){}});
//# sourceMappingURL=app.822d2746.js.map
(this.webpackJsonpkabzda=this.webpackJsonpkabzda||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var r=n(103),a=n(0),o=n.n(a),c=n(42),i=n.n(c),u=n(95),s=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:" ")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({name:t,component:r,placeholder:e,validate:n},a))," ",c)}},101:function(e,t,n){e.exports={item:"MyPosts_item__1lop8",postBlock:"MyPosts_postBlock__3_o5z",posts:"MyPosts_posts__3bQmu"}},102:function(e,t,n){e.exports={header:"Header_header__WkEFg",loginBlock:"Header_loginBlock__-nMEC"}},11:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(140),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6d54c1cb-0079-4662-b13d-27d4ae8cf67d"}}),o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t))},onFollowClick:function(e){return a.post("follow/".concat(e))},onUnFollowClick:function(e){return a.delete("follow/".concat(e))}},c={authMe:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(35),a=n(20);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={dialogs:[{name:"Sasha",id:1},{name:"Pasha",id:2},{name:"Dasha",id:3},{name:"Masha",id:4},{name:"Glasha",id:5},{name:"Dimych",id:6}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your way to samurai?"},{id:3,message:"great work"},{id:4,message:"Yo"},{id:5,message:"YOOOO"},{id:6,message:"WAZZZZUUUP"}]},u=function(e){return{type:"ADD-DIALOG-POST",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-DIALOG-POST":var n={id:7,message:t.message};return c({},e,{messages:[].concat(Object(r.a)(e.messages),[n]),newMessageText:""});default:return e}}},125:function(e,t){e.exports="data:image/png;base64,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"},139:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(14),c=n(35),i=n(20),u=n(11);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=function(e,t,n,r){return e.map((function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},r):e}))};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"e",(function(){return P}));var p={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],curPortionNumber:1},d=function(e){return{type:"FOLLOW",userId:e}},b=function(e){return{type:"UNFOLLOW",userId:e}},E=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},v=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(E(!0)),r({type:"SET_CURRENT_PAGE",p:e}),n.next=4,u.d.getUsers(e,t);case 4:o=n.sent,r(E(!1)),r({type:"SET_USERS",users:o.data.items}),r({type:"SET_TOTAL_USERS_COUNT",totalCount:o.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e){return function(t){t(function(e){return{type:"SET_PORTION_PAGE",curPortionNumber:e}}(e))}},O=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(o(n)),t(h(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n,e,u.d.onFollowClick.bind(u.d),d);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n,e,u.d.onUnFollowClick.bind(u.d),b);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return f({},e,{users:l(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return f({},e,{users:l(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return f({},e,{users:t.users});case"SET_CURRENT_PAGE":return f({},e,{currentPage:t.p});case"SET_TOTAL_USERS_COUNT":return f({},e,{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return f({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return f({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case"SET_PORTION_PAGE":return f({},e,{curPortionNumber:t.curPortionNumber});default:return e}}},144:function(e,t,n){e.exports={friend:"Friend_friend__2iewF"}},146:function(e,t,n){e.exports={container:"News_container__FxKeO"}},147:function(e,t,n){e.exports={container:"Music_container__2b6QB"}},148:function(e,t,n){e.exports={container:"Settings_container__2BScX"}},149:function(e,t,n){},15:function(e,t,n){e.exports={nav:"Navbar_nav__7BaTQ",item:"Navbar_item__5Q1ah",activeLink:"Navbar_activeLink__23Iqh",sidebar:"Navbar_sidebar__35kzO"}},150:function(e,t,n){e.exports={content:"Profile_content__Vau-j",pic:"Profile_pic__26Yl8"}},151:function(e,t,n){e.exports=n.p+"static/media/loading.dec3ae46.svg"},153:function(e,t,n){e.exports={item:"Post_item__15CND"}},181:function(e,t,n){e.exports=n(311)},182:function(e,t,n){},266:function(e,t,n){},29:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3tsdY",mainPhoto:"ProfileInfo_mainPhoto__3lbeI",status:"ProfileInfo_status__1rEf4",description:"ProfileInfo_description__2bMn0",buttonPhoto:"ProfileInfo_buttonPhoto__l27vm",contact:"ProfileInfo_contact__3XUnz"}},311:function(e,t,n){"use strict";n.r(t);n(182),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(7),a=n.n(r),o=n(14),c=n(35),i=n(20),u=n(11),s=n(28);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={posts:[{id:1,message:"\u0412\u0436\u0443\u0445 \u0432\u0436\u0443\u0445 \u0432\u0436\u0443\u0445, \u043c\u0435\u0447\u0438 \u0432\u043e\u0437\u0434\u0443\u0445 \u0440\u0430\u0441\u0441\u0435\u043a\u0430\u044e\u0442",likeCount:999},{id:2,message:"Great, we can go next step!",likeCount:17},{id:3,message:"\u041a\u0442\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0442\u043e\u0442 \u0435\u0441\u0442.",likeCount:0},{id:4,message:"\u0416\u0438\u0442\u044c \u0445\u043e\u0440\u043e\u0448\u043e, \u0430 \u0445\u043e\u0440\u043e\u0448\u043e \u0436\u0438\u0442\u044c \u0435\u0449\u0451 \u043b\u0443\u0447\u0448\u0435!",likeCount:666}],profile:null,status:""},p=function(e){return{type:"SET_USER_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likeCount:0};return m({},e,{posts:[].concat(Object(c.a)(e.posts),[n])});case"DELETE_POST":return m({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET_USER_PROFILE":return m({},e,{profile:t.profile});case"SET_USER_STATUS":return m({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return m({},e,{profile:m({},e.profile,{photos:t.photos})});default:return e}},E=n(112),h={},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;arguments.length>1&&arguments[1];return e},g=n(8),O=n(139);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w="samurai-network/auth/SET_USER_DATA",j={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},S=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},k=function(e,t,n,r){return{type:w,payload:{userId:e,email:t,login:n,isAuth:r}}},C=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,o=r.id,c=r.email,i=r.login,t(k(o,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(S(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return P({},e,{},t.payload);default:return e}},I=n(141),T=n(138);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={initialized:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return U({},e,{initialized:!0});default:return e}},L=Object(g.c)({profilePage:b,dialogsPage:E.b,sidebar:v,usersPage:O.a,auth:A,form:T.a,app:D}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,R=Object(g.e)(L,M(Object(g.a)(I.a)));window.store=R;var G=R,W=n(0),K=n.n(W),V=n(33),Z=n.n(V),X=n(44),Y=n(45),B=n(47),J=n(46),_=n(48),z=(n(266),n(15)),q=n.n(z),H=n(16),Q=n(144),$=n.n(Q),ee=function(e){return K.a.createElement("div",{className:$.a.friend},K.a.createElement("div",null,K.a.createElement("img",{alt:"avatar",src:"https://www.w3schools.com/w3css/img_avatar3.png"})),K.a.createElement("div",null,"Name"))},te=function(){return K.a.createElement("nav",{className:q.a.nav},K.a.createElement("div",{className:q.a.item},K.a.createElement(H.b,{to:"/profile",activeClassName:q.a.activeLink},"Profile")),K.a.createElement("div",{className:q.a.item},K.a.createElement(H.b,{to:"/dialogs",activeClassName:q.a.activeLink},"Messages")),K.a.createElement("div",{className:q.a.item},K.a.createElement(H.b,{to:"/news",activeClassName:q.a.activeLink},"News")),K.a.createElement("div",{className:q.a.item},K.a.createElement(H.b,{to:"/music",activeClassName:q.a.activeLink},"Music")),K.a.createElement("div",{className:q.a.item},K.a.createElement(H.b,{to:"/users",activeClassName:q.a.activeLink},"Users")),K.a.createElement("div",{className:q.a.item},K.a.createElement(H.b,{to:"/settings",activeClassName:q.a.activeLink},"Settings")),K.a.createElement("div",{className:q.a.sidebar},K.a.createElement(H.b,{to:"/friends",activeClassName:q.a.activeLink},"Friends"),K.a.createElement(ee,null),K.a.createElement(ee,null),K.a.createElement(ee,null)))},ne=n(38),re=n(146),ae=n.n(re),oe=function(e){return K.a.createElement("div",{className:ae.a.container},"News")},ce=n(147),ie=n.n(ce),ue=function(e){return K.a.createElement("div",{className:ie.a.container},"Music")},se=n(148),le=n.n(se),me=function(e){return K.a.createElement("div",{className:le.a.container},"Settings")},fe=n(149),pe=n.n(fe),de=function(e){return K.a.createElement("div",null,K.a.createElement("div",null,"Friends"),K.a.createElement("div",{className:pe.a.friendItem},K.a.createElement(ee,null),K.a.createElement(ee,null),K.a.createElement(ee,null),K.a.createElement(ee,null),K.a.createElement(ee,null)))},be=n(150),Ee=n.n(be),he=n(60),ve=n(29),ge=n.n(ve),Oe=n(57),ye=function(e){var t=Object(W.useState)(!1),n=Object(he.a)(t,2),r=n[0],a=n[1],o=Object(W.useState)(e.status),c=Object(he.a)(o,2),i=c[0],u=c[1];Object(W.useEffect)((function(){u(e.status)}),[e.status]);return K.a.createElement("div",null,e.isOwner?r?K.a.createElement("div",null,K.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){e.updateUserStatus(i),a(!1)},autoFocus:!0,value:i})):K.a.createElement("div",null,K.a.createElement("b",null,"Status:")," ",K.a.createElement("span",{onDoubleClick:function(){a(!0)}},i||"No status")):K.a.createElement("div",null,K.a.createElement("b",null,"Status:")," ",K.a.createElement("span",null,i||"No status")))},Pe=n(125),we=n.n(Pe),je=n(10),Se=n(137),ke=n(42),Ce=n.n(ke),Ne=Object(Se.a)({form:"edit-profile"})((function(e){var t=e.profile,n=e.handleSubmit,r=e.error;return K.a.createElement("form",{onSubmit:n},K.a.createElement("div",null,K.a.createElement("button",null,"Save")),r&&K.a.createElement("div",{className:Ce.a.formSummaryError},r),K.a.createElement("div",null,K.a.createElement("b",null,"Full name:")," ",Object(je.c)("Full name","fullName",[],je.a)),K.a.createElement("div",null,K.a.createElement("b",null,"Looking for a job:"),Object(je.c)("","lookingForAJob",[],je.a,{type:"checkbox"})),K.a.createElement("div",null,K.a.createElement("b",null,"My professional skills:")," ",t.lookingForAJobDescription,Object(je.c)("My professional skills","lookingForAJobDescription",[],je.b)),K.a.createElement("div",null,K.a.createElement("b",null,"About me:")," ",t.aboutMe,Object(je.c)("About me","aboutMe",[],je.b)),K.a.createElement("div",null,K.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return K.a.createElement("div",{key:e,className:ge.a.contact},K.a.createElement("b",null,e,": ")," ",Object(je.c)(e,"contacts."+e,[],je.a))}))))})),Ae=n(326),Ie=n(328),Te=n(152),xe=n.n(Te),Ue=Object(Ae.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}})),Fe=function(e){var t=Ue();return K.a.createElement("div",{className:t.root},K.a.createElement("input",{accept:"image/*",className:t.input,id:"icon-button-file",type:"file",onChange:e.onChange}),K.a.createElement("label",{htmlFor:"icon-button-file"},K.a.createElement(Ie.a,{color:"primary","aria-label":"upload picture",component:"span"},K.a.createElement(xe.a,null))))},De=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return K.a.createElement("div",null,n&&K.a.createElement("div",null,K.a.createElement("button",{onClick:r},"Edit")),K.a.createElement("div",null,K.a.createElement("b",null,"Full name:")," ",t.fullName),K.a.createElement("div",null,K.a.createElement("b",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),null!==t.lookingForAJobDescription?K.a.createElement("div",null,K.a.createElement("b",null,"My skills:")," ",t.lookingForAJobDescription):"",K.a.createElement("div",null,K.a.createElement("b",null,"About me:")," ",t.aboutMe),K.a.createElement("div",null,K.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){if(""!==t.contacts[e]&&null!==t.contacts[e])return K.a.createElement(Le,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},Le=function(e){var t=e.contactTitle,n=e.contactValue;return K.a.createElement("div",{className:ge.a.contact},K.a.createElement("b",null,t,":")," ",K.a.createElement("a",{target:"_blank",href:n}," ",n))},Me=function(e){var t=e.profile,n=e.status,r=e.updateUserStatus,a=e.isOwner,o=e.savePhoto,c=e.saveProfile,i=Object(W.useState)(!1),u=Object(he.a)(i,2),s=u[0],l=u[1];if(!t)return K.a.createElement(Oe.a,null);return K.a.createElement("div",null,K.a.createElement("div",{className:ge.a.descriptionBlock},K.a.createElement("div",{style:{backgroundImage:"url(".concat(t.photos.large||we.a,")")},className:ge.a.mainPhoto},a&&K.a.createElement("div",{className:ge.a.buttonPhoto},K.a.createElement(Fe,{onChange:function(e){e.target.files.length&&o(e.target.files[0])}}))),K.a.createElement("div",{className:ge.a.status},K.a.createElement(ye,{updateUserStatus:r,isOwner:a,status:n})),K.a.createElement("div",{className:ge.a.description},s?K.a.createElement(Ne,{profile:t,onSubmit:function(e){c(e).then((function(){l(!1)}))},initialValues:t}):K.a.createElement(De,{profile:t,goToEditMode:function(){l(!0)},isOwner:a}))))},Re=n(101),Ge=n.n(Re),We=n(153),Ke=n.n(We),Ve=function(e){return K.a.createElement("div",{className:Ke.a.item},K.a.createElement("img",{alt:"avatar",src:"https://www.w3schools.com/w3css/img_avatar3.png"}),e.message,K.a.createElement("div",null,K.a.createElement("span",null,"like ",e.likeCount)))},Ze=n(95),Xe=n(37),Ye=K.a.memo((function(e){var t=Object(c.a)(e.posts).map((function(e){return K.a.createElement(Ve,{key:e.id,message:e.message,likeCount:e.likeCount})})).reverse();return K.a.createElement("div",{className:Ge.a.postBlock},K.a.createElement("h3",null," My posts "),e.isAuth&&K.a.createElement(Je,{onSubmit:function(t){e.addPost(t.newMessageText)}}),K.a.createElement("div",{className:Ge.a.posts},t))})),Be=Object(Xe.a)(200),Je=Object(Se.a)({form:"ProfileAddPostForm"})((function(e){return K.a.createElement("form",{onSubmit:e.handleSubmit},K.a.createElement("div",null,K.a.createElement(Ze.a,{name:"newMessageText",component:je.b,placeholder:"Enter your text",validate:[Xe.b,Be]})),K.a.createElement("div",null,K.a.createElement("button",null,"Add post")))})),_e=Ye,ze=n(12),qe=Object(ze.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts,isAuth:e.auth.isAuth}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(_e),He=function(e){return K.a.createElement("div",{className:Ee.a.content},K.a.createElement(Me,{savePhoto:e.savePhoto,profile:e.profile,isOwner:e.isOwner,status:e.status,updateUserStatus:e.updateUserStatus,saveProfile:e.saveProfile}),K.a.createElement(qe,null))},Qe=function(e){function t(){var e,n;Object(X.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(B.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(a)))).refreshProfile=function(){var e=n.props.match.params.userId;e||(e=n.props.authorizedUserId)||n.props.history.push("/login"),n.props.getUserProfile(e),n.props.getUserStatus(e)},n}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status}),this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return K.a.createElement(He,Object.assign({savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userId},this.props))}}]),t}(K.a.Component),$e=Object(g.d)(Object(ze.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:d,getUserStatus:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(p(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(d(o)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),ne.g)(Qe),et=n(102),tt=n.n(et),nt=function(e){return K.a.createElement("header",{className:tt.a.header},K.a.createElement("img",{alt:"logo",src:"https://www.vetter.fi/wp-content/uploads/2019/05/logo-ex-3.png"}),K.a.createElement("div",{className:tt.a.loginBlock},e.isAuth?K.a.createElement("div",null,e.login," - ",K.a.createElement("button",{onClick:e.logout},"Log out")," "):K.a.createElement(K.a.Fragment,null,K.a.createElement(H.b,{to:"/login"},"Login"),K.a.createElement(ne.a,{to:"/login"}))))},rt=function(e){function t(){return Object(X.a)(this,t),Object(B.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return K.a.createElement(nt,this.props)}}]),t}(K.a.Component),at=Object(ze.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(k(null,null,null,!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(rt),ot=Object(Xe.a)(20),ct=Object(Se.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return K.a.createElement("form",{onSubmit:t},Object(je.c)("Email","email",[Xe.b,ot],je.a),Object(je.c)("Password","password",[Xe.b,ot],je.a,{type:"password"}),Object(je.c)(null,"rememberMe",null,je.a,{type:"checkbox"},"remember me"),r&&K.a.createElement("img",{src:r,alt:"#"}),r&&Object(je.c)("Symbols from image","captcha",[Xe.b],je.a),n&&K.a.createElement("div",{className:Ce.a.formSummaryError},n),K.a.createElement("div",null,K.a.createElement("button",null,"Login")))})),it=Object(ze.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var c=Object(o.a)(a.a.mark((function o(c){var i,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n,r);case 2:0===(i=a.sent).data.resultCode?c(C()):(10===i.data.resultCode&&c(N()),l=i.data.messages.length>0?i.data.messages[0]:"Some error",c(Object(s.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),o)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){return e.isAuth?K.a.createElement(ne.a,{to:"/profile"}):K.a.createElement("div",null,K.a.createElement("h1",null,"Login"),K.a.createElement(ct,{captchaUrl:e.captchaUrl,onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}}))})),ut=K.a.lazy((function(){return n.e(3).then(n.bind(null,333))})),st=K.a.lazy((function(){return n.e(4).then(n.bind(null,334))})),lt=function(e){function t(){var e,n;Object(X.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(B.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandledErrors=function(e,t){alert("some error"),console.log(t)},n}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?K.a.createElement("div",{className:"app-wrapper"},K.a.createElement(at,null),K.a.createElement(te,null),K.a.createElement("div",{className:"app-wrapper-content"},K.a.createElement(K.a.Suspense,{fallback:K.a.createElement(Oe.a,null)},K.a.createElement(ne.d,null,K.a.createElement(ne.b,{exact:!0,path:"/",render:function(){return K.a.createElement(ne.a,{to:"/profile"})}}),K.a.createElement(ne.b,{path:"/dialogs",render:function(){return K.a.createElement(st,null)}}),K.a.createElement(ne.b,{path:"/profile/:userId?",render:function(){return K.a.createElement($e,null)}}),K.a.createElement(ne.b,{path:"/news",component:oe}),K.a.createElement(ne.b,{path:"/music",component:ue}),K.a.createElement(ne.b,{path:"/users",component:ut}),K.a.createElement(ne.b,{path:"/settings",component:me}),K.a.createElement(ne.b,{path:"/friends",component:de}),K.a.createElement(ne.b,{path:"/login",component:it}))))):K.a.createElement(Oe.a,null)}}]),t}(K.a.Component),mt=Object(g.d)(ne.g,Object(ze.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(lt);Z.a.render(K.a.createElement(H.a,null,K.a.createElement(ze.a,{store:G},K.a.createElement(mt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},42:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2kHZb",error:"FormsControls_error__3oTPu",formSummaryError:"FormsControls_formSummaryError__3nJyN"}},57:function(e,t,n){"use strict";var r=n(151),a=n.n(r),o=n(0),c=n.n(o);t.a=function(e){return c.a.createElement("div",null,c.a.createElement("img",{alt:"#",src:a.a}))}}},[[181,1,2]]]);
//# sourceMappingURL=main.4ed36b10.chunk.js.map
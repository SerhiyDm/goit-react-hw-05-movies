"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[157],{1157:function(t,r,e){e.r(r);var n=e(5861),a=e(9439),u=e(7757),c=e.n(u),i=e(2791),o=e(1087),s=e(3896),p=e(8136),f=e(5130),d=e(184);r.default=function(){var t=(0,i.useState)(null),r=(0,a.Z)(t,2),e=r[0],u=r[1],l=(0,o.lr)(),v=(0,a.Z)(l,1)[0];return(0,i.useEffect)((function(){var t,r=v.get("query");return void((null!==(t=null!==r)&&void 0!==t?t:""!==r)&&function(){e.apply(this,arguments)}(r));function e(){return(e=(0,n.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Ch)(r);case 3:if(e=t.sent,0!==(n=e.results).length){t.next=8;break}return(0,p.S)("There are no movies for this request"),t.abrupt("return");case 8:u(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),(0,p.S)(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}}),[v]),(0,d.jsx)(d.Fragment,{children:e&&(0,d.jsx)(f.O,{data:e})})}},5130:function(t,r,e){e.d(r,{O:function(){return c}});var n=e(7689),a=e(1087),u=e(184),c=function(t){var r=t.data,e=t.text,c=(0,n.TH)();return(0,u.jsxs)(u.Fragment,{children:[e&&(0,u.jsx)("h1",{children:e}),null!==r&&(0,u.jsx)("ul",{children:r.map((function(t){var r=t.id,e=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:c},children:e})},r)}))})]})}},8136:function(t,r,e){e.d(r,{S:function(){return c}});var n=e(9014),a=e(2007),u=e.n(a),c=function(t){return n.ZP.error(t,{duration:3e3,position:"top-center",style:{backgroundColor:"red",opacity:.5,width:"50vw",color:"white",fontSize:"1.5em"},icon:"\ud83e\udd14",ariaProps:{role:"status","aria-live":"polite"}})};c.propTypes={message:u().string.isRequired}},3896:function(t,r,e){e.d(r,{Bt:function(){return f},Ch:function(){return d},Dt:function(){return l},Ny:function(){return s},d5:function(){return p},wr:function(){return o}});var n=e(5861),a=e(7757),u=e.n(a),c=e(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="2da3e938b4dbf31e7c00d8a01ff91cc3",o=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(t,r){return"https://image.tmdb.org/t/p/"+r+t}}}]);
//# sourceMappingURL=157.7dac9c07.chunk.js.map
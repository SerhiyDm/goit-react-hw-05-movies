"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{3597:function(t,r,e){e.r(r);var n=e(5861),a=e(9439),c=e(7757),u=e.n(c),i=e(2791),o=e(7689),s=e(3896),p=e(9014),f=e(8136),d=e(184);r.default=function(){var t=(0,i.useState)(null),r=(0,a.Z)(t,2),e=r[0],c=r[1],v=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.d5)(r);case 3:e=t.sent,n=e.cast,c(n),window.scrollBy({top:480,behavior:"smooth"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),(0,f.S)(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(r){return t.apply(this,arguments)}}();t(v)}),[v]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.x7,{}),e&&(0,d.jsx)("ul",{children:e.map((function(t){var r=t.character,e=t.name,n=t.profile_path,a=t.credit_id;return(0,d.jsxs)("li",{children:[n&&(0,d.jsx)("img",{src:(0,s.Dt)(n,"w200"),alt:"profile"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:e}),(0,d.jsxs)("p",{children:["Character: ",r]})]})]},a)}))})]})}},8136:function(t,r,e){e.d(r,{S:function(){return u}});var n=e(9014),a=e(2007),c=e.n(a),u=function(t){return n.ZP.error(t,{duration:3e3,position:"top-center",style:{backgroundColor:"red",opacity:.5,width:"50vw",color:"white",fontSize:"1.5em"},icon:"\ud83e\udd14",ariaProps:{role:"status","aria-live":"polite"}})};u.propTypes={message:c().string.isRequired}},3896:function(t,r,e){e.d(r,{Bt:function(){return f},Ch:function(){return d},Dt:function(){return v},Ny:function(){return s},d5:function(){return p},wr:function(){return o}});var n=e(5861),a=e(7757),c=e.n(a),u=e(2388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="2da3e938b4dbf31e7c00d8a01ff91cc3",o=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(t,r){return"https://image.tmdb.org/t/p/"+r+t}}}]);
//# sourceMappingURL=597.5b96aa31.chunk.js.map
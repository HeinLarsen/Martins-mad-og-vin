(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/KJO":function(t,e,n){"use strict";n.r(e);n("QWBl"),n("rMz7"),n("DQNa"),n("FZtP");var a=n("4aBo"),s=n("nY3v"),i={name:"eventCard",props:["title","image","startDate","endDate","subtitle","path"],mixins:[n("7GA/").a]},r=n("KHd+"),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 col-12 hover"},[a("g-link",{staticClass:"events",attrs:{to:t.path}},[a("g-image",{staticClass:"cardImg",attrs:{src:n("BChh")("./"+t.image)}}),a("p",[a("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"calendar-alt"}}),a("b",[null==t.endDate||t.startDate==t.endDate?[t._v("\n          "+t._s(t.convertDate(t.startDate))+"\n        ")]:[t._v("\n          "+t._s(t.convertDate(t.startDate))+" - "+t._s(t.convertDate(t.endDate))+"\n        ")]],2)],1),a("h5",{staticClass:"text-truncate"},[t._v(t._s(t.title))]),a("p",{staticClass:"text-truncate"},[t._v(t._s(t.subtitle))])],1)],1)}),[],!1,null,null,null).exports,l=n("B25C"),c={metaInfo:{title:"Events"},components:{Nav:s.a,Header:a.a,Event:o,Footer:l.a},data:function(){return{current:[],past:[]}},mounted:function(){var t=this,e=this.$page.events.edges,n=new Date;console.log(n.toISOString()),console.log(e),e.forEach((function(e){e.node.endDate>=n.toISOString()?t.current.push(e):t.past.push(e)}))}},u=(n("POvN"),null),g=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("Nav"),e("Header",{attrs:{image:this.$page.page.image}}),e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-5"},[this._m(0),0!=this.current.length?[this._l(this.current,(function(t){return[e("event",{key:t.id,attrs:{title:t.node.title,image:t.node.image,subtitle:t.node.subtitle,startDate:t.node.startDate,endDate:t.node.endDate,path:t.node.path}})]}))]:[this._m(1)]],2),0!=this.past.length?e("div",{staticClass:"row mt-5 mb-5"},[this._m(2),this._l(this.past,(function(t){return[e("event",{key:t.id,attrs:{title:t.node.title,image:t.node.image,subtitle:t.node.subtitle,startDate:t.node.startDate,endDate:t.node.endDate,path:t.node.path}})]}))],2):this._e()]),e("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 p-0 mb-2"},[e("h3",[this._v("Fremtidige Events")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Vi har ikke nogen fremtidige events planlagt. Hold dig opdateret på vores "),e("a",{attrs:{href:"https://www.facebook.com/martinsmadogvin/",target:"_blank"}},[e("b",[this._v("Facebook")])]),this._v(" og "),e("a",{attrs:{href:"https://www.instagram.com/martinsmadogvin/",target:"_blank"}},[e("b",[this._v("Instagram")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 p-0 mb-2"},[e("h3",[this._v("Forrige Events")])])}],!1,null,null,null);"function"==typeof u&&u(g);e.default=g.exports},"/QPW":function(t,e,n){"use strict";n("LiFR")},"4aBo":function(t,e,n){"use strict";var a={props:["image"]},s=(n("/QPW"),n("KHd+")),i=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"page",appear:"",mode:"out-in"}},[e("section",{staticClass:"parent"},[e("g-image",{staticClass:"headerImg selectable-all",attrs:{src:n("BChh")("./"+this.image),alt:""}})],1)])}),[],!1,null,null,null);e.a=i.exports},"7GA/":function(t,e,n){"use strict";n("DQNa");var a={methods:{convertDate:function(t){var e=new Date(t);t=["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"][e.getDay()]+" "+e.getDate()+". "+["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"][e.getMonth()],e.getHours(),e.getMinutes();return t}}};e.a=a},DMt2:function(t,e,n){var a=n("UMSQ"),s=n("EUja"),i=n("HYAF"),r=Math.ceil,o=function(t){return function(e,n,o){var l,c,u=String(i(e)),g=u.length,h=void 0===o?" ":String(o),v=a(n);return v<=g||""==h?u:(l=v-g,(c=s.call(h,r(l/h.length))).length>l&&(c=c.slice(0,l)),t?u+c:c+u)}};t.exports={start:o(!1),end:o(!0)}},DQNa:function(t,e,n){var a=n("busE"),s=Date.prototype,i=s.toString,r=s.getTime;new Date(NaN)+""!="Invalid Date"&&a(s,"toString",(function(){var t=r.call(this);return t==t?i.call(this):"Invalid Date"}))},EUja:function(t,e,n){"use strict";var a=n("ppGB"),s=n("HYAF");t.exports="".repeat||function(t){var e=String(s(this)),n="",i=a(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},LiFR:function(t,e,n){},POvN:function(t,e,n){"use strict";n("YY8Z")},YY8Z:function(t,e,n){},ZOXb:function(t,e,n){"use strict";var a=n("0Dky"),s=n("DMt2").start,i=Math.abs,r=Date.prototype,o=r.getTime,l=r.toISOString;t.exports=a((function(){return"0385-07-25T07:06:39.999Z"!=l.call(new Date(-50000000000001))}))||!a((function(){l.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this.getUTCFullYear(),e=this.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+s(i(t),n?6:4,0)+"-"+s(this.getUTCMonth()+1,2,0)+"-"+s(this.getUTCDate(),2,0)+"T"+s(this.getUTCHours(),2,0)+":"+s(this.getUTCMinutes(),2,0)+":"+s(this.getUTCSeconds(),2,0)+"."+s(e,3,0)+"Z"}:l},nY3v:function(t,e,n){"use strict";var a=n("pYQZ"),s=(n("Kyfw"),{metaInfo:{},data:function(){return{scroll:null,isOpen:!1}},created:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("consentUpdate",this.consentToggle),this.$cookies.isKey("consent")&&$cookies.get("consent").googleAnalytics&&this.enablePlugin()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{track:function(){this.$gtag.event("Book bord navigation",{event_category:"Eksternt link",event_label:"Bruger har brugt linket",value:1})},consentToggle:function(){this.$cookies.isKey("consent")&&this.$cookies.get("consent").googleAnalytics&&this.enablePlugin()},enablePlugin:function(){Object(a.a)().then((function(t){}))},handleScroll:function(t){document.body.scrollTop>70||document.documentElement.scrollTop>70?this.scroll=!0:this.scroll=!1}}}),i=(n("z6Tl"),n("KHd+")),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{class:{solid:this.scroll,test:this.scroll,mobileBG:t.isOpen},attrs:{toggleable:"lg"}},[n("b-navbar-brand",{attrs:{to:"/"}},[n("img",{attrs:{src:"/assets/whiteLogo.png"}})]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("button",{staticClass:"black-btn"},[n("a",{attrs:{href:"https://book.easytablebooking.com/book/?id=f4b9d&lang=da",target:"_blank"},on:{click:t.track}},[n("b",[t._v("BOOK BORD")])])]),n("b-nav-item",{attrs:{to:"/history"}},[t._v(" Historie & Vision ")]),n("b-nav-item",{attrs:{to:"/menu"}},[t._v(" Menukort ")]),n("b-nav-item",{attrs:{to:"/wine"}},[t._v(" Vin & Drikke ")]),n("b-nav-item",{attrs:{to:"/blogs"}},[t._v(" Ny fra Chefen ")]),n("b-nav-item",{attrs:{to:"/events"}},[t._v(" Events ")]),n("b-nav-item",{attrs:{to:"/contact"}},[t._v(" Kontakt & Selskaber ")])],1)],1)],1)}),[],!1,null,null,null);e.a=r.exports},oXDs:function(t,e,n){},rMz7:function(t,e,n){var a=n("I+eb"),s=n("ZOXb");a({target:"Date",proto:!0,forced:Date.prototype.toISOString!==s},{toISOString:s})},z6Tl:function(t,e,n){"use strict";n("oXDs")}}]);
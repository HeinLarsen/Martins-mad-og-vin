(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/H28":function(t,e,n){"use strict";var s=n("z/o8"),i={props:["content"],data:function(){return{show:!0}},components:{gsap:s.a},methods:{toggle:function(){this.show?(this.play(),this.show=!1):(this.back(),this.show=!0)},play:function(){s.a.to(".content",{duration:.4,ease:"elastic.out(1, 1)",height:"auto",webkitMaskImage:"linear-gradient(to top, rgba(255,255,255,0), 0%, rgba(255,255,255, 1))"}),s.a.to(".fa-chevron-down",{duration:.4,ease:"elastic.out(1, 1)",rotation:180})},back:function(){s.a.to(".content",{duration:.4,ease:"elastic.out(1, 1)",height:"100px",webkitMaskImage:"linear-gradient(to top, rgba(255,255,255,0), 10%, rgba(255,255,255, 1))"}),s.a.to(".fa-chevron-down",{duration:.4,ease:"elastic.out(1, 1)",rotation:0})}}},a=(n("oE8J"),n("KHd+")),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center mb-5"},[t.content.length>=500?n("div",{staticClass:"col-12 content"},[n("span",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-center",staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:t._s(t.content)}})]):t._e(),t.content.length>=500?n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn-b-gone",on:{click:function(e){return t.toggle()}}},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12"},[this.show?[n("p",[t._v("læs mere")])]:[n("p",[t._v("læs mindre")])]],2),n("div",{staticClass:"col-auto"},[n("font-awesome-icon",{attrs:{icon:"chevron-down"}})],1)])])]):t._e(),t.content.length<=499?n("div",{staticClass:"col-12"},[n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-center",domProps:{innerHTML:t._s(t.content)}})]):t._e()])}),[],!1,null,null,null);e.a=o.exports},"/QPW":function(t,e,n){"use strict";n("LiFR")},"4aBo":function(t,e,n){"use strict";var s={props:["image"]},i=(n("/QPW"),n("KHd+")),a=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"page",appear:"",mode:"out-in"}},[e("section",{staticClass:"parent"},[e("g-image",{staticClass:"headerImg selectable-all",attrs:{src:n("RHSw")("./"+this.image),alt:""}})],1)])}),[],!1,null,null,null);e.a=a.exports},"5jBC":function(t,e,n){"use strict";n("GbOV")},GbOV:function(t,e,n){},LiFR:function(t,e,n){},Rl3o:function(t,e,n){"use strict";n.r(e);n("QWBl"),n("FZtP");var s=n("4aBo"),i=n("nY3v"),a=n("/H28"),o={props:["content"]},c=n("KHd+"),r=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4 col-12 mt-4 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",[this._t("title")],2)]),e("div",{staticClass:"col-auto"},[e("h5",[this._t("price")],2)])]),e("div",{staticClass:"col-12 p-0"},[e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.content)}})])])}),[],!1,null,null,null).exports,l=n("B25C"),d=n("S3Ye"),u={metaInfo:{title:"Vin & Drikke"},data:function(){return{categories:d}},components:{Nav:i.a,Header:s.a,Foldy:a.a,Drink:r,Footer:l.a},computed:{wine:function(){for(var t=this,e=this.$page.wine.edges,n=[],s=0;s<this.categories.categories.length;s++)n[s]=[this.categories.categories[s]],e.forEach((function(e){e.node.category==t.categories.categories[s]&&n[s].push(e)}));return n}}},g=(n("5jBC"),null),v=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("Nav"),n("Header",{attrs:{image:t.$page.page.image}}),n("div",{staticClass:"container"},[n("Foldy",{attrs:{content:t.$page.page.content}}),n("div",{staticClass:"row justify-content-center"},[t._m(0),n("div",{staticClass:"col-lg-10 col-md-12"},[n("div",{staticClass:"row justify-content-center"},[t._l(t.$page.drink.edges,(function(e){return[n("Drink",{key:e.node.id,attrs:{content:e.node.content}},[n("template",{slot:"title"},[t._v("\n                "+t._s(e.node.title)+"\n              ")]),n("template",{slot:"price"},[t._v("\n                "+t._s(e.node.price)+"\n              ")])],2)]}))],2)])]),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-4 col-12 mt-4 mb-5"},[n("div",{staticClass:"row"},[t._m(1),t._l(t.$page.NonAWine.edges,(function(e){return[n("div",{key:e.node.id,staticClass:"col-12"},[t._v("\n              "+t._s(e.node.title)+"\n              "),n("h5",{staticClass:"float-right"},[t._v(t._s(e.node.price))])])]}))],2)]),n("div",{staticClass:"col-md-4 col-12 mt-4 mb-5"},[n("div",{staticClass:"row"},[t._m(2),t._l(t.$page.Beer.edges,(function(e){return[n("div",{key:e.node.id,staticClass:"col-12"},[t._v("\n              "+t._s(e.node.title)+"\n              "),n("h5",{staticClass:"float-right"},[t._v(t._s(e.node.price))])])]}))],2)])]),t._l(t.wine,(function(e,s){return[n("div",{key:s,staticClass:"row"},[t._l(e,(function(s,i){return[0==i&&e.length>1?n("div",{key:i,staticClass:"col-12 text-center UL"},[n("h3",[n("span",[t._v("\n                "+t._s(s)+"\n              ")])])]):t._e(),0!=i?n("div",{key:i,staticClass:"col-md-6 col-12 mt-2 mb-5"},[0!=i?[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h5",[t._v(t._s(s.node.title))]),n("h5",[t._v(t._s(s.node.other))]),n("h5",[t._v(t._s(s.node.location))])]),n("div",{staticClass:"col-auto text-right"},[n("h5",[t._v(t._s(s.node.price1))]),s.node.price2.length>0?[n("h5",[t._v("gl "+t._s(s.node.price2))])]:t._e()],2),n("div",{staticClass:"col-12"},[n("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(s.node.content)}})])])]:t._e()],2):t._e()]}))],2)]})),n("div",{staticClass:"row justify-content-center mb-5"},[n("div",{staticClass:"col-md-8 col-12 text-center"},[n("h3",{staticClass:"mb-3"},[t._v(t._s(t.$page.main.title))]),n("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.main.content)}})])]),n("div",{staticClass:"row mb-5"},[t._l(t.$page.Drinks.edges,(function(e,s){return[n("div",{key:s,staticClass:"col-md-4 col-12 mt-4 mb-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h5",[t._v(t._s(e.node.title))])]),n("div",{staticClass:"col-auto text-right"},[n("h5",[t._v(t._s(e.node.price))])]),n("div",{staticClass:"col-12"},[n("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.content)}})])])])]}))],2)],2),n("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 mt-5 text-center"},[e("h3",[this._v("DRIKKEVARER")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h5",[this._v("ALKOHOLFRI VIN")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h5",[this._v("FADØL")])])}],!1,null,null,null);"function"==typeof g&&g(v);e.default=v.exports},S3Ye:function(t){t.exports=JSON.parse('{"categories":["mousserende","hvidvin","rosé","rødvin","søde vine","avec"]}')},VUl2:function(t,e){t.exports="data:image/png;base64,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"},nY3v:function(t,e,n){"use strict";var s=n("pYQZ"),i=(n("Kyfw"),{metaInfo:{},data:function(){return{scroll:null,isOpen:!1}},created:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("consentUpdate",this.consentToggle),this.$cookies.isKey("consent")&&$cookies.get("consent").googleAnalytics&&this.enablePlugin()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{track:function(){this.$gtag.event("Book bord navigation",{event_category:"Eksternt link",event_label:"Bruger har brugt linket",value:1})},consentToggle:function(){this.$cookies.isKey("consent")&&this.$cookies.get("consent").googleAnalytics&&this.enablePlugin()},enablePlugin:function(){Object(s.a)().then((function(t){}))},handleScroll:function(t){document.body.scrollTop>70||document.documentElement.scrollTop>70?this.scroll=!0:this.scroll=!1}}}),a=(n("z6Tl"),n("KHd+")),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{class:{solid:this.scroll,test:this.scroll,mobileBG:t.isOpen},attrs:{toggleable:"lg"}},[s("b-navbar-brand",{attrs:{to:"/"}},[s("img",{attrs:{src:n("VUl2")}})]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("button",{staticClass:"black-btn"},[s("a",{attrs:{href:"https://book.easytablebooking.com/book/?id=f4b9d&lang=da",target:"_blank"},on:{click:t.track}},[s("b",[t._v("BOOK BORD")])])]),s("b-nav-item",{attrs:{to:"/history"}},[t._v(" Historie & Vision ")]),s("b-nav-item",{attrs:{to:"/menu"}},[t._v(" Menukort ")]),s("b-nav-item",{attrs:{to:"/wine"}},[t._v(" Vin & Drikke ")]),s("b-nav-item",{attrs:{to:"/icecream"}},[t._v(" Isbar ")]),s("b-nav-item",{attrs:{to:"/events"}},[t._v(" Events ")]),s("b-nav-item",{attrs:{to:"/contact"}},[t._v(" Kontakt & Selskaber ")])],1)],1)],1)}),[],!1,null,null,null);e.a=o.exports},o1AR:function(t,e,n){},oE8J:function(t,e,n){"use strict";n("o1AR")},oXDs:function(t,e,n){},"z/o8":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var s=n("pc+1"),i=n("nOaX"),a=s.x.registerPlugin(i.a)||s.x;a.core.Tween},z6Tl:function(t,e,n){"use strict";n("oXDs")}}]);
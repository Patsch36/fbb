(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0003":function(t,e,n){t.exports=n.p+"img/fbb-logo.c4dff90c.png"},"0217":function(t,e,n){},"0245":function(t,e,n){},"142c":function(t,e,n){"use strict";n("564a")},"1fde":function(t,e,n){t.exports=n.p+"img/bki9701.468a2b6a.png"},"24e6":function(t,e,n){"use strict";n("a38b")},"26aa":function(t,e,n){t.exports=n.p+"img/strong1.9f3eb08d.jpg"},"27b6":function(t,e,n){t.exports=n.p+"img/WhatsApp-Image-2022-03-31-at-20.18.59-600x442.018652ae.jpeg"},"2a37":function(t,e,n){t.exports=n.p+"img/av1.69156102.jpg"},"2b10":function(t,e,n){t.exports=n.p+"img/sun.189989a4.svg"},"347d":function(t,e,n){t.exports=n.p+"img/DSC_0897-300x200-1.ff9bebaf.jpg"},"3dfd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("Sidebar",{attrs:{page:t.nav_page}}),n("v-main",{staticClass:"body"},[n("v-container",{staticClass:"main-container",attrs:{fluid:""}},[n("v-card",{attrs:{id:"header"}},[n("v-card-title"),n("v-card-subtitle")],1)],1)],1),n("Footer")],1)},i=[],s=n("bc11"),o=n("9fe9"),r={name:"App",components:{Sidebar:s["default"],Footer:o["default"]},data:()=>({nav_page:{logo_src:"assets/images/icons/logo_small.png"}})},c=r,l=n("2877"),u=n("6544"),d=n.n(u),m=n("7496"),p=n("b0af"),g=n("99d9"),f=n("a523"),A=n("f6c4"),v=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=v.exports;d()(v,{VApp:m["a"],VCard:p["a"],VCardSubtitle:g["a"],VCardTitle:g["b"],VContainer:f["a"],VMain:A["a"]})},"402c":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=n("f309");a["a"].use(i["a"]),e["default"]=new i["a"]({})},"564a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=n("3dfd"),s=n("402c");a["a"].config.productionTip=!1,new a["a"]({vuetify:s["default"],render:function(t){return t(i["default"])}}).$mount("#app")},"601a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"footer-card-cta",attrs:{href:t.url,target:"_blank"}},[n("div",{staticClass:"footer-card",class:t.short},[n("h3",{staticClass:"footer-card-title-large"},[t._v(t._s(t.name))]),n("h5",{staticClass:"footer-card-title-small"},[t._v(t._s(t.name))])])])},i=[];n("c000"),n("0245");let s=getComputedStyle(document.documentElement),o=s.getPropertyValue("--accent-color");o||s.setProperty("--accent-color","#33FFBD");var r={name:"social-link-card",props:{url:String,name:String,short:String},computed:{styleObject:function(){return{"--media_color":this.media_colour}}}},c=r,l=(n("704e"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},"704e":function(t,e,n){"use strict";n("c227")},"87d3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAADJAQMAAACg38SyAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAxBJREFUWMPt2EGO7CYUBdCLGJAZG4jEUthKVhKzNJbCEhgyQL4ZPLDBhk46KuX/L6Vm7lMu42fzuDQAADBsn4zHx3c5n8LrE2ZQt8RZ9C1pFnPLYwj2lvJPxd1SH3Id+6dc17UP8ZeYvTzK49N/Ja1y+S2tPuUtrT71F5Msz+B/+Ywct/AxgQeJ8wS+RM9T2I5S5smY7tPr3FvCfclz7i3DMDkN7RzPj+PQyjSasbfk8SCOX4vjT4dx0GNTG0fgp4H+OdZzurnfx/Ongvw2XvPVcO9Kb8Q8u+ogYSOWV2FjK127sDuv1pzbN865QZrWXhX7UznK1YCfki+ps/Tb6aK7qC8kbkT3G33J9SZ/IcU2UfIne26l7qSvIweLJQMcqWRRc6UvgsWSEZ5UUqe2WmiRDJJKRtnEzHICONJVaUsWJcJZDFn1La1sg5xKVukmjsy6CUiG6913ZFIiBX6SPrmlWAzQxAelN6fPSH9wn5H2SD8l+fvivxCpgiMZnLwHWZMBPg3im9hRLMlw/K04EjhmKeolRiRD5ASOKKK3okQiPJkdyy04yHDIzMqOGTiutscgBz5LmX9m4RfS39/3r31W9M8s3Ejai9qI/5cS1pL3go243B/4N6T012cl6ZtiS28WL6nfF1N7I3vJ2dfAhdi1aPa1diFmL1yKYtBfSFgJGFuqWEpaS8JGjtQSz1syfFmKzy1ZvaW0NPYSVyTBeQbyBAyzkyRnq6Q+MlDSRnaS5OwJwwgtknAwO0kbhtBMMCIZ0shPEcXSpSgRtsTFCitSNZkuiTjKS4LkN1/gSDwETHAZTuJH1WTscmTYBCeLRdU8cUmBjosVEPAVai3uBMJauF5PASu+EEneK5G0vhJJ+CuRXcFSjroTf+7EMWzEMm7EMG1Es2xEsQKOjJhyYt+1Ddmy4ujiGeHIbKbUKcPOq6QKwLJ0GXMvAMPas3KXs++n6ipFt2q3TJ5wXMm7zTtwyvF9U2YzYFksK6BIdW9LTV7tCgBApZ3gj60sdyw/TNRKylrMa984/LMvtSRXAfwF2R8A0PrG/18AAAAASUVORK5CYII="},"8a8e":function(t,e,n){t.exports=n.p+"img/fitness-people-hands-lifting-kettle-bell.f22f4d06.jpg"},"9fe9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-container"},t._l(t.medias,(function(t){return n("SocialLinkCard",{key:t.media_key,attrs:{name:t.name,url:t.url,short:t.short}})})),1)},i=[],s=n("601a"),o={components:{SocialLinkCard:s["default"]},data:()=>({medias:[{short:"whatsapp",name:"WhatsApp",url:"https://api.whatsapp.com/send?phone=491777871717&text=Guten Tag, ich interessiere mich für ein Probetraining."},{short:"instagram",name:"Instagram",url:"https://www.instagram.com/fitnessbarockbacknang/?hl=de"},{short:"facebook",name:"Facebook",url:"https://www.facebook.com/fitnessbarockbacknang-105339741217132"},{short:"youtube",name:"Youtube",url:"https://www.youtube.com/channel/UCVgBKKGKg1rWt9h1ILMAWrA"},{short:"phone",name:"Mobilnummer",url:"tel:+491777871717"}]})},r=o,c=(n("142c"),n("2877")),l=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=l.exports},a38b:function(t,e,n){},a44d:function(t,e,n){t.exports=n.p+"img/av4.232ad5ce.jpg"},a8ec:function(t,e,n){var a={"./App":"3dfd","./App.vue":"3dfd","./MainStyle.css":"c000","./assets/images/gallery/DSC_0897-300x200-1.jpg":"347d","./assets/images/gallery/WhatsApp-Image-2022-03-31-at-20.18.59-600x442.jpeg":"27b6","./assets/images/gallery/gym-01-206x300.png":"ec3c","./assets/images/icons/dumbell.png":"e360","./assets/images/icons/kettlebell.png":"87d3","./assets/images/icons/logo_small.png":"b071","./assets/images/icons/moon.svg":"fc53","./assets/images/icons/sun.svg":"2b10","./assets/images/icons/supplement.png":"b90e","./assets/images/index/ad9.jpg":"da32","./assets/images/index/av1.jpg":"2a37","./assets/images/index/av4.jpg":"a44d","./assets/images/index/bki9701.png":"1fde","./assets/images/index/fbb-logo.png":"0003","./assets/images/index/fitness-people-hands-lifting-kettle-bell.jpg":"8a8e","./assets/images/index/our-gym.png":"caa6","./assets/images/index/strong1.jpg":"26aa","./components/ToggleButton":"b800","./components/ToggleButton/":"b800","./components/ToggleButton/index":"b800","./components/ToggleButton/index.vue":"b800","./components/footer":"9fe9","./components/footer/":"9fe9","./components/footer/index":"9fe9","./components/footer/index.vue":"9fe9","./components/footer/media-classes.css":"0245","./components/footer/social-link-card":"601a","./components/footer/social-link-card.vue":"601a","./components/sidebar":"bc11","./components/sidebar/":"bc11","./components/sidebar/index":"bc11","./components/sidebar/index.vue":"bc11","./components/sidebar/style.css":"0217","./main":"56d7","./main.js":"56d7","./plugins/vuetify":"402c","./plugins/vuetify.js":"402c"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="a8ec"},b071:function(t,e,n){t.exports=n.p+"img/logo_small.754604b9.png"},b800:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toggle-button"},[n("input",{ref:"toggle",attrs:{type:"checkbox",id:"toggle"},on:{click:function(e){return t.myFunctionClick()}}}),n("label",{staticClass:"toggle_button",attrs:{for:"toggle"}})])},i=[],s={methods:{myFunctionClick:function(){setTimeout(()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?localStorage.setItem("darkTheme","active"):localStorage.removeItem("darkTheme")},500)}}},o=s,r=(n("24e6"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},b90e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAADJAQMAAABFQQHeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAnhJREFUWMPt2DGS3CAQBdDGBIQcgaPgm0Hma3EUjqCQQMV3ABIN03hXuy671mWimXqjQY26AUFERAF3q8SaBmuJgeGQGVgOBwPHoTDwHM5PQXgX8AgDu3fzBWAbx5+G5w+qvCdLiHyP3ZxEXxbumG0xAPBSNhfktTouKOugX3AuXdzQO1GvEJdaviEttVxs0ayiLQc1QZ5HwfSH6LAMD/VA3DpuFBr4skL/qT9WsA3CFvIKvXZCejfoNwAPAP/hKayt/mvwV0b3KsXfCW7eKAzwOwifAj3WIwbfx+w1Qx5TauKgjgGZgy5juWqQxsQexko1wNYNOGzA764I5z3luAlQZFA4ZNDIMhgkGSyiDA4kg6+0xEEjDBFQZFA4ZNDIMhgkGSyiDG1J8q/gK4c8IAB1LH5xQE8zU4kUWH2o/rvHoABkhfMFbAPWuWqd+w55vavQ4VjjQIfCyzmc7Q+zAk4OKAMqA4WjlWCmGTQy9Z1MABgYJDK4PjOwiPemVnNwGNsoxcFXDnFOOBFQZFA4ZNDIMhgkGSyiDA4kg68bCGcHgxlQOnjk+YqjA1DmPnIDBdT5rlIDDWCOIzawAOIUeZ/9HIDE4VuHnotxXiY6HBIE/JABhVBEOMhLoJDInSJEshJoRLJVBCLTgLXYQItQiTSegPkQqEdX6I/BG0PyOogiqN3obh8UIZM/HyVDgN7l1Sbhtin6ktQXvJTBBWYtnAv0Wmr3tmEtzhvWcr5hnQCmV8tfQngO+TEcG/BbKBtwVYTlDfJaJhSWd06+sPCjqDK+LKAZ8FOtothRhxLhnM8+CvETDc8hMHAc2C6D31a5dxlpfm0obL/7E+yQE533JUkTAAAAAElFTkSuQmCC"},bc11:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{id:"top-navbar",app:""}},[n("div",{staticClass:"app-bar-content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.drawer,expression:"!drawer"}],staticClass:"top-menu-container"},[n("img",{directives:[{name:"show",rawName:"v-show",value:!t.drawer,expression:"!drawer"}],staticClass:"nav-logo",attrs:{src:t.getImgUrl(t.page.logo_src),alt:""}})]),n("v-btn",{staticClass:"top-menu-container",attrs:{id:"menu-btn"},on:{click:function(e){return t.toggleDrawer()}}},[t.drawer?t._e():n("v-icon",{attrs:{title:"Menu"}},[t._v("mdi-menu")]),t.drawer?n("v-icon",{style:{"font-size":"3vh"},attrs:{title:"Menu"}},[t._v("mdi-close")]):t._e(),t.drawer?t._e():n("div",[t._v("Menu")])],1),n("ToggleButton",{staticClass:"top-menu-container, right-menu-item"})],1)]),n("v-navigation-drawer",{attrs:{temporary:!1,"disable-resize-watcher":"","mini-variant":!t.menuCompact.hidden,"mini-variant-width":"100",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{attrs:{id:"sidebar"}},[n("div",{staticClass:"sidebar-toggle"},[n("div",{attrs:{id:"btn-toggle"},on:{click:function(e){return t.changeToggleState()}}},[n("v-icon",{attrs:{id:"btn-toggle-icon","x-large":""}},[t._v("mdi-chevron-left")])],1)]),n("div",{staticClass:"nav-image-wrapper",attrs:{href:"#"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.drawer,expression:"drawer"}],staticClass:"nav-logo nav-logo-big",attrs:{src:t.getImgUrl(t.page.logo_src),alt:""},on:{click:function(e){return e.preventDefault(),t.scrollToTop()}}})]),n("div",{staticClass:"sidebar-links"},[n("div",{staticClass:"sidebar-link-group"},[n("small",{directives:[{name:"show",rawName:"v-show",value:t.menuCompact.hidden,expression:"menuCompact.hidden"}]},[t._v("Landing-Page")]),n("hr",{staticClass:"divider"}),n("div",{staticClass:"links"},t._l(t.LandingMenuLinks,(function(e){return n("a",{key:e.title,attrs:{href:e.path}},[n("v-icon",{staticClass:"icon",attrs:{title:e.title,id:"icon"}},[t._v("mdi-"+t._s(e.icon))]),n("v-slide-x-transition",{attrs:{mode:"in-out","leave-absolute":""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuCompact.hidden,expression:"menuCompact.hidden"}],staticClass:"link-title"},[t._v(" "+t._s(e.title)+" ")])])],1)})),0)]),n("div",{staticClass:"sidebar-link-group"},[n("small",{directives:[{name:"show",rawName:"v-show",value:t.menuCompact.hidden,expression:"menuCompact.hidden"}]},[t._v("Gallery-Page")]),n("hr",{staticClass:"divider"}),n("div",{staticClass:"links"},t._l(t.GalleryMenuLinks,(function(e){return n("a",{key:e.title,attrs:{href:e.path}},[n("v-icon",{staticClass:"icon",attrs:{title:e.title,id:"icon"}},[t._v("mdi-"+t._s(e.icon))]),n("v-slide-x-transition",{attrs:{mode:"in-out","leave-absolute":""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuCompact.hidden,expression:"menuCompact.hidden"}],staticClass:"link-title"},[t._v(" "+t._s(e.title)+" ")])])],1)})),0)]),n("div",{staticClass:"sidebar-link-group"},[n("small",{directives:[{name:"show",rawName:"v-show",value:t.menuCompact.hidden,expression:"menuCompact.hidden"}]},[t._v("Contact-form")]),n("hr",{staticClass:"divider"}),n("div",{staticClass:"links"},t._l(t.ContactMenuLinks,(function(e){return n("a",{key:e.title,attrs:{href:e.path}},[n("v-icon",{staticClass:"icon",attrs:{title:e.title,id:"icon"}},[t._v("mdi-"+t._s(e.icon))]),n("v-slide-x-transition",{attrs:{mode:"in-out","leave-absolute":""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuCompact.hidden,expression:"menuCompact.hidden"}],staticClass:"link-title"},[t._v(" "+t._s(e.title)+" ")])])],1)})),0)])])])])],1)},i=[],s=(n("c000"),n("0217"),n("b800")),o={name:"Sidebar",props:{page:Object},components:{ToggleButton:s["default"]},data:()=>({drawer:!1,mobile_width:!1,menuCompact:{hidden:!0},memberActive:!0,LandingMenuLinks:[{path:"#",title:"Overview",icon:"information-outline"},{path:"#",title:"Training",icon:"dumbbell"},{path:"#",title:"Gym",icon:"account-multiple"},{path:"#",title:"Kommentare",icon:"comment-text-multiple"},{path:"#",title:"Mitgliedschaft",icon:"passport-biometric"},{path:"#",title:"Kontakt",icon:"card-account-mail"}],GalleryMenuLinks:[{path:"#",title:"Bilder",icon:"image-multiple"},{path:"#",title:"Instagram",icon:"instagram"},{path:"#",title:"Videos",icon:"youtube-tv"}],ContactMenuLinks:[{path:"#",title:"Kontakt",icon:"email"}]}),methods:{changeToggleState(){let t=document.getElementById("btn-toggle-icon");return this.menuCompact.hidden=!this.menuCompact.hidden,this.menuCompact.hidden?t.style.transform="rotateY(0deg)":t.style.transform="rotateY(180deg)"},getImgUrl(t){return n("a8ec")("./"+t)},scrollToTop:function(){window.scroll(0,0)},toggleDrawer(){let t=document.getElementById("menu-btn");window.innerWidth<600&&(this.mobile_width=!0),this.drawer=!this.drawer,this.drawer?t.style.paddingInlineStart="10px":t.style.paddingInlineStart="0px"}}},r=o,c=n("2877"),l=n("6544"),u=n.n(l),d=n("40dc"),m=n("8336"),p=n("132d"),g=n("f774"),f=n("0789"),A=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=A.exports;u()(A,{VAppBar:d["a"],VBtn:m["a"],VIcon:p["a"],VNavigationDrawer:g["a"],VSlideXTransition:f["b"]})},c000:function(t,e,n){},c227:function(t,e,n){},caa6:function(t,e,n){t.exports=n.p+"img/our-gym.63910c81.png"},da32:function(t,e,n){t.exports=n.p+"img/ad9.a1c4b0ca.jpg"},e360:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAADJAQMAAACHVBJzAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAa9JREFUaN7t2kGOhCAQBdBvXLDkCB7Fo8nRPApHYOnC8Geh6WmwoKsnmu6JuLQfwZiSQP0G9msiI7JrJJnfQ0+Sc3aTJEMuLUl6YfSSy0EYb8jCI+XjLSk86ESSqzAPnfDw+UyjJDsKM00UXsgu3XEe8YVk47ua9H+T+70gyvApGQCby2X/4SBNLkNJ9k1+rzRbIcgyqZGhLmP6EVbk04fIF3JOPq2a9Elx12RI1rRz5JKsfufINV+PJdldIKGXYypdseoA4LdEmmzyXtIuNdkzgNEuAECNpAM6nfSA0ckAWJ1cgEEnV7WMwKiWk07yCunA75HZlcmImtzrc2jyXnKrkKMsVV2TTTbZpEYqVpvnFkSTt5D6HctHd1ZX7CrHs2V8Z+9t1dKod/69+tyhPKHMAEaVfJy50kPWcV1Ck03eVW4tuWJfMZGEugM5XyC9Rtr3pKr7as6TQd159upu9qzukLskJKtJdSd/TROtipxbhvIPpVFnfIc0cBXlZamlv0Aqst1OkKhJ9zqDhpRWj2UZNVm5lKrL+buU1MuZ/lB6dWsuTSlqP/yjoCsF/Y/RP/vxEV7TgcTGAAAAAElFTkSuQmCC"},ec3c:function(t,e,n){t.exports=n.p+"img/gym-01-206x300.923421a6.png"},fc53:function(t,e,n){t.exports=n.p+"img/moon.189989a4.svg"}});
//# sourceMappingURL=app.f426dc99.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{251:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("78bc47ee",content,!0,{sourceMap:!1})},252:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("f637dc5c",content,!0,{sourceMap:!1})},253:function(t,e,n){"use strict";n(251)},254:function(t,e,n){var o=n(54)(!1);o.push([t.i,'.img__wrapper[data-v-66a2500a]{width:100%;text-align:center}.img__wrapper img[data-v-66a2500a]{width:100%}.mx-n15[data-v-66a2500a]{margin-left:-15px;margin-right:-15px}.fluid_fullwidth[data-v-66a2500a]{padding-left:0;padding-right:0;box-sizing:content-box;width:100vw}p[data-v-66a2500a]{height:34px;margin:10px 0;text-align:left;padding-bottom:10px;border-bottom:1px solid #707070;color:#000;font-size:24px}p[data-v-66a2500a]:before{display:inline-block;content:"";width:3px;height:100%;background-color:red;margin-right:5px}',""]),t.exports=o},255:function(t,e,n){"use strict";n(252)},256:function(t,e,n){var o=n(54)(!1);o.push([t.i,".img__wrapper[data-v-fcb13ba0]{width:100%;text-align:center}.img__wrapper img[data-v-fcb13ba0]{width:100%}.mx-n15[data-v-fcb13ba0]{margin-left:-15px;margin-right:-15px}.fluid_fullwidth[data-v-fcb13ba0]{padding-left:0;padding-right:0;box-sizing:content-box;width:100vw}.button[data-v-fcb13ba0]{display:inline-block;background-color:red;color:#fff;padding:10px}.button.color_red[data-v-fcb13ba0]{background-color:#d51212}.button.color_blue[data-v-fcb13ba0]{background-color:#19199a}",""]),t.exports=o},257:function(t,e,n){"use strict";n.r(e);var o={},r=(n(253),n(43)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._t("default",[t._v("テキスト")])],2)])}),[],!1,null,"66a2500a",null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);var o={props:{href:{type:String,default:"/"},color_red:{type:Boolean,default:!1},color_blue:{type:Boolean,default:!1}},methods:{isInternalLink:function(){return!/^https?:\/\//.test(this.href)}}},r=(n(255),n(43)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isInternalLink()?"nuxt-link":"a",{tag:"component",staticClass:"button",class:{color_red:t.color_red,color_blue:t.color_blue},attrs:{to:t.isInternalLink()?t.href:"",href:t.isInternalLink()?"":t.href}},[t._t("default",[t._v("ボタン")])],2)}),[],!1,null,"fcb13ba0",null);e.default=component.exports},262:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("1b7833da",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n(262)},270:function(t,e,n){var o=n(54)(!1);o.push([t.i,'.container{margin:0 auto;min-height:100vh}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=o},274:function(t,e,n){"use strict";n.r(e);var o=n(258),r=n(257),l={components:{CButton:o.default,CHeaderStyleOne:r.default},data:function(){return{waitingLink:"/waiting/",chooseLink:"/chooseSeat/",watchLink:"/watch/"}}},c=(n(269),n(43)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",[n("h1",{staticClass:"title"},[t._v("トップページ")]),t._v(" "),n("c-button",{attrs:{href:"/",color_blue:""}},[t._v(" トップへ ")]),t._v(" "),n("c-button",{attrs:{href:t.waitingLink}},[t._v(" 待機ページへ ")]),t._v(" "),n("c-button",{attrs:{href:t.chooseLink,color_blue:""}},[t._v(" 席を選択ページへ ")]),t._v(" "),n("c-button",{attrs:{href:t.watchLink}},[t._v(" 視聴用ページへ ")])],1)]),t._v(" "),n("div",{staticClass:"container"},[n("c-header-style-one")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
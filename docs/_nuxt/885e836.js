(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{531:function(e,t,o){"use strict";o.r(t);o(24),o(35),o(43),o(73),o(83),o(3),o(46),o(48),o(468),o(289);var n=o(1),c=[{shikuchosonName:"武蔵野市",koazas:[{koazaName:"吉祥寺本町",maxChoume:4},{koazaName:"吉祥寺北町",maxChoume:5},{koazaName:"吉祥寺東町",maxChoume:4},{koazaName:"吉祥寺南町",maxChoume:5},{koazaName:"御殿山",maxChoume:2},{koazaName:"中町",maxChoume:3},{koazaName:"西久保",maxChoume:3},{koazaName:"緑町",maxChoume:3}]},{shikuchosonName:"練馬区",koazas:[{koazaName:"立野町",maxChoume:0},{koazaName:"関町南",maxChoume:4},{koazaName:"関町北",maxChoume:5},{koazaName:"関町東",maxChoume:2},{koazaName:"上石神井南町",maxChoume:0},{koazaName:"上石神井",maxChoume:4}]},{shikuchosonName:"西東京市",koazas:[{koazaName:"東伏見",maxChoume:6},{koazaName:"富士見町",maxChoume:6},{koazaName:"柳沢",maxChoume:6},{koazaName:"関町東",maxChoume:2},{koazaName:"保谷町",maxChoume:6}]},{shikuchosonName:"三鷹市",koazas:[{koazaName:"井の頭",maxChoume:5},{koazaName:"下連雀",maxChoume:9},{koazaName:"上連雀",maxChoume:9},{koazaName:"牟礼",maxChoume:7}]},{shikuchosonName:"杉並区",koazas:[{koazaName:"西荻北",maxChoume:5},{koazaName:"西荻南",maxChoume:4},{koazaName:"善福寺",maxChoume:4},{koazaName:"上井草",maxChoume:4},{koazaName:"松庵",maxChoume:5},{koazaName:"久我山",maxChoume:5}]}],l=n.a.extend({name:"IndexPage",data:function(){return{chizuShikuchoson:"",chizuYear:"",chizuPage:"",shisetsu:"",shikuchosons:c,selectshikuchoson:{},selectKoaza:{},selectChoume:"",banchi:"",banchiRule:[function(e){return/^\d+(-\d+)*$/.test(e)||"Error"}],buttons:[[9,8,7],[6,5,4],[3,2,1],["-",0,"del"]],myCat:[],showData:!1,snackbar:!1,downloadUrl:""}},computed:{zyusyo:function(){return"".concat(this.selectshikuchoson&&this.selectshikuchoson.shikuchosonName?this.selectshikuchoson.shikuchosonName:"").concat(this.selectKoaza&&this.selectKoaza.koazaName?this.selectKoaza.koazaName:"").concat(this.selectChoume?this.selectChoume+"丁目":"").concat(this.banchi)}},mounted:function(){this.updateMyCat()},methods:{inputButton:function(e){"del"===e?this.banchi=this.banchi.slice(0,-1):this.banchi+=e},updateMyCat:function(){var e=localStorage.getItem("myCat");null!==e&&(this.myCat=e.split("\n"))},save:function(){this.zyusyo&&(this.updateMyCat(),this.myCat.length?localStorage.setItem("myCat",this.myCat.join("\n")+"\n"+this.shisetsu+","+this.zyusyo):localStorage.setItem("myCat",this.shisetsu+","+this.zyusyo),this.reset(),this.snackbar=!0)},openData:function(){this.updateMyCat(),this.showData=!0},closeData:function(){this.showData=!1},reset:function(){this.shisetsu="",this.banchi=""},downloadReady:function(){var e=localStorage.getItem("myCat");e||(e=""),this.downloadUrl=URL.createObjectURL(new Blob([e],{type:"application/octet-stream"}))}}}),h=o(106),m=o(158),r=o.n(m),k=o(282),v=o(442),d=o(438),z=o(435),C=o(523),x=o(447),f=o(525),N=o(532),y=o(526),_=o(527),w=o(530),K=o(528),V=o(529),S=o(515),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[o("v-card-title",[e._v("住所入力")]),o("v-card-text",[o("v-form",[o("v-select",{attrs:{label:"地図市区町村",items:e.shikuchosons.map((function(e){return e.shikuchosonName}))},model:{value:e.chizuShikuchoson,callback:function(t){e.chizuShikuchoson=t},expression:"chizuShikuchoson"}}),o("v-text-field",{attrs:{label:"地図発行年"},model:{value:e.chizuYear,callback:function(t){e.chizuYear=t},expression:"chizuYear"}}),o("v-text-field",{attrs:{label:"地図ページ番号"},model:{value:e.chizuPage,callback:function(t){e.chizuPage=t},expression:"chizuPage"}}),o("v-divider"),o("v-text-field",{attrs:{label:"施設・建物名"},model:{value:e.shisetsu,callback:function(t){e.shisetsu=t},expression:"shisetsu"}}),o("v-radio-group",{attrs:{row:""},model:{value:e.selectshikuchoson,callback:function(t){e.selectshikuchoson=t},expression:"selectshikuchoson"}},e._l(e.shikuchosons,(function(e){return o("v-radio",{key:e.shikuchosonName,attrs:{value:e,label:e.shikuchosonName}})})),1),o("v-radio-group",{directives:[{name:"show",rawName:"v-show",value:e.selectshikuchoson,expression:"selectshikuchoson"}],attrs:{row:""},model:{value:e.selectKoaza,callback:function(t){e.selectKoaza=t},expression:"selectKoaza"}},e._l(e.selectshikuchoson.koazas?e.selectshikuchoson.koazas:[],(function(e){return o("v-radio",{key:e.koazaName,attrs:{value:e,label:e.koazaName}})})),1),o("v-radio-group",{directives:[{name:"show",rawName:"v-show",value:e.selectKoaza,expression:"selectKoaza"}],attrs:{row:""},model:{value:e.selectChoume,callback:function(t){e.selectChoume=t},expression:"selectChoume"}},e._l(e.selectKoaza&&e.selectKoaza.maxChoume?e.selectKoaza.maxChoume:0,(function(e){return o("v-radio",{key:e,attrs:{value:String(e),label:String(e)+"丁目"}})})),1),o("div",{directives:[{name:"show",rawName:"v-show",value:e.selectChoume||e.selectKoaza&&0==e.selectKoaza.maxChoume,expression:"selectChoume || (selectKoaza && selectKoaza.maxChoume==0)"}]},[o("v-text-field",{attrs:{label:"番地",rules:e.banchiRule,required:""},model:{value:e.banchi,callback:function(t){e.banchi=t},expression:"banchi"}}),o("v-container",{attrs:{"justify-center":""}},e._l(e.buttons,(function(button){return o("v-row",{key:button[0],staticClass:"ma-0 pa-0 justify-center"},e._l(button,(function(t){return o("v-btn",{key:t,staticClass:"ma-2",attrs:{elevation:"2"},on:{click:function(o){return e.inputButton(t)}}},[e._v(e._s(t))])})),1)})),1)],1)],1),o("p",[e._v(e._s(e.zyusyo))]),o("v-btn",{attrs:{block:""},on:{click:e.save}},[e._v("保存")])],1)],1),o("v-card",{staticClass:"mx-auto my-5",attrs:{outlined:""}},[o("v-card-title",[e._v("入力データ操作")]),o("v-card-actions",[o("v-btn",{attrs:{block:""},on:{click:e.openData}},[e._v("データを見る")])],1),[o("v-card-text",[o("v-simple-table",[o("thead",[o("tr",[o("th",[e._v("施設・建物名")]),o("th",[e._v("住所")])])]),e._l(e.myCat,(function(t){return o("tbody",{key:t},[o("tr",[o("td",[e._v(e._s(t.split(",")[0]))]),o("td",[e._v(e._s(t.split(",")[1]))])])])}))],2)],1),o("v-card-actions",[o("v-btn",{attrs:{block:""},on:{click:e.closeData}},[e._v("閉じる")])],1)],o("v-card-actions",[o("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,c=t.attrs;return[o("v-btn",e._g(e._b({attrs:{block:""},on:{click:e.downloadReady}},"v-btn",c,!1),n),[e._v("ダウンロードする")])]}},{key:"default",fn:function(dialog){return[o("v-card",[o("v-card-title",[e._v("ダウンロードの準備ができました")]),o("v-card-actions",[o("v-btn",{attrs:{text:"",href:e.downloadUrl,block:""}},[e._v("ダウンロード")])],1),o("v-card-actions",{staticClass:"justify-end"},[o("v-btn",{attrs:{text:""},on:{click:function(e){dialog.value=!1}}},[e._v("Close")])],1)],1)]}}])})],1)],2),o("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[o("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[e._v("閉じる")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("保存しました")])],1)}),[],!1,null,null,null);t.default=component.exports;r()(component,{VBtn:k.a,VCard:v.a,VCardActions:d.a,VCardText:d.b,VCardTitle:d.c,VContainer:z.a,VDialog:C.a,VDivider:x.a,VForm:f.a,VRadio:N.a,VRadioGroup:y.a,VRow:_.a,VSelect:w.a,VSimpleTable:K.a,VSnackbar:V.a,VTextField:S.a})}}]);
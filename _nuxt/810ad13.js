(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{544:function(t,e,o){"use strict";o.r(e);o(24),o(35),o(296),o(66),o(73),o(43),o(476),o(83),o(30),o(3),o(46),o(48),o(477),o(292);var n=o(1),c=[{shikuchosonName:"武蔵野市",koazas:[{koazaName:"吉祥寺本町",maxChoume:4},{koazaName:"吉祥寺北町",maxChoume:5},{koazaName:"吉祥寺東町",maxChoume:4},{koazaName:"吉祥寺南町",maxChoume:5},{koazaName:"御殿山",maxChoume:2},{koazaName:"中町",maxChoume:3},{koazaName:"西久保",maxChoume:3},{koazaName:"緑町",maxChoume:3}]},{shikuchosonName:"練馬区",koazas:[{koazaName:"立野町",maxChoume:0},{koazaName:"関町南",maxChoume:4},{koazaName:"関町北",maxChoume:5},{koazaName:"関町東",maxChoume:2},{koazaName:"上石神井南町",maxChoume:0},{koazaName:"上石神井",maxChoume:4}]},{shikuchosonName:"西東京市",koazas:[{koazaName:"東伏見",maxChoume:6},{koazaName:"富士見町",maxChoume:6},{koazaName:"柳沢",maxChoume:6},{koazaName:"関町東",maxChoume:2},{koazaName:"保谷町",maxChoume:6}]},{shikuchosonName:"三鷹市",koazas:[{koazaName:"井の頭",maxChoume:5},{koazaName:"下連雀",maxChoume:9},{koazaName:"上連雀",maxChoume:9},{koazaName:"牟礼",maxChoume:7}]},{shikuchosonName:"杉並区",koazas:[{koazaName:"西荻北",maxChoume:5},{koazaName:"西荻南",maxChoume:4},{koazaName:"善福寺",maxChoume:4},{koazaName:"上井草",maxChoume:4},{koazaName:"松庵",maxChoume:5},{koazaName:"久我山",maxChoume:5}]}],l=n.a.extend({name:"IndexPage",data:function(){return{chizuShikuchoson:"",chizuYear:"",chizuPage:"",leftOrRight:!1,shisetsu:"",shikuchosons:c,selectshikuchoson:{},selectKoaza:{},selectChoume:"",banchi:"",banchiRule:[function(t){return/^(\d+(-\d+)*)*$/.test(t)||"Error"}],buttons:[[7,8,9],[4,5,6],[1,2,3],["-",0,"del"]],myCat:[],showData:!1,sortDataRiverse:!0,editDataName:"",editDataAddress:"",snackbar:!1,snackbarText:"",downloadUrl:"",fileName:"addressData.csv",deleteFlag:!1}},computed:{zyusyo:function(){return"".concat(this.selectshikuchoson&&this.selectshikuchoson.shikuchosonName?this.selectshikuchoson.shikuchosonName:"").concat(this.selectKoaza&&this.selectKoaza.koazaName?this.selectKoaza.koazaName:"").concat(this.selectChoume?this.selectChoume+"丁目":"").concat(this.banchi)},chizuData:function(){return this.chizuShikuchoson+"("+this.chizuYear+"）p."+this.chizuPage+(this.leftOrRight?"右":"左")},myCatShowData:function(){var t=this;return this.myCat.map((function(t,i){var e=t.split(",");return{index:i,name:e[0],address:e[1]}})).sort((function(a,b){return t.sortDataRiverse?-a.index+b.index:a.index-b.index}))}},mounted:function(){this.updateMyCat()},methods:{inputButton:function(t){"del"===t?this.banchi=this.banchi.slice(0,-1):"-"===t?""!==this.banchi&&"-"!==this.banchi.at(-1)&&(this.banchi+=t):this.banchi+=t},updateMyCat:function(){var t=localStorage.getItem("myCat");this.myCat=null===t?[]:t.split("\n")},save:function(){if(this.zyusyo){this.deleteFlag=!1,this.updateMyCat();try{localStorage.setItem("myCat",this.myCat.join("\n")+"\n"+this.shisetsu+","+this.zyusyo+","+this.chizuData)}catch(t){alert(t)}this.reset(),this.snackbar=!0,this.snackbarText="保存しました"}},saveEdit:function(){if(this.editDataAddress){this.deleteFlag=!1,this.updateMyCat();try{localStorage.setItem("myCat",this.myCat.join("\n")+"\n"+this.editDataName+","+this.editDataAddress+","+this.chizuData)}catch(t){alert(t)}this.editDataName="",this.editDataAddress="",this.updateMyCat(),this.snackbar=!0,this.snackbarText="保存しました"}},openData:function(){this.updateMyCat(),this.showData=!this.showData},closeData:function(){this.showData=!1},edit:function(t){this.editDataName=t.name,this.editDataAddress=t.address},reset:function(){this.shisetsu="",this.banchi=""},downloadReady:function(){var t=localStorage.getItem("myCat");t||(t=""),this.fileName="addressData".concat((new Date).toISOString(),".csv"),this.downloadUrl=URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}))},deleteData:function(){if(!this.deleteFlag)return!1;localStorage.removeItem("myCat"),this.updateMyCat(),this.deleteFlag=!1,this.snackbar=!0,this.snackbarText="データ削除しました"}}}),r=o(106),h=o(158),m=o.n(h),d=o(285),v=o(447),k=o(443),f=o(439),x=o(534),z=o(452),C=o(536),N=o(537),y=o(538),w=o(539),_=o(543),D=o(540),S=o(541),R=o(542),V=o(525),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[o("v-card-title",[t._v("住所入力")]),o("v-card-text",[o("v-form",[o("v-select",{attrs:{label:"地図市区町村",items:t.shikuchosons.map((function(t){return t.shikuchosonName}))},model:{value:t.chizuShikuchoson,callback:function(e){t.chizuShikuchoson=e},expression:"chizuShikuchoson"}}),o("v-text-field",{attrs:{label:"地図発行年"},model:{value:t.chizuYear,callback:function(e){t.chizuYear=e},expression:"chizuYear"}}),o("v-text-field",{attrs:{label:"地図ページ番号"},model:{value:t.chizuPage,callback:function(e){t.chizuPage=e},expression:"chizuPage"}}),o("v-switch",{attrs:{label:"左右",dense:""},model:{value:t.leftOrRight,callback:function(e){t.leftOrRight=e},expression:"leftOrRight"}}),o("v-divider"),o("v-radio-group",{attrs:{row:"",dense:""},model:{value:t.selectshikuchoson,callback:function(e){t.selectshikuchoson=e},expression:"selectshikuchoson"}},t._l(t.shikuchosons,(function(t){return o("v-radio",{key:t.shikuchosonName,attrs:{value:t,label:t.shikuchosonName}})})),1),o("v-radio-group",{directives:[{name:"show",rawName:"v-show",value:t.selectshikuchoson,expression:"selectshikuchoson"}],attrs:{row:"",dense:""},model:{value:t.selectKoaza,callback:function(e){t.selectKoaza=e},expression:"selectKoaza"}},t._l(t.selectshikuchoson.koazas?t.selectshikuchoson.koazas:[],(function(t){return o("v-radio",{key:t.koazaName,attrs:{value:t,label:t.koazaName}})})),1),o("v-radio-group",{directives:[{name:"show",rawName:"v-show",value:t.selectKoaza,expression:"selectKoaza"}],attrs:{row:"",dense:""},model:{value:t.selectChoume,callback:function(e){t.selectChoume=e},expression:"selectChoume"}},t._l(t.selectKoaza&&t.selectKoaza.maxChoume?t.selectKoaza.maxChoume:0,(function(t){return o("v-radio",{key:t,attrs:{dense:"",value:String(t),label:String(t)+"丁目"}})})),1),o("v-divider",{staticClass:"mt-3 mb-8"}),o("v-text-field",{attrs:{label:"施設・建物名",dense:""},model:{value:t.shisetsu,callback:function(e){t.shisetsu=e},expression:"shisetsu"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.selectChoume||t.selectKoaza&&0==t.selectKoaza.maxChoume,expression:"selectChoume || (selectKoaza && selectKoaza.maxChoume==0)"}]},[o("v-text-field",{attrs:{dense:"",label:"番地",rules:t.banchiRule,required:""},model:{value:t.banchi,callback:function(e){t.banchi=e},expression:"banchi"}}),o("v-container",{attrs:{"justify-center":""}},t._l(t.buttons,(function(button){return o("v-row",{key:button[0],staticClass:"ma-0 pa-0 justify-center"},t._l(button,(function(e){return o("v-btn",{key:e,staticClass:"ma-2",attrs:{elevation:"2"},on:{click:function(o){return t.inputButton(e)}}},[t._v(t._s(e))])})),1)})),1)],1)],1),o("p",[t._v(t._s(t.zyusyo))]),o("v-btn",{attrs:{block:""},on:{click:t.save}},[t._v("保存")])],1)],1),o("v-card",{staticClass:"mx-auto my-5",attrs:{outlined:""}},[o("v-card-title",[t._v("入力データ操作")]),o("v-card-actions",[o("v-btn",{attrs:{block:""},on:{click:t.openData}},[t.showData?o("span",[t._v("閉じる")]):o("span",[t._v("データを見る")])])],1),t.showData?[o("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[o("v-card-text",[o("v-row",{staticClass:"ma-0 pa-0 justify-center"},[o("v-btn",{on:{click:function(e){t.sortDataRiverse=!t.sortDataRiverse}}},[t._v("並び替え")])],1),o("v-simple-table",[o("thead",[o("tr",[o("th",[t._v("施設・建物名")]),o("th",[t._v("住所")])])]),t._l(t.myCatShowData,(function(e){return o("tbody",t._g(t._b({key:e.index,on:{click:function(o){return t.edit(e)}}},"tbody",c,!1),n),[o("tr",[o("td",[t._v(t._s(e.name))]),o("td",[t._v(t._s(e.address))])])])}))],2)],1)]}},{key:"default",fn:function(dialog){return[o("v-card",[o("v-card-title",[t._v("データを編集する")]),o("v-card-text",[o("v-text-field",{attrs:{label:"住所",dense:""},model:{value:t.editDataAddress,callback:function(e){t.editDataAddress=e},expression:"editDataAddress"}}),o("v-text-field",{attrs:{label:"施設・建物名",dense:""},model:{value:t.editDataName,callback:function(e){t.editDataName=e},expression:"editDataName"}})],1),o("v-card-actions",{staticClass:"justify-end"},[o("v-btn",{attrs:{text:""},on:{click:function(e){t.saveEdit(),dialog.value=!1}}},[t._v("保存する")])],1)],1)]}}],null,!1,3213917400)}),o("v-card-actions",[o("v-btn",{attrs:{block:""},on:{click:t.closeData}},[t._v("閉じる")])],1)]:t._e(),o("v-card-actions",[o("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[o("v-btn",t._g(t._b({attrs:{block:""},on:{click:t.downloadReady}},"v-btn",c,!1),n),[t._v("ダウンロードする")])]}},{key:"default",fn:function(dialog){return[o("v-card",[o("v-card-title",[t._v("ダウンロードの準備ができました")]),o("v-card-actions",[o("v-btn",{attrs:{text:"",href:t.downloadUrl,download:t.fileName,block:""},on:{click:function(e){t.deleteFlag=!0}}},[t._v("ダウンロード")])],1),o("v-card-actions",{staticClass:"justify-end"},[o("v-btn",{attrs:{text:""},on:{click:function(t){dialog.value=!1}}},[t._v("閉じる")])],1)],1)]}}])})],1),o("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:t.deleteFlag,expression:"deleteFlag"}]},[o("v-btn",{attrs:{block:""},on:{click:t.deleteData}},[t._v("データを削除する")])],1)],2),o("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[o("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("閉じる")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.snackbarText))])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:d.a,VCard:v.a,VCardActions:k.a,VCardText:k.b,VCardTitle:k.c,VContainer:f.a,VDialog:x.a,VDivider:z.a,VForm:C.a,VRadio:N.a,VRadioGroup:y.a,VRow:w.a,VSelect:_.a,VSimpleTable:D.a,VSnackbar:S.a,VSwitch:R.a,VTextField:V.a})}}]);
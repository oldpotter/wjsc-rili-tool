webpackJsonp([1],{"9M+g":function(t,e){},Jmt5:function(t,e){},MXP7:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("/5sW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(t){n("gsu9")},null,null).exports,i=n("/ocq"),r=n("PJh5"),l=n.n(r),c=n("SBsU"),d=n.n(c),u={name:"Home",data:function(){return{qrPath:"/static/pic/qr.jpeg",logoPath:"/static/pic/logo1.png",canDownload:!1,value:50,photo:null,selected:"brightness",options:[{value:"brightness",text:"亮度",num:50},{value:"contrast",text:"对比度",num:50}],timeoutId:null,loading:!1}},mounted:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1),s=t.width,a=t.height;t.width=s*n,t.height=a*n,t.style.width=s+"px",t.style.height=a+"px",e.scale(n,n),this.drawRound(e),this.drawLogo(e)},methods:{onSelectChanged:function(t){this.value=this.options.filter(function(e){return e.value===t})[0].num},change:function(){var t=this;this.timeoutId&&(clearTimeout(this.timeoutId),this.loading=!1),this.loading=!0,this.timeoutId=setTimeout(function(){d.a.read(t.photo.src).then(function(e){var n=t.value/100-.5;"brightness"===t.selected?e.brightness(n).getBase64Async(d.a.MIME_PNG).then(function(e){t.photo.src=e}):e.contrast(n).getBase64Async(d.a.MIME_PNG).then(function(e){t.photo.src=e}),t.loading=!1,t.options.filter(function(e){return e.value===t.selected})[0].num=t.value}).catch(function(e){console.error(e),t.loading=!1})},500)},download:function(){var t=this,e=document.getElementById("canvas").toDataURL("image/jpg"),n=document.getElementById("canvas").getContext("2d");n.clearRect(0,0,300,300),n.fillStyle="#ffffff",n.fillRect(0,0,300,300),n.fill();var s=new Image;s.onload=function(){var e=t.getCanvasInfo(s,300,300),a=e.dx,o=e.dy,i=e.dWidth,r=e.dHeight;n.drawImage(s,-a,-o,i,r);var c=document.getElementById("a");c.href=document.getElementById("canvas").toDataURL("image/png"),c.download=l()().unix()+".png",c.click()},s.src=e},drawBack:function(t){t.fillStyle="#ffffff",t.fillRect(0,0,300,300)},drawRound:function(t){t.fillStyle="#ececec",t.arc(150,145,130,0,360),t.fill()},drawLogo:function(t){t.globalCompositeOperation="source-over";var e=new Image;e.onload=function(){t.drawImage(e,250,250,40,40)},e.src=this.qrPath;var n=new Image;n.onload=function(){t.drawImage(n,10,260,n.width/14,n.height/14)},n.src=this.logoPath},open:function(){document.getElementById("takepicture").click()},setImagePreview:function(t){var e=(window.URL||window.webkitURL).createObjectURL(t.target.files[0]);this.reDrawPhoto(e)},reDrawPhoto:function(t){var e=this;this.photo=new Image,this.photo.onload=function(){var t=document.getElementById("canvas").getContext("2d");t.clearRect(0,0,300,300),e.drawRound(t),t.globalCompositeOperation="source-atop";var n=e.getCanvasInfo(e.photo,300,300),s=n.dx,a=n.dy,o=n.dWidth,i=n.dHeight;t.drawImage(e.photo,-s,-a,o,i),e.drawLogo(t),e.canDownload=!0},this.photo.src=t},getCanvasInfo:function(t,e,n){var s=t.width,a=t.height,o=0,i=0;return s>a?(i=n,(o=s/(a/n))<e&&(o=e,i=a/(s/e))):(o=e,(i=a/(s/e))<n&&(i=n,o=s/(a/n))),{dx:(o-e)/2,dy:(i-n)/2,dWidth:o,dHeight:i}}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("无境书茶2019日历工具")]),t._v(" "),n("canvas",{attrs:{id:"canvas",width:"300",height:"300"}}),t._v(" "),n("div",{staticStyle:{position:"fixed",top:"48vh",left:"48vw"},style:t.loading?"display: block;":"display: none;"},[n("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1),t._v(" "),n("div",{staticStyle:{padding:"10vw"}},[n("b-button",{attrs:{disabled:!t.canDownload,block:"",variant:"success"},on:{click:t.download}},[t._v("下载图片")]),t._v(" "),n("b-button",{attrs:{block:"",variant:"primary"},on:{click:t.open}},[t._v("打开相机")]),t._v(" "),n("input",{staticStyle:{display:"none"},attrs:{id:"takepicture",type:"file",accept:"image/*"},on:{change:t.setImagePreview}}),t._v(" "),n("a",{staticStyle:{display:"none"},attrs:{id:"a"}}),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"},style:t.canDownload?"display: block":"display: none"},[n("b-form-select",{attrs:{options:t.options},on:{change:t.onSelectChanged},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("vue-slider",{staticStyle:{"margin-top":"20px"},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)])},staticRenderFns:[]};var h=n("VU/8")(u,j,!1,function(t){n("MXP7")},"data-v-0a963675",null).exports;s.default.use(i.a);var g=new i.a({routes:[{path:"/",name:"Home",component:h}],mode:"history"}),f=n("e6fC"),m=n.n(f),v=(n("Jmt5"),n("9M+g"),n("lCKi")),p=n.n(v);n("n1Sy");s.default.config.productionTip=!1,s.default.use(m.a),s.default.component("VueSlider",p.a),new s.default({el:"#app",router:g,render:function(t){return t(o)}})},gsu9:function(t,e){},n1Sy:function(t,e){},uslO:function(t,e,n){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return n(o(t))}function o(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.1586359f0c38e1ae581c.js.map
webpackJsonp([1],{"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("/5sW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},a,!1,function(t){s("gsu9")},null,null).exports,r=s("/ocq"),i=s("PJh5"),c=s.n(i),l=s("SBsU"),j=s.n(l),u={name:"Home",data:function(){return{qrPath:"/static/pic/qr.jpeg",logoPath:"/static/pic/logo.png",canDownload:!1,value:50,photo:null,selected:"brightness",options:[{value:"brightness",text:"亮度"},{value:"contrast",text:"对比度"}],timeoutId:null}},mounted:function(){},methods:{change:function(){var t=this;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){j.a.read(t.photo.src).then(function(e){var s=t.value/100-.5;"brightness"===t.selected?e.brightness(s).getBase64Async(j.a.MIME_PNG).then(function(e){t.photo.src=e}):e.contrast(s).getBase64Async(j.a.MIME_PNG).then(function(e){t.photo.src=e})}).catch(function(t){console.error(t)})},500)},download:function(){var t=this,e=document.getElementById("canvas").toDataURL("image/jpg"),s=document.getElementById("canvas").getContext("2d");s.clearRect(0,0,300,300),s.fillStyle="#ffffff",s.fillRect(0,0,300,300),s.fill();var n=new Image;n.onload=function(){var e=t.getCanvasInfo(n,300,300),a=e.dx,o=e.dy,r=e.dWidth,i=e.dHeight;s.drawImage(n,-a,-o,r,i);var l=document.getElementById("a");l.href=document.getElementById("canvas").toDataURL("image/png"),l.download=c()().unix()+".png",l.click()},n.src=e},drawBack:function(t){t.fillStyle="#ffffff",t.fillRect(0,0,300,300)},drawRound:function(t){t.fillStyle="#ececec",t.arc(150,145,130,0,360),t.fill()},drawLogo:function(t){t.globalCompositeOperation="source-over";var e=new Image;e.onload=function(){t.drawImage(e,250,250,40,40)},e.src=this.qrPath;var s=new Image;s.onload=function(){t.drawImage(s,10,260,s.width/50,s.height/50)},s.src=this.logoPath},open:function(){document.getElementById("takepicture").click()},setImagePreview:function(t){var e=(window.URL||window.webkitURL).createObjectURL(t.target.files[0]);this.reDrawPhoto(e)},reDrawPhoto:function(t){var e=this;this.photo=new Image,this.photo.onload=function(){var t=document.getElementById("canvas").getContext("2d");t.clearRect(0,0,300,300),e.drawRound(t),t.globalCompositeOperation="source-atop";var s=e.getCanvasInfo(e.photo,300,300),n=s.dx,a=s.dy,o=s.dWidth,r=s.dHeight;t.drawImage(e.photo,-n,-a,o,r),e.drawLogo(t),e.canDownload=!0},this.photo.src=t},getCanvasInfo:function(t,e,s){var n=t.width,a=t.height,o=0,r=0;return n>a?(r=s,(o=n/(a/s))<e&&(o=e,r=a/(n/e))):(o=e,(r=a/(n/e))<s&&(r=s,o=n/(a/s))),{dx:(o-e)/2,dy:(r-s)/2,dWidth:o,dHeight:r}}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",[t._v("无境书茶2019日历工具")]),t._v(" "),s("canvas",{attrs:{id:"canvas",width:"300",height:"300"}}),t._v(" "),s("div",{staticStyle:{padding:"10vw"}},[s("b-button",{attrs:{disabled:!t.canDownload,block:"",variant:"success"},on:{click:t.download}},[t._v("下载图片")]),t._v(" "),s("b-button",{attrs:{block:"",variant:"primary"},on:{click:t.open}},[t._v("打开相机")]),t._v(" "),s("input",{staticStyle:{display:"none"},attrs:{id:"takepicture",type:"file",accept:"image/*"},on:{change:t.setImagePreview}}),t._v(" "),s("a",{staticStyle:{display:"none"},attrs:{id:"a"}}),t._v(" "),s("div",{staticStyle:{"margin-top":"10px"},style:t.canDownload?"display: block":"display: none"},[s("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),s("vue-slider",{staticStyle:{"margin-top":"20px"},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)])},staticRenderFns:[]};var h=s("VU/8")(u,d,!1,function(t){s("jPky")},"data-v-65d11168",null).exports;n.default.use(r.a);var f=new r.a({routes:[{path:"/",name:"Home",component:h}],mode:"history"}),m=s("e6fC"),g=s.n(m),v=(s("Jmt5"),s("9M+g"),s("lCKi")),p=s.n(v);s("n1Sy");n.default.config.productionTip=!1,n.default.use(g.a),n.default.component("VueSlider",p.a),new n.default({el:"#app",router:f,render:function(t){return t(o)}})},gsu9:function(t,e){},jPky:function(t,e){},n1Sy:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(o(t))}function o(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.b34e9d1835603767b8e6.js.map
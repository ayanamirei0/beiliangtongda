webpackJsonp([13],{"02Xm":function(A,n,t){n=A.exports=t("yGwj")(!0);var a=t("oTnk"),i=a(t("baaQ")),r=a(t("XvMM"));n.push([A.i,"\n.warp[data-v-ae96a206] {\n  /*background: #f7f7f7;*/\n}\n.chairman_banner[data-v-ae96a206] {\n  background: url("+i+") no-repeat center top;\n  width: 100%;\n  background-size: cover;\n  height: 260px;\n  text-align: center;\n  padding-top: 180px;\n  -webkit-box-sizing: initial;\n}\n.chairman_banner img[data-v-ae96a206] {\n  width: 735px;\n  height: 166px;\n}\n.chairman_cont[data-v-ae96a206] {\n  width: 1024px;\n  margin: 0px auto;\n}\n.abt_ct[data-v-ae96a206] {\n  position: relative;\n  overflow: hidden;\n  height: 545px;\n  width: 100%;\n  margin: 80px 0px 130px;\n}\n.abt_ct p[data-v-ae96a206] {\n  background: url("+r+') no-repeat right top;\n  height: 476px;\n  position: absolute;\n  right: 0px;\n  width: 549px;\n  z-index: 2;\n}\n.abt_ct p span[data-v-ae96a206] {\n  position: absolute;\n  display: block;\n  font-size: 30px;\n  line-height: 80px;\n  text-align: center;\n  width: 180px;\n  margin: 20px 0px 0px 60px;\n  color: #c29b73;\n  z-index: 4;\n  background: #FFFFFF;\n}\n.abt_ct p span[data-v-ae96a206]:before {\n  content: "";\n  display: inline-block;\n  width: 124px;\n  height: 4px;\n  background: #C29B73;\n  position: absolute;\n  bottom: 0px;\n  right: 25px;\n}\n.abt_ct p b[data-v-ae96a206] {\n  display: inline-block;\n  widows: 300px;\n  height: 443px;\n  overflow: hidden;\n  position: absolute;\n  z-index: 3;\n  right: 33px;\n  top: 0px;\n}\n.abt_ct p b img[data-v-ae96a206] {\n  -webkit-transition: 0.3s all ease;\n  -o-transition: 0.3s all ease;\n  transition: 0.3s all ease;\n  width: 100%;\n  height: 100%;\n}\n.abt_ct p img[data-v-ae96a206]:hover {\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.abt_ct ul[data-v-ae96a206] {\n  width: 617px;\n  float: left;\n  font-family: PingFangSC;\n  color: #666666;\n  position: absolute;\n  top: 112px;\n  z-index: 3;\n}\n.abt_ct ul li[data-v-ae96a206] {\n  line-height: 24px;\n  margin-top: 35px;\n  font-size: 14px;\n}\n',"",{version:3,sources:["/Users/maimaiti/Desktop/pc_NorthOfficial/src/pages/aboutUs/chairman.vue","chairman.vue"],names:[],mappings:";AA0DA;EACE,uBAAA;ACxDF;AD0DA;EACE,8DAAA;EAEA,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,2BAAA;ACzDF;AD2DA;EACE,YAAA;EACA,aAAA;ACzDF;AD4DA;EACE,aAAA;EACA,gBAAA;AC1DF;AD4DA;EACE,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;AC1DF;AD4DA;EACE,6DAAA;EAEA,aAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,UAAA;AC3DF;AD6DA;EACC,kBAAA;EACC,cAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,UAAA;EACA,mBAAA;AC3DF;AD6DA;EACC,WAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;AC3DD;AD6DA;EACC,qBAAA;EACA,aAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,QAAA;AC3DD;AD6DA;EACC,iCAAA;EAAA,4BAAA;EAAA,yBAAA;EACA,WAAA;EACA,YAAA;ACzDD;AD2DA;EAEE,6BAAA;MAAA,yBAAA;UAAA,qBAAA;ACxDF;AD0DA;EACE,YAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;ACxDF;AD0DA;EACE,iBAAA;EACA,gBAAA;EACA,eAAA;ACxDF",file:"chairman.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.warp {\r\n  /*background: #f7f7f7;*/\r\n}\r\n.chairman_banner {\r\n  background: url("../../assets/images/about/intro_banner.png") no-repeat center\r\n    top;\r\n  width: 100%;\r\n  background-size: cover;\r\n  height: 260px;\r\n  text-align: center;\r\n  padding-top: 180px;\r\n  -webkit-box-sizing: initial;\r\n}\r\n.chairman_banner img {\r\n  width: 735px;\r\n  height: 166px;\r\n}\r\n\r\n.chairman_cont {\r\n  width: 1024px;\r\n  margin: 0px auto;\r\n}\r\n.abt_ct {\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 545px;\r\n  width: 100%;\r\n  margin: 80px 0px 130px;\r\n}\r\n.abt_ct p {\r\n  background: url("../../assets/images/about/chairman_bg.png") no-repeat right\r\n    top;\r\n  height: 476px;\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 549px;\r\n  z-index: 2;\r\n}\r\n.abt_ct p span {\r\n\tposition: absolute;\r\n  display: block;\r\n  font-size: 30px;\r\n  line-height: 80px;\r\n  text-align: center;\r\n  width: 180px;\r\n  margin: 20px 0px 0px 60px;\r\n  color: #c29b73;\r\n  z-index: 4;\r\n  background: #FFFFFF;\r\n}\r\n.abt_ct p span:before{\r\n\tcontent: "";\r\n\tdisplay: inline-block;\r\n\twidth: 124px;\r\n\theight: 4px;\r\n\tbackground: #C29B73;\r\n\tposition: absolute;\r\n\tbottom: 0px;\r\n\tright: 25px;\r\n}\r\n.abt_ct p b{\r\n\tdisplay: inline-block;\r\n\twidows: 300px;\r\n\theight: 443px;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: 3;\r\n\tright: 33px;\r\n\ttop: 0px;\r\n}\r\n.abt_ct p b img{\r\n\ttransition: 0.3s all ease;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.abt_ct p img:hover{\r\n\t\r\n  transform: scale(1.1);\r\n}\r\n.abt_ct ul {\r\n  width: 617px;\r\n  float: left;\r\n  font-family: PingFangSC;\r\n  color: #666666;\r\n  position: absolute;\r\n  top: 112px;\r\n  z-index: 3;\r\n}\r\n.abt_ct ul li {\r\n  line-height: 24px;\r\n  margin-top: 35px;\r\n  font-size: 14px;\r\n}\r\n','\n.warp[data-v-ae96a206] {\n  /*background: #f7f7f7;*/\n}\n.chairman_banner[data-v-ae96a206] {\n  background: url("../../assets/images/about/intro_banner.png") no-repeat center top;\n  width: 100%;\n  background-size: cover;\n  height: 260px;\n  text-align: center;\n  padding-top: 180px;\n  -webkit-box-sizing: initial;\n}\n.chairman_banner img[data-v-ae96a206] {\n  width: 735px;\n  height: 166px;\n}\n.chairman_cont[data-v-ae96a206] {\n  width: 1024px;\n  margin: 0px auto;\n}\n.abt_ct[data-v-ae96a206] {\n  position: relative;\n  overflow: hidden;\n  height: 545px;\n  width: 100%;\n  margin: 80px 0px 130px;\n}\n.abt_ct p[data-v-ae96a206] {\n  background: url("../../assets/images/about/chairman_bg.png") no-repeat right top;\n  height: 476px;\n  position: absolute;\n  right: 0px;\n  width: 549px;\n  z-index: 2;\n}\n.abt_ct p span[data-v-ae96a206] {\n  position: absolute;\n  display: block;\n  font-size: 30px;\n  line-height: 80px;\n  text-align: center;\n  width: 180px;\n  margin: 20px 0px 0px 60px;\n  color: #c29b73;\n  z-index: 4;\n  background: #FFFFFF;\n}\n.abt_ct p span[data-v-ae96a206]:before {\n  content: "";\n  display: inline-block;\n  width: 124px;\n  height: 4px;\n  background: #C29B73;\n  position: absolute;\n  bottom: 0px;\n  right: 25px;\n}\n.abt_ct p b[data-v-ae96a206] {\n  display: inline-block;\n  widows: 300px;\n  height: 443px;\n  overflow: hidden;\n  position: absolute;\n  z-index: 3;\n  right: 33px;\n  top: 0px;\n}\n.abt_ct p b img[data-v-ae96a206] {\n  -webkit-transition: 0.3s all ease;\n  -o-transition: 0.3s all ease;\n  transition: 0.3s all ease;\n  width: 100%;\n  height: 100%;\n}\n.abt_ct p img[data-v-ae96a206]:hover {\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.abt_ct ul[data-v-ae96a206] {\n  width: 617px;\n  float: left;\n  font-family: PingFangSC;\n  color: #666666;\n  position: absolute;\n  top: 112px;\n  z-index: 3;\n}\n.abt_ct ul li[data-v-ae96a206] {\n  line-height: 24px;\n  margin-top: 35px;\n  font-size: 14px;\n}\n']}])},"9Ro7":function(A,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("teIl"),i=t("TVmP"),r={name:"login",components:{Header:a.a,Footer:i.a},data:function(){return{banner:t("TbKF"),chairman:["古往今来，足食都是治国安邦的首善大举。对于拥有14亿人口的中国来说，国家粮食安全战略具有特殊的重要意义。随着全球一体化，国际农产品贸易不断发展，我国也顺应潮流，通过粮食贸易来缓解粮食安全问题。","随着京津冀协同发展重大国家战略的实施，北粮集团在天津东疆港的大力支持下于2018年正式成立。北粮集团本着打通金融服务粮贸产业的各环节的目标，支持重点领域特色农产品贸易，延伸粮贸产业化链条，助力农业价值和效益提高，致力于成为国内一流大宗农产品服务商。","北粮集团是一个年轻、自信的企业，散发着激情与活力。我们用专业的眼光，以专心、专注的精神，发掘最好的区域、调配最好的资源。我们坚持“贾道儒行、以人为本”的企业核心价值观，秉承“团结、开拓、坚韧、务实”的企业精神，以诚信、公开、公平、透明为基石，始终坚持经济效益与社会效益双赢，不断提升履行社会责任的能力和水平，携手合作伙伴风雨同舟，创造共享价值。","人生在勤、勿可虚度！我们将始终与光明者同行，共创无疆大业。"],chairman_name:"郭立刚",currentIndex:4,navColor:"white"}},methods:{},mounted:function(){}},e=function(){var A=this,n=A.$createElement,t=A._self._c||n;return t("div",{staticClass:"warp"},[t("div",{staticClass:"header_content"},[t("Header",{attrs:{currentIndex:A.currentIndex,navColor:A.navColor}})],1),A._v(" "),t("div",{staticClass:"chairman_banner"},[t("img",{attrs:{src:A.banner}})]),A._v(" "),t("div",{staticClass:"chairman_cont"},[t("div",{staticClass:"abt_ct"},[t("ul",A._l(A.chairman,function(n,a){return t("li",{key:a},[A._v(A._s(n))])}),0),A._v(" "),t("p",[t("span",[A._v(A._s(A.chairman_name))]),A._v(" "),A._m(0)])])]),A._v(" "),t("Footer",{staticClass:"footer"})],1)},o=[function(){var A=this.$createElement,n=this._self._c||A;return n("b",[n("img",{attrs:{src:t("zRoB")}})])}];e._withStripped=!0;var g={render:e,staticRenderFns:o},p=g;var C=!1;var E=t("VU/8")(r,p,!1,function(A){C||t("J6nU")},"data-v-ae96a206",null);E.options.__file="src/pages/aboutUs/chairman.vue";n.default=E.exports},J6nU:function(A,n,t){var a=t("02Xm");"string"==typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);t("rjj0")("1e448154",a,!1,{})},TbKF:function(A,n,t){A.exports=t.p+"static/img/image3.1de02d2.png"},XvMM:function(A,n){A.exports="data:image/png;base64,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"},zRoB:function(A,n,t){A.exports=t.p+"static/img/chair_image3.06fb841.jpg"}});
//# sourceMappingURL=13.7b699ecb2c74cb3c4f4f.js.map
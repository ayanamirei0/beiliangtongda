webpackJsonp([27],{"6ko5":function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var n=this.$createElement;this._self._c;return this._m(0)},t=[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"faceScanSuccessWrap"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title"},[this._v("人脸识别登录")]),this._v(" "),e("div",{staticClass:"imgWrap"},[e("img",{attrs:{src:i("b/N6")}})])])])}];o._withStripped=!0;var r={render:o,staticRenderFns:t},a=r;var s=!1;var c=i("VU/8")({name:"FaceScanSuccess",mounted:function(){var n=this;this.$nextTick(function(){n.$router.replace("/home")})}},a,!1,function(n){s||i("Gh73")},"data-v-b14bb7fa",null);c.options.__file="src/components/login/FaceScanSuccess.vue";e.default=c.exports},Gh73:function(n,e,i){var o=i("dO97");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);i("rjj0")("2638b05e",o,!1,{})},"b/N6":function(n,e,i){n.exports=i.p+"static/img/success.5c232c6.png"},dO97:function(n,e,i){(n.exports=i("yGwj")(!0)).push([n.i,'\n@charset "UTF-8";\nbody[data-v-b14bb7fa] {\n  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;\n}\nli[data-v-b14bb7fa] {\n  list-style: none;\n}\na[data-v-b14bb7fa] {\n  text-decoration: none;\n  color: #333333;\n}\n.faceScanSuccessWrap[data-v-b14bb7fa] {\n  background: rgba(255, 255, 255, 0.85);\n}\n.faceScanSuccessWrap .content[data-v-b14bb7fa] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n}\n.faceScanSuccessWrap .content .title[data-v-b14bb7fa] {\n      -webkit-align-self: flex-start;\n          -ms-flex-item-align: start;\n              align-self: flex-start;\n      padding-bottom: 10px;\n      height: 20%;\n      font-size: 28px;\n      color: #333333;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n.faceScanSuccessWrap .content .imgWrap[data-v-b14bb7fa] {\n      padding-top: 30px;\n      text-align: center;\n}\n.faceScanSuccessWrap .content .imgWrap img[data-v-b14bb7fa] {\n        width: 80%;\n}\n',"",{version:3,sources:["FaceScanSuccess.vue","D:/puxin_projects/anqi_project/pc_NorthOfficial/src/common/style/mixin.scss","D:/puxin_projects/anqi_project/pc_NorthOfficial/src/components/login/FaceScanSuccess.vue"],names:[],mappings:";AAAA,gBAAA;ACaA;EACI,yHAAA;ADVJ;ACaA;EACI,gBAAA;ADXJ;ACcA;EACI,qBAAA;EACA,cAAA;ADZJ;AEcA;EACI,qCAAA;AFZJ;AEWA;IAGQ,oBAAA;IAAA,qBAAA;IAAA,oBAAA;IAAA,aAAA;IACA,4BAAA;IAAA,6BAAA;IAAA,8BAAA;QAAA,0BAAA;YAAA,sBAAA;IACA,yBAAA;IAAA,2BAAA;QAAA,sBAAA;YAAA,mBAAA;IACA,WAAA;AFDR;AELA;MAQY,8BAAA;UAAA,0BAAA;cAAA,sBAAA;MACA,oBAAA;MACA,WAAA;MACA,eAAA;MACA,cAAA;MACA,8BAAA;cAAA,sBAAA;AFGZ;AEhBA;MAgBY,iBAAA;MACA,kBAAA;AFGZ;AEpBA;QAmBgB,UAAA;AFIhB",file:"FaceScanSuccess.vue",sourcesContent:['@charset "UTF-8";\nbody {\n  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif; }\n\nli {\n  list-style: none; }\n\na {\n  text-decoration: none;\n  color: #333333; }\n\n.faceScanSuccessWrap {\n  background: rgba(255, 255, 255, 0.85); }\n  .faceScanSuccessWrap .content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%; }\n    .faceScanSuccessWrap .content .title {\n      align-self: flex-start;\n      padding-bottom: 10px;\n      height: 20%;\n      font-size: 28px;\n      color: #333333;\n      box-sizing: border-box; }\n    .faceScanSuccessWrap .content .imgWrap {\n      padding-top: 30px;\n      text-align: center; }\n      .faceScanSuccessWrap .content .imgWrap img {\n        width: 80%; }\n','// @import \'./base.scss\';\n$mainColor: #C29B73;\n$subGreenColor: #50A050;\n$subRedColor: #DB2A36;\n$titleColor: #333333;\n$textColor:#666666;\n$textWeakColor:#999999;\n$subTextColor:#eec0c0;\n$tipsColor:#cccccc;\n$lineColor: #ebebeb;\n$borderLineDisabledColor: #eee;\n$bgColor:#f8f8f8;\n$anitColor: #fff;\nbody {\n    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: #333333;\n}\n\n@mixin border-top-1px($color) {\n    &:before {\n        border-top: 1px solid $color;\n    }\n}\n\n@mixin border-right-1px($color) {\n    &:before {\n        border-right: 1px solid $color;\n    }\n}\n\n@mixin border-bottom-1px($color) {\n    &:before {\n        border-bottom: 1px solid $color;\n    }\n}\n\n@mixin border-left-1px($color) {\n    &:before {\n        border-left: 1px solid $color;\n    }\n}\n\n@mixin border-1px($color) {\n    position: relative;\n    &:after {\n        content: \'\';\n        pointer-events: none; //解决iphone上的点击无效Bug\n        position: absolute;\n        left: 0;\n        top: 0;\n        transform-origin: 0 0;\n        border: 1px solid $color;\n    }\n}\n\n//圆角\n@mixin borderRadius($radius) {\n    -webkit-border-radius: $radius;\n    -moz-border-radius: $radius;\n    -ms-border-radius: $radius;\n    -o-border-radius: $radius;\n    border-radius: $radius;\n}\n\n//1px底部边框\n@mixin border-1px($color) {\n    position: relative;\n    &:after {\n        display: block;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        border-top: 1px solid $color;\n        content: \'\';\n    }\n}\n\n//定位全屏\n@mixin allcover {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n\n//定位上下左右居中\n@mixin center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n//定位上下居中\n@mixin ct {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n//定位左右居中\n@mixin cl {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n//宽高\n@mixin wh($width, $height) {\n    width: $width;\n    height: $height;\n}\n\n//字体大小、行高、字体\n@mixin font($size, $line-height, $family: \'Microsoft YaHei\') {\n    font: #{$size}/#{$line-height} $family;\n}\n\n//字体大小，颜色\n@mixin sc($size, $color) {\n    font-size: $size;\n    color: $color;\n}\n\n@mixin boxSizing {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n//flex 布局和 子元素 对其方式\n@mixin fj($type: space-between) {\n    display: flex;\n    justify-content: $type;\n}\n\n@mixin ellipsis1 {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n@mixin ellipsis2($num) {\n    display: -webkit-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n    white-space: normal !important;\n    -webkit-line-clamp: $num;\n    /*! autoprefixer: off */\n    -webkit-box-orient: vertical;\n}','\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "../../common/style/mixin.scss";\n.faceScanSuccessWrap {\n    background: rgba(255, 255, 255, 0.85);\n    .content {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100%;\n        .title {\n            align-self: flex-start;\n            padding-bottom: 10px;\n            height: 20%;\n            font-size: 28px;\n            color: $titleColor;\n            box-sizing: border-box;\n        }\n        .imgWrap {\n            padding-top: 30px;\n            text-align: center;\n            img {\n                width: 80%;\n            }\n        }\n    }\n}\n\n']}])}});
//# sourceMappingURL=27.1fb6f244bb26771e641e.js.map
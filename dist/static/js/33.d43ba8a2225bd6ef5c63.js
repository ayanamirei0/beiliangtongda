webpackJsonp([33],{R8II:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{imgs:[],imgData:{accept:"image/jpeg, image/png, image/jpg, image/bmp"}}},methods:{add_img:function(e){new FileReader;var t=e.target.files[0],a=t.type,i=t.size;if(-1==this.imgData.accept.indexOf(a))return alert("请选择我们支持的图片格式！"),!1;if(i>3145728)return alert("请选择3M以内的图片！"),!1;var n=new FormData;n.append("file",t,t.name),console.log(n)}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.imgs.length>0?a("ul",{staticClass:"clearfix"},[e._l(e.imgs,function(e,t){return a("li",{key:t},[a("img",{attrs:{src:e}})])}),e._v(" "),e.imgs.length>=6?e._e():a("li",{staticStyle:{position:"relative"}},[a("input",{staticClass:"upload",attrs:{type:"file"},on:{change:e.add_img}})])],2):e._e()])};n._withStripped=!0;var s={render:n,staticRenderFns:[]},r=s;var l=!1;var c=a("VU/8")(i,r,!1,function(e){l||a("v5As")},"data-v-43133539",null);c.options.__file="src/pages/home/face.vue";t.default=c.exports},RZO6:function(e,t,a){(e.exports=a("yGwj")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"face.vue"}])},v5As:function(e,t,a){var i=a("RZO6");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("11268fdb",i,!1,{})}});
//# sourceMappingURL=33.d43ba8a2225bd6ef5c63.js.map
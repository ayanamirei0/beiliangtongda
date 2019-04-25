<template>
  <div class="warp">
    <div class="header_content">
      <Header :currentIndex="currentIndex" :navColor="navColor"></Header>
      <!-- <Slider :imgUrl="bannerList"></Slider> -->
    </div>
    <div class="prospect_banner"><img :src="prospect_banner"></div>
    <div class="prospect_cont">
        <div class="abt_ct">
        	<div class="prospect_ct1">
        		<div class="img_left"><p><img :src="prospect.ptimg1" class="img"></p></div>
        		<dl>
        			<dt><img src="../../assets/images/about/prospect_tit1.png"></dt>
        			<dd>
        				<h3>{{prospect.title}}<span></span></h3>
        				<p>
        					<span v-for="(item,index) in prospect.list1" :key="index">{{item}}</span>
        				</p>
        				<ul>
        					<li v-for="(item,index) in prospect.list2" :key="index">{{item}}</li>
        				</ul>
        			</dd>
        		</dl>
        	</div>
        	<div class="prospect_ct2">
        		<b class="cancelBtn_b1"><img src="../../assets/images/about/prospect_img5.jpg"></b>
        		<b class="cancelBtn_b2"><img src="../../assets/images/about/prospect_img6.jpg"></b>
        		<h3>{{prospect1.title}}</h3>
        		<p>{{prospect1.cont1}}</p>
        		<ul>
        			<li v-for="(item,index) in prospect1.list1" :key="index">{{item}}</li>
        		</ul>
        		<p class="ct_p">{{prospect1.cont2}}</p>
        		<ul>
        			<li v-for="(item,index) in prospect1.list2" :key="index">{{item}}</li>
        		</ul>
        	</div>
        	<div class="prospect_ct3">
        		<h2><img :src="prospect2.title_img"></h2>
        		<ul class="img_list">
        			<li><img src="../../assets/images/about/pt_image1.jpg"></li>
        			<li><img src="../../assets/images/about/pt_image2.jpg"></li>
        			<li><img src="../../assets/images/about/pt_image3.jpg"></li>
        			<li><img src="../../assets/images/about/pt_image4.jpg"></li>
        		</ul>
        		<h3>{{prospect2.title}}<span></span></h3>
        		<p>{{prospect2.cont}}</p>
        		<ul class="list_prospect_ct3">
        			<li v-for="(item,index) in prospect2.list" :key="index">{{item}}</li>
        		</ul>
        	</div>
        	<div class="prospect_ct4">
        		<p><img src="../../assets/images/about/prospect_img7.jpg"></p>
        		<dl>
        			<dd>
        				<h3>{{prospect3.title}}</h3>
        				<ul>
        					<li v-for="(item,index) in prospect3.list" :key="index">{{item}}</li>
        				</ul>
        			</dd>
        		</dl>
        	</div>
        	<div class="prospect_ct5">
        		<h2><img :src="prospect4.tiele_img"></h2>
        		<p>{{prospect4.cont}}</p>
        		<span><b><img class="img" :src="prospect4.img"></b></span>
        	</div>
        </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Header from "components/Header";
import Footer from "components/Footer";

 export default {
        name:'login',
        components: {
            Header,
            Footer
        },
        data() {
            return {
							currentIndex:4,
							navColor:"white",
            	prospect_banner:require("../../assets/images/about/image3.png"),
							prospect:{
								ptimg1:require("../../assets/images/about/prospect_tit11.jpg"),
								title:"建设新型流通业态，促进城乡消费便捷化。",
								list1:[
									"三年内粮贸交易量达到500万吨每年，粮食贸易金额超100亿。",
									"五年后，粮食贸易规模达到全国粮贸总规模的5%以上，成为国内最大的粮贸物流企业。",
									"并涉足粮贸进口业务，成为专业的国际粮贸大宗经营商。",
									"届时，固定资产投资规模总额超过30亿元，农业产业化完成基本搭建，全产业链可控制、可追溯。",
								],
								list2:[
									"•  发展农产品集散地、销地、产地批发市场，构建农产品产销一体化流通链条。",
									"•  稳妥开展兼并重组，向产业上下游延伸，推进农业产业链整合和价值链提升，深化 农村 一二三产业融合发展。",
									"•  试水电子商务产业园建设",
								]
							},
							prospect1:{
								title:"建设现代农业物流体系，落实区域发展战略。",
								cont1:"围绕促进农副产品、农业生产资料高效流通，依托交通枢纽、生产基地、中心城市和大型农产品集散地，构建全国骨干流通网络，建设一批辐射带动能力强的区域性和全国性农产品物流中心粮食等重要农产品仓储物流设施建设。",
								list1:[
									"•  航运船队的搭建----10-20艘杂货船",
									"•  陆运运粮车队的搭建----100辆运粮车",
									"•  仓储能力的建设----100万吨仓库能力",
									"•  农副产品、食品等领域冷链物流设施建设",
								],
								cont2:"认真落实国家区域发展战略和产业布局调整规划，发挥全国性物流节点城市和区域性物流节点城市的辐射带动作用，推动区域物流协调发展",
								list2:[
									"•  “一带一路”、京津冀、长江经济带",
									"•  港口、码头、铁路、机场、客货运站点以及重要口岸、保税区、自贸区",
									"•  逐步打造粮贸物流园区",
								]
							},
							prospect2:{
								title_img:require("../../assets/images/about/prospect_tit3.png"),
								img:require("../../assets/images/about/prospect_img4.png"),
								title:"建设农产品追溯体系和信息体系，保障食品安全流通",
								cont:"建设农产品质量检验检测中心、食用农产品、食品、药品、农资等重要产品流通追溯体系，发展全产业链食品安全保障技术、质量安全控制技术和安全溯源技术，建设安全环境、清洁生产、生态储运全覆盖的食品安全技术体系，实现质量安全可追溯。",
								list:[
									"•  建立农产品质量检验检测中心",
									"•  建立农产品价格中心、信息与技术服务中心等信息体系",
									"•  建立布局合理、功能齐全、安全卫生的全国性农产品市场网络，不断满足消费者需求，维护市场稳定，保障食品流通安全",
									"•  获得GAP （Good Agriculture Practice）证书",
								]
							},
            	prospect3:{
            		title:"海洋资源开发与保护及海洋旅游业务开展重点布局。",
            		list:[
            			"•  发展海洋牧场等现代海洋渔业船",
            			"•  发展海洋运输、港口物流、滨海旅游等现代海洋服务业",
            			"•  进行海域、海岸线、海岛等海洋生态资源保护性开发",
            			"•  锦州附近红海滩海洋旅游资源的开发利用、运营与保护",
            			"•  景区（景点）及配套基础设施的建设、改造和维护、景区（景点）的经营管理",
            		]
            	},
            	prospect4:{
            		tiele_img:require("../../assets/images/about/prospect_tit5.png"),
            		cont:"以市场为导向，以经济效益为中心，以粮食产业为重点，优化组合各种生产要素，实行区域化布局、专业化生产、规模化建设、系列化加工、社会化服务、企业化管理，形成一体化经营体系，使粮食产业走上自我发展、自我积累、自我约束、自我调节的良性发展轨道。",
            		img:require("../../assets/images/about/prospect_img8.jpg"),
            	}
            }
        },
        methods:{

        },
        mounted(){

        }
        
    }
</script>

<style lang="scss" scoped type="text/scss">
.prospect_ct1{
	width: 1000px;
	margin: 0px auto;
	overflow: hidden;
	font-family: PingFangSC;
}
.img_left{
	float: left;
	margin-top: 50px;
	width: 273px;
	background: url("../../assets/images/about/prospect_img1.png") no-repeat left top;
	padding: 20px 0px 0px 20px;
}
.img_left p{
	width: 252px;
	height: 328px;
	overflow: hidden;
}
.prospect_ct1 .img{
	transition: all 0.3s ease;
}
.prospect_ct1 .img:hover{
  transform: scale(1.1);
}

.prospect_ct4 p img,.prospect_ct5 b img,.prospect_ct3 ul.img_list li img,.prospect_ct2 b img{
		transition: 0.3s all ease;
}
.prospect_ct4 p img:hover,.prospect_ct5 b img:hover,.prospect_ct3 ul.img_list li img:hover,.prospect_ct2 b img:hover{
  transform: scale(1.1);
}


.prospect_ct1 dl{
	width: 700px;
	float: right;
}
.prospect_ct1 dl dt{
	width: 100%;
	display: block;
	float: left;
}
.prospect_ct1 dl dt img{
	display: inline-block;
	margin-left: 130px;
}
.prospect_ct1 dl dd{
	color: #666666;
}
.prospect_ct1 dl dd h3,.prospect_ct3 h3{
	font-size: 18px;
	margin: 50px 0px 20px;
	float: left;
	width: 100%;
	position: relative;
	height:38px;
	color: #333333;
	font-weight: normal;
}
.prospect_ct1 dl dd h3 span,.prospect_ct3 h3 span{
	display: inline-block;
	position: absolute;
	left: 0px;
	bottom: 0px;
	background: #C29B73;
	width: 82px;
	height: 4px;
}
.prospect_ct1 dl dd p,.prospect_ct1 dl dd ul li,
.prospect_ct2 p,.prospect_ct2 ul li,
.prospect_ct3 p,.prospect_ct3 ul.list_prospect_ct3 li,
.prospect_ct4 ul li,.prospect_ct5 p{
	line-height: 23px;
	font-size: 14px;
}
.ct_p{
	padding-right: 40px;
}
.prospect_ct1 dl dd p span{
	display: block;
	width: 100%;
}
.prospect_ct1 dl dd ul{
	width: 100%;
	margin-top: 25px;
}
.prospect_ct1 dl dd ul li{
	font-weight: normal;
}
.prospect_ct2{
	margin-top: 109px;
	overflow: hidden;
	background: url("../../assets/images/about/prospect_bg2.png") no-repeat center top;
	height: 563px;
	width: 508px;
	padding: 214px 314px 0px 378px;
	-webkit-box-sizing:initial;
	font-family: PingFangSC;
	color: #666666;
	position: relative;
}
.prospect_ct2 b{
	display: block;
	position: absolute;
	
}
.prospect_ct2 b.cancelBtn_b1{
	left: 115px;
	top: 215px;
	width: 232px;
	height: 268px;
	overflow: hidden;
}
.prospect_ct2 b.cancelBtn_b2{
	right: 126px;
	bottom: 56px;
	width: 218px;
	height: 233px;
	overflow: hidden;
}

.prospect_ct2 h3{
	font-size: 18px;
	height: 44px;
	line-height: 44px;
	color: #333333;
	font-weight: normal;
	margin-bottom: 20px;
}
.prospect_ct2 ul{
	margin: 25px 0px 104px;
}
.prospect_ct3{
	width:963px;
	margin: 0px auto;
	margin-top: 90px;
	overflow: hidden;
	-webkit-box-sizing:initial;
	font-family: PingFangSC;
	color: #666666;
}
.prospect_ct3 h2{
	text-align: center;
	margin-bottom: 50px;
}

.prospect_ct3 p,.prospect_ct3 ul{
	width: 770px;
}.prospect_ct3 ul.img_list{
	width: 963px;
	height: 188px;
}
.prospect_ct3 ul.img_list li{
	float: left;
	width: 233px;
	margin-right: 10px;
	overflow: hidden;
}
.prospect_ct3 ul.img_list li:nth-child(4){
	margin-right: 0px;
}
.prospect_ct3 p{
	margin: 23px 0px 30px;
}
.prospect_ct4{
	margin-top: 109px;
	overflow: hidden;
	background: url("../../assets/images/about/prospect_bg1.png") no-repeat center top;
	height: 262px;
	width: 508px;
	padding: 215px 250px 0px 466px;
	-webkit-box-sizing:initial;
	font-family: PingFangSC;
	color: #666666;
	position: relative;
}
.prospect_ct4 p{
	position: absolute;
	width: 294px;
	height: 320px;
	overflow: hidden;
	left: 124px;
	bottom: 79px;
}
.prospect_ct4 h3{
	font-size: 18px;
	height: 44px;
	line-height: 44px;
	color: #333333;
	font-weight: normal;
	margin-bottom: 20px;
}
.prospect_ct5{
	width: 963px;
	margin: 108px auto 0px;
	font-family: PingFangSC;
	color: #666666;
	overflow: hidden;
	position: relative;
	height: 452px;
}
.prospect_ct5 span{
	display: block;
	position: absolute;
	right: 0px;
	bottom: 0px;
	background: url("../../assets/images/about/prospect_img2.png") no-repeat center top;
	padding: 0px 20px 0px 0px;
}
.prospect_ct5 b{
	display: block;
	width: 410px;
	height: 298px;
	overflow: hidden;
}
.prospect_ct5 h2{
	text-align: center;
}
.prospect_ct5 p{
	float: left;
	width: 443px;
	margin-top: 92px;
}

.prospect_banner {
	background: url("../../assets/images/about/intro_banner.png") no-repeat center top;
	width: 100%;
	background-size: cover;
	height: 384px;
	text-align: center;
	padding-top: 216px;
	-webkit-box-sizing:initial;
}
.prospect_banner img{
	width: 919px;
	height: 211px;
}

.prospect_cont {
	width: 1200px;
	margin: 0px auto;
}
.abt_ct{
	overflow: hidden;
	width: 100%;
	margin: 70px 0px 120px;
}
.abt_ct p{
	font-family: PingFangSC;
}

</style>


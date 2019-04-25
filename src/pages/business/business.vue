<template>
  <div class="warp">
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>
      <!-- <Slider :imgUrl="bannerList"></Slider> -->
    </div>
    <div class="business_banner"></div>
    <div class="business_cont">
      <div class="abt_ct content">
        <div
          class="business_ct1"
          id="business1"
        >
          <h2 class="b_h2">
            商业模式
            <p>BUSINESS MODEL</p>
          </h2>
          <dl>
            <dt></dt>
            <dd>
            	<h2>北粮集团<span>North Grain Group</span></h2>
              <p>北粮集团以投控方式形成固定资产，以杠杆方式参与大宗粮贸，围绕重点区域开展业务战略布局…</p>
              <p>为打造粮贸投控企业的业务关系网赋能，在粮食贸易和北粮南运领域开发创新性金融服务模式，提升粮贸产业链价值，实现多方合作共赢。</p>
            </dd>
          </dl>
        </div>
        <Part></Part>
        <div
          class="business_ct3"
          id="business3"
        >
          <h2 class="b_h2">
            业务目标
            <p>BUSINESS OBJECTIVES</p>
          </h2>
          <dl>
            <dt></dt>
            <dd>
            	<h2>业务目标<span></span></h2>
              <p>三年内实现粮贸交易量500万吨/年，粮食贸易金额超100亿，逐步成为天津自贸区内粮食贸易物流龙头企业，及国内最大的粮贸民营企业。</p>
              <p>拓展粮贸进口业务，发展成为专业国际粮贸大宗经营商。致力于推进农业产业化发展，实现全产业链可控制、可追溯机制。</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";
import Part from "../home/content/business-part";
export default {
  name: "login",
  components: {
    Header,
    Footer,
    Part
  },
  data() {
    return {
      currentIndex: 1,
      navColor: "white"
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped type="text/scss">
.business_banner {
  background: url("../../assets/images/business/businessOverview_banner.jpg")
    no-repeat center top;
  width: 100%;
  background-size: cover;
  height: 315px;
  text-align: center;
  padding-top: 285px;
  -webkit-box-sizing: initial;
}
.business_banner img {
  width: 1082px;
  height: 211px;
}

.business_cont {
  width: 1200px;
  margin: 0px auto;
}
.abt_ct {
  width: 100%;
  margin: 80px 0px 130px;
}
.b_h2 {
  font-size: 48px;
  color: #333333;
  text-align: left;
  font-weight: normal;
  position: relative;
  margin-bottom: 80px;
  overflow: hidden;
}
.b_h2 p {
  width: 960px;
  border-bottom: 1px solid #dddddd;
  color: #cccccc;
  font-size: 24px;
  height: 33px;
  line-height: 24px;
  font-weight: normal;
  position: absolute;
  right: 20px;
  bottom: 14px;
  font-family: "宋体";
}
.business_ct1 dl {
  height: 560px;
  width: 1200px;
  -webkit-box-sizing: initial;
  color: #333333;
  position: relative;
}
.business_ct1 dl dt {
	position: absolute;
  background: url("../../assets/images/business/businessOverview_img1.jpg") no-repeat center center;
  background-size: 800px 560px;
  transition: 0.5s all ease;
  height: 560px;
  width: 795px;
}
.business_ct1 dl dt:after{
	content: "";
	display: inline-block;
	width: 20px;
	height: 180px;
	background: #C29B73;
	position: absolute;
	right: -20px;
}
.business_ct1 dl dt:hover{
	background-size: 880px 620px;
	
  /*transform: scale(1.1);*/
}

.business_ct1 dl dd {
  position: absolute;
  left: 720px;
  top: 50px;
  width: 424px;
  font-size: 18px;
}
.business_ct1 dl dd h2{
	font-size: 48px;
  width: 100%;
  line-height: 48px;
  margin-bottom: 100px;
}
.business_ct1 dl dd h2 span {
  display: inline-block;
  margin-top: 22px;
  width: 100%;
  font-size: 30px;
}
.business_ct1 dl dd p {
  line-height: 30px;
  margin-bottom: 20px;
  padding-left: 100px;
}
/*.business_ct2{
	overflow: hidden;
}
.business_ct2 h2{
	margin-top: 80px;
}
.business_ct2 ul li{
	width: 390px;
	float: left;
	margin-right: 15px;
	position: relative;
}
.business_ct2 ul li:nth-child(3){
	margin-right: 0px;
}
.business_ct2 ul li h3{
	position: absolute;
	width: 162px;
	height: 62px;
	line-height: 62px;
	text-align: center;
	color: #FFFFFF;
	font-size: 20px;
	left: 0px;
	top: -31px;
	background: #C29B73;
	font-weight: normal;
}
.business_ct2 ul li dl{
	position: absolute;
	padding: 34px;
	-webkit-box-sizing:initial;
	left: 0px;
	bottom: 0px;
	color: #FFFFFF;
	z-index: 3;
	    background: rgba(0, 0, 0, 0.5);
}
.business_ct2 ul li dl dt span{
	font-size: 24px;
	display: inline-block;
}
.business_ct2 ul li dl dt span:before{
	content: "";
	width: 10px;
	height: 10px;
	background: #FFFFFF;
	margin-right: 15px;
	display: inline-block;
}
.business_ct2 ul li dl dt p{
	line-height: 30px;
	font-size: 16px;
}*/
.business_ct3 {
  overflow: hidden;
}
.business_ct3 h2 {
  margin-top: 80px;
}
.business_ct3 dl {
	height: 560px;
  width: 1200px;
  -webkit-box-sizing: initial;
  color: #333333;
  position: relative;
}
.business_ct3 dl dt {
  background: url("../../assets/images/business/businessOverview_img5.jpg") no-repeat center center;
  background-size: 680px 560px;
  height:560px;
  width: 680px;
  position: absolute;
  right: 0px;
  top: 0px;
  transition:0.3s all ease;
}
.business_ct3 dl dt:after{
	content: "";
	display: inline-block;
	width: 20px;
	height: 166px;
	background: #C29B73;
	position: absolute;
	left: -20px;
}
.business_ct3 dl dt:hover{
	background-size: 748px 616px;
}
.business_ct3 dl dd {
  width: 362px;
  font-size: 18px;
  line-height: 30px;
  position: absolute;
}
.business_ct3 dl dd h2{
	width: 362px;
  font-size: 42px;
  height: 70px;
  line-height: 40px;
  position: relative;
  margin-bottom: 50px;
}
.business_ct3 dl dd h2 span {
  background: #c29b73;
  width: 40px;
  height: 8px;
  position: absolute;
  left: 0px;
  bottom: 0px;
}
.business_ct3 dl dd p {
  margin-bottom: 30px;
}
</style>


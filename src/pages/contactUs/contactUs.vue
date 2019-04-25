<template>
  <div class="warp">
    <div class="header_content">
      <Header :currentIndex="currentIndex" :navColor="navColor"></Header>
      <!-- <Slider :imgUrl="bannerList"></Slider> -->
    </div>
    <div class="about_banner"></div>
    <div class="about_cont">
        <div class="abt_ct">
            	<h3>联系我们<span></span></h3>
                <dl>
                	<dt>北粮通达（天津）集团有限公司</dt>
                    <dd>
                    	<p class="p1">地址：</p>
                        <span>天津自贸试验区（东疆保税港区）乐山道200号铭海中心2号楼-5、6-702</span>
                    </dd>
                    <dd>
                    	<p class="p2">电话：</p>
                        <span>022-65827977</span>
                    </dd>
                </dl>
                <div class="abt_bg"></div>
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
				currentIndex:5,
				navColor:'white'
            }
        },
        methods:{

        },
        mounted(){

        }
        
    }
</script>

<style lang="scss" scoped type="text/scss">
.about_banner {
	background: url("../../assets/images/about_banner.jpg") no-repeat center top;
	width: 100%;
	background-size: cover;
	height: 600px;
}

.about_cont {
	width: 1200px;
	margin: 0px auto;
}
.abt_ct{
	position: relative;
	margin: 60px 0px 120px;
	overflow: hidden;
}
.abt_bg{
	background: url("../../assets/images/about_img.png") no-repeat right top;
	width: 737px;
	height: 475px;
	position: absolute;
	right: 0px;
	top: 0px;
}
.abt_ct h3{
	font-size: 36px;
	margin-top: 90px;
	float: left;
	width: 100%;
	position: relative;
	height:68px;
}
.abt_ct h3 span{
	display: inline-block;
	position: absolute;
	left: 0px;
	bottom: 0px;
	background: #C29B73;
	width: 38px;
	height: 4px;
}
.abt_ct dl{
	float: left;
	width: 440px;
	height: 330px;
	background: #F8F8F8;
	padding: 50px 100px 0px 30px;
	margin-top: 100px;
	-webkit-box-sizing:initial;
}
.abt_ct dl dt{
	font-size: 24px;
	background:url("../../assets/images/about_icon1.png") no-repeat left center;
	background-size: 27px 27px;
	padding-left: 36px;
	margin-bottom: 70px;
}
.abt_ct dl dd{
	font-size: 16px;
	line-height: 30px;
	margin-bottom: 44px;
}
.abt_ct dl dd p.p1{
	background:url("../../assets/images/about_icon2.png") no-repeat left center;
	background-size: 14px 18px;
	padding-left: 20px;
}
.abt_ct dl dd p.p2{
	background:url("../../assets/images/about_icon3.png") no-repeat left center;
	background-size: 15px 16px;
	padding-left: 21px;
}
.abt_ct dl dd span{
	display: block;
	line-height: 30px;
	padding-left: 20px;
}

</style>


<template>
  <div class="warp">
    <div class="header_content">
      <Header :currentIndex="currentIndex" :navColor="navColor"></Header>
      <!-- <Slider :imgUrl="bannerList"></Slider> -->
    </div>
    <div class="structure_banner"></div>
    <div class="structure_cont">
        <div class="abt_ct">
        	<div class=""></div>
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

            }
        },
        methods:{

        },
        mounted(){

        }
        
    }
</script>

<style lang="scss" scoped type="text/scss">
.structure_banner {
	background: url("../../assets/images/newDetalbanner.png") no-repeat center top;
	width: 100%;
	background-size: cover;
	height: 315px;
	text-align: center;
	padding-top: 285px;
	-webkit-box-sizing:initial;
}
.structure_banner img{
	width: 1082px;
	height: 211px;
}

.structure_cont {
	width: 1200px;
	margin: 0px auto;
}
.abt_ct{
	height: 870px;
	width: 100%;
	margin: 80px 0px 130px;
}
.abt_ct p{
	display: inline-block;
	width: 100%;
	text-align: center;
}
.abt_ct p img{
	width: 1200px;
	height: 870px;
}

</style>


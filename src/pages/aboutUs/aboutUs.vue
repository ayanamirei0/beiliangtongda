<template>
  <div class="warp">
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>
      <!-- <Slider :imgUrl="bannerList"></Slider> -->
    </div>
    <div class="intro_banner"><img :src="banner"></div>
    <div class="intro_cont">
      <div class="abt_ct">
        <p>{{aboutUs.cont}}</p>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";

export default {
  name: "login",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      currentIndex:4,
      navColor: "white",
      aboutUs: {
        cont:
          "北粮集团于2018年11月在天津东疆港自贸区注册成立，注册资本金8亿元人民币，主要从事粮食贸易、仓储、物流及综合金融服务。北粮集团瞄准中国一流粮贸企业，秉承“创新 品质 品格”的经营理念，以投控方式形成固定资产，以杠杆方式参与大宗粮贸，围绕重点区域开展业务战略布局，为打造粮贸投控企业的业务关系网赋能。通过粮贸、资本、品牌三大拉动，提高统筹利用国际国内两个市场、两种资源的能力，在粮食贸易和北粮南运领域开发创新性金融产品，提升粮贸产业链价值，强化资源的综合利用，为推动中国粮油行业发展做贡献，创造共享价值实现合作共赢。"
      },
      banner: require("../../assets/images/about/image4.png"),
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped type="text/scss">
.intro_banner {
  background: url("../../assets/images/about/intro_banner.png") no-repeat center
    top;
  width: 100%;
  background-size: cover;
  height: 260px;
  text-align: center;
  padding-top: 180px;
  -webkit-box-sizing: initial;
}
.intro_banner img {
  width: 767px;
  height: 166px;
}

.intro_cont {
  width: 1200px;
  margin: 0px auto;
}
.abt_ct {
  position: relative;
  height: 490px;
  width: 1200px;
  margin: 130px 0px 130px;
  background: url("../../assets/images/about/intro_bg1.jpg") no-repeat center center;
  background-size:1200px 500px;
  transition: all 0.3s ;
}
.abt_ct:hover{
	background-size:1320px 545px;
}
.abt_ct p {
	background: url("../../assets/images/about/intro_bg.jpg") no-repeat  center top;
  display: inline-block;
  color: #666666;
  font-size: 14px;
  width: 364px;
  color: #666666;
  line-height: 24px;
  position: absolute;
  right: 180px;
  top: -50px;
  padding: 245px 50px 0px;
  height: 295px;
  font-family: PingFangSC;
  -webkit-box-sizing: initial;
}
</style>


<template>
  <div class="warp">
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>
      <!-- <Slider :imgUrl="bannerList"></Slider> -->
    </div>
    <div class="partner_banner"><img :src="banner"></div>
    <div class="partner_cont">
      <div class="abt_ct">
        <p>{{partner.cont}}</p>
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
      partner: {
        cont:
          "嘉旭集团公司布局在粮食主产区东北和粮食主销区两广、海南。主要管理人员均有二十余年粮食贸易行业经验，对粮食产业理解深刻，能够在行业波动中精准抓住机会，优化资金布局，获得利润。作为国内专注于粮食贸易的大型集团公司，深耕粮贸行业6年，2018年年销售规模超过200万吨。"
      },
      banner: require("../../assets/images/about/image4.png"),
      currentIndex: 4,
      navColor: "white"
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped type="text/scss">
.partner_banner {
  background: url("../../assets/images/about/intro_banner.png") no-repeat center
    top;
  width: 100%;
  background-size: cover;
  height: 315px;
  text-align: center;
  padding-top: 285px;
  -webkit-box-sizing: initial;
}
.partner_banner img {
  width: 828px;
  height: 211px;
}

.partner_cont {
  width: 1200px;
  margin: 0px auto;
}
.abt_ct {
  position: relative;
  overflow: hidden;
  background: url("../../assets/images/about/partner_bg.jpg") no-repeat right
    top;
  height: 518px;
  width: 100%;
  margin: 80px 0px 130px;
}
.abt_ct p {
  display: inline-block;
  color: #666666;
  font-size: 16px;
  width: 730px;
  color: #666666;
  line-height: 30px;
  position: absolute;
  right: 226px;
  top: 394px;
  font-family: PingFangSC;
}
</style>


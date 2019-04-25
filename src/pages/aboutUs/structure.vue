<template>
  <div class="warp">
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>
      <!-- <Slider :imgUrl="bannerList"></Slider> -->
    </div>
    <div class="structure_banner"><img :src="banner"></div>
    <div class="structure_cont">
      <div class="abt_ct">
        <p><img :src="structure"></p>
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
      structure: require("../../assets/images/about/structure_bg.jpg"),
      banner: require("../../assets/images/about/image5.png"),
      currentIndex: 4,
      navColor: "white"
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped type="text/scss">
.structure_banner {
  background: url("../../assets/images/about/intro_banner.png") no-repeat center
    top;
  width: 100%;
  background-size: cover;
  height: 384px;
  text-align: center;
  padding-top: 216px;
  -webkit-box-sizing: initial;
}
.structure_banner img {
  width: 1082px;
  height: 211px;
}

.structure_cont {
  width: 1200px;
  margin: 0px auto;
}
.abt_ct {
  height: 870px;
  width: 100%;
  margin: 80px 0px 130px;
}
.abt_ct p {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.abt_ct p img {
  width: 1200px;
  height: 870px;
}
</style>


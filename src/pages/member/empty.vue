<template>
  <div class="empty warp">
    <div class='emptyBg'>
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>
    </div>
    <Footer class="footer"></Footer>
  </div>

</template>

<script>
import axios from "axios";
import Header from "components/Header";
import Footer from "components/Footer";
export default {
  data() {
    return {
      currentIndex: 0, //根据这个值制定当前页面属于哪个导航栏部分
      navColor: "white", //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
      customerBeiliangId: "", //	北粮客户id
      customerId: "" //客户编号
    };
  },
  components: {
    Header,
    Footer
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.warp {
  display: flex;
  flex-direction: column;
  position: relative;

  .footer {
    height: 400px;
  }
}
.emptyBg {
  width: 100%;
  height: 880px;
  background: url(../../assets/images/emptyBg.png) no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
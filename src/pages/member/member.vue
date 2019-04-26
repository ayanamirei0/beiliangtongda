

<template>
  <div class="warp">
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>

    </div>
    <div class="content">
      <!-- 平台公告 -->
      <MemberMotice></MemberMotice>
      <!-- 加盟合作 -->
      <div
        class="joinpart"
        id="memberJoin"
      >
        <JoinPart></JoinPart>
      </div>
      <!-- 网上办事-->
      <onlineWork v-if='online' />
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";

import JoinPart from "./member-join";
import MemberMotice from "./member-notice";
import onlineWork from "./member-work";
export default {
  components: {
    Header,
    Footer,
    // Content,
    JoinPart,
    MemberMotice,
    onlineWork
  },
  data() {
    return {
      currentIndex: 2, //根据这个值制定当前页面属于哪个导航栏部分
      navColor: "white", //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
      online: false //是否显示网上办事
    };
  },
  created() {
    //#待提供
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo) {
      //是否是会员
      if (userInfo.vip == "1") {
        //如果是注册会员 则显示晚上办事模块
        this.online = true;
      }
    }
  },
  methods: {
    scrollTops() {
      return Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.pageYOffset
      );
    },
    documentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    },
    windowHeight() {
      return document.compatMode == "CSS1Compat"
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let tops = this.scrollTops();
      let winHeight = this.windowHeight();
      if (tops >= winHeight && this.isChartShow) {
        this.isChartShow = false;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    });
  }
};
</script>

<style lang="scss" scoped type="text/scss">
.joinpart {
  width: 1200px;
  margin: 0 auto 0 auto;
}
.warp {
  display: flex;
  flex-direction: column;
  position: relative;
  .header_content {
    height: 440px;
    background: url(../../assets/images/member/member_banner.jpg) no-repeat
      center top;
    width: 100%;
    background-size: cover;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    flex: 1;
  }
  .footer {
    height: 400px;
    margin-top: 100px;
  }
}
.btn {
  width: 44px;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: 400px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 0.4s width ease;
  text-align: center;
  cursor: pointer;
  &:hover {
    width: 138px;
    padding-right: 44px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.6);
    .icon-open {
      transform: rotate(-90deg);
    }
    span {
      width: 80px;
      height: 30px;
    }
  }
  span {
    display: inline-block;
    width: 0;
    height: 0;
    overflow: hidden;
    color: #fff;
  }
  .icon-open {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 7px;
    top: 7px;
    background: url(../../assets/images/home/jiantou.png) center center
      no-repeat;
    transition: 0.4s all ease;
  }
}
</style>


<template>
  <div class="warp">
    <Chart :isChartShow="isChartShow"></Chart>
    <div
      @click="openMap"
      class="btn"
      :style="{top: !isChartShow ? '120px' : windowHeight() + 120 + 'px'}"
    >
      <span>显示地图</span>
      <i class="icon icon-open">&nbsp;</i>
    </div>
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
        :isLogin="isLogin"
      ></Header>
        <Slider
          :dataImg="bannerDate"
          v-if="showIt"
        ></Slider>
    </div>
    <div class="content">
      <HomeContent></HomeContent>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";
import Slider from "components/common/slider";
import HomeContent from "./home-content1";
import Chart from "./chart";
import { crumbs, newsLists, wxLogin, pwdLogin} from "../../service/getData";
export default {
  components: {
    Header,
    Footer,
    Slider,
    HomeContent,
    Chart
  },
  data() {
    return {
      isLogin:false,
      isChartShow: true, // 是否展示图表
      currentIndex: 0, //根据这个值制定当前页面属于哪个导航栏部分
      navColor: "white", //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
      bannerDate: [{title:""}],
      showIt: false,
      bannerList: [
        {
          adimage: "../../assets/images/home/BANNER1.png"
        },
        {
          adimage: "../../assets/images/home/BANNER2.png"
        },
        {
          adimage: "../../assets/images/home/BANNER3.png"
        },
        {
          adimage: "../../assets/images/home/BANNER4.png"
        }
      ]
    };
  },
  created() {
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if(userInfo) {
          this.isLogin = true
      }
      // 判断微信授权登录重定向地址后是否有code
      if (window.location.href.indexOf("code") >= 0) {
          //如果url中包含code,则保存到store中
          let code = window.location.href.split("?")[1];
          code = code.substring(5, code.indexOf("&"));
          this.getWxAuthAndLogin(code);
      }
      let isAutoLogin = localStorage.getItem("autoLogin");
      if (isAutoLogin === 'true') {
          let account = localStorage.getItem("account");
          let password = localStorage.getItem("password");
          let _this = this
          pwdLogin(account, password).then(res => {
              if (res.returnCode === 200) {
                  _this.isLogin = true
                  _this.saveUserLoginData(res)
              } else {
                  if (res.message != null && res.message.length > 0) {
                      _this.$message.error(res.message);
                  }
              }
          });
      }
  },
  methods: {
    getData() {
      crumbs("1013", "beiliang_banner").then(res => {
        if (res.returnCode === 200) {
          this.bannerDate = res.result;
          console.log(this.bannerDate);
          this.showIt = true;
        } else {
          console.log("error");
        }
      });
    },
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
    },
    openMap() {
      this.isChartShow = true;
      document.getElementsByClassName("charts")[0].style.transition =
        ".4s all ease";
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      setTimeout(() => {
        this.isChartShow = true;
      }, 0);
      setTimeout(() => {
        document.getElementsByClassName("charts")[0].style.transition = "none";
      }, 400);
    },
      //获取微信登录用户数据
      getWxAuthAndLogin(code) {
          wxLogin(code).then(res => {
              if (res.returnCode === 200) {
                  let result = res.result
                  this.bingStatus = result.bingStatus
                  if (!this.bingStatus) {
                      sessionStorage.setItem("openId", res.result.openId)
                      //没有绑定
                      this.$router.push("/bindMobile")
                  } else {
                      //存储用户数据
                      this.isLogin = true
                      this.saveUserLoginData(res)
                  }
              }
          });
      },
      //登录成功后保存本地数据
      saveUserLoginData(res) {
          let result = res.result
          sessionStorage.removeItem("userInfo")
          sessionStorage.setItem("userInfo", JSON.stringify(result))
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

    // 请求数据
    this.getData();
  }
};
</script>

<style lang="scss" scoped type="text/scss">
.warp {
  display: flex;
  flex-direction: column;
  position: relative;
  .header_content {
    height: 600px;
    background: url("../../assets/images/home/banner_default.jpg") no-repeat center
        center;
      background-size: 100% 100%;
  }
  .content {
    flex: 1;
  }
  .footer {
    height: 400px;
  }
}
.btn {
  width: 44px;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  position: fixed;
  top: 200px;
  left: 50%;
  margin-left: 550px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 0.4s all ease;
  text-align: center;
  cursor: pointer;
  z-index: 3;
  &:hover {
    width: 138px;
    transform: translateX(-94px);
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


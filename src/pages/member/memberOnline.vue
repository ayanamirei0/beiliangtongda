

<template>
  <div class="warp">
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>
    </div>
    <div class="content">
      <div class="part dwon">
        <div class="title">
          <span>网上办事</span>
          <p>ONLINE WORK</p>
        </div>
        <div class="download">
          <!-- 上传 -->
          <Upload />
        </div>
      </div>
    </div>
    <div>
      <Footer class="footer"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";
import Upload from "./upload";

export default {
  components: {
    Header,
    Footer,
    Upload
  },
  data() {
    return {
      currentIndex: 0, //根据这个值制定当前页面属于哪个导航栏部分
      navColor: "white" //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
    };
  },
  created() {},
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
$color1: #c29b73;
$color2: #50a050;
$color3: #db2a36;
$color4: #333333;
$color5: #666666;
$color6: #999999;
$color7: #cccccc;
$color8: #ebebeb;
$color9: #f8f8f8;
$colorW: #ffffff;

// .el-upload-dragger{
//   width: 520px;
//   height: 620px;
// }
.title {
  padding: 125px 0;
  display: flex;
  span {
    width: 230px;
    line-height: 50px;
    font-size: 48px;
    color: $color4;
  }
  p {
    flex: 1;
    font-size: 24px;
    padding-top: 12px;
    color: $color7;
    border-bottom: 1px solid $color8;
    font-family: "宋体";
  }
}

.content {
  width: 1200px;
  margin: 0 auto;
  .part {
    .download {
      width: 600px;
      height: 402px;
      border: 1px solid#DDDDDD;
      border-radius: 20px;
      margin: auto;
      display: flex;
      flex-direction: column;
      .down_img {
        width: 520px;
        height: 260px;
        margin: 40px 40px 33px 40px;
        background: url(../../assets/images/member/image8.png) no-repeat 100%
          100%;
      }
      .down_word {
        text-align: center;
        span {
          display: inline-block;
          width: 104px;
          height: 42px;
          background: rgba(194, 155, 115, 1);
          border-radius: 21px;
          font-size: 18px;
          line-height: 42px;
          color: #fff;
          &:nth-child(2) {
            margin-left: 150px;
          }
        }
      }
    }
  }
}
.warp {
  display: flex;
  flex-direction: column;
  position: relative;
  .header_content {
    height: 600px;
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
    height: 833px;
  }
  .footer {
    height: 400px;
    margin-top: 100px;
  }
}
</style>


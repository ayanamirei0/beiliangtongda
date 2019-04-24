
<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <span></span>
        <img src="../assets/images/header/logo2.png" alt="logo" id="logo">
      </div>
      <div class="footer-mid clearfix">
        <div class="fl">
          <p>TEL：010-6800000</p>
          <p>FAX：010-6800000</p>
          <p>Email：0000@aaaa.com</p>
          <h4>ADD：</h4>
          <p>天津自贸试验区（东疆保税港区）乐山道200号铭海中心2号楼-5、6-702</p>
        </div>
        <img src="../assets/images/home/2v.png" alt class="fr">
      </div>
      <div class="footer-bot">
        <div class="line"></div>
        <p>京ICP备06000000号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {}
};
</script>

<style lang="scss" scoped="" type="text/scss">
@import "../common/style/mixin";
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
.footer {
  height: 400px;
  background-color: #2d2d2d;
  .footer-content {
    width: 1200px;
    margin: 0 auto;
    .footer-top {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      span {
        display: inline-block;
        position: relative;
        left: 30px;
        top: -30px;
        width: 3px;
        height: 60px;
        background: url("../assets/images/home/line.png") no-repeat;
        background-size: 100% 100%;
      }
      #logo {
        width: 60px;
        height: 60px;
        margin-top: 60px;
      }
    }
    .footer-mid {
      margin-top: 40px;
      > div {
        color: $colorW;
        font-size: 14px;
        line-height: 24p;
        p {
          &:nth-child(1) {
            margin-top: 6px;
          }
        }
        h4 {
          margin-top: 30px;
          font-weight: normal;
        }
      }
      img {
        width: 160px;
        height: 160px;
      }
    }
    .footer-bot {
      width: 100%;
      margin: 0 auto;
      .line {
        height: 1px;
        border-bottom: 1px solid $color5;
        margin-top: 44px;
      }
      > p {
        width: 160px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: $colorW;
        margin: 0 auto;
        position: relative;
        top: -10px;
        background-color: #2d2d2d;
        text-align: Center;
      }
    }
  }
}
</style>

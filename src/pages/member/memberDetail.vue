<template>
  <div class="warp">
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>
    </div>
    <div class="content">
      <div class="crumbs clearfix">
        <i class="fl"></i>
        <router-link
          tag="span"
          to='/member'
          class="fl up"
        >会员中心</router-link>
        <b class="fl">&gt;</b>
        <span class="fl now">平台公告</span>
      </div>
      <div class="news-box">
        <h3>{{detail.title}}</h3>
        <div class="other-box clearfix">
          <span class="fl">
            <i class="fl"></i>
            <i class="fl">浏览：</i>
            <b class="fl">{{detail.browseNum}}</b>
          </span>
          <span class="fr">
            <i></i>
            <i>发布时间：{{detail.pushTimeStr}}</i>
          </span>
        </div>
        <div class="txt-box">
          <div v-html="detail.content"></div>
          <img
            :src="detail.picUrl"
            alt
          />
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";

import { noticeGetNoticeByIdForBeiLiang } from "../../service/getData";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isChartShow: true, // 是否展示图表
      currentIndex:2, //根据这个值制定当前页面属于哪个导航栏部分
      navColor: "white", //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
      detail: {}
    };
  },
  created() {

  },
  methods: {},
  mounted() {
   
    noticeGetNoticeByIdForBeiLiang({
    id: this.$route.query.id
    }).then(res => {
      this.detail = res.result;
    });
  }
};
</script>

<style lang="scss" scoped type="text/scss">
@import "../../common/style/mixin";
.warp {
  display: flex;
  flex-direction: column;
  position: relative;
  .header_content {
    height: 600px;
    background-color: pink;
    background: url(../../assets/images/noticeBanner.png) no-repeat center top;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    .crumbs {
      font-size: 14px;
      line-height: 50px;
      color: #999;
      i {
        &:nth-child(1) {
          background: url(../../assets/images/news/icon1.png) no-repeat;
          background-size: 100% 100%;
          width: 14px;
          height: 19px;
          margin-top: 16px;
          margin-right: 4px;
        }
      }
      span {
        margin: 0 5px;
        cursor: pointer;
      }
    }
    .news-box {
      h3 {
        margin: 49px 0 26px;
        text-align: center;
        font-size: 24px;
      }
      .other-box {
        width: 100%;
        line-height: 52px;
        font-size: 14px;
        color: #999;
        border-bottom: 1px solid #ebebeb;
        span {
          &:nth-child(1) {
            i {
              font-style: normal;
              &:nth-child(1) {
                background: url(../../assets/images/news/icon2.png) no-repeat;
                background-size: 100% 100%;
                width: 16px;
                height: 9px;
                margin: 22px 8px 0 0;
              }
            }
            b {
              font-weight: normal;
            }
          }
          &:nth-child(2) {
            i {
              float: left;
              font-style: normal;
              &:nth-child(1) {
                background: url(../../assets/images/news/icon3.png) no-repeat;
                background-size: 100% 100%;
                width: 17px;
                height: 17px;
                margin: 18px 8px 0 0;
              }
            }
          }
        }
      }
      .txt-box {
        line-height: 30px;
        padding-top: 102px;
        margin: 0 180px;
        p {
          margin-bottom: 30px;
          font-size: 16px;
          text-align: center;
        }
        img {
          width: 840px;
          height: 472px;
          margin: 30px 0 130px;
        }
      }
    }
  }
  .footer {
    height: 400px;
  }
}
</style>


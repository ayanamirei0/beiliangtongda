<template>
  <div class="content">
    <!-- 业务布局 -->
    <div class="part business" id="business">
      <div class="title">
        <span>业务布局</span>
        <p>BUSINESS LAYOUT</p>
      </div>
      <div class="img-box">
        <!-- <div class="img-box" v-for="(item,index) in pro.title" :key="index"> -->
        <div
          ref="imgBoxItem"
          v-for="(item,index) in business"
          :key="index"
          @mouseenter="enter(index)"
          @mouseleave="leave(index)"
        >
          <span class="img-txt">{{item.title}}</span>
          <div class="img-out">
            <img :src="item.imgUrl" :key="index" alt="business-img">
          </div>
          <div class="pos-box" ref="posBox">
            <h3 class="pos-title">
              <i class="point"></i>
              {{item.title}}
            </h3>
            <p class="pos-txt">{{item.txt}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 加盟合作 -->
    <div class="part join" id="join">
      <div class="title">
        <span>加盟合作</span>
        <p>FRANCHISE COOPERATION</p>
      </div>
      <div class="img-box">
        <div
          v-for="(item,index) in joinIn"
          :key="index"
          @mouseenter="joinEnter(index)"
          :class="index == joinInCurIndex ? 'img-box-item on' : 'img-box-item'"
        >
          <div class="img-mask"></div>
          <span class="img-txt2">{{item.title}}</span>
          <div class="img-out">
            <img :src="item.imgUrlSmal" :key="index" alt="business-img">
          </div>
          <i>{{item.num}}</i>
        </div>
      </div>
      <div class="info-box">
        <div class="img-out">
          <img :src="joinIn[joinInCurIndex].imgUrlBig" alt class>
        </div>
        <div class="info-txt">
          <h3>{{joinIn[joinInCurIndex].title}}</h3>
          <p>{{joinIn[joinInCurIndex].txt}}</p>
          <router-link tag="span" :to="joinIn[joinInCurIndex].href">了解更多 &gt;&gt;</router-link>
        </div>
        <b class="triangle" :style="{left: `${joinInCurIndex * 204  + 92 - 23}px`}"></b>
      </div>
    </div>
    <!-- 新闻中心 & 平台公告 -->
    <div class="news-notice clearfix">
      <!-- 新闻中心 -->
      <div class="part fl" id="news">
        <div class="title">
          <span>新闻中心</span>
          <p>NEWS CENTER</p>
        </div>
        <div class="img-box">
          <!-- <div class="img-box" v-for="(item,index) in pro.title" :key="index"> -->
          <div>
            <span class="img-txt">新闻中心</span>
            <div class="img-out" :style="{width: '585px', height: '300px'}">
              <img src="../../assets/images/home/image4.png" alt class>
            </div>
          </div>
        </div>
        <div class="news">
          <h3>【行业新闻】北粮南运，通达天下北粮南运，通达天下北粮南运。运通达天下下</h3>
          <p class="time">
            <i class="time-icon"></i>一天前
          </p>
          <p
            class="infom"
          >北粮集团于2018年11月在天津东疆港自贸区注册成立，注册资本金8亿元人民币，主要从事粮食贸易、仓储、物流，及综合金融服务，以投控方式注以投控方式注控方式注...</p>
          <ul>
            <li v-for="(item,index) in news" :key="index">
              <div class="clearfix">
                <i class="fl"></i>
                <span class="fl">{{item.title}}</span>
                <b class="fr">{{item.time}}</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 平台公告 -->
      <div class="part fr" id="notice">
        <div class="title">
          <span>平台公告</span>
          <p>PLATFORM BULLETIN</p>
        </div>
        <div class="img-box">
          <!-- <div class="img-box" v-for="(item,index) in pro.title" :key="index"> -->
          <div>
            <span class="img-txt">平台公告</span>
            <div class="img-out" :style="{width: '585px', height: '300px'}">
              <img src="../../assets/images/home/image5.png" alt class>
            </div>
          </div>
        </div>
        <div class="news">
          <h3>北粮集团致力于成为“金融+产业”的粮贸物流平台，诚邀各资源方加盟。</h3>
          <p class="time">
            <i class="time-icon"></i>一天前
          </p>
          <p
            class="infom"
          >北粮集团于2018年11月在天津东疆港自贸区注册成立，注册资本金8亿元人民币，主要从事粮食贸易、仓储、物流，及综合金融服务，以投控方式注以投控方式注控方式注...</p>
          <ul>
            <li v-for="(item,index) in news" :key="index">
              <div class="clearfix">
                <i class="fl"></i>
                <span class="fl">{{item.title}}</span>
                <b class="fr">{{item.time}}</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";
export default {
  name: "home-content",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      pro: {
        title: ["业务布局", "加盟合作", "新闻中心", "平台公告"]
      },
      joinInCurIndex: 0,
      // 业务布局
      business: [
        {
          title: "金融业务板块",
          imgUrl: require("../../assets/images/home/image1.png"),
          txt:
            "通过融资租赁、期货、财务、保理、保险、产业基金、银行信用证、衍生品交易等业务，打造基于粮贸产业链的金融服务平台，同时整合北粮集团粮贸流通领域各环节的资源，促进链上双向流通，致力于构建全新可持续发展的粮贸生态圈。"
        },
        {
          title: "固定资产板块",
          imgUrl: require("../../assets/images/home/image2.png"),
          txt:
            "投资运营船舶、物流车辆、粮库，组建粮贸船队、车队，建造储粮仓库，打造航运运力50万吨、自建仓库库容100万吨、自有粮食物流车达到100辆规模的粮贸物流中心。同时积极参与物流园区建设。通过固定资产板块支持粮贸规模增长，赋能粮贸产业。"
        },
        {
          title: "粮贸运营板块",
          imgUrl: require("../../assets/images/home/image3.png"),
          txt:
            "北粮集团规划内贸与外贸同时发展，以外贸补充内贸，打造完整的农业全产业链，从粮源到销售终端，高度掌控全产业链经营，实现粮贸利润最大化。"
        }
      ],
      // 加盟合作
      joinIn: [
        {
          title: "粮源方",
          imgUrlSmal: require("../../assets/images/home/bg1.png"),
          imgUrlBig: require("../../assets/images/home/img1.png"),
          num: "01",
          txt: "处于粮食主产区、主销区的玉米、大豆、小麦生产商、粮食贸易商。",
          href: "/aaa"
        },
        {
          title: "物流企业",
          imgUrlSmal: require("../../assets/images/home/bg2.png"),
          imgUrlBig: require("../../assets/images/home/img2.png"),
          num: "02",
          txt: "拥有陆路运粮车的企业。",
          href: "/bbb"
        },
        {
          title: "仓库资产持有方",
          imgUrlSmal: require("../../assets/images/home/bg3.png"),
          imgUrlBig: require("../../assets/images/home/img3.png"),
          num: "03",
          txt: "在粮食主产区、港口、主销区，拥有粮库资源的企业、个人。",
          href: "/ccc"
        },
        {
          title: "杂货船资产持有方",
          imgUrlSmal: require("../../assets/images/home/bg4.png"),
          imgUrlBig: require("../../assets/images/home/img4.png"),
          num: "04",
          txt: "拥有2-3万吨，5-6万吨载重运力的杂货船持有企业和个人。",
          href: "/ddd"
        },
        {
          title: "资金方",
          imgUrlSmal: require("../../assets/images/home/bg5.png"),
          imgUrlBig: require("../../assets/images/home/img5.png"),
          num: "05",
          txt:
            "持有一定量资金，且有意愿投入到粮贸物流产业的资金持有方。资金可以以股权投资、债权投资、购买相关非标金融产品等形式投入。",
          href: "/eee"
        },
        {
          title: "其他金融机构",
          imgUrlSmal: require("../../assets/images/home/bg6.png"),
          imgUrlBig: require("../../assets/images/home/img6.png"),
          num: "06",
          txt: "保理公司、资产评估公司、保险公司、期货公司等金融机构。",
          href: "/fff"
        }
      ],
      // 新闻中心
      news: [
        {
          title: "北粮：财富管理升级，从单一管理",
          time: "2017-08-09"
        },
        {
          title: "北京大学吕随启：做您想要的金融方能",
          time: "2017-09-23"
        },
        {
          title: "2019北粮尊享年会高管采访纪要",
          time: "2017-10-02"
        },
        {
          title: "做您想要的金融方能真正满足客户需求",
          time: " 2017-09-23"
        }
      ],
      // 平台公告
      notice: [
        {
          title: "北粮：财富管理升级，从单一管理",
          time: "2017-08-09"
        },
        {
          title: "北京大学吕随启：做您想要的金融方能",
          time: "2017-09-23"
        },
        {
          title: "2019北粮尊享年会高管采访纪要",
          time: "2017-10-02"
        },
        {
          title: "做您想要的金融方能真正满足客户需求",
          time: " 2017-09-23"
        }
      ],
      imgBoxHeight: 560
    };
  },
  mounted() {
    this.$refs.posBox.forEach(item => {
      item.style.height = item.offsetHeight + "px";
    });
  },
  methods: {
    enter(index) {
      let ele = this.$refs.posBox[index];
      ele.style.top = `${560 - ele.offsetHeight}px`;
    },
    leave(index) {
      let ele = this.$refs.posBox[index];
      ele.style.top = `560px`;
    },
    joinEnter(index) {
      this.joinInCurIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
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
img:hover {
  transition: 0.3s all ease;
  transform: scale(1.1);
}
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
    color: $color6;
    border-bottom: 1px solid $color8;
  }
}
.content {
  width: 1200px;
  margin: 0 auto;
  .part {
    &.business {
      height: 860px;
      overflow: hidden;
    }
    .img-box {
      display: flex;
      > div {
        flex: 1;
        position: relative;
        margin-right: 20px;
        &.on {
          &:hover {
            img {
              transform: scale(1.1);
              transition: 0.4s all ease;
            }
          }
          .img-mask {
            background-color: rgba(180, 136, 86, 0.65);
          }
          .img-txt2 {
            color: #fff;
          }
          i {
            color: $color1;
            background-color: $colorW;
          }
        }
        .img-mask {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          // background-color: rgba(0, 0, 0, .2);
        }
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .img-out {
          width: 100%;
          height: 100%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .img-txt {
          position: absolute;
          left: 0;
          top: -31px;
          width: 162px;
          height: 62px;
          line-height: 62px;
          font-size: 20px;
          color: $colorW;
          background: $color1;
          text-align: center;
          z-index: 3;
        }
        .img-txt2 {
          @include center;
          z-index: 3;
          color: $color1;
          font-size: 24px;
          width: 168px;
          text-align: center;
          &:nth-child(4) {
            width: 200px;
          }
        }
        .pos-box {
          position: absolute;
          left: 0;
          top: 560px;
          width: 100%;
          color: $colorW;
          background: rgba(0, 0, 0, 0.5);
          padding: 0 38px 24px 34px;
          box-sizing: border-box;
          transition: 0.4s top ease;
          .pos-title {
            font-size: 24px;
            line-height: 85px;
            font-weight: normal;
            .point {
              background: $colorW;
              position: static;
              display: inline-block;
              width: 10px;
              height: 10px;
              margin-right: 17px;
              top: -4px;
              margin-bottom: 4px;
            }
          }
          .pos-txt {
            font-size: 16px;
            padding-bottom: 20px;
          }
        }
        i {
          position: absolute;
          left: 0;
          top: 0;
          width: 44px;
          height: 40px;
          line-height: 40px;
          background: $color1;
          color: $colorW;
          font-size: 26px;
          text-align: Center;
          font-style: normal;
          z-index: 3;
        }
        b {
          position: absolute;
        }
      }
    }
    .info-box {
      position: relative;
      display: flex;
      margin-top: 32px;
      background: $color9;
      padding: 32px;
      .img-out {
        width: 560px;
        height: 284px;
        margin-right: 32px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 560px;
        height: 284px;
        margin-right: 32px;
      }
      .info-txt {
        flex: 1;
        margin-top: 15px;
        position: relative;
        h3 {
          line-height: 90px;
          font-size: 30px;
        }
        p {
          line-height: 34px;
          font-size: 16px;
          color: $color5;
        }
        span {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: $color1;
          }
        }
      }
      .triangle {
        position: absolute;
        top: -50px;
        left: 70px;
        width: 46px;
        height: 20px;
        background: url("../../assets/images/home/triangle.png") no-repeat;
        background-size: 100% 100%;
        // margin-top: 32px;
        transform: translateY(32px);
      }
    }
    .news {
      width: 585px;
      h3 {
        line-height: 50px;
        @include ellipsis2(2);
        font-size: 30px;
        margin-top: 26px;
        &:hover {
          color: $color1;
        }
      }
      p {
        font-size: 14px;
        color: $color6;
        &.time {
          line-height: 35px;
          .time-icon {
            width: 12px;
            height: 12px;
            display: inline-block;
            background: url("../../assets/images/home/time.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 6px;
          }
        }
        &.infom {
          @include ellipsis2(2);
          line-height: 24px;
          &:hover {
            color: $color1;
          }
        }
      }
      ul {
        font-size: 14px;
        color: $color4;
        margin: 42px 0 80px;
        li {
          margin-bottom: 4px;
          line-height: 30px;
          &:hover {
            color: $color1;
          }
          i {
            width: 5px;
            height: 5px;
            background: $color7;
            margin: 13px 9px 0 20px;
          }
          b {
            margin-right: 22px;
          }
          &:nth-child(even) {
            background: $color9;
          }
        }
      }
    }
  }
}
.news-notice {
  .part {
    &:nth-child(2) {
      margin-left: 20px;
    }
    .img-box {
      > div {
        .img-txt {
          width: 120px;
          height: 44px;
          line-height: 44px;
          font-size: 18px;
          left: unset;
          right: 0;
        }
      }
    }
  }
}
</style>


<template>
  <div class="content" id="member_notice">
    <!-- 新闻中心 & 平台公告 -->
    <div class="news-notice clearfix">
      <!-- 平台公告 -->
      <div
        class="part"
        id="notice"
      >
        <div class="title">
          <span>平台公告</span>
          <p>Platform Bulletin</p>
        </div>
        <div class="notice-wrap">
          <div class="news">
            <h3>北粮集团致力于成为“金融+产业”的粮贸物流平台，诚邀各资源方加盟。</h3>
            <p class="time">
              <i class="time-icon"></i>一天前
            </p>
            <p class="infom">北粮集团于2018年11月在天津东疆港自贸区注册成立，注册资本金8亿元人民币，主要从事粮食贸易、仓储、物流，及综合金融服务，以投控方式注以投控方式注控方式注...</p>
            <ul>
              <li
                v-for="(item,index) in info.news"
                :key="index"
              >
                <div class="clearfix">
                  <i class="fl"></i>
                  <span class="fl">{{item.title}}</span>
                  <b class="fr">{{item.time}}</b>
                </div>
              </li>
            </ul>
          </div>
          <div class="img-box">
            <div>
              <span class="img-txt">平台公告</span>
              <img
                src="../../assets/images/member/online_top.png"
                alt
                class
              >
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- 加盟合作 -->
    <div
      class="part join"
      id="join"
    >
      <div class="title">
        <span>加盟合作</span>
        <p>Franchise cooperation</p>
      </div>
      <div class="img-box">
        <div
          v-for="(item,index) in info.joinIn"
          :key="index"
        >
          <span class="img-txt2">{{item.title}}</span>
          <img
            :src="item.imgUrl"
            :key="index"
            alt="business-img"
          >
          <i>{{item.num}}</i>
        </div>
      </div>
      <div class="info-box">
        <img
          src="../../assets/images/home/img1.png"
          alt
          class
        >
        <div class="info-txt">
          <h3>粮源持有方</h3>
          <p>处于粮食主产区、主销区的玉米、大豆、小麦生产商、粮食贸易商。</p>
          <span>了解更多 >></span>
        </div>
        <b class="triangle"></b>
      </div>
    </div>
    <!-- 网上办事 -->
    <div class="part online">
      <div class="title">
        <span>网上办事</span>
        <p>Online work</p>
      </div>
      <div class="online-box">
        <div
          v-for="(item,index) in info.online"
          :key="index"
        >
          <div class='on-content'>
            <span class='online-index'>{{index}}</span>
            <span class='online-title'>{{item.title}}</span>
            <img :src="item.imgUrl">
            <ul>
              <li
                v-for="(em,index) in item.list"
                :key="index"
                v-show='item.list.length>0'
                @click='onlineWork(index,item.type)'
              >
                <div class="clearfix">
                  <span :class="(index==0 && item.type=='zc' ) ?'circle fl' : 'active-circle fl'"></span>
                  <span :class="(index==0 && item.type=='zc') ? 'online-info fl' :'active-info fl'">{{em.title}}</span>
                  <span class="fr arrow"></span>
                </div>
              </li>
            </ul>
            <div v-show='item.list.length>0 ? false : true'>
              <img
                :src="item.noneImg"
                id='noneImg'
              >
            </div>
          </div>
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
        title: ["业务布局", "加盟合作", "平台公告", "网上办事"]
      },
      info: {
        //网上办事
        online: [
          {
            type: "zc",
            //资产类
            title: "资产类",
            imgUrl: require("../../assets/images/member/online1.png"),
            list: [
              {
                title: "资产使用计划表"
              },
              {
                title: "资产使用申请"
              },
              {
                title: "资产使用申请批复"
              },
              {
                title: "资产使用月度报告"
              },
              {
                title: "资产使用年度报告"
              },
              {
                title: "资产维修申请"
              },
              {
                title: "资产相关费用申请"
              },
              {
                title: "资产购置申请表"
              },
              {
                title: "资产购置批复表"
              }
            ],
            noneImg: require("../../assets/images/member/online6.png")
          },
          //资金类
          {
            type: "zj",
            title: "资金类",
            imgUrl: require("../../assets/images/member/online2.png"),
            list: [
              {
                title: "资金使用计划表"
              },
              {
                title: "资金使用申请"
              },
              {
                title: "资金使用申请批复"
              },
              {
                title: "资金使用月度报告"
              },
              {
                title: "资金使用年度报告"
              },
              {
                title: "非预算费用申请表"
              },
              {
                title: "非预算费用批复表"
              }
            ],
            noneImg: require("../../assets/images/member/online6.png")
          },
          //行政综合类
          {
            type: "xzzh",
            title: "行政综合类",
            imgUrl: require("../../assets/images/member/online3.png"),
            list: [],
            noneImg: require("../../assets/images/member/online6.png")
          },
          //Financial
          {
            type: "jrfw",
            title: "金融服务类",
            imgUrl: require("../../assets/images/member/online4.png"),
            list: [],
            noneImg: require("../../assets/images/member/online6.png")
          },
          //其他
          {
            type: "qt",
            title: "其他",
            imgUrl: require("../../assets/images/member/online5.png"),
            list: [],
            noneImg: require("../../assets/images/member/online6.png")
          }
        ],
        // 业务布局
        business: [
          {
            title: "金融业务板块",
            imgUrl: require("../../assets/images/home/image1.png"),
            txt:
              "通过融资租赁、期货、财务、保理、保险、产业基金、银行信用证、衍生品交易等业务，打造基于粮贸产业链的金融服务平台，同时整合北粮集团粮贸流通领域各环节的资源，促进链上双向流通，致力于构建全新可持续发展的粮贸生态圈"
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
            imgUrl: require("../../assets/images/home/bg1.png"),
            num: "01",
            txt: "处于粮食主产区、主销区的玉米、大豆、小麦生产商、粮食贸易商。"
          },
          {
            title: "物流企业",
            imgUrl: require("../../assets/images/home/bg1.png"),
            num: "02",
            txt: "拥有陆路运粮车的企业。"
          },
          {
            title: "仓库资产持有方",
            imgUrl: require("../../assets/images/home/bg1.png"),
            num: "03",
            txt: "在粮食主产区、港口、主销区，拥有粮库资源的企业、个人。"
          },
          {
            title: "杂货船资产持有方",
            imgUrl: require("../../assets/images/home/bg1.png"),
            num: "04",
            txt: "拥有2-3万吨，5-6万吨载重运力的杂货船持有企业和个人。"
          },
          {
            title: "资金方",
            imgUrl: require("../../assets/images/home/bg1.png"),
            num: "05",
            txt:
              "持有一定量资金，且有意愿投入到粮贸物流产业的资金持有方。资金可以以股权投资、债权投资、购买相关非标金融产品等形式投入。"
          },
          {
            title: "其他金融机构",
            imgUrl: require("../../assets/images/home/bg1.png"),
            num: "06",
            txt: "保理公司、资产评估公司、保险公司、期货公司等金融机构。"
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
        ]
      }
    };
  },
  created() {
    // this.info.online
  },
  methods: {
    //点击网上办事
    onlineWork(index,type) {
      if (index == 0 && type == "zc") {
        this.$router.push("/onlineWork");
      }
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
    .img-box {
      display: flex;
      > div {
        flex: 1;
        position: relative;
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
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
        }
        .img-txt2 {
          @include center;
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
          bottom: 0;
          width: 100%;
          color: $colorW;
          background: rgba(0, 0, 0, 0.5);
          padding: 0 38px 24px 34px;
          .pos-title {
            font-size: 24px;
            line-height: 85px;
            font-weight: normal;
            i {
              background: $colorW;
              position: static;
              display: inline-block;
              width: 10px;
              height: 10px;
              margin-right: 17px;
            }
          }
          .pos-txt {
            font-size: 16px;
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
        margin-top: 32px;
      }
    }
  }
}

.news-notice {
  .notice-wrap {
    display: flex;
    justify-content: space-between;
    .news {
      width: 585px;
      h3 {
        line-height: 50px;
        // @include ellipsis2;
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
          // @include ellipsis2;
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
.online {
  margin-bottom: 148px;
  .online-box {
    display: flex;
    > div {
      flex: 1;
      position: relative;
      margin-right: 20px;
      padding-left: 30px;
      padding-right: 30px;
      border-left: 1px solid rgba(235, 235, 235, 1);
      &:last-child {
        margin-right: 0;
      }
      .online-index {
        width: 8px;
        height: 16px;
        font-size: 24px;
        color: rgba(51, 51, 51, 1);
      }
      .online-title {
        display: block;
        margin-top: 96px;
        margin-bottom: 34px;
        height: 24px;
        font-size: 24px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      img {
        width: 180px;
        height: 200px;
        display: block;
        margin-bottom: 27px;
      }
      ul {
        cursor: pointer;
        > li {
          height: 14px;
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 19px;
          div {
            .circle {
              width: 6px;
              height: 6px;
              background: #c29b73;
              margin-right: 3px;
              margin-top: 6px;
              cursor: pointer;
            }
            .online-info {
              height: 14px;
              font-size: 14px;
              color: #666;
              cursor: pointer;
            }
            .active-info {
              height: 14px;
              font-size: 14px;
              color: #ccc;
            }
            .active-circle {
              width: 6px;
              height: 6px;
              background: #ccc;
              margin-right: 3px;
              margin-top: 6px;
            }

            .arrow {
              width: 8px;
              height: 6px;
              background: url("../../assets/images/member/arrow_grey.png")
                no-repeat 100% 100%;
              margin-top: 6px;
            }
          }
        }
        li:hover {
          cursor: pointer;
          .arrow:hover {
            background: url("../../assets/images/member/arrow_color.png")
              no-repeat 100% 100%;
          }
          .online-info:hover {
            color: #c29b73;
          }
        }
      }
    }
  }
}
#noneImg {
  cursor: pointer;
  width: 100px;
  height: 90px;
  margin: 103px auto;
}
</style>
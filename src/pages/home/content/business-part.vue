<template>
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
</template>

<script>
export default {
  name: "business-part",
  data() {
    return {
      business: [
        {
          title: "金融业务板块",
          imgUrl: require("../../../assets/images/home/image1.png"),
          txt:
            "通过融资租赁、期货、财务、保理、保险、产业基金、银行信用证、衍生品交易等业务，打造基于粮贸产业链的金融服务平台，同时整合北粮集团粮贸流通领域各环节的资源，促进链上双向流通，致力于构建全新可持续发展的粮贸生态圈。"
        },
        {
          title: "固定资产板块",
          imgUrl: require("../../../assets/images/home/image2.png"),
          txt:
            "投资运营船舶、物流车辆、粮库，组建粮贸船队、车队，建造储粮仓库，打造航运运力50万吨、自建仓库库容100万吨、自有粮食物流车达到100辆规模的粮贸物流中心。同时积极参与物流园区建设。通过固定资产板块支持粮贸规模增长，赋能粮贸产业。"
        },
        {
          title: "粮贸运营板块",
          imgUrl: require("../../../assets/images/home/image3.png"),
          txt:
            "北粮集团规划内贸与外贸同时发展，以外贸补充内贸，打造完整的农业全产业链，从粮源到销售终端，高度掌控全产业链经营，实现粮贸利润最大化。"
        }
      ]
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
@import "../../../common/style/mixin";
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
$color10: #ddd;
img{
  transition: 0.3s all ease;
}
img:hover {
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
    border-bottom: 1px solid $color10;
    font-family: "宋体";
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
              // transform: scale(1.1);
              // transition: 0.4s all ease;
              // -webkit-transition: .4s all ease;
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
          -webkit-transition: .4s all ease;
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
        background: url("../../../assets/images/home/triangle.png") no-repeat;
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
            background: url("../../../assets/images/home/time.png") no-repeat;
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


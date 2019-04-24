
<template>
  <div class="content">
    <!-- 新闻中心 & 平台公告 -->
    <div
      class="news-notice clearfix"
      id="memberNotice"
    >
      <!-- 平台公告 -->
      <div class="part">
        <div class="title">
          <span>平台公告</span>
          <p>PLATFORM BULLETIN</p>
        </div>
        <div class="notice-wrap">
          <div class="news">
            <h3 @click="noticeDetail(firstList.id)">{{firstList.title}}</h3>
            <p
              class="time"
              @click="noticeDetail(firstList.id)"
            >
              <i class="time-icon"></i>{{firstList.pushTimeStr}}
            </p>
            <p
              class="infom"
              @click="noticeDetail(firstList.id)"
            >{{firstList.introduction}}</p>
            <ul>
              <li
                v-for="(item,index) in list.slice(1,listLength)"
                :key="index"
                @click="memberDetail(item.id)"
              >
                <div class="clearfix">
                  <i class="fl"></i>
                  <span class="fl">{{item.title}}</span>
                  <b class="fr">{{item.pushTimeStr}}</b>
                </div>
              </li>
            </ul>
          </div>
          <div class="img-box">
            <div>
              <span class="img-txt">平台公告</span>
              <div class="img-out">
                <img src="../../assets/images/member/online_top.png">
                <!-- <img :src="firstList.picUrl" alt=""> -->
              </div>
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
//平台公告列表接口（缺）
import { noticeGetBeiliangNoticeList } from "../../service/getData";

export default {
  name: "notice-member",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      list: [],
      firstList: {},
      listLength: 5
    };
  },
  created() {
    //#待提供
    let parmas = {
      orgCode: this.$store.state.orgCode,
      pageSize: 20,
      startPage: 1
    };
    noticeGetBeiliangNoticeList(parmas).then(res => {
      if (res.returnCode === 200) {
        this.list = res.result.data;
        this.firstList = this.list[0];
      } else {
      }
    });
  },
  methods: {
    noticeDetail(id) {
      this.$router.push({ path: "/memberDetail", query: { id: id } });
    },
    memberDetail(id) {
      this.$router.push({ path: "/memberDetail", query: { id: id } });
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
    color: $color7;
    border-bottom: 1px solid $color8;
    font-family: "宋体";
  }
}
img {
  transition: 0.3s all ease;
}
img:hover {
  transform: scale(1.1);
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
        .img-out {
          width: 600px;
          height: 538px;
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
          z-index: 9;
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
  }
}

.news-notice {
  .notice-wrap {
    display: flex;
    justify-content: space-between;
    .news {
      width: 585px;
      cursor: pointer;
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
          margin-top: 21px;
          margin-bottom: 17px;
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
          @include ellipsis2(4);
          line-height: 24px;
          min-height: 100px;
          margin-bottom: 93px;
          font-size: 14px;
          &:hover {
            color: $color1;
          }
        }
      }
      ul {
        font-size: 14px;
        color: $color4;
        margin: 40px 0;
        li {
          margin-bottom: 4px;
          line-height: 30px;
          cursor: pointer;
          &:hover {
            color: $color1;
            i {
              background: $color1;
            }
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
</style>
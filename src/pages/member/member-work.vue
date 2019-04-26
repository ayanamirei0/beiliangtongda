<template>
  <div class="content" id="memberWork">
    <!-- 网上办事 -->
    <div
      class="part online"
      
    >
      <div class="title">
        <span>网上办事</span>
        <p>ONLINE WORK</p>
      </div>
      <div class="online-box">
        <div
          v-for="(item,index) in info.online"
          :key="index"
          @click='turnTo(item.type)'
        >
          <div class='on-content'>
            <span class='online-index'>{{index+1}}</span>
            <span class='online-title'>{{item.title}}</span>
            <div class="imgurl">
              <img :src="item.imgUrl">
            </div>
            <ul>
              <li
                v-for="(em,index) in item.list"
                :key="index"
                :onlineIndex='index'
                v-show='item.list.length>0'
                @click='onlineWork(index,item.type)'
              >
                <div class="clearfix">
                  <span :class="(index==0 && item.type=='zcl' ) ?'circle fl' : 'active-circle fl'"></span>
                  <span :class="(index==0 && item.type=='zcl') ? 'online-info fl' :'active-info fl'">{{em.title}}</span>
                  <span class="arrow fr"></span>
                </div>
              </li>
            </ul>
            <div
              v-show='item.list.length>0 ? false : true'
              class="noneImg"
            >
              <img
                :src="item.noneImg"
                id="noneImg"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userLogRecord } from "../../service/getData";

export default {
  name: "home-content",
  components: {},
  data() {
    return {
      name: "网上办事",
      info: {
        //网上办事
        online: [
          {
            type: "zcl",
            //资产类
            title: "资产类",
            imgUrl: require("../../assets/images/member/online1.png"),
            list: [
              {
                title: "资产使用计划表",
                type: "zcl_1"
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
            type: "zjl",
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
            type: "xzzhl",
            title: "行政综合类",
            imgUrl: require("../../assets/images/member/online3.png"),
            list: [],
            noneImg: require("../../assets/images/member/online6.png")
          },
          //Financial
          {
            type: "jrfwl",
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
        customerBeiliangId: "", //	北粮客户id
        customerId: "", //客户编号
        onlineIndex: "",
        onlineType: ""
      }
    };
  },
  created() {},
  methods: {
    //点击网上办事
    onlineWork(index, type) {
      this.onlineIndex = index;
      this.onlineType = type;
    },
    turnTo(type) {
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (!userInfo) {
        return;
      }
      let parmas = {
        customerBeiliangId: userInfo.id, //	北粮客户id
        type: type, //五大类 类型
        customerId: userInfo.customerId //客户编号
      };
      userLogRecord(parmas).then(res => {
        if (this.onlineIndex == 0 && this.onlineType == "zcl") {
          this.$router.push("/memberOnline");
        } else {
          this.$router.push("/empty");
        }
      });
    }
  },
  mounted() {},
  computed: {}
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
  padding: 0 0 125px 0;
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
.on-content {
  cursor: pointer;
}
.content {
  width: 1200px;
  padding-top:100px;
  margin: 0 auto 0;
}
.online {
  .online-box {
    display: flex;
    > div {
      flex: 1;
      position: relative;
      padding-left: 40px;
      padding-right: 40px;
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
      .imgurl {
        width: 180px;
        height: 200px;
        display: block;
        margin-bottom: 27px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }

        img {
          transition: 0.3s all ease;
        }
        img:hover {
          transform: scale(1.1);
        }
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
          .active-circle {
            background: #c29b73;
          }
          .active-info {
            color: #c29b73;
          }
          .arrow {
            background: url("../../assets/images/member/arrow_color.png")
              no-repeat 100% 100%;
          }
          .online-info {
            color: #c29b73;
          }
        }
      }
    }
  }
}
.noneImg {
  cursor: pointer;
  width: 100px;
  height: 90px;
  margin: 103px auto;
  img {
    display: block;
    width: 100px;
    height: 90px;
  }
}
</style>

<template>
  <header
    ref="header"
    @mouseover="enter"
    @mouseout="out"
  >
    <div class="head_nav">
        <router-link
        tag="a"
        to="/home"
        class="logo"
      >
        <img
          src="../assets/images/header/logo3.png"
          alt="logo"
          id="logo"
        >
      </router-link>
      <ul>
        <router-link
          tag="li"
          v-for="(item, index) in navList"
          :to="item.navPath"
          :key="index"
          :class="[navColor, index == currentIndex? 'active' : '']">
          <span>{{item.navName}}</span>
          <div
            v-if="item.sub"
            ref="navSecond"
            class="nav-second clearfix"
            @mouseenter="enter(item)"
            @mouseleave="out(item)"
          >
            <router-link
              v-for="(v, index) in item.sub"
              :key="index"
              :to="{ path: (v.router.indexOf('/')>-1) ? v.router : item.navPath, query: { id: v.router }}"
              @click.native="selectnav(v.router,item)"
            >
              <template v-if="v.text!='网上办事'">{{v.text}}</template>
              <template v-else><template v-if="isShow">{{v.text}}</template></template>
            </router-link>
          </div>
        </router-link>
      </ul>
      <div
        class="header-right-wrap"
        v-if="((currentIndex == 6) && !isShow)"
      >
        <span
          class="btn btn-left"
          @click="toLogin"
        >已有账号,马上登录</span>
        <span
          class="btn btngoback btn-right"
          @click="toBackHome"
        >返回北粮通达官网</span>
      </div>
      <div
        v-if="(!isShow) && (currentIndex != 6)"
        class="login-box"
      >
        <router-link
          tag="a"
          to="/register"
        >注册</router-link>
        <span>|</span>
        <router-link
          tag="a"
          to="/login"
        >登录</router-link>
      </div>
      <div
        class="noName"
        v-if="((currentIndex != 6) && isShow)"
      >
        <i></i>{{userName}}<span @click="popupShow = true" class="loginout">退出登录</span>
      </div>
    </div>
    <div
      class="mask"
      v-if="popupShow"
    ></div>
    <div
      class="popup"
      v-if="popupShow"
    >
      <i class="tips"></i>
      <p>退出登录？</p>
      <div>
        <span @click="logout">确定</span>
        <span @click="popupShow = false">取消</span>
      </div>
    </div>
  </header>
</template>
<script>
import { logout } from "../service/getData";

export default {
  props: {
    currentIndex: {
      type: Number,
      required: true
    },
    navColor: {
      type: String,
      required: true
    },
    isLogin: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      popupShow: false,
      userName: "",
      isShow:false,
      navList: [
        {
          navName: "首页",
          navPath: "home",
          sub: [
            {
              text: "业务布局",
              router: "business"
            },
            {
              text: "加盟合作",
              router: "join"
              //   router: "#business"
            },
            {
              text: "新闻中心",
              router: "news"
              //   router: "#business"
            },
            {
              text: "平台公告",
              router: "notice"
              //   router: "#business"
            }
          ]
        },
        {
          navName: "业务概览",
          navPath: "business",
          sub: [
            {
              text: "商业模式",
              router: "business1"
            },
            {
              text: "业务布局",
              router: "business"
            },
            {
              text: "业务目标",
              router: "business3"
            }
          ]
        },
        {
          navName: "会员中心",
          navPath: "member",
          sub: [
            {
              text: "平台公告",
              router: "memberNotice",
              isMao: true
            },
            {
              text: "加盟合作",
              router: "memberJoin",
              isMao: true
            },
            {
              text: "网上办事",
              router: "memberWork",
              isMao: true
            }
          ]
        },
        {
          navName: "新闻资讯",
          navPath: "news",
          sub: [
              {
                  text: "行业新闻",
                  router: "newIndustry"
              },
              {
                  text: "集团新闻",
                  router: 'newGroup'
              }
          ]
        },
        {
          navName: "关于北粮",
          navPath: "aboutUs",
          sub: [
            {
              text: "集团简介",
              router: "/aboutUs"
            },
            {
              text: "董事长寄语",
              router: "/chairman"
            },
            {
              text: "组织架构",
              router: "/structure"
            },
            {
              text: "发展愿景",
              router: "/prospect"
            },
            {
              text: "业务合作伙伴",
              router: "/partner"
            },
            {
              text:'投资利益相关方',
              router:'/emptyUs'
            }
          ]
        },
        {
          navName: "联系我们",
          navPath: "contactUs"
        }
      ]
    };
  },
  watch: {
    isLogin(val, newval) {
      // 调用函数
        this.loginDataDeal();
    }
  },
  created() {
    this.$nextTick(() => {
      this.getlocal();
    });
      this.loginDataDeal();
  },
  mounted() {
    this.$refs.navSecond.forEach(item => {
      item.style.width = `${this.windowWidth()}px`;
    });
    this.$nextTick(function() {
      window.addEventListener("scroll", this.handleScroll);
    });
    localStorage.removeItem("id");
    this.loginDataDeal();

  },
  methods: {
    //登录状态下的数据处理
    loginDataDeal() {
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (userInfo) {
        this.userName = userInfo.account;
          this.isShow = true
      }
    },
    //已有账号，去登录
    toLogin() {
      this.$router.push("/login/pwdLogin");
    },
    //返回首页
    toBackHome() {
      this.$router.push("/home");
    },
    windowWidth() {
      return document.compatMode == "CSS1Compat"
        ? document.documentElement.clientWidth
        : document.body.clientWidth;
    },
    getSearch() {
      this.$router.push("/search");
    },
    enter() {
      this.$refs.header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      this.$refs.navSecond.forEach(item => {
        item.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

        this.$refs.header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      });
      // if (item.sub) {
      //   this.$refs.header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      //   this.$refs.navSecond.forEach(item => {
      //     item.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      //   });
      // }
    },
    out() {
      // if (item.sub) {
      //   this.$refs.header.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      //   this.$refs.navSecond.forEach(item => {
      //     item.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      //   });
      // }
      this.$refs.header.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      this.$refs.navSecond.forEach(item => {
        item.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      });
    },
    logout() {
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      let userId = userInfo ? userInfo.id : "";

      logout(userId).then(res => {
        if (res.returnCode === 200) {
          localStorage.clear();
          sessionStorage.clear();
          this.popupShow = false;
          location.reload();
        } else {
          if (res.message != null && res.message.length > 0) {
            this.$message.error(res.message);
          }
        }
      });
    },
    selectnav(id) {
      let selectednav = id;
      if (this.$route.path == "/home") {
        localStorage.setItem("id", this.$route.query.id);
        this.handleScroll();
      } else {
        localStorage.setItem("id", selectednav);
        this.handleScroll();
      }
    },
    getlocal() {
      let select = localStorage.getItem("id");
      let anchorElement = document.getElementById(select);
      if (select) {
        // anchorElement.scrollIntoView()
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let select = localStorage.getItem("id");
      if (select) {
        if (select.indexOf("/") == -1 && document.querySelector("#" + select)) {
          let offsetTop = document.querySelector("#" + select).offsetTop;
          document.documentElement.scrollTop = offsetTop;
          window.removeEventListener("scroll", this.handleScroll);
        }
      }
    }
  }
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
.router-link-exact-active {
  border-bottom: 2px solid #fff;
  // color: #8f6448;
  width: 84px;
  a {
    color: #8f6448;
  }
  .orange {
    color: #906448;
  }
}
.header-right-wrap {
  width: 360px;
  margin-top: 23px;
  .btn {
    color: #ffffff;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 17px;
    cursor: pointer;
    width: 146px;
    height: 34px;
    line-height: 34px;
    border-radius: 17px;
    display: inline-block;
    text-align: center;
  }
  .btngoback{
    width:140px;
  }
  .btn-left {
    margin-right: 16px;
  }
}

header {
  width: 100%;
  // border-bottom: 1px solid #e0e0e0;
  position: fixed;
  z-index: 999;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2);
  // position: relative;
  .head_nav {
    width: 1200px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    #logo {
      width: 50px;
      height: 50px;
      margin-top: 15px;
    }
    ul {
      width: 80%;
      height: 100px;
      text-align: right;
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-size: 18px;
      height: 80px;
      line-height: 80px;
      li {
        // margin-right: 30px;
        width: 120px;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        color: $colorW;
        // position: relative;
        span {
          display: block;
        }
        .nav-second {
          position: absolute;
          width: 100%;
          top: 80px;
          left: 0;
          // height: 60px;
          line-height: 60px;
          display: none;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.3);
          a {
            padding: 20px 40px;
            // float:left;
            color: #fff;
            line-height: 60px;
            &:hover {
              color: #c29b73;
            }
          }
        }
        &.active {
          // border-bottom: 2px solid rgba(143, 100, 72, 1);
          border-bottom: 2px solid #fff;
          // color: #8f6448;
          width: 84px;
          a {
            color: #8f6448;
          }
          .orange {
            color: #906448;
          }
        }
        &:hover {
          // border-bottom: 2px solid rgba(143, 100, 72, 1);
          color: #c29b73;
          a {
            color: #fff;
          }
          .nav-second {
            display: block;
            color: #fff;
          }
        }
      }
    }
    .login-box {
      height: 100px;
      line-height: 100px;
      cursor: pointer;
      text-align: center;
      color: $colorW;
      font-size: 18px;
      a {
        color: $colorW;
      }
      span {
        margin: 0 10px;
      }
    }
    .noName {
      // line-height: 30px;
      padding: 27px 0 0 24px;
      cursor: pointer;
      text-align: left;
      color: $colorW;
      font-size: 18px;
      position: relative;
      width: 160px;
      &:hover {
        color: $color1;
        height: 160px;
        span {
          display: block;
          text-align: center
        }
        i {
          background: url("../assets/images/home/user_jin.png") left center
            no-repeat;
          background-size: 100% 100%;
        }
      }
      i {
        position: absolute;
        left: 0;
        top: 0;
        width: 21px;
        height: 21px;
        margin-top: 30px;
        background: url("../assets/images/home/user_bai.png") left center
          no-repeat;
        background-size: 100% 100%;
      }
      span {
        position: absolute;
        left: 0;
        top: 80px;
        height: 80px;
        line-height: 80px;
        width: 160px;
        background-color: rgba(0, 0, 0, 0.7);
        display: none;
      }
    }
  }
}
.popup {
  @include center;
  position: fixed;
  background-color: #fff;
  width: 320px;
  height: 166px;
  // border: 2px solid red;
  text-align: center;
  p {
    margin: 55px auto 30px;
    font-size: 16px;
    color: #333;
  }
  span {
    width: 116px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    cursor: pointer;
    border: 1px solid rgba(226, 226, 226, 1);
    border-radius: 4px;
    font-size: 14px;
    &:nth-child(1) {
      margin-right: 10px;
      background-color: $color1;
      border-color: $color1;
      color: $colorW;
    }
  }
  .tips {
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: url("../assets/images/home/tip.png") left center no-repeat;
    background-size: 100% 100%;
    left: 50%;
    margin-left: -25px;
    top: -25px;
  }
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

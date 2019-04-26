<template>
  <div class="wrap">
    <div class="mid-content">
      <div class="header">
        <div class="logo">
          <img @click="toBackHome" src="../../assets/images/header/logo.png">
        </div>
        <div class="header-right-wrap">
          <span class="btn btn-left" v-show="false" @click="toLogin">已有账号,马上登录</span>
          <span class="btn btn-right"  @click="toBackHome">返回北粮通达官网</span>
        </div>
      </div>
      <div class="content">
        <p>
          <img class="login-logo" src="../../assets/images/login/login_logo.png">
        </p>
        <div class="content-login">
          <div>
            <login-segment @activeIndex="selectedAction"></login-segment>
            <router-view
              @toForgotPwdPath="toForgotPwdPath"
              @toForgotPwdNextPath="toForgotPwdNextPath"
              @toFaceScanSuccess="faceScanSuccess"
              @toFaceScanFail="faceScanFail"
              @toFindPwdSuccess="toLogin"
              @toAgainScan="againToScan"
            ></router-view>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <FooterLogin></FooterLogin>
    </div>
  </div>
</template>]

<script>
import loginSegment from "../../components/login/LoginSegment";
import pwdLogin from "../../components/login/PwdLogin";
import codeLogin from "../../components/login/CodeLogin";
import qrcodeLogin from "../../components/login/QrcodeLogin";
import faceScanLogin from "../../components/login/FaceScanLogin";
import FooterLogin from "../../components/FooterLogin";

export default {
    name: "login",
    components: {
        loginSegment,
        pwdLogin,
        codeLogin,
        qrcodeLogin,
        faceScanLogin,
        faceScanLogin,
        FooterLogin
    },
    data() {
        return {
            isShowTopAccoutBtn:false
        };
    },
    methods: {
        //第一步
        toForgotPwdPath() {
            this.isShowTopAccoutBtn = true
            this.$router.replace("/login/stepOne");
        },
        //第二步
        toForgotPwdNextPath() {
            this.isShowTopAccoutBtn = true
            this.$router.replace("/login/stepTwo");
        },
        //人脸识别成功
        faceScanSuccess() {
            this.$router.replace("/login/faceScanSuccess");
        },
        //人脸识别失败
        faceScanFail() {
            this.$router.replace("/login/faceScanFail");
        },
        //选择切换登录方式
        selectedAction(index) {
            switch (index) {
                case 0:
                    this.$router.replace("/login/pwdLogin");
                    break;
                case 1:
                    this.$router.replace("/login/qrcodeLogin");
                    break;
                case 2:
                    this.$router.replace("/login/codeLogin");
                    break;
                case 3:
                    this.$router.replace("/login/faceScanLogin");
                    break;
                default:
                    break;
            }
        },
        //人脸识别失败，再次识别
        againToScan() {
            this.$router.replace("/login/faceScanLogin");
        },
        //已有账号，去登录
        toLogin() {
            this.isShowTopAccoutBtn = false
            this.$router.replace("/login/pwdLogin");
        },
        //返回首页
        toBackHome() {
            this.$router.replace("/home");
        }
    },
    mounted() {
    },
    destroyed() {
        sessionStorage.removeItem("account")
        sessionStorage.removeItem("password")
        sessionStorage.removeItem("mobile")
        sessionStorage.removeItem("code")
        location.reload()
    }

};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin";

.wrap {
  width: 100%;
  height: 100vh;
  min-width: 1200px;
  min-height: 600px;
  background: url("../../assets/images/login/login-bg.jpg") no-repeat left top;
  background-size: cover;
  position: relative;
  .mid-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    max-width: 1200px;
    min-height: 600px;
    justify-content: space-between;
    margin: 0 auto;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 80px;
      max-height: 100px;
      .logo {
        cursor: pointer;
        min-width:50px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .header-right-wrap {
        .btn {
          color: #ffffff;
          font-size: 14px;
          background: rgba(0, 0, 0, 0.1);
          padding: 10px 11px;
          border-radius: 17px;
          cursor: pointer;
        }
        .btn-left {
          margin-right: 20px;
        }
      }
    }
    .content {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      min-height: 550px;
      > p {
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        align-self: center;
        .login-logo {
          width: 40%;
        }
      }
      .content-login {
        flex: 1;
        display: flex;
        align-items: center;
        > div {
          width: 100%;
          height: 55vh;
          min-height: 480px;
          max-height: 670px;
          display: flex;
          flex-direction: row;
        }

        // padding-right: 30%;
        .segment-wrap {
          width: 13%;
          min-width: 100px;
          min-height: 480px;
          max-height: 670px;
        }
        .pwdLoginWrap,
        .codeLoginWrap,
        .faceLoginWrap,
        .stepWrap,
        .stepOneWrap,
        .stepTwoWrap,
        .faceScanFailWrap,
        .faceScanSuccessWrap {
          width: 40%;
          min-width: 350px;
          height: 100%;
          min-height: 480px;
          max-height: 670px;
          padding: 40px 50px 20px 40px;
        }
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
}
</style>%

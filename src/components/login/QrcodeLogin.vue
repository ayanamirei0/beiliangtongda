<template>
  <div class="codeLoginWrap">
    <div class="content">
      <p class="title">微信二维码登录</p>
      <div id="qr-img"></div>
      <div class="fooer">
        <span class="footer-btn" @click="forgotPwd">忘记密码</span>
        <span class="midLine">|</span>
        <span class="footer-btn" @click="toRegist">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QrcodeLogin",
  data() {
    return {};
  },
  methods: {
    //实例化微信扫码登录对象 - 生产环境
    setWxQrLoginProduct() {
      var obj = new WxLogin({
        id: "qr-img",
        appid: "wx1420f3fba7e5e2e6",
        scope: "snsapi_login",
        redirect_uri: encodeURIComponent("http://0.0.0.0:8089"),
        state: Math.ceil(Math.random() * 1000),
        style: "black",
        href:
          "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7bWFyZ2luLXRvcDogMjBweDsgaGVpZ2h0OiAxOTBweDsgd2lkdGg6IDE5MHB4OyBib3JkZXI6IG5vbmU7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjIwcHg7fQ0KLnN0YXR1c19pY29uIHttYXJnaW4tdG9wOiAtMTBweDsgZGlzcGxheTogbm9uZTt9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjNzM3Qzg0O30NCi5pbXBvd2VyQm94IC5zdGF0dXNfc3VjYyAuc3RhdHVzX3R4dCBwIHtjb2xvcjojMzMzMzMzOyB0b3A6IDEwcHg7IGZvbnQtc2l6ZTogMTRweDt9DQouaW1wb3dlckJveCAuc3RhdHVzX3N1Y2MgLnN0YXR1c190eHQgaDQge2ZvbnQtc2l6ZTogMTNweDtkaXNwbGF5OiBub25lO30NCg=="
      });
    },
      // cbsadmin.zhengheht.com
      //实例化微信扫码登录对象 - 准生产环境
      setWxQrLoginPrep() {
          var obj = new WxLogin({
              id: "qr-img",
              appid: "wxe4ef619a75c68d3d",
              scope: "snsapi_login",
              redirect_uri: encodeURIComponent("http://0.0.0.0:8089"),
              state: Math.ceil(Math.random() * 1000),
              style: "black",
              href:
                  "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7bWFyZ2luLXRvcDogMjBweDsgaGVpZ2h0OiAxOTBweDsgd2lkdGg6IDE5MHB4OyBib3JkZXI6IG5vbmU7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjIwcHg7fQ0KLnN0YXR1c19pY29uIHttYXJnaW4tdG9wOiAtMTBweDsgZGlzcGxheTogbm9uZTt9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjNzM3Qzg0O30NCi5pbXBvd2VyQm94IC5zdGF0dXNfc3VjYyAuc3RhdHVzX3R4dCBwIHtjb2xvcjojMzMzMzMzOyB0b3A6IDEwcHg7IGZvbnQtc2l6ZTogMTRweDt9DQouaW1wb3dlckJveCAuc3RhdHVzX3N1Y2MgLnN0YXR1c190eHQgaDQge2ZvbnQtc2l6ZTogMTNweDtkaXNwbGF5OiBub25lO30NCg=="
          });
      },
      //实例化微信扫码登录对象 - 测试环境
      setWxQrLoginTest() {
          var obj = new WxLogin({
              id: "qr-img",
              appid: "wxcd3764ec1f214e24",
              scope: "snsapi_login",
              redirect_uri: encodeURIComponent("http://northofficial.zhengheht.com"),
              state: Math.ceil(Math.random() * 1000),
              style: "black",
              href:
                  "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7bWFyZ2luLXRvcDogMjBweDsgaGVpZ2h0OiAxOTBweDsgd2lkdGg6IDE5MHB4OyBib3JkZXI6IG5vbmU7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjIwcHg7fQ0KLnN0YXR1c19pY29uIHttYXJnaW4tdG9wOiAtMTBweDsgZGlzcGxheTogbm9uZTt9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjNzM3Qzg0O30NCi5pbXBvd2VyQm94IC5zdGF0dXNfc3VjYyAuc3RhdHVzX3R4dCBwIHtjb2xvcjojMzMzMzMzOyB0b3A6IDEwcHg7IGZvbnQtc2l6ZTogMTRweDt9DQouaW1wb3dlckJveCAuc3RhdHVzX3N1Y2MgLnN0YXR1c190eHQgaDQge2ZvbnQtc2l6ZTogMTNweDtkaXNwbGF5OiBub25lO30NCg=="
          });
      },
    //忘记密码
    forgotPwd() {
      this.$emit("toForgotPwdPath");
    },
    //注册
    toRegist() {
      this.$router.push("/register");
    }
  },
  mounted() {
    this.setWxQrLoginTest();
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";

.codeLoginWrap {
  position: relative;
  background: rgba(255, 255, 255, 0.85);
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      padding-bottom: 10px;
      font-size: 28px;
      color: $titleColor;
      box-sizing: border-box;
    }
    #qr-img {
      align-self: center;
    }
    .fooer {
      position: absolute;
      bottom: 20px;
      align-self: center;
      font-size: 14px;
      text-align: center;
      line-height: 14px;
      color: $textColor;
      .footer-btn {
        cursor: pointer;
      }
      .midLine {
        height: 14px;
        line-height: 14px;
        padding: 0 8px;
      }
    }
  }

}
</style>

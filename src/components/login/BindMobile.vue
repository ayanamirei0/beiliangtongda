<template>
  <div>
    <Header :currentIndex="6" navColor="#333"></Header>
    <div class="banner"></div>
    <div class="verifyPhoneWrap">
      <Title title="绑定手机号"></Title>
      <div class="fromBox">
        <el-input :maxlength="11" placeholder="请填写常用手机号" @focus="errPhone=''" v-model="phone">
          <template slot="prepend">中国+86</template>
          <i v-if="this.noThisPhone" class="el-icon-success el-input__icon" slot="suffix"></i>
        </el-input>
        <p class="err errPhone">&nbsp;{{errPhone}}&nbsp;</p>
        <el-input
          v-if="showVerifyCodeInput"
          :maxlength="4"
          @focus="errCode=''"
          placeholder="请输入验证码"
          v-model="verifyCode"
        >
          <template slot="prepend">手机验证码</template>
          <el-button
            slot="append"
            :class="{ disabled: !canClick }"
            @click="verifyCodeBtnState"
          >{{ verifyCodeText }}</el-button>
        </el-input>
        <p
          v-else
          class="verifyCodeBtn"
          :class="{ disabled: !(phoneReg.test(phone)) }"
          @click="verifyCodeBtnState"
        >点击按钮进行验证</p>
        <p class="err errCode">&nbsp;{{errCode}}&nbsp;</p>

        <el-checkbox class="agreement" @change="errChecked=''" v-model="checked">
          我已阅读并接受
          <router-link to="/">《用户协议》</router-link>
        </el-checkbox>
        <p class="err errChecked">&nbsp;{{errChecked}}&nbsp;</p>

        <el-button class="nextBtn" @click="nextStep">提交</el-button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Title from "../../components/register/title";
import {
  verificationPhoneAndOpendId,
  getCode,
  phoneLogin
} from "../../service/getData";

export default {
  data() {
    return {
      openId: "",

      phone: "", // 手机号
      noThisPhone: false,
      phoneReg: /^1\d{10}$/, //  手机号正则
      errPhone: "", // 手机输入框错误提示信息

      verifyCode: "", // 验证码
      errCode: "", // 验证码错误提示信息

      showVerifyCodeInput: false, //  是否展示验证码input输入框

      verifyCodeText: "重新获取", //  重新获取

      totalTime: 60, //  倒计时

      canClick: true, // 获取验证码按钮是否可点

      checked: true, //  是否阅读并接受用户协议
      errChecked: ""
    };
  },
  components: {
    Header,
    Footer,
    Title
  },
  created() {
    this.openId = sessionStorage.openId || "";
  },
  mounted() {},
  methods: {
    verificationPhoneAndOpendId() {
      //  微信登录后验证手机号是否已经注册
      verificationPhoneAndOpendId(
        this.phone,
        this.verifyCode,
        this.openId
      ).then(res => {
        if (res.returnCode == 200) {
          //  去登录

          sessionStorage.setItem("userInfo", JSON.stringify(res.result));
          this.$router.replace("/home");
        } else if (res.returnCode == 1008) {
          //  去注册
          let params = {
            phone: this.phone,
            openid: this.openId,
          };

          sessionStorage.registerParams = JSON.stringify(params);

          this.$router.push({ path: '/register/accountInfo', query: { type: '1' }});
        } else {
          if (res.message != null && res.message.length > 0) {
            this.$message.error(res.message);
          }
        }
      });
    },
    getCode() {
      // 获取验证码接口
      getCode(this.phone).then(res => {
        if (res.returnCode === 200) {
          //  验证码获取成功
          this.countDown();
          this.showVerifyCodeInput = true;
        } else {
          //  验证码获取失败
          this.errCode = res.message;
        }
      });
    },
    countDown() {
      if (!this.canClick) return; //改动的是这两行代码
      this.canClick = false;
      this.verifyCodeText = this.totalTime + "S";
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.verifyCodeText = this.totalTime + "S";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.verifyCodeText = "重新获取";
          this.totalTime = 60;
          this.canClick = true; //这里重新开启
        }
      }, 1000);
    },
    verifyCodeBtnState() {
      if (this.phone) {
        if (this.phoneReg.test(this.phone)) {
          //  获取验证码
          if (!this.canClick) return;
          this.getCode();
        } else {
          //  手机号码格式不正确
          this.errPhone = "手机号码格式不正确";
        }
      }
    },
    nextStep() {
      if (!this.phone) {
        //  手机号码不能为空
        this.errPhone = "手机号码不能为空";
      } else if (!this.phoneReg.test(this.phone)) {
        //  手机号码格式不正确
        this.errPhone = "手机号码格式不正确";
      } else if (!this.verifyCode) {
        // 验证码不能为空
        this.errCode = "验证码不能为空";
      } else if (!this.checked) {
        // 请勾选
        this.errChecked = "请查阅并同意《用户协议》内容";
      } else {
        this.verificationPhoneAndOpendId();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";

.banner {
  height: 500px;
  min-width: 1200px;
  background: url('../../assets/images/register_banner.png') no-repeat center center;
  background-size: cover;
}

.verifyPhoneWrap {
  min-width: 1200px;
  padding-bottom: 60px;
  background-color: $bgColor;

  .fromBox {
    margin: 0 auto;
    width: 440px;
    .err {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      text-align: center;
      color: $subRedColor;
    }
    .verifyCodeBtn {
      // margin-top: 30px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 14px;
      color: $titleColor;
      border: 1px solid $borderLineDisabledColor;
      background-color: $anitColor;
      cursor: pointer;
      &.disabled {
        color: $tipsColor;
      }
    }
    .agreement {
      a {
        color: $mainColor;
      }
    }
    .nextBtn {
      margin-top: 30px;
      padding: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      border-radius: 4px;
      color: $anitColor;
      background-color: $mainColor;
      &:active {
        border-color: $mainColor;
      }
    }
  }
}
</style>

<style lang="scss">
@import "../../common/style/mixin.scss";
.verifyPhoneWrap {
  input::-webkit-input-placeholder {
    color: $tipsColor;
    font-size: 14px;
  }

  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: $tipsColor;
    font-size: 14px;
  }

  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: $tipsColor;
    font-size: 14px;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $tipsColor;
    font-size: 14px;
  }
  .el-input-group {
    border: 1px solid $borderLineDisabledColor;
    border-radius: 0;
    .el-input-group__prepend {
      position: relative;
      padding: 0;
      width: 140px;
      font-size: 14px;
      color: $titleColor;
      background-color: $anitColor;
      border: 0;
      text-align: center;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        display: inline-block;
        width: 1px;
        height: 30px;
        background-color: $bgColor;
      }
    }
    .el-input__inner {
      padding: 0 30px;
      font-size: 14px;
      color: $titleColor;
      height: 50px;
      line-height: 50px;
      border: 0;
    }
    .el-input__inner:focus {
      border-color: $mainColor;
    }
    .el-input-group__append {
      position: relative;
      background-color: #fff;
      border: 0;
      font-size: 14px;
      color: $titleColor;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        display: inline-block;
        width: 1px;
        height: 30px;
        background-color: $bgColor;
      }
      .disabled {
        color: $tipsColor;
      }
    }
    &.el-input--suffix .el-input__inner {
      padding-right: 80px;
    }
    .el-input__icon {
      width: 50px;
    }
    .el-input__suffix {
      color: $subGreenColor;
    }
  }
  .el-button {
    padding: 0 50px;
  }
  .el-checkbox__inner {
    background-color: $mainColor;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-focus .el-checkbox__inner {
    background-color: $mainColor;
    border-color: $mainColor;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label,
  .el-checkbox {
    color: $titleColor;
  }
}
</style>

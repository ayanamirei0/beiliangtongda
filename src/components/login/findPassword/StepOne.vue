<template>
  <div class="stepOneWrap">
    <p class="title">找回密码</p>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item ref="accountForm" prop="account">
        <p>请输入手机号</p>
        <el-input @focus="toNone('accountForm')" v-model="ruleForm.account"></el-input>
      </el-form-item>
      <div class="slider">
        <p>请按住滑块,拖动到最右边</p>
        <slide-confirm @confirmSuccess="confirmSuccess" :is-able-move="true"></slide-confirm>
      </div>
      <el-form-item ref="codeForm" class="verifyCodeWrap" v-show="isShowBottomView" prop="code">
        <p>请输入验证码</p>
        <el-input @focus="toNone('codeForm')" :maxlength="4" v-model="ruleForm.code"></el-input>
        <el-button :class="{ disabled: !canClick }" @click="verifyCodeBtnState">{{ verifyCodeText }}</el-button>
      </el-form-item>
      <el-form-item class="nextBtnWrap">
        <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import slideConfirm from "../SlideConfirm";
import { getCode,findUserByPhone} from "../../../service/getData";

export default {
  name: "StepOne",
  computed: {
    accountErrors: function() {
      let status;

      if (this.ruleForm.account === "") {
        status = false;
      } else if (/^1\d{10}$/.test(this.ruleForm.account)) {
        status = true;
      } else {
        status = false;
      }
      return status;
    }
  },
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (/^1\d{10}$/.test(value)) {
        callback();
      } else {
        callback(new Error("格式不正确"));
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      totalTime: 60, //  倒计时
      canClick: true, // 获取验证码按钮是否可点
      verifyCodeText: "发送验证码",
      isShowBottomView: false,
      ruleForm: {
        account: "",
        code: ""
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      }
    };
  },
  components: {
    slideConfirm
  },
  methods: {
      toNone(formName){
          this.$refs[formName].resetField();
      },
    countDown() {
      this.canClick = false;
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.verifyCodeText = this.totalTime + "S";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.verifyCodeText = "重新获取";
          this.totalTime = 5;
          this.canClick = true; //这里重新开启
        }
      }, 1000);
    },
    verifyCodeBtnState() {
      if (this.accountErrors) {
          if (!this.canClick) return;

          var _this = this
          getCode(this.ruleForm.account).then(res => {
              if (res.returnCode === 200) {
                  _this.countDown();
              } else {
              }
          });
      }
    },
    //滑动验证成功
    confirmSuccess() {
        this.isShowBottomView = true;

      //   let _this = this
      // //掉接口验证
      //   findUserByPhone(this.ruleForm.account).then(res => {
      //       if (res.returnCode === 200) {
      //           _this.isShowBottomView = true;
      //       } else {
      //
      //       }
      //   });
    },
    //下一步点击事件
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.isShowBottomView) {
              sessionStorage.setItem("mobile", this.ruleForm.account);
              sessionStorage.setItem("code", this.ruleForm.code);
              this.$emit("toForgotPwdNextPath");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../common/style/mixin.scss";
.stepOneWrap {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.85);
  .title {
    padding-bottom: 10px;
    font-size: 28px;
    color: $titleColor;
    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
@import "../../../common/style/mixin.scss";
.stepOneWrap {
  .slider {
    margin-bottom: 22px;
    p {
      font-size: 14px;
      color: $textWeakColor;
      line-height: 35px;
    }
  }

  .slider {
    .drag {
      height: 40px;
      line-height: 40px;
      //   background-color: $anitColor;
    }
    .drag_bg {
      height: 40px;
      line-height: 40px;
      //   background-color: $anitColor;
    }
    .handler {
      width: 40px;
      height: 40px;
      color: $anitColor;
      background-color: $mainColor;
      border-color: $mainColor;
    }
  }

  .el-form {
    flex: 1;
    .el-form-item__content {
      text-align: center;
      p {
        text-align: left;
        font-size: 14px;
        color: $textWeakColor;
        line-height: 35px;
      }
      .el-checkbox {
        width: 100%;
        text-align: left;
      }
      .el-checkbox__label {
        color: $mainColor;
      }
      .el-checkbox__inner,
      .el-checkbox__input.is-focus .el-checkbox__inner,
      .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: $mainColor;
        border-color: $mainColor;
        border-radius: 1px;
        width: 14px;
        height: 14px;
      }
      .el-checkbox__input.is-checked + .el-checkbox__label,
      .el-checkbox__label {
        font-size: 14px;
        color: $titleColor;
      }
      .el-button {
        padding: 0 40px;
        height: 40px;
        line-height: 40px;
        border: 0;
        border-radius: 0;
        background-color: $mainColor;
      }
    }
    .el-input {
      .el-input__inner {
        height: 40px;
        line-height: 40px;
        border: 0;
        border-radius: 0;
      }
    }
    .verifyCodeWrap {

      .el-form .el-form-item__content p {
        line-height: 30px;
      }
      .el-form-item__content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        span{
          color: $anitColor;
        }
        p {
          width: 100%;
        }
        .el-input {
          width: 60%;
        }
        .el-button {
          padding: 0;
          width: 40%;
        }
      }
    }
    .nextBtnWrap {
      margin-top: 30px;
      text-align: center;
    }
    .el-button {
      padding: 0 40px;
      height: 40px;
      line-height: 40px;
      border: 0;
      border-radius: 0;
      background-color: $mainColor;
    }
  }
}
</style>

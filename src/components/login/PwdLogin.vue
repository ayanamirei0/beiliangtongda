<template>
  <div class="pwdLoginWrap">
    <div class="content">
      <p class="title">登录您的账号</p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item ref="accountForm" prop="account">
          <p>请输入账号</p>
          <el-input @focus="toNone('accountForm')" type="text" maxlength="20" v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item ref="passwordForm" prop="password">
          <p>请输入密码</p>
          <el-input @focus="toNone('passwordForm')" type="password" maxlength="18" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="type">
          <el-checkbox label="下次自动登录" v-model="ruleForm.type"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="fooer">
        <span class="footer-btn" @click="forgotPwd">忘记密码</span>
        <span class="midLine">|</span>
        <span class="footer-btn" @click="toRegist">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import { pwdLogin } from "../../service/getData";

export default {
  name: "PwdLogin",
  data() {
      var validateAccount = (rule, value, callback) => {
          if (value === "") {
              callback(new Error("请输入账号"));
          } else if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/.test(value) || /^(?![a-zA-Z]+$)(?![\u4E00-\uFA29]+$)[a-zA-Z\u4E00-\uFA29]{4,20}$/
              .test(value) || /^(?![0-9]+$)(?![\u4E00-\uFA29]+$)[0-9\u4E00-\uFA29]{4,20}$/.test(value)) {
              callback();
          } else {
              callback(new Error("账号格式不正确"));
          }
      };
    return {
      ruleForm: {
        account: "",
        password: "",
        type: false
      },
      rules: {
          account: [
              {validator: validateAccount, trigger: "blur"}
          ],
          password: [
              {required: true, message: "请输入密码", trigger: "blur"},
              {
                  pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/,
                  message: "密码格式错误",
                  trigger: "blur"
              }
          ]
      }
    };
  },
  created() {

  }  ,
  methods: {
      toNone(formName){
          this.$refs[formName].resetField();
      },
    //登录点击事件
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            this.toLoadLogin(this.ruleForm.account,this.ruleForm.password)
        } else {
          return false;
        }
      });
    },
    //忘记密码
    forgotPwd() {
      this.$emit("toForgotPwdPath");
    },
    //注册
    toRegist() {
      this.$router.push("/register");
    },
      toLoadLogin(account, password) {
          pwdLogin(account, password).then(res => {
              if (res.returnCode === 200) {
                  if(this.ruleForm.type) {
                      localStorage.setItem("autoLogin", 'true');
                      localStorage.setItem("account", account);
                      localStorage.setItem("password", password);
                  }
                  this.saveUserLoginData(res)
                  this.$router.replace("/home");
              } else {
                  if (res.message != null && res.message.length > 0) {
                      this.$message.error(res.message);
                  }
              }
          });
      },
      //登录成功后保存本地数据
      saveUserLoginData(res) {
          let result = res.result;
          sessionStorage.removeItem("userInfo")
          sessionStorage.setItem("userInfo", JSON.stringify(result));
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";

.pwdLoginWrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .title {
      padding-bottom: 10px;
      font-size: 28px;
      color: $titleColor;
    }
    .fooer {
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

<style lang="scss">
@import "../../common/style/mixin.scss";
.pwdLoginWrap {
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
  }
}
</style>


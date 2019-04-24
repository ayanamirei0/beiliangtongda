<template>
  <div>
    <div class="crumbsWrap">注册 > 账号信息</div>
    <Progress :currentStep="2"></Progress>
    <div class="accountInfoWrap">
      <Title title="账号信息"></Title>
      <div class="formBox">
        <el-input @focus="errAccount=''" @blur="accountBlur" :maxlength="20" placeholder="您的账户和登录名" v-model="account">
          <template slot="prepend">用户名</template>
        </el-input>
        <p class="tips" v-if="errAccount==''"></p>
        <p class="err" v-else>{{ errAccount }}</p>

        <el-input
          type="password"
          @focus="errPassword=''"
          @blur="passwordBlur"
          :maxlength="20"
          placeholder="建议使用两种或两种以上字符组合"
          v-model="password"
        >
          <template slot="prepend">设置密码</template>
        </el-input>
        <p class="tips" v-if="errPassword==''"></p>
        <p class="err" v-else>{{ errPassword }}</p>

        <el-input
          type="password"
          @focus="errRepeatPassword=''"
          @blur="repeatPasswordBlur"
          :maxlength="20"
          placeholder="请再次输入密码"
          v-model="repeatPassword"
        >
          <template slot="prepend">确认密码</template>
        </el-input>
        <p class="tips" v-if="errRepeatPassword==''"></p>
        <p class="err" v-else>{{ errRepeatPassword }}</p>

        <el-button class="nextBtn" @click="nextStep">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "../../components/register/progress";
import Title from "../../components/register/title";
import { findUserByAccount } from "../../service/getData";

export default {
  data() {
    return {
      account: "",
      accountReg1: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/, //数字和字母
      accountReg2: /^(?![a-zA-Z]+$)(?![\u4E00-\uFA29]+$)[a-zA-Z\u4E00-\uFA29]{4,20}$/, //字母和中文
      accountReg3: /^(?![0-9]+$)(?![\u4E00-\uFA29]+$)[0-9\u4E00-\uFA29]{4,20}$/, //中文和数字
      errAccount: "",

      password: "",
      passwordReg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/,
      errPassword: "",

      repeatPassword: "",
      errRepeatPassword: ""
    };
  },
  components: {
    Progress,
    Title
  },
  beforeRouteLeave(to, from, next) {
    if(to.path == "/register"){
      this.$router.go(-2);
      // next(sessionStorage.toRegisterUrl);
    } else {
      next();
    }
  },
  methods: {
    findUserByAccount() {
      //  根据账户查询用户是否存在
      findUserByAccount(this.account).then(res => {
        if (res.returnCode === 200) {
          //  此用户名已存在
          this.errAccount = "此用户名已存在";
        } else {
          //  此用户名不存在
          if (res.massage === "账号不能为空") {
            this.errAccount = res.massage;
          } else {
            let params = {
              account: this.account,
              password: this.password,
              confirmPassword: this.repeatPassword,
              ...JSON.parse(sessionStorage.registerParams || "{}")
            };

            sessionStorage.registerParams = JSON.stringify(params);

            let type = this.$route.query.type || "";
            if (type == 1) {
              this.$router.replace({
                path: "/register/personalInfo",
                query: { type: "1" }
              });
            } else {
              this.$router.replace("/register/personalInfo");
            }
          }
        }
      });
    },
    accountBlur() {
      let flag = true;
      if (!this.account) {
        //  用户名不能为空
        this.errAccount = "用户名不能为空";
        flag = false;
      } else if (
        !this.accountReg1.test(this.account) &&
        !this.accountReg2.test(this.account) &&
        !this.accountReg3.test(this.account)
      ) {
        //  用户名格式不正确
        this.errAccount = "用户名格式不正确";
        flag = false;
      }
      return flag;
    },
    passwordBlur() {
      let flag = true;
      if (!this.password) {
        //  密码不能为空
        this.errPassword = "密码不能为空";
        flag = false;
      } else if (!this.passwordReg.test(this.password)) {
        //  密码格式不正确
        this.errPassword = "密码格式不正确";
        flag = false;
      }
      return flag;
    },
    repeatPasswordBlur() {
      let flag = true;
      if (!this.repeatPassword) {
        //  请再次输入密码
        this.errRepeatPassword = "请再次输入密码";
        flag = false;
      } else if (this.repeatPassword !== this.password) {
        //  两次密码不一致
        this.errRepeatPassword = "两次密码不一致";
        flag = false;
      }
      return flag;
    },
    verify() {
      let flag = true;
      if(!this.accountBlur()){
        flag = false;
      }
      if(!this.passwordBlur()){
        flag = false;
      }
      if(!this.repeatPasswordBlur()){
        flag = false;
      }
      return flag;
    },
    nextStep() {
      if (this.verify()) {
        this.findUserByAccount();
      }
      // if (!this.account) {
      //   //  用户名不能为空
      //   this.errAccount = "用户名不能为空";
      // } else if (!this.accountReg1.test(this.account)&&!this.accountReg2.test(this.account)&&!this.accountReg3.test(this.account)) {
      //   //  用户名格式不正确
      //   this.errAccount = "用户名格式不正确";
      // } else if (!this.password) {
      //   //  密码不能为空
      //   this.errPassword = "密码不能为空";
      // } else if (!this.passwordReg.test(this.password)) {
      //   //  密码格式不正确
      //   this.errPassword = "密码格式不正确";
      // } else if (!this.repeatPassword) {
      //   //  请再次输入密码
      //   this.errRepeatPassword = "请再次输入密码";
      // } else if (this.repeatPassword !== this.password) {
      //   //  两次密码不一致
      //   this.errRepeatPassword = "两次密码不一致";
      // } else {
      //   //  下一步
      //   this.findUserByAccount();
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";
.accountInfoWrap {
  padding-bottom: 50px;
  background-color: $bgColor;

  .formBox {
    margin: 0 auto;
    width: 440px;
    .tips {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: $tipsColor;
    }
    .err {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      text-align: center;
      color: $subRedColor;
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
.accountInfoWrap {
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
        top: 15px;
        right: 0;
        display: inline-block;
        width: 1px;
        height: 20px;
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
    &.hover {
      border-color: $mainColor !important;
    }
  }
}
</style>

<template>
    <div class="stepTwoWrap">
        <p class="title">找回密码</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item ref="newPasswordForm" prop="newPassword">
                <p>请输入新密码</p>
                <el-input @focus="toNone('newPasswordForm')" type="password" v-model="ruleForm.newPassword"></el-input>
            </el-form-item>
            <el-form-item ref="nextNewPasswordForm" prop="nextNewPassword">
                <p>请再次输入新密码</p>
                <el-input @focus="toNone('nextNewPasswordForm')" type="password" v-model="ruleForm.nextNewPassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">完成</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { forgetPwd } from "../../../service/getData";

    export default {
        name: "StepTwo",
        data() {
            var validateNewPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(value)) {
                    callback();
                } else {
                    callback(new Error('密码格式不正确'));
                }
            };
            var validateNextNewPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入新密码'));
                }else if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(value)
                    && this.ruleForm.newPassword === this.ruleForm.nextNewPassword) {
                    callback();
                }  else {
                    callback(new Error('两次输入密码不一致'));
                }
            };
            return {
                ruleForm: {
                    newPassword: '',
                    nextNewPassword: ''
                },
                rules: {
                    newPassword: [
                        {validator: validateNewPassword, trigger: 'blur'}
                    ],
                    nextNewPassword: [
                        {validator: validateNextNewPassword, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            toNone(formName){
                this.$refs[formName].resetField();
            },
            //完成点击事件
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let mobile =  sessionStorage.getItem("mobile")
                        let code =  sessionStorage.getItem("code")
                        forgetPwd(this.ruleForm.newPassword,this.ruleForm.nextNewPassword,mobile,code).then(res => {
                            if (res.returnCode === 200) {
                                this.$emit("toFindPwdSuccess");
                            } else {
                                if (res.message != null && res.message.length > 0) {
                                    this.$message.error(res.message);
                                }
                            }
                        });
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../common/style/mixin.scss";
    .stepTwoWrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.85);
        .title {
            padding-bottom: 10px;
            font-size: 28px;
            color: $titleColor;
            box-sizing: border-box;
        }
        .el-button{
            margin-top: 30px;
        }
    }

</style>

<style lang="scss">
@import "../../../common/style/mixin.scss";
.stepTwoWrap {
  .el-form {
    flex: 1;
    .el-form-item__content {
      text-align: center;
      p {
        text-align: left;
        font-size: 14px;
        color: $textWeakColor;
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

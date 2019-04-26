<template>
    <div class="codeLoginWrap">
        <p class="title">短信登录</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item ref="mobileForm" prop="mobile">
                <p>请输入手机号</p>
                <el-input @focus="toNone('mobileForm')" maxlength="11" v-model="ruleForm.mobile"></el-input>
            </el-form-item>
            <div class="slider">
                <p>请按住滑块,拖动到最右边</p>
                <slide-confirm @confirmSuccess="confirmSuccess" :is-able-move="true"></slide-confirm>
            </div>
            <el-form-item ref="codeForm" class="verifyCodeWrap" prop="code">
                <p>请输入验证码</p>
                <el-input @focus="toNone('codeForm')" :maxlength="4" v-model="ruleForm.code"></el-input>
                <el-button class="verifyCodeBtn" :class="{ disabled: !canClick }" @click="verifyCodeBtnState">{{
                    verifyCodeText }}
                </el-button>
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
</template>

<script>
    import slideConfirm from "./SlideConfirm";
    import {getCode, phoneLogin, findUserByPhone} from "../../service/getData";

    export default {
        name: "CodeLogin",
        computed: {
            accountErrors: function () {
                let status;

                if (this.ruleForm.account === "") {
                    status = false;
                } else if (/^1\d{10}$/.test(this.ruleForm.mobile)) {
                    status = true;
                } else {
                    status = false;
                }
                return status;
            }
        },
        data() {
            var validateMobile = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入手机号"));
                } else if (/^1[0-9]\d{9}$/.test(value)) {
                    callback();
                } else {
                    callback(new Error("手机号格式错误"));
                }
                sessionStorage.setItem("mobile", value);
            };
            var validateCode = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入验证码"));
                } else if (/^\d{4,6}$/.test(value)) {
                    callback();
                } else {
                    callback(new Error("验证码格式错误"));
                }
                sessionStorage.setItem("code", value);
            };
            return {
                totalTime: 60, //  倒计时
                canClick: true, // 获取验证码按钮是否可点
                isConfirmSuccess: false,
                verifyCodeText: "获取验证码",
                ruleForm: {
                    mobile: "",
                    code: "",
                    type: false
                },
                rules: {
                    mobile: [
                        {validator: validateMobile, trigger: "blur"}
                    ],
                    code: [
                        {validator: validateCode, trigger: "blur"}
                    ],
                }
            };
        },
        components: {
            slideConfirm
        },
        created() {
            this.ruleForm.mobile = sessionStorage.getItem("mobile")
            this.ruleForm.code = sessionStorage.getItem("code")
        },
        methods: {
            toNone(formName) {
                this.$refs[formName].resetField();
            },
            countDown() {
                let _this = this
                _this.canClick = false;
                let clock = window.setInterval(() => {
                    _this.totalTime--;
                    _this.verifyCodeText = this.totalTime + "S";
                    if (_this.totalTime < 0) {
                        window.clearInterval(clock);
                        _this.verifyCodeText = "重新获取";
                        _this.totalTime = 60;
                        _this.canClick = true; //这里重新开启
                    }
                }, 1000);
            },
            verifyCodeBtnState() {
                if (this.accountErrors) {

                    if (!this.isConfirmSuccess) return;
                    if (!this.canClick) return;

                    var _this = this
                    getCode(this.ruleForm.mobile).then(res => {
                        if (res.returnCode === 200) {
                            _this.countDown();
                        } else {
                            if (res.message != null && res.message.length > 0) {
                                this.$message.error(res.message);
                            }
                        }
                    });
                }
            },
            //滑动验证成功
            confirmSuccess() {
                this.isConfirmSuccess = true;
                // //掉接口验证
                // findUserByPhone(this.ruleForm.mobile).then(res => {
                //     if (res.returnCode === 200) {
                //     }else{
                //         if (res.message != null && res.message.length > 0) {
                //             this.$message.error(res.message);
                //         }
                //     }
                // });
            },
            //登录点击事件
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        if (this.isConfirmSuccess) {
                            phoneLogin(this.ruleForm.mobile, this.ruleForm.code).then(res => {
                                if (res.returnCode === 200) {
                                    this.saveUserLoginData(res)
                                    this.$router.replace("/home");
                                } else {
                                    if (res.message != null && res.message.length > 0) {
                                        this.$message.error(res.message);
                                    }
                                }
                            });
                        }
                    } else {
                        return false;
                    }
                });
            },
            //登录成功后保存本地数据
            saveUserLoginData(res) {
                let result = res.result;
                sessionStorage.removeItem("userInfo")
                sessionStorage.setItem("userInfo", JSON.stringify(result));
            },
            //忘记密码
            forgotPwd() {
                this.$emit("toForgotPwdPath");
            },
            //注册
            toRegist() {
                this.$router.push("/register");
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../common/style/mixin.scss";

    .codeLoginWrap {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.85);
        .title {
            padding-bottom: 10px;
            font-size: 28px;
            color: $titleColor;
            box-sizing: border-box;
        }
        .slider {
            p {
                font-size: 14px;
                color: $textWeakColor;
                line-height: 35px;
            }
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
</style>

<style lang="scss">
    @import "../../common/style/mixin.scss";

    .codeLoginWrap {
        .slider {
            margin-bottom: 22px;
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
            .verifyCodeWrap {

                .el-form .el-form-item__content p {
                    line-height: 30px;
                }
                .el-form-item__content {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    span {
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
            .el-form-item__content {
                text-align: center;
                p {
                    text-align: left;
                    font-size: 14px;
                    color: $textWeakColor;
                    line-height: 35px;
                }
                .el-input {
                    .el-input__inner {
                        height: 40px;
                        line-height: 40px;
                        border: 0;
                        border-radius: 0;
                    }
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
                    width: 16px;
                    height: 16px;
                }
                .el-checkbox__input.is-checked + .el-checkbox__label,
                .el-checkbox__label {
                    font-size: 16px;
                    color: $titleColor;
                }
                .el-button {
                    margin-top: 3px;
                    padding: 0 40px;
                    height: 40px;
                    line-height: 40px;
                    border: 0;
                    border-radius: 0;
                    background-color: $mainColor;
                }
                .verifyCodeBtn {
                    margin-top: 0;
                }
            }
        }
    }
</style>

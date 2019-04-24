<template>
    <div class="faceScanFailWrap">
        <div class="content">
            <p class="title">人脸识别登录</p>
            <div class="imgWrap">
                <img src="../../assets/images/login/fail.png">
            </div>
            <button @click="againToScan">重新认证</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FaceScanFail",
        methods: {
            againToScan() {
                this.$emit("toAgainScan");
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../common/style/mixin.scss";
    .faceScanFailWrap {
        background: rgba(255, 255, 255, 0.85);
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            .title {
                align-self: flex-start;
                padding-bottom: 10px;
                height: 20%;
                font-size: 28px;
                color: $titleColor;
                box-sizing: border-box;
            }
            .imgWrap {
                padding-top: 30px;
                text-align: center;
                img {
                    width: 80%;
                }
            }
            button {
                margin-top: 10px;
                padding: 0 30px;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: #ffffff;
                border-radius: 0;
                background-color: $mainColor;
            }
        }
    }

</style>

<template>
    <div class="faceScanSuccessWrap">
        <div class="content">
            <p class="title">人脸识别登录</p>
            <div class="imgWrap">
                <img src="../../assets/images/login/success.png">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "FaceScanSuccess",
        mounted() {
            this.$nextTick(() => {
                this.$router.replace("/home");
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../common/style/mixin.scss";
    .faceScanSuccessWrap {
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
        }
    }

</style>

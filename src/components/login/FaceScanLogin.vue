<template>
  <div class="faceLoginWrap">
    <p class="title">人脸识别登录</p>

    <div class="faceScan">
      <div class="container">
        <video id="video" width="220" height="166" preload autoplay loop muted></video>
        <canvas id="canvas" width="220" height="166"></canvas>
      </div>

    </div>
    <div class="fooer">
      <span class="footer-btn" @click="forgotPwd">忘记密码 </span>
      <span class="midLine">|</span>
      <span class="footer-btn" @click="toRegist"> 注册</span>
    </div>

  </div>
</template>

<script>
import "../../common/js/tracking-min.js";
import "../../common/js/face-min.js";

import { faceLogin } from "../../service/getData";

export default {
    name: "FaceScanLogin",
    data() {
        return {

        }
    },
    methods: {
        toGetFaceRecognition() {
            var _this = this;
            var video = document.getElementById("video");
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var tracker = new tracking.ObjectTracker("face");
            var i = 0;
            tracker.setInitialScale(4);
            tracker.setStepSize(2);
            tracker.setEdgesDensity(0.2);
            tracking.track("#video", tracker, {
                camera: true
            });
            tracker.on("track", function (event) {
                if (event.data.length === 0) {
                    return;
                }
                context.clearRect(0, 0, canvas.width, canvas.height);
                event.data.forEach(function (rect) {
                    while (i >= 0) {
                        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
                        let imgDataBase64Str = canvas.toDataURL();
                        _this.toLoadFaceCheck(imgDataBase64Str)
                        i--;
                    }
                    context.strokeStyle = "#a64ceb";
                    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                    context.font = "11px Helvetica";
                    context.fillStyle = "#fff";
                    context.fillText(
                        "x: " + rect.x + "px",
                        rect.x + rect.width + 5,
                        rect.y + 11
                    );
                    context.fillText(
                        "y: " + rect.y + "px",
                        rect.x + rect.width + 5,
                        rect.y + 22
                    );
                });
            });
        },
        toLoadFaceCheck(str) {
            faceLogin(str).then(res => {
                if (res.returnCode === 200) {
                    this.saveUserLoginData(res)
                    this.$emit("toFaceScanSuccess");
                } else if (res.returnCode === 1000){
                    if (res.message != null && res.message.length > 0) {
                        this.$message.error(res.message);
                    }
                } else {
                    this.$emit("toFaceScanFail");
                }
            });
        },
        //登录成功后保存本地数据
        saveUserLoginData(res) {
            let result = res.result;
            sessionStorage.removeItem("userInfo")
            sessionStorage.setItem("userInfo", JSON.stringify(result));
        },
        getGuid() {

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
        this.$nextTick(() => {
            this.toGetFaceRecognition();
        });
    },
    destroyed() {
    }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";
.faceLoginWrap {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.85);

  .title {
    padding-bottom: 10px;
    height: 20%;
    font-size: 28px;
    color: $titleColor;
    box-sizing: border-box;
  }

  .faceScan {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      #video {
        align-self: center;
        background: url("../../assets/images/qr-bg.jpg");
      }
      #canvas {
        align-self: center;
        margin-top: -166px;
      }
    }

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
</style>

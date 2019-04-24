<template>
  <div>
    <div class="crumbsWrap">注册 > 个人信息</div>
    <Progress :currentStep="3"></Progress>
    <div class="personalInfoWrap">
      <Title title="个人信息"></Title>
      <div class="formBox">
        <el-input @focus="errName=''" @blur="nameBlur" placeholder="请填写您的姓名" v-model="name">
          <template slot="prepend">联系人</template>
        </el-input>
        <p class="err">{{ errName }}</p>

        <el-input @focus="errIdCard=''" @blur="idCardBlur" :maxlength="18" placeholder="请填写您的身份证号码" v-model="idCard">
          <template slot="prepend">身份证号码</template>
        </el-input>
        <p class="err">{{ errIdCard }}</p>

        <div class="certificatWrap">
          <p class="title">上传有效证件</p>
          <ul>
            <li class="certificat front">
              <el-upload
                accept="image/jpeg, image/png"
                :action="action"
                :show-file-list="false"
                :on-success="uploadCertFrontImgSuccess"
              >
                <div class="uploadItem">
                  <p class="imgBox" v-if="certFrontImg">
                    <img :src="certFrontImg" class="avatar">
                  </p>
                  <div class="textBox" v-else>
                    <p>点击上传身份证正面</p>
                    <p>（头像）</p>
                  </div>
                </div>
              </el-upload>

              <p class="err">{{ errCertFrontImg }}</p>
            </li>
            <li class="certificat reverse">
              <el-upload
                accept="image/jpeg, image/png"
                :action="action"
                :show-file-list="false"
                :on-success="uploadCertReverseImgSuccess"
              >
                <div class="uploadItem">
                  <p class="imgBox" v-if="certReverseImg">
                    <img :src="certReverseImg" class="avatar">
                  </p>
                  <div class="textBox" v-else>
                    <p>点击上传身份证反面</p>
                    <p>（国徽）</p>
                  </div>
                </div>
              </el-upload>

              <p class="err">{{ errCertReverseImg }}</p>
            </li>
          </ul>
        </div>

        <div class="faceWrap">
          <p class="title">人脸识别信息录入</p>
          <div class="content">
            <div v-for="(item,index) of faceImgArr" :key="index">
              <img :src="item" class="avatar">
            </div>
            <div class="uploadItem" v-if="faceImgArr.length<3">
              <div class="textBox" @click="toShowFaceScan">
                <p>点击上传人脸识别信息</p>
                <p>（第{{faceImgArr.length+1}}张）</p>
              </div>
            </div>
          </div>

          <p class="err">{{ errFaceImg }}</p>
        </div>

        <el-button class="nextBtn" @click="nextStep">下一步</el-button>
      </div>

      <div class="facecontainer" v-if="isShowFaceScan">
        <video id="video" width="440" height="330" preload autoplay loop muted></video>
        <canvas id="canvas" width="440" height="330"></canvas>
        <button class="cancelBtn" @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "../../components/register/progress";
import Title from "../../components/register/title";
import "../../common/js/tracking-min.js";
import "../../common/js/face-min.js";
import {
  uploadfile,
  detect,
  certification,
  findUserByIdCard
} from "../../service/getData";

export default {
  data() {
    return {
      root: process.env.API_HOST,
      loading: true,

      name: "",
      errName: "",
      nameReg: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,

      idCard: "",
      idCardUrl: "",
      errIdCard: "",
      caridReg: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,

      action: "",

      certFrontName: "",
      certFrontImg: "",
      errCertFrontImg: "",

      certReverseName: "",
      certReverseImg: "",
      errCertReverseImg: "",

      faceImgArr: [],
      errFaceImg: "",

      imgDataBase64Str: "",
      isShowFaceScan: false
    };
  },
  components: {
    Progress,
    Title
  },
  beforeRouteLeave(to, from, next) {
    debugger
  },
  beforeRouteLeave(to, from, next) {
    if(to.path == "/register/accountInfo"){
      this.$router.go(-2);
      // next(sessionStorage.toRegisterUrl);
    } else {
      next();
    }
  },
  created() {
    // 上传图片接口 文件
    
    this.action = this.root + "customerweb/user/uploadfile";
  },
  mounted() {
    // this.toGetFaceRecognition();
  },
  destroyed() {
    window.location.reload();   //通过刷新页面关闭摄像头
  },
  methods: {
    toShowFaceScan() {
      this.isShowFaceScan = true;
      this.$nextTick(() => {
        this.toGetFaceRecognition();
      });
    },
    makeSure() {
      //走接口请求，上传图片，上传成功，显示图片
      this.cancel();
    },
    cancel() {
      this.isShowFaceScan = false;
    },
    beforeAvatarUpload(file) {
      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isLt10M) {
        this.$message.error("上传头像图片大小不能超过 10MB!");
      }
      return isLt10M;
    },
    uploadCertFrontImgSuccess(res, file) {
      console.log("uploadCertFrontImgSuccess");
      if (res.returnCode === 200) {
        this.certFrontName = res.result.fileName;
        this.certFrontImg = res.result.imageUrl;
        this.errCertFrontImg = "";
      } else {
        this.errCertFrontImg = res.message;
      }
    },
    uploadCertReverseImgSuccess(res, file) {
      console.log("uploadCertReverseImgSuccess");
      if (res.returnCode === 200) {
        this.certReverseName = res.result.fileName;
        this.certReverseImg = res.result.imageUrl;
        this.errCertReverseImg = "";
      } else {
        this.errCertReverseImg = res.message;
      }
    },
    detect(faceUrl) {
      //  人脸检测
      detect(faceUrl).then(res => {
        if (res.returnCode === 200) {
          this.faceImgArr.push(faceUrl);
          this.errFaceImg = "";
        } else {
          this.errFaceImg = res.message;
        }
        this.cancel();
      });
    },
    toGetFaceRecognition() {
      var _this = this;
      var i = 0;
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      var tracker = new tracking.ObjectTracker("face");
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);
      tracking.track("#video", tracker, { camera: true });  //开启摄像头
      tracker.on("track", function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function(rect) {
          while (i >= 0) {
            canvas
              .getContext("2d")
              .drawImage(video, 0, 0, canvas.width, canvas.height);
            // _this.imgDataBase64Str = canvas.toDataURL();

            _this.detect(canvas.toDataURL());   //toDataURL方法实时的将视频截成Base64图片编码

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
    certification() {
      //  身份认证接口
      certification(this.name, this.idCard).then(res => {
        if (res.returnCode === 200) {
          this.findUserByIdCard();
        } else {
          this.errIdCard = res.message;
        }
      });
    },
    findUserByIdCard() {
      //  根据身份证号码查询用户是否存在
      findUserByIdCard(this.idCard).then(res => {
        if (res.returnCode === 200) {
          //  已存在
          this.errIdCard = res.message;
        } else {
          //  不存在
          let params = {
            name: this.name,
            idCard: this.idCard,
            idCardUrl: `${this.certFrontName},${this.certReverseName}`,
            faceUrls: this.faceImgArr,
            ...JSON.parse(sessionStorage.registerParams || "{}")
          };
          sessionStorage.registerParams = JSON.stringify(params);
          let type = this.$route.query.type || "";
          if (type == 1) {
            this.$router.replace({
              path: "/register/enterpriseInfo",
              query: { type: "1" }
            });
          } else {
            this.$router.replace("/register/enterpriseInfo");
          }
        }
      });
    },
    nameBlur() {
      let flag = true;
      if (!this.name) {
        //  用户名不能为空
        this.errName = "用户名不能为空";
        flag = false;
      } else if (!this.nameReg.test(this.name)) {
        //  用户名格式不正确
        this.errName = "用户名格式不正确";
        flag = false;
      }
      return flag;
    },
    idCardBlur() {
      let flag = true;
      if (!this.idCard) {
        //  身份证号
        this.errIdCard = "身份证号不能为空";
        flag = false;
      } else if (!this.caridReg.test(this.idCard)) {
        //  身份证号格式不正确
        this.errIdCard = "身份证号格式不正确";
        flag = false;
      }
      return flag;
    },
    certFrontImgBlur() {
      let flag = true;
      if (!this.certFrontImg) {
        // 身份证正面
        this.errCertFrontImg = "请上传身份证正面";
        flag = false;
      }
      return flag;
    },
    certReverseImgBlur() {
      let flag = true;
      if (!this.certReverseImg) {
        //  身份证反面
        this.errCertReverseImg = "请上传身份证反面";
        flag = false;
      }
      return flag;
    },
    faceImgArrBlur() {
      let flag = true;
      if (!this.faceImgArr) {
        //  人脸识别录入三张照片判断
        this.errFaceImg = "请录入人脸识别信息";
        flag = false;
      } else if (this.faceImgArr.length < 3) {
        //  人脸识别录入三张照片判断
        this.errFaceImg = "请继续录入人脸识别信息";
        flag = false;
      }
      return flag;
    },
    verify() {
      let flag = true;

      if(!this.nameBlur()){
        flag = false;
      }
      if(!this.idCardBlur()){
        flag = false;
      }
      if(!this.certFrontImgBlur()){
        flag = false;
      }
      if(!this.certReverseImgBlur()){
        flag = false;
      }
      if(!this.faceImgArrBlur()){
        flag = false;
      }
      
      return flag;
    },
    nextStep() {
      if(this.verify()){
        this.certification();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";
.personalInfoWrap {
  padding-bottom: 60px;
  background-color: $bgColor;

  .formBox {
    margin: 0 auto;
    width: 440px;
    .tips {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      color: $tipsColor;
    }
    .err {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      text-align: center;
      color: $subRedColor;
    }

    .certificatWrap {
      margin-bottom: 30px;
      text-align: left;
      .title {
        font-size: 14px;
        color: #333;
      }
      ul {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        li {
          width: 215px;
          height: 140px;
          &.front {
            background: url("../../assets/images/certificat_front.png")
              no-repeat;
            background-size: cover;
          }
          &.reverse {
            background: url("../../assets/images/certificat_reverse.png")
              no-repeat;
            background-size: cover;
          }
          .imgBox {
            background-color: $anitColor;
            img {
              width: 215px;
              height: 140px;
            }
          }
          .textBox {
            padding-top: 80px;
            width: 215px;
            height: 140px;
            color: #c29b73;
            font-size: 14px;
            text-align: center;
            background: url("../../assets/images/icon_add.png") no-repeat center
              20px;
            background-size: 55px auto;
          }
        }
      }
    }

    .faceWrap {
      margin-bottom: 30px;
      .title {
        font-size: 14px;
        color: #333;
      }
      // ul {
      //   display: flex;
      //   justify-content: space-between;
      //   padding-top: 10px;
      // }
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        > div {
          margin-top: 10px;
          width: 215px;
          height: 140px;
          img {
            width: 215px;
            height: 140px;
          }
        }
        .uploadItem {
          // margin-top: 10px;
          width: 215px;
          height: 140px;
          background: url("../../assets/images/img_face.png") no-repeat center
            center;
          background-size: cover;
          .imgBox {
            img {
              width: 215px;
              height: 140px;
            }
          }
          .textBox {
            padding-top: 80px;
            width: 215px;
            height: 140px;
            color: #c29b73;
            font-size: 14px;
            text-align: center;
            background: url("../../assets/images/icon_add.png") no-repeat center
              25px;
            background-size: 55px auto;
            p {
              line-height: 1.5;
            }
          }
        }
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
  .facecontainer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    min-width: 1200px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9;

    #video {
      position: relative;
      top: 100px;
      align-self: center;
      background: url("../../assets/images/qr-bg.jpg") no-repeat;
      background-size: 100% auto;
    }

    #canvas {
      align-self: center;
      margin-top: -230px;
    }

    button {
      align-self: center;
      color: $anitColor;
      background-color: $mainColor;
      width: 440px;
      height: 40px;
    }
  }
}
</style>

<style lang="scss">
@import "../../common/style/mixin.scss";
.personalInfoWrap {
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
  .el-upload {
    display: block;
    width: 215px;
    height: 140px;
    border: 1px solid $borderLineDisabledColor;
    border-radius: 0;
    overflow: hidden;
  }
  .faceWrap {
    .el-upload {
      display: inline-block;
      width: 215px;
      height: 140px;
      border: 1px solid $borderLineDisabledColor;
      border-radius: 0;
      overflow: hidden;
    }
  }
  .el-upload-list.el-upload-list--picture-card {
    .el-upload-list__item.is-ready {
      float: left;
      margin: 0;
      margin-right: 20px;
      width: 215px;
      height: 140px;
      border: 1px solid $borderLineDisabledColor;
      border-radius: 0;
      overflow: hidden;
    }
  }
  .el-upload--picture-card {
    width: 215px !important;
    height: 140px;
    border: 0;
    border-radius: 0;
    overflow: hidden;
    box-sizing: border-box;
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

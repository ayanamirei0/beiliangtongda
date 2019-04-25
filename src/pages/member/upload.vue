<template>
  <div class="upload">
    <!-- // 上传图片接口 -->
    <!-- :limit="limitNum" -->
    <!-- :on-exceed="exceedFile" -->
    <el-upload
      :multiple="false"
      :action="action"
      :data="dataFile"
      v-loading="loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      ref="uploadExcel"
      accept=".xlsx,.xls"
      :before-upload="beforeUploadFile"
      :on-change="fileChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :show-file-list="false"
      :limit="limitNum"
      :on-exceed="exceedFile"
      :file-list="fileList"
      drag
    >
      <div>
        <div class="down_img">
          <!-- <div class="down_name"><span>{{formName!="" ? formName+'.xlsx' : ""}}</span></div> -->
          <div class="down_name"><span>{{formName}}</span></div>
        </div>
        <div class="down_word">
          <span slot="trigger">上传</span>
        </div>
      </div>
    </el-upload>
    <span class='down_file'>
      <a
        :href="formUrl"
        :download="formName"
      >下载</a>
    </span>
  </div>

</template>

<script>
import axios from "axios";
import {
  applicationFormGetApplicationForm,
  userSaveApplicationForm,
  userUploadfile
} from "../../service/getData";
var root = process.env.API_HOST;
export default {
  data() {
    return {
      limitNum: 1,
      formUrl: "", //下载路径
      formName: "", //名称
      type: "", //申请表类型
      loading: false,
      dataFile: {},
      action: "",
      form: {},
      fileList: []
    };
  },
  created() {
    // 上传图片接口 文件
    this.action = root + "customerweb/user/uploadfile";
    //  this.action ="http://172.19.12.202:8089/user/uploadfile/user/uploadfile";
  },
  methods: {
    getData() {
      // 北粮申请表管理接口
      let form = {
        orgCode: this.$store.state.orgCode, // 机构平台
        formCode: this.$store.state.formCode // 申请表单code  资产使用计划表zcl_1
      };
      applicationFormGetApplicationForm(form).then(res => {
        this.formUrl = res.result.formUrl; //下载路径
        this.formName = res.result.formName; //名称
        this.type = res.result.type; //申请表类型
      });
    },

    // 文件超出个数限制时的钩子
    exceedFile(files, fileList) {
      this.$notify.warning({
        title: "警告",
        message: `只能选择 ${this.limitNum} 个文件，当前共选择了 ${
          files.length
        } 个`
      });
    },
    // 文件状态改变时的钩子
    fileChange(file) {
      this.form.file = file.raw;
    },

    // 上传文件之前的钩子, 参数为上传的文件,若返回 false 或者返回 Promise 且被 reject，则停止上传
    beforeUploadFile(file, fileList) {
      this.dataFile = {
        file: "file"
      };
      this.loading = true;
      let extension = file.name.substring(file.name.lastIndexOf(".") + 1);
      let size = file.size / 1024 / 1024;
      if (extension !== "xlsx" && extension !== "xls") {
        this.$notify.warning({
          title: "警告",
          message: `只能上传Excel（即后缀是.xlsx或.xls）的文件`
        });
        this.loading = false;
        return false;
      }
      if (size > 10) {
        this.$notify.warning({
          title: "警告",
          message: `文件大小不得超过10M`
        });
        return false;
      }
    },
    // 文件上传成功时的钩子
    handleSuccess(res, file, fileList) {
      this.loading = false;
      this.$notify.success({
        title: "成功",
        message: `文件上传成功`
      });
      this.formName = res.result.originalFilename; //上传名称
      //  this.formName = res.result.fileName; //上传名称
      this.formUrl = res.result.imageUrl;
      //网上办事保存接口
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      let params = {
        customerBeiliangId: userInfo.id, //客户id	北粮客户id
        // formCode: this.$store.state.formCode, //固定的//资产使用计划表zcl_1
        formCode: "zcl_1",
        formUrl: "file"
      };
      userSaveApplicationForm(params).then(res => {
        if (res.returnCode == 200) {
        }
      });
      this.$refs["uploadExcel"].clearFiles();
    },
    // 文件上传失败时的钩子
    handleError(err, file, fileList) {
      this.loading = false;
      this.$notify.error({
        title: "错误",
        message: `文件上传失败`
      });
    }
  },
  mounted() {
    //请求数据
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin";
.upload {
  position: relative;
}
.down_file {
  position: absolute;
  top: 333px;
  left: 100px;
  display: inline-block;
  width: 104px;
  height: 42px;
  background: rgba(194, 155, 115, 1);
  border-radius: 21px;
  font-size: 18px;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
  a {
    color: #fff;
  }
}
.download {
  width: 600px;
  height: 402px;
  border: 1px solid#DDDDDD;
  border-radius: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  .down_img {
    width: 520px;
    height: 260px;
    margin: 40px 40px 33px 40px;
    background: url(../../assets/images/member/image8.png) no-repeat 100% 100%;
    position: relative;
    .down_name {
      width: 520px;
      height: 50px;
      background: rgba(0, 0, 0, 0.1);
      text-align: left;
      line-height: 50px;
      position: absolute;
      top: 204px;
      left: 0;
      span {
        width: 490px;
        padding-left: 37px;
        font-size: 24px;
        color: #fff;
        @include ellipsis2(1);
      }
    }
  }
  .down_word {
    text-align: center;
    span {
      display: inline-block;
      width: 104px;
      height: 42px;
      background: rgba(194, 155, 115, 1);
      border-radius: 21px;
      font-size: 18px;
      line-height: 42px;
      color: #fff;
      margin-left: 300px;
    }
  }
}
/deep/ .el-upload-list__item.is-success .el-upload-list__item-name:focus,
.el-upload-list__item.is-success .el-upload-list__item-name:hover {
  color: #fff !important;
  border: none;
}
/deep/ .el-upload-list__item-status-label {
  display: none !important;
}

/deep/ .el-icon-close-tip {
  display: none !important;
}
/deep/ .el-icon-upload-success .el-icon-circle-check {
  display: none !important;
}
/deep/ .el-loading-parent--relative {
  position: unset !important;
}
/deep/ .el-loading-mask {
  top: 40px;
  width: 520px;
  height: 260px;
  margin: 0 auto;
  background: none;
  border: none;
  overflow: unset;
}
/deep/ .el-loading-spinner .path {
  stroke: #fff;
}
/deep/ .el-upload-dragger {
  width: 598px;
  height: 400px;
  margin: 0 auto;
  background: none;
  overflow: unset;
  border: 1px solid transparent;
}

/deep/ .el-upload--picture-card:hover,
.el-upload:focus {
  border-color: transparent;
  color: transparent;
}

/deep/ .el-upload:focus .el-upload-dragger {
  border-color: transparent;
}
/deep/ .el-upload-list__item-name {
  position: absolute;
  // top: -160px;
  top: -136px;
  left: 74px;
  color: #fff;
  font-size: 24px;
}
/deep/ .el-upload-list__item-name:hover {
  color: #fff;
}
/deep/ .el-icon-document:before {
  content: "";
}
</style>
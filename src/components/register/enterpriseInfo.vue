<template>
  <div>
    <div class="crumbsWrap">注册 > 企业信息</div>
    <Progress :currentStep="4"></Progress>
    <div class="enterpriseInfoWrap">
      <Title title="企业信息"></Title>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
        <el-form-item label="注册类型" label-width="140" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择活动区域">
            <el-option
              v-for="(item,index) of enterpriseType"
              :key="index"
              :label="item"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item ref="codeForm" label="统一社会信用代码" label-width="140" prop="code">
          <el-input @focus="toNone('codeForm')" v-model="ruleForm.code" maxlength="18" placeholder="请按照营业执照填写">
            <el-tooltip class="item" slot="suffix" effect="light" placement="right" :hide-after="0">
              <div slot="content">
                <div class="socialPopWrap">
                  <p>请到您的营业执照中查看</p>
                  <p>
                    <img src="../../assets/images/registerSocialCode.png" alt>
                  </p>
                </div>
              </div>
              <i class="el-icon-question el-input__icon"></i>
            </el-tooltip>
          </el-input>
        </el-form-item>
        <el-form-item ref="nameForm" label="公司名称" label-width="140" prop="name">
          <el-input @focus="toNone('nameForm')" v-model="ruleForm.name" placeholder="请按照营业执照填写"></el-input>
        </el-form-item>
        <el-form-item ref="addressForm" label="公司地址" label-width="140" prop="address">
          <area-cascader
            :level="1"
            type="text"
            placeholder="请选择地区"
            v-model="ruleForm.address"
            :data="pcaa"
          ></area-cascader>
        </el-form-item>
        <el-form-item ref="identityImgForm" class="identityImgBox" label label-width="0" prop="identityImg">
          <p class="title">
            上传有效证件
            <span>（营业执照、组织机构代码等，图片大小不超过8M）</span>
          </p>
          <el-upload
            accept="image/jpeg, image/png"
            :action="action"
            :show-file-list="false"
            :on-success="uploadImgSuccess"
          >
            <div class="uploadItem">
              <p class="imgBox" v-if="ruleForm.identityImg">
                <img :src="ruleForm.identityImg" class="avatar">
              </p>
              <div class="textBox" v-else>
                <p>点击上传有效证件</p>
              </div>
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item class="btnWrap">
          <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Progress from "../../components/register/progress";
import Title from "../../components/register/title";
import "vue-area-linkage/dist/index.css";
import pcaa from "area-data/pcaa";
import { getEnterpriseType, register } from "../../service/getData";

export default {
  data() {
    return {
      root: process.env.API_HOST,
      pcaa: pcaa,
      action: "",
      enterpriseType: [],
      ruleForm: {
        type: "",
        code: "",
        name: "",
        address: "",
        identityImgName: "",
        identityImg: ""
      },
      rules: {
        type: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        code: [
          {
            required: true,
            message: "请输入统一社会信用代码",
            trigger: "blur"
          },
          {
            pattern: /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g,
            message: "统一社会信用代码格式错误!",
            trigger: "blur"
          }
        ],
        name: [{ required: true, message: "请输入公司名称", trigger: "blur" }],
        address: [
          { required: true, message: "请选择公司地址", trigger: "blur" }
        ],
        identityImg: [
          { required: true, message: "请上传有效文件", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    Progress,
    Title
  },
  beforeRouteLeave(to, from, next) {
    if(to.path == "/register/personalInfo"){
      this.$router.go(-3);
      // next(sessionStorage.toRegisterUrl);
    } else {
      next();
    }
  },
  created() {
    // 上传图片接口 文件
    this.action = this.root + "customerweb/user/uploadfile";
    this.getEnterpriseType();
  },
  mounted() {},
  methods: {
    getEnterpriseType() {
      //  企业类型接口
      getEnterpriseType().then(res => {
        if (res.returnCode == 200) {
          this.enterpriseType = Object.keys(res.result).map(
            key => res.result[key]
          );
        } else {
          if (res.message != null && res.message.length > 0) {
            this.$message.error(res.message);
          }
        }
      });
    },
    beforeAvatarUpload(file) {
      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isLt10M) {
        this.$message.error("上传头像图片大小不能超过 10MB!");
      }
      return isLt10M;
    },
    uploadImgSuccess(res, file) {
      if (res.returnCode == 200) {
        this.toNone('identityImgForm')

        this.identityImgName = res.result.fileName;
        this.ruleForm.identityImg = res.result.imageUrl;
      } else {
        if (res.message != null && res.message.length > 0) {
          this.$message.error(res.message);
        }
      }
    },
    register() {
      let params = {
        enterpriseType: this.ruleForm.type,
        creditCode: this.ruleForm.code,
        enterpriseName: this.ruleForm.name,
        enterpriseAddr: this.ruleForm.address.toString(),
        enterpriseCertificateUrl: this.identityImgName,
        ...JSON.parse(sessionStorage.registerParams || "{}")
      };
      register(params).then(res => {
        if (res.returnCode == 200) {
          let type = this.$route.query.type || "";
          if (type == 1) {
            this.$router.replace({
              path: "/register/submitAudit",
              query: { type: "1" }
            });
          } else {
            this.$router.replace("/register/submitAudit");
          }
        } else {
          if (res.message != null && res.message.length > 0) {
            this.$message.error(res.message);
          }
        }
      });
    },
    toNone(formName){
      this.$refs[formName].resetField();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.register();
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";
.enterpriseInfoWrap {
  padding-bottom: 50px;
  background-color: $bgColor;
  .ruleForm {
    margin: 0 auto;
    width: 440px;
    .identityImgBox {
      border: 0;
      .title {
        font-size: 14px;
        color: $titleColor;
        line-height: 1;
        padding-bottom: 20px;
        span {
          color: $tipsColor;
        }
      }
      .uploadItem {
        width: 440px;
        height: 333px;
        border: 1px solid $borderLineDisabledColor;
        background-color: $anitColor;
        .imgBox {
          img {
            width: 440px;
            height: 333px;
          }
        }
        .textBox {
          padding-top: 194px;
          width: 440px;
          height: 333px;
          color: #c29b73;
          font-size: 14px;
          text-align: center;
          background: url("../../assets/images/icon_add.png") no-repeat center
            125px;
          p {
            line-height: 1.5;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "../../common/style/mixin.scss";
.enterpriseInfoWrap {
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
  .socialPopWrap {
    padding: 15px;
    p {
      padding-bottom: 5px;
      font-size: 14px;
      color: $titleColor;
      line-height: 2;
    }
  }
  .area-select.large {
    padding: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0;
    span {
      padding: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: $titleColor;
    }
    .area-select .area-select-icon.active {
      margin-top: 0;
      transition: width 0s;
    }
  }
  .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
    content: "";
  }
  .el-form-item__content {
    .el-select {
      width: 100%;
    }
    .el-form-item__error {
      color: $subRedColor;
    }
  }
  .el-form-item {
    display: flex;
    margin-bottom: 30px;
    border: 1px solid $borderLineDisabledColor;
    &.btnWrap {
      margin-top: 60px;
      border: 0;
      .el-form-item__content {
        margin: 0 !important;
        .el-button {
          padding: 0;
          width: 100%;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          background: $mainColor;
          border-color: $mainColor;
        }
      }
    }
    .el-form-item__label {
      position: relative;
      padding-right: 5px;
      width: 140px;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      color: #333;
      text-align: center;
      border: 0;
      border-radius: 0;
      background-color: $anitColor;
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
    .el-form-item__content {
      flex: 1;
      .el-input__inner {
        padding: 0 30px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #333;
        border: 0;
        border-radius: 0;
      }
      .el-form-item__error {
        width: 100%;
        padding-top: 0;
        padding-right: 140px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
}
.el-select-dropdown__item.selected {
  font-weight: normal;
  color: $mainColor;
}
.enterpriseInfoWrap .area-select.large span {
  padding: 0 30px;
  color: $titleColor;
}
.cascader-menu-list-wrap,
.cascader-menu-list {
  border-color: $borderLineDisabledColor;
}
.cascader-menu-list .cascader-menu-option.selected {
  color: $mainColor;
}
.area-select .area-select-icon {
  margin-top: -3px;
  margin-right: 4px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-top-color: $tipsColor;
}
.area-select .area-select-icon.active {
  margin-top: -9px;
  border: 6px solid transparent;
  border-bottom-color: transparent;
  border-top-color: $tipsColor;
}
.el-tooltip__popper.is-light {
  padding: 15px;
  border-color: $tipsColor;
}
.socialPopWrap {
  p {
    padding-bottom: 15px;
  }
}

.enterpriseInfoWrap
  .identityImgBox
  .el-form-item__content
  .el-form-item__error {
  padding-right: 0;
}
</style>

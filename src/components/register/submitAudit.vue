<template>
  <div>
    <div class="crumbsWrap">注册 > 提交审核</div>
    <Progress :currentStep="5"></Progress>
    <div class="infoWrap">
      <Title title="提交审核"></Title>
      <p class="result">信息提交成功，正在审核中...</p>
    </div>
  </div>
</template>

<script>
import Progress from "../../components/register/progress";
import Title from "../../components/register/title";

export default {
  beforeRouteLeave(to, from, next) {
    if (to.path == "/register/enterpriseInfo") {
      this.$router.go(-4);
      // next(sessionStorage.toRegisterUrl);
    } else {
      next();
    }
  },
  components: {
    Progress,
    Title
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";
.infoWrap {
  padding-bottom: 140px;
  background-color: $bgColor;

  .result {
    padding-top: 200px;
    font-size: 20px;
    text-align: center;
    background: url("../../assets/images/register_audit.png") no-repeat center
      center;
    background-size: 120px auto;
  }
}
</style>
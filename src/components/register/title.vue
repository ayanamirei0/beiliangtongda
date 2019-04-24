<template>
  <div class="titleBox">
    <p class="line left"></p>
    <p class="title">{{title}}</p>
    <p class="line right"></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";
.titleBox {
  margin: 0 auto;
  padding: 50px 0 40px;
  display: flex;
  justify-content: space-between;
  width: 750px;
  font-size: 32px;
  text-align: center;
  color: $mainColor;
  .line {
    width: 265px;
    background: url("../../assets/images/line_register_title.png") no-repeat
      left center/ 265px auto;
  }
  .right {
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
  }
}
</style>


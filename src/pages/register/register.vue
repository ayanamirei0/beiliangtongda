<template>
  <div>
    <Header :currentIndex="6" navColor="#333"></Header>
    <div class="banner"></div>
    <article>
      <router-view></router-view>
    </article>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.banner {
  height: 500px;
  min-width: 1200px;
  background: url('../../assets/images/register_banner.png') no-repeat center center;
  background-size: cover;
}
article {
  margin: 0 auto;
  padding-bottom: 100px;
  width: 1200px;
  background-color: #fff;
}
</style>
<style lang="scss">
  .crumbsWrap {
    margin: 10px auto 60px;
    padding-left: 20px;
    background: url("../../assets/images/icon_nav_small.png") no-repeat left
      center / contain;
  }
</style>
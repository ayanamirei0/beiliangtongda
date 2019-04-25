<template>
  <div class="warp">
    <div class="header_content">
      <Header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></Header>
      <!-- <Slider :imgUrl="bannerList"></Slider> -->
    </div>
    <div class="chairman_banner"><img :src="banner"></div>
    <div class="chairman_cont">
      <div class="abt_ct">
        <ul>
          <li
            v-for="(item,index) in chairman"
            :key="index"
          >{{item}}</li>
        </ul>
        <p>
          <span>{{chairman_name}}</span>
          <b><img src="../../assets/images/about/chair_image3.jpg" /></b>
        </p>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";

export default {
  name: "login",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      banner: require("../../assets/images/about/image2.png"),
      chairman: [
        "古往今来，足食都是治国安邦的首善大举。对于拥有14亿人口的中国来说，国家粮食安全战略具有特殊的重要意义。随着全球一体化，国际农产品贸易不断发展，我国也顺应潮流，通过粮食贸易来缓解粮食安全问题。",
        "随着京津冀协同发展重大国家战略的实施，北粮集团在天津东疆港的大力支持下于2018年正式成立。北粮集团本着打通金融服务粮贸产业的各环节的目标，支持重点领域特色农产品贸易，延伸粮贸产业化链条，助力农业价值和效益提高，致力于成为国内一流大宗农产品服务商。",
        "北粮集团是一个年轻、自信的企业，散发着激情与活力。我们用专业的眼光，以专心、专注的精神，发掘最好的区域、调配最好的资源。我们坚持“贾道儒行、以人为本”的企业核心价值观，秉承“团结、开拓、坚韧、务实”的企业精神，以诚信、公开、公平、透明为基石，始终坚持经济效益与社会效益双赢，不断提升履行社会责任的能力和水平，携手合作伙伴风雨同舟，创造共享价值。",
        "人生在勤、勿可虚度！我们将始终与光明者同行，共创无疆大业。"
      ],
      chairman_name: "郭立刚",
      currentIndex: 4,
      navColor: "white"
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped type="text/scss">
.warp {
  /*background: #f7f7f7;*/
}
.chairman_banner {
  background: url("../../assets/images/about/intro_banner.png") no-repeat center
    top;
  width: 100%;
  background-size: cover;
  height: 384px;
  text-align: center;
  padding-top: 216px;
  -webkit-box-sizing: initial;
}
.chairman_banner img {
  width: 859px;
  height: 211px;
}

.chairman_cont {
  width: 1024px;
  margin: 0px auto;
}
.abt_ct {
  position: relative;
  overflow: hidden;
  height: 545px;
  width: 100%;
  margin: 80px 0px 130px;
}
.abt_ct p {
  background: url("../../assets/images/about/chairman_bg.png") no-repeat right
    top;
  height: 476px;
  position: absolute;
  right: 0px;
  width: 549px;
  z-index: 2;
}
.abt_ct p span {
	position: absolute;
  display: block;
  font-size: 30px;
  line-height: 80px;
  text-align: center;
  width: 180px;
  margin: 20px 0px 0px 60px;
  color: #c29b73;
  z-index: 4;
  background: #FFFFFF;
}
.abt_ct p span:before{
	content: "";
	display: inline-block;
	width: 124px;
	height: 4px;
	background: #C29B73;
	position: absolute;
	bottom: 0px;
	right: 25px;
}
.abt_ct p b{
	display: inline-block;
	widows: 300px;
	height: 443px;
	overflow: hidden;
	position: absolute;
	z-index: 3;
	right: 33px;
	top: 0px;
}
.abt_ct p b img{
	transition: 0.3s all ease;
	width: 100%;
	height: 100%;
}
.abt_ct p img:hover{
	
  transform: scale(1.1);
}
.abt_ct ul {
  width: 617px;
  float: left;
  font-family: PingFangSC;
  color: #666666;
  position: absolute;
  top: 112px;
  z-index: 3;
}
.abt_ct ul li {
  line-height: 24px;
  margin-top: 35px;
  font-size: 14px;
}
</style>


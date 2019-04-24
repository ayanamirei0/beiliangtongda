<template>
  <!-- 轮播图 -->
  <div class="slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in dataImg" :key="index">
          <img :src="item.picUrl" height="480px">
        </div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev">
        <div class="control-box prev_box">
          <span></span>
          <div>
            <h3>
              <!-- <template v-if="(thiswiperIndex -1 ) == -1">
                <template v-if="dataImg[dataImg.length - 1]">
                  {{(dataImg[dataImg.length - 1].title)}}
                </template>
                
              </template>
              <template v-else>
                <template v-if="dataImg[thiswiperIndex - 1]">
                  {{(dataImg[thiswiperIndex - 1].title)}}
                </template>
                  
              </template> -->
                {{(thiswiperIndex -1 ) == -1 ? (dataImg[dataImg.length - 1].title): (dataImg[thiswiperIndex - 1].title)}}
            </h3>
            <!-- <p>上一个Banner内容简介展示anner内容简介展示上一个</p> -->
          </div>
        </div>
      </div>
      <div class="swiper-button-next">
        <div class="control-box next_box">
          <span></span>
          <div>
              <h3 v-if="dataImg[0].title||dataImg[thiswiperIndex + 1].title">
                {{(thiswiperIndex + 1) ==  dataImg.length ? (dataImg[0].title) : (dataImg[thiswiperIndex + 1].title)}}
              </h3>
              <!-- <h3>
              <template v-if="(thiswiperIndex + 1) ==  dataImg.length">
                <template v-if="dataImg[0]">
                  {{(dataImg[0].title)}}
                </template>
                
              </template>
              <template v-else>
                <template v-if="dataImg[thiswiperIndex + 1]">
                  {{(dataImg[thiswiperIndex + 1].title)}}
                </template>
                  
              </template>
              </h3> -->
            <!-- <p>下一个Banner内容简介展示下anner内容简介展示一个…</p> -->
          </div>
        </div>
      </div>
      <div class="mask-bg"></div>
    </div>

    <div class="button-box">
      <div class="center-content">
        <h3>北粮南运，通达天下</h3>
        <p>北粮通达整合粮食贸易与流通各环节资源，在“北粮南运”的粮食流通格局下，打造“金融+产业”的综合粮贸物流平台。</p>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";

export default {
  data() {
    return {
      isLoop: false,
      thiswiperIndex: 2,
      // titleData:this.dataImg,
       bannerList: [
      {
            adimage: require('../../assets/images/home/BANNER1.png')
        },
        {
            adimage: require('../../assets/images/home/BANNER2.png')
        },
        {
            adimage: require('../../assets/images/home/BANNER3.png')
        },
        {
            adimage: require('../../assets/images/home/BANNER4.png')
        }
      ]
    };
  },
  props: {
    dataImg: {
      type: [Array, Object]
    },
    imgHeight: {
      type: Number,
      default: 340
    }
  },
  mounted() {
    var len = this.bannerList.length;
    if (len == 1) {
      this.isLoop = 0;
    } else {
      this.isLoop = 5000;
    }
    var num2 = this;
    this.slider = new Swiper(".swiper-container", {
      autoplay: this.isLoop,
      speed: 300,
      loop: true,
      autoplayDisableOnInteraction: false,
      // observer: true,//修改swiper自己或子元素时，自动初始化swiper
      // observeParents: true,//修改swiper的父元素时，自动初始化swiper
      // 分页器
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      onSlideChangeStart: function(swiper){
            var num = swiper.activeIndex
            num2.thiswiperIndex = num;
      },
      onSlideChangeEnd: function(swiper){
            var num = swiper.activeIndex-2
            num2.thiswiperIndex = num;
       }

      // navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      // },
      // pagination: {
      //     el: '.swiper-pagination',
      // }
    });
    // this.$refs.slideImg.style.height = this.imgHeight + 'px'
  },
  computed: {
    // imgUrl() {
    // var len = this.imgUrl.length
    // if (len == 4) {
    //   // this.slider.loop = false
    // } else {
    //   this.slider.loop = true
    // }
    // }
  },
  methods: {
    
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../common/style/mixin";
.slider {
  position: relative;
  .swiper-container {
    width: 100%;
    height: 600px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .control-box {
      width: 230px;
      > div {
        color: #fff;
        h3 {
          margin: 46px 0 16px;
          @include ellipsis1;
          font-size:16px;
        }
      }
    }
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next .swiper-button-prev {
      left: 2%;
      background: url("../../assets/images/home/left-icon.png") no-repeat right
        center;
      background-size: 100% 100%;
      width: 18px;
      height: 35px;
      z-index: 99999;
      left: 50%;
      margin-left: -620px;
      top: 550px;
      .control-box {
        position: absolute;
        left: 0;
        top: -40px;
        @include ellipsis1;
        padding-left:50px;
      }
    }
    .swiper-button-next {
      right: 2%;
      background: url("../../assets/images/home/right-icon.png") no-repeat right
        center;
      background-size: 100% 100%;
      width: 18px;
      height: 35px;
      z-index: 99999;
      left: 50%;
      margin-left: 600px;
      top: 550px;
      .control-box {
        position: absolute;
        right: 0;
        top: -40px;
        text-align: right;
        @include ellipsis1;
        padding-right:50px;
      }
    }
  }
  .button-box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    .center-content {
      position: absolute;
      @include center;
      z-index:99;
      background: #fff;
      width: 484px;
      padding: 0 43px 30px 40px;
      box-shadow: 2px -20px 20px 0px rgba(0, 0, 0, 0.2);
      h3 {
        color: #333;
        font-size: 30px;
        margin: 45px 0 36px;
        font-weight: normal;
      }
      p {
        color: #666;
        font-size: 16px;
        line-height: 30px;
        @include ellipsis2(3);
      }
    }
  }
}
.mask-bg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  z-index: 1;
}
</style>

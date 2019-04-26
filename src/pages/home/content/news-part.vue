<template>
  <!-- 新闻中心 -->
  <div class="part fl" id="news">
    <div class="title">
      <span>新闻中心</span>
      <p>NEWS CENTER</p>
    </div>
    <div class="img-box">
      <!-- <div class="img-box" v-for="(item,index) in pro.title" :key="index"> -->
      <div @click="ToNews()">
        <span class="img-txt">新闻中心</span>
        <div class="img-out" :style="{width: '585px', height: '300px'}"  >
          <img src="../../../assets/images/home/image4.png" alt class>
        </div>
      </div>
    </div>
    <div class="news">
        <div @click="toNewsDetail(news[0].id)" class="news_first">
            <h3>{{news[0].title}}</h3>
            <p class="time">
                <i class="time-icon"></i>{{news[0].pushTimeStr}}
            </p>
            <p class="infom">{{news[0].introduction}}</p>
        </div>

      <ul>
        <li v-for="(item,index) in news.slice(1, 5)" :key="index" @click="toNewsDetail(item.id)">
          <div class="clearfix">
            <i class="fl"></i>
            <span class="fl">{{item.title}}</span>
            <b class="fr">{{item.pushTimeStr}}</b>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { newsLists } from "../../../service/getData";

export default {
  name: "news-part",
  data() {
    return {
      // 新闻中心
      news: [
        {
          title: "北粮：财富管理升级，从单一管理",
          time: "2017-08-09"
        },

      ]
    };
  },
  created(){
      newsLists({
            orgCode: 1013,
            startPage: 1,
            pageSize: 5,
            typeCodes: ['hyxw','jtxw']
        }).then(res => {
            this.news = res.result.data
        })
  },
  methods: {
      toNewsDetail(id){
        localStorage.setItem('newsId', id)
        this.$router.push('/newsDetails')
    },
    ToNews(){
      this.$router.push({path:'/news'})
    }
  }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../../common/style/mixin";
$color1: #c29b73;
$color2: #50a050;
$color3: #db2a36;
$color4: #333333;
$color5: #666666;
$color6: #999999;
$color7: #cccccc;
$color8: #ebebeb;
$color9: #f8f8f8;
$colorW: #ffffff;
img{
  transition: 0.3s all ease;
}
img:hover {
  transform: scale(1.1);
}
.title {
  padding: 125px 0;
  display: flex;
  span {
    width: 230px;
    line-height: 50px;
    font-size: 48px;
    color: $color4;
  }
  p {
    flex: 1;
    font-size: 24px;
    padding-top: 12px;
    color: $color6;
    border-bottom: 1px solid $color8;
    font-family:'宋体'
  }
}
.content {
  width: 1200px;
  margin: 0 auto;
  .part {
    &.business {
      height: 860px;
      overflow: hidden;
    }
    .img-box {
      display: flex;
      > div {
        flex: 1;
        position: relative;
        margin-right: 20px;
        &.on {
          &:hover {
            img {
              transform: scale(1.1);
              transition: 0.4s all ease;
            }
          }
          .img-mask {
            background-color: rgba(180, 136, 86, 0.65);
          }
          .img-txt2 {
            color: #fff;
          }
          i {
            color: $color1;
            background-color: $colorW;
          }
        }
        .img-mask {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          // background-color: rgba(0, 0, 0, .2);
        }
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .img-out {
          width: 100%;
          height: 100%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .img-txt {
          position: absolute;
          left: 0;
          top: -31px;
          width: 162px;
          height: 62px;
          line-height: 62px;
          font-size: 20px;
          color: $colorW;
          background: $color1;
          text-align: center;
          z-index: 3;
        }
        .img-txt2 {
          @include center;
          z-index: 3;
          color: $color1;
          font-size: 24px;
          width: 168px;
          text-align: center;
          &:nth-child(4) {
            width: 200px;
          }
        }
        .pos-box {
          position: absolute;
          left: 0;
          top: 560px;
          width: 100%;
          color: $colorW;
          background: rgba(0, 0, 0, 0.5);
          padding: 0 38px 24px 34px;
          box-sizing: border-box;
          transition: 0.4s top ease;
          .pos-title {
            font-size: 24px;
            line-height: 85px;
            font-weight: normal;
            .point {
              background: $colorW;
              position: static;
              display: inline-block;
              width: 10px;
              height: 10px;
              margin-right: 17px;
              top: -4px;
              margin-bottom: 4px;
            }
          }
          .pos-txt {
            font-size: 16px;
            padding-bottom: 20px;
          }
        }
        i {
          position: absolute;
          left: 0;
          top: 0;
          width: 44px;
          height: 40px;
          line-height: 40px;
          background: $color1;
          color: $colorW;
          font-size: 26px;
          text-align: Center;
          font-style: normal;
          z-index: 3;
        }
        b {
          position: absolute;
        }
      }
    }
    .info-box {
      position: relative;
      display: flex;
      margin-top: 32px;
      background: $color9;
      padding: 32px;
      .img-out {
        width: 560px;
        height: 284px;
        margin-right: 32px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 560px;
        height: 284px;
        margin-right: 32px;
      }
      .info-txt {
        flex: 1;
        margin-top: 15px;
        position: relative;
        h3 {
          line-height: 90px;
          font-size: 30px;
        }
        p {
          line-height: 34px;
          font-size: 16px;
          color: $color5;
        }
        span {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: $color1;
          }
        }
      }
      .triangle {
        position: absolute;
        top: -50px;
        left: 70px;
        width: 46px;
        height: 20px;
        background: url("../../../assets/images/home/triangle.png") no-repeat;
        background-size: 100% 100%;
        // margin-top: 32px;
        transform: translateY(32px);
      }
    }
    .news {
      width: 585px;
      .news_first{
        height:130px
      }
      h3 {
        line-height: 50px;
        @include ellipsis2(2);
        font-size: 30px;
        margin-top: 26px;
        cursor: pointer;
        &:hover {
          color: $color1;
        }
      }
      p {
        font-size: 14px;
        color: $color6;
        &.time {
          line-height: 35px;
          .time-icon {
            width: 12px;
            height: 12px;
            display: inline-block;
            background: url("../../../assets/images/home/time.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 6px;
          }
        }
        &.infom {
          @include ellipsis2(2);
          line-height: 24px;
          &:hover {
            color: $color1;
          }
        }
      }
      ul {
        font-size: 14px;
        color: $color4;
        margin: 42px 0 80px;
        li {
          margin-bottom: 4px;
          line-height: 30px;
          &:hover {
            color: $color1;
               i {
              background: $color1;
            }
          }
          i {
            width: 5px;
            height: 5px;
            background: $color7;
            margin: 13px 9px 0 20px;
          }
          b {
            margin-right: 22px;
          }
          &:nth-child(even) {
            background: $color9;
          }
        }
      }
    }
  }
}
.news-notice {
  .part {
    &:nth-child(2) {
      margin-left: 20px;
    }
    .img-box {
      > div {
        .img-txt {
          width: 120px;
          height: 44px;
          line-height: 46px;
          font-size: 18px;
          left: unset;
          right: 0;
        }
      }
    }
  }
}
</style>


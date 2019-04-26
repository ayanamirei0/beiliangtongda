<template>
  <div class="warp">
    <div class="header_content">
      <Header :currentIndex="currentIndex" :navColor="navColor"></Header>
    </div>
    <div id="newGroup" class="router_postion"><div id="newIndustry" class="router_postion"></div></div>
    
    <div class="content" >
      <div class="news_img">
        <img src="../../assets/images/news/new-img.png" alt>
        <div class="bg"></div>
      </div>
      <div class="news_txt" >
        <div class="new_title clearfix">
          <span :class="{ 'fl': true, 'active': isB}" @click.stop="change('hyxw', 1)" >行业新闻</span>
          <span :class="{ 'fl': true, 'active': !isB}" @click.stop="change('jtxw', 1)">集团新闻</span>
        </div>
        <ul>
          <li v-for="(item, index) in newsList" class="clearfix" :key="index" @click="toNewsDetail(item.id)">
            <div class="icon-box fl">
              <span>{{getEnMonth(item.pushTimeStr)}}</span>
              <br>
              <span>{{item.pushTimeStr.substr(5,2)}}</span>
            </div>
            <div class="txt-box fl">
              <div class="txt fl">
                <h3>{{item.title}}</h3>
                <p>{{item.introduction}}</p>
              </div>
              <span class="line fl"></span>
              <div class="time fl">{{item.pushTimeStr}}</div>
            </div>
          </li>
        </ul>
        <div id="page">
            <el-pagination
                background
                v-if="total != 0"
                :page-size = 4
                layout="prev, pager, next"
                :total="total"
                @current-change='getPage'>
            >
            </el-pagination>
        </div>
        
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";
import { newsLists } from "../../service/getData";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isChartShow: true, // 是否展示图表
      currentIndex: 3, //根据这个值制定当前页面属于哪个导航栏部分
      navColor: "white", //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
      newsList: [],
      enM: ['Jan','Feb','Mar', 'Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
      isB: true,
      main: 'hyxw',
      total: 0
    };
  },
  watch: {
    $route(to,from){
        if(this.$route.query.id == 'newGroup'){
          this.main = 'jtxw'
          this.change('jtxw', 1);

        }
      if(this.$route.query.id == 'newIndustry'){
          this.main = 'hyxw'
          this.change('hyxw', 1)
      }
    }
  },
  methods: {
    getEnMonth(item){
        var a = item.substr(5, 2).replace(/^0/,"")-1
        var b = this.enM[a]
        return b
    },
    change(str, num){
        this.isB = str == 'hyxw'
        this.main = str
        newsLists({
            orgCode: 1013,
            startPage: num,
            pageSize: 4,
            typeCodes: [this.main]
        }).then(res => {
            this.newsList = res.result.data
            this.total = parseInt(res.result.total)
        })
    },
    toNewsDetail(id){
        localStorage.setItem('newsId', id)
        this.$router.push('/newsDetails')
    },
    getPage: function(currentPage){
        this.change(this.main, currentPage)
                
    },
  },
  created(){
      newsLists({
            orgCode: 1013,
            startPage: 1,
            pageSize: 4,
            typeCodes: ['hyxw']
        }).then(res => {
            this.newsList = res.result.data
            this.total = parseInt(res.result.total)
        console.log(this.total)

        })
  },
  mounted(){
      
  }
};
</script>

<style lang="scss" scoped type="text/scss">
@import "../../common/style/mixin";
.warp {
  display: flex;
  flex-direction: column;
  position: relative;
  .header_content {
    height: 440px;
    background-color: pink;
    background: url(../../assets/images/news/banner.jpg) no-repeat center center;
    background-size: cover;
  }
  .router_postion{
    height:85px;
  }
  .content {
    width: 1200px;
    height: 719px;
    margin: 0 auto 85px;
    position: relative;
    .news_img {
        width: 552px;
        height: 720px;
        overflow: hidden;
        position: relative;
        .bg{
            width: 13px;
            height: 141px;
            position: absolute;
            bottom: 0;
            right: 0;
            background: #c29b73;
        }
    }
    img {
        transition: 0.3s all ease;
    }
    img:hover {
    transform: scale(1.1);
    }
    
    .news_txt {
      width: 760px;
      height: 588px;
      background: #fff;
      position: absolute;
      padding-left: 50px;
      right: 0;
      top: 0;
      .new_title {
        height: 40px;
        line-height: 40px;
        margin-bottom: 50px;
        span {
          font-size: 36px;
          margin-right: 30px;
          color: #ccc;
          &.active {
            color: #222;
            padding-bottom: 20px;
            position:relative;
            &:after {
              position: absolute;
              left: 50%;
              bottom: 0;
              height: 5px;
              content: "";
              width: 50px;
              margin-left: -25px;
              background-color: #c29b73;
            }
          }
          
        }
        span:hover{
              color: #222;
          }
      }
      ul {
        width: 710px;
        height: 450px;
        li {
          margin-bottom: 20px;
          background: #FAFAFA;
          .icon-box {
            width: 100px;
            height: 92px;
            text-align: center;
            background-color: #dcb287;
            span {
              color: #fff;
              &:nth-child(1) {
                margin: 23px 0 9px;
                font-size: 16px;
                display: inline-block;
              }
              &:nth-child(2) {
                margin: 23px 0 9px;
                font-size: 30px;
                display: inline-block;
              }
            }
          }
          .txt-box {
            width: 590px;
            margin-left: 20px;
            .txt {
              width: 420px;
              h3 {
                line-height: 30px;
                color: #222;
                font-size: 18px;
                margin-top: 10px;
              }
              p {
                line-height: 24px;
                @include ellipsis2(2);
                color: #999;
                font-size: 12px;
              }
            }
            .line {
              width: 1px;
              height: 40px;
              background-color: #999;
              margin: 26px 20px 0 43px;
            }
            .time {
              font-size: 16px;
              padding-top: 38px;
              color: #999;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 400px;
  }
  #page{
      display: flex;
      justify-content: space-around;
  }
}
</style>


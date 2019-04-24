<template>
  <div class="progressWrap">
    <ul>
      <li
        :class="{ current:item.step==current, finished: item.step < current}"
        v-for="item of list"
        :key="item.step"
      >
        <p class="step">{{item.step}}</p>
        <p class="title">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: this.currentStep,
      list: [
        {
          step: 1,
          title: "验证手机号"
        },
        {
          step: 2,
          title: "账号信息"
        },
        {
          step: 3,
          title: "个人信息"
        },
        {
          step: 4,
          title: "企业信息"
        },
        {
          step: 5,
          title: "提交审核"
        }
      ]
    };
  },
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },
  created() {
    let type = this.$route.query.type || "";
    if (type == 1) {
      this.current--;
      this.list = [
        {
          step: 1,
          title: "账号信息"
        },
        {
          step: 2,
          title: "个人信息"
        },
        {
          step: 3,
          title: "企业信息"
        },
        {
          step: 4,
          title: "提交审核"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin.scss";

.progressWrap {
  ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    text-align: center;

    &::after {
      content: "";
      position: absolute;
      bottom: 52px;
      width: 100%;
      height: 4px;
      background-color: $bgColor;
    }

    li {
      position: relative;
      flex: 1;
      font-size: 20px;
      color: $titleColor;
      padding-bottom: 90px;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 34px;
        display: inline-block;
        width: 100%;
        height: 32px;
        z-index: 1;
        background: url("../../assets/images/icon_nav_gray.png") no-repeat
          center center/contain;
      }
      &.current {
        &::after {
          background: url("../../assets/images/icon_nav_color.png") no-repeat
            center center/contain;
        }
        &::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          margin-left: -20px;
          display: inline-block;
          width: 0;
          height: 0;
          border: 20px solid transparent;
          border-bottom: 20px solid $bgColor;
          z-index: 1;
        }
      }
      &.finished {
        &::after {
          bottom: 47px;
          height: 12px;
          background: url("../../assets/images/dot_green.png") no-repeat center
            center/contain;
        }
      }
      p {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
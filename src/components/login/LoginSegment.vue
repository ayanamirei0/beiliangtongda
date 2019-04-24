<template>
  <div class="segment-wrap">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="activeIndex == index ? 'selected' : 'normal'"
        @click="showItem(index)"
      >
        <img class="icon" :src="activeIndex == index ? item.iconSelected : item.iconNormal">
        <!-- <span
          class="btn_text"
          :style="{color: activeIndex == index ? '#ffffff' : '#C29B73'}"
        >{{item.name}}</span>-->
        <img
          class="arrow"
          v-show="activeIndex == index ? true : false"
          src="../../assets/images/login/selected_arrow.png"
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LoginSegment",
  data() {
    return {
      activeIndex: -1,
      list: [
        {
          name: "密码登录",
          iconNormal: require("@/assets/images/login/pwd_normal.png"),
          iconSelected: require("@/assets/images/login/pwd_selected.png")
        },
        {
          name: "二维码登录",
          iconNormal: require("@/assets/images/login/qr_normal.png"),
          iconSelected: require("@/assets/images/login/qr_selected.png")
        },
        {
          name: "短信登录",
          iconNormal: require("@/assets/images/login/dx_normal.png"),
          iconSelected: require("@/assets/images/login/dx_selected.png")
        },
        {
          name: "人脸登录",
          iconNormal: require("@/assets/images/login/face_normal.png"),
          iconSelected: require("@/assets/images/login/face_selected.png")
        }
      ]
    };
  },
  methods: {
      showItem(index) {
          if (this.activeIndex == index) {
              return
          }
          this.activeIndex = index;
          this.$emit("activeIndex", index);
      }
  },
  mounted() {
    this.showItem(0);
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin";

ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 2px;
    cursor: pointer;
    width: 100%;

    .icon {
      width: 100%;
    }
    .btn_text {
      color: #c29b73;
      font-size: 18px;
    }
    .arrow {
      position: absolute;
      top: 50%;
      right: -13px;
      margin-top: -11px;
    }
    &:first-child {
      margin-top: 0;
    }
  }
}

.normal {
  background: rgba(238, 238, 238, 1);
  opacity: 0.9;
}

.selected {
  background: rgba(185, 149, 113, 1);
  opacity: 0.9;
}
</style>

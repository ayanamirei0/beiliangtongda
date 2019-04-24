<template>
  <div class="drag" ref="dragDiv">
    <div class="drag_bg" :class="{ active: confirmSuccess }"></div>
    <div class="drag_text">{{confirmWords}}</div>
    <div
      ref="moveDiv"
      @mousedown="mousedownFn($event)"
      :class="{'handler_ok_bg':confirmSuccess}"
      class="handler handler_bg"
      style="position: absolute;top: 0px;left: 0px;"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    isAbleMove: false
  },
  data() {
      return {
          beginClientX: 0 /*距离屏幕左端距离*/,
          mouseMoveStata: false /*触发拖动状态  判断*/,
          maxwidth: "" /*拖动最大宽度，依据滑块宽度算出来的*/,
          confirmWords: "" /*滑块文字*/,
          confirmSuccess: false /*验证成功判断*/
      };
  },
  methods: {
    mousedownFn: function(e) {
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault(); //阻止文字选中等 浏览器默认事件
        this.mouseMoveStata = true;
        this.beginClientX = e.clientX;
      }
    }, //mousedoen 事件
    successFunction() {
      this.$emit("confirmSuccess");
      this.confirmSuccess = true;
      this.confirmWords = "通过验证";
      if (window.addEventListener) {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mousemove", this.mouseMoveFn);
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", this.moseUpFn);
      } else {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", () => {});
      }
      document.getElementsByClassName("drag_text")[0].style.color = "#fff";
      document.getElementsByClassName("handler")[0].style.left =
        this.maxwidth + "px";
      document.getElementsByClassName("drag_bg")[0].style.width =
        this.maxwidth + "px";
    }, //验证成功函数
    mouseMoveFn(e) {
      if (!this.isAbleMove) {
        return;
      }
      if (this.mouseMoveStata) {
        let width = e.clientX - this.beginClientX;
        if (width > 0 && width <= this.maxwidth) {
          document.getElementsByClassName("handler")[0].style.left =
            width + "px";
          document.getElementsByClassName("drag_bg")[0].style.width =
            width + "px";
        } else if (width > this.maxwidth) {
          this.successFunction();
        }
      }
    }, //mousemove事件
    moseUpFn(e) {
      this.mouseMoveStata = false;
      var width = e.clientX - this.beginClientX;
      if (width < this.maxwidth) {
        document.getElementsByClassName("handler")[0].style.left = 0 + "px";
        document.getElementsByClassName("drag_bg")[0].style.width = 0 + "px";
      }
    } //mouseup事件
  },
  mounted() {
    this.maxwidth =
      this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mousemove", this.mouseMoveFn);
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mouseup", this.moseUpFn);
  }
};
</script>

<style scoped>
.drag {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.handler {
  width: 40px;
  height: 32px;
  border: 1px solid #ccc;
  cursor: move;
}
.handler_bg {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0IxOTI1MzQ2MUE0MTFFOThCNUZEOUM3ODY4OEMzM0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0IxOTI1MzU2MUE0MTFFOThCNUZEOUM3ODY4OEMzM0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQjE5MjUzMjYxQTQxMUU5OEI1RkQ5Qzc4Njg4QzMzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQjE5MjUzMzYxQTQxMUU5OEI1RkQ5Qzc4Njg4QzMzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj4YavgAAACySURBVHjajJNhEYVACISNYAQjGMEIRjDCRSDCRTDCRTCCEYzwGvBAccQb4diZ/feN7i3QISKQx64hYlZy34I2vAQNjvUjLx60CMQ6yJPBAT7iAIP1wZ5cFJy/nsR1kHeVEryUc5VyNrikuN3sXFJmlbIY3KD6ZiUvZbqpwJTPHq1kr7KDPUMNTNLVXXCks/cGyF9W3ZMxzbonaE0wumejdwHZOxf1dHdq0dss5taL/gIMAAKKjMl8Yzi8AAAAAElFTkSuQmCC")
    no-repeat center;
  background-size: 16px;
}
.handler_ok_bg {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIyMUM2RkFDNTlDNTExRTk5MDIxQTlERkJBMzBBNDM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIyMUM2RkFENTlDNTExRTk5MDIxQTlERkJBMzBBNDM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkU4MzcxNzU1OUM0MTFFOTkwMjFBOURGQkEzMEE0MzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkU4MzcxNzY1OUM0MTFFOTkwMjFBOURGQkEzMEE0MzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6zdGdwAAACdklEQVR42rRW30sUURT+ZvaHVpJJrYXKpIZk/giKCheJWKIXCXuo3M3X/oAI+x+i9x7rLZKiiKKoiDKLNCyIFjdR0XZrkbTFdFfb3zudO9xZp+XO7ozgBx+7c+bsd+4995x7VlJVFWWgEAeJPmIH0UPMEqPECPEt8R7xu6kCCyCgQrxLzKmVkee+ikhLJN5PjKv2kSBeqhTgCl/RZlEgXjUL4OcOtrHyK6zOjD81BvHrurLhMG8RJdjEwvRnTDy6iUxqXTdJXItpFgNcJ9bYFf8ZGsPk62GohTzc1TuMr5jWDT3AfmLArvjifBBTow9ZHWrPssNZ6jLAtGUuLtsRX19ZQohWroszJOPLpW6atsybyDLoDLW05LLp/+zxWFTk7mP76iovqEKSNs7+R/A9VhcjBg8JSncv2rxnRT/vYgH2iN6k/yYw/eExaur2ovXYmaJt7tPLDWlJxqFT59HU4TVbn8cpWnH02zhmPz5DLp2Eq2oblMMn4XRXk/gL5DKp4so7fX40tB8vm1J2BjGjYWbsCVXHA02cIUufkeA7pNb+YGFqoujX1tNXUZzwm+0gRGzULQd7z6GuoVULwlLCEPk6iuRqDAWqd4bG9hNoOXraSk1Msh28KbXWt3Sj5+IQauu1ZtR2wzqWYaenifJ+wWrRjUiU82b6MifqhXw2gy/Pb2M5Oqs9O1xV8A5cw/ba3VbEC8QDTDRMvC/ycLjcONJ3Gbv2NfP09VsVB9cMGwdMwuy2zCTX1OCrO3Yu24Q+gIzXdWCz17VgJgS2cuAMbeXIHLQyk/UzGba4mzz3FQ59ycbflk7WIty+xBt0hFfLvJnAPwEGAJKuvSKYBZi1AAAAAElFTkSuQmCC")
    no-repeat center;
  background-size: 15px;
}
.drag_bg {
  background-color: #6fb141;
  height: 34px;
  width: 0px;
}
.active {
  background-color: #6fb141;
}
.drag_text {
  position: absolute;
  top: 0px;
  color: #c29b73;
  font-size: 14px;
  width: 100%;
  text-align: center;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
}
</style>

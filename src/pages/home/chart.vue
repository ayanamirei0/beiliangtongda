
<template>
  <div>
    <div :class="isChartShow ? 'charts': 'charts close'" ref="myEchart" :style="{width: '100vw',height: '100vh'}"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据

export default {
  data() {
    return {};
  },
  props: ['isChartShow'],
  methods: {
    init() {
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;

      let option = this.optionChart(
        "粮食产量",
        "万吨",
        8000,
        0,
        true,
        false,
        false,
        [ "#FFF2A8","#D09648"],
        [ "#D09648"]
      );
      let option1 = this.optionChart(
        "播种面积",
        "千公顷",
        12000,
        0,
        false,
        true,
        false,
        [ '#FFF2A8', '#6AA050'],
        [ '#6AA050'],
      );
      let option2 = this.optionChart(
        "单位面积产量",
        "公斤/公顷",
        8000,
        3500,
        false,
        false,
        true,
        [ "#FFF2A8","#D17169"],
        [ "#D17169"]
      );

      myChart.setOption(option, true);

      myChart.on("legendselectchanged", function(params) {
        if (params.name == "粮食产量") {
          myChart.setOption(option, true);
        } else if (params.name == "播种面积") {
          myChart.setOption(option1, true);
        } else if (params.name == "单位面积产量") {
          myChart.setOption(option2, true);
        }
      });
    },
    randomData() {
      return Math.round(Math.random() * 1000);
    },
    optionChart(name, unit, max, min, flag1, flag2, flag3, inRangeColor, bgColor) {
      let that = this;
      return {
        title: {
          text: "2017-2018 全国及各省（区、市）" + name + "数据",
          left: "center",
          top:20
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          top: "50",
          left: "9%",
          data: ["粮食产量", "播种面积", "单位面积产量"],
          // color: 'red',
          selectedMode: "single",
          selected: {
            粮食产量: flag1,
            播种面积: flag2,
            单位面积产量: flag3
          }
        },
        visualMap: {
          min: min,
          max: max,
          left: "9%",
          top: "bottom",
          text: [name, "单位：" + unit], // 文本，默认为数值文本
          calculable: true,
          realtime: false,
          calculable: true,
          inRange: {
            color: inRangeColor
          }
        },
        color: bgColor,
        tooltip: {
          formatter: function(params) {
            if (name == "粮食产量") {
              var toolTiphtml = "";
              let toolTipData = that.toolTipData();
              for(var i = 0;i<toolTipData.length;i++){
                  if(params.name==toolTipData[i].name){
                      toolTiphtml += toolTipData[i].name+':<br>'
                      for(var j = 0;j<toolTipData[i].value.length;j++){
                          toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                      }
                  }
              }
              // console.log(convertData(data))
              return toolTiphtml;
            } else {
              return params.name + ": " + params.value + unit;
            }
          }
          // trigger: 'item',
        },
        series: [
          {
            name: "粮食产量",
            type: "map",
            // color: bgColor,
            mapType: "china",
            roam: false,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { name: "浙江", value: 580.14 },
              { name: "山西", value: 1355.1 },
              { name: "山东", value: 5374.31 },
              { name: "辽宁", value: 2330.74 },
              { name: "江西", value: 2221.73 },
              { name: "江苏", value: 3610.8 },
              { name: "吉林", value: 4154 },
              { name: "河北", value: 3829.25 },
              { name: "甘肃", value: 1105.9 },
              { name: "福建", value: 487.15 },
              { name: "安徽", value: 4019.71 },
              { name: "广东", value: 1208.56 },
              { name: "贵州", value: 1242.45 },
              { name: "海南", value: 138.11 },
              { name: "河南", value: 6524.25 },
              { name: "黑龙江", value: 7410.34 },
              { name: "湖北", value: 2846.13 },
              { name: "湖南", value: 3073.6 },
              { name: "青海", value: 102.55 },
              { name: "四川", value: 3488.9 },
              { name: "云南", value: 1843.42 },
              { name: "陕西", value: 1194.2 },
              { name: "广西", value: 1370.49 },
              { name: "内蒙古", value: 3254.54 },
              { name: "宁夏", value: 370.05 },
              { name: "西藏", value: 106.53 },
              { name: "新疆", value: 1484.73 },
              { name: "北京", value: 41.12 },
              { name: "天津", value: 212.27 },
              { name: "重庆", value: 1079.88 },
              { name: "上海", value: 99.78 }
            ],
          },
          {
            name: "播种面积",
            type: "map",
            mapType: "china",
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { name: "浙江", value: 1282.0 },
              { name: "山西", value: 3204.4 },
              { name: "山东", value: 7447.0 },
              { name: "辽宁", value: 3227.2 },
              { name: "江西", value: 3667.4 },
              { name: "江苏", value: 5406.4 },
              { name: "吉林", value: 5023.3 },
              { name: "河北", value: 6190.7 },
              { name: "甘肃", value: 2782.5 },
              { name: "福建", value: 1179.4 },
              { name: "安徽", value: 6642.5 },
              { name: "广东", value: 2500.1 },
              { name: "贵州", value: 3051.2 },
              { name: "海南", value: 348.3 },
              { name: "河南", value: 10135.5 },
              { name: "黑龙江", value: 11827.1 },
              { name: "湖北", value: 4471.7 },
              { name: "湖南", value: 4862.4 },
              { name: "青海", value: 278.6 },
              { name: "四川", value: 6441.4 },
              { name: "云南", value: 4446.1 },
              { name: "陕西", value: 3045.3 },
              { name: "广西", value: 2976.2 },
              { name: "内蒙古", value: 5757.8 },
              { name: "宁夏", value: 775.6 },
              { name: "西藏", value: 184.8 },
              { name: "新疆", value: 2289.1 },
              { name: "北京", value: 66.8 },
              { name: "天津", value: 351.2 },
              { name: "重庆", value: 2239.0 },
              { name: "上海", value: 118.7 }
            ]
          },
          {
            name: "单位面积产量",
            type: "map",
            mapType: "china",
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { name: "浙江", value: 5994.8 },
              { name: "山西", value: 4056.7 },
              { name: "山东", value: 6342.4 },
              { name: "辽宁", value: 6621.1 },
              { name: "江西", value: 5799.9 },
              { name: "江苏", value: 6547.5 },
              { name: "吉林", value: 7405.5 },
              { name: "河北", value: 5666.5 },
              { name: "甘肃", value: 4055.1 },
              { name: "福建", value: 5641.9 },
              { name: "安徽", value: 5233 },
              { name: "广东", value: 5460.4 },
              { name: "贵州", value: 3862.5 },
              { name: "海南", value: 4843.6 },
              { name: "河南", value: 5893.6 },
              { name: "黑龙江", value: 5089 },
              { name: "湖北", value: 5813.6 },
              { name: "湖南", value: 6136.9 },
              { name: "青海", value: 3614.7 },
              { name: "四川", value: 5431.1 },
              { name: "云南", value: 4339.8 },
              { name: "陕西", value: 3993.7 },
              { name: "广西", value: 4931.7 },
              { name: "内蒙古", value: 4808.2 },
              { name: "宁夏", value: 4747.4 },
              { name: "西藏", value: 5585.2 },
              { name: "新疆", value: 6324.1 },
              { name: "北京", value: 6145.7 },
              { name: "天津", value: 6036.3 },
              { name: "重庆", value: 5212.9 },
              { name: "上海", value: 7514.0 }
            ]
          }
        ]
      };
    },
    toolTipData() {
      return [
        {
          name: "浙江",
          value: [
            { name: "谷物产量(万吨)", value: 513.43 },
            { name: "稻谷产量(万吨)", value: 444.91 },
            { name: "小麦产量(万吨)", value: 41.92 },
            { name: "玉米产量(万吨)", value: 23.04 },
            { name: "豆类产量(万吨)", value: 27.38 }
          ]
        },
        {
          name: "山西",
          value: [
            { name: "谷物产量(万吨)", value: 1280.06 },
            { name: "稻谷产量(万吨)", value: 0.52 },
            { name: "小麦产量(万吨)", value: 232.4 },
            { name: "玉米产量(万吨)", value: 977.87 },
            { name: "豆类产量(万吨)", value: 28.31 }
          ]
        },
        {
          name: "山东",
          value: [
            { name: "谷物产量(万吨)", value: 5259.22 },
            { name: "稻谷产量(万吨)", value: 90.14 },
            { name: "小麦产量(万吨)", value: 2495.11 },
            { name: "玉米产量(万吨)", value: 2662.15 },
            { name: "豆类产量(万吨)", value: 33.62 }
          ]
        },
        {
          name: "辽宁",
          value: [
            { name: "谷物产量(万吨)", value: 2261.28 },
            { name: "稻谷产量(万吨)", value: 422.05 },
            { name: "小麦产量(万吨)", value: 1.26 },
            { name: "玉米产量(万吨)", value: 1789.44 },
            { name: "豆类产量(万吨)", value: 21.05 }
          ]
        },
        {
          name: "江西",
          value: [
            { name: "谷物产量(万吨)", value: 2145.94 },
            { name: "稻谷产量(万吨)", value: 2126.15 },
            { name: "小麦产量(万吨)", value: 3.1 },
            { name: "玉米产量(万吨)", value: 15.4 },
            { name: "豆类产量(万吨)", value: 28.29 }
          ]
        },
        {
          name: "江苏",
          value: [
            { name: "谷物产量(万吨)", value: 3536.21 },
            { name: "稻谷产量(万吨)", value: 1892.57 },
            { name: "小麦产量(万吨)", value: 1295.47 },
            { name: "玉米产量(万吨)", value: 318.07 },
            { name: "豆类产量(万吨)", value: 58.79 }
          ]
        },
        {
          name: "吉林",
          value: [
            { name: "谷物产量(万吨)", value: 4043.97 },
            { name: "稻谷产量(万吨)", value: 684.43 },
            { name: "小麦产量(万吨)", value: 0.15 },
            { name: "玉米产量(万吨)", value: 3250.78 },
            { name: "豆类产量(万吨)", value: 67.08 }
          ]
        },
        {
          name: "河北",
          value: [
            { name: "谷物产量(万吨)", value: 3674.51 },
            { name: "稻谷产量(万吨)", value: 850.43 },
            { name: "小麦产量(万吨)", value: 1504.12 },
            { name: "玉米产量(万吨)", value: 2035.48 },
            { name: "豆类产量(万吨)", value: 20.83 }
          ]
        },
        {
          name: "甘肃",
          value: [
            { name: "谷物产量(万吨)", value: 889.31 },
            { name: "稻谷产量(万吨)", value: 2.92 },
            { name: "小麦产量(万吨)", value: 269.72 },
            { name: "玉米产量(万吨)", value: 576.67 },
            { name: "豆类产量(万吨)", value: 25.16 }
          ]
        },
        {
          name: "福建",
          value: [
            { name: "谷物产量(万吨)", value: 406.3 },
            { name: "稻谷产量(万吨)", value: 393.19 },
            { name: "小麦产量(万吨)", value: 0.06 },
            { name: "玉米产量(万吨)", value: 11.4 },
            { name: "豆类产量(万吨)", value: 9.95 }
          ]
        },
        {
          name: "安徽",
          value: [
            { name: "谷物产量(万吨)", value: 3907.74 },
            { name: "稻谷产量(万吨)", value: 1647.46 },
            { name: "小麦产量(万吨)", value: 1644.47 },
            { name: "玉米产量(万吨)", value: 610.66 },
            { name: "豆类产量(万吨)", value: 97.14 }
          ]
        },
        {
          name: "广东",
          value: [
            { name: "谷物产量(万吨)", value: 1101.98 },
            { name: "稻谷产量(万吨)", value: 1046.34 },
            { name: "小麦产量(万吨)", value: 0.15 },
            { name: "玉米产量(万吨)", value: 54.64 },
            { name: "豆类产量(万吨)", value: 11.14 }
          ]
        },
        {
          name: "贵州",
          value: [
            { name: "谷物产量(万吨)", value: 950.6 },
            { name: "稻谷产量(万吨)", value: 448.83 },
            { name: "小麦产量(万吨)", value: 41.2 },
            { name: "玉米产量(万吨)", value: 441.18 },
            { name: "豆类产量(万吨)", value: 25.56 }
          ]
        },
        {
          name: "海南",
          value: [
            { name: "谷物产量(万吨)", value: 123.24 },
            { name: "稻谷产量(万吨)", value: 123.23 },
            { name: "小麦产量(万吨)", value: 0 },
            { name: "玉米产量(万吨)", value: 0 },
            { name: "豆类产量(万吨)", value: 1.73 }
          ]
        },
        {
          name: "河南",
          value: [
            { name: "谷物产量(万吨)", value: 6382.89 },
            { name: "稻谷产量(万吨)", value: 485.25 },
            { name: "小麦产量(万吨)", value: 3705.21 },
            { name: "玉米产量(万吨)", value: 2170.14 },
            { name: "豆类产量(万吨)", value: 53.36 }
          ]
        },
        {
          name: "黑龙江",
          value: [
            { name: "谷物产量(万吨)", value: 6609.71 },
            { name: "稻谷产量(万吨)", value: 2819.33 },
            { name: "小麦产量(万吨)", value: 38.09 },
            { name: "玉米产量(万吨)", value: 3703.11 },
            { name: "豆类产量(万吨)", value: 719.62 }
          ]
        },
        {
          name: "湖北",
          value: [
            { name: "谷物产量(万吨)", value: 2716.03 },
            { name: "稻谷产量(万吨)", value: 1927.16 },
            { name: "小麦产量(万吨)", value: 426.9 },
            { name: "玉米产量(万吨)", value: 356.75 },
            { name: "豆类产量(万吨)", value: 38.48 }
          ]
        },
        {
          name: "湖南",
          value: [
            { name: "谷物产量(万吨)", value: 2955.15 },
            { name: "稻谷产量(万吨)", value: 2740.35 },
            { name: "小麦产量(万吨)", value: 9.61 },
            { name: "玉米产量(万吨)", value: 199.17 },
            { name: "豆类产量(万吨)", value: 31.98 }
          ]
        },
        {
          name: "青海",
          value: [
            { name: "谷物产量(万吨)", value: 64.93 },
            { name: "稻谷产量(万吨)", value: 0 },
            { name: "小麦产量(万吨)", value: 42.33 },
            { name: "玉米产量(万吨)", value: 12.24 },
            { name: "豆类产量(万吨)", value: 2.8 }
          ]
        },
        {
          name: "四川",
          value: [
            { name: "谷物产量(万吨)", value: 2831.81 },
            { name: "稻谷产量(万吨)", value: 1473.7 },
            { name: "小麦产量(万吨)", value: 251.6 },
            { name: "玉米产量(万吨)", value: 1068 },
            { name: "豆类产量(万吨)", value: 119.23 }
          ]
        },
        {
          name: "云南",
          value: [
            { name: "谷物产量(万吨)", value: 1568.09 },
            { name: "稻谷产量(万吨)", value: 529.23 },
            { name: "小麦产量(万吨)", value: 73.68 },
            { name: "玉米产量(万吨)", value: 912.93 },
            { name: "豆类产量(万吨)", value: 118.31 }
          ]
        },
        {
          name: "陕西",
          value: [
            { name: "谷物产量(万吨)", value: 1074.32 },
            { name: "稻谷产量(万吨)", value: 80.57 },
            { name: "小麦产量(万吨)", value: 406.41 },
            { name: "玉米产量(万吨)", value: 551.15 },
            { name: "豆类产量(万吨)", value: 28.63 }
          ]
        },
        {
          name: "广西",
          value: [
            { name: "谷物产量(万吨)", value: 1297.98 },
            { name: "稻谷产量(万吨)", value: 1019.78 },
            { name: "小麦产量(万吨)", value: 0.51 },
            { name: "玉米产量(万吨)", value: 271.64 },
            { name: "豆类产量(万吨)", value: 24.68 }
          ]
        },
        {
          name: "内蒙古",
          value: [
            { name: "谷物产量(万吨)", value: 2930.84 },
            { name: "稻谷产量(万吨)", value: 85.23 },
            { name: "小麦产量(万吨)", value: 189.05 },
            { name: "玉米产量(万吨)", value: 2497.44 },
            { name: "豆类产量(万吨)", value: 186.19 }
          ]
        },
        {
          name: "宁夏",
          value: [
            { name: "谷物产量(万吨)", value: 333.12 },
            { name: "稻谷产量(万吨)", value: 68.85 },
            { name: "小麦产量(万吨)", value: 37.82 },
            { name: "玉米产量(万吨)", value: 214.87 },
            { name: "豆类产量(万吨)", value: 1.73 }
          ]
        },
        {
          name: "西藏",
          value: [
            { name: "谷物产量(万吨)", value: 102.01 },
            { name: "稻谷产量(万吨)", value: 0.5 },
            { name: "小麦产量(万吨)", value: 21.94 },
            { name: "玉米产量(万吨)", value: 3 },
            { name: "豆类产量(万吨)", value: 3.98 }
          ]
        },
        {
          name: "新疆",
          value: [
            { name: "谷物产量(万吨)", value: 1454.35 },
            { name: "稻谷产量(万吨)", value: 65.47 },
            { name: "小麦产量(万吨)", value: 612.58 },
            { name: "玉米产量(万吨)", value: 772.62 },
            { name: "豆类产量(万吨)", value: 14.6 }
          ]
        },
        {
          name: "北京",
          value: [
            { name: "谷物产量(万吨)", value: 39.93 },
            { name: "稻谷产量(万吨)", value: 0.07 },
            { name: "小麦产量(万吨)", value: 6.19 },
            { name: "玉米产量(万吨)", value: 33.21 },
            { name: "豆类产量(万吨)", value: 0.58 }
          ]
        },
        {
          name: "天津",
          value: [
            { name: "谷物产量(万吨)", value: 209.94 },
            { name: "稻谷产量(万吨)", value: 26.33 },
            { name: "小麦产量(万吨)", value: 62.41 },
            { name: "玉米产量(万吨)", value: 119.29 },
            { name: "豆类产量(万吨)", value: 0.85 }
          ]
        },
        {
          name: "重庆",
          value: [
            { name: "谷物产量(万吨)", value: 756.4 },
            { name: "稻谷产量(万吨)", value: 486.99 },
            { name: "小麦产量(万吨)", value: 9.78 },
            { name: "玉米产量(万吨)", value: 252.62 },
            { name: "豆类产量(万吨)", value: 40.22 }
          ]
        },
        {
          name: "上海",
          value: [
            { name: "谷物产量(万吨)", value: 99.25 },
            { name: "稻谷产量(万吨)", value: 85.6 },
            { name: "小麦产量(万吨)", value: 10.18 },
            { name: "玉米产量(万吨)", value: 2.1 },
            { name: "豆类产量(万吨)", value: 0.3 }
          ]
        }
      ];
    }
  },			
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.charts{
  // background:#07213a;
  &.close{
    height: 0!important;
    overflow: hidden;
  }
}
#chart_example {
  width: 100vw;
  height: 100vh;
}
</style>

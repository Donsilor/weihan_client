<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">报表</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="reportbox fl" id="myChart">

          </div>
          <div class="databox fl">
            <a href="javascript:" class="congrade" @click="$emit('setGradeLine')">设置分数线</a>
          </div>
          <div class="btns">
            <a href="javascript:" class="startImport">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'reportDialog',
  props: {
    close: {
      type: Function,
      defalult: e=>console.log(e)
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 30,
          top: 90,
          bottom: 20,
          itemGap: 20,
          itemWidth: 45,
          itemHeight: 20,
          formatter: ' {name}',
          // formatter:function(value){
          //     return '{d}%' + value
          // },
          data: ['不及格', '中', '良', '优']
        },
        alculable: true,
        color: ['#fe0000', '#0071bd', '#23b574', '#ffff01'],
        series: [{
          name: '百分比',
          type: 'pie',
          radius: '90%',
          center: ['35%', '55%'],
          itemStyle: {
            normal: {
              label: {
                show: false   //隐藏标示文字
              },
              labelLine: {
                show: false   //隐藏标示线
              }
            }
          },
          data: [
            { value: 40, name: '不及格' },
            { value: 10, name: '中' },
            { value: 10, name: '良' },
            { value: 40, name: '优' }
          ]
        }]
      })
    }
  }

}

</script>

<style lang="stylus" scoped>

@import "~assets/common.styl"
.popupWrap
  height 26rem

.reportbox
  width 60%
  height 80%

.databox
  width 40%
  height 80%

.startImport
  padding 0 2rem !important

.congrade
  display: inline-block;
  font-size: 1.125rem;
  float right
  line-height: 2.625rem;
  padding: 0 1.5rem;
  color: #fff;
  background-color: #34a5dd;
  border: 1px solid #34a5dd;
  border-radius: 0.3rem;
</style>

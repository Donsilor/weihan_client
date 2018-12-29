<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">导出</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <h4>导出哪些数据</h4>
          <div class="data">
            <input type="radio" name="seleData" value=true id="present" v-model="select">
            <label for="present">当前筛选的数据（<span>200</span>条）</label>
            <input type="radio" name="seleData" value=false id="all" class="all" v-model="select">
            <label for="all">全部数据（<span>372</span>条）</label>
          </div>
          <h4>导出字段</h4>
          <div class="fields_box">
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
          </div>
          <h4 v-if="select">可选字段</h4>
          <div v-if="select" class="fields_box backcolor">
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
            <div class="fields">考试名称<i></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExamExport',
  data () {
    return {
      select: true
    }
  },
  props: {
    close: {
      type: Function,
      default: e => console.log(e)
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
.centerLayer
  width auto !important

  .popupWrap
    h4
      font-size 1.6rem
      color #111
      font-weight normal
      margin-bottom 1.2rem

    .data
      font-size 1.2rem
      margin-bottom 2rem

      input
        line-height 1rem

      label
        margin-right 3rem
        line-height 1rem
        padding-bottom 1rem
        font-size 1.2rem

    .fields_box
      font 0
      width 50rem
      margin-bottom 2rem

      .fields
        width 9rem
        height 2.6rem
        line-height 2.4rem
        display inline-block
        margin-right 5%
        margin-bottom 1rem
        padding-left .8rem
        background-color #34a5dd
        color #fff
        border-radius 2px
        font-size 1.2rem
        border 1px solid #34a5dd

      &.backcolor .fields
        background-color #fff
        border 1px solid #666
        color #666

</style>

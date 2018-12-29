<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">导出</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap clf">
          <h4>导出哪些数据</h4>
          <div class="data">
            <input type="radio" name="seleData" value=true id="present" v-model="select">
            <label for="present">当前筛选的数据（<span>200</span>条）</label>
            <input type="radio" name="seleData" value=false id="all" class="all" v-model="select">
            <label for="all">全部数据（<span>372</span>条）</label>
          </div>
          <h4>导出字段</h4>
            <div class="fields_box">
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
            </div>
            <h4>可选字段</h4>
            <div class="fields_box backcolor">
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
              <div class="fields">考试名称<i class="iconfont">&#xe663;</i></div>
            </div>
            <a href="#" class="fr">开始导出</a>
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
    option:{
      type:Object,
      default(){
        return {
          name:null
        }
      }
    },
    close: {
      type: Function,
      default: e=>console.log(e)
    },
    submit: {
      type: Function,
      default: e=>console.log(e)
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "~assets/common.styl"
  @import "~assets/export.styl"
</style>

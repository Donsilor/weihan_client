<template>
  <div class="maskLayer" v-if="ifImportTask">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">导入</span>
          <i class="iconfont fr" @click="$emit('cancelImport', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="item clf">
            <div class="title"><i class="iconfont">&#xe6dd;</i>下载模板</div>
            <div class="subText">为提高导入的成功率，请下载并使用系统提供的模板</div>
            <a href="javascript:" class="downloadTemplate">下载模板</a>
          </div>
          <div class="item">
            <div class="title"><i class="iconfont">&#xe71a;</i>上传</div>
            <div class="subText">仅支持 xlsx，xls，csv，文件大小≤1G</div>
            <div class="selectFile">
              <label>
                <input type="text">
              </label>
              <label>
                <input type="file" hidden>
                <a href="javascript:">选择文件</a>
              </label>
            </div>
          </div>
          <div class="btns">
            <a href="javascript:" class="startImport">开始导入</a>
          </div>
        </div>
      </div>
      <div class="progressBarWrap">
        <div @click="$emit('importSucceed', true)"> 正在导入
          <span>100</span>/
          <span>248</span>
        </div>
        <div class="progressBar clf">
          <div class="fl">
            <div class="info"></div>
          </div>
          <div class="fr">20%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExamImport',
  data () {
    return {}
  },
  props: {
    ifImportTask: {
      type: Boolean,
      defalult: false
    }
  }
}

</script>

<style lang="stylus" scoped>

@import "~assets/common.styl"

.newContest

  .item
    width 80%
    margin auto

    .title
      font-size 1.25rem
      line-height 2.5rem
      position relative

      .iconfont
        font-size 1.25rem
        position absolute
        left -2rem

    .subText
      font-size 1rem
      line-height 1.5
      color #7b7b7b
      padding .5rem 0

    .selectFile

      &:after
        cleaerfix()

      input
        float left
        width 80%
        height 2.5rem
        border 1px solid #b5b5b5

      a
        float right
        width 15%
        height 2.5rem
        font-size 1rem
        line-height 2.5rem
        text-align center
        background-color #34a5dd
        color #fff
        border-radius .3rem

  a.downloadTemplate
    float left
    width 15%
    height 2.5rem
    font-size 1rem
    line-height 2.5rem
    text-align center
    background-color #34a5dd
    color #fff
    border-radius .3rem
    margin-top 1rem
    margin-bottom 2.6rem

.progressBarWrap
  margin-top 1rem
  padding 2rem 15%
  background-color #fff

  .progressBar
    margin-top 1rem
    width 80%

    .fl
      height 1rem
      width 88%
      border 1px solid #aaa

      .info
        width 20%
        height 1rem
        background-color #aaa

</style>

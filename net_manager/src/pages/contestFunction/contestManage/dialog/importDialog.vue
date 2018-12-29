<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">导入</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="item">
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
            <a href="javascript:" class="startImport" @click="$emit('importing', true)">开始导入</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ImportDialog',
  props: {
    close: {
      type: Function,
      default: e => console.log(e)
    },
    submit: {
      type: Function,
      default: e => console.log(e)
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

    &:not(:last-of-type)
      margin-bottom 2rem

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
        clearfix()

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

    .downloadTemplate
      display inline-block
      font-size 1rem
      line-height 2.5rem
      padding 0 1rem
      color #fff
      background-color #34a5dd
      border-radius .3rem

</style>

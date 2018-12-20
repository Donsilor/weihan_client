<template>
  <div>
    <top-bar></top-bar>
    <div class="backupsWrap">
      <div class="item">
        <label>导入：</label>
        <div class="block">
          <a href="javascript:">所有基本信息</a>
          <a href="javascript:">新生信息</a>
        </div>
      </div>
      <div class="item">
        <label>导出：</label>
        <div class="block">
          <a href="javascript:">所有基本信息</a>
        </div>
      </div>
      <div class="item">
        <label>教学资料备份路径：</label>
        <div class="block">
          <input type="text">
          <a href="javascript:">浏览</a>
          <a href="javascript:">备份</a>
        </div>
      </div>
      <p class="hint">（注：教学资料为视频和pdf文档）</p>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'

export default {
  name: 'Backups',
  components: {
    TopBar
  },
    data () {
    return {}
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.backupsWrap
  padding 1.625rem 2rem

  .item
    line-height 1.625rem
    margin-bottom 1rem

    &:before,
    &:after
      content ''
      display table

    &:after
      clear: both

    > label
      float left
      font-size 1.125rem
      padding-right 2rem

    > .block
      margin-left auto

      a
        display inline-block
        height 1.625rem
        line-height 1.5rem
        font-size .75rem
        border 1px solid $borderColor
        border-radius .3rem
        padding 0 1rem

        &:not(:last-child)
          margin-right 2rem

      input
        width 13.75rem
        height 1.875rem
        border 1px solid $borderColor
        margin-right 1.375rem

  p.hint
    font-size .875rem
    color #7c7c7c
    margin-top -.3rem

</style>

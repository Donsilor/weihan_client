<template>
  <div class="operateBar clf">
    <label class="selectAll" @click="$emit('selectAll', ifAllSelect = !ifAllSelect)">
      <i class="iconfont checkBox" :class="{'active': ifAllSelect}">&#xe663;</i>
      <span>全选</span>
    </label>
    <i class="iconfont" v-if="deleteBtn">&#xe63a;</i>
    <router-link tag="i" class="iconfont" v-if="projectionScreen" :to="'/monitoring'">&#xe60a;</router-link>
    <i class="iconfont" v-if="stopBtn">&#xe618;</i>
    <div class="inquireOperate" v-if="inquireOperate">
      <span>平均成绩：88</span>
      <a href="javascript:">导出</a>
      <a href="javascript:">打印</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OperateBar',
  data () {
    return {
      ifAllSelect: false
    }
  },
  props: {
    deleteBtn: {
      type: Boolean,
      default: false
    },
    projectionScreen: {
      type: Boolean,
      default: false
    },
    stopBtn: {
      type: Boolean,
      default: false
    },
    inquireOperate: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.operateBar
  font-size .875rem
  line-height 1.625rem
  padding 1rem 1.25rem

  .selectAll
    margin-right 2%
    height 1rem
    font-size .875rem
    line-height 1rem

  .checkBox
    margin-right 6px
    width 1rem
    height 1rem
    border 1px solid $borderColor
    color #fff
    font-size 1rem
    line-height 1rem
    transition all .3s

    &.active
      background-color #409EFF
      border-color #409EFF

  > .iconfont
    font-size 1.25rem
    margin-right 1rem
    vertical-align middle
    cursor pointer

    &:hover
      color $iconfontColor

  .inquireOperate
    display inline-block

  a
    display inline-block
    height 1.625rem
    line-height 1.5rem
    font-size .75rem
    border 1px solid $borderColor
    border-radius .3rem
    padding 0 1rem

    &:not(:first-child)
      margin-left 1rem

    &:active
      color #fff
      background-color #38a4de
      border-color #38a4de

</style>

<template>
  <div class="operateBar clf">
    <label class="selectAll">
       <i class="iconfont checkBox" :class="{'active': ifAllSelect}">&#xe663;</i>
      <span>全选</span>
    </label>
    <i class="iconfont" v-if="deleteBtn">&#xe63a;</i>
    <router-link tag="i" class="iconfont" v-if="projectionScreen" :to="'/monitoring'">&#xe60a;</router-link>
    <i class="iconfont" v-if="stopBtn">&#xe618;</i>
  </div>
</template>

<script>

export default {
  name: '',
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
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.operateBar
  padding 20px

  .selectAll
    margin-right 2%
    height 16px
    font-size 14px
    line-height 15px

  .checkBox
    margin-right 6px
    width 16px
    height 16px
    border 1px solid $borderColor
    color #fff
    font-size 15px
    line-height 15px

  > .iconfont
    font-size 20px
    margin-right 1rem
    vertical-align middle
    cursor pointer

    &:hover
      color $iconfontColor

</style>

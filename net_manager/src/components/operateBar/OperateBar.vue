<template>
  <div class="operateBar clf">
    <label class="selectAll fl">
       <i class="iconfont checkBox" :class="{'active': ifAllSelect}">&#xe663;</i>
      <span>全选</span>
    </label>
    <a href="javascript:" class="fl iconfont" v-if="deleteBtn">&#xe63a;</a>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {}
  },
  props: {
    deleteBtn: {
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
    border 1px solid $lightGray
    color #fff
    font-size 15px
    line-height 15px

</style>

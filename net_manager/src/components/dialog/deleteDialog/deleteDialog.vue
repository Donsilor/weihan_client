<template>
  <div class="maskLayer" v-if="0">
    <div class="centerLayer">
      <div class="popup delete clf">
        <div class="popupTopBar">
          <span class="title fl">删除</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <p>
            <span>选中数:</span>
            <span>127</span>
          </p>
          <h1>你确认要删除这些学校吗？</h1>
          <div class="btns">
            <a href="javascript:" @click="$emit('confirmDelete', true)">确定</a>
            <a href="javascript:" class="cancel" @click="close()">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {}
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

.delete
  width 770px
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)

  .popupWrap
    padding 3rem 5rem !important

  h1
    font-size 1.75rem
    font-weight normal
    padding 4rem 0

  p
    font-size 1.375rem
    color #838383

</style>

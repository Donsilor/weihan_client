<template>
  <div class="maskLayer" v-if="ifAddService">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建</span>
          <i class="iconfont fr" @click="$emit('cancelNew', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="teachtype clf">
            <span><i class="iconfont">&#xe603;</i>教学类型：</span>
            <input type="text">
          </div>
          <div class="btns textAlignLeft">
            <a href="javascript:">确定</a>
            <a href="javascript:" class="cancel" @click="$emit('cancelNew', false)">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddService',
  props: {
    ifAddService: {
      type: Boolean,
      default: false
    }
  },

  methods: {}
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
</style>

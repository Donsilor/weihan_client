<template>
  <div class="maskLayer" v-if="ifEditService">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">编辑</span>
          <i class="iconfont fr" @click="$emit('cancelEdit', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="teachtype clf">
            <span><i class="iconfont">&#xe603;</i>教学类型：</span>
            <input type="text">
          </div>
          <div class="btns textAlignLeft">
            <a href="javascript:">确定</a>
            <a href="javascript:" class="cancel" @click="$emit('cancelEdit', false)">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditService',
  props: {
    ifEditService: {
      type: Boolean,
      default: true
    }
  },

  methods: {}
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
.service
  width 770px
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)

.window-content
  padding-top 40px
  background-color #ffffff

.but
  padding-bottom 80px
  padding-left 200px


</style>

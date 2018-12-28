<template>
  <div class="maskLayer" v-if="ifNewSchool">
    <div class="centerLayer">
      <div class="popup delete">
        <div class="popupTopBar">
          <span class="title fl">新建学校</span>
          <i class="iconfont fr" @click="$emit('cancelNew', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="schoolname clf">
            <span><i class="iconfont">&#xe603;</i>学校名称：</span>
            <input type="text">
          </div>
          <div class="serverurl clf">
            <span><i class="iconfont">&#xe603;</i>服务器网址：</span>
            <input type="text">
          </div>
          <div class="btns textAlignLeft">
            <a href="javascript:">确定</a>
            <a href="javascript:" class="cancel">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSchool',
  props: {
    ifNewSchool: {
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

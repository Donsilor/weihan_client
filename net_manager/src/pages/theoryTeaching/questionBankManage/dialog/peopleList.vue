<template>
  <div class="maskLayer" v-if="0">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">人员名单</span>
          <i class="iconfont fr" @click="$emit('cancelCompile', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="fl"></div>
          <div class="fr"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewwExam',
  data () {
    return {
    }
  },
  props: {
    ifCompile: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
@import "~assets/new_exam.styl"
.centerLayer
    width 45rem

    .popup
        height 30rem

        div
            width 50%
            background-color red




</style>

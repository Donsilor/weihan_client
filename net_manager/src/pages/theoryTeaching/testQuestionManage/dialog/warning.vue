<template>
  <div class="maskLayer" v-if="ifShowWarning">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">删除</span>
          <i class="iconfont fr" @click="$emit('closeWarn', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
           <div class="occupied">
              <div v-if="1">选中数：<span>127</span></div>
           </div>
           <div class="explain">
              <div v-if="0">
                <i></i>还有学生在该房间内进行考试，不能修改考试参数
              </div>
              <div v-else-if="1">
                <i></i>你确定要删除这些题库吗？<br/>删除题库将会连同该题库内的试题一起删除？
              </div>
              <div v-else>
                  你确定要删除这些考试嘛？
              </div>
            </div>
            <div class="btn clf">
                <button class="fr" @click="$emit('closeWarn', false)">取消</button>
                <button class="fr" @click="$emit('closeWarn', false)">确定</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Warning',
  data () {
    return {
      ss: true
    }
  },
  props: {
    ifShowWarning: {
      type: Boolean,
      defalult: false
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "~assets/common.styl"
  @import "~assets/error.styl"
</style>

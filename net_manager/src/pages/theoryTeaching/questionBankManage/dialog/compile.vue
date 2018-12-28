<template>
  <div class="maskLayer" v-if="0">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">编辑</span>
          <i class="iconfont fr" @click="$emit('cancelCompile', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <ul>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;题库名称：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;题库类型：</div>
              <div><input type="text"></div>
            </li>
            <li class="last">
              <div></div>
              <div class="btns">
                <a href="javascript:" @click="$emit('cancelCompile', false)">确定</a>
                <a href="javascript:" @click="$emit('cancelCompile', false)">取消</a>
              </div>
            </li>
          </ul>
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
    width 42rem

    .popup li div:last-child
        width 68%

    .last .btns
        text-align left
        padding-left 5%

</style>

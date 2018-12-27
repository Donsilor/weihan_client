<template>
  <div class="maskLayer" v-if="ifNewQuestion">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建题库</span>
          <i class="iconfont fr" @click="$emit('cancelNewQuestion', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <ul>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;题库名称：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;级别：</div>
              <div>
                <select name="">
                  <option value="">请选择</option>
                  <option value="">初级</option>
                  <option value="">高级</option>
                  <option value="">中级</option>
                </select>
              </div>
            </li>   
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;题库类别：</div>
              <div>
                <select name="">
                  <option value="">请选择</option>
                  <option value="">单项选择题</option>
                  <option value="">多项选择题</option>
                  <option value="">是非题</option>
                </select>
              </div>
            </li> 
            <li class="last">
              <div></div>
              <div class="btns">
                <a href="javascript:" @click="$emit('cancelNewQuestion', false)">确定</a>
                <a href="javascript:" @click="$emit('cancelNewQuestion', false)">取消</a>
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
    ifNewQuestion: {
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
    width 36rem

    .popup li div:last-child
        width 68%

    .last .btns
        text-align left 

</style>

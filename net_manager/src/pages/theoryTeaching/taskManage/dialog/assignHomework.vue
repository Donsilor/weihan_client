<template>
  <div class="maskLayer" v-if="ifNewHomework">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建作业</span>
          <i class="iconfont fr" @click="$emit('cancelNewHomework', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <ul>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;作业名称：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;有效时间：</div>
              <div>
                <el-date-picker
                  class="timer"
                  v-model="value1"
                  type="date">
                </el-date-picker>
                <span class="line"></span>
                <el-date-picker
                  class="timer fr"
                  v-model="value1"
                  type="date">
                </el-date-picker>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;作业库名称：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">初级</option>
                  <option value="">高级</option>
                  <option value="">中级</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;添加作业题：</div>
              <div class="btn">
                <input type="text" class="small">
                <a href="javascript:void(0)" class="fr">添加</a>
              </div>
            </li> 
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;学生：</div>
              <div class="btn">
                <input type="text" class="small">
                <a href="javascript:void(0)" class="fr">添加</a>
              </div>
            </li>     
            <li class="last">
              <div></div>
              <div class="btns">
                <a href="javascript:" @click="$emit('cancelNewHomework', false)">确定</a>
                <a href="javascript:" @click="$emit('cancelNewHomework', false)">取消</a>
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
    ifNewHomework: {
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
    width 43rem

    .popup li 

        div
          margin-bottom  1rem
    
        div:last-child
          width 68%

        .timer
          width 40% !important
          height 2rem !important
          margin 0

        .line
          display inline-block
          width 16%
          height 4px
          border-top  1px solid #aaa 
          
        .btn
          .small
            width 80%

          & a
            width 15%
            height 2rem
            background-color #35a5de
            text-align center
            line-height 1.9rem
            color #fff
            border-radius 3px
            font-size 1rem

</style>

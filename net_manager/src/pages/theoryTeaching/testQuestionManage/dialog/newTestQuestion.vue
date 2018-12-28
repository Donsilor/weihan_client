<template>
  <div class="maskLayer" v-if="ifNewTest">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建试题考卷</span>
          <i class="iconfont fr" @click="$emit('cancelNewTest', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <ul>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;考卷名称：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;级别：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;题库名称：</div>
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
              <div>&nbsp;&nbsp;考生：</div>
              <div class="btn">
                <input type="text" class="small">
                <a href="javascript:void(0)" class="fr">添加</a>
              </div>
            </li> 
            <li>
              <div>&nbsp;&nbsp;考试时长：</div>
              <div class="btn">
                <input type="text" class="small"> 分钟    
              </div>
            </li> 
            <div class="choose">
              <input type="radio" name="seleData" value="1" id="present" v-model="select" selected>
              <label for="present">手动生成考卷</label>
              <input type="radio" name="seleData" value="0" id="all" class="all" v-model="select">
              <label for="all">自然生成考卷</label>
            </div>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;考题：</div>
              <div class="btn clf">
                <a href="javascript:void(0)" class="fl">添加考题</a>
              </div>
            </li>
            <table width="100%">
              <thead>
                <tr>
                  <th>题型</th>
                  <th>题数</th>
                  <th>分数</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>单选题</td>
                  <td>2</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>单选题</td>
                  <td>2</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
            <div class="score">当前考卷分数：90</div>
            <li class="last">
              <div></div>
              <div class="btns">
                <a href="javascript:" @click="$emit('cancelNewTest', false)">确定</a>
                <a href="javascript:" @click="$emit('cancelNewTest', false)">取消</a>
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
  name: 'NewTest',
  data () {
    return {
    }
  },
  props: {
    ifNewTest: {
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
        div:first-child
          line-height 2.5rem

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

    li:last-of-type
        div:last-child
          margin-top 0

  .choose
      width 100%
      font-size 1.2rem
      margin 1rem 0

      input:first-of-type
          margin-left 10%
      
      input:last-of-type
          margin-left 20%

  .score
      padding-left 5%
      font-size 1.2rem

  table
      margin 0rem 0 3rem
      font-size 1.2rem
      border-collapse: collapse;

      thead 
        th
          font-weight normal
          color #aaa
          height 2rem 
          line-height 4rem

      tbody
        width 100%
        height auto

        tr
          height 3rem
          border 1px solid #ccc 

          td
            width 25%
            text-align center
            font-size 1rem

</style>

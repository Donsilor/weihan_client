<template>
  <div class="maskLayer" v-if="ifNewExam">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建考试</span>
          <i class="iconfont fr" @click="$emit('cancelNewExam', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <ul>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;考试名称：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;有效时段：</div>
              <div class="time_quantum">
                <input type="text" class="fl">
                <span class="fl">—</span>
                <input type="text" class="fr">
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;考试时长：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊接类型：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;接头类型：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊接位置：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材材料：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材厚度：</div>
              <div><input type="text" class="width">mm</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材间隙：</div>
              <div><input type="text" class="width">mm</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;电压：</div>
              <div><input type="text" class="width">v</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊丝/焊条类型：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊丝/焊条直径：</div>
              <div><input type="text" class="width">mm</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;公差：</div>
              <div><input type="text" class="width">%</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;训练次数：</div>
              <div><input type="text" class="width">次</div>
            </li>
          </ul>
          <div class="btns">
            <a href="javascript:">下一步</a>
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
  name: '',
  data () {
    return {}
  },
  props: {
    ifNewExam: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.popup

  ul
    width 100%

    li
      font-size 1.25rem
      line-height 2rem
      width 100%
      margin-bottom .5rem

    div
      display inline-block
      vertical-align middle

      &.time_quantum input
        width 45% !important

      &.time_quantum span
        width 10%
        height 1.625rem
        line-height 1.625rem
        text-align center

      &:first-child
        width 26%
        height 100%
        /*font-size .875rem*/
        text-align right
        line-height 1.875rem

      &:last-child
        width 73%
        height 100%
        /*font-size 1.625rem*/
        color #999

        input
          width 100%
          height 2rem
          /*margin-top .25rem*/
          border 1px solid $inputBorderColor
          padding 0 .5rem

          &.width
            width 86%
            height 2rem
            margin-right 3%

        select
          width 100%
          height 2rem
          border-color $inputBorderColor
          padding 0 .5rem

</style>

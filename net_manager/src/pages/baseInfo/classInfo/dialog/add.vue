<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="clss fl">新建</span>
          <span class="clss fr"><i class="iconfont">&#xe607;</i></span>
        </div>
        <div class="popupWrap">
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>班级姓名：</span>
            <input type="text">
          </div>
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>所属专业：</span>
            <select>
              <option value="所属专业">所属专业</option>
              <option value="所属专业">所属专业</option>
              <option value="所属专业">所属专业</option>
            </select>
          </div>
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>年级：</span>
            <select>
              <option value="初级">初级</option>
              <option value="中级">中级</option>
              <option value="高级">高级</option>
            </select>
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
  name: 'classadd',
  props: {
    addModule: {
      type: Boolean,
      default: true
    }
  },

  methods: {}
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
.add
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

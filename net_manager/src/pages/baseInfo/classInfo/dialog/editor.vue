<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">编辑</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>班级姓名：</span>
            <input type="text" v-model="name">
          </div>
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>专业姓名：</span>
            <input type="text" v-model="professionName">
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
  name: 'classditor',
  model: {
    props: 'option',
    event: 'input'
  },
  props: {
    option: {
      type: Object,
      default () {
        return {
          name: null,
          professionName: null
        }
      }
    },
    professions:{
      type: Array,
      default () {
        return []
      }
    },
    close: {
      type: Function,
      default: e => console.log(e)
    },
    submit: {
      type: Function,
      default: e => console.log(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
.editor
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

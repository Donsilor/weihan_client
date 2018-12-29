<template>
  <div class="maskLayer">
    <div class="editor clf">
      <div class="window-top">
        <span class="clss fl">编辑</span>
        <span class="clss fr" @click="close()"><i class="iconfont">&#xe607;</i></span>
      </div>
      <div class="window-content clf">
        <div class="clf">
          <span><i class="iconfont">&#xe603;</i>班级姓名：</span>
          <input type="text" v-model="name">
        </div>
        <div class="clf">
          <span><i class="iconfont">&#xe603;</i>专业姓名：</span>
          <input type="text" v-model="professionName">
        </div>
        <div class="but">
          <input type="button" class="ensure" value="确定" @click="submit()">
          <input type="button" class="cancel" value="取消" @click="close()">
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

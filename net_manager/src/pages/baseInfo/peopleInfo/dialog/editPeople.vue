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
            <span>用户名：</span>
            <input type="text" v-model="option.userName">
          </div>
          <div class="clf">
            <span>真实姓名：</span>
            <input type="text" v-model="option.name">
          </div>
          <div class="btns textAlignLeft">
            <a href="javascript:" @click="submit()">确定</a>
            <a href="javascript:" class="cancel" @click="close()">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditPeople',
  props: {
    option:{
      type:Object,
      default(){
        return {
          userName:null,
          name:null
        }
      }
    },
    submit:{
      type:Function,
      default: e=> console.log(e)
    },
    close: {
      type: Function,
      default: e=>console.log(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
.service
  width 770px
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)

.window-content
  padding-top 40px
  background-color #fff

.but
  padding-bottom 80px
  padding-left 200px
</style>

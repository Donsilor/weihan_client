<template>
        <div class="maskLayer" v-if="editorModule">
        <div class="service clf">
            <div class="window-top">
                <span class="clss fl">编辑</span>
                <span class="clss fr"><i class="iconfont">&#xe607;</i></span> 
            </div>
            <div class="window-content clf">
                <div class="clf">
                    <span>用户名</span>
                    <input type="text">
                </div>
                <div class="clf">
                    <span>真实姓名：</span>
                    <input type="text">
                </div>
                <div class="but">
                    <input type="button" class="ensure" value="确定">
                    <input type="button" class="cancel" value="取消">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'editoruser',
  props: {  
    editorModule: {
      type: Boolean,
      default:true
        }
    } ,

    methods: { 
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
    transform translate(-50%,-50%)
.window-content 
    padding-top 40px
    background-color #ffffff

.but 
    padding-bottom 80px
    padding-left 200px
</style>

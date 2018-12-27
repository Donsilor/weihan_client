<template>
        <div class="maskLayer" v-if="editorModule">
        <div class="delete clf">
            <div class="window-top">
                <span class="clss fl">编辑</span>
                <span class="clss fr"><i class="iconfont">&#xe607;</i></span> 
            </div>
            <div class="window-content clf">
                <div class="schoolname clf">
                    <span><i class="iconfont">&#xe603;</i>学校名称：</span>
                    <input type="text">
                </div>
                <div class="serverurl clf">
                    <span><i class="iconfont">&#xe603;</i>服务器网址：</span>
                    <input type="text">
                </div>
                <div class="but">
                    <input type="button" class="ensure" value="确定" @click="Hidden()">
                    <input type="button" class="cancel" value="取消">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'shcooleditor',
  props: {  
    editorModule: {
      type: Boolean,
      default:true
        }
    } ,

    methods: { 

         Hidden(){
        //通过$emit引用组件传过来的hidden()事件
        this.$emit('hidden')
      }
    } 
}
</script>

<style lang="stylus" scoped> 
@import "~assets/common.styl"
.delete
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

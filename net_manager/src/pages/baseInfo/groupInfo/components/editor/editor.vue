<template>
        <div class="maskLayer" v-if="editorModule">
        <div class="editor clf">
            <div class="window-top">
                <span class="clss fl">新建人员</span>
                <span class="clss fr"><i class="iconfont">&#xe607;</i></span> 
            </div>
            <div class="window-content clf">
                
                <div class="clf">
                    <span>组别名称：</span>
                    <div class="classma fl">
                        <select>
                            <option value="年级1">年级1</option>
                            <option value="年级1">年级1</option>
                            <option value="年级1">年级1</option>
                        </select>
                        <input type="button" value="修改人员">
                    </div>
                </div>
                <div class="clf">
                    <span>专业班级：</span>
                    <select>
                        <option value="年级1">年级1</option>
                        <option value="年级1">年级1</option>
                        <option value="年级1">年级1</option>
                    </select>
                </div>
                <div class="clf">
                    <span>班级名称：</span>
                    <select>
                        <option value="班级名称">班级名称</option>
                        <option value="班级名称">班级名称</option>
                        <option value="班级名称">班级名称</option>
                    </select>
                </div>
                <div class="clf">
                    <span>学校名称：</span>
                    <select>
                        <option value="班级名称">学校名称</option>
                        <option value="班级名称">学校名称</option>
                        <option value="班级名称">学校名称</option>
                    </select>
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
  name: 'groupeditor',
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
.editor
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



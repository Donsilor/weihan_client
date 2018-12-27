<template>
        <div class="maskLayer" v-if="supereditorModule">
        <div class="people clf">
            <div class="window-top">
                <span class="clss fl">新建人员</span>
                <span class="clss fr"><i class="iconfont">&#xe607;</i></span> 
            </div>
            <div class="window-content clf">
                <div class="clf">
                    <span><i class="iconfont">&#xe603;</i>用户名：</span>
                    <input type="text">
                </div>
                <div class="clf">
                    <span><i class="iconfont">&#xe603;</i>姓名：</span>
                    <input type="text">
                </div>
                <div class="clf">
                    <span>身份：</span>
                    <select>
                        <option value="管理员">管理员</option>
                        <option value="教师">教师</option>
                        <option value="学生">学生</option>
                    </select>
                </div>
                <div class="clf">
                    <span>电子邮件：</span>
                    <input type="text">
                </div>
                <div class="clf">
                    <span>手机号码：</span>
                    <input type="text">
                </div>
                <div class="clf">
                    <span>所属学校：</span>
                    <select>
                        <option value="深圳大学">深圳大学</option>
                        <option value="广州大学">广州大学</option>
                        <option value="师范大学">师范大学</option>
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
  name: 'superadduser',
  props: {  
    supereditorModule: {
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
.people
    width 600px
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
    padding-top 100px
</style>

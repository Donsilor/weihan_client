<template>
        <div class="maskLayer" v-if="teacheditorModule">
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
                        <option value="学生">学生</option>
                    </select>
                </div>
                <div class="clf">
                    <span>专业：</span>
                    <select>
                        <option value="专业">专业</option>
                        <option value="专业">专业</option>
                        <option value="专业">专业</option>
                    </select>
                </div>
                <div class="clf">
                    <span>年级：</span>
                    <select>
                        <option value="年级">年级</option>
                        <option value="年级">年级</option>
                        <option value="年级">年级</option>
                    </select>
                </div>
                <div class="clf">
                    <span>班级：</span>
                    <select>
                        <option value="班级">班级</option>
                        <option value="班级">班级</option>
                        <option value="班级">班级</option>
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
                    <span><i class="iconfont">&#xe603;</i>用户等级：</span>
                    <select>
                        <option value="初级">初级</option>
                        <option value="中级">中级</option>
                        <option value="高级">高级</option>
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
  name: 'teachadduser',
  props: {  
    teacheditorModule: {
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
    padding-top 20px
</style>

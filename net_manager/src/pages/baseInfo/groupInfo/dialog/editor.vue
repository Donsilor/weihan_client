<template>
        <div class="maskLayer" v-if="editorModule">
        <div class="centerLayer">
            <div class="popup clf">
                <div class="popupTopBar">
                    <span class="title fl">编辑</span>
                    <i class="iconfont fr" @click="$emit('close', false)">&#xe607;</i>
                </div>
                <div class="popupWrap clf">
                    
                    <div class="clf">
                        <span>组别名称：</span>
                        <div class="classma fl">
                            <select>
                                <option value="年级1">年级1</option>
                                <option value="年级1">年级1</option>
                                <option value="年级1">年级1</option>
                            </select>
                            <button class="cbut" value="修改人员">修改人员</button>
                        </div>
                    </div>
                    <div class="usernum">
                        <span>人员数：</span>
                            120
                    </div>
                    <div class="usertable">
                        <el-table
                            :data="usertables"
                            height="500"
                            border
                            style="width: 100%">
                            <el-table-column
                            type="index"
                            label='序号'>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="姓名"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="grade"
                            label="年级">
                            </el-table-column>
                            <el-table-column
                            prop="class"
                            label="班级">
                            </el-table-column>
                            <el-table-column
                            prop="professional"
                            label="专业">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="btns">
                        <a href="javascript:">确定</a>
                        <a href="javascript:" class="cancel" @click="close()">取消</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
      usertables: new Array(10).fill({
          name: '王大锤',
          grade:'一年级',
          class:'pix-181',
          professional: '焊接专业'
      })          
        
      }
    },
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
.popup
    width 770px
    position fixed
    top 50%
    left 50%
    transform translate(-50%,-50%)

.popupWrap
    padding-left 5rem!important
    padding-right 5rem!important

.popupWrap
    >div
        span 
            width 20%!important
            padding-right 1rem


.classma
    width 75%
    float left

    select 
        width 75%
        float left
        height 2.5rem
        line-height 2.5rem
        padding-left .875rem
        border 1px solid #cccccc

        option
            width 100%
            height 100%

    button 
        width 20%
        float right 
        height 2.5rem
        display inline-block
        border 1px solid #ffffff
        background #34a6dd
        color #ffffff
        border-radius 5px

.usernum
    line-height 2.5rem

.usertable
    width 100%
.cell
    color #333333!important
.popupWrap
    >div 
        margin-bottom 1rem!important


</style>



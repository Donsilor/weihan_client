<template>
  <div class="maskLayer" v-if="ifNewPeople">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建人员</span>
          <i class="iconfont fr" @click="$emit('cancelNew', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
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
            <select v-model="identity">
              <option value="0">管理员</option>
              <option value="1">教师</option>
              <option value="2">学生</option>
            </select>
          </div>
          <div class="identityDiv" v-if="identity === '0'">
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
                <option value="学校111">学校111</option>
                <option value="学校111">学校111</option>
                <option value="学校111">学校111</option>
              </select>
            </div>
          </div>
          <div class="identityDiv" v-else-if="identity === '1'">
            <div class="clf">
              <span>专业：</span>
              <select>
                <option value="深圳大学">深圳大学</option>
                <option value="广州大学">广州大学</option>
                <option value="师范大学">师范大学</option>
              </select>
            </div>
            <div class="clf">
              <span>年级：</span>
              <select>
                <option value="年级1">年级1</option>
                <option value="年级1">年级1</option>
                <option value="年级1">年级1</option>
              </select>
            </div>
            <div class="clf">
              <span>班级：</span>
              <div class="classma fl">
                <select>
                  <option value="年级1">年级1</option>
                  <option value="年级1">年级1</option>
                  <option value="年级1">年级1</option>
                </select>
                <input type="button" value="添加">
              </div>
            </div>
            <div class="clf">
              <span>电子邮件：</span>
              <input type="text">
            </div>
            <div class="clf">
              <span>手机号码：</span>
              <input type="text">
            </div>
          </div>
          <div class="identityDiv" v-else-if="identity === '2'">
            <div class="clf">
              <span>专业：</span>
              <select>
                <option value="深圳大学">深圳大学</option>
                <option value="广州大学">广州大学</option>
                <option value="师范大学">师范大学</option>
              </select>
            </div>
            <div class="clf">
              <span>年级：</span>
              <select>
                <option value="年级1">年级1</option>
                <option value="年级1">年级1</option>
                <option value="年级1">年级1</option>
              </select>
            </div>
            <div class="clf">
              <span>班级：</span>
              <div class="classma fl">
                <select>
                  <option value="年级1">年级1</option>
                  <option value="年级1">年级1</option>
                  <option value="年级1">年级1</option>
                </select>
                <input type="button" value="添加">
              </div>
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
          </div>
          <div class="btns">
            <a href="javascript:">确定</a>
            <a href="javascript:" class="cancel" @click="$emit('cancelNew', false)">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPeople',
  props: {
    ifNewPeople: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      identity: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.centerLayer
  width 40rem

select
  width 60%
  height 2.5rem
  float left

.identityDiv
  > .clf:not(:last-of-type)
    margin-bottom 2rem

  .classma
    width 60%
    height 40px
    line-height 40px

    select
      width 70%
      margin-right 10%

    input[type=button]
      width 20% !important
      background #35a5de
      border-radius .3rem
      border 1px solid #35a5de !important
      color #fff

</style>

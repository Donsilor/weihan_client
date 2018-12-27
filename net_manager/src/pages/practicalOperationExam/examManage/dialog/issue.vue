<template>
  <div class="maskLayer" v-if="ifIssue">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">发布</span>
          <i class="iconfont fr" @click="$emit('cancelIssue', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="where">
            <input type="radio" name="issueWhere" id="grade">
            <label for="grade">发布到班级</label>
            <input type="radio" name="issueWhere" id="group" class="group">
            <label for="group">发布到组别</label>
          </div>
          <div>
            <i></i>
            <span>发布到班级</span>：
            <select name="">
              <option value=""></option>
              <option value="">1111111</option>
              <option value="">2222222</option>
              <option value="">3333333</option>
              <option value="">4444</option>
              <option value="">555555</option>
            </select>
          </div>
          <div class="btn clf">
            <button class="fr">取消</button>
            <button class="fr">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Issue',
  data () {
    return {
      ss: true
    }
  },
  props: {
    ifIssue: {
      type: Boolean,
      defalult: false
    }
  }
}

</script>

<style lang="stylus" scoped>

@import "~assets/common.styl"

.centerLayer
  width 36rem

  .where
    font-size 1.2rem
    margin-bottom 2rem

    input
      line-height 1rem
      margin-left 4rem

    label
      margin-right 2rem
      line-height 1rem
      padding-bottom 1rem
      font-size 1.2rem

  select
    width 76%

  .btn
    margin-top 3rem

    button
      width 5rem
      height 2rem
      background-color #34a5dd
      border 1px solid #fff
      color #ffffff
      border-radius 3px

      &:first-child
        background-color #fff
        border 1px solid #34a5dd
        color #34a5dd
        margin-left 2rem
</style>

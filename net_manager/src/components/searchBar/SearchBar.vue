<template>
  <div class="searchBar clf">
    <label>
      <select name="" class="filter fl">
        <option value="">筛选条件</option>
        <option value="">用户条件</option>
        <option value="">用户ID</option>
        <option value="">用户名</option>
        <option value="">昵称</option>
        <option value="">真实姓名</option>
      </select>
    </label>
    <div class="search fl">
      <input type="text" placeholder="项目名称和编号">
      <i class="iconfont">&#xe65c;</i>
      <button>搜索</button>
    </div>
    <label>
      <select class="sort fr">
        <option value="">默认排序</option>
        <option value="">排序1</option>
        <option value="">排序2</option>
      </select>
    </label>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {}
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.searchBar
  padding 25px 70px 25px 20px

  select.filter
    width 120px
    height 26px
    border 1px solid $borderColor
    margin 2px 0

  .search
    position relative
    margin-left 28px

    input[type=text]
      width 260px
      height 30px
      font-size 12px
      padding-left 25px
      border 1px solid $borderColor

    .iconfont
      position absolute
      top 0
      bottom 0
      left 0
      width 30px
      height 30px
      text-align center
      line-height 30px

    button
      width 60px
      height 26px
      border 1px solid $borderColor
      font-size 12px
      border-radius 5px
      margin-left 12px
      background none

      &:active
        background-color #999

  select.sort
    width 120px
    height 26px
    border 1px solid $borderColor
    margin 2px 0

select
  font-size 12px

</style>

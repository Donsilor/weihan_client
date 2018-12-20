<template>
  <div class="searchBar clf">
    <label v-if="videoDatabaseModule" class="fl">
      <select name="" id="">
        <option value="">核心专业课</option>
        <option value="">专业基础课</option>
        <option value="">进阶课程</option>
      </select>
      <select name="" id="">
        <option value="">金属材料焊接</option>
        <option value="">焊接方法与设备</option>
        <option value="">焊接结构生产</option>
        <option value="">焊接自动化技术与应用</option>
        <option value="">焊接质量检验</option>
        <option value="">焊接生产管理</option>
      </select>
      <select name="" id="">
        <option value="">3级分类1</option>
        <option value="">3级分类2</option>
        <option value="">3级分类3</option>
      </select>
    </label>
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
    <div class="search fl" v-if="searchModule">
      <input type="text" placeholder="项目名称和编号">
      <i class="iconfont">&#xe65c;</i>
      <button>搜索</button>
    </div>
    <div class="timeQuantumSearch fl" v-if="timeQuantumSearchModule">
      <el-date-picker
        v-model="timeQuantum"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <button>搜索</button>
    </div>
    <div class="inquireModule fl" v-if="inquire">
      <label>
        <span>任务名称：</span>
        <el-input
          size="mini"
          placeholder="请输入内容"
          clearable>
        </el-input>
      </label>
      <label>
        <span>年级：</span>
        <el-input
          size="mini"
          placeholder="请输入内容"
          clearable>
        </el-input>
      </label>
      <label>
        <span>班级/组别：</span>
        <el-input
          size="mini"
          placeholder="请输入内容"
          clearable>
        </el-input>
      </label>
      <el-date-picker
        v-model="inquireTimeQuantum"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <label v-if="inquireName">
        <span>姓名：</span>
        <el-input
          size="mini"
          placeholder="请输入内容"
          clearable>
        </el-input>
      </label>
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
  name: 'SearchBar',
  props: {
    videoDatabaseModule: {
      type: Boolean,
      default: false
    },
    searchModule: {
      type: Boolean,
      default: true
    },
    timeQuantumSearchModule: {
      type: Boolean,
      default: false
    },
    inquire: {
      type: Boolean,
      default: false
    },
    inquireName: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      timeQuantum: '',
      inquireTimeQuantum: ''
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.searchBar
  font-size .75rem
  line-height 1.875rem
  padding 1.5rem 4.375rem 1.5rem 1.25rem

  select,
  input
    width 7.5rem
    height 1.625rem
    border 1px solid $borderColor
    margin .125rem 1.75rem .125rem 0

  input
    padding 0 .5rem

  .search
    position relative

    input[type=text]
      float left
      width 16.25rem
      height 1.875rem
      font-size .75rem
      padding-left 1.5rem
      border 1px solid $borderColor

    .iconfont
      position absolute
      top 0
      bottom 0
      left 0
      width 1.875rem
      height 1.875rem
      text-align center
      line-height 1.875rem

  .timeQuantumSearch
    margin-left 28px

  button
    width 3.75rem
    height 1.625rem
    border 1px solid $borderColor
    font-size .75rem
    border-radius 5px
    background none

    &:active
      background-color #999

  select.sort
    width 7.5rem
    height 1.625rem
    border 1px solid $borderColor
    margin .125rem 0

select
  font-size 12px

</style>
<style lang="stylus">
.el-input
  width 7.5rem
  margin-right 1.75rem

  .el-input__inner
    padding-left .5rem
    border-radius 0

.el-date-editor
  width auto
  height 1.875rem
  padding-left .3125rem
  padding-right .3125rem

  &.el-input__inner
    width 15.5rem
    margin-right 1.25rem

  .el-range__icon
    line-height 1

  .el-range-separator
    width 1rem
    line-height 1.5rem
    padding 0

  .el-range-input
    width 5.5rem

  .el-range__close-icon
    width 1rem
    line-height 1.5rem

</style>

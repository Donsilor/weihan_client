<template>
  <div class="topBar clf">
    <!--<span class="fl">基本信息 > 学校管理</span>-->
    <el-breadcrumb class="fl" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">基本信息</el-breadcrumb-item>
      <el-breadcrumb-item>学校管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="btns fr">
      <a href="javascript:" v-if="newSchool">+新建学校</a>
      <a href="javascript:" v-if="newContest">+新建竞赛</a>

      <a href="javascript:" v-if="importBtn"><i class="iconfont">&#xe634;</i>导入</a>
      <a href="javascript:" v-if="exportBtn"><i class="iconfont">&#xe608;</i>导出</a>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {}
  },
  props: {
    newSchool: {
      type: Boolean,
      default: false
    },
    newContest: {
      type: Boolean,
      default: false
    },
    importBtn: {
      type: Boolean,
      default: false
    },
    exportBtn: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.topBar
  line-height 46px
  padding 0 70px 0 20px
  border-bottom 1px solid $borderColor

  .btns

    a
      font-size 16px
      color #34a6dd
      margin-left 1rem

.el-breadcrumb
  line-height 46px
  font-size 16px

</style>

<style lang="stylus">

.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link,
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover
  color $iconfontColor
  font-weight normal

</style>

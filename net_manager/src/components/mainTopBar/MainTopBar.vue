<template>
  <div class="topBar clf">
    <!--<span class="fl">基本信息 > 学校管理</span>-->
    <el-breadcrumb class="fl" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">基本信息</el-breadcrumb-item>
      <el-breadcrumb-item>学校管理</el-breadcrumb-item>
    </el-breadcrumb>
    <a href="javascript:" class="fr">+新建学校</a>
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

.topBar
  line-height 46px
  padding 0 70px 0 20px
  border-bottom 1px solid $lightGray

  > a
    font-size 16px
    color #34a6dd

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
  color #34a6dd
  font-weight normal

</style>

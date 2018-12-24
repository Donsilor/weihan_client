<template>
  <div class="topBar clf">
    <!--<span class="fl">基本信息 > 学校管理</span>-->
    <el-breadcrumb class="fl" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">基本信息</el-breadcrumb-item>
      <el-breadcrumb-item>学校管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="btns fr">
      <a href="javascript:" v-if="newSchool">+ 新建学校</a>
      <a href="javascript:" v-if="newContest">+ 新建竞赛</a>
      <a href="javascript:" v-if="newQuestion">+ 新建题库</a>
      <a href="javascript:" v-if="newQuestionTemplateDownload"><i class="iconfont">&#xe615;</i> 题库模板下载</a>
      <a href="javascript:" v-if="newTask">+ 新建作业</a>
      <a href="javascript:" v-if="newExamPapers">+ 新建试题考卷</a>
      <a href="javascript:" v-if="manageVideoClassify"><i class="iconfont">&#xe626;</i> 管理视频分类</a>
      <a href="javascript:" v-if="manageCourseClassify"><i class="iconfont">&#xe626;</i> 管理课程分类</a>
      <a href="javascript:" v-if="newExam" @click="$emit('newExam', true)">+ 新建考试</a>
      <a href="javascript:" v-if="uploadFile"><i class="iconfont">&#xe69d;</i> 上传视频</a>
      <a href="javascript:" v-if="uploadCourse"><i class="iconfont">&#xe71b;</i> 上传课程</a>

      <a href="javascript:" v-if="importBtn" @click="$emit('importDialog', true)"><i class="iconfont">&#xe634;</i> 导入
      </a>
      <a href="javascript:" v-if="exportBtn"><i class="iconfont">&#xe608;</i> 导出</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainTopBar',
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
    newQuestion: {
      type: Boolean,
      default: false
    },
    newQuestionTemplateDownload: {
      type: Boolean,
      default: false
    },
    newTask: {
      type: Boolean,
      default: false
    },
    newExamPapers: {
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
    },
    manageVideoClassify: {
      type: Boolean,
      default: false
    },
    manageCourseClassify: {
      type: Boolean,
      default: false
    },
    newExam: {
      type: Boolean,
      default: false
    },
    uploadFile: {
      type: Boolean,
      default: false
    },
    uploadCourse: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.topBar
  line-height 2.875rem
  padding 0 70px 0 20px
  border-bottom 1px solid $borderColor

  .btns

    a
      font-size 1rem
      color #34a6dd
      margin-left 1rem

.el-breadcrumb
  line-height 2.875rem
  font-size 1rem

</style>

<style lang="stylus">
@import "~assets/common.styl"

.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link,
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover
  color $iconfontColor
  font-weight normal

</style>

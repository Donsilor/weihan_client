<template>
  <div class="topBar clf">
    <!--<span class="fl">基本信息 > 学校管理</span>-->
    <el-breadcrumb class="fl" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">基本信息</el-breadcrumb-item>
      <el-breadcrumb-item>学校管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="btns fr">
      <a href="javascript:" v-for="(item, index) in option" :key="index" @click="item.clickView()">
        <i class="iconfont" v-if="item.iconfont" :class="item.iconfont"></i>
        {{item.name}}
      </a>
      <!-- <a href="javascript:" v-if="newSchool" @click="$emit('newSchool', true)">+ 新建学校</a>
      <a href="javascript:" v-if="newSever" @click="$emit('newServeType', true)">+ 新建服务类别</a>
      <a href="javascript:" v-if="newPeople" @click="$emit('newPeople', true)">+ 新建人员</a>

      <a href="javascript:" v-if="newContest">+ 新建竞赛</a> -->
      <!-- <a href="javascript:" @click="$emit('newQuestion', true)">+ 新建题库</a> -->
      <!-- <a href="javascript:" v-if="newQuestionTemplateDownload"><i class="iconfont">&#xe615;</i> 题库模板下载</a>
      <a href="javascript:" v-if="newTask">+ 新建作业</a>
      <a href="javascript:" v-if="newExamPapers">+ 新建试卷</a>
      <a href="javascript:" v-if="manageVideoClassify"><i class="iconfont">&#xe626;</i> 管理视频分类</a>
      <a href="javascript:" v-if="manageCourseClassify"><i class="iconfont">&#xe626;</i> 管理课程分类</a>
      <a href="javascript:" v-if="uploadFile"><i class="iconfont">&#xe69d;</i> 上传视频</a>
      <a href="javascript:" v-if="uploadCourse"><i class="iconfont">&#xe71b;</i> 上传课程</a>

      <a href="javascript:" v-if=" examOrder"><i class="iconfont">&#xe608;</i> 考试顺序</a>
      <a href="javascript:" v-if="newExam" @click="$emit('newExam', true)">+ 新建考试</a>

      <a href="javascript:" v-if=" missionOrder"><i class="iconfont">&#xe608;</i> 任务顺序</a>
      <a href="javascript:" v-if="newMission" @click="$emit('newTask', true)">+ 新建任务</a>

      <a href="javascript:" v-if="importBtn" @click="$emit('importDialog', true)"><i class="iconfont">&#xe634;</i> 导入</a>
      <a href="javascript:" v-if="exportBtn" @click="$emit('exportDialog', true)"><i class="iconfont">&#xe608;</i> 导出</a> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainTopBar',
  data () {
    return {}
  },
  model:{
    props:"option",
    event:"input"
  },
  props: {
    option:{
      type:Array,
      default(){
        return []
      }
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
      line-height 1rem
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

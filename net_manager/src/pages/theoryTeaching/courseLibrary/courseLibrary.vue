<template>
  <div>
    <top-bar :manageCourseClassify="true" :uploadCourse="true" :exportBtn="true"></top-bar>
    <search-bar :videoDatabaseModule="true"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="courseList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="课程编号" prop="number"></el-table-column>
        <el-table-column label="视频名称" prop="videoName"></el-table-column>
        <el-table-column label="创建者" prop="creator"></el-table-column>
        <el-table-column label="课程名称" prop="courseName"></el-table-column>
        <el-table-column label="课程类型" prop="courseType"></el-table-column>
        <el-table-column label="大纲类型" prop="outlineType"></el-table-column>
        <el-table-column label="3级分类" prop="classify"></el-table-column>
        <el-table-column label="文件大小 /M" prop="fileSize"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont">&#xe617;</i>
          </template>
        </el-table-column>
      </el-table>
      <paging></paging>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'

export default {
  name: 'CourseLibrary',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      courseList: [
        {
          number: 2018121401,
          videoName: '作业一',
          creator: '李三',
          courseName: '焊接方法与设备',
          courseType: '机器人',
          outlineType: '核心专业课',
          classify: '',
          fileSize: 300
        },
        {
          number: 2018121401,
          videoName: '作业一',
          creator: '李三',
          courseName: '',
          courseType: '焊接',
          outlineType: '专业基础课',
          classify: '',
          fileSize: 300
        }
      ]
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>

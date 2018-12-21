<template>
  <div>
    <top-bar :newExamPapers="true" :importBtn="true" :exportBtn="true"></top-bar>
    <search-bar :timeQuantumSearchModule="true"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="testQuestionsList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="考卷编号" prop="number"></el-table-column>
        <el-table-column label="考卷名称" prop="name"></el-table-column>
        <el-table-column label="创建者" prop="creator"></el-table-column>
        <el-table-column label="最后修改者" prop="lastMender"></el-table-column>
        <el-table-column label="总题数" prop="total"></el-table-column>
        <el-table-column label="有效时间段" prop="effectivePeriod"></el-table-column>
        <el-table-column label="考试时长" prop="duration"></el-table-column>
        <el-table-column label="总分" prop="totalScore"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont">&#xe617;</i>
            <a href="javascript:">各学员成绩详情</a>
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
  name: 'TestQuestionManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      testQuestionsList: [
        {
          number: 2018121401,
          name: '作业一',
          creator: '李三',
          lastMender: '陈大',
          total: 5,
          effectivePeriod: '2018/11/11-2018/11/21',
          duration: '120分钟',
          totalScore: 100
        },
        {
          number: 2018121401,
          name: '作业一',
          creator: '李三',
          lastMender: '陈大',
          total: 5,
          effectivePeriod: '2018/11/11-2018/11/21',
          duration: '120分钟',
          totalScore: 100
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

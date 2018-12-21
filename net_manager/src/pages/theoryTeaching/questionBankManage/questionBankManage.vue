<template>
  <div>
    <top-bar :newQuestion="true" :newQuestionTemplateDownload="true" :exportBtn="true"></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="questionBankList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="题库编号" prop="number"></el-table-column>
        <el-table-column label="题库名称" prop="name"></el-table-column>
        <el-table-column label="创建者" prop="creator"></el-table-column>
        <el-table-column label="最后创建者" prop="lastCreator"></el-table-column>
        <el-table-column label="总题库" prop="total"></el-table-column>
        <el-table-column label="题库类型" prop="questionBankType"></el-table-column>
        <el-table-column label="状态" prop="state"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont">&#xe617;</i>
            <i class="iconfont">&#xe612;</i>
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
  name: 'QuestionBankManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      questionBankList: [
        {
          number: 2018121401,
          name: '初级作业库',
          creator: '李三',
          lastCreator: '陈大',
          total: 60,
          questionBankType: '作业库',
          state: '在线',
          privacy: false
        },
        {
          number: 2018121401,
          name: '初级作业库',
          creator: '李三',
          lastCreator: '陈大',
          total: 600,
          questionBankType: '作业库',
          state: '部分公开',
          privacy: true
        },
        {
          number: 2018121401,
          name: '初级作业库',
          creator: '李三',
          lastCreator: '陈大',
          total: 600,
          questionBankType: '作业库',
          state: '未公开',
          privacy: true
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

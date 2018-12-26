<template>
  <div>
    <top-bar :newTask="true" :importBtn="true" :exportBtn="true"></top-bar>
    <search-bar :timeQuantumSearchModule="true"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="questionBankList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="作业编号" prop="number"></el-table-column>
        <el-table-column label="作业名称" prop="name"></el-table-column>
        <el-table-column label="创建者" prop="creator"></el-table-column>
        <el-table-column label="最后创建者" prop="lastCreator"></el-table-column>
        <el-table-column label="总题库" prop="total"></el-table-column>
        <el-table-column label="有效时间段" prop="effectivePeriod"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont">&#xe61b;</i>
            <a href="javascript:">成绩详情</a>
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
  name: 'TaskManage',
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
          name: '作业一',
          creator: '李三',
          lastCreator: '陈大',
          total: 5,
          effectivePeriod: '2018/11/11-2018/11/21'
        },
        {
          number: 2018121401,
          name: '作业一',
          creator: '李三',
          lastCreator: '陈大',
          total: 5,
          effectivePeriod: '2018/11/11-2018/11/21'
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

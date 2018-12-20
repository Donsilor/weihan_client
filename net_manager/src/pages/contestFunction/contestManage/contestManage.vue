<template>
  <div>
    <top-bar :newContest="true" :importBtn="true" :exportBtn="true"></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="contestList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="竞赛编号" prop="number"></el-table-column>
        <el-table-column label="竞赛名称" prop="name"></el-table-column>
        <el-table-column label="竞赛时长" prop="time"></el-table-column>
        <el-table-column label="焊接类型" prop="weldsTypes"></el-table-column>
        <el-table-column label="接头类型" prop="spliceType"></el-table-column>
        <el-table-column label="焊接位置" prop="weldsPosition"></el-table-column>
        <el-table-column label="母材类型" prop="parentMetal"></el-table-column>
        <el-table-column label="母材厚度" prop="thickness"></el-table-column>
        <el-table-column label="公差" prop="tolerance"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <i class="iconfont">&#xe600;</i>
            <i class="iconfont">&#xe631;</i>
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
  name: 'ContestManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      contestList: [
        {
          number: 68010003309,
          name: '作业竞赛1',
          time: '20分钟',
          weldsTypes: 'SMAW',
          spliceType: '平板对接',
          weldsPosition: '平焊',
          parentMetal: '不锈钢',
          thickness: '3mm',
          tolerance: '3%'
        },
        {
          number: 68010003309,
          name: '作业竞赛1',
          time: '20分钟',
          weldsTypes: 'SMAW',
          spliceType: '平板对接',
          weldsPosition: '平焊',
          parentMetal: '不锈钢',
          thickness: '3mm',
          tolerance: '3%'
        },
        {
          number: 68010003309,
          name: '作业竞赛1',
          time: '20分钟',
          weldsTypes: 'SMAW',
          spliceType: '平板对接',
          weldsPosition: '平焊',
          parentMetal: '不锈钢',
          thickness: '3mm',
          tolerance: '3%'
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

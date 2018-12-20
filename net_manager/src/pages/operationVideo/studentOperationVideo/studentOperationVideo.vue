<template>
  <div>
    <top-bar></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="videoList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="任务编号" prop="taskNumber"></el-table-column>
        <el-table-column label="任务名称" prop="taskName"></el-table-column>
        <el-table-column label="录像编号" prop="videoNumber"></el-table-column>
        <el-table-column label="学员姓名" prop="studentName"></el-table-column>
        <el-table-column label="焊接类型" prop="weldsTypes"></el-table-column>
        <el-table-column label="接头位置" prop="spliceType"></el-table-column>
        <el-table-column label="焊接位置" prop="weldsPosition"></el-table-column>
        <el-table-column label="母材材料" prop="parentMetal"></el-table-column>
        <el-table-column label="母材厚度" prop="thickness"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <i class="iconfont">&#xe61c;</i>
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
  name: 'StudentOperationVideo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      videoList: [
        {
          taskNumber: 68010003309,
          taskName: '国赛1',
          videoNumber: 121801,
          studentName: '张三',
          weldsTypes: 'SWAM',
          spliceType: '平板对接',
          weldsPosition: '平焊',
          parentMetal: '不锈钢',
          thickness: '3mm'
        },
        {
          taskNumber: 68010003309,
          taskName: '国赛1',
          videoNumber: 121801,
          studentName: '张三',
          weldsTypes: 'SWAM',
          spliceType: '平板对接',
          weldsPosition: '平焊',
          parentMetal: '不锈钢',
          thickness: '3mm'
        },
        {
          taskNumber: 68010003309,
          taskName: '国赛1',
          videoNumber: 121801,
          studentName: '张三',
          weldsTypes: 'SWAM',
          spliceType: '平板对接',
          weldsPosition: '平焊',
          parentMetal: '不锈钢',
          thickness: '3mm'
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

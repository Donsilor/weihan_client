<template>
  <div>
    <top-bar></top-bar>
    <search-bar></search-bar>
    <operate-bar :fBut="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="remoteControlList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="学生端编号" prop="number"></el-table-column>
        <el-table-column label="学生端名称" prop="name"></el-table-column>
        <el-table-column label="状态" prop="state"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont icon-yanshi_topbaricon"></i>
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
  name: 'RemoteControl',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      remoteControlList: [
        {
          number: 2018121401,
          name: '1',
          state: '在线'
        },
        {
          number: 2018121402,
          name: '2',
          state: '离线'
        },
        {
          number: 2018121403,
          name: '3',
          state: '实操中'
        },
        {
          number: 2018121404,
          name: '4',
          state: '演示中'
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

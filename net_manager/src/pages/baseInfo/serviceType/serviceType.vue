<template>
  <div>
    <top-bar></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="informationList" style="width: 100%" class="list_content" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="教学类型编码" prop="number" class="number"></el-table-column>
        <el-table-column label="教学类型" prop="type" class="name"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="modification icon iconfont icon-bianji"></i>
            <i class="delete icon iconfont icon-shanchu1"></i>
            <i class="examine icon iconfont icon-chakan"></i>
          </template>
        </el-table-column>
      </el-table>
      <paging></paging>
    </div>
  </div>
</template>

<script>
import TopBar from 'common/mainTopBar/MainTopBar'
import SearchBar from 'common/searchBar/SearchBar'
import OperateBar from 'common/operateBar/OperateBar'
import Paging from 'common/paging/Paging'

export default {
  name: '',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      informationList: [
        {
          ifSelect: false,
          number: '6801000003309',
          type: '焊接'
        },
        {
          ifSelect: false,
          number: '6801000003310',
          type: '机器人'
        },
        {
          ifSelect: false,
          number: '6801000003311',
          type: '喷涂'
        },
        {
          ifSelect: false,
          number: '6801000003312',
          type: '焊接'
        },
        {
          ifSelect: false,
          number: '6801000003313',
          type: '机器人'
        }
      ]
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>

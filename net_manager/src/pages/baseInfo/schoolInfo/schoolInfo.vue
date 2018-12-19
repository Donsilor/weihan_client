<template>
  <div>
    <top-bar></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="informationList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="学校编码" prop="number" class="number"></el-table-column>
        <el-table-column label="学校名称" prop="name" class="name"></el-table-column>
        <el-table-column label="服务器网址" prop="url" class="url" :formatter="formatServeUrl"></el-table-column>
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
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'

export default {
  name: 'schoolInfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      // 全选
      ifAllSelect: false,
      informationList: [
        {
          ifSelect: false,
          number: '6801000003309',
          name: '北京大学',
          url: 'http://baidu.com'
        },
        {
          ifSelect: false,
          number: '6801000003310',
          name: '南京大学',
          url: 'http://souhu.com'
        },
        {
          ifSelect: false,
          number: '6801000003311',
          name: '清华大学',
          url: 'http://fenghuagn.com'
        },
        {
          ifSelect: false,
          number: '6801000003312',
          name: '黑龙江理工大学',
          url: 'http://guge.com'
        },
        {
          ifSelect: false,
          number: '6801000003313',
          name: '深圳大学',
          url: 'http://gougle.com'
        }
      ]
    }
  },
  methods: {
    select (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
      this.ifAllSelect = !this.ifAllSelect
      // this.informationList.map(o => this.ifAllSelect === true ? o.ifSelect = true : o.ifSelect = false)
    },
    formatServeUrl (row) {
      return <a href={row.url} target="_blank">{row.url}</a>
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }

}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
</style>
<style lang="stylus">
@import "~assets/tableStyle.styl"
</style>

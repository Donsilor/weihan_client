<template>
  <div>
    <top-bar :newSchool="true"></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="informationList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="任务顺序" prop="order" class="order"></el-table-column>
        <el-table-column label="任务编号" prop="number" class="number"></el-table-column>
        <el-table-column label="任务名称" prop="name" class="name"></el-table-column>
        <el-table-column label="焊接类型" prop="weld_type" class="weld_type"></el-table-column>
        <el-table-column label="接头类型" prop="splice_type" class="splice_type"></el-table-column>
        <el-table-column label="焊接位置" prop="weld_location" class="weld_location"></el-table-column>
        <el-table-column label="母材类型" prop="base_type" class="base_type"></el-table-column>
        <el-table-column label="母材间隙" prop="base_interval" class="base_interval"></el-table-column>
        <el-table-column label="母材厚度" prop="base_thickness" class="base_thickness"></el-table-column>
        <el-table-column label="公差" prop="tolerance" class="tolerance"></el-table-column>
        <el-table-column label="有效时间段" prop="time" class="time" width="180"></el-table-column>
        <el-table-column label="状态" prop="status" class="status"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <a href="javascript:">发布</a>
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
          order: '1',
          number: '003309',
          name: '实操1',
          weld_type: 'SMAW',
          splice_type: '平板对接',
          weld_location: '平焊',
          base_type: '不锈钢',
          base_interval: '3mm',
          base_thickness: '3mm',
          tolerance: '3%',
          time: '11:12:13',
          status: '未发布',
          handle: '发布'
        },
        {
          ifSelect: false,
          order: '2',
          number: '003312',
          name: '实操2',
          weld_type: 'CO2',
          splice_type: '平板对接',
          weld_location: '平焊',
          base_type: '不锈钢',
          base_interval: '5mm',
          base_thickness: '5mm',
          tolerance: '2%',
          time: '11:12:13',
          status: '已发布',
          handle: '截止'
        },
        {
          ifSelect: false,
          order: '3',
          number: '003314',
          name: '实操3',
          weld_type: 'TIG',
          splice_type: '平板对接',
          weld_location: '平焊',
          base_type: '不锈钢',
          base_interval: '2mm',
          base_thickness: '2mm',
          tolerance: '5%',
          time: '11:12:13',
          status: '已截止',
          handle: '各学员成绩详情'
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

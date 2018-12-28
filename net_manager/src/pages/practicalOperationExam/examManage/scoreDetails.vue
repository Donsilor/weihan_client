<template>
  <div>
    <top-bar :option="headButtons"></top-bar>        
    <search-bar :option="queryOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="informationList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="学员姓名" prop="order" class="order"></el-table-column>
        <el-table-column label="专业" prop="number" class="number"></el-table-column>
        <el-table-column label="年级" prop="name" class="name"></el-table-column>
        <el-table-column label="班级" prop="weld_type" class="weld_type"></el-table-column>
        <el-table-column label="完成情况" prop="splice_type" class="splice_type"></el-table-column>
        <el-table-column label="操作得分" prop="weld_location" class="weld_location"></el-table-column>
        <el-table-column label="外观的分" prop="base_type" class="base_type"></el-table-column>
        <el-table-column label="质量得分" prop="base_interval" class="base_interval"></el-table-column>
        <el-table-column label="综合得分" prop="base_thickness" class="base_thickness"></el-table-column>
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
      ifParameter: false,
      ifNewExam: false,
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
          base_thickness: '3mm'
        },
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
          base_thickness: '3mm'
        },
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
          base_thickness: '3mm'
        }
      ],
      queryOption: {
        queryTypes: {
          asd1: {
            title: "asd1",
            types: {
              金属材料焊接1: 1,
              金属材料焊接2: 2,
              金属材料焊接3: 3,
              金属材料焊接4: 4
            },
            selected: ""
          }
        },
        queryKeys: {
          asd1: {
            title: "asd1",
            placeholder: "项目名称/编号",
            value: null
          }
        },
        querySortType:{
          selected:null,
          types:{
            排序1:"-name",
            排序2:"name"
          }
        },
        videoDatabaseModule: false,
        searchModule: true,
        timeQuantumSearchModule: false,
        inquire: false,
        inquireName: false
      },
      schools: {
        pageIndex: 1,
        pageSize: 10,
        totalPage:10,
        datas: [],
        search: {
          queryKey: null,
          queryType: null,
          startTime: null,
          endTime: null,
          sortType: null,
          id: null
        }
      }
    }
  },
  computed: {
    headButtons() {
      let that = this;
      return [
        {
          name: "新增学校",
          clickView() {
            that.editView = true;
          }
        }
      ];
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

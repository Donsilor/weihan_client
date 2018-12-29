<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="informationList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="组别编号" prop="number" class="number"></el-table-column>
        <el-table-column label="组别名称" prop="group_name" class="group_name"></el-table-column>
        <el-table-column label="年级" prop="grade" class="grade"></el-table-column>
        <el-table-column label="专业名称" prop="professional_name" class="professional_name"></el-table-column>
        <el-table-column label="班级名称" prop="class_name" class="class_name"></el-table-column>
        <el-table-column label="所属学校" prop="school" class="school"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="modification icon iconfont icon-bianji"></i>
            <i class="delete icon iconfont icon-shanchu1"></i>
            <i class="examine icon iconfont icon-chakan"></i>
          </template>
        </el-table-column>
      </el-table>
      <paging></paging>
      <addgroupuser ></addgroupuser>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import Addgroupuser from './dialog/addgroupuser'



export default {
  name: 'groupinfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    Addgroupuser
  },
  data () {
    return {
      // 全选
      ifAllSelect: false,
      queryOption: {
        queryTypes: {
          data: {
            title: "data",
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
          data: {
            title: "data",
            placeholder: "123415",
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
        times:false,
        videoDatabaseModule: false,
        searchModule: true,
        timeQuantumSearchModule: false,
        inquire: false,
        inquireName: false
      },
      informationList: new Array(10).fill({
          ifSelect: false,
          number: '6801000003309',
          group_name:'18届精英一组',
          class_name:'焊接181班',
          professional_name: '焊接专业',
          grade:'2018',
          school:'北京大学'
      })
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
    },
    formatServeUrl (row) {
      return <a href={row.url} target="_blank">{row.url}</a>
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
     isclose(){
      this.status.isShowPublish=false;
      //把绑定的弹窗数组 设为false即可关闭弹窗
      },
      isshow(){

      }
  }

}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
</style>

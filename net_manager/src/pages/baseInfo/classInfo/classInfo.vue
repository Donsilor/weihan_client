<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="classs.list" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="班级编号" prop="code" class="number"></el-table-column>
        <el-table-column label="班级名称" prop="name" class="class_name"></el-table-column>
        <el-table-column label="专业名称" prop="professionName" class="professional_name"></el-table-column>
        <el-table-column label="年级" prop="grade" class="grade"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="modification icon iconfont icon-bianji"  @click="classs.data = scope.row, editView = true"></i>
            <i class="delete icon iconfont icon-shanchu1" @click="deleteClass(scope.row.id)"></i>
            <i class="examine icon iconfont icon-chakan"></i>
          </template>
        </el-table-column>
      </el-table>
      <paging
        :loadDatas="load"
        :totalCount="classs.totalCount"
        :pageSize="classs.pageSize"
        :pageIndex="classs.pageIndex"></paging>
      <editor-class v-if="editView" :close="e=>editView = false" :submit="edit" :option="classs.data"></editor-class>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import EditorClass from './dialog/editor'
import { User, RequestParams, SystemParameter } from 'common/entity'

export default {
  name: 'classinfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    EditorClass
  },
  data () {
    return {
      editView:false,
      // 全选
      ifAllSelect: false,
      queryOption: {
        queryTypes: {
          asd1: {
            title: null,
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
            title: null,
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
      classs:{
        pageIndex: 1,
        pageSize: 10,
        totalCount:10,
        data: {
          name: 'asd'
        },
        datas: [],
        list: [],
        search: {
          queryKey: null,
          queryType: null,
          startTime: null,
          endTime: null,
          sortType: null,
          id: null
        },
        query:null
      }
    }
  },
  computed: {
    headButtons() {
      let that = this;
      return [
        {
          name: "新增班级",
          clickView() {
            that.editView = true;
          }
        }
      ];
    }
  },
  watch: {
    queryOption:{
      handler(curVal,oldVal){
        let key = this.queryOption.queryKeys.data.value;
        let name = this.queryOption.queryTypes.data.selected;
        if(key){
          this.classs.query = {
            $and:[{
              [name]:{
                $regex: key, $options: "$ig"
              }
            }]
          }
        }
        else {
          this.classs.query = null;
        }
      },
      deep:true
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    deleteClass(id){
      this.$api.service.classes.delete([id])
      .then(response=>{
        this.load();
      })
    },
    edit(){
      this.$api.service.classes.upset(
        new RequestParams()
          .addAttribute('id', this.classs.data.id)
          .addAttribute('name', this.classs.data.name)
          .addAttribute('code', this.classs.data.code || SystemParameter.CODE)
      )
      .then(response=>{
        this.load();
        this.editView = false
      })
    },
    async load (pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.classes.search(
        new RequestParams()
          .addAttribute('sortType', this.queryOption.querySortType.selected)
          .addAttribute('query', this.classs.query)
          .addAttribute('pageIndex', pageIndex)
          .addAttribute('pageSize', pageSize)
      )
      this.classs.totalCount = response.totalCount
      this.classs.pageSize = response.pageSize
      this.classs.list = response.dataItems
    },
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
    }
  }

}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
</style>

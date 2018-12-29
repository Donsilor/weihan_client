<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="queryOption" :search="load" :sort="load"></search-bar>
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
      <editor-class v-if="editView" :close="e=>editView = false" :submit="edit" :professions="professions" :option="classs.data"></editor-class>
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
      SystemParameter:SystemParameter,
      editView:false,
      // 全选
      ifAllSelect: false,
      queryOption: {
        queryTypes: {
          data: {
            title: null,
            types: {
              班级编号: "code",
              班级名称: "name",
              专业名称: "professionId",
              年级: "group"
            },
            selected: ""
          }
        },
        queryKeys: {
          data: {
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
      professions:[],
      classs:{
        pageIndex: 1,
        pageSize: 10,
        totalCount:10,
        data: {
          group:null,
          name: null,
          professionId: null
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
            that.classs.data = {};
            that.editView = true;
          }
        }
      ];
    }
  },
  watch: {
    queryOption:{
      handler(curVal,oldVal){
        let key = this.queryOption.queryKeys.data.value+"";
        let name = this.queryOption.queryTypes.data.selected;
        if(key){
          if("professionId" == name){
            let query = this.professions.filter(o=>o.name.indexOf(key)>=0).map(o=>({[name]:o.id}));
            if(query.length){
              this.classs.query = {
                $or:query
              }
            }
            else {
              this.classs.query = {
                $and:[{code:123}]
              }
            }
          }
          else this.classs.query = {
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
  async mounted () {
    this.load()
    let response = await this.$api.service.professions.search({pageSize:-1})
    this.professions = response.dataItems;
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
          .addAttribute('grade', this.classs.data.grade)
          .addAttribute('professionId', this.classs.data.professionId)
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

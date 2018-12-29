<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="queryOption" :search="load" :sort="load"></search-bar>
    <div class="tableWrap">
      <el-tabs v-model="activeName" @tab-click="load()">
        <el-tab-pane label="老师" name="2">
          <div class="people-border">
            <operate-bar :deleteBtn="true" @selectAll="selectAll" @Del="deletePeople"></operate-bar>
            <div class="tableWrap">
              <el-table ref="multipleTable" :data="users.teachers.datas" style="width: 100%"
                        @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column label="用户编号" prop="code" class="number"></el-table-column>
                <el-table-column label="用户名" prop="userName" class="username"></el-table-column>
                <el-table-column label="真实姓名" prop="name" class="realusername"></el-table-column>
                <el-table-column label="状态" prop="state" class="status"></el-table-column>
                <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <i class="iconfont" @click="users.data = scope.row, ifEditPeople = true">&#xe617;</i>
                    <i class="iconfont" @click="deleteUsers(scope.row.userId)">&#xe63a;</i>
                    <i class="iconfont">&#xe600;</i>
                  </template>
                </el-table-column>
              </el-table>
              <paging :loadDatas="load" :totalCount="users.teachers.totalCount"></paging>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="学生" name="0">
          <div class="people-border">
            <operate-bar :deleteBtn="true" @selectAll="selectAll" @Del="deletePeople"></operate-bar>
            <div class="tableWrap">
              <el-table ref="multipleTable" :data="users.students.datas" style="width: 100%"
                        @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column label="用户编号" prop="code" class="number"></el-table-column>
                <el-table-column label="用户名" prop="userName" class="username"></el-table-column>
                <el-table-column label="真实姓名" prop="name" class="realusername"></el-table-column>
                <el-table-column label="状态" prop="state" class="status"></el-table-column>
                <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <i class="iconfont" @click="users.data = scope.row, ifEditPeople = true">&#xe617;</i>
                    <i class="iconfont"  @click="deleteUsers(scope.row.userId)">&#xe63a;</i>
                    <i class="iconfont">&#xe600;</i>
                  </template>
                </el-table-column>
              </el-table>
              <paging :loadDatas="load" :totalCount="users.students.totalCount"></paging>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="管理员" name="1" >
          <div class="people-border">
            <operate-bar :deleteBtn="true" @selectAll="selectAll" @Del="deletePeople"></operate-bar>
            <div class="tableWrap">
              <el-table ref="multipleTable" :data="users.admins.datas" style="width: 100%"
                        @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column label="用户编号" prop="code" class="number"></el-table-column>
                <el-table-column label="用户名" prop="userName" class="username"></el-table-column>
                <el-table-column label="真实姓名" prop="name" class="realusername"></el-table-column>
                <el-table-column label="状态" prop="state" class="status"></el-table-column>
                <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <i class="iconfont" @click="users.data = scope.row, ifEditPeople = true">&#xe617;</i>
                    <i class="iconfont" @click="deleteUsers(scope.row.userId)">&#xe63a;</i>
                    <i class="iconfont">&#xe600;</i>
                  </template>
                </el-table-column>
              </el-table>
              <paging :loadDatas="load" :totalCount="users.admins.totalCount"></paging>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <new-people
      v-if="editView"
      :option="users.data"
      :classs="classs"
      :close="e=>editView = false"
      :submit="edit"
    ></new-people>
    <edit-people v-if="ifEditPeople" :close="e=>ifEditPeople = false" :submit="edit" :option="users.data" ></edit-people>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import NewPeople from './dialog/newProple'
import EditPeople from './dialog/editPeople'
import { User, RequestParams, SystemParameter } from 'common/entity'
import { isBlank } from 'common/utils'

export default {
  name: 'peopleInfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    NewPeople,
    EditPeople
  },
  data () {
    return {
      ifNewPeople: false,
      ifEditPeople: false,
      // 全选
      ifAllSelect: false,
      editView: false,
      activeName: "0",
      queryOption: {
        queryTypes: {
          data: {
            title: null,
            types: {
              真实姓名: "realName",
              用户编号: "code",
              用户名: "userName",
            },
            selected: ''
          }
        },
        queryKeys: {
          data: {
            title: null,
            placeholder: '请输入关键字',
            value: null
          }
        },
        querySortType: {
          selected: null,
          types: {
            排序1: '-realName',
            排序2: 'realName'
          }
        },
        times: false,
        videoDatabaseModule: false,
        searchModule: true,
        timeQuantumSearchModule: false,
        inquire: false,
        inquireName: false
      },
      professions: [],
      classs: [],
      users: {
        data: {},
        students: {
          pageIndex: 1,
          totalCount: 10,
          datas:[]
        },
        teachers:{
          pageIndex: 1,
          totalCount: 10,
          datas:[]
        },
        admins:{
          pageIndex: 1,
          totalCount: 10,
          datas:[]
        },
        search: {
          queryKey: null,
          queryType: null,
          startTime: null,
          endTime: null,
          sortType: null,
          id: null
        },
        query: null
      }
    }
  },
  computed: {
    headButtons () {
      let that = this
      return [
        {
          name: '新增人员',
          clickView () {
            that.initEditData();
            that.editView = true
          }
        }
      ]
    }
  },
  watch: {
    queryOption: {
      handler (curVal, oldVal) {
        let key = this.queryOption.queryKeys.data.value
        let name = this.queryOption.queryTypes.data.selected
        if (key) {
          this.users.query = {
            $and: [{
              [name]: {
                $regex: key, $options: '$ig'
              }
            }]
          }
          if(+this.activeName){
            this.users.query.$and.push({userType:+this.activeName})
          }
        } else {
          this.users.query = null
        }
      },
      deep: true
    }
  },
  async mounted () {
    let response = await this.$api.service.classes.search({ pageSize: -1 })
    this.classs = response.dataItems
    this.initEditData();
    this.load()
  },
  methods: {
    initEditData(){
      this.users.data = {
          userName:null,//
          name:null,//
          nickName:null,//
          userType:null,//
          sex:null,//
          birthDate:null,//
          email:null,//
          phoneNo:null,//
          professionsId:null,//
          classIds:[],//
          classId:null,//
      }
    },
    deleteUsers (id) {
      let ids = null
      if (id) {
        ids = [id]
      } else {
        ids = this.multipleSelection.map(o => o.id)
      }
      if (ids.length) {
        ids["type"] = +this.activeName
        this.$api.service.users.delete(ids)
          .then(response => {
            this.load()
          })
      }
    },
    edit () {
      if(!isBlank(this.users.data.phoneNo)){
        this.$api.service.users.upset(
          new RequestParams()
            .addAttributes(this.users.data)
            .addAttribute("userType", +this.users.data.userType)
            .addAttribute('code', this.users.data.code || SystemParameter.CODE)
        )
          .then(response => {
            this.load()
            this.ifEditPeople = this.editView = false
          })
      }
      else {
        this.$alert("请选择填写完整的资料")
      }
    },
    async load (pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.users.search(
        new RequestParams()
          .addAttribute("type", +this.activeName)
          .addAttribute('sortType', this.queryOption.querySortType.selected)
          .addAttribute('query', this.users.query || (+this.activeName ? {$and:[{userType:+this.activeName}]} : null))
          .addAttribute('pageIndex', pageIndex)
          .addAttribute('pageSize', pageSize)
      )
      //学生
      if(response.subItems == 0){
        this.users.students.totalCount = response.totalCount
        this.users.students.datas = response.dataItems
      }
      //管理员
      else if(response.subItems == 1){
        this.users.admins.totalCount = response.totalCount
        this.users.admins.datas = response.dataItems
      }
      //教师
      else if(response.subItems == 2){
        this.users.teachers.totalCount = response.totalCount
        this.users.teachers.datas = response.dataItems
      }
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
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    deletePeople (id) {
      let ids = null
      if (id) {
        ids = [id]
      } else {
        ids = this.multipleSelection.map(o => o.id)
      }
      if (ids.length) {
        this.$api.service.professions.delete(ids)
          .then(response => {
            this.load()
          })
      }
    },
    selectAll (select) {
      if (select) {
        this.$refs.multipleTable.clearSelection()
        this.$refs.multipleTable.toggleAllSelection()
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    }

  }

}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
</style>

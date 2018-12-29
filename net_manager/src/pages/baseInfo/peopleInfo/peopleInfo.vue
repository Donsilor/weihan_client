<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <div class="tableWrap">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="管理员" name="first">
          <div class="people-border">
            <operate-bar :deleteBtn="true" @selectAll="selectAll" @Del="deletePeople"></operate-bar>
            <div class="tableWrap">
              <el-table ref="multipleTable" :data="admininformationList" style="width: 100%"
                        @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column label="用户编号" prop="number" class="number"></el-table-column>
                <el-table-column label="用户名" prop="username" class="username"></el-table-column>
                <el-table-column label="真实姓名" prop="realusername" class="realusername"></el-table-column>
                <el-table-column label="状态" prop="userstatus" class="status"></el-table-column>
                <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <i class="iconfont" @click="ifEditPeople = true">&#xe617;</i>
                    <i class="iconfont">&#xe63a;</i>
                    <i class="iconfont">&#xe600;</i>
                  </template>
                </el-table-column>
              </el-table>
              <paging></paging>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="老师" name="second">
          <div class="people-border">
            <operate-bar :deleteBtn="true" @selectAll="selectAll" @Del="deletePeople"></operate-bar>
            <div class="tableWrap">
              <el-table ref="multipleTable" :data="teachinformationList" style="width: 100%"
                        @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column label="用户编号" prop="number" class="number"></el-table-column>
                <el-table-column label="用户名" prop="username" class="username"></el-table-column>
                <el-table-column label="真实姓名" prop="realusername" class="realusername"></el-table-column>
                <el-table-column label="状态" prop="userstatus" class="status"></el-table-column>
                <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <i class="iconfont" @click="ifEditPeople = true">&#xe617;</i>
                    <i class="iconfont">&#xe63a;</i>
                    <i class="iconfont">&#xe600;</i>
                  </template>
                </el-table-column>
              </el-table>
              <paging></paging>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="学生" name="third">
          <div class="people-border">
            <operate-bar :deleteBtn="true" @selectAll="selectAll" @Del="deletePeople"></operate-bar>
            <div class="tableWrap">
              <el-table ref="multipleTable" :data="studentinformationList" style="width: 100%"
                        @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column label="用户编号" prop="number" class="number"></el-table-column>
                <el-table-column label="用户名" prop="username" class="username"></el-table-column>
                <el-table-column label="真实姓名" prop="realusername" class="realusername"></el-table-column>
                <el-table-column label="状态" prop="userstatus" class="status"></el-table-column>
                <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <i class="iconfont" @click="ifEditPeople = true">&#xe617;</i>
                    <i class="iconfont">&#xe63a;</i>
                    <i class="iconfont">&#xe600;</i>
                  </template>
                </el-table-column>
              </el-table>
              <paging></paging>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <new-people
      v-if="editView"
      :professions="professions"
      :classs="classs"
      :close="e=>editView = false"
      :submit="e=>editView = false"
    ></new-people>
    <edit-people v-if="ifEditPeople" :close="e=>ifEditPeople = false"></edit-people>
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
      activeName: 'first',
      queryOption: {
        queryTypes: {
          data: {
            title: null,
            types: {
              金属材料焊接1: 1,
              金属材料焊接2: 2,
              金属材料焊接3: 3,
              金属材料焊接4: 4
            },
            selected: ''
          }
        },
        queryKeys: {
          data: {
            title: null,
            placeholder: '123415',
            value: null
          }
        },
        querySortType: {
          selected: null,
          types: {
            排序1: '-name',
            排序2: 'name'
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
      admininformationList: new Array(10).fill({
        ifSelect: false,
        number: '6801000003309',
        username: '我是管理员',
        realusername: '管理员',
        userstatus: '在线'
      }),
      teachinformationList: new Array(10).fill({
        ifSelect: false,
        number: '6801000003309',
        username: '我是老师',
        realusername: '老师',
        userstatus: '看着你'
      }),
      studentinformationList: new Array(10).fill({
        ifSelect: false,
        number: '6801000003309',
        username: '我是学生',
        realusername: '学生',
        userstatus: '写作业'
      })

    }
  },
  computed: {
    headButtons () {
      let that = this
      return [
        {
          name: '新增人员',
          clickView () {
            that.editView = true
          }
        }
      ]
    }
  },
  async mounted () {
    let response = await this.$api.service.professions.search({ pageSize: -1 })
    this.professions = response.dataItems
    response = await this.$api.service.classes.search({ pageSize: -1 })
    this.classs = response.dataItems
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

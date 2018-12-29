<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="searchOption"></search-bar>
    <operate-bar :deleteBtn="true" @selectAll="selectAll" @Del="deleteContests"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="tasks.datas" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="竞赛编号" prop="number"></el-table-column>
        <el-table-column label="竞赛名称" prop="name"></el-table-column>
        <el-table-column label="竞赛时长" prop="time"></el-table-column>
        <el-table-column label="焊接类型" prop="weldsTypes"></el-table-column>
        <el-table-column label="接头类型" prop="spliceType"></el-table-column>
        <el-table-column label="焊接位置" prop="weldsPosition"></el-table-column>
        <el-table-column label="母材类型" prop="parentMetal"></el-table-column>
        <el-table-column label="母材厚度" prop="thickness"></el-table-column>
        <el-table-column label="公差" prop="tolerance"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <i class="iconfont" @click="ifShowDetail = true">&#xe600;</i>
            <i class="iconfont" @click="ifInitiate = true">&#xe631;</i>
          </template>
        </el-table-column>
      </el-table>
      <paging
        :loadDatas="laodTasks"
        :totalPage="tasks.totalPage"
        :pageSize="tasks.pageSize"
        :pageIndex="tasks.pageIndex"></paging>
    </div>
    <add-contest-dialog v-if="ifAddContest" :close="e=>ifAddContest = false"></add-contest-dialog>
    <import-dialog v-if="ifShowImport" :close="e=>ifShowImport = false" @importing="importSucceed"></import-dialog>
    <import-succeed v-if="ifImportSucceed" :close="e=>ifImportSucceed = false"></import-succeed>
    <export-dialog v-if="ifShowExport" :close="e=>ifShowExport = false"></export-dialog>
    <delete-dialog v-if="ifShowDelete" :close="e=>ifShowDelete = false"></delete-dialog>
    <parameter-detail v-if="ifShowDetail" :close="e=>ifShowDetail = false"></parameter-detail>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import AddContestDialog from './dialog/addContestDialog'
import ImportDialog from './dialog/importDialog'
import importSucceed from './dialog/importSucDialog'
import ExportDialog from './dialog/exportDialog'
import ParameterDetail from './dialog/parameterDetail'
import InitiateDialog from './dialog/initiateDialog'
import DeleteDialog from 'components/dialog/deleteDialog/deleteDialog'
import initiateDialog from './dialog/initiateDialog'
import { User, RequestParams } from 'common/entity'


export default {
  name: 'ContestManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    AddContestDialog,
    ImportDialog,
    importSucceed,
    ExportDialog,
    ParameterDetail,
    InitiateDialog,
    DeleteDialog
  },
  data () {
    return {
      show:true,
      ifAddContest: false,
      ifShowImport: false,
      ifImportSucceed: false,
      ifShowExport: false,
      ifShowDelete: false,
      ifShowDetail: false,
      ifInitiate: false,
      searchOption: {
        queryTypes: {
          data: {
            title: null,
            types: {
              任务名称: 1,
              焊接类型: 2,
              接头类型: 3,
              焊接位置: 4,
              母材材料: 5,
              母材间隙: 6,
              母材厚度: 7,
              公差: 8
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
            名称倒序: '-name',
            名称正序: 'name'
          }
        },
        times: []
      },
      tasks: {
        pageIndex: 1,
        pageSize: 10,
        totalPage: 10,
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
    headButtons () {
      let that = this
      return [
        {
          name: '新增竞赛',
          iconfont: 'icon-xinjian',
          clickView () {
            that.ifAddContest = true
          }
        },
        {
          name: '导入',
          iconfont: 'icon-daoru',
          clickView () {
            that.ifShowImport = true
          }
        },
        {
          name: '导出',
          iconfont: 'icon-daochu1',
          clickView () {
            that.ifShowExport = true
          }
        }
      ]
    }
  },
  mounted () {
    this.laodTasks()
  },
  methods: {
    async laodTasks (pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.practical.task.search(
        new RequestParams()
          .addAttribute('pageSize', pageSize)
          .addAttribute('pageIndex', pageIndex)
      )
      this.tasks.datas = response.dataItems
      this.tasks.totalPage = response.totalPage
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    importSucceed (e) {
      this.ifImportSucceed = e
    },
    deleteContests (id) {
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

</style>

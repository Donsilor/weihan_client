<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="searchOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table
        ref="multipleTable"
        :data="informationList"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="考试顺序" prop="order" class="order"></el-table-column>
        <el-table-column label="考试编号" prop="number" class="number"></el-table-column>
        <el-table-column label="考试名称" prop="name" class="name" :formatter="formatExamName"></el-table-column>
        <el-table-column label="焊接类型" prop="weld_type" class="weld_type"></el-table-column>
        <el-table-column label="接头类型" prop="splice_type" class="splice_type"></el-table-column>
        <el-table-column label="焊接位置" prop="weld_location" class="weld_location"></el-table-column>
        <el-table-column label="母材类型" prop="base_type" class="base_type"></el-table-column>
        <el-table-column label="母材间隙" prop="base_interval" class="base_interval"></el-table-column>
        <el-table-column label="母材厚度" prop="base_thickness" class="base_thickness"></el-table-column>
        <el-table-column label="公差" prop="tolerance" class="tolerance"></el-table-column>
        <el-table-column label="有效时间段" prop="valid_time" class="valid_time" width="200"></el-table-column>
        <el-table-column label="考试时长" prop="exam_time" class="exam_time"></el-table-column>
        <el-table-column label="状态" prop="status" class="status"></el-table-column>
        <el-table-column label="操作" width="200" class="handle">
          <template slot-scope="scope">
            <a href="javascript:" @click="ifIssue = true">发布</a>
          </template>
        </el-table-column>
      </el-table>
      <paging
        :loadDatas="laodTasks"
        :totalPage="tasks.totalPage"
        :pageSize="tasks.pageSize"
        :pageIndex="tasks.pageIndex"
      ></paging>
    </div>
    <newExam v-if="ifNewExam" :close="e=>ifNewExam = false" :submit="edit"></newExam>
    <importDialog v-if="ifImport" :close="e=>ifImport = false"></importDialog>
    <exportDialog v-if="ifExport" :close="e=>ifExport = false"></exportDialog>
    <delete-dialog v-if="ifShowDel"></delete-dialog>
    <issue :ifIssue="ifIssue"></issue>

    <parameterDetail :ifParameter='ifShowParameterDetail'></parameterDetail>
    <importFinish :isImportFinish="isImportFinish"></importFinish>
    <warning :hasWarn="hasWarn"></warning>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import newExam from './dialog/newExam'
import importDialog from 'components/dialog/importDialog'
import exportDialog from 'components/dialog/exportDialog'
import DeleteDialog from 'components/dialog/deleteDialog/deleteDialog'
import Issue from 'components/dialog/deleteDialog/deleteDialog'

import ImportFinish from 'components/dialog/deleteDialog/deleteDialog'
import ParameterDetail from './dialog/parameter_detail'
import Warning from './dialog/Warning'

import { User, RequestParams } from 'common/entity'

export default {
  name: 'schoolInfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    newExam,
    importDialog,
    exportDialog,
    DeleteDialog,
    ImportFinish,
    ParameterDetail,
    Issue,
    Warning
  },
  data () {
    return {
      ifNewExam: false,
      ifImport: false,
      ifExport: false,
      ifParameter: false,
      ifImport: false,
      ifExport: false,
      ifShowParameterDetail: false,
      ifShowDel: false,
      isImportFinish: false,
      ifIssue: false,
      ifShowDelete: false,
      hasWarn: false,
      // 全选
      ifAllSelect: false,
      informationList: [{
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
        valid_time: '11:12:13',
        exam_time: '30分钟',
        status: '未发布',
        handle: '发布'
      }],
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
    headButtons() {
      let that = this;
      return [
        {
          name: "考试顺序",
          clickView() {
            // that.editView = true;
          }
        },
        {
          name: "新建考试",
          clickView() {
            that.ifNewExam = true;
          }
        },
        {
          name: "导入",
          clickView() {
            that.ifImport = true;
          }
        },
        {
          name: "导出",
          clickView() {
            that.ifExport = true;
          }
        }
      ];
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
      return (
        <a href={row.url} target="_blank">
          {row.url}
        </a>
      )
    },
    formatExamName (row) {
      return <a onClick={this.showParameDetail.bind(this, true)}>{row.name}</a>
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

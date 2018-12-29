<template>
  <div>
    <top-bar :option="headButtons"></top-bar>    
    <search-bar :option="searchOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table
        ref="multipleTable"
        :data="tasks.datas"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="作业编号" prop="code"></el-table-column>
        <el-table-column label="作业名称" prop="name"></el-table-column>
        <el-table-column label="创建者" prop="creatorName"></el-table-column>
        <el-table-column label="最后创建者" prop="updatorName"></el-table-column>
        <el-table-column label="总题数" prop="questionCount"></el-table-column>
        <el-table-column label="有效时间段" prop="effectivePeriod"  :formatter="o=>`${o.startDate}~${o.endDate}`"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont">&#xe61b;</i>
            <a href="javascript:">成绩详情</a>
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

    <assignHomework v-if="ifNewHomework" :close="e=>ifNewHomework = false"></assignHomework>
    <importDialog v-if="ifImport" :close="e=>ifImport = false"></importDialog>
    <exportDialog v-if="ifExport" :close="e=>ifExport = false"></exportDialog>
    <deleteDialog v-if="ifDelete"></deleteDialog>

  </div>
</template>

<script>
import TopBar from "components/mainTopBar/MainTopBar";
import SearchBar from "components/searchBar/SearchBar";
import OperateBar from "components/operateBar/OperateBar";
import Paging from "components/paging/Paging";
import { User, RequestParams } from "common/entity";
import AssignHomework from 'components/dialog/addGroupUser'
import importDialog from 'components/dialog/importDialog'
import exportDialog from 'components/dialog/exportDialog'
import deleteDialog from 'components/dialog/deleteDialog/deleteDialog'

export default {
  name: "TaskManage",
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    AssignHomework,
    importDialog,
    exportDialog,
    deleteDialog
  },
  data() {
    return {
      ifNewHomework: false,
      ifImport: false,
      ifExport: false,
      ifDelete: false,
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
        querySortType: {
          selected: null,
          types: {
            名称倒序: "-name",
            名称正序: "name"
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
    };
  },
  computed: {
    headButtons() {
      let that = this;
      return [
        {
          name: "新建题目",
          clickView() {
            that.ifNewHomework = true;
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
  mounted() {
    this.laodTasks();
  },
  methods: {
    async laodTasks(pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.homeworks.search(
        new RequestParams()
          .addAttribute("pageSize", pageSize)
          .addAttribute("pageIndex", pageIndex)
      );
      this.tasks.datas = response.homeworks;
      this.tasks.totalPage = response.totalPage;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    newHomework(e){
      this.ifNewHomework = e
    },
    cancelNewHomework(e){
      this.ifNewHomework = e
    },
    importDialog(e){
      this.ifImportTask = e
    },
    cancelImport(e){
      this.ifImportTask = e
    },
    exportDialog(e){
      this.ifExportTask = e
    },
    cancelExport(e){
      this.ifExportTask = e
    },
    deleteSelected(e){
      this.ifShowWarning = e
    },
    closeWarn(e){
      this.ifShowWarning = e
      console.log(typeof(this.ifShowWarning))
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>

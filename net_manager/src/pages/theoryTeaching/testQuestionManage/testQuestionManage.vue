<template>
  <div>
    <top-bar :option="headButtons"></top-bar>    
    <search-bar :option="searchOption"></search-bar>
    <operate-bar :deleteBtn="true" @deleteSelected="deleteSelected"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="tasks.datas" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="试卷编号" prop="code"></el-table-column>
        <el-table-column label="试卷名称" prop="name"></el-table-column>
        <el-table-column label="创建者" prop="creatorName"></el-table-column>
        <el-table-column label="最后修改者" prop="updatorName"></el-table-column>
        <el-table-column label="总题数" prop="questionsCount"></el-table-column>
        <el-table-column label="有效时间段" prop="effectivePeriod"  :formatter="o=>`${o.startDate}~${o.endDate}`"></el-table-column>
        <el-table-column label="考试时长" prop="examTime"></el-table-column>
        <el-table-column label="总分" prop="totalPoints"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont">&#xe617;</i>
            <a href="javascript:">成绩详情</a>
          </template>
        </el-table-column>
      </el-table>
      <paging
        :loadDatas="loadQuestions"
        :totalPage="tasks.totalPage"
        :pageSize="tasks.pageSize"
        :pageIndex="tasks.pageIndex"
      ></paging>
    </div>

    <newTest v-if="ifNewTest" :close="e=>ifNewTest = false"></newTest>
    <importDialog v-if="ifImport" :close="e=>ifImport = false"></importDialog>
    <exportDialog v-if="ifExport" :close="e=>ifExport = false"></exportDialog>
    <deleteDialog v-if="ifDelete"></deleteDialog>

  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import { User, RequestParams } from "common/entity"
import NewTest from './dialog/NewTestQuestion'
import importDialog from 'components/dialog/importDialog'
import exportDialog from 'components/dialog/exportDialog'
import deleteDialog from 'components/dialog/deleteDialog/deleteDialog'

export default {
  name: 'TestQuestionManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    NewTest,
    importDialog,
    exportDialog,
    deleteDialog
  },
  data () {
    return {
      ifNewTest: false,
      ifImport: false,
      ifExport: false,
      ifDelete: false,
      searchOption: {
        queryTypes: {
          asd1: {
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
          asd1: {
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
    }
  },
  computed: {
    headButtons() {
      let that = this;
      return [
        {
          name: "新建试题试卷",
          clickView() {
            that.ifNewTest = true;
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
  mounted(){
    this.loadQuestions();
  },
  methods: {
    log(a, b){
      console.log(a, b)
    },
    async loadQuestions(pageIndex=1, pageSize=10) {
      let response = await this.$api.service.papers.search(
        new RequestParams()
          .addAttribute("pageIndex", pageIndex)
          .addAttribute("pageSize", pageSize)
      );
      this.tasks.pageSize = response.pageSize;
      this.tasks.totalPage = response.totalPage;
      this.tasks.datas = response.dataItems;
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    newTestQuestion(e){
      this.ifNewTest = e
    },
    cancelNewTest(e){
      this.ifNewTest = e
    },
    importDialog(e){
      this.ifShowImport = e
    },
    cancelImport(e){
      this.ifShowImport = e
    },
    exportDialog(e){
      this.ifShowExport = e
    },
    cancelExport(e){
      this.ifShowExport = e
    },
    deleteSelected(e){
      this.ifShowWarning = e
    },
    closeWarn(e){
      this.ifShowWarning = e
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>

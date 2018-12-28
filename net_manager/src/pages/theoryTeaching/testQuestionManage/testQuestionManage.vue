<template>
  <div>
    <top-bar 
    :newExamPapers="true" 
    :importBtn="true" 
    :exportBtn="true"
    @newTestQuestion="newTestQuestion"
    @importDialog="importDialog"
    @exportDialog="exportDialog"
    ></top-bar>
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

    <newTest :ifNewTest="ifNewTest" @cancelNewTest="cancelNewTest"></newTest>
    <testImport :ifShowImport="ifShowImport" @cancelImport="cancelImport"></testImport>
    <testExport :ifShowExport="ifShowExport" @cancelExport="cancelExport"></testExport>
    <warning :ifShowWarning="ifShowWarning" @closeWarn="closeWarn"></warning>


  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import { User, RequestParams } from "common/entity"
import NewTest from './dialog/NewTestQuestion'
import testImport from './dialog/testImport'
import testExport from './dialog/testExport'
import warning from './dialog/warning'

export default {
  name: 'TestQuestionManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    NewTest,
    testImport,
    testExport,
    warning
  },
  data () {
    return {
      ifNewTest: false,
      ifShowImport: false,
      ifShowExport: false,
      ifShowWarning: false,
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

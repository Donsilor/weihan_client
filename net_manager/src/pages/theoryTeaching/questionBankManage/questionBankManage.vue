<template>
  <div>
    <top-bar
    :newQuestion="true" 
    :newQuestionTemplateDownload="true" 
    :exportBtn="true" 
    @newQuestion="newQuestion"
    @exportDialog="exportDialog">
    </top-bar>
    <search-bar :option="searchOption"></search-bar>
    <operate-bar :deleteBtn="true" @deleteSelected="deleteSelected"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="tasks.datas" style="width: 100%"  @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="题库编号" prop="code"></el-table-column>
        <el-table-column label="题库名称" prop="name"></el-table-column>
        <el-table-column label="创建者" prop="creatorName"></el-table-column>
        <el-table-column label="最后创建者" prop="updatorName"></el-table-column>
        <el-table-column label="总题数" prop="questionCount"></el-table-column>
        <el-table-column label="题库类型" prop="questionBankType"></el-table-column>
        <el-table-column label="状态" prop="state"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont">&#xe617;</i>
            <i class="iconfont">&#xe612;</i>
          </template>
        </el-table-column>
      </el-table>
      <paging 
      :loadDatas="loadQuestions"
      :totalPage="tasks.totalPage"
      :pageSize="tasks.pageSize"
      :pageIndex="tasks.pageIndex"></paging>
    </div>

    <newQuestion :ifNewQuestion="ifNewQuestion" @cancelNewQuestion="cancelNewQuestion"></newQuestion>
    <questionExport :ifExportQuestion="ifExportQuestion" @cancelExport="cancelExport" v-model="tasks.data" :close="asd=-true"></questionExport>
    <warning :ifRemove="ifRemove" @closeWarn="closeWarn"></warning>

  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import { User, RequestParams, SystemParameter} from "common/entity";
import NewQuestion from "./dialog/newQuestionBank";
import QuestionExport from './dialog/ExamExport'
import Warning from './dialog/Warning'

export default {
  name: 'QuestionBankManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    NewQuestion,
    QuestionExport,
    Warning
  },
  data () {
    return {
      ifNewQuestion: false,
      ifExportQuestion: false,
      ifShowDelete: false,
      ifRemove: false,
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
        data:{
          name:"asd",
          questionsLevel:"2",
          questionsClass:"1"
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
        }
      }
    }
  },
  mounted(){
    this.loadQuestions();
  },
  methods: {

    async loadQuestions(pageIndex=1, pageSize=10) {
      let response = await this.$api.service.questions.search(
        new RequestParams()
          .addAttribute("pageIndex", pageIndex)
          .addAttribute("pageSize", pageSize)
      );
      this.tasks.totalPage = response.totalPage;
      this.tasks.datas = response.dataItems;
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    newQuestion(e){
      this.ifNewQuestion = e
    },
    cancelNewQuestion(e){
      this.ifNewQuestion = e
    },
    exportDialog (e) {
      this.ifExportQuestion = e
    },
    cancelExport(e) {
      this.ifExportQuestion = e
    },
    deleteSelected (e) {
      this.ifRemove = e
    },
    closeWarn(e){
      console.log(111)
      console.log(e)
      this.ifRemove = e
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>

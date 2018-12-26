<template>
  <div>
    <top-bar :newQuestion="true" :newQuestionTemplateDownload="true" :exportBtn="true"></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="questions.datas" style="width: 100%"  @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="题库编号" prop="number"></el-table-column>
        <el-table-column label="题库名称" prop="name"></el-table-column>
        <el-table-column label="创建者" prop="creator"></el-table-column>
        <el-table-column label="最后创建者" prop="lastCreator"></el-table-column>
        <el-table-column label="总题库" prop="total"></el-table-column>
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
      :totalPage="questions.totalPage"
      :pageSize="questions.pageSize"
      :pageIndex="questions.pageIndex"></paging>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import { User, RequestParams } from "common/entity";

export default {
  name: 'QuestionBankManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      questions:{
        pageIndex: 1,
        pageSize: 10,
        totalPage:10,
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
    async loadQuestions(pageIndex=1, pageSize=10) {
      let response = await this.$api.service.questions.search(
        new RequestParams()
          .addAttribute("pageIndex", pageIndex)
          .addAttribute("pageSize", pageSize)
      );
      this.questions.totalPage = response.totalPage;
      this.questions.datas = response.questionLibs;
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>

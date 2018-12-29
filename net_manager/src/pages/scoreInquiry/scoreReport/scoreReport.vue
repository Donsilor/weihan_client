<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :searchModule="false" :inquire="true"></search-bar>
    <operate-bar :inquireOperate="true" @export="ifExport = true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="scoreReportList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="试卷编号" prop="number"></el-table-column>
        <el-table-column label="考核训练名称" prop="name"></el-table-column>
        <el-table-column label="班级" prop="class"></el-table-column>
        <el-table-column label="组别" prop="group"></el-table-column>
        <el-table-column label="平均成绩" prop="meanScore"></el-table-column>
        <el-table-column label="不及格" prop="fail"></el-table-column>
        <el-table-column label="中" prop="medium"></el-table-column>
        <el-table-column label="良" prop="benign"></el-table-column>
        <el-table-column label="优" prop="excellent"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont" @click="showReport = true">&#xe619;</i>
          </template>
        </el-table-column>
      </el-table>
      <paging></paging>
    </div>
    <export-dialog v-if="ifExport" :close="e=>ifExport = false"></export-dialog>
    <report-dialog v-if="showReport" :close="e=>showReport = false"
                   @setGradeLine="ifSetGradeLine = true"></report-dialog>
    <set-score-dialog v-if="ifSetGradeLine" :close="e=>ifSetGradeLine = false"></set-score-dialog>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import ExportDialog from 'components/dialog/exportDialog'
import ReportDialog from './dialog/ReportDialog'
import SetScoreDialog from './dialog/setScoreDialog'

export default {
  name: 'scoreReport',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    ExportDialog,
    ReportDialog,
    SetScoreDialog
  },
  data () {
    return {
      ifExport: false,
      showReport: false,
      ifSetGradeLine: false,
      scoreReportList: [
        {
          number: 680100003309,
          name: '国赛1',
          class: '1班',
          group: 'eee',
          meanScore: 88,
          fail: '40%',
          medium: '10%',
          benign: '10%',
          excellent: '40%'
        },
        {
          number: 680100003309,
          name: '国赛1',
          class: '1班',
          group: 'eee',
          meanScore: 88,
          fail: '40%',
          medium: '10%',
          benign: '10%',
          excellent: '40%'
        },
        {
          number: 680100003309,
          name: '国赛1',
          class: '1班',
          group: 'eee',
          meanScore: 88,
          fail: '40%',
          medium: '10%',
          benign: '10%',
          excellent: '40%'
        }
      ]
    }
  },
  computed: {
    headButtons() {
      let that = this;
      return [
        {
          name: "新增学校",
          clickView() {
            that.editView = true;
          }
        }
      ];
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>

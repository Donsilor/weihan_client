<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :searchModule="false" :inquire="true" :inquireName="true"></search-bar>
    <operate-bar :inquireOperate="true" @export="ifExport = true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="inquireList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="学员姓名" prop="name"></el-table-column>
        <el-table-column label="专业" prop="specialty"></el-table-column>
        <el-table-column label="年级" prop="grade"></el-table-column>
        <el-table-column label="班级" prop="class"></el-table-column>
        <el-table-column label="完成情况" prop="accomplishSituation"></el-table-column>
        <el-table-column label="成绩" prop="score"></el-table-column>
      </el-table>
      <paging></paging>
    </div>
    <export-dialog v-if="ifExport" :close="e=>ifExport = false"></export-dialog>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import ExportDialog from 'components/dialog/exportDialog'

export default {
  name: 'inquire',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    ExportDialog
  },
  data () {
    return {
      ifExport: false,
      inquireList: [
        {
          name: '张载',
          specialty: '焊接',
          grade: 2018,
          class: '1班',
          accomplishSituation: '已完成',
          score: 88
        },
        {
          name: '张载',
          specialty: '焊接',
          grade: 2018,
          class: '1班',
          accomplishSituation: '已完成',
          score: 88
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

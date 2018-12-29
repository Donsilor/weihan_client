<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="query"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="courseList" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="学生编号" prop="studentNumber"></el-table-column>
        <el-table-column label="学生名称" prop="studentName"></el-table-column>
        <el-table-column label="理论成绩" prop="TheoreticalResults"></el-table-column>
        <el-table-column label="实操考卷名称" prop="fieldTestsName"></el-table-column>
        <el-table-column label="实操最高分" prop="topScore"></el-table-column>
        <el-table-column label="总分" prop="totalScore"></el-table-column>
        <el-table-column label="通过登记" prop="level"></el-table-column>
      </el-table>
      <paging></paging>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'

export default {
  name: 'exam',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      courseList: new Array(5).fill(
        {
          studentNumber: 111,
          studentName: '陈达',
          TheoreticalResults: 70,
          fieldTestsName: '150mm直径不锈钢钢管\n' +
            'V形坡口对接水平固定手工\n' +
            '钨极氩弧焊TIG',
          topScore: 70,
          totalScore: 140,
          level: '初级'
        }
      ),
      query: {
        queryKeys: {
          data: {
            title: null,
            placeholder: '项目名称和编号',
            value: null
          }
        },
        queryTypes: {
          data: {
            title: null,
            types: {
              金属材料焊接1: 1,
              金属材料焊接2: 2
            },
            selected: '筛选条件'
          }
        }
      }

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

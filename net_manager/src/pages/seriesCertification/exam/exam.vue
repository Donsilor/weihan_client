<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="query"></search-bar>
    <div class="tableWrap">
      <el-tabs v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane label="理论考试" name="theoryTest">
          <operate-bar :deleteBtn="true"></operate-bar>
          <el-table ref="multipleTable" :data="theoryTestList" style="width: 100%"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="比赛类型" prop="raceType"></el-table-column>
            <el-table-column label="名称" prop="name"></el-table-column>
            <el-table-column label="操作" width="500">
              <template slot-scope="scope">
                <a href="javascript:">成绩报告</a>
                <a href="javascript:" class="cancel">设置试卷</a>
                <i class="iconfont">&#xe617;</i>
                <i class="iconfont">&#xe612;</i>
              </template>
            </el-table-column>
          </el-table>
          <paging></paging>
        </el-tab-pane>
        <el-tab-pane label="实操考试" name="fieldTest">
          <operate-bar :deleteBtn="true"></operate-bar>
          <el-table ref="multipleTable" :data="fieldTestList" style="width: 100%"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="比赛类型" prop="raceType"></el-table-column>
            <el-table-column label="名称" prop="name"></el-table-column>
            <el-table-column label="焊接类型" prop="weldsTypes"></el-table-column>
            <el-table-column label="接头类型" prop="spliceType"></el-table-column>
            <el-table-column label="焊接位置" prop="weldsPosition"></el-table-column>
            <el-table-column label="母材材料" prop="baseMetalMaterial"></el-table-column>
            <el-table-column label="母材间隙" prop="baseInterval"></el-table-column>
            <el-table-column label="母材间隙" prop="baseInterval"></el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <a href="javascript:">成绩报告</a>
                <a href="javascript:" class="cancel">查看工艺卡</a>
              </template>
            </el-table-column>
          </el-table>
          <paging></paging>
        </el-tab-pane>
      </el-tabs>
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
      activeTab: 'theoryTest',
      theoryTestList: new Array(10).fill(
        {
          raceType: '初级焊工认证',
          name: '试卷A'
        }
      ),
      fieldTestList: new Array(5).fill(
        {
          raceType: '初级焊工认证',
          name: '试卷A',
          weldsTypes: 'SWAM',
          spliceType: '平板对接',
          weldsPosition: '焊接位置',
          baseMetalMaterial: '不锈钢',
          baseInterval: 3
        }
      ),
      query: {
        queryKeys: {
          asd1: {
            title: null,
            placeholder: '项目名称和编号',
            value: null
          }
        },
        queryTypes: {
          asd1: {
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
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.cell
  > *
    margin 0 .3rem

  a
    display inline-block
    padding 0 1rem
    font-size .875rem
    line-height 1.875rem
    border-radius .3rem
    border 1px solid #35a5de
    background-color #35a5de
    color #fff
    transition background .3s

    &.cancel
      border-color $inputBorderColor
      color #000
      background none

      &:hover
        background-color #999

    &:hover
      background-color #0d73b8

</style>

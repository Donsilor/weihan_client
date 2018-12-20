<template>
  <div>
    <top-bar :newContest="true" :importBtn="true" :exportBtn="true"></top-bar>
    <operate-bar :projectionScreen="true" :stopBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="CurrentContestList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="竞赛组编号" prop="groupNumber"></el-table-column>
        <el-table-column label="竞赛编号" prop="number"></el-table-column>
        <el-table-column label="竞赛名称" prop="name"></el-table-column>
        <el-table-column label="竞赛类型" prop="contestType"></el-table-column>
        <el-table-column label="A方" prop="groupA"></el-table-column>
        <el-table-column label="B方" prop="groupB"></el-table-column>
        <el-table-column label="创建方式" prop="createWay"></el-table-column>
        <el-table-column label="竞赛时长" prop="time"></el-table-column>
        <el-table-column label="开始时间" prop="startTime"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <i class="iconfont">&#xe600;</i>
          </template>
        </el-table-column>
      </el-table>
      <paging></paging>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'

export default {
  name: 'CurrentContest',
  components: {
    TopBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      CurrentContestList: [
        {
          groupNumber: 2018121401,
          number: 68010003309,
          name: '作业竞赛1',
          contestType: '一对一',
          groupA: '杨科',
          groupB: '陈晓东',
          createWay: '教师指定',
          time: '20分钟',
          startTime: '2018/12/06 11:00'
        },
        {
          groupNumber: 2018121401,
          number: 68010003309,
          name: '作业竞赛1',
          contestType: '一对一',
          groupA: '杨科',
          groupB: '陈晓东',
          createWay: '教师指定',
          time: '20分钟',
          startTime: '2018/12/06 11:00'
        },
        {
          groupNumber: 2018121401,
          number: 68010003309,
          name: '作业竞赛1',
          contestType: '一对一',
          groupA: '杨科',
          groupB: '陈晓东',
          createWay: '教师指定',
          time: '20分钟',
          startTime: '2018/12/06 11:00'
        }
      ]
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

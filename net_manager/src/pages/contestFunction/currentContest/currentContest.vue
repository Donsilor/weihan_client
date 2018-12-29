<template>
  <div>
    <top-bar></top-bar>
    <operate-bar :projectionScreen="true" :stopBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="tasks.datas" style="width: 100%"
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
      <paging 
      :loadDatas="laodTasks"
      :totalPage="tasks.totalPage"
      :pageSize="tasks.pageSize"
      :pageIndex="tasks.pageIndex"></paging>
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
    this.loadTasks();
  },
  methods: {
    async loadTasks(pageIndex=1, pageSize=10) {
      let response = await this.$api.service.competition.group.select(
        new RequestParams()
          .addAttribute("pageIndex", pageIndex)
          .addAttribute("pageSize", pageSize)
          .addAttribute("query", {
            $and:[
              {effectiveEndTime:{$lt:moment().format("YYYY-MM-DD HH:mm:ss")}}
            ]
          })
      );
      this.tasks.totalPage = response.totalPage;
      this.tasks.datas = response.dataItems;
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

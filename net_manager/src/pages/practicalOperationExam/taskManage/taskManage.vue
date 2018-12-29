<template>
  <div>
    <top-bar :option="headButtons"></top-bar>                
    <search-bar :option="searchOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table
        ref="multipleTable"
        :data="tasks.datas"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="任务顺序" prop="sort" class="order"></el-table-column>
        <el-table-column label="任务编号" prop="code" class="number"></el-table-column>
        <el-table-column label="任务名称" prop="name" class="name"></el-table-column>
        <el-table-column label="焊接类型" prop="weldType" class="weld_type"></el-table-column>
        <el-table-column label="接头类型" prop="spliceType" class="splice_type"></el-table-column>
        <el-table-column label="焊接位置" prop="weldTocation" class="weld_location"></el-table-column>
        <el-table-column label="母材类型" prop="baseType" class="base_type"></el-table-column>
        <el-table-column label="母材间隙" prop="baseInterval" class="base_interval"></el-table-column>
        <el-table-column label="母材厚度" prop="baseThickness" class="base_thickness"></el-table-column>
        <el-table-column label="公差" prop="tolerance" class="tolerance"></el-table-column>
        <el-table-column label="有效时间段" prop="time" class="time" width="180"></el-table-column>
        <el-table-column label="状态" prop="status" class="status"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <a href="javascript:">发布</a>
          </template>
        </el-table-column>
      </el-table>
      <paging
      :loadDatas="laodTasks"
      :totalPage="tasks.totalPage"
      :pageSize="tasks.pageSize"
      :pageIndex="tasks.pageIndex"></paging>
    </div>

    <newTask v-if="ifNewTask" :close="e=>ifNewTask = false" :submit="edit"></newTask>
    <importDialog v-if="ifImport" :close="e=>ifImport = false"></importDialog>
    <exportDialog v-if="ifExport" :close="e=>ifExport = false"></exportDialog>
    <deleteDialog v-if="ifDelete"></deleteDialog>

    <importFinish></importFinish>
    <parameterDetail :ifParameter='ifParameter' @cancelParameter = cancelParameter></parameterDetail>
    <issue></issue>
    <warning></warning>

  </div>
</template>

<script>
import NewTask from './dialog/NewTask'
import importDialog from 'components/dialog/importDialog'
import exportDialog from 'components/dialog/exportDialog'
import deleteDialog from 'components/dialog/deleteDialog/deleteDialog'

import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import parameterDetail from './dialog/parameter_detail'
import ImportFinish from './dialog/ImportFinish'
import Issue from './dialog/Issue'
import Warning from './dialog/Warning'
import { User, RequestParams } from "common/entity";

export default {
  name: "schoolInfo",
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    NewTask,
    importDialog,
    exportDialog,
    deleteDialog,

    parameterDetail,
    ImportFinish,
    Issue,
    Warning
  },
  data() {
    return {
      editView: false,
      ifNewTask: false,
      ifImport: false,
      ifExport: false,
      ifDelete: false,
      ifParameter: false,
      // 全选
      ifAllSelect: false,
      searchOption:{
          queryTypes: {
            data: {
              title: null,
              types: {
                任务名称: 1,
                焊接类型: 2,
                接头类型: 3,
                焊接位置: 4,
                母材材料: 5,
                母材间隙: 6,
                母材厚度: 7,
                公差: 8,
              },
              selected: ''
            },
          },
          queryKeys: {
            data: {
              title: null,
              placeholder: '123415',
              value: null
            },
          },
          querySortType: {
            selected: null,
            types: {
              名称倒序: '-name',
              名称正序: 'name'
            }
          },
          times: [],
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
    };
  },
  computed: {
    headButtons() {
      let that = this;
      return [
        {
          name: "任务顺序",
          clickView() {
            // that.editView = true;
          }
        },
        {
          name: "新建任务",
          clickView() {
            that.ifNewTask = true;
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
    this.laodTasks()
  },
  methods: {
    async laodTasks(pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.practical.task.search(
        new RequestParams()
          .addAttribute("pageSize", pageSize)
          .addAttribute("pageIndex", pageIndex)
      );
      this.tasks.datas = response.dataItems;
      this.tasks.totalPage = response.totalPage
    },
    select(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
      this.ifAllSelect = !this.ifAllSelect;
      // this.informationList.map(o => this.ifAllSelect === true ? o.ifSelect = true : o.ifSelect = false)
    },
    formatServeUrl(row) {
      return (
        <a href={row.url} target="_blank">
          {row.url}
        </a>
      );
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/common.styl';
</style>

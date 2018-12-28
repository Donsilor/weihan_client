<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="searchOption"></search-bar>
    <operate-bar :deleteBtn="true" @deleteSelected="deleteSelected"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="tasks.datas" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="竞赛编号" prop="number"></el-table-column>
        <el-table-column label="竞赛名称" prop="name"></el-table-column>
        <el-table-column label="竞赛时长" prop="time"></el-table-column>
        <el-table-column label="焊接类型" prop="weldsTypes"></el-table-column>
        <el-table-column label="接头类型" prop="spliceType"></el-table-column>
        <el-table-column label="焊接位置" prop="weldsPosition"></el-table-column>
        <el-table-column label="母材类型" prop="parentMetal"></el-table-column>
        <el-table-column label="母材厚度" prop="thickness"></el-table-column>
        <el-table-column label="公差" prop="tolerance"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <i class="iconfont">&#xe600;</i>
            <i class="iconfont">&#xe631;</i>
          </template>
        </el-table-column>
      </el-table>
      <paging
      :loadDatas="laodTasks"
      :totalPage="tasks.totalPage"
      :pageSize="tasks.pageSize"
      :pageIndex="tasks.pageIndex"></paging>
    </div>
    <import-dialog :ifShowImport="ifShowImport" @close="closeImport"></import-dialog>
    <delete-dialog :ifDelete="ifShowDelete" @cancelDelete="cancelDelete"></delete-dialog>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import ImportDialog from './dialog/importDialog'
import DeleteDialog from 'components/dialog/deleteDialog/deleteDialog'
import { User, RequestParams } from "common/entity";

export default {
  name: 'ContestManage',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    ImportDialog,
    DeleteDialog
  },
  data () {
    return {
      ifShowImport: false,
      ifShowDelete: false,
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
    };
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
  mounted() {
    this.laodTasks();
  },
  methods: {
    async laodTasks(pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.practical.task.search(
        new RequestParams()
          .addAttribute("pageSize", pageSize)
          .addAttribute("pageIndex", pageIndex)
      );
      this.tasks.datas = response.dataItems;
      this.tasks.totalPage = response.totalPage;
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    showImportPopup (e) {
      console.log(e)
      this.ifShowImport = e
    },
    closeImport (e) {
      console.log(e)
      this.ifShowImport = e
    },
    cancelDelete (e) {
      console.log(e)
      this.ifShowDelete = e
    },
    deleteSelected (e) {
      console.log(e)
      this.ifShowDelete = e
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>

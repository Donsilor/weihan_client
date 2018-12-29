<template>
  <div>
    <top-bar :option="headButtons"></top-bar>        
    <search-bar :option="searchOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table
        ref="multipleTable"
        :data="tasks.list"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="视频编号" prop="number"></el-table-column>
        <el-table-column label="视频名称" prop="videoName"></el-table-column>
        <el-table-column label="创建者" prop="creator"></el-table-column>
        <el-table-column label="课程名称" prop="courseName"></el-table-column>
        <el-table-column label="课程类型" prop="courseType"></el-table-column>
        <el-table-column label="大纲类型" prop="outlineType"></el-table-column>
        <el-table-column label="3级分类" prop="classify"></el-table-column>
        <el-table-column label="文件大小 /M" prop="fileSize"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="iconfont">&#xe617;</i>
          </template>
        </el-table-column>
      </el-table>
      <paging
        :loadDatas="laodTasks"
        :totalPage="tasks.totalPage"
        :pageSize="tasks.pageSize"
        :pageIndex="tasks.pageIndex"
      ></paging>
    </div>

    <exportDialog v-if="ifExport" :close="e=>ifExport = false"></exportDialog>
    <deleteDialog v-if="ifDelete"></deleteDialog>

  </div>
</template>

<script>
import TopBar from "components/mainTopBar/MainTopBar";
import SearchBar from "components/searchBar/SearchBar";
import OperateBar from "components/operateBar/OperateBar";
import Paging from "components/paging/Paging";
import { User, RequestParams } from "common/entity";
import { array2Descendants } from "common/utils";
import exportDialog from 'components/dialog/exportDialog'
import deleteDialog from 'components/dialog/deleteDialog/deleteDialog'

export default {
  name: "VideoDatabase",
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    exportDialog,
    deleteDialog
  },
  data() {
    return {
      ifExport: false,
      ifDelete: false,
      searchOption: {
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
              公差: 8
            },
            selected: ""
          }
        },
        queryKeys: {
          data: {
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
    };
  },
  computed: {
    headButtons() {
      let that = this;
      return [
        {
          name: "管理视频分类",
          clickView() {
            that.editView = true;
          }
        },
        {
          name: "上传视频",
          clickView() {
            that.editView = true;
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
  mounted() {
    this.laodTasks();
  },
  methods: {
    async laodTasks(pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.coursewares.search(
        new RequestParams()
          .addAttribute("pageSize", pageSize)
          .addAttribute("pageIndex", pageIndex)
          .addAttribute("query", {
            $and: [{ storageId: { $regex: ".mp4", $options: "$ig" } }]
          })
      );
      this.tasks.datas = array2Descendants(response.dataItems);
      this.tasks.list = response.dataItems;
      this.tasks.totalPage = response.totalPage;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>

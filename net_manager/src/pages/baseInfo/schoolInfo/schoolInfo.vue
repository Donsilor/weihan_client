<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <operate-bar :deleteBtn="true" @deleteSelected="deleteSchool"></operate-bar>
    <div class="tableWrap">
      <el-table
        ref="multipleTable"
        :data="schools.datas"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="学校编码" prop="code" class="number"></el-table-column>
        <el-table-column label="学校名称" prop="name" class="name"></el-table-column>
        <el-table-column label="服务器网址" prop="url" class="url" :formatter="formatServeUrl"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="modification icon iconfont icon-bianji" @click="editSchool"></i>
            <i class="delete icon iconfont icon-shanchu1" @click="deleteSchool"></i>
            <i class="examine icon iconfont icon-chakan"></i>
          </template>
        </el-table-column>
      </el-table>
      <paging
      :loadDatas="loadSchools"
      :totalPage="schools.totalPage"
      :pageSize="schools.pageSize"
      :pageIndex="schools.pageIndex"></paging>
    </div>
    <new-school :ifNewSchool="ifNewSchool" @cancelNew="cancelNewSchool"></new-school>
    <edit-school :ifEditSchool="ifEditSchool" @cancelEdit="cancelEditSchool"></edit-school>
    <delete-dialog :ifDelete="ifDeleteSchool" @cancelDelete="cancelDelete"></delete-dialog>
  </div>
</template>

<script>
import TopBar from "components/mainTopBar/MainTopBar";
import SearchBar from "components/searchBar/SearchBar";
import OperateBar from "components/operateBar/OperateBar";
import Paging from "components/paging/Paging";
import NewSchool from './dialog/newSchool'
import EditSchool from './dialog/editSchool'
import DeleteDialog from 'components/dialog/deleteDialog/deleteDialog'

import { User, RequestParams } from "common/entity";

export default {
  name: 'SchoolInfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    NewSchool,
    EditSchool,
    DeleteDialog
  },
  data() {
    return {
      ifNewSchool: false,
      ifEditSchool: false,
      ifDeleteSchool: false,
      // 全选
      ifAllSelect: false,
      isShoweditor:false,
      queryOption: {
        queryTypes: {
          data: {
            title: "data",
            types: {
              金属材料焊接1: 1,
              金属材料焊接2: 2,
              金属材料焊接3: 3,
              金属材料焊接4: 4
            },
            selected: ""
          }
        },
        queryKeys: {
          data: {
            title: "data",
            placeholder: "123415",
            value: null
          }
        },
        querySortType:{
          selected:null,
          types:{
            排序1:"-name",
            排序2:"name"
          }
        },
        times:false,
        videoDatabaseModule: false,
        searchModule: true,
        timeQuantumSearchModule: false,
        inquire: false,
        inquireName: false
      },
      schools: {
        pageIndex: 1,
        pageSize: 10,
        totalPage:10,
        datas:new Array(10).fill({
          ifSelect: false,
          code: '6801000003309',
          name: '北京大学',
          url: 'http://baidu.com',
      }),
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
    this.loadSchools();
  },
  methods: {
    async loadSchools(pageIndex=1, pageSize=10) {
      let response = await this.$api.service.schools.search(
        new RequestParams()
          .addAttribute("pageIndex", pageIndex)
          .addAttribute("pageSize", pageSize)
      );
      this.schools.pageSize = response.pageSize;
      this.schools.totalPage = response.totalPage;
      this.schools.datas = response.dataItems;
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
    },
    formatServeUrl(row) {
      return (
        <a href={row.url} target="_blank">
          {row.url}
        </a>
      );
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    editSchool () {
      this.ifEditSchool = true
    },
    deleteSchool () {
      this.ifDeleteSchool = true
    },
    hiddenShow(){
        let that = this;
        that.isShoweditor = false
      },
    newSchool (e) {
      this.ifNewSchool = e
    },
    cancelNewSchool (e) {
      this.ifNewSchool = e
    },
    cancelEditSchool (e) {
      this.ifEditSchool = e
    },
    cancelDelete (e) {
      this.ifDeleteSchool = e
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/common.styl';
</style>

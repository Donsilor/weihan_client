<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table
        ref="multipleTable"
        :data="majors.list"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="专业编号" prop="code" class="number"></el-table-column>
        <el-table-column label="专业名称" prop="name" class="name"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="modification icon iconfont icon-bianji"></i>
            <i class="delete icon iconfont icon-shanchu1"></i>
            <i class="examine icon iconfont icon-chakan"></i>
          </template>
        </el-table-column>
      </el-table>
      <paging
        :loadDatas="load"
        :totalPage="majors.totalPage"
        :pageSize="majors.pageSize"
        :pageIndex="majors.pageIndex"></paging>
      <new-profession v-if="editView" :close="e=>editView = false" :submit="edit" :option="majors.data"></new-profession>
    </div>
  </div>
</template>

<script>
import TopBar from "components/mainTopBar/MainTopBar";
import SearchBar from "components/searchBar/SearchBar";
import OperateBar from "components/operateBar/OperateBar";
import Paging from "components/paging/Paging";
import NewProfession from "./dialog/newProfession";
import { User, RequestParams, SystemParameter } from 'common/entity'

export default {
  name: "ProfessionalInfo",
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    NewProfession
  },
  data() {
    return {
      editView: false,
      // 全选
      ifAllSelect: false,
      queryOption: {
        queryTypes: {
          asd1: {
            title: "asd1",
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
          asd1: {
            title: "asd1",
            placeholder: "123415",
            value: null
          }
        },
        querySortType: {
          selected: null,
          types: {
            排序1: "-name",
            排序2: "name"
          }
        },
        times: false,
        videoDatabaseModule: false,
        searchModule: true,
        timeQuantumSearchModule: false,
        inquire: false,
        inquireName: false
      },
      majors:{
        pageIndex: 1,
        pageSize: 10,
        totalPage: 10,
        data: {
          name: 'asd'
        },
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
          name: "新增专业",
          clickView() {
            that.majors.data = {};
            that.editView = true;
          }
        }
      ];
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    edit(){
      this.$api.service.professions.upset(
        new RequestParams()
          .addAttribute('name', this.majors.data.name)
          .addAttribute('code', SystemParameter.CODE)
      )
      .then(response=>{
        this.load();
        this.editView = false
      })
    },
    async load (pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.professions.search(
        new RequestParams()
          .addAttribute('pageIndex', pageIndex)
          .addAttribute('pageSize', pageSize)
      )
      this.majors.totalPage = response.totalPage
      this.majors.list = response.dataItems
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
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/common.styl';
</style>

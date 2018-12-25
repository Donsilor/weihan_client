<template>
  <div>
    <top-bar :newSchool="true"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
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
            <i class="modification icon iconfont icon-bianji"></i>
            <i class="delete icon iconfont icon-shanchu1"></i>
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
  </div>
</template>

<script>
import TopBar from "components/mainTopBar/MainTopBar";
import SearchBar from "components/searchBar/SearchBar";
import OperateBar from "components/operateBar/OperateBar";
import Paging from "components/paging/Paging";
import { User, RequestParams } from "common/entity";

export default {
  name: 'SchoolInfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data() {
    return {
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
          },
          asd2: {
            title: "asd2",
            types: {
              金属材料焊接1: 1,
              金属材料焊接2: 2,
              金属材料焊接3: 3,
              金属材料焊接4: 4
            },
            selected: ""
          },
          asd3: {
            title: "asd3",
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
          },
          asd2: {
            title: "asd2",
            placeholder: "123415",
            value: null
          },
          asd3: {
            title: "asd3",
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
        times: [],
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
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/common.styl';
</style>

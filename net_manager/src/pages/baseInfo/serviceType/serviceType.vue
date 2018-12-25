<template>
  <div>
    <top-bar></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="teachTypes.datas" style="width: 100%" class="list_content" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="教学类型编码" prop="code" class="number"></el-table-column>
        <el-table-column label="教学类型" prop="name" class="name"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="modification icon iconfont icon-bianji"></i>
            <i class="delete icon iconfont icon-shanchu1"></i>
            <i class="examine icon iconfont icon-chakan"></i>
          </template>
        </el-table-column>
      </el-table>
      <paging 
      :loadDatas="loadTeachTypes"
      :totalPage="teachTypes.totalPage"
      :pageSize="teachTypes.pageSize"
      :pageIndex="teachTypes.pageIndex"></paging>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import { User, RequestParams } from "common/entity";

export default {
  name: '',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      teachTypes:{
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
    }
  },
  mounted(){
    this.loadTeachTypes();
  },
  methods: {
    async loadTeachTypes(pageIndex=1, pageSize=10) {
      let response = await this.$api.service.teachTypes.search(
        new RequestParams()
          .addAttribute("pageIndex", pageIndex)
          .addAttribute("pageSize", pageSize)
      );
      this.teachTypes.pageSize = response.pageSize;
      this.teachTypes.totalPage = response.totalPage;
      this.teachTypes.datas = response.dataItems;
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

<template>
  <div>
    <top-bar :newSever="true"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="teachTypes.datas" style="width: 100%" class="list_content" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="教学类型编码" prop="code" class="number"></el-table-column>
        <el-table-column label="教学类型" prop="name" class="name"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="modification icon iconfont icon-bianji" @click="editor()"></i>
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
    <editorservice @hidden="hiddenShow" v-show="isShoweditor"></editorservice>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import { User, RequestParams } from "common/entity";
import Addservive from './components/addservice/addservice'
import Editorservice from './components/deitorservicetype/editorservice'

export default {
  name: '',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    Addservive,
    Editorservice
  },
  data () {
    return {
      isShoweditor:false,
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
      teachTypes:{
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
    },
    editor(){
      this.isShoweditor=true
    },
    hiddenShow(){
        let that = this;
        that.isShoweditor = false
      }

  }
}

</script>

<style lang="stylus" scoped>

</style>

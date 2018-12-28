<template>
  <div>
    <top-bar :option="headButtons"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <operate-bar :deleteBtn="true" @deleteSelected="deleteService"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="teachTypes.datas" style="width: 100%" class="list_content"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="教学类型编码" prop="code" class="number"></el-table-column>
        <el-table-column label="教学类型" prop="name" class="name"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <i class="modification icon iconfont icon-bianji" @click="editService(true)"></i>
            <i class="delete icon iconfont icon-shanchu1" @click="deleteService"></i>
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
    <add-service :ifAddService="ifAddService" @cancelNew="cancelAddService"></add-service>
    <edit-service :ifEditService="ifEditService" @cancelEdit="cancelEditService"></edit-service>
    <delete-dialog :ifDelete="ifDeleteService" @cancelDelete="cancelDelete"></delete-dialog>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import { User, RequestParams } from 'common/entity'
import AddService from './dialog/addService'
import EditService from './dialog/editService'
import DeleteDialog from 'components/dialog/deleteDialog/deleteDialog'

export default {
  name: '',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    AddService,
    EditService,
    DeleteDialog
  },
  data () {
    return {
      ifAddService: false,
      ifEditService: false,
      ifDeleteService: false,
      queryOption: {
        queryTypes: {
          asd1: {
            title: 'asd1',
            types: {
              金属材料焊接1: 1,
              金属材料焊接2: 2,
              金属材料焊接3: 3,
              金属材料焊接4: 4
            },
            selected: ''
          }
        },
        queryKeys: {
          asd1: {
            title: 'asd1',
            placeholder: '123415',
            value: null
          }
        },
        querySortType: {
          selected: null,
          types: {
            排序1: '-name',
            排序2: 'name'
          }
        },
        times: false,
        videoDatabaseModule: false,
        searchModule: true,
        timeQuantumSearchModule: false,
        inquire: false,
        inquireName: false
      },
      teachTypes: {
        pageIndex: 1,
        pageSize: 10,
        totalPage: 10,
        datas: new Array(10).fill({
          ifSelect: false,
          code: '6801000003309',
          name: '北京大学',
          url: 'http://baidu.com'
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
  mounted () {
    this.loadTeachTypes()
  },
  methods: {
    async loadTeachTypes (pageIndex = 1, pageSize = 10) {
      let response = await this.$api.service.teachTypes.search(
        new RequestParams()
          .addAttribute('pageIndex', pageIndex)
          .addAttribute('pageSize', pageSize)
      )
      this.teachTypes.pageSize = response.pageSize
      this.teachTypes.totalPage = response.totalPage
      this.teachTypes.datas = response.dataItems
    },

    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    newServeType (e) {
      this.ifAddService = e
    },
    cancelAddService (e) {
      this.ifAddService = e
    },
    editService (e) {
      this.ifEditService = e
    },
    cancelEditService (e) {
      this.ifEditService = e
    },
    deleteService (e) {
      this.ifDeleteService = e
    },
    cancelDelete (e) {
      this.ifDeleteService = e
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>

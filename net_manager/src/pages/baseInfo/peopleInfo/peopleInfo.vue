<template>
  <div>
    <top-bar :newSchool="true"></top-bar>
    <search-bar :option="queryOption"></search-bar>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="管理员" name="first">
            
            <div class="people-border">
              <operate-bar :deleteBtn="true"></operate-bar>
        <div class="tableWrap">
        <el-table ref="multipleTable" :data="admininformationList" style="width: 100%"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="用户编号" prop="number" class="number"></el-table-column>
            <el-table-column label="用户名" prop="username" class="username"></el-table-column>
            <el-table-column label="真实姓名" prop="realusername" class="realusername"></el-table-column>
            <el-table-column label="状态" prop="userstatus" class="status"></el-table-column>
            <el-table-column label="操作" width="200">
            <template slot-scope="scope">
                <i class="modification icon iconfont icon-bianji"></i>
                <i class="delete icon iconfont icon-shanchu1" @click="deletewindow()"></i>
                <i class="examine icon iconfont icon-chakan"></i>
            </template>
            </el-table-column>
        </el-table>
        <paging></paging>
        </div>
    </div>    
        </el-tab-pane>
        <el-tab-pane label="老师" name="second">
            <div class="people-border">
              <operate-bar :deleteBtn="true"></operate-bar>
        <div class="tableWrap">
        <el-table ref="multipleTable" :data="teachinformationList" style="width: 100%"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="用户编号" prop="number" class="number"></el-table-column>
            <el-table-column label="用户名" prop="username" class="username"></el-table-column>
            <el-table-column label="真实姓名" prop="realusername" class="realusername"></el-table-column>
            <el-table-column label="状态" prop="userstatus" class="status"></el-table-column>
            <el-table-column label="操作" width="200">
            <template slot-scope="scope">
                <i class="modification icon iconfont icon-bianji"></i>
                <i class="delete icon iconfont icon-shanchu1" @click="deletewindow()"></i>
                <i class="examine icon iconfont icon-chakan"></i>
            </template>
            </el-table-column>
        </el-table>
        <paging></paging>
        </div>
    </div>    
        </el-tab-pane>
        <el-tab-pane label="学生" name="third">
            <div class="people-border">
              <operate-bar :deleteBtn="true"></operate-bar>
        <div class="tableWrap">
        <el-table ref="multipleTable" :data="studentinformationList" style="width: 100%"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="用户编号" prop="number" class="number"></el-table-column>
            <el-table-column label="用户名" prop="username" class="username"></el-table-column>
            <el-table-column label="真实姓名" prop="realusername" class="realusername"></el-table-column>
            <el-table-column label="状态" prop="userstatus" class="status"></el-table-column>
            <el-table-column label="操作" width="200">
            <template slot-scope="scope">
                <i class="modification icon iconfont icon-bianji"></i>
                <i class="delete icon iconfont icon-shanchu1"></i>
                <i class="examine icon iconfont icon-chakan"></i>
            </template>
            </el-table-column>
        </el-table>
        <paging></paging>
        </div>
    </div> 
        </el-tab-pane>
    </el-tabs>
   <superadduser :supereditorModule='false'></superadduser>
   <adminadduser :admineditorModule='false'></adminadduser>
   <teachadduser :teacheditorModule='false'></teachadduser>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'
import Superadduser from './components/add/superadminadd'
import Adminadduser from './components/add/adminadd'
import Teachadduser from './components/add/teachadd'

export default {
  name: 'peopleInfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging,
    Superadduser,
    Adminadduser,
    Teachadduser
  },
  data () {
    return {
      // 全选
      ifAllSelect: false,
      activeName: 'first',
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
      admininformationList: new Array(10).fill({
          ifSelect: false,
          number: '6801000003309',
          username: '我是管理员',
          realusername: '管理员',
          userstatus:'在线'
      }),
      teachinformationList: new Array(10).fill({
          ifSelect: false,
          number: '6801000003309',
          username: '我是老师',
          realusername: '老师',
          userstatus:'看着你'
      }),
      studentinformationList: new Array(10).fill({
          ifSelect: false,
          number: '6801000003309',
          username: '我是学生',
          realusername: '学生',
          userstatus:'写作业'
      })
      
    }
  },
  methods: {
    select (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
      this.ifAllSelect = !this.ifAllSelect
    },
    formatServeUrl (row) {
      return <a href={row.url} target="_blank">{row.url}</a>
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }

}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
</style>
<style>
.el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0;
    padding: 0 3%
}
</style>

<template>
  <div class="essential">
      <div class="title">
          <span class="fl">基本信息>学校管理</span>
          <span class="fr">+新建学校</span>
      </div>
      <div class="search_box">
          <select name="" class="filtrate fl">
              <option value="">筛选条件</option>
              <option value="">用户条件</option>
              <option value="">用户ID</option>
              <option value="">用户名</option>
              <option value="">昵称</option>
              <option value="">真实姓名</option>
          </select>
          <div class="search fl">
              <input type="text" placeholder="项目名称和编号">
              <i class="icon iconfont icon-fangdajing"></i>
              <button>搜索</button>
          </div>
          <select class="sort fr">
            <option value="">默认排序</option>
            <option value="">排序1</option>
            <option value="">排序2</option>
          </select>
      </div>
      <div class="allSelect clf">
          <i class="icon iconfont icon-iLinkapp-houqitubiaoyouxiugai fl" :class="{'active': ifAllSelect}" @click="select()"></i>
          <span class="fl" @click="ifAllSelect = !ifAllSelect">全选</span>
          <i class="fl icon iconfont icon-shanchu1"></i>
      </div>
      <div class="content clf">
          <div class="list_title">
              <span class="number">教学类型编码</span>
              <span class="name">教学类型</span>
              <span class="operation">操作</span>
          </div>
          <ul class="list_content">
              <li v-for="(item,index) in informationList" :value="index" :key="index">
                  <i class="select icon iconfont icon-iLinkapp-houqitubiaoyouxiugai" :class="{'active': item.ifSelect}" @click="item.ifSelect = !item.ifSelect"></i>
                  <span class="number">{{item.number}}</span>
                  <span class="name">{{item.type}}</span>
                  <i class="modification icon iconfont icon-bianji"></i>
                  <i class="delete icon iconfont icon-shanchu1"></i>
                  <i class="examine icon iconfont icon-chakan"></i>
              </li>
          </ul>
          <div class="page">
            <button class="fr">跳转</button>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            class="fr">
            </el-pagination>
          </div>
      </div>
  </div>
</template>

<script>
// import htop from "../components/h_top";
export default {
  name: "service_category",
    data() {
        return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            // 全选 
            ifAllSelect: false,
            informationList:[
                {
                    ifSelect: false,
                    number: '6801000003309',
                    type: '焊接'
                },
                {
                    ifSelect: false,
                    number: '6801000003310',
                    type: '机器人'
                },
                {
                    ifSelect: false,
                    number: '6801000003311',
                    type: '喷涂'
                },
                {
                    ifSelect: false,
                    number: '6801000003312',
                    type: '焊接'
                },
                {
                    ifSelect: false,
                    number: '6801000003313',
                    type: '机器人'
                },
            ]
        };
    },
    methods: {
        handleSizeChange(val) {
             console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
             console.log(`当前页: ${val}`);
        },
        select() {
            this.ifAllSelect = !this.ifAllSelect;
            this.informationList.map(o => this.ifAllSelect == true ? o.ifSelect = true : o.ifSelect = false)
        }
    },
    components: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/basictable';
@import '../../assets/css/schoolinf';
.list_content span.name{
    margin-right: 36%!important;
}
.list_title .operation{
    margin-left: 40%!important;
}
</style>

<template>
  <div class="paging clf">
    <button class="fr goto">跳转</button>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="page_size"
      :current-page="page_index"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total_page"
      class="fr"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Paging",
  data() {
    return {
      skip:1,
      page_index: 1,
      total_page:100,
      page_size: 10,
    };
  },
  created(){
    this.page_index = this.pageIndex;
    this.total_page = this.totalPage;
    this.page_size = this.pageSize;
  },
  props: {
    pageIndex: {
      type: Number,
      default: 1
    },
    totalPage:{
      type: Number,
      default: 100
    },
    pageSize: {
      type: Number,
      default: 10
    },
    loadDatas: {
      type: Function,
      default: (i, s) => console.log(i, s)
    }
  },
  methods: {
    handleSizeChange(val) {
      this.page_size = val
    },
    handleCurrentChange(val) {
      this.loadDatas(this.page_index = val, this.page_size);
    }
  }
};
</script>

<style lang="stylus" scoped>
.paging {
  margin-top: 50px;
}

.goto {
  margin-left: 1%;
  width: 56px;
  height: 30px;
  border-radius: 5px;
  background-color: #38a4de;
  color: #fff;
  border: none;
  font-size: 14px;
}
</style>

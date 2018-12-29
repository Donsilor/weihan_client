<template>
  <div class="paging clf">
    <button class="fr goto">跳转</button>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      :current-page="pageIndex"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
      class="fr"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Paging",
  data() {
    return {
    };
  },
  props: {
    pageIndex: {
      type: Number,
      default: 1
    },
    totalCount:{
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

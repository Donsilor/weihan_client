<template>
  <div class="paging clf">
    <button class="fr goto">跳转</button>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      class="fr">
    </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'Paging',
  data () {
    return {}
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }

  }
}

</script>

<style lang="stylus" scoped>

.paging
  margin-top 50px

.goto
  margin-left 1%
  width 56px
  height 30px
  border-radius 5px
  background-color #38a4de
  color #fff
  border none
  font-size 14px

</style>

<template>
  <div class="maskLayer">
    <div class="add clf">
      <div class="window-top">
        <span class="clss fl">添加组别人员</span>
        <span class="clss fr" @click="close()"><i class="iconfont">&#xe607;</i></span>
      </div>
      <div class="group-content clf">
        <div class="lcontent clf">
          <div class="search-box clf">
            <div class="clf fl">
              <el-input
                placeholder="项目名称或编号"
                v-model="filterText">
              </el-input>
            </div>
            <input type="button" class="search-but fr" value="搜索" @click="issearchfun()">
          </div>
          <div class="tree-box clf">
            <el-tree
              class="filter-tree"
              show-checkbox
              check-strictly='true'
              :data="data2"
              node-key="id"
              :props="defaultProps"
              @check="getCheckedNodes()"
              default-expand-all
              :filter-node-method="filterNode"
              ref="tree">
            </el-tree>
          </div>
        </div>
        <div class="rcontent clf">
          <div class="aready-choose clf">
            <p>已选了{{this.aalist.length}}个学生</p>
            <ul v-for="(item,index) in this.aalist" :key="index">
              <li>{{item.label}}<i class="iconfont" @click="plotClick(index)">&#xe60b;</i></li>
            </ul>
          </div>
          <div class="but">
            <input type="button" class="ensure" value="确定">
            <input type="button" class="cancel" value="取消" @click="close()">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'groupadd',
  issearch: false,
  filterText: '',
  props: {
    close: {
      type: Function,
      default: e => console.log(e)
    },
    submit: {
      type: Function,
      default: e => console.log(e)
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    issearchfun () {
      this.$refs.tree.filter(this.filterText)
    },
    getCheckedNodes () {
      this.aalist = this.$refs.tree.getCheckedNodes()
      this.aaa = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys())
      console.log(this.aaa)

    },
    plotClick (id) {
      console.log(id)

      this.aalist.splice(id, 1)
      this.aaa.splice(
        this.aaa.findIndex(
          item => item === this.id
        )
      )
      console.log(this.aalist)
      console.log(this.aaa)
      this.$refs.tree.setCheckedKeys(this.aaa)
    },
    closeMyself () {
      this.$emit('on-close')
      //如果需要传参的话，可以在"on-close"后面再加参数，然后在父组件的函数里接收就可以了。
    }
  },
  data () {
    return {
      filterText: '',
      aalist: [],
      aaa: [],
      chooselist: [
        {
          name: '李一'
        },
        {
          name: '王二'
        },
        {
          name: '陈三'
        }

      ],
      data2: [
        {
          id: 1,
          label: '北京大学',
          disabled: true,
          children: [{
            id: 2,
            label: '焊接专业',
            disabled: true,
            children: [{
              id: 3,
              label: '18届焊接1801班',
              disabled: true,
              children: [{
                id: 5,
                label: '陈一'
              },
                {
                  id: 6,
                  label: '王二'
                }]
            }, {
              id: 4,
              label: '18届焊接1802班',
              disabled: true,
              children: [
                {
                  id: 7,
                  label: '李三',
                  checked: true
                }]
            }]
          }]
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    this.getCheckedNodes()
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
.add
  width 770px
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)

.group-content
  background-color #ffffff
  height 450px

.group-content
  .lcontent
    border-right 1px solid #cccccc

.group-content
  .rcontent
    padding-left 20px
    position relative

.group-content
  > div
    width 50%
    height 100%
    float left
    padding-top 20px

.rcontent
  div
    width 100%

.rcontent
  div
    width 100%


.rcontent
  div
    p
      width 100%
      font-size 18px
      padding-bottom 30px

.rcontent
  div
    ul
      width 100%

.rcontent
  div
    ul
      li
        width 100%
        font-size 14px
        line-height 26px

.but
  position absolute
  bottom 30px
  right 0
  padding-left 100px

.rcontent
  .iconfont
    margin-left 80px
    font-size 14px
    color #999
    cursor pointer

.search-box
  width 100%
  padding 0 20px
  padding-bottom 40px

.search-box
  > div
    width 70%

.search-box
  input
    width 25%
    height 40px
    line-height 40px
    text-align center
    background #ffffff
    color #333
    font-size 14px
    border 1px solid #cccccc

.tree-box
  padding-left 50px
  width 100%


</style>

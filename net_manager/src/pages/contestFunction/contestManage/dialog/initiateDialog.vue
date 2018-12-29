<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">发起</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap clf">
          <div class="wrapl clf">
            <div class="search-box clf">
              <div class="clf fl">
                <!-- <el-input
                        placeholder="项目名称或编号"
                        v-model="filterText">
                        </el-input> -->
                <input type="text" placeholder="项目名称和编号" v-model="filterText">
              </div>
              <!-- <button class="search-box fl" value="搜索" @click="issearchfun()">搜索</button> -->
            </div>
            <div class="studentlist">
              <el-tree
                :data="studentlists"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                :filter-node-method="filterNode"
                :props="defaultProps">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>
                        <i class="iconfont"></i>{{ node.label }}
                    </span>
                 </span>
              </el-tree>
            </div>
          </div>

          <div class="wrapr clf">
              <div class="wrapr-top clf">
                  <a href="javascript:;" class="fl" @click="add()">添加组</a>
                  <a href="javascript:;" class="fr">清空</a>
              </div>
              <div class="group-box" v-for="(item,index) in this.groups" :key="index">
                  <div class="group">
                      <p class="group-title">竞赛组：{{item.groupcode}}</p>
                      <div class="clf">
                          <span>A方：</span>
                          <input type="text">
                      </div>
                      <div class="clf">
                          <span>B方：</span>
                          <input type="text">
                      </div>
                  </div>
              </div>
              <div class="btns">
                  <a href="javascript:;">开始竞赛</a>
                  <a href="javascript:;" class="cancel">取消</a>
              </div>
            </div>
            <div class="btns">
              <a href="javascript:">开始竞赛</a>
              <a href="javascript:" class="cancel">取消</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'initiateDialog',
  props: {
    close: {
      type: Function,
      default: e => console.log(e)
    }
  },
  data () {
    return {
      filterText: '',
      groups: [
        {
          groupcode: '1'
        }
      ],
      studentlists: [
        {
          id: 1,
          label: '焊机01（张成义）'
        },
        {
          id: 2,
          label: '焊机02（张三）'
        },
        {
          id: 3,
          label: '焊机03（王四）'
        },
        {
          id: 4,
          label: '焊机04（李一）'
        },
        {
          id: 5,
          label: '焊机02（张五）'
        },
        {
          id: 6,
          label: '焊机03（王六）'
        },
        {
          id: 7,
          label: '焊机04（李七）'
        }

      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
    add () {
      console.log(this.groups)
      this.groups.push({ groupcode: this.groups.length + 1 })
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  }

}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.centerLayer .popup .popupWrap
  padding-top 0 !important
  padding-bottom 0 !important

.popupWrap
  .wrapl
  .wrapr
    width 50%
    height 100%
    padding-top 2rem
    float left

.popupWrap
  .wrapr
    padding-left 1rem
    min-height 30rem
    border-left 2px solid #cccccc
    position relative
    padding-bottom 6rem

.search-box
  width 100%
  padding-bottom 1rem


.search-box
  > div
    width 100%

.search-box
  > div
    input
      height 2.5rem
      line-height 2.5rem
      width 90%
      padding-left .875rem
      border 1px solid #cccccc

.search-box
  button
    width 25%
    height 2.5rem
    line-height 2.5rem
    text-align center
    background #ffffff
    color #333
    font-size .875rem
    border 1px solid #cccccc

.wrapr-top
  a
    display block
    color #35a5de

.btns
  position absolute
  bottom 2rem
  right 2rem

.group-title
  line-height 3rem

.group
  color #666666

.group
  > div
    padding-bottom 1rem

    &:after
      clearfix()

.group
  > div
    input
      width 70%
      height 2.5rem
      line-height 2.5rem
      border 1px solid #cccccc
      padding-left 1rem

</style>

<template>
  <div class="maskLayer" v-if="0">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">导入</span>
          <i class="iconfont fr">&#xe607;</i>
        </div>
        <div class="popupWrap">
            <div class="icon"></div>
            <div class="title">导入完成</div>
            <div class="hint">
                成功导入数据<span>248</span>条，
                导入失败数据<span>24</span>条
            </div>
            <div class="download">
                <a href="#">下载导入失败数据</a>
            </div>
            <div>
                <button>查看导入的数据</button>
                <button>继续导入</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
    }
  },
  props: {
    ifShowExamImport: {
      type: Boolean,
      defalult: true
    }
  }
}

</script>

<style lang="stylus" scoped>

@import "~assets/common.styl"

.centerLayer
    width 40rem

    & div
        text-align center
        margin-top 2rem

    .icon
        height 3rem
        width 3rem
        border-radius 50%
        border 2px solid #666
        margin 0 auto .5rem

    .title
        font-size 1.6rem

    .hint
        font-size 1.2rem
        color #aaa

    .download
        font-size 1.2rem

        & a
            color #34a5dd

    button 
        width 10rem
        height 2.5rem
        border-radius 3px
        background-color #fff
        border 1px solid #34a5dd
        color #34a5dd
        padding-bottom .1rem
        font-size 1.2rem

        &:first-child
            background-color #34a5dd
            border 1px solid #fff
            color #fff
            margin-right .5rem

</style>

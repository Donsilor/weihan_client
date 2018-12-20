<template>
  <div class="header">
    <div class="fl">
      <a href="javascript:"><img :src="logoImg" alt=""></a>
    </div>
    <div class="fr menu">
      <span class="administrator">
        <span class="portrait"><img :src="adminImg" alt=""></span>
        管理员
      </span>
      <a href="javascript:" class="iconfont">&#xe601;</a>
      <a href="javascript:" class="iconfont">&#xe66a;</a>
      <a href="javascript:" class="iconfont">&#xe660;</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonHeader',
  data () {
    return {
      logoImg: require('assets/logo.png'),
      adminImg: require('assets/portrait.png')
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.header
  position relative
  z-index 6
  padding 0 3%
  width 100%
  height 72px
  min-width 920px
  border-bottom 1px solid $borderColor
  background-color #fff

  .fl
    height 72px

    a
      display block

    i, span
      display inline-block
      margin-top 15px
      padding-left 2%
      width 40px
      height 40px
      vertical-align middle

  .menu
    padding 15px 0

    > *
      margin-left 20px

    .administrator
      line-height 40px

      .portrait
        display inline-block
        width 40px
        height 40px
        border-radius 50%
        background-color #3ab1ed
        overflow hidden
        vertical-align top

      img
        width 100%
        height 100%

.iconfont
  font-size: 22px
  line-height: 40px
  color #000

</style>

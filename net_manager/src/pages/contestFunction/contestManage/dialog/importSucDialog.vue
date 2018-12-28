<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">导入</span>
          <i class="iconfont fr" @click="$emit('close', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="topcontent">
            <div class="suclogo">
                <i class="iconfont">&#xe731;</i>
            </div>
            <div class="suctext">
                导入完成
            </div>
            <div class="sunnum">
                成功导入数据{{this.infolist.successfuldata}}条,导入失败数据{{this.infolist.failuredata}}条
            </div>
            <div class="downloadf">
                <a href="javascript:;">下载导入失败数据</a>
            </div>
          </div>
          <div class="btns">
               <a href="javascript:;">查看导入的数据</a>
               <a href="javascript:;" class="cancel">继续导入</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'importsucDialog',
  data () {
    return {

        infolist:{
            successfuldata:'258',
            failuredata:'28'
        }

    }
  },

}

</script>

<style lang="stylus" scoped>

@import "~assets/common.styl"
.suclogo
    width 3rem
    height 3rem
    margin 0 auto
    padding-bottom 0!important
    margin-bottom 2rem

    .iconfont 
        display block
        width 100%
        height 100%
        color #999999!important
        font-size 3rem 
.suctext
    font-size 1rem
    text-align center
.sunnum
    font-size .625rem
    color #999999
    text-align center


.downloadf
    width 100%

    a
        display block
        width 100%
        text-align center
        color #35a5de
.btns
    padding-right 25%    


</style>

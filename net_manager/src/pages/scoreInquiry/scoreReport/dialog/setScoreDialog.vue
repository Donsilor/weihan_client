<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">报表</span>
          <i class="iconfont fr" @click="$emit('close', false)">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="score clf">
              <ul>
                  <li>
                      <span class="rtitle">不及格：</span>
                      <input type="text" placeholder="0">
                      <span>--</span>
                      <input type="text" placeholder="59">
                      <span>分</span>
                  </li>
                  <li>
                      <span class="rtitle">中：</span>
                      <input type="text" placeholder="60">
                      <span>--</span>
                      <input type="text" placeholder="79">
                      <span>分</span>
                  </li>
                  <li>
                      <span class="rtitle">良：</span>
                      <input type="text" placeholder="80">
                      <span>--</span>
                      <input type="text" placeholder="89">
                      <span>分</span>
                  </li>
                  <li>
                      <span class="rtitle">优：</span>
                      <input type="text" placeholder="90">
                      <span>--</span>
                      <input type="text" placeholder="100">
                      <span>分</span>
                  </li>
              </ul>
          </div>  
          <div class="btns">
            <a href="javascript:" class="startImport">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'setScoreDialog',
  data () {
    return {


    }
  },

  props: {
    // ifShowImport: {
    //   type: Boolean,
    //   defalult: false
    // }
  },
  mounted(){
  },
  methods:{
  }


}

</script>

<style lang="stylus" scoped>

@import "~assets/common.styl"
.popupWrap
    min-height 26rem

.score
    width 100%
    padding-top 2rem
    padding-left 1rem
.score
    ul 
        width 100%
        height 100%

        li
            width 100%
            height 2rem 
            font-size 16px
            color #666!important
            margin-bottom 2rem

            input 
                width 6rem!important
                height 100%
                line-height 2rem
                font-size 1rem!important
                border 1px solid #cccccc
                padding-left 1rem
                color #666!important
                float left

            span 
                float left
                width auto!important
                display block
                line-height 2rem
                margin 0 1rem
                text-align center

.rtitle    
    min-width 6rem
    text-align right !important
    margin-right 1.5rem!important
</style>

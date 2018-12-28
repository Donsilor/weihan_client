<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">工艺卡</span>
          <i class="iconfont fr" @click="$emit('close', false)">&#xe607;</i>
        </div>
        <div class="popupWrap clf">
            <div class="list clf">
                <ul class="clf">
                    <li class="ultop clf">
                        <div>
                            <p>接头类型：管管对接</p>
                            <p>厚度：8mm</p>
                        </div>

                        <div>
                        <p>母材金属（等级）：12cyirt</p>
                        <p>填充金属（等级）：Hitysdl0</p>
                        </div>
                    </li>
                    
                    <li class="pic clf">
                        <div>
                            <p class="pictitle">焊接接头图</p>

                        </div>
                        <div>
                            <p class="pictitle">焊道示意图</p>

                        </div>
                    </li>
                    <li class="theight">焊前及焊道清理：书阿里和打磨</li>
                    <li class="theight">焊前检查：目视</li>
                    <li class="theight">焊前中检查：目视</li>
                    <li class="theight">清根方法：/</li>
                    <li class="tbox">
                        <p>焊层</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                    <li class="tbox">
                        <p>焊接位置</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                    <li class="tbox">
                        <p>焊接方法</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                    <li class="tbox">
                        <p>填充金属</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                    <li class="tbox">
                        <p>直径和极性</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                    <li class="tbox">
                        <p>保护气体和焊机</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                    <li class="tbox">
                        <p>电流(ma)</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                    <li class="tbox">
                        <p>气体流量(L/min)</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                    <li class="tbox">
                        <p>焊接速度(mm/min)</p>
                        <p></p>
                        <p></p>
                        <p>143</p>
                    </li>
                    <li class="theight">焊后检查项目：/</li>
                    <li class="bbox">
                        <p>目测</p>
                        <p>124</p>
                        <p>124</p>
                        <p>124</p>
                    </li>
                    <li class="bbox">
                        <p>渗透</p>
                        <p>reweq</p>
                        <p>142</p>
                        <p>1233</p>
                    </li>
                    <li class="bbox">
                        <p>磁粉</p>
                        <p>123</p>
                        <p>企鹅窝群</p>
                        <p>qweq</p>
                    </li>
                    <li class="bot clf">
                        <div>
                            <p>编制：</p>
                            <p>日期：</p>
                        </div>
                        <div>
                            <p>审核：</p>
                            <p>日期：</p>
                        </div>
                        <div>
                            <p>批准：</p>
                            <p>日期：</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'processCardDialog',
  data () {
    return {
      filterText:'',
      groups:[
          {
              groupcode:'1'
          },
      ],
    }
  },
  methods: {

  },
    watch: {

    },

}

</script>

<style lang="stylus" scoped>
.popupWrap
    padding 1rem!important
.list
    width 100%
    height 100%
    border 1px solid #cccccc
.list 
    ul
        width 100%
        height 100%

        li
            width 100%
            border-bottom 1px solid #cccccc
            color #666666

.ultop
    >div
        width 50%
        float left

        p
            line-height 2.5rem
            padding 0 2rem
.ultop
.pic
    >div:first-child
        border-right 1px solid #cccccc

.pic
    >div 
        width 50%
        float left
        height 12rem
        position relative
.pic
    >div 
        p
            width 100%
            text-align center
            color #333333
            font-size 1rem
            position absolute
            top 1rem
            left 0
.tbox
.bbox
    text-align center            
.theight
.tbox
.bbox
    height  2rem
    line-height 2rem 

.theight
    padding-left 1rem
.tbox
    p
        width 20%
        height 100%
        float left
        border-left 1px solid #cccccc
.tbox
    p:first-child
        text-align left!important
        width 40%!important
        border-left none!important
        padding-left 1rem
.bbox
    p
        width 25%
        height 100%
        float left
        border-left 1px solid #cccccc
.tbox
    p:first-child
        border-left none!important

.bot
    >div 
        width calc(100% / 3)
        border-left 1px solid #cccccc
        float left
.bot
    >div:first-child
        border-left none!important

.bot
    >div 
        p 
            width 100%
            padding 0 2rem
            line-height 3rem       
</style>

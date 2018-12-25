<template>
  <div class="maskLayer" v-if="ifParameter">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">参数明细</span>
          <i class="iconfont fr">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <ul>
            <li>
              <div>考试名称：</div>
              <div>{{parameterList.name}}</div>
            </li>
            <li>
              <div>有效时段：</div>
              <div>{{parameterList.time}}</div>        
            </li>
            <li>
              <div>焊接类型：</div>
              <div>{{parameterList.weld_type}}</div>              
            </li>
            <li>
              <div>接头类型：</div>
              <div>{{parameterList.splice_type}}</div>             
            </li>
            <li>
              <div>焊接位置：</div>
              <div>{{parameterList.weld_location}}</div>             
            </li>
            <li>
              <div>母材材料：</div>
              <div>{{parameterList.base_type}}</div>              
            </li>
            <li>
              <div>母材厚度：</div>
              <div>{{parameterList.base_interval}}</div>              
            </li>
            <li>
              <div>母材间隙：</div>
              <div>{{parameterList.base_thickness}}</div> 
            </li>
            <li>
              <div>电压：</div>
              <div>{{parameterList.voltage}}</div> 
            </li>
            <li>
              <div>焊丝/焊条类型：</div>
              <div>{{parameterList.welding_stick_type}}</div> 
            </li>
            <li>
              <div>焊丝/焊条直径：</div>
              <div>{{parameterList.welding_stick_direct}}</div> 
            </li>
            <li>
              <div>公差：</div>
              <div>{{parameterList.tolerance}}</div> 
            </li>
            <li>
              <div>训练次数：</div>
              <div>{{parameterList.drill_time}}</div> 
            </li>
          </ul>
          <div class="btns">
            <a href="javascript:">编辑</a>
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
        // 是否显示弹窗
        parameterList: {
            name: '实操1',
            time: '2018/11/11 08:00:00-2018/11/11 10:00:00',
            weld_type: 'SMAW',
            splice_type: '平板对接',
            weld_location: '平焊',
            base_type: '不锈钢',
            base_interval: '3mm',
            base_thickness: '1mm',
            voltage: '220V',
            welding_stick_type: '内容',
            welding_stick_direct: '5mm',
            tolerance: '2%',
            drill_time: '1次'
        }
    }
  },
  props: {
    ifParameter: {
        type: Boolean,
        default: false
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
@import "~assets/new_exam.styl"

.popupWrap li
    div:first-child
        width 35%

    div:last-child
        width 60%
        padding-left 6px
</style>

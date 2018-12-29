<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建竞赛</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap clf">
          <div class="topcontent">
            <div class="schoolname clf">
              <span>
                <i class="iconfont">&#xe603;</i>竞赛名称：
              </span>
              <input type="text" v-model="option.name">
            </div>
            <div class="serverurl clf">
              <span>
                <i class="iconfont">&#xe603;</i>竞赛时长：
              </span>
              <input type="number" v-model="option.effectiveTimeLong">
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>焊接类型：
              </span>
              <select v-model="option.weldingType">
                <option value="焊接类型">焊接类型</option>
                <option value="焊接类型">焊接类型</option>
                <option value="焊接类型">焊接类型</option>
              </select>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>接头类型：
              </span>
              <select v-model="option.typeConnector">
                <option value="接头类型">接头类型</option>
                <option value="接头类型">接头类型</option>
                <option value="接头类型">接头类型</option>
              </select>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>焊接位置：
              </span>
              <select v-model="option.weldingPosition">
                <option value="焊接位置">焊接位置</option>
                <option value="焊接位置">焊接位置</option>
                <option value="焊接位置">焊接位置</option>
              </select>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>母材材料：
              </span>
              <select v-model="option.baseMetalMaterial">
                <option value="深圳大学">母材材料</option>
                <option value="广州大学">母材材料</option>
                <option value="师范大学">母材材料</option>
              </select>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>母材厚度：
              </span>
              <div class="sinput fl">
                <input type="number" v-model="option.baseMaterialThicknes">
                <span>mm</span>
              </div>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>母材间隙：
              </span>
              <div class="sinput fl">
                <input type="number" v-model="option.baseMetalGap">
                <span>mm</span>
              </div>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>电压：
              </span>
              <div class="sinput fl">
                <input type="text" v-model="option.voltage">
                <span>V</span>
              </div>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>焊丝/焊条类型：
              </span>
              <select v-model="option.weldingWreElectrodeType">
                <option value="焊丝/焊条类型">焊丝/焊条类型</option>
                <option value="焊丝/焊条类型">焊丝/焊条类型</option>
                <option value="焊丝/焊条类型">焊丝/焊条类型</option>
              </select>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>焊丝/焊条直径：
              </span>
              <div class="sinput fl">
                <input type="number" v-model="option.weldingWreElectrodeDiameter">
                <span>mm</span>
              </div>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>公差：
              </span>
              <div class="sinput fl">
                <input type="number" v-model="option.tolerance">
                <span>mm</span>
              </div>
            </div>
            <div class="clf">
              <span>
                <i class="iconfont">&#xe603;</i>训练次数：
              </span>
              <div class="sinput fl">
                <input type="number" v-model="option.trainingTimes">
                <span>mm</span>
              </div>
            </div>
          </div>
          <div class="btns">
            <a href="javascript:" @click="submit()">确定</a>
            <a href="javascript:" class="cancel" @click="close()">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddContest",
  props: {
    option: {
      type: Object,
      default() {
        return {
          id:null,//
          name:null,//任务名称
          type:null,//任务类型：区分考试/普通任务/竞赛
          code:null,//任务编号
          weldingType:null,//焊接类型
          typeConnector:null,//接口类型
          weldingPosition:null,//焊接位置
          baseMetalMaterial:null,//母材材料
          baseMaterialThicknes:null,//母材厚度
          baseMetalGap:null,//母材间隙
          voltage:null,//电压
          weldingWreElectrodeType:null,//焊丝/焊条类型
          weldingWreElectrodeDiameter:null,//焊丝/焊条直径
          trainingTimes:null,//训练次数
          tolerance:null,//公差
          difficulty:null,//难度
          sort:null,//排序值
          createTime:null,//创建时间
          updateTime:null,//更新时间
          releaseTime:null,//发布时间
          releaseStatus:null,//发布状态
          releaseTo:null,//发布到哪里
          effectiveStartTime:null,//有效时开始时间
          effectiveEndTime:null,//有效结束时间
          effectiveTimeLong:null,//有效时长
          
        };
      }
    },
    close: {
      type: Function,
      default: e => console.log(e)
    },
    submit: {
      type: Function,
      default: e => console.log(e)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/common.styl';

.centerLayer {
  width: 50rem !important;
}
</style>

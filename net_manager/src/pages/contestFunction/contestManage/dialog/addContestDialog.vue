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
              <span><i class="iconfont">&#xe603;</i>竞赛名称：</span>
              <input type="text">
            </div>
            <div class="serverurl clf">
              <span><i class="iconfont">&#xe603;</i>竞赛时长：</span>
              <input type="text">
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>焊接类型：</span>
              <select>
                <option value="焊接类型">焊接类型</option>
                <option value="焊接类型">焊接类型</option>
                <option value="焊接类型">焊接类型</option>
              </select>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>接头类型：</span>
              <select>
                <option value="接头类型">接头类型</option>
                <option value="接头类型">接头类型</option>
                <option value="接头类型">接头类型</option>
              </select>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>焊接位置：</span>
              <select>
                <option value="焊接位置">焊接位置</option>
                <option value="焊接位置">焊接位置</option>
                <option value="焊接位置">焊接位置</option>
              </select>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>母材材料：</span>
              <select>
                <option value="深圳大学">母材材料</option>
                <option value="广州大学">母材材料</option>
                <option value="师范大学">母材材料</option>
              </select>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>母材厚度：</span>
              <div class="sinput fl">
                <input type="text">
                <span>mm</span>
              </div>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>母材间隙：</span>
              <div class="sinput fl">
                <input type="text">
                <span>mm</span>
              </div>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>电压：</span>
              <div class="sinput fl">
                <input type="text">
                <span>V</span>
              </div>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>焊丝/焊条类型：</span>
              <select>
                <option value="焊丝/焊条类型">焊丝/焊条类型</option>
                <option value="焊丝/焊条类型">焊丝/焊条类型</option>
                <option value="焊丝/焊条类型">焊丝/焊条类型</option>
              </select>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>焊丝/焊条类型：</span>
              <div class="sinput fl">
                <input type="text">
                <span>mm</span>
              </div>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>公差：</span>
              <div class="sinput fl">
                <input type="text">
                <span>mm</span>
              </div>
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>训练次数：</span>
              <div class="sinput fl">
                <input type="text">
                <span>mm</span>
              </div>
            </div>
          </div>
          <div class="btns">
            <a href="javascript:">确定</a>
            <a href="javascript:" class="cancel" @click="close()">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddContest',
  props: {
    close: {
      type: Function,
      default: e => console.log(e)
    },
    submit: {
      type: Function,
      default: e => console.log(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
.centerLayer
  width 50rem !important
</style>

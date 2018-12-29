<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建考试</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <ul>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;考试名称：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;有效时段：</div>
              <div class="time_quantum">
                <input type="text" class="fl">
                <span class="fl">—</span>
                <input type="text" class="fr">
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;考试时长：</div>
              <div><input type="text"></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊接类型：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;接头类型：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊接位置：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材材料：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材厚度：</div>
              <div><input type="text" class="width">mm</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材间隙：</div>
              <div><input type="text" class="width">mm</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;电压：</div>
              <div><input type="text" class="width">v</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊丝/焊条类型：</div>
              <div>
                <select name="">
                  <option value=""></option>
                  <option value="">1111</option>
                  <option value="">2222</option>
                  <option value="">3333</option>
                  <option value="">4444</option>
                  <option value="">5555</option>
                </select>
              </div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊丝/焊条直径：</div>
              <div><input type="text" class="width">mm</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;公差：</div>
              <div><input type="text" class="width">%</div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;训练次数：</div>
              <div><input type="text" class="width">次</div>
            </li>
          </ul>
          <div class="btns">
            <a href="javascript:">下一步</a>
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
  name: 'NewExam',
  data () {
    return {}
  },
  props: {
    option:{
      type:Object,
      default(){
        return {
          name:null
        }
      }
    },
    close: {
      type: Function,
      default: e=>console.log(e)
    },
    submit: {
      type: Function,
      default: e=>console.log(e)
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
@import "~assets/new_exam.styl"
</style>

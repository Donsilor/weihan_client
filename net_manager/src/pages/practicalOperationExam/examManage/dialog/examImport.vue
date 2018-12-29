<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup newContest">
        <div class="popupTopBar">
          <span class="title fl">导入</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="item clf">
            <div class="title"><i class="iconfont">&#xe6dd;</i>下载模板</div>
            <div class="subText">为提高导入的成功率，请下载并使用系统提供的模板</div>
            <a href="javascript:" class="downloadTemplate">下载模板</a>
          </div>
          <div class="item">
            <div class="title"><i class="iconfont">&#xe71a;</i>上传</div>
            <div class="subText">仅支持 xlsx，xls，csv，文件大小≤1G</div>
            <div class="selectFile">
              <label>
                <input type="text">
              </label>
              <label>
                <input type="file" hidden>
                <a href="javascript:">选择文件</a>
              </label>
            </div>
          </div>
          <div class="btns">
            <a href="javascript:" class="startImport">开始导入</a>
          </div>
        </div>
      </div>
      <div class="progressBarWrap">
        <div @click="$emit('importSucceed', true)"> 正在导入
          <span>100</span>/
          <span>248</span>
        </div>
        <div class="progressBar clf">
          <div class="fl">
            <div class="info"></div>
          </div>
          <div class="fr">20%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExamImport',
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
  @import "~assets/import.styl"
</style>

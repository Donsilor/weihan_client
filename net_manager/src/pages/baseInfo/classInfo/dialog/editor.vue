<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="clss fl">新建</span>
          <span class="clss fr" @click="close()"><i class="iconfont">&#xe607;</i></span>
        </div>
        <div class="popupWrap">
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>班级姓名：</span>
            <input type="text" v-model="option.name">
          </div>
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>所属专业：</span>
            <select v-model="option.professionId">
              <option v-for="(item, index) in professions" :key="index" :value="item.id">{{item.name}}</option>
            </select>
          </div>
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>年级：</span>
            <select v-model="option.grade">
              <option  v-for="(item, index) in grades" :key="index" :value="item" >{{item}}</option>
            </select>
          </div>
          <div class="btns textAlignLeft">
            <a href="javascript:" @click="submit()">确定</a>
            <a href="javascript:" class="cancel" @click="close()">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { User, RequestParams, SystemParameter } from 'common/entity'
export default {
  name: 'classditor',
  data(){
      return {
       grades:[],
        // group:null,
        // name: null,
        // professionId: null
      }
  },
  model: {
    props: 'option',
    event: 'input'
  },
  created(){
    SystemParameter.setContinuous(2014)
    for(let i = 0; i < 5; i++){
      this.grades[i] = SystemParameter.CONTINUOUS_NUMBER;
    }
    this.grades = this.grades;
  },
  props: {
    option: {
      type: Object,
      default () {
        return {
          grade:null,
          name: null,
          professionId: null
        }
      }
    },
    professions:{
      type: Array,
      default () {
        return []
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
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
.editor
  width 770px
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)

.window-content
  padding-top 40px
  background-color #ffffff

.but
  padding-bottom 80px
  padding-left 200px


</style>

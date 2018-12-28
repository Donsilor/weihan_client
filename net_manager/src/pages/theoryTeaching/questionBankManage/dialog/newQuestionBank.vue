<template>
<!-- 显示与否由父组件决定 -->
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建题库</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <ul>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;题库名称：</div>
              <div><input type="text" v-model="option.name" ></div>
            </li>
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;级别：</div>
              <div>
                <select v-model="option.questionsLevel" >
                  <option value="-1">请选择</option>
                  <option v-for="(item, index) in SystemParameter['questionsLevel']" :key="index" :value="item.value">{{item.label}}</option>
                </select>
              </div>
            </li>   
            <li>
              <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;题库类别：</div>
              <div>
                <select v-model="option.questionsClass" >
                  <option value="-1">请选择</option>
                  <option v-for="(item, index) in SystemParameter['questionsClass']" :key="index" :value="item.value">{{item.label}}</option>
                </select>
              </div>
            </li> 
            <li class="last">
              <div></div>
              <div class="btns">
                <a href="javascript:" @click="submit()">确定</a>
                <a href="javascript:" @click="close()">取消</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {SystemParameter} from "common/entity";
export default {
  name: 'NewwExam',
  data () {
    return {
      SystemParameter:SystemParameter.DICTIONARIES
    }
  },
  model:{
    props:'option',
    event: 'input'
  },
  props: {
    option:{
      type:Object,
      default(){
        return {
          name:null,
          questionsLevel:"-1",
          questionsClass:"-1"
        }
      }
    },
    close:{
      type:Function,
      default:e=>console.log(e)
    },
    submit:{
      type:Function,
      default:e=>console.log(e)
    },
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"
@import "~assets/new_exam.styl"
.centerLayer
    width 36rem

    .popup li div:last-child
        width 68%

    .last .btns
        text-align left 

</style>

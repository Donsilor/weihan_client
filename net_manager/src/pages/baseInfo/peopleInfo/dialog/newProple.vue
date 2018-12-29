<template>
  <div class="maskLayer">
    <div class="centerLayer">
      <div class="popup">
        <div class="popupTopBar">
          <span class="title fl">新建人员</span>
          <i class="iconfont fr" @click="close()">&#xe607;</i>
        </div>
        <div class="popupWrap">
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>用户名：</span>
            <input type="text" v-model="option.userName">
          </div>
          <div class="clf">
            <span><i class="iconfont">&#xe603;</i>姓名：</span>
            <input type="text" v-model="option.realName">
          </div>
          <div class="clf">
            <span>身份：</span>
            <select v-model="identity">
              <option value="0">管理员</option>
              <option value="1">教师</option>
              <option value="2">学生</option>
            </select>
          </div>
          <div class="identityDiv" v-if="identity === '0'">
            <div class="clf">
              <span>电子邮件：</span>
              <input type="text" v-model="option.email">
            </div>
            <div class="clf">
              <span>手机号码：</span>
              <input type="text" v-model="option.phoneNo">
            </div>
            <!-- <div class="clf">
              <span>所属学校：</span>
              <select>
                <option value="学校111">学校111</option>
                <option value="学校111">学校111</option>
                <option value="学校111">学校111</option>
              </select>
            </div> -->
          </div>
          <div class="identityDiv" v-else-if="identity === '1'">
            <div class="clf">
              <span>专业：</span>
              <select v-model="option.professionsId">
                <option v-for="(item, index) in professions" :key="index" :value="item.id">{{item.name}}</option>
              </select>
            </div>
            <div class="clf">
              <span>班级：</span>
              <div class="classma fl">
                <select>
                <option v-for="(item, index) in classs.filter(o=>o.professionId==option.professionsId)" :value="item.id" :key="index">{{item.name}}</option>
                </select>
                <input type="button" value="添加">
              </div>
            </div>
            <div class="clf">
              <span>年级：</span>
              <select>
                <option  v-for="(item, index) in grades" :key="index" :value="item" >{{item}}</option>
              </select>
            </div>
            <div class="clf">
              <span>电子邮件：</span>
              <input type="text" v-model="option.email">
            </div>
            <div class="clf">
              <span>手机号码：</span>
              <input type="text" v-model="option.phoneNo">
            </div>
          </div>
          <div class="identityDiv" v-else-if="identity === '2'">
            <div class="clf">
              <span>专业：</span>
              <select v-model="option.professionsId">
                <option v-for="(item, index) in professions" :key="index" :value="item.id">{{item.name}}</option>
              </select>
            </div>
            <div class="clf">
              <span>班级：</span>
              <div class="classma fl">
                <select>
                <option v-for="(item, index) in classs.filter(o=>o.professionId==option.professionsId)" :value="item.id" :key="index">{{item.name}}</option>
                </select>
                <input type="button" value="添加">
              </div>
            </div>
            <div class="clf">
              <span>年级：</span>
              <select>
                  <option  v-for="(item, index) in grades" :key="index" :value="item" >{{item}}</option>
              </select>
            </div>
            <div class="clf">
              <span>电子邮件：</span>
              <input type="text" v-model="option.email">
            </div>
            <div class="clf">
              <span>手机号码：</span>
              <input type="text" v-model="option.phoneNo">
            </div>
            <div class="clf">
              <span><i class="iconfont">&#xe603;</i>用户等级：</span>
              <select>
                <option v-for="(item, index) in SystemParameter['userLevel']" :key="index" :value="item.value">{{item.label}}</option>
              </select>
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
import { User, RequestParams, SystemParameter } from 'common/entity'
export default {
  name: 'NewPeople',
  data(){
    return {
      SystemParameter:SystemParameter.DICTIONARIES,
      grades:[],
      identity: ''
    }
  },
  created(){
    SystemParameter.setContinuous(2014)
    for(let i = 0; i < 5; i++){
      this.grades[i] = SystemParameter.CONTINUOUS_NUMBER;
    }
    this.grades = this.grades;
  },
  props: {
    professions:{
      type:Array,
      default(){
        return []
      }
    },
    classs:{
      type:Array,
      default(){
        return []
      }
    },
    option:{
      type:Object,
      default(){
        return {
          userId:null,//
          userName:null,//
          realName:null,//
          nickName:null,//
          sex:null,//
          birthDate:null,//
          email:null,//
          phoneNo:null,//
          professionsId:null,//
          professionsName:null,//
          classs:null,//
          createAt:null,//
          password:null,//
          passwordText:null,//
          state:null,//
          credential:null,//
          consumeMoney:null,//
          consumerod:null,//
          operateTime:null,//
          exp:null,//
          grade:null,//
          stateInfo:null,//
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

.centerLayer
  width 40rem

select
  width 60%
  height 2.5rem
  float left

.identityDiv
  > .clf:not(:last-of-type)
    margin-bottom 2rem

  .classma
    width 60%
    height 40px
    line-height 40px

    select
      width 70%
      margin-right 10%

    input[type=button]
      width 20% !important
      background #35a5de
      border-radius .3rem
      border 1px solid #35a5de !important
      color #fff

</style>

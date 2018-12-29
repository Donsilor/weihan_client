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
            <span>
              <i class="iconfont">&#xe603;</i>用户名：
            </span>
            <input type="text" v-model="option.userName">
          </div>
          <div class="clf">
            <span>
              <i class="iconfont">&#xe603;</i>姓名：
            </span>
            <input type="text" v-model="option.name">
          </div>
          <div class="clf">
            <span>身份：</span>
            <select v-model="option.userType">
              <!-- <option value="1">管理员</option> -->
              <option value="2">教师</option>
              <option value="0">学生</option>
            </select>
          </div>
          <!-- <div class="identityDiv" v-if="option.type === '1'">
            <div class="clf">
              <span>电子邮件：</span>
              <input type="text" v-model="option.email">
            </div>
            <div class="clf">
              <span>手机号码：</span>
              <input type="text" v-model="option.phoneNo">
            </div>
          </div> -->
          <div class="identityDiv" v-if="option.userType === '2'">
            <!-- <div class="clf">
              <span>专业：</span>
              <select v-model="option.professionsId">
                <option
                  v-for="(item, index) in professions"
                  :key="index"
                  :value="item.id"
                >{{item.name}}</option>
              </select>
            </div> -->
            <div class="clf">
              <span>班级：</span>
              <el-checkbox-group v-model="option.classIds">
                <div class="majorDiv">
                  <div class="majorItem" v-for="(item, index) in professions" :key="index">
                    <p class="majorName">{{item.name}}</p>
                    <div class="class">
                      <el-checkbox
                        v-for="(_item, index) in item.classes"
                        :key="index"
                        :label="_item.id"
                      >{{_item.name}}</el-checkbox>
                    </div>
                  </div>
                </div>
              </el-checkbox-group>
            </div>
            <div class="clf">
              <span>年级：</span>
              <select>
                <option v-for="(item, index) in grades" :key="index" :value="item">{{item}}</option>
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
          <div class="identityDiv" v-else-if="option.userType === '0'">
            <div class="clf">
              <span>专业：</span>
              <select v-model="option.professionsId">
                <option
                  v-for="(item, index) in professions"
                  :key="index"
                  :value="item.id"
                >{{item.name}}</option>
              </select>
            </div>
            <div class="clf">
              <span>班级：</span>
              <div class="classma fl">
                <select v-model="option.classId">
                  <option
                    v-for="(item, index) in classs.filter(o=>o.professionId==option.professionsId)"
                    :value="item.id"
                    :key="index"
                  >{{item.name}}</option>
                </select>
              </div>
            </div>
            <div class="clf">
              <span>年级：</span>
              <select>
                <option v-for="(item, index) in grades" :key="index" :value="item">{{item}}</option>
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
              <span>
                <i class="iconfont">&#xe603;</i>用户等级：
              </span>
              <select>
                <option
                  v-for="(item, index) in SystemParameter['userLevel']"
                  :key="index"
                  :value="item.value"
                >{{item.label}}</option>
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
import { User, RequestParams, SystemParameter } from "common/entity";
import { array2Descendants } from "common/utils";

export default {
  name: "NewPeople",
  data() {
    return {
      SystemParameter: SystemParameter.DICTIONARIES,
      grades: [],
      professions: {},
      identity: ""
    };
  },
  created() {
    SystemParameter.setContinuous(2014);
    for (let i = 0; i < 5; i++) {
      this.grades[i] = SystemParameter.CONTINUOUS_NUMBER;
    }
    this.grades = this.grades;
  },
  mounted() {
    for (let item of this.classs) {
      if (!this.professions[item.professionId]) {
        this.professions[item.professionId] = {
          id: item.professionId,
          name: item.professionName,
          classes: []
        };
      }
      this.professions[item.professionId]["classes"].push(item);
    }
    this.professions = this.professions;
  },
  props: {
    classs: {
      type: Array,
      default() {
        return [];
      }
    },
    option: {
      type: Object,
      default() {
        return {
          userName:null,//
          name:null,//
          nickName:null,//
          userType:null,//
          sex:null,//
          birthDate:null,//
          email:null,//
          phoneNo:null,//
          professionsId:null,//
          classIds:[],//
          classId:null,//
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
  width: 40rem;
}

select {
  width: 60%;
  height: 2.5rem;
  float: left;
}

.identityDiv {
  > div {
    margin-bottom: 2rem;

    &:not(:last-of-type) {
      margin-bottom: 2.5rem;
    }

    > span {
      float: left;
      width: 25%;
      line-height: 2.5rem;
      text-align: right;

      i {
        font-size: 0.75rem;
        color: red;
      }
    }

    > input, > select {
      float: left;
      width: 60%;
      height: 2.5rem;
      font-size: 0.875rem;
      border: 1px solid $inputBorderColor;
    }

    .majorDiv {
      max-height: 12rem;
      overflow-y: scroll;
      padding-top: 1rem;

      &::-webkit-scrollbar {
        width: 0;
      }

      .majorItem {
        border: 1px solid $borderColor;
        border-radius: 0.3rem;

        &:not(:last-of-type) {
          margin-bottom: 1rem;
        }

        .majorName {
          float: left;
          margin-left: 1rem;
          margin-top: -0.5rem;
          background-color: #fff;
          padding: 0 0.5rem;
        }

        .class {
          padding: 2rem 2.5% 1rem;

          .el-checkbox {
            margin-bottom: 0.6rem;
          }

          .el-checkbox+.el-checkbox {
            margin-left: 0;
          }

          .el-checkbox__label {
            padding-left: 0.5rem;
          }
        }
      }
    }
  }

  .classma {
    width: 60%;
    height: 40px;
    line-height: 40px;

    select {
      width: 70%;
      margin-right: 10%;
    }

    input[type=button] {
      width: 20% !important;
      background: #35a5de;
      border-radius: 0.3rem;
      border: 1px solid #35a5de !important;
      color: #fff;
    }
  }
}
</style>

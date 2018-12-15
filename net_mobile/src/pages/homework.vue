<template>
  <div>
    <hfold :idx="5" :title="'作业'"></hfold>
    <div class="box">
      <div class="subject">
        <ul class="clf">
          <li v-for="(items,index) in homeworks" :value="index" :key="index">
            <p class="question">
              {{items.questionid}}、
              <span>
                （
                <span>{{items.questiontype}}</span>）
              </span>
              {{items.question}}
            </p>
            <div class="clf">
              <p
                :class="{'active':active===idx}"
                v-for="(it,idx) in items.tabs"
                :value="idx"
                :key="idx"
                @click="active=idx"
              >
                <a href="javascript:">{{it.tab}}</a>
                <span>{{it.tabtext}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 左右切换 -->
      <div class="arrow clf">
        <a href="javascript:" class="pre" @click="nextOrUp(false)">
          <i class="iconfont icon-xiayiti"></i>
        </a>
        <a href="javascript:" class="next" @click="nextOrUp(true)">
          <i class="iconfont icon-xiayiti"></i>
        </a>
      </div>
      <!-- 提交作业 -->
      <div class="paper-bot clf">
        <div class="fl">
          <input type="button" value="提交作业" @click="mes()">
        </div>
        <!-- 显示进度 -->
        <div class="fr" @click="answerSheetShow = !answerSheetShow">
          <span>1/136</span>
          <a href="javascript:" class="clf">
            <i class="iconfont icon-tishu"></i>
          </a>
        </div>
      </div>
      <!-- 答题结果 -->
      <div class="pop" v-if="answerSheetShow">
        <div class="answer_sheet">
          <div class="title">
            <h4 class="name">初级焊工认证理论题库</h4>
            <span class="red fr">
              <i></i>&nbsp;&nbsp;错误
            </span>
            <span class="blue fr">
              <i></i>&nbsp;&nbsp;正确
            </span>
          </div>
          <div class="answer_content">
            <ul>
              <li>
                <span class="red">1</span>
                <span class="blue">2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
              </li>
              <li>
                <span>9</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hfold from "../components/hfold";
import { toast } from "@/common/myFun";

export default {
  name: "homework",
  components: {
    hfold
  },
  mounted() {
    this.details = this.$route.params;
    this.getPaper();
  },
  data() {
    return {
      minutes: 30,
      seconds: 0,
      answerSheetShow: false,
      active: "null",
      homeworks: [
        {
          questionid: "1",
          questiontype: "单选题",
          question: "（）是锅炉的主要参数之一？",
          tabs: [
            {
              tab: "A",
              tabtext: "流量"
            },
            {
              tab: "B",
              tabtext: "介质"
            },
            {
              tab: "C",
              tabtext: "直径"
            },
            {
              tab: "D",
              tabtext: "温度"
            }
          ]
        }
      ],
      details: {}, //考试类型
      subjects: [],
      allTest: 0, //所有题目
      curTest: 1 //当前题目
    };
  },
  methods: {
    //   获得试卷modemode: 1：练习 2：作业 3：试卷  testId:相对应的ID
    getPaper() {
      let that = this;
      this.$api
        .api(this.$infs.test.getExamTestPaper, this.details)
        .then(res => {
          that.subjects = res.homeworkTest.questions;
          that.allTest = that.subjects.length;
          console.log(res);
        })
        .catch(res => {
          that.$msgbox("提示", res.message);
        });
    },
    // 切换题目
    nextOrUp(flag) {
      if (flag) {
        //下一题
        if (this.curTest == this.allTest) {
          toast("没有下一题了");
        } else {
          this.curTest++;
        }
      } else {
        if (this.curTest == 1) {
          toast("已经是第一题了");
        } else {
          this.curTest--;
        }
      }
    },
    mes() {
       this.$msgbox.confirm("", {
        message: "你还有9题没做,确认提交吗？",
        title: "",
        showConfirmButton: true
      })
        .then(action => {
          this.$router.push({ name: "submit" });
          console.log("模拟");
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
@import "../assets/css/paper";
.paper-bot .fl {
  border: none !important;
  padding: 0;
}
.paper-bot .fl input {
  display: block;
  width: 1.8rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.3rem;
  background: #fff;
  color: #37a4df;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #37a4df;
}
.paper-bot .fl span i {
  font-size: 0.4rem;
}
.subject {
  padding-top: 0.3rem;
}
.question span {
  color: #37a4df;
}
</style>
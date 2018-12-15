<template>
  <div>
    <hfold :idx="5" :title="'考试'"></hfold>
    <div class="box">
      <!-- 题目 -->
      <div class="single-choice">一、单选题(每道题2分)</div>
      <!-- 选项 -->
      <div class="subject">
        <ul class="clf">
          <li>
            <p class="question">（1）（）是锅炉的主要参数之一？</p>
            <div class="clf">
              <p v-for="(item,index) in subjects[curTest]" :value="index" :key="index">
                <a href="javascript:" class="check">A</a>
                <span>流量</span>
              </p>
              <p>
                <a href="#" class="check">B</a>
                <span>介质</span>
              </p>
              <p>
                <a href="#">C</a>
                <span>直径</span>
              </p>
              <p>
                <a href="#">D</a>
                <span>温度</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 切换题目 -->
      <div class="arrow clf">
        <a href="javascript:" class="pre" @click="nextOrUp(false)">
          <i class="iconfont icon-xiayiti"></i>
        </a>
        <a href="javascript:" class="next" @click="nextOrUp(true)">
          <i class="iconfont icon-xiayiti"></i>
        </a>
      </div>
      <!-- 提交和进度 -->
      <div class="paper-bot clf">
        <!-- 提交试卷 -->
        <div class="fl">
          <span>
            <i class="iconfont icon-daojishi"></i>
            {{mytime}}
          </span>
          <a href="javascript:" @click="mes()">提交试卷</a>
        </div>
        <!-- 答题进度和展示答题卡 -->
        <div class="fr" @click="answerSheetShow = !answerSheetShow">
          <span>1/136</span>
          <a href="javascript:" class="clf">
            <i class="iconfont icon-tishu"></i>
          </a>
        </div>
      </div>
      <!-- 快速选题 -->
      <div class="pop" v-show="answerSheetShow">
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
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
              </li>
              <li>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
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
  name: "paper",
  components: {
    hfold
  },
  mounted() {
    this.details = this.$route.params;
    this.getPaper();
  },
  data() {
    return {
      tips: ["未知", "课后作业", "练习题库", "考试"],
      mytime: "--:--",
      testTime: 300,
      answerSheetShow: false,
      details: {}, //考试类型
      subjects: [], //考题
      allTest: 0, //所有题目
      curTest: 1, //当前题目
      timer: null //计时器
    };
  },
  methods: {
    //   获得试卷modemode: 1：练习 2：作业 3：试卷  testId:相对应的ID
    getPaper() {
      let that = this;
      this.$api
        .api(this.$infs.test.getExamTestPaper, this.details)
        .then(res => {
          that.subjects = res.paperTest.questionCombis;
          that.allTest = that.subjects.length;
          that.starCountDown(10);
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
    // 提交
    mes() {
      this.$msgbox
        .confirm("", {
          message: "你还有135题没做,确认提交试卷吗？",
          title: "",
          showConfirmButton: true
        })
        .then(action => {
          this.$router.push({ name: "submit" });
          console.log("模拟");
        })
        .catch(() => {});
    },
    // 倒计时,最高显示分钟,time 单位秒
    countdown() {
      this.testTime--;
      let min = Math.floor(this.testTime / 60);
      let sec = Math.floor(this.testTime % 60);
      min < 10 && (min = "0" + min);
      sec < 10 && (sec = "0" + sec);
      return min + ":" + sec;
    },
    // 开始倒计时
    starCountDown(time) {
      this.testTime = time;
      this.timer = window.setInterval(() => {
        if (this.testTime <= 0) {
          //考试结束
          this.$msgbox.alert("考试已经结束").then(() => {
            console.log("考试结束，提交试卷");
          });
          window.clearInterval(this.timer);
        } else {
          this.mytime = this.countdown();
        }
      }, 1000);
    }
  },
  destroyed() {
    console.log("离开页面");
    window.clearInterval(this.timer);
  }
  // computed: {}
};
</script>

<style scoped>
@import "../assets/css/paper";
</style>
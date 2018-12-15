<template>
  <div>
    <hfold :idx="5" :title="'题库'"></hfold>
    <div class="box">
      <div class="subject">
        <ul class="clf">
          <li v-for="(items,index) in question_bank" :value="index" :key="index">
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
      <!-- 答案 -->
      <div class="paper-bot clf">
        <div class="fl" @click="answerwrapShow = !answerwrapShow">
          <span>
            <i class="iconfont icon-daan"></i>答案
          </span>
        </div>
        <div class="fr" @click="answerSheetShow = !answerSheetShow">
          <span>1/136</span>
          <a href="javascript:" class="clf">
            <i class="iconfont icon-tishu"></i>
          </a>
        </div>
      </div>
      <!-- 解析 -->
      <div class="answer-wrap" v-if="answerwrapShow">
        <div class="r-answer">
          正确答案：
          <span>D</span>
        </div>
        <div class="answer-parse">
          解析：
          <span>我是正确答案啊0.0</span>
        </div>
      </div>
      <!-- 进度 -->
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
  name: "question_bank",
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
      answerwrapShow: false,
      active: "null",
      question_bank: [
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
        },{
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
          that.subjects = res.questionTest.questions;
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
.paper-bot .fl span {
  border: none !important;
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
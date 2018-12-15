<template>
  <div class="box">
    <testselect v-on:childByValue="childByValue"></testselect>
    <div class="content_list">
      <div class="list-title">
        <h4>{{tips[searchData.mode]}}</h4>
      </div>
      <!-- 课后作业 -->
      <ul class="test" v-show="searchData.mode==1">
        <li
          class="kind clf"
          v-for="(item,idx) in lists"
          :value="idx"
          :key="idx"
          @click="onGotoClick(idx)"
        >
          <div class="c_title">{{item.name}}</div>
          <div class="clf">
            <span>标签：{{item.tag}}</span>
            <span>共:{{item.questionCount}}题</span>
            <span>{{item.endDate}}截止</span>
            <a href="javascript:" class="edit">
              <i class="iconfont icon-tianxie"></i>
            </a>
          </div>
        </li>
      </ul>
      <!-- 习题库 -->
      <ul class="test" v-show="searchData.mode==2">
        <li
          class="kind clf"
          v-for="(item,idx) in lists"
          :value="idx"
          :key="idx"
          @click="onGotoClick(idx)"
        >
          <div class="c_title">{{item.name}}</div>
          <div class="clf">
            <span>共{{item.questionsCount}}题</span>
            <span>难度: {{grades[item.grade]}}</span>
            <a href="javascript:" class="edit">
              <i class="iconfont icon-tianxie"></i>
            </a>
          </div>
        </li>
      </ul>
      <!-- 考试 -->
      <ul class="test" v-show="searchData.mode==3">
        <li
          class="kind clf"
          v-for="(item,idx) in lists"
          :value="idx"
          :key="idx"
          @click="onGotoClick(idx)"
        >
          <div class="c_title">
            {{item.name}}
            <span>得分：{{item.point}}分</span>
          </div>
          <div class="clf">
            <span>总分: {{item.totalPoint}}</span>
            <span>限时: {{item.examTime}}分钟</span>
            <span>{{item.endDate}}截止</span>
            <span>剩余{{item.residue}}次</span>
            <a href="javascript:" class="edit">
              <i class="iconfont icon-tianxie"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="info" v-show="isShow">没有更多了</div>
  </div>
</template>

<script>
import testselect from "../components/testselect";
export default {
  name: "tests",
  components: {
    testselect
  },
  mounted() {
    if (this.lists.length > 0) return;
    this.getExamData();
  },
  data() {
    return {
      tips: ["未知", "课后作业", "练习题库", "考试"],
      grades: ["入门", "初级", "中级", "高级"],
      lists: [],
      isShow: true,
      curPage: 1,
      searchData: {
        keyword: null,
        mode: 1, //1.作业  2.题库  3.试卷
        tag: 1,
        page: 0,
        countByPage: 10,
        orderType: 0
      }
    };
  },
  methods: {
    //点击选择列表接受参数方法
    childByValue(val) {
      this.searchData.keyword = val.keyword;
      this.searchData.mode = val.mode + 1;
      this.searchData.tag = val.tag + 1;
      this.searchData.page = 0;
      this.getExamData();
    },
    // 单条点击事件,打开测试界面
    onGotoClick(idx) {
      let mode = this.searchData.mode;
      let name = mode == 1 ? "homework" : mode == 2 ? "question_bank" : "paper";
      this.$router.push({
        name: name,
        params: {
          testId: this.lists[idx].id,
          mode: mode
        }
      });
    },
    // 请求数据
    getExamData() {
      this.$api
        .api(this.$infs.test.getExam, this.searchData)
        .then(res => {
          if (this.searchData.mode == 1) {
            this.lists = res.homeworks.items;
            this.isShow = this.curPage >= res.homeworks.totalPage - 1;
          } else if (this.searchData.mode == 2) {
            this.lists = res.questionLibs.items;
            this.isShow = this.curPage >= res.questionLibs.totalPage - 1;
          } else {
            this.lists = res.papers.items;
            this.isShow = this.curPage >= res.papers.totalPage - 1;
          }
        })
        .catch(res => {
          this.$msgbox(res.message);
        });
    }
  }
};
</script>
// scoped控制样式在本页中有效，不加就变全局了
<style scoped>
@import "../assets/css/courseware.css";
@import "../assets/css/have_text.css";
.search_box input[data-v-620d09b8] {
  width: 4.5rem;
}
</style>


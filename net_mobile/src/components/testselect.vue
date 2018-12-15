<template>
  <div class="search-wrap clf">
    <div class="top_box">
      <div class="search_box clf">
        <span>
          <i class="iconfont icon-sousuo"></i>
        </span>
        <input type="text" class="search-wrapbox" placeholder="请输入搜索内容" v-model="searchText">
        <a href="javascript:" class="search" @click="sureSearch">搜索</a>
        <a class="filtrate" @click="onMenuClick()">
          筛选
          <i class="iconfont icon-zhankai"></i>
        </a>
      </div>
      <!-- 条件选项 -->
      <div class="popups" v-show="showSelect">
        <div class="popups_kind" v-show="showSelect">
          <div class="kind">模式
            <div>
              <span
                :class="{'on':diffed===idx}"
                v-for="(ite,idx) in diffs"
                :value="idx"
                :key="idx"
                @click="diffed=idx"
              >{{ite}}</span>
            </div>
          </div>
          <div class="kind">标签
            <div>
              <span
                :class="{'on':typeed===idx}"
                v-for="(ite,idx) in types"
                :value="idx"
                :key="idx"
                @click="typeed=idx"
              >{{ite}}</span>
            </div>
          </div>
          <div class="confirm clf">
            <a href="javascript:" class="fr" @click="sureSearch">确定</a>
          </div>
        </div>
      </div>
    </div>

    <div class="shade" v-show="showSelect" @click="hideAll"></div>
  </div>
</template>

<script>
export default {
  name: "testselect",
  mounted() {
    this.hideAll();
  },
  data() {
    return {
      searchText: null,
      showSelect: false,
      diffed: 0,
      diffs: ["课后作业", "练习题库", "考试"],
      typeed: 0,
      types: ["SMAW", "TIG"]
    };
  },
  methods: {
    // 显示隐藏
    onMenuClick(index) {
      this.showSelect = !this.showSelect;
    },
    // 关闭所有
    hideAll() {
      this.showSelect = false;
    }, // 确认条件事件，筛选事件，带上查询条件
    sureSearch() {
      this.hideAll();
      this.$emit("childByValue", {
        keyword: this.searchText,
        mode: this.diffed,
        tag: this.typeed
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/courseware.css";
@import "../assets/css/testselect.css";
</style>


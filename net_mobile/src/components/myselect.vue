<template>
  <div class="search-wrap clf">
    <div class="top_box">
      <div class="search_box clf">
        <span>
          <i class="iconfont icon-sousuo"></i>
        </span>
        <input type="text" class="search-wrapbox" placeholder="请输入搜索内容" v-model="searchText">
        <a href="javascript:" class="search" @click="sureSearch">搜索</a>
      </div>
      <!-- 条件目录 -->
      <div class="select">
        <div>
          <a class="synthesize" @click="onMenuClick(1)">
            一级分类
            <span :class="{'on':showOne}">
              <i class="iconfont icon-zhankai"></i>
            </span>
          </a>
        </div>
        <div class="middle_line" @click="onMenuClick(2)">
          <a>
            二级分类
            <span :class="{'on':showTwo}">
              <i class="iconfont icon-zhankai"></i>
            </span>
          </a>
        </div>
        <div class="middle_line" @click="onMenuClick(3)">
          <a>
            三级分类
            <span :class="{'on':showThree}">
              <i class="iconfont icon-zhankai"></i>
            </span>
          </a>
        </div>
        <div class="filtrate" @click="onMenuClick(4)">
          <a>
            筛选
            <span :class="{'on':showSelect}">
              <i class="iconfont icon-zhankai"></i>
            </span>
          </a>
        </div>        
      <!-- <div class="select">加载中。。。</div> -->
      </div>
      <!-- 条件选项 -->
      <div class="popups" v-show="showOne||showTwo||showThree||showSelect">
        <div class="popups_synthesize clf" v-show="showOne">
          <div class="fl">
            <div
              class="fl option"
              v-for="(item,index) in conditions1"
              :value="index"
              :key="index"
              :class="{'on':curOne===index}"
              @click="curOne=index"
            >{{item}}</div>
          </div>
          <div class="fr"></div>
        </div>

        <div class="popups_synthesize clf" v-show="showTwo">
          <div class="fl">
            <div
              class="fl option"
              v-for="(item,index) in conditions2"
              :value="index"
              :key="index"
              :class="{'on':curTwo===index}"
              @click="curTwo=index"
            >{{item}}</div>
          </div>
          <div class="fr"></div>
        </div>

        <div class="popups_synthesize clf" v-show="showThree">
          <div class="fl">
            <div
              class="fl option"
              v-for="(item,index) in conditions3"
              :value="index"
              :key="index"
              :class="{'on':curThree===index}"
              @click="curThree=index"
            >{{item}}</div>
          </div>
          <div class="fr"></div>
        </div>

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
    <!-- 阴影 -->
    <div class="shade" v-show="showOne||showTwo||showThree||showSelect" @click="hideAll"></div>
  </div>
</template>

<script>
export default {
  name: "myselect",
  mounted() {
    this.hideAll();
  },
  data() {
    return {
      showOne: false,
      showTwo: false,
      showThree: false,
      showSelect: false,
      sorts: ["综合排序", "排序1", "排序2", "排序3"],
      conditions1: [
        "金属材料焊接（核心）",
        "熔化极气体保护焊",
        "焊接自动化技术与应用（核心）",
        "焊接生产管理（核心）",
        "韩信电工电子技术（基础）",
        "焊接方法与设备（核心）",
        "焊接制图与试图（基础）"
      ],
      conditions2: [
        "金属材料焊接",
        "熔化极气体保护焊",
        "韩信电工电子技术（基础）",
        "焊接方法与设备（核心）",
        "焊接结构生产（核心）",
        "焊接质量检验（核心）",
        "我的"
      ],
      conditions3: [
        "金属材料焊接",
        "熔化极气体保护焊",
        "焊接自动化技术与应用（核心）",
        "焊接生产管理（核心）",
        "韩信电工电子技术（基础）",
        "焊接方法与设备（核心）",
        "焊接结构生产（核心）",
        "焊接质量检验（核心）",
        "我的"
      ],
      searchText: null,
      diffed: null,
      diffs: ["初级", "中级", "高级"],
      typeed: null,
      types: ["焊接", "机器人"],
      statused: null,
      statuss: ["未学习", "学习中", "已学习"],
      curOne: 0,
      curTwo: 0,
      curThree: 0,
      curSel: -1
    };
  },
  methods: {
    //条目点击
    onMenuClick(index) {
      console.log("查询条目点击" + index);
      if (this.curSel == index) {
        this.curSel = -1;
      } else {
        this.hideAll();
        this.curSel = index;
      }
      this.showAndHide(index);
    },
    // 显示隐藏
    showAndHide(index) {
      index == 1
        ? (this.showOne = !this.showOne)
        : index == 2
        ? (this.showTwo = !this.showTwo)
        : index == 3
        ? (this.showThree = !this.showThree)
        : (this.showSelect = !this.showSelect);
    },
    // 关闭所有
    hideAll() {
      this.showOne = this.showTwo = this.showSelect = this.showThree = false;
    },
    // 确认条件事件，筛选事件，带上查询条件
    sureSearch() {
      this.hideAll();
      // childByValue是在父组件on监听的方法
      // 第二个参数this.childValue是需要传的值
      this.$emit("childByValue", {
        keyword: this.searchText,
        oneClassId: this.curOne,
        twoClassId: this.curTwo,
        threeClassId: this.curThree,
        diffed: this.diffed,
        typeed: this.typeed,
        statused: this.statused
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/courseware.css";
</style>


<template>
  <div class="box">
    <myselect v-on:childByValue="childByValue"></myselect>
    <div class="content_list">
      <div class="list-title">
        <h4>课件列表</h4>
      </div>
      <div
        class="kind clf"
        v-for="(item,idx) in lists"
        :value="idx"
        :key="idx"
        @click="onGotoClick(idx)"
      >
        <div class="fl">
          <div class="name">{{item.name}}</div>
          <div class="class_hour">
            <span>标签：{{item.label}}</span>
          </div>
        </div>
        <div
          class="fr"
          :class="{'blue':item.progress<=75&&item.progress>25,'red':item.progress>75}"
        >
          <div class="circle">{{item.progress}}%</div>
          <a href="javascript:" class="learn">{{item.learn}}</a>
        </div>
      </div>
    </div>
    <div class="info" v-show="isShow">没有更多了</div>
  </div>
</template>

<script>
import myselect from "../components/myselect";
export default {
  name: "courseware",
  components: {
    myselect
  },
  mounted() {
    this.getCoursewares();
  },
  data() {
    return {
      lists: [],
      isShow: false,
      curPage: 0,
      searchData: {
        keyword: null,
        oneClassId: "",
        twoClassId: "",
        threeClassId: "",
        page: 0,
        countByPage: 10,
        state: 0
      }
    };
  },
  methods: {
    // 单条点击事件
    onGotoClick(idx) {
      this.$router.push({
        name: "courseware_details",
        params: {
          name: this.lists[idx].id
        }
      });
    },
    //点击选择列表接受参数方法
    childByValue(val) {
      this.searchData.keyword = val.keyword;
      this.searchData.oneClassId = val.oneClassId + 1;
      this.searchData.twoClassId = val.twoClassId + 1;
      this.searchData.threeClassId = val.threeClassId + 1;
      //   this.searchData.diffed = val.diffed + 1;
      //   this.searchData.typeed = val.typeed +1;
      //   this.searchData.statused = val.statused+1;
      this.searchData.page = 0;
      this.getCoursewares();
    },
    // 获取课件
    getCoursewares() {
      this.$api
        .api(this.$infs.file.getCoursewares, this.searchData)
        .then(res => {
          this.lists = res.items;
          this.isShow = this.curPage >= res.totalPage - 1;
        })
        .catch(res => {
          this.$msgbox("提示", res.message);
        });
    }
  }
};
</script>
<style scoped>
@import "../assets/css/courseware.css";
</style>


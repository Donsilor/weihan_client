<template>
  <div class="box">
    <myselect v-on:childByValue="childByValue"></myselect>
    <div class="content_list" v-for="(ls,index) in lists" :value="index" :key="index">
      <div class="list-title" @click="onSlotClick(index)">
        <h4>{{ls.name}}</h4>
      </div>
      <div
        class="kind"
        v-for="(item,idx) in ls.items"
        :value="idx"
        :key="idx"
        @click="onGotoClick(index,idx)"
        v-show="ls.isShow"
      >
        <a class="clf" href="javascript:">
          <div class="video_box">
            <img width="100%" height="100%" :src="item.picStorageId">
          </div>
          <div class="video_title">
            <div>{{item.name}}</div>
            <div>
              <span>标签：</span>
              {{item.label}}
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="info" v-show="isShow">没有更多了</div>
  </div>
</template>

<script>
import myselect from "../components/myselect";
export default {
  name: "videos",
  components: {
    myselect
  },
  mounted() {
    this.getDataLists();
  },
  data() {
    return {
      lists: [
        {
          name: "视屏列表 ",
          isShow: true,
          items: []
        }
      ],
      searchData: {},
      isShow: true
    };
  },
  methods: {
    //点击选择列表接受参数方法
    childByValue(val) {
      this.searchData = val;
    },
    // 点击事件
    onGotoClick(index, idx) {
      console.log(this.lists[index].items[idx].name, index, idx);
      this.$router.push({
        name: "video_details",
        params: {
          name: this.lists[index].items[idx].id
        }
      });
    },
    // 折叠事件
    onSlotClick(index) {
      this.lists[index].isShow = !this.lists[index].isShow;
    },
    // 获取数据列表
    getDataLists() {
      let that = this;
      this.$api
        .api(that.$infs.video.getVideos, this.searchData)
        .then(res => {
          console.log(res);
          that.lists[0].items = res.items;
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/courseware.css";
@import "../assets/css/video.css";
</style>

<template>
  <div>
    <hfold :idx="5" :title="'已学习的课件'"></hfold>
    <div class="box">
      <div class="content_list" v-for="(ls,index) in lists" :value="index" :key="index">
        <div class="list-title" @click="onSlotClick(index)">
          <h4>{{ls.title1}}>{{ls.title2}}>{{ls.title3}}</h4>
        </div>
        <div
          class="kind clf"
          v-for="(item,idx) in ls.items"
          :value="idx"
          :key="idx"
          @click="onGotoClick(index,idx)"
          v-show="ls.isShow"
        >
          <div class="fl">
            <div class="name">{{item.name}}</div>
            <div class="class_hour">
              <span>标签：{{item.tag}}</span>
              <!-- <span>共计：{{item.count}}课时</span> -->
            </div>
          </div>
          <div
            class="fr"
            :class="{'blue':item.progress<=75&&item.progress>25,'red':item.progress>75}"
          >
            <span href="#" class="red">{{item.level}}</span>
          </div>
        </div>
      </div>
      <div class="info" v-show="isShow">没有更多了</div>
    </div>
  </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
  name: "have_courseware",
  components: {
    hfold
  },
  mounted() {
    this.getHasCourseWare();
  },
  data() {
    return {
      lists: [
        {
          title1: "title1",
          title2: "title2",
          title3: "title3",
          isShow: true,
          items: [
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "初级"
            },
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "中级"
            },
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "初级"
            },
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "高级"
            }
          ]
        },
        {
          title1: "title1",
          title2: "title2",
          title3: "title3",
          isShow: false,
          items: [
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "初级"
            },
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "中级"
            },
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "高级"
            }
          ]
        },
        {
          title1: "title1",
          title2: "title2",
          title3: "title3",
          isShow: false,
          items: [
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "初级"
            },
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "初级"
            },
            {
              name: "手工电弧焊",
              tag: "smaw",
              level: "初级"
            }
          ]
        }
      ],
      isShow: false,
      curPage: 1,
      loading: false
    };
  },
  methods: {
    // 单条点击事件
    onGotoClick(index, idx) {
      console.log(this.lists[index].items[idx].name, index, idx);
    },
    // 折叠展开事件
    onSlotClick(index) {
      this.lists[index].isShow = !this.lists[index].isShow;
    },
    // 获取已学习的课件
    getHasCourseWare() {
      this.loading = true;
      this.$api
        .api(this.$infs.file.getHasCourseWare, {
          userId: this.$glb.userId,
          curPage: this.curPage
        })
        .then(res => {
          //   this.lists.push(res);
          this.loading = false;
          this.isShow = false;
        })
        .catch(res => {
          this.isShow = true;
          this.loading = false;
        });
    }
  }
};
</script>
<style scoped>
@import "../assets/css/courseware.css";
.box[data-v-0cc0affb] {
  padding-top: 0.88rem !important;
}
.red {
  color: #ff0000;
  font-size: 0.24rem;
}
</style>


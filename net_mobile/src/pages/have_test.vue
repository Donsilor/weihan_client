<template>
<div>
    <hfold :idx='5' :title="have_test_details.title"></hfold>
  <div class="box">
    <div class="content_list" v-for="(ls,index) in lists" :value="index" :key="index">
      <div class="list-title" @click="onSlotClick(index)">
        <h4>{{ls.name}}</h4>
      </div>
      <ul class="test">
        <li
        class="kind clf"
        v-for="(item,idx) in ls.items"
        :value="idx"
        :key="idx"
        @click="onGotoClick(index,idx)"
        v-show="ls.isShow"
        >
            <div class="c_title">{{item.name}}<span>得分：{{item.point}}分</span></div>
            <div class="clf">
              <span>总分:
                {{item.count}}
              </span>
              <span>限时
                {{item.time}}分钟
              </span>
              <span>
                {{item.datatime}}截止
              </span>
              <span>剩余{{item.residue}}次</span>
              <a href="#" class="edit">
                <i class="iconfont icon-tianxie"></i>
              </a>
            </div>
        </li>
      </ul>
    </div>
    <div class="info" v-show="isShow">没有更多了</div>
  </div>
</div>  
</template>

<script>
import hfold from "../components/hfold";
export default {
  name: "have_test",
  components: {
    hfold
  },
  mounted() {},
  data() {
    return {
        have_test_details:{
            title:'已参加考试'
        },
      lists: [
        {
          name: "焊工理论考试",
          isShow: true,
          items: [
            {
              name: "初级焊工理论考试",
              // tag: "smaw",
              count: 136,
              point: 40,
              time: 30,
              datatime:'11月30',
              residue: 2,
              status: 1 //1已考，0未考
            },
            {
              name: "中级焊工理论考试",
              // tag: "smaw",
              count: 136,
              point: 80,
              time: 30,
              datatime:'11月30',
              residue: 2,
              status: 0 //1已考，0未考
            },
                        {
              name: "中级焊工理论考试",
              // tag: "smaw",
              count: 136,
              point: 80,
              time: 30,
              datatime:'11月30',
              residue: 2,
              status: 0 //1已考，0未考
            }
          ]
        },
        {
          name: "焊工理论考试",
          isShow: false,
          items: [
            {
              name: "初级焊工理论考试",
              tag: "smaw",
              count: 136,
              point: 80,
              time: 30,
              all: 100,
              status: 1 //1已考，0未考
            },
            {
              name: "中级焊工理论考试",
              tag: "smaw",
              count: 136,
              point: 80,
              time: 30,
              all: 100,
              status: 0 //1已考，0未考
            },
            {
              name: "高级焊工理论考试",
              tag: "smaw",
              count: 136,
              point: 80,
              time: 30,
              all: 100,
              status: 0 //1已考，0未考
            }
          ]
        }
      ],
      isShow: true
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
    }
  }
};
</script>
// scoped控制样式在本页中有效，不加就变全局了
<style scoped>
@import "../assets/css/courseware.css";
@import "../assets/css/have_text.css";
.box[data-v-7e458eb5] {
    padding-top: .88rem;
}
</style>


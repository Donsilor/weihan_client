<template>
    <div class="mine">
        <myselect></myselect>

        <div class="content_list" v-for="(ls,index) in lists" :value="index" :key="index">
            <div class="title" @click="onSlotClick(index)">
                <h4>{{ls.name}}</h4>
            </div>
            <div class="kind" v-for="(item,idx) in ls.items" :value="idx" :key="idx" @click="onGotoClick(index,idx)" v-show="ls.isShow">
                <div class="video_box">
                    <video width="50" height="50" :src="item.src">
                    </video>
                </div>
                <div class="video_title">
                    <div>{{item.name}}</div>
                    <div><span>标签：</span>{{item.tag}}</div>
                    <div>共计{{item.count}}课时</div>
                </div>
            </div>
        </div>
        <div class="without" v-show="isShow">
            没有更多了
        </div>
    </div>
</template>

<script>
import myselect from "../components/myselect";
export default {
    name: "videos",
    components: {
        myselect
    },
    data() {
        return {
            lists: [
                {
                    name: "焊条电弧焊",
                    isShow:true,
                    items: [
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        }
                    ]
                },
                {
                    name: "埋弧焊",
                    isShow:false,
                    items: [
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        }
                    ]
                },
                {
                    name: "基础知识",
                    isShow:false,
                    items: [
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        }
                    ]
                },
                {
                    name: "缺陷预测",
                    isShow:false,
                    items: [
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            count: 136,
                            src: ''
                        }
                    ]
                }
            ],
            isShow:false
        };
    },
    methods: {
        // 点击事件
        onGotoClick(index, idx) {
            console.log(this.lists[index].items[idx].name, index, idx);
        },
        // 折叠事件
        onSlotClick(index){
            this.lists[index].isShow=!this.lists[index].isShow;
        }
    }
};
</script>

<style scoped>
@import "../assets/css/courseware.css";
@import "../assets/css/video.css";
</style>

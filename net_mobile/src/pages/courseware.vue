<template>
    <div class="box">
        <myselect></myselect>
        <div class="content_list" v-for="(ls,index) in lists" :value="index" :key="index">
            <div class="list-title" @click="onSlotClick(index)">
                <h4>{{ls.name}}</h4>
            </div>
            <div class="kind clf" v-for="(item,idx) in ls.items" :value="idx" :key="idx" @click="onGotoClick(index,idx)" v-show="ls.isShow">
                <router-link to="/courseware_details" class="clf">
                <div class="fl">
                    <div class="name">{{item.name}}</div>
                    <div class="class_hour">
                        <span>标签：{{item.tag}}</span>
                    </div>
                </div>
                <div class="fr" :class="{'blue':item.progress<=75&&item.progress>25,'red':item.progress>75}">
                    <div class="circle">
                        {{item.progress}}%
                    </div>
                    <a href="#" class="learn">{{item.learn}}</a>
                </div>
                </router-link>
            </div>
        </div>
        <div class="info" v-show="isShow">
            没有更多了
        </div>
    </div>
</template>

<script>
import myselect from "../components/myselect";
export default {
    name: "courseware",
    components: {
        myselect
    },
    mounted() {},
    data() {
        return {
            lists: [
                {
                    name: "课件列表",
                    isShow:true,
                    items: [
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            // count: 136,
                            learn:'未学习',
                            progress: 0
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            // count: 136,
                            learn:'学习中',
                            progress: 75
                        },{
                            name: "手工电弧焊",
                            tag: "smaw",
                            // count: 136,
                            learn:'学习中',
                            progress: 75
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            // count: 136,
                            learn:'学习中',
                            progress: 75
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            // count: 136,
                            learn:'学习中',
                            progress: 75
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            // count: 136,
                            learn:'学习中',
                            progress: 75
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw",
                            // count: 136,
                            learn:'已学习',
                            progress: 100
                        }
                    ]
                }
                // {
                //     name: "埋弧焊",
                //     isShow:false,
                //     items: [
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'未学习',
                //             progress: 0
                //         },
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'学习中',
                //             progress: 75
                //         },
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'已学习',
                //             progress: 100
                //         }
                //     ]
                // },
                // {
                //     name: "基础知识",
                //     isShow:false,
                //     items: [
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'未学习',
                //             progress: 0
                //         },
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'学习中',
                //             progress: 75
                //         },
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'已学习',
                //             progress: 100
                //         }
                //     ]
                // },
                // {
                //     name: "缺陷预测",
                //     isShow:false,
                //     items: [
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'未学习',
                //             progress: 0
                //         },
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'学习中',
                //             progress: 75
                //         },
                //         {
                //             name: "手工电弧焊",
                //             tag: "smaw",
                //             // count: 136,
                //             learn:'已学习',
                //             progress: 100
                //         }
                //     ]
                // }
            ],
            isShow:true
        };
    },
    methods: {
        // 单条点击事件
        onGotoClick(index, idx) {
            console.log(this.lists[index].items[idx].name, index, idx);
        },
        // 折叠展开事件
        onSlotClick(index){
            this.lists[index].isShow=!this.lists[index].isShow;
        }
    }
};
</script>
<style scoped>
@import "../assets/css/courseware.css";
</style>


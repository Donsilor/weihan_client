<template>
    <div class="mine">
        <myselect></myselect>
        <div class="content_list" v-for="(ls,index) in lists" :value="index" :key="index">
            <div class="title" @click="onSlotClick(index)">
                <h4>{{ls.name}}</h4>
            </div>
            <div class="kind clf" v-for="(item,idx) in ls.items" :value="idx" :key="idx" @click="onGotoClick(index,idx)" v-show="ls.isShow">
                <div class="fl kind_child1">
                    <div class="name">{{item.name}}</div>
                    <div class="class_hour">
                        <span>标签：{{item.tag}}</span>
                        <span>共{{item.count}}题</span>
                    </div>
                </div>
                <div class="fl kind_child2">
                    <div :class="{'red':item.point<60}">得分：{{item.point}}分</div>
                    <div>限时{{item.time}}分钟</div>
                </div>
                <div class="fl kind_child3">
                    <span>总分{{item.all}}</span>
                </div>
                <div class="fr kind_child4" :class="{'kind_child4_add':item.status==0}"></div>
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
    name: "tests",
    components: {
        myselect
    },
    mounted() {},
    data() {
        return {
            lists: [
                {
                    name: "焊工理论考试",
                    isShow: true,
                    items: [
                        {
                            name: "初级焊工理论考试",
                            tag: "smaw",
                            count: 136,
                            point: 40,
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
                            status: 1 //1已考，0未考
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
            isShow: false
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
.mine {
    margin-top: 8.3rem;
}
.kind_child4_add {
    background-image: url(../assets/images/write.png) !important;
}
</style>


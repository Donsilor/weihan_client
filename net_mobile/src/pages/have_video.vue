<template>
<div>
    <hfold :idx='5' :title="have_courseware_details.title"></hfold>
    <div class="box">
        <div class="content_list" v-for="(ls,index) in lists" :value="index" :key="index">
            <div class="list-title" @click="onSlotClick(index)">
                <h4>{{ls.title1}}>{{ls.title2}}>{{ls.title3}}</h4>
            </div>
            <div class="kind" v-for="(item,idx) in ls.items" :value="idx" :key="idx" @click="onGotoClick(index,idx)" v-show="ls.isShow">
                <div class="video_box">
                    <video width="50" height="50" :src="item.src">
                    </video>
                </div>
                <div class="video_title">
                    <div>{{item.name}}</div>
                    <div><span>标签：</span>{{item.tag}}</div>
                    <!-- <div>共计{{item.count}}课时</div> -->
                </div>
            </div>
        </div>
        <div class="info" v-show="isShow">
            没有更多了
        </div>
    </div>
</div>    
</template>

<script>
import hfold from "../components/hfold";
export default {
    name: "have_videos",
    components: {
        hfold
    },
    data() {
        return {
            have_courseware_details: {
                title:'已观看视频'
            },
            lists: [
                {
                    title1:'title1',
                    title2:'title2',
                    title3:'title3',
                    isShow:true,
                    items: [
                        {
                            name: "手工电弧焊",
                            tag: "smaw"
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw"
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw"
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw"
                        }
                    ]
                },
                {
                    title1:'title1',
                    title2:'title2',
                    title3:'title3',
                    isShow:false,
                    items: [
                        {
                            name: "手工电弧焊",
                            tag: "smaw"
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw"
                        },
                        {
                            name: "手工电弧焊",
                            tag: "smaw"
                        }
                    ]
                }
            ],
            isShow:true
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
.box[data-v-3a521b30] {
    padding-top: .88rem;
}
</style>

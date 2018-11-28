<template>
    <div>
        <br><br><br>
        <div class="banner"><img src="../assets/images/banner_1.jpg" alt=""></div>
        <!--内容-->
        <div class="content">
            <!--课程推荐-->
            <div class="courseware">
                <h6 class="subtitle">课件（推荐）</h6>
                <ul>
                    <li v-for="(cs,index) in coursewares" :value="index" :key="index">
                        <a href="javascript:" @click="onCoursewareClick(index)">
                            <div class="c_title">{{cs.title}}</div>
                            <div>
                                <span>标签：<em>{{cs.tag}}</em></span>
                                <span>共计<i>{{cs.count}}</i>课时</span>
                                <span>{{cs.level}}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <!--视屏推荐-->
            <div class="video">
                <h6 class="subtitle">视屏（推荐）</h6>
                <ul>
                    <li v-for="(vi,index) in videos" :value="index" :key="index">
                        <a href="javascript:" @click="onVideoClick(index)">
                            <div><video :src="vi.videosrc"></video></div>
                            <div>
                                <div class="c_title">{{vi.title}}</div>
                                <span>标签：<em>{{vi.tag}}</em></span>
                                <span>共计<i>{{vi.count}}</i>课时</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <!--考试推荐-->
            <div class="exam">
                <h6 class="subtitle">考试（推荐）</h6>
                <ul>
                    <li v-for="(exam,index) in exams" :value="index" :key="index">
                        <a href="javascript:" @click="onExamsClick(index)">
                            <div class="c_title">{{exam.title}}</div>
                            <div>
                                <span>标签：<em>{{exam.tag}}</em></span>
                                <span>共计<i>{{exam.count}}</i>课时</span>
                                <span>限时<i>{{exam.time}}</i>分钟</span>
                                <span></span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <!--模拟演示-->
            <div class="simulator">
                <h6 class="subtitle">模拟器演示</h6>
                <ul>
                    <li v-for="(sls,index) in simulators" :value="index" :key="index">
                        <a href="javascript:" @click="onSimulatorsClick(index)">
                            <span>{{sls.title}}</span>
                            <span>{{sls.info}}</span>
                            <span>{{sls.tag}}</span>
                            <span v-if="sls.status==2" class="show">演示中</span>
                            <span v-if="sls.status==1" class="online">在线</span>
                            <span v-if="sls.status==0" class="Offline">离线</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="info">没有更多了</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    mounted() {
    },
    data() {
        return {
            // 课件
            coursewares: [
                {
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    count: 136,
                    level: "初级"
                },
                {
                    title: "手工焊条电弧焊",
                    tag: "smaw",
                    count: 134,
                    level: "中级"
                },
                {
                    title: "手工焊条电弧焊",
                    tag: "smaw",
                    count: 135,
                    level: "高级"
                }
            ],
            // 视频
            videos: [
                {
                    videosrc: "",
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    count: 136
                },
                {
                    videosrc: "",
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    count: 136
                },
                {
                    videosrc: "",
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    count: 136
                }
            ],
            // 考试
            exams: [
                {
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    count: 136,
                    time: 30
                },
                {
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    count: 136,
                    time: 30
                },
                {
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    count: 136,
                    time: 30
                }
            ],
            // 模拟演示
            simulators: [
                {
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    info: "啊啊啊",
                    status: 2//2演示中，1在线，0闲置
                },
                {
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    info: "啊啊啊",
                    status: 1
                },
                {
                    title: "手工焊条电弧焊",
                    tag: "SMAW",
                    info: "啊啊啊",
                    status: 0
                }
            ]
        };
    },
    methods: {
        // 课件点击事件
        onCoursewareClick(index) {
            let curdata = this.coursewares[index];
            console.log("课件" + index);
        },
        // 视频点击事件
        onVideoClick(index) {
            let curData = this.videos[index];
            console.log("视频" + index);
        },
        // 考试
        onExamsClick(index){
            console.log("考试" + index);
        },
        // 模拟
        onSimulatorsClick(index){
            console.log("模拟" + index);
        }
    }
};
</script>

<style scoped>
@import "../assets/css/index.css";
</style>

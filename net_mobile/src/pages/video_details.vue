<template>
    <div>
        <!-- 文件头 -->
        <hfold :idx='5' :title="video_info.title"></hfold>
        <div class="box clf">
            <div class="banner">
                视频
            </div>
            <!--视频-->
            <div class="introduction clf">
                <p class="title">简介</p>
                <span>演示：{{video_info.author}}</span>
                <span>焊接类型：{{video_info.tag}}</span>
                <span>接头类型：{{video_info.headType}}</span>
                <span>母材间隙：{{video_info.mGap}}</span>
                <a href="javascript:" class="expansion">展开更多</a>
            </div>
            <!--简介-->
            <div class="review clf">
                <p class="title fl">留言</p>
                <p class="my_more fr">
                    <a href="#" class="my">我的</a>
                    <span>/</span>
                    <a href="#" class="more">更多</a>
                </p>
                <div class="review-content-box">
                    <textarea cols="30" rows="10"></textarea>
                    <a href="#" class="review-btn fr">发表留言</a>
                    <div class="review-content clf">
                        <a href="#" class="user-image fl"></a>
                        <div class="cont-right clf fr">
                            <p class="user-name">张三</p>
                            <p class="question">TIG的设备包含哪些？</p>
                            <div class="reply">
                                <a href="#" class="reply-username">张起灵：</a>
                                <span>TIG的设备包含：TIG焊枪、焊丝、自动送丝 机、焊机、电源、气瓶</span>
                                <span class="reply-time">2018-11-27</span>
                            </div>
                            <div class="review-bot"><span class="review-time fl">2018-11-26</span><a href="#" class="review-icon fr"></a></div>
                        </div>
                    </div>
                    <div class="review-content clf">
                        <a href="#" class="user-image fl"></a>
                        <div class="cont-right clf fr">
                            <p class="user-name">张三</p>
                            <p class="question">TIG的设备包含哪些？</p>
                            <div class="review-bot"><span class="review-time fl">2018-11-26</span><a href="#" class="review-icon fr"></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="nomore">没有更多了</p>
        </div>
    </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
    name: "video_details",
    components: {
        hflod
    },
    mounted() {},
    data() {
        return {
            video_info: {
                title: '虚拟焊接',
                author:'张起灵',
                tag:'smaw',
                headType:'平板类型',
                mGap:'3mm',
            },
            // 我的留言
            my_comment:null,
            // 评论
            comment:[]
        };
    },
    methods: {
        backClick() {
            if (window.history.length <= 1) {
                this.$router.push("/");
                return false;
            } else {
                this.$router.go(-1);
            }
        }
    }
};
</script>
<style scoped>
@import "../assets/css/mybase.css";
@import "../assets/css/videodetails.css";
</style>
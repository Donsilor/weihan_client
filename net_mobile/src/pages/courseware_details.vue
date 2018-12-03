<template>
    <div>
        <!-- 文件头 -->
        <hfold :idx='5' :title="courseware_details.title"></hfold>
        <div class="box clf">
            <div class="banner">
                <div><i class="iconfont icon-PDF"></i>手工焊条电弧焊.PDF</div>
                <span>(点击上方PDF文件显示全屏)</span>
            </div>
            <!--视频-->
            <div class="introduction clf">
                <p class="title">简介</p>
                <span>演示：{{courseware_details.author}}</span>
                <span>焊接类型：{{courseware_details.tag}}</span>
                <span>接头类型：{{courseware_details.headType}}</span>
                <span>母材间隙：{{courseware_details.mGap}}</span>
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
    name: "courseware_details",
    components: {
        hfold
    },
    mounted() {},
    data() {
        return {
            courseware_details: {
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
@import "../assets/css/base.css";
@import "../assets/css/videodetails.css";
.banner{
    height: 1.46rem;
    background:#fff;
    margin-bottom: .2rem;
    padding: .3rem
}
.banner div{
    font-size: .24rem;
    color: #37a4df;
    padding-bottom: .3rem
}
.banner div i{
    margin-right: .1rem
}
.banner span{
    display: block;
    font-size: .2rem;
    color: #999
}
</style>
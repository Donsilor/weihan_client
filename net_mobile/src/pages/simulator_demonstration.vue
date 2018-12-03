<template>
    <div>
        <!-- 文件头 -->
        <hfold :idx='5' :title="sidem_info.title"></hfold>
        <div class="box clf">
            <div class="banner">
                视频
            </div>
            <!--视频-->
            <div class="introduction clf">
                <p class="title">简介</p>
                <span>演示：{{sidem_info.author}}</span>
                <span>焊接类型：{{sidem_info.tag}}</span>
                <span>接头类型：{{sidem_info.headType}}</span>
                <span>母材间隙：{{sidem_info.mGap}}</span>
                <!-- <a href="javascript:" class="expansion">展开更多</a> -->
            </div>
        </div>
    </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
    name: "simulator_demonstration",
    components: {
        hfold
    },
    mounted() {},
    data() {
        return {
            sidem_info: {
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
</style>
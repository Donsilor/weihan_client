<template>
    <div class="header">
        <a href="javascript:" class="arrow" @click="backClick" v-show="idx>4"></a>
        <h5 class="title">{{idx>4?title:heads[idx]}}</h5>
        <a href="javascript:" class="message" @click="onMessageClick"></a>
    </div>
</template>

<script>
export default {
    name: "hfold",
    props: ["idx", "title"],
    data() {
        return {
            heads: ["虚拟焊接网络考试系统", "课件", "视频", "考试", "我的"]
        };
    },
    methods: {
        // 点击消息
        onMessageClick() {
            console.log("消息事件" + this.$glb.menu);
        },
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

<style>
.header {
    width: 100%;
    background-color: #37a4df;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
}
</style>



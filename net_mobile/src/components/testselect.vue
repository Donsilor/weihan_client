<template>
    <div class="search-wrap clf">
        <div class="top_box">
            <div class="search_box clf">
                <span><i class="iconfont icon-sousuo"></i></span>
                <input type="text" class="search-wrapbox" placeholder="请输入搜索内容" />
                <a href="#" class="search">搜索</a>
                <a class="filtrate" @click="onMenuClick()">筛选<i class="iconfont icon-zhankai"></i></a>
            </div>
            <!-- 条件选项 -->
            <div class="popups" v-show="showSelect">
                <div class="popups_kind" v-show="showSelect">
                    <div class="kind">模式
                        <div>
                            <span :class="{'on':diffed===idx}" v-for="(ite,idx) in diffs" :value="idx" :key="idx" @click="diffed=idx">{{ite}}</span>
                        </div>
                    </div>
                    <div class="kind">标签
                        <div>
                            <span :class="{'on':typeed===idx}" v-for="(ite,idx) in types" :value="idx" :key="idx" @click="typeed=idx">{{ite}}</span>
                        </div>
                    </div>
                    <div class="confirm clf">
                        <a href="#" class="fr" @click="sureSearch">确定</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="shade" v-show="showSelect"></div>

    </div>

</template>

<script>
export default {
    name: "testselect",
    mounted() {
        this.hideAll();
    },
    data() {
        return {
            showSelect: false,
            diffed: null,
            diffs: ["课后作业", "题库练习", "题库"],
            typeed: null,
            types: ["SMAW", "TIG"],
            sorted: 0,
            kinded: 0,
            curSel: -1
        };
    },
    methods: {
        // 显示隐藏
        onMenuClick(index) {
            this.showSelect = !this.showSelect
        },
        // 关闭所有
        hideAll() {
            this.showSelect = false;
        },
        // 确认条件事件
        sureSearch() {
            console.log(
                this.sorted,
                this.kinded,
                this.diffed,
                this.typeed
            );
            this.hideAll();
        }
    }
};
</script>

<style scoped>
@import "../assets/css/courseware.css";
@import "../assets/css/testselect.css";
</style>


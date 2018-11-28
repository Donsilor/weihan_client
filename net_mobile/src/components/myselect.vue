<template>
    <div>
        <div class="top_box">
            <div class="search_box">
                <span></span>
                <input type="text" placeholder="请输入搜索内容" />
                搜索
            </div>
            <!-- 条件目录 -->
            <div class="select">
                <div>
                    <span class="synthesize" @click="onMenuClick(1)">综合排序
                        <i :class="{'on':showSort}"></i>
                    </span>
                </div>
                <div class="middle_line" @click="onMenuClick(2)">
                    <span>课件类别
                        <i :class="{'on':showKind}"></i>
                    </span>
                </div>
                <div class="filtrate" @click="onMenuClick(3)">
                    <span>筛选
                        <i :class="{'on':showSelect}"></i>
                    </span>
                </div>
            </div>
            <!-- 条件选项 -->
            <div class="popups" v-show="showSort||showKind||showSelect">
                <div class="popups_filtrate" v-show="showSort">
                    <ul>
                        <li v-for="(item,index) in sorts" :value="index" :key="index" :class="{'on':sorted===index}" @click="sorted=index">{{item}}</li>
                    </ul>
                    <div class="confirm clf">
                        <span class="fr" @click="sureSearch">确定</span>
                    </div>
                </div>
                <div class="popups_synthesize clf" v-show="showKind">
                    <div class="fl">
                        <div class="fl option" v-for="(item,index) in kinds" :value="index" :key="index" :class="{'on':kinded===index}" @click="kinded=index">{{item}}</div>
                    </div>
                    <div class="fr">
                    </div>
                    <div class="confirm clf">
                        <span class="fr" @click="sureSearch">确定</span>
                    </div>
                </div>
                <div class="popups_kind" v-show="showSelect">
                    <div class="kind">难度
                        <div>
                            <span :class="{'on':diffed===idx}" v-for="(ite,idx) in diffs" :value="idx" :key="idx" @click="diffed=idx">{{ite}}</span>
                        </div>
                    </div>
                    <div class="kind">类型
                        <div>
                            <span :class="{'on':typeed===idx}" v-for="(ite,idx) in types" :value="idx" :key="idx" @click="typeed=idx">{{ite}}</span>
                        </div>
                    </div>
                    <div class="kind">状态
                        <div>
                            <span :class="{'on':statused===idx}" v-for="(ite,idx) in statuss" :value="idx" :key="idx" @click="statused=idx">{{ite}}</span>
                        </div>
                    </div>
                    <div class="confirm clf">
                        <span class="fr" @click="sureSearch">确定</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="shade" v-show="showSort||showKind||showSelect">
        </div>
    </div>

</template>

<script>
export default {
    name: "myselect",
    mounted() {
        this.hideAll();
    },
    data() {
        return {
            showSort: false,
            showKind: false,
            showSelect: false,
            sorts: ["综合排序", "排序1", "排序2", "排序3"],
            kinds: [
                "金属材料焊接（核心）",
                "熔化极气体保护焊",
                "焊接自动化技术与应用（核心）",
                "焊接生产管理（核心）",
                "韩信电工电子技术（基础）",
                "焊接方法与设备（核心）",
                "焊接结构生产（核心）",
                "焊接质量检验（核心）",
                "焊接制图与试图（基础）"
            ],
            diffed: null,
            diffs: ["初级", "中级", "高级"],
            typeed: null,
            types: ["焊接", "机器人"],
            statused: null,
            statuss: ["未学习", "学习中", "已学习"],
            sorted: 0,
            kinded: 0,
            curSel: -1
        };
    },
    methods: {
        //条目点击
        onMenuClick(index) {
            console.log("查询条目点击" + index);
            if (this.curSel == index) {
                this.curSel = -1;
            } else {
                this.hideAll();
                this.curSel = index;
            }
            this.showAndHide(index);
        },
        // 显示隐藏
        showAndHide(index) {
            index == 1
                ? (this.showSort = !this.showSort)
                : index == 2
                    ? (this.showKind = !this.showKind)
                    : (this.showSelect = !this.showSelect);
        },
        // 关闭所有
        hideAll() {
            this.showSort = this.showKind = this.showSelect = false;
        },
        // 确认条件事件
        sureSearch() {
            console.log(
                this.sorted,
                this.kinded,
                this.diffed,
                this.typeed,
                this.statused
            );
            this.hideAll();
        }
    }
};
</script>

<style scoped>
@import "../assets/css/courseware.css";
</style>


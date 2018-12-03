<template>
    <div class="search-wrap clf">
        <div class="top_box">
            <div class="search_box clf">
                <span><i class="iconfont icon-sousuo"></i></span>
                <input type="text" class="search-wrapbox" placeholder="请输入搜索内容" />
                <a href="#" class="search">搜索</a>
            </div>
            <!-- 条件目录 -->
            <div class="select" >
                <div>
                    <a class="synthesize" @click="onMenuClick(1)">一级分类
                        <span :class="{'on':showSort}">
                            <i class="iconfont icon-zhankai"></i>
                        </span>
                    </a>
                </div>
                <div class="middle_line" @click="onMenuClick(2)">
                    <a>二级分类
                        <span :class="{'on':showKind}">
                            <i class="iconfont icon-zhankai"></i>
                        </span>
                    </a>
                </div>
                <div class="middle_line" @click="onMenuClick(3)">
                    <a>三级分类
                        <span :class="{'on':showConditions3}">
                            <i class="iconfont icon-zhankai"></i>
                        </span>
                    </a>
                </div>
                <div class="filtrate" @click="onMenuClick(4)">
                    <a>筛选
                        <span :class="{'on':showSelect}">
                            <i class="iconfont icon-zhankai"></i>
                        </span>
                    </a>
                </div>
            </div>
            <!-- 条件选项 -->
            <div class="popups" v-show="showSort||showKind||showConditions3||showSelect">
                <!-- <div class="popups_filtrate" v-show="showSort">
                    <ul>
                        <li v-for="(item,index) in sorts" :value="index" :key="index" :class="{'on':sorted===index}" @click="sorted=index">{{item}}</li>
                    </ul>
                    <div class="confirm clf">
                        <span class="fr" @click="sureSearch">确定</span>
                    </div> 
                </div> -->
                <div class="popups_synthesize clf" v-show="showSort">
                    <div class="fl">
                        <div class="fl option" v-for="(item,index) in conditions1" :value="index" :key="index" :class="{'on':kinded===index}" @click="kinded=index">{{item}}</div>
                    </div>
                    <div class="fr">
                    </div>
                    <!-- <div class="confirm clf">
                        <span class="fr" @click="sureSearch">确定</span>
                    </div> -->
                </div>

                <div class="popups_synthesize clf" v-show="showKind">
                    <div class="fl">
                        <div class="fl option" v-for="(item,index) in conditions2" :value="index" :key="index" :class="{'on':kinded===index}" @click="kinded=index">{{item}}</div>
                    </div>
                    <div class="fr">
                    </div>
                    <!-- <div class="confirm clf">
                        <span class="fr" @click="sureSearch">确定</span>
                    </div> -->
                </div>

                 <div class="popups_synthesize clf" v-show="showConditions3">
                    <div class="fl">
                        <div class="fl option" v-for="(item,index) in conditions3" :value="index" :key="index" :class="{'on':kinded===index}" @click="kinded=index">{{item}}</div>
                    </div>
                    <div class="fr">
                    </div>
                    <!-- <div class="confirm clf">
                        <span class="fr" @click="sureSearch">确定</span>
                    </div> -->
                </div>

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
                    <!-- <div class="kind">状态
                        <div>
                            <span :class="{'on':statused===idx}" v-for="(ite,idx) in statuss" :value="idx" :key="idx" @click="statused=idx">{{ite}}</span>
                        </div>
                    </div> -->
                    <div class="confirm clf">
                        <a href="#" class="fr" @click="sureSearch">确定</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="shade" v-show="showSort||showKind||showConditions3||showSelect">
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
            showConditions3:false,
            sorts: ["综合排序", "排序1", "排序2", "排序3"],
            conditions1: [
                "金属材料焊接（核心）",
                "熔化极气体保护焊",
                "焊接自动化技术与应用（核心）",
                "焊接生产管理（核心）",
                "韩信电工电子技术（基础）",
                "焊接方法与设备（核心）",
                "焊接制图与试图（基础）"
            ],
            conditions2: [
                "金属材料焊接",
                "熔化极气体保护焊",
                "韩信电工电子技术（基础）",
                "焊接方法与设备（核心）",
                "焊接结构生产（核心）",
                "焊接质量检验（核心）",
                "我的"
            ],
            conditions3: [
                "金属材料焊接",
                "熔化极气体保护焊",
                "焊接自动化技术与应用（核心）",
                "焊接生产管理（核心）",
                "韩信电工电子技术（基础）",
                "焊接方法与设备（核心）",
                "焊接结构生产（核心）",
                "焊接质量检验（核心）",
                "我的"
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
                    : index==3
                        ?(this.showConditions3= !this.showConditions3)
                         : (this.showSelect = !this.showSelect);
        },
        // 关闭所有
        hideAll() {
            this.showSort = this.showKind = this.showSelect = this.showConditions3 = false;
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


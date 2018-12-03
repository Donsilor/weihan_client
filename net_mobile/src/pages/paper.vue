<template>
    <div>
        <hfold :idx='5' :title="paper_details.title"></hfold>
        <div class="box">
            <div class="single-choice">一、单选题(每道题2分)</div>
            <div class="question">（1）（）是锅炉的主要参数之一？</div>
            <div class="answer">
                <ul class="clf">
                    <li><a href="#">A</a><span>流量</span></li>
                    <li><a href="#">B</a><span>介质</span></li>
                    <li><a href="#">C</a><span>直径</span></li>
                    <li><a href="#">D</a><span>温度</span></li>
                </ul>
            </div>
            <div class="arrow clf">
                <a href="#" class="pre"></a>
                <a href="#" class="next"></a>
            </div>
            <div class="paper-bot clf">
                <div class="fl">
                    <span><i class="iconfont icon-daojishi"></i>30:00</span>
                    <router-link to="/submit">提交试卷</router-link>
                </div>
                <div class="fr">
                    <span>1/136</span>
                    <a href="#" class="clf">
                        <i class="iconfont icon-tishu"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
    name: "paper",
    components: {
        hfold
    },
    mounted() {},
    data() {
        return {
            paper_details: {
                title: '试卷'
            },
            paper:{

            }
        };
    },
    methods: {
    }
};
</script>

<style scoped>
@import '../assets/css/paper';
</style>
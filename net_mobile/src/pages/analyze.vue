<template>
    <div class="app">
        <hfold></hfold>
        <div class="question_list">
            <div class="question">
                3. <span>( 单选题 )</span>（ ）是锅炉的主要参数之一。
            </div>
            <ul>
                <li>
                    <span>A</span>流量
                </li>
                <li class="wrong">
                    <span>B</span>介质
                </li>
                <li>
                    <span>C</span>直径
                </li>
                <li class="right">
                    <span>D</span>温度
                </li>
            </ul>
            <div class="answer_pop">
                <div>
                    正确答案： D
                </div>
                <div>
                    <span>解析： </span>温度是锅炉的主要参数之一。
                </div>
            </div>
        </div>
        <div class="question_list">
            <div class="question">
                7. <span>( 单选题 )</span>（ ）是锅炉的主要参数之一。
            </div>
            <ul>
                <li>
                    <span>A</span>流量
                </li>
                <li class="wrong">
                    <span>B</span>介质
                </li>
                <li>
                    <span>C</span>直径
                </li>
                <li class="right">
                    <span>D</span>温度
                </li>
            </ul>
            <div class="answer_pop">
                <div>
                    正确答案： D
                </div>
                <div>
                    <span>解析： </span>温度是锅炉的主要参数之一。
                </div>
            </div>
        </div>
        <div class="question_list">
            <div class="question">
                10. <span>( 单选题 )</span>（ ）是锅炉的主要参数之一。
            </div>
            <ul>
                <li>
                    <span>A</span>流量
                </li>
                <li class="wrong">
                    <span>B</span>介质
                </li>
                <li>
                    <span>C</span>直径
                </li>
                <li class="right">
                    <span>D</span>温度
                </li>
            </ul>
            <div class="answer_pop">
                <div>
                    正确答案： D
                </div>
                <div>
                    <span>解析： </span>温度是锅炉的主要参数之一。
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
    name: "analyze",
    mounted(){
        console.log('首先加载')
        this.conversionRem();
    },
    data() {
        return {
            // questions: [
            //     "您的学号（或工号1）是？",
            //     "您的学号（或工号2）是？",
            //     "您的学号（或工号3）是？",
            //     "您的学号（或工号4）是？"
            // ],
            // question: null,
            // answer: null,
            // myname: null,
            // account: null
        };
    },
    methods: {
        // 修改密码方法一
        // changePass1(){

        // },
        // 修改密码方法二
        // changePass2(){

        // }
        conversionRem(){
           (function(doc, win) {
                var docEl = doc.documentElement,
                    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function() {
                        var clientWidth = docEl.clientWidth;
                        if(!clientWidth) return;
                        if(clientWidth >= 750) {
                            docEl.style.fontSize = '100px';
                        } else {
                            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                        }
                    };
                if(!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
            })(document, window);
            //动态设置rem
        }
    },
    components:{
        hfold
    }
};
</script>
<style scoped>
@import "../assets/css/analyze.css";

.header{
    height: 1rem;
    padding: 0;
}
.app{
    padding-top: 1rem;
}
</style>
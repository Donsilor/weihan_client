<template>
   <div class="app">
        <div class="header">
            <a href="javascript:void(0)"></a>
            <h5 class="title">提交报告</h5>
        </div>
        <div class="score">
            <div class="score_num">
                <p>本次得分</p>
                <span>98</span>
            </div>
            <ul class="statistics clf">
                <li>共计<span>30</span>题</li>
                <li>正确<span>20</span>题</li>
                <li>错误<span>9</span>题</li>
                <li>漏答<span>1</span>题</li>
            </ul>
        </div>
        <div class="answer_sheet">
            <div class="title">
                <h4 class="name">全部题目</h4>
                <span class="gary fr"><i></i>&nbsp;&nbsp;未作答</span>
                <span class="red fr"><i></i>&nbsp;&nbsp;错误</span>
                <span class="blue fr"><i></i>&nbsp;&nbsp;正确</span>
            </div>
            <div class="answer_content">
                <ul>
                    <li>
                        <span class="gary">1</span>
                        <span class="blue">2</span>
                        <span class="red">3</span>
                        <span class="blue">4</span>
                        <span class="red">5</span>
                        <span class="blue">6</span>
                        <span class="red">7</span>
                        <span class="blue">8</span>
                    </li>
                    <li>
                        <span class="red">9</span>
                        <span class="blue">10</span>
                        <span class="red">11</span>
                        <span class="blue">12</span>
                        <span class="red">13</span>
                        <span class="blue">14</span>
                        <span class="red">15</span>
                        <span class="blue">16</span>
                    </li>
                    <li>
                        <span class="red">17</span>
                        <span class="blue">18</span>
                        <span class="red">19</span>
                        <span class="blue">20</span>
                        <span class="red">21</span>
                        <span class="blue">22</span>
                        <span class="red">23</span>
                        <span class="blue">24</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <a href="analyze.html">查看试卷分析</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "quesition_bank",
    data() {
        return {};
    },
    mounted(){
        this.conversionRem();
    },
    methods: {
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
    }
};
</script>

<style scoped>
@import "../assets/css/mybase.css";
@import "../assets/css/submit.css";
</style>

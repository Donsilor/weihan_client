<template>
   <div class="app">
        <div class="question">
            1. <span>( 单选题 )</span>（ ）是锅炉的主要参数之一。
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
        <div class="pop">
            <div class="answer_sheet">
                <div class="title">
                    <h4 class="name">初级焊工认证理论题库</h4>
                    <span class="red fr"><i></i>&nbsp;&nbsp;错误</span>
                    <span class="blue fr"><i></i>&nbsp;&nbsp;正确</span>
                </div>
                <div class="answer_content">
                    <ul>
                        <li>
                            <span class="red">1</span>
                            <span class="blue">2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                        </li>
                        <li>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span>12</span>
                            <span>13</span>
                            <span>14</span>
                            <span>15</span>
                            <span>16</span>
                        </li>
                        <li>
                            <span>17</span>
                            <span>18</span>
                            <span>19</span>
                            <span>20</span>
                            <span>21</span>
                            <span>22</span>
                            <span>23</span>
                            <span>24</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="answer_pop">
            <div>
                正确答案： D
            </div>
            <div>
                <span>解析： </span>温度是锅炉的主要参数之一。
            </div>
        </div>
        <div class="answer clf">
            <div class="fl"><i class="icon iconfont icon-daan"></i>&nbsp;答案</div>
            <div class="fr"><i class="icon iconfont icon-tishu"></i>1/136</div>
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
@import "../assets/css/question_bank.css";
</style>

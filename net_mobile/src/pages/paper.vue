<template>
    <div>
        <hfold :idx='5' :title="paper_details.title"></hfold>
        <div class="box">
            <div class="single-choice">一、单选题(每道题2分)</div>
            <div class="subject">
                <ul class="clf">
                    <li>
                        <p class="question">（1）（）是锅炉的主要参数之一？</p>
                        <div class="clf">
                            <p><a href="#">A</a><span>流量</span></p>
                            <p><a href="#" class="check">B</a><span>介质</span></p>
                            <p><a href="#">C</a><span>直径</span></p>
                            <p><a href="#">D</a><span>温度</span></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="arrow clf">
                <a href="#" class="pre"><i class="iconfont icon-xiayiti"></i></a>
                <a href="#" class="next"><i class="iconfont icon-xiayiti"></i></a>
            </div>
            <div class="paper-bot clf">
                <div class="fl">
                    <span><i class="iconfont icon-daojishi"></i>{{this.minutes}}:{{this.seconds}}0</span>
                    <a href="#" @click="mes()">提交试卷</a>
                </div>
                <div class="fr" @click="answerSheetShow = !answerSheetShow">
                    <span>1/136</span>
                    <a href="#" class="clf">
                        <i class="iconfont icon-tishu"></i>
                    </a>
                </div>
            </div>
            <div class="pop" v-if="answerSheetShow">
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
        </div>
    </div>
</template>

<script>
import hfold from "../components/hfold";
import { MessageBox } from 'mint-ui';

export default {
    name: "paper",
    components: {
        hfold
    },
    mounted() {
    },
    data() {
        return {
            minutes:30,
            seconds:0,
            answerSheetShow: false,
            paper_details: {
                title:'试卷' 
            }

        };
    },
    methods: {

        mes(){
            MessageBox.confirm('', {
            message: '你还有135题没做,确认提交试卷吗？',
            title: '',
            showConfirmButton:true
             }).then(action => {
                this.$router.push({name: 'submit'});
                console.log("模拟");
            }).catch(() => {

                });
        }
        //  num:function (n) {
        //         return n<10 ? "0" + n : "" + n
        //     },
            // add:function () {
            //     var _this = this;
            //     var time = window.setInterval(function () {

            //         if (_this.seconds == 0 && _this.minutes != 0) {
            //             _this.seconds = 59;
            //             _this.minutes -= 1; 
            //         }else if(_this.minutes == 0 && _this.seconds == 0){
            //             _this.seconds = 0;
            //             window.clearInterval(time);
            //             alert('时间到')
            //         }else{
            //             _this.seconds -= 1 
            //         }

            //     },1000);
            // }
            }
            // watch:{
            //     second:{
            //         handler(newVal){
            //             this.num(newVal)
            //         }
            //     },
            //     minute:{
            //         handler(newVal){
            //             this.num(newVal)
            //         }
            //     }
            // },
            // computed:{
            //     second:function () {
            //         return this.num(this.seconds)
            //     },
            //     minute:function () {
            //         return this.num(this.minutes)
            //     }
            // } 
    
};
</script>

<style scoped>
@import '../assets/css/paper';
</style>
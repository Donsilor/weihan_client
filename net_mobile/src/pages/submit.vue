<template>
    <div>
        <hfold :idx='5' :title="submit_details.title"></hfold>
        <div class="box">
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
	<div class="sub-title clf">
		<p class="name">全部题目</p>
		<span class="gary fr"><i></i>&nbsp;&nbsp;未作答</span>
		<span class="red fr"><i></i>&nbsp;&nbsp;错误</span>
		<span class="blue fr"><i></i>&nbsp;&nbsp;正确</span>
	</div>
	<div class="answer_content clf">
		<ul>
			<li>
				<p class="answer-title">一、单选题</p>
				<div>
					<span class="gary">1</span>
					<span class="blue">2</span>
					<span class="red">3</span>
					<span class="blue">4</span>
					<span class="red">5</span>
					<span class="blue">6</span>
					<span class="red">7</span>
					<span class="blue">8</span>
					<span class="red">9</span>
					<span class="blue">10</span>
					<span class="red">11</span>
					<span class="blue">12</span>
					<span class="red">13</span>
					<span class="blue">14</span>
					<span class="red">15</span>
					<span class="blue">16</span>
				</div>
			</li>
			<li>
				<p class="answer-title">二、判断题</p>
				<div>
					<span class="gary">1</span>
					<span class="blue">2</span>
					<span class="red">3</span>
					<span class="blue">4</span>
					<span class="red">5</span>
					<span class="blue">6</span>
					<span class="red">7</span>
					<span class="blue">8</span>
					<span class="red">9</span>
					<span class="blue">10</span>
					<span class="red">11</span>
					<span class="blue">12</span>
					<span class="red">13</span>
				</div>
			</li>
		</ul>
	</div>
</div>
<div class="submit-footer">
	<router-link to="/analyze">查看试卷分析</router-link>
</div>
        </div>
    </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
    name: "submit",
    components: {
        hfold
    },
    mounted() {},
    data() {
        return {
            submit_details: {
                title: '提交报告'
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
@import '../assets/css/submit';
</style>
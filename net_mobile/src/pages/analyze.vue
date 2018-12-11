<template>
    <div>
        <hfold :idx='5' :title="analyze_details.title"></hfold>
        <div class="box">
            <div class="content">

	<div class="question_list" v-for="(item,index) in analyzes" :value="index" :key="index">
		<div class="question">
			{{item.qid}}. <span>( {{item.topictype}})</span>{{item.question}}
		</div>
		<ul>
			<li>
				<span>A</span>{{item.tab_a}}
			</li>
			<li class="wrong">
				<span>B</span>{{item.tab_b}}
			</li>
			<li>
				<span>C</span>{{item.tab_c}}
			</li>
			<li class="right">
				<span>D</span>{{item.tab_d}}
			</li>
		</ul>
		<div class="answer_pop">
			<div>
				正确答案：{{item.answer}}
			</div>
			<div>
				<span>解析： </span>{{item.answeranalyze}}
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
        </div>
    </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
    name: "analyze",
    components: {
        hfold
    },
    mounted() {},
    data() {
        return {
            analyze_details: {
                title: '试卷分析'
            },
            analyzes:[
                {
                    qid:'1',
                    topictype:'单选题 ',
                    question:'（ ）是锅炉的主要参数之一',
                    tab_a:'流量',
                    tab_b:'介质',
                    tab_c:'直径',
                    tab_d:'温度',
                    answer:'D',
                    answeranalyze:'温度是锅炉的主要参数之一。'
                },
                {
                    qid:'2',
                    topictype:'单选题 ',
                    question:'（ ）是锅炉的主要参数之一',
                    tab_a:'流量',
                    tab_b:'介质',
                    tab_c:'直径',
                    tab_d:'温度',
                    answer:'B',
                    answeranalyze:'温度是锅炉的主要参数之一。'
                },

            ]
        };
    },
    methods: {
    }
};
</script>

<style scoped>
@import '../assets/css/analyze';
</style>
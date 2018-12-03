<template>
    <div>
        <!-- 文件头 -->
        <hfold :idx='5' :title="message_info.title"></hfold>
        <div class="box clf">
			<div class="message-content clf">
				<div class="message-wrap clf">
					<a href="#" class="user-image"></a>
					<div class="wrap-r fl">
						<p class="user-name">张起灵</p>
						<p class="reply-time">2018-11-27</p>	
					</div>
					<a href="#" class="reply-btn">回复</a>
				</div>
				<div class="answer">
					<p>回复<a href="#">张三</a>：TIG的设备包含：TIG焊枪、焊丝、自动送丝机、焊机、电源、气瓶</p>
				</div>
				<div class="question">
					<span><a href="#">张三</a>回复<a href="#">张起灵</a>：TIG的设备包含哪些？</span>
					<span class="release-time">2018-11-26</span>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
    name: "message",
    components: {
        hfold
    },
    mounted() {},
    data() {
        return {
            message_info: {
                title: '虚拟焊接',
                author:'张起灵',
                tag:'smaw',
                headType:'平板类型',
                mGap:'3mm',
            },
            // 我的留言
            my_comment:null,
            // 评论
            comment:[]
        };
    },
    methods: {
        backClick() {
            if (window.history.length <= 1) {
                this.$router.push("/");
                return false;
            } else {
                this.$router.go(-1);
            }
        }
    }
};
</script>
<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/message.css";
</style>
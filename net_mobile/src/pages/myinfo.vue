<template>
    <div>
        <div class="box clf">
            <div class="banner">
                <div class="userinf_box">
                    <p class="username">张三</p>
                    <p class="account">账号：zhangsan</p>
                    <div class="user_inf">
                        <ul class="clf">
                            <li>年级：2018级</li>
                            <li>焊工等级：初级</li>
                            <li>班级：2018011班</li>
                            <li>当前积分：850</li>
                            <li>专业：焊接材料</li>
                            <li>节约成本：100.80元</li>
                        </ul>
                    </div>
                </div>
                <div class="my_bg">
                </div>
            </div>
            <div class="my_content">
                <ul class="clf">
					<li><router-link to="/have_courseware"><i class="iconfont icon-kejianku"></i>已学习课件<i class="iconfont icon-youfanhui01"></i></router-link></li>
					<li><router-link to="/have_video"><i class="iconfont icon-gongxiang-">
                        </i>已观看视频<i class="iconfont icon-youfanhui01"></i></router-link></li>
					<li><router-link to="/have_test"><i class="iconfont icon-kaoshier"></i>已参加考试<i class="iconfont icon-youfanhui01"></i></router-link></li>
					<li><a href="#"><i class="iconfont icon-xiugaimima"></i>修改密码<i class="iconfont icon-youfanhui01"></i></a></li>
					<li><router-link to="/"><i class="iconfont icon-Group"></i>退出登录</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "myinfo",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/my.css";
</style>

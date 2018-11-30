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
                    <li>已学习课件<a href="#"></a></li>
                    <li>已观看视频<a href="#"></a></li>
                    <li>已参加考试<a href="#"></a></li>
                    <li>修改密码<a href="#"></a></li>
                    <li>退出登录</li>
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
    methods: {
    }
};
</script>

<style scoped>
@import "../assets/css/mybase.css";
@import "../assets/css/my.css";
</style>

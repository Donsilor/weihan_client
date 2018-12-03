<template>
    <div>
        <div class="clf">
            <router-link to="/find_password"><span><i class="iconfont icon-youfanhui"></i></span></router-link>
            <h2>忘记密码</h2>
            <router-link to="/"><span>取消</span></router-link>
        </div>
        <div class="step_box">
            <h3>方法二：请管理员重置密码</h3>
            <form action="" method="">
                <div class="input_box">
                    <span class="left ans">姓名：</span>
                    <span class="right">
                        <input type="text" name="user" v-model="myname" />
                    </span>
                </div>
                <div class="input_box">
                    <span class="left ans">账号：</span>
                    <span class="right">
                        <input type="text" name="account" v-model="account" />
                    </span>
                </div>
                <input name="sub1" class="submit" type="button" value="提交" @click="changePass2"/>
            </form>
        </div>


    </div>
</template>

<script>
export default {
    name: "another_way",
    mounted(){
        console.log('首先加载')
    },
    data() {
        return {
            // questions: [
            //     "您的学号（或工号1）是？",
            //     "您的学号（或工号2）是？",
            //     "您的学号（或工号3）是？",
            //     "您的学号（或工号4）是？"
            // ],
            question: null,
            answer: null,
            myname: null,
            account: null
        };
    },
    methods: {
        // 修改密码方法一
        changePass1(){

        },
        // 修改密码方法二
        changePass2(){

        }
    }
};
</script>
<style scoped>
@import "../assets/css/account_activate.css";
.submit{
    width:6.7rem;
    height:.82rem;
    margin:1.06rem auto 0;
    display:block;
    border-radius:.2rem;
    text-align:center;
    line-height:.82rem;
    color:#fff;
    font-size:.3rem;
    background:#c9c9c9;
}
.clf a:first-child{
    display: block;
    top: .35rem

}

.clf a:first-child span i{
    font-size: .6rem;
}
</style>
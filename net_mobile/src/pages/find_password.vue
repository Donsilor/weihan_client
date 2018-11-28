<template>
    <div>
        <div class="clf">
            <h2>忘记密码</h2>
            <router-link to="/"><span>取消</span></router-link>
        </div>
        <div class="step_box">
            <h3>方法一：请回答密保问题的答案</h3>
            <form action="" method="">
                <div class="input_box">
                    <span class="left">密保问题：</span>
                    <span class="right">
                        <select name="encrypted" v-model="question">
                            <option value="null">请选择密保问题</option>
                            <option v-for="(curques,index)  in questions" :value="index" :key="index">{{curques}}</option>
                        </select>
                    </span>
                </div>
                <div class="input_box">
                    <span class="left">答案：</span>
                    <span class="right">
                        <input type="text" name="answer" v-model="answer" />
                    </span>
                </div>
                <input name="sub1" class="submit" type="button" value="修改密码" @click="changePass1"/>
            </form>
        </div>
        <div class="step_box">
            <h3>方法二：请管理员重置密码</h3>
            <form action="" method="" class="form2">
                <div class="input_box">
                    <span class="left">姓名：</span>
                    <span class="right">
                        <input name="user" type="text" placeholder="请输入姓名" v-model="myname" />
                    </span>
                </div>
                <div class="input_box">
                    <span class="left">账号：</span>
                    <span class="right">
                        <input name="account" type="text" placeholder="请输入账号" v-model="account" />
                    </span>
                </div>
                <input name="sub2" class="submit" type="button" value="修改密码" @click="changePass2"/>
            </form>
        </div>
        <div class="hint">
            <h6>温馨提示：</h6>
            <p>管理员同意重置密码后才能以初始密码登录系统。</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "find_password",
    mounted(){
        console.log('首先加载')
    },
    data() {
        return {
            questions: [
                "您的学号（或工号1）是？",
                "您的学号（或工号2）是？",
                "您的学号（或工号3）是？",
                "您的学号（或工号4）是？"
            ],
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
.submit{width:90%;height:2.5rem;margin:auto;display:block;border-radius:.2rem;text-align:center;line-height:2.5rem;color:#fff;font-size:1rem;background:#c9c9c9;margin-top:1.8rem;}
</style>
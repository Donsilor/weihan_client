<template>
    <div class="app">
        <h2>账号激活</h2>
        <div class="step_box">
            <h3>第一步：修改初始密码</h3>
            <form action="" method="" class="form1">
                <div class="input_box">
                    <span class="left">新密码：</span>
                    <span class="right">
                        <input v-model="password" name="password" type="password" placeholder="请输入新密码" v-validate="'required'" :class="{'is-danger': errors.has('password') }" ref="password" />
                    </span>
                    <span class="vee" v-show="errors.has('password')" v-cloak> {{ errors.first('password') }} </span>
                </div>
                <div class="input_box">
                    <span class="left">确认密码：</span>
                    <span class="right">
                        <input v-model="repassword" name="repassword" type="password" placeholder="请再次输入新密码" v-validate="'required|confirmed:password'" :class="{'is-danger': errors.has('repassword') }" data-vv-as="password" />
                    </span>
                    <span class="vee" v-show="errors.has('repassword')" v-cloak> {{ errors.first('repassword') }} </span>
                </div>
                <!-- <input name="sub1" type="button" value="修改密码" class="submit" @click="surePassWordClick" /> -->
                <!-- </form> -->
                <!-- </div>
        <div class="step_box" v-show="isQus"> -->
                <h3>第二步：设置密保问题及答案</h3>
                <!-- <form action="" method="" class="form2"> -->
                <div class="input_box">
                    <span class="left">密保问题：</span>
                    <span class="right">
                        <select name="select" v-model="question" v-validate="'required'" :class="{'is-danger': errors.has('select') }">
                            <option value="null">请选择密保问题</option>
                            <option v-for="(curques,index)  in questions" :value="index" :key="index">{{curques}}</option>
                        </select>
                    </span>
                    <span class="vee" v-show="errors.has('select')" v-cloak> {{ errors.first('select') }} </span>
                </div>
                <div class="input_box">
                    <span class="left">答案：</span>
                    <span class="right">
                        <input name="question" type="text" placeholder="输入答案" v-validate="'required'" :class="{'is-danger': errors.has('question') }" v-model="answer" />
                    </span>
                    <span class="vee" v-show="errors.has('question')" v-cloak> {{ errors.first('question') }} </span>
                </div>
                <input type="button" class="submit" value="提交" @click="setQuestionsClick" />
            </form>
        </div>
        <div class="hint">
            <h6>温馨提示：</h6>
            <p>请记住密保问题及答案，它可以帮助您再忘记密码时立即重置为初始密码。另外，您也可以请管理员重置密码。</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "account_activate",
    mounted() {},
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
            password: null,
            repassword: null,
        };
    },
    methods: {
        // 确认密码， 密保问题
        setQuestionsClick() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$router.push("/home");
                    console.log("验证通过");
                } else {
                    console.log("验证不通过");
                }
            });
        }
    }
};
</script>

<style scoped>
@import "../assets/css/account_activate.css";
.vee{padding-left:25%;width:80%;color: #f00;}
.is-danger{border:1px solid #f00}
.submit{width:90%;height:2.5rem;margin:auto;display:block;border-radius:.2rem;text-align:center;line-height:2.5rem;color:#fff;font-size:1rem;background:#c9c9c9;margin-top:1.8rem;}
</style>

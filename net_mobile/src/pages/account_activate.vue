<template>
  <div>
    <h2>账号激活</h2>
    <div class="step_box">
      <h3>第一步：修改初始密码</h3>
      <form action method class="form1">
        <div class="input_box">
          <span class="left">新密码：</span>
          <span class="right">
            <input
              v-model="password"
              name="password"
              type="password"
              placeholder="请输入新密码"
              v-validate="'required|min:6'"
              :class="{'is-danger': errors.has('password') }"
              ref="password"
            >
            <p class="vee" v-show="errors.has('password')" v-cloak>{{ errors.first('password') }}</p>
          </span>
        </div>
        <div class="input_box">
          <span class="left">确认密码：</span>
          <span class="right">
            <input
              v-model="repassword"
              name="repassword"
              type="password"
              placeholder="请再次输入新密码"
              v-validate="'required|confirmed:password'"
              :class="{'is-danger': errors.has('repassword') }"
              data-vv-as="password"
            >
            <p
              class="vee"
              v-show="errors.has('repassword')"
              v-cloak
            >{{ errors.first('repassword') }}</p>
          </span>
        </div>
        <h3 class="way-second">第二步：设置密保问题及答案</h3>
        <div class="input_box">
          <span class="left">密保问题：</span>
          <span class="right">
            <select
              name="select"
              v-model="question"
              v-validate="'required'"
              :class="{'is-danger': errors.has('select') }"
            >
              <option value="null">请选择密保问题</option>
              <option
                v-for="(curques,index)  in questions"
                :value="curques.id"
                :key="index"
              >{{curques.label}}</option>
            </select>
            <p class="vee" v-show="errors.has('select')" v-cloak>{{ errors.first('select') }}</p>
          </span>
        </div>
        <div class="input_box">
          <span class="left ans">答案：</span>
          <span class="right">
            <input
              name="question"
              type="text"
              placeholder="输入答案"
              v-validate="'required'"
              :class="{'is-danger': errors.has('question') }"
              v-model="answer"
            >
            <p class="vee" v-show="errors.has('question')" v-cloak>{{ errors.first('question') }}</p>
          </span>
        </div>
        <input type="button" class="submit" value="提交" @click="setQuestionsClick">
      </form>
    </div>
    <div class="hint">
      <h6>温馨提示：</h6>
      <p>请记住密保问题及答案，它可以帮助您再忘记密码时立即重置为初始密码。另外，您也可以请管理员重置密码。</p>
    </div>
  </div>
</template>

<script>
import { toast } from "@/common/myFun";
export default {
  name: "account_activate",
  mounted() {
    this.getDictionaries();
  },
  data() {
    return {
      questions: [],
      question: null,
      answer: null,
      password: null,
      repassword: null
    };
  },
  methods: {
    // 确认密码， 密保问题
    setQuestionsClick() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$api
            .api(this.$infs.user.activate, {
              userId: this.$glb.userId,
              password: this.password,
              securityQuestID: this.question,
              securityAnswer: this.answer
            })
            .then(respone => {
              toast({
                message: "操作成功",
                iconClass: "icon icon-success"
              });
              this.$router.push("/home");
            })
            .catch(response => {
              this.$msgbox("提示", response.message);
            });
        }
      });
    },
    // 获取密保字典
    getDictionaries() {
      this.$api
        .req(
          this.$infs.other.getDictionaries,
          {},
          this.$glb.dicts.securityQuestions
        )
        .then(respone => {
          this.questions = respone;
        })
        .catch(response => {
          this.$msgbox("提示", response.message);
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/account_activate.css";
.is-danger {
  border: 1px solid #f00;
}
.vee {
  color: red;
}
.submit {
  width: 6.7rem;
  height: 0.82rem;
  margin: 0.34rem auto 0;
  display: block;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.82rem;
  color: #fff;
  font-size: 0.3rem;
  background: #c9c9c9;
}
</style>

<template>
  <div>
    <div class="clf">
      <router-link to="/">
        <span>取消</span>
      </router-link>
      <h2>忘记密码</h2>
      <a href="javascript:" @click="func=!func">{{func?'方法一':'方法二'}}</a>
    </div>
    <div class="step_box" v-show="!func">
      <h3>方法一：请回答密保问题的答案</h3>
      <form action method>
        <div class="input_box">
          <span class="left ans">账号：</span>
          <span class="right">
            <input
              v-model="account"
              v-validate="'required'"
              :class="{'is-danger': errors.has('name') }"
              type="text"
              name="name"
            >
            <p class="vee" v-show="errors.has('name')" v-cloak>{{ errors.first('name') }}</p>
          </span>
        </div>
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
              type="text"
              name="question"
              v-model="answer"
              v-validate="'required'"
              :class="{'is-danger': errors.has('question') }"
            >
            <p class="vee" v-show="errors.has('question')" v-cloak>{{ errors.first('question') }}</p>
          </span>
        </div>
        <input class="submit" type="button" value="提交" @click="changePass1">
      </form>
    </div>
    <div class="step_box" v-show="func">
      <h3>方法二：请管理员重置密码</h3>
      <form action method>
        <div class="input_box">
          <span class="left ans">账号：</span>
          <span class="right">
            <input
              type="text"
              name="account"
              v-model="account"
              v-validate="'required'"
              :class="{'is-danger': errors.has('name') }"
            >
            <p class="vee" v-show="errors.has('name')" v-cloak>{{ errors.first('name') }}</p>
          </span>
        </div>
        <div class="input_box">
          <span class="left ans">姓名：</span>
          <span class="right">
            <input
              type="text"
              name="username"
              v-model="myname"
              v-validate="'required'"
              :class="{'is-danger': errors.has('username') }"
            >
            <p class="vee" v-show="errors.has('username')" v-cloak>{{ errors.first('username') }}</p>
          </span>
        </div>
        <input class="submit" type="button" value="提交" @click="changePass2">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "find_password",
  mounted() {
    this.getDictionaries();
  },
  data() {
    return {
      questions: [],
      question: null,
      answer: null,
      myname: null,
      account: null,
      func: false
    };
  },
  methods: {
    // 修改密码方法一，表单前三个
    changePass1() {
      let that = this;
      this.$validator.validateAll().then(result => {
        if (!result) {
          if (
            that.errors.has("name") ||
            that.errors.has("select") ||
            that.errors.has("question")
          ) {
            return;
          }
        }
        this.postFindPassword({
          plan: 0,
          userName: this.account,
          arg1: this.question,
          arg2: this.answer
        });
      });
    },
    // 修改密码方法二
    changePass2() {
      let that = this;
      this.$validator.validateAll().then(result => {
        if (!result) {
          if (that.errors.has("name") || that.errors.has("username")) {
            return;
          }
        }
        this.postFindPassword({
          plan: 1,
          userName: this.account,
          arg1: this.myname
        });
      });
    },
    // 上传
    postFindPassword(obj) {
      this.$api
        .req(this.$infs.user.findPassword, obj)
        .then(respone => {
          this.$msgbox("提交成功", "等待老师或管理员处理");
        })
        .catch(response => {
          this.$msgbox("提示", response.message);
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
  margin: 1.06rem auto 0;
  display: block;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.82rem;
  color: #fff;
  font-size: 0.3rem;
  background: #c9c9c9;
}
</style>
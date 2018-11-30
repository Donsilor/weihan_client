<template>
  <div class="app">
    <div class="logo">
      <img src="../assets/images/logo.png" alt>
    </div>
    <h4 class="title">虚拟焊接网络教学系统</h4>
    <form action id="loginForm">
      <div class="box">
        <span>
          <i class="icon iconfont icon-wode"></i>
        </span>
        <input
          class="user"
          placeholder="请输入用户名"
          v-model="username"
          v-validate="'required'"
          :class="{'is-danger': errors.has('name') }"
          type="text"
          name="name"
        >
      </div>
      <span class="vee" v-show="errors.has('name')" v-cloak>{{ errors.first('name') }}</span>
      <div class="box">
        <span>
          <i class="icon iconfont icon-mima"></i>
        </span>
        <input
          v-model="password"
          v-validate="'required'"
          :class="{'is-danger':errors.has('password')}"
          type="password"
          name="password"
          placeholder="请输入密码"
          value
        >
      </div>
      <span class="vee" v-show="errors.has('password')" v-cloak>{{errors.first('password')}}</span>
      <div class="clf operating">
        <label for="rPassword">
          <input type="checkbox" name="rpassword" id="rPassword" v-model="remeber">记住密码
        </label>
        <a href="javascript:">
          <router-link to="/find_password">忘记密码？</router-link>
        </a>
      </div>
      <input
        type="button"
        :class="{'color':username && password}"
        value="登录"
        class="submit"
        @click="login"
      >
      <!-- <div class="btn_box"> -->
      <!-- <el-button type="primary" class="btn" @click="login">登录</el-button> -->
      <!-- </div> -->
    </form>
    <div class="copyright">深圳市为汉科技有限公司版权所有</div>
    <div class="pop_box" v-if="showpop">
      <div class="pop">
        <div>密码错误</div>
        <div>
          <button @click="confirm">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import crypto from "crypto";
export default {
  name: "login",
  mounted() {
    console.log("首先加载");
    this.remberControl();
  },
  data() {
    return {
      username: null,
      password: null,
      md5pw: null,
      remeber: null,
      showpop: false
    };
  },
  methods: {
    //  点击登录时间
    login() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.setMd5();
          this.onLogin();
          this.$api
            .api(this.$infs.user.login, { name: "dengfeng" })
            .then(response => {
              console.log(response);
            })
            .catch(console.log("失败"));
          this.$router.push("/home");
          console.log("验证通过");
        } else {
          console.log("验证不通过");
          this.showpop = true;
          //   this.open();
        }
      });
    },
    confirm() {
      this.showpop = false;
    },
    // open() {
    //   this.$alert("这是一段内容", "标题名称", {
    //     confirmButtonText: "确定",
    //     callback: action => {
    //       this.$message({
    //         type: "info",
    //         message: `action: ${action}`
    //       });
    //     }
    //   });
    // },
    // 是否记住密码
    remberControl() {
      let isRem = localStorage.getItem("xnhjRem");
      if (isRem == "1") {
        this.remeber = true;
        this.username = localStorage.getItem("xnhjun");
        this.password = localStorage.getItem("xnhjpw");
      } else {
        this.remeber = false;
        this.username = null;
        this.password = null;
      }
    },
    // 登陆之后处理
    onLogin() {
      // 记住密码或不记住密码
      let bl = this.remeber;
      localStorage.setItem("xnhjRem", bl ? "1" : "0");
      localStorage.setItem("xnhjun", bl ? this.username : "");
      localStorage.setItem("xnhjpw", bl ? this.password : "");
    },
    setMd5() {
      let md5 = crypto.createHash("md5");
      md5.update(this.password); //this.pw2这是你要加密的密码
      this.md5pw = md5.digest("hex"); //this.pw这就是你加密完的密码，这个往后台传就行了
    }
  }
};
</script>

<style scoped>
@import "../assets/css/login.css";
@import "element-ui/lib/theme-chalk/index.css";
.vee {
  float: left;
  padding-left: 10%;
  width: 80%;
  color: #f00;
}
.is-danger {
  /* border: 1px solid #f00; */
}
.el-message-box__wrapper {
  width: 100%;
}
.el-message-box {
  width: 100% !important;
}
.el-message-box__message {
  color: red;
}
.color{
    background-color: #37A4DF !important;
}
</style>
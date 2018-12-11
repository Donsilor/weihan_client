<template>
  <div>
    <div class="logo">
      <img src="../assets/images/logo.png" alt>
    </div>
    <h4 class="title">虚拟焊接网络教学系统</h4>
    <form action id="loginForm">
      <div class="login-box">
        <span>
          <i class="iconfont icon-wode"></i>
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
        <p v-show="errors.has('name')" v-cloak>{{ errors.first('name') }}</p>
      </div>

      <div class="login-box">
        <span>
          <i class="iconfont icon-mima"></i>
        </span>
        <input
          v-model="password"
          v-validate="'required'"
          :class="{'is-danger':errors.has('password')}"
          type="password"
          name="password"
          placeholder="请输入密码"
        >
        <p v-show="errors.has('password')" v-cloak>{{errors.first('password')}}</p>
      </div>

      <div class="clf operating">
        <label for="rPassword">
          <input type="checkbox" name="rpassword" id="rPassword" v-model="remeber">记住密码
        </label>
        <a href="javascript:">
          <router-link to="/find_password">忘记密码？</router-link>
        </a>
      </div>
      <input type="button" value="登录" class="submit" @click="login">
    </form>
    <div class="copyright">深圳市为汉科技有限公司版权所有</div>
  </div>
</template>
<script>
import crypto from "crypto";
import { toast } from "@/common/myFun";
export default {
  name: "login",
  mounted() {
    this.remberControl();
  },
  data() {
    return {
      username: null,
      password: null,
      md5pw: null,
      remeber: null,
      token: null
    };
  },
  methods: {
    //  点击登录时间
    login() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.setMd5();
          this.$api
            .req(this.$infs.user.login, {
              userName: this.username,
              password: this.password
            })
            .then(response => {
              this.$glb.token = response.token;
              this.$glb.userId = response.userId;
              this.onLogin();
              toast({
                message: "登陆成功",
                position: "bottom"
              });
              this.getStatus();
            })
            .catch(response => {
              this.$msgbox("提示", response.message);
            });
        }
      });
    },
    // 是否记住密码
    remberControl() {
      let isRem = localStorage.getItem("autoLogin");
      if (isRem == "1") {
        this.remeber = true;
        this.$glb.token = localStorage.getItem("token");
        this.$glb.userId = localStorage.getItem("userId");
        this.username = localStorage.getItem("username");
        this.password = localStorage.getItem("password");
      } else {
        this.remeber = false;
        this.$glb.token = null;
        this.$glb.userId = null;
        this.username = null;
        this.password = null;
      }
      this.checkLoginStatue();
    },
    // 登陆之后处理
    onLogin() {
      // 记住密码或不记住密码
      let bl = this.remeber;
      localStorage.setItem("autoLogin", bl ? "1" : "0");
      localStorage.setItem("username", bl ? this.username : "");
      localStorage.setItem("password", bl ? this.password : "");
      localStorage.setItem("token", bl ? this.$glb.token : "");
      localStorage.setItem("userId", bl ? this.$glb.userId : "");
    },
    // 检测token状态,没有过期跳到主页，过期重新登录
    checkLoginStatue() {
      if (this.$glb.token) {
        this.$api
          .api(this.$infs.user.checkToken)
          .then(res => {
            this.getStatus();
          })
          .catch(res => {
            this.$msgbox("提示", res.message);
          });
      } else if (this.remeber) {
        this.login();
      }
    },
    setMd5() {
      let md5 = crypto.createHash("md5");
      md5.update(this.password); //this.pw2这是你要加密的密码
      this.md5pw = md5.digest("hex"); //this.pw这就是你加密完的密码，这个往后台传就行了
    },
    // 登陆成功获取状态
    getStatus() {
      this.$api
        .api(this.$infs.user.getInfo, {}, this.$glb.userId)
        .then(response => {
          if (response.state == 0) {
            //正常
            this.$router.push("/home");
          } else {
            this.$router.push("/account_activate");
          }
        })
        .catch(response => {
          this.$msgbox("提示", response.message);
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/login.css";
body {
  background: #fff;
}
.is-danger {
  border: 1px solid #f00;
}
</style>
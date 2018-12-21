<template>
  <div>
    <input type="text" placeholder="请输入用户名" v-model="username">
    <input type="text" placeholder="请输入密码" v-model="password">
    <input type="button" value="登陆" @click="login">
  </div>
</template>
<script>
import { User, RequestParams } from "../../common/entity";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    async login() {
      let responseBody = await this.$api.service.users.login(
        new RequestParams()
          .addAttribute("userName", this.username)
          .addAttribute("password", this.password)
      );
      if (responseBody) {
        User.token = {
          /**有效期目标时间 */
          expires_in: responseBody.expire,
          /**token 字符串 */
          access_token: responseBody.token
        };
        User.info = { id: responseBody.userId };
        this.$router.push(this.$route.query.redirect || "/");
      }
    }
  }
};
</script>


<style scoped>
</style>

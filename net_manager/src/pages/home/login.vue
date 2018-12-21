<template>
  <div>
    <input type="text" placeholder="请输入用户名" v-model="username" >
    <input type="text" placeholder="请输入密码" v-model="password">
    <input type="button" value="登陆" @click="login">
  </div>
</template>
<script>
export default {
  data(){
    return {
      username:"",
      password:"",
    }
  },
  mounted(){},
  methods:{
    async login(){
      let responseBody = await this.$Api.service.users.login();
      console.log(responseBody)
    }
  },
}
</script>


<style scoped>

</style>

<template>
    <div class="hello">
        <div>考试系统手机端</div>
        <h6>用户登录</h6>
        <form>
            <input type="text" placeholder="用户名" v-model="username"><br><br>
            <input type="password" placeholder="密码" v-model="password"><br><br>
            <input type="text" placeholder="验证码" v-model="checkcode"><br><br>
            <input type="submit" value="登录" on-click="login"/>
        </form>
    </div>
</template>
<script>
// 导入需要验证项目类型
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
      checkcode: null
    }
  },
  methods: {
    //  点击登录时间
    login() {}
  },
  //   表单验证
  validations: {
    user: {
      username: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(10)
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(24)
      },
      checkcode: {
        required
      }
    }
  }
}
</script>

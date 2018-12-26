<template>
  <div class="loginWrap">
    <div class="loginMain">
      <div class="logo">
        <img src="../../assets/logo_big.jpg" alt="">
      </div>
      <div class="loginForm">
        <h1>虚拟焊接系统教师端后台</h1>
        <div class="item">
          <label>用户名：</label>
          <input type="text" placeholder="请输入用户名" v-model="username">
        </div>
        <div class="item">
          <label>密码：</label>
          <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="item">
          <div class="fl">
            <el-checkbox v-model="Rememb">记住密码</el-checkbox>
          </div>
          <a href="javascript:" class="fr">忘记密码？</a>
        </div>
        <input type="button" class="loginBtn" value="登陆" @click="login">
      </div>
    </div>
  </div>
</template>

<script>
import { User, RequestParams } from '../../common/entity'
export default {
  data () {
    return {
      username: '',
      password: '',
      Rememb: false
    }
  },
  mounted () {},
  methods: {
    async login () {
      let responseBody = await this.$api.service.users.login(
        new RequestParams()
          .addAttribute('userName', this.username)
          .addAttribute('password', this.password)
      )
      if (responseBody) {
        User.token = {
          /**有效期目标时间 */
          expires_in: responseBody.expire,
          /**token 字符串 */
          access_token: responseBody.token
        }
        User.info = { 
          id: responseBody.userId,
          username:this.username
        }
        this.$router.push(this.$route.query.redirect || '/')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.loginWrap
  height 100vh
  background url("../../assets/loginBg.jpg") no-repeat center / cover

  .loginMain
    width 83vw
    height 70vh
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    margin auto
    background-color #fff

    .logo
      float left
      width 50%
      height 100%
      position relative

      img
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        margin auto
        width 50%

    .loginForm
      position absolute
      width 50%
      top 50%
      right 0
      padding 0 12% .5rem
      border-left 1px solid $borderColor
      transform translateY(-50%)

      h1
        font-size 2.25rem
        color #35a3e1
        margin-bottom 4rem

      .item
        font-size 1.125rem
        line-height 2.75rem
        margin-bottom 2.875rem

        &:after
          content ''
          display table
          clear both

        > label
          float left
          font-size 1.5rem
          min-width 6rem
          text-align right
          /*overflow hidden*/

        > input
          width calc(100% - 6rem)
          height 2.75rem
          padding 0 .5rem

        a
          &:hover
            color #35a3e1


      .loginBtn
        display block
        width 100%
        font-size 1.5rem
        line-height 3.5rem
        background #37a4df
        border none
        border-radius .5rem
        color #fff

</style>

<style lang="stylus">

.item
  .el-checkbox__label
    font-size 1.125rem

  .el-checkbox__input

    .el-checkbox__inner
      display block
      overflow hidden

</style>

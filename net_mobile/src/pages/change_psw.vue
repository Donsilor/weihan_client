<template>
  <div>
    <hfold :idx="5" :title="'修改密码'"></hfold>
    <div class="box">
      <div class="old_psw clf">
        <span>原密码：</span>
        <input
          name="oldpsw"
          type="password"
          placeholder="请输入旧密码"
          v-validate="'required'"
          :class="{'is-danger': errors.has('oldpsw') }"
          v-model="oldpsw"
        >
        <span class="vee" v-show="errors.has('oldpsw')" v-cloak>{{ errors.first('oldpsw') }}</span>
      </div>
      <div class="new_psw clf">
        <span>新密码：</span>
        <input
          name="password"
          type="password"
          placeholder="请输入新密码"
          v-validate="'required|min:6'"
          :class="{'is-danger': errors.has('password') }"
          ref="password"
          v-model="newpsw"
        >
        <span class="vee" v-show="errors.has('password')" v-cloak>{{ errors.first('password') }}</span>
      </div>
      <div class="new_psw_c clf">
        <span>确认密码：</span>
        <input
          name="repassword"
          type="password"
          placeholder="请再次输入新密码"
          v-validate="'required|confirmed:password'"
          :class="{'is-danger': errors.has('repassword') }"
          data-vv-as="password"
          v-model="newpswc"
        >
        <span class="vee" v-show="errors.has('repassword')" v-cloak>{{ errors.first('repassword') }}</span>
      </div>
      <input
        type="button"
        class="but"
        value="确认"
        :class="{'bgColor': oldpsw && newpsw && newpswc }"
        @click="reqChangePassWord"
      >
    </div>
  </div>
</template>

<script>
import hfold from "../components/hfold";
export default {
  name: "change_psw",
  components: {
    hfold
  },
  mounted() {},
  data() {
    return {
      oldpsw: null,
      newpsw: null,
      newpswc: null
    };
  },
  methods: {
    //   请求修改密码
    reqChangePassWord() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$api
            .api(this.$infs.user.changePassWord, {
              oldPassWord: this.oldpsw,
              passWorld: this.newpsw
            })
            .then(response => {
              // 成功后重新登录
              this.$glb.token = null;
              this.$glb.userId = null;
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
              localStorage.removeItem("username");
              localStorage.removeItem("password");
              localStorage.removeItem("autoLogin");
              this.$msgbox("提示", "修改密码成功，请重新登录！").then(req => {
                this.$router.push("/");
              });
            })
            .catch(response => {
              this.$msgbox("提示", response.message);
            });
        }
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/change_psw";
.bgColor {
  background-color: #37a4df !important;
}
.is-danger {
  border: 1px solid #f00;
}
.vee {
  color: red;
  width: 60% !important;
}
</style>
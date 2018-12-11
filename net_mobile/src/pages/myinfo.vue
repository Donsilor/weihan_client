<template>
  <div>
    <div class="box clf">
      <div class="banner">
        <div class="userinf_box">
          <p class="username">{{myInfo.name}}</p>
          <p class="account">账号：{{myInfo.userName}}</p>
          <div class="user_inf">
            <ul class="clf">
              <li>年级：{{myInfo.grade}}级</li>
              <li>焊工等级：{{myInfo.level}}</li>
              <li>班级：{{myInfo.class}}班</li>
              <li>当前积分：{{myInfo.point}}</li>
              <li>专业：{{myInfo.major}}</li>
              <li>节约成本：{{myInfo.costSaving}}元</li>
            </ul>
          </div>
        </div>
        <div class="my_bg"></div>
      </div>
      <div class="my_content">
        <ul class="clf">
          <li>
            <a href="javascript:" @click="listOnClick('/have_courseware')">
              <i class="iconfont icon-kejianku"></i>已学习课件
              <i class="iconfont icon-youfanhui01"></i>
            </a>
          </li>
          <li>
            <a href="javascript:" @click="listOnClick('/have_video')">
              <i class="iconfont icon-gongxiang-"></i>已观看视频
              <i class="iconfont icon-youfanhui01"></i>
            </a>
          </li>
          <li>
            <a href="javascript:" @click="listOnClick('/have_test')">
              <i class="iconfont icon-kaoshier"></i>已参加考试
              <i class="iconfont icon-youfanhui01"></i>
            </a>
          </li>
          <li>
            <a href="javascript:" @click="listOnClick('/change_psw')">
              <i class="iconfont icon-xiugaimima"></i>修改密码
              <i class="iconfont icon-youfanhui01"></i>
            </a>
          </li>
          <li>
            <a href="javascript:" @click="loginOut()">
              <i class="iconfont icon-Group"></i>退出登录
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "@/common/myFun";
export default {
  name: "myinfo",
  data() {
    return {
      myInfo: {
        userId: null,
        userName: null,
        name: null,
        nickName: null,
        birthDate: null,
        createAt: null,
        email: null,
        phoneNo: null,
        schools: null,
        sex: null,
        state: null,
        teachType: null,
        head: null,
        grade: null,
        level: null,
        class: null,
        point: null,
        major: null,
        costSaving: null
      }
    };
  },
  methods: {
    //   点击事件
    listOnClick(goto) {
      this.$router.push(goto);
    },
    // 退出
    loginOut() {
      this.$msgbox
        .confirm("确认退出当前账号?退出将清除当前保存的账号密码")
        .then(action => {
          if (action != "confirm") return;
          this.$api
            .api(this.$infs.user.loginout)
            .then(res => {
              this.$glb.token = null;
              this.$glb.userId = null;
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
              localStorage.removeItem("username");
              localStorage.removeItem("password");
              localStorage.removeItem("autoLogin");
              this.$router.push("/");
            })
            .catch(res => {
              toast(res.message);
            });
        })
        .catch(action => toast("取消退出"));
    },
    // 获取个人信息
    getMyInfo() {
      this.$api
        .api(this.$infs.user.getInfo, {}, this.$glb.userId)
        .then(response => {
          this.myInfo = response;
        })
        .catch(response => {
          this.$msgbox("提示", response.message);
        });
    }
  },
  mounted() {
    this.getMyInfo();
  }
};
</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/my.css";
</style>

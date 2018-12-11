import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index'
import login from '../pages/login'
import find_password from '../pages/find_password'
import courseware from '../pages/courseware'
import home from '../pages/home'
import myinfo from '../pages/myinfo'
import videos from '../pages/videos'
import account_activate from '../pages/account_activate'
import tests from '../pages/tests'
import video_details from '../pages/video_details'
import courseware_details from '../pages/courseware_details'
import simulator_demonstration from '../pages/simulator_demonstration'
import have_courseware from '../pages/have_courseware'
import have_video from '../pages/have_video'
import have_test from '../pages/have_test'
import paper from '../pages/paper'
import submit from '../pages/submit'
import change_psw from '../pages/change_psw.vue'
import message from '../pages/message.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: login, meta: { title: '登录' } },
    { path: '/find_password', name: 'find_password', component: find_password, meta: { title: '找回密码' } },
    { path: '/account_activate', name: 'account_activate', component: account_activate, meta: { title: '账号激活' } },
    { path: '/have_courseware', component: have_courseware, meta: { title: '已学习的课件', requireAuth: true } },
    { path: '/have_video', component: have_video, meta: { title: '已观看的视频', requireAuth: true } },
    { path: '/have_test', component: have_test, meta: { title: '已参加的考试', requireAuth: true } },
    { path: '/change_psw', component: change_psw, meta: { title: '修改密码', requireAuth: true } },
    { path: '/video_details', name: 'video_details', component: video_details, meta: { title: '视频详细', requireAuth: true } },
    { path: '/courseware_details', name: 'courseware_details', component: courseware_details, meta: { title: '课件详细', requireAuth: true } },
    { path: '/simulator_demonstration', name: 'simulator_demonstration', component: simulator_demonstration, meta: { title: '视频详细', requireAuth: true } },
    { path: '/paper', name: 'paper', component: paper, meta: { title: '视频详细', requireAuth: true } },
    { path: '/submit', name: 'submit', component: submit, meta: { title: '视频详细', requireAuth: true } },
    { path: '/message', name: 'message', component: message, meta: { title: '消息', requireAuth: true } },
    {
      path: '/home',
      component: home,
      name: '虚拟焊接网络教学系统',
      redirect: { path: "/index" },
      meta: { title: '虚拟焊接网络教学系统', requireAuth: true },
      children: [
        { path: '/index', component: index, meta: { title: '虚拟焊接网络教学系统', requireAuth: true } },
        { path: '/courseware', component: courseware, meta: { title: '课件', requireAuth: true } },
        { path: '/videos', component: videos, meta: { title: '视频', requireAuth: true } },
        { path: '/tests', component: tests, meta: { title: '考试', requireAuth: true } },
        { path: '/myinfo', component: myinfo, meta: { title: '我的', requireAuth: true } },
      ]
    },
  ]
})

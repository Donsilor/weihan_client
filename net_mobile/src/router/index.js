import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index'
import login from '../pages/login'
import find_password from '../pages/find_password'
import another_way from '../pages/another_way'
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/find_password',
      name: 'find_password',
      component: find_password
    },
    {
      path: '/another_way',
      name: 'another_way',
      component: another_way
    },
    {
      path:'/account_activate',
      name:'account_activate',
      component:account_activate
    },
    {
      path:'/video_details',
      name:'video_details',
      component:video_details
    },
    {
      path:'/courseware_details',
      name:'courseware_details',
      component:courseware_details
    },
    {
      path:'/simulator_demonstration',
      name:'simulator_demonstration',
      component:simulator_demonstration
    },
    {
      path:'/have_courseware',
      name:'have_courseware',
      component:have_courseware
    },
    {
      path:'/have_video',
      name:'have_video',
      component:have_video
    },
    {
      path:'/have_test',
      name:'have_test',
      component:have_test
    },
    {
      path:'/paper',
      name:'paper',
      component:paper
    },
    {
      path:'/submit',
      name:'submit',
      component:submit
    },
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

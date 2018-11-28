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
      path:'/account_activate',
      name:'account_activate',
      component:account_activate
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

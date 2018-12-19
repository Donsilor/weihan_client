import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home'
import SchoolInfo from '@/pages/baseInfo/schoolInfo/schoolInfo'
import ServiceType from '@/pages/baseInfo/serviceType/serviceType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'home', component: Home, redirect: '/school_info', children: [
        { path: '/school_info', name: 'schoolInfo', component: SchoolInfo, meta: { title: '学校信息', requireAuth: false } },
        { path: '/service_type', name: 'service_type', component: ServiceType, meta: { title: '服务类别', requireAuth: false } }
      ]
    }
  ]
})

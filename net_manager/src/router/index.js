import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home'
import Login from '@/pages/home/login'
import SchoolInfo from '@/pages/baseInfo/schoolInfo/schoolInfo'
import ServiceType from '@/pages/baseInfo/serviceType/serviceType'

import ContestManage from '@/pages/contestFunction/contestManage/contestManage'
import HistoryCompetition from '@/pages/contestFunction/historyCompetition/historyCompetition'
import CurrentContest from '@/pages/contestFunction/currentContest/currentContest'
import Monitoring from '@/pages/contestFunction/monitoring/monitoring'

import RemoteControl from '@/pages/remoteControl/remoteControl'

import ExamManage from '@/pages/practicalOperationExam/examManage/examManage'
import TaskManage from '@/pages/practicalOperationExam/taskManage/taskManage'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', name: 'login', component: Login},
    {
      path: '/', name: 'home', component: Home, redirect: '/school_info', children: [
        {
          path: '/school_info',
          name: 'schoolInfo',
          component: SchoolInfo,
          meta: { title: '学校信息', requireAuth: false }
        },
        {
          path: '/service_type',
          name: 'service_type',
          component: ServiceType,
          meta: { title: '服务类别', requireAuth: false }
        },
        {
          path: '/contestManage',
          name: 'contestManage',
          component: ContestManage,
          meta: { title: '竞赛管理', requireAuth: false }
        },
        {
          path: '/historyCompetition',
          name: 'historyCompetition',
          component: HistoryCompetition,
          meta: { title: '历史竞赛', requireAuth: false }
        },
        {
          path: '/currentContest',
          name: 'currentContest',
          component: CurrentContest,
          meta: { title: '当前竞赛', requireAuth: false }
        },
        {
          path: '/monitoring',
          name: 'monitoring',
          component: Monitoring,
          meta: { title: '监控', requireAuth: false }
        },
        {
          path: '/remoteControl',
          name: 'remoteControl',
          component: RemoteControl,
          meta: { title: '远程群控', requireAuth: false }
        },
        {
          path: '/taskManage',
          name: 'taskManage',
          component: TaskManage,
          meta: { title: '任务管理', requireAuth: false }
        },
        {
          path: '/examManage',
          name: 'examManage',
          component: ExamManage,
          meta: { title: '考试管理', requireAuth: false }
        }
      ]
    }
  ]
})

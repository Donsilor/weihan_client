import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home'

//////////////////////////// 基本信息 //////////////////////////////
import SchoolInfo from '@/pages/baseInfo/schoolInfo/schoolInfo'
import ServiceType from '@/pages/baseInfo/serviceType/serviceType'
///////////////////////////////////////////////////////////////////

//////////////////////////// 竞赛功能 //////////////////////////////
import ContestManage from '@/pages/contestFunction/contestManage/contestManage'
import HistoryCompetition from '@/pages/contestFunction/historyCompetition/historyCompetition'
import CurrentContest from '@/pages/contestFunction/currentContest/currentContest'
import Monitoring from '@/pages/contestFunction/monitoring/monitoring'
///////////////////////////////////////////////////////////////////

//////////////////////////// 远程群控 //////////////////////////////
import RemoteControl from '@/pages/remoteControl/remoteControl'
///////////////////////////////////////////////////////////////////

//////////////////////////// 理论教学 //////////////////////////////
import QuestionBankManage from '@/pages/theoryTeaching/questionBankManage/questionBankManage'
import TaskManage from '@/pages/theoryTeaching/taskManage/taskManage'
import TestQuestionManage from '@/pages/theoryTeaching/testQuestionManage/testQuestionManage'
import VideoDatabase from '@/pages/theoryTeaching/videoDatabase/videoDatabase'
import CourseLibrary from '@/pages/theoryTeaching/courseLibrary/courseLibrary'
///////////////////////////////////////////////////////////////////


//////////////////////////// 成绩查询 //////////////////////////////
import Inquire from '@/pages/scoreInquiry/inquire/inquire'
import ScoreReport from '@/pages/scoreInquiry/scoreReport/scoreReport'
///////////////////////////////////////////////////////////////////

//////////////////////////// 操作录像 //////////////////////////////
import TeachingOperationVideo from '@/pages/operationVideo/teachingOperationVideo/teachingOperationVideo'
import StudentOperationVideo from '@/pages/operationVideo/studentOperationVideo/studentOperationVideo'
///////////////////////////////////////////////////////////////////

///////////////////////////// 备份 /////////////////////////////////
import Backups from '@/pages/backups/backups'
///////////////////////////////////////////////////////////////////

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
          path: '/questionBankManage',
          name: 'questionBankManage',
          component: QuestionBankManage,
          meta: { title: '题库管理', requireAuth: false }
        },
        {
          path: '/taskManage',
          name: 'taskManage',
          component: TaskManage,
          meta: { title: '作业管理', requireAuth: false }
        },
        {
          path: '/testQuestionManage',
          name: 'testQuestionManage',
          component: TestQuestionManage,
          meta: { title: '试题管理', requireAuth: false }
        },
        {
          path: '/videoDatabase',
          name: 'videoDatabase',
          component: VideoDatabase,
          meta: { title: '视频库', requireAuth: false }
        },
        {
          path: '/courseLibrary',
          name: 'courseLibrary',
          component: CourseLibrary,
          meta: { title: '课程库', requireAuth: false }
        },
        {
          path: '/inquire',
          name: 'inquire',
          component: Inquire,
          meta: { title: '查询', requireAuth: false }
        },
        {
          path: '/scoreReport',
          name: 'scoreReport',
          component: ScoreReport,
          meta: { title: '成绩分布报表', requireAuth: false }
        },
        {
          path: '/teachingOperationVideo',
          name: 'teachingOperationVideo',
          component: TeachingOperationVideo,
          meta: { title: '教学操作视频', requireAuth: false }
        },
        {
          path: '/studentOperationVideo',
          name: 'studentOperationVideo',
          component: StudentOperationVideo,
          meta: { title: '学员操作视频', requireAuth: false }
        },
        {
          path: '/backups',
          name: 'backups',
          component: Backups,
          meta: { title: '备份', requireAuth: false }
        }
      ]
    }
  ]
})

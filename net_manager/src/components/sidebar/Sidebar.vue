<template>
  <div class="sidebar">
    <ul class="stair">
      <li v-for="(item,index) in menu" :key="index">
        <div v-if="item.url" @click="switchTab(index)" >
          <router-link tag="div" :class="{blue:changeBlue === index}" :to="item.url">
            <i class="icon iconfont" :class="item.bgclass"></i>{{item.index}}{{item.name}}
          </router-link>
        </div>
        <div v-else @click="switchTab(index)" :class="{blue:changeBlue === index}">
          <i class="icon iconfont" :class="item.bgclass"></i>{{item.index}}{{item.name}}
        </div>
        <ul class="second_level" v-show="item.sidebarShow">
          <li v-for="(ite,idx) in item.children" :key="idx" :class="{active:changeBackground === idx}"
              @click="backColor(idx)">
            <router-link :to="ite.url">
              <span class="circle"></span>
              {{ite.name}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

import {User, SystemParameter} from "common/entity"
export default {
  name: 'CommonSidebar',
  data () {
    return {
      changeBlue: -1,
      changeBackground: -1,
      bgColor: false,
      menu: [
        {
          name: '概述',
          sidebarShow: false,
          bgclass: 'icon-gailan'
        },
        {
          name: '基本信息',
          sidebarShow: false,
          bgclass: 'icon-jibenxinxi',
          children: [
            {
              name: '学校信息',
              url: '/school_info'
            },
            {
              name: '服务类别',
              url: '/service_type'
            },
            {
              name: '人员信息',
              url: '/'
            },
            {
              name: '班级信息',
              url: '/'
            },
            {
              name: '组别信息',
              url: '/'
            }
          ]
        },
        {
          name: '竞赛功能',
          testBg: 'sideberIcon_03.png',
          sidebarShow: false,
          bgclass: 'icon-gongneng',
          children: [
            {
              name: '竞赛管理',
              url: '/contestManage'
            },
            {
              name: '历史竞赛',
              url: '/historyCompetition'
            },
            {
              name: '当前竞赛',
              url: '/currentContest'
            }
          ]
        },
        {
          name: '远程群控',
          testBg: 'sideberIcon_04.png',
          sidebarShow: false,
          bgclass: 'icon-jiankong',
          url: '/remoteControl'
        },
        {
          name: '理论教学',
          testBg: 'sideberIcon_05.png',
          sidebarShow: false,
          bgclass: 'icon-jiaoxuejihua',
          children: [
            {
              name: '题库管理',
              url: '/questionBankManage'
            },
            {
              name: '作业管理',
              url: '/assignmentManage'
            },
            {
              name: '试卷管理',
              url: '/testQuestionManage'
            },
            {
              name: '视频库',
              url: '/videoDatabase'
            },
            {
              name: '课程库',
              url: '/courseLibrary'
            }
          ]
        },
        {
          name: '实操考试',
          testBg: 'sideberIcon_06.png',
          sidebarShow: false,
          bgclass: 'icon-exam',
          children: [
            {
              name: '任务管理',
              url: '/taskManage'
            },
            {
              name: '考试管理',
              url: '/examManage'
            }
          ]
        },
        {
          name: '大赛认证',
          testBg: 'sideberIcon_07.png',
          sidebarShow: false,
          bgclass: 'icon-renzheng',
          children: [
            {
              name: '考试',
              url: '/exam'
            },
            {
              name: '证书',
              url: '/certificate'
            }
          ]
        },
        {
          name: '成绩查询',
          testBg: 'sideberIcon_08.png',
          sidebarShow: false,
          bgclass: 'icon-chengjichaxun',
          children: [
            {
              name: '查询',
              url: '/inquire'
            },
            {
              name: '成绩分布报表',
              url: '/scoreReport'
            }
          ]
        },
        {
          name: '操作录像',
          testBg: 'sideberIcon_09.png',
          sidebarShow: false,
          bgclass: 'icon-luxiangxian',
          children: [
            {
              name: '教学操作录像',
              url: '/teachingOperationVideo'
            },
            {
              name: '学员操作录像',
              url: '/studentOperationVideo'
            }
          ]
        },
        {
          name: '备份',
          testBg: 'sideberIcon_09.png',
          sidebarShow: false,
          bgclass: 'icon-beifen',
          url: '/backups'
        }
      ]
    }
  },

  methods: {
    /*
      sidebarShow (index) {
        var show = false
        if (this.menu[index].sidebarShow === true) show = true
        this.menu.map(o => o.sidebarShow = false)
        show === true ? this.menu[index].sidebarShow = false : this.menu[index].sidebarShow = true
        this.changeBackground = -1
        this.changeBlue = index
      },
    */
    switchTab (index) {
      let show = false
      this.menu.map(i => {
        if (i[index] !== index) {
          i.sidebarShow = false
        }
      })
      this.menu[index].sidebarShow = true
      show === true ? this.menu[index].sidebarShow = false : this.menu[index].sidebarShow = true
      this.changeBlue = index
      SystemParameter.CURRENTLY_SELECTED_INDEX = [index, -1]
    },
    defaultShow () {
      this.changeBlue = +SystemParameter.CURRENTLY_SELECTED_INDEX[0]
      this.changeBackground = +SystemParameter.CURRENTLY_SELECTED_INDEX[1]
      this.menu[+SystemParameter.CURRENTLY_SELECTED_INDEX[0]].sidebarShow = true
    },
    backColor (idx) {
      SystemParameter.CURRENTLY_SELECTED_INDEX[1] = this.changeBackground = idx
      SystemParameter.CURRENTLY_SELECTED_INDEX = SystemParameter.CURRENTLY_SELECTED_INDEX
    }
  },

  mounted () {
    this.defaultShow();
  }

}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.sidebar
  float left
  z-index 5
  width 14%
  height 100%
  min-width 150px
  background-color #eff4f8
  border-right 1px solid $borderColor

.stair
  height 100%

  > li
    width 100%
    font-size 16px
    line-height 48px

    div
      width 100%
      height 48px
      cursor pointer

      &.router-link-exact-active
        color #1b7dc2
        background-color #e2e7ec

    i
      display inline-block
      margin-right 5%
      margin-left 8%
      width 30px
      height 48px
      vertical-align middle
      text-align center
      font-size 22px

.blue
  color #1b7dc2
  background-color #e2e7ec

.second_level
  width 100%

  li
    width 100%
    height 48px
    font-size 14px
    line-height 48px

    a
      display block
      padding-left 30%
      width 100%
      height 100%

    &.active

      a
        background-color #1b7dc2
        color #fff

      .circle
        background-color #fff

    .circle
      display inline-block
      margin-right 1%
      margin-bottom 3px
      width 5px
      height 5px
      border-radius 50%
      background-color #999

</style>

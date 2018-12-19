<template>
  <div class="sidebar">
    <ul class="stair">
      <li v-for="(item,index) in menu" :key="index">
        <div @click="switchTab(index)" :class="{blue:changeBlue === index}">
          <i class="icon iconfont" :class="item.bgclass"></i>{{item.name}}
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
              name: '21',
              url: '/'
            },
            {
              name: '22',
              url: '/'
            }
          ]
        },
        {
          name: '远程群控',
          testBg: 'sideberIcon_04.png',
          sidebarShow: false,
          bgclass: 'icon-jiankong',
          children: [
            {
              name: '21',
              url: '/'
            },
            {
              name: '22',
              url: '/'
            }
          ]
        },
        {
          name: '理论教学',
          testBg: 'sideberIcon_05.png',
          sidebarShow: false,
          bgclass: 'icon-jiaoxuejihua',
          children: [
            {
              name: '21',
              url: '/'
            },
            {
              name: '22',
              url: '/'
            }
          ]
        },
        {
          name: '实体考试',
          testBg: 'sideberIcon_06.png',
          sidebarShow: false,
          bgclass: 'icon-exam',
          children: [
            {
              name: '21',
              url: '/'
            },
            {
              name: '22',
              url: '/'
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
              name: '21',
              url: '/'
            },
            {
              name: '22',
              url: '/'
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
              name: '21',
              url: '/'
            },
            {
              name: '22',
              url: '/'
            }
          ]
        },
        {
          name: '操作对象',
          testBg: 'sideberIcon_09.png',
          sidebarShow: false,
          bgclass: 'icon-luxiangxian',
          children: [
            {
              name: '21',
              url: '/'
            },
            {
              name: '22',
              url: '/'
            }
          ]
        },
        {
          name: '备份',
          testBg: 'sideberIcon_09.png',
          sidebarShow: false,
          bgclass: 'icon-beifen'
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
      this.changeBackground = -1
      this.changeBlue = index
    },
    defaultShow () {
      this.changeBackground = 1
      this.changeBlue = 1
      this.menu[1].sidebarShow = true
    },
    backColor (idx) {
      this.changeBackground = idx
    }
  },

  mounted () {
    this.defaultShow()
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
  border-right 1px solid $lightGray

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

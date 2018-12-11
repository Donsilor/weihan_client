<template>
  <div class="sidebar">
    <ul class="stair">
      <li>
        <i class="firstI icon iconfont icon-gailan"></i>概述
      </li>
      <li v-for="(item,index) in menu" :value="index" :key="index">
        <div  @click="sidebarShow(index)" :class="{blue:changeBlue == index}">
          <i class="icon iconfont" :class="item.bgclass"></i>{{item.name}} 
        </div>
        <ul class="second_level" v-show="item.sidebarShow">
          <li v-for="(ite,idx) in item.children" :value="idx" :key="idx" :class="{active:changeBackground == idx}" @click="backColor(idx)">
            <router-link :to="ite.url">
              <span class="circle"></span>
              {{ite.name}}
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <i class="icon iconfont icon-tuichuzhanghao"></i>备份
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      classname:'',
      changeBlue: -1,
      changeBackground: -1,
      bgColor: false,
      menu: [
        {
          name: "基本信息",
          sidebarShow:false,
          bgclass: "icon-jibenxinxi",
          children: [
            {
              name: "学校信息",
              url:'/school_inf'
            },
            {
              name: "服务类别",
              url:'/service_category'
            },
            {
              name: "人员信息",
              url:'/school_inf'
            },
            {
              name: "班级信息",
              url:'/school_inf'
            },
            {
              name: "组别信息",
              url:'/school_inf'
            }
          ]
        },
        {
          name: "竞赛功能",
          testBg: "sideberIcon_03.png",
          sidebarShow:false,
          bgclass: "icon-gongneng",
          children: [
            {
              name: "21",
              url:'/school_inf'
            },
            {
              name: "22",
              url:'/school_inf'
            }
          ]
        },
        {
          name: "远程群控",
          testBg: "sideberIcon_04.png",
          sidebarShow:false,
          bgclass: "icon-jiankong",
          children: [
            {
              name: "21",
              url:'/school_inf'
            },
            {
              name: "22",
              url:'/school_inf'
            }
          ]
        },
        {
          name: "理论教学",
          testBg: "sideberIcon_05.png",
          sidebarShow:false,
          bgclass: "icon-jiaoxuejihua",
          children: [
            {
              name: "21",
              url:'/school_inf'
            },
            {
              name: "22",
              url:'/school_inf'
            }
          ]
        },
        {
          name: "实体考试",
          testBg: "sideberIcon_06.png",
          sidebarShow:false,
          bgclass: "icon-exam",
          children: [
            {
              name: "21",
              url:'/school_inf'
            },
            {
              name: "22",
              url:'/school_inf'
            }
          ]
        },
        {
          name: "大赛认证",
          testBg: "sideberIcon_07.png",
          sidebarShow:false,
          bgclass: "icon-renzheng",
          children: [
            {
              name: "21",
              url:'/school_inf'
            },
            {
              name: "22",
              url:'/school_inf'
            }
          ]
        },
        {
          name: "成绩查询",
          testBg: "sideberIcon_08.png",
          sidebarShow:false,
          bgclass: "icon-chengjichaxun",
          children: [
            {
              name: "21",
              url:'/school_inf'
            },
            {
              name: "22",
              url:'/school_inf'
            }
          ]
        },
        {
          name: "操作对象",
          testBg: "sideberIcon_09.png",
          sidebarShow:false,
          bgclass: "icon-luxiangxian",
          children: [
            {
              name: "21",
              url:'/school_inf'
            },
            {
              name: "22",
              url:'/school_inf'
            }
          ]
        }
      ]
    };
  },
  methods: {
    sidebarShow(index) {
      var show = false;
      if(this.menu[index].sidebarShow == true)show = true;
      this.menu.map(o => o.sidebarShow = false);
      show == true ? this.menu[index].sidebarShow = false : this.menu[index].sidebarShow = true ;
      this.changeBackground = -1;
      this.changeBlue = index;
    },
    defaultShow() {
      this.changeBackground = 0;
      this.changeBlue = 0;
      this.menu[0].sidebarShow = true;
    },
    backColor(idx) {
      this.changeBackground = idx;
    }
  },
  mounted() {
    this.defaultShow();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="sidebar">
    <ul class="stair">
      <li>
        <i></i>概述
      </li>
      <!-- <li>
          <i></i>概述
          <ul class="second_level">
              <li>11</li>
              <li>22</li>
              <li>33</li>
          </ul>
      </li>
      <li>
          <i></i>概述
          <ul class="second_level">
              <li>12</li>
              <li>13</li>
              <li>14</li>
          </ul class="second_level">
      </li>
      <li>
          <i></i>概述
          <ul class="second_level">
              <li>66</li>
              <li>77</li>
              <li>88</li>
          </ul>
      </li> -->
      <li v-for="(item,index) in menu" :value="index" :key="index" @click="sidebarShow = !sidebarShow">
        <!-- <i :style="{ background: 'url(' + require('../assets/images/'+ item.testBg ? item.testBg : bgDef) + ') no-repeat center center', backgroundSize: '100% 100%'}" :value="index" :key="index"></i>{{item.name}} -->
        <i :style="{ 'background': 'url(' + require('../assets/images/'+ item.testBg) + ') no-repeat center center', 'background-size': '100% 100%'}" :value="index" :key="index"></i>{{item.name}}
        <ul class="second_level" v-if="sidebarShow">
          <li v-for="(ite,idx) in item.children" :value="idx" :key="idx">
            <a href="#">{{ite.name}}</a>
          </li>
        </ul>
      </li>
      <li>
        <i></i>备份
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      bgDef: "sideberIcon_02.png",
      sidebarShow:false,
      menu: [
        {
          name: "基本信息",
          testBg: "sideberIcon_02.png",
          bor:"5px solid green",
          // note: {
            // backgroundImage: "url(" + require("../assets/images/sideberIcon_02.png") + ")",
            // backgroundImage: "url(" + require("../../assets/save.png") + ")",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "25px auto",
            // marginTop: "5px",
          // },
          children: [
            {
              name: "11"
            },
            {
              name: "12"
            }
          ]
        },
        {
          name: "竞赛功能",
          children: [
            {
              name: "21"
            },
            {
              name: "22"
            }
          ]
        },
        {
          name: "远程群控",
          children: [
            {
              name: "21"
            },
            {
              name: "22"
            }
          ]
        },
        {
          name: "理论教学",
          children: [
            {
              name: "21"
            },
            {
              name: "22"
            }
          ]
        },
        {
          name: "实体考试",
          children: [
            {
              name: "21"
            },
            {
              name: "22"
            }
          ]
        },
        {
          name: "大赛认证",
          children: [
            {
              name: "21"
            },
            {
              name: "22"
            }
          ]
        },
        {
          name: "成绩查询",
          children: [
            {
              name: "21"
            },
            {
              name: "22"
            }
          ]
        },
        {
          name: "操作对象",
          children: [
            {
              name: "21"
            },
            {
              name: "22"
            }
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  padding-top: 70px;
  background-color: #eff4f8;
}
.stair {
  width: 100%;
  height: 100%;
}
.stair > li {
  width: 100%;
  /* height: 48px; */
  border-bottom: 1px solid #f00;
  font-size: 16px;
  line-height: 48px;
  /* vertical-align: middle; */
}
.stair > li i {
  display: inline-block;
  height: 48px;
  width: 30px;
  margin-left: 8%;
  margin-right: 5%;
  vertical-align: middle;
  /* background: url(../assets/images/sideberIcon_02.png) no-repeat 50% 44%/80%; */
}
.second_level{
    width: 100%;
    border-top: 1px solid red;
}
.second_level li{
    height: 48px;
    width: 100%;
    padding-left: 40%;
    font-size: 14px;
    line-height: 48px;
}
</style>

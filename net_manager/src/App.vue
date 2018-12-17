<template>
  <div id="app">
    <el-container :style="{'height': `${$window_heigh}px`}">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu 
        :router="true"
        :efault-active="$SystemParameter.CURRENTLY_SELECTED_PATH"
        >
          <el-submenu v-for="(item, index) in menus" :key="index" :index="String(index)">
            <template slot="title">
              <i class="el-icon-message"></i>{{item.name}}
            </template>
            <el-menu-item-group v-if="item.children.length">
              <el-menu-item v-for="(subItem, subIndex) in item.children" :key="subIndex" :index="String(subItem.path||index)">{{subItem.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {array2Descendants} from "./common/utils"
import {User, SystemParameter} from "./common/entity"
export default {
  name: 'App',
  data(){
    return {
      menus : array2Descendants([
        {id:1, pid:0, name:"测试菜单"},
        {id:2, pid:0, name:"一级菜单"},
        {id:3, pid:1, name:"二级菜单"},
        {id:4, pid:1, name:"实操考试", path:"/"},
        {id:5, pid:1, name:"二级菜单"},
        {id:6, pid:2, name:"二级菜单"},
        {id:7, pid:2, name:"二级菜单"},
        {id:8, pid:2, name:"二级菜单"},
        {id:9, pid:2, name:"二级菜单"},
        {id:10, pid:12, name:"一级菜单"},
        {id:11, pid:12, name:"二级菜单"},
        {id:12, pid:0, name:"二级菜单"},
        {id:13, pid:12, name:"一级菜单"},
        {id:14, pid:12, name:"一级菜单"},
        {id:15, pid:12, name:"一级菜单"},
      ])
    }
  },
  computed: {
  },
  mounted(){
  }
}
</script>

<style scoped>

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>


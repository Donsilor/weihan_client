
<template>
  <div id="app">
      <!-- 路由中的几个组件在这里被渲染，默认被渲染的为第一个组件 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "assets/css/base.css";
@import 'element-ui/lib/theme-chalk/index.css';
@import 'assets/iconfont/iconfont.css';
</style>

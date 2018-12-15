
<template>
  <div id="app">
    <!-- 路由中的几个组件在这里被渲染，默认被渲染的为第一个组件 -->
    <!-- <router-view/> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- 这里是不被缓存的视图组件-->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "assets/css/base.css";
</style>

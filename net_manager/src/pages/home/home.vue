<template>
  <div class="home">
    <common-header></common-header>
    <div class="wrap">
      <common-sidebar></common-sidebar>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from 'components/header/Header'
import commonSidebar from 'components/sidebar/Sidebar'

export default {
  name: 'home',
  components: {
    commonHeader,
    commonSidebar
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  height calc(100vh - 72px)

.main
  float right
  width 86%
</style>

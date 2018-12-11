// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入需要验证项目类型
import '@/common/validate'
import api from '@/common/md_axios'
import interfaces from '@/common/interfaces'
import { MessageBox, InfiniteScroll } from "mint-ui";
import global from '@/common/global'
//导入iconfont全局样式
import '@/assets/iconfont/iconfont.css'
//导入适配rem
import remconfig from '@/assets/js/rem'
// element 移动ui
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import "vue-video-player/src/custom-theme.css"
import 'videojs-contrib-hls'

remconfig();


Vue.prototype.$api = api;
Vue.prototype.$infs = interfaces;
Vue.prototype.$glb = global;
Vue.prototype.$msgbox = MessageBox;
Vue.config.productionTip = false;
Vue.use(VueVideoPlayer)
// 无限滚动加载
Vue.use(InfiniteScroll)

router.beforeEach((to, from, next) => {
  /* 页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  /* 判断该路由是否需要登录权限 */
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!global.token) {//是否登录      
      next({
        path: '/',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  next();
})
/* eslint-disable no-new */
// 页面入口

// Vue.use(MintUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
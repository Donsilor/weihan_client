// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 导入需要验证项目类型
import '@/common/validate'
import api from '@/common/md_axios'
import interfaces from '@/common/interfaces'
import global from '@/common/global'
import element from 'element-ui'
// import '@/assets/iconfont/iconfont.css'

Vue.prototype.$api = api;
Vue.prototype.$infs = interfaces;
Vue.prototype.$glb = global;
Vue.use(element);
Vue.config.productionTip = false;

/* eslint-disable no-new */
// 页面入口
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import {User} from "./common/entity"
import api from "./common/sereviceapi"
///////////////////////////////////////////////////////
import 'jquery'
//////////////////////////////////////////////////////////////////
import '@/assets/css/base.css'
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
////////////////////////////////////////////



/////////////////////////////
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$api = api;
/////////////////////////////////////////////////////////////////////
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    if (User.IS_TOKEN_EFFECTIVE == 0) {  // 判断当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'



import home from '@/pages/home'
import school_inf from'@/pages/basicinformation/school_inf'
import service_category from'@/pages/basicinformation/service_category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'home',
      component: home,
      redirect:'/school_inf',
      children:[
        { 
          path: '/school_inf', 
          name:'school_inf',
          component:school_inf, 
          meta: {
             title: '学校信息',
              requireAuth: true 
        }
       },
        { 
          path: '/service_category', 
          name:'service_category',
          component:service_category, 
          meta: {
             title: '服务类别',
              requireAuth: true 
        }
      }


      ]
    },

  ]
})

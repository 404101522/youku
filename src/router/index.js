import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'home',
      component:()=>import ('@/pages/home/Home')   //懒加载
     },
     {
      path: '/list',
      name:'list',
      component:()=>import ('@/pages/list/List')
     },
  ]
})

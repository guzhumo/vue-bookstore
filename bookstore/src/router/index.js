import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import Detail from '@/components/Detail'
import List from '@/components/List'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Add',
      component: Add
    },
    {
      path: '/List',
      component: List
    },
    {
      path: '/Detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})

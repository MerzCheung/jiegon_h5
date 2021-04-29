import Vue from 'vue'
import Router from 'vue-router'
import IndexBar from '@/components/IndexBar'
import CarClass from '@/components/CarClass'
import CarClassList from '@/components/CarClassList'
import Accumulator from '@/components/Accumulator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexBar',
      component: IndexBar
    },
    {
      path: '/carClass',
      name: 'CarClass',
      component: CarClass
    },
    {
      path: '/carClassList',
      name: 'CarClassList',
      component: CarClassList
    },
    {
      path: '/accumulator',
      name: 'Accumulator',
      component: Accumulator
    }
  ]
})

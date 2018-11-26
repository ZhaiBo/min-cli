import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Bar from '../components/common/bar'

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/bar'
    },
    {
      name: 'bar',
      path: '/bar',
      component: Bar
    }
  ]
})

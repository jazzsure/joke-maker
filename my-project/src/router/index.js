import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/world'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/world',
      name: 'World',
      component: World
    },
    {
      path: '/login',
      name: 'login',
      component: require('../container/login/index.vue')
    },
    {
      path: '*',
      name: 'login',
      component: require('../container/login/index.vue')
    }
  ]
})

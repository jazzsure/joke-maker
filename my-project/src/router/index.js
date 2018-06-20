// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import World from '@/components/world'
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/Hello',
//       name: 'Hello',
//       component: Hello
//     },
//     {
//       path: '/world',
//       name: 'World',
//       component: World
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: require('../container/login/index.vue')
//     },
//     {
//       path: '*',
//       name: 'default',
//       component: require('../container/login/index.vue')
//     }
//   ]
// })

//带懒加载的router写法
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('../pages/Main')), 'Main')
    },
    {
      path: '*',
      component: r => require.ensure([], () => r(require('../pages/Main')), 'Main')
    }
  ]
})

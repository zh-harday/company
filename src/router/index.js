import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../views/index.vue'], resolve)
    },
    {
      path: '/product',
      name: 'product',
      component: resolve => require(['../views/product.vue'], resolve)
    },
    {
      path: '/service',
      name: 'service',
      component: resolve => require(['../views/service.vue'], resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['../views/about.vue'], resolve)
    },
    {
      path: '/download',
      name: 'download',
      component: resolve => require(['../views/download.vue'], resolve)
    }
  ]
})

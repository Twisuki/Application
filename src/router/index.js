// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Docs from '@/views/Docs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
    meta: {
      title: '文档中心'
    }
  },
  {
    path: '/docs/:id',
    name: 'DocDetail',
    component: DocDetail,
    meta: {
      title: '文档详情'
    },
    props: true
  },
  // 404 页面
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// 动态修改页面标题
router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | 我的文档站`
  }
})

export default router

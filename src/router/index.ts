import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: '首页',
        showInNavbar: true,
        showSidebar: false,
      },
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue'),
      meta: {
        title: '新闻',
        showInNavbar: true,
        showSidebar: true,
      },
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/Notice.vue'),
      meta: {
        title: '通知',
        showInNavbar: true,
        showSidebar: true,
      },
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/Docs.vue'),
      meta: {
        title: '指南',
        showInNavbar: true,
        showSidebar: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        title: '关于',
        showInNavbar: true,
        showSidebar: false,
      },
    },
  ],
})

export default router

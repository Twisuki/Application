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
      path: '/graduate',
      name: 'graduate',
      component: () => import('../views/Graduate.vue'),
      meta: {
        title: '毕业',
        showInNavbar: true,
        showSidebar: true,
      },
    },
    {
      path: '/study',
      name: 'study',
      component: () => import('../views/Study.vue'),
      meta: {
        title: '学业',
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
      path: '/life',
      name: 'life',
      component: () => import('../views/Life.vue'),
      meta: {
        title: '生活',
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

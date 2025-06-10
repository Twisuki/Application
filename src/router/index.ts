import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue'),
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/Notice.vue'),
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/Docs.vue'),
    },
  ],
})

export default router

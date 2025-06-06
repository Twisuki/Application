import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Docs from '@/views/Docs.vue'
import DocDetail from '@/views/DocDetail.vue' // 必须导入

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
    meta: { title: '文档中心' }
  },
  {
    path: '/docs/:id',
    name: 'DocDetail',
    component: DocDetail, // 使用已导入的组件
    meta: { title: '文档详情' },
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} | 我的文档站`
    : '我的文档站'
})

export default router

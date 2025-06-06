// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store' // 如果使用 Vuex
import { createPinia } from 'pinia' // 如果使用 Pinia

// 全局样式
import '@/assets/css/main.css'

// 创建应用实例
const app = createApp(App)

// 使用路由
app.use(router)

// 使用状态管理 (二选一)
// Vuex 版本
// app.use(store)
// 或 Pinia 版本
const pinia = createPinia()
app.use(pinia)

// 全局组件注册示例 (如需)
// import MyComponent from '@/components/MyComponent.vue'
// app.component('MyComponent', MyComponent)

// 全局指令示例 (如需)
// app.directive('focus', {
//   mounted(el) {
//     el.focus()
//   }
// })

// 挂载应用
app.mount('#app')

// 开发环境调试
if (import.meta.env.MODE === 'development') {
  window.__APP__ = app // 方便控制台调试
  console.log('App initialized in development mode')
}

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from "@/stores/theme.ts";

const router = useRouter()
const thisRoute = useRoute()

const pages = computed(() => {
  return router.options.routes
    .filter(route => !!route.meta?.showInNavbar)
    .map(route => ({
      page: route.meta?.title,
      name: route.name,
      url: route.path,
      active: route.name === thisRoute.name,
    }))
})

// 下拉列表
const isNavActive = ref(false)

function toggleNavActive() {
  isNavActive.value = !isNavActive.value
}

// 昼夜切换
const theme = useThemeStore()
</script>

<template>
  <div id="navbar">
    <div id="nav-start">
      <a href="/">
        <img src="/favicon.ico" alt="icon"/>
      </a>
      <span>机器人学院<br/>学生手册</span>
    </div>
    <div id="nav-center" :class="{ active: isNavActive }">
      <div class="nav-center-item" v-for="page in pages">
        <a :href="page.url" class="underline" :class="{'active': page.active}">{{ page.page }}</a>
      </div>
    </div>
    <div id="nav-end">
      <div class="nav-end-item" id="nav-end-toggle" @click="toggleNavActive"
           :class="{ active: isNavActive }">
        <span id="nav-end-toggle-1"></span>
        <span id="nav-end-toggle-2"></span>
        <span id="nav-end-toggle-3"></span>
      </div>
      <div class="nav-end-item" id="nav-end-theme" @click="theme.toggleTheme"
           :class="{ dark: theme.mode === 'dark'}">
        <svg id="nav-end-theme-day" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M11 5V1h2v4zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425zM19 13v-2h4v2zm-8 10v-4h2v4zM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75zM1 13v-2h4v2zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-4"/>
        </svg>
        <svg id="nav-end-theme-night" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M13.1 23h-2.6l.5-.312q.5-.313 1.088-.7t1.087-.7l.5-.313q2.025-.15 3.738-1.225t2.712-2.875q-2.15-.2-4.075-1.088t-3.45-2.412t-2.425-3.45T9.1 5.85Q7.175 6.925 6.088 8.813T5 12.9v.3l-.3.138q-.3.137-.663.287t-.662.288l-.3.137q-.05-.275-.062-.575T3 12.9q0-3.65 2.325-6.437T11.25 3q-.45 2.475.275 4.838t2.5 4.137t4.138 2.5T23 14.75q-.65 3.6-3.45 5.925T13.1 23M6 21h4.5q.625 0 1.063-.437T12 19.5t-.425-1.062T10.55 18h-1.3l-.5-1.2q-.35-.825-1.1-1.312T6 15q-1.25 0-2.125.863T3 18q0 1.25.875 2.125T6 21m0 2q-2.075 0-3.537-1.463T1 18t1.463-3.537T6 13q1.5 0 2.738.813T10.575 16Q12 16.05 13 17.063t1 2.437q0 1.45-1.025 2.475T10.5 23z"/>
        </svg>
      </div>
      <div class="nav-end-item" id="nav-end-search">
        <label for="nav-end-search-input">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"
               class="DocSearch-Search-Icon">
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
        </label>
        <input type="text" id="nav-end-search-input" placeholder="搜索文档"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
#navbar {
  width: 100vw;
  height: var(--navbar-height);
  position: fixed;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  background-color: var(--navbar-bgc);
  left: 0;
  right: 0;
  top: 0;
  box-shadow: 0 -0.5rem 0.25rem 0.5rem #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: var(--navbar-z-index);
}

#nav-start {
  display: flex;
  justify-content: left;
  align-items: center;
}

#nav-start img {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  display: block;
}

#nav-start span {
  margin-left: 1rem;
}

#nav-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-center-item {
  margin: 0 1rem 0 1rem;
}

.nav-center-item a:link, .nav-center-item a:visited {
  color: var(--text-dark);
}

.nav-center-item a.active {
  position: relative;
}

a.active::after {
  width: 100%;
}

#nav-end {
  display: flex;
  justify-content: right;
  align-items: center;
}

.nav-end-item {
  margin: 0 1rem 0 1rem;
  justify-items: center;
}

/* 展开按钮 */
#nav-end-toggle {
  display: none;
}

/* 昼夜切换 */
#nav-end-theme {
  width: calc(2.5rem + 4px);
  height: calc(1rem + 4px);
  padding: 1px;
  background-color: var(--text-gray);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

#nav-end-theme svg {
  width: 1rem;
  height: 1rem;
  padding: 1px;
  border-radius: calc(0.5rem + 1px);
  background-color: var(--text-light);
  transition: transform 0.2s ease;
  display: block;
}

#nav-end-theme:hover {
  border: 1px solid var(--text-dark-gray);
}

#nav-end-theme-day {
  transform: none;
  z-index: 1;
  transition: transform 0.2s ease, z-index 0.2s ease;
}

#nav-end-theme-night {
  transform: translateX(calc(-1.5rem - 1px)) rotate(-90deg);
  z-index: 0;
  transition: transform 0.2s ease, z-index 0.2s ease;
}

#nav-end-theme.dark #nav-end-theme-day {
  transform: translateX(calc(1.5rem + 1px)) rotate(90deg);
  z-index: 0;
}

#nav-end-theme.dark #nav-end-theme-night {
  transform: none;
  z-index: 1;
}

/* 搜索框 */
#nav-end-search {
  height: 2rem;
  width: 10rem;
  border-radius: 1rem;
  background-color: var(--text-gray);
}

#nav-end-search svg {
  margin-top: calc(1rem - 10px);
  margin-left: calc(1rem - 10px);
}

#nav-end-search-input {
  width: 8rem;
  height: 2rem;
  color: var(--text-dark);
  position: absolute;
  border: none;
  background-color: transparent
}

@media only screen and (max-width: 768px) {
  #navbar {
    padding: 0.5rem;
  }

  #nav-start span {
    display: none;
  }

  #nav-center {
    display: none;
  }

  /* 展开按钮 */
  #nav-end-toggle {
    display: block;
    height: 2rem;
    width: 2rem;
    position: relative;
  }

  #nav-end-toggle span {
    height: 4px;
    border-radius: 2px;
    background-color: var(--text-dark-gray);
    display: block;
    position: absolute;
    right: 0;
  }

  #nav-end-toggle-1 {
    width: 1rem;
    top: calc(0.5rem - 2px);
    transition: top 0.2s ease, rotate 0.2s ease;
  }

  #nav-end-toggle-2 {
    width: 1.5rem;
    top: calc(1rem - 2px);
    transition: right 0.2s ease, opacity 0.2s ease;
  }

  #nav-end-toggle-3 {
    width: 0.75rem;
    top: calc(1.5rem - 2px);
    transition: top 0.2s ease, rotate 0.2s ease;
  }

  #nav-end-toggle.active #nav-end-toggle-1 {
    width: 1.5rem;
    top: calc(1rem - 2px);
    rotate: -45deg;
  }

  #nav-end-toggle.active #nav-end-toggle-2 {
    right: -2rem;
    opacity: 0;
  }

  #nav-end-toggle.active #nav-end-toggle-3 {
    width: 1.5rem;
    top: calc(1rem - 2px);
    rotate: 45deg;
  }

  /* 展开内容 */
  #nav-center.active {
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    width: 100vw;
    padding: 2rem 0;
    background-color: var(--text-light);
    display: flex;
    flex-direction: column;
  }

  .nav-center-item {
    width: 80vw;
    height: 2rem;
    line-height: 2rem;
    border-bottom: 2px solid var(--text-gray);
  }

  .nav-center-item a.active {
    color: var(--a-underline-color);
  }

  .nav-center-item a::after {
    display: none;
  }
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

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

const isNavToggleActive = ref(false)

function toggleNavActive() {
  isNavToggleActive.value = !isNavToggleActive.value
}
</script>

<template>
  <div id="navbar">
    <div id="nav-start">
      <a href="/">
        <img src="/favicon.ico" alt="icon"/>
      </a>
      <span>机器人学院<br/>学生手册</span>
    </div>
    <div id="nav-center">
      <div class="nav-center-item" v-for="page in pages">
        <a :href="page.url" class="underline" :class="{'active': page.active}">{{ page.page }}</a>
      </div>
    </div>
    <div id="nav-end">
      <div class="nav-end-item" id="nav-end-toggle" @click="toggleNavActive"
           :class="{ active: isNavToggleActive }">
        <span id="nav-end-toggle-1"></span>
        <span id="nav-end-toggle-2"></span>
        <span id="nav-end-toggle-3"></span>
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
    background-color: var(--text-gray);
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
}
</style>

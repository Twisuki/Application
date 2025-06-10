<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pages = computed(() => {
  return router.options.routes
    .filter(route => !! route.meta?.showInNavbar)
    .map(route => ({
      page: route.meta?.title,
      url: route.path
    }))
})
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
      <div class="nav-center-item" v-for="page in pages" :id="page.page">
        <a :href="page.url" class="underline">{{ page.page }}</a>
      </div>
    </div>
    <div id="nav-end">
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
  color: #000000;
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

#nav-end-search {
  height: 2rem;
  width: 10rem;
  border-radius: 1rem;
  background-color: #aaaaaa;
}

#nav-end-search svg {
  margin-top: calc(1rem - 10px);
  margin-left: calc(1rem - 10px);
}

#nav-end-search-input {
  width: 8rem;
  height: 2rem;
  color: #222222;
  position: absolute;
  border: none;
  background-color: transparent
}
</style>

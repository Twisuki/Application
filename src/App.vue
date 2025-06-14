<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import SideBar from '@/components/layout/SideBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const route = useRoute()

const showSidebar = computed(() => {
  return route.meta?.showSidebar
})
</script>

<template>
  <div class="app">
    <NavBar class="nav-bar"/>

    <div class="main-content">
      <SideBar v-if="showSidebar"/>
      <router-view/>
    </div>

    <AppFooter class="app-footer"/>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  max-width: 1280px;
  margin-top: calc(var(--navbar-height) + 0.5rem);
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  font-weight: normal;
}
</style>

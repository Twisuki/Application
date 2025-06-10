<script>
import NavBar from '@/components/layout/NavBar.vue'
import SideBar from '@/components/layout/SideBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  components: {NavBar, SideBar, AppFooter},
  computed: {
    showSidebar () {
      return this.$route.meta?.showSidebar
    }
  }
}
</script>

<template>
  <div class="app">
    <NavBar class="nav-bar"/>

    <div class="main-content">
      <SideBar v-if="showSidebar"/>
      <router-view class="page-content"/>
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
</style>

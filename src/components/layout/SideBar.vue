<script setup lang="ts">

</script>

<template>
  <div id="sidebar">
    <div id="sidebar-container">

    </div>
    <div id="sidebar-toggle">

    </div>
  </div>
</template>

<style scoped>
#sidebar {
  width: var(--sidebar-width);
  height: calc(100% - var(--navbar-height));
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  background-color: var(--sidebar-bgc);
  z-index: var(--sidebar-z-index);
}

#sidebar::after {
  content: '';
  width: calc(100% - var(--sidebar-width));
  height: calc(100% - var(--navbar-height));
  position: fixed;
  top: var(--navbar-height);
  right: 0;
  background-color: var(--sidebar-backdrop-bgc);
}
</style>
